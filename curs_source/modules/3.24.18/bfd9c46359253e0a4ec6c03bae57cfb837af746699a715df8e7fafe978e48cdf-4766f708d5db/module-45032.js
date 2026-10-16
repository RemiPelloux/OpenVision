"use strict";
var n = require("./module-30129.js").Buffer;
exports._dbcs = u;
for(var s = -1, o = -2, i = -10, a = -1e3, c = new Array(256), l = 0; l < 256; l++)c[l] = s;
function u(e, t) {
    if (this.encodingName = e.encodingName, !e) throw new Error("DBCS codec is called without the data.");
    if (!e.table) throw new Error("Encoding '" + this.encodingName + "' has no data.");
    var r = e.table();
    this.decodeTables = [], this.decodeTables[0] = c.slice(0), this.decodeTableSeq = [];
    for(var n = 0; n < r.length; n++)this._addDecodeChunk(r[n]);
    if ("function" == typeof e.gb18030) {
        this.gb18030 = e.gb18030();
        var i = this.decodeTables.length;
        this.decodeTables.push(c.slice(0));
        var l = this.decodeTables.length;
        this.decodeTables.push(c.slice(0));
        var u = this.decodeTables[0];
        for(n = 129; n <= 254; n++)for(var d = this.decodeTables[a - u[n]], p = 48; p <= 57; p++){
            if (d[p] === s) d[p] = a - i;
            else if (d[p] > a) throw new Error("gb18030 decode tables conflict at byte 2");
            for(var m = this.decodeTables[a - d[p]], h = 129; h <= 254; h++){
                if (m[h] === s) m[h] = a - l;
                else {
                    if (m[h] === a - l) continue;
                    if (m[h] > a) throw new Error("gb18030 decode tables conflict at byte 3");
                }
                for(var f = this.decodeTables[a - m[h]], g = 48; g <= 57; g++)f[g] === s && (f[g] = o);
            }
        }
    }
    this.defaultCharUnicode = t.defaultCharUnicode, this.encodeTable = [], this.encodeTableSeq = [];
    var y = {};
    if (e.encodeSkipVals) for(n = 0; n < e.encodeSkipVals.length; n++){
        var w = e.encodeSkipVals[n];
        if ("number" == typeof w) y[w] = !0;
        else for(p = w.from; p <= w.to; p++)y[p] = !0;
    }
    if (this._fillEncodeTable(0, 0, y), e.encodeAdd) for(var v in e.encodeAdd)Object.prototype.hasOwnProperty.call(e.encodeAdd, v) && this._setEncodeChar(v.charCodeAt(0), e.encodeAdd[v]);
    this.defCharSB = this.encodeTable[0][t.defaultCharSingleByte.charCodeAt(0)], this.defCharSB === s && (this.defCharSB = this.encodeTable[0]["?"]), this.defCharSB === s && (this.defCharSB = "?".charCodeAt(0));
}
function d(e, t) {
    this.leadSurrogate = -1, this.seqObj = void 0, this.encodeTable = t.encodeTable, this.encodeTableSeq = t.encodeTableSeq, this.defaultCharSingleByte = t.defCharSB, this.gb18030 = t.gb18030;
}
function p(e, t) {
    this.nodeIdx = 0, this.prevBytes = [], this.decodeTables = t.decodeTables, this.decodeTableSeq = t.decodeTableSeq, this.defaultCharUnicode = t.defaultCharUnicode, this.gb18030 = t.gb18030;
}
function m(e, t) {
    if (e[0] > t) return -1;
    for(var r = 0, n = e.length; r < n - 1;){
        var s = r + (n - r + 1 >> 1);
        e[s] <= t ? r = s : n = s;
    }
    return r;
}
u.prototype.encoder = d, u.prototype.decoder = p, u.prototype._getDecodeTrieNode = function(e) {
    for(var t = []; e > 0; e >>>= 8)t.push(255 & e);
    0 == t.length && t.push(0);
    for(var r = this.decodeTables[0], n = t.length - 1; n > 0; n--){
        var o = r[t[n]];
        if (o == s) r[t[n]] = a - this.decodeTables.length, this.decodeTables.push(r = c.slice(0));
        else {
            if (!(o <= a)) throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + e.toString(16));
            r = this.decodeTables[a - o];
        }
    }
    return r;
}, u.prototype._addDecodeChunk = function(e) {
    var t = parseInt(e[0], 16), r = this._getDecodeTrieNode(t);
    t &= 255;
    for(var n = 1; n < e.length; n++){
        var s = e[n];
        if ("string" == typeof s) for(var o = 0; o < s.length;){
            var a = s.charCodeAt(o++);
            if (a >= 55296 && a < 56320) {
                var c = s.charCodeAt(o++);
                if (!(c >= 56320 && c < 57344)) throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + e[0]);
                r[t++] = 65536 + 1024 * (a - 55296) + (c - 56320);
            } else if (a > 4080 && a <= 4095) {
                for(var l = 4095 - a + 2, u = [], d = 0; d < l; d++)u.push(s.charCodeAt(o++));
                r[t++] = i - this.decodeTableSeq.length, this.decodeTableSeq.push(u);
            } else r[t++] = a;
        }
        else {
            if ("number" != typeof s) throw new Error("Incorrect type '" + typeof s + "' given in " + this.encodingName + " at chunk " + e[0]);
            var p = r[t - 1] + 1;
            for(o = 0; o < s; o++)r[t++] = p++;
        }
    }
    if (t > 255) throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + e[0] + ": too long" + t);
}, u.prototype._getEncodeBucket = function(e) {
    var t = e >> 8;
    return void 0 === this.encodeTable[t] && (this.encodeTable[t] = c.slice(0)), this.encodeTable[t];
}, u.prototype._setEncodeChar = function(e, t) {
    var r = this._getEncodeBucket(e), n = 255 & e;
    r[n] <= i ? this.encodeTableSeq[i - r[n]][-1] = t : r[n] == s && (r[n] = t);
}, u.prototype._setEncodeSequence = function(e, t) {
    var r, n = e[0], o = this._getEncodeBucket(n), a = 255 & n;
    o[a] <= i ? r = this.encodeTableSeq[i - o[a]] : (r = {}, o[a] !== s && (r[-1] = o[a]), o[a] = i - this.encodeTableSeq.length, this.encodeTableSeq.push(r));
    for(var c = 1; c < e.length - 1; c++){
        var l = r[n];
        "object" == typeof l ? r = l : (r = r[n] = {}, void 0 !== l && (r[-1] = l));
    }
    r[n = e[e.length - 1]] = t;
}, u.prototype._fillEncodeTable = function(e, t, r) {
    for(var n = this.decodeTables[e], s = !1, o = {}, c = 0; c < 256; c++){
        var l = n[c], u = t + c;
        if (!r[u]) if (l >= 0) this._setEncodeChar(l, u), s = !0;
        else if (l <= a) {
            var d = a - l;
            if (!o[d]) {
                var p = u << 8 >>> 0;
                this._fillEncodeTable(d, p, r) ? s = !0 : o[d] = !0;
            }
        } else l <= i && (this._setEncodeSequence(this.decodeTableSeq[i - l], u), s = !0);
    }
    return s;
}, d.prototype.write = function(e) {
    for(var t = n.alloc(e.length * (this.gb18030 ? 4 : 3)), r = this.leadSurrogate, o = this.seqObj, a = -1, c = 0, l = 0;;){
        if (-1 === a) {
            if (c == e.length) break;
            var u = e.charCodeAt(c++);
        } else {
            u = a;
            a = -1;
        }
        if (u >= 55296 && u < 57344) if (u < 56320) {
            if (-1 === r) {
                r = u;
                continue;
            }
            r = u, u = s;
        } else -1 !== r ? (u = 65536 + 1024 * (r - 55296) + (u - 56320), r = -1) : u = s;
        else -1 !== r && (a = u, u = s, r = -1);
        var d = s;
        if (void 0 !== o && u != s) {
            var p = o[u];
            if ("object" == typeof p) {
                o = p;
                continue;
            }
            "number" == typeof p ? d = p : null == p && void 0 !== (p = o[-1]) && (d = p, a = u), o = void 0;
        } else if (u >= 0) {
            var h = this.encodeTable[u >> 8];
            if (void 0 !== h && (d = h[255 & u]), d <= i) {
                o = this.encodeTableSeq[i - d];
                continue;
            }
            if (d == s && this.gb18030) {
                var f = m(this.gb18030.uChars, u);
                if (-1 != f) {
                    d = this.gb18030.gbChars[f] + (u - this.gb18030.uChars[f]);
                    t[l++] = 129 + Math.floor(d / 12600), d %= 12600, t[l++] = 48 + Math.floor(d / 1260), d %= 1260, t[l++] = 129 + Math.floor(d / 10), d %= 10, t[l++] = 48 + d;
                    continue;
                }
            }
        }
        d === s && (d = this.defaultCharSingleByte), d < 256 ? t[l++] = d : d < 65536 ? (t[l++] = d >> 8, t[l++] = 255 & d) : d < 16777216 ? (t[l++] = d >> 16, t[l++] = d >> 8 & 255, t[l++] = 255 & d) : (t[l++] = d >>> 24, t[l++] = d >>> 16 & 255, t[l++] = d >>> 8 & 255, t[l++] = 255 & d);
    }
    return this.seqObj = o, this.leadSurrogate = r, t.slice(0, l);
}, d.prototype.end = function() {
    if (-1 !== this.leadSurrogate || void 0 !== this.seqObj) {
        var e = n.alloc(10), t = 0;
        if (this.seqObj) {
            var r = this.seqObj[-1];
            void 0 !== r && (r < 256 ? e[t++] = r : (e[t++] = r >> 8, e[t++] = 255 & r)), this.seqObj = void 0;
        }
        return -1 !== this.leadSurrogate && (e[t++] = this.defaultCharSingleByte, this.leadSurrogate = -1), e.slice(0, t);
    }
}, d.prototype.findIdx = m, p.prototype.write = function(e) {
    for(var t = n.alloc(2 * e.length), r = this.nodeIdx, c = this.prevBytes, l = this.prevBytes.length, u = -this.prevBytes.length, d = 0, p = 0; d < e.length; d++){
        var h, f = d >= 0 ? e[d] : c[d + l];
        if ((h = this.decodeTables[r][f]) >= 0) ;
        else if (h === s) h = this.defaultCharUnicode.charCodeAt(0), d = u;
        else if (h === o) {
            if (d >= 3) var g = 12600 * (e[d - 3] - 129) + 1260 * (e[d - 2] - 48) + 10 * (e[d - 1] - 129) + (f - 48);
            else g = 12600 * (c[d - 3 + l] - 129) + 1260 * ((d - 2 >= 0 ? e[d - 2] : c[d - 2 + l]) - 48) + 10 * ((d - 1 >= 0 ? e[d - 1] : c[d - 1 + l]) - 129) + (f - 48);
            var y = m(this.gb18030.gbChars, g);
            h = this.gb18030.uChars[y] + g - this.gb18030.gbChars[y];
        } else {
            if (h <= a) {
                r = a - h;
                continue;
            }
            if (!(h <= i)) throw new Error("iconv-lite internal error: invalid decoding table value " + h + " at " + r + "/" + f);
            for(var w = this.decodeTableSeq[i - h], v = 0; v < w.length - 1; v++)h = w[v], t[p++] = 255 & h, t[p++] = h >> 8;
            h = w[w.length - 1];
        }
        if (h >= 65536) {
            var _ = 55296 | (h -= 65536) >> 10;
            t[p++] = 255 & _, t[p++] = _ >> 8, h = 56320 | 1023 & h;
        }
        t[p++] = 255 & h, t[p++] = h >> 8, r = 0, u = d + 1;
    }
    return this.nodeIdx = r, this.prevBytes = u >= 0 ? Array.prototype.slice.call(e, u) : c.slice(u + l).concat(Array.prototype.slice.call(e)), t.slice(0, p).toString("ucs2");
}, p.prototype.end = function() {
    for(var e = ""; this.prevBytes.length > 0;){
        e += this.defaultCharUnicode;
        var t = this.prevBytes.slice(1);
        this.prevBytes = [], this.nodeIdx = 0, t.length > 0 && (e += this.write(t));
    }
    return this.prevBytes = [], this.nodeIdx = 0, e;
};
