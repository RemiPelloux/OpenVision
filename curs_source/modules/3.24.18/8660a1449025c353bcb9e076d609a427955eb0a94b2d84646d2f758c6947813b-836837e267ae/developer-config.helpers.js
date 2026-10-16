import { rHl } from "./BA.js";
import { wm } from "./buildFlags.js";
import { lW } from "./cpp_pb.js";
import { E } from "./tslib.es6.js";
import { Hu, R5 } from "./utils_pb.js";
var sJf, oJf, aJf, lJf;
export { aJf, lJf, oJf, sJf };
var __wakaru_i$w_initialized = false;
export function i$w() {
if (__wakaru_i$w_initialized) return;
__wakaru_i$w_initialized = true;
"use strict";
E(), lW(), Hu(), wm(), sJf = "cursor.rpcFileLogger.enabled", oJf = "cursor.rpcFileLogger.folder", aJf = [
    {
        value: "unspecified",
        label: "unspecified"
    },
    {
        value: "quiet",
        label: "quiet"
    },
    {
        value: "loud",
        label: "loud"
    },
    {
        value: "op",
        label: "op"
    }
], lJf = [
    R5.UNSPECIFIED,
    R5.VOYAGE_CODE_2,
    R5.TEXT_EMBEDDINGS_LARGE_3,
    R5.QWEN_1_5B_CUSTOM,
    R5.QWEN_1_5B_0618_CUSTOM,
    R5.QWEN_1_5B_0618_FP8_MM_CUSTOM
].map((t)=>({
        value: rHl(t),
        label: rHl(t)
    }));

}
