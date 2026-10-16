var s = require("./module-616.js"), n = Function.prototype, r = n.call, a = s && n.bind.bind(r, r);
module.exports = s ? a : function(t) {
    return function() {
        return r.apply(t, arguments);
    };
};
