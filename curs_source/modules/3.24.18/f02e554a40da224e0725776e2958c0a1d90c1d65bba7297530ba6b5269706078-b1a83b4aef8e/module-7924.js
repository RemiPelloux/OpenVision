"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reifyWkt = void 0;
const n = require("./module-3408.js");
exports.reifyWkt = function(t) {
    switch(t.typeName){
        case "google.protobuf.Any":
            {
                const e = t.fields.find((t)=>1 == t.number && "scalar" == t.fieldKind && t.scalar === n.ScalarType.STRING), r = t.fields.find((t)=>2 == t.number && "scalar" == t.fieldKind && t.scalar === n.ScalarType.BYTES);
                if (e && r) return {
                    typeName: t.typeName,
                    typeUrl: e,
                    value: r
                };
                break;
            }
        case "google.protobuf.Timestamp":
            {
                const e = t.fields.find((t)=>1 == t.number && "scalar" == t.fieldKind && t.scalar === n.ScalarType.INT64), r = t.fields.find((t)=>2 == t.number && "scalar" == t.fieldKind && t.scalar === n.ScalarType.INT32);
                if (e && r) return {
                    typeName: t.typeName,
                    seconds: e,
                    nanos: r
                };
                break;
            }
        case "google.protobuf.Duration":
            {
                const e = t.fields.find((t)=>1 == t.number && "scalar" == t.fieldKind && t.scalar === n.ScalarType.INT64), r = t.fields.find((t)=>2 == t.number && "scalar" == t.fieldKind && t.scalar === n.ScalarType.INT32);
                if (e && r) return {
                    typeName: t.typeName,
                    seconds: e,
                    nanos: r
                };
                break;
            }
        case "google.protobuf.Struct":
            {
                const e = t.fields.find((t)=>1 == t.number && !t.repeated);
                if ("map" !== (null == e ? void 0 : e.fieldKind) || "message" !== e.mapValue.kind || "google.protobuf.Value" !== e.mapValue.message.typeName) break;
                return {
                    typeName: t.typeName,
                    fields: e
                };
            }
        case "google.protobuf.Value":
            {
                const e = t.oneofs.find((t)=>"kind" === t.name), r = t.fields.find((t)=>1 == t.number && t.oneof === e);
                if ("enum" !== (null == r ? void 0 : r.fieldKind) || "google.protobuf.NullValue" !== r.enum.typeName) return;
                const s = t.fields.find((t)=>2 == t.number && "scalar" == t.fieldKind && t.scalar === n.ScalarType.DOUBLE && t.oneof === e), i = t.fields.find((t)=>3 == t.number && "scalar" == t.fieldKind && t.scalar === n.ScalarType.STRING && t.oneof === e), o = t.fields.find((t)=>4 == t.number && "scalar" == t.fieldKind && t.scalar === n.ScalarType.BOOL && t.oneof === e), a = t.fields.find((t)=>5 == t.number && t.oneof === e);
                if ("message" !== (null == a ? void 0 : a.fieldKind) || "google.protobuf.Struct" !== a.message.typeName) return;
                const u = t.fields.find((t)=>6 == t.number && t.oneof === e);
                if ("message" !== (null == u ? void 0 : u.fieldKind) || "google.protobuf.ListValue" !== u.message.typeName) return;
                if (e && s && i && o) return {
                    typeName: t.typeName,
                    kind: e,
                    nullValue: r,
                    numberValue: s,
                    stringValue: i,
                    boolValue: o,
                    structValue: a,
                    listValue: u
                };
                break;
            }
        case "google.protobuf.ListValue":
            {
                const e = t.fields.find((t)=>1 == t.number && t.repeated);
                if ("message" != (null == e ? void 0 : e.fieldKind) || "google.protobuf.Value" !== e.message.typeName) break;
                return {
                    typeName: t.typeName,
                    values: e
                };
            }
        case "google.protobuf.FieldMask":
            {
                const e = t.fields.find((t)=>1 == t.number && "scalar" == t.fieldKind && t.scalar === n.ScalarType.STRING && t.repeated);
                if (e) return {
                    typeName: t.typeName,
                    paths: e
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
                const e = t.fields.find((t)=>1 == t.number && "value" == t.name);
                if (!e) break;
                if ("scalar" !== e.fieldKind) break;
                return {
                    typeName: t.typeName,
                    value: e
                };
            }
    }
};
