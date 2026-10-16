"use strict";
const e = Symbol.for("undici.globalOrigin.1");
module.exports = {
    getGlobalOrigin: function() {
        return globalThis[e];
    },
    setGlobalOrigin: function(A) {
        if (void 0 === A) return void Object.defineProperty(globalThis, e, {
            value: void 0,
            writable: !0,
            enumerable: !1,
            configurable: !1
        });
        const t = new URL(A);
        if ("http:" !== t.protocol && "https:" !== t.protocol) throw new TypeError(`Only http & https urls are allowed, received ${t.protocol}`);
        Object.defineProperty(globalThis, e, {
            value: t,
            writable: !0,
            enumerable: !1,
            configurable: !1
        });
    }
};
