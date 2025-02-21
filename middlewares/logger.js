const fs = require("fs");

function loggerFunction(filename) {
	return (req, res, next) => {
		fs.appendFile(filename, `${Date()} - ${req.method}:${req.path}\n`, (err, data) => {
			next();
		});
	};
}
module.exports = { loggerFunction };
