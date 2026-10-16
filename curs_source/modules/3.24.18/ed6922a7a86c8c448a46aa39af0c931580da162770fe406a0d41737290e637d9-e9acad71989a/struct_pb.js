import { IJ, yg } from "./message.js";
import { hfe, k } from "./proto3.js";
import { x } from "./tslib.es6.js";
var ubn, dbn, fd, hbn, EW, pbn, kss;
export { EW, dbn, fd, hbn, kss, pbn, ubn };
var __wakaru_mbn_initialized = false;
export function mbn() {
if (__wakaru_mbn_initialized) return;
__wakaru_mbn_initialized = true;
"use strict";
x(), hfe(), IJ(), ubn = ((e)=>(e[e.NULL_VALUE = 0] = "NULL_VALUE", e))(ubn || {}), k.util.setEnumType(ubn, "google.protobuf.NullValue", [
    {
        no: 0,
        name: "NULL_VALUE"
    }
]), dbn = class MZn extends yg {
    constructor(t){
        super(), this.fields = {}, k.util.initPartial(t, this);
    }
    toJson(t) {
        const n = {};
        for (const [i, r] of Object.entries(this.fields))n[i] = r.toJson(t);
        return n;
    }
    fromJson(t, n) {
        if (typeof t != "object" || t == null || Array.isArray(t)) throw new Error("cannot decode google.protobuf.Struct from JSON " + k.json.debug(t));
        for (const [i, r] of Object.entries(t))this.fields[i] = EW.fromJson(r);
        return this;
    }
    static fromBinary(t, n) {
        return new MZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new MZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new MZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(MZn, t, n);
    }
}, dbn.runtime = k, dbn.typeName = "google.protobuf.Struct", dbn.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "fields",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: EW
            }
        }
    ]), fd = dbn, hbn = class PZn extends yg {
    constructor(t){
        super(), this.kind = {
            case: void 0
        }, k.util.initPartial(t, this);
    }
    toJson(t) {
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
                    ...t,
                    emitDefaultValues: !0
                });
        }
        throw new Error("google.protobuf.Value must have a value");
    }
    fromJson(t, n) {
        switch(typeof t){
            case "number":
                this.kind = {
                    case: "numberValue",
                    value: t
                };
                break;
            case "string":
                this.kind = {
                    case: "stringValue",
                    value: t
                };
                break;
            case "boolean":
                this.kind = {
                    case: "boolValue",
                    value: t
                };
                break;
            case "object":
                t === null ? this.kind = {
                    case: "nullValue",
                    value: 0
                } : Array.isArray(t) ? this.kind = {
                    case: "listValue",
                    value: kss.fromJson(t)
                } : this.kind = {
                    case: "structValue",
                    value: fd.fromJson(t)
                };
                break;
            default:
                throw new Error("cannot decode google.protobuf.Value from JSON " + k.json.debug(t));
        }
        return this;
    }
    static fromBinary(t, n) {
        return new PZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new PZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new PZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(PZn, t, n);
    }
}, hbn.runtime = k, hbn.typeName = "google.protobuf.Value", hbn.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "null_value",
            kind: "enum",
            T: k.getEnumType(ubn),
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
            T: fd,
            oneof: "kind"
        },
        {
            no: 6,
            name: "list_value",
            kind: "message",
            T: kss,
            oneof: "kind"
        }
    ]), EW = hbn, pbn = class LZn extends yg {
    constructor(t){
        super(), this.values = [], k.util.initPartial(t, this);
    }
    toJson(t) {
        return this.values.map((n)=>n.toJson());
    }
    fromJson(t, n) {
        if (!Array.isArray(t)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + k.json.debug(t));
        for (let i of t)this.values.push(EW.fromJson(i));
        return this;
    }
    static fromBinary(t, n) {
        return new LZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new LZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new LZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(LZn, t, n);
    }
}, pbn.runtime = k, pbn.typeName = "google.protobuf.ListValue", pbn.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: EW,
            repeated: !0
        }
    ]), kss = pbn;

}
