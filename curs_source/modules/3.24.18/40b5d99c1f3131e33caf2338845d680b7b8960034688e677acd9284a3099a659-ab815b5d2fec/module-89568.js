let r = require(39023), n = require(43106), s = require("./module-79233.js"), h = require("./module-30795.js"), o = require("./module-61041.js"), a = require("./module-29626.js"), l = require("./module-99734.js"), f = module.exports = function(t) {
    s.call(this), this._parser = new o(t, {
        read: this.read.bind(this),
        error: this._handleError.bind(this),
        metadata: this._handleMetaData.bind(this),
        gamma: this.emit.bind(this, "gamma"),
        palette: this._handlePalette.bind(this),
        transColor: this._handleTransColor.bind(this),
        finished: this._finished.bind(this),
        inflateData: this._inflateData.bind(this),
        simpleTransparency: this._simpleTransparency.bind(this),
        headersFinished: this._headersFinished.bind(this)
    }), this._options = t, this.writable = !0, this._parser.start();
};
r.inherits(f, s), f.prototype._handleError = function(t) {
    this.emit("error", t), this.writable = !1, this.destroy(), this._inflate && this._inflate.destroy && this._inflate.destroy(), this._filter && (this._filter.destroy(), this._filter.on("error", function() {})), this.errord = !0;
}, f.prototype._inflateData = function(t) {
    if (!this._inflate) if (this._bitmapInfo.interlace) this._inflate = n.createInflate(), this._inflate.on("error", this.emit.bind(this, "error")), this._filter.on("complete", this._complete.bind(this)), this._inflate.pipe(this._filter);
    else {
        let t = (1 + (this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3)) * this._bitmapInfo.height, e = Math.max(t, n.Z_MIN_CHUNK);
        this._inflate = n.createInflate({
            chunkSize: e
        });
        let i = t, r = this.emit.bind(this, "error");
        this._inflate.on("error", function(t) {
            i && r(t);
        }), this._filter.on("complete", this._complete.bind(this));
        let s = this._filter.write.bind(this._filter);
        this._inflate.on("data", function(t) {
            i && (t.length > i && (t = t.slice(0, i)), i -= t.length, s(t));
        }), this._inflate.on("end", this._filter.end.bind(this._filter));
    }
    this._inflate.write(t);
}, f.prototype._handleMetaData = function(t) {
    this._metaData = t, this._bitmapInfo = Object.create(t), this._filter = new h(this._bitmapInfo);
}, f.prototype._handleTransColor = function(t) {
    this._bitmapInfo.transColor = t;
}, f.prototype._handlePalette = function(t) {
    this._bitmapInfo.palette = t;
}, f.prototype._simpleTransparency = function() {
    this._metaData.alpha = !0;
}, f.prototype._headersFinished = function() {
    this.emit("metadata", this._metaData);
}, f.prototype._finished = function() {
    this.errord || (this._inflate ? this._inflate.end() : this.emit("error", "No Inflate block"));
}, f.prototype._complete = function(t) {
    if (this.errord) return;
    let e;
    try {
        let i = a.dataToBitMap(t, this._bitmapInfo);
        e = l(i, this._bitmapInfo, this._options.skipRescale), i = null;
    } catch (t) {
        return void this._handleError(t);
    }
    this.emit("parsed", e);
};
