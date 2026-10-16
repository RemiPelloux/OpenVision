import { $0d, B0d, C9o, H0d, U0d, V0d, X0d, j0d, lW, q0d, z0d } from "./cpp_pb.js";
import { hr } from "./protobuf.js";
import { ke } from "./service-type.js";
import { E } from "./tslib.es6.js";
var WYr;
export { WYr };
var __wakaru_sja_initialized = false;
export function sja() {
if (__wakaru_sja_initialized) return;
__wakaru_sja_initialized = true;
"use strict";
E(), lW(), hr(), WYr = {
    typeName: "aiserver.v1.CppService",
    methods: {
        markCppForEval: {
            name: "MarkCppForEval",
            I: V0d,
            O: X0d,
            kind: ke.Unary
        },
        streamHoldCpp: {
            name: "StreamHoldCpp",
            I: $0d,
            O: H0d,
            kind: ke.ServerStreaming
        },
        availableModels: {
            name: "AvailableModels",
            I: U0d,
            O: j0d,
            kind: ke.Unary
        },
        recordCppFate: {
            name: "RecordCppFate",
            I: C9o,
            O: B0d,
            kind: ke.Unary
        },
        addTabRequestToEval: {
            name: "AddTabRequestToEval",
            I: q0d,
            O: z0d,
            kind: ke.Unary
        }
    }
};

}
