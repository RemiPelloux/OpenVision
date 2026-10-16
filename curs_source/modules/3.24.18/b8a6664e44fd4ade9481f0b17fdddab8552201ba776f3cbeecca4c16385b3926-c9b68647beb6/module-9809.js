"use strict";
const r = require(31637), { uid: s, states: o } = require("./module-85440.js"), { kReadyState: n, kSentClose: i, kByteParser: E, kReceivedClose: Q } = require("./module-35315.js"), { fireEvent: g, failWebsocketConnection: C } = require("./module-44321.js"), { CloseEvent: B } = require("./module-42740.js"), { makeRequest: a } = require("./module-52239.js"), { fetching: I } = require("./module-53406.js"), { Headers: c } = require("./module-2932.js"), { getGlobalDispatcher: h } = require("./module-37362.js"), { kHeadersList: l } = require("./module-58832.js"), u = {};
let d;
u.open = r.channel("undici:websocket:open"), u.close = r.channel("undici:websocket:close"), u.socketError = r.channel("undici:websocket:socket_error");
try {
    d = require(76982);
} catch  {}
function f(A) {
    this.ws[E].write(A) || this.pause();
}
function y() {
    const { ws: A } = this, e = A[i] && A[Q];
    let t = 1005, r = "";
    const s = A[E].closingInfo;
    s ? (t = s.code ?? 1005, r = s.reason) : A[i] || (t = 1006), A[n] = o.CLOSED, g("close", A, B, {
        wasClean: e,
        code: t,
        reason: r
    }), u.close.hasSubscribers && u.close.publish({
        websocket: A,
        code: t,
        reason: r
    });
}
function D(A) {
    const { ws: e } = this;
    e[n] = o.CLOSING, u.socketError.hasSubscribers && u.socketError.publish(A), this.destroy();
}
module.exports = {
    establishWebSocketConnection: function(A, e, t, r, o) {
        const n = A;
        n.protocol = "ws:" === A.protocol ? "http:" : "https:";
        const i = a({
            urlList: [
                n
            ],
            serviceWorkers: "none",
            referrer: "no-referrer",
            mode: "websocket",
            credentials: "include",
            cache: "no-store",
            redirect: "error"
        });
        if (o.headers) {
            const A = new c(o.headers)[l];
            i.headersList = A;
        }
        const E = d.randomBytes(16).toString("base64");
        i.headersList.append("sec-websocket-key", E), i.headersList.append("sec-websocket-version", "13");
        for (const A of e)i.headersList.append("sec-websocket-protocol", A);
        return I({
            request: i,
            useParallelQueue: !0,
            dispatcher: o.dispatcher ?? h(),
            processResponse (A) {
                if ("error" === A.type || 101 !== A.status) return void C(t, "Received network error or non-101 status code.");
                if (0 !== e.length && !A.headersList.get("Sec-WebSocket-Protocol")) return void C(t, "Server did not respond with sent protocols.");
                if ("websocket" !== A.headersList.get("Upgrade")?.toLowerCase()) return void C(t, 'Server did not set Upgrade header to "websocket".');
                if ("upgrade" !== A.headersList.get("Connection")?.toLowerCase()) return void C(t, 'Server did not set Connection header to "upgrade".');
                if (A.headersList.get("Sec-WebSocket-Accept") !== d.createHash("sha1").update(E + s).digest("base64")) return void C(t, "Incorrect hash received in Sec-WebSocket-Accept header.");
                const o = A.headersList.get("Sec-WebSocket-Extensions");
                if (null !== o && "" !== o) return void C(t, "Received different permessage-deflate than the one set.");
                const n = A.headersList.get("Sec-WebSocket-Protocol");
                null === n || n === i.headersList.get("Sec-WebSocket-Protocol") ? (A.socket.on("data", f), A.socket.on("close", y), A.socket.on("error", D), u.open.hasSubscribers && u.open.publish({
                    address: A.socket.address(),
                    protocol: n,
                    extensions: o
                }), r(A)) : C(t, "Protocol was not set in the opening handshake.");
            }
        });
    }
};
