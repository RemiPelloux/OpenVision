require.r(exports);
require.d(exports, {
    BoolValue: ()=>BoolValue,
    BytesValue: ()=>BytesValue,
    DoubleValue: ()=>DoubleValue,
    FloatValue: ()=>FloatValue,
    Int32Value: ()=>Int32Value,
    Int64Value: ()=>Int64Value,
    StringValue: ()=>StringValue,
    UInt32Value: ()=>UInt32Value,
    UInt64Value: ()=>UInt64Value
});
var _message_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-12.js");
var _proto3_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-7.js");
var _scalar_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-17.js");
var _proto_int64_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-15.js");
const _DoubleValue = class _DoubleValue extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.value = 0;
        _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.writeScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.DOUBLE, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.readScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.DOUBLE, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.DoubleValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m += `: ${e.message}`;
            }
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new _DoubleValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _DoubleValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _DoubleValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.equals(_DoubleValue, a, b);
    }
};
_DoubleValue.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3;
_DoubleValue.typeName = "google.protobuf.DoubleValue";
_DoubleValue.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 1
        }
    ]);
_DoubleValue.fieldWrapper = {
    wrapField (value) {
        return new _DoubleValue({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
let DoubleValue = _DoubleValue;
const _FloatValue = class _FloatValue extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.value = 0;
        _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.writeScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.FLOAT, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.readScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.FLOAT, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.FloatValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m += `: ${e.message}`;
            }
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new _FloatValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FloatValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FloatValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.equals(_FloatValue, a, b);
    }
};
_FloatValue.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3;
_FloatValue.typeName = "google.protobuf.FloatValue";
_FloatValue.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2
        }
    ]);
_FloatValue.fieldWrapper = {
    wrapField (value) {
        return new _FloatValue({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
let FloatValue = _FloatValue;
const _Int64Value = class _Int64Value extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.value = _proto_int64_js__WEBPACK_IMPORTED_MODULE_3__.protoInt64.zero;
        _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.writeScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT64, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.readScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT64, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.Int64Value from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m += `: ${e.message}`;
            }
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new _Int64Value().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Int64Value().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Int64Value().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.equals(_Int64Value, a, b);
    }
};
_Int64Value.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3;
_Int64Value.typeName = "google.protobuf.Int64Value";
_Int64Value.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 3
        }
    ]);
_Int64Value.fieldWrapper = {
    wrapField (value) {
        return new _Int64Value({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
let Int64Value = _Int64Value;
const _UInt64Value = class _UInt64Value extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.value = _proto_int64_js__WEBPACK_IMPORTED_MODULE_3__.protoInt64.zero;
        _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.writeScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.UINT64, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.readScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.UINT64, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.UInt64Value from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m += `: ${e.message}`;
            }
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new _UInt64Value().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _UInt64Value().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _UInt64Value().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.equals(_UInt64Value, a, b);
    }
};
_UInt64Value.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3;
_UInt64Value.typeName = "google.protobuf.UInt64Value";
_UInt64Value.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 4
        }
    ]);
_UInt64Value.fieldWrapper = {
    wrapField (value) {
        return new _UInt64Value({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
let UInt64Value = _UInt64Value;
const _Int32Value = class _Int32Value extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.value = 0;
        _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.writeScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.readScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.Int32Value from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m += `: ${e.message}`;
            }
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new _Int32Value().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Int32Value().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Int32Value().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.equals(_Int32Value, a, b);
    }
};
_Int32Value.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3;
_Int32Value.typeName = "google.protobuf.Int32Value";
_Int32Value.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]);
_Int32Value.fieldWrapper = {
    wrapField (value) {
        return new _Int32Value({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
let Int32Value = _Int32Value;
const _UInt32Value = class _UInt32Value extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.value = 0;
        _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.writeScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.UINT32, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.readScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.UINT32, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.UInt32Value from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m += `: ${e.message}`;
            }
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new _UInt32Value().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _UInt32Value().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _UInt32Value().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.equals(_UInt32Value, a, b);
    }
};
_UInt32Value.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3;
_UInt32Value.typeName = "google.protobuf.UInt32Value";
_UInt32Value.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 13
        }
    ]);
_UInt32Value.fieldWrapper = {
    wrapField (value) {
        return new _UInt32Value({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
let UInt32Value = _UInt32Value;
const _BoolValue = class _BoolValue extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.value = false;
        _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.writeScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BOOL, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.readScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BOOL, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.BoolValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m += `: ${e.message}`;
            }
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new _BoolValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _BoolValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _BoolValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.equals(_BoolValue, a, b);
    }
};
_BoolValue.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3;
_BoolValue.typeName = "google.protobuf.BoolValue";
_BoolValue.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }
    ]);
_BoolValue.fieldWrapper = {
    wrapField (value) {
        return new _BoolValue({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
let BoolValue = _BoolValue;
const _StringValue = class _StringValue extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.value = "";
        _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.writeScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.STRING, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.readScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.STRING, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.StringValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m += `: ${e.message}`;
            }
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new _StringValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _StringValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _StringValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.equals(_StringValue, a, b);
    }
};
_StringValue.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3;
_StringValue.typeName = "google.protobuf.StringValue";
_StringValue.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]);
_StringValue.fieldWrapper = {
    wrapField (value) {
        return new _StringValue({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
let StringValue = _StringValue;
const _BytesValue = class _BytesValue extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.value = new Uint8Array(0);
        _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.writeScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BYTES, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.readScalar(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BYTES, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.BytesValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m += `: ${e.message}`;
            }
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new _BytesValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _BytesValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _BytesValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.equals(_BytesValue, a, b);
    }
};
_BytesValue.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3;
_BytesValue.typeName = "google.protobuf.BytesValue";
_BytesValue.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]);
_BytesValue.fieldWrapper = {
    wrapField (value) {
        return new _BytesValue({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
let BytesValue = _BytesValue;
