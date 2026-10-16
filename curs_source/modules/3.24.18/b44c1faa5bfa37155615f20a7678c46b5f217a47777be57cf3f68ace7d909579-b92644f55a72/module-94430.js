"use strict";
require.r(exports), require.d(exports, {
    HealthService: ()=>u
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
class o extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "aiserver.v1.";
    }
}
class i extends o {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new i).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new i).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new i).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(i, e, t);
    }
    static $() {
        return [
            "HealthEmptyRequest"
        ];
    }
}
class a extends o {
    constructor(e){
        super(), this.payload = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new a).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new a).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new a).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(a, e, t);
    }
    static $() {
        return [
            "HealthRequest|1 payload 9|2 simulate_error 8?"
        ];
    }
}
class c extends o {
    constructor(e){
        super(), this.payload = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new c).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new c).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new c).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(c, e, t);
    }
    static $() {
        return [
            "HealthResponse|1 payload 9"
        ];
    }
}
var l = require("./module-82537.js");
const u = {
    typeName: "aiserver.v1.HealthService",
    methods: {
        ping: {
            name: "Ping",
            I: a,
            O: c,
            kind: n.MethodKind.Unary
        },
        unary: {
            name: "Unary",
            I: i,
            O: c,
            kind: n.MethodKind.Unary
        },
        stream: {
            name: "Stream",
            I: a,
            O: c,
            kind: n.MethodKind.ServerStreaming
        },
        streamSSE: {
            name: "StreamSSE",
            I: a,
            O: c,
            kind: n.MethodKind.ServerStreaming
        },
        streamBidi: {
            name: "StreamBidi",
            I: a,
            O: c,
            kind: n.MethodKind.BiDiStreaming
        },
        streamBidiSSE: {
            name: "StreamBidiSSE",
            I: l.BidiRequestId,
            O: c,
            kind: n.MethodKind.ServerStreaming
        },
        streamBidiPoll: {
            name: "StreamBidiPoll",
            I: l.BidiPollRequest,
            O: l.BidiPollResponse,
            kind: n.MethodKind.ServerStreaming
        }
    }
};
