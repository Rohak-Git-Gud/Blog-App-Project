const USER = require("../models/user");

function handleGETSignin(req, res) {
	return res.render("signin");
}

async function handlePOSTSignin(req, res) {
	const { email, password } = req.body;
	const userName = await USER.userValidator(email, password);
	if (userName) return res.redirect("/");
	else return res.render("signin", { err: 1 });
}

function handleGETSignup(req, res) {
	return res.render("signup");
}

async function handlePOSTSignup(req, res) {
	const { name, email, password } = req.body;
	await USER.create({
		name,
		email,
		password,
	});
	return res.redirect("/");
}

module.exports = { handleGETSignin, handlePOSTSignin, handleGETSignup, handlePOSTSignup };
