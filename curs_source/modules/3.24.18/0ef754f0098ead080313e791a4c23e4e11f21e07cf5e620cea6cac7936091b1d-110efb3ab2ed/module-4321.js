"use strict";
const { kReadyState: t, kController: s, kResponse: o, kBinaryType: r, kWebSocketURL: i } = require("./module-7696.js"), { states: l, opcodes: d } = require("./module-5440.js"), { MessageEvent: m, ErrorEvent: c } = require("./module-2740.js");
function p(e, a, n = Event, t) {
    const s = new n(e, t);
    a.dispatchEvent(s);
}
function A(e, a) {
    const { [s]: n, [o]: t } = e;
    n.abort(), t?.socket && !t.socket.destroyed && t.socket.destroy(), a && p("error", e, c, {
        error: new Error(a)
    });
}
module.exports = {
    isEstablished: function(e) {
        return e[t] === l.OPEN;
    },
    isClosing: function(e) {
        return e[t] === l.CLOSING;
    },
    isClosed: function(e) {
        return e[t] === l.CLOSED;
    },
    fireEvent: p,
    isValidSubprotocol: function(e) {
        if (0 === e.length) return !1;
        for (const a of e){
            const e = a.charCodeAt(0);
            if (e < 33 || e > 126 || "(" === a || ")" === a || "<" === a || ">" === a || "@" === a || "," === a || ";" === a || ":" === a || "\\" === a || '"' === a || "/" === a || "[" === a || "]" === a || "?" === a || "=" === a || "{" === a || "}" === a || 32 === e || 9 === e) return !1;
        }
        return !0;
    },
    isValidStatusCode: function(e) {
        return e >= 1e3 && e < 1015 ? 1004 !== e && 1005 !== e && 1006 !== e : e >= 3e3 && e <= 4999;
    },
    failWebsocketConnection: A,
    websocketMessageReceived: function(e, a, n) {
        if (e[t] !== l.OPEN) return;
        let s;
        if (a === d.TEXT) try {
            s = new TextDecoder("utf-8", {
                fatal: !0
            }).decode(n);
        } catch  {
            return void A(e, "Received invalid UTF-8 in text frame.");
        }
        else a === d.BINARY && (s = "blob" === e[r] ? new Blob([
            n
        ]) : new Uint8Array(n).buffer);
        p("message", e, m, {
            origin: e[i].origin,
            data: s
        });
    }
};
