"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Any = void 0;
const t = require("./module-4193.js"), s = require("./module-7599.js");
class o extends t.Message {
    constructor(e){
        super(), this.typeUrl = "", this.value = new Uint8Array(0), s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        var a;
        if ("" === this.typeUrl) return {};
        const n = this.typeUrlToName(this.typeUrl), t = null === (a = null == e ? void 0 : e.typeRegistry) || void 0 === a ? void 0 : a.findMessage(n);
        if (!t) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let s = t.fromBinary(this.value).toJson(e);
        return (n.startsWith("google.protobuf.") || null === s || Array.isArray(s) || "object" != typeof s) && (s = {
            value: s
        }), s["@type"] = this.typeUrl, s;
    }
    fromJson(e, a) {
        var n;
        if (null === e || Array.isArray(e) || "object" != typeof e) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e ? "null" : Array.isArray(e) ? "array" : typeof e));
        if (0 == Object.keys(e).length) return this;
        const t = e["@type"];
        if ("string" != typeof t || "" == t) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const s = this.typeUrlToName(t), o = null === (n = null == a ? void 0 : a.typeRegistry) || void 0 === n ? void 0 : n.findMessage(s);
        if (!o) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${t} is not in the type registry`);
        let r;
        if (s.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) r = o.fromJson(e.value, a);
        else {
            const n = Object.assign({}, e);
            delete n["@type"], r = o.fromJson(n, a);
        }
        return this.packFrom(r), this;
    }
    packFrom(e) {
        this.value = e.toBinary(), this.typeUrl = this.typeNameToUrl(e.getType().typeName);
    }
    unpackTo(e) {
        return !!this.is(e.getType()) && (e.fromBinary(this.value), !0);
    }
    unpack(e) {
        if ("" === this.typeUrl) return;
        const a = e.findMessage(this.typeUrlToName(this.typeUrl));
        return a ? a.fromBinary(this.value) : void 0;
    }
    is(e) {
        if ("" === this.typeUrl) return !1;
        const a = this.typeUrlToName(this.typeUrl);
        let n = "";
        return n = "string" == typeof e ? e : e.typeName, a === n;
    }
    typeNameToUrl(e) {
        return `type.googleapis.com/${e}`;
    }
    typeUrlToName(e) {
        if (!e.length) throw new Error(`invalid type url: ${e}`);
        const a = e.lastIndexOf("/"), n = a >= 0 ? e.substring(a + 1) : e;
        if (!n.length) throw new Error(`invalid type url: ${e}`);
        return n;
    }
    static pack(e) {
        const a = new o;
        return a.packFrom(e), a;
    }
    static fromBinary(e, a) {
        return (new o).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new o).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new o).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(o, e, a);
    }
}
exports.Any = o, o.runtime = s.proto3, o.typeName = "google.protobuf.Any", o.fields = s.proto3.util.newFieldList(()=>[
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
    ]);
