import { uw } from "./agent_pb.js";
import { NSe } from "./bugbot_pb.js";
import { Vg } from "./chat_pb.js";
import { K9 } from "./cloud_agent_scope_pb.js";
import { Pat } from "./cmdk_pb.js";
import { Oat } from "./context_ast_pb.js";
import { OSe } from "./context_pb.js";
import { Y9 } from "./cpp_pb.js";
import { pZ } from "./docs_pb.js";
import { Mat } from "./exec_pb.js";
import { Nat } from "./fastapply_pb.js";
import { DSe } from "./filesyncserver_pb.js";
import { Lat } from "./interface_agent_pb.js";
import { Dat } from "./lint_pb.js";
import { z9 } from "./lsp_subgraph_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { zc } from "./repository_pb.js";
import { lu } from "./requested_model_pb.js";
import { pP } from "./smart_mode_classifier_exec_pb.js";
import { Zy } from "./tools_pb.js";
import { h } from "./tslib.es6.js";
import { $q } from "./usage_pb.js";
import { lr } from "./utils_pb_2.js";
var LSe;
export { LSe };
var __wakaru_Uat_initialized = false;
export function Uat() {
if (__wakaru_Uat_initialized) return;
__wakaru_Uat_initialized = true;
"use strict";
h(), F(), Vg(), Zy(), lr(), NSe(), Mat(), Y9(), lu(), z9(), DSe(), Pat(), zc(), pZ(), pP(), K9(), uw(), Nat(), Dat(), Oat(), $q(), Lat(), OSe(), LSe = c.makeEnum("aiserver.v1.CloudAgentEffortMode", [
    {
        no: 0,
        name: "CLOUD_AGENT_EFFORT_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_AGENT_EFFORT_MODE_STANDARD",
        localName: "STANDARD"
    },
    {
        no: 2,
        name: "CLOUD_AGENT_EFFORT_MODE_GRIND",
        localName: "GRIND"
    }
]);

}
