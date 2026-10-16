var classof = require("./module-6955.js");
var getMethod = require("./module-5966.js");
var isNullOrUndefined = require("./module-4117.js");
var Iterators = require("./module-6269.js");
var wellKnownSymbol = require("./module-8227.js");
var ITERATOR = wellKnownSymbol("iterator");
module.exports = function(it) {
    if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
};
