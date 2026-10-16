import { $m } from "./Iwo.js";
import { Yxe, bo } from "./arrays.js";
import { Qtt, kyt } from "./dynamicViewOverlay.js";
import { ABd, CBd, Cjo, EBd, IBd, PBd, RBd, SBd, Sjo, TBd, Tjo, aBd, cBd, doe, gjo, iBd, kBd, kjo, lBd, mjo, nBd, oBd, rBd, sBd, tBd, uBd, wBd, wjo, xBd, yBd, yjo } from "./editorColorRegistry.js";
import { Vjo, h8d } from "./guidesTextModelPart.js";
import { $My } from "./indentGuides.css";
import { er, jc } from "./position.js";
import { J9t, ryt, zjo } from "./textModelGuides.js";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { Mfn, nne } from "./ze.js";
var Jjd;
export { Jjd };
var __wakaru_HMy_initialized = false;
export function HMy() {
if (__wakaru_HMy_initialized) return;
__wakaru_HMy_initialized = true;
"use strict";
E(), $My(), kyt(), doe(), Dl(), jc(), bo(), To(), h8d(), zjo(), Jjd = class extends Qtt {
    constructor(t){
        super(), this._context = t, this._primaryPosition = null;
        const e = this._context.configuration.options, n = e.get(152), i = e.get(52);
        this._spaceWidth = i.spaceWidth, this._maxIndentLeft = n.wrappingColumn === -1 ? -1 : n.wrappingColumn * i.typicalHalfwidthCharacterWidth, this._bracketPairGuideOptions = e.get(16), this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(t) {
        const e = this._context.configuration.options, n = e.get(152), i = e.get(52);
        return this._spaceWidth = i.spaceWidth, this._maxIndentLeft = n.wrappingColumn === -1 ? -1 : n.wrappingColumn * i.typicalHalfwidthCharacterWidth, this._bracketPairGuideOptions = e.get(16), !0;
    }
    onCursorStateChanged(t) {
        const n = t.selections[0].getPosition();
        return this._primaryPosition?.equals(n) ? !1 : (this._primaryPosition = n, !0);
    }
    onDecorationsChanged(t) {
        return !0;
    }
    onFlushed(t) {
        return !0;
    }
    onLinesChanged(t) {
        return !0;
    }
    onLinesDeleted(t) {
        return !0;
    }
    onLinesInserted(t) {
        return !0;
    }
    onScrollChanged(t) {
        return t.scrollTopChanged;
    }
    onZonesChanged(t) {
        return !0;
    }
    onLanguageConfigurationChanged(t) {
        return !0;
    }
    prepareRender(t) {
        if (!this._bracketPairGuideOptions.indentation && this._bracketPairGuideOptions.bracketPairs === !1) {
            this._renderResult = null;
            return;
        }
        const e = t.visibleRange.startLineNumber, n = t.visibleRange.endLineNumber, i = t.scrollWidth, r = this._primaryPosition, s = this.getGuidesByLine(e, Math.min(n + 1, this._context.viewModel.getLineCount()), r), o = [];
        for(let a = e; a <= n; a++){
            const l = a - e, c = s[l];
            let u = "";
            const d = t.visibleRangeForPosition(new er(a, 1))?.left ?? 0;
            for (const h of c){
                const p = h.column === -1 ? d + (h.visibleColumn - 1) * this._spaceWidth : t.visibleRangeForPosition(new er(a, h.column)).left;
                if (p > i || this._maxIndentLeft > 0 && p > this._maxIndentLeft) break;
                const g = h.horizontalLine ? h.horizontalLine.top ? "horizontal-top" : "horizontal-bottom" : "vertical", f = h.horizontalLine ? (t.visibleRangeForPosition(new er(a, h.horizontalLine.endColumn))?.left ?? p + this._spaceWidth) - p : this._spaceWidth;
                u += `<div class="core-guide ${h.className} ${g}" style="left:${p}px;width:${f}px"></div>`;
            }
            o[l] = u;
        }
        this._renderResult = o;
    }
    getGuidesByLine(t, e, n) {
        const i = this._bracketPairGuideOptions.bracketPairs !== !1 ? this._context.viewModel.getBracketGuidesInRangeByLine(t, e, n, {
            highlightActive: this._bracketPairGuideOptions.highlightActiveBracketPair,
            horizontalGuides: this._bracketPairGuideOptions.bracketPairsHorizontal === !0 ? J9t.Enabled : this._bracketPairGuideOptions.bracketPairsHorizontal === "active" ? J9t.EnabledForActive : J9t.Disabled,
            includeInactive: this._bracketPairGuideOptions.bracketPairs === !0
        }) : null, r = this._bracketPairGuideOptions.indentation ? this._context.viewModel.getLinesIndentGuides(t, e) : null;
        let s = 0, o = 0, a = 0;
        if (this._bracketPairGuideOptions.highlightActiveIndentation !== !1 && n) {
            const u = this._context.viewModel.getActiveIndentGuide(n.lineNumber, t, e);
            s = u.startLineNumber, o = u.endLineNumber, a = u.indent;
        }
        const { indentSize: l } = this._context.viewModel.model.getOptions(), c = [];
        for(let u = t; u <= e; u++){
            const d = new Array;
            c.push(d);
            const h = i ? i[u - t] : [], p = new Yxe(h), g = r ? r[u - t] : 0;
            for(let f = 1; f <= g; f++){
                const _ = (f - 1) * l + 1, b = (this._bracketPairGuideOptions.highlightActiveIndentation === "always" || h.length === 0) && s <= u && u <= o && f === a;
                d.push(...p.takeWhile((S)=>S.visibleColumn < _) || []);
                const y = p.peek();
                (!y || y.visibleColumn !== _ || y.horizontalLine) && d.push(new ryt(_, -1, `core-guide-indent lvl-${(f - 1) % 30}` + (b ? " indent-active" : ""), null, -1, -1));
            }
            d.push(...p.takeWhile((f)=>!0) || []);
        }
        return c;
    }
    render(t, e) {
        if (!this._renderResult) return "";
        const n = e - t;
        return n < 0 || n >= this._renderResult.length ? "" : this._renderResult[n];
    }
}, nne((t, e)=>{
    const n = [
        {
            bracketColor: yjo,
            guideColor: yBd,
            guideColorActive: EBd
        },
        {
            bracketColor: Sjo,
            guideColor: SBd,
            guideColorActive: IBd
        },
        {
            bracketColor: kjo,
            guideColor: kBd,
            guideColorActive: xBd
        },
        {
            bracketColor: wjo,
            guideColor: wBd,
            guideColorActive: ABd
        },
        {
            bracketColor: Cjo,
            guideColor: CBd,
            guideColorActive: RBd
        },
        {
            bracketColor: Tjo,
            guideColor: TBd,
            guideColorActive: PBd
        }
    ], i = new Vjo, r = [
        {
            indentColor: mjo,
            indentColorActive: gjo
        },
        {
            indentColor: tBd,
            indentColorActive: oBd
        },
        {
            indentColor: nBd,
            indentColorActive: aBd
        },
        {
            indentColor: iBd,
            indentColorActive: lBd
        },
        {
            indentColor: rBd,
            indentColorActive: cBd
        },
        {
            indentColor: sBd,
            indentColorActive: uBd
        }
    ], s = n.map((a)=>{
        const l = t.getColor(a.bracketColor), c = t.getColor(a.guideColor), u = t.getColor(a.guideColorActive), d = Mfn(Mfn(c) ?? l?.transparent(.3)), h = Mfn(Mfn(u) ?? l);
        if (!(!d || !h)) return {
            guideColor: d,
            guideColorActive: h
        };
    }).filter($m), o = r.map((a)=>{
        const l = t.getColor(a.indentColor), c = t.getColor(a.indentColorActive), u = Mfn(l), d = Mfn(c);
        if (!(!u || !d)) return {
            indentColor: u,
            indentColorActive: d
        };
    }).filter($m);
    if (s.length > 0) {
        for(let a = 0; a < 30; a++){
            const l = s[a % s.length];
            e.addRule(`.monaco-editor .${i.getInlineClassNameOfLevel(a).replace(/ /g, ".")} { --guide-color: ${l.guideColor}; --guide-color-active: ${l.guideColorActive}; }`);
        }
        e.addRule(".monaco-editor .vertical { box-shadow: 1px 0 0 0 var(--guide-color) inset; }"), e.addRule(".monaco-editor .horizontal-top { border-top: 1px solid var(--guide-color); }"), e.addRule(".monaco-editor .horizontal-bottom { border-bottom: 1px solid var(--guide-color); }"), e.addRule(`.monaco-editor .vertical.${i.activeClassName} { box-shadow: 1px 0 0 0 var(--guide-color-active) inset; }`), e.addRule(`.monaco-editor .horizontal-top.${i.activeClassName} { border-top: 1px solid var(--guide-color-active); }`), e.addRule(`.monaco-editor .horizontal-bottom.${i.activeClassName} { border-bottom: 1px solid var(--guide-color-active); }`);
    }
    if (o.length > 0) {
        for(let a = 0; a < 30; a++){
            const l = o[a % o.length];
            e.addRule(`.monaco-editor .lines-content .core-guide-indent.lvl-${a} { --indent-color: ${l.indentColor}; --indent-color-active: ${l.indentColorActive}; }`);
        }
        e.addRule(".monaco-editor .lines-content .core-guide-indent { box-shadow: 1px 0 0 0 var(--indent-color) inset; }"), e.addRule(".monaco-editor .lines-content .core-guide-indent.indent-active { box-shadow: 1px 0 0 0 var(--indent-color-active) inset; }");
    }
});

}
