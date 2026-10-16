var $ = require("./module-6518.js");
var iterate = require("./module-2652.js");
var aCallable = require("./module-9306.js");
var anObject = require("./module-8551.js");
var getIteratorDirect = require("./module-1767.js");
var iteratorClose = require("./module-9539.js");
var iteratorHelperWithoutClosingOnEarlyError = require("./module-4549.js");
var apply = require("./module-8745.js");
var fails = require("./module-9039.js");
var $TypeError = TypeError;
var FAILS_ON_INITIAL_UNDEFINED = fails(function() {
    [].keys().reduce(function() {}, void 0);
});
var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError("reduce", $TypeError);
$({
    target: "Iterator",
    proto: true,
    real: true,
    forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError
}, {
    reduce: function reduce(reducer) {
        anObject(this);
        try {
            aCallable(reducer);
        } catch (error) {
            iteratorClose(this, "throw", error);
        }
        var noInitial = arguments.length < 2;
        var accumulator = noInitial ? void 0 : arguments[1];
        if (reduceWithoutClosingOnEarlyError) {
            return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [
                reducer
            ] : [
                reducer,
                accumulator
            ]);
        }
        var record = getIteratorDirect(this);
        var counter = 0;
        iterate(record, function(value) {
            if (noInitial) {
                noInitial = false;
                accumulator = value;
            } else {
                accumulator = reducer(accumulator, value, counter);
            }
            counter++;
        }, {
            IS_RECORD: true
        });
        if (noInitial) throw new $TypeError("Reduce of empty iterator with no initial value");
        return accumulator;
    }
});
