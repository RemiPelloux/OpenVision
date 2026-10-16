"use strict";
const n = require("./module-3832.js"), r = require("./module-491.js"), o = require("./module-5529.js"), s = /^charset$/i;
function i(e, t) {
    const A = t.limits, r = t.parsedConType;
    let i;
    this.boy = e, this.fieldSizeLimit = o(A, "fieldSize", 1048576), this.fieldNameSizeLimit = o(A, "fieldNameSize", 100), this.fieldsLimit = o(A, "fields", 1 / 0);
    for(var a = 0, c = r.length; a < c; ++a)if (Array.isArray(r[a]) && s.test(r[a][0])) {
        i = r[a][1].toLowerCase();
        break;
    }
    void 0 === i && (i = t.defCharset || "utf8"), this.decoder = new n, this.charset = i, this._fields = 0, this._state = "key", this._checkingBytes = !0, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = !1, this._valTrunc = !1, this._hitLimit = !1;
}
i.detect = /^application\/x-www-form-urlencoded/i, i.prototype.write = function(e, t) {
    if (this._fields === this.fieldsLimit) return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = !0, this.boy.emit("fieldsLimit")), t();
    let A, n, o, s = 0;
    const i = e.length;
    for(; s < i;)if ("key" === this._state) {
        for(A = n = void 0, o = s; o < i; ++o){
            if (this._checkingBytes || ++s, 61 === e[o]) {
                A = o;
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
        if (void 0 !== A) A > s && (this._key += this.decoder.write(e.toString("binary", s, A))), this._state = "val", this._hitLimit = !1, this._checkingBytes = !0, this._val = "", this._bytesVal = 0, this._valTrunc = !1, this.decoder.reset(), s = A + 1;
        else if (void 0 !== n) {
            let A;
            ++this._fields;
            const o = this._keyTrunc;
            if (A = n > s ? this._key += this.decoder.write(e.toString("binary", s, n)) : this._key, this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), A.length && this.boy.emit("field", r(A, "binary", this.charset), "", o, !1), s = n + 1, this._fields === this.fieldsLimit) return t();
        } else this._hitLimit ? (o > s && (this._key += this.decoder.write(e.toString("binary", s, o))), s = o, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = !1, this._keyTrunc = !0)) : (s < i && (this._key += this.decoder.write(e.toString("binary", s))), s = i);
    } else {
        for(n = void 0, o = s; o < i; ++o){
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
            if (++this._fields, n > s && (this._val += this.decoder.write(e.toString("binary", s, n))), this.boy.emit("field", r(this._key, "binary", this.charset), r(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this._state = "key", this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), s = n + 1, this._fields === this.fieldsLimit) return t();
        } else this._hitLimit ? (o > s && (this._val += this.decoder.write(e.toString("binary", s, o))), s = o, ("" === this._val && 0 === this.fieldSizeLimit || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = !1, this._valTrunc = !0)) : (s < i && (this._val += this.decoder.write(e.toString("binary", s))), s = i);
    }
    t();
}, i.prototype.end = function() {
    this.boy._done || ("key" === this._state && this._key.length > 0 ? this.boy.emit("field", r(this._key, "binary", this.charset), "", this._keyTrunc, !1) : "val" === this._state && this.boy.emit("field", r(this._key, "binary", this.charset), r(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this.boy._done = !0, this.boy.emit("finish"));
}, module.exports = i;
