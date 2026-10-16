import { require_message } from "../../message.js";
import { require_proto_int64 } from "../../proto-int64.js";
import { require_proto3 } from "../../proto3.js";
import { require_scalar } from "../../scalar.js";
var __wakaru_require_wrappers_pb_cache;
export function require_wrappers_pb() {
if (__wakaru_require_wrappers_pb_cache) return __wakaru_require_wrappers_pb_cache;
var exports2 = {};
__wakaru_require_wrappers_pb_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.BytesValue = exports2.StringValue = exports2.BoolValue = exports2.UInt32Value = exports2.Int32Value = exports2.UInt64Value = exports2.Int64Value = exports2.FloatValue = exports2.DoubleValue = void 0;
var message_js_1 = require_message();
var proto3_js_1 = require_proto3();
var scalar_js_1 = require_scalar();
var proto_int64_js_1 = require_proto_int64();
var DoubleValue2 = class _DoubleValue extends message_js_1.Message {
    constructor(data){
        super();
        this.value = 0;
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3_js_1.proto3.json.writeScalar(scalar_js_1.ScalarType.DOUBLE, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3_js_1.proto3.json.readScalar(scalar_js_1.ScalarType.DOUBLE, json2);
        } catch (e) {
            let m2 = `cannot decode message google.protobuf.DoubleValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m2 += `: ${e.message}`;
            }
            throw new Error(m2);
        }
        return this;
    }
    static fromBinary(bytes, options2) {
        return new _DoubleValue().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DoubleValue().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DoubleValue().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_DoubleValue, a, b2);
    }
};
exports2.DoubleValue = DoubleValue2;
DoubleValue2.runtime = proto3_js_1.proto3;
DoubleValue2.typeName = "google.protobuf.DoubleValue";
DoubleValue2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 1
        }
    ]);
DoubleValue2.fieldWrapper = {
    wrapField (value) {
        return new DoubleValue2({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
var FloatValue2 = class _FloatValue extends message_js_1.Message {
    constructor(data){
        super();
        this.value = 0;
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3_js_1.proto3.json.writeScalar(scalar_js_1.ScalarType.FLOAT, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3_js_1.proto3.json.readScalar(scalar_js_1.ScalarType.FLOAT, json2);
        } catch (e) {
            let m2 = `cannot decode message google.protobuf.FloatValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m2 += `: ${e.message}`;
            }
            throw new Error(m2);
        }
        return this;
    }
    static fromBinary(bytes, options2) {
        return new _FloatValue().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FloatValue().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FloatValue().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_FloatValue, a, b2);
    }
};
exports2.FloatValue = FloatValue2;
FloatValue2.runtime = proto3_js_1.proto3;
FloatValue2.typeName = "google.protobuf.FloatValue";
FloatValue2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2
        }
    ]);
FloatValue2.fieldWrapper = {
    wrapField (value) {
        return new FloatValue2({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
var Int64Value2 = class _Int64Value extends message_js_1.Message {
    constructor(data){
        super();
        this.value = proto_int64_js_1.protoInt64.zero;
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3_js_1.proto3.json.writeScalar(scalar_js_1.ScalarType.INT64, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3_js_1.proto3.json.readScalar(scalar_js_1.ScalarType.INT64, json2);
        } catch (e) {
            let m2 = `cannot decode message google.protobuf.Int64Value from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m2 += `: ${e.message}`;
            }
            throw new Error(m2);
        }
        return this;
    }
    static fromBinary(bytes, options2) {
        return new _Int64Value().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Int64Value().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Int64Value().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_Int64Value, a, b2);
    }
};
exports2.Int64Value = Int64Value2;
Int64Value2.runtime = proto3_js_1.proto3;
Int64Value2.typeName = "google.protobuf.Int64Value";
Int64Value2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 3
        }
    ]);
Int64Value2.fieldWrapper = {
    wrapField (value) {
        return new Int64Value2({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
var UInt64Value2 = class _UInt64Value extends message_js_1.Message {
    constructor(data){
        super();
        this.value = proto_int64_js_1.protoInt64.zero;
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3_js_1.proto3.json.writeScalar(scalar_js_1.ScalarType.UINT64, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3_js_1.proto3.json.readScalar(scalar_js_1.ScalarType.UINT64, json2);
        } catch (e) {
            let m2 = `cannot decode message google.protobuf.UInt64Value from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m2 += `: ${e.message}`;
            }
            throw new Error(m2);
        }
        return this;
    }
    static fromBinary(bytes, options2) {
        return new _UInt64Value().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UInt64Value().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UInt64Value().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_UInt64Value, a, b2);
    }
};
exports2.UInt64Value = UInt64Value2;
UInt64Value2.runtime = proto3_js_1.proto3;
UInt64Value2.typeName = "google.protobuf.UInt64Value";
UInt64Value2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 4
        }
    ]);
