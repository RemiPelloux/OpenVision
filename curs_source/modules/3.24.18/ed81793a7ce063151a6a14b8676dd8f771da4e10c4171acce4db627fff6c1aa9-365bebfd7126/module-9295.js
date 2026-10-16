var n = require("./module-7825.js"), o = Math.floor, i = function(t, r) {
    var e = t.length;
    if (e < 8) for(var a, u, s = 1; s < e;){
        for(u = s, a = t[s]; u && r(t[u - 1], a) > 0;)t[u] = t[--u];
        u !== s++ && (t[u] = a);
    }
    else for(var c = o(e / 2), f = i(n(t, 0, c), r), h = i(n(t, c), r), l = f.length, p = h.length, v = 0, d = 0; v < l || d < p;)t[v + d] = v < l && d < p ? r(f[v], h[d]) <= 0 ? f[v++] : h[d++] : v < l ? f[v++] : h[d++];
    return t;
};
module.exports = i;
