import { S, jn } from "./HVr.js";
import { Op } from "./accessibility.js";
import { Wde } from "./accessibilityConfiguration.js";
import { Vo, er } from "./actions.js";
import { C, ei, ie } from "./actions_2.js";
import { Ar } from "./cancellation.js";
import { md } from "./codeEditorService.js";
import { _i } from "./codicons.js";
import { vi } from "./commands.js";
import { Cn } from "./configuration.js";
import { lG } from "./configurationResolver.js";
import { SCt } from "./configurationResolverExpression.js";
import { dn, he } from "./contextkey.js";
import { en } from "./dom_2.js";
import { e4 } from "./editorCommands.js";
import { vTe } from "./editorGroupColumn.js";
import { Nc } from "./editorGroupsService.js";
import { Ni } from "./editorService.js";
import { Vr } from "./environmentService.js";
import { Fi } from "./files.js";
import { WM } from "./getIconClasses.js";
import { Eg } from "./iterator.js";
import { Pr } from "./keyCodes.js";
import { yu } from "./label.js";
import { kl } from "./language.js";
import { km } from "./listService.js";
import { Ll } from "./model.js";
import { li } from "./network.js";
import { rt } from "./nls.js";
import { ji } from "./notification.js";
import { eo, ko } from "./opener.js";
import { ba } from "./path_2.js";
import { tk } from "./preferences.js";
import { Ya } from "./quickInput.js";
import { Ip } from "./remoteAgentService.js";
import { Li } from "./resources.js";
import { ng } from "./terminal.js";
import { Er, Gx } from "./terminalContextKey.js";
import { L0t } from "./terminalContextMenu.js";
import { C8e } from "./terminalContribExports.js";
import { c7e } from "./terminalIcon.js";
import { hzt } from "./terminalIcons.js";
import { Dnr } from "./terminalProfiles.js";
import { Lm, mhe } from "./terminalStrings_2.js";
import { F5h } from "./terminalTabsList.js";
import { fw } from "./terminal_2.js";
import { hT } from "./terminal_3.js";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Qt } from "./uri.js";
import { ci } from "./workspace.js";
import { zqt } from "./workspaceCommands.js";
var KDo, YDo, V5h, Qv, Eir;
export { Eir, KDo, Qv, V5h, YDo };
var __wakaru_sB_initialized = false;
export function sB() {
if (__wakaru_sB_initialized) return;
__wakaru_sB_initialized = true;
"use strict";
x(), en(), Vo(), Ar(), _i(), Eg(), Pr(), li(), ba(), jn(), Li(), gr(), Qt(), md(), kl(), WM(), Ll(), rt(), Op(), ei(), vi(), Cn(), dn(), Fi(), yu(), km(), ji(), ko(), Ya(), fw(), Dnr(), as(), ci(), zqt(), e4(), lG(), SCt(), vTe(), Nc(), Ni(), Vr(), tk(), Ip(), Wde(), hT(), Gx(), mhe(), ng(), L0t(), c7e(), hzt(), F5h(), C8e(), KDo = "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500", YDo = S(10206, null), V5h = Lm.actionCategory, Qv = (()=>{
    const e = he.or(Er.processSupported, Er.terminalHasBeenCreated);
    return {
        terminalAvailable: e,
        terminalAvailable_and_opened: he.and(e, Er.isOpen),
        terminalAvailable_and_editorActive: he.and(e, Er.terminalEditorActive),
        terminalAvailable_and_singularSelection: he.and(e, Er.tabsSingularSelection),
        focusInAny_and_normalBuffer: he.and(Er.focusInAny, Er.altBufferActive.negate())
    };
})(), Eir = class extends er {
    constructor(e){
        super("workbench.action.terminal.launchHelp", S(10208, null)), this._openerService = e;
    }
    async run() {
        this._openerService.open("https://aka.ms/vscode-troubleshoot-terminal-launch");
    }
}, Eir = ie([
    C(0, eo)
], Eir);

}
