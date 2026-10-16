import { B9l, BBf, kNi } from "./BA.js";
import { Gm, Vi } from "./actionCommonCategories.js";
import { Ft, es, ji, sn } from "./actions_2.js";
import { SJ, oCt } from "./aiReactiveContextKeys.contribution.js";
import { Dc, jl } from "./aiService.js";
import { aws } from "./availableRemotes.js";
import { LP, uC } from "./backgroundComposer.js";
import { Mwm, SYr, kYr, wYr } from "./backgroundComposerConstants.js";
import { F9l, LBf, O9l, Yct } from "./backgroundComposerContextKeys.js";
import { EA, RB } from "./backgroundComposerDataService.js";
import { bb, hf } from "./clipboardService.js";
import { gs, yt } from "./codicons.js";
import { hs, nr, rs } from "./commands.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Bb, Ux } from "./composerViews.js";
import { pa, uJn, wcd } from "./constants_8.js";
import { Hi, mt } from "./contextkey.js";
import { T4, lL } from "./editor.js";
import { Wo, gr, p2 } from "./editorService.js";
import { is, ms } from "./files.js";
import { Jv, hy } from "./gitContextService.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Ks, Wr } from "./notification.js";
import { kc, qc } from "./opener.js";
import { Dw, oI } from "./prettyDialog.js";
import { Cl, Gu } from "./quickInput.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { aC, cN } from "./scm.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { UBf } from "./utils_34.js";
import { $t, Bs } from "./window.js";
import { Sr, yr } from "./workspace.js";
import { Ht } from "./ze.js";
var U9l, jBf, $Bf, HBf, WBf, lws, GBf, cws, wNi, uws, j9l, dws, qBf, hws, zBf, $9l, pws, mws, gws, fws, H9l, VBf, W9l, KBf, G9l, YBf, q9l, z9l, vws, XBf, _ws, ZBf, bws, QBf, yws, V9l;
export { $9l, $Bf, G9l, GBf, H9l, HBf, KBf, QBf, U9l, V9l, VBf, W9l, WBf, XBf, YBf, ZBf, _ws, bws, cws, dws, fws, gws, hws, j9l, jBf, lws, mws, pws, q9l, qBf, uws, vws, wNi, yws, z9l, zBf };
var __wakaru_Sws_initialized = false;
export function Sws() {
if (__wakaru_Sws_initialized) return;
__wakaru_Sws_initialized = true;
"use strict";
E(), es(), Gu(), Wo(), LP(), rs(), fn(), el(), pa(), RB(), Ma(), ms(), Sr(), T4(), oCt(), bb(), Hi(), Ks(), gs(), hy(), Gm(), wYr(), F9l(), Dc(), oI(), qc(), UBf(), Bs(), Ux(), Pl(), cN(), aws(), rs(), U9l = class geu extends sn {
    constructor(){
        super({
            id: geu.ID,
            title: {
                value: geu.LABEL,
                original: "Switch Cloud Agent Environment"
            },
            precondition: SJ.isEqualTo(!0),
            f1: !0
        });
    }
    async run(e) {
        const n = e.get(Cl), i = e.get(sa), r = [
            {
                label: "Development",
                description: "Use development environment",
                picked: i.applicationUserPersistentStorage.backgroundComposerEnv === "dev"
            },
            {
                label: "Production",
                description: "Use production environment",
                picked: i.applicationUserPersistentStorage.backgroundComposerEnv === "prod"
            },
            {
                label: "Full Local",
                description: "Use full local environment (non-VM running locally)",
                picked: i.applicationUserPersistentStorage.backgroundComposerEnv === "fullLocal"
            }
        ], s = n.createQuickPick();
        s.items = r, s.placeholder = "Select background composer environment", s.onDidAccept(async ()=>{
            const o = s.selectedItems[0];
            o && (s.hide(), i.setApplicationUserPersistentStorage("backgroundComposerEnv", o.label === "Production" ? "prod" : o.label === "Full Local" ? "fullLocal" : "dev"));
        }), s.show();
    }
}, U9l.ID = "workbench.action.switchBackgroundComposerEnvironment", U9l.LABEL = "Switch Cloud Agent Environment", jBf = class extends sn {
    constructor(){
        super({
            id: "workbench.action.backgroundComposer.openFileDiff",
            title: {
                value: "Open File Diff",
                original: "Open File Diff"
            },
            f1: !1,
            precondition: SJ.isEqualTo(!0)
        });
    }
    run(t, e, n, i, r = !1) {
        const s = e.to === "/dev/null", o = e.from === "/dev/null", a = (T)=>T === "/dev/null" ? "" : T, l = t.get(is), c = t.get(gr), u = t.get(yr), d = r ? p2 : void 0, h = a(e.from) || a(e.to), p = a(e.to) || a(e.from), g = (T)=>!i || !T || T.startsWith(i + "/") ? T : `${i}/${T}`, f = g(h), _ = g(p);
        let b = u.resolveRelativePath(f), y = u.resolveRelativePath(_);
        if (s) {
            const T = u.asRelativePath(b), I = B9l(T), A = b.with({
                scheme: "git",
                path: `/${I}`,
                query: JSON.stringify({
                    path: b.scheme === "vscode-remote" ? b.path : b.fsPath,
                    ref: i ? "HEAD" : `merge-base-anysphere:${n}...HEAD`
                })
            }), P = `${b.path.split("/").pop() ?? ""} (deleted)`;
            c.openEditor({
                resource: A,
                options: {
                    revealIfVisible: !0,
                    revealIfOpened: !0,
                    source: lL.USER,
                    preserveFocus: !1
                },
                label: P
            }, d);
            return;
        }
        if (o) {
            const T = `${y.path.split("/").pop() ?? ""} (new)`;
            c.openEditor({
                resource: y,
                options: {
                    revealIfVisible: !0,
                    revealIfOpened: !0,
                    source: lL.USER,
                    preserveFocus: !1
                },
                label: T
            }, d);
            return;
        }
        const S = u.asRelativePath(b), k = B9l(S);
        b = b.with({
            scheme: "git",
            path: `/${k}`,
            query: JSON.stringify({
                path: b.scheme === "vscode-remote" ? b.path : b.fsPath,
                ref: i ? "HEAD" : `merge-base-anysphere:${n}...HEAD`
            })
        });
        const C = `${b.path.split("/").pop() ?? ""} (modified)`;
        l.canHandleResource(b).then((T)=>{
            T && c.openEditor({
                original: {
                    resource: b
                },
                modified: {
                    resource: y
                },
                options: {
                    revealIfVisible: !0,
                    revealIfOpened: !0,
                    source: lL.USER,
                    preserveFocus: !1
                },
                label: C
            }, d);
        });
    }
}, Ht(jBf), $Bf = class extends sn {
    constructor(){
        super({
            id: "workbench.action.backgroundComposer.showDeletedFileNotification",
            title: {
                value: "Show Deleted File Notification",
                original: "Show Deleted File Notification"
            },
            f1: !1,
            precondition: SJ.isEqualTo(!0)
        });
    }
    run(t, e) {
        t.get(Wr).info(`File "${e}" has been deleted. This file no longer exists in the workspace.`);
    }
}, Ht($Bf), HBf = class extends sn {
    constructor(){
        super({
            id: "workbench.action.backgroundComposer.openFile",
            title: {
                value: "Open File",
                original: "Open File"
            },
            icon: yt.goToFile,
            f1: !1,
            menu: {
                id: Ft.ViewItemContext,
                when: mt.equals("viewItem", "backgroundComposerFile"),
                group: "inline"
            },
            precondition: SJ.isEqualTo(!0)
        });
    }
    async run(t, e) {
        const n = t.get(yr), i = t.get(gr), r = t.get(Wr);
        try {
            let s;
            if (typeof e == "string") s = e;
            else if ("$treeItemHandle" in e) s = e.$treeItemHandle;
            else if ("handle" in e) s = e.handle;
            else {
                r.error("Unable to open file: Invalid context");
                return;
            }
            const o = n.resolveRelativePath(s);
            await i.openEditor({
                resource: o,
                options: {
                    revealIfVisible: !0,
                    revealIfOpened: !0
                }
            });
        } catch (s) {
            r.error(`Failed to open file: ${s instanceof Error ? s.message : String(s)}`);
        }
    }
}, Ht(HBf), WBf = class extends sn {
    constructor(){
        super({
            id: "workbench.action.backgroundComposer.revertFile",
            title: {
                value: "Revert File",
                original: "Revert File"
            },
            icon: yt.discard,
            f1: !1,
            menu: {
                id: Ft.ViewItemContext,
                when: mt.equals("viewItem", "backgroundComposerFile"),
                group: "inline"
            },
            precondition: SJ.isEqualTo(!0)
        });
    }
    async run(t, e) {
        const n = t.get(uC), i = t.get(EA), r = t.get(yr), s = t.get(Wr), o = t.get(gr), a = t.get(nr), l = t.get(Jv);
        try {
            let c;
            if (typeof e == "string") c = e;
            else if ("$treeItemHandle" in e) c = e.$treeItemHandle;
            else if ("handle" in e) c = e.handle;
            else {
                s.error("Unable to revert file: Invalid context");
                return;
            }
            const u = n.bcIdForThisWindow() ?? i.data.isShowingBcIdInThisWindow;
            if (!u) {
                s.error("Unable to revert file: No background composer found for this window");
                return;
            }
            const d = await n.getBackgroundComposerInfo(u), h = BBf(d);
            if (!h) {
                s.error("Unable to revert file: No base branch or starting commit found");
                return;
            }
            const p = r.resolveRelativePath(c), g = o.findEditors(p);
            g.length > 0 && await o.revert([
                ...g
            ], {
                force: !0
            });
            const f = r.getWorkspaceFolder(p);
            if (!f) {
                s.error(`Unable to revert file: Cannot determine workspace folder for ${c}`);
                return;
            }
            if (await l.waitForGitContextProvider(), !await l.revertFile(f.uri.path, B9l(c), h)) {
                s.error(`Failed to revert file: ${c}`);
                return;
            }
            n.refreshInWindowBackgroundComposerDiffs(), s.info(`Successfully reverted ${c} to original state`);
        } catch (c) {
            s.error(`Failed to revert file: ${c instanceof Error ? c.message : String(c)}`);
        }
    }
}, Ht(WBf), lws = class FXs extends sn {
    constructor(){
        super({
            id: FXs.ID,
            title: {
                value: FXs.LABEL,
                original: FXs.LABEL
            },
            f1: !1,
            icon: yt.copy,
            precondition: SJ.isEqualTo(!0),
            menu: {
                id: Ft.ViewTitle,
                group: "navigation",
                order: 2,
                when: mt.regex("view", new RegExp(`^${SYr}`)),
                isHiddenByDefault: !0
            }
        });
    }
    async run(e) {
        const n = e.get(uC), i = e.get(hf), r = e.get(Wr), s = n.bcIdForThisWindow();
        s ? (i.writeText(s), r.info("Request ID copied to clipboard")) : r.error("No Cloud Agent ID found");
    }
}, lws.ID = "workbench.action.backgroundComposer.copyRequestIdFromPane", lws.LABEL = "Copy Request ID", GBf = lws, Ht(GBf), cws = class BXs extends sn {
    constructor(){
        super({
            id: BXs.ID,
            title: {
                value: BXs.LABEL,
                original: BXs.LABEL
            },
            precondition: mt.and(SJ.isEqualTo(!0), Yct.negate())
        });
    }
    async run(e, n) {
        const i = e.get(uC), r = e.get(Dw), s = e.get(Cl), o = e.get(Wr), a = s.onShow(async (p)=>{
            r.closeDialog();
        }), l = Date.now(), c = 200, u = 800;
        let d = !1, h;
        try {
            r.openDialog({
                title: "Applying changes locally\u2026",
                message: "Applying changes locally. This may take a few seconds.",
                primaryButton: {
                    id: "loading",
                    label: "Applying",
                    isLoading: !0
                },
                dialogIcon: yt.cloudTwo,
                dialogIconColor: "var(--cursor-text-primary)",
                dialogParentClass: "!z-[3000] pointer-events-none"
            }), await i.focusEditor(), await i.applyChangesFromBgAgent(n.bcId, n.options);
        } finally{
            r.closeDialog(), a.dispose();
        }
    }
}, cws.ID = "workbench.action.backgroundComposer.applyChangesLocally", cws.LABEL = "Apply Changes Locally", wNi = cws, Ht(wNi), uws = class UXs extends sn {
    constructor(){
        super({
            id: UXs.ID,
            title: {
                value: UXs.LABEL,
                original: UXs.LABEL
            },
            precondition: mt.and(SJ.isEqualTo(!0), Yct.negate())
        });
    }
    async run(e, n) {
        const i = e.get(uC), r = e.get(EA), s = e.get(Wr), o = e.get(Dw), a = e.get(Cl), l = n.convertToLocal ?? !1;
        let c = !1;
        const u = a.onShow(async (d)=>{
            o.closeDialog();
        });
        try {
            o.openDialog({
                title: "Checking out branch\u2026",
                message: "Fetching and switching to the Cloud Agent branch.",
                primaryButton: {
                    id: "loading",
                    label: "Importing",
                    isLoading: !0
                },
                dialogParentClass: "!z-[3000] pointer-events-none",
                dialogIcon: yt.cloudTwo,
                dialogIconColor: "var(--cursor-text-primary)"
            }), c = !0, await i.focusEditor();
            const d = r.data.backgroundComposers.find((h)=>h.bcId === n.bcId);
            if (!d) {
                s.error("Background Composer not found");
                return;
            }
            await i.checkoutLocally(d, l);
        } finally{
            c && o.closeDialog(), u.dispose();
        }
    }
}, uws.ID = "workbench.action.backgroundComposer.checkoutLocally", uws.LABEL = "Checkout Background Composer Locally", j9l = uws, Ht(j9l), dws = class feu extends sn {
    constructor(){
        super({
            id: feu.ID,
            title: {
                value: feu.LABEL,
                original: "Start Cloud Agent Environment Setup"
            },
            category: Vi.Cursor,
            f1: !0,
            precondition: mt.and(SJ.isEqualTo(!0), Yct.negate())
        });
    }
    async run(e) {
        await e.get(kc).open(rt.parse("https://cursor.com/onboard"));
    }
}, dws.ID = kYr, dws.LABEL = "Start Cloud Agent Setup", qBf = dws, Ht(qBf), hws = class jXs extends sn {
    constructor(){
        super({
            id: jXs.ID,
            title: {
                value: jXs.LABEL,
                original: jXs.LABEL
            },
            category: Vi.Cursor,
            f1: !0,
            precondition: mt.and(SJ.isEqualTo(!0), Yct.negate())
        });
    }
    async run(e) {
        await e.get(kc).open(rt.parse("https://cursor.com/onboard"));
    }
}, hws.ID = Mwm, hws.LABEL = "Restart Cloud Agent Environment Setup", zBf = hws, Ht(zBf), Ht(class extends sn {
    constructor(){
        super({
            id: wcd,
            title: {
                value: "Add model to switcher",
                original: "Add model to switcher"
            },
            f1: !1
        });
    }
    async run(t, e, n) {
        const i = t.get(jl), r = t.get(nr), s = (await i.getMultipleModelDetails({
            specificModelField: n
        })).map((o)=>o.modelName).filter((o)=>o !== void 0);
        s.push(e), r.executeCommand(uJn, s.join(","), n);
    }
}), $9l = class extends sn {
    constructor(t, e){
        super({
            id: t,
            title: {
                value: e,
                original: e
            },
            f1: !1,
            icon: yt.addTwo,
            precondition: SJ.isEqualTo(!0)
        });
    }
    async run(t) {
        const e = t.get(Bb), i = t.get(no).selectedComposerId;
        await e.showAndFocus(i, {
            view: "pane"
        });
    }
}, pws = class veu extends $9l {
    constructor(){
        super(veu.ID, veu.LABEL);
    }
}, pws.ID = "workbench.action.backgroundComposer.createNewComposerWithPrevContext", pws.LABEL = "New Chat", mws = pws, gws = class _eu extends $9l {
    constructor(){
        super(_eu.ID, _eu.LABEL);
    }
}, gws.ID = "workbench.action.backgroundComposer.createNewComposerTab", gws.LABEL = "New Tab", fws = gws, Ht(mws), Ht(fws), ji.appendMenuItem(Ft.ViewTitle, {
    command: {
        id: mws.ID,
        title: mws.LABEL,
        icon: yt.addTwo
    },
    alt: {
        id: fws.ID,
        title: fws.LABEL,
        icon: yt.addTwo
    },
    group: "navigation",
    when: mt.regex("view", new RegExp(`^${SYr}`)),
    order: 2
}), H9l = class IMb {
    static register() {
        hs.registerCommand({
            id: IMb.ID,
            handler: async (e, n)=>{
                const i = e.get(uC);
                try {
                    return await i.getBackgroundComposerInfo(n);
                } catch (r) {
                    return console.error("[GetBackgroundComposerInfoCommand] Failed to get background composer info:", r), null;
                }
            }
        });
    }
}, H9l.ID = "composer.getBackgroundComposerInfo", VBf = H9l, VBf.register(), W9l = class xMb {
    static register() {
        hs.registerCommand({
            id: xMb.ID,
            handler: async (e)=>{
                const n = e.get(aC), i = e.get(yr);
                try {
                    return kNi(n, i).preferred?.url;
                } catch (r) {
                    console.error("[GetCurrentWorkspaceRepoUrlCommand] Failed to get current workspace repo URL:", r);
                    return;
                }
            }
        });
    }
}, W9l.ID = "composer.getCurrentWorkspaceRepoUrl", KBf = W9l, KBf.register(), G9l = class AMb {
    static register() {
        hs.registerCommand({
            id: AMb.ID,
            handler: async (e, n)=>{
                const i = e.get(Dw), r = n.expectedRepoUrl.replace("github.com/", ""), s = n.currentRepoUrl.replace("github.com/", ""), a = n.currentRepoUrl === "no repository open" ? `This background agent is for repository "${r}", but you don't have any repository open.

Please open the correct repository and try again.` : `This background agent is for repository "${r}", but your current workspace is on ${s}.

Please open the correct repository and try again`;
                await i.openDialog({
                    title: "Incorrect Repository",
                    message: a,
                    primaryButton: {
                        id: "open-repo",
                        label: "OK"
                    },
                    dialogIcon: yt.repoForked,
                    dialogIconColor: "var(--vscode-notificationsWarningIcon-foreground)"
                });
            }
        });
    }
}, G9l.ID = "composer.showBackgroundAgentRepositoryMismatchDialog", YBf = G9l, YBf.register(), q9l = class RMb {
    static register() {
        hs.registerCommand({
            id: RMb.ID,
            handler: async (e, n)=>{
                const i = e.get(uC), r = typeof n == "string" ? n : n?.bcId;
                if (!r) throw new Error("bcId is required");
                try {
                    await i.openBackgroundComposerAsChat(r);
                } catch (s) {
                    throw console.error("[OpenBackgroundComposerAsChatCommand] Failed to open background composer as chat:", s), s;
                }
            }
        });
    }
}, q9l.ID = "composer.openBackgroundComposerAsChat", z9l = q9l, z9l.register(), vws = class ZZi extends sn {
    constructor(){
        super({
            id: ZZi.ID,
            title: {
                value: ZZi.LABEL,
                original: ZZi.LABEL
            },
            category: Vi.Cursor,
            f1: !0,
            precondition: mt.and(SJ.isEqualTo(!0), Yct.negate())
        });
    }
    async run(e) {
        const n = e.get(Cl), i = e.get(nr), s = (await n.input({
            title: ZZi.LABEL,
            prompt: "Enter a Cloud Agent ID to open",
            placeHolder: "bc-f6ef9ae1-c8fa-421b-bef0-dba60a486acc",
            ignoreFocusLost: !0,
            validateInput: async (o)=>{
                const a = o.trim();
                return a ? a.startsWith("bc-") ? null : 'Cloud Agent ID must start with "bc-".' : "Please enter a Cloud Agent ID.";
            }
        }))?.trim();
        s && await i.executeCommand(z9l.ID, s);
    }
}, vws.ID = "workbench.action.backgroundComposer.openCloudAgentById", vws.LABEL = "Open Cloud Agent by ID", XBf = vws, Ht(XBf), _ws = class $Xs extends sn {
    constructor(){
        super({
            id: $Xs.ID,
            title: {
                value: $Xs.LABEL,
                original: $Xs.LABEL
            },
            f1: !1,
            icon: yt.debugConsole,
            precondition: SJ.isEqualTo(!0),
            menu: {
                id: Ft.ViewTitle,
                group: "0_chatManage",
                order: 2,
                when: mt.regex("view", new RegExp(`^${SYr}`))
            }
        });
    }
    async run() {
        $t.vscode?.ipcRenderer?.send("vscode:openDevTools");
    }
}, _ws.ID = "workbench.action.backgroundComposer.openDevTools", _ws.LABEL = "Open DevTools", ZBf = _ws, Ht(ZBf), bws = class HXs extends sn {
    constructor(){
        super({
            id: HXs.ID,
            title: {
                value: HXs.LABEL,
                original: HXs.LABEL
            },
            f1: !1,
            precondition: mt.and(SJ.isEqualTo(!0), O9l),
            keybinding: {
                primary: ut.CtrlCmd | Ze.Period,
                weight: 600
            }
        });
    }
    async run(e) {
        const n = e.get(EA), i = n.data.fullScreenWindowBcId;
        if (!i) return;
        const r = n.data.backgroundComposers.find((a)=>a.bcId === i);
        if (!r) return;
        const s = r.peekContentTab ?? "diffs", o = r.isLoaded && !r.peekContentIsLoadingDetailedComposer && !r.peekContentDetailedComposerError;
        s === "diffs" ? n.setData("backgroundComposers", (a)=>a.bcId === i, "peekContentTab", "chat") : s === "chat" && o && n.setData("backgroundComposers", (a)=>a.bcId === i, "peekContentTab", "diffs");
    }
}, bws.ID = "workbench.action.backgroundComposer.togglePeekContentTab", bws.LABEL = "Toggle Between Chat and Diffs", QBf = bws, Ht(QBf), yws = class WXs extends sn {
    constructor(){
        super({
            id: WXs.ID,
            title: {
                value: WXs.LABEL,
                original: WXs.LABEL
            },
            f1: !1,
            precondition: mt.and(SJ.isEqualTo(!0), O9l, LBf)
        });
    }
    async run(e, n) {
        const i = e.get(EA), r = e.get(uC), s = e.get(Wr), o = n.bcId, a = n.convertToLocal ?? !1;
        if (o) {
            i.setData("backgroundComposers", (l)=>l.bcId === o, "isCheckingOutLocally", !0);
            try {
                await r.checkoutLocallyFromBcWindow(o, a);
            } catch (l) {
                s.error(`Failed to checkout locally: ${l?.message ?? String(l)}. Do you have changes in submodules?`);
            } finally{
                i.setData("backgroundComposers", (l)=>l.bcId === o, "isCheckingOutLocally", !1);
            }
        }
    }
}, yws.ID = "workbench.action.backgroundComposer.checkoutLocallyFromPeekContent", yws.LABEL = "Checkout Branch Locally", V9l = yws, Ht(V9l);

}
