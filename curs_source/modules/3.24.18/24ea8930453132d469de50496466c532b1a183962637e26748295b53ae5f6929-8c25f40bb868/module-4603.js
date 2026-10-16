var defineBuiltIn = require("./module-6840.js");
var uncurryThis = require("./module-9504.js");
var toString = require("./module-655.js");
var validateArgumentsLength = require("./module-2812.js");
var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var append = uncurryThis(URLSearchParamsPrototype.append);
var $delete = uncurryThis(URLSearchParamsPrototype["delete"]);
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
var push = uncurryThis([].push);
var params = new $URLSearchParams("a=1&a=2&b=3");
params["delete"]("a", 1);
params["delete"]("b", void 0);
if (params + "" !== "a=2") {
    defineBuiltIn(URLSearchParamsPrototype, "delete", function(name) {
        var length = arguments.length;
        var $value = length < 2 ? void 0 : arguments[1];
        if (length && $value === void 0) return $delete(this, name);
        var entries = [];
        forEach(this, function(v, k) {
            push(entries, {
                key: k,
                value: v
            });
        });
        validateArgumentsLength(length, 1);
        var key = toString(name);
        var value = toString($value);
        var index = 0;
        var dindex = 0;
        var found = false;
        var entriesLength = entries.length;
        var entry;
        while(index < entriesLength){
            entry = entries[index++];
            if (found || entry.key === key) {
                found = true;
                $delete(this, entry.key);
            } else dindex++;
        }
        while(dindex < entriesLength){
            entry = entries[dindex++];
            if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
        }
    }, {
        enumerable: true,
        unsafe: true
    });
}
