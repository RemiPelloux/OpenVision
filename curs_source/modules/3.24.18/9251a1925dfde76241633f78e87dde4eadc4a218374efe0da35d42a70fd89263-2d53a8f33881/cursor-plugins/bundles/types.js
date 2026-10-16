import { external_exports } from "../../external_exports.js";
import { init_zod } from "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var noopPluginMetricsLogger, mcpServerConfigSchema, mcpConfigSchema;
export { mcpConfigSchema, mcpServerConfigSchema, noopPluginMetricsLogger };
var __wakaru_init_types5_initialized = false;
export function init_types5() {
if (__wakaru_init_types5_initialized) return;
__wakaru_init_types5_initialized = true;
"use strict";
init_zod();
noopPluginMetricsLogger = {
    log: ()=>{},
    increment: ()=>{},
    distribution: ()=>{},
    captureException: ()=>{}
};
mcpServerConfigSchema = external_exports.object({
    command: external_exports.string().optional(),
    args: external_exports.array(external_exports.string()).optional(),
    env: external_exports.record(external_exports.string(), external_exports.string()).optional(),
    url: external_exports.string().optional(),
    headers: external_exports.record(external_exports.string(), external_exports.string()).optional(),
    cwd: external_exports.string().optional(),
    envFile: external_exports.string().optional(),
    auth: external_exports.object({
        CLIENT_ID: external_exports.string(),
        CLIENT_SECRET: external_exports.string().optional(),
        scopes: external_exports.array(external_exports.string()).optional()
    }).optional(),
    enabledTools: external_exports.array(external_exports.string()).optional(),
    placement: external_exports.enum([
        "server",
        "client"
    ]).optional(),
    tls: external_exports.object({
        caBundle: external_exports.string().trim().min(1).max(128 * 1024)
    }).optional()
});
mcpConfigSchema = external_exports.object({
    mcpServers: external_exports.record(external_exports.string(), mcpServerConfigSchema).optional()
});

}
