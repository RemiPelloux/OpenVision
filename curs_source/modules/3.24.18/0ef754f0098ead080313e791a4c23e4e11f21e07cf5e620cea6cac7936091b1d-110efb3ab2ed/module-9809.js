"use strict";
const t = require("./module-1637.js"), { uid: s, states: o } = require("./module-5440.js"), { kReadyState: r, kSentClose: i, kByteParser: l, kReceivedClose: d } = require("./module-7696.js"), { fireEvent: m, failWebsocketConnection: c } = require("./module-4321.js"), { CloseEvent: p } = require("./module-2740.js"), { makeRequest: A } = require("./module-2239.js"), { fetching: u } = require("./module-3406.js"), { Headers: g } = require("./module-2932.js"), { getGlobalDispatcher: T } = require("./module-7362.js"), { kHeadersList: h } = require("./module-8832.js"), k = {};
let _;
k.open = t.channel("undici:websocket:open"), k.close = t.channel("undici:websocket:close"), k.socketError = t.channel("undici:websocket:socket_error");
try {
    _ = require("./module-6982.js");
} catch  {}
function E(e) {
    this.ws[l].write(e) || this.pause();
}
function f() {
    const { ws: e } = this, a = e[i] && e[d];
    let n = 1005, t = "";
    const s = e[l].closingInfo;
    s ? (n = s.code ?? 1005, t = s.reason) : e[i] || (n = 1006), e[r] = o.CLOSED, m("close", e, p, {
        wasClean: a,
        code: n,
        reason: t
    }), k.close.hasSubscribers && k.close.publish({
        websocket: e,
        code: n,
        reason: t
    });
}
function C(e) {
    const { ws: a } = this;
    a[r] = o.CLOSING, k.socketError.hasSubscribers && k.socketError.publish(e), this.destroy();
}
module.exports = {
    establishWebSocketConnection: function(e, a, n, t, o) {
        const r = e;
        r.protocol = "ws:" === e.protocol ? "http:" : "https:";
        const i = A({
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
            const e = new g(o.headers)[h];
            i.headersList = e;
        }
        const l = _.randomBytes(16).toString("base64");
        i.headersList.append("sec-websocket-key", l), i.headersList.append("sec-websocket-version", "13");
        for (const e of a)i.headersList.append("sec-websocket-protocol", e);
        return u({
            request: i,
            useParallelQueue: !0,
            dispatcher: o.dispatcher ?? T(),
            processResponse (e) {
                if ("error" === e.type || 101 !== e.status) return void c(n, "Received network error or non-101 status code.");
                if (0 !== a.length && !e.headersList.get("Sec-WebSocket-Protocol")) return void c(n, "Server did not respond with sent protocols.");
                if ("websocket" !== e.headersList.get("Upgrade")?.toLowerCase()) return void c(n, 'Server did not set Upgrade header to "websocket".');
                if ("upgrade" !== e.headersList.get("Connection")?.toLowerCase()) return void c(n, 'Server did not set Connection header to "upgrade".');
                if (e.headersList.get("Sec-WebSocket-Accept") !== _.createHash("sha1").update(l + s).digest("base64")) return void c(n, "Incorrect hash received in Sec-WebSocket-Accept header.");
                const o = e.headersList.get("Sec-WebSocket-Extensions");
                if (null !== o && "" !== o) return void c(n, "Received different permessage-deflate than the one set.");
                const r = e.headersList.get("Sec-WebSocket-Protocol");
                null === r || r === i.headersList.get("Sec-WebSocket-Protocol") ? (e.socket.on("data", E), e.socket.on("close", f), e.socket.on("error", C), k.open.hasSubscribers && k.open.publish({
                    address: e.socket.address(),
                    protocol: r,
                    extensions: o
                }), t(e)) : c(n, "Protocol was not set in the opening handshake.");
            }
        });
    }
};
