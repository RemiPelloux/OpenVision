var wellKnownSymbol = require("./module-8227.js");
var Iterators = require("./module-6269.js");
var ITERATOR = wellKnownSymbol("iterator");
var ArrayPrototype = Array.prototype;
module.exports = function(it) {
    return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};
