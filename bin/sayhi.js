#!/usr/bin/env node
const hi = require("../src/hi.js");

if (process.argv.length <= 2) {
  process.stderr.write("Please provide something to say hi to!\n");
  process.exit(1);
}

process.stdout.write(hi(process.argv.slice(2).join(" ")) + "\n");
process.exit(0);
