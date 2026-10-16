var n = require("./module-9117.js"), o = require("./module-3940.js");
module.exports = function(t) {
    if (o) {
        try {
            return n.process.getBuiltinModule(t);
        } catch (t) {}
        try {
            return Function('return require("' + t + '")')();
        } catch (t) {}
    }
};
