import { init_common9 } from "../../common.js";
import { init_request_id } from "../../../utils/request-id.js";
var __wakaru_init_exec_id_initialized = false;
export function init_exec_id() {
if (__wakaru_init_exec_id_initialized) return;
__wakaru_init_exec_id_initialized = true;
"use strict";
init_request_id();
init_common9();

}
