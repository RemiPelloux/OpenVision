var n = require("./module-5438.js"), o = String;
module.exports = function(t) {
    if ("Symbol" === n(t)) throw new TypeError("Cannot convert a Symbol value to a string");
    return o(t);
};
