let r = require("./module-94393.js"), n = require("./module-58102.js"), s = module.exports = function(t, e) {
    this._options = t, t.checkCRC = !1 !== t.checkCRC, this._hasIHDR = !1, this._hasIEND = !1, this._emittedHeadersFinished = !1, this._palette = [], this._colorType = 0, this._chunks = {}, this._chunks[r.TYPE_IHDR] = this._handleIHDR.bind(this), this._chunks[r.TYPE_IEND] = this._handleIEND.bind(this), this._chunks[r.TYPE_IDAT] = this._handleIDAT.bind(this), this._chunks[r.TYPE_PLTE] = this._handlePLTE.bind(this), this._chunks[r.TYPE_tRNS] = this._handleTRNS.bind(this), this._chunks[r.TYPE_gAMA] = this._handleGAMA.bind(this), this.read = e.read, this.error = e.error, this.metadata = e.metadata, this.gamma = e.gamma, this.transColor = e.transColor, this.palette = e.palette, this.parsed = e.parsed, this.inflateData = e.inflateData, this.finished = e.finished, this.simpleTransparency = e.simpleTransparency, this.headersFinished = e.headersFinished || function() {};
};
s.prototype.start = function() {
    this.read(r.PNG_SIGNATURE.length, this._parseSignature.bind(this));
}, s.prototype._parseSignature = function(t) {
    let e = r.PNG_SIGNATURE;
    for(let i = 0; i < e.length; i++)if (t[i] !== e[i]) return void this.error(new Error("Invalid file signature"));
    this.read(8, this._parseChunkBegin.bind(this));
}, s.prototype._parseChunkBegin = function(t) {
    let e = t.readUInt32BE(0), i = t.readUInt32BE(4), s = "";
    for(let e = 4; e < 8; e++)s += String.fromCharCode(t[e]);
    let h = Boolean(32 & t[4]);
    if (this._hasIHDR || i === r.TYPE_IHDR) {
        if (this._crc = new n, this._crc.write(Buffer.from(s)), this._chunks[i]) return this._chunks[i](e);
        h ? this.read(e + 4, this._skipChunk.bind(this)) : this.error(new Error("Unsupported critical chunk type " + s));
    } else this.error(new Error("Expected IHDR on beggining"));
}, s.prototype._skipChunk = function() {
    this.read(8, this._parseChunkBegin.bind(this));
}, s.prototype._handleChunkEnd = function() {
    this.read(4, this._parseChunkEnd.bind(this));
}, s.prototype._parseChunkEnd = function(t) {
    let e = t.readInt32BE(0), i = this._crc.crc32();
    this._options.checkCRC && i !== e ? this.error(new Error("Crc error - " + e + " - " + i)) : this._hasIEND || this.read(8, this._parseChunkBegin.bind(this));
}, s.prototype._handleIHDR = function(t) {
    this.read(t, this._parseIHDR.bind(this));
}, s.prototype._parseIHDR = function(t) {
    this._crc.write(t);
    let e = t.readUInt32BE(0), i = t.readUInt32BE(4), n = t[8], s = t[9], h = t[10], o = t[11], a = t[12];
    if (8 !== n && 4 !== n && 2 !== n && 1 !== n && 16 !== n) return void this.error(new Error("Unsupported bit depth " + n));
    if (!(s in r.COLORTYPE_TO_BPP_MAP)) return void this.error(new Error("Unsupported color type"));
    if (0 !== h) return void this.error(new Error("Unsupported compression method"));
    if (0 !== o) return void this.error(new Error("Unsupported filter method"));
    if (0 !== a && 1 !== a) return void this.error(new Error("Unsupported interlace method"));
    this._colorType = s;
    let l = r.COLORTYPE_TO_BPP_MAP[this._colorType];
    this._hasIHDR = !0, this.metadata({
        width: e,
        height: i,
        depth: n,
        interlace: Boolean(a),
        palette: Boolean(s & r.COLORTYPE_PALETTE),
        color: Boolean(s & r.COLORTYPE_COLOR),
        alpha: Boolean(s & r.COLORTYPE_ALPHA),
        bpp: l,
        colorType: s
    }), this._handleChunkEnd();
}, s.prototype._handlePLTE = function(t) {
    this.read(t, this._parsePLTE.bind(this));
}, s.prototype._parsePLTE = function(t) {
    this._crc.write(t);
    let e = Math.floor(t.length / 3);
    for(let i = 0; i < e; i++)this._palette.push([
        t[3 * i],
        t[3 * i + 1],
        t[3 * i + 2],
        255
    ]);
    this.palette(this._palette), this._handleChunkEnd();
}, s.prototype._handleTRNS = function(t) {
    this.simpleTransparency(), this.read(t, this._parseTRNS.bind(this));
}, s.prototype._parseTRNS = function(t) {
    if (this._crc.write(t), this._colorType === r.COLORTYPE_PALETTE_COLOR) {
        if (0 === this._palette.length) return void this.error(new Error("Transparency chunk must be after palette"));
        if (t.length > this._palette.length) return void this.error(new Error("More transparent colors than palette size"));
        for(let e = 0; e < t.length; e++)this._palette[e][3] = t[e];
        this.palette(this._palette);
    }
    this._colorType === r.COLORTYPE_GRAYSCALE && this.transColor([
        t.readUInt16BE(0)
    ]), this._colorType === r.COLORTYPE_COLOR && this.transColor([
        t.readUInt16BE(0),
        t.readUInt16BE(2),
        t.readUInt16BE(4)
    ]), this._handleChunkEnd();
}, s.prototype._handleGAMA = function(t) {
    this.read(t, this._parseGAMA.bind(this));
}, s.prototype._parseGAMA = function(t) {
    this._crc.write(t), this.gamma(t.readUInt32BE(0) / r.GAMMA_DIVISION), this._handleChunkEnd();
}, s.prototype._handleIDAT = function(t) {
    this._emittedHeadersFinished || (this._emittedHeadersFinished = !0, this.headersFinished()), this.read(-t, this._parseIDAT.bind(this, t));
}, s.prototype._parseIDAT = function(t, e) {
    if (this._crc.write(e), this._colorType === r.COLORTYPE_PALETTE_COLOR && 0 === this._palette.length) throw new Error("Expected palette not found");
    this.inflateData(e);
    let i = t - e.length;
    i > 0 ? this._handleIDAT(i) : this._handleChunkEnd();
}, s.prototype._handleIEND = function(t) {
    this.read(t, this._parseIEND.bind(this));
}, s.prototype._parseIEND = function(t) {
    this._crc.write(t), this._hasIEND = !0, this._handleChunkEnd(), this.finished && this.finished();
};
