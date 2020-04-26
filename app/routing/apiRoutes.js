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
        let diff = [ ];
    function match(person, cats){
        for(let i = 0; i < cats.length - 1; i++){
            //for each cat
            for (let y = 0; y < cats[i].scores.length - 1; y++){
                //get the scores in cat at i, and loop over each
                
            }
        }
    }

};


//         function match(userScores, cats){
//             let user = userScores
//             let catData = cats;
//             for (let i = 0; i < catData.length - 1; i++){
//                 //for each cat in catData...
//                 //go through each score...i will be the index for the current cat
//                 for (let y = 0; y < catData[i].scores.length - 1; y++){
//                     //for each score...get same score for user, y would be the index for the current question score
//                     //new persons answer for question y
//                     //compare to the catQA for question y..
//                     let compare = Math.abs(catData[i].score[y] - user[y]);
//                     console.log("compared values" + compare);
//                     console.log(compare);
//                 }
//             }
//             //take person score for question 1. subtract from cat score for question 1. All numbers will be absolute since we want the difference between the two numbers. 
//         }

//     }