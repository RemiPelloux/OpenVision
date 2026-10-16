import { hr } from "./protobuf.js";
import { Djg, GSl, HSl, Njg, WSl, Z2n, qSl } from "./recommended_actions_pb.js";
import { ke } from "./service-type.js";
import { E } from "./tslib.es6.js";
var zSl;
export { zSl };
var __wakaru_Ljg_initialized = false;
export function Ljg() {
if (__wakaru_Ljg_initialized) return;
__wakaru_Ljg_initialized = true;
"use strict";
E(), Z2n(), hr(), zSl = {
    typeName: "aiserver.v1.RecommendedActionsService",
    methods: {
        listRecommendedActions: {
            name: "ListRecommendedActions",
            I: HSl,
            O: WSl,
            kind: ke.Unary
        },
        dismissRecommendedAction: {
            name: "DismissRecommendedAction",
            I: GSl,
            O: Djg,
            kind: ke.Unary
        },
        completeRecommendedAction: {
            name: "CompleteRecommendedAction",
            I: qSl,
            O: Njg,
            kind: ke.Unary
        }
    }
};

}
