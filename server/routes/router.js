const express = require("express");

const { switchEnglish } = require("../../languages/englishSwitcher");
const { switchTurkish } = require("../../languages/turkishSwitcher");

const route = express.Router();

const en = "/en";
const tr = "/tr";

// Default Routing
route.get("/", (req, res) => {
    res.redirect(en);
});

route.get(en, (req, res) => {
    res.render("index", switchEnglish);
});
        
route.get(`${en}/${switchEnglish.secondStageUrlHtml}`, (req, res) => {
    res.render("firstStage", switchEnglish);
    console.log(__dirname);
});
    
route.get(tr, (req, res) => {
    res.render("index", switchTurkish);
});

route.get(`${tr}/${switchTurkish.secondStageUrlHtml}`, (req, res) => {
    res.render("firstStage", switchTurkish);
});

// 404 Handling
route.use((req, res) => {
    res.status(404).render("404", switchEnglish);
});

module.exports = route