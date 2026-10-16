"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSchemaRefs = exports.resolveUrl = exports.normalizeId = exports._getFullPath = exports.getFullPath = exports.inlineRef = void 0;
const n = require("./module-79657.js"), o = require("./module-66042.js"), s = require("./module-25700.js"), i = new Set([
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
    return "boolean" == typeof e || (!0 === t ? !l(e) : !!t && c(e) <= t);
};
const a = new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
]);
function l(e) {
    for(const t in e){
        if (a.has(t)) return !0;
        const r = e[t];
        if (Array.isArray(r) && r.some(l)) return !0;
        if ("object" == typeof r && l(r)) return !0;
    }
    return !1;
}
function c(e) {
    let t = 0;
    for(const r in e){
        if ("$ref" === r) return 1 / 0;
        if (t++, !i.has(r) && ("object" == typeof e[r] && (0, n.eachItem)(e[r], (e)=>t += c(e)), t === 1 / 0)) return 1 / 0;
    }
    return t;
}
function u(e, t = "", r) {
    !1 !== r && (t = h(t));
    const n = e.parse(t);
    return d(e, n);
}
function d(e, t) {
    return e.serialize(t).split("#")[0] + "#";
}
exports.getFullPath = u, exports._getFullPath = d;
const p = /#\/?$/;
function h(e) {
    return e ? e.replace(p, "") : "";
}
exports.normalizeId = h, exports.resolveUrl = function(e, t, r) {
    return r = h(r), e.resolve(t, r);
};
const m = /^[a-z_][-a-z0-9._]*$/i;
exports.getSchemaRefs = function(e, t) {
    if ("boolean" == typeof e) return {};
    const { schemaId: r, uriResolver: n } = this.opts, i = h(e[r] || t), a = {
        "": i
    }, l = u(n, i, !1), c = {}, d = new Set;
    return s(e, {
        allKeys: !0
    }, (e, t, n, o)=>{
        if (void 0 === o) return;
        const s = l + t;
        let i = a[o];
        function u(t) {
            const r = this.opts.uriResolver.resolve;
            if (t = h(i ? r(i, t) : t), d.has(t)) throw f(t);
            d.add(t);
            let n = this.refs[t];
            return "string" == typeof n && (n = this.refs[n]), "object" == typeof n ? p(e, n.schema, t) : t !== h(s) && ("#" === t[0] ? (p(e, c[t], t), c[t] = e) : this.refs[t] = s), t;
        }
        function g(e) {
            if ("string" == typeof e) {
                if (!m.test(e)) throw new Error(`invalid anchor "${e}"`);
                u.call(this, `#${e}`);
            }
        }
        "string" == typeof e[r] && (i = u.call(this, e[r])), g.call(this, e.$anchor), g.call(this, e.$dynamicAnchor), a[t] = i;
    }), c;
    function p(e, t, r) {
        if (void 0 !== t && !o(e, t)) throw f(r);
    }
    function f(e) {
        return new Error(`reference "${e}" resolves to more than one schema`);
    }
};
