"use strict";
var n = require("./module-96095.js"), a = require("./module-77353.js"), i = require("./module-63376.js"), o = require("./module-55534.js"), s = require("./module-3638.js"), f = Object.prototype.toString;
function l(e) {
    if (!(this instanceof l)) return new l(e);
    this.options = a.assign({
        level: -1,
        method: 8,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: 0,
        to: ""
    }, e || {});
    var t = this.options;
    t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s, this.strm.avail_out = 0;
    var r = n.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
    if (0 !== r) throw new Error(o[r]);
    if (t.header && n.deflateSetHeader(this.strm, t.header), t.dictionary) {
        var h;
        if (h = "string" == typeof t.dictionary ? i.string2buf(t.dictionary) : "[object ArrayBuffer]" === f.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, 0 !== (r = n.deflateSetDictionary(this.strm, h))) throw new Error(o[r]);
        this._dict_set = !0;
    }
}
function h(e, t) {
    var r = new l(t);
    if (r.push(e, !0), r.err) throw r.msg || o[r.err];
    return r.result;
}
l.prototype.push = function(e, t) {
    var r, o, s = this.strm, l = this.options.chunkSize;
    if (this.ended) return !1;
    o = t === ~~t ? t : !0 === t ? 4 : 0, "string" == typeof e ? s.input = i.string2buf(e) : "[object ArrayBuffer]" === f.call(e) ? s.input = new Uint8Array(e) : s.input = e, s.next_in = 0, s.avail_in = s.input.length;
    do {
        if (0 === s.avail_out && (s.output = new a.Buf8(l), s.next_out = 0, s.avail_out = l), 1 !== (r = n.deflate(s, o)) && 0 !== r) return this.onEnd(r), this.ended = !0, !1;
        0 !== s.avail_out && (0 !== s.avail_in || 4 !== o && 2 !== o) || ("string" === this.options.to ? this.onData(i.buf2binstring(a.shrinkBuf(s.output, s.next_out))) : this.onData(a.shrinkBuf(s.output, s.next_out)));
    }while ((s.avail_in > 0 || 0 === s.avail_out) && 1 !== r)
    return 4 === o ? (r = n.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, 0 === r) : 2 !== o || (this.onEnd(0), s.avail_out = 0, !0);
}, l.prototype.onData = function(e) {
    this.chunks.push(e);
}, l.prototype.onEnd = function(e) {
    0 === e && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
}, exports.Deflate = l, exports.deflate = h, exports.deflateRaw = function(e, t) {
    return (t = t || {}).raw = !0, h(e, t);
}, exports.gzip = function(e, t) {
    return (t = t || {}).gzip = !0, h(e, t);
};
