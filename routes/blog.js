const { Router } = require("express");
const { handleGETAddBlog, handlePOSTAddBlog } = require("../controllers/blog");

const router = Router();

router.route("/create").get(handleGETAddBlog).post(handlePOSTAddBlog);

module.exports = router;
