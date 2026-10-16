import { Gt, Pn, Qe, st, tt } from "./Iwo.js";
import { jn } from "./SZu.js";
import { gs, yt } from "./codicons.js";
import { It } from "./instantiation.js";
import { Eo, Fi } from "./platform_2.js";
import { LI } from "./theme.js";
import { E } from "./tslib.es6.js";
var Ml, JUo, Gwr, qwr, X4d, ejo, HAe;
export { Gwr, HAe, JUo, Ml, X4d, ejo, qwr };
var __wakaru_Dl_initialized = false;
export function Dl() {
if (__wakaru_Dl_initialized) return;
__wakaru_Dl_initialized = true;
"use strict";
E(), gs(), Gt(), Qe(), It(), Eo(), LI(), Ml = jn("themeService"), JUo = yt.file, Gwr = yt.folder, qwr = {
    ThemingContribution: "base.contributions.theming"
}, X4d = class extends st {
    constructor(){
        super(), this.themingParticipants = [], this.themingParticipants = [], this.onThemingParticipantAddedEmitter = this._register(new tt);
    }
    onColorThemeChange(t) {
        return this.themingParticipants.push(t), this.onThemingParticipantAddedEmitter.fire(t), Pn(()=>{
            const e = this.themingParticipants.indexOf(t);
            this.themingParticipants.splice(e, 1);
        });
    }
    get onThemingParticipantAdded() {
        return this.onThemingParticipantAddedEmitter.event;
    }
    getThemingParticipants() {
        return this.themingParticipants;
    }
}, ejo = new X4d, Fi.add(qwr.ThemingContribution, ejo), HAe = class extends st {
    constructor(t){
        super(), this.themeService = t, this.theme = t.getColorTheme(), this._register(this.themeService.onDidColorThemeChange((e)=>this.onThemeChange(e)));
    }
    onThemeChange(t) {
        this.theme = t, this.updateStyles();
    }
    updateStyles() {}
    getColor(t, e) {
        let n = this.theme.getColor(t);
        return n && e && (n = e(n, this.theme)), n ? n.toString() : null;
    }
};

}
