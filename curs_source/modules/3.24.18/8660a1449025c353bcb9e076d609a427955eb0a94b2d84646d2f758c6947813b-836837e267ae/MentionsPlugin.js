import { S2k } from "./ComposerContextPreview.js";
import { y9e } from "./ComposerUnifiedContextMenu.js";
import { w2k } from "./InputBoxBrowserChanges.js";
import { C2k } from "./InputBoxElementSelection.js";
import { FDk } from "./InputBoxMenu.js";
import { Ga, Qe } from "./Iwo.js";
import { cI } from "./LexicalComposerContext.js";
import { Tus } from "./LexicalMenu.js";
import { AEg } from "./LexicalTypeaheadMenuPlugin.js";
import { Xat } from "./MentionNode.js";
import { jDk } from "./MentionsPlugin.css";
import { x2k } from "./SlashMenuWrapper.js";
import { Gr, ODk, ZDk, aS, uTg, y2k } from "./Ycg.js";
import { NA } from "./api_7.js";
import { SEt } from "./browserEditor.contribution.js";
import { mgl } from "./bugbotAvailability.js";
import { gs } from "./codicons.js";
import { Ef, cPp, dPp, lPp, uPp } from "./constants_18.js";
import { cW } from "./context_pb.js";
import { KDk } from "./cursorSkillMentionOption.js";
import { KPe } from "./customizeCommandRouting.js";
import { bO } from "./dnd_3.js";
import { fTe } from "./dnd_5.js";
import { Hn } from "./dom_2.js";
import { EB } from "./getIconClasses.js";
import { Iw } from "./hoverWidget.js";
import { nl } from "./index.ts";
import { Ak } from "./ipa.js";
import { nT } from "./keyboardEvent.js";
import { CRk } from "./mcpUtils_2.js";
import { WDk } from "./mentionRemoveKeys.js";
import { qc } from "./opener.js";
import { Ul } from "./path_2.js";
import { Qs } from "./range.js";
import { Lae } from "./reactiveStorageTypes.js";
import { Um } from "./reactiveStorageTypes_2.js";
import { UDk } from "./recognizers.js";
import { XIg } from "./searchHooks.js";
import { ob } from "./severity_2.js";
import { RPg } from "./skillTelemetry.js";
import { Hqt } from "./slashMenuData.js";
import { vo } from "./solidContext.js";
import { v1 } from "./store.js";
import { KHt } from "./suggestController.js";
import { mKt } from "./terminalService.js";
import { ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { Sz, to } from "./types_4.js";
import { fn } from "./uri.js";
import { ZVt } from "./useComposerPaneContext.js";
import { Jat } from "./useLargeHoverTooltip.js";
import { XDk } from "./useSlashMenuSections.js";
import { oT } from "./utils_16.js";
import { rC } from "./utils_23.js";
import { JDk } from "./utils_31.js";
import { Xo } from "./uuid_2.js";
import { at } from "./web.js";
import { Sr } from "./workspace.js";
import { Le, wt, zu } from "./yBp.js";
import { Cn, Ee, On, Ut, V_, Wt, gz, pi, vt } from "./ze.js";
var qvl, DPg, NPg, LPg;
export { DPg, LPg, NPg, qvl };
var __wakaru_OPg_initialized = false;
export function OPg() {
if (__wakaru_OPg_initialized) return;
__wakaru_OPg_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), v1(), cI(), AEg(), Tus(), NA(), Ak(), cW(), Hn(), nT(), gz(), Iw(), Ga(), gs(), Qe(), Ul(), ob(), ta(), fn(), Xo(), Qs(), EB(), KHt(), bO(), qc(), Lae(), Um(), Sr(), fTe(), CRk(), mgl(), oT(), KPe(), SEt(), S2k(), y9e(), Ef(), ZVt(), rC(), Jat(), w2k(), C2k(), Hqt(), x2k(), aS(), vo(), mKt(), FDk(), UDk(), Xat(), jDk(), WDk(), XIg(), RPg(), KDk(), Sz(), XDk(), nl(), JDk(), qvl = wt("<i>"), DPg = wt('<div class="flex flex-col relative">'), NPg = (t)=>{
    const e = Gr(), [n, i] = Wt(null), [r, s] = Wt(void 0);
    Cn(()=>{
        if (t.selectedOption.selectionPrecursor) {
            const a = e.cursorIgnoreService.shouldIgnoreUriSync(t.selectedOption.selectionPrecursor.uri);
            s(a?.type === "cursorIgnore" ? a : void 0);
        } else s(void 0);
    });
    const o = ()=>{
        const a = t.getItemId, l = t.selectedIndex, c = t.optionsListRef;
        if (!c) return;
        const u = e.window.requestIdleCallback(()=>{
            const d = e.window.document.getElementById(a(l));
            if (d && c) {
                const h = d.getBoundingClientRect(), p = c.getBoundingClientRect(), g = p.width + 3, f = l === 0 ? -2 : 0, _ = h.top - p.top + f, b = Math.max(0, Math.min(_, p.height - 10));
                i({
                    x: g,
                    y: b
                });
            }
        });
        On(()=>{
            u && e.window.cancelIdleCallback(u);
        });
    };
    return Cn(()=>{
        o();
    }), Cn(V_(()=>t.refreshPreviewTrigger(), ()=>{
        o();
    }, {
        defer: !0
    })), Ee(Ut, {
        get when () {
            return n();
        },
        children: (a)=>Ee(y2k, {
                type: "mention-option",
                get position () {
                    return {
                        isRelative: !0,
                        x: a().x,
                        y: a().y
                    };
                },
                anchor: "top-left",
                animationType: "none",
                get nonBlockingRoot () {
                    return `#${t.getItemId(t.selectedIndex)}`;
                },
                marginToNonBlockingRoot: 5,
                nonBlockingDirection: "horizontal",
                close: ()=>{},
                get mention () {
                    return t.selectedOption;
                },
                minLines: lPp,
                maxLines: cPp,
                minHeight: uPp,
                maxHeight: dPp,
                get ignoreReason () {
                    return r();
                },
                style: {
                    width: "100%",
                    "box-sizing": "border-box"
                }
            })
    });
}, LPg = (t)=>{
    let e;
    const n = (l)=>`typeahead-item-${l}`, [i, r] = Wt(0), s = (l, c, u = !0)=>Array.isArray(l) ? l.map((d, h)=>{
            const p = u ? t.options.findIndex((S)=>S === d) : (c ?? 0) + h, f = d.type === to.file ? "" : "mention-menu-item-with-codicon", _ = d.type, y = _ && typeof _ == "object" && (_.case === "cursor_skill" || _.case === "subagent") || !1 ? "subtitle-truncate-end" : "";
            return {
                title: d.name,
                subTitle: d.secondaryText?.toString(),
                subTitleClass: y,
                icon: d.picture,
                showType: d.type === "heading" ? "chevronRight" : void 0,
                id: n((c ?? 0) + h),
                class: f,
                labelMatch: d.labelMatch,
                tooltip: d.tooltip,
                onClick: ()=>{
                    p !== -1 && (t.setHighlightedIndex(p), t.selectOptionAndCleanUp(d));
                }
            };
        }) : [], o = vt(()=>ZDk(t.options, s, {
            showNoOptionsMessage: !1
        })), a = vt(()=>{
        if (t.selectedIndex === null) return null;
        let l = 0;
        for (const c of t.options)if (c && c.type !== "staticheading" && c.type !== "divider") {
            if (l === t.selectedIndex) return c;
            l++;
        }
        return null;
    });
    return Ee(ODk, {
        width: 240,
        get show () {
            return o().length > 0;
        },
        get anchorElementRef () {
            return t.anchorElementRef;
        },
        style: {
            border: "none",
            background: "transparent",
            "border-radius": "6px"
        },
        get children () {
            var l = DPg(), c = e;
            return typeof c == "function" ? zu(c, l) : e = l, Le(l, Ee(Ut, {
                get when () {
                    return a();
                },
                children: (u)=>Ee(NPg, {
                        get selectedOption () {
                            return u();
                        },
                        get selectedIndex () {
                            return t.selectedIndex ?? 0;
                        },
                        optionsListRef: e,
                        getItemId: n,
                        refreshPreviewTrigger: i
                    })
            }), null), Le(l, Ee(uTg, {
                maxHeight: 280,
                get sections () {
                    return o();
                },
                onClose: ()=>{},
                shouldShowInput: !1,
                get selectedIndex () {
                    return t.selectedIndex ?? void 0;
                },
                autoScrollOnExternalSelectionChange: !0,
                onSelectionChange: (u)=>{
                    t.setHighlightedIndex(u);
                },
                onScroll: ()=>{
                    r(Date.now());
                },
                showContextUsageIndicator: !0,
                allowExternalFocus: !0
            }), null), l;
        }
    });
};

}
