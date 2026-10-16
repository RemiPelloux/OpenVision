import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { _ze } from "./browser_2.ts";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { KXm, wX } from "./gYa.js";
import { It } from "./instantiation.js";
import { Rd, ih } from "./pathService.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { C2 } from "./workspaceProjectPaths.js";
var I2i, Mms;
export { I2i, Mms };
var __wakaru_Dms_initialized = false;
export function Dms() {
if (__wakaru_Dms_initialized) return;
__wakaru_Dms_initialized = true;
"use strict";
E(), _ze(), Qe(), fn(), ms(), Rn(), It(), Sr(), ih(), C2(), I2i = jn("agentTranscriptService"), Mms = class extends st {
    constructor(t, e, n){
        super(), this.workspaceContextService = t, this.pathService = e, this.fileService = n, this._isDisposed = !1;
    }
    async readPrimaryTranscript(t) {
        if (this._isDisposed) return;
        const e = this.workspaceContextService.getWorkspace(), n = await wX(e, this.pathService), i = KXm({
            conversationId: t,
            kind: "primary",
            exts: [
                "jsonl"
            ],
            includeLegacy: !0
        });
        for (const r of i){
            if (this._isDisposed) return;
            const s = r.split("/").filter(Boolean);
            if (s.length === 0) continue;
            const o = rt.joinPath(n, ...s);
            try {
                return (await this.fileService.readFile(o)).value.toString();
            } catch  {}
        }
    }
    dispose() {
        this._isDisposed = !0, super.dispose();
    }
}, Mms = Re([
    F(0, yr),
    F(1, Rd),
    F(2, is)
], Mms), bn(I2i, Mms, 0, 0);

}
