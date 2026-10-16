import { $r, fe } from "./message.js";
import { $s, c } from "./proto3.js";
import { h } from "./tslib.es6.js";
var ug, mg, ba, pg, To, hg, jM;
export { To, ba, hg, jM, mg, pg, ug };
var __wakaru_yH_initialized = false;
export function yH() {
if (__wakaru_yH_initialized) return;
__wakaru_yH_initialized = true;
"use strict";
h(), $s(), $r(), ug = ((e)=>(e[e.NULL_VALUE = 0] = "NULL_VALUE", e))(ug || {}), c.util.setEnumType(ug, "google.protobuf.NullValue", [
    {
        no: 0,
        name: "NULL_VALUE"
    }
]), mg = class q_ extends fe {
    constructor(t){
        super(), this.fields = {}, c.util.initPartial(t, this);
    }
    toJson(t) {
        const n = {};
        for (const [r, s] of Object.entries(this.fields))n[r] = s.toJson(t);
        return n;
    }
    fromJson(t, n) {
        if (typeof t != "object" || t == null || Array.isArray(t)) throw new Error("cannot decode google.protobuf.Struct from JSON " + c.json.debug(t));
        for (const [r, s] of Object.entries(t))this.fields[r] = To.fromJson(s);
        return this;
    }
    static fromBinary(t, n) {
        return new q_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new q_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new q_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(q_, t, n);
    }
}, mg.runtime = c, mg.typeName = "google.protobuf.Struct", mg.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "fields",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: To
            }
        }
    ]), ba = mg, pg = class K_ extends fe {
    constructor(t){
        super(), this.kind = {
            case: void 0
        }, c.util.initPartial(t, this);
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
                    value: jM.fromJson(t)
                } : this.kind = {
                    case: "structValue",
                    value: ba.fromJson(t)
                };
                break;
            default:
                throw new Error("cannot decode google.protobuf.Value from JSON " + c.json.debug(t));
        }
        return this;
    }
    static fromBinary(t, n) {
        return new K_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new K_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new K_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(K_, t, n);
    }
}, pg.runtime = c, pg.typeName = "google.protobuf.Value", pg.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "null_value",
            kind: "enum",
            T: c.getEnumType(ug),
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
            T: ba,
            oneof: "kind"
        },
        {
            no: 6,
            name: "list_value",
            kind: "message",
            T: jM,
            oneof: "kind"
        }
    ]), To = pg, hg = class z_ extends fe {
    constructor(t){
        super(), this.values = [], c.util.initPartial(t, this);
    }
    toJson(t) {
        return this.values.map((n)=>n.toJson());
    }
    fromJson(t, n) {
        if (!Array.isArray(t)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + c.json.debug(t));
        for (let r of t)this.values.push(To.fromJson(r));
        return this;
    }
    static fromBinary(t, n) {
        return new z_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new z_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new z_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(z_, t, n);
    }
}, hg.runtime = c, hg.typeName = "google.protobuf.ListValue", hg.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: To,
            repeated: !0
        }
    ]), jM = hg;

}
