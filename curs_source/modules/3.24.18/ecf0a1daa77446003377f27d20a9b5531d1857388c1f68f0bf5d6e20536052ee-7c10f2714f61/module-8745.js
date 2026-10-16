var s = require("./module-616.js"), n = Function.prototype, r = n.apply, a = n.call;
module.exports = "object" == typeof Reflect && Reflect.apply || (s ? a.bind(r) : function() {
    return a.apply(r, arguments);
});
