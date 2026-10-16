Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Any = void 0;
const s = require("./module-4193.js"), o = require("./module-7599.js");
class r extends s.Message {
    constructor(e){
        super(), this.typeUrl = "", this.value = new Uint8Array(0), o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        var a;
        if ("" === this.typeUrl) return {};
        const n = this.typeUrlToName(this.typeUrl), s = null === (a = null == e ? void 0 : e.typeRegistry) || void 0 === a ? void 0 : a.findMessage(n);
        if (!s) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let o = s.fromBinary(this.value).toJson(e);
        return (n.startsWith("google.protobuf.") || null === o || Array.isArray(o) || "object" != typeof o) && (o = {
            value: o
        }), o["@type"] = this.typeUrl, o;
    }
    fromJson(e, a) {
        var n;
        if (null === e || Array.isArray(e) || "object" != typeof e) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e ? "null" : Array.isArray(e) ? "array" : typeof e));
        if (0 == Object.keys(e).length) return this;
        const s = e["@type"];
        if ("string" != typeof s || "" == s) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const o = this.typeUrlToName(s), r = null === (n = null == a ? void 0 : a.typeRegistry) || void 0 === n ? void 0 : n.findMessage(o);
        if (!r) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${s} is not in the type registry`);
        let t;
        if (o.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) t = r.fromJson(e.value, a);
        else {
            const n = Object.assign({}, e);
            delete n["@type"], t = r.fromJson(n, a);
        }
        return this.packFrom(t), this;
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
        const a = new r;
        return a.packFrom(e), a;
    }
    static fromBinary(e, a) {
        return (new r).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new r).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new r).fromJsonString(e, a);
    }
    static equals(e, a) {
        return o.proto3.util.equals(r, e, a);
    }
}
exports.Any = r, r.runtime = o.proto3, r.typeName = "google.protobuf.Any", r.fields = o.proto3.util.newFieldList(()=>[
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
