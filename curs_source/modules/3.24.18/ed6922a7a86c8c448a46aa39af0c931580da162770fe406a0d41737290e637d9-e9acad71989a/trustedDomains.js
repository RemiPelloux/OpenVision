import { Ae } from "./HVr.js";
import { Ni, hn } from "./editorService.js";
import { zX } from "./environmentService_3.js";
import { rt } from "./nls.js";
import { Ka } from "./productService.js";
import { Vn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
var hko, JPe, IXi, AXi;
export { AXi, IXi, JPe, hko };
var __wakaru_WFn_initialized = false;
export function WFn() {
if (__wakaru_WFn_initialized) return;
__wakaru_WFn_initialized = true;
"use strict";
x(), Qt(), rt(), Ka(), Vn(), Ni(), zX(), hko = Ee.parse("trustedDomains:/Trusted Domains"), JPe = "http.linkProtectionTrustedDomains", IXi = "http.linkProtectionTrustedDomainsContent", AXi = {
    id: "workbench.action.manageTrustedDomain",
    description: {
        description: Ae(11450, "Manage Trusted Domains"),
        args: []
    },
    handler: async (e)=>{
        e.get(hn).openEditor({
            resource: hko,
            languageId: "jsonc",
            options: {
                pinned: !0
            }
        });
    }
};

}
