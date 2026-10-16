var aSet = require("./module-7080.js");
var has = require("./module-4402.js").has;
var size = require("./module-5170.js");
var getSetRecord = require("./module-3789.js");
var iterateSimple = require("./module-507.js");
var iteratorClose = require("./module-9539.js");
module.exports = function isSupersetOf(other) {
    var O = aSet(this);
    var otherRec = getSetRecord(other);
    if (size(O) < otherRec.size) return false;
    var iterator = otherRec.getIterator();
    return iterateSimple(iterator, function(e) {
        if (!has(O, e)) return iteratorClose(iterator, "normal", false);
    }) !== false;
};
