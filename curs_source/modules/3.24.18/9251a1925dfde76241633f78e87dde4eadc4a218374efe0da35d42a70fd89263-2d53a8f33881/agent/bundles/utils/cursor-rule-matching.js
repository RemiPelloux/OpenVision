import { normalizeToUnixPath } from "../../../dist_exports.js";
import { init_esm8 } from "../../../node_modules/.pnpm/minimatch@10.2.5/node_modules/minimatch/dist/esm/index.js";
import { init_cursor_rules_pb } from "../../../proto/dist/generated/agent/v1/cursor_rules_pb.js";
import { init_dist3 } from "../../../utils/dist/index.js";
var import_node_path78, SEP2, normalizePath2, SKILL_DIR_SEGMENTS;
export { SEP2, SKILL_DIR_SEGMENTS, import_node_path78, normalizePath2 };
var __wakaru_init_cursor_rule_matching_initialized = false;
export function init_cursor_rule_matching() {
if (__wakaru_init_cursor_rule_matching_initialized) return;
__wakaru_init_cursor_rule_matching_initialized = true;
"use strict";
import_node_path78 = require("node:path");
init_cursor_rules_pb();
init_dist3();
init_esm8();
SEP2 = "/";
normalizePath2 = (value)=>{
    const normalized = import_node_path78.posix.normalize(normalizeToUnixPath(value));
    if (normalized === SEP2) {
        return SEP2;
    }
    return normalized.replace(/\/+$/, "");
};
SKILL_DIR_SEGMENTS = [
    [
        ".cursor",
        "skills"
    ],
    [
        ".cursor",
        "skills-cursor"
    ],
    [
        ".agents",
        "skills"
    ],
    [
        ".claude",
        "skills"
    ],
    [
        ".codex",
        "skills"
    ],
    [
        ".grok",
        "skills"
    ]
];

}
