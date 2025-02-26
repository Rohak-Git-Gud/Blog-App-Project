const { Router } = require("express");
const { handleGETAllBlogs, handleGETAddBlog, handlePOSTAddBlog } = require("../controllers/blog");
const { upload } = require("../middlewares/fileupload");

const router = Router();

router.get("/blogs", handleGETAllBlogs);

router.route("/create").get(handleGETAddBlog).post(upload.single("photo"), handlePOSTAddBlog);

module.exports = router;
