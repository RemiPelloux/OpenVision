"use strict";
const n = require("./module-2276.js"), r = require("./module-9963.js").a, o = require("./module-9845.js").Buffer;
function s(e, t) {
    r.call(this, t), o.isBuffer(e) ? (this.base = e, this.offset = 0, this.length = e.length) : this.error("Input not Buffer");
}
function i(e, t) {
    if (Array.isArray(e)) this.length = 0, this.value = e.map(function(e) {
        return i.isEncoderBuffer(e) || (e = new i(e, t)), this.length += e.length, e;
    }, this);
    else if ("number" == typeof e) {
        if (!(0 <= e && e <= 255)) return t.error("non-byte EncoderBuffer value");
        this.value = e, this.length = 1;
    } else if ("string" == typeof e) this.value = e, this.length = o.byteLength(e);
    else {
        if (!o.isBuffer(e)) return t.error("Unsupported type: " + typeof e);
        this.value = e, this.length = e.length;
    }
}
n(s, r), exports.t = s, s.isDecoderBuffer = function(e) {
    if (e instanceof s) return !0;
    return "object" == typeof e && o.isBuffer(e.base) && "DecoderBuffer" === e.constructor.name && "number" == typeof e.offset && "number" == typeof e.length && "function" == typeof e.save && "function" == typeof e.restore && "function" == typeof e.isEmpty && "function" == typeof e.readUInt8 && "function" == typeof e.skip && "function" == typeof e.raw;
}, s.prototype.save = function() {
    return {
        offset: this.offset,
        reporter: r.prototype.save.call(this)
    };
}, s.prototype.restore = function(e) {
    const t = new s(this.base);
    return t.offset = e.offset, t.length = this.offset, this.offset = e.offset, r.prototype.restore.call(this, e.reporter), t;
}, s.prototype.isEmpty = function() {
    return this.offset === this.length;
}, s.prototype.readUInt8 = function(e) {
    return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun");
}, s.prototype.skip = function(e, t) {
    if (!(this.offset + e <= this.length)) return this.error(t || "DecoderBuffer overrun");
    const A = new s(this.base);
    return A._reporterState = this._reporterState, A.offset = this.offset, A.length = this.offset + e, this.offset += e, A;
}, s.prototype.raw = function(e) {
    return this.base.slice(e ? e.offset : this.offset, this.length);
}, exports.d = i, i.isEncoderBuffer = function(e) {
    if (e instanceof i) return !0;
    return "object" == typeof e && "EncoderBuffer" === e.constructor.name && "number" == typeof e.length && "function" == typeof e.join;
}, i.prototype.join = function(e, t) {
    return e || (e = o.alloc(this.length)), t || (t = 0), 0 === this.length || (Array.isArray(this.value) ? this.value.forEach(function(A) {
        A.join(e, t), t += A.length;
    }) : ("number" == typeof this.value ? e[t] = this.value : "string" == typeof this.value ? e.write(this.value, t) : o.isBuffer(this.value) && this.value.copy(e, t), t += this.length)), e;
};
