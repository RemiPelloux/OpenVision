import { Gt, Pn, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { CP0, IPs, _2v, _tc, btc, t5n, v2v, wP0 } from "./XRv.js";
import { A_ } from "./browser_2.js";
import { Rn } from "./extensions.js";
import { GRt, e5n, g2v, qRt, w6i } from "./glass-display-constants.js";
import { Zut, ftc, hJt, vtc } from "./glass-display-service.types.js";
import { xPs } from "./glass-display-utils.js";
import { Zu, eu } from "./glass-log-service.js";
import { Nu, xc } from "./glass-storage-service.js";
import { Csv, pGl } from "./glass-zoom-applier-service.js";
import { It } from "./instantiation.js";
import { Wg, io } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $t, Bs } from "./window.js";
import { v7 } from "./ze.js";
var fYe, APs;
export { APs, fYe };
var __wakaru_pJt_initialized = false;
export function pJt() {
if (__wakaru_pJt_initialized) return;
__wakaru_pJt_initialized = true;
"use strict";
E(), A_(), Bs(), Gt(), Qe(), Rn(), It(), Zu(), xc(), e5n(), vtc(), xPs(), Csv(), fYe = Il("glassDisplayService"), APs = class extends st {
    constructor(t, e, n){
        super(), this._storageService = t, this._logService = e, this._zoomApplier = n, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._registeredWindows = new Map;
        const i = this._readStoredDisplaySettings(), r = i?.uiFontSizePx, s = i?.codeFontSizePx;
        this._uiFontSizePx = r ?? this._getClosestUIFontSizePx(), this._codeFontSizePx = s ?? qRt, this._uiFontFamily = i?.uiFontFamily, this._codeFontFamily = i?.codeFontFamily, this._codeZoomOffsetPx = i?.codeZoomOffsetPx ?? _2v(this._uiFontSizePx, this._codeFontSizePx), i !== void 0 && (r !== this._uiFontSizePx || s !== this._codeFontSizePx) && this._persistDisplaySettings(), this._register(this.registerWindow($t));
    }
    dispose() {
        super.dispose();
    }
    getFontSize(t) {
        switch(t.type){
            case "normal":
                return this._uiFontSizePx;
            case "code":
                return this._codeFontSizePx;
            default:
                return t.type;
        }
    }
    getZoomFactor() {
        const t = _tc(this._uiFontSizePx) / 100;
        return t > 0 ? t : 1;
    }
    setFontSize(t) {
        if (Number.isFinite(t.fontSizePx)) switch(t.type){
            case "normal":
                {
                    const e = t5n(t.fontSizePx, Zut);
                    if (e === this._uiFontSizePx) return;
                    this._updateFontSizes({
                        nextUIFontSizePx: e,
                        nextCodeFontSizePx: this._codeFontSizePx,
                        shouldPersist: !0
                    });
                    return;
                }
            case "code":
                {
                    const e = t5n(t.fontSizePx, hJt);
                    if (e === this._codeFontSizePx) return;
                    this._updateFontSizes({
                        nextUIFontSizePx: this._uiFontSizePx,
                        nextCodeFontSizePx: e,
                        shouldPersist: !0
                    });
                    return;
                }
            default:
                {
                    const e = t;
                }
        }
    }
    getFontFamily(t) {
        switch(t.type){
            case "normal":
                return this._uiFontFamily;
            case "code":
                return this._codeFontFamily;
            default:
                return t.type;
        }
    }
    setFontFamily(t) {
        const e = IPs(t.fontFamily);
        switch(t.type){
            case "normal":
                {
                    if (this._uiFontFamily === e) return;
                    this._uiFontFamily = e;
                    break;
                }
            case "code":
                {
                    if (this._codeFontFamily === e) return;
                    this._codeFontFamily = e;
                    break;
                }
            default:
                {
                    const n = t;
                }
        }
        this._persistDisplaySettings(), this._onDidChange.fire();
    }
    stepFontSize(t) {
        const e = this.getFontSize({
            type: t.type
        }), n = t.type === "normal" ? btc(e, t.direction, Zut) : btc(e, t.direction, hJt);
        this.setFontSize({
            type: t.type,
            fontSizePx: n
        });
    }
    resetFontSize(t) {
        this.setFontSize({
            type: t.type,
            fontSizePx: t.type === "normal" ? GRt : qRt
        });
    }
    stepZoomFontSizes(t) {
        const e = wP0(this.getZoomFactor(), t);
        if (e === this.getZoomFactor()) return;
        let n = v2v(e);
        n === this._uiFontSizePx && (n = btc(this._uiFontSizePx, t, Zut));
        const i = CP0({
            uiFontSizePx: n,
            codeZoomOffsetPx: this._codeZoomOffsetPx
        });
        this._updateFontSizes({
            nextUIFontSizePx: n,
            nextCodeFontSizePx: i,
            shouldPersist: !0,
            retainCodeZoomOffset: !0
        });
    }
    resetZoomFontSizes() {
        this._updateFontSizes({
            nextUIFontSizePx: GRt,
            nextCodeFontSizePx: qRt,
            shouldPersist: !0
        });
    }
    registerWindow(t) {
        const e = this._registeredWindows.get(t) ?? 0;
        return this._registeredWindows.set(t, e + 1), this._applyUIFontSizePx(t), Pn(()=>{
            const n = (this._registeredWindows.get(t) ?? 1) - 1;
            if (n <= 0) {
                this._registeredWindows.delete(t);
                return;
            }
            this._registeredWindows.set(t, n);
        });
    }
    _readStoredDisplaySettings() {
        const t = this._storageService.get(w6i, io.APPLICATION);
        if (t !== void 0) try {
            const e = JSON.parse(t), n = ftc.safeParse(e);
            if (n.success) {
                const i = n.data;
                return {
                    ...i,
                    uiFontFamily: IPs(i.uiFontFamily),
                    codeFontFamily: IPs(i.codeFontFamily)
                };
            }
            this._logService.warn("[GlassDisplayService] Stored display settings failed validation; using defaults.", n.error.message);
        } catch (e) {
            this._logService.warn("[GlassDisplayService] Stored display settings are invalid JSON; using defaults.", e);
        }
    }
    _persistDisplaySettings() {
        const t = {
            uiFontSizePx: this._uiFontSizePx,
            codeFontSizePx: this._codeFontSizePx,
            codeZoomOffsetPx: this._codeZoomOffsetPx
        };
        this._uiFontFamily !== void 0 && (t.uiFontFamily = this._uiFontFamily), this._codeFontFamily !== void 0 && (t.codeFontFamily = this._codeFontFamily), this._storageService.store(w6i, JSON.stringify(t), io.APPLICATION, Wg.MACHINE);
    }
    _updateFontSizes({ nextUIFontSizePx: t, nextCodeFontSizePx: e, shouldPersist: n, retainCodeZoomOffset: i = !1 }) {
        const r = t !== this._uiFontSizePx, s = e !== this._codeFontSizePx;
        if (!(!r && !s)) {
            if (this._uiFontSizePx = t, this._codeFontSizePx = e, i || (this._codeZoomOffsetPx = _2v(this._uiFontSizePx, this._codeFontSizePx)), r) for (const o of this._registeredWindows.keys())this._applyUIFontSizePx(o);
            n && this._persistDisplaySettings(), this._onDidChange.fire();
        }
    }
    _applyUIFontSizePx(t) {
        const e = this.getZoomFactor();
        this._zoomApplier.applyZoomLevel(Math.log(e) / Math.log(g2v), t);
    }
    _getClosestUIFontSizePx() {
        return v2v(v7($t));
    }
}, APs = Re([
    F(0, Nu),
    F(1, eu),
    F(2, pGl)
], APs), bn(fYe, APs, 0, 1);

}
