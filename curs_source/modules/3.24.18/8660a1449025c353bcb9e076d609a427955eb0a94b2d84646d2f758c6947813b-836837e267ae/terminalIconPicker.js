import { Qe, st } from "./Iwo.js";
import { H7o, K5d } from "./codiconsLibrary.js";
import { CM, rRe } from "./defaultStyles.js";
import { Hn, nd } from "./dom_2.js";
import { av, gS } from "./hover.js";
import { Bu, Iw } from "./hoverWidget.js";
import { b_ } from "./iconRegistry.js";
import { D9e, oDk } from "./iconSelectBox_2.js";
import { It, dn } from "./instantiation.js";
import { UD, UI } from "./layoutService.js";
import { ES, hP } from "./lazy.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { E5e, dE } from "./ze.js";
var U2g, Jds;
export { Jds, U2g };
var __wakaru_aDk_initialized = false;
export function aDk() {
if (__wakaru_aDk_initialized) return;
__wakaru_aDk_initialized = true;
"use strict";
E(), Hn(), Iw(), K5d(), hP(), Qe(), gS(), It(), UD(), CM(), b_(), oDk(), U2g = new ES(()=>{
    const t = E5e().getIcons(), e = new Set;
    return t.filter((i)=>i.id === H7o.blank.id || !("fontCharacter" in i.defaults) || e.has(i.defaults.fontCharacter) ? !1 : (e.add(i.defaults.fontCharacter), !0));
}), Jds = class extends st {
    constructor(t, e, n){
        super(), this._hoverService = e, this._layoutService = n, this._iconSelectBox = t.createInstance(D9e, {
            icons: U2g.value,
            inputBoxStyles: rRe
        });
    }
    async pickIcons() {
        const t = new nd(486, 260);
        return new Promise((e)=>{
            this._register(this._iconSelectBox.onDidSelect((s)=>{
                e(s), this._iconSelectBox.dispose();
            })), this._iconSelectBox.clearInput();
            const n = dE().body, i = n.getBoundingClientRect(), r = this._hoverService.showInstantHover({
                content: this._iconSelectBox.domNode,
                target: {
                    targetElements: [
                        n
                    ],
                    x: i.left + (i.width - t.width) / 2,
                    y: i.top + this._layoutService.activeContainerOffset.quickPickTop - 2
                },
                position: {
                    hoverPosition: Bu.BELOW
                },
                persistence: {
                    sticky: !0
                }
            }, !0);
            r && this._register(r), this._iconSelectBox.layout(t), this._iconSelectBox.focus();
        });
    }
}, Jds = Re([
    F(0, dn),
    F(1, av),
    F(2, UI)
], Jds);

}
