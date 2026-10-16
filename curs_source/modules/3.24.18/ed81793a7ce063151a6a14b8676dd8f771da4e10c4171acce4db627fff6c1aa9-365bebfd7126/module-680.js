var n = require("./module-5234.js");
module.exports = !n(function() {
    function t() {}
    return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype;
});
