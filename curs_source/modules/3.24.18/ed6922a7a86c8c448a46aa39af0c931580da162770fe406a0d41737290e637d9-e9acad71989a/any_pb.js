import { IJ, yg } from "./message.js";
import { hfe, k } from "./proto3.js";
import { x } from "./tslib.es6.js";
var cbn, yss;
export { cbn, yss };
var __wakaru_Sss_initialized = false;
export function Sss() {
if (__wakaru_Sss_initialized) return;
__wakaru_Sss_initialized = true;
"use strict";
x(), IJ(), hfe(), cbn = class Min extends yg {
    constructor(t){
        super(), this.typeUrl = "", this.value = new Uint8Array(0), k.util.initPartial(t, this);
    }
    toJson(t) {
        if (this.typeUrl === "") return {};
        const n = this.typeUrlToName(this.typeUrl), i = t?.typeRegistry?.findMessage(n);
        if (!i) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let s = i.fromBinary(this.value).toJson(t);
        return (n.startsWith("google.protobuf.") || s === null || Array.isArray(s) || typeof s != "object") && (s = {
            value: s
        }), s["@type"] = this.typeUrl, s;
    }
    fromJson(t, n) {
        if (t === null || Array.isArray(t) || typeof t != "object") throw new Error(`cannot decode message google.protobuf.Any from JSON: expected object but got ${t === null ? "null" : Array.isArray(t) ? "array" : typeof t}`);
        if (Object.keys(t).length == 0) return this;
        const i = t["@type"];
        if (typeof i != "string" || i == "") throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const r = this.typeUrlToName(i), s = n?.typeRegistry?.findMessage(r);
        if (!s) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${i} is not in the type registry`);
        let o;
        if (r.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(t, "value")) o = s.fromJson(t.value, n);
        else {
            const a = Object.assign({}, t);
            delete a["@type"], o = s.fromJson(a, n);
        }
        return this.packFrom(o), this;
    }
    packFrom(t) {
        this.value = t.toBinary(), this.typeUrl = this.typeNameToUrl(t.getType().typeName);
    }
    unpackTo(t) {
        return this.is(t.getType()) ? (t.fromBinary(this.value), !0) : !1;
    }
    unpack(t) {
        if (this.typeUrl === "") return;
        const n = t.findMessage(this.typeUrlToName(this.typeUrl));
        if (n) return n.fromBinary(this.value);
    }
    is(t) {
        if (this.typeUrl === "") return !1;
        const n = this.typeUrlToName(this.typeUrl);
        let i = "";
        return typeof t == "string" ? i = t : i = t.typeName, n === i;
    }
    typeNameToUrl(t) {
        return `type.googleapis.com/${t}`;
    }
    typeUrlToName(t) {
        if (!t.length) throw new Error(`invalid type url: ${t}`);
        const n = t.lastIndexOf("/"), i = n >= 0 ? t.substring(n + 1) : t;
        if (!i.length) throw new Error(`invalid type url: ${t}`);
        return i;
    }
    static pack(t) {
        const n = new Min;
        return n.packFrom(t), n;
    }
    static fromBinary(t, n) {
        return new Min().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new Min().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new Min().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(Min, t, n);
    }
}, cbn.runtime = k, cbn.typeName = "google.protobuf.Any", cbn.fields = k.util.newFieldList(()=>[
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
    ]), yss = cbn;

}
