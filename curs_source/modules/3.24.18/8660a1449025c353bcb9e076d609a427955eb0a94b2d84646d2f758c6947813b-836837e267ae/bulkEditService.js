import { wf } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
var x5e, Eoi, aRe, lB;
export { Eoi, aRe, lB, x5e };
var __wakaru_Uj_initialized = false;
export function Uj() {
if (__wakaru_Uj_initialized) return;
__wakaru_Uj_initialized = true;
"use strict";
E(), It(), fn(), To(), x5e = jn("IWorkspaceEditService"), Eoi = class {
    constructor(t){
        this.metadata = t;
    }
    static convert(t) {
        return t.edits.map((e)=>{
            if (aRe.is(e)) return aRe.lift(e);
            if (lB.is(e)) return lB.lift(e);
            throw new Error("Unsupported edit");
        });
    }
}, aRe = class cXs extends Eoi {
    constructor(e, n, i = void 0, r){
        super(r), this.resource = e, this.textEdit = n, this.versionId = i;
    }
    static is(e) {
        return e instanceof cXs ? !0 : wf(e) && rt.isUri(e.resource) && wf(e.textEdit);
    }
    static lift(e) {
        return e instanceof cXs ? e : new cXs(e.resource, e.textEdit, e.versionId, e.metadata);
    }
}, lB = class uXs extends Eoi {
    constructor(e, n, i = {}, r){
        super(r), this.oldResource = e, this.newResource = n, this.options = i;
    }
    static is(e) {
        return e instanceof uXs ? !0 : wf(e) && (!!e.newResource || !!e.oldResource);
    }
    static lift(e) {
        return e instanceof uXs ? e : new uXs(e.oldResource, e.newResource, e.options, e.metadata);
    }
};

}
