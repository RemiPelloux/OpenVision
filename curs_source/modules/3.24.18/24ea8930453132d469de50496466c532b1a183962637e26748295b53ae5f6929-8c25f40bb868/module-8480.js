var internalObjectKeys = require("./module-1828.js");
var enumBugKeys = require("./module-8727.js");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};
