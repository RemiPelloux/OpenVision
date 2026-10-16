var classof = require("./module-6955.js");
module.exports = function(it) {
    var klass = classof(it);
    return klass === "BigInt64Array" || klass === "BigUint64Array";
};
