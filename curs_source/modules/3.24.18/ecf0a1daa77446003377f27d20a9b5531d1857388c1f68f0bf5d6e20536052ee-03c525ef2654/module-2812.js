var e = TypeError;
module.exports = function(t, i) {
    if (t < i) throw new e("Not enough arguments");
    return t;
};
