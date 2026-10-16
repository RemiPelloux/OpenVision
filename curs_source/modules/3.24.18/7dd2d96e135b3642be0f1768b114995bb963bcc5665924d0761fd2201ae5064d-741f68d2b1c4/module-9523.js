"use strict";
const n = Symbol.for("undici.globalOrigin.1");
module.exports = {
    getGlobalOrigin: function() {
        return globalThis[n];
    },
    setGlobalOrigin: function(e) {
        if (void 0 === e) return void Object.defineProperty(globalThis, n, {
            value: void 0,
            writable: !0,
            enumerable: !1,
            configurable: !1
        });
        const t = new URL(e);
        if ("http:" !== t.protocol && "https:" !== t.protocol) throw new TypeError(`Only http & https urls are allowed, received ${t.protocol}`);
        Object.defineProperty(globalThis, n, {
            value: t,
            writable: !0,
            enumerable: !1,
            configurable: !1
        });
    }
};
