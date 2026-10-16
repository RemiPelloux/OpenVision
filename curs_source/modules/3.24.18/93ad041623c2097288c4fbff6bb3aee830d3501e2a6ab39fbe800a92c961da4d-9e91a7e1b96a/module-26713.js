"use strict";
require.d(exports, {
    M: ()=>s
});
var n = require("./module-2979.js");
const s = (e, t)=>{
    const r = [], { referenceRecord: s, endpointParams: i } = t;
    let o = 0;
    for(; o < e.length;){
        const t = e.indexOf("{", o);
        if (-1 === t) {
            r.push(e.slice(o));
            break;
        }
        r.push(e.slice(o, t));
        const a = e.indexOf("}", t);
        if (-1 === a) {
            r.push(e.slice(t));
            break;
        }
        "{" === e[t + 1] && "}" === e[a + 1] && (r.push(e.slice(t + 1, a)), o = a + 2);
        const c = e.substring(t + 1, a);
        if (c.includes("#")) {
            const [e, t] = c.split("#");
            r.push((0, n.i)(s[e] ?? i[e], t));
        } else r.push(s[c] ?? i[c]);
        o = a + 1;
    }
    return r.join("");
};
