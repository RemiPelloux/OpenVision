var globalThis2 = require("./module-4576.js");
var isObject = require("./module-34.js");
var document2 = globalThis2.document;
var EXISTS = isObject(document2) && isObject(document2.createElement);
module.exports = function(it) {
    return EXISTS ? document2.createElement(it) : {};
};
