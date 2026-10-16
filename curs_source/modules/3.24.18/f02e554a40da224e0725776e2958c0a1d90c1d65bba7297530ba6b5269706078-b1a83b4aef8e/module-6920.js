"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AgentRunWebSocketConnectionContextTracker = void 0, exports.agentRunWebSocketConnectionContextsEqual = s, exports.fingerprintAgentRunCredential = i, exports.fingerprintAgentRunPoolIdentity = function(t) {
    const e = (0, n.createHash)("sha256");
    for (const r of o){
        const n = t.get(r);
        e.update(`${r}\0`), e.update(null === n ? "missing\0" : `present\0${Buffer.byteLength(n, "utf8")}\0${n}`), e.update("\0");
    }
    return e.digest("hex");
}, exports.createHostAgentRunWebSocketConnectionContextSource = function(t, e) {
    return {
        read: ()=>({
                endpoint: e.endpoint,
                credentialFingerprint: i(t.getCursorAuthToken()),
                teamId: t.getTeamId(),
                hasEffectiveProxy: t.hasEffectiveProxy?.() ?? !1
            }),
        subscribe: (e)=>{
            const r = [];
            try {
                r.push(t.onDidChangeCursorAuthToken(()=>e("auth_token"))), r.push(t.onDidChangeCursorCreds(()=>e("cursor_creds"))), void 0 !== t.onDidChangeActiveTeamId && r.push(t.onDidChangeActiveTeamId(()=>e("active_team"))), void 0 !== t.onDidChangeProxy && r.push(t.onDidChangeProxy(()=>e("proxy")));
            } catch (t) {
                for (const t of r)try {
                    t.dispose();
                } catch  {}
                throw t;
            }
            return {
                dispose: ()=>{
                    let t, e = !1;
                    for (const n of r)try {
                        n.dispose();
                    } catch (r) {
                        e || (e = !0, t = r);
                    }
                    if (e) throw t;
                }
            };
        }
    };
};
const n = require("./module-7598.js");
function s(t, e) {
    return t.endpoint === e.endpoint && t.credentialFingerprint === e.credentialFingerprint && t.teamId === e.teamId && t.hasEffectiveProxy === e.hasEffectiveProxy;
}
function i(t) {
    return (0, n.createHash)("sha256").update(void 0 === t ? "missing" : `present\0${t}`).digest("hex");
}
exports.AgentRunWebSocketConnectionContextTracker = class {
    constructor(t, e, r = ()=>!0){
        this.source = t, this.observeChange = e, this.shouldObserveChange = r;
    }
    current() {
        const t = this.source.read();
        if (void 0 !== this.context && void 0 !== this.controller && s(this.context, t)) return this.ensureSubscription(this.controller), {
            context: this.context,
            signal: this.controller.signal
        };
        if (this.invalidate(), void 0 !== this.context && void 0 !== this.controller) return this.current();
        const e = new AbortController;
        return this.context = t, this.controller = e, this.ensureSubscription(e), {
            context: t,
            signal: e.signal
        };
    }
    pause() {
        const t = this.subscription;
        this.subscription = void 0, t?.dispose();
    }
    invalidate() {
        const t = this.subscription, e = this.controller;
        this.subscription = void 0, this.context = void 0, this.controller = void 0, e?.abort(), t?.dispose();
    }
    ensureSubscription(t) {
        if (void 0 !== this.subscription) return;
        let e;
        try {
            e = this.source.subscribe((e)=>{
                let r = "unknown";
                try {
                    r = void 0 === this.context || !s(this.context, this.source.read());
                } catch  {}
                let n = !1;
                try {
                    n = this.shouldObserveChange();
                } catch  {}
                n && this.emitChange({
                    cause: e,
                    identityChanged: r
                }), !1 !== r && this.invalidateGeneration(t);
            });
        } catch (e) {
            throw this.invalidateGeneration(t), e;
        }
        this.controller === t ? this.subscription = e : e.dispose();
    }
    invalidateGeneration(t) {
        this.controller === t && this.invalidate();
    }
    emitChange(t) {
        try {
            this.observeChange?.(t);
        } catch  {}
    }
};
const o = [
    "authorization"
];
