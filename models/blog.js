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
        photo:{
            type: String,
			default: "/resources/public/images/defaultBlog.png",
        },//WIP
	},
	{ timestamps: true }
);

const BLOG = model("blog", blogSchema);

module.exports = BLOG;
