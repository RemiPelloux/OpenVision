require.r(exports);
require.d(exports, {
    AbortAgentStoreMultipartWritesRequest: ()=>AbortAgentStoreMultipartWritesRequest,
    AbortAgentStoreMultipartWritesResponse: ()=>AbortAgentStoreMultipartWritesResponse,
    AcquireAgentStoreFileLockRequest: ()=>AcquireAgentStoreFileLockRequest,
    AcquireAgentStoreFileLockResponse: ()=>AcquireAgentStoreFileLockResponse,
    AgentStore: ()=>AgentStore,
    AgentStoreConflictWriteInstruction: ()=>AgentStoreConflictWriteInstruction,
    AgentStoreDeleteFileEntry: ()=>AgentStoreDeleteFileEntry,
    AgentStoreDeleteFileResult: ()=>AgentStoreDeleteFileResult,
    AgentStoreDeleteFileStatus: ()=>AgentStoreDeleteFileStatus,
    AgentStoreDirectoryListingMode: ()=>AgentStoreDirectoryListingMode,
    AgentStoreDocumentOwnerView: ()=>AgentStoreDocumentOwnerView,
    AgentStoreDocumentVisibility: ()=>AgentStoreDocumentVisibility,
    AgentStoreEntry: ()=>AgentStoreEntry,
    AgentStoreEntryKind: ()=>AgentStoreEntryKind,
    AgentStoreFileEntry: ()=>AgentStoreFileEntry,
    AgentStoreFileLockHolder: ()=>AgentStoreFileLockHolder,
    AgentStoreKind: ()=>AgentStoreKind,
    AgentStoreLockRedirect: ()=>AgentStoreLockRedirect,
    AgentStoreMount: ()=>AgentStoreMount,
    AgentStoreMultipartAbortResult: ()=>AgentStoreMultipartAbortResult,
    AgentStoreMultipartAbortSuccess: ()=>AgentStoreMultipartAbortSuccess,
    AgentStoreMultipartOperationFailure: ()=>AgentStoreMultipartOperationFailure,
    AgentStoreMultipartOperationFailureCode: ()=>AgentStoreMultipartOperationFailureCode,
    AgentStoreMultipartUploadContext: ()=>AgentStoreMultipartUploadContext,
    AgentStoreMultipartUploadPartDescriptor: ()=>AgentStoreMultipartUploadPartDescriptor,
    AgentStoreMultipartUploadPartInstruction: ()=>AgentStoreMultipartUploadPartInstruction,
    AgentStoreMultipartUploadedPart: ()=>AgentStoreMultipartUploadedPart,
    AgentStoreMultipartWriteAbort: ()=>AgentStoreMultipartWriteAbort,
    AgentStoreMultipartWriteCompletion: ()=>AgentStoreMultipartWriteCompletion,
    AgentStoreMultipartWriteInstruction: ()=>AgentStoreMultipartWriteInstruction,
    AgentStoreMultipartWriteResult: ()=>AgentStoreMultipartWriteResult,
    AgentStoreMultipartWriteSuccess: ()=>AgentStoreMultipartWriteSuccess,
    AgentStoreReadInstruction: ()=>AgentStoreReadInstruction,
    AgentStoreShareVisibility: ()=>AgentStoreShareVisibility,
    AgentStoreSourceKind: ()=>AgentStoreSourceKind,
    AgentStoreSourceRef: ()=>AgentStoreSourceRef,
    AgentStoreTombstone: ()=>AgentStoreTombstone,
    AgentStoreTombstoneMode: ()=>AgentStoreTombstoneMode,
    AgentStoreUndeleteFileEntry: ()=>AgentStoreUndeleteFileEntry,
    AgentStoreUndeleteFileResult: ()=>AgentStoreUndeleteFileResult,
    AgentStoreUndeleteFileStatus: ()=>AgentStoreUndeleteFileStatus,
    AgentStoreWriteFileEntry: ()=>AgentStoreWriteFileEntry,
    AgentStoreWriteInstruction: ()=>AgentStoreWriteInstruction,
    CheckAgentStoreVersionsRequest: ()=>CheckAgentStoreVersionsRequest,
    CheckAgentStoreVersionsRequest_Entry: ()=>CheckAgentStoreVersionsRequest_Entry,
    CheckAgentStoreVersionsResponse: ()=>CheckAgentStoreVersionsResponse,
    CheckAgentStoreVersionsResponse_Result: ()=>CheckAgentStoreVersionsResponse_Result,
    CheckAgentStoreVersionsResponse_Status: ()=>CheckAgentStoreVersionsResponse_Status,
    CompleteAgentStoreMultipartWritesRequest: ()=>CompleteAgentStoreMultipartWritesRequest,
    CompleteAgentStoreMultipartWritesResponse: ()=>CompleteAgentStoreMultipartWritesResponse,
    DeleteAgentStoreFilesRequest: ()=>DeleteAgentStoreFilesRequest,
    DeleteAgentStoreFilesResponse: ()=>DeleteAgentStoreFilesResponse,
    GetAgentStoreFileLockRequest: ()=>GetAgentStoreFileLockRequest,
    GetAgentStoreFileLockResponse: ()=>GetAgentStoreFileLockResponse,
    ListAgentStoreDirectoryRequest: ()=>ListAgentStoreDirectoryRequest,
    ListAgentStoreDirectoryResponse: ()=>ListAgentStoreDirectoryResponse,
    ListAgentStoreEntriesRequest: ()=>ListAgentStoreEntriesRequest,
    ListAgentStoreEntriesResponse: ()=>ListAgentStoreEntriesResponse,
    ListAgentStoreFilesRequest: ()=>ListAgentStoreFilesRequest,
    ListAgentStoreFilesResponse: ()=>ListAgentStoreFilesResponse,
    ListAgentStoreTombstonesRequest: ()=>ListAgentStoreTombstonesRequest,
    ListAgentStoreTombstonesResponse: ()=>ListAgentStoreTombstonesResponse,
    ListAgentStoresRequest: ()=>ListAgentStoresRequest,
    ListAgentStoresResponse: ()=>ListAgentStoresResponse,
    ListSharedAgentStoresRequest: ()=>ListSharedAgentStoresRequest,
    ListSharedAgentStoresResponse: ()=>ListSharedAgentStoresResponse,
    ListSharedAgentStoresScope: ()=>ListSharedAgentStoresScope,
    MintAgentStoreTokenRequest: ()=>MintAgentStoreTokenRequest,
    MintAgentStoreTokenResponse: ()=>MintAgentStoreTokenResponse,
    PresignAgentStoreReadsRequest: ()=>PresignAgentStoreReadsRequest,
    PresignAgentStoreReadsResponse: ()=>PresignAgentStoreReadsResponse,
    PresignAgentStoreWritesRequest: ()=>PresignAgentStoreWritesRequest,
    PresignAgentStoreWritesResponse: ()=>PresignAgentStoreWritesResponse,
    ReadAgentStoreFileRequest: ()=>ReadAgentStoreFileRequest,
    ReadAgentStoreFileResponse: ()=>ReadAgentStoreFileResponse,
    ReleaseAgentStoreFileLockRequest: ()=>ReleaseAgentStoreFileLockRequest,
    ReleaseAgentStoreFileLockResponse: ()=>ReleaseAgentStoreFileLockResponse,
    RenewAgentStoreFileLockRequest: ()=>RenewAgentStoreFileLockRequest,
    RenewAgentStoreFileLockResponse: ()=>RenewAgentStoreFileLockResponse,
    RmdirAgentStoreRequest: ()=>RmdirAgentStoreRequest,
    RmdirAgentStoreResponse: ()=>RmdirAgentStoreResponse,
    SetAgentStoreDocumentVisibilityRequest: ()=>SetAgentStoreDocumentVisibilityRequest,
    SetAgentStoreDocumentVisibilityResponse: ()=>SetAgentStoreDocumentVisibilityResponse,
    ShareAgentStoreRequest: ()=>ShareAgentStoreRequest,
    ShareAgentStoreResponse: ()=>ShareAgentStoreResponse,
    SharedAgentStoreInfo: ()=>SharedAgentStoreInfo,
    SharedAgentStoreListing: ()=>SharedAgentStoreListing,
    UndeleteAgentStoreFilesRequest: ()=>UndeleteAgentStoreFilesRequest,
    UndeleteAgentStoreFilesResponse: ()=>UndeleteAgentStoreFilesResponse,
    UnshareAgentStoreRequest: ()=>UnshareAgentStoreRequest,
    UnshareAgentStoreResponse: ()=>UnshareAgentStoreResponse,
    WriteAgentStoreDocumentRequest: ()=>WriteAgentStoreDocumentRequest,
    WriteAgentStoreDocumentResponse: ()=>WriteAgentStoreDocumentResponse
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const AgentStoreKind = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.AgentStoreKind", [
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
]);
const AgentStoreSourceKind = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.AgentStoreSourceKind", [
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
]);
const AgentStoreEntryKind = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.AgentStoreEntryKind", [
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
]);
const AgentStoreDocumentVisibility = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.AgentStoreDocumentVisibility", [
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
]);
const AgentStoreTombstoneMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.AgentStoreTombstoneMode", [
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
]);
const AgentStoreDirectoryListingMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.AgentStoreDirectoryListingMode", [
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
]);
const AgentStoreMultipartOperationFailureCode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.AgentStoreMultipartOperationFailureCode", [
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
]);
const AgentStoreDeleteFileStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.AgentStoreDeleteFileStatus", [
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
]);
const AgentStoreUndeleteFileStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.AgentStoreUndeleteFileStatus", [
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
]);
const AgentStoreShareVisibility = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.AgentStoreShareVisibility", [
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
]);
const ListSharedAgentStoresScope = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ListSharedAgentStoresScope", [
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
]);
const ListAgentStoresRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListAgentStoresRequest", ()=>[
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
            opt: true
        }
    ]);
