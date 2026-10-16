import { nb } from "./bcIdFromAuthority.js";
import { p2 } from "./canvas.js";
import { EM, bR } from "./editor.js";
import { Nv } from "./editorBrowser.js";
import { Ni, _1, ib } from "./editorService.js";
import { tki } from "./groupSelection.js";
import { gt, li } from "./network.js";
import { ko } from "./opener.js";
import { Xl, ba } from "./path_2.js";
import { BFt, CRe, x1g } from "./qIc.js";
import { qi } from "./range.js";
import { Li, Tmi } from "./resources.js";
import { x } from "./tslib.es6.js";
import { nj } from "./types_4.js";
import { Ee, Qt } from "./uri.js";
import { hu } from "./utils_pb.js";
var jbn, zos, gKc, Kos, Yos, fKc;
export { Kos, Yos, fKc, gKc, jbn, zos };
var __wakaru_b1_initialized = false;
export function b1() {
if (__wakaru_b1_initialized) return;
__wakaru_b1_initialized = true;
"use strict";
x(), hu(), nb(), li(), ba(), Li(), Qt(), Nv(), qi(), EM(), ko(), tki(), p2(), nj(), Ni(), jbn = (e, { filePathOrUri: t, selection: n })=>{
    if (!e.workbenchEnvironmentService.isGlass) return !1;
    let i = typeof t == "string" ? x1g(t) ?? t : t, r = n;
    if (Ee.isUri(i)) {
        const a = BFt(i);
        i = a.uri, r ??= a.selection;
    }
    const s = r ? {
        startLineNumber: r.startLineNumber,
        startColumn: r.startColumn ?? 1,
        endLineNumber: r.endLineNumber ?? r.startLineNumber,
        endColumn: r.endColumn ?? r.startColumn ?? 1
    } : void 0;
    let o;
    return typeof i == "string" ? o = {
        path: i,
        selection: s
    } : o = {
        uri: i,
        selection: s
    }, o && e.commandService.executeCommand("glass.openFileInStableTab", o).catch((a)=>{
        console.error("Failed to open file in Glass stable tab:", a), e.notificationService.error("Failed to open file");
    }), !0;
}, zos = async ({ uri: e, originalUri: t, services: n, openToSide: i, fromGroup: r, preserveFocus: s })=>{
    if (!await n.fileService.exists(e)) return;
    let a = _1;
    if (i) {
        const u = r ?? n.editorService.activeEditorPane?.group;
        if (u) {
            const h = n.editorGroupsService.findGroup({
                direction: 3
            }, u), p = n.editorGroupsService.findGroup({
                direction: 2
            }, u), g = n.editorGroupsService.findGroup({
                direction: 1
            }, u), v = CRe([
                h,
                p,
                g
            ]);
            if (v) a = v;
            else {
                const b = CRe(n.editorGroupsService.mainPart.getGroups(1).filter((y)=>y.id !== u.id));
                b ? a = b : a = ib;
            }
        } else a = ib;
    } else {
        const u = r ?? n.editorService.activeEditorPane?.group, h = n.editorGroupsService.mainPart.getGroups(1), p = u ? [
            u,
            ...h.filter((f)=>f.id !== u.id)
        ] : h, g = CRe(p);
        g && (a = g);
    }
    let { selection: c, uri: l } = BFt(e);
    l.scheme === gt.file && (l = Tmi(l)), n.editorService.openEditor({
        ...t !== void 0 ? {
            original: {
                resource: t
            },
            modified: {
                resource: l
            }
        } : {
            resource: l
        },
        options: {
            selection: c,
            revealIfVisible: !0,
            revealIfOpened: !0,
            source: bR.USER,
            preserveFocus: s ?? !0
        }
    }, a);
}, gKc = (e, t)=>{
    if (t === "/" || t === "\\") {
        const n = e.workspaceContextService.getWorkspace().folders;
        if (n.length === 1) return Xl(n[0].uri.path);
    }
    return "";
}, Kos = (e)=>({
        ...e,
        fileSelections: e.fileSelections?.map((t)=>({
                ...t,
                uri: Ee.revive(t.uri)
            })),
        selectedImages: e.selectedImages?.map((t)=>({
                ...t,
                loadedAt: Date.now()
            }))
    }), Yos = {
    authority: "",
    fragment: "",
    path: "",
    query: "",
    scheme: "terminal"
}, fKc = 1e4;

}
