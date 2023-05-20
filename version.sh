#!/bin/bash
set -e

# Get the new version from Lerna
version=$(lerna changed --json | jq -r '.[0].newVersion')

# Update the version in the root package.json
jq --arg version "$version" '.version = $version' package.json > package.json.tmp
mv package.json.tmp package.json

# Commit the updated package.json
git add package.json
git commit -m "chore: Bump version to $version"
