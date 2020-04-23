// GET route with /api/catster that will display the JSON file with all the possible cats
// POST route to /api/catster will be used to handle incoming survey results. Needs to handle compatibility logic
// LOAD DATA
var catData = require("../data/cats");
var personData = require("../data/persons");

//Routing
module.exports = function(app){
    app.get("/api/cats", function(req,res){
        res.json(catData);
    });

    app.get("/api/persons", function(req,res){
        res.json(personData);
    });

    app.post("/api/persons", function(req,res){
        let newPerson = req.body;
        personArray.push(newPerson);
        res.json(newPerson);
    });
};