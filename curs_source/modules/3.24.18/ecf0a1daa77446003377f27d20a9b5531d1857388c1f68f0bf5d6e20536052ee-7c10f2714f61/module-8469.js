var s = require("./module-9504.js"), n = require("./module-507.js"), r = require("./module-4402.js"), a = r.Set, o = r.proto, l = s(o.forEach), h = s(o.keys), c = h(new a).next;
module.exports = function(t, e, i) {
    return i ? n({
        iterator: h(t),
        next: c
    }, e) : l(t, e);
};
