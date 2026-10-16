import { init_read } from "./read.js";
import { MAX_TEXT_SIZE } from "../../constants/dist/composer.js";
import { init_dist2 } from "../../constants/dist/index.js";
import { annotateExpandedCallResult, createCounter, createHistogram, describeExpandedCallFailure, expandSymbolicPathArguments } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { init_esm2 } from "../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_mcp_exec_pb } from "../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { init_read_exec_pb } from "../../proto/dist/generated/agent/v1/read_exec_pb.js";
import { init_dist3 } from "../../utils/dist/index.js";
var SYMBOLIC_PATH_ARGUMENT_PREFIX, SYMBOLIC_PATH_ARGUMENT_MAX_FILE_BYTES, SYMBOLIC_PATH_ARGUMENTS_MAX_TOTAL_BYTES, SYMBOLIC_PATH_ARGUMENTS_MAX_COUNT, expansionOutcomes, expansionBytes, describeReads, expansionPaths, SymbolicPathReadError, BODY_REJECTION_PATTERN, SymbolicPathExpandingMcpExecutor;
export { BODY_REJECTION_PATTERN, SYMBOLIC_PATH_ARGUMENTS_MAX_COUNT, SYMBOLIC_PATH_ARGUMENTS_MAX_TOTAL_BYTES, SYMBOLIC_PATH_ARGUMENT_MAX_FILE_BYTES, SYMBOLIC_PATH_ARGUMENT_PREFIX, SymbolicPathExpandingMcpExecutor, SymbolicPathReadError, describeReads, expansionBytes, expansionOutcomes, expansionPaths };
var __wakaru_init_symbolic_path_args_initialized = false;
export function init_symbolic_path_args() {
if (__wakaru_init_symbolic_path_args_initialized) return;
__wakaru_init_symbolic_path_args_initialized = true;
"use strict";
init_dist2();
init_dist4();
init_mcp_exec_pb();
init_read_exec_pb();
init_dist3();
init_esm2();
init_read();
SYMBOLIC_PATH_ARGUMENT_PREFIX = "$file:";
SYMBOLIC_PATH_ARGUMENT_MAX_FILE_BYTES = MAX_TEXT_SIZE;
SYMBOLIC_PATH_ARGUMENTS_MAX_TOTAL_BYTES = 16 * 1024 * 1024;
SYMBOLIC_PATH_ARGUMENTS_MAX_COUNT = 4;
expansionOutcomes = createCounter("mcp.symbolic_args.expansion", {
    description: "Outcome of late-binding $file:/abs/path MCP argument expansion at the executor boundary",
    labelNames: [
        "route",
        "outcome"
    ]
});
expansionBytes = createHistogram("mcp.symbolic_args.bytes", {
    description: "Total bytes substituted into one MCP tool call by $file:/abs/path arguments",
    labelNames: [
        "route"
    ]
});
describeReads = createCounter("mcp.symbolic_args.describe", {
    description: "Per-file $file:/abs/path describe reads: `vm_digest` when the read executor hashed the file where it lives, `outdated_executor` when it returned the text instead (it predates $file: expansion, so the call is refused)",
    labelNames: [
        "source"
    ]
});
expansionPaths = createHistogram("mcp.symbolic_args.paths", {
    description: "Number of distinct $file:/abs/path arguments expanded in one MCP tool call",
    labelNames: [
        "route"
    ]
});
SymbolicPathReadError = class extends Error {
    constructor(failure2){
        super(failure2.message);
        this.failure = failure2;
    }
};
BODY_REJECTION_PATTERN = /\b413\b|payload too large|request entity too large|body.*too large|too large.*body|ECONNRESET|EPIPE|socket hang up|max(?:imum)? (?:body|payload|request|content) (?:size|length)/i;
SymbolicPathExpandingMcpExecutor = class {
    constructor(inner, getReadExecutor){
        this.inner = inner;
        this.getReadExecutor = getReadExecutor;
    }
    isBackendRouted(providerIdentifier) {
        return this.inner.isBackendRouted?.(providerIdentifier) ?? false;
    }
    async execute(ctx, args, options2) {
        if (args.symbolicPathArguments.length === 0) {
            return this.inner.execute(ctx, args, options2);
        }
        const outcome = await expandSymbolicPathArguments(ctx, args, {
            route: "local",
            getReadExecutor: this.getReadExecutor
        });
        if (outcome.kind === "none") {
            return this.inner.execute(ctx, args, options2);
        }
        if (outcome.kind === "failed") {
            return outcome.result;
        }
        let result;
        try {
            result = await this.inner.execute(ctx, outcome.expansion.args, options2);
        } catch (error3) {
            if (error3 instanceof Error) {
                error3.message = describeExpandedCallFailure(ctx, error3.message, outcome.expansion, "local");
            }
            throw error3;
        }
        return annotateExpandedCallResult(ctx, result, outcome.expansion, "local");
    }
};

}
