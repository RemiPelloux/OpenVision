"use strict";
function n(t) {
    if ("object" != typeof t.body || null === t.body || !(Symbol.asyncIterator in t.body)) throw new Error("byte stream required, but received JSON");
}
require.d(exports, {
    _L: ()=>o,
    kF: ()=>u,
    nZ: ()=>a,
    of: ()=>i,
    rJ: ()=>s,
    s4: ()=>n
});
const s = {
    status: 200
}, i = {
    status: 404
}, o = {
    status: 415
}, a = {
    status: 405
}, u = {
    status: 505
};
