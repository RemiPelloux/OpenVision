require.r(exports), require.d(exports, {
    AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER: ()=>s,
    AGENT_WEBSOCKET_PRECONNECT_SUBPROTOCOL: ()=>i,
    AGENT_WEBSOCKET_PROTOCOL_VERSION: ()=>a,
    AGENT_WEBSOCKET_REUSE_HEADER: ()=>c,
    AGENT_WEBSOCKET_SEQUENTIAL_V1_REUSE_VALUE: ()=>l,
    AGENT_WEBSOCKET_SUBPROTOCOL: ()=>o,
    allowsAgentWebSocketSequentialReuse: ()=>d,
    validateAgentWebSocketClientFrame: ()=>g,
    validateAgentWebSocketConnectError: ()=>m,
    validateAgentWebSocketHello: ()=>h,
    validateAgentWebSocketRunIdentity: ()=>f,
    validateAgentWebSocketServerFrame: ()=>v
});
var r = require("./module-3192.js");
const o = "cursor-agent-v1", i = "cursor-agent-preconnect-v1", s = "x-cursor-agent-websocket-reservation-id", a = r.AgentWebSocketProtocolVersion.V1, c = "x-cursor-agent-websocket-reuse", l = "sequential-v1";
function d(e) {
    const t = e.filter((e)=>e.name.toLowerCase() === c);
    return 1 === t.length && t[0]?.value === l;
}
function u({ value: e, field: t }) {
    if (0 === e.length) throw new Error(`missing Agent WebSocket ${t}`);
}
function h(e) {
    if (e.protocolVersion !== a) throw new Error("unsupported Agent WebSocket protocol version");
}
function f(e) {
    if (void 0 === e) throw new Error("missing Agent WebSocket run identity");
    u({
        value: e.runId,
        field: "run_id"
    }), u({
        value: e.requestId,
        field: "request_id"
    });
}
function m(e) {
    if (void 0 === e) throw new Error("missing Agent WebSocket Connect error");
    if (e.code < r.AgentWebSocketConnectCode.CANCELED || e.code > r.AgentWebSocketConnectCode.UNAUTHENTICATED) throw new Error("invalid Agent WebSocket Connect error code");
    for (const t of e.details)u({
        value: t.typeName,
        field: "Connect error detail type_name"
    });
}
function g(e) {
    switch(e.frame.case){
        case "hello":
            return void h(e.frame.value);
        case "runStart":
            return void f(e.frame.value.identity);
        case "clientMessage":
            if (u({
                value: e.frame.value.runId,
                field: "client message run_id"
            }), 0 === e.frame.value.message.byteLength) throw new Error("missing Agent WebSocket client message bytes");
            return;
        case "halfClose":
            return void u({
                value: e.frame.value.runId,
                field: "half-close run_id"
            });
        case "cancelRun":
            return void u({
                value: e.frame.value.runId,
                field: "cancel run_id"
            });
        default:
            throw new Error("missing Agent WebSocket client frame variant");
    }
}
function v(e) {
    switch(e.frame.case){
        case "hello":
            return void h(e.frame.value);
        case "runAccepted":
            return void f(e.frame.value.identity);
        case "serverMessage":
            if (u({
                value: e.frame.value.runId,
                field: "server message run_id"
            }), 0 === e.frame.value.message.byteLength) throw new Error("missing Agent WebSocket server message bytes");
            return;
        case "runEnd":
            return f(e.frame.value.identity), void (void 0 !== e.frame.value.error && m(e.frame.value.error));
        case "runRejected":
            return f(e.frame.value.identity), void m(e.frame.value.error);
        default:
            throw new Error("missing Agent WebSocket server frame variant");
    }
}
