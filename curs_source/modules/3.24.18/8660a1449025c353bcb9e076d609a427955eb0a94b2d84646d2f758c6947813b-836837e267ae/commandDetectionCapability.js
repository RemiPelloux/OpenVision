import { Gt, NYu, Qe, Vn, st, tt } from "./Iwo.js";
import { GAi } from "./Ycg.js";
import { Yu, qn } from "./async.js";
import { SM } from "./decorators.js";
import { Ji, Li } from "./log.js";
import { WAi, fDk } from "./promptInputModel.js";
import { HAi, Lvl, Nvl } from "./terminalCommand.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { MQ } from "./ze.js";
var qAi, ihs, C2n;
export { C2n, ihs, qAi };
var __wakaru_iPg_initialized = false;
export function iPg() {
if (__wakaru_iPg_initialized) return;
__wakaru_iPg_initialized = true;
"use strict";
E(), qn(), SM(), Gt(), Qe(), Ji(), HAi(), fDk(), qAi = class extends st {
    constructor(t, e){
        super(), this._terminal = t, this._logService = e, this.type = 2, this._commands = [], this._commandMarkers = [], this.__isCommandStorageDisabled = !1, this._hasRichCommandDetection = !1, this._onCommandStarted = this._register(new tt), this.onCommandStarted = this._onCommandStarted.event, this._onCommandStartChanged = this._register(new tt), this.onCommandStartChanged = this._onCommandStartChanged.event, this._onBeforeCommandFinished = this._register(new tt), this.onBeforeCommandFinished = this._onBeforeCommandFinished.event, this._onCommandFinished = this._register(new tt), this.onCommandFinished = this._onCommandFinished.event, this._onCommandExecuted = this._register(new tt), this.onCommandExecuted = this._onCommandExecuted.event, this._onCommandInvalidated = this._register(new tt), this.onCommandInvalidated = this._onCommandInvalidated.event, this._onCurrentCommandInvalidated = this._register(new tt), this.onCurrentCommandInvalidated = this._onCurrentCommandInvalidated.event, this._onSetRichCommandDetection = this._register(new tt), this.onSetRichCommandDetection = this._onSetRichCommandDetection.event, this._currentCommand = new Lvl(this._terminal), this._promptInputModel = this._register(new WAi(this._terminal, this.onCommandStarted, this.onCommandStartChanged, this.onCommandExecuted, this._logService)), this._register(this.onCommandExecuted((i)=>{
            if (i.commandLineConfidence !== "high") {
                const r = i;
                i.command = r.extractCommandLine(), i.commandLineConfidence = "low", "getOutput" in r ? r.promptStartMarker && r.marker && r.executedMarker && i.command.indexOf(`
`) === -1 && r.startX !== void 0 && r.startX > 0 && (i.commandLineConfidence = "medium") : r.promptStartMarker && r.commandStartMarker && r.commandExecutedMarker && i.command.indexOf(`
`) === -1 && r.commandStartX !== void 0 && r.commandStartX > 0 && (i.commandLineConfidence = "medium");
            }
        }));
        const n = this;
        this._ptyHeuristicsHooks = new class {
            get onCurrentCommandInvalidatedEmitter() {
                return n._onCurrentCommandInvalidated;
            }
            get onCommandStartedEmitter() {
                return n._onCommandStarted;
            }
            get onCommandExecutedEmitter() {
                return n._onCommandExecuted;
            }
            get dimensions() {
                return n._dimensions;
            }
            get isCommandStorageDisabled() {
                return n.__isCommandStorageDisabled;
            }
            get commandMarkers() {
                return n._commandMarkers;
            }
            set commandMarkers(i) {
                n._commandMarkers = i;
            }
            get clearCommandsInViewport() {
                return n._clearCommandsInViewport.bind(n);
            }
        }, this._ptyHeuristics = this._register(new NYu(new ihs(this._terminal, this, this._ptyHeuristicsHooks, this._logService))), this._dimensions = {
            cols: this._terminal.cols,
            rows: this._terminal.rows
        }, this._register(this._terminal.onResize((i)=>this._handleResize(i))), this._register(this._terminal.onCursorMove(()=>this._handleCursorMove()));
    }
    get promptInputModel() {
        return this._promptInputModel;
    }
    get hasRichCommandDetection() {
        return this._hasRichCommandDetection;
    }
    get commands() {
        return this._commands;
    }
    get executingCommand() {
        return this._currentCommand.command;
    }
    get executingCommandObject() {
        if (this._currentCommand.commandStartMarker) return this._currentCommand.promoteToFullCommand(this._cwd, void 0, this._handleCommandStartOptions?.ignoreCommandLine ?? !1, void 0);
    }
    get executingCommandConfidence() {
        const t = this._currentCommand;
        return "commandLineConfidence" in t ? t.commandLineConfidence : void 0;
    }
    get currentCommand() {
        return this._currentCommand;
    }
    get cwd() {
        return this._cwd;
    }
    get promptTerminator() {
        return this._promptTerminator;
    }
    dispose() {
        for (const t of this._commands)t.dispose();
        this._commands.length = 0, this._currentCommand.dispose();
        for (const t of this._commandMarkers)t.dispose();
        this._commandMarkers.length = 0, super.dispose();
    }
    _handleResize(t) {
        this._ptyHeuristics.value.preHandleResize?.(t), this._dimensions.cols = t.cols, this._dimensions.rows = t.rows;
    }
    _handleCursorMove() {
        this._store.isDisposed || this._terminal.buffer.active === this._terminal.buffer.normal && this._currentCommand.commandStartMarker && this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY < this._currentCommand.commandStartMarker.line && (this._clearCommandsInViewport(), this._currentCommand.isInvalid = !0, this._onCurrentCommandInvalidated.fire({
            reason: "windows"
        }));
    }
    _clearCommandsInViewport() {
        let t = 0;
        for(let e = this._commands.length - 1; e >= 0; e--){
            const n = this._commands[e].marker?.line;
            if (n && n < this._terminal.buffer.active.baseY) break;
            t++;
        }
        t > 0 && this._onCommandInvalidated.fire(this._commands.splice(this._commands.length - t, t));
    }
    clearCommands() {
        this._commands.length > 0 && this._onCommandInvalidated.fire(this._commands.splice(0));
    }
    setContinuationPrompt(t) {
        this._promptInputModel.setContinuationPrompt(t);
    }
    setPromptTerminator(t, e) {
        this._logService.debug("CommandDetectionCapability#setPromptTerminator", t), this._promptTerminator = t, this._promptInputModel.setLastPromptLine(e);
    }
    setCwd(t) {
        this._cwd = t;
    }
    setIsWindowsPty(t) {
        if (t && !(this._ptyHeuristics.value instanceof C2n)) {
            const e = this;
            this._ptyHeuristics.value = new C2n(this._terminal, this, new class {
                get onCurrentCommandInvalidatedEmitter() {
                    return e._onCurrentCommandInvalidated;
                }
                get onCommandStartedEmitter() {
                    return e._onCommandStarted;
                }
                get onCommandExecutedEmitter() {
                    return e._onCommandExecuted;
                }
                get dimensions() {
                    return e._dimensions;
                }
                get isCommandStorageDisabled() {
                    return e.__isCommandStorageDisabled;
                }
                get commandMarkers() {
                    return e._commandMarkers;
                }
                set commandMarkers(n) {
                    e._commandMarkers = n;
                }
                get clearCommandsInViewport() {
                    return e._clearCommandsInViewport.bind(e);
                }
            }, this._logService);
        } else !t && !(this._ptyHeuristics.value instanceof ihs) && (this._ptyHeuristics.value = new ihs(this._terminal, this, this._ptyHeuristicsHooks, this._logService));
    }
    setHasRichCommandDetection(t) {
        this._hasRichCommandDetection = t, this._onSetRichCommandDetection.fire(t);
    }
    setIsCommandStorageDisabled() {
        this.__isCommandStorageDisabled = !0;
    }
    getCommandForLine(t) {
        if (this._currentCommand.promptStartMarker && t >= this._currentCommand.promptStartMarker?.line) return this._currentCommand;
        if (this._commands.length !== 0 && !((this._commands[0].promptStartMarker ?? this._commands[0].marker).line > t)) {
            for(let e = this.commands.length - 1; e >= 0; e--)if ((this.commands[e].promptStartMarker ?? this.commands[e].marker).line <= t) return this.commands[e];
        }
    }
    getCwdForLine(t) {
        if (this._currentCommand.promptStartMarker && t >= this._currentCommand.promptStartMarker?.line) return this._cwd;
        const e = this.getCommandForLine(t);
        if (e && "cwd" in e) return e.cwd;
    }
    handlePromptStart(t) {
        const e = this.commands.at(-1);
        e?.endMarker && e?.executedMarker && e.endMarker.line === e.executedMarker.line && (this._logService.debug("CommandDetectionCapability#handlePromptStart adjusted commandFinished", `${e.endMarker.line} -> ${e.executedMarker.line + 1}`), e.endMarker = GAi(this._terminal, e.executedMarker, 1)), this._currentCommand.promptStartMarker = t?.marker || (e?.endMarker ? GAi(this._terminal, e.endMarker) : this._terminal.registerMarker(0)), this._logService.debug("CommandDetectionCapability#handlePromptStart", this._terminal.buffer.active.cursorX, this._currentCommand.promptStartMarker?.line);
    }
    handleContinuationStart() {
        this._currentCommand.currentContinuationMarker = this._terminal.registerMarker(0), this._logService.debug("CommandDetectionCapability#handleContinuationStart", this._currentCommand.currentContinuationMarker);
    }
    handleContinuationEnd() {
        if (!this._currentCommand.currentContinuationMarker) {
            this._logService.warn("CommandDetectionCapability#handleContinuationEnd Received continuation end without start");
            return;
        }
        this._currentCommand.continuations || (this._currentCommand.continuations = []), this._currentCommand.continuations.push({
            marker: this._currentCommand.currentContinuationMarker,
            end: this._terminal.buffer.active.cursorX
        }), this._currentCommand.currentContinuationMarker = void 0, this._logService.debug("CommandDetectionCapability#handleContinuationEnd", this._currentCommand.continuations[this._currentCommand.continuations.length - 1]);
    }
    handleRightPromptStart() {
        this._currentCommand.commandRightPromptStartX = this._terminal.buffer.active.cursorX, this._logService.debug("CommandDetectionCapability#handleRightPromptStart", this._currentCommand.commandRightPromptStartX);
    }
    handleRightPromptEnd() {
        this._currentCommand.commandRightPromptEndX = this._terminal.buffer.active.cursorX, this._logService.debug("CommandDetectionCapability#handleRightPromptEnd", this._currentCommand.commandRightPromptEndX);
    }
    handleCommandStart(t) {
        if (this._handleCommandStartOptions = t, this._currentCommand.cwd = this._cwd, this._currentCommand.commandStartMarker = t?.marker || this._currentCommand.commandStartMarker, this._currentCommand.commandStartMarker?.line === this._terminal.buffer.active.cursorY) {
            this._currentCommand.commandStartX = this._terminal.buffer.active.cursorX, this._onCommandStartChanged.fire(), this._logService.debug("CommandDetectionCapability#handleCommandStart", this._currentCommand.commandStartX, this._currentCommand.commandStartMarker?.line);
            return;
        }
        this._ptyHeuristics.value.handleCommandStart(t);
    }
    handleCommandExecuted(t) {
        this._ptyHeuristics.value.handleCommandExecuted(t), this._currentCommand.markExecutedTime();
    }
    handleCommandFinished(t, e) {
        if (this._currentCommand.commandExecutedMarker || this.handleCommandExecuted(), this._currentCommand.markFinishedTime(), this._ptyHeuristics.value.preHandleCommandFinished?.(), this._logService.debug("CommandDetectionCapability#handleCommandFinished", this._terminal.buffer.active.cursorX, e?.marker?.line, this._currentCommand.command, this._currentCommand), t === void 0) {
            const i = this.commands.length > 0 ? this.commands[this.commands.length - 1] : void 0;
            this._currentCommand.command && this._currentCommand.command.length > 0 && i?.command === this._currentCommand.command && (t = i.exitCode);
        }
        if (this._currentCommand.commandStartMarker === void 0 || !this._terminal.buffer.active) return;
        this._currentCommand.commandFinishedMarker = e?.marker || this._terminal.registerMarker(0), this._ptyHeuristics.value.postHandleCommandFinished?.();
        const n = this._currentCommand.promoteToFullCommand(this._cwd, t, this._handleCommandStartOptions?.ignoreCommandLine ?? !1, e?.markProperties);
        n && (this._commands.push(n), this._onBeforeCommandFinished.fire(n), this._logService.debug("CommandDetectionCapability#onCommandFinished", n), this._onCommandFinished.fire(n)), this._currentCommand = new Lvl(this._terminal), this._handleCommandStartOptions = void 0;
    }
    setCommandLine(t, e) {
        this._logService.debug("CommandDetectionCapability#setCommandLine", t, e), this._currentCommand.command = t, this._currentCommand.commandLineConfidence = "high", this._currentCommand.isTrusted = e, e && this._promptInputModel.setConfidentCommandLine(t);
    }
    serialize() {
        const t = this.commands.map((n)=>n.serialize(this.__isCommandStorageDisabled)), e = this._currentCommand.serialize(this._cwd);
        return e && t.push(e), {
            isWindowsPty: this._ptyHeuristics.value instanceof C2n,
            hasRichCommandDetection: this._hasRichCommandDetection,
            commands: t,
            promptInputModel: this._promptInputModel.serialize()
        };
    }
    deserialize(t) {
        t.isWindowsPty && this.setIsWindowsPty(t.isWindowsPty), t.hasRichCommandDetection && this.setHasRichCommandDetection(t.hasRichCommandDetection);
        const e = this._terminal.buffer.normal;
        for (const n of t.commands){
            if (!n.endLine) {
                const r = n.startLine !== void 0 ? this._terminal.registerMarker(n.startLine - (e.baseY + e.cursorY)) : void 0;
                if (!r) continue;
                this._currentCommand.commandStartMarker = n.startLine !== void 0 ? this._terminal.registerMarker(n.startLine - (e.baseY + e.cursorY)) : void 0, this._currentCommand.commandStartX = n.startX, this._currentCommand.promptStartMarker = n.promptStartLine !== void 0 ? this._terminal.registerMarker(n.promptStartLine - (e.baseY + e.cursorY)) : void 0, this._cwd = n.cwd, this._onCommandStarted.fire({
                    marker: r
                });
                continue;
            }
            const i = Nvl.deserialize(this._terminal, n, this.__isCommandStorageDisabled);
            i && (this._commands.push(i), this._logService.debug("CommandDetectionCapability#onCommandFinished", i), this._onCommandFinished.fire(i));
        }
        t.promptInputModel && this._promptInputModel.deserialize(t.promptInputModel);
    }
}, Re([
    MQ(500)
], qAi.prototype, "_handleCursorMove", null), qAi = Re([
    F(1, Li)
], qAi), ihs = class extends st {
    constructor(t, e, n, i){
        super(), this._terminal = t, this._capability = e, this._hooks = n, this._logService = i, this._register(t.parser.registerCsiHandler({
            final: "J"
        }, (r)=>(r.length >= 1 && (r[0] === 2 || r[0] === 3) && n.clearCommandsInViewport(), !1)));
    }
    handleCommandStart(t) {
        const e = this._capability.currentCommand;
        e.commandStartX = this._terminal.buffer.active.cursorX, e.commandStartMarker = t?.marker || this._terminal.registerMarker(0), e.commandExecutedMarker?.dispose(), e.commandExecutedMarker = void 0, e.commandExecutedX = void 0;
        for (const n of this._hooks.commandMarkers)n.dispose();
        this._hooks.commandMarkers.length = 0, this._hooks.onCommandStartedEmitter.fire({
            marker: t?.marker || e.commandStartMarker,
            markProperties: t?.markProperties
        }), this._logService.debug("CommandDetectionCapability#handleCommandStart", e.commandStartX, e.commandStartMarker?.line);
    }
    handleCommandExecuted(t) {
        const e = this._capability.currentCommand;
        e.commandExecutedMarker = t?.marker || this._terminal.registerMarker(0), e.commandExecutedX = this._terminal.buffer.active.cursorX, this._logService.debug("CommandDetectionCapability#handleCommandExecuted", e.commandExecutedX, e.commandExecutedMarker?.line), !(!e.commandStartMarker || !e.commandExecutedMarker || e.commandStartX === void 0) && (e.command = this._capability.promptInputModel.ghostTextIndex > -1 ? this._capability.promptInputModel.value.substring(0, this._capability.promptInputModel.ghostTextIndex) : this._capability.promptInputModel.value, this._hooks.onCommandExecutedEmitter.fire(e));
    }
}, C2n = class extends st {
    constructor(t, e, n, i){
        super(), this._terminal = t, this._capability = e, this._hooks = n, this._logService = i, this._onCursorMoveListener = this._register(new Vn), this._tryAdjustCommandStartMarkerScannedLineCount = 0, this._tryAdjustCommandStartMarkerPollCount = 0, this._register(t.parser.registerCsiHandler({
            final: "J"
        }, (r)=>(r.length >= 1 && (r[0] === 2 || r[0] === 3) && this._hooks.clearCommandsInViewport(), !1))), this._register(this._capability.onBeforeCommandFinished((r)=>{
            (r.command.trim().toLowerCase() === "clear" || r.command.trim().toLowerCase() === "cls") && (this._tryAdjustCommandStartMarkerScheduler?.cancel(), this._tryAdjustCommandStartMarkerScheduler = void 0, this._hooks.clearCommandsInViewport(), this._capability.currentCommand.isInvalid = !0, this._hooks.onCurrentCommandInvalidatedEmitter.fire({
                reason: "windows"
            }));
        }));
    }
    preHandleResize(t) {
        const e = this._terminal.buffer.active.baseY, n = t.rows - this._hooks.dimensions.rows;
        n > 0 && this._waitForCursorMove().then(()=>{
            const i = Math.min(n, e);
            for(let r = this._capability.commands.length - 1; r >= 0; r--){
                const s = this._capability.commands[r];
                if (!s.marker || s.marker.line < e || s.commandStartLineContent === void 0) break;
                const o = this._terminal.buffer.active.getLine(s.marker.line);
                if (!o || o.translateToString(!0) === s.commandStartLineContent) continue;
                const a = s.marker.line - i;
                this._terminal.buffer.active.getLine(a)?.translateToString(!0) === s.commandStartLineContent && this._terminal._core._bufferService.buffer.lines.onDeleteEmitter.fire({
                    index: this._terminal.buffer.active.baseY,
                    amount: i
                });
            }
        });
    }
    handleCommandStart() {
        this._capability.currentCommand.commandStartX = this._terminal.buffer.active.cursorX, this._hooks.commandMarkers.length = 0;
        const t = this._capability.currentCommand.commandStartMarker = this._capability.currentCommand.promptStartMarker ? GAi(this._terminal, this._capability.currentCommand.promptStartMarker) : this._terminal.registerMarker(0);
        this._capability.currentCommand.commandStartX = 0, this._tryAdjustCommandStartMarkerScannedLineCount = 0, this._tryAdjustCommandStartMarkerPollCount = 0, this._tryAdjustCommandStartMarkerScheduler = new Yu(()=>this._tryAdjustCommandStartMarker(t), 20), this._tryAdjustCommandStartMarkerScheduler.schedule();
    }
    _tryAdjustCommandStartMarker(t) {
        if (this._store.isDisposed) return;
        const e = this._terminal.buffer.active;
        let n = this._tryAdjustCommandStartMarkerScannedLineCount;
        for(; n < 10 && t.line + n < e.baseY + this._terminal.rows;){
            if (this._cursorOnNextLine()) {
                const i = this._getWindowsPrompt(t.line + n);
                if (i) {
                    const r = typeof i == "string" ? i : i.prompt;
                    if (this._capability.currentCommand.commandStartMarker = this._terminal.registerMarker(0), typeof i == "object" && i.likelySingleLine) {
                        this._logService.debug("CommandDetectionCapability#_tryAdjustCommandStartMarker adjusted promptStart", `${this._capability.currentCommand.promptStartMarker?.line} -> ${this._capability.currentCommand.commandStartMarker.line}`), this._capability.currentCommand.promptStartMarker?.dispose(), this._capability.currentCommand.promptStartMarker = GAi(this._terminal, this._capability.currentCommand.commandStartMarker);
                        const s = this._capability.commands.at(-1);
                        s && this._capability.currentCommand.commandStartMarker.line !== s.endMarker?.line && (s.endMarker?.dispose(), s.endMarker = GAi(this._terminal, this._capability.currentCommand.commandStartMarker));
                    }
                    this._capability.currentCommand.commandStartX = r.length, this._logService.debug("CommandDetectionCapability#_tryAdjustCommandStartMarker adjusted commandStart", `${t.line} -> ${this._capability.currentCommand.commandStartMarker.line}:${this._capability.currentCommand.commandStartX}`), this._flushPendingHandleCommandStartTask();
                    return;
                }
            }
            n++;
        }
        n < 10 ? (this._tryAdjustCommandStartMarkerScannedLineCount = n, ++this._tryAdjustCommandStartMarkerPollCount < 10 ? this._tryAdjustCommandStartMarkerScheduler?.schedule() : this._flushPendingHandleCommandStartTask()) : this._flushPendingHandleCommandStartTask();
    }
    _flushPendingHandleCommandStartTask() {
        if (this._tryAdjustCommandStartMarkerScheduler && (this._tryAdjustCommandStartMarkerPollCount = 10, this._tryAdjustCommandStartMarkerScheduler.flush(), this._tryAdjustCommandStartMarkerScheduler = void 0), this._capability.currentCommand.commandExecutedMarker || (this._onCursorMoveListener.value = this._terminal.onCursorMove(()=>{
            if (this._hooks.commandMarkers.length === 0 || this._hooks.commandMarkers[this._hooks.commandMarkers.length - 1].line !== this._terminal.buffer.active.cursorY) {
                const t = this._terminal.registerMarker(0);
                t && this._hooks.commandMarkers.push(t);
            }
        })), this._capability.currentCommand.commandStartMarker) {
            const t = this._terminal.buffer.active.getLine(this._capability.currentCommand.commandStartMarker.line);
            t && (this._capability.currentCommand.commandStartLineContent = t.translateToString(!0));
        }
        this._hooks.onCommandStartedEmitter.fire({
            marker: this._capability.currentCommand.commandStartMarker
        }), this._logService.debug("CommandDetectionCapability#_handleCommandStartWindows", this._capability.currentCommand.commandStartX, this._capability.currentCommand.commandStartMarker?.line);
    }
    handleCommandExecuted(t) {
        this._tryAdjustCommandStartMarkerScheduler && this._flushPendingHandleCommandStartTask(), this._onCursorMoveListener.clear(), this._evaluateCommandMarkers(), this._capability.currentCommand.commandExecutedX = this._terminal.buffer.active.cursorX, this._hooks.onCommandExecutedEmitter.fire(this._capability.currentCommand), this._logService.debug("CommandDetectionCapability#handleCommandExecuted", this._capability.currentCommand.commandExecutedX, this._capability.currentCommand.commandExecutedMarker?.line);
    }
    preHandleCommandFinished() {
        this._capability.currentCommand.commandExecutedMarker || (this._hooks.commandMarkers.length === 0 && (this._capability.currentCommand.commandStartMarker || (this._capability.currentCommand.commandStartMarker = this._terminal.registerMarker(0)), this._capability.currentCommand.commandStartMarker && this._hooks.commandMarkers.push(this._capability.currentCommand.commandStartMarker)), this._evaluateCommandMarkers());
    }
    postHandleCommandFinished() {
        const t = this._capability.currentCommand, e = t.command, n = t.commandStartMarker?.line, i = t.commandExecutedMarker?.line;
        if (!e || e.length === 0 || n === void 0 || n === -1 || i === void 0 || i === -1) return;
        let r = 0, s = !1;
        for(let o = n; o <= i; o++){
            const a = this._terminal.buffer.active.getLine(o);
            if (!a) break;
            const l = a.translateToString(!0);
            for(let c = 0; c < l.length; c++){
                for(; e.length < r && e[r] === " ";)r++;
                if (l[c] === e[r] && r++, r === e.length) {
                    const u = c >= this._terminal.cols - 1;
                    t.commandExecutedMarker = this._terminal.registerMarker(o - (this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY) + (u ? 1 : 0)), t.commandExecutedX = u ? 0 : c + 1, s = !0;
                    break;
                }
            }
            if (s) break;
        }
    }
    _evaluateCommandMarkers() {
        if (this._hooks.commandMarkers.length !== 0) {
            if (this._hooks.commandMarkers = this._hooks.commandMarkers.sort((t, e)=>t.line - e.line), this._capability.currentCommand.commandStartMarker = this._hooks.commandMarkers[0], this._capability.currentCommand.commandStartMarker) {
                const t = this._terminal.buffer.active.getLine(this._capability.currentCommand.commandStartMarker.line);
                t && (this._capability.currentCommand.commandStartLineContent = t.translateToString(!0));
            }
            this._capability.currentCommand.commandExecutedMarker = this._hooks.commandMarkers[this._hooks.commandMarkers.length - 1], this._hooks.onCommandExecutedEmitter.fire(this._capability.currentCommand);
        }
    }
    _cursorOnNextLine() {
        const t = this._capability.commands.at(-1);
        if (!t) return !0;
        const e = this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY, n = (t.endMarker ? t.endMarker.line : t.marker?.line) ?? -1;
        return e > n;
    }
    _waitForCursorMove() {
        const t = this._terminal.buffer.active.cursorX, e = this._terminal.buffer.active.cursorY;
        let n = 0;
        return new Promise((i, r)=>{
            const s = setInterval(()=>{
                if (t !== this._terminal.buffer.active.cursorX || e !== this._terminal.buffer.active.cursorY) {
                    i(), clearInterval(s);
                    return;
                }
                n += 10, n > 1e3 && (clearInterval(s), i());
            }, 10);
        });
    }
    _getWindowsPrompt(t = this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY) {
        const e = this._terminal.buffer.active.getLine(t);
        if (!e) return;
        const n = e.translateToString(!0);
        if (!n) return;
        const i = n.match(/(?<prompt>(\(.+\)\s)?(?:PS.+>\s?))/)?.groups?.prompt;
        if (i) {
            const l = this._adjustPrompt(i, n, ">");
            if (l) return {
                prompt: l,
                likelySingleLine: !0
            };
        }
        const r = n.match(/.*\u276f(?=[^\u276f]*$)/g)?.[0];
        if (r) {
            const l = this._adjustPrompt(r, n, "\u276F");
            if (l) return l;
        }
        const s = n.match(/^(?<prompt>\$)/)?.groups?.prompt;
        if (s) {
            const l = this._adjustPrompt(s, n, "$");
            if (l) return l;
        }
        const o = n.match(/^(?<prompt>>>> )/g)?.groups?.prompt;
        if (o) return {
            prompt: o,
            likelySingleLine: !0
        };
        if (this._capability.promptTerminator && n.trim().endsWith(this._capability.promptTerminator)) {
            const l = this._adjustPrompt(n, n, this._capability.promptTerminator);
            if (l) return l;
        }
        const a = n.match(/^(?<prompt>(\(.+\)\s)?(?:[A-Z]:\\.*>))/);
        return a?.groups?.prompt ? {
            prompt: a.groups.prompt,
            likelySingleLine: !0
        } : void 0;
    }
    _adjustPrompt(t, e, n) {
        if (t) return e === t && t.endsWith(n) && (t += " "), t;
    }
}, C2n = Re([
    F(3, Li)
], C2n);

}
