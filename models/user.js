const { Schema, model } = require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const { createUserToken } = require("../services/auth");

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		salt: {
			type: String,
		},
		profilePhoto: {
			type: String,
			default: "/resources/public/images/default.png",
		},
		role: {
			type: String,
			enum: ["USER", "ADMIN"],
			default: "USER",
		},
	},
	{ timestamps: true }
);

//Pre Save Password Salting & Hashing
userSchema.pre("save", function (next) {
	//Using Anonymous Functions instead of Arrow Functions to avoid "this" nonsense
	const user = this;

	//Nothing TODO if password is same
	if (!user.isModified("password")) return;

	//Salt Creation
	const salt = randomBytes(64).toString();

	//Hashing
	const passwordHash = createHmac("sha256", salt).update(user.password).digest("hex");

	//Updating Salt & Password in MongoDB
	this.salt = salt;
	this.password = passwordHash;

	//Calling next Middleware
	next();
});

//Static Password Matching Virtual Function

//Authentication
// userSchema.static("userValidator", async function (email, password) {
// 	const user = await this.findOne({ email });
// 	if (!user) return;
// 	const salt = user.salt;
// 	const hashChk = createHmac("sha256", salt).update(password).digest("hex");
// 	if (hashChk === user.password) return user.name;
// 	return;
// });

//Authorization
userSchema.static("userValidatorandTokenise", async function (email, password) {
	const user = await this.findOne({ email });
	if (!user) throw new Error("User Not Found");
	const salt = user.salt;
	const hashChk = createHmac("sha256", salt).update(password).digest("hex");
	if (hashChk === user.password) {
		const TOKEN = createUserToken(user);
		return TOKEN;
	}
	throw new Error("Incorrect Password");
});

const USER = model("user", userSchema);

module.exports = USER;
