const { Router } = require("express");
const {
	handleGETSignin,
	handlePOSTSignin,
	handleGETSignup,
	handlePOSTSignup,
} = require("../controllers/user");

const router = Router();

router.route("/signin").get(handleGETSignin).post(handlePOSTSignin);

router.route("/signup").get(handleGETSignup).post(handlePOSTSignup);

module.exports = router;
