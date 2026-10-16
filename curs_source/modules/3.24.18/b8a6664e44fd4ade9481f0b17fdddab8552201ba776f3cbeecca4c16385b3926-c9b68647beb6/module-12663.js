"use strict";
const r = require("./module-73832.js"), s = require("./module-40491.js"), o = require("./module-5529.js"), n = /^charset$/i;
function i(A, e) {
    const t = e.limits, s = e.parsedConType;
    let i;
    this.boy = A, this.fieldSizeLimit = o(t, "fieldSize", 1048576), this.fieldNameSizeLimit = o(t, "fieldNameSize", 100), this.fieldsLimit = o(t, "fields", 1 / 0);
    for(var E = 0, Q = s.length; E < Q; ++E)if (Array.isArray(s[E]) && n.test(s[E][0])) {
        i = s[E][1].toLowerCase();
        break;
    }
    void 0 === i && (i = e.defCharset || "utf8"), this.decoder = new r, this.charset = i, this._fields = 0, this._state = "key", this._checkingBytes = !0, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = !1, this._valTrunc = !1, this._hitLimit = !1;
}
i.detect = /^application\/x-www-form-urlencoded/i, i.prototype.write = function(A, e) {
    if (this._fields === this.fieldsLimit) return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = !0, this.boy.emit("fieldsLimit")), e();
    let t, r, o, n = 0;
    const i = A.length;
    for(; n < i;)if ("key" === this._state) {
        for(t = r = void 0, o = n; o < i; ++o){
            if (this._checkingBytes || ++n, 61 === A[o]) {
                t = o;
                break;
            }
            if (38 === A[o]) {
                r = o;
                break;
            }
            if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
                this._hitLimit = !0;
                break;
            }
            this._checkingBytes && ++this._bytesKey;
        }
        if (void 0 !== t) t > n && (this._key += this.decoder.write(A.toString("binary", n, t))), this._state = "val", this._hitLimit = !1, this._checkingBytes = !0, this._val = "", this._bytesVal = 0, this._valTrunc = !1, this.decoder.reset(), n = t + 1;
        else if (void 0 !== r) {
            let t;
            ++this._fields;
            const o = this._keyTrunc;
            if (t = r > n ? this._key += this.decoder.write(A.toString("binary", n, r)) : this._key, this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), t.length && this.boy.emit("field", s(t, "binary", this.charset), "", o, !1), n = r + 1, this._fields === this.fieldsLimit) return e();
        } else this._hitLimit ? (o > n && (this._key += this.decoder.write(A.toString("binary", n, o))), n = o, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = !1, this._keyTrunc = !0)) : (n < i && (this._key += this.decoder.write(A.toString("binary", n))), n = i);
    } else {
        for(r = void 0, o = n; o < i; ++o){
            if (this._checkingBytes || ++n, 38 === A[o]) {
                r = o;
                break;
            }
            if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
                this._hitLimit = !0;
                break;
            }
            this._checkingBytes && ++this._bytesVal;
        }
        if (void 0 !== r) {
            if (++this._fields, r > n && (this._val += this.decoder.write(A.toString("binary", n, r))), this.boy.emit("field", s(this._key, "binary", this.charset), s(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this._state = "key", this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), n = r + 1, this._fields === this.fieldsLimit) return e();
        } else this._hitLimit ? (o > n && (this._val += this.decoder.write(A.toString("binary", n, o))), n = o, ("" === this._val && 0 === this.fieldSizeLimit || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = !1, this._valTrunc = !0)) : (n < i && (this._val += this.decoder.write(A.toString("binary", n))), n = i);
    }
    e();
}, i.prototype.end = function() {
    this.boy._done || ("key" === this._state && this._key.length > 0 ? this.boy.emit("field", s(this._key, "binary", this.charset), "", this._keyTrunc, !1) : "val" === this._state && this.boy.emit("field", s(this._key, "binary", this.charset), s(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this.boy._done = !0, this.boy.emit("finish"));
}, module.exports = i;
