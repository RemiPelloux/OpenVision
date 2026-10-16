"use strict";
const { uid: r, states: s, sentCloseFrameState: o, emptyBuffer: n, opcodes: i } = require("./module-30229.js"), { kReadyState: a, kSentClose: Q, kByteParser: g, kReceivedClose: E, kResponse: B } = require("./module-47489.js"), { fireEvent: c, failWebsocketConnection: I, isClosing: C, isClosed: h, isEstablished: l, parseExtensions: u } = require("./module-79946.js"), { channels: d } = require("./module-98565.js"), { CloseEvent: f } = require("./module-63315.js"), { makeRequest: w } = require("./module-78078.js"), { fetching: y } = require("./module-75319.js"), { Headers: D, getHeadersList: p } = require("./module-48969.js"), { getDecodeSplit: k } = require("./module-48215.js"), { WebsocketFrameSend: R } = require("./module-35553.js");
let F;
try {
    F = require(77598);
} catch  {}
function m(A) {
    this.ws[g].write(A) || this.pause();
}
function b() {
    const { ws: A } = this, { [B]: e } = A;
    e.socket.off("data", m), e.socket.off("close", b), e.socket.off("error", N);
    const t = A[Q] === o.SENT && A[E];
    let r = 1005, n = "";
    const i = A[g].closingInfo;
    i && !i.error ? (r = i.code ?? 1005, n = i.reason) : A[E] || (r = 1006), A[a] = s.CLOSED, c("close", A, (A, e)=>new f(A, e), {
        wasClean: t,
        code: r,
        reason: n
    }), d.close.hasSubscribers && d.close.publish({
        websocket: A,
        code: r,
        reason: n
    });
}
function N(A) {
    const { ws: e } = this;
    e[a] = s.CLOSING, d.socketError.hasSubscribers && d.socketError.publish(A), this.destroy();
}
module.exports = {
    establishWebSocketConnection: function(A, e, t, s, o, n) {
        const i = A;
        i.protocol = "ws:" === A.protocol ? "http:" : "https:";
        const a = w({
            urlList: [
                i
            ],
            client: t,
            serviceWorkers: "none",
            referrer: "no-referrer",
            mode: "websocket",
            credentials: "include",
            cache: "no-store",
            redirect: "error"
        });
        if (n.headers) {
            const A = p(new D(n.headers));
            a.headersList = A;
        }
        const Q = F.randomBytes(16).toString("base64");
        a.headersList.append("sec-websocket-key", Q), a.headersList.append("sec-websocket-version", "13");
        for (const A of e)a.headersList.append("sec-websocket-protocol", A);
        return a.headersList.append("sec-websocket-extensions", "permessage-deflate; client_max_window_bits"), y({
            request: a,
            useParallelQueue: !0,
            dispatcher: n.dispatcher,
            processResponse (A) {
                if ("error" === A.type || 101 !== A.status) return void I(s, "Received network error or non-101 status code.");
                if (0 !== e.length && !A.headersList.get("Sec-WebSocket-Protocol")) return void I(s, "Server did not respond with sent protocols.");
                if ("websocket" !== A.headersList.get("Upgrade")?.toLowerCase()) return void I(s, 'Server did not set Upgrade header to "websocket".');
                if ("upgrade" !== A.headersList.get("Connection")?.toLowerCase()) return void I(s, 'Server did not set Connection header to "upgrade".');
                if (A.headersList.get("Sec-WebSocket-Accept") !== F.createHash("sha1").update(Q + r).digest("base64")) return void I(s, "Incorrect hash received in Sec-WebSocket-Accept header.");
                const t = A.headersList.get("Sec-WebSocket-Extensions");
                let n;
                if (null !== t && (n = u(t), !n.has("permessage-deflate"))) return void I(s, "Sec-WebSocket-Extensions header does not match.");
                const i = A.headersList.get("Sec-WebSocket-Protocol");
                if (null !== i) {
                    if (!k("sec-websocket-protocol", a.headersList).includes(i)) return void I(s, "Protocol was not set in the opening handshake.");
                }
                A.socket.on("data", m), A.socket.on("close", b), A.socket.on("error", N), d.open.hasSubscribers && d.open.publish({
                    address: A.socket.address(),
                    protocol: i,
                    extensions: t
                }), o(A, n);
            }
        });
    },
    closeWebSocketConnection: function(A, e, t, r) {
        if (C(A) || h(A)) ;
        else if (l(A)) if (A[Q] === o.NOT_SENT) {
            A[Q] = o.PROCESSING;
            const g = new R;
            void 0 !== e && void 0 === t ? (g.frameData = Buffer.allocUnsafe(2), g.frameData.writeUInt16BE(e, 0)) : void 0 !== e && void 0 !== t ? (g.frameData = Buffer.allocUnsafe(2 + r), g.frameData.writeUInt16BE(e, 0), g.frameData.write(t, 2, "utf-8")) : g.frameData = n;
            A[B].socket.write(g.createFrame(i.CLOSE)), A[Q] = o.SENT, A[a] = s.CLOSING;
        } else A[a] = s.CLOSING;
        else I(A, "Connection was closed before it was established."), A[a] = s.CLOSING;
    }
};
