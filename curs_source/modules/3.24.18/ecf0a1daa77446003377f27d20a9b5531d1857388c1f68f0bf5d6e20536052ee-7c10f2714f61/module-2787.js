var s = require("./module-9297.js"), n = require("./module-4901.js"), r = require("./module-8981.js"), a = require("./module-6119.js"), o = require("./module-2211.js"), l = a("IE_PROTO"), h = Object, c = h.prototype;
module.exports = o ? h.getPrototypeOf : function(t) {
    var e = r(t);
    if (s(e, l)) return e[l];
    var i = e.constructor;
    return n(i) && e instanceof i ? i.prototype : e instanceof h ? c : null;
};
