"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Any = void 0;
const n = require("./module-24193.js"), o = require("./module-27599.js");
class s extends n.Message {
    constructor(e){
        super(), this.typeUrl = "", this.value = new Uint8Array(0), o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        var t;
        if ("" === this.typeUrl) return {};
        const r = this.typeUrlToName(this.typeUrl), n = null === (t = null == e ? void 0 : e.typeRegistry) || void 0 === t ? void 0 : t.findMessage(r);
        if (!n) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let o = n.fromBinary(this.value).toJson(e);
        return (r.startsWith("google.protobuf.") || null === o || Array.isArray(o) || "object" != typeof o) && (o = {
            value: o
        }), o["@type"] = this.typeUrl, o;
    }
    fromJson(e, t) {
        var r;
        if (null === e || Array.isArray(e) || "object" != typeof e) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e ? "null" : Array.isArray(e) ? "array" : typeof e));
        if (0 == Object.keys(e).length) return this;
        const n = e["@type"];
        if ("string" != typeof n || "" == n) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const o = this.typeUrlToName(n), s = null === (r = null == t ? void 0 : t.typeRegistry) || void 0 === r ? void 0 : r.findMessage(o);
        if (!s) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${n} is not in the type registry`);
        let i;
        if (o.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) i = s.fromJson(e.value, t);
        else {
            const r = Object.assign({}, e);
            delete r["@type"], i = s.fromJson(r, t);
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
        const t = new s;
        return t.packFrom(e), t;
    }
    static fromBinary(e, t) {
        return (new s).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new s).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new s).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(s, e, t);
    }
}
exports.Any = s, s.runtime = o.proto3, s.typeName = "google.protobuf.Any", s.fields = o.proto3.util.newFieldList(()=>[
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
