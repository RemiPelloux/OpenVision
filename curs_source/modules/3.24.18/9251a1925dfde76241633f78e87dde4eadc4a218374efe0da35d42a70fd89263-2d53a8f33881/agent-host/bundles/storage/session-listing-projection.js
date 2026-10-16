import { external_exports } from "../../../external_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var HOST_SESSION_LISTING_PROJECTION_KEY, optionalPositiveMs, optionalTitle, optionalArchived, listingProjectionSchema;
export { HOST_SESSION_LISTING_PROJECTION_KEY, listingProjectionSchema, optionalArchived, optionalPositiveMs, optionalTitle };
var __wakaru_init_session_listing_projection_initialized = false;
export function init_session_listing_projection() {
if (__wakaru_init_session_listing_projection_initialized) return;
__wakaru_init_session_listing_projection_initialized = true;
"use strict";
init_zod();
HOST_SESSION_LISTING_PROJECTION_KEY = "agentHost:listingProjection";
optionalPositiveMs = external_exports.number().finite().positive().optional().catch(void 0);
optionalTitle = external_exports.string().min(1).optional().catch(void 0);
optionalArchived = external_exports.boolean().optional().catch(void 0);
listingProjectionSchema = external_exports.object({
    title: optionalTitle,
    isArchived: optionalArchived,
    updatedAtMs: optionalPositiveMs
}).transform((parsed)=>({
        ...parsed.title === void 0 ? {} : {
            title: parsed.title
        },
        ...parsed.isArchived === void 0 ? {} : {
            isArchived: parsed.isArchived
        },
        ...parsed.updatedAtMs === void 0 ? {} : {
            updatedAtMs: parsed.updatedAtMs
        }
    }));

}
