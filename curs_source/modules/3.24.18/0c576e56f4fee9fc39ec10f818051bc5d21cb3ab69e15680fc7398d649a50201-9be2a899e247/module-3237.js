"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSchemaRefs = exports.resolveUrl = exports.normalizeId = exports._getFullPath = exports.getFullPath = exports.inlineRef = void 0;
const n = require("./module-9657.js"), o = require("./module-6042.js"), s = require("./module-5700.js"), i = new Set([
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
    return "boolean" == typeof e || (!0 === t ? !c(e) : !!t && u(e) <= t);
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
function u(e) {
    let t = 0;
    for(const r in e){
        if ("$ref" === r) return 1 / 0;
        if (t++, !i.has(r) && ("object" == typeof e[r] && (0, n.eachItem)(e[r], (e)=>t += u(e)), t === 1 / 0)) return 1 / 0;
    }
    return t;
}
function l(e, t = "", r) {
    !1 !== r && (t = f(t));
    const n = e.parse(t);
    return d(e, n);
}
function d(e, t) {
    return e.serialize(t).split("#")[0] + "#";
}
exports.getFullPath = l, exports._getFullPath = d;
const p = /#\/?$/;
function f(e) {
    return e ? e.replace(p, "") : "";
}
exports.normalizeId = f, exports.resolveUrl = function(e, t, r) {
    return r = f(r), e.resolve(t, r);
};
const h = /^[a-z_][-a-z0-9._]*$/i;
exports.getSchemaRefs = function(e, t) {
    if ("boolean" == typeof e) return {};
    const { schemaId: r, uriResolver: n } = this.opts, i = f(e[r] || t), a = {
        "": i
    }, c = l(n, i, !1), u = {}, d = new Set;
    return s(e, {
        allKeys: !0
    }, (e, t, n, o)=>{
        if (void 0 === o) return;
        const s = c + t;
        let i = a[o];
        function l(t) {
            const r = this.opts.uriResolver.resolve;
            if (t = f(i ? r(i, t) : t), d.has(t)) throw m(t);
            d.add(t);
            let n = this.refs[t];
            return "string" == typeof n && (n = this.refs[n]), "object" == typeof n ? p(e, n.schema, t) : t !== f(s) && ("#" === t[0] ? (p(e, u[t], t), u[t] = e) : this.refs[t] = s), t;
        }
        function g(e) {
            if ("string" == typeof e) {
                if (!h.test(e)) throw new Error(`invalid anchor "${e}"`);
                l.call(this, `#${e}`);
            }
        }
        "string" == typeof e[r] && (i = l.call(this, e[r])), g.call(this, e.$anchor), g.call(this, e.$dynamicAnchor), a[t] = i;
    }), u;
    function p(e, t, r) {
        if (void 0 !== t && !o(e, t)) throw m(r);
    }
    function m(e) {
        return new Error(`reference "${e}" resolves to more than one schema`);
    }
};
