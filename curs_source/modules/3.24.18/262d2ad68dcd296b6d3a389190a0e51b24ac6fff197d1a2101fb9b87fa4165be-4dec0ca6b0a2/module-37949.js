"use strict";
require.d(exports, {
    _O: ()=>d,
    h: ()=>p,
    o1: ()=>m
});
var n = require("./module-33002.js");
function o(e) {
    return "object" == typeof e && null !== e && "getPath" in e && "function" == typeof e.getPath;
}
function s(e) {
    return "object" == typeof e && null !== e && ("message" in e || "stack" in e || "name" in e || "cause" in e);
}
function i(e, t, r, n, o, c) {
    const u = function(e, t, r, n) {
        if (!t.inlineSerializer) return e;
        try {
            const o = t.inlineSerializer(e, {
                path: r,
                depth: n
            });
            return void 0 === o ? e : o;
        } catch  {
            return e;
        }
    }(e, t, c, n);
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
    if (s(e)) return a(e, t, r, n, o, c);
    if (Array.isArray(e)) return l(e, t, r, n, o, c);
    if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) return r.dim(`ArrayBuffer(${e.byteLength})`);
    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && ArrayBuffer.isView(e)) {
        const t = e, n = t.constructor?.name ?? "TypedArray";
        return r.dim(`${n}(${t.byteLength})`);
    }
    return e instanceof Map ? function(e, t, r, n, o, s) {
        if (n >= t.maxDepth) return r.dim(`Map(${e.size})`);
        if (o.has(e)) return r.dim("[Circular]");
        o.add(e);
        const a = Array.from(e.entries()), l = Math.min(a.length, t.maxEntries), c = a.slice(0, l).map(([e, a])=>{
            const l = i(e, t, r, n + 1, o, s.concat("<key>")), c = i(a, t, r, n + 1, o, s.concat(String(e)));
            return `${l} ${r.dim("=>")} ${c}`;
        });
        a.length > l && c.push(r.dim(`... ${a.length - l} more`));
        const u = r.dim(", "), d = `${r.dim("Map{")}${c.join(u)}${r.dim("}")}`;
        return o.delete(e), d;
    }(e, t, r, n, o, c) : e instanceof Set ? l(Array.from(e.values()), t, r, n, o, c) : function(e, t, r, n, o, s) {
        if (n >= t.maxDepth) {
            const t = e?.constructor?.name ?? "Object";
            return r.dim(`[${t}]`);
        }
        if (o.has(e)) return r.dim("[Circular]");
        o.add(e);
        const a = Object.entries(e);
        if (0 === a.length) {
            const t = r.dim("{}");
            return o.delete(e), t;
        }
        const l = Math.min(a.length, t.maxEntries), c = a.slice(0, l).map(([e, a])=>{
            const l = i(a, t, r, n + 1, o, s.concat(e));
            return `${r.cyan(e)}: ${l}`;
        });
        a.length > l && c.push(r.dim(`... ${a.length - l} more`));
        const u = r.dim(", "), d = `${r.dim("{")}${c.join(u)}${r.dim("}")}`;
        return o.delete(e), d;
    }(e, t, r, n, o, c);
}
function a(e, t, r, n, o, s) {
    const a = e;
    if (o.has(a)) return r.dim("[Circular]");
    o.add(a);
    const l = "string" == typeof e.name ? e.name : "Error", c = "string" == typeof e.message ? e.message : "", u = c ? `${l}: ${c}` : l;
    let d = r.red(u);
    if ("cause" in e && void 0 !== e.cause) {
        const a = i(e.cause, t, r, n + 1, o, s.concat("cause"));
        d = `${d} ${r.dim("cause=")}${a}`;
    }
    return o.delete(a), d;
}
function l(e, t, r, n, o, s) {
    if (n >= t.maxDepth) return r.dim(`[Array(${e.length})]`);
    if (o.has(e)) return r.dim("[Circular]");
    if (o.add(e), 0 === e.length) {
        const t = r.dim("[]");
        return o.delete(e), t;
    }
    const a = Math.min(e.length, t.maxArrayLength), l = e.slice(0, a).map((e, a)=>i(e, t, r, n + 1, o, s.concat(a)));
    e.length > a && l.push(r.dim(`... ${e.length - a} more`));
    const c = r.dim(", "), u = `${r.dim("[")}${l.join(c)}${r.dim("]")}`;
    return o.delete(e), u;
}
let c = function(e = {}) {
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
        ]), o = t([
            31
        ]), s = t([
            32
        ]), i = t([
            33
        ]), a = t([
            34
        ]), l = t([
            35
        ]), c = t([
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
            red: o,
            green: s,
            yellow: i,
            blue: a,
            magenta: l,
            cyan: c,
            bold: u,
            level: (e, t)=>{
                switch(e){
                    case "debug":
                        return l(t);
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
        log: (e, l)=>{
            const c = [];
            t.includeTimestamp && c.push(r.dim(l.timestamp.toISOString().slice(11, 23)));
            const u = l.level.toUpperCase().padEnd(5);
            c.push(r.level(l.level, u));
            const d = "error" === l.level ? r.bold(l.message) : l.message;
            if (c.push(d), t.includeContextPath && o(l.context)) {
                const e = l.context.getPath();
                e.length > 0 && c.push(r.dim(`ctx=${e.join("/")}`));
            }
            const p = new WeakSet;
            if (!o(l.context) && l.context && Object.keys(l.context).length > 0) {
                const e = i(l.context, t, r, 0, p, [
                    "context"
                ]);
                c.push(`${r.dim("context=")}${e}`);
            }
            if (l.metadata && Object.keys(l.metadata).length > 0) {
                const e = i(l.metadata, t, r, 0, p, [
                    "metadata"
                ]);
                c.push(`${r.dim("meta=")}${e}`);
            }
            const h = [
                c.join(" ")
            ];
            if (void 0 !== l.error) {
                const e = s(l.error) ? a(l.error, t, r, 0, p, [
                    "error"
                ]) : i(l.error, t, r, 0, p, [
                    "error"
                ]);
                if (h[0] = `${h[0]} ${r.dim("error=")}${e}`, s(l.error) && "string" == typeof l.error.stack) {
                    const e = l.error.stack.split("\n").slice(1);
                    for (const n of e){
                        const e = n.trim();
                        e && h.push(`${t.indent}${r.dim(e)}`);
                    }
                }
            }
            const m = h.join("\n");
            switch(l.level){
                case "debug":
                case "info":
                    n.log(m);
                    break;
                case "warn":
                    n.warn(m);
                    break;
                case "error":
                    n.error(m);
                    break;
                default:
                    {
                        const e = l.level;
                        throw new Error(`Unhandled log level: ${e}`);
                    }
            }
        }
    };
}();
const u = {
    log: (e, t)=>c.log(e, t)
};
const d = (0, n.cF)(Symbol("loggerBackend"), u);
function p(e) {
    function t(t, r) {
        const n = new Date, o = function(e) {
            return e.get(d);
        }(t);
        o.log(t, {
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
        error: (e, r, n, o)=>{
            t(e, {
                level: "error",
                message: r,
                context: e,
                error: n,
                metadata: o
            });
        }
    };
}
function h(e, t) {
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
function m(e, t) {
    return e.with(d, h(e.get(d), {
        ...t
    }));
}
