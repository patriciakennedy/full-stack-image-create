// import express and create an express app
// const express = require('express'); traditional way of importing

// a modern syntax - es modules
// in other to use it  add it in the package.json file like so
// "type": "module",
import express from "express";

// calls the express function to create an app instance
const app = express();

// lets create a route
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  console.log('server started at http://localhost:5000');
});


