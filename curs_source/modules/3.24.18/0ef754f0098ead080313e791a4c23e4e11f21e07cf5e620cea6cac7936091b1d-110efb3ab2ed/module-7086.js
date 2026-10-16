module.exports = function e(a, n) {
    if (a && n) return e(a)(n);
    if ("function" != typeof a) throw new TypeError("need wrapper function");
    return Object.keys(a).forEach(function(e) {
        t[e] = a[e];
    }), t;
    function t() {
        for(var e = new Array(arguments.length), n = 0; n < e.length; n++)e[n] = arguments[n];
        var t = a.apply(this, e), s = e[e.length - 1];
        return "function" == typeof t && t !== s && Object.keys(s).forEach(function(e) {
            t[e] = s[e];
        }), t;
    }
};
