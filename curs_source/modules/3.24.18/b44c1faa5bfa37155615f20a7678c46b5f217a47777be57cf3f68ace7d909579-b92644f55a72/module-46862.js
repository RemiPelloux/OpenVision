"use strict";
function n(e, t) {
    return void 0 !== e ? [
        ...e
    ] : (r = t, r?.map((e)=>e.uri.fsPath) ?? []);
    var r;
}
function s(e, t) {
    return 0 === e.length ? [
        t
    ] : [
        ...e
    ];
}
require.d(exports, {
    BS: ()=>n,
    En: ()=>s,
    x3: ()=>o
});
const o = s;
