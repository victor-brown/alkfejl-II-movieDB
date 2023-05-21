# Követelményspecifikáció

=======

## 1. Vezetői összefoglaló

- Egy open-source film API létrehozása hallgatói munkák támogatásához. Az API egy 1 hónapig érvényes API Kulccsal használható. Lehetőség van több száz film adatainak listázására, egyes filmek részleteinek lekérdezésére, rendezők, színészek és zsánerek lekérdezésére.
- A RESTFUL API szolgáltatást szeretnénk létrehozni.
- A minél nagyobb támogatottság és a gyors lekérdezések támogatása véget SQL alapú adatbázist szeretnénk használni.

## 2. Jelenlegi helyzet leírása

A jelenlegi legnépszerűbb online elérhető film-információkat tartalmazó weboldal az IMDB, sajnos azonban ennek a weboldalnak nincsen elérhető ingyenes API-ja, amivel hallgatók a beadandó feladataikon tudnának dolgozni.

## 3. Vágyálomrendszer leírása

A cél egy ingyenesen használható, open-source, RESTFUL API létrehozása, amely támogatja az alapvető CRUD műveleteket a következő témákhoz: Filmek, Film, Színészek, Rendezők, Zsánerek.
Az open-source kivitelezésnek köszönhetően, remélhetőleg a jövőben ennél részletesebb támogatást tud majd az API szolgáltatásunk nyújtani, de a cél, hogy egy jól működő alapot elkészítsünk, amire később könnyen és hatékonyan lehet építeni. Emiatt fontos a jól skálázhatóság és a robosztusság.

## 4. Funkcionális követelmények átfogó felsorolása

- Filmek
  - Create `[POST] 127.0.0.1:5555/movies/create`
    - apiKey
    - title
    - year
    - imageUrl
    - certificate
    - runtime
    - imdbRating
    - description
  - Read `[GET] 127.0.0.1:5555/movies`
  - Read one `[GET] 127.0.0.1:5555/movies/:id`
  - Update `[POST] 127.0.0.1:5555/movies/update/:id`
    - apiKey
    - title
    - year
    - imageUrl
    - certificate
    - runtime
    - imdbRating
    - description
  - Delete `[DELETE] 127.0.0.1:5555/:id`
    - apiKey
- Film Részletek
  - Read `[GET] 127.0.0.1:5555/movies/:id`
- Zsánerek
  - Create `[POST] 127.0.0.1:5555/genres/create`
    - apiKey
    - name
  - Read `[GET] 127.0.0.1:5555/genres`
  - Read one `[GET] 127.0.0.1:5555/genres/:id`
  - Update `[POST] 127.0.0.1:5555/genres/update/:id`
    - apiKey
    - name
  - Delete `[DELETE] 127.0.0.1:5555/genres/:id`
    - apiKey
- Színészek
  - Create `[POST] 127.0.0.1:5555/stars/create`
    - apiKey
    - name
    - about
  - Read `[GET] 127.0.0.1:5555/stars`
  - Read One `[GET] 127.0.0.1:5555/stars/:id`
  - Update `[POST] 127.0.0.1:5555/stars/update/:id`
    - apiKey
    - name
    - about
  - Delete `[DELETE] 127.0.0.1:5555/stars/delete/:id`
    - apiKey
- Rendezők
  - Create `[POST] 127.0.0.1:5555/directors/create`
    - apiKey
    - name
    - about
  - Read `[GET] 127.0.0.1:5555/directors`
  - Read One `[GET] 127.0.0.1:5555/directors/:id`
  - Update `[POST] 127.0.0.1:5555/directors/update/:id`
    - apiKey
    - name
    - about
  - Delete `[DELETE] 127.0.0.1:5555/directors/delete/:id`
    - apiKey
- Api kulcsok
  - Read `[GET] 127.0.0.1:5555/apikey`

## 7. Követelménylista

| Modul     | Verzió | Név                                                                  | Kifejtés                                                                                                               |
| --------- | ------ | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Adatbázis | V1.0   | Api kulcsok tárolása                                                 | Adatbázis a generálandó API kulcsok tárolására                                                                         |
| API       | V1.0   | GET végpont API kulcs generálásához                                  | Api kulcs generálása és mentés az adatbázisba                                                                          |
| Adatbázis | V2.0   | Zsánerek tárolása                                                    | Adatbázis a zsánerek tárolására.                                                                                       |
| Adatbázis | V3.0   | Színészek tárolása                                                   | Adatbázis a színészek tárolására.                                                                                      |
| Adatbázis | V4.0   | Rendezők tárolása                                                    | Adatbázis a rendezők tárolására.                                                                                       |
| Adatbázis | V5.0   | Filmek tárolása, összekötés a zsánerekkel, színészekkel, rendezőkkel | Adatbázis a filmek tárolására. A meglővő táblák összekapcsolása, hogy a komplex lekérdezések megvalósíthatóak legyenek |
| API       | V2.0   | CRUD műveletek a zsánerekhez                                         | Create,Read,Update,Delete műveletek/végpontok a zsánerekhez                                                            |
| API       | V3.0   | CRUD műveletek a színészekhez                                        | Create,Read,Update,Delete műveletek/végpontok a színészekhez                                                           |
| API       | V4.0   | CRUD műveletek a rendezőkhöz                                         | Create,Read,Update,Delete műveletek/végpontok a rendezőkhöz                                                            |
| API       | V5.0   | CRUD műveletek a filmekhez                                           | Create,Read,Update,Delete műveletek/végpontok a filmekhez                                                              |

=======
| ID | Modul | Verzió | Név | Kifejtés |
| ---- | --------- | ------ | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| DB0 | Adatbázis | V1.0 | Api kulcsok tárolása | Adatbázis a generálandó API kulcsok tárolására |
| API0 | API | V1.0 | GET végpont API kulcs generálásához | Api kulcs generálása és mentés az adatbázisba |
| DB1 | Adatbázis | V2.0 | Zsánerek tárolása | Adatbázis a zsánerek tárolására. |
| DB2 | Adatbázis | V3.0 | Színészek tárolása | Adatbázis a színészek tárolására. |
| DB3 | Adatbázis | V4.0 | Rendezők tárolása | Adatbázis a rendezők tárolására. |
| DB4 | Adatbázis | V5.0 | Filmek tárolása, összekötés a zsánerekkel, színészekkel, rendezőkkel | Adatbázis a filmek tárolására. A meglővő táblák összekapcsolása, hogy a komplex lekérdezések megvalósíthatóak legyenek |
| API1 | API | V2.0 | CRUD műveletek a zsánerekhez | Create,Read,Update,Delete műveletek/végpontok a zsánerekhez |
| API2 | API | V3.0 | CRUD műveletek a színészekhez | Create,Read,Update,Delete műveletek/végpontok a színészekhez |
| API3 | API | V4.0 | CRUD műveletek a rendezőkhöz | Create,Read,Update,Delete műveletek/végpontok a rendezőkhöz |
| API4 | API | V5.0 | CRUD műveletek a filmekhez | Create,Read,Update,Delete műveletek/végpontok a filmekhez |

## 9. Fogalomszótár

- **API**: Application Programmer Interface
- **CRUD**: Create, Read, Update, Delete műveletek támogatása
- **Endpoint/végpont**: Az az "URL", amit meghívva kérést indítunk az API szervernek
- # **URL**: Uniform Resource Locator, ("webcím")
