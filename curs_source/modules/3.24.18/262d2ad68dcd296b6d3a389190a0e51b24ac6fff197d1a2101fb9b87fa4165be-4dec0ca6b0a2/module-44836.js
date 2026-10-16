"use strict";
var n = require("./module-58334.js"), o = require("./module-76966.js");
function s(e, t) {
    return e.slice(0, t.length) === t && e.charAt(t.length + 1) !== t.slice(-1);
}
function i(e) {
    return e;
}
module.exports = function(e, t) {
    "function" == typeof t && (t = {
        parse: t
    });
    var r = function(e) {
        "object" !== n(e) && (e = {
            content: e
        });
        if ("string" != typeof e.content && !function(e) {
            if (e && e.constructor && "function" == typeof e.constructor.isBuffer) return e.constructor.isBuffer(e);
            return !1;
        }(e.content)) throw new TypeError("expected a buffer or string");
        return e.content = e.content.toString(), e.sections = [], e;
    }(e), a = o({}, {
        section_delimiter: "---",
        parse: i
    }, t), l = a.section_delimiter, c = r.content.split(/\r?\n/), u = null, d = {
        key: "",
        data: "",
        content: ""
    }, p = [], h = [];
    function m(e) {
        r.content = e, u = [], p = [];
    }
    function f(e) {
        h.length && (d.key = function(e, t) {
            return e ? e.slice(t.length).trim() : "";
        }(h[0], l), d.content = e, a.parse(d, u), u.push(d), d = {
            key: "",
            data: "",
            content: ""
        }, p = [], h = []);
    }
    for(var g = 0; g < c.length; g++){
        var y = c[g], v = h.length, w = y.trim();
        if (s(w, l)) {
            if (3 === w.length && 0 !== g) {
                if (0 === v || 2 === v) {
                    p.push(y);
                    continue;
                }
                h.push(w), d.data = p.join("\n"), p = [];
                continue;
            }
            null === u && m(p.join("\n")), 2 === v && f(p.join("\n")), h.push(w);
        } else p.push(y);
    }
    return null === u ? m(p.join("\n")) : f(p.join("\n")), r.sections = u, r;
};
