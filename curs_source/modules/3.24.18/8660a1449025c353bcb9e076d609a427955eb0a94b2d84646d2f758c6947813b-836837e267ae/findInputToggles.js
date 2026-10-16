import { D } from "./Iwo.js";
import { gs, yt } from "./codicons.js";
import { Bt } from "./nls.js";
import { M5e, che } from "./toggle.js";
import { E } from "./tslib.es6.js";
import { c2, sR } from "./ze.js";
var wKd, CKd, TKd, Hzo, Wzo, Gzo;
export { CKd, Gzo, Hzo, TKd, Wzo, wKd };
var __wakaru_EKd_initialized = false;
export function EKd() {
if (__wakaru_EKd_initialized) return;
__wakaru_EKd_initialized = true;
"use strict";
E(), sR(), M5e(), gs(), Bt(), wKd = D(10, null), CKd = D(11, null), TKd = D(12, null), Hzo = class extends che {
    constructor(t){
        super({
            icon: yt.caseSensitive,
            title: wKd + t.appendTitle,
            isChecked: t.isChecked,
            hoverDelegate: t.hoverDelegate ?? c2("element"),
            inputActiveOptionBorder: t.inputActiveOptionBorder,
            inputActiveOptionForeground: t.inputActiveOptionForeground,
            inputActiveOptionBackground: t.inputActiveOptionBackground
        });
    }
}, Wzo = class extends che {
    constructor(t){
        super({
            icon: yt.wholeWord,
            title: CKd + t.appendTitle,
            isChecked: t.isChecked,
            hoverDelegate: t.hoverDelegate ?? c2("element"),
            inputActiveOptionBorder: t.inputActiveOptionBorder,
            inputActiveOptionForeground: t.inputActiveOptionForeground,
            inputActiveOptionBackground: t.inputActiveOptionBackground
        });
    }
}, Gzo = class extends che {
    constructor(t){
        super({
            icon: yt.regex,
            title: TKd + t.appendTitle,
            isChecked: t.isChecked,
            hoverDelegate: t.hoverDelegate ?? c2("element"),
            inputActiveOptionBorder: t.inputActiveOptionBorder,
            inputActiveOptionForeground: t.inputActiveOptionForeground,
            inputActiveOptionBackground: t.inputActiveOptionBackground
        });
    }
};

}
