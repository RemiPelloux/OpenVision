"use strict";
const a = require("./module-7075.js").Writable, s = require("./module-7975.js").inherits, o = require("./module-9512.js"), r = require("./module-2340.js"), i = require("./module-6879.js"), A = Buffer.from("-"), c = Buffer.from("\r\n"), l = function() {};
function d(e) {
    if (!(this instanceof d)) return new d(e);
    if (a.call(this, e), !e || !e.headerFirst && "string" != typeof e.boundary) throw new TypeError("Boundary required");
    "string" == typeof e.boundary ? this.setBoundary(e.boundary) : this._bparser = void 0, this._headerFirst = e.headerFirst, this._dashes = 0, this._parts = 0, this._finished = !1, this._realFinish = !1, this._isPreamble = !0, this._justMatched = !1, this._firstWrite = !0, this._inHeader = !0, this._part = void 0, this._cb = void 0, this._ignoreData = !1, this._partOpts = {
        highWaterMark: e.partHwm
    }, this._pause = !1;
    const n = this;
    this._hparser = new i(e), this._hparser.on("header", function(e) {
        n._inHeader = !1, n._part.emit("header", e);
    });
}
s(d, a), d.prototype.emit = function(e) {
    if ("finish" !== e || this._realFinish) a.prototype.emit.apply(this, arguments);
    else if (!this._finished) {
        const e = this;
        process.nextTick(function() {
            if (e.emit("error", new Error("Unexpected end of multipart data")), e._part && !e._ignoreData) {
                const n = e._isPreamble ? "Preamble" : "Part";
                return e._part.emit("error", new Error(n + " terminated early due to unexpected end of multipart data")), e._part.push(null), void process.nextTick(function() {
                    e._realFinish = !0, e.emit("finish"), e._realFinish = !1;
                });
            }
            e._realFinish = !0, e.emit("finish"), e._realFinish = !1;
        });
    }
}, d.prototype._write = function(e, n, t) {
    if (!this._hparser && !this._bparser) return t();
    if (this._headerFirst && this._isPreamble) {
        this._part || (this._part = new r(this._partOpts), 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : this._ignore());
        const n = this._hparser.push(e);
        if (this._inHeader || void 0 === n || !(n < e.length)) return t();
        e = e.slice(n);
    }
    this._firstWrite && (this._bparser.push(c), this._firstWrite = !1), this._bparser.push(e), this._pause ? this._cb = t : t();
}, d.prototype.reset = function() {
    this._part = void 0, this._bparser = void 0, this._hparser = void 0;
}, d.prototype.setBoundary = function(e) {
    const n = this;
    this._bparser = new o("\r\n--" + e), this._bparser.on("info", function(e, t, a, s) {
        n._oninfo(e, t, a, s);
    });
}, d.prototype._ignore = function() {
    this._part && !this._ignoreData && (this._ignoreData = !0, this._part.on("error", l), this._part.resume());
}, d.prototype._oninfo = function(e, n, t, a) {
    let s;
    const o = this;
    let i, c = 0, l = !0;
    if (!this._part && this._justMatched && n) {
        for(; this._dashes < 2 && t + c < a;){
            if (45 !== n[t + c]) {
                this._dashes && (s = A), this._dashes = 0;
                break;
            }
            ++c, ++this._dashes;
        }
        if (2 === this._dashes && (t + c < a && 0 !== this.listenerCount("trailer") && this.emit("trailer", n.slice(t + c, a)), this.reset(), this._finished = !0, 0 === o._parts && (o._realFinish = !0, o.emit("finish"), o._realFinish = !1)), this._dashes) return;
    }
    this._justMatched && (this._justMatched = !1), this._part || (this._part = new r(this._partOpts), this._part._read = function(e) {
        o._unpause();
    }, this._isPreamble && 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : !0 !== this._isPreamble && 0 !== this.listenerCount("part") ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = !0)), n && t < a && !this._ignoreData && (this._isPreamble || !this._inHeader ? (s && (l = this._part.push(s)), l = this._part.push(n.slice(t, a)), l || (this._pause = !0)) : !this._isPreamble && this._inHeader && (s && this._hparser.push(s), i = this._hparser.push(n.slice(t, a)), !this._inHeader && void 0 !== i && i < a && this._oninfo(!1, n, t + i, a))), e && (this._hparser.reset(), this._isPreamble ? this._isPreamble = !1 : t !== a && (++this._parts, this._part.on("end", function() {
        0 === --o._parts && (o._finished ? (o._realFinish = !0, o.emit("finish"), o._realFinish = !1) : o._unpause());
    })), this._part.push(null), this._part = void 0, this._ignoreData = !1, this._justMatched = !0, this._dashes = 0);
}, d.prototype._unpause = function() {
    if (this._pause && (this._pause = !1, this._cb)) {
        const e = this._cb;
        this._cb = void 0, e();
    }
}, module.exports = d;
