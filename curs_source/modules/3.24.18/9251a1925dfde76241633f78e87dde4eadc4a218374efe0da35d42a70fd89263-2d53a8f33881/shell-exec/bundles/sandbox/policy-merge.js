import { init_hardcoded_policy, intersectingPathPolicyField, rankedPolicyField } from "../../../bidi_connect_exports.js";
import { init_network_policy_utils } from "./network-policy-utils.js";
import { init_dist3 } from "../../../utils/dist/index.js";
var import_promises5, import_node_path15, readBoundaryPolicyField, additionalReadPathsPolicyField;
export { additionalReadPathsPolicyField, import_node_path15, import_promises5, readBoundaryPolicyField };
var __wakaru_init_policy_merge_initialized = false;
export function init_policy_merge() {
if (__wakaru_init_policy_merge_initialized) return;
__wakaru_init_policy_merge_initialized = true;
"use strict";
import_promises5 = require("node:fs/promises");
import_node_path15 = require("node:path");
init_dist3();
init_hardcoded_policy();
init_network_policy_utils();
readBoundaryPolicyField = rankedPolicyField({
    defaultValue: "system",
    rank: {
        workspace: 0,
        system: 1
    }
});
additionalReadPathsPolicyField = intersectingPathPolicyField();

}
