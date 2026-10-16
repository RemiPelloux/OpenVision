"use strict";
var n, s = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
    void 0 === n && (n = r);
    var s = Object.getOwnPropertyDescriptor(t, r);
    s && !("get" in s ? !t.__esModule : s.writable || s.configurable) || (s = {
        enumerable: !0,
        get: function() {
            return t[r];
        }
    }), Object.defineProperty(e, n, s);
} : function(e, t, r, n) {
    void 0 === n && (n = r), e[n] = t[r];
}), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    });
} : function(e, t) {
    e.default = t;
}), i = this && this.__importStar || (n = function(e) {
    return n = Object.getOwnPropertyNames || function(e) {
        var t = [];
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
        return t;
    }, n(e);
}, function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for(var r = n(e), i = 0; i < r.length; i++)"default" !== r[i] && s(t, e, r[i]);
    return o(t, e), t;
});
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.adaptiveGzip = void 0;
const a = require("./module-57975.js"), c = i(require("./module-38522.js")), l = require("./module-85964.js"), u = (0, a.promisify)(c.gzip);
exports.adaptiveGzip = {
    ...l.compressionGzip,
    compress (e) {
        const t = function(e) {
            const t = e.subarray(0, 4096);
            return c.deflateRawSync(t, {
                level: c.constants.Z_BEST_SPEED
            }).byteLength < .9 * t.byteLength;
        }(e) ? c.constants.Z_DEFAULT_COMPRESSION : c.constants.Z_NO_COMPRESSION;
        return u(e, {
            level: t
        });
    }
};
