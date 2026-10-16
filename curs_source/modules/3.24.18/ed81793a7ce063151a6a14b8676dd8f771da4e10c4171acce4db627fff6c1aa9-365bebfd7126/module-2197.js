var r = TypeError;
module.exports = function(t) {
    if (t > 9007199254740991) throw new r("Maximum allowed index exceeded");
    return t;
};
