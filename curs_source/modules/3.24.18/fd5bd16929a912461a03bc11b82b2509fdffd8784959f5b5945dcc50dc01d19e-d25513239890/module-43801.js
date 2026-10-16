"use strict";
require.d(exports, {
    y: ()=>c
});
var n = require(42997), s = require(73931), i = require(96851), o = require("./module-99430.js");
const a = (e)=>"number" == typeof e ? new Date(1e3 * e) : "string" == typeof e ? Number(e) ? new Date(1e3 * Number(e)) : new Date(e) : e;
class c {
    service;
    regionProvider;
    credentialProvider;
    sha256;
    uriEscapePath;
    applyChecksum;
    constructor({ applyChecksum: e, credentials: t, region: r, service: s, sha256: i, uriEscapePath: o = !0 }){
        this.service = s, this.sha256 = i, this.uriEscapePath = o, this.applyChecksum = "boolean" != typeof e || e, this.regionProvider = (0, n.normalizeProvider)(r), this.credentialProvider = (0, n.normalizeProvider)(t);
    }
    createCanonicalRequest(e, t, r) {
        const n = Object.keys(t).sort();
        return `${e.method}\n${this.getCanonicalPath(e)}\n${(0, o.$)(e)}\n${n.map((e)=>`${e}:${t[e]}`).join("\n")}\n\n${n.join(";")}\n${r}`;
    }
    async createStringToSign(e, t, r, n) {
        const s = new this.sha256;
        s.update((0, i.toUint8Array)(r));
        const o = await s.digest();
        return `${n}\n${e}\n${t}\n${(0, i.toHex)(o)}`;
    }
    getCanonicalPath({ path: e }) {
        if (this.uriEscapePath) {
            const t = [];
            for (const r of e.split("/"))0 !== r?.length && "." !== r && (".." === r ? t.pop() : t.push(r));
            const r = `${e?.startsWith("/") ? "/" : ""}${t.join("/")}${t.length > 0 && e?.endsWith("/") ? "/" : ""}`;
            return (0, s.escapeUri)(r).replace(/%2F/g, "/");
        }
        return e;
    }
    validateResolvedCredentials(e) {
        if ("object" != typeof e || "string" != typeof e.accessKeyId || "string" != typeof e.secretAccessKey) throw new Error("Resolved credential object is not valid");
    }
    formatDate(e) {
        const t = (r = e, a(r).toISOString().replace(/\.\d{3}Z$/, "Z")).replace(/[\-:]/g, "");
        var r;
        return {
            longDate: t,
            shortDate: t.slice(0, 8)
        };
    }
    getCanonicalHeaderList(e) {
        return Object.keys(e).sort().join(";");
    }
}
