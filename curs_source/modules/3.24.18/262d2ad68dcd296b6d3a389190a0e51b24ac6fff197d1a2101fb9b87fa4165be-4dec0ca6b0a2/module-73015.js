"use strict";
require.d(exports, {
    D9: ()=>d
});
var n = require("./module-73024.js");
function o(e) {
    if (!("linux" !== process.platform || void 0 === e || e <= 0)) try {
        (0, n.writeFileSync)(`/proc/${e}/oom_score_adj`, "0");
    } catch  {}
}
var s = require("./module-87199.js");
const i = /^\/sys\/fs\/cgroup\/[A-Za-z0-9_/.-]+$/, a = Object.freeze({
    kind: "direct"
});
function l({ workloadCgroupDir: e, hopCwd: t }) {
    const r = `echo $$ 2>/dev/null > '${e}/cgroup.procs'; echo 0 2>/dev/null > /proc/$$/oom_score_adj; `;
    return void 0 !== t ? r + s.N6 : `${r}exec "$0" "$@"`;
}
function c(e) {
    try {
        return !!(0, n.statSync)(e).isDirectory() && ((0, n.accessSync)(`${e}/cgroup.procs`, n.constants.W_OK), !0);
    } catch  {
        return !1;
    }
}
const u = function(e, t, r = c) {
    return "linux" === e && void 0 !== t && i.test(t) && !t.includes("..") && r(t) ? Object.freeze({
        kind: "armed",
        workloadCgroupDir: t,
        executable: "/bin/sh",
        argumentPrefix: Object.freeze([
            "-c",
            l({
                workloadCgroupDir: t
            })
        ])
    }) : a;
}(process.platform, process.env.CURSOR_WORKLOAD_CGROUP);
const d = function(e, t = o) {
    return function(r, n, o, ...i) {
        const a = i[0], c = (0, s.qr)() && null !== (u = a) && "object" == typeof u && !Array.isArray(u) ? (0, s.mM)(n, o, a) : void 0;
        var u;
        let d, p = n, h = [
            ...o
        ], m = i;
        !0 === c?.hopped && void 0 !== c.hopCwd ? (m = function(e, t) {
            return [
                t,
                ...e.slice(1)
            ];
        }(i, c.options), "armed" === e.kind ? (p = "/bin/sh", h = [
            "-c",
            l({
                workloadCgroupDir: e.workloadCgroupDir,
                hopCwd: c.hopCwd
            }),
            s.Gw,
            c.hopCwd,
            n,
            ...o
        ]) : (p = c.command, h = c.args)) : "armed" === e.kind && (p = e.executable, h = [
            ...e.argumentPrefix,
            n,
            ...o
        ]);
        try {
            d = r(p, h, ...m);
        } catch (e) {
            throw !0 === c?.hopped && void 0 !== c.hopCwd && (0, s.KX)(e, c.hopCwd), e;
        }
        return function(e, t) {
            "object" == typeof e && null !== e && "pid" in e && "number" == typeof e.pid ? t(e.pid) : "object" == typeof e && null !== e && "child" in e && "object" == typeof e.child && null !== e.child && "pid" in e.child && "number" == typeof e.child.pid && t(e.child.pid);
        }(d, t), !0 === c?.hopped && void 0 !== c.hopCwd ? (0, s.wr)(d, c.hopCwd) : d;
    };
}(u);
