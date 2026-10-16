import { Gr } from "./Ycg.js";
import { CCe, Dpe, _X } from "./mcpConstants.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { pi, vt } from "./ze.js";
var O0l;
export { O0l };
var __wakaru_nJg_initialized = false;
export function nJg() {
if (__wakaru_nJg_initialized) return;
__wakaru_nJg_initialized = true;
"use strict";
E(), pi(), CCe(), vo(), O0l = (t)=>{
    const e = Gr();
    return vt(()=>({
            supportsGit: !0,
            supportsPlaywrightMcp: (()=>{
                try {
                    return (e.mcpService?.allServers?.() ?? []).some((r)=>{
                        const s = r.name?.toLowerCase()?.includes(_X), o = r.url?.toLowerCase()?.includes(_X), a = r.identifier === Dpe || r.name === Dpe;
                        return !!(s || o || a);
                    });
                } catch  {
                    return !1;
                }
            })(),
            supportsLink: !0,
            supportsCursorRules: !0,
            supportsCursorCommands: !0,
            supportsSkills: !0,
            supportsSubagents: !0,
            supportsNotepads: !0,
            supportsComposers: t(),
            supportsFilesAndFolders: !0,
            supportsFiles: !1,
            supportsTerminal: !0,
            supportsReviewChanges: !0,
            supportsWorkflows: !0,
            supportsProjects: !0
        }));
};

}
