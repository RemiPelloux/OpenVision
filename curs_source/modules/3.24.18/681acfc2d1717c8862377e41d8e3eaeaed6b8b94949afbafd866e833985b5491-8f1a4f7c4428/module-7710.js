"use strict";
const n = require("./module-7075.js").Writable, r = require("./module-7975.js").inherits, o = require("./module-9512.js"), s = require("./module-2340.js"), i = require("./module-6879.js"), a = Buffer.from("-"), c = Buffer.from("\r\n"), l = function() {};
function u(e) {
    if (!(this instanceof u)) return new u(e);
    if (n.call(this, e), !e || !e.headerFirst && "string" != typeof e.boundary) throw new TypeError("Boundary required");
    "string" == typeof e.boundary ? this.setBoundary(e.boundary) : this._bparser = void 0, this._headerFirst = e.headerFirst, this._dashes = 0, this._parts = 0, this._finished = !1, this._realFinish = !1, this._isPreamble = !0, this._justMatched = !1, this._firstWrite = !0, this._inHeader = !0, this._part = void 0, this._cb = void 0, this._ignoreData = !1, this._partOpts = {
        highWaterMark: e.partHwm
    }, this._pause = !1;
    const t = this;
    this._hparser = new i(e), this._hparser.on("header", function(e) {
        t._inHeader = !1, t._part.emit("header", e);
    });
}
r(u, n), u.prototype.emit = function(e) {
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
}, u.prototype._write = function(e, t, A) {
    if (!this._hparser && !this._bparser) return A();
    if (this._headerFirst && this._isPreamble) {
        this._part || (this._part = new s(this._partOpts), 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : this._ignore());
        const t = this._hparser.push(e);
        if (this._inHeader || void 0 === t || !(t < e.length)) return A();
        e = e.slice(t);
    }
    this._firstWrite && (this._bparser.push(c), this._firstWrite = !1), this._bparser.push(e), this._pause ? this._cb = A : A();
}, u.prototype.reset = function() {
    this._part = void 0, this._bparser = void 0, this._hparser = void 0;
}, u.prototype.setBoundary = function(e) {
    const t = this;
    this._bparser = new o("\r\n--" + e), this._bparser.on("info", function(e, A, n, r) {
        t._oninfo(e, A, n, r);
    });
}, u.prototype._ignore = function() {
    this._part && !this._ignoreData && (this._ignoreData = !0, this._part.on("error", l), this._part.resume());
}, u.prototype._oninfo = function(e, t, A, n) {
    let r;
    const o = this;
    let i, c = 0, l = !0;
    if (!this._part && this._justMatched && t) {
        for(; this._dashes < 2 && A + c < n;){
            if (45 !== t[A + c]) {
                this._dashes && (r = a), this._dashes = 0;
                break;
            }
            ++c, ++this._dashes;
        }
        if (2 === this._dashes && (A + c < n && 0 !== this.listenerCount("trailer") && this.emit("trailer", t.slice(A + c, n)), this.reset(), this._finished = !0, 0 === o._parts && (o._realFinish = !0, o.emit("finish"), o._realFinish = !1)), this._dashes) return;
    }
    this._justMatched && (this._justMatched = !1), this._part || (this._part = new s(this._partOpts), this._part._read = function(e) {
        o._unpause();
    }, this._isPreamble && 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : !0 !== this._isPreamble && 0 !== this.listenerCount("part") ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = !0)), t && A < n && !this._ignoreData && (this._isPreamble || !this._inHeader ? (r && (l = this._part.push(r)), l = this._part.push(t.slice(A, n)), l || (this._pause = !0)) : !this._isPreamble && this._inHeader && (r && this._hparser.push(r), i = this._hparser.push(t.slice(A, n)), !this._inHeader && void 0 !== i && i < n && this._oninfo(!1, t, A + i, n))), e && (this._hparser.reset(), this._isPreamble ? this._isPreamble = !1 : A !== n && (++this._parts, this._part.on("end", function() {
        0 === --o._parts && (o._finished ? (o._realFinish = !0, o.emit("finish"), o._realFinish = !1) : o._unpause());
    })), this._part.push(null), this._part = void 0, this._ignoreData = !1, this._justMatched = !0, this._dashes = 0);
}, u.prototype._unpause = function() {
    if (this._pause && (this._pause = !1, this._cb)) {
        const e = this._cb;
        this._cb = void 0, e();
    }
}, module.exports = u;
