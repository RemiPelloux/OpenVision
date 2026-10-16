import { Gt, Pn, Qe, st, tt } from "./Iwo.js";
import { bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { QCv, eSe } from "./glass-pending-intent-service.contract.js";
import { E } from "./tslib.es6.js";
var JCv, eTv;
export { JCv, eTv };
var __wakaru_tSe_initialized = false;
export function tSe() {
if (__wakaru_tSe_initialized) return;
__wakaru_tSe_initialized = true;
"use strict";
E(), Gt(), Qe(), Rn(), QCv(), QCv(), JCv = {
    pendingPrompt: void 0,
    pendingSlashCommand: void 0,
    pendingOutputChannel: void 0,
    pendingExternalFileOpen: void 0,
    modelVersion: 0
}, eTv = class extends st {
    constructor(){
        super(...arguments), this._snapshot = JCv, this._recommendedActionActivationAttempts = new Map, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event;
    }
    getSnapshot() {
        return this._snapshot;
    }
    setPendingPrompt(t) {
        if (t === void 0) {
            this._update({
                pendingPrompt: void 0
            });
            return;
        }
        if (t.onCommitted === void 0) {
            this._pendingPluginPromptActivation = void 0, this._update({
                pendingPrompt: t
            });
            return;
        }
        const { onCommitted: e, ...n } = t;
        this._pendingPluginPromptActivation = {
            ...e(),
            prompt: t.text
        }, this._update({
            pendingPrompt: n
        });
    }
    consumePendingPrompt() {
        this.setPendingPrompt(void 0);
    }
    setPendingSlashCommand(t) {
        t !== void 0 && this.clearPendingPluginPromptActivation(), this._update({
            pendingSlashCommand: t
        });
    }
    consumePendingSlashCommand() {
        this.setPendingSlashCommand(void 0);
    }
    setPendingOutputChannel(t) {
        this._update({
            pendingOutputChannel: t
        });
    }
    consumePendingOutputChannel() {
        this.setPendingOutputChannel(void 0);
    }
    setPendingExternalFileOpen(t) {
        this._update({
            pendingExternalFileOpen: t
        });
    }
    consumePendingExternalFileOpen() {
        this.setPendingExternalFileOpen(void 0);
    }
    getPendingPluginPromptActivation() {
        return this._pendingPluginPromptActivation;
    }
    setPendingPluginPromptActivation(t) {
        this._pendingPluginPromptActivation = t;
    }
    clearPendingPluginPromptActivation(t) {
        t !== void 0 && this._pendingPluginPromptActivation !== t || (this._pendingPluginPromptActivation = void 0);
    }
    registerRecommendedActionActivationAttempt(t, e) {
        let n = this._recommendedActionActivationAttempts.get(t);
        return n === void 0 && (n = new Set, this._recommendedActionActivationAttempts.set(t, n)), n.add(e), Pn(()=>{
            n.delete(e), n.size === 0 && this._recommendedActionActivationAttempts.get(t) === n && this._recommendedActionActivationAttempts.delete(t);
        });
    }
    cancelRecommendedActionActivationAttempts(t) {
        const e = t === void 0 ? [
            ...this._recommendedActionActivationAttempts.entries()
        ] : [
            [
                t,
                this._recommendedActionActivationAttempts.get(t)
            ]
        ];
        for (const [n, i] of e)if (i !== void 0) {
            this._recommendedActionActivationAttempts.delete(n);
            for (const r of i)r.abort();
        }
    }
    incrementModelVersion() {
        this._update({
            modelVersion: this._snapshot.modelVersion + 1
        });
    }
    dispose() {
        this.cancelRecommendedActionActivationAttempts(), super.dispose();
    }
    _update(t) {
        this._snapshot = {
            ...this._snapshot,
            ...t
        }, this._onDidChange.fire();
    }
}, bn(eSe, eTv, 1, 1);

}
