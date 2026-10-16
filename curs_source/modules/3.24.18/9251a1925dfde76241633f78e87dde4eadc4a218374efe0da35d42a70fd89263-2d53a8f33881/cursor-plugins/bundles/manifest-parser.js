import { CapabilitiesSchema, init_capabilities } from "./capabilities.js";
import { init_schema_version } from "./schema-version.js";
import { parsePluginVariablesJsonSchema, validatePluginVariableSchemaShape } from "../../dist_exports2.js";
import { external_exports } from "../../external_exports.js";
import { init_zod } from "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var import_node_crypto7, import_node_path20, MAX_MANIFEST_SIZE_BYTES, KEBAB_CASE_PATTERN, PLUGIN_MANIFEST_PATHS, MARKETPLACE_MANIFEST_PATHS, GitHubSourceSchema, GitUrlSourceSchema, GitSubdirSourceSchema, PluginSourceSchema, MIN_CLIENT_VERSION_PATTERN, MIN_CLIENT_VERSION_MESSAGE, MinClientVersionsSchema, AuthorSchema, PluginVariablePrimitiveTypeSchema, PluginVariableTypeSchema, PluginVariableSchemaSchema, PluginVariablesJsonSchemaSchema, MarketplacePluginEntrySchema, MarketplaceMetadataSchema, PluginManifestSchema;
export { AuthorSchema, GitHubSourceSchema, GitSubdirSourceSchema, GitUrlSourceSchema, KEBAB_CASE_PATTERN, MARKETPLACE_MANIFEST_PATHS, MAX_MANIFEST_SIZE_BYTES, MIN_CLIENT_VERSION_MESSAGE, MIN_CLIENT_VERSION_PATTERN, MarketplaceMetadataSchema, MarketplacePluginEntrySchema, MinClientVersionsSchema, PLUGIN_MANIFEST_PATHS, PluginManifestSchema, PluginSourceSchema, PluginVariablePrimitiveTypeSchema, PluginVariableSchemaSchema, PluginVariableTypeSchema, PluginVariablesJsonSchemaSchema, import_node_crypto7, import_node_path20 };
var __wakaru_init_manifest_parser_initialized = false;
export function init_manifest_parser() {
if (__wakaru_init_manifest_parser_initialized) return;
__wakaru_init_manifest_parser_initialized = true;
"use strict";
import_node_crypto7 = require("node:crypto");
import_node_path20 = require("node:path");
init_zod();
init_capabilities();
init_schema_version();
MAX_MANIFEST_SIZE_BYTES = 10 * 1024 * 1024;
KEBAB_CASE_PATTERN = /^[a-z0-9]([a-z0-9.-]*[a-z0-9])?$/;
PLUGIN_MANIFEST_PATHS = [
    ".cursor-plugin/plugin.json",
    ".claude-plugin/plugin.json",
    "plugin.json"
];
MARKETPLACE_MANIFEST_PATHS = [
    ".cursor-plugin/marketplace.json",
    ".claude-plugin/marketplace.json"
];
GitHubSourceSchema = external_exports.object({
    source: external_exports.literal("github"),
    repo: external_exports.string().regex(/^[^/]+\/[^/]+$/, "Must be in owner/repo format"),
    ref: external_exports.string().optional(),
    sha: external_exports.string().length(40, "SHA must be 40 characters").regex(/^[a-f0-9]+$/, "SHA must be hexadecimal").optional()
});
GitUrlSourceSchema = external_exports.object({
    source: external_exports.literal("url"),
    url: external_exports.string().url().endsWith(".git", "URL must end with .git"),
    ref: external_exports.string().optional(),
    sha: external_exports.string().length(40, "SHA must be 40 characters").regex(/^[a-f0-9]+$/, "SHA must be hexadecimal").optional()
});
GitSubdirSourceSchema = external_exports.object({
    source: external_exports.literal("git-subdir"),
    url: external_exports.string().url().endsWith(".git", "URL must end with .git"),
    path: external_exports.string().min(1),
    ref: external_exports.string().optional(),
    sha: external_exports.string().length(40, "SHA must be 40 characters").regex(/^[a-f0-9]+$/, "SHA must be hexadecimal").optional()
});
PluginSourceSchema = external_exports.union([
    external_exports.string(),
    GitHubSourceSchema,
    GitUrlSourceSchema,
    GitSubdirSourceSchema
]);
MIN_CLIENT_VERSION_PATTERN = /^(\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?|never)$/;
MIN_CLIENT_VERSION_MESSAGE = 'Must be a semver version (X.Y.Z) or "never"';
MinClientVersionsSchema = external_exports.object({
    cursor: external_exports.string().regex(MIN_CLIENT_VERSION_PATTERN, MIN_CLIENT_VERSION_MESSAGE).optional(),
    sand: external_exports.string().regex(MIN_CLIENT_VERSION_PATTERN, MIN_CLIENT_VERSION_MESSAGE).optional()
});
AuthorSchema = external_exports.object({
    name: external_exports.string().min(1, "Author name is required"),
    email: external_exports.string().email().optional()
});
PluginVariablePrimitiveTypeSchema = external_exports.enum([
    "string",
    "number",
    "integer",
    "boolean",
    "object",
    "array",
    "null"
]);
PluginVariableTypeSchema = external_exports.union([
    PluginVariablePrimitiveTypeSchema,
    external_exports.array(PluginVariablePrimitiveTypeSchema).nonempty().superRefine((types3, ctx)=>{
        if (new Set(types3).size !== types3.length) {
            ctx.addIssue({
                code: external_exports.ZodIssueCode.custom,
                message: "Schema type arrays must not contain duplicates"
            });
        }
    })
]);
PluginVariableSchemaSchema = external_exports.lazy(()=>external_exports.object({
        type: PluginVariableTypeSchema.optional(),
        title: external_exports.string().optional(),
        description: external_exports.string().optional(),
        format: external_exports.string().optional(),
        writeOnly: external_exports.boolean().optional(),
        default: external_exports.unknown().optional(),
        enum: external_exports.array(external_exports.any()).nonempty().optional(),
        const: external_exports.unknown().optional(),
        properties: external_exports.record(external_exports.string(), PluginVariableSchemaSchema).optional(),
        required: external_exports.array(external_exports.string()).optional(),
        additionalProperties: external_exports.union([
            external_exports.boolean(),
            PluginVariableSchemaSchema
        ]).optional(),
        items: external_exports.union([
            PluginVariableSchemaSchema,
            external_exports.array(PluginVariableSchemaSchema)
        ]).optional(),
        minLength: external_exports.number().int().nonnegative().optional(),
        maxLength: external_exports.number().int().nonnegative().optional(),
        minimum: external_exports.number().optional(),
        maximum: external_exports.number().optional(),
        exclusiveMinimum: external_exports.number().optional(),
        exclusiveMaximum: external_exports.number().optional(),
        multipleOf: external_exports.number().positive().optional(),
        minItems: external_exports.number().int().nonnegative().optional(),
        maxItems: external_exports.number().int().nonnegative().optional(),
        uniqueItems: external_exports.boolean().optional(),
        minProperties: external_exports.number().int().nonnegative().optional(),
        maxProperties: external_exports.number().int().nonnegative().optional()
    }).strict().superRefine(validatePluginVariableSchemaShape));
PluginVariablesJsonSchemaSchema = external_exports.unknown().superRefine((value, ctx)=>{
    const result = parsePluginVariablesJsonSchema(value);
    if (result.success) {
        return;
    }
    for (const issue2 of result.error.issues){
        ctx.addIssue(issue2);
    }
}).transform((value)=>value);
MarketplacePluginEntrySchema = external_exports.object({
    name: external_exports.string().min(1).transform((name17)=>name17.toLowerCase()).refine((name17)=>KEBAB_CASE_PATTERN.test(name17), "Name must be kebab-case (lowercase alphanumeric with hyphens and periods)"),
    displayName: external_exports.string().optional(),
    source: PluginSourceSchema,
    description: external_exports.string().optional(),
    version: external_exports.string().optional(),
    author: AuthorSchema.optional(),
    publisher: external_exports.string().min(1).optional(),
    homepage: external_exports.string().url().optional(),
    repository: external_exports.string().url().optional(),
    license: external_exports.string().optional(),
    keywords: external_exports.array(external_exports.string()).optional(),
    capabilities: CapabilitiesSchema.optional(),
    logo: external_exports.string().optional(),
    category: external_exports.string().optional(),
    tags: external_exports.array(external_exports.string()).optional(),
    minClientVersions: MinClientVersionsSchema.optional(),
    strict: external_exports.boolean().default(true),
    commands: external_exports.union([
        external_exports.string(),
        external_exports.array(external_exports.string())
    ]).optional(),
    agents: external_exports.union([
        external_exports.string(),
        external_exports.array(external_exports.string())
    ]).optional(),
    skills: external_exports.union([
        external_exports.string(),
        external_exports.array(external_exports.string())
    ]).optional(),
    rules: external_exports.union([
        external_exports.string(),
        external_exports.array(external_exports.string())
    ]).optional(),
    hooks: external_exports.union([
        external_exports.string(),
        external_exports.record(external_exports.unknown())
    ]).optional(),
    variables: PluginVariablesJsonSchemaSchema.optional(),
    mcpServers: external_exports.union([
        external_exports.string(),
        external_exports.record(external_exports.unknown()),
        external_exports.array(external_exports.union([
            external_exports.string(),
            external_exports.record(external_exports.unknown())
        ]))
    ]).optional()
});
MarketplaceMetadataSchema = external_exports.object({
    description: external_exports.string().optional(),
    version: external_exports.string().optional(),
    pluginRoot: external_exports.string().optional()
});
PluginManifestSchema = external_exports.object({
    name: external_exports.string().min(1).regex(KEBAB_CASE_PATTERN, "Name must be kebab-case (lowercase alphanumeric with hyphens and periods)"),
    displayName: external_exports.string().optional(),
    description: external_exports.string().optional(),
    version: external_exports.string().optional(),
    author: AuthorSchema.optional(),
    publisher: external_exports.string().min(1).optional(),
    homepage: external_exports.string().url().optional(),
    repository: external_exports.string().url().optional(),
    license: external_exports.string().optional(),
    logo: external_exports.string().optional(),
    keywords: external_exports.array(external_exports.string()).optional(),
    capabilities: CapabilitiesSchema.optional(),
    minClientVersions: MinClientVersionsSchema.optional(),
    commands: external_exports.union([
        external_exports.string(),
        external_exports.array(external_exports.string())
    ]).optional(),
    agents: external_exports.union([
        external_exports.string(),
        external_exports.array(external_exports.string())
    ]).optional(),
    skills: external_exports.union([
        external_exports.string(),
        external_exports.array(external_exports.string())
    ]).optional(),
    rules: external_exports.union([
        external_exports.string(),
        external_exports.array(external_exports.string())
    ]).optional(),
    hooks: external_exports.union([
        external_exports.string(),
        external_exports.record(external_exports.unknown())
    ]).optional(),
    variables: PluginVariablesJsonSchemaSchema.optional(),
    mcpServers: external_exports.union([
        external_exports.string(),
        external_exports.record(external_exports.unknown()),
        external_exports.array(external_exports.union([
            external_exports.string(),
            external_exports.record(external_exports.unknown())
        ]))
    ]).optional()
});

}
