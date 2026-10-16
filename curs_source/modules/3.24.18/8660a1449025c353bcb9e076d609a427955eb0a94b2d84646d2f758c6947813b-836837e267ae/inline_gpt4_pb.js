import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Cx, qse } from "./repository_pb.js";
import { E } from "./tslib.es6.js";
import { Hu, Mg, QE, Z9, ZF, rL } from "./utils_pb.js";
var gBm, fBm, vBm;
export { fBm, gBm, vBm };
var __wakaru_hG1_initialized = false;
export function hG1() {
if (__wakaru_hG1_initialized) return;
__wakaru_hG1_initialized = true;
"use strict";
E(), hr(), Hu(), qse(), gBm = x.makeMessageType("aiserver.v1.StreamInlineLongCompletionRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 6,
            name: "repositories",
            kind: "message",
            T: Cx,
            repeated: !0
        },
        {
            no: 7,
            name: "context_blocks",
            kind: "message",
            T: fBm,
            repeated: !0
        },
        {
            no: 13,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 14,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 15,
            name: "linter_errors",
            kind: "message",
            T: ZF
        }
    ]), fBm = x.makeMessageType("aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock", ()=>[
        {
            no: 1,
            name: "context_type",
            kind: "enum",
            T: x.getEnumType(vBm)
        },
        {
            no: 2,
            name: "blocks",
            kind: "message",
            T: rL,
            repeated: !0
        }
    ], {
    localName: "StreamInlineLongCompletionRequest_ContextBlock"
}), vBm = x.makeEnum("aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock.ContextType", [
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
