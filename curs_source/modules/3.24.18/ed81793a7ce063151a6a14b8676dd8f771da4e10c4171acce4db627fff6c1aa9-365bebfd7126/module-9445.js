var r = TypeError;
module.exports = function(t, e) {
    if (t < e) throw new r("Not enough arguments");
    return t;
};
