"use strict";
require.r(exports), require.d(exports, {
    HealthService: ()=>l
});
var n = require("./module-6038.js"), s = require("./module-8592.js");
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "aiserver.v1.";
    }
}
class o extends i {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new o).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new o).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new o).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(o, t, e);
    }
    static $() {
        return [
            "HealthEmptyRequest"
        ];
    }
}
class a extends i {
    constructor(t){
        super(), this.payload = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new a).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new a).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new a).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(a, t, e);
    }
    static $() {
        return [
            "HealthRequest|1 payload 9|2 simulate_error 8?"
        ];
    }
}
class u extends i {
    constructor(t){
        super(), this.payload = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(u, t, e);
    }
    static $() {
        return [
            "HealthResponse|1 payload 9"
        ];
    }
}
var c = require("./module-2537.js");
const l = {
    typeName: "aiserver.v1.HealthService",
    methods: {
        ping: {
            name: "Ping",
            I: a,
            O: u,
            kind: n.MethodKind.Unary
        },
        unary: {
            name: "Unary",
            I: o,
            O: u,
            kind: n.MethodKind.Unary
        },
        stream: {
            name: "Stream",
            I: a,
            O: u,
            kind: n.MethodKind.ServerStreaming
        },
        streamSSE: {
            name: "StreamSSE",
            I: a,
            O: u,
            kind: n.MethodKind.ServerStreaming
        },
        streamBidi: {
            name: "StreamBidi",
            I: a,
            O: u,
            kind: n.MethodKind.BiDiStreaming
        },
        streamBidiSSE: {
            name: "StreamBidiSSE",
            I: c.BidiRequestId,
            O: u,
            kind: n.MethodKind.ServerStreaming
        },
        streamBidiPoll: {
            name: "StreamBidiPoll",
            I: c.BidiPollRequest,
            O: c.BidiPollResponse,
            kind: n.MethodKind.ServerStreaming
        }
    }
};
