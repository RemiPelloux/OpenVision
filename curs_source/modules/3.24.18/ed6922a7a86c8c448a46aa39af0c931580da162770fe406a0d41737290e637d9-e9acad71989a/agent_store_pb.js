import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var lco, V3d, j3d, CVi, uco, q3d, z3d, K3d, Y3d, dco, X3d, hco, TWt, pco, Z3d, mco, gco, Q3d, fco, vco, _co, J3d, bco, yco, Sco, kco, wco, Cco, Tco, Eco, xco, TVi, Ico, Aco, Rco, eBd, Dco, tBd, nBd, iBd, Mco, Pco, rBd, sBd, oBd, aBd, cBd, Lco, lBd, EVi, Nco, Oco, uBd, dBd, Fco, hBd, Bco, pBd, Uco, mBd, $co, gBd, fBd, Hco, HNn, Wco, Gco, Vco, jco, qco, zco, Kco, Yco, vBd, _Bd, Xco, Zco, Qco, Jco, bBd, yBd, elo, tlo, nlo, ilo, SBd, rlo, slo, olo, alo, clo, kBd, llo;
export { $co, Aco, Bco, CVi, Cco, Dco, EVi, Eco, Fco, Gco, HNn, Hco, Ico, J3d, Jco, K3d, Kco, Lco, Mco, Nco, Oco, Pco, Q3d, Qco, Rco, SBd, Sco, TVi, TWt, Tco, Uco, V3d, Vco, Wco, X3d, Xco, Y3d, Yco, Z3d, Zco, _Bd, _co, aBd, alo, bBd, bco, cBd, clo, dBd, dco, eBd, elo, fBd, fco, gBd, gco, hBd, hco, iBd, ilo, j3d, jco, kBd, kco, lBd, lco, llo, mBd, mco, nBd, nlo, oBd, olo, pBd, pco, q3d, qco, rBd, rlo, sBd, slo, tBd, tlo, uBd, uco, vBd, vco, wco, xco, yBd, yco, z3d, zco };
var __wakaru_ulo_initialized = false;
export function ulo() {
if (__wakaru_ulo_initialized) return;
__wakaru_ulo_initialized = true;
"use strict";
x(), bi(), lco = k.makeEnum("aiserver.v1.AgentStoreKind", [
    {
        no: 0,
        name: "AGENT_STORE_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_STORE_KIND_CLOUD",
        localName: "CLOUD"
    },
    {
        no: 2,
        name: "AGENT_STORE_KIND_LOCAL",
        localName: "LOCAL"
    },
    {
        no: 3,
        name: "AGENT_STORE_KIND_AUTOMATION",
        localName: "AUTOMATION"
    },
    {
        no: 4,
        name: "AGENT_STORE_KIND_USER",
        localName: "USER"
    },
    {
        no: 5,
        name: "AGENT_STORE_KIND_TEAM",
        localName: "TEAM"
    },
    {
        no: 6,
        name: "AGENT_STORE_KIND_NAMED_AGENT",
        localName: "NAMED_AGENT"
    },
    {
        no: 7,
        name: "AGENT_STORE_KIND_GROK_BOT",
        localName: "GROK_BOT"
    }
]), V3d = k.makeEnum("aiserver.v1.AgentStoreSourceKind", [
    {
        no: 0,
        name: "AGENT_STORE_SOURCE_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_STORE_SOURCE_KIND_CLOUD",
        localName: "CLOUD"
    },
    {
        no: 2,
        name: "AGENT_STORE_SOURCE_KIND_LOCAL",
        localName: "LOCAL"
    },
    {
        no: 3,
        name: "AGENT_STORE_SOURCE_KIND_AUTOMATION",
        localName: "AUTOMATION"
    },
    {
        no: 4,
        name: "AGENT_STORE_SOURCE_KIND_USER",
        localName: "USER"
    },
    {
        no: 5,
        name: "AGENT_STORE_SOURCE_KIND_TEAM",
        localName: "TEAM"
    },
    {
        no: 6,
        name: "AGENT_STORE_SOURCE_KIND_NAMED_AGENT",
        localName: "NAMED_AGENT"
    },
    {
        no: 7,
        name: "AGENT_STORE_SOURCE_KIND_GROK_BOT",
        localName: "GROK_BOT"
    }
]), j3d = k.makeEnum("aiserver.v1.AgentStoreEntryKind", [
    {
        no: 0,
        name: "AGENT_STORE_ENTRY_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_STORE_ENTRY_KIND_DIRECTORY",
        localName: "DIRECTORY"
    },
    {
        no: 2,
        name: "AGENT_STORE_ENTRY_KIND_FILE",
        localName: "FILE"
    }
]), CVi = k.makeEnum("aiserver.v1.AgentStoreDocumentVisibility", [
    {
        no: 0,
        name: "AGENT_STORE_DOCUMENT_VISIBILITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_STORE_DOCUMENT_VISIBILITY_PRIVATE",
        localName: "PRIVATE"
    },
    {
        no: 2,
        name: "AGENT_STORE_DOCUMENT_VISIBILITY_TEAM_VIEW",
        localName: "TEAM_VIEW"
    },
    {
        no: 3,
        name: "AGENT_STORE_DOCUMENT_VISIBILITY_PUBLIC",
        localName: "PUBLIC"
    }
]), uco = k.makeEnum("aiserver.v1.AgentStoreTombstoneMode", [
    {
        no: 0,
        name: "AGENT_STORE_TOMBSTONE_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_STORE_TOMBSTONE_MODE_INCLUDE",
        localName: "INCLUDE"
    },
    {
        no: 2,
        name: "AGENT_STORE_TOMBSTONE_MODE_OMIT",
        localName: "OMIT"
    },
    {
        no: 3,
        name: "AGENT_STORE_TOMBSTONE_MODE_SINCE",
        localName: "SINCE"
    }
]), q3d = k.makeEnum("aiserver.v1.AgentStoreDirectoryListingMode", [
    {
        no: 0,
        name: "AGENT_STORE_DIRECTORY_LISTING_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_STORE_DIRECTORY_LISTING_MODE_DIRECTORY_PAGE",
        localName: "DIRECTORY_PAGE"
    },
    {
        no: 2,
        name: "AGENT_STORE_DIRECTORY_LISTING_MODE_COMPLETE_FLAT_STORE",
        localName: "COMPLETE_FLAT_STORE"
    },
    {
        no: 3,
        name: "AGENT_STORE_DIRECTORY_LISTING_MODE_COMPLETE_FLAT_SUBTREE",
        localName: "COMPLETE_FLAT_SUBTREE"
    }
]), z3d = k.makeEnum("aiserver.v1.AgentStoreMultipartOperationFailureCode", [
    {
        no: 0,
        name: "AGENT_STORE_MULTIPART_OPERATION_FAILURE_CODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_STORE_MULTIPART_OPERATION_FAILURE_CODE_PRECONDITION_FAILED",
        localName: "PRECONDITION_FAILED"
    },
    {
        no: 2,
        name: "AGENT_STORE_MULTIPART_OPERATION_FAILURE_CODE_UPLOAD_NOT_FOUND",
        localName: "UPLOAD_NOT_FOUND"
    },
    {
        no: 3,
        name: "AGENT_STORE_MULTIPART_OPERATION_FAILURE_CODE_INVALID_PARTS",
        localName: "INVALID_PARTS"
    },
    {
        no: 4,
        name: "AGENT_STORE_MULTIPART_OPERATION_FAILURE_CODE_CHECKSUM_MISMATCH",
        localName: "CHECKSUM_MISMATCH"
    },
    {
        no: 5,
        name: "AGENT_STORE_MULTIPART_OPERATION_FAILURE_CODE_TRANSIENT",
        localName: "TRANSIENT"
    },
    {
        no: 6,
        name: "AGENT_STORE_MULTIPART_OPERATION_FAILURE_CODE_INTERNAL",
        localName: "INTERNAL"
    },
    {
        no: 7,
        name: "AGENT_STORE_MULTIPART_OPERATION_FAILURE_CODE_RESTART_REQUIRED",
        localName: "RESTART_REQUIRED"
    }
]), K3d = k.makeEnum("aiserver.v1.AgentStoreDeleteFileStatus", [
    {
        no: 0,
        name: "AGENT_STORE_DELETE_FILE_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_STORE_DELETE_FILE_STATUS_DELETED",
        localName: "DELETED"
    },
    {
        no: 2,
        name: "AGENT_STORE_DELETE_FILE_STATUS_ALREADY_DELETED",
        localName: "ALREADY_DELETED"
    },
    {
        no: 3,
        name: "AGENT_STORE_DELETE_FILE_STATUS_CONFLICT",
        localName: "CONFLICT"
    }
]), Y3d = k.makeEnum("aiserver.v1.AgentStoreUndeleteFileStatus", [
    {
        no: 0,
        name: "AGENT_STORE_UNDELETE_FILE_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_STORE_UNDELETE_FILE_STATUS_RESTORED",
        localName: "RESTORED"
    },
    {
        no: 2,
        name: "AGENT_STORE_UNDELETE_FILE_STATUS_NOT_DELETED",
        localName: "NOT_DELETED"
    },
    {
        no: 3,
        name: "AGENT_STORE_UNDELETE_FILE_STATUS_CONFLICT",
        localName: "CONFLICT"
    },
    {
        no: 4,
        name: "AGENT_STORE_UNDELETE_FILE_STATUS_UNRECOVERABLE",
        localName: "UNRECOVERABLE"
    },
    {
        no: 5,
        name: "AGENT_STORE_UNDELETE_FILE_STATUS_TOO_LARGE",
        localName: "TOO_LARGE"
    }
]), dco = k.makeEnum("aiserver.v1.AgentStoreShareVisibility", [
    {
        no: 0,
        name: "AGENT_STORE_SHARE_VISIBILITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 2,
        name: "AGENT_STORE_SHARE_VISIBILITY_TEAM",
        localName: "TEAM"
    },
    {
        no: 3,
        name: "AGENT_STORE_SHARE_VISIBILITY_PUBLIC",
        localName: "PUBLIC"
    }
]), X3d = k.makeEnum("aiserver.v1.ListSharedAgentStoresScope", [
    {
        no: 0,
        name: "LIST_SHARED_AGENT_STORES_SCOPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LIST_SHARED_AGENT_STORES_SCOPE_MINE",
        localName: "MINE"
    },
    {
        no: 2,
        name: "LIST_SHARED_AGENT_STORES_SCOPE_TEAM",
        localName: "TEAM"
    }
]), hco = k.makeMessageType("aiserver.v1.ListAgentStoresRequest", ()=>[
        {
            no: 1,
            name: "n",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "page_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), TWt = k.makeMessageType("aiserver.v1.AgentStoreSourceRef", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(V3d)
        },
        {
            no: 2,
            name: "source_id",
            kind: "scalar",
            T: 9
        }
    ]), pco = k.makeMessageType("aiserver.v1.AgentStoreMount", ()=>[
        {
            no: 1,
            name: "mount_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "source",
            kind: "message",
            T: TWt,
            oneof: "target"
        },
        {
            no: 3,
            name: "store_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        },
        {
            no: 4,
            name: "share_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        },
        {
            no: 5,
            name: "server_generated",
            kind: "scalar",
            T: 8
        }
    ]), Z3d = k.makeMessageType("aiserver.v1.AgentStore", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "created_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 5,
            name: "updated_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 8,
            name: "repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 9,
            name: "shares",
            kind: "message",
            T: SBd,
            repeated: !0
        },
        {
            no: 10,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(lco)
        },
        {
            no: 11,
            name: "last_file_write_at_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 12,
            name: "source_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "source_display_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "source",
            kind: "message",
            T: TWt
        }
    ]), mco = k.makeMessageType("aiserver.v1.ListAgentStoresResponse", ()=>[
        {
            no: 1,
            name: "stores",
            kind: "message",
            T: Z3d,
            repeated: !0
        },
        {
            no: 2,
            name: "has_more",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "next_page_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), gco = k.makeMessageType("aiserver.v1.ListAgentStoreEntriesRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "share_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Q3d = k.makeMessageType("aiserver.v1.AgentStoreEntry", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(j3d)
        },
        {
            no: 4,
            name: "size_bytes",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 5,
            name: "updated_at_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ]), fco = k.makeMessageType("aiserver.v1.ListAgentStoreEntriesResponse", ()=>[
        {
            no: 1,
            name: "normalized_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "entries",
            kind: "message",
            T: Q3d,
            repeated: !0
        }
    ]), vco = k.makeMessageType("aiserver.v1.ReadAgentStoreFileRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "share_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), _co = k.makeMessageType("aiserver.v1.ReadAgentStoreFileResponse", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "document_owner_view",
            kind: "message",
            T: J3d,
            opt: !0
        }
    ]), J3d = k.makeMessageType("aiserver.v1.AgentStoreDocumentOwnerView", ()=>[
        {
            no: 1,
            name: "visibility",
            kind: "enum",
            T: k.getEnumType(CVi)
        },
        {
            no: 2,
            name: "can_share_to_team",
            kind: "scalar",
            T: 8
        }
    ]), bco = k.makeMessageType("aiserver.v1.SetAgentStoreDocumentVisibilityRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "document_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "visibility",
            kind: "enum",
            T: k.getEnumType(CVi)
        }
    ]), yco = k.makeMessageType("aiserver.v1.SetAgentStoreDocumentVisibilityResponse", ()=>[
        {
            no: 1,
            name: "visibility",
            kind: "enum",
            T: k.getEnumType(CVi)
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), Sco = k.makeMessageType("aiserver.v1.WriteAgentStoreDocumentRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "document_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source",
            kind: "scalar",
            T: 9
        }
    ]), kco = k.makeMessageType("aiserver.v1.WriteAgentStoreDocumentResponse", ()=>[
        {
            no: 1,
            name: "etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), wco = k.makeMessageType("aiserver.v1.MintAgentStoreTokenRequest", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "share_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "source",
            kind: "message",
            T: TWt
        }
    ]), Cco = k.makeMessageType("aiserver.v1.MintAgentStoreTokenResponse", ()=>[
        {
            no: 1,
            name: "token",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "agent_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "store_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Tco = k.makeMessageType("aiserver.v1.AgentStoreFileEntry", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "last_modified_ms",
            kind: "scalar",
            T: 3
        }
    ]), Eco = k.makeMessageType("aiserver.v1.ListAgentStoreFilesRequest", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "share_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "tombstone_mode",
            kind: "enum",
            T: k.getEnumType(uco)
        },
        {
            no: 5,
            name: "tombstones_since_ms",
            kind: "scalar",
            T: 3
        }
    ]), xco = k.makeMessageType("aiserver.v1.ListAgentStoreFilesResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: Tco,
            repeated: !0
        },
        {
            no: 2,
            name: "tombstones",
            kind: "message",
            T: TVi,
            repeated: !0
        },
        {
            no: 3,
            name: "listing_complete",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "tombstone_watermark_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "tombstone_floor_ms",
            kind: "scalar",
            T: 3
        }
    ]), TVi = k.makeMessageType("aiserver.v1.AgentStoreTombstone", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tombstone_etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "deleted_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), Ico = k.makeMessageType("aiserver.v1.ListAgentStoreDirectoryRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "share_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "page_size",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "prefer_complete_flat_store",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "tombstone_mode",
            kind: "enum",
            T: k.getEnumType(uco)
        },
        {
            no: 8,
            name: "tombstones_since_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 9,
            name: "if_version_equal",
            kind: "scalar",
            T: 9
        }
    ]), Aco = k.makeMessageType("aiserver.v1.ListAgentStoreDirectoryResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: Tco,
            repeated: !0
        },
        {
            no: 2,
            name: "subdirs",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "next_page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(q3d)
        },
        {
            no: 5,
            name: "tombstones",
            kind: "message",
            T: TVi,
            repeated: !0
        },
        {
            no: 6,
            name: "removed_subdirs",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "listing_complete",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "tombstone_watermark_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 9,
            name: "tombstone_floor_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 10,
            name: "version",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "not_modified",
            kind: "scalar",
            T: 8
        }
    ]), Rco = k.makeMessageType("aiserver.v1.CheckAgentStoreVersionsRequest", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: eBd,
            repeated: !0
        }
    ]), eBd = k.makeMessageType("aiserver.v1.CheckAgentStoreVersionsRequest.Entry", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "share_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "token",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "version",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "prefer_complete_flat_store",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "CheckAgentStoreVersionsRequest_Entry"
}), Dco = k.makeMessageType("aiserver.v1.CheckAgentStoreVersionsResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: nBd,
            repeated: !0
        }
    ]), tBd = k.makeEnum("aiserver.v1.CheckAgentStoreVersionsResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_UNCHANGED",
        localName: "UNCHANGED"
    },
    {
        no: 2,
        name: "STATUS_CHANGED",
        localName: "CHANGED"
    },
    {
        no: 3,
        name: "STATUS_UNAUTHORIZED",
        localName: "UNAUTHORIZED"
    },
    {
        no: 4,
        name: "STATUS_ERROR",
        localName: "ERROR"
    }
]), nBd = k.makeMessageType("aiserver.v1.CheckAgentStoreVersionsResponse.Result", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: k.getEnumType(tBd)
        },
        {
            no: 3,
            name: "version",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "tombstone_watermark_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "tombstone_floor_ms",
            kind: "scalar",
            T: 3
        }
    ], {
    localName: "CheckAgentStoreVersionsResponse_Result"
}), iBd = k.makeMessageType("aiserver.v1.AgentStoreReadInstruction", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), Mco = k.makeMessageType("aiserver.v1.PresignAgentStoreReadsRequest", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "rel_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "share_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Pco = k.makeMessageType("aiserver.v1.PresignAgentStoreReadsResponse", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "message",
            T: iBd,
            repeated: !0
        }
    ]), rBd = k.makeMessageType("aiserver.v1.AgentStoreMultipartUploadPartDescriptor", ()=>[
        {
            no: 1,
            name: "part_number",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "offset_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "checksum_sha256",
            kind: "scalar",
            T: 12
        }
    ]), sBd = k.makeMessageType("aiserver.v1.AgentStoreWriteFileEntry", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "base_etag",
            kind: "scalar",
            T: 9,
            oneof: "precondition"
        },
        {
            no: 5,
            name: "expect_absent",
            kind: "scalar",
            T: 8,
            oneof: "precondition"
        },
        {
            no: 6,
            name: "multipart_parts",
            kind: "message",
            T: rBd,
            repeated: !0
        }
    ]), oBd = k.makeMessageType("aiserver.v1.AgentStoreConflictWriteInstruction", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 4,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "multipart",
            kind: "message",
            T: Lco,
            opt: !0
        }
    ]), aBd = k.makeMessageType("aiserver.v1.AgentStoreLockRedirect", ()=>[
        {
            no: 1,
            name: "holder",
            kind: "message",
            T: HNn,
            opt: !0
        },
        {
            no: 2,
            name: "conflict_rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "lock_expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), cBd = k.makeMessageType("aiserver.v1.AgentStoreWriteInstruction", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 4,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "conflict",
            kind: "message",
            T: oBd,
            opt: !0
        },
        {
            no: 6,
            name: "lock_redirect",
            kind: "message",
            T: aBd,
            opt: !0
        },
        {
            no: 7,
            name: "multipart",
            kind: "message",
            T: Lco,
            opt: !0
        },
        {
            no: 8,
            name: "primary_precondition_failed",
            kind: "scalar",
            T: 8
        }
    ]), Lco = k.makeMessageType("aiserver.v1.AgentStoreMultipartWriteInstruction", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: EVi
        },
        {
            no: 2,
            name: "parts",
            kind: "message",
            T: lBd,
            repeated: !0
        },
        {
            no: 3,
            name: "part_urls_expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), lBd = k.makeMessageType("aiserver.v1.AgentStoreMultipartUploadPartInstruction", ()=>[
        {
            no: 1,
            name: "part_number",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 4,
            name: "offset_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        }
    ]), EVi = k.makeMessageType("aiserver.v1.AgentStoreMultipartUploadContext", ()=>[
        {
            no: 1,
            name: "upload_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "expected_part_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "base_etag",
            kind: "scalar",
            T: 9,
            oneof: "precondition"
        },
        {
            no: 8,
            name: "expect_absent",
            kind: "scalar",
            T: 8,
            oneof: "precondition"
        },
        {
            no: 9,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), Nco = k.makeMessageType("aiserver.v1.PresignAgentStoreWritesRequest", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: sBd,
            repeated: !0
        },
        {
            no: 3,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "lock_token",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "lock_client_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "supports_signed_content_length",
            kind: "scalar",
            T: 8
        }
    ]), Oco = k.makeMessageType("aiserver.v1.PresignAgentStoreWritesResponse", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "message",
            T: cBd,
            repeated: !0
        }
    ]), uBd = k.makeMessageType("aiserver.v1.AgentStoreMultipartUploadedPart", ()=>[
        {
            no: 1,
            name: "part_number",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "checksum_sha256",
            kind: "scalar",
            T: 12
        }
    ]), dBd = k.makeMessageType("aiserver.v1.AgentStoreMultipartWriteCompletion", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: EVi
        },
        {
            no: 2,
            name: "parts",
            kind: "message",
            T: uBd,
            repeated: !0
        }
    ]), Fco = k.makeMessageType("aiserver.v1.CompleteAgentStoreMultipartWritesRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "completions",
            kind: "message",
            T: dBd,
            repeated: !0
        }
    ]), hBd = k.makeMessageType("aiserver.v1.AgentStoreMultipartWriteSuccess", ()=>[
        {
            no: 1,
            name: "etag",
            kind: "scalar",
            T: 9
        }
    ]), Bco = k.makeMessageType("aiserver.v1.AgentStoreMultipartOperationFailure", ()=>[
        {
            no: 1,
            name: "code",
            kind: "enum",
            T: k.getEnumType(z3d)
        }
    ]), pBd = k.makeMessageType("aiserver.v1.AgentStoreMultipartWriteResult", ()=>[
        {
            no: 1,
            name: "input_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "success",
            kind: "message",
            T: hBd,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: Bco,
            oneof: "outcome"
        }
    ]), Uco = k.makeMessageType("aiserver.v1.CompleteAgentStoreMultipartWritesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: pBd,
            repeated: !0
        }
    ]), mBd = k.makeMessageType("aiserver.v1.AgentStoreMultipartWriteAbort", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: EVi
        }
    ]), $co = k.makeMessageType("aiserver.v1.AbortAgentStoreMultipartWritesRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uploads",
            kind: "message",
            T: mBd,
            repeated: !0
        }
    ]), gBd = k.makeMessageType("aiserver.v1.AgentStoreMultipartAbortSuccess", ()=>[
        {
            no: 1,
            name: "already_finished",
            kind: "scalar",
            T: 8
        }
    ]), fBd = k.makeMessageType("aiserver.v1.AgentStoreMultipartAbortResult", ()=>[
        {
            no: 1,
            name: "input_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "success",
            kind: "message",
            T: gBd,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: Bco,
            oneof: "outcome"
        }
    ]), Hco = k.makeMessageType("aiserver.v1.AbortAgentStoreMultipartWritesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: fBd,
            repeated: !0
        }
    ]), HNn = k.makeMessageType("aiserver.v1.AgentStoreFileLockHolder", ()=>[
        {
            no: 1,
            name: "client_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pid",
            kind: "scalar",
            T: 13
        }
    ]), Wco = k.makeMessageType("aiserver.v1.AcquireAgentStoreFileLockRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "holder",
            kind: "message",
            T: HNn
        },
        {
            no: 4,
            name: "acquisition_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "ttl_seconds",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), Gco = k.makeMessageType("aiserver.v1.AcquireAgentStoreFileLockResponse", ()=>[
        {
            no: 1,
            name: "acquired",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "lock_token",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "current_holder",
            kind: "message",
            T: HNn,
            opt: !0
        },
        {
            no: 4,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), Vco = k.makeMessageType("aiserver.v1.RenewAgentStoreFileLockRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "lock_token",
            kind: "scalar",
            T: 9
        }
    ]), jco = k.makeMessageType("aiserver.v1.RenewAgentStoreFileLockResponse", ()=>[
        {
            no: 1,
            name: "renewed",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), qco = k.makeMessageType("aiserver.v1.ReleaseAgentStoreFileLockRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "lock_token",
            kind: "scalar",
            T: 9
        }
    ]), zco = k.makeMessageType("aiserver.v1.ReleaseAgentStoreFileLockResponse", ()=>[
        {
            no: 1,
            name: "released",
            kind: "scalar",
            T: 8
        }
    ]), Kco = k.makeMessageType("aiserver.v1.GetAgentStoreFileLockRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "rel_path",
            kind: "scalar",
            T: 9
        }
    ]), Yco = k.makeMessageType("aiserver.v1.GetAgentStoreFileLockResponse", ()=>[
        {
            no: 1,
            name: "held",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "holder",
            kind: "message",
            T: HNn,
            opt: !0
        },
        {
            no: 3,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), vBd = k.makeMessageType("aiserver.v1.AgentStoreDeleteFileEntry", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "base_etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "mutation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "delete_current",
            kind: "scalar",
            T: 8
        }
    ]), _Bd = k.makeMessageType("aiserver.v1.AgentStoreDeleteFileResult", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: k.getEnumType(K3d)
        },
        {
            no: 3,
            name: "tombstone_etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "current_etag",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Xco = k.makeMessageType("aiserver.v1.DeleteAgentStoreFilesRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: vBd,
            repeated: !0
        }
    ]), Zco = k.makeMessageType("aiserver.v1.DeleteAgentStoreFilesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: _Bd,
            repeated: !0
        }
    ]), Qco = k.makeMessageType("aiserver.v1.RmdirAgentStoreRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "share_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "rel_path",
            kind: "scalar",
            T: 9
        }
    ]), Jco = k.makeMessageType("aiserver.v1.RmdirAgentStoreResponse", []), bBd = k.makeMessageType("aiserver.v1.AgentStoreUndeleteFileEntry", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tombstone_etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "mutation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), yBd = k.makeMessageType("aiserver.v1.AgentStoreUndeleteFileResult", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: k.getEnumType(Y3d)
        },
        {
            no: 3,
            name: "restored_etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "current_etag",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), elo = k.makeMessageType("aiserver.v1.UndeleteAgentStoreFilesRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: bBd,
            repeated: !0
        }
    ]), tlo = k.makeMessageType("aiserver.v1.UndeleteAgentStoreFilesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: yBd,
            repeated: !0
        }
    ]), nlo = k.makeMessageType("aiserver.v1.ListAgentStoreTombstonesRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "page_size",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "page_token",
            kind: "scalar",
            T: 9
        }
    ]), ilo = k.makeMessageType("aiserver.v1.ListAgentStoreTombstonesResponse", ()=>[
        {
            no: 1,
            name: "tombstones",
            kind: "message",
            T: TVi,
            repeated: !0
        },
        {
            no: 2,
            name: "next_page_token",
            kind: "scalar",
            T: 9
        }
    ]), SBd = k.makeMessageType("aiserver.v1.SharedAgentStoreInfo", ()=>[
        {
            no: 1,
            name: "share_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path_prefix",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "visibility",
            kind: "enum",
            T: k.getEnumType(dco)
        },
        {
            no: 4,
            name: "created_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 5,
            name: "revoked_at_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ]), rlo = k.makeMessageType("aiserver.v1.ShareAgentStoreRequest", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path_prefix",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "source",
            kind: "message",
            T: TWt
        }
    ]), slo = k.makeMessageType("aiserver.v1.ShareAgentStoreResponse", ()=>[
        {
            no: 1,
            name: "share_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "share_url",
            kind: "scalar",
            T: 9
        }
    ]), olo = k.makeMessageType("aiserver.v1.UnshareAgentStoreRequest", ()=>[
        {
            no: 1,
            name: "share_id",
            kind: "scalar",
            T: 9
        }
    ]), alo = k.makeMessageType("aiserver.v1.UnshareAgentStoreResponse", []), clo = k.makeMessageType("aiserver.v1.ListSharedAgentStoresRequest", ()=>[
        {
            no: 1,
            name: "limit",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "created_before_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 3,
            name: "owning_user_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "search_query",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "scope",
            kind: "enum",
            T: k.getEnumType(X3d),
            opt: !0
        },
        {
            no: 6,
            name: "created_before_share_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), kBd = k.makeMessageType("aiserver.v1.SharedAgentStoreListing", ()=>[
        {
            no: 1,
            name: "share_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "path_prefix",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "visibility",
            kind: "enum",
            T: k.getEnumType(dco)
        },
        {
            no: 6,
            name: "created_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 7,
            name: "revoked_at_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 8,
            name: "owning_user_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "owning_team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "owner_display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "store_kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(lco)
        },
        {
            no: 13,
            name: "source",
            kind: "message",
            T: TWt
        }
    ]), llo = k.makeMessageType("aiserver.v1.ListSharedAgentStoresResponse", ()=>[
        {
            no: 1,
            name: "listings",
            kind: "message",
            T: kBd,
            repeated: !0
        },
        {
            no: 2,
            name: "has_more",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "next_created_before_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 4,
            name: "next_created_before_share_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);

}
