# Test Report for Movie API Endpoints

## 1. Create `[POST] 127.0.0.1:5555/movies/create`:

### Test Case 1: Helyes kérés

- **Description**: Helyes paraméterekkel való tesztelés
- **Request**:
  POST /movies/create

  ```json
  {
    "apiKey": "<API Key>",
    "title": "Test Movie",
    "year": 2023,
    "imageUrl": "http://example.com/test.jpg",
    "certificate": "PG-13",
    "runtime": 120,
    "imdbRating": 7.5,
    "description": "This is a test movie."
  }
  ```

- **Expected Response**:
  Status: 200 OK
  Body:
  ```json
  {
    "id": <id>,
    "title": "Test Movie",
    "year": "2023",
    "imageUrl": "http://example.com/test.jpg",
    "certificate": "PG-13",
    "runtime": "120",
    "imdbRating": "7.5",
    "description": "This is a test movie."
  }
  ```

### Test Case 2: Hianyzo parameterek

- **Description**: Teszteles hianyzo parameterekkel
- **Request**:
  POST /movies/create
  ```json
  {
    "apiKey": "<API Key>",
    "title": "Test Movie"
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

## 2. Read `[GET] 127.0.0.1:5555/movies`:

### Test Case 1: Osszes film lekerdezese

- **Description**: Összes film lekérdezése
- **Request**:
  GET /movies

- **Expected Response**:

  Status: 200 OK
  Body:

  ```JSON
  {
    "movies": [
        {
            "id": "<movie_id_1>",
            "title": "Movie 1",
            "year": 2021,
            "imageUrl": "http://example.com/movie1.jpg",
            "certificate": "PG",
            "runtime": 90,
            "imdbRating": 6.8,
            "description": "Description of Movie 1."
        },
        {
            "id": "<movie_id_2>",
            "title": "Movie 2",
            "year": 2022,
            "imageUrl": "http://example.com/movie2.jpg",
            "certificate": "R",
            "runtime": 120,
            "imdbRating": 8.2,
            "description": "Description of Movie 2."
        }
    ]
  }
  ```

### Test Case 2: Specifikus film lekerdezese

- **Description**: Specifikus film lekérdezése
- **Request**:
  GET /movies/:id

- **Expected Response**:

  Status: 200 OK
  Body:

  ```JSON
  {
    "id": "<movie_id_1>",
    "title": "Movie 1",
    "year": 2021,
    "imageUrl": "http://example.com/movie1.jpg",
    "certificate": "PG",
    "runtime": 90,
    "imdbRating": 6.8,
    "description": "Description of Movie 1."
  }
  ```

## 1. UPDATE `[POST] 127.0.0.1:5555/movies/update/:id`:

### Test Case 1: Helyes kérés

- **Description**: Helyes paraméterekkel való tesztelés
- **Request**:
  POST /movies/update/:id

  ```json
  {
    "apiKey": "<API Key>",
    "title": "Test Movie",
    "year": 2023,
    "imageUrl": "http://example.com/test.jpg",
    "certificate": "PG-13",
    "runtime": 120,
    "imdbRating": 7.5,
    "description": "This is a test movie."
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
  POST /movies/update/:id
  ```json
  {
    "apiKey": "<API Key>",
    "title": "Test Movie"
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

## 1. DELETE `[DELETE] 127.0.0.1:5555/movies/delete/:id`:

### Test Case 1: Helyes kérés

- **Description**: Helyes paraméterekkel való tesztelés
- **Request**:
  POST /movies/delete/:id

- **Expected Response**:
  Status: 200 OK
  Body:
  ```json
  true
  ```

### Test Case 2: Hianyzo parameterek

- **Description**: Teszteles hianyzo parameterekkel
- **Request**:
  POST /movies/delete/:id

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
