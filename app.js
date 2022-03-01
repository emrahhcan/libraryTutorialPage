// Dependicies, and Variables
const express = require("express");
const https = require("https");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const { switchEnglish } = require("./languages/englishSwitcher");
const { switchTurkish } = require("./languages/turkishSwitcher");
const { englishList } = require("./languages/en");

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
choosenLanguage(en, tr, en);


// Listen Port
app.listen(port, () => {
    console.log(`Server is ready on port ${port}`);
});

// Functions
function choosenLanguage(firstLanguage, secondLanguage, def, other) {
    if(firstLanguage === en) {
        app.get(firstLanguage, (req, res) => {
            res.render("index", switchEnglish);
        });
        
        app.get(`${firstLanguage}/${switchEnglish.secondStageUrlHtml}`, (req, res) => {
            res.send("<h3>It works</h3>");
        });
    }
    
    if(secondLanguage === tr) {
        app.get(secondLanguage, (req, res) => {
            res.render("index", switchTurkish);
        });

        app.get(`${secondLanguage}/${switchTurkish.secondStageUrlHtml}`, (req, res) => {
            res.send("<h3>Çalışıyor</h3>");
        });
    }

    // Default Routing
    if(def === en) {
        app.get("/", (req, res) => {
            res.redirect(def);
        });
    }
}