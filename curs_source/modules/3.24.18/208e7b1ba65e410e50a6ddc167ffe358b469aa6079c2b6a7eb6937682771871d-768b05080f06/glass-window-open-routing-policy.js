import { $ze, vpe } from "./glass-cli-folder-open-routing.js";
import { qze } from "./glass-external-workspace-open-policy.js";
import { $ } from "./network.js";
import { h } from "./tslib.es6.js";
import { rr } from "./userDataProfile.js";
import { io } from "./workspacesManagementMainService.js";
function cme(e) {
    return e !== "lastUsedWindows";
}
function Bze(e) {
    return Array.isArray(e) ? e.length > 0 : !!e;
}
function Gze(e) {
    return vpe.some((t)=>Bze(e[t]));
}
function _pe(e) {
    return !Gze(e.cli) && e.cursorForceNewWindow !== !0 && e.forceNewTabbedWindow !== !0 && e.forceProfile === void 0 && e.forceTempProfile !== !0;
}
function Vze(e) {
    return e.openContext === 0 && e.positionalArgCount === 1 && _pe({
        cli: e.cli
    }) && e.lastActiveIsGlass && e.isExistingDirectory;
}
function jze(e) {
    return rr(e?.workspace);
}
function Hze(e) {
    if (!e.source || !e.hasDefaultPathOpenIntent || e.routesToClassicWindow || e.isExtensionDevelopment || e.isSmokeTest || e.resolvedOpenTargets.length !== 1) return;
    const t = e.resolvedOpenTargets[0];
    if (!(!jze(t) || t.transient === !0 || t.remoteAuthority !== void 0 || t.workspace.configPath.scheme !== $.file || !io(t.workspace.configPath.path)) && !(!cme(e.preference) && !e.lastActiveIsGlass)) return t;
}
var Tpe;
export { Bze, Gze, Hze, Tpe, Vze, _pe, cme, jze };
var __wakaru_Kze_initialized = false;
export function Kze() {
if (__wakaru_Kze_initialized) return;
__wakaru_Kze_initialized = true;
"use strict";
h(), $ze(), qze(), Tpe = class {
    shouldRouteCliFolderOpenToAgentsWindow(e) {
        return Vze({
            openContext: e.openContext,
            positionalArgCount: e.positionalArgCount,
            cli: e.cli,
            lastActiveIsGlass: e.lastActiveWindowIsAgentsWindow,
            isExistingDirectory: e.isExistingDirectory
        });
    }
    selectExternalWorkspaceHandoff(e) {
        return Hze({
            source: e.source,
            hasDefaultPathOpenIntent: _pe({
                cli: e.cli,
                cursorForceNewWindow: e.cursorForceNewWindow,
                forceNewTabbedWindow: e.forceNewTabbedWindow,
                forceProfile: e.forceProfile,
                forceTempProfile: e.forceTempProfile
            }),
            resolvedOpenTargets: e.resolvedOpenTargets,
            preference: e.preference,
            lastActiveIsGlass: e.lastActiveWindowIsAgentsWindow,
            routesToClassicWindow: e.routesToClassicWindow,
            isExtensionDevelopment: e.isExtensionDevelopment,
            isSmokeTest: e.isSmokeTest
        });
    }
};

}
