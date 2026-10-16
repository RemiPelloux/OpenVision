"use strict";
const t = Symbol.for("undici.globalOrigin.1");
module.exports = {
    getGlobalOrigin: function() {
        return globalThis[t];
    },
    setGlobalOrigin: function(e) {
        if (void 0 === e) return void Object.defineProperty(globalThis, t, {
            value: void 0,
            writable: !0,
            enumerable: !1,
            configurable: !1
        });
        const r = new URL(e);
        if ("http:" !== r.protocol && "https:" !== r.protocol) throw new TypeError(`Only http & https urls are allowed, received ${r.protocol}`);
        Object.defineProperty(globalThis, t, {
            value: r,
            writable: !0,
            enumerable: !1,
            configurable: !1
        });
    }
};
