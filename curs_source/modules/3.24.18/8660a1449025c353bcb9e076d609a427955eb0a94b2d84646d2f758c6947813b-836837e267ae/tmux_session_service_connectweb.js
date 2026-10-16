import { hr } from "./protobuf.js";
import { ke } from "./service-type.js";
import { ANg, CRi, ENg, INg, MNg, PNg, RNg, TNg, xNg } from "./tmux_session_service_pb.js";
import { E } from "./tslib.es6.js";
var nbl;
export { nbl };
var __wakaru_DNg_initialized = false;
export function DNg() {
if (__wakaru_DNg_initialized) return;
__wakaru_DNg_initialized = true;
"use strict";
E(), CRi(), hr(), nbl = {
    typeName: "agent.v1.TmuxSessionService",
    methods: {
        createSession: {
            name: "CreateSession",
            I: TNg,
            O: ENg,
            kind: ke.Unary
        },
        listSessions: {
            name: "ListSessions",
            I: INg,
            O: xNg,
            kind: ke.Unary
        },
        killSession: {
            name: "KillSession",
            I: ANg,
            O: RNg,
            kind: ke.Unary
        },
        attachSession: {
            name: "AttachSession",
            I: PNg,
            O: MNg,
            kind: ke.Unary
        }
    }
};

}
