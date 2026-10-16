import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { CustomToolCallError, ToolCallError, init_common9 } from "../../common.js";
import { ToolErrorClassification, init_core5 } from "../../core.js";
import { getDiffString, init_common15, serializeEditError, withStreamingEditParsedArgs } from "./common.js";
import { init_notebook_utils } from "../notebook-utils.js";
import { init_lenient_boolean } from "../../lenient-boolean.js";
import { init_lenient_number } from "../../lenient-number.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { external_exports } from "../../../../../external_exports.js";
import { assertPlanModeAllowsFileEdit, createCall2, createEditToolCall, createNotebookCell, createZodAgentTool, editTransformResultToEditResult, extractCellSource, generateCellId, getCellTypeFromLanguage, isCellIdRequired, lenientBoolean, lenientNumber, parseNotebook, performEdit, renderEditResult, runSingleEdit, splitContentIntoSourceLines } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { EditArgs, EditToolCall, init_edit_tool_pb } from "../../../../../proto/dist/generated/agent/v1/edit_tool_pb.js";
var __addDisposableResource83, __disposeResources83, parametersSchema11, createEditNotebookTool;
export { __addDisposableResource83, __disposeResources83, createEditNotebookTool, parametersSchema11 };
var __wakaru_init_edit_notebook_initialized = false;
export function init_edit_notebook() {
if (__wakaru_init_edit_notebook_initialized) return;
__wakaru_init_edit_notebook_initialized = true;
"use strict";
init_dist();
init_agent_pb();
init_edit_tool_pb();
init_zod();
init_common9();
init_core5();
init_lenient_boolean();
init_lenient_number();
init_notebook_utils();
init_common15();
__addDisposableResource83 = function(env, value, async) {
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
__disposeResources83 = (function(SuppressedError2) {
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
parametersSchema11 = external_exports.object({
    target_notebook: external_exports.string().describe("The path to the notebook file you want to edit. You can use either a relative path in the workspace or an absolute path. If an absolute path is provided, it will be preserved as is."),
    cell_idx: lenientNumber().describe("The index of the cell to edit (0-based)"),
    is_new_cell: lenientBoolean().describe("If true, a new cell will be created at the specified cell index. If false, the cell at the specified cell index will be edited."),
    cell_language: external_exports.string().describe("The language of the cell to edit. Should be STRICTLY one of these: 'python', 'markdown', 'javascript', 'typescript', 'r', 'sql', 'shell', 'raw' or 'other'."),
    old_string: external_exports.string().describe("The text to replace (must be unique within the cell, and must match the cell contents exactly, including all whitespace and indentation)."),
    new_string: external_exports.string().describe("The edited text to replace the old_string or the content for the new cell.")
});
createEditNotebookTool = (resourceAccessor, formattingOptions, fileOperationLockManager, stateHandler, promptVersion = "latest", _modelInfo, featureFlags)=>{
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource83(env_1, createSpan(parentCtx.withName("editNotebookExecute")), false);
            assertPlanModeAllowsFileEdit(rawArgs.target_notebook, stateHandler);
            const args = new EditArgs({
                path: rawArgs.target_notebook,
                streamContent: rawArgs.new_string
            });
            const editTool = new EditToolCall({
                args,
                result: void 0
            });
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createCall2(editTool), meta.toolCallId, async (ctx)=>{
                const performEditResult = await performEdit(ctx, resourceAccessor, rawArgs.target_notebook, async (ctx2, original)=>{
                    const eolSequence = "\n";
                    const parseResult = parseNotebook(original);
                    if (!parseResult.success) {
                        throw new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                            error: parseResult.error,
                            clientVisibleErrorMessage: "Invalid notebook format",
                            modelVisibleErrorMessage: parseResult.errorDetails || parseResult.error
                        });
                    }
                    const notebook = parseResult.notebook;
                    if (rawArgs.is_new_cell) {
                        if (rawArgs.old_string !== "") {
                            throw new ToolCallError({
                                error: "old_string must be empty when creating a new cell",
                                clientVisibleErrorMessage: "Invalid arguments for creating new cell",
                                modelVisibleErrorMessage: "old_string must be empty when is_new_cell is true"
                            });
                        }
                        const cellType = getCellTypeFromLanguage(rawArgs.cell_language);
                        const cellId = isCellIdRequired(notebook) ? generateCellId() : void 0;
                        const newCell = createNotebookCell({
                            content: rawArgs.new_string,
                            cellType,
                            cellId
                        });
                        notebook.cells.splice(rawArgs.cell_idx, 0, newCell);
                        const modifiedNotebook = JSON.stringify(notebook, null, 2);
                        const { diffString, linesAdded, linesRemoved } = await getDiffString({
                            original: "",
                            new: rawArgs.new_string,
                            filePath: rawArgs.target_notebook,
                            fileChangeType: "modified"
                        });
                        const resultForModel = `A new ${rawArgs.cell_language} cell was created at index ${rawArgs.cell_idx} in notebook ${rawArgs.target_notebook}.`;
                        return {
                            modified: modifiedNotebook,
                            edit: {
                                resultForModel,
                                linesAdded,
                                linesRemoved,
                                diffString,
                                beforeContentToReturn: "",
                                afterContentToReturn: rawArgs.new_string
                            }
                        };
                    } else {
                        if (rawArgs.cell_idx < 0 || rawArgs.cell_idx >= notebook.cells.length) {
                            throw new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                                error: `Cell index ${rawArgs.cell_idx} out of range`,
                                clientVisibleErrorMessage: "Cell index out of range",
                                modelVisibleErrorMessage: `Cell index ${rawArgs.cell_idx} is out of range. The notebook has ${notebook.cells.length} cells (indices 0-${notebook.cells.length - 1}).`
                            });
                        }
                        const cell = notebook.cells[rawArgs.cell_idx];
                        if (!cell || cell.source === void 0) {
                            throw new ToolCallError({
                                error: `Cell at index ${rawArgs.cell_idx} is invalid`,
                                clientVisibleErrorMessage: "Invalid cell",
                                modelVisibleErrorMessage: `Cell at index ${rawArgs.cell_idx} does not have a valid source field`
                            });
                        }
                        const cellContent = extractCellSource(cell);
                        let contentsAfterEdit;
                        if (rawArgs.old_string === "") {
                            if (cellContent !== "") {
                                throw new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                                    error: "old_string is empty but cell has content",
                                    clientVisibleErrorMessage: "Model failed to call the tool with correct arguments.",
                                    modelVisibleErrorMessage: "old_string is empty but the cell has existing content. Provide the content to replace in old_string."
                                });
                            }
                            contentsAfterEdit = rawArgs.new_string;
                        } else {
                            const result2 = runSingleEdit(ctx2, {
                                formattingOptions,
                                contentsBeforeEdit: cellContent,
                                eolSequence,
                                edit: {
                                    old_string: rawArgs.old_string,
                                    new_string: rawArgs.new_string,
                                    replace_all: false
                                },
                                includeLineNumbers: true,
                                multiFile: false,
                                useWhitespaceInsensitiveFallback: true
                            });
                            contentsAfterEdit = result2.contentsAfterEdit;
                        }
                        cell.source = splitContentIntoSourceLines(contentsAfterEdit);
                        const modifiedNotebook = JSON.stringify(notebook, null, 2);
                        const { diffString, linesAdded, linesRemoved } = await getDiffString({
                            original: cellContent,
                            new: contentsAfterEdit,
                            filePath: rawArgs.target_notebook,
                            fileChangeType: "modified"
                        });
                        const resultForModel = `The notebook cell at index ${rawArgs.cell_idx} in ${rawArgs.target_notebook} has been updated.`;
                        return {
                            modified: modifiedNotebook,
                            edit: {
                                resultForModel,
                                linesAdded,
                                linesRemoved,
                                diffString,
                                beforeContentToReturn: cellContent,
                                afterContentToReturn: contentsAfterEdit
                            }
                        };
                    }
                }, meta, stateHandler);
                return editTransformResultToEditResult(rawArgs.target_notebook, performEditResult, {
                    omitBeforeAfterFileStates: featureFlags?.omitEditBeforeAfterFileStates
                });
            }, (result2)=>createCall2(new EditToolCall({
                    ...editTool,
                    result: result2
                })), meta.hookContextCollector);
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources83(env_1);
        }
    };
    const render2 = renderEditResult;
    function getToolName10(version4) {
        switch(version4){
            case "dsv3-1018":
                return "edit_notebook";
            case "cursor-0226":
            case "dsv3-1205":
            case "latest":
            case "gpt5-codex":
            case "codex-cloud":
            case "haiku":
                return "EditNotebook";
            default:
                {
                    const _exhaustive = version4;
                    throw new Error(`Unhandled version: ${_exhaustive}`);
                }
        }
    }
    return createZodAgentTool("EDIT_NOTEBOOK", {
        name: getToolName10(promptVersion),
        descriptionGenerator: (_props)=>promptVersion === "cursor-0226" ? `Use this tool to edit a jupyter notebook cell.
Cell indices are 0-based. 'old_string' and 'new_string' should be a valid cell content, i.e. WITHOUT any JSON syntax that notebook files use under the hood. If you need to create a new notebook, just set 'is_new_cell' to true and cell_idx to 0.` : `Use this tool to edit a jupyter notebook cell. Use ONLY this tool to edit notebooks.

This tool supports editing existing cells and creating new cells:
	- If you need to edit an existing cell, set 'is_new_cell' to false and provide the 'old_string' and 'new_string'.
		-- The tool will replace ONE occurrence of 'old_string' with 'new_string' in the specified cell.
	- If you need to create a new cell, set 'is_new_cell' to true and provide the 'new_string' (and keep 'old_string' empty).
	- It's critical that you set the 'is_new_cell' flag correctly!
	- This tool does NOT support cell deletion, but you can delete the content of a cell by passing an empty string as the 'new_string'.

Other requirements:
	- Cell indices are 0-based.
	- 'old_string' and 'new_string' should be a valid cell content, i.e. WITHOUT any JSON syntax that notebook files use under the hood.
	- The old_string MUST uniquely identify the specific instance you want to change. This means:
		-- Include AT LEAST 3-5 lines of context BEFORE the change point
		-- Include AT LEAST 3-5 lines of context AFTER the change point
	- This tool can only change ONE instance at a time. If you need to change multiple instances:
		-- Make separate calls to this tool for each instance
		-- Each call must uniquely identify its specific instance using extensive context
	- This tool might save markdown cells as "raw" cells. Don't try to change it, it's fine. We need it to properly display the diff.
	- If you need to create a new notebook, just set 'is_new_cell' to true and cell_idx to 0.
	- ALWAYS generate arguments in the following order: target_notebook, cell_idx, is_new_cell, cell_language, old_string, new_string.
	- Prefer editing existing cells over creating new ones!
	- ALWAYS provide ALL required arguments (including BOTH old_string and new_string). NEVER call this tool without providing 'new_string'.`,
        parameters: parametersSchema11,
        execute: withStreamingEditParsedArgs(parametersSchema11, execute, createEditToolCall(new EditToolCall()), {
            path: "target_notebook",
            streamField: "new_string",
            fileOperationLockManager
        }),
        serializeError: serializeEditError,
        render: render2
    });
};

}
