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

    function match(person, cats){
        let diff = [ ];
        let lowestNum = 0;
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
            
            lowestNum = Math.min(...diff);

            console.log(diff + "");
            let indices = findIndex(diff, lowestNum);

            if (indices.length > 1){
                let purrfectCat = [ ];
                for (let i = 0; i < indices.length; i++){
                    //get the information for other cats.
                    let cat = JSON.stringify(cats[indices[i]]);
                    purrfectCat.push(cat);
                }
                //modal with multiple cats info
                console.log("Matched with multiple cats : " + purrfectCat);
            }
            else {
                purrfectCat = cats[indices];
                //modal with the matched cats info
                results();
                console.log("Matched with :" + JSON.stringify(purrfectCat));
            }
        }
        
    }
    
    function findIndex(array, element){
        let indices = [ ];
        let index = array.indexOf(element);
        while (index !=-1){
            indices.push(index);
            index = array.indexOf(element, index + 1);
        }
        return indices;
    }

    function results(){
        let modalContainer = $(`<div class="modal-content relative m-auto bg-gray-100 w-4/5 shadow-lg">
        <div class="p-4 bg-gray-800 text-white">
            <span class="closeBtn float-right text-lg font-bold hover:text-gray-500 no-underline cursor-pointer">&times;</span>
            <h2 class="block w-full text-center text-gray-darkest mb-6 text-4xl font-bold">Your purrfect match!</h2>
        </div>
        <div class="p-4 text-center">
            <p>This cat</p>
        </div>
        <div class="p-4 text-center bg-gray-400">
            <h3>Here are some other matches</h3>
        </div>
        </div>`);
        $("#modal").append(modalContainer);
        
    }
};
