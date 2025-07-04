const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const { connectMongoDB } = require("./mongoConnect");
const { loggerFunction } = require("./middlewares/logger");
const { checkCookieAuth } = require("./middlewares/auth");

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

const PORT = 8125;
const APP = express();

connectMongoDB();

APP.use(loggerFunction("./logs.log"));
APP.use(express.urlencoded({ extended: false }));
APP.use(express.static(path.resolve("res/public")));
APP.use(cookieParser());
APP.use(checkCookieAuth("token"));

APP.set("view engine", "ejs");
APP.set("views", path.resolve("./views"));

APP.get("/", (req, res) => {
	res.render("home", {
		user: req.user,
	});
});

APP.use("/user", userRoute);
APP.use("/blog", blogRoute);

APP.listen(PORT, () => console.log("Server Started @ PORT: ", PORT));
// http://localhost:8125/
