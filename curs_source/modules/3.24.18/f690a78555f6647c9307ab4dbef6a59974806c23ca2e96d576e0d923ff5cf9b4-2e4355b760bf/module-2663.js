"use strict";
const n = require("./module-3832.js"), r = require("./module-491.js"), o = require("./module-5529.js"), s = /^charset$/i;
function a(e, A) {
    const t = A.limits, r = A.parsedConType;
    let a;
    this.boy = e, this.fieldSizeLimit = o(t, "fieldSize", 1048576), this.fieldNameSizeLimit = o(t, "fieldNameSize", 100), this.fieldsLimit = o(t, "fields", 1 / 0);
    for(var i = 0, c = r.length; i < c; ++i)if (Array.isArray(r[i]) && s.test(r[i][0])) {
        a = r[i][1].toLowerCase();
        break;
    }
    void 0 === a && (a = A.defCharset || "utf8"), this.decoder = new n, this.charset = a, this._fields = 0, this._state = "key", this._checkingBytes = !0, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = !1, this._valTrunc = !1, this._hitLimit = !1;
}
a.detect = /^application\/x-www-form-urlencoded/i, a.prototype.write = function(e, A) {
    if (this._fields === this.fieldsLimit) return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = !0, this.boy.emit("fieldsLimit")), A();
    let t, n, o, s = 0;
    const a = e.length;
    for(; s < a;)if ("key" === this._state) {
        for(t = n = void 0, o = s; o < a; ++o){
            if (this._checkingBytes || ++s, 61 === e[o]) {
                t = o;
                break;
            }
            if (38 === e[o]) {
                n = o;
                break;
            }
            if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
                this._hitLimit = !0;
                break;
            }
            this._checkingBytes && ++this._bytesKey;
        }
        if (void 0 !== t) t > s && (this._key += this.decoder.write(e.toString("binary", s, t))), this._state = "val", this._hitLimit = !1, this._checkingBytes = !0, this._val = "", this._bytesVal = 0, this._valTrunc = !1, this.decoder.reset(), s = t + 1;
        else if (void 0 !== n) {
            let t;
            ++this._fields;
            const o = this._keyTrunc;
            if (t = n > s ? this._key += this.decoder.write(e.toString("binary", s, n)) : this._key, this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), t.length && this.boy.emit("field", r(t, "binary", this.charset), "", o, !1), s = n + 1, this._fields === this.fieldsLimit) return A();
        } else this._hitLimit ? (o > s && (this._key += this.decoder.write(e.toString("binary", s, o))), s = o, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = !1, this._keyTrunc = !0)) : (s < a && (this._key += this.decoder.write(e.toString("binary", s))), s = a);
    } else {
        for(n = void 0, o = s; o < a; ++o){
            if (this._checkingBytes || ++s, 38 === e[o]) {
                n = o;
                break;
            }
            if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
                this._hitLimit = !0;
                break;
            }
            this._checkingBytes && ++this._bytesVal;
        }
        if (void 0 !== n) {
            if (++this._fields, n > s && (this._val += this.decoder.write(e.toString("binary", s, n))), this.boy.emit("field", r(this._key, "binary", this.charset), r(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this._state = "key", this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), s = n + 1, this._fields === this.fieldsLimit) return A();
        } else this._hitLimit ? (o > s && (this._val += this.decoder.write(e.toString("binary", s, o))), s = o, ("" === this._val && 0 === this.fieldSizeLimit || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = !1, this._valTrunc = !0)) : (s < a && (this._val += this.decoder.write(e.toString("binary", s))), s = a);
    }
    A();
}, a.prototype.end = function() {
    this.boy._done || ("key" === this._state && this._key.length > 0 ? this.boy.emit("field", r(this._key, "binary", this.charset), "", this._keyTrunc, !1) : "val" === this._state && this.boy.emit("field", r(this._key, "binary", this.charset), r(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this.boy._done = !0, this.boy.emit("finish"));
}, module.exports = a;
