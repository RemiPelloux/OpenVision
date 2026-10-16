"use strict";
const r = Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: s } = require("./module-38238.js"), o = require("./module-16618.js");
function n(A) {
    if (!A || "function" != typeof A.dispatch) throw new s("Argument agent must implement Agent");
    Object.defineProperty(globalThis, r, {
        value: A,
        writable: !0,
        enumerable: !1,
        configurable: !1
    });
}
function i() {
    return globalThis[r];
}
void 0 === i() && n(new o), module.exports = {
    setGlobalDispatcher: n,
    getGlobalDispatcher: i
};
