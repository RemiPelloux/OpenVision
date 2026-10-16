import { WId, hro, mro, pro } from "./conversations_pb.js";
import { bi } from "./protobuf.js";
import { ae } from "./service-type.js";
import { x } from "./tslib.es6.js";
var dMo;
export { dMo };
var __wakaru_H9h_initialized = false;
export function H9h() {
if (__wakaru_H9h_initialized) return;
__wakaru_H9h_initialized = true;
"use strict";
x(), mro(), bi(), dMo = {
    typeName: "aiserver.v1.ConversationsService",
    methods: {
        getCommitMetrics: {
            name: "GetCommitMetrics",
            I: hro,
            O: pro,
            kind: ae.Unary
        },
        getCommitMetricsByFilePath: {
            name: "GetCommitMetricsByFilePath",
            I: WId,
            O: pro,
            kind: ae.Unary
        }
    }
};

}
