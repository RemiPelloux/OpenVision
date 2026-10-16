"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BytesValue = exports.StringValue = exports.BoolValue = exports.UInt32Value = exports.Int32Value = exports.UInt64Value = exports.Int64Value = exports.FloatValue = exports.DoubleValue = void 0;
const n = require("./module-4193.js"), r = require("./module-7599.js"), o = require("./module-3408.js"), s = require("./module-1498.js");
class i extends n.Message {
    constructor(e){
        super(), this.value = 0, r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.DOUBLE, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.DOUBLE, e);
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
        return r.proto3.util.equals(i, e, t);
    }
}
exports.DoubleValue = i, i.runtime = r.proto3, i.typeName = "google.protobuf.DoubleValue", i.fields = r.proto3.util.newFieldList(()=>[
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
class a extends n.Message {
    constructor(e){
        super(), this.value = 0, r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.FLOAT, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.FLOAT, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.FloatValue from JSON"';
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
        return r.proto3.util.equals(a, e, t);
    }
}
exports.FloatValue = a, a.runtime = r.proto3, a.typeName = "google.protobuf.FloatValue", a.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2
        }
    ]), a.fieldWrapper = {
    wrapField: (e)=>new a({
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
    fromJson(e, t) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.INT64, e);
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
        return r.proto3.util.equals(c, e, t);
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
    fromJson(e, t) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.UINT64, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.UInt64Value from JSON"';
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
        return r.proto3.util.equals(l, e, t);
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
class u extends n.Message {
    constructor(e){
        super(), this.value = 0, r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.INT32, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.INT32, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.Int32Value from JSON"';
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
        return r.proto3.util.equals(u, e, t);
    }
}
exports.Int32Value = u, u.runtime = r.proto3, u.typeName = "google.protobuf.Int32Value", u.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]), u.fieldWrapper = {
    wrapField: (e)=>new u({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class g extends n.Message {
    constructor(e){
        super(), this.value = 0, r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.UINT32, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.UINT32, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.UInt32Value from JSON"';
            throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new g).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new g).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new g).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(g, e, t);
    }
}
exports.UInt32Value = g, g.runtime = r.proto3, g.typeName = "google.protobuf.UInt32Value", g.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 13
        }
    ]), g.fieldWrapper = {
    wrapField: (e)=>new g({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class E extends n.Message {
    constructor(e){
        super(), this.value = !1, r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.BOOL, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.BOOL, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.BoolValue from JSON"';
            throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new E).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new E).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new E).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(E, e, t);
    }
}
exports.BoolValue = E, E.runtime = r.proto3, E.typeName = "google.protobuf.BoolValue", E.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }
    ]), E.fieldWrapper = {
    wrapField: (e)=>new E({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class h extends n.Message {
    constructor(e){
        super(), this.value = "", r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.STRING, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.STRING, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.StringValue from JSON"';
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
        return r.proto3.util.equals(h, e, t);
    }
}
exports.StringValue = h, h.runtime = r.proto3, h.typeName = "google.protobuf.StringValue", h.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), h.fieldWrapper = {
    wrapField: (e)=>new h({
            value: e
        }),
    unwrapField: (e)=>e.value
};
class d extends n.Message {
    constructor(e){
        super(), this.value = new Uint8Array(0), r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return r.proto3.json.writeScalar(o.ScalarType.BYTES, this.value, !0);
    }
    fromJson(e, t) {
        try {
            this.value = r.proto3.json.readScalar(o.ScalarType.BYTES, e);
        } catch (e) {
            let t = 'cannot decode message google.protobuf.BytesValue from JSON"';
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
        return r.proto3.util.equals(d, e, t);
    }
}
exports.BytesValue = d, d.runtime = r.proto3, d.typeName = "google.protobuf.BytesValue", d.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]), d.fieldWrapper = {
    wrapField: (e)=>new d({
            value: e
        }),
    unwrapField: (e)=>e.value
};
