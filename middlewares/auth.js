const { validateUserToken } = require("../services/auth");

function checkCookieAuth(cookieName) {
	return (req, res, next) => {
		const TOKEN = req.cookies[cookieName];
		if (!TOKEN) return next();
		try {
			const payload = validateUserToken(TOKEN);
			req.user = payload;
		} catch (error) {}
		return next();
	};
}

module.exports = { checkCookieAuth };
