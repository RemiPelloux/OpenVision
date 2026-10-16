"use strict";
require.d(exports, {
    YW: ()=>c,
    Je: ()=>p,
    Ol: ()=>l,
    g4: ()=>u,
    cW: ()=>h,
    _y: ()=>d,
    vv: ()=>g,
    bI: ()=>m
});
var n = require("./module-77598.js"), s = require("./module-76760.js"), o = require("./module-11197.js"), i = require("./module-64500.js"), a = require("./module-19950.js");
const c = "agent-tools", l = 51380224, u = 4e4;
async function d({ contentItems: e, thresholdBytes: t, write: r }) {
    const n = e.filter((e)=>"text" === e.content.case && void 0 === e.content.value.outputLocation).map((e)=>"text" === e.content.case ? e.content.value.text : "").join("\n\n");
    if (t <= 0 || Buffer.byteLength(n, "utf8") <= t) return e;
    const s = await r(n);
    if (void 0 === s) return;
    const i = [];
    let a = !1;
    for (const t of e){
        "text" === t.content.case && void 0 === t.content.value.outputLocation ? a || (i.push(new o._Z({
            content: {
                case: "text",
                value: new o.zN({
                    text: "",
                    outputLocation: s
                })
            }
        })), a = !0) : i.push(t);
    }
    return i;
}
const p = 2e4;
async function m(e, t, { content: r, projectDir: o, osPlatform: u, toolCallId: d, maxSize: p }) {
    const m = function(e, t) {
        const r = Buffer.from(e, "utf8");
        if (r.byteLength <= t) return e;
        const n = r.subarray(0, t).toString("utf8");
        return n.endsWith("�") ? n.slice(0, -1) : n;
    }(r, Math.min(p ?? l, l)), h = ("win32" === u ? s.win32.join : s.posix.join)(o, c, `${(0, n.randomUUID)()}.txt`), f = m.split("\n").length, g = Buffer.byteLength(m, "utf8"), y = await t.execute(e, new a.hY({
        path: h,
        fileText: m,
        toolCallId: d
    }));
    switch(y.result.case){
        case "success":
            return new i.pV({
                filePath: y.result.value.path,
                sizeBytes: BigInt(g),
                lineCount: BigInt(f)
            });
        case "permissionDenied":
        case "noSpace":
        case "error":
        case "rejected":
        case void 0:
            return;
        default:
            {
                const e = y.result;
                throw new Error(`Unhandled write result case: ${e}`);
            }
    }
}
function h(e, t) {
    return `${t?.leadText ?? "Content"} written to file: ${e.filePath}\nSize: ${function(e) {
        const t = Number(e);
        return t >= 1024 ? `${(t / 1024).toFixed(1)} KB` : `${t} bytes`;
    }(e.sizeBytes)}, ${e.lineCount} lines`;
}
const f = new (require("./module-16698.js")).AsyncLocalStorage;
function g(e, t) {
    return f.run(e, t);
}
