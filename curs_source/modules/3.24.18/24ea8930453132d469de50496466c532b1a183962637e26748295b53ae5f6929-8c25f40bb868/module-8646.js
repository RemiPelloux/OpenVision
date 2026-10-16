var call = require("./module-9565.js");
var anObject = require("./module-8551.js");
var getIteratorDirect = require("./module-1767.js");
var getIteratorMethod = require("./module-851.js");
module.exports = function(obj, stringHandling) {
    if (!stringHandling || typeof obj !== "string") anObject(obj);
    var method = getIteratorMethod(obj);
    return getIteratorDirect(anObject(method !== void 0 ? call(method, obj) : obj));
};
