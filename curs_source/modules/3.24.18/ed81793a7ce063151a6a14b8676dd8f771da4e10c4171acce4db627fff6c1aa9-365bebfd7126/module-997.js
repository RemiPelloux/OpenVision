var n = require("./module-4530.js"), o = require("./module-4466.js");
module.exports = function(t, r, e) {
    return e.get && n(e.get, r, {
        getter: !0
    }), e.set && n(e.set, r, {
        setter: !0
    }), o.f(t, r, e);
};
