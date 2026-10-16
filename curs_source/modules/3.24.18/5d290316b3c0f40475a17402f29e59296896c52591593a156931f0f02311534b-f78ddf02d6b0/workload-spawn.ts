import { Ai, cc, op, wi } from "./bash.ts";
import { O5 } from "./oom-score-adj.ts";
import { Ri, Ti, Xn, ac, hc, pp, uc, vp } from "./safe-spawn-cwd.ts";
import { h } from "./tslib.es6.js";
import { PassThrough as H5 } from "node:stream";
import { writeFileSync as I5 } from "node:fs";
import { accessSync as _b } from "node:fs";
import bi from "node:path";
import { constants as mb } from "node:fs";
import { statSync as vb } from "node:fs";
function P5(e) {
    if (!(process.platform !== "linux" || e === void 0 || e <= 0)) try {
        I5(`/proc/${e}/oom_score_adj`, "0");
    } catch  {}
}
function X5(e, t, r, n) {
    const s = n?.platform ?? process.platform, i = r?.cwd;
    if (s !== "linux" || i === void 0 || r?.shell || !wi(i, n)) return {
        command: e,
        args: [
            ...t
        ],
        options: r,
        hopped: !1
    };
    const o = bi.resolve(i), a = op({
        processCwd: n?.processCwd,
        tmpdir: n?.tmpdir,
        platform: s,
        readMountinfo: n?.readMountinfo
    });
    return {
        command: "/bin/sh",
        args: [
            "-c",
            hc,
            uc,
            o,
            e,
            ...t
        ],
        options: {
            ...r,
            cwd: a
        },
        hopped: !0,
        hopCwd: o
    };
}
function ap(e = process.env) {
    return e[pp] === "1";
}
function Q5(e) {
    if (e.stdout == null) return {
        bytes: 0,
        prefix: Buffer.alloc(0)
    };
    const t = typeof e.stdout == "string" ? Buffer.from(e.stdout) : ac([
        e.stdout
    ]);
    return {
        bytes: t.length,
        prefix: t.subarray(0, Ri)
    };
}
function eb(e, t) {
    if (typeof e != "object" || e === null || !("status" in e)) return !1;
    const r = e, n = Q5(r);
    return Ai({
        exitCode: typeof r.status == "number" ? r.status : null,
        stdoutBytes: n.bytes,
        stdoutPrefix: n.prefix,
        cwd: t
    });
}
function dp(e) {
    return typeof e == "object" && e !== null && "emit" in e && typeof e.emit == "function" && "on" in e && typeof e.on == "function" && "stdout" in e && "stdin" in e;
}
function tb(e) {
    return typeof e == "object" && e !== null && "then" in e && typeof e.then == "function";
}
function rb(e) {
    return typeof e == "object" && e !== null && !dp(e) && "onData" in e && typeof e.onData == "function" && "onExit" in e && typeof e.onExit == "function";
}
function nb(e, t) {
    const r = new Ti, n = new H5;
    let s = !1, i;
    const o = e.stdout, a = e.emit.bind(e), c = (p)=>{
        if (p) r.takeHeld();
        else {
            const g = r.takeHeld();
            g !== void 0 && !n.writableEnded && n.write(g);
        }
        n.writableEnded || n.end();
    }, l = (p)=>{
        const g = p?.[0];
        return g === null || typeof g == "number" ? g : null;
    }, u = (p)=>Ai({
            exitCode: l(p),
            stdoutBytes: r.bytes,
            stdoutPrefix: r.stdoutPrefix,
            cwd: t
        }), d = ()=>(s = !0, c(!0), a("error", cc(t))), f = ()=>{
        i !== void 0 && l(i) === Xn && (a("exit", ...i), i = void 0);
    };
    o && (o.on("data", (p)=>{
        if (s) return;
        const g = r.note(p);
        if (g !== void 0) {
            n.write(g), f();
            return;
        }
        u(i) && d();
    }), o.on("error", (p)=>{
        n.destroy(p);
    }), Object.defineProperty(e, "stdout", {
        configurable: !0,
        enumerable: !0,
        get () {
            return n;
        }
    })), e.emit = ((p, ...g)=>s ? p === "exit" || p === "close" ? !1 : a(p, ...g) : p === "exit" ? (i = g, l(g) !== Xn ? a(p, ...g) : u(g) ? d() : r.diverged || o == null ? (i = void 0, a(p, ...g)) : !1) : p === "close" ? u(g) || u(i) ? d() : (c(!1), f(), a(p, ...g)) : a(p, ...g));
}
function sb(e, t) {
    const r = new Ti, n = [], s = e.onData.bind(e), i = e.onExit.bind(e);
    e.onData = (o)=>(n.push(o), s((a)=>{
            const c = typeof a == "string" ? Buffer.from(a) : a, l = r.note(c);
            l !== void 0 && o(typeof a == "string" ? l.toString("utf8") : l);
        })), e.onExit = (o)=>i((a)=>{
            const c = r.takeHeld();
            if (Ai({
                exitCode: a.exitCode,
                stdoutBytes: r.bytes,
                stdoutPrefix: r.stdoutPrefix,
                cwd: t
            })) {
                o(a);
                return;
            }
            if (c !== void 0) for (const l of n)l(c);
            o(a);
        });
}
function hp(e, t) {
    throw eb(e, t) ? cc(t) : e;
}
function ib(e, t) {
    return dp(e) ? (nb(e, t), e) : rb(e) ? (sb(e, t), e) : tb(e) ? e.then((r)=>r, (r)=>hp(r, t)) : e;
}
function Ap({ workloadCgroupDir: e, hopCwd: t }) {
    const r = `echo $$ 2>/dev/null > '${e}/cgroup.procs'; echo 0 2>/dev/null > /proc/$$/oom_score_adj; `;
    return t !== void 0 ? r + hc : `${r}exec "$0" "$@"`;
}
function yb(e) {
    try {
        return vb(e).isDirectory() ? (_b(`${e}/cgroup.procs`, mb.W_OK), !0) : !1;
    } catch  {
        return !1;
    }
}
function Sb(e, t, r = yb) {
    return e !== "linux" || t === void 0 || !Tp.test(t) || t.includes("..") || !r(t) ? kp : Object.freeze({
        kind: "armed",
        workloadCgroupDir: t,
        executable: "/bin/sh",
        argumentPrefix: Object.freeze([
            "-c",
            Ap({
                workloadCgroupDir: t
            })
        ])
    });
}
function bb(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e);
}
function wb(e, t) {
    return [
        t,
        ...e.slice(1)
    ];
}
function Eb(e, t) {
    if (typeof e == "object" && e !== null && "pid" in e && typeof e.pid == "number") {
        t(e.pid);
        return;
    }
    typeof e == "object" && e !== null && "child" in e && typeof e.child == "object" && e.child !== null && "pid" in e.child && typeof e.child.pid == "number" && t(e.child.pid);
}
function Ab(e, t = P5) {
    return function(n, s, i, ...o) {
        const a = o[0], c = ap() && bb(a) ? X5(s, i, a) : void 0;
        let l = s, u = [
            ...i
        ], d = o;
        c?.hopped === !0 && c.hopCwd !== void 0 ? (d = wb(o, c.options), e.kind === "armed" ? (l = "/bin/sh", u = [
            "-c",
            Ap({
                workloadCgroupDir: e.workloadCgroupDir,
                hopCwd: c.hopCwd
            }),
            uc,
            c.hopCwd,
            s,
            ...i
        ]) : (l = c.command, u = c.args)) : e.kind === "armed" && (l = e.executable, u = [
            ...e.argumentPrefix,
            s,
            ...i
        ]);
        let f;
        try {
            f = n(l, u, ...d);
        } catch (p) {
            throw c?.hopped === !0 && c.hopCwd !== void 0 && hp(p, c.hopCwd), p;
        }
        return Eb(f, t), c?.hopped === !0 && c.hopCwd !== void 0 ? ib(f, c.hopCwd) : f;
    };
}
var Rp, Tp, kp, Ip, gr;
export { Ab, Ap, Eb, Ip, P5, Q5, Rp, Sb, Tp, X5, ap, bb, dp, eb, gr, hp, ib, kp, nb, rb, sb, tb, wb, yb };
var __wakaru_Rb_initialized = false;
export function Rb() {
if (__wakaru_Rb_initialized) return;
__wakaru_Rb_initialized = true;
"use strict";
h(), O5(), vp(), Rp = "CURSOR_WORKLOAD_CGROUP", Tp = /^\/sys\/fs\/cgroup\/[A-Za-z0-9_/.-]+$/, kp = Object.freeze({
    kind: "direct"
}), Ip = Sb(process.platform, process.env[Rp]), gr = Ab(Ip);

}
