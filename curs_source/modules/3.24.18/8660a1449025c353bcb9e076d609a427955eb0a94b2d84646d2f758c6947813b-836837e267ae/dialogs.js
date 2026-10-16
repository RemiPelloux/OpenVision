import { D, Di } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { Nx } from "./ipa.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { Lr } from "./resources.js";
import { Ua, ob } from "./severity_2.js";
import { E } from "./tslib.es6.js";
var hd, EFa, NS, JSi;
export { EFa, JSi, NS, hd };
var __wakaru_bd_initialized = false;
export function bd() {
if (__wakaru_bd_initialized) return;
__wakaru_bd_initialized = true;
"use strict";
E(), Lr(), ob(), Bt(), It(), Nx(), Di(), cp(), hd = jn("dialogService"), EFa = class {
    getConfirmationButtons(t) {
        return this.getButtons(t, 1);
    }
    getPromptButtons(t) {
        return this.getButtons(t, 2);
    }
    getInputButtons(t) {
        return this.getButtons(t, 3);
    }
    getButtons(t, e) {
        const n = [];
        switch(e){
            case 1:
                {
                    const i = t;
                    i.primaryButton ? n.push(i.primaryButton) : n.push(D(1846, null)), i.cancelButton ? n.push(i.cancelButton) : n.push(D(1847, null));
                    break;
                }
            case 2:
                {
                    const i = t;
                    Array.isArray(i.buttons) && i.buttons.length > 0 && n.push(...i.buttons.map((r)=>r.label)), i.cancelButton && (i.cancelButton === !0 ? n.push(D(1848, null)) : typeof i.cancelButton == "string" ? n.push(i.cancelButton) : i.cancelButton.label ? n.push(i.cancelButton.label) : n.push(D(1849, null))), n.length === 0 && n.push(D(1850, null));
                    break;
                }
            case 3:
                {
                    const i = t;
                    i.primaryButton ? n.push(i.primaryButton) : n.push(D(1851, null)), i.cancelButton ? n.push(i.cancelButton) : n.push(D(1852, null));
                    break;
                }
        }
        return n;
    }
    getDialogType(t) {
        if (typeof t == "string") return t;
        if (typeof t == "number") return t === Ua.Info ? "info" : t === Ua.Error ? "error" : t === Ua.Warning ? "warning" : "none";
    }
    getPromptResult(t, e, n) {
        const i = [
            ...t.buttons ?? []
        ];
        t.cancelButton && typeof t.cancelButton != "string" && typeof t.cancelButton != "boolean" && i.push(t.cancelButton);
        let r = i[e]?.run({
            checkboxChecked: n
        });
        return r instanceof Promise || (r = Promise.resolve(r)), {
            result: r,
            checkboxChecked: n
        };
    }
}, NS = jn("fileDialogService"), JSi = 10;

}
