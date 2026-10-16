import { At } from "./Iwo.js";
import { Wo, gr } from "./editorService.js";
import { vle } from "./environmentService_3.js";
import { Bt } from "./nls.js";
import { hu } from "./productService.js";
import { Zi } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
var orl, Pze, Xis, Zis;
export { Pze, Xis, Zis, orl };
var __wakaru_VTi_initialized = false;
export function VTi() {
if (__wakaru_VTi_initialized) return;
__wakaru_VTi_initialized = true;
"use strict";
E(), fn(), Bt(), hu(), Zi(), Wo(), vle(), orl = rt.parse("trustedDomains:/Trusted Domains"), Pze = "http.linkProtectionTrustedDomains", Xis = "http.linkProtectionTrustedDomainsContent", Zis = {
    id: "workbench.action.manageTrustedDomain",
    description: {
        description: At(11450, "Manage Trusted Domains"),
        args: []
    },
    handler: async (t)=>{
        t.get(gr).openEditor({
            resource: orl,
            languageId: "jsonc",
            options: {
                pinned: !0
            }
        });
    }
};

}
