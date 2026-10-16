"use strict";
const n = require("./module-1637.js"), { uid: r, states: o } = require("./module-5440.js"), { kReadyState: s, kSentClose: i, kByteParser: a, kReceivedClose: c } = require("./module-7696.js"), { fireEvent: l, failWebsocketConnection: u } = require("./module-4321.js"), { CloseEvent: g } = require("./module-2740.js"), { makeRequest: E } = require("./module-2239.js"), { fetching: h } = require("./module-3406.js"), { Headers: d } = require("./module-2932.js"), { getGlobalDispatcher: I } = require("./module-7362.js"), { kHeadersList: B } = require("./module-8832.js"), Q = {};
let f;
Q.open = n.channel("undici:websocket:open"), Q.close = n.channel("undici:websocket:close"), Q.socketError = n.channel("undici:websocket:socket_error");
try {
    f = require("./module-6982.js");
} catch  {}
function C(e) {
    this.ws[a].write(e) || this.pause();
}
function p() {
    const { ws: e } = this, t = e[i] && e[c];
    let A = 1005, n = "";
    const r = e[a].closingInfo;
    r ? (A = r.code ?? 1005, n = r.reason) : e[i] || (A = 1006), e[s] = o.CLOSED, l("close", e, g, {
        wasClean: t,
        code: A,
        reason: n
    }), Q.close.hasSubscribers && Q.close.publish({
        websocket: e,
        code: A,
        reason: n
    });
}
function m(e) {
    const { ws: t } = this;
    t[s] = o.CLOSING, Q.socketError.hasSubscribers && Q.socketError.publish(e), this.destroy();
}
module.exports = {
    establishWebSocketConnection: function(e, t, A, n, o) {
        const s = e;
        s.protocol = "ws:" === e.protocol ? "http:" : "https:";
        const i = E({
            urlList: [
                s
            ],
            serviceWorkers: "none",
            referrer: "no-referrer",
            mode: "websocket",
            credentials: "include",
            cache: "no-store",
            redirect: "error"
        });
        if (o.headers) {
            const e = new d(o.headers)[B];
            i.headersList = e;
        }
        const a = f.randomBytes(16).toString("base64");
        i.headersList.append("sec-websocket-key", a), i.headersList.append("sec-websocket-version", "13");
        for (const e of t)i.headersList.append("sec-websocket-protocol", e);
        return h({
            request: i,
            useParallelQueue: !0,
            dispatcher: o.dispatcher ?? I(),
            processResponse (e) {
                if ("error" === e.type || 101 !== e.status) return void u(A, "Received network error or non-101 status code.");
                if (0 !== t.length && !e.headersList.get("Sec-WebSocket-Protocol")) return void u(A, "Server did not respond with sent protocols.");
                if ("websocket" !== e.headersList.get("Upgrade")?.toLowerCase()) return void u(A, 'Server did not set Upgrade header to "websocket".');
                if ("upgrade" !== e.headersList.get("Connection")?.toLowerCase()) return void u(A, 'Server did not set Connection header to "upgrade".');
                if (e.headersList.get("Sec-WebSocket-Accept") !== f.createHash("sha1").update(a + r).digest("base64")) return void u(A, "Incorrect hash received in Sec-WebSocket-Accept header.");
                const o = e.headersList.get("Sec-WebSocket-Extensions");
                if (null !== o && "" !== o) return void u(A, "Received different permessage-deflate than the one set.");
                const s = e.headersList.get("Sec-WebSocket-Protocol");
                null === s || s === i.headersList.get("Sec-WebSocket-Protocol") ? (e.socket.on("data", C), e.socket.on("close", p), e.socket.on("error", m), Q.open.hasSubscribers && Q.open.publish({
                    address: e.socket.address(),
                    protocol: s,
                    extensions: o
                }), n(e)) : u(A, "Protocol was not set in the opening handshake.");
            }
        });
    }
};
