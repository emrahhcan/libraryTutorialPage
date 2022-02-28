// Dependicies, and Variables
const express = require("express");
const https = require("https");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const { switchEnglish } = require("./languages/englishSwitcher");
const { switchTurkish } = require("./languages/turkishSwitcher");

const en = "/en";
const tr = "/tr";

const app = express();
const port = process.env.PORT || 3000;

// Static Files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/image", express.static(__dirname + "public/image"));

// Set Templating Engine
app.set("view engine", "ejs");

// Navigation
app.get("/", (req, res) => {
    res.redirect(en);
});

app.get(en, (req, res) => {
    res.render("index", switchEnglish);
});

app.get(tr, (req, res) => {
    res.render("index", switchTurkish);
});

// Listen Port
app.listen(port, () => {
    console.log(`Server is ready on port ${port}`);
});