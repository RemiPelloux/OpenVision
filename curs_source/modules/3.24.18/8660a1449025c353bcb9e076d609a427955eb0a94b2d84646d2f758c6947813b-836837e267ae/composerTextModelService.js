import { aat } from "./Aeg.js";
import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { $Ce } from "./composerUriUtils.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Em, Rh } from "./resolverService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
var HCe, Eis;
export { Eis, HCe };
var __wakaru_O4e_initialized = false;
export function O4e() {
if (__wakaru_O4e_initialized) return;
__wakaru_O4e_initialized = true;
"use strict";
E(), Qe(), Em(), Rn(), It(), Sr(), $Ce(), HCe = jn("composerTextModelService"), Eis = class extends st {
    constructor(t, e){
        super(), this._textModelService = t, this._workspaceContextService = e;
    }
    async createModelReference(t, e, n) {
        const i = this.getURIForComposer(t, e);
        return this._textModelService.createModelReference(i, n);
    }
    registerTextModelContentProvider(t, e) {
        return this._textModelService.registerTextModelContentProvider(t, e);
    }
    getURIForComposer(t, e) {
        return aat(t, e, this._workspaceContextService);
    }
    dispose() {
        super.dispose();
    }
}, Eis = Re([
    F(0, Rh),
    F(1, yr)
], Eis), bn(HCe, Eis, 2);

}
