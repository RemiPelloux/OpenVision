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
        var n;
        if ("" === this.typeUrl) return {};
        const a = this.typeUrlToName(this.typeUrl), t = null === (n = null == e ? void 0 : e.typeRegistry) || void 0 === n ? void 0 : n.findMessage(a);
        if (!t) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let s = t.fromBinary(this.value).toJson(e);
        return (a.startsWith("google.protobuf.") || null === s || Array.isArray(s) || "object" != typeof s) && (s = {
            value: s
        }), s["@type"] = this.typeUrl, s;
    }
    fromJson(e, n) {
        var a;
        if (null === e || Array.isArray(e) || "object" != typeof e) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e ? "null" : Array.isArray(e) ? "array" : typeof e));
        if (0 == Object.keys(e).length) return this;
        const t = e["@type"];
        if ("string" != typeof t || "" == t) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const s = this.typeUrlToName(t), o = null === (a = null == n ? void 0 : n.typeRegistry) || void 0 === a ? void 0 : a.findMessage(s);
        if (!o) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${t} is not in the type registry`);
        let r;
        if (s.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) r = o.fromJson(e.value, n);
        else {
            const a = Object.assign({}, e);
            delete a["@type"], r = o.fromJson(a, n);
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
        const n = e.findMessage(this.typeUrlToName(this.typeUrl));
        return n ? n.fromBinary(this.value) : void 0;
    }
    is(e) {
        if ("" === this.typeUrl) return !1;
        const n = this.typeUrlToName(this.typeUrl);
        let a = "";
        return a = "string" == typeof e ? e : e.typeName, n === a;
    }
    typeNameToUrl(e) {
        return `type.googleapis.com/${e}`;
    }
    typeUrlToName(e) {
        if (!e.length) throw new Error(`invalid type url: ${e}`);
        const n = e.lastIndexOf("/"), a = n >= 0 ? e.substring(n + 1) : e;
        if (!a.length) throw new Error(`invalid type url: ${e}`);
        return a;
    }
    static pack(e) {
        const n = new o;
        return n.packFrom(e), n;
    }
    static fromBinary(e, n) {
        return (new o).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new o).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new o).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto3.util.equals(o, e, n);
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
