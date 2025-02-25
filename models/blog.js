const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			default: "/img/uploads/defaultBlog.png",
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "user",
		},
		creatorName: {
			type: String,
			default: "Rohak",
		},
	},
	{ timestamps: true }
);

const BLOG = model("blog", blogSchema);

module.exports = BLOG;
