import { Gt, Pn, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var Kme, wrv;
export { Kme, wrv };
var __wakaru_XTe_initialized = false;
export function XTe() {
if (__wakaru_XTe_initialized) return;
__wakaru_XTe_initialized = true;
"use strict";
E(), Gt(), Qe(), Rn(), It(), Kme = Il("glassActiveWorkspaceService"), wrv = class extends st {
    constructor(){
        super(...arguments), this._onDidChangeActiveWorkspace = this._register(new tt), this._onDidChangePreferredWorkspace = this._register(new tt), this.onDidChangeActiveWorkspace = this._onDidChangeActiveWorkspace.event, this.onDidChangePreferredWorkspace = this._onDidChangePreferredWorkspace.event, this._activeLeaseId = 0;
    }
    getActiveWorkspaceIdentifier() {
        return this._activeWorkspaceIdentifier;
    }
    getPreferredWorkspaceIdentifier() {
        return this._preferredWorkspaceIdentifier;
    }
    claimActiveWorkspace(t) {
        const e = ++this._activeLeaseId, i = this._activeWorkspaceIdentifier?.id;
        return this._activeWorkspaceIdentifier = t, i !== t.id && this._onDidChangeActiveWorkspace.fire(t), Pn(()=>{
            this._activeLeaseId === e && (this._activeLeaseId = 0, this._activeWorkspaceIdentifier !== void 0 && (this._activeWorkspaceIdentifier = void 0, this._onDidChangeActiveWorkspace.fire(void 0)));
        });
    }
    setPreferredWorkspaceIdentifier(t) {
        this._preferredWorkspaceIdentifier?.id !== t?.id && (this._preferredWorkspaceIdentifier = t, this._onDidChangePreferredWorkspace.fire(t));
    }
}, bn(Kme, wrv, 1, 1);

}
