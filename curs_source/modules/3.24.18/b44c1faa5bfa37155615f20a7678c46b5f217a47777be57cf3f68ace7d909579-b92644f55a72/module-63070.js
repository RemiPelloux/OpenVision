"use strict";
require.d(exports, {
    Qt: ()=>n,
    Rz: ()=>s,
    xF: ()=>o
});
const n = "context";
function s(e) {
    const t = e.longContextThresholdTokens;
    return void 0 === t || t >= e.contextWindowTokens ? {
        defaultTokens: e.contextWindowTokens
    } : {
        defaultTokens: t,
        longTokens: e.contextWindowTokens
    };
}
function o(e) {
    return e >= 1e6 ? Math.round(e / 1e6 * 10) / 10 + "M" : e >= 1e3 ? `${Math.round(e / 1e3)}K` : String(e);
}
