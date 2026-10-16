import { F3i } from "./BA.js";
import { g30, m30, vMv } from "./BPv.js";
import { Ei } from "./Iwo.js";
import { $Oi } from "./cursorOriginLinks.js";
import { _nc, cMv, dMv, gMv, hMv, lMv, mMv, pMv, uMv, vnc } from "./glass-file-tree-context-handlers.js";
import { ZRt } from "./glass-file-tree-edit-utils.js";
import { VXt, zXt } from "./glass-reveal-file-in-os.js";
import { VQt } from "./glass-scm-service.js";
import { Ki } from "./network.js";
import { E } from "./tslib.es6.js";
import { l3 } from "./workspace-services_2.js";
var yMv, SMv, knc, kMv;
export { SMv, kMv, knc, yMv };
var __wakaru_SYe_initialized = false;
export function SYe() {
if (__wakaru_SYe_initialized) return;
__wakaru_SYe_initialized = true;
"use strict";
E(), VQt(), Ei(), Ki(), $Oi(), l3(), gMv(), ZRt(), VXt(), yMv = new Set([
    "createFile",
    "createFolder"
]), SMv = [
    lMv,
    {
        kind: "separator",
        id: "sep-between-add-to-chat-and-reveal"
    },
    {
        kind: "nativeCommand",
        id: "revealInOs",
        label: F3i(),
        commandId: zXt,
        visible: g30
    },
    vnc
], knc = [
    ...SMv,
    {
        kind: "separator",
        id: "sep-after-navigation"
    },
    ..._nc,
    {
        kind: "separator",
        id: "sep-after-create"
    },
    {
        ...cMv,
        visible: vMv
    },
    {
        ...uMv,
        visible: vMv
    },
    {
        ...dMv,
        visible: (t)=>m30(t) && t.uris.length === 1
    },
    {
        kind: "separator",
        id: "sep-after-copypath"
    },
    ...hMv,
    {
        kind: "separator",
        id: "sep-after-clipboard"
    },
    pMv,
    {
        kind: "separator",
        id: "sep-after-download"
    },
    ...mMv
], kMv = [
    ..._nc
];

}
