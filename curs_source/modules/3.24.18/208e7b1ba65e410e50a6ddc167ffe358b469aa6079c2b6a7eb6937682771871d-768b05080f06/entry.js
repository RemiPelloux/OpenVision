import { Nx } from "./app.js";
import { Wb, Xx } from "./appMetricsCache_2.js";
import { Mx } from "./argv.js";
import { Js, Rl } from "./buildFlags.js";
import { aG } from "./cssDevService.js";
import { Db } from "./environmentService_2.js";
import { $x, Ho, Vx } from "./global.js";
import { Px } from "./index.js";
import { Ox } from "./jsonc.js";
import { jlt } from "./main.js";
import { At, sa } from "./performance.js";
import { Rv, xb } from "./reactDevToolsOptIn.js";
import { Cv } from "./rendererProcessInventoryCollector.js";
import { oG } from "./ripgrepHelper.js";
import { jx, qx, zx } from "./sleepWakeRecorder.js";
import { KLe, MO } from "./span.js";
import { DTe } from "./staticHtmlPngCapture_2.js";
import { net } from "./telemetryUtils_3.js";
import { h } from "./tslib.es6.js";
import { fm } from "./unc.js";
import { Ob } from "./userDataPath.js";
var PTe = {};
Object.defineProperty(PTe, "StaticHtmlPngCapture", {
    enumerable: true,
    get: ()=>DTe
});
export { PTe };
!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "989392f0-5232-5727-97f9-f18ad5696689");
    } catch (e) {}
}();
function B(e, t, n, r) {
    var s = arguments.length, i = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(e, t, n, r);
    else for(var o = e.length - 1; o >= 0; o--)(a = e[o]) && (i = (s < 3 ? a(i) : s > 3 ? a(t, n, i) : a(t, n)) || i);
    return s > 3 && i && Object.defineProperty(t, n, i), i;
}
function w(e, t) {
    return function(n, r) {
        t(n, r, e);
    };
}
function Pb(e) {
    const t = [];
    typeof e == "number" && t.push("code/timeOrigin", e);
    function n(i, a) {
        t.push(i, a?.startTime ?? Date.now());
    }
    function r() {
        const i = [];
        for(let a = 0; a < t.length; a += 2)i.push({
            name: t[a],
            startTime: t[a + 1]
        });
        return i;
    }
    function s(i) {
        for(let a = t.length - 2; a >= 0; a -= 2)t[a] === i && t.splice(a, 2);
    }
    return {
        mark: n,
        getMarks: r,
        clearMarks: s
    };
}
function DLe() {
    if (typeof performance == "object" && typeof performance.mark == "function" && !performance.nodeTiming) {
        if (typeof performance.timeOrigin != "number" && !performance.timing) return Pb();
        {
            const e = new Map;
            return {
                mark (t, n) {
                    if (!e.has(t)) {
                        const [r] = performance.getEntriesByName(t, "mark");
                        r && e.set(t, r.startTime);
                    }
                    e.has(t) && performance.clearMarks(t), performance.mark(t, n);
                },
                clearMarks (t) {
                    e.delete(t), performance.clearMarks(t);
                },
                getMarks () {
                    let t = performance.timeOrigin;
                    typeof t != "number" && (t = performance.timing.navigationStart || performance.timing.redirectStart || performance.timing.fetchStart);
                    const n = [];
                    for (const [s, i] of e)n.push({
                        name: s,
                        startTime: i
                    });
                    for (const s of performance.getEntriesByType("mark"))n.push({
                        name: s.name,
                        startTime: s.startTime
                    });
                    n.sort((s, i)=>s.startTime - i.startTime);
                    const r = [
                        {
                            name: "code/timeOrigin",
                            startTime: Math.round(t)
                        }
                    ];
                    for (const s of n)r.push({
                        name: s.name,
                        startTime: Math.round(t + s.startTime)
                    });
                    return r;
                }
            };
        }
    } else if (typeof process == "object") {
        const e = performance?.timeOrigin;
        return Pb(e);
    } else return console.trace("perf-util loaded in UNKNOWN environment"), Pb();
}
function OLe(e) {
    return e.MonacoPerformanceMarks || (e.MonacoPerformanceMarks = DLe()), e.MonacoPerformanceMarks;
}
import * as Lx from "os";
import * as Ga from "path";
function ULe(e, t) {
    process.env.VSCODE_DEV && (t = "code-oss-dev");
    const n = process.env.VSCODE_PORTABLE;
    if (n) return Ga.join(n, "user-data");
    let r = process.env.VSCODE_APPDATA;
    if (r) return Ga.join(r, t);
    const s = e["user-data-dir"];
    if (s) return s;
    switch(process.platform){
        case "win32":
            if (r = process.env.APPDATA, !r) {
                const i = process.env.USERPROFILE;
                if (typeof i != "string") throw new Error("Windows: Unexpected undefined %USERPROFILE% environment variable");
                r = Ga.join(i, "AppData", "Roaming");
            }
            break;
        case "darwin":
            r = Ga.join(Lx.homedir(), "Library", "Application Support");
            break;
        case "linux":
            r = process.env.XDG_CONFIG_HOME || Ga.join(Lx.homedir(), ".config");
            break;
        default:
            throw new Error("Platform not supported");
    }
    return Ga.join(r, t);
}
function xLe() {
    const e = xx();
    return e ? Array.from(e) : [];
}
function xx() {
    return process.uncHostAllowlist;
}
function gm(e) {
    if (process.platform !== "win32") return;
    const t = xx();
    if (t) if (typeof e == "string") t.add(e.toLowerCase());
    else for (const n of FLe(e))gm(n);
}
function FLe(e) {
    const t = new Set;
    if (Array.isArray(e)) for (const n of e)typeof n == "string" && t.add(n);
    return Array.from(t);
}
function Fx(e) {
    if (typeof e != "string") return;
    const t = [
        "\\\\.\\UNC\\",
        "\\\\?\\UNC\\",
        "\\\\"
    ];
    let n;
    for (const r of t){
        if (e.indexOf(r) !== 0) continue;
        const i = e.indexOf("\\", r.length);
        if (i === -1) continue;
        const a = e.substring(r.length, i);
        if (a) {
            n = a;
            break;
        }
    }
    return n;
}
function WLe() {
    process.platform === "win32" && (process.restrictUNCAccess = !1);
}
function BLe() {
    return process.platform !== "win32" ? !0 : process.restrictUNCAccess === !1;
}
function Wx(e, t = !1) {
    let n = 0;
    const r = e.length;
    let s = "", i = 0, a = 16, o = 0;
    function l(S) {
        let k = 0, y = 0;
        for(; k < S;){
            const b = e.charCodeAt(n);
            if (b >= 48 && b <= 57) y = y * 16 + b - 48;
            else if (b >= 65 && b <= 70) y = y * 16 + b - 65 + 10;
            else if (b >= 97 && b <= 102) y = y * 16 + b - 97 + 10;
            else break;
            n++, k++;
        }
        return k < S && (y = -1), y;
    }
    function d(S) {
        n = S, s = "", i = 0, a = 16, o = 0;
    }
    function u() {
        const S = n;
        if (e.charCodeAt(n) === 48) n++;
        else for(n++; n < e.length && El(e.charCodeAt(n));)n++;
        if (n < e.length && e.charCodeAt(n) === 46) if (n++, n < e.length && El(e.charCodeAt(n))) for(n++; n < e.length && El(e.charCodeAt(n));)n++;
        else return o = 3, e.substring(S, n);
        let k = n;
        if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101)) if (n++, (n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) && n++, n < e.length && El(e.charCodeAt(n))) {
            for(n++; n < e.length && El(e.charCodeAt(n));)n++;
            k = n;
        } else o = 3;
        return e.substring(S, k);
    }
    function m() {
        let S = "", k = n;
        for(;;){
            if (n >= r) {
                S += e.substring(k, n), o = 2;
                break;
            }
            const y = e.charCodeAt(n);
            if (y === 34) {
                S += e.substring(k, n), n++;
                break;
            }
            if (y === 92) {
                if (S += e.substring(k, n), n++, n >= r) {
                    o = 2;
                    break;
                }
                switch(e.charCodeAt(n++)){
                    case 34:
                        S += '"';
                        break;
                    case 92:
                        S += "\\";
                        break;
                    case 47:
                        S += "/";
                        break;
                    case 98:
                        S += "\b";
                        break;
                    case 102:
                        S += "\f";
                        break;
                    case 110:
                        S += `
`;
                        break;
                    case 114:
                        S += "\r";
                        break;
                    case 116:
                        S += "	";
                        break;
                    case 117:
                        {
                            const I = l(4);
                            I >= 0 ? S += String.fromCharCode(I) : o = 4;
                            break;
                        }
                    default:
                        o = 5;
                }
                k = n;
                continue;
            }
            if (y >= 0 && y <= 31) if (Ev(y)) {
                S += e.substring(k, n), o = 2;
                break;
            } else o = 6;
            n++;
        }
        return S;
    }
    function f() {
        if (s = "", o = 0, i = n, n >= r) return i = r, a = 17;
        let S = e.charCodeAt(n);
        if (Lb(S)) {
            do n++, s += String.fromCharCode(S), S = e.charCodeAt(n);
            while (Lb(S))
            return a = 15;
        }
        if (Ev(S)) return n++, s += String.fromCharCode(S), S === 13 && e.charCodeAt(n) === 10 && (n++, s += `
`), a = 14;
        switch(S){
            case 123:
                return n++, a = 1;
            case 125:
                return n++, a = 2;
            case 91:
                return n++, a = 3;
            case 93:
                return n++, a = 4;
            case 58:
                return n++, a = 6;
            case 44:
                return n++, a = 5;
            case 34:
                return n++, s = m(), a = 10;
            case 47:
                {
                    const k = n - 1;
                    if (e.charCodeAt(n + 1) === 47) {
                        for(n += 2; n < r && !Ev(e.charCodeAt(n));)n++;
                        return s = e.substring(k, n), a = 12;
                    }
                    if (e.charCodeAt(n + 1) === 42) {
                        n += 2;
                        const y = r - 1;
                        let b = !1;
                        for(; n < y;){
                            if (e.charCodeAt(n) === 42 && e.charCodeAt(n + 1) === 47) {
                                n += 2, b = !0;
                                break;
                            }
                            n++;
                        }
                        return b || (n++, o = 1), s = e.substring(k, n), a = 13;
                    }
                    return s += String.fromCharCode(S), n++, a = 16;
                }
            case 45:
                if (s += String.fromCharCode(S), n++, n === r || !El(e.charCodeAt(n))) return a = 16;
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return s += u(), a = 11;
            default:
                for(; n < r && v(S);)n++, S = e.charCodeAt(n);
                if (i !== n) {
                    switch(s = e.substring(i, n), s){
                        case "true":
                            return a = 8;
                        case "false":
                            return a = 9;
                        case "null":
                            return a = 7;
                    }
                    return a = 16;
                }
                return s += String.fromCharCode(S), n++, a = 16;
        }
    }
    function v(S) {
        if (Lb(S) || Ev(S)) return !1;
        switch(S){
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
                return !1;
        }
        return !0;
    }
    function T() {
        let S;
        do S = f();
        while (S >= 12 && S <= 15)
        return S;
    }
    return {
        setPosition: d,
        getPosition: ()=>n,
        scan: t ? T : f,
        getToken: ()=>a,
        getTokenValue: ()=>s,
        getTokenOffset: ()=>i,
        getTokenLength: ()=>n - i,
        getTokenError: ()=>o
    };
}
function Lb(e) {
    return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e === 5760 || e >= 8192 && e <= 8203 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function Ev(e) {
    return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function El(e) {
    return e >= 48 && e <= 57;
}
function Bx(e, t) {
    if (!e) return;
    let n = e;
    for (const r of t)if (typeof r == "string") {
        if (n.type !== "object" || !Array.isArray(n.children)) return;
        let s = !1;
        for (const i of n.children)if (Array.isArray(i.children) && i.children[0].value === r) {
            n = i.children[1], s = !0;
            break;
        }
        if (!s) return;
    } else {
        const s = r;
        if (n.type !== "array" || s < 0 || !Array.isArray(n.children) || s >= n.children.length) return;
        n = n.children[s];
    }
    return n;
}
function bl(e) {
    switch(typeof e){
        case "boolean":
            return "boolean";
        case "number":
            return "number";
        case "string":
            return "string";
        case "object":
            {
                if (e) {
                    if (Array.isArray(e)) return "array";
                } else return "null";
                return "object";
            }
        default:
            return "null";
    }
}
function Gx(e) {
    return e.cliOptOut === !0 ? !1 : e.cliOptIn === !0 ? !0 : e.smokeTestDriver === !0 ? !1 : e.argvOptIn !== void 0 ? e.argvOptIn : e.internalBuild && !e.isDevBuild;
}
function On() {
    return globalThis._CURSOR_SENTRY;
}
function $Le() {
    return {
        send: function(t) {
            const n = On().buffer;
            return n.length < 64 && n.push(t), Promise.resolve({
                statusCode: 200
            });
        },
        flush: function(t) {
            return Promise.resolve(!0);
        }
    };
}
function jLe() {
    return {
        send: function(e) {
            return On().transport.send(e);
        },
        flush: function(e) {
            return On().transport.flush(e);
        }
    };
}
function HLe() {
    return {
        defaultIntegrations: [],
        dsn: Js.developmentTooling ? $x : Vx,
        maxBreadcrumbs: 200,
        transport: jLe
    };
}
function qLe(e, t) {
    return e.suspendTime <= t.resumeTime && t.suspendTime <= e.resumeTime;
}
function YLe(e, t = Date.now) {
    let n;
    return {
        get (r) {
            const s = t();
            if (n && s - n.at < r) return n.value;
            const i = e();
            return n = {
                at: s,
                value: i
            }, i;
        }
    };
}
import { app as Fb } from "electron";
function XLe() {
    Fb.getAppMetrics = ()=>Cv(Xx);
}
function Iv() {
    return globalThis._VSCODE_NLS_MESSAGES;
}
function vm() {
    return globalThis._VSCODE_NLS_LANGUAGE;
}
function Zx(e, t) {
    const n = Iv()?.[e];
    if (typeof n != "string") {
        if (typeof t == "string") return t;
        throw new Error(`!!! NLS MISSING: ${e} !!!`);
    }
    return n;
}
function n4(e) {
    switch(e){
        case 0:
            return "Web";
        case 1:
            return "Mac";
        case 2:
            return "Linux";
        case 3:
            return "Windows";
    }
}
function r4(e) {
    return parseFloat(e) >= 25;
}
function ZLe(e, t, n = 0, r = e.length) {
    let s = n, i = r;
    for(; s < i;){
        const a = Math.floor((s + i) / 2);
        t(e[a]) ? s = a + 1 : i = a;
    }
    return s - 1;
}
function eUe(e, t, n = 0, r = e.length) {
    let s = n, i = r;
    for(; s < i;){
        const a = Math.floor((s + i) / 2);
        t(e[a]) ? i = a : s = a + 1;
    }
    return s;
}
function nUe(e) {
    if (!e || typeof e != "object") return !1;
    const t = e;
    return t.code === "EPIPE" && t.syscall?.toUpperCase() === "WRITE";
}
function T4(e) {
    return e ? new Error(`Illegal state: ${e}`) : new Error("Illegal state");
}
function We(e) {
    return e ? e.message ? e.message : e.stack ? e.stack.split(`
`)[0] : String(e) : "Error";
}
function Rm(e, t, n = (r, s)=>r === s) {
    if (e === t) return !0;
    if (!e || !t || e.length !== t.length) return !1;
    for(let r = 0, s = e.length; r < s; r++)if (!n(e[r], t[r])) return !1;
    return !0;
}
function sUe(e, t, n) {
    return iUe(e.length, (r)=>n(e[r], t));
}
function iUe(e, t) {
    let n = 0, r = e - 1;
    for(; n <= r;){
        const s = (n + r) / 2 | 0, i = t(s);
        if (i < 0) n = s + 1;
        else if (i > 0) r = s - 1;
        else return s;
    }
    return -(n + 1);
}
function aUe(e, t, n) {
    if (n === 0) return [];
    const r = e.slice(0, n).sort(t);
    return oUe(e, t, r, n, e.length), r;
}
function oUe(e, t, n, r, s) {
    for(const i = n.length; r < s; r++){
        const a = e[r];
        if (t(a, n[i - 1]) < 0) {
            n.pop();
            const o = eUe(n, (l)=>t(a, l) < 0);
            n.splice(o, 0, a);
        }
    }
}
function wn(e) {
    return e.filter((t)=>!!t);
}
function Zs(e, t = (n)=>n) {
    const n = new Set;
    return e.filter((r)=>{
        const s = t(r);
        return n.has(s) ? !1 : (n.add(s), !0);
    });
}
function E4(e, t) {
    let n;
    if (typeof t == "number") {
        let r = t;
        n = ()=>{
            const s = Math.sin(r++) * 179426549;
            return s - Math.floor(s);
        };
    } else n = Math.random;
    for(let r = e.length - 1; r > 0; r -= 1){
        const s = Math.floor(n() * (r + 1)), i = e[r];
        e[r] = e[s], e[s] = i;
    }
}
function cUe(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function lUe(e, t) {
    return (n, r)=>t(e(n), e(r));
}
function dUe(e, t) {
    const n = Object.create(null);
    for (const r of e){
        const s = t(r);
        let i = n[s];
        i || (i = n[s] = []), i.push(r);
    }
    return n;
}
function Dv(e, t) {
    const n = this;
    let r = !1, s;
    return function() {
        if (r) return s;
        if (r = !0, t) try {
            s = e.apply(n, arguments);
        } finally{
            t();
        }
        else s = e.apply(n, arguments);
        return s;
    };
}
function mUe(e) {
    const t = [];
    return e.forEach((n, r)=>{
        t.push(`${r} => ${n}`);
    }), `Map(${e.size}) {${t.join(", ")}}`;
}
function pUe(e) {
    const t = [];
    return e.forEach((n)=>{
        t.push(n);
    }), `Set(${e.size}) {${t.join(", ")}}`;
}
function hUe(e) {
    return Array.isArray(e);
}
function nR(e, t) {
    if (!e) throw new Error(t ? `Assertion failed (${t})` : "Assertion Failed");
}
function Ln(e) {
    return typeof e == "string";
}
function Un(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date);
}
function fUe(e) {
    const t = Object.getPrototypeOf(Uint8Array);
    return typeof e == "object" && e instanceof t;
}
function Uv(e) {
    return typeof e == "number" && !isNaN(e);
}
function _Ue(e) {
    return !!e && typeof e[Symbol.iterator] == "function";
}
function x4(e) {
    return e === !0 || e === !1;
}
function aa(e) {
    return typeof e > "u";
}
function Cm(e) {
    return !Sr(e);
}
function Sr(e) {
    return aa(e) || e === null;
}
function vUe(e, t) {
    if (!e) throw new Error(t ? `Unexpected type, expected '${t}'` : "Unexpected type");
}
function rR(e) {
    return typeof e == "function";
}
function Zdt(e) {
    return e;
}
function iR(e) {
    return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0;
}
function aR(e, t) {
    return e.then((n)=>(t.isDisposed ? n.dispose() : t.add(n), n));
}
function wUe(e) {
    return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function CUe(e) {
    return e;
}
function MUe(e) {
    return !e || typeof e != "string" ? !0 : e.trim().length === 0;
}
function Qo(e) {
    return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function m5(e, t = " ") {
    const n = PUe(e, t);
    return Zo(n, t);
}
function PUe(e, t) {
    if (!e || !t) return e;
    const n = t.length;
    let r = 0;
    if (n === 1) {
        const s = t.charCodeAt(0);
        for(; r < e.length && e.charCodeAt(r) === s;)r++;
    } else for(; e.startsWith(t, r);)r += n;
    return e.substring(r);
}
function Zo(e, t) {
    if (!e || !t) return e;
    const n = t.length, r = e.length;
    if (n === 1) {
        let i = r;
        const a = t.charCodeAt(0);
        for(; i > 0 && e.charCodeAt(i - 1) === a;)i--;
        return e.substring(0, i);
    }
    let s = r;
    for(; s > 0 && e.endsWith(t, s);)s -= n;
    return e.substring(0, s);
}
function TR(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
function kR(e, t, n = 0, r = e.length, s = 0, i = t.length) {
    for(; n < r && s < i; n++, s++){
        const l = e.charCodeAt(n), d = t.charCodeAt(s);
        if (l < d) return -1;
        if (l > d) return 1;
    }
    const a = r - n, o = i - s;
    return a < o ? -1 : a > o ? 1 : 0;
}
function SR(e, t) {
    return ec(e, t, 0, e.length, 0, t.length);
}
function ec(e, t, n = 0, r = e.length, s = 0, i = t.length) {
    for(; n < r && s < i; n++, s++){
        let l = e.charCodeAt(n), d = t.charCodeAt(s);
        if (l === d) continue;
        if (l >= 128 || d >= 128) return kR(e.toLowerCase(), t.toLowerCase(), n, r, s, i);
        p5(l) && (l -= 32), p5(d) && (d -= 32);
        const u = l - d;
        if (u !== 0) return u;
    }
    const a = r - n, o = i - s;
    return a < o ? -1 : a > o ? 1 : 0;
}
function p5(e) {
    return e >= 97 && e <= 122;
}
function h5(e) {
    return e >= 65 && e <= 90;
}
function Ii(e, t) {
    return e.length === t.length && ec(e, t) === 0;
}
function yR(e, t) {
    const n = t.length;
    return t.length > e.length ? !1 : ec(e, t, 0, n) === 0;
}
function NUe(e, t) {
    const n = e.length, r = n - t.length;
    return r >= 0 && ec(e, t, r, n) === 0;
}
function DUe(e) {
    return 55296 <= e && e <= 56319;
}
function g5(e) {
    return 56320 <= e && e <= 57343;
}
function OUe(e, t) {
    return (e - 55296 << 10) + (t - 56320) + 65536;
}
function LUe() {
    return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
function WUe(e) {
    return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
function qv(e) {
    const t = e;
    return t ? [
        t.on,
        t.pause,
        t.resume,
        t.destroy
    ].every((n)=>typeof n == "function") : !1;
}
function bR(e) {
    const t = e;
    return t ? qv(t.stream) && Array.isArray(t.buffer) && typeof t.ended == "boolean" : !1;
}
function BUe(e, t) {
    const n = [];
    let r;
    for(; (r = e.read()) !== null;)n.push(r);
    return t(n);
}
function GUe(e, t, n) {
    const r = [];
    let s;
    for(; (s = e.read()) !== null && r.length < n;)r.push(s);
    return s === null && r.length > 0 ? t(r) : {
        read: ()=>{
            if (r.length > 0) return r.shift();
            if (typeof s < "u") {
                const i = s;
                return s = void 0, i;
            }
            return e.read();
        }
    };
}
function C5(e, t) {
    return new Promise((n, r)=>{
        const s = [];
        Fm(e, {
            onData: (i)=>{
                t && s.push(i);
            },
            onError: (i)=>{
                t ? r(i) : n(void 0);
            },
            onEnd: ()=>{
                n(t ? t(s) : void 0);
            }
        });
    });
}
function Fm(e, t, n) {
    e.on("error", (r)=>{
        n?.isCancellationRequested || t.onError(r);
    }), e.on("end", ()=>{
        n?.isCancellationRequested || t.onEnd();
    }), e.on("data", (r)=>{
        n?.isCancellationRequested || t.onData(r);
    });
}
function $Ue(e) {
    let t = !1;
    return {
        read: ()=>t ? null : (t = !0, e)
    };
}
function qUe(e, t) {
    return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function KUe(e, t, n) {
    e[n + 3] = t, t = t >>> 8, e[n + 2] = t, t = t >>> 8, e[n + 1] = t, t = t >>> 8, e[n] = t;
}
function zUe(e, t) {
    return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
function YUe(e, t, n) {
    e[n + 0] = t & 255, t = t >>> 8, e[n + 1] = t & 255, t = t >>> 8, e[n + 2] = t & 255, t = t >>> 8, e[n + 3] = t & 255;
}
function JUe(e, t) {
    return e[t];
}
function XUe(e, t, n) {
    e[n] = t;
}
function ZUe(e) {
    return $Ue(e);
}
function axe(e, t) {
    return !e && !t ? "file" : e;
}
function G5(e) {
    try {
        return decodeURIComponent(e);
    } catch  {
        return e.length > 3 ? e.substr(0, 3) + G5(e.substr(3)) : e;
    }
}
function eut(e) {
    return e;
}
function mxe(e) {
    return e.applicationValue !== void 0 || e.userValue !== void 0 || e.userLocalValue !== void 0 || e.userRemoteValue !== void 0 || e.workspaceValue !== void 0 || e.workspaceFolderValue !== void 0;
}
function OR(e, t) {
    const n = Object.create(null);
    for(const r in e)q5(n, r, e[r], t);
    return n;
}
function q5(e, t, n, r) {
    const s = t.split("."), i = s.pop();
    let a = e;
    for(let o = 0; o < s.length; o++){
        const l = s[o];
        let d = a[l];
        switch(typeof d){
            case "undefined":
                d = a[l] = Object.create(null);
                break;
            case "object":
                if (d === null) {
                    r(`Ignoring ${t} as ${s.slice(0, o + 1).join(".")} is null`);
                    return;
                }
                break;
            default:
                r(`Ignoring ${t} as ${s.slice(0, o + 1).join(".")} is ${JSON.stringify(d)}`);
                return;
        }
        a = d;
    }
    if (typeof a == "object" && a !== null) try {
        a[i] = n;
    } catch  {
        r(`Ignoring ${t} as ${s.join(".")} is ${JSON.stringify(a)}`);
    }
    else r(`Ignoring ${t} as ${s.join(".")} is ${JSON.stringify(a)}`);
}
function pxe(e, t) {
    const n = t.split(".");
    K5(e, n);
}
function K5(e, t) {
    if (!e) return;
    const n = t.shift();
    if (t.length === 0) {
        delete e[n];
        return;
    }
    if (Object.keys(e).indexOf(n) !== -1) {
        const r = e[n];
        typeof r == "object" && !Array.isArray(r) && (K5(r, t), Object.keys(r).length === 0 && delete e[n]);
    }
}
function Xv(e, t, n) {
    function r(a, o) {
        let l = a;
        for (const d of o){
            if (typeof l != "object" || l === null) return;
            l = l[d];
        }
        return l;
    }
    const s = t.split("."), i = r(e, s);
    return typeof i > "u" ? n : i;
}
function hxe(e) {
    return e.replace(/[\[\]]/g, "");
}
function gxe(e) {
    let t = !1;
    const n = new Map, r = new Map;
    if (fxe(e, (u)=>{
        if (e === u) return !0;
        const m = JSON.stringify(u);
        if (m.length < 30) return !0;
        const f = n.get(m);
        if (!f) {
            const v = {
                schemas: [
                    u
                ]
            };
            return n.set(m, v), r.set(u, v), !0;
        }
        return f.schemas.push(u), r.set(u, f), t = !0, !1;
    }), n.clear(), !t) return JSON.stringify(e);
    let i = "$defs";
    for(; e.hasOwnProperty(i);)i += "_";
    const a = [];
    function o(u) {
        return JSON.stringify(u, (m, f)=>{
            if (f !== u) {
                const v = r.get(f);
                if (v && v.schemas.length > 1) return v.id || (v.id = `_${a.length}`, a.push(v.schemas[0])), {
                    $ref: `#/${i}/${v.id}`
                };
            }
            return f;
        });
    }
    const l = o(e), d = [];
    for(let u = 0; u < a.length; u++)d.push(`"_${u}":${o(a[u])}`);
    return d.length ? `${l.substring(0, l.length - 1)},"${i}":{${d.join(",")}}}` : l;
}
function Ul(e) {
    return typeof e == "object" && e !== null;
}
function fxe(e, t) {
    if (!e || typeof e != "object") return;
    const n = (...l)=>{
        for (const d of l)Ul(d) && a.push(d);
    }, r = (...l)=>{
        for (const d of l)if (Ul(d)) for(const u in d){
            const m = d[u];
            Ul(m) && a.push(m);
        }
    }, s = (...l)=>{
        for (const d of l)if (Array.isArray(d)) for (const u of d)Ul(u) && a.push(u);
    }, i = (l)=>{
        if (Array.isArray(l)) for (const d of l)Ul(d) && a.push(d);
        else Ul(l) && a.push(l);
    }, a = [
        e
    ];
    let o = a.pop();
    for(; o;)t(o) && (n(o.additionalItems, o.additionalProperties, o.not, o.contains, o.propertyNames, o.if, o.then, o.else, o.unevaluatedItems, o.unevaluatedProperties), r(o.definitions, o.$defs, o.properties, o.patternProperties, o.dependencies, o.dependentSchemas), s(o.anyOf, o.allOf, o.oneOf, o.prefixItems), i(o.items)), o = a.pop();
}
function Y5(e) {
    return e.length > 0 && e.charAt(e.length - 1) === "#" ? e.substring(0, e.length - 1) : e;
}
function kxe(e) {
    return e.reduce((t, n)=>`${t}[${n}]`, "");
}
function Sxe(e) {
    switch(Array.isArray(e) ? e[0] : e){
        case "boolean":
            return !1;
        case "integer":
        case "number":
            return 0;
        case "string":
            return "";
        case "array":
            return [];
        case "object":
            return {};
        default:
            return null;
    }
}
function qa(e) {
    return e === 47 || e === 92;
}
function Xm(e, t, n) {
    const r = e === t;
    return !n || r ? r : !e || !t ? !1 : Ii(e, t);
}
function Nxe(e, t, n) {
    return n === 0 ? !0 : e.charCodeAt(0) !== t.charCodeAt(0) ? !1 : n === 1 ? !0 : e.charCodeAt(n - 1) !== t.charCodeAt(n - 1) ? !1 : e.startsWith(t);
}
function Dxe(e, t, n) {
    for(let r = 0; r < n; r++){
        let s = e.charCodeAt(r), i = t.charCodeAt(r);
        if (s !== i) {
            if (s >= 128 || i >= 128) return ec(e, t, r, n, r, n) === 0;
            if (s >= 97 && s <= 122 && (s -= 32), i >= 97 && i <= 122 && (i -= 32), s !== i) return !1;
        }
    }
    return !0;
}
function WR(e) {
    return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function nT(e) {
    const t = e.split(":");
    let n, r, s;
    for (const i of t){
        const a = Number(i);
        Uv(a) ? r === void 0 ? r = a : s === void 0 && (s = a) : n = n ? [
            n,
            i
        ].join(":") : i;
    }
    if (!n) throw new Error("Format for `--goto` should be: `FILE:LINE(:COLUMN)`");
    return {
        path: n,
        line: r !== void 0 ? r : void 0,
        column: s !== void 0 ? s : r !== void 0 ? 1 : void 0
    };
}
function v3(e) {
    return !!e && typeof e.then == "function";
}
function KR(e, t, n) {
    let r;
    const s = setTimeout(()=>{
        r?.(void 0), n?.();
    }, t);
    return Promise.race([
        e.finally(()=>clearTimeout(s)),
        new Promise((i)=>r = i)
    ]);
}
function rT() {
    let e, t;
    return {
        promise: new Promise((r, s)=>{
            e = r, t = s;
        }),
        resolve: e,
        reject: t
    };
}
function Gxe(e, t = (r)=>!!r, n = null) {
    let r = 0;
    const s = e.length, i = ()=>{
        if (r >= s) return Promise.resolve(n);
        const a = e[r++];
        return Promise.resolve(a()).then((l)=>t(l) ? Promise.resolve(l) : i());
    };
    return i();
}
function I3(e) {
    return Array.isArray(e) ? e.join(`
`) : e;
}
import * as Rt from "fs";
import { tmpdir as zxe } from "os";
import { promisify as Zm } from "util";
async function t0(e) {
    return Rt.promises.rm(e, {
        recursive: !0,
        force: !0,
        maxRetries: 3
    });
}
function Zxe(e, t = 1e3) {
    return new Promise((n)=>{
        let r = !1;
        const s = setInterval(()=>{
            r || (r = !0, Rt.access(e, (i)=>{
                r = !1, i && (clearInterval(s), n(void 0));
            }));
        }, t);
    });
}
function r4e(e) {
    return e ? {
        mode: typeof e.mode == "number" ? e.mode : 438,
        flag: typeof e.flag == "string" ? e.flag : "w"
    } : {
        mode: 438,
        flag: "w"
    };
}
async function a4e(e, t, n) {
    await Rt.promises.copyFile(e, t), await Rt.promises.chmod(t, n);
}
function Ue(e, t, n) {
    let r = null, s = null;
    if (typeof n.value == "function" ? (r = "value", s = n.value, s.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof n.get == "function" && (r = "get", s = n.get), !s) throw new Error("not supported");
    const i = `$memoize$${t}`;
    n[r] = function(...a) {
        return this.hasOwnProperty(i) || Object.defineProperty(this, i, {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: s.apply(this, a)
        }), this[i];
    };
}
function l4e(e) {
    return JSON.stringify(e, u4e);
}
function u4e(e, t) {
    return t instanceof RegExp ? {
        $mid: 2,
        source: t.source,
        flags: t.flags
    } : t;
}
function ic(e) {
    switch(e){
        case 100:
            return "req";
        case 101:
            return "cancel";
        case 102:
            return "subscribe";
        case 103:
            return "unsubscribe";
    }
}
function ep(e) {
    switch(e){
        case 200:
            return "init";
        case 201:
            return "reply:";
        case 202:
        case 203:
            return "replyErr:";
        case 204:
            return "event:";
    }
}
function ac(e) {
    let t = 0;
    for(let n = 0;; n += 7){
        const r = e.readUInt8();
        if (t |= (r & 127) << n, !(r & 128)) return t;
    }
}
function oc(e, t) {
    if (t === 0) {
        e.writeUInt8(0);
        return;
    }
    do {
        let n = t & 127;
        t = t >>> 7, t > 0 && (n |= 128), e.writeUInt8(n);
    }while (t !== 0)
}
function ql(e) {
    switch(e.readUInt8()){
        case 0:
            return;
        case 1:
            return e.read(ac(e)).toString();
        case 2:
            return e.read(ac(e)).buffer;
        case 3:
            return e.read(ac(e));
        case 7:
            return e.read(ac(e)).buffer;
        case 4:
            {
                const n = ac(e), r = [];
                for(let s = 0; s < n; s++)r.push(ql(e));
                return r;
            }
        case 5:
            return JSON.parse(e.read(ac(e)).toString());
        case 6:
            return ac(e);
    }
}
function z3(e) {
    switch(e){
        case 0:
            return "None";
        case 1:
            return "Regular";
        case 2:
            return "Control";
        case 3:
            return "Ack";
        case 5:
            return "Disconnect";
        case 6:
            return "ReplayRequest";
        case 7:
            return "PauseWriting";
        case 8:
            return "ResumeWriting";
        case 9:
            return "KeepAlive";
    }
}
import { createHash as g4e } from "crypto";
import { createServer as f4e, createConnection as _4e } from "net";
import { tmpdir as v4e } from "os";
import "zlib";
import sp from "electron";
import { Menu as D4e, MenuItem as S0, BrowserWindow as O4e } from "electron";
function bF(e, t, n) {
    const r = new D4e;
    return n.forEach((s)=>{
        let i;
        s.type === "separator" ? i = new S0({
            type: s.type
        }) : Array.isArray(s.submenu) ? i = new S0({
            submenu: bF(e, t, s.submenu),
            label: s.label
        }) : i = new S0({
            label: s.label,
            type: s.type,
            accelerator: s.accelerator,
            checked: s.checked,
            enabled: s.enabled,
            visible: s.visible,
            click: (a, o, l)=>e.sender.send(t, s.id, l)
        }), r.append(i);
    }), r;
}
function Xa(e) {
    return w0(e, 0);
}
function w0(e, t) {
    switch(typeof e){
        case "object":
            return e === null ? ga(349, t) : Array.isArray(e) ? G4e(e, t) : V4e(e, t);
        case "string":
            return NF(e, t);
        case "boolean":
            return B4e(e, t);
        case "number":
            return ga(e, t);
        case "undefined":
            return ga(937, t);
        default:
            return ga(617, t);
    }
}
function ga(e, t) {
    return (t << 5) - t + e | 0;
}
function B4e(e, t) {
    return ga(e ? 433 : 863, t);
}
function NF(e, t) {
    t = ga(149417, t);
    for(let n = 0, r = e.length; n < r; n++)t = ga(e.charCodeAt(n), t);
    return t;
}
function G4e(e, t) {
    return t = ga(104579, t), e.reduce((n, r)=>w0(r, n), t);
}
function V4e(e, t) {
    return t = ga(181387, t), Object.keys(e).sort().reduce((n, r)=>(n = NF(r, n), w0(e[r], n)), t);
}
function E0(e, t, n = 32) {
    const r = n - t, s = ~((1 << r) - 1);
    return (e << t | (s & e) >>> r) >>> 0;
}
function Jl(e, t = 32) {
    return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((n)=>n.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0");
}
async function $4e(e) {
    const n = new TextEncoder().encode(e), r = await crypto.subtle.digest("SHA-256", n);
    return Jl(r);
}
function H4e(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0") + "T" + String(e.getHours()).padStart(2, "0") + ":" + String(e.getMinutes()).padStart(2, "0") + ":" + String(e.getSeconds()).padStart(2, "0") + "." + (e.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
}
function J4e(e, t) {
    return b0(e["inspect-extensions"], e["inspect-brk-extensions"], 5870, t, e.debugId, e.extensionEnvironment);
}
function b0(e, t, n, r, s, i) {
    const a = t || e, o = a !== void 0 && a !== "" ? Number(a) : NaN, l = Number.isNaN(o) ? r ? null : n : o, d = l !== null ? !!t : !1;
    let u;
    if (i) try {
        u = JSON.parse(i);
    } catch  {}
    return {
        port: l,
        break: d,
        debugId: s,
        env: u
    };
}
import { homedir as Q4e, tmpdir as Z4e } from "os";
function e5e(e, t) {
    return b0(e["inspect-ptyhost"], e["inspect-brk-ptyhost"], 5877, t, e.extensionEnvironment);
}
function t5e(e, t) {
    return b0(e["inspect-sharedprocess"], e["inspect-brk-sharedprocess"], 5879, t, e.extensionEnvironment);
}
function ip(e, t) {
    return e.cmp(t);
}
function BF(e) {
    let t = null;
    for(let n = 0, r = e.length; n < r; n++){
        const s = e[n].substituteConstants();
        if (e[n] !== s && t === null) {
            t = [];
            for(let i = 0; i < n; i++)t[i] = e[i];
        }
        t !== null && (t[n] = s);
    }
    return t === null ? e : t;
}
function M0(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
function cc(e, t, n, r) {
    return e < n ? -1 : e > n ? 1 : t < r ? -1 : t > r ? 1 : 0;
}
function GF(e) {
    return e.type === 9 ? e.expr : [
        e
    ];
}
function Ni() {
    return new Date().toISOString();
}
function e6(e) {
    return Uv(e);
}
function i5e(e, t) {
    return e !== 0 && e <= t;
}
function F0(e, t, n) {
    switch(t){
        case 1:
            e.trace(n);
            break;
        case 2:
            e.debug(n);
            break;
        case 3:
            e.info(n);
            break;
        case 4:
            e.warn(n);
            break;
        case 5:
            e.error(n);
            break;
        case 0:
            break;
        default:
            throw new Error(`Invalid log level ${t}`);
    }
}
function o5e(e) {
    switch(e){
        case 1:
            return "trace";
        case 2:
            return "debug";
        case 3:
            return "info";
        case 4:
            return "warn";
        case 5:
            return "error";
        case 0:
            return "off";
    }
}
function c5e(e) {
    switch(e){
        case "trace":
            return 1;
        case "debug":
            return 2;
        case "info":
            return 3;
        case "warn":
            return 4;
        case "error":
            return 5;
        case "critical":
            return 5;
        case "off":
            return 0;
    }
}
function sd(e) {
    return e.create === !0;
}
function Ps(e) {
    return !!(e.capabilities & 2);
}
function G0(e) {
    return !!(e.capabilities & 262144) && typeof e.readdirWithMetadata == "function";
}
function V0(e) {
    return !!(e.capabilities & 8);
}
function l6(e) {
    return !!(e.capabilities & 131072);
}
function eo(e) {
    return !!(e.capabilities & 4);
}
function $0(e) {
    return !!(e.capabilities & 16);
}
function j0(e) {
    return Ps(e) ? !!(e.capabilities & 16384) : !1;
}
function d6(e) {
    return Ps(e) ? !!(e.capabilities & 32768) : !1;
}
function d5e(e) {
    return !!(e.capabilities & 65536);
}
function u5e(e, t) {
    return e.name = t ? `${t} (FileSystemError)` : "FileSystemError", e;
}
function u6(e) {
    if (!(typeof e.size != "number" || typeof e.mtime != "number")) return e.mtime.toString(29) + e.size.toString(31);
}
function to(e, t) {
    const n = Math.pow(10, t);
    return Math.round(e * n) / n;
}
function p5e(e) {
    if (e === void 0) return;
    const t = e.trim();
    if (!/^\d{1,5}$/.test(t)) return;
    const n = Number(t);
    if (!(n < 1 || n > 65535)) return n;
}
function h5e(e) {
    return `CDP ${e}`;
}
function v5e(e, t) {
    const n = e.isMacintosh && t.themeSource !== "system" ? t.macOSInterfaceStyleIsDark : t.shouldUseDarkColors;
    if (e.isWindows) {
        if (t.shouldUseHighContrastColors) return {
            dark: t.shouldUseInvertedColorScheme,
            highContrast: !0
        };
    } else if (e.isMacintosh) {
        if (t.shouldUseInvertedColorScheme || t.shouldUseHighContrastColors) return {
            dark: n,
            highContrast: !0
        };
    } else if (e.isLinux && t.shouldUseHighContrastColors) return {
        dark: !0,
        highContrast: !0
    };
    return {
        dark: n,
        highContrast: !1
    };
}
import Gt from "electron";
function k5e(e) {
    return e === "cursor-light-high-contrast" || e === "cursor-dark-high-contrast";
}
function w6(e) {
    return e === "cursor-light" || e === "cursor-light-high-contrast";
}
function HT(e) {
    switch(e){
        case "cursor-light":
            return "sidebar";
        case "cursor-dark":
            return "sidebar";
        case "cursor-light-high-contrast":
        case "cursor-dark-high-contrast":
            return;
        default:
            return e;
    }
}
function up(e) {
    switch(e){
        case "cursor-light":
        case "cursor-dark":
            return "mica";
        case "cursor-light-high-contrast":
        case "cursor-dark-high-contrast":
            return "none";
        default:
            return e;
    }
}
function mp(e) {
    switch(e){
        case "cursor-light":
            return "#00FFFFFF";
        case "cursor-dark":
            return "#00000000";
        case "cursor-light-high-contrast":
            return "#01FFFFFF";
        case "cursor-dark-high-contrast":
            return "#01000000";
        default:
            return e;
    }
}
function qT(e) {
    switch(e){
        case "cursor-light":
            return "#00FFFFFF";
        case "cursor-dark":
            return "#40000000";
        case "cursor-light-high-contrast":
            return "#01FFFFFF";
        case "cursor-dark-high-contrast":
            return "#01000000";
        default:
            return e;
    }
}
function E6(e, t, n, r) {
    const s = HT(t);
    return s === void 0 ? (n !== null && e.setVibrancy(null), e.setBackgroundColor(r), null) : (e.setBackgroundColor(qT(t)), n !== s && e.setVibrancy(s), s);
}
function zT(e) {
    return !!e.workspaceUri;
}
function R6(e) {
    return !!e.folderUri;
}
function C6(e) {
    return !!e.fileUri;
}
function R5e(e) {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getOwnPropertyDescriptor(e, "ok")?.value;
    return t === !0 ? Object.getOwnPropertyDescriptor(e, "value") !== void 0 : t === !1 ? typeof Object.getOwnPropertyDescriptor(e, "error")?.value == "string" : !1;
}
function sC(e = 0) {
    return Math.pow(1.2, e);
}
import C5e from "electron";
import JT from "electron";
function I5e(e, t) {
    const { glass: n, classic: r, ...s } = e;
    return {
        ...s,
        _: [],
        glass: t,
        classic: !t
    };
}
function oC(e) {
    let t, n = Number.MIN_VALUE;
    for (const r of e)r.lastFocusTime > n && (n = r.lastFocusTime, t = r);
    return t;
}
function so() {
    return JT.BrowserWindow.getAllWindows().filter((e)=>!e.webContents.isOffscreen());
}
import Os from "electron";
function cC() {
    return {
        fileBytes: 0,
        walBytes: 0,
        freeBytes: 0,
        categories: []
    };
}
function M5e(e) {
    return e === "composerHeaders" ? "composerIndex" : "otherKv";
}
function O6() {
    return "LENGTH(key) + COALESCE(LENGTH(value), 0)";
}
function lC(e, t) {
    const n = new Map;
    for (const s of e.categories)n.set(s.id, s);
    const r = t.fileBytes > 0;
    r && (n.delete("wal"), n.delete("sqliteFree"), n.delete("sqliteOverhead"));
    for (const s of t.categories)n.set(s.id, s);
    return {
        fileBytes: r ? t.fileBytes : e.fileBytes,
        walBytes: r ? t.walBytes : e.walBytes,
        freeBytes: r ? t.freeBytes : e.freeBytes,
        categories: [
            ...n.values()
        ]
    };
}
function D5e(e) {
    const t = e.categories.filter((s)=>s.id !== "sqliteFree" && s.id !== "wal" && s.id !== "sqliteOverhead").reduce((s, i)=>s + i.bytes, 0), n = Math.max(0, e.fileBytes - e.freeBytes), r = Math.max(0, n - t);
    return r <= 0 ? {
        ...e,
        categories: e.categories.filter((s)=>s.id !== "sqliteOverhead")
    } : lC(e, {
        fileBytes: 0,
        walBytes: 0,
        freeBytes: 0,
        categories: [
            {
                id: "sqliteOverhead",
                bytes: r,
                keyCount: 0
            }
        ]
    });
}
function U6(e) {
    return e.replaceAll("'", "''").replaceAll("[", "[[]").replaceAll("*", "[*]").replaceAll("?", "[?]");
}
function _C(e) {
    return e.isDefault || !!e.useDefaultFlags?.globalState;
}
async function B5e(e, t, n, r, s, i) {
    const a = (S)=>{
        try {
            return JSON.parse(S);
        } catch  {
            return S;
        }
    }, o = new Map, l = new Map;
    e.forEach((S, k)=>{
        o.set(k, S), l.set(k, a(S));
    });
    const d = new Map, u = new Map;
    t.forEach((S, k)=>{
        d.set(k, S), u.set(k, a(S));
    });
    const m = new Map, f = new Map;
    n.forEach((S, k)=>{
        m.set(k, S), f.set(k, a(S));
    }), console.group(r !== s ? `Storage: Application (path: ${r})` : `Storage: Application & Profile (path: ${r}, default profile)`);
    const v = [];
    if (o.forEach((S, k)=>{
        v.push({
            key: k,
            value: S
        });
    }), console.table(v), console.groupEnd(), console.log(l), r !== s) {
        console.group(`Storage: Profile (path: ${s}, profile specific)`);
        const S = [];
        d.forEach((k, y)=>{
            S.push({
                key: y,
                value: k
            });
        }), console.table(S), console.groupEnd(), console.log(u);
    }
    console.group(`Storage: Workspace (path: ${i})`);
    const T = [];
    m.forEach((S, k)=>{
        T.push({
            key: k,
            value: S
        });
    }), console.table(T), console.groupEnd(), console.log(f);
}
function X6(e) {
    return e.lastUpdatedAt ?? e.createdAt ?? 0;
}
function Q6(e) {
    return e.isArchived === !0;
}
function Z6(e) {
    return e.isArchived === !1;
}
function e8(e, t) {
    const n = Q6(e), r = Q6(t);
    if (r && !n && !Z6(e)) return !1;
    if (n && !r && !Z6(t)) return !0;
    const s = X6(e), i = X6(t);
    return s !== i ? s > i : n !== r ? n : !0;
}
import { fork as V5e } from "child_process";
function H5e(e) {
    return {
        get: (t, n = [])=>new Promise((r, s)=>{
                e.get(t, n, (i, a)=>{
                    if (i) return s(i);
                    r(a);
                });
            }),
        exec: (t)=>new Promise((n, r)=>{
                e.exec(t, (s)=>{
                    if (s) return r(s);
                    n();
                });
            }),
        close: ()=>new Promise((t)=>{
                e.close(()=>t());
            })
    };
}
import * as Li from "fs";
import { tmpdir as n8 } from "os";
function r8(e) {
    return /^[A-Za-z_][A-Za-z0-9_]*$/.test(e);
}
function s8(e) {
    return `"${e.replaceAll('"', '""')}"`;
}
async function i8(e) {
    const t = await Li.promises.statfs(e);
    return t.bavail * t.bsize;
}
async function J5e(e) {
    try {
        return (await Li.promises.stat(e)).isDirectory() ? (await Li.promises.access(e, Li.constants.W_OK | Li.constants.X_OK), !0) : !1;
    } catch  {
        return !1;
    }
}
function wC(e) {
    const t = e.exception;
    if (t) {
        const n = [];
        try {
            return t.values.forEach((r)=>{
                r.stacktrace.frames && n.push(...r.stacktrace.frames);
            }), n;
        } catch  {
            return;
        }
    }
}
function p8(e) {
    return typeof e == "object" && e !== null && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
}
function o3e(e) {
    return e === null || p8(e) || typeof e != "object" && typeof e != "function";
}
function c3e(e) {
    return typeof Event < "u" && kc(e, Event);
}
function l3e(e) {
    return typeof Element < "u" && kc(e, Element);
}
function RC(e) {
    return !!(e?.then && typeof e.then == "function");
}
function kc(e, t) {
    try {
        return e instanceof t;
    } catch  {
        return !1;
    }
}
function h8(e) {
    return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue));
}
function g3e(e) {
    return e.__sentry_original__;
}
function T8(e) {
    if (typeof e == "object" && e !== null) {
        const t = {};
        for(const n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
    } else return {};
}
function AC(e, t = 0) {
    return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function MC(e, t) {
    if (!Array.isArray(e)) return "";
    const n = [];
    for(let r = 0; r < e.length; r++){
        const s = e[r];
        try {
            h8(s) ? n.push("[VueViewModel]") : n.push(String(s));
        } catch  {
            n.push("[value cannot be serialized]");
        }
    }
    return n.join(t);
}
function v3e() {
    return Math.random() * 16;
}
function S8(e) {
    return e.exception?.values?.[0];
}
function pd(e) {
    const { message: t, event_id: n } = e;
    if (t) return t;
    const r = S8(e);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
}
function y8(e, t) {
    const n = S8(e);
    if (!n) return;
    const r = {
        type: "generic",
        handled: !0
    }, s = n.mechanism;
    if (n.mechanism = {
        ...r,
        ...s,
        ...t
    }, t && "data" in t) {
        const i = {
            ...s?.data,
            ...t.data
        };
        n.mechanism.data = i;
    }
}
function uk(e, t, n = 2) {
    if (!t || typeof t != "object" || n <= 0) return t;
    if (e && Object.keys(t).length === 0) return e;
    const r = {
        ...e
    };
    for(const s in t)Object.prototype.hasOwnProperty.call(t, s) && (r[s] = uk(r[s], t[s], n - 1));
    return r;
}
function P3e(e) {
    if (e) {
        if (typeof e == "object" && "deref" in e && typeof e.deref == "function") try {
            return e.deref();
        } catch  {
            return;
        }
        return e;
    }
}
function L8(e) {
    return e.split(",").map((t)=>{
        const n = t.indexOf("=");
        if (n === -1) return [];
        const r = t.slice(0, n), s = t.slice(n + 1);
        return [
            r,
            s
        ].map((i)=>{
            try {
                return decodeURIComponent(i.trim());
            } catch  {
                return;
            }
        });
    }).reduce((t, [n, r])=>(n && r && (t[n] = r), t), {});
}
function F8(e, t = !1) {
    const { host: n, path: r, pass: s, port: i, projectId: a, protocol: o, publicKey: l } = e;
    return `${o}://${l}${t && s ? `:${s}` : ""}@${n}${i ? `:${i}` : ""}/${r && `${r}/`}${a}`;
}
function B8(e) {
    if (typeof e == "boolean") return Number(e);
    const t = typeof e == "string" ? parseFloat(e) : e;
    if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) return t;
}
function V8(e) {
    return e > 9999999999 ? e / 1e3 : e;
}
function B3e(e) {
    const t = e;
    return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status;
}
function G3e(e) {
    return typeof e.getSpanJSON == "function";
}
function q3e(e) {
    return typeof e == "string" || e instanceof RegExp;
}
function J3e(e) {
    const t = Object.getPrototypeOf(e);
    return t?.constructor ? t.constructor.name : "null prototype";
}
function X3e() {
    const e = new WeakSet;
    function t(r) {
        return e.has(r) ? !0 : (e.add(r), !1);
    }
    function n(r) {
        e.delete(r);
    }
    return [
        t,
        n
    ];
}
function J8(e, t = []) {
    return [
        e,
        t
    ];
}
function Q3e(e, t) {
    const [n, r] = e;
    return [
        n,
        [
            ...r,
            t
        ]
    ];
}
function KC(e, t) {
    const n = e[1];
    for (const r of n){
        const s = r[0].type;
        if (t(r, s)) return !0;
    }
    return !1;
}
function eFe(e) {
    const t = e.reduce((s, i)=>s + i.length, 0), n = new Uint8Array(t);
    let r = 0;
    for (const s of e)n.set(s, r), r += s.length;
    return n;
}
function tFe(e) {
    return [
        {
            type: "span"
        },
        e
    ];
}
function eW(e) {
    return e && typeof e == "number" || e instanceof Date || Array.isArray(e);
}
function tW(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
function oFe(e, t, n = ()=>{}, r = ()=>{}) {
    let s;
    try {
        s = e();
    } catch (i) {
        throw t(i), n(), i;
    }
    return cFe(s, t, n, r);
}
function cFe(e, t, n, r) {
    return RC(e) ? e.then((s)=>(n(), r(s), s), (s)=>{
        throw t(s), n(), s;
    }) : (n(), r(e), e);
}
function oW(e, t) {
    const { extra: n, tags: r, user: s, contexts: i, level: a, sdkProcessingMetadata: o, breadcrumbs: l, fingerprint: d, eventProcessors: u, attachments: m, propagationContext: f, transactionName: v, span: T } = t;
    Ik(e, "extra", n), Ik(e, "tags", r), Ik(e, "user", s), Ik(e, "contexts", i), e.sdkProcessingMetadata = uk(e.sdkProcessingMetadata, o, 2), a && (e.level = a), v && (e.transactionName = v), T && (e.span = T), l.length && (e.breadcrumbs = [
        ...e.breadcrumbs,
        ...l
    ]), d.length && (e.fingerprint = [
        ...e.fingerprint,
        ...d
    ]), u.length && (e.eventProcessors = [
        ...e.eventProcessors,
        ...u
    ]), m.length && (e.attachments = [
        ...e.attachments,
        ...m
    ]), e.propagationContext = {
        ...e.propagationContext,
        ...f
    };
}
function Ik(e, t, n) {
    e[t] = uk(e[t], n, 1);
}
function yFe(e) {
    const t = e.protocol ? `${e.protocol}:` : "", n = e.port ? `:${e.port}` : "";
    return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function wFe(e) {
    return `${yFe(e)}${e.projectId}/envelope/`;
}
function kut(e) {
    return e;
}
function CFe(e) {
    return [
        {
            type: "log",
            item_count: e.length,
            content_type: "application/vnd.sentry.items.log+json"
        },
        {
            items: e
        }
    ];
}
function IFe(e, t, n, r) {
    const s = {};
    return t?.sdk && (s.sdk = {
        name: t.sdk.name,
        version: t.sdk.version
    }), n && r && (s.dsn = F8(r)), J8(s, [
        CFe(e)
    ]);
}
function MFe(e) {
    switch(typeof e){
        case "number":
            return Number.isInteger(e) ? {
                value: e,
                type: "integer"
            } : {
                value: e,
                type: "double"
            };
        case "boolean":
            return {
                value: e,
                type: "boolean"
            };
        case "string":
            return {
                value: e,
                type: "string"
            };
        default:
            {
                let t = "";
                try {
                    t = JSON.stringify(e) ?? "";
                } catch  {}
                return {
                    value: t,
                    type: "string"
                };
            }
    }
}
function xi(e, t, n, r = !0) {
    n && (!e[t] || r) && (e[t] = n);
}
function LFe(e) {
    const t = [];
    e.message && t.push(e.message);
    try {
        const n = e.exception.values[e.exception.values.length - 1];
        n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`));
    } catch  {}
    return t;
}
function BFe(e, t) {
    return e(t.stack || "", 1);
}
function GFe(e, t) {
    const n = {
        type: t.name || t.constructor.name,
        value: t.message
    }, r = BFe(e, t);
    return r.length && (n.stacktrace = {
        frames: r
    }), n;
}
function o6e(e = []) {
    for(let t = e.length - 1; t >= 0; t--){
        const n = e[t];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null;
    }
    return null;
}
function c6e(e) {
    return e.exception?.values?.length ? !e.message && !e.exception.values.some((t)=>t.stacktrace || t.type && t.type !== "Error" || t.value) : !1;
}
function d6e(e, t, n, r, s, i) {
    if (!s.exception?.values || !i || !kc(i.originalException, Error)) return;
    const a = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
    a && (s.exception.values = pI(e, t, r, i.originalException, n, s.exception.values, a, 0));
}
function pI(e, t, n, r, s, i, a, o) {
    if (i.length >= n + 1) return i;
    let l = [
        ...i
    ];
    if (kc(r[s], Error)) {
        LW(a, o);
        const d = e(t, r[s]), u = l.length;
        UW(d, s, u, o), l = pI(e, t, n, r[s], s, [
            d,
            ...l
        ], d, u);
    }
    return Array.isArray(r.errors) && r.errors.forEach((d, u)=>{
        if (kc(d, Error)) {
            LW(a, o);
            const m = e(t, d), f = l.length;
            UW(m, `errors[${u}]`, f, o), l = pI(e, t, n, d, s, [
                m,
                ...l
            ], m, f);
        }
    }), l;
}
function LW(e, t) {
    e.mechanism = {
        handled: !0,
        type: "auto.core.linked_errors",
        ...e.mechanism,
        ...e.type === "AggregateError" && {
            is_exception_group: !0
        },
        exception_id: t
    };
}
function UW(e, t, n, r) {
    e.mechanism = {
        handled: !0,
        ...e.mechanism,
        type: "chained",
        source: t,
        exception_id: n,
        parent_id: r
    };
}
function $W(e) {
    e.exception?.values?.forEach((t)=>{
        t.stacktrace?.frames?.forEach((n)=>{
            delete n.module_metadata;
        });
    });
}
function _6e(e) {
    const t = {};
    let n = 0;
    for(; n < e.length;){
        const r = e.indexOf("=", n);
        if (r === -1) break;
        let s = e.indexOf(";", n);
        if (s === -1) s = e.length;
        else if (s < r) {
            n = e.lastIndexOf(";", r - 1) + 1;
            continue;
        }
        const i = e.slice(n, r).trim();
        if (t[i] === void 0) {
            let a = e.slice(r + 1, s).trim();
            a.charCodeAt(0) === 34 && (a = a.slice(1, -1));
            try {
                t[i] = a.indexOf("%") !== -1 ? decodeURIComponent(a) : a;
            } catch  {
                t[i] = a;
            }
        }
        n = s + 1;
    }
    return t;
}
function k6e(e) {
    if (!e) return null;
    for (const t of e.split(";"))if (t.startsWith("for=")) return t.slice(4);
    return null;
}
function S6e(e) {
    return /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/.test(e);
}
function zW(e) {
    return e === "warn" ? "warning" : [
        "fatal",
        "error",
        "warning",
        "log",
        "info",
        "debug"
    ].includes(e) ? e : "log";
}
function P6e(e, t) {
    return t ? !!(N6e(e, t) || D6e(e, t)) : !1;
}
function N6e(e, t) {
    const n = e.message, r = t.message;
    return !(!n && !r || n && !r || !n && r || n !== r || !QW(e, t) || !XW(e, t));
}
function D6e(e, t) {
    const n = ZW(t), r = ZW(e);
    return !(!n || !r || n.type !== r.type || n.value !== r.value || !QW(e, t) || !XW(e, t));
}
function XW(e, t) {
    let n = wC(e), r = wC(t);
    if (!n && !r) return !0;
    if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) return !1;
    for(let s = 0; s < r.length; s++){
        const i = r[s], a = n[s];
        if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) return !1;
    }
    return !0;
}
function QW(e, t) {
    let n = e.fingerprint, r = t.fingerprint;
    if (!n && !r) return !0;
    if (n && !r || !n && r) return !1;
    n = n, r = r;
    try {
        return n.join("") === r.join("");
    } catch  {
        return !1;
    }
}
function ZW(e) {
    return e.exception?.values?.[0];
}
function W6e(e, t) {
    let n = 0;
    for(let r = e.length - 1; r >= 0; r--){
        const s = e[r];
        s === "." ? e.splice(r, 1) : s === ".." ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
    }
    if (t) for(; n--; n)e.unshift("..");
    return e;
}
function iB(...e) {
    let t = "", n = !1;
    for(let r = e.length - 1; r >= -1 && !n; r--){
        const s = r >= 0 ? e[r] : "/";
        s && (t = `${s}/${t}`, n = s.charAt(0) === "/");
    }
    return t = W6e(t.split("/").filter((r)=>!!r), !n).join("/"), (n ? "/" : "") + t || ".";
}
function aB(e) {
    let t = 0;
    for(; t < e.length && e[t] === ""; t++);
    let n = e.length - 1;
    for(; n >= 0 && e[n] === ""; n--);
    return t > n ? [] : e.slice(t, n - t + 1);
}
function G6e(e, t) {
    e = iB(e).slice(1), t = iB(t).slice(1);
    const n = aB(e.split("/")), r = aB(t.split("/")), s = Math.min(n.length, r.length);
    let i = s;
    for(let o = 0; o < s; o++)if (n[o] !== r[o]) {
        i = o;
        break;
    }
    let a = [];
    for(let o = i; o < n.length; o++)a.push("..");
    return a = a.concat(r.slice(i)), a.join("/");
}
function Ok(e) {
    try {
        e.__SENTRY_INSTRUMENTED__ = !0;
    } catch  {}
}
function Lk(e) {
    try {
        return e.__SENTRY_INSTRUMENTED__;
    } catch  {
        return !1;
    }
}
function q6e(e, t = {}) {
    switch(e){
        case "GET":
            return "select";
        case "POST":
            return t.Prefer?.includes("resolution=") ? "upsert" : "insert";
        case "PATCH":
            return "update";
        case "DELETE":
            return "delete";
        default:
            return "<unknown-op>";
    }
}
function t8e(e) {
    return {
        ...e,
        path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
        keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
        unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0
    };
}
function n8e(e) {
    return e.map((t)=>typeof t == "number" ? "<array>" : t).join(".");
}
function r8e(e) {
    const t = new Set;
    for (const r of e.issues){
        const s = n8e(r.path);
        s.length > 0 && t.add(s);
    }
    const n = Array.from(t);
    if (n.length === 0) {
        let r = "variable";
        if (e.issues.length > 0) {
            const s = e.issues[0];
            s !== void 0 && "expected" in s && typeof s.expected == "string" && (r = s.expected);
        }
        return `Failed to validate ${r}`;
    }
    return `Failed to validate keys: ${AC(n.join(", "), 100)}`;
}
function P8e(e) {
    return /%[sdifocO]/.test(e);
}
function N8e(e, t) {
    const n = {}, r = new Array(t.length).fill("{}").join(" ");
    return n["sentry.message.template"] = `${e} ${r}`, t.forEach((s, i)=>{
        n[`sentry.message.parameter.${i}`] = s;
    }), n;
}
function JB(e) {
    let t;
    const n = [];
    let r;
    return KC(e, (s, i)=>{
        if (i === "event" || i === "transaction" || i === "feedback") t = Array.isArray(s) ? s[1] : void 0;
        else if (i === "attachment") {
            const [a, o] = s;
            n.push({
                filename: a.filename,
                attachmentType: a.attachment_type,
                contentType: a.content_type,
                data: o
            });
        } else i === "profile" && (r = s[1]);
    }), t ? [
        t,
        n,
        r
    ] : void 0;
}
import * as aWe from "fs";
function oWe(e) {
    return e < 5e3 ? "2s-5s" : e < 1e4 ? "5s-10s" : e < 3e4 ? "10s-30s" : e < 6e4 ? "30s-60s" : "60s+";
}
function cWe(e) {
    const t = e / 1048576;
    return t < 100 ? "<100MB" : t < 500 ? "100MB-500MB" : t < 1024 ? "500MB-1GB" : t < 4 * 1024 ? "1GB-4GB" : t < 16 * 1024 ? "4GB-16GB" : "16GB+";
}
function Ws(e) {
    if (!e || typeof e != "object" || e instanceof RegExp) return e;
    const t = Array.isArray(e) ? [] : {};
    return Object.entries(e).forEach(([n, r])=>{
        t[n] = r && typeof r == "object" ? Ws(r) : r;
    }), t;
}
function jp(e, t, n = !0) {
    return Un(e) ? (Un(t) && Object.keys(t).forEach((r)=>{
        r in e ? n && (Un(e[r]) && Un(t[r]) ? jp(e[r], t[r], n) : e[r] = t[r]) : e[r] = t[r];
    }), e) : t;
}
function Bs(e, t) {
    if (e === t) return !0;
    if (e == null || t === null || t === void 0 || typeof e != typeof t || typeof e != "object" || Array.isArray(e) !== Array.isArray(t)) return !1;
    let n, r;
    if (Array.isArray(e)) {
        if (e.length !== t.length) return !1;
        for(n = 0; n < e.length; n++)if (!Bs(e[n], t[n])) return !1;
    } else {
        const s = [];
        for(r in e)s.push(r);
        s.sort();
        const i = [];
        for(r in t)i.push(r);
        if (i.sort(), !Bs(s, i)) return !1;
        for(n = 0; n < s.length; n++)if (!Bs(e[s[n]], t[s[n]])) return !1;
    }
    return !0;
}
function pWe(e) {
    const t = new Set;
    return JSON.stringify(e, (n, r)=>{
        if (Un(r) || Array.isArray(r)) {
            if (t.has(r)) return "[Circular]";
            t.add(r);
        }
        return typeof r == "bigint" ? `[BigInt ${r.toString()}]` : r;
    });
}
function i7(e, t) {
    const n = t.toLowerCase(), r = Object.keys(e).find((s)=>s.toLowerCase() === n);
    return r ? e[r] : e[t];
}
import Cc from "electron";
import { app as vWe } from "electron";
function TWe(e) {
    return typeof e?.backupFolder == "string";
}
function wWe(e) {
    return e && e.hasOwnProperty("folderUri");
}
import { createHash as FI } from "crypto";
function WI() {
    return {
        id: (Date.now() + Math.round(Math.random() * 1e3)).toString()
    };
}
import { createHash as RWe } from "crypto";
import { createServer as NWe } from "net";
function Jk(e) {
    return !!e.hostName && !!e.errorMessage;
}
function UWe(e, t, n) {
    let r, s, i, a, o;
    if (t) {
        for(a = t.offset, o = a + t.length, i = a; i > 0 && !Xk(e, i - 1);)i--;
        let I = o;
        for(; I < e.length && !Xk(e, I);)I++;
        s = e.substring(i, I), r = xWe(s, n);
    } else s = e, r = 0, i = 0, a = 0, o = e.length;
    const l = FWe(n, e);
    let d = !1, u = 0, m;
    n.insertSpaces ? m = KI(" ", n.tabSize || 4) : m = "	";
    const f = Wx(s, !1);
    let v = !1;
    function T() {
        return l + KI(m, r + u);
    }
    function S() {
        let I = f.scan();
        for(d = !1; I === 15 || I === 14;)d = d || I === 14, I = f.scan();
        return v = I === 16 || f.getTokenError() !== 0, I;
    }
    const k = [];
    function y(I, G, U) {
        !v && G < o && U > a && e.substring(G, U) !== I && k.push({
            offset: G,
            length: U - G,
            content: I
        });
    }
    let b = S();
    if (b !== 17) {
        const I = f.getTokenOffset() + i, G = KI(m, r);
        y(G, i, I);
    }
    for(; b !== 17;){
        let I = f.getTokenOffset() + f.getTokenLength() + i, G = S(), U = "";
        for(; !d && (G === 12 || G === 13);){
            const W = f.getTokenOffset() + i;
            y(" ", I, W), I = f.getTokenOffset() + f.getTokenLength() + i, U = G === 12 ? T() : "", G = S();
        }
        if (G === 2) b !== 1 && (u--, U = T());
        else if (G === 4) b !== 3 && (u--, U = T());
        else {
            switch(b){
                case 3:
                case 1:
                    u++, U = T();
                    break;
                case 5:
                case 12:
                    U = T();
                    break;
                case 13:
                    d ? U = T() : U = " ";
                    break;
                case 6:
                    U = " ";
                    break;
                case 10:
                    if (G === 6) {
                        U = "";
                        break;
                    }
                case 7:
                case 8:
                case 9:
                case 11:
                case 2:
                case 4:
                    G === 12 || G === 13 ? U = " " : G !== 5 && G !== 17 && (v = !0);
                    break;
                case 16:
                    v = !0;
                    break;
            }
            d && (G === 12 || G === 13) && (U = T());
        }
        const X = f.getTokenOffset() + i;
        y(U, I, X), b = G;
    }
    return k;
}
function KI(e, t) {
    let n = "";
    for(let r = 0; r < t; r++)n += e;
    return n;
}
function xWe(e, t) {
    let n = 0, r = 0;
    const s = t.tabSize || 4;
    for(; n < e.length;){
        const i = e.charAt(n);
        if (i === " ") r++;
        else if (i === "	") r += s;
        else break;
        n++;
    }
    return Math.floor(r / s);
}
function FWe(e, t) {
    for(let n = 0; n < t.length; n++){
        const r = t.charAt(n);
        if (r === "\r") return n + 1 < t.length && t.charAt(n + 1) === `
` ? `\r
` : "\r";
        if (r === `
`) return `
`;
    }
    return e && e.eol || `
`;
}
function Xk(e, t) {
    return `\r
`.indexOf(e.charAt(t)) !== -1;
}
function Id(e, t, n) {
    let r = zI(e, t), s = t.offset, i = t.offset + t.content.length;
    if (t.length === 0 || t.content.length === 0) {
        for(; s > 0 && !Xk(r, s - 1);)s--;
        for(; i < r.length && !Xk(r, i);)i++;
    }
    const a = UWe(r, {
        offset: s,
        length: i - s
    }, n);
    for(let l = a.length - 1; l >= 0; l--){
        const d = a[l];
        r = zI(r, d), s = Math.min(s, d.offset), i = Math.max(i, d.offset + d.length), i += d.content.length - d.length;
    }
    const o = e.length - (r.length - i) - s;
    return [
        {
            offset: s,
            length: o,
            content: r.substring(s, i)
        }
    ];
}
function zI(e, t) {
    return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
}
function GWe(e, t) {
    const n = t.slice(0).sort((s, i)=>{
        const a = s.offset - i.offset;
        return a === 0 ? s.length - i.length : a;
    });
    let r = e.length;
    for(let s = n.length - 1; s >= 0; s--){
        const i = n[s];
        if (i.offset + i.length <= r) e = zI(e, i);
        else throw new Error("Overlapping edit");
        r = i.offset;
    }
    return e;
}
function VWe(e) {
    if (!e) return;
    const t = e.indexOf("+");
    return t < 0 ? e : e.substr(0, t);
}
function Qk(e) {
    return e.hasOwnProperty("workspace");
}
function Zk(e) {
    return e.hasOwnProperty("folderUri");
}
function $We(e) {
    return e.hasOwnProperty("fileUri");
}
function jWe(e) {
    return T7(e) || k7(e);
}
function T7(e) {
    const t = e;
    return typeof t?.path == "string" && (!t.name || typeof t.name == "string");
}
function k7(e) {
    const t = e;
    return typeof t?.uri == "string" && (!t.name || typeof t.name == "string");
}
function KWe(e) {
    return e.workspace && typeof e.workspace == "object" && typeof e.workspace.id == "string" && typeof e.workspace.configPath == "string";
}
function zWe(e) {
    return typeof e.folderUri == "string";
}
function YWe(e) {
    return typeof e.fileUri == "string";
}
function XWe(e) {
    const t = {
        entries: []
    }, n = (r, s)=>r && r !== s.fsPath && r !== s.path;
    for (const r of e.workspaces)Zk(r) ? t.entries.push({
        folderUri: r.folderUri.toString(),
        label: n(r.label, r.folderUri) ? r.label : void 0,
        remoteAuthority: r.remoteAuthority
    }) : t.entries.push({
        workspace: {
            id: r.workspace.id,
            configPath: r.workspace.configPath.toString()
        },
        label: n(r.label, r.workspace.configPath) ? r.label : void 0,
        remoteAuthority: r.remoteAuthority
    });
    for (const r of e.files)t.entries.push({
        fileUri: r.fileUri.toString(),
        label: n(r.label, r.fileUri) ? r.label : void 0,
        remoteAuthority: r.remoteAuthority
    });
    return t;
}
import * as JI from "fs";
import QWe from "electron";
function ZWe(e, ...t) {
    const n = t.reduce((i, a)=>(i[a] = !0, i), {}), r = [
        /^ELECTRON_.+$/,
        /^VSCODE_(?!(PORTABLE|SHELL_LOGIN|ENV_REPLACE|ENV_APPEND|ENV_PREPEND)).+$/,
        /^SNAP(|_.*)$/,
        /^GDK_PIXBUF_.+$/
    ];
    Object.keys(e).filter((i)=>!n[i]).forEach((i)=>{
        for(let a = 0; a < r.length; a++)if (i.search(r[a]) !== -1) {
            delete e[i];
            break;
        }
    });
}
function y7(e) {
    if (!e) return;
    const t = new Set([
        "DEBUG",
        "NODE_OPTIONS",
        "VSCODE_NODE_OPTIONS",
        "LD_PRELOAD",
        "DYLD_INSERT_LIBRARIES"
    ]);
    for (const n of Object.keys(e))t.has(n.toUpperCase()) && delete e[n];
}
function eBe(e) {
    return e.length > 0 && !/^[0-9]/.test(e);
}
import { MessageChannelMain as nBe, app as rBe, utilityProcess as sBe } from "electron";
import { StringDecoder as w7 } from "string_decoder";
function iBe(e) {
    return typeof e.responseWindowId == "number";
}
import { app as E7 } from "electron";
function P7(e) {
    return typeof e == "string" && e.length > 0;
}
function dBe({ homeDir: e, envOverride: t }) {
    return t !== void 0 ? t : `${e.replace(/[\\/]+$/, "")}/.cursor/desktop-bridge`;
}
function N7(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function uBe(e) {
    return e === "local" || e === "cloud" || e === "draft" || e === "claude-code";
}
function mBe(e) {
    return e === "idle" || e === "running" || e === "completed" || e === "error" || e === "unknown";
}
function pBe(e) {
    if (!(!N7(e) || !P7(e.id) || typeof e.title != "string" || !uBe(e.source) || !mBe(e.status) || typeof e.lastUpdatedAt != "number" || !Number.isFinite(e.lastUpdatedAt) || typeof e.windowId != "number" || !Number.isInteger(e.windowId))) return {
        id: e.id,
        title: e.title,
        source: e.source,
        status: e.status,
        lastUpdatedAt: e.lastUpdatedAt,
        windowId: e.windowId
    };
}
function hBe(e) {
    return e === void 0 || typeof e == "boolean";
}
function gBe(e) {
    return new TextEncoder().encode(e).byteLength;
}
function MBe(e, t, n, r = Math.random) {
    const s = t * 2 ** e, i = Math.min(s, n);
    return r() * i;
}
import * as K7 from "fs";
import { networkInterfaces as DBe } from "os";
import { networkInterfaces as xBe } from "os";
import { platform as tA } from "process";
import { execSync as FBe } from "child_process";
function BBe() {
    return tA !== "win32" ? "notdefined" : process.arch === "ia32" && process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432") ? "mixed" : "native";
}
function GBe(e) {
    switch(tA){
        case "darwin":
            return e.split("IOPlatformUUID")[1].split(`
`)[0].replace(/\=|\s+|\"/ig, "").toLowerCase();
        case "win32":
            return e.toString().split("REG_SZ")[1].replace(/\r+|\n+|\s+/ig, "").toLowerCase();
        case "linux":
            return e.toString().replace(/\r+|\n+|\s+/ig, "").toLowerCase();
        case "freebsd":
            return e.toString().replace(/\r+|\n+|\s+/ig, "").toLowerCase();
        default:
            throw new Error(`Unsupported platform: ${process.platform}`);
    }
}
import * as tG from "net";
function $Be(e, t, n, r = 1) {
    let s = !1;
    return new Promise((i)=>{
        const a = setTimeout(()=>{
            if (!s) return s = !0, i(0);
        }, n);
        rA(e, t, r, (o)=>{
            if (!s) return s = !0, clearTimeout(a), i(o);
        });
    });
}
function rA(e, t, n, r) {
    if (t === 0) return r(0);
    const s = new tG.Socket;
    s.once("connect", ()=>(nG(s), rA(e + n, t - 1, n, r))), s.once("data", ()=>{}), s.once("error", (i)=>(nG(s), i.code !== "ECONNREFUSED" ? rA(e + n, t - 1, n, r) : r(e))), s.connect(e, "127.0.0.1");
}
function jBe(e, t, n, r = "127.0.0.1") {
    let s = !1, i, a = 1;
    const o = tG.createServer({
        pauseOnConnect: !0
    });
    function l(d, u) {
        s || (s = !0, o.removeAllListeners(), o.close(), i && clearTimeout(i), u(d));
    }
    return new Promise((d)=>{
        i = setTimeout(()=>{
            l(0, d);
        }, n), o.on("listening", ()=>{
            l(e, d);
        }), o.on("error", (u)=>{
            u && (u.code === "EADDRINUSE" || u.code === "EACCES") && a < t ? (e++, a++, o.listen(e, r)) : l(0, d);
        }), o.on("close", ()=>{
            l(0, d);
        }), o.listen(e, r);
    });
}
function nG(e) {
    try {
        e.removeAllListeners("connect"), e.removeAllListeners("error"), e.end(), e.destroy(), e.unref();
    } catch (t) {
        console.error(t);
    }
}
function HBe(e, t, n) {
    return e !== void 0 && e.mtimeMs === t && e.size === n;
}
function qBe(e, t, n, r) {
    return !e && HBe(t, n, r);
}
function iA(e) {
    const t = new Map;
    for (const [n, r] of e)t.set(n, r.hash);
    return t;
}
function KBe(e, t) {
    const n = new Map;
    for (const [r, s] of t)e?.get(r) !== s && n.set(r, s);
    return n;
}
function zBe(e, t) {
    if (!e) return;
    const n = KBe(e, t);
    return n.size > 0 ? n : void 0;
}
function aA(e, t) {
    return e === t;
}
function sG(e) {
    return e.endsWith(".css") && e.startsWith("vs/");
}
function YBe(e, t) {
    for (const n of t)if (e.has(n) || sG(n)) return !0;
    return !1;
}
function XBe(e, t) {
    const n = [];
    for (const r of t)e?.has(r) || n.push(r);
    return n;
}
Ax(aG, {
    rgDiskPath: ()=>oG
});
import { rgPath as ZBe } from "@vscode/ripgrep";
import { spawn as t7e } from "child_process";
import { relative as oA, join as cG } from "path";
import { createHash as lG } from "crypto";
import { promises as oS } from "fs";
import * as n7e from "child_process";
import * as uG from "fs";
import * as r7e from "os";
import * as cA from "path";
async function o7e(e) {
    if (cA.isAbsolute(e)) try {
        await uG.promises.access(e, uG.constants.X_OK);
    } catch  {
        return !1;
    }
    return new Promise((t)=>{
        try {
            n7e.execFile(e, [
                "--version"
            ], {
                timeout: 5e3,
                windowsHide: !0
            }, (n)=>t(!n));
        } catch  {
            t(!1);
        }
    });
}
function mG(e) {
    const t = new Set, n = [];
    for (const r of e.replace(/^\uFEFF/, "").split(/\r?\n/)){
        const s = r.replace(/\0/g, "").trim();
        !s || s.startsWith("docker-desktop") || t.has(s) || (t.add(s), n.push(s));
    }
    return n;
}
import * as l7e from "fs";
import * as d7e from "os";
import * as hG from "child_process";
import * as u7e from "path";
async function p7e() {
    const e = h7e();
    if (e === void 0) return !1;
    if (e >= 22e3) {
        const t = _G();
        if (t) return new Promise((n)=>{
            try {
                hG.execFile(t, [
                    "--status"
                ], (r)=>n(!r));
            } catch  {
                n(!1);
            }
        });
    } else {
        const t = g7e();
        if (t) try {
            if ((await l7e.promises.stat(t)).isFile()) return !0;
        } catch  {}
    }
    return !1;
}
function h7e() {
    const e = /(\d+)\.(\d+)\.(\d+)/g.exec(d7e.release());
    if (e) return parseInt(e[3]);
}
function fG(e) {
    const t = process.env.SystemRoot;
    if (t) {
        const n = process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432");
        return u7e.join(t, n ? "Sysnative" : "System32", e);
    }
}
function _G() {
    return fG("wsl.exe");
}
function g7e() {
    return fG("lxss\\LxssManager.dll");
}
function Md(e) {
    return e.res.statusCode && e.res.statusCode >= 200 && e.res.statusCode < 300 || e.res.statusCode === 1223;
}
function vG(e) {
    return e.res.statusCode === 204;
}
function TG(e) {
    return Array.isArray(e) ? e : typeof e == "string" ? e.split(",").map((t)=>t.trim()).filter((t)=>t.length > 0) : [];
}
function v7e(e) {
    return !!e.forwardPort;
}
function T7e(e) {
    if (e.scheme !== "http" && e.scheme !== "https") return;
    const t = /^(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d+)$/.exec(e.authority);
    if (t) return {
        address: t[1],
        port: +t[2]
    };
}
function EG(...e) {
    const t = new Set;
    for (const n of e)for (const r of n.split(/\r?\n/)){
        const s = r.trim().split(/\s+/);
        if (s.length < 4 || s[3] !== "0A") continue;
        const i = s[1].lastIndexOf(":");
        _S(t, Number.parseInt(s[1].slice(i + 1), 16));
    }
    return [
        ...t
    ].sort((n, r)=>n - r);
}
function y7e(e) {
    const t = new Set;
    for (const n of e.split(/[\0\r\n]+/)){
        const r = /^n.*:(\d+)$/.exec(n.trim());
        r && _S(t, Number.parseInt(r[1], 10));
    }
    return [
        ...t
    ].sort((n, r)=>n - r);
}
function w7e(e) {
    const t = new Set;
    for (const n of e.split(/\r?\n/)){
        const r = n.trim().split(/\s+/);
        if (r.length < 5 || r[0].toUpperCase() !== "TCP" || r[3].toUpperCase() !== "LISTENING" && !/^(?:0\.0\.0\.0|\[::\]):0$/.test(r[2])) continue;
        const s = r[1].lastIndexOf(":");
        _S(t, Number.parseInt(r[1].slice(s + 1), 10));
    }
    return [
        ...t
    ].sort((n, r)=>n - r);
}
function bG(...e) {
    const t = new Set;
    for (const n of e)for (const r of n)_S(t, r);
    return [
        ...t
    ].sort((n, r)=>n - r);
}
function _S(e, t) {
    Number.isInteger(t) && t >= 1 && t <= 65535 && e.add(t);
}
function RG(e) {
    if (!e) return;
    const t = e.indexOf(";"), n = (t >= 0 ? e.slice(0, t) : e).trim().toLowerCase();
    return n.length > 0 ? n : void 0;
}
async function I7e(e) {
    e.pid === void 0 && await new Promise((t, n)=>{
        e.once("spawn", t), e.once("error", n);
    });
}
function M7e(e, t, n, r, s, i) {
    return new Promise((a)=>{
        try {
            e(t, n, {
                encoding: "utf8",
                maxBuffer: 1024 * 1024,
                timeout: i,
                windowsHide: !0
            }, (o, l)=>{
                const d = typeof o?.code == "number" ? o.code : void 0;
                if (o && !(s && d === 1 && l.trim() === "")) {
                    a({
                        status: "unavailable"
                    });
                    return;
                }
                a({
                    status: "complete",
                    ports: r(l)
                });
            });
        } catch  {
            a({
                status: "unavailable"
            });
        }
    });
}
import { exec as Zp, execFile as eh, spawn as PG } from "child_process";
import { app as di, BrowserWindow as th, clipboard as ka, Menu as nh, nativeImage as fA, net as _A, powerMonitor as vA, screen as rh, shell as TA, webContents as NG } from "electron";
import * as Xt from "fs";
import { arch as L7e, cpus as U7e, freemem as x7e, loadavg as F7e, platform as W7e, release as B7e, tmpdir as kA, totalmem as G7e, type as V7e } from "os";
import { promisify as Lc } from "util";
import { filter as $7e, fromEvent as DG, map as j7e, NEVER as H7e, Observable as q7e, share as K7e, Subject as z7e, switchMap as Y7e, take as J7e } from "rxjs";
function X7e(e) {
    return e.isBuilt ? e.featureGateEnabled && e.userEnabled : !0;
}
import { createHash as eGe, randomBytes as yA, timingSafeEqual as tGe } from "crypto";
import * as Dd from "fs";
import * as nGe from "http";
import { join as rGe } from "path";
function BG(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function GG(e) {
    return BG(e) && typeof e.code == "string" ? e.code : void 0;
}
function Uc(e) {
    return e instanceof Error ? e.name : "Unknown error";
}
function sGe(e) {
    if (!Array.isArray(e)) return;
    const t = [];
    for (const n of e){
        const r = pBe(n);
        r && t.push(r);
    }
    return t;
}
function iGe(e) {
    if (!BG(e) || typeof e.outcome != "string") return !1;
    switch(e.outcome){
        case "submitted":
        case "queued":
            return typeof e.threadTitle == "string";
        case "not-found":
            return !0;
        case "not-sendable":
            return typeof e.reason == "string";
        case "error":
            return typeof e.message == "string";
        default:
            return !1;
    }
}
function Sa(e, t, n) {
    e.writableEnded || (e.writeHead(t, {
        "content-type": "application/json"
    }), e.end(JSON.stringify(n)));
}
import { safeStorage as oGe, app as cGe } from "electron";
import mGe from "assert";
function hGe(e) {
    const t = e.findIndex((n)=>!/^-/.test(n));
    if (t > -1) return [
        ...e.slice(0, t),
        ...e.slice(t + 1)
    ];
}
function fGe(e, ...t) {
    const n = e.indexOf("--");
    return n === -1 ? e.push(...t) : e.splice(n, 0, ...t), e;
}
function xc(e) {
    return e.VSCODE_CLI === "1";
}
import * as zG from "os";
import { promises as eV } from "fs";
import { userInfo as bGe } from "os";
function IGe(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
import { spawn as MGe } from "child_process";
function DGe() {
    return 1025 + Math.floor(64510 * Math.random());
}
function iV(e) {
    return e instanceof Error && "code" in e && typeof e.code == "string" ? e.code : void 0;
}
function _n(e, t) {
    return iV(e) === t;
}
function aV(e) {
    return _n(e, "ENOSPC") || _n(e, "EDQUOT");
}
function oV(e) {
    return _n(e, "EACCES") || _n(e, "EPERM") || _n(e, "EROFS");
}
function RA(e) {
    return iV(e) !== void 0 && "syscall" in e && typeof e.syscall == "string";
}
function CA(e) {
    if (!Number.isInteger(e) || e <= 0) return !1;
    try {
        return process.kill(e, 0), !0;
    } catch (t) {
        return _n(t, "EPERM");
    }
}
function LGe(e) {
    return `channels/${encodeURIComponent(e)}/latest.json`;
}
function AA({ generation: e, file: t }) {
    return `generations/${e}/${encodeURIComponent(t)}`;
}
function cV(e) {
    return Array.isArray(e) && e.every((t)=>typeof t == "string");
}
function lV(e) {
    for (const t of e){
        const n = t.codePointAt(0) ?? 0;
        if (n < 32 || n === 127) return !0;
    }
    return !1;
}
function lh(e, t) {
    return typeof e == "string" && e.length > 0 && e.length <= t && !lV(e);
}
function dV({ parsed: e, where: t, what: n }) {
    if (typeof e != "object" || e === null || Array.isArray(e)) throw new Error(`${t}: invalid ${n}: not an object`);
    return e;
}
function MA({ record: e, key: t, where: n, what: r }) {
    if (typeof e[t] != "string") throw new Error(`${n}: invalid ${r}: ${t} is not a string`);
}
function WGe({ record: e, key: t, where: n, what: r }) {
    if (e[t] !== void 0 && typeof e[t] != "string") throw new Error(`${n}: invalid ${r}: ${t} is not a string`);
}
function uV({ record: e, where: t, what: n }) {
    if (typeof e.pid != "number" || !Number.isInteger(e.pid) || e.pid < 0) throw new Error(`${t}: invalid ${n}: pid is not a non-negative integer`);
    return e.pid;
}
import * as vV from "crypto";
function $Ge(e, t) {
    let n = 0, r = [
        e
    ];
    for(; r.length > 0 && n < t + 1;){
        n += 1;
        const s = [];
        for (const i of r){
            const a = Array.isArray(i) ? i : typeof i == "object" && i !== null ? Object.values(i) : [];
            for (const o of a)s.push(o);
        }
        r = s;
    }
    return n;
}
function MS(e) {
    return vV.createHash("sha256").update(e).digest("hex");
}
function jGe(e) {
    const t = vV.createHash("sha256");
    for (const n of Object.keys(e).sort())t.update(`${n}
${e[n].sha256}
`);
    return t.digest("hex");
}
function kV(e, t) {
    const n = e.major - t.major || e.minor - t.minor || e.patch - t.patch;
    return n !== 0 ? n : e.pre === void 0 || t.pre === void 0 ? (e.pre === void 0 ? 1 : 0) - (t.pre === void 0 ? 1 : 0) : e.pre[0] - t.pre[0] || e.pre[1] - t.pre[1];
}
function mh(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function KGe({ candidateBuiltAt: e, floorBuiltAt: t }) {
    const n = t === void 0 ? Number.NaN : Date.parse(t);
    if (Number.isNaN(n)) return;
    const r = Date.parse(e);
    if (Number.isNaN(r)) return `builtAt ${JSON.stringify(e)} is not a date, so it cannot be ordered against the floor built ${t}`;
    if (r < n) return `built ${e}, before the floor built ${t}; never below the floor`;
}
function FA(e) {
    return {
        mainVersion: e.mainVersion,
        builtAt: e.builtAt,
        rollback: e.kind === "rollback"
    };
}
import * as PV from "crypto";
import * as ph from "fs";
import * as XGe from "path";
function eVe(e, t) {
    const n = Buffer.from(e, "utf8");
    return Buffer.concat([
        Buffer.from(`DSSEv1 ${n.length} `, "utf8"),
        n,
        Buffer.from(` ${t.byteLength} `, "utf8"),
        t
    ]);
}
function DV(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function WA(e, t, n) {
    return typeof e == "string" && e.length > 0 && e.length <= t && n.test(e);
}
function rVe(e, t, n) {
    try {
        const r = PV.createPublicKey({
            key: Buffer.from(e.spki, "base64"),
            format: "der",
            type: "spki"
        });
        return PV.verify("sha256", t, {
            key: r,
            dsaEncoding: "der"
        }, Buffer.from(n, "base64"));
    } catch  {
        return !1;
    }
}
function oVe(e) {
    switch(e){
        case "glass":
            return "Agents Window";
        case "unifiedAgent":
            return "Unified Agent";
        case "editor":
            return "Editor";
        default:
            return;
    }
}
import * as Bd from "child_process";
function Gd(e) {
    const t = {
        ...e.env
    };
    return ZWe(t), t;
}
function mVe(e) {
    let t = "";
    for (const n of e)n.indexOf(" ") >= 0 ? t += '"' + n + '"' : t += n, t += " ";
    return t;
}
function FV(e, t) {
    if (!e) return [];
    const n = [];
    let r = !1, s = !1, i = "";
    for (const a of e){
        switch(a){
            case t:
                if (!r && !s) {
                    n.push(i), i = "";
                    continue;
                }
                break;
            case "{":
                r = !0;
                break;
            case "}":
                r = !1;
                break;
            case "[":
                s = !0;
                break;
            case "]":
                s = !1;
                break;
        }
        i += a;
    }
    return i && n.push(i), n;
}
function eM(e, t) {
    return t.trimForExclusions && e.endsWith("/**") ? e.substring(0, e.length - 2) : e;
}
function gVe(e, t, n) {
    return function(r, s) {
        return typeof r == "string" && n.endsWith(r, e) ? t : null;
    };
}
function fVe(e, t, n) {
    const r = `/${e}`, s = `\\${e}`, i = function(o, l) {
        return typeof o != "string" ? null : l ? n.equals(l, e) ? t : null : n.equals(o, e) || n.endsWith(o, r) || n.endsWith(o, s) ? t : null;
    }, a = [
        e
    ];
    return i.basenames = a, i.patterns = [
        t
    ], i.allBasenames = a, i;
}
function kVe(e) {
    const t = e;
    return t ? typeof t.base == "string" && typeof t.pattern == "string" : !1;
}
function VV(e, t) {
    const n = e.filter((o)=>!!o.basenames);
    if (n.length < 2) return e;
    const r = n.reduce((o, l)=>{
        const d = l.basenames;
        return d ? o.concat(d) : o;
    }, []);
    let s;
    if (t) {
        s = [];
        for(let o = 0, l = r.length; o < l; o++)s.push(t);
    } else s = n.reduce((o, l)=>{
        const d = l.patterns;
        return d ? o.concat(d) : o;
    }, []);
    const i = function(o, l) {
        if (typeof o != "string") return null;
        if (!l) {
            let u;
            for(u = o.length; u > 0; u--){
                const m = o.charCodeAt(u - 1);
                if (m === 47 || m === 92) break;
            }
            l = o.substr(u);
        }
        const d = r.indexOf(l);
        return d !== -1 ? s[d] : null;
    };
    i.basenames = r, i.patterns = s, i.allBasenames = r;
    const a = e.filter((o)=>!o.basenames);
    return a.push(i), a;
}
function $V(e, t) {
    return Rm(e, t, (n, r)=>typeof n == "string" && typeof r == "string" ? n === r : typeof n != "string" && typeof r != "string" ? n.base === r.base && n.pattern === r.pattern : !1);
}
function XV(e) {
    return typeof e.correlationId == "number";
}
function wVe(e) {
    return e.recursive === !0;
}
function RVe(e, t) {
    if (typeof t == "number") switch(e.type){
        case 1:
            return (t & 4) === 0;
        case 2:
            return (t & 8) === 0;
        case 0:
            return (t & 2) === 0;
    }
    return !1;
}
function CVe(e) {
    if (typeof e == "number") {
        const t = [];
        return e & 4 && t.push("Added"), e & 8 && t.push("Deleted"), e & 2 && t.push("Updated"), t.length === 0 ? "<all>" : `[${t.join(", ")}]`;
    }
    return "<none>";
}
function NVe(e) {
    const t = e;
    return t && typeof t.type == "string" && typeof t.severity == "string";
}
function DVe(e) {
    const t = [];
    let n;
    try {
        const r = JSON.parse(e.arguments), s = r[r.length - 1];
        s && s.__$stack && (r.pop(), n = s.__$stack), t.push(...r);
    } catch  {
        t.push("Unable to log remote console arguments", e.arguments);
    }
    return {
        args: t,
        stack: n
    };
}
function OVe(e) {
    if (!e) return e;
    const t = e.indexOf(`
`);
    return t === -1 ? e : e.substring(0, t);
}
function LVe(e, t) {
    const { args: n, stack: r } = DVe(e), s = typeof n[0] == "string" && n.length === 1;
    let i = OVe(r);
    i && (i = `(${i.trim()})`);
    let a = [];
    if (typeof n[0] == "string" ? i && s ? a = [
        `%c[${t}] %c${n[0]} %c${i}`,
        jd("blue"),
        jd(""),
        jd("grey")
    ] : a = [
        `%c[${t}] %c${n[0]}`,
        jd("blue"),
        jd(""),
        ...n.slice(1)
    ] : a = [
        `%c[${t}]%`,
        jd("blue"),
        ...n
    ], i && !s && a.push(i), typeof console[e.severity] != "function") throw new Error("Unknown console method");
    console[e.severity].apply(console, a);
}
function jd(e) {
    return `color: ${e}`;
}
import { fork as xVe } from "child_process";
import { watchFile as BVe, unwatchFile as GVe } from "fs";
import { watch as jVe, promises as HVe } from "fs";
import { promises as uo } from "fs";
import { shell as XVe } from "electron";
import { powerMonitor as e$e } from "electron";
function vh(e, { fallback: t, min: n, max: r }) {
    const s = typeof e == "number" && Number.isFinite(e) ? e : t;
    return Math.min(r, Math.max(n, s));
}
function t$e(e) {
    let t = !1, n = !1, r = !1, s = !1;
    for (const i of e.split(/[/\\]/)){
        switch(i){
            case "node_modules":
            case ".pnpm":
            case ".yarn":
                return "deps";
            case ".turbo":
            case "dist":
            case "out":
            case "build":
            case ".next":
            case "target":
            case "coverage":
            case "tmp":
                t = !0;
                continue;
            case ".git":
                n = !0;
                continue;
        }
        i.toLowerCase().includes("cache") ? r = !0 : i.startsWith(".") && (s = !0);
    }
    return t ? "build_out" : n ? "vcs" : r ? "cache" : s ? "dot_other" : "src_other";
}
function n$e(e) {
    return e < 250 ? "lt250" : e < 500 ? "250_500" : e < 1e3 ? "500_1000" : e < 2e3 ? "1000_2000" : e < 5e3 ? "2000_5000" : "5000_plus";
}
function r$e(e) {
    return e < 500 ? "lt500" : e < 1e3 ? "500_1000" : e < 2e3 ? "1000_2000" : e < 5e3 ? "2000_5000" : "5000_60000";
}
function S$(e, t) {
    const n = t > 0 ? e / t * 100 : 0;
    return n < 20 ? "lt20" : n < 50 ? "20_50" : n < 80 ? "50_80" : "80_plus";
}
function Th(e) {
    return e <= 0 ? "0" : e < 10 ? "1_9" : e < 100 ? "10_99" : e < 1e3 ? "100_999" : e < 1e4 ? "1k_10k" : "10k_plus";
}
function s$e(e) {
    return e <= 0 ? "0" : e < 100 ? "1_99" : e < 1e3 ? "100_999" : e < 1e4 ? "1k_10k" : "10k_plus";
}
function y$(e) {
    return e <= 0 ? "0" : e < 10 ? "1_9" : e < 100 ? "10_99" : e < 1e3 ? "100_999" : "1k_plus";
}
function w$(e) {
    return e <= 0 ? "0" : e === 1 ? "1" : e < 10 ? "2_9" : e < 50 ? "10_49" : "50_plus";
}
function E$(e) {
    return e <= 0 ? "0" : e < 10 ? "1_9" : e < 100 ? "10_99" : "100_plus";
}
function i$e(e) {
    return e <= 0 ? "0" : e < 50 ? "lt50" : e < 250 ? "50_250" : "250_plus";
}
function b$(e) {
    return e <= 0 ? "0" : e === 1 ? "1" : e < 10 ? "2_9" : "10_plus";
}
function VS(e) {
    try {
        const t = new URL(e), n = new URL(t.pathname, t.origin);
        return n.search = t.search, n.pathname.endsWith("/") && n.pathname.length > 1 && (n.pathname = n.pathname.slice(0, -1)), n.pathname === "/" ? n.origin + n.search : n.toString();
    } catch  {
        return e.toLowerCase().trim();
    }
}
function E$e(e) {
    return {
        mcpAuthMeta: e
    };
}
function b$e(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (const s of t)n += String.fromCharCode(s);
    return (typeof btoa == "function" ? btoa(n) : Buffer.from(t).toString("base64")).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/u, "");
}
function _M({ baseKey: e, identifier: t }) {
    return `[${t}] ${e}`;
}
function vM({ baseKey: e, serverUrl: t }) {
    const n = VS(t);
    return `[url:${b$e(n)}] ${e}`;
}
function I$e(e) {
    const n = (e.startsWith("[profile:") ? e.replace(/^\[profile:[^\]]+\] /, "") : e).match(/^\[([^\]]+)\] /);
    if (!n) return;
    const r = n[1];
    if (!(r.startsWith("url:") || r.startsWith("oauth-attempt:"))) return r;
}
function A$e(e) {
    return (e.startsWith("[profile:") ? e.replace(/^\[profile:[^\]]+\] /, "") : e).match(/^\[url:([^\]]+)\] /)?.[1];
}
function M$e(e) {
    const t = I$e(e);
    if (t) return t;
    const n = A$e(e);
    return n ? `url:${n}` : "unknown";
}
import "crypto";
import "@modelcontextprotocol/sdk/client/auth.js";
import "@modelcontextprotocol/sdk/server/auth/errors.js";
import * as po from "fs";
import * as qd from "path";
import { randomUUID as vje } from "crypto";
function Y$(e) {
    return Buffer.from(e, "utf8").toString("base64url");
}
function J$(e) {
    try {
        return Buffer.from(e, "base64url").toString("utf8");
    } catch  {
        return;
    }
}
function Tje(e) {
    if (!e || typeof e != "object") return;
    const t = e;
    if (!(typeof t.attemptId != "string" || typeof t.createdAtMs != "number" || !Number.isFinite(t.createdAtMs))) return {
        attemptId: t.attemptId,
        createdAtMs: t.createdAtMs
    };
}
function vn(e, t) {
    if (!e) throw new Error(t);
}
function cj(e, t, n) {
    const r = Object.create(null), s = Object.create(null), i = [];
    for (const a of t){
        const o = lj(a);
        i.push(o), r[a.name] = o, s[a.no] = o;
    }
    return {
        typeName: e,
        values: i,
        findName (a) {
            return r[a];
        },
        findNumber (a) {
            return s[a];
        }
    };
}
function lj(e) {
    return "localName" in e ? e : {
        ...e,
        localName: e.name
    };
}
function Rje() {
    let e = 0, t = 0;
    for(let r = 0; r < 28; r += 7){
        let s = this.buf[this.pos++];
        if (e |= (s & 127) << r, (s & 128) == 0) return this.assertBounds(), [
            e,
            t
        ];
    }
    let n = this.buf[this.pos++];
    if (e |= (n & 15) << 28, t = (n & 112) >> 4, (n & 128) == 0) return this.assertBounds(), [
        e,
        t
    ];
    for(let r = 3; r <= 31; r += 7){
        let s = this.buf[this.pos++];
        if (t |= (s & 127) << r, (s & 128) == 0) return this.assertBounds(), [
            e,
            t
        ];
    }
    throw new Error("invalid varint");
}
function EM(e, t, n) {
    for(let i = 0; i < 28; i = i + 7){
        const a = e >>> i, o = !(!(a >>> 7) && t == 0), l = (o ? a | 128 : a) & 255;
        if (n.push(l), !o) return;
    }
    const r = e >>> 28 & 15 | (t & 7) << 4, s = t >> 3 != 0;
    if (n.push((s ? r | 128 : r) & 255), !!s) {
        for(let i = 3; i < 31; i = i + 7){
            const a = t >>> i, o = !!(a >>> 7), l = (o ? a | 128 : a) & 255;
            if (n.push(l), !o) return;
        }
        n.push(t >>> 31 & 1);
    }
}
function Ije(e, t) {
    return {
        lo: e >>> 0,
        hi: t >>> 0
    };
}
function bM(e, t) {
    return {
        lo: e | 0,
        hi: t | 0
    };
}
function mj(e, t) {
    return t = ~t, e ? e = ~e + 1 : t += 1, bM(e, t);
}
function pj(e, t) {
    if (e >= 0) {
        for(; e > 127;)t.push(e & 127 | 128), e = e >>> 7;
        t.push(e);
    } else {
        for(let n = 0; n < 9; n++)t.push(e & 127 | 128), e = e >> 7;
        t.push(1);
    }
}
function Aje() {
    let e = this.buf[this.pos++], t = e & 127;
    if ((e & 128) == 0) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (e & 127) << 7, (e & 128) == 0) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (e & 127) << 14, (e & 128) == 0) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (e & 127) << 21, (e & 128) == 0) return this.assertBounds(), t;
    e = this.buf[this.pos++], t |= (e & 15) << 28;
    for(let n = 5; (e & 128) !== 0 && n < 10; n++)e = this.buf[this.pos++];
    if ((e & 128) != 0) throw new Error("invalid varint");
    return this.assertBounds(), t >>> 0;
}
function Pje(e, t, n, r) {
    let s;
    return {
        typeName: t,
        extendee: n,
        get field () {
            if (!s) {
                const i = typeof r == "function" ? r() : r;
                i.name = t.split(".").pop(), i.jsonName = `[${t}]`, s = e.util.newFieldList([
                    i
                ]).list()[0];
            }
            return s;
        },
        runtime: e
    };
}
function Dje(e, t) {
    if (!t.repeated && (t.kind == "enum" || t.kind == "scalar")) {
        for(let n = e.length - 1; n >= 0; --n)if (e[n].no == t.no) return [
            e[n]
        ];
        return [];
    }
    return e.filter((n)=>n.no === t.no);
}
function Lje(e, t, n, r) {
    vj(t, e);
    const s = t.runtime.bin.makeReadOptions(r), i = t.runtime.bin.makeWriteOptions(r);
    if (_j(e, t)) {
        const d = e.getType().runtime.bin.listUnknownFields(e).filter((u)=>u.no != t.field.no);
        e.getType().runtime.bin.discardUnknownFields(e);
        for (const u of d)e.getType().runtime.bin.onUnknownField(e, u.no, u.wireType, u.data);
    }
    const a = i.writerFactory();
    let o = t.field;
    !o.opt && !o.repeated && (o.kind == "enum" || o.kind == "scalar") && (o = {
        ...t.field,
        opt: !0
    }), t.runtime.bin.writeField(o, n, a, i);
    const l = s.readerFactory(a.finish());
    for(; l.pos < l.len;){
        const [d, u] = l.tag(), m = l.skip(u, d);
        e.getType().runtime.bin.onUnknownField(e, d, u, m);
    }
}
function _j(e, t) {
    const n = e.getType();
    return t.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(e).find((r)=>r.no == t.field.no);
}
function vj(e, t) {
    vn(e.extendee.typeName == t.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
function Hi(e) {
    if (e === null) return "null";
    switch(typeof e){
        case "object":
            return Array.isArray(e) ? "array" : "object";
        case "string":
            return e.length > 100 ? "string" : `"${e.split('"').join('\\"')}"`;
        default:
            return String(e);
    }
}
function Gje(e) {
    return e.repeated || e.kind == "map" ? !0 : !(e.oneof || e.kind == "message" || e.opt || e.req);
}
function PM(e, t, n) {
    return vn(typeof t == "number"), e.typeName == "google.protobuf.NullValue" ? null : n ? t : e.findNumber(t)?.name ?? t;
}
function XS(e, t, n, r) {
    const s = t.getType().runtime.bin, i = r?.delimited;
    return s.readMessage(t, e, i ? r.no : e.uint32(), n, i), t;
}
function Ah(e) {
    return e instanceof Uint8Array ? e : new Uint8Array(e);
}
function Uj(e) {
    let t = !1;
    const n = [];
    for(let r = 0; r < e.length; r++){
        let s = e.charAt(r);
        switch(s){
            case "_":
                t = !0;
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                n.push(s), t = !1;
                break;
            default:
                t && (t = !1, s = s.toUpperCase()), n.push(s);
                break;
        }
    }
    return n.join("");
}
function PH(...e) {
    const t = new Headers;
    for (const n of e)n.forEach((r, s)=>{
        t.append(s, r);
    });
    return t;
}
function fHe(e, t) {
    const n = {};
    for (const [r, s] of Object.entries(e.methods)){
        const i = t({
            ...s,
            localName: r,
            service: e
        });
        i != null && (n[r] = i);
    }
    return n;
}
function SHe(e, t) {
    const n = new Uint8Array(t.length + 5);
    n.set(t, 5);
    const r = new DataView(n.buffer, n.byteOffset, n.byteLength);
    return r.setUint8(0, e), r.setUint32(1, t.length), n;
}
function wHe(e, ...t) {
    const [n, r, s] = EHe(t);
    let i = e, a;
    return s?.propagateDownStreamError === !0 && (i = a = DH(i)), i = zM(i, ...n, {
        propagateDownStreamError: !1
    }), r(i).catch((o)=>a ? a.abort(o).then(()=>Promise.reject(o)) : Promise.reject(o));
}
function EHe(e) {
    let t;
    typeof e[e.length - 1] != "function" && (t = e.pop());
    const n = e.pop();
    return [
        e,
        n,
        t
    ];
}
async function* zM(e, ...t) {
    const [n, r] = RHe(t);
    let s;
    const i = e[Symbol.asyncIterator]();
    let o = {
        [Symbol.asyncIterator] () {
            return i;
        }
    };
    r?.propagateDownStreamError === !0 && (o = s = DH(o));
    for (const d of n)o = d(o);
    const l = o[Symbol.asyncIterator]();
    try {
        for(;;){
            const d = await l.next();
            if (d.done === !0) break;
            if (!s) {
                yield d.value;
                continue;
            }
            try {
                yield d.value;
            } catch (u) {
                throw await s.abort(u), u;
            }
        }
    } finally{
        r?.propagateDownStreamError === !0 && i.return?.().catch(()=>{});
    }
}
function RHe(e) {
    let t;
    return typeof e[e.length - 1] != "function" && (t = e.pop()), [
        e,
        t
    ];
}
function CHe(e, t, n) {
    return t === void 0 || n === void 0 ? async function*(r) {
        for await (const s of r)yield {
            flags: 0,
            data: e.serialize(s)
        };
    } : async function*(r) {
        for await (const s of r){
            let i, a = 0;
            s.end ? (a = a | t, i = n.serialize(s.value)) : i = e.serialize(s.value), yield {
                flags: a,
                data: i
            };
        }
    };
}
function PHe() {
    return async function*(e) {
        for await (const { flags: t, data: n } of e)yield SHe(t, n);
    };
}
function OHe(e) {
    if (e == null) return [
        !1,
        0
    ];
    const t = typeof e == "string" ? parseInt(e, 10) : e;
    return !Number.isSafeInteger(t) || t < 0 ? [
        !1,
        t
    ] : [
        !0,
        t
    ];
}
function DH(e) {
    const t = e[Symbol.asyncIterator]();
    if (t.throw === void 0) throw new Error("AsyncIterable does not implement throw");
    const n = t;
    let r, s, i = {
        next () {
            return s = n.next().finally(()=>{
                s = void 0;
            }), s;
        },
        throw (o) {
            return n.throw(o);
        }
    };
    t.return !== void 0 && (i = {
        ...i,
        return (o) {
            return n.return(o);
        }
    });
    let a = !1;
    return {
        abort (o) {
            if (r) return r.state;
            const l = ()=>n.throw(o).then((d)=>d.done === !0 ? "completed" : "caught", ()=>"rethrown");
            return s ? (r = {
                reason: o,
                state: s.then(l, l)
            }, r.state) : (r = {
                reason: o,
                state: l()
            }, r.state);
        },
        [Symbol.asyncIterator] () {
            if (a) throw new Error("AsyncIterable cannot be re-used");
            return a = !0, i;
        }
    };
}
async function* OH(e) {
    yield* e;
}
function xHe(e, t, n) {
    return async function(r, s) {
        const i = await e.unary(t, n, s?.signal, s?.timeoutMs, s?.headers, r, s?.contextValues);
        return s?.onHeader?.(i.header), s?.onTrailer?.(i.trailer), i.message;
    };
}
function FHe(e, t, n) {
    return function(r, s) {
        return LH(e.stream(t, n, s?.signal, s?.timeoutMs, s?.headers, OH([
            r
        ]), s?.contextValues), s);
    };
}
function BHe(e, t, n) {
    return function(r, s) {
        return LH(e.stream(t, n, s?.signal, s?.timeoutMs, s?.headers, r, s?.contextValues), s);
    };
}
function LH(e, t) {
    const n = (async function*() {
        const r = await e;
        t?.onHeader?.(r.header), yield* r.message, t?.onTrailer?.(r.trailer);
    })()[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                next: ()=>n.next()
            })
    };
}
function VHe(...e) {
    const t = new AbortController, n = e.filter((s)=>s !== void 0).concat(t.signal);
    for (const s of n){
        if (s.aborted) {
            r.apply(s);
            break;
        }
        s.addEventListener("abort", r);
    }
    function r() {
        t.signal.aborted || t.abort(UH(this));
        for (const s of n)s.removeEventListener("abort", r);
    }
    return t;
}
function UH(e) {
    if (!e.aborted) return;
    if (e.reason !== void 0) return e.reason;
    const t = new Error("This operation was aborted");
    return t.name = "AbortError", t;
}
function xH() {
    return {
        get (e) {
            return e.id in this ? this[e.id] : e.defaultValue;
        },
        set (e, t) {
            return this[e.id] = t, this;
        },
        delete (e) {
            return delete this[e.id], this;
        }
    };
}
function GH(e, t, n) {
    const r = typeof t == "string" ? t : t.typeName, s = typeof n == "string" ? n : n.name;
    return e.toString().replace(/\/?$/, `/${r}/${s}`);
}
function VH(e, t) {
    return t instanceof e ? t : new e(t);
}
function KHe(e, t) {
    function n(r) {
        return r.done === !0 ? r : {
            done: r.done,
            value: VH(e, r.value)
        };
    }
    return {
        [Symbol.asyncIterator] () {
            const r = t[Symbol.asyncIterator](), s = {
                next: ()=>r.next().then(n)
            };
            return r.throw !== void 0 && (s.throw = (i)=>r.throw(i).then(n)), r.return !== void 0 && (s.return = (i)=>r.return(i).then(n)), s;
        }
    };
}
function jH(e, t) {
    return t?.concat().reverse().reduce((n, r)=>r(n), e) ?? e;
}
function zHe(e) {
    const t = {
        ...e
    };
    return t.ignoreUnknownFields ??= !0, t;
}
function aqe(e) {
    const t = new Headers, n = new Headers;
    return e.forEach((r, s)=>{
        s.toLowerCase().startsWith("trailer-") ? n.append(s.substring(8), r) : t.append(s, r);
    }), [
        t,
        n
    ];
}
function EKe(e) {
    return e === "default" || e === "agentWindow" || e === "lastUsedWindows";
}
function bKe(e) {
    switch(e){
        case "agentWindow":
        case "true":
            return "agentWindow";
        case "lastUsedWindows":
        case "false":
            return "lastUsedWindows";
        case "default":
        default:
            return "default";
    }
}
function cme(e) {
    return e !== "lastUsedWindows";
}
function IKe(e) {
    switch(e){
        case "--glass":
        case "--no-glass":
        case "--classic":
        case "--no-classic":
            return !0;
        default:
            return e.startsWith("--glass=") || e.startsWith("--classic=");
    }
}
function jg(e) {
    const { cli: t } = e;
    return (e.urisToOpen?.length ?? 0) > 0 || (t._?.length ?? 0) > 0 || (t["file-uri"]?.length ?? 0) > 0 || (t["folder-uri"]?.length ?? 0) > 0;
}
function lme(e, t) {
    return t.launchArgs.classic === !0 || t.launchArgs.glass === !0 || t.processArgv.some(IKe) ? !0 : jg(e) || jg({
        cli: t.launchArgs
    });
}
function kw(e) {
    return e?.reason.startsWith("reactivated_") === !0;
}
function AKe(e, t, n) {
    !kw(t) || lme(e, n) || (e.forceEmpty = !0, e.cli = {
        ...e.cli,
        glass: !0,
        classic: !1
    });
}
function PKe(e) {
    return async (t)=>{
        const n = new Headers(t.header);
        n.set("Accept-Encoding", "identity");
        const r = await e(t.url, {
            method: t.method,
            headers: n,
            signal: t.signal,
            body: t.body ? await NKe(t.body) : void 0
        }), s = new Headers(r.headers);
        return s.delete("content-encoding"), s.delete("content-length"), {
            status: r.status,
            header: s,
            body: DKe(r),
            trailer: new Headers
        };
    };
}
async function NKe(e) {
    const t = [];
    let n = 0;
    for await (const i of e)t.push(i), n += i.byteLength;
    if (n === 0) return;
    const r = new Uint8Array(n);
    let s = 0;
    for (const i of t)r.set(i, s), s += i.byteLength;
    return r.buffer;
}
async function* DKe(e) {
    const t = new Uint8Array(await e.arrayBuffer());
    t.byteLength > 0 && (yield t);
}
function ww(e) {
    return e.trim().length === 0 ? void 0 : VS(e);
}
function xKe(e, t) {
    const n = new Map, r = new Map, s = new Map, i = new Set, a = [], o = new Map;
    for (const f of e){
        const v = f.rowServerIdentifier || f.serverIdentifier, T = o.get(v);
        (T === void 0 || T.serverIdentifier !== v && f.serverIdentifier === v) && o.set(v, f);
    }
    const l = [];
    for (const f of e)o.get(f.rowServerIdentifier || f.serverIdentifier) === f ? l.push(f) : r.set(f, {
        row: f,
        reason: "duplicate_slot"
    });
    for (const f of l){
        const v = t.filter((y)=>!i.has(y) && !s.has(y) && (y.identifier === f.rowServerIdentifier || y.identifier === f.serverIdentifier));
        if (v.length === 0) {
            a.push(f);
            continue;
        }
        const T = ww(f.url), S = T === void 0 ? [] : v.filter((y)=>ww(y.serverUrl) === T);
        if (S.length === 0) {
            r.set(f, {
                row: f,
                reason: "url_mismatch"
            });
            for (const y of v)s.set(y, "url_mismatch");
            continue;
        }
        const k = S[0];
        i.add(k), n.set(f, {
            row: f,
            local: k,
            matchedBy: "identifier",
            rpcServerUrl: f.url
        });
    }
    for (const f of a){
        const v = ww(f.url);
        if (v === void 0) {
            r.set(f, {
                row: f,
                reason: "row_has_no_url"
            });
            continue;
        }
        const T = t.filter((S)=>!i.has(S) && s.get(S) !== "url_mismatch" && ww(S.serverUrl) === v);
        if (T.length === 0) {
            r.set(f, {
                row: f,
                reason: "no_local_match"
            });
            continue;
        }
        if (T.length > 1) {
            r.set(f, {
                row: f,
                reason: "ambiguous_url",
                candidates: T.map((S)=>S.identifier)
            });
            for (const S of T)s.set(S, "ambiguous_url");
            continue;
        }
        i.add(T[0]), n.set(f, {
            row: f,
            local: T[0],
            matchedBy: "url",
            rpcServerUrl: f.url
        });
    }
    const d = [], u = [];
    for (const f of e){
        const v = n.get(f);
        if (v) {
            d.push(v);
            continue;
        }
        const T = r.get(f);
        T && u.push(T);
    }
    const m = [];
    for (const f of t)i.has(f) || m.push({
        local: f,
        reason: s.get(f) ?? "no_row"
    });
    return {
        bindings: d,
        unboundRows: u,
        unboundLocals: m
    };
}
function $Ke(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function gme(e) {
    if (typeof e == "string") try {
        const t = JSON.parse(e);
        return $Ke(t) ? t : void 0;
    } catch  {
        return;
    }
}
function ND(e) {
    return typeof e == "string" && e.length > 0 ? e : void 0;
}
function fme(e) {
    return e.trim().length === 0 ? void 0 : VS(e);
}
function _me(e, t) {
    return {
        identifier: e.identifier,
        rowIdentifier: e.identifier,
        outcome: {
            kind: "kept",
            reason: "rpc_failed",
            detail: t
        }
    };
}
function jKe(e, t) {
    const n = fme(e);
    return n === void 0 ? [] : t.filter((r)=>fme(r.serverUrl) === n);
}
function Tme(e, t) {
    return xKe(e, t);
}
function HKe(e) {
    const t = e.outcome;
    switch(t.case){
        case "migrated":
            return {
                kind: "migrated"
            };
        case "serverCopyKept":
            return {
                kind: "server_copy_kept"
            };
        case "invalidGrant":
            return {
                kind: "kept",
                reason: "invalid_grant",
                detail: t.value.detail
            };
        case "reuseDetected":
            return {
                kind: "kept",
                reason: "reuse_detected",
                detail: t.value.detail
            };
        case "providerError":
            return {
                kind: "kept",
                reason: "provider_error",
                detail: t.value.detail
            };
        case "rejectedGrokRow":
            return {
                kind: "kept",
                reason: "rejected_grok_row"
            };
        case "notImplemented":
            return {
                kind: "kept",
                reason: "not_implemented",
                detail: t.value.method
            };
        case "persistFailed":
            return {
                kind: "held",
                reason: "persist_failed",
                detail: t.value.detail,
                nextStep: "server_login"
            };
        case "rejectedClientPlaced":
            return {
                kind: "kept",
                reason: "rejected_client_placed"
            };
        default:
            return {
                kind: "kept",
                reason: "unknown_outcome",
                detail: t.case
            };
    }
}
function kme(e) {
    return e.trim().length === 0 ? void 0 : VS(e);
}
function qKe(e) {
    const { server: t, hold: n, row: r } = e;
    if (n.rowServerIdentifier !== void 0) return n.rowServerIdentifier === r.rowServerIdentifier ? "identifier" : void 0;
    if (t.identifier === r.rowServerIdentifier) return "identifier";
    if (r.canonicalUrl !== void 0 && kme(t.serverUrl) === r.canonicalUrl) return "url";
}
import { exec as Ew } from "child_process";
function yme(e, t) {
    const n = /^\s*([0-9]+)\s+([0-9]+)\s+([0-9]+\.[0-9]+)\s+([0-9]+\.[0-9]+)\s+(.+)$/, r = e.toString().split(`
`);
    for (const s of r){
        const i = n.exec(s.trim());
        i && i.length === 6 && t(parseInt(i[1]), parseInt(i[2]), i[5], parseFloat(i[3]), parseFloat(i[4]));
    }
}
function YKe(e, t) {
    return `browser webview${t === void 0 ? "" : ` [${t}]`} (${wme(e)})`;
}
function wme(e) {
    if (!e || e === "about:blank") return "about:blank";
    if (e.startsWith("devtools://")) return "DevTools";
    try {
        const t = new URL(e);
        return t.protocol === "http:" || t.protocol === "https:" ? t.host || e : `${t.protocol}${t.pathname.slice(0, 40)}`;
    } catch  {
        return e.slice(0, 60);
    }
}
function XKe(e) {
    return !e || e === "about:blank" ? "blank" : e.startsWith("devtools://") ? "devtools" : "page";
}
function QKe(e) {
    switch(e){
        case "window":
            return "window";
        case "webview":
            return "webview_guest";
        case "browserView":
            return "browser_view";
        default:
            return;
    }
}
function ZKe(e) {
    const t = new Map, n = new Set;
    let r = 0, s = 0, i = 0, a = 0;
    for (const m of e.surfaces){
        if (!Number.isInteger(m.pid) || m.pid <= 0) continue;
        const f = t.get(m.pid);
        if ((f === void 0 || m.role === "webview_guest" && f !== "webview_guest") && t.set(m.pid, m.role), m.role === "webview_guest") switch(r++, n.add(m.pid), m.guestKind ?? "page"){
            case "page":
                s++;
                break;
            case "devtools":
                i++;
                break;
            case "blank":
                a++;
                break;
        }
    }
    const o = new Map;
    for (const m of e.resources)o.set(m.pid, m);
    let l = 0, d;
    for (const m of n){
        const f = o.get(m)?.workingSetKb;
        f !== void 0 && Number.isFinite(f) && (l += f);
        const v = e.cpuPercentByPid.get(m);
        v !== void 0 && (d = (d ?? 0) + v);
    }
    const u = Array.from(t, ([m, f])=>({
            pid: m,
            role: f
        })).sort((m, f)=>m.pid - f.pid);
    return {
        timestampMs: e.timestampMs,
        roles: u,
        webviewGuests: {
            guestCount: r,
            pageGuestCount: s,
            devtoolsGuestCount: i,
            blankGuestCount: a,
            processCount: n.size,
            workingSetKb: l,
            cpuPercent: d
        }
    };
}
import { webContents as eze } from "electron";
function Ia(e) {
    if (!e) return;
    const t = e.split("+");
    if (t.length < 2) return;
    const n = t[0];
    if (!n || n !== "background-composer") return;
    const r = t[1];
    if (r) return r;
}
import { BrowserWindow as Rw, contentTracing as qg, screen as Kg, webContents as nze } from "electron";
import * as Ime from "fs";
function LD(e, t, n) {
    if (!e || !t?.size) return !1;
    if (typeof e.pid == "number" && t.has(e.pid)) return e.children || (e.children = []), n.name = "remote agent", Cw(n), e.children.push(n), !0;
    if (Array.isArray(e.children)) {
        for (const r of e.children)if (LD(r, t, n)) return !0;
    }
    return !1;
}
function Cw(e) {
    if (e.isRemote = !0, typeof e.mem == "number" && (e.remoteMem = e.mem, e.mem = 0), Array.isArray(e.children)) for (const t of e.children)Cw(t);
}
function rze(e) {
    if (!e?.workspaceEntries?.length) return [];
    const t = new Set, n = [];
    for (const r of e.workspaceEntries)t.has(r.workspaceId) || (t.add(r.workspaceId), n.push({
        workspaceId: r.workspaceId,
        displayName: r.displayName
    }));
    return n;
}
function UD(e) {
    return {
        ...e,
        children: void 0
    };
}
function xD(e, t = new Set) {
    const n = UD(e);
    if (t.has(e)) return n;
    t.add(e);
    const r = [];
    for (const s of e.children ?? []){
        if (t.has(s)) {
            r.push(UD(s));
            continue;
        }
        r.push(xD(s, t));
    }
    return t.delete(e), r.length && (n.children = r), n;
}
function Ame(e, t, n = new Set) {
    if (n.has(e)) return;
    n.add(e);
    const r = t.get(e.pid);
    if (r) return r;
    for (const s of e.children ?? []){
        const i = Ame(s, t, n);
        if (i) return i;
    }
}
function Mme(e, t = new Set) {
    if (t.has(e)) return 0;
    t.add(e);
    let n = e.load;
    for (const r of e.children ?? [])n += Mme(r, t);
    return n;
}
function Pme(e, t = new Set) {
    if (t.has(e)) return 0;
    t.add(e);
    let n = e.mem;
    for (const r of e.children ?? [])n += Pme(r, t);
    return n;
}
function Nme(e, t, n, r, s) {
    const i = r.reduce((l, d)=>l + Mme(d), 0), a = r.reduce((l, d)=>l + Pme(d), 0), o = {
        name: `${t} processes`,
        cmd: "",
        pid: s,
        ppid: 0,
        load: i,
        mem: a,
        children: r
    };
    return o.isGroupRoot = !0, {
        workspaceId: e,
        displayName: t,
        isShared: n,
        rootProcess: o
    };
}
function sze(e) {
    return typeof e != "object" || e === null ? !1 : "x" in e && "y" in e && "width" in e && "height" in e;
}
import { powerMonitor as zg, powerSaveBlocker as Aw } from "electron";
import { WebSocket as dze } from "ws";
import { cpus as uze } from "os";
import { BrowserWindow as VD, screen as Yg } from "electron";
import { exec as Wme } from "child_process";
function mze(e) {
    return typeof e != "object" || e === null ? !1 : "x" in e && "y" in e && "width" in e && "height" in e;
}
function Gme(e) {
    const t = e.getKeyMap(), n = e.getCurrentKeyboardLayout();
    return {
        keyboardMapping: t,
        keyboardLayoutInfo: n
    };
}
function Vme(e) {
    return `window:${e}`;
}
function _ze(e) {
    return e && typeof e == "object" && typeof e.id == "string" && (!e.uuid || typeof e.uuid == "string");
}
function Dw(e, t) {
    const n = t?.targetWindowId;
    if (n !== void 0 && Number.isSafeInteger(n) && n > 0) return n;
    const r = new URLSearchParams(e.query).get("windowId");
    if (r === null || !/^[1-9]\d*$/.test(r)) return;
    const s = Number(r);
    return Number.isSafeInteger(s) ? s : void 0;
}
function qme(e) {
    const t = new URLSearchParams(e.query);
    return t.get("windowId") !== "_blank" ? e : (t.delete("windowId"), e.with({
        query: t.toString()
    }));
}
function el(e) {
    return !e.isExtensionDevelopmentHost && !e.isExtensionTestHost && !e.config?.shadowWindowForWorkspaceId && e.config?.windowInWindow === void 0;
}
function KD(e) {
    const t = e.getFocusedWindow();
    if (t?.isReady && el(t)) return t.id;
    const n = e.getLastActiveWindow();
    return n?.isReady && el(n) ? n.id : e.getWindows().find((r)=>r.isReady && el(r))?.id;
}
function bze(e) {
    return e.config?.glass !== !0 && el(e);
}
import { app as Cze } from "electron";
function Xme(e) {
    return e.submenu !== void 0;
}
function Qme(e) {
    return e.id === "vscode.menubar.separator";
}
function Zme(e) {
    return e.uri !== void 0;
}
function epe(e) {
    return !Xme(e) && !Qme(e) && !Zme(e);
}
function Mze(e, t) {
    return e === "deb" ? `sudo apt-get update && sudo apt-get install --only-upgrade ${t}` : `sudo dnf upgrade ${t}`;
}
import { app as Uw } from "electron";
import { BrowserWindow as xw, Menu as Gn, MenuItem as Et } from "electron";
function Qi() {
    return new Et({
        type: "separator"
    });
}
import { createHash as Dze } from "crypto";
import { promises as rO } from "fs";
function Oze(e) {
    return Dze("sha1").update(e).digest("hex");
}
function Bze(e) {
    return Array.isArray(e) ? e.length > 0 : !!e;
}
import { join as kpe } from "path";
function Yze(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Qze(e) {
    const t = kpe(e.appRoot, "vendor", "react-devtools", "unpacked");
    return e.isBuilt ? [
        t,
        kpe(e.userDataPath, "reactDevTools", "unpacked")
    ] : [
        t
    ];
}
import { session as iO } from "electron";
import { promises as tYe } from "fs";
import { join as Epe } from "path";
function rYe(e) {
    return Object.values(iO.defaultSession.serviceWorkers.getAllRunning()).some((t)=>t.scope.startsWith(e));
}
async function aO(e) {
    try {
        return await tYe.readFile(e, "utf8");
    } catch  {
        return;
    }
}
async function oYe(e, t, n, r, s) {
    try {
        const i = await import("@vscode/spdlog");
        i.setFlushOn(0);
        const a = await i.createAsyncRotatingLogger(e, t, n, r);
        return s ? a.clearFormatters() : a.setPattern("%Y-%m-%d %H:%M:%S.%e [%l] %v"), a;
    } catch (i) {
        console.error(i);
    }
    return null;
}
function EYe(e, t, n, r) {
    return new Promise((s, i)=>{
        let a = !1;
        const o = setTimeout(()=>{
            a || (a = !0, clearTimeout(o), r?.(), i(new Error(n)));
        }, t);
        e.then((l)=>{
            a || (a = !0, clearTimeout(o), s(l));
        }, (l)=>{
            a || (a = !0, clearTimeout(o), i(l));
        });
    });
}
import { existsSync as bYe } from "fs";
import { rgPath as RYe } from "@vscode/ripgrep";
function qw(e) {
    for (const t of e)try {
        if (bYe(t)) return t;
    } catch  {}
}
function MYe(e) {
    return e.replace(/\bnode_modules\.asar\b/, "node_modules.asar.unpacked");
}
import { powerMonitor as UYe } from "electron";
function FYe(e) {
    if (e === void 0) return;
    const t = Number(e);
    return Number.isFinite(t) ? t : void 0;
}
function WYe(e) {
    return e === "off" || e === "on" || e === "fallback" || e === "override" ? e : "override";
}
function sl(e, t, n) {
    const r = e.inspect(t);
    return r.userLocalValue ?? r.defaultValue ?? n;
}
function Xw(e) {
    return typeof e == "object" && e !== null && "prefix" in e && typeof e.prefix == "string";
}
function HYe(e, t, n) {
    !n && e.episode && !e.episode.allSuspended || (e.lastResponsiveAt = t), n && e.episode && (e.episode.allSuspended = !0);
}
import { powerMonitor as JYe } from "electron";
function she(e, t) {
    return !t.isBuilt && !t.disableTelemetry ? !0 : !(t.disableTelemetry || !e.enableTelemetry);
}
function rJe(e) {
    return [
        e.appRoot,
        e.extensionsPath,
        e.userHome.fsPath,
        e.tmpDir.fsPath,
        e.userDataPath
    ];
}
function sJe(e, t) {
    if (!e || !e.includes("/") && !e.includes("\\")) return e;
    let n = e;
    const r = [];
    for (const o of t)for(;;){
        const l = o.exec(e);
        if (!l) break;
        r.push([
            l.index,
            o.lastIndex
        ]);
    }
    const s = /^[\\\/]?(node_modules|node_modules\.asar)[\\\/]/, i = /(file:\/\/)?([a-zA-Z]:(\\\\|\\|\/)|(\\\\|\\|\/))?([\w-\._]+(\\\\|\\|\/))+[\w-\._]*/g;
    let a = 0;
    for(n = "";;){
        const o = i.exec(e);
        if (!o) break;
        const l = r.some(([d, u])=>o.index < u && d < i.lastIndex);
        !s.test(o[0]) && !l && (n += e.substring(a, o.index) + "<REDACTED: user-file-path>", a = i.lastIndex);
    }
    return a < e.length && (n += e.substr(a)), n;
}
function iJe(e) {
    if (!e) return e;
    const t = [
        {
            label: "Google API Key",
            regex: /AIza[A-Za-z0-9_\\\-]{35}/
        },
        {
            label: "Slack Token",
            regex: /xox[pbar]\-[A-Za-z0-9]/
        },
        {
            label: "GitHub Token",
            regex: /(gh[psuro]_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59})/
        },
        {
            label: "Generic Secret",
            regex: /(key|token|sig|secret|signature|password|passwd|pwd|android:value)[^a-zA-Z0-9]/i
        },
        {
            label: "CLI Credentials",
            regex: /((login|psexec|(certutil|psexec)\.exe).{1,50}(\s-u(ser(name)?)?\s+.{3,100})?\s-(admin|user|vm|root)?p(ass(word)?)?\s+["']?[^$\-\/\s]|(^|[\s\r\n\\])net(\.exe)?.{1,5}(user\s+|share\s+\/user:| user -? secrets ? set) \s + [^ $\s \/])/
        },
        {
            label: "Microsoft Entra ID",
            regex: /eyJ(?:0eXAiOiJKV1Qi|hbGci|[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.)/
        },
        {
            label: "Email",
            regex: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
        }
    ];
    for (const n of t)if (n.regex.test(e)) return `<REDACTED: ${n.label}>`;
    return e;
}
function AO(e) {
    return {
        traceId: e.traceId,
        spanId: e.spanId,
        parentSpanId: e.parentSpanId,
        name: e.name,
        startTime: e.startTime,
        endTime: e.endTime,
        attributes: e.attributes,
        error: e.status?.code === 2
    };
}
function gJe(e) {
    try {
        MO?.spanStarted(AO(e));
    } catch  {}
}
function fJe(e) {
    try {
        MO?.spanEnded(AO(e));
    } catch  {}
}
function whe(e) {
    try {
        MO?.spanUpdated(AO(e));
    } catch  {}
}
function PO(e, t, n) {
    return e.createChild(t, n);
}
function OO() {
    return !On().enabled;
}
function LO(e, t, n) {
    if (e.setAttribute("cursor.eventType", t), !!n) for (const [r, s] of Object.entries(n))e.setAttribute(r, s === void 0 ? "undefined" : s);
}
import * as xhe from "original-fs";
import { randomUUID as RJe } from "crypto";
import CJe from "path";
import IJe from "os";
import AJe from "electron";
import { createHash as NJe } from "crypto";
function OJe(e, t) {
    return [
        `raw_tail_sha256=${e.rawTailSha256}`,
        `raw_tail_bytes=${e.rawTailBytes}`,
        `file_bytes=${t}`,
        `truncated_to_tail=${t > e.rawTailBytes}`,
        `redaction_count=${e.redactionCount}`,
        "",
        "--- sanitized ShipIt_stderr.log tail ---",
        e.sanitizedText
    ].join(`
`);
}
function Bhe(e, t, n) {
    let r = 0;
    return {
        value: e.replace(t, (...i)=>(r++, n(...i))),
        count: r
    };
}
function LJe(e) {
    const t = e.toLowerCase();
    return t.includes("://") || t.includes("bearer") || t.includes("basic") || t.includes("negotiate") || t.includes("ntlm") || t.includes("digest") || t.includes("token") || t.includes("secret") || t.includes("password") || t.includes("passwd") || t.includes("pwd") || t.includes("api_key") || t.includes("api-key") || t.includes("apikey") || t.includes("access_key") || t.includes("access-key") || t.includes("accesskey") || t.includes("auth") || t.includes("cookie") || t.includes("credential") || t.includes("private_key") || t.includes("private-key") || e.includes("AKIA") || e.includes("ASIA") || t.includes("ghp_") || t.includes("gho_") || t.includes("ghu_") || t.includes("ghs_") || t.includes("ghr_") || t.includes("github_pat_") || t.includes("xox") || t.includes("npm_") || t.includes("sk-") || e.includes("eyJ");
}
function UJe(e, t) {
    let n = 0, r = e.indexOf(t);
    for(; r !== -1;)n++, r = e.indexOf(t, r + t.length);
    return n;
}
function xJe(e, t) {
    if (t) return e.length;
    const n = e.lastIndexOf(`
`);
    let r = e.lastIndexOf("\r");
    r === e.length - 1 && (r = e.lastIndexOf("\r", e.length - 2));
    const s = Math.max(r, n);
    return s === -1 ? 0 : e.charCodeAt(s) === 13 && e.charCodeAt(s + 1) === 10 ? s + 2 : s + 1;
}
function FJe(e, t, n) {
    return Math.min(e.length, t + n);
}
function BJe(e, t) {
    for(let n = t; n < e.length; n++){
        const r = e.charCodeAt(n);
        if (r === 10 || r === 13) return !0;
        if (e.charAt(n).trim().length > 0) return !1;
    }
    return !0;
}
function Ghe(e) {
    return e.endsWith(`\r
`) ? `\r
` : e.endsWith(`
`) ? `
` : e.endsWith("\r") ? "\r" : "";
}
import * as $Je from "fs";
async function jJe(e, t, n = HJe) {
    let r;
    try {
        r = await n(e);
        const s = (await r.stat()).size, i = Math.min(s, Math.max(0, Math.floor(t)));
        if (i <= 0) return {
            data: Buffer.alloc(0),
            fileBytes: s
        };
        const a = Buffer.allocUnsafe(i), { bytesRead: o } = await r.read(a, 0, i, s - i);
        return {
            data: a.subarray(0, o),
            fileBytes: s
        };
    } catch  {
        return;
    } finally{
        if (r !== void 0) try {
            await r.close();
        } catch  {}
    }
}
async function HJe(e) {
    return $Je.promises.open(e, "r");
}
function qhe(e) {
    return typeof e == "object" && e !== null;
}
import Na from "electron";
import { spawn as Jhe, spawnSync as GO } from "child_process";
import * as Zt from "fs";
import * as YJe from "original-fs";
import { homedir as VO } from "os";
import { basename as JJe, dirname as _i, join as kn } from "path";
function Xhe() {
    const e = $O();
    if (!e) return;
    const t = Qhe(e);
    for(let n = 0; n < 100; n++){
        const r = n === 0 ? "ShipIt_stderr.log" : `ShipIt_stderr.log.${n}`, s = kn(t, r);
        try {
            return Zt.accessSync(s, Zt.constants.W_OK), s;
        } catch  {
            if (!Zt.existsSync(s)) return s;
        }
    }
    return kn(t, "ShipIt_stderr.log");
}
function Qhe(e) {
    return kn(VO(), "Library", "Caches", `${e}.ShipIt`);
}
function XJe(e) {
    let t;
    try {
        t = Zt.readdirSync(e).filter((s)=>!s.startsWith("ShipIt_std"));
    } catch  {
        return !1;
    }
    if (t.length === 0) return !1;
    const n = `${e}.stale-${Date.now()}`;
    let r = 0;
    try {
        Zt.mkdirSync(n);
        for (const s of t)Zt.renameSync(kn(e, s), kn(n, s)), r++;
    } catch  {}
    return YJe.promises.rm(n, {
        recursive: !0,
        force: !0
    }).catch(()=>{}), r === t.length;
}
function $O() {
    try {
        const e = _i(_i(process.execPath)), r = Zt.readFileSync(kn(e, "Info.plist"), "utf8").match(/<key>CFBundleIdentifier<\/key>\s*<string>([^<]+)<\/string>/)?.[1]?.trim();
        return r && r.length > 0 ? r : void 0;
    } catch  {
        return;
    }
}
function ZJe(e) {
    let t;
    try {
        t = JSON.parse(e);
    } catch  {
        return;
    }
    if (!jO(t)) return;
    const n = t;
    if (!(n.schemaVersion !== 1 || typeof n.createdAt != "string" || typeof n.parentPid != "number" || typeof n.timeoutMs != "number" || typeof n.elapsedMs != "number" || typeof n.expectedCommand != "string" || n.actualCommand !== void 0 && typeof n.actualCommand != "string" || n.samplePath !== void 0 && typeof n.samplePath != "string" || n.sigkillSent !== void 0 && typeof n.sigkillSent != "boolean")) return {
        schemaVersion: n.schemaVersion,
        createdAt: n.createdAt,
        parentPid: n.parentPid,
        timeoutMs: n.timeoutMs,
        elapsedMs: n.elapsedMs,
        expectedCommand: n.expectedCommand,
        actualCommand: n.actualCommand,
        samplePath: n.samplePath,
        sigkillSent: n.sigkillSent === !0
    };
}
function eXe(e) {
    let t;
    try {
        t = JSON.parse(e);
    } catch  {
        return;
    }
    if (!jO(t)) return;
    const n = t;
    if (!(n.schemaVersion !== 1 || typeof n.installationId != "string" || typeof n.currentVersion != "string" || typeof n.targetVersion != "string" || n.appearance !== "dark" && n.appearance !== "light" || typeof n.bundleIdentifier != "string" || typeof n.targetBundlePath != "string" || typeof n.shipItStatePath != "string" || typeof n.shipItLogPath != "string" || typeof n.shipItLogStartOffset != "number" || typeof n.eventsPath != "string" || typeof n.resultPath != "string" || typeof n.appReadyPath != "string" || typeof n.oldMainPid != "number" || !Number.isInteger(n.oldMainPid) || typeof n.createdAt != "string")) return {
        schemaVersion: n.schemaVersion,
        installationId: n.installationId,
        currentVersion: n.currentVersion,
        targetVersion: n.targetVersion,
        appearance: n.appearance,
        bundleIdentifier: n.bundleIdentifier,
        targetBundlePath: n.targetBundlePath,
        shipItStatePath: n.shipItStatePath,
        shipItLogPath: n.shipItLogPath,
        shipItLogStartOffset: n.shipItLogStartOffset,
        eventsPath: n.eventsPath,
        resultPath: n.resultPath,
        appReadyPath: n.appReadyPath,
        oldMainPid: n.oldMainPid,
        createdAt: n.createdAt
    };
}
function Zhe(e, t) {
    const n = _i(e), r = `${e}.${process.pid}.tmp`;
    Zt.mkdirSync(n, {
        recursive: !0
    }), Zt.writeFileSync(r, `${JSON.stringify(t, void 0, 2)}
`), Zt.renameSync(r, e);
}
function tXe(e) {
    try {
        return Zt.statSync(e).size;
    } catch  {
        return 0;
    }
}
function jO(e) {
    return typeof e == "object" && e !== null;
}
function sXe(e) {
    if (e) try {
        return {
            filename: JJe(e),
            data: Zt.readFileSync(e, "utf8"),
            contentType: "text/plain"
        };
    } catch  {
        return;
    }
}
import { readFileSync as aXe } from "fs";
import oXe from "path";
import dXe from "node:path";
import { spawn as uXe } from "node:child_process";
import { spawn as pXe } from "child_process";
import { realpath as hXe, watch as gXe } from "fs";
import * as _Xe from "crypto";
import * as vXe from "fs";
async function TXe(e, t) {
    if (await new Promise((s, i)=>{
        const a = vXe.createReadStream(e), o = _Xe.createHash("sha256");
        a.pipe(o);
        const l = Dv((d, u)=>{
            a.removeAllListeners(), o.removeAllListeners(), a.destroy(), d ? i(d) : s(u);
        });
        a.once("error", l), a.once("end", l), o.once("error", l), o.once("data", (d)=>l(void 0, d.toString("hex")));
    }) !== t) throw new Error("Hash mismatch");
}
import { spawn as p1 } from "child_process";
import * as jt from "fs";
import { tmpdir as SXe } from "os";
function wXe(e) {
    return `CursorUpdateSupervisor-${e}`;
}
function oge(e) {
    return e.length > 0 && e.length <= 128 && /^[a-zA-Z0-9-]+$/.test(e);
}
function EXe(e) {
    return typeof e == "object" && e !== null;
}
function RXe(e, t, n) {
    const r = Dw(t, n);
    if (r === void 0) return;
    const s = Vme(r);
    return e.find((i)=>i.ctx === s);
}
import { app as kge } from "electron";
import { protocol as PXe } from "electron";
import { webContents as DXe } from "electron";
import { z as p } from "zod";
function be(e) {
    return Object.assign((n)=>{
        if (e.findIndex((r)=>r === n) === -1) throw new Error(`Invalid value for enum: ${n}, expected one of: ${e.join(", ")}`);
        return n;
    }, {
        enumValues: e
    });
}
function Se(e) {
    if (typeof e != "boolean") throw new Error(`Invalid value for boolean: ${e}`);
    return e;
}
function T1(e) {
    if (typeof e != "string") throw new Error(`Invalid value for string: ${e}`);
    return e;
}
function Au(e) {
    if (typeof e != "number") throw new Error(`Invalid value for number: ${e}`);
    return e;
}
function gQe(e) {
    if (!Array.isArray(e)) throw new Error(`Invalid value for string array: ${e}`);
    return e.map(T1);
}
function ofe(e, t) {
    const n = encodeURIComponent(t);
    return `${e}:${n}`;
}
function IQe(e) {
    if (e) try {
        const t = JSON.parse(e), n = typeof t.inactiveDays == "number" && Number.isFinite(t.inactiveDays) && t.inactiveDays > 0 ? t.inactiveDays : void 0, r = typeof t.minSupportedClientVersion == "string" && t.minSupportedClientVersion.trim().length > 0 ? t.minSupportedClientVersion.trim() : void 0;
        return n === void 0 || r === void 0 ? void 0 : {
            localRoutingEnabled: t.localRoutingEnabled !== !1,
            userRoutingEnabled: t.userRoutingEnabled === !0,
            inactiveDays: n,
            minSupportedClientVersion: r
        };
    } catch  {
        return;
    }
}
function PQe(e) {
    try {
        const t = JSON.parse(e), n = t.clientVersionStatus?.minSupportedClientVersion?.trim();
        return n || t.client_version_status?.min_supported_client_version?.trim() || void 0;
    } catch  {
        return;
    }
}
function OQe(e) {
    return e.lastNormalWindowWasOpenOnShutdown !== void 0 ? !e.lastNormalWindowWasOpenOnShutdown : !e.hasStoredNormalWindowState;
}
function LQe(e) {
    const { currentGlass: t, decision: n, state: r } = e;
    return n ? kw(n) ? e.hasExplicitFirstWindowIntent ? t : !0 : OQe(r) ? !0 : t : t;
}
function UQe(e) {
    return async (t)=>{
        const n = await e(t.url, {
            method: t.method,
            headers: t.header,
            signal: t.signal,
            body: t.body ? await xQe(t.body) : void 0
        });
        return {
            status: n.status,
            header: n.headers,
            body: FQe(n),
            trailer: new Headers
        };
    };
}
async function xQe(e) {
    const t = [];
    let n = 0;
    for await (const i of e)t.push(i), n += i.byteLength;
    if (n === 0) return;
    const r = new Uint8Array(n);
    let s = 0;
    for (const i of t)r.set(i, s), s += i.byteLength;
    return r.buffer;
}
async function* FQe(e) {
    const t = new Uint8Array(await e.arrayBuffer());
    t.byteLength > 0 && (yield t);
}
function wfe(e) {
    return e.vscodeVersion;
}
import rs from "electron";
import { release as Efe } from "os";
import ll from "electron";
function jQe(e) {
    return e.preferLastFocused ? e.lastClosedState ?? e.lastFocusedState ?? e.liveLastActive : e.lastClosedState ?? e.liveLastActive ?? e.lastFocusedState;
}
function HQe(e) {
    if (e?.workspace) return {
        workspaceUri: e.workspace.configPath
    };
    if (e?.folderUri) return {
        folderUri: e.folderUri
    };
}
function qQe(e) {
    return e.hasVisibleWindows ? {
        kind: "ignore",
        reason: "visible-windows"
    } : e.initialWindowOpenSettled ? e.hasExistingWindow ? {
        kind: "focus-existing"
    } : {
        kind: "warm-open"
    } : {
        kind: "ignore",
        reason: "startup-owns-first-window"
    };
}
function KQe(e, t) {
    if (cme(e)) return {
        kind: "glass"
    };
    const n = HQe(t);
    return n ? {
        kind: "restore",
        openable: n
    } : t?.uiState.glassMode === !0 ? {
        kind: "glass"
    } : {
        kind: "empty"
    };
}
function zQe(e, t) {
    return e ? e.config?.glass === !0 : t?.uiState.glassMode === !0;
}
function Cfe() {
    return {
        _: [],
        classic: !0,
        glass: !1
    };
}
function Ife(e) {
    return {
        context: 1,
        cli: Cfe(),
        forceEmpty: !0,
        forceNewWindow: !0,
        remoteAuthority: e?.remoteAuthority
    };
}
async function YQe(e, t, n) {
    const r = KQe(e, t);
    switch(r.kind){
        case "glass":
            return n.open({
                context: 1,
                cli: {
                    _: [],
                    glass: !0
                }
            });
        case "restore":
            {
                const s = await n.open({
                    context: 1,
                    cli: Cfe(),
                    urisToOpen: [
                        r.openable
                    ],
                    remoteAuthority: t?.remoteAuthority
                });
                return s.length > 0 ? s : n.open({
                    ...Ife(t)
                });
            }
        case "empty":
            return n.open({
                ...Ife(t)
            });
    }
}
function XQe(e) {
    return {
        lastActiveWindow: e.lastActiveWindow && g2(e.lastActiveWindow),
        lastPluginDevelopmentHostWindow: e.lastPluginDevelopmentHostWindow && g2(e.lastPluginDevelopmentHostWindow),
        openedWindows: e.openedWindows.map((t)=>g2(t)),
        lastNonExtensionWindowWasOpenOnShutdown: e.lastNonExtensionWindowWasOpenOnShutdown
    };
}
function g2(e) {
    return {
        workspaceIdentifier: e.workspace && {
            id: e.workspace.id,
            configURIPath: e.workspace.configPath.toString()
        },
        folder: e.folderUri && e.folderUri.toString(),
        backupPath: e.backupPath,
        remoteAuthority: e.remoteAuthority,
        uiState: e.uiState
    };
}
import * as Mfe from "fs";
import { app as Pfe, BrowserWindow as b1, shell as QQe } from "electron";
import { hostname as ZQe, release as eZe, arch as tZe } from "os";
function C1(e) {
    try {
        return new URL(e).protocol.replace(":", "").toLowerCase();
    } catch  {
        return;
    }
}
import { app as $fe, BrowserWindow as mZe, WebContentsView as pZe, shell as k2, dialog as hZe, session as gZe, webContents as S2 } from "electron";
function Kfe(e) {
    return e.startsWith("--");
}
function zfe(e) {
    return e?.cssProperties.filter((t)=>!t.disabled && t.parsedOk !== !1 && t.value !== "") ?? [];
}
function Yfe(e) {
    return (e ?? []).filter(({ rule: t })=>!t.startingStyles?.length).map(({ rule: t })=>t);
}
function _Ze({ name: e, value: t, important: n }) {
    return {
        name: e,
        value: t,
        important: n === !0
    };
}
function vZe(e) {
    const t = Yfe(e.matchedCSSRules), n = (a)=>a.origin === "user-agent", r = [
        ...t.filter(n).map((a)=>({
                userAgent: !0,
                style: a.style
            })),
        {
            userAgent: !1,
            style: e.attributesStyle
        },
        ...t.filter((a)=>!n(a)).map((a)=>({
                userAgent: !1,
                style: a.style
            })),
        {
            userAgent: !1,
            style: e.inlineStyle
        }
    ].map(({ userAgent: a, style: o })=>({
            userAgent: a,
            declarations: zfe(o).filter((l)=>!Kfe(l.name)).map(_Ze)
        })).filter((a)=>a.declarations.length > 0), s = new Set, i = [
        ...e.inherited ?? []
    ].reverse();
    for (const { matchedCSSRules: a, inlineStyle: o } of [
        ...i,
        e
    ])for (const l of [
        ...Yfe(a).map((d)=>d.style),
        o
    ])for (const { name: d } of zfe(l))Kfe(d) && s.add(d);
    return {
        blocks: r,
        variableNames: [
            ...s
        ]
    };
}
async function TZe(e, t) {
    e.isAttached() || e.attach("1.3"), await e.sendCommand("DOM.enable"), await e.sendCommand("CSS.enable");
    try {
        const { root: n } = await e.sendCommand("DOM.getDocument", {
            depth: 0
        }), { nodeId: r } = await e.sendCommand("DOM.querySelector", {
            nodeId: n.nodeId,
            selector: t
        });
        return r ? vZe(await e.sendCommand("CSS.getMatchedStylesForNode", {
            nodeId: r
        })) : null;
    } finally{
        await e.sendCommand("CSS.disable");
    }
}
function yZe(e) {
    return e.map((t)=>{
        const [n, r] = t.split("@");
        return {
            proposalName: n,
            version: r ? parseInt(r) : void 0
        };
    });
}
function wZe(e) {
    return e.map((t)=>t.split("@")[0]);
}
function pf(e, t) {
    return e.uuid && t.uuid ? e.uuid === t.uuid : e.id === t.id ? !0 : SR(e.id, t.id) === 0;
}
function bZe(e, t) {
    return `${e}.${t}`;
}
function RZe(e) {
    return e.toLowerCase();
}
function t_e(e) {
    return Un(e) && _ze(e.identifier) && (PZe(e.location) || Ln(e.location) && e.location) && (aa(e.relativeLocation) || Ln(e.relativeLocation)) && e.version && Ln(e.version);
}
function PZe(e) {
    return e ? Ln(e.path) && Ln(e.scheme) : !1;
}
function s_e(e) {
    if (!Array.isArray(e)) return !1;
    for(let t = 0, n = e.length; t < n; t++)if (typeof e[t] != "string") return !1;
    return !0;
}
import * as bet from "os";
import "fs";
import "util";
function Ret() {
    const e = /(\d+)\.(\d+)\.(\d+)/g.exec(bet.release());
    let t = 0;
    return e && e.length === 4 && (t = parseInt(e[3])), t;
}
import * as Iet from "fs";
import * as Aet from "child_process";
function E_e(e) {
    return typeof e == "string" ? {
        id: e
    } : e;
}
function b_e(e, t) {
    if (e) for (const [n, r] of Object.entries(e))r === null || typeof r != "object" || !("path" in r) && !("source" in r) ? t.delete(n) : (r.icon = r.icon || t.get(n)?.icon, t.set(n, r));
}
function Get(e) {
    return {
        hostId: e.hostId,
        processTitle: e.processTitle,
        entryPoint: e.entryPoint,
        env: e.env,
        idleTimeoutMs: e.idleTimeoutMs ?? 3e4,
        maxRestarts: e.maxRestarts ?? 5,
        placement: e.placement
    };
}
function $et(e) {
    return {
        request: `vscode:createUtilityHostMessageChannel-${e}`,
        response: `vscode:createUtilityHostMessageChannelResult-${e}`
    };
}
import { BrowserWindow as Yet } from "electron";
import { BrowserWindow as Xet, app as Qet } from "electron";
import { promises as O_e } from "fs";
function ntt(e, t) {
    return {
        ...e,
        data: {
            ...e.data,
            source_process: t
        }
    };
}
function L_e(e) {
    const t = e.contexts?.electron;
    if (!(t == null || typeof t != "object")) return t;
}
function stt(e) {
    if (e.level !== "fatal" || e.tags?.["event.environment"] !== "native") return;
    const n = L_e(e)?.details;
    if (n == null || typeof n != "object") return;
    const r = n;
    if (typeof r.type == "string") return `child-process-gone:${String(r.name)}:${String(r.exitCode)}:${String(r.reason)}`;
}
function itt(e) {
    const t = L_e(e);
    return t === void 0 ? !1 : Object.keys(t).some((n)=>n.startsWith("crashpad."));
}
function att(e, t, n, r) {
    const s = stt(e);
    if (s === void 0) return !1;
    const i = t.peek(s), a = i === void 0 || r - i >= n;
    return a && t.set(s, r), itt(e) ? !1 : !a;
}
import U2 from "fs";
import B_e from "path";
function mtt(e, t, n) {
    try {
        const r = U2.realpathSync(t), s = U2.realpathSync(e), i = B_e.relative(r, s);
        if (!(i !== "" && !i.startsWith("..") && !B_e.isAbsolute(i))) {
            n.warn("TracingService: rejected debugging data upload outside the trusted debugging-data directory");
            return;
        }
        if (!U2.statSync(s).isFile()) {
            n.warn("TracingService: rejected debugging data upload because the resolved path is not a file");
            return;
        }
        return s;
    } catch (r) {
        n.warn("TracingService: failed to validate debugging data upload path", r);
        return;
    }
}
function $_e(e, t) {
    return F2(e, t, 0);
}
function F2(e, t, n) {
    if (n > t) return n;
    if (e === null) return n + 4;
    const r = typeof e;
    if (r === "string" || r === "number" || r === "boolean") return n + JSON.stringify(e).length;
    if (r !== "object") return n + 4;
    if (Array.isArray(e)) {
        n += 2;
        for(let i = 0; i < e.length; i++)if (i > 0 && (n += 1), n = F2(e[i], t, n), n > t) return n;
        return n;
    }
    n += 2;
    let s = !0;
    for (const [i, a] of Object.entries(e))if (!(a === void 0 || typeof a == "function" || typeof a == "symbol") && (s || (n += 1), s = !1, n += JSON.stringify(i).length + 1, n = F2(a, t, n), n > t)) return n;
    return n;
}
function Stt(e) {
    const { previousSampleRate: t, newSampleRate: n, isRecording: r, roll: s } = e;
    if (r) {
        const a = t <= 0 || n >= t ? 1 : n / t;
        return s < a ? "none" : "stop";
    }
    const i = t <= 0 ? n : t >= 1 ? 0 : Math.max(0, n - t) / (1 - t);
    return s < i ? "start" : "none";
}
function Ltt(e, t) {
    let n = e;
    for(let r = 0; r < t.length; r++){
        if (n === void 0) return;
        const s = t[r], i = r === t.length - 1, a = Utt(n, s);
        if (a === void 0) return;
        if (i) return a.wireType !== 0 ? void 0 : a.varint;
        if (a.wireType !== 2 || a.bytes === void 0) return;
        n = a.bytes;
    }
}
function Utt(e, t) {
    let n = 0;
    for(; n < e.byteLength;){
        const r = $2(e, n);
        if (r === void 0) return;
        n = r.nextOffset;
        const s = r.value & 7, i = r.value >>> 3;
        if (s === 0) {
            const a = $2(e, n);
            if (a === void 0) return;
            if (n = a.nextOffset, i === t) return {
                wireType: s,
                varint: a.value
            };
            continue;
        }
        if (s === 2) {
            const a = $2(e, n);
            if (a === void 0) return;
            n = a.nextOffset;
            const o = n + a.value;
            if (o > e.byteLength) return;
            const l = e.subarray(n, o);
            if (n = o, i === t) return {
                wireType: s,
                bytes: l
            };
            continue;
        }
        if (s === 1) {
            n += 8;
            continue;
        }
        if (s === 5) {
            n += 4;
            continue;
        }
        return;
    }
}
function $2(e, t) {
    let n = 0, r = 0, s = t;
    for(; s < e.byteLength && r <= 28;){
        const i = e[s++];
        if (n |= (i & 127) << r, (i & 128) === 0) return {
            value: n >>> 0,
            nextOffset: s
        };
        r += 7;
    }
}
import { promises as j2 } from "fs";
import * as Btt from "path";
function jtt(e) {
    if (e === !0) return "true";
    if (e === !1) return "false";
    if (e === void 0) return "implicit-false";
    {
        let t = e;
        return t = t, "true";
    }
}
function Ytt(e) {
    return e.urlProtocol === "cursor-dev" ? "debug" : e.version.includes("nightly") || e.version.includes("-pre") ? "nightly" : "stable";
}
import { randomUUID as Xtt } from "crypto";
import Qtt from "fs";
import { app as Tf, webContents as q2, crashReporter as ent } from "electron";
import we from "fs";
import kf from "node-fetch";
import { tmpdir as tnt } from "os";
import en from "path";
function cnt(e) {
    const t = e?.samples;
    if (!Array.isArray(t)) return {
        sampleCount: 0,
        sampledBytes: 0
    };
    let n = 0;
    for (const r of t){
        const s = r?.size;
        typeof s == "number" && (n += s);
    }
    return {
        sampleCount: t.length,
        sampledBytes: n
    };
}
import ss from "fs";
import { tmpdir as mnt } from "os";
import Po from "path";
import { createGzip as pnt } from "zlib";
import hnt from "electron";
import * as No from "path";
import * as Tnt from "fs";
import * as kve from "fs";
import * as wnt from "path";
import * as Rve from "node:path";
import { devNull as Ave } from "node:os";
function Pnt(e) {
    const t = e.GIT_CONFIG_COUNT;
    if (t === void 0 || t === "") return 0;
    const n = Number.parseInt(String(t), 10);
    return !Number.isFinite(n) || n < 0 ? 0 : n;
}
function Nnt(e, t) {
    const n = Pnt(e), r = {
        ...e
    }, s = new Set;
    for(let a = 0; a < n; a++){
        const o = r[`GIT_CONFIG_KEY_${a}`];
        for (const [l, d] of t)o === l && (r[`GIT_CONFIG_VALUE_${a}`] = d, s.add(l));
    }
    let i = n;
    for (const [a, o] of t)s.has(a) || (r[`GIT_CONFIG_KEY_${i}`] = a, r[`GIT_CONFIG_VALUE_${i}`] = o, i++);
    return i !== n && (r.GIT_CONFIG_COUNT = String(i)), r;
}
import { execFile as Lnt, spawn as Unt } from "node:child_process";
import { promisify as xnt } from "node:util";
function Fnt(e) {
    const t = new Set([
        "-c",
        "-C",
        "--git-dir",
        "--work-tree"
    ]);
    for(let n = 0; n < e.length; n++){
        const r = e[n];
        if (t.has(r)) {
            n++;
            continue;
        }
        if (!r.startsWith("-")) return r;
    }
}
import { accessSync as $nt, constants as jnt, realpathSync as Hnt, statSync as qnt } from "node:fs";
import { readFile as Knt } from "node:fs/promises";
import { delimiter as znt, dirname as Ynt, isAbsolute as X2, join as Q1, resolve as Q2 } from "node:path";
function Z1(e) {
    const t = Q2(e);
    try {
        return Hnt.native(t);
    } catch (n) {
        return n.code === "ENOENT" ? t : null;
    }
}
function Xnt(e) {
    const t = e.split("\0"), n = [];
    for(let r = 0; r + 1 < t.length; r += 2){
        const s = t[r]?.trim() ?? "", i = t[r + 1] ?? "";
        s && n.push({
            hash: s,
            message: i
        });
    }
    return n;
}
function Qnt(e) {
    const t = [];
    let n = !1;
    for (const r of e.split(/\r?\n/)){
        const s = r.trim();
        if (!s || s.startsWith("#") || s.startsWith(";")) continue;
        if (/^\[submodule\s+"[^"]+"\]$/.test(s)) {
            n = !0;
            continue;
        }
        if (s.startsWith("[") && s.endsWith("]")) {
            n = !1;
            continue;
        }
        if (!n) continue;
        const i = r.match(/^\s*path\s*=\s*(.+?)\s*$/);
        if (!i) continue;
        const a = i[1]?.trim();
        a && t.push({
            relativePath: a
        });
    }
    return t;
}
async function trt(e, t, n = {}) {
    const { limit: r = 500, sinceMs: s } = n, i = await e.getGitUser(t);
    if (!i) return;
    const a = await e.getCommitsByAuthor(t, {
        author: i,
        limit: r,
        sinceMs: s,
        allRefs: !0
    });
    return {
        user: i,
        commits: a
    };
}
import { realpath as rrt } from "node:fs/promises";
import { basename as srt, dirname as Uve, join as irt, relative as art } from "node:path";
function xve(e, t) {
    const n = art(e, t);
    if (n && !n.startsWith("..")) return n.replace(/\\/g, "/");
}
async function ort(e) {
    try {
        return irt(await rrt(Uve(e)), srt(e));
    } catch  {
        return;
    }
}
async function crt(e, t, n) {
    const r = t.replace(/\\/g, "/"), s = n?.replace(/\\/g, "/") ?? r;
    try {
        const i = await e.getGitRoot(Uve(t));
        if (i) {
            const a = xve(i, t);
            if (a) return a;
            const o = await ort(t), l = o ? xve(i, o) : void 0;
            if (l) return l;
        }
    } catch  {}
    return s;
}
function Fve(e) {
    const t = e.lastIndexOf("."), n = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
    return t === -1 || t < n ? "" : e.slice(t + 1);
}
function mrt(e) {
    try {
        let t = e;
        return e.includes("@") && !e.startsWith("http") && (e.startsWith("ssh://") || (t = e.replace(/^([^@]+)@([^:]+):(.*)/, "ssh://$1@$2/$3"))), new URL(t);
    } catch  {
        return null;
    }
}
function prt(e) {
    if (!e) return;
    const t = e.replace("https///", "https://").replace("http///", "http://");
    if (t.startsWith("gitlab-remote://")) try {
        const d = new URL(t).searchParams.get("project");
        if (d) return d.includes("/") ? d : void 0;
    } catch  {}
    const n = mrt(t);
    if (!n) return;
    const r = n.hostname.toLowerCase(), s = n.pathname.split("/").filter((l)=>l.length > 0);
    if (s.length > 0 && s[s.length - 1].endsWith(".git") && (s[s.length - 1] = s[s.length - 1].slice(0, -4)), r === "dev.azure.com" || r === "ssh.dev.azure.com" || r.endsWith(".visualstudio.com")) {
        const l = [
            ...s
        ];
        r === "ssh.dev.azure.com" && l.length > 0 && l[0].toLowerCase() === "v3" && l.shift();
        const d = l.filter((u)=>u.toLowerCase() !== "_git");
        return d.length >= 1 ? d.join("/") : void 0;
    }
    if (r.includes("github") || r.endsWith(".ghe.com")) return s.length >= 2 ? s.slice(0, 2).join("/") : void 0;
    if (r.includes("gitlab")) return s.length >= 1 ? s.join("/") : void 0;
    if (r.includes("bitbucket") || r.includes("stash")) return s.length >= 3 && s[0].toLowerCase() === "scm" ? s.slice(1, 3).join("/") : s.length >= 2 ? s.slice(0, 2).join("/") : void 0;
    const a = r.includes("gerrit"), o = s.length > 0 && s[0].toLowerCase() === "gerrit";
    if (a || o) {
        const l = [
            ...s
        ];
        return o && l.shift(), l.length > 0 && l[0].toLowerCase() === "a" && l.shift(), l.length >= 1 ? l.join("/") : void 0;
    }
    if (s.length >= 2) return s.slice(0, 2).join("/");
}
import { access as hrt, readdir as grt } from "node:fs/promises";
import { join as e9, normalize as Wve } from "node:path";
async function frt(e, t) {
    const n = new Set, r = [], s = (o)=>{
        n.has(o) || (n.add(o), r.push(o));
    };
    async function i(o) {
        try {
            return await hrt(e9(o, ".git")), !0;
        } catch  {
            return !1;
        }
    }
    async function a(o, l) {
        const d = await e.getGitRoot(o);
        if (!d) return !1;
        if (s(Wve(d)), !l) return !0;
        const u = await e.getSubmodules(d);
        if (!u) return !0;
        for (const m of u)s(Wve(e9(d, m.relativePath)));
        return !0;
    }
    for (const o of t)try {
        if (!await a(o, !0)) {
            const u = (await grt(o, {
                withFileTypes: !0
            })).filter((m)=>m.isDirectory() || m.isSymbolicLink()).map((m)=>m.name).sort((m, f)=>m.localeCompare(f));
            for (const m of u){
                const f = e9(o, m);
                await i(f) && await a(f, !1).catch(()=>{});
            }
        }
    } catch  {}
    return r;
}
async function _rt(e, t) {
    let n, r, s;
    try {
        [n, s] = await Promise.all([
            e.getCurrentBranch(t).catch(()=>{}),
            e.getDefaultBranch(t).catch(()=>{})
        ]);
        const a = await e.getUpstreamUrl(t);
        r = prt(a);
    } catch  {}
    return {
        branchName: n,
        repoName: r,
        primaryBranch: s,
        isPrimaryBranch: typeof n == "string" && typeof s == "string" && n && s ? n === s : void 0
    };
}
function r9(e, t) {
    let n = e;
    const r = t.startsWith(".") ? t.toLowerCase() : `.${t.toLowerCase()}`;
    return n = n.trim(), (r === ".js" || r === ".ts" || r === ".jsx" || r === ".tsx") && (n = n.replace(/\(\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\)\s*=>/g, "$1=>"), n = n.replace(/\$\{\s*([^}]+)\s*\}/g, "${$1}")), r === ".py" && (n = n.replace(/'''/g, '"'), n = n.replace(/"""/g, '"'), n = n.replace(/f"/g, '"'), n = n.replace(/f'/g, '"'), n = n.replace(/([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(?![=])/g, "$1=")), r === ".rb" && (n = n.replace(/:\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=>/g, "$1:"), n = n.replace(/#\{\s*([^}]+)\s*\}/g, "#{$1}")), n = n.replace(/\s+/g, ""), n = n.replace(/'/g, '"'), (r === ".js" || r === ".ts" || r === ".jsx" || r === ".tsx") && (n = n.replace(/`/g, '"')), n = n.replace(/;/g, ""), n = n.replace(/,/g, ""), n;
}
import * as Urt from "fs";
import * as zve from "crypto";
import sn from "fs";
import * as tE from "path";
function s9(e, t) {
    return `an agent host updater of an older version${t === void 0 ? "" : ` (pid ${t})`} holds ${e}`;
}
import * as i9 from "path";
import { pathToFileURL as Hrt } from "url";
function zrt(e) {
    const t = /^[a-z][a-z0-9+.-]+:/i.test(e) ? new URL(e) : Hrt(i9.resolve(e));
    if (![
        "http:",
        "https:",
        "file:"
    ].includes(t.protocol)) throw new Error(`${e}: agent harness CDN must be http(s) or file`);
    return t.pathname.endsWith("/") || (t.pathname += "/"), t;
}
import * as Gu from "fs";
import * as Zrt from "os";
import * as est from "path";
import * as tn from "fs";
import * as mn from "path";
import { fileURLToPath as ust } from "url";
function mst(e) {
    return e === void 0 ? {
        kind: "absent"
    } : {
        kind: "bytes",
        bytes: e
    };
}
import fst from "electron";
function kst(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e);
}
function v9(e) {
    return typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 255;
}
function RTe(e) {
    return typeof e == "number" && Number.isSafeInteger(e);
}
function Sst(e) {
    return `#${e.map((t)=>t.toString(16).padStart(2, "0")).join("")}`;
}
function CTe(e, t) {
    return e / Math.max(1, t);
}
function ITe({ width: e, height: t }, n, r) {
    const s = CTe(n, r.scaleFactor);
    return {
        x: 0,
        y: 0,
        width: Math.round(e * s),
        height: Math.round(t * s)
    };
}
function Est(e) {
    try {
        return new URL(e).protocol === "data:";
    } catch  {
        return !1;
    }
}
import { nativeImage as Rst } from "electron";
function Cst(e, t) {
    return e.toPNG({
        scaleFactor: t
    });
}
function Ist(e, t, n) {
    const r = Cst(e, t), s = Rst.createFromBuffer(r), i = s.getSize();
    if (!(i.width < n.width || i.height < n.height || i.width > n.width + 1 || i.height > n.height + 1)) return i.width === n.width && i.height === n.height ? r : s.crop({
        x: 0,
        y: 0,
        ...n
    }).toPNG({
        scaleFactor: 1
    });
}
import { BrowserWindow as Mst, screen as Pst, session as Nst } from "electron";
import { homedir as Wst } from "os";
function $st(e) {
    if (!e.length) return "";
    const t = new Map, n = new Set, r = [];
    for (const d of e)t.set(d.nodeId, d), (!d.parentId || !e.some((u)=>u.nodeId === d.parentId)) && r.push(d);
    function s(d) {
        const u = [
            "navigation",
            "banner",
            "complementary",
            "toolbar",
            "menu",
            "menuitem",
            "tab",
            "tablist"
        ], m = [
            "Skip to main content",
            "Toggle navigation",
            "Previous",
            "Next",
            "Copy",
            "Direct link to",
            "On this page",
            "Edit this page",
            "Search",
            "Command+K"
        ], f = i(d), v = d.role?.value?.toString().toLowerCase() || "";
        return u.includes(v) || m.some((T)=>f.includes(T)) || f.startsWith("Direct link to") || f.startsWith("\xAB ") || f.endsWith(" \xBB") || /^#\s*$/.test(f) || f === "\u200B";
    }
    function i(d) {
        const u = [];
        return d.name?.value && u.push(String(d.name.value)), d.value?.value && d.value.value !== d.name?.value && u.push(String(d.value.value)), d.description?.value && d.description.value !== d.name?.value && d.description.value !== d.value?.value && u.push(String(d.description.value)), u.join(" ").trim();
    }
    function a(d) {
        return d.role?.value === "code" || (d.properties || []).some((u)=>u.name === "code-block" || u.name === "pre");
    }
    function o(d, u = 0, m = {
        inCodeBlock: !1,
        codeText: []
    }) {
        if (!d || d.ignored || n.has(d.nodeId)) return [];
        if (s(d)) return [];
        n.add(d.nodeId);
        const f = [], v = i(d), T = a(d), S = T ? {
            inCodeBlock: !0,
            codeText: []
        } : m;
        if (v) {
            const k = "  ".repeat(u);
            T || S.inCodeBlock ? S.codeText.push(v.trim()) : f.push(k + v);
        }
        if (d.childIds) for (const k of d.childIds){
            const y = t.get(k);
            if (y) {
                const b = o(y, u + 1, S);
                f.push(...b);
            }
        }
        if (T && S.codeText.length > 0) {
            const k = "  ".repeat(u);
            f.push(k + S.codeText.join(" "));
        }
        return f;
    }
    const l = [];
    for (const d of r){
        const u = o(d);
        u.length > 0 && l.push(...u);
    }
    for (const d of e)if (!n.has(d.nodeId)) {
        const u = o(d);
        u.length > 0 && l.push(...u);
    }
    return l.filter((d, u, m)=>d.trim() || u > 0 && m[u - 1].trim()).join(`
`).trim();
}
import { BrowserWindow as Hst } from "electron";
function Jst(e, t) {
    return e.pressureLevel !== void 0 ? e.pressureLevel >= 2 : e.availPct < t.lowMemoryAvailablePct || e.availGb < t.lowMemoryAvailableAbsGb;
}
function Xst(e, t) {
    return e >= t.cpuHighPct;
}
function Qst(e) {
    const t = /^cpu\s+(.+)$/m.exec(e)?.[1].trim().split(/\s+/).map(Number);
    if (!t || t.length < 6 || t.some((o)=>!Number.isFinite(o))) return;
    const [n, r, s, i, , a] = t;
    return {
        idle: i,
        total: n + r + s + i + a
    };
}
function BTe(e, t) {
    return t <= 0 ? 1 : Math.max(1, Math.ceil(e / t));
}
function Zst(e, t, n) {
    const r = t ? e.consecutiveLowSamples + 1 : 0, s = t ? 0 : e.consecutiveHealthySamples + 1;
    if (e.episodeActive) {
        const a = s < n;
        return {
            state: {
                episodeActive: a,
                consecutiveLowSamples: r,
                consecutiveHealthySamples: s
            },
            emitReport: a,
            isEpisodeStart: !1
        };
    }
    const i = r >= n;
    return {
        state: {
            episodeActive: i,
            consecutiveLowSamples: r,
            consecutiveHealthySamples: s
        },
        emitReport: i,
        isEpisodeStart: i
    };
}
function eit(e) {
    return e.name.startsWith("extensionHost") && !e.processTitle.includes("(user)");
}
function sit(e) {
    return e.includes("Cursor Helper") || e.includes("Cursor Dev Helper") ? e : e.split(" ", 1)[0] ?? "";
}
function iit(e) {
    const t = e.trim();
    if (t.length === 0) return "";
    if (t.startsWith('"')) {
        const r = t.indexOf('"', 1);
        if (r > 0) return t.slice(1, r);
    }
    if (/^[a-zA-Z]:[\\/]/.test(t) || t.startsWith("\\\\")) {
        const r = /^.*?\.(?:exe|com|bat|cmd)(?=$|\s)/i.exec(t);
        if (r) return r[0];
    }
    return t.split(/\s+/, 1)[0] ?? "";
}
import { execFile as lit } from "child_process";
import { createRequire as uit } from "node:module";
import { execFile as XTe } from "child_process";
import { promises as uE, readFileSync as QTe } from "fs";
import { freemem as mit, totalmem as pit, cpus as ZTe } from "os";
function fit([e, t, n, r]) {
    return {
        url: e,
        method: t,
        headers: n,
        body: r
    };
}
function _it(e) {
    switch(e.type){
        case "head":
            return [
                "head",
                e.status,
                e.headers
            ];
        case "chunk":
            return [
                "chunk",
                e.data
            ];
        case "end":
            return [
                "end"
            ];
        case "error":
            return [
                "error",
                e.message,
                e.aborted,
                e.refused === !0
            ];
    }
}
function C9(e) {
    try {
        return new URL(e);
    } catch  {
        return;
    }
}
function Sit(e, t) {
    if (typeof e != "string") return !1;
    const n = /^window:(\d+)$/.exec(e);
    return n !== null && t(Number(n[1])) !== void 0;
}
function wit(e) {
    for (const t of e.inFlight)t.abort(new Error("session closed"));
    e.inFlight.clear();
}
function bit({ settingEnabled: e, gateEnabled: t }) {
    return e && t;
}
import Ait from "v8";
function Dit(e, t, n, r) {
    if (t === void 0 || t === "") return !1;
    for (const [i, a] of e)n - a >= r && e.delete(i);
    const s = e.get(t);
    return s !== void 0 && n - s < r;
}
function Oit(e, t, n) {
    t === void 0 || t === "" || e.set(t, n);
}
import { app as Lit, Notification as M9 } from "electron";
function bke(e) {
    if (!e) return [];
    const t = new Set(e.notificationStates.filter((r)=>r.hasNotification).map((r)=>r.composerId)), n = new Map;
    for (const r of e.sections.flatMap((s)=>s.items))t.has(r.composerId) && !n.has(r.composerId) && n.set(r.composerId, {
        composerId: r.composerId,
        name: r.name,
        source: r.source
    });
    return [
        ...n.values()
    ];
}
function Git(e) {
    const t = e.windows.filter((s)=>s.isVisible && s.isGlass);
    if (t.length === 0) return e.mainProcessCloudRefreshEnabled ? {
        kind: "main"
    } : {
        kind: "none"
    };
    const r = t.find((s)=>s.isLastActive) ?? t[0];
    return e.reason === "engagement" || e.reason === "poll" && r.rendererHasFocus ? {
        kind: "none"
    } : {
        kind: "renderer",
        windowId: r.id
    };
}
function jit(e, t) {
    return e !== void 0 && e.length > 0 && t !== void 0 && t.length > 0;
}
function Oa(e) {
    return e.startsWith("glass:");
}
function fE(e, t) {
    const n = Oa(e.contribution.producerId) ? 0 : 1, r = Oa(t.contribution.producerId) ? 0 : 1, s = e.ownerWindowId === void 0 ? 1 : 0, i = t.ownerWindowId === void 0 ? 1 : 0;
    return n - r || s - i || t.contribution.revision - e.contribution.revision || e.contribution.producerId.localeCompare(t.contribution.producerId) || (e.ownerWindowId ?? Number.MAX_SAFE_INTEGER) - (t.ownerWindowId ?? Number.MAX_SAFE_INTEGER);
}
function U9(e) {
    return [
        ...e
    ].sort(fE)[0];
}
function Hit(e) {
    const t = {
        "needs-attention": 3,
        unread: 2,
        running: 1,
        seen: 0
    }, n = {
        local: 3,
        "claude-code": 2,
        cloud: 1
    }, r = (m, f)=>m.item.agentUpdatedAt - f.item.agentUpdatedAt || t[m.item.statusIcon] - t[f.item.statusIcon] || n[m.item.source] - n[f.item.source] || (m.record.ownerWindowId === void 0 ? 0 : 1) - (f.record.ownerWindowId === void 0 ? 0 : 1) || (Oa(m.record.contribution.producerId) ? 1 : 0) - (Oa(f.record.contribution.producerId) ? 1 : 0) || m.record.contribution.revision - f.record.contribution.revision || -fE(m.record, f.record) || f.item.name.localeCompare(m.item.name) || f.sectionLabel.localeCompare(m.sectionLabel) || f.sectionId.localeCompare(m.sectionId), s = (m, f)=>fE(m.record, f.record) || m.sectionIndex - f.sectionIndex || m.sectionId.localeCompare(f.sectionId), i = new Map;
    for (const m of e)m.contribution.sections.forEach((f, v)=>{
        f.items.forEach((T, S)=>{
            const k = {
                item: T,
                sectionId: f.id,
                sectionLabel: f.label,
                sectionIndex: v,
                itemIndex: S,
                record: m
            }, y = i.get(T.composerId);
            (!y || r(k, y) > 0) && i.set(T.composerId, k);
        });
    });
    const a = new Map, o = new Map, l = new Map, d = new Map;
    for (const m of i.values()){
        const f = a.get(m.sectionId);
        f ? (f.items.push(m), s(m, f.order) < 0 && (f.order = m, f.label = m.sectionLabel)) : a.set(m.sectionId, {
            label: m.sectionLabel,
            items: [
                m
            ],
            order: m
        }), l.set(m.item.composerId, {
            id: m.record.contribution.profileId,
            name: m.record.contribution.profileName
        }), d.set(m.item.composerId, Oa(m.record.contribution.producerId));
    }
    const u = new Map;
    for (const m of i.values())m.record.ownerWindowId !== void 0 && (o.set(m.item.composerId, m.record.ownerWindowId), u.set(m.item.composerId, Oa(m.record.contribution.producerId)));
    for (const m of e){
        if (m.ownerWindowId === void 0) continue;
        const f = Oa(m.contribution.producerId);
        for (const v of m.contribution.sections)for (const T of v.items)i.has(T.composerId) && (o.has(T.composerId) || (o.set(T.composerId, m.ownerWindowId), u.set(T.composerId, f)));
    }
    for (const m of e)if (m.ownerWindowId !== void 0 && Oa(m.contribution.producerId)) for (const f of m.contribution.sections)for (const v of f.items)!i.has(v.composerId) || u.get(v.composerId) || i.get(v.composerId)?.record.ownerWindowId !== void 0 || (o.set(v.composerId, m.ownerWindowId), u.set(v.composerId, !0));
    return {
        sections: [
            ...a.entries()
        ].sort(([, m], [, f])=>s(m.order, f.order)).map(([m, f])=>({
                id: m,
                label: f.label,
                items: f.items.sort((v, T)=>fE(v.record, T.record) || v.sectionIndex - T.sectionIndex || v.itemIndex - T.itemIndex || T.item.agentUpdatedAt - v.item.agentUpdatedAt || v.item.composerId.localeCompare(T.item.composerId)).map((v)=>v.item)
            })),
        ownerWindowByComposerId: o,
        profileByComposerId: l,
        preferGlassByComposerId: d
    };
}
function qit(e, t) {
    return e.map((n)=>({
            ...n,
            items: n.items.map((r)=>{
                const s = t.get(r.composerId);
                return !s || s.hasNotification === r.hasNotification ? r : {
                    ...r,
                    hasNotification: s.hasNotification,
                    statusIcon: r.statusIcon === "seen" || r.statusIcon === "unread" ? s.hasNotification ? "unread" : "seen" : r.statusIcon
                };
            })
        }));
}
function Kit(e, t, n) {
    const r = [
        ...new Set(e.flatMap((a)=>a.items.map((o)=>o.composerId)))
    ], s = r.filter((a)=>n.get(a)?.hasNotification === !0), i = new Set(s.slice(0, t));
    for (const a of r){
        if (i.size >= t) break;
        i.add(a);
    }
    return {
        sections: e.flatMap((a)=>{
            const o = a.items.filter((l)=>i.has(l.composerId));
            return o.length > 0 ? [
                {
                    ...a,
                    items: o
                }
            ] : [];
        }),
        overflowUnreadComposerIds: s.slice(t)
    };
}
function zit(e) {
    const t = new Map, n = new Map;
    for (const r of [
        ...e
    ].reverse()){
        const s = r.ownerWindowId !== void 0;
        for (const i of r.contribution.notificationStates){
            const a = t.get(i.composerId), o = n.get(i.composerId) === !0;
            if (!a) {
                t.set(i.composerId, i), n.set(i.composerId, s);
                continue;
            }
            if (s !== o) {
                (i.notificationRevision > a.notificationRevision || i.notificationRevision === a.notificationRevision && (i.agentUpdatedAt > a.agentUpdatedAt || i.agentUpdatedAt === a.agentUpdatedAt && Number(i.hasNotification) > Number(a.hasNotification) || i.agentUpdatedAt === a.agentUpdatedAt && i.hasNotification === a.hasNotification && s)) && (t.set(i.composerId, i), n.set(i.composerId, s));
                continue;
            }
            (i.notificationRevision > a.notificationRevision || i.notificationRevision === a.notificationRevision && (i.agentUpdatedAt > a.agentUpdatedAt || i.agentUpdatedAt === a.agentUpdatedAt && !i.hasNotification)) && t.set(i.composerId, i);
        }
    }
    return t;
}
function _E(e) {
    const t = new Map, n = {
        allowedSources: new Set,
        hiddenSources: new Set,
        allowUnprojectedDiscovery: !1
    };
    t.set(void 0, n);
    const r = e.filter((i)=>i.ownerWindowId !== void 0), s = r.length > 0 ? r : [];
    for (const { contribution: i } of s)for (const a of i.cloudDiscoveryScopes){
        let o = t.get(a.teamId);
        o || (o = {
            allowedSources: new Set,
            hiddenSources: new Set,
            allowUnprojectedDiscovery: !1
        }, t.set(a.teamId, o));
        for (const l of a.allowedCloudSourceCategories)o.allowedSources.add(l), n.allowedSources.add(l);
        for (const l of a.includeHiddenSources)o.hiddenSources.add(l), n.hiddenSources.add(l);
        o.allowUnprojectedDiscovery ||= a.allowUnprojectedDiscovery, n.allowUnprojectedDiscovery ||= a.allowUnprojectedDiscovery;
    }
    return [
        ...t
    ].filter(([, i])=>i.allowedSources.size > 0 || i.allowUnprojectedDiscovery).map(([i, a])=>({
            teamId: i,
            allowedCloudSourceCategories: [
                ...a.allowedSources
            ].sort(),
            includeHiddenSources: [
                ...a.hiddenSources
            ].sort((o, l)=>o - l),
            allowUnprojectedDiscovery: a.allowUnprojectedDiscovery
        }));
}
function Cke(e, t) {
    const n = e.name.trim(), r = e.status === "running", s = t !== void 0 && t.statusIcon !== "running" && t.statusIcon !== "unread" && !t.hasNotification && e.updatedAtMs <= t.agentUpdatedAt, i = !r && e.isUnread && !s, a = r ? "running" : e.status === "error" ? "needs-attention" : i ? "unread" : "seen";
    return {
        composerId: e.composerId,
        name: n.length > 0 ? n : e.composerId,
        source: "cloud",
        repositoryUrls: e.repositoryUrls,
        agentUpdatedAt: e.updatedAtMs,
        statusIcon: a,
        toolTip: r ? "Running" : e.status === "error" ? "Needs attention" : void 0,
        hasNotification: i
    };
}
function Ike(e, t, n) {
    const r = t?.hasNotification === e.hasNotification ? t.notificationRevision : t ? Math.max(n, e.agentUpdatedAt, t.notificationRevision + 1) : e.agentUpdatedAt;
    return {
        composerId: e.composerId,
        hasNotification: e.hasNotification,
        agentUpdatedAt: e.agentUpdatedAt,
        notificationRevision: r
    };
}
function Ake(e) {
    return e.trim().toLowerCase().replace(/^git@([^:]+):/, "https://$1/").replace(/^ssh:\/\/git@/, "https://").replace(/\.git$/, "").replace(/\/$/, "");
}
function Yit(e) {
    const t = new Map(e.composers.map((i)=>{
        const a = e.readAtByComposerId.get(i.composerId);
        return [
            i.composerId,
            a !== void 0 && i.isUnread && i.updatedAtMs > 0 && i.updatedAtMs <= a ? {
                ...i,
                isUnread: !1
            } : i
        ];
    })), n = new Set, r = e.sections.flatMap((i)=>{
        const a = i.items.flatMap((o)=>{
            if (o.source !== "cloud") return n.add(o.composerId), [
                o
            ];
            if (e.missingComposerIds.has(o.composerId)) return e.notificationByComposerId.delete(o.composerId), [];
            const l = t.get(o.composerId);
            if (!l) return n.add(o.composerId), [
                o
            ];
            if (l.isArchived) return e.notificationByComposerId.delete(o.composerId), [];
            if (l.name.trim().length === 0) return n.add(o.composerId), [
                o
            ];
            const d = l.updatedAtMs >= o.agentUpdatedAt ? Cke(l, o) : o;
            return n.add(d.composerId), d !== o && e.notificationByComposerId.set(d.composerId, Ike(d, e.notificationByComposerId.get(d.composerId), e.nowMs)), [
                d
            ];
        });
        return a.length > 0 ? [
            {
                ...i,
                items: a
            }
        ] : [];
    }), s = e.allowUnprojectedAdditions ? [
        ...t.values()
    ].filter((i)=>!i.isArchived && i.name.trim().length > 0 && i.isEligibleForDiscovery && e.admittedComposerIds.has(i.composerId) && !n.has(i.composerId) && !e.missingComposerIds.has(i.composerId)).sort((i, a)=>a.updatedAtMs - i.updatedAtMs).map((i)=>Cke(i)) : [];
    if (s.length > 0) {
        const i = new Map;
        for (const l of r)for (const d of l.items)if (d.source === "cloud") for (const u of d.repositoryUrls ?? []){
            const m = Ake(u);
            m.length > 0 && !i.has(m) && i.set(m, l.id);
        }
        const a = new Map, o = [];
        for (const l of s){
            e.notificationByComposerId.set(l.composerId, Ike(l, e.notificationByComposerId.get(l.composerId), e.nowMs));
            const d = l.repositoryUrls?.map(Ake).map((u)=>i.get(u)).find((u)=>u !== void 0);
            if (d === void 0) o.push(l);
            else {
                const u = a.get(d) ?? [];
                u.push(l), a.set(d, u);
            }
        }
        for(let l = 0; l < r.length; l++){
            const d = r[l], u = a.get(d.id);
            u && (r[l] = {
                ...d,
                items: [
                    ...u,
                    ...d.items
                ]
            });
        }
        o.length > 0 && r.push({
            id: "cloud:discovered",
            label: "Cloud agents",
            items: o
        });
    }
    return r;
}
function x9(e) {
    if (!e) return 0;
    const t = new Set(e.notificationStates.filter((n)=>n.hasNotification).map((n)=>n.composerId));
    return e.overflowUnreadComposerIds.filter((n)=>t.has(n)).length;
}
function Mke(e) {
    return bke(e).length + x9(e);
}
function Pke(e) {
    return `${e} more unread`;
}
import { app as Fke } from "electron";
import { app as hl, Menu as Zit } from "electron";
import { app as tat, nativeImage as W9, nativeTheme as nat } from "electron";
import { existsSync as Hke, readFileSync as rat } from "fs";
function qke() {
    return nat.shouldUseDarkColors ? "dark" : "light";
}
function nOe(e, t) {
    const n = e.get(t.composerId);
    !n || t.updatedAtMs >= n.updatedAtMs ? e.set(t.composerId, {
        ...t,
        isEligibleForDiscovery: t.isEligibleForDiscovery || n?.isEligibleForDiscovery === !0
    }) : t.isEligibleForDiscovery && !n.isEligibleForDiscovery && e.set(t.composerId, {
        ...n,
        isEligibleForDiscovery: !0
    });
}
function rU(e, t) {
    return t.teamId === void 0 ? {
        ...e
    } : {
        ...e,
        "x-cursor-team-id": String(t.teamId)
    };
}
function tot(e, t) {
    const n = [];
    for(let r = 0; r < e.length; r += t)n.push(e.slice(r, r + t));
    return n;
}
function not(e) {
    return async (t)=>{
        const n = new Headers(t.header);
        n.set("Accept-Encoding", "identity");
        const r = await e(t.url, {
            method: t.method,
            headers: n,
            signal: t.signal,
            body: t.body ? await rot(t.body) : void 0
        }), s = new Headers(r.headers);
        return s.delete("content-encoding"), s.delete("content-length"), {
            status: r.status,
            header: s,
            body: sot(r),
            trailer: new Headers
        };
    };
}
async function rot(e) {
    const t = [];
    let n = 0;
    for await (const i of e)t.push(i), n += i.byteLength;
    if (n === 0) return;
    const r = new Uint8Array(n);
    let s = 0;
    for (const i of t)r.set(i, s), s += i.byteLength;
    return r.buffer;
}
async function* sot(e) {
    const t = new Uint8Array(await e.arrayBuffer());
    t.byteLength > 0 && (yield t);
}
function sOe() {
    return {
        composers: [],
        missingComposerIds: new Set,
        admittedComposerIds: new Set,
        readAtByComposerId: new Map
    };
}
function aot(e) {
    const t = _E(e).sort((n, r)=>(n.teamId ?? Number.MIN_SAFE_INTEGER) - (r.teamId ?? Number.MIN_SAFE_INTEGER));
    return JSON.stringify(t);
}
function iOe(e, t) {
    return U9(e.filter((r)=>r.ownerWindowId !== void 0))?.contribution?.mainProcessCloudRefreshEnabled ?? t;
}
function oot(e, t) {
    const n = new Set;
    for (const r of e)for (const s of r.contribution.sections)for (const i of s.items)i.source === "cloud" && n.add(i.composerId);
    for (const r of t.composers)n.add(r.composerId);
    return [
        ...n
    ];
}
function cot(e, t) {
    const n = new Map(t.composers.map((i)=>[
            i.composerId,
            i
        ])), r = new Set([
        ...e.admittedComposerIds
    ].filter((i)=>{
        const a = n.get(i);
        return a !== void 0 && !a.isArchived && !t.missingKnownComposerIds.has(i);
    })), s = new Map(e.readAtByComposerId);
    for (const i of t.composers){
        i.isEligibleForDiscovery && i.status === "running" && r.add(i.composerId);
        const a = s.get(i.composerId);
        a !== void 0 && i.updatedAtMs > a && s.delete(i.composerId);
    }
    for (const i of t.missingKnownComposerIds)s.delete(i);
    return {
        composers: t.composers,
        missingComposerIds: t.missingKnownComposerIds,
        admittedComposerIds: r,
        readAtByComposerId: s
    };
}
function lot(e, t, n) {
    const r = new Map(e.readAtByComposerId);
    for (const s of t)r.set(s, n);
    return {
        ...e,
        composers: e.composers.map((s)=>t.has(s.composerId) ? {
                ...s,
                isUnread: !1
            } : s),
        readAtByComposerId: r
    };
}
import { app as zu, Menu as aOe, nativeImage as oOe, Tray as uot, nativeTheme as VE, powerMonitor as $E, screen as cOe, shell as mot, systemPreferences as pot } from "electron";
import { existsSync as _l } from "fs";
function _ot(e) {
    let t = 0, n = 0;
    for (const r of e)r.config?.glass === !0 ? n++ : t++;
    return {
        mainWindowCount: e.length,
        editorWindowCount: t,
        glassWindowCount: n
    };
}
function vot(e, t) {
    if (e.length === 0) return t;
    let n = e[0].id;
    for(let r = 1; r < e.length; r++){
        const s = e[r].id;
        s < n && (n = s);
    }
    return n;
}
function Sot(e, t, n, r) {
    for (const [i, a] of [
        ...e
    ])r(a) || e.delete(i);
    const s = [];
    for (const i of t){
        const a = e.get(i);
        a !== void 0 && a !== n || (e.set(i, n), s.push(i));
    }
    return s;
}
function yot(e, t, n) {
    for (const r of t)e.get(r) === n && e.delete(r);
}
function uOe(e, t, n) {
    if (n <= 0) return [];
    if (t.size === 0 || e.length <= n) return e.slice(0, n);
    const r = new Set;
    for (const s of e){
        if (r.size >= n) break;
        t.has(s.composerId) && r.add(s.composerId);
    }
    for (const s of e){
        if (r.size >= n) break;
        r.add(s.composerId);
    }
    return e.filter((s)=>r.has(s.composerId));
}
function bot(e) {
    return e.createdFromBackgroundAgent !== void 0 && e.createdFromBackgroundAgent.shouldStreamMessages !== !1;
}
import * as zE from "fs";
import { z as je } from "zod";
function Aot(e) {
    const t = new Map;
    for (const n of e){
        const r = t.get(n.composerId);
        (!r || e8(n, r)) && t.set(n.composerId, n);
    }
    return Array.from(t.values());
}
function Mot(e) {
    try {
        return Buffer.from(e).toString("hex");
    } catch  {
        return Array.from(e, (t)=>t.toString(16).padStart(2, "0")).join("");
    }
}
function Pot(e) {
    const t = e.trim().toLowerCase();
    if (t.length % 2 !== 0) throw new Error("Invalid hex string length");
    const n = new Uint8Array(t.length / 2);
    for(let r = 0; r < t.length; r += 2)n[r / 2] = parseInt(t.slice(r, r + 2), 16);
    return n;
}
import { promises as Ct } from "fs";
import { homedir as mU } from "os";
function POe(e, t, n) {
    n ? e[t] = 1 : delete e[t];
}
async function NOe(e, t, n) {
    if (n === void 0) {
        await Ju(e, "DELETE FROM ItemTable WHERE key = ?", [
            t
        ]);
        return;
    }
    await Yu(e, t, n);
}
async function Yu(e, t, n) {
    await Ju(e, "INSERT INTO ItemTable (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value", [
        t,
        n
    ]);
}
async function OOe(e, t, n) {
    return new Promise((r, s)=>{
        e.all(t, n, (i, a)=>i ? s(i) : r(a));
    });
}
async function Ju(e, t, n) {
    return new Promise((r, s)=>{
        e.run(t, n, (i)=>i ? s(i) : r());
    });
}
async function LOe(e) {
    return new Promise((t, n)=>{
        e.close((r)=>r ? n(r) : t());
    });
}
function UOe(e, t) {
    if (e === void 0) return;
    const n = JSON.parse(typeof e == "string" ? e : e.toString("utf8"));
    if (!$f(n)) throw new Error(`Storage value ${t} is not a JSON object`);
    return n;
}
function $f(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function jot(e) {
    if (!$f(e) || e.version !== 1 || e.kind !== "error" || typeof e.message != "string") throw new Error("Invalid local-mode data import result");
    return {
        version: 1,
        kind: "error",
        message: e.message
    };
}
async function Kot(e) {
    try {
        return Date.now() - (await Ct.stat(e)).mtimeMs;
    } catch  {
        return Number.POSITIVE_INFINITY;
    }
}
function jf(e) {
    try {
        return process.kill(e, 0), !0;
    } catch (t) {
        return !Hf(t, "ESRCH");
    }
}
async function Yot(e, t) {
    const n = Date.now() + t;
    for(; jf(e);){
        if (Date.now() >= n) return !1;
        await new Promise((r)=>setTimeout(r, 100));
    }
    return !0;
}
function Xu(e) {
    return Hf(e, "ENOENT");
}
function Hf(e, t) {
    return typeof e == "object" && e !== null && "code" in e && e.code === t;
}
function vl(e) {
    return e instanceof Error ? e.message : String(e);
}
function tct(e) {
    return typeof e == "object" && e !== null && "code" in e && e.code === "ENOENT";
}
import { promises as yU } from "fs";
function r2e(e) {
    return e === "none" || e === "folder" || e === "multi-root";
}
function EU(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function i2e(e) {
    if (e.status === "skipped") return;
    const t = e.status === "completed" ? "succeeded" : e.status === "failed" || e.status === "interrupted" ? "failed" : e.status === "canceled" ? "other" : "active";
    return {
        runId: e.id,
        at: e.claimedAt,
        outcome: t
    };
}
function AU(e) {
    return e.trim().replace(/\s+/g, " ");
}
function MU(e, t, n) {
    const r = new Set;
    for (const s of e.split(",")){
        if (s.length === 0) return;
        const i = s.split("/");
        if (i.length > 2) return;
        const a = i[0] ?? "";
        if (a.length === 0 || i.length === 2 && (i[1]?.length ?? 0) === 0) return;
        const o = i.length === 2 ? Number(i[1]) : 1;
        if (!Number.isInteger(o) || o <= 0) return;
        let l, d;
        if (a === "*") l = t, d = n;
        else if (a.includes("-")) {
            const u = a.split("-");
            if (u.length !== 2 || (u[0]?.length ?? 0) === 0 || (u[1]?.length ?? 0) === 0) return;
            l = Number(u[0]), d = Number(u[1]);
        } else l = Number(a), d = i.length === 2 ? n : l;
        if (!Number.isInteger(l) || !Number.isInteger(d) || l < t || d > n || l > d) return;
        for(let u = l; u <= d; u += o)r.add(u);
    }
    return r.size > 0 ? r : void 0;
}
function PU(e) {
    const t = AU(e).split(" ");
    if (t.length !== 5) return;
    const [n, r, s, i, a] = t;
    if (s !== "*" || i !== "*") return;
    const o = MU(n, 0, 59), l = MU(r, 0, 23), d = MU(a, 0, 7);
    if (!(!o || !l || !d)) return {
        minute: o,
        hour: l,
        dayOfWeek: new Set([
            ...d
        ].map((u)=>u === 7 ? 0 : u))
    };
}
function ict(e, t) {
    return e.minute.has(t.minute) && e.hour.has(t.hour) && e.dayOfWeek.has(t.dayOfWeek);
}
function DU(e) {
    return PU(e) !== void 0;
}
function cct(e) {
    const t = PU(e);
    return t !== void 0 && t.minute.size === 1 && t.hour.size === 1;
}
function nb(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function lct(e) {
    return e.length === 0 ? "none" : "folder";
}
function dct(e, t) {
    switch(e){
        case "none":
            return t.length === 0;
        case "folder":
        case "multi-root":
            return t.length > 0;
        default:
            {
                const n = e;
                throw new Error(`Unsupported workspace kind: ${n}`);
            }
    }
}
function uct(e) {
    return e === "claimed" || e === "starting" || e === "running" || e === "needs_attention" || e === "completed" || e === "failed" || e === "canceled" || e === "interrupted" || e === "skipped";
}
function mct(e) {
    if (!(!nb(e) || typeof e.runId != "string" || typeof e.at != "number" || e.outcome !== "active" && e.outcome !== "succeeded" && e.outcome !== "failed" && e.outcome !== "other")) return {
        runId: e.runId,
        at: e.at,
        outcome: e.outcome
    };
}
function pct(e, t) {
    if (!nb(e) || typeof e.id != "string" || typeof e.taskId != "string" || e.workspaceUri !== void 0 && typeof e.workspaceUri != "string" || e.executionMode !== void 0 && e.executionMode !== "local" || typeof e.scheduledFor != "number" || e.trigger !== "schedule" && e.trigger !== "manual" || !uct(e.status) || typeof e.claimedAt != "number") return;
    const n = {
        id: e.id,
        taskId: e.taskId,
        workspaceUri: typeof e.workspaceUri == "string" ? e.workspaceUri : t.workspaceUri,
        executionMode: e.executionMode === "local" ? e.executionMode : t.executionMode,
        scheduledFor: e.scheduledFor,
        trigger: e.trigger,
        status: e.status,
        claimedAt: e.claimedAt,
        startedAt: typeof e.startedAt == "number" ? e.startedAt : void 0,
        completedAt: typeof e.completedAt == "number" ? e.completedAt : void 0,
        agentId: typeof e.agentId == "string" ? e.agentId : void 0,
        resolvedModel: typeof e.resolvedModel == "string" ? e.resolvedModel : void 0,
        error: typeof e.error == "string" ? e.error : void 0,
        skipReason: e.skipReason === "missed" || e.skipReason === "overlap" || e.skipReason === "duplicate_wall_clock" ? e.skipReason : void 0,
        missedRunAcknowledgedAt: typeof e.missedRunAcknowledgedAt == "number" ? e.missedRunAcknowledgedAt : void 0,
        claimToken: typeof e.claimToken == "string" ? e.claimToken : void 0,
        claimOwner: typeof e.claimOwner == "string" ? e.claimOwner : void 0
    };
    return (n.status === "claimed" || n.status === "starting" || n.status === "running" || n.status === "needs_attention") && (!n.claimToken || !n.claimOwner) ? {
        ...n,
        status: "interrupted",
        completedAt: n.completedAt ?? n.claimedAt,
        error: "The persisted run state was incomplete",
        claimToken: void 0,
        claimOwner: void 0
    } : n;
}
function hct(e) {
    const t = AU(e);
    if (DU(t)) return t;
    const n = t.split(" ");
    if (n.length !== 5) return;
    const r = n.map((s)=>s.split(",").filter((i)=>i.length > 0).join(",")).join(" ");
    return r !== t && DU(r) ? r : void 0;
}
function em(e) {
    const { lastScheduledWallClockKey: t, runs: n, ...r } = e;
    return {
        ...r,
        runs: n.map(LU)
    };
}
function LU(e) {
    const { claimToken: t, claimOwner: n, missedRunAcknowledgedAt: r, ...s } = e;
    return s;
}
function T2e(e) {
    return `localAgentMailboxCursor:${e}`;
}
function sb(e) {
    const [t, n] = e.offset.split("-").map(BigInt), [r, s] = e.than.split("-").map(BigInt);
    return t !== r ? t > r : n > s;
}
function Tct(e, t) {
    return e === void 0 || t === void 0 ? e ?? t : sb({
        offset: t,
        than: e
    }) ? t : e;
}
function ib(e) {
    return JSON.stringify(Object.fromEntries(e));
}
import * as Fo from "fs";
import * as R2e from "path";
import { spawn as yct } from "child_process";
import { contentTracing as GU } from "electron";
import { createReadStream as Ect, promises as bct } from "fs";
import { createInterface as Rct } from "readline";
import { app as Wo, net as Mct, protocol as N2e, session as Bo, systemPreferences as D2e } from "electron";
import { hostname as Pct, release as Nct } from "os";
function Go(e, t) {
    const { added: n, removed: r, updated: s } = O2e(t?.rawConfiguration, e?.rawConfiguration), i = [], a = e?.getAllOverrideIdentifiers() || [], o = t?.getAllOverrideIdentifiers() || [];
    if (t) {
        const l = o.filter((d)=>!a.includes(d));
        for (const d of l)i.push([
            d,
            t.getKeysForOverrideIdentifier(d)
        ]);
    }
    if (e) {
        const l = a.filter((d)=>!o.includes(d));
        for (const d of l)i.push([
            d,
            e.getKeysForOverrideIdentifier(d)
        ]);
    }
    if (t && e) {
        for (const l of a)if (o.includes(l)) {
            const d = O2e({
                contents: e.getOverrideValue(void 0, l) || {},
                keys: e.getKeysForOverrideIdentifier(l)
            }, {
                contents: t.getOverrideValue(void 0, l) || {},
                keys: t.getKeysForOverrideIdentifier(l)
            });
            i.push([
                l,
                [
                    ...d.added,
                    ...d.removed,
                    ...d.updated
                ]
            ]);
        }
    }
    return {
        added: n,
        removed: r,
        updated: s,
        overrides: i
    };
}
function O2e(e, t) {
    const n = e ? t ? e.keys.filter((i)=>t.keys.indexOf(i) === -1) : [
        ...e.keys
    ] : [], r = t ? e ? t.keys.filter((i)=>e.keys.indexOf(i) === -1) : [
        ...t.keys
    ] : [], s = [];
    if (e && t) {
        for (const i of t.keys)if (e.keys.indexOf(i) !== -1) {
            const a = Xv(t.contents, i), o = Xv(e.contents, i);
            Bs(a, o) || s.push(i);
        }
    }
    return {
        added: n,
        removed: r,
        updated: s
    };
}
import * as Uct from "fs";
import * as Kr from "os";
function HU(e) {
    return Array.from(e.entries(), ([t, n])=>({
            name: t,
            count: n
        })).sort((t, n)=>n.count - t.count);
}
import { writeFileSync as Bct } from "fs";
import { tmpdir as Gct } from "os";
function jct(e) {
    return (e.scheme === "file" || e.scheme === "vscode-remote") && e.path.endsWith(".mdc");
}
import { session as Jct } from "electron";
function as(e) {
    if (e instanceof Error) return e.stack || e.message;
    if (typeof e == "string") return e;
    try {
        return JSON.stringify(e);
    } catch  {
        return String(e);
    }
}
function XU(e) {
    switch(e){
        case 1:
            return "Management";
        case 2:
            return "ExtensionHost";
        case 3:
            return "Tunnel";
    }
}
function QU(e) {
    return e instanceof Error && /^\[(internal|unknown)\](?:\s|$)/i.test(e.message);
}
function llt(e, t) {
    if (e !== 1) return !1;
    const n = n9e(t);
    return n !== void 0 && n.startsWith("Unauthorized client refused");
}
function mlt(e) {
    if (e && e.type === "error") {
        const t = new Error(`Connection error: ${e.reason}`);
        return t.code = "VSCODE_CONNECTION_ERROR", t.remoteConnectionErrorReason = e.reason, t;
    }
    return null;
}
function n9e(e) {
    const t = e?.remoteConnectionErrorReason;
    return typeof t == "string" ? t : void 0;
}
function plt(e, t) {
    for(; e.length < t;)e += " ";
    return e;
}
function hlt(e, t) {
    return `[remote-connection][${plt(XU(e), 13)}][${t.substr(0, 5)}\u2026]`;
}
function im(e, t, n) {
    return `${hlt(e, t)}[${n ? "reconnect" : "initial"}]`;
}
function r9e(e, t) {
    return `${im(t, e.reconnectionToken, !!e.reconnectionProtocol)}[${e.connectTo}]`;
}
function glt(e) {
    return `${Date.now() - e} ms`;
}
import * as _lt from "net";
import * as vlt from "os";
import { parse as S9e } from "url";
function Slt(e, t) {
    return e.protocol === "http:" ? t.HTTP_PROXY || t.http_proxy || null : e.protocol === "https:" && (t.HTTPS_PROXY || t.https_proxy || t.HTTP_PROXY || t.http_proxy) || null;
}
async function ylt(e, t, n = {}) {
    const r = S9e(e), s = n.proxyUrl || Slt(r, t);
    if (!s) return null;
    const i = S9e(s);
    if (!/^https?:$/.test(i.protocol || "")) return null;
    const a = {
        host: i.hostname || "",
        port: (i.port ? +i.port : 0) || (i.protocol === "https" ? 443 : 80),
        auth: i.auth,
        rejectUnauthorized: x4(n.strictSSL) ? n.strictSSL : !0
    };
    if (r.protocol === "http:") {
        const { default: o } = await import("http-proxy-agent");
        return new o.HttpProxyAgent(s, a);
    } else {
        const { default: o } = await import("https-proxy-agent");
        return new o.HttpsProxyAgent(s, a);
    }
}
import * as Elt from "tls";
import { parse as y9e } from "url";
import { createGunzip as blt } from "zlib";
async function Rlt(e, t, n, r) {
    const s = await import("kerberos"), i = s.default || s, a = new URL(e), o = t || (process.platform === "win32" ? `HTTP/${a.hostname}` : `HTTP@${a.hostname}`);
    return n.debug(`${r} Kerberos authentication lookup`, `proxyURL:${a}`, `spn:${o}`), (await i.initializeClient(o)).step("");
}
async function Clt(e) {
    return (y9e(e.url).protocol === "https:" ? await import("https") : await import("http")).request;
}
import { net as Alt } from "electron";
function Mlt(e) {
    return Alt.request;
}
import { app as M9e, dialog as P9e } from "electron";
import { unlinkSync as $lt, promises as N9e } from "fs";
h();
import * as xa from "path";
import * as Tl from "original-fs";
import * as Hlt from "os";
import { performance as qlt } from "perf_hooks";
h();
import * as Ks from "path";
import * as L9e from "fs";
import { fileURLToPath as Klt } from "url";
import { createRequire as zlt } from "node:module";
var Nht = zlt(import.meta.url), Ylt = Ks.dirname(Klt(import.meta.url)), Dht = process.platform === "win32";
if (Error.stackTraceLimit = 100, process.platform === "linux" && (Buffer.poolSize = 8 * 1024), !process.env.VSCODE_HANDLES_SIGPIPE) {
    let e = !1;
    process.on("SIGPIPE", ()=>{
        e || (e = !0, console.error(new Error("Unexpected SIGPIPE")));
    });
}
function Jlt() {
    try {
        typeof process.env.VSCODE_CWD != "string" && (process.env.VSCODE_CWD = process.cwd()), process.platform === "win32" && process.chdir(Ks.dirname(process.execPath));
    } catch (e) {
        console.error(e);
    }
}
Jlt();
function Xlt(e) {
    const t = Ks.dirname(Ylt);
    function n() {
        return process.env.VSCODE_DEV ? t : process.platform === "darwin" ? Ks.dirname(Ks.dirname(Ks.dirname(t))) : Ks.dirname(Ks.dirname(t));
    }
    function r() {
        if (process.env.VSCODE_PORTABLE) return process.env.VSCODE_PORTABLE;
        if (process.platform === "win32" || process.platform === "linux") return Ks.join(n(), "data");
        const l = e.portable || `${e.applicationName}-portable-data`;
        return Ks.join(Ks.dirname(n()), l);
    }
    const s = r(), i = !("target" in e) && L9e.existsSync(s), a = Ks.join(s, "tmp"), o = i && L9e.existsSync(a);
    return i ? process.env.VSCODE_PORTABLE = s : delete process.env.VSCODE_PORTABLE, o && (process.platform === "win32" ? (process.env.TMP = a, process.env.TEMP = a) : process.env.TMPDIR = a), {
        portableDataPath: s,
        isPortable: i
    };
}
h();
import * as Qlt from "path";
import * as ax from "fs";
import { fileURLToPath as Zlt } from "url";
import { createRequire as edt, register as tdt } from "node:module";
h();
import { createRequire as ndt } from "node:module";
var ox = ndt(import.meta.url), om = {
    BUILD_INSERT_PRODUCT_CONFIGURATION: "BUILD_INSERT_PRODUCT_CONFIGURATION"
};
om.BUILD_INSERT_PRODUCT_CONFIGURATION && (om = ox("../product.json"));
var cx = {
    "name": "Cursor",
    "version": "3.24.18",
    "distro": "d5c0e77a0214208f36b56d42e8e787de88d02ea4",
    "author": {
        "name": "Anysphere, Inc."
    },
    "packageManager": "pnpm@10.33.4",
    "pnpm": {
        "supportedArchitectures": {
            "os": [
                "current"
            ],
            "cpu": [
                "current",
                "x64",
                "arm64"
            ],
            "libc": [
                "current",
                "glibc",
                "musl"
            ]
        }
    },
    "main": "./out/main.js",
    "type": "module",
    "private": true,
    "repository": {
        "type": "git",
        "url": "https://github.com/microsoft/vscode.git"
    },
    "bugs": {
        "url": "https://github.com/microsoft/vscode/issues"
    }
};
cx.BUILD_INSERT_PACKAGE_CONFIGURATION && (cx = ox("../package.json"));
var Ar = om, rdt = cx;
if (!("commit" in om) || om.commit === void 0) try {
    const { execSync: e } = ox("child_process"), t = process.cwd(), n = e("git rev-parse HEAD", {
        cwd: t,
        encoding: "utf8",
        stdio: [
            "ignore",
            "pipe",
            "ignore"
        ]
    }).trim();
    n && (om.devCommit = n);
} catch  {}
sa();
var sdt = edt(import.meta.url), idt = Qlt.dirname(Zlt(import.meta.url));
if ((process.env.ELECTRON_RUN_AS_NODE || process.versions.electron) && tdt(`data:text/javascript;base64,${Buffer.from(`
	export async function resolve(specifier, context, nextResolve) {
		if (specifier === 'fs') {
			return {
				format: 'builtin',
				shortCircuit: true,
				url: 'node:original-fs'
			};
		}

		// Defer to the next hook in the chain, which would be the
		// Node.js default resolve if this is the last user-specified loader.
		return nextResolve(specifier, context);
	}`).toString("base64")}`, import.meta.url), globalThis._VSCODE_PRODUCT_JSON = {
    ...Ar
}, process.env.VSCODE_DEV) try {
    const e = sdt("../product.overrides.json");
    globalThis._VSCODE_PRODUCT_JSON = Object.assign(globalThis._VSCODE_PRODUCT_JSON, e);
} catch  {}
globalThis._VSCODE_PACKAGE_JSON = {
    ...rdt
}, globalThis._VSCODE_FILE_ROOT = idt;
var lx = void 0;
function adt() {
    return lx || (lx = odt()), lx;
}
async function odt() {
    At("code/willLoadNls");
    let e, t;
    if (process.env.VSCODE_NLS_CONFIG) try {
        e = JSON.parse(process.env.VSCODE_NLS_CONFIG), e?.languagePack?.messagesFile ? t = e.languagePack.messagesFile : e?.defaultMessagesFile && (t = e.defaultMessagesFile), globalThis._VSCODE_NLS_LANGUAGE = e?.resolvedLanguage;
    } catch (n) {
        console.error(`Error reading VSCODE_NLS_CONFIG from environment: ${n}`);
    }
    if (!(process.env.VSCODE_DEV || !t)) {
        try {
            globalThis._VSCODE_NLS_MESSAGES = JSON.parse((await ax.promises.readFile(t)).toString());
        } catch (n) {
            if (console.error(`Error reading NLS messages file ${t}: ${n}`), e?.languagePack?.corruptMarkerFile) try {
                await ax.promises.writeFile(e.languagePack.corruptMarkerFile, "corrupted");
            } catch (r) {
                console.error(`Error writing corrupted NLS marker file: ${r}`);
            }
            if (e?.defaultMessagesFile && e.defaultMessagesFile !== t) try {
                globalThis._VSCODE_NLS_MESSAGES = JSON.parse((await ax.promises.readFile(e.defaultMessagesFile)).toString());
            } catch (r) {
                console.error(`Error reading default NLS messages file ${e.defaultMessagesFile}: ${r}`);
            }
        }
        return At("code/didLoadNls"), e;
    }
}
async function cdt() {
    await adt();
}
var ldt = Mx(Px(), 1);
import { fileURLToPath as ddt } from "url";
import { app as mt, protocol as udt, crashReporter as mdt, Menu as pdt, contentTracing as hdt } from "electron";
h();
import { networkInterfaces as gdt } from "os";
import { createHash as fdt, randomUUID as _dt } from "crypto";
var vdt = new Set([
    "00:00:00:00:00:00",
    "ff:ff:ff:ff:ff:ff",
    "ac:de:48:00:11:22"
]);
function Tdt(e) {
    const t = e.replace(/\-/g, ":").toLowerCase();
    return !vdt.has(t);
}
function kdt() {
    const e = gdt();
    for(const t in e){
        const n = e[t];
        if (n) {
            for (const { mac: r } of n)if (Tdt(r)) return r;
        }
    }
    throw new Error("Unable to retrieve mac address (unexpected format)");
}
function Sdt(e) {
    try {
        const t = kdt();
        return fdt("sha256").update(t, "utf8").digest("hex");
    } catch (t) {
        return e(t), _dt();
    }
}
Ox(), Ob(), sa(), h(), sa();
import * as ta from "path";
import * as na from "fs";
async function U9e({ userLocale: e, osLocale: t, userDataPath: n, commit: r, nlsMetadataPath: s }) {
    if (At("code/willGenerateNls"), process.env.VSCODE_DEV || e === "pseudo" || e.startsWith("en") || !r || !n) return t_(e, t, s);
    try {
        const i = await ydt(n);
        if (!i) return t_(e, t, s);
        const a = wdt(i, e);
        if (!a) return t_(e, t, s);
        const o = i[a], l = o?.translations?.vscode;
        if (!o || typeof o.hash != "string" || !o.translations || typeof l != "string" || !await dx(l)) return t_(e, t, s);
        const d = `${o.hash}.${a}`, u = ta.join(n, "clp", d), m = ta.join(u, r), f = ta.join(m, "nls.messages.json"), v = ta.join(u, "tcf.json"), T = ta.join(u, "corrupted.info");
        await dx(T) && await na.promises.rm(u, {
            recursive: !0,
            force: !0,
            maxRetries: 3
        });
        const S = {
            userLocale: e,
            osLocale: t,
            resolvedLanguage: a,
            defaultMessagesFile: ta.join(s, "nls.messages.json"),
            languagePack: {
                translationsConfigFile: v,
                messagesFile: f,
                corruptMarkerFile: T
            },
            locale: e,
            availableLanguages: {
                "*": a
            },
            _languagePackId: d,
            _languagePackSupport: !0,
            _translationsConfigFile: v,
            _cacheRoot: u,
            _resolvedLanguagePackCoreLocation: m,
            _corruptedFile: T
        };
        if (await dx(m)) return Edt(m).catch(()=>{}), At("code/didGenerateNls"), S;
        const [, k, y, b] = await Promise.all([
            na.promises.mkdir(m, {
                recursive: !0
            }),
            JSON.parse(await na.promises.readFile(ta.join(s, "nls.keys.json"), "utf-8")),
            JSON.parse(await na.promises.readFile(ta.join(s, "nls.messages.json"), "utf-8")),
            JSON.parse(await na.promises.readFile(l, "utf-8"))
        ]), I = [];
        let G = 0;
        for (const [U, X] of k){
            const W = b.contents[U];
            for (const K of X)I.push(W?.[K] || y[G]), G++;
        }
        return await Promise.all([
            na.promises.writeFile(f, JSON.stringify(I), "utf-8"),
            na.promises.writeFile(v, JSON.stringify(o.translations), "utf-8")
        ]), At("code/didGenerateNls"), S;
    } catch (i) {
        console.error("Generating translation files failed.", i);
    }
    return t_(e, t, s);
}
async function ydt(e) {
    const t = ta.join(e, "languagepacks.json");
    try {
        return JSON.parse(await na.promises.readFile(t, "utf-8"));
    } catch  {
        return;
    }
}
function wdt(e, t) {
    try {
        for(; t;){
            if (e[t]) return t;
            const n = t.lastIndexOf("-");
            if (n > 0) t = t.substring(0, n);
            else return;
        }
    } catch (n) {
        console.error("Resolving language pack configuration failed.", n);
    }
}
function t_(e, t, n) {
    return At("code/didGenerateNls"), {
        userLocale: e,
        osLocale: t,
        resolvedLanguage: "en",
        defaultMessagesFile: ta.join(n, "nls.messages.json"),
        locale: e,
        availableLanguages: {}
    };
}
async function dx(e) {
    try {
        return await na.promises.access(e), !0;
    } catch  {
        return !1;
    }
}
function Edt(e) {
    const t = new Date;
    return na.promises.utimes(e, t, t);
}
fm(), h();
function bdt(e, t) {
    const n = new Set(e.split(",").map((r)=>r.trim()).filter((r)=>r.length > 0));
    for (const r of t)n.add(r);
    return [
        ...n
    ].join(",");
}
xb();
import { createRequire as Rdt } from "module";
h(), Rl(), Ho();
import * as Es from "@sentry/electron/main";
import x9e from "electron";
h();
var Cdt = /[/\\]\.cursor(?:-dev|-lab|-nightly)?[/\\]extensions[/\\]([a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+)-[\d.]+[/\\]/, Idt = /[/\\]\.cursor-server(?:-dev|-lab|-nightly)?[/\\]extensions[/\\]([a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+)-[\d.]+(?:-universal)?[/\\]/, Adt = /[/\\]vscode[/\\]extensions[/\\]([a-zA-Z0-9_-]+)[/\\]/, Mdt = /[/\\]\.cursor-server(?:-dev|-lab|-nightly)?[/\\]bin[/\\][a-zA-Z0-9_-]+[/\\][a-f0-9]+[/\\]extensions[/\\]([a-zA-Z0-9_-]+)[/\\]/;
function Pdt(e) {
    if (!e) return null;
    const t = e.match(Cdt);
    if (t) return t[1];
    const n = e.match(Idt);
    if (n) return n[1];
    const r = e.match(Adt);
    if (r) return `vscode.${r[1]}`;
    const s = e.match(Mdt);
    return s ? `vscode.${s[1]}` : null;
}
function Ndt(e) {
    return e.startsWith("anysphere.") || e.startsWith("vscode.");
}
function Ddt(e) {
    return !(e.exception?.values?.some((n)=>n.stacktrace?.frames?.some((r)=>{
            const s = Pdt(r.filename);
            return s && !Ndt(s);
        })) ?? !1);
}
h(), zx();
import * as ux from "@sentry/electron/main";
import mx from "electron";
function Odt() {
    let e;
    try {
        e = new qx, KLe(e);
    } catch (t) {
        ux.captureException(t);
        return;
    }
    try {
        let t;
        mx.powerMonitor.on("suspend", ()=>{
            t = Date.now();
        }), mx.powerMonitor.on("resume", ()=>{
            const n = t;
            if (t = void 0, n === void 0) return;
            const r = Date.now();
            r <= n || (e.recordRange(n, r, "powerMonitor"), Ldt({
                suspendTime: n,
                resumeTime: r
            }));
        });
    } catch (t) {
        ux.captureException(t);
    }
}
function Ldt(e) {
    try {
        for (const t of mx.BrowserWindow.getAllWindows()){
            if (t.isDestroyed()) continue;
            const n = t.webContents;
            !n || n.isDestroyed() || n.send(jx, e);
        }
    } catch (t) {
        ux.captureException(t);
    }
}
Wb();
function Udt() {
    const e = process.arch;
    return x9e.app.runningUnderARM64Translation ? `${e}-rosetta` : e;
}
function xdt() {
    try {
        XLe(), Es.init({
            ...HLe(),
            environment: x9e.app.isPackaged ? Js.localMode ? "cursor-on-prem" : globalThis._VSCODE_PRODUCT_JSON.applicationName : "development",
            integrations: [
                Es.sentryMinidumpIntegration(),
                Es.electronContextIntegration(),
                Es.normalizePathsIntegration(),
                Es.additionalContextIntegration(),
                Es.eventFiltersIntegration(),
                Es.functionToStringIntegration(),
                Es.linkedErrorsIntegration(),
                Es.dedupeIntegration(),
                Es.nodeContextIntegration({
                    cloudResource: !1
                }),
                Es.mainProcessSessionIntegration({
                    sendOnCreate: !0
                })
            ],
            beforeSend: (e)=>Ddt(e) ? e : null
        }), Es.setTag("app_flavor", Udt()), On().sentry = Es;
    } catch (e) {
        console.error("Failed to initialize tracing in main process", e);
    }
}
xdt(), Odt();
var jht = Rdt(import.meta.url), px = xa.dirname(ddt(import.meta.url));
At("code/didStartMain"), At("code/willLoadMainBundle", {
    startTime: Math.floor(qlt.timeOrigin)
}), At("code/didLoadMainBundle");
var F9e = Xlt(Ar), Hht = Sdt(console.error), Fdt = Ar.dataFolderName ?? ".cursor", Mr = qdt(), cm = Bdt(Mr);
Mr.sandbox && !Mr["disable-chromium-sandbox"] && !cm["disable-chromium-sandbox"] ? mt.enableSandbox() : mt.commandLine.hasSwitch("no-sandbox") && !mt.commandLine.hasSwitch("disable-gpu-sandbox") ? mt.commandLine.appendSwitch("disable-gpu-sandbox") : (mt.commandLine.appendSwitch("no-sandbox"), mt.commandLine.appendSwitch("disable-gpu-sandbox")), mt.commandLine.appendSwitch("force-gpu-mem-available-mb", "1024"), process.platform === "darwin" && mt.commandLine.appendSwitch("disable-skia-graphite");
var lm = Db(Mr, Ar.nameShort ?? "code-oss-dev");
if (process.platform === "win32") {
    const e = Fx(lm);
    e && gm(e);
}
mt.setPath("userData", lm);
var W9e = zdt();
pdt.setApplicationMenu(null), At("code/willStartCrashReporter"), (Mr["crash-reporter-directory"] || cm["enable-crash-reporter"] && !Mr["disable-crash-reporter"]) && jdt(), At("code/didStartCrashReporter"), F9e && F9e.isPortable && mt.setAppLogsPath(xa.join(lm, "logs")), udt.registerSchemesAsPrivileged([
    {
        scheme: "vscode-webview",
        privileges: {
            standard: !0,
            secure: !0,
            supportFetchAPI: !0,
            corsEnabled: !0,
            allowServiceWorkers: !0,
            codeCache: !0
        }
    },
    {
        scheme: "vscode-file",
        privileges: {
            secure: !0,
            standard: !0,
            supportFetchAPI: !0,
            corsEnabled: !0,
            codeCache: !0,
            allowExtensions: Gx({
                isDevBuild: !!process.env.VSCODE_DEV,
                internalBuild: Ar.internalBuild === !0,
                cliOptIn: Mr["enable-react-devtools"] === !0,
                argvOptIn: typeof cm["enable-react-devtools"] == "boolean" ? cm["enable-react-devtools"] : void 0,
                smokeTestDriver: Mr["enable-smoke-test-driver"] === !0,
                cliOptOut: Mr[Rv] === !0
            })
        }
    },
    {
        scheme: "vscode-remote-resource",
        privileges: {
            secure: !0,
            supportFetchAPI: !0,
            corsEnabled: !0
        }
    },
    {
        scheme: "vscode-managed-remote-resource",
        privileges: {
            secure: !0,
            supportFetchAPI: !0,
            corsEnabled: !0
        }
    },
    {
        scheme: "cursor-rpc-devtools",
        privileges: {
            secure: !0,
            standard: !0,
            supportFetchAPI: !0,
            corsEnabled: !0
        }
    }
]), Kdt();
var hx = void 0, gx = G9e((mt.getPreferredSystemLanguages()?.[0] ?? "en").toLowerCase()), n_ = Xdt(cm);
if (n_ && (hx = U9e({
    userLocale: n_,
    osLocale: gx,
    commit: Ar.commit,
    userDataPath: lm,
    nlsMetadataPath: px
})), process.platform === "win32" || process.platform === "linux") {
    const e = !n_ || n_ === "qps-ploc" ? "en" : n_;
    mt.commandLine.appendSwitch("lang", e);
}
mt.once("ready", function() {
    if (Mr.trace) {
        let e;
        if (Mr["trace-memory-infra"]) {
            const t = Mr["trace-category-filter"]?.split(",") || [];
            t.push("disabled-by-default-memory-infra", "disabled-by-default-memory-infra.v8.code_stats"), e = {
                included_categories: t,
                excluded_categories: [
                    "*"
                ],
                memory_dump_config: {
                    allowed_dump_modes: [
                        "light",
                        "detailed"
                    ],
                    triggers: [
                        {
                            type: "periodic_interval",
                            mode: "detailed",
                            min_time_between_dumps_ms: 1e4
                        },
                        {
                            type: "periodic_interval",
                            mode: "light",
                            min_time_between_dumps_ms: 1e3
                        }
                    ]
                }
            };
        } else e = {
            categoryFilter: Mr["trace-category-filter"] || "*",
            traceOptions: Mr["trace-options"] || "record-until-full,enable-sampling"
        };
        hdt.startRecording(e).finally(()=>B9e());
    } else B9e();
});
async function B9e() {
    At("code/mainAppReady");
    try {
        const [, e] = await Promise.all([
            Ydt(W9e),
            Jdt()
        ]);
        await Wdt(W9e, e);
    } catch (e) {
        console.error(e);
    }
}
async function Wdt(e, t) {
    process.env.VSCODE_NLS_CONFIG = JSON.stringify(t), process.env.VSCODE_CODE_CACHE_PATH = e || "", await cdt(), await Promise.resolve().then(()=>(jlt(), Vlt)), At("code/didRunMainBundle");
}
function Bdt(e) {
    const t = [
        "disable-hardware-acceleration",
        "force-color-profile",
        "disable-lcd-text",
        "proxy-bypass-list"
    ];
    process.platform === "linux" && (t.push("force-renderer-accessibility"), t.push("password-store"));
    const n = [
        "enable-proposed-api",
        "log-level",
        "use-inmemory-secretstorage"
    ], r = Gdt();
    Object.keys(r).forEach((d)=>{
        const u = r[d];
        if (t.indexOf(d) !== -1) {
            if (u === !0 || u === "true") d === "disable-hardware-acceleration" ? mt.disableHardwareAcceleration() : mt.commandLine.appendSwitch(d);
            else if (typeof u == "string" && u) if (d === "password-store") {
                let m = u;
                (u === "gnome" || u === "gnome-keyring") && (m = "gnome-libsecret"), mt.commandLine.appendSwitch(d, m);
            } else mt.commandLine.appendSwitch(d, u);
        } else if (n.indexOf(d) !== -1) switch(d){
            case "enable-proposed-api":
                Array.isArray(u) ? u.forEach((m)=>m && typeof m == "string" && process.argv.push("--enable-proposed-api", m)) : console.error("Unexpected value for `enable-proposed-api` in argv.json. Expected array of extension ids.");
                break;
            case "log-level":
                if (typeof u == "string") process.argv.push("--log", u);
                else if (Array.isArray(u)) for (const m of u)process.argv.push("--log", m);
                break;
            case "use-inmemory-secretstorage":
                u && process.argv.push("--use-inmemory-secretstorage");
                break;
        }
    });
    const i = `${[
        "DocumentPolicyIncludeJSCallStacksInCrashReports",
        "AlwaysLogLOAFURL",
        "RenderDocument:level/subframe"
    ].join(", ")}, ${mt.commandLine.getSwitchValue("enable-features")}`;
    mt.commandLine.appendSwitch("enable-features", i);
    const a = bdt(mt.commandLine.getSwitchValue("disable-features"), [
        "CalculateNativeWinOcclusion",
        ...process.platform === "win32" ? [
            "AccessibilityBlockFlowIterator"
        ] : []
    ]);
    mt.commandLine.appendSwitch("disable-features", a);
    const o = `FontMatchingCTMigration,StandardizedBrowserZoom,${mt.commandLine.getSwitchValue("disable-blink-features")}`;
    mt.commandLine.appendSwitch("disable-blink-features", o);
    const l = Hdt(e);
    return l && mt.commandLine.appendSwitch("js-flags", l), mt.commandLine.appendSwitch("xdg-portal-required-version", "4"), r;
}
function Gdt() {
    const e = $dt();
    let t;
    try {
        t = Nx(Tl.readFileSync(e).toString());
    } catch (n) {
        n && n.code === "ENOENT" ? Vdt(e) : console.warn(`Unable to read argv.json configuration file in ${e}, falling back to defaults (${n})`);
    }
    return t || (t = {}), t;
}
function Vdt(e) {
    try {
        const t = xa.dirname(e);
        Tl.existsSync(t) || Tl.mkdirSync(t);
        const n = [
            "// This configuration file allows you to pass permanent command line arguments to VS Code.",
            "// Only a subset of arguments is currently supported to reduce the likelihood of breaking",
            "// the installation.",
            "//",
            "// PLEASE DO NOT CHANGE WITHOUT UNDERSTANDING THE IMPACT",
            "//",
            "// NOTE: Changing this file requires a restart of VS Code.",
            "{",
            "	// Use software rendering instead of hardware accelerated rendering.",
            "	// This can help in cases where you see rendering issues in VS Code.",
            '	// "disable-hardware-acceleration": true',
            "}"
        ];
        Tl.writeFileSync(e, n.join(`
`));
    } catch (t) {
        console.error(`Unable to create argv.json configuration file in ${e}, falling back to defaults (${t})`);
    }
}
function $dt() {
    const e = process.env.VSCODE_PORTABLE;
    return e ? xa.join(e, "argv.json") : xa.join(Hlt.homedir(), Fdt, "argv.json");
}
function jdt() {
    let e = Mr["crash-reporter-directory"], t = "";
    if (e) {
        if (e = xa.normalize(e), xa.isAbsolute(e) || (console.error(`The path '${e}' specified for --crash-reporter-directory must be absolute.`), mt.exit(1)), !Tl.existsSync(e)) try {
            Tl.mkdirSync(e, {
                recursive: !0
            });
        } catch  {
            console.error(`The path '${e}' specified for --crash-reporter-directory does not seem to exist or cannot be created.`), mt.exit(1);
        }
        console.log(`Found --crash-reporter-directory argument. Setting crashDumps directory to be '${e}'`), mt.setPath("crashDumps", e);
    } else {
        const s = Ar.appCenter;
        if (s) {
            const i = process.platform === "win32", a = process.platform === "linux", o = process.platform === "darwin", l = cm["crash-reporter-id"];
            if (l && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(l)) {
                if (i) switch(process.arch){
                    case "x64":
                        t = s["win32-x64"];
                        break;
                    case "arm64":
                        t = s["win32-arm64"];
                        break;
                }
                else if (o) if (Ar.darwinUniversalAssetId) t = s["darwin-universal"];
                else switch(process.arch){
                    case "x64":
                        t = s.darwin;
                        break;
                    case "arm64":
                        t = s["darwin-arm64"];
                        break;
                }
                else a && (t = s["linux-x64"]);
                t = t.concat("&uid=", l, "&iid=", l, "&sid=", l);
                const u = process.argv, m = u.indexOf("--");
                m === -1 ? u.push("--crash-reporter-id", l) : u.splice(m, 0, "--crash-reporter-id", l);
            }
        }
    }
    const n = (Ar.crashReporter ? Ar.crashReporter.productName : void 0) || Ar.nameShort, r = (Ar.crashReporter ? Ar.crashReporter.companyName : void 0) || "Anysphere";
    mdt.start({
        companyName: r,
        productName: process.env.VSCODE_DEV ? `${n} Dev` : n,
        submitURL: t,
        uploadToServer: !1,
        ignoreSystemCrashHandler: !0,
        extra: {
            platform: process.platform
        },
        compress: !0
    });
}
function Hdt(e) {
    const t = [];
    return e["js-flags"] && t.push(e["js-flags"]), process.platform === "linux" && t.push("--nodecommit_pooled_pages"), t.length > 0 ? t.join(" ") : null;
}
function qdt() {
    return (0, ldt.default)(process.argv, {
        string: [
            "user-data-dir",
            "locale",
            "js-flags",
            "crash-reporter-directory"
        ],
        boolean: [
            "disable-chromium-sandbox",
            "enable-react-devtools",
            Rv
        ],
        default: {
            sandbox: !0
        },
        alias: {
            "no-sandbox": "sandbox"
        }
    });
}
function Kdt() {
    const e = [];
    globalThis.macOpenFiles = e, mt.on("open-file", function(r, s) {
        e.push(s);
    });
    const t = [], n = function(r, s) {
        r.preventDefault(), t.push(s);
    };
    mt.on("will-finish-launching", function() {
        if (process.platform === "darwin" && process.env.VSCODE_DEV) {
            const r = Ar.urlProtocol;
            r ? mt.isDefaultProtocolClient(r) || mt.setAsDefaultProtocolClient(r, process.execPath, []) || console.error(`Failed to register '${r}' protocol handler.`) : console.warn("No urlProtocol found in product configuration for development registration.");
        }
        mt.on("open-url", n);
    }), globalThis.getOpenUrls = function() {
        return mt.removeListener("open-url", n), t;
    };
}
function zdt() {
    if (process.argv.indexOf("--no-cached-data") > 0 || process.env.VSCODE_DEV) return;
    const e = Ar.commit;
    if (e) return xa.join(lm, "CachedData", e);
}
async function Ydt(e) {
    if (typeof e == "string") try {
        return await Tl.promises.mkdir(e, {
            recursive: !0
        }), e;
    } catch  {}
}
function G9e(e) {
    if (e.startsWith("zh")) {
        const t = e.split("-")[1];
        return [
            "hans",
            "cn",
            "sg",
            "my"
        ].includes(t) ? "zh-cn" : "zh-tw";
    }
    return e;
}
async function Jdt() {
    const e = hx ? await hx : void 0;
    if (e) return e;
    let t = mt.getLocale();
    return t ? (t = G9e(t.toLowerCase()), U9e({
        userLocale: t,
        osLocale: gx,
        commit: Ar.commit,
        userDataPath: lm,
        nlsMetadataPath: px
    })) : {
        userLocale: "en",
        osLocale: gx,
        resolvedLanguage: "en",
        defaultMessagesFile: xa.join(px, "nls.messages.json"),
        locale: "en",
        availableLanguages: {}
    };
}
function Xdt(e) {
    const t = Mr.locale;
    return t ? t.toLowerCase() : typeof e?.locale == "string" ? e.locale.toLowerCase() : void 0;
}
