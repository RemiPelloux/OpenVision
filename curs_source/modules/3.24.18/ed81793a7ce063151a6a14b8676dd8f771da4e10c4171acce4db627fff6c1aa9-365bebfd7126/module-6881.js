var n = require("./module-9055.js"), o = Function.prototype, i = o.call, a = n && o.bind.bind(i, i);
module.exports = n ? a : function(t) {
    return function() {
        return i.apply(t, arguments);
    };
};
