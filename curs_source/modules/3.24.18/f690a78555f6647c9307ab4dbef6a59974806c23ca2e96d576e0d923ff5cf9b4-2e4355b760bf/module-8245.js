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
        var A;
        if ("" === this.typeUrl) return {};
        const t = this.typeUrlToName(this.typeUrl), n = null === (A = null == e ? void 0 : e.typeRegistry) || void 0 === A ? void 0 : A.findMessage(t);
        if (!n) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let r = n.fromBinary(this.value).toJson(e);
        return (t.startsWith("google.protobuf.") || null === r || Array.isArray(r) || "object" != typeof r) && (r = {
            value: r
        }), r["@type"] = this.typeUrl, r;
    }
    fromJson(e, A) {
        var t;
        if (null === e || Array.isArray(e) || "object" != typeof e) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e ? "null" : Array.isArray(e) ? "array" : typeof e));
        if (0 == Object.keys(e).length) return this;
        const n = e["@type"];
        if ("string" != typeof n || "" == n) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const r = this.typeUrlToName(n), o = null === (t = null == A ? void 0 : A.typeRegistry) || void 0 === t ? void 0 : t.findMessage(r);
        if (!o) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${n} is not in the type registry`);
        let s;
        if (r.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) s = o.fromJson(e.value, A);
        else {
            const t = Object.assign({}, e);
            delete t["@type"], s = o.fromJson(t, A);
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
        const A = e.findMessage(this.typeUrlToName(this.typeUrl));
        return A ? A.fromBinary(this.value) : void 0;
    }
    is(e) {
        if ("" === this.typeUrl) return !1;
        const A = this.typeUrlToName(this.typeUrl);
        let t = "";
        return t = "string" == typeof e ? e : e.typeName, A === t;
    }
    typeNameToUrl(e) {
        return `type.googleapis.com/${e}`;
    }
    typeUrlToName(e) {
        if (!e.length) throw new Error(`invalid type url: ${e}`);
        const A = e.lastIndexOf("/"), t = A >= 0 ? e.substring(A + 1) : e;
        if (!t.length) throw new Error(`invalid type url: ${e}`);
        return t;
    }
    static pack(e) {
        const A = new o;
        return A.packFrom(e), A;
    }
    static fromBinary(e, A) {
        return (new o).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new o).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new o).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto3.util.equals(o, e, A);
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
