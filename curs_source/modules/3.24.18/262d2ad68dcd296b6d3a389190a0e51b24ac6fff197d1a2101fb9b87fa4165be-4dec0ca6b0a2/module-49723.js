"use strict";
const n = require("./module-62594.js");
module.exports = function(e, t) {
    const r = n(t);
    if (null == e.data && (e.data = {}), "function" == typeof r.excerpt) return r.excerpt(e, r);
    const o = e.data.excerpt_separator || r.excerpt_separator;
    if (null == o && (!1 === r.excerpt || null == r.excerpt)) return e;
    const s = "string" == typeof r.excerpt ? r.excerpt : o || r.delimiters[0], i = e.content.indexOf(s);
    return -1 !== i && (e.excerpt = e.content.slice(0, i)), e;
};
