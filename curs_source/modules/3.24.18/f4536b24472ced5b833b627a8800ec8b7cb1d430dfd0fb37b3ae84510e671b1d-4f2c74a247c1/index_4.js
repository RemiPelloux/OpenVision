import { a } from "./business-error.js";
import { dc, f6, mc } from "./index.js";
import { Ad, Cd, Gw, Hw, Id, Nd, Pd, Qw, Rd, Td, _d, pc, x6 } from "./index_3.js";
function c1(e) {
    return e.length < 2 ? e : e.reduce((t, r)=>{
        const n = t[t.length - 1];
        return !n || n.type !== 0 || r.type !== 0 ? t.push(r) : n.value += r.value, t;
    }, []);
}
function l1(e) {
    return typeof e == "function";
}
function di(e, t, r, n, o, i, s) {
    if (e.length === 1 && Td(e[0])) return [
        {
            type: 0,
            value: e[0].value
        }
    ];
    const c = [];
    for (const l of e){
        if (Td(l)) {
            c.push({
                type: 0,
                value: l.value
            });
            continue;
        }
        if (Gw(l)) {
            typeof i == "number" && c.push({
                type: 0,
                value: r.getNumberFormat(t).format(i)
            });
            continue;
        }
        const { value: m } = l;
        if (!(o && m in o)) throw new f1(m, s);
        let u = o[m];
        if (Hw(l)) {
            (!u || typeof u == "string" || typeof u == "number" || typeof u == "bigint") && (u = typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? String(u) : ""), c.push({
                type: typeof u == "string" ? 0 : 1,
                value: u
            });
            continue;
        }
        if (Id(l)) {
            const d = typeof l.style == "string" ? n.date[l.style] : pc(l.style) ? l.style.parsedOptions : void 0;
            c.push({
                type: 0,
                value: r.getDateTimeFormat(t, d).format(u)
            });
            continue;
        }
        if (Ad(l)) {
            const d = typeof l.style == "string" ? n.time[l.style] : pc(l.style) ? l.style.parsedOptions : n.time.medium;
            c.push({
                type: 0,
                value: r.getDateTimeFormat(t, d).format(u)
            });
            continue;
        }
        if (Cd(l)) {
            const d = typeof l.style == "string" ? n.number[l.style] : _d(l.style) ? l.style.parsedOptions : void 0;
            if (d && d.scale) {
                const p = d.scale || 1;
                if (typeof u == "bigint") {
                    if (!Number.isInteger(p)) throw new TypeError(`Cannot apply fractional scale ${p} to bigint value. Scale must be an integer when formatting bigint.`);
                    u = u * BigInt(p);
                } else u = u * p;
            }
            c.push({
                type: 0,
                value: r.getNumberFormat(t, d).format(u)
            });
            continue;
        }
        if (Pd(l)) {
            const { children: d, value: p } = l, h = o[p];
            if (!l1(h)) throw new p1(p, "function", s);
            let f = h(di(d, t, r, n, o, i).map((v)=>v.value));
            Array.isArray(f) || (f = [
                f
            ]), c.push(...f.map((v)=>({
                    type: typeof v == "string" ? 0 : 1,
                    value: v
                })));
        }
        if (Rd(l)) {
            const d = u, p = (Object.prototype.hasOwnProperty.call(l.options, d) ? l.options[d] : void 0) || l.options.other;
            if (!p) throw new Ld(l.value, u, Object.keys(l.options), s);
            c.push(...di(p.value, t, r, n, o));
            continue;
        }
        if (Nd(l)) {
            const d = `=${u}`;
            let p = Object.prototype.hasOwnProperty.call(l.options, d) ? l.options[d] : void 0;
            if (!p) {
                if (!Intl.PluralRules) throw new pi(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, "MISSING_INTL_API", s);
                const f = typeof u == "bigint" ? Number(u) : u, v = r.getPluralRules(t, {
                    type: l.pluralType
                }).select(f - (l.offset || 0));
                p = (Object.prototype.hasOwnProperty.call(l.options, v) ? l.options[v] : void 0) || l.options.other;
            }
            if (!p) throw new Ld(l.value, u, Object.keys(l.options), s);
            const h = typeof u == "bigint" ? Number(u) : u;
            c.push(...di(p.value, t, r, n, o, h - (l.offset || 0)));
            continue;
        }
    }
    return c1(c);
}
function m1(e, t) {
    return t ? {
        ...e,
        ...t,
        ...Object.keys(e).reduce((r, n)=>(r[n] = {
                ...e[n],
                ...t[n]
            }, r), {})
    } : e;
}
function u1(e, t) {
    return t ? Object.keys(e).reduce((r, n)=>(r[n] = m1(e[n], t[n]), r), {
        ...e
    }) : e;
}
function xc(e) {
    return {
        create () {
            return {
                get (t) {
                    return e[t];
                },
                set (t, r) {
                    e[t] = r;
                }
            };
        }
    };
}
function d1(e = {
    number: {},
    dateTime: {},
    pluralRules: {}
}) {
    return {
        getNumberFormat: mc((...t)=>new Intl.NumberFormat(...t), {
            cache: xc(e.number),
            strategy: dc.variadic
        }),
        getDateTimeFormat: mc((...t)=>new Intl.DateTimeFormat(...t), {
            cache: xc(e.dateTime),
            strategy: dc.variadic
        }),
        getPluralRules: mc((...t)=>new Intl.PluralRules(...t), {
            cache: xc(e.pluralRules),
            strategy: dc.variadic
        })
    };
}
var pi, Ld, p1, f1, h1, Fd;
export { Fd, Ld, c1, d1, di, f1, h1, l1, m1, p1, pi, u1, xc };
var __wakaru_g6_initialized = false;
export function g6() {
if (__wakaru_g6_initialized) return;
__wakaru_g6_initialized = true;
f6(), x6(), pi = class extends Error {
    static{
        a(this, "FormatError");
    }
    constructor(e, t, r){
        super(e), this.code = t, this.originalMessage = r;
    }
    toString() {
        return `[formatjs Error: ${this.code}] ${this.message}`;
    }
}, Ld = class extends pi {
    static{
        a(this, "InvalidValueError");
    }
    constructor(e, t, r, n){
        super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(r).join('", "')}"`, "INVALID_VALUE", n);
    }
}, p1 = class extends pi {
    static{
        a(this, "InvalidValueTypeError");
    }
    constructor(e, t, r){
        super(`Value for "${e}" must be of type ${t}`, "INVALID_VALUE", r);
    }
}, f1 = class extends pi {
    static{
        a(this, "MissingValueError");
    }
    constructor(e, t){
        super(`The intl string context variable "${e}" was not provided to the string "${t}"`, "MISSING_VALUE", t);
    }
}, a(c1, "mergeLiteral"), a(l1, "isFormatXMLElementFn"), a(di, "formatToParts"), a(m1, "mergeConfig"), a(u1, "mergeConfigs"), a(xc, "createFastMemoizeCache"), a(d1, "createDefaultFormatters"), h1 = class Tn {
    static{
        a(this, "IntlMessageFormat");
    }
    constructor(t, r = Tn.defaultLocale, n, o){
        if (this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {}
        }, this.format = (i)=>{
            const s = this.formatToParts(i);
            if (s.length === 1) return s[0].value;
            const c = s.reduce((l, m)=>(!l.length || m.type !== 0 || typeof l[l.length - 1] != "string" ? l.push(m.value) : l[l.length - 1] += m.value, l), []);
            return c.length <= 1 ? c[0] || "" : c;
        }, this.formatToParts = (i)=>di(this.ast, this.locales, this.formatters, this.formats, i, void 0, this.message), this.resolvedOptions = ()=>({
                locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0]
            }), this.getAst = ()=>this.ast, this.locales = r, this.resolvedLocale = Tn.resolveLocale(r), typeof t == "string") {
            if (this.message = t, !Tn.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            const { ...i } = o || {};
            this.ast = Tn.__parse(t, {
                ...i,
                locale: this.resolvedLocale
            });
        } else this.ast = t;
        if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
        this.formats = u1(Tn.formats, n), this.formatters = o && o.formatters || d1(this.formatterCache);
    }
    static{
        this.memoizedDefaultLocale = null;
    }
    static get defaultLocale() {
        return Tn.memoizedDefaultLocale || (Tn.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), Tn.memoizedDefaultLocale;
    }
    static{
        this.resolveLocale = (t)=>{
            if (typeof Intl.Locale > "u") return;
            const r = Intl.NumberFormat.supportedLocalesOf(t);
            return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
        };
    }
    static{
        this.__parse = Qw;
    }
    static{
        this.formats = {
            number: {
                integer: {
                    maximumFractionDigits: 0
                },
                currency: {
                    style: "currency"
                },
                percent: {
                    style: "percent"
                }
            },
            date: {
                short: {
                    month: "numeric",
                    day: "numeric",
                    year: "2-digit"
                },
                medium: {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                },
                long: {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                },
                full: {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            },
            time: {
                short: {
                    hour: "numeric",
                    minute: "numeric"
                },
                medium: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                },
                long: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                },
                full: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                }
            }
        };
    }
}, Fd = h1;

}
