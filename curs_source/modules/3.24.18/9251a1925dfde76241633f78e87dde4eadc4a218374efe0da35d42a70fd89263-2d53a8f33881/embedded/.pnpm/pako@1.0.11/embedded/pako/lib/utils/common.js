var __wakaru_require_common2_cache;
export function require_common2() {
if (__wakaru_require_common2_cache) return __wakaru_require_common2_cache;
var exports2 = {};
__wakaru_require_common2_cache = exports2;
"use strict";
var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
function _has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
exports2.assign = function(obj) {
    var sources = Array.prototype.slice.call(arguments, 1);
    while(sources.length){
        var source = sources.shift();
        if (!source) {
            continue;
        }
        if (typeof source !== "object") {
            throw new TypeError(source + "must be non-object");
        }
        for(var p2 in source){
            if (_has(source, p2)) {
                obj[p2] = source[p2];
            }
        }
    }
    return obj;
};
exports2.shrinkBuf = function(buf, size) {
    if (buf.length === size) {
        return buf;
    }
    if (buf.subarray) {
        return buf.subarray(0, size);
    }
    buf.length = size;
    return buf;
};
var fnTyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
        if (src.subarray && dest.subarray) {
            dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
            return;
        }
        for(var i = 0; i < len; i++){
            dest[dest_offs + i] = src[src_offs + i];
        }
    },
    flattenChunks: function(chunks) {
        var i, l, len, pos, chunk, result;
        len = 0;
        for(i = 0, l = chunks.length; i < l; i++){
            len += chunks[i].length;
        }
        result = new Uint8Array(len);
        pos = 0;
        for(i = 0, l = chunks.length; i < l; i++){
            chunk = chunks[i];
            result.set(chunk, pos);
            pos += chunk.length;
        }
        return result;
    }
};
var fnUntyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
        for(var i = 0; i < len; i++){
            dest[dest_offs + i] = src[src_offs + i];
        }
    },
    flattenChunks: function(chunks) {
        return [].concat.apply([], chunks);
    }
};
exports2.setTyped = function(on) {
    if (on) {
        exports2.Buf8 = Uint8Array;
        exports2.Buf16 = Uint16Array;
        exports2.Buf32 = Int32Array;
        exports2.assign(exports2, fnTyped);
    } else {
        exports2.Buf8 = Array;
        exports2.Buf16 = Array;
        exports2.Buf32 = Array;
        exports2.assign(exports2, fnUntyped);
    }
};
exports2.setTyped(TYPED_OK);

return exports2;
}
