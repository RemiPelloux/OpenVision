import { Ei } from "./Iwo.js";
import { cS } from "./glass-clipboard-service.js";
import { N2 } from "./glass-host-service.js";
import { zc } from "./glass-notification-service.js";
import { OG } from "./glass-workspaces-management-service.js";
import { HDv } from "./remote-workspace-modal-shell.react.js";
import { E } from "./tslib.es6.js";
import { r1 } from "./use-command-bridge.react.js";
import { oic } from "./use-remote-workspace-connect-flow.react.js";
import { In } from "./use-service.react_2.js";
import { LO0 } from "./wsl-distro-step.react.js";
var JDv, e3v, t3v, cic, uic, n3v;
export { JDv, cic, e3v, n3v, t3v, uic };
var __wakaru_HO0_initialized = false;
export function HO0() {
if (__wakaru_HO0_initialized) return;
__wakaru_HO0_initialized = true;
"use strict";
E(), OG(), N2(), Ei(), r1(), In(), cS(), zc(), HDv(), oic(), LO0(), JDv = "wsl+", e3v = "anysphere.remote-wsl", t3v = "Remote - WSL", cic = [
    {
        id: "host",
        label: "Distro"
    }
], uic = [
    {
        id: "connecting",
        label: "Connect"
    },
    {
        id: "folder",
        label: "Folder"
    }
], n3v = [
    ...cic,
    ...uic
];

}
