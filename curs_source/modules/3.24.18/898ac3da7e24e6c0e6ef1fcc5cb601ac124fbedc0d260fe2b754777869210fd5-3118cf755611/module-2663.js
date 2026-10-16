"use strict";
const t = require("./module-3832.js"), s = require("./module-491.js"), o = require("./module-5529.js"), r = /^charset$/i;
function i(e, n) {
    const a = n.limits, s = n.parsedConType;
    let i;
    this.boy = e, this.fieldSizeLimit = o(a, "fieldSize", 1048576), this.fieldNameSizeLimit = o(a, "fieldNameSize", 100), this.fieldsLimit = o(a, "fields", 1 / 0);
    for(var A = 0, l = s.length; A < l; ++A)if (Array.isArray(s[A]) && r.test(s[A][0])) {
        i = s[A][1].toLowerCase();
        break;
    }
    void 0 === i && (i = n.defCharset || "utf8"), this.decoder = new t, this.charset = i, this._fields = 0, this._state = "key", this._checkingBytes = !0, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = !1, this._valTrunc = !1, this._hitLimit = !1;
}
i.detect = /^application\/x-www-form-urlencoded/i, i.prototype.write = function(e, n) {
    if (this._fields === this.fieldsLimit) return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = !0, this.boy.emit("fieldsLimit")), n();
    let a, t, o, r = 0;
    const i = e.length;
    for(; r < i;)if ("key" === this._state) {
        for(a = t = void 0, o = r; o < i; ++o){
            if (this._checkingBytes || ++r, 61 === e[o]) {
                a = o;
                break;
            }
            if (38 === e[o]) {
                t = o;
                break;
            }
            if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
                this._hitLimit = !0;
                break;
            }
            this._checkingBytes && ++this._bytesKey;
        }
        if (void 0 !== a) a > r && (this._key += this.decoder.write(e.toString("binary", r, a))), this._state = "val", this._hitLimit = !1, this._checkingBytes = !0, this._val = "", this._bytesVal = 0, this._valTrunc = !1, this.decoder.reset(), r = a + 1;
        else if (void 0 !== t) {
            let a;
            ++this._fields;
            const o = this._keyTrunc;
            if (a = t > r ? this._key += this.decoder.write(e.toString("binary", r, t)) : this._key, this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), a.length && this.boy.emit("field", s(a, "binary", this.charset), "", o, !1), r = t + 1, this._fields === this.fieldsLimit) return n();
        } else this._hitLimit ? (o > r && (this._key += this.decoder.write(e.toString("binary", r, o))), r = o, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = !1, this._keyTrunc = !0)) : (r < i && (this._key += this.decoder.write(e.toString("binary", r))), r = i);
    } else {
        for(t = void 0, o = r; o < i; ++o){
            if (this._checkingBytes || ++r, 38 === e[o]) {
                t = o;
                break;
            }
            if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
                this._hitLimit = !0;
                break;
            }
            this._checkingBytes && ++this._bytesVal;
        }
        if (void 0 !== t) {
            if (++this._fields, t > r && (this._val += this.decoder.write(e.toString("binary", r, t))), this.boy.emit("field", s(this._key, "binary", this.charset), s(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this._state = "key", this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), r = t + 1, this._fields === this.fieldsLimit) return n();
        } else this._hitLimit ? (o > r && (this._val += this.decoder.write(e.toString("binary", r, o))), r = o, ("" === this._val && 0 === this.fieldSizeLimit || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = !1, this._valTrunc = !0)) : (r < i && (this._val += this.decoder.write(e.toString("binary", r))), r = i);
    }
    n();
}, i.prototype.end = function() {
    this.boy._done || ("key" === this._state && this._key.length > 0 ? this.boy.emit("field", s(this._key, "binary", this.charset), "", this._keyTrunc, !1) : "val" === this._state && this.boy.emit("field", s(this._key, "binary", this.charset), s(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this.boy._done = !0, this.boy.emit("finish"));
}, module.exports = i;
