"use strict";
const a = require("./module-1637.js"), { uid: s, states: o } = require("./module-5440.js"), { kReadyState: r, kSentClose: i, kByteParser: A, kReceivedClose: c } = require("./module-7696.js"), { fireEvent: l, failWebsocketConnection: d } = require("./module-4321.js"), { CloseEvent: m } = require("./module-2740.js"), { makeRequest: u } = require("./module-2239.js"), { fetching: g } = require("./module-3406.js"), { Headers: p } = require("./module-2932.js"), { getGlobalDispatcher: E } = require("./module-7362.js"), { kHeadersList: h } = require("./module-8832.js"), T = {};
let k;
T.open = a.channel("undici:websocket:open"), T.close = a.channel("undici:websocket:close"), T.socketError = a.channel("undici:websocket:socket_error");
try {
    k = require("./module-6982.js");
} catch  {}
function f(e) {
    this.ws[A].write(e) || this.pause();
}
function _() {
    const { ws: e } = this, n = e[i] && e[c];
    let t = 1005, a = "";
    const s = e[A].closingInfo;
    s ? (t = s.code ?? 1005, a = s.reason) : e[i] || (t = 1006), e[r] = o.CLOSED, l("close", e, m, {
        wasClean: n,
        code: t,
        reason: a
    }), T.close.hasSubscribers && T.close.publish({
        websocket: e,
        code: t,
        reason: a
    });
}
function I(e) {
    const { ws: n } = this;
    n[r] = o.CLOSING, T.socketError.hasSubscribers && T.socketError.publish(e), this.destroy();
}
module.exports = {
    establishWebSocketConnection: function(e, n, t, a, o) {
        const r = e;
        r.protocol = "ws:" === e.protocol ? "http:" : "https:";
        const i = u({
            urlList: [
                r
            ],
            serviceWorkers: "none",
            referrer: "no-referrer",
            mode: "websocket",
            credentials: "include",
            cache: "no-store",
            redirect: "error"
        });
        if (o.headers) {
            const e = new p(o.headers)[h];
            i.headersList = e;
        }
        const A = k.randomBytes(16).toString("base64");
        i.headersList.append("sec-websocket-key", A), i.headersList.append("sec-websocket-version", "13");
        for (const e of n)i.headersList.append("sec-websocket-protocol", e);
        return g({
            request: i,
            useParallelQueue: !0,
            dispatcher: o.dispatcher ?? E(),
            processResponse (e) {
                if ("error" === e.type || 101 !== e.status) return void d(t, "Received network error or non-101 status code.");
                if (0 !== n.length && !e.headersList.get("Sec-WebSocket-Protocol")) return void d(t, "Server did not respond with sent protocols.");
                if ("websocket" !== e.headersList.get("Upgrade")?.toLowerCase()) return void d(t, 'Server did not set Upgrade header to "websocket".');
                if ("upgrade" !== e.headersList.get("Connection")?.toLowerCase()) return void d(t, 'Server did not set Connection header to "upgrade".');
                if (e.headersList.get("Sec-WebSocket-Accept") !== k.createHash("sha1").update(A + s).digest("base64")) return void d(t, "Incorrect hash received in Sec-WebSocket-Accept header.");
                const o = e.headersList.get("Sec-WebSocket-Extensions");
                if (null !== o && "" !== o) return void d(t, "Received different permessage-deflate than the one set.");
                const r = e.headersList.get("Sec-WebSocket-Protocol");
                null === r || r === i.headersList.get("Sec-WebSocket-Protocol") ? (e.socket.on("data", f), e.socket.on("close", _), e.socket.on("error", I), T.open.hasSubscribers && T.open.publish({
                    address: e.socket.address(),
                    protocol: r,
                    extensions: o
                }), a(e)) : d(t, "Protocol was not set in the opening handshake.");
            }
        });
    }
};
