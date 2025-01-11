// import express and create an express app
// const express = require('express'); traditional way of importing

// a modern syntax - es modules
// in other to use it  add it in the package.json file like so
// "type": "module",
import express from "express";
import dotenv from "dotenv"; // mongoDB connection string lives in the .env file

// calls the express function to create an app instance
const app = express();

// lets create a route ROTE
app.get("/products", (req, res) => {
  res.send("Server is ready");
});

// Create a ROUTE for all products in our database
app.get('/products', (req, res) => {
  res.send('Server is ready');
});

app.listen(5000, () => {
  console.log('server started at http://localhost:5000');
});


