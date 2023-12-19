const express = require("express");

const noteRouter = require('./router/note.router')

const app = express();

// Middle Ware
app.use(express.json());

// Router 
app.use('/note', noteRouter)

module.exports = app;

