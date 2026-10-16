var n = require("./module-86552.js"), s = require("./module-57696.js"), o = require("./module-37784.js"), i = require("./module-83173.js"), a = require("./module-11445.js");
function c() {
    var e = this;
    this.reset = function() {
        this._mDone = !1, this._mTotalChars = 0, this._mFreqChars = 0;
    }, this.feed = function(e, t) {
        if (2 == t) var r = this.getOrder(e);
        else r = -1;
        r >= 0 && (this._mTotalChars++, r < this._mTableSize && 512 > this._mCharToFreqOrder[r] && this._mFreqChars++);
    }, this.getConfidence = function() {
        if (this._mTotalChars <= 0 || this._mFreqChars <= 3) return .01;
        if (this._mTotalChars != this._mFreqChars) {
            var e = this._mFreqChars / ((this._mTotalChars - this._mFreqChars) * this._mTypicalDistributionRatio);
            if (e < .99) return e;
        }
        return .99;
    }, this.gotEnoughData = function() {
        return this._mTotalChars > 1024;
    }, this.getOrder = function(e) {
        return -1;
    }, e._mCharToFreqOrder = null, e._mTableSize = null, e._mTypicalDistributionRatio = null, e.reset();
}
function l() {
    c.apply(this);
    var e = this;
    this.getOrder = function(e) {
        return e.charCodeAt(0) >= 196 ? 94 * (e.charCodeAt(0) - 196) + e.charCodeAt(1) - 161 : -1;
    }, e._mCharToFreqOrder = s.EUCTWCharToFreqOrder, e._mTableSize = s.EUCTW_TABLE_SIZE, e._mTypicalDistributionRatio = s.EUCTW_TYPICAL_DISTRIBUTION_RATIO;
}
function u() {
    c.apply(this);
    var e = this;
    this.getOrder = function(e) {
        return e.charCodeAt(0) >= 176 ? 94 * (e.charCodeAt(0) - 176) + e.charCodeAt(1) - 161 : -1;
    }, e._mCharToFreqOrder = o.EUCKRCharToFreqOrder, e._mTableSize = o.EUCKR_TABLE_SIZE, e._mTypicalDistributionRatio = o.EUCKR_TYPICAL_DISTRIBUTION_RATIO;
}
function d() {
    c.apply(this);
    var e = this;
    this.getOrder = function(e) {
        return e.charCodeAt(0) >= 176 && e.charCodeAt(1) >= 161 ? 94 * (e.charCodeAt(0) - 176) + e.charCodeAt(1) - 161 : -1;
    }, e._mCharToFreqOrder = i.GB2312CharToFreqOrder, e._mTableSize = i.GB2312_TABLE_SIZE, e._mTypicalDistributionRatio = i.GB2312_TYPICAL_DISTRIBUTION_RATIO;
}
function p() {
    c.apply(this);
    var e = this;
    this.getOrder = function(e) {
        return e.charCodeAt(0) >= 164 ? e.charCodeAt(1) >= 161 ? 157 * (e.charCodeAt(0) - 164) + e.charCodeAt(1) - 161 + 63 : 157 * (e.charCodeAt(0) - 164) + e.charCodeAt(1) - 64 : -1;
    }, e._mCharToFreqOrder = a.Big5CharToFreqOrder, e._mTableSize = a.BIG5_TABLE_SIZE, e._mTypicalDistributionRatio = a.BIG5_TYPICAL_DISTRIBUTION_RATIO;
}
function m() {
    c.apply(this);
    var e = this;
    this.getOrder = function(e) {
        if (e.charCodeAt(0) >= 129 && e.charCodeAt(0) <= 159) var t = 188 * (e.charCodeAt(0) - 129);
        else {
            if (!(e.charCodeAt(0) >= 224 && e.charCodeAt(0) <= 239)) return -1;
            t = 188 * (e.charCodeAt(0) - 224 + 31);
        }
        return t += e.charCodeAt(1) - 64, (e.charCodeAt(1) < 64 || 127 === e.charCodeAt(1) || e.charCodeAt(1) > 252) && (t = -1), t;
    }, e._mCharToFreqOrder = n.JISCharToFreqOrder, e._mTableSize = n.JIS_TABLE_SIZE, e._mTypicalDistributionRatio = n.JIS_TYPICAL_DISTRIBUTION_RATIO;
}
function h() {
    c.apply(this);
    var e = this;
    this.getOrder = function(e) {
        return e[0] >= " " ? 94 * (e.charCodeAt(0) - 161) + e.charCodeAt(1) - 161 : -1;
    }, e._mCharToFreqOrder = n.JISCharToFreqOrder, e._mTableSize = n.JIS_TABLE_SIZE, e._mTypicalDistributionRatio = n.JIS_TYPICAL_DISTRIBUTION_RATIO;
}
l.prototype = new c, exports.R6 = l, u.prototype = new c, exports.dk = u, d.prototype = new c, exports.qc = d, p.prototype = new c, exports.SG = p, m.prototype = new c, exports.EZ = m, h.prototype = new c, exports.q7 = h;
