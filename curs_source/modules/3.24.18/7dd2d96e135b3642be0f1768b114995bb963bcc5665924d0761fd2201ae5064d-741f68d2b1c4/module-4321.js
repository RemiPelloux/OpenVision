"use strict";
const { kReadyState: a, kController: s, kResponse: o, kBinaryType: r, kWebSocketURL: i } = require("./module-7696.js"), { states: A, opcodes: c } = require("./module-5440.js"), { MessageEvent: l, ErrorEvent: d } = require("./module-2740.js");
function m(e, n, t = Event, a) {
    const s = new t(e, a);
    n.dispatchEvent(s);
}
function u(e, n) {
    const { [s]: t, [o]: a } = e;
    t.abort(), a?.socket && !a.socket.destroyed && a.socket.destroy(), n && m("error", e, d, {
        error: new Error(n)
    });
}
module.exports = {
    isEstablished: function(e) {
        return e[a] === A.OPEN;
    },
    isClosing: function(e) {
        return e[a] === A.CLOSING;
    },
    isClosed: function(e) {
        return e[a] === A.CLOSED;
    },
    fireEvent: m,
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
    failWebsocketConnection: u,
    websocketMessageReceived: function(e, n, t) {
        if (e[a] !== A.OPEN) return;
        let s;
        if (n === c.TEXT) try {
            s = new TextDecoder("utf-8", {
                fatal: !0
            }).decode(t);
        } catch  {
            return void u(e, "Received invalid UTF-8 in text frame.");
        }
        else n === c.BINARY && (s = "blob" === e[r] ? new Blob([
            t
        ]) : new Uint8Array(t).buffer);
        m("message", e, l, {
            origin: e[i].origin,
            data: s
        });
    }
};
