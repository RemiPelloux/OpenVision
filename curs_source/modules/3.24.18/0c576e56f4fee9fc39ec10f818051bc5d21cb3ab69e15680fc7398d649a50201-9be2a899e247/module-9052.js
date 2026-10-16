"use strict";
let n;
function o(e) {
    n = e;
}
require.d(exports, {
    KR: ()=>i,
    iO: ()=>o
});
const s = {
    info: ()=>{},
    warn: ()=>{},
    error: ()=>{},
    debug: ()=>{}
};
function i(e) {
    return n?.getLogger(e) ?? s;
}
