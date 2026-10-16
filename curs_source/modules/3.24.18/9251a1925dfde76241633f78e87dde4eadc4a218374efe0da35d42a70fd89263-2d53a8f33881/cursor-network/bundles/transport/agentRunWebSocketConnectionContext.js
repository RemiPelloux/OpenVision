var __wakaru_require_agentRunWebSocketConnectionContext_cache;
export function require_agentRunWebSocketConnectionContext() {
if (__wakaru_require_agentRunWebSocketConnectionContext_cache) return __wakaru_require_agentRunWebSocketConnectionContext_cache;
var exports2 = {};
__wakaru_require_agentRunWebSocketConnectionContext_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AgentRunWebSocketConnectionContextTracker = void 0;
exports2.agentRunWebSocketConnectionContextsEqual = agentRunWebSocketConnectionContextsEqual;
exports2.fingerprintAgentRunCredential = fingerprintAgentRunCredential;
exports2.fingerprintAgentRunPoolIdentity = fingerprintAgentRunPoolIdentity;
exports2.createHostAgentRunWebSocketConnectionContextSource = createHostAgentRunWebSocketConnectionContextSource;
var node_crypto_1 = require("node:crypto");
function agentRunWebSocketConnectionContextsEqual(left, right) {
    return left.endpoint === right.endpoint && left.credentialFingerprint === right.credentialFingerprint && left.teamId === right.teamId && left.hasEffectiveProxy === right.hasEffectiveProxy;
}
var AgentRunWebSocketConnectionContextTracker = class {
    constructor(source, observeChange, shouldObserveChange = ()=>true){
        this.source = source;
        this.observeChange = observeChange;
        this.shouldObserveChange = shouldObserveChange;
    }
    current() {
        const context2 = this.source.read();
        if (this.context !== void 0 && this.controller !== void 0 && agentRunWebSocketConnectionContextsEqual(this.context, context2)) {
            this.ensureSubscription(this.controller);
            return {
                context: this.context,
                signal: this.controller.signal
            };
        }
        this.invalidate();
        if (this.context !== void 0 && this.controller !== void 0) {
            return this.current();
        }
        const controller = new AbortController();
        this.context = context2;
        this.controller = controller;
        this.ensureSubscription(controller);
        return {
            context: context2,
            signal: controller.signal
        };
    }
    pause() {
        const subscription = this.subscription;
        this.subscription = void 0;
        subscription?.dispose();
    }
    invalidate() {
        const subscription = this.subscription;
        const controller = this.controller;
        this.subscription = void 0;
        this.context = void 0;
        this.controller = void 0;
        controller?.abort();
        subscription?.dispose();
    }
    ensureSubscription(controller) {
        if (this.subscription !== void 0) {
            return;
        }
        let subscription;
        try {
            subscription = this.source.subscribe((cause)=>{
                let identityChanged = "unknown";
                try {
                    identityChanged = this.context === void 0 || !agentRunWebSocketConnectionContextsEqual(this.context, this.source.read());
                } catch  {}
                let shouldObserve = false;
                try {
                    shouldObserve = this.shouldObserveChange();
                } catch  {}
                if (shouldObserve) {
                    this.emitChange({
                        cause,
                        identityChanged
                    });
                }
                if (identityChanged !== false) {
                    this.invalidateGeneration(controller);
                }
            });
        } catch (error3) {
            this.invalidateGeneration(controller);
            throw error3;
        }
        if (this.controller === controller) {
            this.subscription = subscription;
        } else {
            subscription.dispose();
        }
    }
    invalidateGeneration(controller) {
        if (this.controller === controller) {
            this.invalidate();
        }
    }
    emitChange(event) {
        try {
            this.observeChange?.(event);
        } catch  {}
    }
};
exports2.AgentRunWebSocketConnectionContextTracker = AgentRunWebSocketConnectionContextTracker;
function fingerprintAgentRunCredential(credential) {
    return (0, node_crypto_1.createHash)("sha256").update(credential === void 0 ? "missing" : `present\0${credential}`).digest("hex");
}
var POOL_IDENTITY_CREDENTIAL_HEADERS = [
    "authorization"
];
function fingerprintAgentRunPoolIdentity(headers) {
    const hash = (0, node_crypto_1.createHash)("sha256");
    for (const name17 of POOL_IDENTITY_CREDENTIAL_HEADERS){
        const value = headers.get(name17);
        hash.update(`${name17}\0`);
        hash.update(value === null ? "missing\0" : `present\0${Buffer.byteLength(value, "utf8")}\0${value}`);
        hash.update("\0");
    }
    return hash.digest("hex");
}
function createHostAgentRunWebSocketConnectionContextSource(host, options2) {
    return {
        read: ()=>({
                endpoint: options2.endpoint,
                credentialFingerprint: fingerprintAgentRunCredential(host.getCursorAuthToken()),
                teamId: host.getTeamId(),
                hasEffectiveProxy: host.hasEffectiveProxy?.() ?? false
            }),
        subscribe: (onMaybeChanged)=>{
            const subscriptions = [];
            try {
                subscriptions.push(host.onDidChangeCursorAuthToken(()=>onMaybeChanged("auth_token")));
                subscriptions.push(host.onDidChangeCursorCreds(()=>onMaybeChanged("cursor_creds")));
                if (host.onDidChangeActiveTeamId !== void 0) {
                    subscriptions.push(host.onDidChangeActiveTeamId(()=>onMaybeChanged("active_team")));
                }
                if (host.onDidChangeProxy !== void 0) {
                    subscriptions.push(host.onDidChangeProxy(()=>onMaybeChanged("proxy")));
                }
            } catch (error3) {
                for (const subscription of subscriptions){
                    try {
                        subscription.dispose();
                    } catch  {}
                }
                throw error3;
            }
            return {
                dispose: ()=>{
                    let failed = false;
                    let firstError;
                    for (const subscription of subscriptions){
                        try {
                            subscription.dispose();
                        } catch (error3) {
                            if (!failed) {
                                failed = true;
                                firstError = error3;
                            }
                        }
                    }
                    if (failed) {
                        throw firstError;
                    }
                }
            };
        }
    };
}

return exports2;
}
