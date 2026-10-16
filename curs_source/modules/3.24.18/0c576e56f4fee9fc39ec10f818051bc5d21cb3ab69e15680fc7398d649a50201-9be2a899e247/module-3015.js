"use strict";
require.d(exports, {
    D9: ()=>d
});
var n = require("./module-3024.js");
function o(e) {
    if (!("linux" !== process.platform || void 0 === e || e <= 0)) try {
        (0, n.writeFileSync)(`/proc/${e}/oom_score_adj`, "0");
    } catch  {}
}
var s = require("./module-3228.js");
const i = /^\/sys\/fs\/cgroup\/[A-Za-z0-9_/.-]+$/, a = Object.freeze({
    kind: "direct"
});
function c({ workloadCgroupDir: e, hopCwd: t }) {
    const r = `echo $$ 2>/dev/null > '${e}/cgroup.procs'; echo 0 2>/dev/null > /proc/$$/oom_score_adj; `;
    return void 0 !== t ? r + s.N6 : `${r}exec "$0" "$@"`;
}
function u(e) {
    try {
        return !!(0, n.statSync)(e).isDirectory() && ((0, n.accessSync)(`${e}/cgroup.procs`, n.constants.W_OK), !0);
    } catch  {
        return !1;
    }
}
const l = function(e, t, r = u) {
    return "linux" === e && void 0 !== t && i.test(t) && !t.includes("..") && r(t) ? Object.freeze({
        kind: "armed",
        workloadCgroupDir: t,
        executable: "/bin/sh",
        argumentPrefix: Object.freeze([
            "-c",
            c({
                workloadCgroupDir: t
            })
        ])
    }) : a;
}(process.platform, process.env.CURSOR_WORKLOAD_CGROUP);
const d = function(e, t = o) {
    return function(r, n, o, ...i) {
        const a = i[0], u = (0, s.qr)() && null !== (l = a) && "object" == typeof l && !Array.isArray(l) ? (0, s.mM)(n, o, a) : void 0;
        var l;
        let d, p = n, f = [
            ...o
        ], h = i;
        !0 === u?.hopped && void 0 !== u.hopCwd ? (h = function(e, t) {
            return [
                t,
                ...e.slice(1)
            ];
        }(i, u.options), "armed" === e.kind ? (p = "/bin/sh", f = [
            "-c",
            c({
                workloadCgroupDir: e.workloadCgroupDir,
                hopCwd: u.hopCwd
            }),
            s.Gw,
            u.hopCwd,
            n,
            ...o
        ]) : (p = u.command, f = u.args)) : "armed" === e.kind && (p = e.executable, f = [
            ...e.argumentPrefix,
            n,
            ...o
        ]);
        try {
            d = r(p, f, ...h);
        } catch (e) {
            throw !0 === u?.hopped && void 0 !== u.hopCwd && (0, s.KX)(e, u.hopCwd), e;
        }
        return function(e, t) {
            "object" == typeof e && null !== e && "pid" in e && "number" == typeof e.pid ? t(e.pid) : "object" == typeof e && null !== e && "child" in e && "object" == typeof e.child && null !== e.child && "pid" in e.child && "number" == typeof e.child.pid && t(e.child.pid);
        }(d, t), !0 === u?.hopped && void 0 !== u.hopCwd ? (0, s.wr)(d, u.hopCwd) : d;
    };
}(l);
