"use strict";
const { kReadyState: t, kController: s, kResponse: o, kBinaryType: r, kWebSocketURL: i } = require("./module-7696.js"), { states: A, opcodes: l } = require("./module-5440.js"), { MessageEvent: c, ErrorEvent: m } = require("./module-2740.js");
function d(e, n, a = Event, t) {
    const s = new a(e, t);
    n.dispatchEvent(s);
}
function g(e, n) {
    const { [s]: a, [o]: t } = e;
    a.abort(), t?.socket && !t.socket.destroyed && t.socket.destroy(), n && d("error", e, m, {
        error: new Error(n)
    });
}
module.exports = {
    isEstablished: function(e) {
        return e[t] === A.OPEN;
    },
    isClosing: function(e) {
        return e[t] === A.CLOSING;
    },
    isClosed: function(e) {
        return e[t] === A.CLOSED;
    },
    fireEvent: d,
    isValidSubprotocol: function(e) {
        if (0 === e.length) return !1;
        for (const n of e){
            const e = n.charCodeAt(0);
            if (e < 33 || e > 126 || "(" === n || ")" === n || "<" === n || ">" === n || "@" === n || "," === n || ";" === n || ":" === n || "\\" === n || '"' === n || "/" === n || "[" === n || "]" === n || "?" === n || "=" === n || "{" === n || "}" === n || 32 === e || 9 === e) return !1;
        }
        return !0;
    },
    isValidStatusCode: function(e) {
        return e >= 1e3 && e < 1015 ? 1004 !== e && 1005 !== e && 1006 !== e : e >= 3e3 && e <= 4999;
    },
    failWebsocketConnection: g,
    websocketMessageReceived: function(e, n, a) {
        if (e[t] !== A.OPEN) return;
        let s;
        if (n === l.TEXT) try {
            s = new TextDecoder("utf-8", {
                fatal: !0
            }).decode(a);
        } catch  {
            return void g(e, "Received invalid UTF-8 in text frame.");
        }
        else n === l.BINARY && (s = "blob" === e[r] ? new Blob([
            a
        ]) : new Uint8Array(a).buffer);
        d("message", e, c, {
            origin: e[i].origin,
            data: s
        });
    }
};
