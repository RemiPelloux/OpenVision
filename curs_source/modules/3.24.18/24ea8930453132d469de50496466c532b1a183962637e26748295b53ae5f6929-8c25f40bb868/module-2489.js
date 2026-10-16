var $ = require("./module-6518.js");
var call = require("./module-9565.js");
var aCallable = require("./module-9306.js");
var anObject = require("./module-8551.js");
var getIteratorDirect = require("./module-1767.js");
var createIteratorProxy = require("./module-9462.js");
var callWithSafeIterationClosing = require("./module-6319.js");
var IS_PURE = require("./module-6395.js");
var iteratorClose = require("./module-9539.js");
var iteratorHelperThrowsOnInvalidIterator = require("./module-684.js");
var iteratorHelperWithoutClosingOnEarlyError = require("./module-4549.js");
var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("filter", function() {});
var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("filter", TypeError);
var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;
var IteratorProxy = createIteratorProxy(function() {
    var iterator = this.iterator;
    var predicate = this.predicate;
    var next = this.next;
    var result, done, value;
    while(true){
        result = anObject(call(next, iterator));
        done = this.done = !!result.done;
        if (done) return;
        value = result.value;
        if (callWithSafeIterationClosing(iterator, predicate, [
            value,
            this.counter++
        ], true)) return value;
    }
});
$({
    target: "Iterator",
    proto: true,
    real: true,
    forced: FORCED
}, {
    filter: function filter(predicate) {
        anObject(this);
        try {
            aCallable(predicate);
        } catch (error) {
            iteratorClose(this, "throw", error);
        }
        if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);
        return new IteratorProxy(getIteratorDirect(this), {
            predicate
        });
    }
});
