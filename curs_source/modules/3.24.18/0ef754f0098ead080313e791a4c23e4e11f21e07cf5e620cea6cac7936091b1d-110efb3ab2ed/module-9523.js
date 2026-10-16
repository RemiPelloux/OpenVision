"use strict";
const a = Symbol.for("undici.globalOrigin.1");
module.exports = {
    getGlobalOrigin: function() {
        return globalThis[a];
    },
    setGlobalOrigin: function(e) {
        if (void 0 === e) return void Object.defineProperty(globalThis, a, {
            value: void 0,
            writable: !0,
            enumerable: !1,
            configurable: !1
        });
        const n = new URL(e);
        if ("http:" !== n.protocol && "https:" !== n.protocol) throw new TypeError(`Only http & https urls are allowed, received ${n.protocol}`);
        Object.defineProperty(globalThis, a, {
            value: n,
            writable: !0,
            enumerable: !1,
            configurable: !1
        });
    }
};
