import { Op, ym } from "./accessibility.js";
import { C, ie } from "./actions_2.js";
import { S7c, i6 } from "./diffEditor.js";
import { ryi } from "./diffEditorViewZones.js";
import { m1 } from "./editorOptions.js";
import { qa } from "./observable.js";
import { Ds, Xo, _Sg, chg, k7c } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { eN } from "./uint.js";
import { qp } from "./utils_10.js";
var Bvn;
export { Bvn };
var __wakaru_w7c_initialized = false;
export function w7c() {
if (__wakaru_w7c_initialized) return;
__wakaru_w7c_initialized = true;
"use strict";
x(), qa(), eN(), Op(), S7c(), m1(), ryi(), Bvn = class {
    constructor(e, t){
        this._accessibilityService = t, this._diffEditorWidth = Xo(this, 0), this._screenReaderMode = qp(this, this._accessibilityService.onDidChangeScreenReaderOptimized, ()=>this._accessibilityService.isScreenReaderOptimized()), this.couldShowInlineViewBecauseOfSize = Ds(this, (i)=>this._options.read(i).renderSideBySide && this._diffEditorWidth.read(i) <= this._options.read(i).renderSideBySideInlineBreakpoint), this.renderOverviewRuler = Ds(this, (i)=>this._options.read(i).renderOverviewRuler), this.renderSideBySide = Ds(this, (i)=>this.compactMode.read(i) && this.shouldRenderInlineViewInSmartMode.read(i) ? !1 : this._options.read(i).renderSideBySide && !(this._options.read(i).useInlineViewWhenSpaceIsLimited && this.couldShowInlineViewBecauseOfSize.read(i) && !this._screenReaderMode.read(i))), this.readOnly = Ds(this, (i)=>this._options.read(i).readOnly), this.shouldRenderOldRevertArrows = Ds(this, (i)=>!(!this._options.read(i).renderMarginRevertIcon || !this.renderSideBySide.read(i) || this.readOnly.read(i) || this.shouldRenderGutterMenu.read(i))), this.shouldRenderGutterMenu = Ds(this, (i)=>this._options.read(i).renderGutterMenu), this.renderIndicators = Ds(this, (i)=>this._options.read(i).renderIndicators), this.enableSplitViewResizing = Ds(this, (i)=>this._options.read(i).enableSplitViewResizing), this.splitViewDefaultRatio = Ds(this, (i)=>this._options.read(i).splitViewDefaultRatio), this.ignoreTrimWhitespace = Ds(this, (i)=>this._options.read(i).ignoreTrimWhitespace), this.maxComputationTimeMs = Ds(this, (i)=>this._options.read(i).maxComputationTime), this.showMoves = Ds(this, (i)=>this._options.read(i).experimental.showMoves && this.renderSideBySide.read(i)), this.isInEmbeddedEditor = Ds(this, (i)=>this._options.read(i).isInEmbeddedEditor), this.diffWordWrap = Ds(this, (i)=>this._options.read(i).diffWordWrap), this.originalEditable = Ds(this, (i)=>this._options.read(i).originalEditable), this.diffCodeLens = Ds(this, (i)=>this._options.read(i).diffCodeLens), this.accessibilityVerbose = Ds(this, (i)=>this._options.read(i).accessibilityVerbose), this.diffAlgorithm = Ds(this, (i)=>this._options.read(i).diffAlgorithm), this.showEmptyDecorations = Ds(this, (i)=>this._options.read(i).experimental.showEmptyDecorations), this.onlyShowAccessibleDiffViewer = Ds(this, (i)=>this._options.read(i).onlyShowAccessibleDiffViewer), this.compactMode = Ds(this, (i)=>this._options.read(i).compactMode), this.trueInlineDiffRenderingEnabled = Ds(this, (i)=>this._options.read(i).experimental.useTrueInlineView), this.useTrueInlineDiffRendering = Ds(this, (i)=>!this.renderSideBySide.read(i) && this.trueInlineDiffRenderingEnabled.read(i)), this.hideUnchangedRegions = Ds(this, (i)=>this._options.read(i).hideUnchangedRegions.enabled), this.hideUnchangedRegionsRevealLineCount = Ds(this, (i)=>this._options.read(i).hideUnchangedRegions.revealLineCount), this.hideUnchangedRegionsContextLineCount = Ds(this, (i)=>this._options.read(i).hideUnchangedRegions.contextLineCount), this.hideUnchangedRegionsMinimumLineCount = Ds(this, (i)=>this._options.read(i).hideUnchangedRegions.minimumLineCount), this._model = Xo(this, void 0), this.shouldRenderInlineViewInSmartMode = this._model.map(this, (i)=>chg(this, (r)=>{
                const s = i?.diff.read(r);
                return s ? _Sg(s, this.trueInlineDiffRenderingEnabled.read(r)) : void 0;
            })).flatten().map(this, (i)=>!!i), this.inlineViewHideOriginalLineNumbers = this.compactMode;
        const n = {
            ...e,
            ...k7c(e, i6)
        };
        this._options = Xo(this, n);
    }
    get editorOptions() {
        return this._options;
    }
    updateOptions(e) {
        const t = k7c(e, this._options.get()), n = {
            ...this._options.get(),
            ...e,
            ...t
        };
        this._options.set(n, void 0, {
            changedOptions: e
        });
    }
    setWidth(e) {
        this._diffEditorWidth.set(e, void 0);
    }
    setModel(e) {
        this._model.set(e, void 0);
    }
}, Bvn = ie([
    C(1, ym)
], Bvn);

}
