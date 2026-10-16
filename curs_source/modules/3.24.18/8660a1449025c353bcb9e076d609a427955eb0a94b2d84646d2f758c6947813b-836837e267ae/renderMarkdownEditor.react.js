import { AFf, AYf, S8w, XBw, XCs, XYf, f4w, g8w, y8w } from "./BA.js";
import { Ei, Nt, Qe } from "./Iwo.js";
import { KBw } from "./MarkdownEditorReact.react.js";
import { e8w } from "./UiContextMenu.react.js";
import { PSf, xPn } from "./Ycg.js";
import { mN } from "./agentLinks.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Y6l } from "./citationLinkUtils.js";
import { bb, hf } from "./clipboardService.js";
import { nr, rs } from "./commands.js";
import { Ub, py } from "./cursorCredsService.js";
import { AE, S2 } from "./cursorIgnoreService.js";
import { bd, hd } from "./dialogs.js";
import { Hn } from "./dom_2.js";
import { Wo, gr } from "./editorService.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { OSf } from "./fileLinkContextMenu.js";
import { is, ms } from "./files.js";
import { Mt } from "./index_197.js";
import { Bae } from "./ipa.js";
import { Kp, Ph } from "./language.js";
import { YBw } from "./markdownContentModel.js";
import { PYf } from "./markdownLinkContextMenu.js";
import { dd, xp } from "./model.js";
import { Ks, Wr } from "./notification.js";
import { kc, qc } from "./opener.js";
import { Rd, ih } from "./pathService.js";
import { ijl } from "./pr-link-intercept-query.js";
import { f8w } from "./projectDatabaseDirectory.js";
import { APn } from "./renderReactWithServices.react.js";
import { E } from "./tslib.es6.js";
import { Vp, nh } from "./uriIdentity.js";
import { JM } from "./use-now.react.js";
import { YJ } from "./workspace-context.react.js";
import { Sr, yr } from "./workspace.js";
import { li } from "./ze.js";
var ZYf, QYf, JYf, Ujl;
export { JYf, QYf, Ujl, ZYf };
var __wakaru_eXf_initialized = false;
export function eXf() {
if (__wakaru_eXf_initialized) return;
__wakaru_eXf_initialized = true;
"use strict";
E(), Mt(), Hn(), Ei(), Qe(), KBw(), YBw(), APn(), ms(), xp(), Kp(), qc(), Vp(), Sr(), Wo(), bb(), _s(), rs(), bd(), Ks(), Ss(), py(), S2(), fo(), ih(), PYf(), OSf(), mN(), e8w(), YJ(), JM(), ijl(), Y6l(), f8w(), ZYf = 1, QYf = 4, JYf = 24, Ujl = (t, e, n, i)=>{
    const r = i?.subscribeMonacoModelChanges === !0, s = i?.enableFrontmatterUi === !0, o = [];
    let a = !1, l = null, c = !1, u = !1, d, h;
    const p = ()=>{
        h?.interaction.dispose(), h = void 0;
    }, g = e.invokeFunction((se)=>se.get(is)), f = e.invokeFunction((se)=>se.get(dd)), _ = e.invokeFunction((se)=>se.get(Ph)), b = e.invokeFunction((se)=>se.get(kc)), y = e.invokeFunction((se)=>se.get(yr)), S = e.invokeFunction((se)=>se.get(nh)), k = e.invokeFunction((se)=>se.get(AE)), C = e.invokeFunction((se)=>se.get(gr)), T = e.invokeFunction((se)=>se.get(hf)), I = e.invokeFunction((se)=>se.get(Cr)), A = e.invokeFunction((se)=>se.get(Rd)), P = e.invokeFunction((se)=>se.get(nr)), M = e.invokeFunction((se)=>se.get(Qr)), O = e.invokeFunction((se)=>se.get(Wr)), N = e.invokeFunction((se)=>se.get(hd)), U = e.invokeFunction((se)=>se.get(Ub)), j = e.invokeFunction((se)=>se.get(ps)).isGlass === !0, $ = g8w({
        documentResource: n.resource,
        services: {
            cursorIgnoreService: k,
            fileService: g,
            uriIdentityService: S,
            workspaceContextService: y
        }
    }), G = i?.linkContextMenu === !0 ? (se)=>{
        const le = AYf(se.href, (he)=>Bae(he) !== void 0), ce = (he, ge = !1)=>{
            const pe = j && e.invokeFunction((fe)=>f4w(fe, {
                    href: se.href
                })), ve = XBw({
                href: se.href,
                kind: he,
                services: {
                    analyticsService: M,
                    clipboardService: T,
                    commandService: P,
                    openerService: b
                },
                includeBrowserActionsForResources: ge,
                opensInGlassPrPanel: pe,
                websiteUrl: U.getWebsiteUrl()
            });
            return {
                point: se.anchor,
                ariaLabel: "Link actions",
                sections: [
                    {
                        id: "link",
                        items: ve.map((fe)=>({
                                id: fe.id,
                                label: fe.label,
                                onSelect: ()=>{
                                    fe.run();
                                }
                            }))
                    }
                ]
            };
        };
        if (le !== "file") return ce(le);
        let ae;
        const de = ()=>(ae ??= AFf(se.href, n.resource, {
                fileService: g,
                pathService: A,
                workspaceContextService: y
            }).then((he)=>he?.uri), ae);
        return {
            point: se.anchor,
            ariaLabel: "File actions",
            sections: PSf({
                pathOrUri: se.href,
                resolveUri: de,
                services: {
                    analyticsService: M,
                    clipboardService: T,
                    commandService: P,
                    dialogService: N,
                    notificationService: O,
                    openerService: b
                }
            })
        };
    } : void 0, q = (se)=>{
        o.length = 0, o.push(se);
    }, K = (se)=>{
        l = se, i?.onEditorReady?.(se);
    }, V = ()=>{
        l?.flushPendingMarkdownChange();
    }, Y = (se, le)=>{
        const ce = le.anchor && XYf(se, t, le.anchor);
        ce === void 0 ? se.scrollTop = le.scrollTop : se.scrollTop += ce, se.scrollLeft = le.scrollLeft;
    }, J = (se)=>{
        se && l && l.setCursorPosition(se.from, se.to);
    }, Q = (se)=>{
        const le = XCs(t);
        le && Y(le, se), J(se.cursor);
    }, te = ()=>{
        const se = d;
        d = void 0, se?.resolve();
    }, ee = (se, le, ce)=>{
        const ae = d, de = ae?.state.anchor, he = XCs(t);
        if (u || !ae || !de || !he) {
            te();
            return;
        }
        const ge = XYf(he, t, de);
        if (ge === void 0) {
            if (c) {
                he.scrollTop = ae.state.scrollTop, te();
                return;
            }
            if (ce !== void 0 && he.scrollTop !== ce) {
                te();
                return;
            }
            requestAnimationFrame(()=>ee(0, 0, he.scrollTop));
            return;
        }
        let pe = le + 1;
        Math.abs(ge) > ZYf && (he.scrollTop += ge, pe = 0);
        const ve = c ? se + 1 : 0;
        if (pe >= QYf || ve >= JYf) {
            te();
            return;
        }
        requestAnimationFrame(()=>ee(ve, pe, he.scrollTop));
    }, re = ()=>{
        a = !0;
        const se = d;
        if (!se) return;
        const le = XCs(t);
        if (le && Y(le, se.state), c) J(se.state.cursor);
        else if (se.state.cursor) {
            const ce = new Nt;
            ce.add(li(t, "pointerdown", p, !0)), ce.add(li(t, "keydown", p, !0)), h = {
                cursor: se.state.cursor,
                interaction: ce
            };
        }
        if (se.state.anchor === void 0) {
            te();
            return;
        }
        requestAnimationFrame(()=>ee(0, 0, void 0));
    }, ie = ()=>{
        c = !0;
        const se = h?.cursor;
        p(), J(se);
    }, oe = xPn(y8w, {
        input: n,
        fileService: g,
        modelService: f,
        languageService: _,
        openerService: b,
        workspaceContextService: y,
        editorService: C,
        clipboardService: T,
        experimentService: I,
        pathService: A,
        loadProjectDatabase: $,
        fileIconVariant: i?.fileIconVariant,
        onReloadReady: q,
        onContentReady: re,
        onEditorReady: K,
        onEditableTextSelectionFocusChange: i?.onEditableTextSelectionFocusChange,
        onAskAgent: i?.onAskAgent,
        onAskSideChat: i?.onAskSideChat,
        askSideChatAvailable: i?.askSideChatAvailable,
        askAgentShortcut: i?.askAgentShortcut,
        askSideChatShortcut: i?.askSideChatShortcut,
        subscribeMonacoModelChanges: r,
        enableFrontmatterUi: s,
        onInitialRenderComplete: ie,
        getLinkContextMenuState: G,
        richLinkPresentationProvider: i?.richLinkPresentationProvider,
        rootWorkspaceServices: i?.rootWorkspaceServices
    }, t);
    return {
        ...oe,
        dispose: ()=>{
            u = !0, te(), p(), oe.dispose();
        },
        focus: ()=>{
            l?.focus();
        },
        selectAll: ()=>{
            l?.editor?.chain().focus().selectAll().run();
        },
        flushPendingContent: V,
        reload: async ()=>{
            for (const se of o)await se();
        },
        getViewState: ()=>{
            const se = XCs(t);
            if (!se) return;
            const le = {
                scrollTop: se.scrollTop,
                scrollLeft: se.scrollLeft,
                anchor: S8w(se, t)
            }, ce = l?.getCursorPosition();
            return ce && (le.cursor = ce), le;
        },
        setViewState: (se)=>a ? (Q(se), Promise.resolve()) : (te(), new Promise((le)=>{
                d = {
                    state: se,
                    resolve: le
                };
            }))
    };
};

}
