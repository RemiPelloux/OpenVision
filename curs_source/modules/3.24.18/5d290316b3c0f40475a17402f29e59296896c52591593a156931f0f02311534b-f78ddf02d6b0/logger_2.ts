import { Tt } from "./index_3.ts";
import { h } from "./tslib.es6.js";
function Gr(e, t) {
    return {
        symbol: e,
        defaultValue: t
    };
}
function Lb(e) {
    if (typeof e == "boolean") return e;
    if (typeof process > "u") return !1;
    const t = process.env ?? {};
    if ("NO_COLOR" in t || t.TERM === "dumb") return !1;
    const r = t.FORCE_COLOR;
    return r === "1" || r === "true" ? !0 : r === "0" ? !1 : !!process.stdout?.isTTY;
}
function xb(e) {
    const t = "\x1B[0m", r = (p)=>(g)=>e ? `\x1B[${p.join(";")}m${g}${t}` : g, n = r([
        2
    ]), s = r([
        90
    ]), i = r([
        31
    ]), o = r([
        32
    ]), a = r([
        33
    ]), c = r([
        34
    ]), l = r([
        35
    ]), u = r([
        36
    ]), d = r([
        1
    ]), f = r([
        1,
        31
    ]);
    return {
        dim: n,
        gray: s,
        red: i,
        green: o,
        yellow: a,
        blue: c,
        magenta: l,
        cyan: u,
        bold: d,
        level: (p, g)=>{
            switch(p){
                case "debug":
                    return l(g);
                case "info":
                    return c(g);
                case "warn":
                    return a(g);
                case "error":
                    return f(g);
                default:
                    return p;
            }
        }
    };
}
function Mb(e) {
    return {
        indent: " ".repeat(e.indent ?? Dp),
        maxDepth: e.maxDepth ?? Np,
        maxEntries: e.maxEntries ?? Up,
        maxArrayLength: e.maxArrayLength ?? $p,
        maxStringLength: e.maxStringLength ?? Fp,
        includeTimestamp: e.includeTimestamp ?? !0,
        includeContextPath: e.includeContextPath ?? !0,
        inlineSerializer: e.inlineSerializer
    };
}
function Db(e) {
    return e.toISOString().slice(11, 23);
}
function Lp(e) {
    return typeof e == "object" && e !== null && "getPath" in e && typeof e.getPath == "function";
}
function gc(e) {
    return typeof e != "object" || e === null ? !1 : "message" in e || "stack" in e || "name" in e || "cause" in e;
}
function Nb(e) {
    return typeof e == "object" && e !== null && e.kind === "summary" && typeof e.summary == "string";
}
function Ub(e, t) {
    return e.length <= t ? e : `${e.slice(0, t)}...`;
}
function $b(e, t, r, n) {
    if (!t.inlineSerializer) return e;
    try {
        const s = t.inlineSerializer(e, {
            path: r,
            depth: n
        });
        return s === void 0 ? e : s;
    } catch  {
        return e;
    }
}
function qt(e, t, r, n, s, i) {
    const o = $b(e, t, i, n);
    if (Nb(o)) return r.dim(`<${o.summary}>`);
    if (e = o, e === null) return r.gray("null");
    if (e === void 0) return r.gray("undefined");
    if (typeof e == "string") {
        const a = Ub(e, t.maxStringLength);
        return r.green(JSON.stringify(a));
    }
    if (typeof e == "number") return r.yellow(String(e));
    if (typeof e == "boolean") return r.magenta(String(e));
    if (typeof e == "bigint") return r.yellow(`${e}n`);
    if (typeof e == "symbol") return r.cyan(e.toString());
    if (typeof e == "function") {
        const a = e.name ? ` ${e.name}` : "";
        return r.dim(`[Function${a}]`);
    }
    if (e instanceof Date) {
        const a = Number.isNaN(e.getTime()) ? "Invalid Date" : e.toISOString();
        return r.green(a);
    }
    if (e instanceof RegExp) return r.cyan(e.toString());
    if (gc(e)) return xp(e, t, r, n, s, i);
    if (Array.isArray(e)) return Mp(e, t, r, n, s, i);
    if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return r.dim(`ArrayBuffer(${e.byteLength})`);
    if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && ArrayBuffer.isView(e)) {
        const a = e, c = a.constructor?.name ?? "TypedArray";
        return r.dim(`${c}(${a.byteLength})`);
    }
    return e instanceof Map ? Fb(e, t, r, n, s, i) : e instanceof Set ? Mp(Array.from(e.values()), t, r, n, s, i) : Hb(e, t, r, n, s, i);
}
function xp(e, t, r, n, s, i) {
    const o = e;
    if (s.has(o)) return r.dim("[Circular]");
    s.add(o);
    const a = typeof e.name == "string" ? e.name : "Error", c = typeof e.message == "string" ? e.message : "", l = c ? `${a}: ${c}` : a;
    let u = r.red(l);
    if ("cause" in e && e.cause !== void 0) {
        const d = qt(e.cause, t, r, n + 1, s, i.concat("cause"));
        u = `${u} ${r.dim("cause=")}${d}`;
    }
    return s.delete(o), u;
}
function Mp(e, t, r, n, s, i) {
    if (n >= t.maxDepth) return r.dim(`[Array(${e.length})]`);
    if (s.has(e)) return r.dim("[Circular]");
    if (s.add(e), e.length === 0) {
        const u = r.dim("[]");
        return s.delete(e), u;
    }
    const o = Math.min(e.length, t.maxArrayLength), a = e.slice(0, o).map((u, d)=>qt(u, t, r, n + 1, s, i.concat(d)));
    e.length > o && a.push(r.dim(`... ${e.length - o} more`));
    const c = r.dim(", "), l = `${r.dim("[")}${a.join(c)}${r.dim("]")}`;
    return s.delete(e), l;
}
function Fb(e, t, r, n, s, i) {
    if (n >= t.maxDepth) return r.dim(`Map(${e.size})`);
    if (s.has(e)) return r.dim("[Circular]");
    s.add(e);
    const o = Array.from(e.entries()), a = Math.min(o.length, t.maxEntries), c = o.slice(0, a).map(([d, f])=>{
        const p = qt(d, t, r, n + 1, s, i.concat("<key>")), g = qt(f, t, r, n + 1, s, i.concat(String(d)));
        return `${p} ${r.dim("=>")} ${g}`;
    });
    o.length > a && c.push(r.dim(`... ${o.length - a} more`));
    const l = r.dim(", "), u = `${r.dim("Map{")}${c.join(l)}${r.dim("}")}`;
    return s.delete(e), u;
}
function Hb(e, t, r, n, s, i) {
    if (n >= t.maxDepth) {
        const d = e?.constructor?.name ?? "Object";
        return r.dim(`[${d}]`);
    }
    if (s.has(e)) return r.dim("[Circular]");
    s.add(e);
    const o = Object.entries(e);
    if (o.length === 0) {
        const d = r.dim("{}");
        return s.delete(e), d;
    }
    const a = Math.min(o.length, t.maxEntries), c = o.slice(0, a).map(([d, f])=>{
        const p = qt(f, t, r, n + 1, s, i.concat(d));
        return `${r.cyan(d)}: ${p}`;
    });
    o.length > a && c.push(r.dim(`... ${o.length - a} more`));
    const l = r.dim(", "), u = `${r.dim("{")}${c.join(l)}${r.dim("}")}`;
    return s.delete(e), u;
}
function Bb(e = {}) {
    const t = Mb(e), r = xb(Lb(e.useColors)), n = e.console ?? console;
    return {
        log: (s, i)=>{
            const o = [];
            t.includeTimestamp && o.push(r.dim(Db(i.timestamp)));
            const a = i.level.toUpperCase().padEnd(5);
            o.push(r.level(i.level, a));
            const c = i.level === "error" ? r.bold(i.message) : i.message;
            if (o.push(c), t.includeContextPath && Lp(i.context)) {
                const f = i.context.getPath();
                f.length > 0 && o.push(r.dim(`ctx=${f.join("/")}`));
            }
            const l = new WeakSet;
            if (!Lp(i.context) && i.context && Object.keys(i.context).length > 0) {
                const f = qt(i.context, t, r, 0, l, [
                    "context"
                ]);
                o.push(`${r.dim("context=")}${f}`);
            }
            if (i.metadata && Object.keys(i.metadata).length > 0) {
                const f = qt(i.metadata, t, r, 0, l, [
                    "metadata"
                ]);
                o.push(`${r.dim("meta=")}${f}`);
            }
            const u = [
                o.join(" ")
            ];
            if (i.error !== void 0) {
                const f = gc(i.error) ? xp(i.error, t, r, 0, l, [
                    "error"
                ]) : qt(i.error, t, r, 0, l, [
                    "error"
                ]);
                if (u[0] = `${u[0]} ${r.dim("error=")}${f}`, gc(i.error) && typeof i.error.stack == "string") {
                    const p = i.error.stack.split(`
`).slice(1);
                    for (const g of p){
                        const _ = g.trim();
                        _ && u.push(`${t.indent}${r.dim(_)}`);
                    }
                }
            }
            const d = u.join(`
`);
            switch(i.level){
                case "debug":
                case "info":
                    n.log(d);
                    break;
                case "warn":
                    n.warn(d);
                    break;
                case "error":
                    n.error(d);
                    break;
                default:
                    {
                        const f = i.level;
                        throw new Error(`Unhandled log level: ${f}`);
                    }
            }
        }
    };
}
var Dp, Np, Up, $p, Fp, Hp, Bp, zp;
export { $b, $p, Bb, Bp, Db, Dp, Fb, Fp, Gr, Hb, Hp, Lb, Lp, Mb, Mp, Nb, Np, Ub, Up, gc, qt, xb, xp, zp };
var __wakaru_Gb_initialized = false;
export function Gb() {
if (__wakaru_Gb_initialized) return;
__wakaru_Gb_initialized = true;
"use strict";
h(), Tt(), Dp = 2, Np = 6, Up = 50, $p = 40, Fp = 200, Hp = Bb(), Bp = {
    log: (e, t)=>Hp.log(e, t)
}, zp = Gr(Symbol("loggerBackend"), Bp);

}
