import { Dm, Ude } from "./message.js";
import { bAe, x } from "./proto3.js";
import { E } from "./tslib.es6.js";
var yei, Sei, qd, kei, nz, wei, sDo;
export { Sei, kei, nz, qd, sDo, wei, yei };
var __wakaru_Cei_initialized = false;
export function Cei() {
if (__wakaru_Cei_initialized) return;
__wakaru_Cei_initialized = true;
"use strict";
E(), bAe(), Ude(), yei = ((t)=>(t[t.NULL_VALUE = 0] = "NULL_VALUE", t))(yei || {}), x.util.setEnumType(yei, "google.protobuf.NullValue", [
    {
        no: 0,
        name: "NULL_VALUE"
    }
]), Sei = class qXi extends Dm {
    constructor(e){
        super(), this.fields = {}, x.util.initPartial(e, this);
    }
    toJson(e) {
        const n = {};
        for (const [i, r] of Object.entries(this.fields))n[i] = r.toJson(e);
        return n;
    }
    fromJson(e, n) {
        if (typeof e != "object" || e == null || Array.isArray(e)) throw new Error("cannot decode google.protobuf.Struct from JSON " + x.json.debug(e));
        for (const [i, r] of Object.entries(e))this.fields[i] = nz.fromJson(r);
        return this;
    }
    static fromBinary(e, n) {
        return new qXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new qXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new qXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(qXi, e, n);
    }
}, Sei.runtime = x, Sei.typeName = "google.protobuf.Struct", Sei.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "fields",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: nz
            }
        }
    ]), qd = Sei, kei = class zXi extends Dm {
    constructor(e){
        super(), this.kind = {
            case: void 0
        }, x.util.initPartial(e, this);
    }
    toJson(e) {
        switch(this.kind.case){
            case "nullValue":
                return null;
            case "numberValue":
                if (!Number.isFinite(this.kind.value)) throw new Error("google.protobuf.Value cannot be NaN or Infinity");
                return this.kind.value;
            case "boolValue":
                return this.kind.value;
            case "stringValue":
                return this.kind.value;
            case "structValue":
            case "listValue":
                return this.kind.value.toJson({
                    ...e,
                    emitDefaultValues: !0
                });
        }
        throw new Error("google.protobuf.Value must have a value");
    }
    fromJson(e, n) {
        switch(typeof e){
            case "number":
                this.kind = {
                    case: "numberValue",
                    value: e
                };
                break;
            case "string":
                this.kind = {
                    case: "stringValue",
                    value: e
                };
                break;
            case "boolean":
                this.kind = {
                    case: "boolValue",
                    value: e
                };
                break;
            case "object":
                e === null ? this.kind = {
                    case: "nullValue",
                    value: 0
                } : Array.isArray(e) ? this.kind = {
                    case: "listValue",
                    value: sDo.fromJson(e)
                } : this.kind = {
                    case: "structValue",
                    value: qd.fromJson(e)
                };
                break;
            default:
                throw new Error("cannot decode google.protobuf.Value from JSON " + x.json.debug(e));
        }
        return this;
    }
    static fromBinary(e, n) {
        return new zXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new zXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new zXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(zXi, e, n);
    }
}, kei.runtime = x, kei.typeName = "google.protobuf.Value", kei.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "null_value",
            kind: "enum",
            T: x.getEnumType(yei),
            oneof: "kind"
        },
        {
            no: 2,
            name: "number_value",
            kind: "scalar",
            T: 1,
            oneof: "kind"
        },
        {
            no: 3,
            name: "string_value",
            kind: "scalar",
            T: 9,
            oneof: "kind"
        },
        {
            no: 4,
            name: "bool_value",
            kind: "scalar",
            T: 8,
            oneof: "kind"
        },
        {
            no: 5,
            name: "struct_value",
            kind: "message",
            T: qd,
            oneof: "kind"
        },
        {
            no: 6,
            name: "list_value",
            kind: "message",
            T: sDo,
            oneof: "kind"
        }
    ]), nz = kei, wei = class VXi extends Dm {
    constructor(e){
        super(), this.values = [], x.util.initPartial(e, this);
    }
    toJson(e) {
        return this.values.map((n)=>n.toJson());
    }
    fromJson(e, n) {
        if (!Array.isArray(e)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + x.json.debug(e));
        for (let i of e)this.values.push(nz.fromJson(i));
        return this;
    }
    static fromBinary(e, n) {
        return new VXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new VXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new VXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(VXi, e, n);
    }
}, wei.runtime = x, wei.typeName = "google.protobuf.ListValue", wei.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: nz,
            repeated: !0
        }
    ]), sDo = wei;

}
