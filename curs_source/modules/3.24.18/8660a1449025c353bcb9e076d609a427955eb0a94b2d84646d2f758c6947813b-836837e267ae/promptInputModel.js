import { Gt, Qe, en, st, tt } from "./Iwo.js";
import { SM } from "./decorators.js";
import { Ji, Li, sg } from "./log.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { wsi } from "./ze.js";
var WAi;
export { WAi };
var __wakaru_fDk_initialized = false;
export function fDk() {
if (__wakaru_fDk_initialized) return;
__wakaru_fDk_initialized = true;
"use strict";
E(), Gt(), Qe(), Ji(), SM(), WAi = class extends st {
    constructor(t, e, n, i, r){
        super(), this._xterm = t, this._logService = r, this._state = 0, this._commandStartX = 0, this._lastUserInput = "", this._value = "", this._cursorIndex = 0, this._ghostTextIndex = -1, this._onDidStartInput = this._register(new tt), this.onDidStartInput = this._onDidStartInput.event, this._onDidChangeInput = this._register(new tt), this.onDidChangeInput = this._onDidChangeInput.event, this._onDidFinishInput = this._register(new tt), this.onDidFinishInput = this._onDidFinishInput.event, this._onDidInterrupt = this._register(new tt), this.onDidInterrupt = this._onDidInterrupt.event, this._register(en.any(this._xterm.onCursorMove, this._xterm.onData, this._xterm.onWriteParsed)(()=>this._sync())), this._register(this._xterm.onData((s)=>this._handleUserInput(s))), this._register(e((s)=>this._handleCommandStart(s))), this._register(n(()=>this._handleCommandStartChanged())), this._register(i(()=>this._handleCommandExecuted())), this._register(this.onDidStartInput(()=>this._logCombinedStringIfTrace("PromptInputModel#onDidStartInput"))), this._register(this.onDidChangeInput(()=>this._logCombinedStringIfTrace("PromptInputModel#onDidChangeInput"))), this._register(this.onDidFinishInput(()=>this._logCombinedStringIfTrace("PromptInputModel#onDidFinishInput"))), this._register(this.onDidInterrupt(()=>this._logCombinedStringIfTrace("PromptInputModel#onDidInterrupt")));
    }
    get value() {
        return this._value;
    }
    get prefix() {
        return this._value.substring(0, this._cursorIndex);
    }
    get suffix() {
        return this._value.substring(this._cursorIndex, this._ghostTextIndex === -1 ? void 0 : this._ghostTextIndex);
    }
    get cursorIndex() {
        return this._cursorIndex;
    }
    get ghostTextIndex() {
        return this._ghostTextIndex;
    }
    _logCombinedStringIfTrace(t) {
        this._logService.getLevel() === sg.Trace && this._logService.trace(t, this.getCombinedString());
    }
    setShellType(t) {
        this._shellType = t;
    }
    setContinuationPrompt(t) {
        this._continuationPrompt = t, this._sync();
    }
    setLastPromptLine(t) {
        this._lastPromptLine = t, this._sync();
    }
    setConfidentCommandLine(t) {
        this._value !== t && (this._value = t, this._cursorIndex = -1, this._ghostTextIndex = -1, this._onDidChangeInput.fire(this._createStateObject()));
    }
    getCombinedString(t) {
        const e = this._value.replaceAll(`
`, "\u23CE");
        if (this._cursorIndex === -1) return e;
        let n = `${e.substring(0, this.cursorIndex)}|`;
        return this.ghostTextIndex !== -1 ? (n += `${e.substring(this.cursorIndex, this.ghostTextIndex)}[`, n += `${e.substring(this.ghostTextIndex)}]`) : n += e.substring(this.cursorIndex), n === "|" && t ? "" : n;
    }
    serialize() {
        return {
            modelState: this._createStateObject(),
            commandStartX: this._commandStartX,
            lastPromptLine: this._lastPromptLine,
            continuationPrompt: this._continuationPrompt,
            lastUserInput: this._lastUserInput
        };
    }
    deserialize(t) {
        this._value = t.modelState.value, this._cursorIndex = t.modelState.cursorIndex, this._ghostTextIndex = t.modelState.ghostTextIndex, this._commandStartX = t.commandStartX, this._lastPromptLine = t.lastPromptLine, this._continuationPrompt = t.continuationPrompt, this._lastUserInput = t.lastUserInput;
    }
    _handleCommandStart(t) {
        this._state !== 1 && (this._state = 1, this._commandStartMarker = t.marker, this._commandStartX = this._xterm.buffer.active.cursorX, this._value = "", this._cursorIndex = 0, this._onDidStartInput.fire(this._createStateObject()), this._onDidChangeInput.fire(this._createStateObject()), this._lastPromptLine && this._commandStartX !== this._lastPromptLine.length && this._xterm.buffer.active.getLine(this._commandStartMarker.line)?.translateToString(!0).startsWith(this._lastPromptLine) && (this._commandStartX = this._lastPromptLine.length, this._sync()));
    }
    _handleCommandStartChanged() {
        this._state === 1 && (this._commandStartX = this._xterm.buffer.active.cursorX, this._onDidChangeInput.fire(this._createStateObject()), this._sync());
    }
    _handleCommandExecuted() {
        if (this._state === 2) return;
        this._cursorIndex = -1, this._ghostTextIndex !== -1 && (this._value = this._value.substring(0, this._ghostTextIndex), this._ghostTextIndex = -1);
        const t = this._createStateObject();
        this._lastUserInput === "" && (this._lastUserInput = "", this._onDidInterrupt.fire(t)), this._state = 2, this._onDidFinishInput.fire(t), this._onDidChangeInput.fire(t);
    }
    _sync() {
        try {
            this._doSync();
        } catch (t) {
            this._logService.error("Error while syncing prompt input model", t);
        }
    }
    _doSync() {
        if (this._state !== 1) return;
        let t = this._commandStartMarker?.line;
        if (t === void 0) return;
        const e = this._xterm.buffer.active;
        let n = e.getLine(t);
        const i = e.baseY + e.cursorY;
        let r, s = n?.translateToString(!0, this._commandStartX);
        if (this._shellType === "fish" && (!n || !s) && (t += 1, n = e.getLine(t), n && (s = n.translateToString(!0), r = i === t ? e.cursorX : s?.trimEnd().length)), n === void 0 || s === void 0) {
            this._logService.trace("PromptInputModel#_sync: no line");
            return;
        }
        let o = s, a = -1;
        r === void 0 && (i === t ? r = this._getRelativeCursorIndex(this._commandStartX, e, n) : r = s.trimEnd().length);
        for(let l = t + 1; l <= i; l++){
            const c = e.getLine(l), u = c?.translateToString(!0);
            if (u && c) {
                if (c.isWrapped || i === l && this._continuationPrompt && !this._lineContainsContinuationPrompt(u)) {
                    o += `${u}`;
                    const d = this._getRelativeCursorIndex(0, e, c);
                    i === l ? r += d : r += u.length;
                } else if (this._shellType === "fish") o.endsWith("\\") ? (o = o.substring(0, o.length - 1), o += `${u.trim()}`, r += u.trim().length - 1) : /^ {6,}/.test(u) ? (o += `
${u.trim()}`, r += u.trim().length + 1) : (o += u, r += u.length);
                else if (this._continuationPrompt === void 0 || this._lineContainsContinuationPrompt(u)) {
                    const d = this._trimContinuationPrompt(u);
                    if (o += `
${d}`, i === l) {
                        const h = this._getContinuationPromptCellWidth(c, u), p = this._getRelativeCursorIndex(h, e, c);
                        r += p + 1;
                    } else r += d.length + 1;
                }
            }
        }
        for(let l = i + 1; l < e.baseY + this._xterm.rows; l++){
            const c = e.getLine(l), u = c?.translateToString(!0);
            if (u && c) this._shellType === "fish" ? o += `${u}` : this._continuationPrompt === void 0 || this._lineContainsContinuationPrompt(u) ? o += `
${this._trimContinuationPrompt(u)}` : o += u;
            else break;
        }
        this._logService.getLevel() === sg.Trace && this._logService.trace(`PromptInputModel#_sync: ${this.getCombinedString()}`);
        {
            let l = this._value.length - this._value.trimEnd().length;
            this._lastUserInput === "\x7F" && (this._lastUserInput = "", r === this._cursorIndex - 1 && (this._value.trimEnd().length > o.trimEnd().length && o.trimEnd().length <= r ? l = Math.max(this._value.length - 1 - o.trimEnd().length, 0) : l = Math.max(l - 1, 0))), this._lastUserInput === "\x1B[3~" && (this._lastUserInput = "", r === this._cursorIndex && (l = Math.max(l - 1, 0)));
            const c = o.split(`
`), u = c.length > 1, d = o.trimEnd();
            if (!u) {
                d.length < o.length && (this._lastUserInput === " " && (this._lastUserInput = "", r > d.length && r > this._cursorIndex && l++), l = Math.max(r - d.length, l, 0));
                const h = r === 0 ? "" : o[r - 1];
                l > 0 && r === this._cursorIndex + 1 && this._lastUserInput !== "" && h !== " " && (l = this._value.length - this._cursorIndex);
            }
            if (u) {
                c[c.length - 1] = c.at(-1)?.trimEnd() ?? "";
                const h = (c.length - 1) * (this._continuationPrompt?.length ?? 0);
                l = Math.max(0, r - o.length - h);
            }
            o = c.map((h)=>h.trimEnd()).join(`
`) + " ".repeat(l);
        }
        a = this._scanForGhostText(e, n, r), (this._value !== o || this._cursorIndex !== r || this._ghostTextIndex !== a) && (this._value = o, this._cursorIndex = r, this._ghostTextIndex = a, this._onDidChangeInput.fire(this._createStateObject()));
    }
    _handleUserInput(t) {
        this._lastUserInput = t;
    }
    _scanForGhostText(t, e, n) {
        if (!this.value.trim().length) return -1;
        let i = -1, r = !1, s = t.cursorX;
        for(; s > 0;){
            const o = e.getCell(--s);
            if (!o) break;
            if (o.getChars().trim().length > 0) {
                r = !this._isCellStyledLikeGhostText(o);
                break;
            }
        }
        if (r) {
            let o = 0, a = t.cursorX;
            for(; a < e.length;){
                const l = e.getCell(a++);
                if (!l || l.getCode() === 0) break;
                if (this._isCellStyledLikeGhostText(l)) {
                    i = n + o;
                    break;
                }
                o += l.getChars().length;
            }
        }
        return i === -1 && (i = this._scanForGhostTextAdvanced(t, e, n)), i > -1 && this.value.substring(i).endsWith(" ") && (this._value = this.value.trim(), this.value.substring(i) || (i = -1)), i;
    }
    _scanForGhostTextAdvanced(t, e, n) {
        let i = -1, r = t.cursorX;
        const s = new Map;
        let o = e.getCell(r), a = o;
        for(; a && r < e.length;){
            const c = this._getCellStyleAsString(a);
            s.set(c, [
                ...s.get(c) ?? [],
                r
            ]), a = e.getCell(++r), a?.getChars().trim().length && (o = a);
        }
        if (!o?.getChars().trim().length || this._cellStylesMatch(e.getCell(this._commandStartX), o)) return -1;
        const l = s.get(this._getCellStyleAsString(o));
        if (l) {
            for(let c = 1; c < l.length; c++)if (l[c] !== l[c - 1] + 1) return -1;
            t.baseY + t.cursorY === this._commandStartMarker?.line ? i = l[0] - this._commandStartX : i = l[0];
        }
        if (i !== -1) for(let c = t.cursorX; c >= this._commandStartX; c--){
            const u = e.getCell(c);
            if (u?.getChars.length && u && u.getCode() !== 0 && this._cellStylesMatch(o, u)) return -1;
        }
        return i >= n ? i : -1;
    }
    _getCellStyleAsString(t) {
        return `${t.getFgColor()}${t.getBgColor()}${t.isBold()}${t.isItalic()}${t.isDim()}${t.isUnderline()}${t.isBlink()}${t.isInverse()}${t.isInvisible()}${t.isStrikethrough()}${t.isOverline()}${t.getFgColorMode()}${t.getBgColorMode()}`;
    }
    _cellStylesMatch(t, e) {
        return !t || !e ? !1 : t.getFgColor() === e.getFgColor() && t.getBgColor() === e.getBgColor() && t.isBold() === e.isBold() && t.isItalic() === e.isItalic() && t.isDim() === e.isDim() && t.isUnderline() === e.isUnderline() && t.isBlink() === e.isBlink() && t.isInverse() === e.isInverse() && t.isInvisible() === e.isInvisible() && t.isStrikethrough() === e.isStrikethrough() && t.isOverline() === e.isOverline() && t?.getBgColorMode() === e?.getBgColorMode() && t?.getFgColorMode() === e?.getFgColorMode();
    }
    _trimContinuationPrompt(t) {
        return this._lineContainsContinuationPrompt(t) && (t = t.substring(this._continuationPrompt.length)), t;
    }
    _lineContainsContinuationPrompt(t) {
        return !!(this._continuationPrompt && t.startsWith(this._continuationPrompt.trimEnd()));
    }
    _getContinuationPromptCellWidth(t, e) {
        if (!this._continuationPrompt || !e.startsWith(this._continuationPrompt.trimEnd())) return 0;
        let n = "", i = 0, r;
        for(; n !== this._continuationPrompt && (r = t.getCell(i++), !!r);)n += r.getChars();
        return i;
    }
    _getRelativeCursorIndex(t, e, n) {
        return n?.translateToString(!0, t, e.cursorX).length ?? 0;
    }
    _isCellStyledLikeGhostText(t) {
        return !!(t.isItalic() || t.isDim());
    }
    _createStateObject() {
        return Object.freeze({
            value: this._value,
            prefix: this.prefix,
            suffix: this.suffix,
            cursorIndex: this._cursorIndex,
            ghostTextIndex: this._ghostTextIndex
        });
    }
}, Re([
    wsi(0)
], WAi.prototype, "_sync", null), WAi = Re([
    F(4, Li)
], WAi);

}
