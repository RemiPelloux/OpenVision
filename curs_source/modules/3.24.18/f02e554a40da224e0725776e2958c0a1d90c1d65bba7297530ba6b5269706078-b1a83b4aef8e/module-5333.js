"use strict";
const n = require("./module-1637.js"), { uid: s, states: i } = require("./module-5948.js"), { kReadyState: o, kSentClose: a, kByteParser: u, kReceivedClose: c } = require("./module-6140.js"), { fireEvent: l, failWebsocketConnection: m } = require("./module-8149.js"), { CloseEvent: d } = require("./module-1448.js"), { makeRequest: f } = require("./module-547.js"), { fetching: p } = require("./module-3914.js"), { Headers: h } = require("./module-2848.js"), { getGlobalDispatcher: g } = require("./module-7582.js"), { kHeadersList: A } = require("./module-5532.js"), _ = {};
let y;
_.open = n.channel("undici:websocket:open"), _.close = n.channel("undici:websocket:close"), _.socketError = n.channel("undici:websocket:socket_error");
try {
    y = require("./module-6982.js");
} catch  {}
function w(t) {
    this.ws[u].write(t) || this.pause();
}
function S() {
    const { ws: t } = this, e = t[a] && t[c];
    let r = 1005, n = "";
    const s = t[u].closingInfo;
    s ? (r = s.code ?? 1005, n = s.reason) : t[a] || (r = 1006), t[o] = i.CLOSED, l("close", t, d, {
        wasClean: e,
        code: r,
        reason: n
    }), _.close.hasSubscribers && _.close.publish({
        websocket: t,
        code: r,
        reason: n
    });
}
function J(t) {
    const { ws: e } = this;
    e[o] = i.CLOSING, _.socketError.hasSubscribers && _.socketError.publish(t), this.destroy();
}
module.exports = {
    establishWebSocketConnection: function(t, e, r, n, i) {
        const o = t;
        o.protocol = "ws:" === t.protocol ? "http:" : "https:";
        const a = f({
            urlList: [
                o
            ],
            serviceWorkers: "none",
            referrer: "no-referrer",
            mode: "websocket",
            credentials: "include",
            cache: "no-store",
            redirect: "error"
        });
        if (i.headers) {
            const t = new h(i.headers)[A];
            a.headersList = t;
        }
        const u = y.randomBytes(16).toString("base64");
        a.headersList.append("sec-websocket-key", u), a.headersList.append("sec-websocket-version", "13");
        for (const t of e)a.headersList.append("sec-websocket-protocol", t);
        return p({
            request: a,
            useParallelQueue: !0,
            dispatcher: i.dispatcher ?? g(),
            processResponse (t) {
                if ("error" === t.type || 101 !== t.status) return void m(r, "Received network error or non-101 status code.");
                if (0 !== e.length && !t.headersList.get("Sec-WebSocket-Protocol")) return void m(r, "Server did not respond with sent protocols.");
                if ("websocket" !== t.headersList.get("Upgrade")?.toLowerCase()) return void m(r, 'Server did not set Upgrade header to "websocket".');
                if ("upgrade" !== t.headersList.get("Connection")?.toLowerCase()) return void m(r, 'Server did not set Connection header to "upgrade".');
                if (t.headersList.get("Sec-WebSocket-Accept") !== y.createHash("sha1").update(u + s).digest("base64")) return void m(r, "Incorrect hash received in Sec-WebSocket-Accept header.");
                const i = t.headersList.get("Sec-WebSocket-Extensions");
                if (null !== i && "" !== i) return void m(r, "Received different permessage-deflate than the one set.");
                const o = t.headersList.get("Sec-WebSocket-Protocol");
                null === o || o === a.headersList.get("Sec-WebSocket-Protocol") ? (t.socket.on("data", w), t.socket.on("close", S), t.socket.on("error", J), _.open.hasSubscribers && _.open.publish({
                    address: t.socket.address(),
                    protocol: o,
                    extensions: i
                }), n(t)) : m(r, "Protocol was not set in the opening handshake.");
            }
        });
    }
};
