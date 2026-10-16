import { Kp, Ph } from "./language.js";
import { dd, xp } from "./model.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var J3i;
export { J3i };
var __wakaru_QNf_initialized = false;
export function QNf() {
if (__wakaru_QNf_initialized) return;
__wakaru_QNf_initialized = true;
"use strict";
E(), Kp(), xp(), J3i = class {
    constructor(t, e, n){
        this.contents = t, this.languageService = e, this.modelService = n;
    }
    async provideTextContent(t) {
        const e = this.modelService.getModel(t);
        if (e && !e.isDisposed()) return e.setValue(this.contents), e;
        let n = this.languageService.guessLanguageIdByFilepathOrFirstLine(t);
        return n && !n.startsWith("worktree-") && (n = "worktree-" + n), this.modelService.createModel(this.contents, this.languageService.createById(n), t, !1, !1, !1);
    }
}, J3i = Re([
    F(1, Ph),
    F(2, dd)
], J3i);

}
