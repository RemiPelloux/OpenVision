"use strict";
const n = Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: s } = require("./module-48762.js"), o = require("./module-57132.js");
function i(e) {
    if (!e || "function" != typeof e.dispatch) throw new s("Argument agent must implement Agent");
    Object.defineProperty(globalThis, n, {
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !1
    });
}
function a() {
    return globalThis[n];
}
void 0 === a() && i(new o), module.exports = {
    setGlobalDispatcher: i,
    getGlobalDispatcher: a
};
