import { Nt, Pn, Qe, Vn, mQ } from "./Iwo.js";
import { $3 } from "./aria.js";
import { xw } from "./editorBrowser.js";
import { doe, vjo } from "./editorColorRegistry.js";
import { Mse } from "./functional.js";
import { J0, gO } from "./model_2.js";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { OI, jj, qve, yO } from "./ze.js";
var hel;
export { hel };
var __wakaru_OKm_initialized = false;
export function OKm() {
if (__wakaru_OKm_initialized) return;
__wakaru_OKm_initialized = true;
"use strict";
E(), Mse(), Qe(), xw(), J0(), doe(), Dl(), $3(), hel = class {
    constructor(t){
        this.options = t, this.rangeHighlightDecorationId = void 0;
    }
    provide(t, e, n) {
        const i = new Nt;
        t.canAcceptInBackground = !!this.options?.canAcceptInBackground, t.matchOnLabel = t.matchOnDescription = t.matchOnDetail = t.sortByLabel = !1;
        const r = i.add(new Vn);
        return r.value = this.doProvide(t, e, n), i.add(this.onDidActiveTextEditorControlChange(()=>{
            r.value = void 0, r.value = this.doProvide(t, e);
        })), i;
    }
    doProvide(t, e, n) {
        const i = new Nt, r = this.activeTextEditorControl;
        if (r && this.canProvideWithTextEditor(r)) {
            const s = {
                editor: r
            }, o = yO(r);
            if (o) {
                let a = r.saveViewState() ?? void 0;
                i.add(o.onDidChangeCursorPosition(()=>{
                    a = r.saveViewState() ?? void 0;
                })), s.restoreViewState = ()=>{
                    a && r === this.activeTextEditorControl && r.restoreViewState(a);
                }, i.add(mQ(e.onCancellationRequested)(()=>s.restoreViewState?.()));
            }
            i.add(Pn(()=>this.clearDecorations(r))), i.add(this.provideWithTextEditor(s, t, e, n));
        } else i.add(this.provideWithoutTextEditor(t, e));
        return i;
    }
    canProvideWithTextEditor(t) {
        return !0;
    }
    gotoLocation({ editor: t }, e) {
        t.setSelection(e.range, "code.jump"), t.revealRangeInCenter(e.range, 0), e.preserveFocus || t.focus();
        const n = t.getModel();
        n && "getLineContent" in n && qve(`${n.getLineContent(e.range.startLineNumber)}`);
    }
    getModel(t) {
        return jj(t) ? t.getModel()?.modified : t.getModel();
    }
    addDecorations(t, e) {
        t.changeDecorations((n)=>{
            const i = [];
            this.rangeHighlightDecorationId && (i.push(this.rangeHighlightDecorationId.overviewRulerDecorationId), i.push(this.rangeHighlightDecorationId.rangeHighlightId), this.rangeHighlightDecorationId = void 0);
            const r = [
                {
                    range: e,
                    options: {
                        description: "quick-access-range-highlight",
                        className: "rangeHighlight",
                        isWholeLine: !0
                    }
                },
                {
                    range: e,
                    options: {
                        description: "quick-access-range-highlight-overview",
                        overviewRuler: {
                            color: OI(vjo),
                            position: gO.Full
                        }
                    }
                }
            ], [s, o] = n.deltaDecorations(i, r);
            this.rangeHighlightDecorationId = {
                rangeHighlightId: s,
                overviewRulerDecorationId: o
            };
        });
    }
    clearDecorations(t) {
        const e = this.rangeHighlightDecorationId;
        e && (t.changeDecorations((n)=>{
            n.deltaDecorations([
                e.overviewRulerDecorationId,
                e.rangeHighlightId
            ], []);
        }), this.rangeHighlightDecorationId = void 0);
    }
};

}
