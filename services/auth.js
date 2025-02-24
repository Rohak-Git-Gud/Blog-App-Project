const JWT = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const pathSecret = path.resolve("secret-key.txt");
const SECRET = fs.readFileSync(pathSecret, "utf-8");

function createUserToken(user) {
	const payload = {
		_id: user._id,
		name: user.name,
		email: user.email,
		password: user.password,
		profilePhoto: user.profilePhoto,
		role: user.role,
	};
	const TOKEN = JWT.sign(payload, SECRET); //Additional Options Later
	return TOKEN;
}

function validateUserToken(token) {
	const payload = JWT.verify(token, SECRET);
	return payload;
}

module.exports = {
	createUserToken,
	validateUserToken,
};
