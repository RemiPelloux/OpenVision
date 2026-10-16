var uncurryThis = require("./module-9504.js");
var hasOwn = require("./module-9297.js");
var toIndexedObject = require("./module-5397.js");
var indexOf = require("./module-9617.js").indexOf;
var hiddenKeys = require("./module-421.js");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    while(names.length > i)if (hasOwn(O, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
    }
    return result;
};
