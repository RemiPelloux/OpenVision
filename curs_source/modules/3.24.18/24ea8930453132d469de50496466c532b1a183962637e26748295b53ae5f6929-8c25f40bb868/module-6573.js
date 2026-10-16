var DESCRIPTORS = require("./module-3724.js");
var defineBuiltInAccessor = require("./module-2106.js");
var isDetached = require("./module-3238.js");
var ArrayBufferPrototype = ArrayBuffer.prototype;
if (DESCRIPTORS && !("detached" in ArrayBufferPrototype)) {
    defineBuiltInAccessor(ArrayBufferPrototype, "detached", {
        configurable: true,
        get: function detached() {
            return isDetached(this);
        }
    });
}
