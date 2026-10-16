import { external_exports } from "../../../external_exports.js";
import { init_platform2 } from "./platform.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var daemonRecordSchema, statusMountSchema, statusSchema;
export { daemonRecordSchema, statusMountSchema, statusSchema };
var __wakaru_init_sources_initialized = false;
export function init_sources() {
if (__wakaru_init_sources_initialized) return;
__wakaru_init_sources_initialized = true;
"use strict";
init_zod();
init_platform2();
daemonRecordSchema = external_exports.object({
    record_v: external_exports.number().int().nullish(),
    pid: external_exports.number().int().nonnegative().nullish(),
    version: external_exports.string().nullish(),
    started_at: external_exports.number().nullish(),
    control_sock: external_exports.string().nullish(),
    runtime_dir: external_exports.string().nullish(),
    data_dir: external_exports.string().nullish(),
    config_path: external_exports.string().nullish(),
    log_path: external_exports.string().nullish(),
    metrics_addr: external_exports.string().nullish(),
    exe: external_exports.string().nullish()
});
statusMountSchema = external_exports.object({
    mountpoint: external_exports.string().nullish(),
    capabilities: external_exports.array(external_exports.string()).nullish(),
    nfs_transport: external_exports.string().nullish(),
    bind_ignored: external_exports.object({
        active: external_exports.array(external_exports.string()).nullish()
    }).passthrough().nullish()
});
statusSchema = external_exports.object({
    daemon_alive: external_exports.boolean().nullish(),
    mounts: external_exports.array(external_exports.unknown()).nullish(),
    data_plane: external_exports.object({
        enabled: external_exports.boolean().nullish()
    }).passthrough().nullish()
});

}
