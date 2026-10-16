var $ = require("./module-6518.js");
var call = require("./module-9565.js");
var aCallable = require("./module-9306.js");
var anObject = require("./module-8551.js");
var getIteratorDirect = require("./module-1767.js");
var getIteratorFlattenable = require("./module-8646.js");
var createIteratorProxy = require("./module-9462.js");
var iteratorClose = require("./module-9539.js");
var IS_PURE = require("./module-6395.js");
var iteratorHelperThrowsOnInvalidIterator = require("./module-684.js");
var iteratorHelperWithoutClosingOnEarlyError = require("./module-4549.js");
var FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("flatMap", function() {});
var flatMapWithoutClosingOnEarlyError = !IS_PURE && !FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("flatMap", TypeError);
var FORCED = IS_PURE || FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || flatMapWithoutClosingOnEarlyError;
var IteratorProxy = createIteratorProxy(function() {
    var iterator = this.iterator;
    var mapper = this.mapper;
    var result, inner;
    while(true){
        if (inner = this.inner) try {
            result = anObject(call(inner.next, inner.iterator));
            if (!result.done) return result.value;
            this.inner = null;
        } catch (error) {
            iteratorClose(iterator, "throw", error);
        }
        result = anObject(call(this.next, iterator));
        if (this.done = !!result.done) return;
        try {
            this.inner = getIteratorFlattenable(mapper(result.value, this.counter++), false);
        } catch (error) {
            iteratorClose(iterator, "throw", error);
        }
    }
});
$({
    target: "Iterator",
    proto: true,
    real: true,
    forced: FORCED
}, {
    flatMap: function flatMap(mapper) {
        anObject(this);
        try {
            aCallable(mapper);
        } catch (error) {
            iteratorClose(this, "throw", error);
        }
        if (flatMapWithoutClosingOnEarlyError) return call(flatMapWithoutClosingOnEarlyError, this, mapper);
        return new IteratorProxy(getIteratorDirect(this), {
            mapper,
            inner: null
        });
    }
});
