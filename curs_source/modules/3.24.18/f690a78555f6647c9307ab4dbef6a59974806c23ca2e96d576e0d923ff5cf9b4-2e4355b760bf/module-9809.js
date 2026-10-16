"use strict";
const n = require("./module-1637.js"), { uid: r, states: o } = require("./module-5440.js"), { kReadyState: s, kSentClose: a, kByteParser: i, kReceivedClose: c } = require("./module-7696.js"), { fireEvent: l, failWebsocketConnection: g } = require("./module-4321.js"), { CloseEvent: E } = require("./module-2740.js"), { makeRequest: u } = require("./module-2239.js"), { fetching: d } = require("./module-3406.js"), { Headers: I } = require("./module-2932.js"), { getGlobalDispatcher: h } = require("./module-7362.js"), { kHeadersList: Q } = require("./module-8832.js"), m = {};
let C;
m.open = n.channel("undici:websocket:open"), m.close = n.channel("undici:websocket:close"), m.socketError = n.channel("undici:websocket:socket_error");
try {
    C = require("./module-6982.js");
} catch  {}
function B(e) {
    this.ws[i].write(e) || this.pause();
}
function p() {
    const { ws: e } = this, A = e[a] && e[c];
    let t = 1005, n = "";
    const r = e[i].closingInfo;
    r ? (t = r.code ?? 1005, n = r.reason) : e[a] || (t = 1006), e[s] = o.CLOSED, l("close", e, E, {
        wasClean: A,
        code: t,
        reason: n
    }), m.close.hasSubscribers && m.close.publish({
        websocket: e,
        code: t,
        reason: n
    });
}
function f(e) {
    const { ws: A } = this;
    A[s] = o.CLOSING, m.socketError.hasSubscribers && m.socketError.publish(e), this.destroy();
}
module.exports = {
    establishWebSocketConnection: function(e, A, t, n, o) {
        const s = e;
        s.protocol = "ws:" === e.protocol ? "http:" : "https:";
        const a = u({
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
            const e = new I(o.headers)[Q];
            a.headersList = e;
        }
        const i = C.randomBytes(16).toString("base64");
        a.headersList.append("sec-websocket-key", i), a.headersList.append("sec-websocket-version", "13");
        for (const e of A)a.headersList.append("sec-websocket-protocol", e);
        return d({
            request: a,
            useParallelQueue: !0,
            dispatcher: o.dispatcher ?? h(),
            processResponse (e) {
                if ("error" === e.type || 101 !== e.status) return void g(t, "Received network error or non-101 status code.");
                if (0 !== A.length && !e.headersList.get("Sec-WebSocket-Protocol")) return void g(t, "Server did not respond with sent protocols.");
                if ("websocket" !== e.headersList.get("Upgrade")?.toLowerCase()) return void g(t, 'Server did not set Upgrade header to "websocket".');
                if ("upgrade" !== e.headersList.get("Connection")?.toLowerCase()) return void g(t, 'Server did not set Connection header to "upgrade".');
                if (e.headersList.get("Sec-WebSocket-Accept") !== C.createHash("sha1").update(i + r).digest("base64")) return void g(t, "Incorrect hash received in Sec-WebSocket-Accept header.");
                const o = e.headersList.get("Sec-WebSocket-Extensions");
                if (null !== o && "" !== o) return void g(t, "Received different permessage-deflate than the one set.");
                const s = e.headersList.get("Sec-WebSocket-Protocol");
                null === s || s === a.headersList.get("Sec-WebSocket-Protocol") ? (e.socket.on("data", B), e.socket.on("close", p), e.socket.on("error", f), m.open.hasSubscribers && m.open.publish({
                    address: e.socket.address(),
                    protocol: s,
                    extensions: o
                }), n(e)) : g(t, "Protocol was not set in the opening handshake.");
            }
        });
    }
};
