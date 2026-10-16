import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { init_common9 } from "../common.js";
import { init_worktree_paths } from "../core/worktree-paths.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { external_exports } from "../../../../external_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_pi_bash_exec_pb } from "../../../../proto/dist/generated/agent/v1/pi_bash_exec_pb.js";
import { init_pi_bash_tool_pb } from "../../../../proto/dist/generated/agent/v1/pi_bash_tool_pb.js";
import { init_pi_edit_exec_pb } from "../../../../proto/dist/generated/agent/v1/pi_edit_exec_pb.js";
import { init_pi_edit_tool_pb } from "../../../../proto/dist/generated/agent/v1/pi_edit_tool_pb.js";
import { init_pi_find_exec_pb } from "../../../../proto/dist/generated/agent/v1/pi_find_exec_pb.js";
import { init_pi_find_tool_pb } from "../../../../proto/dist/generated/agent/v1/pi_find_tool_pb.js";
import { init_pi_grep_exec_pb } from "../../../../proto/dist/generated/agent/v1/pi_grep_exec_pb.js";
import { init_pi_grep_tool_pb } from "../../../../proto/dist/generated/agent/v1/pi_grep_tool_pb.js";
import { init_pi_ls_exec_pb } from "../../../../proto/dist/generated/agent/v1/pi_ls_exec_pb.js";
import { init_pi_ls_tool_pb } from "../../../../proto/dist/generated/agent/v1/pi_ls_tool_pb.js";
import { init_pi_read_exec_pb } from "../../../../proto/dist/generated/agent/v1/pi_read_exec_pb.js";
import { init_pi_read_tool_pb } from "../../../../proto/dist/generated/agent/v1/pi_read_tool_pb.js";
import { init_pi_write_exec_pb } from "../../../../proto/dist/generated/agent/v1/pi_write_exec_pb.js";
import { init_pi_write_tool_pb } from "../../../../proto/dist/generated/agent/v1/pi_write_tool_pb.js";
var __addDisposableResource108, __disposeResources108, editReplacementSchema, readSchema, bashSchema, editSchema, writeSchema, grepSchema, findSchema, lsSchema;
export { __addDisposableResource108, __disposeResources108, bashSchema, editReplacementSchema, editSchema, findSchema, grepSchema, lsSchema, readSchema, writeSchema };
var __wakaru_init_pi_tools_initialized = false;
export function init_pi_tools() {
if (__wakaru_init_pi_tools_initialized) return;
__wakaru_init_pi_tools_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_dist();
init_agent_pb();
init_pi_bash_exec_pb();
init_pi_bash_tool_pb();
init_pi_edit_exec_pb();
init_pi_edit_tool_pb();
init_pi_find_exec_pb();
init_pi_find_tool_pb();
init_pi_grep_exec_pb();
init_pi_grep_tool_pb();
init_pi_ls_exec_pb();
init_pi_ls_tool_pb();
init_pi_read_exec_pb();
init_pi_read_tool_pb();
init_pi_write_exec_pb();
init_pi_write_tool_pb();
init_zod();
init_common9();
init_worktree_paths();
__addDisposableResource108 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources108 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
editReplacementSchema = external_exports.object({
    oldText: external_exports.string().describe("Exact text for one targeted replacement. It must be unique in the original file and must not overlap with any other edits[].oldText in the same call."),
    newText: external_exports.string().describe("Replacement text for this targeted edit.")
});
readSchema = external_exports.object({
    path: external_exports.string().describe("Path to the file to read (relative or absolute)"),
    offset: external_exports.number().optional().describe("Line number to start reading from (1-indexed)"),
    limit: external_exports.number().optional().describe("Maximum number of lines to read")
});
bashSchema = external_exports.object({
    command: external_exports.string().describe("Bash command to execute"),
    timeout: external_exports.number().optional().describe("Timeout in seconds (optional, no default timeout)")
});
editSchema = external_exports.object({
    path: external_exports.string().describe("Path to the file to edit (relative or absolute)"),
    edits: external_exports.array(editReplacementSchema).describe("One or more targeted replacements.")
});
writeSchema = external_exports.object({
    path: external_exports.string().describe("Path to the file to write (relative or absolute)"),
    content: external_exports.string().describe("Content to write to the file")
});
grepSchema = external_exports.object({
    pattern: external_exports.string().describe("Search pattern (regex or literal string)"),
    path: external_exports.string().optional().describe("Directory or file to search (default: current directory)"),
    glob: external_exports.string().optional().describe("Filter files by glob pattern, e.g. '*.ts' or '**/*.spec.ts'"),
    ignoreCase: external_exports.boolean().optional().describe("Case-insensitive search (default: false)"),
    literal: external_exports.boolean().optional().describe("Treat pattern as literal string instead of regex (default: false)"),
    context: external_exports.number().optional().describe("Number of lines to show before and after each match (default: 0)"),
    limit: external_exports.number().optional().describe("Maximum number of matches to return (default: 100)")
});
findSchema = external_exports.object({
    pattern: external_exports.string().describe("Glob pattern to match files, e.g. '*.ts', '**/*.json', or 'src/**/*.spec.ts'"),
    path: external_exports.string().optional().describe("Directory to search in (default: current directory)"),
    limit: external_exports.number().optional().describe("Maximum number of results (default: 1000)")
});
lsSchema = external_exports.object({
    path: external_exports.string().optional().describe("Directory to list (default: current directory)"),
    limit: external_exports.number().optional().describe("Maximum number of entries to return (default: 500)")
});

}
