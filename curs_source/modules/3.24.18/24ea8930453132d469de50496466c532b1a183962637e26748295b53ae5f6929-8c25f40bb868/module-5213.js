var $ = require("./module-6518.js");
var globalThis2 = require("./module-4576.js");
var arrayFromConstructorAndList = require("./module-5370.js");
var $fromBase64 = require("./module-9143.js");
var Uint8Array2 = globalThis2.Uint8Array;
var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.fromBase64 || !function() {
    try {
        Uint8Array2.fromBase64("a");
        return;
    } catch (error) {}
    try {
        Uint8Array2.fromBase64("", null);
    } catch (error) {
        return true;
    }
}();
if (Uint8Array2) $({
    target: "Uint8Array",
    stat: true,
    forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS
}, {
    fromBase64: function fromBase64(string) {
        var result = $fromBase64(string, arguments.length > 1 ? arguments[1] : void 0, null, 9007199254740991);
        return arrayFromConstructorAndList(Uint8Array2, result.bytes);
    }
});
