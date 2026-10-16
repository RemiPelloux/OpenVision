"use strict";
var n, o, s = require("./module-66733.js"), i = require("./module-16928.js").extname, a = require("./module-80027.js"), l = /^\s*([^;\s]*)(?:;|\s|$)/, c = /^text\//i;
function u(e) {
    if (!e || "string" != typeof e) return !1;
    var t = l.exec(e), r = t && s[t[1].toLowerCase()];
    return r && r.charset ? r.charset : !(!t || !c.test(t[1])) && "UTF-8";
}
function d(e) {
    if (!e || "string" != typeof e) return !1;
    var r = l.exec(e), n = r && exports.extensions[r[1].toLowerCase()];
    return !(!n || !n.length) && n[0];
}
function p(e, t, r) {
    return (t ? a(t, s[t].source) : 0) > (r ? a(r, s[r].source) : 0) ? t : r;
}
function h(e, r, n) {
    var o = [
        "nginx",
        "apache",
        void 0,
        "iana"
    ], i = r ? o.indexOf(s[r].source) : 0, a = n ? o.indexOf(s[n].source) : 0;
    return "application/octet-stream" !== exports.types[d] && (i > a || i === a && "application/" === exports.types[d]?.slice(0, 12)) || i > a ? r : n;
}
exports.charset = u, exports.charsets = {
    lookup: u
}, exports.contentType = function(e) {
    if (!e || "string" != typeof e) return !1;
    var r = -1 === e.indexOf("/") ? exports.lookup(e) : e;
    if (!r) return !1;
    if (-1 === r.indexOf("charset")) {
        var n = exports.charset(r);
        n && (r += "; charset=" + n.toLowerCase());
    }
    return r;
}, exports.extension = d, exports.extensions = Object.create(null), exports.lookup = function(e) {
    if (!e || "string" != typeof e) return !1;
    var r = i("x." + e).toLowerCase().slice(1);
    if (!r) return !1;
    return exports.types[r] || !1;
}, exports.types = Object.create(null), exports._extensionConflicts = [], n = exports.extensions, o = exports.types, Object.keys(s).forEach(function(e) {
    var r = s[e].extensions;
    if (r && r.length) {
        n[e] = r;
        for(var i = 0; i < r.length; i++){
            var a = r[i];
            o[a] = p(a, o[a], e);
            const n = h(a, o[a], e);
            n !== o[a] && exports._extensionConflicts.push([
                a,
                n,
                o[a]
            ]);
        }
    }
});
