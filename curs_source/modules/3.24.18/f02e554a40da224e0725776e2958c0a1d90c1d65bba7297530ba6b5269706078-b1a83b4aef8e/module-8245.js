"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Any = void 0;
const n = require("./module-4193.js"), s = require("./module-7599.js");
class i extends n.Message {
    constructor(t){
        super(), this.typeUrl = "", this.value = new Uint8Array(0), s.proto3.util.initPartial(t, this);
    }
    toJson(t) {
        var e;
        if ("" === this.typeUrl) return {};
        const r = this.typeUrlToName(this.typeUrl), n = null === (e = null == t ? void 0 : t.typeRegistry) || void 0 === e ? void 0 : e.findMessage(r);
        if (!n) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let s = n.fromBinary(this.value).toJson(t);
        return (r.startsWith("google.protobuf.") || null === s || Array.isArray(s) || "object" != typeof s) && (s = {
            value: s
        }), s["@type"] = this.typeUrl, s;
    }
    fromJson(t, e) {
        var r;
        if (null === t || Array.isArray(t) || "object" != typeof t) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === t ? "null" : Array.isArray(t) ? "array" : typeof t));
        if (0 == Object.keys(t).length) return this;
        const n = t["@type"];
        if ("string" != typeof n || "" == n) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const s = this.typeUrlToName(n), i = null === (r = null == e ? void 0 : e.typeRegistry) || void 0 === r ? void 0 : r.findMessage(s);
        if (!i) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${n} is not in the type registry`);
        let o;
        if (s.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(t, "value")) o = i.fromJson(t.value, e);
        else {
            const r = Object.assign({}, t);
            delete r["@type"], o = i.fromJson(r, e);
        }
        return this.packFrom(o), this;
    }
    packFrom(t) {
        this.value = t.toBinary(), this.typeUrl = this.typeNameToUrl(t.getType().typeName);
    }
    unpackTo(t) {
        return !!this.is(t.getType()) && (t.fromBinary(this.value), !0);
    }
    unpack(t) {
        if ("" === this.typeUrl) return;
        const e = t.findMessage(this.typeUrlToName(this.typeUrl));
        return e ? e.fromBinary(this.value) : void 0;
    }
    is(t) {
        if ("" === this.typeUrl) return !1;
        const e = this.typeUrlToName(this.typeUrl);
        let r = "";
        return r = "string" == typeof t ? t : t.typeName, e === r;
    }
    typeNameToUrl(t) {
        return `type.googleapis.com/${t}`;
    }
    typeUrlToName(t) {
        if (!t.length) throw new Error(`invalid type url: ${t}`);
        const e = t.lastIndexOf("/"), r = e >= 0 ? t.substring(e + 1) : t;
        if (!r.length) throw new Error(`invalid type url: ${t}`);
        return r;
    }
    static pack(t) {
        const e = new i;
        return e.packFrom(t), e;
    }
    static fromBinary(t, e) {
        return (new i).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new i).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new i).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto3.util.equals(i, t, e);
    }
}
exports.Any = i, i.runtime = s.proto3, i.typeName = "google.protobuf.Any", i.fields = s.proto3.util.newFieldList(()=>[
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
