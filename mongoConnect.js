const mongoose = require("mongoose");

const URL = "mongodb://127.0.0.1:8126/BAP";

async function connectMongoDB(url = URL) {
	return await mongoose
		.connect(url)
		.then(() => console.log("Mongo-Mongoose Connection Established"))
		.catch((err) => console.log("Error: ", err));
}
module.exports = { connectMongoDB };
