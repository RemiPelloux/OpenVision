var n = require("./module-5821.js"), o = require("./module-6881.js"), i = require("./module-866.js"), a = require("./module-9329.js"), u = require("./module-9042.js"), s = require("./module-6002.js"), c = require("./module-4366.js"), f = require("./module-2913.js"), h = require("./module-5604.js"), l = require("./module-2509.js"), p = require("./module-4282.js"), v = require("./module-3929.js"), d = require("./module-1636.js").toArray, g = p("asyncIterator"), y = o(l("Array", "values")), w = o(y([]).next), x = function() {
    return new m(this);
}, m = function(t) {
    this.iterator = y(t);
};
m.prototype.next = function() {
    return w(this.iterator);
}, module.exports = function(t) {
    var r = this, e = arguments.length, o = e > 1 ? arguments[1] : void 0, l = e > 2 ? arguments[2] : void 0;
    return new (h("Promise"))(function(e) {
        void 0 !== o && (o = n(o, l));
        var h = f(t, g), p = h ? void 0 : c(t) || x, y = i(r) ? new r : [], w = h ? a(t, h) : new v(s(u(t, p)));
        e(d(w, o, y));
    });
};
