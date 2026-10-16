import { Qe, st } from "./Iwo.js";
import { or, yi } from "./configuration.js";
import { Hi, Rr } from "./contextkey.js";
import { cg, si } from "./editorContextKeys.js";
import { Ud } from "./editorExtensions.js";
import { kxk, uus } from "./hoverWidget_2.js";
import { It, dn } from "./instantiation.js";
import { Dg, Nd } from "./languageFeatures.js";
import { ES, hP } from "./lazy.js";
import { V3, rT } from "./markers.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { sv } from "./ze.js";
var elt;
export { elt };
var __wakaru_jCg_initialized = false;
export function jCg() {
if (__wakaru_jCg_initialized) return;
__wakaru_jCg_initialized = true;
"use strict";
E(), Ud(), hP(), Qe(), or(), Hi(), It(), rT(), el(), cg(), Dg(), kxk(), elt = class extends st {
    constructor(t, e, n, i, r, s, o){
        super(), this.contextKeyService = n, this._instantiationService = i, this._reactiveStorageService = s, this.configurationService = o, this.deactivated = !1, this._isMouseDown = !1, this._editor = t, this._register(this._editor.onDidChangeModel(()=>this.update())), this._register(this._editor.onDidChangeModelLanguage(()=>this.update())), this._register(this._editor.onDidBlurEditorText(()=>this.update())), this._register(this._editor.onDidBlurEditorWidget(()=>this.update())), this._register(this._editor.onDidChangeCursorPosition(()=>this.update())), this._register(this._editor.onMouseDown(()=>{
            this._isMouseDown = !0, this.update();
        })), this._register(this._editor.onMouseUp(()=>{
            this._isMouseDown = !1, this.update();
        })), this._widget = new ES(()=>{
            const l = this._register(i.createInstance(uus, this._editor));
            return this._register(l.onClick((c)=>{})), l;
        }), this._register(n.onDidChangeContext((l)=>{
            l.affectsSome(new Set([
                si.hasActivelyGeneratingDiff.key
            ])) && si.hasActivelyGeneratingDiff.getValue(n) && this._widget.value.hide();
        })), this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this)), this.reactiveStorageRoot.onChangeEffect({
            deps: [
                ()=>this._reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip
            ],
            onChange: ()=>{
                this.update();
            }
        });
        const a = ()=>{
            const l = this._editor.getOptions(), c = l.get(142), u = c === "inherit" ? l.get(141) : c, h = (u === "inherit" ? l.get(137) : u) !== "off";
            this._widget.value.isWordWrap = h;
        };
        if (a(), this._register(this._editor.onDidChangeConfiguration((l)=>{
            a();
        })), this.update(), !t.shouldShowHover) {
            this.deactivated = !0;
            return;
        }
    }
    static get(t) {
        return t.getContribution(elt.ID);
    }
    _getRangeOfSelectionUnlessWhitespaceEnclosed() {
        if (!this._editor.hasModel()) return;
        const t = this._editor.getModel(), e = this._editor.getSelection();
        if (e.isEmpty()) {
            const { lineNumber: n, column: i } = e.getPosition(), r = t.getLineContent(n);
            if (r.length === 0) return;
            if (i === 1) {
                if (/\s/.test(r[0])) return;
            } else if (i === t.getLineMaxColumn(n)) {
                if (/\s/.test(r[r.length - 1])) return;
            } else if (/\s/.test(r[i - 2]) && /\s/.test(r[i - 1])) return;
        }
        return e;
    }
    update() {
        if (!this._editor.shouldShowHover || this.deactivated) return;
        if (this._editor.getModel()) {
            const e = this._getRangeOfSelectionUnlessWhitespaceEnclosed(), n = e !== void 0 && !e.isEmpty();
            !this._isMouseDown && n && this._reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip !== !0 ? this._widget.value.update() : this._widget.value.hide();
        }
    }
    hideHoverWidget() {
        this.deactivated || this._widget.value.hide();
    }
}, elt.ID = "editor.contrib.hoverController", elt = Re([
    F(1, V3),
    F(2, Rr),
    F(3, dn),
    F(4, Nd),
    F(5, sa),
    F(6, yi)
], elt), sv(elt.ID, elt, 3);

}
