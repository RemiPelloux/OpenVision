var $ = require("./module-6518.js");
var globalThis2 = require("./module-4576.js");
var uncurryThis = require("./module-9504.js");
var anUint8Array = require("./module-4154.js");
var notDetached = require("./module-5169.js");
var numberToString = uncurryThis(1.1.toString);
var Uint8Array2 = globalThis2.Uint8Array;
var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.prototype.toHex || !function() {
    try {
        var target = new Uint8Array2([
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
        ]);
        return target.toHex() === "ffffffffffffffff";
    } catch (error) {
        return false;
    }
}();
if (Uint8Array2) $({
    target: "Uint8Array",
    proto: true,
    forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS
}, {
    toHex: function toHex() {
        anUint8Array(this);
        notDetached(this.buffer);
        var result = "";
        for(var i = 0, length = this.length; i < length; i++){
            var hex = numberToString(this[i], 16);
            result += hex.length === 1 ? "0" + hex : hex;
        }
        return result;
    }
});
