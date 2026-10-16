"use strict";
const n = require("./module-40213.js");
module.exports = function(e, t) {
    const r = n(t);
    if (null == e.data && (e.data = {}), "function" == typeof r.excerpt) return r.excerpt(e, r);
    const s = e.data.excerpt_separator || r.excerpt_separator;
    if (null == s && (!1 === r.excerpt || null == r.excerpt)) return e;
    const o = "string" == typeof r.excerpt ? r.excerpt : s || r.delimiters[0], i = e.content.indexOf(o);
    return -1 !== i && (e.excerpt = e.content.slice(0, i)), e;
};
