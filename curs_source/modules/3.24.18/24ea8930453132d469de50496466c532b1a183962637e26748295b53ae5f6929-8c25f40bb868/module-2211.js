var fails = require("./module-9039.js");
module.exports = !fails(function() {
    function F() {}
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
});
