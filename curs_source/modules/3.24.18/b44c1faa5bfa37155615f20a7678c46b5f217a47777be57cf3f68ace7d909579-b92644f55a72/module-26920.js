"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AgentRunWebSocketConnectionContextTracker = void 0, exports.agentRunWebSocketConnectionContextsEqual = s, exports.fingerprintAgentRunCredential = o, exports.fingerprintAgentRunPoolIdentity = function(e) {
    const t = (0, n.createHash)("sha256");
    for (const r of i){
        const n = e.get(r);
        t.update(`${r}\0`), t.update(null === n ? "missing\0" : `present\0${Buffer.byteLength(n, "utf8")}\0${n}`), t.update("\0");
    }
    return t.digest("hex");
}, exports.createHostAgentRunWebSocketConnectionContextSource = function(e, t) {
    return {
        read: ()=>({
                endpoint: t.endpoint,
                credentialFingerprint: o(e.getCursorAuthToken()),
                teamId: e.getTeamId(),
                hasEffectiveProxy: e.hasEffectiveProxy?.() ?? !1
            }),
        subscribe: (t)=>{
            const r = [];
            try {
                r.push(e.onDidChangeCursorAuthToken(()=>t("auth_token"))), r.push(e.onDidChangeCursorCreds(()=>t("cursor_creds"))), void 0 !== e.onDidChangeActiveTeamId && r.push(e.onDidChangeActiveTeamId(()=>t("active_team"))), void 0 !== e.onDidChangeProxy && r.push(e.onDidChangeProxy(()=>t("proxy")));
            } catch (e) {
                for (const e of r)try {
                    e.dispose();
                } catch  {}
                throw e;
            }
            return {
                dispose: ()=>{
                    let e, t = !1;
                    for (const n of r)try {
                        n.dispose();
                    } catch (r) {
                        t || (t = !0, e = r);
                    }
                    if (t) throw e;
                }
            };
        }
    };
};
const n = require("./module-77598.js");
function s(e, t) {
    return e.endpoint === t.endpoint && e.credentialFingerprint === t.credentialFingerprint && e.teamId === t.teamId && e.hasEffectiveProxy === t.hasEffectiveProxy;
}
function o(e) {
    return (0, n.createHash)("sha256").update(void 0 === e ? "missing" : `present\0${e}`).digest("hex");
}
exports.AgentRunWebSocketConnectionContextTracker = class {
    constructor(e, t, r = ()=>!0){
        this.source = e, this.observeChange = t, this.shouldObserveChange = r;
    }
    current() {
        const e = this.source.read();
        if (void 0 !== this.context && void 0 !== this.controller && s(this.context, e)) return this.ensureSubscription(this.controller), {
            context: this.context,
            signal: this.controller.signal
        };
        if (this.invalidate(), void 0 !== this.context && void 0 !== this.controller) return this.current();
        const t = new AbortController;
        return this.context = e, this.controller = t, this.ensureSubscription(t), {
            context: e,
            signal: t.signal
        };
    }
    pause() {
        const e = this.subscription;
        this.subscription = void 0, e?.dispose();
    }
    invalidate() {
        const e = this.subscription, t = this.controller;
        this.subscription = void 0, this.context = void 0, this.controller = void 0, t?.abort(), e?.dispose();
    }
    ensureSubscription(e) {
        if (void 0 !== this.subscription) return;
        let t;
        try {
            t = this.source.subscribe((t)=>{
                let r = "unknown";
                try {
                    r = void 0 === this.context || !s(this.context, this.source.read());
                } catch  {}
                let n = !1;
                try {
                    n = this.shouldObserveChange();
                } catch  {}
                n && this.emitChange({
                    cause: t,
                    identityChanged: r
                }), !1 !== r && this.invalidateGeneration(e);
            });
        } catch (t) {
            throw this.invalidateGeneration(e), t;
        }
        this.controller === e ? this.subscription = t : t.dispose();
    }
    invalidateGeneration(e) {
        this.controller === e && this.invalidate();
    }
    emitChange(e) {
        try {
            this.observeChange?.(e);
        } catch  {}
    }
};
const i = [
    "authorization"
];
