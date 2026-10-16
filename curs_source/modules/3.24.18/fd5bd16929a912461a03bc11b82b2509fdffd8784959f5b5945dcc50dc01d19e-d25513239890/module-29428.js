"use strict";
require.d(exports, {
    f: ()=>o
});
var n = require(57075), s = require("./module-70904.js");
const i = 6e3;
async function o(e, t, r = i, o = !1) {
    const a = t.headers, c = a ? a.Expect || a.expect : void 0;
    let l = -1, u = !0;
    o || "100-continue" !== c || (u = await Promise.race([
        new Promise((e)=>{
            l = Number(s.N.setTimeout(()=>e(!0), Math.max(i, r)));
        }),
        new Promise((t)=>{
            e.on("continue", ()=>{
                s.N.clearTimeout(l), t(!0);
            }), e.on("response", ()=>{
                s.N.clearTimeout(l), t(!1);
            }), e.on("error", ()=>{
                s.N.clearTimeout(l), t(!1);
            });
        })
    ])), u && function(e, t) {
        if (t instanceof n.Readable) return void t.pipe(e);
        if (t) {
            const r = Buffer.isBuffer(t);
            if (r || "string" == typeof t) return void (r && 0 === t.byteLength ? e.end() : e.end(t));
            const n = t;
            return "object" == typeof n && n.buffer && "number" == typeof n.byteOffset && "number" == typeof n.byteLength ? void e.end(Buffer.from(n.buffer, n.byteOffset, n.byteLength)) : void e.end(Buffer.from(t));
        }
        e.end();
    }(e, t.body);
}
