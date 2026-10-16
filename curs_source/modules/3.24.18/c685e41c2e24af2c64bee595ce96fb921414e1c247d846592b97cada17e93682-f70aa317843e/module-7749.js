let e = module.exports = function(t) {
    this._buffer = t, this._reads = [];
};
e.prototype.read = function(t, e) {
    this._reads.push({
        length: Math.abs(t),
        allowLess: t < 0,
        func: e
    });
}, e.prototype.process = function() {
    for(; this._reads.length > 0 && this._buffer.length;){
        let t = this._reads[0];
        if (!this._buffer.length || !(this._buffer.length >= t.length || t.allowLess)) break;
        {
            this._reads.shift();
            let e = this._buffer;
            this._buffer = e.slice(t.length), t.func.call(this, e.slice(0, t.length));
        }
    }
    if (this._reads.length > 0) throw new Error("There are some read requests waitng on finished stream");
    if (this._buffer.length > 0) throw new Error("unrecognised content at end of stream");
};
