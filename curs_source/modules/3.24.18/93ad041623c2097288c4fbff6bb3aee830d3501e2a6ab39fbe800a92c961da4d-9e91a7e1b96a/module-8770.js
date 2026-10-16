"use strict";
require.d(exports, {
    b: ()=>s
});
var n = require(73931);
const s = (e, t = {})=>{
    const { headers: r, query: s = {} } = n.HttpRequest.clone(e);
    for (const e of Object.keys(r)){
        const n = e.toLowerCase();
        ("x-amz-" === n.slice(0, 6) && !t.unhoistableHeaders?.has(n) || t.hoistableHeaders?.has(n)) && (s[e] = r[e], delete r[e]);
    }
    return {
        ...e,
        headers: r,
        query: s
    };
};
