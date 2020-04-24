// GET route to /survey, will display the survey page
// default, catch all route to home.html, will display the home page

var path = require("path");

module.exports = function(app){    
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/html/survey.html"));
    });

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/html/home.html"));
    });
};