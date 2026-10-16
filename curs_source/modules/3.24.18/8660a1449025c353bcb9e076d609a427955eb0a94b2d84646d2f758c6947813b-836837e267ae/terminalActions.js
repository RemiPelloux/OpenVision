import { D, Di } from "./Iwo.js";
import { Ty } from "./accessibility.js";
import { mze } from "./accessibilityConfiguration.js";
import { vu, za } from "./actions.js";
import { es } from "./actions_2.js";
import { yo } from "./cancellation.js";
import { og } from "./codeEditorService.js";
import { gs } from "./codicons.js";
import { rs } from "./commands.js";
import { or } from "./configuration.js";
import { wle } from "./configurationResolver.js";
import { Vzt } from "./configurationResolverExpression.js";
import { Hi, mt } from "./contextkey.js";
import { Hn } from "./dom_2.js";
import { ZJ } from "./editorCommands.js";
import { PEt } from "./editorGroupColumn.js";
import { Ld } from "./editorGroupsService.js";
import { Wo } from "./editorService.js";
import { fo } from "./environmentService.js";
import { ms } from "./files.js";
import { EB } from "./getIconClasses.js";
import { IT } from "./iterator.js";
import { Ma } from "./keyCodes.js";
import { qg } from "./label.js";
import { Kp } from "./language.js";
import { d2 } from "./listService.js";
import { xp } from "./model.js";
import { Ki } from "./network.js";
import { Bt } from "./nls.js";
import { Ks } from "./notification.js";
import { kc, qc } from "./opener.js";
import { Ul } from "./path_2.js";
import { tD } from "./preferences.js";
import { Gu } from "./quickInput.js";
import { Sg } from "./remoteAgentService.js";
import { Lr } from "./resources.js";
import { Mv } from "./terminal.js";
import { QI, ns } from "./terminalContextKey.js";
import { f2n } from "./terminalContextMenu.js";
import { Nat } from "./terminalContribExports.js";
import { ZEt } from "./terminalIcon.js";
import { NAi } from "./terminalIcons.js";
import { tds } from "./terminalProfiles.js";
import { $f, dye } from "./terminalStrings_2.js";
import { FMk } from "./terminalTabsList.js";
import { UC } from "./terminal_2.js";
import { bR } from "./terminal_3.js";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Sr } from "./workspace.js";
import { pAi } from "./workspaceCommands.js";
var y2g, S2g, k2g, $y, qds;
export { $y, S2g, k2g, qds, y2g };
var __wakaru_yG_initialized = false;
export function yG() {
if (__wakaru_yG_initialized) return;
__wakaru_yG_initialized = true;
"use strict";
E(), Hn(), vu(), yo(), gs(), IT(), Ma(), Ki(), Ul(), Di(), Lr(), To(), fn(), og(), Kp(), EB(), xp(), Bt(), Ty(), es(), rs(), or(), Hi(), ms(), qg(), d2(), Ks(), qc(), Gu(), UC(), tds(), Dl(), Sr(), pAi(), ZJ(), wle(), Vzt(), PEt(), Ld(), Wo(), fo(), tD(), Sg(), mze(), bR(), QI(), dye(), Mv(), f2n(), ZEt(), NAi(), FMk(), Nat(), y2g = "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500", S2g = D(10206, null), k2g = $f.actionCategory, $y = (()=>{
    const t = mt.or(ns.processSupported, ns.terminalHasBeenCreated);
    return {
        terminalAvailable: t,
        terminalAvailable_and_opened: mt.and(t, ns.isOpen),
        terminalAvailable_and_editorActive: mt.and(t, ns.terminalEditorActive),
        terminalAvailable_and_singularSelection: mt.and(t, ns.tabsSingularSelection),
        focusInAny_and_normalBuffer: mt.and(ns.focusInAny, ns.altBufferActive.negate())
    };
})(), qds = class extends za {
    constructor(t){
        super("workbench.action.terminal.launchHelp", D(10208, null)), this._openerService = t;
    }
    async run() {
        this._openerService.open("https://aka.ms/vscode-troubleshoot-terminal-launch");
    }
}, qds = Re([
    F(0, kc)
], qds);

}
