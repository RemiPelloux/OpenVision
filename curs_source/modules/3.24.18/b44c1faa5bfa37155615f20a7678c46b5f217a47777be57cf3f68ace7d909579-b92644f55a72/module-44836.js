"use strict";
var n = require("./module-58334.js"), s = require("./module-76966.js");
function o(e, t) {
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
    }(e), a = s({}, {
        section_delimiter: "---",
        parse: i
    }, t), c = a.section_delimiter, l = r.content.split(/\r?\n/), u = null, d = {
        key: "",
        data: "",
        content: ""
    }, p = [], m = [];
    function h(e) {
        r.content = e, u = [], p = [];
    }
    function f(e) {
        m.length && (d.key = function(e, t) {
            return e ? e.slice(t.length).trim() : "";
        }(m[0], c), d.content = e, a.parse(d, u), u.push(d), d = {
            key: "",
            data: "",
            content: ""
        }, p = [], m = []);
    }
    for(var g = 0; g < l.length; g++){
        var y = l[g], w = m.length, v = y.trim();
        if (o(v, c)) {
            if (3 === v.length && 0 !== g) {
                if (0 === w || 2 === w) {
                    p.push(y);
                    continue;
                }
                m.push(v), d.data = p.join("\n"), p = [];
                continue;
            }
            null === u && h(p.join("\n")), 2 === w && f(p.join("\n")), m.push(v);
        } else p.push(y);
    }
    return null === u ? h(p.join("\n")) : f(p.join("\n")), r.sections = u, r;
};
