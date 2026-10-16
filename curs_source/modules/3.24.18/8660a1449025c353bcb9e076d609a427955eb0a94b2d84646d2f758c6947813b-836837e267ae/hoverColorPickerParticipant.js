import { D, Nt, Qe } from "./Iwo.js";
import { Ote, qn } from "./async.js";
import { Loi, P5e } from "./colorDetector.js";
import { iKd } from "./colorPickerParticipantUtils.js";
import { Hn, nd } from "./dom_2.js";
import { JVd, kzo } from "./hoverColorPickerWidget.js";
import { Xyt, cRe } from "./hoverTypes.js";
import { Bt } from "./nls.js";
import { Qs, qt } from "./range.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { joi, nKd, tKd } from "./ze.js";
var wzo, $oi;
export { $oi, wzo };
var __wakaru_rKd_initialized = false;
export function rKd() {
if (__wakaru_rKd_initialized) return;
__wakaru_rKd_initialized = true;
"use strict";
E(), qn(), Qs(), Loi(), JVd(), cRe(), Dl(), Bt(), iKd(), Hn(), Qe(), wzo = class PRb {
    constructor(e, n, i, r){
        this.owner = e, this.range = n, this.model = i, this.provider = r, this.forceShowAtRange = !0;
    }
    isValidForHoverAnchor(e) {
        return e.type === 1 && this.range.startColumn <= e.range.startColumn && this.range.endColumn >= e.range.endColumn;
    }
    static fromBaseColor(e, n) {
        return new PRb(e, n.range, n.model, n.provider);
    }
}, $oi = class {
    constructor(t, e){
        this._editor = t, this._themeService = e, this.hoverOrdinal = 2;
    }
    computeSync(t, e, n) {
        return [];
    }
    computeAsync(t, e, n, i) {
        return Ote.fromPromise(this._computeAsync(t, e, n));
    }
    async _computeAsync(t, e, n) {
        if (!this._editor.hasModel()) return [];
        if (!this._isValidRequest(n)) return [];
        const i = P5e.get(this._editor);
        if (!i) return [];
        for (const r of e){
            if (!i.isColorDecoration(r)) continue;
            const s = i.getColorData(r.range.getStartPosition());
            if (s) return [
                wzo.fromBaseColor(this, await tKd(this._editor.getModel(), s.colorInfo, s.provider))
            ];
        }
        return [];
    }
    _isValidRequest(t) {
        const e = this._editor.getOption(154);
        switch(t){
            case 0:
                return e === "hover" || e === "clickAndHover";
            case 1:
                return e === "click" || e === "clickAndHover";
            case 2:
                return !0;
        }
    }
    renderHoverParts(t, e) {
        const n = this._editor;
        if (e.length === 0 || !n.hasModel()) return new Xyt([]);
        const i = n.getOption(68) + 8;
        t.setMinimumDimensions(new nd(302, i));
        const r = new Nt, s = e[0], o = n.getModel(), a = s.model;
        this._colorPicker = r.add(new kzo(t.fragment, a, n.getOption(149), this._themeService, "hover"));
        let l = !1, c = new qt(s.range.startLineNumber, s.range.startColumn, s.range.endLineNumber, s.range.endColumn);
        r.add(a.onColorFlushed(async (d)=>{
            await joi(o, a, d, c, s), l = !0, c = nKd(n, c, a);
        })), r.add(a.onDidChangeColor((d)=>{
            joi(o, a, d, c, s);
        })), r.add(n.onDidChangeModelContent((d)=>{
            l ? l = !1 : (t.hide(), n.focus());
        }));
        const u = {
            hoverPart: wzo.fromBaseColor(this, s),
            hoverElement: this._colorPicker.domNode,
            dispose () {
                r.dispose();
            }
        };
        return new Xyt([
            u
        ]);
    }
    getAccessibleContent(t) {
        return D(1023, null);
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
}, $oi = Re([
    F(1, Ml)
], $oi);

}
