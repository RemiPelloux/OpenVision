import { AGENT_WEBSOCKET_PROTOCOL_VERSION, AGENT_WEBSOCKET_REUSE_HEADER, AGENT_WEBSOCKET_SEQUENTIAL_V1_REUSE_VALUE } from "./bidi-connect/dist/agent-websocket-wire.js";
import { AgentWebSocketCancelRun, AgentWebSocketClientFrame, AgentWebSocketClientHalfClose, AgentWebSocketClientMessage, AgentWebSocketConnectCode, AgentWebSocketConnectError, AgentWebSocketConnectErrorDetail, AgentWebSocketHeader, AgentWebSocketHello, AgentWebSocketProtocolVersion, AgentWebSocketRunAccepted, AgentWebSocketRunEnd, AgentWebSocketRunIdentity, AgentWebSocketRunRejected, AgentWebSocketRunStart, AgentWebSocketServerFrame, AgentWebSocketServerMessage } from "./proto/dist/generated/agent/v1/agent_websocket_pb.js";
export function allowsAgentWebSocketSequentialReuse(trailers) {
    const markers = trailers.filter((trailer)=>trailer.name.toLowerCase() === AGENT_WEBSOCKET_REUSE_HEADER);
    return markers.length === 1 && markers[0]?.value === AGENT_WEBSOCKET_SEQUENTIAL_V1_REUSE_VALUE;
}
function validateRequiredString({ value, field: field4 }) {
    if (value.length === 0) {
        throw new Error(`missing Agent WebSocket ${field4}`);
    }
}
export function validateAgentWebSocketHello(hello) {
    if (hello.protocolVersion !== AGENT_WEBSOCKET_PROTOCOL_VERSION) {
        throw new Error("unsupported Agent WebSocket protocol version");
    }
}
export function validateAgentWebSocketRunIdentity(identity) {
    if (identity === void 0) {
        throw new Error("missing Agent WebSocket run identity");
    }
    validateRequiredString({
        value: identity.runId,
        field: "run_id"
    });
    validateRequiredString({
        value: identity.requestId,
        field: "request_id"
    });
}
export function validateAgentWebSocketConnectError(connectError) {
    if (connectError === void 0) {
        throw new Error("missing Agent WebSocket Connect error");
    }
    if (connectError.code < AgentWebSocketConnectCode.CANCELED || connectError.code > AgentWebSocketConnectCode.UNAUTHENTICATED) {
        throw new Error("invalid Agent WebSocket Connect error code");
    }
    for (const detail of connectError.details){
        validateRequiredString({
            value: detail.typeName,
            field: "Connect error detail type_name"
        });
    }
}
export function validateAgentWebSocketClientFrame(frame) {
    switch(frame.frame.case){
        case "hello":
            validateAgentWebSocketHello(frame.frame.value);
            return;
        case "runStart":
            validateAgentWebSocketRunIdentity(frame.frame.value.identity);
            return;
        case "clientMessage":
            validateRequiredString({
                value: frame.frame.value.runId,
                field: "client message run_id"
            });
            if (frame.frame.value.message.byteLength === 0) {
                throw new Error("missing Agent WebSocket client message bytes");
            }
            return;
        case "halfClose":
            validateRequiredString({
                value: frame.frame.value.runId,
                field: "half-close run_id"
            });
            return;
        case "cancelRun":
            validateRequiredString({
                value: frame.frame.value.runId,
                field: "cancel run_id"
            });
            return;
        default:
            throw new Error("missing Agent WebSocket client frame variant");
    }
}
export function validateAgentWebSocketServerFrame(frame) {
    switch(frame.frame.case){
        case "hello":
            validateAgentWebSocketHello(frame.frame.value);
            return;
        case "runAccepted":
            validateAgentWebSocketRunIdentity(frame.frame.value.identity);
            return;
        case "serverMessage":
            validateRequiredString({
                value: frame.frame.value.runId,
                field: "server message run_id"
            });
            if (frame.frame.value.message.byteLength === 0) {
                throw new Error("missing Agent WebSocket server message bytes");
            }
            return;
        case "runEnd":
            validateAgentWebSocketRunIdentity(frame.frame.value.identity);
            if (frame.frame.value.error !== void 0) {
                validateAgentWebSocketConnectError(frame.frame.value.error);
            }
            return;
        case "runRejected":
            validateAgentWebSocketRunIdentity(frame.frame.value.identity);
            validateAgentWebSocketConnectError(frame.frame.value.error);
            return;
        default:
            throw new Error("missing Agent WebSocket server frame variant");
    }
}
export { AgentWebSocketCancelRun, AgentWebSocketClientFrame, AgentWebSocketClientHalfClose, AgentWebSocketClientMessage, AgentWebSocketConnectCode, AgentWebSocketConnectError, AgentWebSocketConnectErrorDetail, AgentWebSocketHeader, AgentWebSocketHello, AgentWebSocketProtocolVersion, AgentWebSocketRunAccepted, AgentWebSocketRunEnd, AgentWebSocketRunIdentity, AgentWebSocketRunRejected, AgentWebSocketRunStart, AgentWebSocketServerFrame, AgentWebSocketServerMessage };

export var agent_websocket_pb_exports = {};
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketCancelRun", {
    enumerable: true,
    get: ()=>AgentWebSocketCancelRun
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketClientFrame", {
    enumerable: true,
    get: ()=>AgentWebSocketClientFrame
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketClientHalfClose", {
    enumerable: true,
    get: ()=>AgentWebSocketClientHalfClose
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketClientMessage", {
    enumerable: true,
    get: ()=>AgentWebSocketClientMessage
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketConnectCode", {
    enumerable: true,
    get: ()=>AgentWebSocketConnectCode
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketConnectError", {
    enumerable: true,
    get: ()=>AgentWebSocketConnectError
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketConnectErrorDetail", {
    enumerable: true,
    get: ()=>AgentWebSocketConnectErrorDetail
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketHeader", {
    enumerable: true,
    get: ()=>AgentWebSocketHeader
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketHello", {
    enumerable: true,
    get: ()=>AgentWebSocketHello
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketProtocolVersion", {
    enumerable: true,
    get: ()=>AgentWebSocketProtocolVersion
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketRunAccepted", {
    enumerable: true,
    get: ()=>AgentWebSocketRunAccepted
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketRunEnd", {
    enumerable: true,
    get: ()=>AgentWebSocketRunEnd
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketRunIdentity", {
    enumerable: true,
    get: ()=>AgentWebSocketRunIdentity
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketRunRejected", {
    enumerable: true,
    get: ()=>AgentWebSocketRunRejected
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketRunStart", {
    enumerable: true,
    get: ()=>AgentWebSocketRunStart
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketServerFrame", {
    enumerable: true,
    get: ()=>AgentWebSocketServerFrame
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketServerMessage", {
    enumerable: true,
    get: ()=>AgentWebSocketServerMessage
});
