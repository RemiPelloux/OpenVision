import { $n, Fn, In, Mn, O1, Ot, ar, xn } from "./argv.js";
import { fl } from "./argvHelper.js";
import { St, d1, u1 } from "./async.js";
import { Zt, it } from "./cancellation.js";
import { N1, i0 } from "./cliDesktopBridge.js";
import { Bn, Vn, zn } from "./desktop-bridge.ts";
import { I1, oo, ur, x1 } from "./desktopBridgeCliClient.js";
import { Br, oe } from "./event.js";
import { Ei, Je, Si } from "./extpath.js";
import { b } from "./files.js";
import { Mi, tr } from "./network.js";
import { Tn, Z2 } from "./nodejsWatcherLib.js";
import { Ne, Q, Qr, le, ze } from "./path.js";
import { Ce, Xi, en, ir, y1 } from "./pfs.js";
import { V, X, xe } from "./platform.js";
import { va } from "./ports.js";
import { E2 } from "./ports_2.js";
import { Hr, rt } from "./process.js";
import { se, v0 } from "./product.js";
import { $1, b0 } from "./profiling.js";
import { p0 } from "./stdin.js";
import { F1, M1, co } from "./terminalEncoding.js";
import { w } from "./tslib.es6.js";
import { S0 } from "./unc.js";
import { Y, Ye } from "./uri.js";
import { y0 } from "./wait.js";
import { truncateSync as A0 } from "fs";
import * as C2 from "net";
import { homedir as Il } from "os";
import { readdir as Ll } from "fs/promises";
import * as N from "fs";
import { join as Nl } from "path";
import { tmpdir as P0 } from "os";
import { readFile as Rl } from "fs/promises";
import al from "assert";
import { chmodSync as fo } from "fs";
import * as fr from "fs";
import { tmpdir as g0 } from "os";
import { existsSync as j1 } from "fs";
import { homedir as k0 } from "os";
import { tmpdir as l0 } from "os";
import { exec as lo } from "child_process";
import { writeFileSync as m0 } from "fs";
import { unlinkSync as mo } from "fs";
import { statSync as mr } from "fs";
import { readFileSync as po } from "fs";
import { spawn as pr } from "child_process";
import { request as xl } from "http";
function ya() {
    return 1025 + Math.floor(64510 * Math.random());
}
function Oa(e) {
    if (!V || !e || e.length < 5) return !1;
    let t = e.charCodeAt(0);
    if (t !== 92 || (t = e.charCodeAt(1), t !== 92)) return !1;
    let r = 2;
    const s = r;
    for(; r < e.length && (t = e.charCodeAt(r), t !== 92); r++);
    return !(s === r || (t = e.charCodeAt(r + 1), isNaN(t) || t === 92));
}
function Et(e, t, r = 8) {
    let s = "";
    for(let n = 0; n < r; n++){
        let a;
        n === 0 && V && !t && (r === 3 || r === 4) ? a = Si : a = Ei, s += a.charAt(Math.floor(Math.random() * a.length));
    }
    let i;
    return t ? i = `${t}-${s}` : i = s, e ? Q(e, i) : i;
}
function Zi(e, t = 1e3) {
    return new Promise((r)=>{
        let s = !1;
        const i = setInterval(()=>{
            s || (s = !0, N.access(e, (n)=>{
                s = !1, n && (clearInterval(i), r(void 0));
            }));
        }, t);
    });
}
function nt(e, t, r) {
    const s = en(r);
    if (!ir) return N.writeFileSync(e, t, {
        mode: s.mode,
        flag: s.flag
    });
    const i = N.openSync(e, s.flag, s.mode);
    try {
        N.writeFileSync(i, t);
        try {
            N.fdatasyncSync(i);
        } catch (n) {
            console.warn("[node.js fs] fdatasyncSync is now disabled for this session because it failed: ", n), Xi(!1);
        }
    } finally{
        N.closeSync(i);
    }
}
function v1(e, t, r, s = 1) {
    let i = !1;
    return new Promise((n)=>{
        const a = setTimeout(()=>{
            if (!i) return i = !0, n(0);
        }, r);
        w1(e, t, s, (o)=>{
            if (!i) return i = !0, clearTimeout(a), n(o);
        });
    });
}
function w1(e, t, r, s) {
    if (t === 0) return s(0);
    const i = new C2.Socket;
    i.once("connect", ()=>(on(i), w1(e + r, t - 1, r, s))), i.once("data", ()=>{}), i.once("error", (n)=>(on(i), n.code !== "ECONNREFUSED" ? w1(e + r, t - 1, r, s) : s(e))), i.connect(e, "127.0.0.1");
}
function on(e) {
    try {
        e.removeAllListeners("connect"), e.removeAllListeners("error"), e.end(), e.destroy(), e.unref();
    } catch (t) {
        console.error(t);
    }
}
async function Y2(e, t, r, s, i = 512) {
    const n = await Ce.open(e, "r"), a = Buffer.allocUnsafe(i), o = new it(s);
    let l, c = !1;
    const h = {
        path: e,
        excludes: [],
        recursive: !1
    }, u = new Tn(h, void 0, (f)=>{
        (async ()=>{
            for (const { type: d } of f)if (d === 0) {
                if (c) return;
                c = !0;
                try {
                    for(; !o.token.isCancellationRequested;){
                        const { bytesRead: m } = await Ce.read(n, a, 0, i, null);
                        if (!m || o.token.isCancellationRequested) break;
                        t(a.slice(0, m));
                    }
                } catch (m) {
                    l = new Error(m), o.dispose(!0);
                } finally{
                    c = !1;
                }
            }
        })();
    });
    return await u.ready, r(), new Promise((f, d)=>{
        o.token.onCancellationRequested(async ()=>{
            u.dispose();
            try {
                await Ce.close(n);
            } catch (m) {
                l = new Error(m);
            }
            l ? d(l) : f();
        });
    });
}
function el(e) {
    if (e) return O1;
    const t = {
        ...O1
    };
    return delete t.desktop, t;
}
function On(e, t, r = Fn) {
    const s = e.find((f)=>f.length > 0 && f[0] !== "-"), i = {}, n = [
        "_"
    ], a = [], o = {};
    let l;
    for(const f in t){
        const d = t[f];
        d.type === "subcommand" ? f === s && (l = d) : (d.alias && (i[f] = d.alias), d.type === "string" || d.type === "string[]" ? (n.push(f), d.deprecates && n.push(...d.deprecates)) : d.type === "boolean" && (a.push(f), d.deprecates && a.push(...d.deprecates)), d.global && (o[f] = d));
    }
    if (l && s) {
        const f = o;
        for(const D in l.options)f[D] = l.options[D];
        const d = [
            ...e
        ];
        d.splice(d.indexOf(s), 1);
        const m = r.getSubcommandReporter ? r.getSubcommandReporter(s) : void 0, k = On(d, f, m);
        return {
            [s]: k,
            _: []
        };
    }
    const c = (0, xn.default)(e, {
        string: n,
        boolean: a,
        alias: i
    }), h = {}, u = c;
    h._ = c._.map((f)=>String(f)).filter((f)=>f.length > 0), delete u._;
    for(const f in t){
        const d = t[f];
        if (d.type === "subcommand") continue;
        d.alias && delete u[d.alias];
        let m = u[f];
        if (d.deprecates) for (const k of d.deprecates)u.hasOwnProperty(k) && (m || (m = u[k], m && r.onDeprecatedOption(k, d.deprecationMessage || b(1906, null, f))), delete u[k]);
        if (typeof m < "u") {
            if (d.type === "string[]") {
                if (Array.isArray(m) || (m = [
                    m
                ]), !d.allowEmptyValue) {
                    const k = m.filter((D)=>D.length > 0);
                    k.length !== m.length && (r.onEmptyValue(f), m = k.length > 0 ? k : void 0);
                }
            } else d.type === "string" && (Array.isArray(m) ? (m = m.pop(), r.onMultipleValues(f, m)) : !m && !d.allowEmptyValue && (r.onEmptyValue(f), m = void 0));
            h[f] = m, d.deprecationMessage && r.onDeprecatedOption(f, d.deprecationMessage);
        }
        delete u[f];
    }
    for(const f in u)r.onUnknownOption(f);
    return h;
}
function tl(e, t) {
    let r = "";
    return t.args && (Array.isArray(t.args) ? r = ` <${t.args.join("> <")}>` : r = ` <${t.args}>`), t.alias ? `-${t.alias} --${e}${r}` : `--${e}${r}`;
}
function rl(e, t) {
    const r = [];
    for(const s in e){
        const i = e[s], n = tl(s, i);
        r.push([
            n,
            i.description
        ]);
    }
    return Ln(r, t);
}
function Ln(e, t) {
    const s = e.reduce((a, o)=>Math.max(a, o[0].length), 12) + 2 + 1;
    if (t - s < 25) return e.reduce((a, o)=>a.concat([
            `  ${o[0]}`,
            `      ${o[1]}`
        ]), []);
    const i = t - s - 1, n = [];
    for (const a of e){
        const o = a[0], l = sl(a[1], i), c = Rn(s - o.length - 2);
        n.push("  " + o + c + l[0]);
        for(let h = 1; h < l.length; h++)n.push(Rn(s) + l[h]);
    }
    return n;
}
function Rn(e) {
    return " ".repeat(e);
}
function sl(e, t) {
    const r = [];
    for(; e.length;){
        let s = e.length < t ? e.length : e.lastIndexOf(" ", t);
        s === 0 && (s = t);
        const i = e.slice(0, s).trim();
        e = e.slice(s).trimStart(), r.push(i);
    }
    return r;
}
function il(e, t, r, s, i) {
    const n = process.stdout.isTTY && process.stdout.columns || 80, a = i?.noInputFiles !== !0 ? `[${b(1907, null)}...]` : "", o = [
        `${e} ${r}`
    ];
    o.push(""), o.push(`${b(1908, null)}: ${t} [${b(1909, null)}]${a}`), o.push(""), i?.noPipe !== !0 && (V ? o.push(b(1910, null, t)) : o.push(b(1911, null, t)), o.push(""));
    const l = {}, c = [];
    for(const h in s){
        const u = s[h];
        if (u.type === "subcommand") u.description && c.push({
            command: h,
            description: u.description
        });
        else if (u.description && u.cat) {
            let f = l[u.cat];
            f || (l[u.cat] = f = {}), f[h] = u;
        }
    }
    for(const h in l){
        const u = h, f = l[u];
        f && (o.push(In[u]), o.push(...rl(f, n)), o.push(""));
    }
    return c.length && (o.push(b(1912, null)), o.push(...Ln(c.map((h)=>[
            h.command,
            h.description
        ]), n)), o.push("")), o.join(`
`);
}
function nl(e, t) {
    return `${e || b(1913, null)}
${t || b(1914, null)}
${process.arch}`;
}
function jn(e, t, r) {
    const s = (c, h)=>{
        console.warn(b(1915, null, c, h));
    }, i = (c)=>{
        console.warn(b(1916, null, c));
    }, n = (c, h)=>{
        console.warn(b(1917, null, c, h));
    }, a = (c)=>({
            onUnknownOption: (h)=>{
                ar.includes(c) || console.warn(b(1918, null, h, c));
            },
            onMultipleValues: s,
            onEmptyValue: i,
            onDeprecatedOption: n,
            getSubcommandReporter: ar.includes(c) ? a : void 0
        }), l = On(e, r, t ? {
        onUnknownOption: (c)=>{
            console.warn(b(1919, null, c));
        },
        onMultipleValues: s,
        onEmptyValue: i,
        onDeprecatedOption: n,
        getSubcommandReporter: a
    } : void 0);
    return l.goto && l._.forEach((c)=>al(/^(\w:)?[^:]+(:\d*){0,2}:?$/.test(c), b(1920, null))), l;
}
function ll(e) {
    const t = e.findIndex((r)=>!/^-/.test(r));
    if (t > -1) return [
        ...e.slice(0, t),
        ...e.slice(t + 1)
    ];
}
function L1(e) {
    let [, , ...t] = e;
    return process.env.VSCODE_DEV && (t = ll(t) || []), t;
}
function cl(e) {
    return jn(L1(e), !0, Ot);
}
function ul(e) {
    return L1(e).find((r)=>r.length > 0 && r[0] !== "-") === "desktop";
}
function hl(e) {
    return jn(L1(e), !0, Mn);
}
function je(e, ...t) {
    const r = e.indexOf("--");
    return r === -1 ? e.push(...t) : e.splice(r, 0, ...t), e;
}
function Wn(e) {
    return typeof e == "string" && e.length > 0;
}
function Un(e) {
    const t = e.trim();
    return t.length > 0 && (zn.test(t) || t.length >= 36);
}
function dl({ homeDir: e, envOverride: t }) {
    return t !== void 0 ? t : `${e.replace(/[\\/]+$/, "")}/.cursor/desktop-bridge`;
}
function qn(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function lr(e) {
    return typeof e == "string" && e.length > 0;
}
function pl(e) {
    if (!(!qn(e) || typeof e.protocolVersion != "number" || !Number.isInteger(e.protocolVersion) || typeof e.pid != "number" || !Number.isInteger(e.pid) || e.pid <= 0 || !lr(e.socketPath) || typeof e.token != "string" || !/^[0-9a-f]{64}$/.test(e.token) || !lr(e.appName) || !lr(e.appVersion) || !lr(e.userDataDir) || typeof e.createdAt != "number" || !Number.isFinite(e.createdAt) || e.createdAt < 0)) return {
        protocolVersion: e.protocolVersion,
        pid: e.pid,
        socketPath: e.socketPath,
        token: e.token,
        appName: e.appName,
        appVersion: e.appVersion,
        userDataDir: e.userDataDir,
        createdAt: e.createdAt
    };
}
function ml(e) {
    return e === "local" || e === "cloud" || e === "draft" || e === "claude-code";
}
function gl(e) {
    return e === "idle" || e === "running" || e === "completed" || e === "error" || e === "unknown";
}
function _l(e) {
    if (!(!qn(e) || !Wn(e.id) || typeof e.title != "string" || !ml(e.source) || !gl(e.status) || typeof e.lastUpdatedAt != "number" || !Number.isFinite(e.lastUpdatedAt) || typeof e.windowId != "number" || !Number.isInteger(e.windowId))) return {
        id: e.id,
        title: e.title,
        source: e.source,
        status: e.status,
        lastUpdatedAt: e.lastUpdatedAt,
        windowId: e.windowId
    };
}
function cr(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function to(e) {
    return cr(e) && typeof e.code == "string" ? e.code : void 0;
}
function Ml(e) {
    try {
        return process.kill(e, 0), !0;
    } catch (t) {
        return to(t) === "EPERM";
    }
}
async function ro(e, t, r) {
    const s = new Array(e.length);
    let i = 0;
    const n = Array.from({
        length: Math.min(t, e.length)
    }, async ()=>{
        for(; i < e.length;){
            const a = i++;
            s[a] = await r(e[a]);
        }
    });
    return await Promise.all(n), s;
}
function Fl(e) {
    if (!cr(e) || !Array.isArray(e.threads)) return;
    const t = [];
    for (const r of e.threads){
        const s = _l(r);
        if (!s) return;
        t.push(s);
    }
    return {
        threads: t
    };
}
function $l(e) {
    if (!(!cr(e) || typeof e.status != "string")) switch(e.status){
        case "submitted":
        case "queued":
            return !Wn(e.threadId) || typeof e.windowId != "number" || !Number.isInteger(e.windowId) || typeof e.threadTitle != "string" ? void 0 : {
                status: e.status,
                threadId: e.threadId,
                windowId: e.windowId,
                threadTitle: e.threadTitle
            };
        case "unknown-thread":
            return {
                status: "unknown-thread"
            };
        case "timeout":
            return {
                status: "timeout"
            };
        case "not-sendable":
            return typeof e.reason == "string" ? {
                status: "not-sendable",
                reason: e.reason
            } : void 0;
        case "error":
            return typeof e.message == "string" ? {
                status: "error",
                message: e.message
            } : void 0;
        default:
            return;
    }
}
function so(e, t) {
    const r = cr(t.body) && typeof t.body.error == "string" ? `: ${t.body.error}` : "";
    return new Error(`${e.label} desktop bridge returned HTTP ${t.statusCode}${r}`);
}
function io(e, t) {
    const r = JSON.stringify(t);
    return new Promise((s, i)=>{
        const n = xl({
            socketPath: e.discovery.socketPath,
            path: "/",
            method: "POST",
            headers: {
                authorization: `Bearer ${e.discovery.token}`,
                "content-type": "application/json",
                "content-length": Buffer.byteLength(r)
            }
        }, (a)=>{
            const o = [];
            a.on("data", (l)=>{
                const c = Buffer.isBuffer(l) ? l : Buffer.from(l);
                o.push(c);
            }), a.on("error", i), a.on("end", ()=>{
                let l;
                try {
                    l = JSON.parse(Buffer.concat(o).toString("utf8"));
                } catch  {
                    i(new Error(`${e.label} desktop bridge returned invalid JSON`));
                    return;
                }
                s({
                    statusCode: a.statusCode ?? 500,
                    body: l
                });
            });
        });
        n.setTimeout(oo, ()=>{
            n.destroy(new Error(`${e.label} desktop bridge request timed out`));
        }), n.on("error", i), n.end(r);
    });
}
async function jl() {
    try {
        return (await R1()).length > 0;
    } catch  {
        return !1;
    }
}
async function R1() {
    const e = dl({
        homeDir: Il(),
        envOverride: process.env.CURSOR_DESKTOP_BRIDGE_DIR
    });
    let t;
    try {
        t = await Ll(e, {
            withFileTypes: !0
        });
    } catch (i) {
        if (to(i) === "ENOENT") return [];
        throw i;
    }
    const r = t.filter((i)=>i.isFile() && i.name.endsWith(".json"));
    return (await ro(r, x1, async (i)=>{
        const n = Nl(e, i.name);
        try {
            const a = JSON.parse(await Rl(n, "utf8")), o = pl(a);
            return !o || o.protocolVersion !== Bn || !Ml(o.pid) ? void 0 : {
                discovery: o,
                label: `${o.appName} ${o.appVersion}`
            };
        } catch  {
            return;
        }
    })).filter((i)=>i !== void 0);
}
async function Wl(e) {
    const t = await io(e, {
        type: "listThreads"
    });
    if (t.statusCode !== 200) throw so(e, t);
    const r = Fl(t.body);
    if (!r) throw new Error(`${e.label} desktop bridge returned invalid threads`);
    return r.threads.map((s)=>({
            ...s,
            instance: e
        }));
}
async function no(e) {
    const t = await ro(e, x1, async (s)=>{
        try {
            return {
                status: "success",
                threads: await Wl(s)
            };
        } catch  {
            return {
                status: "failure",
                instanceLabel: s.label
            };
        }
    }), r = t.flatMap((s)=>s.status === "failure" ? [
            s.instanceLabel
        ] : []);
    if (e.length > 0 && r.length === e.length) throw new Error(`all desktop instances failed to list threads: ${r.join(", ")}`);
    return t.flatMap((s)=>s.status === "success" ? s.threads : []).sort((s, i)=>i.lastUpdatedAt - s.lastUpdatedAt).slice(0, Vn);
}
function Ul(e) {
    return e.reduce((t, r)=>r.lastUpdatedAt > t.lastUpdatedAt ? r : t);
}
function ql(e) {
    const t = e.trim();
    return Un(t) ? t.toLowerCase() : t;
}
function Bl(e, t) {
    const r = t;
    return e.map((s)=>({
            id: r,
            title: r,
            source: "local",
            status: "idle",
            lastUpdatedAt: 0,
            windowId: 0,
            instance: s
        }));
}
async function Vl(e, t) {
    const r = ql(t);
    if (r.length === 0) throw new ur(r);
    const s = await no(e), i = s.filter((a)=>a.id === r);
    if (i.length >= 1) return [
        Ul(i)
    ];
    const n = s.filter((a)=>a.id.startsWith(r));
    if (n.length === 1) return [
        n[0]
    ];
    if (n.length > 1) throw new I1(r, n);
    if (Un(r)) return Bl(e, r);
    throw new ur(r);
}
async function zl(e, t, r) {
    const s = await io(e.instance, {
        type: "sendMessage",
        threadId: e.id,
        text: t,
        force: r.force
    }), i = $l(s.body);
    if (s.statusCode !== 200) {
        if (i?.status === "error") return i;
        throw so(e.instance, s);
    }
    if (!i) throw new Error(`${e.instance.label} desktop bridge returned an invalid send result`);
    return i;
}
async function Gl(e, t, r, s = zl) {
    if (e.length === 0) throw new Error("Failed to send to any desktop instance");
    let i = e[0], n, a;
    const o = (l)=>{
        switch(l.status){
            case "submitted":
            case "queued":
            case "timeout":
                return 4;
            case "not-sendable":
            case "error":
                return 3;
            case "unknown-thread":
                return 1;
            default:
                return 0;
        }
    };
    for (const l of e)try {
        const c = await s(l, t, {
            force: r.force
        });
        if (i = l, c.status === "submitted" || c.status === "queued" || c.status === "timeout") {
            n = c;
            break;
        }
        if ((!n || o(c) >= o(n)) && (n = c), c.status === "not-sendable" || c.status === "error" || e.length === 1) break;
    } catch (c) {
        if (a = c, n = void 0, e.length === 1) throw c;
        continue;
    }
    if (!n) throw a ?? new Error("Failed to send to any desktop instance");
    return {
        thread: i,
        response: n
    };
}
function Ze(e) {
    process.stdout.write(`${e}
`);
}
function hr(e) {
    process.stderr.write(`${e}
`);
}
function ge(e, t) {
    e ? Ze(JSON.stringify({
        status: "error",
        message: t
    }, null, 2)) : hr(`error: ${t}`), process.exitCode = 1;
}
function Kl(e) {
    const t = /\x1B(?:\][^\u0007\x1B]*(?:\u0007|\x1B\\)|\[[0-?]*[ -/]*[@-~]|[@-Z\\-_])/g;
    return e.replace(t, "").replace(/[\x00-\x1F\x7F-\x9F]/g, "");
}
function Jl(e, t) {
    const r = e.map((n, a)=>{
        let o = n.length;
        for (const l of t)o = Math.max(o, (l[a] ?? "").length);
        return o;
    }), s = (n, a)=>`${n}${" ".repeat(Math.max(0, a - n.length))}`, i = (n)=>n.map((a, o)=>s(a, r[o])).join("  ").trimEnd();
    return [
        i(e),
        ...t.map(i)
    ].join(`
`);
}
function Ql(e) {
    const { instance: t, ...r } = e;
    return {
        ...r,
        instance: {
            label: t.label,
            appName: t.discovery.appName,
            appVersion: t.discovery.appVersion,
            userDataDir: t.discovery.userDataDir
        }
    };
}
function Yl(e) {
    return Jl([
        "THREAD ID",
        "TITLE",
        "SOURCE",
        "STATUS",
        "WHERE"
    ], e.map((t)=>[
            t.id,
            Kl(t.title || "(untitled)"),
            t.source,
            t.status,
            t.instance.label
        ]));
}
function ao(e) {
    if (e instanceof ur) return `thread ref ${JSON.stringify(e.ref)} was not found`;
    if (e instanceof I1) {
        const t = e.candidates.map((r)=>`${r.id} ${JSON.stringify(r.title)}`).join(", ");
        return `thread ref ${JSON.stringify(e.ref)} is ambiguous: ${t}`;
    }
    return e instanceof Error ? e.message : String(e);
}
function Zl(e, t, r) {
    switch(t.status){
        case "submitted":
            {
                const s = r && e.status === "running" ? " (interrupted running turn)" : "";
                Ze(`Submitted to ${JSON.stringify(t.threadTitle)} (${t.threadId})${s}`);
                return;
            }
        case "queued":
            Ze(`Queued in ${JSON.stringify(t.threadTitle)} (agent is running; will submit when the current turn ends)`);
            return;
        case "unknown-thread":
            ge(!1, `thread ${JSON.stringify(e.id)} is no longer available`);
            return;
        case "timeout":
            ge(!1, "desktop did not confirm the message before timeout; it may have been submitted");
            return;
        case "not-sendable":
            ge(!1, `thread ${JSON.stringify(e.title)} is not sendable: ${t.reason}`);
            return;
        case "error":
            ge(!1, t.message);
            return;
        default:
            {
                const s = t;
                throw new Error(`Unhandled desktop send result: ${String(s)}`);
            }
    }
}
async function Xl(e) {
    try {
        const t = await R1();
        if (t.length === 0) {
            ge(e.json, "no running Cursor desktop instance found (is the app open?)");
            return;
        }
        const r = await no(t);
        if (e.json) {
            Ze(JSON.stringify(r.map(Ql), null, 2));
            return;
        }
        const s = `${r.length} thread${r.length === 1 ? "" : "s"} across ${t.length} running Cursor instance${t.length === 1 ? "" : "s"}`;
        Ze(`${Yl(r)}
${s}`);
    } catch (t) {
        ge(e.json, ao(t));
    }
}
async function e0() {
    const e = [];
    for await (const t of process.stdin)e.push(Buffer.isBuffer(t) ? t : Buffer.from(t));
    return Buffer.concat(e).toString("utf8");
}
async function t0(e, t, r) {
    try {
        const s = r.stdin ? await e0() : t.join(" ");
        if (s.length === 0) {
            ge(r.json, "message text is empty (provide text or use --stdin)");
            return;
        }
        const i = await R1();
        if (i.length === 0) {
            ge(r.json, "no running Cursor desktop instance found (is the app open?)");
            return;
        }
        const n = await Vl(i, e), { thread: a, response: o } = await Gl(n, s, {
            force: r.force
        });
        if (r.json) {
            Ze(JSON.stringify(o, null, 2)), o.status !== "submitted" && o.status !== "queued" && (process.exitCode = 1);
            return;
        }
        Zl(a, o, r.force);
    } catch (s) {
        ge(r.json, ao(s));
    }
}
async function r0(e) {
    return e.isDevBuild ? !0 : jl();
}
async function s0(e) {
    const [t, ...r] = e._;
    if (e.help || t === void 0) {
        Ze(N1), t === void 0 && !e.help && (process.exitCode = 1);
        return;
    }
    switch(t){
        case "ls":
            await Xl({
                json: e.json === !0
            });
            return;
        case "send":
            {
                const [s, ...i] = r;
                if (s === void 0) {
                    ge(e.json === !0, "missing required argument 'thread' (a thread id from `cursor desktop ls`, or a unique prefix of one)");
                    return;
                }
                await t0(s, i, {
                    force: e.force === !0,
                    stdin: e.stdin === !0,
                    json: e.json === !0
                });
                return;
            }
        default:
            if (e.json === !0) {
                ge(!0, `unknown desktop command '${t}'`);
                return;
            }
            hr(`error: unknown desktop command '${t}'`), hr(""), hr(N1), process.exitCode = 1;
    }
}
function n0(e) {
    const t = e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return co[t] || t;
}
async function o0(e) {
    let t;
    const r = process.env.VSCODE_CLI_ENCODING;
    r ? (e && console.log(`Found VSCODE_CLI_ENCODING variable: ${r}`), t = Promise.resolve(r)) : V ? t = new Promise((i)=>{
        e && console.log('Running "chcp" to detect terminal encoding...'), lo("chcp", (n, a, o)=>{
            if (a) {
                e && console.log(`Output from "chcp" command is: ${a}`);
                const l = Object.keys(M1);
                for (const c of l)if (a.indexOf(c) >= 0) return i(M1[c]);
            }
            return i(void 0);
        });
    }) : t = new Promise((i)=>{
        e && console.log('Running "locale charmap" to detect terminal encoding...'), lo("locale charmap", (n, a, o)=>i(a));
    });
    const s = await t;
    return e && console.log(`Detected raw terminal encoding: ${s}`), !s || s.toLowerCase() === "utf-8" || s.toLowerCase() === F1 ? F1 : n0(s);
}
function c0() {
    try {
        return !process.stdin.isTTY;
    } catch  {}
    return !1;
}
function u0(e) {
    return new Promise((t)=>{
        const r = ()=>t(!0);
        setTimeout(()=>{
            process.stdin.removeListener("data", r), t(!1);
        }, e), process.stdin.once("data", r);
    });
}
function h0() {
    return Et(l0(), "code-stdin", 3);
}
async function f0(e) {
    await fr.promises.appendFile(e, ""), await fr.promises.chmod(e, 384);
}
async function d0(e, t, r) {
    let [s, i] = await Promise.all([
        o0(t),
        import("@vscode/iconv-lite-umd"),
        f0(e)
    ]);
    i.default.encodingExists(s) || (console.log(`Unsupported terminal encoding: ${s}, falling back to UTF-8.`), s = "utf8");
    const n = new u1, a = i.default.getDecoder(s);
    process.stdin.on("data", (o)=>{
        const l = a.write(o);
        n.queue(()=>fr.promises.appendFile(e, l));
    }), process.stdin.on("end", ()=>{
        const o = a.end();
        n.queue(async ()=>{
            try {
                typeof o == "string" && await fr.promises.appendFile(e, o);
            } finally{
                r?.();
            }
        });
    });
}
function _0(e) {
    const t = Et(g0());
    try {
        return m0(t, ""), e && console.log(`Marker file for --wait created: ${t}`), t;
    } catch (r) {
        e && console.error(`Failed to create marker file for --wait: ${r}`);
        return;
    }
}
function C0() {
    return process.uncHostAllowlist;
}
function uo(e) {
    if (process.platform !== "win32") return;
    const t = C0();
    if (t) if (typeof e == "string") t.add(e.toLowerCase());
    else for (const r of E0(e))uo(r);
}
function E0(e) {
    const t = new Set;
    if (Array.isArray(e)) for (const r of e)typeof r == "string" && t.add(r);
    return Array.from(t);
}
function D0(e) {
    return !!e["install-source"] || !!e["list-extensions"] || !!e["install-extension"] || !!e["uninstall-extension"] || !!e["update-extensions"] || !!e["locate-extension"] || !!e["add-mcp"] || !!e.telemetry;
}
async function go(e) {
    let t;
    try {
        t = ul(e) && await r0({
            isDevBuild: !!process.env.VSCODE_DEV
        }) ? hl(e) : cl(e);
    } catch (r) {
        console.error(r.message);
        return;
    }
    for (const r of ar)if (t[r]) {
        if (!se.tunnelApplicationName) {
            console.error(`'${r}' command not supported in ${se.applicationName}`);
            return;
        }
        const s = {
            ...process.env
        };
        delete s.ELECTRON_RUN_AS_NODE;
        const i = e.slice(e.indexOf(r) + 1);
        return new Promise((n, a)=>{
            let o;
            const l = [
                "ignore",
                "pipe",
                "pipe"
            ];
            if (process.env.VSCODE_DEV) o = pr("cargo", [
                "run",
                "--",
                r,
                ...i
            ], {
                cwd: Q(_o(), "cli"),
                stdio: l,
                env: s
            });
            else {
                const c = process.platform === "darwin" ? Q(Ne(Ne(process.execPath)), "Resources", "app") : V ? Q(Ne(process.execPath), "resources", "app") : Ne(process.execPath), h = Q(c, "bin", `${se.tunnelApplicationName}${V ? ".exe" : ""}`);
                o = pr(h, [
                    r,
                    ...i
                ], {
                    cwd: rt(),
                    stdio: l,
                    env: s
                });
            }
            o.stdout.pipe(process.stdout), o.stderr.pipe(process.stderr), o.on("exit", n), o.on("error", a);
        });
    }
    if (t.desktop) return s0(t.desktop);
    if (t.help) {
        const r = `${se.applicationName}${V ? ".exe" : ""}`, s = se.nameLong.startsWith("Cursor") ? el(!!process.env.VSCODE_DEV) : Ot;
        console.log(il(se.nameLong, r, se.version, s));
    } else if (t.version) console.log(nl(se.version, se.commit));
    else if (t["locate-shell-integration-path"]) {
        let r;
        switch(t["locate-shell-integration-path"]){
            case "bash":
                r = "shellIntegration-bash.sh";
                break;
            case "pwsh":
                r = "shellIntegration.ps1";
                break;
            case "zsh":
                r = "shellIntegration-rc.zsh";
                break;
            case "fish":
                r = "shellIntegration.fish";
                break;
            default:
                throw new Error("Error using --locate-shell-integration-path: Invalid shell type");
        }
        console.log(Q(_o(), "out", "vs", "workbench", "contrib", "terminal", "common", "scripts", r));
    } else if (D0(t)) {
        let r;
        process.env.VSCODE_DEV ? r = "./cliProcessMain.js" : r = "./vs/code/node/cliProcessMain.js", await (await import(r)).main(t);
        return;
    } else if (t["file-write"]) {
        const r = t._[0];
        if (!r || !ze(r) || !j1(r) || !mr(r).isFile()) throw new Error("Using --file-write with invalid arguments.");
        let s, i;
        try {
            const n = JSON.parse(po(r, "utf8"));
            s = n.source, i = n.target;
        } catch  {
            throw new Error("Using --file-write with invalid arguments.");
        }
        if (V) for (const n of [
            s,
            i
        ])typeof n == "string" && Oa(n) && uo(Y.file(n).authority);
        if (!s || !i || s === i || !ze(s) || !ze(i) || !j1(s) || !mr(s).isFile() || !j1(i) || !mr(i).isFile()) throw new Error("Using --file-write with invalid arguments.");
        try {
            let n = 0, a = !1;
            t["file-chmod"] && (n = mr(i).mode, n & 128 || (fo(i, n | 128), a = !0));
            const o = po(s);
            V ? (A0(i, 0), nt(i, o, {
                flag: "r+"
            })) : nt(i, o), a && fo(i, n);
        } catch (n) {
            throw n.message = `Error using --file-write: ${n.message}`, n;
        }
    } else {
        const r = {
            ...process.env,
            ELECTRON_NO_ATTACH_CONSOLE: "1"
        };
        delete r.ELECTRON_RUN_AS_NODE;
        const s = [];
        t.verbose && (r.ELECTRON_ENABLE_LOGGING = "1"), (t.verbose || t.status) && s.push(async (c)=>{
            c.stdout?.on("data", (h)=>console.log(h.toString("utf8").trim())), c.stderr?.on("data", (h)=>console.log(h.toString("utf8").trim())), await oe.toPromise(oe.fromNodeEventEmitter(c, "exit"));
        });
        const i = t._.some((c)=>c === "-");
        i && (t._ = t._.filter((c)=>c !== "-"), e = e.filter((c)=>c !== "-"));
        let n;
        if (c0()) if (i) {
            n = h0();
            try {
                const c = new d1;
                await d0(n, !!t.verbose, ()=>c.complete()), t.wait || s.push(()=>c.p), je(e, n), je(e, "--skip-add-to-recently-opened"), console.log(`Reading from stdin via: ${n}`);
            } catch (c) {
                console.log(`Failed to create file to read via stdin: ${c.toString()}`), n = void 0;
            }
        } else s.push((c)=>u0(1e3).then((h)=>{
                h && console.log(V ? `Run with '${se.applicationName} -' to read output from another program (e.g. 'echo Hello World | ${se.applicationName} -').` : `Run with '${se.applicationName} -' to read from stdin (e.g. 'ps aux | grep code | ${se.applicationName} -').`);
            }));
        let a;
        if (t.wait && (a = _0(t.verbose), a && je(e, "--waitMarkerFilePath", a), s.push(async (c)=>{
            let h;
            xe ? h = new Promise((u)=>{
                c.on("exit", (f, d)=>{
                    (f !== 0 || d) && u();
                });
            }) : h = oe.toPromise(oe.fromNodeEventEmitter(c, "exit"));
            try {
                await Promise.race([
                    Zi(a),
                    oe.toPromise(oe.fromNodeEventEmitter(c, "error")),
                    h
                ]);
            } finally{
                n && mo(n);
            }
        })), t["prof-startup"]) {
            const c = "127.0.0.1", h = await v1(ya(), 10, 3e3), u = await v1(h + 1, 10, 3e3), f = await v1(u + 1, 10, 3e3);
            if (h * u * f === 0) throw new Error("Failed to find free ports for profiler. Make sure to shutdown all instances of the editor first.");
            const d = Et(k0(), "prof");
            je(e, `--inspect-brk=${h}`), je(e, `--remote-debugging-port=${u}`), je(e, `--inspect-brk-extensions=${f}`), je(e, "--prof-startup-prefix", d), je(e, "--no-cached-data"), nt(d, e.slice(-6).join("|")), s.push(async (m)=>{
                const k = (x)=>x.find((O)=>O.webSocketDebuggerUrl ? O.type === "page" ? O.url.indexOf("bootstrap/index.html") > 0 : !0 : !1), D = async (x, O, Z)=>{
                    const C = (await import("chrome-remote-interface")).default;
                    let _;
                    for(let T = 0; T < O; T++)try {
                        return await C({
                            host: c,
                            port: x,
                            local: !0,
                            target: (I)=>{
                                const A = Z(I);
                                if (!A) throw Object.assign(new Error("no target"), {
                                    code: "ECONNREFUSED"
                                });
                                return A;
                            }
                        });
                    } catch (I) {
                        _ = I, await new Promise((A)=>setTimeout(A, 50));
                    }
                    throw _ instanceof Error ? _ : new Error("failed to connect");
                };
                class P {
                    static async start(O, Z, C) {
                        let _;
                        try {
                            _ = await D(C.port, C.tries ?? 10, C.target ?? k), await _.Runtime.runIfWaitingForDebugger(), await _.Profiler.enable(), await _.Profiler.setSamplingInterval({
                                interval: 100
                            }), await _.Profiler.start();
                        } catch  {
                            console.error(`FAILED to start profiling for '${O}' on port '${C.port}'`), _ && (await _.close().catch(()=>{}), _ = void 0);
                        }
                        return {
                            async stop () {
                                if (!_) return;
                                let T;
                                try {
                                    T = (await _.Profiler.stop()).profile;
                                } finally{
                                    await _.close().catch(()=>{});
                                }
                                let I = "";
                                process.env.VSCODE_DEV || (T = $1.rewriteAbsolutePaths(T, "piiRemoved"), I = ".txt"), nt(`${Z}.${O}.cpuprofile${I}`, JSON.stringify(T, void 0, 4));
                            }
                        };
                    }
                }
                try {
                    const x = P.start("main", d, {
                        port: h
                    }), O = P.start("extHost", d, {
                        port: f,
                        tries: 300
                    }), Z = P.start("renderer", d, {
                        port: u,
                        tries: 200,
                        target: function(I) {
                            return I.filter((A)=>A.webSocketDebuggerUrl ? A.type === "page" ? A.url.indexOf("workbench/workbench.html") > 0 || A.url.indexOf("workbench/workbench-dev.html") > 0 : !0 : !1)[0];
                        }
                    }), C = await x, _ = await O, T = await Z;
                    await Zi(d), await C.stop(), await T.stop(), await _.stop(), nt(d, "");
                } catch  {
                    console.error("Failed to profile startup. Make sure to quit Code first.");
                }
            });
        }
        const o = {
            detached: !0,
            env: r
        };
        t.verbose || (o.stdio = "ignore");
        let l;
        if (!xe) !t.verbose && t.status && (o.stdio = [
            "ignore",
            "pipe",
            "ignore"
        ]), l = pr(process.execPath, e.slice(2), o);
        else {
            const c = [
                "-n",
                "-g"
            ];
            if (c.push("-a", process.execPath), t.verbose || t.status) {
                c.push("--wait-apps");
                for (const h of t.verbose ? [
                    "stdout",
                    "stderr"
                ] : [
                    "stdout"
                ]){
                    const u = Et(P0(), `code-${h}`);
                    nt(u, ""), c.push(`--${h}`, u), s.push(async (f)=>{
                        try {
                            const d = h === "stdout" ? process.stdout : process.stderr, m = new it;
                            f.on("close", ()=>{
                                setTimeout(()=>m.dispose(!0), 200);
                            }), await Y2(u, (k)=>d.write(k), ()=>{}, m.token);
                        } finally{
                            mo(u);
                        }
                    });
                }
            }
            for(const h in r)h !== "_" && (c.push("--env"), c.push(`${h}=${r[h]}`));
            if (c.push("--args", ...e.slice(2)), r.VSCODE_DEV) {
                const u = c.indexOf(".");
                u !== -1 && (c[u] = Qr("."));
            }
            l = pr("open", c, {
                ...o,
                env: {}
            });
        }
        return Promise.all(s.map((c)=>c(l)));
    }
}
function _o() {
    return Ne(Mi.asFileUri("").fsPath);
}
function yo(e) {
    setTimeout(()=>process.exit(e), 0);
}
export { $l, Bl, C0, D0, E0, Et, Fl, Gl, Jl, Kl, L1, Ln, Ml, Oa, On, Ql, R1, Rn, Ul, Un, Vl, Wl, Wn, Xl, Y2, Yl, Ze, Zi, Zl, _0, _l, _o, ao, c0, cl, cr, d0, dl, e0, el, f0, ge, gl, go, h0, hl, hr, il, io, je, jl, jn, ll, lr, ml, n0, nl, no, nt, o0, on, pl, ql, qn, r0, rl, ro, s0, sl, so, t0, tl, to, u0, ul, uo, v1, w1, ya, yo, zl };
var __wakaru_T0_initialized = false;
export function T0() {
if (__wakaru_T0_initialized) return;
__wakaru_T0_initialized = true;
"use strict";
w(), Br(), le(), X(), va(), y1(), E2(), Z2(), $n(), fl(), i0(), p0(), y0(), v0(), Zt(), Je(), b0(), tr(), Hr(), S0(), Ye(), St(), go(process.argv).then(()=>yo(typeof process.exitCode == "number" ? process.exitCode : 0)).then(null, (e)=>{
    console.error(e.message || e.stack || e), yo(1);
});

}
