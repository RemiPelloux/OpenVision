var uncurryThis = require("./module-9504.js");
var aCallable = require("./module-9306.js");
module.exports = function(object, key, method) {
    try {
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) {}
};
