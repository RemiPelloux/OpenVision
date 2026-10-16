var classofRaw = require("./module-2195.js");
var uncurryThis = require("./module-9504.js");
module.exports = function(fn) {
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};
