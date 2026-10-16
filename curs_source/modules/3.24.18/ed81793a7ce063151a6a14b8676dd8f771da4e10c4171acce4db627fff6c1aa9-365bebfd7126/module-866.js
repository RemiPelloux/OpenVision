var n = require("./module-6881.js"), o = require("./module-5234.js"), i = require("./module-4188.js"), a = require("./module-5438.js"), u = require("./module-5604.js"), s = require("./module-3029.js"), c = function() {}, f = u("Reflect", "construct"), h = /^\s*(?:class|function)\b/, l = n(h.exec), p = !h.test(c), v = function(t) {
    if (!i(t)) return !1;
    try {
        return f(c, [], t), !0;
    } catch (t) {
        return !1;
    }
}, d = function(t) {
    if (!i(t)) return !1;
    switch(a(t)){
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
            return !1;
    }
    try {
        return p || !!l(h, s(t));
    } catch (t) {
        return !0;
    }
};
d.sham = !0, module.exports = !f || o(function() {
    var t;
    return v(v.call) || !v(Object) || !v(function() {
        t = !0;
    }) || t;
}) ? d : v;
