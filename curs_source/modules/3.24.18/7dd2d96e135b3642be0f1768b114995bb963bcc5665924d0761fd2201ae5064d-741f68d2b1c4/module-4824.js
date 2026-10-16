var a = require("./module-9896.js"), s = require("./module-3106.js"), o = require("./module-4101.js"), r = require("./module-9023.js"), i = require("./module-4434.js").EventEmitter, A = require("./module-2203.js").Transform, c = require("./module-2203.js").PassThrough, l = require("./module-2203.js").Writable;
const d = "function" == typeof s.crc32 ? s.crc32 : require("./module-443.js");
function m(e, n, t) {
    "function" == typeof n && (t = n, n = null), null == n && (n = {}), null == n.autoClose && (n.autoClose = !0), null == n.lazyEntries && (n.lazyEntries = !1), null == n.decodeStrings && (n.decodeStrings = !0), null == n.validateEntrySizes && (n.validateEntrySizes = !0), null == n.strictFileNames && (n.strictFileNames = !1), null == t && (t = M), a.open(e, "r", function(e, s) {
        if (e) return t(e);
        u(s, n, function(e, n) {
            e && a.close(s, M), t(e, n);
        });
    });
}
function u(e, n, t) {
    "function" == typeof n && (t = n, n = null), null == n && (n = {}), null == n.autoClose && (n.autoClose = !1), null == n.lazyEntries && (n.lazyEntries = !1), null == n.decodeStrings && (n.decodeStrings = !0), null == n.validateEntrySizes && (n.validateEntrySizes = !0), null == n.strictFileNames && (n.strictFileNames = !1), null == t && (t = M), a.fstat(e, function(a, s) {
        if (a) return t(a);
        p(new o.FdSlicer(e), s.size, n, t);
    });
}
function g(e, n, t) {
    "function" == typeof n && (t = n, n = null), null == n && (n = {}), n.autoClose = !1, null == n.lazyEntries && (n.lazyEntries = !1), null == n.decodeStrings && (n.decodeStrings = !0), null == n.validateEntrySizes && (n.validateEntrySizes = !0), null == n.strictFileNames && (n.strictFileNames = !1), p(new o.BufferSlicer(e), e.length, n, t);
}
function p(e, n, t, a) {
    "function" == typeof t && (a = t, t = null), null == t && (t = {}), null == t.autoClose && (t.autoClose = !0), null == t.lazyEntries && (t.lazyEntries = !1), null == t.decodeStrings && (t.decodeStrings = !0);
    var s = !!t.decodeStrings;
    if (null == t.validateEntrySizes && (t.validateEntrySizes = !0), null == t.strictFileNames && (t.strictFileNames = !1), null == a && (a = M), "number" != typeof n) throw new Error("expected totalSize parameter to be a number");
    if (n > Number.MAX_SAFE_INTEGER) throw new Error("zip file too large. only file sizes up to 2^52 are supported due to JavaScript's Number type being an IEEE 754 double.");
    e.ref();
    var o = 20, r = Math.min(65577, n), i = N(r), A = n - i.length;
    B(e, i, 0, r, A, function(A) {
        if (A) return a(A);
        for(var c = r - 22; c >= 0; c -= 1)if (101010256 === i.readUInt32LE(c)) {
            var l = i.subarray(c), d = l.readUInt16LE(4), m = l.readUInt16LE(10), u = l.readUInt32LE(16), g = l.readUInt16LE(20), p = l.length - 22;
            if (g !== p) return a(new Error("Invalid comment length. Expected: " + p + ". Found: " + g + ". Are there extra bytes at the end of the file? Or is the end of central dir signature `PK☺☻` in the comment?"));
            var h = s ? w(l.subarray(22), !1) : l.subarray(22);
            if (c - o >= 0 && 117853008 === i.readUInt32LE(c - o)) {
                var T = b(i.subarray(c - o, c - o + o), 8), k = N(56);
                return B(e, k, 0, k.length, T, function(o) {
                    return o ? a(o) : 101075792 !== k.readUInt32LE(0) ? a(new Error("invalid zip64 end of central directory record signature")) : 0 !== (d = k.readUInt32LE(16)) ? a(new Error("multi-disk zip files are not supported: found disk number: " + d)) : (m = b(k, 32), u = b(k, 48), a(null, new E(e, u, n, m, h, t.autoClose, t.lazyEntries, s, t.validateEntrySizes, t.strictFileNames)));
                });
            }
            return 0 !== d ? a(new Error("multi-disk zip files are not supported: found disk number: " + d)) : a(null, new E(e, u, n, m, h, t.autoClose, t.lazyEntries, s, t.validateEntrySizes, t.strictFileNames));
        }
        a(new Error("End of central directory record signature not found. Either not a zip file, or file is truncated."));
    });
}
function E(e, n, t, a, s, o, r, A, c, l) {
    var d = this;
    i.call(d), d.reader = e, d.reader.on("error", function(e) {
        T(d, e);
    }), d.reader.once("close", function() {
        d.emit("close");
    }), d.readEntryCursor = n, d.fileSize = t, d.entryCount = a, d.comment = s, d.entriesRead = 0, d.autoClose = !!o, d.lazyEntries = !!r, d.decodeStrings = !!A, d.validateEntrySizes = !!c, d.strictFileNames = !!l, d.isOpen = !0, d.emittedError = !1, d.hasEachEntryBeenCalled = !1, d.lazyEntries || d._readEntry();
}
function h(e, n) {
    e.autoClose && e.close(), T(e, n);
}
function T(e, n) {
    e.emittedError || (e.emittedError = !0, e.emit("error", n));
}
function k() {}
function f() {}
function _(e, n, t) {
    var a = 31 & e, s = (e >> 5 & 15) - 1, o = 1980 + (e >> 9 & 127), r = 2 * (31 & n), i = n >> 5 & 63, A = n >> 11 & 31;
    if (null == t || "local" === t) return new Date(o, s, a, A, i, r, 0);
    if ("UTC" === t) return new Date(Date.UTC(o, s, a, A, i, r, 0));
    throw new Error("unrecognized options.timezone: " + options.timezone);
}
function I(e, n, t, a) {
    for(var s = null, o = 0; o < t.length; o++){
        var r = t[o];
        if (28789 === r.id) {
            if (r.data.length < 6) continue;
            if (1 !== r.data.readUInt8(0)) continue;
            var i = r.data.readUInt32LE(1);
            if (d(n) !== i) continue;
            s = w(r.data.subarray(5), !0);
            break;
        }
    }
    null == s && (s = w(n, !!(2048 & e)));
    return a || (s = s.replace(/\\/g, "/")), s;
}
function C(e) {
    return -1 !== e.indexOf("\\") ? "invalid characters in fileName: " + e : /^[a-zA-Z]:/.test(e) || /^\//.test(e) ? "absolute path: " + e : -1 !== e.split("/").indexOf("..") ? "invalid relative path: " + e : null;
}
function y(e) {
    for(var n = [], t = 0; t < e.length - 3;){
        var a = e.readUInt16LE(t + 0), s = t + 4, o = s + e.readUInt16LE(t + 2);
        if (o > e.length) throw new Error("extra field length exceeds extra field buffer size");
        var r = e.subarray(s, o);
        n.push({
            id: a,
            data: r
        }), t = o;
    }
    return n;
}
function B(e, n, t, a, s, o) {
    if (0 === a) return setImmediate(function() {
        o(null, N(0));
    });
    e.read(n, t, a, s, function(e, n) {
        return e ? o(e) : n < a ? o(new Error("unexpected EOF")) : void o();
    });
}
function Q(e) {
    A.call(this), this.actualByteCount = 0, this.expectedByteCount = e;
}
function v() {
    i.call(this), this.refCount = 0;
}
function R(e) {
    c.call(this), this.context = e, this.context.ref(), this.unreffedYet = !1;
}
exports.vY = g, r.inherits(E, i), E.prototype.close = function() {
    this.isOpen && (this.isOpen = !1, this.reader.unref());
}, E.prototype.readEntry = function() {
    if (!this.lazyEntries) throw new Error("readEntry() called without lazyEntries:true");
    this._readEntry();
}, E.prototype._readEntry = function() {
    var e = this;
    if (e.entryCount !== e.entriesRead) {
        if (!e.emittedError) {
            var n = N(46);
            B(e.reader, n, 0, n.length, e.readEntryCursor, function(t) {
                if (t) return h(e, t);
                if (!e.emittedError) {
                    var a = new k, s = n.readUInt32LE(0);
                    if (33639248 !== s) return h(e, new Error("invalid central directory file header signature: 0x" + s.toString(16)));
                    if (a.versionMadeBy = n.readUInt16LE(4), a.versionNeededToExtract = n.readUInt16LE(6), a.generalPurposeBitFlag = n.readUInt16LE(8), a.compressionMethod = n.readUInt16LE(10), a.lastModFileTime = n.readUInt16LE(12), a.lastModFileDate = n.readUInt16LE(14), a.crc32 = n.readUInt32LE(16), a.compressedSize = n.readUInt32LE(20), a.uncompressedSize = n.readUInt32LE(24), a.fileNameLength = n.readUInt16LE(28), a.extraFieldLength = n.readUInt16LE(30), a.fileCommentLength = n.readUInt16LE(32), a.internalFileAttributes = n.readUInt16LE(36), a.externalFileAttributes = n.readUInt32LE(38), a.relativeOffsetOfLocalHeader = n.readUInt32LE(42), 64 & a.generalPurposeBitFlag) return h(e, new Error("strong encryption is not supported"));
                    e.readEntryCursor += 46, n = N(a.fileNameLength + a.extraFieldLength + a.fileCommentLength), B(e.reader, n, 0, n.length, e.readEntryCursor, function(t) {
                        if (t) return h(e, t);
                        if (!e.emittedError) {
                            a.fileNameRaw = n.subarray(0, a.fileNameLength);
                            var s = a.fileNameLength + a.extraFieldLength;
                            a.extraFieldRaw = n.subarray(a.fileNameLength, s), a.fileCommentRaw = n.subarray(s, s + a.fileCommentLength);
                            try {
                                a.extraFields = y(a.extraFieldRaw);
                            } catch (t) {
                                return h(e, t);
                            }
                            if (e.decodeStrings) {
                                var o = !!(2048 & a.generalPurposeBitFlag);
                                a.fileComment = w(a.fileCommentRaw, o), a.fileName = I(a.generalPurposeBitFlag, a.fileNameRaw, a.extraFields, e.strictFileNames);
                                var r = C(a.fileName);
                                if (null != r) return h(e, new Error(r));
                            } else a.fileComment = a.fileCommentRaw, a.fileName = a.fileNameRaw;
                            a.comment = a.fileComment, e.readEntryCursor += n.length, e.entriesRead += 1;
                            for(var i = 0; i < a.extraFields.length; i++){
                                var A = a.extraFields[i];
                                if (1 === A.id) {
                                    var c = A.data, l = 0;
                                    if (4294967295 === a.uncompressedSize) {
                                        if (l + 8 > c.length) return h(e, new Error("zip64 extended information extra field does not include uncompressed size"));
                                        a.uncompressedSize = b(c, l), l += 8;
                                    }
                                    if (4294967295 === a.compressedSize) {
                                        if (l + 8 > c.length) return h(e, new Error("zip64 extended information extra field does not include compressed size"));
                                        a.compressedSize = b(c, l), l += 8;
                                    }
                                    if (4294967295 === a.relativeOffsetOfLocalHeader) {
                                        if (l + 8 > c.length) return h(e, new Error("zip64 extended information extra field does not include relative header offset"));
                                        a.relativeOffsetOfLocalHeader = b(c, l), l += 8;
                                    }
                                    break;
                                }
                            }
                            if (e.validateEntrySizes && 0 === a.compressionMethod) {
                                var d = a.uncompressedSize;
                                if (a.isEncrypted() && (d += 12), a.compressedSize !== d) {
                                    var m = "compressed/uncompressed size mismatch for stored file: " + a.compressedSize + " != " + a.uncompressedSize;
                                    return h(e, new Error(m));
                                }
                            }
                            e.emit("entry", a), e.lazyEntries || e._readEntry();
                        }
                    });
                }
            });
        }
    } else setImmediate(function() {
        e.autoClose && e.close(), e.emittedError || e.emit("end");
    });
}, E.prototype.eachEntry = function() {
    const e = this;
    if (!e.lazyEntries) throw new Error("eachEntry() requires lazyEntries: true");
    if (e.hasEachEntryBeenCalled) throw new Error("eachEntry() must only be called once per ZipFile");
    e.hasEachEntryBeenCalled = !0;
    let n = null;
    function t() {
        e.removeListener("entry", a), e.removeListener("end", s), e.removeListener("error", o), e.autoClose && e.close();
    }
    function a(e) {
        let { resolve: t } = n;
        n = null, t({
            value: e
        });
    }
    function s() {
        let { resolve: e } = n;
        n = null, t(), e({
            done: !0
        });
    }
    function o(e) {
        let { reject: a } = n;
        n = null, t(), a(e);
    }
    return e.on("entry", a), e.on("end", s), e.on("error", o), {
        [Symbol.asyncIterator] () {
            return this;
        },
        next () {
            const t = new Promise((e, t)=>{
                if (null != n) throw new Error("next() called before previous Promise was resolved.");
                n = {
                    resolve: e,
                    reject: t
                };
            });
            return e.readEntry(), t;
        },
        return: (e)=>(t(), Promise.resolve({
                done: !0,
                value: e
            })),
        throw: (e)=>(t(), Promise.reject(e))
    };
}, E.prototype.openReadStream = function(e, n, t) {
    var a = this, s = 0, o = e.compressedSize;
    if (null == t && (t = n, n = null), null == n) n = {};
    else {
        if (!1 === n.decodeFileData) {
            if (null != n.decrypt) throw new Error("cannot use options.decrypt when options.decodeFileData === false");
            if (null != n.decompress) throw new Error("cannot use options.decompress when options.decodeFileData === false");
        } else {
            if (null != n.decrypt) {
                if (!e.isEncrypted()) throw new Error("options.decrypt can only be specified for encrypted entries. See also option decodeFileData.");
                if (!1 !== n.decrypt) throw new Error("invalid options.decrypt value: " + n.decrypt);
                if (e.isCompressed() && !1 !== n.decompress) throw new Error("entry is encrypted and compressed, and options.decompress !== false. See also option decodeFileData.");
            }
            if (null != n.decompress) {
                if (!e.isCompressed()) throw new Error("options.decompress can only be specified for compressed entries. See also option decodeFileData.");
                if (!1 !== n.decompress && !0 !== n.decompress) throw new Error("invalid options.decompress value: " + n.decompress);
                r = n.decompress;
            }
        }
        if (null != n.start) {
            if ((s = n.start) < 0) throw new Error("options.start < 0");
            if (s > e.compressedSize) throw new Error("options.start > entry.compressedSize");
        }
        if (null != n.end) {
            if ((o = n.end) < 0) throw new Error("options.end < 0");
            if (o > e.compressedSize) throw new Error("options.end > entry.compressedSize");
            if (o < s) throw new Error("options.end < options.start");
        }
    }
    var r, i = !1 === n.decodeFileData || (0 === e.compressionMethod || 8 === e.compressionMethod && !1 === n.decompress) && (!e.isEncrypted() || !1 === n.decrypt);
    if ((null != n.start || null != n.end) && !i) throw new Error("start/end range require options.decodeFileData === false for non-trivial encoded entries.");
    if (!a.isOpen) return t(new Error("closed"));
    if (e.isEncrypted() && !i && !1 !== n.decrypt) return t(new Error("entry is encrypted, and options.decodeFileData !== false"));
    if (i) r = !1;
    else {
        if (8 !== e.compressionMethod) return t(new Error("unsupported compression method: " + e.compressionMethod));
        r = !0 !== n.decodeFileData;
    }
    a.readLocalFileHeader(e, {
        minimal: !0
    }, function(n, i) {
        if (n) return t(n);
        a.openReadStreamLowLevel(i.fileDataStart, e.compressedSize, s, o, r, e.uncompressedSize, t);
    });
}, E.prototype.openReadStreamLowLevel = function(e, n, t, a, o, r, i) {
    var A = this.reader.createReadStream({
        start: e + t,
        end: e + a
    }), c = A;
    if (o) {
        var l = !1, d = s.createInflateRaw();
        A.on("error", function(e) {
            setImmediate(function() {
                l || d.emit("error", e);
            });
        }), A.pipe(d), this.validateEntrySizes ? (c = new Q(r), d.on("error", function(e) {
            setImmediate(function() {
                l || c.emit("error", e);
            });
        }), d.pipe(c)) : c = d, D(c, function() {
            l = !0, d !== c && d.unpipe(c), A.unpipe(d), A.destroy();
        });
    }
    i(null, c);
}, E.prototype.readLocalFileHeader = function(e, n, t) {
    var a = this;
    null == t && (t = n, n = null), null == n && (n = {}), a.reader.ref();
    var s = N(30);
    B(a.reader, s, 0, s.length, e.relativeOffsetOfLocalHeader, function(o) {
        try {
            if (o) return t(o);
            var r = s.readUInt32LE(0);
            if (67324752 !== r) return t(new Error("invalid local file header signature: 0x" + r.toString(16)));
            var i = s.readUInt16LE(26), A = s.readUInt16LE(28), c = e.relativeOffsetOfLocalHeader + 30 + i + A;
            if (c + e.compressedSize > a.fileSize) return t(new Error("file data overflows file bounds: " + c + " + " + e.compressedSize + " > " + a.fileSize));
            if (n.minimal) return t(null, {
                fileDataStart: c
            });
            var l = new f;
            l.fileDataStart = c, l.versionNeededToExtract = s.readUInt16LE(4), l.generalPurposeBitFlag = s.readUInt16LE(6), l.compressionMethod = s.readUInt16LE(8), l.lastModFileTime = s.readUInt16LE(10), l.lastModFileDate = s.readUInt16LE(12), l.crc32 = s.readUInt32LE(14), l.compressedSize = s.readUInt32LE(18), l.uncompressedSize = s.readUInt32LE(22), l.fileNameLength = i, l.extraFieldLength = A, s = N(i + A), a.reader.ref(), B(a.reader, s, 0, s.length, e.relativeOffsetOfLocalHeader + 30, function(e) {
                try {
                    return e ? t(e) : (l.fileName = s.subarray(0, i), l.extraField = s.subarray(i), t(null, l));
                } finally{
                    a.reader.unref();
                }
            });
        } finally{
            a.reader.unref();
        }
    });
}, E.prototype.openReadStreamPromise = function(e, n) {
    return new Promise((t, a)=>{
        this.openReadStream(e, n, function(e, n) {
            if (e) return a(e);
            t(n);
        });
    });
}, E.prototype.openReadStreamLowLevelPromise = function(e, n, t, a, s, o) {
    return new Promise((r, i)=>{
        this.openReadStream(e, n, t, a, s, o, function(e, n) {
            if (e) return i(e);
            r(n);
        });
    });
}, E.prototype.readLocalFileHeaderPromise = function(e, n) {
    return new Promise((t, a)=>{
        this.readLocalFileHeader(e, n, function(e, n) {
            if (e) return a(e);
            t(n);
        });
    });
}, k.prototype.getLastModDate = function(e) {
    if (null == e && (e = {}), !e.forceDosFormat) for(var n = 0; n < this.extraFields.length; n++){
        var t = this.extraFields[n];
        if (21589 === t.id) {
            if ((s = t.data).length < 5) continue;
            if (!(1 & s[0])) continue;
            var a = s.readInt32LE(1);
            return new Date(1e3 * a);
        }
        if (10 === t.id) {
            var s;
            if (32 !== (s = t.data).length) continue;
            if (1 !== s.readUInt16LE(4)) continue;
            if (24 !== s.readUInt16LE(6)) continue;
            var o = s.readUInt32LE(8) + 4294967296 * s.readInt32LE(12);
            return new Date(o / 1e4 - 116444736e5);
        }
    }
    return _(this.lastModFileDate, this.lastModFileTime, e.timezone);
}, k.prototype.canDecodeFileData = function() {
    return !this.isEncrypted() && (0 === this.compressionMethod || 8 === this.compressionMethod);
}, k.prototype.isEncrypted = function() {
    return !!(1 & this.generalPurposeBitFlag);
}, k.prototype.isCompressed = function() {
    return 8 === this.compressionMethod;
}, r.inherits(Q, A), Q.prototype._transform = function(e, n, t) {
    if (this.actualByteCount += e.length, this.actualByteCount > this.expectedByteCount) {
        var a = "too many bytes in the stream. expected " + this.expectedByteCount + ". got at least " + this.actualByteCount;
        return t(new Error(a));
    }
    t(null, e);
}, Q.prototype._flush = function(e) {
    if (this.actualByteCount < this.expectedByteCount) {
        var n = "not enough bytes in the stream. expected " + this.expectedByteCount + ". got only " + this.actualByteCount;
        return e(new Error(n));
    }
    e();
}, r.inherits(v, i), v.prototype.ref = function() {
    this.refCount += 1;
}, v.prototype.unref = function() {
    var e = this;
    if (e.refCount -= 1, !(e.refCount > 0)) {
        if (e.refCount < 0) throw new Error("invalid unref");
        e.close(function(n) {
            if (n) return e.emit("error", n);
            e.emit("close");
        });
    }
}, v.prototype.createReadStream = function(e) {
    null == e && (e = {});
    var n = e.start, t = e.end;
    if (n === t) {
        var a = new c;
        return setImmediate(function() {
            a.end();
        }), a;
    }
    var s = this._readStreamForRange(n, t), o = !1, r = new R(this);
    s.on("error", function(e) {
        setImmediate(function() {
            o || r.emit("error", e);
        });
    }), D(r, function() {
        s.unpipe(r), r.unref(), s.destroy();
    });
    var i = new Q(t - n);
    return r.on("error", function(e) {
        setImmediate(function() {
            o || i.emit("error", e);
        });
    }), D(i, function() {
        o = !0, r.unpipe(i), r.destroy();
    }), s.pipe(r).pipe(i);
}, v.prototype._readStreamForRange = function(e, n) {
    throw new Error("not implemented");
}, v.prototype.read = function(e, n, t, a, s) {
    var o = this.createReadStream({
        start: a,
        end: a + t
    }), r = new l, i = 0;
    r._write = function(t, a, s) {
        t.copy(e, n + i, 0, t.length), i += t.length, s();
    }, r.on("finish", s), o.on("error", function(e) {
        s(e);
    }), o.pipe(r);
}, v.prototype.close = function(e) {
    setImmediate(e);
}, r.inherits(R, c), R.prototype._flush = function(e) {
    this.unref(), e();
}, R.prototype.unref = function(e) {
    this.unreffedYet || (this.unreffedYet = !0, this.context.unref());
};
var N, S = "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ";
function w(e, n) {
    if (n) return e.toString("utf8");
    for(var t = "", a = 0; a < e.length; a++)t += S[e[a]];
    return t;
}
function b(e, n) {
    var t = e.readUInt32LE(n);
    return 4294967296 * e.readUInt32LE(n + 4) + t;
}
function D(e, n) {
    "function" == typeof e.destroy ? e._destroy = function(e, t) {
        n(), null != t && t(e);
    } : e.destroy = n;
}
function M(e) {
    if (e) throw e;
}
N = "function" == typeof Buffer.allocUnsafe ? function(e) {
    return Buffer.allocUnsafe(e);
} : function(e) {
    return new Buffer(e);
};
