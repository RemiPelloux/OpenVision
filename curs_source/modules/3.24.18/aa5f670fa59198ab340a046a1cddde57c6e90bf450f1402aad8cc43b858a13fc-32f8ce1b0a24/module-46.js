require.r(exports);
require.d(exports, {
    Empty: ()=>Empty
});
var _message_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-12.js");
var _proto3_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-7.js");
const _Empty = class _Empty extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Empty().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Empty().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Empty().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.equals(_Empty, a, b);
    }
};
_Empty.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3;
_Empty.typeName = "google.protobuf.Empty";
_Empty.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.newFieldList(()=>[]);
let Empty = _Empty;
