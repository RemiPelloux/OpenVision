"use strict";
var n = require("./module-30129.js").Buffer;
module.exports = function(e) {
    var t = e.Transform;
    function r(e, r) {
        this.conv = e, (r = r || {}).decodeStrings = !1, t.call(this, r);
    }
    function o(e, r) {
        this.conv = e, (r = r || {}).encoding = this.encoding = "utf8", t.call(this, r);
    }
    return r.prototype = Object.create(t.prototype, {
        constructor: {
            value: r
        }
    }), r.prototype._transform = function(e, t, r) {
        if ("string" != typeof e) return r(new Error("Iconv encoding stream needs strings as its input."));
        try {
            var n = this.conv.write(e);
            n && n.length && this.push(n), r();
        } catch (e) {
            r(e);
        }
    }, r.prototype._flush = function(e) {
        try {
            var t = this.conv.end();
            t && t.length && this.push(t), e();
        } catch (t) {
            e(t);
        }
    }, r.prototype.collect = function(e) {
        var t = [];
        return this.on("error", e), this.on("data", function(e) {
            t.push(e);
        }), this.on("end", function() {
            e(null, n.concat(t));
        }), this;
    }, o.prototype = Object.create(t.prototype, {
        constructor: {
            value: o
        }
    }), o.prototype._transform = function(e, t, r) {
        if (!(n.isBuffer(e) || e instanceof Uint8Array)) return r(new Error("Iconv decoding stream needs buffers as its input."));
        try {
            var o = this.conv.write(e);
            o && o.length && this.push(o, this.encoding), r();
        } catch (e) {
            r(e);
        }
    }, o.prototype._flush = function(e) {
        try {
            var t = this.conv.end();
            t && t.length && this.push(t, this.encoding), e();
        } catch (t) {
            e(t);
        }
    }, o.prototype.collect = function(e) {
        var t = "";
        return this.on("error", e), this.on("data", function(e) {
            t += e;
        }), this.on("end", function() {
            e(null, t);
        }), this;
    }, {
        IconvLiteEncoderStream: r,
        IconvLiteDecoderStream: o
    };
};
