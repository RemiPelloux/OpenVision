"use strict";
const { kReadyState: n, kController: s, kResponse: o, kBinaryType: i, kWebSocketURL: a } = require("./module-96140.js"), { states: c, opcodes: l } = require("./module-15948.js"), { MessageEvent: u, ErrorEvent: d } = require("./module-31448.js");
function p(e, t, r = Event, n) {
    const s = new r(e, n);
    t.dispatchEvent(s);
}
function m(e, t) {
    const { [s]: r, [o]: n } = e;
    r.abort(), n?.socket && !n.socket.destroyed && n.socket.destroy(), t && p("error", e, d, {
        error: new Error(t)
    });
}
module.exports = {
    isEstablished: function(e) {
        return e[n] === c.OPEN;
    },
    isClosing: function(e) {
        return e[n] === c.CLOSING;
    },
    isClosed: function(e) {
        return e[n] === c.CLOSED;
    },
    fireEvent: p,
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
    failWebsocketConnection: m,
    websocketMessageReceived: function(e, t, r) {
        if (e[n] !== c.OPEN) return;
        let s;
        if (t === l.TEXT) try {
            s = new TextDecoder("utf-8", {
                fatal: !0
            }).decode(r);
        } catch  {
            return void m(e, "Received invalid UTF-8 in text frame.");
        }
        else t === l.BINARY && (s = "blob" === e[i] ? new Blob([
            r
        ]) : new Uint8Array(r).buffer);
        p("message", e, u, {
            origin: e[a].origin,
            data: s
        });
    }
};
