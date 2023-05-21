# Test Report for Directors API Endpoints

## 1. Create `[POST] 127.0.0.1:5555/directors/create`:

### Test Case 1: Helyes kérés

- **Description**: Helyes paraméterekkel való tesztelés
- **Request**:
  POST /directors/create

  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Directors",
    "about": "This is a test director."
  }
  ```

- **Expected Response**:
  Status: 200 OK
  Body:
  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Directors",
    "about": "This is a test director."
  }
  ```

### Test Case 2: Hianyzo parameterek

- **Description**: Teszteles hianyzo parameterekkel
- **Request**:
  POST /directors/create
  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Directors"
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

## 2. Read `[GET] 127.0.0.1:5555/directors`:

### Test Case 1: Osszes zsáner lekerdezese

- **Description**: Összes zsáner lekérdezése
- **Request**:
  GET /directors

- **Expected Response**:

  Status: 200 OK
  Body:

  ```JSON
  {
    "directors": [
        {
            "id": "<directors_id_1>",
            "name": "Directors 1",
            "about": "Description of Directors 1."
        },
        {
            "id": "<director_id_2>",
            "name": "Directors 2",
            "about": "Description of Directors 2."
        }
    ]
  }
  ```

### Test Case 2: Specifikus zsáner lekerdezese

- **Description**: Specifikus zsáner lekérdezése
- **Request**:
  GET /directors/:id

- **Expected Response**:

  Status: 200 OK
  Body:

  ```JSON
  {
    "id": "<director_id_1>",
    "name": "Directors 1",
    "about": "Description of Directors 1."
  }
  ```

## 1. UPDATE `[POST] 127.0.0.1:5555/directors/update/:id`:

### Test Case 1: Helyes kérés

- **Description**: Helyes paraméterekkel való tesztelés
- **Request**:
  POST /directors/update/:id

  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Directors",
    "about": "This is a test director."
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
  POST /directors/update/:id
  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Directors"
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

## 1. DELETE `[DELETE] 127.0.0.1:5555/directors/delete/:id`:

### Test Case 1: Helyes kérés

- **Description**: Helyes paraméterekkel való tesztelés
- **Request**:
  POST /directors/delete/:id

- **Expected Response**:
  Status: 200 OK
  Body:
  ```json
  true
  ```

### Test Case 2: Hianyzo parameterek

- **Description**: Teszteles hianyzo parameterekkel
- **Request**:
  POST /directors/delete/:id

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
