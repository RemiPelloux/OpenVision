import { Tl } from "./HVr.js";
import { dr, hge } from "./arrays.js";
import { jze, n5e } from "./dynamicViewOverlay.js";
import { AOc, DOc, EOc, HV, IOc, JOc, KOc, LOc, MOc, NOc, POc, QOc, ROc, XOc, YOc, ZOc, cQr, dQr, eFc, hQr, jOc, lQr, nFc, pQr, qOc, rQr, sQr, tFc, uQr, xOc, zOc } from "./editorColorRegistry.js";
import { FFc, OQr } from "./guidesTextModelPart.js";
import { Kvg } from "./indentGuides.css";
import { Yn, ya } from "./position.js";
import { eFt, kI } from "./qIc.js";
import { NQr, kpt, xze } from "./textModelGuides.js";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var U9c;
export { U9c };
var __wakaru_Yvg_initialized = false;
export function Yvg() {
if (__wakaru_Yvg_initialized) return;
__wakaru_Yvg_initialized = true;
"use strict";
x(), Kvg(), jze(), HV(), as(), ya(), dr(), gr(), FFc(), NQr(), U9c = class extends n5e {
    constructor(e){
        super(), this._context = e, this._primaryPosition = null;
        const t = this._context.configuration.options, n = t.get(152), i = t.get(52);
        this._spaceWidth = i.spaceWidth, this._maxIndentLeft = n.wrappingColumn === -1 ? -1 : n.wrappingColumn * i.typicalHalfwidthCharacterWidth, this._bracketPairGuideOptions = t.get(16), this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(e) {
        const t = this._context.configuration.options, n = t.get(152), i = t.get(52);
        return this._spaceWidth = i.spaceWidth, this._maxIndentLeft = n.wrappingColumn === -1 ? -1 : n.wrappingColumn * i.typicalHalfwidthCharacterWidth, this._bracketPairGuideOptions = t.get(16), !0;
    }
    onCursorStateChanged(e) {
        const n = e.selections[0].getPosition();
        return this._primaryPosition?.equals(n) ? !1 : (this._primaryPosition = n, !0);
    }
    onDecorationsChanged(e) {
        return !0;
    }
    onFlushed(e) {
        return !0;
    }
    onLinesChanged(e) {
        return !0;
    }
    onLinesDeleted(e) {
        return !0;
    }
    onLinesInserted(e) {
        return !0;
    }
    onScrollChanged(e) {
        return e.scrollTopChanged;
    }
    onZonesChanged(e) {
        return !0;
    }
    onLanguageConfigurationChanged(e) {
        return !0;
    }
    prepareRender(e) {
        if (!this._bracketPairGuideOptions.indentation && this._bracketPairGuideOptions.bracketPairs === !1) {
            this._renderResult = null;
            return;
        }
        const t = e.visibleRange.startLineNumber, n = e.visibleRange.endLineNumber, i = e.scrollWidth, r = this._primaryPosition, s = this.getGuidesByLine(t, Math.min(n + 1, this._context.viewModel.getLineCount()), r), o = [];
        for(let a = t; a <= n; a++){
            const c = a - t, l = s[c];
            let u = "";
            const h = e.visibleRangeForPosition(new Yn(a, 1))?.left ?? 0;
            for (const p of l){
                const g = p.column === -1 ? h + (p.visibleColumn - 1) * this._spaceWidth : e.visibleRangeForPosition(new Yn(a, p.column)).left;
                if (g > i || this._maxIndentLeft > 0 && g > this._maxIndentLeft) break;
                const f = p.horizontalLine ? p.horizontalLine.top ? "horizontal-top" : "horizontal-bottom" : "vertical", v = p.horizontalLine ? (e.visibleRangeForPosition(new Yn(a, p.horizontalLine.endColumn))?.left ?? g + this._spaceWidth) - g : this._spaceWidth;
                u += `<div class="core-guide ${p.className} ${f}" style="left:${g}px;width:${v}px"></div>`;
            }
            o[c] = u;
        }
        this._renderResult = o;
    }
    getGuidesByLine(e, t, n) {
        const i = this._bracketPairGuideOptions.bracketPairs !== !1 ? this._context.viewModel.getBracketGuidesInRangeByLine(e, t, n, {
            highlightActive: this._bracketPairGuideOptions.highlightActiveBracketPair,
            horizontalGuides: this._bracketPairGuideOptions.bracketPairsHorizontal === !0 ? kpt.Enabled : this._bracketPairGuideOptions.bracketPairsHorizontal === "active" ? kpt.EnabledForActive : kpt.Disabled,
            includeInactive: this._bracketPairGuideOptions.bracketPairs === !0
        }) : null, r = this._bracketPairGuideOptions.indentation ? this._context.viewModel.getLinesIndentGuides(e, t) : null;
        let s = 0, o = 0, a = 0;
        if (this._bracketPairGuideOptions.highlightActiveIndentation !== !1 && n) {
            const u = this._context.viewModel.getActiveIndentGuide(n.lineNumber, e, t);
            s = u.startLineNumber, o = u.endLineNumber, a = u.indent;
        }
        const { indentSize: c } = this._context.viewModel.model.getOptions(), l = [];
        for(let u = e; u <= t; u++){
            const h = new Array;
            l.push(h);
            const p = i ? i[u - e] : [], g = new hge(p), f = r ? r[u - e] : 0;
            for(let v = 1; v <= f; v++){
                const b = (v - 1) * c + 1, y = (this._bracketPairGuideOptions.highlightActiveIndentation === "always" || p.length === 0) && s <= u && u <= o && v === a;
                h.push(...g.takeWhile((E)=>E.visibleColumn < b) || []);
                const T = g.peek();
                (!T || T.visibleColumn !== b || T.horizontalLine) && h.push(new xze(b, -1, `core-guide-indent lvl-${(v - 1) % 30}` + (y ? " indent-active" : ""), null, -1, -1));
            }
            h.push(...g.takeWhile((v)=>!0) || []);
        }
        return l;
    }
    render(e, t) {
        if (!this._renderResult) return "";
        const n = t - e;
        return n < 0 || n >= this._renderResult.length ? "" : this._renderResult[n];
    }
}, kI((e, t)=>{
    const n = [
        {
            bracketColor: cQr,
            guideColor: jOc,
            guideColorActive: ZOc
        },
        {
            bracketColor: lQr,
            guideColor: qOc,
            guideColorActive: QOc
        },
        {
            bracketColor: uQr,
            guideColor: zOc,
            guideColorActive: JOc
        },
        {
            bracketColor: dQr,
            guideColor: KOc,
            guideColorActive: eFc
        },
        {
            bracketColor: hQr,
            guideColor: YOc,
            guideColorActive: tFc
        },
        {
            bracketColor: pQr,
            guideColor: XOc,
            guideColorActive: nFc
        }
    ], i = new OQr, r = [
        {
            indentColor: rQr,
            indentColorActive: sQr
        },
        {
            indentColor: EOc,
            indentColorActive: DOc
        },
        {
            indentColor: xOc,
            indentColorActive: MOc
        },
        {
            indentColor: IOc,
            indentColorActive: POc
        },
        {
            indentColor: AOc,
            indentColorActive: LOc
        },
        {
            indentColor: ROc,
            indentColorActive: NOc
        }
    ], s = n.map((a)=>{
        const c = e.getColor(a.bracketColor), l = e.getColor(a.guideColor), u = e.getColor(a.guideColorActive), h = eFt(eFt(l) ?? c?.transparent(.3)), p = eFt(eFt(u) ?? c);
        if (!(!h || !p)) return {
            guideColor: h,
            guideColorActive: p
        };
    }).filter(Tl), o = r.map((a)=>{
        const c = e.getColor(a.indentColor), l = e.getColor(a.indentColorActive), u = eFt(c), h = eFt(l);
        if (!(!u || !h)) return {
            indentColor: u,
            indentColorActive: h
        };
    }).filter(Tl);
    if (s.length > 0) {
        for(let a = 0; a < 30; a++){
            const c = s[a % s.length];
            t.addRule(`.monaco-editor .${i.getInlineClassNameOfLevel(a).replace(/ /g, ".")} { --guide-color: ${c.guideColor}; --guide-color-active: ${c.guideColorActive}; }`);
        }
        t.addRule(".monaco-editor .vertical { box-shadow: 1px 0 0 0 var(--guide-color) inset; }"), t.addRule(".monaco-editor .horizontal-top { border-top: 1px solid var(--guide-color); }"), t.addRule(".monaco-editor .horizontal-bottom { border-bottom: 1px solid var(--guide-color); }"), t.addRule(`.monaco-editor .vertical.${i.activeClassName} { box-shadow: 1px 0 0 0 var(--guide-color-active) inset; }`), t.addRule(`.monaco-editor .horizontal-top.${i.activeClassName} { border-top: 1px solid var(--guide-color-active); }`), t.addRule(`.monaco-editor .horizontal-bottom.${i.activeClassName} { border-bottom: 1px solid var(--guide-color-active); }`);
    }
    if (o.length > 0) {
        for(let a = 0; a < 30; a++){
            const c = o[a % o.length];
            t.addRule(`.monaco-editor .lines-content .core-guide-indent.lvl-${a} { --indent-color: ${c.indentColor}; --indent-color-active: ${c.indentColorActive}; }`);
        }
        t.addRule(".monaco-editor .lines-content .core-guide-indent { box-shadow: 1px 0 0 0 var(--indent-color) inset; }"), t.addRule(".monaco-editor .lines-content .core-guide-indent.indent-active { box-shadow: 1px 0 0 0 var(--indent-color-active) inset; }");
    }
});

}
