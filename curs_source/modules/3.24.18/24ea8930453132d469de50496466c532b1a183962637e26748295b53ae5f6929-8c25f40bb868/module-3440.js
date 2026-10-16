var aSet = require("./module-7080.js");
var SetHelpers = require("./module-4402.js");
var clone = require("./module-9286.js");
var size = require("./module-5170.js");
var getSetRecord = require("./module-3789.js");
var iterateSet = require("./module-8469.js");
var iterateSimple = require("./module-507.js");
var has = SetHelpers.has;
var remove = SetHelpers.remove;
module.exports = function difference(other) {
    var O = aSet(this);
    var otherRec = getSetRecord(other);
    var result = clone(O);
    if (size(O) <= otherRec.size) iterateSet(O, function(e) {
        if (otherRec.includes(e)) remove(result, e);
    });
    else iterateSimple(otherRec.getIterator(), function(e) {
        if (has(result, e)) remove(result, e);
    });
    return result;
};
