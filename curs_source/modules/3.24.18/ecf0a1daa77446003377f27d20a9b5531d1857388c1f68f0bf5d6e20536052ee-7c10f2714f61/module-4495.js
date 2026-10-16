var s = require("./module-9519.js"), n = require("./module-9039.js"), r = require("./module-4576.js").String;
module.exports = !!Object.getOwnPropertySymbols && !n(function() {
    var t = Symbol("symbol detection");
    return !r(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && s && s < 41;
});
