"use strict";
module.exports = function (app) {

var newcontroller = require('../controller/newcontroller.js');
var new1 = new newcontroller;	
	console.log(new1);
var express = require('express')	

app.get('/ascending',  new1.findAllstudent);

	  }
