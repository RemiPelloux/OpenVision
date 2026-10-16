import { init_replace_file } from "./replace-file.js";
import { __toESM } from "../storage/sqlite-store.js";
import { external_exports } from "../../../external_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var fs29, path54, HOSTS_DIR, HOST_DESCRIPTOR_SCHEMA, hostDescriptorSchema;
export { HOSTS_DIR, HOST_DESCRIPTOR_SCHEMA, fs29, hostDescriptorSchema, path54 };
var __wakaru_init_host_descriptor_initialized = false;
export function init_host_descriptor() {
if (__wakaru_init_host_descriptor_initialized) return;
__wakaru_init_host_descriptor_initialized = true;
"use strict";
fs29 = __toESM(require("node:fs"), 1);
path54 = __toESM(require("node:path"), 1);
init_zod();
init_replace_file();
HOSTS_DIR = "hosts";
HOST_DESCRIPTOR_SCHEMA = 1;
hostDescriptorSchema = external_exports.object({
    schema: external_exports.literal(HOST_DESCRIPTOR_SCHEMA),
    pid: external_exports.number().int().nonnegative(),
    writtenAt: external_exports.string(),
    enabledBy: external_exports.enum([
        "gate",
        "env"
    ]),
    interfaceRevision: external_exports.number().int(),
    requiredCapabilities: external_exports.array(external_exports.string()),
    natives: external_exports.array(external_exports.string()),
    clientVersion: external_exports.string().optional(),
    floor: external_exports.object({
        generation: external_exports.string(),
        label: external_exports.string(),
        builtAt: external_exports.string().optional(),
        commit: external_exports.string().optional(),
        source: external_exports.enum([
            "floor",
            "static"
        ])
    }),
    timing: external_exports.object({
        pollIntervalMs: external_exports.number().nullable(),
        requestIdleTimeoutMs: external_exports.number().nullable()
    }).optional()
});

}
