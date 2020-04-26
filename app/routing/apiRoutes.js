// GET route with /api/catster that will display the JSON file with all the possible cats
// POST route to /api/catster will be used to handle incoming survey results. Needs to handle compatibility logic
// LOAD DATA
const catData = require("../data/cats");
const personData = require("../data/persons");

//Routing
module.exports = function(app){
    app.get("/api/cats", function(_req,res){
        res.json(catData);
    });

    app.get("/api/persons", function(_req,res){
        res.json(personData);
    });

    app.post("/api/persons", function(req,res){
        
        let newPerson = {
            name: req.body.name,
            photo: req.body.img,
            scores: [
                req.body.q0,
                req.body.q1,
                req.body.q2,
                req.body.q3,
                req.body.q4,
                req.body.q5,
                req.body.q6,
                req.body.q7,
                req.body.q8,
                req.body.q9
            ]
        };
        personData.push(newPerson);
        res.json("You will be matched... as soon at the matching system is functional. SORRY!");
        //the res.json will make the modal pop up with a match here
        //Need to write a function that will take the new person data and compare the scores with the current cats in the cat Data.
        //function will need to compare the difference between the users score and the cat score, for each question. Get the absolute value for all of these and then find the closest match. Display the information for the matched cat in a modal with name and picture. 
})};