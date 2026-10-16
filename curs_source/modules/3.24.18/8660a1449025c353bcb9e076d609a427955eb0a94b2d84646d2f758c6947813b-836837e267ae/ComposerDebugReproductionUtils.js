import { sd } from "./chat_pb.js";
import { tf } from "./composer_pb.js";
import { E } from "./tslib.es6.js";
var hXg, pXg, mXg;
export { hXg, mXg, pXg };
var __wakaru_gPn_initialized = false;
export function gPn() {
if (__wakaru_gPn_initialized) return;
__wakaru_gPn_initialized = true;
"use strict";
E(), sd(), tf(), hXg = "</reproduction_steps>", pXg = /<reproduction_steps>([\s\S]*?)(?:<\/reproduction_steps>|$)/g, mXg = {
    found: !1,
    isOpen: !1,
    content: ""
};

}
