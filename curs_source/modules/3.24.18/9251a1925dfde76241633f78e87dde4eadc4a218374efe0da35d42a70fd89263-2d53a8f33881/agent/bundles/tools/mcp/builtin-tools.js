import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { init_core5 } from "../core.js";
import { buildBuiltinToolsMcpDescriptorFromTools, buildDescriptionGeneratorProps } from "../../../../mcp_sandbox_policy_exports.js";
import { init_esm2 } from "../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_mcp_exec_pb } from "../../../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { init_mcp_pb } from "../../../../proto/dist/generated/agent/v1/mcp_pb.js";
import { init_mcp_tool_pb } from "../../../../proto/dist/generated/agent/v1/mcp_tool_pb.js";
var BUILTIN_TOOLS_SERVER_USE_INSTRUCTIONS, DynamicToolRegistry;
export { BUILTIN_TOOLS_SERVER_USE_INSTRUCTIONS, DynamicToolRegistry };
var __wakaru_init_builtin_tools_initialized = false;
export function init_builtin_tools() {
if (__wakaru_init_builtin_tools_initialized) return;
__wakaru_init_builtin_tools_initialized = true;
"use strict";
init_dist8();
init_mcp_exec_pb();
init_mcp_pb();
init_mcp_tool_pb();
init_esm2();
init_core5();
BUILTIN_TOOLS_SERVER_USE_INSTRUCTIONS = "Native Cursor tools for this session. These are highly recommended and useful tools that you should use when the right situation arises. Don't be afraid to look at one if it seems relevant, even if you don't end up using it. You MUST read the tool schemas before calling them.";
DynamicToolRegistry = class {
    constructor(options2 = {}){
        this.options = options2;
        this.toolsByName = new Map();
        this.staticToolNames = new Set();
        this.descriptionProps = {
            allTools: {}
        };
        this.cachedMcpDescriptors = new Map();
    }
    listsFirstInCatalog() {
        return this.options.firstPartyCatalog !== void 0;
    }
    replaceTools({ dynamicTools, allTools }) {
        const nextToolsByName = new Map();
        for (const tool of dynamicTools){
            nextToolsByName.set(tool.name, tool);
        }
        let nextStaticToolNames = new Set();
        if (this.usesDirectToolRecovery()) {
            const dynamicToolSet = new Set(dynamicTools);
            nextStaticToolNames = new Set(allTools.filter((tool)=>!dynamicToolSet.has(tool)).map((tool)=>tool.name));
        }
        const nextDescriptionProps = buildDescriptionGeneratorProps(allTools);
        const descriptor = buildBuiltinToolsMcpDescriptorFromTools([
            ...nextToolsByName.values()
        ].sort((a, b2)=>a.name.localeCompare(b2.name)), nextDescriptionProps, this.options.firstPartyCatalog?.useInstructions);
        const nextCachedDescriptors = new Map();
        if (descriptor !== void 0) {
            nextCachedDescriptors.set("", descriptor);
        }
        this.toolsByName = nextToolsByName;
        this.staticToolNames = nextStaticToolNames;
        this.descriptionProps = nextDescriptionProps;
        this.cachedMcpDescriptors = nextCachedDescriptors;
    }
    isEmpty() {
        return this.toolsByName.size === 0;
    }
    getTool(name17) {
        return this.toolsByName.get(name17);
    }
    isStaticTool(name17) {
        return this.staticToolNames.has(name17);
    }
    usesDirectToolRecovery() {
        return this.options.directToolRecoveryEnabled === true;
    }
    getTools() {
        return [
            ...this.toolsByName.values()
        ].sort((a, b2)=>a.name.localeCompare(b2.name));
    }
    getToolNames() {
        return this.getTools().map((tool)=>tool.name);
    }
    getDescriptionProps() {
        return this.descriptionProps;
    }
    getMcpDescriptor(toolNames2) {
        const key = toolNames2 === void 0 ? "" : `${toolNames2.discoveryToolName}\0${toolNames2.invocationToolName}`;
        const cached2 = this.cachedMcpDescriptors.get(key);
        if (cached2 !== void 0) {
            return cached2;
        }
        const descriptor = buildBuiltinToolsMcpDescriptorFromTools(this.getTools(), this.descriptionProps, this.options.firstPartyCatalog?.useInstructions);
        if (descriptor !== void 0) {
            this.cachedMcpDescriptors.set(key, descriptor);
        }
        return descriptor;
    }
};

}
