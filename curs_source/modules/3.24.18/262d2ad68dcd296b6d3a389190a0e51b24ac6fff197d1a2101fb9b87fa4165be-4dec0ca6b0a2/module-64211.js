"use strict";
const n = require("./module-58334.js"), o = require("./module-3482.js"), s = require("./module-62594.js");
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
    const a = e.content, l = s(r);
    if (null == t) {
        if (!l.data) return e;
        t = l.data;
    }
    const c = e.language || l.language, u = o(c, l);
    if ("function" != typeof u.stringify) throw new TypeError('expected "' + c + '.stringify" to be a function');
    t = Object.assign({}, e.data, t);
    const d = l.delimiters[0], p = l.delimiters[1], h = u.stringify(t, r).trim();
    let m = "";
    return "{}" !== h && (m = i(d) + i(h) + i(p)), "string" == typeof e.excerpt && "" !== e.excerpt && -1 === a.indexOf(e.excerpt.trim()) && (m += i(e.excerpt) + i(p)), m + i(a);
};
