import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { nX, w1 } from "./repository_pb.js";
import { x } from "./tslib.es6.js";
import { OO, ZC, hu, kD, oN, xf } from "./utils_pb.js";
var hQd, pQd, mQd;
export { hQd, mQd, pQd };
var __wakaru_VDv_initialized = false;
export function VDv() {
if (__wakaru_VDv_initialized) return;
__wakaru_VDv_initialized = true;
"use strict";
x(), bi(), hu(), nX(), hQd = k.makeMessageType("aiserver.v1.StreamInlineLongCompletionRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 6,
            name: "repositories",
            kind: "message",
            T: w1,
            repeated: !0
        },
        {
            no: 7,
            name: "context_blocks",
            kind: "message",
            T: pQd,
            repeated: !0
        },
        {
            no: 13,
            name: "explicit_context",
            kind: "message",
            T: OO
        },
        {
            no: 14,
            name: "model_details",
            kind: "message",
            T: xf
        },
        {
            no: 15,
            name: "linter_errors",
            kind: "message",
            T: oN
        }
    ]), pQd = k.makeMessageType("aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock", ()=>[
        {
            no: 1,
            name: "context_type",
            kind: "enum",
            T: k.getEnumType(mQd)
        },
        {
            no: 2,
            name: "blocks",
            kind: "message",
            T: kD,
            repeated: !0
        }
    ], {
    localName: "StreamInlineLongCompletionRequest_ContextBlock"
}), mQd = k.makeEnum("aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock.ContextType", [
    {
        no: 0,
        name: "CONTEXT_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CONTEXT_TYPE_RECENT_LOCATIONS",
        localName: "RECENT_LOCATIONS"
    }
]);

}
