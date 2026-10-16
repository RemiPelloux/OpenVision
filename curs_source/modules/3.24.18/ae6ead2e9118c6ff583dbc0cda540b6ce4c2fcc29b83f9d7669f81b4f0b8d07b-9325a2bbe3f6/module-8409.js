let r = require(9023), n = require(2203), s = require("./module-4393.js"), h = require("./module-7976.js"), o = module.exports = function(t) {
    n.call(this);
    let e = t || {};
    this._packer = new h(e), this._deflate = this._packer.createDeflate(), this.readable = !0;
};
r.inherits(o, n), o.prototype.pack = function(t, e, i, r) {
    this.emit("data", Buffer.from(s.PNG_SIGNATURE)), this.emit("data", this._packer.packIHDR(e, i)), r && this.emit("data", this._packer.packGAMA(r));
    let n = this._packer.filterData(t, e, i);
    this._deflate.on("error", this.emit.bind(this, "error")), this._deflate.on("data", (function(t) {
        this.emit("data", this._packer.packIDAT(t));
    }).bind(this)), this._deflate.on("end", (function() {
        this.emit("data", this._packer.packIEND()), this.emit("end");
    }).bind(this)), this._deflate.end(n);
};
