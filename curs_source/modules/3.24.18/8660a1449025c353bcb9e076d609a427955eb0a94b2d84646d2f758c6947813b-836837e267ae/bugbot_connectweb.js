import { $hd, Ghd, Hhd, SDo, Vhd, Whd, g4t, jhd, qhd, yDo, zhd } from "./bugbot_pb.js";
import { hr } from "./protobuf.js";
import { ke } from "./service-type.js";
import { E } from "./tslib.es6.js";
var ibl;
export { ibl };
var __wakaru_NNg_initialized = false;
export function NNg() {
if (__wakaru_NNg_initialized) return;
__wakaru_NNg_initialized = true;
"use strict";
E(), g4t(), hr(), ibl = {
    typeName: "aiserver.v1.BugbotService",
    methods: {
        logDeeplinkEvent: {
            name: "LogDeeplinkEvent",
            I: jhd,
            O: $hd,
            kind: ke.Unary
        },
        getEncryptedBugData: {
            name: "GetEncryptedBugData",
            I: yDo,
            O: Hhd,
            kind: ke.Unary
        },
        getEncryptedBugDataMultiple: {
            name: "GetEncryptedBugDataMultiple",
            I: SDo,
            O: Whd,
            kind: ke.Unary
        },
        addBugbotFeedback: {
            name: "AddBugbotFeedback",
            I: Ghd,
            O: qhd,
            kind: ke.Unary
        },
        getBugBotRunEta: {
            name: "GetBugBotRunEta",
            I: zhd,
            O: Vhd,
            kind: ke.Unary
        }
    }
};

}
