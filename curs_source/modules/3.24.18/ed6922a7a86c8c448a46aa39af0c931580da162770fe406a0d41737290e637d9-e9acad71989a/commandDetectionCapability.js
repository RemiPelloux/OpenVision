import { Se, bt, cn, uxc, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ac, bn } from "./async.js";
import { sw } from "./decorators.js";
import { Qn, Wn } from "./log.js";
import { U5n, ch_ } from "./promptInputModel.js";
import { cU } from "./qIc.js";
import { B5n, iMo, rMo } from "./terminalCommand.js";
import { x } from "./tslib.es6.js";
function $5n(e, t, n = 0) {
    return e.registerMarker(t.line - (e.buffer.active.baseY + e.buffer.active.cursorY) + n);
}
var H5n, Bir, fzt;
export { $5n, Bir, H5n, fzt };
var __wakaru_E9h_initialized = false;
export function E9h() {
if (__wakaru_E9h_initialized) return;
__wakaru_E9h_initialized = true;
"use strict";
x(), bn(), sw(), bt(), Se(), Qn(), B5n(), ch_(), H5n = class extends we {
    constructor(e, t){
        super(), this._terminal = e, this._logService = t, this.type = 2, this._commands = [], this._commandMarkers = [], this.__isCommandStorageDisabled = !1, this._hasRichCommandDetection = !1, this._onCommandStarted = this._register(new ve), this.onCommandStarted = this._onCommandStarted.event, this._onCommandStartChanged = this._register(new ve), this.onCommandStartChanged = this._onCommandStartChanged.event, this._onBeforeCommandFinished = this._register(new ve), this.onBeforeCommandFinished = this._onBeforeCommandFinished.event, this._onCommandFinished = this._register(new ve), this.onCommandFinished = this._onCommandFinished.event, this._onCommandExecuted = this._register(new ve), this.onCommandExecuted = this._onCommandExecuted.event, this._onCommandInvalidated = this._register(new ve), this.onCommandInvalidated = this._onCommandInvalidated.event, this._onCurrentCommandInvalidated = this._register(new ve), this.onCurrentCommandInvalidated = this._onCurrentCommandInvalidated.event, this._onSetRichCommandDetection = this._register(new ve), this.onSetRichCommandDetection = this._onSetRichCommandDetection.event, this._currentCommand = new rMo(this._terminal), this._promptInputModel = this._register(new U5n(this._terminal, this.onCommandStarted, this.onCommandStartChanged, this.onCommandExecuted, this._logService)), this._register(this.onCommandExecuted((i)=>{
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
        }, this._ptyHeuristics = this._register(new uxc(new Bir(this._terminal, this, this._ptyHeuristicsHooks, this._logService))), this._dimensions = {
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
        const e = this._currentCommand;
        return "commandLineConfidence" in e ? e.commandLineConfidence : void 0;
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
        for (const e of this._commands)e.dispose();
        this._commands.length = 0, this._currentCommand.dispose();
        for (const e of this._commandMarkers)e.dispose();
        this._commandMarkers.length = 0, super.dispose();
    }
    _handleResize(e) {
        this._ptyHeuristics.value.preHandleResize?.(e), this._dimensions.cols = e.cols, this._dimensions.rows = e.rows;
    }
    _handleCursorMove() {
        this._store.isDisposed || this._terminal.buffer.active === this._terminal.buffer.normal && this._currentCommand.commandStartMarker && this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY < this._currentCommand.commandStartMarker.line && (this._clearCommandsInViewport(), this._currentCommand.isInvalid = !0, this._onCurrentCommandInvalidated.fire({
            reason: "windows"
        }));
    }
    _clearCommandsInViewport() {
        let e = 0;
        for(let t = this._commands.length - 1; t >= 0; t--){
            const n = this._commands[t].marker?.line;
            if (n && n < this._terminal.buffer.active.baseY) break;
            e++;
        }
        e > 0 && this._onCommandInvalidated.fire(this._commands.splice(this._commands.length - e, e));
    }
    clearCommands() {
        this._commands.length > 0 && this._onCommandInvalidated.fire(this._commands.splice(0));
    }
    setContinuationPrompt(e) {
        this._promptInputModel.setContinuationPrompt(e);
    }
    setPromptTerminator(e, t) {
        this._logService.debug("CommandDetectionCapability#setPromptTerminator", e), this._promptTerminator = e, this._promptInputModel.setLastPromptLine(t);
    }
    setCwd(e) {
        this._cwd = e;
    }
    setIsWindowsPty(e) {
        if (e && !(this._ptyHeuristics.value instanceof fzt)) {
            const t = this;
            this._ptyHeuristics.value = new fzt(this._terminal, this, new class {
                get onCurrentCommandInvalidatedEmitter() {
                    return t._onCurrentCommandInvalidated;
                }
                get onCommandStartedEmitter() {
                    return t._onCommandStarted;
                }
                get onCommandExecutedEmitter() {
                    return t._onCommandExecuted;
                }
                get dimensions() {
                    return t._dimensions;
                }
                get isCommandStorageDisabled() {
                    return t.__isCommandStorageDisabled;
                }
                get commandMarkers() {
                    return t._commandMarkers;
                }
                set commandMarkers(n) {
                    t._commandMarkers = n;
                }
                get clearCommandsInViewport() {
                    return t._clearCommandsInViewport.bind(t);
                }
            }, this._logService);
        } else !e && !(this._ptyHeuristics.value instanceof Bir) && (this._ptyHeuristics.value = new Bir(this._terminal, this, this._ptyHeuristicsHooks, this._logService));
    }
    setHasRichCommandDetection(e) {
        this._hasRichCommandDetection = e, this._onSetRichCommandDetection.fire(e);
    }
    setIsCommandStorageDisabled() {
        this.__isCommandStorageDisabled = !0;
    }
    getCommandForLine(e) {
        if (this._currentCommand.promptStartMarker && e >= this._currentCommand.promptStartMarker?.line) return this._currentCommand;
        if (this._commands.length !== 0 && !((this._commands[0].promptStartMarker ?? this._commands[0].marker).line > e)) {
            for(let t = this.commands.length - 1; t >= 0; t--)if ((this.commands[t].promptStartMarker ?? this.commands[t].marker).line <= e) return this.commands[t];
        }
    }
    getCwdForLine(e) {
        if (this._currentCommand.promptStartMarker && e >= this._currentCommand.promptStartMarker?.line) return this._cwd;
        const t = this.getCommandForLine(e);
        if (t && "cwd" in t) return t.cwd;
    }
    handlePromptStart(e) {
        const t = this.commands.at(-1);
        t?.endMarker && t?.executedMarker && t.endMarker.line === t.executedMarker.line && (this._logService.debug("CommandDetectionCapability#handlePromptStart adjusted commandFinished", `${t.endMarker.line} -> ${t.executedMarker.line + 1}`), t.endMarker = $5n(this._terminal, t.executedMarker, 1)), this._currentCommand.promptStartMarker = e?.marker || (t?.endMarker ? $5n(this._terminal, t.endMarker) : this._terminal.registerMarker(0)), this._logService.debug("CommandDetectionCapability#handlePromptStart", this._terminal.buffer.active.cursorX, this._currentCommand.promptStartMarker?.line);
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
    handleCommandStart(e) {
        if (this._handleCommandStartOptions = e, this._currentCommand.cwd = this._cwd, this._currentCommand.commandStartMarker = e?.marker || this._currentCommand.commandStartMarker, this._currentCommand.commandStartMarker?.line === this._terminal.buffer.active.cursorY) {
            this._currentCommand.commandStartX = this._terminal.buffer.active.cursorX, this._onCommandStartChanged.fire(), this._logService.debug("CommandDetectionCapability#handleCommandStart", this._currentCommand.commandStartX, this._currentCommand.commandStartMarker?.line);
            return;
        }
        this._ptyHeuristics.value.handleCommandStart(e);
    }
    handleCommandExecuted(e) {
        this._ptyHeuristics.value.handleCommandExecuted(e), this._currentCommand.markExecutedTime();
    }
    handleCommandFinished(e, t) {
        if (this._currentCommand.commandExecutedMarker || this.handleCommandExecuted(), this._currentCommand.markFinishedTime(), this._ptyHeuristics.value.preHandleCommandFinished?.(), this._logService.debug("CommandDetectionCapability#handleCommandFinished", this._terminal.buffer.active.cursorX, t?.marker?.line, this._currentCommand.command, this._currentCommand), e === void 0) {
            const i = this.commands.length > 0 ? this.commands[this.commands.length - 1] : void 0;
            this._currentCommand.command && this._currentCommand.command.length > 0 && i?.command === this._currentCommand.command && (e = i.exitCode);
        }
        if (this._currentCommand.commandStartMarker === void 0 || !this._terminal.buffer.active) return;
        this._currentCommand.commandFinishedMarker = t?.marker || this._terminal.registerMarker(0), this._ptyHeuristics.value.postHandleCommandFinished?.();
        const n = this._currentCommand.promoteToFullCommand(this._cwd, e, this._handleCommandStartOptions?.ignoreCommandLine ?? !1, t?.markProperties);
        n && (this._commands.push(n), this._onBeforeCommandFinished.fire(n), this._logService.debug("CommandDetectionCapability#onCommandFinished", n), this._onCommandFinished.fire(n)), this._currentCommand = new rMo(this._terminal), this._handleCommandStartOptions = void 0;
    }
    setCommandLine(e, t) {
        this._logService.debug("CommandDetectionCapability#setCommandLine", e, t), this._currentCommand.command = e, this._currentCommand.commandLineConfidence = "high", this._currentCommand.isTrusted = t, t && this._promptInputModel.setConfidentCommandLine(e);
    }
    serialize() {
        const e = this.commands.map((n)=>n.serialize(this.__isCommandStorageDisabled)), t = this._currentCommand.serialize(this._cwd);
        return t && e.push(t), {
            isWindowsPty: this._ptyHeuristics.value instanceof fzt,
            hasRichCommandDetection: this._hasRichCommandDetection,
            commands: e,
            promptInputModel: this._promptInputModel.serialize()
        };
    }
    deserialize(e) {
        e.isWindowsPty && this.setIsWindowsPty(e.isWindowsPty), e.hasRichCommandDetection && this.setHasRichCommandDetection(e.hasRichCommandDetection);
        const t = this._terminal.buffer.normal;
        for (const n of e.commands){
            if (!n.endLine) {
                const r = n.startLine !== void 0 ? this._terminal.registerMarker(n.startLine - (t.baseY + t.cursorY)) : void 0;
                if (!r) continue;
                this._currentCommand.commandStartMarker = n.startLine !== void 0 ? this._terminal.registerMarker(n.startLine - (t.baseY + t.cursorY)) : void 0, this._currentCommand.commandStartX = n.startX, this._currentCommand.promptStartMarker = n.promptStartLine !== void 0 ? this._terminal.registerMarker(n.promptStartLine - (t.baseY + t.cursorY)) : void 0, this._cwd = n.cwd, this._onCommandStarted.fire({
                    marker: r
                });
                continue;
            }
            const i = iMo.deserialize(this._terminal, n, this.__isCommandStorageDisabled);
            i && (this._commands.push(i), this._logService.debug("CommandDetectionCapability#onCommandFinished", i), this._onCommandFinished.fire(i));
        }
        e.promptInputModel && this._promptInputModel.deserialize(e.promptInputModel);
    }
}, ie([
    cU(500)
], H5n.prototype, "_handleCursorMove", null), H5n = ie([
    C(1, Wn)
], H5n), Bir = class extends we {
    constructor(e, t, n, i){
        super(), this._terminal = e, this._capability = t, this._hooks = n, this._logService = i, this._register(e.parser.registerCsiHandler({
            final: "J"
        }, (r)=>(r.length >= 1 && (r[0] === 2 || r[0] === 3) && n.clearCommandsInViewport(), !1)));
    }
    handleCommandStart(e) {
        const t = this._capability.currentCommand;
        t.commandStartX = this._terminal.buffer.active.cursorX, t.commandStartMarker = e?.marker || this._terminal.registerMarker(0), t.commandExecutedMarker?.dispose(), t.commandExecutedMarker = void 0, t.commandExecutedX = void 0;
        for (const n of this._hooks.commandMarkers)n.dispose();
        this._hooks.commandMarkers.length = 0, this._hooks.onCommandStartedEmitter.fire({
            marker: e?.marker || t.commandStartMarker,
            markProperties: e?.markProperties
        }), this._logService.debug("CommandDetectionCapability#handleCommandStart", t.commandStartX, t.commandStartMarker?.line);
    }
    handleCommandExecuted(e) {
        const t = this._capability.currentCommand;
        t.commandExecutedMarker = e?.marker || this._terminal.registerMarker(0), t.commandExecutedX = this._terminal.buffer.active.cursorX, this._logService.debug("CommandDetectionCapability#handleCommandExecuted", t.commandExecutedX, t.commandExecutedMarker?.line), !(!t.commandStartMarker || !t.commandExecutedMarker || t.commandStartX === void 0) && (t.command = this._capability.promptInputModel.ghostTextIndex > -1 ? this._capability.promptInputModel.value.substring(0, this._capability.promptInputModel.ghostTextIndex) : this._capability.promptInputModel.value, this._hooks.onCommandExecutedEmitter.fire(t));
    }
}, fzt = class extends we {
    constructor(e, t, n, i){
        super(), this._terminal = e, this._capability = t, this._hooks = n, this._logService = i, this._onCursorMoveListener = this._register(new cn), this._tryAdjustCommandStartMarkerScannedLineCount = 0, this._tryAdjustCommandStartMarkerPollCount = 0, this._register(e.parser.registerCsiHandler({
            final: "J"
        }, (r)=>(r.length >= 1 && (r[0] === 2 || r[0] === 3) && this._hooks.clearCommandsInViewport(), !1))), this._register(this._capability.onBeforeCommandFinished((r)=>{
            (r.command.trim().toLowerCase() === "clear" || r.command.trim().toLowerCase() === "cls") && (this._tryAdjustCommandStartMarkerScheduler?.cancel(), this._tryAdjustCommandStartMarkerScheduler = void 0, this._hooks.clearCommandsInViewport(), this._capability.currentCommand.isInvalid = !0, this._hooks.onCurrentCommandInvalidatedEmitter.fire({
                reason: "windows"
            }));
        }));
    }
    preHandleResize(e) {
        const t = this._terminal.buffer.active.baseY, n = e.rows - this._hooks.dimensions.rows;
        n > 0 && this._waitForCursorMove().then(()=>{
            const i = Math.min(n, t);
            for(let r = this._capability.commands.length - 1; r >= 0; r--){
                const s = this._capability.commands[r];
                if (!s.marker || s.marker.line < t || s.commandStartLineContent === void 0) break;
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
        const e = this._capability.currentCommand.commandStartMarker = this._capability.currentCommand.promptStartMarker ? $5n(this._terminal, this._capability.currentCommand.promptStartMarker) : this._terminal.registerMarker(0);
        this._capability.currentCommand.commandStartX = 0, this._tryAdjustCommandStartMarkerScannedLineCount = 0, this._tryAdjustCommandStartMarkerPollCount = 0, this._tryAdjustCommandStartMarkerScheduler = new ac(()=>this._tryAdjustCommandStartMarker(e), 20), this._tryAdjustCommandStartMarkerScheduler.schedule();
    }
    _tryAdjustCommandStartMarker(e) {
        if (this._store.isDisposed) return;
        const t = this._terminal.buffer.active;
        let n = this._tryAdjustCommandStartMarkerScannedLineCount;
        for(; n < 10 && e.line + n < t.baseY + this._terminal.rows;){
            if (this._cursorOnNextLine()) {
                const i = this._getWindowsPrompt(e.line + n);
                if (i) {
                    const r = typeof i == "string" ? i : i.prompt;
                    if (this._capability.currentCommand.commandStartMarker = this._terminal.registerMarker(0), typeof i == "object" && i.likelySingleLine) {
                        this._logService.debug("CommandDetectionCapability#_tryAdjustCommandStartMarker adjusted promptStart", `${this._capability.currentCommand.promptStartMarker?.line} -> ${this._capability.currentCommand.commandStartMarker.line}`), this._capability.currentCommand.promptStartMarker?.dispose(), this._capability.currentCommand.promptStartMarker = $5n(this._terminal, this._capability.currentCommand.commandStartMarker);
                        const s = this._capability.commands.at(-1);
                        s && this._capability.currentCommand.commandStartMarker.line !== s.endMarker?.line && (s.endMarker?.dispose(), s.endMarker = $5n(this._terminal, this._capability.currentCommand.commandStartMarker));
                    }
                    this._capability.currentCommand.commandStartX = r.length, this._logService.debug("CommandDetectionCapability#_tryAdjustCommandStartMarker adjusted commandStart", `${e.line} -> ${this._capability.currentCommand.commandStartMarker.line}:${this._capability.currentCommand.commandStartX}`), this._flushPendingHandleCommandStartTask();
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
                const e = this._terminal.registerMarker(0);
                e && this._hooks.commandMarkers.push(e);
            }
        })), this._capability.currentCommand.commandStartMarker) {
            const e = this._terminal.buffer.active.getLine(this._capability.currentCommand.commandStartMarker.line);
            e && (this._capability.currentCommand.commandStartLineContent = e.translateToString(!0));
        }
        this._hooks.onCommandStartedEmitter.fire({
            marker: this._capability.currentCommand.commandStartMarker
        }), this._logService.debug("CommandDetectionCapability#_handleCommandStartWindows", this._capability.currentCommand.commandStartX, this._capability.currentCommand.commandStartMarker?.line);
    }
    handleCommandExecuted(e) {
        this._tryAdjustCommandStartMarkerScheduler && this._flushPendingHandleCommandStartTask(), this._onCursorMoveListener.clear(), this._evaluateCommandMarkers(), this._capability.currentCommand.commandExecutedX = this._terminal.buffer.active.cursorX, this._hooks.onCommandExecutedEmitter.fire(this._capability.currentCommand), this._logService.debug("CommandDetectionCapability#handleCommandExecuted", this._capability.currentCommand.commandExecutedX, this._capability.currentCommand.commandExecutedMarker?.line);
    }
    preHandleCommandFinished() {
        this._capability.currentCommand.commandExecutedMarker || (this._hooks.commandMarkers.length === 0 && (this._capability.currentCommand.commandStartMarker || (this._capability.currentCommand.commandStartMarker = this._terminal.registerMarker(0)), this._capability.currentCommand.commandStartMarker && this._hooks.commandMarkers.push(this._capability.currentCommand.commandStartMarker)), this._evaluateCommandMarkers());
    }
    postHandleCommandFinished() {
        const e = this._capability.currentCommand, t = e.command, n = e.commandStartMarker?.line, i = e.commandExecutedMarker?.line;
        if (!t || t.length === 0 || n === void 0 || n === -1 || i === void 0 || i === -1) return;
        let r = 0, s = !1;
        for(let o = n; o <= i; o++){
            const a = this._terminal.buffer.active.getLine(o);
            if (!a) break;
            const c = a.translateToString(!0);
            for(let l = 0; l < c.length; l++){
                for(; t.length < r && t[r] === " ";)r++;
                if (c[l] === t[r] && r++, r === t.length) {
                    const u = l >= this._terminal.cols - 1;
                    e.commandExecutedMarker = this._terminal.registerMarker(o - (this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY) + (u ? 1 : 0)), e.commandExecutedX = u ? 0 : l + 1, s = !0;
                    break;
                }
            }
            if (s) break;
        }
    }
    _evaluateCommandMarkers() {
        if (this._hooks.commandMarkers.length !== 0) {
            if (this._hooks.commandMarkers = this._hooks.commandMarkers.sort((e, t)=>e.line - t.line), this._capability.currentCommand.commandStartMarker = this._hooks.commandMarkers[0], this._capability.currentCommand.commandStartMarker) {
                const e = this._terminal.buffer.active.getLine(this._capability.currentCommand.commandStartMarker.line);
                e && (this._capability.currentCommand.commandStartLineContent = e.translateToString(!0));
            }
            this._capability.currentCommand.commandExecutedMarker = this._hooks.commandMarkers[this._hooks.commandMarkers.length - 1], this._hooks.onCommandExecutedEmitter.fire(this._capability.currentCommand);
        }
    }
    _cursorOnNextLine() {
        const e = this._capability.commands.at(-1);
        if (!e) return !0;
        const t = this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY, n = (e.endMarker ? e.endMarker.line : e.marker?.line) ?? -1;
        return t > n;
    }
    _waitForCursorMove() {
        const e = this._terminal.buffer.active.cursorX, t = this._terminal.buffer.active.cursorY;
        let n = 0;
        return new Promise((i, r)=>{
            const s = setInterval(()=>{
                if (e !== this._terminal.buffer.active.cursorX || t !== this._terminal.buffer.active.cursorY) {
                    i(), clearInterval(s);
                    return;
                }
                n += 10, n > 1e3 && (clearInterval(s), i());
            }, 10);
        });
    }
    _getWindowsPrompt(e = this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY) {
        const t = this._terminal.buffer.active.getLine(e);
        if (!t) return;
        const n = t.translateToString(!0);
        if (!n) return;
        const i = n.match(/(?<prompt>(\(.+\)\s)?(?:PS.+>\s?))/)?.groups?.prompt;
        if (i) {
            const c = this._adjustPrompt(i, n, ">");
            if (c) return {
                prompt: c,
                likelySingleLine: !0
            };
        }
        const r = n.match(/.*\u276f(?=[^\u276f]*$)/g)?.[0];
        if (r) {
            const c = this._adjustPrompt(r, n, "\u276F");
            if (c) return c;
        }
        const s = n.match(/^(?<prompt>\$)/)?.groups?.prompt;
        if (s) {
            const c = this._adjustPrompt(s, n, "$");
            if (c) return c;
        }
        const o = n.match(/^(?<prompt>>>> )/g)?.groups?.prompt;
        if (o) return {
            prompt: o,
            likelySingleLine: !0
        };
        if (this._capability.promptTerminator && n.trim().endsWith(this._capability.promptTerminator)) {
            const c = this._adjustPrompt(n, n, this._capability.promptTerminator);
            if (c) return c;
        }
        const a = n.match(/^(?<prompt>(\(.+\)\s)?(?:[A-Z]:\\.*>))/);
        return a?.groups?.prompt ? {
            prompt: a.groups.prompt,
            likelySingleLine: !0
        } : void 0;
    }
    _adjustPrompt(e, t, n) {
        if (e) return t === e && e.endsWith(n) && (e += " "), e;
    }
}, fzt = ie([
    C(3, Wn)
], fzt);

}
