"use strict";
require.d(exports, {
    D9: ()=>d
});
var n = require("./module-73024.js");
function s(e) {
    if (!("linux" !== process.platform || void 0 === e || e <= 0)) try {
        (0, n.writeFileSync)(`/proc/${e}/oom_score_adj`, "0");
    } catch  {}
}
var o = require("./module-87199.js");
const i = /^\/sys\/fs\/cgroup\/[A-Za-z0-9_/.-]+$/, a = Object.freeze({
    kind: "direct"
});
function c({ workloadCgroupDir: e, hopCwd: t }) {
    const r = `echo $$ 2>/dev/null > '${e}/cgroup.procs'; echo 0 2>/dev/null > /proc/$$/oom_score_adj; `;
    return void 0 !== t ? r + o.N6 : `${r}exec "$0" "$@"`;
}
function l(e) {
    try {
        return !!(0, n.statSync)(e).isDirectory() && ((0, n.accessSync)(`${e}/cgroup.procs`, n.constants.W_OK), !0);
    } catch  {
        return !1;
    }
}
const u = function(e, t, r = l) {
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
const d = function(e, t = s) {
    return function(r, n, s, ...i) {
        const a = i[0], l = (0, o.qr)() && null !== (u = a) && "object" == typeof u && !Array.isArray(u) ? (0, o.mM)(n, s, a) : void 0;
        var u;
        let d, p = n, m = [
            ...s
        ], h = i;
        !0 === l?.hopped && void 0 !== l.hopCwd ? (h = function(e, t) {
            return [
                t,
                ...e.slice(1)
            ];
        }(i, l.options), "armed" === e.kind ? (p = "/bin/sh", m = [
            "-c",
            c({
                workloadCgroupDir: e.workloadCgroupDir,
                hopCwd: l.hopCwd
            }),
            o.Gw,
            l.hopCwd,
            n,
            ...s
        ]) : (p = l.command, m = l.args)) : "armed" === e.kind && (p = e.executable, m = [
            ...e.argumentPrefix,
            n,
            ...s
        ]);
        try {
            d = r(p, m, ...h);
        } catch (e) {
            throw !0 === l?.hopped && void 0 !== l.hopCwd && (0, o.KX)(e, l.hopCwd), e;
        }
        return function(e, t) {
            "object" == typeof e && null !== e && "pid" in e && "number" == typeof e.pid ? t(e.pid) : "object" == typeof e && null !== e && "child" in e && "object" == typeof e.child && null !== e.child && "pid" in e.child && "number" == typeof e.child.pid && t(e.child.pid);
        }(d, t), !0 === l?.hopped && void 0 !== l.hopCwd ? (0, o.wr)(d, l.hopCwd) : d;
    };
}(u);
