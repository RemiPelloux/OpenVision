"use strict";
require.d(exports, {
    _O: ()=>d,
    h: ()=>p,
    o1: ()=>h
});
var n = require("./module-33002.js");
function s(e) {
    return "object" == typeof e && null !== e && "getPath" in e && "function" == typeof e.getPath;
}
function o(e) {
    return "object" == typeof e && null !== e && ("message" in e || "stack" in e || "name" in e || "cause" in e);
}
function i(e, t, r, n, s, l) {
    const u = function(e, t, r, n) {
        if (!t.inlineSerializer) return e;
        try {
            const s = t.inlineSerializer(e, {
                path: r,
                depth: n
            });
            return void 0 === s ? e : s;
        } catch  {
            return e;
        }
    }(e, t, l, n);
    if (function(e) {
        return "object" == typeof e && null !== e && "summary" === e.kind && "string" == typeof e.summary;
    }(u)) return r.dim(`<${u.summary}>`);
    if (null === (e = u)) return r.gray("null");
    if (void 0 === e) return r.gray("undefined");
    if ("string" == typeof e) {
        const n = function(e, t) {
            return e.length <= t ? e : `${e.slice(0, t)}...`;
        }(e, t.maxStringLength);
        return r.green(JSON.stringify(n));
    }
    if ("number" == typeof e) return r.yellow(String(e));
    if ("boolean" == typeof e) return r.magenta(String(e));
    if ("bigint" == typeof e) return r.yellow(`${e}n`);
    if ("symbol" == typeof e) return r.cyan(e.toString());
    if ("function" == typeof e) {
        const t = e.name ? ` ${e.name}` : "";
        return r.dim(`[Function${t}]`);
    }
    if (e instanceof Date) {
        const t = Number.isNaN(e.getTime()) ? "Invalid Date" : e.toISOString();
        return r.green(t);
    }
    if (e instanceof RegExp) return r.cyan(e.toString());
    if (o(e)) return a(e, t, r, n, s, l);
    if (Array.isArray(e)) return c(e, t, r, n, s, l);
    if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) return r.dim(`ArrayBuffer(${e.byteLength})`);
    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && ArrayBuffer.isView(e)) {
        const t = e, n = t.constructor?.name ?? "TypedArray";
        return r.dim(`${n}(${t.byteLength})`);
    }
    return e instanceof Map ? function(e, t, r, n, s, o) {
        if (n >= t.maxDepth) return r.dim(`Map(${e.size})`);
        if (s.has(e)) return r.dim("[Circular]");
        s.add(e);
        const a = Array.from(e.entries()), c = Math.min(a.length, t.maxEntries), l = a.slice(0, c).map(([e, a])=>{
            const c = i(e, t, r, n + 1, s, o.concat("<key>")), l = i(a, t, r, n + 1, s, o.concat(String(e)));
            return `${c} ${r.dim("=>")} ${l}`;
        });
        a.length > c && l.push(r.dim(`... ${a.length - c} more`));
        const u = r.dim(", "), d = `${r.dim("Map{")}${l.join(u)}${r.dim("}")}`;
        return s.delete(e), d;
    }(e, t, r, n, s, l) : e instanceof Set ? c(Array.from(e.values()), t, r, n, s, l) : function(e, t, r, n, s, o) {
        if (n >= t.maxDepth) {
            const t = e?.constructor?.name ?? "Object";
            return r.dim(`[${t}]`);
        }
        if (s.has(e)) return r.dim("[Circular]");
        s.add(e);
        const a = Object.entries(e);
        if (0 === a.length) {
            const t = r.dim("{}");
            return s.delete(e), t;
        }
        const c = Math.min(a.length, t.maxEntries), l = a.slice(0, c).map(([e, a])=>{
            const c = i(a, t, r, n + 1, s, o.concat(e));
            return `${r.cyan(e)}: ${c}`;
        });
        a.length > c && l.push(r.dim(`... ${a.length - c} more`));
        const u = r.dim(", "), d = `${r.dim("{")}${l.join(u)}${r.dim("}")}`;
        return s.delete(e), d;
    }(e, t, r, n, s, l);
}
function a(e, t, r, n, s, o) {
    const a = e;
    if (s.has(a)) return r.dim("[Circular]");
    s.add(a);
    const c = "string" == typeof e.name ? e.name : "Error", l = "string" == typeof e.message ? e.message : "", u = l ? `${c}: ${l}` : c;
    let d = r.red(u);
    if ("cause" in e && void 0 !== e.cause) {
        const a = i(e.cause, t, r, n + 1, s, o.concat("cause"));
        d = `${d} ${r.dim("cause=")}${a}`;
    }
    return s.delete(a), d;
}
function c(e, t, r, n, s, o) {
    if (n >= t.maxDepth) return r.dim(`[Array(${e.length})]`);
    if (s.has(e)) return r.dim("[Circular]");
    if (s.add(e), 0 === e.length) {
        const t = r.dim("[]");
        return s.delete(e), t;
    }
    const a = Math.min(e.length, t.maxArrayLength), c = e.slice(0, a).map((e, a)=>i(e, t, r, n + 1, s, o.concat(a)));
    e.length > a && c.push(r.dim(`... ${e.length - a} more`));
    const l = r.dim(", "), u = `${r.dim("[")}${c.join(l)}${r.dim("]")}`;
    return s.delete(e), u;
}
let l = function(e = {}) {
    const t = function(e) {
        return {
            indent: " ".repeat(e.indent ?? 2),
            maxDepth: e.maxDepth ?? 6,
            maxEntries: e.maxEntries ?? 50,
            maxArrayLength: e.maxArrayLength ?? 40,
            maxStringLength: e.maxStringLength ?? 200,
            includeTimestamp: e.includeTimestamp ?? !0,
            includeContextPath: e.includeContextPath ?? !0,
            inlineSerializer: e.inlineSerializer
        };
    }(e), r = function(e) {
        const t = (t)=>(r)=>e ? `[${t.join(";")}m${r}[0m` : r, r = t([
            2
        ]), n = t([
            90
        ]), s = t([
            31
        ]), o = t([
            32
        ]), i = t([
            33
        ]), a = t([
            34
        ]), c = t([
            35
        ]), l = t([
            36
        ]), u = t([
            1
        ]), d = t([
            1,
            31
        ]);
        return {
            dim: r,
            gray: n,
            red: s,
            green: o,
            yellow: i,
            blue: a,
            magenta: c,
            cyan: l,
            bold: u,
            level: (e, t)=>{
                switch(e){
                    case "debug":
                        return c(t);
                    case "info":
                        return a(t);
                    case "warn":
                        return i(t);
                    case "error":
                        return d(t);
                    default:
                        return e;
                }
            }
        };
    }(function(e) {
        if ("boolean" == typeof e) return e;
        if ("undefined" == typeof process) return !1;
        const t = process.env ?? {};
        if ("NO_COLOR" in t) return !1;
        if ("dumb" === t.TERM) return !1;
        const r = t.FORCE_COLOR;
        return "1" === r || "true" === r || "0" !== r && Boolean(process.stdout?.isTTY);
    }(e.useColors)), n = e.console ?? console;
    return {
        log: (e, c)=>{
            const l = [];
            t.includeTimestamp && l.push(r.dim(c.timestamp.toISOString().slice(11, 23)));
            const u = c.level.toUpperCase().padEnd(5);
            l.push(r.level(c.level, u));
            const d = "error" === c.level ? r.bold(c.message) : c.message;
            if (l.push(d), t.includeContextPath && s(c.context)) {
                const e = c.context.getPath();
                e.length > 0 && l.push(r.dim(`ctx=${e.join("/")}`));
            }
            const p = new WeakSet;
            if (!s(c.context) && c.context && Object.keys(c.context).length > 0) {
                const e = i(c.context, t, r, 0, p, [
                    "context"
                ]);
                l.push(`${r.dim("context=")}${e}`);
            }
            if (c.metadata && Object.keys(c.metadata).length > 0) {
                const e = i(c.metadata, t, r, 0, p, [
                    "metadata"
                ]);
                l.push(`${r.dim("meta=")}${e}`);
            }
            const m = [
                l.join(" ")
            ];
            if (void 0 !== c.error) {
                const e = o(c.error) ? a(c.error, t, r, 0, p, [
                    "error"
                ]) : i(c.error, t, r, 0, p, [
                    "error"
                ]);
                if (m[0] = `${m[0]} ${r.dim("error=")}${e}`, o(c.error) && "string" == typeof c.error.stack) {
                    const e = c.error.stack.split("\n").slice(1);
                    for (const n of e){
                        const e = n.trim();
                        e && m.push(`${t.indent}${r.dim(e)}`);
                    }
                }
            }
            const h = m.join("\n");
            switch(c.level){
                case "debug":
                case "info":
                    n.log(h);
                    break;
                case "warn":
                    n.warn(h);
                    break;
                case "error":
                    n.error(h);
                    break;
                default:
                    {
                        const e = c.level;
                        throw new Error(`Unhandled log level: ${e}`);
                    }
            }
        }
    };
}();
const u = {
    log: (e, t)=>l.log(e, t)
};
const d = (0, n.cF)(Symbol("loggerBackend"), u);
function p(e) {
    function t(t, r) {
        const n = new Date, s = function(e) {
            return e.get(d);
        }(t);
        s.log(t, {
            ...r,
            timestamp: n,
            logger: e
        });
    }
    return {
        debug: (e, r, n)=>{
            t(e, {
                level: "debug",
                message: r,
                context: e,
                metadata: n
            });
        },
        info: (e, r, n)=>{
            t(e, {
                level: "info",
                message: r,
                context: e,
                metadata: n
            });
        },
        warn: (e, r, n)=>{
            t(e, {
                level: "warn",
                message: r,
                context: e,
                metadata: n
            });
        },
        error: (e, r, n, s)=>{
            t(e, {
                level: "error",
                message: r,
                context: e,
                error: n,
                metadata: s
            });
        }
    };
}
function m(e, t) {
    return {
        log: (r, n)=>{
            e.log(r, {
                ...n,
                metadata: {
                    ...t,
                    ...n.metadata
                }
            });
        }
    };
}
function h(e, t) {
    return e.with(d, m(e.get(d), {
        ...t
    }));
}
