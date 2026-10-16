var fails = require("./module-9039.js");
module.exports = !fails(function() {
    var test = (function() {}).bind();
    return typeof test != "function" || test.hasOwnProperty("prototype");
});
