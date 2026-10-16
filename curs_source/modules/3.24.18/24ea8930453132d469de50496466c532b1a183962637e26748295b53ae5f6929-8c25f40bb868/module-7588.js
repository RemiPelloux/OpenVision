var $ = require("./module-6518.js");
var call = require("./module-9565.js");
var iterate = require("./module-2652.js");
var aCallable = require("./module-9306.js");
var anObject = require("./module-8551.js");
var getIteratorDirect = require("./module-1767.js");
var iteratorClose = require("./module-9539.js");
var iteratorHelperWithoutClosingOnEarlyError = require("./module-4549.js");
var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("forEach", TypeError);
$({
    target: "Iterator",
    proto: true,
    real: true,
    forced: forEachWithoutClosingOnEarlyError
}, {
    forEach: function forEach(fn) {
        anObject(this);
        try {
            aCallable(fn);
        } catch (error) {
            iteratorClose(this, "throw", error);
        }
        if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);
        var record = getIteratorDirect(this);
        var counter = 0;
        iterate(record, function(value) {
            fn(value, counter++);
        }, {
            IS_RECORD: true
        });
    }
});
