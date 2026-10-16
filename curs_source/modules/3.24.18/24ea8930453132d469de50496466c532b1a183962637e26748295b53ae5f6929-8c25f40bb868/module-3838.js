var aSet = require("./module-7080.js");
var size = require("./module-5170.js");
var iterate = require("./module-8469.js");
var getSetRecord = require("./module-3789.js");
module.exports = function isSubsetOf(other) {
    var O = aSet(this);
    var otherRec = getSetRecord(other);
    if (size(O) > otherRec.size) return false;
    return iterate(O, function(e) {
        if (!otherRec.includes(e)) return false;
    }, true) !== false;
};
