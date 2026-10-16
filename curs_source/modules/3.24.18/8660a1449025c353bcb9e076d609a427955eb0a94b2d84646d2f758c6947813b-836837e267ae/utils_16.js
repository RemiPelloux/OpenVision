import { $5y, sSt } from "./LYd.js";
import { rp } from "./bcIdFromAuthority.js";
import { jD } from "./canvas.js";
import { T4, lL } from "./editor.js";
import { xw } from "./editorBrowser.js";
import { Wo, cB, p2 } from "./editorService.js";
import { AVo } from "./groupSelection.js";
import { Ki, Ot } from "./network.js";
import { qc } from "./opener.js";
import { Ku, Ul } from "./path_2.js";
import { Qs } from "./range.js";
import { Lr, Xvt } from "./resources.js";
import { E } from "./tslib.es6.js";
import { Sz } from "./types_4.js";
import { fn, rt } from "./uri.js";
import { Hu } from "./utils_pb.js";
import { pvn } from "./ze.js";
var hai, HVo, TXd, WVo, GVo, EXd;
export { EXd, GVo, HVo, TXd, WVo, hai };
var __wakaru_oT_initialized = false;
export function oT() {
if (__wakaru_oT_initialized) return;
__wakaru_oT_initialized = true;
"use strict";
E(), Hu(), rp(), Ki(), Ul(), Lr(), fn(), xw(), Qs(), T4(), qc(), AVo(), jD(), Sz(), Wo(), hai = (t, { filePathOrUri: e, selection: n })=>{
    if (!t.workbenchEnvironmentService.isGlass) return !1;
    let i = typeof e == "string" ? $5y(e) ?? e : e, r = n;
    if (rt.isUri(i)) {
        const a = pvn(i);
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
    }, o && t.commandService.executeCommand("glass.openFileInStableTab", o).catch((a)=>{
        console.error("Failed to open file in Glass stable tab:", a), t.notificationService.error("Failed to open file");
    }), !0;
}, HVo = async ({ uri: t, originalUri: e, services: n, openToSide: i, fromGroup: r, preserveFocus: s })=>{
    if (!await n.fileService.exists(t)) return;
    let a = cB;
    if (i) {
        const u = r ?? n.editorService.activeEditorPane?.group;
        if (u) {
            const d = n.editorGroupsService.findGroup({
                direction: 3
            }, u), h = n.editorGroupsService.findGroup({
                direction: 2
            }, u), p = n.editorGroupsService.findGroup({
                direction: 1
            }, u), f = sSt([
                d,
                h,
                p
            ]);
            if (f) a = f;
            else {
                const _ = sSt(n.editorGroupsService.mainPart.getGroups(1).filter((b)=>b.id !== u.id));
                _ ? a = _ : a = p2;
            }
        } else a = p2;
    } else {
        const u = r ?? n.editorService.activeEditorPane?.group, d = n.editorGroupsService.mainPart.getGroups(1), h = u ? [
            u,
            ...d.filter((g)=>g.id !== u.id)
        ] : d, p = sSt(h);
        p && (a = p);
    }
    let { selection: l, uri: c } = pvn(t);
    c.scheme === Ot.file && (c = Xvt(c)), n.editorService.openEditor({
        ...e !== void 0 ? {
            original: {
                resource: e
            },
            modified: {
                resource: c
            }
        } : {
            resource: c
        },
        options: {
            selection: l,
            revealIfVisible: !0,
            revealIfOpened: !0,
            source: lL.USER,
            preserveFocus: s ?? !0
        }
    }, a);
}, TXd = (t, e)=>{
    if (e === "/" || e === "\\") {
        const n = t.workspaceContextService.getWorkspace().folders;
        if (n.length === 1) return Ku(n[0].uri.path);
    }
    return "";
}, WVo = (t)=>({
        ...t,
        fileSelections: t.fileSelections?.map((e)=>({
                ...e,
                uri: rt.revive(e.uri)
            })),
        selectedImages: t.selectedImages?.map((e)=>({
                ...e,
                loadedAt: Date.now()
            }))
    }), GVo = {
    authority: "",
    fragment: "",
    path: "",
    query: "",
    scheme: "terminal"
}, EXd = 1e4;

}
