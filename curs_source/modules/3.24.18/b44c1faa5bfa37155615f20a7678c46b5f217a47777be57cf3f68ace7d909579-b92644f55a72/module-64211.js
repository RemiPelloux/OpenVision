"use strict";
const n = require("./module-58334.js"), s = require("./module-3482.js"), o = require("./module-40213.js");
function i(e) {
    return "\n" !== e.slice(-1) ? e + "\n" : e;
}
module.exports = function(e, t, r) {
    if (null == t && null == r) switch(n(e)){
        case "object":
            t = e.data, r = {};
            break;
        case "string":
            return e;
        default:
            throw new TypeError("expected file to be a string or object");
    }
    const a = e.content, c = o(r);
    if (null == t) {
        if (!c.data) return e;
        t = c.data;
    }
    const l = e.language || c.language, u = s(l, c);
    if ("function" != typeof u.stringify) throw new TypeError('expected "' + l + '.stringify" to be a function');
    t = Object.assign({}, e.data, t);
    const d = c.delimiters[0], p = c.delimiters[1], m = u.stringify(t, r).trim();
    let h = "";
    return "{}" !== m && (h = i(d) + i(m) + i(p)), "string" == typeof e.excerpt && "" !== e.excerpt && -1 === a.indexOf(e.excerpt.trim()) && (h += i(e.excerpt) + i(p)), h + i(a);
};
