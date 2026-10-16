var defineBuiltIn = require("./module-6840.js");
module.exports = function(target, src, options) {
    for(var key in src)defineBuiltIn(target, key, src[key], options);
    return target;
};
