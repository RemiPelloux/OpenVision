var $ = require("./module-6518.js");
var call = require("./module-9565.js");
var anObject = require("./module-8551.js");
var getIteratorDirect = require("./module-1767.js");
var notANaN = require("./module-4149.js");
var toPositiveInteger = require("./module-9590.js");
var createIteratorProxy = require("./module-9462.js");
var iteratorClose = require("./module-9539.js");
var iteratorHelperWithoutClosingOnEarlyError = require("./module-4549.js");
var IS_PURE = require("./module-6395.js");
var takeWithoutClosingOnEarlyError = !IS_PURE && iteratorHelperWithoutClosingOnEarlyError("take", RangeError);
var IteratorProxy = createIteratorProxy(function() {
    var iterator = this.iterator;
    if (!this.remaining--) {
        this.done = true;
        return iteratorClose(iterator, "normal", void 0);
    }
    var result = anObject(call(this.next, iterator));
    var done = this.done = !!result.done;
    if (!done) return result.value;
});
$({
    target: "Iterator",
    proto: true,
    real: true,
    forced: IS_PURE || takeWithoutClosingOnEarlyError
}, {
    take: function take(limit) {
        anObject(this);
        var remaining;
        try {
            remaining = toPositiveInteger(notANaN(+limit));
        } catch (error) {
            iteratorClose(this, "throw", error);
        }
        if (takeWithoutClosingOnEarlyError) return call(takeWithoutClosingOnEarlyError, this, remaining);
        return new IteratorProxy(getIteratorDirect(this), {
            remaining
        });
    }
});
