# Test Report for Stars API Endpoints

## 1. Create `[POST] 127.0.0.1:5555/stars/create`:

### Test Case 1: Helyes kérés

- **Description**: Helyes paraméterekkel való tesztelés
- **Request**:
  POST /stars/create

  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Stars",
    "about": "This is a test star."
  }
  ```

- **Expected Response**:
  Status: 200 OK
  Body:
  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Stars",
    "about": "This is a test star."
  }
  ```

### Test Case 2: Hianyzo parameterek

- **Description**: Teszteles hianyzo parameterekkel
- **Request**:
  POST /stars/create
  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Stars"
  }
  ```
- **Expected Response**:
  Status: 400 Bad Request
  Body:

  ```json
  {
    "error": {
      "message": "<propery> is a required field!",
      "code": "BAD_REQUEST_ERROR"
    }
  }
  ```

## 2. Read `[GET] 127.0.0.1:5555/stars`:

### Test Case 1: Osszes zsáner lekerdezese

- **Description**: Összes zsáner lekérdezése
- **Request**:
  GET /stars

- **Expected Response**:

  Status: 200 OK
  Body:

  ```JSON
  {
    "stars": [
        {
            "id": "<stars_id_1>",
            "name": "Stars 1",
            "about": "Description of Stars 1."
        },
        {
            "id": "<star_id_2>",
            "name": "Stars 2",
            "about": "Description of Stars 2."
        }
    ]
  }
  ```

### Test Case 2: Specifikus zsáner lekerdezese

- **Description**: Specifikus zsáner lekérdezése
- **Request**:
  GET /stars/:id

- **Expected Response**:

  Status: 200 OK
  Body:

  ```JSON
  {
    "id": "<star_id_1>",
    "name": "Stars 1",
    "about": "Description of Stars 1."
  }
  ```

## 1. UPDATE `[POST] 127.0.0.1:5555/stars/update/:id`:

### Test Case 1: Helyes kérés

- **Description**: Helyes paraméterekkel való tesztelés
- **Request**:
  POST /stars/update/:id

  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Stars",
    "about": "This is a test star."
  }
  ```

- **Expected Response**:
  Status: 200 OK
  Body:
  ```json
  true
  ```

### Test Case 2: Hianyzo parameterek

- **Description**: Teszteles hianyzo parameterekkel
- **Request**:
  POST /stars/update/:id
  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Stars"
  }
  ```
- **Expected Response**:
  Status: 400 Bad Request
  Body:

  ```json
  {
    "error": {
      "message": "<propery> is a required field!",
      "code": "BAD_REQUEST_ERROR"
    }
  }
  ```

## 1. DELETE `[DELETE] 127.0.0.1:5555/stars/delete/:id`:

### Test Case 1: Helyes kérés

- **Description**: Helyes paraméterekkel való tesztelés
- **Request**:
  POST /stars/delete/:id

- **Expected Response**:
  Status: 200 OK
  Body:
  ```json
  true
  ```

### Test Case 2: Hianyzo parameterek

- **Description**: Teszteles hianyzo parameterekkel
- **Request**:
  POST /stars/delete/:id

- **Expected Response**:
  Status: 400 Bad Request
  Body:

  ```json
  {
    "error": {
      "message": "<propery> is a required field!",
      "code": "BAD_REQUEST_ERROR"
    }
  }
  ```
