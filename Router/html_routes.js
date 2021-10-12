const app = require('express').Router()
const path = require("path");

//GET Route for index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);


//GET Route for notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

//Wildcard  404 Error
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);


module.exports =app;