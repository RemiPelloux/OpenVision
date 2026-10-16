import { init_capabilities } from "./capabilities.js";
import { init_loader } from "./loader.js";
import { init_mcp_parser } from "./mcp-parser.js";
import { init_plugin_variables } from "./plugin-variables.js";
import { init_types5, mcpConfigSchema } from "./types.js";
import { external_exports } from "../../external_exports.js";
import { init_zod } from "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var primitiveSkillSchema, primitiveRuleSchema, primitiveAgentSchema, primitiveCommandSchema, hooksConfigSchema, primitiveHooksSchema, variablesJsonSchema, pluginPrimitiveManifestSchema;
export { hooksConfigSchema, pluginPrimitiveManifestSchema, primitiveAgentSchema, primitiveCommandSchema, primitiveHooksSchema, primitiveRuleSchema, primitiveSkillSchema, variablesJsonSchema };
var __wakaru_init_primitive_manifest_initialized = false;
export function init_primitive_manifest() {
if (__wakaru_init_primitive_manifest_initialized) return;
__wakaru_init_primitive_manifest_initialized = true;
"use strict";
init_zod();
init_capabilities();
init_loader();
init_mcp_parser();
init_plugin_variables();
init_types5();
primitiveSkillSchema = external_exports.object({
    path: external_exports.string(),
    name: external_exports.string().optional(),
    description: external_exports.string().optional(),
    globs: external_exports.array(external_exports.string()).optional(),
    alwaysApply: external_exports.boolean().optional(),
    content: external_exports.string(),
    environments: external_exports.array(external_exports.string()).optional(),
    disabledEnvironments: external_exports.array(external_exports.string()).optional()
});
primitiveRuleSchema = primitiveSkillSchema.extend({
    name: external_exports.string()
});
primitiveAgentSchema = external_exports.object({
    path: external_exports.string(),
    name: external_exports.string(),
    description: external_exports.string().optional(),
    tools: external_exports.array(external_exports.string()).optional(),
    model: external_exports.string().optional(),
    prompt: external_exports.string(),
    permissionMode: external_exports.enum([
        "default",
        "readonly"
    ]).optional()
});
primitiveCommandSchema = external_exports.object({
    path: external_exports.string(),
    name: external_exports.string(),
    description: external_exports.string().optional(),
    argumentHint: external_exports.string().optional(),
    content: external_exports.string()
});
hooksConfigSchema = external_exports.custom((value)=>typeof value === "object" && value !== null && typeof value.hooks === "object" && value.hooks !== null);
primitiveHooksSchema = external_exports.object({
    config: hooksConfigSchema,
    sourcePath: external_exports.string().optional()
});
variablesJsonSchema = external_exports.custom((value)=>typeof value === "object" && value !== null);
pluginPrimitiveManifestSchema = external_exports.object({
    schemaVersion: external_exports.number().int(),
    displayName: external_exports.string().optional(),
    description: external_exports.string().optional(),
    authorName: external_exports.string().optional(),
    skills: external_exports.array(primitiveSkillSchema),
    rules: external_exports.array(primitiveRuleSchema),
    agents: external_exports.array(primitiveAgentSchema),
    commands: external_exports.array(primitiveCommandSchema),
    mcpConfig: mcpConfigSchema.extend({
        mcpServerSourcePaths: external_exports.record(external_exports.string(), external_exports.string()).optional()
    }).optional(),
    hooks: primitiveHooksSchema.optional(),
    hooksError: external_exports.string().optional(),
    capabilities: external_exports.array(external_exports.string()),
    variablesSchema: variablesJsonSchema.optional()
});

}
