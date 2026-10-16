import { S } from "./HVr.js";
import { Pe, _i } from "./codicons.js";
import { rt } from "./nls.js";
import { $f, ih } from "./qIc.js";
import { E3, uU } from "./toggle.js";
import { x } from "./tslib.es6.js";
var DHc, MHc, PHc, mrs, grs, frs;
export { DHc, MHc, PHc, frs, grs, mrs };
var __wakaru_LHc_initialized = false;
export function LHc() {
if (__wakaru_LHc_initialized) return;
__wakaru_LHc_initialized = true;
"use strict";
x(), $f(), uU(), _i(), rt(), DHc = S(10, null), MHc = S(11, null), PHc = S(12, null), mrs = class extends E3 {
    constructor(e){
        super({
            icon: Pe.caseSensitive,
            title: DHc + e.appendTitle,
            isChecked: e.isChecked,
            hoverDelegate: e.hoverDelegate ?? ih("element"),
            inputActiveOptionBorder: e.inputActiveOptionBorder,
            inputActiveOptionForeground: e.inputActiveOptionForeground,
            inputActiveOptionBackground: e.inputActiveOptionBackground
        });
    }
}, grs = class extends E3 {
    constructor(e){
        super({
            icon: Pe.wholeWord,
            title: MHc + e.appendTitle,
            isChecked: e.isChecked,
            hoverDelegate: e.hoverDelegate ?? ih("element"),
            inputActiveOptionBorder: e.inputActiveOptionBorder,
            inputActiveOptionForeground: e.inputActiveOptionForeground,
            inputActiveOptionBackground: e.inputActiveOptionBackground
        });
    }
}, frs = class extends E3 {
    constructor(e){
        super({
            icon: Pe.regex,
            title: PHc + e.appendTitle,
            isChecked: e.isChecked,
            hoverDelegate: e.hoverDelegate ?? ih("element"),
            inputActiveOptionBorder: e.inputActiveOptionBorder,
            inputActiveOptionForeground: e.inputActiveOptionForeground,
            inputActiveOptionBackground: e.inputActiveOptionBackground
        });
    }
};

}
