import { Sa } from "./Iwo.js";
import { An, nn } from "./LYd.js";
import { $i, et } from "./Ycg.js";
import { $At, PL } from "./BA.js";
import { ire } from "./Asv.js";
import { JgT, QgT, efT, tfT } from "./mE_.js";
import { Xr } from "./Dialog.js";
import { ss } from "./authenticationService.js";
import { eu } from "./glass-log-service.js";
import { xf } from "./glass-opener-service.js";
import { aP_, cP_, lP_, uP_, yCc } from "./glass-steer-from-phone-modal.react.js";
import { _Cc } from "./glass-upgrade-confirmation-modal.react.js";
import { bCc, iP_, nP_ } from "./remote-control-qr.js";
import { Z_ } from "./uiOverlayService.js";
import { useCallback as vCc, useState as ifT } from "./react-runtime/react/esm-index-production.js";
import { jsx as S9n, jsxs as BUi } from "./react-runtime/react/esm-jsx-runtime-production.js";
export function rfT({ workspace: t }) {
    const e = et(Z_), n = et(ss), i = $i(t, xf), r = $i(t, eu), s = PL(e.upgradeConfirmationModal), o = s !== void 0, a = s?.tier, l = s?.server, [c, u] = ifT(!1), { membershipType: d, subscriptionStatus: h } = $At(), p = a ? QgT(a) : "", g = a ? JgT(a) : "", f = a ? efT(a) : "", _ = tfT(d, h), b = vCc((I)=>{
        e.closeUpgradeConfirmationModal(I);
    }, [
        e
    ]), y = vCc(()=>{
        c || b(!1);
    }, [
        b,
        c
    ]), S = vCc(async ()=>{
        if (!c) {
            if (l !== void 0) {
                b(!0);
                return;
            }
            if (a) {
                u(!0);
                try {
                    const I = await n.tryImmediateUpgrade(a);
                    I.invoiceUrl && i.open(I.invoiceUrl, {
                        openExternal: !0
                    }), b(!0);
                } catch (I) {
                    r.error("[GlassUpgradeConfirmationModal] Immediate upgrade failed:", I), b(!1);
                } finally{
                    u(!1);
                }
            }
        }
    }, [
        b,
        n,
        c,
        r,
        i,
        l,
        a
    ]);
    if (!o || !a && l === void 0) return null;
    const k = l?.title ?? `Confirm Upgrade to ${p}`, C = l?.message ?? (_ ? `You will be charged $${g}/month, and receive a prorated refund for the remaining days in your current plan.` : `Your saved payment method will be charged $${g}/month.`), T = l?.confirmLabel ?? `Upgrade to ${p}`;
    return BUi(Xr, {
        "aria-label": k,
        backdropStylexStyles: _Cc.dialogBackdrop,
        onOpenChange: (I)=>!I && y(),
        open: o,
        rootStylexStyles: _Cc.dialogRoot,
        size: "md",
        children: [
            BUi(Xr.Header, {
                children: [
                    BUi("div", {
                        children: [
                            S9n(Xr.Title, {
                                children: k
                            }),
                            l === void 0 ? S9n(Xr.Description, {
                                children: f
                            }) : null
                        ]
                    }),
                    S9n(Xr.Close, {})
                ]
            }),
            BUi(Xr.Content, {
                className: "glass-78zum5 glass-dt5ytf glass-1qqbgdy",
                children: [
                    S9n("p", {
                        className: "glass-dj266r glass-1yf7rl7 glass-at24cr glass-j3b58b glass-19aaqeu glass-1wm8ruf glass-37zpob glass-14s4slr",
                        "data-component": "glass-upgrade-confirmation-charge-note",
                        children: C
                    }),
                    BUi("div", {
                        className: "glass-78zum5 glass-13a6bvl glass-1oot3zn",
                        "data-component": "glass-upgrade-confirmation-actions",
                        children: [
                            S9n(An, {
                                disabled: c,
                                onClick: y,
                                variant: "secondary",
                                children: "Cancel"
                            }),
                            S9n(An, {
                                disabled: c,
                                onClick: ()=>void S(),
                                variant: "primary",
                                children: c ? "Upgrading\u2026" : T
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
export var rP_ = {};
Sa(rP_, {
    GlassSteerFromPhoneModal: ()=>cfT
});
import { c as sP_ } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as afT } from "./react-runtime/react/esm-index-production.js";
import { jsx as uht, jsxs as oP_ } from "./react-runtime/react/esm-jsx-runtime-production.js";
function lfT(t) {
    const e = sP_(3), { url: n } = t, [i, r] = afT(!1);
    if (i) return null;
    let s;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (s = ()=>r(!0), e[0] = s) : s = e[0];
    let o;
    return e[1] !== n ? (o = uht("img", {
        className: "glass-1lliihq glass-h8yej3 glass-1wkxgih glass-l1xv1r glass-1xmow02",
        alt: "",
        draggable: !1,
        onError: s,
        src: n
    }), e[1] = n, e[2] = o) : o = e[2], o;
}
function cfT(t) {
    const e = sP_(9), n = et(Z_), i = PL(n.steerFromCloudModal), r = ire();
    let s;
    e[0] !== n ? (s = (h)=>{
        h || n.closeSteerFromCloudModal();
    }, e[0] = n, e[1] = s) : s = e[1];
    const o = s;
    if (!i) return null;
    const a = r === "dark" ? aP_ : lP_;
    let l;
    e[2] !== a ? (l = uht(lfT, {
        url: a
    }, a), e[2] = a, e[3] = l) : l = e[3];
    let c;
    e[4] === Symbol.for("react.memo_cache_sentinel") ? (c = uht(Xr.Header, {
        title: yCc,
        titleWeight: "semibold",
        children: uht(Xr.Close, {})
    }), e[4] = c) : c = e[4];
    let u;
    e[5] === Symbol.for("react.memo_cache_sentinel") ? (u = uht(Xr.Content, {
        children: oP_("div", {
            className: "glass-78zum5 glass-dt5ytf glass-6s0dn4 glass-2b8uid glass-1oot3zn glass-usxwy5",
            "data-component": "steer-from-phone-modal",
            children: [
                uht("div", {
                    className: "glass-83z2og glass-1m7fhj7 glass-mkeg23 glass-1y0btm7 glass-13747pv glass-1fcjpnv glass-1psz5dr glass-gz2kjz glass-jniwn5 glass-14ju556",
                    children: uht("svg", {
                        "aria-label": `QR code linking to ${nP_}`,
                        height: "145",
                        role: "img",
                        shapeRendering: "crispEdges",
                        viewBox: `0 0 ${bCc} ${bCc}`,
                        width: "145",
                        children: uht("path", {
                            d: iP_,
                            fill: "#000000"
                        })
                    })
                }),
                uht(nn, {
                    as: "p",
                    color: "secondary",
                    size: "sm",
                    className: "glass-azqhv0 glass-1w2vvpw",
                    children: cP_
                })
            ]
        })
    }), e[5] = u) : u = e[5];
    let d;
    return e[6] !== o || e[7] !== l ? (d = oP_(Xr, {
        "aria-label": yCc,
        onOpenChange: o,
        open: !0,
        rootStylexStyles: uP_.dialog,
        size: "sm",
        children: [
            l,
            c,
            u
        ]
    }), e[6] = o, e[7] = l, e[8] = d) : d = e[8], d;
}
export var dP_ = {};
Sa(dP_, {
    PrivateInferenceDownloadDialog: ()=>hfT
});
import { c as dfT } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as UUi, jsxs as RBs } from "./react-runtime/react/esm-jsx-runtime-production.js";
function hfT() {
    const t = dfT(16), e = et(Z_), n = PL(e.privateInferenceDownloadPrompt);
    let i;
    t[0] !== e ? (i = (d)=>{
        e.closePrivateInferenceDownloadPrompt(d);
    }, t[0] = e, t[1] = i) : i = t[1];
    const r = i;
    let s;
    t[2] !== r ? (s = (d)=>!d && r("continueUpdate"), t[2] = r, t[3] = s) : s = t[3];
    let o;
    t[4] === Symbol.for("react.memo_cache_sentinel") ? (o = RBs(Xr.Header, {
        children: [
            RBs("div", {
                children: [
                    UUi(Xr.Title, {
                        children: "Cursor Private Inference is available"
                    }),
                    UUi(Xr.Description, {
                        children: "Download Cursor Private Inference to use your organization\u2019s private inference deployment."
                    })
                ]
            }),
            UUi(Xr.Close, {})
        ]
    }), t[4] = o) : o = t[4];
    let a;
    t[5] !== r ? (a = UUi(An, {
        onClick: ()=>r("continueUpdate"),
        variant: "secondary",
        children: "Continue Update"
    }), t[5] = r, t[6] = a) : a = t[6];
    let l;
    t[7] !== r ? (l = UUi(An, {
        onClick: ()=>r("download"),
        variant: "primary",
        children: "Download Cursor Private Inference"
    }), t[7] = r, t[8] = l) : l = t[8];
    let c;
    t[9] !== a || t[10] !== l ? (c = RBs(Xr.Footer, {
        children: [
            a,
            l
        ]
    }), t[9] = a, t[10] = l, t[11] = c) : c = t[11];
    let u;
    return t[12] !== n || t[13] !== s || t[14] !== c ? (u = RBs(Xr, {
        "aria-label": "Cursor Private Inference is available",
        onOpenChange: s,
        open: n,
        size: "lg",
        children: [
            o,
            c
        ]
    }), t[12] = n, t[13] = s, t[14] = c, t[15] = u) : u = t[15], u;
}

export var tP_ = {};
Object.defineProperty(tP_, "GlassUpgradeConfirmationModal", {
    enumerable: true,
    get: ()=>rfT
});
