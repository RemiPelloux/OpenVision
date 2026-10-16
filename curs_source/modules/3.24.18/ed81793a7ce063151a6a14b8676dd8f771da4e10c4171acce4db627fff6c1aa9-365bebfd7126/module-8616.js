var r = RangeError;
module.exports = function(t) {
    if (t == t) return t;
    throw new r("NaN is not allowed");
};
