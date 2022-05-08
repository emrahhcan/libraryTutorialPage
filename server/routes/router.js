const express = require("express");

// English Dependicies
const { englishList } = require("../../languages/en/en");
const { switchEnglish } = require("../../languages/en/englishSwitcher");

const en = englishList.contentLanguageEn;

// Turkish Dependicies
const { turkishList } = require("../../languages/tr/tr");
const { switchTurkish } = require("../../languages/tr/turkishSwitcher");

const tr = turkishList.contentLanguageTr;

const route = express.Router();

// Default Routing
route.get("/", (req, res) => {
    res.redirect(en);
});

// English Stages
route.get(en, (req, res) => {
    res.render("index", switchEnglish);
});
        
route.get(`${en}/${switchEnglish.secondStageUrlHtml}`, (req, res) => {
    res.render("firstStage", switchEnglish);
});

route.get(`${en}/${switchEnglish.thirdStageUrlHtml}`, (req, res) => {
    res.render("secondStage", switchEnglish);
});

route.get(`${en}/${switchEnglish.forthStageUrlHtml}`, (req, res) => {
    res.render("thirdStage", switchEnglish);
});

// Turkish Stages
route.get(tr, (req, res) => {
    res.render("index", switchTurkish);
});

route.get(`${tr}/${switchTurkish.secondStageUrlHtml}`, (req, res) => {
    res.render("firstStage", switchTurkish);
});

route.get(`${tr}/${switchTurkish.thirdStageUrlHtml}`, (req, res) => {
    res.render("secondStage", switchTurkish);
});

route.get(`${tr}/${switchTurkish.forthStageUrlHtml}`, (req, res) => {
    res.render("thirdStage", switchTurkish);
});

// 404 Handling
route.use((req, res) => {
    res.status(404).render("404", switchEnglish);
});

module.exports = route