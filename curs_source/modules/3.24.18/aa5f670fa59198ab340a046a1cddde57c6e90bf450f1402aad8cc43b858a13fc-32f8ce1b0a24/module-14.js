require.r(exports);
require.d(exports, {
    isScalarZeroValue: ()=>isScalarZeroValue,
    scalarEquals: ()=>scalarEquals,
    scalarZeroValue: ()=>scalarZeroValue
});
var _proto_int64_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-15.js");
var _scalar_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-17.js");
function scalarEquals(type, a, b) {
    if (a === b) {
        return true;
    }
    if (type == _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BYTES) {
        if (!(a instanceof Uint8Array) || !(b instanceof Uint8Array)) {
            return false;
        }
        if (a.length !== b.length) {
            return false;
        }
        for(let i = 0; i < a.length; i++){
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
    switch(type){
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.UINT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SFIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SINT64:
            return a == b;
    }
    return false;
}
function scalarZeroValue(type, longType) {
    switch(type){
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL:
            return false;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.UINT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SFIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SINT64:
            return longType == 0 ? _proto_int64_js__WEBPACK_IMPORTED_MODULE_0__.protoInt64.zero : "0";
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.DOUBLE:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FLOAT:
            return 0;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BYTES:
            return new Uint8Array(0);
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING:
            return "";
        default:
            return 0;
    }
}
function isScalarZeroValue(type, value) {
    switch(type){
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL:
            return value === false;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING:
            return value === "";
        case _scalar_js__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BYTES:
            return value instanceof Uint8Array && !value.byteLength;
        default:
            return value == 0;
    }
}
