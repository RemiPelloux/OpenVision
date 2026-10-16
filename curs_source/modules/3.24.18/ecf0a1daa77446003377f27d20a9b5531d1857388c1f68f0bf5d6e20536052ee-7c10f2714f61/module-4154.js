var s = require("./module-6955.js"), n = TypeError;
module.exports = function(t) {
    if ("Uint8Array" === s(t)) return t;
    throw new n("Argument is not an Uint8Array");
};
