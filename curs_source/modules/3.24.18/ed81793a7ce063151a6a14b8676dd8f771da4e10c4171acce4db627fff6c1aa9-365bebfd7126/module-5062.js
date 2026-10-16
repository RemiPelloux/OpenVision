var n = require("./module-5234.js");
module.exports = !n(function() {
    var t = "9007199254740993", r = JSON.rawJSON(t);
    return !JSON.isRawJSON(r) || JSON.stringify(r) !== t;
});
