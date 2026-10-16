"use strict";
const n = require("./module-31637.js"), { uid: s, states: o } = require("./module-15948.js"), { kReadyState: i, kSentClose: a, kByteParser: c, kReceivedClose: l } = require("./module-96140.js"), { fireEvent: u, failWebsocketConnection: d } = require("./module-18149.js"), { CloseEvent: p } = require("./module-31448.js"), { makeRequest: m } = require("./module-30547.js"), { fetching: h } = require("./module-93914.js"), { Headers: f } = require("./module-72848.js"), { getGlobalDispatcher: g } = require("./module-17582.js"), { kHeadersList: y } = require("./module-15532.js"), w = {};
let v;
w.open = n.channel("undici:websocket:open"), w.close = n.channel("undici:websocket:close"), w.socketError = n.channel("undici:websocket:socket_error");
try {
    v = require("./module-76982.js");
} catch  {}
function _(e) {
    this.ws[c].write(e) || this.pause();
}
function A() {
    const { ws: e } = this, t = e[a] && e[l];
    let r = 1005, n = "";
    const s = e[c].closingInfo;
    s ? (r = s.code ?? 1005, n = s.reason) : e[a] || (r = 1006), e[i] = o.CLOSED, u("close", e, p, {
        wasClean: t,
        code: r,
        reason: n
    }), w.close.hasSubscribers && w.close.publish({
        websocket: e,
        code: r,
        reason: n
    });
}
function S(e) {
    const { ws: t } = this;
    t[i] = o.CLOSING, w.socketError.hasSubscribers && w.socketError.publish(e), this.destroy();
}
module.exports = {
    establishWebSocketConnection: function(e, t, r, n, o) {
        const i = e;
        i.protocol = "ws:" === e.protocol ? "http:" : "https:";
        const a = m({
            urlList: [
                i
            ],
            serviceWorkers: "none",
            referrer: "no-referrer",
            mode: "websocket",
            credentials: "include",
            cache: "no-store",
            redirect: "error"
        });
        if (o.headers) {
            const e = new f(o.headers)[y];
            a.headersList = e;
        }
        const c = v.randomBytes(16).toString("base64");
        a.headersList.append("sec-websocket-key", c), a.headersList.append("sec-websocket-version", "13");
        for (const e of t)a.headersList.append("sec-websocket-protocol", e);
        return h({
            request: a,
            useParallelQueue: !0,
            dispatcher: o.dispatcher ?? g(),
            processResponse (e) {
                if ("error" === e.type || 101 !== e.status) return void d(r, "Received network error or non-101 status code.");
                if (0 !== t.length && !e.headersList.get("Sec-WebSocket-Protocol")) return void d(r, "Server did not respond with sent protocols.");
                if ("websocket" !== e.headersList.get("Upgrade")?.toLowerCase()) return void d(r, 'Server did not set Upgrade header to "websocket".');
                if ("upgrade" !== e.headersList.get("Connection")?.toLowerCase()) return void d(r, 'Server did not set Connection header to "upgrade".');
                if (e.headersList.get("Sec-WebSocket-Accept") !== v.createHash("sha1").update(c + s).digest("base64")) return void d(r, "Incorrect hash received in Sec-WebSocket-Accept header.");
                const o = e.headersList.get("Sec-WebSocket-Extensions");
                if (null !== o && "" !== o) return void d(r, "Received different permessage-deflate than the one set.");
                const i = e.headersList.get("Sec-WebSocket-Protocol");
                null === i || i === a.headersList.get("Sec-WebSocket-Protocol") ? (e.socket.on("data", _), e.socket.on("close", A), e.socket.on("error", S), w.open.hasSubscribers && w.open.publish({
                    address: e.socket.address(),
                    protocol: i,
                    extensions: o
                }), n(e)) : d(r, "Protocol was not set in the opening handshake.");
            }
        });
    }
};
