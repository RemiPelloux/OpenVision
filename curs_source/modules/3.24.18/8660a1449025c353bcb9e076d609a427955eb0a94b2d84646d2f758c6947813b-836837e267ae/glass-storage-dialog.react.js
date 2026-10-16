import { yp } from "./glass-command-service.js";
import { zc } from "./glass-notification-service.js";
import { xc } from "./glass-storage-service.js";
import { Mt } from "./index_197.js";
import { UZn } from "./storageSizeBreakdown.js";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
import { In } from "./use-service.react_2.js";
import { xnC } from "./use-storage-size-breakdown.react.js";
var c8, mlc, Bjv;
export { Bjv, c8, mlc };
var __wakaru_DnC_initialized = false;
export function DnC() {
if (__wakaru_DnC_initialized) return;
__wakaru_DnC_initialized = true;
"use strict";
E(), Mt(), $b(), UZn(), In(), yp(), zc(), xc(), xnC(), c8 = {
    barSegment: {
        kZKoxP: "glass-5yr21d",
        k7Eaqz: "glass-euugli",
        kmuXW: "glass-2lah0s",
        kCS8Yb: "glass-1r8uery",
        kaIpWk: "glass-1bl94mz",
        kSiTet: "glass-1hc1fzr",
        kkrTdU: "glass-t0e3qv",
        $$css: !0
    },
    barSegmentGrow: (t)=>[
            {
                kzQI83: t != null ? "glass-w36f2b" : t,
                $$css: !0
            },
            {
                "--x-flexGrow": t ?? void 0
            }
        ],
    barRemainder: {
        kZKoxP: "glass-5yr21d",
        k7Eaqz: "glass-euugli",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-1r8uery",
        kaIpWk: "glass-1bl94mz",
        kWkggS: "glass-qcqck4",
        kKVMdj: "glass-176vbx1 glass-1aquc0h",
        k44tkh: "glass-1sbju2s",
        kyAemX: "glass-4hg4is",
        ko0y90: "glass-a4qsjk",
        $$css: !0
    },
    barSegmentDim: {
        kSiTet: "glass-ti2d7y",
        $$css: !0
    },
    legendDot: {
        kzqmXN: "glass-1xc55vz",
        kZKoxP: "glass-dk7pt",
        kaIpWk: "glass-1i4c3av",
        kzQI83: "glass-1c4vz4f",
        kmuXW: "glass-2lah0s",
        kCS8Yb: "glass-dl72j9",
        $$css: !0
    },
    skeletonLine: {
        kZKoxP: "glass-dk7pt",
        kaIpWk: "glass-1e1y6u3",
        kWkggS: "glass-qcqck4",
        kKVMdj: "glass-176vbx1 glass-1aquc0h",
        k44tkh: "glass-1sbju2s",
        kyAemX: "glass-4hg4is",
        ko0y90: "glass-a4qsjk",
        $$css: !0
    },
    chats: {
        kWkggS: "glass-eqke4s",
        $$css: !0
    },
    messages: {
        kWkggS: "glass-1baxt97",
        $$css: !0
    },
    agentBlobs: {
        kWkggS: "glass-1h2qwge",
        $$css: !0
    },
    agentCheckpoints: {
        kWkggS: "glass-1h27yg5",
        $$css: !0
    },
    agentArtifacts: {
        kWkggS: "glass-54x3lz",
        $$css: !0
    },
    checkpoints: {
        kWkggS: "glass-db05xe",
        $$css: !0
    },
    diffs: {
        kWkggS: "glass-1cvdsvx",
        $$css: !0
    },
    cloudAgents: {
        kWkggS: "glass-1qfxjfa",
        $$css: !0
    },
    composerIndex: {
        kWkggS: "glass-1gxx7xa",
        $$css: !0
    },
    settings: {
        kWkggS: "glass-1qfxjfa",
        $$css: !0
    },
    otherKv: {
        kWkggS: "glass-1cvdsvx",
        $$css: !0
    },
    wal: {
        kWkggS: "glass-1h428k6",
        $$css: !0
    },
    sqliteOverhead: {
        kWkggS: "glass-db05xe",
        $$css: !0
    },
    sqliteFree: {
        kWkggS: "glass-1h2qwge",
        $$css: !0
    },
    barOther: {
        kWkggS: "glass-bhuhuz",
        $$css: !0
    }
}, mlc = {
    chats: c8.chats,
    messages: c8.messages,
    agentBlobs: c8.agentBlobs,
    agentCheckpoints: c8.agentCheckpoints,
    agentArtifacts: c8.agentArtifacts,
    checkpoints: c8.checkpoints,
    diffs: c8.diffs,
    cloudAgents: c8.cloudAgents,
    composerIndex: c8.composerIndex,
    settings: c8.settings,
    otherKv: c8.otherKv,
    wal: c8.wal,
    sqliteOverhead: c8.sqliteOverhead,
    sqliteFree: c8.sqliteFree
}, Bjv = {
    deleteOldChats: "trash",
    gcAgentKvBlobs: "sparkle",
    reclaimFreeSpace: "database"
};

}
