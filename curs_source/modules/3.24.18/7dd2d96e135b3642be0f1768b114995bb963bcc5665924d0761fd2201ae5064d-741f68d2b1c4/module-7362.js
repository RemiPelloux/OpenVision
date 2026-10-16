"use strict";
const a = Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: s } = require("./module-7902.js"), o = require("./module-568.js");
function r(e) {
    if (!e || "function" != typeof e.dispatch) throw new s("Argument agent must implement Agent");
    Object.defineProperty(globalThis, a, {
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !1
    });
}
function i() {
    return globalThis[a];
}
void 0 === i() && r(new o), module.exports = {
    setGlobalDispatcher: r,
    getGlobalDispatcher: i
};
