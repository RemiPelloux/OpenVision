import { sT } from "./De_3.js";
import { S, jn } from "./HVr.js";
import { Ze } from "./instantiation.js";
import { rt } from "./nls.js";
import { bu } from "./objects.js";
import { vn } from "./qIc.js";
import { Li } from "./resources.js";
import { Kp, Us } from "./severity_2.js";
import { x } from "./tslib.es6.js";
var wc, wXs, lv, KMn;
export { KMn, lv, wXs, wc };
var __wakaru_Fc_initialized = false;
export function Fc() {
if (__wakaru_Fc_initialized) return;
__wakaru_Fc_initialized = true;
"use strict";
x(), Li(), Kp(), rt(), Ze(), sT(), jn(), bu(), wc = vn("dialogService"), wXs = class {
    getConfirmationButtons(e) {
        return this.getButtons(e, 1);
    }
    getPromptButtons(e) {
        return this.getButtons(e, 2);
    }
    getInputButtons(e) {
        return this.getButtons(e, 3);
    }
    getButtons(e, t) {
        const n = [];
        switch(t){
            case 1:
                {
                    const i = e;
                    i.primaryButton ? n.push(i.primaryButton) : n.push(S(1846, null)), i.cancelButton ? n.push(i.cancelButton) : n.push(S(1847, null));
                    break;
                }
            case 2:
                {
                    const i = e;
                    Array.isArray(i.buttons) && i.buttons.length > 0 && n.push(...i.buttons.map((r)=>r.label)), i.cancelButton && (i.cancelButton === !0 ? n.push(S(1848, null)) : typeof i.cancelButton == "string" ? n.push(i.cancelButton) : i.cancelButton.label ? n.push(i.cancelButton.label) : n.push(S(1849, null))), n.length === 0 && n.push(S(1850, null));
                    break;
                }
            case 3:
                {
                    const i = e;
                    i.primaryButton ? n.push(i.primaryButton) : n.push(S(1851, null)), i.cancelButton ? n.push(i.cancelButton) : n.push(S(1852, null));
                    break;
                }
        }
        return n;
    }
    getDialogType(e) {
        if (typeof e == "string") return e;
        if (typeof e == "number") return e === Us.Info ? "info" : e === Us.Error ? "error" : e === Us.Warning ? "warning" : "none";
    }
    getPromptResult(e, t, n) {
        const i = [
            ...e.buttons ?? []
        ];
        e.cancelButton && typeof e.cancelButton != "string" && typeof e.cancelButton != "boolean" && i.push(e.cancelButton);
        let r = i[t]?.run({
            checkboxChecked: n
        });
        return r instanceof Promise || (r = Promise.resolve(r)), {
            result: r,
            checkboxChecked: n
        };
    }
}, lv = vn("fileDialogService"), KMn = 10;

}
