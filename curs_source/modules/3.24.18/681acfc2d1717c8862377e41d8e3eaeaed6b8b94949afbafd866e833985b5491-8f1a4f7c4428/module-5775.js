"use strict";
const n = require("./module-2276.js"), r = require("./module-9845.js").Buffer, o = require("./module-7410.js"), s = require("./module-6457.js");
function i(e) {
    this.enc = "der", this.name = e.name, this.entity = e, this.tree = new a, this.tree._init(e.body);
}
function a(e) {
    o.call(this, "der", e);
}
function c(e) {
    return e < 10 ? "0" + e : e;
}
module.exports = i, i.prototype.encode = function(e, t) {
    return this.tree._encode(e, t).join();
}, n(a, o), a.prototype._encodeComposite = function(e, t, A, n) {
    const o = function(e, t, A, n) {
        let r;
        "seqof" === e ? e = "seq" : "setof" === e && (e = "set");
        if (s.tagByName.hasOwnProperty(e)) r = s.tagByName[e];
        else {
            if ("number" != typeof e || (0 | e) !== e) return n.error("Unknown tag: " + e);
            r = e;
        }
        if (r >= 31) return n.error("Multi-octet tag encoding unsupported");
        t || (r |= 32);
        return r |= s.tagClassByName[A || "universal"] << 6, r;
    }(e, t, A, this.reporter);
    if (n.length < 128) {
        const e = r.alloc(2);
        return e[0] = o, e[1] = n.length, this._createEncoderBuffer([
            e,
            n
        ]);
    }
    let i = 1;
    for(let e = n.length; e >= 256; e >>= 8)i++;
    const a = r.alloc(2 + i);
    a[0] = o, a[1] = 128 | i;
    for(let e = 1 + i, t = n.length; t > 0; e--, t >>= 8)a[e] = 255 & t;
    return this._createEncoderBuffer([
        a,
        n
    ]);
}, a.prototype._encodeStr = function(e, t) {
    if ("bitstr" === t) return this._createEncoderBuffer([
        0 | e.unused,
        e.data
    ]);
    if ("bmpstr" === t) {
        const t = r.alloc(2 * e.length);
        for(let A = 0; A < e.length; A++)t.writeUInt16BE(e.charCodeAt(A), 2 * A);
        return this._createEncoderBuffer(t);
    }
    return "numstr" === t ? this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === t ? this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(t) || "objDesc" === t ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: " + t + " unsupported");
}, a.prototype._encodeObjid = function(e, t, A) {
    if ("string" == typeof e) {
        if (!t) return this.reporter.error("string objid given, but no values map found");
        if (!t.hasOwnProperty(e)) return this.reporter.error("objid not found in values map");
        e = t[e].split(/[\s.]+/g);
        for(let t = 0; t < e.length; t++)e[t] |= 0;
    } else if (Array.isArray(e)) {
        e = e.slice();
        for(let t = 0; t < e.length; t++)e[t] |= 0;
    }
    if (!Array.isArray(e)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e));
    if (!A) {
        if (e[1] >= 40) return this.reporter.error("Second objid identifier OOB");
        e.splice(0, 2, 40 * e[0] + e[1]);
    }
    let n = 0;
    for(let t = 0; t < e.length; t++){
        let A = e[t];
        for(n++; A >= 128; A >>= 7)n++;
    }
    const o = r.alloc(n);
    let s = o.length - 1;
    for(let t = e.length - 1; t >= 0; t--){
        let A = e[t];
        for(o[s--] = 127 & A; (A >>= 7) > 0;)o[s--] = 128 | 127 & A;
    }
    return this._createEncoderBuffer(o);
}, a.prototype._encodeTime = function(e, t) {
    let A;
    const n = new Date(e);
    return "gentime" === t ? A = [
        c(n.getUTCFullYear()),
        c(n.getUTCMonth() + 1),
        c(n.getUTCDate()),
        c(n.getUTCHours()),
        c(n.getUTCMinutes()),
        c(n.getUTCSeconds()),
        "Z"
    ].join("") : "utctime" === t ? A = [
        c(n.getUTCFullYear() % 100),
        c(n.getUTCMonth() + 1),
        c(n.getUTCDate()),
        c(n.getUTCHours()),
        c(n.getUTCMinutes()),
        c(n.getUTCSeconds()),
        "Z"
    ].join("") : this.reporter.error("Encoding " + t + " time is not supported yet"), this._encodeStr(A, "octstr");
}, a.prototype._encodeNull = function() {
    return this._createEncoderBuffer("");
}, a.prototype._encodeInt = function(e, t) {
    if ("string" == typeof e) {
        if (!t) return this.reporter.error("String int or enum given, but no values map");
        if (!t.hasOwnProperty(e)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
        e = t[e];
    }
    if ("number" != typeof e && !r.isBuffer(e)) {
        const t = e.toArray();
        !e.sign && 128 & t[0] && t.unshift(0), e = r.from(t);
    }
    if (r.isBuffer(e)) {
        let t = e.length;
        0 === e.length && t++;
        const A = r.alloc(t);
        return e.copy(A), 0 === e.length && (A[0] = 0), this._createEncoderBuffer(A);
    }
    if (e < 128) return this._createEncoderBuffer(e);
    if (e < 256) return this._createEncoderBuffer([
        0,
        e
    ]);
    let A = 1;
    for(let t = e; t >= 256; t >>= 8)A++;
    const n = new Array(A);
    for(let t = n.length - 1; t >= 0; t--)n[t] = 255 & e, e >>= 8;
    return 128 & n[0] && n.unshift(0), this._createEncoderBuffer(r.from(n));
}, a.prototype._encodeBool = function(e) {
    return this._createEncoderBuffer(e ? 255 : 0);
}, a.prototype._use = function(e, t) {
    return "function" == typeof e && (e = e(t)), e._getEncoder("der").tree;
}, a.prototype._skipDefault = function(e, t, A) {
    const n = this._baseState;
    let r;
    if (null === n.default) return !1;
    const o = e.join();
    if (void 0 === n.defaultBuffer && (n.defaultBuffer = this._encodeValue(n.default, t, A).join()), o.length !== n.defaultBuffer.length) return !1;
    for(r = 0; r < o.length; r++)if (o[r] !== n.defaultBuffer[r]) return !1;
    return !0;
};
