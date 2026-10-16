var n = require("./module-9055.js"), o = Function.prototype, i = o.apply, a = o.call;
module.exports = "object" == typeof Reflect && Reflect.apply || (n ? a.bind(i) : function() {
    return a.apply(i, arguments);
});
