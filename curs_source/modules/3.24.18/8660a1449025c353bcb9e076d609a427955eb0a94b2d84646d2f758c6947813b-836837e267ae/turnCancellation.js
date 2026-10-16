import { Ei } from "./Iwo.js";
import { FJ } from "./aiErrorService.js";
import { dp } from "./connect.js";
import { hX } from "./index_12.ts";
import { E } from "./tslib.es6.js";
import { Hu } from "./utils_pb.js";
var isl;
export { isl };
var __wakaru_Ppk_initialized = false;
export function Ppk() {
if (__wakaru_Ppk_initialized) return;
__wakaru_Ppk_initialized = true;
"use strict";
E(), hX(), Ei(), dp(), Hu(), FJ(), isl = new Set([
    "user_stopped_generation",
    "new_message_submitted",
    "migration",
    "remote_control_stopped"
]);

}
