const express = require("express");
const path = require("path");
const { connectMongoDB } = require("./mongoConnect");
const { loggerFunction } = require("./middlewares/logger");
const userRoute = require("./routes/user");

const PORT = 8125;
const APP = express();

APP.use(loggerFunction("./logs.log"));
APP.use(express.urlencoded({ extended: false }));

connectMongoDB();

APP.set("view engine", "ejs");
APP.set("views", path.resolve("./views"));

APP.get("/", (req, res) => {
	res.render("home");
});

APP.use("/user", userRoute);

APP.listen(PORT, () => console.log("Server Started @ PORT: ", PORT));
// http://localhost:8125/
