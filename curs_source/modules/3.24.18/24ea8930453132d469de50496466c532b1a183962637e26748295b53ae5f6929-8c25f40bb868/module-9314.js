var $ = require("./module-6518.js");
var call = require("./module-9565.js");
var anObject = require("./module-8551.js");
var getIteratorDirect = require("./module-1767.js");
var notANaN = require("./module-4149.js");
var toPositiveInteger = require("./module-9590.js");
var iteratorClose = require("./module-9539.js");
var createIteratorProxy = require("./module-9462.js");
var iteratorHelperThrowsOnInvalidIterator = require("./module-684.js");
var iteratorHelperWithoutClosingOnEarlyError = require("./module-4549.js");
var IS_PURE = require("./module-6395.js");
var DROP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("drop", 0);
var dropWithoutClosingOnEarlyError = !IS_PURE && !DROP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("drop", RangeError);
var FORCED = IS_PURE || DROP_WITHOUT_THROWING_ON_INVALID_ITERATOR || dropWithoutClosingOnEarlyError;
var IteratorProxy = createIteratorProxy(function() {
    var iterator = this.iterator;
    var next = this.next;
    var result, done;
    while(this.remaining){
        this.remaining--;
        result = anObject(call(next, iterator));
        done = this.done = !!result.done;
        if (done) return;
    }
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (!done) return result.value;
});
$({
    target: "Iterator",
    proto: true,
    real: true,
    forced: FORCED
}, {
    drop: function drop(limit) {
        anObject(this);
        var remaining;
        try {
            remaining = toPositiveInteger(notANaN(+limit));
        } catch (error) {
            iteratorClose(this, "throw", error);
        }
        if (dropWithoutClosingOnEarlyError) return call(dropWithoutClosingOnEarlyError, this, remaining);
        return new IteratorProxy(getIteratorDirect(this), {
            remaining
        });
    }
});
