"use strict";
const { kReadyState: r, kController: s, kResponse: o, kBinaryType: n, kWebSocketURL: i } = require("./module-47489.js"), { states: a, opcodes: Q } = require("./module-30229.js"), { ErrorEvent: g, createFastMessageEvent: E } = require("./module-63315.js"), { isUtf8: B } = require(4573), { collectASequenceOfCodePointsFast: c, removeHTTPWhitespace: I } = require("./module-52603.js");
function C(A, e, t = (A, e)=>new Event(A, e), r = {}) {
    const s = t(A, r);
    e.dispatchEvent(s);
}
function h(A, e) {
    const { [s]: t, [o]: r } = A;
    t.abort(), r?.socket && !r.socket.destroyed && r.socket.destroy(), e && C("error", A, (A, e)=>new g(A, e), {
        error: new Error(e),
        message: e
    });
}
function l(A) {
    return A === Q.CLOSE || A === Q.PING || A === Q.PONG;
}
function u(A) {
    return A === Q.CONTINUATION;
}
function d(A) {
    return A === Q.TEXT || A === Q.BINARY;
}
const f = "string" == typeof process.versions.icu, w = f ? new TextDecoder("utf-8", {
    fatal: !0
}) : void 0, y = f ? w.decode.bind(w) : function(A) {
    if (B(A)) return A.toString("utf-8");
    throw new TypeError("Invalid utf-8 received.");
};
module.exports = {
    isConnecting: function(A) {
        return A[r] === a.CONNECTING;
    },
    isEstablished: function(A) {
        return A[r] === a.OPEN;
    },
    isClosing: function(A) {
        return A[r] === a.CLOSING;
    },
    isClosed: function(A) {
        return A[r] === a.CLOSED;
    },
    fireEvent: C,
    isValidSubprotocol: function(A) {
        if (0 === A.length) return !1;
        for(let e = 0; e < A.length; ++e){
            const t = A.charCodeAt(e);
            if (t < 33 || t > 126 || 34 === t || 40 === t || 41 === t || 44 === t || 47 === t || 58 === t || 59 === t || 60 === t || 61 === t || 62 === t || 63 === t || 64 === t || 91 === t || 92 === t || 93 === t || 123 === t || 125 === t) return !1;
        }
        return !0;
    },
    isValidStatusCode: function(A) {
        return A >= 1e3 && A < 1015 ? 1004 !== A && 1005 !== A && 1006 !== A : A >= 3e3 && A <= 4999;
    },
    failWebsocketConnection: h,
    websocketMessageReceived: function(A, e, t) {
        if (A[r] !== a.OPEN) return;
        let s;
        if (e === Q.TEXT) try {
            s = y(t);
        } catch  {
            return void h(A, "Received invalid UTF-8 in text frame.");
        }
        else e === Q.BINARY && (s = "blob" === A[n] ? new Blob([
            t
        ]) : function(A) {
            if (A.byteLength === A.buffer.byteLength) return A.buffer;
            return A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength);
        }(t));
        C("message", A, E, {
            origin: A[i].origin,
            data: s
        });
    },
    utf8Decode: y,
    isControlFrame: l,
    isContinuationFrame: u,
    isTextBinaryFrame: d,
    isValidOpcode: function(A) {
        return d(A) || u(A) || l(A);
    },
    parseExtensions: function(A) {
        const e = {
            position: 0
        }, t = new Map;
        for(; e.position < A.length;){
            const r = c(";", A, e), [s, o = ""] = r.split("=");
            t.set(I(s, !0, !1), I(o, !1, !0)), e.position++;
        }
        return t;
    },
    isValidClientWindowBits: function(A) {
        if (0 === A.length) return !1;
        for(let e = 0; e < A.length; e++){
            const t = A.charCodeAt(e);
            if (t < 48 || t > 57) return !1;
        }
        const e = Number.parseInt(A, 10);
        return e >= 8 && e <= 15;
    }
};
