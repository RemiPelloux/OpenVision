Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BytesValue = exports.StringValue = exports.BoolValue = exports.UInt32Value = exports.Int32Value = exports.UInt64Value = exports.Int64Value = exports.FloatValue = exports.DoubleValue = void 0;
const r = require("./module-193.js"), o = require("./module-599.js"), a = require("./module-408.js"), s = require("./module-498.js");
class i extends r.Message {
    constructor(e){
        super(), this.value = 0, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(a.ScalarType.DOUBLE, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(a.ScalarType.DOUBLE, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.DoubleValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new i).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new i).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new i).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(i, e, t);
    }
}
exports.DoubleValue = i, i.runtime = o.proto3, i.typeName = "google.protobuf.DoubleValue", i.fields = o.proto3.util.newFieldList(()=>[
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
class l extends r.Message {
    constructor(e){
        super(), this.value = 0, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(a.ScalarType.FLOAT, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(a.ScalarType.FLOAT, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.FloatValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new l).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new l).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new l).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(l, e, t);
    }
}
exports.FloatValue = l, l.runtime = o.proto3, l.typeName = "google.protobuf.FloatValue", l.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2
        }
    ]), l.fieldWrapper = {
    wrapField: (e)=>new l({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class u extends r.Message {
    constructor(e){
        super(), this.value = s.protoInt64.zero, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(a.ScalarType.INT64, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(a.ScalarType.INT64, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.Int64Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new u).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new u).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new u).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(u, e, t);
    }
}
exports.Int64Value = u, u.runtime = o.proto3, u.typeName = "google.protobuf.Int64Value", u.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 3
        }
    ]), u.fieldWrapper = {
    wrapField: (e)=>new u({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class c extends r.Message {
    constructor(e){
        super(), this.value = s.protoInt64.zero, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(a.ScalarType.UINT64, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(a.ScalarType.UINT64, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.UInt64Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new c).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new c).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new c).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(c, e, t);
    }
}
exports.UInt64Value = c, c.runtime = o.proto3, c.typeName = "google.protobuf.UInt64Value", c.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 4
        }
    ]), c.fieldWrapper = {
    wrapField: (e)=>new c({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class m extends r.Message {
    constructor(e){
        super(), this.value = 0, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(a.ScalarType.INT32, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(a.ScalarType.INT32, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.Int32Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new m).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new m).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new m).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(m, e, t);
    }
}
exports.Int32Value = m, m.runtime = o.proto3, m.typeName = "google.protobuf.Int32Value", m.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]), m.fieldWrapper = {
    wrapField: (e)=>new m({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class p extends r.Message {
    constructor(e){
        super(), this.value = 0, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(a.ScalarType.UINT32, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(a.ScalarType.UINT32, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.UInt32Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new p).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new p).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new p).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(p, e, t);
    }
}
exports.UInt32Value = p, p.runtime = o.proto3, p.typeName = "google.protobuf.UInt32Value", p.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 13
        }
    ]), p.fieldWrapper = {
    wrapField: (e)=>new p({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class d extends r.Message {
    constructor(e){
        super(), this.value = !1, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(a.ScalarType.BOOL, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(a.ScalarType.BOOL, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.BoolValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new d).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new d).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new d).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(d, e, t);
    }
}
exports.BoolValue = d, d.runtime = o.proto3, d.typeName = "google.protobuf.BoolValue", d.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }
    ]), d.fieldWrapper = {
    wrapField: (e)=>new d({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class f extends r.Message {
    constructor(e){
        super(), this.value = "", o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(a.ScalarType.STRING, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(a.ScalarType.STRING, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.StringValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new f).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new f).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new f).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(f, e, t);
    }
}
exports.StringValue = f, f.runtime = o.proto3, f.typeName = "google.protobuf.StringValue", f.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), f.fieldWrapper = {
    wrapField: (e)=>new f({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class T extends r.Message {
    constructor(e){
        super(), this.value = new Uint8Array(0), o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(a.ScalarType.BYTES, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(a.ScalarType.BYTES, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.BytesValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new T).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new T).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new T).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(T, e, t);
    }
}
exports.BytesValue = T, T.runtime = o.proto3, T.typeName = "google.protobuf.BytesValue", T.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]), T.fieldWrapper = {
    wrapField: (e)=>new T({
            value: e
        }),
    unwrapField: (e)=>e.value
};
