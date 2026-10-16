"use strict";
const { kReadyState: n, kController: s, kResponse: i, kBinaryType: o, kWebSocketURL: a } = require("./module-6140.js"), { states: u, opcodes: c } = require("./module-5948.js"), { MessageEvent: l, ErrorEvent: m } = require("./module-1448.js");
function d(t, e, r = Event, n) {
    const s = new r(t, n);
    e.dispatchEvent(s);
}
function f(t, e) {
    const { [s]: r, [i]: n } = t;
    r.abort(), n?.socket && !n.socket.destroyed && n.socket.destroy(), e && d("error", t, m, {
        error: new Error(e)
    });
}
module.exports = {
    isEstablished: function(t) {
        return t[n] === u.OPEN;
    },
    isClosing: function(t) {
        return t[n] === u.CLOSING;
    },
    isClosed: function(t) {
        return t[n] === u.CLOSED;
    },
    fireEvent: d,
    isValidSubprotocol: function(t) {
        if (0 === t.length) return !1;
        for (const e of t){
            const t = e.charCodeAt(0);
            if (t < 33 || t > 126 || "(" === e || ")" === e || "<" === e || ">" === e || "@" === e || "," === e || ";" === e || ":" === e || "\\" === e || '"' === e || "/" === e || "[" === e || "]" === e || "?" === e || "=" === e || "{" === e || "}" === e || 32 === t || 9 === t) return !1;
        }
        return !0;
    },
    isValidStatusCode: function(t) {
        return t >= 1e3 && t < 1015 ? 1004 !== t && 1005 !== t && 1006 !== t : t >= 3e3 && t <= 4999;
    },
    failWebsocketConnection: f,
    websocketMessageReceived: function(t, e, r) {
        if (t[n] !== u.OPEN) return;
        let s;
        if (e === c.TEXT) try {
            s = new TextDecoder("utf-8", {
                fatal: !0
            }).decode(r);
        } catch  {
            return void f(t, "Received invalid UTF-8 in text frame.");
        }
        else e === c.BINARY && (s = "blob" === t[o] ? new Blob([
            r
        ]) : new Uint8Array(r).buffer);
        d("message", t, l, {
            origin: t[a].origin,
            data: s
        });
    }
};
