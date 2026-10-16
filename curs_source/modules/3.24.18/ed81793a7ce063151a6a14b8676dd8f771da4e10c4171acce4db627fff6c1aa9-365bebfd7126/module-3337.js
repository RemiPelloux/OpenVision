var n, o, i = require("./module-9117.js"), a = require("./module-2694.js"), u = require("./module-4188.js"), s = require("./module-7065.js"), c = require("./module-1786.js"), f = require("./module-7509.js"), h = require("./module-4282.js"), l = require("./module-1942.js"), p = "USE_FUNCTION_CONSTRUCTOR", v = h("asyncIterator"), d = i.AsyncIterator, g = a.AsyncIteratorPrototype;
if (g) n = g;
else if (u(d)) n = d.prototype;
else if (a[p] || i[p]) try {
    o = c(c(c(Function("return async function*(){}()")()))), c(o) === Object.prototype && (n = o);
} catch (t) {}
n ? l && (n = s(n)) : n = {}, u(n[v]) || f(n, v, function() {
    return this;
}), module.exports = n;
