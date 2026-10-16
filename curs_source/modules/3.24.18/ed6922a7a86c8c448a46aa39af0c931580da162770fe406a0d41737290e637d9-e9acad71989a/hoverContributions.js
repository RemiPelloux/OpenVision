import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { dn, xn } from "./contextkey.js";
import { gd, gn } from "./editorContextKeys.js";
import { yc } from "./editorExtensions.js";
import { Ml_, Snr } from "./hoverWidget_2.js";
import { Ze, _t } from "./instantiation.js";
import { Jc, kh } from "./languageFeatures.js";
import { Yf, qC } from "./lazy.js";
import { $_, eT } from "./markers.js";
import { pp } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { x } from "./tslib.es6.js";
var V8e;
export { V8e };
var __wakaru_$Fh_initialized = false;
export function $Fh() {
if (__wakaru_$Fh_initialized) return;
__wakaru_$Fh_initialized = true;
"use strict";
x(), yc(), qC(), Se(), Cn(), dn(), Ze(), $_(), Ha(), gd(), kh(), Ml_(), V8e = class extends we {
    constructor(e, t, n, i, r, s, o){
        super(), this.contextKeyService = n, this._instantiationService = i, this._reactiveStorageService = s, this.configurationService = o, this.deactivated = !1, this._isMouseDown = !1, this._editor = e, this._register(this._editor.onDidChangeModel(()=>this.update())), this._register(this._editor.onDidChangeModelLanguage(()=>this.update())), this._register(this._editor.onDidBlurEditorText(()=>this.update())), this._register(this._editor.onDidBlurEditorWidget(()=>this.update())), this._register(this._editor.onDidChangeCursorPosition(()=>this.update())), this._register(this._editor.onMouseDown(()=>{
            this._isMouseDown = !0, this.update();
        })), this._register(this._editor.onMouseUp(()=>{
            this._isMouseDown = !1, this.update();
        })), this._widget = new Yf(()=>{
            const c = this._register(i.createInstance(Snr, this._editor));
            return this._register(c.onClick((l)=>{})), c;
        }), this._register(n.onDidChangeContext((c)=>{
            c.affectsSome(new Set([
                gn.hasActivelyGeneratingDiff.key
            ])) && gn.hasActivelyGeneratingDiff.getValue(n) && this._widget.value.hide();
        })), this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this)), this.reactiveStorageRoot.onChangeEffect({
            deps: [
                ()=>this._reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip
            ],
            onChange: ()=>{
                this.update();
            }
        });
        const a = ()=>{
            const c = this._editor.getOptions(), l = c.get(142), u = l === "inherit" ? c.get(141) : l, p = (u === "inherit" ? c.get(137) : u) !== "off";
            this._widget.value.isWordWrap = p;
        };
        if (a(), this._register(this._editor.onDidChangeConfiguration((c)=>{
            a();
        })), this.update(), !e.shouldShowHover) {
            this.deactivated = !0;
            return;
        }
    }
    static get(e) {
        return e.getContribution(V8e.ID);
    }
    _getRangeOfSelectionUnlessWhitespaceEnclosed() {
        if (!this._editor.hasModel()) return;
        const e = this._editor.getModel(), t = this._editor.getSelection();
        if (t.isEmpty()) {
            const { lineNumber: n, column: i } = t.getPosition(), r = e.getLineContent(n);
            if (r.length === 0) return;
            if (i === 1) {
                if (/\s/.test(r[0])) return;
            } else if (i === e.getLineMaxColumn(n)) {
                if (/\s/.test(r[r.length - 1])) return;
            } else if (/\s/.test(r[i - 2]) && /\s/.test(r[i - 1])) return;
        }
        return t;
    }
    update() {
        if (!this._editor.shouldShowHover || this.deactivated) return;
        if (this._editor.getModel()) {
            const t = this._getRangeOfSelectionUnlessWhitespaceEnclosed(), n = t !== void 0 && !t.isEmpty();
            !this._isMouseDown && n && this._reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip !== !0 ? this._widget.value.update() : this._widget.value.hide();
        }
    }
    hideHoverWidget() {
        this.deactivated || this._widget.value.hide();
    }
}, V8e.ID = "editor.contrib.hoverController", V8e = ie([
    C(1, eT),
    C(2, xn),
    C(3, _t),
    C(4, Jc),
    C(5, Do),
    C(6, qt)
], V8e), pp(V8e.ID, V8e, 3);

}
