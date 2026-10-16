import { K1n } from "./CommandChipPlugin.js";
import { lGe } from "./MentionChipPlugin.js";
import { IIa } from "./PromptInputAttachmentGrid.js";
import { va1 } from "./PromptInputCompactVisible.js";
import { zrt } from "./PromptInputContext.js";
import { f_p } from "./PromptInputEditor.js";
import { lxa } from "./PromptInputHeaderTray.js";
import { N_p } from "./PromptInputImageGrid.js";
import { L_p, pxa } from "./PromptInputModelPicker.js";
import { gxa } from "./PromptInputSubmitButton.js";
import { q_p } from "./PromptInputToolbar.js";
import { qu } from "./attach.js";
import { tkt } from "./drag-transfer.js";
import { cBr } from "./file-tree-drag-data.js";
import { wfp } from "./getSubmitDataFromEditor.js";
import { pfp } from "./hydratePromptInputContent.js";
import { $_p, G_p, H_p, Pfp, R_p, TGe, W_p, axa, bu1, fa1, u_p } from "./ipa.js";
import { Zci } from "./kbd.js";
import { z_p } from "./prompt-input-editor-text.js";
import { Rop } from "./prompt-input-interactive-click.js";
import { cu1 } from "./seedPromptInputContent.js";
import { Va } from "./stylex.js";
import { ywn } from "./tab-system.types.js";
import { E } from "./tslib.es6.js";
import { Kc1 } from "./use-dynamic-island-controller.js";
import { Z_p } from "./use-prompt-input-suggestion-menu-state.js";
import { nu1 } from "./use-prompt-input-suggestion-slots.js";
import { au1 } from "./use-prompt-input-tray-controller.js";
import { forwardRef as pu1 } from "./react-runtime/react/esm-index-production.js";
var ibp, wwt, r$, Xrt, Sxa, rbp, sbp, hT;
export { Sxa, Xrt, hT, ibp, r$, rbp, sbp, wwt };
var __wakaru_ku1_initialized = false;
export function ku1() {
if (__wakaru_ku1_initialized) return;
__wakaru_ku1_initialized = true;
"use strict";
E(), Va(), tkt(), cBr(), ywn(), IIa(), va1(), zrt(), f_p(), lxa(), N_p(), L_p(), gxa(), q_p(), z_p(), Rop(), Kc1(), Z_p(), nu1(), au1(), wfp(), pfp(), cu1(), Zci(), lGe(), K1n(), qu(), ibp = {}, wwt = {
    base: {
        "--markdown-foreground": "ui-ue2tf0",
        "--prompt-input-section-gap": "ui-w32inn",
        "--prompt-input-container-bg": "ui-p63tlz",
        "--prompt-input-container-bg-hover": "ui-1d4pdke",
        "--prompt-input-container-border": "ui-1ep5w7e",
        "--prompt-input-container-border-hover": "ui-n5xyfv",
        "--prompt-input-border-radius-expanded": "ui-1oy4zpl",
        "--prompt-input-border-radius-compact": "ui-rkrb78",
        "--prompt-input-container-shadow": "ui-1izfvxi",
        "--prompt-input-toolbar-padding": "ui-13efe4w",
        "--prompt-input-editor-padding": "ui-1775acc",
        "--prompt-input-editor-min-height": "ui-ruz6ki",
        "--prompt-input-editor-max-height": "ui-j7tqr1",
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kOIVth: "ui-1lj7dz9",
        kzqmXN: "ui-h8yej3",
        k7Eaqz: "ui-gqtt45",
        kmuXW: "ui-2lah0s",
        $$css: !0
    },
    embedded: {
        "--prompt-input-border-radius-expanded": "ui-638w13",
        kOIVth: "ui-xhr3t",
        kzQI83: "ui-1iyjqo2",
        kmuXW: "ui-s83m0k",
        kCS8Yb: "ui-1t1x2f9",
        k7Eaqz: "ui-euugli",
        kAzted: "ui-10fesj9",
        kskxy: "ui-1tfawu9",
        $$css: !0
    },
    dynamicIsland: {
        "--prompt-input-border-radius-dynamic-island": "ui-1a0fl31",
        "--prompt-input-dynamic-island-rest-width": "ui-it8133",
        "--prompt-input-dynamic-island-pill-width": "ui-1j7tfyt",
        "--prompt-input-dynamic-island-rest-height": "ui-1gly5vx",
        "--prompt-input-dynamic-island-hit-height": "ui-sgbfbu",
        "--prompt-input-dynamic-island-active-height": "ui-1afkngp",
        "--prompt-input-dynamic-island-label-fade-width": "ui-e2d1d8",
        kSGwAc: "ui-amitd3",
        kjj79g: "ui-13a6bvl",
        kzqmXN: "ui-1shhhdt ui-r6sg82",
        k7Eaqz: "ui-euugli",
        kAzted: "ui-14z87hp ui-w594n5",
        ks0D6T: "ui-193iq5w",
        kDIVij: "ui-ftp66k",
        kUOVxO: "ui-vueqy4",
        k1ekBW: "ui-bn762d",
        kIyJzY: "ui-g3p6pi",
        kAMwcw: "ui-1ys8gui",
        $$css: !0
    },
    dynamicIslandLabelVisible: {
        kzqmXN: "ui-y2lxck",
        k7Eaqz: "ui-k8lq53",
        kAzted: "ui-14fjzyi",
        $$css: !0
    },
    dynamicIslandActive: {
        kzqmXN: "ui-h8yej3",
        k7Eaqz: "ui-euugli",
        $$css: !0
    },
    dynamicIslandExpandedActive: {
        k1ekBW: "ui-xrbq2n",
        kIyJzY: "ui-g3p6pi",
        kAMwcw: "ui-1ys8gui",
        $$css: !0
    },
    dynamicIslandTransitionSuppressed: {
        k1ekBW: "ui-13b0p5u",
        $$css: !0
    }
}, r$ = {
    base: {
        kVAEAm: "ui-1n2onr6",
        kWkggS: "ui-wm8u29",
        kEafiO: "ui-178xt8z",
        kWqL5O: "ui-s1s249",
        kt9PQ7: "ui-so031l",
        kZ1KPB: "ui-e0pwq",
        kPef9Z: "ui-13fuv20",
        kSWEuD: "ui-32b0ac",
        kfdmCh: "ui-1q0q8m5",
        k4WBpm: "ui-19ypqd9",
        kLZC3w: "ui-fyh3xl ui-op7wos",
        k26BEO: "ui-w6fb82 ui-1l393ju",
        kL6WhQ: "ui-3exo43 ui-10mzgjn",
        kaZRDh: "ui-vt98yj ui-ea5ze0",
        kkrTdU: "ui-1ed109x",
        kVQacm: "ui-b3r6kr",
        kB7OPa: "ui-9f619",
        kzqmXN: "ui-h8yej3",
        ks0D6T: "ui-193iq5w",
        k7Eaqz: "ui-euugli",
        kGVxlE: "ui-1how0r7",
        $$css: !0
    },
    transparentChrome: {
        kWkggS: "ui-jbqb8w",
        kLZC3w: "ui-1v8p93f ui-1mys3cw",
        k26BEO: "ui-he5wa1 ui-3juqzo",
        kL6WhQ: "ui-16stqrj ui-1hhos8t",
        kaZRDh: "ui-1g4hjc ui-p0bt7o",
        kGVxlE: "ui-1gnnqk1",
        $$css: !0
    },
    focusHighlight: {
        kLZC3w: "ui-fyh3xl ui-op7wos ui-jemdmh",
        k26BEO: "ui-w6fb82 ui-1l393ju ui-1td2xlr",
        kL6WhQ: "ui-3exo43 ui-10mzgjn ui-fily6l",
        kaZRDh: "ui-vt98yj ui-ea5ze0 ui-6mlxkw",
        $$css: !0
    },
    orangeBorder: {
        kLZC3w: "ui-1uaialz ui-1js6f8r ui-1qcc5xp",
        k26BEO: "ui-128tvsh ui-1x65ese ui-1peez9d",
        kL6WhQ: "ui-1lhkms3 ui-6k5260 ui-fj1j8w",
        kaZRDh: "ui-1hx69yn ui-17i3vra ui-l3u981",
        $$css: !0
    },
    expanded: {
        kIxVMA: "ui-qdh72l",
        ksF3WI: "ui-vewssm",
        kYm2EN: "ui-1w7xdj3",
        kqGeR4: "ui-5dlqig",
        $$css: !0
    },
    embedded: {
        k1xSpc: "ui-1lliihq",
        k7Eaqz: "ui-euugli",
        kAzted: "ui-10fesj9",
        kskxy: "ui-1tfawu9",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-1xpa7k",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-1uhho1l",
        kVQacm: "ui-1rea2x4",
        kEafiO: "ui-972fbf",
        kWqL5O: "ui-gfja2r",
        kt9PQ7: "ui-1qhh985",
        kZ1KPB: "ui-yj58a3",
        kPef9Z: "ui-1ejq31n",
        kSWEuD: "ui-11pwa6s",
        kfdmCh: "ui-1sy0etr",
        k4WBpm: "ui-1b16gh4",
        kLZC3w: "ui-1b4hy2t ui-1gm1e0h",
        k26BEO: "ui-1ws9gjp ui-1ss7x9p",
        kL6WhQ: "ui-1tnzt7h ui-135nk2q",
        kaZRDh: "ui-1pjslub ui-nhspq7",
        kIxVMA: "ui-1njmyyh",
        ksF3WI: "ui-y7i79c",
        kYm2EN: "ui-1talola",
        kqGeR4: "ui-famn59",
        $$css: !0
    },
    compact: {
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kOIVth: "ui-11twubx",
        kLKAdn: "ui-13ly8rp",
        kpe85a: "ui-1yxiud8",
        kGO01o: "ui-1xlntvz",
        kE3dHu: "ui-yab65l",
        kIxVMA: "ui-b5hv6d",
        ksF3WI: "ui-z1mrtf",
        kYm2EN: "ui-198lvz2",
        kqGeR4: "ui-1jb38bc",
        kVQacm: "ui-1rea2x4",
        kY2c9j: "ui-oegz02",
        $$css: !0
    },
    compactExpanded: {
        k1xSpc: "ui-1lliihq",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-1xpa7k",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-1uhho1l",
        kIxVMA: "ui-qdh72l",
        ksF3WI: "ui-vewssm",
        kYm2EN: "ui-1w7xdj3",
        kqGeR4: "ui-5dlqig",
        $$css: !0
    },
    dynamicIsland: {
        kDIVij: "ui-ftp66k",
        kZKoxP: "ui-38135u",
        kAzted: "ui-1i04xt",
        k7Eaqz: "ui-euugli",
        kjj79g: "ui-1nhvcw1",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-1xpa7k",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-1uhho1l",
        kLZC3w: "ui-fyh3xl ui-op7wos",
        k26BEO: "ui-w6fb82 ui-1l393ju",
        kL6WhQ: "ui-3exo43 ui-10mzgjn",
        kaZRDh: "ui-vt98yj ui-ea5ze0",
        kWkggS: "ui-wm8u29 ui-wst5qu",
        kGVxlE: "ui-1how0r7",
        kSiTet: "ui-1j4f4md",
        kVQacm: "ui-b3r6kr",
        k1ekBW: "ui-vhg9qy",
        kIyJzY: "ui-g3p6pi",
        kAMwcw: "ui-1ys8gui",
        $$css: !0
    },
    dynamicIslandInactive: {
        kIxVMA: "ui-2wfhdb",
        ksF3WI: "ui-yle3pa",
        kYm2EN: "ui-w078i4",
        kqGeR4: "ui-sezp6u",
        kkrTdU: "ui-1ypdohk",
        k1ekBW: "ui-113kfmm",
        kIyJzY: "ui-g3p6pi",
        kAMwcw: "ui-1ys8gui",
        $$css: !0
    },
    dynamicIslandInactiveRest: {
        kZKoxP: "ui-38135u ui-zayigi",
        kAzted: "ui-1i04xt ui-y3via4",
        kWkggS: "ui-3dhcaw ui-r09n7f",
        k6WDB: "ui-11ep3vo ui-1jzljt9",
        kSiTet: "ui-1j4f4md ui-j3ot50",
        $$css: !0
    },
    dynamicIslandInactiveLabelVisible: {
        kZKoxP: "ui-13gowb0",
        kAzted: "ui-14fjzyi",
        kWkggS: "ui-wm8u29 ui-wst5qu",
        k6WDB: "ui-1t853zo",
        kSiTet: "ui-1hc1fzr",
        $$css: !0
    },
    dynamicIslandActive: {
        kSiTet: "ui-1hc1fzr",
        $$css: !0
    },
    dynamicIslandActiveCollapsed: {
        kZKoxP: "ui-t7dq6l",
        kAzted: "ui-2lwn1j",
        kjj79g: "ui-12j93s6",
        kLKAdn: "ui-13ly8rp",
        kpe85a: "ui-1yxiud8",
        kGO01o: "ui-1xlntvz",
        kE3dHu: "ui-yab65l",
        kVQacm: "ui-1rea2x4",
        $$css: !0
    },
    dynamicIslandActiveExpanded: {
        k1xSpc: "ui-1lliihq",
        kZKoxP: "ui-t7dq6l",
        kAzted: "ui-2lwn1j",
        kjj79g: "ui-12j93s6",
        kVQacm: "ui-b3r6kr",
        $$css: !0
    },
    dynamicIslandTransitionSuppressed: {
        k1ekBW: "ui-13b0p5u",
        $$css: !0
    },
    dynamicIslandTransitioning: {
        kI26Ta: "ui-5ah9g8",
        $$css: !0
    },
    dynamicIslandExpandedInactive: {
        k1xSpc: "ui-78zum5",
        kIxVMA: "ui-2wfhdb",
        ksF3WI: "ui-yle3pa",
        kYm2EN: "ui-w078i4",
        kqGeR4: "ui-sezp6u",
        kVQacm: "ui-b3r6kr",
        $$css: !0
    },
    dynamicIslandCollapsing: {
        k1ekBW: "ui-vhg9qy",
        kIyJzY: "ui-g3p6pi",
        kAMwcw: "ui-1ys8gui",
        $$css: !0
    },
    dragging: {
        kGVxlE: "ui-bbpvxg",
        kkrTdU: "ui-t0e3qv",
        kbxDJI: "ui-ov3vfv",
        kI26Ta: "ui-5ah9g8",
        $$css: !0
    },
    dynamicIslandReducedMotion: {
        kXHXEI: "ui-4wkmsb",
        $$css: !0
    }
}, Xrt = {
    root: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-1qughib",
        kOIVth: "ui-ehausa",
        kzQI83: "ui-1c4vz4f",
        kmuXW: "ui-2lah0s",
        kCS8Yb: "ui-dl72j9",
        ks0D6T: "ui-193iq5w",
        kZKoxP: "ui-1aji5qw",
        kg3NbH: "ui-1m31zm8",
        kMwMTN: "ui-19aaqeu",
        kGuDYH: "ui-fc7y3v",
        kLWn49: "ui-1yxxptd",
        khDVqt: "ui-uxw1ft",
        kHjlTd: "ui-1h4wwuj",
        kTgw9: "ui-1lldw8n",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kg5iWk: "ui-brixnn",
        kAExgp: "ui-hyggmg",
        kX1K2I: "ui-1teblag",
        kfzvcC: "ui-47corl",
        k1ekBW: "ui-19991ni",
        kIyJzY: "ui-g3p6pi",
        kAMwcw: "ui-1ys8gui",
        kXHXEI: "ui-4wkmsb",
        $$css: !0
    },
    hoverReveal: {
        kSiTet: "ui-g01cxk ui-j3ot50",
        $$css: !0
    },
    alwaysVisible: {
        kSiTet: "ui-1hc1fzr",
        $$css: !0
    },
    active: {
        k1xSpc: "ui-1s85apg",
        $$css: !0
    },
    hasKeybinding: {
        kAExgp: "ui-1h3tbrq",
        kX1K2I: "ui-w4ya9i",
        $$css: !0
    },
    fullWidth: {
        kzQI83: "ui-1iyjqo2",
        kmuXW: "ui-s83m0k",
        kCS8Yb: "ui-dl72j9",
        kzqmXN: "ui-h8yej3",
        $$css: !0
    },
    main: {
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kzQI83: "ui-1iyjqo2",
        kmuXW: "ui-s83m0k",
        kCS8Yb: "ui-dl72j9",
        k7Eaqz: "ui-euugli",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kg5iWk: "ui-brixnn",
        $$css: !0
    },
    keybinding: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kzQI83: "ui-1c4vz4f",
        kmuXW: "ui-2lah0s",
        kCS8Yb: "ui-dl72j9",
        $$css: !0
    }
}, Sxa = {
    root: {
        kVAEAm: "ui-10l6tqk",
        kbCHJM: "ui-u96u03",
        krVfgx: "ui-1ey2m1c",
        kzqmXN: "ui-akrjlu",
        kZKoxP: "ui-jyxbwm",
        kfzvcC: "ui-47corl",
        $$css: !0
    },
    up: {
        krVfgx: "ui-dd4er5",
        k87sOh: "ui-8hg36d",
        $$css: !0
    }
}, rbp = 'button, input, select, textarea, a, [role="button"], [role="menuitem"]', sbp = {
    obscuredHeader: {
        k33iCy: "ui-lshs6z",
        kfzvcC: "ui-47corl",
        $$css: !0
    }
}, hT = Object.assign(pu1(bu1), {
    Editor: u_p,
    CompactVisible: fa1,
    Toolbar: Object.assign(H_p, {
        Left: W_p,
        Right: G_p
    }),
    ImageGrid: R_p,
    AttachmentGrid: Pfp,
    SubmitButton: $_p,
    ModelPicker: pxa,
    HeaderTray: axa,
    useContext: ()=>TGe("PromptInput.useContext")
});

}
