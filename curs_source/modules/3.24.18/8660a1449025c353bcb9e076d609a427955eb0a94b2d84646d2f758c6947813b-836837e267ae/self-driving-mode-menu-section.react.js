import { Rk, dX } from "./full_self_driving_pb.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
var stn;
export { stn };
var __wakaru_$PC_initialized = false;
export function $PC() {
if (__wakaru_$PC_initialized) return;
__wakaru_$PC_initialized = true;
"use strict";
E(), Mt(), dX(), stn = [
    {
        id: "suggest",
        label: "Ask Every Time",
        description: "Suggest tasks to be accepted",
        iconName: "lightbulb",
        mode: Rk.SUGGEST
    },
    {
        id: "autonomous",
        label: "Run Autonomously",
        description: "Drive the PR end-to-end",
        iconName: "play-super-fast",
        mode: Rk.APPLY
    }
];

}
