import { Se, bt, rn, ve, we } from "./HVr.js";
import { Pe, _i } from "./codicons.js";
import { Ze } from "./instantiation.js";
import { kn, rr } from "./platform_2.js";
import { vn } from "./qIc.js";
import { x0 } from "./theme.js";
import { x } from "./tslib.es6.js";
var $r, SZr, Xfi, kZr, YNc, wZr, aW;
export { $r, SZr, Xfi, YNc, aW, kZr, wZr };
var __wakaru_as_initialized = false;
export function as() {
if (__wakaru_as_initialized) return;
__wakaru_as_initialized = true;
"use strict";
x(), _i(), bt(), Se(), Ze(), rr(), x0(), $r = vn("themeService"), SZr = Pe.file, Xfi = Pe.folder, kZr = {
    ThemingContribution: "base.contributions.theming"
}, YNc = class extends we {
    constructor(){
        super(), this.themingParticipants = [], this.themingParticipants = [], this.onThemingParticipantAddedEmitter = this._register(new ve);
    }
    onColorThemeChange(e) {
        return this.themingParticipants.push(e), this.onThemingParticipantAddedEmitter.fire(e), rn(()=>{
            const t = this.themingParticipants.indexOf(e);
            this.themingParticipants.splice(t, 1);
        });
    }
    get onThemingParticipantAdded() {
        return this.onThemingParticipantAddedEmitter.event;
    }
    getThemingParticipants() {
        return this.themingParticipants;
    }
}, wZr = new YNc, kn.add(kZr.ThemingContribution, wZr), aW = class extends we {
    constructor(e){
        super(), this.themeService = e, this.theme = e.getColorTheme(), this._register(this.themeService.onDidColorThemeChange((t)=>this.onThemeChange(t)));
    }
    onThemeChange(e) {
        this.theme = e, this.updateStyles();
    }
    updateStyles() {}
    getColor(e, t) {
        let n = this.theme.getColor(e);
        return n && t && (n = t(n, this.theme)), n ? n.toString() : null;
    }
};

}
