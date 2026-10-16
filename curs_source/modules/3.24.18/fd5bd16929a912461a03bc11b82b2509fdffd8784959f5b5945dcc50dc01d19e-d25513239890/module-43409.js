"use strict";
require.r(exports), require.d(exports, {
    XmlNode: ()=>l,
    XmlText: ()=>c,
    parseXML: ()=>We
});
const n = /[&<>"]/g, s = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
};
function i(e) {
    return e.replace(n, (e)=>s[e]);
}
const o = /[&"'<>\r\n\u0085\u2028]/g, a = {
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;",
    "<": "&lt;",
    ">": "&gt;",
    "\r": "&#x0D;",
    "\n": "&#x0A;",
    "": "&#x85;",
    "\u2028": "&#x2028;"
};
class c {
    value;
    constructor(e){
        this.value = e;
    }
    toString() {
        return ("" + this.value).replace(o, (e)=>a[e]);
    }
}
class l {
    name;
    children;
    attributes = {};
    static of(e, t, r) {
        const n = new l(e);
        return void 0 !== t && n.addChildNode(new c(t)), void 0 !== r && n.withName(r), n;
    }
    constructor(e, t = []){
        this.name = e, this.children = t;
    }
    withName(e) {
        return this.name = e, this;
    }
    addAttribute(e, t) {
        return this.attributes[e] = t, this;
    }
    addChildNode(e) {
        return this.children.push(e), this;
    }
    removeAttribute(e) {
        return delete this.attributes[e], this;
    }
    n(e) {
        return this.name = e, this;
    }
    c(e) {
        return this.children.push(e), this;
    }
    a(e, t) {
        return null != t && (this.attributes[e] = t), this;
    }
    cc(e, t, r = t) {
        if (null != e[t]) {
            const n = l.of(t, e[t]).withName(r);
            this.c(n);
        }
    }
    l(e, t, r, n) {
        if (null != e[t]) {
            n().map((e)=>{
                e.withName(r), this.c(e);
            });
        }
    }
    lc(e, t, r, n) {
        if (null != e[t]) {
            const e = n(), t = new l(r);
            e.map((e)=>{
                t.c(e);
            }), this.c(t);
        }
    }
    toString() {
        const e = Boolean(this.children.length);
        let t = `<${this.name}`;
        const r = this.attributes;
        for (const e of Object.keys(r)){
            const n = r[e];
            null != n && (t += ` ${e}="${i("" + n)}"`);
        }
        return t + (e ? `>${this.children.map((e)=>e.toString()).join("")}</${this.name}>` : "/>");
    }
}
const u = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", d = new RegExp("^" + ("[" + u + "][" + (u + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040") + "]*") + "$");
function h(e, t) {
    const r = [];
    let n = t.exec(e);
    for(; n;){
        const s = [];
        s.startIndex = t.lastIndex - n[0].length;
        const i = n.length;
        for(let e = 0; e < i; e++)s.push(n[e]);
        r.push(s), n = t.exec(e);
    }
    return r;
}
const f = function(e) {
    const t = d.exec(e);
    return !(null == t);
};
const p = [
    "hasOwnProperty",
    "toString",
    "valueOf",
    "__defineGetter__",
    "__defineSetter__",
    "__lookupGetter__",
    "__lookupSetter__"
], g = [
    "__proto__",
    "constructor",
    "prototype"
], m = (e)=>p.includes(e) ? "__" + e : e, y = {
    preserveOrder: !1,
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    removeNSPrefix: !1,
    allowBooleanAttributes: !1,
    parseTagValue: !0,
    parseAttributeValue: !1,
    trimValues: !0,
    cdataPropName: !1,
    numberParseOptions: {
        hex: !0,
        leadingZeros: !0,
        eNotation: !0
    },
    tagValueProcessor: function(e, t) {
        return t;
    },
    attributeValueProcessor: function(e, t) {
        return t;
    },
    stopNodes: [],
    alwaysCreateTextNode: !1,
    isArray: ()=>!1,
    commentPropName: !1,
    unpairedTags: [],
    processEntities: !0,
    htmlEntities: !1,
    entityDecoder: null,
    ignoreDeclaration: !1,
    ignorePiTags: !1,
    transformTagName: !1,
    transformAttributeName: !1,
    updateTag: function(e, t, r) {
        return e;
    },
    captureMetaData: !1,
    maxNestedTags: 100,
    strictReservedNames: !0,
    jPath: !0,
    onDangerousProperty: m
};
function w(e, t) {
    if ("string" != typeof e) return;
    const r = e.toLowerCase();
    if (p.some((e)=>r === e.toLowerCase())) throw new Error(`[SECURITY] Invalid ${t}: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);
    if (g.some((e)=>r === e.toLowerCase())) throw new Error(`[SECURITY] Invalid ${t}: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);
}
function S(e, t) {
    return "boolean" == typeof e ? {
        enabled: e,
        maxEntitySize: 1e4,
        maxExpansionDepth: 1e4,
        maxTotalExpansions: 1 / 0,
        maxExpandedLength: 1e5,
        maxEntityCount: 1e3,
        allowedTags: null,
        tagFilter: null,
        appliesTo: "all"
    } : "object" == typeof e && null !== e ? {
        enabled: !1 !== e.enabled,
        maxEntitySize: Math.max(1, e.maxEntitySize ?? 1e4),
        maxExpansionDepth: Math.max(1, e.maxExpansionDepth ?? 1e4),
        maxTotalExpansions: Math.max(1, e.maxTotalExpansions ?? 1 / 0),
        maxExpandedLength: Math.max(1, e.maxExpandedLength ?? 1e5),
        maxEntityCount: Math.max(1, e.maxEntityCount ?? 1e3),
        allowedTags: e.allowedTags ?? null,
        tagFilter: e.tagFilter ?? null,
        appliesTo: e.appliesTo ?? "all"
    } : S(!0);
}
const b = function(e) {
    const t = Object.assign({}, y, e), r = [
        {
            value: t.attributeNamePrefix,
            name: "attributeNamePrefix"
        },
        {
            value: t.attributesGroupName,
            name: "attributesGroupName"
        },
        {
            value: t.textNodeName,
            name: "textNodeName"
        },
        {
            value: t.cdataPropName,
            name: "cdataPropName"
        },
        {
            value: t.commentPropName,
            name: "commentPropName"
        }
    ];
    for (const { value: e, name: t } of r)e && w(e, t);
    return null === t.onDangerousProperty && (t.onDangerousProperty = m), t.processEntities = S(t.processEntities, t.htmlEntities), t.unpairedTagsSet = new Set(t.unpairedTags), t.stopNodes && Array.isArray(t.stopNodes) && (t.stopNodes = t.stopNodes.map((e)=>"string" == typeof e && e.startsWith("*.") ? ".." + e.substring(2) : e)), t;
};
let E;
E = "function" != typeof Symbol ? "@@xmlMetadata" : Symbol("XML Node Metadata");
class v {
    constructor(e){
        this.tagname = e, this.child = [], this[":@"] = Object.create(null);
    }
    add(e, t) {
        "__proto__" === e && (e = "#__proto__"), this.child.push({
            [e]: t
        });
    }
    addChild(e, t) {
        "__proto__" === e.tagname && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({
            [e.tagname]: e.child,
            ":@": e[":@"]
        }) : this.child.push({
            [e.tagname]: e.child
        }), void 0 !== t && (this.child[this.child.length - 1][E] = {
            startIndex: t
        });
    }
    static getMetaDataSymbol() {
        return E;
    }
}
class x {
    constructor(e){
        this.suppressValidationErr = !e, this.options = e;
    }
    readDocType(e, t) {
        const r = Object.create(null);
        let n = 0;
        if ("O" !== e[t + 3] || "C" !== e[t + 4] || "T" !== e[t + 5] || "Y" !== e[t + 6] || "P" !== e[t + 7] || "E" !== e[t + 8]) throw new Error("Invalid Tag instead of DOCTYPE");
        {
            t += 9;
            let s = 1, i = !1, o = !1, a = "";
            for(; t < e.length; t++)if ("<" !== e[t] || o) if (">" === e[t]) {
                if (o ? "-" === e[t - 1] && "-" === e[t - 2] && (o = !1, s--) : s--, 0 === s) break;
            } else "[" === e[t] ? i = !0 : a += e[t];
            else {
                if (i && A(e, "!ENTITY", t)) {
                    let s, i;
                    if (t += 7, [s, i, t] = this.readEntityExp(e, t + 1, this.suppressValidationErr), -1 === i.indexOf("&")) {
                        if (!1 !== this.options.enabled && null != this.options.maxEntityCount && n >= this.options.maxEntityCount) throw new Error(`Entity count (${n + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`);
                        r[s] = i, n++;
                    }
                } else if (i && A(e, "!ELEMENT", t)) {
                    t += 8;
                    const { index: r } = this.readElementExp(e, t + 1);
                    t = r;
                } else if (i && A(e, "!ATTLIST", t)) t += 8;
                else if (i && A(e, "!NOTATION", t)) {
                    t += 9;
                    const { index: r } = this.readNotationExp(e, t + 1, this.suppressValidationErr);
                    t = r;
                } else {
                    if (!A(e, "!--", t)) throw new Error("Invalid DOCTYPE");
                    o = !0;
                }
                s++, a = "";
            }
            if (0 !== s) throw new Error("Unclosed DOCTYPE");
        }
        return {
            entities: r,
            i: t
        };
    }
    readEntityExp(e, t) {
        const r = t = T(e, t);
        for(; t < e.length && !/\s/.test(e[t]) && '"' !== e[t] && "'" !== e[t];)t++;
        let n = e.substring(r, t);
        if (N(n), t = T(e, t), !this.suppressValidationErr) {
            if ("SYSTEM" === e.substring(t, t + 6).toUpperCase()) throw new Error("External entities are not supported");
            if ("%" === e[t]) throw new Error("Parameter entities are not supported");
        }
        let s = "";
        if ([t, s] = this.readIdentifierVal(e, t, "entity"), !1 !== this.options.enabled && null != this.options.maxEntitySize && s.length > this.options.maxEntitySize) throw new Error(`Entity "${n}" size (${s.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);
        return [
            n,
            s,
            --t
        ];
    }
    readNotationExp(e, t) {
        const r = t = T(e, t);
        for(; t < e.length && !/\s/.test(e[t]);)t++;
        let n = e.substring(r, t);
        !this.suppressValidationErr && N(n), t = T(e, t);
        const s = e.substring(t, t + 6).toUpperCase();
        if (!this.suppressValidationErr && "SYSTEM" !== s && "PUBLIC" !== s) throw new Error(`Expected SYSTEM or PUBLIC, found "${s}"`);
        t += s.length, t = T(e, t);
        let i = null, o = null;
        if ("PUBLIC" === s) [t, i] = this.readIdentifierVal(e, t, "publicIdentifier"), '"' !== e[t = T(e, t)] && "'" !== e[t] || ([t, o] = this.readIdentifierVal(e, t, "systemIdentifier"));
        else if ("SYSTEM" === s && ([t, o] = this.readIdentifierVal(e, t, "systemIdentifier"), !this.suppressValidationErr && !o)) throw new Error("Missing mandatory system identifier for SYSTEM notation");
        return {
            notationName: n,
            publicIdentifier: i,
            systemIdentifier: o,
            index: --t
        };
    }
    readIdentifierVal(e, t, r) {
        let n = "";
        const s = e[t];
        if ('"' !== s && "'" !== s) throw new Error(`Expected quoted string, found "${s}"`);
        const i = ++t;
        for(; t < e.length && e[t] !== s;)t++;
        if (n = e.substring(i, t), e[t] !== s) throw new Error(`Unterminated ${r} value`);
        return [
            ++t,
            n
        ];
    }
    readElementExp(e, t) {
        const r = t = T(e, t);
        for(; t < e.length && !/\s/.test(e[t]);)t++;
        let n = e.substring(r, t);
        if (!this.suppressValidationErr && !f(n)) throw new Error(`Invalid element name: "${n}"`);
        let s = "";
        if ("E" === e[t = T(e, t)] && A(e, "MPTY", t)) t += 4;
        else if ("A" === e[t] && A(e, "NY", t)) t += 2;
        else if ("(" === e[t]) {
            const r = ++t;
            for(; t < e.length && ")" !== e[t];)t++;
            if (s = e.substring(r, t), ")" !== e[t]) throw new Error("Unterminated content model");
        } else if (!this.suppressValidationErr) throw new Error(`Invalid Element Expression, found "${e[t]}"`);
        return {
            elementName: n,
            contentModel: s.trim(),
            index: t
        };
    }
    readAttlistExp(e, t) {
        let r = t = T(e, t);
        for(; t < e.length && !/\s/.test(e[t]);)t++;
        let n = e.substring(r, t);
        for(N(n), r = t = T(e, t); t < e.length && !/\s/.test(e[t]);)t++;
        let s = e.substring(r, t);
        if (!N(s)) throw new Error(`Invalid attribute name: "${s}"`);
        t = T(e, t);
        let i = "";
        if ("NOTATION" === e.substring(t, t + 8).toUpperCase()) {
            if (i = "NOTATION", "(" !== e[t = T(e, t += 8)]) throw new Error(`Expected '(', found "${e[t]}"`);
            t++;
            let r = [];
            for(; t < e.length && ")" !== e[t];){
                const n = t;
                for(; t < e.length && "|" !== e[t] && ")" !== e[t];)t++;
                let s = e.substring(n, t);
                if (s = s.trim(), !N(s)) throw new Error(`Invalid notation name: "${s}"`);
                r.push(s), "|" === e[t] && (t++, t = T(e, t));
            }
            if (")" !== e[t]) throw new Error("Unterminated list of notations");
            t++, i += " (" + r.join("|") + ")";
        } else {
            const r = t;
            for(; t < e.length && !/\s/.test(e[t]);)t++;
            i += e.substring(r, t);
            const n = [
                "CDATA",
                "ID",
                "IDREF",
                "IDREFS",
                "ENTITY",
                "ENTITIES",
                "NMTOKEN",
                "NMTOKENS"
            ];
            if (!this.suppressValidationErr && !n.includes(i.toUpperCase())) throw new Error(`Invalid attribute type: "${i}"`);
        }
        t = T(e, t);
        let o = "";
        return "#REQUIRED" === e.substring(t, t + 8).toUpperCase() ? (o = "#REQUIRED", t += 8) : "#IMPLIED" === e.substring(t, t + 7).toUpperCase() ? (o = "#IMPLIED", t += 7) : [t, o] = this.readIdentifierVal(e, t, "ATTLIST"), {
            elementName: n,
            attributeName: s,
            attributeType: i,
            defaultValue: o,
            index: t
        };
    }
}
const T = (e, t)=>{
    for(; t < e.length && /\s/.test(e[t]);)t++;
    return t;
};
function A(e, t, r) {
    for(let n = 0; n < t.length; n++)if (t[n] !== e[r + n + 1]) return !1;
    return !0;
}
function N(e) {
    if (f(e)) return e;
    throw new Error(`Invalid entity name ${e}`);
}
const C = /^[-+]?0x[a-fA-F0-9]+$/, _ = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, R = {
    hex: !0,
    leadingZeros: !0,
    decimalPoint: ".",
    eNotation: !0,
    infinity: "original"
};
function I(e, t = {}) {
    if (t = Object.assign({}, R, t), !e || "string" != typeof e) return e;
    let r = e.trim();
    if (0 === r.length) return e;
    if (void 0 !== t.skipLike && t.skipLike.test(r)) return e;
    if ("0" === r) return 0;
    if (t.hex && C.test(r)) return function(e, t) {
        if (parseInt) return parseInt(e, t);
        if (Number.parseInt) return Number.parseInt(e, t);
        if (window && window.parseInt) return window.parseInt(e, t);
        throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
    }(r, 16);
    if (isFinite(r)) {
        if (r.includes("e") || r.includes("E")) return function(e, t, r) {
            if (!r.eNotation) return e;
            const n = t.match(D);
            if (n) {
                let s = n[1] || "";
                const i = -1 === n[3].indexOf("e") ? "E" : "e", o = n[2], a = s ? e[o.length + 1] === i : e[o.length] === i;
                return o.length > 1 && a ? e : (1 !== o.length || !n[3].startsWith(`.${i}`) && n[3][0] !== i) && o.length > 0 ? r.leadingZeros && !a ? (t = (n[1] || "") + n[3], Number(t)) : e : Number(t);
            }
            return e;
        }(e, r, t);
        {
            const n = _.exec(r);
            if (n) {
                const s = n[1] || "", i = n[2];
                let o = function(e) {
                    if (e && -1 !== e.indexOf(".")) return "." === (e = e.replace(/0+$/, "")) ? e = "0" : "." === e[0] ? e = "0" + e : "." === e[e.length - 1] && (e = e.substring(0, e.length - 1)), e;
                    return e;
                }(n[3]);
                const a = s ? "." === e[i.length + 1] : "." === e[i.length];
                if (!t.leadingZeros && (i.length > 1 || 1 === i.length && !a)) return e;
                {
                    const n = Number(r), a = String(n);
                    if (0 === n) return n;
                    if (-1 !== a.search(/[eE]/)) return t.eNotation ? n : e;
                    if (-1 !== r.indexOf(".")) return "0" === a || a === o || a === `${s}${o}` ? n : e;
                    let c = i ? o : r;
                    return i ? c === a || s + c === a ? n : e : c === a || c === s + a ? n : e;
                }
            }
            return e;
        }
    }
    return function(e, t, r) {
        const n = t === 1 / 0;
        switch(r.infinity.toLowerCase()){
            case "null":
                return null;
            case "infinity":
                return t;
            case "string":
                return n ? "Infinity" : "-Infinity";
            default:
                return e;
        }
    }(e, Number(r), t);
}
const D = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
class k {
    constructor(e){
        this._matcher = e;
    }
    get separator() {
        return this._matcher.separator;
    }
    getCurrentTag() {
        const e = this._matcher.path;
        return e.length > 0 ? e[e.length - 1].tag : void 0;
    }
    getCurrentNamespace() {
        const e = this._matcher.path;
        return e.length > 0 ? e[e.length - 1].namespace : void 0;
    }
    getAttrValue(e) {
        const t = this._matcher.path;
        if (0 !== t.length) return t[t.length - 1].values?.[e];
    }
    hasAttr(e) {
        const t = this._matcher.path;
        if (0 === t.length) return !1;
        const r = t[t.length - 1];
        return void 0 !== r.values && e in r.values;
    }
    getPosition() {
        const e = this._matcher.path;
        return 0 === e.length ? -1 : e[e.length - 1].position ?? 0;
    }
    getCounter() {
        const e = this._matcher.path;
        return 0 === e.length ? -1 : e[e.length - 1].counter ?? 0;
    }
    getIndex() {
        return this.getPosition();
    }
    getDepth() {
        return this._matcher.path.length;
    }
    toString(e, t = !0) {
        return this._matcher.toString(e, t);
    }
    toArray() {
        return this._matcher.path.map((e)=>e.tag);
    }
    matches(e) {
        return this._matcher.matches(e);
    }
    matchesAny(e) {
        return e.matchesAny(this._matcher);
    }
}
class O {
    constructor(e = {}){
        this.separator = e.separator || ".", this.path = [], this.siblingStacks = [], this._pathStringCache = null, this._view = new k(this);
    }
    push(e, t = null, r = null) {
        this._pathStringCache = null, this.path.length > 0 && (this.path[this.path.length - 1].values = void 0);
        const n = this.path.length;
        this.siblingStacks[n] || (this.siblingStacks[n] = new Map);
        const s = this.siblingStacks[n], i = r ? `${r}:${e}` : e, o = s.get(i) || 0;
        let a = 0;
        for (const e of s.values())a += e;
        s.set(i, o + 1);
        const c = {
            tag: e,
            position: a,
            counter: o
        };
        null != r && (c.namespace = r), null != t && (c.values = t), this.path.push(c);
    }
    pop() {
        if (0 === this.path.length) return;
        this._pathStringCache = null;
        const e = this.path.pop();
        return this.siblingStacks.length > this.path.length + 1 && (this.siblingStacks.length = this.path.length + 1), e;
    }
    updateCurrent(e) {
        if (this.path.length > 0) {
            const t = this.path[this.path.length - 1];
            null != e && (t.values = e);
        }
    }
    getCurrentTag() {
        return this.path.length > 0 ? this.path[this.path.length - 1].tag : void 0;
    }
    getCurrentNamespace() {
        return this.path.length > 0 ? this.path[this.path.length - 1].namespace : void 0;
    }
    getAttrValue(e) {
        if (0 !== this.path.length) return this.path[this.path.length - 1].values?.[e];
    }
    hasAttr(e) {
        if (0 === this.path.length) return !1;
        const t = this.path[this.path.length - 1];
        return void 0 !== t.values && e in t.values;
    }
    getPosition() {
        return 0 === this.path.length ? -1 : this.path[this.path.length - 1].position ?? 0;
    }
    getCounter() {
        return 0 === this.path.length ? -1 : this.path[this.path.length - 1].counter ?? 0;
    }
    getIndex() {
        return this.getPosition();
    }
    getDepth() {
        return this.path.length;
    }
    toString(e, t = !0) {
        const r = e || this.separator;
        if (r === this.separator && !0 === t) {
            if (null !== this._pathStringCache) return this._pathStringCache;
            const e = this.path.map((e)=>e.namespace ? `${e.namespace}:${e.tag}` : e.tag).join(r);
            return this._pathStringCache = e, e;
        }
        return this.path.map((e)=>t && e.namespace ? `${e.namespace}:${e.tag}` : e.tag).join(r);
    }
    toArray() {
        return this.path.map((e)=>e.tag);
    }
    reset() {
        this._pathStringCache = null, this.path = [], this.siblingStacks = [];
    }
    matches(e) {
        const t = e.segments;
        return 0 !== t.length && (e.hasDeepWildcard() ? this._matchWithDeepWildcard(t) : this._matchSimple(t));
    }
    _matchSimple(e) {
        if (this.path.length !== e.length) return !1;
        for(let t = 0; t < e.length; t++)if (!this._matchSegment(e[t], this.path[t], t === this.path.length - 1)) return !1;
        return !0;
    }
    _matchWithDeepWildcard(e) {
        let t = this.path.length - 1, r = e.length - 1;
        for(; r >= 0 && t >= 0;){
            const n = e[r];
            if ("deep-wildcard" === n.type) {
                if (r--, r < 0) return !0;
                const n = e[r];
                let s = !1;
                for(let e = t; e >= 0; e--)if (this._matchSegment(n, this.path[e], e === this.path.length - 1)) {
                    t = e - 1, r--, s = !0;
                    break;
                }
                if (!s) return !1;
            } else {
                if (!this._matchSegment(n, this.path[t], t === this.path.length - 1)) return !1;
                t--, r--;
            }
        }
        return r < 0;
    }
    _matchSegment(e, t, r) {
        if ("*" !== e.tag && e.tag !== t.tag) return !1;
        if (void 0 !== e.namespace && "*" !== e.namespace && e.namespace !== t.namespace) return !1;
        if (void 0 !== e.attrName) {
            if (!r) return !1;
            if (!t.values || !(e.attrName in t.values)) return !1;
            if (void 0 !== e.attrValue && String(t.values[e.attrName]) !== String(e.attrValue)) return !1;
        }
        if (void 0 !== e.position) {
            if (!r) return !1;
            const n = t.counter ?? 0;
            if ("first" === e.position && 0 !== n) return !1;
            if ("odd" === e.position && n % 2 != 1) return !1;
            if ("even" === e.position && n % 2 != 0) return !1;
            if ("nth" === e.position && n !== e.positionValue) return !1;
        }
        return !0;
    }
    matchesAny(e) {
        return e.matchesAny(this);
    }
    snapshot() {
        return {
            path: this.path.map((e)=>({
                    ...e
                })),
            siblingStacks: this.siblingStacks.map((e)=>new Map(e))
        };
    }
    restore(e) {
        this._pathStringCache = null, this.path = e.path.map((e)=>({
                ...e
            })), this.siblingStacks = e.siblingStacks.map((e)=>new Map(e));
    }
    readOnly() {
        return this._view;
    }
}
class M {
    constructor(e, t = {}, r){
        this.pattern = e, this.separator = t.separator || ".", this.segments = this._parse(e), this.data = r, this._hasDeepWildcard = this.segments.some((e)=>"deep-wildcard" === e.type), this._hasAttributeCondition = this.segments.some((e)=>void 0 !== e.attrName), this._hasPositionSelector = this.segments.some((e)=>void 0 !== e.position);
    }
    _parse(e) {
        const t = [];
        let r = 0, n = "";
        for(; r < e.length;)e[r] === this.separator ? r + 1 < e.length && e[r + 1] === this.separator ? (n.trim() && (t.push(this._parseSegment(n.trim())), n = ""), t.push({
            type: "deep-wildcard"
        }), r += 2) : (n.trim() && t.push(this._parseSegment(n.trim())), n = "", r++) : (n += e[r], r++);
        return n.trim() && t.push(this._parseSegment(n.trim())), t;
    }
    _parseSegment(e) {
        const t = {
            type: "tag"
        };
        let r = null, n = e;
        const s = e.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
        if (s && (n = s[1] + s[3], s[2])) {
            const e = s[2].slice(1, -1);
            e && (r = e);
        }
        let i, o, a = n;
        if (n.includes("::")) {
            const t = n.indexOf("::");
            if (i = n.substring(0, t).trim(), a = n.substring(t + 2).trim(), !i) throw new Error(`Invalid namespace in pattern: ${e}`);
        }
        let c = null;
        if (a.includes(":")) {
            const e = a.lastIndexOf(":"), t = a.substring(0, e).trim(), r = a.substring(e + 1).trim();
            [
                "first",
                "last",
                "odd",
                "even"
            ].includes(r) || /^nth\(\d+\)$/.test(r) ? (o = t, c = r) : o = a;
        } else o = a;
        if (!o) throw new Error(`Invalid segment pattern: ${e}`);
        if (t.tag = o, i && (t.namespace = i), r) if (r.includes("=")) {
            const e = r.indexOf("=");
            t.attrName = r.substring(0, e).trim(), t.attrValue = r.substring(e + 1).trim();
        } else t.attrName = r.trim();
        if (c) {
            const e = c.match(/^nth\((\d+)\)$/);
            e ? (t.position = "nth", t.positionValue = parseInt(e[1], 10)) : t.position = c;
        }
        return t;
    }
    get length() {
        return this.segments.length;
    }
    hasDeepWildcard() {
        return this._hasDeepWildcard;
    }
    hasAttributeCondition() {
        return this._hasAttributeCondition;
    }
    hasPositionSelector() {
        return this._hasPositionSelector;
    }
    toString() {
        return this.pattern;
    }
}
class P {
    constructor(){
        this._byDepthAndTag = new Map, this._wildcardByDepth = new Map, this._deepWildcards = [], this._patterns = new Set, this._sealed = !1;
    }
    add(e) {
        if (this._sealed) throw new TypeError("ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.");
        if (this._patterns.has(e.pattern)) return this;
        if (this._patterns.add(e.pattern), e.hasDeepWildcard()) return this._deepWildcards.push(e), this;
        const t = e.length, r = e.segments[e.segments.length - 1], n = r?.tag;
        if (n && "*" !== n) {
            const r = `${t}:${n}`;
            this._byDepthAndTag.has(r) || this._byDepthAndTag.set(r, []), this._byDepthAndTag.get(r).push(e);
        } else this._wildcardByDepth.has(t) || this._wildcardByDepth.set(t, []), this._wildcardByDepth.get(t).push(e);
        return this;
    }
    addAll(e) {
        for (const t of e)this.add(t);
        return this;
    }
    has(e) {
        return this._patterns.has(e.pattern);
    }
    get size() {
        return this._patterns.size;
    }
    seal() {
        return this._sealed = !0, this;
    }
    get isSealed() {
        return this._sealed;
    }
    matchesAny(e) {
        return null !== this.findMatch(e);
    }
    findMatch(e) {
        const t = e.getDepth(), r = `${t}:${e.getCurrentTag()}`, n = this._byDepthAndTag.get(r);
        if (n) {
            for(let t = 0; t < n.length; t++)if (e.matches(n[t])) return n[t];
        }
        const s = this._wildcardByDepth.get(t);
        if (s) {
            for(let t = 0; t < s.length; t++)if (e.matches(s[t])) return s[t];
        }
        for(let t = 0; t < this._deepWildcards.length; t++)if (e.matches(this._deepWildcards[t])) return this._deepWildcards[t];
        return null;
    }
}
const $ = {
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    euro: "€",
    dollar: "$",
    euro: "€",
    fnof: "ƒ",
    inr: "₹",
    af: "؋",
    birr: "ብር",
    peso: "₱",
    rub: "₽",
    won: "₩",
    yuan: "¥",
    cedil: "¸"
}, j = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
}, L = {
    nbsp: " ",
    copy: "©",
    reg: "®",
    trade: "™",
    mdash: "—",
    ndash: "–",
    hellip: "…",
    laquo: "«",
    raquo: "»",
    lsquo: "‘",
    rsquo: "’",
    ldquo: "“",
    rdquo: "”",
    bull: "•",
    para: "¶",
    sect: "§",
    deg: "°",
    frac12: "½",
    frac14: "¼",
    frac34: "¾"
}, U = new Set("!?\\\\/[]$%{}^&*()<>|+");
function B(e) {
    if ("#" === e[0]) throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${e}"`);
    for (const t of e)if (U.has(t)) throw new Error(`[EntityReplacer] Invalid character '${t}' in entity name: "${e}"`);
    return e;
}
function F(...e) {
    const t = Object.create(null);
    for (const r of e)if (r) for (const e of Object.keys(r)){
        const n = r[e];
        if ("string" == typeof n) t[e] = n;
        else if (n && "object" == typeof n && void 0 !== n.val) {
            const r = n.val;
            "string" == typeof r && (t[e] = r);
        }
    }
    return t;
}
const z = "external", V = "base", H = "all";
const q = Object.freeze({
    allow: 0,
    leave: 1,
    remove: 2,
    throw: 3
}), W = new Set([
    9,
    10,
    13
]);
class G {
    constructor(e = {}){
        var t;
        this._limit = e.limit || {}, this._maxTotalExpansions = this._limit.maxTotalExpansions || 0, this._maxExpandedLength = this._limit.maxExpandedLength || 0, this._postCheck = "function" == typeof e.postCheck ? e.postCheck : (e)=>e, this._limitTiers = (t = this._limit.applyLimitsTo ?? z) && t !== z ? t === H ? new Set([
            H
        ]) : t === V ? new Set([
            V
        ]) : Array.isArray(t) ? new Set(t) : new Set([
            z
        ]) : new Set([
            z
        ]), this._numericAllowed = e.numericAllowed ?? !0, this._baseMap = F(j, e.namedEntities || null), this._externalMap = Object.create(null), this._inputMap = Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this._removeSet = new Set(e.remove && Array.isArray(e.remove) ? e.remove : []), this._leaveSet = new Set(e.leave && Array.isArray(e.leave) ? e.leave : []);
        const r = function(e) {
            if (!e) return {
                xmlVersion: 1,
                onLevel: q.allow,
                nullLevel: q.remove
            };
            const t = 1.1 === e.xmlVersion ? 1.1 : 1, r = q[e.onNCR] ?? q.allow, n = q[e.nullNCR] ?? q.remove;
            return {
                xmlVersion: t,
                onLevel: r,
                nullLevel: Math.max(n, q.remove)
            };
        }(e.ncr);
        this._ncrXmlVersion = r.xmlVersion, this._ncrOnLevel = r.onLevel, this._ncrNullLevel = r.nullLevel;
    }
    setExternalEntities(e) {
        if (e) for (const t of Object.keys(e))B(t);
        this._externalMap = F(e);
    }
    addExternalEntity(e, t) {
        B(e), "string" == typeof t && -1 === t.indexOf("&") && (this._externalMap[e] = t);
    }
    addInputEntities(e) {
        this._totalExpansions = 0, this._expandedLength = 0, this._inputMap = F(e);
    }
    reset() {
        return this._inputMap = Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this;
    }
    setXmlVersion(e) {
        this._ncrXmlVersion = 1.1 === e ? 1.1 : 1;
    }
    decode(e) {
        if ("string" != typeof e || 0 === e.length) return e;
        const t = e, r = [], n = e.length;
        let s = 0, i = 0;
        const o = this._maxTotalExpansions > 0, a = this._maxExpandedLength > 0, c = o || a;
        for(; i < n;){
            if (38 !== e.charCodeAt(i)) {
                i++;
                continue;
            }
            let t = i + 1;
            for(; t < n && 59 !== e.charCodeAt(t) && t - i <= 32;)t++;
            if (t >= n || 59 !== e.charCodeAt(t)) {
                i++;
                continue;
            }
            const l = e.slice(i + 1, t);
            if (0 === l.length) {
                i++;
                continue;
            }
            let u, d;
            if (this._removeSet.has(l)) u = "", void 0 === d && (d = z);
            else {
                if (this._leaveSet.has(l)) {
                    i++;
                    continue;
                }
                if (35 === l.charCodeAt(0)) {
                    const e = this._resolveNCR(l);
                    if (void 0 === e) {
                        i++;
                        continue;
                    }
                    u = e, d = V;
                } else {
                    const e = this._resolveName(l);
                    u = e?.value, d = e?.tier;
                }
            }
            if (void 0 !== u) {
                if (i > s && r.push(e.slice(s, i)), r.push(u), s = t + 1, i = s, c && this._tierCounts(d)) {
                    if (o && (this._totalExpansions++, this._totalExpansions > this._maxTotalExpansions)) throw new Error(`[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`);
                    if (a) {
                        const e = u.length - (l.length + 2);
                        if (e > 0 && (this._expandedLength += e, this._expandedLength > this._maxExpandedLength)) throw new Error(`[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`);
                    }
                }
            } else i++;
        }
        s < n && r.push(e.slice(s));
        const l = 0 === r.length ? e : r.join("");
        return this._postCheck(l, t);
    }
    _tierCounts(e) {
        return !!this._limitTiers.has(H) || this._limitTiers.has(e);
    }
    _resolveName(e) {
        return e in this._inputMap ? {
            value: this._inputMap[e],
            tier: z
        } : e in this._externalMap ? {
            value: this._externalMap[e],
            tier: z
        } : e in this._baseMap ? {
            value: this._baseMap[e],
            tier: V
        } : void 0;
    }
    _classifyNCR(e) {
        return 0 === e ? this._ncrNullLevel : e >= 55296 && e <= 57343 || 1 === this._ncrXmlVersion && e >= 1 && e <= 31 && !W.has(e) ? q.remove : -1;
    }
    _applyNCRAction(e, t, r) {
        switch(e){
            case q.allow:
                return String.fromCodePoint(r);
            case q.remove:
                return "";
            case q.leave:
                return;
            case q.throw:
                throw new Error(`[EntityDecoder] Prohibited numeric character reference &${t}; (U+${r.toString(16).toUpperCase().padStart(4, "0")})`);
            default:
                return String.fromCodePoint(r);
        }
    }
    _resolveNCR(e) {
        const t = e.charCodeAt(1);
        let r;
        if (r = 120 === t || 88 === t ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10), Number.isNaN(r) || r < 0 || r > 1114111) return;
        const n = this._classifyNCR(r);
        if (!this._numericAllowed && n < q.remove) return;
        const s = -1 === n ? this._ncrOnLevel : Math.max(this._ncrOnLevel, n);
        return this._applyNCRAction(s, e, r);
    }
}
function Q(e, t) {
    if (!e) return {};
    const r = t.attributesGroupName ? e[t.attributesGroupName] : e;
    if (!r) return {};
    const n = {};
    for(const e in r)if (e.startsWith(t.attributeNamePrefix)) {
        n[e.substring(t.attributeNamePrefix.length)] = r[e];
    } else n[e] = r[e];
    return n;
}
function X(e) {
    if (!e || "string" != typeof e) return;
    const t = e.indexOf(":");
    if (-1 !== t && t > 0) {
        const r = e.substring(0, t);
        if ("xmlns" !== r) return r;
    }
}
class K {
    constructor(e, t){
        var r;
        this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.parseXml = te, this.parseTextData = J, this.resolveNameSpace = Y, this.buildAttributesMap = ee, this.isItStopNode = ie, this.replaceEntitiesValue = ne, this.readStopNodeData = le, this.saveTextToParentTag = se, this.addChild = re, this.ignoreAttributesFn = "function" == typeof (r = this.options.ignoreAttributes) ? r : Array.isArray(r) ? (e)=>{
            for (const t of r){
                if ("string" == typeof t && e === t) return !0;
                if (t instanceof RegExp && t.test(e)) return !0;
            }
        } : ()=>!1, this.entityExpansionCount = 0, this.currentExpandedLength = 0;
        let n = {
            ...j
        };
        this.options.entityDecoder ? this.entityDecoder = this.options.entityDecoder : ("object" == typeof this.options.htmlEntities ? n = this.options.htmlEntities : !0 === this.options.htmlEntities && (n = {
            ...L,
            ...$
        }), this.entityDecoder = new G({
            namedEntities: {
                ...n,
                ...t
            },
            numericAllowed: this.options.htmlEntities,
            limit: {
                maxTotalExpansions: this.options.processEntities.maxTotalExpansions,
                maxExpandedLength: this.options.processEntities.maxExpandedLength,
                applyLimitsTo: this.options.processEntities.appliesTo
            }
        })), this.matcher = new O, this.readonlyMatcher = this.matcher.readOnly(), this.isCurrentNodeStopNode = !1, this.stopNodeExpressionsSet = new P;
        const s = this.options.stopNodes;
        if (s && s.length > 0) {
            for(let e = 0; e < s.length; e++){
                const t = s[e];
                "string" == typeof t ? this.stopNodeExpressionsSet.add(new M(t)) : t instanceof M && this.stopNodeExpressionsSet.add(t);
            }
            this.stopNodeExpressionsSet.seal();
        }
    }
}
function J(e, t, r, n, s, i, o) {
    const a = this.options;
    if (void 0 !== e && (a.trimValues && !n && (e = e.trim()), e.length > 0)) {
        o || (e = this.replaceEntitiesValue(e, t, r));
        const n = a.jPath ? r.toString() : r, c = a.tagValueProcessor(t, e, n, s, i);
        if (null == c) return e;
        if (typeof c != typeof e || c !== e) return c;
        if (a.trimValues) return ue(e, a.parseTagValue, a.numberParseOptions);
        return e.trim() === e ? ue(e, a.parseTagValue, a.numberParseOptions) : e;
    }
}
function Y(e) {
    if (this.options.removeNSPrefix) {
        const t = e.split(":"), r = "/" === e.charAt(0) ? "/" : "";
        if ("xmlns" === t[0]) return "";
        2 === t.length && (e = r + t[1]);
    }
    return e;
}
const Z = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
function ee(e, t, r, n = !1) {
    const s = this.options;
    if (!0 === n || !0 !== s.ignoreAttributes && "string" == typeof e) {
        const n = h(e, Z), i = n.length, o = {}, a = new Array(i);
        let c = !1;
        const l = {};
        for(let e = 0; e < i; e++){
            const t = this.resolveNameSpace(n[e][1]), i = n[e][4];
            if (t.length && void 0 !== i) {
                let n = i;
                s.trimValues && (n = n.trim()), n = this.replaceEntitiesValue(n, r, this.readonlyMatcher), a[e] = n, l[t] = n, c = !0;
            }
        }
        c && "object" == typeof t && t.updateCurrent && t.updateCurrent(l);
        const u = s.jPath ? t.toString() : this.readonlyMatcher;
        let d = !1;
        for(let e = 0; e < i; e++){
            const t = this.resolveNameSpace(n[e][1]);
            if (this.ignoreAttributesFn(t, u)) continue;
            let r = s.attributeNamePrefix + t;
            if (t.length) if (s.transformAttributeName && (r = s.transformAttributeName(r)), r = he(r, s), void 0 !== n[e][4]) {
                const n = a[e], i = s.attributeValueProcessor(t, n, u);
                o[r] = null == i ? n : typeof i != typeof n || i !== n ? i : ue(n, s.parseAttributeValue, s.numberParseOptions), d = !0;
            } else s.allowBooleanAttributes && (o[r] = !0, d = !0);
        }
        if (!d) return;
        if (s.attributesGroupName && !s.preserveOrder) {
            const e = {};
            return e[s.attributesGroupName] = o, e;
        }
        return o;
    }
}
const te = function(e) {
    e = e.replace(/\r\n?/g, "\n");
    const t = new v("!xml");
    let r = t, n = "";
    this.matcher.reset(), this.entityDecoder.reset(), this.entityExpansionCount = 0, this.currentExpandedLength = 0;
    const s = this.options, i = new x(s.processEntities), o = e.length;
    for(let a = 0; a < o; a++){
        if ("<" === e[a]) {
            const c = e.charCodeAt(a + 1);
            if (47 === c) {
                const t = oe(e, ">", a, "Closing Tag is not closed.");
                let i = e.substring(a + 2, t).trim();
                if (s.removeNSPrefix) {
                    const e = i.indexOf(":");
                    -1 !== e && (i = i.substr(e + 1));
                }
                i = de(s.transformTagName, i, "", s).tagName, r && (n = this.saveTextToParentTag(n, r, this.readonlyMatcher));
                const o = this.matcher.getCurrentTag();
                if (i && s.unpairedTagsSet.has(i)) throw new Error(`Unpaired tag can not be used as closing tag: </${i}>`);
                o && s.unpairedTagsSet.has(o) && (this.matcher.pop(), this.tagsNodeStack.pop()), this.matcher.pop(), this.isCurrentNodeStopNode = !1, r = this.tagsNodeStack.pop(), n = "", a = t;
            } else if (63 === c) {
                let t = ce(e, a, !1, "?>");
                if (!t) throw new Error("Pi Tag is not closed.");
                n = this.saveTextToParentTag(n, r, this.readonlyMatcher);
                const i = this.buildAttributesMap(t.tagExp, this.matcher, t.tagName, !0);
                if (i) {
                    const e = i[this.options.attributeNamePrefix + "version"];
                    this.entityDecoder.setXmlVersion(Number(e) || 1);
                }
                if (s.ignoreDeclaration && "?xml" === t.tagName || s.ignorePiTags) ;
                else {
                    const e = new v(t.tagName);
                    e.add(s.textNodeName, ""), t.tagName !== t.tagExp && t.attrExpPresent && !0 !== s.ignoreAttributes && (e[":@"] = i), this.addChild(r, e, this.readonlyMatcher, a);
                }
                a = t.closeIndex + 1;
            } else if (33 === c && 45 === e.charCodeAt(a + 2) && 45 === e.charCodeAt(a + 3)) {
                const t = oe(e, "--\x3e", a + 4, "Comment is not closed.");
                if (s.commentPropName) {
                    const i = e.substring(a + 4, t - 2);
                    n = this.saveTextToParentTag(n, r, this.readonlyMatcher), r.add(s.commentPropName, [
                        {
                            [s.textNodeName]: i
                        }
                    ]);
                }
                a = t;
            } else if (33 === c && 68 === e.charCodeAt(a + 2)) {
                const t = i.readDocType(e, a);
                this.entityDecoder.addInputEntities(t.entities), a = t.i;
            } else if (33 === c && 91 === e.charCodeAt(a + 2)) {
                const t = oe(e, "]]>", a, "CDATA is not closed.") - 2, i = e.substring(a + 9, t);
                n = this.saveTextToParentTag(n, r, this.readonlyMatcher);
                let o = this.parseTextData(i, r.tagname, this.readonlyMatcher, !0, !1, !0, !0);
                null == o && (o = ""), s.cdataPropName ? r.add(s.cdataPropName, [
                    {
                        [s.textNodeName]: i
                    }
                ]) : r.add(s.textNodeName, o), a = t + 2;
            } else {
                let i = ce(e, a, s.removeNSPrefix);
                if (!i) {
                    const t = e.substring(Math.max(0, a - 50), Math.min(o, a + 50));
                    throw new Error(`readTagExp returned undefined at position ${a}. Context: "${t}"`);
                }
                let c = i.tagName;
                const l = i.rawTagName;
                let u = i.tagExp, d = i.attrExpPresent, h = i.closeIndex;
                if ({ tagName: c, tagExp: u } = de(s.transformTagName, c, u, s), s.strictReservedNames && (c === s.commentPropName || c === s.cdataPropName || c === s.textNodeName || c === s.attributesGroupName)) throw new Error(`Invalid tag name: ${c}`);
                r && n && "!xml" !== r.tagname && (n = this.saveTextToParentTag(n, r, this.readonlyMatcher, !1));
                const f = r;
                f && s.unpairedTagsSet.has(f.tagname) && (r = this.tagsNodeStack.pop(), this.matcher.pop());
                let p = !1;
                u.length > 0 && u.lastIndexOf("/") === u.length - 1 && (p = !0, "/" === c[c.length - 1] ? (c = c.substr(0, c.length - 1), u = c) : u = u.substr(0, u.length - 1), d = c !== u);
                let g, m = null, y = {};
                g = X(l), c !== t.tagname && this.matcher.push(c, {}, g), c !== u && d && (m = this.buildAttributesMap(u, this.matcher, c), m && (y = Q(m, s))), c !== t.tagname && (this.isCurrentNodeStopNode = this.isItStopNode());
                const w = a;
                if (this.isCurrentNodeStopNode) {
                    let t = "";
                    if (p) a = i.closeIndex;
                    else if (s.unpairedTagsSet.has(c)) a = i.closeIndex;
                    else {
                        const r = this.readStopNodeData(e, l, h + 1);
                        if (!r) throw new Error(`Unexpected end of ${l}`);
                        a = r.i, t = r.tagContent;
                    }
                    const n = new v(c);
                    m && (n[":@"] = m), n.add(s.textNodeName, t), this.matcher.pop(), this.isCurrentNodeStopNode = !1, this.addChild(r, n, this.readonlyMatcher, w);
                } else {
                    if (p) {
                        ({ tagName: c, tagExp: u } = de(s.transformTagName, c, u, s));
                        const e = new v(c);
                        m && (e[":@"] = m), this.addChild(r, e, this.readonlyMatcher, w), this.matcher.pop(), this.isCurrentNodeStopNode = !1;
                    } else {
                        if (s.unpairedTagsSet.has(c)) {
                            const e = new v(c);
                            m && (e[":@"] = m), this.addChild(r, e, this.readonlyMatcher, w), this.matcher.pop(), this.isCurrentNodeStopNode = !1, a = i.closeIndex;
                            continue;
                        }
                        {
                            const e = new v(c);
                            if (this.tagsNodeStack.length > s.maxNestedTags) throw new Error("Maximum nested tags exceeded");
                            this.tagsNodeStack.push(r), m && (e[":@"] = m), this.addChild(r, e, this.readonlyMatcher, w), r = e;
                        }
                    }
                    n = "", a = h;
                }
            }
        } else n += e[a];
    }
    return t.child;
};
function re(e, t, r, n) {
    this.options.captureMetaData || (n = void 0);
    const s = this.options.jPath ? r.toString() : r, i = this.options.updateTag(t.tagname, s, t[":@"]);
    !1 === i || ("string" == typeof i ? (t.tagname = i, e.addChild(t, n)) : e.addChild(t, n));
}
function ne(e, t, r) {
    const n = this.options.processEntities;
    if (!n || !n.enabled) return e;
    if (n.allowedTags) {
        const s = this.options.jPath ? r.toString() : r;
        if (!(Array.isArray(n.allowedTags) ? n.allowedTags.includes(t) : n.allowedTags(t, s))) return e;
    }
    if (n.tagFilter) {
        const s = this.options.jPath ? r.toString() : r;
        if (!n.tagFilter(t, s)) return e;
    }
    return this.entityDecoder.decode(e);
}
function se(e, t, r, n) {
    return e && (void 0 === n && (n = 0 === t.child.length), void 0 !== (e = this.parseTextData(e, t.tagname, r, !1, !!t[":@"] && 0 !== Object.keys(t[":@"]).length, n)) && "" !== e && t.add(this.options.textNodeName, e), e = ""), e;
}
function ie() {
    return 0 !== this.stopNodeExpressionsSet.size && this.matcher.matchesAny(this.stopNodeExpressionsSet);
}
function oe(e, t, r, n) {
    const s = e.indexOf(t, r);
    if (-1 === s) throw new Error(n);
    return s + t.length - 1;
}
function ae(e, t, r, n) {
    const s = e.indexOf(t, r);
    if (-1 === s) throw new Error(n);
    return s;
}
function ce(e, t, r, n = ">") {
    const s = function(e, t, r = ">") {
        let n = 0;
        const s = e.length, i = r.charCodeAt(0), o = r.length > 1 ? r.charCodeAt(1) : -1;
        let a = "", c = t;
        for(let r = t; r < s; r++){
            const t = e.charCodeAt(r);
            if (n) t === n && (n = 0);
            else if (34 === t || 39 === t) n = t;
            else if (t === i) {
                if (-1 === o) return a += e.substring(c, r), {
                    data: a,
                    index: r
                };
                if (e.charCodeAt(r + 1) === o) return a += e.substring(c, r), {
                    data: a,
                    index: r
                };
            } else 9 !== t || n || (a += e.substring(c, r) + " ", c = r + 1);
        }
    }(e, t + 1, n);
    if (!s) return;
    let i = s.data;
    const o = s.index, a = i.search(/\s/);
    let c = i, l = !0;
    -1 !== a && (c = i.substring(0, a), i = i.substring(a + 1).trimStart());
    const u = c;
    if (r) {
        const e = c.indexOf(":");
        -1 !== e && (c = c.substr(e + 1), l = c !== s.data.substr(e + 1));
    }
    return {
        tagName: c,
        tagExp: i,
        closeIndex: o,
        attrExpPresent: l,
        rawTagName: u
    };
}
function le(e, t, r) {
    const n = r;
    let s = 1;
    const i = e.length;
    for(; r < i; r++)if ("<" === e[r]) {
        const i = e.charCodeAt(r + 1);
        if (47 === i) {
            const i = ae(e, ">", r, `${t} is not closed`);
            if (e.substring(r + 2, i).trim() === t && (s--, 0 === s)) return {
                tagContent: e.substring(n, r),
                i
            };
            r = i;
        } else if (63 === i) {
            r = oe(e, "?>", r + 1, "StopNode is not closed.");
        } else if (33 === i && 45 === e.charCodeAt(r + 2) && 45 === e.charCodeAt(r + 3)) {
            r = oe(e, "--\x3e", r + 3, "StopNode is not closed.");
        } else if (33 === i && 91 === e.charCodeAt(r + 2)) {
            r = oe(e, "]]>", r, "StopNode is not closed.") - 2;
        } else {
            const n = ce(e, r, ">");
            if (n) {
                (n && n.tagName) === t && "/" !== n.tagExp[n.tagExp.length - 1] && s++, r = n.closeIndex;
            }
        }
    }
}
function ue(e, t, r) {
    if (t && "string" == typeof e) {
        const t = e.trim();
        return "true" === t || "false" !== t && I(e, r);
    }
    return void 0 !== e ? e : "";
}
function de(e, t, r, n) {
    if (e) {
        const n = e(t);
        r === t && (r = n), t = n;
    }
    return {
        tagName: t = he(t, n),
        tagExp: r
    };
}
function he(e, t) {
    if (g.includes(e)) throw new Error(`[SECURITY] Invalid name: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);
    return p.includes(e) ? t.onDangerousProperty(e) : e;
}
const fe = v.getMetaDataSymbol();
function pe(e, t) {
    if (!e || "object" != typeof e) return {};
    if (!t) return e;
    const r = {};
    for(const n in e)if (n.startsWith(t)) {
        r[n.substring(t.length)] = e[n];
    } else r[n] = e[n];
    return r;
}
function ge(e, t, r, n) {
    return me(e, t, r, n);
}
function me(e, t, r, n) {
    let s;
    const i = {};
    for(let o = 0; o < e.length; o++){
        const a = e[o], c = ye(a);
        if (void 0 !== c && c !== t.textNodeName) {
            const e = pe(a[":@"] || {}, t.attributeNamePrefix);
            r.push(c, e);
        }
        if (c === t.textNodeName) void 0 === s ? s = a[c] : s += "" + a[c];
        else {
            if (void 0 === c) continue;
            if (a[c]) {
                let e = me(a[c], t, r, n);
                const s = Se(e, t);
                if (a[":@"] ? we(e, a[":@"], n, t) : 1 !== Object.keys(e).length || void 0 === e[t.textNodeName] || t.alwaysCreateTextNode ? 0 === Object.keys(e).length && (t.alwaysCreateTextNode ? e[t.textNodeName] = "" : e = "") : e = e[t.textNodeName], void 0 !== a[fe] && "object" == typeof e && null !== e && (e[fe] = a[fe]), void 0 !== i[c] && Object.prototype.hasOwnProperty.call(i, c)) Array.isArray(i[c]) || (i[c] = [
                    i[c]
                ]), i[c].push(e);
                else {
                    const r = t.jPath ? n.toString() : n;
                    t.isArray(c, r, s) ? i[c] = [
                        e
                    ] : i[c] = e;
                }
                void 0 !== c && c !== t.textNodeName && r.pop();
            }
        }
    }
    return "string" == typeof s ? s.length > 0 && (i[t.textNodeName] = s) : void 0 !== s && (i[t.textNodeName] = s), i;
}
function ye(e) {
    const t = Object.keys(e);
    for(let e = 0; e < t.length; e++){
        const r = t[e];
        if (":@" !== r) return r;
    }
}
function we(e, t, r, n) {
    if (t) {
        const s = Object.keys(t), i = s.length;
        for(let o = 0; o < i; o++){
            const i = s[o], a = i.startsWith(n.attributeNamePrefix) ? i.substring(n.attributeNamePrefix.length) : i, c = n.jPath ? r.toString() + "." + a : r;
            n.isArray(i, c, !0, !0) ? e[i] = [
                t[i]
            ] : e[i] = t[i];
        }
    }
}
function Se(e, t) {
    const { textNodeName: r } = t, n = Object.keys(e).length;
    return 0 === n || !(1 !== n || !e[r] && "boolean" != typeof e[r] && 0 !== e[r]);
}
const be = {
    allowBooleanAttributes: !1,
    unpairedTags: []
};
function Ee(e) {
    return " " === e || "\t" === e || "\n" === e || "\r" === e;
}
function ve(e, t) {
    const r = t;
    for(; t < e.length; t++)if ("?" == e[t] || " " == e[t]) {
        const n = e.substr(r, t - r);
        if (t > 5 && "xml" === n) return Ie("InvalidXml", "XML declaration allowed only at the start of the document.", Oe(e, t));
        if ("?" == e[t] && ">" == e[t + 1]) {
            t++;
            break;
        }
        continue;
    }
    return t;
}
function xe(e, t) {
    if (e.length > t + 5 && "-" === e[t + 1] && "-" === e[t + 2]) {
        for(t += 3; t < e.length; t++)if ("-" === e[t] && "-" === e[t + 1] && ">" === e[t + 2]) {
            t += 2;
            break;
        }
    } else if (e.length > t + 8 && "D" === e[t + 1] && "O" === e[t + 2] && "C" === e[t + 3] && "T" === e[t + 4] && "Y" === e[t + 5] && "P" === e[t + 6] && "E" === e[t + 7]) {
        let r = 1;
        for(t += 8; t < e.length; t++)if ("<" === e[t]) r++;
        else if (">" === e[t] && (r--, 0 === r)) break;
    } else if (e.length > t + 9 && "[" === e[t + 1] && "C" === e[t + 2] && "D" === e[t + 3] && "A" === e[t + 4] && "T" === e[t + 5] && "A" === e[t + 6] && "[" === e[t + 7]) {
        for(t += 8; t < e.length; t++)if ("]" === e[t] && "]" === e[t + 1] && ">" === e[t + 2]) {
            t += 2;
            break;
        }
    }
    return t;
}
const Te = '"', Ae = "'";
function Ne(e, t) {
    let r = "", n = "", s = !1;
    for(; t < e.length; t++){
        if (e[t] === Te || e[t] === Ae) "" === n ? n = e[t] : n !== e[t] || (n = "");
        else if (">" === e[t] && "" === n) {
            s = !0;
            break;
        }
        r += e[t];
    }
    return "" === n && {
        value: r,
        index: t,
        tagClosed: s
    };
}
const Ce = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
function _e(e, t) {
    const r = h(e, Ce), n = {};
    for(let e = 0; e < r.length; e++){
        if (0 === r[e][1].length) return Ie("InvalidAttr", "Attribute '" + r[e][2] + "' has no space in starting.", Me(r[e]));
        if (void 0 !== r[e][3] && void 0 === r[e][4]) return Ie("InvalidAttr", "Attribute '" + r[e][2] + "' is without value.", Me(r[e]));
        if (void 0 === r[e][3] && !t.allowBooleanAttributes) return Ie("InvalidAttr", "boolean attribute '" + r[e][2] + "' is not allowed.", Me(r[e]));
        const s = r[e][2];
        if (!De(s)) return Ie("InvalidAttr", "Attribute '" + s + "' is an invalid name.", Me(r[e]));
        if (Object.prototype.hasOwnProperty.call(n, s)) return Ie("InvalidAttr", "Attribute '" + s + "' is repeated.", Me(r[e]));
        n[s] = 1;
    }
    return !0;
}
function Re(e, t) {
    if (";" === e[++t]) return -1;
    if ("#" === e[t]) return function(e, t) {
        let r = /\d/;
        for("x" === e[t] && (t++, r = /[\da-fA-F]/); t < e.length; t++){
            if (";" === e[t]) return t;
            if (!e[t].match(r)) break;
        }
        return -1;
    }(e, ++t);
    let r = 0;
    for(; t < e.length; t++, r++)if (!(e[t].match(/\w/) && r < 20)) {
        if (";" === e[t]) break;
        return -1;
    }
    return t;
}
function Ie(e, t, r) {
    return {
        err: {
            code: e,
            msg: t,
            line: r.line || r,
            col: r.col
        }
    };
}
function De(e) {
    return f(e);
}
function ke(e) {
    return f(e);
}
function Oe(e, t) {
    const r = e.substring(0, t).split(/\r?\n/);
    return {
        line: r.length,
        col: r[r.length - 1].length + 1
    };
}
function Me(e) {
    return e.startIndex + e[1].length;
}
const Pe = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
}, $e = new Set("!?\\/[]$%{}^&*()<>|+");
function je(e) {
    if ("#" === e[0]) throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${e}"`);
    for (const t of e)if ($e.has(t)) throw new Error(`[EntityReplacer] Invalid character '${t}' in entity name: "${e}"`);
    return e;
}
function Le(...e) {
    const t = Object.create(null);
    for (const r of e)if (r) for (const e of Object.keys(r)){
        const n = r[e];
        if ("string" == typeof n) t[e] = n;
        else if (n && "object" == typeof n && void 0 !== n.val) {
            const r = n.val;
            "string" == typeof r && (t[e] = r);
        }
    }
    return t;
}
const Ue = "external", Be = "base", Fe = "all";
const ze = Object.freeze({
    allow: 0,
    leave: 1,
    remove: 2,
    throw: 3
}), Ve = new Set([
    9,
    10,
    13
]);
const He = new class {
    _limit;
    _maxTotalExpansions;
    _maxExpandedLength;
    _postCheck;
    _limitTiers;
    _numericAllowed;
    _baseMap;
    _externalMap;
    _inputMap;
    _totalExpansions;
    _expandedLength;
    _removeSet;
    _leaveSet;
    _ncrXmlVersion;
    _ncrOnLevel;
    _ncrNullLevel;
    constructor(e = {}){
        var t;
        this._limit = e.limit || {}, this._maxTotalExpansions = this._limit.maxTotalExpansions || 0, this._maxExpandedLength = this._limit.maxExpandedLength || 0, this._postCheck = "function" == typeof e.postCheck ? e.postCheck : (e)=>e, this._limitTiers = (t = this._limit.applyLimitsTo ?? Ue) && t !== Ue ? t === Fe ? new Set([
            Fe
        ]) : t === Be ? new Set([
            Be
        ]) : Array.isArray(t) ? new Set(t) : new Set([
            Ue
        ]) : new Set([
            Ue
        ]), this._numericAllowed = e.numericAllowed ?? !0, this._baseMap = Le(Pe, e.namedEntities || null), this._externalMap = Object.create(null), this._inputMap = Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this._removeSet = new Set(e.remove && Array.isArray(e.remove) ? e.remove : []), this._leaveSet = new Set(e.leave && Array.isArray(e.leave) ? e.leave : []);
        const r = function(e) {
            if (!e) return {
                xmlVersion: 1,
                onLevel: ze.allow,
                nullLevel: ze.remove
            };
            const t = 1.1 === e.xmlVersion ? 1.1 : 1, r = ze[e.onNCR ?? "allow"] ?? ze.allow, n = ze[e.nullNCR ?? "remove"] ?? ze.remove;
            return {
                xmlVersion: t,
                onLevel: r,
                nullLevel: Math.max(n, ze.remove)
            };
        }(e.ncr);
        this._ncrXmlVersion = r.xmlVersion, this._ncrOnLevel = r.onLevel, this._ncrNullLevel = r.nullLevel;
    }
    setExternalEntities(e) {
        if (e) for (const t of Object.keys(e))je(t);
        this._externalMap = Le(e);
    }
    addExternalEntity(e, t) {
        je(e), "string" == typeof t && -1 === t.indexOf("&") && (this._externalMap[e] = t);
    }
    addInputEntities(e) {
        this._totalExpansions = 0, this._expandedLength = 0, this._inputMap = Le(e);
    }
    reset() {
        return this._inputMap = Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this;
    }
    setXmlVersion(e) {
        this._ncrXmlVersion = "1.1" === e || 1.1 === e ? 1.1 : 1;
    }
    decode(e) {
        if ("string" != typeof e || 0 === e.length) return e;
        const t = e, r = [], n = e.length;
        let s = 0, i = 0;
        const o = this._maxTotalExpansions > 0, a = this._maxExpandedLength > 0, c = o || a;
        for(; i < n;){
            if (38 !== e.charCodeAt(i)) {
                i++;
                continue;
            }
            let t = i + 1;
            for(; t < n && 59 !== e.charCodeAt(t) && t - i <= 32;)t++;
            if (t >= n || 59 !== e.charCodeAt(t)) {
                i++;
                continue;
            }
            const l = e.slice(i + 1, t);
            if (0 === l.length) {
                i++;
                continue;
            }
            let u, d;
            if (this._removeSet.has(l)) u = "", void 0 === d && (d = Ue);
            else {
                if (this._leaveSet.has(l)) {
                    i++;
                    continue;
                }
                if (35 === l.charCodeAt(0)) {
                    const e = this._resolveNCR(l);
                    if (void 0 === e) {
                        i++;
                        continue;
                    }
                    u = e, d = Be;
                } else {
                    const e = this._resolveName(l);
                    u = e?.value, d = e?.tier;
                }
            }
            if (void 0 !== u) {
                if (i > s && r.push(e.slice(s, i)), r.push(u), s = t + 1, i = s, c && this._tierCounts(d)) {
                    if (o && (this._totalExpansions++, this._totalExpansions > this._maxTotalExpansions)) throw new Error(`[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`);
                    if (a) {
                        const e = u.length - (l.length + 2);
                        if (e > 0 && (this._expandedLength += e, this._expandedLength > this._maxExpandedLength)) throw new Error(`[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`);
                    }
                }
            } else i++;
        }
        s < n && r.push(e.slice(s));
        const l = 0 === r.length ? e : r.join("");
        return this._postCheck(l, t);
    }
    _tierCounts(e) {
        return !!this._limitTiers.has(Fe) || this._limitTiers.has(e);
    }
    _resolveName(e) {
        return e in this._inputMap ? {
            value: this._inputMap[e],
            tier: Ue
        } : e in this._externalMap ? {
            value: this._externalMap[e],
            tier: Ue
        } : e in this._baseMap ? {
            value: this._baseMap[e],
            tier: Be
        } : void 0;
    }
    _classifyNCR(e) {
        return 0 === e ? this._ncrNullLevel : e >= 55296 && e <= 57343 || 1 === this._ncrXmlVersion && e >= 1 && e <= 31 && !Ve.has(e) ? ze.remove : -1;
    }
    _applyNCRAction(e, t, r) {
        switch(e){
            case ze.allow:
                return String.fromCodePoint(r);
            case ze.remove:
                return "";
            case ze.leave:
                return;
            case ze.throw:
                throw new Error(`[EntityDecoder] Prohibited numeric character reference &${t}; (U+${r.toString(16).toUpperCase().padStart(4, "0")})`);
            default:
                return String.fromCodePoint(r);
        }
    }
    _resolveNCR(e) {
        const t = e.charCodeAt(1);
        let r;
        if (r = 120 === t || 88 === t ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10), Number.isNaN(r) || r < 0 || r > 1114111) return;
        const n = this._classifyNCR(r);
        if (!this._numericAllowed && n < ze.remove) return;
        const s = -1 === n ? this._ncrOnLevel : Math.max(this._ncrOnLevel, n);
        return this._applyNCRAction(s, e, r);
    }
}({
    namedEntities: {
        ...Pe,
        nbsp: " ",
        copy: "©",
        reg: "®",
        trade: "™",
        mdash: "—",
        ndash: "–",
        hellip: "…",
        laquo: "«",
        raquo: "»",
        lsquo: "‘",
        rsquo: "’",
        ldquo: "“",
        rdquo: "”",
        bull: "•",
        para: "¶",
        sect: "§",
        deg: "°",
        frac12: "½",
        frac14: "¼",
        frac34: "¾",
        cent: "¢",
        pound: "£",
        curren: "¤",
        yen: "¥",
        euro: "€",
        dollar: "$",
        fnof: "ƒ",
        inr: "₹",
        af: "؋",
        birr: "ብር",
        peso: "₱",
        rub: "₽",
        won: "₩",
        yuan: "¥",
        cedil: "¸"
    },
    numericAllowed: !0,
    limit: {
        maxTotalExpansions: 1 / 0
    },
    ncr: {
        xmlVersion: 1.1
    }
}), qe = new class {
    constructor(e){
        this.externalEntities = {}, this.options = b(e);
    }
    parse(e, t) {
        if ("string" != typeof e && e.toString) e = e.toString();
        else if ("string" != typeof e) throw new Error("XML data is accepted in String or Bytes[] form.");
        if (t) {
            !0 === t && (t = {});
            const r = function(e, t) {
                t = Object.assign({}, be, t);
                const r = [];
                let n = !1, s = !1;
                "\ufeff" === e[0] && (e = e.substr(1));
                for(let i = 0; i < e.length; i++)if ("<" === e[i] && "?" === e[i + 1]) {
                    if (i += 2, i = ve(e, i), i.err) return i;
                } else {
                    if ("<" !== e[i]) {
                        if (Ee(e[i])) continue;
                        return Ie("InvalidChar", "char '" + e[i] + "' is not expected.", Oe(e, i));
                    }
                    {
                        let o = i;
                        if (i++, "!" === e[i]) {
                            i = xe(e, i);
                            continue;
                        }
                        {
                            let a = !1;
                            "/" === e[i] && (a = !0, i++);
                            let c = "";
                            for(; i < e.length && ">" !== e[i] && " " !== e[i] && "\t" !== e[i] && "\n" !== e[i] && "\r" !== e[i]; i++)c += e[i];
                            if (c = c.trim(), "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1), i--), !ke(c)) {
                                let t;
                                return t = 0 === c.trim().length ? "Invalid space after '<'." : "Tag '" + c + "' is an invalid name.", Ie("InvalidTag", t, Oe(e, i));
                            }
                            const l = Ne(e, i);
                            if (!1 === l) return Ie("InvalidAttr", "Attributes for '" + c + "' have open quote.", Oe(e, i));
                            let u = l.value;
                            if (i = l.index, "/" === u[u.length - 1]) {
                                const r = i - u.length;
                                u = u.substring(0, u.length - 1);
                                const s = _e(u, t);
                                if (!0 !== s) return Ie(s.err.code, s.err.msg, Oe(e, r + s.err.line));
                                n = !0;
                            } else if (a) {
                                if (!l.tagClosed) return Ie("InvalidTag", "Closing tag '" + c + "' doesn't have proper closing.", Oe(e, i));
                                if (u.trim().length > 0) return Ie("InvalidTag", "Closing tag '" + c + "' can't have attributes or invalid starting.", Oe(e, o));
                                if (0 === r.length) return Ie("InvalidTag", "Closing tag '" + c + "' has not been opened.", Oe(e, o));
                                {
                                    const t = r.pop();
                                    if (c !== t.tagName) {
                                        let r = Oe(e, t.tagStartPos);
                                        return Ie("InvalidTag", "Expected closing tag '" + t.tagName + "' (opened in line " + r.line + ", col " + r.col + ") instead of closing tag '" + c + "'.", Oe(e, o));
                                    }
                                    0 == r.length && (s = !0);
                                }
                            } else {
                                const a = _e(u, t);
                                if (!0 !== a) return Ie(a.err.code, a.err.msg, Oe(e, i - u.length + a.err.line));
                                if (!0 === s) return Ie("InvalidXml", "Multiple possible root nodes found.", Oe(e, i));
                                -1 !== t.unpairedTags.indexOf(c) || r.push({
                                    tagName: c,
                                    tagStartPos: o
                                }), n = !0;
                            }
                            for(i++; i < e.length; i++)if ("<" === e[i]) {
                                if ("!" === e[i + 1]) {
                                    i++, i = xe(e, i);
                                    continue;
                                }
                                if ("?" !== e[i + 1]) break;
                                if (i = ve(e, ++i), i.err) return i;
                            } else if ("&" === e[i]) {
                                const t = Re(e, i);
                                if (-1 == t) return Ie("InvalidChar", "char '&' is not expected.", Oe(e, i));
                                i = t;
                            } else if (!0 === s && !Ee(e[i])) return Ie("InvalidXml", "Extra text at the end", Oe(e, i));
                            "<" === e[i] && i--;
                        }
                    }
                }
                return n ? 1 == r.length ? Ie("InvalidTag", "Unclosed tag '" + r[0].tagName + "'.", Oe(e, r[0].tagStartPos)) : !(r.length > 0) || Ie("InvalidXml", "Invalid '" + JSON.stringify(r.map((e)=>e.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
                    line: 1,
                    col: 1
                }) : Ie("InvalidXml", "Start tag expected.", 1);
            }(e, t);
            if (!0 !== r) throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`);
        }
        const r = new K(this.options, this.externalEntities), n = r.parseXml(e);
        return this.options.preserveOrder || void 0 === n ? n : ge(n, this.options, r.matcher, r.readonlyMatcher);
    }
    addEntity(e, t) {
        if (-1 !== t.indexOf("&")) throw new Error("Entity value can't have '&'");
        if (-1 !== e.indexOf("&") || -1 !== e.indexOf(";")) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        if ("&" === t) throw new Error("An entity with value '&' is not permitted");
        this.externalEntities[e] = t;
    }
    static getMetaDataSymbol() {
        return v.getMetaDataSymbol();
    }
}({
    attributeNamePrefix: "",
    processEntities: {
        enabled: !0,
        maxTotalExpansions: 1 / 0
    },
    htmlEntities: !0,
    entityDecoder: {
        setExternalEntities: (e)=>{
            He.setExternalEntities(e);
        },
        addInputEntities: (e)=>{
            He.addInputEntities(e);
        },
        reset: ()=>{
            He.reset();
        },
        decode: (e)=>He.decode(e),
        setXmlVersion: (e)=>{}
    },
    ignoreAttributes: !1,
    ignoreDeclaration: !0,
    parseTagValue: !1,
    trimValues: !1,
    tagValueProcessor: (e, t)=>"" === t.trim() && t.includes("\n") ? "" : void 0,
    maxNestedTags: 1 / 0
});
function We(e) {
    return qe.parse(e, !0);
}
