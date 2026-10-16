import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { Hu, Lei, Mg, QE, mDo } from "./utils_pb.js";
var _Bm, bBm, yBm;
export { _Bm, bBm, yBm };
var __wakaru_pG1_initialized = false;
export function pG1() {
if (__wakaru_pG1_initialized) return;
__wakaru_pG1_initialized = true;
"use strict";
E(), hr(), Hu(), _Bm = x.makeMessageType("aiserver.v1.StreamAiPreviewsIntent", ()=>[
        {
            no: 1,
            name: "main_symbols_to_analyze_from_go_to_def",
            kind: "message",
            T: Lei,
            repeated: !0
        },
        {
            no: 4,
            name: "main_symbol_hover_details",
            kind: "message",
            T: mDo
        },
        {
            no: 3,
            name: "related_symbols",
            kind: "message",
            T: Lei,
            repeated: !0
        },
        {
            no: 6,
            name: "main_symbols_to_analyze_from_implementations",
            kind: "message",
            T: Lei,
            repeated: !0
        }
    ]), bBm = x.makeMessageType("aiserver.v1.StreamAiPreviewsRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 2,
            name: "intent",
            kind: "message",
            T: _Bm
        },
        {
            no: 14,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 15,
            name: "is_detailed",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), yBm = x.makeMessageType("aiserver.v1.StreamAiPreviewsResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);

}
