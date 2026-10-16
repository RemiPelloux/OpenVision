var s = require("./module-7476.js"), n = require("./module-9306.js"), r = require("./module-616.js"), a = s(s.bind);
module.exports = function(t, e) {
    return n(t), void 0 === e ? t : r ? a(t, e) : function() {
        return t.apply(e, arguments);
    };
};
