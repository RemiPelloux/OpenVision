"use strict";
require.d(exports, {
    A: ()=>s,
    G: ()=>o
});
const n = new WeakMap;
function s(e, t) {
    n.set(e, t);
}
function o(e) {
    return n.get(e);
}
