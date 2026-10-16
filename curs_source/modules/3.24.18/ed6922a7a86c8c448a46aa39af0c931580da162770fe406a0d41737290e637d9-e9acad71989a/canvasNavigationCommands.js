import { $1v } from "./A3u.js";
import { Ae } from "./HVr.js";
import { Iu, Kn } from "./actionCommonCategories.js";
import { ei, pt } from "./actions_2.js";
import { L2, vq } from "./agentLayoutService.js";
import { iqc } from "./canvas-host-theme.ts";
import { Kwe, p2 } from "./canvas.js";
import { ws_ } from "./canvasPathValidation.js";
import { xLe, z$ } from "./canvasService.js";
import { Ci, Sm } from "./color.js";
import { $n, ki, vi } from "./commands.js";
import { Hh, Xy } from "./composer.js";
import { f2d, jU } from "./composerContextKeys.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { dn, he } from "./contextkey.js";
import { XE, yd } from "./contextkeys_2.js";
import { Nc, gs } from "./editorGroupsService.js";
import { Ni, hn } from "./editorService.js";
import { Vr, Yi } from "./environmentService.js";
import { Fi, Ii } from "./files.js";
import { Ml } from "./index.ts";
import { Ie, Pr, fe } from "./keyCodes.js";
import { Qn, Wn } from "./log.js";
import { rt } from "./nls.js";
import { di, ji } from "./notification.js";
import { ko } from "./opener.js";
import { fu, zl } from "./pathService.js";
import { Eu, ba } from "./path_2.js";
import { BI, gF } from "./prettyDialog.js";
import { Cki, m5, qe, tj, zle } from "./qIc.js";
import { Li, jr } from "./resources.js";
import { Ef, x0 } from "./theme.js";
import { x } from "./tslib.es6.js";
import { Ee } from "./uri.js";
import { b1, zos } from "./utils_16.js";
import { K6, fF } from "./workbenchThemeService.js";
import { Jn, ci } from "./workspace.js";
import { NR } from "./workspaceProjectPaths.js";
import { uVt } from "./xmo.js";
async function ks_(e, t) {
    const n = tj(e);
    if (!Cki(n) || !zle(n)) return !1;
    const i = Ee.file(n);
    try {
        const r = await t.stat(i);
        if (!r.isFile || r.isSymbolicLink) return !1;
        const s = await t.realpath(i), o = tj(s.fsPath);
        return Cki(o) && zle(o);
    } catch  {
        return !1;
    }
}
function XPh(e) {
    return typeof e == "string" && Eu.basename(tj(e)) === e && e.endsWith(Kwe);
}
function Cs_(e) {
    switch(e){
        case Ef.LIGHT:
            return "light";
        case Ef.DARK:
            return "dark";
        case Ef.HIGH_CONTRAST_DARK:
            return "hc-dark";
        case Ef.HIGH_CONTRAST_LIGHT:
            return "hc-light";
        default:
            return "dark";
    }
}
function Yxo(e, t) {
    const n = e.getColorTheme().getColor(t);
    if (n) return Ci.Format.CSS.formatHex(n);
}
function Ts_(e) {
    const t = Cs_(e.getColorTheme().type), n = Yxo(e, "button.background"), i = Yxo(e, "editor.background"), r = Yxo(e, "editor.foreground");
    return {
        kind: t,
        ...n ? {
            primary: n
        } : {},
        ...i ? {
            editorBackground: i
        } : {},
        ...r ? {
            editorForeground: r
        } : {}
    };
}
function Xer(e) {
    return typeof e == "number" && Number.isInteger(e) && e > 0;
}
function Es_(e) {
    if (typeof e != "object" || e === null) return !1;
    const t = e;
    return Xer(t.startLineNumber) && (t.startColumn === void 0 || Xer(t.startColumn)) && (t.endLineNumber === void 0 || Xer(t.endLineNumber)) && (t.endColumn === void 0 || Xer(t.endColumn));
}
function xs_(e) {
    return {
        startLineNumber: e.startLineNumber,
        startColumn: e.startColumn ?? 1,
        endLineNumber: e.endLineNumber ?? e.startLineNumber,
        endColumn: e.endColumn ?? e.startColumn ?? 1
    };
}
var ZPh, QPh, JPh, Xxo, Zxo, Qxo;
export { Cs_, Es_, JPh, QPh, Qxo, Ts_, XPh, Xer, Xxo, Yxo, ZPh, Zxo, ks_, xs_ };
var __wakaru_Zer_initialized = false;
export function Zer() {
if (__wakaru_Zer_initialized) return;
__wakaru_Zer_initialized = true;
"use strict";
x(), Ml(), Sm(), ba(), Li(), vi(), x0(), Qn(), Vr(), fu(), NR(), nl(), vq(), Xy(), Fi(), p2(), ws_(), xLe(), K6(), ci(), Ni(), Nc(), gF(), ji(), ko(), b1(), dn(), yd(), Pr(), ei(), rt(), Iu(), jU(), ZPh = "canvas.openAgentByConversationId", QPh = "canvas.newComposerChat", JPh = "canvas.openFileInWorkbench", Xxo = "cursor.canvas.openVisibleInlinePreview", Zxo = "canvas.openCloudSource", Qxo = "canvas.deleteCloudSource", ki.registerCommand(iqc, (e)=>{
    const t = e.get(fF);
    return Ts_(t);
}), ki.registerCommand(Zxo, async (e, t)=>{
    if (!XPh(t)) return;
    const n = e.get(Jn), i = e.get(zl), r = e.get(hn), s = await uVt(n.getWorkspace(), i);
    await r.openEditor({
        resource: jr(s, t),
        options: {
            pinned: !0
        }
    });
}), ki.registerCommand(Qxo, async (e, t)=>{
    if (!XPh(t)) return;
    const n = e.get(Jn), i = e.get(zl), r = e.get(Ii), s = await uVt(n.getWorkspace(), i);
    await r.del(jr(s, t), {
        recursive: !1,
        useTrash: !1
    });
}), ki.registerCommand(ZPh, async (e, t)=>{
    if (typeof t != "string" || t.length === 0) return;
    if (e.get(Yi).isGlass) {
        await e.get($n).executeCommand("glass.openAgentById", t);
        return;
    }
    const i = e.get(Zs), r = e.get(L2);
    if (await i.getComposerHandleById(t)) {
        await r.openComposer({
            type: "local",
            id: t
        });
        return;
    }
    await r.openComposer({
        type: "background",
        id: t
    });
}), ki.registerCommand(QPh, async (e, t, n)=>{
    const i = e.get(Wn), r = e.get(Ii), s = e.get(Yi), o = e.get($n), a = e.get(Hh);
    if (typeof t != "string" || t.length === 0) return;
    const c = tj(t);
    if (!zle(c)) {
        i.warn(`[canvas] newComposerChat rejected non-managed path: ${t}`);
        return;
    }
    if (!await ks_(c, r)) {
        i.warn(`[canvas] newComposerChat rejected invalid canvas path: ${t}`);
        return;
    }
    const l = typeof n == "string" && n.trim().length > 0 ? n.trim() : void 0;
    if (s.isGlass) {
        await o.executeCommand("glass.newComposerChat", c, l);
        return;
    }
    await a.newComposerChatWithReferencedCanvas(c, l);
}), ki.registerCommand(JPh, async (e, t, n)=>{
    const i = e.get(Wn), r = e.get(Ii), s = e.get(Yi), o = e.get($n), a = e.get(Jn), c = e.get(hn), l = e.get(gs), u = e.get(BI), h = e.get(di), p = e.get(z$);
    if (typeof t != "string") return;
    const g = t.trim();
    if (g.length === 0) return;
    if (n != null && !Es_(n)) {
        i.warn(`[canvas] openFile rejected invalid selection for path: ${g}`);
        return;
    }
    const f = n != null ? xs_(n) : void 0;
    if (s.isGlass) {
        await o.executeCommand("glass.openFileInStableTab", {
            path: g,
            ...f !== void 0 ? {
                selection: f
            } : {}
        });
        return;
    }
    const v = a.resolveRelativePath(g);
    if (zle(v.fsPath)) {
        await p.openCanvasPath(v.fsPath);
        return;
    }
    await zos({
        uri: f !== void 0 ? m5(v, f) : v,
        services: {
            fileService: r,
            editorService: c,
            editorGroupsService: l,
            prettyDialogService: u,
            notificationService: h,
            workspaceContextService: a
        },
        preserveFocus: !0
    });
}), qe(class extends pt {
    constructor(){
        super({
            id: Xxo,
            title: Ae(4919, "Open visible inline canvas preview"),
            category: Kn.View,
            f1: !0,
            keybinding: {
                primary: Ie.CtrlCmd | fe.Enter,
                weight: 601,
                when: he.and(f2d, XE.toNegated())
            }
        });
    }
    async run(t) {
        const n = $1v();
        typeof n != "string" || n.length === 0 || await t.get(z$).openCanvasPath(n);
    }
});

}
