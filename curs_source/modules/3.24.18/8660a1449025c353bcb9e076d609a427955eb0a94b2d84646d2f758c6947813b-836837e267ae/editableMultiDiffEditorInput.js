import { It, dn } from "./instantiation.js";
import { SG, U2n } from "./multiDiffEditorInput.js";
import { F2n, SKt, kKt } from "./multiDiffSourceResolverService.js";
import { Em, Rh } from "./resolverService.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { Vf, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
var vtn;
export { vtn };
var __wakaru_gNC_initialized = false;
export function gNC() {
if (__wakaru_gNC_initialized) return;
__wakaru_gNC_initialized = true;
"use strict";
E(), It(), U2n(), fn(), kKt(), u_(), Em(), FC(), kKt(), vtn = class extends SG {
    constructor(t, e, n, i = !1, r, s, o, a, l){
        super(t, e, n, i, r, s, o, a, l), this.textFileService = l;
    }
    get capabilities() {
        return 0;
    }
    get typeId() {
        return vtn.ID;
    }
    async save(t, e) {
        return await super.save(t, e), this;
    }
    static fromResourceMultiDiffEditorInput(t, e) {
        const n = t.multiDiffSource ?? rt.parse(`multi-diff-editor:${new Date().getMilliseconds().toString() + Math.random().toString()}`);
        return e.createInstance(vtn, n, t.label, t.resources?.map((i)=>new SKt(i.original.resource, i.modified.resource, i.goToFileResource)), t.isTransient ?? !1);
    }
}, vtn.ID = "workbench.input.editableMultiDiffEditor", vtn = Re([
    F(4, Rh),
    F(5, Mw),
    F(6, dn),
    F(7, F2n),
    F(8, Vf)
], vtn);

}
