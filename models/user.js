const { Schema, model } = require("mongoose");
const { createHmac, randomBytes } = require("crypto");

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
		salt: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePhoto: {
			type: String,
			default: "/images/default.png",
		},
		password: {
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
	const passwordHash = createHmac("sha256", salt)
		.update(user.password)
		.digest("hex");

	//Updating Salt & Password in MongoDB
	this.salt = salt;
	this.password = passwordHash;

	//Calling next Middleware
	next();
});

const USER = model("user", userSchema);

module.exports = USER;
