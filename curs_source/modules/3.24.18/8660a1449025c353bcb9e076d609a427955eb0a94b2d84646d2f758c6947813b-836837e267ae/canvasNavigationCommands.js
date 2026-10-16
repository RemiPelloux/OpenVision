import { At } from "./Iwo.js";
import { Pwe, dne } from "./LYd.js";
import { $Ck, FSg, HCk, LCk, WCk } from "./Ycg.js";
import { Gm, Vi } from "./actionCommonCategories.js";
import { es, sn } from "./actions_2.js";
import { eme, y$ } from "./agentLayoutService.js";
import { Btd } from "./canvas-host-theme.ts";
import { jD } from "./canvas.js";
import { OCk } from "./canvasPathValidation.js";
import { P6, cme } from "./canvasService.js";
import { _b } from "./color.js";
import { hs, nr, rs } from "./commands.js";
import { Yh, vS } from "./composer.js";
import { Bwm, H4 } from "./composerContextKeys.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Hi, mt } from "./contextkey.js";
import { DA, vf } from "./contextkeys_2.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { fo, ps } from "./environmentService.js";
import { is, ms } from "./files.js";
import { cTt } from "./gYa.js";
import { nl } from "./index.ts";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Ji, Li } from "./log.js";
import { Bt } from "./nls.js";
import { Ks, Wr } from "./notification.js";
import { qc } from "./opener.js";
import { Rd, ih } from "./pathService.js";
import { Ul } from "./path_2.js";
import { Dw, oI } from "./prettyDialog.js";
import { Lr, Os } from "./resources.js";
import { LI } from "./theme.js";
import { E } from "./tslib.es6.js";
import { HVo, oT } from "./utils_16.js";
import { R6, T$ } from "./workbenchThemeService.js";
import { Sr, yr } from "./workspace.js";
import { C2 } from "./workspaceProjectPaths.js";
import { B81 } from "./yBp.js";
import { Ht, lne } from "./ze.js";
var BSg, USg, jSg, fhl, vhl, _hl;
export { BSg, USg, _hl, fhl, jSg, vhl };
var __wakaru_xls_initialized = false;
export function xls() {
if (__wakaru_xls_initialized) return;
__wakaru_xls_initialized = true;
"use strict";
E(), nl(), _b(), Ul(), Lr(), rs(), LI(), Ji(), fo(), ih(), C2(), Pl(), eme(), vS(), ms(), jD(), OCk(), cme(), R6(), Sr(), Wo(), Ld(), oI(), Ks(), qc(), oT(), Hi(), vf(), Ma(), es(), Bt(), Gm(), H4(), BSg = "canvas.openAgentByConversationId", USg = "canvas.newComposerChat", jSg = "canvas.openFileInWorkbench", fhl = "cursor.canvas.openVisibleInlinePreview", vhl = "canvas.openCloudSource", _hl = "canvas.deleteCloudSource", hs.registerCommand(Btd, (t)=>{
    const e = t.get(T$);
    return $Ck(e);
}), hs.registerCommand(vhl, async (t, e)=>{
    if (!FSg(e)) return;
    const n = t.get(yr), i = t.get(Rd), r = t.get(gr), s = await cTt(n.getWorkspace(), i);
    await r.openEditor({
        resource: Os(s, e),
        options: {
            pinned: !0
        }
    });
}), hs.registerCommand(_hl, async (t, e)=>{
    if (!FSg(e)) return;
    const n = t.get(yr), i = t.get(Rd), r = t.get(is), s = await cTt(n.getWorkspace(), i);
    await r.del(Os(s, e), {
        recursive: !1,
        useTrash: !1
    });
}), hs.registerCommand(BSg, async (t, e)=>{
    if (typeof e != "string" || e.length === 0) return;
    if (t.get(ps).isGlass) {
        await t.get(nr).executeCommand("glass.openAgentById", e);
        return;
    }
    const i = t.get(no), r = t.get(y$);
    if (await i.getComposerHandleById(e)) {
        await r.openComposer({
            type: "local",
            id: e
        });
        return;
    }
    await r.openComposer({
        type: "background",
        id: e
    });
}), hs.registerCommand(USg, async (t, e, n)=>{
    const i = t.get(Li), r = t.get(is), s = t.get(ps), o = t.get(nr), a = t.get(Yh);
    if (typeof e != "string" || e.length === 0) return;
    const l = dne(e);
    if (!Pwe(l)) {
        i.warn(`[canvas] newComposerChat rejected non-managed path: ${e}`);
        return;
    }
    if (!await LCk(l, r)) {
        i.warn(`[canvas] newComposerChat rejected invalid canvas path: ${e}`);
        return;
    }
    const c = typeof n == "string" && n.trim().length > 0 ? n.trim() : void 0;
    if (s.isGlass) {
        await o.executeCommand("glass.newComposerChat", l, c);
        return;
    }
    await a.newComposerChatWithReferencedCanvas(l, c);
}), hs.registerCommand(jSg, async (t, e, n)=>{
    const i = t.get(Li), r = t.get(is), s = t.get(ps), o = t.get(nr), a = t.get(yr), l = t.get(gr), c = t.get(_a), u = t.get(Dw), d = t.get(Wr), h = t.get(P6);
    if (typeof e != "string") return;
    const p = e.trim();
    if (p.length === 0) return;
    if (n != null && !HCk(n)) {
        i.warn(`[canvas] openFile rejected invalid selection for path: ${p}`);
        return;
    }
    const g = n != null ? WCk(n) : void 0;
    if (s.isGlass) {
        await o.executeCommand("glass.openFileInStableTab", {
            path: p,
            ...g !== void 0 ? {
                selection: g
            } : {}
        });
        return;
    }
    const f = a.resolveRelativePath(p);
    if (Pwe(f.fsPath)) {
        await h.openCanvasPath(f.fsPath);
        return;
    }
    await HVo({
        uri: g !== void 0 ? lne(f, g) : f,
        services: {
            fileService: r,
            editorService: l,
            editorGroupsService: c,
            prettyDialogService: u,
            notificationService: d,
            workspaceContextService: a
        },
        preserveFocus: !0
    });
}), Ht(class extends sn {
    constructor(){
        super({
            id: fhl,
            title: At(4919, "Open visible inline canvas preview"),
            category: Vi.View,
            f1: !0,
            keybinding: {
                primary: ut.CtrlCmd | Ze.Enter,
                weight: 601,
                when: mt.and(Bwm, DA.toNegated())
            }
        });
    }
    async run(e) {
        const n = B81();
        typeof n != "string" || n.length === 0 || await e.get(P6).openCanvasPath(n);
    }
});

}
