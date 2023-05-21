# Test Report for Genre API Endpoints

## 1. Create `[POST] 127.0.0.1:5555/genres/create`:

### Test Case 1: Helyes kérés

- **Description**: Helyes paraméterekkel való tesztelés
- **Request**:
  POST /genres/create

  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Genre",
    "about": "This is a test genre."
  }
  ```

- **Expected Response**:
  Status: 200 OK
  Body:
  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Genre",
    "about": "This is a test genre."
  }
  ```

### Test Case 2: Hianyzo parameterek

- **Description**: Teszteles hianyzo parameterekkel
- **Request**:
  POST /genres/create
  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Genre"
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

## 2. Read `[GET] 127.0.0.1:5555/genres`:

### Test Case 1: Osszes zsáner lekerdezese

- **Description**: Összes zsáner lekérdezése
- **Request**:
  GET /genres

- **Expected Response**:

  Status: 200 OK
  Body:

  ```JSON
  {
    "genres": [
        {
            "id": "<genres_id_1>",
            "name": "Genre 1",
        },
        {
            "id": "<genre_id_2>",
            "name": "Genre 2",
        }
    ]
  }
  ```

### Test Case 2: Specifikus zsáner lekerdezese

- **Description**: Specifikus zsáner lekérdezése
- **Request**:
  GET /genres/:id

- **Expected Response**:

  Status: 200 OK
  Body:

  ```JSON
  {
    "id": "<genre_id_1>",
    "name": "Genre 1",
  }
  ```

## 1. UPDATE `[POST] 127.0.0.1:5555/genres/update/:id`:

### Test Case 1: Helyes kérés

- **Description**: Helyes paraméterekkel való tesztelés
- **Request**:
  POST /genres/update/:id

  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Genre"
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
  POST /genres/update/:id
  ```json
  {
    "apiKey": "<API Key>",
    "name": "Test Genre"
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

## 1. DELETE `[DELETE] 127.0.0.1:5555/genres/delete/:id`:

### Test Case 1: Helyes kérés

- **Description**: Helyes paraméterekkel való tesztelés
- **Request**:
  POST /genres/delete/:id

- **Expected Response**:
  Status: 200 OK
  Body:
  ```json
  true
  ```

### Test Case 2: Hianyzo parameterek

- **Description**: Teszteles hianyzo parameterekkel
- **Request**:
  POST /genres/delete/:id

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
