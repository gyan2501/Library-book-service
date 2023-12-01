# Book Library Service
### Description
This repository contains the source code for a Book Library Service built using Node.js, Express.js, and MongoDB. The service provides functionalities to manage a library of books, including operations like adding, updating, retrieving, and deleting books.

### Table of Contents
1. Installation
2. Usage
3. Endpoints
4. Models
5. Controllers
6. Database
7. Deployment
8. Contributing

### Installation
- To run the project locally, follow these steps:

1. Clone the repository: git clone [https://github.com/gyan2501/Library-book-service](https://github.com/gyan2501/Library-book-service)
2. Install dependencies: npm install
3. Set up environment variables: Create a **.env** file and add necessary variables like mongoURL & PORT.
3. Start the server: npm run server
### Usage
- To interact with the Book Library Service:

- Use tools like Postman or cURL to send requests to the available endpoints.
- Ensure the server is running and connected to the MongoDB database.

### Endpoints
- **GET /books:** Retrieve all books from the library.
- **GET /books/:id :** Retrieve a specific book by ID.
- **POST /books:** Add a new book to the library.
- **PUT /books/:id :** Update an existing book by ID.
- **DELETE /books/:id :** Delete a book from the library by ID.
#### Models
- **model/Book.Model.js:** Defines the Mongoose schema for the book entity.
#### Controllers
- **controllers/Book.Controllers.js:** Contains controller functions to handle CRUD operations for books.
#### Database
- **config/db.js:** Connects to the MongoDB database using Mongoose.

### Deployment
-The backend of the Book Library Service has been **deployed** at https://library-book-service.onrender.com/books.

### Postman Doc
- The Postman Document for Book Library: https://www.postman.com/maintenance-saganist-19705032/workspace/library-book-service-api/collection/29040408-cea1cd26-d817-4355-a8a2-0fe6824efc63

### Contributing
- Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.

