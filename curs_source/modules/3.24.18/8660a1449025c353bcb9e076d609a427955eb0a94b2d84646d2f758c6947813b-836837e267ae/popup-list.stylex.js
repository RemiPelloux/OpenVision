import { E } from "./tslib.es6.js";
var lch, cch, uch, vE, Sea, dch, O2r, hch, F2r, pch, mch, B2r, U2r, j2r, fci, $2r, gch, kea, vci, H2r, fch, wea, Cea, Tea, Eea, Iea, xea, _7t, Aea, p$y, W2r, Rea, ybn, Pea, Mea, Dea;
export { $2r, Aea, B2r, Cea, Dea, Eea, F2r, H2r, Iea, Mea, O2r, Pea, Rea, Sea, Tea, U2r, W2r, _7t, cch, dch, fch, fci, gch, hch, j2r, kea, lch, mch, p$y, pch, uch, vE, vci, wea, xea, ybn };
var __wakaru_eFe_initialized = false;
export function eFe() {
if (__wakaru_eFe_initialized) return;
__wakaru_eFe_initialized = true;
"use strict";
E(), lch = {
    ks0D6T: "ui-13kvn80",
    $$css: !0
}, cch = {
    ks0D6T: "ui-f68679",
    $$css: !0
}, uch = {
    kskxy: "ui-1jols5v",
    $$css: !0
}, vE = {
    popupFrame: {
        kB7OPa: "ui-9f619",
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kHBbk8: "ui-c8icb0",
        kfSwDN: "ui-87ps6o",
        kY4cRS: "ui-lvsv26",
        $$css: !0
    },
    menuPopup: {
        k7Eaqz: "ui-1i9suas",
        ks0D6T: "ui-13kvn80",
        kskxy: "ui-1u4d8o5",
        kaIpWk: "ui-1828qc5",
        kMeerF: "ui-1k57tk5",
        k3XXqK: "ui-1t137rt",
        $$css: !0
    },
    menuPositionerRadius: {
        kaIpWk: "ui-1828qc5",
        $$css: !0
    },
    menuPopupHideWhenAnchorHidden: {
        kV4ckA: "ui-2f5yyy",
        kYLTpN: "ui-1hyz5x3",
        $$css: !0
    },
    menuPopupContent: {
        k1xSpc: "ui-jp7ctv",
        "--available-width": "ui-1wd9z7n",
        "--available-height": "ui-1px786n",
        "--anchor-width": "ui-4m06ot",
        "--anchor-height": "ui-1x9mm2a",
        "--transform-origin": "ui-pmnpdm",
        $$css: !0
    },
    menuPopupWidth: (t)=>[
            lch,
            {
                kzqmXN: t != null ? "ui-5lhr3w" : t,
                $$css: !0
            },
            {
                "--x-width": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t)
            }
        ],
    menuPopupDefaultWidth: {
        kzqmXN: "ui-ezivpi",
        k7Eaqz: "ui-lopysa",
        $$css: !0
    },
    menuPopupMinWidth: (t)=>[
            {
                k7Eaqz: t != null ? "ui-kj4a21" : t,
                $$css: !0
            },
            {
                "--x-minWidth": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t)
            }
        ],
    menuPopupMaxWidth: (t)=>[
            cch,
            {
                "--x-maxWidth": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(`min(${typeof t == "number" ? `${t}px` : t}, var(--available-width))`)
            }
        ],
    menuPopupHug: {
        kzqmXN: "ui-ezivpi",
        $$css: !0
    },
    menuPopupMaxHeight: (t)=>[
            uch,
            {
                "--x-maxHeight": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(`min(${typeof t == "number" ? `${t}px` : t}, var(--available-height, 100vh))`)
            }
        ],
    list: {
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kAzted: "ui-2lwn1j",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-ryxfnj",
        $$css: !0
    },
    menuList: {
        kOIVth: "ui-x00bh8",
        kLKAdn: "ui-vxa9ti",
        kwRFfy: "ui-1oqqsvb",
        kGO01o: "ui-k1wcff",
        kZCmMZ: "ui-6wvkkf",
        $$css: !0
    },
    menuListWhenEmpty: {
        kLKAdn: "ui-vxa9ti ui-l6bsgv",
        kGO01o: "ui-k1wcff ui-1tsmoef",
        $$css: !0
    },
    menuFixedSlot: {
        kB7OPa: "ui-9f619",
        kmuXW: "ui-2lah0s",
        kLKAdn: "ui-vxa9ti",
        kwRFfy: "ui-1oqqsvb",
        kGO01o: "ui-k1wcff",
        kZCmMZ: "ui-6wvkkf",
        $$css: !0
    },
    menuHeader: {
        kt9PQ7: "ui-1mk49ma",
        kfdmCh: "ui-1q0q8m5",
        kL6WhQ: "ui-b6scco",
        $$css: !0
    },
    menuFooter: {
        kEafiO: "ui-jpjugk",
        kPef9Z: "ui-13fuv20",
        kLZC3w: "ui-14av3n6",
        $$css: !0
    },
    group: {
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kOIVth: "ui-x00bh8",
        $$css: !0
    },
    groupLabel: {
        kzQI83: "ui-1iyjqo2",
        k7Eaqz: "ui-euugli",
        $$css: !0
    },
    divider: {
        kB7OPa: "ui-9f619",
        kZKoxP: "ui-1ws4142",
        kAzted: "ui-66wokv",
        kWkggS: "ui-ry6dcj",
        kEafiO: "ui-972fbf",
        ke9TFa: "ui-10w94by",
        kt9PQ7: "ui-1qhh985",
        k2ei4v: "ui-14e42zd",
        kPef9Z: "ui-1ejq31n",
        k8ry5P: "ui-18oe1m7",
        kfdmCh: "ui-1sy0etr",
        kVhnKS: "ui-stzfhl",
        keoZOQ: "ui-1x0km78",
        k71WvV: "ui-k0f3xd",
        k1K539: "ui-1j5pw3q",
        keTefX: "ui-1a9zro7",
        kLKAdn: "ui-exx8yu",
        kwRFfy: "ui-yri2b",
        kGO01o: "ui-18d9i69",
        kZCmMZ: "ui-1c1uobl",
        kfzvcC: "ui-47corl",
        $$css: !0
    },
    separatorLayout: {
        kSGwAc: "ui-kh2ocl",
        kmuXW: "ui-2lah0s",
        $$css: !0
    },
    row: {
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-1q0g3np",
        kGNEyG: "ui-6s0dn4",
        kMeerF: "ui-1k57tk5",
        k3XXqK: "ui-1t137rt",
        kkrTdU: "ui-1ypdohk ui-mh7c9n",
        kMwMTN: "ui-1wd3ewq ui-1kosevp",
        kWkggS: "ui-jbqb8w ui-1sbws7q",
        $$css: !0
    },
    rowFrame: {
        kB7OPa: "ui-9f619",
        kVAEAm: "ui-1n2onr6",
        kOIVth: "ui-xhr3t",
        kaIpWk: "ui-2u8bby",
        "--ui-popup-list-row-highlighted-opacity": "ui-5i412e ui-1nlrr02",
        kWkggS: "ui-jbqb8w ui-9wl9qz",
        $$css: !0
    },
    menuRowMinHeight: {
        kAzted: "ui-1ff271z ui-1yrgodw",
        $$css: !0
    },
    menuRowMetrics: {
        kLKAdn: "ui-1305i5w ui-c9dpsm",
        kwRFfy: "ui-o6jljq",
        kGO01o: "ui-1ioonqm ui-1t9sq64",
        kZCmMZ: "ui-1d8gtjo",
        $$css: !0
    },
    rowInsetHighlight: {
        kOEVvA: "ui-i4tjbf",
        k5uj8I: "ui-66jpid",
        kq4gsV: "ui-1kn4tos",
        k4ymXE: "ui-1h1qzfg",
        kF4oUt: "ui-15ommkv",
        kPsB8K: "ui-6o5ikd",
        keQWX6: "ui-vv2yia",
        kqNwI3: "ui-1prubpf",
        kSJm4H: "ui-1hezt85",
        kVBs6H: "ui-1isuopv",
        $$css: !0
    },
    menuRowPriority: {
        kMwMTN: "ui-1kosevp ui-acck0t ui-731v8i ui-g3whw4",
        $$css: !0
    },
    menuRowLeading: {
        kmuXW: "ui-2lah0s",
        kVAEAm: "ui-1n2onr6",
        kY2c9j: "ui-1vjfegm",
        kMwMTN: "ui-1lhgsel ui-qj52dh",
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        k71WvV: "ui-1i7sqng",
        $$css: !0
    },
    menuRowLeadingBox: {
        kzqmXN: "ui-1sdg1an",
        kZKoxP: "ui-okyidv",
        $$css: !0
    },
    rowText: {
        kUk6DE: "ui-98rzlu",
        k7Eaqz: "ui-euugli",
        $$css: !0
    },
    rowSection: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kmuXW: "ui-2lah0s",
        kMwMTN: "ui-19aaqeu",
        $$css: !0
    },
    rowSectionTrailing: {
        keTefX: "ui-kiyga0",
        $$css: !0
    },
    rowSectionDescription: {
        kSGwAc: "ui-qcrz7y",
        keoZOQ: "ui-1k5org8",
        $$css: !0
    }
}, Sea = vE.list, dch = vE.row, O2r = vE.popupFrame, hch = vE.rowFrame, F2r = vE.rowInsetHighlight, pch = vE.rowText, mch = vE.rowSection, B2r = vE.rowSectionTrailing, U2r = vE.rowSectionDescription, j2r = vE.group, fci = vE.groupLabel, $2r = vE.divider, gch = vE.separatorLayout, kea = vE.menuPopup, vci = vE.menuPositionerRadius, H2r = vE.menuPopupHideWhenAnchorHidden, fch = vE.menuPopupContent, wea = vE.menuPopupWidth, Cea = vE.menuPopupDefaultWidth, Tea = vE.menuPopupMinWidth, Eea = vE.menuPopupMaxWidth, Iea = vE.menuPopupHug, xea = vE.menuPopupMaxHeight, _7t = [
    vE.list,
    vE.menuList
], Aea = vE.menuListWhenEmpty, p$y = vE.menuFixedSlot, W2r = [
    vE.menuFixedSlot,
    vE.menuHeader
], Rea = [
    vE.menuFixedSlot,
    vE.menuFooter
], ybn = [
    vE.row,
    vE.rowFrame,
    vE.menuRowMinHeight,
    vE.menuRowMetrics
], Pea = vE.menuRowPriority, Mea = [
    vE.menuRowLeading,
    vE.menuRowLeadingBox
], Dea = vE.menuRowLeadingBox;

}
