"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BytesValue = exports.StringValue = exports.BoolValue = exports.UInt32Value = exports.Int32Value = exports.UInt64Value = exports.Int64Value = exports.FloatValue = exports.DoubleValue = void 0;
const n = require("./module-4193.js"), s = require("./module-7599.js"), i = require("./module-3408.js"), o = require("./module-1498.js");
class a extends n.Message {
    constructor(t){
        super(), this.value = 0, s.proto3.util.initPartial(t, this);
    }
    toJson(t) {
        return s.proto3.json.writeScalar(i.ScalarType.DOUBLE, this.value, !0);
    }
    fromJson(t, e) {
        try {
            this.value = s.proto3.json.readScalar(i.ScalarType.DOUBLE, t);
        } catch (t) {
            let e = 'cannot decode message google.protobuf.DoubleValue from JSON"';
            throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
        }
        return this;
    }
    static fromBinary(t, e) {
        return (new a).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new a).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new a).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto3.util.equals(a, t, e);
    }
}
exports.DoubleValue = a, a.runtime = s.proto3, a.typeName = "google.protobuf.DoubleValue", a.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 1
        }
    ]), a.fieldWrapper = {
    wrapField: (t)=>new a({
            value: t
        }),
    unwrapField: (t)=>t.value
};
class u extends n.Message {
    constructor(t){
        super(), this.value = 0, s.proto3.util.initPartial(t, this);
    }
    toJson(t) {
        return s.proto3.json.writeScalar(i.ScalarType.FLOAT, this.value, !0);
    }
    fromJson(t, e) {
        try {
            this.value = s.proto3.json.readScalar(i.ScalarType.FLOAT, t);
        } catch (t) {
            let e = 'cannot decode message google.protobuf.FloatValue from JSON"';
            throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
        }
        return this;
    }
    static fromBinary(t, e) {
        return (new u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto3.util.equals(u, t, e);
    }
}
exports.FloatValue = u, u.runtime = s.proto3, u.typeName = "google.protobuf.FloatValue", u.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2
        }
    ]), u.fieldWrapper = {
    wrapField: (t)=>new u({
            value: t
        }),
    unwrapField: (t)=>t.value
};
class c extends n.Message {
    constructor(t){
        super(), this.value = o.protoInt64.zero, s.proto3.util.initPartial(t, this);
    }
    toJson(t) {
        return s.proto3.json.writeScalar(i.ScalarType.INT64, this.value, !0);
    }
    fromJson(t, e) {
        try {
            this.value = s.proto3.json.readScalar(i.ScalarType.INT64, t);
        } catch (t) {
            let e = 'cannot decode message google.protobuf.Int64Value from JSON"';
            throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
        }
        return this;
    }
    static fromBinary(t, e) {
        return (new c).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new c).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new c).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto3.util.equals(c, t, e);
    }
}
exports.Int64Value = c, c.runtime = s.proto3, c.typeName = "google.protobuf.Int64Value", c.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 3
        }
    ]), c.fieldWrapper = {
    wrapField: (t)=>new c({
            value: t
        }),
    unwrapField: (t)=>t.value
};
class l extends n.Message {
    constructor(t){
        super(), this.value = o.protoInt64.zero, s.proto3.util.initPartial(t, this);
    }
    toJson(t) {
        return s.proto3.json.writeScalar(i.ScalarType.UINT64, this.value, !0);
    }
    fromJson(t, e) {
        try {
            this.value = s.proto3.json.readScalar(i.ScalarType.UINT64, t);
        } catch (t) {
            let e = 'cannot decode message google.protobuf.UInt64Value from JSON"';
            throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
        }
        return this;
    }
    static fromBinary(t, e) {
        return (new l).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new l).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new l).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto3.util.equals(l, t, e);
    }
}
exports.UInt64Value = l, l.runtime = s.proto3, l.typeName = "google.protobuf.UInt64Value", l.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 4
        }
    ]), l.fieldWrapper = {
    wrapField: (t)=>new l({
            value: t
        }),
    unwrapField: (t)=>t.value
};
class m extends n.Message {
    constructor(t){
        super(), this.value = 0, s.proto3.util.initPartial(t, this);
    }
    toJson(t) {
        return s.proto3.json.writeScalar(i.ScalarType.INT32, this.value, !0);
    }
    fromJson(t, e) {
        try {
            this.value = s.proto3.json.readScalar(i.ScalarType.INT32, t);
        } catch (t) {
            let e = 'cannot decode message google.protobuf.Int32Value from JSON"';
            throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
        }
        return this;
    }
    static fromBinary(t, e) {
        return (new m).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new m).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new m).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto3.util.equals(m, t, e);
    }
}
exports.Int32Value = m, m.runtime = s.proto3, m.typeName = "google.protobuf.Int32Value", m.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]), m.fieldWrapper = {
    wrapField: (t)=>new m({
            value: t
        }),
    unwrapField: (t)=>t.value
};
class d extends n.Message {
    constructor(t){
        super(), this.value = 0, s.proto3.util.initPartial(t, this);
    }
    toJson(t) {
        return s.proto3.json.writeScalar(i.ScalarType.UINT32, this.value, !0);
    }
    fromJson(t, e) {
        try {
            this.value = s.proto3.json.readScalar(i.ScalarType.UINT32, t);
        } catch (t) {
            let e = 'cannot decode message google.protobuf.UInt32Value from JSON"';
            throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
        }
        return this;
    }
    static fromBinary(t, e) {
        return (new d).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new d).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new d).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto3.util.equals(d, t, e);
    }
}
exports.UInt32Value = d, d.runtime = s.proto3, d.typeName = "google.protobuf.UInt32Value", d.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 13
        }
    ]), d.fieldWrapper = {
    wrapField: (t)=>new d({
            value: t
        }),
    unwrapField: (t)=>t.value
};
class f extends n.Message {
    constructor(t){
        super(), this.value = !1, s.proto3.util.initPartial(t, this);
    }
    toJson(t) {
        return s.proto3.json.writeScalar(i.ScalarType.BOOL, this.value, !0);
    }
    fromJson(t, e) {
        try {
            this.value = s.proto3.json.readScalar(i.ScalarType.BOOL, t);
        } catch (t) {
            let e = 'cannot decode message google.protobuf.BoolValue from JSON"';
            throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
        }
        return this;
    }
    static fromBinary(t, e) {
        return (new f).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new f).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new f).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto3.util.equals(f, t, e);
    }
}
exports.BoolValue = f, f.runtime = s.proto3, f.typeName = "google.protobuf.BoolValue", f.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }
    ]), f.fieldWrapper = {
    wrapField: (t)=>new f({
            value: t
        }),
    unwrapField: (t)=>t.value
};
class p extends n.Message {
    constructor(t){
        super(), this.value = "", s.proto3.util.initPartial(t, this);
    }
    toJson(t) {
        return s.proto3.json.writeScalar(i.ScalarType.STRING, this.value, !0);
    }
    fromJson(t, e) {
        try {
            this.value = s.proto3.json.readScalar(i.ScalarType.STRING, t);
        } catch (t) {
            let e = 'cannot decode message google.protobuf.StringValue from JSON"';
            throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
        }
        return this;
    }
    static fromBinary(t, e) {
        return (new p).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new p).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new p).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto3.util.equals(p, t, e);
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
    wrapField: (t)=>new p({
            value: t
        }),
    unwrapField: (t)=>t.value
};
class h extends n.Message {
    constructor(t){
        super(), this.value = new Uint8Array(0), s.proto3.util.initPartial(t, this);
    }
    toJson(t) {
        return s.proto3.json.writeScalar(i.ScalarType.BYTES, this.value, !0);
    }
    fromJson(t, e) {
        try {
            this.value = s.proto3.json.readScalar(i.ScalarType.BYTES, t);
        } catch (t) {
            let e = 'cannot decode message google.protobuf.BytesValue from JSON"';
            throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
        }
        return this;
    }
    static fromBinary(t, e) {
        return (new h).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new h).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new h).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto3.util.equals(h, t, e);
    }
}
exports.BytesValue = h, h.runtime = s.proto3, h.typeName = "google.protobuf.BytesValue", h.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]), h.fieldWrapper = {
    wrapField: (t)=>new h({
            value: t
        }),
    unwrapField: (t)=>t.value
};
