import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { n8e } from "./cgh.js";
import { hoe } from "./composerUriUtils.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { Nl, bc } from "./resolverService.js";
import { x } from "./tslib.es6.js";
import { Jn, ci } from "./workspace.js";
var H_e, cXi;
export { H_e, cXi };
var __wakaru_YPe_initialized = false;
export function YPe() {
if (__wakaru_YPe_initialized) return;
__wakaru_YPe_initialized = true;
"use strict";
x(), Se(), Nl(), Pn(), Ze(), ci(), hoe(), H_e = vn("composerTextModelService"), cXi = class extends we {
    constructor(e, t){
        super(), this._textModelService = e, this._workspaceContextService = t;
    }
    async createModelReference(e, t, n) {
        const i = this.getURIForComposer(e, t);
        return this._textModelService.createModelReference(i, n);
    }
    registerTextModelContentProvider(e, t) {
        return this._textModelService.registerTextModelContentProvider(e, t);
    }
    getURIForComposer(e, t) {
        return n8e(e, t, this._workspaceContextService);
    }
    dispose() {
        super.dispose();
    }
}, cXi = ie([
    C(0, bc),
    C(1, Jn)
], cXi), mn(H_e, cXi, 2);

}
