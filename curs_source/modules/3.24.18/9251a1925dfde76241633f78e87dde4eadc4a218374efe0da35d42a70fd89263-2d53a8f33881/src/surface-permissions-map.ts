import { canApplyPermissionsPush, denyAllPermissions, permissionsFromProto, withPrePushDeny, withoutPrePushDeny } from "../daemon_metrics_exports.js";
import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_sandbox_pb } from "../proto/dist/generated/agent/v1/sandbox_pb.js";
var PRE_PUSH_DENY, SessionPermissionsStore;
export { PRE_PUSH_DENY, SessionPermissionsStore };
var __wakaru_init_surface_permissions_map_initialized = false;
export function init_surface_permissions_map() {
if (__wakaru_init_surface_permissions_map_initialized) return;
__wakaru_init_surface_permissions_map_initialized = true;
"use strict";
init_agent_host_surface_pb();
init_sandbox_pb();
PRE_PUSH_DENY = [
    "Shell(*)",
    "Mcp(*:*)"
];
SessionPermissionsStore = class {
    constructor(){
        this.bySessionId = new Map();
        this.pushedSessionIds = new Set();
    }
    has(sessionId) {
        return this.pushedSessionIds.has(sessionId);
    }
    get(sessionId) {
        return this.bySessionId.get(sessionId) ?? denyAllPermissions();
    }
    delete(sessionId) {
        this.bySessionId.delete(sessionId);
        this.pushedSessionIds.delete(sessionId);
    }
    apply(sessionId, proto) {
        const previous = this.get(sessionId);
        if (!canApplyPermissionsPush(proto, previous)) {
            return false;
        }
        const inheritingPrePushSeed = !this.has(sessionId);
        const mapped = permissionsFromProto(proto, previous);
        const next = inheritingPrePushSeed && (proto === void 0 || proto.deny.length === 0) ? {
            ...mapped,
            deny: withoutPrePushDeny(mapped.deny)
        } : mapped;
        this.bySessionId.set(sessionId, next);
        this.pushedSessionIds.add(sessionId);
        return true;
    }
    providerFor(sessionId) {
        return {
            getPermissions: async ()=>{
                const current = this.get(sessionId);
                if (this.has(sessionId)) {
                    return current;
                }
                return withPrePushDeny(current);
            },
            updatePermissions: async (transformer)=>{
                const current = this.get(sessionId);
                const nextAllowDeny = transformer({
                    allow: [
                        ...current.allow
                    ],
                    deny: [
                        ...current.deny
                    ]
                });
                this.bySessionId.set(sessionId, {
                    ...current,
                    allow: nextAllowDeny.allow,
                    deny: nextAllowDeny.deny
                });
            }
        };
    }
};

}
