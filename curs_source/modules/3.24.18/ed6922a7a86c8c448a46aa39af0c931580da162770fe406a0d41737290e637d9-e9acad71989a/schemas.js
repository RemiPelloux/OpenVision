import { fMi } from "./checks.js";
import { AXe, m6t } from "./core_2.js";
import { i6l } from "./doc.js";
import { ADe, Hpf, Kpf, Ypf, hMi, kEs, q9l, vMi, z9l } from "./f0s.js";
import { IEs, d1n, gMi } from "./parse_3.js";
import { g6t, n6l } from "./regexes.js";
import { x } from "./tslib.es6.js";
import { cv } from "./util.js";
import { r6l, s6l } from "./versions.js";
var h1n, o6l, a6l, c6l;
export { a6l, c6l, h1n, o6l };
var __wakaru__Mi_initialized = false;
export function _Mi() {
if (__wakaru__Mi_initialized) return;
__wakaru__Mi_initialized = true;
x(), fMi(), AXe(), i6l(), d1n(), g6t(), cv(), cv(), s6l(), h1n = ADe("$ZodType", (e, t)=>{
    var n;
    e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = r6l;
    const i = [
        ...e._zod.def.checks ?? []
    ];
    e._zod.traits.has("$ZodCheck") && i.unshift(e);
    for (const r of i)for (const s of r._zod.onattach)s(e);
    if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(()=>{
        e._zod.run = e._zod.parse;
    });
    else {
        const r = (o, a, c)=>{
            let l = hMi(o), u;
            for (const h of a){
                if (h._zod.def.when) {
                    if (!h._zod.def.when(o)) continue;
                } else if (l) continue;
                const p = o.issues.length, g = h._zod.check(o);
                if (g instanceof Promise && c?.async === !1) throw new m6t;
                if (u || g instanceof Promise) u = (u ?? Promise.resolve()).then(async ()=>{
                    await g, o.issues.length !== p && (l || (l = hMi(o, p)));
                });
                else {
                    if (o.issues.length === p) continue;
                    l || (l = hMi(o, p));
                }
            }
            return u ? u.then(()=>o) : o;
        }, s = (o, a, c)=>{
            if (hMi(o)) return o.aborted = !0, o;
            const l = r(a, i, c);
            if (l instanceof Promise) {
                if (c.async === !1) throw new m6t;
                return l.then((u)=>e._zod.parse(u, c));
            }
            return e._zod.parse(l, c);
        };
        e._zod.run = (o, a)=>{
            if (a.skipChecks) return e._zod.parse(o, a);
            if (a.direction === "backward") {
                const l = e._zod.parse({
                    value: o.value,
                    issues: []
                }, {
                    ...a,
                    skipChecks: !0
                });
                return l instanceof Promise ? l.then((u)=>s(u, o, a)) : s(l, o, a);
            }
            const c = e._zod.parse(o, a);
            if (c instanceof Promise) {
                if (a.async === !1) throw new m6t;
                return c.then((l)=>r(l, i, a));
            }
            return r(c, i, a);
        };
    }
    kEs(e, "~standard", ()=>({
            validate: (r)=>{
                try {
                    const s = gMi(e, r);
                    return s.success ? {
                        value: s.data
                    } : {
                        issues: s.error?.issues
                    };
                } catch  {
                    return IEs(e, r).then((o)=>o.success ? {
                            value: o.data
                        } : {
                            issues: o.error?.issues
                        });
                }
            },
            vendor: "zod",
            version: 1
        }));
}), o6l = ADe("$ZodString", (e, t)=>{
    h1n.init(e, t), e._zod.pattern = [
        ...e?._zod.bag?.patterns ?? []
    ].pop() ?? n6l(e._zod.bag), e._zod.parse = (n, i)=>{
        if (t.coerce) try {
            n.value = String(n.value);
        } catch  {}
        return typeof n.value == "string" || n.issues.push({
            expected: "string",
            code: "invalid_type",
            input: n.value,
            inst: e
        }), n;
    };
}), a6l = ADe("$ZodObject", (e, t)=>{
    if (h1n.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
        const a = t.shape;
        Object.defineProperty(t, "shape", {
            get: ()=>{
                const c = {
                    ...a
                };
                return Object.defineProperty(t, "shape", {
                    value: c
                }), c;
            }
        });
    }
    const i = q9l(()=>Kpf(t));
    kEs(e._zod, "propValues", ()=>{
        const a = t.shape, c = {};
        for(const l in a){
            const u = a[l]._zod;
            if (u.values) {
                c[l] ?? (c[l] = new Set);
                for (const h of u.values)c[l].add(h);
            }
        }
        return c;
    });
    const r = Hpf, s = t.catchall;
    let o;
    e._zod.parse = (a, c)=>{
        o ?? (o = i.value);
        const l = a.value;
        if (!r(l)) return a.issues.push({
            expected: "object",
            code: "invalid_type",
            input: l,
            inst: e
        }), a;
        a.value = {};
        const u = [], h = o.shape;
        for (const p of o.keys){
            const g = h[p], f = g._zod.optout === "optional", v = g._zod.run({
                value: l[p],
                issues: []
            }, c);
            v instanceof Promise ? u.push(v.then((b)=>vMi(b, a, p, l, f))) : vMi(v, a, p, l, f);
        }
        return s ? Ypf(u, l, a, c, i.value, e) : u.length ? Promise.all(u).then(()=>a) : a;
    };
}), c6l = ADe("$ZodLiteral", (e, t)=>{
    if (h1n.init(e, t), t.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
    const n = new Set(t.values);
    e._zod.values = n, e._zod.pattern = new RegExp(`^(${t.values.map((i)=>typeof i == "string" ? z9l(i) : i ? z9l(i.toString()) : String(i)).join("|")})$`), e._zod.parse = (i, r)=>{
        const s = i.value;
        return n.has(s) || i.issues.push({
            code: "invalid_value",
            values: t.values,
            input: s,
            inst: e
        }), i;
    };
});

}
