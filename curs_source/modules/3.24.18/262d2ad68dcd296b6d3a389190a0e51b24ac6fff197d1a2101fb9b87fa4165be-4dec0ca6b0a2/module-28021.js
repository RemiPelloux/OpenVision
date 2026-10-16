"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BytesValue = exports.StringValue = exports.BoolValue = exports.UInt32Value = exports.Int32Value = exports.UInt64Value = exports.Int64Value = exports.FloatValue = exports.DoubleValue = void 0;
const n = require("./module-24193.js"), o = require("./module-27599.js"), s = require("./module-3408.js"), i = require("./module-11498.js");
class a extends n.Message {
    constructor(e){
        super(), this.value = 0, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(s.ScalarType.DOUBLE, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(s.ScalarType.DOUBLE, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.DoubleValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new a).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new a).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new a).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(a, e, t);
    }
}
exports.DoubleValue = a, a.runtime = o.proto3, a.typeName = "google.protobuf.DoubleValue", a.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 1
        }
    ]), a.fieldWrapper = {
    wrapField: (e)=>new a({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class l extends n.Message {
    constructor(e){
        super(), this.value = 0, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(s.ScalarType.FLOAT, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(s.ScalarType.FLOAT, e);
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
class c extends n.Message {
    constructor(e){
        super(), this.value = i.protoInt64.zero, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(s.ScalarType.INT64, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(s.ScalarType.INT64, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.Int64Value from JSON"';
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
exports.Int64Value = c, c.runtime = o.proto3, c.typeName = "google.protobuf.Int64Value", c.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 3
        }
    ]), c.fieldWrapper = {
    wrapField: (e)=>new c({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class u extends n.Message {
    constructor(e){
        super(), this.value = i.protoInt64.zero, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(s.ScalarType.UINT64, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(s.ScalarType.UINT64, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.UInt64Value from JSON"';
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
exports.UInt64Value = u, u.runtime = o.proto3, u.typeName = "google.protobuf.UInt64Value", u.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 4
        }
    ]), u.fieldWrapper = {
    wrapField: (e)=>new u({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class d extends n.Message {
    constructor(e){
        super(), this.value = 0, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(s.ScalarType.INT32, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(s.ScalarType.INT32, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.Int32Value from JSON"';
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
exports.Int32Value = d, d.runtime = o.proto3, d.typeName = "google.protobuf.Int32Value", d.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]), d.fieldWrapper = {
    wrapField: (e)=>new d({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class p extends n.Message {
    constructor(e){
        super(), this.value = 0, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(s.ScalarType.UINT32, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(s.ScalarType.UINT32, e);
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
class h extends n.Message {
    constructor(e){
        super(), this.value = !1, o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(s.ScalarType.BOOL, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(s.ScalarType.BOOL, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.BoolValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new h).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new h).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new h).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(h, e, t);
    }
}
exports.BoolValue = h, h.runtime = o.proto3, h.typeName = "google.protobuf.BoolValue", h.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }
    ]), h.fieldWrapper = {
    wrapField: (e)=>new h({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class m extends n.Message {
    constructor(e){
        super(), this.value = "", o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(s.ScalarType.STRING, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(s.ScalarType.STRING, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.StringValue from JSON"';
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
exports.StringValue = m, m.runtime = o.proto3, m.typeName = "google.protobuf.StringValue", m.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), m.fieldWrapper = {
    wrapField: (e)=>new m({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class f extends n.Message {
    constructor(e){
        super(), this.value = new Uint8Array(0), o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return o.proto3.json.writeScalar(s.ScalarType.BYTES, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = o.proto3.json.readScalar(s.ScalarType.BYTES, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.BytesValue from JSON"';
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
exports.BytesValue = f, f.runtime = o.proto3, f.typeName = "google.protobuf.BytesValue", f.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]), f.fieldWrapper = {
    wrapField: (e)=>new f({
            value: e
        }),
    unwrapField: (e)=>e.value
};
