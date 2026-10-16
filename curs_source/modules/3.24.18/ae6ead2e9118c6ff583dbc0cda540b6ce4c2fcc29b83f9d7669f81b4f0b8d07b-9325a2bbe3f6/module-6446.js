let r = require("./module-8401.js"), n = require("./module-2707.js");
function s(t, e, i) {
    let r = t * e;
    return 8 !== i && (r = Math.ceil(r / (8 / i))), r;
}
let h = module.exports = function(t, e) {
    let i = t.width, n = t.height, h = t.interlace, o = t.bpp, a = t.depth;
    if (this.read = e.read, this.write = e.write, this.complete = e.complete, this._imageIndex = 0, this._images = [], h) {
        let t = r.getImagePasses(i, n);
        for(let e = 0; e < t.length; e++)this._images.push({
            byteWidth: s(t[e].width, o, a),
            height: t[e].height,
            lineIndex: 0
        });
    } else this._images.push({
        byteWidth: s(i, o, a),
        height: n,
        lineIndex: 0
    });
    this._xComparison = 8 === a ? o : 16 === a ? 2 * o : 1;
};
h.prototype.start = function() {
    this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this));
}, h.prototype._unFilterType1 = function(t, e, i) {
    let r = this._xComparison, n = r - 1;
    for(let s = 0; s < i; s++){
        let i = t[1 + s], h = s > n ? e[s - r] : 0;
        e[s] = i + h;
    }
}, h.prototype._unFilterType2 = function(t, e, i) {
    let r = this._lastLine;
    for(let n = 0; n < i; n++){
        let i = t[1 + n], s = r ? r[n] : 0;
        e[n] = i + s;
    }
}, h.prototype._unFilterType3 = function(t, e, i) {
    let r = this._xComparison, n = r - 1, s = this._lastLine;
    for(let h = 0; h < i; h++){
        let i = t[1 + h], o = s ? s[h] : 0, a = h > n ? e[h - r] : 0, l = Math.floor((a + o) / 2);
        e[h] = i + l;
    }
}, h.prototype._unFilterType4 = function(t, e, i) {
    let r = this._xComparison, s = r - 1, h = this._lastLine;
    for(let o = 0; o < i; o++){
        let i = t[1 + o], a = h ? h[o] : 0, l = o > s ? e[o - r] : 0, f = o > s && h ? h[o - r] : 0, p = n(l, a, f);
        e[o] = i + p;
    }
}, h.prototype._reverseFilterLine = function(t) {
    let e, i = t[0], r = this._images[this._imageIndex], n = r.byteWidth;
    if (0 === i) e = t.slice(1, n + 1);
    else switch(e = Buffer.alloc(n), i){
        case 1:
            this._unFilterType1(t, e, n);
            break;
        case 2:
            this._unFilterType2(t, e, n);
            break;
        case 3:
            this._unFilterType3(t, e, n);
            break;
        case 4:
            this._unFilterType4(t, e, n);
            break;
        default:
            throw new Error("Unrecognised filter type - " + i);
    }
    this.write(e), r.lineIndex++, r.lineIndex >= r.height ? (this._lastLine = null, this._imageIndex++, r = this._images[this._imageIndex]) : this._lastLine = e, r ? this.read(r.byteWidth + 1, this._reverseFilterLine.bind(this)) : (this._lastLine = null, this.complete());
};
