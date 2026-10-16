"use strict";
require.d(exports, {
    $f: ()=>T,
    Gw: ()=>u,
    KX: ()=>N,
    N6: ()=>g,
    mM: ()=>O,
    qr: ()=>P,
    wr: ()=>M
});
require("./module-7598.js");
var n = require("./module-3024.js"), o = require("./module-8161.js"), s = require("./module-6760.js"), i = require("./module-7075.js");
const a = "/cursor/stores", c = "CURSOR_SPAWN_CWD_HOP", u = "cursor-fuse-cwd", l = 79, d = "cursor-fuse-cwd:cd", p = Buffer.from(d), f = 32;
function h(e) {
    return Buffer.from(Buffer.concat(e));
}
class m {
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
        if (this.seen += t.length, this.prefix.length < f) {
            const e = Math.min(t.length, f - this.prefix.length);
            this.prefix = h([
                this.prefix,
                t.subarray(0, e)
            ]);
        }
        if (this.released) return t;
        const r = h([
            this.held,
            t
        ]);
        if (!(r.length <= p.length && p.subarray(0, r.length).equals(r))) return this.released = !0, this.held = Buffer.alloc(0), r;
        this.held = r;
    }
    takeHeld() {
        if (0 === this.held.length) return void (this.released = !0);
        const e = this.held;
        return this.held = Buffer.alloc(0), this.released = !0, e;
    }
}
const g = `cd "$1" || { printf %s '${d}'; exit ${l}; }; shift; exec "$@"`;
function y() {
    try {
        return (0, n.readFileSync)("/proc/self/mountinfo", "utf8");
    } catch  {
        return;
    }
}
let _, v, w = y;
function b(e) {
    return e.replace(/\\([0-7]{3})/g, (e, t)=>String.fromCharCode(Number.parseInt(t, 8)));
}
function S(e) {
    return "/" === e ? "/" : e.replace(/\/+$/, "");
}
function k(e, t) {
    return "/" === t || e === t || e.startsWith(`${t}/`);
}
function E(e) {
    return _ === e && void 0 !== v || (_ = e, v = function(e) {
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
            const o = e[4], s = -1 === n ? void 0 : e[n + 1];
            void 0 !== o && void 0 !== s && 0 !== s.length && t.push({
                mountPoint: S(b(o)),
                fstype: s
            });
        }
        return t;
    }(e)), v;
}
function x(e, t) {
    const r = (function(e) {
        return e?.readMountinfo ?? w;
    })(t)();
    if (void 0 === r) return !1;
    const n = function(e, t) {
        let r;
        for (const n of t)k(e, n.mountPoint) && (void 0 === r || n.mountPoint.length >= r.mountPoint.length) && (r = n);
        return r;
    }(s.resolve(e), E(r));
    return void 0 !== n && ("fuse" === (o = n.fstype) || "fuseblk" === o || o.startsWith("fuse."));
    var o;
}
function T(e) {
    const t = s.resolve(e);
    return t === a || t.startsWith(`${a}/`);
}
function O(e, t, r, n) {
    const i = n?.platform ?? process.platform, a = r?.cwd;
    if ("linux" !== i || void 0 === a || r?.shell || !x(a, n)) return {
        command: e,
        args: [
            ...t
        ],
        options: r,
        hopped: !1
    };
    const c = s.resolve(a), l = function(e) {
        const t = e?.processCwd ?? process.cwd();
        return "linux" === (e?.platform ?? process.platform) && x(t, e) ? e?.tmpdir ?? (0, o.tmpdir)() : t;
    }({
        processCwd: n?.processCwd,
        tmpdir: n?.tmpdir,
        platform: i,
        readMountinfo: n?.readMountinfo
    });
    return {
        command: "/bin/sh",
        args: [
            "-c",
            g,
            u,
            c,
            e,
            ...t
        ],
        options: {
            ...r,
            cwd: l
        },
        hopped: !0,
        hopCwd: c
    };
}
function P(e = process.env) {
    return "1" === e[c];
}
function I(e) {
    return `working directory is not accessible: ${s.resolve(e)}`;
}
function C(e) {
    return function(e, t = process.env) {
        return P(t) && void 0 !== e && x(e);
    }(e.cwd, e.env) && e.exitCode === l && e.stdoutBytes === d.length && ("string" == typeof (t = e.stdoutPrefix) ? t === d : Buffer.from(t).equals(Buffer.from(d)));
    var t;
}
function A(e) {
    const t = new Error(I(e));
    return t.code = "ENOENT", t;
}
function $(e, t) {
    if ("object" != typeof e || null === e || !("status" in e)) return !1;
    const r = e, n = function(e) {
        if (null == e.stdout) return {
            bytes: 0,
            prefix: Buffer.alloc(0)
        };
        const t = "string" == typeof e.stdout ? Buffer.from(e.stdout) : h([
            e.stdout
        ]);
        return {
            bytes: t.length,
            prefix: t.subarray(0, f)
        };
    }(r);
    return C({
        exitCode: "number" == typeof r.status ? r.status : null,
        stdoutBytes: n.bytes,
        stdoutPrefix: n.prefix,
        cwd: t
    });
}
function R(e) {
    return "object" == typeof e && null !== e && "emit" in e && "function" == typeof e.emit && "on" in e && "function" == typeof e.on && "stdout" in e && "stdin" in e;
}
function N(e, t) {
    if ($(e, t)) throw A(t);
    throw e;
}
function M(e, t) {
    return R(e) ? (function(e, t) {
        const r = new m, n = new i.PassThrough;
        let o, s = !1;
        const a = e.stdout, c = e.emit.bind(e), u = (e)=>{
            if (e) r.takeHeld();
            else {
                const e = r.takeHeld();
                void 0 === e || n.writableEnded || n.write(e);
            }
            n.writableEnded || n.end();
        }, d = (e)=>{
            const t = e?.[0];
            return null === t || "number" == typeof t ? t : null;
        }, p = (e)=>C({
                exitCode: d(e),
                stdoutBytes: r.bytes,
                stdoutPrefix: r.stdoutPrefix,
                cwd: t
            }), f = ()=>(s = !0, u(!0), c("error", A(t))), h = ()=>{
            void 0 !== o && d(o) === l && (c("exit", ...o), o = void 0);
        };
        a && (a.on("data", (e)=>{
            if (s) return;
            const t = r.note(e);
            if (void 0 !== t) return n.write(t), void h();
            p(o) && f();
        }), a.on("error", (e)=>{
            n.destroy(e);
        }), Object.defineProperty(e, "stdout", {
            configurable: !0,
            enumerable: !0,
            get: ()=>n
        })), e.emit = (e, ...t)=>s ? "exit" !== e && "close" !== e && c(e, ...t) : "exit" === e ? (o = t, d(t) !== l ? c(e, ...t) : p(t) ? f() : !(!r.diverged && null != a) && (o = void 0, c(e, ...t))) : "close" === e ? p(t) || p(o) ? f() : (u(!1), h(), c(e, ...t)) : c(e, ...t);
    }(e, t), e) : "object" == typeof (r = e) && null !== r && !R(r) && "onData" in r && "function" == typeof r.onData && "onExit" in r && "function" == typeof r.onExit ? (function(e, t) {
        const r = new m, n = [], o = e.onData.bind(e), s = e.onExit.bind(e);
        e.onData = (e)=>(n.push(e), o((t)=>{
                const n = "string" == typeof t ? Buffer.from(t) : t, o = r.note(n);
                void 0 !== o && e("string" == typeof t ? o.toString("utf8") : o);
            })), e.onExit = (e)=>s((o)=>{
                const s = r.takeHeld();
                if (C({
                    exitCode: o.exitCode,
                    stdoutBytes: r.bytes,
                    stdoutPrefix: r.stdoutPrefix,
                    cwd: t
                })) e(o);
                else {
                    if (void 0 !== s) for (const e of n)e(s);
                    e(o);
                }
            });
    }(e, t), e) : function(e) {
        return "object" == typeof e && null !== e && "then" in e && "function" == typeof e.then;
    }(e) ? e.then((e)=>e, (e)=>N(e, t)) : e;
    var r;
}
