"use strict";
const r = require(57075).Writable, s = require(57975).inherits, o = require("./module-89512.js"), n = require("./module-92340.js"), i = require("./module-26879.js"), E = Buffer.from("-"), Q = Buffer.from("\r\n"), g = function() {};
function C(A) {
    if (!(this instanceof C)) return new C(A);
    if (r.call(this, A), !A || !A.headerFirst && "string" != typeof A.boundary) throw new TypeError("Boundary required");
    "string" == typeof A.boundary ? this.setBoundary(A.boundary) : this._bparser = void 0, this._headerFirst = A.headerFirst, this._dashes = 0, this._parts = 0, this._finished = !1, this._realFinish = !1, this._isPreamble = !0, this._justMatched = !1, this._firstWrite = !0, this._inHeader = !0, this._part = void 0, this._cb = void 0, this._ignoreData = !1, this._partOpts = {
        highWaterMark: A.partHwm
    }, this._pause = !1;
    const e = this;
    this._hparser = new i(A), this._hparser.on("header", function(A) {
        e._inHeader = !1, e._part.emit("header", A);
    });
}
s(C, r), C.prototype.emit = function(A) {
    if ("finish" !== A || this._realFinish) r.prototype.emit.apply(this, arguments);
    else if (!this._finished) {
        const A = this;
        process.nextTick(function() {
            if (A.emit("error", new Error("Unexpected end of multipart data")), A._part && !A._ignoreData) {
                const e = A._isPreamble ? "Preamble" : "Part";
                return A._part.emit("error", new Error(e + " terminated early due to unexpected end of multipart data")), A._part.push(null), void process.nextTick(function() {
                    A._realFinish = !0, A.emit("finish"), A._realFinish = !1;
                });
            }
            A._realFinish = !0, A.emit("finish"), A._realFinish = !1;
        });
    }
}, C.prototype._write = function(A, e, t) {
    if (!this._hparser && !this._bparser) return t();
    if (this._headerFirst && this._isPreamble) {
        this._part || (this._part = new n(this._partOpts), 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : this._ignore());
        const e = this._hparser.push(A);
        if (this._inHeader || void 0 === e || !(e < A.length)) return t();
        A = A.slice(e);
    }
    this._firstWrite && (this._bparser.push(Q), this._firstWrite = !1), this._bparser.push(A), this._pause ? this._cb = t : t();
}, C.prototype.reset = function() {
    this._part = void 0, this._bparser = void 0, this._hparser = void 0;
}, C.prototype.setBoundary = function(A) {
    const e = this;
    this._bparser = new o("\r\n--" + A), this._bparser.on("info", function(A, t, r, s) {
        e._oninfo(A, t, r, s);
    });
}, C.prototype._ignore = function() {
    this._part && !this._ignoreData && (this._ignoreData = !0, this._part.on("error", g), this._part.resume());
}, C.prototype._oninfo = function(A, e, t, r) {
    let s;
    const o = this;
    let i, Q = 0, g = !0;
    if (!this._part && this._justMatched && e) {
        for(; this._dashes < 2 && t + Q < r;){
            if (45 !== e[t + Q]) {
                this._dashes && (s = E), this._dashes = 0;
                break;
            }
            ++Q, ++this._dashes;
        }
        if (2 === this._dashes && (t + Q < r && 0 !== this.listenerCount("trailer") && this.emit("trailer", e.slice(t + Q, r)), this.reset(), this._finished = !0, 0 === o._parts && (o._realFinish = !0, o.emit("finish"), o._realFinish = !1)), this._dashes) return;
    }
    this._justMatched && (this._justMatched = !1), this._part || (this._part = new n(this._partOpts), this._part._read = function(A) {
        o._unpause();
    }, this._isPreamble && 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : !0 !== this._isPreamble && 0 !== this.listenerCount("part") ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = !0)), e && t < r && !this._ignoreData && (this._isPreamble || !this._inHeader ? (s && (g = this._part.push(s)), g = this._part.push(e.slice(t, r)), g || (this._pause = !0)) : !this._isPreamble && this._inHeader && (s && this._hparser.push(s), i = this._hparser.push(e.slice(t, r)), !this._inHeader && void 0 !== i && i < r && this._oninfo(!1, e, t + i, r))), A && (this._hparser.reset(), this._isPreamble ? this._isPreamble = !1 : t !== r && (++this._parts, this._part.on("end", function() {
        0 === --o._parts && (o._finished ? (o._realFinish = !0, o.emit("finish"), o._realFinish = !1) : o._unpause());
    })), this._part.push(null), this._part = void 0, this._ignoreData = !1, this._justMatched = !0, this._dashes = 0);
}, C.prototype._unpause = function() {
    if (this._pause && (this._pause = !1, this._cb)) {
        const A = this._cb;
        this._cb = void 0, A();
    }
}, module.exports = C;
