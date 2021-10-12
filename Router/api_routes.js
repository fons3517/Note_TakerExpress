// Requiring express.Router(), file system, and json database
const app = require('express').Router();
const fs= require("fs");
let db= require("../db/db.json");

// GET route for notes
app.get("/notes",function(req,res){
    db = JSON.parse(fs.readFileSync("./db/db.json","utf-8"));
    console.log("GET",db);
    res.json(db);
});

// POST notes with random id to body 
app.post("/notes",function(req,res){
    let newObj = {
        id: Math.floor(Math.random() *1000 )+1,
        title: req.body.title,
        text: req.body.text
    };
    db.push(newObj)
    fs.writeFileSync("./db/db.json",JSON.stringify(db), function(err,data){
        if (err) throw err;
        console.log(data);
    });
    console.log("POST",db);
    res.json(db);
});

// DELETE notes 
app.delete("/notes/:id",function(req,res){
    let updatedNotes = [];
        db.forEach(note => {
            if(note.id != req.params.id) {
                updatedNotes.push(note);
            }
        }); 
    db = updatedNotes;
    fs.writeFileSync("./db/db.json",JSON.stringify(db) , function(err,data){
        if (err) throw err;
        console.log(data);
    });
    console.log("DELETE",db);
    res.json(db);

});

//Export app
module.exports=app;