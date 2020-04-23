//require express and path npm packages

//Dependencies
const express = require("express");
const path = require("path");

//Express App set up
const app = express();
const PORT = 3000;

//Express app set up to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Data
const cats = require("./data/cats");
const person = require("./data/person");

//Routes
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "/public/survey.html"));
});

//Displays all data
app.get("/api/catster", function(req,res){
    return res.json(cats);
});

// Creates new person
app.post("/api/catster", function(req,res){
    let newPerson = req.body;
    newPerson.routeName = newPerson.name.replace(/\s+/g, "").toLowerCase();
    console.log(newPerson);
    person.push(newPerson);
    res.json(newPerson);
});

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});
