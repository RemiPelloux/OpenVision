import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { $s, Ci, Sm } from "./color.js";
import { YC, kM } from "./editorWorker.js";
import { Jc, kh } from "./languageFeatures.js";
import { x } from "./tslib.es6.js";
var WFt, Eyi;
export { Eyi, WFt };
var __wakaru_Mis_initialized = false;
export function Mis() {
if (__wakaru_Mis_initialized) return;
__wakaru_Mis_initialized = true;
"use strict";
x(), Sm(), Se(), kh(), kM(), WFt = class {
    constructor(e){
        this._editorWorkerService = e;
    }
    async provideDocumentColors(e, t) {
        return this._editorWorkerService.computeDefaultDocumentColors(e.uri);
    }
    provideColorPresentations(e, t, n) {
        const i = t.range, r = t.color, s = r.alpha, o = new Ci(new $s(Math.round(255 * r.red), Math.round(255 * r.green), Math.round(255 * r.blue), s)), a = s ? Ci.Format.CSS.formatRGB(o) : Ci.Format.CSS.formatRGBA(o), c = s ? Ci.Format.CSS.formatHSL(o) : Ci.Format.CSS.formatHSLA(o), l = s ? Ci.Format.CSS.formatHex(o) : Ci.Format.CSS.formatHexA(o), u = [];
        return u.push({
            label: a,
            textEdit: {
                range: i,
                text: a
            }
        }), u.push({
            label: c,
            textEdit: {
                range: i,
                text: c
            }
        }), u.push({
            label: l,
            textEdit: {
                range: i,
                text: l
            }
        }), u;
    }
}, WFt = ie([
    C(0, YC)
], WFt), Eyi = class extends we {
    constructor(e, t){
        super(), this._register(e.colorProvider.register("*", new WFt(t)));
    }
}, Eyi = ie([
    C(0, Jc),
    C(1, YC)
], Eyi);

}
