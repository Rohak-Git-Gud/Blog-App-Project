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
			default: "/resources/public/images/defaultBlog.png",
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "user",
		},
	},
	{ timestamps: true }
);

const BLOG = model("blog", blogSchema);

module.exports = BLOG;
