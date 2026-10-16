var uncurryThisAccessor = require("./module-6706.js");
var SetHelpers = require("./module-4402.js");
module.exports = uncurryThisAccessor(SetHelpers.proto, "size", "get") || function(set) {
    return set.size;
};
