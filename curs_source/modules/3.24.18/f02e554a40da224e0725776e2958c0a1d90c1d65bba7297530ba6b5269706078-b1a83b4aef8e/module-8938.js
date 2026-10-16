"use strict";
const n = require("./module-7075.js").Writable, s = require("./module-7975.js").inherits, i = require("./module-8940.js"), o = require("./module-4568.js"), a = require("./module-3123.js"), u = Buffer.from("-"), c = Buffer.from("\r\n"), l = function() {};
function m(t) {
    if (!(this instanceof m)) return new m(t);
    if (n.call(this, t), !t || !t.headerFirst && "string" != typeof t.boundary) throw new TypeError("Boundary required");
    "string" == typeof t.boundary ? this.setBoundary(t.boundary) : this._bparser = void 0, this._headerFirst = t.headerFirst, this._dashes = 0, this._parts = 0, this._finished = !1, this._realFinish = !1, this._isPreamble = !0, this._justMatched = !1, this._firstWrite = !0, this._inHeader = !0, this._part = void 0, this._cb = void 0, this._ignoreData = !1, this._partOpts = {
        highWaterMark: t.partHwm
    }, this._pause = !1;
    const e = this;
    this._hparser = new a(t), this._hparser.on("header", function(t) {
        e._inHeader = !1, e._part.emit("header", t);
    });
}
s(m, n), m.prototype.emit = function(t) {
    if ("finish" !== t || this._realFinish) n.prototype.emit.apply(this, arguments);
    else if (!this._finished) {
        const t = this;
        process.nextTick(function() {
            if (t.emit("error", new Error("Unexpected end of multipart data")), t._part && !t._ignoreData) {
                const e = t._isPreamble ? "Preamble" : "Part";
                return t._part.emit("error", new Error(e + " terminated early due to unexpected end of multipart data")), t._part.push(null), void process.nextTick(function() {
                    t._realFinish = !0, t.emit("finish"), t._realFinish = !1;
                });
            }
            t._realFinish = !0, t.emit("finish"), t._realFinish = !1;
        });
    }
}, m.prototype._write = function(t, e, r) {
    if (!this._hparser && !this._bparser) return r();
    if (this._headerFirst && this._isPreamble) {
        this._part || (this._part = new o(this._partOpts), 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : this._ignore());
        const e = this._hparser.push(t);
        if (this._inHeader || void 0 === e || !(e < t.length)) return r();
        t = t.slice(e);
    }
    this._firstWrite && (this._bparser.push(c), this._firstWrite = !1), this._bparser.push(t), this._pause ? this._cb = r : r();
}, m.prototype.reset = function() {
    this._part = void 0, this._bparser = void 0, this._hparser = void 0;
}, m.prototype.setBoundary = function(t) {
    const e = this;
    this._bparser = new i("\r\n--" + t), this._bparser.on("info", function(t, r, n, s) {
        e._oninfo(t, r, n, s);
    });
}, m.prototype._ignore = function() {
    this._part && !this._ignoreData && (this._ignoreData = !0, this._part.on("error", l), this._part.resume());
}, m.prototype._oninfo = function(t, e, r, n) {
    let s;
    const i = this;
    let a, c = 0, l = !0;
    if (!this._part && this._justMatched && e) {
        for(; this._dashes < 2 && r + c < n;){
            if (45 !== e[r + c]) {
                this._dashes && (s = u), this._dashes = 0;
                break;
            }
            ++c, ++this._dashes;
        }
        if (2 === this._dashes && (r + c < n && 0 !== this.listenerCount("trailer") && this.emit("trailer", e.slice(r + c, n)), this.reset(), this._finished = !0, 0 === i._parts && (i._realFinish = !0, i.emit("finish"), i._realFinish = !1)), this._dashes) return;
    }
    this._justMatched && (this._justMatched = !1), this._part || (this._part = new o(this._partOpts), this._part._read = function(t) {
        i._unpause();
    }, this._isPreamble && 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : !0 !== this._isPreamble && 0 !== this.listenerCount("part") ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = !0)), e && r < n && !this._ignoreData && (this._isPreamble || !this._inHeader ? (s && (l = this._part.push(s)), l = this._part.push(e.slice(r, n)), l || (this._pause = !0)) : !this._isPreamble && this._inHeader && (s && this._hparser.push(s), a = this._hparser.push(e.slice(r, n)), !this._inHeader && void 0 !== a && a < n && this._oninfo(!1, e, r + a, n))), t && (this._hparser.reset(), this._isPreamble ? this._isPreamble = !1 : r !== n && (++this._parts, this._part.on("end", function() {
        0 === --i._parts && (i._finished ? (i._realFinish = !0, i.emit("finish"), i._realFinish = !1) : i._unpause());
    })), this._part.push(null), this._part = void 0, this._ignoreData = !1, this._justMatched = !0, this._dashes = 0);
}, m.prototype._unpause = function() {
    if (this._pause && (this._pause = !1, this._cb)) {
        const t = this._cb;
        this._cb = void 0, t();
    }
}, module.exports = m;
