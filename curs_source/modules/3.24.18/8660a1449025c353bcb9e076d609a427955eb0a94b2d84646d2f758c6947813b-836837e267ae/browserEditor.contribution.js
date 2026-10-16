import { At, D, Nt, Qe, Vn, da, st } from "./Iwo.js";
import { Yat, _0g, b0g, ipl, mkg } from "./Ycg.js";
import { Gm, Vi } from "./actionCommonCategories.js";
import { Ft, es, sn } from "./actions_2.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Fol, zzt } from "./appLayoutContextKeys.js";
import { gkg } from "./browserAnalytics.js";
import { vEt } from "./browserIds.js";
import { pkg } from "./browserTabId.js";
import { K1, PX } from "./browserViewStore.js";
import { gs, yt } from "./codicons.js";
import { hs, nr, rs } from "./commands.js";
import { iI, w1 } from "./composerLogService.js";
import { Hi, Rr, mt } from "./contextkey.js";
import { J4, Jze, cxi, uxi, vf } from "./contextkeys_2.js";
import { $o, Ho, ea } from "./contributions.js";
import { L1, tm } from "./descriptors.js";
import { bd, hd } from "./dialogs.js";
import { Ld, _a } from "./editorGroupsService.js";
import { AA, qO } from "./editorInput.js";
import { DX, KJ } from "./editorPane.js";
import { D6, M6, c0 } from "./editorResolverService.js";
import { Wo, cB, gr } from "./editorService.js";
import { Zv, od, pne } from "./editor_2.js";
import { e9, r3 } from "./editor_3.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { hme, vG } from "./glass-panel-resource-ownership-service.js";
import { Hv, vm } from "./glassActiveAgentService.js";
import { It, dn } from "./instantiation.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { MIk } from "./renderBrowserEditor.js";
import { Ua, ob } from "./severity_2.js";
import { bV, dC } from "./sideBySideEditorInput.js";
import { Zi, ki } from "./storage_2.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { kxi, mRn } from "./urlOpenToastService.js";
import { F, Re } from "./userDataProfile.js";
import { Ht } from "./ze.js";
var E1, RRn, Zpl, Qpl, Jpl, y0g, eml, S0g, tml, k0g, nml, w0g, C0g, PRn;
export { C0g, E1, Jpl, PRn, Qpl, RRn, S0g, Zpl, eml, k0g, nml, tml, w0g, y0g };
var __wakaru_SEt_initialized = false;
export function SEt() {
if (__wakaru_SEt_initialized) return;
__wakaru_SEt_initialized = true;
"use strict";
E(), gs(), Qe(), fn(), Bt(), Gm(), es(), rs(), bd(), Ma(), L1(), It(), _s(), Eo(), Zi(), Dl(), fo(), e9(), KJ(), od(), qO(), bV(), Bt(), Ss(), Ld(), Wo(), D6(), ea(), Fol(), PX(), vf(), Hi(), pkg(), vEt(), gkg(), iI(), ob(), kxi(), Hv(), hme(), E1 = class extends AA {
    constructor(t, e, n, i, r, s, o){
        super(), this.instantiationService = i, this.browserViewStore = r, this.dialogService = s, this.commandService = o, this.disposables = new Nt, this._isBeingHidden = !1, this.closeHandler = this, this.browserId = t, this.initialUrl = e, this.transient = n ?? !1, this.subscribeToTabState();
    }
    get typeId() {
        return E1.TypeID;
    }
    get editorId() {
        return E1.EditorID;
    }
    get resource() {
        return rt.from({
            scheme: "cursor-browser",
            path: this.browserId
        });
    }
    getName() {
        return this.pageTitle ? this.pageTitle : "Browser Tab";
    }
    getIcon() {
        return yt.globe;
    }
    getFaviconUri() {
        return this.faviconUrl ? rt.parse(this.faviconUrl) : void 0;
    }
    getLastUrl() {
        return this.lastUrl;
    }
    setLastUrl(t) {
        this.lastUrl = t;
    }
    showConfirm() {
        return this._isBeingHidden ? !1 : this.browserViewStore.wasHeadless(this.browserId);
    }
    async confirm(t) {
        const { result: e } = await this.dialogService.prompt({
            type: Ua.Warning,
            message: D(5241, null),
            detail: D(5242, null),
            buttons: [
                {
                    label: D(5243, null),
                    run: ()=>"hide"
                },
                {
                    label: D(5244, null),
                    run: ()=>"close"
                }
            ],
            cancelButton: {
                run: ()=>"cancel"
            }
        });
        return e === "hide" ? (this._isBeingHidden = !0, await this.commandService.executeCommand("cursor.browserView.hideTab", this.browserId), 1) : e === "close" ? 1 : 2;
    }
    subscribeToTabState() {
        const t = this.browserViewStore.getTabState(this.browserId);
        t && t.recomputeInitiallyAndOnChange(this.disposables, (e)=>{
            this.pageTitle = e?.pageTitle, this.faviconUrl = e?.favicon, e?.url && e.url !== "about:blank" ? this.lastUrl = e.url : e && (e.url === "" || e.url === "about:blank") && (this.lastUrl = void 0), this._onDidChangeLabel.fire();
        });
    }
    resetTitle() {
        this.pageTitle = void 0, this.faviconUrl = void 0, this._onDidChangeLabel.fire();
    }
    toUntyped() {
        return {
            resource: this.resource,
            options: {
                override: E1.EditorID,
                ...this.getLastUrl() && {
                    browserInitialUrl: this.getLastUrl()
                }
            }
        };
    }
    get capabilities() {
        return 2;
    }
    matches(t) {
        return t instanceof E1 ? t.browserId === this.browserId : super.matches(t);
    }
    dispose() {
        this.disposables.dispose(), super.dispose();
    }
    getLabelExtraClasses() {
        return [
            "browser-editor-tab"
        ];
    }
}, E1.TypeID = "workbench.input.browserEditor", E1.EditorID = "workbench.editor.browserEditor", E1 = Re([
    F(3, dn),
    F(4, K1),
    F(5, hd),
    F(6, nr)
], E1), RRn = class extends DX {
    constructor(t, e, n, i, r, s, o, a, l){
        super(RRn.ID, t, e, n), this.instantiationService = i, this.browserViewStore = r, this.editorGroupsService = s, this.dialogService = o, this.commandService = a, this._composerLogService = l, this._render = this._register(new Vn), this._groupCloseListeners = this._register(new da);
    }
    createEditor(t) {}
    async setInput(t, e, n, i) {
        this._renderBrowserId !== t.browserId && (this._render.clear(), this._renderBrowserId = void 0), await super.setInput(t, e, n, i);
        const r = this.getContainer();
        if (r) {
            const s = t.browserId, o = this._currentBrowserId;
            if (o && o !== s) {
                const c = this.browserViewStore.getView(o);
                c && c.setPaneVisible(!1);
            }
            this._currentBrowserId = s;
            let a = this.browserViewStore.getView(s), l = !1;
            if (!a) {
                if (a = this.browserViewStore.createView(s), l = !0, await a.createBrowserView(), i.isCancellationRequested) {
                    await this.browserViewStore.destroyView(s);
                    return;
                }
                t.initialUrl && (t.initialUrl === "about:blank" ? a.updateTabState({
                    url: ""
                }) : (a.updateTabState({
                    url: t.initialUrl
                }), a.navigate(t.initialUrl))), t.subscribeToTabState();
            }
            if (this.browserViewStore.setActiveViewId(s), !this._render.value || this._renderBrowserId !== s || l) {
                this._render.clear(), this._renderBrowserId = void 0;
                const { renderBrowserEditor: c } = await Promise.resolve().then(()=>(MIk(), _0g));
                if (i.isCancellationRequested || this._currentBrowserId !== s) return;
                this._render.value = c(r, this.instantiationService, s, {
                    initialPreserveFocus: e?.preserveFocus,
                    transient: t.transient
                }), this._renderBrowserId = s;
            }
            if (!this._groupCloseListeners.has(s)) {
                const c = this.group.onWillCloseEditor(async (u)=>{
                    let d;
                    if (u.editor instanceof E1 && u.editor.browserId === s ? d = u.editor : u.editor instanceof dC && (u.editor.primary instanceof E1 && u.editor.primary.browserId === s ? d = u.editor.primary : u.editor.secondary instanceof E1 && u.editor.secondary.browserId === s && (d = u.editor.secondary)), !!d) {
                        if (u.context === pne.MOVE) {
                            this._groupCloseListeners.deleteAndDispose(s);
                            return;
                        }
                        if (u.context === pne.REPLACE) {
                            const h = this.group.activeEditor;
                            if (h instanceof E1 && h.browserId === s || h instanceof dC && (h.primary instanceof E1 && h.primary.browserId === s || h.secondary instanceof E1 && h.secondary.browserId === s)) return;
                        }
                        if (d._isBeingHidden) {
                            d._isBeingHidden = !1, this._groupCloseListeners.deleteAndDispose(s);
                            return;
                        }
                        try {
                            await this.browserViewStore.destroyView(s);
                        } catch (h) {
                            this._composerLogService.error("[BrowserEditorPane] Failed to destroy browser view:", h);
                        }
                        this._groupCloseListeners.deleteAndDispose(s);
                    }
                });
                this._groupCloseListeners.set(s, c);
            }
            this.isVisible() && a.setPaneVisible(!0);
        }
    }
    layout(t) {}
    focus() {
        this._render.value?.focus?.();
    }
    setEditorVisible(t) {
        if (super.setEditorVisible(t), this.browserViewStore.setBrowserEditorActive(t), this._currentBrowserId) {
            if (this.browserViewStore.isHeadless(this._currentBrowserId)) return;
            const n = this.browserViewStore.getView(this._currentBrowserId);
            n && n.setPaneVisible(t), t || this.browserViewStore.hideView(this._currentBrowserId);
        }
    }
}, RRn.ID = E1.EditorID, RRn = Re([
    F(1, Ml),
    F(2, ki),
    F(3, dn),
    F(4, K1),
    F(5, _a),
    F(6, hd),
    F(7, nr),
    F(8, w1)
], RRn), Zpl = class gPb extends sn {
    constructor(){
        super({
            id: gPb.ID,
            title: At(5245, "Open Browser"),
            category: Vi.View,
            f1: !1,
            menu: [
                {
                    id: Ft.MenubarAppearanceMenu,
                    group: "1_toggle_view",
                    order: 4,
                    when: zzt
                }
            ]
        });
    }
    async run(e, n) {
        const i = e.get(dn), r = e.get(gr), s = e.get(K1), o = e.get(ps), a = e.get(nr), l = e.get(w1), c = typeof n?.url == "string" ? n.url : void 0, u = n?.designMode === !0, d = n?.reuseExistingUrlTab === !0;
        let h = n?.inactive ?? !1, p = n?.preserveFocus ?? h;
        const g = n?.transient ?? !1;
        let f = n?.agentId;
        if (o.isGlass && n?.sourceBrowserId) {
            const S = e.get(vG).getBrowserOwner(n.sourceBrowserId);
            f ??= S;
            const k = e.get(vm).getActiveAgentId();
            S !== void 0 && k !== void 0 && S !== k && (h = !0, p = !0);
        }
        if (mkg(c, n?.trackingId) && e.get(mRn).showUrlOpenToast(c), n?.trackingId) try {
            e.get(Qr).trackEvent("browser.editor.opened", {
                trackingId: n.trackingId,
                opener: ipl(n.trackingId)
            });
        } catch  {}
        if (o.isGlass) {
            const y = !c && !p && !h;
            try {
                await a.executeCommand("glass.openBrowserTab", {
                    url: c,
                    preserveFocus: p,
                    inactive: h,
                    focusOmnibar: y,
                    browserId: n?.browserId,
                    transient: g,
                    agentId: f,
                    reveal: h ? !1 : void 0,
                    designMode: u,
                    ...d ? {
                        reuseExistingUrlTab: !0
                    } : {}
                });
                return;
            } catch (S) {
                l.error("[OpenBrowserEditorAction] Failed to open glass browser tab, falling back to editor:", S);
            }
        }
        const _ = n?.browserId ?? Yat();
        if (h && c) {
            const y = s.createView(_);
            await y.createBrowserView(), y.updateTabState({
                url: c
            }), y.navigate(c);
        }
        const b = i.createInstance(E1, _, c, g);
        await r.openEditor(b, {
            pinned: !0,
            revealIfOpened: !p && !h,
            revealIfVisible: !p && !h,
            preserveFocus: p || h,
            inactive: h
        }, cB);
    }
}, Zpl.ID = "workbench.action.openBrowserEditor", Qpl = Zpl, Ht(Qpl), Jpl = class fPb extends sn {
    constructor(){
        super({
            id: fPb.ID,
            title: At(5246, "New Browser Tab"),
            category: Vi.View,
            f1: !0,
            precondition: zzt,
            keybinding: {
                primary: ut.CtrlCmd | Ze.KeyT,
                weight: 500,
                when: J4.isEqualTo(E1.EditorID)
            }
        });
    }
    async run(e, n) {
        const i = e.get(ps), r = e.get(nr), s = e.get(gr), o = e.get(Rr), a = e.get(dn), l = e.get(_a), c = e.get(w1), d = o.getContextKeyValue("inQuickInput") ? "command_palette" : "keyboard_shortcut";
        try {
            e.get(Qr).trackEvent("browser.editor.opened", {
                trackingId: d,
                opener: ipl(d)
            });
        } catch  {}
        if (i.isGlass) try {
            await r.executeCommand("glass.openBrowserTab", {
                preserveFocus: !1,
                inactive: !1,
                focusOmnibar: !0
            });
            return;
        } catch (f) {
            c.error("[NewBrowserTabAction] Failed to open glass browser tab, falling back to editor:", f);
        }
        let h = cB;
        if (n?.sourceBrowserId) for (const f of l.groups){
            for (const _ of f.editors)if (_ instanceof E1 && _.browserId === n.sourceBrowserId) {
                h = f;
                break;
            }
            if (h !== cB) break;
        }
        const p = Yat(), g = a.createInstance(E1, p, void 0, void 0);
        await s.openEditor(g, {
            pinned: !0
        }, h);
    }
}, Jpl.ID = "workbench.action.newBrowserTab", y0g = Jpl, Ht(y0g), eml = class vPb extends sn {
    constructor(){
        super({
            id: vPb.ID,
            title: At(5247, "Reload Browser Tab"),
            category: Vi.View,
            f1: !0,
            precondition: zzt,
            keybinding: {
                primary: ut.CtrlCmd | Ze.KeyR,
                weight: 600,
                when: J4.isEqualTo(E1.EditorID)
            }
        });
    }
    async run(e) {
        const n = e.get(gr), i = e.get(nr), r = n.activeEditor;
        r instanceof E1 && await i.executeCommand("cursor.browserView.reload", r.browserId);
    }
}, eml.ID = "workbench.action.reloadBrowserTab", S0g = eml, Ht(S0g), tml = class _Pb extends sn {
    constructor(){
        super({
            id: _Pb.ID,
            title: At(5248, "Focus Browser Location Bar"),
            category: Vi.View,
            f1: !0,
            precondition: zzt,
            keybinding: {
                primary: ut.CtrlCmd | Ze.KeyL,
                weight: 600,
                when: mt.and(J4.isEqualTo(E1.EditorID), Jze.negate(), uxi.negate(), cxi.negate())
            }
        });
    }
    async run(e) {
        const n = e.get(gr), i = e.get(K1), r = n.activeEditor;
        r instanceof E1 && i.requestFocusUrlBar(r.browserId);
    }
}, tml.ID = "workbench.action.focusBrowserLocationBar", k0g = tml, Ht(k0g), nml = class bPb extends sn {
    constructor(){
        super({
            id: bPb.ID,
            title: At(5249, "Open cursor.com in Browser"),
            category: Vi.View,
            f1: !0,
            precondition: zzt
        });
    }
    async run(e) {
        const n = e.get(nr), r = e.get(Cr).getDynamicConfigParam("browser_default_url_config", "defaultUrl", {
            disableExposureLog: !1
        }) ?? "https://cursor.com";
        let s = "https://cursor.com";
        try {
            new URL(r).origin === "https://cursor.com" && (s = r);
        } catch  {}
        await n.executeCommand(Qpl.ID, {
            url: s
        });
    }
}, nml.ID = "cursor.openCursorWebsite", w0g = nml, Ht(w0g), hs.registerCommand("browser.splitEditorWithNewBrowserTab", async (t, e, n)=>{
    const i = t.get(dn), r = t.get(K1);
    if (!(e instanceof E1)) return;
    const s = b0g(e, r), o = Yat(), a = i.createInstance(E1, o, s, void 0);
    await n.replaceEditors([
        {
            editor: e,
            replacement: i.createInstance(dC, void 0, void 0, e, a),
            forceReplaceDirty: !0
        }
    ]);
}), hs.registerCommand("browser.splitEditorWithNewBrowserTabToDirection", async (t, e, n, i, r)=>{
    const s = t.get(dn), o = t.get(_a), a = t.get(gr), l = t.get(K1);
    if (!(e instanceof E1)) return;
    const c = b0g(e, l), u = Yat(), d = s.createInstance(E1, u, c, void 0);
    let h = o.findGroup({
        direction: i
    }, n);
    h || (h = o.addGroup(n, i)), await a.openEditor(d, {
        pinned: !0,
        preserveFocus: r
    }, h), r || h.focus();
}), C0g = class {
    canSerialize(t) {
        return t instanceof E1 ? !t.transient : !1;
    }
    serialize(t) {
        if (!(t instanceof E1)) return;
        const e = {
            browserId: t.browserId,
            lastUrl: t.getLastUrl()
        };
        return JSON.stringify(e);
    }
    deserialize(t, e) {
        try {
            const n = JSON.parse(e);
            return n.browserId ? t.createInstance(E1, n.browserId, n.lastUrl, void 0) : t.createInstance(E1, Yat(), void 0, void 0);
        } catch  {
            return t.createInstance(E1, Yat(), void 0, void 0);
        }
    }
}, PRn = class extends st {
    constructor(t, e){
        super(), this._register(t.registerEditor("cursor-browser:/**", {
            id: E1.EditorID,
            label: "Browser",
            priority: c0.builtin
        }, {
            canSupportResource: (n)=>n?.scheme === "cursor-browser"
        }, {
            createEditorInput: ({ resource: n, options: i })=>{
                const r = i?.browserInitialUrl, s = Yat();
                return {
                    editor: e.createInstance(E1, s, r, void 0),
                    options: i
                };
            }
        }));
    }
}, PRn.ID = "workbench.contrib.browserEditorResolver", PRn = Re([
    F(0, M6),
    F(1, dn)
], PRn), Ho(PRn.ID, PRn, $o.BlockStartup), Fi.as(Zv.EditorPane).registerEditorPane(r3.create(RRn, E1.EditorID, "Browser"), [
    new tm(E1)
]), Fi.as(Zv.EditorFactory).registerEditorSerializer(E1.TypeID, C0g);

}
