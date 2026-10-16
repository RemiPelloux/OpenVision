let r = require(9023), n = require(2203), s = require("./module-9568.js"), h = require("./module-8409.js"), o = require("./module-3407.js"), a = exports.O = function(t) {
    n.call(this), t = t || {}, this.width = 0 | t.width, this.height = 0 | t.height, this.data = this.width > 0 && this.height > 0 ? Buffer.alloc(4 * this.width * this.height) : null, t.fill && this.data && this.data.fill(0), this.gamma = 0, this.readable = this.writable = !0, this._parser = new s(t), this._parser.on("error", this.emit.bind(this, "error")), this._parser.on("close", this._handleClose.bind(this)), this._parser.on("metadata", this._metadata.bind(this)), this._parser.on("gamma", this._gamma.bind(this)), this._parser.on("parsed", (function(t) {
        this.data = t, this.emit("parsed", t);
    }).bind(this)), this._packer = new h(t), this._packer.on("data", this.emit.bind(this, "data")), this._packer.on("end", this.emit.bind(this, "end")), this._parser.on("close", this._handleClose.bind(this)), this._packer.on("error", this.emit.bind(this, "error"));
};
r.inherits(a, n), a.sync = o, a.prototype.pack = function() {
    return this.data && this.data.length ? (process.nextTick((function() {
        this._packer.pack(this.data, this.width, this.height, this.gamma);
    }).bind(this)), this) : (this.emit("error", "No data provided"), this);
}, a.prototype.parse = function(t, e) {
    if (e) {
        let t, i;
        t = (function(t) {
            this.removeListener("error", i), this.data = t, e(null, this);
        }).bind(this), i = (function(i) {
            this.removeListener("parsed", t), e(i, null);
        }).bind(this), this.once("parsed", t), this.once("error", i);
    }
    return this.end(t), this;
}, a.prototype.write = function(t) {
    return this._parser.write(t), !0;
}, a.prototype.end = function(t) {
    this._parser.end(t);
}, a.prototype._metadata = function(t) {
    this.width = t.width, this.height = t.height, this.emit("metadata", t);
}, a.prototype._gamma = function(t) {
    this.gamma = t;
}, a.prototype._handleClose = function() {
    this._parser.writable || this._packer.readable || this.emit("close");
}, a.bitblt = function(t, e, i, r, n, s, h, o) {
    if (r |= 0, n |= 0, s |= 0, h |= 0, o |= 0, (i |= 0) > t.width || r > t.height || i + n > t.width || r + s > t.height) throw new Error("bitblt reading outside image");
    if (h > e.width || o > e.height || h + n > e.width || o + s > e.height) throw new Error("bitblt writing outside image");
    for(let a = 0; a < s; a++)t.data.copy(e.data, (o + a) * e.width + h << 2, (r + a) * t.width + i << 2, (r + a) * t.width + i + n << 2);
}, a.prototype.bitblt = function(t, e, i, r, n, s, h) {
    return a.bitblt(this, t, e, i, r, n, s, h), this;
}, a.adjustGamma = function(t) {
    if (t.gamma) {
        for(let e = 0; e < t.height; e++)for(let i = 0; i < t.width; i++){
            let r = t.width * e + i << 2;
            for(let e = 0; e < 3; e++){
                let i = t.data[r + e] / 255;
                i = Math.pow(i, 1 / 2.2 / t.gamma), t.data[r + e] = Math.round(255 * i);
            }
        }
        t.gamma = 0;
    }
}, a.prototype.adjustGamma = function() {
    a.adjustGamma(this);
};
