"use strict";
const n = Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: s } = require("./module-8762.js"), i = require("./module-7132.js");
function o(t) {
    if (!t || "function" != typeof t.dispatch) throw new s("Argument agent must implement Agent");
    Object.defineProperty(globalThis, n, {
        value: t,
        writable: !0,
        enumerable: !1,
        configurable: !1
    });
}
function a() {
    return globalThis[n];
}
void 0 === a() && o(new i), module.exports = {
    setGlobalDispatcher: o,
    getGlobalDispatcher: a
};
