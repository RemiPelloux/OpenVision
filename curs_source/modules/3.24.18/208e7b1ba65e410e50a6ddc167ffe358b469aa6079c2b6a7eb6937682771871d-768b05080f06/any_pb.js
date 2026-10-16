import { $r, fe } from "./message.js";
import { $s, c } from "./proto3.js";
import { h } from "./tslib.es6.js";
var lg, VM;
export { VM, lg };
var __wakaru_$M_initialized = false;
export function $M() {
if (__wakaru_$M_initialized) return;
__wakaru_$M_initialized = true;
"use strict";
h(), $r(), $s(), lg = class pm extends fe {
    constructor(t){
        super(), this.typeUrl = "", this.value = new Uint8Array(0), c.util.initPartial(t, this);
    }
    toJson(t) {
        if (this.typeUrl === "") return {};
        const n = this.typeUrlToName(this.typeUrl), r = t?.typeRegistry?.findMessage(n);
        if (!r) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let i = r.fromBinary(this.value).toJson(t);
        return (n.startsWith("google.protobuf.") || i === null || Array.isArray(i) || typeof i != "object") && (i = {
            value: i
        }), i["@type"] = this.typeUrl, i;
    }
    fromJson(t, n) {
        if (t === null || Array.isArray(t) || typeof t != "object") throw new Error(`cannot decode message google.protobuf.Any from JSON: expected object but got ${t === null ? "null" : Array.isArray(t) ? "array" : typeof t}`);
        if (Object.keys(t).length == 0) return this;
        const r = t["@type"];
        if (typeof r != "string" || r == "") throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const s = this.typeUrlToName(r), i = n?.typeRegistry?.findMessage(s);
        if (!i) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${r} is not in the type registry`);
        let a;
        if (s.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(t, "value")) a = i.fromJson(t.value, n);
        else {
            const o = Object.assign({}, t);
            delete o["@type"], a = i.fromJson(o, n);
        }
        return this.packFrom(a), this;
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
        let r = "";
        return typeof t == "string" ? r = t : r = t.typeName, n === r;
    }
    typeNameToUrl(t) {
        return `type.googleapis.com/${t}`;
    }
    typeUrlToName(t) {
        if (!t.length) throw new Error(`invalid type url: ${t}`);
        const n = t.lastIndexOf("/"), r = n >= 0 ? t.substring(n + 1) : t;
        if (!r.length) throw new Error(`invalid type url: ${t}`);
        return r;
    }
    static pack(t) {
        const n = new pm;
        return n.packFrom(t), n;
    }
    static fromBinary(t, n) {
        return new pm().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new pm().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new pm().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(pm, t, n);
    }
}, lg.runtime = c, lg.typeName = "google.protobuf.Any", lg.fields = c.util.newFieldList(()=>[
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
    ]), VM = lg;

}
