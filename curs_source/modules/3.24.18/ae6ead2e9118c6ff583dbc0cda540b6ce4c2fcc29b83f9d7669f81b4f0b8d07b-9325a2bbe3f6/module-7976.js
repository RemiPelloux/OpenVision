let r = require("./module-4393.js"), n = require("./module-8102.js"), s = require("./module-3041.js"), h = require("./module-8056.js"), o = require(3106), a = module.exports = function(t) {
    if (this._options = t, t.deflateChunkSize = t.deflateChunkSize || 32768, t.deflateLevel = null != t.deflateLevel ? t.deflateLevel : 9, t.deflateStrategy = null != t.deflateStrategy ? t.deflateStrategy : 3, t.inputHasAlpha = null == t.inputHasAlpha || t.inputHasAlpha, t.deflateFactory = t.deflateFactory || o.createDeflate, t.bitDepth = t.bitDepth || 8, t.colorType = "number" == typeof t.colorType ? t.colorType : r.COLORTYPE_COLOR_ALPHA, t.inputColorType = "number" == typeof t.inputColorType ? t.inputColorType : r.COLORTYPE_COLOR_ALPHA, -1 === [
        r.COLORTYPE_GRAYSCALE,
        r.COLORTYPE_COLOR,
        r.COLORTYPE_COLOR_ALPHA,
        r.COLORTYPE_ALPHA
    ].indexOf(t.colorType)) throw new Error("option color type:" + t.colorType + " is not supported at present");
    if (-1 === [
        r.COLORTYPE_GRAYSCALE,
        r.COLORTYPE_COLOR,
        r.COLORTYPE_COLOR_ALPHA,
        r.COLORTYPE_ALPHA
    ].indexOf(t.inputColorType)) throw new Error("option input color type:" + t.inputColorType + " is not supported at present");
    if (8 !== t.bitDepth && 16 !== t.bitDepth) throw new Error("option bit depth:" + t.bitDepth + " is not supported at present");
};
a.prototype.getDeflateOptions = function() {
    return {
        chunkSize: this._options.deflateChunkSize,
        level: this._options.deflateLevel,
        strategy: this._options.deflateStrategy
    };
}, a.prototype.createDeflate = function() {
    return this._options.deflateFactory(this.getDeflateOptions());
}, a.prototype.filterData = function(t, e, i) {
    let n = s(t, e, i, this._options), o = r.COLORTYPE_TO_BPP_MAP[this._options.colorType];
    return h(n, e, i, this._options, o);
}, a.prototype._packChunk = function(t, e) {
    let i = e ? e.length : 0, r = Buffer.alloc(i + 12);
    return r.writeUInt32BE(i, 0), r.writeUInt32BE(t, 4), e && e.copy(r, 8), r.writeInt32BE(n.crc32(r.slice(4, r.length - 4)), r.length - 4), r;
}, a.prototype.packGAMA = function(t) {
    let e = Buffer.alloc(4);
    return e.writeUInt32BE(Math.floor(t * r.GAMMA_DIVISION), 0), this._packChunk(r.TYPE_gAMA, e);
}, a.prototype.packIHDR = function(t, e) {
    let i = Buffer.alloc(13);
    return i.writeUInt32BE(t, 0), i.writeUInt32BE(e, 4), i[8] = this._options.bitDepth, i[9] = this._options.colorType, i[10] = 0, i[11] = 0, i[12] = 0, this._packChunk(r.TYPE_IHDR, i);
}, a.prototype.packIDAT = function(t) {
    return this._packChunk(r.TYPE_IDAT, t);
}, a.prototype.packIEND = function() {
    return this._packChunk(r.TYPE_IEND, null);
};
