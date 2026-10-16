import { Qe, Vn } from "./Iwo.js";
import { GS, Ty } from "./accessibility.js";
import { Ju, og } from "./codeEditorService.js";
import { boe, w4 } from "./codeEditorWidget.js";
import { nr, rs } from "./commands.js";
import { or, yi } from "./configuration.js";
import { Hi, Rr } from "./contextkey.js";
import { G0e, hWr } from "./contextmenu.js";
import { C4, bvn } from "./copyPasteController.js";
import { Hn } from "./dom_2.js";
import { Ud, pW } from "./editorExtensions.js";
import { It, dn } from "./instantiation.js";
import { RD, fA } from "./languageConfigurationRegistry.js";
import { Dg, Nd } from "./languageFeatures.js";
import { tlt, zxi } from "./menuPreventer.js";
import { Ks, Wr } from "./notification.js";
import { Dl, Ml } from "./themeService.js";
import { ehe, uwe } from "./tooltipService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { FCg, IEt } from "./viewportSemanticTokens.js";
import { Ii } from "./ze.js";
var KEg, Nle;
export { KEg, Nle };
var __wakaru_REt_initialized = false;
export function REt() {
if (__wakaru_REt_initialized) return;
__wakaru_REt_initialized = true;
"use strict";
E(), Ud(), og(), Hi(), It(), rs(), zxi(), hWr(), Dl(), Ks(), Ty(), RD(), Dg(), or(), uwe(), bvn(), boe(), FCg(), Hn(), Qe(), KEg = 10, Nle = class extends w4 {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p){
        const g = {
            isSimpleWidget: n.overwriteIsSimpleWidget ?? !0,
            isChatCodeblock: !0,
            cursorCodeBlockType: "chatCodeblock",
            contributions: pW.getSomeEditorContributions([
                tlt.ID,
                G0e.ID,
                C4.ID,
                ...n.enableSemanticSyntaxHighlighting ? [
                    IEt.ID
                ] : [],
                ...n.customContributions ?? []
            ])
        };
        super(t, e, g, i, r, s, o, a, l, c, u, d, h), this.configurationService = p, this.placeholderWidget = null, this.currentModel = null, this.currentModelListener = this._register(new Vn), n.placeholder && (this.createPlaceholderWidget(n.placeholder), this._register(this.onDidChangeModel(()=>{
            this.handleModelChange();
        })), this.updatePlaceholderVisibility());
    }
    _getActions() {
        return pW.getEditorActions();
    }
    createPlaceholderWidget(t) {
        if (!t) return;
        const e = Ii(".simple-editor-placeholder");
        e.textContent = t, e.className = "simple-editor-placeholder", e.style.position = "absolute", e.style.pointerEvents = "none", e.style.overflow = "hidden", e.style.textOverflow = "ellipsis", e.style.whiteSpace = "nowrap", e.style.top = "0", e.style.left = "0", e.style.color = "var(--vscode-input-placeholderForeground)", e.style.fontFamily = this.configurationService.getValue("editor.fontFamily"), e.style.fontSize = `${this.configurationService.getValue("editor.fontSize")}px`, e.style.opacity = "0.5", this.placeholderWidget = {
            getId: ()=>"simple.editor.placeholder",
            getDomNode: ()=>e,
            getPosition: ()=>({
                    position: {
                        lineNumber: 1,
                        column: 1
                    },
                    preference: [
                        0
                    ]
                })
        };
    }
    handleModelChange() {
        this.currentModelListener.clear(), this.currentModel = this.getModel(), this.currentModel && (this.currentModelListener.value = this.currentModel.onDidChangeContent(()=>{
            this.updatePlaceholderVisibility();
        }), this.updatePlaceholderVisibility());
    }
    updatePlaceholderVisibility() {
        if (!this.placeholderWidget) return;
        const t = this.getModel(), e = this.placeholderWidget.getDomNode().style;
        t && t.getValueLength() === 0 && e.display !== "block" ? (this.addContentWidget(this.placeholderWidget), this.placeholderWidget.getDomNode().style.display = "block") : t && t.getValueLength() > 0 && e.display === "block" && (this.removeContentWidget(this.placeholderWidget), this.placeholderWidget.getDomNode().style.display = "none");
    }
    dispose() {
        this.placeholderWidget && this.removeContentWidget(this.placeholderWidget), this.currentModelListener.clear(), super.dispose();
    }
    static getEditorOptions(t) {
        return {
            readOnly: !0,
            wordWrap: "off",
            wordWrapOverride1: "off",
            wordWrapOverride2: "off",
            glyphMargin: !1,
            lineDecorationsWidth: 0,
            lineNumbersMinChars: 0,
            lineNumbers: "off",
            folding: !1,
            fontFamily: t.getValue("editor.fontFamily"),
            fontLigatures: t.getValue("editor.fontLigatures"),
            fontSize: t.getValue("editor.fontSize"),
            lineHeight: t.getValue("editor.lineHeight"),
            scrollbar: {
                vertical: "hidden",
                horizontal: "auto",
                verticalScrollbarSize: 0,
                handleMouseWheel: !0,
                alwaysConsumeMouseWheel: !1,
                useShadows: !0,
                verticalHasArrows: !1,
                horizontalHasArrows: !1,
                horizontalScrollbarSize: KEg
            },
            scrollBeyondLastLine: !1,
            renderLineHighlight: "none",
            renderWhitespace: "none",
            minimap: {
                enabled: !1
            },
            quickSuggestions: !1,
            automaticLayout: !1,
            automaticLayoutIgnoreHeight: !0,
            guides: {
                indentation: !1
            }
        };
    }
}, Nle = Re([
    F(3, dn),
    F(4, Ju),
    F(5, nr),
    F(6, Rr),
    F(7, Ml),
    F(8, Wr),
    F(9, GS),
    F(10, fA),
    F(11, Nd),
    F(12, ehe),
    F(13, yi)
], Nle);

}
