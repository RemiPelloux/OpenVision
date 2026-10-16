var n = require("./module-5691.js"), o = require("./module-4977.js"), i = require("./module-9055.js"), a = n(n.bind);
module.exports = function(t, r) {
    return o(t), void 0 === r ? t : i ? a(t, r) : function() {
        return t.apply(r, arguments);
    };
};
