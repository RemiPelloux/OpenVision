"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BytesValue = exports.StringValue = exports.BoolValue = exports.UInt32Value = exports.Int32Value = exports.UInt64Value = exports.Int64Value = exports.FloatValue = exports.DoubleValue = void 0;
const t = require("./module-4193.js"), s = require("./module-7599.js"), o = require("./module-3408.js"), r = require("./module-1498.js");
class i extends t.Message {
    constructor(e){
        super(), this.value = 0, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(o.ScalarType.DOUBLE, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = s.proto3.json.readScalar(o.ScalarType.DOUBLE, e);
        } catch (e) {
            let n = 'cannot decode message google.protobuf.DoubleValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
        }
        return this;
    }
    static fromBinary(e, n) {
        return (new i).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new i).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new i).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto3.util.equals(i, e, n);
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
class A extends t.Message {
    constructor(e){
        super(), this.value = 0, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(o.ScalarType.FLOAT, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = s.proto3.json.readScalar(o.ScalarType.FLOAT, e);
        } catch (e) {
            let n = 'cannot decode message google.protobuf.FloatValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
        }
        return this;
    }
    static fromBinary(e, n) {
        return (new A).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new A).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new A).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto3.util.equals(A, e, n);
    }
}
exports.FloatValue = A, A.runtime = s.proto3, A.typeName = "google.protobuf.FloatValue", A.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2
        }
    ]), A.fieldWrapper = {
    wrapField: (e)=>new A({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class l extends t.Message {
    constructor(e){
        super(), this.value = r.protoInt64.zero, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(o.ScalarType.INT64, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = s.proto3.json.readScalar(o.ScalarType.INT64, e);
        } catch (e) {
            let n = 'cannot decode message google.protobuf.Int64Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
        }
        return this;
    }
    static fromBinary(e, n) {
        return (new l).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new l).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new l).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto3.util.equals(l, e, n);
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
class c extends t.Message {
    constructor(e){
        super(), this.value = r.protoInt64.zero, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(o.ScalarType.UINT64, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = s.proto3.json.readScalar(o.ScalarType.UINT64, e);
        } catch (e) {
            let n = 'cannot decode message google.protobuf.UInt64Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
        }
        return this;
    }
    static fromBinary(e, n) {
        return (new c).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new c).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new c).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto3.util.equals(c, e, n);
    }
}
exports.UInt64Value = c, c.runtime = s.proto3, c.typeName = "google.protobuf.UInt64Value", c.fields = s.proto3.util.newFieldList(()=>[
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
class m extends t.Message {
    constructor(e){
        super(), this.value = 0, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(o.ScalarType.INT32, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = s.proto3.json.readScalar(o.ScalarType.INT32, e);
        } catch (e) {
            let n = 'cannot decode message google.protobuf.Int32Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
        }
        return this;
    }
    static fromBinary(e, n) {
        return (new m).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new m).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new m).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto3.util.equals(m, e, n);
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
    wrapField: (e)=>new m({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class d extends t.Message {
    constructor(e){
        super(), this.value = 0, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(o.ScalarType.UINT32, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = s.proto3.json.readScalar(o.ScalarType.UINT32, e);
        } catch (e) {
            let n = 'cannot decode message google.protobuf.UInt32Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
        }
        return this;
    }
    static fromBinary(e, n) {
        return (new d).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new d).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new d).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto3.util.equals(d, e, n);
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
    wrapField: (e)=>new d({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class g extends t.Message {
    constructor(e){
        super(), this.value = !1, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(o.ScalarType.BOOL, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = s.proto3.json.readScalar(o.ScalarType.BOOL, e);
        } catch (e) {
            let n = 'cannot decode message google.protobuf.BoolValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
        }
        return this;
    }
    static fromBinary(e, n) {
        return (new g).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new g).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new g).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto3.util.equals(g, e, n);
    }
}
exports.BoolValue = g, g.runtime = s.proto3, g.typeName = "google.protobuf.BoolValue", g.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }
    ]), g.fieldWrapper = {
    wrapField: (e)=>new g({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class u extends t.Message {
    constructor(e){
        super(), this.value = "", s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(o.ScalarType.STRING, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = s.proto3.json.readScalar(o.ScalarType.STRING, e);
        } catch (e) {
            let n = 'cannot decode message google.protobuf.StringValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
        }
        return this;
    }
    static fromBinary(e, n) {
        return (new u).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new u).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new u).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto3.util.equals(u, e, n);
    }
}
exports.StringValue = u, u.runtime = s.proto3, u.typeName = "google.protobuf.StringValue", u.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), u.fieldWrapper = {
    wrapField: (e)=>new u({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class E extends t.Message {
    constructor(e){
        super(), this.value = new Uint8Array(0), s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return s.proto3.json.writeScalar(o.ScalarType.BYTES, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = s.proto3.json.readScalar(o.ScalarType.BYTES, e);
        } catch (e) {
            let n = 'cannot decode message google.protobuf.BytesValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
        }
        return this;
    }
    static fromBinary(e, n) {
        return (new E).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new E).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new E).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto3.util.equals(E, e, n);
    }
}
exports.BytesValue = E, E.runtime = s.proto3, E.typeName = "google.protobuf.BytesValue", E.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]), E.fieldWrapper = {
    wrapField: (e)=>new E({
            value: e
        }),
    unwrapField: (e)=>e.value
};
