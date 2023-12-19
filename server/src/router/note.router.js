const express = require('express');

const {httpGetAllNotes, httpPostNotes, httpUpdateNotes, httpDeleteNotes} = require('./note.controller')
const noteRouter = express.Router();

// Get All Note
noteRouter.get("/", httpGetAllNotes);

// Post Note
noteRouter.post("/", httpPostNotes);

// Update Note 
noteRouter.put('/:id', httpUpdateNotes)

// Delete Note
noteRouter.delete("/:id", httpDeleteNotes);

module.exports = noteRouter
