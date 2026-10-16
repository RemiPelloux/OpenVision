import { init_pending_decision_provider } from "../pending-decision-provider.js";
import { init_edit_block_handler } from "./edit-block-handler.js";
var __wakaru_init_read_block_handler_initialized = false;
export function init_read_block_handler() {
if (__wakaru_init_read_block_handler_initialized) return;
__wakaru_init_read_block_handler_initialized = true;
"use strict";
init_pending_decision_provider();
init_edit_block_handler();

}
