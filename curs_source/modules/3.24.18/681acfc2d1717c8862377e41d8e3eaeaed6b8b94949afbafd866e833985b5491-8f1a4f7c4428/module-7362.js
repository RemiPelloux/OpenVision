"use strict";
const n = Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: r } = require("./module-7902.js"), o = require("./module-568.js");
function s(e) {
    if (!e || "function" != typeof e.dispatch) throw new r("Argument agent must implement Agent");
    Object.defineProperty(globalThis, n, {
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !1
    });
}
function i() {
    return globalThis[n];
}
void 0 === i() && s(new o), module.exports = {
    setGlobalDispatcher: s,
    getGlobalDispatcher: i
};
