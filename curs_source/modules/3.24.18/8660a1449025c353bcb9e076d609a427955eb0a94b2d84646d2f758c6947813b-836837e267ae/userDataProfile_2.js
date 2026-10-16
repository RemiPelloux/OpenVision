import { At, D } from "./Iwo.js";
import { jn } from "./SZu.js";
import { gs, yt } from "./codicons.js";
import { Hi, cn } from "./contextkey.js";
import { b_ } from "./iconRegistry.js";
import { It } from "./instantiation.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { qa } from "./ze.js";
var Lw, dls, JIi, Vdl, hls, nCk, Jyg, eSg, Kdl, Ydl, tSg, iCk, rCk;
export { JIi, Jyg, Kdl, Lw, Vdl, Ydl, dls, eSg, hls, iCk, nCk, rCk, tSg };
var __wakaru_F0_initialized = false;
export function F0() {
if (__wakaru_F0_initialized) return;
__wakaru_F0_initialized = true;
"use strict";
E(), Bt(), It(), Hi(), fn(), b_(), gs(), Lw = jn("IUserDataProfileService"), dls = jn("IUserDataProfileManagementService"), JIi = "profile", Vdl = "profile-", hls = jn("IUserDataProfileImportExportService"), nCk = qa("defaultProfile-icon", yt.settings, D(13332, null)), Jyg = At(13334, "Profiles"), eSg = {
    ...Jyg
}, Kdl = "code-profile", Ydl = [
    {
        name: D(13333, null),
        extensions: [
            Kdl
        ]
    }
], tSg = new cn("currentProfile", ""), iCk = new cn("isCurrentProfileTransient", !1), rCk = new cn("hasProfiles", !1);

}
