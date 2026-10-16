"use strict";
const n = require("./module-57075.js").Writable, s = require("./module-57975.js").inherits, o = require("./module-88940.js"), i = require("./module-14568.js"), a = require("./module-83123.js"), c = Buffer.from("-"), l = Buffer.from("\r\n"), u = function() {};
function d(e) {
    if (!(this instanceof d)) return new d(e);
    if (n.call(this, e), !e || !e.headerFirst && "string" != typeof e.boundary) throw new TypeError("Boundary required");
    "string" == typeof e.boundary ? this.setBoundary(e.boundary) : this._bparser = void 0, this._headerFirst = e.headerFirst, this._dashes = 0, this._parts = 0, this._finished = !1, this._realFinish = !1, this._isPreamble = !0, this._justMatched = !1, this._firstWrite = !0, this._inHeader = !0, this._part = void 0, this._cb = void 0, this._ignoreData = !1, this._partOpts = {
        highWaterMark: e.partHwm
    }, this._pause = !1;
    const t = this;
    this._hparser = new a(e), this._hparser.on("header", function(e) {
        t._inHeader = !1, t._part.emit("header", e);
    });
}
s(d, n), d.prototype.emit = function(e) {
    if ("finish" !== e || this._realFinish) n.prototype.emit.apply(this, arguments);
    else if (!this._finished) {
        const e = this;
        process.nextTick(function() {
            if (e.emit("error", new Error("Unexpected end of multipart data")), e._part && !e._ignoreData) {
                const t = e._isPreamble ? "Preamble" : "Part";
                return e._part.emit("error", new Error(t + " terminated early due to unexpected end of multipart data")), e._part.push(null), void process.nextTick(function() {
                    e._realFinish = !0, e.emit("finish"), e._realFinish = !1;
                });
            }
            e._realFinish = !0, e.emit("finish"), e._realFinish = !1;
        });
    }
}, d.prototype._write = function(e, t, r) {
    if (!this._hparser && !this._bparser) return r();
    if (this._headerFirst && this._isPreamble) {
        this._part || (this._part = new i(this._partOpts), 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : this._ignore());
        const t = this._hparser.push(e);
        if (this._inHeader || void 0 === t || !(t < e.length)) return r();
        e = e.slice(t);
    }
    this._firstWrite && (this._bparser.push(l), this._firstWrite = !1), this._bparser.push(e), this._pause ? this._cb = r : r();
}, d.prototype.reset = function() {
    this._part = void 0, this._bparser = void 0, this._hparser = void 0;
}, d.prototype.setBoundary = function(e) {
    const t = this;
    this._bparser = new o("\r\n--" + e), this._bparser.on("info", function(e, r, n, s) {
        t._oninfo(e, r, n, s);
    });
}, d.prototype._ignore = function() {
    this._part && !this._ignoreData && (this._ignoreData = !0, this._part.on("error", u), this._part.resume());
}, d.prototype._oninfo = function(e, t, r, n) {
    let s;
    const o = this;
    let a, l = 0, u = !0;
    if (!this._part && this._justMatched && t) {
        for(; this._dashes < 2 && r + l < n;){
            if (45 !== t[r + l]) {
                this._dashes && (s = c), this._dashes = 0;
                break;
            }
            ++l, ++this._dashes;
        }
        if (2 === this._dashes && (r + l < n && 0 !== this.listenerCount("trailer") && this.emit("trailer", t.slice(r + l, n)), this.reset(), this._finished = !0, 0 === o._parts && (o._realFinish = !0, o.emit("finish"), o._realFinish = !1)), this._dashes) return;
    }
    this._justMatched && (this._justMatched = !1), this._part || (this._part = new i(this._partOpts), this._part._read = function(e) {
        o._unpause();
    }, this._isPreamble && 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : !0 !== this._isPreamble && 0 !== this.listenerCount("part") ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = !0)), t && r < n && !this._ignoreData && (this._isPreamble || !this._inHeader ? (s && (u = this._part.push(s)), u = this._part.push(t.slice(r, n)), u || (this._pause = !0)) : !this._isPreamble && this._inHeader && (s && this._hparser.push(s), a = this._hparser.push(t.slice(r, n)), !this._inHeader && void 0 !== a && a < n && this._oninfo(!1, t, r + a, n))), e && (this._hparser.reset(), this._isPreamble ? this._isPreamble = !1 : r !== n && (++this._parts, this._part.on("end", function() {
        0 === --o._parts && (o._finished ? (o._realFinish = !0, o.emit("finish"), o._realFinish = !1) : o._unpause());
    })), this._part.push(null), this._part = void 0, this._ignoreData = !1, this._justMatched = !0, this._dashes = 0);
}, d.prototype._unpause = function() {
    if (this._pause && (this._pause = !1, this._cb)) {
        const e = this._cb;
        this._cb = void 0, e();
    }
}, module.exports = d;
