import { init_request_id } from "../../../agent/dist/utils/request-id.js";
var __wakaru_init_hosted_child_lineage_initialized = false;
export function init_hosted_child_lineage() {
if (__wakaru_init_hosted_child_lineage_initialized) return;
__wakaru_init_hosted_child_lineage_initialized = true;
"use strict";
init_request_id();

}
