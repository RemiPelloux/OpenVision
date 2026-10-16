"use strict";
const n = require("./module-3652.js"), s = require("./module-3047.js"), i = require("./module-3013.js"), o = /^charset$/i;
function a(t, e) {
    const r = e.limits, s = e.parsedConType;
    let a;
    this.boy = t, this.fieldSizeLimit = i(r, "fieldSize", 1048576), this.fieldNameSizeLimit = i(r, "fieldNameSize", 100), this.fieldsLimit = i(r, "fields", 1 / 0);
    for(var u = 0, c = s.length; u < c; ++u)if (Array.isArray(s[u]) && o.test(s[u][0])) {
        a = s[u][1].toLowerCase();
        break;
    }
    void 0 === a && (a = e.defCharset || "utf8"), this.decoder = new n, this.charset = a, this._fields = 0, this._state = "key", this._checkingBytes = !0, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = !1, this._valTrunc = !1, this._hitLimit = !1;
}
a.detect = /^application\/x-www-form-urlencoded/i, a.prototype.write = function(t, e) {
    if (this._fields === this.fieldsLimit) return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = !0, this.boy.emit("fieldsLimit")), e();
    let r, n, i, o = 0;
    const a = t.length;
    for(; o < a;)if ("key" === this._state) {
        for(r = n = void 0, i = o; i < a; ++i){
            if (this._checkingBytes || ++o, 61 === t[i]) {
                r = i;
                break;
            }
            if (38 === t[i]) {
                n = i;
                break;
            }
            if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
                this._hitLimit = !0;
                break;
            }
            this._checkingBytes && ++this._bytesKey;
        }
        if (void 0 !== r) r > o && (this._key += this.decoder.write(t.toString("binary", o, r))), this._state = "val", this._hitLimit = !1, this._checkingBytes = !0, this._val = "", this._bytesVal = 0, this._valTrunc = !1, this.decoder.reset(), o = r + 1;
        else if (void 0 !== n) {
            let r;
            ++this._fields;
            const i = this._keyTrunc;
            if (r = n > o ? this._key += this.decoder.write(t.toString("binary", o, n)) : this._key, this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), r.length && this.boy.emit("field", s(r, "binary", this.charset), "", i, !1), o = n + 1, this._fields === this.fieldsLimit) return e();
        } else this._hitLimit ? (i > o && (this._key += this.decoder.write(t.toString("binary", o, i))), o = i, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = !1, this._keyTrunc = !0)) : (o < a && (this._key += this.decoder.write(t.toString("binary", o))), o = a);
    } else {
        for(n = void 0, i = o; i < a; ++i){
            if (this._checkingBytes || ++o, 38 === t[i]) {
                n = i;
                break;
            }
            if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
                this._hitLimit = !0;
                break;
            }
            this._checkingBytes && ++this._bytesVal;
        }
        if (void 0 !== n) {
            if (++this._fields, n > o && (this._val += this.decoder.write(t.toString("binary", o, n))), this.boy.emit("field", s(this._key, "binary", this.charset), s(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this._state = "key", this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), o = n + 1, this._fields === this.fieldsLimit) return e();
        } else this._hitLimit ? (i > o && (this._val += this.decoder.write(t.toString("binary", o, i))), o = i, ("" === this._val && 0 === this.fieldSizeLimit || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = !1, this._valTrunc = !0)) : (o < a && (this._val += this.decoder.write(t.toString("binary", o))), o = a);
    }
    e();
}, a.prototype.end = function() {
    this.boy._done || ("key" === this._state && this._key.length > 0 ? this.boy.emit("field", s(this._key, "binary", this.charset), "", this._keyTrunc, !1) : "val" === this._state && this.boy.emit("field", s(this._key, "binary", this.charset), s(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this.boy._done = !0, this.boy.emit("finish"));
}, module.exports = a;
