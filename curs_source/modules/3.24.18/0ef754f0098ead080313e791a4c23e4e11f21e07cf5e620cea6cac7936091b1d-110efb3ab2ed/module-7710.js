"use strict";
const t = require("./module-7075.js").Writable, s = require("./module-7975.js").inherits, o = require("./module-9512.js"), r = require("./module-2340.js"), i = require("./module-6879.js"), l = Buffer.from("-"), d = Buffer.from("\r\n"), m = function() {};
function c(e) {
    if (!(this instanceof c)) return new c(e);
    if (t.call(this, e), !e || !e.headerFirst && "string" != typeof e.boundary) throw new TypeError("Boundary required");
    "string" == typeof e.boundary ? this.setBoundary(e.boundary) : this._bparser = void 0, this._headerFirst = e.headerFirst, this._dashes = 0, this._parts = 0, this._finished = !1, this._realFinish = !1, this._isPreamble = !0, this._justMatched = !1, this._firstWrite = !0, this._inHeader = !0, this._part = void 0, this._cb = void 0, this._ignoreData = !1, this._partOpts = {
        highWaterMark: e.partHwm
    }, this._pause = !1;
    const a = this;
    this._hparser = new i(e), this._hparser.on("header", function(e) {
        a._inHeader = !1, a._part.emit("header", e);
    });
}
s(c, t), c.prototype.emit = function(e) {
    if ("finish" !== e || this._realFinish) t.prototype.emit.apply(this, arguments);
    else if (!this._finished) {
        const e = this;
        process.nextTick(function() {
            if (e.emit("error", new Error("Unexpected end of multipart data")), e._part && !e._ignoreData) {
                const a = e._isPreamble ? "Preamble" : "Part";
                return e._part.emit("error", new Error(a + " terminated early due to unexpected end of multipart data")), e._part.push(null), void process.nextTick(function() {
                    e._realFinish = !0, e.emit("finish"), e._realFinish = !1;
                });
            }
            e._realFinish = !0, e.emit("finish"), e._realFinish = !1;
        });
    }
}, c.prototype._write = function(e, a, n) {
    if (!this._hparser && !this._bparser) return n();
    if (this._headerFirst && this._isPreamble) {
        this._part || (this._part = new r(this._partOpts), 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : this._ignore());
        const a = this._hparser.push(e);
        if (this._inHeader || void 0 === a || !(a < e.length)) return n();
        e = e.slice(a);
    }
    this._firstWrite && (this._bparser.push(d), this._firstWrite = !1), this._bparser.push(e), this._pause ? this._cb = n : n();
}, c.prototype.reset = function() {
    this._part = void 0, this._bparser = void 0, this._hparser = void 0;
}, c.prototype.setBoundary = function(e) {
    const a = this;
    this._bparser = new o("\r\n--" + e), this._bparser.on("info", function(e, n, t, s) {
        a._oninfo(e, n, t, s);
    });
}, c.prototype._ignore = function() {
    this._part && !this._ignoreData && (this._ignoreData = !0, this._part.on("error", m), this._part.resume());
}, c.prototype._oninfo = function(e, a, n, t) {
    let s;
    const o = this;
    let i, d = 0, m = !0;
    if (!this._part && this._justMatched && a) {
        for(; this._dashes < 2 && n + d < t;){
            if (45 !== a[n + d]) {
                this._dashes && (s = l), this._dashes = 0;
                break;
            }
            ++d, ++this._dashes;
        }
        if (2 === this._dashes && (n + d < t && 0 !== this.listenerCount("trailer") && this.emit("trailer", a.slice(n + d, t)), this.reset(), this._finished = !0, 0 === o._parts && (o._realFinish = !0, o.emit("finish"), o._realFinish = !1)), this._dashes) return;
    }
    this._justMatched && (this._justMatched = !1), this._part || (this._part = new r(this._partOpts), this._part._read = function(e) {
        o._unpause();
    }, this._isPreamble && 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : !0 !== this._isPreamble && 0 !== this.listenerCount("part") ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = !0)), a && n < t && !this._ignoreData && (this._isPreamble || !this._inHeader ? (s && (m = this._part.push(s)), m = this._part.push(a.slice(n, t)), m || (this._pause = !0)) : !this._isPreamble && this._inHeader && (s && this._hparser.push(s), i = this._hparser.push(a.slice(n, t)), !this._inHeader && void 0 !== i && i < t && this._oninfo(!1, a, n + i, t))), e && (this._hparser.reset(), this._isPreamble ? this._isPreamble = !1 : n !== t && (++this._parts, this._part.on("end", function() {
        0 === --o._parts && (o._finished ? (o._realFinish = !0, o.emit("finish"), o._realFinish = !1) : o._unpause());
    })), this._part.push(null), this._part = void 0, this._ignoreData = !1, this._justMatched = !0, this._dashes = 0);
}, c.prototype._unpause = function() {
    if (this._pause && (this._pause = !1, this._cb)) {
        const e = this._cb;
        this._cb = void 0, e();
    }
}, module.exports = c;
