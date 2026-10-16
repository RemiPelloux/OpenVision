"use strict";
const { kReadyState: n, kController: r, kResponse: o, kBinaryType: s, kWebSocketURL: a } = require("./module-7696.js"), { states: i, opcodes: c } = require("./module-5440.js"), { MessageEvent: l, ErrorEvent: g } = require("./module-2740.js");
function E(e, A, t = Event, n) {
    const r = new t(e, n);
    A.dispatchEvent(r);
}
function u(e, A) {
    const { [r]: t, [o]: n } = e;
    t.abort(), n?.socket && !n.socket.destroyed && n.socket.destroy(), A && E("error", e, g, {
        error: new Error(A)
    });
}
module.exports = {
    isEstablished: function(e) {
        return e[n] === i.OPEN;
    },
    isClosing: function(e) {
        return e[n] === i.CLOSING;
    },
    isClosed: function(e) {
        return e[n] === i.CLOSED;
    },
    fireEvent: E,
    isValidSubprotocol: function(e) {
        if (0 === e.length) return !1;
        for (const A of e){
            const e = A.charCodeAt(0);
            if (e < 33 || e > 126 || "(" === A || ")" === A || "<" === A || ">" === A || "@" === A || "," === A || ";" === A || ":" === A || "\\" === A || '"' === A || "/" === A || "[" === A || "]" === A || "?" === A || "=" === A || "{" === A || "}" === A || 32 === e || 9 === e) return !1;
        }
        return !0;
    },
    isValidStatusCode: function(e) {
        return e >= 1e3 && e < 1015 ? 1004 !== e && 1005 !== e && 1006 !== e : e >= 3e3 && e <= 4999;
    },
    failWebsocketConnection: u,
    websocketMessageReceived: function(e, A, t) {
        if (e[n] !== i.OPEN) return;
        let r;
        if (A === c.TEXT) try {
            r = new TextDecoder("utf-8", {
                fatal: !0
            }).decode(t);
        } catch  {
            return void u(e, "Received invalid UTF-8 in text frame.");
        }
        else A === c.BINARY && (r = "blob" === e[s] ? new Blob([
            t
        ]) : new Uint8Array(t).buffer);
        E("message", e, l, {
            origin: e[a].origin,
            data: r
        });
    }
};
