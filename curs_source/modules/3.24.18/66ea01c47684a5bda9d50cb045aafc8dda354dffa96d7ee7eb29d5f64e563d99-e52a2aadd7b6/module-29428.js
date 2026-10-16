require.d(exports, {
    f: ()=>i
});
var r = require(57075), n = require("./module-70904.js");
const s = 6e3;
async function i(e, t, o = s, i = !1) {
    const a = t.headers, c = a ? a.Expect || a.expect : void 0;
    let u = -1, l = !0;
    i || "100-continue" !== c || (l = await Promise.race([
        new Promise((e)=>{
            u = Number(n.N.setTimeout(()=>e(!0), Math.max(s, o)));
        }),
        new Promise((t)=>{
            e.on("continue", ()=>{
                n.N.clearTimeout(u), t(!0);
            }), e.on("response", ()=>{
                n.N.clearTimeout(u), t(!1);
            }), e.on("error", ()=>{
                n.N.clearTimeout(u), t(!1);
            });
        })
    ])), l && function(e, t) {
        if (t instanceof r.Readable) return void t.pipe(e);
        if (t) {
            const o = Buffer.isBuffer(t);
            if (o || "string" == typeof t) return void (o && 0 === t.byteLength ? e.end() : e.end(t));
            const r = t;
            return "object" == typeof r && r.buffer && "number" == typeof r.byteOffset && "number" == typeof r.byteLength ? void e.end(Buffer.from(r.buffer, r.byteOffset, r.byteLength)) : void e.end(Buffer.from(t));
        }
        e.end();
    }(e, t.body);
}
