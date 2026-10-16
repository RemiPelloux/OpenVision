var uncurryThis = require("./module-7476.js");
var aCallable = require("./module-9306.js");
var NATIVE_BIND = require("./module-616.js");
var bind = uncurryThis(uncurryThis.bind);
module.exports = function(fn, that) {
    aCallable(fn);
    return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};
