import { G9, He, Se, cn, rn } from "./HVr.js";
import { hS } from "./aria.js";
import { Nv } from "./editorBrowser.js";
import { HV, aQr } from "./editorColorRegistry.js";
import { E7 } from "./functional.js";
import { Cb, xE } from "./model_2.js";
import { GP, LO, VS, yI } from "./qIc.js";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var X_o;
export { X_o };
var __wakaru_olh_initialized = false;
export function olh() {
if (__wakaru_olh_initialized) return;
__wakaru_olh_initialized = true;
"use strict";
x(), E7(), Se(), Nv(), Cb(), HV(), as(), hS(), X_o = class {
    constructor(e){
        this.options = e, this.rangeHighlightDecorationId = void 0;
    }
    provide(e, t, n) {
        const i = new He;
        e.canAcceptInBackground = !!this.options?.canAcceptInBackground, e.matchOnLabel = e.matchOnDescription = e.matchOnDetail = e.sortByLabel = !1;
        const r = i.add(new cn);
        return r.value = this.doProvide(e, t, n), i.add(this.onDidActiveTextEditorControlChange(()=>{
            r.value = void 0, r.value = this.doProvide(e, t);
        })), i;
    }
    doProvide(e, t, n) {
        const i = new He, r = this.activeTextEditorControl;
        if (r && this.canProvideWithTextEditor(r)) {
            const s = {
                editor: r
            }, o = LO(r);
            if (o) {
                let a = r.saveViewState() ?? void 0;
                i.add(o.onDidChangeCursorPosition(()=>{
                    a = r.saveViewState() ?? void 0;
                })), s.restoreViewState = ()=>{
                    a && r === this.activeTextEditorControl && r.restoreViewState(a);
                }, i.add(G9(t.onCancellationRequested)(()=>s.restoreViewState?.()));
            }
            i.add(rn(()=>this.clearDecorations(r))), i.add(this.provideWithTextEditor(s, e, t, n));
        } else i.add(this.provideWithoutTextEditor(e, t));
        return i;
    }
    canProvideWithTextEditor(e) {
        return !0;
    }
    gotoLocation({ editor: e }, t) {
        e.setSelection(t.range, "code.jump"), e.revealRangeInCenter(t.range, 0), t.preserveFocus || e.focus();
        const n = e.getModel();
        n && "getLineContent" in n && yI(`${n.getLineContent(t.range.startLineNumber)}`);
    }
    getModel(e) {
        return GP(e) ? e.getModel()?.modified : e.getModel();
    }
    addDecorations(e, t) {
        e.changeDecorations((n)=>{
            const i = [];
            this.rangeHighlightDecorationId && (i.push(this.rangeHighlightDecorationId.overviewRulerDecorationId), i.push(this.rangeHighlightDecorationId.rangeHighlightId), this.rangeHighlightDecorationId = void 0);
            const r = [
                {
                    range: t,
                    options: {
                        description: "quick-access-range-highlight",
                        className: "rangeHighlight",
                        isWholeLine: !0
                    }
                },
                {
                    range: t,
                    options: {
                        description: "quick-access-range-highlight-overview",
                        overviewRuler: {
                            color: VS(aQr),
                            position: xE.Full
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
    clearDecorations(e) {
        const t = this.rangeHighlightDecorationId;
        t && (e.changeDecorations((n)=>{
            n.deltaDecorations([
                t.overviewRulerDecorationId,
                t.rangeHighlightId
            ], []);
        }), this.rangeHighlightDecorationId = void 0);
    }
};

}
