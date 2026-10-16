"use strict";
var n = require("./module-9763.js"), a = require("./module-7353.js"), i = require("./module-3376.js"), o = require("./module-7101.js"), s = require("./module-5534.js"), f = require("./module-3638.js"), l = require("./module-6930.js"), h = Object.prototype.toString;
function d(e) {
    if (!(this instanceof d)) return new d(e);
    this.options = a.assign({
        chunkSize: 16384,
        windowBits: 0,
        to: ""
    }, e || {});
    var t = this.options;
    t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (15 & t.windowBits || (t.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new f, this.strm.avail_out = 0;
    var r = n.inflateInit2(this.strm, t.windowBits);
    if (r !== o.Z_OK) throw new Error(s[r]);
    if (this.header = new l, n.inflateGetHeader(this.strm, this.header), t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = i.string2buf(t.dictionary) : "[object ArrayBuffer]" === h.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (r = n.inflateSetDictionary(this.strm, t.dictionary)) !== o.Z_OK)) throw new Error(s[r]);
}
function u(e, t) {
    var r = new d(t);
    if (r.push(e, !0), r.err) throw r.msg || s[r.err];
    return r.result;
}
d.prototype.push = function(e, t) {
    var r, s, f, l, d, u = this.strm, c = this.options.chunkSize, _ = this.options.dictionary, v = !1;
    if (this.ended) return !1;
    s = t === ~~t ? t : !0 === t ? o.Z_FINISH : o.Z_NO_FLUSH, "string" == typeof e ? u.input = i.binstring2buf(e) : "[object ArrayBuffer]" === h.call(e) ? u.input = new Uint8Array(e) : u.input = e, u.next_in = 0, u.avail_in = u.input.length;
    do {
        if (0 === u.avail_out && (u.output = new a.Buf8(c), u.next_out = 0, u.avail_out = c), (r = n.inflate(u, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && _ && (r = n.inflateSetDictionary(this.strm, _)), r === o.Z_BUF_ERROR && !0 === v && (r = o.Z_OK, v = !1), r !== o.Z_STREAM_END && r !== o.Z_OK) return this.onEnd(r), this.ended = !0, !1;
        u.next_out && (0 !== u.avail_out && r !== o.Z_STREAM_END && (0 !== u.avail_in || s !== o.Z_FINISH && s !== o.Z_SYNC_FLUSH) || ("string" === this.options.to ? (f = i.utf8border(u.output, u.next_out), l = u.next_out - f, d = i.buf2string(u.output, f), u.next_out = l, u.avail_out = c - l, l && a.arraySet(u.output, u.output, f, l, 0), this.onData(d)) : this.onData(a.shrinkBuf(u.output, u.next_out)))), 0 === u.avail_in && 0 === u.avail_out && (v = !0);
    }while ((u.avail_in > 0 || 0 === u.avail_out) && r !== o.Z_STREAM_END)
    return r === o.Z_STREAM_END && (s = o.Z_FINISH), s === o.Z_FINISH ? (r = n.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === o.Z_OK) : s !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), u.avail_out = 0, !0);
}, d.prototype.onData = function(e) {
    this.chunks.push(e);
}, d.prototype.onEnd = function(e) {
    e === o.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
}, exports.Inflate = d, exports.inflate = u, exports.inflateRaw = function(e, t) {
    return (t = t || {}).raw = !0, u(e, t);
}, exports.ungzip = u;
