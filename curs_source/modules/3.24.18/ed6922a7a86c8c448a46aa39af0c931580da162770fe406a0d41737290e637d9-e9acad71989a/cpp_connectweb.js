import { A_d, E_d, F_d, I_d, L_d, M_d, P_d, T_d, UU, _no, x_d } from "./cpp_pb.js";
import { bi } from "./protobuf.js";
import { ae } from "./service-type.js";
import { x } from "./tslib.es6.js";
var pGi;
export { pGi };
var __wakaru_Hoo_initialized = false;
export function Hoo() {
if (__wakaru_Hoo_initialized) return;
__wakaru_Hoo_initialized = true;
"use strict";
x(), UU(), bi(), pGi = {
    typeName: "aiserver.v1.CppService",
    methods: {
        markCppForEval: {
            name: "MarkCppForEval",
            I: L_d,
            O: F_d,
            kind: ae.Unary
        },
        streamHoldCpp: {
            name: "StreamHoldCpp",
            I: I_d,
            O: A_d,
            kind: ae.ServerStreaming
        },
        availableModels: {
            name: "AvailableModels",
            I: E_d,
            O: x_d,
            kind: ae.Unary
        },
        recordCppFate: {
            name: "RecordCppFate",
            I: _no,
            O: T_d,
            kind: ae.Unary
        },
        addTabRequestToEval: {
            name: "AddTabRequestToEval",
            I: M_d,
            O: P_d,
            kind: ae.Unary
        }
    }
};

}
