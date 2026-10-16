"use strict";
function n(e) {
    if ("object" != typeof e.body || null === e.body || !(Symbol.asyncIterator in e.body)) throw new Error("byte stream required, but received JSON");
}
require.d(exports, {
    _L: ()=>i,
    kF: ()=>c,
    nZ: ()=>a,
    of: ()=>o,
    rJ: ()=>s,
    s4: ()=>n
});
const s = {
    status: 200
}, o = {
    status: 404
}, i = {
    status: 415
}, a = {
    status: 405
}, c = {
    status: 505
};
