"use strict";
var express=require('express');
var fs = require('fs');
var Table = require('easy-table');

module.exports = (function() {
function New (req,res){
}
New.prototype.findAllstudent=
	function(req,res){
fs.readFile('source.json', 'utf8', function(err,data){
	console.log(data);
 var ans=JSON.parse(data);
var t = new Table
ans.forEach(function(student) {
  t.cell('id', student.id)
  t.cell('fname', student.fname)
  t.cell('lname', student.lname)
   t.cell('score', student.score)
  t.newRow()
})
res.send(t.toString());
})
	
};
return New;
})();

