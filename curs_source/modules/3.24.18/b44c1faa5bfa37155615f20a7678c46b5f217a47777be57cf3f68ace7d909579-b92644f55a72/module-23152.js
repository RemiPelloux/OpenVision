"use strict";
require.d(exports, {
    R6: ()=>o,
    gR: ()=>i,
    ux: ()=>a
});
const n = Symbol.for("anysphere.agent-store-sync.local-subagent-store-mounters.v1");
function s() {
    const e = Reflect.get(globalThis, n);
    if (e instanceof Set) return e;
    const t = new Set;
    return Reflect.set(globalThis, n, t), t;
}
function o(e) {
    s().add(e);
}
function i(e) {
    s().delete(e);
}
function a() {
    return s().values().next().value;
}
