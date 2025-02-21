const path = require("path");
const express = require("express");

const PORT = 8125;
const APP = express();

APP.set("view engine", "ejs");
APP.set("views", path.resolve("./views"));

APP.get("/", (req, res) => {
	res.render("home");
});

APP.listen(PORT, () => console.log("Server Started @ PORT: ", PORT));
