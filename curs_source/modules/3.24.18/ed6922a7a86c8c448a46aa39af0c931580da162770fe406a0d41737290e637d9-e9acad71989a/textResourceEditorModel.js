import { Op, ym } from "./accessibility.js";
import { C, ie } from "./actions_2.js";
import { kl, pc } from "./language.js";
import { NLe, hhe } from "./languageDetectionWorkerService.js";
import { Ll, fc } from "./model.js";
import { ezt, obe } from "./textEditorModel.js";
import { x } from "./tslib.es6.js";
var _5n;
export { _5n };
var __wakaru_FBh_initialized = false;
export function FBh() {
if (__wakaru_FBh_initialized) return;
__wakaru_FBh_initialized = true;
"use strict";
x(), ezt(), kl(), Ll(), NLe(), Op(), _5n = class extends obe {
    constructor(e, t, n, i, r){
        super(n, t, i, r, e);
    }
    dispose() {
        this.textEditorModelHandle && this.modelService.destroyModel(this.textEditorModelHandle), super.dispose();
    }
}, _5n = ie([
    C(1, pc),
    C(2, fc),
    C(3, hhe),
    C(4, ym)
], _5n);

}
