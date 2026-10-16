var s = require("./module-4576.js"), n = require("./module-6193.js");
module.exports = function(t) {
    if (n) {
        try {
            return s.process.getBuiltinModule(t);
        } catch (t) {}
        try {
            return Function('return require("' + t + '")')();
        } catch (t) {}
    }
};
