"use strict";
require.d(exports, {
    X: ()=>s
});
const n = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"), s = (e, t = !1)=>{
    if (!t) return n.test(e);
    const r = e.split(".");
    for (const e of r)if (!s(e)) return !1;
    return !0;
};
