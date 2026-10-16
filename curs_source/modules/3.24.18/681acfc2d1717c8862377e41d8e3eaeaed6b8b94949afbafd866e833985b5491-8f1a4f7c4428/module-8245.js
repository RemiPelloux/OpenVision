"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Any = void 0;
const n = require("./module-4193.js"), r = require("./module-7599.js");
class o extends n.Message {
    constructor(e){
        super(), this.typeUrl = "", this.value = new Uint8Array(0), r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        var t;
        if ("" === this.typeUrl) return {};
        const A = this.typeUrlToName(this.typeUrl), n = null === (t = null == e ? void 0 : e.typeRegistry) || void 0 === t ? void 0 : t.findMessage(A);
        if (!n) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let r = n.fromBinary(this.value).toJson(e);
        return (A.startsWith("google.protobuf.") || null === r || Array.isArray(r) || "object" != typeof r) && (r = {
            value: r
        }), r["@type"] = this.typeUrl, r;
    }
    fromJson(e, t) {
        var A;
        if (null === e || Array.isArray(e) || "object" != typeof e) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e ? "null" : Array.isArray(e) ? "array" : typeof e));
        if (0 == Object.keys(e).length) return this;
        const n = e["@type"];
        if ("string" != typeof n || "" == n) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const r = this.typeUrlToName(n), o = null === (A = null == t ? void 0 : t.typeRegistry) || void 0 === A ? void 0 : A.findMessage(r);
        if (!o) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${n} is not in the type registry`);
        let s;
        if (r.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) s = o.fromJson(e.value, t);
        else {
            const A = Object.assign({}, e);
            delete A["@type"], s = o.fromJson(A, t);
        }
        return this.packFrom(s), this;
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
        let A = "";
        return A = "string" == typeof e ? e : e.typeName, t === A;
    }
    typeNameToUrl(e) {
        return `type.googleapis.com/${e}`;
    }
    typeUrlToName(e) {
        if (!e.length) throw new Error(`invalid type url: ${e}`);
        const t = e.lastIndexOf("/"), A = t >= 0 ? e.substring(t + 1) : e;
        if (!A.length) throw new Error(`invalid type url: ${e}`);
        return A;
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
        return r.proto3.util.equals(o, e, t);
    }
}
exports.Any = o, o.runtime = r.proto3, o.typeName = "google.protobuf.Any", o.fields = r.proto3.util.newFieldList(()=>[
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
