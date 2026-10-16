import { wl } from "./agentRepositoryServiceTypes.js";
import { jm } from "./command-ids.js";
import { $Oi } from "./cursorOriginLinks.js";
import { mv } from "./editor-panel-context.react.js";
import { xnc } from "./editor-preferences-menu-items.react.js";
import { H30 } from "./extension-notification-indicator.react.js";
import { Dnc } from "./file-tab-agent-store-breadcrumbs.js";
import { Z30 } from "./file-tab-header-breadcrumbs.react.js";
import { eN0 } from "./file-tab-header-mode-switcher.react.js";
import { rN0 } from "./file-tab-skill-publish-menu.react.js";
import { eDv } from "./file-tree-panel.react.js";
import { iKe } from "./fileConstants.js";
import { yp } from "./glass-command-service.js";
import { gMv } from "./glass-file-tree-context-handlers.js";
import { SYe } from "./glass-file-tree-context-menu.js";
import { oMv } from "./glass-file-tree-open-in-browser.js";
import { HA } from "./glass-menu-dimensions.js";
import { zc } from "./glass-notification-service.js";
import { VXt } from "./glass-reveal-file-in-os.js";
import { BS } from "./glass-toast.js";
import { Hv } from "./glassActiveAgentService.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { hk } from "./use-keybinding-label.react.js";
import { In } from "./use-service.react_2.js";
var ndt, nDv, iDv, $nc, rDv, sDv, oDv, aDv;
export { $nc, aDv, iDv, nDv, ndt, oDv, rDv, sDv };
var __wakaru_WN0_initialized = false;
export function WN0() {
if (__wakaru_WN0_initialized) return;
__wakaru_WN0_initialized = true;
"use strict";
E(), Mt(), fn(), $Oi(), iKe(), wl(), Hv(), HA(), jm(), hk(), In(), yp(), gMv(), SYe(), oMv(), VXt(), zc(), BS(), mv(), xnc(), H30(), Dnc(), Z30(), eN0(), rN0(), eDv(), ndt = {
    treePopupSurface: {
        kB7OPa: "glass-9f619",
        k1xSpc: "glass-78zum5",
        kXwgrk: "glass-dt5ytf",
        kzqmXN: "glass-ezivpi",
        k7Eaqz: "glass-12rczxh",
        ks0D6T: "glass-1lr1uin",
        kZKoxP: "glass-1qnm7lz",
        kskxy: "glass-d6w4je",
        kAzted: "glass-2lwn1j",
        kLKAdn: "glass-exx8yu",
        kwRFfy: "glass-yri2b",
        kGO01o: "glass-18d9i69",
        kZCmMZ: "glass-1c1uobl",
        kXHlph: "glass-6ikm8r",
        kORKVm: "glass-10wlt62",
        kWkggS: "glass-1ua6jya",
        "--file-tab-workspace-header-actions-opacity": "glass-7kn1wf",
        "--file-tab-workspace-header-actions-pointer-events": "glass-1iy912z",
        $$css: !0
    },
    treePopupFileTreeRoot: {
        k1xSpc: "glass-78zum5",
        kXwgrk: "glass-dt5ytf",
        kzqmXN: "glass-h8yej3",
        k7Eaqz: "glass-euugli",
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-1t1x2f9",
        kAzted: "glass-2lwn1j",
        $$css: !0
    },
    treePopupFileTreeScroll: {
        kzqmXN: "glass-h8yej3",
        $$css: !0
    },
    treePopupFileTreeSpacer: {
        kLKAdn: "glass-f6zju3",
        kpe85a: "glass-g31tg3",
        kGO01o: "glass-cnij5n",
        kE3dHu: "glass-43mhey",
        $$css: !0
    },
    treePopupFileTreeSticky: {
        kbCHJM: "glass-6qt6f",
        kCIrl2: "glass-7zl9wm",
        $$css: !0
    },
    treePopupFileTreeEmpty: {
        kMwMTN: "glass-4b2ntj",
        $$css: !0
    },
    treePopupFileTreeLoading: {
        kWkggS: "glass-jbqb8w",
        kMwMTN: "glass-4b2ntj",
        $$css: !0
    }
}, nDv = {
    root: ndt.treePopupFileTreeRoot,
    scrollViewport: ndt.treePopupFileTreeScroll,
    scrollContent: ndt.treePopupFileTreeScroll,
    spacerContainer: ndt.treePopupFileTreeSpacer,
    stickyContainer: ndt.treePopupFileTreeSticky,
    empty: ndt.treePopupFileTreeEmpty,
    loading: ndt.treePopupFileTreeLoading
}, iDv = 75, $nc = 100, rDv = [
    {
        value: "rich",
        label: "Preview",
        ariaLabel: "Preview"
    },
    {
        value: "raw",
        label: "Source",
        ariaLabel: "Source"
    }
], sDv = [
    {
        value: "preview",
        label: "Preview",
        ariaLabel: "SVG preview"
    },
    {
        value: "source",
        label: "Source",
        ariaLabel: "SVG source"
    }
], oDv = [
    {
        value: "table",
        label: "Table",
        ariaLabel: "Table"
    },
    {
        value: "raw",
        label: "Source",
        ariaLabel: "CSV source"
    }
], aDv = [
    {
        value: "preview",
        label: "Preview",
        ariaLabel: "LaTeX preview"
    },
    {
        value: "source",
        label: "Source",
        ariaLabel: "LaTeX source"
    }
];

}
