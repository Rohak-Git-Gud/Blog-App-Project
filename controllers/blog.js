const BLOG = require("../models/blog");

function handleGETAddBlog(req, res) {
	return res.render("addblog", { user: req.user });
}

async function handlePOSTAddBlog(req, res) {
	const { title, body } = req.body;
	const blog = await BLOG.create({
		body,
		title,
		createdBy: req.user._id,
		photo: `//resources/public/images/uploads/${req.file.filename}`
	});
	return res.redirect("/"); //WIP
}

module.exports = { handleGETAddBlog, handlePOSTAddBlog };
