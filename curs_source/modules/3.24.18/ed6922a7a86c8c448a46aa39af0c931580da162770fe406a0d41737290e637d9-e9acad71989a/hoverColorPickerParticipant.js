import { He, S, Se } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { bn, eW } from "./async.js";
import { GFt, rfe } from "./colorDetector.js";
import { dHc } from "./colorPickerParticipantUtils.js";
import { Tc, en } from "./dom_2.js";
import { Yis, aHc } from "./hoverColorPickerWidget.js";
import { fKe, ife } from "./hoverTypes.js";
import { rt } from "./nls.js";
import { e_n, lHc, uHc } from "./qIc.js";
import { dt, qi } from "./range.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var Xis, t_n;
export { Xis, t_n };
var __wakaru_hHc_initialized = false;
export function hHc() {
if (__wakaru_hHc_initialized) return;
__wakaru_hHc_initialized = true;
"use strict";
x(), bn(), qi(), GFt(), aHc(), ife(), as(), rt(), dHc(), en(), Se(), Xis = class Xkm {
    constructor(t, n, i, r){
        this.owner = t, this.range = n, this.model = i, this.provider = r, this.forceShowAtRange = !0;
    }
    isValidForHoverAnchor(t) {
        return t.type === 1 && this.range.startColumn <= t.range.startColumn && this.range.endColumn >= t.range.endColumn;
    }
    static fromBaseColor(t, n) {
        return new Xkm(t, n.range, n.model, n.provider);
    }
}, t_n = class {
    constructor(e, t){
        this._editor = e, this._themeService = t, this.hoverOrdinal = 2;
    }
    computeSync(e, t, n) {
        return [];
    }
    computeAsync(e, t, n, i) {
        return eW.fromPromise(this._computeAsync(e, t, n));
    }
    async _computeAsync(e, t, n) {
        if (!this._editor.hasModel()) return [];
        if (!this._isValidRequest(n)) return [];
        const i = rfe.get(this._editor);
        if (!i) return [];
        for (const r of t){
            if (!i.isColorDecoration(r)) continue;
            const s = i.getColorData(r.range.getStartPosition());
            if (s) return [
                Xis.fromBaseColor(this, await lHc(this._editor.getModel(), s.colorInfo, s.provider))
            ];
        }
        return [];
    }
    _isValidRequest(e) {
        const t = this._editor.getOption(154);
        switch(e){
            case 0:
                return t === "hover" || t === "clickAndHover";
            case 1:
                return t === "click" || t === "clickAndHover";
            case 2:
                return !0;
        }
    }
    renderHoverParts(e, t) {
        const n = this._editor;
        if (t.length === 0 || !n.hasModel()) return new fKe([]);
        const i = n.getOption(68) + 8;
        e.setMinimumDimensions(new Tc(302, i));
        const r = new He, s = t[0], o = n.getModel(), a = s.model;
        this._colorPicker = r.add(new Yis(e.fragment, a, n.getOption(149), this._themeService, "hover"));
        let c = !1, l = new dt(s.range.startLineNumber, s.range.startColumn, s.range.endLineNumber, s.range.endColumn);
        r.add(a.onColorFlushed(async (h)=>{
            await e_n(o, a, h, l, s), c = !0, l = uHc(n, l, a);
        })), r.add(a.onDidChangeColor((h)=>{
            e_n(o, a, h, l, s);
        })), r.add(n.onDidChangeModelContent((h)=>{
            c ? c = !1 : (e.hide(), n.focus());
        }));
        const u = {
            hoverPart: Xis.fromBaseColor(this, s),
            hoverElement: this._colorPicker.domNode,
            dispose () {
                r.dispose();
            }
        };
        return new fKe([
            u
        ]);
    }
    getAccessibleContent(e) {
        return S(1023, null);
    }
    handleResize() {
        this._colorPicker?.layout();
    }
    handleHide() {
        this._colorPicker?.dispose(), this._colorPicker = void 0;
    }
    isColorPickerVisible() {
        return !!this._colorPicker;
    }
}, t_n = ie([
    C(1, $r)
], t_n);

}
