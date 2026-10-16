"use strict";
const n = require("./module-7912.js"), r = require("./module-8720.js"), o = require("./module-2276.js");
function s(e, t) {
    this.name = e, this.body = t, this.decoders = {}, this.encoders = {};
}
exports.define = function(e, t) {
    return new s(e, t);
}, s.prototype._createNamed = function(e) {
    const t = this.name;
    function A(e) {
        this._initNamed(e, t);
    }
    return o(A, e), A.prototype._initNamed = function(t, A) {
        e.call(this, t, A);
    }, new A(this);
}, s.prototype._getDecoder = function(e) {
    return e = e || "der", this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(r[e])), this.decoders[e];
}, s.prototype.decode = function(e, t, A) {
    return this._getDecoder(t).decode(e, A);
}, s.prototype._getEncoder = function(e) {
    return e = e || "der", this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(n[e])), this.encoders[e];
}, s.prototype.encode = function(e, t, A) {
    return this._getEncoder(t).encode(e, A);
};
