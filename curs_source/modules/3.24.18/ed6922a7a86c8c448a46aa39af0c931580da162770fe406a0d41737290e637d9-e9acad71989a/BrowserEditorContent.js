import { yt } from "./A3u.js";
import { Ic_ } from "./BrowserEditorContent.css";
import { $2h, B2h, F2h, Fc_, H2h, O2h, U2h, Ytr, e5n } from "./BrowserMoreMenu.react.js";
import { Yh } from "./DSs.js";
import { Kb } from "./De_3.js";
import { bd } from "./Dialog.js";
import { Se } from "./HVr.js";
import { koe } from "./ImageUtil.js";
import { U8e } from "./MentionNode.js";
import { zi } from "./Menu.js";
import { Gc_ } from "./OmniboxDropdown.js";
import { Vo } from "./actions.js";
import { Pc_ } from "./browserBookmarkNaming.js";
import { Cc_ } from "./browserInjection.js";
import { K2h } from "./browserNavigation.js";
import { Tc_ } from "./browserOverlay.js";
import { jc_ } from "./browserPageBackdrop.js";
import { xc_ } from "./browserPlaceholderPages.js";
import { N2h } from "./browserZoomSteps.js";
import { $tr } from "./checkbox_2.js";
import { _i } from "./codicons.js";
import { fve } from "./f0s.js";
import { Tb } from "./hoverWidget.js";
import { mi } from "./index_188.js";
import { Ffg, ds, pe, qn } from "./qIc.js";
import { h8 } from "./scrollableDiv.js";
import { Vs } from "./solidContext.js";
import { Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
import { nj } from "./types_4.js";
import { Ay, fG } from "./uiPackageStyles.js";
import { uAo } from "./useMenuHover.js";
import { _C } from "./utils_23.js";
import { Js } from "./uuid.js";
import { $e } from "./web.js";
import { lo } from "./window.js";
import { Fragment as CAo } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as Lc_ } from "./react-runtime/react/esm-index-production.js";
import { jsx as UR } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as che } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useCallback as xoe } from "./react-runtime/react/esm-index-production.js";
function Ek(e) {
    return (t)=>{
        const [n, i] = Ffg(t, [
            "style",
            "class",
            "portalRoot",
            "deferStandaloneInitialRenderUntilMount"
        ]);
        return pe(fG, {
            reactComponent: e,
            get reactProps () {
                return {
                    ...i
                };
            },
            get class () {
                return n.class;
            },
            get style () {
                return n.style;
            },
            get portalRoot () {
                return n.portalRoot;
            },
            get deferStandaloneInitialRenderUntilMount () {
                return n.deferStandaloneInitialRenderUntilMount;
            }
        });
    };
}
function Nc_({ onZoomIn: e, onZoomOut: t, onZoomReset: n, zoomPercent: i }) {
    const r = xoe((p)=>{
        p.stopPropagation();
    }, []), s = xoe((p)=>{
        p.stopPropagation(), t();
    }, [
        t
    ]), o = xoe((p)=>{
        p.stopPropagation(), e();
    }, [
        e
    ]), a = xoe((p)=>{
        p.stopPropagation(), n();
    }, [
        n
    ]), c = xoe((p)=>{
        p.preventDefault();
    }, []), l = i <= O2h, u = i >= F2h, h = i === 100;
    return UR(zi.Item, {
        closeOnSelect: !1,
        disabled: !0,
        onSelect: c,
        trailing: che("div", {
            onMouseDown: r,
            style: B2h,
            children: [
                UR("button", {
                    "aria-label": "Zoom out",
                    disabled: l,
                    onClick: s,
                    style: {
                        ...l ? Ytr : e5n,
                        borderRadius: "3px 0 0 3px"
                    },
                    type: "button",
                    children: "\u2212"
                }),
                che("span", {
                    style: U2h,
                    children: [
                        i,
                        "%"
                    ]
                }),
                UR("button", {
                    "aria-label": "Zoom in",
                    disabled: u,
                    onClick: o,
                    style: {
                        ...u ? Ytr : e5n,
                        borderRadius: "0 3px 3px 0"
                    },
                    type: "button",
                    children: "+"
                }),
                UR("button", {
                    "aria-label": "Reset zoom",
                    disabled: h,
                    onClick: a,
                    style: {
                        ...h ? Ytr : e5n,
                        marginLeft: "2px",
                        border: "none",
                        borderRadius: "3px"
                    },
                    title: "Reset zoom to 100%",
                    type: "button",
                    children: UR("i", {
                        className: "codicon codicon-history",
                        style: $2h
                    })
                })
            ]
        }),
        children: UR("span", {
            style: {
                color: "var(--vscode-foreground)"
            },
            children: "Zoom"
        })
    });
}
function Oc_({ url: e, isDev: t, triggerClassName: n, triggerSize: i, zoomPercent: r, onZoomIn: s, onZoomOut: o, onZoomReset: a, onTakeScreenshot: c, onCaptureAreaScreenshot: l, onHardReload: u, onCopyUrl: h, onClearHistory: p, onClearCookies: g, onClearCache: f, onClearCertificates: v, onAfterClear: b, isBookmarkBarVisible: y, onBookmarkBarVisibleChange: T, onOpen: E, menuMinWidth: A, menuMaxWidth: R }) {
    const [D, P] = Lc_(null), N = xoe(async (J)=>{
        switch(J){
            case "history":
                await p();
                break;
            case "cookies":
                await g();
                break;
            case "cache":
                await f();
                break;
            case "certificates":
                await v();
                break;
            default:
                {
                    const ne = J;
                }
        }
    }, [
        p,
        g,
        f,
        v
    ]), O = xoe(async ()=>{
        D && (await N(D), b?.()), P(null);
    }, [
        D,
        N,
        b
    ]), F = xoe(()=>{
        P(null);
    }, []), H = xoe((J)=>{
        J || F();
    }, [
        F
    ]), $ = xoe((J)=>{
        J && E?.();
    }, [
        E
    ]), W = xoe(()=>{
        P("history");
    }, []), G = xoe(()=>{
        P("cookies");
    }, []), q = xoe(()=>{
        P("cache");
    }, []), z = xoe(()=>{
        P("certificates");
    }, []), X = D !== null, Y = D ? H2h[D] : null, Z = c || l, K = r !== void 0 && s && o && a;
    return che(CAo, {
        children: [
            che(zi, {
                onOpenChange: $,
                children: [
                    UR(zi.Trigger, {
                        children: n ? UR("button", {
                            className: n,
                            title: "Browser Menu",
                            type: "button",
                            children: UR("i", {
                                className: "codicon codicon-ellipsis"
                            })
                        }) : UR(Yh, {
                            "aria-label": "More options",
                            icon: "ellipsis",
                            iconSize: (i ?? "sm") === "md" ? "base" : void 0,
                            size: i ?? "sm",
                            variant: (i ?? "sm") === "sm" ? "text" : "ghost"
                        })
                    }),
                    che(zi.Content, {
                        "aria-label": "Browser options",
                        maxWidth: R,
                        minWidth: A,
                        children: [
                            Z ? che(CAo, {
                                children: [
                                    c && UR(zi.Item, {
                                        disabled: !e,
                                        onSelect: c,
                                        children: "Take Screenshot"
                                    }),
                                    l && UR(zi.Item, {
                                        disabled: !e,
                                        onSelect: l,
                                        children: "Capture Area Screenshot"
                                    }),
                                    che(zi.Section, {
                                        children: [
                                            UR(zi.Item, {
                                                onSelect: u,
                                                children: "Hard Reload"
                                            }),
                                            UR(zi.Item, {
                                                disabled: !e,
                                                onSelect: h,
                                                children: "Copy Current URL"
                                            })
                                        ]
                                    })
                                ]
                            }) : che(CAo, {
                                children: [
                                    UR(zi.Item, {
                                        onSelect: u,
                                        children: "Hard Reload"
                                    }),
                                    UR(zi.Item, {
                                        disabled: !e,
                                        onSelect: h,
                                        children: "Copy Current URL"
                                    })
                                ]
                            }),
                            K && UR(zi.Section, {
                                children: UR(Nc_, {
                                    onZoomIn: s,
                                    onZoomOut: o,
                                    onZoomReset: a,
                                    zoomPercent: r
                                })
                            }),
                            y !== void 0 && T && UR(zi.Section, {
                                children: UR(zi.SwitchItem, {
                                    checked: y,
                                    onChange: T,
                                    children: "Show Bookmark Bar"
                                })
                            }),
                            che(zi.Section, {
                                children: [
                                    UR(zi.Item, {
                                        onSelect: W,
                                        children: "Clear Browsing History"
                                    }),
                                    UR(zi.Item, {
                                        onSelect: G,
                                        children: "Clear Cookies"
                                    }),
                                    UR(zi.Item, {
                                        onSelect: q,
                                        children: "Clear Cache"
                                    })
                                ]
                            }),
                            t && UR(zi.Section, {
                                children: UR(zi.Item, {
                                    onSelect: z,
                                    children: "Clear Accepted Certificates"
                                })
                            })
                        ]
                    })
                ]
            }),
            che(bd, {
                onOpenChange: H,
                open: X,
                size: "sm",
                children: [
                    che(bd.Header, {
                        children: [
                            che("div", {
                                children: [
                                    UR(bd.Title, {
                                        children: Y?.title
                                    }),
                                    UR(bd.Description, {
                                        children: Y?.description
                                    })
                                ]
                            }),
                            UR(bd.Close, {})
                        ]
                    }),
                    che(bd.Footer, {
                        children: [
                            UR(ds, {
                                onClick: F,
                                variant: "text",
                                children: "Cancel"
                            }),
                            UR(ds, {
                                onClick: O,
                                variant: "primary",
                                children: "Clear"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
var iOh, rOh, sOh, oOh, aOh, cOh, lOh, uOh, dOh, hOh, pOh, mOh, gOh, fOh, vOh, _Oh, bOh, yOh, SOh, kOh, wOh, COh, TOh, EOh, xOh, IOh, AOh, ROh, DOh, xAo, IAo, MOh, H8e;
export { AOh, COh, DOh, EOh, Ek, H8e, IAo, IOh, MOh, Nc_, Oc_, ROh, SOh, TOh, _Oh, aOh, bOh, cOh, dOh, fOh, gOh, hOh, iOh, kOh, lOh, mOh, oOh, pOh, rOh, sOh, uOh, vOh, wOh, xAo, xOh, yOh };
var __wakaru_zc__initialized = false;
export function zc_() {
if (__wakaru_zc__initialized) return;
__wakaru_zc__initialized = true;
"use strict";
x(), $e(), $e(), $e(), $e(), $e(), $e(), $e(), $e(), mi(), qn(), Kb(), Tb(), lo(), Vo(), _i(), Se(), Sr(), Js(), Ay(), Vs(), U8e(), nj(), koe(), $tr(), uAo(), h8(), Cc_(), Tc_(), xc_(), N2h(), _C(), Ic_(), Pc_(), Fc_(), Gc_(), K2h(), jc_(), iOh = yt('<div class="flex flex-col gap-0.5"><div class="flex items-center gap-1.5"><img alt=""class="w-3 h-3 rounded-xs shrink-0"><span class="text-[var(--cursor-text-primary)] text-[11px] font-medium truncate"></span></div><div class="text-[var(--cursor-text-secondary)] text-[10px] leading-[12px] truncate max-w-[280px]">'), rOh = yt("<button class=nav-button><i>"), sOh = yt("<span class=url-input-ghost><span class=url-input-ghost-typed></span><span class=url-input-ghost-completion>"), oOh = yt('<div class=url-input-wrapper><input class=url-input type=text placeholder="Enter URL or search..."autocomplete=off>'), aOh = yt("<div class=url-loading-bar><div class=url-loading-bar-progress>"), cOh = yt('<div class=browser-tools><button title="Select element"><i></i></button><button><i>'), lOh = yt("<div class=bookmark-drop-indicator-end>"), uOh = yt("<div class=browser-bookmarks-inner>"), dOh = yt("<div class=browser-bookmarks-bar>"), hOh = yt('<div class=browser-error-overlay><div class=browser-error-content><div class=browser-error-icon><i></i></div><div class=browser-error-title>Certificate Error</div><div class=browser-error-subtitle>The certificate for this site is not trusted</div><div class=browser-cert-info><div class=browser-cert-info-row><span class=browser-cert-info-label>Error:</span><span class=browser-cert-info-value></span></div><div class=browser-cert-info-row><span class=browser-cert-info-label>Issuer:</span><span class=browser-cert-info-value></span></div><div class=browser-cert-info-row><span class=browser-cert-info-label>Subject:</span><span class=browser-cert-info-value></span></div><div class=browser-cert-info-row><span class=browser-cert-info-label>Valid:</span><span class=browser-cert-info-value> - </span></div><div class=browser-cert-info-row><span class=browser-cert-info-label>Fingerprint:</span><span class="browser-cert-info-value browser-cert-fingerprint"></span></div></div><div class=browser-cert-warning><i></i><span>Only trust certificates from sources you recognize. Accepting untrusted certificates can compromise your security.</span></div><div class=browser-cert-actions><div class=browser-cert-remember><span>Remember for this workspace</span></div><div class=browser-cert-buttons><button class="browser-cert-button browser-cert-reject">Reject</button><button class="browser-cert-button browser-cert-trust">'), pOh = yt("<div class=browser-lock-overlay><div>"), mOh = yt("<div class=browser-recording-indicator><div class=recording-dot></div><span>Recording "), gOh = yt('<div class=browser-device-emulation-indicator title="The agent set a device viewport override on this page"><i></i><span></span><button class=browser-device-emulation-reset title="Return the page to the panel size">Reset'), fOh = yt('<div><div class=browser-navbar><div class=nav-controls><button class=nav-button title="Navigate back"><i></i></button><button class=nav-button title="Navigate forward"><i></i></button><button class=nav-button title="Hard reload (clears cache)"><i></i></button></div><div class=url-input-container></div></div><div><div class=browser-frame-container>'), vOh = yt("<span class=url-placeholder>Loading..."), _Oh = yt("<span class=url-raw>"), bOh = yt("<span>"), yOh = yt("<span class=url-placeholder>Enter URL or search..."), SOh = yt("<div class=url-display>"), kOh = yt("<span class=url-protocol>"), wOh = yt("<span class=url-domain>"), COh = yt("<span class=url-port>"), TOh = yt("<span class=url-path>"), EOh = yt('<button><img alt=""class=bookmark-favicon><i></i><span class=bookmark-domain>'), xOh = yt("<div class=browser-tab-container tabindex=-1>"), IOh = Ek(Oc_), AOh = Ek(fve), ROh = `
(function() {
	if (window.__cursorAreaScreenshotInjected) return;
	if (window !== window.top) return;
	window.__cursorAreaScreenshotInjected = true;

	let isDragging = false;
	let dragStartX = null;
	let dragStartY = null;
	let dragSelectionBox = null;
	let areaDragListeners = null;

	function enableAreaSelection() {
		if (areaDragListeners) {
			return; // Already enabled, prevent duplicate listeners
		}
		const mousedownListener = (e) => {
			if (!e.isTrusted) return;
			if (e.target.getAttribute && e.target.getAttribute('data-cursor-overlay') === 'true') return;
			e.preventDefault();
			e.stopPropagation();
			isDragging = true;
			dragStartX = e.clientX;
			dragStartY = e.clientY;
			const overlays = document.querySelectorAll('[data-cursor-overlay="true"]');
			overlays.forEach(el => el.style.display = 'none');
			if (!dragSelectionBox) {
				dragSelectionBox = document.createElement('div');
				dragSelectionBox.style.cssText = 'position:fixed;background:rgba(58,150,221,0.1);border:2px dashed #3a96dd;pointer-events:none;z-index:2147483647;';
				document.body.appendChild(dragSelectionBox);
			}
			dragSelectionBox.style.left = dragStartX + 'px';
			dragSelectionBox.style.top = dragStartY + 'px';
			dragSelectionBox.style.width = '0px';
			dragSelectionBox.style.height = '0px';
		};
		const mousemoveListener = (e) => {
			if (!isDragging || !dragSelectionBox) return;
			const left = Math.min(dragStartX, e.clientX);
			const top = Math.min(dragStartY, e.clientY);
			const width = Math.abs(e.clientX - dragStartX);
			const height = Math.abs(e.clientY - dragStartY);
			dragSelectionBox.style.left = left + 'px';
			dragSelectionBox.style.top = top + 'px';
			dragSelectionBox.style.width = width + 'px';
			dragSelectionBox.style.height = height + 'px';
		};
		const mouseupListener = (e) => {
			if (!isDragging || !e.isTrusted) return;
			e.preventDefault();
			e.stopPropagation();
			const left = Math.min(dragStartX, e.clientX);
			const top = Math.min(dragStartY, e.clientY);
			const width = Math.abs(e.clientX - dragStartX);
			const height = Math.abs(e.clientY - dragStartY);
			if (width > 5 && height > 5) {
				const bounds = { x: Math.round(left), y: Math.round(top), width: Math.round(width), height: Math.round(height) };
				if (dragSelectionBox) { dragSelectionBox.remove(); dragSelectionBox = null; }
				disableAreaSelection();
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						if (window.cursorBrowser) {
							window.cursorBrowser.send('area-screenshot-selected', { bounds: bounds });
						}
					});
				});
			} else {
				if (dragSelectionBox) { dragSelectionBox.remove(); dragSelectionBox = null; }
			}
			isDragging = false;
		};
		document.addEventListener('mousedown', mousedownListener, true);
		document.addEventListener('mousemove', mousemoveListener);
		document.addEventListener('mouseup', mouseupListener, true);
		areaDragListeners = { mousedown: mousedownListener, mousemove: mousemoveListener, mouseup: mouseupListener };
	}

	function disableAreaSelection() {
		isDragging = false;
		dragStartX = null;
		dragStartY = null;
		if (dragSelectionBox) { dragSelectionBox.remove(); dragSelectionBox = null; }
		if (areaDragListeners) {
			document.removeEventListener('mousedown', areaDragListeners.mousedown, true);
			document.removeEventListener('mousemove', areaDragListeners.mousemove);
			document.removeEventListener('mouseup', areaDragListeners.mouseup, true);
			areaDragListeners = null;
		}
	}

	function onAreaScreenshotCommand(data) {
		if (!data) return;
		if (data.type === 'start-area-screenshot') {
			enableAreaSelection();
		} else if (data.type === 'stop-area-screenshot') {
			disableAreaSelection();
		}
	}
	window.__cursorAreaScreenshotCommand = onAreaScreenshotCommand;
})();
`, DOh = !0, xAo = (e)=>{
    if (!e) return null;
    try {
        return new URL(e).origin;
    } catch  {
        return null;
    }
}, IAo = (e)=>{
    try {
        return new URL(e).host || void 0;
    } catch  {
        return;
    }
}, MOh = "about:blank", H8e = (e)=>e === MOh;

}
