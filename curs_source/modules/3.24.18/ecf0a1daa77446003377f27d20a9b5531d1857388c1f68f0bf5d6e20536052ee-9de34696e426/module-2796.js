var s = require("./module-9039.js"), n = require("./module-4901.js"), r = /#|\.prototype\./, a = function(t, e) {
    var i = l[o(t)];
    return i === c || i !== h && (n(e) ? s(e) : !!e);
}, o = a.normalize = function(t) {
    return String(t).replace(r, ".").toLowerCase();
}, l = a.data = {}, h = a.NATIVE = "N", c = a.POLYFILL = "P";
module.exports = a;
