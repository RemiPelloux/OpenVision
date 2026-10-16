"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSchemaRefs = exports.resolveUrl = exports.normalizeId = exports._getFullPath = exports.getFullPath = exports.inlineRef = void 0;
const n = require("./module-79657.js"), s = require("./module-66042.js"), o = require("./module-25700.js"), i = new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const"
]);
exports.inlineRef = function(e, t = !0) {
    return "boolean" == typeof e || (!0 === t ? !c(e) : !!t && l(e) <= t);
};
const a = new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
]);
function c(e) {
    for(const t in e){
        if (a.has(t)) return !0;
        const r = e[t];
        if (Array.isArray(r) && r.some(c)) return !0;
        if ("object" == typeof r && c(r)) return !0;
    }
    return !1;
}
function l(e) {
    let t = 0;
    for(const r in e){
        if ("$ref" === r) return 1 / 0;
        if (t++, !i.has(r) && ("object" == typeof e[r] && (0, n.eachItem)(e[r], (e)=>t += l(e)), t === 1 / 0)) return 1 / 0;
    }
    return t;
}
function u(e, t = "", r) {
    !1 !== r && (t = m(t));
    const n = e.parse(t);
    return d(e, n);
}
function d(e, t) {
    return e.serialize(t).split("#")[0] + "#";
}
exports.getFullPath = u, exports._getFullPath = d;
const p = /#\/?$/;
function m(e) {
    return e ? e.replace(p, "") : "";
}
exports.normalizeId = m, exports.resolveUrl = function(e, t, r) {
    return r = m(r), e.resolve(t, r);
};
const h = /^[a-z_][-a-z0-9._]*$/i;
exports.getSchemaRefs = function(e, t) {
    if ("boolean" == typeof e) return {};
    const { schemaId: r, uriResolver: n } = this.opts, i = m(e[r] || t), a = {
        "": i
    }, c = u(n, i, !1), l = {}, d = new Set;
    return o(e, {
        allKeys: !0
    }, (e, t, n, s)=>{
        if (void 0 === s) return;
        const o = c + t;
        let i = a[s];
        function u(t) {
            const r = this.opts.uriResolver.resolve;
            if (t = m(i ? r(i, t) : t), d.has(t)) throw f(t);
            d.add(t);
            let n = this.refs[t];
            return "string" == typeof n && (n = this.refs[n]), "object" == typeof n ? p(e, n.schema, t) : t !== m(o) && ("#" === t[0] ? (p(e, l[t], t), l[t] = e) : this.refs[t] = o), t;
        }
        function g(e) {
            if ("string" == typeof e) {
                if (!h.test(e)) throw new Error(`invalid anchor "${e}"`);
                u.call(this, `#${e}`);
            }
        }
        "string" == typeof e[r] && (i = u.call(this, e[r])), g.call(this, e.$anchor), g.call(this, e.$dynamicAnchor), a[t] = i;
    }), l;
    function p(e, t, r) {
        if (void 0 !== t && !s(e, t)) throw f(r);
    }
    function f(e) {
        return new Error(`reference "${e}" resolves to more than one schema`);
    }
};
