"use strict";
require.d(exports, {
    i: ()=>s
});
var n = require("./module-93451.js");
const s = (e, t)=>((e)=>{
        const t = e.split("."), r = [];
        for (const s of t){
            const t = s.indexOf("[");
            if (-1 !== t) {
                if (s.indexOf("]") !== s.length - 1) throw new n.c(`Path: '${e}' does not end with ']'`);
                const i = s.slice(t + 1, -1);
                if (Number.isNaN(parseInt(i))) throw new n.c(`Invalid array index: '${i}' in path: '${e}'`);
                0 !== t && r.push(s.slice(0, t)), r.push(i);
            } else r.push(s);
        }
        return r;
    })(t).reduce((r, s)=>{
        if ("object" != typeof r) throw new n.c(`Index '${s}' in '${t}' not found in '${JSON.stringify(e)}'`);
        if (Array.isArray(r)) {
            const e = parseInt(s);
            return r[e < 0 ? r.length + e : e];
        }
        return r[s];
    }, e);
