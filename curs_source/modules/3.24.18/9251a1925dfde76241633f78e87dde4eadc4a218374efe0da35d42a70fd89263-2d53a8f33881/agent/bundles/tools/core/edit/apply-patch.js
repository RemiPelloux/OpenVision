import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { ToolCallArgParseError, ToolCallError, init_common9, withSafeRawArgs } from "../../common.js";
import { CodexError, EOF_MARKER, PATCH_PREFIX, PATCH_SUFFIX, Parser3, init_codex_parser } from "./codex-parser.js";
import { FileNotFoundError, InvalidEditArgsError, getDiffString, init_common15 } from "./common.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { external_exports } from "../../../../../external_exports.js";
import { assertPlanModeAllowsFileEdit, createCall, createEditToolCall, createZodAgentTool, editTransformResultToEditResult, inferFilePathFromPatch, normalizeLineEndings, performEdit, performWrite, renderEditResult, unwrapFunctionToolPatch } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { ToolCallDelta, init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { EditArgs, EditError, EditResult, EditToolCall, EditToolCallDelta, init_edit_tool_pb } from "../../../../../proto/dist/generated/agent/v1/edit_tool_pb.js";
var __addDisposableResource82, __disposeResources82, parametersSchema10, description, createApplyPatchTool;
export { __addDisposableResource82, __disposeResources82, createApplyPatchTool, description, parametersSchema10 };
var __wakaru_init_apply_patch_initialized = false;
export function init_apply_patch() {
if (__wakaru_init_apply_patch_initialized) return;
__wakaru_init_apply_patch_initialized = true;
"use strict";
init_dist();
init_agent_pb();
init_edit_tool_pb();
init_zod();
init_common9();
init_codex_parser();
init_common15();
__addDisposableResource82 = function(env, value, async) {
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
__disposeResources82 = (function(SuppressedError2) {
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
parametersSchema10 = external_exports.object({
    patch: external_exports.string().describe("The patch to apply to the file")
});
description = `Use this tool to edit files.
Your patch language is a stripped-down, file-oriented diff format designed to be easy to parse and safe to apply. You can think of it as a high-level envelope:

*** Begin Patch
[ one file section ]
*** End Patch

Within that envelope, you get one file operation.
You MUST include a header to specify the action you are taking.
Each operation starts with one of two headers:

*** Add File: <path> - create a new file. Every following line is a + line (the initial contents).
*** Update File: <path> - patch an existing file in place (optionally with a rename).

Then one or more "hunks", each introduced by @@ (optionally followed by a hunk header).
Within a hunk each line starts with:

For instructions on [context_before] and [context_after]:
- By default, show 3 lines of code immediately above and 3 lines immediately below each change. If a change is within 3 lines of a previous change, do NOT duplicate the first change's [context_after] lines in the second change's [context_before] lines.
- If 3 lines of context is insufficient to uniquely identify the snippet of code within the file, use the @@ operator to indicate the class or function to which the snippet belongs. For instance, we might have:
@@ class BaseClass
[3 lines of pre-context]
- [old_code]
+ [new_code]
[3 lines of post-context]

- If a code block is repeated so many times in a class or function such that even a single \`@@\` statement and 3 lines of context cannot uniquely identify the snippet of code, you can use multiple \`@@\` statements to jump to the right context. For instance:

@@ class BaseClass
@@ 	def method():
[3 lines of pre-context]
- [old_code]
+ [new_code]
[3 lines of post-context]

The full grammar definition is below:
Patch := Begin { FileOp } End
Begin := "*** Begin Patch" NEWLINE
End := "*** End Patch" NEWLINE
FileOp := AddFile | UpdateFile
AddFile := "*** Add File: " path NEWLINE { "+" line NEWLINE }
UpdateFile := "*** Update File: " path NEWLINE { Hunk }
Hunk := "@@" [ header ] NEWLINE { HunkLine } [ "*** End of File" NEWLINE ]
HunkLine := (" " | "-" | "+") text NEWLINE

Example for Update File:
*** Begin Patch
*** Update File: pygorithm/searching/binary_search.py
@@ class BaseClass
@@     def search():
-          pass
+          raise NotImplementedError()

@@ class Subclass
@@     def search():
-          pass
+          raise NotImplementedError()
*** End Patch

Example for Add File:
*** Begin Patch
*** Add File: [path/to/file]
+ [new_code]
*** End Patch

It is important to remember:
- You must only include one file per call
- You must include a header with your intended action (Add/Update)
- You must prefix new lines with \` +\` even when creating a new file

All file paths must be absolute paths. Make sure to read the file before applying a patch to get the latest file content, unless you are creating a new file.
`;
createApplyPatchTool = (resourceAccessor, _formattingOptions, fileOperationLockManager, stateHandler, featureFlags)=>{
    const execute = async (parentCtx, interactionHandler, rawPatchContent, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource82(env_1, createSpan(parentCtx.withName("applyPatchExecute")), false);
            const normalizedPatchContent = normalizeLineEndings(unwrapFunctionToolPatch(rawPatchContent).trim(), "\n");
            const filePathFromPatch = inferFilePathFromPatch(normalizedPatchContent);
            const resolvedFilePath = filePathFromPatch;
            if (resolvedFilePath === void 0) {
                throw new ToolCallArgParseError("Missing *** Add/Update File header.");
            }
            const targetFilePath = resolvedFilePath;
            assertPlanModeAllowsFileEdit(targetFilePath, stateHandler);
            const _lockHandle = __addDisposableResource82(env_1, await fileOperationLockManager.waitForLock(spanCtxt.ctx, targetFilePath), false);
            const args = new EditArgs({
                path: targetFilePath
            });
            const baseToolCall = new EditToolCall({
                args,
                result: void 0
            });
            interactionHandler.emitPartialToolCall(spanCtxt.ctx, meta.toolCallId, createCall(baseToolCall));
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                try {
                    const performEditResult = await performEdit(ctx, resourceAccessor, targetFilePath, async (_ctx, original)=>{
                        const patchContent = normalizedPatchContent;
                        const text4 = normalizeLineEndings(original, "\n");
                        let isAddFileOperation = false;
                        try {
                            const lines2 = patchContent.split("\n");
                            if (lines2[0].includes(EOF_MARKER)) {
                                lines2.splice(0, 1);
                            }
                            if (lines2[lines2.length - 1].includes(EOF_MARKER)) {
                                lines2.splice(lines2.length - 1, 1);
                            }
                            if (lines2.length < 2 || !lines2[0]?.startsWith(PATCH_PREFIX) || !lines2[lines2.length - 1]?.startsWith(PATCH_SUFFIX)) {
                                const modelVisibleErrorMessage = `Invalid patch format. Your diff must begin with ${PATCH_PREFIX} and end with ${PATCH_SUFFIX}.`;
                                throw new InvalidEditArgsError({
                                    error: modelVisibleErrorMessage,
                                    clientVisibleErrorMessage: "Invalid patch format",
                                    modelVisibleErrorMessage
                                });
                            }
                            isAddFileOperation = lines2[1]?.startsWith("*** Add File") ?? false;
                            if (lines2[1]?.startsWith("*** Update File") || lines2[1]?.startsWith("*** Add File")) {
                                lines2.splice(1, 1);
                            }
                            const parser = new Parser3(lines2);
                            parser.index = 1;
                            const action = parser.parse(text4);
                            const eolSequence = original.includes("\r\n") ? "\r\n" : "\n";
                            const { citations, newLines } = parser.apply_patch(text4, action);
                            const { diffString, linesAdded, linesRemoved } = await getDiffString({
                                original,
                                new: newLines.join("\n"),
                                filePath: targetFilePath,
                                fileChangeType: "modified"
                            });
                            const modifiedNormalized = newLines.join("\n");
                            const modified = normalizeLineEndings(modifiedNormalized, eolSequence);
                            let resultForModel = "";
                            if (citations.length > 0) {
                                resultForModel = `The file ${targetFilePath} has been updated.`;
                            } else {
                                resultForModel = `No changes to the file were made.`;
                            }
                            return {
                                modified,
                                edit: {
                                    resultForModel,
                                    linesAdded,
                                    linesRemoved,
                                    diffString
                                }
                            };
                        } catch (error3) {
                            if (error3 instanceof ToolCallError) {
                                throw error3;
                            }
                            if (error3 instanceof CodexError) {
                                const modelVisibleErrorMessage = isAddFileOperation ? "There was an error applying the patch, and it was NOT applied. Make sure to follow the patch format and add `+` to the beginning of each line.\n\n" + error3.message : "There was an error applying the patch, and it was NOT applied. Read the file before trying again as the user may have changed the file since you last read it.\n\n" + error3.message;
                                throw new InvalidEditArgsError({
                                    error: error3.message,
                                    modelVisibleErrorMessage,
                                    clientVisibleErrorMessage: "Invalid patch provided"
                                });
                            }
                            const errorMessage4 = error3 instanceof Error ? error3.message : "Unknown error";
                            throw new ToolCallError({
                                clientVisibleErrorMessage: "Error applying patch",
                                modelVisibleErrorMessage: errorMessage4,
                                error: errorMessage4
                            });
                        }
                    }, meta, stateHandler);
                    return editTransformResultToEditResult(targetFilePath, performEditResult, {
                        omitBeforeAfterFileStates: featureFlags?.omitEditBeforeAfterFileStates
                    });
                } catch (error3) {
                    if (!(error3 instanceof FileNotFoundError)) {
                        throw error3;
                    }
                    const patchContent = normalizedPatchContent;
                    const lines2 = patchContent.split("\n");
                    if (lines2[0].includes(EOF_MARKER)) {
                        lines2.splice(0, 1);
                    }
                    if (lines2[lines2.length - 1].includes(EOF_MARKER)) {
                        lines2.splice(lines2.length - 1, 1);
                    }
                    if (lines2.length < 2 || !lines2[0]?.startsWith(PATCH_PREFIX) || !lines2[lines2.length - 1]?.startsWith(PATCH_SUFFIX)) {
                        const modelVisibleErrorMessage = `Invalid patch format. Your diff must begin with ${PATCH_PREFIX} and end with ${PATCH_SUFFIX}.`;
                        throw new InvalidEditArgsError({
                            error: modelVisibleErrorMessage,
                            modelVisibleErrorMessage,
                            clientVisibleErrorMessage: "Invalid patch format"
                        });
                    }
                    if (lines2[1]?.startsWith("*** Update File") || lines2[1]?.startsWith("*** Add File")) {
                        lines2.splice(1, 1);
                    }
                    const parser = new Parser3(lines2);
                    parser.index = 1;
                    let action;
                    try {
                        action = parser.parse("");
                    } catch (parseError) {
                        if (parseError instanceof CodexError) {
                            const errorMsg = "There was an error applying the patch, and it was NOT applied. Make sure to follow the patch format and add `+` to the beginning of each line.\n\n" + parseError.message;
                            throw new InvalidEditArgsError({
                                error: parseError.message,
                                modelVisibleErrorMessage: errorMsg,
                                clientVisibleErrorMessage: "Invalid patch provided"
                            });
                        }
                        throw parseError;
                    }
                    let newLines;
                    try {
                        const result2 = parser.apply_patch("", action);
                        newLines = result2.newLines;
                    } catch (applyError) {
                        if (applyError instanceof CodexError) {
                            const errorMsg = "There was an error applying the patch, and it was NOT applied. Make sure to follow the patch format and add `+` to the beginning of each line.\n\n" + applyError.message;
                            throw new InvalidEditArgsError({
                                error: applyError.message,
                                modelVisibleErrorMessage: errorMsg,
                                clientVisibleErrorMessage: "Invalid patch provided"
                            });
                        }
                        throw applyError;
                    }
                    const { diffString, linesAdded, linesRemoved } = await getDiffString({
                        original: "",
                        new: newLines.join("\n"),
                        filePath: targetFilePath,
                        fileChangeType: "added"
                    });
                    const modified = newLines.join("\n");
                    const resultForModel = `Success. Updated the following files:
A ${targetFilePath}`;
                    const performEditResult = await performWrite(ctx, resourceAccessor, targetFilePath, modified, {
                        resultForModel,
                        linesAdded,
                        linesRemoved,
                        diffString,
                        originalContent: void 0
                    }, meta, stateHandler);
                    return editTransformResultToEditResult(targetFilePath, performEditResult, {
                        omitBeforeAfterFileStates: featureFlags?.omitEditBeforeAfterFileStates
                    });
                }
            }, (result2)=>createCall(new EditToolCall({
                    ...baseToolCall,
                    result: result2
                })), meta.hookContextCollector);
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources82(env_1);
        }
    };
    const onStreamingChunk = ()=>{
        let hasEmittedStreamingToolCall = false;
        return (accumulatedText)=>{
            if (hasEmittedStreamingToolCall) {
                return void 0;
            }
            const filePath = inferFilePathFromPatch(accumulatedText);
            if (filePath) {
                hasEmittedStreamingToolCall = true;
                return createCall(new EditToolCall({
                    args: new EditArgs({
                        path: filePath,
                        streamContent: void 0
                    }),
                    result: void 0
                }));
            }
            return void 0;
        };
    };
    const onArgPreservationChunk = ()=>{
        let hasPreservedStreamingToolCall = false;
        return (accumulatedText)=>{
            if (hasPreservedStreamingToolCall) {
                return void 0;
            }
            const filePath = inferFilePathFromPatch(accumulatedText);
            if (filePath) {
                hasPreservedStreamingToolCall = true;
                return createCall(new EditToolCall({
                    args: new EditArgs({
                        path: filePath,
                        streamContent: accumulatedText
                    }),
                    result: void 0
                }));
            }
            return void 0;
        };
    };
    const onStreamingDelta = ()=>{
        let hasFoundFilePath = false;
        let accumulatedText = "";
        return (chunk)=>{
            if (!hasFoundFilePath) {
                accumulatedText += chunk;
                const filePath = inferFilePathFromPatch(accumulatedText);
                if (filePath) {
                    hasFoundFilePath = true;
                }
                return void 0;
            } else if (accumulatedText.length > 0) {
                accumulatedText = "";
            }
            return new ToolCallDelta({
                delta: {
                    case: "editToolCallDelta",
                    value: new EditToolCallDelta({
                        streamContentDelta: chunk
                    })
                }
            });
        };
    };
    return createZodAgentTool("APPLY_PATCH", {
        name: "ApplyPatch",
        descriptionGenerator: (_props)=>description,
        parameters: parametersSchema10,
        execute: withSafeRawArgs(execute, createEditToolCall(new EditToolCall()), {
            onStreamingChunk,
            onStreamingDelta,
            onArgPreservationChunk
        }),
        render: renderEditResult,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createEditToolCall(new EditToolCall({
                result: new EditResult({
                    result: {
                        case: "error",
                        value: new EditError({
                            path: "",
                            error: errorMessage4
                        })
                    }
                })
            }));
        },
        customToolFormat: {
            type: "grammar",
            definition: `start: begin_patch hunk end_patch
begin_patch: "*** Begin Patch" LF
end_patch: "*** End Patch" LF?

hunk: add_hunk | update_hunk
add_hunk: "*** Add File: " filename LF add_line+
update_hunk: "*** Update File: " filename LF change?

filename: /(.+)/
add_line: "+" /(.*)/ LF -> line

change: (change_context | change_line)+ eof_line?

change_context: ("@@" | "@@ " /(.+)/) LF
change_line: ("+" | "-" | " ") /(.*)/ LF
eof_line: "*** End of File" LF

%import common.LF
`,
            syntax: "lark"
        }
    });
};

}
