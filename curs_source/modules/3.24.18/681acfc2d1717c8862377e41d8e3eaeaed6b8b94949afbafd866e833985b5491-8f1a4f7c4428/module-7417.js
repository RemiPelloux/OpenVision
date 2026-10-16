var n = require("./module-7740.js"), r = n.ARRAY_BUFFER_SUPPORT, o = n.SYMBOL_SUPPORT;
module.exports = function(e, t) {
    var A, n, s, i, a;
    if (!e) throw new Error("obliterator/forEach: invalid iterable.");
    if ("function" != typeof t) throw new Error("obliterator/forEach: expecting a callback.");
    if (Array.isArray(e) || r && ArrayBuffer.isView(e) || "string" == typeof e || "[object Arguments]" === e.toString()) for(s = 0, i = e.length; s < i; s++)t(e[s], s);
    else if ("function" != typeof e.forEach) if (o && Symbol.iterator in e && "function" != typeof e.next && (e = e[Symbol.iterator]()), "function" != typeof e.next) for(n in e)e.hasOwnProperty(n) && t(e[n], n);
    else for(A = e, s = 0; !0 !== (a = A.next()).done;)t(a.value, s), s++;
    else e.forEach(t);
};
