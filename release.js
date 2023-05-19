const fs = require("fs");
const { execSync } = require("child_process");

const root = ".";
const packageJsonName = "package.json";
const { version } = require(`${root}/lerna.json`);

const updateVersion = (file, version, json) => {
  json.version = version;

  return fs.writeFileSync(file, JSON.stringify(json, null, 2).concat("\n"), {
    encoding: "utf8",
    flag: "w",
  });
};

if (fs.existsSync(packageJsonName)) {
  const pName = require(`${root}/${packageJsonName}`);
  updateVersion(packageJsonName, version, pName);
}

execSync(`git add .`, (stdout, stderr) => {
  if (stdout) {
    console.log(stdout);
  }

  if (stderr) {
    console.error(stderr);
    process.exit(1);
  }
});

execSync(
  `git commit -m "chore(release): publish v${version}"`,
  (stdout, stderr) => {
    if (stdout) {
      console.log(stdout);
    }

    if (stderr) {
      console.error(stderr);
      process.exit(1);
    }
  }
);

execSync(`git push --atomic origin master`, (stdout, stderr) => {
  if (stdout) {
    console.log(stdout);
  }

  if (stderr) {
    console.error(stderr);
    process.exit(1);
  }
});
