# L2-B5-Assignment-3

# Library API

A simple Node.js + Express + MongoDB REST API for managing books and borrowing records in a library.

---

## Features

- CRUD operations for books
- Borrow a book (with quantity and due date)
- Borrowed books summary (aggregation)
- Filtering, sorting, and limiting for book queries

---

## Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Create a `.env` file in the root directory and add your MongoDB connection string:

```
MONGODB_URI=mongodb://localhost:27017/library
PORT=3000
```

### 4. Run the server

```bash
npm run dev
```

or

```bash
npm start
```

---

## API Endpoints

### Books

#### Create a Book

**POST** `/api/books`

**Body:**

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 10
}
```

#### Get All Books (with filtering, sorting, limiting)

**GET** `/api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5`

- `filter`: Filter by genre
- `sortBy`: Field to sort by (default: `createdAt`)
- `sort`: `asc` or `desc` (default: `desc`)
- `limit`: Number of results (default: 10)

#### Get Book by ID

**GET** `/api/books/:bookId`

#### Update Book

**PATCH** `/api/books/:bookId`

**Body:** (any updatable fields)

```json
{
  "copies": 50
}
```

#### Delete Book

**DELETE** `/api/books/:bookId`

---

### Borrow

#### Borrow a Book

**POST** `/api/borrow`

**Body:**

```json
{
  "book": "BOOK_OBJECT_ID",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```

#### Borrowed Books Summary

**GET** `/api/borrow`

**Response:**

```json
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalQuantity": 5
    }
  ]
}
```

---

## Project Structure

```
/controllers
  books.controller.ts
  borrow.controller.ts
/models
  books.model.ts
  borrow.model.ts
/interfaces
  books.interface.ts
app.ts
```

---
