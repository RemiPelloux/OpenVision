import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var J9, USe, xSe, yE, X9, FSe, WSe, BSe, GSe, Q9, VSe, $Se, ju, Z9, jSe, HSe, qSe, KSe, zSe, YSe, JSe, XSe, QSe, ZSe, eye, tye, nye, rye, eL, sye, iye, wE, aye, oye, cye, lye, dye, uye, mye, pye, hye, gye, fye, _ye, vye, Tye, kye, tL, Sye, EE, yye, wye, Eye, bye, Rye, Cye, nL, Iye, Aye, Mye, Pye, Nye, Dye, Oye, Nf, Lye, Uye, xye, Fye, Wye, Bye, Gye, Vye, $ye, jye, Hye, qye, Kye, zye, Yye, Jye, Xye, Qye, Zye, ewe, twe, nwe, rwe, swe, iwe, awe, owe, cwe;
export { $Se, $ye, Aye, BSe, Bye, Cye, Dye, EE, Eye, FSe, Fye, GSe, Gye, HSe, Hye, Iye, J9, JSe, Jye, KSe, Kye, Lye, Mye, Nf, Nye, Oye, Pye, Q9, QSe, Qye, Rye, Sye, Tye, USe, Uye, VSe, Vye, WSe, Wye, X9, XSe, Xye, YSe, Yye, Z9, ZSe, Zye, _ye, awe, aye, bye, cwe, cye, dye, eL, ewe, eye, fye, gye, hye, iwe, iye, jSe, ju, jye, kye, lye, mye, nL, nwe, nye, owe, oye, pye, qSe, qye, rwe, rye, swe, sye, tL, twe, tye, uye, vye, wE, wye, xSe, xye, yE, yye, zSe, zye };
var __wakaru_lwe_initialized = false;
export function lwe() {
if (__wakaru_lwe_initialized) return;
__wakaru_lwe_initialized = true;
"use strict";
h(), F(), J9 = c.makeEnum("aiserver.v1.AgentStoreKind", [
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
]), USe = c.makeEnum("aiserver.v1.AgentStoreSourceKind", [
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
]), xSe = c.makeEnum("aiserver.v1.AgentStoreEntryKind", [
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
]), yE = c.makeEnum("aiserver.v1.AgentStoreDocumentVisibility", [
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
]), X9 = c.makeEnum("aiserver.v1.AgentStoreTombstoneMode", [
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
]), FSe = c.makeEnum("aiserver.v1.AgentStoreDirectoryListingMode", [
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
]), WSe = c.makeEnum("aiserver.v1.AgentStoreMultipartOperationFailureCode", [
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
]), BSe = c.makeEnum("aiserver.v1.AgentStoreDeleteFileStatus", [
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
]), GSe = c.makeEnum("aiserver.v1.AgentStoreUndeleteFileStatus", [
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
]), Q9 = c.makeEnum("aiserver.v1.AgentStoreShareVisibility", [
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
]), VSe = c.makeEnum("aiserver.v1.ListSharedAgentStoresScope", [
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
]), $Se = c.makeMessageType("aiserver.v1.ListAgentStoresRequest", ()=>[
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
    ]), ju = c.makeMessageType("aiserver.v1.AgentStoreSourceRef", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: c.getEnumType(USe)
        },
        {
            no: 2,
            name: "source_id",
            kind: "scalar",
            T: 9
        }
    ]), Z9 = c.makeMessageType("aiserver.v1.AgentStoreMount", ()=>[
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
            T: ju,
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
    ]), jSe = c.makeMessageType("aiserver.v1.AgentStore", ()=>[
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
            T: twe,
            repeated: !0
        },
        {
            no: 10,
            name: "kind",
            kind: "enum",
            T: c.getEnumType(J9)
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
            T: ju
        }
    ]), HSe = c.makeMessageType("aiserver.v1.ListAgentStoresResponse", ()=>[
        {
            no: 1,
            name: "stores",
            kind: "message",
            T: jSe,
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
    ]), qSe = c.makeMessageType("aiserver.v1.ListAgentStoreEntriesRequest", ()=>[
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
    ]), KSe = c.makeMessageType("aiserver.v1.AgentStoreEntry", ()=>[
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
            T: c.getEnumType(xSe)
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
    ]), zSe = c.makeMessageType("aiserver.v1.ListAgentStoreEntriesResponse", ()=>[
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
            T: KSe,
            repeated: !0
        }
    ]), YSe = c.makeMessageType("aiserver.v1.ReadAgentStoreFileRequest", ()=>[
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
    ]), JSe = c.makeMessageType("aiserver.v1.ReadAgentStoreFileResponse", ()=>[
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
            T: XSe,
            opt: !0
        }
    ]), XSe = c.makeMessageType("aiserver.v1.AgentStoreDocumentOwnerView", ()=>[
        {
            no: 1,
            name: "visibility",
            kind: "enum",
            T: c.getEnumType(yE)
        },
        {
            no: 2,
            name: "can_share_to_team",
            kind: "scalar",
            T: 8
        }
    ]), QSe = c.makeMessageType("aiserver.v1.SetAgentStoreDocumentVisibilityRequest", ()=>[
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
            T: c.getEnumType(yE)
        }
    ]), ZSe = c.makeMessageType("aiserver.v1.SetAgentStoreDocumentVisibilityResponse", ()=>[
        {
            no: 1,
            name: "visibility",
            kind: "enum",
            T: c.getEnumType(yE)
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), eye = c.makeMessageType("aiserver.v1.WriteAgentStoreDocumentRequest", ()=>[
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
    ]), tye = c.makeMessageType("aiserver.v1.WriteAgentStoreDocumentResponse", ()=>[
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
    ]), nye = c.makeMessageType("aiserver.v1.MintAgentStoreTokenRequest", ()=>[
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
            T: ju
        }
    ]), rye = c.makeMessageType("aiserver.v1.MintAgentStoreTokenResponse", ()=>[
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
    ]), eL = c.makeMessageType("aiserver.v1.AgentStoreFileEntry", ()=>[
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
    ]), sye = c.makeMessageType("aiserver.v1.ListAgentStoreFilesRequest", ()=>[
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
            T: c.getEnumType(X9)
        },
        {
            no: 5,
            name: "tombstones_since_ms",
            kind: "scalar",
            T: 3
        }
    ]), iye = c.makeMessageType("aiserver.v1.ListAgentStoreFilesResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: eL,
            repeated: !0
        },
        {
            no: 2,
            name: "tombstones",
            kind: "message",
            T: wE,
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
    ]), wE = c.makeMessageType("aiserver.v1.AgentStoreTombstone", ()=>[
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
    ]), aye = c.makeMessageType("aiserver.v1.ListAgentStoreDirectoryRequest", ()=>[
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
            T: c.getEnumType(X9)
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
    ]), oye = c.makeMessageType("aiserver.v1.ListAgentStoreDirectoryResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: eL,
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
            T: c.getEnumType(FSe)
        },
        {
            no: 5,
            name: "tombstones",
            kind: "message",
            T: wE,
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
    ]), cye = c.makeMessageType("aiserver.v1.CheckAgentStoreVersionsRequest", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: lye,
            repeated: !0
        }
    ]), lye = c.makeMessageType("aiserver.v1.CheckAgentStoreVersionsRequest.Entry", ()=>[
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
}), dye = c.makeMessageType("aiserver.v1.CheckAgentStoreVersionsResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: mye,
            repeated: !0
        }
    ]), uye = c.makeEnum("aiserver.v1.CheckAgentStoreVersionsResponse.Status", [
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
]), mye = c.makeMessageType("aiserver.v1.CheckAgentStoreVersionsResponse.Result", ()=>[
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
            T: c.getEnumType(uye)
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
}), pye = c.makeMessageType("aiserver.v1.AgentStoreReadInstruction", ()=>[
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
    ]), hye = c.makeMessageType("aiserver.v1.PresignAgentStoreReadsRequest", ()=>[
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
    ]), gye = c.makeMessageType("aiserver.v1.PresignAgentStoreReadsResponse", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "message",
            T: pye,
            repeated: !0
        }
    ]), fye = c.makeMessageType("aiserver.v1.AgentStoreMultipartUploadPartDescriptor", ()=>[
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
    ]), _ye = c.makeMessageType("aiserver.v1.AgentStoreWriteFileEntry", ()=>[
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
            T: fye,
            repeated: !0
        }
    ]), vye = c.makeMessageType("aiserver.v1.AgentStoreConflictWriteInstruction", ()=>[
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
            T: tL,
            opt: !0
        }
    ]), Tye = c.makeMessageType("aiserver.v1.AgentStoreLockRedirect", ()=>[
        {
            no: 1,
            name: "holder",
            kind: "message",
            T: Nf,
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
    ]), kye = c.makeMessageType("aiserver.v1.AgentStoreWriteInstruction", ()=>[
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
            T: vye,
            opt: !0
        },
        {
            no: 6,
            name: "lock_redirect",
            kind: "message",
            T: Tye,
            opt: !0
        },
        {
            no: 7,
            name: "multipart",
            kind: "message",
            T: tL,
            opt: !0
        },
        {
            no: 8,
            name: "primary_precondition_failed",
            kind: "scalar",
            T: 8
        }
    ]), tL = c.makeMessageType("aiserver.v1.AgentStoreMultipartWriteInstruction", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: EE
        },
        {
            no: 2,
            name: "parts",
            kind: "message",
            T: Sye,
            repeated: !0
        },
        {
            no: 3,
            name: "part_urls_expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), Sye = c.makeMessageType("aiserver.v1.AgentStoreMultipartUploadPartInstruction", ()=>[
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
    ]), EE = c.makeMessageType("aiserver.v1.AgentStoreMultipartUploadContext", ()=>[
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
    ]), yye = c.makeMessageType("aiserver.v1.PresignAgentStoreWritesRequest", ()=>[
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
            T: _ye,
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
    ]), wye = c.makeMessageType("aiserver.v1.PresignAgentStoreWritesResponse", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "message",
            T: kye,
            repeated: !0
        }
    ]), Eye = c.makeMessageType("aiserver.v1.AgentStoreMultipartUploadedPart", ()=>[
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
    ]), bye = c.makeMessageType("aiserver.v1.AgentStoreMultipartWriteCompletion", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: EE
        },
        {
            no: 2,
            name: "parts",
            kind: "message",
            T: Eye,
            repeated: !0
        }
    ]), Rye = c.makeMessageType("aiserver.v1.CompleteAgentStoreMultipartWritesRequest", ()=>[
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
            T: bye,
            repeated: !0
        }
    ]), Cye = c.makeMessageType("aiserver.v1.AgentStoreMultipartWriteSuccess", ()=>[
        {
            no: 1,
            name: "etag",
            kind: "scalar",
            T: 9
        }
    ]), nL = c.makeMessageType("aiserver.v1.AgentStoreMultipartOperationFailure", ()=>[
        {
            no: 1,
            name: "code",
            kind: "enum",
            T: c.getEnumType(WSe)
        }
    ]), Iye = c.makeMessageType("aiserver.v1.AgentStoreMultipartWriteResult", ()=>[
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
            T: Cye,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: nL,
            oneof: "outcome"
        }
    ]), Aye = c.makeMessageType("aiserver.v1.CompleteAgentStoreMultipartWritesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: Iye,
            repeated: !0
        }
    ]), Mye = c.makeMessageType("aiserver.v1.AgentStoreMultipartWriteAbort", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: EE
        }
    ]), Pye = c.makeMessageType("aiserver.v1.AbortAgentStoreMultipartWritesRequest", ()=>[
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
            T: Mye,
            repeated: !0
        }
    ]), Nye = c.makeMessageType("aiserver.v1.AgentStoreMultipartAbortSuccess", ()=>[
        {
            no: 1,
            name: "already_finished",
            kind: "scalar",
            T: 8
        }
    ]), Dye = c.makeMessageType("aiserver.v1.AgentStoreMultipartAbortResult", ()=>[
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
            T: Nye,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: nL,
            oneof: "outcome"
        }
    ]), Oye = c.makeMessageType("aiserver.v1.AbortAgentStoreMultipartWritesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: Dye,
            repeated: !0
        }
    ]), Nf = c.makeMessageType("aiserver.v1.AgentStoreFileLockHolder", ()=>[
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
    ]), Lye = c.makeMessageType("aiserver.v1.AcquireAgentStoreFileLockRequest", ()=>[
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
            T: Nf
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
    ]), Uye = c.makeMessageType("aiserver.v1.AcquireAgentStoreFileLockResponse", ()=>[
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
            T: Nf,
            opt: !0
        },
        {
            no: 4,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), xye = c.makeMessageType("aiserver.v1.RenewAgentStoreFileLockRequest", ()=>[
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
    ]), Fye = c.makeMessageType("aiserver.v1.RenewAgentStoreFileLockResponse", ()=>[
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
    ]), Wye = c.makeMessageType("aiserver.v1.ReleaseAgentStoreFileLockRequest", ()=>[
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
    ]), Bye = c.makeMessageType("aiserver.v1.ReleaseAgentStoreFileLockResponse", ()=>[
        {
            no: 1,
            name: "released",
            kind: "scalar",
            T: 8
        }
    ]), Gye = c.makeMessageType("aiserver.v1.GetAgentStoreFileLockRequest", ()=>[
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
    ]), Vye = c.makeMessageType("aiserver.v1.GetAgentStoreFileLockResponse", ()=>[
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
            T: Nf,
            opt: !0
        },
        {
            no: 3,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), $ye = c.makeMessageType("aiserver.v1.AgentStoreDeleteFileEntry", ()=>[
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
    ]), jye = c.makeMessageType("aiserver.v1.AgentStoreDeleteFileResult", ()=>[
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
            T: c.getEnumType(BSe)
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
    ]), Hye = c.makeMessageType("aiserver.v1.DeleteAgentStoreFilesRequest", ()=>[
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
            T: $ye,
            repeated: !0
        }
    ]), qye = c.makeMessageType("aiserver.v1.DeleteAgentStoreFilesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: jye,
            repeated: !0
        }
    ]), Kye = c.makeMessageType("aiserver.v1.RmdirAgentStoreRequest", ()=>[
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
    ]), zye = c.makeMessageType("aiserver.v1.RmdirAgentStoreResponse", []), Yye = c.makeMessageType("aiserver.v1.AgentStoreUndeleteFileEntry", ()=>[
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
    ]), Jye = c.makeMessageType("aiserver.v1.AgentStoreUndeleteFileResult", ()=>[
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
            T: c.getEnumType(GSe)
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
    ]), Xye = c.makeMessageType("aiserver.v1.UndeleteAgentStoreFilesRequest", ()=>[
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
            T: Yye,
            repeated: !0
        }
    ]), Qye = c.makeMessageType("aiserver.v1.UndeleteAgentStoreFilesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: Jye,
            repeated: !0
        }
    ]), Zye = c.makeMessageType("aiserver.v1.ListAgentStoreTombstonesRequest", ()=>[
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
    ]), ewe = c.makeMessageType("aiserver.v1.ListAgentStoreTombstonesResponse", ()=>[
        {
            no: 1,
            name: "tombstones",
            kind: "message",
            T: wE,
            repeated: !0
        },
        {
            no: 2,
            name: "next_page_token",
            kind: "scalar",
            T: 9
        }
    ]), twe = c.makeMessageType("aiserver.v1.SharedAgentStoreInfo", ()=>[
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
            T: c.getEnumType(Q9)
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
    ]), nwe = c.makeMessageType("aiserver.v1.ShareAgentStoreRequest", ()=>[
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
            T: ju
        }
    ]), rwe = c.makeMessageType("aiserver.v1.ShareAgentStoreResponse", ()=>[
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
    ]), swe = c.makeMessageType("aiserver.v1.UnshareAgentStoreRequest", ()=>[
        {
            no: 1,
            name: "share_id",
            kind: "scalar",
            T: 9
        }
    ]), iwe = c.makeMessageType("aiserver.v1.UnshareAgentStoreResponse", []), awe = c.makeMessageType("aiserver.v1.ListSharedAgentStoresRequest", ()=>[
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
            T: c.getEnumType(VSe),
            opt: !0
        },
        {
            no: 6,
            name: "created_before_share_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), owe = c.makeMessageType("aiserver.v1.SharedAgentStoreListing", ()=>[
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
            T: c.getEnumType(Q9)
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
            T: c.getEnumType(J9)
        },
        {
            no: 13,
            name: "source",
            kind: "message",
            T: ju
        }
    ]), cwe = c.makeMessageType("aiserver.v1.ListSharedAgentStoresResponse", ()=>[
        {
            no: 1,
            name: "listings",
            kind: "message",
            T: owe,
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
