import { Y9 } from "./cpp_pb.js";
import { z9 } from "./lsp_subgraph_pb.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
import { lr } from "./utils_pb_2.js";
var __wakaru_OSe_initialized = false;
export function OSe() {
if (__wakaru_OSe_initialized) return;
__wakaru_OSe_initialized = true;
"use strict";
h(), F(), lr(), Y9(), z9();

}
