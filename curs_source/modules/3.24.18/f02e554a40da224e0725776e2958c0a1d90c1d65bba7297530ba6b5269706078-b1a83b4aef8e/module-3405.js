"use strict";
require("./module-9038.js");
const { Duplex: n } = require("./module-2203.js");
function s(t) {
    t.emit("close");
}
function i() {
    !this.destroyed && this._writableState.finished && this.destroy();
}
function o(t) {
    this.removeListener("error", o), this.destroy(), 0 === this.listenerCount("error") && this.emit("error", t);
}
module.exports = function(t, e) {
    let r = !0;
    const a = new n({
        ...e,
        autoDestroy: !1,
        emitClose: !1,
        objectMode: !1,
        writableObjectMode: !1
    });
    return t.on("message", function(e, r) {
        const n = !r && a._readableState.objectMode ? e.toString() : e;
        a.push(n) || t.pause();
    }), t.once("error", function(t) {
        a.destroyed || (r = !1, a.destroy(t));
    }), t.once("close", function() {
        a.destroyed || a.push(null);
    }), a._destroy = function(e, n) {
        if (t.readyState === t.CLOSED) return n(e), void process.nextTick(s, a);
        let i = !1;
        t.once("error", function(t) {
            i = !0, n(t);
        }), t.once("close", function() {
            i || n(e), process.nextTick(s, a);
        }), r && t.terminate();
    }, a._final = function(e) {
        t.readyState !== t.CONNECTING ? null !== t._socket && (t._socket._writableState.finished ? (e(), a._readableState.endEmitted && a.destroy()) : (t._socket.once("finish", function() {
            e();
        }), t.close())) : t.once("open", function() {
            a._final(e);
        });
    }, a._read = function() {
        t.isPaused && t.resume();
    }, a._write = function(e, r, n) {
        t.readyState !== t.CONNECTING ? t.send(e, n) : t.once("open", function() {
            a._write(e, r, n);
        });
    }, a.on("end", i), a.on("error", o), a;
};
