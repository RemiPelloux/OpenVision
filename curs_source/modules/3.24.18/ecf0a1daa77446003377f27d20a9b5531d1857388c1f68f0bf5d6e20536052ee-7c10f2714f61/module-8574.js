var s = require("./module-9504.js"), n = Error, r = s("".replace), a = String(new n("zxcasd").stack), o = /\n\s*at [^:]*:[^\n]*/, l = o.test(a);
module.exports = function(t, e) {
    if (l && "string" == typeof t && !n.prepareStackTrace) for(; e--;)t = r(t, o, "");
    return t;
};
