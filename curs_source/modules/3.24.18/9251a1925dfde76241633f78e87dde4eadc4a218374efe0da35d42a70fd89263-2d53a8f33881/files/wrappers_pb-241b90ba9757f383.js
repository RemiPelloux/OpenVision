import { Message, init_message } from "../../message.js";
import { init_proto_int64, protoInt64 } from "../../proto-int64.js";
import { init_proto3, proto3 } from "../../proto3.js";
import { ScalarType, init_scalar } from "../../scalar.js";
var DoubleValue, FloatValue, Int64Value, UInt64Value, Int32Value, UInt32Value, BoolValue, StringValue, BytesValue;
export { BoolValue, BytesValue, DoubleValue, FloatValue, Int32Value, Int64Value, StringValue, UInt32Value, UInt64Value };
var __wakaru_init_wrappers_pb_initialized = false;
export function init_wrappers_pb() {
if (__wakaru_init_wrappers_pb_initialized) return;
__wakaru_init_wrappers_pb_initialized = true;
init_message();
init_proto3();
init_scalar();
init_proto_int64();
DoubleValue = class _DoubleValue extends Message {
    constructor(data){
        super();
        this.value = 0;
        proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3.json.writeScalar(ScalarType.DOUBLE, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3.json.readScalar(ScalarType.DOUBLE, json2);
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
        return proto3.util.equals(_DoubleValue, a, b2);
    }
};
DoubleValue.runtime = proto3;
DoubleValue.typeName = "google.protobuf.DoubleValue";
DoubleValue.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 1
        }
    ]);
DoubleValue.fieldWrapper = {
    wrapField (value) {
        return new DoubleValue({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
FloatValue = class _FloatValue extends Message {
    constructor(data){
        super();
        this.value = 0;
        proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3.json.writeScalar(ScalarType.FLOAT, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3.json.readScalar(ScalarType.FLOAT, json2);
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
        return proto3.util.equals(_FloatValue, a, b2);
    }
};
FloatValue.runtime = proto3;
FloatValue.typeName = "google.protobuf.FloatValue";
FloatValue.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2
        }
    ]);
FloatValue.fieldWrapper = {
    wrapField (value) {
        return new FloatValue({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
Int64Value = class _Int64Value extends Message {
    constructor(data){
        super();
        this.value = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3.json.writeScalar(ScalarType.INT64, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3.json.readScalar(ScalarType.INT64, json2);
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
        return proto3.util.equals(_Int64Value, a, b2);
    }
};
Int64Value.runtime = proto3;
Int64Value.typeName = "google.protobuf.Int64Value";
Int64Value.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 3
        }
    ]);
Int64Value.fieldWrapper = {
    wrapField (value) {
        return new Int64Value({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
UInt64Value = class _UInt64Value extends Message {
    constructor(data){
        super();
        this.value = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3.json.writeScalar(ScalarType.UINT64, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3.json.readScalar(ScalarType.UINT64, json2);
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
        return proto3.util.equals(_UInt64Value, a, b2);
    }
};
UInt64Value.runtime = proto3;
UInt64Value.typeName = "google.protobuf.UInt64Value";
UInt64Value.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 4
        }
    ]);
UInt64Value.fieldWrapper = {
    wrapField (value) {
        return new UInt64Value({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
Int32Value = class _Int32Value extends Message {
    constructor(data){
        super();
        this.value = 0;
        proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3.json.writeScalar(ScalarType.INT32, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3.json.readScalar(ScalarType.INT32, json2);
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
        return proto3.util.equals(_Int32Value, a, b2);
    }
};
Int32Value.runtime = proto3;
Int32Value.typeName = "google.protobuf.Int32Value";
Int32Value.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]);
Int32Value.fieldWrapper = {
    wrapField (value) {
        return new Int32Value({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
UInt32Value = class _UInt32Value extends Message {
    constructor(data){
        super();
        this.value = 0;
        proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3.json.writeScalar(ScalarType.UINT32, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3.json.readScalar(ScalarType.UINT32, json2);
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
        return proto3.util.equals(_UInt32Value, a, b2);
    }
};
UInt32Value.runtime = proto3;
UInt32Value.typeName = "google.protobuf.UInt32Value";
UInt32Value.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 13
        }
    ]);
UInt32Value.fieldWrapper = {
    wrapField (value) {
        return new UInt32Value({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
BoolValue = class _BoolValue extends Message {
    constructor(data){
        super();
        this.value = false;
        proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3.json.writeScalar(ScalarType.BOOL, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3.json.readScalar(ScalarType.BOOL, json2);
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
        return proto3.util.equals(_BoolValue, a, b2);
    }
};
BoolValue.runtime = proto3;
BoolValue.typeName = "google.protobuf.BoolValue";
BoolValue.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }
    ]);
BoolValue.fieldWrapper = {
    wrapField (value) {
        return new BoolValue({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
StringValue = class _StringValue extends Message {
    constructor(data){
        super();
        this.value = "";
        proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3.json.writeScalar(ScalarType.STRING, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3.json.readScalar(ScalarType.STRING, json2);
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
        return proto3.util.equals(_StringValue, a, b2);
    }
};
StringValue.runtime = proto3;
StringValue.typeName = "google.protobuf.StringValue";
StringValue.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]);
StringValue.fieldWrapper = {
    wrapField (value) {
        return new StringValue({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
BytesValue = class _BytesValue extends Message {
    constructor(data){
        super();
        this.value = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return proto3.json.writeScalar(ScalarType.BYTES, this.value, true);
    }
    fromJson(json2, options2) {
        try {
            this.value = proto3.json.readScalar(ScalarType.BYTES, json2);
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
        return proto3.util.equals(_BytesValue, a, b2);
    }
};
BytesValue.runtime = proto3;
BytesValue.typeName = "google.protobuf.BytesValue";
BytesValue.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]);
BytesValue.fieldWrapper = {
    wrapField (value) {
        return new BytesValue({
            value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};

}
