var SetHelpers = require("./module-4402.js");
var iterate = require("./module-8469.js");
var Set2 = SetHelpers.Set;
var add = SetHelpers.add;
module.exports = function(set) {
    var result = new Set2();
    iterate(set, function(it) {
        add(result, it);
    });
    return result;
};
