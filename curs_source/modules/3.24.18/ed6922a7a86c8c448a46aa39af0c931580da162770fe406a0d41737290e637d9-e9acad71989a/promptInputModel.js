import { Ct, Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { sw } from "./decorators.js";
import { Dh, Qn, Wn } from "./log.js";
import { jpt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var U5n;
export { U5n };
var __wakaru_ch__initialized = false;
export function ch_() {
if (__wakaru_ch__initialized) return;
__wakaru_ch__initialized = true;
"use strict";
x(), bt(), Se(), Qn(), sw(), U5n = class extends we {
    constructor(e, t, n, i, r){
        super(), this._xterm = e, this._logService = r, this._state = 0, this._commandStartX = 0, this._lastUserInput = "", this._value = "", this._cursorIndex = 0, this._ghostTextIndex = -1, this._onDidStartInput = this._register(new ve), this.onDidStartInput = this._onDidStartInput.event, this._onDidChangeInput = this._register(new ve), this.onDidChangeInput = this._onDidChangeInput.event, this._onDidFinishInput = this._register(new ve), this.onDidFinishInput = this._onDidFinishInput.event, this._onDidInterrupt = this._register(new ve), this.onDidInterrupt = this._onDidInterrupt.event, this._register(Ct.any(this._xterm.onCursorMove, this._xterm.onData, this._xterm.onWriteParsed)(()=>this._sync())), this._register(this._xterm.onData((s)=>this._handleUserInput(s))), this._register(t((s)=>this._handleCommandStart(s))), this._register(n(()=>this._handleCommandStartChanged())), this._register(i(()=>this._handleCommandExecuted())), this._register(this.onDidStartInput(()=>this._logCombinedStringIfTrace("PromptInputModel#onDidStartInput"))), this._register(this.onDidChangeInput(()=>this._logCombinedStringIfTrace("PromptInputModel#onDidChangeInput"))), this._register(this.onDidFinishInput(()=>this._logCombinedStringIfTrace("PromptInputModel#onDidFinishInput"))), this._register(this.onDidInterrupt(()=>this._logCombinedStringIfTrace("PromptInputModel#onDidInterrupt")));
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
    _logCombinedStringIfTrace(e) {
        this._logService.getLevel() === Dh.Trace && this._logService.trace(e, this.getCombinedString());
    }
    setShellType(e) {
        this._shellType = e;
    }
    setContinuationPrompt(e) {
        this._continuationPrompt = e, this._sync();
    }
    setLastPromptLine(e) {
        this._lastPromptLine = e, this._sync();
    }
    setConfidentCommandLine(e) {
        this._value !== e && (this._value = e, this._cursorIndex = -1, this._ghostTextIndex = -1, this._onDidChangeInput.fire(this._createStateObject()));
    }
    getCombinedString(e) {
        const t = this._value.replaceAll(`
`, "\u23CE");
        if (this._cursorIndex === -1) return t;
        let n = `${t.substring(0, this.cursorIndex)}|`;
        return this.ghostTextIndex !== -1 ? (n += `${t.substring(this.cursorIndex, this.ghostTextIndex)}[`, n += `${t.substring(this.ghostTextIndex)}]`) : n += t.substring(this.cursorIndex), n === "|" && e ? "" : n;
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
    deserialize(e) {
        this._value = e.modelState.value, this._cursorIndex = e.modelState.cursorIndex, this._ghostTextIndex = e.modelState.ghostTextIndex, this._commandStartX = e.commandStartX, this._lastPromptLine = e.lastPromptLine, this._continuationPrompt = e.continuationPrompt, this._lastUserInput = e.lastUserInput;
    }
    _handleCommandStart(e) {
        this._state !== 1 && (this._state = 1, this._commandStartMarker = e.marker, this._commandStartX = this._xterm.buffer.active.cursorX, this._value = "", this._cursorIndex = 0, this._onDidStartInput.fire(this._createStateObject()), this._onDidChangeInput.fire(this._createStateObject()), this._lastPromptLine && this._commandStartX !== this._lastPromptLine.length && this._xterm.buffer.active.getLine(this._commandStartMarker.line)?.translateToString(!0).startsWith(this._lastPromptLine) && (this._commandStartX = this._lastPromptLine.length, this._sync()));
    }
    _handleCommandStartChanged() {
        this._state === 1 && (this._commandStartX = this._xterm.buffer.active.cursorX, this._onDidChangeInput.fire(this._createStateObject()), this._sync());
    }
    _handleCommandExecuted() {
        if (this._state === 2) return;
        this._cursorIndex = -1, this._ghostTextIndex !== -1 && (this._value = this._value.substring(0, this._ghostTextIndex), this._ghostTextIndex = -1);
        const e = this._createStateObject();
        this._lastUserInput === "" && (this._lastUserInput = "", this._onDidInterrupt.fire(e)), this._state = 2, this._onDidFinishInput.fire(e), this._onDidChangeInput.fire(e);
    }
    _sync() {
        try {
            this._doSync();
        } catch (e) {
            this._logService.error("Error while syncing prompt input model", e);
        }
    }
    _doSync() {
        if (this._state !== 1) return;
        let e = this._commandStartMarker?.line;
        if (e === void 0) return;
        const t = this._xterm.buffer.active;
        let n = t.getLine(e);
        const i = t.baseY + t.cursorY;
        let r, s = n?.translateToString(!0, this._commandStartX);
        if (this._shellType === "fish" && (!n || !s) && (e += 1, n = t.getLine(e), n && (s = n.translateToString(!0), r = i === e ? t.cursorX : s?.trimEnd().length)), n === void 0 || s === void 0) {
            this._logService.trace("PromptInputModel#_sync: no line");
            return;
        }
        let o = s, a = -1;
        r === void 0 && (i === e ? r = this._getRelativeCursorIndex(this._commandStartX, t, n) : r = s.trimEnd().length);
        for(let c = e + 1; c <= i; c++){
            const l = t.getLine(c), u = l?.translateToString(!0);
            if (u && l) {
                if (l.isWrapped || i === c && this._continuationPrompt && !this._lineContainsContinuationPrompt(u)) {
                    o += `${u}`;
                    const h = this._getRelativeCursorIndex(0, t, l);
                    i === c ? r += h : r += u.length;
                } else if (this._shellType === "fish") o.endsWith("\\") ? (o = o.substring(0, o.length - 1), o += `${u.trim()}`, r += u.trim().length - 1) : /^ {6,}/.test(u) ? (o += `
${u.trim()}`, r += u.trim().length + 1) : (o += u, r += u.length);
                else if (this._continuationPrompt === void 0 || this._lineContainsContinuationPrompt(u)) {
                    const h = this._trimContinuationPrompt(u);
                    if (o += `
${h}`, i === c) {
                        const p = this._getContinuationPromptCellWidth(l, u), g = this._getRelativeCursorIndex(p, t, l);
                        r += g + 1;
                    } else r += h.length + 1;
                }
            }
        }
        for(let c = i + 1; c < t.baseY + this._xterm.rows; c++){
            const l = t.getLine(c), u = l?.translateToString(!0);
            if (u && l) this._shellType === "fish" ? o += `${u}` : this._continuationPrompt === void 0 || this._lineContainsContinuationPrompt(u) ? o += `
${this._trimContinuationPrompt(u)}` : o += u;
            else break;
        }
        this._logService.getLevel() === Dh.Trace && this._logService.trace(`PromptInputModel#_sync: ${this.getCombinedString()}`);
        {
            let c = this._value.length - this._value.trimEnd().length;
            this._lastUserInput === "\x7F" && (this._lastUserInput = "", r === this._cursorIndex - 1 && (this._value.trimEnd().length > o.trimEnd().length && o.trimEnd().length <= r ? c = Math.max(this._value.length - 1 - o.trimEnd().length, 0) : c = Math.max(c - 1, 0))), this._lastUserInput === "\x1B[3~" && (this._lastUserInput = "", r === this._cursorIndex && (c = Math.max(c - 1, 0)));
            const l = o.split(`
`), u = l.length > 1, h = o.trimEnd();
            if (!u) {
                h.length < o.length && (this._lastUserInput === " " && (this._lastUserInput = "", r > h.length && r > this._cursorIndex && c++), c = Math.max(r - h.length, c, 0));
                const p = r === 0 ? "" : o[r - 1];
                c > 0 && r === this._cursorIndex + 1 && this._lastUserInput !== "" && p !== " " && (c = this._value.length - this._cursorIndex);
            }
            if (u) {
                l[l.length - 1] = l.at(-1)?.trimEnd() ?? "";
                const p = (l.length - 1) * (this._continuationPrompt?.length ?? 0);
                c = Math.max(0, r - o.length - p);
            }
            o = l.map((p)=>p.trimEnd()).join(`
`) + " ".repeat(c);
        }
        a = this._scanForGhostText(t, n, r), (this._value !== o || this._cursorIndex !== r || this._ghostTextIndex !== a) && (this._value = o, this._cursorIndex = r, this._ghostTextIndex = a, this._onDidChangeInput.fire(this._createStateObject()));
    }
    _handleUserInput(e) {
        this._lastUserInput = e;
    }
    _scanForGhostText(e, t, n) {
        if (!this.value.trim().length) return -1;
        let i = -1, r = !1, s = e.cursorX;
        for(; s > 0;){
            const o = t.getCell(--s);
            if (!o) break;
            if (o.getChars().trim().length > 0) {
                r = !this._isCellStyledLikeGhostText(o);
                break;
            }
        }
        if (r) {
            let o = 0, a = e.cursorX;
            for(; a < t.length;){
                const c = t.getCell(a++);
                if (!c || c.getCode() === 0) break;
                if (this._isCellStyledLikeGhostText(c)) {
                    i = n + o;
                    break;
                }
                o += c.getChars().length;
            }
        }
        return i === -1 && (i = this._scanForGhostTextAdvanced(e, t, n)), i > -1 && this.value.substring(i).endsWith(" ") && (this._value = this.value.trim(), this.value.substring(i) || (i = -1)), i;
    }
    _scanForGhostTextAdvanced(e, t, n) {
        let i = -1, r = e.cursorX;
        const s = new Map;
        let o = t.getCell(r), a = o;
        for(; a && r < t.length;){
            const l = this._getCellStyleAsString(a);
            s.set(l, [
                ...s.get(l) ?? [],
                r
            ]), a = t.getCell(++r), a?.getChars().trim().length && (o = a);
        }
        if (!o?.getChars().trim().length || this._cellStylesMatch(t.getCell(this._commandStartX), o)) return -1;
        const c = s.get(this._getCellStyleAsString(o));
        if (c) {
            for(let l = 1; l < c.length; l++)if (c[l] !== c[l - 1] + 1) return -1;
            e.baseY + e.cursorY === this._commandStartMarker?.line ? i = c[0] - this._commandStartX : i = c[0];
        }
        if (i !== -1) for(let l = e.cursorX; l >= this._commandStartX; l--){
            const u = t.getCell(l);
            if (u?.getChars.length && u && u.getCode() !== 0 && this._cellStylesMatch(o, u)) return -1;
        }
        return i >= n ? i : -1;
    }
    _getCellStyleAsString(e) {
        return `${e.getFgColor()}${e.getBgColor()}${e.isBold()}${e.isItalic()}${e.isDim()}${e.isUnderline()}${e.isBlink()}${e.isInverse()}${e.isInvisible()}${e.isStrikethrough()}${e.isOverline()}${e.getFgColorMode()}${e.getBgColorMode()}`;
    }
    _cellStylesMatch(e, t) {
        return !e || !t ? !1 : e.getFgColor() === t.getFgColor() && e.getBgColor() === t.getBgColor() && e.isBold() === t.isBold() && e.isItalic() === t.isItalic() && e.isDim() === t.isDim() && e.isUnderline() === t.isUnderline() && e.isBlink() === t.isBlink() && e.isInverse() === t.isInverse() && e.isInvisible() === t.isInvisible() && e.isStrikethrough() === t.isStrikethrough() && e.isOverline() === t.isOverline() && e?.getBgColorMode() === t?.getBgColorMode() && e?.getFgColorMode() === t?.getFgColorMode();
    }
    _trimContinuationPrompt(e) {
        return this._lineContainsContinuationPrompt(e) && (e = e.substring(this._continuationPrompt.length)), e;
    }
    _lineContainsContinuationPrompt(e) {
        return !!(this._continuationPrompt && e.startsWith(this._continuationPrompt.trimEnd()));
    }
    _getContinuationPromptCellWidth(e, t) {
        if (!this._continuationPrompt || !t.startsWith(this._continuationPrompt.trimEnd())) return 0;
        let n = "", i = 0, r;
        for(; n !== this._continuationPrompt && (r = e.getCell(i++), !!r);)n += r.getChars();
        return i;
    }
    _getRelativeCursorIndex(e, t, n) {
        return n?.translateToString(!0, e, t.cursorX).length ?? 0;
    }
    _isCellStyledLikeGhostText(e) {
        return !!(e.isItalic() || e.isDim());
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
}, ie([
    jpt(0)
], U5n.prototype, "_sync", null), U5n = ie([
    C(4, Wn)
], U5n);

}
