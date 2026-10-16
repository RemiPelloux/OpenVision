require.r(exports);
require.d(exports, {
    isMessage: ()=>isMessage
});
var _message_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-12.js");
function isMessage(arg, type) {
    if (arg === null || typeof arg != "object") {
        return false;
    }
    if (!Object.getOwnPropertyNames(_message_js__WEBPACK_IMPORTED_MODULE_0__.Message.prototype).every((m)=>m in arg && typeof arg[m] == "function")) {
        return false;
    }
    const actualType = arg.getType();
    if (actualType === null || typeof actualType != "function" || !("typeName" in actualType) || typeof actualType.typeName != "string") {
        return false;
    }
    return type === void 0 ? true : actualType.typeName == type.typeName;
}
