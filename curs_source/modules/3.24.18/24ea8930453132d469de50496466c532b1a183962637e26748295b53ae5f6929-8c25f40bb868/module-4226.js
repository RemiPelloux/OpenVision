var $ = require("./module-6518.js");
var globalThis2 = require("./module-4576.js");
var aString = require("./module-3463.js");
var anUint8Array = require("./module-4154.js");
var notDetached = require("./module-5169.js");
var $fromHex = require("./module-2303.js");
if (globalThis2.Uint8Array) $({
    target: "Uint8Array",
    proto: true
}, {
    setFromHex: function setFromHex(string) {
        anUint8Array(this);
        aString(string);
        notDetached(this.buffer);
        var read = $fromHex(string, this).read;
        return {
            read,
            written: read / 2
        };
    }
});