const AgentStoreSourceRef = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreSourceRef", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreSourceKind)
        },
        {
            no: 2,
            name: "source_id",
            kind: "scalar",
            T: 9
        }
    ]);
const AgentStoreMount = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreMount", ()=>[
        {
            no: 1,
            name: "mount_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "source",
            kind: "message",
            T: AgentStoreSourceRef,
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
    ]);
const AgentStore = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStore", ()=>[
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
            repeated: true
        },
        {
            no: 9,
            name: "shares",
            kind: "message",
            T: SharedAgentStoreInfo,
            repeated: true
        },
        {
            no: 10,
            name: "kind",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreKind)
        },
        {
            no: 11,
            name: "last_file_write_at_ms",
            kind: "scalar",
            T: 1,
            opt: true
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
            opt: true
        },
        {
            no: 14,
            name: "source",
            kind: "message",
            T: AgentStoreSourceRef
        }
    ]);
const ListAgentStoresResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListAgentStoresResponse", ()=>[
        {
            no: 1,
            name: "stores",
            kind: "message",
            T: AgentStore,
            repeated: true
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
            opt: true
        }
    ]);
const ListAgentStoreEntriesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListAgentStoreEntriesRequest", ()=>[
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
            opt: true
        }
    ]);
const AgentStoreEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreEntry", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreEntryKind)
        },
        {
            no: 4,
            name: "size_bytes",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 5,
            name: "updated_at_ms",
            kind: "scalar",
            T: 1,
            opt: true
        }
    ]);
const ListAgentStoreEntriesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListAgentStoreEntriesResponse", ()=>[
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
            T: AgentStoreEntry,
            repeated: true
        }
    ]);
const ReadAgentStoreFileRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadAgentStoreFileRequest", ()=>[
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
            opt: true
        }
    ]);
const ReadAgentStoreFileResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadAgentStoreFileResponse", ()=>[
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
            T: AgentStoreDocumentOwnerView,
            opt: true
        }
    ]);
const AgentStoreDocumentOwnerView = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreDocumentOwnerView", ()=>[
        {
            no: 1,
            name: "visibility",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreDocumentVisibility)
        },
        {
            no: 2,
            name: "can_share_to_team",
            kind: "scalar",
            T: 8
        }
    ]);
const SetAgentStoreDocumentVisibilityRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SetAgentStoreDocumentVisibilityRequest", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreDocumentVisibility)
        }
    ]);
const SetAgentStoreDocumentVisibilityResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SetAgentStoreDocumentVisibilityResponse", ()=>[
        {
            no: 1,
            name: "visibility",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreDocumentVisibility)
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]);
const WriteAgentStoreDocumentRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WriteAgentStoreDocumentRequest", ()=>[
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
    ]);
const WriteAgentStoreDocumentResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WriteAgentStoreDocumentResponse", ()=>[
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
    ]);
const MintAgentStoreTokenRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MintAgentStoreTokenRequest", ()=>[
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
            opt: true
        },
        {
            no: 3,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "source",
            kind: "message",
            T: AgentStoreSourceRef
        }
    ]);
const MintAgentStoreTokenResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MintAgentStoreTokenResponse", ()=>[
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
            repeated: true
        },
        {
            no: 4,
            name: "store_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const AgentStoreFileEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreFileEntry", ()=>[
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
    ]);
const ListAgentStoreFilesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListAgentStoreFilesRequest", ()=>[
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
            opt: true
        },
        {
            no: 3,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "tombstone_mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreTombstoneMode)
        },
        {
            no: 5,
            name: "tombstones_since_ms",
            kind: "scalar",
            T: 3
        }
    ]);
const ListAgentStoreFilesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListAgentStoreFilesResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: AgentStoreFileEntry,
            repeated: true
        },
        {
            no: 2,
            name: "tombstones",
            kind: "message",
            T: AgentStoreTombstone,
            repeated: true
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
    ]);
const AgentStoreTombstone = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreTombstone", ()=>[
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
    ]);
const ListAgentStoreDirectoryRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListAgentStoreDirectoryRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "share_id",
            kind: "scalar",
            T: 9,
            opt: true
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreTombstoneMode)
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
    ]);
const ListAgentStoreDirectoryResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListAgentStoreDirectoryResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: AgentStoreFileEntry,
            repeated: true
        },
        {
            no: 2,
            name: "subdirs",
            kind: "scalar",
            T: 9,
            repeated: true
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreDirectoryListingMode)
        },
        {
            no: 5,
            name: "tombstones",
            kind: "message",
            T: AgentStoreTombstone,
            repeated: true
        },
        {
            no: 6,
            name: "removed_subdirs",
            kind: "scalar",
            T: 9,
            repeated: true
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
    ]);
const CheckAgentStoreVersionsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CheckAgentStoreVersionsRequest", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: CheckAgentStoreVersionsRequest_Entry,
            repeated: true
        }
    ]);
const CheckAgentStoreVersionsRequest_Entry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CheckAgentStoreVersionsRequest.Entry", ()=>[
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
            opt: true
        },
        {
            no: 3,
            name: "share_id",
            kind: "scalar",
            T: 9,
            opt: true
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
});
const CheckAgentStoreVersionsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CheckAgentStoreVersionsResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: CheckAgentStoreVersionsResponse_Result,
            repeated: true
        }
    ]);
const CheckAgentStoreVersionsResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CheckAgentStoreVersionsResponse.Status", [
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
]);
const CheckAgentStoreVersionsResponse_Result = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CheckAgentStoreVersionsResponse.Result", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CheckAgentStoreVersionsResponse_Status)
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
});
const AgentStoreReadInstruction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreReadInstruction", ()=>[
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
    ]);
const PresignAgentStoreReadsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PresignAgentStoreReadsRequest", ()=>[
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
            repeated: true
        },
        {
            no: 3,
            name: "share_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const PresignAgentStoreReadsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PresignAgentStoreReadsResponse", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "message",
            T: AgentStoreReadInstruction,
            repeated: true
        }
    ]);
const AgentStoreMultipartUploadPartDescriptor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreMultipartUploadPartDescriptor", ()=>[
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
    ]);
const AgentStoreWriteFileEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreWriteFileEntry", ()=>[
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
            T: AgentStoreMultipartUploadPartDescriptor,
            repeated: true
        }
    ]);
const AgentStoreConflictWriteInstruction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreConflictWriteInstruction", ()=>[
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
            T: AgentStoreMultipartWriteInstruction,
            opt: true
        }
    ]);
const AgentStoreLockRedirect = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreLockRedirect", ()=>[
        {
            no: 1,
            name: "holder",
            kind: "message",
            T: AgentStoreFileLockHolder,
            opt: true
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
    ]);
const AgentStoreWriteInstruction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreWriteInstruction", ()=>[
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
            T: AgentStoreConflictWriteInstruction,
            opt: true
        },
        {
            no: 6,
            name: "lock_redirect",
            kind: "message",
            T: AgentStoreLockRedirect,
            opt: true
        },
        {
            no: 7,
            name: "multipart",
            kind: "message",
            T: AgentStoreMultipartWriteInstruction,
            opt: true
        },
        {
            no: 8,
            name: "primary_precondition_failed",
            kind: "scalar",
            T: 8
        }
    ]);
