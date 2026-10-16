"use strict";
const n = require("./module-7075.js").Writable, r = require("./module-7975.js").inherits, o = require("./module-9512.js"), s = require("./module-2340.js"), a = require("./module-6879.js"), i = Buffer.from("-"), c = Buffer.from("\r\n"), l = function() {};
function g(e) {
    if (!(this instanceof g)) return new g(e);
    if (n.call(this, e), !e || !e.headerFirst && "string" != typeof e.boundary) throw new TypeError("Boundary required");
    "string" == typeof e.boundary ? this.setBoundary(e.boundary) : this._bparser = void 0, this._headerFirst = e.headerFirst, this._dashes = 0, this._parts = 0, this._finished = !1, this._realFinish = !1, this._isPreamble = !0, this._justMatched = !1, this._firstWrite = !0, this._inHeader = !0, this._part = void 0, this._cb = void 0, this._ignoreData = !1, this._partOpts = {
        highWaterMark: e.partHwm
    }, this._pause = !1;
    const A = this;
    this._hparser = new a(e), this._hparser.on("header", function(e) {
        A._inHeader = !1, A._part.emit("header", e);
    });
}
r(g, n), g.prototype.emit = function(e) {
    if ("finish" !== e || this._realFinish) n.prototype.emit.apply(this, arguments);
    else if (!this._finished) {
        const e = this;
        process.nextTick(function() {
            if (e.emit("error", new Error("Unexpected end of multipart data")), e._part && !e._ignoreData) {
                const A = e._isPreamble ? "Preamble" : "Part";
                return e._part.emit("error", new Error(A + " terminated early due to unexpected end of multipart data")), e._part.push(null), void process.nextTick(function() {
                    e._realFinish = !0, e.emit("finish"), e._realFinish = !1;
                });
            }
            e._realFinish = !0, e.emit("finish"), e._realFinish = !1;
        });
    }
}, g.prototype._write = function(e, A, t) {
    if (!this._hparser && !this._bparser) return t();
    if (this._headerFirst && this._isPreamble) {
        this._part || (this._part = new s(this._partOpts), 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : this._ignore());
        const A = this._hparser.push(e);
        if (this._inHeader || void 0 === A || !(A < e.length)) return t();
        e = e.slice(A);
    }
    this._firstWrite && (this._bparser.push(c), this._firstWrite = !1), this._bparser.push(e), this._pause ? this._cb = t : t();
}, g.prototype.reset = function() {
    this._part = void 0, this._bparser = void 0, this._hparser = void 0;
}, g.prototype.setBoundary = function(e) {
    const A = this;
    this._bparser = new o("\r\n--" + e), this._bparser.on("info", function(e, t, n, r) {
        A._oninfo(e, t, n, r);
    });
}, g.prototype._ignore = function() {
    this._part && !this._ignoreData && (this._ignoreData = !0, this._part.on("error", l), this._part.resume());
}, g.prototype._oninfo = function(e, A, t, n) {
    let r;
    const o = this;
    let a, c = 0, l = !0;
    if (!this._part && this._justMatched && A) {
        for(; this._dashes < 2 && t + c < n;){
            if (45 !== A[t + c]) {
                this._dashes && (r = i), this._dashes = 0;
                break;
            }
            ++c, ++this._dashes;
        }
        if (2 === this._dashes && (t + c < n && 0 !== this.listenerCount("trailer") && this.emit("trailer", A.slice(t + c, n)), this.reset(), this._finished = !0, 0 === o._parts && (o._realFinish = !0, o.emit("finish"), o._realFinish = !1)), this._dashes) return;
    }
    this._justMatched && (this._justMatched = !1), this._part || (this._part = new s(this._partOpts), this._part._read = function(e) {
        o._unpause();
    }, this._isPreamble && 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : !0 !== this._isPreamble && 0 !== this.listenerCount("part") ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = !0)), A && t < n && !this._ignoreData && (this._isPreamble || !this._inHeader ? (r && (l = this._part.push(r)), l = this._part.push(A.slice(t, n)), l || (this._pause = !0)) : !this._isPreamble && this._inHeader && (r && this._hparser.push(r), a = this._hparser.push(A.slice(t, n)), !this._inHeader && void 0 !== a && a < n && this._oninfo(!1, A, t + a, n))), e && (this._hparser.reset(), this._isPreamble ? this._isPreamble = !1 : t !== n && (++this._parts, this._part.on("end", function() {
        0 === --o._parts && (o._finished ? (o._realFinish = !0, o.emit("finish"), o._realFinish = !1) : o._unpause());
    })), this._part.push(null), this._part = void 0, this._ignoreData = !1, this._justMatched = !0, this._dashes = 0);
}, g.prototype._unpause = function() {
    if (this._pause && (this._pause = !1, this._cb)) {
        const e = this._cb;
        this._cb = void 0, e();
    }
}, module.exports = g;
