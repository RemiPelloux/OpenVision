var globalThis2 = require("./module-4576.js");
var IS_NODE = require("./module-6193.js");
module.exports = function(name) {
    if (IS_NODE) {
        try {
            return globalThis2.process.getBuiltinModule(name);
        } catch (error) {}
        try {
            return Function('return require("' + name + '")')();
        } catch (error) {}
    }
};
