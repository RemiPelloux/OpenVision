import { pJf } from "./DialogBackdrop.js";
import { gJf } from "./DialogClose_2.js";
import { vJf } from "./DialogDescription_2.js";
import { VJf, zOs } from "./DialogHandle.js";
import { kJf } from "./DialogPopup.js";
import { TJf } from "./DialogPortal.js";
import { OJf } from "./DialogRoot.js";
import { HJf } from "./DialogTitle_2.js";
import { WJf } from "./DialogTrigger.js";
import { UJf } from "./DialogViewport.js";
import { d6 } from "./PortalContext.js";
import { GJf, JJf, Jcu, KOs, QJf, XJf, YJf, ZJf, eev, elu, iev, nev, rev, tev } from "./f0s.js";
import { sp } from "./icon.js";
import { GJ } from "./qIc.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
import { createContext as jJf } from "./react-runtime/react/esm-index-production.js";
var P6e, tlu, YOs, nlu, fbt;
export { P6e, YOs, fbt, nlu, tlu };
var __wakaru_sev_initialized = false;
export function sev() {
if (__wakaru_sev_initialized) return;
__wakaru_sev_initialized = true;
"use strict";
x(), Oc(), OJf(), WJf(), d6(), GJ(), TJf(), pJf(), UJf(), kJf(), HJf(), vJf(), sp(), gJf(), VJf(), P6e = {
    backdrop: {
        kVAEAm: "ui-ixxii4",
        kpwlN0: "ui-10a8y8t",
        kY2c9j: "ui-1q7zipb",
        kWkggS: "ui-1c8ul09",
        kSiTet: "ui-1hc1fzr ui-1hw7zpd ui-iyypsa",
        k1ekBW: "ui-19991ni",
        kIyJzY: "ui-g3p6pi ui-12w9bfk",
        kAMwcw: "ui-6ekqhr",
        $$css: !0
    },
    viewport: {
        kVAEAm: "ui-ixxii4",
        kpwlN0: "ui-10a8y8t",
        kY2c9j: "ui-3vbryh",
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kB7OPa: "ui-9f619",
        kmVPX3: "ui-1n6jgo6",
        kXHlph: "ui-w2csxc",
        kORKVm: "ui-1odjw0f",
        $$css: !0
    },
    popup: {
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kB7OPa: "ui-9f619",
        kzqmXN: "ui-1l2rt3b",
        ks0D6T: "ui-193iq5w",
        kskxy: "ui-mz0i5r",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kMwMTN: "ui-1wd3ewq",
        kWkggS: "ui-f1vpex",
        kMzoRj: "ui-mkeg23",
        ksu8eU: "ui-1y0btm7",
        kVAM5u: "ui-13747pv",
        kaIpWk: "ui-1pkpdue",
        kGVxlE: "ui-189dmb1",
        kMv6JI: "ui-1acoasx",
        kGuDYH: "ui-11wthnw",
        kLWn49: "ui-1ja60sm",
        k3XXqK: "ui-1t137rt",
        kSiTet: "ui-1hc1fzr ui-1hw7zpd ui-iyypsa",
        k3aq6I: "ui-3oybdh ui-1oigtas ui-1mpul5v",
        k3nNDw: "ui-1g0ag68",
        k1ekBW: "ui-6o7n8i",
        kIyJzY: "ui-g3p6pi ui-12w9bfk",
        kAMwcw: "ui-6ekqhr",
        kKVMdj: "ui-1a5igra ui-134gm4b",
        k44tkh: "ui-6pf86u ui-1u6grsq",
        $$css: !0
    },
    popupSm: {
        kzqmXN: "ui-1m258z3",
        $$css: !0
    },
    popupMd: {
        kzqmXN: "ui-1l2rt3b",
        $$css: !0
    },
    popupLg: {
        kzqmXN: "ui-ht4xr3",
        $$css: !0
    },
    popupXl: {
        kzqmXN: "ui-ewp6mh",
        $$css: !0
    },
    popupXxl: {
        kzqmXN: "ui-11i3ho8",
        $$css: !0
    }
}, tlu = {
    sm: P6e.popupSm,
    md: P6e.popupMd,
    lg: P6e.popupLg,
    xl: P6e.popupXl,
    xxl: P6e.popupXxl
}, YOs = jJf(null), nlu = Object.assign(tev, {
    Lead: KOs
}), fbt = {
    Root: YJf,
    Trigger: XJf,
    Portal: ZJf,
    Backdrop: QJf,
    Viewport: JJf,
    Popup: eev,
    Header: nlu,
    HeaderLead: KOs,
    Content: nev,
    Footer: iev,
    Title: Jcu,
    Description: elu,
    Close: rev,
    createHandle: GJf,
    Handle: zOs
};

}
