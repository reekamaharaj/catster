// GET route with /api/catster that will display the JSON file with all the possible cats

// POST route to /api/catster will be used to handle incoming survey results. Needs to handle compatibility logic

// LOAD DATA
const catData = require("../data/cats");
const personData = require("../data/persons");
const path = require("path");

//Routing
module.exports = function(app){
    app.get("/api/cats", function(_req,res){
        res.json(catData);
    });

    app.get("/api/persons", function(_req,res){
        res.json(personData);
    });

    app.post("/results", function(req,res){
        let purrfectCat;

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
        match(newPerson.scores, catData);
        res.sendFile(path.join(__dirname, "../public/assets/html/home.html"));
        }
    );

    function match(person, cats){
        let diff = [ ];
        for(let i = 0; i < cats.length - 1; i++){
            let totalDiff = 0;
            //for each cat where i is the index for the single cat data
            for (let y = 0; y < cats[i].scores.length - 1; y++){
                //get the scores in cat at i, and loop over each where y is the index for the current score
                // console.log(cats[i].scores[y]);
                //this does give a number

                let compare = Math.abs(cats[i].scores[y] - person[y]);
                totalDiff = totalDiff + compare;
            }
            diff.push(totalDiff);
            console.log("cat " + cats[i].name + "  diff in score: " + totalDiff);
            console.log("difference array: " + diff);
            console.log("totalDiff: " + totalDiff);
        }
        
    }
    //find lowest number in array, get the index and the cat at that index is a match. If there are multiple matches, show others? or one randomly
};

// purrfectCat = Math.min.apply(null, totalDiff);
// console.log("score match: " + purrfectCat);

//lowest difference is the match
//need to make sure form will only submit when completed. 