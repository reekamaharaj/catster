//require express and path npm packages

//Dependencies
const express = require('express');
const path = require('path');

//Express App set up
const app = express();
const PORT = process.env.PORT || 3000;

//Express app set up to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));


//Router
require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

app.listen(PORT, function(){
    console.log('App listening on http://localhost:' + PORT);
});


