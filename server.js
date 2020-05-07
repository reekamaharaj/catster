//require express and path npm packages

//Dependencies
const express = require('express');
const exphbs = require('express-handlebars');

//Express App set up
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

//Express app set up to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Router
require('./routing/apiRoutes')(app);

app.listen(PORT, function(){
    console.log('App listening on http://localhost:' + PORT);
});


