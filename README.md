# Blog App - ExpressJS
## Introduction
This is a simple blog application built with *ExpressJS* as part of a personal study project. \
The goal of this project was to learn and implement the core concepts of *NodeJS*, Express, and *MongoDB*, \
including CRUD operations, routing, user authentication, and template rendering with *EJS*.

## Features
- **Post Creation**: Create, edit, and delete blog posts.
- **Post Listing**: View a list of all blog posts.
- **Post Detail**: View the details of a specific blog post.
- **User Authentication**: Register, login, and logout for user management using JWT.
- **Admin Interface**: Simple administration for managing posts.
- **Image Upload**: Upload and store images for blog posts using Multer.

## Technologies Used
- **MongoDB + Mongoose**
- **ExpressJS**
- **NodeJS**
- **EJS + Bootstrap 5**
- **HTML5, CSS3, JS (ECMAScript)**

## Additional Packages Utilized
- **jsonwebtoken**: For JWT-based authentication & authorization.
- **cookie-parser**: To read cookie data.
- **multer**: To upload & store images on the server.

## Requirements and Installation Guide
To run this project, you need to have the following installed:
- Node.js 14.x or above
- MongoDB (Locally or via cloud provider like Atlas)
To set up the project from this repo:
1. Clone the repository:
    ```git clone https://github.com/Rohak-Git-Gud/Blog-App-Project.git```
2. Navigate into the project directory.
3. Set up the project dependencies:
    ```npm install```
4. Set up the environment variables by creating a `.env` file in the root directory and add the necessary variables (For MongoDB setup), e.g.:
      ```
      MONGO_URI=<your_mongodb_connection_string>
      JWT_SECRET=<your_jwt_secret>
      ```
5. Run the application:
    ```npm start```
6. Open your browser and go to `http://127.0.0.1:3000/` to see the blog app in action.

---

> **Courtesy**: [Piyush Garg](https://www.youtube.com/@piyushgargdev).

---
