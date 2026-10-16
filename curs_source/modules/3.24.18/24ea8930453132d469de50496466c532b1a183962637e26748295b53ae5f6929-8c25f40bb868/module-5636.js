var globalThis2 = require("./module-4576.js");
var uncurryThis = require("./module-9504.js");
var uncurryThisAccessor = require("./module-6706.js");
var toIndex = require("./module-7696.js");
var notDetached = require("./module-5169.js");
var arrayBufferByteLength = require("./module-7394.js");
var detachTransferable = require("./module-4483.js");
var PROPER_STRUCTURED_CLONE_TRANSFER = require("./module-1548.js");
var structuredClone2 = globalThis2.structuredClone;
var ArrayBuffer2 = globalThis2.ArrayBuffer;
var DataView2 = globalThis2.DataView;
var min = Math.min;
var ArrayBufferPrototype = ArrayBuffer2.prototype;
var DataViewPrototype = DataView2.prototype;
var slice = uncurryThis(ArrayBufferPrototype.slice);
var isResizable = uncurryThisAccessor(ArrayBufferPrototype, "resizable", "get");
var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype, "maxByteLength", "get");
var getInt8 = uncurryThis(DataViewPrototype.getInt8);
var setInt8 = uncurryThis(DataViewPrototype.setInt8);
module.exports = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable) && function(arrayBuffer, newLength, preserveResizability) {
    var byteLength = arrayBufferByteLength(arrayBuffer);
    var newByteLength = newLength === void 0 ? byteLength : toIndex(newLength);
    var fixedLength = !isResizable || !isResizable(arrayBuffer);
    var newBuffer;
    notDetached(arrayBuffer);
    if (PROPER_STRUCTURED_CLONE_TRANSFER) {
        arrayBuffer = structuredClone2(arrayBuffer, {
            transfer: [
                arrayBuffer
            ]
        });
        if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
    }
    if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
        newBuffer = slice(arrayBuffer, 0, newByteLength);
    } else {
        var options = preserveResizability && !fixedLength && maxByteLength ? {
            maxByteLength: maxByteLength(arrayBuffer)
        } : void 0;
        newBuffer = new ArrayBuffer2(newByteLength, options);
        var a = new DataView2(arrayBuffer);
        var b = new DataView2(newBuffer);
        var copyLength = min(newByteLength, byteLength);
        for(var i = 0; i < copyLength; i++)setInt8(b, i, getInt8(a, i));
    }
    if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);
    return newBuffer;
};
