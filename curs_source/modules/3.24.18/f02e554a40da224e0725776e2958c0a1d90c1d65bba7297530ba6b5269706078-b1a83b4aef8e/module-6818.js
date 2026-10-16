"use strict";
const { isUtf8: n } = require("./module-181.js"), { hasBlob: s } = require("./module-8864.js");
function i(t) {
    const e = t.length;
    let r = 0;
    for(; r < e;)if (128 & t[r]) if (192 == (224 & t[r])) {
        if (r + 1 === e || 128 != (192 & t[r + 1]) || 192 == (254 & t[r])) return !1;
        r += 2;
    } else if (224 == (240 & t[r])) {
        if (r + 2 >= e || 128 != (192 & t[r + 1]) || 128 != (192 & t[r + 2]) || 224 === t[r] && 128 == (224 & t[r + 1]) || 237 === t[r] && 160 == (224 & t[r + 1])) return !1;
        r += 3;
    } else {
        if (240 != (248 & t[r])) return !1;
        if (r + 3 >= e || 128 != (192 & t[r + 1]) || 128 != (192 & t[r + 2]) || 128 != (192 & t[r + 3]) || 240 === t[r] && 128 == (240 & t[r + 1]) || 244 === t[r] && t[r + 1] > 143 || t[r] > 244) return !1;
        r += 4;
    }
    else r++;
    return !0;
}
if (module.exports = {
    isBlob: function(t) {
        return s && "object" == typeof t && "function" == typeof t.arrayBuffer && "string" == typeof t.type && "function" == typeof t.stream && ("Blob" === t[Symbol.toStringTag] || "File" === t[Symbol.toStringTag]);
    },
    isValidStatusCode: function(t) {
        return t >= 1e3 && t <= 1014 && 1004 !== t && 1005 !== t && 1006 !== t || t >= 3e3 && t <= 4999;
    },
    isValidUTF8: i,
    tokenChars: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        1,
        0
    ]
}, n) module.exports.isValidUTF8 = function(t) {
    return t.length < 24 ? i(t) : n(t);
};
else if (!process.env.WS_NO_UTF_8_VALIDATE) try {
    const e = require("./module-6809.js");
    module.exports.isValidUTF8 = function(t) {
        return t.length < 32 ? i(t) : e(t);
    };
} catch (t) {}
