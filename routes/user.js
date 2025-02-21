const { Router } = require("express");
const USER = require("../models/user");
//TODO - Move Functions to Controllers

const router = Router();

router
	.route("/signin")
	.get((req, res) => {
		return res.render("signin");
	})
	.post(async (req, res) => {
		const { email, password } = req.body;
		const userName = await USER.userValidator(email, password);
		if (userName) return res.redirect("/");
		else return res.render("signin", { err: 1 });
	});

router
	.route("/signup")
	.get((req, res) => {
		return res.render("signup");
	})
	.post(async (req, res) => {
		const { name, email, password } = req.body;
		await USER.create({
			name,
			email,
			password,
		});
		return res.redirect("/");
	});

module.exports = router;
