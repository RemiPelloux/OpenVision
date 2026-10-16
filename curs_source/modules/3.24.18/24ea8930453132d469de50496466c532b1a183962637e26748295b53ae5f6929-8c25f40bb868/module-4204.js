var aSet = require("./module-7080.js");
var add = require("./module-4402.js").add;
var clone = require("./module-9286.js");
var getSetRecord = require("./module-3789.js");
var iterateSimple = require("./module-507.js");
module.exports = function union(other) {
    var O = aSet(this);
    var keysIter = getSetRecord(other).getIterator();
    var result = clone(O);
    iterateSimple(keysIter, function(it) {
        add(result, it);
    });
    return result;
};
