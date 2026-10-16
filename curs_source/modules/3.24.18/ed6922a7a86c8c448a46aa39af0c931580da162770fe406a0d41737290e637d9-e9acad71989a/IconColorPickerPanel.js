import { KGl } from "./IconColorPickerGlyphs.js";
import { _Af } from "./IconColorPickerGrid.js";
import { TLi } from "./Popover.js";
import { fC } from "./Text.js";
import { I5e, xRe } from "./cursor-icons.js";
import { IVl, uTn, xVl } from "./f0s.js";
import { sp } from "./icon.js";
import { Nn } from "./qIc.js";
import { Oc } from "./stylex.js";
import { ikn } from "./surfaceHairline.stylex.js";
import { b5t } from "./tooltip-delay-group.js";
import { HO } from "./tooltip.js";
import { x } from "./tslib.es6.js";
import { jsx as NM } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as T_t } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { forwardRef as nRf } from "./react-runtime/react/esm-index-production.js";
var nRs, AVl, RVl, DVl, MVl, PVl, LVl, NVl, OVl, iRs, FVl, t6e, BVl, sRs, UVl, oRs, $Vl, HVl, aRs, cRs;
export { $Vl, AVl, BVl, DVl, FVl, HVl, LVl, MVl, NVl, OVl, PVl, RVl, UVl, aRs, cRs, iRs, nRs, oRs, sRs, t6e };
var __wakaru_dTn_initialized = false;
export function dTn() {
if (__wakaru_dTn_initialized) return;
__wakaru_dTn_initialized = true;
"use strict";
x(), Oc(), xRe(), ikn(), KGl(), _Af(), sp(), HO(), b5t(), fC(), TLi(), nRs = "data-ui-icon-color-picker-popover", AVl = [
    "default",
    "green",
    "cyan",
    "blue",
    "purple",
    "magenta",
    "orange",
    "yellow",
    "red",
    "brand"
], RVl = I5e, DVl = AVl, MVl = "lightning", PVl = "default", LVl = 338, NVl = LVl - 16, OVl = [
    {
        id: "default",
        label: "Default"
    },
    {
        id: "green",
        label: "Green"
    },
    {
        id: "cyan",
        label: "Cyan"
    },
    {
        id: "blue",
        label: "Blue"
    },
    {
        id: "purple",
        label: "Purple"
    },
    {
        id: "magenta",
        label: "Magenta"
    },
    {
        id: "orange",
        label: "Orange"
    },
    {
        id: "yellow",
        label: "Yellow"
    },
    {
        id: "red",
        label: "Red"
    },
    {
        id: "brand",
        label: "Brand"
    }
], iRs = [
    "code",
    "terminal",
    "bug",
    "git-branch",
    "brackets-curly",
    "chip",
    "folder",
    "book-open",
    "file-text",
    "files",
    "library",
    "globe",
    "browser",
    "link",
    "chat-bubbles",
    "envelope",
    "megaphone",
    "paperplane",
    "briefcase",
    "calendar",
    "board-kanban",
    "list-todo",
    "target",
    "flag",
    "database",
    "chart-bars",
    "graph-line",
    "table",
    "atom",
    "beaker",
    "microscope",
    "brain",
    "palette",
    "brush",
    "camera",
    "image",
    "music",
    "magic-wand",
    "cloud",
    "server",
    "shield",
    "lightning",
    "rocket",
    "sparkle",
    "star",
    "moon",
    "heart",
    "smiley-happy"
], FVl = IVl(I5e.filter(xVl)), t6e = {
    trigger: {
        k1xSpc: "ui-78zum5",
        kzqmXN: "ui-jst10v",
        kZKoxP: "ui-170hpbr",
        kmuXW: "ui-2lah0s",
        kkrTdU: "ui-1ypdohk ui-tgyt42",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kEafiO: "ui-972fbf",
        kPef9Z: "ui-1ejq31n",
        kWqL5O: "ui-gfja2r",
        kSWEuD: "ui-11pwa6s",
        kt9PQ7: "ui-1qhh985",
        kfdmCh: "ui-1sy0etr",
        kZ1KPB: "ui-yj58a3",
        k4WBpm: "ui-1b16gh4",
        kaIpWk: "ui-1043rbw",
        kWkggS: "ui-1ciwos8",
        kMwMTN: "ui-1mh7f6w",
        kMeerF: "ui-1k57tk5",
        k3XXqK: "ui-1t137rt",
        kInvED: "ui-1wfwxd8",
        kjBf7l: "ui-1uczgqu",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-1xpa7k",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-1uhho1l",
        k1ekBW: "ui-s2xxs2",
        kIyJzY: "ui-g3p6pi ui-sagj69",
        kAMwcw: "ui-6ekqhr",
        kGVxlE: "ui-1gnnqk1 ui-23750h",
        kSiTet: "ui-1hc1fzr ui-ijokvz",
        $$css: !0
    },
    triggerBare: {
        kzqmXN: "ui-1pwdyn5",
        kZKoxP: "ui-1vatr1o",
        keTefX: "ui-1adsbrk",
        kWkggS: "ui-jbqb8w",
        kMwMTN: "ui-1mh7f6w ui-wtkblp",
        $$css: !0
    },
    triggerPlaceholder: {
        kMwMTN: "ui-1lbmi28 ui-5408cx",
        $$css: !0
    },
    triggerLarge: {
        kzqmXN: "ui-1niwmkg",
        kZKoxP: "ui-f2gx5w",
        $$css: !0
    },
    triggerXlarge: {
        kzqmXN: "ui-1w4v6el",
        kZKoxP: "ui-e48kcg",
        $$css: !0
    },
    popover: {
        kVAEAm: "ui-1n2onr6",
        kB7OPa: "ui-9f619",
        kzqmXN: "ui-165vjil",
        ks0D6T: "ui-1x1rfll",
        kskxy: "ui-2so1p5",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kEafiO: "ui-972fbf",
        ke9TFa: "ui-10w94by",
        kt9PQ7: "ui-1qhh985",
        k2ei4v: "ui-14e42zd",
        kaIpWk: "ui-1m7fhj7",
        kLKAdn: "ui-exx8yu",
        kwRFfy: "ui-yri2b",
        kGO01o: "ui-18d9i69",
        kZCmMZ: "ui-1c1uobl",
        kWkggS: "ui-f1vpex",
        kMwMTN: "ui-1wd3ewq",
        kGVxlE: "ui-1ep8fdt",
        kfSwDN: "ui-87ps6o",
        kY4cRS: "ui-lvsv26",
        k6sLGO: "ui-1q1rmc8",
        k3aq6I: "ui-17dzmu4",
        kgyCeQ: "ui-lp1x4z",
        kdrBUz: "ui-7iibnf",
        kHBbk8: "ui-c8icb0",
        kMeerF: "ui-1k57tk5",
        k3XXqK: "ui-1t137rt",
        kInvED: "ui-1wfwxd8",
        kjBf7l: "ui-1uczgqu",
        $$css: !0
    },
    iconScroll: {
        kB7OPa: "ui-9f619",
        kskxy: "ui-1atetza",
        kORKVm: "ui-10wlt62",
        kLKAdn: "ui-13ly8rp",
        kpe85a: "ui-1yxiud8",
        kGO01o: "ui-1xlntvz",
        kE3dHu: "ui-yab65l",
        $$css: !0
    },
    swatch: {
        kfzvcC: "ui-47corl",
        k1xSpc: "ui-1lliihq",
        kzqmXN: "ui-16bvwqk",
        kZKoxP: "ui-1a6rlst",
        kmuXW: "ui-2lah0s",
        kaIpWk: "ui-1i4c3av",
        $$css: !0
    }
}, BVl = {
    default: {
        kWkggS: "ui-1wwcp47",
        $$css: !0
    },
    green: {
        kWkggS: "ui-15xcjd2",
        $$css: !0
    },
    cyan: {
        kWkggS: "ui-1hnk832",
        $$css: !0
    },
    blue: {
        kWkggS: "ui-1b558e3",
        $$css: !0
    },
    purple: {
        kWkggS: "ui-115tbk9",
        $$css: !0
    },
    magenta: {
        kWkggS: "ui-4v5wj8",
        $$css: !0
    },
    orange: {
        kWkggS: "ui-4nxgu2",
        $$css: !0
    },
    yellow: {
        kWkggS: "ui-1lrqy4w",
        $$css: !0
    },
    red: {
        kWkggS: "ui-1szgyur",
        $$css: !0
    },
    brand: {
        kWkggS: "ui-p380qn",
        $$css: !0
    }
}, sRs = {
    default: {
        kMwMTN: "ui-1mh7f6w",
        $$css: !0
    },
    green: {
        kMwMTN: "ui-p6nzhx",
        $$css: !0
    },
    cyan: {
        kMwMTN: "ui-1rbygr4",
        $$css: !0
    },
    blue: {
        kMwMTN: "ui-101qeuz",
        $$css: !0
    },
    purple: {
        kMwMTN: "ui-1b0hn6l",
        $$css: !0
    },
    magenta: {
        kMwMTN: "ui-pwp9en",
        $$css: !0
    },
    orange: {
        kMwMTN: "ui-4qtrdv",
        $$css: !0
    },
    yellow: {
        kMwMTN: "ui-1hn9r2r",
        $$css: !0
    },
    red: {
        kMwMTN: "ui-ku4wcm",
        $$css: !0
    },
    brand: {
        kMwMTN: "ui-v3vxec",
        $$css: !0
    }
}, UVl = {
    default: {
        kMwMTN: "ui-1lbmi28",
        $$css: !0
    },
    green: {
        kMwMTN: "ui-zojsrl",
        $$css: !0
    },
    cyan: {
        kMwMTN: "ui-3fjyyo",
        $$css: !0
    },
    blue: {
        kMwMTN: "ui-1aiu0x6",
        $$css: !0
    },
    purple: {
        kMwMTN: "ui-1g22z9o",
        $$css: !0
    },
    magenta: {
        kMwMTN: "ui-1dg4jef",
        $$css: !0
    },
    orange: {
        kMwMTN: "ui-1tjp6kz",
        $$css: !0
    },
    yellow: {
        kMwMTN: "ui-wvu860",
        $$css: !0
    },
    red: {
        kMwMTN: "ui-1shbiay",
        $$css: !0
    },
    brand: {
        kMwMTN: "ui-847u09",
        $$css: !0
    }
}, oRs = {
    default: {
        kWkggS: "ui-jbqb8w ui-qjnua1",
        $$css: !0
    },
    green: {
        kWkggS: "ui-jbqb8w ui-114h9k8",
        $$css: !0
    },
    cyan: {
        kWkggS: "ui-jbqb8w ui-1n539p5",
        $$css: !0
    },
    blue: {
        kWkggS: "ui-jbqb8w ui-8glhz7",
        $$css: !0
    },
    purple: {
        kWkggS: "ui-jbqb8w ui-1ir8tl1",
        $$css: !0
    },
    magenta: {
        kWkggS: "ui-jbqb8w ui-1i9qtiz",
        $$css: !0
    },
    orange: {
        kWkggS: "ui-jbqb8w ui-1yo4qme",
        $$css: !0
    },
    yellow: {
        kWkggS: "ui-jbqb8w ui-1s7e4bb",
        $$css: !0
    },
    red: {
        kWkggS: "ui-jbqb8w ui-1edmyzl",
        $$css: !0
    },
    brand: {
        kWkggS: "ui-jbqb8w ui-1uq3evk",
        $$css: !0
    }
}, $Vl = {
    default: {
        kWkggS: "ui-i07v4r ui-1sjiwpj",
        $$css: !0
    }
}, HVl = {
    default: {
        kWkggS: "ui-jbqb8w ui-1sjiwpj",
        $$css: !0
    }
}, aRs = {
    default: {
        kWkggS: "ui-flfp0o ui-qjnua1",
        $$css: !0
    },
    green: {
        kWkggS: "ui-1buh4up ui-114h9k8",
        $$css: !0
    },
    cyan: {
        kWkggS: "ui-118nwij ui-1n539p5",
        $$css: !0
    },
    blue: {
        kWkggS: "ui-162gavy ui-8glhz7",
        $$css: !0
    },
    purple: {
        kWkggS: "ui-f7e430 ui-1ir8tl1",
        $$css: !0
    },
    magenta: {
        kWkggS: "ui-1u8ew47 ui-1i9qtiz",
        $$css: !0
    },
    orange: {
        kWkggS: "ui-16tgz1k ui-1yo4qme",
        $$css: !0
    },
    yellow: {
        kWkggS: "ui-1xvwvse ui-1s7e4bb",
        $$css: !0
    },
    red: {
        kWkggS: "ui-1xnwcy6 ui-1edmyzl",
        $$css: !0
    },
    brand: {
        kWkggS: "ui-19ekdza ui-1uq3evk",
        $$css: !0
    }
}, cRs = nRf(function(t, n) {
    const i = T_t(25);
    let r, s, o, a, c, l, u;
    i[0] !== t ? ({ value: u, triggerSize: o, triggerVariant: a, placeholder: c, "aria-label": r, disabled: s, ...l } = t, i[0] = t, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = c, i[6] = l, i[7] = u) : (r = i[1], s = i[2], o = i[3], a = i[4], c = i[5], l = i[6], u = i[7]);
    const h = o === void 0 ? "default" : o, p = a === void 0 ? "default" : a, g = c === void 0 ? !1 : c, f = h === "large" || h === "xlarge", v = p === "bare";
    let b;
    i[8] !== v || i[9] !== f || i[10] !== g || i[11] !== h || i[12] !== u ? (b = Nn(t6e.trigger, !v && h === "large" && t6e.triggerLarge, !v && h === "xlarge" && t6e.triggerXlarge, v ? t6e.triggerBare : f ? u.colorId === "default" ? HVl.default : oRs[u.colorId] : u.colorId === "default" ? $Vl.default : aRs[u.colorId], g && t6e.triggerPlaceholder), i[8] = v, i[9] = f, i[10] = g, i[11] = h, i[12] = u, i[13] = b) : b = i[13];
    const y = v ? "base" : h === "xlarge" ? 32 : f ? "2xl" : "lg";
    let T;
    i[14] !== g || i[15] !== y || i[16] !== u ? (T = NM(uTn, {
        value: u,
        placeholder: g,
        size: y
    }), i[14] = g, i[15] = y, i[16] = u, i[17] = T) : T = i[17];
    let E;
    return i[18] !== r || i[19] !== s || i[20] !== n || i[21] !== b || i[22] !== T || i[23] !== l ? (E = NM("button", {
        ref: n,
        type: "button",
        ...b,
        "aria-label": r,
        disabled: s,
        ...l,
        children: T
    }), i[18] = r, i[19] = s, i[20] = n, i[21] = b, i[22] = T, i[23] = l, i[24] = E) : E = i[24], E;
});

}
