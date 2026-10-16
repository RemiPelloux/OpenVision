import { GD0, JD0, KD0, KPv, QD0, WD0, XD0, YD0, a30, c30, eMv, h30, l30, nMs, o30, qD0, r30, u30, zPv } from "./BPv.js";
import { D } from "./Iwo.js";
import { mnc } from "./glass-file-tree-create.js";
import { ZD0 } from "./glass-file-tree-delete.js";
import { e30 } from "./glass-file-tree-download.js";
import { oMv } from "./glass-file-tree-open-in-browser.js";
import { d30 } from "./glass-file-tree-reference-actions.js";
import { p30 } from "./glass-file-tree-rename.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var lMv, vnc, cMv, uMv, dMv, _nc, hMv, pMv, mMv;
export { _nc, cMv, dMv, hMv, lMv, mMv, pMv, uMv, vnc };
var __wakaru_gMv_initialized = false;
export function gMv() {
if (__wakaru_gMv_initialized) return;
__wakaru_gMv_initialized = true;
"use strict";
E(), Bt(), zPv(), mnc(), ZD0(), e30(), oMv(), d30(), p30(), lMv = {
    kind: "handler",
    id: "addToChat",
    label: D("glassFileTreeAddToChat", "Add to Chat"),
    run: a30,
    visible: o30
}, vnc = {
    kind: "handler",
    id: "openInBrowser",
    label: D("glassFileTreeOpenInBrowser", "Open in Browser"),
    run: r30,
    visible: eMv
}, cMv = {
    kind: "handler",
    id: "copyPath",
    label: D("copyPath", "Copy Path"),
    run: c30
}, uMv = {
    kind: "handler",
    id: "copyRelativePath",
    label: D("glassCopyRelativePath", "Copy Relative Path"),
    run: l30
}, dMv = {
    kind: "handler",
    id: "copyCursorComLink",
    label: D("glassCopyCursorComLink", "Copy cursor.com link"),
    run: u30
}, _nc = [
    {
        kind: "handler",
        id: "createFile",
        label: D("glassFileTreeCreateFileLabel", "New File"),
        run: KD0,
        visible: nMs,
        disabled: KPv
    },
    {
        kind: "handler",
        id: "createFolder",
        label: D("glassFileTreeCreateFolderLabel", "New Folder"),
        run: YD0,
        visible: nMs,
        disabled: KPv
    }
], hMv = [
    {
        kind: "handler",
        id: "cut",
        label: D("cut", "Cut"),
        run: WD0
    },
    {
        kind: "handler",
        id: "copy",
        label: D("copy", "Copy"),
        run: GD0
    },
    {
        kind: "handler",
        id: "paste",
        label: D("paste", "Paste"),
        run: qD0
    }
], pMv = {
    kind: "handler",
    id: "download",
    label: D("glassFileTreeDownload", "Download"),
    run: JD0,
    visible: QD0
}, mMv = [
    {
        kind: "handler",
        id: "rename",
        label: D("rename", "Rename"),
        run: h30
    },
    {
        kind: "handler",
        id: "delete",
        label: D("delete", "Delete"),
        run: XD0
    }
];

}
