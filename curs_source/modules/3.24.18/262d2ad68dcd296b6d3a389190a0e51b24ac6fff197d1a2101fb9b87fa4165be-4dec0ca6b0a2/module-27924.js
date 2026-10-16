"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reifyWkt = void 0;
const n = require("./module-3408.js");
exports.reifyWkt = function(e) {
    switch(e.typeName){
        case "google.protobuf.Any":
            {
                const t = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.STRING), r = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.BYTES);
                if (t && r) return {
                    typeName: e.typeName,
                    typeUrl: t,
                    value: r
                };
                break;
            }
        case "google.protobuf.Timestamp":
            {
                const t = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.INT64), r = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.INT32);
                if (t && r) return {
                    typeName: e.typeName,
                    seconds: t,
                    nanos: r
                };
                break;
            }
        case "google.protobuf.Duration":
            {
                const t = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.INT64), r = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.INT32);
                if (t && r) return {
                    typeName: e.typeName,
                    seconds: t,
                    nanos: r
                };
                break;
            }
        case "google.protobuf.Struct":
            {
                const t = e.fields.find((e)=>1 == e.number && !e.repeated);
                if ("map" !== (null == t ? void 0 : t.fieldKind) || "message" !== t.mapValue.kind || "google.protobuf.Value" !== t.mapValue.message.typeName) break;
                return {
                    typeName: e.typeName,
                    fields: t
                };
            }
        case "google.protobuf.Value":
            {
                const t = e.oneofs.find((e)=>"kind" === e.name), r = e.fields.find((e)=>1 == e.number && e.oneof === t);
                if ("enum" !== (null == r ? void 0 : r.fieldKind) || "google.protobuf.NullValue" !== r.enum.typeName) return;
                const o = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.DOUBLE && e.oneof === t), s = e.fields.find((e)=>3 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.STRING && e.oneof === t), i = e.fields.find((e)=>4 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.BOOL && e.oneof === t), a = e.fields.find((e)=>5 == e.number && e.oneof === t);
                if ("message" !== (null == a ? void 0 : a.fieldKind) || "google.protobuf.Struct" !== a.message.typeName) return;
                const l = e.fields.find((e)=>6 == e.number && e.oneof === t);
                if ("message" !== (null == l ? void 0 : l.fieldKind) || "google.protobuf.ListValue" !== l.message.typeName) return;
                if (t && o && s && i) return {
                    typeName: e.typeName,
                    kind: t,
                    nullValue: r,
                    numberValue: o,
                    stringValue: s,
                    boolValue: i,
                    structValue: a,
                    listValue: l
                };
                break;
            }
        case "google.protobuf.ListValue":
            {
                const t = e.fields.find((e)=>1 == e.number && e.repeated);
                if ("message" != (null == t ? void 0 : t.fieldKind) || "google.protobuf.Value" !== t.message.typeName) break;
                return {
                    typeName: e.typeName,
                    values: t
                };
            }
        case "google.protobuf.FieldMask":
            {
                const t = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === n.ScalarType.STRING && e.repeated);
                if (t) return {
                    typeName: e.typeName,
                    paths: t
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
                const t = e.fields.find((e)=>1 == e.number && "value" == e.name);
                if (!t) break;
                if ("scalar" !== t.fieldKind) break;
                return {
                    typeName: e.typeName,
                    value: t
                };
            }
    }
};
