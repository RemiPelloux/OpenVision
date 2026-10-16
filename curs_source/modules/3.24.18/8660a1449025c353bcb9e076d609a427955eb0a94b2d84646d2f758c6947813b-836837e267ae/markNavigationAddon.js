import { Mm, Nc, Nt, Qe, Vn, Wd, st } from "./Iwo.js";
import { JEt, VAi, hPg, ohs } from "./Ycg.js";
import { bo } from "./arrays.js";
import { qn } from "./async.js";
import { or, yi } from "./configuration.js";
import { Hn, ws } from "./dom_2.js";
import { XEt, bvl } from "./terminalColorRegistry.js";
import { GAn, Nat } from "./terminalContribExports.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var ahs;
export { ahs };
var __wakaru_EDk_initialized = false;
export function EDk() {
if (__wakaru_EDk_initialized) return;
__wakaru_EDk_initialized = true;
"use strict";
E(), bo(), Qe(), qn(), Dl(), XEt(), Hn(), or(), Nat(), ahs = class extends st {
    constructor(t, e, n){
        super(), this._capabilities = t, this._configurationService = e, this._themeService = n, this._currentMarker = 1, this._selectionStart = null, this._isDisposable = !1, this._commandGuideDecorations = this._register(new Vn);
    }
    activate(t) {
        this._terminal = t, this._register(this._terminal.onData(()=>{
            this._currentMarker = 1;
        }));
    }
    _getMarkers(t) {
        const e = this._capabilities.get(2), n = this._capabilities.get(3), i = this._capabilities.get(4);
        let r = [];
        return e ? (r = Mm(e.commands.filter((s)=>t ? s.exitCode !== void 0 : !0).map((s)=>s.promptStartMarker ?? s.marker)), e.currentCommand?.promptStartMarker && e.currentCommand.commandExecutedMarker && r.push(e.currentCommand?.promptStartMarker)) : n && r.push(...n.commands), i && !t && (r = [
            ...i.markers()
        ]), r;
    }
    _findCommand(t) {
        const e = this._capabilities.get(2);
        if (e) {
            const n = e.commands.find((i)=>i.marker?.line === t.line || i.promptStartMarker?.line === t.line);
            if (n) return n;
            if (e.currentCommand) return e.currentCommand;
        }
    }
    clear() {
        this._currentMarker = 1, this._resetNavigationDecorations(), this._selectionStart = null;
    }
    _resetNavigationDecorations() {
        this._navigationDecorations && Nc(this._navigationDecorations), this._navigationDecorations = [];
    }
    _isEmptyCommand(t) {
        return t === 1 ? !0 : t === 0 ? !this._getMarkers(!0).map((e)=>e.line).includes(0) : !this._getMarkers(!0).includes(t);
    }
    scrollToPreviousMark(t = 1, e = !1, n = !0) {
        if (!this._terminal) return;
        e || (this._selectionStart = null);
        let i;
        const r = typeof this._currentMarker == "object" ? this.getTargetScrollLine(this._currentMarker.line, t) : Math.min(VAi(this._terminal, this._currentMarker), this._terminal.buffer.active.baseY), s = this._terminal.buffer.active.viewportY;
        if (typeof this._currentMarker == "object" ? !this._isMarkerInViewport(this._terminal, this._currentMarker) : r !== s) {
            const o = this._getMarkers(n).filter((a)=>a.line >= s).length;
            i = this._getMarkers(n).length - o - 1;
        } else this._currentMarker === 1 ? i = this._getMarkers(n).length - 1 : this._currentMarker === 0 ? i = -1 : this._isDisposable ? (i = this._findPreviousMarker(n), this._currentMarker.dispose(), this._isDisposable = !1) : n && this._isEmptyCommand(this._currentMarker) ? i = this._findPreviousMarker(!0) : i = this._getMarkers(n).indexOf(this._currentMarker) - 1;
        if (i < 0) {
            this._currentMarker = 0, this._terminal.scrollToTop(), this._resetNavigationDecorations();
            return;
        }
        this._currentMarker = this._getMarkers(n)[i], this._scrollToCommand(this._currentMarker, t);
    }
    scrollToNextMark(t = 1, e = !1, n = !0) {
        if (!this._terminal) return;
        e || (this._selectionStart = null);
        let i;
        const r = typeof this._currentMarker == "object" ? this.getTargetScrollLine(this._currentMarker.line, t) : Math.min(VAi(this._terminal, this._currentMarker), this._terminal.buffer.active.baseY), s = this._terminal.buffer.active.viewportY;
        if ((typeof this._currentMarker == "object" ? !this._isMarkerInViewport(this._terminal, this._currentMarker) : r !== s) ? i = this._getMarkers(n).filter((a)=>a.line <= s).length : this._currentMarker === 1 ? i = this._getMarkers(n).length : this._currentMarker === 0 ? i = 0 : this._isDisposable ? (i = this._findNextMarker(n), this._currentMarker.dispose(), this._isDisposable = !1) : n && this._isEmptyCommand(this._currentMarker) ? i = this._findNextMarker(!0) : i = this._getMarkers(n).indexOf(this._currentMarker) + 1, i >= this._getMarkers(n).length) {
            this._currentMarker = 1, this._terminal.scrollToBottom(), this._resetNavigationDecorations();
            return;
        }
        this._currentMarker = this._getMarkers(n)[i], this._scrollToCommand(this._currentMarker, t);
    }
    _scrollToCommand(t, e) {
        const n = this._findCommand(t);
        n ? this.revealCommand(n, e) : this._scrollToMarker(t, e);
    }
    _scrollToMarker(t, e, n, i) {
        if (this._terminal) {
            if (!this._isMarkerInViewport(this._terminal, t) || i?.forceScroll) {
                const r = this.getTargetScrollLine(JEt(t), e);
                this._terminal.scrollToLine(r);
            }
            i?.hideDecoration || (i?.bufferRange ? this._highlightBufferRange(i.bufferRange) : this.registerTemporaryDecoration(t, n, !0));
        }
    }
    _createMarkerForOffset(t, e) {
        if (e === 0 && hPg(t)) return t;
        {
            const n = this._terminal?.registerMarker(-this._terminal.buffer.active.cursorY + JEt(t) - this._terminal.buffer.active.baseY + e);
            if (n) return n;
            throw new Error(`Could not register marker with offset ${JEt(t)}, ${e}`);
        }
    }
    revealCommand(t, e = 1) {
        const n = "getOutput" in t ? t.marker : t.commandStartMarker;
        if (!this._terminal || !n) return;
        const i = JEt(n), r = t.getPromptRowCount(), s = t.getCommandRowCount();
        this._scrollToMarker(i - (r - 1), e, i + (s - 1));
    }
    revealRange(t) {
        this._scrollToMarker(t.start.y - 1, 1, t.end.y - 1, {
            bufferRange: t,
            forceScroll: !!this._configurationService.getValue(GAn.StickyScrollEnabled)
        });
    }
    showCommandGuide(t) {
        if (this._terminal) {
            if (!t) {
                this._commandGuideDecorations.clear(), this._activeCommandGuide = void 0;
                return;
            }
            if (this._activeCommandGuide !== t && t.marker) {
                this._activeCommandGuide = t;
                const e = this._commandGuideDecorations.value = new Nt;
                if (!t.executedMarker || !t.endMarker) return;
                const n = t.marker.line - (t.getPromptRowCount() - 1), i = JEt(t.endMarker) - n;
                if (i > 200) return;
                for(let r = 0; r < i; r++){
                    const s = this._terminal.registerDecoration({
                        marker: this._createMarkerForOffset(n, r)
                    });
                    if (s) {
                        e.add(s);
                        let o;
                        e.add(s.onRender((a)=>{
                            o || (o = a, a.classList.add("terminal-command-guide"), r === 0 && a.classList.add("top"), r === i - 1 && a.classList.add("bottom"));
                        }));
                    }
                }
            }
        }
    }
    saveScrollState() {
        this._scrollState = {
            viewportY: this._terminal?.buffer.active.viewportY ?? 0
        };
    }
    restoreScrollState() {
        this._scrollState && this._terminal && (this._terminal.scrollToLine(this._scrollState.viewportY), this._scrollState = void 0);
    }
    _highlightBufferRange(t) {
        if (!this._terminal) return;
        this._resetNavigationDecorations();
        const e = t.start.y, n = t.end.y - t.start.y + 1;
        for(let i = 0; i < n; i++){
            const r = this._terminal.registerDecoration({
                marker: this._createMarkerForOffset(e - 1, i),
                x: t.start.x - 1,
                width: t.end.x - 1 - (t.start.x - 1) + 1,
                overviewRulerOptions: void 0
            });
            if (r) {
                this._navigationDecorations?.push(r);
                let s;
                r.onRender((o)=>{
                    s || (s = o, o.classList.add("terminal-range-highlight"));
                }), r.onDispose(()=>{
                    this._navigationDecorations = this._navigationDecorations?.filter((o)=>o !== r);
                });
            }
        }
    }
    registerTemporaryDecoration(t, e, n) {
        if (!this._terminal) return;
        this._resetNavigationDecorations();
        const i = this._themeService.getColorTheme().getColor(bvl), r = JEt(t), s = e ? JEt(e) - r + 1 : 1;
        for(let o = 0; o < s; o++){
            const a = this._terminal.registerDecoration({
                marker: this._createMarkerForOffset(t, o),
                width: this._terminal.cols,
                overviewRulerOptions: o === 0 ? {
                    color: i?.toString() || "#a0a0a0cc"
                } : void 0
            });
            if (a) {
                this._navigationDecorations?.push(a);
                let l;
                a.onRender((c)=>{
                    l ? c.classList.add("terminal-scroll-highlight") : (l = c, c.classList.add("terminal-scroll-highlight"), n && c.classList.add("terminal-scroll-highlight-outline"), o === 0 && c.classList.add("top"), o === s - 1 && c.classList.add("bottom")), this._terminal?.element && (c.style.marginLeft = `-${ws(this._terminal.element).getComputedStyle(this._terminal.element).paddingLeft}`);
                }), a.onDispose(()=>{
                    this._navigationDecorations = this._navigationDecorations?.filter((c)=>c !== a);
                }), n && Wd(350).then(()=>{
                    l && l.classList.remove("terminal-scroll-highlight-outline");
                });
            }
        }
    }
    scrollToLine(t, e) {
        this._terminal?.scrollToLine(this.getTargetScrollLine(t, e));
    }
    getTargetScrollLine(t, e) {
        return this._terminal && e === 1 ? Math.max(t - Math.floor(this._terminal.rows / 4), 0) : t;
    }
    _isMarkerInViewport(t, e) {
        const n = t.buffer.active.viewportY, i = JEt(e);
        return i >= n && i < n + t.rows;
    }
    scrollToClosestMarker(t, e, n) {
        const i = this._capabilities.get(4);
        if (!i) return;
        const r = i.getMark(t);
        if (!r) return;
        const s = e ? i.getMark(e) : r;
        this._scrollToMarker(r, 0, s, {
            hideDecoration: !n
        });
    }
    selectToPreviousMark() {
        this._terminal && (this._selectionStart === null && (this._selectionStart = this._currentMarker), this._capabilities.has(2) ? this.scrollToPreviousMark(1, !0, !0) : this.scrollToPreviousMark(1, !0, !1), ohs(this._terminal, this._currentMarker, this._selectionStart));
    }
    selectToNextMark() {
        this._terminal && (this._selectionStart === null && (this._selectionStart = this._currentMarker), this._capabilities.has(2) ? this.scrollToNextMark(1, !0, !0) : this.scrollToNextMark(1, !0, !1), ohs(this._terminal, this._currentMarker, this._selectionStart));
    }
    selectToPreviousLine() {
        this._terminal && (this._selectionStart === null && (this._selectionStart = this._currentMarker), this.scrollToPreviousLine(this._terminal, 1, !0), ohs(this._terminal, this._currentMarker, this._selectionStart));
    }
    selectToNextLine() {
        this._terminal && (this._selectionStart === null && (this._selectionStart = this._currentMarker), this.scrollToNextLine(this._terminal, 1, !0), ohs(this._terminal, this._currentMarker, this._selectionStart));
    }
    scrollToPreviousLine(t, e = 1, n = !1) {
        if (n || (this._selectionStart = null), this._currentMarker === 0) {
            t.scrollToTop();
            return;
        }
        if (this._currentMarker === 1) this._currentMarker = this._registerMarkerOrThrow(t, this._getOffset(t) - 1);
        else {
            const i = this._getOffset(t);
            this._isDisposable && this._currentMarker.dispose(), this._currentMarker = this._registerMarkerOrThrow(t, i - 1);
        }
        this._isDisposable = !0, this._scrollToMarker(this._currentMarker, e);
    }
    scrollToNextLine(t, e = 1, n = !1) {
        if (n || (this._selectionStart = null), this._currentMarker === 1) {
            t.scrollToBottom();
            return;
        }
        if (this._currentMarker === 0) this._currentMarker = this._registerMarkerOrThrow(t, this._getOffset(t) + 1);
        else {
            const i = this._getOffset(t);
            this._isDisposable && this._currentMarker.dispose(), this._currentMarker = this._registerMarkerOrThrow(t, i + 1);
        }
        this._isDisposable = !0, this._scrollToMarker(this._currentMarker, e);
    }
    _registerMarkerOrThrow(t, e) {
        const n = t.registerMarker(e);
        if (!n) throw new Error(`Could not create marker for ${e}`);
        return n;
    }
    _getOffset(t) {
        if (this._currentMarker === 1) return 0;
        if (this._currentMarker === 0) return 0 - (t.buffer.active.baseY + t.buffer.active.cursorY);
        {
            let e = VAi(t, this._currentMarker);
            return e -= t.buffer.active.baseY + t.buffer.active.cursorY, e;
        }
    }
    _findPreviousMarker(t = !1) {
        if (this._currentMarker === 0) return 0;
        if (this._currentMarker === 1) return this._getMarkers(t).length - 1;
        let e;
        for(e = this._getMarkers(t).length - 1; e >= 0; e--)if (this._getMarkers(t)[e].line < this._currentMarker.line) return e;
        return -1;
    }
    _findNextMarker(t = !1) {
        if (this._currentMarker === 0) return 0;
        if (this._currentMarker === 1) return this._getMarkers(t).length - 1;
        let e;
        for(e = 0; e < this._getMarkers(t).length; e++)if (this._getMarkers(t)[e].line > this._currentMarker.line) return e;
        return this._getMarkers(t).length;
    }
}, ahs = Re([
    F(1, yi),
    F(2, Ml)
], ahs);

}
