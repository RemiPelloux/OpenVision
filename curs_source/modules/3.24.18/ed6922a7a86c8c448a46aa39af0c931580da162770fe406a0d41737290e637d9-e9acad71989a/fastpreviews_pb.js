import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
import { Dss, Tbn, ZC, hu, xf } from "./utils_pb.js";
var gQd, fQd, vQd;
export { fQd, gQd, vQd };
var __wakaru_jDv_initialized = false;
export function jDv() {
if (__wakaru_jDv_initialized) return;
__wakaru_jDv_initialized = true;
"use strict";
x(), bi(), hu(), gQd = k.makeMessageType("aiserver.v1.StreamAiPreviewsIntent", ()=>[
        {
            no: 1,
            name: "main_symbols_to_analyze_from_go_to_def",
            kind: "message",
            T: Tbn,
            repeated: !0
        },
        {
            no: 4,
            name: "main_symbol_hover_details",
            kind: "message",
            T: Dss
        },
        {
            no: 3,
            name: "related_symbols",
            kind: "message",
            T: Tbn,
            repeated: !0
        },
        {
            no: 6,
            name: "main_symbols_to_analyze_from_implementations",
            kind: "message",
            T: Tbn,
            repeated: !0
        }
    ]), fQd = k.makeMessageType("aiserver.v1.StreamAiPreviewsRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "intent",
            kind: "message",
            T: gQd
        },
        {
            no: 14,
            name: "model_details",
            kind: "message",
            T: xf
        },
        {
            no: 15,
            name: "is_detailed",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), vQd = k.makeMessageType("aiserver.v1.StreamAiPreviewsResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);

}
