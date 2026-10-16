import { v$ } from "./composerAgent.js";
import { tf } from "./composer_pb.js";
import { Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { Cu } from "./workspaceCollectionService.js";
var __wakaru_LAw_initialized = false;
export function LAw() {
if (__wakaru_LAw_initialized) return;
__wakaru_LAw_initialized = true;
"use strict";
E(), tf(), Pu(), v$(), Cu();

}
