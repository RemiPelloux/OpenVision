Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Any = void 0;
const r = require("./module-193.js"), o = require("./module-599.js");
class a extends r.Message {
    constructor(e){
        super(), this.typeUrl = "", this.value = new Uint8Array(0), o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        var t;
        if ("" === this.typeUrl) return {};
        const n = this.typeUrlToName(this.typeUrl), r = null === (t = null == e ? void 0 : e.typeRegistry) || void 0 === t ? void 0 : t.findMessage(n);
        if (!r) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let o = r.fromBinary(this.value).toJson(e);
        return (n.startsWith("google.protobuf.") || null === o || Array.isArray(o) || "object" != typeof o) && (o = {
            value: o
        }), o["@type"] = this.typeUrl, o;
    }
    fromJson(e, t) {
        var n;
        if (null === e || Array.isArray(e) || "object" != typeof e) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e ? "null" : Array.isArray(e) ? "array" : typeof e));
        if (0 == Object.keys(e).length) return this;
        const r = e["@type"];
        if ("string" != typeof r || "" == r) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const o = this.typeUrlToName(r), a = null === (n = null == t ? void 0 : t.typeRegistry) || void 0 === n ? void 0 : n.findMessage(o);
        if (!a) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${r} is not in the type registry`);
        let s;
        if (o.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) s = a.fromJson(e.value, t);
        else {
            const n = Object.assign({}, e);
            delete n["@type"], s = a.fromJson(n, t);
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
        let n = "";
        return n = "string" == typeof e ? e : e.typeName, t === n;
    }
    typeNameToUrl(e) {
        return `type.googleapis.com/${e}`;
    }
    typeUrlToName(e) {
        if (!e.length) throw new Error(`invalid type url: ${e}`);
        const t = e.lastIndexOf("/"), n = t >= 0 ? e.substring(t + 1) : e;
        if (!n.length) throw new Error(`invalid type url: ${e}`);
        return n;
    }
    static pack(e) {
        const t = new a;
        return t.packFrom(e), t;
    }
    static fromBinary(e, t) {
        return (new a).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new a).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new a).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(a, e, t);
    }
}
exports.Any = a, a.runtime = o.proto3, a.typeName = "google.protobuf.Any", a.fields = o.proto3.util.newFieldList(()=>[
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
