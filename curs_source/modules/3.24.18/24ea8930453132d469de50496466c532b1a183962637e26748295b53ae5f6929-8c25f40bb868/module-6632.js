var $ = require("./module-6518.js");
var globalThis2 = require("./module-4576.js");
var $fromBase64 = require("./module-9143.js");
var anUint8Array = require("./module-4154.js");
var Uint8Array2 = globalThis2.Uint8Array;
var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.prototype.setFromBase64 || !function() {
    var target = new Uint8Array2([
        255,
        255,
        255,
        255,
        255
    ]);
    try {
        target.setFromBase64("", null);
        return;
    } catch (error) {}
    try {
        target.setFromBase64("a");
        return;
    } catch (error) {}
    try {
        target.setFromBase64("MjYyZg===");
    } catch (error) {
        return target[0] === 50 && target[1] === 54 && target[2] === 50 && target[3] === 255 && target[4] === 255;
    }
}();
if (Uint8Array2) $({
    target: "Uint8Array",
    proto: true,
    forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS
}, {
    setFromBase64: function setFromBase64(string) {
        anUint8Array(this);
        var result = $fromBase64(string, arguments.length > 1 ? arguments[1] : void 0, this, this.length);
        return {
            read: result.read,
            written: result.written
        };
    }
});
