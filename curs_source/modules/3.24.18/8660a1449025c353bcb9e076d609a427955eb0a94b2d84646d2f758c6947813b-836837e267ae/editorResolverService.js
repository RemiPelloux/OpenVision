import { D } from "./Iwo.js";
import { jn } from "./SZu.js";
import { Vg, gp } from "./configurationRegistry.js";
import { qpe, sF } from "./configuration_2.js";
import { NB } from "./glob.js";
import { It } from "./instantiation.js";
import { Ki } from "./network.js";
import { Bt } from "./nls.js";
import { Ul } from "./path_2.js";
import { Eo, Fi } from "./platform_2.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
var M6, npl, ckg, ukg, c0;
export { M6, c0, ckg, npl, ukg };
var __wakaru_D6_initialized = false;
export function D6() {
if (__wakaru_D6_initialized) return;
__wakaru_D6_initialized = true;
"use strict";
E(), NB(), Ki(), Ul(), Lr(), Bt(), sF(), Vg(), It(), Eo(), M6 = jn("editorResolverService"), npl = "workbench.editorAssociations", ckg = Fi.as(gp.Configuration), ukg = {
    ...qpe,
    properties: {
        "workbench.editorAssociations": {
            type: "object",
            markdownDescription: D(12404, null),
            additionalProperties: {
                type: "string"
            }
        }
    }
}, ckg.registerConfiguration(ukg), c0 = ((t)=>(t.builtin = "builtin", t.option = "option", t.exclusive = "exclusive", t.default = "default", t))(c0 || {});

}
