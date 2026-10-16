import { le, xr } from "./async.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { ZT } from "./nativeHostMainService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Rc, Wi } from "./userDataProfile_3.js";
import { ct, pt } from "./windows.js";
import { bn } from "./workspace.js";
var D1;
export { D1 };
var __wakaru_HZe_initialized = false;
export function HZe() {
if (__wakaru_HZe_initialized) return;
__wakaru_HZe_initialized = true;
"use strict";
h(), j(), Vt(), Rc(), bn(), le(), pt(), D1 = class extends J {
    constructor(e, t, n){
        super(), this.userDataProfilesService = t, this.windowsMainService = n, this._register(e.onWillLoadWindow((r)=>{
            r.reason === 2 && this.unsetProfileForWorkspace(r.window);
        })), this._register(e.onBeforeCloseWindow((r)=>this.unsetProfileForWorkspace(r))), this._register(new xr(()=>this.cleanUpEmptyWindowAssociations(), 30 * 1e3)).schedule();
    }
    async unsetProfileForWorkspace(e) {
        const t = this.getWorkspace(e), n = this.userDataProfilesService.getProfileForWorkspace(t);
        n?.isTransient && (this.userDataProfilesService.unsetWorkspace(t, n.isTransient), n.isTransient && await this.userDataProfilesService.cleanUpTransientProfiles());
    }
    getWorkspace(e) {
        return e.openedWorkspace ?? ZT(e.backupPath, e.isExtensionDevelopmentHost);
    }
    cleanUpEmptyWindowAssociations() {
        const e = this.userDataProfilesService.getAssociatedEmptyWindows();
        if (e.length === 0) return;
        const t = this.windowsMainService.getWindows().map((n)=>this.getWorkspace(n));
        for (const n of e)t.some((r)=>r.id === n.id) || this.userDataProfilesService.unsetWorkspace(n, !1);
    }
}, D1 = B([
    w(0, ht),
    w(1, Wi),
    w(2, ct)
], D1);

}
