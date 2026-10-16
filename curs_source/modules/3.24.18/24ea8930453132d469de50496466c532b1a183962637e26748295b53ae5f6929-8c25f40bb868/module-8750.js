var aSet = require("./module-7080.js");
var SetHelpers = require("./module-4402.js");
var size = require("./module-5170.js");
var getSetRecord = require("./module-3789.js");
var iterateSet = require("./module-8469.js");
var iterateSimple = require("./module-507.js");
var Set2 = SetHelpers.Set;
var add = SetHelpers.add;
var has = SetHelpers.has;
module.exports = function intersection(other) {
    var O = aSet(this);
    var otherRec = getSetRecord(other);
    var result = new Set2();
    if (size(O) > otherRec.size) {
        iterateSimple(otherRec.getIterator(), function(e) {
            if (has(O, e)) add(result, e);
        });
    } else {
        iterateSet(O, function(e) {
            if (otherRec.includes(e)) add(result, e);
        });
    }
    return result;
};
