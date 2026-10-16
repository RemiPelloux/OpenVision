var DESCRIPTORS = require("./module-3724.js");
var uncurryThis = require("./module-9504.js");
var defineBuiltInAccessor = require("./module-2106.js");
var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
if (DESCRIPTORS && !("size" in URLSearchParamsPrototype)) {
    defineBuiltInAccessor(URLSearchParamsPrototype, "size", {
        get: function size() {
            var count = 0;
            forEach(this, function() {
                count++;
            });
            return count;
        },
        configurable: true,
        enumerable: true
    });
}
