import { Dm, Ude } from "./message.js";
import { bAe, x } from "./proto3.js";
import { E } from "./tslib.es6.js";
var _ei, iDo;
export { _ei, iDo };
var __wakaru_rDo_initialized = false;
export function rDo() {
if (__wakaru_rDo_initialized) return;
__wakaru_rDo_initialized = true;
"use strict";
E(), Ude(), bAe(), _ei = class qjn extends Dm {
    constructor(e){
        super(), this.typeUrl = "", this.value = new Uint8Array(0), x.util.initPartial(e, this);
    }
    toJson(e) {
        if (this.typeUrl === "") return {};
        const n = this.typeUrlToName(this.typeUrl), i = e?.typeRegistry?.findMessage(n);
        if (!i) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let s = i.fromBinary(this.value).toJson(e);
        return (n.startsWith("google.protobuf.") || s === null || Array.isArray(s) || typeof s != "object") && (s = {
            value: s
        }), s["@type"] = this.typeUrl, s;
    }
    fromJson(e, n) {
        if (e === null || Array.isArray(e) || typeof e != "object") throw new Error(`cannot decode message google.protobuf.Any from JSON: expected object but got ${e === null ? "null" : Array.isArray(e) ? "array" : typeof e}`);
        if (Object.keys(e).length == 0) return this;
        const i = e["@type"];
        if (typeof i != "string" || i == "") throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const r = this.typeUrlToName(i), s = n?.typeRegistry?.findMessage(r);
        if (!s) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${i} is not in the type registry`);
        let o;
        if (r.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) o = s.fromJson(e.value, n);
        else {
            const a = Object.assign({}, e);
            delete a["@type"], o = s.fromJson(a, n);
        }
        return this.packFrom(o), this;
    }
    packFrom(e) {
        this.value = e.toBinary(), this.typeUrl = this.typeNameToUrl(e.getType().typeName);
    }
    unpackTo(e) {
        return this.is(e.getType()) ? (e.fromBinary(this.value), !0) : !1;
    }
    unpack(e) {
        if (this.typeUrl === "") return;
        const n = e.findMessage(this.typeUrlToName(this.typeUrl));
        if (n) return n.fromBinary(this.value);
    }
    is(e) {
        if (this.typeUrl === "") return !1;
        const n = this.typeUrlToName(this.typeUrl);
        let i = "";
        return typeof e == "string" ? i = e : i = e.typeName, n === i;
    }
    typeNameToUrl(e) {
        return `type.googleapis.com/${e}`;
    }
    typeUrlToName(e) {
        if (!e.length) throw new Error(`invalid type url: ${e}`);
        const n = e.lastIndexOf("/"), i = n >= 0 ? e.substring(n + 1) : e;
        if (!i.length) throw new Error(`invalid type url: ${e}`);
        return i;
    }
    static pack(e) {
        const n = new qjn;
        return n.packFrom(e), n;
    }
    static fromBinary(e, n) {
        return new qjn().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new qjn().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new qjn().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(qjn, e, n);
    }
}, _ei.runtime = x, _ei.typeName = "google.protobuf.Any", _ei.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "type_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]), iDo = _ei;

}
