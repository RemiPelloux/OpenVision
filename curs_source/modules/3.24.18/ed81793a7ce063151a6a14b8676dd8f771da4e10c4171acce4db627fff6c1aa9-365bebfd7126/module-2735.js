var n = require("./module-6893.js"), o = require("./module-4418.js"), i = Function.prototype, a = n && Object.getOwnPropertyDescriptor, u = o(i, "name"), s = u && "something" === (function() {}).name, c = u && (!n || n && a(i, "name").configurable);
module.exports = {
    EXISTS: u,
    PROPER: s,
    CONFIGURABLE: c
};
