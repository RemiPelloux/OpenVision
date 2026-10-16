import { XAt } from "./agent-conversation-tabs.js";
import { Yle } from "./agent-migration-targets.js";
import { JMe } from "./agent-temp-repo-display.js";
import { Ry } from "./agentRepositoryService.js";
import { wl } from "./agentRepositoryServiceTypes.js";
import { XrT } from "./allowed-machines-segment.react.js";
import { rp } from "./bcIdFromAuthority.js";
import { v1c } from "./composer-instance-display.js";
import { sC_ } from "./context-utilization-ring.react.js";
import { wS } from "./displayHelpers.js";
import { Xle } from "./environment-utils.js";
import { ysT } from "./glass-chat-status-bar-branch-segment.react.js";
import { jsT } from "./glass-chat-status-bar-environment-segment.react.js";
import { VsT } from "./glass-chat-status-bar-project-branch.js";
import { GsT } from "./glass-chat-status-bar-usage-metric.react.js";
import { QsT } from "./glass-chat-status-bar-workspace-metadata.react.js";
import { $G } from "./glass-diff-service.js";
import { FA } from "./glass-side-chat-utils.js";
import { xd } from "./glass-workspace-context-service.js";
import { Mt } from "./index_197.js";
import { Nx } from "./ipa.js";
import { ub } from "./localAgentRepository.js";
import { of } from "./modelConfigServiceTypes.js";
import { Ul } from "./path_2.js";
import { WT } from "./project-selector-utils.js";
import { PJt } from "./remoteAgentHostGate.js";
import { VX } from "./resolved-project-source.js";
import { E } from "./tslib.es6.js";
import { kF } from "./use-agent-workspace.react.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { fee } from "./use-glass-application-property.react.js";
import { IG } from "./use-header-tracked-git-derived.react.js";
import { G6 } from "./use-project-agents.react.js";
import { $h } from "./use-reactive.react_2.js";
import { In } from "./use-service.react_2.js";
import { Af } from "./use-solid-selector.react_2.js";
import { AYt } from "./use-user-home-path.react.js";
import { HP } from "./use-workspace.react_2.js";
import { cm } from "./workspace-helpers.js";
import { Cu } from "./workspaceCollectionService.js";
import { Lh } from "./workspaceMetadataService.js";
var Ikc, rT_, sT_, i9s;
export { Ikc, i9s, rT_, sT_ };
var __wakaru_doT_initialized = false;
export function doT() {
if (__wakaru_doT_initialized) return;
__wakaru_doT_initialized = true;
"use strict";
E(), Mt(), rp(), Nx(), Ul(), ub(), xd(), PJt(), wl(), Ry(), wS(), of(), HP(), Cu(), Lh(), kF(), Ru(), fee(), IG(), $h(), In(), Af(), AYt(), $G(), XAt(), Yle(), JMe(), v1c(), FA(), G6(), VX(), cm(), sC_(), Xle(), XrT(), ysT(), jsT(), GsT(), VsT(), QsT(), WT(), Ikc = {
    kind: "hidden"
}, rT_ = {
    kind: "standard"
}, sT_ = {
    kind: "readonly",
    icon: "cloud",
    label: "Cloud"
}, i9s = {
    root: {
        kVAEAm: "glass-1n2onr6",
        kY2c9j: "glass-1vjfegm",
        k1xSpc: "glass-rvj5dj",
        kumcoG: "glass-ju1xpo",
        kGNEyG: "glass-6s0dn4",
        k1C7PZ: "glass-vptqrk",
        kLKAdn: "glass-13ly8rp",
        kpe85a: "glass-g31tg3",
        kGO01o: "glass-b6dno7",
        kE3dHu: "glass-43mhey",
        kMzoRj: "glass-mkeg23",
        ksu8eU: "glass-1y0btm7",
        kVAM5u: "glass-9r1u3d",
        kzqmXN: "glass-h8yej3",
        kAzted: "glass-10fesj9",
        kGuDYH: "glass-1wm8ruf",
        kLWn49: "glass-1ja60sm",
        kMwMTN: "glass-4b2ntj",
        kfSwDN: "glass-87ps6o",
        $$css: !0
    },
    left: {
        k1xSpc: "glass-78zum5",
        k7Eaqz: "glass-euugli",
        ks0D6T: "glass-193iq5w",
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-dl72j9",
        kGNEyG: "glass-6s0dn4",
        kOIVth: "glass-11twubx",
        kVQacm: "glass-b3r6kr",
        $$css: !0
    },
    spacer: {
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-dl72j9",
        $$css: !0
    },
    right: {
        k1xSpc: "glass-3nfvp2",
        kGNEyG: "glass-6s0dn4",
        kOIVth: "glass-11twubx",
        kFhvOy: "glass-1qab1bc",
        k7Eaqz: "glass-euugli",
        kbsrmU: "glass-jl7jj",
        $$css: !0
    },
    segment: {
        k1xSpc: "glass-3nfvp2",
        kGNEyG: "glass-6s0dn4",
        kOIVth: "glass-11twubx",
        k7Eaqz: "glass-euugli",
        kzQI83: "glass-1c4vz4f",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-dl72j9",
        ks0D6T: "glass-1efhcrh",
        kZKoxP: "glass-1qx5ct2",
        kLKAdn: "glass-exx8yu",
        kpe85a: "glass-g31tg3",
        kGO01o: "glass-18d9i69",
        kE3dHu: "glass-43mhey",
        kaIpWk: "glass-1e1y6u3",
        kWkggS: "glass-jbqb8w",
        kVVagm: "glass-ln7xf2",
        kLWn49: "glass-1ja60sm",
        $$css: !0
    },
    segmentStatic: {
        kzQI83: "glass-gyuaek",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-1r8uery",
        ks0D6T: "glass-1t8xbu",
        $$css: !0
    },
    segmentEnv: {
        kzQI83: "glass-1c4vz4f",
        kmuXW: "glass-2lah0s",
        kCS8Yb: "glass-dl72j9",
        ks0D6T: "glass-1f9l0c1",
        kpe85a: "glass-g31tg3",
        $$css: !0
    },
    metricContext: {
        k1xSpc: "glass-3nfvp2",
        kGNEyG: "glass-6s0dn4",
        kjj79g: "glass-l56j7k",
        kzqmXN: "glass-6anfts",
        kZKoxP: "glass-1qx5ct2",
        k7Eaqz: "glass-1ecxwyt",
        ks0D6T: "glass-fc4nak",
        kmVPX3: "glass-1717udv",
        kmuXW: "glass-2lah0s",
        $$css: !0
    },
    segmentLabel: {
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-dl72j9",
        k7Eaqz: "glass-euugli",
        kVQacm: "glass-b3r6kr",
        kg5iWk: "glass-lyipyv",
        khDVqt: "glass-uxw1ft",
        k9WMMc: "glass-dpxx8g",
        kLWn49: "glass-1ja60sm",
        $$css: !0
    },
    trailingIcon: {
        kmuXW: "glass-2lah0s",
        km5ZXQ: "glass-16gtfvg",
        $$css: !0
    },
    metric: {
        k1xSpc: "glass-3nfvp2",
        kGNEyG: "glass-6s0dn4",
        kOIVth: "glass-11twubx",
        kLKAdn: "glass-493x5y",
        kpe85a: "glass-g31tg3",
        kGO01o: "glass-b6dno7",
        kE3dHu: "glass-43mhey",
        $$css: !0
    },
    ring: {
        k1xSpc: "glass-3nfvp2",
        kmuXW: "glass-2lah0s",
        $$css: !0
    },
    button: {
        kzQI83: "glass-1c4vz4f",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-dl72j9",
        k7Eaqz: "glass-euugli",
        ks0D6T: "glass-1efhcrh",
        kOIVth: "glass-11twubx",
        $$css: !0
    },
    contextButton: {
        kzQI83: "glass-1c4vz4f",
        kmuXW: "glass-2lah0s",
        kCS8Yb: "glass-dl72j9",
        kzqmXN: "glass-1f0ij18",
        kZKoxP: "glass-rar8zy",
        k7Eaqz: "glass-12jfd30",
        ks0D6T: "glass-2z2n16",
        kLKAdn: "glass-exx8yu",
        kwRFfy: "glass-yri2b",
        kGO01o: "glass-18d9i69",
        kZCmMZ: "glass-1c1uobl",
        kOIVth: "glass-xhr3t",
        kjj79g: "glass-l56j7k",
        $$css: !0
    },
    compactHidden: {
        k1xSpc: "glass-1s85apg",
        $$css: !0
    }
};

}
