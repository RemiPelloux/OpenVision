var call = require("./module-9565.js");
var create = require("./module-2360.js");
var createNonEnumerableProperty = require("./module-6699.js");
var defineBuiltIns = require("./module-6279.js");
var wellKnownSymbol = require("./module-8227.js");
var InternalStateModule = require("./module-1181.js");
var getMethod = require("./module-5966.js");
var IteratorPrototype = require("./module-7657.js").IteratorPrototype;
var createIterResultObject = require("./module-2529.js");
var iteratorClose = require("./module-9539.js");
var iteratorCloseAll = require("./module-1385.js");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var ITERATOR_HELPER = "IteratorHelper";
var WRAP_FOR_VALID_ITERATOR = "WrapForValidIterator";
var NORMAL = "normal";
var THROW = "throw";
var setInternalState = InternalStateModule.set;
var createIteratorProxyPrototype = function(IS_ITERATOR) {
    var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);
    return defineBuiltIns(create(IteratorPrototype), {
        next: function next() {
            var state = getInternalState(this);
            if (IS_ITERATOR) return state.nextHandler();
            if (state.done) return createIterResultObject(void 0, true);
            try {
                var result = state.nextHandler();
                return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
            } catch (error) {
                state.done = true;
                throw error;
            }
        },
        "return": function() {
            var state = getInternalState(this);
            var iterator = state.iterator;
            state.done = true;
            if (IS_ITERATOR) {
                var returnMethod = getMethod(iterator, "return");
                return returnMethod ? call(returnMethod, iterator) : createIterResultObject(void 0, true);
            }
            if (state.inner) try {
                iteratorClose(state.inner.iterator, NORMAL);
            } catch (error) {
                return iteratorClose(iterator, THROW, error);
            }
            if (state.openIters) try {
                iteratorCloseAll(state.openIters, NORMAL);
            } catch (error) {
                return iteratorClose(iterator, THROW, error);
            }
            if (iterator) iteratorClose(iterator, NORMAL);
            return createIterResultObject(void 0, true);
        }
    });
};
var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);
createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, "Iterator Helper");
module.exports = function(nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
    var IteratorProxy = function Iterator2(record, state) {
        if (state) {
            state.iterator = record.iterator;
            state.next = record.next;
        } else state = record;
        state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
        state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
        state.nextHandler = nextHandler;
        state.counter = 0;
        state.done = false;
        setInternalState(this, state);
    };
    IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;
    return IteratorProxy;
};
