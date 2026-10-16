"use strict";
var n, s = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
    void 0 === n && (n = r);
    var s = Object.getOwnPropertyDescriptor(e, r);
    s && !("get" in s ? !e.__esModule : s.writable || s.configurable) || (s = {
        enumerable: !0,
        get: function() {
            return e[r];
        }
    }), Object.defineProperty(t, n, s);
} : function(t, e, r, n) {
    void 0 === n && (n = r), t[n] = e[r];
}), i = this && this.__setModuleDefault || (Object.create ? function(t, e) {
    Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
    });
} : function(t, e) {
    t.default = e;
}), o = this && this.__importStar || (n = function(t) {
    return n = Object.getOwnPropertyNames || function(t) {
        var e = [];
        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[e.length] = r);
        return e;
    }, n(t);
}, function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for(var r = n(t), o = 0; o < r.length; o++)"default" !== r[o] && s(e, t, r[o]);
    return i(e, t), e;
});
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.adaptiveGzip = void 0;
const a = require("./module-7975.js"), u = o(require("./module-8522.js")), c = require("./module-4384.js"), l = (0, a.promisify)(u.gzip);
exports.adaptiveGzip = {
    ...c.compressionGzip,
    compress (t) {
        const e = function(t) {
            const e = t.subarray(0, 4096);
            return u.deflateRawSync(e, {
                level: u.constants.Z_BEST_SPEED
            }).byteLength < .9 * e.byteLength;
        }(t) ? u.constants.Z_DEFAULT_COMPRESSION : u.constants.Z_NO_COMPRESSION;
        return l(t, {
            level: e
        });
    }
};
