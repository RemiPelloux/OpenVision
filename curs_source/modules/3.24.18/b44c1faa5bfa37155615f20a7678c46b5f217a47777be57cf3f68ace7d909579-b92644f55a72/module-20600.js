"use strict";
require.d(exports, {
    aD: ()=>l,
    bO: ()=>o,
    cm: ()=>i,
    nj: ()=>c,
    nk: ()=>u
});
const n = new TextDecoder, s = new TextEncoder;
const o = new class {
    serialize(e) {
        return s.encode(e);
    }
    deserialize(e) {
        return n.decode(e);
    }
    getBlobType() {
        return {
            kind: "string"
        };
    }
};
class i {
    constructor(e){
        this.proto = e;
    }
    serialize(e) {
        return e.toBinary();
    }
    deserialize(e) {
        return this.proto.fromBinary(e);
    }
    getBlobType() {
        return {
            kind: "proto",
            typeName: this.proto.typeName
        };
    }
}
const a = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, "0"));
function c(e) {
    if ("undefined" != typeof Buffer) return Buffer.from(e).toString("hex");
    let t = "";
    for(let r = 0; r < e.length; r++)t += a[e[r]];
    return t;
}
function l(e) {
    const t = e.trim().toLowerCase();
    if (t.length % 2 != 0) throw new Error("Invalid hex string length");
    const r = new Uint8Array(t.length / 2);
    for(let e = 0; e < t.length; e += 2)r[e / 2] = parseInt(t.slice(e, e + 2), 16);
    return r;
}
function u(e) {
    if ("undefined" != typeof Buffer) return Buffer.from(e).toString("base64");
    let t = "";
    for(let r = 0; r < e.length; r++)t += String.fromCharCode(e[r]);
    return btoa(t);
}
