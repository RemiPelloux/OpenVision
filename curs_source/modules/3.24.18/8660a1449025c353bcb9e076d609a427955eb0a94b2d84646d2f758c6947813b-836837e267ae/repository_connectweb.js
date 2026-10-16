import { hr } from "./protobuf.js";
import { $md, Agd, Amd, Bmd, Cgd, Cmd, Egd, Emd, Gmd, Hmd, Igd, Nmd, Omd, Pmd, Rgd, Sgd, Tmd, Vmd, Wmd, Ymd, _gd, a3o, amd, bmd, cmd, dgd, dmd, fgd, ggd, gmd, hmd, i3o, igd, jmd, kgd, n3o, ogd, pgd, pmd, qmd, qse, r3o, rgd, s3o, sgd, umd, wmd, xmd, zmd } from "./repository_pb.js";
import { ke } from "./service-type.js";
import { E } from "./tslib.es6.js";
var ZKa, mBm;
export { ZKa, mBm };
var __wakaru_QKa_initialized = false;
export function QKa() {
if (__wakaru_QKa_initialized) return;
__wakaru_QKa_initialized = true;
"use strict";
E(), qse(), hr(), ZKa = {
    typeName: "aiserver.v1.RepositoryService",
    methods: {
        fastRepoInitHandshake: {
            name: "FastRepoInitHandshake",
            I: hmd,
            O: pmd,
            kind: ke.Unary
        },
        syncMerkleSubtree: {
            name: "SyncMerkleSubtree",
            I: Tmd,
            O: Emd,
            kind: ke.Unary
        },
        fastUpdateFile: {
            name: "FastUpdateFile",
            I: Pmd,
            O: Nmd,
            kind: ke.Unary
        },
        searchRepositoryV2: {
            name: "SearchRepositoryV2",
            I: i3o,
            O: r3o,
            kind: ke.Unary
        },
        removeRepositoryV2: {
            name: "RemoveRepositoryV2",
            I: n3o,
            O: Ymd,
            kind: ke.Unary
        },
        fastRepoInitHandshakeV2: {
            name: "FastRepoInitHandshakeV2",
            I: gmd,
            O: bmd,
            kind: ke.Unary
        },
        syncMerkleSubtreeV2: {
            name: "SyncMerkleSubtreeV2",
            I: xmd,
            O: Amd,
            kind: ke.Unary
        },
        fastUpdateFileV2: {
            name: "FastUpdateFileV2",
            I: Omd,
            O: Bmd,
            kind: ke.Unary
        },
        fastRepoSyncComplete: {
            name: "FastRepoSyncComplete",
            I: wmd,
            O: Cmd,
            kind: ke.Unary
        },
        semSearchFast: {
            name: "SemSearchFast",
            I: s3o,
            O: a3o,
            kind: ke.ServerStreaming
        },
        semSearch: {
            name: "SemSearch",
            I: s3o,
            O: a3o,
            kind: ke.ServerStreaming
        },
        ensureIndexCreated: {
            name: "EnsureIndexCreated",
            I: umd,
            O: dmd,
            kind: ke.Unary
        },
        getHighLevelFolderDescription: {
            name: "GetHighLevelFolderDescription",
            I: amd,
            O: cmd,
            kind: ke.Unary
        },
        getEmbeddings: {
            name: "GetEmbeddings",
            I: zmd,
            O: Vmd,
            kind: ke.Unary
        },
        getUploadLimits: {
            name: "GetUploadLimits",
            I: jmd,
            O: $md,
            kind: ke.Unary
        },
        getNumFilesToSend: {
            name: "GetNumFilesToSend",
            I: Hmd,
            O: Wmd,
            kind: ke.Unary
        },
        getAvailableChunkingStrategies: {
            name: "GetAvailableChunkingStrategies",
            I: Gmd,
            O: qmd,
            kind: ke.Unary
        },
        getLineNumberClassifications: {
            name: "GetLineNumberClassifications",
            I: igd,
            O: rgd,
            kind: ke.ServerStreaming
        },
        getCopyStatus: {
            name: "GetCopyStatus",
            I: sgd,
            O: ogd,
            kind: ke.Unary
        }
    }
}, mBm = {
    typeName: "aiserver.v1.GitIndexService",
    methods: {
        repoHistoryInitHandshake: {
            name: "RepoHistoryInitHandshake",
            I: dgd,
            O: pgd,
            kind: ke.Unary
        },
        repoHistorySyncOne: {
            name: "RepoHistorySyncOne",
            I: ggd,
            O: fgd,
            kind: ke.Unary
        },
        repoHistorySyncComplete: {
            name: "RepoHistorySyncComplete",
            I: _gd,
            O: Sgd,
            kind: ke.Unary
        },
        removeRepoHistory: {
            name: "RemoveRepoHistory",
            I: Egd,
            O: Igd,
            kind: ke.Unary
        },
        searchPRHistory: {
            name: "SearchPRHistory",
            I: kgd,
            O: Cgd,
            kind: ke.Unary
        },
        getPRIndexingStatus: {
            name: "GetPRIndexingStatus",
            I: Agd,
            O: Rgd,
            kind: ke.Unary
        }
    }
};

}
