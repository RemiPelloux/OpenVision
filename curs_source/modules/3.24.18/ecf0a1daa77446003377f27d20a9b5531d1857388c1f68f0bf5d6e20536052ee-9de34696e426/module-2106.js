var s = require("./module-283.js"), n = require("./module-4913.js");
module.exports = function(t, e, i) {
    return i.get && s(i.get, e, {
        getter: !0
    }), i.set && s(i.set, e, {
        setter: !0
    }), n.f(t, e, i);
};
