import { GS, Ty } from "./accessibility.js";
import { SW, Yqd } from "./diffEditor.js";
import { LTr } from "./diffEditorViewZones.js";
import { s2 } from "./editorOptions.js";
import { Jc } from "./observable.js";
import { E } from "./tslib.es6.js";
import { lz } from "./uint.js";
import { F, Re } from "./userDataProfile.js";
import { Yv } from "./utils_10.js";
import { Sxy, Xqd, Zo, bc, hLy } from "./ze.js";
var poi;
export { poi };
var __wakaru_Zqd_initialized = false;
export function Zqd() {
if (__wakaru_Zqd_initialized) return;
__wakaru_Zqd_initialized = true;
"use strict";
E(), Jc(), lz(), Ty(), Yqd(), s2(), LTr(), poi = class {
    constructor(t, e){
        this._accessibilityService = e, this._diffEditorWidth = bc(this, 0), this._screenReaderMode = Yv(this, this._accessibilityService.onDidChangeScreenReaderOptimized, ()=>this._accessibilityService.isScreenReaderOptimized()), this.couldShowInlineViewBecauseOfSize = Zo(this, (i)=>this._options.read(i).renderSideBySide && this._diffEditorWidth.read(i) <= this._options.read(i).renderSideBySideInlineBreakpoint), this.renderOverviewRuler = Zo(this, (i)=>this._options.read(i).renderOverviewRuler), this.renderSideBySide = Zo(this, (i)=>this.compactMode.read(i) && this.shouldRenderInlineViewInSmartMode.read(i) ? !1 : this._options.read(i).renderSideBySide && !(this._options.read(i).useInlineViewWhenSpaceIsLimited && this.couldShowInlineViewBecauseOfSize.read(i) && !this._screenReaderMode.read(i))), this.readOnly = Zo(this, (i)=>this._options.read(i).readOnly), this.shouldRenderOldRevertArrows = Zo(this, (i)=>!(!this._options.read(i).renderMarginRevertIcon || !this.renderSideBySide.read(i) || this.readOnly.read(i) || this.shouldRenderGutterMenu.read(i))), this.shouldRenderGutterMenu = Zo(this, (i)=>this._options.read(i).renderGutterMenu), this.renderIndicators = Zo(this, (i)=>this._options.read(i).renderIndicators), this.enableSplitViewResizing = Zo(this, (i)=>this._options.read(i).enableSplitViewResizing), this.splitViewDefaultRatio = Zo(this, (i)=>this._options.read(i).splitViewDefaultRatio), this.ignoreTrimWhitespace = Zo(this, (i)=>this._options.read(i).ignoreTrimWhitespace), this.maxComputationTimeMs = Zo(this, (i)=>this._options.read(i).maxComputationTime), this.showMoves = Zo(this, (i)=>this._options.read(i).experimental.showMoves && this.renderSideBySide.read(i)), this.isInEmbeddedEditor = Zo(this, (i)=>this._options.read(i).isInEmbeddedEditor), this.diffWordWrap = Zo(this, (i)=>this._options.read(i).diffWordWrap), this.originalEditable = Zo(this, (i)=>this._options.read(i).originalEditable), this.diffCodeLens = Zo(this, (i)=>this._options.read(i).diffCodeLens), this.accessibilityVerbose = Zo(this, (i)=>this._options.read(i).accessibilityVerbose), this.diffAlgorithm = Zo(this, (i)=>this._options.read(i).diffAlgorithm), this.showEmptyDecorations = Zo(this, (i)=>this._options.read(i).experimental.showEmptyDecorations), this.onlyShowAccessibleDiffViewer = Zo(this, (i)=>this._options.read(i).onlyShowAccessibleDiffViewer), this.compactMode = Zo(this, (i)=>this._options.read(i).compactMode), this.trueInlineDiffRenderingEnabled = Zo(this, (i)=>this._options.read(i).experimental.useTrueInlineView), this.useTrueInlineDiffRendering = Zo(this, (i)=>!this.renderSideBySide.read(i) && this.trueInlineDiffRenderingEnabled.read(i)), this.hideUnchangedRegions = Zo(this, (i)=>this._options.read(i).hideUnchangedRegions.enabled), this.hideUnchangedRegionsRevealLineCount = Zo(this, (i)=>this._options.read(i).hideUnchangedRegions.revealLineCount), this.hideUnchangedRegionsContextLineCount = Zo(this, (i)=>this._options.read(i).hideUnchangedRegions.contextLineCount), this.hideUnchangedRegionsMinimumLineCount = Zo(this, (i)=>this._options.read(i).hideUnchangedRegions.minimumLineCount), this._model = bc(this, void 0), this.shouldRenderInlineViewInSmartMode = this._model.map(this, (i)=>Sxy(this, (r)=>{
                const s = i?.diff.read(r);
                return s ? hLy(s, this.trueInlineDiffRenderingEnabled.read(r)) : void 0;
            })).flatten().map(this, (i)=>!!i), this.inlineViewHideOriginalLineNumbers = this.compactMode;
        const n = {
            ...t,
            ...Xqd(t, SW)
        };
        this._options = bc(this, n);
    }
    get editorOptions() {
        return this._options;
    }
    updateOptions(t) {
        const e = Xqd(t, this._options.get()), n = {
            ...this._options.get(),
            ...t,
            ...e
        };
        this._options.set(n, void 0, {
            changedOptions: t
        });
    }
    setWidth(t) {
        this._diffEditorWidth.set(t, void 0);
    }
    setModel(t) {
        this._model.set(t, void 0);
    }
}, poi = Re([
    F(1, GS)
], poi);

}
