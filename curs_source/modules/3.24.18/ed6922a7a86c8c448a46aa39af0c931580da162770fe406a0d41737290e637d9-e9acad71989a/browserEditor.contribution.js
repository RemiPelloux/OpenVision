import { tet } from "./A3u.js";
import { Ae, He, S, Se, cn, po, we } from "./HVr.js";
import { Iu, Kn } from "./actionCommonCategories.js";
import { C, Re, ei, ie, pt } from "./actions_2.js";
import { ca, la } from "./aiMiscServices.js";
import { WCo, bCt } from "./appLayoutContextKeys.js";
import { CNh } from "./browserAnalytics.js";
import { Itr } from "./browserIds.js";
import { SNh, kNh } from "./browserTabId.js";
import { L8e, d0 } from "./browserViewStore.js";
import { Pe, _i } from "./codicons.js";
import { $n, ki, vi } from "./commands.js";
import { lb, n0 } from "./composerLogService.js";
import { dn, he, xn } from "./contextkey.js";
import { IBn, Xtt, Zv, cTe, yd } from "./contextkeys_2.js";
import { cs, ls, ts } from "./contributions.js";
import { Dm, lc } from "./descriptors.js";
import { Fc, wc } from "./dialogs.js";
import { Nc, gs } from "./editorGroupsService.js";
import { H0, MA } from "./editorInput.js";
import { BR, LA } from "./editorPane.js";
import { HI, WI, pb } from "./editorResolverService.js";
import { Ni, _1, hn } from "./editorService.js";
import { Wh, rj, xc } from "./editor_2.js";
import { B1, Ck } from "./editor_3.js";
import { Vr, Yi } from "./environmentService.js";
import { Kr, qs } from "./experimentService.js";
import { ALe, HBn } from "./glass-panel-resource-ownership-service.js";
import { a8, cG } from "./glassActiveAgentService.js";
import { Ze, _t } from "./instantiation.js";
import { Ie, Pr, fe } from "./keyCodes.js";
import { rt } from "./nls.js";
import { kn, rr } from "./platform_2.js";
import { qe } from "./qIc.js";
import { Yc_ } from "./renderBrowserEditor.js";
import { Kp, Us } from "./severity_2.js";
import { Tk, d8 } from "./sideBySideEditorInput.js";
import { Vn, yn } from "./storage_2.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { $Bn, pqt } from "./urlOpenToastService.js";
import { zn } from "./uuid.js";
function F8e() {
    const e = zn();
    return e.replace(/-/g, "").slice(0, SNh);
}
function PIo(e) {
    switch(e){
        case "opener_service":
        case "open_browser_urls_service":
            return "system";
        case "mcp_tool":
            return "agent";
        case "composer_input":
        case "editor_title_plus_button":
        case "context_menu_new_tab":
        case "target_blank":
        case "keyboard_shortcut":
        case "ipc_open_url":
        case "command_palette":
            return "user";
        default:
            return e;
    }
}
function wNh(e, t, n) {
    if (n?.headless || t !== "mcp_tool" || !e) return !1;
    try {
        const i = new URL(e);
        return (i.protocol === "http:" || i.protocol === "https:") && tet(i.hostname);
    } catch  {
        return !1;
    }
}
var POh = {};
function LOh(e, t) {
    let n = e.getLastUrl();
    const i = t.getView(e.browserId);
    if (i) {
        const r = i.getURL();
        r && (n = r);
    }
    return n;
}
var mb, Aqt, AAo, RAo, DAo, NOh, MAo, OOh, PAo, FOh, LAo, BOh, UOh, Rqt;
export { AAo, Aqt, BOh, DAo, F8e, FOh, LAo, LOh, MAo, NOh, OOh, PAo, PIo, POh, RAo, Rqt, UOh, mb, wNh };
var __wakaru_lnt_initialized = false;
export function lnt() {
if (__wakaru_lnt_initialized) return;
__wakaru_lnt_initialized = true;
"use strict";
x(), _i(), Se(), Qt(), rt(), Iu(), ei(), vi(), Fc(), Pr(), Dm(), Ze(), qs(), rr(), Vn(), as(), Vr(), B1(), BR(), xc(), MA(), d8(), rt(), la(), Nc(), Ni(), WI(), ls(), WCo(), L8e(), yd(), dn(), kNh(), Itr(), CNh(), n0(), Kp(), $Bn(), cG(), HBn(), mb = class extends H0 {
    constructor(e, t, n, i, r, s, o){
        super(), this.instantiationService = i, this.browserViewStore = r, this.dialogService = s, this.commandService = o, this.disposables = new He, this._isBeingHidden = !1, this.closeHandler = this, this.browserId = e, this.initialUrl = t, this.transient = n ?? !1, this.subscribeToTabState();
    }
    get typeId() {
        return mb.TypeID;
    }
    get editorId() {
        return mb.EditorID;
    }
    get resource() {
        return Ee.from({
            scheme: "cursor-browser",
            path: this.browserId
        });
    }
    getName() {
        return this.pageTitle ? this.pageTitle : "Browser Tab";
    }
    getIcon() {
        return Pe.globe;
    }
    getFaviconUri() {
        return this.faviconUrl ? Ee.parse(this.faviconUrl) : void 0;
    }
    getLastUrl() {
        return this.lastUrl;
    }
    setLastUrl(e) {
        this.lastUrl = e;
    }
    showConfirm() {
        return this._isBeingHidden ? !1 : this.browserViewStore.wasHeadless(this.browserId);
    }
    async confirm(e) {
        const { result: t } = await this.dialogService.prompt({
            type: Us.Warning,
            message: S(5241, null),
            detail: S(5242, null),
            buttons: [
                {
                    label: S(5243, null),
                    run: ()=>"hide"
                },
                {
                    label: S(5244, null),
                    run: ()=>"close"
                }
            ],
            cancelButton: {
                run: ()=>"cancel"
            }
        });
        return t === "hide" ? (this._isBeingHidden = !0, await this.commandService.executeCommand("cursor.browserView.hideTab", this.browserId), 1) : t === "close" ? 1 : 2;
    }
    subscribeToTabState() {
        const e = this.browserViewStore.getTabState(this.browserId);
        e && e.recomputeInitiallyAndOnChange(this.disposables, (t)=>{
            this.pageTitle = t?.pageTitle, this.faviconUrl = t?.favicon, t?.url && t.url !== "about:blank" ? this.lastUrl = t.url : t && (t.url === "" || t.url === "about:blank") && (this.lastUrl = void 0), this._onDidChangeLabel.fire();
        });
    }
    resetTitle() {
        this.pageTitle = void 0, this.faviconUrl = void 0, this._onDidChangeLabel.fire();
    }
    toUntyped() {
        return {
            resource: this.resource,
            options: {
                override: mb.EditorID,
                ...this.getLastUrl() && {
                    browserInitialUrl: this.getLastUrl()
                }
            }
        };
    }
    get capabilities() {
        return 2;
    }
    matches(e) {
        return e instanceof mb ? e.browserId === this.browserId : super.matches(e);
    }
    dispose() {
        this.disposables.dispose(), super.dispose();
    }
    getLabelExtraClasses() {
        return [
            "browser-editor-tab"
        ];
    }
}, mb.TypeID = "workbench.input.browserEditor", mb.EditorID = "workbench.editor.browserEditor", mb = ie([
    C(3, _t),
    C(4, d0),
    C(5, wc),
    C(6, $n)
], mb), Aqt = class extends LA {
    constructor(e, t, n, i, r, s, o, a, c){
        super(Aqt.ID, e, t, n), this.instantiationService = i, this.browserViewStore = r, this.editorGroupsService = s, this.dialogService = o, this.commandService = a, this._composerLogService = c, this._render = this._register(new cn), this._groupCloseListeners = this._register(new po);
    }
    createEditor(e) {}
    async setInput(e, t, n, i) {
        this._renderBrowserId !== e.browserId && (this._render.clear(), this._renderBrowserId = void 0), await super.setInput(e, t, n, i);
        const r = this.getContainer();
        if (r) {
            const s = e.browserId, o = this._currentBrowserId;
            if (o && o !== s) {
                const l = this.browserViewStore.getView(o);
                l && l.setPaneVisible(!1);
            }
            this._currentBrowserId = s;
            let a = this.browserViewStore.getView(s), c = !1;
            if (!a) {
                if (a = this.browserViewStore.createView(s), c = !0, await a.createBrowserView(), i.isCancellationRequested) {
                    await this.browserViewStore.destroyView(s);
                    return;
                }
                e.initialUrl && (e.initialUrl === "about:blank" ? a.updateTabState({
                    url: ""
                }) : (a.updateTabState({
                    url: e.initialUrl
                }), a.navigate(e.initialUrl))), e.subscribeToTabState();
            }
            if (this.browserViewStore.setActiveViewId(s), !this._render.value || this._renderBrowserId !== s || c) {
                this._render.clear(), this._renderBrowserId = void 0;
                const { renderBrowserEditor: l } = await Promise.resolve().then(()=>(Yc_(), POh));
                if (i.isCancellationRequested || this._currentBrowserId !== s) return;
                this._render.value = l(r, this.instantiationService, s, {
                    initialPreserveFocus: t?.preserveFocus,
                    transient: e.transient
                }), this._renderBrowserId = s;
            }
            if (!this._groupCloseListeners.has(s)) {
                const l = this.group.onWillCloseEditor(async (u)=>{
                    let h;
                    if (u.editor instanceof mb && u.editor.browserId === s ? h = u.editor : u.editor instanceof Tk && (u.editor.primary instanceof mb && u.editor.primary.browserId === s ? h = u.editor.primary : u.editor.secondary instanceof mb && u.editor.secondary.browserId === s && (h = u.editor.secondary)), !!h) {
                        if (u.context === rj.MOVE) {
                            this._groupCloseListeners.deleteAndDispose(s);
                            return;
                        }
                        if (u.context === rj.REPLACE) {
                            const p = this.group.activeEditor;
                            if (p instanceof mb && p.browserId === s || p instanceof Tk && (p.primary instanceof mb && p.primary.browserId === s || p.secondary instanceof mb && p.secondary.browserId === s)) return;
                        }
                        if (h._isBeingHidden) {
                            h._isBeingHidden = !1, this._groupCloseListeners.deleteAndDispose(s);
                            return;
                        }
                        try {
                            await this.browserViewStore.destroyView(s);
                        } catch (p) {
                            this._composerLogService.error("[BrowserEditorPane] Failed to destroy browser view:", p);
                        }
                        this._groupCloseListeners.deleteAndDispose(s);
                    }
                });
                this._groupCloseListeners.set(s, l);
            }
            this.isVisible() && a.setPaneVisible(!0);
        }
    }
    layout(e) {}
    focus() {
        this._render.value?.focus?.();
    }
    setEditorVisible(e) {
        if (super.setEditorVisible(e), this.browserViewStore.setBrowserEditorActive(e), this._currentBrowserId) {
            if (this.browserViewStore.isHeadless(this._currentBrowserId)) return;
            const n = this.browserViewStore.getView(this._currentBrowserId);
            n && n.setPaneVisible(e), e || this.browserViewStore.hideView(this._currentBrowserId);
        }
    }
}, Aqt.ID = mb.EditorID, Aqt = ie([
    C(1, $r),
    C(2, yn),
    C(3, _t),
    C(4, d0),
    C(5, gs),
    C(6, wc),
    C(7, $n),
    C(8, lb)
], Aqt), AAo = class RCm extends pt {
    constructor(){
        super({
            id: RCm.ID,
            title: Ae(5245, "Open Browser"),
            category: Kn.View,
            f1: !1,
            menu: [
                {
                    id: Re.MenubarAppearanceMenu,
                    group: "1_toggle_view",
                    order: 4,
                    when: bCt
                }
            ]
        });
    }
    async run(t, n) {
        const i = t.get(_t), r = t.get(hn), s = t.get(d0), o = t.get(Yi), a = t.get($n), c = t.get(lb), l = typeof n?.url == "string" ? n.url : void 0, u = n?.designMode === !0, h = n?.reuseExistingUrlTab === !0;
        let p = n?.inactive ?? !1, g = n?.preserveFocus ?? p;
        const f = n?.transient ?? !1;
        let v = n?.agentId;
        if (o.isGlass && n?.sourceBrowserId) {
            const E = t.get(ALe).getBrowserOwner(n.sourceBrowserId);
            v ??= E;
            const A = t.get(a8).getActiveAgentId();
            E !== void 0 && A !== void 0 && E !== A && (p = !0, g = !0);
        }
        if (wNh(l, n?.trackingId) && t.get(pqt).showUrlOpenToast(l), n?.trackingId) try {
            t.get(ca).trackEvent("browser.editor.opened", {
                trackingId: n.trackingId,
                opener: PIo(n.trackingId)
            });
        } catch  {}
        if (o.isGlass) {
            const T = !l && !g && !p;
            try {
                await a.executeCommand("glass.openBrowserTab", {
                    url: l,
                    preserveFocus: g,
                    inactive: p,
                    focusOmnibar: T,
                    browserId: n?.browserId,
                    transient: f,
                    agentId: v,
                    reveal: p ? !1 : void 0,
                    designMode: u,
                    ...h ? {
                        reuseExistingUrlTab: !0
                    } : {}
                });
                return;
            } catch (E) {
                c.error("[OpenBrowserEditorAction] Failed to open glass browser tab, falling back to editor:", E);
            }
        }
        const b = n?.browserId ?? F8e();
        if (p && l) {
            const T = s.createView(b);
            await T.createBrowserView(), T.updateTabState({
                url: l
            }), T.navigate(l);
        }
        const y = i.createInstance(mb, b, l, f);
        await r.openEditor(y, {
            pinned: !0,
            revealIfOpened: !g && !p,
            revealIfVisible: !g && !p,
            preserveFocus: g || p,
            inactive: p
        }, _1);
    }
}, AAo.ID = "workbench.action.openBrowserEditor", RAo = AAo, qe(RAo), DAo = class DCm extends pt {
    constructor(){
        super({
            id: DCm.ID,
            title: Ae(5246, "New Browser Tab"),
            category: Kn.View,
            f1: !0,
            precondition: bCt,
            keybinding: {
                primary: Ie.CtrlCmd | fe.KeyT,
                weight: 500,
                when: Zv.isEqualTo(mb.EditorID)
            }
        });
    }
    async run(t, n) {
        const i = t.get(Yi), r = t.get($n), s = t.get(hn), o = t.get(xn), a = t.get(_t), c = t.get(gs), l = t.get(lb), h = o.getContextKeyValue("inQuickInput") ? "command_palette" : "keyboard_shortcut";
        try {
            t.get(ca).trackEvent("browser.editor.opened", {
                trackingId: h,
                opener: PIo(h)
            });
        } catch  {}
        if (i.isGlass) try {
            await r.executeCommand("glass.openBrowserTab", {
                preserveFocus: !1,
                inactive: !1,
                focusOmnibar: !0
            });
            return;
        } catch (v) {
            l.error("[NewBrowserTabAction] Failed to open glass browser tab, falling back to editor:", v);
        }
        let p = _1;
        if (n?.sourceBrowserId) for (const v of c.groups){
            for (const b of v.editors)if (b instanceof mb && b.browserId === n.sourceBrowserId) {
                p = v;
                break;
            }
            if (p !== _1) break;
        }
        const g = F8e(), f = a.createInstance(mb, g, void 0, void 0);
        await s.openEditor(f, {
            pinned: !0
        }, p);
    }
}, DAo.ID = "workbench.action.newBrowserTab", NOh = DAo, qe(NOh), MAo = class MCm extends pt {
    constructor(){
        super({
            id: MCm.ID,
            title: Ae(5247, "Reload Browser Tab"),
            category: Kn.View,
            f1: !0,
            precondition: bCt,
            keybinding: {
                primary: Ie.CtrlCmd | fe.KeyR,
                weight: 600,
                when: Zv.isEqualTo(mb.EditorID)
            }
        });
    }
    async run(t) {
        const n = t.get(hn), i = t.get($n), r = n.activeEditor;
        r instanceof mb && await i.executeCommand("cursor.browserView.reload", r.browserId);
    }
}, MAo.ID = "workbench.action.reloadBrowserTab", OOh = MAo, qe(OOh), PAo = class PCm extends pt {
    constructor(){
        super({
            id: PCm.ID,
            title: Ae(5248, "Focus Browser Location Bar"),
            category: Kn.View,
            f1: !0,
            precondition: bCt,
            keybinding: {
                primary: Ie.CtrlCmd | fe.KeyL,
                weight: 600,
                when: he.and(Zv.isEqualTo(mb.EditorID), cTe.negate(), Xtt.negate(), IBn.negate())
            }
        });
    }
    async run(t) {
        const n = t.get(hn), i = t.get(d0), r = n.activeEditor;
        r instanceof mb && i.requestFocusUrlBar(r.browserId);
    }
}, PAo.ID = "workbench.action.focusBrowserLocationBar", FOh = PAo, qe(FOh), LAo = class LCm extends pt {
    constructor(){
        super({
            id: LCm.ID,
            title: Ae(5249, "Open cursor.com in Browser"),
            category: Kn.View,
            f1: !0,
            precondition: bCt
        });
    }
    async run(t) {
        const n = t.get($n), r = t.get(Kr).getDynamicConfigParam("browser_default_url_config", "defaultUrl", {
            disableExposureLog: !1
        }) ?? "https://cursor.com";
        let s = "https://cursor.com";
        try {
            new URL(r).origin === "https://cursor.com" && (s = r);
        } catch  {}
        await n.executeCommand(RAo.ID, {
            url: s
        });
    }
}, LAo.ID = "cursor.openCursorWebsite", BOh = LAo, qe(BOh), ki.registerCommand("browser.splitEditorWithNewBrowserTab", async (e, t, n)=>{
    const i = e.get(_t), r = e.get(d0);
    if (!(t instanceof mb)) return;
    const s = LOh(t, r), o = F8e(), a = i.createInstance(mb, o, s, void 0);
    await n.replaceEditors([
        {
            editor: t,
            replacement: i.createInstance(Tk, void 0, void 0, t, a),
            forceReplaceDirty: !0
        }
    ]);
}), ki.registerCommand("browser.splitEditorWithNewBrowserTabToDirection", async (e, t, n, i, r)=>{
    const s = e.get(_t), o = e.get(gs), a = e.get(hn), c = e.get(d0);
    if (!(t instanceof mb)) return;
    const l = LOh(t, c), u = F8e(), h = s.createInstance(mb, u, l, void 0);
    let p = o.findGroup({
        direction: i
    }, n);
    p || (p = o.addGroup(n, i)), await a.openEditor(h, {
        pinned: !0,
        preserveFocus: r
    }, p), r || p.focus();
}), UOh = class {
    canSerialize(e) {
        return e instanceof mb ? !e.transient : !1;
    }
    serialize(e) {
        if (!(e instanceof mb)) return;
        const t = {
            browserId: e.browserId,
            lastUrl: e.getLastUrl()
        };
        return JSON.stringify(t);
    }
    deserialize(e, t) {
        try {
            const n = JSON.parse(t);
            return n.browserId ? e.createInstance(mb, n.browserId, n.lastUrl, void 0) : e.createInstance(mb, F8e(), void 0, void 0);
        } catch  {
            return e.createInstance(mb, F8e(), void 0, void 0);
        }
    }
}, Rqt = class extends we {
    constructor(e, t){
        super(), this._register(e.registerEditor("cursor-browser:/**", {
            id: mb.EditorID,
            label: "Browser",
            priority: pb.builtin
        }, {
            canSupportResource: (n)=>n?.scheme === "cursor-browser"
        }, {
            createEditorInput: ({ resource: n, options: i })=>{
                const r = i?.browserInitialUrl, s = F8e();
                return {
                    editor: t.createInstance(mb, s, r, void 0),
                    options: i
                };
            }
        }));
    }
}, Rqt.ID = "workbench.contrib.browserEditorResolver", Rqt = ie([
    C(0, HI),
    C(1, _t)
], Rqt), ts(Rqt.ID, Rqt, cs.BlockStartup), kn.as(Wh.EditorPane).registerEditorPane(Ck.create(Aqt, mb.EditorID, "Browser"), [
    new lc(mb)
]), kn.as(Wh.EditorFactory).registerEditorSerializer(mb.TypeID, UOh);

}
