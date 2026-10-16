"use strict";
require.d(exports, {
    K0: ()=>o,
    Nh: ()=>i,
    V2: ()=>a
});
const n = Symbol.for("anysphere.agent-store-sync.cloud-subagent-store-preparers.v1");
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
