import { ao, ro } from "./LYd.js";
import { ho } from "./nca.js";
import { G5, Qvi, WW, gJ } from "./ipa.js";
import { $i, Ac, Ctw, Dyf, GPn, Gtw, Jcl, PVt, Swg, U6, Vle, bl, et, sKe, xye } from "./Ycg.js";
import { mu, uXf } from "./BA.js";
import { $xs, Alv, Sut, UIs, fg, ire, rD, wut } from "./Asv.js";
import { EQt, Md0, Mh0, _d0, fd0, hfv, rEe, xKl } from "./ofv.js";
import { ARv, BA0, DR0, Dxv, NR0, QR0, RE0, RRv, SA0, Uec, ZA0, bA0, gA0, nR0, pR0, rxv, sA0, sRv, uA0, v20, xR0, yA0, zR0 } from "./wTv.js";
import { Nt, Vn, _r } from "./Iwo.js";
import { Yg } from "./Progress_2.js";
import { Qr } from "./aiMiscServices.js";
import { qjl } from "./browser-find-bar.react.js";
import { RAv } from "./browser-omnibar.react.js";
import { FRv, Kec, LRv, ORv, Vec, Xec, Yec } from "./browser-tab-content.react.js";
import { X4e } from "./browserAutomationService.js";
import { K1 } from "./browserViewStore.js";
import { TDl } from "./command-ids.js";
import { AYr, GUa } from "./composerContextKeys.js";
import { Fb } from "./composerEventService.js";
import { hKl } from "./design-annotation-tokens.stylex.js";
import { ivv } from "./design-mode-hint-row.react.js";
import { dKl } from "./design-mode-pill-coordination.js";
import { fxi, i3 } from "./fileUriModePreferenceService.js";
import { db } from "./glass-clipboard-service.js";
import { Vc } from "./glass-command-service.js";
import { $Rv, k6i, yPs } from "./glass-csv-table.js";
import { ice } from "./glass-editor-service.types.js";
import { ow } from "./glass-environment-service.js";
import { eu } from "./glass-log-service.js";
import { L2, mI } from "./glass-menu-dimensions.js";
import { ul } from "./glass-notification-service.js";
import { $d } from "./glass-tab-persistence-service.contract.js";
import { tg } from "./glass-toast.js";
import { Jxs } from "./local-port-router-service.js";
import { OP } from "./markdownEditorModeService.js";
import { Yn } from "./notification.js";
import { _ct } from "./picked-element.ts";
import { XR } from "./resources.js";
import { Vd } from "./storage-keys.js";
import { io } from "./storage_2.js";
import { xs } from "./tooltip.js";
import { rt } from "./uri.js";
import { BRv } from "./use-file-tab-editor-panel-presentation.react.js";
import { T$ } from "./workbenchThemeService.js";
import { useCallback as gy, useEffect as WRt, useMemo as _Ps, useRef as cre, useState as mYe, useSyncExternalStore as bPs } from "./react-runtime/react/esm-index-production.js";
import { jsx as Wy, jsxs as qG, Fragment as DRv } from "./react-runtime/react/esm-jsx-runtime-production.js";
function NRv(t) {
    const e = t.trim();
    return e.length === 0 || e === "about:blank";
}
function b20(t) {
    try {
        const e = new URL(t).hostname.toLowerCase();
        return e === "localhost" || e === "127.0.0.1";
    } catch  {
        return !1;
    }
}
function y20(t) {
    if (t === null || typeof t != "object" || !("rect" in t)) return null;
    const e = t.rect;
    if (e === null || typeof e != "object" || !("top" in e) || !("left" in e) || !("width" in e) || !("height" in e)) return null;
    const { top: n, left: i, width: r, height: s } = e;
    return typeof n == "number" && typeof i == "number" && typeof r == "number" && typeof s == "number" ? {
        top: n,
        left: i,
        width: r,
        height: s
    } : null;
}
export function S20({ browserId: t, initialUrl: e, ownerAgentId: n, agentControlled: i, transient: r }) {
    const s = Vle({
        ownerAgentId: n,
        agentControlled: i
    }), { workspace: o, resolvedAgentReference: a, designModeShortcut: l } = fg(), c = Uec(), u = $i(o, $d), d = et(K1), h = et(X4e), p = et(Jxs), g = et(db), f = $i(o, ow), _ = et(T$), b = et(Fb), y = $i(o, Vc), S = $i(o, ul), k = $i(o, eu), C = et(Qr), T = cre(null), I = cre(null), A = ()=>I.current?.checkVisibility() ?? !1, P = cre(null), M = cre(null), O = cre(!1), N = cre(!1), U = cre(!1), j = cre(!1), { isActive: $, tabId: H, groupId: G } = WW(), q = gy((Ms)=>{
        const Go = u.onDidChangeBrowserWarmState(Ms);
        return ()=>Go.dispose();
    }, [
        u
    ]), K = gy(()=>u.isBrowserViewWarm(t), [
        t,
        u
    ]), V = bPs(q, K), Y = $ || V, J = gy((Ms)=>{
        const Go = new Nt;
        return Go.add(d.onDidCreateView((Fl)=>{
            Fl === t && Ms();
        })), Go.add(d.onDidDestroyView((Fl)=>{
            Fl === t && Ms();
        })), ()=>Go.dispose();
    }, [
        t,
        d
    ]), Q = gy(()=>d.getView(t), [
        t,
        d
    ]), te = bPs(J, Q), ee = Y ? te ?? null : null;
    P.current = ee;
    const re = U6(()=>ee?.tabState), ie = re?.url ?? "", oe = re?.pendingUrl ?? ie, se = re?.isLoading ?? !1, le = re?.loadError ?? null, ce = re?.loadErrorDetails ?? null, ae = re?.certificateError ?? null, de = _Ps(()=>ee?.findState.map((Ms)=>Ms.visible), [
        ee
    ]), he = U6(()=>de) ?? !1, ge = re ? ee?.canGoBack() ?? !1 : !1, pe = re ? ee?.canGoForward() ?? !1 : !1, ve = !!(le || ae), fe = _Ps(()=>bA0(ie), [
        ie
    ]), [Te, _e] = mYe(!1), [Ce, Se] = mYe(!1), [Pe, we] = mYe(!1), Ie = bl("glass_design_mode_annotations"), Me = !Ie && Pe, De = !Ie, Ne = sA0(ee, !!ie && !Me, {
        reloadOnDeviceChange: De
    }), be = Ne.isActive, je = !Ie && be, $e = _Ps(()=>ee ? Alv(ee) : void 0, [
        ee
    ]), Je = ARv(ee, {
        isDesignModeActive: Pe,
        hasError: ve,
        waitsForPickerEachEntry: Ie
    }), { pageDocument: Ge } = Je, xe = Ge.version, Oe = cre(0), ct = cre(()=>{}), Ye = cre(()=>{}), Ve = cre(()=>{}), Xe = cre(()=>{}), lt = cre(()=>{}), He = cre(()=>{}), gt = cre(()=>{}), [ht, Ae] = mYe(!1), [ot, Be] = mYe(!1), [Ue, it] = mYe(!1), qe = gy((Ms)=>{
        const Go = d.onDidChangeLockState((Fl)=>{
            Fl.viewId === t && Ms();
        });
        return ()=>Go.dispose();
    }, [
        t,
        d
    ]), pt = gy(()=>d.isLocked(t), [
        t,
        d
    ]), dt = bPs(qe, pt), ft = gy((Ms)=>{
        const Go = h.onDidChangeBookmarkBar(Ms);
        return ()=>Go.dispose();
    }, [
        h
    ]), bt = gy(()=>ie ? h.isBookmarked(ie, io.PROFILE) : !1, [
        h,
        ie
    ]), St = bPs(ft, bt), { items: Et, isVisible: kt, setVisible: xt } = zR0(h), [Pt, Dt] = rD({
        key: Vd.EDITOR_PREFERENCES,
        defaultValue: ice,
        decode: xye
    }), Vt = !r && Pt.browserSidebarExpanded, { width: tn, isResizing: un, panelRef: kn, handleProps: { onMouseDown: oi } } = Sut({
        defaultWidth: LRv,
        minWidth: ORv,
        maxWidth: FRv,
        direction: "left",
        controlledWidth: Pt.browserSidebarWidth,
        onResizeEnd: (Ms)=>{
            Dt((Go)=>({
                    ...Go,
                    browserSidebarWidth: Ms
                }));
        }
    }), [Fn, Qt] = mYe(!1), [Sn, $n] = mYe(!1), Mn = gy(()=>{
        we(!1);
    }, []), { handleOmnibarRef: Un, requestOmnibarFocus: Xn, designModePhaseRef: Ti } = RE0(Mn), bi = gy((Ms)=>{
        M.current = Ms, Ms && O.current && (O.current = !1, Ms.focusAndSelect());
    }, []), Qn = gy(()=>{
        if (M.current) {
            O.current = !1, M.current.focusAndSelect();
            return;
        }
        O.current = !0;
    }, []), ni = gy(()=>{
        const Ms = P.current;
        if (Ms?.isAttachedToContainer() === !0 && Ms.hasWebviewElement()) {
            N.current = !1, Ms.focus();
            return;
        }
        N.current = !0;
    }, []), pn = gy((Ms, Go)=>{
        if (r) return;
        const Fl = Go.getURL();
        if (!Fl) return;
        const cu = Go.getTabState()?.pageTitle ?? "", La = EQt(Fl);
        Ms.addHistoryEntry(Fl, cu, La), Ms.saveLastUrl(Fl, t);
    }, [
        t,
        r
    ]), yn = ro(pn), Ln = gy((Ms, Go)=>{
        if (r) return;
        const Fl = Go.getTabState(), Gc = Fl?.url?.trim();
        if (!Gc) return;
        const cu = Fl?.loadError?.trim(), La = cu?.length ? cu : "Can't connect to server", yl = EQt(Gc);
        Ms.addHistoryEntry(Gc, La, yl), Ms.saveLastUrl(Gc, t);
    }, [
        t,
        r
    ]), xi = ro(Ln), Ci = gy((Ms, Go)=>{
        C.trackEvent("glass.browser.interaction", {
            action: Ms,
            ...Go
        });
    }, [
        C
    ]), En = gy(async (Ms)=>{
        const Go = P.current, Fl = T.current;
        Go && Fl && (await Go.attachToContainer(Fl), Go.setPaneVisible(!0)), Go?.navigate(Ms), Ae(!1), Ci("navigate", {
            isLocalhost: b20(Ms)
        });
    }, [
        Ci
    ]), Dn = gy(()=>{
        P.current?.goBack(), Ci("back");
    }, [
        Ci
    ]), Si = gy(()=>{
        P.current?.goForward(), Ci("forward");
    }, [
        Ci
    ]), Ui = gy(()=>{
        P.current?.reload(), Ci("reload");
    }, [
        Ci
    ]), Nn = gy(()=>{
        P.current?.toggleDevTools(), Ci("toggle_devtools");
    }, [
        Ci
    ]), ci = gy(()=>{
        if (r) return;
        const Ms = P.current?.getURL();
        if (Ms) if (h.isBookmarked(Ms, io.PROFILE)) h.removeBookmark(Ms, io.PROFILE), Ci("remove_bookmark");
        else {
            const Fl = P.current?.getTabState()?.pageTitle || Ms, Gc = EQt(Ms), cu = xKl(Ms, Fl);
            h.addBookmark(Ms, Fl, Gc, cu, io.PROFILE), Ci("add_bookmark");
        }
    }, [
        h,
        Ci,
        r
    ]), Pi = gy(()=>{
        P.current?.showFind(), Qn(), Ci("find");
    }, [
        Qn,
        Ci
    ]), vi = gy(()=>{
        O.current = !1, Se(!1), P.current?.hideFind();
    }, []), Yi = gy((Ms)=>{
        P.current?.updateFindQuery(Ms);
    }, []), Bn = gy(()=>{
        P.current?.findNext(), Qn();
    }, [
        Qn
    ]), Tn = gy(()=>{
        P.current?.findPrevious(), Qn();
    }, [
        Qn
    ]), Zn = gy((Ms)=>{
        switch(Ms){
            case "find-in-page":
                Pi();
                break;
            case "reload-page":
                P.current?.reloadIgnoringCache(), Ci("hard_reload");
                break;
            case "focus-url-bar":
                Xn();
                break;
            case "navigate-back":
                Dn();
                break;
            case "navigate-forward":
                Si();
                break;
            case "open-devtools":
                P.current?.toggleDevTools(), Ci("toggle_devtools");
                break;
            case "zoom-in":
                P.current?.zoomIn();
                break;
            case "zoom-out":
                P.current?.zoomOut();
                break;
            case "zoom-reset":
                P.current?.resetZoom();
                break;
            case "undo":
                P.current?.undo();
                break;
            case "redo":
                P.current?.redo();
                break;
            case "new-browser-tab":
                y.executeCommand(TDl);
                break;
            case "close-browser-tab":
                u.closeActiveTab();
                break;
            case "toggle-bookmark":
                ci();
                break;
        }
    }, [
        y,
        Dn,
        Si,
        Pi,
        Xn,
        u,
        ci,
        Ci
    ]), tr = ro(Zn);
    rEe(GUa, he, {
        enabled: $,
        ownerWorkspace: o
    }), rEe(AYr, Ce, {
        enabled: $,
        ownerWorkspace: o
    }), (!$ || !he) && Ce && Se(!1), WRt(()=>{
        const Ms = j.current;
        j.current = he, he && !Ms && Qn(), he || (O.current = !1);
    }, [
        he,
        Qn
    ]), WRt(()=>{
        ee || (U.current = !1);
    }, [
        ee
    ]);
    const hi = gy((Ms)=>{
        if (!(_r ? Ms.metaKey : Ms.ctrlKey) || Ms.shiftKey || Ms.altKey) return;
        switch(Ms.key.toLowerCase()){
            case "w":
                Ms.preventDefault(), Ms.stopPropagation(), Zn("close-browser-tab");
                break;
            case "[":
                Ms.preventDefault(), Ms.stopPropagation(), Zn("navigate-back");
                break;
            case "]":
                Ms.preventDefault(), Ms.stopPropagation(), Zn("navigate-forward");
                break;
            case "d":
                Ms.preventDefault(), Ms.stopPropagation(), Zn("toggle-bookmark");
                break;
        }
    }, [
        Zn
    ]);
    WRt(()=>{
        const Ms = new Nt;
        return Ms.add(u.onDidRequestOmnibarFocus((Go)=>{
            Go === t && Xn();
        })), Ms.add(u.onDidRequestBrowserFind((Go)=>{
            Go === t && Pi();
        })), Ms.add(u.onDidRequestWebviewFocus((Go)=>{
            Go === t && ni();
        })), ()=>Ms.dispose();
    }, [
        t,
        u,
        Pi,
        Xn,
        ni
    ]), Qvi(ni), WRt(()=>{
        if (fe === void 0) return;
        const Ms = p.onDidChangePort(fe, ()=>{
            P.current?.reload();
        });
        return ()=>Ms.dispose();
    }, [
        fe,
        p
    ]), uXf({
        managerRef: P,
        containerRef: T,
        hostKey: G
    }), WRt(()=>{
        if (!Y) return;
        const Ms = T.current;
        if (!Ms) return;
        let Go = !1, Fl = null, Gc = null;
        u.ensureBrowserViewRegistered(t, s);
        const cu = d.getView(t);
        if (!cu) return;
        const La = ()=>Ms.offsetWidth > 0 || Ms.offsetHeight > 0 ? Promise.resolve() : new Promise((Tl)=>{
                Fl = Tl, Gc = new ResizeObserver((Gl)=>{
                    for (const dc of Gl)if (dc.contentRect.width > 0 || dc.contentRect.height > 0) {
                        Gc?.disconnect(), Gc = null, Fl = null, Tl();
                        return;
                    }
                }), Gc.observe(Ms);
            }), yl = ()=>{
            const Tl = d.getHeadlessContainer(t);
            Tl && (Tl.remove(), d.setHeadlessContainer(t, void 0));
        };
        (async ()=>{
            if (cu.getTabState() || await cu.createBrowserView(), Go) return;
            if (!U.current) {
                let Qp;
                for (const um of u.getPersistedBrowserSessions()){
                    const Hh = um.tabs.find((Bg)=>Bg.browserId === t);
                    if (Hh) {
                        Qp = {
                            query: Hh.findQuery ?? "",
                            visible: Hh.findVisible ?? !1,
                            activeMatchOrdinal: Hh.findActiveMatchOrdinal ?? 0
                        };
                        break;
                    }
                }
                Qp && (cu.restoreFindState(Qp), U.current = !0);
            }
            const Tl = cu.getURL(), Gl = e?.trim(), dc = u.resolveBrowserRestoreUrl(t, Gl), Qd = r === !0 && Gl ? Gl : dc;
            if (!(r === !0 || Tl.length > 0 || (dc?.length ?? 0) > 0)) {
                cu.setPaneVisible(!1);
                return;
            }
            if (!await (async ()=>{
                if ((dc?.length ?? 0) === 0 || Ms.offsetWidth > 0 || Ms.offsetHeight > 0) return !1;
                let Qp = d.getHeadlessContainer(t);
                if (!Qp) {
                    Qp = Ms.ownerDocument.createElement("div");
                    const um = Ms.closest('[data-component="root"]');
                    (um instanceof HTMLElement ? um : Ms.ownerDocument.body).appendChild(Qp), d.setHeadlessContainer(t, Qp);
                }
                return Qp.style.cssText = `position:fixed;right:-${Vec - Yec}px;bottom:-${Kec - Yec}px;width:${Vec}px;height:${Kec}px;pointer-events:none;overflow:hidden;z-index:-9999;`, cu.setPaneVisible(!0), await cu.attachToContainer(Qp), Go || (cu.forceContainerVisible(), cu.setContainerZIndex(-9999), La().then(()=>{
                    Go || (async ()=>{
                        await cu.attachToContainer(Ms), !Go && (yl(), cu.setContainerZIndex(0), cu.setPaneVisible(!0));
                    })().catch(()=>{});
                })), !0;
            })()) {
                if (await La(), Go || (await cu.attachToContainer(Ms), Go)) return;
                yl(), cu.setContainerZIndex(0);
            }
            cu.setPaneVisible(!0), N.current && ni(), !Tl && Qd ? cu.navigate(Qd) : r && cu.executeJavaScript(sRv()).catch(()=>{});
        })();
        const Bl = r ? ()=>{
            cu.executeJavaScript(sRv()).catch(()=>{});
        } : void 0, ai = cu.onDidFinishLoad(()=>{
            yn.current(h, cu), Bl?.();
        }), Jr = cu.onDidFailLoad(()=>{
            xi.current(h, cu);
        }), Br = cu.onDidFocus(()=>{
            c({
                respectFocusScope: !1
            });
        }), oa = Bl ? _.onDidColorThemeChange(Bl) : void 0, pl = cu.onIpcMessage(({ channel: Tl, args: Gl })=>{
            if (Tl === "devtools-opened") _e(!0);
            else if (Tl === "devtools-closed") _e(!1);
            else if (Tl === "keyboard-shortcut") {
                const dc = Gl[0];
                dc !== null && typeof dc == "object" && "shortcut" in dc && typeof dc.shortcut == "string" && tr.current(dc.shortcut);
            } else if (Tl === "element-picked") {
                const dc = Gl[0], Sp = dc !== null && typeof dc == "object" && "element" in dc ? dc : null, Rg = Sp ? Sp.element : dc, bf = Array.isArray(Sp?.multiSelectPayloads) ? Sp.multiSelectPayloads : void 0;
                sKe(Rg) && (bf === void 0 || bf.length <= _ct && bf.every(sKe)) && ct.current({
                    element: Rg,
                    altKey: Sp?.altKey === !0,
                    isNavigation: Sp?.isNavigation === !0,
                    requestId: typeof Sp?.requestId == "number" ? Sp.requestId : void 0,
                    shiftKey: Sp?.shiftKey === !0,
                    multiSelectPayloads: bf,
                    appendToOverlay: Sp?.appendToOverlay === !0,
                    textEditable: Sp?.textEditable === !0
                });
            } else if (Tl === "selection-resynced") {
                const dc = Gl[0], Qd = Array.isArray(dc?.multiSelectPayloads) ? dc.multiSelectPayloads : void 0;
                Qd !== void 0 && Qd.length <= _ct && Qd.every(sKe) && Ye.current(Qd);
            } else if (Tl === "selection-restored") {
                const dc = Dyf(Gl[0]);
                dc && Xe.current(dc);
            } else if (Tl === "element-hovered") lt.current(y20(Gl[0]));
            else if (Tl === "annotation-anchors") {
                const dc = Ctw(Gl[0]);
                dc && He.current(dc);
            } else if (Tl === "text-edit") {
                const dc = Gtw(Gl[0]);
                dc && gt.current(dc);
            }
        });
        return ()=>{
            Go = !0, Gc?.disconnect(), Fl?.(), ai.dispose(), Jr.dispose(), Br.dispose(), oa?.dispose(), pl.dispose(), cu.detachFromContainer(Ms);
            const Tl = d.getHeadlessContainer(t);
            Tl && !d.isHeadless(t) && cu.detachFromContainer(Tl).then(()=>{
                cu.isAttachedToContainer() || (Tl.remove(), d.getHeadlessContainer(t) === Tl && d.setHeadlessContainer(t, void 0));
            });
        };
    }, [
        Y,
        d,
        t,
        e,
        s,
        r,
        _,
        h,
        c,
        ni,
        u,
        te
    ]);
    const ui = gy(()=>{
        Dt((Ms)=>({
                ...Ms,
                browserSidebarExpanded: !Ms.browserSidebarExpanded
            }));
    }, [
        Dt
    ]), Ni = cre(ie);
    WRt(()=>{
        const Ms = Ni.current;
        if (!ee || !Pe) {
            Ni.current = ie;
            return;
        }
        if (!(!Ms || !ie || Ms === ie)) {
            if (Oe.current !== xe) {
                Ni.current = ie;
                return;
            }
            se || (Ni.current = ie, Ve.current({
                sameDocument: !0
            }));
        }
    }, [
        Pe,
        se,
        ee,
        xe,
        ie
    ]), RRv(ee, Je, {
        isDesignModeActive: Pe,
        hasError: ve,
        host: {
            lastRunVersionRef: Oe,
            restoreSelectionRef: Ve,
            logService: k,
            logLabel: "BrowserTab",
            disableUninjected: !0
        }
    });
    const cr = gy((Ms, Go = "toggle")=>{
        we(Ms), Ms && C.trackEvent("glass.design_mode.entered", {
            source: Go,
            surface: "browser"
        });
    }, [
        C
    ]);
    v20({
        ownerAgentId: s,
        onReset: ()=>{
            we(!1);
        }
    });
    const fs = gy((Ms)=>{
        u.createBrowserTab({
            url: Ms,
            focusOmnibar: !1,
            preserveFocus: !0,
            inactive: !0
        });
    }, [
        u
    ]), mi = gy((Ms)=>{
        u.createBrowserTab({
            url: Ms,
            focusOmnibar: !1,
            preserveFocus: !0,
            inactive: !0
        });
    }, [
        u
    ]), di = gy((Ms)=>{
        h.removeBookmark(Ms, io.PROFILE);
    }, [
        h
    ]), Mr = gy((Ms, Go)=>{
        h.renameBookmark(Ms, Go, io.PROFILE);
    }, [
        h
    ]), jr = gy((Ms, Go, Fl, Gc)=>{
        h.moveBookmarkToFolder(Ms, Go, Gc, io.PROFILE);
    }, [
        h
    ]), Ur = gy((Ms, Go)=>{
        h.reorderBarItem(Ms, Go, io.PROFILE);
    }, [
        h
    ]), Ws = gy((Ms)=>{
        const Go = h.createBookmarkFolder(Ms, io.PROFILE), Fl = h.getBookmarkBarItems(io.PROFILE);
        h.saveBookmarkBarItems([
            ...Fl,
            Go
        ], io.PROFILE);
    }, [
        h
    ]), jo = gy((Ms, Go)=>{
        h.renameFolder(Ms, Go, io.PROFILE);
    }, [
        h
    ]), Ia = gy((Ms)=>{
        h.deleteFolder(Ms, io.PROFILE);
    }, [
        h
    ]), ga = gy((Ms)=>{
        for (const Go of Ms.children)En(Go.url);
    }, [
        En
    ]), zs = gy(async ()=>{
        if (ae) {
            Be(!0);
            try {
                await P.current?.acceptCertificate(ae.fingerprint, Ue), await new Promise((Ms)=>setTimeout(Ms, 100)), it(!1), ie && P.current?.navigate(ie);
            } catch (Ms) {
                k.error("[BrowserTabContent] Failed to accept certificate:", Ms);
            } finally{
                Be(!1);
            }
        }
    }, [
        ae,
        k,
        Ue,
        ie
    ]), Vs = gy(async ()=>{
        if (ae) {
            Be(!0);
            try {
                await P.current?.rejectCertificate(ae.fingerprint), it(!1);
            } catch (Ms) {
                k.error("[BrowserTabContent] Failed to reject certificate:", Ms);
            } finally{
                Be(!1);
            }
        }
    }, [
        ae,
        k
    ]), Ra = gy(()=>{
        Ae(!1), ie ? P.current?.navigate(ie) : P.current?.reload();
    }, [
        ie
    ]), ur = ce?.startsWith("HTTP ERROR") ?? !1, wr = re?.pendingUrl, Es = NRv(ie) && !se && !ve && (wr === void 0 || NRv(wr)), eo = !!ie && !se && !ve && !je, ts = !Me && (!ve || be), rr = Pe && !!ie, Gs = rr && Ie && $, Vr = ire() === "dark", So = _Ps(()=>ee ? DR0(ee) : void 0, [
        ee
    ]), [na, ll] = mYe(null), [Ol, ia] = mYe(null), co = QR0(ee, Ie && be), Mi = !ve && !!co.toggles?.rulers, vn = gy(()=>{
        $ && eo && cr(!Pe, "command");
    }, [
        $,
        eo,
        Pe,
        cr
    ]);
    mu("toggleDesignModeRequested", vn);
    const zn = Ne.setActive;
    WRt(()=>{
        const Ms = ()=>{
            if (je && fd0(t)) {
                zn(!1);
                return;
            }
            const Fl = _d0(t, eo);
            Fl !== void 0 && (Pe || cr(!0, Fl));
        };
        Ms();
        const Go = dKl((Fl)=>{
            Fl === t && Ms();
        });
        return ()=>Go.dispose();
    }, [
        t,
        eo,
        Pe,
        je,
        cr,
        zn
    ]), WRt(()=>()=>hfv(t), [
        t
    ]);
    const _i = gy((Ms)=>{
        it(Ms);
    }, []), sr = gy((Ms)=>{
        Ae(Ms);
    }, []), Gi = gy(()=>{
        ce && g.writeText(ce).then(()=>{
            S.notify({
                severity: Yn.Info,
                message: "Copied error details to clipboard",
                id: tg.copyGeneric
            });
        });
    }, [
        g,
        ce,
        S
    ]), ko = gy(()=>{
        if (!le) return;
        const Ms = a.composerDataHandle, Go = yA0({
            url: ie,
            loadError: le,
            loadErrorDetails: ce,
            displayedLocalPort: fe,
            isHttpError: ur
        });
        if ((gJ(Ms.data.richText) ?? Ms.data.text ?? "").includes(Go)) {
            b.fireShouldForceText({
                composerId: Ms.composerId
            });
            return;
        }
        const Gc = SA0({
            existingText: Ms.data.text ?? "",
            existingRichText: Ms.data.richText,
            prompt: Go
        });
        Ms.setData({
            text: Gc.text,
            richText: Gc.richText,
            inputEditSession: void 0,
            editingQueueItemId: void 0,
            editingQueueItemSnapshot: void 0
        }), b.fireShouldForceText({
            composerId: Ms.composerId
        });
    }, [
        le,
        a,
        ie,
        ce,
        fe,
        ur,
        b
    ]), As = gy(()=>{
        ee?.reloadIgnoringCache(), Ci("hard_reload");
    }, [
        ee,
        Ci
    ]), Fs = gy(()=>{
        Ci("open_menu");
    }, [
        Ci
    ]), Qo = gy((Ms)=>{
        xt(Ms), Ci("toggle_bookmark_bar");
    }, [
        xt,
        Ci
    ]), hl = gy(()=>{
        ie && (g.writeText(ie).then(()=>{
            S.notify({
                severity: Yn.Info,
                message: "Copied URL to clipboard",
                id: tg.copyBrowserUrl
            });
        }), Ci("copy_url"));
    }, [
        g,
        S,
        ie,
        Ci
    ]), lr = gy(()=>{
        h.clearHistory(), Ci("clear_history");
    }, [
        h,
        Ci
    ]), mr = gy(()=>{
        ee?.clearCookies(), Ci("clear_cookies");
    }, [
        ee,
        Ci
    ]), Bi = gy(()=>{
        ee?.clearCache(), Ci("clear_cache");
    }, [
        ee,
        Ci
    ]), Hr = gy(()=>{
        ee?.clearAcceptedCertificates();
    }, [
        ee
    ]), Ns = gy(()=>{
        ie && ee?.navigate(ie);
    }, [
        ie,
        ee
    ]), Io = async ()=>{
        try {
            if (!ee) return;
            const Ms = await y.executeCommand("cursor.browserAutomation.internal.captureScreenshot", t, {
                screenshotType: "viewport"
            });
            if (!Ms?.success || !Ms.dataUrl) {
                S.error(`Failed to capture screenshot${Ms?.error ? `: ${Ms.error}` : ""}`);
                return;
            }
            const Go = a.composerDataHandle?.composerId;
            if (!Go) return;
            const Fl = Jcl(Ms.dataUrl, "browser-screenshot.png");
            b.fireDidRequestAppendImages({
                composerId: Go,
                files: [
                    Fl
                ]
            }), Ci("screenshot");
        } catch (Ms) {
            S.error("Failed to capture screenshot: " + (Ms instanceof Error ? Ms.message : String(Ms)));
        }
    }, fa = gy((Ms, Go)=>{
        const Fl = I.current?.getBoundingClientRect();
        return Fl ? Ms >= Fl.left && Ms <= Fl.right : !1;
    }, []), Ls = gy((Ms, Go)=>{
        const Fl = I.current?.getBoundingClientRect().top;
        Fl !== void 0 && Go < Fl ? fs(Ms) : En(Ms);
    }, [
        En,
        fs
    ]), po = r ? null : Wy(xs, {
        content: Wy(ao, {
            title: Vt ? "Hide Favorites & History" : "Show Favorites & History"
        }),
        placement: "bottom",
        children: Wy(ho, {
            "aria-expanded": Vt,
            "aria-label": Vt ? "Hide favorites and history" : "Show favorites and history",
            icon: Vt ? "layout-sidebar-right-dock" : "layout-sidebar-right-undock",
            onClick: ui,
            size: "md",
            iconSize: "base"
        })
    }), ka = Vt ? qG("div", {
        className: "glass-78zum5 glass-dt5ytf glass-euugli glass-2lah0s glass-1n2onr6 glass-jbqb8w glass-e0pwq glass-19ypqd9 glass-1arpupx glass-6ikm8r glass-10wlt62",
        "data-side": "right",
        ref: kn,
        style: {
            width: tn
        },
        children: [
            Wy(BA0, {
                automationService: h,
                isBookmarkBarVisible: kt,
                isPointOverPage: fa,
                onBookmarkBarVisibleChange: xt,
                onDragActiveChange: Qt,
                onDragOverPageChange: $n,
                onDropOnPage: Ls,
                onNavigate: En,
                onOpenInBackground: fs
            }),
            Wy(wut, {
                isResizing: un,
                label: "Resize browser sidebar",
                onMouseDown: oi,
                position: "left",
                width: tn
            })
        ]
    }) : null;
    return qG("div", {
        ...Ac(Xec.content, Vr && hKl),
        "data-component": "browser-tab-content",
        onKeyDown: hi,
        children: [
            qG($xs, {
                rootStyle: Gs ? ivv.root : void 0,
                children: [
                    Gs ? Wy("div", {
                        ref: ll,
                        className: "glass-78zum5 glass-1iyjqo2 glass-euugli glass-kh2ocl glass-6s0dn4"
                    }) : qG(DRv, {
                        children: [
                            qG("div", {
                                className: "glass-78zum5 glass-6s0dn4 glass-5cdhqx glass-2lah0s",
                                children: [
                                    Wy(xs, {
                                        content: Wy(ao, {
                                            title: "Back"
                                        }),
                                        placement: "bottom",
                                        children: Wy(ho, {
                                            "aria-label": "Back",
                                            disabled: !ge,
                                            icon: "arrow-left",
                                            onClick: Dn,
                                            size: "md",
                                            iconSize: "base"
                                        })
                                    }),
                                    Wy(xs, {
                                        content: Wy(ao, {
                                            title: "Forward"
                                        }),
                                        placement: "bottom",
                                        children: Wy(ho, {
                                            "aria-label": "Forward",
                                            disabled: !pe,
                                            icon: "arrow-right",
                                            onClick: Si,
                                            size: "md",
                                            iconSize: "base"
                                        })
                                    }),
                                    Wy(xs, {
                                        content: Wy(ao, {
                                            title: "Reload"
                                        }),
                                        placement: "bottom",
                                        children: qG("div", {
                                            ...{
                                                0: {
                                                    className: "glass--default-marker glass-3nfvp2 glass-6s0dn4 glass-l56j7k glass-2lah0s"
                                                },
                                                1: {
                                                    className: "glass--default-marker glass-3nfvp2 glass-6s0dn4 glass-l56j7k glass-2lah0s glass-1n2onr6 glass-6anfts glass-1m1144u"
                                                }
                                            }[!!se << 0],
                                            "data-loading": se || void 0,
                                            children: [
                                                se ? Wy("div", {
                                                    "aria-hidden": !0,
                                                    className: "glass-10l6tqk glass-13vifvy glass-3m8u43 glass-1ey2m1c glass-u96u03 glass-7ve9fu glass-78zum5 glass-6s0dn4 glass-l56j7k glass-67bb7w glass-6o6s4a glass-1lbmi28 glass-1hc1fzr glass-1vcc2rl glass-19991ni glass-12s1jxh glass-6ekqhr",
                                                    children: Wy(Yg, {
                                                        indeterminate: !0,
                                                        size: "xs"
                                                    })
                                                }) : null,
                                                Wy(ho, {
                                                    "aria-label": "Reload",
                                                    disabled: !ie,
                                                    icon: "refresh",
                                                    onClick: Ui,
                                                    rootStyle: se ? Xec.reloadButtonLoading : void 0,
                                                    size: "md",
                                                    iconSize: "base"
                                                })
                                            ]
                                        })
                                    }),
                                    !r && Wy(xs, {
                                        content: Wy(ao, {
                                            title: St ? "Remove Bookmark" : "Bookmark This Page"
                                        }),
                                        placement: "bottom",
                                        children: Wy(ho, {
                                            "aria-label": St ? "Remove Bookmark" : "Bookmark This Page",
                                            disabled: !ie,
                                            icon: St ? "star-full" : "star-empty",
                                            onClick: ci,
                                            size: "md",
                                            iconSize: "base"
                                        })
                                    })
                                ]
                            }),
                            Wy(RAv, {
                                automationService: h,
                                onEscape: ni,
                                onNavigate: En,
                                ref: Un,
                                url: oe
                            })
                        ]
                    }),
                    qG("div", {
                        className: "glass-78zum5 glass-6s0dn4 glass-5cdhqx glass-2lah0s",
                        children: [
                            !!ie && qG(DRv, {
                                children: [
                                    Wy(Dxv, {
                                        active: Pe,
                                        hintRowShowsExit: Gs,
                                        disabled: !eo,
                                        browserId: t,
                                        isOnScreen: A,
                                        onActiveChange: cr,
                                        shortcut: l,
                                        visible: $
                                    }),
                                    Wy(pR0, {
                                        active: be,
                                        disabled: !ts,
                                        manager: ee,
                                        onActiveChange: Ne.setActive,
                                        variant: Ie ? "annotations" : "default"
                                    }),
                                    Wy(xs, {
                                        content: Wy(ao, {
                                            title: Te ? "Hide Console" : "Show Console"
                                        }),
                                        placement: "bottom",
                                        children: Wy(ho, {
                                            "aria-label": Te ? "Hide Console" : "Show Console",
                                            disabled: se || ve,
                                            icon: "terminal",
                                            onClick: Nn,
                                            size: "md",
                                            iconSize: "base"
                                        })
                                    })
                                ]
                            }),
                            Wy(Swg, {
                                isBookmarkBarVisible: kt,
                                isDev: !f.isBuilt,
                                menuMaxWidth: mI,
                                menuMinWidth: L2,
                                onAfterClear: Ns,
                                onBookmarkBarVisibleChange: Qo,
                                onClearCache: Bi,
                                onClearCertificates: Hr,
                                onClearCookies: mr,
                                onClearHistory: lr,
                                onCopyUrl: hl,
                                onHardReload: As,
                                onOpen: Fs,
                                onTakeScreenshot: Io,
                                triggerSize: "md",
                                url: ie
                            }),
                            po
                        ]
                    })
                ]
            }),
            Ie && Wy(gA0, {
                isOpen: be && !ve,
                inspection: co.toggles,
                onDeviceSlotChange: ia
            }),
            !r && kt && Et.length > 0 && Wy(Mh0, {
                items: Et,
                onCreateFolder: Ws,
                onDeleteFolder: Ia,
                onMoveToFolder: jr,
                onNavigate: En,
                onNavigateBackground: mi,
                onOpenAllInFolder: ga,
                onRemove: di,
                onRename: Mr,
                onRenameFolder: jo,
                onReorder: Ur
            }),
            qG("div", {
                className: "glass-78zum5 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j",
                children: [
                    qG("div", {
                        ...{
                            0: {
                                className: "glass-1n2onr6 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-euugli glass-78zum5 glass-dt5ytf"
                            },
                            1: {
                                className: "glass-1n2onr6 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-euugli glass-78zum5 glass-dt5ytf glass-12peec7"
                            }
                        }[!!(ie && !ve) << 0],
                        "data-loaded": ie && !ve ? "" : void 0,
                        ref: I,
                        children: [
                            he && ee && Wy(qjl, {
                                findState: ee.findState,
                                onClose: vi,
                                onFindNext: Bn,
                                onFindPrevious: Tn,
                                onFocusChange: Se,
                                onQueryChange: Yi,
                                ref: bi
                            }),
                            Wy("div", {
                                ...{
                                    0: {
                                        className: "glass-1n2onr6 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-6ikm8r glass-10wlt62"
                                    },
                                    2: {
                                        className: "glass-1n2onr6 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-6ikm8r glass-10wlt62 glass-78zum5 glass-1q0g3np glass-1ua6jya"
                                    },
                                    1: {
                                        className: "glass-1n2onr6 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-6ikm8r glass-10wlt62 glass-1s85apg"
                                    },
                                    3: {
                                        className: "glass-1n2onr6 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-6ikm8r glass-10wlt62 glass-1q0g3np glass-1ua6jya glass-1s85apg"
                                    }
                                }[!!be << 1 | !!ve << 0],
                                ref: T,
                                children: be && ee && Wy(uA0, {
                                    manager: ee,
                                    reloadOnDeviceChange: De,
                                    toolbarHost: Ie ? {
                                        kind: "header",
                                        slot: Ol
                                    } : {
                                        kind: "floating"
                                    }
                                })
                            }),
                            Es && Wy(xR0, {
                                onNavigate: En
                            }),
                            rr && Wy(rxv, {
                                annotateChrome: Gs ? {
                                    hintRowSlot: na
                                } : void 0,
                                annotationAnchorsRef: He,
                                hidden: !$,
                                browserId: t,
                                elementHoveredRef: lt,
                                elementPickedRef: ct,
                                hasLoadError: ve,
                                isPageLoading: se || Ge.isPickerInitializing,
                                managerRef: P,
                                phaseRef: Ti,
                                onExit: Mn,
                                pageDocument: Ge,
                                frameBox: be ? ee?.deviceFrameBox : void 0,
                                rulerInset: Mi ? So : void 0,
                                pageScale: $e,
                                restoreSelectionRef: Ve,
                                selectionResyncedRef: Ye,
                                selectionRestoredRef: Xe,
                                textEditRef: gt
                            }),
                            ee && Mi && Wy(NR0, {
                                loadSnapEdges: co.loadSnapEdges,
                                manager: ee
                            }),
                            Vt && Fn && Wy("div", {
                                ...{
                                    0: {
                                        className: "glass-10l6tqk glass-13vifvy glass-3m8u43 glass-1ey2m1c glass-u96u03 glass-52sccv glass-jbqb8w glass-hds75k glass-4wkmsb glass-gdialr glass-12w9bfk glass-6ekqhr"
                                    },
                                    1: {
                                        className: "glass-10l6tqk glass-13vifvy glass-3m8u43 glass-1ey2m1c glass-u96u03 glass-52sccv glass-hds75k glass-4wkmsb glass-gdialr glass-12w9bfk glass-6ekqhr glass-9sb9an"
                                    }
                                }[!!Sn << 0],
                                "data-active": Sn || void 0
                            }),
                            Wy(nR0, {
                                browserId: t,
                                browserViewStore: d,
                                isActive: $,
                                isLocked: dt,
                                wrapperRef: I
                            }),
                            ae && Wy("div", {
                                className: "glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-78zum5 glass-6s0dn4 glass-l56j7k glass-1odjw0f glass-1krxdfg",
                                children: qG("div", {
                                    className: "glass-78zum5 glass-dt5ytf glass-1cy8zhl glass-dpxx8g glass-ehausa glass-1gfrnbc glass-m6i5cn",
                                    children: [
                                        Wy("div", {
                                            className: "glass-1j61zf2 glass-1wd3ewq glass-dj266r glass-1yf7rl7 glass-at24cr glass-j3b58b",
                                            children: "Certificate Error"
                                        }),
                                        Wy("div", {
                                            className: "glass-11wthnw glass-1dbl2gt glass-19aaqeu glass-1dt7z5j glass-dj266r glass-1yf7rl7 glass-at24cr glass-j3b58b glass-j0a0fe",
                                            children: "The certificate for this site is not trusted"
                                        }),
                                        qG("div", {
                                            className: "glass-78zum5 glass-dt5ytf glass-ehausa glass-h8yej3 glass-19snzy6 glass-1t8xvyj glass-1jkygx glass-usxwy5 glass-1o7kk3e glass-gxpns3 glass-161eota glass-1ot9j5z glass-1s4tksr glass-kphxji glass-178xt8z glass-s1s249 glass-so031l glass-e0pwq glass-13fuv20 glass-32b0ac glass-1q0q8m5 glass-19ypqd9 glass-1njmyyh glass-y7i79c glass-1talola glass-famn59 glass-9f619",
                                            children: [
                                                qG("div", {
                                                    className: "glass-78zum5 glass-ehausa glass-1wm8ruf glass-37zpob",
                                                    children: [
                                                        Wy("span", {
                                                            className: "glass-1s688f glass-19aaqeu glass-18advcn glass-2lah0s",
                                                            children: "Error:"
                                                        }),
                                                        Wy("span", {
                                                            className: "glass-19aaqeu glass-13faqbe glass-1iyjqo2 glass-s83m0k glass-1t1x2f9",
                                                            children: ae.error
                                                        })
                                                    ]
                                                }),
                                                qG("div", {
                                                    className: "glass-78zum5 glass-ehausa glass-1wm8ruf glass-37zpob",
                                                    children: [
                                                        Wy("span", {
                                                            className: "glass-1s688f glass-19aaqeu glass-18advcn glass-2lah0s",
                                                            children: "Issuer:"
                                                        }),
                                                        Wy("span", {
                                                            className: "glass-19aaqeu glass-13faqbe glass-1iyjqo2 glass-s83m0k glass-1t1x2f9",
                                                            children: ae.issuerName
                                                        })
                                                    ]
                                                }),
                                                qG("div", {
                                                    className: "glass-78zum5 glass-ehausa glass-1wm8ruf glass-37zpob",
                                                    children: [
                                                        Wy("span", {
                                                            className: "glass-1s688f glass-19aaqeu glass-18advcn glass-2lah0s",
                                                            children: "Subject:"
                                                        }),
                                                        Wy("span", {
                                                            className: "glass-19aaqeu glass-13faqbe glass-1iyjqo2 glass-s83m0k glass-1t1x2f9",
                                                            children: ae.subjectName
                                                        })
                                                    ]
                                                }),
                                                qG("div", {
                                                    className: "glass-78zum5 glass-ehausa glass-1wm8ruf glass-37zpob",
                                                    children: [
                                                        Wy("span", {
                                                            className: "glass-1s688f glass-19aaqeu glass-18advcn glass-2lah0s",
                                                            children: "Valid:"
                                                        }),
                                                        qG("span", {
                                                            className: "glass-19aaqeu glass-13faqbe glass-1iyjqo2 glass-s83m0k glass-1t1x2f9",
                                                            children: [
                                                                new Date(ae.validStart).toLocaleDateString(),
                                                                " -",
                                                                " ",
                                                                new Date(ae.validExpiry).toLocaleDateString()
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                qG("div", {
                                                    className: "glass-78zum5 glass-ehausa glass-1wm8ruf glass-37zpob",
                                                    children: [
                                                        Wy("span", {
                                                            className: "glass-1s688f glass-19aaqeu glass-18advcn glass-2lah0s",
                                                            children: "Fingerprint:"
                                                        }),
                                                        Wy("span", {
                                                            className: "glass-19aaqeu glass-13faqbe glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-y5h43f glass-1us6l5c",
                                                            children: ae.fingerprint
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        Wy("div", {
                                            className: "glass-78zum5 glass-1cy8zhl glass-ehausa glass-oyc9vk glass-1jkygx glass-2lprc glass-1o7kk3e glass-1x419k1 glass-h8yej3 glass-1lrr738 glass-1oyuvcc glass-9yyyzy glass-1yhfpom glass-os2pel glass-178xt8z glass-s1s249 glass-so031l glass-e0pwq glass-13fuv20 glass-32b0ac glass-1q0q8m5 glass-19ypqd9 glass-1njmyyh glass-y7i79c glass-1talola glass-famn59 glass-1wm8ruf glass-1evy7pa glass-19aaqeu glass-9f619",
                                            children: Wy("span", {
                                                children: "Only trust certificates from sources you recognize. Accepting untrusted certificates can compromise your security."
                                            })
                                        }),
                                        qG("div", {
                                            className: "glass-78zum5 glass-dt5ytf glass-1oot3zn glass-h8yej3 glass-1x419k1",
                                            children: [
                                                qG("label", {
                                                    className: "glass-78zum5 glass-6s0dn4 glass-ehausa glass-11wthnw glass-19aaqeu glass-1ypdohk glass-87ps6o",
                                                    children: [
                                                        Wy(G5, {
                                                            "aria-label": "Remember for this workspace",
                                                            checked: Ue,
                                                            disabled: ot,
                                                            onCheckedChange: _i,
                                                            size: "sm"
                                                        }),
                                                        Wy("span", {
                                                            children: "Remember for this workspace"
                                                        })
                                                    ]
                                                }),
                                                qG("div", {
                                                    className: "glass-78zum5 glass-ehausa glass-13a6bvl",
                                                    children: [
                                                        Wy("button", {
                                                            className: "glass-uve7l6 glass-10cfkro glass-1rgtt3y glass-193t4r6 glass-1rlb8dw glass-tg4lcy glass-10zfh2d glass-ipogy4 glass-11wthnw glass-jb2p0i glass-k50ysn glass-1ypdohk glass-1s07b3s glass-npjden glass-1vaoic9 glass-f1rc6 glass-1aiz5cx glass-178xt8z glass-s1s249 glass-so031l glass-e0pwq glass-13fuv20 glass-32b0ac glass-1q0q8m5 glass-19ypqd9 glass-1t137rt glass-1hc1fzr glass-ijokvz glass-jbqb8w glass-yoeeix glass-1wd3ewq glass-2kampu glass-hnkhp4 glass-1jfuf7k glass-1l09f48",
                                                            disabled: ot,
                                                            onClick: Vs,
                                                            type: "button",
                                                            children: "Reject"
                                                        }),
                                                        Wy("button", {
                                                            className: "glass-uve7l6 glass-10cfkro glass-1rgtt3y glass-193t4r6 glass-1rlb8dw glass-tg4lcy glass-10zfh2d glass-ipogy4 glass-11wthnw glass-jb2p0i glass-k50ysn glass-1ypdohk glass-1s07b3s glass-npjden glass-1vaoic9 glass-f1rc6 glass-1aiz5cx glass-178xt8z glass-s1s249 glass-so031l glass-e0pwq glass-13fuv20 glass-32b0ac glass-1q0q8m5 glass-19ypqd9 glass-1v8p93f glass-he5wa1 glass-16stqrj glass-1g4hjc glass-1t137rt glass-1hc1fzr glass-ijokvz glass-144x4tx glass-1ismnhm glass-1dhvxgz",
                                                            disabled: ot,
                                                            onClick: zs,
                                                            type: "button",
                                                            children: ot ? "Processing..." : "Trust Certificate"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            !ae && le && Wy(ZA0, {
                                displayedLocalPort: fe,
                                loadError: le,
                                loadErrorDetails: ce,
                                onAskAgent: ko,
                                onCopyDetails: Gi,
                                onReload: Ra,
                                onShowErrorDetailsChange: sr,
                                showErrorDetails: ht,
                                url: ie
                            })
                        ]
                    }),
                    ka
                ]
            }),
            Wy(Md0, {
                active: Gs
            })
        ]
    });
}
function w20(t) {
    const e = t.filePath !== void 0, n = e && t.largeFileGate !== void 0, i = e && t.error !== void 0, r = e && !n && t.imageDataUrl !== void 0, s = e && !n && t.videoDataUrl !== void 0, o = e && !n && !i && (t.pdfBytesGeneration !== void 0 || t.contentType === "pdf"), a = o && t.pdfBytesGeneration !== void 0, l = o && t.pdfBytesGeneration === void 0, c = e && t.svgShowPreview && !n && !i, u = r || s || c || a || l, d = e && t.showDelayedLoadingIndicator && !n, h = e && t.markdownShowPreview && !u && !n && !i, p = h && t.isPreviewHostUnavailable, g = h && !t.isPreviewHostUnavailable, f = e && !n && !i && !u, _ = f && t.mermaidShowPreview, b = f && t.texShowPreview === !0, y = (d || p || l) && !_ && !g && !b && !c, S = e && !t.isPreviewHostUnavailable && t.csvShowTable && t.csvDelimiter !== void 0 && !u;
    return {
        showLargeFileGate: n,
        showFileError: i,
        showImagePreview: r,
        showVideoPreview: s,
        showPdfPreview: a,
        showLoadingPlaceholder: y,
        showMarkdownPreview: g,
        showMermaidPreview: _,
        showCsvTable: S,
        showSvgPreview: c,
        showTexPreview: b,
        showMonaco: e && !i && !n && !u && !y && !g && !_ && !b && !S && !p && !l
    };
}
import { c as T20 } from "./react-runtime/react/esm-compiler-runtime-production.js";
export function E20(t) {
    const e = T20(16), { filePath: n, editorSnapshot: i, isPreviewHostUnavailable: r, markdownOverlay: s, mermaidPreview: o, csvTable: a, svgPreview: l, texPreview: c } = t, u = UIs(!!n && i.isLoading, BRv), d = l.preview.status !== "hidden", h = c.preview.status !== "hidden";
    let p;
    return e[0] !== a.delimiter || e[1] !== a.showTable || e[2] !== i.contentType || e[3] !== i.error || e[4] !== i.imageDataUrl || e[5] !== i.largeFileGate || e[6] !== i.pdfBytesGeneration || e[7] !== i.videoDataUrl || e[8] !== n || e[9] !== r || e[10] !== s.showPreview || e[11] !== o.showPreview || e[12] !== u || e[13] !== d || e[14] !== h ? (p = w20({
        filePath: n,
        error: i.error,
        imageDataUrl: i.imageDataUrl,
        videoDataUrl: i.videoDataUrl,
        pdfBytesGeneration: i.pdfBytesGeneration,
        contentType: i.contentType,
        largeFileGate: i.largeFileGate,
        isPreviewHostUnavailable: r,
        showDelayedLoadingIndicator: u,
        markdownShowPreview: s.showPreview,
        mermaidShowPreview: o.showPreview,
        csvShowTable: a.showTable,
        csvDelimiter: a.delimiter,
        svgShowPreview: d,
        texShowPreview: h
    }), e[0] = a.delimiter, e[1] = a.showTable, e[2] = i.contentType, e[3] = i.error, e[4] = i.imageDataUrl, e[5] = i.largeFileGate, e[6] = i.pdfBytesGeneration, e[7] = i.videoDataUrl, e[8] = n, e[9] = r, e[10] = s.showPreview, e[11] = o.showPreview, e[12] = u, e[13] = d, e[14] = h, e[15] = p) : p = e[15], p;
}
function x20(t) {
    return $Rv[XR(t).toLowerCase()];
}
function A20() {
    return {
        row: [],
        field: "",
        fieldStarted: !1,
        inQuotes: !1
    };
}
function URv(t) {
    t.row.push(t.field), t.field = "", t.fieldStarted = !1;
}
function R20(t, e) {
    URv(t);
    let n = !1, i = t.row;
    return i.length > e && (n = !0, i = i.slice(0, e)), t.row = [], {
        cells: i,
        truncatedColumns: n
    };
}
function P20(t, e, n, i) {
    return t.inQuotes ? e === '"' ? n === '"' ? (t.field += '"', "continue") : (t.inQuotes = !1, "continue") : (t.field += e, "continue") : e === '"' && !t.fieldStarted ? (t.inQuotes = !0, t.fieldStarted = !0, "continue") : e === i ? (URv(t), "continue") : e === "\r" || e === `
` ? "row" : (t.field += e, t.fieldStarted = !0, "continue");
}
export function jRv(t, e, n = yPs) {
    const i = A20();
    let r = !1;
    for(let o = 0; o < t.length; o++){
        const a = t[o];
        if (i.inQuotes && a === '"' && t[o + 1] === '"') {
            i.field += '"', o += 1;
            continue;
        }
        if (P20(i, a, t[o + 1], e) === "row") break;
    }
    const s = R20(i, n);
    return r = s.truncatedColumns, {
        cells: s.cells,
        truncatedColumns: r
    };
}
import { c as M20 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useSyncExternalStore as D20 } from "./react-runtime/react/esm-index-production.js";
export function N20(t) {
    const e = M20(22), { filePath: n, editorType: i } = t, { workspace: r } = fg(), s = $i(r, fxi);
    let o;
    e: {
        if (!n) {
            o = void 0;
            break e;
        }
        try {
            let T;
            e[0] !== n ? (T = rt.parse(n), e[0] = n, e[1] = T) : T = e[1], o = T;
        } catch  {
            o = void 0;
        }
    }
    const a = o;
    let l;
    e[2] !== a ? (l = a ? x20(a) : void 0, e[2] = a, e[3] = l) : l = e[3];
    const c = l, u = a !== void 0 && i === "code" && c !== void 0;
    let d;
    e[4] !== a ? (d = a?.toString(), e[4] = a, e[5] = d) : d = e[5];
    const h = d;
    let p;
    e[6] !== s || e[7] !== a || e[8] !== h ? (p = (T)=>{
        const I = [
            s.onDidModeChange((A)=>{
                A.key === i3.CSV_TABLE && h && A.uri.toString() === h && T();
            }),
            s.onDidCsvTableDefaultModeChange(()=>{
                a && s.getStoredMode(i3.CSV_TABLE, a) === void 0 && T();
            })
        ];
        return ()=>{
            for (const A of I)A.dispose();
        };
    }, e[6] = s, e[7] = a, e[8] = h, e[9] = p) : p = e[9];
    const g = p;
    let f;
    e[10] !== s || e[11] !== a ? (f = ()=>a ? s.getMode(i3.CSV_TABLE, a, {
            defaultWhenUnset: k6i.RAW
        }) ?? k6i.RAW : k6i.RAW, e[10] = s, e[11] = a, e[12] = f) : f = e[12];
    const b = D20(g, f);
    let y;
    e[13] !== s || e[14] !== a ? (y = (T)=>{
        a && s.setMode(i3.CSV_TABLE, a, T);
    }, e[13] = s, e[14] = a, e[15] = y) : y = e[15];
    const S = y, k = u && b === k6i.TABLE;
    let C;
    return e[16] !== c || e[17] !== u || e[18] !== b || e[19] !== S || e[20] !== k ? (C = {
        showTable: k,
        showModeSwitcher: u,
        headerMode: b,
        delimiter: c,
        onHeaderModeChange: S
    }, e[16] = c, e[17] = u, e[18] = b, e[19] = S, e[20] = k, e[21] = C) : C = e[21], C;
}
import { c as O20 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useEffect as F20, useState as B20, useSyncExternalStore as HRv } from "./react-runtime/react/esm-index-production.js";
export function U20(t) {
    const e = O20(41), { editorHandle: n, filePath: i, editorType: r, isActiveTab: s, isPreviewHostUnavailable: o } = t, a = n.markdownWysiwygSurface;
    let l;
    e[0] !== a ? (l = (H)=>{
        const G = a.subscribeMarkdownUi(H);
        return ()=>G.dispose();
    }, e[0] = a, e[1] = l) : l = e[1];
    const c = l;
    let u;
    e[2] !== a ? (u = ()=>a.getMarkdownUiSnapshot(), e[2] = a, e[3] = u) : u = e[3];
    const h = HRv(c, u);
    let p;
    e[4] !== a ? (p = (H)=>{
        const G = a.subscribeRichTextEditor(H);
        return ()=>G.dispose();
    }, e[4] = a, e[5] = p) : p = e[5];
    const g = p;
    let f;
    e[6] !== a ? (f = ()=>a.getRichTextEditor(), e[6] = a, e[7] = f) : f = e[7];
    const b = HRv(g, f);
    let y;
    e[8] !== r || e[9] !== i || e[10] !== a ? (y = a.computeUiSnapshotFor(i, r), e[8] = r, e[9] = i, e[10] = a, e[11] = y) : y = e[11];
    const S = y, C = h.filePath === i && h.editorType === r && S.showModeSwitcher && h.showModeSwitcher ? h : S, [T, I] = B20(null);
    let A;
    e[12] === Symbol.for("react.memo_cache_sentinel") ? (A = (H)=>{
        I(H);
    }, e[12] = A) : A = e[12];
    const P = A, M = GPn();
    let O;
    e[13] !== r || e[14] !== i || e[15] !== T || e[16] !== s || e[17] !== o || e[18] !== M || e[19] !== a ? (O = ()=>(a.syncRendererLayout({
            filePath: i,
            editorType: r,
            isActiveTab: s,
            hostElement: o ? null : T,
            rootWorkspaceServices: M
        }), ()=>{
            a.reactEffectCleanup();
        }), e[13] = r, e[14] = i, e[15] = T, e[16] = s, e[17] = o, e[18] = M, e[19] = a, e[20] = O) : O = e[20];
    let N;
    e[21] !== r || e[22] !== i || e[23] !== T || e[24] !== s || e[25] !== o || e[26] !== M || e[27] !== a || e[28] !== C.headerMode || e[29] !== C.showModeSwitcher || e[30] !== C.showPreview ? (N = [
        a,
        i,
        r,
        s,
        o,
        T,
        M,
        C.showPreview,
        C.showModeSwitcher,
        C.headerMode
    ], e[21] = r, e[22] = i, e[23] = T, e[24] = s, e[25] = o, e[26] = M, e[27] = a, e[28] = C.headerMode, e[29] = C.showModeSwitcher, e[30] = C.showPreview, e[31] = N) : N = e[31], F20(O, N);
    let U;
    e[32] !== a ? (U = (H)=>{
        a.setHeaderMode(H);
    }, e[32] = a, e[33] = U) : U = e[33];
    const j = U;
    let $;
    return e[34] !== b || e[35] !== T || e[36] !== j || e[37] !== C.headerMode || e[38] !== C.showModeSwitcher || e[39] !== C.showPreview ? ($ = {
        showPreview: C.showPreview,
        hostElement: T,
        hostRef: P,
        showModeSwitcher: C.showModeSwitcher,
        headerMode: C.headerMode,
        onHeaderModeChange: j,
        editor: b
    }, e[34] = b, e[35] = T, e[36] = j, e[37] = C.headerMode, e[38] = C.showModeSwitcher, e[39] = C.showPreview, e[40] = $) : $ = e[40], $;
}
import { c as $20 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useSyncExternalStore as H20 } from "./react-runtime/react/esm-index-production.js";
export function Qec(t, e) {
    const n = $20(6);
    let i;
    n[0] !== t || n[1] !== e ? (i = (a)=>{
        if (!e) return W20;
        const l = new Nt, c = l.add(new Vn), u = ()=>{
            c.value = t.getTextModel()?.onDidChangeContent(a);
        };
        return u(), l.add({
            dispose: t.subscribe("snapshotChanged", ()=>{
                u(), a();
            })
        }), ()=>l.dispose();
    }, n[0] = t, n[1] = e, n[2] = i) : i = n[2];
    const r = i;
    let s;
    return n[3] !== t || n[4] !== e ? (s = ()=>e ? t.getTextModel()?.getValue() : void 0, n[3] = t, n[4] = e, n[5] = s) : s = n[5], H20(r, s);
}
function W20() {}
import { c as G20 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useSyncExternalStore as q20 } from "./react-runtime/react/esm-index-production.js";
export function z20(t) {
    const e = G20(26), { editorHandle: n, filePath: i, editorType: r, editorSnapshot: s } = t, { workspace: o } = fg(), a = $i(o, fxi);
    let l;
    e: {
        if (!i) {
            l = void 0;
            break e;
        }
        try {
            let H;
            e[0] !== i ? (H = rt.parse(i), e[0] = i, e[1] = H) : H = e[1], l = H;
        } catch  {
            l = void 0;
        }
    }
    const c = l;
    let u;
    e[2] !== r || e[3] !== c ? (u = c !== void 0 && r === "code" && PVt(c), e[2] = r, e[3] = c, e[4] = u) : u = e[4];
    const h = u;
    let p;
    e[5] !== c ? (p = c?.toString(), e[5] = c, e[6] = p) : p = e[6];
    const g = p;
    let f;
    e[7] !== a || e[8] !== g ? (f = (H)=>{
        const G = a.onDidModeChange((q)=>{
            q.key === i3.MARKDOWN_EDITOR && g && q.uri.toString() === g && H();
        });
        return ()=>G.dispose();
    }, e[7] = a, e[8] = g, e[9] = f) : f = e[9];
    const _ = f;
    let b;
    e[10] !== a || e[11] !== c ? (b = ()=>c ? a.getMode(i3.MARKDOWN_EDITOR, c, {
            defaultWhenUnset: OP.RICH
        }) ?? OP.RICH : OP.RICH, e[10] = a, e[11] = c, e[12] = b) : b = e[12];
    const S = q20(_, b), k = s.currentFilePath === i && !s.isLoading, C = k && (s.error !== void 0 || s.largeFileGate !== void 0 || s.contentType !== "text"), T = h && !C, I = T && S === OP.RICH, A = I && k && s.contentType === "text", P = Qec(n, A);
    let M;
    e[13] !== a || e[14] !== c ? (M = (H)=>{
        c && a.setMode(i3.MARKDOWN_EDITOR, c, H === "rich" ? OP.RICH : OP.RAW);
    }, e[13] = a, e[14] = c, e[15] = M) : M = e[15];
    const O = M;
    let N;
    e: {
        if (!I) {
            let G;
            e[16] === Symbol.for("react.memo_cache_sentinel") ? (G = {
                status: "hidden"
            }, e[16] = G) : G = e[16], N = G;
            break e;
        }
        if (P === void 0) {
            let G;
            e[17] === Symbol.for("react.memo_cache_sentinel") ? (G = {
                status: "loading"
            }, e[17] = G) : G = e[17], N = G;
            break e;
        }
        let H;
        e[18] !== P ? (H = {
            status: "ready",
            content: P
        }, e[18] = P, e[19] = H) : H = e[19], N = H;
    }
    const U = N, j = S === OP.RICH ? "rich" : "raw";
    let $;
    return e[20] !== O || e[21] !== U || e[22] !== T || e[23] !== I || e[24] !== j ? ($ = {
        showPreview: I,
        showModeSwitcher: T,
        headerMode: j,
        preview: U,
        onHeaderModeChange: O
    }, e[20] = O, e[21] = U, e[22] = T, e[23] = I, e[24] = j, e[25] = $) : $ = e[25], $;
}
export function K20(t) {
    return t === "source" ? "source" : "preview";
}
export function Y20(t) {
    if (!t) return !1;
    try {
        return XR(rt.parse(t)).toLowerCase() === ".svg";
    } catch  {
        return !1;
    }
}

export var MRv = {};
Object.defineProperty(MRv, "BrowserTabContent", {
    enumerable: true,
    get: ()=>S20
});
