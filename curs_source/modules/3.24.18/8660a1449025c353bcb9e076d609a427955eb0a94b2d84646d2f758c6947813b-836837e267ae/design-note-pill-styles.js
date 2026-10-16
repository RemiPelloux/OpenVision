import { vAs } from "./browser-design-mode-comment-input-editor.js";
import { qh0 } from "./ofv.js";
import { E } from "./tslib.es6.js";
var OKl, wvv, Zye, W$, xQt, _As, FKl, Cvv, Tvv, Evv;
export { Cvv, Evv, FKl, OKl, Tvv, W$, Zye, _As, wvv, xQt };
var __wakaru_Rut_initialized = false;
export function Rut() {
if (__wakaru_Rut_initialized) return;
__wakaru_Rut_initialized = true;
"use strict";
E(), vAs(), OKl = 320, wvv = 40, Zye = {
    frame: {
        "--design-input-width": "glass-1pg20lc",
        "--design-chip-max-width": "glass-1ktdisc",
        kzqmXN: "glass-aady7t",
        $$css: !0
    },
    dockedAway: {
        k33iCy: "glass-lshs6z",
        kfzvcC: "glass-47corl",
        $$css: !0
    },
    promptInputRoot: {
        "--prompt-input-container-bg": "glass-1ofxpvv",
        "--prompt-input-container-border": "glass-1iiexf6",
        "--prompt-input-container-shadow": "glass-plfsg",
        "--prompt-input-border-radius-expanded": "glass-78cl6h",
        "--prompt-input-editor-min-height": "glass-18ob208",
        $$css: !0
    },
    promptInputRootWithTray: {
        "--prompt-input-container-shadow": "glass-1a0hvpt",
        $$css: !0
    },
    traySurface: {
        kWkggS: "glass-1akx2oj",
        k6WDB: "glass-1ilxrc6",
        kGVxlE: "glass-1c0glc",
        $$css: !0
    },
    promptInputContainer: {
        k6WDB: "glass-1ilxrc6",
        kLKAdn: "glass-exx8yu glass-18z14h9",
        kpe85a: "glass-1xpa7k glass-q0fwpk",
        kGO01o: "glass-18d9i69 glass-1sixqe4",
        kE3dHu: "glass-1uhho1l glass-2shyay",
        $$css: !0
    },
    promptInputEditor: {
        "--cursor-font-size-lg": "glass-k5oqu0",
        "--cursor-line-height-lg": "glass-12aok23",
        $$css: !0
    },
    promptInputToolbarLeft: {
        keoZOQ: "glass-hsvlbd",
        koQZXg: "glass-7cu23a",
        $$css: !0
    },
    promptInputToolbarRight: {
        keoZOQ: "glass-hsvlbd",
        km5ZXQ: "glass-1f1oiij",
        $$css: !0
    },
    noteActionButton: {
        "--ui-button-fg": "glass-11apzoy",
        "--ui-button-fg-hover": "glass-111fdx3",
        "--ui-button-bg-hover": "glass-kks6b0",
        $$css: !0
    }
}, W$ = {
    surface: {
        "--ui-surface-hairline-width": "glass-ydv7qj",
        k1xSpc: "glass-78zum5",
        kXwgrk: "glass-dt5ytf",
        kAzted: "glass-2lwn1j",
        kVQacm: "glass-b3r6kr",
        kLKAdn: "glass-exx8yu",
        kwRFfy: "glass-yri2b",
        kGO01o: "glass-18d9i69",
        kZCmMZ: "glass-1c1uobl",
        kEafiO: "glass-178xt8z",
        kPef9Z: "glass-13fuv20",
        ke9TFa: "glass-1lun4ml",
        k8ry5P: "glass-18b5jzi",
        kt9PQ7: "glass-so031l",
        kfdmCh: "glass-1q0q8m5",
        k2ei4v: "glass-pilrb4",
        kVhnKS: "glass-1t7ytsu",
        kVAM5u: "glass-6ed52y",
        kaIpWk: "glass-1828qc5",
        kWkggS: "glass-1akx2oj",
        k6WDB: "glass-1ilxrc6",
        kGVxlE: "glass-nyo9qc",
        kkrTdU: "glass-t0e3qv",
        $$css: !0
    },
    bar: {
        k1xSpc: "glass-78zum5",
        kmuXW: "glass-2lah0s",
        kGNEyG: "glass-6s0dn4",
        kOIVth: "glass-167g77z",
        kB7OPa: "glass-9f619",
        kAzted: "glass-1ba4aug",
        k8WAf4: "glass-1vvogim",
        kZCmMZ: "glass-1g0dm76",
        kwRFfy: "glass-pdmqnj",
        $$css: !0
    },
    barEnd: {
        kwRFfy: "glass-f159sx",
        $$css: !0
    },
    actions: {
        k1xSpc: "glass-78zum5",
        kmuXW: "glass-2lah0s",
        kGNEyG: "glass-6s0dn4",
        kOIVth: "glass-167g77z",
        $$css: !0
    },
    divider: {
        kmuXW: "glass-2lah0s",
        kZKoxP: "glass-jm9jq1",
        kWkggS: "glass-iw1gut",
        $$css: !0
    },
    insetDivider: {
        kqGvvJ: "glass-1uuky47",
        kUOVxO: "glass-1tqfzy7",
        $$css: !0
    },
    rows: {
        k8WAf4: "glass-1t0vds8",
        $$css: !0
    },
    row: {
        k1xSpc: "glass-78zum5",
        kGNEyG: "glass-6s0dn4",
        kOIVth: "glass-167g77z",
        k7Eaqz: "glass-euugli",
        kZKoxP: "glass-1fgtraw",
        kUOVxO: "glass-18kdvx8",
        kg3NbH: "glass-1xijbu4",
        kaIpWk: "glass-1043rbw",
        kWkggS: "glass-jbqb8w glass-smrorx glass-1n4hjgg",
        $$css: !0
    },
    offscreenRow: {
        kCygrm: "glass-b5mbof",
        kpMQ02: "glass-8atqmo",
        $$css: !0
    }
}, xQt = {
    frame: {
        "--design-input-width": "glass-tous2m",
        "--design-chip-max-width": "glass-1ktdisc",
        kzqmXN: "glass-aady7t",
        $$css: !0
    },
    promptInputRoot: {
        "--prompt-input-container-bg": "glass-1ic6w4x",
        $$css: !0
    },
    promptInputContainerWithTray: {
        kGVxlE: "glass-1gnnqk1",
        $$css: !0
    },
    traySurface: {
        kWkggS: "glass-1va4qhv",
        kGVxlE: "glass-7kves",
        $$css: !0
    },
    promptInputContainer: {
        kGVxlE: "glass-7kves",
        kLKAdn: "glass-exx8yu glass-18z14h9",
        kpe85a: "glass-1xpa7k glass-q0fwpk",
        kGO01o: "glass-18d9i69 glass-1sixqe4",
        kE3dHu: "glass-1uhho1l glass-2shyay",
        $$css: !0
    }
}, _As = {
    root: Zye.promptInputRoot,
    container: Zye.promptInputContainer,
    editor: Zye.promptInputEditor,
    toolbarLeft: Zye.promptInputToolbarLeft,
    toolbarRight: Zye.promptInputToolbarRight
}, FKl = {
    root: xQt.promptInputRoot,
    container: xQt.promptInputContainer
}, Cvv = {
    ..._As,
    root: [
        Zye.promptInputRoot,
        Zye.promptInputRootWithTray
    ]
}, Tvv = {
    ...FKl,
    container: [
        xQt.promptInputContainer,
        xQt.promptInputContainerWithTray
    ]
}, Evv = {
    kind: "single-line-truncated",
    maxWidth: "var(--design-chip-max-width)",
    matches: qh0
};

}
