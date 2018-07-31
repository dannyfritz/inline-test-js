const test = require("./test.js");

const hi = module.exports = (v) => `Hi ${v}`;

test(t => {
  t.equal(hi("Susan"), "Hi Susan");
  t.equal(hi("Big Bird"), "Hi Big Bird");
  t.end();
});