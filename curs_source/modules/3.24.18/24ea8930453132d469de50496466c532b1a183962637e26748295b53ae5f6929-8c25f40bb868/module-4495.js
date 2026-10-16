var V8_VERSION = require("./module-9519.js");
var fails = require("./module-9039.js");
var globalThis2 = require("./module-4576.js");
var $String = globalThis2.String;
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol("symbol detection");
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});
