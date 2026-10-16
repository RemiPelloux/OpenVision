"use strict";
require.d(exports, {
    B: ()=>o,
    y: ()=>i
});
var n = require("./module-328.js"), s = require("./module-8032.js");
const i = 1;
function o(t, e, r, i) {
    let o, a = null, u = null;
    if (null !== e && "identity" !== e) {
        const r = t.find((t)=>t.name === e);
        if (r) a = r;
        else {
            const r = t.map((t)=>t.name).join(",");
            o = new n.T(`unknown compression "${e}": supported encodings are ${r}`, s.C.Unimplemented, {
                [i]: r
            });
        }
    }
    if (null === r || "" === r) u = a;
    else {
        const e = r.split(",").map((t)=>t.trim());
        for (const r of e){
            const e = t.find((t)=>t.name === r);
            if (e) {
                u = e;
                break;
            }
        }
    }
    return {
        request: a,
        response: u,
        error: o
    };
}
