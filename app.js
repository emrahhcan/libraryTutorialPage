/*** DEPENDICIES AND VARIABLES ***/
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");
const https = require("https");
const ejs = require("ejs");
const { switchEnglish } = require("./languages/englishSwitcher");

const app = express();
dotenv.config({path:"config.env"});
const PORT = process.env.PORT || 8080;

/*** STATIC FILES ***/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

/*** SET TEMPLATING ENGINE ***/
app.set("view engine", "ejs");
//app.set("views", path.resolve(__dirname, "views/en"));

/*** NAVIGATION ***/
app.use("/", require("./server/routes/router"));

/*** LISTEN PORT ***/
app.listen(PORT, () => {
    console.log(`Server is ready on port ${PORT}`);
});