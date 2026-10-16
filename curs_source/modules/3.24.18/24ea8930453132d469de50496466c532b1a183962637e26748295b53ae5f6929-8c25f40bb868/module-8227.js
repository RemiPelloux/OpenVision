var globalThis2 = require("./module-4576.js");
var shared = require("./module-5745.js");
var hasOwn = require("./module-9297.js");
var uid = require("./module-3392.js");
var NATIVE_SYMBOL = require("./module-4495.js");
var USE_SYMBOL_AS_UID = require("./module-7040.js");
var Symbol2 = globalThis2.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
    }
    return WellKnownSymbolsStore[name];
};
