"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reifyWkt = void 0;
const a = require("./module-3408.js");
exports.reifyWkt = function(e) {
    switch(e.typeName){
        case "google.protobuf.Any":
            {
                const n = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === a.ScalarType.STRING), t = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === a.ScalarType.BYTES);
                if (n && t) return {
                    typeName: e.typeName,
                    typeUrl: n,
                    value: t
                };
                break;
            }
        case "google.protobuf.Timestamp":
            {
                const n = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === a.ScalarType.INT64), t = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === a.ScalarType.INT32);
                if (n && t) return {
                    typeName: e.typeName,
                    seconds: n,
                    nanos: t
                };
                break;
            }
        case "google.protobuf.Duration":
            {
                const n = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === a.ScalarType.INT64), t = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === a.ScalarType.INT32);
                if (n && t) return {
                    typeName: e.typeName,
                    seconds: n,
                    nanos: t
                };
                break;
            }
        case "google.protobuf.Struct":
            {
                const n = e.fields.find((e)=>1 == e.number && !e.repeated);
                if ("map" !== (null == n ? void 0 : n.fieldKind) || "message" !== n.mapValue.kind || "google.protobuf.Value" !== n.mapValue.message.typeName) break;
                return {
                    typeName: e.typeName,
                    fields: n
                };
            }
        case "google.protobuf.Value":
            {
                const n = e.oneofs.find((e)=>"kind" === e.name), t = e.fields.find((e)=>1 == e.number && e.oneof === n);
                if ("enum" !== (null == t ? void 0 : t.fieldKind) || "google.protobuf.NullValue" !== t.enum.typeName) return;
                const s = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === a.ScalarType.DOUBLE && e.oneof === n), o = e.fields.find((e)=>3 == e.number && "scalar" == e.fieldKind && e.scalar === a.ScalarType.STRING && e.oneof === n), r = e.fields.find((e)=>4 == e.number && "scalar" == e.fieldKind && e.scalar === a.ScalarType.BOOL && e.oneof === n), i = e.fields.find((e)=>5 == e.number && e.oneof === n);
                if ("message" !== (null == i ? void 0 : i.fieldKind) || "google.protobuf.Struct" !== i.message.typeName) return;
                const A = e.fields.find((e)=>6 == e.number && e.oneof === n);
                if ("message" !== (null == A ? void 0 : A.fieldKind) || "google.protobuf.ListValue" !== A.message.typeName) return;
                if (n && s && o && r) return {
                    typeName: e.typeName,
                    kind: n,
                    nullValue: t,
                    numberValue: s,
                    stringValue: o,
                    boolValue: r,
                    structValue: i,
                    listValue: A
                };
                break;
            }
        case "google.protobuf.ListValue":
            {
                const n = e.fields.find((e)=>1 == e.number && e.repeated);
                if ("message" != (null == n ? void 0 : n.fieldKind) || "google.protobuf.Value" !== n.message.typeName) break;
                return {
                    typeName: e.typeName,
                    values: n
                };
            }
        case "google.protobuf.FieldMask":
            {
                const n = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === a.ScalarType.STRING && e.repeated);
                if (n) return {
                    typeName: e.typeName,
                    paths: n
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
                const n = e.fields.find((e)=>1 == e.number && "value" == e.name);
                if (!n) break;
                if ("scalar" !== n.fieldKind) break;
                return {
                    typeName: e.typeName,
                    value: n
                };
            }
    }
};
