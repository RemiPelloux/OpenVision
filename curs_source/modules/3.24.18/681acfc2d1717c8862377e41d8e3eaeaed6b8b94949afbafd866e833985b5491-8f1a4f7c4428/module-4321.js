"use strict";
const { kReadyState: n, kController: r, kResponse: o, kBinaryType: s, kWebSocketURL: i } = require("./module-7696.js"), { states: a, opcodes: c } = require("./module-5440.js"), { MessageEvent: l, ErrorEvent: u } = require("./module-2740.js");
function g(e, t, A = Event, n) {
    const r = new A(e, n);
    t.dispatchEvent(r);
}
function E(e, t) {
    const { [r]: A, [o]: n } = e;
    A.abort(), n?.socket && !n.socket.destroyed && n.socket.destroy(), t && g("error", e, u, {
        error: new Error(t)
    });
}
module.exports = {
    isEstablished: function(e) {
        return e[n] === a.OPEN;
    },
    isClosing: function(e) {
        return e[n] === a.CLOSING;
    },
    isClosed: function(e) {
        return e[n] === a.CLOSED;
    },
    fireEvent: g,
    isValidSubprotocol: function(e) {
        if (0 === e.length) return !1;
        for (const t of e){
            const e = t.charCodeAt(0);
            if (e < 33 || e > 126 || "(" === t || ")" === t || "<" === t || ">" === t || "@" === t || "," === t || ";" === t || ":" === t || "\\" === t || '"' === t || "/" === t || "[" === t || "]" === t || "?" === t || "=" === t || "{" === t || "}" === t || 32 === e || 9 === e) return !1;
        }
        return !0;
    },
    isValidStatusCode: function(e) {
        return e >= 1e3 && e < 1015 ? 1004 !== e && 1005 !== e && 1006 !== e : e >= 3e3 && e <= 4999;
    },
    failWebsocketConnection: E,
    websocketMessageReceived: function(e, t, A) {
        if (e[n] !== a.OPEN) return;
        let r;
        if (t === c.TEXT) try {
            r = new TextDecoder("utf-8", {
                fatal: !0
            }).decode(A);
        } catch  {
            return void E(e, "Received invalid UTF-8 in text frame.");
        }
        else t === c.BINARY && (r = "blob" === e[s] ? new Blob([
            A
        ]) : new Uint8Array(A).buffer);
        g("message", e, l, {
            origin: e[i].origin,
            data: r
        });
    }
};
