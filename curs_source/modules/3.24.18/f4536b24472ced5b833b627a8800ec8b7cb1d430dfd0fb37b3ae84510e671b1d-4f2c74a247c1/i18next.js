import { a } from "./business-error.js";
function rw() {
    const e = [], t = Object.create(null);
    let r;
    return t.get = (n, o)=>(r?.revoke?.(), o === nd ? e : (e.push(o), r = Proxy.revocable(n, t), r.proxy)), Proxy.revocable(Object.create(null), t).proxy;
}
function On(e, t) {
    const { [nd]: r } = e(rw()), n = t?.keySeparator ?? ".", o = t?.nsSeparator ?? ":", i = t?.enableSelector === "strict";
    if (r.length > 1 && o) {
        const s = t?.ns, c = i ? Array.isArray(s) ? s : s ? [
            s
        ] : null : Array.isArray(s) ? s : null;
        if (c && (i ? c : c.length > 1 ? c.slice(1) : []).includes(r[0])) return `${r[0]}${o}${r.slice(1).join(n)}`;
    }
    return r.join(n);
}
var be, Qo, ac, nw, ow, qu, Qu, Jo, Ju, aw, ci, iw, ed, Hr, sw, cw, lw, mw, uw, dw, ic, ea, pw, fw, Ir, li, td, rd, nd, sc, od, ad, id, sd, hw, cd, ld, md, xw, ud, gw, vw, bw, yw, cc, dd, mi, ww, Sw, Wt, pd, e6, t6, r6, n6, o6, a6, i6, s6, c6, l6, m6, u6, d6;
export { Hr, Ir, Jo, Ju, On, Qo, Qu, Sw, Wt, a6, ac, ad, aw, be, bw, c6, cc, cd, ci, cw, d6, dd, dw, e6, ea, ed, fw, gw, hw, i6, ic, id, iw, l6, ld, li, lw, m6, md, mi, mw, n6, nd, nw, o6, od, ow, pd, pw, qu, r6, rd, rw, s6, sc, sd, sw, t6, td, u6, ud, uw, vw, ww, xw, yw };
var __wakaru_fd_initialized = false;
export function fd() {
if (__wakaru_fd_initialized) return;
__wakaru_fd_initialized = true;
be = a((e)=>typeof e == "string", "isString"), Qo = a(()=>{
    let e, t;
    const r = new Promise((n, o)=>{
        e = n, t = o;
    });
    return r.resolve = e, r.reject = t, r;
}, "defer"), ac = a((e)=>e == null ? "" : String(e), "makeString"), nw = a((e, t, r)=>{
    e.forEach((n)=>{
        t[n] && (r[n] = t[n]);
    });
}, "copy"), ow = /###/g, qu = a((e)=>e && e.includes("###") ? e.replace(ow, ".") : e, "cleanKey"), Qu = a((e)=>!e || be(e), "canNotTraverseDeeper"), Jo = a((e, t, r)=>{
    const n = be(t) ? t.split(".") : t;
    let o = 0;
    for(; o < n.length - 1;){
        if (Qu(e)) return {};
        const i = qu(n[o]);
        !e[i] && r && (e[i] = new r), Object.prototype.hasOwnProperty.call(e, i) ? e = e[i] : e = {}, ++o;
    }
    return Qu(e) ? {} : {
        obj: e,
        k: qu(n[o])
    };
}, "getLastOfPath"), Ju = a((e, t, r)=>{
    const { obj: n, k: o } = Jo(e, t, Object);
    if (n !== void 0 || t.length === 1) {
        n[o] = r;
        return;
    }
    let i = t[t.length - 1], s = t.slice(0, t.length - 1), c = Jo(e, s, Object);
    for(; c.obj === void 0 && s.length;)i = `${s[s.length - 1]}.${i}`, s = s.slice(0, s.length - 1), c = Jo(e, s, Object), c?.obj && typeof c.obj[`${c.k}.${i}`] < "u" && (c.obj = void 0);
    c.obj[`${c.k}.${i}`] = r;
}, "setPath"), aw = a((e, t, r, n)=>{
    const { obj: o, k: i } = Jo(e, t, Object);
    o[i] = o[i] || [], o[i].push(r);
}, "pushPath"), ci = a((e, t)=>{
    const { obj: r, k: n } = Jo(e, t);
    if (r && Object.prototype.hasOwnProperty.call(r, n)) return r[n];
}, "getPath"), iw = a((e, t, r)=>{
    const n = ci(e, r);
    return n !== void 0 ? n : ci(t, r);
}, "getPathWithDefaults"), ed = a((e, t, r)=>{
    for(const n in t)n !== "__proto__" && n !== "constructor" && (Object.prototype.hasOwnProperty.call(e, n) ? be(e[n]) || e[n] instanceof String || be(t[n]) || t[n] instanceof String ? r && (e[n] = t[n]) : ed(e[n], t[n], r) : e[n] = t[n]);
    return e;
}, "deepExtend"), Hr = a((e)=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), "regexEscape"), sw = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
}, cw = a((e)=>be(e) ? e.replace(/[&<>"'\/]/g, (t)=>sw[t]) : e, "escape"), lw = class {
    static{
        a(this, "RegExpCache");
    }
    constructor(e){
        this.capacity = e, this.regExpMap = new Map, this.regExpQueue = [];
    }
    getRegExp(e) {
        const t = this.regExpMap.get(e);
        if (t !== void 0) return t;
        const r = new RegExp(e);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, r), this.regExpQueue.push(e), r;
    }
}, mw = [
    " ",
    ",",
    "?",
    "!",
    ";"
], uw = new lw(20), dw = a((e, t, r)=>{
    t = t || "", r = r || "";
    const n = mw.filter((s)=>!t.includes(s) && !r.includes(s));
    if (n.length === 0) return !0;
    const o = uw.getRegExp(`(${n.map((s)=>s === "?" ? "\\?" : s).join("|")})`);
    let i = !o.test(e);
    if (!i) {
        const s = e.indexOf(r);
        s > 0 && !o.test(e.substring(0, s)) && (i = !0);
    }
    return i;
}, "looksLikeObjectPath"), ic = a((e, t, r = ".")=>{
    if (!e) return;
    if (e[t]) return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
    const n = t.split(r);
    let o = e;
    for(let i = 0; i < n.length;){
        if (!o || typeof o != "object") return;
        let s, c = "";
        for(let l = i; l < n.length; ++l)if (l !== i && (c += r), c += n[l], s = o[c], s !== void 0) {
            if ([
                "string",
                "number",
                "boolean"
            ].includes(typeof s) && l < n.length - 1) continue;
            i += l - i + 1;
            break;
        }
        o = s;
    }
    return o;
}, "deepFind"), ea = a((e)=>e?.replace(/_/g, "-"), "getCleanedCode"), pw = {
    type: "logger",
    log (e) {
        this.output("log", e);
    },
    warn (e) {
        this.output("warn", e);
    },
    error (e) {
        this.output("error", e);
    },
    output (e, t) {
        console?.[e]?.apply?.(console, t);
    }
}, fw = class Ib {
    static{
        a(this, "Logger");
    }
    constructor(t, r = {}){
        this.init(t, r);
    }
    init(t, r = {}) {
        this.prefix = r.prefix || "i18next:", this.logger = t || pw, this.options = r, this.debug = r.debug;
    }
    log(...t) {
        return this.forward(t, "log", "", !0);
    }
    warn(...t) {
        return this.forward(t, "warn", "", !0);
    }
    error(...t) {
        return this.forward(t, "error", "");
    }
    deprecate(...t) {
        return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
    }
    forward(t, r, n, o) {
        return o && !this.debug ? null : (t = t.map((i)=>be(i) ? i.replace(/[\r\n\x00-\x1F\x7F]/g, " ") : i), be(t[0]) && (t[0] = `${n}${this.prefix} ${t[0]}`), this.logger[r](t));
    }
    create(t) {
        return new Ib(this.logger, {
            prefix: `${this.prefix}:${t}:`,
            ...this.options
        });
    }
    clone(t) {
        return t = t || this.options, t.prefix = t.prefix || this.prefix, new Ib(this.logger, t);
    }
}, Ir = new fw, li = class {
    static{
        a(this, "EventEmitter");
    }
    constructor(){
        this.observers = {};
    }
    on(e, t) {
        return e.split(" ").forEach((r)=>{
            this.observers[r] || (this.observers[r] = new Map);
            const n = this.observers[r].get(t) || 0;
            this.observers[r].set(t, n + 1);
        }), this;
    }
    off(e, t) {
        if (this.observers[e]) {
            if (!t) {
                delete this.observers[e];
                return;
            }
            this.observers[e].delete(t);
        }
    }
    once(e, t) {
        const r = a((...n)=>{
            t(...n), this.off(e, r);
        }, "wrapper");
        return this.on(e, r), this;
    }
    emit(e, ...t) {
        this.observers[e] && Array.from(this.observers[e].entries()).forEach(([n, o])=>{
            for(let i = 0; i < o; i++)n(...t);
        }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([n, o])=>{
            for(let i = 0; i < o; i++)n(e, ...t);
        });
    }
}, td = class extends li {
    static{
        a(this, "ResourceStore");
    }
    constructor(e, t = {
        ns: [
            "translation"
        ],
        defaultNS: "translation"
    }){
        super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
    }
    addNamespaces(e) {
        this.options.ns.includes(e) || this.options.ns.push(e);
    }
    removeNamespaces(e) {
        const t = this.options.ns.indexOf(e);
        t > -1 && this.options.ns.splice(t, 1);
    }
    getResource(e, t, r, n = {}) {
        const o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, i = n.ignoreJSONStructure !== void 0 ? n.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let s;
        e.includes(".") ? s = e.split(".") : (s = [
            e,
            t
        ], r && (Array.isArray(r) ? s.push(...r) : be(r) && o ? s.push(...r.split(o)) : s.push(r)));
        const c = ci(this.data, s);
        return !c && !t && !r && e.includes(".") && (e = s[0], t = s[1], r = s.slice(2).join(".")), c || !i || !be(r) ? c : ic(this.data?.[e]?.[t], r, o);
    }
    addResource(e, t, r, n, o = {
        silent: !1
    }) {
        const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
        let s = [
            e,
            t
        ];
        r && (s = s.concat(i ? r.split(i) : r)), e.includes(".") && (s = e.split("."), n = t, t = s[1]), this.addNamespaces(t), Ju(this.data, s, n), o.silent || this.emit("added", e, t, r, n);
    }
    addResources(e, t, r, n = {
        silent: !1
    }) {
        for(const o in r)(be(r[o]) || Array.isArray(r[o])) && this.addResource(e, t, o, r[o], {
            silent: !0
        });
        n.silent || this.emit("added", e, t, r);
    }
    addResourceBundle(e, t, r, n, o, i = {
        silent: !1,
        skipCopy: !1
    }) {
        let s = [
            e,
            t
        ];
        e.includes(".") && (s = e.split("."), n = r, r = t, t = s[1]), this.addNamespaces(t);
        let c = ci(this.data, s) || {};
        i.skipCopy || (r = JSON.parse(JSON.stringify(r))), n ? ed(c, r, o) : c = {
            ...c,
            ...r
        }, Ju(this.data, s, c), i.silent || this.emit("added", e, t, r);
    }
    removeResourceBundle(e, t) {
        this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
    }
    hasResourceBundle(e, t) {
        return this.getResource(e, t) !== void 0;
    }
    getResourceBundle(e, t) {
        return t || (t = this.options.defaultNS), this.getResource(e, t);
    }
    getDataByLanguage(e) {
        return this.data[e];
    }
    hasLanguageSomeTranslations(e) {
        const t = this.getDataByLanguage(e);
        return !!(t && Object.keys(t) || []).find((n)=>t[n] && Object.keys(t[n]).length > 0);
    }
    toJSON() {
        return this.data;
    }
}, rd = {
    processors: {},
    addPostProcessor (e) {
        this.processors[e.name] = e;
    },
    handle (e, t, r, n, o) {
        return e.forEach((i)=>{
            t = this.processors[i]?.process(t, r, n, o) ?? t;
        }), t;
    }
}, nd = Symbol("i18next/PATH_KEY"), a(rw, "createProxy"), a(On, "keysFromSelector"), sc = a((e)=>!be(e) && typeof e != "boolean" && typeof e != "number", "shouldHandleAsObject"), od = class tD extends li {
    static{
        a(this, "Translator");
    }
    constructor(t, r = {}){
        super(), nw([
            "resourceStore",
            "languageUtils",
            "pluralResolver",
            "interpolator",
            "backendConnector",
            "i18nFormat",
            "utils"
        ], t, this), this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Ir.create("translator"), this.checkedLoadedFor = {};
    }
    changeLanguage(t) {
        t && (this.language = t);
    }
    exists(t, r = {
        interpolation: {}
    }) {
        const n = {
            ...r
        };
        if (t == null) return !1;
        const o = this.resolve(t, n);
        if (o?.res === void 0) return !1;
        const i = sc(o.res);
        return !(n.returnObjects === !1 && i);
    }
    extractFromKey(t, r) {
        let n = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
        n === void 0 && (n = ":");
        const o = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
        let i = r.ns || this.options.defaultNS || [];
        const s = n && t.includes(n), c = !this.options.userDefinedKeySeparator && !r.keySeparator && !this.options.userDefinedNsSeparator && !r.nsSeparator && !dw(t, n, o);
        if (s && !c) {
            const l = t.match(this.interpolator.nestingRegexp);
            if (l && l.length > 0) return {
                key: t,
                namespaces: be(i) ? [
                    i
                ] : i
            };
            const m = t.split(n);
            (n !== o || n === o && this.options.ns.includes(m[0])) && (i = m.shift()), t = m.join(o);
        }
        return {
            key: t,
            namespaces: be(i) ? [
                i
            ] : i
        };
    }
    translate(t, r, n) {
        let o = typeof r == "object" ? {
            ...r
        } : r;
        if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)), typeof o == "object" && (o = {
            ...o
        }), o || (o = {}), t == null) return "";
        typeof t == "function" && (t = On(t, {
            ...this.options,
            ...o
        })), Array.isArray(t) || (t = [
            String(t)
        ]), t = t.map((M)=>typeof M == "function" ? On(M, {
                ...this.options,
                ...o
            }) : String(M));
        const i = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails, s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, { key: c, namespaces: l } = this.extractFromKey(t[t.length - 1], o), m = l[l.length - 1];
        let u = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
        u === void 0 && (u = ":");
        const d = o.lng || this.language, p = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (d?.toLowerCase() === "cimode") return p ? i ? {
            res: `${m}${u}${c}`,
            usedKey: c,
            exactUsedKey: c,
            usedLng: d,
            usedNS: m,
            usedParams: this.getUsedParamsDetails(o)
        } : `${m}${u}${c}` : i ? {
            res: c,
            usedKey: c,
            exactUsedKey: c,
            usedLng: d,
            usedNS: m,
            usedParams: this.getUsedParamsDetails(o)
        } : c;
        const h = this.resolve(t, o);
        let f = h?.res;
        const v = h?.usedKey || c, x = h?.exactUsedKey || c, g = [
            "[object Number]",
            "[object Function]",
            "[object RegExp]"
        ], y = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays, w = !this.i18nFormat || this.i18nFormat.handleAsObject, b = o.count !== void 0 && !be(o.count), T = tD.hasDefaultValue(o), R = b ? this.pluralResolver.getSuffix(d, o.count, o) : "", E = o.ordinal && b ? this.pluralResolver.getSuffix(d, o.count, {
            ordinal: !1
        }) : "", S = b && !o.ordinal && o.count === 0, A = S && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${R}`] || o[`defaultValue${E}`] || o.defaultValue;
        let C = f;
        w && !f && T && (C = A);
        const P = sc(C), O = Object.prototype.toString.apply(C);
        if (w && C && P && !g.includes(O) && !(be(y) && Array.isArray(C))) {
            if (!o.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const M = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, C, {
                    ...o,
                    ns: l
                }) : `key '${c} (${this.language})' returned an object instead of string.`;
                return i ? (h.res = M, h.usedParams = this.getUsedParamsDetails(o), h) : M;
            }
            if (s) {
                const M = Array.isArray(C), F = M ? [] : {}, K = M ? x : v;
                for(const re in C)if (Object.prototype.hasOwnProperty.call(C, re)) {
                    const te = `${K}${s}${re}`;
                    T && !f ? F[re] = this.translate(te, {
                        ...o,
                        defaultValue: sc(A) ? A[re] : void 0,
                        joinArrays: !1,
                        ns: l
                    }) : F[re] = this.translate(te, {
                        ...o,
                        joinArrays: !1,
                        ns: l
                    }), F[re] === te && (F[re] = C[re]);
                }
                f = F;
            }
        } else if (w && be(y) && Array.isArray(f)) f = f.join(y), f && (f = this.extendTranslation(f, t, o, n));
        else {
            let M = !1, F = !1;
            !this.isValidLookup(f) && T && (M = !0, f = A), this.isValidLookup(f) || (F = !0, f = c);
            const re = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && F ? void 0 : f, te = T && A !== f && this.options.updateMissing;
            if (F || M || te) {
                if (this.logger.log(te ? "updateKey" : "missingKey", d, m, b && !te ? `${c}${this.pluralResolver.getSuffix(d, o.count, o)}` : c, te ? A : f), s) {
                    const W = this.resolve(c, {
                        ...o,
                        keySeparator: !1
                    });
                    W && W.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
                }
                let J = [];
                const $ = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && $ && $[0]) for(let W = 0; W < $.length; W++)J.push($[W]);
                else this.options.saveMissingTo === "all" ? J = this.languageUtils.toResolveHierarchy(o.lng || this.language) : J.push(o.lng || this.language);
                const ee = a((W, ne, xe)=>{
                    const j = T && xe !== f ? xe : re;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(W, m, ne, j, te, o) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(W, m, ne, j, te, o), this.emit("missingKey", W, m, ne, f);
                }, "send");
                this.options.saveMissing && (this.options.saveMissingPlurals && b ? J.forEach((W)=>{
                    const ne = this.pluralResolver.getSuffixes(W, o);
                    S && o[`defaultValue${this.options.pluralSeparator}zero`] && !ne.includes(`${this.options.pluralSeparator}zero`) && ne.push(`${this.options.pluralSeparator}zero`), ne.forEach((xe)=>{
                        ee([
                            W
                        ], c + xe, o[`defaultValue${xe}`] || A);
                    });
                }) : ee(J, c, A));
            }
            f = this.extendTranslation(f, t, o, h, n), F && f === c && this.options.appendNamespaceToMissingKey && (f = `${m}${u}${c}`), (F || M) && this.options.parseMissingKeyHandler && (f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${m}${u}${c}` : c, M ? f : void 0, o));
        }
        return i ? (h.res = f, h.usedParams = this.getUsedParamsDetails(o), h) : f;
    }
    extendTranslation(t, r, n, o, i) {
        if (this.i18nFormat?.parse) t = this.i18nFormat.parse(t, {
            ...this.options.interpolation.defaultVariables,
            ...n
        }, n.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
            resolved: o
        });
        else if (!n.skipInterpolation) {
            n.interpolation && this.interpolator.init({
                ...n,
                interpolation: {
                    ...this.options.interpolation,
                    ...n.interpolation
                }
            });
            const l = be(t) && (n?.interpolation?.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let m;
            if (l) {
                const d = t.match(this.interpolator.nestingRegexp);
                m = d && d.length;
            }
            let u = n.replace && !be(n.replace) ? n.replace : n;
            if (this.options.interpolation.defaultVariables && (u = {
                ...this.options.interpolation.defaultVariables,
                ...u
            }), t = this.interpolator.interpolate(t, u, n.lng || this.language || o.usedLng, n), l) {
                const d = t.match(this.interpolator.nestingRegexp), p = d && d.length;
                m < p && (n.nest = !1);
            }
            !n.lng && o && o.res && (n.lng = this.language || o.usedLng), n.nest !== !1 && (t = this.interpolator.nest(t, (...d)=>i?.[0] === d[0] && !n.context ? (this.logger.warn(`It seems you are nesting recursively key: ${d[0]} in key: ${r[0]}`), null) : this.translate(...d, r), n)), n.interpolation && this.interpolator.reset();
        }
        const s = n.postProcess || this.options.postProcess, c = be(s) ? [
            s
        ] : s;
        return t != null && c?.length && n.applyPostProcessor !== !1 && (t = rd.handle(c, t, r, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...o,
                usedParams: this.getUsedParamsDetails(n)
            },
            ...n
        } : n, this)), t;
    }
    resolve(t, r = {}) {
        let n, o, i, s, c;
        return be(t) && (t = [
            t
        ]), Array.isArray(t) && (t = t.map((l)=>typeof l == "function" ? On(l, {
                ...this.options,
                ...r
            }) : l)), t.forEach((l)=>{
            if (this.isValidLookup(n)) return;
            const m = this.extractFromKey(l, r), u = m.key;
            o = u;
            let d = m.namespaces;
            this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
            const p = r.count !== void 0 && !be(r.count), h = p && !r.ordinal && r.count === 0, f = r.context !== void 0 && (be(r.context) || typeof r.context == "number") && r.context !== "", v = r.lngs ? r.lngs : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
            d.forEach((x)=>{
                this.isValidLookup(n) || (c = x, !this.checkedLoadedFor[`${v[0]}-${x}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(c) && (this.checkedLoadedFor[`${v[0]}-${x}`] = !0, this.logger.warn(`key "${o}" for languages "${v.join(", ")}" won't get resolved as namespace "${c}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), v.forEach((g)=>{
                    if (this.isValidLookup(n)) return;
                    s = g;
                    const y = [
                        u
                    ];
                    if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(y, u, g, x, r);
                    else {
                        let b;
                        p && (b = this.pluralResolver.getSuffix(g, r.count, r));
                        const T = `${this.options.pluralSeparator}zero`, R = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (p && (r.ordinal && b.startsWith(R) && y.push(u + b.replace(R, this.options.pluralSeparator)), y.push(u + b), h && y.push(u + T)), f) {
                            const E = `${u}${this.options.contextSeparator || "_"}${r.context}`;
                            y.push(E), p && (r.ordinal && b.startsWith(R) && y.push(E + b.replace(R, this.options.pluralSeparator)), y.push(E + b), h && y.push(E + T));
                        }
                    }
                    let w;
                    for(; w = y.pop();)this.isValidLookup(n) || (i = w, n = this.getResource(g, x, w, r));
                }));
            });
        }), {
            res: n,
            usedKey: o,
            exactUsedKey: i,
            usedLng: s,
            usedNS: c
        };
    }
    isValidLookup(t) {
        return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
    }
    getResource(t, r, n, o = {}) {
        return this.i18nFormat?.getResource ? this.i18nFormat.getResource(t, r, n, o) : this.resourceStore.getResource(t, r, n, o);
    }
    getUsedParamsDetails(t = {}) {
        const r = [
            "defaultValue",
            "ordinal",
            "context",
            "replace",
            "lng",
            "lngs",
            "fallbackLng",
            "ns",
            "keySeparator",
            "nsSeparator",
            "returnObjects",
            "returnDetails",
            "joinArrays",
            "postProcess",
            "interpolation"
        ], n = t.replace && !be(t.replace);
        let o = n ? t.replace : t;
        if (n && typeof t.count < "u" && (o = {
            ...o,
            count: t.count
        }), this.options.interpolation.defaultVariables && (o = {
            ...this.options.interpolation.defaultVariables,
            ...o
        }), !n) {
            o = {
                ...o
            };
            for (const i of r)delete o[i];
        }
        return o;
    }
    static hasDefaultValue(t) {
        const r = "defaultValue";
        for(const n in t)if (Object.prototype.hasOwnProperty.call(t, n) && n.startsWith(r) && t[n] !== void 0) return !0;
        return !1;
    }
}, ad = class {
    static{
        a(this, "LanguageUtil");
    }
    constructor(e){
        this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Ir.create("languageUtils"), this.resolveHierarchyCache = {};
    }
    clearCache() {
        this.resolveHierarchyCache = {};
    }
    getScriptPartFromCode(e) {
        if (e = ea(e), !e || !e.includes("-")) return null;
        const t = e.split("-");
        return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
    }
    getLanguagePartFromCode(e) {
        if (e = ea(e), !e || !e.includes("-")) return e;
        const t = e.split("-");
        return this.formatLanguageCode(t[0]);
    }
    formatLanguageCode(e) {
        if (be(e) && e.includes("-")) {
            let t;
            try {
                t = Intl.getCanonicalLocales(e)[0];
            } catch  {}
            return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
    }
    isSupportedCode(e) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.includes(e);
    }
    getBestMatchFromCodes(e) {
        if (!e) return null;
        let t;
        return e.forEach((r)=>{
            if (t) return;
            const n = this.formatLanguageCode(r);
            (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n);
        }), !t && this.options.supportedLngs && e.forEach((r)=>{
            if (t) return;
            const n = this.getScriptPartFromCode(r);
            if (this.isSupportedCode(n)) return t = n;
            const o = this.getLanguagePartFromCode(r);
            if (this.isSupportedCode(o)) return t = o;
            t = this.options.supportedLngs.find((i)=>i === o ? !0 : !i.includes("-") && !o.includes("-") ? !1 : !!(i.includes("-") && !o.includes("-") && i.slice(0, i.indexOf("-")) === o || i.startsWith(o) && o.length > 1));
        }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
    }
    getFallbackCodes(e, t) {
        if (!e) return [];
        if (typeof e == "function" && (e = e(t)), be(e) && (e = [
            e
        ]), Array.isArray(e)) return e;
        if (!t) return e.default || [];
        let r = e[t];
        return r || (r = e[this.getScriptPartFromCode(t)]), r || (r = e[this.formatLanguageCode(t)]), r || (r = e[this.getLanguagePartFromCode(t)]), r || (r = e.default), r || [];
    }
    toResolveHierarchy(e, t) {
        const r = this.options.fallbackLng, n = Array.isArray(r) ? r.join("|") : r;
        n !== this._cachedFallbackLng && (this.resolveHierarchyCache = {}, this._cachedFallbackLng = n);
        const o = t === void 0 || t === !1 || be(t), i = t === void 0 && typeof this.options.fallbackLng == "function", s = be(e) && o && !i;
        let c = null;
        if (s) {
            let d;
            t === void 0 ? d = "undefined" : t === !1 ? d = "boolean:false" : d = `string:${t}`, c = `${e.length}:${e}|${d}`;
        }
        if (c !== null) {
            const d = this.resolveHierarchyCache[c];
            if (d !== void 0) return d.slice();
        }
        const l = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), m = [], u = a((d)=>{
            d && (this.isSupportedCode(d) ? m.push(d) : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`));
        }, "addCode");
        return be(e) && (e.includes("-") || e.includes("_")) ? (this.options.load !== "languageOnly" && u(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && u(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && u(this.getLanguagePartFromCode(e))) : be(e) && u(this.formatLanguageCode(e)), l.forEach((d)=>{
            m.includes(d) || u(this.formatLanguageCode(d));
        }), c !== null ? (this.resolveHierarchyCache[c] = m, m.slice()) : m;
    }
}, id = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
}, sd = {
    select: a((e)=>e === 1 ? "one" : "other", "select"),
    resolvedOptions: a(()=>({
            pluralCategories: [
                "one",
                "other"
            ]
        }), "resolvedOptions")
}, hw = class {
    static{
        a(this, "PluralResolver");
    }
    constructor(e, t = {}){
        this.languageUtils = e, this.options = t, this.logger = Ir.create("pluralResolver"), this.pluralRulesCache = {};
    }
    clearCache() {
        this.pluralRulesCache = {};
    }
    getRule(e, t = {}) {
        const r = ea(e === "dev" ? "en" : e), n = t.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
            cleanedCode: r,
            type: n
        });
        if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
        let i;
        try {
            i = new Intl.PluralRules(r, {
                type: n
            });
        } catch  {
            if (typeof Intl > "u") return this.logger.error("No Intl support, please use an Intl polyfill!"), sd;
            if (!e.match(/-|_/)) return sd;
            const c = this.languageUtils.getLanguagePartFromCode(e);
            i = this.getRule(c, t);
        }
        return this.pluralRulesCache[o] = i, i;
    }
    needsPlural(e, t = {}) {
        let r = this.getRule(e, t);
        return r || (r = this.getRule("dev", t)), r?.resolvedOptions().pluralCategories.length > 1;
    }
    getPluralFormsOfKey(e, t, r = {}) {
        return this.getSuffixes(e, r).map((n)=>`${t}${n}`);
    }
    getSuffixes(e, t = {}) {
        let r = this.getRule(e, t);
        return r || (r = this.getRule("dev", t)), r ? r.resolvedOptions().pluralCategories.sort((n, o)=>id[n] - id[o]).map((n)=>`${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${n}`) : [];
    }
    getSuffix(e, t, r = {}) {
        const n = this.getRule(e, r);
        return n ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${n.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, r));
    }
}, cd = a((e, t, r, n = ".", o = !0)=>{
    let i = iw(e, t, r);
    return !i && o && be(r) && (i = ic(e, r, n), i === void 0 && (i = ic(t, r, n))), i;
}, "deepFindWithDefaults"), ld = a((e)=>e.replace(/\$/g, "$$$$"), "regexSafe"), md = class {
    static{
        a(this, "Interpolator");
    }
    constructor(e = {}){
        this.logger = Ir.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((t)=>t), this.init(e);
    }
    init(e = {}) {
        e.interpolation || (e.interpolation = {
            escapeValue: !0
        });
        const { escape: t, escapeValue: r, useRawValueToEscape: n, prefix: o, prefixEscaped: i, suffix: s, suffixEscaped: c, formatSeparator: l, unescapeSuffix: m, unescapePrefix: u, nestingPrefix: d, nestingPrefixEscaped: p, nestingSuffix: h, nestingSuffixEscaped: f, nestingOptionsSeparator: v, maxReplaces: x, alwaysFormat: g } = e.interpolation;
        this.escape = t !== void 0 ? t : cw, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = n !== void 0 ? n : !1, this.prefix = o ? Hr(o) : i || "{{", this.suffix = s ? Hr(s) : c || "}}", this.formatSeparator = l || ",", this.unescapePrefix = m ? "" : u ? Hr(u) : "-", this.unescapeSuffix = this.unescapePrefix ? "" : m ? Hr(m) : "", this.nestingPrefix = d ? Hr(d) : p || Hr("$t("), this.nestingSuffix = h ? Hr(h) : f || Hr(")"), this.nestingOptionsSeparator = v || ",", this.maxReplaces = x || 1e3, this.alwaysFormat = g !== void 0 ? g : !1, this.resetRegExp();
    }
    reset() {
        this.options && this.init(this.options);
    }
    resetRegExp() {
        const e = a((t, r)=>t?.source === r ? (t.lastIndex = 0, t) : new RegExp(r, "g"), "getOrResetRegExp");
        this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
    }
    interpolate(e, t, r, n) {
        let o, i, s;
        const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, l = a((p)=>{
            if (!p.includes(this.formatSeparator)) {
                const x = cd(t, c, p, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(x, void 0, r, {
                    ...n,
                    ...t,
                    interpolationkey: p
                }) : x;
            }
            const h = p.split(this.formatSeparator), f = h.shift().trim(), v = h.join(this.formatSeparator).trim();
            return this.format(cd(t, c, f, this.options.keySeparator, this.options.ignoreJSONStructure), v, r, {
                ...n,
                ...t,
                interpolationkey: f
            });
        }, "handleFormat");
        this.resetRegExp(), !this.escapeValue && typeof e == "string" && /\$t\([^)]*\{[^}]*\{\{/.test(e) && this.logger.warn("nesting options string contains interpolated variables with escapeValue: false \u2014 if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");
        const m = n?.missingInterpolationHandler || this.options.missingInterpolationHandler, u = n?.interpolation?.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [
            {
                regex: this.regexpUnescape,
                safeValue: a((p)=>p, "safeValue")
            },
            {
                regex: this.regexp,
                safeValue: a((p)=>this.escapeValue ? this.escape(p) : p, "safeValue")
            }
        ].forEach((p)=>{
            for(s = 0; o = p.regex.exec(e);){
                const h = o[1].trim();
                if (i = l(h), i === void 0) if (typeof m == "function") {
                    const v = m(e, o, n);
                    i = be(v) ? v : "";
                } else if (n && Object.prototype.hasOwnProperty.call(n, h)) i = "";
                else if (u) {
                    i = o[0];
                    continue;
                } else this.logger.warn(`missed to pass in variable ${h} for interpolating ${e}`), i = "";
                else !be(i) && !this.useRawValueToEscape && (i = ac(i));
                const f = p.safeValue(i);
                if (e = e.replace(o[0], ld(f)), u ? (p.regex.lastIndex += f.length, p.regex.lastIndex -= o[0].length) : p.regex.lastIndex = 0, s++, s >= this.maxReplaces) break;
            }
        }), e;
    }
    nest(e, t, r = {}) {
        let n, o, i;
        const s = a((c, l)=>{
            const m = this.nestingOptionsSeparator;
            if (!c.includes(m)) return c;
            const u = c.split(new RegExp(`${Hr(m)}[ ]*{`));
            let d = `{${u[1]}`;
            c = u[0], d = this.interpolate(d, i);
            const p = d.match(/'/g), h = d.match(/"/g);
            ((p?.length ?? 0) % 2 === 0 && !h || (h?.length ?? 0) % 2 !== 0) && (d = d.replace(/'/g, '"'));
            try {
                i = JSON.parse(d), l && (i = {
                    ...l,
                    ...i
                });
            } catch (f) {
                return this.logger.warn(`failed parsing options string in nesting for key ${c}`, f), `${c}${m}${d}`;
            }
            return i.defaultValue && i.defaultValue.includes(this.prefix) && delete i.defaultValue, c;
        }, "handleHasOptions");
        for(; n = this.nestingRegexp.exec(e);){
            let c = [];
            i = {
                ...r
            }, i = i.replace && !be(i.replace) ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
            const l = /{.*}/s.test(n[1]) ? n[1].lastIndexOf("}") + 1 : n[1].indexOf(this.formatSeparator);
            if (l !== -1 && (c = n[1].slice(l).split(this.formatSeparator).map((m)=>m.trim()).filter(Boolean), n[1] = n[1].slice(0, l)), o = t(s.call(this, n[1].trim(), i), i), o && n[0] === e && !be(o)) return o;
            be(o) || (o = ac(o)), o || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), o = ""), c.length && (o = c.reduce((m, u)=>this.format(m, u, r.lng, {
                    ...r,
                    interpolationkey: n[1].trim()
                }), o.trim())), e = e.replace(n[0], ld(ac(o))), this.regexp.lastIndex = 0;
        }
        return e;
    }
}, xw = a((e)=>{
    let t = e.toLowerCase().trim();
    const r = {};
    if (e.includes("(")) {
        const n = e.split("(");
        t = n[0].toLowerCase().trim();
        const o = n[1].slice(0, -1);
        t === "currency" && !o.includes(":") ? r.currency || (r.currency = o.trim()) : t === "relativetime" && !o.includes(":") ? r.range || (r.range = o.trim()) : o.split(";").forEach((s)=>{
            if (s) {
                const [c, ...l] = s.split(":"), m = l.join(":").trim().replace(/^'+|'+$/g, ""), u = c.trim();
                r[u] || (r[u] = m), m === "false" && (r[u] = !1), m === "true" && (r[u] = !0), isNaN(m) || (r[u] = parseInt(m, 10));
            }
        });
    }
    return {
        formatName: t,
        formatOptions: r
    };
}, "parseFormatStr"), ud = a((e)=>{
    const t = {};
    return (r, n, o)=>{
        let i = o;
        o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey] && (i = {
            ...i,
            [o.interpolationkey]: void 0
        });
        const s = n + JSON.stringify(i);
        let c = t[s];
        return c || (c = e(ea(n), o), t[s] = c), c(r);
    };
}, "createCachedFormatter"), gw = a((e)=>(t, r, n)=>e(ea(r), n)(t), "createNonCachedFormatter"), vw = class {
    static{
        a(this, "Formatter");
    }
    constructor(e = {}){
        this.logger = Ir.create("formatter"), this.options = e, this.init(e);
    }
    init(e, t = {
        interpolation: {}
    }) {
        this.formatSeparator = t.interpolation.formatSeparator || ",";
        const r = t.cacheInBuiltFormats ? ud : gw;
        this.formats = {
            number: r((n, o)=>{
                const i = new Intl.NumberFormat(n, {
                    ...o
                });
                return (s)=>i.format(s);
            }),
            currency: r((n, o)=>{
                const i = new Intl.NumberFormat(n, {
                    ...o,
                    style: "currency"
                });
                return (s)=>i.format(s);
            }),
            datetime: r((n, o)=>{
                const i = new Intl.DateTimeFormat(n, {
                    ...o
                });
                return (s)=>i.format(s);
            }),
            relativetime: r((n, o)=>{
                const i = new Intl.RelativeTimeFormat(n, {
                    ...o
                });
                return (s)=>i.format(s, o.range || "day");
            }),
            list: r((n, o)=>{
                const i = new Intl.ListFormat(n, {
                    ...o
                });
                return (s)=>i.format(s);
            })
        };
    }
    add(e, t) {
        this.formats[e.toLowerCase().trim()] = t;
    }
    addCached(e, t) {
        this.formats[e.toLowerCase().trim()] = ud(t);
    }
    format(e, t, r, n = {}) {
        if (!t || e == null) return e;
        const o = t.split(this.formatSeparator), i = [];
        for(let c = 0; c < o.length; c++){
            let l = o[c];
            for(; l.indexOf("(") > -1 && !l.includes(")") && c + 1 < o.length;)l = `${l}${this.formatSeparator}${o[++c]}`;
            i.push(l);
        }
        return i.reduce((c, l)=>{
            const { formatName: m, formatOptions: u } = xw(l);
            if (this.formats[m]) {
                let d = c;
                try {
                    const p = n?.formatParams?.[n.interpolationkey] || {}, h = p.locale || p.lng || n.locale || n.lng || r;
                    d = this.formats[m](c, h, {
                        ...u,
                        ...n,
                        ...p
                    });
                } catch (p) {
                    this.logger.warn(p);
                }
                return d;
            } else this.logger.warn(`there was no format function for ${m}`);
            return c;
        }, e);
    }
}, bw = a((e, t)=>{
    e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}, "removePending"), yw = class extends li {
    static{
        a(this, "Connector");
    }
    constructor(e, t, r, n = {}){
        super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = n, this.logger = Ir.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = n.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5, this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(r, n.backend, n);
    }
    queueLoad(e, t, r, n) {
        const o = {}, i = {}, s = {}, c = {};
        return e.forEach((l)=>{
            let m = !0;
            t.forEach((u)=>{
                const d = `${l}|${u}`;
                !r.reload && this.store.hasResourceBundle(l, u) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? i[d] === void 0 && (i[d] = !0) : (this.state[d] = 1, m = !1, i[d] === void 0 && (i[d] = !0), o[d] === void 0 && (o[d] = !0), c[u] === void 0 && (c[u] = !0)));
            }), m || (s[l] = !0);
        }), (Object.keys(o).length || Object.keys(i).length) && this.queue.push({
            pending: i,
            pendingCount: Object.keys(i).length,
            loaded: {},
            errors: [],
            callback: n
        }), {
            toLoad: Object.keys(o),
            pending: Object.keys(i),
            toLoadLanguages: Object.keys(s),
            toLoadNamespaces: Object.keys(c)
        };
    }
    loaded(e, t, r) {
        const n = e.split("|"), o = n[0], i = n[1];
        t && this.emit("failedLoading", o, i, t), !t && r && this.store.addResourceBundle(o, i, r, void 0, void 0, {
            skipCopy: !0
        }), this.state[e] = t ? -1 : 2, t && r && (this.state[e] = 0);
        const s = {};
        this.queue.forEach((c)=>{
            aw(c.loaded, [
                o
            ], i), bw(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l)=>{
                s[l] || (s[l] = {});
                const m = c.loaded[l];
                m.length && m.forEach((u)=>{
                    s[l][u] === void 0 && (s[l][u] = !0);
                });
            }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
        }), this.emit("loaded", s), this.queue = this.queue.filter((c)=>!c.done);
    }
    read(e, t, r, n = 0, o = this.retryTimeout, i) {
        if (!e.length) return i(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: e,
                ns: t,
                fcName: r,
                tried: n,
                wait: o,
                callback: i
            });
            return;
        }
        this.readingCalls++;
        const s = a((l, m)=>{
            if (this.readingCalls--, this.waitingReads.length > 0) {
                const u = this.waitingReads.shift();
                this.read(u.lng, u.ns, u.fcName, u.tried, u.wait, u.callback);
            }
            if (l && m && n < this.maxRetries) {
                setTimeout(()=>{
                    this.read(e, t, r, n + 1, o * 2, i);
                }, o);
                return;
            }
            i(l, m);
        }, "resolver"), c = this.backend[r].bind(this.backend);
        if (c.length === 2) {
            try {
                const l = c(e, t);
                l && typeof l.then == "function" ? l.then((m)=>s(null, m)).catch(s) : s(null, l);
            } catch (l) {
                s(l);
            }
            return;
        }
        return c(e, t, s);
    }
    prepareLoading(e, t, r = {}, n) {
        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
        be(e) && (e = this.languageUtils.toResolveHierarchy(e)), be(t) && (t = [
            t
        ]);
        const o = this.queueLoad(e, t, r, n);
        if (!o.toLoad.length) return o.pending.length || n(), null;
        o.toLoad.forEach((i)=>{
            this.loadOne(i);
        });
    }
    load(e, t, r) {
        this.prepareLoading(e, t, {}, r);
    }
    reload(e, t, r) {
        this.prepareLoading(e, t, {
            reload: !0
        }, r);
    }
    loadOne(e, t = "") {
        const r = e.split("|"), n = r[0], o = r[1];
        this.read(n, o, "read", void 0, void 0, (i, s)=>{
            i && this.logger.warn(`${t}loading namespace ${o} for language ${n} failed`, i), !i && s && this.logger.log(`${t}loaded namespace ${o} for language ${n}`, s), this.loaded(e, i, s);
        });
    }
    saveMissing(e, t, r, n, o, i = {}, s = ()=>{}) {
        if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t)) {
            this.logger.warn(`did not save key "${r}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return;
        }
        if (!(r == null || r === "")) {
            if (this.backend?.create) {
                const c = {
                    ...i,
                    isUpdate: o
                }, l = this.backend.create.bind(this.backend);
                if (l.length < 6) try {
                    let m;
                    l.length === 5 ? m = l(e, t, r, n, c) : m = l(e, t, r, n), m && typeof m.then == "function" ? m.then((u)=>s(null, u)).catch(s) : s(null, m);
                } catch (m) {
                    s(m);
                }
                else l(e, t, r, n, s, c);
            }
            !e || !e[0] || this.store.addResource(e[0], t, r, n);
        }
    }
}, cc = a(()=>({
        debug: !1,
        initAsync: !0,
        ns: [
            "translation"
        ],
        defaultNS: [
            "translation"
        ],
        fallbackLng: [
            "dev"
        ],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        enableSelector: !1,
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: a((e)=>{
            let t = {};
            if (typeof e[1] == "object" && (t = e[1]), be(e[1]) && (t.defaultValue = e[1]), be(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
                const r = e[3] || e[2];
                Object.keys(r).forEach((n)=>{
                    t[n] = r[n];
                });
            }
            return t;
        }, "overloadTranslationOptionHandler"),
        interpolation: {
            escapeValue: !0,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        },
        cacheInBuiltFormats: !0
    }), "get"), dd = a((e)=>(be(e.ns) && (e.ns = [
        e.ns
    ]), be(e.fallbackLng) && (e.fallbackLng = [
        e.fallbackLng
    ]), be(e.fallbackNS) && (e.fallbackNS = [
        e.fallbackNS
    ]), e.supportedLngs && !e.supportedLngs.includes("cimode") && (e.supportedLngs = e.supportedLngs.concat([
        "cimode"
    ])), e), "transformOptions"), mi = a(()=>{}, "noop"), ww = a((e)=>{
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((r)=>{
        typeof e[r] == "function" && (e[r] = e[r].bind(e));
    });
}, "bindMemberFunctions"), Sw = class du extends li {
    static{
        a(this, "I18n");
    }
    constructor(t = {}, r){
        if (super(), this.options = dd(t), this.services = {}, this.logger = Ir, this.modules = {
            external: []
        }, ww(this), r && !this.isInitialized && !t.isClone) {
            if (!this.options.initAsync) return this.init(t, r), this;
            setTimeout(()=>{
                this.init(t, r);
            }, 0);
        }
    }
    init(t = {}, r) {
        this.isInitializing = !0, typeof t == "function" && (r = t, t = {}), t.defaultNS == null && t.ns && (be(t.ns) ? t.defaultNS = t.ns : t.ns.includes("translation") || (t.defaultNS = t.ns[0]));
        const n = cc();
        this.options = {
            ...n,
            ...this.options,
            ...dd(t)
        }, this.options.interpolation = {
            ...n.interpolation,
            ...this.options.interpolation
        }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = n.overloadTranslationOptionHandler);
        const o = a((m)=>m ? typeof m == "function" ? new m : m : null, "createClassOnDemand");
        if (!this.options.isClone) {
            this.modules.logger ? Ir.init(o(this.modules.logger), this.options) : Ir.init(null, this.options);
            let m;
            this.modules.formatter ? m = this.modules.formatter : m = vw;
            const u = new ad(this.options);
            this.store = new td(this.options.resources, this.options);
            const d = this.services;
            d.logger = Ir, d.resourceStore = this.store, d.languageUtils = u, d.pluralResolver = new hw(u, {
                prepend: this.options.pluralSeparator
            }), m && (d.formatter = o(m), d.formatter.init && d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new md(this.options), d.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            }, d.backendConnector = new yw(o(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", (p, ...h)=>{
                this.emit(p, ...h);
            }), this.modules.languageDetector && (d.languageDetector = o(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = o(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new od(this.services, this.options), this.translator.on("*", (p, ...h)=>{
                this.emit(p, ...h);
            }), this.modules.external.forEach((p)=>{
                p.init && p.init(this);
            });
        }
        if (this.format = this.options.interpolation.format, r || (r = mi), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const m = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            m.length > 0 && m[0] !== "dev" && (this.options.lng = m[0]);
        }
        !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), [
            "getResource",
            "hasResourceBundle",
            "getResourceBundle",
            "getDataByLanguage"
        ].forEach((m)=>{
            this[m] = (...u)=>this.store[m](...u);
        }), [
            "addResource",
            "addResources",
            "addResourceBundle",
            "removeResourceBundle"
        ].forEach((m)=>{
            this[m] = (...u)=>(this.store[m](...u), this);
        });
        const c = Qo(), l = a(()=>{
            const m = a((u, d)=>{
                this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), c.resolve(d), r(u, d);
            }, "finish");
            if ((this.languages || this.isLanguageChangingTo) && !this.isInitialized) return m(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, m);
        }, "load");
        return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), c;
    }
    loadResources(t, r = mi) {
        let n = r;
        const o = be(t) ? t : this.language;
        if (typeof t == "function" && (n = t), !this.options.resources || this.options.partialBundledLanguages) {
            if (o?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
            const i = [], s = a((c)=>{
                if (!c || c === "cimode") return;
                this.services.languageUtils.toResolveHierarchy(c).forEach((m)=>{
                    m !== "cimode" && (i.includes(m) || i.push(m));
                });
            }, "append");
            o ? s(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l)=>s(l)), this.options.preload?.forEach?.((c)=>s(c)), this.services.backendConnector.load(i, this.options.ns, (c)=>{
                !c && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(c);
            });
        } else n(null);
    }
    reloadResources(t, r, n) {
        const o = Qo();
        return typeof t == "function" && (n = t, t = void 0), typeof r == "function" && (n = r, r = void 0), t || (t = this.languages), r || (r = this.options.ns), n || (n = mi), this.services.backendConnector.reload(t, r, (i)=>{
            o.resolve(), n(i);
        }), o;
    }
    use(t) {
        if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && rd.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
    }
    setResolvedLanguage(t) {
        if (!(!t || !this.languages) && ![
            "cimode",
            "dev"
        ].includes(t)) {
            for(let r = 0; r < this.languages.length; r++){
                const n = this.languages[r];
                if (![
                    "cimode",
                    "dev"
                ].includes(n) && this.store.hasLanguageSomeTranslations(n)) {
                    this.resolvedLanguage = n;
                    break;
                }
            }
            !this.resolvedLanguage && !this.languages.includes(t) && this.store.hasLanguageSomeTranslations(t) && (this.resolvedLanguage = t, this.languages.unshift(t));
        }
    }
    changeLanguage(t, r) {
        this.isLanguageChangingTo = t;
        const n = Qo();
        this.emit("languageChanging", t);
        const o = a((c)=>{
            this.language = c, this.languages = this.services.languageUtils.toResolveHierarchy(c), this.resolvedLanguage = void 0, this.setResolvedLanguage(c);
        }, "setLngProps"), i = a((c, l)=>{
            l ? this.isLanguageChangingTo === t && (o(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, n.resolve((...m)=>this.t(...m)), r && r(c, (...m)=>this.t(...m));
        }, "done"), s = a((c)=>{
            !t && !c && this.services.languageDetector && (c = []);
            const l = be(c) ? c : c && c[0], m = this.store.hasLanguageSomeTranslations(l) ? l : this.services.languageUtils.getBestMatchFromCodes(be(c) ? [
                c
            ] : c);
            m && (this.language || o(m), this.translator.language || this.translator.changeLanguage(m), this.services.languageDetector?.cacheUserLanguage?.(m)), this.loadResources(m, (u)=>{
                i(u, m);
            });
        }, "setLng");
        return !t && this.services.languageDetector && !this.services.languageDetector.async ? s(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(t), n;
    }
    getFixedT(t, r, n, o) {
        const i = o?.scopeNs, s = a((c, l, ...m)=>{
            let u;
            typeof l != "object" ? u = this.options.overloadTranslationOptionHandler([
                c,
                l
            ].concat(m)) : u = {
                ...l
            }, u.lng = u.lng || s.lng, u.lngs = u.lngs || s.lngs;
            const d = u.ns !== void 0 && u.ns !== null;
            u.ns = u.ns || s.ns, u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || n || s.keyPrefix);
            const p = {
                ...this.options,
                ...u
            };
            Array.isArray(i) && !d && (p.ns = i), typeof u.keyPrefix == "function" && (u.keyPrefix = On(u.keyPrefix, p));
            const h = this.options.keySeparator || ".";
            let f;
            return u.keyPrefix && Array.isArray(c) ? f = c.map((v)=>(typeof v == "function" && (v = On(v, p)), `${u.keyPrefix}${h}${v}`)) : (typeof c == "function" && (c = On(c, p)), f = u.keyPrefix ? `${u.keyPrefix}${h}${c}` : c), this.t(f, u);
        }, "fixedT");
        return be(t) ? s.lng = t : s.lngs = t, s.ns = r, s.keyPrefix = n, s;
    }
    t(...t) {
        return this.translator?.translate(...t);
    }
    exists(...t) {
        return this.translator?.exists(...t);
    }
    setDefaultNamespace(t) {
        this.options.defaultNS = t;
    }
    hasLoadedNamespace(t, r = {}) {
        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
        const n = r.lng || this.resolvedLanguage || this.languages[0], o = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
        if (n.toLowerCase() === "cimode") return !0;
        const s = a((c, l)=>{
            const m = this.services.backendConnector.state[`${c}|${l}`];
            return m === -1 || m === 0 || m === 2;
        }, "loadNotPending");
        if (r.precheck) {
            const c = r.precheck(this, s);
            if (c !== void 0) return c;
        }
        return !!(this.hasResourceBundle(n, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(n, t) && (!o || s(i, t)));
    }
    loadNamespaces(t, r) {
        const n = Qo();
        return this.options.ns ? (be(t) && (t = [
            t
        ]), t.forEach((o)=>{
            this.options.ns.includes(o) || this.options.ns.push(o);
        }), this.loadResources((o)=>{
            n.resolve(), r && r(o);
        }), n) : (r && r(), Promise.resolve());
    }
    loadLanguages(t, r) {
        const n = Qo();
        be(t) && (t = [
            t
        ]);
        const o = this.options.preload || [], i = t.filter((s)=>!o.includes(s) && this.services.languageUtils.isSupportedCode(s));
        return i.length ? (this.options.preload = o.concat(i), this.loadResources((s)=>{
            n.resolve(), r && r(s);
        }), n) : (r && r(), Promise.resolve());
    }
    dir(t) {
        if (t || (t = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
        try {
            const o = new Intl.Locale(t);
            if (o && o.getTextInfo) {
                const i = o.getTextInfo();
                if (i && i.direction) return i.direction;
            }
        } catch  {}
        const r = [
            "ar",
            "shu",
            "sqr",
            "ssh",
            "xaa",
            "yhd",
            "yud",
            "aao",
            "abh",
            "abv",
            "acm",
            "acq",
            "acw",
            "acx",
            "acy",
            "adf",
            "ads",
            "aeb",
            "aec",
            "afb",
            "ajp",
            "apc",
            "apd",
            "arb",
            "arq",
            "ars",
            "ary",
            "arz",
            "auz",
            "avl",
            "ayh",
            "ayl",
            "ayn",
            "ayp",
            "bbz",
            "pga",
            "he",
            "iw",
            "ps",
            "pbt",
            "pbu",
            "pst",
            "prp",
            "prd",
            "ug",
            "ur",
            "ydd",
            "yds",
            "yih",
            "ji",
            "yi",
            "hbo",
            "men",
            "xmn",
            "fa",
            "jpr",
            "peo",
            "pes",
            "prs",
            "dv",
            "sam",
            "ckb"
        ], n = this.services?.languageUtils || new ad(cc());
        return t.toLowerCase().indexOf("-latn") > 1 ? "ltr" : r.includes(n.getLanguagePartFromCode(t)) || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
    static createInstance(t = {}, r) {
        const n = new du(t, r);
        return n.createInstance = du.createInstance, n;
    }
    cloneInstance(t = {}, r = mi) {
        const n = t.forkResourceStore;
        n && delete t.forkResourceStore;
        const o = {
            ...this.options,
            ...t,
            isClone: !0
        }, i = new du(o);
        if ((t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), [
            "store",
            "services",
            "language"
        ].forEach((c)=>{
            i[c] = this[c];
        }), i.services = {
            ...this.services
        }, i.services.utils = {
            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
        }, n) {
            const c = Object.keys(this.store.data).reduce((l, m)=>(l[m] = {
                    ...this.store.data[m]
                }, l[m] = Object.keys(l[m]).reduce((u, d)=>(u[d] = {
                        ...l[m][d]
                    }, u), l[m]), l), {});
            i.store = new td(c, o), i.services.resourceStore = i.store;
        }
        if (t.interpolation) {
            const l = {
                ...cc().interpolation,
                ...this.options.interpolation,
                ...t.interpolation
            }, m = {
                ...o,
                interpolation: l
            };
            i.services.interpolator = new md(m);
        }
        return i.translator = new od(i.services, o), i.translator.on("*", (c, ...l)=>{
            i.emit(c, ...l);
        }), i.init(o, r), i.translator.options = o, i.translator.backendConnector.services.utils = {
            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
        }, i;
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        };
    }
}, Wt = Sw.createInstance(), pd = Wt.createInstance, e6 = Wt.dir, t6 = Wt.init, r6 = Wt.loadResources, n6 = Wt.reloadResources, o6 = Wt.use, a6 = Wt.changeLanguage, i6 = Wt.getFixedT, s6 = Wt.t, c6 = Wt.exists, l6 = Wt.setDefaultNamespace, m6 = Wt.hasLoadedNamespace, u6 = Wt.loadNamespaces, d6 = Wt.loadLanguages;

}
