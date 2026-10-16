import { Ae, S } from "./HVr.js";
import { Pe, _i } from "./codicons.js";
import { At, dn } from "./contextkey.js";
import { dh } from "./iconRegistry.js";
import { Ze } from "./instantiation.js";
import { rt } from "./nls.js";
import { Pi, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
var q_, Z_e, SBn, Exo, Zjt, dPh, xxo, _Le, Ixo, Der, Mer, hPh, bLe;
export { Der, Exo, Ixo, Mer, SBn, Z_e, Zjt, _Le, bLe, dPh, hPh, q_, xxo };
var __wakaru_py_initialized = false;
export function py() {
if (__wakaru_py_initialized) return;
__wakaru_py_initialized = true;
"use strict";
x(), rt(), Ze(), dn(), Qt(), dh(), _i(), q_ = vn("IUserDataProfileService"), Z_e = vn("IUserDataProfileManagementService"), SBn = "profile", Exo = "profile-", Zjt = vn("IUserDataProfileImportExportService"), dPh = Pi("defaultProfile-icon", Pe.settings, S(13332, null)), xxo = Ae(13334, "Profiles"), _Le = {
    ...xxo
}, Ixo = "code-profile", Der = [
    {
        name: S(13333, null),
        extensions: [
            Ixo
        ]
    }
], Mer = new At("currentProfile", ""), hPh = new At("isCurrentProfileTransient", !1), bLe = new At("hasProfiles", !1);

}
