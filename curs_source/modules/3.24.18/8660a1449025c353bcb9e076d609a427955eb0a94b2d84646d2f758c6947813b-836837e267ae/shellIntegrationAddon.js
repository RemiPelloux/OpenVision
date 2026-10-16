import { Fa, Gt, Pn, Q_y, Qe, st, tt } from "./Iwo.js";
import { Rvl, cPg, kDk, zAi } from "./Ycg.js";
import { bDk, oPg } from "./bufferMarkCapability.js";
import { iPg, qAi } from "./commandDetectionCapability.js";
import { rPg, vDk } from "./cwdDetectionCapability.js";
import { _Dk, sPg } from "./partialCommandDetectionCapability.js";
import { SDk, lPg } from "./promptTypeDetectionCapability.js";
import { aPg, yDk } from "./shellEnvDetectionCapability.js";
import { dAi, uAi } from "./terminalCapabilityStore.js";
import { UAi } from "./terminalEnvironment.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
var uPg;
export { uPg };
var __wakaru_wDk_initialized = false;
export function wDk() {
if (__wakaru_wDk_initialized) return;
__wakaru_wDk_initialized = true;
"use strict";
E(), Qe(), dAi(), iPg(), vDk(), _Dk(), Gt(), bDk(), fn(), UAi(), Fa(), yDk(), SDk(), uPg = class extends st {
    constructor(t, e, n, i){
        super(), this._nonce = t, this._disableShellIntegrationReporting = e, this._onDidExecuteText = n, this._logService = i, this.capabilities = this._register(new uAi), this._seenSequences = new Set, this._status = 0, this._onDidChangeStatus = this._register(new tt), this.onDidChangeStatus = this._onDidChangeStatus.event, this._onDidChangeSeenSequences = this._register(new tt), this.onDidChangeSeenSequences = this._onDidChangeSeenSequences.event, this._register(Pn(()=>{
            this._clearActivationTimeout();
        }));
    }
    get seenSequences() {
        return this._seenSequences;
    }
    get status() {
        return this._status;
    }
    activate(t) {
        this._terminal = t, this.capabilities.add(3, this._register(new sPg(this._terminal, this._onDidExecuteText))), this._register(t.parser.registerOscHandler(633, (e)=>this._handleVSCodeSequence(e))), this._register(t.parser.registerOscHandler(1337, (e)=>this._doHandleITermSequence(e))), this._register(t.parser.registerOscHandler(133, (e)=>this._handleFinalTermSequence(e))), this._register(t.parser.registerOscHandler(7, (e)=>this._doHandleSetCwd(e))), this._register(t.parser.registerOscHandler(9, (e)=>this._doHandleSetWindowsFriendlyCwd(e))), this._ensureCapabilitiesOrLogFailure();
    }
    getMarkerId(t, e) {
        this._createOrGetBufferMarkDetection(t).getMark(e);
    }
    _markSequenceSeen(t) {
        this._seenSequences.has(t) || (this._seenSequences.add(t), this._onDidChangeSeenSequences.fire(this._seenSequences));
    }
    _handleFinalTermSequence(t) {
        const e = this._doHandleFinalTermSequence(t);
        return this._status === 0 && (this._status = 1, this._onDidChangeStatus.fire(this._status)), e;
    }
    _doHandleFinalTermSequence(t) {
        if (!this._terminal) return !1;
        const [e, ...n] = t.split(";");
        switch(this._markSequenceSeen(e), e){
            case "A":
                return this._createOrGetCommandDetection(this._terminal).handlePromptStart(), !0;
            case "B":
                return this._createOrGetCommandDetection(this._terminal).handleCommandStart({
                    ignoreCommandLine: !0
                }), !0;
            case "C":
                return this._createOrGetCommandDetection(this._terminal).handleCommandExecuted(), !0;
            case "D":
                {
                    let i;
                    if (n.length === 1) {
                        const r = parseInt(n[0]);
                        i = Number.isNaN(r) ? void 0 : r;
                    }
                    return this._createOrGetCommandDetection(this._terminal).handleCommandFinished(i), !0;
                }
        }
        return !1;
    }
    _handleVSCodeSequence(t) {
        const e = this._doHandleVSCodeSequence(t);
        return e && this._clearActivationTimeout(), this._status !== 2 && (this._status = 2, this._onDidChangeStatus.fire(this._status)), e;
    }
    _ensureCapabilitiesOrLogFailure() {
        this._disableShellIntegrationReporting || (this._activationTimeout = setTimeout(()=>{
            !this.capabilities.get(2) && !this.capabilities.get(0) && this._logService.warn("Shell integration failed to add capabilities within 10 seconds");
        }, 1e4));
    }
    _clearActivationTimeout() {
        this._activationTimeout !== void 0 && (clearTimeout(this._activationTimeout), this._activationTimeout = void 0);
    }
    _doHandleVSCodeSequence(t) {
        if (!this._terminal) return !1;
        const e = t.indexOf(";"), n = e === -1 ? t : t.substring(0, e);
        this._markSequenceSeen(n);
        const i = e === -1 ? [] : t.substring(e + 1).split(";");
        switch(n){
            case "A":
                return this._createOrGetCommandDetection(this._terminal).handlePromptStart(), !0;
            case "B":
                return this._createOrGetCommandDetection(this._terminal).handleCommandStart(), !0;
            case "C":
                return this._createOrGetCommandDetection(this._terminal).handleCommandExecuted(), !0;
            case "D":
                {
                    const r = i[0];
                    let s;
                    if (r !== void 0) {
                        const o = parseInt(r);
                        s = Number.isNaN(o) ? void 0 : o;
                    }
                    return this._createOrGetCommandDetection(this._terminal).handleCommandFinished(s), !0;
                }
            case "E":
                {
                    const r = i[0], s = i[1];
                    let o;
                    return r !== void 0 ? o = zAi(r) : o = "", this._createOrGetCommandDetection(this._terminal).setCommandLine(o, s === this._nonce), !0;
                }
            case "F":
                return this._createOrGetCommandDetection(this._terminal).handleContinuationStart(), !0;
            case "G":
                return this._createOrGetCommandDetection(this._terminal).handleContinuationEnd(), !0;
            case "EnvJson":
                {
                    const r = i[0], s = i[1];
                    if (r !== void 0) try {
                        const o = JSON.parse(zAi(r));
                        this._createOrGetShellEnvDetection().setEnvironment(o, s === this._nonce);
                    } catch  {
                        this._logService.warn("Failed to parse environment from shell integration sequence", r);
                    }
                    return !0;
                }
            case "EnvSingleStart":
                return this._createOrGetShellEnvDetection().startEnvironmentSingleVar(i[0] === "1", i[1] === this._nonce), !0;
            case "EnvSingleDelete":
                {
                    const r = i[0], s = i[1], o = i[2];
                    if (r !== void 0 && s !== void 0) {
                        const a = zAi(s);
                        this._createOrGetShellEnvDetection().deleteEnvironmentSingleVar(r, a, o === this._nonce);
                    }
                    return !0;
                }
            case "EnvSingleEntry":
                {
                    const r = i[0], s = i[1], o = i[2];
                    if (r !== void 0 && s !== void 0) {
                        const a = zAi(s);
                        this._createOrGetShellEnvDetection().setEnvironmentSingleVar(r, a, o === this._nonce);
                    }
                    return !0;
                }
            case "EnvSingleEnd":
                return this._createOrGetShellEnvDetection().endEnvironmentSingleVar(i[0] === this._nonce), !0;
            case "H":
                return this._createOrGetCommandDetection(this._terminal).handleRightPromptStart(), !0;
            case "I":
                return this._createOrGetCommandDetection(this._terminal).handleRightPromptEnd(), !0;
            case "P":
                {
                    const r = i[0], s = r !== void 0 ? zAi(r) : "", { key: o, value: a } = cPg(s);
                    if (a === void 0) return !0;
                    switch(o){
                        case "ContinuationPrompt":
                            return this._updateContinuationPrompt(Q_y(a)), !0;
                        case "Cwd":
                            return this._updateCwd(a), !0;
                        case "IsWindows":
                            return this._createOrGetCommandDetection(this._terminal).setIsWindowsPty(a === "True"), !0;
                        case "HasRichCommandDetection":
                            return this._createOrGetCommandDetection(this._terminal).setHasRichCommandDetection(a === "True"), !0;
                        case "Prompt":
                            {
                                const l = a.replace(/\x1b\[[0-9;]*m/g, "");
                                return this._updatePromptTerminator(l), !0;
                            }
                        case "PromptType":
                            return this._createOrGetPromptTypeDetection().setPromptType(a), !0;
                        case "Task":
                            return this._createOrGetBufferMarkDetection(this._terminal), this.capabilities.get(2)?.setIsCommandStorageDisabled(), !0;
                    }
                }
            case "SetMark":
                return this._createOrGetBufferMarkDetection(this._terminal).addMark(kDk(i)), !0;
        }
        return !1;
    }
    _updateContinuationPrompt(t) {
        this._terminal && this._createOrGetCommandDetection(this._terminal).setContinuationPrompt(t);
    }
    _updatePromptTerminator(t) {
        if (!this._terminal) return;
        const e = t.substring(t.lastIndexOf(`
`) + 1), n = e.substring(e.lastIndexOf(" "));
        n && this._createOrGetCommandDetection(this._terminal).setPromptTerminator(n, e);
    }
    _updateCwd(t) {
        t = Rvl(t), this._createOrGetCwdDetection().updateCwd(t), this.capabilities.get(2)?.setCwd(t);
    }
    _doHandleITermSequence(t) {
        if (!this._terminal) return !1;
        const [e] = t.split(";");
        switch(this._markSequenceSeen(`1337;${e}`), e){
            case "SetMark":
                this._createOrGetBufferMarkDetection(this._terminal).addMark();
            default:
                {
                    const { key: n, value: i } = cPg(e);
                    if (i === void 0) return !0;
                    switch(n){
                        case "CurrentDir":
                            return this._updateCwd(i), !0;
                    }
                }
        }
        return !1;
    }
    _doHandleSetWindowsFriendlyCwd(t) {
        if (!this._terminal) return !1;
        const [e, ...n] = t.split(";");
        switch(this._markSequenceSeen(`9;${e}`), e){
            case "9":
                return n.length && this._updateCwd(n[0]), !0;
        }
        return !1;
    }
    _doHandleSetCwd(t) {
        if (!this._terminal) return !1;
        const [e] = t.split(";");
        if (this._markSequenceSeen(`7;${e}`), e.match(/^file:\/\/.*\//)) {
            const n = rt.parse(e);
            if (n.path && n.path.length > 0) return this._updateCwd(n.path), !0;
        }
        return !1;
    }
    serialize() {
        return !this._terminal || !this.capabilities.has(2) ? {
            isWindowsPty: !1,
            hasRichCommandDetection: !1,
            commands: [],
            promptInputModel: void 0
        } : this._createOrGetCommandDetection(this._terminal).serialize();
    }
    deserialize(t) {
        if (!this._terminal) throw new Error("Cannot restore commands before addon is activated");
        const e = this._createOrGetCommandDetection(this._terminal);
        e.deserialize(t), e.cwd && this._updateCwd(e.cwd);
    }
    _createOrGetCwdDetection() {
        let t = this.capabilities.get(0);
        return t || (t = this._register(new rPg), this.capabilities.add(0, t)), t;
    }
    _createOrGetCommandDetection(t) {
        let e = this.capabilities.get(2);
        return e || (e = this._register(new qAi(t, this._logService)), this.capabilities.add(2, e)), e;
    }
    _createOrGetBufferMarkDetection(t) {
        let e = this.capabilities.get(4);
        return e || (e = this._register(new oPg(t)), this.capabilities.add(4, e)), e;
    }
    _createOrGetShellEnvDetection() {
        let t = this.capabilities.get(5);
        return t || (t = this._register(new aPg), this.capabilities.add(5, t)), t;
    }
    _createOrGetPromptTypeDetection() {
        let t = this.capabilities.get(6);
        return t || (t = this._register(new lPg), this.capabilities.add(6, t)), t;
    }
};

}
