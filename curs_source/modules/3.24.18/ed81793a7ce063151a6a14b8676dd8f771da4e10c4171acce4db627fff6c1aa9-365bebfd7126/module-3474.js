var n, o, i, a, u = require("./module-9117.js"), s = require("./module-646.js"), c = require("./module-5821.js"), f = require("./module-4188.js"), h = require("./module-4418.js"), l = require("./module-5234.js"), p = require("./module-7458.js"), v = require("./module-7825.js"), d = require("./module-5926.js"), g = require("./module-9445.js"), y = require("./module-6347.js"), w = require("./module-3940.js"), x = u.setImmediate, m = u.clearImmediate, b = u.process, S = u.Dispatch, O = u.Function, E = u.MessageChannel, R = u.String, P = 0, j = {}, k = "onreadystatechange";
l(function() {
    n = u.location;
});
var I = function(t) {
    if (h(j, t)) {
        var r = j[t];
        delete j[t], r();
    }
}, T = function(t) {
    return function() {
        I(t);
    };
}, A = function(t) {
    I(t.data);
}, L = function(t) {
    u.postMessage(R(t), n.protocol + "//" + n.host);
};
x && m || (x = function(t) {
    g(arguments.length, 1);
    var r = f(t) ? t : O(t), e = v(arguments, 1);
    return j[++P] = function() {
        s(r, void 0, e);
    }, o(P), P;
}, m = function(t) {
    delete j[t];
}, w ? o = function(t) {
    b.nextTick(T(t));
} : S && S.now ? o = function(t) {
    S.now(T(t));
} : E && !y ? (a = (i = new E).port2, i.port1.onmessage = A, o = c(a.postMessage, a)) : u.addEventListener && f(u.postMessage) && !u.importScripts && n && "file:" !== n.protocol && !l(L) ? (o = L, u.addEventListener("message", A, !1)) : o = k in d("script") ? function(t) {
    p.appendChild(d("script"))[k] = function() {
        p.removeChild(this), I(t);
    };
} : function(t) {
    setTimeout(T(t), 0);
}), module.exports = {
    set: x,
    clear: m
};
