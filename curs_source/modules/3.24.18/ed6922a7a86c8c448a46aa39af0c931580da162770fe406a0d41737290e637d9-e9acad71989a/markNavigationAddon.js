import { He, Kl, Lo, Se, cn, qu, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { dr } from "./arrays.js";
import { bn } from "./async.js";
import { Cn, qt } from "./configuration.js";
import { en, xi } from "./dom_2.js";
import { BDo, a7e } from "./terminalColorRegistry.js";
import { C8e, zjt } from "./terminalContribExports.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
function G5n(e, t) {
    return t === 1 ? e.buffer.active.baseY + e.rows - 1 : t === 0 ? 0 : t.line;
}
function Hir(e, t, n) {
    n === null && (n = 1);
    let i = G5n(e, t), r = G5n(e, n);
    if (i > r) {
        const s = i;
        i = r, r = s;
    }
    r -= 1, e.selectLines(i, r);
}
function N9h(e) {
    return typeof e != "number";
}
function Rnt(e) {
    return N9h(e) ? e.line : e;
}
var Wir;
export { G5n, Hir, N9h, Rnt, Wir };
var __wakaru__h__initialized = false;
export function _h_() {
if (__wakaru__h__initialized) return;
__wakaru__h__initialized = true;
"use strict";
x(), dr(), Se(), bn(), as(), a7e(), en(), Cn(), C8e(), Wir = class extends we {
    constructor(e, t, n){
        super(), this._capabilities = e, this._configurationService = t, this._themeService = n, this._currentMarker = 1, this._selectionStart = null, this._isDisposable = !1, this._commandGuideDecorations = this._register(new cn);
    }
    activate(e) {
        this._terminal = e, this._register(this._terminal.onData(()=>{
            this._currentMarker = 1;
        }));
    }
    _getMarkers(e) {
        const t = this._capabilities.get(2), n = this._capabilities.get(3), i = this._capabilities.get(4);
        let r = [];
        return t ? (r = qu(t.commands.filter((s)=>e ? s.exitCode !== void 0 : !0).map((s)=>s.promptStartMarker ?? s.marker)), t.currentCommand?.promptStartMarker && t.currentCommand.commandExecutedMarker && r.push(t.currentCommand?.promptStartMarker)) : n && r.push(...n.commands), i && !e && (r = [
            ...i.markers()
        ]), r;
    }
    _findCommand(e) {
        const t = this._capabilities.get(2);
        if (t) {
            const n = t.commands.find((i)=>i.marker?.line === e.line || i.promptStartMarker?.line === e.line);
            if (n) return n;
            if (t.currentCommand) return t.currentCommand;
        }
    }
    clear() {
        this._currentMarker = 1, this._resetNavigationDecorations(), this._selectionStart = null;
    }
    _resetNavigationDecorations() {
        this._navigationDecorations && Lo(this._navigationDecorations), this._navigationDecorations = [];
    }
    _isEmptyCommand(e) {
        return e === 1 ? !0 : e === 0 ? !this._getMarkers(!0).map((t)=>t.line).includes(0) : !this._getMarkers(!0).includes(e);
    }
    scrollToPreviousMark(e = 1, t = !1, n = !0) {
        if (!this._terminal) return;
        t || (this._selectionStart = null);
        let i;
        const r = typeof this._currentMarker == "object" ? this.getTargetScrollLine(this._currentMarker.line, e) : Math.min(G5n(this._terminal, this._currentMarker), this._terminal.buffer.active.baseY), s = this._terminal.buffer.active.viewportY;
        if (typeof this._currentMarker == "object" ? !this._isMarkerInViewport(this._terminal, this._currentMarker) : r !== s) {
            const o = this._getMarkers(n).filter((a)=>a.line >= s).length;
            i = this._getMarkers(n).length - o - 1;
        } else this._currentMarker === 1 ? i = this._getMarkers(n).length - 1 : this._currentMarker === 0 ? i = -1 : this._isDisposable ? (i = this._findPreviousMarker(n), this._currentMarker.dispose(), this._isDisposable = !1) : n && this._isEmptyCommand(this._currentMarker) ? i = this._findPreviousMarker(!0) : i = this._getMarkers(n).indexOf(this._currentMarker) - 1;
        if (i < 0) {
            this._currentMarker = 0, this._terminal.scrollToTop(), this._resetNavigationDecorations();
            return;
        }
        this._currentMarker = this._getMarkers(n)[i], this._scrollToCommand(this._currentMarker, e);
    }
    scrollToNextMark(e = 1, t = !1, n = !0) {
        if (!this._terminal) return;
        t || (this._selectionStart = null);
        let i;
        const r = typeof this._currentMarker == "object" ? this.getTargetScrollLine(this._currentMarker.line, e) : Math.min(G5n(this._terminal, this._currentMarker), this._terminal.buffer.active.baseY), s = this._terminal.buffer.active.viewportY;
        if ((typeof this._currentMarker == "object" ? !this._isMarkerInViewport(this._terminal, this._currentMarker) : r !== s) ? i = this._getMarkers(n).filter((a)=>a.line <= s).length : this._currentMarker === 1 ? i = this._getMarkers(n).length : this._currentMarker === 0 ? i = 0 : this._isDisposable ? (i = this._findNextMarker(n), this._currentMarker.dispose(), this._isDisposable = !1) : n && this._isEmptyCommand(this._currentMarker) ? i = this._findNextMarker(!0) : i = this._getMarkers(n).indexOf(this._currentMarker) + 1, i >= this._getMarkers(n).length) {
            this._currentMarker = 1, this._terminal.scrollToBottom(), this._resetNavigationDecorations();
            return;
        }
        this._currentMarker = this._getMarkers(n)[i], this._scrollToCommand(this._currentMarker, e);
    }
    _scrollToCommand(e, t) {
        const n = this._findCommand(e);
        n ? this.revealCommand(n, t) : this._scrollToMarker(e, t);
    }
    _scrollToMarker(e, t, n, i) {
        if (this._terminal) {
            if (!this._isMarkerInViewport(this._terminal, e) || i?.forceScroll) {
                const r = this.getTargetScrollLine(Rnt(e), t);
                this._terminal.scrollToLine(r);
            }
            i?.hideDecoration || (i?.bufferRange ? this._highlightBufferRange(i.bufferRange) : this.registerTemporaryDecoration(e, n, !0));
        }
    }
    _createMarkerForOffset(e, t) {
        if (t === 0 && N9h(e)) return e;
        {
            const n = this._terminal?.registerMarker(-this._terminal.buffer.active.cursorY + Rnt(e) - this._terminal.buffer.active.baseY + t);
            if (n) return n;
            throw new Error(`Could not register marker with offset ${Rnt(e)}, ${t}`);
        }
    }
    revealCommand(e, t = 1) {
        const n = "getOutput" in e ? e.marker : e.commandStartMarker;
        if (!this._terminal || !n) return;
        const i = Rnt(n), r = e.getPromptRowCount(), s = e.getCommandRowCount();
        this._scrollToMarker(i - (r - 1), t, i + (s - 1));
    }
    revealRange(e) {
        this._scrollToMarker(e.start.y - 1, 1, e.end.y - 1, {
            bufferRange: e,
            forceScroll: !!this._configurationService.getValue(zjt.StickyScrollEnabled)
        });
    }
    showCommandGuide(e) {
        if (this._terminal) {
            if (!e) {
                this._commandGuideDecorations.clear(), this._activeCommandGuide = void 0;
                return;
            }
            if (this._activeCommandGuide !== e && e.marker) {
                this._activeCommandGuide = e;
                const t = this._commandGuideDecorations.value = new He;
                if (!e.executedMarker || !e.endMarker) return;
                const n = e.marker.line - (e.getPromptRowCount() - 1), i = Rnt(e.endMarker) - n;
                if (i > 200) return;
                for(let r = 0; r < i; r++){
                    const s = this._terminal.registerDecoration({
                        marker: this._createMarkerForOffset(n, r)
                    });
                    if (s) {
                        t.add(s);
                        let o;
                        t.add(s.onRender((a)=>{
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
    _highlightBufferRange(e) {
        if (!this._terminal) return;
        this._resetNavigationDecorations();
        const t = e.start.y, n = e.end.y - e.start.y + 1;
        for(let i = 0; i < n; i++){
            const r = this._terminal.registerDecoration({
                marker: this._createMarkerForOffset(t - 1, i),
                x: e.start.x - 1,
                width: e.end.x - 1 - (e.start.x - 1) + 1,
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
    registerTemporaryDecoration(e, t, n) {
        if (!this._terminal) return;
        this._resetNavigationDecorations();
        const i = this._themeService.getColorTheme().getColor(BDo), r = Rnt(e), s = t ? Rnt(t) - r + 1 : 1;
        for(let o = 0; o < s; o++){
            const a = this._terminal.registerDecoration({
                marker: this._createMarkerForOffset(e, o),
                width: this._terminal.cols,
                overviewRulerOptions: o === 0 ? {
                    color: i?.toString() || "#a0a0a0cc"
                } : void 0
            });
            if (a) {
                this._navigationDecorations?.push(a);
                let c;
                a.onRender((l)=>{
                    c ? l.classList.add("terminal-scroll-highlight") : (c = l, l.classList.add("terminal-scroll-highlight"), n && l.classList.add("terminal-scroll-highlight-outline"), o === 0 && l.classList.add("top"), o === s - 1 && l.classList.add("bottom")), this._terminal?.element && (l.style.marginLeft = `-${xi(this._terminal.element).getComputedStyle(this._terminal.element).paddingLeft}`);
                }), a.onDispose(()=>{
                    this._navigationDecorations = this._navigationDecorations?.filter((l)=>l !== a);
                }), n && Kl(350).then(()=>{
                    c && c.classList.remove("terminal-scroll-highlight-outline");
                });
            }
        }
    }
    scrollToLine(e, t) {
        this._terminal?.scrollToLine(this.getTargetScrollLine(e, t));
    }
    getTargetScrollLine(e, t) {
        return this._terminal && t === 1 ? Math.max(e - Math.floor(this._terminal.rows / 4), 0) : e;
    }
    _isMarkerInViewport(e, t) {
        const n = e.buffer.active.viewportY, i = Rnt(t);
        return i >= n && i < n + e.rows;
    }
    scrollToClosestMarker(e, t, n) {
        const i = this._capabilities.get(4);
        if (!i) return;
        const r = i.getMark(e);
        if (!r) return;
        const s = t ? i.getMark(t) : r;
        this._scrollToMarker(r, 0, s, {
            hideDecoration: !n
        });
    }
    selectToPreviousMark() {
        this._terminal && (this._selectionStart === null && (this._selectionStart = this._currentMarker), this._capabilities.has(2) ? this.scrollToPreviousMark(1, !0, !0) : this.scrollToPreviousMark(1, !0, !1), Hir(this._terminal, this._currentMarker, this._selectionStart));
    }
    selectToNextMark() {
        this._terminal && (this._selectionStart === null && (this._selectionStart = this._currentMarker), this._capabilities.has(2) ? this.scrollToNextMark(1, !0, !0) : this.scrollToNextMark(1, !0, !1), Hir(this._terminal, this._currentMarker, this._selectionStart));
    }
    selectToPreviousLine() {
        this._terminal && (this._selectionStart === null && (this._selectionStart = this._currentMarker), this.scrollToPreviousLine(this._terminal, 1, !0), Hir(this._terminal, this._currentMarker, this._selectionStart));
    }
    selectToNextLine() {
        this._terminal && (this._selectionStart === null && (this._selectionStart = this._currentMarker), this.scrollToNextLine(this._terminal, 1, !0), Hir(this._terminal, this._currentMarker, this._selectionStart));
    }
    scrollToPreviousLine(e, t = 1, n = !1) {
        if (n || (this._selectionStart = null), this._currentMarker === 0) {
            e.scrollToTop();
            return;
        }
        if (this._currentMarker === 1) this._currentMarker = this._registerMarkerOrThrow(e, this._getOffset(e) - 1);
        else {
            const i = this._getOffset(e);
            this._isDisposable && this._currentMarker.dispose(), this._currentMarker = this._registerMarkerOrThrow(e, i - 1);
        }
        this._isDisposable = !0, this._scrollToMarker(this._currentMarker, t);
    }
    scrollToNextLine(e, t = 1, n = !1) {
        if (n || (this._selectionStart = null), this._currentMarker === 1) {
            e.scrollToBottom();
            return;
        }
        if (this._currentMarker === 0) this._currentMarker = this._registerMarkerOrThrow(e, this._getOffset(e) + 1);
        else {
            const i = this._getOffset(e);
            this._isDisposable && this._currentMarker.dispose(), this._currentMarker = this._registerMarkerOrThrow(e, i + 1);
        }
        this._isDisposable = !0, this._scrollToMarker(this._currentMarker, t);
    }
    _registerMarkerOrThrow(e, t) {
        const n = e.registerMarker(t);
        if (!n) throw new Error(`Could not create marker for ${t}`);
        return n;
    }
    _getOffset(e) {
        if (this._currentMarker === 1) return 0;
        if (this._currentMarker === 0) return 0 - (e.buffer.active.baseY + e.buffer.active.cursorY);
        {
            let t = G5n(e, this._currentMarker);
            return t -= e.buffer.active.baseY + e.buffer.active.cursorY, t;
        }
    }
    _findPreviousMarker(e = !1) {
        if (this._currentMarker === 0) return 0;
        if (this._currentMarker === 1) return this._getMarkers(e).length - 1;
        let t;
        for(t = this._getMarkers(e).length - 1; t >= 0; t--)if (this._getMarkers(e)[t].line < this._currentMarker.line) return t;
        return -1;
    }
    _findNextMarker(e = !1) {
        if (this._currentMarker === 0) return 0;
        if (this._currentMarker === 1) return this._getMarkers(e).length - 1;
        let t;
        for(t = 0; t < this._getMarkers(e).length; t++)if (this._getMarkers(e)[t].line > this._currentMarker.line) return t;
        return this._getMarkers(e).length;
    }
}, Wir = ie([
    C(1, qt),
    C(2, $r)
], Wir);

}
