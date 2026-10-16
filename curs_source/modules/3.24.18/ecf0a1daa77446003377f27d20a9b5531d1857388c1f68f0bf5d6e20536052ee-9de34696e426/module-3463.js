var e = TypeError;
module.exports = function(t) {
    if ("string" == typeof t) return t;
    throw new e("Argument is not a string");
};
