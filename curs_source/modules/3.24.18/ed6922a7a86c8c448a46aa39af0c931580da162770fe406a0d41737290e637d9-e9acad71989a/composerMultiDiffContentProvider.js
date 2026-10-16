import { C, ie } from "./actions_2.js";
import { kl, pc } from "./language.js";
import { Ll, fc } from "./model.js";
import { x } from "./tslib.es6.js";
var nsr;
export { nsr };
var __wakaru_j___initialized = false;
export function j__() {
if (__wakaru_j___initialized) return;
__wakaru_j___initialized = true;
"use strict";
x(), kl(), Ll(), nsr = class {
    constructor(e, t, n){
        this.contents = e, this.languageService = t, this.modelService = n;
    }
    async provideTextContent(e) {
        const t = this.modelService.getModel(e);
        if (t && !t.isDisposed()) return t.setValue(this.contents), t;
        let n = this.languageService.guessLanguageIdByFilepathOrFirstLine(e);
        return n && !n.startsWith("worktree-") && (n = "worktree-" + n), this.modelService.createModel(this.contents, this.languageService.createById(n), e, !1, !1, !1);
    }
}, nsr = ie([
    C(1, pc),
    C(2, fc)
], nsr);

}
