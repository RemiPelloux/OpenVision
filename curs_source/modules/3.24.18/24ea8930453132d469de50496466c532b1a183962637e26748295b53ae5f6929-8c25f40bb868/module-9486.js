var $ = require("./module-6518.js");
var globalThis2 = require("./module-4576.js");
var uncurryThis = require("./module-9504.js");
var anObjectOrUndefined = require("./module-3972.js");
var anUint8Array = require("./module-4154.js");
var notDetached = require("./module-5169.js");
var base64Map = require("./module-2804.js");
var getAlphabetOption = require("./module-944.js");
var base64Alphabet = base64Map.i2c;
var base64UrlAlphabet = base64Map.i2cUrl;
var charAt = uncurryThis("".charAt);
var Uint8Array2 = globalThis2.Uint8Array;
var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.prototype.toBase64 || !function() {
    try {
        var target = new Uint8Array2();
        target.toBase64(null);
    } catch (error) {
        return true;
    }
}();
if (Uint8Array2) $({
    target: "Uint8Array",
    proto: true,
    forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS
}, {
    toBase64: function toBase64() {
        var array = anUint8Array(this);
        var options = arguments.length ? anObjectOrUndefined(arguments[0]) : void 0;
        var alphabet = getAlphabetOption(options) === "base64" ? base64Alphabet : base64UrlAlphabet;
        var omitPadding = !!options && !!options.omitPadding;
        notDetached(this.buffer);
        var result = "";
        var i = 0;
        var length = array.length;
        var triplet;
        var at = function(shift) {
            return charAt(alphabet, triplet >> 6 * shift & 63);
        };
        for(; i + 2 < length; i += 3){
            triplet = (array[i] << 16) + (array[i + 1] << 8) + array[i + 2];
            result += at(3) + at(2) + at(1) + at(0);
        }
        if (i + 2 === length) {
            triplet = (array[i] << 16) + (array[i + 1] << 8);
            result += at(3) + at(2) + at(1) + (omitPadding ? "" : "=");
        } else if (i + 1 === length) {
            triplet = array[i] << 16;
            result += at(3) + at(2) + (omitPadding ? "" : "==");
        }
        return result;
    }
});
