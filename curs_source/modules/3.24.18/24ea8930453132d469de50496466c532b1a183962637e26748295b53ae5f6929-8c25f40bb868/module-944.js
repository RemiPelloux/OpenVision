var $TypeError = TypeError;
module.exports = function(options) {
    var alphabet = options && options.alphabet;
    if (alphabet === void 0 || alphabet === "base64" || alphabet === "base64url") return alphabet || "base64";
    throw new $TypeError("Incorrect `alphabet` option");
};
