var $ = require("./module-6518.js");
var globalThis2 = require("./module-4576.js");
var getBuiltIn = require("./module-7751.js");
var createPropertyDescriptor = require("./module-6980.js");
var defineProperty = require("./module-4913.js").f;
var hasOwn = require("./module-9297.js");
var anInstance = require("./module-679.js");
var inheritIfRequired = require("./module-3167.js");
var normalizeStringArgument = require("./module-2603.js");
var DOMExceptionConstants = require("./module-5002.js");
var clearErrorStack = require("./module-8574.js");
var DESCRIPTORS = require("./module-3724.js");
var IS_PURE = require("./module-6395.js");
var DOM_EXCEPTION = "DOMException";
var Error2 = getBuiltIn("Error");
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);
var $DOMException = function DOMException() {
    anInstance(this, DOMExceptionPrototype);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument(argumentsLength < 1 ? void 0 : arguments[0]);
    var name = normalizeStringArgument(argumentsLength < 2 ? void 0 : arguments[1], "Error");
    var that = new NativeDOMException(message, name);
    var error = new Error2(message);
    error.name = DOM_EXCEPTION;
    defineProperty(that, "stack", createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
    inheritIfRequired(that, this, $DOMException);
    return that;
};
var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
var ERROR_HAS_STACK = "stack" in new Error2(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = "stack" in new NativeDOMException(1, 2);
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis2, DOM_EXCEPTION);
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;
$({
    global: true,
    constructor: true,
    forced: IS_PURE || FORCED_CONSTRUCTOR
}, {
    DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});
var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
    if (!IS_PURE) {
        defineProperty(PolyfilledDOMExceptionPrototype, "constructor", createPropertyDescriptor(1, PolyfilledDOMException));
    }
    for(var key in DOMExceptionConstants)if (hasOwn(DOMExceptionConstants, key)) {
        var constant = DOMExceptionConstants[key];
        var constantName = constant.s;
        if (!hasOwn(PolyfilledDOMException, constantName)) {
            defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
        }
    }
}
