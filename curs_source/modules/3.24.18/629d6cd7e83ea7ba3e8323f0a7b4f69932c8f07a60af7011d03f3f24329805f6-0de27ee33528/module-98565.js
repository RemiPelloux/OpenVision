"use strict";
const r = require(53053), s = require(57975), o = s.debuglog("undici"), n = s.debuglog("fetch"), i = s.debuglog("websocket");
let a = !1;
const Q = {
    beforeConnect: r.channel("undici:client:beforeConnect"),
    connected: r.channel("undici:client:connected"),
    connectError: r.channel("undici:client:connectError"),
    sendHeaders: r.channel("undici:client:sendHeaders"),
    create: r.channel("undici:request:create"),
    bodySent: r.channel("undici:request:bodySent"),
    headers: r.channel("undici:request:headers"),
    trailers: r.channel("undici:request:trailers"),
    error: r.channel("undici:request:error"),
    open: r.channel("undici:websocket:open"),
    close: r.channel("undici:websocket:close"),
    socketError: r.channel("undici:websocket:socket_error"),
    ping: r.channel("undici:websocket:ping"),
    pong: r.channel("undici:websocket:pong")
};
if (o.enabled || n.enabled) {
    const A = n.enabled ? n : o;
    r.channel("undici:client:beforeConnect").subscribe((e)=>{
        const { connectParams: { version: t, protocol: r, port: s, host: o } } = e;
        A("connecting to %s using %s%s", `${o}${s ? `:${s}` : ""}`, r, t);
    }), r.channel("undici:client:connected").subscribe((e)=>{
        const { connectParams: { version: t, protocol: r, port: s, host: o } } = e;
        A("connected to %s using %s%s", `${o}${s ? `:${s}` : ""}`, r, t);
    }), r.channel("undici:client:connectError").subscribe((e)=>{
        const { connectParams: { version: t, protocol: r, port: s, host: o }, error: n } = e;
        A("connection to %s using %s%s errored - %s", `${o}${s ? `:${s}` : ""}`, r, t, n.message);
    }), r.channel("undici:client:sendHeaders").subscribe((e)=>{
        const { request: { method: t, path: r, origin: s } } = e;
        A("sending request to %s %s/%s", t, s, r);
    }), r.channel("undici:request:headers").subscribe((e)=>{
        const { request: { method: t, path: r, origin: s }, response: { statusCode: o } } = e;
        A("received response to %s %s/%s - HTTP %d", t, s, r, o);
    }), r.channel("undici:request:trailers").subscribe((e)=>{
        const { request: { method: t, path: r, origin: s } } = e;
        A("trailers received from %s %s/%s", t, s, r);
    }), r.channel("undici:request:error").subscribe((e)=>{
        const { request: { method: t, path: r, origin: s }, error: o } = e;
        A("request to %s %s/%s errored - %s", t, s, r, o.message);
    }), a = !0;
}
if (i.enabled) {
    if (!a) {
        const A = o.enabled ? o : i;
        r.channel("undici:client:beforeConnect").subscribe((e)=>{
            const { connectParams: { version: t, protocol: r, port: s, host: o } } = e;
            A("connecting to %s%s using %s%s", o, s ? `:${s}` : "", r, t);
        }), r.channel("undici:client:connected").subscribe((e)=>{
            const { connectParams: { version: t, protocol: r, port: s, host: o } } = e;
            A("connected to %s%s using %s%s", o, s ? `:${s}` : "", r, t);
        }), r.channel("undici:client:connectError").subscribe((e)=>{
            const { connectParams: { version: t, protocol: r, port: s, host: o }, error: n } = e;
            A("connection to %s%s using %s%s errored - %s", o, s ? `:${s}` : "", r, t, n.message);
        }), r.channel("undici:client:sendHeaders").subscribe((e)=>{
            const { request: { method: t, path: r, origin: s } } = e;
            A("sending request to %s %s/%s", t, s, r);
        });
    }
    r.channel("undici:websocket:open").subscribe((A)=>{
        const { address: { address: e, port: t } } = A;
        i("connection opened %s%s", e, t ? `:${t}` : "");
    }), r.channel("undici:websocket:close").subscribe((A)=>{
        const { websocket: e, code: t, reason: r } = A;
        i("closed connection to %s - %s %s", e.url, t, r);
    }), r.channel("undici:websocket:socket_error").subscribe((A)=>{
        i("connection errored - %s", A.message);
    }), r.channel("undici:websocket:ping").subscribe((A)=>{
        i("ping received");
    }), r.channel("undici:websocket:pong").subscribe((A)=>{
        i("pong received");
    });
}
module.exports = {
    channels: Q
};
