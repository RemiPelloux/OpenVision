import { l2, xx } from "./accessibilitySignalService.js";
import { Ju, og } from "./codeEditorService.js";
import { Hi, Rr } from "./contextkey.js";
import { G0e, hWr } from "./contextmenu.js";
import { BQ, oRe } from "./diffEditorWidget.js";
import { Ud, pW } from "./editorExtensions.js";
import { It, dn } from "./instantiation.js";
import { ab, sne } from "./progress.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Dus;
export { Dus };
var __wakaru_ARk_initialized = false;
export function ARk() {
if (__wakaru_ARk_initialized) return;
__wakaru_ARk_initialized = true;
"use strict";
E(), Ud(), og(), Hi(), It(), hWr(), ab(), oRe(), l2(), Dus = class extends BQ {
    constructor(t, e, n, i, r, s, o){
        const a = {
            originalEditor: {
                isSimpleWidget: !0,
                contributions: pW.getSomeEditorContributions([
                    G0e.ID
                ])
            },
            modifiedEditor: {
                isSimpleWidget: !0,
                contributions: pW.getSomeEditorContributions([
                    G0e.ID
                ])
            }
        };
        super(t, e, a, i, n, o, s, r);
    }
    _getActions() {
        return pW.getEditorActions();
    }
    static getEditorOptions(t) {
        return {
            renderSideBySide: !1,
            renderMarginRevertIcon: !1,
            originalEditable: !1,
            diffCodeLens: !1,
            renderOverviewRuler: !1,
            readOnly: !0,
            wordWrap: "off",
            glyphMargin: !1,
            lineDecorationsWidth: 0,
            lineNumbersMinChars: 0,
            lineNumbers: "off",
            folding: !1,
            fontFamily: t.getValue("editor.fontFamily"),
            scrollbar: {
                vertical: "hidden",
                horizontal: "auto",
                verticalScrollbarSize: 0,
                handleMouseWheel: !0,
                alwaysConsumeMouseWheel: !1,
                useShadows: !0,
                verticalHasArrows: !1,
                horizontalHasArrows: !1,
                horizontalScrollbarSize: 10
            },
            scrollBeyondLastLine: !1,
            renderLineHighlight: "none",
            renderWhitespace: "none",
            minimap: {
                enabled: !1
            },
            quickSuggestions: !1,
            automaticLayout: !0,
            automaticLayoutIgnoreHeight: !0,
            guides: {
                indentation: !1
            }
        };
    }
}, Dus = Re([
    F(2, dn),
    F(3, Rr),
    F(4, sne),
    F(5, xx),
    F(6, Ju)
], Dus);

}
