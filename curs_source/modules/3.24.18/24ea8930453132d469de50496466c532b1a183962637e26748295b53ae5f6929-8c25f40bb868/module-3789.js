var aCallable = require("./module-9306.js");
var anObject = require("./module-8551.js");
var call = require("./module-9565.js");
var toIntegerOrInfinity = require("./module-1291.js");
var getIteratorDirect = require("./module-1767.js");
var INVALID_SIZE = "Invalid size";
var $RangeError = RangeError;
var $TypeError = TypeError;
var max = Math.max;
var SetRecord = function(set, intSize) {
    this.set = set;
    this.size = max(intSize, 0);
    this.has = aCallable(set.has);
    this.keys = aCallable(set.keys);
};
SetRecord.prototype = {
    getIterator: function() {
        return getIteratorDirect(anObject(call(this.keys, this.set)));
    },
    includes: function(it) {
        return call(this.has, this.set, it);
    }
};
module.exports = function(obj) {
    anObject(obj);
    var numSize = +obj.size;
    if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
    var intSize = toIntegerOrInfinity(numSize);
    if (intSize < 0) throw new $RangeError(INVALID_SIZE);
    return new SetRecord(obj, intSize);
};
