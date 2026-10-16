"use strict";
require.d(exports, {
    B: ()=>y
});
var n, s = require(96851);
class i {
    format(e) {
        const t = [];
        for (const r of Object.keys(e)){
            const n = (0, s.fromUtf8)(r);
            t.push(Uint8Array.from([
                n.byteLength
            ]), n, this.formatHeaderValue(e[r]));
        }
        const r = new Uint8Array(t.reduce((e, t)=>e + t.byteLength, 0));
        let n = 0;
        for (const e of t)r.set(e, n), n += e.byteLength;
        return r;
    }
    formatHeaderValue(e) {
        switch(e.type){
            case "boolean":
                return Uint8Array.from([
                    e.value ? 0 : 1
                ]);
            case "byte":
                return Uint8Array.from([
                    2,
                    e.value
                ]);
            case "short":
                const t = new DataView(new ArrayBuffer(3));
                return t.setUint8(0, 3), t.setInt16(1, e.value, !1), new Uint8Array(t.buffer);
            case "integer":
                const r = new DataView(new ArrayBuffer(5));
                return r.setUint8(0, 4), r.setInt32(1, e.value, !1), new Uint8Array(r.buffer);
            case "long":
                const n = new Uint8Array(9);
                return n[0] = 5, n.set(e.value.bytes, 1), n;
            case "binary":
                const i = new DataView(new ArrayBuffer(3 + e.value.byteLength));
                i.setUint8(0, 6), i.setUint16(1, e.value.byteLength, !1);
                const c = new Uint8Array(i.buffer);
                return c.set(e.value, 3), c;
            case "string":
                const l = (0, s.fromUtf8)(e.value), u = new DataView(new ArrayBuffer(3 + l.byteLength));
                u.setUint8(0, 7), u.setUint16(1, l.byteLength, !1);
                const d = new Uint8Array(u.buffer);
                return d.set(l, 3), d;
            case "timestamp":
                const h = new Uint8Array(9);
                return h[0] = 8, h.set(a.fromNumber(e.value.valueOf()).bytes, 1), h;
            case "uuid":
                if (!o.test(e.value)) throw new Error(`Invalid UUID received: ${e.value}`);
                const f = new Uint8Array(17);
                return f[0] = 9, f.set((0, s.fromHex)(e.value.replace(/\-/g, "")), 1), f;
        }
    }
}
!function(e) {
    e[e.boolTrue = 0] = "boolTrue", e[e.boolFalse = 1] = "boolFalse", e[e.byte = 2] = "byte", e[e.short = 3] = "short", e[e.integer = 4] = "integer", e[e.long = 5] = "long", e[e.byteArray = 6] = "byteArray", e[e.string = 7] = "string", e[e.timestamp = 8] = "timestamp", e[e.uuid = 9] = "uuid";
}(n || (n = {}));
const o = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
class a {
    bytes;
    constructor(e){
        if (this.bytes = e, 8 !== e.byteLength) throw new Error("Int64 buffers must be exactly 8 bytes");
    }
    static fromNumber(e) {
        if (e > 0x8000000000000000 || e < -0x8000000000000000) throw new Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
        const t = new Uint8Array(8);
        for(let r = 7, n = Math.abs(Math.round(e)); r > -1 && n > 0; r--, n /= 256)t[r] = n;
        return e < 0 && c(t), new a(t);
    }
    valueOf() {
        const e = this.bytes.slice(0), t = 128 & e[0];
        return t && c(e), parseInt((0, s.toHex)(e), 16) * (t ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
function c(e) {
    for(let t = 0; t < 8; t++)e[t] ^= 255;
    for(let t = 7; t > -1 && (e[t]++, 0 === e[t]); t--);
}
var l = require("./module-43801.js"), u = require("./module-88141.js"), d = require("./module-29134.js"), h = require("./module-37060.js"), f = require("./module-66220.js"), p = require("./module-58699.js"), g = require("./module-8770.js"), m = require("./module-2798.js");
class y extends l.y {
    headerFormatter = new i;
    constructor({ applyChecksum: e, credentials: t, region: r, service: n, sha256: s, uriEscapePath: i = !0 }){
        super({
            applyChecksum: e,
            credentials: t,
            region: r,
            service: n,
            sha256: s,
            uriEscapePath: i
        });
    }
    async presign(e, t = {}) {
        const { signingDate: r = new Date, expiresIn: n = 3600, unsignableHeaders: s, unhoistableHeaders: i, signableHeaders: o, hoistableHeaders: a, signingRegion: c, signingService: l } = t, p = await this.credentialProvider();
        this.validateResolvedCredentials(p);
        const y = c ?? await this.regionProvider(), { longDate: w, shortDate: S } = this.formatDate(r);
        if (n > u.Uv) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        const b = (0, d.Ds)(S, y, l ?? this.service), E = (0, g.b)((0, m.n)(e), {
            unhoistableHeaders: i,
            hoistableHeaders: a
        });
        p.sessionToken && (E.query[u.r2] = p.sessionToken), E.query[u.XI] = u.SG, E.query[u.tI] = `${p.accessKeyId}/${b}`, E.query[u.Zs] = w, E.query[u.MS] = n.toString(10);
        const v = (0, h.H)(E, s, o);
        return E.query[u.FY] = this.getCanonicalHeaderList(v), E.query[u.cR] = await this.getSignature(w, b, this.getSigningKey(p, y, S, l), this.createCanonicalRequest(E, v, await (0, f.p)(e, this.sha256))), E;
    }
    async sign(e, t) {
        return "string" == typeof e ? this.signString(e, t) : e.headers && e.payload ? this.signEvent(e, t) : e.message ? this.signMessage(e, t) : this.signRequest(e, t);
    }
    async signEvent({ headers: e, payload: t }, { signingDate: r = new Date, priorSignature: n, signingRegion: i, signingService: o, eventStreamCredentials: a }) {
        const c = i ?? await this.regionProvider(), { shortDate: l, longDate: h } = this.formatDate(r), p = (0, d.Ds)(l, c, o ?? this.service), g = await (0, f.p)({
            headers: {},
            body: t
        }, this.sha256), m = new this.sha256;
        m.update(e);
        const y = (0, s.toHex)(await m.digest()), w = [
            u.r1,
            h,
            p,
            n,
            y,
            g
        ].join("\n");
        return this.signString(w, {
            signingDate: r,
            signingRegion: c,
            signingService: o,
            eventStreamCredentials: a
        });
    }
    async signMessage(e, { signingDate: t = new Date, signingRegion: r, signingService: n, eventStreamCredentials: s }) {
        return this.signEvent({
            headers: this.headerFormatter.format(e.message.headers),
            payload: e.message.body
        }, {
            signingDate: t,
            signingRegion: r,
            signingService: n,
            priorSignature: e.priorSignature,
            eventStreamCredentials: s
        }).then((t)=>({
                message: e.message,
                signature: t
            }));
    }
    async signString(e, { signingDate: t = new Date, signingRegion: r, signingService: n, eventStreamCredentials: i } = {}) {
        const o = i ?? await this.credentialProvider();
        this.validateResolvedCredentials(o);
        const a = r ?? await this.regionProvider(), { shortDate: c } = this.formatDate(t), l = new this.sha256(await this.getSigningKey(o, a, c, n));
        return l.update((0, s.toUint8Array)(e)), (0, s.toHex)(await l.digest());
    }
    async signRequest(e, { signingDate: t = new Date, signableHeaders: r, unsignableHeaders: n, signingRegion: s, signingService: i } = {}) {
        const o = await this.credentialProvider();
        this.validateResolvedCredentials(o);
        const a = s ?? await this.regionProvider(), c = (0, m.n)(e), { longDate: l, shortDate: g } = this.formatDate(t), y = (0, d.Ds)(g, a, i ?? this.service);
        c.headers[u.ot] = l, o.sessionToken && (c.headers[u.wE] = o.sessionToken);
        const w = await (0, f.p)(c, this.sha256);
        !(0, p.ou)(u.Wd, c.headers) && this.applyChecksum && (c.headers[u.Wd] = w);
        const S = (0, h.H)(c, n, r), b = await this.getSignature(l, y, this.getSigningKey(o, a, g, i), this.createCanonicalRequest(c, S, w));
        return c.headers[u.H1] = `${u.SG} Credential=${o.accessKeyId}/${y}, SignedHeaders=${this.getCanonicalHeaderList(S)}, Signature=${b}`, c;
    }
    async getSignature(e, t, r, n) {
        const i = await this.createStringToSign(e, t, n, u.SG), o = new this.sha256(await r);
        return o.update((0, s.toUint8Array)(i)), (0, s.toHex)(await o.digest());
    }
    getSigningKey(e, t, r, n) {
        return (0, d.Xf)(this.sha256, e, r, t, n || this.service);
    }
}
