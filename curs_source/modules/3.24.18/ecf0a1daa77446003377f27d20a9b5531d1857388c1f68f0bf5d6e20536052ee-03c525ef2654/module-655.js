var s = require("./module-6955.js"), n = String;
module.exports = function(t) {
    if ("Symbol" === s(t)) throw new TypeError("Cannot convert a Symbol value to a string");
    return n(t);
};
