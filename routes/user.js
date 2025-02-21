const { Router } = require("express");
const USER = require("../models/user");
//TODO - Move Functions to Controllers

const router = Router();

router.get("/signin", (req, res) => {
	return res.render("signin");
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
