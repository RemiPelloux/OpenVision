var n, o, i, a, u, s = require("./module-9117.js"), c = require("./module-5268.js"), f = require("./module-5821.js"), h = require("./module-3474.js").set, l = require("./module-8648.js"), p = require("./module-6347.js"), v = require("./module-6168.js"), d = require("./module-1129.js"), g = require("./module-3940.js"), y = s.MutationObserver || s.WebKitMutationObserver, w = s.document, x = s.process, m = s.Promise, b = c("queueMicrotask");
if (!b) {
    var S = new l, O = function() {
        var t, r;
        for(g && (t = x.domain) && t.exit(); r = S.get();)try {
            r();
        } catch (t) {
            throw S.head && n(), t;
        }
        t && t.enter();
    };
    p || g || d || !y || !w ? !v && m && m.resolve ? ((a = m.resolve(void 0)).constructor = m, u = f(a.then, a), n = function() {
        u(O);
    }) : g ? n = function() {
        x.nextTick(O);
    } : (h = f(h, s), n = function() {
        h(O);
    }) : (o = !0, i = w.createTextNode(""), new y(O).observe(i, {
        characterData: !0
    }), n = function() {
        i.data = o = !o;
    }), b = function(t) {
        S.head || n(), S.add(t);
    };
}
module.exports = b;
