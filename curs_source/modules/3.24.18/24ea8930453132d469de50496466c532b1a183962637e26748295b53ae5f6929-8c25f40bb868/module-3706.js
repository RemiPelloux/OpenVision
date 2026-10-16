var uncurryThis = require("./module-9504.js");
var isCallable = require("./module-4901.js");
var store = require("./module-7629.js");
var functionToString = uncurryThis(Function.toString);
if (!isCallable(store.inspectSource)) {
    store.inspectSource = function(it) {
        return functionToString(it);
    };
}
module.exports = store.inspectSource;
