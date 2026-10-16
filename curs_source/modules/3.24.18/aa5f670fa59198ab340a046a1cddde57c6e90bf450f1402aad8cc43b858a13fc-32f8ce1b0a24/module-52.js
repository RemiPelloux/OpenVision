require.r(exports);
require.d(exports, {
    Api: ()=>Api,
    Method: ()=>Method,
    Mixin: ()=>Mixin
});
var _message_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-12.js");
var _type_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-53.js");
var _source_context_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-54.js");
var _proto3_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-7.js");
const _Api = class _Api extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.name = "";
        this.methods = [];
        this.options = [];
        this.version = "";
        this.mixins = [];
        this.syntax = _type_pb_js__WEBPACK_IMPORTED_MODULE_1__.Syntax.PROTO2;
        _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Api().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Api().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Api().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3.util.equals(_Api, a, b);
    }
};
_Api.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3;
_Api.typeName = "google.protobuf.Api";
_Api.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "methods",
            kind: "message",
            T: Method,
            repeated: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: _type_pb_js__WEBPACK_IMPORTED_MODULE_1__.Option,
            repeated: true
        },
        {
            no: 4,
            name: "version",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "source_context",
            kind: "message",
            T: _source_context_pb_js__WEBPACK_IMPORTED_MODULE_2__.SourceContext
        },
        {
            no: 6,
            name: "mixins",
            kind: "message",
            T: Mixin,
            repeated: true
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3.getEnumType(_type_pb_js__WEBPACK_IMPORTED_MODULE_1__.Syntax)
        }
    ]);
let Api = _Api;
const _Method = class _Method extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.name = "";
        this.requestTypeUrl = "";
        this.requestStreaming = false;
        this.responseTypeUrl = "";
        this.responseStreaming = false;
        this.options = [];
        this.syntax = _type_pb_js__WEBPACK_IMPORTED_MODULE_1__.Syntax.PROTO2;
        _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Method().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Method().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Method().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3.util.equals(_Method, a, b);
    }
};
_Method.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3;
_Method.typeName = "google.protobuf.Method";
_Method.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "request_type_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "request_streaming",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "response_type_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "response_streaming",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "options",
            kind: "message",
            T: _type_pb_js__WEBPACK_IMPORTED_MODULE_1__.Option,
            repeated: true
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3.getEnumType(_type_pb_js__WEBPACK_IMPORTED_MODULE_1__.Syntax)
        }
    ]);
let Method = _Method;
const _Mixin = class _Mixin extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.name = "";
        this.root = "";
        _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Mixin().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Mixin().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Mixin().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3.util.equals(_Mixin, a, b);
    }
};
_Mixin.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3;
_Mixin.typeName = "google.protobuf.Mixin";
_Mixin.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_3__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "root",
            kind: "scalar",
            T: 9
        }
    ]);
let Mixin = _Mixin;
