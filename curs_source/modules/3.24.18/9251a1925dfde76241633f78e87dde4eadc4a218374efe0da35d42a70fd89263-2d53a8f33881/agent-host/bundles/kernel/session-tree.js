import { init_catalog_session_view } from "./catalog-session-view.js";
import { init_turn_queue } from "./turn-queue.js";
var __wakaru_init_session_tree_initialized = false;
export function init_session_tree() {
if (__wakaru_init_session_tree_initialized) return;
__wakaru_init_session_tree_initialized = true;
"use strict";
init_catalog_session_view();
init_turn_queue();

}
