import { init_dist7 } from "../../../../agent-core/dist/index.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_mode_processing } from "../../mode-processing.js";
import { init_shim } from "../../shims/shim.js";
import { ToolCallRejectedError, init_common9, withSafeParsedArgs } from "../common.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { querySwitchMode } from "../../../../dist_exports.js";
import { agentModeToModeId, createStringResult, createZodAgentTool, defineShim, unifiedModeIdToAgentMode } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { SwitchModeArgs, SwitchModeError, SwitchModeRejected, SwitchModeResult, SwitchModeSuccess, SwitchModeToolCall, init_switch_mode_tool_pb } from "../../../../proto/dist/generated/agent/v1/switch_mode_tool_pb.js";
import { buildSwitchModeConciseContext, createParametersSchema3, createSwitchModeToolCall, resultToString8 } from "../../../../tree_chunk_napi_exports.js";
var __addDisposableResource99, __disposeResources99, logger101, targetModeIdAlias, SWITCH_MODE_DISPLAY_NAMES, createSwitchModeTool;
export { SWITCH_MODE_DISPLAY_NAMES, __addDisposableResource99, __disposeResources99, createSwitchModeTool, logger101, targetModeIdAlias };
var __wakaru_init_switch_mode_initialized = false;
export function init_switch_mode() {
if (__wakaru_init_switch_mode_initialized) return;
__wakaru_init_switch_mode_initialized = true;
"use strict";
init_dist7();
init_dist26();
init_dist();
init_agent_pb();
init_switch_mode_tool_pb();
init_zod();
init_mode_processing();
init_shim();
init_common9();
__addDisposableResource99 = function(env, value, async) {
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
__disposeResources99 = (function(SuppressedError2) {
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
logger101 = createLogger("@anysphere/agent:switch-mode");
targetModeIdAlias = defineShim({
    name: "switch_mode_target_alias"
});
SWITCH_MODE_DISPLAY_NAMES = [
    [
        "agent",
        "Agent"
    ],
    [
        "background",
        "Cloud"
    ],
    [
        "plan",
        "Plan"
    ],
    [
        "debug",
        "Debug"
    ],
    [
        "multitask",
        "Multitask"
    ],
    [
        "chat",
        "Ask"
    ]
];
createSwitchModeTool = (options2)=>{
    const allowedTargetModes = options2?.targetModes ?? [];
    const parametersSchema29 = createParametersSchema3(allowedTargetModes);
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource99(env_1, createSpan(parentCtx.withName("switchModeExecute")), false);
            const args = new SwitchModeArgs({
                targetModeId: rawArgs.target_mode_id,
                explanation: rawArgs.explanation,
                toolCallId: meta.toolCallId
            });
            const response = await querySwitchMode(interactionHandler.listener, spanCtxt.ctx, args);
            if (response.result.case === "rejected") {
                throw new ToolCallRejectedError(response.result.value.reason || "User rejected the mode switch");
            }
            const baseToolCall = new SwitchModeToolCall({
                args,
                result: void 0
            });
            const currentMode = meta.stateHandler.mode;
            const fromModeId = currentMode === void 0 ? "" : agentModeToModeId(currentMode);
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createSwitchModeToolCall(baseToolCall), meta.toolCallId, async (_ctx)=>{
                return new SwitchModeResult({
                    result: {
                        case: "success",
                        value: new SwitchModeSuccess({
                            fromModeId,
                            toModeId: rawArgs.target_mode_id
                        })
                    }
                });
            }, (result2)=>createSwitchModeToolCall(new SwitchModeToolCall({
                    ...baseToolCall,
                    result: result2
                })));
            if (result.result.case === "success") {
                const newMode = unifiedModeIdToAgentMode(rawArgs.target_mode_id);
                if (newMode !== void 0 && meta.stateHandler.mode !== newMode) {
                    logger101.info(spanCtxt.ctx, "Mode switched, updating state", {
                        toModeId: rawArgs.target_mode_id,
                        newMode
                    });
                    meta.stateHandler.setMode(newMode);
                }
            }
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources99(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        return createStringResult(resultToString8(result));
    };
    function getDescription6(switchableModes) {
        const switchableSet = new Set(switchableModes);
        function buildModeBlock(modeId, displayName, description4, switchGuidance, examples) {
            if (switchableSet.has(modeId)) {
                return `
### ${displayName} [switchable]
${description4}

**Switch to ${displayName.split(" ")[0]} when:**
${switchGuidance}

**Examples:**
${examples}`;
            } else {
                return `
### ${displayName} (cannot switch to this mode)
${description4}`;
            }
        }
        const modeBlocks = [
            buildModeBlock("agent", "Agent Mode", "Default implementation mode with full access to all tools for making changes.", `- You have a clear understanding of what to implement
- Planning/debugging is complete and you're ready to code
- The task is straightforward with an obvious implementation
- You've gathered enough context and are ready to execute`, `- After planning: "I've designed the approach, ready to implement" \u2192 Switch to Agent
- After debugging: "Found the bug, it's a null check issue" \u2192 Switch to Agent
- Simple task: User asks to "Add a comment to this function" \u2192 Stay in Agent (no switch needed)`)
        ];
        if (switchableSet.has("background")) {
            modeBlocks.push(buildModeBlock("background", "Cloud Mode", "Runs the agent in the Cloud (background). Useful for long-running work and browser/environment automation.", `- The task likely needs browser automation (Playwright/Cypress/Selenium, UI flows, screenshots)
- The task likely needs environment automation (docker-compose, multi-service integration, emulators/VMs)
- You want the agent to keep running even if the local machine sleeps/closes`, `- User: "Fix this UI flow and run the Playwright tests" \u2192 Switch to Cloud
- User: "Start docker-compose and validate the end-to-end flow" \u2192 Switch to Cloud
- User: "Run unit tests / lint / typecheck" \u2192 Stay in Agent (Cloud not needed)`));
        }
        modeBlocks.push(buildModeBlock("plan", "Plan Mode", "Read-only collaborative mode for designing implementation approaches before coding.", `- The task has multiple valid approaches with significant trade-offs
- Architectural decisions are needed (e.g., "Add caching" - Redis vs in-memory vs file-based)
- The task touches many files or systems (large refactors, migrations)
- Requirements are unclear and you need to explore before understanding scope
- You would otherwise ask multiple clarifying questions`, `- User: "Add user authentication" \u2192 Switch to Plan (session vs JWT, storage, middleware decisions)
- User: "Refactor the database layer" \u2192 Switch to Plan (large scope, architectural impact)
- User: "Make the app faster" \u2192 Switch to Plan (need to profile, multiple optimization strategies)`), buildModeBlock("debug", "Debug Mode", "Systematic troubleshooting mode for investigating bugs, failures, and unexpected behavior with runtime evidence.", `- User reports a bug, error, or unexpected behavior
- Tests are failing and the cause is unclear
- You need to form and test hypotheses about root causes
- The issue requires systematic elimination of possibilities
- ONLY use this mode to debug with runtime evidence (capture logs when the user repros the issue).`, `- User: "The login is broken" \u2192 Switch to Debug (need to reproduce, check logs, trace flow)
- User: "Tests are failing in CI" \u2192 Switch to Debug (systematic investigation needed)
- User: "Why is this returning null?" \u2192 Switch to Debug (need to trace execution path)`));
        if (switchableSet.has("multitask")) {
            modeBlocks.push(buildModeBlock("multitask", "Multitask Mode", "Parallelizes substantial work across asynchronous subagents while keeping quick clarification and light context gathering in the foreground.", `- The request naturally splits into multiple substantial units of work
- You want to keep the user unblocked by delegating long-running or multi-step work
- Foreground work should stay limited to quick questions and light context gathering`, `- User: "Audit these five services in parallel" \u2192 Switch to Multitask
- User: "Implement several independent features across the repo" \u2192 Switch to Multitask
- User: "Add one small helper function" \u2192 Stay in Agent (no need to parallelize)`));
        }
        modeBlocks.push(buildModeBlock("chat", "Ask Mode", "Read-only mode for exploring code and answering questions without making changes.", `- User wants information, not implementation
- The request is purely exploratory or educational
- User explicitly asks you not to make changes
- You need to explain code without modifying it`, `- User: "How does the auth system work?" \u2192 Switch to Ask (explanation only)
- User: "What files handle routing?" \u2192 Switch to Ask (exploration only)
- User: "Don't change anything, just explain this" \u2192 Switch to Ask`));
        return `Switch the interaction mode to better match the current task. Each mode is optimized for a specific type of work.

## When to Switch Modes

Switch modes proactively when:
1. **Task type changes** - User shifts from asking questions to requesting implementation, or vice versa
2. **Complexity emerges** - What seemed simple reveals architectural decisions or multiple approaches
3. **Debugging needed** - An error, bug, or unexpected behavior requires investigation
4. **Planning needed** - The task is large, ambiguous, or has significant trade-offs to discuss
5. **You're stuck** - Multiple attempts without progress suggest a different approach is needed

## When NOT to Switch

Do NOT switch modes for:
- Simple, clear tasks that can be completed quickly in current mode
- Mid-implementation when you're making good progress
- Minor clarifying questions (just ask them)
- Tasks where the current mode is working well

## Available Modes
${modeBlocks.join("\n")}

## Important Notes

- **Be proactive**: Don't wait for the user to ask you to switch modes
- **Explain briefly**: When switching, briefly explain why in your \`explanation\` parameter
- **Don't over-switch**: If the current mode is working, stay in it
- **User approval required**: Mode switches require user consent`;
    }
    const description3 = getDescription6(allowedTargetModes);
    return createZodAgentTool("SWITCH_MODE", {
        name: "SwitchMode",
        contextType: {
            type: "dynamic",
            conciseStaticContext: buildSwitchModeConciseContext(allowedTargetModes)
        },
        descriptionGenerator: (_props)=>description3,
        parameters: parametersSchema29,
        execute: withSafeParsedArgs(parametersSchema29, execute, createSwitchModeToolCall(new SwitchModeToolCall())),
        render: render2,
        serializeError: (error3)=>{
            if (error3 instanceof ToolCallRejectedError) {
                return createSwitchModeToolCall(new SwitchModeToolCall({
                    result: new SwitchModeResult({
                        result: {
                            case: "rejected",
                            value: new SwitchModeRejected({
                                reason: error3.message
                            })
                        }
                    })
                }));
            }
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createSwitchModeToolCall(new SwitchModeToolCall({
                result: new SwitchModeResult({
                    result: {
                        case: "error",
                        value: new SwitchModeError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
