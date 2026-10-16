import { external_exports } from "../../external_exports.js";
import { init_zod } from "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var CapabilitySchema, CapabilitiesSchema;
export { CapabilitiesSchema, CapabilitySchema };
var __wakaru_init_capabilities_initialized = false;
export function init_capabilities() {
if (__wakaru_init_capabilities_initialized) return;
__wakaru_init_capabilities_initialized = true;
"use strict";
init_zod();
CapabilitySchema = external_exports.enum([
    "canvas"
]);
CapabilitiesSchema = external_exports.array(CapabilitySchema).transform((capabilities)=>{
    return [
        ...new Set(capabilities)
    ].sort();
});

}
