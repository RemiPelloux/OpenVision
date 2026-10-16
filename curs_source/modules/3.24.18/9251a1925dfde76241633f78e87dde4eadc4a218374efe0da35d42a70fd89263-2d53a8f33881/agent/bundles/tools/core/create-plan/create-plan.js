import { init_dist7 } from "../../../../../agent-core/dist/index.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { ToolCallArgParseError, init_common9 } from "../../common.js";
import { init_backend_plan_utils } from "./backend-plan-utils.js";
import { init_common16 } from "./common.js";
import { init_tool_name } from "./tool-name.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { queryCreatePlan } from "../../../../../dist_exports.js";
import { external_exports } from "../../../../../external_exports.js";
import { Fragment, createBackendControlledPlanFile, createCreatePlanToolCall, createStreamingPlanParser, createStringResult, createZodAgentTool, getCreatePlanToolNameTowardsModel, jsx, jsxs, renderContent, toRedactedConversationPlan, toRedactedTodoItem } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_dist32 } from "../../../../../prompt-jsx/dist/index.js";
import { init_jsx_runtime } from "../../../../../prompt-jsx/dist/jsx-runtime.js";
import { ConversationPlan, init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { CreatePlanArgs, CreatePlanError, CreatePlanResult, CreatePlanSuccess, CreatePlanToolCall, init_create_plan_tool_pb } from "../../../../../proto/dist/generated/agent/v1/create_plan_tool_pb.js";
import { TodoItem, TodoStatus, init_todo_tool_pb } from "../../../../../proto/dist/generated/agent/v1/todo_tool_pb.js";
import { init_agent_v1 } from "../../../../../redacted-protos/dist/agent-v1.js";
import { fileUrlUtils } from "../../../../../utils/dist/file-url.js";
import { init_dist3 } from "../../../../../utils/dist/index.js";
var __addDisposableResource80, __disposeResources80, planSchema, nameSchema, overviewSchema, todoSchema, todosSchema, createCreatePlanTool;
export { __addDisposableResource80, __disposeResources80, createCreatePlanTool, nameSchema, overviewSchema, planSchema, todoSchema, todosSchema };
var __wakaru_init_create_plan_initialized = false;
export function init_create_plan() {
if (__wakaru_init_create_plan_initialized) return;
__wakaru_init_create_plan_initialized = true;
"use strict";
init_jsx_runtime();
init_dist7();
init_dist26();
init_dist();
init_dist32();
init_agent_pb();
init_create_plan_tool_pb();
init_todo_tool_pb();
init_agent_v1();
init_dist3();
init_zod();
init_common9();
init_backend_plan_utils();
init_common16();
init_tool_name();
__addDisposableResource80 = function(env, value, async) {
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
__disposeResources80 = (function(SuppressedError2) {
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
planSchema = external_exports.string().describe("A detailed, concrete plan for accomplishing the user's request");
nameSchema = external_exports.string().describe("A short 3-4 word name for the plan. IMPORTANT: This should only be provided on the FIRST CreatePlan call. On subsequent updates, this field will be ignored to keep the plan file name stable.");
overviewSchema = external_exports.string().describe("A 1-2 sentence high-level description of the plan that summarizes what will be accomplished");
todoSchema = external_exports.object({
    id: external_exports.string().describe("Unique identifier for the todo"),
    content: external_exports.string().describe("Description of the todo task")
});
todosSchema = external_exports.array(todoSchema).describe("Array of implementation todos");
createCreatePlanTool = (resourceAccessor, stateHandler, promptVersion, _enableAskQuestionTool, options2)=>{
    const planModePromptCitation = options2?.planModePromptCitation;
    const modelInfo = options2?.modelInfo;
    const enableCodeLineage = options2?.enableCodeLineage;
    const defaultAskQuestionToolName = _enableAskQuestionTool === false ? void 0 : options2?.askQuestionToolName ?? "AskQuestion";
    const useNewPlanModePrompts = options2?.useNewPlanModePrompts === true;
    const requestContext = options2?.requestContext;
    const artifactsFolderPath = requestContext?.env?.artifactsFolder;
    const backendControlledPlan = requestContext !== void 0 && typeof artifactsFolderPath === "string" && artifactsFolderPath.length > 0;
    const executeCore = async (_ctx, _interactionHandler, rawArgs)=>{
        if (rawArgs.plan === void 0 || rawArgs.plan === "") {
            throw new ToolCallArgParseError("Must provide a non-empty 'plan' for plan creation");
        }
        const finalArgs = new CreatePlanArgs({
            plan: rawArgs.plan,
            overview: rawArgs.overview,
            name: rawArgs.name,
            todos: rawArgs.todos?.map((todo)=>new TodoItem({
                    id: todo.id,
                    content: todo.content,
                    status: TodoStatus.PENDING,
                    createdAt: BigInt(Date.now()),
                    updatedAt: BigInt(Date.now())
                }))
        });
        return new CreatePlanToolCall({
            args: finalArgs,
            result: new CreatePlanResult({
                result: {
                    case: "success",
                    value: new CreatePlanSuccess()
                }
            })
        });
    };
    const executeToolLogic = async (ctx, toolCallId, args)=>{
        const conversationPlan = new ConversationPlan({
            plan: args.plan
        });
        stateHandler.setPlan(toRedactedConversationPlan(conversationPlan, stateHandler.getPrivacyMode()));
        if (args.todos && args.todos.length > 0) {
            stateHandler.setTodos(args.todos.map((t)=>toRedactedTodoItem(t, stateHandler.getPrivacyMode())));
        }
        let planUri;
        if (backendControlledPlan && requestContext !== void 0) {
            const backendPlan = await createBackendControlledPlanFile({
                ctx,
                resourceAccessor,
                args,
                toolCallId,
                requestContext
            });
            stateHandler.upsertPlanEntry(backendPlan.planRegistryEntry);
            planUri = backendPlan.planUri;
        }
        return new CreatePlanResult({
            result: {
                case: "success",
                value: new CreatePlanSuccess()
            },
            planUri
        });
    };
    const parametersSchema29 = external_exports.object({
        name: nameSchema.optional(),
        overview: overviewSchema.optional(),
        plan: planSchema,
        todos: todosSchema.optional()
    });
    const execute = async (parentCtx, interactionHandler, argsStream, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource80(env_1, createSpan(parentCtx.withName("createPlanExecute")), false);
            interactionHandler.emitPartialToolCall(spanCtxt.ctx, meta.toolCallId, createCreatePlanToolCall(new CreatePlanToolCall()));
            const { parser, flushPartialToolCall } = createStreamingPlanParser(spanCtxt.ctx, interactionHandler, meta, {
                emitPartialToolCalls: !backendControlledPlan
            });
            let args = "";
            for await (const chunk of argsStream){
                args += chunk;
                try {
                    parser.write(chunk);
                } catch (error3) {
                    if (error3 instanceof ToolCallArgParseError) {
                        throw error3;
                    }
                    const errorMessage4 = error3 instanceof Error ? error3.message : "Invalid JSON";
                    throw new ToolCallArgParseError(errorMessage4);
                }
            }
            flushPartialToolCall();
            let parsedJson;
            try {
                parsedJson = JSON.parse(args);
            } catch (error3) {
                const errorMessage4 = error3 instanceof Error ? error3.message : "Invalid JSON";
                throw new ToolCallArgParseError(errorMessage4);
            }
            const parsedArgs = parametersSchema29.safeParse(parsedJson);
            if (!parsedArgs.success) {
                throw new ToolCallArgParseError(`Invalid arguments: ${parsedArgs.error.message}`);
            }
            const rawArgs = parsedArgs.data;
            const createPlanTool = await executeCore(parentCtx, interactionHandler, rawArgs);
            const baseToolCall = new CreatePlanToolCall({
                args: createPlanTool.args,
                result: void 0
            });
            if (createPlanTool.args && !backendControlledPlan) {
                const execResult2 = await interactionHandler.executeToolCall(spanCtxt.ctx, createCreatePlanToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                    const queryResponse = await queryCreatePlan(interactionHandler.listener, ctx, createPlanTool.args, meta.toolCallId);
                    await executeToolLogic(ctx, meta.toolCallId, createPlanTool.args);
                    if (!queryResponse.result) {
                        throw new Error("Missing result in create plan response");
                    }
                    return queryResponse.result;
                }, (result)=>createCreatePlanToolCall(new CreatePlanToolCall({
                        ...baseToolCall,
                        result
                    })));
                return execResult2;
            }
            const execResult = await interactionHandler.executeToolCall(spanCtxt.ctx, createCreatePlanToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                if (createPlanTool.result?.result?.case === "success") {
                    return executeToolLogic(ctx, meta.toolCallId, createPlanTool.args);
                }
                return createPlanTool.result;
            }, (result)=>createCreatePlanToolCall(new CreatePlanToolCall({
                    ...baseToolCall,
                    result
                })));
            return execResult;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources80(env_1);
        }
    };
    const render2 = async (_ctx, createPlanResult, _props)=>{
        const { result, planUri } = createPlanResult;
        if (planUri) {
            const planPathForModel = fileUrlUtils.isFileUrl(planUri) ? fileUrlUtils.urlToPath(planUri) : planUri;
            return createStringResult(renderContent(jsxs(Fragment, {
                children: [
                    jsxs("p", {
                        children: [
                            "Plan file created at: ",
                            planPathForModel
                        ]
                    }),
                    jsx("p", {
                        children: "You can read the plan contents from this file. If at any point you can no longer find it there, the user may have moved it to the workspace .cursor/plans/ directory."
                    }),
                    jsx("p", {
                        children: "To update this plan, use your file editing tools directly on this file. The provided to-dos have been added to the file as well in the frontmatter, and should be edited there. Do NOT call create_plan again to update the plan."
                    })
                ]
            })));
        }
        switch(result?.case){
            case "success":
                return createStringResult("Plan created successfully");
            case "error":
                return createStringResult(`Error: ${result.value.error}`);
            case void 0:
                return createStringResult("Unknown error");
            default:
                {
                    const _exhaustiveCheck = result;
                    throw new Error(`Unhandled result case: ${String(_exhaustiveCheck)}`);
                }
        }
    };
    const updatePlanContent = `UPDATING THE PLAN:
- This tool creates a NEW plan file each time it is called
- The plan file URI will be returned in the tool result
- To update an existing plan, read and edit the plan file directly using your file editing tools
- Do NOT call this tool again to update an existing plan`;
    const taskOrganizationDescription = `TASK ORGANIZATION:

Use 'todos' for organizing implementation tasks:
- Each todo should be a clear, specific, and actionable task
- Each todo needs a unique ID (e.g., "setup-auth") and descriptive content
- If the plan is simple, provide just a few high-level todos or none at all`;
    const isC15 = modelInfo?.isComposer15 ?? false;
    const c15TaskOrganization = `When creating your plan, provide, optionally, a structured list of implementation todos:
- Each todo should be a clear, specific, and actionable task that can be tracked and completed
- If the plan is simple, you should provide just a few high-level todos or none at all
- Each todo needs:
  - A clear, unique ID (e.g., "setup-auth", "implement-ui", "add-tests")
  - A descriptive content explaining what needs to be done`;
    const c15UpdatePlan = `UPDATING THE PLAN:
- This tool creates a NEW plan file each time it is called
- The plan file URI will be returned in the tool result
- To update an existing plan, read and edit the plan file directly using your file editing tools
- Do NOT call this tool again to update an existing plan`;
    const refinedTaskOrganizationDescription = `TASK ORGANIZATION:

Use 'todos' for organizing implementation tasks:
- Each todo should be a clear, specific, and actionable task.
- Each todo needs a unique ID (e.g., "setup-auth") and descriptive content.
- For implementation plans, provide todos unless the change is truly trivial. If the plan is simple, provide just a few high-level todos.`;
    const refinedC15TaskOrganization = `TASK ORGANIZATION:

Use 'todos' for organizing implementation tasks:
- Each todo should be a clear, specific, and actionable task.
- Each todo needs a unique ID (e.g., "setup-auth") and descriptive content.
- For implementation plans, provide todos unless the change is truly trivial. If the plan is simple, provide just a few high-level todos.`;
    const getClarifyingQuestionGuidance = (allTools)=>{
        const askQuestionToolName = allTools.ASK_QUESTION?.name ?? defaultAskQuestionToolName;
        return askQuestionToolName === void 0 ? "Ask the user these questions and wait for the user's response prior to creating your plan." : `Present these to the user using the ${askQuestionToolName} tool.`;
    };
    const legacyDescription = (allTools)=>`Use this tool to create a concise plan for accomplishing the user's request. This tool should be called at the end of the planning phase to finalize and store the plan.

The plan you create should be properly formatted in markdown, using appropriate sections and headers. The plan should be very concise and actionable, providing the minimum amount of detail for the user to understand and action the plan. It may be helpful to identify the most important couple files you will change, and existing code you will leverage. Cite specific file paths and essential snippets of code.${!isC15 && (planModePromptCitation ?? false) ? " When mentioning files, use markdown links with the full file path (for example, `[backend/src/foo.ts](backend/src/foo.ts)`)." : ""} IMPORTANT: Do NOT use markdown tables in plan content (they cannot be rendered for the user); use bullet lists instead. The first line MUST BE A TITLE for the plan formatted as a level 1 markdown heading.

${isC15 ? c15TaskOrganization : taskOrganizationDescription}

${isC15 ? c15UpdatePlan : updatePlanContent}

Additional guidelines:
- Avoid asking clarifying questions in the plan itself. Ask them before calling this tool. ${getClarifyingQuestionGuidance(allTools)}
- Todos help break down complex plans into manageable, trackable tasks
- Focus on high-level meaningful decisions rather than low-level implementation details
- A good plan is glanceable, not a wall of text.${enableCodeLineage === true ? `
- If your research uncovered deliberate design decisions, past reversions, or intentional tradeoffs (from CodeLineage or git history), surface these as constraints in your plan. Explain what the proposed changes preserve, what they deliberately change, and how they relate to those prior decisions.` : ""}${isC15 ? `
- The plan will FAIL if arguments aren't given in order of name, overview, plan, todos. Follow the argument ordering.` : ""}`;
    const refinedDescription = (allTools)=>`Use this tool to create the approval plan for accomplishing the user's request. This tool should be called at the end of the planning phase to finalize and store the plan.

The plan you create should be properly formatted in markdown, using appropriate sections and headers. The first line MUST BE A TITLE for the plan formatted as a level 1 markdown heading.${!isC15 && (planModePromptCitation ?? false) ? " When mentioning files, use markdown links with the full file path (for example, `[backend/src/foo.ts](backend/src/foo.ts)`)." : ""}

PLAN QUALITY REQUIREMENTS:
- Make the plan concise, specific, and executable without re-deciding the approach.
- Commit to one recommended implementation path; do not include unresolved questions, options, or TBDs.
- Name primary files, functions, components, configs, tests, schemas, and existing utilities or patterns to reuse when knowable.
- Include concrete implementation steps. Brief context is fine only when it supports those steps.
- Specify important defaults, boundaries, and validation criteria.
- Include verification: tests, commands, manual checks, or exact conditions that would trigger follow-up work.
- Keep the plan proportional to the request.

${isC15 ? refinedC15TaskOrganization : refinedTaskOrganizationDescription}

${isC15 ? c15UpdatePlan : updatePlanContent}

Additional guidelines:
- Do not put unresolved questions, options, or choices in the plan. Resolve them before calling this tool. ${getClarifyingQuestionGuidance(allTools)}
- Include low-level details only when they remove ambiguity, such as exact file placement, API names, config keys, schema fields, or validation commands.
- If the user's request is primarily explanatory or investigative and no code changes are planned, make that explicit. Do not invent implementation todos.
- Do not use emojis in the plan.${enableCodeLineage === true ? `
- If your research uncovered deliberate design decisions, past reversions, or intentional tradeoffs (from CodeLineage or git history), surface these as constraints in your plan. Explain what the proposed changes preserve, what they deliberately change, and how they relate to those prior decisions.` : ""}${isC15 ? `
- The plan will FAIL if arguments aren't given in order of name, overview, plan, todos. Follow the argument ordering.` : ""}`;
    const getDescription6 = (allTools)=>useNewPlanModePrompts ? refinedDescription(allTools) : legacyDescription(allTools);
    const name17 = getCreatePlanToolNameTowardsModel({
        isDsv3Family: promptVersion === "dsv3-1018",
        usePascalCaseToolNames: promptVersion !== "dsv3-1018"
    });
    return createZodAgentTool("CREATE_PLAN_V2", {
        name: name17,
        descriptionGenerator: (props)=>promptVersion === "cursor-0226" && !useNewPlanModePrompts ? `Use this tool to create a concise plan for accomplishing the user's request. This tool should be called at the end of the planning phase to finalize and store the plan.

The plan you create should be properly formatted in markdown, using appropriate sections and headers. The plan should be very concise and actionable, providing the minimum amount of detail for the user to understand and action the plan. It may be helpful to identify the most important couple files you will change, and existing code you will leverage. Cite specific file paths and essential snippets of code. IMPORTANT: Do NOT use markdown tables in plan content (they cannot be rendered for the user); use bullet lists instead. The first line MUST BE A TITLE for the plan formatted as a level 1 markdown heading.

When creating your plan, provide, optionally, a structured list of implementation todos:
- Each todo should be a clear, specific, and actionable task that can be tracked and completed
- Each todo needs:
  - A clear, unique ID (e.g., "setup-auth", "implement-ui", "add-tests")
  - A descriptive content explaining what needs to be done

UPDATING THE PLAN:
- This tool creates a NEW plan file each time it is called
- The plan file URI will be returned in the tool result
- To update an existing plan, read and edit the plan file directly using your file editing tools
- Do NOT call this tool again to update an existing plan

Additional guidelines:
- Avoid asking clarifying questions in the plan itself. Ask them before calling this tool. ${getClarifyingQuestionGuidance(props.allTools)}
- Focus on high-level meaningful decisions rather than low-level implementation details` : getDescription6(props.allTools),
        parameters: parametersSchema29,
        execute,
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createCreatePlanToolCall(new CreatePlanToolCall({
                result: new CreatePlanResult({
                    result: {
                        case: "error",
                        value: new CreatePlanError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
