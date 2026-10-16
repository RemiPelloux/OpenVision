import * as A1 from "node:fs";
import * as B7 from "node:crypto";
import * as Bc from "node:os";
import { homedir as C5 } from "node:os";
import { join as Ci } from "node:path";
import { spawn as Hc } from "node:child_process";
import { sep as Ic } from "node:path";
import { isAbsolute as Jb } from "node:path";
import { isAbsolute as L5 } from "node:path";
import { constants as M1 } from "node:fs";
import * as Qn from "node:path";
import * as Si from "node:path";
import { of as Sp } from "rxjs";
import { createHash as VS } from "crypto";
import { dirname as Xb } from "node:path";
import { delimiter as Yp } from "node:path";
import { dirname as _7 } from "node:path";
import { relative as a1 } from "node:path";
import { merge as ab } from "rxjs";
import bi from "node:path";
import { Subscription as bp } from "rxjs";
import { Observable as cb } from "rxjs";
import { join as ce } from "node:path";
import { readFile as cw } from "node:fs/promises";
import { reduce as db } from "rxjs/operators";
import { stat as g7 } from "node:fs/promises";
import { retry as hb } from "rxjs/operators";
import { lstatSync as i1 } from "node:fs";
import { resolve as i7 } from "node:path";
import { resolve as ip } from "node:path";
import { realpathSync as j7 } from "node:fs";
import kc from "node:os";
import { timer as lb } from "rxjs";
import { resolve as m7 } from "node:path";
import * as mr from "node:path";
import { lstatSync as n7 } from "node:fs";
import { statSync as o1 } from "node:fs";
import { spawn as ob } from "node:child_process";
import { existsSync as p7 } from "node:fs";
import { spawn as p9 } from "node:child_process";
import { execFileSync as q7 } from "node:child_process";
import * as qr from "node:fs";
import { tmpdir as r1 } from "node:os";
import { randomBytes as r7 } from "node:crypto";
import { mkdirSync as s7 } from "node:fs";
import { map as ub } from "rxjs/operators";
import { accessSync as x1 } from "node:fs";
import { fileURLToPath as x5 } from "node:url";
import * as yi from "node:fs";
import { AsyncSubject as yp } from "rxjs";
import * as z7 from "node:os";
import { dm } from "./abort-signal.ts";
import { Jt, Rl, T_, at } from "./active-activities.ts";
import { Pt, _r, cl, eg, fr, hr, vr } from "./bash.ts";
import { s1 } from "./cache-env.ts";
import { Ne } from "./connection-fsm.ts";
import { Op } from "./core.ts";
import { H1, es, rl } from "./dump_bash_state.ts";
import { cs, fl, pg } from "./dump_zsh_state.ts";
import { _l, gl } from "./dump_zsh_state_light.ts";
import { e1 } from "./env-filter.ts";
import { Vn, np } from "./find-executable.ts";
import { zr } from "./http-logging.ts";
import { ds, kg } from "./index_4.ts";
import { Pm } from "./lazy-auth-hosts.ts";
import { as } from "./lazy.ts";
import { pf } from "./logger.ts";
import { ps } from "./mcp-focus-retry-cooldown.ts";
import { Gg, Kg, Vg, Yg, jg, qg } from "./mcp-fsm-timing-config.ts";
import { Xg } from "./mcp-inline-reconnect-cooldown.ts";
import { Sm, bm, ro, wm, ym } from "./mcp-oauth-refresh-policy.ts";
import { a_, c_ } from "./mcp-reconnect-runtime-policy.ts";
import { hs } from "./mcp-sandbox-policy-fingerprint.ts";
import { Bi } from "./mcp-sandbox-policy.ts";
import { yl } from "./mcp-sandbox-unavailable-error.ts";
import { d_ } from "./mcp-session-404-tombstone-config.ts";
import { S_, b_, v_, w_, y_ } from "./mcp-tool-call-timeout.ts";
import { $h, Dh, Dr, Fh, Hn, Mh, Nh, Nr, Ra, Uh, di, li, ui } from "./mcp-url-utils.ts";
import { Ma, Oa, fi } from "./mcp.ts";
import { hl } from "./naive.ts";
import { Cl, H_, Ol, Vi, on } from "./oauth-errors.ts";
import { Of, mi } from "./oauth-logging.ts";
import { Ml, lm } from "./observability.ts";
import { ql } from "./origin-mcp-cursor-auth.ts";
import { bg, wg } from "./output-suppression.ts";
import { Bf, Gf, Kf, Vf, Wf, Yf, jf, qf, zf } from "./permanent-grant-failure.ts";
import { V1, Y1 } from "./policy-merge.ts";
import { $i, ul } from "./powershell.ts";
import { Ll, V_, X_, Xi, Y_, Yi, an, j_, q_ } from "./reconnect-manager.ts";
import { _m, hn } from "./retry-after-cooldown.ts";
import { lc } from "./safe-spawn-cwd.ts";
import { Ni, Yc } from "./sandbox.ts";
import { Nc } from "./seatbelt.ts";
import { jm } from "./snapshot-metrics.ts";
import { Kt } from "./spawn-promise.ts";
import { Bm, ao } from "./transport-factory.ts";
import { It, Xc } from "./types.ts";
import { gr } from "./workload-spawn.ts";
import { vg, yg } from "./zsh-light.ts";
import { gg, pl } from "./zsh.ts";
function Th(e) {
    const t = e.split(".");
    if (t.length !== 4) return;
    let r = li;
    for (const n of t){
        if (!/^\d{1,3}$/.test(n)) return;
        const s = Number(n);
        if (!Number.isInteger(s) || s < 0 || s > 255) return;
        r = r << Mh | BigInt(s);
    }
    return {
        version: 4,
        value: r
    };
}
function Ea(e) {
    if (e.length === 0) return [];
    const t = [], r = e.split(":");
    for(let n = 0; n < r.length; n++){
        const s = r[n];
        if (s.length === 0) return;
        if (s.includes(".")) {
            if (n !== r.length - 1) return;
            const i = Th(s);
            if (!i) return;
            t.push(Number(i.value >> ui & Ra)), t.push(Number(i.value & Ra));
            continue;
        }
        if (!/^[0-9a-f]{1,4}$/i.test(s)) return;
        t.push(Number.parseInt(s, 16));
    }
    return t;
}
function j2(e) {
    const t = Et(e);
    if (t.length === 0 || t.includes(":::")) return;
    const r = t.indexOf("::");
    if (r === -1) {
        const l = Ea(t);
        return !l || l.length !== 8 ? void 0 : {
            version: 6,
            value: l.reduce((u, d)=>u << ui | BigInt(d), li)
        };
    }
    if (t.indexOf("::", r + 1) !== -1) return;
    const n = t.slice(0, r), s = t.slice(r + 2), i = Ea(n), o = Ea(s);
    if (!i || !o) return;
    const a = i.length + o.length;
    return a > 7 ? void 0 : {
        version: 6,
        value: [
            ...i,
            ...new Array(8 - a).fill(0),
            ...o
        ].reduce((l, u)=>l << ui | BigInt(u), li)
    };
}
function kh(e) {
    return Th(e) ?? j2(e);
}
function V2(e) {
    const t = Et(e);
    if (t === "*") return {
        kind: "matchAll"
    };
    if (t.includes("/")) {
        const r = t.lastIndexOf("/");
        if (r <= 0 || r === t.length - 1) return {
            kind: "invalidCidr"
        };
        const n = kh(t.slice(0, r));
        if (!n) return {
            kind: "invalidCidr"
        };
        const s = Number(t.slice(r + 1)), i = n.version === 4 ? 32 : 128;
        if (!Number.isInteger(s) || s < 0 || s > i) return {
            kind: "invalidCidr"
        };
        const o = BigInt(i - s);
        return {
            kind: "cidr",
            version: n.version,
            shift: o,
            shiftedNetwork: n.value >> o
        };
    }
    return t.startsWith("*.") ? {
        kind: "subdomainOrBase",
        suffix: t.slice(2)
    } : {
        kind: "exact",
        value: t
    };
}
function Y2(e) {
    const t = Hn.get(e);
    if (t) return t;
    Hn.size >= di && Hn.clear();
    const r = V2(e);
    return Hn.set(e, r), r;
}
function X2(e) {
    if (Dr.has(e)) return Dr.get(e);
    Dr.size >= di && Dr.clear();
    const t = kh(e);
    return Dr.set(e, t), t;
}
function J2(e, t) {
    switch(t.kind){
        case "matchAll":
            return !0;
        case "invalidCidr":
            return !1;
        case "cidr":
            {
                const r = X2(e);
                return r !== void 0 && r.version === t.version && r.value >> t.shift === t.shiftedNetwork;
            }
        case "subdomainOrBase":
            return e === t.suffix || e.endsWith(`.${t.suffix}`);
        case "exact":
            return e === t.value;
    }
}
function Z2(e, t) {
    return J2(Et(e), Y2(t));
}
export function wt(e) {
    try {
        const t = new URL(e), r = new URL(t.pathname, t.origin);
        return r.search = t.search, r.pathname.endsWith("/") && r.pathname.length > 1 && (r.pathname = r.pathname.slice(0, -1)), r.pathname === "/" ? r.origin + r.search : r.toString();
    } catch  {
        return e.toLowerCase().trim();
    }
}
function Ih(e) {
    return {
        transportServerUrl: e,
        canonicalServerUrl: wt(e)
    };
}
function Q2(e) {
    try {
        return new URL(wt(e)).hostname.toLowerCase();
    } catch  {
        return;
    }
}
function eS(e) {
    const t = e.indexOf(":");
    if (t === -1) return e;
    const r = e.slice(t + 1);
    return /^\d+$/.test(r) ? e.slice(0, t) : e;
}
function tS(e) {
    return /\s/.test(e);
}
function Ph(e) {
    const t = Et(e);
    return t.length > 0 && t.length <= 253 && Dh.test(t);
}
function rS(e) {
    const t = Et(e);
    if (!$h.test(t)) return !1;
    try {
        return new URL(`https://[${t}]`), !0;
    } catch  {
        return !1;
    }
}
function Oh(e) {
    const t = Et(e);
    return Uh.test(t) || rS(t);
}
function Ch(e, t) {
    return t === "" || e === "http:" && t === "80" || e === "https:" && t === "443";
}
function nS(e) {
    const t = Et(e);
    if (!Fh.test(t)) return !1;
    const [r] = t.split("/");
    return r !== void 0 && Z2(r, t);
}
function sS(e) {
    const t = e.toLowerCase();
    return !t.includes("*") && (Ph(t) || Oh(t));
}
function iS(e) {
    try {
        const t = new URL(e);
        return t.protocol !== "http:" && t.protocol !== "https:" || t.hostname.length === 0 || t.username.length > 0 || t.password.length > 0 || t.hash !== "" ? !1 : sS(t.hostname);
    } catch  {
        return !1;
    }
}
function Lh(e) {
    const t = new URL(e.pathname || "/", e.origin);
    if (t.search = e.search, t.pathname.endsWith("/") && t.pathname.length > 1 && (t.pathname = t.pathname.slice(0, -1)), t.pathname === "/" && t.search === "") {
        const i = e.protocol.toLowerCase(), o = e.hostname.toLowerCase();
        let a = `${i}//${o}`;
        return Ch(i, e.port) || (a += `:${e.port}`), a;
    }
    const r = e.protocol.toLowerCase(), n = e.hostname.toLowerCase();
    let s = `${r}//${n}`;
    return Ch(r, e.port) || (s += `:${e.port}`), `${s}${t.pathname}${t.search}`;
}
function ci(e) {
    if (e.includes("://")) return iS(e);
    const t = Et(e);
    return t === "*" || Nh.test(t) ? !0 : t.includes("/") ? nS(t) : Ph(t) || Oh(t);
}
function Aa(e) {
    if (Nr.has(e)) return Nr.get(e);
    Nr.size >= di && Nr.clear();
    const t = oS(e);
    return Nr.set(e, t), t;
}
function oS(e) {
    const t = e.trim();
    if (t.length === 0) return;
    const r = t.lastIndexOf("/");
    if (!t.includes("://") && r > 0 && /^\d+$/.test(t.slice(r + 1).trim())) {
        const o = Et(t.slice(0, r)), a = t.slice(r + 1).trim(), c = `${o}/${a}`;
        return ci(c) ? c : void 0;
    }
    if (tS(t) || t.includes("#") || t.includes("@")) return;
    const n = t.indexOf("://");
    if (n !== -1) {
        const o = t.slice(0, n).toLowerCase();
        if (o !== "http" && o !== "https") return;
        try {
            const a = new URL(t);
            if (a.hostname.length === 0 || a.username.length > 0 || a.password.length > 0) return;
            const c = a.pathname !== "/" && a.pathname !== "", l = a.search !== "";
            if (a.hostname.includes("*")) return;
            if (!c && !l) {
                const u = Lh(a);
                return ci(u) ? u : void 0;
            } else {
                const u = Lh(a);
                return ci(u) ? u : void 0;
            }
        } catch  {
            return;
        }
    } else if (t.includes("/")) return;
    const s = t.trim().toLowerCase(), i = eS(s);
    if (!(i.length === 0 || !ci(i)) && !(i !== s && i === "*")) return i;
}
function aS(e) {
    return (e ?? []).flatMap((t)=>{
        const r = Aa(t);
        return r === void 0 ? [] : [
            r
        ];
    });
}
function Et(e) {
    const t = e.trim().toLowerCase();
    return t.startsWith("[") && t.endsWith("]") ? t.slice(1, -1) : t;
}
function cS(e) {
    return aS(e.mcpNetworkAllowlist);
}
function xh(e) {
    if (e?.enabled === !0 && e.mcpNetworkMode !== "no_sandbox") return e;
}
function Ta(e) {
    return e.identifier === Oa.identifier && e.serverUrl === Oa.serverUrl;
}
function uS(e) {
    return Ma.get(e.toLowerCase());
}
export function Ia(e) {
    if (e === void 0) return;
    let t;
    try {
        t = new URL(e).hostname;
    } catch  {
        return;
    }
    return uS(t);
}
export function Ur(e) {
    return ff?.getLogger(e) ?? pf;
}
export function za(e) {
    return Object.fromEntries(Object.entries(e).filter(([, t])=>t !== void 0));
}
function HS(e) {
    try {
        const t = new URL(e);
        return {
            host: t.host,
            origin: t.origin,
            pathname: t.pathname
        };
    } catch  {
        return {
            host: null,
            origin: null,
            pathname: null
        };
    }
}
export function Gn(e, t) {
    const r = HS(e), n = t?.includePath !== !1;
    return {
        host: r.host,
        origin: r.origin,
        path: n ? r.pathname : null
    };
}
export function _f(e, t) {
    return Gn(e, t);
}
export function Kn(e) {
    if (e) return VS("sha256").update(e).digest("hex").slice(0, 12);
}
function YS(e) {
    const t = e.message?.toLowerCase(), r = e.code?.toLowerCase();
    if (t?.includes("timed out") || t?.includes("timeout") || t?.includes("etimedout") || r === "etimedout") return "timeout";
    if (t?.includes("enotfound") || t?.includes("eai_again") || t?.includes("dns") || r === "enotfound" || r === "eai_again") return "dns";
    if (t?.includes("certificate") || t?.includes("tls") || t?.includes("ssl")) return "tls";
    if (t?.includes("econnreset") || t?.includes("connection reset") || r === "econnreset") return "connection_reset";
    if (t?.includes("econnrefused") || t?.includes("connection refused") || r === "econnrefused") return "connection_refused";
}
function Gt(e, t) {
    let r = e;
    for (const n of t){
        if (typeof r != "object" || r === null || !(n in r)) return;
        r = r[n];
    }
    return r;
}
function Rf(e, t) {
    for (const r of t)if (typeof Gt(e, r.split(".")) == "string") return Gt(e, r.split("."));
}
function Tf(e) {
    if (!e || typeof e != "object") return;
    const t = e.errorCode;
    return typeof t == "string" ? t : void 0;
}
function XS(e, t) {
    for (const r of t){
        const n = Gt(e, r.split("."));
        if (typeof n == "number" && Number.isFinite(n)) return n;
    }
}
function kf(e) {
    if (!e) return;
    const t = e.match(/\(HTTP (\d+)\)|Non-200 status code \((\d+)\)|\bHTTP\s+(\d{3})\b/i), r = t?.[1] ?? t?.[2] ?? t?.[3];
    if (!r) return;
    const n = Number.parseInt(r, 10);
    return Number.isNaN(n) ? void 0 : n;
}
function qa(e) {
    if (e instanceof Error) {
        const t = e.message;
        return t && t !== e.name ? Br(t) : void 0;
    }
    if (e != null) {
        const t = String(e);
        return t ? Br(t) : void 0;
    }
}
function If(e) {
    if (!(!e || typeof e != "object")) return e.cause;
}
function JS(e, t = 4) {
    const r = [];
    let n = e;
    for(let s = 0; s < t && n != null; s++){
        if (n instanceof Error) {
            const i = qa(n);
            r.push(i ? `${n.name}: ${i}` : n.name), n = If(n);
            continue;
        }
        r.push(Br(String(n)));
        break;
    }
    return r.length > 1 ? r.join(" > ") : void 0;
}
function ZS(e) {
    const t = e.toLowerCase();
    return t === "code" || t === "authorization" || t.includes("token") || t.includes("secret") || t.includes("password") || t.includes("assertion") || t.includes("verifier") || t.includes("challenge") || Of.test(t);
}
function ja(e) {
    return e.replace(/((?:access_token|refresh_token|id_token|client_secret|authorization|code|password|assertion|token|secret)[^:=\r\n]{0,32}[:=]\s*["']?)([^"',\s&}]+)/gi, `$1${mi}`).replace(/(\bBearer\s+)([A-Za-z0-9\-._~+/]+=*)/gi, `$1${mi}`);
}
function Va(e, t = 256) {
    return e.length > t ? `${e.slice(0, Math.max(0, t - 3))}...` : e;
}
function Br(e, t) {
    return Va(ja(e), t?.maxLength);
}
function QS(e) {
    return Pf(e);
}
function Pf(e) {
    if (typeof e == "string") return Va(ja(e));
    if (e !== void 0) try {
        const t = JSON.stringify(e, (r, n)=>r && ZS(r) ? mi : typeof n == "string" ? ja(n) : n);
        return t ? Va(t) : void 0;
    } catch  {
        return;
    }
}
function e5(e) {
    if (!e || typeof e != "object") return;
    const t = [
        e.response,
        e.cause?.response
    ];
    for (const r of t)if (r && typeof r == "object" && "status" in r && typeof r.status == "number" && "headers" in r && typeof r.headers?.get == "function") return r;
}
export function Ya(e) {
    const t = If(e), r = e instanceof Error ? e.name : e != null ? typeof e : void 0, n = t instanceof Error ? t.name : void 0, s = qa(t), i = qa(e) ?? s, o = Rf(e, [
        "code",
        "cause.code"
    ]), a = Tf(e) ?? Tf(t) ?? Rf(e, [
        "errorCode",
        "error",
        "cause.errorCode",
        "cause.error",
        "body.error",
        "response.body.error"
    ]), c = XS(e, [
        "status",
        "statusCode",
        "response.status",
        "response.statusCode",
        "cause.status",
        "cause.statusCode",
        "cause.response.status",
        "cause.response.statusCode"
    ]) ?? kf(i) ?? kf(s), l = Pf(Gt(e, [
        "response",
        "body"
    ]) ?? Gt(e, [
        "body"
    ]) ?? Gt(e, [
        "data"
    ]) ?? Gt(e, [
        "cause",
        "body"
    ]) ?? Gt(e, [
        "cause",
        "response",
        "body"
    ])), u = YS({
        message: i,
        code: o
    }), d = a ? "oauth_error" : u ? "auth_transport_error" : i ? "generic_error" : void 0;
    return za({
        errorName: r,
        errorMessage: i,
        errorType: e != null ? typeof e : void 0,
        httpStatus: c,
        oauthErrorCode: a,
        errorResponseSummary: l,
        networkClassification: u,
        causeName: n,
        causeMessage: s,
        causeChain: JS(e),
        sdkErrorKind: d
    });
}
function Cf(e) {
    return typeof e == "object" && e !== null && "url" in e && typeof e.url == "string";
}
function Lf(e) {
    return typeof e == "string" ? e : e instanceof URL ? e.toString() : e.url;
}
function t5(e, t) {
    const r = new Headers(Cf(e) ? e.headers : void 0);
    return new Headers(t?.headers).forEach((s, i)=>{
        r.set(i, s);
    }), r;
}
function xf(e) {
    const t = [];
    return e.forEach((r, n)=>{
        t.push(n);
    }), t.sort();
}
function At(e) {
    if (e === null) return null;
    const t = Number.parseInt(e, 10);
    return Number.isNaN(t) ? null : t;
}
function r5(e, t) {
    if (e == null) return {
        kind: "none",
        bytes: 0,
        contentLength: At(t.get("content-length"))
    };
    if (typeof e == "string") {
        const r = new TextEncoder().encode(e).length;
        return {
            kind: "text",
            bytes: r,
            contentLength: At(t.get("content-length")) ?? r
        };
    }
    if (e instanceof URLSearchParams) {
        const r = e.toString(), n = new TextEncoder().encode(r).length;
        return {
            kind: "text",
            bytes: n,
            contentLength: At(t.get("content-length")) ?? n
        };
    }
    return e instanceof Blob ? {
        kind: "blob",
        bytes: e.size,
        contentLength: At(t.get("content-length")) ?? e.size
    } : e instanceof ArrayBuffer ? {
        kind: "binary",
        bytes: e.byteLength,
        contentLength: At(t.get("content-length")) ?? e.byteLength
    } : ArrayBuffer.isView(e) ? {
        kind: "binary",
        bytes: e.byteLength,
        contentLength: At(t.get("content-length")) ?? e.byteLength
    } : typeof e == "object" && e !== null && ("getReader" in e || Symbol.asyncIterator in e) ? {
        kind: "stream",
        bytes: null,
        contentLength: At(t.get("content-length"))
    } : {
        kind: "unknown",
        bytes: null,
        contentLength: At(t.get("content-length"))
    };
}
function n5(e, t) {
    for (const r of e.split("&")){
        const n = r.indexOf("="), s = n >= 0 ? r.slice(0, n) : r;
        let i;
        try {
            i = decodeURIComponent(s.replaceAll("+", " "));
        } catch  {
            return;
        }
        if (i !== t) continue;
        const o = n >= 0 ? r.slice(n + 1) : "";
        try {
            return decodeURIComponent(o.replaceAll("+", " "));
        } catch  {
            return;
        }
    }
}
function s5(e) {
    switch(e){
        case "authorization_code":
        case "refresh_token":
        case "client_credentials":
        case "urn:ietf:params:oauth:grant-type:jwt-bearer":
        case "urn:ietf:params:oauth:grant-type:token-exchange":
            return e;
        default:
            return "other";
    }
}
function Ja(e, t) {
    if (e === null || !e.toLowerCase().startsWith("application/x-www-form-urlencoded")) return;
    const r = typeof t == "string" ? n5(t, "grant_type") : t instanceof URLSearchParams ? t.get("grant_type") ?? void 0 : void 0;
    return r ? s5(r) : void 0;
}
function Za(e) {
    const { input: t, init: r } = e, n = Lf(t), s = Gn(n), i = t5(t, r), o = xf(i), a = i.get("content-type"), c = Kn(i.get("mcp-session-id") ?? void 0), l = i.get("authorization"), u = l ? l.split(/\s+/, 1)[0] ?? null : null;
    return {
        method: (r?.method ?? (Cf(t) ? t.method : void 0) ?? "GET").toUpperCase(),
        url: s,
        headers: {
            names: o,
            count: o.length
        },
        contentType: a,
        body: r5(r?.body, i),
        sessionIdHash: c ?? null,
        authorizationScheme: u
    };
}
function Mf(e, t) {
    const r = xf(e.headers), n = At(e.headers.get("content-length"));
    return {
        status: e.status,
        ok: e.ok,
        headers: {
            names: r,
            count: r.length
        },
        contentType: e.headers.get("content-type"),
        body: {
            kind: e.body === null ? "none" : "stream",
            bytes: e.body === null ? 0 : n,
            contentLength: n,
            ...t !== void 0 ? {
                errorSummary: t
            } : {}
        },
        sessionIdHash: Kn(e.headers.get("mcp-session-id") ?? void 0) ?? null,
        wwwAuthenticateHash: Kn(e.headers.get("www-authenticate") ?? void 0) ?? null,
        mcpProtocolVersion: e.headers.get("mcp-protocol-version") ?? null,
        requestId: e.headers.get("x-request-id") ?? null
    };
}
function i5(e) {
    const t = {};
    return e.errorName !== void 0 && (t.name = e.errorName), e.errorMessage !== void 0 && (t.message = e.errorMessage), e.errorType !== void 0 && (t.type = e.errorType), e.oauthErrorCode !== void 0 && (t.oauthErrorCode = e.oauthErrorCode), e.errorResponseSummary !== void 0 && (t.responseSummary = e.errorResponseSummary), e.networkClassification !== void 0 && (t.networkClassification = e.networkClassification), e.sdkErrorKind !== void 0 && (t.sdkErrorKind = e.sdkErrorKind), t;
}
function o5(e) {
    const { input: t, init: r, response: n, durationMs: s, metadata: i, responseErrorSummary: o, oauthTokenErrorBodySummary: a } = e, c = Za({
        input: t,
        init: r
    }), l = Ja(c.contentType, r?.body);
    return {
        event: "mcp_http_exchange",
        outcome: n.ok ? "success" : "http_error",
        durationMs: s,
        cursorMcp: {
            transport: {
                ...i,
                request: c,
                response: Mf(n, o),
                ...l !== void 0 ? {
                    oauth: {
                        grantType: l
                    }
                } : {},
                ...a !== void 0 ? {
                    oauthTokenErrorBodySummary: a
                } : {}
            }
        }
    };
}
function Df(e, t) {
    const r = Za({
        input: e,
        init: t
    });
    if (Ja(r.contentType, t?.body) !== void 0) return !0;
    const n = r.url.path?.toLowerCase() ?? "";
    return n.endsWith("/token") || n.includes("/oauth/token") || n.includes("/connect/token");
}
async function Nf(e, t) {
    try {
        const r = await e.clone().text();
        return r.length > t ? r.slice(0, t) : r;
    } catch  {
        return;
    }
}
function a5(e) {
    const t = Gn(Lf(e.input)).path;
    if (!f5(t)) return Br(e.rawText, {
        maxLength: zr
    });
    try {
        const r = JSON.parse(e.rawText);
        return typeof r == "object" && r !== null ? p5(r) : void 0;
    } catch  {
        return;
    }
}
async function c5(e) {
    if (!Df(e.input, e.init)) return;
    const t = await Nf(e.response, zr);
    if (t !== void 0) try {
        return QS(JSON.parse(t));
    } catch  {
        return Br(t, {
            maxLength: zr
        });
    }
}
async function Uf(e) {
    const t = await g5(e.input, e.response), r = t === void 0 ? await c5({
        input: e.input,
        response: e.response,
        init: e.init
    }) : void 0;
    return {
        responseErrorSummary: t,
        oauthTokenErrorBodySummary: r
    };
}
function l5(e) {
    const { input: t, init: r, error: n, durationMs: s, metadata: i, responseFromError: o, responseErrorSummary: a, oauthTokenErrorBodySummary: c } = e, l = Ya(n), u = Za({
        input: t,
        init: r
    }), d = Ja(u.contentType, r?.body), f = o !== void 0 ? Mf(o, a) : {
        status: l.httpStatus ?? null,
        ok: null,
        headers: {
            names: [],
            count: 0
        },
        contentType: null,
        body: {
            kind: "none",
            bytes: null,
            contentLength: null,
            ...a !== void 0 ? {
                errorSummary: a
            } : {}
        },
        requestId: null,
        sessionIdHash: null,
        wwwAuthenticateHash: null,
        mcpProtocolVersion: null
    };
    return {
        event: "mcp_http_exchange",
        outcome: "error",
        durationMs: s,
        cursorMcp: {
            transport: {
                ...i,
                request: u,
                response: f,
                ...d !== void 0 ? {
                    oauth: {
                        grantType: d
                    }
                } : {},
                ...c !== void 0 ? {
                    oauthTokenErrorBodySummary: c
                } : {},
                error: i5(l)
            }
        }
    };
}
function u5(e) {
    const { logger: t, response: r } = e, n = o5(e);
    r.ok ? t.info?.("MCP HTTP exchange completed", n) : d5({
        response: r,
        request: n.cursorMcp.transport.request,
        input: e.input,
        init: e.init
    }) ? t.debug?.("MCP HTTP exchange completed", n) : t.warn?.("MCP HTTP exchange completed", n);
}
function d5(e) {
    return e.response.status === 401 && e.request.authorizationScheme === null && e.response.headers.has("www-authenticate") && !Df(e.input, e.init);
}
function h5(e) {
    const { logger: t } = e;
    t.warn?.("MCP HTTP exchange failed", l5(e));
}
function f5(e) {
    return e === "/mcp" || e?.endsWith("/mcp") === !0;
}
function p5(e) {
    const t = e.error;
    if (typeof t == "string") return JSON.stringify({
        error: t
    });
    if (typeof t != "object" || t === null) return;
    const r = t, n = typeof r.code == "number" || typeof r.code == "string" ? r.code : void 0, s = typeof r.message == "string" ? Br(r.message, {
        maxLength: zr
    }) : void 0;
    if (!(n === void 0 && s === void 0)) return JSON.stringify({
        ...n !== void 0 ? {
            code: n
        } : {},
        ...s !== void 0 ? {
            message: s
        } : {}
    });
}
async function g5(e, t) {
    try {
        if (t.ok) return;
        const r = t.headers.get("content-type")?.toLowerCase() ?? "";
        if (!r.includes("json") && !r.includes("text")) return;
        const n = await Nf(t, zr);
        return n === void 0 ? void 0 : a5({
            input: e,
            rawText: n
        });
    } catch  {
        return;
    }
}
function $f(e, t, r) {
    try {
        e();
    } catch  {
        t.warn?.("MCP HTTP exchange logging failed", {
            event: "mcp_http_exchange_logging_failure",
            phase: r
        });
    }
}
function _5(e) {
    const { fetch: t, logger: r, metadata: n, logSuccessfulExchanges: s = !0 } = e;
    return async (i, o)=>{
        const a = Date.now();
        try {
            const c = await t(i, o), { responseErrorSummary: l, oauthTokenErrorBodySummary: u } = c.ok ? {} : await Uf({
                input: i,
                init: o,
                response: c
            });
            return (s || !c.ok) && $f(()=>{
                u5({
                    logger: r,
                    input: i,
                    init: o,
                    response: c,
                    durationMs: Date.now() - a,
                    metadata: n,
                    responseErrorSummary: l,
                    oauthTokenErrorBodySummary: u
                });
            }, r, "success"), c;
        } catch (c) {
            const l = e5(c), { responseErrorSummary: u, oauthTokenErrorBodySummary: d } = l ? await Uf({
                input: i,
                init: o,
                response: l
            }) : {};
            throw $f(()=>{
                h5({
                    logger: r,
                    input: i,
                    init: o,
                    error: c,
                    durationMs: Date.now() - a,
                    metadata: n,
                    responseFromError: l,
                    responseErrorSummary: u,
                    oauthTokenErrorBodySummary: d
                });
            }, r, "failure"), c;
        }
    };
}
function m5(e) {
    if (e instanceof Error || e !== null && typeof e == "object") return e;
}
function v5(e) {
    return typeof e == "string" ? e.toLowerCase().trim() : "";
}
function y5(e) {
    const { name: t, message: r } = e;
    if (t !== "ServerError") return;
    const n = qf.exec(r)?.[1];
    if (n === void 0) return;
    const s = jf.find(({ needle: i })=>n.includes(i));
    return s === void 0 ? void 0 : {
        reason: s.reason,
        matchedMessage: s.needle
    };
}
function S5(e) {
    const t = /^aadsts(\d+)\b/.exec(e)?.[1];
    return t !== void 0 && Wf.has(t) ? {
        reason: "admin_blocked",
        matchedMessage: `aadsts${t}`
    } : void 0;
}
function b5(e) {
    const { code: t, message: r } = e;
    return t === "unauthorized_user" || t === "access_denied" && r === Gf ? {
        reason: "user_access_revoked",
        matchedMessage: t
    } : void 0;
}
function w5(e) {
    const { code: t, message: r } = e;
    if (t !== void 0) return Bf.has(t) ? {
        reason: "admin_blocked",
        matchedMessage: t
    } : zf.has(t) ? S5(r) : e.allowNonRfcDeadGrant ? b5({
        code: t,
        message: r
    }) : void 0;
}
function E5(e) {
    const t = Vf.find(({ needle: r })=>e.includes(r));
    return t === void 0 ? void 0 : {
        reason: t.reason,
        matchedMessage: e
    };
}
function A5(e) {
    return Yf.some((t)=>e.includes(t)) ? {
        reason: "invalid_grant_generic",
        matchedMessage: e
    } : void 0;
}
export function Hf(e, t) {
    const r = m5(e);
    if (r === void 0) return;
    const n = t ?? {}, s = v5(r.message), i = n.allowNonRfcDeadGrant === !0, o = w5({
        code: n.tokenEndpointErrorCode?.toLowerCase(),
        message: s,
        allowNonRfcDeadGrant: i
    });
    if (o !== void 0) return o;
    const a = typeof r.name == "string" ? r.name : "";
    return Kf.has(a) ? E5(s) ?? (n.allowInvalidGrantGeneric === !0 ? A5(s) : void 0) : i ? y5({
        name: a,
        message: s
    }) : void 0;
}
function rp(e) {
    try {
        return yi.statSync(e);
    } catch  {
        return null;
    }
}
function sc(e, t) {
    if (e.match(/[\\/]/)) return e;
    const r = t ? `${e}\0${t.source}\0${t.flags}` : e, n = Vn.get(r);
    if (n !== void 0) return n;
    const s = Si.join(".", e);
    if (rp(s)) return Vn.set(r, s), s;
    const i = process.env.PATH.split(np ? ";" : ":");
    for (const o of i){
        const a = Si.join(o, e);
        if (rp(a) && (!t || t.test(a))) return Vn.set(r, a), a;
    }
    return Vn.set(r, e), e;
}
export function Ke(e, t, r) {
    if (process.platform !== "win32") return {
        cmd: sc(e),
        args: t
    };
    if (!yi.existsSync(e)) {
        const n = [
            ".exe",
            ".bat",
            ".cmd",
            ".ps1"
        ], s = e.toLowerCase();
        if (n.some((i)=>s.endsWith(i))) {
            const i = sc(e, r);
            if (yi.existsSync(i)) return Ke(i, t, r);
        }
        for (const i of n){
            const o = sc(`${e}${i}`, r);
            if (yi.existsSync(o)) return Ke(o, t, r);
        }
    }
    if (e.match(/\.ps1$/i)) return {
        cmd: Si.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "PowerShell.exe"),
        args: [
            "-ExecutionPolicy",
            "Unrestricted",
            "-NoLogo",
            "-NonInteractive",
            "-File",
            e
        ].concat(t)
    };
    if (e.match(/\.(bat|cmd)$/i)) {
        const n = Si.join(process.env.SYSTEMROOT, "System32", "cmd.exe"), s = [
            "/C",
            e,
            ...t
        ];
        return {
            cmd: n,
            args: s
        };
    }
    return e.match(/\.(js)$/i) ? {
        cmd: process.execPath,
        args: [
            e
        ].concat(t)
    } : {
        cmd: e,
        args: t
    };
}
function M5(e) {
    return e.replace(/^~(?=$|\/|\\)/, C5());
}
function D5(e) {
    if (!e.startsWith("file://")) return e;
    try {
        return x5(e);
    } catch  {
        return e;
    }
}
function oc(e, t) {
    const r = M5(D5(e));
    return t && !L5(r) ? ip(t, r) : ip(r);
}
export function Ei(e) {
    const t = bi.resolve(e);
    return t === lc || t.startsWith(`${lc}/`);
}
function wp(e, t, r) {
    r = r ?? {};
    let s = new cb((i)=>{
        const { encoding: o, timeout: a, ...c } = r, { cmd: l, args: u } = Ke(e, t), d = c.stdin;
        d && (delete c.stdin, c.stdio ??= [
            "pipe",
            "pipe",
            "pipe"
        ]), c.stdio ??= [
            "ignore",
            "pipe",
            "pipe"
        ];
        const f = ob(l, u, c);
        r.processInfo && f.pid !== void 0 && (r.processInfo.pid = f.pid);
        let p = null;
        a && a > 0 && (p = setTimeout(()=>{
            f.killed || f.kill();
            const S = new Kt(`Process timed out after ${a}ms`, -1, l, u);
            i.error(S);
        }, a));
        const g = (S)=>(v)=>{
                if (v.length < 1) return;
                r.echoOutput && (S === "stdout" ? process.stdout : process.stderr).write(v);
                let b = "<< String sent back was too long >>";
                try {
                    typeof v == "string" ? b = v.toString() : b = v.toString(o || "utf8");
                } catch  {
                    b = `<< Lost chunk of process output for ${e} - length was ${v.length}>>`;
                }
                i.next({
                    source: S,
                    text: b
                });
            }, _ = new bp;
        if (d) if (f.stdin) {
            const S = f.stdin;
            _.add(d.subscribe({
                next: (v)=>S.write(v),
                error: i.error.bind(i),
                complete: ()=>S.end()
            }));
        } else i.error(new Error("opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"));
        let y = null, m = null, A = !1;
        return f.stdout ? (m = new yp, f.stdout.on("data", g("stdout")), f.stdout.on("close", ()=>{
            m.next(!0), m.complete();
        })) : m = Sp(!0), f.stderr ? (y = new yp, f.stderr.on("data", g("stderr")), f.stderr.on("close", ()=>{
            y.next(!0), y.complete();
        })) : y = Sp(!0), f.on("error", (S)=>{
            A = !0, p && clearTimeout(p), i.error(S);
        }), f.on("close", (S)=>{
            A = !0, p && clearTimeout(p);
            const v = ab(m, y).pipe(db((b)=>!0, !0));
            S === 0 ? v.subscribe(()=>i.complete()) : v.subscribe(()=>{
                const b = new Kt(`Process failed with exit code: ${S}`, S, l, u);
                i.error(b);
            });
        }), _.add(new bp(()=>{
            A || (p && clearTimeout(p), f.kill());
        })), _;
    });
    if (r.retries && r.retries > 0) {
        const i = r.retries, o = r.retryDelay ?? 1e3;
        s = s.pipe(hb({
            count: i,
            delay: (a, c)=>{
                if (a instanceof Kt && a.exitCode !== 0) return lb(o);
                throw a;
            }
        }));
    }
    return r.split ? s : s.pipe(ub((i)=>i?.text));
}
function fb(e) {
    return new Promise((t, r)=>{
        let n = "";
        e.subscribe({
            next: (s)=>{
                n += s;
            },
            error: (s)=>{
                if (s instanceof Kt) {
                    const i = new Kt(`${n}
${s.message}`, s.exitCode, s.command, s.args, n, s.stderr);
                    r(i);
                } else {
                    const i = new Error(`${n}
${s instanceof Error ? s.message : String(s)}`);
                    r(i);
                }
            },
            complete: ()=>t(n)
        });
    });
}
function pb(e) {
    return new Promise((t, r)=>{
        let n = "", s = "";
        e.subscribe({
            next: (i)=>{
                i.source === "stdout" ? n += i.text : s += i.text;
            },
            error: (i)=>{
                if (i instanceof Kt) {
                    const o = new Kt(`${n}
${i.message}`, i.exitCode, i.command, i.args, n, s);
                    r(o);
                } else {
                    const o = new Error(`${n}
${i instanceof Error ? i.message : String(i)}`);
                    r(o);
                }
            },
            complete: ()=>t([
                    n,
                    s
                ])
        });
    });
}
export function Ep(e, t, r) {
    return r?.split ? pb(wp(e, t, {
        ...r ?? {},
        split: !0
    })) : fb(wp(e, t, {
        ...r ?? {},
        split: !1
    }));
}
function Tb(e) {
    return e.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
function Ii() {
    return new Op;
}
export function Zb() {
    const e = Ke("rg", []).cmd;
    return e !== "rg" ? e : void 0;
}
export function Xp(e) {
    if (!e) throw new Error("configureRipgrepPath: path must not be empty");
    Vt = e;
}
function Jp(e) {
    const t = Object.keys(e).filter((r)=>r.toLowerCase() === "path");
    if (t.length !== 0) return process.platform === "win32" ? t.find((r)=>r === "Path") ?? t[0] : t.find((r)=>r === "PATH") ?? t[0];
}
function Qb(e) {
    const t = Jp(e);
    return t !== void 0 ? e[t] ?? "" : "";
}
function e7(e, t) {
    const r = Jp(e) ?? (process.platform === "win32" ? "Path" : "PATH"), n = {
        ...e
    };
    for (const s of Object.keys(n))s !== r && s.toLowerCase() === "path" && delete n[s];
    return n[r] = t, n;
}
function t7(e, t) {
    const r = Xb(t);
    if (!r || r === ".") return e;
    const n = Qb(e).split(Yp).filter(Boolean), s = [
        r,
        ...n.filter((i)=>i !== r)
    ].join(Yp);
    return e7(e, s);
}
export function bc(e) {
    return !Vt || !Jb(Vt) ? e : {
        ...t7(e, Vt),
        CURSOR_RIPGREP_PATH: Vt
    };
}
export function wc() {
    if (!Vt) throw new Error("Ripgrep path not configured. Call configureRipgrepPath() at startup.");
    return Vt;
}
export function Zp() {
    return Vt !== void 0;
}
function Ac(e) {
    const t = e || process.env, { ELECTRON_RUN_AS_NODE: r, ...n } = t;
    return n;
}
function Qp(e) {
    const t = {
        ...e
    };
    for (const r of e1)delete t[r];
    return t;
}
function o7() {
    return r7(16).toString("hex");
}
function a7() {
    return Tc || (Tc = o7()), Tc;
}
function c7(e, t) {
    const r = n7(e);
    return r.isDirectory() && r.uid === t && (r.mode & 18) === 0;
}
function l7(e) {
    try {
        s7(e, {
            mode: 448
        });
    } catch (t) {
        if (t.code !== "EEXIST") throw t;
    }
}
function u7(e) {
    return n1(e, {
        create: !0
    });
}
export function d7(e) {
    return n1(e, {
        create: !1
    });
}
function n1(e, { create: t }) {
    const r = process.getuid?.();
    if (r === void 0) return;
    const n = ce(r1(), `cursor-sandbox-${Tb(i7(e))}`);
    try {
        for (const s of [
            n,
            ce(n, "tmp")
        ])if (t && l7(s), !c7(s, r)) return;
        return n;
    } catch  {
        return;
    }
}
function h7(e) {
    const t = ce(e, "tmp");
    return {
        TMPDIR: t,
        TMP: t,
        TEMP: t,
        TMPPREFIX: ce(t, "sh-")
    };
}
function Rc(e = ce(r1(), s1, a7())) {
    return {
        NPM_CONFIG_CACHE: ce(e, "npm"),
        PNPM_STORE_PATH: ce(e, "pnpm-store"),
        GOCACHE: ce(e, "go-build"),
        GOMODCACHE: ce(e, "go-mod"),
        CARGO_TARGET_DIR: ce(e, "cargo-target"),
        PIP_CACHE_DIR: ce(e, "pip"),
        UV_CACHE_DIR: ce(e, "uv"),
        BUN_INSTALL_CACHE_DIR: ce(e, "bun"),
        YARN_CACHE_FOLDER: ce(e, "yarn"),
        npm_config_devdir: ce(e, "node-gyp"),
        PLAYWRIGHT_BROWSERS_PATH: ce(e, "playwright"),
        PUPPETEER_CACHE_DIR: ce(e, "puppeteer"),
        TURBO_CACHE_DIR: ce(e, "turbo"),
        GRADLE_USER_HOME: ce(e, "gradle"),
        CONDA_PKGS_DIRS: ce(e, "conda"),
        POETRY_CACHE_DIR: ce(e, "poetry"),
        GEM_SPEC_CACHE: ce(e, "gem-specs"),
        BUNDLE_PATH: ce(e, "bundle"),
        COMPOSER_HOME: ce(e, "composer"),
        HOMEBREW_CACHE: ce(e, "homebrew"),
        CYPRESS_CACHE_FOLDER: ce(e, "cypress"),
        NX_CACHE_DIRECTORY: ce(e, "nx"),
        NUGET_PACKAGES: ce(e, "nuget"),
        CCACHE_DIR: ce(e, "ccache"),
        CP_HOME_DIR: ce(e, "cocoapods")
    };
}
export function c1(e = process.platform, t = kc.homedir(), r = {}) {
    const n = [];
    for (const s of p1){
        if (s.platform !== e) continue;
        if (s.scope === "global") {
            n.push(s.path);
            continue;
        }
        const i = s.scope === "bundled" ? r[s.path] : Ci(t, s.path);
        if (i) try {
            let o;
            switch(s.scope){
                case "home":
                    o = i1(i).isFile();
                    break;
                case "home-dir":
                    o = i1(i).isDirectory();
                    break;
                case "bundled":
                    o = o1(i).isFile();
                    break;
            }
            o && n.push(i);
        } catch  {}
    }
    return n;
}
function v7(...e) {
    const t = {};
    for (const r of e){
        let n = !1;
        try {
            n = p7(r) && o1(r).isDirectory();
        } catch  {}
        if (n) t[r] || (t[r] = []), t[r].push("**");
        else {
            const s = r.lastIndexOf("/"), i = s > 0 ? r.slice(0, s) : "/", o = s >= 0 ? r.slice(s + 1) : r;
            t[i] || (t[i] = []), o ? t[i].push(o, `${o}/**`) : t[i].push("**");
        }
    }
    return t;
}
function E7(e, t) {
    return t ? e ?? "system" : "system";
}
function R7() {
    return Jn === null && (Jn = (0, Oc.default)({
        ignoreCase: !0
    }), Jn.add(pt.filter((e)=>e.type === "workspace").map((e)=>e.pattern))), Jn;
}
function T7() {
    return Zn === null && (Zn = (0, Oc.default)({
        ignoreCase: !0
    }), Zn.add(pt.filter((e)=>e.type === "git").map((e)=>e.pattern))), Zn;
}
async function k7(e) {
    try {
        const t = await Ep("git", [
            "rev-parse",
            "--git-common-dir"
        ], {
            cwd: e
        });
        return _7(m7(e, t.trim()));
    } catch  {
        return null;
    }
}
function I7() {
    if (xi !== null) return xi;
    const e = kc.homedir(), t = [];
    for (const r of pt)switch(r.type){
        case "absolute":
            t.push(r.pattern);
            break;
        case "home":
            e.length > 0 && t.push(Ci(e, r.pattern));
            break;
        default:
            break;
    }
    return xi = t, t;
}
async function P7(e) {
    const t = Mi.get(e);
    if (t) return t;
    if (!((await g7(Ci(e, ".git")).catch(()=>null))?.isFile() ?? !1)) {
        const o = {
            isWorktree: !1,
            gitDirParent: e
        };
        return Mi.set(e, o), o;
    }
    const i = {
        isWorktree: !0,
        gitDirParent: await k7(e) ?? e
    };
    return Mi.set(e, i), i;
}
function l1(e) {
    if (!e.endsWith(Ic)) return e;
    const t = e.slice(0, -1);
    return t === "" || process.platform === "win32" && /^[a-zA-Z]:$/.test(t) ? e : t;
}
function u1(e) {
    return e.endsWith(Ic) ? e : e + Ic;
}
function Li(e, t) {
    const r = l1(t);
    if (Mc) {
        const n = e.toLowerCase(), s = r.toLowerCase();
        return n === s || n.startsWith(u1(s));
    }
    return e === r || e.startsWith(u1(r));
}
function Pc(e, t) {
    const r = l1(e);
    return Mc ? a1(r.toLowerCase(), t.toLowerCase()).replace(/\\/g, "/") : a1(r, t).replace(/\\/g, "/");
}
export async function O7(e, t) {
    if (Li(e, t)) {
        const s = Pc(t, e);
        if (R7().ignores(s)) return !0;
    }
    const { isWorktree: r, gitDirParent: n } = await P7(t);
    if (Li(e, n)) {
        const s = Pc(n, e);
        if (T7().ignores(s)) return !0;
    }
    if (r && Li(e, t) && Pc(t, e) === ".git") return !0;
    for (const s of I7())if (Li(e, s)) return !0;
    return !1;
}
function M7(e, t) {
    Nc.set(e, t);
}
export function Uc(e) {
    return e === void 0 ? !1 : e.default === "allow" || e.allow !== void 0 && e.allow.length > 0;
}
export function $7(e) {
    return e === void 0 ? !1 : e.default === "allow";
}
export function F7() {
    return {
        version: 1,
        default: "deny"
    };
}
export function H7() {
    return {
        version: 1,
        default: "allow"
    };
}
function W7() {
    const e = process.env[b1]?.trim();
    return e ? Qn.resolve(e) : Qn.resolve(Qn.join(z7.homedir(), ".cursor", S1));
}
function G7(e) {
    let t;
    try {
        t = qr.readdirSync(e);
    } catch  {
        return;
    }
    const r = Date.now();
    for (const n of t){
        if (!n.startsWith("sandbox-policy-")) continue;
        const s = Qn.join(e, n);
        try {
            const i = qr.statSync(s);
            if (!i.isFile()) continue;
            r - i.mtimeMs > w1 && qr.unlinkSync(s);
        } catch  {}
    }
}
function v1() {
    const e = W7();
    qr.mkdirSync(e, {
        recursive: !0,
        mode: 448
    });
    try {
        qr.chmodSync(e, 448);
    } catch  {}
    const t = Date.now();
    return t - Fc >= E1 && (Fc = t, G7(e)), e;
}
function y1(e) {
    const t = v1(), r = B7.randomBytes(8).toString("hex"), n = Qn.join(t, `sandbox-policy-${r}`);
    return qr.writeFileSync(n, e, {
        encoding: "utf-8",
        mode: 384
    }), n;
}
function V7(e) {
    const t = v1();
    return !e || e.length === 0 ? [
        t
    ] : e.includes(t) ? e : [
        ...e,
        t
    ];
}
function Y7() {
    const e = jc;
    return typeof e == "function" ? e() : e;
}
function X7(e) {
    wc();
    const { sandboxBinaryPath: t, workspaceReadEnabled: r } = e;
    qc || (qc = t), r !== void 0 && (jc = r);
}
function zc() {
    return qc;
}
function R1(e) {
    process.platform === "linux" && Object.assign(e, bc(e));
}
function J7(e) {
    if (e.type === "insecure_none") return;
    const t = e.networkPolicy;
    if (t === void 0 || !Uc(t)) return;
    const r = t.deny !== void 0 && t.deny.length > 0;
    if (!(t.default === "allow" && !r)) return {
        version: 1,
        ...t
    };
}
function Z7(e = process.platform) {
    const t = [], r = new Set, n = {};
    try {
        n.ripgrep = wc();
    } catch  {}
    for (const s of c1(e, Bc.homedir(), n))r.has(s) || (r.add(s), t.push(s));
    return t;
}
function T1(e) {
    return {
        ...e,
        additionalReadonlyPaths: V7(e.additionalReadonlyPaths)
    };
}
function Q7(e) {
    const t = [], r = new Set;
    for (const n of e){
        let s = n.trim();
        if (!s) continue;
        s === "~" ? s = Bc.homedir() : (s.startsWith("~/") || s.startsWith("~\\")) && (s = mr.join(Bc.homedir(), s.slice(2))), s = s.replace(/\/\*\*$/, "").replace(/\/\*$/, ""), s = s.replace(/\\\*\*$/, "").replace(/\\\*$/, "");
        const i = mr.basename(s);
        if ((i.includes("*") || i.includes("?")) && (s = mr.dirname(s)), !s || s === ".") continue;
        const o = mr.normalize(s);
        r.has(o) || (r.add(o), t.push(o));
    }
    return t;
}
function k1(e, t, r) {
    let n;
    e.ignoreMapping && (n = u9(e.ignoreMapping, t, [], []));
    const s = l9(e.additionalReadonlyPaths, e.writeProtectionMapping, t), i = E7(e.readBoundary, r?.workspaceReadEnabled ?? Y7()), o = Z7(), a = i === "workspace" ? Q7(e.additionalReadPaths ?? []) : [], c = [
        ...o
    ], l = new Set(o);
    for (const d of a)l.has(d) || (l.add(d), c.push(d));
    const u = {
        cwd: t,
        readBoundary: i,
        hardcodedReadPaths: c,
        additionalReadonlyPaths: s,
        networkAccess: Uc(e.networkPolicy),
        ignoreMapping: n
    };
    return e.type === "workspace_readonly" ? {
        type: e.type,
        ...u
    } : {
        type: e.type,
        ...u,
        additionalReadwritePaths: e.additionalReadwritePaths || [],
        disableTmpWrite: e.disableTmpWrite || !1
    };
}
function e9(e) {
    if (!(e.readBoundary !== "workspace" || e.type === "workspace_readwrite" && e.disableTmpWrite || process.platform === "win32")) return u7(e.cwd);
}
function t9(e, t, r) {
    const n = h7(e);
    if (r) {
        const s = Rc();
        for (const [i, o] of Object.entries(Rc(e)))t[i] === s[i] && (n[i] = o);
    }
    return n;
}
function Wc(e) {
    if (kt !== null) return !!kt;
    try {
        const t = zc();
        return Te.info(e, `[checkBinaryAvailable] Resolved binary path: ${t}`), t ? (kt = A1.existsSync(t), kt ? Te.info(e, `[checkBinaryAvailable] Binary path exists: ${kt}`) : (jr = new Error(`Sandbox binary not found at ${t}`), Te.info(e, `[checkBinaryAvailable] Binary not found at: ${t}`)), !!kt) : (jr = new Error("Sandbox binary path was not configured"), kt = !1, Te.info(e, "[checkBinaryAvailable] Binary path not set, returning false"), !1);
    } catch (t) {
        return jr = t, kt = !1, Te.info(e, `[checkBinaryAvailable] Exception checking binary: ${t}`), !1;
    }
}
function Gc(e) {
    if (Oe !== null) return Oe;
    const t = e ?? Ii();
    if (Te.info(t, "[isSandboxHelperSupported] Starting sandbox support check..."), !Wc(t)) {
        const i = jr?.message || "Binary check failed";
        return gt = i, Te.info(t, `[isSandboxHelperSupported] Binary not available, returning false. Reason: ${i}`), Oe = !1, Oe;
    }
    if (process.platform === "win32") return gt = "Windows sandbox helper only provides network proxy, not filesystem isolation", Te.info(t, "[isSandboxHelperSupported] win32: returning false (proxy-only, no filesystem sandbox)"), Oe = !1, Oe;
    if (process.platform === "darwin") return gt = null, Te.info(t, `[isSandboxHelperSupported] ${process.platform} platform, binary available, sandbox supported!`), Oe = !0, Oe;
    const { binaryPath: r, args: n, env: s } = I1(t, process.cwd());
    try {
        const i = Date.now();
        gr(q7, r, n, {
            stdio: [
                "ignore",
                "ignore",
                "pipe"
            ],
            timeout: Vc,
            env: s,
            shell: !1
        });
        const o = Date.now() - i;
        return gt = null, Te.info(t, `[isSandboxHelperSupported] Preflight succeeded in ${o}ms, sandbox supported!`), Oe = !0, Oe;
    } catch (i) {
        const o = i;
        return P1(t, {
            message: o.message,
            status: o.status,
            stderrText: o.stderr?.toString?.() || ""
        });
    }
}
function I1(e, t) {
    const r = {
        sandbox: k1(T1({
            type: "workspace_readwrite"
        }), t)
    }, n = String(zc());
    Te.info(e, `[sandboxPreflight] Running preflight with binary: ${n}`), Te.info(e, `[sandboxPreflight] CWD: ${t}`);
    const s = {
        ...process.env
    };
    R1(s);
    const i = y1(JSON.stringify(r));
    return {
        binaryPath: n,
        args: [
            "--policy",
            i,
            "--preflight-only",
            "--",
            "/bin/true"
        ],
        env: s
    };
}
function P1(e, t) {
    const { message: r, status: n, stderrText: s } = t;
    return Te.error(e, `[sandboxPreflight] Preflight failed: ${r}`), Te.error(e, `[sandboxPreflight] Exit status: ${n}`), s && Te.error(e, `[sandboxPreflight] Stderr: ${s}`), n === 2 ? gt = `Linux preflight failed with exit code 2 (unsupported kernel features). stderr: ${s || "none"}` : gt = `Linux preflight failed: ${r || "unknown error"}. Exit status: ${n}. stderr: ${s || "none"}`, Oe = !1, !1;
}
async function r9(e) {
    return Vr && Oe !== null ? Oe : (Yr !== null || (Yr = n9(e).finally(()=>{
        Yr = null;
    })), Yr);
}
async function n9(e) {
    const t = e.ctx ?? Ii();
    if (!Kc || !Wc(t)) {
        const l = Gc(t);
        return Vr = !0, l;
    }
    Oe !== null && Te.info(t, `[primeSandboxHelperSupport] Re-probing from ${e.workspaceCwd}; the cached verdict (${Oe}) was measured from a different directory`);
    const r = e.timeoutMs ?? Vc, { binaryPath: n, args: s, env: i } = I1(t, e.workspaceCwd), o = Date.now(), a = await s9({
        binaryPath: n,
        args: s,
        env: i,
        timeoutMs: r
    }), c = Date.now() - o;
    if (a.kind === "timeout") return gt = `Linux preflight rooted at ${e.workspaceCwd} did not finish within ${r}ms (sandbox setup for this workspace is slower than the terminal tool will wait). stderr: ${a.stderrText || "none"}`, Te.error(t, `[primeSandboxHelperSupport] Preflight timed out after ${r}ms, treating sandbox as unsupported`), Oe = !1, Vr = !0, !1;
    if (a.kind === "failed") {
        const l = P1(t, {
            message: a.message,
            status: a.status,
            stderrText: a.stderrText
        });
        return Vr = !0, l;
    }
    return gt = null, Te.info(t, `[primeSandboxHelperSupport] Preflight rooted at ${e.workspaceCwd} succeeded in ${c}ms, sandbox supported!`), Oe = !0, Vr = !0, !0;
}
function s9(e) {
    return new Promise((t)=>{
        let r;
        try {
            r = gr(Hc, e.binaryPath, e.args, {
                stdio: [
                    "ignore",
                    "ignore",
                    "pipe"
                ],
                env: e.env,
                shell: !1,
                detached: !0,
                windowsHide: !0
            });
        } catch (a) {
            t({
                kind: "failed",
                message: a instanceof Error ? a.message : String(a),
                stderrText: ""
            });
            return;
        }
        let n = "";
        r.stderr?.on("data", (a)=>{
            n += a.toString();
        });
        let s = !1;
        const i = setTimeout(()=>{
            s || (s = !0, i9(r), t({
                kind: "timeout",
                stderrText: n
            }));
        }, e.timeoutMs);
        i.unref?.();
        const o = (a)=>{
            s || (s = !0, clearTimeout(i), t(a));
        };
        r.on("error", (a)=>{
            o({
                kind: "failed",
                message: a.message,
                stderrText: n
            });
        }), r.on("close", (a, c)=>{
            if (a === 0) {
                o({
                    kind: "ok"
                });
                return;
            }
            o({
                kind: "failed",
                message: `preflight exited with code ${a}${c ? ` (signal ${c})` : ""}`,
                status: a,
                stderrText: n
            });
        });
    });
}
function i9(e) {
    const t = e.pid;
    if (t !== void 0) try {
        process.kill(-t, "SIGKILL");
    } catch  {
        try {
            e.kill("SIGKILL");
        } catch  {}
    }
}
function o9(e, t = [], r = {}, n) {
    const s = Ii();
    if (r.env = Ac(r.env), !Wc(s)) throw new Error(`Sandbox binary not available: ${jr?.message || "binary not configured"}. Please build the binary or use 'insecure_none' policy.`);
    if (n.type === "insecure_none") return gr(Hc, e, t, {
        ...r,
        windowsHide: !0
    });
    if (n.type === "workspace_readwrite" || n.type === "workspace_readonly") return a9(e, t, r, n);
    throw new Error(`Unsupported sandbox policy: ${String(n)}`);
}
function a9(e, t, r, n) {
    if (n.type !== "workspace_readwrite" && n.type !== "workspace_readonly") throw new Error("Expected workspace_readwrite or workspace_readonly policy");
    const s = String(r.cwd ?? process.cwd()), i = n.sandboxWorkspaceRoot ?? s;
    let o = e, a = t;
    r.shell && (process.platform === "win32" ? (o = typeof r.shell == "string" ? r.shell : "cmd.exe", a = [
        "/c",
        `${e} ${t.join(" ")}`
    ]) : (o = typeof r.shell == "string" ? r.shell : "/bin/sh", a = [
        "-c",
        `${e} ${t.join(" ")}`
    ]));
    const c = k1(T1(n), i), l = e9(c);
    l && (c.additionalReadwritePaths = [
        ...c.additionalReadwritePaths ?? [],
        l
    ]);
    const u = J7(n), d = {
        sandbox: c
    };
    u !== void 0 && (d.networkPolicy = u), n.networkPolicyStrict === !1 && (d.networkPolicyStrict = !1);
    const p = [
        "--policy",
        y1(JSON.stringify(d)),
        "--",
        o,
        ...a
    ], g = process.platform === "linux" ? Qp(process.env) : process.env, _ = process.platform === "linux" && r.env ? Qp(r.env) : r.env, y = {
        ...g,
        ..._,
        CURSOR_SANDBOX: "native"
    };
    if (R1(y), l) {
        const A = t9(l, y, n.enableSharedBuildCache);
        Object.assign(y, A), y.__CURSOR_SANDBOX_OWNED_ENV = Object.keys(A).join(" "), y.__CURSOR_SANDBOX_TEMP_RESTORE = Object.entries(A).map(([S, v])=>`builtin export ${S}='${v.replace(/'/g, "'\\''")}'`).join("; ");
    }
    const m = {
        cwd: r.cwd || s,
        env: y,
        stdio: r.stdio || [
            "pipe",
            "pipe",
            "pipe"
        ],
        detached: r.detached,
        windowsHide: !0
    };
    try {
        const A = new Date, S = gr(Hc, String(zc()), p, m);
        return L1 && S.pid && M7(S, {
            startTime: A,
            pid: S.pid
        }), S;
    } catch (A) {
        throw new Error(`Failed to spawn sandboxed process: ${A}`);
    }
}
function c9(e, t = (r)=>A1.existsSync(r)) {
    if (Ei(e)) return !0;
    let r = mr.resolve(e);
    for(;;){
        try {
            const s = mr.join(r, ".git");
            if (t(s)) return !0;
        } catch  {}
        const n = mr.dirname(r);
        if (n === r) return !1;
        r = n;
    }
}
function l9(e, t, r) {
    const n = e && e.length > 0 ? v7(...e) : {}, s = c9(r), i = !Kc || s ? t ?? {} : {}, o = {
        ...n
    };
    for (const [a, c] of Object.entries(i))o[a] ? o[a] = [
        ...o[a],
        ...c
    ] : o[a] = c;
    if (Object.keys(o).length !== 0) return O1(o, r, [], []);
}
function u9(e, t, r, n) {
    return O1(e, t, r, n);
}
function O1(e, t, r, n) {
    const s = {};
    for (const [i, o] of Object.entries(e)){
        const a = i.startsWith("file://") ? d9(i) : i;
        s[a] = o;
        const c = h9(a);
        c !== a && (s[c] = o);
    }
    return s;
}
function d9(e) {
    let t = e.replace(/^file:\/\//, "");
    return t = decodeURIComponent(t), t.length > 1 && t.endsWith("/") && (t = t.slice(0, -1)), t;
}
function h9(e, t) {
    if (Ei(e)) return e;
    try {
        return (t ?? j7)(e);
    } catch  {
        return e;
    }
}
export function C1() {
    return gt;
}
export function D1(e) {
    X7(e);
}
export function N1(e, t = [], r = {}, n) {
    if (r.env = Ac(r.env), n.enableSharedBuildCache && (r = {
        ...r,
        env: {
            ...Ac(process.env),
            ...Rc(),
            ...r.env
        }
    }), n.type !== "insecure_none") {
        if (Gc()) return o9(e, t, r, n);
        const s = C1();
        throw new Yc(`Sandbox policy '${n.type}' is not supported on this system. Ensure the sandbox helper binary is available, or use 'insecure_none'. Reason: ${s || "unknown"}`, s ?? void 0);
    }
    return g9(e, t, r);
}
function g9(e, t, r) {
    return gr(p9, e, t, {
        ...r,
        windowsHide: !0
    });
}
export function _9(e, t) {
    if (Ni) try {
        x1("/usr/bin/sandbox-exec", M1.X_OK);
    } catch  {
        return !1;
    }
    return Gc(t?.ctx);
}
export async function m9(e) {
    if (Ni) try {
        x1("/usr/bin/sandbox-exec", M1.X_OK);
    } catch  {
        return !1;
    }
    return r9(e);
}
function tl(e, t) {
    const r = `${t}
`, n = e.indexOf(r);
    return n >= 0 ? e.slice(n + r.length) : e;
}
export function z1(e) {
    return e.teamAdmin?.type ?? e.perRepo?.type ?? e.perUser?.type ?? "insecure_none";
}
export function W1(...e) {
    const t = e.filter((n)=>n !== void 0);
    if (t.length === 0) return [];
    if (t.some((n)=>n.length === 0)) return [];
    if (t.length === 1) return D9(t[0]).map(is);
    let r = new Set(t[0].map(is));
    for(let n = 1; n < t.length; n++){
        const s = new Set(t[n].map(is));
        r = new Set([
            ...r
        ].filter((i)=>s.has(i)));
    }
    return [
        ...r
    ];
}
export function ss(...e) {
    const t = new Set;
    for (const r of e)if (r) for (const n of r)t.add(is(n));
    return [
        ...t
    ];
}
export function x9(...e) {
    return V1.merge(...e);
}
export function M9(...e) {
    return Y1.merge(...e);
}
function is(e) {
    const t = e.replace(/\\/g, "/").replace(/\/+$/, "");
    return t === "" ? "/" : /^[a-zA-Z]:$/.test(t) ? `${t}/` : t;
}
function D9(e) {
    const t = new Set, r = [];
    for (const n of e){
        const s = is(n);
        t.has(s) || (t.add(s), r.push(n));
    }
    return r;
}
export function G1(...e) {
    const t = e.filter((c)=>c !== void 0);
    if (t.length === 0) return;
    let r;
    for (const c of t)if (c.default === "deny") {
        r = "deny";
        break;
    } else c.default === "allow" && r === void 0 && (r = "allow");
    const n = new Set;
    for (const c of t)if (c.deny) for (const l of c.deny)n.add(l);
    const s = new Set;
    for (const c of t)if (c.allow) for (const l of c.allow)s.add(l);
    const i = s.size > 0 ? [
        ...s
    ] : void 0;
    let o;
    for(let c = t.length - 1; c >= 0; c--)if (t[c].logging !== void 0) {
        o = t[c].logging;
        break;
    }
    const a = {
        version: 1
    };
    if (r !== void 0 && (a.default = r), i !== void 0 && (a.allow = i), n.size > 0 && (a.deny = [
        ...n
    ]), o !== void 0 && (a.logging = o), !(a.default === void 0 && (a.allow === void 0 || a.allow.length === 0) && (a.deny === void 0 || a.deny.length === 0) && a.logging === void 0)) return a;
}
async function W9(e) {
    const t = {
        ...process.env,
        ...It,
        ...e?.env
    }, r = "__CURSOR_STATE_MARKER__", n = [
        "-O",
        "extglob",
        "-ilc",
        H1 + ` builtin printf '${r}\\n'; dump_bash_state`
    ], s = eg(e?.userTerminalHint);
    if (!s) throw new Error("Can't find Bash");
    const i = Pt(s, n, {
        env: t,
        detached: !0,
        stdio: [
            "ignore",
            "pipe",
            "pipe"
        ]
    }, {
        type: "insecure_none"
    }, e?.signal);
    let o = "";
    i.stdout?.on("data", (_)=>{
        o += _.toString();
    }), i.on("error", (_)=>{
        console.warn(`[shell-exec] bash state init spawn failed; falling back to empty state: ${_ instanceof Error ? _.message : String(_)}`);
    }), await new Promise((_)=>{
        i.on("close", ()=>{
            _(void 0);
        });
    });
    const a = tl(o, r), c = `${rl}
`, l = `${es}
`;
    let u;
    a.startsWith(c) && a.endsWith(l) ? (u = a.slice(c.length), u = u.slice(0, -(es.length + 1))) : u = `${process.cwd()}
`;
    const { cwd: d, rest: f } = vr(u), p = process.platform === "win32", g = process.platform === "win32" ? process.cwd() : d;
    return new cl(g, f, e?.userTerminalHint, p);
}
async function Y9() {
    return new ul(process.cwd(), "");
}
export function dg(e) {
    const t = process.platform === "win32", r = e?.shell ?? (t ? $i() : void 0), n = process.cwd();
    return new hl(n, {
        ...e,
        shell: r
    });
}
async function J9(e) {
    const t = {
        ...process.env,
        ...It,
        ...e?.env
    }, r = "__CURSOR_STATE_MARKER__", n = [
        "-o",
        "extendedglob",
        "-ilc",
        `${pg} builtin printf '${r}\\n'; dump_zsh_state`
    ], s = Pt(gg(), n, {
        env: t,
        stdio: [
            "ignore",
            "pipe",
            "pipe"
        ],
        detached: !0
    }, {
        type: "insecure_none"
    }, e?.signal);
    let i = "";
    s.stdout?.on("data", (f)=>{
        i += f.toString();
    }), s.on("error", (f)=>{
        console.warn(`[shell-exec] zsh state init spawn failed; falling back to empty state: ${f instanceof Error ? f.message : String(f)}`);
    }), await new Promise((f)=>{
        s.on("close", ()=>{
            f(void 0);
        });
    });
    const o = tl(i, r), a = `${fl}
`, c = `${cs}
`;
    let l;
    o.startsWith(a) && o.endsWith(c) ? (l = o.slice(a.length), l = l.slice(0, -(cs.length + 1))) : l = `${process.cwd()}
`;
    const { cwd: u, rest: d } = vr(l);
    return new pl(u, d);
}
async function Q9(e) {
    const t = {
        ...process.env,
        ...It,
        ...e?.env
    }, r = "__CURSOR_STATE_MARKER__", n = [
        "-o",
        "extendedglob",
        "-ilc",
        `${_l} builtin printf '${r}\\n'; dump_zsh_state_light`
    ], s = Pt(vg(), n, {
        env: t,
        stdio: [
            "ignore",
            "pipe",
            "pipe"
        ],
        detached: !0
    }, {
        type: "insecure_none"
    }, e?.signal);
    let i = "";
    s.stdout?.on("data", (d)=>{
        i += d.toString();
    }), s.on("error", (d)=>{
        console.warn(`[shell-exec] zsh-light state init spawn failed; falling back to empty state: ${d instanceof Error ? d.message : String(d)}`);
    }), await new Promise((d)=>{
        s.on("close", ()=>{
            d(void 0);
        });
    });
    const o = tl(i, r), a = `${gl}
`, c = o.startsWith(a) ? o.slice(a.length) : `${process.cwd()}
`, { cwd: l, rest: u } = vr(c);
    return new yg(l, u);
}
export function tw(e, t) {
    if (!e || e.length === 0) return {};
    const r = e.map((n)=>n.trim()).filter((n)=>n !== "" && !n.startsWith("#"));
    return r.length === 0 ? {} : {
        [t]: r
    };
}
function lw(e) {
    if (!e) return;
    const t = {
        version: 1
    };
    if ((e.default === "allow" || e.default === "deny") && (t.default = e.default), Array.isArray(e.allow) && e.allow.length > 0 && (t.allow = e.allow.filter((r)=>typeof r == "string")), Array.isArray(e.deny) && e.deny.length > 0 && (t.deny = e.deny.filter((r)=>typeof r == "string")), e.logging) {
        const r = {};
        typeof e.logging.decisionLogPath == "string" && (r.decisionLogPath = e.logging.decisionLogPath), e.logging.logFormat === "jsonl" && (r.logFormat = "jsonl"), Object.keys(r).length > 0 && (t.logging = r);
    }
    return t;
}
export function Eg(e) {
    const t = e.type ?? "workspace_readwrite", r = {
        debugOutputDir: e.debugOutputDir,
        captureDenies: e.captureDenies,
        enableSharedBuildCache: e.enableSharedBuildCache
    };
    if (t === "insecure_none") return {
        type: "insecure_none",
        ...r
    };
    let n;
    if (Array.isArray(e.additionalReadonlyPaths)) {
        const o = e.additionalReadonlyPaths;
        n = o.length > 0 ? o : void 0;
    }
    const s = {
        ...r,
        networkAccess: e.networkAccess,
        networkPolicy: lw(e.networkPolicy),
        networkPolicyStrict: e.networkPolicyStrict,
        additionalReadonlyPaths: n,
        readBoundary: e.readBoundary,
        additionalReadPaths: Array.isArray(e.additionalReadPaths) ? e.additionalReadPaths : void 0,
        disableTmpWrite: e.disableTmpWrite
    };
    return t === "workspace_readonly" ? {
        type: "workspace_readonly",
        ...s
    } : {
        type: "workspace_readwrite",
        ...s,
        additionalReadwritePaths: e.additionalReadwritePaths
    };
}
function uw(e) {
    if (typeof e != "object" || e === null) return "Expected an object";
    const t = e;
    if (t.type !== void 0) {
        const i = [
            "insecure_none",
            "workspace_readwrite",
            "workspace_readonly"
        ];
        if (typeof t.type != "string" || !i.includes(t.type)) return `Invalid type: expected one of ${i.join(", ")}`;
    }
    const r = [
        "networkAccess",
        "networkPolicyStrict",
        "disableTmpWrite",
        "enableSharedBuildCache",
        "captureDenies"
    ];
    for (const i of r)if (t[i] !== void 0 && typeof t[i] != "boolean") return `Invalid ${i}: expected boolean`;
    const n = [
        "debugOutputDir"
    ];
    for (const i of n)if (t[i] !== void 0 && typeof t[i] != "string") return `Invalid ${i}: expected string`;
    const s = [
        "additionalReadwritePaths",
        "additionalReadonlyPaths",
        "additionalReadPaths"
    ];
    for (const i of s)if (t[i] !== void 0) {
        if (!Array.isArray(t[i])) return `Invalid ${i}: expected array`;
        if (!t[i].every((a)=>typeof a == "string")) return `Invalid ${i}: expected array of strings`;
    }
    if (t.readBoundary !== void 0 && t.readBoundary !== "system" && t.readBoundary !== "workspace") return 'Invalid readBoundary: expected "system" or "workspace"';
    if (t.networkPolicy !== void 0) {
        if (typeof t.networkPolicy != "object" || t.networkPolicy === null) return "Invalid networkPolicy: expected object";
        const i = t.networkPolicy;
        if (i.default !== void 0 && i.default !== "allow" && i.default !== "deny") return 'Invalid networkPolicy.default: expected "allow" or "deny"';
        if (i.allow !== void 0 && !Array.isArray(i.allow)) return "Invalid networkPolicy.allow: expected array";
        if (i.deny !== void 0 && !Array.isArray(i.deny)) return "Invalid networkPolicy.deny: expected array";
    }
}
async function dw(e, t) {
    try {
        const r = await cw(e, "utf-8"), n = JSON.parse(r), s = uw(n);
        if (s) return {
            success: !1,
            error: `Invalid sandbox policy: ${s}`
        };
        let i = Eg(n);
        return t && (i = Ag(i, t)), {
            success: !0,
            policy: i
        };
    } catch (r) {
        return r instanceof Error ? "code" in r && r.code === "ENOENT" ? {
            success: !1,
            error: "File not found"
        } : r instanceof SyntaxError ? {
            success: !1,
            error: `Invalid JSON: ${r.message}`
        } : {
            success: !1,
            error: r.message
        } : {
            success: !1,
            error: "Unknown error"
        };
    }
}
export async function hw(e, t) {
    const r = await dw(e, t);
    if (r.success) return r.policy;
}
export function Ag(e, t) {
    if (e.type === "insecure_none") return e;
    const r = e.additionalReadonlyPaths?.map((i)=>oc(i, t)), n = e.additionalReadPaths?.map((i)=>oc(i, t));
    if (e.type === "workspace_readonly") return {
        ...e,
        additionalReadonlyPaths: r,
        additionalReadPaths: n
    };
    const s = e.additionalReadwritePaths?.map((i)=>oc(i, t));
    return {
        ...e,
        additionalReadonlyPaths: r,
        additionalReadPaths: n,
        additionalReadwritePaths: s
    };
}
import vl from "node:path";
export function pw(e) {
    switch(e){
        case "zsh":
        case "zsh-light":
            return Ke("zsh", []).cmd;
        case "bash":
            return Ke("bash", []).cmd;
        case "powershell":
            return $i();
        default:
            return process.env.SHELL || "/bin/sh";
    }
}
function rn(e) {
    try {
        return Ke(e, []).cmd !== e;
    } catch  {
        return !1;
    }
}
function gw(e) {
    const t = e.replace(/[\\/]+$/, ""), r = vl.win32.basename(t).toLowerCase();
    return r === "bash.exe" ? t : r === "bin" ? vl.win32.join(t, "bash.exe") : vl.win32.join(t, "bin", "bash.exe");
}
function Rg() {
    if (process.platform !== "win32" || !process.env.MSYSTEM) return;
    const t = process.env.EXEPATH;
    if (t) return gw(t);
    const r = [
        "C:\\Program Files\\Git\\bin\\bash.exe",
        "C:\\Program Files (x86)\\Git\\bin\\bash.exe"
    ];
    for (const n of r)try {
        if (Ke(n, []).cmd === n) return n;
    } catch  {}
    return "C:\\Program Files\\Git\\bin\\bash.exe";
}
export function Tg(e) {
    if (e === "zsh-light") return "zsh-light";
    const t = e || process.env.SHELL || "", r = process.platform === "win32", n = r && !e ? Rg() : void 0, s = n !== void 0 || /git.*bash\.exe$/i.test(t) || /program.*git.*bin.*bash\.exe$/i.test(t), i = !r || s;
    return t.includes("zsh") ? "zsh" : t.includes("bash") && i ? "bash" : t.includes("pwsh") || t.includes("powershell") ? "powershell" : n ? "bash" : r && (rn("pwsh") || rn("powershell")) ? "powershell" : rn("zsh") ? "zsh" : rn("bash") && i ? "bash" : rn("pwsh") || rn("powershell") ? "powershell" : "naive";
}
export function _w(e) {
    let t = e;
    if (!e?.userTerminalHint) {
        const n = Rg();
        n && (t = {
            ...e,
            userTerminalHint: n
        });
    }
    switch(Tg(t?.userTerminalHint ?? "")){
        case "zsh":
            return new as(()=>J9(t));
        case "bash":
            return new as(()=>W9(t));
        case "powershell":
            return new as(()=>Y9());
        case "zsh-light":
            return new as(()=>Q9(t));
        default:
            return dg(t);
    }
}
function Ig(e) {
    const t = (e ?? []).filter((n)=>n.trim().length > 0), r = t.flatMap((n)=>{
        const s = Aa(n);
        return s === void 0 ? [] : [
            s
        ];
    });
    return {
        hasConfiguredEntries: t.length > 0,
        hasInvalidEntries: r.length !== t.length,
        entries: r
    };
}
function mw(e) {
    return e.entries.includes("*") ? [
        ...Bi
    ] : e.entries;
}
function vw(e) {
    const t = Ig(e.mcpNetworkAllowlist), r = Ig(e.mcpNetworkDenylist), n = e.mcpNetworkMode;
    if (n === "deny_all" || r.entries.includes("*") || r.hasInvalidEntries) return {
        version: 1,
        default: "deny"
    };
    if (n === "allow_all") return {
        version: 1,
        default: "deny",
        allow: [
            ...Bi
        ],
        ...r.entries.length > 0 ? {
            deny: r.entries
        } : {}
    };
    if (n === "allowlist" || t.hasConfiguredEntries) {
        const s = mw(t);
        return s.length > 0 ? {
            version: 1,
            default: "deny",
            allow: s,
            ...r.entries.length > 0 ? {
                deny: r.entries
            } : {}
        } : {
            version: 1,
            default: "deny"
        };
    }
    return {
        version: 1,
        default: "deny",
        allow: [
            ...Bi
        ],
        ...r.entries.length > 0 ? {
            deny: r.entries
        } : {}
    };
}
async function yw(e, t) {
    const { resolveSandboxPolicyForWorkspace: r } = await Promise.resolve().then(()=>(ds(), us)), n = {
        type: "workspace_readwrite",
        sandboxWorkspaceRoot: t,
        networkPolicy: vw(e),
        networkPolicyStrict: !0
    }, { policy: s } = await r(t, {
        perUser: n
    });
    return s;
}
function Sw(e) {
    return (e.mcpNetworkAllowlist ?? []).some((t)=>t.trim().length > 0);
}
function Og(e) {
    const t = (e ?? []).filter((n)=>n.trim().length > 0), r = t.flatMap((n)=>{
        const s = Aa(n);
        return s === void 0 ? [] : [
            s
        ];
    });
    return {
        hasInvalidEntries: r.length !== t.length,
        entries: r
    };
}
function bw(e) {
    if (e.mcpNetworkMode === "allow_all") return [
        ...hs
    ];
    const t = Og(e.mcpNetworkAllowlist);
    if (e.mcpNetworkMode === "allowlist") return t.entries.includes("*") ? [
        ...hs
    ] : t.entries;
    if (!Sw(e)) return [
        ...hs
    ];
    const r = cS(e);
    return r.includes("*") ? [
        ...hs
    ] : r;
}
export function Cg(e) {
    const t = e.enabled === !0, r = Og(e.mcpNetworkDenylist), n = e.mcpNetworkMode === "deny_all" || r.entries.includes("*") || r.hasInvalidEntries, s = t ? bw(e) : [], i = t ? n ? [
        "*"
    ] : r.entries : [];
    return JSON.stringify({
        enabled: t,
        mode: e.mcpNetworkMode,
        allow: n ? [] : s,
        deny: i
    });
}
function ww(e, t) {
    const r = e[t];
    return typeof r == "number" && Number.isFinite(r) ? r : void 0;
}
function Ew(e, t) {
    const r = e[t];
    return typeof r == "boolean" ? r : void 0;
}
function Mg(e) {
    const t = {};
    for (const r of Ng){
        const n = ww(e, r);
        n !== void 0 && (t[r] = n);
    }
    for (const r of Ug){
        const n = Ew(e, r);
        n !== void 0 && (t[r] = n);
    }
    return t;
}
function Aw(e) {
    if (!e || typeof e != "object") return;
    const t = e, r = typeof t.identifier == "string" && t.identifier.length > 0 ? t.identifier : void 0, n = typeof t.hostname == "string" && t.hostname.length > 0 ? t.hostname.toLowerCase() : void 0;
    if (!(r === void 0 && n === void 0)) return {
        ...Mg(t),
        ...r !== void 0 ? {
            identifier: r
        } : {},
        ...n !== void 0 ? {
            hostname: n
        } : {}
    };
}
function Rw(e) {
    if (!(!e || e.type === "stdio")) return Q2(e.serverUrl);
}
function Tw(e, t) {
    if (!t || e.identifier !== void 0 && e.identifier !== t.identifier) return !1;
    if (e.hostname !== void 0) {
        const r = Rw(t.serverInfo);
        if (!r || r !== e.hostname) return !1;
    }
    return !0;
}
export function Dg(e) {
    if (!e || typeof e != "object") {
        fs = {};
        return;
    }
    const t = e, r = Array.isArray(t.overrides) ? t.overrides.map(Aw).filter((n)=>n !== void 0) : void 0;
    fs = {
        ...Mg(t),
        ...r !== void 0 ? {
            overrides: r
        } : {}
    };
}
export function be(e, t) {
    let r = fs[e];
    for (const n of fs.overrides ?? []){
        if (!Tw(n, t)) continue;
        const s = n[e];
        s !== void 0 && (r = s);
    }
    return r;
}
export function $g(e) {
    const t = be("focusRetryCooldownMs", e) ?? ps;
    return Math.max(ps, Math.min(t, 36e5));
}
export function Fg(e, t, r) {
    return t !== void 0 && e - t < r;
}
export function zi(e) {
    const t = be("stabilityThresholdMs", e) ?? Gg;
    return Math.max(5e3, Math.min(Math.trunc(t), 6e5));
}
export function bl(e) {
    const t = be("degradedProbeDelayMs", e) ?? Kg;
    return Math.max(1e3, Math.min(Math.trunc(t), 36e5));
}
export function Hg(e) {
    const t = be("healthProbeTimeoutMs", e) ?? qg;
    return Math.max(1e3, Math.min(Math.trunc(t), 12e4));
}
export function Bg(e) {
    const t = be("maxDegradedProbeFailures", e) ?? jg;
    return Math.max(1, Math.min(Math.trunc(t), 20));
}
export function zg(e) {
    const t = be("keepaliveProbeDelayMs", e) ?? Vg;
    return Math.max(1e4, Math.min(Math.trunc(t), 36e5));
}
export function Wg(e) {
    const t = be("keepaliveJitterMs", e) ?? Yg;
    return Math.max(0, Math.min(Math.trunc(t), 36e5));
}
export function kw(e) {
    const t = be("inlineReconnectCooldownMs", e) ?? Xg;
    return Math.max(1e3, Math.min(t, 36e5));
}
export function Zg(e) {
    return e?.type === "connected";
}
export function wl(e) {
    return (e.type === "failed" || e.type === "closed") && e.automaticRetry === !1;
}
export function El(e, t, r) {
    return !(e.type !== "failed" && e.type !== "closed" || e.automaticRetry === !1 && be("retryNonRetryableOnWake", r) !== !0 || t.type === "needsUserAuth" || t.type === "expired");
}
export function Qg(e, t) {
    return wl(e) ? be("nonRetryableWakeRetryCooldownMs", t) ?? ps : $g(t);
}
export function t_(e) {
    const t = be("fastRetryMaxAttempts", e) ?? a_;
    return Math.max(1, Math.min(Math.trunc(t), 20));
}
export function r_(e) {
    const t = be("maxPeriodicCycles", e);
    if (t !== void 0) return Math.max(0, Math.min(Math.trunc(t), 1e4));
}
export function n_(e) {
    return be("networkResumeReconnectEnabled", e) ?? !1;
}
export function s_(e) {
    const t = be("networkResumeReconnectDebounceMs", e) ?? c_;
    return Math.max(0, Math.min(Math.trunc(t), 18e5));
}
export function i_(e, t) {
    return s_(t);
}
export function o_(e, t) {
    switch(e){
        case "power_monitor_resume":
        case "unlock_screen":
            return n_(t);
        default:
            return e;
    }
}
export function Iw(e, t) {
    return {
        enabled: o_(e, t),
        debounceMs: i_(e, t)
    };
}
export function l_(e) {
    if (!e.sawSession404) return {
        nextCount: 0,
        shouldTombstone: !1
    };
    const t = e.currentCount + 1;
    return t >= e.threshold ? {
        nextCount: 0,
        shouldTombstone: !0
    } : {
        nextCount: t,
        shouldTombstone: !1
    };
}
export function u_(e) {
    const t = be("streamableHttpSession404TombstoneThreshold", e) ?? d_, r = Math.trunc(t);
    return Math.max(1, Math.min(r, 50));
}
export function Pw(e, t) {
    if (t.type === "needsUserAuth") return !1;
    if (t.type === "expired") switch(e.type){
        case "idle":
        case "transient_failure":
        case "dormant":
            return !0;
        case "failed":
        case "closed":
            return e.automaticRetry !== !1;
        case "connecting":
        case "connected":
        case "degraded":
            return !1;
        default:
            return e;
    }
    switch(e.type){
        case "idle":
        case "transient_failure":
        case "dormant":
            return !0;
        case "failed":
        case "closed":
            return e.automaticRetry !== !1;
        case "connecting":
        case "connected":
        case "degraded":
            return !1;
        default:
            return e;
    }
}
function Wi(e) {
    return /\b(timeout|timed out|deadline exceeded)\b/i.test(e);
}
function Ow(e) {
    return be("toolCallBoundedTimeoutEnabled", e) ?? !0;
}
function p_(e) {
    const t = be("toolCallIdleTimeoutMs", e) ?? v_;
    return Math.max(5e3, Math.min(Math.trunc(t), 30 * 6e4));
}
function Cw(e) {
    const t = p_(e), r = be("toolCallMaxTotalTimeoutMs", e) ?? y_;
    return Math.max(t, Math.min(Math.trunc(r), 60 * 6e4));
}
export function g_(e, t, r) {
    if (!(t?.enabled ?? Ow(r))) return {
        timeout: S_,
        ...e !== void 0 ? {
            onprogress: e
        } : {}
    };
    const s = Math.max(5e3, Math.min(Math.trunc(t?.timeoutMs ?? p_(r)), 30 * 6e4)), i = Math.max(s, Math.min(Math.trunc(t?.maxTotalTimeoutMs ?? Cw(r)), 60 * 6e4));
    return {
        timeout: s,
        resetTimeoutOnProgress: !0,
        maxTotalTimeout: i,
        ...e !== void 0 ? {
            onprogress: e
        } : {}
    };
}
export function __(e, t, r = Date.now()) {
    if (e.maxTotalTimeout === void 0) return e;
    const n = e.maxTotalTimeout - (r - t);
    return n <= 0 ? null : {
        ...e,
        timeout: Math.min(e.timeout, n),
        maxTotalTimeout: n
    };
}
export function m_() {
    return new Error(w_);
}
export function Lw(e) {
    const t = e instanceof Error ? e.message : String(e);
    return Wi(t);
}
export function xw(e, t, r) {
    return r === void 0 ? "legacy" : r > t && e >= r - b_ ? "max_total" : "idle";
}
export function A_(e, t) {
    switch(e.type){
        case "idle":
            return at;
        case "connecting":
            return at;
        case "connected":
            return e.stabilized ? e.probing || t?.getKeepaliveProbesEnabled?.() === !1 ? at : Fw(t) : $w(t);
        case "dormant":
            return at;
        case "degraded":
            return e.probing ? at : Hw(t);
        case "transient_failure":
            return new Map([
                [
                    "backoff_timer",
                    {
                        delayMs: e.nextDelayMs
                    }
                ]
            ]);
        case "failed":
            return e.automaticRetry === !1 && t?.getRetryNonRetryableAutomatically?.() !== !0 || e.exhausted ? at : new Map([
                [
                    "periodic_retry_timer",
                    {
                        delayMs: e.periodicRetryDelayMs
                    }
                ]
            ]);
        case "closed":
            return e.automaticRetry === !1 && t?.getRetryNonRetryableAutomatically?.() !== !0 || e.exhausted ? at : new Map([
                [
                    "periodic_retry_timer",
                    {
                        delayMs: e.periodicRetryDelayMs
                    }
                ]
            ]);
        default:
            return e;
    }
}
export function R_(e) {
    switch(e.type){
        case "idle":
            return Jt;
        case "connecting":
            return T_;
        case "connected":
            return e.probing ? Rl : Jt;
        case "dormant":
            return Jt;
        case "degraded":
            return e.probing ? Rl : Jt;
        case "transient_failure":
            return Jt;
        case "failed":
            return Jt;
        case "closed":
            return Jt;
        default:
            return e;
    }
}
function Mw(e) {
    return e?.getStabilityThresholdMs?.() ?? zi();
}
function Dw(e) {
    return e?.getKeepaliveProbeDelayMs?.() ?? zg();
}
function Nw(e) {
    return e?.getKeepaliveJitterMs?.() ?? Wg();
}
function Uw(e) {
    return e?.getDegradedProbeDelayMs?.() ?? bl();
}
function $w(e) {
    return new Map([
        [
            "stability_timer",
            {
                delayMs: Mw(e)
            }
        ]
    ]);
}
function Fw(e) {
    return new Map([
        [
            "health_probe_timer",
            {
                delayMs: Dw(e) + Math.floor(Math.random() * Nw(e))
            }
        ]
    ]);
}
function Hw(e) {
    return new Map([
        [
            "health_probe_timer",
            {
                delayMs: Uw(e)
            }
        ]
    ]);
}
export function Bw(e) {
    switch(e){
        case "backoff_timer":
            return {
                target: "connection",
                kind: "backoff_timer_expired"
            };
        case "stability_timer":
            return {
                target: "connection",
                kind: "connection_stabilized"
            };
        case "periodic_retry_timer":
            return {
                target: "connection",
                kind: "periodic_retry_expired"
            };
        case "health_probe_timer":
            return {
                target: "connection",
                kind: "health_probe_due"
            };
        default:
            return e;
    }
}
export function I_(e) {
    if (e.type === "connected" && e.stabilized && !e.probing) return "keepalive";
    if (e.type === "degraded" && !e.probing) return "degraded";
}
function O_(e, t) {
    switch(t.kind){
        case "auth_required":
            return {
                type: "needsUserAuth",
                authorizationUrl: t.authorizationUrl
            };
        case "tokens_saved":
            switch(e.type){
                case "needsUserAuth":
                case "expired":
                    return {
                        type: "valid"
                    };
                case "unknown":
                case "valid":
                    return null;
                default:
                    return e;
            }
        case "auth_completed":
            switch(e.type){
                case "needsUserAuth":
                    return {
                        type: "valid"
                    };
                case "unknown":
                case "valid":
                case "expired":
                    return null;
                default:
                    return e;
            }
        case "operation_auth_failed":
            switch(e.type){
                case "valid":
                case "unknown":
                    return {
                        type: "expired",
                        error: t.error
                    };
                case "needsUserAuth":
                case "expired":
                    return null;
                default:
                    return e;
            }
        case "operation_succeeded":
            switch(e.type){
                case "expired":
                case "unknown":
                    return {
                        type: "valid"
                    };
                case "valid":
                case "needsUserAuth":
                    return null;
                default:
                    return e;
            }
        case "server_removed":
            return {
                type: "unknown"
            };
        default:
            return t;
    }
}
function Tl(e) {
    return e.maxAttempts ?? e.getMaxAttempts?.() ?? t_();
}
function L_(e) {
    return e.maxPeriodicCycles !== void 0 ? e.maxPeriodicCycles : e.getMaxPeriodicCycles?.() ?? r_();
}
function Gw(e) {
    return e.getStabilityThresholdMs?.() ?? zi();
}
function Kw(e) {
    return e.getMaxDegradedProbeFailures?.() ?? Bg();
}
function qw(e) {
    return e.type === "connecting" ? e.generation : 0;
}
function kl(e) {
    return qw(e) + 1;
}
function Il() {
    return {
        state: {
            type: "idle"
        },
        commands: [
            {
                type: "cancel_backoff_timer"
            }
        ]
    };
}
function sn(e, t, r = 0) {
    return {
        state: {
            type: "connecting",
            attempt: t,
            generation: kl(e),
            periodicCycle: r
        },
        commands: []
    };
}
function Ki(e, t, r, n = 0) {
    return {
        state: {
            type: "connecting",
            attempt: t,
            generation: kl(e),
            periodicCycle: n
        },
        commands: r
    };
}
function qi(e, t, r = 0, n = !0) {
    return {
        state: {
            type: "failed",
            error: e,
            periodicRetryDelayMs: t.getPeriodicRetryDelay(r),
            periodicCycle: r,
            ...n === !1 ? {
                automaticRetry: !1
            } : {}
        },
        commands: []
    };
}
function Pl(e, t, r, n = 0, s = !0) {
    return {
        state: {
            type: "failed",
            error: e,
            periodicRetryDelayMs: t.getPeriodicRetryDelay(n),
            periodicCycle: n,
            ...s === !1 ? {
                automaticRetry: !1
            } : {}
        },
        commands: r
    };
}
function x_(e, t, r = [], n = 0, s = !0) {
    return {
        state: {
            type: "closed",
            error: e,
            periodicRetryDelayMs: t.getPeriodicRetryDelay(n),
            periodicCycle: n,
            ...s === !1 ? {
                automaticRetry: !1
            } : {}
        },
        commands: r
    };
}
function ji(e, t, r = 0) {
    const n = t.getBackoffDelay(e);
    return {
        state: {
            type: "transient_failure",
            attempt: e,
            nextDelayMs: n,
            periodicCycle: r
        },
        commands: [
            {
                type: "start_backoff_timer",
                delayMs: n
            }
        ]
    };
}
function jw(e, t, r, n, s = 0) {
    if (!r) return qi(t, n, s, !1);
    const i = e + 1;
    return i >= Tl(n) ? qi(t, n, s) : ji(i, n, s);
}
function Vw(e, t, r) {
    switch(t.kind){
        case "connect_start":
            return sn(e, 0);
        case "connect_failure":
            return qi(t.error, r, 0, t.isRetryable);
        case "server_removed":
            return Ne;
        case "connect_success":
        case "transport_error":
        case "transport_closed":
        case "session_invalidated":
        case "idle_suspend":
        case "backoff_timer_expired":
        case "connection_stabilized":
        case "periodic_retry_expired":
        case "request_degraded":
        case "health_probe_due":
        case "health_probe_succeeded":
        case "health_probe_failed":
            return Ne;
        default:
            return t;
    }
}
function Yw(e, t, r) {
    switch(t.kind){
        case "connect_success":
            return {
                state: {
                    type: "connected",
                    attempt: e.attempt,
                    stabilized: !1,
                    probing: !1
                },
                commands: [
                    {
                        type: "cancel_backoff_timer"
                    },
                    {
                        type: "start_stability_timer",
                        delayMs: Gw(r)
                    }
                ]
            };
        case "connect_failure":
            return jw(e.attempt, t.error, t.isRetryable, r, e.periodicCycle);
        case "server_removed":
            return Il();
        case "connect_start":
        case "transport_error":
        case "transport_closed":
        case "idle_suspend":
        case "backoff_timer_expired":
        case "connection_stabilized":
        case "periodic_retry_expired":
        case "request_degraded":
        case "health_probe_due":
        case "health_probe_succeeded":
        case "health_probe_failed":
            return Ne;
        case "session_invalidated":
            return Ki(e, 0, [
                {
                    type: "initiate_connection"
                }
            ]);
        default:
            return t;
    }
}
function Xw(e, t, r) {
    switch(t.kind){
        case "connect_start":
            return Ne;
        case "connection_stabilized":
            return {
                state: {
                    type: "connected",
                    attempt: 0,
                    stabilized: !0,
                    probing: !1
                },
                commands: []
            };
        case "transport_error":
            if (t.isRetryable) {
                const n = e.stabilized ? 0 : e.attempt + 1;
                return n >= Tl(r) ? Pl(t.error, r, [
                    {
                        type: "cancel_stability_timer"
                    }
                ]) : {
                    state: {
                        type: "transient_failure",
                        attempt: n,
                        nextDelayMs: r.getBackoffDelay(n),
                        periodicCycle: 0
                    },
                    commands: [
                        {
                            type: "cancel_stability_timer"
                        },
                        {
                            type: "start_backoff_timer",
                            delayMs: r.getBackoffDelay(n)
                        }
                    ]
                };
            }
            return Pl(t.error, r, [
                {
                    type: "cancel_stability_timer"
                }
            ], 0, !1);
        case "transport_closed":
            if (t.isStdio) return x_("Client closed", r, [
                {
                    type: "cancel_stability_timer"
                }
            ]);
            {
                const n = e.stabilized ? 0 : e.attempt + 1;
                return n >= Tl(r) ? Pl("Transport closed", r, [
                    {
                        type: "cancel_stability_timer"
                    }
                ]) : {
                    state: {
                        type: "transient_failure",
                        attempt: n,
                        nextDelayMs: r.getBackoffDelay(n),
                        periodicCycle: 0
                    },
                    commands: [
                        {
                            type: "cancel_stability_timer"
                        },
                        {
                            type: "start_backoff_timer",
                            delayMs: r.getBackoffDelay(n)
                        }
                    ]
                };
            }
        case "session_invalidated":
            return Ki(e, 0, [
                {
                    type: "cancel_backoff_timer"
                },
                {
                    type: "cancel_stability_timer"
                },
                {
                    type: "initiate_connection"
                }
            ]);
        case "idle_suspend":
            return {
                state: {
                    type: "dormant"
                },
                commands: [
                    {
                        type: "cancel_stability_timer"
                    }
                ]
            };
        case "server_removed":
            return {
                state: {
                    type: "idle"
                },
                commands: [
                    {
                        type: "cancel_backoff_timer"
                    },
                    {
                        type: "cancel_stability_timer"
                    }
                ]
            };
        case "request_degraded":
            return {
                state: {
                    type: "degraded",
                    consecutiveFailures: 0,
                    reason: t.reason,
                    probing: !1
                },
                commands: [
                    {
                        type: "cancel_stability_timer"
                    }
                ]
            };
        case "health_probe_due":
            return e.probing ? Ne : {
                state: {
                    ...e,
                    probing: !0
                },
                commands: []
            };
        case "health_probe_succeeded":
            return e.probing ? {
                state: {
                    ...e,
                    probing: !1
                },
                commands: []
            } : Ne;
        case "health_probe_failed":
            return {
                state: {
                    type: "degraded",
                    consecutiveFailures: 1,
                    reason: t.error,
                    probing: !1
                },
                commands: [
                    {
                        type: "cancel_stability_timer"
                    }
                ]
            };
        case "connect_success":
        case "connect_failure":
        case "backoff_timer_expired":
        case "periodic_retry_expired":
            return Ne;
        default:
            return t;
    }
}
function Jw(e, t, r) {
    switch(t.kind){
        case "health_probe_due":
            return e.probing ? Ne : {
                state: {
                    ...e,
                    probing: !0
                },
                commands: []
            };
        case "health_probe_succeeded":
            return {
                state: {
                    type: "connected",
                    attempt: 0,
                    stabilized: !0,
                    probing: !1
                },
                commands: []
            };
        case "health_probe_failed":
            {
                const n = e.consecutiveFailures + 1;
                return n >= Kw(r) ? ji(0, r) : {
                    state: {
                        type: "degraded",
                        consecutiveFailures: n,
                        reason: t.error,
                        probing: !1
                    },
                    commands: []
                };
            }
        case "request_degraded":
            return {
                state: {
                    type: "degraded",
                    consecutiveFailures: 0,
                    reason: t.reason,
                    probing: e.probing
                },
                commands: []
            };
        case "transport_error":
            return t.isRetryable ? ji(0, r) : qi(t.error, r, 0, !1);
        case "transport_closed":
            return t.isStdio ? x_("Client closed", r) : ji(0, r);
        case "session_invalidated":
            return Ki(e, 0, [
                {
                    type: "cancel_backoff_timer"
                },
                {
                    type: "initiate_connection"
                }
            ]);
        case "server_removed":
            return {
                state: {
                    type: "idle"
                },
                commands: []
            };
        case "connect_start":
        case "connect_success":
        case "connect_failure":
        case "idle_suspend":
        case "backoff_timer_expired":
        case "connection_stabilized":
        case "periodic_retry_expired":
            return Ne;
        default:
            return t;
    }
}
function Zw(e, t) {
    switch(t.kind){
        case "backoff_timer_expired":
            return {
                state: {
                    type: "connecting",
                    attempt: e.attempt,
                    generation: kl(e),
                    periodicCycle: e.periodicCycle
                },
                commands: [
                    {
                        type: "initiate_connection"
                    }
                ]
            };
        case "connect_start":
            return Ki(e, 0, [
                {
                    type: "cancel_backoff_timer"
                }
            ]);
        case "server_removed":
            return Il();
        case "connect_success":
        case "connect_failure":
        case "transport_error":
        case "transport_closed":
        case "session_invalidated":
        case "idle_suspend":
        case "connection_stabilized":
        case "periodic_retry_expired":
        case "request_degraded":
        case "health_probe_due":
        case "health_probe_succeeded":
        case "health_probe_failed":
            return Ne;
        default:
            return t;
    }
}
function Qw(e, t, r) {
    switch(t.kind){
        case "connect_start":
            return sn(e, 0);
        case "periodic_retry_expired":
            {
                const n = L_(r);
                return n !== void 0 && e.periodicCycle >= n ? e.exhausted ? Ne : {
                    state: {
                        ...e,
                        exhausted: !0
                    },
                    commands: []
                } : sn(e, 0, e.periodicCycle + 1);
            }
        case "server_removed":
            return {
                state: {
                    type: "idle"
                },
                commands: []
            };
        case "connect_success":
        case "connect_failure":
        case "transport_error":
        case "transport_closed":
        case "session_invalidated":
        case "idle_suspend":
        case "backoff_timer_expired":
        case "connection_stabilized":
        case "request_degraded":
        case "health_probe_due":
        case "health_probe_succeeded":
        case "health_probe_failed":
            return Ne;
        default:
            return t;
    }
}
function eE(e, t, r) {
    switch(t.kind){
        case "connect_start":
            return sn(e, 0);
        case "periodic_retry_expired":
            {
                const n = L_(r);
                return n !== void 0 && e.periodicCycle >= n ? e.exhausted ? Ne : {
                    state: {
                        ...e,
                        exhausted: !0
                    },
                    commands: []
                } : sn(e, 0, e.periodicCycle + 1);
            }
        case "server_removed":
            return {
                state: {
                    type: "idle"
                },
                commands: []
            };
        case "connect_success":
        case "connect_failure":
        case "transport_error":
        case "transport_closed":
        case "session_invalidated":
        case "idle_suspend":
        case "backoff_timer_expired":
        case "connection_stabilized":
        case "request_degraded":
        case "health_probe_due":
        case "health_probe_succeeded":
        case "health_probe_failed":
            return Ne;
        default:
            return t;
    }
}
function tE(e, t) {
    switch(t.kind){
        case "connect_start":
        case "session_invalidated":
            return sn(e, 0);
        case "server_removed":
            return Il();
        case "idle_suspend":
        case "connect_success":
        case "connect_failure":
        case "transport_error":
        case "transport_closed":
        case "backoff_timer_expired":
        case "connection_stabilized":
        case "periodic_retry_expired":
        case "request_degraded":
        case "health_probe_due":
        case "health_probe_succeeded":
        case "health_probe_failed":
            return Ne;
        default:
            return t;
    }
}
function M_(e, t, r) {
    switch(e.type){
        case "idle":
            return Vw(e, t, r);
        case "connecting":
            return Yw(e, t, r);
        case "connected":
            return Xw(e, t, r);
        case "dormant":
            return tE(e, t);
        case "degraded":
            return Jw(e, t, r);
        case "transient_failure":
            return Zw(e, t);
        case "failed":
            return Qw(e, t, r);
        case "closed":
            return eE(e, t, r);
        default:
            return e;
    }
}
function rE(e, t) {
    return t.type === "needsUserAuth" ? {
        type: "needsAuth",
        authorizationUrl: t.authorizationUrl
    } : t.type === "expired" ? {
        type: "error",
        error: t.error
    } : e.type === "failed" ? e.automaticRetry === !1 ? {
        type: "error",
        error: e.error,
        isRetryable: !1
    } : {
        type: "error",
        error: e.error
    } : e.type === "closed" && e.error ? e.automaticRetry === !1 ? {
        type: "error",
        error: e.error,
        isRetryable: !1
    } : {
        type: "error",
        error: e.error
    } : e.type === "connecting" ? {
        type: "initializing"
    } : e.type === "degraded" ? {
        type: "degraded",
        reason: e.reason
    } : (e.type === "connected" || e.type === "dormant") && (t.type === "valid" || t.type === "unknown") ? {
        type: "connected"
    } : e.type === "transient_failure" ? {
        type: "connected"
    } : {
        type: "disconnected"
    };
}
export function nE(e, t, r, n) {
    let s = e, i = t, o = [];
    switch(r.target){
        case "connection":
            {
                const c = t.type === "needsUserAuth" || t.type === "expired";
                if (!((r.kind === "backoff_timer_expired" || r.kind === "periodic_retry_expired") && c)) {
                    const { target: l, ...u } = r, f = M_(e, u, n.backoff);
                    if (f.state !== null && (s = f.state), o = f.commands, r.kind === "connect_success" && t.type === "expired") {
                        const p = O_(t, {
                            kind: "operation_succeeded"
                        });
                        p !== null && (i = p);
                    }
                }
                break;
            }
        case "auth":
            {
                const c = t, { target: l, ...u } = r, f = O_(t, u);
                f !== null && (i = f);
                const p = c.type === "needsUserAuth" || c.type === "expired", g = i.type !== "needsUserAuth" && i.type !== "expired", _ = s.type === "transient_failure" || s.type === "failed" || s.type === "closed";
                if (p && g && _) {
                    const y = M_(s, {
                        kind: "connect_start"
                    }, n.backoff);
                    y.state !== null && (s = y.state), o.push(...y.commands), o.push({
                        type: "initiate_connection"
                    });
                }
                break;
            }
        default:
            return r;
    }
    const a = rE(s, i);
    return {
        connectionState: s,
        authState: i,
        commands: o,
        projectedStatus: a
    };
}
function iE(e) {
    return e instanceof Error && e.name === "McpOAuthLoopbackUnavailableError";
}
function U_(e) {
    return e instanceof Error && e.name === Ol;
}
function oE(e) {
    if (e === null || typeof e != "object") return !1;
    const t = e.name, r = e.errorCode;
    if (!(t === "InvalidRequestError" || typeof r == "string" && r.toLowerCase() === "invalid_request")) return !1;
    const s = e.message;
    return typeof s == "string" && H_.some((i)=>i.test(s));
}
function aE(e) {
    if (e === null || typeof e != "object") return !1;
    const t = e.name;
    if (typeof t == "string" && Cl.has(t)) return !0;
    const r = e.errorCode;
    return typeof r == "string" && Vi.has(r.toLowerCase()) ? !0 : oE(e);
}
function cE(e) {
    return /Failed to open SSE stream:?\s*$/i.test(e.trim());
}
function B_(e) {
    const t = e.code, n = (e instanceof Error || typeof e.message == "string" ? e.message : "").match(/\(HTTP (\d+)\)|Non-200 status code \((\d+)\)|\bHTTP\s+(\d{3})\b/i), s = n?.[1] ?? n?.[2] ?? n?.[3], i = s !== void 0 ? parseInt(s, 10) : void 0;
    if (typeof t == "number" && t >= 100) return i !== void 0 && an.has(i) && !an.has(t) ? i : t;
    if (typeof t == "string" && /^\d{3}$/.test(t)) {
        const o = Number.parseInt(t, 10);
        return o >= 100 && o <= 599 ? o : i;
    }
    return i;
}
export function Ot(e) {
    if (!e || typeof e != "object") return;
    const t = B_(e);
    if (t !== void 0) return t;
    const r = e.cause;
    if (r && typeof r == "object") return B_(r);
}
function z_(e) {
    const t = e.message ?? "", r = Ot(e);
    if (cE(t)) return r !== void 0 && an.has(r);
    if (q_.test(t)) return !1;
    const s = e.code ?? e.cause?.code;
    return typeof s == "string" && Yi.has(s) || r !== void 0 && an.has(r) ? !0 : Xi.some((i)=>i.test(t));
}
function lE(e) {
    return X_.some((t)=>t.test(e));
}
function uE(e) {
    for (const t of Yi)if (e.includes(t)) return !0;
    return Xi.some((t)=>t.test(e));
}
function W_(e) {
    return /MCP error -32000:\s*Connection closed/i.test(e.message ?? "");
}
function G_(e, t) {
    return [
        e,
        ...t
    ].map((n)=>n.toLowerCase()).some((n)=>n.includes("mcp-remote"));
}
function dE(e, t, r, n, s) {
    if (e instanceof Error) {
        const a = e.code ?? e.cause?.code;
        if (typeof a == "string" && Y_.has(a)) return !1;
        if (G_(n, s) && Wi(e.message ?? "") || !W_(e) && z_(e)) return !0;
    }
    const i = t;
    if (i.trim().length > 0) {
        if (lE(i)) return !1;
        if (uE(i)) return !0;
    }
    return e instanceof Error && W_(e) && i.trim().length === 0 && !G_(n, s) ? !1 : !r;
}
export function hE(e) {
    const r = e.code ?? e.cause?.code;
    if (typeof r == "string" && j_.has(r)) return !0;
    const n = e.message ?? "";
    return V_.some((s)=>s.test(n));
}
import { UnauthorizedError as fE } from "@modelcontextprotocol/sdk/client/auth.js";
import { InvalidClientError as pE, InvalidGrantError as gE, InvalidTokenError as _E, OAuthError as mE, UnauthorizedClientError as vE } from "@modelcontextprotocol/sdk/server/auth/errors.js";
function J_(e) {
    if (typeof e == "object" && e !== null && "code" in e) return e.code;
}
function yE(e) {
    return typeof e == "string" && Vi.has(e.toLowerCase());
}
function Z_(e) {
    return e.message.includes("Received a response for an unknown message ID");
}
export function Zt(e) {
    if (e instanceof fE || e instanceof gE || e instanceof pE || e instanceof vE || e instanceof _E || e instanceof mE && yE(e.errorCode) || aE(e)) return !0;
    if (e instanceof Error) {
        const t = e.message.toLowerCase();
        if (t.includes("unauthorized") || /\b401\b/.test(t) || J_(e) === 401) return !0;
    }
    return !1;
}
function Q_(e) {
    return e.message.includes("SSE stream disconnected") ? !0 : !e.message.startsWith("SSE error:") || Ot(e) !== void 0 ? !1 : !e.message.includes("Maximum reconnection attempts");
}
export function ln(e, t) {
    return t !== "streamableHttp" || !(e instanceof Error) ? !1 : Ot(e) === 404 || J_(e) === 404 || e.message.includes("Maximum reconnection attempts") || e.message.includes("MCP error -32000: Connection closed") ? !0 : SE(e.message);
}
function SE(e) {
    const t = e.match(/MCP error -3200[01]:\s*(.+)/i);
    if (t) {
        const n = t[1];
        if (/session/i.test(n)) return !0;
    }
    const r = e.match(/\{[\s\S]*"jsonrpc"[\s\S]*\}/);
    if (r) try {
        const n = JSON.parse(r[0]), s = n?.error?.code;
        if ((s === -32e3 || s === -32001) && typeof n?.error?.message == "string" && /session/i.test(n.error.message)) return !0;
    } catch  {}
    return !1;
}
function bE(e) {
    if (e instanceof on) return {
        reason: "sibling_refreshed",
        retryable: !0
    };
    if (U_(e)) return {
        reason: "network",
        retryable: !0
    };
    if (iE(e)) return {
        reason: "oauth_loopback_unavailable",
        retryable: !1
    };
}
export function qe(e, t) {
    const r = bE(e);
    if (r !== void 0) return r;
    const n = e instanceof Error ? e.message : String(e), s = e instanceof Error ? z_(e) : !1, i = Wi(n), o = s || i;
    if (Zt(e)) return {
        reason: "auth",
        retryable: !1
    };
    if (t !== void 0 && ln(e, t)) return {
        reason: "session_invalidated",
        retryable: !0,
        httpStatus: 404
    };
    const a = e instanceof Error ? Ot(e) : void 0;
    if (a !== void 0) {
        if (a >= 500) return {
            reason: "http_5xx",
            retryable: o,
            httpStatus: a
        };
        if (a >= 400) return {
            reason: "http_4xx",
            retryable: o,
            httpStatus: a
        };
    }
    return i ? {
        reason: "timeout",
        retryable: !0,
        httpStatus: a
    } : s ? {
        reason: "network",
        retryable: !0,
        httpStatus: a
    } : {
        reason: "unknown",
        retryable: o,
        httpStatus: a
    };
}
export function wE(e, t, r) {
    if (Q_(e) || Z_(e)) return "suppress";
    const n = r ?? qe(e, t);
    return n.reason === "session_invalidated" ? "warn" : n.retryable ? "debug" : "warn";
}
export function EE(e, t) {
    if (t) return !0;
    switch(e.kind){
        case "connect_failure":
        case "transport_error":
            return !e.isRetryable;
        case "transport_closed":
            return e.isStdio;
        case "session_invalidated":
            return !1;
        default:
            return e;
    }
}
export function AE(e, t) {
    const { authState: r, transportType: n } = t;
    if (Q_(e)) return [];
    if (Z_(e)) return [];
    if (r.type === "needsUserAuth") return [];
    const s = qe(e, n);
    if (s.reason === "auth") return [
        {
            target: "auth",
            kind: "operation_auth_failed",
            error: e.message
        }
    ];
    if (s.reason === "session_invalidated") return [
        {
            target: "connection",
            kind: "session_invalidated"
        }
    ];
    if (n !== "stdio") {
        const i = s.httpStatus;
        if (i === 429 || i === 503) return [
            {
                target: "connection",
                kind: "request_degraded",
                reason: `HTTP ${i}`
            }
        ];
    }
    return n !== "stdio" && s.retryable ? [
        {
            target: "connection",
            kind: "transport_error",
            error: e.message,
            isRetryable: !0
        }
    ] : [
        {
            target: "connection",
            kind: "transport_error",
            error: e.message,
            isRetryable: !1
        }
    ];
}
export function RE(e) {
    const { authState: t, transportType: r } = e;
    return t.type === "needsUserAuth" ? [] : [
        {
            target: "connection",
            kind: "transport_closed",
            isStdio: r === "stdio"
        }
    ];
}
export function tm(e) {
    const { result: t, error: r, authState: n } = e;
    return r !== void 0 ? Zt(r) && n.type !== "needsUserAuth" ? [
        {
            target: "auth",
            kind: "operation_auth_failed",
            error: r instanceof Error ? r.message : String(r)
        }
    ] : [] : t === void 0 ? [] : t.isError ? [
        {
            target: "auth",
            kind: "operation_succeeded"
        }
    ] : [
        {
            target: "auth",
            kind: "operation_succeeded"
        }
    ];
}
export function rm(e) {
    const { authError: t, authState: r } = e;
    return t !== void 0 ? r.type !== "needsUserAuth" ? [
        {
            target: "auth",
            kind: "operation_auth_failed",
            error: t
        }
    ] : [] : [
        {
            target: "auth",
            kind: "operation_succeeded"
        }
    ];
}
export function PE(e) {
    return !e.ok && e.needsAuth !== !0 && e.sessionReuseRequired === !0;
}
export function CE(e) {
    Ji = e;
}
export function LE() {
    return Ji;
}
export function im() {
    if (!Ji) throw new Error("McpLifecycleOAuthClientProviderFactory has not been registered. The host (cursor-mcp or mcpProcess) must call setMcpLifecycleOAuthClientProviderFactory() at activation.");
    return Ji;
}
var Ji;
function xE() {
    return Ml;
}
export function Qt(e, t, r = "distribution", n = []) {
    if (!cm) return;
    const s = [
        `lease_connection:${Ml}`,
        ...n
    ];
    try {
        cm.emit(e, t, r, s);
    } catch  {}
}
function Zi() {
    return lm;
}
export function om(e) {
    return um ? um(e) : {
        mcpAuthMeta: e
    };
}
export function am(e) {
    const t = [
        `failure_reason:${e.reason}`,
        `retryable:${String(e.retryable)}`
    ];
    return e.httpStatus !== void 0 && t.push(`status_code:${String(e.httpStatus)}`), t;
}
export function Qi({ identifier: e, phase: t, error: r, serverType: n, classification: s, captureException: i = !0, extraData: o }) {
    const a = s ?? qe(r, n), c = r instanceof Error ? r.message : String(r), l = {
        identifier: e,
        phase: t,
        reason: a.reason,
        retryable: a.retryable,
        http_status: a.httpStatus,
        server_type: n,
        ...o
    };
    if (Dl && (Dl.addBreadcrumb({
        category: "mcp.v2.failure",
        level: "error",
        message: c,
        data: l
    }), i)) {
        const u = new Error(c);
        u.name = "McpV2Error", u.stack = r instanceof Error ? r.stack : void 0, u.mcpFailure = l, Dl.captureException(u);
    }
    return a;
}
var cm, Dl, um;
export function ME(e, t) {
    return e instanceof dm || t?.aborted === !0;
}
function Nl(e, t) {
    if (t === void 0) return {
        headers: t,
        cursorAuthHeaderValue: void 0,
        cursorAuthOrigin: void 0
    };
    const r = Object.entries(t), n = r.find(([i])=>i.toLowerCase() === fi);
    if (n === void 0) return {
        headers: t,
        cursorAuthHeaderValue: void 0,
        cursorAuthOrigin: void 0
    };
    let s;
    try {
        s = new URL(e).origin;
    } catch  {
        s = void 0;
    }
    return {
        headers: Object.fromEntries(r.filter(([i])=>i.toLowerCase() !== fi)),
        cursorAuthHeaderValue: n[1],
        cursorAuthOrigin: s
    };
}
function DE(e, t, r) {
    return async (n, s)=>{
        let i;
        try {
            i = new URL(typeof n == "string" ? n : n.toString()).origin;
        } catch  {
            return r(n, s);
        }
        if (i !== t) return r(n, s);
        const o = await e();
        if (o === void 0 || o.length === 0) return r(n, s);
        const a = new Headers(s?.headers);
        return a.set(fi, o), r(n, {
            ...s,
            headers: a,
            redirect: "manual"
        });
    };
}
function Ul(e) {
    if (!(e instanceof Error)) return !1;
    const t = e, r = e.cause?.code;
    return t.code === "ECONNREFUSED" || r === "ECONNREFUSED" ? !0 : e.message.includes("ECONNREFUSED");
}
function NE(e) {
    if (!e || typeof e != "object") return;
    const t = e.code;
    if (typeof t == "number" && t >= 100 && t <= 599) return t;
    if (typeof t == "string" && /^\d{3}$/.test(t) && Number(t) >= 100 && Number(t) <= 599) return Number(t);
    const r = e instanceof Error || typeof e.message == "string" ? e.message : void 0;
    if (!r) return;
    const n = r.match(/\bHTTP\s+(\d{3})\b/i);
    if (!n?.[1]) return;
    const s = Number.parseInt(n[1], 10);
    return Number.isNaN(s) ? void 0 : s;
}
function UE(e) {
    const t = NE(e);
    return t !== void 0 ? t === 400 || t === 404 || t === 405 : e instanceof Error && e.message.toLowerCase().includes("sessionid must be provided") ? !0 : Ul(e);
}
export function $l(e) {
    const t = hn.get(e);
    if (t === void 0) return;
    const r = t - Date.now();
    if (r <= 0) {
        hn.delete(e);
        return;
    }
    return r;
}
function $E(e) {
    if (!e) return;
    const t = Number(e);
    if (Number.isFinite(t) && t > 0) return Math.ceil(t * 1e3);
    const r = Date.parse(e);
    if (Number.isFinite(r)) return Math.max(0, r - Date.now());
}
export function FE(e) {
    hn.delete(e);
}
export function gm(e, t) {
    return async (r, n)=>{
        if (e !== void 0) {
            const i = hn.get(e);
            if (i !== void 0 && Date.now() < i) {
                const o = Math.max(1, Math.ceil((i - Date.now()) / 1e3));
                return new Response(JSON.stringify({
                    jsonrpc: "2.0",
                    error: {
                        code: -32004,
                        message: "Too many requests. Please try again later."
                    }
                }), {
                    status: 429,
                    headers: {
                        "content-type": "application/json",
                        "retry-after": String(o)
                    }
                });
            }
        }
        const s = await t(r, n);
        if (e !== void 0 && s.status === 429) {
            const i = $E(s.headers.get("retry-after"));
            i !== void 0 && i > 0 && hn.set(e, Date.now() + Math.min(i, _m));
        }
        return s;
    };
}
function HE(e) {
    const t = Ur(e);
    return {
        debug: (r, n)=>t.debug(r, n),
        info: (r, n)=>t.info(r, n),
        warn: (r, n)=>t.warn(r, n),
        error: (r, n, s)=>t.error(r, n instanceof Error ? n : void 0, s)
    };
}
export function Fl(e) {
    return {
        logger: HE(e.identifier),
        metadata: {
            identifier: e.identifier,
            source: "mcp-oauth",
            oauthFlow: !0,
            commandsVersion: e.commandsVersion ?? "v2",
            transportType: e.transportType ?? "oauth",
            ...e.serverUrl ? {
                serverUrl: _f(e.serverUrl, {
                    includePath: !1
                })
            } : {},
            ...e.clientSurface !== void 0 ? {
                clientSurface: e.clientSurface
            } : {},
            ...e.processRegistryKey !== void 0 ? {
                processRegistryKey: e.processRegistryKey
            } : {},
            ...e.resolvedConfigHash !== void 0 ? {
                resolvedConfigHash: e.resolvedConfigHash
            } : {},
            ...e.extraMetadata
        }
    };
}
export function Hl(e) {
    const t = Fl(e);
    return _5({
        fetch: gm(e.identifier, e.baseFetch),
        logger: t.logger,
        metadata: t.metadata,
        logSuccessfulExchanges: !1
    });
}
export function to(e) {
    return Fl({
        identifier: e.identifier,
        serverUrl: e.serverUrl,
        transportType: e.transportType,
        commandsVersion: e.commandsVersion,
        clientSurface: e.host ? e.host.isGlass() ? "glass" : "ide" : void 0,
        extraMetadata: {
            source: "cursor-mcp",
            configuredServerType: e.serverInfo?.type,
            ...e.extraMetadata
        }
    });
}
export function _s(e, t, r, n) {
    const s = n ?? e?.fetch ?? (globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0);
    if (s === void 0) return;
    const i = typeof r.metadata.identifier == "string" ? r.metadata.identifier : void 0;
    if (i === void 0) return;
    const { identifier: o, transportType: a, commandsVersion: c, clientSurface: l, ...u } = r.metadata;
    return Hl({
        identifier: i,
        baseFetch: s,
        transportType: t,
        commandsVersion: c,
        clientSurface: l,
        extraMetadata: u
    });
}
export function mm(e) {
    const t = e.baseFetch ?? (globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0);
    if (t !== void 0) return _s(e.host, e.transportType, to({
        identifier: e.identifier,
        host: e.host,
        serverInfo: e.serverInfo,
        serverUrl: e.serverUrl,
        transportType: e.transportType,
        commandsVersion: e.commandsVersion,
        extraMetadata: e.extraMetadata
    }), t);
}
function BE(e) {
    if (Cl.has(e.name)) return !0;
    const t = e.errorCode;
    return typeof t == "string" && Vi.has(t.toLowerCase());
}
function zE(e) {
    const t = e.cause, r = e.code ?? (t && typeof t == "object" && "code" in t ? t.code : void 0);
    return typeof r == "string" ? r : void 0;
}
function WE(e) {
    return bm.test(e) ? !1 : wm.some((t)=>t.test(e));
}
export async function GE(e) {
    if (!e) return ro;
    try {
        const t = await e(ym);
        return !t || typeof t != "object" ? ro : {
            classifyBeforeWipe: typeof t.classifyBeforeWipe == "boolean" ? t.classifyBeforeWipe : !1
        };
    } catch  {
        return ro;
    }
}
export function zl(e) {
    if (!(e instanceof Error) || Hf(e, {
        allowInvalidGrantGeneric: !0
    })) return !1;
    if (Sm.has(e.name)) return !0;
    const t = e.message ?? "";
    if (Wi(t)) return !0;
    const r = Ot(e);
    if (r !== void 0 && an.has(r) || (r === 403 || r === 407) && !BE(e)) return !0;
    const n = zE(e);
    return !!(n !== void 0 && Yi.has(n) || WE(t));
}
export function KE(e) {
    return zl(e);
}
export function qE(e, t) {
    const r = new Error(e instanceof Error ? e.message : t);
    return r.name = Ol, e !== void 0 && (r.cause = e), e instanceof Error && e.stack && (r.stack = e.stack), r;
}
import { CallToolResultSchema as Em } from "@modelcontextprotocol/sdk/types.js";
export function de(e) {
    return Ur(e);
}
export function jE(e) {
    return e.replace(/[\s.]/g, "_").replace(/[^a-zA-Z0-9_-]/g, "");
}
export function ms(e, t, r) {
    const n = `Invalid ${t} response`;
    return de(e).error(`${n}: ${JSON.stringify(r)}`), {
        kind: "invalid_response",
        items: [],
        message: n
    };
}
export function VE(e) {
    if (!(e instanceof Error)) return !1;
    const t = e.message.toLowerCase();
    return t.includes("method not found") || t.includes("unsupported") || t.includes("not supported") || t.includes("-32601");
}
export function ct(e, t, r = "distribution", n = []) {
    Qt(e, t, r, [
        "commands_version:v2",
        `mcp_version:${Zi()}`,
        ...n
    ]);
}
export function vs({ durationMs: e, status: t, transport: r, commandsVersion: n = "v1", failureReason: s, retryable: i, httpStatusCode: o }) {
    const a = [
        `mcp_version:${Zi()}`,
        `status:${t}`,
        `transport:${r}`,
        `commands_version:${n}`
    ];
    s !== void 0 && a.push(`failure_reason:${s}`), i !== void 0 && a.push(`retryable:${String(i)}`), o !== void 0 && a.push(`status_code:${String(o)}`), Qt("mcp.ext.connection_time_ms", e, "distribution", a), Qt("mcp.ext.connection_attempts", 1, "increment", a);
}
function YE(e, t) {
    return t === "stdio" ? !1 : e.reason === "network" || e.reason === "timeout" || e.reason === "session_invalidated" ? !0 : e.httpStatus === 429 || e.httpStatus === 503;
}
function XE(e, t) {
    return t.failure.httpStatus === 429 || t.failure.httpStatus === 503 ? `${e}: HTTP ${t.failure.httpStatus}` : t.failure.reason === "session_invalidated" ? `${e}: session invalidated` : `${e}: ${t.message || t.failure.reason}`;
}
export function km(e, t) {
    const { offerings: r, outcomes: n } = e, s = r.tools.length > 0 || r.prompts.length > 0 || r.resources.length > 0, i = Object.entries(n), o = i.some(([, u])=>u.kind === "success"), a = i.some(([, u])=>u.kind === "failure"), c = i.some(([, u])=>u.kind === "aborted");
    if (o) return {
        hasResults: s,
        hasSuccessfulSubCall: o,
        isAuthoritative: !0,
        wasAborted: c
    };
    const l = i.flatMap(([u, d])=>d.kind !== "failure" || !YE(d.failure, t) ? [] : [
            XE(u, d)
        ]);
    return {
        hasResults: s,
        hasSuccessfulSubCall: o,
        isAuthoritative: !a && !c,
        wasAborted: c,
        degradedReason: l.length > 0 ? l.join(", ") : void 0
    };
}
export function Im(e) {
    let t;
    try {
        t = new URL(e).hostname.toLowerCase();
    } catch  {
        return !1;
    }
    return Pm.has(t) || Ia(e)?.unauthenticatedConnect === !0;
}
function ZE(e, t, r) {
    return Ta(e) ? async (n, s)=>{
        const i = typeof n == "string" ? n : n.href;
        if (!Ta({
            identifier: e.identifier,
            serverUrl: i
        })) return r(n, s);
        const o = await t();
        if (!o?.trim()) throw new Error("Cursor access token is required for Origin MCP");
        const a = new Headers(s?.headers);
        return a.set("Authorization", `Bearer ${o}`), a.has(ql) || a.set(ql, globalThis.crypto.randomUUID()), r(n, {
            ...s,
            headers: a,
            redirect: "manual"
        });
    } : r;
}
function e8(e) {
    return e?.getOAuthRefreshDiagnosticsForLog?.()?.refreshRetryClassificationEnabled === !0;
}
function Cm(e, t, r) {
    if (U_(e) || r?.isRetryableOAuthRefreshError?.(e)) return !0;
    if (e instanceof Error) {
        const n = qe(e, t);
        if (n.retryable && (n.reason === "network" || n.reason === "timeout" || n.reason === "sibling_refreshed")) return !0;
    }
    return !1;
}
function jl(e, t, r) {
    if (!e8(r) || Zt(e)) return !1;
    if (Cm(e, t, r)) return !0;
    if (e instanceof Error) {
        const s = e.cause;
        if (!Zt(s) && Cm(s, t, r)) return !0;
    }
    const n = r?.getOAuthRefreshDiagnosticsForLog?.();
    if (n?.precededByRefreshError) {
        const s = typeof n.errorMessage == "string" ? n.errorMessage : void 0;
        if (s && zl(new Error(s))) return !0;
    }
    return !1;
}
import { createHash as r8 } from "node:crypto";
import * as n8 from "node:fs";
import * as ys from "node:os";
import * as no from "node:path";
import { auth as s8 } from "@modelcontextprotocol/sdk/client/auth.js";
import { SSEClientTransport as Lm } from "@modelcontextprotocol/sdk/client/sse.js";
import { StdioClientTransport as i8 } from "@modelcontextprotocol/sdk/client/stdio.js";
import { StreamableHTTPClientTransport as o8 } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
function he(e) {
    return Ur(e);
}
function so() {
    return Ur("mcp-core.transport-factory");
}
function Vl(e) {
    try {
        return process.kill(e, 0), !0;
    } catch  {
        return !1;
    }
}
async function a8(e, t = 4500) {
    if (e === null) return;
    const r = Date.now() + t;
    for(; Date.now() < r;){
        if (!Vl(e)) return;
        await new Promise((n)=>setTimeout(n, 50));
    }
    if (Vl(e)) {
        try {
            process.kill(e, "SIGKILL");
        } catch  {
            return;
        }
        for(; Date.now() < r + 500;){
            if (!Vl(e)) return;
            await new Promise((n)=>setTimeout(n, 50));
        }
    }
}
function c8(e) {
    const t = e.close.bind(e);
    let r;
    return e.close = async ()=>{
        if (r) return r;
        const n = e.pid;
        return r = (async ()=>{
            try {
                await t();
            } finally{
                await a8(n);
            }
        })(), r;
    }, {
        waitForClose: ()=>r ?? Promise.resolve()
    };
}
function l8(e, t) {
    return be("stdioConnectFailuresAreNonRetryable", {
        identifier: e,
        serverInfo: t
    }) ?? !0;
}
function u8(e) {
    return e === void 0 ? "no_config" : e.enabled === !0 ? "sandbox_enabled" : e.enabled === !1 ? "controls_disabled" : "missing_enabled";
}
function Yl(e) {
    return e?.length ?? 0;
}
function d8(e) {
    if (e !== void 0) return r8("sha256").update(Cg(e)).digest("hex");
}
function xm(e) {
    if (!e) return;
    const t = e.toLowerCase();
    return t.includes("binary") ? "binary_unavailable" : t.includes("kernel") || t.includes("exit code 2") ? "unsupported_kernel" : t.includes("windows") ? "unsupported_platform" : t.includes("preflight") ? "preflight_failed" : "unknown";
}
function h8(e, t) {
    const r = u8(t), n = xh(t) !== void 0, s = d8(t), i = Yl(t?.mcpNetworkAllowlist), o = Yl(t?.mcpNetworkDenylist), a = Yl(t?.localAgentNetworkAllowlist), c = {
        event: "mcp_stdio_spawn_policy_decision",
        commandsVersion: "v2",
        sandboxed: n,
        sandboxReason: r,
        networkControlsEnabled: t?.enabled === !0,
        mcpNetworkMode: t?.mcpNetworkMode,
        mcpNetworkAllowlistCount: i,
        mcpNetworkDenylistCount: o,
        localAgentNetworkAllowlistCount: a,
        sandboxPolicyHash: s,
        hasMcpNetworkAllowlist: i > 0,
        hasMcpNetworkDenylist: o > 0,
        hasLocalAgentNetworkAllowlist: a > 0,
        win32UserExtensionUnsandbox: t?.win32UserExtensionUnsandbox === !0
    };
    he(e).info(`MCP stdio spawn policy decision: sandboxed=${String(n)}, sandboxReason=${r}, networkControlsEnabled=${String(t?.enabled === !0)}, mcpNetworkMode=${t?.mcpNetworkMode ?? "unset"}, mcpNetworkAllowlistCount=${i}, mcpNetworkDenylistCount=${o}, localAgentNetworkAllowlistCount=${a}, sandboxPolicyHash=${s ?? "none"}`, c), Qt("mcp.ext.stdio_spawn_policy", 1, "increment", [
        "commands_version:v2",
        `mcp_version:${Zi()}`,
        `sandboxed:${String(n)}`,
        `sandbox_reason:${r}`,
        `network_controls_enabled:${String(t?.enabled === !0)}`
    ]), t?.win32UserExtensionUnsandbox === !0 && Qt("mcp.ext.win32_user_extension_stdio_unsandbox", 1, "increment", [
        "commands_version:v2",
        `mcp_version:${Zi()}`
    ]);
}
function Xl(e) {
    if (oo) return oo;
    let t = "unknown";
    try {
        const n = no.join(e, "product.json");
        t = JSON.parse(n8.readFileSync(n, "utf8")).version || t;
    } catch (n) {
        so().warn(`Failed to read Cursor version from product.json, using VSCode version as fallback: ${n instanceof Error ? n.message : String(n)}`);
    }
    const r = `${ys.platform()} ${ys.arch()}`;
    return oo = `Cursor/${t} (${r})`, oo;
}
export function io(e, t) {
    const r = t;
    if (!r || r.length === 0) return e.split(" ").some(Bm) ? so().warn("No workspace folders found, using current path for . expansion") : so().debug("No workspace folders found; input has no expandable path segments"), e;
    const n = r[0].uri.fsPath, s = (o)=>no.join(n, o.replace(/^\.(?:[\\/])?/, "")), i = e.split(" ");
    i[0].startsWith("~") ? i[0] = no.join(ys.homedir(), i[0].slice(1)) : ao(i[0]) && (i[0] = s(i[0]));
    for(let o = 1; o < i.length; o++)i[o].startsWith("~") ? i[o] = no.join(ys.homedir(), i[o].slice(1)) : ao(i[o]) && (i[o] = s(i[o]));
    return i.join(" ");
}
function Mm(e) {
    return Ia(e.serverUrl)?.rejectsCustomSchemeRedirects === !0 || e.restMcpProviderMetadata?.rejectsCustomSchemeRedirects === !0;
}
export function Dm(e) {
    return e.hostedCallbackGate && !Mm(e) && Jl(e);
}
export function Jl(e) {
    if (Mm(e)) return !0;
    if (e.config?.enabled === !1) return !1;
    const t = e.config?.denylist ?? [], r = wt(e.serverUrl);
    return !t.some((n)=>wt(n) === r);
}
function Nm(e) {
    return Object.entries(e ?? {}).some(([t, r])=>t.toLowerCase() === "authorization" && r.trim().length > 0);
}
function Um(e, t, r) {
    if (!t.createHttpFetch) return;
    const n = t.createHttpFetch({
        identifier: e,
        serverUrl: r.serverUrl
    });
    if (!n) {
        he(e).warn("Host returned no HTTP fetch for MCP server; falling back to default fetch", {
            serverUrl: r.serverUrl
        });
        return;
    }
    return n;
}
function $m(e, t) {
    if (e.cursorAuthHeaderValue === void 0 || e.cursorAuthOrigin === void 0) return t;
    const r = e.cursorAuthHeaderValue;
    return DE(()=>r, e.cursorAuthOrigin, t ?? globalThis.fetch.bind(globalThis));
}
function f8(e) {
    return typeof e == "string" ? e : e.href;
}
function p8(e, t) {
    if (!e) return !1;
    try {
        const r = new URL(e), n = new URL(t);
        return r.origin === n.origin && r.pathname === n.pathname;
    } catch  {
        return !1;
    }
}
function g8(e) {
    const t = e.statusText.trim(), r = t ? ` ${t}` : "", n = new Error(`HTTP ${e.status}${r} from MCP server while using configured Authorization header`);
    return n.name = "StaticAuthorizationHeaderUnauthorizedError", n;
}
function Zl(e, t, r) {
    return !e || !t ? e : async (...n)=>{
        const s = await e(...n);
        return s.status === 401 && !t.firstError && p8(f8(n[0]), r) && (t.firstError = g8(s)), s;
    };
}
function Fm(e) {
    return Nm(e) ? {} : void 0;
}
function Ql(e, t, r, n, s, i = !1) {
    const o = t?.firstError;
    if (!(!o || r.hadAuthRequiredEvent)) return he(e).error("OAuth fallback failed after MCP server returned 401 for configured Authorization header; surfacing original 401", n instanceof Error ? n : void 0, {
        transportType: s,
        fallback: i,
        oauthFallbackError: n instanceof Error ? n.message : String(n)
    }), {
        connectResult: {
            ok: !1,
            error: o.message,
            isRetryable: !1
        }
    };
}
async function eu(e) {
    const { identifier: t, authProvider: r, staticClientInfo: n, transportServerUrl: s } = e;
    if (!r || !n && !Im(s)) return !1;
    try {
        if (await r.tokens()) return !1;
    } catch (i) {
        return he(t).warn(`Failed to read OAuth tokens after connect; skipping connect-phase auth for static-client server: ${i instanceof Error ? i.message : String(i)}`, {
            transportType: e.transportType
        }), !1;
    }
    try {
        const i = r.getOAuthHttpFetch?.();
        return await s8(r, {
            serverUrl: s,
            ...i ? {
                fetchFn: i
            } : {}
        }) === "REDIRECT" ? (he(t).info("Server connected without stored tokens; interactive OAuth required", {
            transportType: e.transportType
        }), !0) : !1;
    } catch (i) {
        return he(t).warn(`Connect-phase OAuth for static-client server failed; keeping unauthenticated connection: ${i instanceof Error ? i.message : String(i)}`, {
            transportType: e.transportType
        }), !1;
    }
}
async function mt(e, t, r, n, s) {
    let i = !1;
    try {
        i = !!(await e.tokens())?.refresh_token;
    } catch (c) {
        so().warn(`Failed to snapshot OAuth tokens while building needsAuth result: ${c instanceof Error ? c.message : String(c)}`);
    }
    const o = t.authorizationUrl ?? r, a = e.getOAuthRefreshDiagnosticsForLog?.();
    return {
        ok: !1,
        needsAuth: !0,
        authorizationUrl: o,
        transport: n,
        refreshTokenPresent: i,
        hadAuthRequiredEvent: t.hadAuthRequiredEvent,
        needsAuthReason: s,
        oauthRefreshDiagnostics: a
    };
}
export async function tu(e, t, r, n, s, i, o) {
    try {
        return t.type === "streamableHttp" ? await _8(e, t, r, n, s, i, o?.allowDeprecatedSseFallback ?? !0) : t.type === "stdio" ? await y8(e, t, r, n) : t.type === "sse" ? await v8(e, t, r, n, s) : {
            connectResult: {
                ok: !1,
                error: `Unknown server type: ${t.type}`,
                isRetryable: !1
            }
        };
    } finally{
        s.markConnectPhaseComplete();
    }
}
async function _8(e, t, r, n, s, i, o = !0) {
    const a = {
        identifier: n.getMcpPolicyTargetIdentifier?.(e) ?? e,
        serverUrl: t.serverUrl
    }, c = Ta(a), { transportServerUrl: l, canonicalServerUrl: u } = Ih(t.serverUrl), { authProvider: d, staticClientInfo: f } = await Hm({
        identifier: e,
        serverInfo: t,
        host: n,
        authEventSink: s,
        canonicalServerUrl: u,
        transportServerUrl: l,
        suppressOAuth: c
    }), p = to({
        identifier: e,
        host: n,
        serverUrl: u
    }), g = Fm(t.headers), _ = Nl(l, t.headers), y = _.headers, m = $m(_, Um(e, n, t)), A = ZE(a, ()=>n.executeCommand("mcp.cursorAccessToken", {
            serverIdentifier: e,
            serverUrl: t.serverUrl
        }), m ?? n.fetch ?? globalThis.fetch.bind(globalThis));
    if (d && f && d.saveClientInformation) try {
        await d.saveClientInformation({
            ...f,
            redirect_uris: d.clientMetadata.redirect_uris,
            grant_types: [
                "authorization_code",
                "refresh_token"
            ],
            response_types: [
                "code"
            ]
        });
    } catch (v) {
        he(e).warn(`Failed to persist static OAuth client information: ${v instanceof Error ? v.message : String(v)}`);
    }
    const S = new o8(new URL(l), {
        ...d ? {
            authProvider: d
        } : {},
        ...i ? {
            sessionId: i.sessionId
        } : {},
        requestInit: {
            headers: {
                "User-Agent": Xl(n.getAppRoot()),
                ...y ?? {}
            }
        },
        fetch: Zl(_s(n, "streamableHttp", p, A), g, l)
    });
    i?.protocolVersion && S.setProtocolVersion(i.protocolVersion);
    try {
        return await r.connect(S), await eu({
            identifier: e,
            authProvider: d,
            staticClientInfo: f,
            transportServerUrl: l,
            transportType: "streamableHttp"
        }) ? {
            connectResult: await mt(d, s.getConnectPhaseAuthRequiredEvidence(), l, S, "connect_unauthenticated_static_client")
        } : {
            connectResult: {
                ok: !0,
                client: r,
                transport: S,
                actualType: "streamableHttp"
            }
        };
    } catch (v) {
        if (i && v instanceof Error && v.message.includes("Server already initialized")) return he(e).warn('Streamable HTTP reconnect hit "Server already initialized"; lifecycle will retry with a fresh initialize (no cached session id)', {
            transportType: "streamableHttp",
            sessionReuse: !0
        }), {
            connectResult: {
                ok: !1,
                error: v.message,
                isRetryable: !0,
                sessionReuseRequired: !0,
                reconnectSession: i
            }
        };
        if (i && Ot(v instanceof Error ? v : new Error(String(v))) === 404) return he(e).warn("Streamable HTTP reconnect: HTTP 404 with Mcp-Session-Id \u2014 session invalid/expired per MCP spec; not falling back to SSE", {
            transportType: "streamableHttp"
        }), {
            connectResult: {
                ok: !1,
                error: v instanceof Error ? v.message : String(v),
                isRetryable: !0
            }
        };
        const b = s.getConnectPhaseAuthRequiredEvidence();
        if (b.hadAuthRequiredEvent && d) {
            if (jl(v, "streamableHttp", d)) {
                const F = v instanceof Error ? v : new Error(String(v));
                return he(e).info("Connect failed after auth_required with retryable OAuth/transport error; returning retryable failure (streamableHttp)", {
                    transportType: "streamableHttp"
                }), {
                    connectResult: {
                        ok: !1,
                        error: F.message,
                        isRetryable: !0
                    }
                };
            }
            return he(e).info("Connect failed after auth_required; returning needsAuth (streamableHttp)", {
                transportType: "streamableHttp"
            }), {
                connectResult: await mt(d, b, l, S, "connect_auth_error")
            };
        }
        const I = Ql(e, g, b, v, "streamableHttp");
        if (I) return I;
        if (Zt(v) && d) return he(e).error(`Auth-related error connecting to streamableHttp server: ${v instanceof Error ? v.message : String(v)}`, v instanceof Error ? v : void 0, {
            transportType: "streamableHttp"
        }), {
            connectResult: await mt(d, b, l, S, "connect_auth_error")
        };
        if (S8(v) && d) return he(e).error(`OAuth config error connecting to streamableHttp server: ${v instanceof Error ? v.message : String(v)}`, v instanceof Error ? v : void 0, {
            transportType: "streamableHttp",
            retryable: !1
        }), {
            connectResult: await mt(d, b, l, S, "oauth_config_error")
        };
        if (UE(v)) {
            if (!o || c) {
                const F = Ul(v), H = !F;
                return he(e).warn(F ? "Streamable HTTP connect failed with ECONNREFUSED; skipping deprecated SSE fallback and surfacing non-retryable failure" : "Known streamable HTTP server returned a backwards-compatibility status; skipping deprecated SSE fallback and retrying streamable HTTP", {
                    transportType: "streamableHttp",
                    retryable: H
                }), {
                    connectResult: {
                        ok: !1,
                        error: v instanceof Error ? v.message : String(v),
                        isRetryable: H
                    }
                };
            }
            return he(e).warn(`Error connecting to streamableHttp server, falling back to SSE: ${v instanceof Error ? v.message : String(v)}`, {
                transportType: "streamableHttp",
                fallback: "sse"
            }), m8(e, t, r, d, f, n, s, l, p, g, i, v, m);
        }
        const O = v instanceof Error ? v : new Error(String(v)), M = qe(O, "streamableHttp").retryable || ru(v);
        return he(e).warn(`Transient error connecting to streamableHttp server: ${O.message}`, {
            transportType: "streamableHttp",
            retryable: M
        }), {
            connectResult: {
                ok: !1,
                error: O.message,
                isRetryable: M
            }
        };
    }
}
async function m8(e, t, r, n, s, i, o, a, c, l, u, d, f) {
    if (u) return he(e).warn("Streamable HTTP reconnect using existing session ID failed; skipping SSE fallback", {
        transportType: "streamableHttp",
        sessionReuse: !0
    }), {
        connectResult: {
            ok: !1,
            error: d instanceof Error ? d.message : "Existing streamable HTTP session reconnect failed",
            isRetryable: !0
        }
    };
    let p;
    const { headers: g } = Nl(a, t.headers);
    try {
        return p = new Lm(new URL(a), {
            ...n ? {
                authProvider: n
            } : {},
            requestInit: {
                headers: {
                    "User-Agent": Xl(i.getAppRoot()),
                    ...g ?? {}
                }
            },
            fetch: Zl(_s(i, "sse", c, f), l, a)
        }), await r.connect(p), await eu({
            identifier: e,
            authProvider: n,
            staticClientInfo: s,
            transportServerUrl: a,
            transportType: "sse"
        }) ? {
            connectResult: await mt(n, o.getConnectPhaseAuthRequiredEvidence(), a, p, "connect_unauthenticated_static_client")
        } : {
            connectResult: {
                ok: !0,
                client: r,
                transport: p,
                actualType: "sse"
            }
        };
    } catch (_) {
        const y = o.getConnectPhaseAuthRequiredEvidence();
        if (y.hadAuthRequiredEvent && n) {
            if (jl(_, "sse", n)) {
                const v = _ instanceof Error ? _ : new Error(String(_));
                return he(e).info("SSE fallback failed after auth_required with retryable OAuth/transport error; returning retryable failure", {
                    transportType: "sse",
                    fallback: !0
                }), {
                    connectResult: {
                        ok: !1,
                        error: v.message,
                        isRetryable: !0
                    }
                };
            }
            return he(e).info("SSE fallback failed after auth_required; returning needsAuth", {
                transportType: "sse",
                fallback: !0
            }), {
                connectResult: await mt(n, y, a, p, "sse_fallback_auth_error")
            };
        }
        const m = Ql(e, l, y, _, "sse", !0);
        if (m) return m;
        if (p && Zt(_) && n) return he(e).warn("Auth-related error connecting to SSE server (fallback)"), {
            connectResult: await mt(n, y, a, p, "sse_fallback_auth_error")
        };
        r.close();
        const A = _ instanceof Error ? _ : new Error(String(_)), S = Ul(A) ? !1 : qe(A, "sse").retryable || ru(A);
        return he(e).error(`Error connecting to SSE server after fallback: ${A.message}`, A, {
            transportType: "sse",
            fallback: !0,
            retryable: S
        }), {
            connectResult: {
                ok: !1,
                error: A.message,
                isRetryable: S
            }
        };
    }
}
async function v8(e, t, r, n, s) {
    const { transportServerUrl: i, canonicalServerUrl: o } = Ih(t.serverUrl), { authProvider: a, staticClientInfo: c } = await Hm({
        identifier: e,
        serverInfo: t,
        host: n,
        authEventSink: s,
        canonicalServerUrl: o,
        transportServerUrl: i
    }), l = to({
        identifier: e,
        host: n,
        serverUrl: o
    }), u = Fm(t.headers), d = Nl(i, t.headers), f = d.headers, p = $m(d, Um(e, n, t)), g = new Lm(new URL(i), {
        ...a ? {
            authProvider: a
        } : {},
        requestInit: {
            headers: {
                "User-Agent": Xl(n.getAppRoot()),
                ...f ?? {}
            }
        },
        fetch: Zl(_s(n, "sse", l, p), u, i)
    });
    try {
        return await r.connect(g), await eu({
            identifier: e,
            authProvider: a,
            staticClientInfo: c,
            transportServerUrl: i,
            transportType: "sse"
        }) ? {
            connectResult: await mt(a, s.getConnectPhaseAuthRequiredEvidence(), i, g, "connect_unauthenticated_static_client")
        } : {
            connectResult: {
                ok: !0,
                client: r,
                transport: g,
                actualType: "sse"
            }
        };
    } catch (_) {
        const y = s.getConnectPhaseAuthRequiredEvidence();
        if (y.hadAuthRequiredEvent && a) {
            if (jl(_, "sse", a)) {
                const S = _ instanceof Error ? _ : new Error(String(_));
                return he(e).info("Connect failed after auth_required with retryable OAuth/transport error; returning retryable failure (sse)", {
                    transportType: "sse"
                }), {
                    connectResult: {
                        ok: !1,
                        error: S.message,
                        isRetryable: !0
                    }
                };
            }
            return {
                connectResult: await mt(a, y, i, g, "connect_auth_error")
            };
        }
        const m = _ instanceof Error ? _ : new Error(String(_)), A = Ql(e, u, y, m, "sse");
        return A || (Zt(_) && a ? {
            connectResult: await mt(a, y, i, g, "connect_auth_error")
        } : (r.close(), {
            connectResult: {
                ok: !1,
                error: m.message,
                isRetryable: qe(m, "sse").retryable || ru(m)
            }
        }));
    }
}
async function y8(e, t, r, n) {
    const s = n.getWorkspaceFolders(), i = {
        WORKSPACE_FOLDER_PATHS: s?.map((A)=>A.uri.fsPath).join(",") ?? "",
        npm_config_yes: "true",
        NPM_CONFIG_YES: "true"
    }, o = io(t.command, s);
    let a, c;
    if (t.args && t.args.length > 0) a = o, c = t.args.map((A)=>io(A, s));
    else {
        const A = o.split(" ");
        a = A[0], c = A.slice(1);
    }
    const l = n.getSpawnEnv();
    let u = ys.homedir();
    if (t.cwd) u = io(t.cwd, s);
    else if (t.projectPath) {
        const A = t.projectPath.split("-").slice(1).join("-"), S = s?.find((v)=>A && v.uri.fsPath.endsWith(A));
        S && (u = S.uri.fsPath);
    }
    const d = {
        ...l,
        ...i,
        ...t.env
    }, f = await n.getMcpNetworkControlsConfig?.({
        command: [
            t.command,
            ...t.args ?? []
        ].join(" ")
    });
    h8(e, f);
    const p = xh(f);
    let g;
    if (p !== void 0) {
        const { SandboxUnsupportedError: A, spawnInSandbox: S } = await Promise.resolve().then(()=>(ds(), us)), v = await yw(p, u);
        he(e).info(`MCP stdio sandbox spawn configured: mcpNetworkMode=${p.mcpNetworkMode ?? "unset"}, policyType=${v.type}`), g = (b, I, O)=>{
            try {
                return S(b, I, O, v);
            } catch (M) {
                throw M instanceof A ? new yl(e, M) : M;
            }
        };
    }
    const _ = new i8({
        cwd: u,
        command: a,
        args: c,
        env: d,
        stderr: "pipe",
        ...g ? {
            spawn: g
        } : {}
    }), y = c8(_);
    let m = "";
    _.stderr?.on("data", (A)=>{
        const S = A.toString();
        if (he(e).error(`${S}`, void 0, void 0, {
            localOnly: !0
        }), m.length < Ll) {
            const v = Ll - m.length;
            m += S.slice(0, v);
        }
    });
    try {
        return await r.connect(_), {
            connectResult: {
                ok: !0,
                client: r,
                transport: _,
                actualType: "stdio"
            }
        };
    } catch (A) {
        try {
            await y.waitForClose();
        } catch (b) {
            he(e).debug(`Error waiting for failed stdio transport to exit: ${b instanceof Error ? b.message : String(b)}`);
        }
        if (A instanceof yl) {
            const { getLastSandboxFailureReason: b } = await Promise.resolve().then(()=>(ds(), us)), I = b(), O = xm(I);
            return he(e).error(`MCP stdio sandbox unavailable: ${A.message}${O ? `; sandboxFailureReasonClass=${O}` : ""}`, void 0, {
                event: "mcp_stdio_sandbox_unavailable",
                sandboxFailureReasonClass: O,
                mcpNetworkMode: p?.mcpNetworkMode
            }), {
                connectResult: {
                    ok: !1,
                    error: A.message,
                    isRetryable: !1
                }
            };
        }
        if (p !== void 0) {
            const { getLastSandboxFailureReason: b } = await Promise.resolve().then(()=>(ds(), us)), I = xm(b());
            he(e).warn(`MCP stdio sandboxed connect failed: ${A.message}${I ? `; sandboxFailureReasonClass=${I}` : ""}`, {
                event: "mcp_stdio_sandbox_connect_failed",
                sandboxFailureReasonClass: I,
                stderrCaptured: m.length > 0,
                mcpNetworkMode: p.mcpNetworkMode
            });
        }
        const S = l8(e, t), v = dE(A, m, S, a, c);
        return {
            connectResult: {
                ok: !1,
                error: A.message,
                isRetryable: v
            }
        };
    }
}
async function Hm(e) {
    return e.suppressOAuth ? {} : Nm(e.serverInfo.headers) ? {} : im()(e);
}
function S8(e) {
    if (!(e instanceof Error)) return !1;
    const t = e.message;
    return t.includes("Redirect URI is not valid") || t.includes("redirect_uri_mismatch") || t.includes("Invalid redirect URI");
}
function ru(e) {
    if (e instanceof Error) {
        const t = Ot(e);
        if (t !== void 0) return t >= 500 && t < 600;
    }
    return !1;
}
var oo;
import { Client as b8 } from "@modelcontextprotocol/sdk/client/index.js";
import { ElicitRequestSchema as w8, ListRootsRequestSchema as E8, PromptListChangedNotificationSchema as A8, ResourceListChangedNotificationSchema as R8, ResourceUpdatedNotificationSchema as T8, ToolListChangedNotificationSchema as k8 } from "@modelcontextprotocol/sdk/types.js";
export function J(e) {
    return Ur(e);
}
export function co(e, t) {
    return new Promise((r, n)=>{
        const s = setTimeout(()=>n(new Error(`Health probe timed out after ${t}ms`)), t);
        e.then((i)=>{
            clearTimeout(s), r(i);
        }, (i)=>{
            clearTimeout(s), n(i);
        });
    });
}
export function I8(e) {
    if (!(e instanceof Error)) return !1;
    const t = Ot(e);
    return t === 429 || t === 503;
}
export function zm(e) {
    return e.type === "failed" && e.exhausted ? "conn=failed(exhausted)" : `conn=${e.type}`;
}
export function fn(e, t, r = "distribution") {
    Qt(e, t, r, jm);
}
export async function qm(e, t, r, n, s) {
    var i = [];
    try {
        const c = hr(i, _r(e.withName(t)));
        c.span.setAttribute("mcp.lease.connection", xE());
        for (const [u, d] of Object.entries(r))c.span.setAttribute(u, d);
        const l = Date.now();
        try {
            const u = await n(c.ctx), d = Date.now() - l;
            return c.span.setAttribute("mcp.op.duration_ms", String(d)), c.span.setAttribute("mcp.op.outcome", "success"), s?.(u, c.span, d), u;
        } catch (u) {
            const d = Date.now() - l;
            throw c.span.setAttribute("mcp.op.duration_ms", String(d)), c.span.setAttribute("mcp.op.outcome", "error"), c.span.setAttribute("mcp.op.error", u instanceof Error ? u.message.slice(0, 200) : String(u).slice(0, 200)), u;
        }
    } catch (c) {
        var o = c, a = !0;
    } finally{
        fr(i, o, a);
    }
}
export function O8(e) {
    return Ii().withName(e);
}
export function Ym(e) {
    if (!e) return {
        status: "initializing"
    };
    switch(e.type){
        case "connected":
            return {
                status: "connected"
            };
        case "degraded":
            return {
                status: "degraded",
                statusDetail: e.reason
            };
        case "disconnected":
            return {
                status: "disconnected"
            };
        case "error":
            return {
                status: "error",
                statusDetail: e.error,
                statusRetryable: e.isRetryable
            };
        case "initializing":
            return {
                status: "initializing"
            };
        case "needsAuth":
            return {
                status: "needsAuth",
                statusDetail: e.authorizationUrl
            };
        default:
            return {
                status: "error",
                statusDetail: `Unknown status: ${JSON.stringify(e)}`
            };
    }
}
export async function C8(e, t, r, n, s, i) {
    const { status: o, statusDetail: a, statusRetryable: c } = Ym(n);
    if (o === "needsAuth" && i?.preserveOfferingsOnNeedsAuth === !0) return {
        serverIdentifier: t,
        serverName: r.serverName,
        status: o,
        statusDetail: a,
        statusRetryable: c,
        tools: s?.tools ?? [],
        resources: s?.resources ?? [],
        prompts: s?.prompts ?? [],
        instructions: s?.instructions
    };
    const [l, u, d, f] = await qm(e, `fetchServerSnapshot(${t})`, {
        "mcp.fetch.identifier": t,
        "mcp.fetch.status": o
    }, async (m)=>Promise.allSettled([
            r.getTools(m),
            r.listResources(m),
            r.listPrompts(m),
            r.getInstructions(m)
        ]), (m, A, S)=>{
        fn("mcp.snapshot.fetch_all_duration_ms", S), A.setAttribute("mcp.fetch.tools_ok", String(m[0].status === "fulfilled")), A.setAttribute("mcp.fetch.resources_ok", String(m[1].status === "fulfilled")), A.setAttribute("mcp.fetch.prompts_ok", String(m[2].status === "fulfilled")), A.setAttribute("mcp.fetch.instructions_ok", String(m[3].status === "fulfilled"));
    });
    l.status === "rejected" && fn("mcp.snapshot.fetch_tools_error", 1, "increment"), u.status === "rejected" && fn("mcp.snapshot.fetch_resources_error", 1, "increment"), d.status === "rejected" && fn("mcp.snapshot.fetch_prompts_error", 1, "increment"), f.status === "rejected" && fn("mcp.snapshot.fetch_instructions_error", 1, "increment");
    const p = l.status === "fulfilled" ? l.value : s?.tools ?? [], g = u.status === "fulfilled" ? u.value.resources : s?.resources ?? [], _ = d.status === "fulfilled" ? d.value : s?.prompts ?? [], y = f.status === "fulfilled" ? f.value : s?.instructions;
    return {
        serverIdentifier: t,
        serverName: r.serverName,
        status: o,
        statusDetail: a,
        statusRetryable: c,
        tools: p,
        resources: g,
        prompts: _,
        instructions: y
    };
}
export { $i, Pt, Xc, Yc, bg, cl, hl, kg, pl, ul, wg };

export var us = {};
Object.defineProperty(us, "BashState", {
    enumerable: true,
    get: ()=>cl
});
Object.defineProperty(us, "INSECURE_NONE_SANDBOX_POLICY", {
    enumerable: true,
    get: ()=>kg
});
Object.defineProperty(us, "KnownShellExecutor", {
    enumerable: true,
    get: ()=>Xc
});
Object.defineProperty(us, "NaiveTerminalExecutor", {
    enumerable: true,
    get: ()=>hl
});
Object.defineProperty(us, "OutputSuppressionController", {
    enumerable: true,
    get: ()=>wg
});
Object.defineProperty(us, "PowerShellState", {
    enumerable: true,
    get: ()=>ul
});
Object.defineProperty(us, "SHELL_OUTPUT_SUPPRESSED_NOTICE", {
    enumerable: true,
    get: ()=>bg
});
Object.defineProperty(us, "SandboxUnsupportedError", {
    enumerable: true,
    get: ()=>Yc
});
Object.defineProperty(us, "ZshState", {
    enumerable: true,
    get: ()=>pl
});
Object.defineProperty(us, "configureRipgrepPath", {
    enumerable: true,
    get: ()=>Xp
});
Object.defineProperty(us, "configureSandboxPrereqs", {
    enumerable: true,
    get: ()=>D1
});
Object.defineProperty(us, "createDefaultTerminalExecutor", {
    enumerable: true,
    get: ()=>_w
});
Object.defineProperty(us, "createIgnoreMapping", {
    enumerable: true,
    get: ()=>tw
});
Object.defineProperty(us, "createNaiveTerminalExecutor", {
    enumerable: true,
    get: ()=>dg
});
Object.defineProperty(us, "getHardcodedAllowedReadPaths", {
    enumerable: true,
    get: ()=>c1
});
Object.defineProperty(us, "getLastSandboxFailureReason", {
    enumerable: true,
    get: ()=>C1
});
Object.defineProperty(us, "getPowerShellExecutable", {
    enumerable: true,
    get: ()=>$i
});
Object.defineProperty(us, "getRipgrepBinaryPath", {
    enumerable: true,
    get: ()=>wc
});
Object.defineProperty(us, "getSandboxPolicyType", {
    enumerable: true,
    get: ()=>z1
});
Object.defineProperty(us, "getSandboxProjectDir", {
    enumerable: true,
    get: ()=>d7
});
Object.defineProperty(us, "getShellExecutablePath", {
    enumerable: true,
    get: ()=>pw
});
Object.defineProperty(us, "getSuggestedShell", {
    enumerable: true,
    get: ()=>Tg
});
Object.defineProperty(us, "isAllowAllNetworkByPolicy", {
    enumerable: true,
    get: ()=>$7
});
Object.defineProperty(us, "isHardcodedWriteProtected", {
    enumerable: true,
    get: ()=>O7
});
Object.defineProperty(us, "isNetworkEnabledByPolicy", {
    enumerable: true,
    get: ()=>Uc
});
Object.defineProperty(us, "isRipgrepConfigured", {
    enumerable: true,
    get: ()=>Zp
});
Object.defineProperty(us, "isSandboxSupported", {
    enumerable: true,
    get: ()=>_9
});
Object.defineProperty(us, "loadSandboxPolicyFromFileOrUndefined", {
    enumerable: true,
    get: ()=>hw
});
Object.defineProperty(us, "mergeAdditionalReadPaths", {
    enumerable: true,
    get: ()=>M9
});
Object.defineProperty(us, "mergeNetworkPolicies", {
    enumerable: true,
    get: ()=>G1
});
Object.defineProperty(us, "mergePathsIntersection", {
    enumerable: true,
    get: ()=>W1
});
Object.defineProperty(us, "mergePathsUnion", {
    enumerable: true,
    get: ()=>ss
});
Object.defineProperty(us, "mergeReadBoundary", {
    enumerable: true,
    get: ()=>x9
});
Object.defineProperty(us, "networkAllowAllPolicy", {
    enumerable: true,
    get: ()=>H7
});
Object.defineProperty(us, "networkDisabledPolicy", {
    enumerable: true,
    get: ()=>F7
});
Object.defineProperty(us, "parseSandboxPolicyJson", {
    enumerable: true,
    get: ()=>Eg
});
Object.defineProperty(us, "primeSandboxSupport", {
    enumerable: true,
    get: ()=>m9
});
Object.defineProperty(us, "resolvePolicyPaths", {
    enumerable: true,
    get: ()=>Ag
});
Object.defineProperty(us, "resolveRipgrepFromPath", {
    enumerable: true,
    get: ()=>Zb
});
Object.defineProperty(us, "resolveSandboxPolicyForWorkspace", {
    enumerable: true,
    get: ()=>Qr
});
Object.defineProperty(us, "spawnInSandbox", {
    enumerable: true,
    get: ()=>N1
});
Object.defineProperty(us, "spawnWithSignal", {
    enumerable: true,
    get: ()=>Pt
});
Object.defineProperty(us, "withConfiguredRipgrepEnv", {
    enumerable: true,
    get: ()=>bc
});

import { Kr } from "./cache-env.ts";
import { t1 } from "./env-filter.ts";
import { f7 } from "./index.js";
import { ze } from "./index_2.ts";
import { Tt } from "./index_3.ts";
import { zp } from "./logger_2.ts";
import { Qe } from "./mcp-url-utils.ts";
import { $c } from "./network-policy-utils.ts";
import { Ec } from "./ripgrep.ts";
import { m1 } from "./seatbelt.ts";
import { h } from "./tslib.es6.js";
var H2 = Object.create, ba = Object.defineProperty, B2 = Object.getOwnPropertyDescriptor, wa = Object.getOwnPropertyNames, z2 = Object.getPrototypeOf, W2 = Object.prototype.hasOwnProperty, K2 = (e, t, r, n)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let s of wa(t))!W2.call(e, s) && s !== r && ba(e, s, {
        get: ()=>t[s],
        enumerable: !(n = B2(t, s)) || n.enumerable
    });
    return e;
}, q2 = (e, t, r)=>(r = e != null ? H2(z2(e)) : {}, K2(t || !e || !e.__esModule ? ba(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
function zb(e) {
    return e.get(zp);
}
function Wb(e) {
    function t(r, n) {
        const s = new Date;
        zb(r).log(r, {
            ...n,
            timestamp: s,
            logger: e
        });
    }
    return {
        debug: (r, n, s)=>{
            t(r, {
                level: "debug",
                message: n,
                context: r,
                metadata: s
            });
        },
        info: (r, n, s)=>{
            t(r, {
                level: "info",
                message: n,
                context: r,
                metadata: s
            });
        },
        warn: (r, n, s)=>{
            t(r, {
                level: "warn",
                message: n,
                context: r,
                metadata: s
            });
        },
        error: (r, n, s, i)=>{
            t(r, {
                level: "error",
                message: n,
                context: r,
                error: s,
                metadata: i
            });
        }
    };
}
var Oc, d1, h1, Cc, f1, Lc, p1, pt, C7, L7, xc, Jn, Zn, xi, Mi, Mc;
var S1, b1, w1, E1, Fc;
var L1, Kc, Te, jc, kt, jr, gt, Oe, Vr, Yr, Vc;
var Ng, Ug, fs;
export { B2, C7, Cc, E1, Fc, H2, Jn, K2, Kc, L1, L7, Lc, Mc, Mi, Ng, Oc, Oe, S1, Te, Ug, Vc, Vr, W2, Wb, Yr, Zn, b1, ba, d1, f1, fs, gt, h1, jc, jr, kt, p1, pt, q2, w1, wa, xc, xi, z2, zb };
var __wakaru_Dc_initialized = false;
export function Dc() {
if (__wakaru_Dc_initialized) return;
__wakaru_Dc_initialized = true;
"use strict";
h(), ze(), Oc = q2(f7(), 1), d1 = [
    ".local/bin",
    ".local/share/mise",
    ".local/share/pnpm",
    ".nvm",
    ".volta",
    ".asdf",
    ".pyenv",
    ".rbenv",
    ".rustup",
    ".cargo/bin",
    ".cargo/registry",
    ".cargo/git"
], h1 = [
    "bin",
    "sbin",
    "lib",
    "opt",
    "Cellar",
    "share",
    "Frameworks",
    "etc/gitconfig",
    "etc/openssl@3/cert.pem",
    "etc/openssl@3/openssl.cnf",
    "etc/ca-certificates"
], Cc = (e, t)=>t.flatMap((r)=>h1.map((n)=>({
                platform: e,
                scope: "global",
                path: `${r}/${n}`
            }))), f1 = {
    linux: [
        ".cache/node",
        ".cache/yarn"
    ],
    darwin: [
        ".cache/node",
        "Library/Caches/Yarn"
    ]
}, Lc = (e)=>[
        ...d1,
        ...f1[e]
    ].map((t)=>({
            platform: e,
            scope: "home-dir",
            path: t
        })), p1 = [
    {
        platform: "linux",
        scope: "global",
        path: "/bin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/sbin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/bin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/sbin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/lib"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/lib64"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/lib"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/lib64"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/libexec"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/share"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ld.so.cache"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ld.so.conf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ld.so.conf.d"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/certs"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/openssl.cnf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/cert.pem"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/ca-bundle.pem"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/certs/ca-certificates.crt"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/pki/tls/certs"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/pki/tls/openssl.cnf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/pki/ca-trust/extracted"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/resolv.conf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/hosts"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/nsswitch.conf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/gai.conf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/alternatives"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/mime.types"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/profile"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/bash.bashrc"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/zsh/zshenv"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/zsh/zprofile"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/zsh/zshrc"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/zsh/zlogin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/gitconfig"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".bashrc"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".bash_profile"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".profile"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".zshenv"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".zprofile"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".zshrc"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".zlogin"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".gitconfig"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".ssh/known_hosts"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".config/mise/config.toml"
    },
    {
        platform: "linux",
        scope: "home-dir",
        path: ".cache/dotslash"
    },
    ...Lc("linux"),
    ...Cc("linux", [
        "/usr/local",
        "/home/linuxbrew/.linuxbrew"
    ]),
    {
        platform: "linux",
        scope: "global",
        path: "/usr/local/go"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/nix/store"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/nix/var/nix/profiles"
    },
    {
        platform: "linux",
        scope: "bundled",
        path: "ripgrep"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/bin"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/usr/bin"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/usr/lib"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/usr/libexec"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/usr/share"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/System/Library"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/System/Cryptexes"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/Library/Apple"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/Library/Developer/CommandLineTools"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/Applications/Xcode.app"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/Library/Preferences/com.apple.dt.Xcode.plist"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/ssl/cert.pem"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/ssl/certs"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/ssl/openssl.cnf"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/hosts"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/resolv.conf"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/apache2/mime.types"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/profile"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/bashrc"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/zshenv"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/zprofile"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/zshrc"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/zlogin"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/gitconfig"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".bashrc"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".bash_profile"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".profile"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".zshenv"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".zprofile"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".zshrc"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".zlogin"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".gitconfig"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".ssh/known_hosts"
    },
    {
        platform: "darwin",
        scope: "home",
        path: "Library/Preferences/.GlobalPreferences.plist"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".config/mise/config.toml"
    },
    {
        platform: "darwin",
        scope: "home-dir",
        path: "Library/Python"
    },
    {
        platform: "darwin",
        scope: "home-dir",
        path: "Library/Caches/dotslash"
    },
    ...Lc("darwin"),
    ...Cc("darwin", [
        "/opt/homebrew",
        "/usr/local"
    ]),
    {
        platform: "darwin",
        scope: "global",
        path: "/nix/store"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/nix/var/nix/profiles"
    },
    {
        platform: "darwin",
        scope: "bundled",
        path: "ripgrep"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/dev/null"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/dev/zero"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/dev/random"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/dev/urandom"
    }
], pt = [
    {
        type: "workspace",
        pattern: "**/.cursor/*.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/*.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/.workspace-trusted"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/rules"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/rules/**"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/commands"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/commands/**"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/worktrees"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/worktrees/**"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/skills"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/skills/**"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/agents"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/agents/**"
    },
    {
        type: "workspace",
        pattern: "**/.claude/*.json"
    },
    {
        type: "workspace",
        pattern: "**/.claude/**/*.json"
    },
    {
        type: "workspace",
        pattern: "**/.vscode/**"
    },
    {
        type: "workspace",
        pattern: "**/.idea/**"
    },
    {
        type: "workspace",
        pattern: "**/.venv/"
    },
    {
        type: "workspace",
        pattern: "**/venv/"
    },
    {
        type: "workspace",
        pattern: "**/*.code-workspace"
    },
    {
        type: "workspace",
        pattern: "**/.cursorignore"
    },
    {
        type: "workspace",
        pattern: "**/.workspace-trusted"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/cli.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/cli-config.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/mcp.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/mcp-approvals.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/permissions.json"
    },
    {
        type: "git",
        pattern: "**/.git/hooks/**"
    },
    {
        type: "git",
        pattern: "**/.git/config"
    },
    {
        type: "git",
        pattern: "**/.git/config.worktree"
    },
    {
        type: "git",
        pattern: "**/.git/info/attributes"
    },
    {
        type: "git",
        pattern: "**/.git/commondir"
    },
    {
        type: "git",
        pattern: "**/.git/worktrees/*/commondir"
    },
    {
        type: "worktree",
        pattern: ".git"
    },
    {
        type: "absolute",
        pattern: "/etc/ssl/cert.pem"
    },
    {
        type: "absolute",
        pattern: "/etc/ssl/ca-bundle.pem"
    },
    {
        type: "absolute",
        pattern: "/private/etc/ssl/cert.pem"
    },
    {
        type: "absolute",
        pattern: "/etc/ssl/certs/ca-certificates.crt"
    },
    {
        type: "absolute",
        pattern: "/etc/pki/tls/certs/ca-bundle.crt"
    },
    {
        type: "absolute",
        pattern: "/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem"
    },
    {
        type: "home",
        pattern: ".cursor/sandbox-policies"
    }
], C7 = pt.filter((e)=>e.type === "git").map((e)=>e.pattern), L7 = pt.filter((e)=>e.type === "workspace" && e.pattern.startsWith("!") && !e.pattern.endsWith("/**")).map((e)=>e.pattern.replace(/^!(\*\*\/)?/, "")), xc = [], Jn = null, Zn = null, xi = null, Mi = new Map, Mc = process.platform === "win32" || process.platform === "darwin";

}
var __wakaru_K7_initialized = false;
export function K7() {
if (__wakaru_K7_initialized) return;
__wakaru_K7_initialized = true;
"use strict";
h(), S1 = "sandbox-policies", b1 = "CURSOR_SANDBOX_POLICY_DIR", w1 = 3600 * 1e3, E1 = 900 * 1e3, Fc = 0;

}
var __wakaru_f9_initialized = false;
export function f9() {
if (__wakaru_f9_initialized) return;
__wakaru_f9_initialized = true;
"use strict";
h(), Tt(), ze(), t1(), Ec(), Kr(), Dc(), m1(), $c(), K7(), L1 = process.platform === "darwin", Kc = process.platform === "linux", Te = Wb("shell-exec:sandbox"), jc = !0, kt = null, jr = null, gt = null, Oe = null, Vr = !1, Yr = null, Vc = 15e3;

}
var __wakaru_ot_initialized = false;
export function ot() {
if (__wakaru_ot_initialized) return;
__wakaru_ot_initialized = true;
"use strict";
h(), Qe(), Ng = [
    "fastRetryBaseDelayMs",
    "fastRetryMaxDelayMs",
    "fastRetryMaxAttempts",
    "periodicRetryBaseDelayMs",
    "periodicRetryMaxDelayMs",
    "maxPeriodicCycles",
    "focusRetryCooldownMs",
    "inlineReconnectCooldownMs",
    "streamableHttpSession404TombstoneThreshold",
    "healthProbeTimeoutMs",
    "toolCallIdleTimeoutMs",
    "toolCallMaxTotalTimeoutMs",
    "degradedProbeDelayMs",
    "maxDegradedProbeFailures",
    "keepaliveProbeDelayMs",
    "keepaliveJitterMs",
    "stabilityThresholdMs",
    "nonRetryableWakeRetryCooldownMs",
    "networkResumeReconnectDebounceMs"
], Ug = [
    "stdioConnectFailuresAreNonRetryable",
    "retryNonRetryableOnWake",
    "retryNonRetryableAutomatically",
    "networkResumeReconnectEnabled",
    "toolCallBoundedTimeoutEnabled"
], fs = {};

}
