import { Gcv } from "./De_3.js";
import { Se, cn } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { AKr, RAe, So } from "./constants_8.js";
import { Fn, en } from "./dom_2.js";
import { u6i } from "./ghostTextView.js";
import { kl, pc } from "./language.js";
import { Wze, gW } from "./lineDecorations.js";
import { P7, uA } from "./lineTokens.js";
import { Xt, sa } from "./qIc.js";
import { ul_ } from "./removedLineZoneWidget.css";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { ZFt, r_n } from "./zoneWidget.js";
var dnr;
export { dnr };
var __wakaru_dl__initialized = false;
export function dl_() {
if (__wakaru_dl__initialized) return;
__wakaru_dl__initialized = true;
"use strict";
x(), So(), Se(), Cn(), kl(), P7(), Wze(), u6i(), r_n(), en(), en(), as(), ul_(), dnr = class extends ZFt {
    constructor(e, t, n, i, r, s, o, a, c){
        super(t, {
            showFrame: !1,
            showArrow: !1,
            ordinal: 2,
            keepEditorSelection: !0,
            moveToLineWhenShown: !1
        }), this._languageService = o, this._themeService = a, this.configurationService = c, this._clickListener = this._disposables.add(new cn), this._container = null, this._content = null, this._overlay = null, this._renderScheduled = !1, this.id = e, this._lines = n, this._lineTokens = i, this._position = s, this._elementClassName = "inline-diff-removed", this._heightInLines = 1, this.options.ordinal = AKr + 1, this._innerChanges = void 0, this.create(), this._scrollListener = this.editor.onDidScrollChange((u)=>{
            u.scrollLeftChanged && this._updateHorizontalScroll(u.scrollLeft);
        });
        let l = this.editor.getLayoutInfo();
        this._widthListener = this.editor.onDidLayoutChange((u)=>{
            (u.wrappingColumn !== l.wrappingColumn || u.contentLeft !== l.contentLeft) && (this._updateLineRendering(), l = u);
        }), this._editorConfigurationListener = this.editor.onDidChangeConfiguration((u)=>{
            (u.hasChanged(137) || u.hasChanged(141) || u.hasChanged(142)) && this._updateLineRendering();
        }), this._themeListener = this._themeService.onDidColorThemeChange((u)=>{
            this._setOverlayBackground(u);
        }), this._container !== null && (this._container.style.marginLeft = "1px", this._container.parentElement && this._container.parentElement.classList.add("removed-lines-zone-widget")), this._updateHorizontalScroll(this.editor.getScrollLeft()), this._updateLineRendering();
    }
    _updateLineRendering() {
        !this._container || this._renderScheduled || (this._renderScheduled = !0, sa().requestAnimationFrame(()=>{
            try {
                const e = this._renderContent();
                this.updateBackgroundColor(), this._content && this._container && this._content.parentNode && this._container.replaceChild(e.content, this._content), this._content = e.content;
                const t = this._heightInLines;
                this._heightInLines = e.heightInLines, this._overlay && (this._overlay.style.width = `${this.editor.getLayoutInfo().contentLeft}px`), t !== this._heightInLines && (this.hide(), this.showWidget());
            } catch (e) {
                console.error("Error during rendering:", e);
            } finally{
                this._renderScheduled = !1;
            }
        }));
    }
    updatePosition(e) {
        if (this._viewZone) {
            if (this._position.lineNumber === e.lineNumber && this._position.column === e.column) return;
            this._position = e, this.updatePositionAndHeight(e, this._heightInLines);
            return;
        }
        this._position = e, this.showWidget();
    }
    updateBackgroundColor() {
        if (!!this._container?.closest(".agent-layout")) {
            const r = "rgba(191, 97, 106, 0.1)";
            this._container && (this._container.style.backgroundColor = r);
            return;
        }
        const t = this.configurationService.getValue(RAe), n = this._innerChanges && this._innerChanges.length > 0 ? "hsl(348deg 90% 50% / 15%)" : "hsl(348deg 90% 50% / 25%)", i = t ? `var(--vscode-diffEditor-removedLineBackground, ${n})` : n;
        this._container && (this._container.style.backgroundColor = i);
    }
    _fillContainer(e) {
        this._container = e, this._container.style.position = "relative", this._container.style.width = "1000000px", this._clickListener.value = Xt(this._container, Fn.CLICK, ()=>{
            const i = sa().getSelection();
            if (i && i.toString().trim().length > 0) return;
            const r = this._position.lineNumber + 1;
            this.editor.setPosition({
                lineNumber: r,
                column: 1
            }), this.editor.revealLineInCenter(r), this.editor.focus();
        }), this.updateBackgroundColor(), this._disposables.add(this.configurationService.onDidChangeConfiguration((i)=>{
            i.affectsConfiguration(RAe) && this.updateBackgroundColor();
        }));
        const t = this._renderContent();
        this._content = t.content, this._heightInLines = t.heightInLines;
        const n = this._getLeftMargin();
        this._overlay = document.createElement("div"), this._overlay.style.width = `${n + 1}px`, this._overlay.style.height = "100%", this._overlay.style.position = "absolute", this._overlay.style.zIndex = "3", this._setOverlayBackground(this._themeService.getColorTheme()), e.appendChild(this._overlay), e.appendChild(this._content), this._updateHorizontalScroll(this.editor.getScrollLeft());
    }
    _setOverlayBackground(e) {
        if (this._overlay) {
            let t = "white";
            const n = e.getColor("editor.background");
            n && (t = n.toString()), this._overlay.style.backgroundColor = t;
        }
    }
    _getWrappedLines() {
        const e = [], t = this.editor._getViewModel();
        if (t) for(let n = 0; n < this._lines.length; n++){
            const i = this._lines[n], r = this._lineTokens[n], s = r ? new uA(new Uint32Array(Object.values(r.tokens)), r.text, this._languageService.languageIdCodec) : void 0, o = t.createLineBreaksComputer();
            o.addRequest(i, null, null);
            const a = o.finalize();
            let c = this._getInnerChangeDecorations(n, i);
            if (a.length === 0 || !a[0]) e.push({
                text: i,
                tokens: s,
                innerChanges: c
            });
            else for (const l of a){
                if (!l || !l.breakOffsets) continue;
                let u = 0;
                for(let h = 0; h < l.breakOffsets.length; h++){
                    const p = h < l.breakOffsets.length ? l.breakOffsets[h] : i.length;
                    let g = i.slice(u, p), f = 0;
                    u !== 0 && (g = " ".repeat(l.wrappedTextIndentLength) + g, f = l.wrappedTextIndentLength);
                    const v = c.filter((y)=>y.startColumn > u && (y.startColumn <= p || h === l.breakOffsets.length - 1)).map((y)=>new gW(Math.max(1, y.startColumn - u + f), Math.min(g.length + 1, y.endColumn - u + f), y.className, y.type));
                    let b;
                    if (s) {
                        const y = s.sliceAndInflate(u, p, 0), T = y.getCount(), E = [];
                        f > 0 && E.push({
                            text: " ".repeat(f),
                            metadata: y.getMetadata(0)
                        });
                        for(let A = 0; A < T; A++)E.push({
                            text: y.getTokenText(A),
                            metadata: y.getMetadata(A)
                        });
                        b = uA.createFromTextAndMetadata(E, this._languageService.languageIdCodec);
                    }
                    e.push({
                        text: g,
                        tokens: b,
                        innerChanges: v
                    }), u = p;
                }
            }
        }
        return e;
    }
    _getInnerChangeDecorations(e, t) {
        if (!this._innerChanges) return [];
        const n = [];
        for (const i of this._innerChanges)i.originalRange.startLineNumber === e + 1 ? n.push(new gW(i.originalRange.startColumn, i.originalRange.endLineNumber === e + 1 ? i.originalRange.endColumn : t.length + 1, "inline-diff-inner-change-removed", 0)) : i.originalRange.startLineNumber < e + 1 && i.originalRange.endLineNumber >= e + 1 && n.push(new gW(1, i.originalRange.endLineNumber === e + 1 ? i.originalRange.endColumn : t.length + 1, "inline-diff-inner-change-removed", 0));
        return n;
    }
    _getLeftMargin() {
        return Math.max(this.editor.getLayoutInfo().contentLeft - 1, 0);
    }
    getHeightInLines() {
        return this._heightInLines;
    }
    _getMaximumHeightInLines() {}
    _renderContent() {
        const e = document.createElement("div"), { tabSize: t } = this.editor.getModel().getOptions(), n = this._getWrappedLines();
        Gcv(e, t, n.map((r)=>({
                content: r.text,
                decorations: r.innerChanges || [],
                lineTokens: r.tokens ? r.tokens : uA.createEmpty(r.text, this._languageService.languageIdCodec)
            })), this.editor.getOptions(), !0, this._elementClassName), e.className = this._elementClassName;
        const i = this._getLeftMargin();
        return e.style.marginLeft = `${i}px`, {
            content: e,
            heightInLines: n.length
        };
    }
    _updateHorizontalScroll(e) {
        !this._container || !this._overlay || (this._container.style.marginLeft = `${-e}px`, this._overlay.style.marginLeft = `${e}px`);
    }
    showWidget() {
        this.hide(), this.show(this._position, this._heightInLines);
    }
    dispose() {
        super.dispose(), this._scrollListener.dispose(), this._widthListener.dispose(), this._editorConfigurationListener.dispose(), this._themeListener.dispose();
    }
}, dnr = ie([
    C(6, pc),
    C(7, $r),
    C(8, qt)
], dnr);

}
