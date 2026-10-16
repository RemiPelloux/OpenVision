"use strict";
const n = require("./module-79896.js"), s = require("./module-44836.js"), o = require("./module-40213.js"), i = require("./module-64211.js"), a = require("./module-49723.js"), c = require("./module-81129.js"), l = require("./module-71096.js"), u = require("./module-34333.js"), d = require("./module-49727.js");
function p(e, t) {
    if ("" === e) return {
        data: {},
        content: e,
        excerpt: "",
        orig: e
    };
    let r = l(e);
    const n = p.cache[r.content];
    if (!t) {
        if (n) return r = Object.assign({}, n), r.orig = n.orig, r;
        p.cache[r.content] = r;
    }
    return function(e, t) {
        const r = o(t), n = r.delimiters[0], i = "\n" + r.delimiters[1];
        let c = e.content;
        r.language && (e.language = r.language);
        const l = n.length;
        if (!d.startsWith(c, n, l)) return a(e, r), e;
        if (c.charAt(l) === n.slice(-1)) return e;
        c = c.slice(l);
        const m = c.length, h = p.language(c, r);
        h.name && (e.language = h.name, c = c.slice(h.raw.length));
        let f = c.indexOf(i);
        -1 === f && (f = m);
        e.matter = c.slice(0, f);
        const g = e.matter.replace(/^\s*#[^\n]+/gm, "").trim();
        "" === g ? (e.isEmpty = !0, e.empty = e.content, e.data = {}) : e.data = u(e.language, e.matter, r);
        f === m ? e.content = "" : (e.content = c.slice(f + i.length), "\r" === e.content[0] && (e.content = e.content.slice(1)), "\n" === e.content[0] && (e.content = e.content.slice(1)));
        a(e, r), (!0 === r.sections || "function" == typeof r.section) && s(e, r.section);
        return e;
    }(r, t);
}
p.engines = c, p.stringify = function(e, t, r) {
    return "string" == typeof e && (e = p(e, r)), i(e, t, r);
}, p.read = function(e, t) {
    const r = p(n.readFileSync(e, "utf8"), t);
    return r.path = e, r;
}, p.test = function(e, t) {
    return d.startsWith(e, o(t).delimiters[0]);
}, p.language = function(e, t) {
    const r = o(t).delimiters[0];
    p.test(e) && (e = e.slice(r.length));
    const n = e.slice(0, e.search(/\r?\n/));
    return {
        raw: n,
        name: n ? n.trim() : ""
    };
}, p.cache = {}, p.clearCache = function() {
    p.cache = {};
}, module.exports = p;
