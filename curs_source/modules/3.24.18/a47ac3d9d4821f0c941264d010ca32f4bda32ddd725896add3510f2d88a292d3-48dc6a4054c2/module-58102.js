let e = [];
!function() {
    for(let t = 0; t < 256; t++){
        let i = t;
        for(let t = 0; t < 8; t++)1 & i ? i = 3988292384 ^ i >>> 1 : i >>>= 1;
        e[t] = i;
    }
}();
let i = module.exports = function() {
    this._crc = -1;
};
i.prototype.write = function(t) {
    for(let i = 0; i < t.length; i++)this._crc = e[255 & (this._crc ^ t[i])] ^ this._crc >>> 8;
    return !0;
}, i.prototype.crc32 = function() {
    return -1 ^ this._crc;
}, i.crc32 = function(t) {
    let i = -1;
    for(let r = 0; r < t.length; r++)i = e[255 & (i ^ t[r])] ^ i >>> 8;
    return -1 ^ i;
};
