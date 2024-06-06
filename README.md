# Node.js RESTful API with Express and MongoDB

This repository contains a simple RESTful API built with Node.js, Express, and MongoDB. The API provides CRUD operations for users and products.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [User Endpoints](#user-endpoints)
  - [Product Endpoints](#product-endpoints)
- [Validation Middleware](#validation-middleware)

## Installation


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
## Configuration

Create a .env file in the root of the project with the following content:

```bash
PORT=5000
MONGO_URI=your_mongo_db_connection_string
```
Replace your_mongo_db_connection_string with your actual MongoDB connection string.

## Running the Application
To start the server, run:

```bash
node app.js
```

By default, the server will run on http://localhost:8081.

## API Endpoints
User Endpoints

Get all users
```bash
GET /api/users
[
  {
    "_id": "60d0fe4f5311236168a109ca",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2021-06-22T15:53:35.365Z",
    "updatedAt": "2021-06-22T15:53:35.365Z"
  },
  ...
]

```
Create a new user
```bash
POST /api/users/user
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Response:
{
  "_id": "60d0fe4f5311236168a109ca",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2021-06-22T15:53:35.365Z",
  "updatedAt": "2021-06-22T15:53:35.365Z"
}
```
Get a single user
```bash
GET /api/users/user/:userId
{
  "_id": "60d0fe4f5311236168a109ca",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2021-06-22T15:53:35.365Z",
  "updatedAt": "2021-06-22T15:53:35.365Z"
}
```
Update a user
```bash
PUT /api/users/user/:userId
{
  "name": "John Updated",
  "email": "johnupdated@example.com",
  "password": "newpassword123"
}
Response
{
  "_id": "60d0fe4f5311236168a109ca",
  "name": "John Updated",
  "email": "johnupdated@example.com",,
  "createdAt": "2021-06-22T15:53:35.365Z",
  "updatedAt": "2021-06-22T15:53:35.365Z"
}
```
Delete a product
```bash
DELETE /api/products/product/:productId
Response
{
  "message": "Product deleted"
}
```

## Product Endpoints
Get all products
```bash
GET /api/products
[
  {
    "_id": "60d0fe4f5311236168a109cb",
    "name": "Product 1",
    "price": 19.99,
    "description": "Description of Product 1",
    "createdAt": "2021-06-22T15:53:35.365Z",
    "updatedAt": "2021-06-22T15:53:35.365Z"
  },
  ...
]
```
Create a new product
```bash
POST /api/products/product
{
  "name": "Product 1",
  "price": 19.99,
  "description": "Description of Product 1"
}
Response
{
  "_id": "60d0fe4f5311236168a109cb",
  "name": "Product 1",
  "price": 19.99,
  "description": "Description of Product 1",
  "createdAt": "2021-06-22T15:53:35.365Z",
  "updatedAt": "2021-06-22T15:53:35.365Z"
}
```
Update a product
```bash
PUT /api/products/product/:productId
{
  "name": "Updated Product",
  "price": 29.99,
  "description": "Updated description"
}

Response
{
  "_id": "60d0fe4f5311236168a109cb",
  "name": "Updated Product",
  "price": 29.99,
  "description": "Updated description",
  "createdAt": "2021-06-22T15:53:35.365Z",
  "updatedAt": "2021-06-22T15:53:35.365Z"
}
```
Delete a product
```bash
DELETE /api/products/product/:productId
Response
{
  "message": "Product deleted"
}
```

## Validation Middleware
User Validation Middleware
This middleware validates the user details:

name must exist and be greater than one character.
email must exist, be a valid email, and be at least 6 characters long.
password must exist and be at least 6 characters long.

