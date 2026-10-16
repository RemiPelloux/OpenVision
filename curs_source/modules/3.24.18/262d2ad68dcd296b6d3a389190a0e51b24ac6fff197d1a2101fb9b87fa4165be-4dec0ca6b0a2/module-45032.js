"use strict";
var n = require("./module-30129.js").Buffer;
exports._dbcs = u;
for(var o = -1, s = -2, i = -10, a = -1e3, l = new Array(256), c = 0; c < 256; c++)l[c] = o;
function u(e, t) {
    if (this.encodingName = e.encodingName, !e) throw new Error("DBCS codec is called without the data.");
    if (!e.table) throw new Error("Encoding '" + this.encodingName + "' has no data.");
    var r = e.table();
    this.decodeTables = [], this.decodeTables[0] = l.slice(0), this.decodeTableSeq = [];
    for(var n = 0; n < r.length; n++)this._addDecodeChunk(r[n]);
    if ("function" == typeof e.gb18030) {
        this.gb18030 = e.gb18030();
        var i = this.decodeTables.length;
        this.decodeTables.push(l.slice(0));
        var c = this.decodeTables.length;
        this.decodeTables.push(l.slice(0));
        var u = this.decodeTables[0];
        for(n = 129; n <= 254; n++)for(var d = this.decodeTables[a - u[n]], p = 48; p <= 57; p++){
            if (d[p] === o) d[p] = a - i;
            else if (d[p] > a) throw new Error("gb18030 decode tables conflict at byte 2");
            for(var h = this.decodeTables[a - d[p]], m = 129; m <= 254; m++){
                if (h[m] === o) h[m] = a - c;
                else {
                    if (h[m] === a - c) continue;
                    if (h[m] > a) throw new Error("gb18030 decode tables conflict at byte 3");
                }
                for(var f = this.decodeTables[a - h[m]], g = 48; g <= 57; g++)f[g] === o && (f[g] = s);
            }
        }
    }
    this.defaultCharUnicode = t.defaultCharUnicode, this.encodeTable = [], this.encodeTableSeq = [];
    var y = {};
    if (e.encodeSkipVals) for(n = 0; n < e.encodeSkipVals.length; n++){
        var v = e.encodeSkipVals[n];
        if ("number" == typeof v) y[v] = !0;
        else for(p = v.from; p <= v.to; p++)y[p] = !0;
    }
    if (this._fillEncodeTable(0, 0, y), e.encodeAdd) for(var w in e.encodeAdd)Object.prototype.hasOwnProperty.call(e.encodeAdd, w) && this._setEncodeChar(w.charCodeAt(0), e.encodeAdd[w]);
    this.defCharSB = this.encodeTable[0][t.defaultCharSingleByte.charCodeAt(0)], this.defCharSB === o && (this.defCharSB = this.encodeTable[0]["?"]), this.defCharSB === o && (this.defCharSB = "?".charCodeAt(0));
}
function d(e, t) {
    this.leadSurrogate = -1, this.seqObj = void 0, this.encodeTable = t.encodeTable, this.encodeTableSeq = t.encodeTableSeq, this.defaultCharSingleByte = t.defCharSB, this.gb18030 = t.gb18030;
}
function p(e, t) {
    this.nodeIdx = 0, this.prevBytes = [], this.decodeTables = t.decodeTables, this.decodeTableSeq = t.decodeTableSeq, this.defaultCharUnicode = t.defaultCharUnicode, this.gb18030 = t.gb18030;
}
function h(e, t) {
    if (e[0] > t) return -1;
    for(var r = 0, n = e.length; r < n - 1;){
        var o = r + (n - r + 1 >> 1);
        e[o] <= t ? r = o : n = o;
    }
    return r;
}
u.prototype.encoder = d, u.prototype.decoder = p, u.prototype._getDecodeTrieNode = function(e) {
    for(var t = []; e > 0; e >>>= 8)t.push(255 & e);
    0 == t.length && t.push(0);
    for(var r = this.decodeTables[0], n = t.length - 1; n > 0; n--){
        var s = r[t[n]];
        if (s == o) r[t[n]] = a - this.decodeTables.length, this.decodeTables.push(r = l.slice(0));
        else {
            if (!(s <= a)) throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + e.toString(16));
            r = this.decodeTables[a - s];
        }
    }
    return r;
}, u.prototype._addDecodeChunk = function(e) {
    var t = parseInt(e[0], 16), r = this._getDecodeTrieNode(t);
    t &= 255;
    for(var n = 1; n < e.length; n++){
        var o = e[n];
        if ("string" == typeof o) for(var s = 0; s < o.length;){
            var a = o.charCodeAt(s++);
            if (a >= 55296 && a < 56320) {
                var l = o.charCodeAt(s++);
                if (!(l >= 56320 && l < 57344)) throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + e[0]);
                r[t++] = 65536 + 1024 * (a - 55296) + (l - 56320);
            } else if (a > 4080 && a <= 4095) {
                for(var c = 4095 - a + 2, u = [], d = 0; d < c; d++)u.push(o.charCodeAt(s++));
                r[t++] = i - this.decodeTableSeq.length, this.decodeTableSeq.push(u);
            } else r[t++] = a;
        }
        else {
            if ("number" != typeof o) throw new Error("Incorrect type '" + typeof o + "' given in " + this.encodingName + " at chunk " + e[0]);
            var p = r[t - 1] + 1;
            for(s = 0; s < o; s++)r[t++] = p++;
        }
    }
    if (t > 255) throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + e[0] + ": too long" + t);
}, u.prototype._getEncodeBucket = function(e) {
    var t = e >> 8;
    return void 0 === this.encodeTable[t] && (this.encodeTable[t] = l.slice(0)), this.encodeTable[t];
}, u.prototype._setEncodeChar = function(e, t) {
    var r = this._getEncodeBucket(e), n = 255 & e;
    r[n] <= i ? this.encodeTableSeq[i - r[n]][-1] = t : r[n] == o && (r[n] = t);
}, u.prototype._setEncodeSequence = function(e, t) {
    var r, n = e[0], s = this._getEncodeBucket(n), a = 255 & n;
    s[a] <= i ? r = this.encodeTableSeq[i - s[a]] : (r = {}, s[a] !== o && (r[-1] = s[a]), s[a] = i - this.encodeTableSeq.length, this.encodeTableSeq.push(r));
    for(var l = 1; l < e.length - 1; l++){
        var c = r[n];
        "object" == typeof c ? r = c : (r = r[n] = {}, void 0 !== c && (r[-1] = c));
    }
    r[n = e[e.length - 1]] = t;
}, u.prototype._fillEncodeTable = function(e, t, r) {
    for(var n = this.decodeTables[e], o = !1, s = {}, l = 0; l < 256; l++){
        var c = n[l], u = t + l;
        if (!r[u]) if (c >= 0) this._setEncodeChar(c, u), o = !0;
        else if (c <= a) {
            var d = a - c;
            if (!s[d]) {
                var p = u << 8 >>> 0;
                this._fillEncodeTable(d, p, r) ? o = !0 : s[d] = !0;
            }
        } else c <= i && (this._setEncodeSequence(this.decodeTableSeq[i - c], u), o = !0);
    }
    return o;
}, d.prototype.write = function(e) {
    for(var t = n.alloc(e.length * (this.gb18030 ? 4 : 3)), r = this.leadSurrogate, s = this.seqObj, a = -1, l = 0, c = 0;;){
        if (-1 === a) {
            if (l == e.length) break;
            var u = e.charCodeAt(l++);
        } else {
            u = a;
            a = -1;
        }
        if (u >= 55296 && u < 57344) if (u < 56320) {
            if (-1 === r) {
                r = u;
                continue;
            }
            r = u, u = o;
        } else -1 !== r ? (u = 65536 + 1024 * (r - 55296) + (u - 56320), r = -1) : u = o;
        else -1 !== r && (a = u, u = o, r = -1);
        var d = o;
        if (void 0 !== s && u != o) {
            var p = s[u];
            if ("object" == typeof p) {
                s = p;
                continue;
            }
            "number" == typeof p ? d = p : null == p && void 0 !== (p = s[-1]) && (d = p, a = u), s = void 0;
        } else if (u >= 0) {
            var m = this.encodeTable[u >> 8];
            if (void 0 !== m && (d = m[255 & u]), d <= i) {
                s = this.encodeTableSeq[i - d];
                continue;
            }
            if (d == o && this.gb18030) {
                var f = h(this.gb18030.uChars, u);
                if (-1 != f) {
                    d = this.gb18030.gbChars[f] + (u - this.gb18030.uChars[f]);
                    t[c++] = 129 + Math.floor(d / 12600), d %= 12600, t[c++] = 48 + Math.floor(d / 1260), d %= 1260, t[c++] = 129 + Math.floor(d / 10), d %= 10, t[c++] = 48 + d;
                    continue;
                }
            }
        }
        d === o && (d = this.defaultCharSingleByte), d < 256 ? t[c++] = d : d < 65536 ? (t[c++] = d >> 8, t[c++] = 255 & d) : d < 16777216 ? (t[c++] = d >> 16, t[c++] = d >> 8 & 255, t[c++] = 255 & d) : (t[c++] = d >>> 24, t[c++] = d >>> 16 & 255, t[c++] = d >>> 8 & 255, t[c++] = 255 & d);
    }
    return this.seqObj = s, this.leadSurrogate = r, t.slice(0, c);
}, d.prototype.end = function() {
    if (-1 !== this.leadSurrogate || void 0 !== this.seqObj) {
        var e = n.alloc(10), t = 0;
        if (this.seqObj) {
            var r = this.seqObj[-1];
            void 0 !== r && (r < 256 ? e[t++] = r : (e[t++] = r >> 8, e[t++] = 255 & r)), this.seqObj = void 0;
        }
        return -1 !== this.leadSurrogate && (e[t++] = this.defaultCharSingleByte, this.leadSurrogate = -1), e.slice(0, t);
    }
}, d.prototype.findIdx = h, p.prototype.write = function(e) {
    for(var t = n.alloc(2 * e.length), r = this.nodeIdx, l = this.prevBytes, c = this.prevBytes.length, u = -this.prevBytes.length, d = 0, p = 0; d < e.length; d++){
        var m, f = d >= 0 ? e[d] : l[d + c];
        if ((m = this.decodeTables[r][f]) >= 0) ;
        else if (m === o) m = this.defaultCharUnicode.charCodeAt(0), d = u;
        else if (m === s) {
            if (d >= 3) var g = 12600 * (e[d - 3] - 129) + 1260 * (e[d - 2] - 48) + 10 * (e[d - 1] - 129) + (f - 48);
            else g = 12600 * (l[d - 3 + c] - 129) + 1260 * ((d - 2 >= 0 ? e[d - 2] : l[d - 2 + c]) - 48) + 10 * ((d - 1 >= 0 ? e[d - 1] : l[d - 1 + c]) - 129) + (f - 48);
            var y = h(this.gb18030.gbChars, g);
            m = this.gb18030.uChars[y] + g - this.gb18030.gbChars[y];
        } else {
            if (m <= a) {
                r = a - m;
                continue;
            }
            if (!(m <= i)) throw new Error("iconv-lite internal error: invalid decoding table value " + m + " at " + r + "/" + f);
            for(var v = this.decodeTableSeq[i - m], w = 0; w < v.length - 1; w++)m = v[w], t[p++] = 255 & m, t[p++] = m >> 8;
            m = v[v.length - 1];
        }
        if (m >= 65536) {
            var b = 55296 | (m -= 65536) >> 10;
            t[p++] = 255 & b, t[p++] = b >> 8, m = 56320 | 1023 & m;
        }
        t[p++] = 255 & m, t[p++] = m >> 8, r = 0, u = d + 1;
    }
    return this.nodeIdx = r, this.prevBytes = u >= 0 ? Array.prototype.slice.call(e, u) : l.slice(u + c).concat(Array.prototype.slice.call(e)), t.slice(0, p).toString("ucs2");
}, p.prototype.end = function() {
    for(var e = ""; this.prevBytes.length > 0;){
        e += this.defaultCharUnicode;
        var t = this.prevBytes.slice(1);
        this.prevBytes = [], this.nodeIdx = 0, t.length > 0 && (e += this.write(t));
    }
    return this.prevBytes = [], this.nodeIdx = 0, e;
};
