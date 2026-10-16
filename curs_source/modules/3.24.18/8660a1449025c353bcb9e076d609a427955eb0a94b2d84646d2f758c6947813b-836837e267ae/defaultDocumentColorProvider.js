import { Qe, st } from "./Iwo.js";
import { _b, la, ls } from "./color.js";
import { FD, yW } from "./editorWorker.js";
import { Dg, Nd } from "./languageFeatures.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Svn, SEr;
export { SEr, Svn };
var __wakaru_szo_initialized = false;
export function szo() {
if (__wakaru_szo_initialized) return;
__wakaru_szo_initialized = true;
"use strict";
E(), _b(), Qe(), Dg(), yW(), Svn = class {
    constructor(t){
        this._editorWorkerService = t;
    }
    async provideDocumentColors(t, e) {
        return this._editorWorkerService.computeDefaultDocumentColors(t.uri);
    }
    provideColorPresentations(t, e, n) {
        const i = e.range, r = e.color, s = r.alpha, o = new ls(new la(Math.round(255 * r.red), Math.round(255 * r.green), Math.round(255 * r.blue), s)), a = s ? ls.Format.CSS.formatRGB(o) : ls.Format.CSS.formatRGBA(o), l = s ? ls.Format.CSS.formatHSL(o) : ls.Format.CSS.formatHSLA(o), c = s ? ls.Format.CSS.formatHex(o) : ls.Format.CSS.formatHexA(o), u = [];
        return u.push({
            label: a,
            textEdit: {
                range: i,
                text: a
            }
        }), u.push({
            label: l,
            textEdit: {
                range: i,
                text: l
            }
        }), u.push({
            label: c,
            textEdit: {
                range: i,
                text: c
            }
        }), u;
    }
}, Svn = Re([
    F(0, FD)
], Svn), SEr = class extends st {
    constructor(t, e){
        super(), this._register(t.colorProvider.register("*", new Svn(e)));
    }
}, SEr = Re([
    F(0, Nd),
    F(1, FD)
], SEr);

}
