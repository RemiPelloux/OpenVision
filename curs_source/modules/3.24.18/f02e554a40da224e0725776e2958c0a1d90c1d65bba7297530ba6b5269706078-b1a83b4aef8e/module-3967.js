"use strict";
const e = Symbol.for("undici.globalOrigin.1");
module.exports = {
    getGlobalOrigin: function() {
        return globalThis[e];
    },
    setGlobalOrigin: function(t) {
        if (void 0 === t) return void Object.defineProperty(globalThis, e, {
            value: void 0,
            writable: !0,
            enumerable: !1,
            configurable: !1
        });
        const r = new URL(t);
        if ("http:" !== r.protocol && "https:" !== r.protocol) throw new TypeError(`Only http & https urls are allowed, received ${r.protocol}`);
        Object.defineProperty(globalThis, e, {
            value: r,
            writable: !0,
            enumerable: !1,
            configurable: !1
        });
    }
};
