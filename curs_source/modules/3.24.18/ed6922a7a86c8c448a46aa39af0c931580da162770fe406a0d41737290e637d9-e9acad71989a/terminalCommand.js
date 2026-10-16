import { x } from "./tslib.es6.js";
function y9h(e, t, n, i, r, s) {
    if (!n || !r || i === void 0 || s === void 0) return "";
    let o = "";
    for(let a = n.line; a <= r.line; a++){
        const c = e.getLine(a);
        c && (o += c.translateToString(!0, a === n.line ? i : 0, a === r.line ? s : t));
    }
    return o;
}
function S9h(e, t, n, i) {
    const r = Math.max(2048 / i * 2);
    n = Math.min(n, t + r);
    let s = "";
    for(let o = t; o <= n; o++){
        const a = e.getLine(o);
        a && (s += a.translateToString(!0, 0, i));
    }
    return s;
}
function ah_(e) {
    if (!e.multiline) return 1;
    const t = e.source;
    let n = 1, i = t.indexOf("\\n");
    for(; i !== -1;)n++, i = t.indexOf("\\n", i + 1);
    return n;
}
function k9h(e, t) {
    const n = l7e(e) ? e.marker : e.commandStartMarker;
    if (!n || !e.promptStartMarker) return 1;
    let i = 1, r = e.promptStartMarker.line;
    for(; r < n.line && (t.getLine(r)?.translateToString(!0) ?? "").length === 0;)r++;
    return i = n.line - r + 1, i;
}
function w9h(e) {
    const t = l7e(e) ? e.marker : e.commandStartMarker, n = l7e(e) ? e.executedMarker : e.commandExecutedMarker;
    if (!t || !n) return 1;
    let r = Math.max(n.line, t.line) - t.line + 1;
    return (l7e(e) ? e.executedX : e.commandExecutedX) === 0 && r--, r;
}
function l7e(e) {
    return !!e.hasOutput;
}
var iMo, rMo;
export { S9h, ah_, iMo, k9h, l7e, rMo, w9h, y9h };
var __wakaru_B5n_initialized = false;
export function B5n() {
if (__wakaru_B5n_initialized) return;
__wakaru_B5n_initialized = true;
"use strict";
x(), iMo = class $Cm {
    constructor(t, n){
        this._xterm = t, this._properties = n;
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
    set endMarker(t) {
        this._properties.endMarker = t;
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
    static deserialize(t, n, i) {
        const r = t.buffer.normal, s = n.startLine !== void 0 ? t.registerMarker(n.startLine - (r.baseY + r.cursorY)) : void 0;
        if (!s) return;
        const o = n.promptStartLine !== void 0 ? t.registerMarker(n.promptStartLine - (r.baseY + r.cursorY)) : void 0, a = n.endLine !== void 0 ? t.registerMarker(n.endLine - (r.baseY + r.cursorY)) : void 0, c = n.executedLine !== void 0 ? t.registerMarker(n.executedLine - (r.baseY + r.cursorY)) : void 0;
        return new $Cm(t, {
            command: i ? "" : n.command,
            commandLineConfidence: n.commandLineConfidence ?? "low",
            isTrusted: n.isTrusted,
            promptStartMarker: o,
            marker: s,
            startX: n.startX,
            endMarker: a,
            executedMarker: c,
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
    serialize(t) {
        return {
            promptStartLine: this.promptStartMarker?.line,
            startLine: this.marker?.line,
            startX: void 0,
            endLine: this.endMarker?.line,
            executedLine: this.executedMarker?.line,
            executedX: this.executedX,
            command: t ? "" : this.command,
            commandLineConfidence: t ? "low" : this.commandLineConfidence,
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
        return y9h(this._xterm.buffer.active, this._xterm.cols, this.marker, this.startX, this.executedMarker, this.executedX);
    }
    getOutput() {
        if (!this.executedMarker || !this.endMarker) return;
        const t = this.executedMarker.line, n = this.endMarker.line;
        if (t === n) return;
        let i = "", r;
        for(let s = t; s < n; s++){
            if (r = this._xterm.buffer.active.getLine(s), !r) continue;
            const o = (r.isWrapped ? "" : `
`) + r.translateToString(!r.isWrapped);
            i += o;
        }
        return i === "" ? void 0 : i;
    }
    getOutputMatch(t) {
        if (!this.executedMarker || !this.endMarker) return;
        const n = this.endMarker.line;
        if (n === -1) return;
        const i = this._xterm.buffer.active, r = Math.max(this.executedMarker.line, 0), s = t.lineMatcher, o = typeof s == "string" ? 1 : t.length || ah_(s), a = [];
        let c;
        if (t.anchor === "bottom") for(let l = n - (t.offset || 0); l >= r; l--){
            let u = l;
            const h = l;
            for(; u >= r && i.getLine(u)?.isWrapped;)u--;
            if (l = u, a.unshift(S9h(i, u, h, this._xterm.cols)), c || (c = a[0].match(s)), a.length >= o) break;
        }
        else for(let l = r + (t.offset || 0); l < n; l++){
            const u = l;
            let h = l;
            for(; h + 1 < n && i.getLine(h + 1)?.isWrapped;)h++;
            if (l = h, a.push(S9h(i, u, h, this._xterm.cols)), c || (c = a[a.length - 1].match(s)), a.length >= o) break;
        }
        return c ? {
            regexMatch: c,
            outputLines: a
        } : void 0;
    }
    hasOutput() {
        return !this.executedMarker?.isDisposed && !this.endMarker?.isDisposed && !!(this.executedMarker && this.endMarker && this.executedMarker.line < this.endMarker.line);
    }
    getPromptRowCount() {
        return k9h(this, this._xterm.buffer.active);
    }
    getCommandRowCount() {
        return w9h(this);
    }
}, rMo = class {
    constructor(e){
        this._xterm = e;
    }
    dispose() {
        if (this.promptStartMarker?.dispose(), this.commandStartMarker?.dispose(), this.commandLines?.dispose(), this.commandExecutedMarker?.dispose(), this.commandFinishedMarker?.dispose(), this.currentContinuationMarker?.dispose(), this.continuations) for (const e of this.continuations)e.marker.dispose();
    }
    serialize(e) {
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
            cwd: e,
            exitCode: void 0,
            commandStartLineContent: void 0,
            timestamp: 0,
            duration: 0,
            markProperties: void 0
        };
    }
    promoteToFullCommand(e, t, n, i) {
        if (t === void 0 && this.command === void 0 && (this.command = ""), this.command !== void 0 && !this.command.startsWith("\\") || n) return new iMo(this._xterm, {
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
            cwd: e,
            exitCode: t,
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
        return y9h(this._xterm.buffer.active, this._xterm.cols, this.commandStartMarker, this.commandStartX, this.commandExecutedMarker, this.commandExecutedX);
    }
    getPromptRowCount() {
        return k9h(this, this._xterm.buffer.active);
    }
    getCommandRowCount() {
        return w9h(this);
    }
};

}
