"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reifyWkt = void 0;
const n = require("./module-3408.js");
exports.reifyWkt = function(e) {
    switch(e.typeName){
        case "google.protobuf.Any":
            {
                const A = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.STRING), t = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.BYTES);
                if (A && t) return {
                    typeName: e.typeName,
                    typeUrl: A,
                    value: t
                };
                break;
            }
        case "google.protobuf.Timestamp":
            {
                const A = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.INT64), t = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.INT32);
                if (A && t) return {
                    typeName: e.typeName,
                    seconds: A,
                    nanos: t
                };
                break;
            }
        case "google.protobuf.Duration":
            {
                const A = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.INT64), t = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.INT32);
                if (A && t) return {
                    typeName: e.typeName,
                    seconds: A,
                    nanos: t
                };
                break;
            }
        case "google.protobuf.Struct":
            {
                const A = e.fields.find((e)=>1 == e.number && !e.repeated);
                if ("map" !== (null == A ? void 0 : A.fieldKind) || "message" !== A.mapValue.kind || "google.protobuf.Value" !== A.mapValue.message.typeName) break;
                return {
                    typeName: e.typeName,
                    fields: A
                };
            }
        case "google.protobuf.Value":
            {
                const A = e.oneofs.find((e)=>"kind" === e.name), t = e.fields.find((e)=>1 == e.number && e.oneof === A);
                if ("enum" !== (null == t ? void 0 : t.fieldKind) || "google.protobuf.NullValue" !== t.enum.typeName) return;
                const r = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.DOUBLE && e.oneof === A), o = e.fields.find((e)=>3 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.STRING && e.oneof === A), s = e.fields.find((e)=>4 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.BOOL && e.oneof === A), a = e.fields.find((e)=>5 == e.number && e.oneof === A);
                if ("message" !== (null == a ? void 0 : a.fieldKind) || "google.protobuf.Struct" !== a.message.typeName) return;
                const i = e.fields.find((e)=>6 == e.number && e.oneof === A);
                if ("message" !== (null == i ? void 0 : i.fieldKind) || "google.protobuf.ListValue" !== i.message.typeName) return;
                if (A && r && o && s) return {
                    typeName: e.typeName,
                    kind: A,
                    nullValue: t,
                    numberValue: r,
                    stringValue: o,
                    boolValue: s,
                    structValue: a,
                    listValue: i
                };
                break;
            }
        case "google.protobuf.ListValue":
            {
                const A = e.fields.find((e)=>1 == e.number && e.repeated);
                if ("message" != (null == A ? void 0 : A.fieldKind) || "google.protobuf.Value" !== A.message.typeName) break;
                return {
                    typeName: e.typeName,
                    values: A
                };
            }
        case "google.protobuf.FieldMask":
            {
                const A = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.STRING && e.repeated);
                if (A) return {
                    typeName: e.typeName,
                    paths: A
                };
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
                const A = e.fields.find((e)=>1 == e.number && "value" == e.name);
                if (!A) break;
                if ("scalar" !== A.fieldKind) break;
                return {
                    typeName: e.typeName,
                    value: A
                };
            }
    }
};
