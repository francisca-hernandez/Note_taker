const fs = require("fs");
//const uniqid = require("uniqid");
//const notesdb = require("../db/db.json");
//const { stringify } = require("querystring");
const router = require('express').Router();
const path = require('path')

const getNote = function(){
    const data = fs.readFileSync(path.join(__dirname,'../db/db.json'))
    const parsedData = JSON.parse(data)
    return parsedData
}

    // Displays all notes
    router.get("/notes", function(req, res) {
        res.json(getNote());
    });


module.exports= router
//Save new note, add to db and update the db.json file and the notes list in browser



//Disply one note when clicked on



//Deletes a note from db.json file
