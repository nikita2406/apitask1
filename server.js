"use strict";

const express = require("express");

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
var routes = require('./routes/routes')(app)
console.log(routes);
 app.listen(3000);

