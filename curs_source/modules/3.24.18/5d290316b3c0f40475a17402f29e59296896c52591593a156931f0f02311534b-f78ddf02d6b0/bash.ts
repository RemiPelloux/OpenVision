import { Kr, Oi } from "./cache-env.ts";
import { Jr, Ui } from "./core_2.ts";
import { es, rl, w9 } from "./dump_bash_state.ts";
import { ze } from "./index_2.ts";
import { Tt } from "./index_3.ts";
import { Pi, Sc, Vp, jp, vc, yc } from "./otel.ts";
import { B1, rs } from "./output-limiter.ts";
import { en } from "./policy-merge.ts";
import { ol } from "./powershell.ts";
import { Ti, Wr, Xn, fc, gp, mp } from "./safe-spawn-cwd.ts";
import { Ni, Xr } from "./sandbox.ts";
import { Nc, _1 } from "./seatbelt.ts";
import { Z1, os } from "./sudo.ts";
import { h } from "./tslib.es6.js";
import { It, Yt } from "./types.ts";
import { Ei, Ep, G1, Ke, N1, bc, pt, ss, xc, z1 } from "./us.js";
import { ap, gr } from "./workload-spawn.ts";
import { ic } from "./writable-iterable.ts";
import { rm as B9 } from "node:fs/promises";
import { join as Ci } from "node:path";
import { tmpdir as F5 } from "node:os";
import { mkdtemp as F9 } from "node:fs/promises";
import { readFile as H9 } from "node:fs/promises";
import { dirname as I9 } from "node:path";
import { resolve as O9 } from "node:path";
import { join as P9 } from "node:path";
import { writeFile as Q1 } from "node:fs/promises";
import { createHash as U5 } from "node:crypto";
import { context as Wp } from "@opentelemetry/api";
import { trace as _c } from "@opentelemetry/api";
import _t from "node:path";
import bi from "node:path";
import { stat as k9 } from "node:fs/promises";
import kc from "node:os";
import { spawn as v9 } from "node:child_process";
import y9 from "node:stream";
import z9 from "node:os";
var Eh = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Ah = (e)=>{
    throw TypeError(e);
}, hr = (e, t, r)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && Ah("Object expected");
        var n, s;
        r && (n = t[Eh("asyncDispose")]), n === void 0 && (n = t[Eh("dispose")], r && (s = n)), typeof n != "function" && Ah("Object not disposable"), s && (n = function() {
            try {
                s.call(this);
            } catch (i) {
                return Promise.reject(i);
            }
        }), e.push([
            r,
            n,
            t
        ]);
    } else r && e.push([
        r
    ]);
    return t;
}, fr = (e, t, r)=>{
    var n = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, s = (o)=>t = r ? new n(o, t, "An error was suppressed during disposal") : (r = !0, o), i = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(i, (c)=>(s(c), i()));
        } catch (c) {
            s(c);
        }
        if (r) throw t;
    };
    return i();
};
function Yn() {
    const e = [], t = [];
    let r = !1, n, s = ()=>{}, i = ()=>{};
    const o = ()=>{
        const u = new Promise((d, f)=>{
            s = d, i = f;
        });
        return u.catch(()=>{}), u;
    };
    let a = o();
    function c(u, d) {
        for(; e.length > 0;){
            const f = e.shift();
            d ? f.reject(d) : f.resolve(u);
        }
    }
    function l(u) {
        t.length = 0, i(u), a = Promise.reject(u), a.catch(()=>{});
    }
    return {
        async write (u) {
            if (r) throw n ?? new ic("WritableIterable is closed");
            const d = e.shift();
            if (d) {
                if (d.resolve({
                    done: !1,
                    value: u
                }), e.length > 0) return;
            } else t.push(u);
            const f = t.length + 1;
            for(let p = 0; p < f; p++)await a;
        },
        throw (u) {
            r || (r = !0, n = u, l(u), c({
                done: !0,
                value: void 0
            }, u));
        },
        close () {
            r || (r = !0, t.length = 0, s(), a = Promise.reject(new ic("WritableIterable is closed")), a.catch(()=>{}), c({
                done: !0,
                value: void 0
            }));
        },
        [Symbol.asyncIterator] () {
            return {
                next () {
                    s(), a = o();
                    const u = t.shift();
                    return u !== void 0 ? Promise.resolve({
                        done: !1,
                        value: u
                    }) : r ? n ? Promise.reject(n) : Promise.resolve({
                        done: !0,
                        value: void 0
                    }) : new Promise((d, f)=>{
                        e.push({
                            resolve: d,
                            reject: f
                        });
                    });
                },
                throw (u) {
                    return r = !0, n = u, t.length = 0, l(u), c({
                        done: !0,
                        value: void 0
                    }, u), Promise.resolve({
                        done: !0,
                        value: void 0
                    });
                },
                return () {
                    return r = !0, t.length = 0, s(), a = Promise.reject(new Error("Iterator was closed")), a.catch(()=>{}), c({
                        done: !0,
                        value: void 0
                    }), Promise.resolve({
                        done: !0,
                        value: void 0
                    });
                }
            };
        }
    };
}
function z5(e) {
    return e?.readMountinfo ?? gp;
}
function W5(e) {
    return e.replace(/\\([0-7]{3})/g, (t, r)=>String.fromCharCode(Number.parseInt(r, 8)));
}
function G5(e) {
    return e === "/" ? "/" : e.replace(/\/+$/, "");
}
function K5(e, t) {
    return t === "/" || e === t || e.startsWith(`${t}/`);
}
function q5(e) {
    return e === "fuse" || e === "fuseblk" || e.startsWith("fuse.");
}
function j5(e) {
    const t = [];
    for (const r of e.split(`
`)){
        if (r.length === 0) continue;
        const n = r.split(" ");
        if (n.length < 10) continue;
        let s = -1;
        for(let a = 6; a < n.length; a++)if (n[a] === "-") {
            s = a;
            break;
        }
        const i = n[4], o = s === -1 ? void 0 : n[s + 1];
        i === void 0 || o === void 0 || o.length === 0 || t.push({
            mountPoint: G5(W5(i)),
            fstype: o
        });
    }
    return t;
}
function V5(e) {
    return _p === e && ki !== void 0 || (_p = e, ki = j5(e)), ki;
}
function Y5(e, t) {
    let r;
    for (const n of t)K5(e, n.mountPoint) && (r === void 0 || n.mountPoint.length >= r.mountPoint.length) && (r = n);
    return r;
}
function wi(e, t) {
    const r = z5(t)();
    if (r === void 0) return !1;
    const n = Y5(bi.resolve(e), V5(r));
    return n !== void 0 && q5(n.fstype);
}
function op(e) {
    const t = e?.processCwd ?? process.cwd();
    return (e?.platform ?? process.platform) === "linux" && wi(t, e) ? e?.tmpdir ?? F5() : t;
}
function cp(e) {
    return {
        cwdKind: Ei(e) ? "agent_store_fuse" : "fuse",
        cwdHash: U5("sha256").update(e, "utf8").digest("hex").slice(0, 12)
    };
}
function lp(e, t = process.env) {
    return ap(t) && e !== void 0 && wi(e);
}
function up(e) {
    return `working directory is not accessible: ${bi.resolve(e)}`;
}
function J5(e) {
    return typeof e == "string" ? e === Wr : Buffer.from(e).equals(Buffer.from(Wr));
}
function Ai(e) {
    return lp(e.cwd, e.env) && e.exitCode === Xn && e.stdoutBytes === Wr.length && J5(e.stdoutPrefix);
}
function cc(e) {
    const t = new Error(up(e));
    return t.code = "ENOENT", t;
}
function Z5(e, t) {
    return e instanceof Error && e.code === "ENOENT" && e.message === up(t);
}
var _p, ki;
function Kb(e) {
    return jb?.(e) ?? !1;
}
function Gp(e) {
    return e.name || "anonymous-context";
}
function Kp(e, t) {
    return t ? e.get(jp) || Kb(Gp(e)) : !1;
}
function qp(e = "context-tracer") {
    return _c.getTracer(e);
}
function qb(e, t) {
    const r = qp(), n = e.get(Pi);
    if (Kp(e, n)) return e;
    const s = Gp(e);
    let i;
    if (n) {
        const l = _c.setSpan(Wp.active(), n);
        i = r.startSpan(s, t, l);
    } else i = r.startSpan(s, t);
    const o = e.get(Sc);
    for(const l in o)i.setAttribute(l, o[l]);
    const a = Date.now();
    let c = e.with(Pi, i);
    return n || (c = c.with(vc, i).with(yc, a)), c;
}
function mc(e) {
    return e.get(Pi);
}
function jt(e, t) {
    try {
        const r = qp(), n = mc(e);
        if (!n) return;
        const s = _c.setSpan(Wp.active(), n), i = r.startSpan(t, void 0, s), o = e.get(Sc);
        for(const f in o)i.setAttribute(f, o[f]);
        const a = Date.now(), c = e.get(yc), l = typeof c == "number" ? a - c : 0, u = `event.${t}`;
        (e.get(vc) ?? n).setAttribute(u, l), i.setAttribute(u, l), i.end();
    } catch  {}
}
function _r(e, t) {
    const r = mc(e), n = Kp(e, r), s = qb(e, t), i = mc(s);
    return new Vp(s, i, !n);
}
var jb;
function y7(e) {
    const t = pt.filter((r)=>r.type === "workspace").map((r)=>r.pattern);
    return {
        [e]: t
    };
}
function S7(e) {
    const t = pt.filter((r)=>r.type === "git").map((r)=>r.pattern);
    return {
        [e]: t
    };
}
function b7(e) {
    const t = pt.filter((r)=>r.type === "worktree").map((r)=>r.pattern);
    return {
        [e]: t
    };
}
function w7() {
    if (xc.length !== 0) return {
        version: 1,
        deny: [
            ...xc
        ]
    };
}
function A7(e) {
    const t = w7(), r = kc.homedir(), n = [];
    for (const s of pt)switch(s.type){
        case "workspace":
            break;
        case "git":
            break;
        case "worktree":
            break;
        case "absolute":
            {
                n.push(s.pattern);
                break;
            }
        case "home":
            {
                r.length > 0 && n.push(Ci(r, s.pattern));
                break;
            }
        default:
            {
                const i = s.type;
                throw new Error(`Unknown entry type: ${i}`);
            }
    }
    return {
        type: "workspace_readwrite",
        additionalReadonlyPaths: n,
        writeProtectionMapping: y7(e),
        ...t && {
            networkPolicy: t
        },
        networkPolicyStrict: !0
    };
}
async function D7(e) {
    const t = Nc.get(e);
    return t ? N7(t.pid, t.startTime, t.unrelatedPids) : (console.log("No sandbox metadata found on child process"), []);
}
function g1(e, t, r) {
    return e === t ? "related" : r?.has(e) ? "probably_unrelated" : "maybe_related";
}
function N7(e, t, r) {
    return new Promise((n)=>{
        try {
            const o = [
                "show",
                "--style",
                "ndjson",
                "--predicate",
                'process=="kernel" AND eventMessage CONTAINS "Sandbox:" AND eventMessage contains "deny"',
                "--last",
                Math.ceil((new Date().getTime() - t.getTime()) / 1e3).toString()
            ];
            gr(_1, "/usr/bin/log", o, (a, c)=>{
                if (a) {
                    n([
                        {
                            raw: a.message
                        }
                    ]);
                    return;
                }
                const l = c.split(/\r?\n/).filter((d)=>d.trim().length > 0), u = [];
                for (const d of l)try {
                    const f = JSON.parse(d), p = f?.eventMessage ?? "";
                    if (!p || typeof p != "string") continue;
                    const g = /^Sandbox:\s+([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(p);
                    if (g) {
                        const [, y, m, A, S, v, b] = g, I = Number(m);
                        u.push({
                            timestamp: f.timestamp,
                            processName: y.trim(),
                            pid: I,
                            decision: A.toLowerCase(),
                            decisionCode: Number(S),
                            operation: v,
                            target: b,
                            duplicateCount: 1,
                            raw: p,
                            relationship: g1(I, e, r)
                        });
                        continue;
                    }
                    const _ = /^(\d+) duplicate report for Sandbox: (.+)$/.exec(p);
                    if (_) {
                        const y = Number(_[1]), m = _[2], A = /^([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(m);
                        if (A) {
                            const [, S, v, b, I, O, M] = A, F = Number(v);
                            u.push({
                                timestamp: f.timestamp,
                                processName: S.trim(),
                                pid: F,
                                decision: b.toLowerCase(),
                                decisionCode: Number(I),
                                operation: O,
                                target: M,
                                duplicateCount: y,
                                raw: p,
                                relationship: g1(F, e, r)
                            });
                        } else u.push({
                            timestamp: f.timestamp,
                            duplicateCount: y,
                            raw: p
                        });
                        continue;
                    }
                    u.push({
                        timestamp: f.timestamp,
                        raw: p
                    });
                } catch  {}
                n(u);
            });
        } catch (s) {
            n([
                {
                    raw: String(s)
                }
            ]);
        }
    });
}
function U7(e) {
    return e !== void 0 ? e : {
        version: 1,
        default: "deny"
    };
}
function Di(e) {
    return Ni ? D7(e) : Promise.resolve([]);
}
function S9(e) {
    return e.platform === "win32" ? "windows_tree" : e.detached ? "process_group" : "single_process";
}
function U1(e, t, r) {
    const n = e.pid;
    if (n === void 0) return;
    const s = ()=>{
        try {
            e.kill(r);
        } catch  {}
    };
    switch(t){
        case "process_group":
            try {
                process.kill(-n, r);
            } catch  {
                s();
            }
            return;
        case "windows_tree":
            try {
                v9("taskkill", [
                    "/pid",
                    String(n),
                    "/t",
                    "/f"
                ], {
                    stdio: "ignore",
                    windowsHide: !0
                }).on("error", s);
            } catch  {
                s();
            }
            return;
        case "single_process":
            s();
            return;
        default:
            {
                const i = t;
                throw new Error(`Unknown process tree kill mode: ${String(t)}`);
            }
    }
}
function Pt(e, t = [], r = {}, n, s) {
    const i = N1(e, t, {
        ...r,
        env: bc(r.env ?? process.env)
    }, n);
    if (s) {
        const o = S9({
            platform: process.platform,
            detached: r.detached === !0
        }), a = ()=>{
            if (!i.pid) return;
            U1(i, o, "SIGTERM");
            const c = setTimeout(()=>{
                !i.killed && i.pid && U1(i, o, "SIGKILL");
            }, 1e3);
            i.once("exit", ()=>{
                clearTimeout(c);
            });
        };
        s.aborted ? a() : (s.addEventListener("abort", a, {
            once: !0
        }), i.once("exit", ()=>{
            s.removeEventListener("abort", a);
        }));
    }
    return i;
}
function Jc(e) {
    e?.on("error", ()=>{});
}
function Zc(e, t) {
    const r = e.stdio.at(5);
    r instanceof y9.Writable && (Jc(r), r.end(`${t}\0`));
}
function Qc(e, t) {
    e && (Jc(e), e.write(t), e.end());
}
function el(e, t) {
    e && (Jc(e), e.on("data", (r)=>{
        t(r.toString());
    }));
}
function vr(e) {
    const t = e.indexOf(`
`), r = e.substring(0, t), n = e.substring(t);
    return {
        cwd: r,
        rest: n
    };
}
function A9(e) {
    return e instanceof Error ? e : new Error(String(e));
}
function ts(e) {
    const t = new Ti;
    if (!e.bufferOutputEvents) {
        const i = (o, a)=>{
            e.writable.write({
                type: o,
                data: a
            }).catch(()=>{});
        };
        return e.stdout?.on("data", (o)=>{
            const a = t.note(o);
            a !== void 0 && a.length > 0 && i("stdout", a);
        }), e.stderr?.on("data", (o)=>{
            i("stderr", o);
        }), {
            get stdoutBytes () {
                return t.bytes;
            },
            get stdoutPrefix () {
                return t.stdoutPrefix;
            },
            async waitForOutput () {},
            async releaseHeldStdout () {
                const o = t.takeHeld();
                o !== void 0 && o.length > 0 && i("stdout", o);
            },
            dropHeldStdout () {
                t.takeHeld();
            },
            async flush () {
                await this.releaseHeldStdout();
            }
        };
    }
    const r = new B1(e.writable, e.outputLimiterOptions);
    let n;
    const s = Promise.all([
        R9(e.stdout, r, t),
        T9(e.stderr, "stderr", r)
    ]).then(()=>{}).catch((i)=>{
        n = i;
    });
    return {
        get stdoutBytes () {
            return t.bytes;
        },
        get stdoutPrefix () {
            return t.stdoutPrefix;
        },
        async waitForOutput () {
            if (await s, n !== void 0) throw A9(n);
        },
        async releaseHeldStdout () {
            const i = t.takeHeld();
            i !== void 0 && i.length > 0 && await r.push("stdout", i);
        },
        dropHeldStdout () {
            t.takeHeld();
        },
        async flush () {
            await this.releaseHeldStdout(), await r.flush();
        }
    };
}
async function R9(e, t, r) {
    if (e) for await (const n of e){
        const s = r.note(n);
        s !== void 0 && s.length > 0 && await t.push("stdout", s);
    }
}
async function T9(e, t, r, n) {
    if (e) for await (const s of e)n?.(s), await r.push(t, s);
}
function ns(...e) {
    return e.some((t)=>t === !0);
}
function sl(...e) {
    const t = e.filter((n)=>n !== void 0);
    if (t.length === 0) return;
    const r = {};
    for (const n of t)for (const [s, i] of Object.entries(n)){
        const o = r[s];
        if (o) {
            const a = new Set(o);
            for (const c of i)a.has(c) && a.delete(c), a.add(c);
            r[s] = [
                ...a
            ];
        } else r[s] = [
            ...i
        ];
    }
    if (Object.keys(r).length !== 0) return r;
}
function Zr(...e) {
    for(let t = e.length - 1; t >= 0; t--)if (e[t] !== void 0) return e[t];
}
async function Qr(e, t, r = {}) {
    if (!t) return {
        policy: {
            type: "insecure_none"
        }
    };
    if (Ei(e)) return il(t, {
        workspaceDir: e
    });
    const n = r.stat ?? k9, s = r.spawnPromise ?? Ep, i = await n(P9(e, ".git")).then((c)=>c, ()=>null), o = i?.isFile() ?? !1, a = i !== null;
    if (z1(t) === "workspace_readwrite") {
        let c = e;
        if (o) {
            const l = await s("git", [
                "rev-parse",
                "--git-common-dir"
            ], {
                cwd: e
            }).then((u)=>O9(e, u.trim()), ()=>null);
            if (l) {
                c = I9(l);
                const u = t.perRepo, d = u?.ignoreMapping;
                t = {
                    ...t,
                    perRepo: {
                        ...u,
                        type: "workspace_readwrite",
                        additionalReadwritePaths: [
                            ...u?.additionalReadwritePaths ?? [],
                            l
                        ],
                        ignoreMapping: d,
                        writeProtectionMapping: sl(u?.writeProtectionMapping, b7(e))
                    }
                };
            }
        }
        if (a) return il(t, {
            workspaceDir: e,
            gitDirParent: c
        });
    }
    return il(t, {
        workspaceDir: e
    });
}
function N9(e) {
    const { perUser: t, perRepo: r, teamAdmin: n } = e, s = [
        t,
        r,
        n
    ].filter((o)=>o !== void 0);
    if (s.length === 0) return;
    const i = s[0].type;
    for (const o of s)if (o.type !== i) throw new Error(`Cannot merge policies of different types: found "${i}" and "${o.type}". All policies must be of the same type (all workspace_readwrite, all workspace_readonly, or all insecure_none).`);
    return i;
}
function il(e, t) {
    const r = N9(e);
    if (r === void 0) return j1(e, t);
    switch(r){
        case "workspace_readwrite":
            return j1(e, t);
        case "workspace_readonly":
            return U9(e, t);
        case "insecure_none":
            return $9(e, t);
        default:
            {
                const n = r;
                throw new Error(`Unknown policy type: ${r}`);
            }
    }
}
function K1(e, t) {
    const r = t?.debug, { perUser: n, perRepo: s, teamAdmin: i } = e, o = t?.workspaceDir ?? process.cwd(), a = A7(o), c = {}, l = [
        n,
        s,
        i
    ], u = [
        "perUser",
        "perRepo",
        "teamAdmin",
        "hardcoded"
    ], d = (P, T)=>{
        r && (c[P] = u[T] ?? "unknown");
    }, f = ns(n?.disableTmpWrite, s?.disableTmpWrite, i?.disableTmpWrite);
    for(let P = l.length - 1; P >= 0; P--)if (l[P]?.disableTmpWrite === !0) {
        d("disableTmpWrite", P);
        break;
    }
    const p = ns(n?.networkPolicyStrict, s?.networkPolicyStrict, i?.networkPolicyStrict, a.networkPolicyStrict);
    a.networkPolicyStrict && d("networkPolicyStrict", 3);
    const g = Zr(n?.readBoundary, s?.readBoundary, i?.readBoundary) ?? "system", _ = Zr(n?.additionalReadPaths, s?.additionalReadPaths), y = i?.allowUserOverrideReadPaths === !1 ? ss(i.additionalReadPaths) : ss(_, i?.additionalReadPaths), m = g === "workspace" ? y : void 0, A = ss(n?.additionalReadonlyPaths, s?.additionalReadonlyPaths, i?.additionalReadonlyPaths, a.additionalReadonlyPaths), S = A.length > 0 ? A : void 0;
    let v = G1(n?.networkPolicy, s?.networkPolicy, i?.networkPolicy, a.networkPolicy);
    const b = i?.networkPolicy?.allow;
    b !== void 0 && b.length > 0 && v !== void 0 && (v = {
        ...v,
        allow: [
            ...b
        ]
    }, r && (c["networkPolicy.allow"] = "teamAdmin (replace)"));
    const I = U7(v), O = Zr(n?.debugOutputDir, s?.debugOutputDir, i?.debugOutputDir), M = ns(n?.captureDenies, s?.captureDenies, i?.captureDenies), F = Zr(n?.enableSharedBuildCache, s?.enableSharedBuildCache, i?.enableSharedBuildCache), H = sl(n?.ignoreMapping, s?.ignoreMapping, i?.ignoreMapping, a.ignoreMapping), ee = t?.gitDirParent ?? o, Y = S7(ee), B = sl(n?.writeProtectionMapping, s?.writeProtectionMapping, i?.writeProtectionMapping, a.writeProtectionMapping, Y);
    return {
        disableTmpWrite: f || void 0,
        networkPolicyStrict: p,
        readBoundary: g,
        additionalReadPaths: m,
        additionalReadonlyPaths: S,
        networkPolicy: I,
        debugOutputDir: O,
        captureDenies: M || void 0,
        enableSharedBuildCache: F,
        ignoreMapping: H,
        writeProtectionMapping: B,
        fieldSources: c
    };
}
function q1(e, t) {
    const r = Object.fromEntries(Object.entries(e).filter(([n, s])=>s !== void 0));
    return r.type = t, r;
}
function j1(e, t) {
    const { perUser: r, perRepo: n, teamAdmin: s } = e, i = t?.debug, o = K1(e, t), a = [
        r,
        n,
        s
    ], c = [
        "perUser",
        "perRepo",
        "teamAdmin",
        "hardcoded"
    ], l = ss(r?.additionalReadwritePaths, n?.additionalReadwritePaths, s?.additionalReadwritePaths), u = {
        type: "workspace_readwrite",
        disableTmpWrite: o.disableTmpWrite,
        networkPolicyStrict: o.networkPolicyStrict,
        readBoundary: o.readBoundary,
        additionalReadPaths: o.additionalReadPaths,
        additionalReadwritePaths: l.length > 0 ? l : void 0,
        additionalReadonlyPaths: o.additionalReadonlyPaths,
        networkPolicy: o.networkPolicy,
        debugOutputDir: o.debugOutputDir,
        captureDenies: o.captureDenies,
        enableSharedBuildCache: o.enableSharedBuildCache,
        ignoreMapping: o.ignoreMapping,
        writeProtectionMapping: o.writeProtectionMapping
    }, d = {
        policy: q1(u, "workspace_readwrite")
    };
    return i && (d.debug = {
        fieldSources: o.fieldSources
    }), d;
}
function U9(e, t) {
    const r = t?.debug, n = K1(e, t), s = {
        type: "workspace_readonly",
        disableTmpWrite: n.disableTmpWrite,
        networkPolicyStrict: n.networkPolicyStrict,
        readBoundary: n.readBoundary,
        additionalReadPaths: n.additionalReadPaths,
        additionalReadonlyPaths: n.additionalReadonlyPaths,
        networkPolicy: n.networkPolicy,
        debugOutputDir: n.debugOutputDir,
        captureDenies: n.captureDenies,
        enableSharedBuildCache: n.enableSharedBuildCache,
        ignoreMapping: n.ignoreMapping,
        writeProtectionMapping: n.writeProtectionMapping
    }, i = {
        policy: q1(s, "workspace_readonly")
    };
    return r && (i.debug = {
        fieldSources: n.fieldSources
    }), i;
}
function $9(e, t) {
    const { perUser: r, perRepo: n, teamAdmin: s } = e, i = t?.debug, o = {}, a = ns(r?.allowlistEscalated, n?.allowlistEscalated, s?.allowlistEscalated), c = Zr(r?.debugOutputDir, n?.debugOutputDir, s?.debugOutputDir), l = ns(r?.captureDenies, n?.captureDenies, s?.captureDenies), u = Zr(r?.enableSharedBuildCache, n?.enableSharedBuildCache, s?.enableSharedBuildCache), f = Object.fromEntries(Object.entries({
        type: "insecure_none",
        allowlistEscalated: a || void 0,
        debugOutputDir: c,
        captureDenies: l || void 0,
        enableSharedBuildCache: u
    }).filter(([g, _])=>_ !== void 0));
    f.type = "insecure_none";
    const p = {
        policy: f
    };
    return i && (p.debug = {
        fieldSources: o
    }), p;
}
function al(e) {
    return ol(e) ? `${Z1}; ` : "";
}
function eg(e) {
    if (process.platform === "win32") {
        const n = /git.*bash/i;
        if (e && n.test(e)) return e;
        const s = Ke("bash", [], n).cmd;
        return n.test(s) ? s : null;
    }
    const t = process.env.SHELL;
    return t?.includes("bash") ? t : Ke("bash", []).cmd;
}
function tg(e) {
    if (process.platform !== "win32") return e;
    const t = _t.normalize(e), r = t[0]?.toLowerCase();
    return r && t[1] === ":" && t[2] === _t.sep ? `/${r}${t.slice(2).replace(/\\/g, "/")}` : t.replace(/\\/g, "/");
}
var cl;
export { $9, A7, A9, Ah, Ai, D7, Di, Eh, G5, Gp, J5, Jc, K1, K5, Kb, Kp, N7, N9, Pt, Qc, Qr, R9, S7, S9, T9, U1, U7, U9, V5, W5, Y5, Yn, Z5, Zc, Zr, _p, _r, al, b7, cc, cl, cp, eg, el, fr, g1, hr, il, j1, j5, jb, jt, ki, lp, mc, ns, op, q1, q5, qb, qp, sl, tg, ts, up, vr, w7, wi, y7, z5 };
var __wakaru_rg_initialized = false;
export function rg() {
if (__wakaru_rg_initialized) return;
__wakaru_rg_initialized = true;
"use strict";
h(), Tt(), ze(), Jr(), w9(), rs(), Kr(), en(), Xr(), os(), Yt(), cl = class a2 {
    constructor(t, r, n, s = !1){
        this.cwd = t, this.state = r, this.userTerminalHint = n, this.useFileStateTransport = s;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(t) {
        return new a2(t ?? this.cwd, this.state, this.userTerminalHint, this.useFileStateTransport);
    }
    resetSessionCwdAfterHopCdFailure(t) {
        const { cwd: r, sandboxWorkspaceRoot: n } = t;
        _t.resolve(r) === _t.resolve(this.cwd) && (this.cwd = n !== void 0 && _t.resolve(n) !== _t.resolve(r) && !wi(n) ? n : op());
    }
    async *execute(t, r, n) {
        var s = [];
        try {
            const a = hr(s, _r(t.withName("BashState.execute"))), c = n?.pipeStdin ?? !1, l = Yn(), u = n?.workingDirectory ?? this.cwd, d = {
                ...process.env,
                ...It,
                ...n?.env
            };
            let f = 'builtin eval "$1"';
            c || (f += " < /dev/null");
            const p = al(d), g = this.useFileStateTransport;
            let _, y, m;
            if (g) {
                _ = await F9(_t.join(z9.tmpdir(), "cursor-bash-state-"));
                const z = _t.basename(_);
                y = _t.join(_, "state-in"), m = _t.join(_, "state-out"), await Q1(y, this.state, "utf8"), await Q1(m, "", "utf8").catch(()=>{});
                const Q = tg(y), G = tg(m);
                d.CURSOR_STATE_INPUT_FILE = Q, d.CURSOR_STATE_OUTPUT_FILE = G;
            }
            const A = g ? 'snap=$(command cat "$CURSOR_STATE_INPUT_FILE")' : "snap=$(command cat <&3)", S = g ? 'mkdir -p "$(dirname "$CURSOR_STATE_OUTPUT_FILE")" 2>/dev/null; dump_bash_state > "$CURSOR_STATE_OUTPUT_FILE"' : "dump_bash_state >&4", b = [
                "-O",
                "extglob",
                "-c",
                (g ? "" : Ui) + `${A} && builtin shopt -s extglob && builtin eval -- "$snap" && { builtin set +u 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + Oi + `builtin export PWD="$(builtin pwd)"; builtin shopt -s expand_aliases 2>/dev/null; ${p}${f}; }; COMMAND_EXIT_CODE=$?; ${S}; builtin exit $COMMAND_EXIT_CODE`,
                "--",
                ...g ? [
                    r
                ] : []
            ], I = eg(this.userTerminalHint);
            if (!I) throw new Error("Can't find Bash");
            const O = n?.sandboxWorkspaceRoot ?? u, M = (await Qr(O, n?.sandboxPolicy)).policy, F = M.type !== "insecure_none" ? {
                ...M,
                sandboxWorkspaceRoot: O
            } : M;
            let H = "";
            const ee = async ()=>{
                if (g) {
                    if (!m) {
                        H = this.state;
                        return;
                    }
                    try {
                        H = await H9(m, "utf8");
                    } catch (z) {
                        console.warn("[shell-exec] Failed to read bash state file", z), H = this.state;
                    }
                }
            }, Y = async ()=>{
                if (_) try {
                    await B9(_, {
                        recursive: !0,
                        force: !0
                    });
                } catch  {}
            };
            lp(u) && jt(a.ctx, mp);
            let B;
            try {
                B = Pt(I, b, {
                    env: d,
                    stdio: [
                        c ? "pipe" : "ignore",
                        "pipe",
                        "pipe",
                        "pipe",
                        "pipe",
                        g ? "ignore" : "pipe"
                    ],
                    cwd: u,
                    detached: !0
                }, F, n?.signal);
            } catch (z) {
                throw await Y(), z;
            }
            B.on("spawn", async ()=>{
                try {
                    await l.write({
                        type: "stdin_ready",
                        stdin: B.stdin ?? void 0,
                        pid: B.pid
                    });
                } catch  {}
            });
            const P = ts({
                stdout: B.stdout,
                stderr: B.stderr,
                writable: l,
                bufferOutputEvents: n?.bufferOutputEvents,
                outputLimiterOptions: n?.outputLimiterOptions
            });
            B.on("error", async (z)=>{
                if (Z5(z, u)) {
                    this.resetSessionCwdAfterHopCdFailure({
                        cwd: u,
                        sandboxWorkspaceRoot: n?.sandboxWorkspaceRoot
                    }), jt(a.ctx, fc);
                    const Q = cp(u);
                    console.warn(`[shell-exec] working directory is not accessible (${Q.cwdKind}:${Q.cwdHash})`);
                }
                await Y(), l.throw(z);
            });
            let T = null, R = null, C = !1;
            const L = async (z)=>{
                if (C) return;
                if (C = !0, R && (clearTimeout(R), R = null), jt(a.ctx, "exit"), z) try {
                    await P.waitForOutput();
                } catch (G) {
                    await Y(), l.throw(G instanceof Error ? G : new Error(String(G)));
                    return;
                }
                const Q = Ai({
                    exitCode: T,
                    stdoutBytes: P.stdoutBytes,
                    stdoutPrefix: P.stdoutPrefix,
                    cwd: u
                }) && H === "";
                if (Q && P.dropHeldStdout(), await P.flush(), Q) {
                    this.resetSessionCwdAfterHopCdFailure({
                        cwd: u,
                        sandboxWorkspaceRoot: n?.sandboxWorkspaceRoot
                    }), await Y(), jt(a.ctx, fc);
                    const G = cp(u);
                    console.warn(`[shell-exec] working directory is not accessible (${G.cwdKind}:${G.cwdHash})`), l.throw(cc(u));
                    return;
                }
                if (!n?.signal?.aborted) {
                    await ee();
                    const G = `${rl}
`, Me = `${es}
`;
                    if (H.startsWith(G) && H.endsWith(Me)) {
                        let He = H.slice(G.length);
                        He = He.slice(0, -(es.length + 1));
                        const { cwd: E, rest: x } = vr(He);
                        this.state = x, process.platform !== "win32" && E?.startsWith("/") && (this.cwd = E);
                    }
                }
                if (F.captureDenies) try {
                    const G = await Di(B);
                    G && G.length > 0 && await l.write({
                        type: "sandbox_denies",
                        events: G
                    });
                } catch  {}
                try {
                    await l.write({
                        type: "exit",
                        code: T,
                        data: "",
                        aborted: n?.signal?.aborted ?? !1
                    }), l.close();
                } catch  {
                    l.close();
                }
                await Y();
            };
            B.on("exit", (z, Q)=>{
                T = z;
                const G = n?.closeTimeout ?? 5e3;
                G > 0 && (R = setTimeout(()=>{
                    console.warn(`[shell-exec] Close event did not fire within ${G}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), L(!1);
                }, G));
            }), B.on("close", async ()=>{
                await L(!0);
            });
            const D = B.stdio[3], N = B.stdio[4];
            g || (Zc(B, r), Qc(D, this.state), el(N, (z)=>{
                H += z;
            })), yield* l;
        } catch (a) {
            var i = a, o = !0;
        } finally{
            fr(s, i, o);
        }
    }
};

}
