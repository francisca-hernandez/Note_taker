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




//Save new note, add to db and update the db.json file and the notes list in browser

const addNote = function(newNote) {
    const data = fs.readFileSync(path.join(__dirname,'../db/db.json'))
    const parsedData = JSON.parse(data)
    console.log(newNote)
    const title = newNote.title
    const text = newNote.text
    const id = Math.random().toString()
    const newNoteSave  = {title: title, text: text, id: id}
    parsedData.push(newNoteSave)
    return fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(parsedData))

}


router.post("/notes", async function(req, res) {
    console.log(req.body)
    const newNotedata = await addNote(req.body)
    res.json(newNotedata);
});

 

//Deletes a note from db.json file
const deleteNote = 




router.delete("/notes", function(req,res) {
res.json()
});







module.exports= router