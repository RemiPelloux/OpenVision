import { Ei } from "./Iwo.js";
import { jm } from "./command-ids.js";
import { wS } from "./displayHelpers.js";
import { cS } from "./glass-clipboard-service.js";
import { yp } from "./glass-command-service.js";
import { zc } from "./glass-notification-service.js";
import { OG } from "./glass-workspaces-management-service.js";
import { vMs } from "./index_230.js";
import { HNi } from "./multiRootWorkspaceFileService.js";
import { HDv } from "./remote-workspace-modal-shell.react.js";
import { nic } from "./ssh-add-workspace-helpers.js";
import { E } from "./tslib.es6.js";
import { r1 } from "./use-command-bridge.react.js";
import { oic } from "./use-remote-workspace-connect-flow.react.js";
import { In } from "./use-service.react_2.js";
import { fL0 } from "./use-ssh-hosts.react.js";
import { cm } from "./workspace-helpers.js";
var kMs;
export { kMs };
var __wakaru_YDv_initialized = false;
export function YDv() {
if (__wakaru_YDv_initialized) return;
__wakaru_YDv_initialized = true;
"use strict";
E(), OG(), Ei(), wS(), HNi(), jm(), r1(), In(), fL0(), cS(), yp(), zc(), cm(), vMs(), HDv(), nic(), oic(), kMs = (t)=>t.startsWith("vscode-remote://") ? t.slice(16) : t.startsWith("ssh-remote+") ? t : `ssh-remote+${t}`;

}
