import { S } from "./HVr.js";
import { iu, uh } from "./configurationRegistry.js";
import { NI, lq } from "./configuration_2.js";
import { qM } from "./glob.js";
import { Ze } from "./instantiation.js";
import { li } from "./network.js";
import { rt } from "./nls.js";
import { ba } from "./path_2.js";
import { kn, rr } from "./platform_2.js";
import { vn } from "./qIc.js";
import { Li } from "./resources.js";
import { x } from "./tslib.es6.js";
var HI, DIo, fNh, vNh, pb;
export { DIo, HI, fNh, pb, vNh };
var __wakaru_WI_initialized = false;
export function WI() {
if (__wakaru_WI_initialized) return;
__wakaru_WI_initialized = true;
"use strict";
x(), qM(), li(), ba(), Li(), rt(), NI(), uh(), Ze(), rr(), HI = vn("editorResolverService"), DIo = "workbench.editorAssociations", fNh = kn.as(iu.Configuration), vNh = {
    ...lq,
    properties: {
        "workbench.editorAssociations": {
            type: "object",
            markdownDescription: S(12404, null),
            additionalProperties: {
                type: "string"
            }
        }
    }
}, fNh.registerConfiguration(vNh), pb = ((e)=>(e.builtin = "builtin", e.option = "option", e.exclusive = "exclusive", e.default = "default", e))(pb || {});

}
