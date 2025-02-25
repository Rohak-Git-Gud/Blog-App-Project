const BLOG = require("../models/blog");

function handleGETAddBlog(req, res) {
	return res.render("addblog", { user: req.user });
}

function handlePOSTAddBlog(req, res) {
	//WIP
}

module.exports = { handleGETAddBlog, handlePOSTAddBlog };
