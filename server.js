const express = require('express');
const server = express();
var http = require('http');
var fs = require('fs');

server.all('/', (req, res)=>{

   res.setHeader('Content-Type', 'text/html');

   res.write('<link href="https://fonts.googleapis.com/css?family=Roboto Condensed" rel="stylesheet"> <style> body {font-family: "Roboto Condensed";font-size: 22px;} <p>Hosting Active</p>');


   res.end();

})



function keepAlive(){

   server.listen(3000, ()=>{console.log("Server je online")});

}

module.exports = keepAlive

