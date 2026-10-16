"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Any = void 0;
const n = require("./module-24193.js"), s = require("./module-27599.js");
class o extends n.Message {
    constructor(e){
        super(), this.typeUrl = "", this.value = new Uint8Array(0), s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        var t;
        if ("" === this.typeUrl) return {};
        const r = this.typeUrlToName(this.typeUrl), n = null === (t = null == e ? void 0 : e.typeRegistry) || void 0 === t ? void 0 : t.findMessage(r);
        if (!n) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let s = n.fromBinary(this.value).toJson(e);
        return (r.startsWith("google.protobuf.") || null === s || Array.isArray(s) || "object" != typeof s) && (s = {
            value: s
        }), s["@type"] = this.typeUrl, s;
    }
    fromJson(e, t) {
        var r;
        if (null === e || Array.isArray(e) || "object" != typeof e) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e ? "null" : Array.isArray(e) ? "array" : typeof e));
        if (0 == Object.keys(e).length) return this;
        const n = e["@type"];
        if ("string" != typeof n || "" == n) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const s = this.typeUrlToName(n), o = null === (r = null == t ? void 0 : t.typeRegistry) || void 0 === r ? void 0 : r.findMessage(s);
        if (!o) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${n} is not in the type registry`);
        let i;
        if (s.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) i = o.fromJson(e.value, t);
        else {
            const r = Object.assign({}, e);
            delete r["@type"], i = o.fromJson(r, t);
        }
        return this.packFrom(i), this;
    }
    packFrom(e) {
        this.value = e.toBinary(), this.typeUrl = this.typeNameToUrl(e.getType().typeName);
    }
    unpackTo(e) {
        return !!this.is(e.getType()) && (e.fromBinary(this.value), !0);
    }
    unpack(e) {
        if ("" === this.typeUrl) return;
        const t = e.findMessage(this.typeUrlToName(this.typeUrl));
        return t ? t.fromBinary(this.value) : void 0;
    }
    is(e) {
        if ("" === this.typeUrl) return !1;
        const t = this.typeUrlToName(this.typeUrl);
        let r = "";
        return r = "string" == typeof e ? e : e.typeName, t === r;
    }
    typeNameToUrl(e) {
        return `type.googleapis.com/${e}`;
    }
    typeUrlToName(e) {
        if (!e.length) throw new Error(`invalid type url: ${e}`);
        const t = e.lastIndexOf("/"), r = t >= 0 ? e.substring(t + 1) : e;
        if (!r.length) throw new Error(`invalid type url: ${e}`);
        return r;
    }
    static pack(e) {
        const t = new o;
        return t.packFrom(e), t;
    }
    static fromBinary(e, t) {
        return (new o).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new o).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new o).fromJsonString(e, t);
    }
    static equals(e, t) {
        return s.proto3.util.equals(o, e, t);
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
