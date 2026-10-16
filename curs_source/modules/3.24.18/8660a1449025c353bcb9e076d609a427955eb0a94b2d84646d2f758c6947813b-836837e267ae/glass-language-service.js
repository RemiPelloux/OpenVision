import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Kp, Ph } from "./language.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var ege, WRs;
export { WRs, ege };
var __wakaru_Jye_initialized = false;
export function Jye() {
if (__wakaru_Jye_initialized) return;
__wakaru_Jye_initialized = true;
"use strict";
E(), Kp(), Rn(), It(), ege = jn("glassLanguageService"), WRs = class {
    constructor(t){
        this._languageService = t;
    }
    get vscodeService() {
        return this._languageService;
    }
    get languageIdCodec() {
        return this._languageService.languageIdCodec;
    }
    isRegisteredLanguageId(t) {
        return this._languageService.isRegisteredLanguageId(t);
    }
    getLanguageName(t) {
        return this._languageService.getLanguageName(t);
    }
    getLanguageIdByLanguageName(t) {
        return this._languageService.getLanguageIdByLanguageName(t);
    }
    guessLanguageIdByFilepathOrFirstLine(t, e) {
        return this._languageService.guessLanguageIdByFilepathOrFirstLine(t, e);
    }
    createById(t) {
        return this._languageService.createById(t);
    }
}, WRs = Re([
    F(0, Ph)
], WRs), bn(ege, WRs, 1);

}
