const USER = require("../models/user");

function handleGETSignin(req, res) {
	return res.render("signin");
}

//Authentication
// async function handlePOSTSignin(req, res) {
// 	const { email, password } = req.body;
// 	const userName = await USER.userValidator(email, password);
// 	if (userName) return res.redirect("/");
// 	else return res.render("signin", { err: 1 });
// }

//Authorization
async function handlePOSTSignin(req, res) {
	const { email, password } = req.body;
	try {
		const TOKEN = await USER.userValidatorandTokenise(email, password);
		return res.cookie("token", TOKEN).redirect("/");
	} catch (err) {
		return res.render("signin", { err: "Incorrect Credentials" });
	}
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

async function handleLogout(req, res) {
	return res.clearCookie("token").redirect("/");
}

module.exports = {
	handleGETSignin,
	handlePOSTSignin,
	handleGETSignup,
	handlePOSTSignup,
	handleLogout,
};
