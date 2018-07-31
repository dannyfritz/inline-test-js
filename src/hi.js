const test = require("./test.js");

const hi = module.exports = (v) => `Hi ${v}`;

test("hi", t => {
  t.equal(hi("Susan"), "Hi Susan");
  t.equal(hi("Big Bird"), "Hi Big Bird");
  t.end();
});
