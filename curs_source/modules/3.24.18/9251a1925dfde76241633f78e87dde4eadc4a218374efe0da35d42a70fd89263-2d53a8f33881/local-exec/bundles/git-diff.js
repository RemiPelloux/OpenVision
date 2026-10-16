import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { init_dist11 } from "../../git-core/dist/index.js";
import { init_git_diff_parser } from "./git-diff-parser.js";
import { getLocalGitDiff } from "../../mcp_sandbox_policy_exports.js";
import { init_utils_pb2 } from "../../proto/dist/generated/aiserver/v1/utils_pb.js";
var fs14, import_node_path57, logger26, COMMON_DEFAULT_BRANCHES, LocalGitDiffExecutor;
export { COMMON_DEFAULT_BRANCHES, LocalGitDiffExecutor, fs14, import_node_path57, logger26 };
var __wakaru_init_git_diff3_initialized = false;
export function init_git_diff3() {
if (__wakaru_init_git_diff3_initialized) return;
__wakaru_init_git_diff3_initialized = true;
"use strict";
fs14 = __toESM(require("node:fs/promises"), 1);
import_node_path57 = __toESM(require("node:path"), 1);
init_dist();
init_dist11();
init_utils_pb2();
init_git_diff_parser();
logger26 = createLogger("local-git-diff");
COMMON_DEFAULT_BRANCHES = [
    "main",
    "master",
    "develop"
];
LocalGitDiffExecutor = class {
    async execute(ctx, args) {
        return getLocalGitDiff(ctx, args.cwd, args);
    }
};

}
