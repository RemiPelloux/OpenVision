"use strict";
require.d(exports, {
    B: ()=>i,
    y: ()=>o
});
var n = require("./module-92801.js"), s = require("./module-84959.js");
const o = 1;
function i(e, t, r, o) {
    let i, a = null, c = null;
    if (null !== t && "identity" !== t) {
        const r = e.find((e)=>e.name === t);
        if (r) a = r;
        else {
            const r = e.map((e)=>e.name).join(",");
            i = new n.T(`unknown compression "${t}": supported encodings are ${r}`, s.C.Unimplemented, {
                [o]: r
            });
        }
    }
    if (null === r || "" === r) c = a;
    else {
        const t = r.split(",").map((e)=>e.trim());
        for (const r of t){
            const t = e.find((e)=>e.name === r);
            if (t) {
                c = t;
                break;
            }
        }
    }
    return {
        request: a,
        response: c,
        error: i
    };
}
