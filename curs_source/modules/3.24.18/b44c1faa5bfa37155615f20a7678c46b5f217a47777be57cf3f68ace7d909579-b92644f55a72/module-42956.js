"use strict";
require.d(exports, {
    V: ()=>s,
    a: ()=>o
});
const n = new WeakMap;
function s(e, t) {
    return n.set(e, t), e;
}
function o(e) {
    return n.get(e);
}
