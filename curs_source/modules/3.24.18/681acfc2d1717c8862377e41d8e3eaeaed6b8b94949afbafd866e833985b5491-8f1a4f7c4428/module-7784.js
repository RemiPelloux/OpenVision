function t(e, t) {
    if (!e) throw new Error(t || "Assertion failed");
}
module.exports = t, t.equal = function(e, t, A) {
    if (e != t) throw new Error(A || "Assertion failed: " + e + " != " + t);
};
