var getBuiltIn = require("./module-7751.js");
var uncurryThis = require("./module-9504.js");
var getOwnPropertyNamesModule = require("./module-8480.js");
var getOwnPropertySymbolsModule = require("./module-3717.js");
var anObject = require("./module-8551.js");
var concat = uncurryThis([].concat);
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};
