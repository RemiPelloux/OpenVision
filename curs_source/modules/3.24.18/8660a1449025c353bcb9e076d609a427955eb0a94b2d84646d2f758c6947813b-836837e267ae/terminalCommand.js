import { J2g, Q2g, Z2g, ePg, gDk } from "./Ycg.js";
import { E } from "./tslib.es6.js";
var Nvl, Lvl;
export { Lvl, Nvl };
var __wakaru_HAi_initialized = false;
export function HAi() {
if (__wakaru_HAi_initialized) return;
__wakaru_HAi_initialized = true;
"use strict";
E(), Nvl = class xPb {
    constructor(e, n){
        this._xterm = e, this._properties = n;
    }
    get command() {
        return this._properties.command;
    }
    get commandLineConfidence() {
        return this._properties.commandLineConfidence;
    }
    get isTrusted() {
        return this._properties.isTrusted;
    }
    get timestamp() {
        return this._properties.timestamp;
    }
    get duration() {
        return this._properties.duration;
    }
    get promptStartMarker() {
        return this._properties.promptStartMarker;
    }
    get marker() {
        return this._properties.marker;
    }
    get endMarker() {
        return this._properties.endMarker;
    }
    set endMarker(e) {
        this._properties.endMarker = e;
    }
    get executedMarker() {
        return this._properties.executedMarker;
    }
    get aliases() {
        return this._properties.aliases;
    }
    get wasReplayed() {
        return this._properties.wasReplayed;
    }
    get cwd() {
        return this._properties.cwd;
    }
    get exitCode() {
        return this._properties.exitCode;
    }
    get commandStartLineContent() {
        return this._properties.commandStartLineContent;
    }
    get markProperties() {
        return this._properties.markProperties;
    }
    get executedX() {
        return this._properties.executedX;
    }
    get startX() {
        return this._properties.startX;
    }
    dispose() {
        this._properties.promptStartMarker?.dispose(), this._properties.marker?.dispose(), this._properties.endMarker?.dispose(), this._properties.executedMarker?.dispose();
    }
    static deserialize(e, n, i) {
        const r = e.buffer.normal, s = n.startLine !== void 0 ? e.registerMarker(n.startLine - (r.baseY + r.cursorY)) : void 0;
        if (!s) return;
        const o = n.promptStartLine !== void 0 ? e.registerMarker(n.promptStartLine - (r.baseY + r.cursorY)) : void 0, a = n.endLine !== void 0 ? e.registerMarker(n.endLine - (r.baseY + r.cursorY)) : void 0, l = n.executedLine !== void 0 ? e.registerMarker(n.executedLine - (r.baseY + r.cursorY)) : void 0;
        return new xPb(e, {
            command: i ? "" : n.command,
            commandLineConfidence: n.commandLineConfidence ?? "low",
            isTrusted: n.isTrusted,
            promptStartMarker: o,
            marker: s,
            startX: n.startX,
            endMarker: a,
            executedMarker: l,
            executedX: n.executedX,
            timestamp: n.timestamp,
            duration: n.duration,
            cwd: n.cwd,
            commandStartLineContent: n.commandStartLineContent,
            exitCode: n.exitCode,
            markProperties: n.markProperties,
            aliases: void 0,
            wasReplayed: !0
        });
    }
    serialize(e) {
        return {
            promptStartLine: this.promptStartMarker?.line,
            startLine: this.marker?.line,
            startX: void 0,
            endLine: this.endMarker?.line,
            executedLine: this.executedMarker?.line,
            executedX: this.executedX,
            command: e ? "" : this.command,
            commandLineConfidence: e ? "low" : this.commandLineConfidence,
            isTrusted: this.isTrusted,
            cwd: this.cwd,
            exitCode: this.exitCode,
            commandStartLineContent: this.commandStartLineContent,
            timestamp: this.timestamp,
            duration: this.duration,
            markProperties: this.markProperties
        };
    }
    extractCommandLine() {
        return Z2g(this._xterm.buffer.active, this._xterm.cols, this.marker, this.startX, this.executedMarker, this.executedX);
    }
    getOutput() {
        if (!this.executedMarker || !this.endMarker) return;
        const e = this.executedMarker.line, n = this.endMarker.line;
        if (e === n) return;
        let i = "", r;
        for(let s = e; s < n; s++){
            if (r = this._xterm.buffer.active.getLine(s), !r) continue;
            const o = (r.isWrapped ? "" : `
`) + r.translateToString(!r.isWrapped);
            i += o;
        }
        return i === "" ? void 0 : i;
    }
    getOutputMatch(e) {
        if (!this.executedMarker || !this.endMarker) return;
        const n = this.endMarker.line;
        if (n === -1) return;
        const i = this._xterm.buffer.active, r = Math.max(this.executedMarker.line, 0), s = e.lineMatcher, o = typeof s == "string" ? 1 : e.length || gDk(s), a = [];
        let l;
        if (e.anchor === "bottom") for(let c = n - (e.offset || 0); c >= r; c--){
            let u = c;
            const d = c;
            for(; u >= r && i.getLine(u)?.isWrapped;)u--;
            if (c = u, a.unshift(Q2g(i, u, d, this._xterm.cols)), l || (l = a[0].match(s)), a.length >= o) break;
        }
        else for(let c = r + (e.offset || 0); c < n; c++){
            const u = c;
            let d = c;
            for(; d + 1 < n && i.getLine(d + 1)?.isWrapped;)d++;
            if (c = d, a.push(Q2g(i, u, d, this._xterm.cols)), l || (l = a[a.length - 1].match(s)), a.length >= o) break;
        }
        return l ? {
            regexMatch: l,
            outputLines: a
        } : void 0;
    }
    hasOutput() {
        return !this.executedMarker?.isDisposed && !this.endMarker?.isDisposed && !!(this.executedMarker && this.endMarker && this.executedMarker.line < this.endMarker.line);
    }
    getPromptRowCount() {
        return J2g(this, this._xterm.buffer.active);
    }
    getCommandRowCount() {
        return ePg(this);
    }
}, Lvl = class {
    constructor(t){
        this._xterm = t;
    }
    dispose() {
        if (this.promptStartMarker?.dispose(), this.commandStartMarker?.dispose(), this.commandLines?.dispose(), this.commandExecutedMarker?.dispose(), this.commandFinishedMarker?.dispose(), this.currentContinuationMarker?.dispose(), this.continuations) for (const t of this.continuations)t.marker.dispose();
    }
    serialize(t) {
        if (this.commandStartMarker) return {
            promptStartLine: this.promptStartMarker?.line,
            startLine: this.commandStartMarker.line,
            startX: this.commandStartX,
            endLine: void 0,
            executedLine: void 0,
            executedX: void 0,
            command: "",
            commandLineConfidence: "low",
            isTrusted: !0,
            cwd: t,
            exitCode: void 0,
            commandStartLineContent: void 0,
            timestamp: 0,
            duration: 0,
            markProperties: void 0
        };
    }
    promoteToFullCommand(t, e, n, i) {
        if (e === void 0 && this.command === void 0 && (this.command = ""), this.command !== void 0 && !this.command.startsWith("\\") || n) return new Nvl(this._xterm, {
            command: n ? "" : this.command || "",
            commandLineConfidence: n ? "low" : this.commandLineConfidence || "low",
            isTrusted: !!this.isTrusted,
            promptStartMarker: this.promptStartMarker,
            marker: this.commandStartMarker,
            startX: this.commandStartX,
            endMarker: this.commandFinishedMarker,
            executedMarker: this.commandExecutedMarker,
            executedX: this.commandExecutedX,
            timestamp: Date.now(),
            duration: this.commandDuration || 0,
            cwd: t,
            exitCode: e,
            commandStartLineContent: this.commandStartLineContent,
            markProperties: i
        });
    }
    markExecutedTime() {
        this.commandExecutedTimestamp === void 0 && (this.commandExecutedTimestamp = Date.now());
    }
    markFinishedTime() {
        this.commandDuration === void 0 && this.commandExecutedTimestamp !== void 0 && (this.commandDuration = Date.now() - this.commandExecutedTimestamp);
    }
    extractCommandLine() {
        return Z2g(this._xterm.buffer.active, this._xterm.cols, this.commandStartMarker, this.commandStartX, this.commandExecutedMarker, this.commandExecutedX);
    }
    getPromptRowCount() {
        return J2g(this, this._xterm.buffer.active);
    }
    getCommandRowCount() {
        return ePg(this);
    }
};

}
