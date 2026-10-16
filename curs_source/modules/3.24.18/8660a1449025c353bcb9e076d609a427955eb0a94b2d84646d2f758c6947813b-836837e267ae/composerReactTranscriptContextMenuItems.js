import { Ei } from "./Iwo.js";
import { iS } from "./adminSettingsService.js";
import { mN } from "./agentLinks.js";
import { F4e } from "./agentWorkspaceResolutionConstants.js";
import { Ss } from "./aiMiscServices.js";
import { Dc } from "./aiService.js";
import { $Sf } from "./artifactVideoDownload.js";
import { rp } from "./bcIdFromAuthority.js";
import { kl } from "./browser.ts";
import { VPl } from "./chatFileReferenceContextMenu.js";
import { bb } from "./clipboardService.js";
import { Rme } from "./cloudAgentPullRequestUtils.js";
import { Nw } from "./cloudEnvironmentTemplateService.js";
import { rs } from "./commands.js";
import { bd } from "./dialogs.js";
import { USf } from "./downloadMedia.js";
import { _s } from "./experimentService.js";
import { OSf } from "./fileLinkContextMenu.js";
import { ms } from "./files.js";
import { siw } from "./hostContextMenuDefer.js";
import { Hms } from "./imageSourceToPngBytes.js";
import { Mt } from "./index_197.js";
import { Ki } from "./network.js";
import { Ks } from "./notification.js";
import { qc } from "./opener.js";
import { ih } from "./pathService.js";
import { Mk } from "./pullRequestIdentity.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { Cu } from "./workspaceCollectionService.js";
import { OJ } from "./workspaceRefHelpers.js";
var XPl, qSf, zSf;
export { XPl, qSf, zSf };
var __wakaru_ZPl_initialized = false;
export function ZPl() {
if (__wakaru_ZPl_initialized) return;
__wakaru_ZPl_initialized = true;
"use strict";
E(), Mt(), kl(), rp(), Ki(), fn(), bb(), rs(), bd(), ms(), Ks(), Ks(), qc(), mN(), Rme(), OJ(), F4e(), Mk(), Ss(), Dc(), iS(), _s(), Ei(), Nw(), VPl(), OSf(), ih(), USf(), $Sf(), Hms(), siw(), Cu(), XPl = {
    copy: "editor.action.clipboardCopyAction",
    selectAll: "editor.action.selectAll"
}, qSf = {
    message: "Copied pull request URL to clipboard",
    id: "glass.copy-pr-url"
}, zSf = {
    message: "Copied to clipboard",
    id: "glass.copy-generic"
};

}
