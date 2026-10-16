import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { JDc, OYr } from "./codiconsLibrary.js";
import { nN, sf } from "./defaultStyles.js";
import { Tc, en } from "./dom_2.js";
import { du, va } from "./hover.js";
import { Tb, wl } from "./hoverWidget.js";
import { dh } from "./iconRegistry.js";
import { a9h, hbe } from "./iconSelectBox_2.js";
import { Ze, _t } from "./instantiation.js";
import { Rx, hC } from "./layoutService.js";
import { Yf, qC } from "./lazy.js";
import { Nwe, lC } from "./qIc.js";
import { x } from "./tslib.es6.js";
var c9h, Lir;
export { Lir, c9h };
var __wakaru_Jd__initialized = false;
export function Jd_() {
if (__wakaru_Jd__initialized) return;
__wakaru_Jd__initialized = true;
"use strict";
x(), en(), Tb(), JDc(), qC(), Se(), du(), Ze(), Rx(), sf(), dh(), a9h(), c9h = new Yf(()=>{
    const e = Nwe().getIcons(), t = new Set;
    return e.filter((i)=>i.id === OYr.blank.id || !("fontCharacter" in i.defaults) || t.has(i.defaults.fontCharacter) ? !1 : (t.add(i.defaults.fontCharacter), !0));
}), Lir = class extends we {
    constructor(e, t, n){
        super(), this._hoverService = t, this._layoutService = n, this._iconSelectBox = e.createInstance(hbe, {
            icons: c9h.value,
            inputBoxStyles: nN
        });
    }
    async pickIcons() {
        const e = new Tc(486, 260);
        return new Promise((t)=>{
            this._register(this._iconSelectBox.onDidSelect((s)=>{
                t(s), this._iconSelectBox.dispose();
            })), this._iconSelectBox.clearInput();
            const n = lC().body, i = n.getBoundingClientRect(), r = this._hoverService.showInstantHover({
                content: this._iconSelectBox.domNode,
                target: {
                    targetElements: [
                        n
                    ],
                    x: i.left + (i.width - e.width) / 2,
                    y: i.top + this._layoutService.activeContainerOffset.quickPickTop - 2
                },
                position: {
                    hoverPosition: wl.BELOW
                },
                persistence: {
                    sticky: !0
                }
            }, !0);
            r && this._register(r), this._iconSelectBox.layout(e), this._iconSelectBox.focus();
        });
    }
}, Lir = ie([
    C(0, _t),
    C(1, va),
    C(2, hC)
], Lir);

}
