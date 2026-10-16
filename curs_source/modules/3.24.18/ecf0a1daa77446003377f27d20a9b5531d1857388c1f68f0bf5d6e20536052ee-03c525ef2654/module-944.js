var e = TypeError;
module.exports = function(t) {
    var i = t && t.alphabet;
    if (void 0 === i || "base64" === i || "base64url" === i) return i || "base64";
    throw new e("Incorrect `alphabet` option");
};
