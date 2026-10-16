var n = require("./module-3008.js"), o = require("./module-5234.js"), i = require("./module-9117.js").String;
module.exports = !!Object.getOwnPropertySymbols && !o(function() {
    var t = Symbol("symbol detection");
    return !i(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && n && n < 41;
});
