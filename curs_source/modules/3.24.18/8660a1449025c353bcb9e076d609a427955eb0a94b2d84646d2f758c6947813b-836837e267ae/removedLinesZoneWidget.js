import { Qe, Vn } from "./Iwo.js";
import { or, yi } from "./configuration.js";
import { ZOe, pMo, pa } from "./constants_8.js";
import { Hn, Pr } from "./dom_2.js";
import { jWr } from "./ghostTextView.js";
import { Px1 } from "./ipa.js";
import { Kp, Ph } from "./language.js";
import { RQ, byt } from "./lineDecorations.js";
import { PD, SY } from "./lineTokens.js";
import { VIk } from "./removedLineZoneWidget.css";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { li, rl } from "./ze.js";
import { Dzo, pKd } from "./zoneWidget.js";
var Xcs;
export { Xcs };
var __wakaru_KIk_initialized = false;
export function KIk() {
if (__wakaru_KIk_initialized) return;
__wakaru_KIk_initialized = true;
"use strict";
E(), pa(), Qe(), or(), Kp(), SY(), byt(), jWr(), pKd(), Hn(), Hn(), Dl(), VIk(), Xcs = class extends Dzo {
    constructor(t, e, n, i, r, s, o, a, l){
        super(e, {
            showFrame: !1,
            showArrow: !1,
            ordinal: 2,
            keepEditorSelection: !0,
            moveToLineWhenShown: !1
        }), this._languageService = o, this._themeService = a, this.configurationService = l, this._clickListener = this._disposables.add(new Vn), this._container = null, this._content = null, this._overlay = null, this._renderScheduled = !1, this.id = t, this._lines = n, this._lineTokens = i, this._position = s, this._elementClassName = "inline-diff-removed", this._heightInLines = 1, this.options.ordinal = pMo + 1, this._innerChanges = void 0, this.create(), this._scrollListener = this.editor.onDidScrollChange((u)=>{
            u.scrollLeftChanged && this._updateHorizontalScroll(u.scrollLeft);
        });
        let c = this.editor.getLayoutInfo();
        this._widthListener = this.editor.onDidLayoutChange((u)=>{
            (u.wrappingColumn !== c.wrappingColumn || u.contentLeft !== c.contentLeft) && (this._updateLineRendering(), c = u);
        }), this._editorConfigurationListener = this.editor.onDidChangeConfiguration((u)=>{
            (u.hasChanged(137) || u.hasChanged(141) || u.hasChanged(142)) && this._updateLineRendering();
        }), this._themeListener = this._themeService.onDidColorThemeChange((u)=>{
            this._setOverlayBackground(u);
        }), this._container !== null && (this._container.style.marginLeft = "1px", this._container.parentElement && this._container.parentElement.classList.add("removed-lines-zone-widget")), this._updateHorizontalScroll(this.editor.getScrollLeft()), this._updateLineRendering();
    }
    _updateLineRendering() {
        !this._container || this._renderScheduled || (this._renderScheduled = !0, rl().requestAnimationFrame(()=>{
            try {
                const t = this._renderContent();
                this.updateBackgroundColor(), this._content && this._container && this._content.parentNode && this._container.replaceChild(t.content, this._content), this._content = t.content;
                const e = this._heightInLines;
                this._heightInLines = t.heightInLines, this._overlay && (this._overlay.style.width = `${this.editor.getLayoutInfo().contentLeft}px`), e !== this._heightInLines && (this.hide(), this.showWidget());
            } catch (t) {
                console.error("Error during rendering:", t);
            } finally{
                this._renderScheduled = !1;
            }
        }));
    }
    updatePosition(t) {
        if (this._viewZone) {
            if (this._position.lineNumber === t.lineNumber && this._position.column === t.column) return;
            this._position = t, this.updatePositionAndHeight(t, this._heightInLines);
            return;
        }
        this._position = t, this.showWidget();
    }
    updateBackgroundColor() {
        if (!!this._container?.closest(".agent-layout")) {
            const r = "rgba(191, 97, 106, 0.1)";
            this._container && (this._container.style.backgroundColor = r);
            return;
        }
        const e = this.configurationService.getValue(ZOe), n = this._innerChanges && this._innerChanges.length > 0 ? "hsl(348deg 90% 50% / 15%)" : "hsl(348deg 90% 50% / 25%)", i = e ? `var(--vscode-diffEditor-removedLineBackground, ${n})` : n;
        this._container && (this._container.style.backgroundColor = i);
    }
    _fillContainer(t) {
        this._container = t, this._container.style.position = "relative", this._container.style.width = "1000000px", this._clickListener.value = li(this._container, Pr.CLICK, ()=>{
            const i = rl().getSelection();
            if (i && i.toString().trim().length > 0) return;
            const r = this._position.lineNumber + 1;
            this.editor.setPosition({
                lineNumber: r,
                column: 1
            }), this.editor.revealLineInCenter(r), this.editor.focus();
        }), this.updateBackgroundColor(), this._disposables.add(this.configurationService.onDidChangeConfiguration((i)=>{
            i.affectsConfiguration(ZOe) && this.updateBackgroundColor();
        }));
        const e = this._renderContent();
        this._content = e.content, this._heightInLines = e.heightInLines;
        const n = this._getLeftMargin();
        this._overlay = document.createElement("div"), this._overlay.style.width = `${n + 1}px`, this._overlay.style.height = "100%", this._overlay.style.position = "absolute", this._overlay.style.zIndex = "3", this._setOverlayBackground(this._themeService.getColorTheme()), t.appendChild(this._overlay), t.appendChild(this._content), this._updateHorizontalScroll(this.editor.getScrollLeft());
    }
    _setOverlayBackground(t) {
        if (this._overlay) {
            let e = "white";
            const n = t.getColor("editor.background");
            n && (e = n.toString()), this._overlay.style.backgroundColor = e;
        }
    }
    _getWrappedLines() {
        const t = [], e = this.editor._getViewModel();
        if (e) for(let n = 0; n < this._lines.length; n++){
            const i = this._lines[n], r = this._lineTokens[n], s = r ? new PD(new Uint32Array(Object.values(r.tokens)), r.text, this._languageService.languageIdCodec) : void 0, o = e.createLineBreaksComputer();
            o.addRequest(i, null, null);
            const a = o.finalize();
            let l = this._getInnerChangeDecorations(n, i);
            if (a.length === 0 || !a[0]) t.push({
                text: i,
                tokens: s,
                innerChanges: l
            });
            else for (const c of a){
                if (!c || !c.breakOffsets) continue;
                let u = 0;
                for(let d = 0; d < c.breakOffsets.length; d++){
                    const h = d < c.breakOffsets.length ? c.breakOffsets[d] : i.length;
                    let p = i.slice(u, h), g = 0;
                    u !== 0 && (p = " ".repeat(c.wrappedTextIndentLength) + p, g = c.wrappedTextIndentLength);
                    const f = l.filter((b)=>b.startColumn > u && (b.startColumn <= h || d === c.breakOffsets.length - 1)).map((b)=>new RQ(Math.max(1, b.startColumn - u + g), Math.min(p.length + 1, b.endColumn - u + g), b.className, b.type));
                    let _;
                    if (s) {
                        const b = s.sliceAndInflate(u, h, 0), y = b.getCount(), S = [];
                        g > 0 && S.push({
                            text: " ".repeat(g),
                            metadata: b.getMetadata(0)
                        });
                        for(let k = 0; k < y; k++)S.push({
                            text: b.getTokenText(k),
                            metadata: b.getMetadata(k)
                        });
                        _ = PD.createFromTextAndMetadata(S, this._languageService.languageIdCodec);
                    }
                    t.push({
                        text: p,
                        tokens: _,
                        innerChanges: f
                    }), u = h;
                }
            }
        }
        return t;
    }
    _getInnerChangeDecorations(t, e) {
        if (!this._innerChanges) return [];
        const n = [];
        for (const i of this._innerChanges)i.originalRange.startLineNumber === t + 1 ? n.push(new RQ(i.originalRange.startColumn, i.originalRange.endLineNumber === t + 1 ? i.originalRange.endColumn : e.length + 1, "inline-diff-inner-change-removed", 0)) : i.originalRange.startLineNumber < t + 1 && i.originalRange.endLineNumber >= t + 1 && n.push(new RQ(1, i.originalRange.endLineNumber === t + 1 ? i.originalRange.endColumn : e.length + 1, "inline-diff-inner-change-removed", 0));
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
        const t = document.createElement("div"), { tabSize: e } = this.editor.getModel().getOptions(), n = this._getWrappedLines();
        Px1(t, e, n.map((r)=>({
                content: r.text,
                decorations: r.innerChanges || [],
                lineTokens: r.tokens ? r.tokens : PD.createEmpty(r.text, this._languageService.languageIdCodec)
            })), this.editor.getOptions(), !0, this._elementClassName), t.className = this._elementClassName;
        const i = this._getLeftMargin();
        return t.style.marginLeft = `${i}px`, {
            content: t,
            heightInLines: n.length
        };
    }
    _updateHorizontalScroll(t) {
        !this._container || !this._overlay || (this._container.style.marginLeft = `${-t}px`, this._overlay.style.marginLeft = `${t}px`);
    }
    showWidget() {
        this.hide(), this.show(this._position, this._heightInLines);
    }
    dispose() {
        super.dispose(), this._scrollListener.dispose(), this._widthListener.dispose(), this._editorConfigurationListener.dispose(), this._themeListener.dispose();
    }
}, Xcs = Re([
    F(6, Ph),
    F(7, Ml),
    F(8, yi)
], Xcs);

}
