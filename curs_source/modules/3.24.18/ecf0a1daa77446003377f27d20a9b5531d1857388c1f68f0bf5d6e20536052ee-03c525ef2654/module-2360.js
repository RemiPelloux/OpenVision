var s, n = require("./module-8551.js"), r = require("./module-6801.js"), a = require("./module-8727.js"), o = require("./module-421.js"), l = require("./module-397.js"), h = require("./module-4055.js"), c = require("./module-6119.js"), d = "prototype", u = "script", p = c("IE_PROTO"), g = function() {}, m = function(t) {
    return "<" + u + ">" + t + "</" + u + ">";
}, f = function(t) {
    t.write(m("")), t.close();
    var e = t.parentWindow.Object;
    return t = null, e;
}, b = function() {
    try {
        s = new ActiveXObject("htmlfile");
    } catch (t) {}
    var t, e, i;
    b = "undefined" != typeof document ? document.domain && s ? f(s) : (e = h("iframe"), i = "java" + u + ":", e.style.display = "none", l.appendChild(e), e.src = String(i), (t = e.contentWindow.document).open(), t.write(m("document.F=Object")), t.close(), t.F) : f(s);
    for(var n = a.length; n--;)delete b[d][a[n]];
    return b();
};
o[p] = !0, module.exports = Object.create || function(t, e) {
    var i;
    return null !== t ? (g[d] = n(t), i = new g, g[d] = null, i[p] = t) : i = b(), void 0 === e ? i : r.f(i, e);
};
