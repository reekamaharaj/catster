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

//Routes 