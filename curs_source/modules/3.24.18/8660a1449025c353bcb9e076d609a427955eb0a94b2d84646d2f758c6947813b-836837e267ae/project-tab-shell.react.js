import { Nl0, jmv } from "./Asv.js";
import { Ss } from "./aiMiscServices.js";
import { mv } from "./editor-panel-context.react.js";
import { k_ } from "./editor-panel-tab-kind.js";
import { Mt } from "./index_197.js";
import { Dcv } from "./kept-project-tabs.react.js";
import { ip } from "./metricsService.js";
import { Exl } from "./pr-lifecycle-polling.react.js";
import { Vcv } from "./project-notes-find-slot.react.js";
import { Ht0 } from "./project-notes-header.react.js";
import { Kt0 } from "./project-notes-only-context-toggle.react.js";
import { ELn } from "./project-overview-source.js";
import { Al0 } from "./project-tab-content.react.js";
import { MIs } from "./project-tab-header.react.js";
import { E } from "./tslib.es6.js";
import { kF } from "./use-agent-workspace.react.js";
import { RLn } from "./use-project-app-section-options.react.js";
import { Jcv } from "./use-project-notes-view-mode.react.js";
import { rn0 } from "./use-project-section-switch-timing.react.js";
import { In } from "./use-service.react_2.js";
import { Cu } from "./workspaceCollectionService.js";
import { lazy as Rl0 } from "./react-runtime/react/esm-index-production.js";
var Gmv, CVl, TVl, qmv, zmv;
export { CVl, Gmv, TVl, qmv, zmv };
var __wakaru_Ol0_initialized = false;
export function Ol0() {
if (__wakaru_Ol0_initialized) return;
__wakaru_Ol0_initialized = true;
"use strict";
E(), Mt(), Ss(), ip(), Exl(), Cu(), kF(), In(), k_(), mv(), Dcv(), Ht0(), Vcv(), Jcv(), Kt0(), ELn(), MIs(), RLn(), rn0(), Gmv = "notes-only-pinned", TVl = ()=>(CVl ??= Promise.resolve().then(()=>(Al0(), jmv)).then((t)=>t.ProjectTabContent).catch((t)=>{
        throw CVl = void 0, t;
    }), CVl), qmv = Rl0(async ()=>({
        default: await TVl()
    })), zmv = Object.assign(Nl0, {
    preload: TVl
});

}
