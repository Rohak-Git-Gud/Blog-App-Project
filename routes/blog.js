const multer = require("multer");
const path = require("path");
const { Router } = require("express");
const { handleGETAddBlog, handlePOSTAddBlog } = require("../controllers/blog");

const STORAGE = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.resolve(`./public/uploads/`));
	},
	filename: function (req, file, cb) {
		const fileName = `${Date.now()}-${file.originalname}`;
		cb(null, fileName);
	},
});
const upload = multer({ storage: STORAGE });

const router = Router();

router.route("/create").get(handleGETAddBlog).post(upload.single("photo"), handlePOSTAddBlog);

module.exports = router;
