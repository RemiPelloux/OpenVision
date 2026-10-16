require.r(exports);
require.d(exports, {
    reifyWkt: ()=>reifyWkt
});
var _scalar_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-17.js");
function reifyWkt(message) {
    switch(message.typeName){
        case "google.protobuf.Any":
            {
                const typeUrl = message.fields.find((f)=>f.number == 1 && f.fieldKind == "scalar" && f.scalar === _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.STRING);
                const value = message.fields.find((f)=>f.number == 2 && f.fieldKind == "scalar" && f.scalar === _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BYTES);
                if (typeUrl && value) {
                    return {
                        typeName: message.typeName,
                        typeUrl,
                        value
                    };
                }
                break;
            }
        case "google.protobuf.Timestamp":
            {
                const seconds = message.fields.find((f)=>f.number == 1 && f.fieldKind == "scalar" && f.scalar === _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT64);
                const nanos = message.fields.find((f)=>f.number == 2 && f.fieldKind == "scalar" && f.scalar === _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT32);
                if (seconds && nanos) {
                    return {
                        typeName: message.typeName,
                        seconds,
                        nanos
                    };
                }
                break;
            }
        case "google.protobuf.Duration":
            {
                const seconds = message.fields.find((f)=>f.number == 1 && f.fieldKind == "scalar" && f.scalar === _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT64);
                const nanos = message.fields.find((f)=>f.number == 2 && f.fieldKind == "scalar" && f.scalar === _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT32);
                if (seconds && nanos) {
                    return {
                        typeName: message.typeName,
                        seconds,
                        nanos
                    };
                }
                break;
            }
        case "google.protobuf.Struct":
            {
                const fields = message.fields.find((f)=>f.number == 1 && !f.repeated);
                if (fields?.fieldKind !== "map" || fields.mapValue.kind !== "message" || fields.mapValue.message.typeName !== "google.protobuf.Value") {
                    break;
                }
                return {
                    typeName: message.typeName,
                    fields
                };
            }
        case "google.protobuf.Value":
            {
                const kind = message.oneofs.find((o)=>o.name === "kind");
                const nullValue = message.fields.find((f)=>f.number == 1 && f.oneof === kind);
                if (nullValue?.fieldKind !== "enum" || nullValue.enum.typeName !== "google.protobuf.NullValue") {
                    return void 0;
                }
                const numberValue = message.fields.find((f)=>f.number == 2 && f.fieldKind == "scalar" && f.scalar === _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.DOUBLE && f.oneof === kind);
                const stringValue = message.fields.find((f)=>f.number == 3 && f.fieldKind == "scalar" && f.scalar === _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.STRING && f.oneof === kind);
                const boolValue = message.fields.find((f)=>f.number == 4 && f.fieldKind == "scalar" && f.scalar === _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BOOL && f.oneof === kind);
                const structValue = message.fields.find((f)=>f.number == 5 && f.oneof === kind);
                if (structValue?.fieldKind !== "message" || structValue.message.typeName !== "google.protobuf.Struct") {
                    return void 0;
                }
                const listValue = message.fields.find((f)=>f.number == 6 && f.oneof === kind);
                if (listValue?.fieldKind !== "message" || listValue.message.typeName !== "google.protobuf.ListValue") {
                    return void 0;
                }
                if (kind && numberValue && stringValue && boolValue) {
                    return {
                        typeName: message.typeName,
                        kind,
                        nullValue,
                        numberValue,
                        stringValue,
                        boolValue,
                        structValue,
                        listValue
                    };
                }
                break;
            }
        case "google.protobuf.ListValue":
            {
                const values = message.fields.find((f)=>f.number == 1 && f.repeated);
                if (values?.fieldKind != "message" || values.message.typeName !== "google.protobuf.Value") {
                    break;
                }
                return {
                    typeName: message.typeName,
                    values
                };
            }
        case "google.protobuf.FieldMask":
            {
                const paths = message.fields.find((f)=>f.number == 1 && f.fieldKind == "scalar" && f.scalar === _scalar_js__WEBPACK_IMPORTED_MODULE_0__.ScalarType.STRING && f.repeated);
                if (paths) {
                    return {
                        typeName: message.typeName,
                        paths
                    };
                }
                break;
            }
        case "google.protobuf.DoubleValue":
        case "google.protobuf.FloatValue":
        case "google.protobuf.Int64Value":
        case "google.protobuf.UInt64Value":
        case "google.protobuf.Int32Value":
        case "google.protobuf.UInt32Value":
        case "google.protobuf.BoolValue":
        case "google.protobuf.StringValue":
        case "google.protobuf.BytesValue":
            {
                const value = message.fields.find((f)=>f.number == 1 && f.name == "value");
                if (!value) {
                    break;
                }
                if (value.fieldKind !== "scalar") {
                    break;
                }
                return {
                    typeName: message.typeName,
                    value
                };
            }
    }
    return void 0;
}
