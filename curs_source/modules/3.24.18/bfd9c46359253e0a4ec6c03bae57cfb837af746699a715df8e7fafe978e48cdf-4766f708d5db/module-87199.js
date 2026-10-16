"use strict";
require.d(exports, {
    $Y: ()=>O,
    $f: ()=>T,
    A: ()=>I,
    D1: ()=>C,
    Gq: ()=>M,
    Gw: ()=>u,
    KX: ()=>L,
    N6: ()=>y,
    Vn: ()=>q,
    Zv: ()=>g,
    fK: ()=>N,
    iA: ()=>J,
    mM: ()=>P,
    qr: ()=>A,
    wr: ()=>$,
    wz: ()=>D,
    yo: ()=>R
});
var n = require("./module-77598.js"), s = require("./module-73024.js"), o = require("./module-48161.js"), i = require("./module-76760.js"), a = require("./module-57075.js");
const c = "/cursor/stores", l = "CURSOR_SPAWN_CWD_HOP", u = "cursor-fuse-cwd", d = 79, p = "cursor-fuse-cwd:cd", m = Buffer.from(p), h = 32;
function f(e) {
    return Buffer.from(Buffer.concat(e));
}
class g {
    constructor(){
        this.held = Buffer.alloc(0), this.released = !1, this.seen = 0, this.prefix = Buffer.alloc(0);
    }
    get bytes() {
        return this.seen;
    }
    get stdoutPrefix() {
        return this.prefix;
    }
    get diverged() {
        return this.released;
    }
    note(e) {
        const t = Buffer.from(e);
        if (this.seen += t.length, this.prefix.length < h) {
            const e = Math.min(t.length, h - this.prefix.length);
            this.prefix = f([
                this.prefix,
                t.subarray(0, e)
            ]);
        }
        if (this.released) return t;
        const r = f([
            this.held,
            t
        ]);
        if (!(r.length <= m.length && m.subarray(0, r.length).equals(r))) return this.released = !0, this.held = Buffer.alloc(0), r;
        this.held = r;
    }
    takeHeld() {
        if (0 === this.held.length) return void (this.released = !0);
        const e = this.held;
        return this.held = Buffer.alloc(0), this.released = !0, e;
    }
}
const y = `cd "$1" || { printf %s '${p}'; exit ${d}; }; shift; exec "$@"`;
function w() {
    try {
        return (0, s.readFileSync)("/proc/self/mountinfo", "utf8");
    } catch  {
        return;
    }
}
let v, _, b = w;
function S(e) {
    return e.replace(/\\([0-7]{3})/g, (e, t)=>String.fromCharCode(Number.parseInt(t, 8)));
}
function k(e) {
    return "/" === e ? "/" : e.replace(/\/+$/, "");
}
function x(e, t) {
    return "/" === t || e === t || e.startsWith(`${t}/`);
}
function E(e) {
    return v === e && void 0 !== _ || (v = e, _ = function(e) {
        const t = [];
        for (const r of e.split("\n")){
            if (0 === r.length) continue;
            const e = r.split(" ");
            if (e.length < 10) continue;
            let n = -1;
            for(let t = 6; t < e.length; t++)if ("-" === e[t]) {
                n = t;
                break;
            }
            const s = e[4], o = -1 === n ? void 0 : e[n + 1];
            void 0 !== s && void 0 !== o && 0 !== o.length && t.push({
                mountPoint: k(S(s)),
                fstype: o
            });
        }
        return t;
    }(e)), _;
}
function I(e, t) {
    const r = (function(e) {
        return e?.readMountinfo ?? b;
    })(t)();
    if (void 0 === r) return !1;
    const n = function(e, t) {
        let r;
        for (const n of t)x(e, n.mountPoint) && (void 0 === r || n.mountPoint.length >= r.mountPoint.length) && (r = n);
        return r;
    }(i.resolve(e), E(r));
    return void 0 !== n && ("fuse" === (s = n.fstype) || "fuseblk" === s || s.startsWith("fuse."));
    var s;
}
function T(e) {
    const t = i.resolve(e);
    return t === c || t.startsWith(`${c}/`);
}
function C(e) {
    const t = e?.processCwd ?? process.cwd();
    return "linux" === (e?.platform ?? process.platform) && I(t, e) ? e?.tmpdir ?? (0, o.tmpdir)() : t;
}
function P(e, t, r, n) {
    const s = n?.platform ?? process.platform, o = r?.cwd;
    if ("linux" !== s || void 0 === o || r?.shell || !I(o, n)) return {
        command: e,
        args: [
            ...t
        ],
        options: r,
        hopped: !1
    };
    const a = i.resolve(o), c = C({
        processCwd: n?.processCwd,
        tmpdir: n?.tmpdir,
        platform: s,
        readMountinfo: n?.readMountinfo
    });
    return {
        command: "/bin/sh",
        args: [
            "-c",
            y,
            u,
            a,
            e,
            ...t
        ],
        options: {
            ...r,
            cwd: c
        },
        hopped: !0,
        hopCwd: a
    };
}
function A(e = process.env) {
    return "1" === e[l];
}
const R = "exec_daemon.spawn.cwd_hop", M = "exec_daemon.spawn.cwd_hop_cd_failed";
function J(e) {
    return {
        cwdKind: T(e) ? "agent_store_fuse" : "fuse",
        cwdHash: (0, n.createHash)("sha256").update(e, "utf8").digest("hex").slice(0, 12)
    };
}
function O(e, t = process.env) {
    return A(t) && void 0 !== e && I(e);
}
function B(e) {
    return `working directory is not accessible: ${i.resolve(e)}`;
}
function D(e) {
    return O(e.cwd, e.env) && e.exitCode === d && e.stdoutBytes === p.length && ("string" == typeof (t = e.stdoutPrefix) ? t === p : Buffer.from(t).equals(Buffer.from(p)));
    var t;
}
function q(e) {
    const t = new Error(B(e));
    return t.code = "ENOENT", t;
}
function N(e, t) {
    return e instanceof Error && "ENOENT" === e.code && e.message === B(t);
}
function F(e, t) {
    if ("object" != typeof e || null === e || !("status" in e)) return !1;
    const r = e, n = function(e) {
        if (null == e.stdout) return {
            bytes: 0,
            prefix: Buffer.alloc(0)
        };
        const t = "string" == typeof e.stdout ? Buffer.from(e.stdout) : f([
            e.stdout
        ]);
        return {
            bytes: t.length,
            prefix: t.subarray(0, h)
        };
    }(r);
    return D({
        exitCode: "number" == typeof r.status ? r.status : null,
        stdoutBytes: n.bytes,
        stdoutPrefix: n.prefix,
        cwd: t
    });
}
function U(e) {
    return "object" == typeof e && null !== e && "emit" in e && "function" == typeof e.emit && "on" in e && "function" == typeof e.on && "stdout" in e && "stdin" in e;
}
function L(e, t) {
    if (F(e, t)) throw q(t);
    throw e;
}
function $(e, t) {
    return U(e) ? (function(e, t) {
        const r = new g, n = new a.PassThrough;
        let s, o = !1;
        const i = e.stdout, c = e.emit.bind(e), l = (e)=>{
            if (e) r.takeHeld();
            else {
                const e = r.takeHeld();
                void 0 === e || n.writableEnded || n.write(e);
            }
            n.writableEnded || n.end();
        }, u = (e)=>{
            const t = e?.[0];
            return null === t || "number" == typeof t ? t : null;
        }, p = (e)=>D({
                exitCode: u(e),
                stdoutBytes: r.bytes,
                stdoutPrefix: r.stdoutPrefix,
                cwd: t
            }), m = ()=>(o = !0, l(!0), c("error", q(t))), h = ()=>{
            void 0 !== s && u(s) === d && (c("exit", ...s), s = void 0);
        };
        i && (i.on("data", (e)=>{
            if (o) return;
            const t = r.note(e);
            if (void 0 !== t) return n.write(t), void h();
            p(s) && m();
        }), i.on("error", (e)=>{
            n.destroy(e);
        }), Object.defineProperty(e, "stdout", {
            configurable: !0,
            enumerable: !0,
            get: ()=>n
        })), e.emit = (e, ...t)=>o ? "exit" !== e && "close" !== e && c(e, ...t) : "exit" === e ? (s = t, u(t) !== d ? c(e, ...t) : p(t) ? m() : !(!r.diverged && null != i) && (s = void 0, c(e, ...t))) : "close" === e ? p(t) || p(s) ? m() : (l(!1), h(), c(e, ...t)) : c(e, ...t);
    }(e, t), e) : "object" == typeof (r = e) && null !== r && !U(r) && "onData" in r && "function" == typeof r.onData && "onExit" in r && "function" == typeof r.onExit ? (function(e, t) {
        const r = new g, n = [], s = e.onData.bind(e), o = e.onExit.bind(e);
        e.onData = (e)=>(n.push(e), s((t)=>{
                const n = "string" == typeof t ? Buffer.from(t) : t, s = r.note(n);
                void 0 !== s && e("string" == typeof t ? s.toString("utf8") : s);
            })), e.onExit = (e)=>o((s)=>{
                const o = r.takeHeld();
                if (D({
                    exitCode: s.exitCode,
                    stdoutBytes: r.bytes,
                    stdoutPrefix: r.stdoutPrefix,
                    cwd: t
                })) e(s);
                else {
                    if (void 0 !== o) for (const e of n)e(o);
                    e(s);
                }
            });
    }(e, t), e) : function(e) {
        return "object" == typeof e && null !== e && "then" in e && "function" == typeof e.then;
    }(e) ? e.then((e)=>e, (e)=>L(e, t)) : e;
    var r;
}
