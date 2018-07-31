const tape = require("tape");

module.exports = process.env.NODE_ENV == "test" ? tape : () => {};