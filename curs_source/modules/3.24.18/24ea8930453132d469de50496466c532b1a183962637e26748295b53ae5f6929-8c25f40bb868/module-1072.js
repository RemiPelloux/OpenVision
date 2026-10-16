var internalObjectKeys = require("./module-1828.js");
var enumBugKeys = require("./module-8727.js");
module.exports = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
};
