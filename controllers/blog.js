const BLOG = require("../models/blog");

async function handleGETAllBlogs(req, res) {
	const allBlogs = await BLOG.find({}).sort("createdAt", { override: -1 });
	return res.render("blogs", { blogs: allBlogs });
}

function handleGETAddBlog(req, res) {
	return res.render("addblog", { user: req.user });
}

async function handlePOSTAddBlog(req, res) {
	const { title, body } = req.body;
	const blog = await BLOG.create({
		body,
		title,
		createdBy: req.user._id,
		creatorName: req.user.name,
		photo: `/img/uploads/${req.file.filename}`,
	});
	return res.redirect("/"); //WIP
}

module.exports = { handleGETAllBlogs, handleGETAddBlog, handlePOSTAddBlog };
