import { K1n } from "./CommandChipPlugin.js";
import { Aw, Fy, Ooe } from "./LYd.js";
import { yl1 } from "./LeadingContentExtension.js";
import { lGe } from "./MentionChipPlugin.js";
import { Tl1 } from "./MentionOnlyPlaceholderExtension.js";
import { pB } from "./PortalContext.js";
import { zrt } from "./PromptInputContext.js";
import { Al1 } from "./PromptInputKeymapExtension.js";
import { hc1 } from "./PromptInputUndoBoundaryExtension.js";
import { vfp } from "./PromptSelectionOverlayExtension.js";
import { Mvp } from "./PromptSuggestionExtension.js";
import { cc1 } from "./VoicePendingDecorationExtension.js";
import { qu } from "./attach.js";
import { mf } from "./cn.js";
import { Zl1 } from "./findPromptInputMentionSuggestionMatch.js";
import { E_e } from "./floating-surface.stylex.js";
import { wfp } from "./getSubmitDataFromEditor.js";
import { fd } from "./icon.js";
import { $kt } from "./index_171.js";
import { F1a } from "./index_173.js";
import { _a1 } from "./index_180.js";
import { fvp } from "./index_185.js";
import { gE } from "./index_23.js";
import { v_e } from "./index_41.js";
import { j1a } from "./insertPlainTextIntoEditor.js";
import { jkt, s_p } from "./ipa.js";
import { Jl1 } from "./isSelectionAtTextblockBoundary.js";
import { Mkt } from "./mention-chip-utils.js";
import { Hl1 } from "./prompt-input-session-extensions.js";
import { jXh } from "./prompt-link.stylex.js";
import { u4r } from "./prompt-list.stylex.js";
import { Jvp } from "./promptInputClipboardSerialize.js";
import { ql1 } from "./promptInputLinkExtension.js";
import { xep } from "./promptInputListExtensions.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
import { joe } from "./use-latest-ref.js";
import { Vl1 } from "./use-prompt-input-suggestion-dismiss-latch.js";
var rxa, h_p, f6e, p_p, sxa, m_p, g_p;
export { f6e, g_p, h_p, m_p, p_p, rxa, sxa };
var __wakaru_f_p_initialized = false;
export function f_p() {
if (__wakaru_f_p_initialized) return;
__wakaru_f_p_initialized = true;
"use strict";
E(), Va(), Fy(), _a1(), $kt(), gE(), v_e(), fvp(), F1a(), joe(), E_e(), jXh(), u4r(), mf(), Mkt(), zrt(), lGe(), yl1(), Tl1(), Al1(), vfp(), Mvp(), Hl1(), ql1(), xep(), Vl1(), Zl1(), wfp(), j1a(), Jl1(), s_p(), Jvp(), Aw(), Ooe(), pB(), cc1(), jkt(), hc1(), K1n(), qu(), fd(), rxa = "cursor-editor-history-command", h_p = {
    embedded: {
        kAzted: "ui-10fesj9",
        kskxy: "ui-1tfawu9",
        $$css: !0
    }
}, f6e = {
    root: {
        kVAEAm: "ui-1n2onr6",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-1xpa7k",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-1uhho1l",
        kB7OPa: "ui-9f619",
        k7Eaqz: "ui-euugli",
        kzqmXN: "ui-h8yej3",
        ks0D6T: "ui-193iq5w",
        k9e1zc: "ui-ndickg",
        knXrfa: "ui-fjs0sp",
        kb6yIs: "ui-jq9dof",
        k9erIu: "ui-frl5lq",
        kdVZav: "ui-10byrfq",
        k1js89: "ui-1ml8s7a",
        kTbBwR: "ui-1iaxgn4",
        ky68SK: "ui-v1pbuh",
        kofikP: "ui-1d8jrk4",
        kOTOOA: "ui-37ox2r",
        keSxZK: "ui-1lwtndy",
        k62ARc: "ui-1ji2bri",
        kOuTsm: "ui-15a48l9",
        kMynaT: "ui-chvic5",
        kjcf1k: "ui-7c5v7f",
        khQ1WT: "ui-1w28vfx",
        k6Hba0: "ui-1d9lunh",
        khCsSt: "ui-1nyzrfh",
        k6k92m: "ui-u5wyia",
        kZpafW: "ui-rq0ssz",
        k2A8f1: "ui-1mj5jlf",
        kcPFwz: "ui-g1iu15",
        k3lAcU: "ui-36xbte",
        kfyjHF: "ui-1i6rymb",
        kiAx3z: "ui-1tl88i0",
        kVAaTg: "ui-1ws8agc",
        k6u5qq: "ui-5mzm0h",
        kiidwf: "ui-q0b06",
        kuSzeQ: "ui-xdcokj",
        kj4lvg: "ui-19hpeb3",
        kNTNYc: "ui-1adrue1",
        kPImmc: "ui-od9wbl",
        kQt5nh: "ui-zpd85c",
        kGXBin: "ui-dcwjxm",
        kJQMXh: "ui-zt4vqu",
        ksWPem: "ui-80zyzy",
        klLboc: "ui-1hcztnp",
        khkOcy: "ui-1w8dmt8",
        kCTUJG: "ui-4osr7h",
        ks2vO1: "ui-1ds9isd",
        kn2Lw2: "ui-1tulfgc",
        kxnbmw: "ui-1cg8pwd",
        kF3T31: "ui-cj3vum",
        kDgtfc: "ui-15xgcvl",
        kSxuPW: "ui-2e1x3r",
        kL430V: "ui-1y6fbus",
        k3qVjX: "ui-mc06gs",
        k8Frli: "ui-ufud3u",
        kiwk38: "ui-2f7eey",
        kBUpVU: "ui-15uor3n",
        kpKxiU: "ui-dvi9g8",
        kTPQQ1: "ui-1ewzrch",
        kyvrsp: "ui-xpvcyh",
        kaHunl: "ui-5c2udl",
        kCc7J0: "ui-v6tws",
        kCoyUs: "ui-18xayax",
        kFRNuJ: "ui-vz3l4n",
        kHdq3J: "ui-h9ahm1",
        kJNzoR: "ui-1qtbn3m",
        kD6f1G: "ui-1v7bdb3",
        kWAWm8: "ui-192utbd",
        kbQYwN: "ui-1k3odjw",
        ko1ybx: "ui-iw87iy",
        kfDf1h: "ui-1cpgf8l",
        kBlLCQ: "ui-14f7tor",
        kfuGAs: "ui-ywju8d",
        k30hCX: "ui-1l39r0x",
        $$css: !0
    },
    compact: {
        kzQI83: "ui-1iyjqo2",
        kmuXW: "ui-s83m0k",
        kCS8Yb: "ui-1t1x2f9",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-1xpa7k",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-1uhho1l",
        k7Eaqz: "ui-euugli",
        kayTVb: "ui-14yy4lh",
        kUKtpI: "ui-oo0on2",
        khb7Dw: "ui-13iec6k",
        kLQdwP: "ui-1jbuict",
        k5stjq: "ui-dwykf6",
        koIjfZ: "ui-1eejpny",
        kRjxab: "ui-cealbe",
        k5snZI: "ui-ggdkqj",
        kmZExJ: "ui-1jo41r8",
        kuMEO4: "ui-1x4lnlc",
        kQZ5rw: "ui-sr8ihg",
        kugqUs: "ui-1ou2shc",
        kk30Ms: "ui-12nwg6u",
        $$css: !0
    },
    compactExpanded: {
        kzQI83: "ui-1c4vz4f",
        kmuXW: "ui-s83m0k",
        kCS8Yb: "ui-dl72j9",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-1xpa7k",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-1uhho1l",
        k7Eaqz: "ui-13fiaz2",
        kayTVb: "ui-gr9zt7",
        kUKtpI: "ui-16senaz",
        khb7Dw: "ui-1e0ou9i",
        kLQdwP: "ui-cbvtdb",
        k5stjq: "ui-3bwo2r",
        koIjfZ: "ui-l2oq5n",
        kRjxab: "ui-12ft6s0",
        k5snZI: "ui-6ymzhe",
        kmZExJ: "ui-7bc5a3",
        kuMEO4: "ui-uo9pux",
        kQZ5rw: "ui-1jlwod0",
        kugqUs: "ui-wdz02r",
        kk30Ms: "ui-1vwivzs",
        $$css: !0
    },
    dynamicIslandInactive: {
        kVAEAm: "ui-10l6tqk",
        kzqmXN: "ui-nalus7",
        ks0D6T: "ui-1m189uc",
        kZKoxP: "ui-qtp20y",
        kzQI83: "ui-1c4vz4f",
        kmuXW: "ui-2lah0s",
        kCS8Yb: "ui-1r8uery",
        kSiTet: "ui-g01cxk",
        kVQacm: "ui-b3r6kr",
        kfzvcC: "ui-47corl",
        k1ekBW: "ui-6o7n8i",
        kIyJzY: "ui-g3p6pi",
        kAMwcw: "ui-1ys8gui",
        $$css: !0
    },
    dynamicIslandHidden: {
        k1xSpc: "ui-1s85apg",
        $$css: !0
    },
    dynamicIslandVisible: {
        kVAEAm: "ui-1n2onr6",
        kzqmXN: "ui-h8yej3",
        ks0D6T: "ui-193iq5w",
        kZKoxP: "ui-t7dq6l",
        kVQacm: "ui-1rea2x4",
        $$css: !0
    },
    dynamicIslandCollapsing: {
        kUk6DE: "ui-vx4679",
        kSiTet: "ui-g01cxk",
        kfzvcC: "ui-47corl",
        $$css: !0
    },
    dynamicIslandActive: {
        kzQI83: "ui-1iyjqo2",
        kmuXW: "ui-s83m0k",
        kCS8Yb: "ui-1t1x2f9",
        kSiTet: "ui-1hc1fzr",
        kfzvcC: "ui-67bb7w",
        $$css: !0
    },
    reducedMotion: {
        kXHXEI: "ui-4wkmsb",
        $$css: !0
    },
    overlayOwnedSelection: {
        kil9wj: "ui-y52gkq",
        kp6Lxb: "ui-1ljlovl",
        kIOZv3: "ui-9pmp3a",
        k4t0pq: "ui-hp3g48",
        $$css: !0
    }
}, p_p = "ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b", sxa = {
    root: {
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kLKAdn: "ui-493x5y",
        kpe85a: "ui-14ndyrl",
        kGO01o: "ui-b6dno7",
        kE3dHu: "ui-1e7ydrk",
        $$css: !0
    },
    action: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kOIVth: "ui-11twubx",
        kZKoxP: "ui-1m1144u",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-17v7654",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-1lfpczk",
        kEafiO: "ui-972fbf",
        kWqL5O: "ui-gfja2r",
        kt9PQ7: "ui-1qhh985",
        kZ1KPB: "ui-yj58a3",
        kPef9Z: "ui-1ejq31n",
        kSWEuD: "ui-11pwa6s",
        kfdmCh: "ui-1sy0etr",
        k4WBpm: "ui-1b16gh4",
        kIxVMA: "ui-1njmyyh",
        ksF3WI: "ui-y7i79c",
        kYm2EN: "ui-1talola",
        kqGeR4: "ui-famn59",
        kWkggS: "ui-jbqb8w ui-1iuyybk",
        kMwMTN: "ui-1wd3ewq",
        kGuDYH: "ui-11wthnw",
        kLWn49: "ui-1ja60sm",
        kkrTdU: "ui-1ypdohk",
        k1ekBW: "ui-15406qy",
        kIyJzY: "ui-7pq1vu",
        kAMwcw: "ui-9lcvmn",
        kMeerF: "ui-1k57tk5 ui-784prv",
        k3XXqK: "ui-1t137rt ui-9v5kkp",
        kjBf7l: "ui-1uczgqu ui-1725o6r",
        kInvED: "ui-1wfwxd8 ui-1bqaal",
        $$css: !0
    }
}, m_p = "@", g_p = 24;

}
