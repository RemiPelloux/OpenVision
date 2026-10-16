import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var P$a, M$a, dEm, ZXr, D$a, hEm, pEm, mEm, gEm, N$a, fEm, L$a, LGt, O$a, vEm, F$a, B$a, _Em, U$a, j$a, $$a, bEm, H$a, W$a, G$a, q$a, QXr, z$a, V$a, K$a, Y$a, JXr, X$a, Z$a, Q$a, yEm, J$a, SEm, kEm, wEm, eHa, tHa, CEm, TEm, EEm, IEm, xEm, nHa, AEm, eZr, iHa, rHa, REm, PEm, sHa, MEm, oHa, DEm, aHa, NEm, lHa, LEm, OEm, cHa, bwi, uHa, dHa, hHa, pHa, mHa, gHa, fHa, vHa, FEm, BEm, _Ha, bHa, yHa, SHa, UEm, jEm, kHa, wHa, CHa, THa, $Em, EHa, IHa, xHa, AHa, RHa, HEm, PHa;
export { $$a, $Em, AEm, AHa, B$a, BEm, CEm, CHa, D$a, DEm, EEm, EHa, F$a, FEm, G$a, H$a, HEm, IEm, IHa, J$a, JXr, K$a, L$a, LEm, LGt, M$a, MEm, N$a, NEm, O$a, OEm, P$a, PEm, PHa, Q$a, QXr, REm, RHa, SEm, SHa, TEm, THa, U$a, UEm, V$a, W$a, X$a, Y$a, Z$a, ZXr, _Em, _Ha, aHa, bEm, bHa, bwi, cHa, dEm, dHa, eHa, eZr, fEm, fHa, gEm, gHa, hEm, hHa, iHa, j$a, jEm, kEm, kHa, lHa, mEm, mHa, nHa, oHa, pEm, pHa, q$a, rHa, sHa, tHa, uHa, vEm, vHa, wEm, wHa, xEm, xHa, yEm, yHa, z$a };
var __wakaru_tZr_initialized = false;
export function tZr() {
if (__wakaru_tZr_initialized) return;
__wakaru_tZr_initialized = true;
"use strict";
E(), hr(), P$a = x.makeEnum("aiserver.v1.AgentStoreKind", [
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
]), M$a = x.makeEnum("aiserver.v1.AgentStoreSourceKind", [
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
]), dEm = x.makeEnum("aiserver.v1.AgentStoreEntryKind", [
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
]), ZXr = x.makeEnum("aiserver.v1.AgentStoreDocumentVisibility", [
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
]), D$a = x.makeEnum("aiserver.v1.AgentStoreTombstoneMode", [
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
]), hEm = x.makeEnum("aiserver.v1.AgentStoreDirectoryListingMode", [
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
]), pEm = x.makeEnum("aiserver.v1.AgentStoreMultipartOperationFailureCode", [
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
]), mEm = x.makeEnum("aiserver.v1.AgentStoreDeleteFileStatus", [
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
]), gEm = x.makeEnum("aiserver.v1.AgentStoreUndeleteFileStatus", [
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
]), N$a = x.makeEnum("aiserver.v1.AgentStoreShareVisibility", [
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
]), fEm = x.makeEnum("aiserver.v1.ListSharedAgentStoresScope", [
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
]), L$a = x.makeMessageType("aiserver.v1.ListAgentStoresRequest", ()=>[
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
    ]), LGt = x.makeMessageType("aiserver.v1.AgentStoreSourceRef", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(M$a)
        },
        {
            no: 2,
            name: "source_id",
            kind: "scalar",
            T: 9
        }
    ]), O$a = x.makeMessageType("aiserver.v1.AgentStoreMount", ()=>[
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
            T: LGt,
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
    ]), vEm = x.makeMessageType("aiserver.v1.AgentStore", ()=>[
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
            T: $Em,
            repeated: !0
        },
        {
            no: 10,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(P$a)
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
            T: LGt
        }
    ]), F$a = x.makeMessageType("aiserver.v1.ListAgentStoresResponse", ()=>[
        {
            no: 1,
            name: "stores",
            kind: "message",
            T: vEm,
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
    ]), B$a = x.makeMessageType("aiserver.v1.ListAgentStoreEntriesRequest", ()=>[
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
    ]), _Em = x.makeMessageType("aiserver.v1.AgentStoreEntry", ()=>[
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
            T: x.getEnumType(dEm)
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
    ]), U$a = x.makeMessageType("aiserver.v1.ListAgentStoreEntriesResponse", ()=>[
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
            T: _Em,
            repeated: !0
        }
    ]), j$a = x.makeMessageType("aiserver.v1.ReadAgentStoreFileRequest", ()=>[
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
    ]), $$a = x.makeMessageType("aiserver.v1.ReadAgentStoreFileResponse", ()=>[
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
            T: bEm,
            opt: !0
        }
    ]), bEm = x.makeMessageType("aiserver.v1.AgentStoreDocumentOwnerView", ()=>[
        {
            no: 1,
            name: "visibility",
            kind: "enum",
            T: x.getEnumType(ZXr)
        },
        {
            no: 2,
            name: "can_share_to_team",
            kind: "scalar",
            T: 8
        }
    ]), H$a = x.makeMessageType("aiserver.v1.SetAgentStoreDocumentVisibilityRequest", ()=>[
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
            T: x.getEnumType(ZXr)
        }
    ]), W$a = x.makeMessageType("aiserver.v1.SetAgentStoreDocumentVisibilityResponse", ()=>[
        {
            no: 1,
            name: "visibility",
            kind: "enum",
            T: x.getEnumType(ZXr)
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), G$a = x.makeMessageType("aiserver.v1.WriteAgentStoreDocumentRequest", ()=>[
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
    ]), q$a = x.makeMessageType("aiserver.v1.WriteAgentStoreDocumentResponse", ()=>[
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
    ]), QXr = x.makeMessageType("aiserver.v1.MintAgentStoreTokenRequest", ()=>[
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
            T: LGt
        }
    ]), z$a = x.makeMessageType("aiserver.v1.MintAgentStoreTokenResponse", ()=>[
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
    ]), V$a = x.makeMessageType("aiserver.v1.AgentStoreFileEntry", ()=>[
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
    ]), K$a = x.makeMessageType("aiserver.v1.ListAgentStoreFilesRequest", ()=>[
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
            T: x.getEnumType(D$a)
        },
        {
            no: 5,
            name: "tombstones_since_ms",
            kind: "scalar",
            T: 3
        }
    ]), Y$a = x.makeMessageType("aiserver.v1.ListAgentStoreFilesResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: V$a,
            repeated: !0
        },
        {
            no: 2,
            name: "tombstones",
            kind: "message",
            T: JXr,
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
    ]), JXr = x.makeMessageType("aiserver.v1.AgentStoreTombstone", ()=>[
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
    ]), X$a = x.makeMessageType("aiserver.v1.ListAgentStoreDirectoryRequest", ()=>[
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
            T: x.getEnumType(D$a)
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
    ]), Z$a = x.makeMessageType("aiserver.v1.ListAgentStoreDirectoryResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: V$a,
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
            T: x.getEnumType(hEm)
        },
        {
            no: 5,
            name: "tombstones",
            kind: "message",
            T: JXr,
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
    ]), Q$a = x.makeMessageType("aiserver.v1.CheckAgentStoreVersionsRequest", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: yEm,
            repeated: !0
        }
    ]), yEm = x.makeMessageType("aiserver.v1.CheckAgentStoreVersionsRequest.Entry", ()=>[
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
}), J$a = x.makeMessageType("aiserver.v1.CheckAgentStoreVersionsResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: kEm,
            repeated: !0
        }
    ]), SEm = x.makeEnum("aiserver.v1.CheckAgentStoreVersionsResponse.Status", [
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
]), kEm = x.makeMessageType("aiserver.v1.CheckAgentStoreVersionsResponse.Result", ()=>[
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
            T: x.getEnumType(SEm)
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
}), wEm = x.makeMessageType("aiserver.v1.AgentStoreReadInstruction", ()=>[
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
    ]), eHa = x.makeMessageType("aiserver.v1.PresignAgentStoreReadsRequest", ()=>[
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
    ]), tHa = x.makeMessageType("aiserver.v1.PresignAgentStoreReadsResponse", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "message",
            T: wEm,
            repeated: !0
        }
    ]), CEm = x.makeMessageType("aiserver.v1.AgentStoreMultipartUploadPartDescriptor", ()=>[
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
    ]), TEm = x.makeMessageType("aiserver.v1.AgentStoreWriteFileEntry", ()=>[
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
            T: CEm,
            repeated: !0
        }
    ]), EEm = x.makeMessageType("aiserver.v1.AgentStoreConflictWriteInstruction", ()=>[
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
            T: nHa,
            opt: !0
        }
    ]), IEm = x.makeMessageType("aiserver.v1.AgentStoreLockRedirect", ()=>[
        {
            no: 1,
            name: "holder",
            kind: "message",
            T: bwi,
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
    ]), xEm = x.makeMessageType("aiserver.v1.AgentStoreWriteInstruction", ()=>[
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
            T: EEm,
            opt: !0
        },
        {
            no: 6,
            name: "lock_redirect",
            kind: "message",
            T: IEm,
            opt: !0
        },
        {
            no: 7,
            name: "multipart",
            kind: "message",
            T: nHa,
            opt: !0
        },
        {
            no: 8,
            name: "primary_precondition_failed",
            kind: "scalar",
            T: 8
        }
    ]), nHa = x.makeMessageType("aiserver.v1.AgentStoreMultipartWriteInstruction", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: eZr
        },
        {
            no: 2,
            name: "parts",
            kind: "message",
            T: AEm,
            repeated: !0
        },
        {
            no: 3,
            name: "part_urls_expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), AEm = x.makeMessageType("aiserver.v1.AgentStoreMultipartUploadPartInstruction", ()=>[
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
    ]), eZr = x.makeMessageType("aiserver.v1.AgentStoreMultipartUploadContext", ()=>[
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
    ]), iHa = x.makeMessageType("aiserver.v1.PresignAgentStoreWritesRequest", ()=>[
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
            T: TEm,
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
    ]), rHa = x.makeMessageType("aiserver.v1.PresignAgentStoreWritesResponse", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "message",
            T: xEm,
            repeated: !0
        }
    ]), REm = x.makeMessageType("aiserver.v1.AgentStoreMultipartUploadedPart", ()=>[
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
    ]), PEm = x.makeMessageType("aiserver.v1.AgentStoreMultipartWriteCompletion", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: eZr
        },
        {
            no: 2,
            name: "parts",
            kind: "message",
            T: REm,
            repeated: !0
        }
    ]), sHa = x.makeMessageType("aiserver.v1.CompleteAgentStoreMultipartWritesRequest", ()=>[
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
            T: PEm,
            repeated: !0
        }
    ]), MEm = x.makeMessageType("aiserver.v1.AgentStoreMultipartWriteSuccess", ()=>[
        {
            no: 1,
            name: "etag",
            kind: "scalar",
            T: 9
        }
    ]), oHa = x.makeMessageType("aiserver.v1.AgentStoreMultipartOperationFailure", ()=>[
        {
            no: 1,
            name: "code",
            kind: "enum",
            T: x.getEnumType(pEm)
        }
    ]), DEm = x.makeMessageType("aiserver.v1.AgentStoreMultipartWriteResult", ()=>[
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
            T: MEm,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: oHa,
            oneof: "outcome"
        }
    ]), aHa = x.makeMessageType("aiserver.v1.CompleteAgentStoreMultipartWritesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: DEm,
            repeated: !0
        }
    ]), NEm = x.makeMessageType("aiserver.v1.AgentStoreMultipartWriteAbort", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: eZr
        }
    ]), lHa = x.makeMessageType("aiserver.v1.AbortAgentStoreMultipartWritesRequest", ()=>[
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
            T: NEm,
            repeated: !0
        }
    ]), LEm = x.makeMessageType("aiserver.v1.AgentStoreMultipartAbortSuccess", ()=>[
        {
            no: 1,
            name: "already_finished",
            kind: "scalar",
            T: 8
        }
    ]), OEm = x.makeMessageType("aiserver.v1.AgentStoreMultipartAbortResult", ()=>[
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
            T: LEm,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: oHa,
            oneof: "outcome"
        }
    ]), cHa = x.makeMessageType("aiserver.v1.AbortAgentStoreMultipartWritesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: OEm,
            repeated: !0
        }
    ]), bwi = x.makeMessageType("aiserver.v1.AgentStoreFileLockHolder", ()=>[
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
    ]), uHa = x.makeMessageType("aiserver.v1.AcquireAgentStoreFileLockRequest", ()=>[
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
            T: bwi
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
    ]), dHa = x.makeMessageType("aiserver.v1.AcquireAgentStoreFileLockResponse", ()=>[
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
            T: bwi,
            opt: !0
        },
        {
            no: 4,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), hHa = x.makeMessageType("aiserver.v1.RenewAgentStoreFileLockRequest", ()=>[
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
    ]), pHa = x.makeMessageType("aiserver.v1.RenewAgentStoreFileLockResponse", ()=>[
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
    ]), mHa = x.makeMessageType("aiserver.v1.ReleaseAgentStoreFileLockRequest", ()=>[
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
    ]), gHa = x.makeMessageType("aiserver.v1.ReleaseAgentStoreFileLockResponse", ()=>[
        {
            no: 1,
            name: "released",
            kind: "scalar",
            T: 8
        }
    ]), fHa = x.makeMessageType("aiserver.v1.GetAgentStoreFileLockRequest", ()=>[
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
    ]), vHa = x.makeMessageType("aiserver.v1.GetAgentStoreFileLockResponse", ()=>[
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
            T: bwi,
            opt: !0
        },
        {
            no: 3,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), FEm = x.makeMessageType("aiserver.v1.AgentStoreDeleteFileEntry", ()=>[
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
    ]), BEm = x.makeMessageType("aiserver.v1.AgentStoreDeleteFileResult", ()=>[
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
            T: x.getEnumType(mEm)
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
    ]), _Ha = x.makeMessageType("aiserver.v1.DeleteAgentStoreFilesRequest", ()=>[
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
            T: FEm,
            repeated: !0
        }
    ]), bHa = x.makeMessageType("aiserver.v1.DeleteAgentStoreFilesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: BEm,
            repeated: !0
        }
    ]), yHa = x.makeMessageType("aiserver.v1.RmdirAgentStoreRequest", ()=>[
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
    ]), SHa = x.makeMessageType("aiserver.v1.RmdirAgentStoreResponse", []), UEm = x.makeMessageType("aiserver.v1.AgentStoreUndeleteFileEntry", ()=>[
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
    ]), jEm = x.makeMessageType("aiserver.v1.AgentStoreUndeleteFileResult", ()=>[
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
            T: x.getEnumType(gEm)
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
    ]), kHa = x.makeMessageType("aiserver.v1.UndeleteAgentStoreFilesRequest", ()=>[
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
            T: UEm,
            repeated: !0
        }
    ]), wHa = x.makeMessageType("aiserver.v1.UndeleteAgentStoreFilesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: jEm,
            repeated: !0
        }
    ]), CHa = x.makeMessageType("aiserver.v1.ListAgentStoreTombstonesRequest", ()=>[
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
    ]), THa = x.makeMessageType("aiserver.v1.ListAgentStoreTombstonesResponse", ()=>[
        {
            no: 1,
            name: "tombstones",
            kind: "message",
            T: JXr,
            repeated: !0
        },
        {
            no: 2,
            name: "next_page_token",
            kind: "scalar",
            T: 9
        }
    ]), $Em = x.makeMessageType("aiserver.v1.SharedAgentStoreInfo", ()=>[
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
            T: x.getEnumType(N$a)
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
    ]), EHa = x.makeMessageType("aiserver.v1.ShareAgentStoreRequest", ()=>[
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
            T: LGt
        }
    ]), IHa = x.makeMessageType("aiserver.v1.ShareAgentStoreResponse", ()=>[
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
    ]), xHa = x.makeMessageType("aiserver.v1.UnshareAgentStoreRequest", ()=>[
        {
            no: 1,
            name: "share_id",
            kind: "scalar",
            T: 9
        }
    ]), AHa = x.makeMessageType("aiserver.v1.UnshareAgentStoreResponse", []), RHa = x.makeMessageType("aiserver.v1.ListSharedAgentStoresRequest", ()=>[
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
            T: x.getEnumType(fEm),
            opt: !0
        },
        {
            no: 6,
            name: "created_before_share_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), HEm = x.makeMessageType("aiserver.v1.SharedAgentStoreListing", ()=>[
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
            T: x.getEnumType(N$a)
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
            T: x.getEnumType(P$a)
        },
        {
            no: 13,
            name: "source",
            kind: "message",
            T: LGt
        }
    ]), PHa = x.makeMessageType("aiserver.v1.ListSharedAgentStoresResponse", ()=>[
        {
            no: 1,
            name: "listings",
            kind: "message",
            T: HEm,
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
