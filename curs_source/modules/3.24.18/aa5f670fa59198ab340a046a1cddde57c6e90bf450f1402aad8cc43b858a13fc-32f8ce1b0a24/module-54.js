require.r(exports);
require.d(exports, {
    SourceContext: ()=>SourceContext
});
var _message_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-12.js");
var _proto3_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-7.js");
const _SourceContext = class _SourceContext extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.fileName = "";
        _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _SourceContext().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _SourceContext().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _SourceContext().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.equals(_SourceContext, a, b);
    }
};
_SourceContext.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3;
_SourceContext.typeName = "google.protobuf.SourceContext";
_SourceContext.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]);
let SourceContext = _SourceContext;
