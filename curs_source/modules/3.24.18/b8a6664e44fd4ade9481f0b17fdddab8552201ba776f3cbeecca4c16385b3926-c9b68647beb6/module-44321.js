"use strict";
const { kReadyState: r, kController: s, kResponse: o, kBinaryType: n, kWebSocketURL: i } = require("./module-35315.js"), { states: E, opcodes: Q } = require("./module-85440.js"), { MessageEvent: g, ErrorEvent: C } = require("./module-42740.js");
function B(A, e, t = Event, r) {
    const s = new t(A, r);
    e.dispatchEvent(s);
}
function a(A, e) {
    const { [s]: t, [o]: r } = A;
    t.abort(), r?.socket && !r.socket.destroyed && r.socket.destroy(), e && B("error", A, C, {
        error: new Error(e)
    });
}
module.exports = {
    isEstablished: function(A) {
        return A[r] === E.OPEN;
    },
    isClosing: function(A) {
        return A[r] === E.CLOSING;
    },
    isClosed: function(A) {
        return A[r] === E.CLOSED;
    },
    fireEvent: B,
    isValidSubprotocol: function(A) {
        if (0 === A.length) return !1;
        for (const e of A){
            const A = e.charCodeAt(0);
            if (A < 33 || A > 126 || "(" === e || ")" === e || "<" === e || ">" === e || "@" === e || "," === e || ";" === e || ":" === e || "\\" === e || '"' === e || "/" === e || "[" === e || "]" === e || "?" === e || "=" === e || "{" === e || "}" === e || 32 === A || 9 === A) return !1;
        }
        return !0;
    },
    isValidStatusCode: function(A) {
        return A >= 1e3 && A < 1015 ? 1004 !== A && 1005 !== A && 1006 !== A : A >= 3e3 && A <= 4999;
    },
    failWebsocketConnection: a,
    websocketMessageReceived: function(A, e, t) {
        if (A[r] !== E.OPEN) return;
        let s;
        if (e === Q.TEXT) try {
            s = new TextDecoder("utf-8", {
                fatal: !0
            }).decode(t);
        } catch  {
            return void a(A, "Received invalid UTF-8 in text frame.");
        }
        else e === Q.BINARY && (s = "blob" === A[n] ? new Blob([
            t
        ]) : new Uint8Array(t).buffer);
        B("message", A, g, {
            origin: A[i].origin,
            data: s
        });
    }
};
