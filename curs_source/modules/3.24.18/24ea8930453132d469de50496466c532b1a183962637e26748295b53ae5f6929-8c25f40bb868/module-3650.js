var aSet = require("./module-7080.js");
var SetHelpers = require("./module-4402.js");
var clone = require("./module-9286.js");
var getSetRecord = require("./module-3789.js");
var iterateSimple = require("./module-507.js");
var add = SetHelpers.add;
var has = SetHelpers.has;
var remove = SetHelpers.remove;
module.exports = function symmetricDifference(other) {
    var O = aSet(this);
    var keysIter = getSetRecord(other).getIterator();
    var result = clone(O);
    iterateSimple(keysIter, function(e) {
        if (has(O, e)) remove(result, e);
        else add(result, e);
    });
    return result;
};
