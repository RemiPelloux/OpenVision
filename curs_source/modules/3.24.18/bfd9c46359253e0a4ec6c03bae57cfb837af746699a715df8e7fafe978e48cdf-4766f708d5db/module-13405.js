"use strict";
require("./module-49038.js");
const { Duplex: n } = require("./module-2203.js");
function s(e) {
    e.emit("close");
}
function o() {
    !this.destroyed && this._writableState.finished && this.destroy();
}
function i(e) {
    this.removeListener("error", i), this.destroy(), 0 === this.listenerCount("error") && this.emit("error", e);
}
module.exports = function(e, t) {
    let r = !0;
    const a = new n({
        ...t,
        autoDestroy: !1,
        emitClose: !1,
        objectMode: !1,
        writableObjectMode: !1
    });
    return e.on("message", function(t, r) {
        const n = !r && a._readableState.objectMode ? t.toString() : t;
        a.push(n) || e.pause();
    }), e.once("error", function(e) {
        a.destroyed || (r = !1, a.destroy(e));
    }), e.once("close", function() {
        a.destroyed || a.push(null);
    }), a._destroy = function(t, n) {
        if (e.readyState === e.CLOSED) return n(t), void process.nextTick(s, a);
        let o = !1;
        e.once("error", function(e) {
            o = !0, n(e);
        }), e.once("close", function() {
            o || n(t), process.nextTick(s, a);
        }), r && e.terminate();
    }, a._final = function(t) {
        e.readyState !== e.CONNECTING ? null !== e._socket && (e._socket._writableState.finished ? (t(), a._readableState.endEmitted && a.destroy()) : (e._socket.once("finish", function() {
            t();
        }), e.close())) : e.once("open", function() {
            a._final(t);
        });
    }, a._read = function() {
        e.isPaused && e.resume();
    }, a._write = function(t, r, n) {
        e.readyState !== e.CONNECTING ? e.send(t, n) : e.once("open", function() {
            a._write(t, r, n);
        });
    }, a.on("end", o), a.on("error", i), a;
};
