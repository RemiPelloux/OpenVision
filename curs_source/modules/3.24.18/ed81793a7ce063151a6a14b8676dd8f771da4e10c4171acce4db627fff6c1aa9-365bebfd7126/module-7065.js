var n, o = require("./module-3770.js"), i = require("./module-30.js"), a = require("./module-1274.js"), u = require("./module-7588.js"), s = require("./module-7458.js"), c = require("./module-5926.js"), f = require("./module-168.js"), h = "prototype", l = "script", p = f("IE_PROTO"), v = function() {}, d = function(t) {
    return "<" + l + ">" + t + "</" + l + ">";
}, g = function(t) {
    t.write(d("")), t.close();
    var r = t.parentWindow.Object;
    return t = null, r;
}, y = function() {
    try {
        n = new ActiveXObject("htmlfile");
    } catch (t) {}
    var t, r, e;
    y = "undefined" != typeof document ? document.domain && n ? g(n) : (r = c("iframe"), e = "java" + l + ":", r.style.display = "none", s.appendChild(r), r.src = String(e), (t = r.contentWindow.document).open(), t.write(d("document.F=Object")), t.close(), t.F) : g(n);
    for(var o = a.length; o--;)delete y[h][a[o]];
    return y();
};
u[p] = !0, module.exports = Object.create || function(t, r) {
    var e;
    return null !== t ? (v[h] = o(t), e = new v, v[h] = null, e[p] = t) : e = y(), void 0 === r ? e : i.f(e, r);
};
