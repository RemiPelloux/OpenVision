var s = require("./module-9565.js"), n = require("./module-4901.js"), r = require("./module-34.js"), a = TypeError;
module.exports = function(t, e) {
    var i, o;
    if ("string" === e && n(i = t.toString) && !r(o = s(i, t))) return o;
    if (n(i = t.valueOf) && !r(o = s(i, t))) return o;
    if ("string" !== e && n(i = t.toString) && !r(o = s(i, t))) return o;
    throw new a("Can't convert object to primitive value");
};
