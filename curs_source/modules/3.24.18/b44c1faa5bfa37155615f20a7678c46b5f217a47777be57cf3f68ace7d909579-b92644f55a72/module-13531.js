"use strict";
const n = require("./module-63652.js"), s = require("./module-93047.js"), o = require("./module-33013.js"), i = /^charset$/i;
function a(e, t) {
    const r = t.limits, s = t.parsedConType;
    let a;
    this.boy = e, this.fieldSizeLimit = o(r, "fieldSize", 1048576), this.fieldNameSizeLimit = o(r, "fieldNameSize", 100), this.fieldsLimit = o(r, "fields", 1 / 0);
    for(var c = 0, l = s.length; c < l; ++c)if (Array.isArray(s[c]) && i.test(s[c][0])) {
        a = s[c][1].toLowerCase();
        break;
    }
    void 0 === a && (a = t.defCharset || "utf8"), this.decoder = new n, this.charset = a, this._fields = 0, this._state = "key", this._checkingBytes = !0, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = !1, this._valTrunc = !1, this._hitLimit = !1;
}
a.detect = /^application\/x-www-form-urlencoded/i, a.prototype.write = function(e, t) {
    if (this._fields === this.fieldsLimit) return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = !0, this.boy.emit("fieldsLimit")), t();
    let r, n, o, i = 0;
    const a = e.length;
    for(; i < a;)if ("key" === this._state) {
        for(r = n = void 0, o = i; o < a; ++o){
            if (this._checkingBytes || ++i, 61 === e[o]) {
                r = o;
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
        if (void 0 !== r) r > i && (this._key += this.decoder.write(e.toString("binary", i, r))), this._state = "val", this._hitLimit = !1, this._checkingBytes = !0, this._val = "", this._bytesVal = 0, this._valTrunc = !1, this.decoder.reset(), i = r + 1;
        else if (void 0 !== n) {
            let r;
            ++this._fields;
            const o = this._keyTrunc;
            if (r = n > i ? this._key += this.decoder.write(e.toString("binary", i, n)) : this._key, this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), r.length && this.boy.emit("field", s(r, "binary", this.charset), "", o, !1), i = n + 1, this._fields === this.fieldsLimit) return t();
        } else this._hitLimit ? (o > i && (this._key += this.decoder.write(e.toString("binary", i, o))), i = o, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = !1, this._keyTrunc = !0)) : (i < a && (this._key += this.decoder.write(e.toString("binary", i))), i = a);
    } else {
        for(n = void 0, o = i; o < a; ++o){
            if (this._checkingBytes || ++i, 38 === e[o]) {
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
            if (++this._fields, n > i && (this._val += this.decoder.write(e.toString("binary", i, n))), this.boy.emit("field", s(this._key, "binary", this.charset), s(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this._state = "key", this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), i = n + 1, this._fields === this.fieldsLimit) return t();
        } else this._hitLimit ? (o > i && (this._val += this.decoder.write(e.toString("binary", i, o))), i = o, ("" === this._val && 0 === this.fieldSizeLimit || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = !1, this._valTrunc = !0)) : (i < a && (this._val += this.decoder.write(e.toString("binary", i))), i = a);
    }
    t();
}, a.prototype.end = function() {
    this.boy._done || ("key" === this._state && this._key.length > 0 ? this.boy.emit("field", s(this._key, "binary", this.charset), "", this._keyTrunc, !1) : "val" === this._state && this.boy.emit("field", s(this._key, "binary", this.charset), s(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this.boy._done = !0, this.boy.emit("finish"));
}, module.exports = a;
