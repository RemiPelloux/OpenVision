"use strict";
require.d(exports, {
    ht: ()=>s,
    rh: ()=>i
});
var n = require("./module-738.js");
require("./module-768.js");
function o(e) {
    return e.trim().toLowerCase();
}
function s({ mode: e, tools: t }) {
    const r = (t ?? []).map(o).filter((e)=>e.length > 0);
    const n = void 0 === e ? void 0 : o(e);
    return "all" === n ? {
        mode: "all"
    } : "reads" === n ? {
        mode: "reads"
    } : r.length > 0 ? {
        mode: "custom",
        tools: r
    } : {
        mode: "all"
    };
}
function i(e, t) {
    switch(e.mode){
        case "all":
            return !0;
        case "custom":
            return function(e, t) {
                const r = o(e);
                return 0 !== r.length && t.some((e)=>o(e) === r);
            }(t.name, e.tools);
        case "reads":
            return (0, n.NY)(t.annotations);
        default:
            return e;
    }
}
