import { hv } from "./glass-file-service.js";
import { OG } from "./glass-workspaces-management-service.js";
import { pce } from "./glass-workspaces-service.contract.js";
import { ZNv } from "./palette-workspace-attribution.js";
import { L_ } from "./projectService.js";
import { HIi } from "./recentlyOpenedWorkspaceProjects.js";
import { E } from "./tslib.es6.js";
import { WPs } from "./use-palette-files.react.js";
import { $h } from "./use-reactive.react_2.js";
import { w_ } from "./use-service-event-state.react_2.js";
import { In } from "./use-service.react_2.js";
import { Lh } from "./workspaceMetadataService.js";
var Fic, JNv, Bic;
export { Bic, Fic, JNv };
var __wakaru_F60_initialized = false;
export function F60() {
if (__wakaru_F60_initialized) return;
__wakaru_F60_initialized = true;
"use strict";
E(), L_(), HIi(), Lh(), hv(), pce(), OG(), ZNv(), WPs(), $h(), In(), w_(), Fic = 12, JNv = new Map, Bic = {
    value: [],
    onChange: ()=>({
            dispose: ()=>{}
        })
};

}
