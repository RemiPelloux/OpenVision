import { P2w } from "./BA.js";
import { Q9e, jle } from "./IChatEditorGroupService.js";
import { At, D } from "./Iwo.js";
import { BP, eee } from "./Ycg.js";
import { Gm, Vi } from "./actionCommonCategories.js";
import { es, sn } from "./actions_2.js";
import { eme, y$ } from "./agentLayoutService.js";
import { yPn } from "./agentReviewLifecycleLog.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { K1l, YRi, Z9e, aPn, ems, mKg } from "./appLayoutActionIds.js";
import { XRi, n1 } from "./appLayoutStorageKeys.js";
import { gs, yt } from "./codicons.js";
import { nr, rs } from "./commands.js";
import { Yh, vS } from "./composer.js";
import { H4, rCt } from "./composerContextKeys.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Fb, LS } from "./composerEventService.js";
import { Bb, Ux } from "./composerViews.js";
import { Tj, pa } from "./constants_8.js";
import { Hi, Rr, mt } from "./contextkey.js";
import { ch, x_ } from "./contextkeys.js";
import { Q4, vf, yR } from "./contextkeys_2.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { Xh } from "./ipa.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Id, Pv } from "./layoutService_2.js";
import { Ji, Li } from "./log.js";
import { Bt } from "./nls.js";
import { NV, iNi } from "./reviewChangesEditor.js";
import { lat, zPe } from "./reviewChangesService.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { xL } from "./unificationGate.js";
import { hwi, pwi, q4 } from "./unifiedAppLayoutContextKeys.js";
import { wu } from "./utilities_3.js";
import { $t, Bs } from "./window.js";
import { Sr, yr } from "./workspace.js";
import { Ht } from "./ze.js";
var gBf, k9l, w9l, C9l, fBf, T9l, vBf, E9l, _Bf, I9l, x9l, A9l, R9l, bBf, iws, rws, sws, ows, P9l, yBf, M9l, SBf;
export { A9l, C9l, E9l, I9l, M9l, P9l, R9l, SBf, T9l, _Bf, bBf, fBf, gBf, iws, k9l, ows, rws, sws, vBf, w9l, x9l, yBf };
var __wakaru_D9l_initialized = false;
export function D9l() {
if (__wakaru_D9l_initialized) return;
__wakaru_D9l_initialized = true;
"use strict";
E(), Bs(), gs(), pa(), Ma(), Bt(), Gm(), es(), Hi(), x_(), rs(), Ji(), wu(), Zi(), Sr(), vf(), Ss(), yPn(), Ld(), Wo(), fo(), _s(), Pv(), xL(), vS(), Q9e(), H4(), Pl(), LS(), Ux(), iNi(), lat(), q4(), XRi(), eme(), aPn(), gBf = 350, k9l = 0, w9l = "workbench.agentLayoutControl.visibilityState", C9l = class yMb extends sn {
    constructor(){
        super({
            id: yMb.ID,
            title: {
                value: "Swap Agent Sidebar Location",
                original: "Swap Agent Sidebar Location"
            },
            f1: !0,
            keybinding: {
                primary: ut.CtrlCmd | Ze.KeyE,
                weight: 600,
                when: mt.and(mt.notEquals(Q4.key, "empty"), mt.equals("isGlass", !1))
            },
            precondition: mt.and(mt.notEquals(Q4.key, "empty"), mt.equals("isGlass", !1))
        });
    }
    async run(e) {
        const n = e.get(ki), i = e.get(yr), r = e.get(y$), s = e.get(Id);
        if (e.get(ps).isGlass || i.getWorkbenchState() === 1) return;
        const l = Date.now();
        if (l - k9l < gBf) return;
        k9l = l;
        const c = Xh(n, "unifiedAppLayout");
        try {
            if (c.get() !== Tj.Agent) {
                const p = s.getSize("workbench.parts.panel").height;
                r.markTogglingStart(!0), c.set(Tj.Agent, void 0), await r.enableUnificationMode({
                    panelHeight: p
                });
            }
            const d = (n.get(n1.SIDEBAR_LOCATION, 1) ?? n.get(n1.SIDEBAR_LOCATION_AGENT_OVERRIDE, -1) ?? "left") !== "left", h = d ? "left" : "right";
            await r.setUnifiedSidebarLocation(h), s.setPartHidden(!d, "workbench.parts.unifiedsidebar"), s.setPartHidden(d, "workbench.parts.sidebar"), s.setPartHidden(!1, "workbench.parts.auxiliarybar"), s.setPartHidden(!1, "workbench.parts.editor", $t), s.setPartHidden(!0, "workbench.parts.panel"), n.store("workbench.unifiedSidebar.hidden", d ? "false" : "true", 1, 1);
        } finally{
            c.dispose();
        }
    }
}, C9l.ID = mKg, fBf = C9l, Ht(fBf), T9l = class SMb extends sn {
    constructor(){
        super({
            id: SMb.ID,
            title: {
                value: "[Dev] Agent Layout: Toggle Debug Tabs",
                original: "[Dev] Agent Layout: Toggle Debug Tabs"
            },
            category: Vi.Developer,
            f1: !0,
            precondition: ch
        });
    }
    async run(e) {
        const n = e.get(y$), i = n.showDebugTabs.get();
        n.showDebugTabs.set(!i, void 0);
    }
}, T9l.ID = "cursor.dev.toggleDebugTabs", vBf = T9l, Ht(vBf), E9l = class kMb extends sn {
    constructor(){
        super({
            id: kMb.ID,
            title: {
                value: "Open Agent Changes",
                original: "Open Agent Changes"
            },
            icon: yt.diff,
            f1: !0,
            keybinding: {
                primary: ut.CtrlCmd | ut.Shift | Ze.KeyR,
                weight: 500,
                when: rCt
            }
        });
    }
    async run(e, n) {
        const i = e.get(zPe), r = e.get(no), s = e.get(Qr), o = n?.composerId ?? r.selectedComposerId;
        if (!o) return;
        const l = r.getComposerDataIfLoaded(o)?.createdFromBackgroundAgent?.bcId, c = l !== void 0;
        s.trackEvent("review_changes.opened", {
            entrypoint: "action",
            composer_id: o ?? void 0
        }), await i.openOrUpdateReviewChangesEditor(o, c ? {
            fromBackgroundAgent: {
                bcId: l
            }
        } : void 0);
    }
}, E9l.ID = "cursor.openAgentChangesEditor", _Bf = E9l, Ht(_Bf), I9l = class wMb extends sn {
    constructor(){
        super({
            id: wMb.ID,
            title: {
                value: "Close Agent Changes",
                original: "Close Agent Changes"
            }
        });
    }
    async run(e) {
        const n = e.get(gr), i = e.get(_a), r = e.get(Li);
        for (const s of i.groups)for (const o of s.editors)if (o instanceof NV) {
            if (o.options?.gitMode || o.options?.fromBugbot) {
                o.options?.fromBugbot && eee(r, "CloseReviewChangesAction.skipFromBugbot", {
                    composerId: o.composerId,
                    name: o.getName(),
                    groupId: s.id
                });
                continue;
            }
            eee(r, "CloseReviewChangesAction.close", {
                fromBugbot: !1,
                composerId: o.composerId,
                name: o.getName(),
                groupId: s.id
            }), await n.closeEditor({
                editor: o,
                groupId: s.id
            });
            return;
        }
    }
}, I9l.ID = "cursor.closeAgentChangesEditor", x9l = I9l, Ht(x9l), A9l = "cursor.openBranchMenu", R9l = class CMb extends sn {
    constructor(){
        super({
            id: CMb.ID,
            title: {
                value: "Open Branch Menu",
                original: "Open Branch Menu"
            },
            f1: !0,
            keybinding: {
                primary: ut.CtrlCmd | Ze.Quote,
                weight: 600,
                when: mt.has("composerFocused")
            }
        });
    }
    async run(e) {
        const n = e.get(no), i = e.get(Yh), r = e.get(Fb), s = n.selectedComposerId;
        !s || !n.getComposerDataIfLoaded(s) || !i.isComposerConversationEmpty(s) || r.fireDidRequestOpenBranchMenu({
            composerId: s
        });
    }
}, R9l.ID = A9l, bBf = R9l, Ht(bBf), iws = class peu extends sn {
    constructor(){
        super({
            id: peu.ID,
            title: peu.LABEL,
            toggled: {
                condition: hwi,
                title: D(4777, null)
            },
            category: Vi.View,
            f1: !1,
            precondition: yR.toNegated(),
            metadata: {
                description: D(4778, null)
            }
        });
    }
    async run(e, n) {
        const i = e.get(Id), r = e.get(ki), s = e.get(Rr), o = e.get(Qr), a = e.get(ps), l = e.get(nr);
        if (a.isGlass) {
            await l.executeCommand("glass.togglePanel");
            return;
        }
        if (s.getContextKeyValue(yR.key) === !0) return;
        const d = i.isVisible("workbench.parts.unifiedsidebar");
        let h;
        d ? (i.setPartHidden(!0, "workbench.parts.unifiedsidebar"), r.store("workbench.unifiedSidebar.hidden", "true", 1, 1), h = !1) : (i.setPartHidden(!1, "workbench.parts.unifiedsidebar"), r.store("workbench.unifiedSidebar.hidden", "false", 1, 1), h = !0);
        const p = n?.triggered_by ?? "command_palette";
        o.trackEvent("unified_sidebar.toggle", {
            is_visible: h,
            triggered_by: p
        });
    }
}, iws.ID = Z9e, iws.LABEL = At(4781, "Toggle Agents Side Bar"), rws = iws, Ht(rws), sws = class meu extends sn {
    constructor(){
        super({
            id: meu.ID,
            title: meu.LABEL,
            toggled: {
                condition: pwi,
                title: D(4779, null)
            },
            category: Vi.View,
            f1: !1,
            precondition: yR.toNegated(),
            metadata: {
                description: D(4780, null)
            }
        });
    }
    async run(e, n) {
        const i = e.get(Id), r = e.get(ki), s = e.get(Rr), o = e.get(Qr), a = e.get(ps), l = e.get(nr), c = e.get(Cr), u = e.get(Yh), d = e.get(jle), h = e.get(no), p = e.get(Bb);
        if (a.isGlass) {
            await l.executeCommand("glass.togglePanel");
            return;
        }
        if (s.getContextKeyValue(yR.key) === !0) return;
        const f = BP(r, c), _ = i.isVisible("workbench.parts.auxiliarybar"), b = i.isVisible("workbench.parts.unifiedsidebar"), y = _ || b;
        let S;
        if (y) r.store(w9l, JSON.stringify({
            auxBarVisible: _,
            unifiedSidebarVisible: b
        }), 1, 1), f && _ ? await d.hideChatEditorGroup() : i.setPartHidden(!0, "workbench.parts.auxiliarybar"), i.setPartHidden(!0, "workbench.parts.unifiedsidebar"), r.store("workbench.unifiedSidebar.hidden", "true", 1, 1), S = !1;
        else {
            const C = P2w(r.get(w9l, 1)), T = r.get("workbench.unifiedSidebar.hidden", 1) !== "true";
            let I = C?.auxBarVisible ?? !0, A = C?.unifiedSidebarVisible ?? T;
            !I && !A && (I = !0), I && (f ? await d.ensureChatVisibleOrCreate() : h.selectedComposerIds.filter((M)=>p.getComposerLocation(M) === "pane").length === 0 && await u.createComposer({
                view: "pane",
                unifiedMode: "agent",
                openInNewTab: !0,
                skipClose: !0
            })), (!f || !I) && i.setPartHidden(!I, "workbench.parts.auxiliarybar"), i.setPartHidden(!A, "workbench.parts.unifiedsidebar"), r.store("workbench.unifiedSidebar.hidden", A ? "false" : "true", 1, 1), S = I || A;
        }
        const k = n?.triggered_by ?? "command_palette";
        o.trackEvent("unified_sidebar.toggle", {
            is_visible: S,
            triggered_by: k
        });
    }
}, sws.ID = ems, sws.LABEL = At(4782, "Toggle Agents"), ows = sws, Ht(ows), P9l = class TMb extends sn {
    constructor(){
        super({
            id: TMb.ID,
            title: rws.LABEL,
            f1: !1,
            keybinding: {
                weight: 600,
                primary: ut.CtrlCmd | ut.Alt | Ze.KeyU,
                when: mt.and(yR.toNegated())
            },
            precondition: mt.and(yR.toNegated())
        });
    }
    async run(e) {
        await e.get(nr).executeCommand(rws.ID, {
            triggered_by: "keyboard"
        });
    }
}, P9l.ID = YRi, yBf = P9l, Ht(yBf), M9l = class EMb extends sn {
    constructor(){
        super({
            id: EMb.ID,
            title: ows.LABEL,
            f1: !1,
            keybinding: {
                weight: 600,
                primary: ut.CtrlCmd | ut.Alt | Ze.KeyJ,
                when: mt.and(yR.toNegated(), mt.equals("isGlass", !1))
            },
            precondition: mt.and(yR.toNegated(), mt.equals("isGlass", !1))
        });
    }
    async run(e) {
        await e.get(nr).executeCommand(ows.ID, {
            triggered_by: "keyboard"
        });
    }
}, M9l.ID = K1l, SBf = M9l, Ht(SBf);

}
