var $ = require("./module-6518.js");
var call = require("./module-9565.js");
var iterate = require("./module-2652.js");
var aCallable = require("./module-9306.js");
var anObject = require("./module-8551.js");
var getIteratorDirect = require("./module-1767.js");
var iteratorClose = require("./module-9539.js");
var iteratorHelperWithoutClosingOnEarlyError = require("./module-4549.js");
var findWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("find", TypeError);
$({
    target: "Iterator",
    proto: true,
    real: true,
    forced: findWithoutClosingOnEarlyError
}, {
    find: function find(predicate) {
        anObject(this);
        try {
            aCallable(predicate);
        } catch (error) {
            iteratorClose(this, "throw", error);
        }
        if (findWithoutClosingOnEarlyError) return call(findWithoutClosingOnEarlyError, this, predicate);
        var record = getIteratorDirect(this);
        var counter = 0;
        return iterate(record, function(value, stop) {
            if (predicate(value, counter++)) return stop(value);
        }, {
            IS_RECORD: true,
            INTERRUPTED: true
        }).result;
    }
});