const AgentStoreMultipartWriteInstruction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreMultipartWriteInstruction", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: AgentStoreMultipartUploadContext
        },
        {
            no: 2,
            name: "parts",
            kind: "message",
            T: AgentStoreMultipartUploadPartInstruction,
            repeated: true
        },
        {
            no: 3,
            name: "part_urls_expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]);
const AgentStoreMultipartUploadPartInstruction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreMultipartUploadPartInstruction", ()=>[
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
    ]);
const AgentStoreMultipartUploadContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreMultipartUploadContext", ()=>[
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
    ]);
const PresignAgentStoreWritesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PresignAgentStoreWritesRequest", ()=>[
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
            T: AgentStoreWriteFileEntry,
            repeated: true
        },
        {
            no: 3,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "lock_token",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "lock_client_uuid",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "supports_signed_content_length",
            kind: "scalar",
            T: 8
        }
    ]);
const PresignAgentStoreWritesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PresignAgentStoreWritesResponse", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "message",
            T: AgentStoreWriteInstruction,
            repeated: true
        }
    ]);
const AgentStoreMultipartUploadedPart = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreMultipartUploadedPart", ()=>[
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
    ]);
const AgentStoreMultipartWriteCompletion = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreMultipartWriteCompletion", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: AgentStoreMultipartUploadContext
        },
        {
            no: 2,
            name: "parts",
            kind: "message",
            T: AgentStoreMultipartUploadedPart,
            repeated: true
        }
    ]);
const CompleteAgentStoreMultipartWritesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CompleteAgentStoreMultipartWritesRequest", ()=>[
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
            T: AgentStoreMultipartWriteCompletion,
            repeated: true
        }
    ]);
const AgentStoreMultipartWriteSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreMultipartWriteSuccess", ()=>[
        {
            no: 1,
            name: "etag",
            kind: "scalar",
            T: 9
        }
    ]);
const AgentStoreMultipartOperationFailure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreMultipartOperationFailure", ()=>[
        {
            no: 1,
            name: "code",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreMultipartOperationFailureCode)
        }
    ]);
const AgentStoreMultipartWriteResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreMultipartWriteResult", ()=>[
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
            T: AgentStoreMultipartWriteSuccess,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: AgentStoreMultipartOperationFailure,
            oneof: "outcome"
        }
    ]);
const CompleteAgentStoreMultipartWritesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CompleteAgentStoreMultipartWritesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: AgentStoreMultipartWriteResult,
            repeated: true
        }
    ]);
const AgentStoreMultipartWriteAbort = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreMultipartWriteAbort", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: AgentStoreMultipartUploadContext
        }
    ]);
const AbortAgentStoreMultipartWritesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AbortAgentStoreMultipartWritesRequest", ()=>[
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
            T: AgentStoreMultipartWriteAbort,
            repeated: true
        }
    ]);
const AgentStoreMultipartAbortSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreMultipartAbortSuccess", ()=>[
        {
            no: 1,
            name: "already_finished",
            kind: "scalar",
            T: 8
        }
    ]);
const AgentStoreMultipartAbortResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreMultipartAbortResult", ()=>[
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
            T: AgentStoreMultipartAbortSuccess,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: AgentStoreMultipartOperationFailure,
            oneof: "outcome"
        }
    ]);
const AbortAgentStoreMultipartWritesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AbortAgentStoreMultipartWritesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: AgentStoreMultipartAbortResult,
            repeated: true
        }
    ]);
const AgentStoreFileLockHolder = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreFileLockHolder", ()=>[
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
    ]);
const AcquireAgentStoreFileLockRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AcquireAgentStoreFileLockRequest", ()=>[
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
            T: AgentStoreFileLockHolder
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
            opt: true
        }
    ]);
const AcquireAgentStoreFileLockResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AcquireAgentStoreFileLockResponse", ()=>[
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
            opt: true
        },
        {
            no: 3,
            name: "current_holder",
            kind: "message",
            T: AgentStoreFileLockHolder,
            opt: true
        },
        {
            no: 4,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]);
const RenewAgentStoreFileLockRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RenewAgentStoreFileLockRequest", ()=>[
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
    ]);
const RenewAgentStoreFileLockResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RenewAgentStoreFileLockResponse", ()=>[
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
    ]);
const ReleaseAgentStoreFileLockRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReleaseAgentStoreFileLockRequest", ()=>[
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
    ]);
const ReleaseAgentStoreFileLockResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReleaseAgentStoreFileLockResponse", ()=>[
        {
            no: 1,
            name: "released",
            kind: "scalar",
            T: 8
        }
    ]);
const GetAgentStoreFileLockRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetAgentStoreFileLockRequest", ()=>[
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
    ]);
const GetAgentStoreFileLockResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetAgentStoreFileLockResponse", ()=>[
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
            T: AgentStoreFileLockHolder,
            opt: true
        },
        {
            no: 3,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]);
const AgentStoreDeleteFileEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreDeleteFileEntry", ()=>[
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
            opt: true
        },
        {
            no: 4,
            name: "delete_current",
            kind: "scalar",
            T: 8
        }
    ]);
const AgentStoreDeleteFileResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreDeleteFileResult", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreDeleteFileStatus)
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
            opt: true
        }
    ]);
const DeleteAgentStoreFilesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeleteAgentStoreFilesRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: AgentStoreDeleteFileEntry,
            repeated: true
        }
    ]);
const DeleteAgentStoreFilesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeleteAgentStoreFilesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: AgentStoreDeleteFileResult,
            repeated: true
        }
    ]);
const RmdirAgentStoreRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RmdirAgentStoreRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "share_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "rel_path",
            kind: "scalar",
            T: 9
        }
    ]);
const RmdirAgentStoreResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RmdirAgentStoreResponse", []);
const AgentStoreUndeleteFileEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreUndeleteFileEntry", ()=>[
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
            opt: true
        }
    ]);
const AgentStoreUndeleteFileResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStoreUndeleteFileResult", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreUndeleteFileStatus)
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
            opt: true
        }
    ]);
const UndeleteAgentStoreFilesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UndeleteAgentStoreFilesRequest", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: AgentStoreUndeleteFileEntry,
            repeated: true
        }
    ]);
const UndeleteAgentStoreFilesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UndeleteAgentStoreFilesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: AgentStoreUndeleteFileResult,
            repeated: true
        }
    ]);
const ListAgentStoreTombstonesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListAgentStoreTombstonesRequest", ()=>[
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
    ]);
const ListAgentStoreTombstonesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListAgentStoreTombstonesResponse", ()=>[
        {
            no: 1,
            name: "tombstones",
            kind: "message",
            T: AgentStoreTombstone,
            repeated: true
        },
        {
            no: 2,
            name: "next_page_token",
            kind: "scalar",
            T: 9
        }
    ]);
const SharedAgentStoreInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SharedAgentStoreInfo", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreShareVisibility)
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
            opt: true
        }
    ]);
const ShareAgentStoreRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ShareAgentStoreRequest", ()=>[
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
            opt: true
        },
        {
            no: 5,
            name: "source",
            kind: "message",
            T: AgentStoreSourceRef
        }
    ]);
const ShareAgentStoreResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ShareAgentStoreResponse", ()=>[
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
    ]);
const UnshareAgentStoreRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UnshareAgentStoreRequest", ()=>[
        {
            no: 1,
            name: "share_id",
            kind: "scalar",
            T: 9
        }
    ]);
const UnshareAgentStoreResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UnshareAgentStoreResponse", []);
const ListSharedAgentStoresRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListSharedAgentStoresRequest", ()=>[
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
            opt: true
        },
        {
            no: 3,
            name: "owning_user_id",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "search_query",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "scope",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ListSharedAgentStoresScope),
            opt: true
        },
        {
            no: 6,
            name: "created_before_share_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SharedAgentStoreListing = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SharedAgentStoreListing", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreShareVisibility)
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
            opt: true
        },
        {
            no: 8,
            name: "owning_user_id",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 9,
            name: "owning_team_id",
            kind: "scalar",
            T: 5,
            opt: true
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentStoreKind)
        },
        {
            no: 13,
            name: "source",
            kind: "message",
            T: AgentStoreSourceRef
        }
    ]);
const ListSharedAgentStoresResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListSharedAgentStoresResponse", ()=>[
        {
            no: 1,
            name: "listings",
            kind: "message",
            T: SharedAgentStoreListing,
            repeated: true
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
            opt: true
        },
        {
            no: 4,
            name: "next_created_before_share_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
