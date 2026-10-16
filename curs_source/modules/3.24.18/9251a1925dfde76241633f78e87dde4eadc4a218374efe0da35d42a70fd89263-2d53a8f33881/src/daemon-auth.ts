import { scheduleTimeout } from "../dashboard_connect_exports.js";
import { init_esm4 } from "../node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/esm/index.js";
import { Code } from "../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { ConnectError } from "../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { init_esm3 } from "../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_dashboard_connect } from "../proto/dist/generated/aiserver/v1/dashboard_connect.js";
import { init_dashboard_pb } from "../proto/dist/generated/aiserver/v1/dashboard_pb.js";
var PRIVACY_MODE_TIMEOUT_MS, PRIVACY_MODE_RETRY_TIMEOUT_MS, PRIVACY_MODE_RETRY_DELAYS_MS, PRIVACY_MODE_RETRY_MAX_DELAY_MS, RETRYABLE_PRIVACY_MODE_CODES, AGENT_HOST_DAEMON_ALLOW_ENV_API_KEY_FALLBACK, DaemonAuthStore, DaemonPrivacyModeLookup;
export { AGENT_HOST_DAEMON_ALLOW_ENV_API_KEY_FALLBACK, DaemonAuthStore, DaemonPrivacyModeLookup, PRIVACY_MODE_RETRY_DELAYS_MS, PRIVACY_MODE_RETRY_MAX_DELAY_MS, PRIVACY_MODE_RETRY_TIMEOUT_MS, PRIVACY_MODE_TIMEOUT_MS, RETRYABLE_PRIVACY_MODE_CODES };
var __wakaru_init_daemon_auth_initialized = false;
export function init_daemon_auth() {
if (__wakaru_init_daemon_auth_initialized) return;
__wakaru_init_daemon_auth_initialized = true;
"use strict";
init_dashboard_connect();
init_dashboard_pb();
init_esm3();
init_esm4();
PRIVACY_MODE_TIMEOUT_MS = 1e3;
PRIVACY_MODE_RETRY_TIMEOUT_MS = 5e3;
PRIVACY_MODE_RETRY_DELAYS_MS = [
    2e3,
    5e3,
    15e3,
    3e4,
    6e4
];
PRIVACY_MODE_RETRY_MAX_DELAY_MS = 3e5;
RETRYABLE_PRIVACY_MODE_CODES = new Set([
    Code.DeadlineExceeded,
    Code.Unavailable,
    Code.Internal,
    Code.Unknown,
    Code.Aborted,
    Code.ResourceExhausted
]);
AGENT_HOST_DAEMON_ALLOW_ENV_API_KEY_FALLBACK = "AGENT_HOST_DAEMON_ALLOW_ENV_API_KEY_FALLBACK";
DaemonAuthStore = class {
    constructor(){
        this.slots = new Map();
        this.writeSeq = 0;
    }
    apply(input) {
        if (input.clientInstanceId.trim().length === 0) {
            return {
                accepted: false,
                rejectionReason: "client_instance_id is required"
            };
        }
        if (input.signedOut) {
            this.slots.delete(input.clientInstanceId);
            return {
                accepted: true
            };
        }
        if (input.accessToken.length === 0) {
            return {
                accepted: false,
                rejectionReason: "access_token is required unless signed_out"
            };
        }
        this.writeSeq += 1;
        this.slots.set(input.clientInstanceId, {
            accessToken: input.accessToken,
            issuedAtMs: input.issuedAtMs,
            expiresAtMs: input.expiresAtMs,
            writeSeq: this.writeSeq
        });
        return {
            accepted: true
        };
    }
    getActiveAccessToken() {
        return this.getActiveAuth()?.accessToken;
    }
    getActiveAuth() {
        let best;
        for (const slot of this.slots.values()){
            if (slot.accessToken.length === 0) {
                continue;
            }
            if (best === void 0) {
                best = slot;
                continue;
            }
            if (slot.issuedAtMs > best.issuedAtMs) {
                best = slot;
                continue;
            }
            if (slot.issuedAtMs === best.issuedAtMs && slot.writeSeq > best.writeSeq) {
                best = slot;
            }
        }
        return best;
    }
};
DaemonPrivacyModeLookup = class {
    constructor(deps){
        this.deps = deps;
        this.lookUp = async (slot)=>{
            this.dispose();
            if (this.resolved?.accessToken === slot.accessToken) {
                return this.resolved.privacyMode;
            }
            try {
                const privacyMode = await this.deps.fetch(slot.accessToken, PRIVACY_MODE_TIMEOUT_MS);
                if (this.isActive(slot)) {
                    this.resolved = {
                        accessToken: slot.accessToken,
                        privacyMode
                    };
                }
                return privacyMode;
            } catch (error3) {
                if (this.isActive(slot)) {
                    this.retryAfter(slot, error3, 0);
                }
                return void 0;
            }
        };
    }
    dispose() {
        this.pendingRetry?.dispose();
        this.pendingRetry = void 0;
    }
    isActive(slot) {
        return this.deps.store.getActiveAuth() === slot;
    }
    retryAfter(slot, error3, retries) {
        const { code, message } = ConnectError.from(error3);
        if (!RETRYABLE_PRIVACY_MODE_CODES.has(code)) {
            this.deps.log(`[agent-host-daemon] privacy mode unavailable: ${message}`);
            return;
        }
        if (retries === 0) {
            this.deps.log(`[agent-host-daemon] privacy mode unavailable, retrying: ${message}`);
        }
        const baseDelayMs = PRIVACY_MODE_RETRY_DELAYS_MS[retries] ?? PRIVACY_MODE_RETRY_MAX_DELAY_MS;
        const delayMs = baseDelayMs * (0.8 + Math.random() * 0.4);
        this.pendingRetry = (this.deps.schedule ?? scheduleTimeout)(delayMs, ()=>{
            void this.retry(slot, retries + 1);
        });
    }
    async retry(slot, retries) {
        this.pendingRetry = void 0;
        if (!this.isActive(slot)) {
            return;
        }
        try {
            const privacyMode = await this.deps.fetch(slot.accessToken, PRIVACY_MODE_RETRY_TIMEOUT_MS);
            if (!this.isActive(slot)) {
                return;
            }
            this.resolved = {
                accessToken: slot.accessToken,
                privacyMode
            };
            await this.deps.credentialManager.setAuthentication(slot.accessToken, "", void 0, privacyMode);
            this.deps.log(`[agent-host-daemon] privacy mode resolved after ${retries} retries`);
        } catch (error3) {
            if (this.isActive(slot)) {
                this.retryAfter(slot, error3, retries);
            }
        }
    }
};

}
