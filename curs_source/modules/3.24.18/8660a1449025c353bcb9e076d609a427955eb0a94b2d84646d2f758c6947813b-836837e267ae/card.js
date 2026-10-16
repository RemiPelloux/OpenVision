import { qu } from "./attach.js";
import { fd } from "./icon.js";
import { B$S, F$S, O$S } from "./ipa.js";
import { SWe } from "./path-file-icon.js";
import { Raa } from "./seti.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
import { m2 } from "./variant-enforcer.js";
import { createContext as Rip } from "./react-runtime/react/esm-index-production.js";
var dwa, Dip, yBr, Nip, w2e, c$t, SBr, pfi, kBr, hwa, lkn, wBr, pwa, CBr, Lip, Oip, Fip, Bip, mwa, gwa, UW;
export { Bip, CBr, Dip, Fip, Lip, Nip, Oip, SBr, UW, c$t, dwa, gwa, hwa, kBr, lkn, mwa, pfi, pwa, w2e, wBr, yBr };
var __wakaru_fwa_initialized = false;
export function fwa() {
if (__wakaru_fwa_initialized) return;
__wakaru_fwa_initialized = true;
"use strict";
E(), Va(), qu(), Raa(), SWe(), fd(), m2(), dwa = Rip(null), Dip = {
    "ui--default-marker": "ui--default-marker",
    $$css: !0
}, yBr = {
    base: {
        kB7OPa: "ui-9f619",
        kWkggS: "ui-1ua6jya",
        kEafiO: "ui-178xt8z",
        kPef9Z: "ui-13fuv20",
        kLZC3w: "ui-1aeic0j",
        kWqL5O: "ui-s1s249",
        kSWEuD: "ui-32b0ac",
        k26BEO: "ui-141kqco",
        kt9PQ7: "ui-so031l",
        kfdmCh: "ui-1q0q8m5",
        kL6WhQ: "ui-17fyfba",
        kZ1KPB: "ui-e0pwq",
        k4WBpm: "ui-19ypqd9",
        kaZRDh: "ui-1arpupx",
        kaIpWk: "ui-1m7fhj7",
        kVQacm: "ui-7giv3",
        $$css: !0
    },
    borderless: {
        kEafiO: "ui-972fbf",
        kPef9Z: "ui-1ejq31n",
        kLZC3w: "ui-1b4hy2t",
        kWqL5O: "ui-gfja2r",
        kSWEuD: "ui-11pwa6s",
        k26BEO: "ui-1ws9gjp",
        kt9PQ7: "ui-1qhh985",
        kfdmCh: "ui-1sy0etr",
        kL6WhQ: "ui-1tnzt7h",
        kZ1KPB: "ui-yj58a3",
        k4WBpm: "ui-1b16gh4",
        kaZRDh: "ui-1pjslub",
        kaIpWk: "ui-2u8bby",
        $$css: !0
    },
    dividerBottom: {
        kt9PQ7: "ui-so031l",
        kfdmCh: "ui-1q0q8m5",
        kL6WhQ: "ui-17fyfba",
        $$css: !0
    }
}, Nip = {
    base: {
        kB7OPa: "ui-9f619",
        kVAEAm: "ui-1n2onr6",
        $$css: !0
    }
}, w2e = {
    base: {
        kB7OPa: "ui-9f619",
        kVAEAm: "ui-1n2onr6",
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kZKoxP: "ui-1gnnpzl",
        kGuDYH: "ui-11wthnw",
        kMwMTN: "ui-1wd3ewq",
        $$css: !0
    },
    sticky: {
        kVAEAm: "ui-7wzq59",
        k87sOh: "ui-13vifvy",
        kY2c9j: "ui-1u8a7rm",
        kWkggS: "ui-1ua6jya",
        $$css: !0
    },
    stickyTop: (t)=>[
            {
                k87sOh: t != null ? "ui-jbys53" : t,
                $$css: !0
            },
            {
                "--x-top": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t)
            }
        ],
    sizeLg: {
        kZKoxP: "ui-10w6t97",
        $$css: !0
    },
    collapsible: {
        kfSwDN: "ui-87ps6o",
        $$css: !0
    },
    withDivider: {
        k5JduY: "ui-1s928wv",
        kwXMNM: "ui-1j6awrg",
        kH8cDV: "ui-17cx49",
        kLxBhq: "ui-nbfe2x",
        k8Iv0R: "ui-1te75w5",
        k4zj60: "ui-cock1l",
        ks3ayO: "ui-dpb96d",
        $$css: !0
    },
    stickyBoundary: {
        kzqmXN: "ui-9s46ru",
        keoZOQ: "ui-1y332i5",
        km5ZXQ: "ui-1y7amh",
        koQZXg: "ui-h9i6ac",
        kEafiO: "ui-178xt8z",
        kPef9Z: "ui-13fuv20",
        kLZC3w: "ui-1aeic0j",
        kWqL5O: "ui-s1s249",
        kSWEuD: "ui-32b0ac",
        k26BEO: "ui-141kqco",
        kt9PQ7: "ui-so031l",
        kfdmCh: "ui-1q0q8m5",
        kL6WhQ: "ui-17fyfba",
        kZ1KPB: "ui-e0pwq",
        k4WBpm: "ui-19ypqd9",
        kaZRDh: "ui-1arpupx",
        kWkggS: "ui-1ua6jya",
        $$css: !0
    },
    stickyBoundaryOpen: {
        kZKoxP: "ui-1aekv1k",
        kt9PQ7: "ui-1qhh985",
        kfdmCh: "ui-1sy0etr",
        kIxVMA: "ui-1vb4fzf",
        ksF3WI: "ui-14gibnr",
        kYm2EN: "ui-jppbhk",
        kqGeR4: "ui-frllxf",
        $$css: !0
    },
    stickyBoundaryClosed: {
        kZKoxP: "ui-10w6t97",
        k1K539: "ui-1jyxor1",
        kaIpWk: "ui-1m7fhj7",
        $$css: !0
    },
    unifiedDiffFrameGeometry: {
        kzqmXN: "ui-h8yej3",
        keoZOQ: "ui-dj266r",
        km5ZXQ: "ui-1yf7rl7",
        k1K539: "ui-at24cr",
        koQZXg: "ui-j3b58b",
        $$css: !0
    },
    unifiedDiffOpen: {
        k8Iv0R: "ui-1xrz1ek",
        $$css: !0
    }
}, c$t = {
    base: {
        "--ui-card-icon-display": "ui-12djj59",
        "--ui-card-chevron-display": "ui-188r0fg",
        kB7OPa: "ui-9f619",
        kUk6DE: "ui-98rzlu",
        k7Eaqz: "ui-euugli",
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kZKoxP: "ui-5yr21d",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-1yxiud8",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-yab65l",
        kOIVth: "ui-pkkfsy",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        $$css: !0
    },
    sizeLg: {
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-16b7oty",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-o7x2bt",
        kOIVth: "ui-ehausa",
        $$css: !0
    },
    hoverTarget: {
        "--ui-card-icon-display": "ui-12djj59 ui-18wqni8",
        "--ui-card-chevron-display": "ui-188r0fg ui-12d72fx",
        $$css: !0
    },
    diffCard: {
        kOIVth: "ui-ehausa",
        $$css: !0
    },
    unifiedDiff: {
        kE3dHu: "ui-1o7kk3e",
        kpe85a: "ui-1yxiud8",
        $$css: !0
    },
    insetNone: {
        kE3dHu: "ui-1uhho1l",
        kpe85a: "ui-1xpa7k",
        $$css: !0
    }
}, SBr = {
    base: {
        kB7OPa: "ui-9f619",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kg5iWk: "ui-lyipyv",
        k8aIck: "ui-jlip5",
        kqG3fB: "ui-kyw5k8",
        k7Eaqz: "ui-euugli",
        $$css: !0
    },
    diffCard: {
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kOIVth: "ui-pkkfsy",
        $$css: !0
    },
    unifiedDiff: {
        kOIVth: "ui-ehausa",
        kzqmXN: "ui-h8yej3",
        $$css: !0
    }
}, pfi = {
    base: {
        kB7OPa: "ui-9f619",
        kysU6D: "ui-jyslct",
        kWkggS: "ui-jbqb8w",
        kEafiO: "ui-972fbf",
        kPef9Z: "ui-1ejq31n",
        kLZC3w: "ui-1b4hy2t",
        kWqL5O: "ui-gfja2r",
        kSWEuD: "ui-11pwa6s",
        k26BEO: "ui-1ws9gjp",
        kt9PQ7: "ui-1qhh985",
        kfdmCh: "ui-1sy0etr",
        kL6WhQ: "ui-1tnzt7h",
        kZ1KPB: "ui-yj58a3",
        k4WBpm: "ui-1b16gh4",
        kaZRDh: "ui-1pjslub",
        keoZOQ: "ui-dj266r",
        km5ZXQ: "ui-1yf7rl7",
        k1K539: "ui-at24cr",
        koQZXg: "ui-j3b58b",
        kMv6JI: "ui-jb2p0i",
        kGuDYH: "ui-1qlqyl8",
        k63SB2: "ui-1pd3egz",
        kLWn49: "ui-15bjb6t",
        kMwMTN: "ui-1heor9g",
        k9WMMc: "ui-1yc453h",
        $$css: !0
    },
    focusVisible: {
        kMeerF: "ui-4xl6zf",
        k3XXqK: "ui-9v5kkp",
        kjBf7l: "ui-1725o6r",
        kInvED: "ui-y9f4xx",
        $$css: !0
    }
}, kBr = {
    base: {
        "--ui-card-icon-display": "ui-12djj59 ui-18wqni8",
        "--ui-card-chevron-display": "ui-188r0fg ui-12d72fx",
        kB7OPa: "ui-9f619",
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kmuXW: "ui-2lah0s",
        kzqmXN: "ui-smyaan",
        kZKoxP: "ui-1kpxq89",
        kkrTdU: "ui-1ypdohk",
        $$css: !0
    },
    diffCard: {
        kzqmXN: "ui-6jxa94",
        kZKoxP: "ui-1v9usgg",
        $$css: !0
    },
    sizeAvatar: {
        kzqmXN: "ui-w4jnvo",
        kZKoxP: "ui-1qx5ct2",
        $$css: !0
    }
}, hwa = {
    base: {
        kB7OPa: "ui-9f619",
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kUk6DE: "ui-98rzlu",
        k7Eaqz: "ui-euugli",
        kZKoxP: "ui-5yr21d",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-1xpa7k",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-1uhho1l",
        kkrTdU: "ui-1ypdohk",
        $$css: !0
    },
    unifiedDiff: {
        k7Eaqz: "ui-euugli",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        $$css: !0
    }
}, lkn = {
    base: {
        kB7OPa: "ui-9f619",
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kOIVth: "ui-137clkk",
        kpe85a: "ui-1yxiud8",
        kmuXW: "ui-2lah0s",
        kMYsNW: "ui-bbiggo",
        kS3W0g: "ui-5banxo",
        $$css: !0
    },
    sizeLg: {
        kpe85a: "ui-16b7oty",
        kMYsNW: "ui-1vr4f00",
        kS3W0g: "ui-1o1jt0c",
        $$css: !0
    },
    diffCard: {
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kOIVth: "ui-pkkfsy",
        kpe85a: "ui-1jkygx",
        kmuXW: "ui-2lah0s",
        $$css: !0
    },
    unifiedDiff: {
        kOIVth: "ui-ehausa",
        $$css: !0
    },
    insetNone: {
        kpe85a: "ui-1xpa7k",
        $$css: !0
    }
}, wBr = {
    base: {
        kB7OPa: "ui-9f619",
        kVAEAm: "ui-1n2onr6",
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kmuXW: "ui-2lah0s",
        kzqmXN: "ui-smyaan",
        kZKoxP: "ui-1kpxq89",
        $$css: !0
    },
    diffCard: {
        kzqmXN: "ui-1kky2od",
        kZKoxP: "ui-lup9mm",
        $$css: !0
    },
    sizeAvatar: {
        kzqmXN: "ui-w4jnvo",
        kZKoxP: "ui-1qx5ct2",
        $$css: !0
    }
}, pwa = {
    base: {
        kB7OPa: "ui-9f619",
        kVAEAm: "ui-10l6tqk",
        kpwlN0: "ui-10a8y8t",
        k1xSpc: "ui-1x9shfm",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kMwMTN: "ui-1lbmi28",
        $$css: !0
    },
    diffCard: {
        k1xSpc: "ui-1x9shfm ui-kx54ml",
        $$css: !0
    }
}, CBr = {
    base: {
        kB7OPa: "ui-9f619",
        kVAEAm: "ui-10l6tqk",
        kpwlN0: "ui-10a8y8t",
        k1xSpc: "ui-1507brv",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kMwMTN: "ui-1lbmi28",
        $$css: !0
    },
    always: {
        k1xSpc: "ui-78zum5",
        $$css: !0
    },
    diffCard: {
        k1xSpc: "ui-1507brv ui-bpwfw0",
        $$css: !0
    }
}, Lip = {
    base: {
        kB7OPa: "ui-9f619",
        keoZOQ: "ui-vijh9v",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kGuDYH: "ui-1wm8ruf",
        kMwMTN: "ui-19aaqeu",
        $$css: !0
    }
}, Oip = {
    base: "sm",
    lg: "md"
}, Fip = {
    base: void 0,
    lg: "base"
}, Bip = {
    base: "md",
    lg: "md"
}, mwa = {
    base: "base",
    lg: "lg"
}, gwa = Rip({
    isOpen: !0,
    collapsible: !1,
    toggle: ()=>{},
    size: "base",
    variant: "default",
    stickyHeader: !1,
    stickyTop: 0
}), UW = {
    Root: O$S,
    Header: F$S,
    Content: B$S
};

}