UInt64Value2.fieldWrapper = {
    wrapField (value) {
        return new UInt64Value2({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
var Int32Value2 = class _Int32Value extends message_js_1.Message {
    constructor(data){
        super();
        this.value = 0;
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3_js_1.proto3.json.writeScalar(scalar_js_1.ScalarType.INT32, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3_js_1.proto3.json.readScalar(scalar_js_1.ScalarType.INT32, json2);
        } catch (e) {
            let m2 = `cannot decode message google.protobuf.Int32Value from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m2 += `: ${e.message}`;
            }
            throw new Error(m2);
        }
        return this;
    }
    static fromBinary(bytes, options2) {
        return new _Int32Value().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Int32Value().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Int32Value().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_Int32Value, a, b2);
    }
};
exports2.Int32Value = Int32Value2;
Int32Value2.runtime = proto3_js_1.proto3;
Int32Value2.typeName = "google.protobuf.Int32Value";
Int32Value2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]);
Int32Value2.fieldWrapper = {
    wrapField (value) {
        return new Int32Value2({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
var UInt32Value2 = class _UInt32Value extends message_js_1.Message {
    constructor(data){
        super();
        this.value = 0;
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3_js_1.proto3.json.writeScalar(scalar_js_1.ScalarType.UINT32, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3_js_1.proto3.json.readScalar(scalar_js_1.ScalarType.UINT32, json2);
        } catch (e) {
            let m2 = `cannot decode message google.protobuf.UInt32Value from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m2 += `: ${e.message}`;
            }
            throw new Error(m2);
        }
        return this;
    }
    static fromBinary(bytes, options2) {
        return new _UInt32Value().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UInt32Value().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UInt32Value().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_UInt32Value, a, b2);
    }
};
exports2.UInt32Value = UInt32Value2;
UInt32Value2.runtime = proto3_js_1.proto3;
UInt32Value2.typeName = "google.protobuf.UInt32Value";
UInt32Value2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 13
        }
    ]);
UInt32Value2.fieldWrapper = {
    wrapField (value) {
        return new UInt32Value2({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
var BoolValue2 = class _BoolValue extends message_js_1.Message {
    constructor(data){
        super();
        this.value = false;
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3_js_1.proto3.json.writeScalar(scalar_js_1.ScalarType.BOOL, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3_js_1.proto3.json.readScalar(scalar_js_1.ScalarType.BOOL, json2);
        } catch (e) {
            let m2 = `cannot decode message google.protobuf.BoolValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m2 += `: ${e.message}`;
            }
            throw new Error(m2);
        }
        return this;
    }
    static fromBinary(bytes, options2) {
        return new _BoolValue().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BoolValue().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BoolValue().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_BoolValue, a, b2);
    }
};
exports2.BoolValue = BoolValue2;
BoolValue2.runtime = proto3_js_1.proto3;
BoolValue2.typeName = "google.protobuf.BoolValue";
BoolValue2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }
    ]);
BoolValue2.fieldWrapper = {
    wrapField (value) {
        return new BoolValue2({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
var StringValue2 = class _StringValue extends message_js_1.Message {
    constructor(data){
        super();
        this.value = "";
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3_js_1.proto3.json.writeScalar(scalar_js_1.ScalarType.STRING, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3_js_1.proto3.json.readScalar(scalar_js_1.ScalarType.STRING, json2);
        } catch (e) {
            let m2 = `cannot decode message google.protobuf.StringValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m2 += `: ${e.message}`;
            }
            throw new Error(m2);
        }
        return this;
    }
    static fromBinary(bytes, options2) {
        return new _StringValue().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StringValue().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StringValue().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_StringValue, a, b2);
    }
};
exports2.StringValue = StringValue2;
StringValue2.runtime = proto3_js_1.proto3;
StringValue2.typeName = "google.protobuf.StringValue";
StringValue2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]);
StringValue2.fieldWrapper = {
    wrapField (value) {
        return new StringValue2({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
var BytesValue2 = class _BytesValue extends message_js_1.Message {
    constructor(data){
        super();
        this.value = new Uint8Array(0);
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3_js_1.proto3.json.writeScalar(scalar_js_1.ScalarType.BYTES, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3_js_1.proto3.json.readScalar(scalar_js_1.ScalarType.BYTES, json2);
        } catch (e) {
            let m2 = `cannot decode message google.protobuf.BytesValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) {
                m2 += `: ${e.message}`;
            }
            throw new Error(m2);
        }
        return this;
    }
    static fromBinary(bytes, options2) {
        return new _BytesValue().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BytesValue().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BytesValue().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_BytesValue, a, b2);
    }
};
exports2.BytesValue = BytesValue2;
BytesValue2.runtime = proto3_js_1.proto3;
BytesValue2.typeName = "google.protobuf.BytesValue";
BytesValue2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]);
BytesValue2.fieldWrapper = {
    wrapField (value) {
        return new BytesValue2({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};

return exports2;
}
