var __wakaru_require_diagnostics_cache;
export function require_diagnostics() {
if (__wakaru_require_diagnostics_cache) return __wakaru_require_diagnostics_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_diagnostics_cache = module2;
"use strict";
var diagnosticsChannel = require("node:diagnostics_channel");
var util2 = require("node:util");
var undiciDebugLog = util2.debuglog("undici");
var fetchDebuglog = util2.debuglog("fetch");
var websocketDebuglog = util2.debuglog("websocket");
var isClientSet = false;
var channels = {
    beforeConnect: diagnosticsChannel.channel("undici:client:beforeConnect"),
    connected: diagnosticsChannel.channel("undici:client:connected"),
    connectError: diagnosticsChannel.channel("undici:client:connectError"),
    sendHeaders: diagnosticsChannel.channel("undici:client:sendHeaders"),
    create: diagnosticsChannel.channel("undici:request:create"),
    bodySent: diagnosticsChannel.channel("undici:request:bodySent"),
    headers: diagnosticsChannel.channel("undici:request:headers"),
    trailers: diagnosticsChannel.channel("undici:request:trailers"),
    error: diagnosticsChannel.channel("undici:request:error"),
    open: diagnosticsChannel.channel("undici:websocket:open"),
    close: diagnosticsChannel.channel("undici:websocket:close"),
    socketError: diagnosticsChannel.channel("undici:websocket:socket_error"),
    ping: diagnosticsChannel.channel("undici:websocket:ping"),
    pong: diagnosticsChannel.channel("undici:websocket:pong")
};
if (undiciDebugLog.enabled || fetchDebuglog.enabled) {
    const debuglog6 = fetchDebuglog.enabled ? fetchDebuglog : undiciDebugLog;
    diagnosticsChannel.channel("undici:client:beforeConnect").subscribe((evt)=>{
        const { connectParams: { version: version4, protocol, port, host } } = evt;
        debuglog6("connecting to %s using %s%s", `${host}${port ? `:${port}` : ""}`, protocol, version4);
    });
    diagnosticsChannel.channel("undici:client:connected").subscribe((evt)=>{
        const { connectParams: { version: version4, protocol, port, host } } = evt;
        debuglog6("connected to %s using %s%s", `${host}${port ? `:${port}` : ""}`, protocol, version4);
    });
    diagnosticsChannel.channel("undici:client:connectError").subscribe((evt)=>{
        const { connectParams: { version: version4, protocol, port, host }, error: error3 } = evt;
        debuglog6("connection to %s using %s%s errored - %s", `${host}${port ? `:${port}` : ""}`, protocol, version4, error3.message);
    });
    diagnosticsChannel.channel("undici:client:sendHeaders").subscribe((evt)=>{
        const { request: { method, path: path64, origin } } = evt;
        debuglog6("sending request to %s %s/%s", method, origin, path64);
    });
    diagnosticsChannel.channel("undici:request:headers").subscribe((evt)=>{
        const { request: { method, path: path64, origin }, response: { statusCode } } = evt;
        debuglog6("received response to %s %s/%s - HTTP %d", method, origin, path64, statusCode);
    });
    diagnosticsChannel.channel("undici:request:trailers").subscribe((evt)=>{
        const { request: { method, path: path64, origin } } = evt;
        debuglog6("trailers received from %s %s/%s", method, origin, path64);
    });
    diagnosticsChannel.channel("undici:request:error").subscribe((evt)=>{
        const { request: { method, path: path64, origin }, error: error3 } = evt;
        debuglog6("request to %s %s/%s errored - %s", method, origin, path64, error3.message);
    });
    isClientSet = true;
}
if (websocketDebuglog.enabled) {
    if (!isClientSet) {
        const debuglog6 = undiciDebugLog.enabled ? undiciDebugLog : websocketDebuglog;
        diagnosticsChannel.channel("undici:client:beforeConnect").subscribe((evt)=>{
            const { connectParams: { version: version4, protocol, port, host } } = evt;
            debuglog6("connecting to %s%s using %s%s", host, port ? `:${port}` : "", protocol, version4);
        });
        diagnosticsChannel.channel("undici:client:connected").subscribe((evt)=>{
            const { connectParams: { version: version4, protocol, port, host } } = evt;
            debuglog6("connected to %s%s using %s%s", host, port ? `:${port}` : "", protocol, version4);
        });
        diagnosticsChannel.channel("undici:client:connectError").subscribe((evt)=>{
            const { connectParams: { version: version4, protocol, port, host }, error: error3 } = evt;
            debuglog6("connection to %s%s using %s%s errored - %s", host, port ? `:${port}` : "", protocol, version4, error3.message);
        });
        diagnosticsChannel.channel("undici:client:sendHeaders").subscribe((evt)=>{
            const { request: { method, path: path64, origin } } = evt;
            debuglog6("sending request to %s %s/%s", method, origin, path64);
        });
    }
    diagnosticsChannel.channel("undici:websocket:open").subscribe((evt)=>{
        const { address: { address, port } } = evt;
        websocketDebuglog("connection opened %s%s", address, port ? `:${port}` : "");
    });
    diagnosticsChannel.channel("undici:websocket:close").subscribe((evt)=>{
        const { websocket, code, reason } = evt;
        websocketDebuglog("closed connection to %s - %s %s", websocket.url, code, reason);
    });
    diagnosticsChannel.channel("undici:websocket:socket_error").subscribe((err)=>{
        websocketDebuglog("connection errored - %s", err.message);
    });
    diagnosticsChannel.channel("undici:websocket:ping").subscribe((evt)=>{
        websocketDebuglog("ping received");
    });
    diagnosticsChannel.channel("undici:websocket:pong").subscribe((evt)=>{
        websocketDebuglog("pong received");
    });
}
module2.exports = {
    channels
};

return module2.exports;
}
