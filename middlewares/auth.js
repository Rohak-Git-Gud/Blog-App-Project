const { validateUserToken } = require("../services/auth");

function checkCookieAuth(cookieName) {
	return (req, res, next) => {
		const TOKEN = req.cookies[cookieName];
		if (!TOKEN) next();
		else {
			try {
				const payload = validateUserToken(TOKEN);
				req.user = payload;
			} catch (error) {}
			next();
		}
	};
}

module.exports = { checkCookieAuth };
