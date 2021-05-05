const express = require('express');
const server = express();
var http = require('http');
var fs = require('fs');

//colors
let CReset = "\x1b[0m"
let CYellow = "\x1b[33m"
let CRed = "\x1b[31m"

server.all('/', (req, res)=>{

   res.setHeader('Content-Type', 'text/html');

   res.write('<link href="https://fonts.googleapis.com/css?family=Roboto Condensed" rel="stylesheet"> <style> body {font-family: "Roboto Condensed";font-size: 22px;} <p>Hosting Active</p>');


   res.end();

})



function keepAlive(){

   server.listen(3000, ()=>{console.log(CYellow + "$ Server is online")});

}

module.exports = keepAlive

