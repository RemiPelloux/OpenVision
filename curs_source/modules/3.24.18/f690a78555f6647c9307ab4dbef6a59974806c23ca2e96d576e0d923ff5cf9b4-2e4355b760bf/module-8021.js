"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BytesValue = exports.StringValue = exports.BoolValue = exports.UInt32Value = exports.Int32Value = exports.UInt64Value = exports.Int64Value = exports.FloatValue = exports.DoubleValue = void 0;
const n = require("./module-4193.js"), r = require("./module-7599.js"), o = require("./module-3408.js"), s = require("./module-1498.js");
class a extends n.Message {
    constructor(e){
        super(), this.value = 0, r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.DOUBLE, this.value, !0);
    }
    fromJson(e, A) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.DOUBLE, e);
        } catch (e) {
            let A = 'cannot decode message google.protobuf.DoubleValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
        }
        return this;
    }
    static fromBinary(e, A) {
        return (new a).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new a).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new a).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto3.util.equals(a, e, A);
    }
}
exports.DoubleValue = a, a.runtime = r.proto3, a.typeName = "google.protobuf.DoubleValue", a.fields = r.proto3.util.newFieldList(()=>[
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
class i extends n.Message {
    constructor(e){
        super(), this.value = 0, r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.FLOAT, this.value, !0);
    }
    fromJson(e, A) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.FLOAT, e);
        } catch (e) {
            let A = 'cannot decode message google.protobuf.FloatValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
        }
        return this;
    }
    static fromBinary(e, A) {
        return (new i).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new i).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new i).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto3.util.equals(i, e, A);
    }
}
exports.FloatValue = i, i.runtime = r.proto3, i.typeName = "google.protobuf.FloatValue", i.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2
        }
    ]), i.fieldWrapper = {
    wrapField: (e)=>new i({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class c extends n.Message {
    constructor(e){
        super(), this.value = s.protoInt64.zero, r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.INT64, this.value, !0);
    }
    fromJson(e, A) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.INT64, e);
        } catch (e) {
            let A = 'cannot decode message google.protobuf.Int64Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
        }
        return this;
    }
    static fromBinary(e, A) {
        return (new c).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new c).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new c).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto3.util.equals(c, e, A);
    }
}
exports.Int64Value = c, c.runtime = r.proto3, c.typeName = "google.protobuf.Int64Value", c.fields = r.proto3.util.newFieldList(()=>[
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
class l extends n.Message {
    constructor(e){
        super(), this.value = s.protoInt64.zero, r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.UINT64, this.value, !0);
    }
    fromJson(e, A) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.UINT64, e);
        } catch (e) {
            let A = 'cannot decode message google.protobuf.UInt64Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
        }
        return this;
    }
    static fromBinary(e, A) {
        return (new l).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new l).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new l).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto3.util.equals(l, e, A);
    }
}
exports.UInt64Value = l, l.runtime = r.proto3, l.typeName = "google.protobuf.UInt64Value", l.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 4
        }
    ]), l.fieldWrapper = {
    wrapField: (e)=>new l({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class g extends n.Message {
    constructor(e){
        super(), this.value = 0, r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.INT32, this.value, !0);
    }
    fromJson(e, A) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.INT32, e);
        } catch (e) {
            let A = 'cannot decode message google.protobuf.Int32Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
        }
        return this;
    }
    static fromBinary(e, A) {
        return (new g).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new g).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new g).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto3.util.equals(g, e, A);
    }
}
exports.Int32Value = g, g.runtime = r.proto3, g.typeName = "google.protobuf.Int32Value", g.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]), g.fieldWrapper = {
    wrapField: (e)=>new g({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class E extends n.Message {
    constructor(e){
        super(), this.value = 0, r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.UINT32, this.value, !0);
    }
    fromJson(e, A) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.UINT32, e);
        } catch (e) {
            let A = 'cannot decode message google.protobuf.UInt32Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
        }
        return this;
    }
    static fromBinary(e, A) {
        return (new E).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new E).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new E).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto3.util.equals(E, e, A);
    }
}
exports.UInt32Value = E, E.runtime = r.proto3, E.typeName = "google.protobuf.UInt32Value", E.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 13
        }
    ]), E.fieldWrapper = {
    wrapField: (e)=>new E({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class u extends n.Message {
    constructor(e){
        super(), this.value = !1, r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.BOOL, this.value, !0);
    }
    fromJson(e, A) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.BOOL, e);
        } catch (e) {
            let A = 'cannot decode message google.protobuf.BoolValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
        }
        return this;
    }
    static fromBinary(e, A) {
        return (new u).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new u).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new u).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto3.util.equals(u, e, A);
    }
}
exports.BoolValue = u, u.runtime = r.proto3, u.typeName = "google.protobuf.BoolValue", u.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }
    ]), u.fieldWrapper = {
    wrapField: (e)=>new u({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class d extends n.Message {
    constructor(e){
        super(), this.value = "", r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.STRING, this.value, !0);
    }
    fromJson(e, A) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.STRING, e);
        } catch (e) {
            let A = 'cannot decode message google.protobuf.StringValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
        }
        return this;
    }
    static fromBinary(e, A) {
        return (new d).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new d).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new d).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto3.util.equals(d, e, A);
    }
}
exports.StringValue = d, d.runtime = r.proto3, d.typeName = "google.protobuf.StringValue", d.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), d.fieldWrapper = {
    wrapField: (e)=>new d({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class I extends n.Message {
    constructor(e){
        super(), this.value = new Uint8Array(0), r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.BYTES, this.value, !0);
    }
    fromJson(e, A) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.BYTES, e);
        } catch (e) {
            let A = 'cannot decode message google.protobuf.BytesValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
        }
        return this;
    }
    static fromBinary(e, A) {
        return (new I).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new I).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new I).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto3.util.equals(I, e, A);
    }
}
exports.BytesValue = I, I.runtime = r.proto3, I.typeName = "google.protobuf.BytesValue", I.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]), I.fieldWrapper = {
    wrapField: (e)=>new I({
            value: e
        }),
    unwrapField: (e)=>e.value
};
