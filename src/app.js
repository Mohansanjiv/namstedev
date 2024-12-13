const express = require('express');

const app = express();

app.get("/", (req, res) => {
   res.send("Welcome to the home page");
});

app.get("/contact", (req, res) => {
   res.send("Welcome to the contact page");
});

app.get("/about", (req, res) => {
   res.send("Welcome to the about page");
});

app.listen(7777, () => {
   console.log("Backend server is listening on port 7777");
});
