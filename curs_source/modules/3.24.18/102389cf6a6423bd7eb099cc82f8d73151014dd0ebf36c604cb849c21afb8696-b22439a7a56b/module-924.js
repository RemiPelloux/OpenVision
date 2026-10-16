Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reifyWkt = void 0;
const o = require("./module-408.js");
exports.reifyWkt = function(e) {
    switch(e.typeName){
        case "google.protobuf.Any":
            {
                const a = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === o.ScalarType.STRING), n = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === o.ScalarType.BYTES);
                if (a && n) return {
                    typeName: e.typeName,
                    typeUrl: a,
                    value: n
                };
                break;
            }
        case "google.protobuf.Timestamp":
            {
                const a = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === o.ScalarType.INT64), n = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === o.ScalarType.INT32);
                if (a && n) return {
                    typeName: e.typeName,
                    seconds: a,
                    nanos: n
                };
                break;
            }
        case "google.protobuf.Duration":
            {
                const a = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === o.ScalarType.INT64), n = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === o.ScalarType.INT32);
                if (a && n) return {
                    typeName: e.typeName,
                    seconds: a,
                    nanos: n
                };
                break;
            }
        case "google.protobuf.Struct":
            {
                const a = e.fields.find((e)=>1 == e.number && !e.repeated);
                if ("map" !== (null == a ? void 0 : a.fieldKind) || "message" !== a.mapValue.kind || "google.protobuf.Value" !== a.mapValue.message.typeName) break;
                return {
                    typeName: e.typeName,
                    fields: a
                };
            }
        case "google.protobuf.Value":
            {
                const a = e.oneofs.find((e)=>"kind" === e.name), n = e.fields.find((e)=>1 == e.number && e.oneof === a);
                if ("enum" !== (null == n ? void 0 : n.fieldKind) || "google.protobuf.NullValue" !== n.enum.typeName) return;
                const s = e.fields.find((e)=>2 == e.number && "scalar" == e.fieldKind && e.scalar === o.ScalarType.DOUBLE && e.oneof === a), t = e.fields.find((e)=>3 == e.number && "scalar" == e.fieldKind && e.scalar === o.ScalarType.STRING && e.oneof === a), r = e.fields.find((e)=>4 == e.number && "scalar" == e.fieldKind && e.scalar === o.ScalarType.BOOL && e.oneof === a), i = e.fields.find((e)=>5 == e.number && e.oneof === a);
                if ("message" !== (null == i ? void 0 : i.fieldKind) || "google.protobuf.Struct" !== i.message.typeName) return;
                const m = e.fields.find((e)=>6 == e.number && e.oneof === a);
                if ("message" !== (null == m ? void 0 : m.fieldKind) || "google.protobuf.ListValue" !== m.message.typeName) return;
                if (a && s && t && r) return {
                    typeName: e.typeName,
                    kind: a,
                    nullValue: n,
                    numberValue: s,
                    stringValue: t,
                    boolValue: r,
                    structValue: i,
                    listValue: m
                };
                break;
            }
        case "google.protobuf.ListValue":
            {
                const a = e.fields.find((e)=>1 == e.number && e.repeated);
                if ("message" != (null == a ? void 0 : a.fieldKind) || "google.protobuf.Value" !== a.message.typeName) break;
                return {
                    typeName: e.typeName,
                    values: a
                };
            }
        case "google.protobuf.FieldMask":
            {
                const a = e.fields.find((e)=>1 == e.number && "scalar" == e.fieldKind && e.scalar === o.ScalarType.STRING && e.repeated);
                if (a) return {
                    typeName: e.typeName,
                    paths: a
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
                const a = e.fields.find((e)=>1 == e.number && "value" == e.name);
                if (!a) break;
                if ("scalar" !== a.fieldKind) break;
                return {
                    typeName: e.typeName,
                    value: a
                };
            }
    }
};
