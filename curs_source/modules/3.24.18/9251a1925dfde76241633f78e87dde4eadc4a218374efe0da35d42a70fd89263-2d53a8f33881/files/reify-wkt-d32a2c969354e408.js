import { require_scalar } from "../scalar.js";
var __wakaru_require_reify_wkt_cache;
export function require_reify_wkt() {
if (__wakaru_require_reify_wkt_cache) return __wakaru_require_reify_wkt_cache;
var exports2 = {};
__wakaru_require_reify_wkt_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.reifyWkt = void 0;
var scalar_js_1 = require_scalar();
function reifyWkt(message) {
    switch(message.typeName){
        case "google.protobuf.Any":
            {
                const typeUrl = message.fields.find((f2)=>f2.number == 1 && f2.fieldKind == "scalar" && f2.scalar === scalar_js_1.ScalarType.STRING);
                const value = message.fields.find((f2)=>f2.number == 2 && f2.fieldKind == "scalar" && f2.scalar === scalar_js_1.ScalarType.BYTES);
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
                const seconds = message.fields.find((f2)=>f2.number == 1 && f2.fieldKind == "scalar" && f2.scalar === scalar_js_1.ScalarType.INT64);
                const nanos = message.fields.find((f2)=>f2.number == 2 && f2.fieldKind == "scalar" && f2.scalar === scalar_js_1.ScalarType.INT32);
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
                const seconds = message.fields.find((f2)=>f2.number == 1 && f2.fieldKind == "scalar" && f2.scalar === scalar_js_1.ScalarType.INT64);
                const nanos = message.fields.find((f2)=>f2.number == 2 && f2.fieldKind == "scalar" && f2.scalar === scalar_js_1.ScalarType.INT32);
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
                const fields = message.fields.find((f2)=>f2.number == 1 && !f2.repeated);
                if ((fields === null || fields === void 0 ? void 0 : fields.fieldKind) !== "map" || fields.mapValue.kind !== "message" || fields.mapValue.message.typeName !== "google.protobuf.Value") {
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
                const nullValue = message.fields.find((f2)=>f2.number == 1 && f2.oneof === kind);
                if ((nullValue === null || nullValue === void 0 ? void 0 : nullValue.fieldKind) !== "enum" || nullValue.enum.typeName !== "google.protobuf.NullValue") {
                    return void 0;
                }
                const numberValue = message.fields.find((f2)=>f2.number == 2 && f2.fieldKind == "scalar" && f2.scalar === scalar_js_1.ScalarType.DOUBLE && f2.oneof === kind);
                const stringValue = message.fields.find((f2)=>f2.number == 3 && f2.fieldKind == "scalar" && f2.scalar === scalar_js_1.ScalarType.STRING && f2.oneof === kind);
                const boolValue = message.fields.find((f2)=>f2.number == 4 && f2.fieldKind == "scalar" && f2.scalar === scalar_js_1.ScalarType.BOOL && f2.oneof === kind);
                const structValue = message.fields.find((f2)=>f2.number == 5 && f2.oneof === kind);
                if ((structValue === null || structValue === void 0 ? void 0 : structValue.fieldKind) !== "message" || structValue.message.typeName !== "google.protobuf.Struct") {
                    return void 0;
                }
                const listValue = message.fields.find((f2)=>f2.number == 6 && f2.oneof === kind);
                if ((listValue === null || listValue === void 0 ? void 0 : listValue.fieldKind) !== "message" || listValue.message.typeName !== "google.protobuf.ListValue") {
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
                const values = message.fields.find((f2)=>f2.number == 1 && f2.repeated);
                if ((values === null || values === void 0 ? void 0 : values.fieldKind) != "message" || values.message.typeName !== "google.protobuf.Value") {
                    break;
                }
                return {
                    typeName: message.typeName,
                    values
                };
            }
        case "google.protobuf.FieldMask":
            {
                const paths = message.fields.find((f2)=>f2.number == 1 && f2.fieldKind == "scalar" && f2.scalar === scalar_js_1.ScalarType.STRING && f2.repeated);
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
                const value = message.fields.find((f2)=>f2.number == 1 && f2.name == "value");
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
exports2.reifyWkt = reifyWkt;

return exports2;
}
