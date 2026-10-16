var $ = require("./module-6518.js");
var call = require("./module-9565.js");
var aCallable = require("./module-9306.js");
var anObject = require("./module-8551.js");
var getIteratorDirect = require("./module-1767.js");
var createIteratorProxy = require("./module-9462.js");
var callWithSafeIterationClosing = require("./module-6319.js");
var iteratorClose = require("./module-9539.js");
var iteratorHelperThrowsOnInvalidIterator = require("./module-684.js");
var iteratorHelperWithoutClosingOnEarlyError = require("./module-4549.js");
var IS_PURE = require("./module-6395.js");
var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("map", function() {});
var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("map", TypeError);
var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;
var IteratorProxy = createIteratorProxy(function() {
    var iterator = this.iterator;
    var result = anObject(call(this.next, iterator));
    var done = this.done = !!result.done;
    if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [
        result.value,
        this.counter++
    ], true);
});
$({
    target: "Iterator",
    proto: true,
    real: true,
    forced: FORCED
}, {
    map: function map(mapper) {
        anObject(this);
        try {
            aCallable(mapper);
        } catch (error) {
            iteratorClose(this, "throw", error);
        }
        if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);
        return new IteratorProxy(getIteratorDirect(this), {
            mapper
        });
    }
});
