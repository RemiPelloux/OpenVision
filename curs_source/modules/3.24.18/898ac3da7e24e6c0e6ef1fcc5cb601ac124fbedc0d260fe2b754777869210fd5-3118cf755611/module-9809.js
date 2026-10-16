"use strict";
const t = require("./module-1637.js"), { uid: s, states: o } = require("./module-5440.js"), { kReadyState: r, kSentClose: i, kByteParser: A, kReceivedClose: l } = require("./module-7696.js"), { fireEvent: c, failWebsocketConnection: m } = require("./module-4321.js"), { CloseEvent: d } = require("./module-2740.js"), { makeRequest: g } = require("./module-2239.js"), { fetching: u } = require("./module-3406.js"), { Headers: E } = require("./module-2932.js"), { getGlobalDispatcher: p } = require("./module-7362.js"), { kHeadersList: T } = require("./module-8832.js"), k = {};
let I;
k.open = t.channel("undici:websocket:open"), k.close = t.channel("undici:websocket:close"), k.socketError = t.channel("undici:websocket:socket_error");
try {
    I = require("./module-6982.js");
} catch  {}
function h(e) {
    this.ws[A].write(e) || this.pause();
}
function _() {
    const { ws: e } = this, n = e[i] && e[l];
    let a = 1005, t = "";
    const s = e[A].closingInfo;
    s ? (a = s.code ?? 1005, t = s.reason) : e[i] || (a = 1006), e[r] = o.CLOSED, c("close", e, d, {
        wasClean: n,
        code: a,
        reason: t
    }), k.close.hasSubscribers && k.close.publish({
        websocket: e,
        code: a,
        reason: t
    });
}
function C(e) {
    const { ws: n } = this;
    n[r] = o.CLOSING, k.socketError.hasSubscribers && k.socketError.publish(e), this.destroy();
}
module.exports = {
    establishWebSocketConnection: function(e, n, a, t, o) {
        const r = e;
        r.protocol = "ws:" === e.protocol ? "http:" : "https:";
        const i = g({
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
            const e = new E(o.headers)[T];
            i.headersList = e;
        }
        const A = I.randomBytes(16).toString("base64");
        i.headersList.append("sec-websocket-key", A), i.headersList.append("sec-websocket-version", "13");
        for (const e of n)i.headersList.append("sec-websocket-protocol", e);
        return u({
            request: i,
            useParallelQueue: !0,
            dispatcher: o.dispatcher ?? p(),
            processResponse (e) {
                if ("error" === e.type || 101 !== e.status) return void m(a, "Received network error or non-101 status code.");
                if (0 !== n.length && !e.headersList.get("Sec-WebSocket-Protocol")) return void m(a, "Server did not respond with sent protocols.");
                if ("websocket" !== e.headersList.get("Upgrade")?.toLowerCase()) return void m(a, 'Server did not set Upgrade header to "websocket".');
                if ("upgrade" !== e.headersList.get("Connection")?.toLowerCase()) return void m(a, 'Server did not set Connection header to "upgrade".');
                if (e.headersList.get("Sec-WebSocket-Accept") !== I.createHash("sha1").update(A + s).digest("base64")) return void m(a, "Incorrect hash received in Sec-WebSocket-Accept header.");
                const o = e.headersList.get("Sec-WebSocket-Extensions");
                if (null !== o && "" !== o) return void m(a, "Received different permessage-deflate than the one set.");
                const r = e.headersList.get("Sec-WebSocket-Protocol");
                null === r || r === i.headersList.get("Sec-WebSocket-Protocol") ? (e.socket.on("data", h), e.socket.on("close", _), e.socket.on("error", C), k.open.hasSubscribers && k.open.publish({
                    address: e.socket.address(),
                    protocol: r,
                    extensions: o
                }), t(e)) : m(a, "Protocol was not set in the opening handshake.");
            }
        });
    }
};
