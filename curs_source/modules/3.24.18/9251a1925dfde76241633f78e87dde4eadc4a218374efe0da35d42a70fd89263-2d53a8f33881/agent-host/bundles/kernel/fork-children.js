import { init_catalog_session_view } from "./catalog-session-view.js";
import { init_fork_child_ids } from "./fork-child-ids.js";
import { init_proto_clone } from "./proto-clone.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_fork_children_initialized = false;
export function init_fork_children() {
if (__wakaru_init_fork_children_initialized) return;
__wakaru_init_fork_children_initialized = true;
"use strict";
init_agent_pb();
init_catalog_session_view();
init_fork_child_ids();
init_proto_clone();

}
