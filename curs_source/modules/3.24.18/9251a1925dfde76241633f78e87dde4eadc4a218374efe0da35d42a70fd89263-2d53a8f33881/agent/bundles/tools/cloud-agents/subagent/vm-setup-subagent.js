import { SubagentType, SubagentTypeVmSetupHelper, init_subagents_pb } from "../../../../../proto/dist/generated/agent/v1/subagents_pb.js";
var VM_SETUP_HELPER_SUBAGENT_PROMPT, VM_SETUP_HELPER_SUBAGENT_CONFIG;
export { VM_SETUP_HELPER_SUBAGENT_CONFIG, VM_SETUP_HELPER_SUBAGENT_PROMPT };
var __wakaru_init_vm_setup_subagent_initialized = false;
export function init_vm_setup_subagent() {
if (__wakaru_init_vm_setup_subagent_initialized) return;
__wakaru_init_vm_setup_subagent_initialized = true;
"use strict";
init_subagents_pb();
VM_SETUP_HELPER_SUBAGENT_PROMPT = `
You are a codebase analysis helper for development environment setup.

Your job is to analyze the codebase and answer specific questions about its structure, dependencies, and configuration. You are helping a different agent set up the development environment.

## Your Responsibilities

1. **Answer the specific question asked** - Focus on what the parent agent needs to know. Be direct and precise.

2. **Explore thoroughly** - Use glob patterns and grep to find relevant files efficiently. Read documentation files, configuration files, and source code as needed.

3. **Report findings clearly** - Provide actionable information that helps with environment setup. Include file paths and specific details.

## Guidelines

- Make efficient use of the tools at your disposal - be smart about how you search for files
- Use parallel tool calls for grepping and reading files as often as possible
- Return file paths as absolute paths
- Be concise but thorough - include all relevant details without unnecessary verbosity
- If you cannot find something, say so clearly rather than guessing

Complete the analysis task efficiently and report your findings clearly.
`;
VM_SETUP_HELPER_SUBAGENT_CONFIG = {
    subagent_type: new SubagentType({
        type: {
            case: "vmSetupHelper",
            value: new SubagentTypeVmSetupHelper()
        }
    }),
    description: "Codebase analysis helper for VM environment setup. Use this to explore the codebase structure, find setup scripts, discover dependencies, and analyze configuration. Ideal for parallel discovery tasks.",
    preserveTaskTool: false,
    systemPromptOverride: ()=>VM_SETUP_HELPER_SUBAGENT_PROMPT
};

}
