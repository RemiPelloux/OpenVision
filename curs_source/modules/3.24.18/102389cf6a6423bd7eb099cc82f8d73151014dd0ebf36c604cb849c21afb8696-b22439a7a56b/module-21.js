Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BytesValue = exports.StringValue = exports.BoolValue = exports.UInt32Value = exports.Int32Value = exports.UInt64Value = exports.Int64Value = exports.FloatValue = exports.DoubleValue = void 0;
const o = require("./module-193.js"), s = require("./module-599.js"), t = require("./module-408.js"), r = require("./module-498.js");
class i extends o.Message {
    constructor(e){
        super(), this.value = 0, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(t.ScalarType.DOUBLE, this.value, !0);
    }
    fromJson(e, a) {
        try {
            this.value = s.proto3.json.readScalar(t.ScalarType.DOUBLE, e);
        } catch (e) {
            let a = 'cannot decode message google.protobuf.DoubleValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (a += `: ${e.message}`), new Error(a);
        }
        return this;
    }
    static fromBinary(e, a) {
        return (new i).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new i).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new i).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(i, e, a);
    }
}
exports.DoubleValue = i, i.runtime = s.proto3, i.typeName = "google.protobuf.DoubleValue", i.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 1
        }
    ]), i.fieldWrapper = {
    wrapField: (e)=>new i({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class m extends o.Message {
    constructor(e){
        super(), this.value = 0, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(t.ScalarType.FLOAT, this.value, !0);
    }
    fromJson(e, a) {
        try {
            this.value = s.proto3.json.readScalar(t.ScalarType.FLOAT, e);
        } catch (e) {
            let a = 'cannot decode message google.protobuf.FloatValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (a += `: ${e.message}`), new Error(a);
        }
        return this;
    }
    static fromBinary(e, a) {
        return (new m).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new m).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new m).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(m, e, a);
    }
}
exports.FloatValue = m, m.runtime = s.proto3, m.typeName = "google.protobuf.FloatValue", m.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2
        }
    ]), m.fieldWrapper = {
    wrapField: (e)=>new m({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class l extends o.Message {
    constructor(e){
        super(), this.value = r.protoInt64.zero, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(t.ScalarType.INT64, this.value, !0);
    }
    fromJson(e, a) {
        try {
            this.value = s.proto3.json.readScalar(t.ScalarType.INT64, e);
        } catch (e) {
            let a = 'cannot decode message google.protobuf.Int64Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (a += `: ${e.message}`), new Error(a);
        }
        return this;
    }
    static fromBinary(e, a) {
        return (new l).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new l).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new l).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(l, e, a);
    }
}
exports.Int64Value = l, l.runtime = s.proto3, l.typeName = "google.protobuf.Int64Value", l.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 3
        }
    ]), l.fieldWrapper = {
    wrapField: (e)=>new l({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class d extends o.Message {
    constructor(e){
        super(), this.value = r.protoInt64.zero, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(t.ScalarType.UINT64, this.value, !0);
    }
    fromJson(e, a) {
        try {
            this.value = s.proto3.json.readScalar(t.ScalarType.UINT64, e);
        } catch (e) {
            let a = 'cannot decode message google.protobuf.UInt64Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (a += `: ${e.message}`), new Error(a);
        }
        return this;
    }
    static fromBinary(e, a) {
        return (new d).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new d).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new d).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(d, e, a);
    }
}
exports.UInt64Value = d, d.runtime = s.proto3, d.typeName = "google.protobuf.UInt64Value", d.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 4
        }
    ]), d.fieldWrapper = {
    wrapField: (e)=>new d({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class c extends o.Message {
    constructor(e){
        super(), this.value = 0, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(t.ScalarType.INT32, this.value, !0);
    }
    fromJson(e, a) {
        try {
            this.value = s.proto3.json.readScalar(t.ScalarType.INT32, e);
        } catch (e) {
            let a = 'cannot decode message google.protobuf.Int32Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (a += `: ${e.message}`), new Error(a);
        }
        return this;
    }
    static fromBinary(e, a) {
        return (new c).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new c).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new c).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(c, e, a);
    }
}
exports.Int32Value = c, c.runtime = s.proto3, c.typeName = "google.protobuf.Int32Value", c.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]), c.fieldWrapper = {
    wrapField: (e)=>new c({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class T extends o.Message {
    constructor(e){
        super(), this.value = 0, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(t.ScalarType.UINT32, this.value, !0);
    }
    fromJson(e, a) {
        try {
            this.value = s.proto3.json.readScalar(t.ScalarType.UINT32, e);
        } catch (e) {
            let a = 'cannot decode message google.protobuf.UInt32Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (a += `: ${e.message}`), new Error(a);
        }
        return this;
    }
    static fromBinary(e, a) {
        return (new T).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new T).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new T).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(T, e, a);
    }
}
exports.UInt32Value = T, T.runtime = s.proto3, T.typeName = "google.protobuf.UInt32Value", T.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 13
        }
    ]), T.fieldWrapper = {
    wrapField: (e)=>new T({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class _ extends o.Message {
    constructor(e){
        super(), this.value = !1, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(t.ScalarType.BOOL, this.value, !0);
    }
    fromJson(e, a) {
        try {
            this.value = s.proto3.json.readScalar(t.ScalarType.BOOL, e);
        } catch (e) {
            let a = 'cannot decode message google.protobuf.BoolValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (a += `: ${e.message}`), new Error(a);
        }
        return this;
    }
    static fromBinary(e, a) {
        return (new _).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new _).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new _).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(_, e, a);
    }
}
exports.BoolValue = _, _.runtime = s.proto3, _.typeName = "google.protobuf.BoolValue", _.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }
    ]), _.fieldWrapper = {
    wrapField: (e)=>new _({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class p extends o.Message {
    constructor(e){
        super(), this.value = "", s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(t.ScalarType.STRING, this.value, !0);
    }
    fromJson(e, a) {
        try {
            this.value = s.proto3.json.readScalar(t.ScalarType.STRING, e);
        } catch (e) {
            let a = 'cannot decode message google.protobuf.StringValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (a += `: ${e.message}`), new Error(a);
        }
        return this;
    }
    static fromBinary(e, a) {
        return (new p).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new p).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new p).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(p, e, a);
    }
}
exports.StringValue = p, p.runtime = s.proto3, p.typeName = "google.protobuf.StringValue", p.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), p.fieldWrapper = {
    wrapField: (e)=>new p({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class u extends o.Message {
    constructor(e){
        super(), this.value = new Uint8Array(0), s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(t.ScalarType.BYTES, this.value, !0);
    }
    fromJson(e, a) {
        try {
            this.value = s.proto3.json.readScalar(t.ScalarType.BYTES, e);
        } catch (e) {
            let a = 'cannot decode message google.protobuf.BytesValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (a += `: ${e.message}`), new Error(a);
        }
        return this;
    }
    static fromBinary(e, a) {
        return (new u).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new u).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new u).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(u, e, a);
    }
}
exports.BytesValue = u, u.runtime = s.proto3, u.typeName = "google.protobuf.BytesValue", u.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]), u.fieldWrapper = {
    wrapField: (e)=>new u({
            value: e
        }),
    unwrapField: (e)=>e.value
};
