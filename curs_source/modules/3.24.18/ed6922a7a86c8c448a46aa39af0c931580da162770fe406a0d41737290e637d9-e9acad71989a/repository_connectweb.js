import { bi } from "./protobuf.js";
import { $gu, Afu, Agu, Bgu, CBs, Cfu, Cgu, Dgu, Efu, Egu, Ggu, Hgu, Igu, Lgu, Ogu, Rfu, Sfu, TBs, Tgu, Vgu, Wgu, Ygu, _fu, agu, bgu, dfu, dgu, ffu, gfu, ggu, hgu, ifu, jgu, kBs, kfu, lgu, nX, ofu, pfu, pgu, qgu, rfu, sfu, ugu, wBs, wgu, xBs, xfu, zgu } from "./repository_pb.js";
import { ae } from "./service-type.js";
import { x } from "./tslib.es6.js";
var umo, dQd;
export { dQd, umo };
var __wakaru_dmo_initialized = false;
export function dmo() {
if (__wakaru_dmo_initialized) return;
__wakaru_dmo_initialized = true;
"use strict";
x(), nX(), bi(), umo = {
    typeName: "aiserver.v1.RepositoryService",
    methods: {
        fastRepoInitHandshake: {
            name: "FastRepoInitHandshake",
            I: hgu,
            O: pgu,
            kind: ae.Unary
        },
        syncMerkleSubtree: {
            name: "SyncMerkleSubtree",
            I: Tgu,
            O: Egu,
            kind: ae.Unary
        },
        fastUpdateFile: {
            name: "FastUpdateFile",
            I: Dgu,
            O: Lgu,
            kind: ae.Unary
        },
        searchRepositoryV2: {
            name: "SearchRepositoryV2",
            I: wBs,
            O: CBs,
            kind: ae.Unary
        },
        removeRepositoryV2: {
            name: "RemoveRepositoryV2",
            I: kBs,
            O: Ygu,
            kind: ae.Unary
        },
        fastRepoInitHandshakeV2: {
            name: "FastRepoInitHandshakeV2",
            I: ggu,
            O: bgu,
            kind: ae.Unary
        },
        syncMerkleSubtreeV2: {
            name: "SyncMerkleSubtreeV2",
            I: Igu,
            O: Agu,
            kind: ae.Unary
        },
        fastUpdateFileV2: {
            name: "FastUpdateFileV2",
            I: Ogu,
            O: Bgu,
            kind: ae.Unary
        },
        fastRepoSyncComplete: {
            name: "FastRepoSyncComplete",
            I: wgu,
            O: Cgu,
            kind: ae.Unary
        },
        semSearchFast: {
            name: "SemSearchFast",
            I: TBs,
            O: xBs,
            kind: ae.ServerStreaming
        },
        semSearch: {
            name: "SemSearch",
            I: TBs,
            O: xBs,
            kind: ae.ServerStreaming
        },
        ensureIndexCreated: {
            name: "EnsureIndexCreated",
            I: ugu,
            O: dgu,
            kind: ae.Unary
        },
        getHighLevelFolderDescription: {
            name: "GetHighLevelFolderDescription",
            I: agu,
            O: lgu,
            kind: ae.Unary
        },
        getEmbeddings: {
            name: "GetEmbeddings",
            I: qgu,
            O: zgu,
            kind: ae.Unary
        },
        getUploadLimits: {
            name: "GetUploadLimits",
            I: $gu,
            O: Hgu,
            kind: ae.Unary
        },
        getNumFilesToSend: {
            name: "GetNumFilesToSend",
            I: Wgu,
            O: Ggu,
            kind: ae.Unary
        },
        getAvailableChunkingStrategies: {
            name: "GetAvailableChunkingStrategies",
            I: Vgu,
            O: jgu,
            kind: ae.Unary
        },
        getLineNumberClassifications: {
            name: "GetLineNumberClassifications",
            I: ifu,
            O: rfu,
            kind: ae.ServerStreaming
        },
        getCopyStatus: {
            name: "GetCopyStatus",
            I: sfu,
            O: ofu,
            kind: ae.Unary
        }
    }
}, dQd = {
    typeName: "aiserver.v1.GitIndexService",
    methods: {
        repoHistoryInitHandshake: {
            name: "RepoHistoryInitHandshake",
            I: dfu,
            O: pfu,
            kind: ae.Unary
        },
        repoHistorySyncOne: {
            name: "RepoHistorySyncOne",
            I: gfu,
            O: ffu,
            kind: ae.Unary
        },
        repoHistorySyncComplete: {
            name: "RepoHistorySyncComplete",
            I: _fu,
            O: Sfu,
            kind: ae.Unary
        },
        removeRepoHistory: {
            name: "RemoveRepoHistory",
            I: Efu,
            O: xfu,
            kind: ae.Unary
        },
        searchPRHistory: {
            name: "SearchPRHistory",
            I: kfu,
            O: Cfu,
            kind: ae.Unary
        },
        getPRIndexingStatus: {
            name: "GetPRIndexingStatus",
            I: Afu,
            O: Rfu,
            kind: ae.Unary
        }
    }
};

}
