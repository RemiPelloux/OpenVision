var defineBuiltIn = require("./module-6840.js");
var uncurryThis = require("./module-9504.js");
var toString = require("./module-655.js");
var validateArgumentsLength = require("./module-2812.js");
var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
var $has = uncurryThis(URLSearchParamsPrototype.has);
var params = new $URLSearchParams("a=1");
if (params.has("a", 2) || !params.has("a", void 0)) {
    defineBuiltIn(URLSearchParamsPrototype, "has", function has(name) {
        var length = arguments.length;
        var $value = length < 2 ? void 0 : arguments[1];
        if (length && $value === void 0) return $has(this, name);
        var values = getAll(this, name);
        validateArgumentsLength(length, 1);
        var value = toString($value);
        var index = 0;
        while(index < values.length){
            if (values[index++] === value) return true;
        }
        return false;
    }, {
        enumerable: true,
        unsafe: true
    });
}
