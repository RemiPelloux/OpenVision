import { Ps, Se, Ul, bt, fug, hp, rn, ve, we } from "./HVr.js";
import { A9h, dh_ } from "./bufferMarkCapability.js";
import { E9h, H5n } from "./commandDetectionCapability.js";
import { lh_, x9h } from "./cwdDetectionCapability.js";
import { I9h, uh_ } from "./partialCommandDetectionCapability.js";
import { D9h, ph_ } from "./promptTypeDetectionCapability.js";
import { R9h, hh_ } from "./shellEnvDetectionCapability.js";
import { Vqt, b0t } from "./terminalCapabilityStore.js";
import { N5n } from "./terminalEnvironment.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
function JDo(e) {
    return e.match(/^['"].*['"]$/) && (e = e.substring(1, e.length - 1)), hp === Ul.Windows && e && e[1] === ":" ? e[0].toUpperCase() + e.substring(1) : e;
}
function W5n(e) {
    return e.replaceAll(/\\(\\|x([0-9a-f]{2}))/gi, (t, n, i)=>i ? String.fromCharCode(parseInt(i, 16)) : n);
}
function M9h(e) {
    const t = e.indexOf("=");
    return t === -1 ? {
        key: e,
        value: void 0
    } : {
        key: e.substring(0, t),
        value: e.substring(1 + t)
    };
}
function mh_(e) {
    let t, n = !1;
    for (const i of e)i !== void 0 && (i === "Hidden" && (n = !0), i.startsWith("Id=") && (t = i.substring(3)));
    return {
        id: t,
        hidden: n
    };
}
var P9h;
export { JDo, M9h, P9h, W5n, mh_ };
var __wakaru_gh__initialized = false;
export function gh_() {
if (__wakaru_gh__initialized) return;
__wakaru_gh__initialized = true;
"use strict";
x(), Se(), Vqt(), E9h(), lh_(), uh_(), bt(), dh_(), Qt(), N5n(), Ps(), hh_(), ph_(), P9h = class extends we {
    constructor(e, t, n, i){
        super(), this._nonce = e, this._disableShellIntegrationReporting = t, this._onDidExecuteText = n, this._logService = i, this.capabilities = this._register(new b0t), this._seenSequences = new Set, this._status = 0, this._onDidChangeStatus = this._register(new ve), this.onDidChangeStatus = this._onDidChangeStatus.event, this._onDidChangeSeenSequences = this._register(new ve), this.onDidChangeSeenSequences = this._onDidChangeSeenSequences.event, this._register(rn(()=>{
            this._clearActivationTimeout();
        }));
    }
    get seenSequences() {
        return this._seenSequences;
    }
    get status() {
        return this._status;
    }
    activate(e) {
        this._terminal = e, this.capabilities.add(3, this._register(new I9h(this._terminal, this._onDidExecuteText))), this._register(e.parser.registerOscHandler(633, (t)=>this._handleVSCodeSequence(t))), this._register(e.parser.registerOscHandler(1337, (t)=>this._doHandleITermSequence(t))), this._register(e.parser.registerOscHandler(133, (t)=>this._handleFinalTermSequence(t))), this._register(e.parser.registerOscHandler(7, (t)=>this._doHandleSetCwd(t))), this._register(e.parser.registerOscHandler(9, (t)=>this._doHandleSetWindowsFriendlyCwd(t))), this._ensureCapabilitiesOrLogFailure();
    }
    getMarkerId(e, t) {
        this._createOrGetBufferMarkDetection(e).getMark(t);
    }
    _markSequenceSeen(e) {
        this._seenSequences.has(e) || (this._seenSequences.add(e), this._onDidChangeSeenSequences.fire(this._seenSequences));
    }
    _handleFinalTermSequence(e) {
        const t = this._doHandleFinalTermSequence(e);
        return this._status === 0 && (this._status = 1, this._onDidChangeStatus.fire(this._status)), t;
    }
    _doHandleFinalTermSequence(e) {
        if (!this._terminal) return !1;
        const [t, ...n] = e.split(";");
        switch(this._markSequenceSeen(t), t){
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
    _handleVSCodeSequence(e) {
        const t = this._doHandleVSCodeSequence(e);
        return t && this._clearActivationTimeout(), this._status !== 2 && (this._status = 2, this._onDidChangeStatus.fire(this._status)), t;
    }
    _ensureCapabilitiesOrLogFailure() {
        this._disableShellIntegrationReporting || (this._activationTimeout = setTimeout(()=>{
            !this.capabilities.get(2) && !this.capabilities.get(0) && this._logService.warn("Shell integration failed to add capabilities within 10 seconds");
        }, 1e4));
    }
    _clearActivationTimeout() {
        this._activationTimeout !== void 0 && (clearTimeout(this._activationTimeout), this._activationTimeout = void 0);
    }
    _doHandleVSCodeSequence(e) {
        if (!this._terminal) return !1;
        const t = e.indexOf(";"), n = t === -1 ? e : e.substring(0, t);
        this._markSequenceSeen(n);
        const i = t === -1 ? [] : e.substring(t + 1).split(";");
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
                    return r !== void 0 ? o = W5n(r) : o = "", this._createOrGetCommandDetection(this._terminal).setCommandLine(o, s === this._nonce), !0;
                }
            case "F":
                return this._createOrGetCommandDetection(this._terminal).handleContinuationStart(), !0;
            case "G":
                return this._createOrGetCommandDetection(this._terminal).handleContinuationEnd(), !0;
            case "EnvJson":
                {
                    const r = i[0], s = i[1];
                    if (r !== void 0) try {
                        const o = JSON.parse(W5n(r));
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
                        const a = W5n(s);
                        this._createOrGetShellEnvDetection().deleteEnvironmentSingleVar(r, a, o === this._nonce);
                    }
                    return !0;
                }
            case "EnvSingleEntry":
                {
                    const r = i[0], s = i[1], o = i[2];
                    if (r !== void 0 && s !== void 0) {
                        const a = W5n(s);
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
                    const r = i[0], s = r !== void 0 ? W5n(r) : "", { key: o, value: a } = M9h(s);
                    if (a === void 0) return !0;
                    switch(o){
                        case "ContinuationPrompt":
                            return this._updateContinuationPrompt(fug(a)), !0;
                        case "Cwd":
                            return this._updateCwd(a), !0;
                        case "IsWindows":
                            return this._createOrGetCommandDetection(this._terminal).setIsWindowsPty(a === "True"), !0;
                        case "HasRichCommandDetection":
                            return this._createOrGetCommandDetection(this._terminal).setHasRichCommandDetection(a === "True"), !0;
                        case "Prompt":
                            {
                                const c = a.replace(/\x1b\[[0-9;]*m/g, "");
                                return this._updatePromptTerminator(c), !0;
                            }
                        case "PromptType":
                            return this._createOrGetPromptTypeDetection().setPromptType(a), !0;
                        case "Task":
                            return this._createOrGetBufferMarkDetection(this._terminal), this.capabilities.get(2)?.setIsCommandStorageDisabled(), !0;
                    }
                }
            case "SetMark":
                return this._createOrGetBufferMarkDetection(this._terminal).addMark(mh_(i)), !0;
        }
        return !1;
    }
    _updateContinuationPrompt(e) {
        this._terminal && this._createOrGetCommandDetection(this._terminal).setContinuationPrompt(e);
    }
    _updatePromptTerminator(e) {
        if (!this._terminal) return;
        const t = e.substring(e.lastIndexOf(`
`) + 1), n = t.substring(t.lastIndexOf(" "));
        n && this._createOrGetCommandDetection(this._terminal).setPromptTerminator(n, t);
    }
    _updateCwd(e) {
        e = JDo(e), this._createOrGetCwdDetection().updateCwd(e), this.capabilities.get(2)?.setCwd(e);
    }
    _doHandleITermSequence(e) {
        if (!this._terminal) return !1;
        const [t] = e.split(";");
        switch(this._markSequenceSeen(`1337;${t}`), t){
            case "SetMark":
                this._createOrGetBufferMarkDetection(this._terminal).addMark();
            default:
                {
                    const { key: n, value: i } = M9h(t);
                    if (i === void 0) return !0;
                    switch(n){
                        case "CurrentDir":
                            return this._updateCwd(i), !0;
                    }
                }
        }
        return !1;
    }
    _doHandleSetWindowsFriendlyCwd(e) {
        if (!this._terminal) return !1;
        const [t, ...n] = e.split(";");
        switch(this._markSequenceSeen(`9;${t}`), t){
            case "9":
                return n.length && this._updateCwd(n[0]), !0;
        }
        return !1;
    }
    _doHandleSetCwd(e) {
        if (!this._terminal) return !1;
        const [t] = e.split(";");
        if (this._markSequenceSeen(`7;${t}`), t.match(/^file:\/\/.*\//)) {
            const n = Ee.parse(t);
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
    deserialize(e) {
        if (!this._terminal) throw new Error("Cannot restore commands before addon is activated");
        const t = this._createOrGetCommandDetection(this._terminal);
        t.deserialize(e), t.cwd && this._updateCwd(t.cwd);
    }
    _createOrGetCwdDetection() {
        let e = this.capabilities.get(0);
        return e || (e = this._register(new x9h), this.capabilities.add(0, e)), e;
    }
    _createOrGetCommandDetection(e) {
        let t = this.capabilities.get(2);
        return t || (t = this._register(new H5n(e, this._logService)), this.capabilities.add(2, t)), t;
    }
    _createOrGetBufferMarkDetection(e) {
        let t = this.capabilities.get(4);
        return t || (t = this._register(new A9h(e)), this.capabilities.add(4, t)), t;
    }
    _createOrGetShellEnvDetection() {
        let e = this.capabilities.get(5);
        return e || (e = this._register(new R9h), this.capabilities.add(5, e)), e;
    }
    _createOrGetPromptTypeDetection() {
        let e = this.capabilities.get(6);
        return e || (e = this._register(new D9h), this.capabilities.add(6, e)), e;
    }
};

}
