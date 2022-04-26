//This file sets up a server environment using ExpressJS to serve the webpage to users. 

//Express is imported using node.
const express = require('express');

//A new express app instance is initialized.
const app = express();

//Express is told to statically mount the public and dist directories to the server. 
app.use("/public", express.static("./public"));
app.use("/dist", express.static("./dist"));

//The app is told to redirect the default path to the /public path to view the webpage.
app.get("/", (request, response) => {
  response.redirect("/public");
});

//The app is told to listen on port 80, the default web port, for traffic.
app.listen(80, () => {
  console.log("App running on http://localhost:80.");
});