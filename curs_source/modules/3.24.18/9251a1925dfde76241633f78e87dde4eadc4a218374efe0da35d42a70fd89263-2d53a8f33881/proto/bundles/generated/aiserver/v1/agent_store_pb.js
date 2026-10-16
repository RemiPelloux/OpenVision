import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage144, __protoMessage3137, AgentStoreKind, AgentStoreSourceKind, AgentStoreEntryKind, AgentStoreDocumentVisibility, AgentStoreTombstoneMode, AgentStoreDirectoryListingMode, AgentStoreMultipartOperationFailureCode, AgentStoreDeleteFileStatus, AgentStoreUndeleteFileStatus, AgentStoreShareVisibility, ListSharedAgentStoresScope, ListAgentStoresRequest, AgentStoreSourceRef, AgentStoreMount, AgentStore2, ListAgentStoresResponse, ListAgentStoreEntriesRequest, AgentStoreEntry, ListAgentStoreEntriesResponse, ReadAgentStoreFileRequest, ReadAgentStoreFileResponse, AgentStoreDocumentOwnerView, SetAgentStoreDocumentVisibilityRequest, SetAgentStoreDocumentVisibilityResponse, WriteAgentStoreDocumentRequest, WriteAgentStoreDocumentResponse, MintAgentStoreTokenRequest, MintAgentStoreTokenResponse, AgentStoreFileEntry, ListAgentStoreFilesRequest, ListAgentStoreFilesResponse, AgentStoreTombstone, ListAgentStoreDirectoryRequest, ListAgentStoreDirectoryResponse, CheckAgentStoreVersionsRequest, CheckAgentStoreVersionsRequest_Entry, CheckAgentStoreVersionsResponse, CheckAgentStoreVersionsResponse_Status, CheckAgentStoreVersionsResponse_Result, AgentStoreReadInstruction, PresignAgentStoreReadsRequest, PresignAgentStoreReadsResponse, AgentStoreMultipartUploadPartDescriptor, AgentStoreWriteFileEntry, AgentStoreConflictWriteInstruction, AgentStoreLockRedirect, AgentStoreWriteInstruction, AgentStoreMultipartWriteInstruction, AgentStoreMultipartUploadPartInstruction, AgentStoreMultipartUploadContext, PresignAgentStoreWritesRequest, PresignAgentStoreWritesResponse, AgentStoreMultipartUploadedPart, AgentStoreMultipartWriteCompletion, CompleteAgentStoreMultipartWritesRequest, AgentStoreMultipartWriteSuccess, AgentStoreMultipartOperationFailure, AgentStoreMultipartWriteResult, CompleteAgentStoreMultipartWritesResponse, AgentStoreMultipartWriteAbort, AbortAgentStoreMultipartWritesRequest, AgentStoreMultipartAbortSuccess, AgentStoreMultipartAbortResult, AbortAgentStoreMultipartWritesResponse, AgentStoreFileLockHolder, AcquireAgentStoreFileLockRequest, AcquireAgentStoreFileLockResponse, RenewAgentStoreFileLockRequest, RenewAgentStoreFileLockResponse, ReleaseAgentStoreFileLockRequest, ReleaseAgentStoreFileLockResponse, GetAgentStoreFileLockRequest, GetAgentStoreFileLockResponse, AgentStoreDeleteFileEntry, AgentStoreDeleteFileResult, DeleteAgentStoreFilesRequest, DeleteAgentStoreFilesResponse, RmdirAgentStoreRequest, RmdirAgentStoreResponse, AgentStoreUndeleteFileEntry, AgentStoreUndeleteFileResult, UndeleteAgentStoreFilesRequest, UndeleteAgentStoreFilesResponse, ListAgentStoreTombstonesRequest, ListAgentStoreTombstonesResponse, SharedAgentStoreInfo, ShareAgentStoreRequest, ShareAgentStoreResponse, UnshareAgentStoreRequest, UnshareAgentStoreResponse, ListSharedAgentStoresRequest, SharedAgentStoreListing, ListSharedAgentStoresResponse;
export { AbortAgentStoreMultipartWritesRequest, AbortAgentStoreMultipartWritesResponse, AcquireAgentStoreFileLockRequest, AcquireAgentStoreFileLockResponse, AgentStore2, AgentStoreConflictWriteInstruction, AgentStoreDeleteFileEntry, AgentStoreDeleteFileResult, AgentStoreDeleteFileStatus, AgentStoreDirectoryListingMode, AgentStoreDocumentOwnerView, AgentStoreDocumentVisibility, AgentStoreEntry, AgentStoreEntryKind, AgentStoreFileEntry, AgentStoreFileLockHolder, AgentStoreKind, AgentStoreLockRedirect, AgentStoreMount, AgentStoreMultipartAbortResult, AgentStoreMultipartAbortSuccess, AgentStoreMultipartOperationFailure, AgentStoreMultipartOperationFailureCode, AgentStoreMultipartUploadContext, AgentStoreMultipartUploadPartDescriptor, AgentStoreMultipartUploadPartInstruction, AgentStoreMultipartUploadedPart, AgentStoreMultipartWriteAbort, AgentStoreMultipartWriteCompletion, AgentStoreMultipartWriteInstruction, AgentStoreMultipartWriteResult, AgentStoreMultipartWriteSuccess, AgentStoreReadInstruction, AgentStoreShareVisibility, AgentStoreSourceKind, AgentStoreSourceRef, AgentStoreTombstone, AgentStoreTombstoneMode, AgentStoreUndeleteFileEntry, AgentStoreUndeleteFileResult, AgentStoreUndeleteFileStatus, AgentStoreWriteFileEntry, AgentStoreWriteInstruction, CheckAgentStoreVersionsRequest, CheckAgentStoreVersionsRequest_Entry, CheckAgentStoreVersionsResponse, CheckAgentStoreVersionsResponse_Result, CheckAgentStoreVersionsResponse_Status, CompleteAgentStoreMultipartWritesRequest, CompleteAgentStoreMultipartWritesResponse, DeleteAgentStoreFilesRequest, DeleteAgentStoreFilesResponse, GetAgentStoreFileLockRequest, GetAgentStoreFileLockResponse, ListAgentStoreDirectoryRequest, ListAgentStoreDirectoryResponse, ListAgentStoreEntriesRequest, ListAgentStoreEntriesResponse, ListAgentStoreFilesRequest, ListAgentStoreFilesResponse, ListAgentStoreTombstonesRequest, ListAgentStoreTombstonesResponse, ListAgentStoresRequest, ListAgentStoresResponse, ListSharedAgentStoresRequest, ListSharedAgentStoresResponse, ListSharedAgentStoresScope, MintAgentStoreTokenRequest, MintAgentStoreTokenResponse, PresignAgentStoreReadsRequest, PresignAgentStoreReadsResponse, PresignAgentStoreWritesRequest, PresignAgentStoreWritesResponse, ReadAgentStoreFileRequest, ReadAgentStoreFileResponse, ReleaseAgentStoreFileLockRequest, ReleaseAgentStoreFileLockResponse, RenewAgentStoreFileLockRequest, RenewAgentStoreFileLockResponse, RmdirAgentStoreRequest, RmdirAgentStoreResponse, SetAgentStoreDocumentVisibilityRequest, SetAgentStoreDocumentVisibilityResponse, ShareAgentStoreRequest, ShareAgentStoreResponse, SharedAgentStoreInfo, SharedAgentStoreListing, UndeleteAgentStoreFilesRequest, UndeleteAgentStoreFilesResponse, UnshareAgentStoreRequest, UnshareAgentStoreResponse, WriteAgentStoreDocumentRequest, WriteAgentStoreDocumentResponse, __protoMessage3137, __protoPackage144 };
var __wakaru_init_agent_store_pb_initialized = false;
export function init_agent_store_pb() {
if (__wakaru_init_agent_store_pb_initialized) return;
__wakaru_init_agent_store_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage144 = "aiserver.v1.";
__protoMessage3137 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage144;
    }
};
AgentStoreKind = enumType2(proto3, __protoPackage144, "AgentStoreKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CLOUD"
    ],
    [
        2,
        "LOCAL"
    ],
    [
        3,
        "AUTOMATION"
    ],
    [
        4,
        "USER"
    ],
    [
        5,
        "TEAM"
    ],
    [
        6,
        "NAMED_AGENT"
    ],
    [
        7,
        "GROK_BOT"
    ]
], 1);
AgentStoreSourceKind = enumType2(proto3, __protoPackage144, "AgentStoreSourceKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CLOUD"
    ],
    [
        2,
        "LOCAL"
    ],
    [
        3,
        "AUTOMATION"
    ],
    [
        4,
        "USER"
    ],
    [
        5,
        "TEAM"
    ],
    [
        6,
        "NAMED_AGENT"
    ],
    [
        7,
        "GROK_BOT"
    ]
], 1);
AgentStoreEntryKind = enumType2(proto3, __protoPackage144, "AgentStoreEntryKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DIRECTORY"
    ],
    [
        2,
        "FILE"
    ]
], 1);
AgentStoreDocumentVisibility = enumType2(proto3, __protoPackage144, "AgentStoreDocumentVisibility", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PRIVATE"
    ],
    [
        2,
        "TEAM_VIEW"
    ],
    [
        3,
        "PUBLIC"
    ]
], 1);
AgentStoreTombstoneMode = enumType2(proto3, __protoPackage144, "AgentStoreTombstoneMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INCLUDE"
    ],
    [
        2,
        "OMIT"
    ],
    [
        3,
        "SINCE"
    ]
], 1);
AgentStoreDirectoryListingMode = enumType2(proto3, __protoPackage144, "AgentStoreDirectoryListingMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DIRECTORY_PAGE"
    ],
    [
        2,
        "COMPLETE_FLAT_STORE"
    ],
    [
        3,
        "COMPLETE_FLAT_SUBTREE"
    ]
], 1);
AgentStoreMultipartOperationFailureCode = enumType2(proto3, __protoPackage144, "AgentStoreMultipartOperationFailureCode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PRECONDITION_FAILED"
    ],
    [
        2,
        "UPLOAD_NOT_FOUND"
    ],
    [
        3,
        "INVALID_PARTS"
    ],
    [
        4,
        "CHECKSUM_MISMATCH"
    ],
    [
        5,
        "TRANSIENT"
    ],
    [
        6,
        "INTERNAL"
    ],
    [
        7,
        "RESTART_REQUIRED"
    ]
], 1);
AgentStoreDeleteFileStatus = enumType2(proto3, __protoPackage144, "AgentStoreDeleteFileStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DELETED"
    ],
    [
        2,
        "ALREADY_DELETED"
    ],
    [
        3,
        "CONFLICT"
    ]
], 1);
AgentStoreUndeleteFileStatus = enumType2(proto3, __protoPackage144, "AgentStoreUndeleteFileStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "RESTORED"
    ],
    [
        2,
        "NOT_DELETED"
    ],
    [
        3,
        "CONFLICT"
    ],
    [
        4,
        "UNRECOVERABLE"
    ],
    [
        5,
        "TOO_LARGE"
    ]
], 1);
AgentStoreShareVisibility = enumType2(proto3, __protoPackage144, "AgentStoreShareVisibility", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        2,
        "TEAM"
    ],
    [
        3,
        "PUBLIC"
    ]
], 1);
ListSharedAgentStoresScope = enumType2(proto3, __protoPackage144, "ListSharedAgentStoresScope", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MINE"
    ],
    [
        2,
        "TEAM"
    ]
], 1);
ListAgentStoresRequest = class _ListAgentStoresRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.n = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentStoresRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentStoresRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentStoresRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentStoresRequest, a, b2);
    }
    static $() {
        return [
            "ListAgentStoresRequest|1 n 5|5 page_token 9?"
        ];
    }
};
AgentStoreSourceRef = class _AgentStoreSourceRef extends __protoMessage3137 {
    constructor(data){
        super();
        this.kind = AgentStoreSourceKind.UNSPECIFIED;
        this.sourceId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreSourceRef().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreSourceRef().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreSourceRef().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreSourceRef, a, b2);
    }
    static $() {
        return [
            "AgentStoreSourceRef|1 kind #0|2 source_id 9",
            AgentStoreSourceKind
        ];
    }
};
AgentStoreMount = class _AgentStoreMount extends __protoMessage3137 {
    constructor(data){
        super();
        this.target = {
            case: void 0
        };
        this.serverGenerated = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreMount().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreMount().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreMount().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreMount, a, b2);
    }
    static $() {
        return [
            "AgentStoreMount|1 mount_name 9?|2 source #0 target|3 store_id 9 target|4 share_id 9 target|5 server_generated 8",
            AgentStoreSourceRef
        ];
    }
};
AgentStore2 = class _AgentStore extends __protoMessage3137 {
    constructor(data){
        super();
        this.storeId = "";
        this.createdAtMs = 0;
        this.updatedAtMs = 0;
        this.repoUrls = [];
        this.shares = [];
        this.kind = AgentStoreKind.UNSPECIFIED;
        this.sourceId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStore().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStore().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStore().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStore, a, b2);
    }
    static $() {
        return [
            "AgentStore|1 store_id 9|4 created_at_ms 1|5 updated_at_ms 1|8 repo_urls 9*|9 shares #0*|10 kind #1|11 last_file_write_at_ms 1?|12 source_id 9|13 source_display_name 9?|14 source #2",
            SharedAgentStoreInfo,
            AgentStoreKind,
            AgentStoreSourceRef
        ];
    }
};
ListAgentStoresResponse = class _ListAgentStoresResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.stores = [];
        this.hasMore = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentStoresResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentStoresResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentStoresResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentStoresResponse, a, b2);
    }
    static $() {
        return [
            "ListAgentStoresResponse|1 stores #0*|2 has_more 8|4 next_page_token 9?",
            AgentStore2
        ];
    }
};
ListAgentStoreEntriesRequest = class _ListAgentStoreEntriesRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.storeId = "";
        this.relativePath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentStoreEntriesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentStoreEntriesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentStoreEntriesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentStoreEntriesRequest, a, b2);
    }
    static $() {
        return [
            "ListAgentStoreEntriesRequest|1 store_id 9|2 relative_path 9|3 share_id 9?"
        ];
    }
};
AgentStoreEntry = class _AgentStoreEntry extends __protoMessage3137 {
    constructor(data){
        super();
        this.name = "";
        this.relativePath = "";
        this.kind = AgentStoreEntryKind.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreEntry().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreEntry().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreEntry().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreEntry, a, b2);
    }
    static $() {
        return [
            "AgentStoreEntry|1 name 9|2 relative_path 9|3 kind #0|4 size_bytes 3?|5 updated_at_ms 1?",
            AgentStoreEntryKind
        ];
    }
};
ListAgentStoreEntriesResponse = class _ListAgentStoreEntriesResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.normalizedRelativePath = "";
        this.entries = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentStoreEntriesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentStoreEntriesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentStoreEntriesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentStoreEntriesResponse, a, b2);
    }
    static $() {
        return [
            "ListAgentStoreEntriesResponse|1 normalized_relative_path 9|2 entries #0*",
            AgentStoreEntry
        ];
    }
};
ReadAgentStoreFileRequest = class _ReadAgentStoreFileRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.storeId = "";
        this.relativePath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadAgentStoreFileRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadAgentStoreFileRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadAgentStoreFileRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadAgentStoreFileRequest, a, b2);
    }
    static $() {
        return [
            "ReadAgentStoreFileRequest|1 store_id 9|2 relative_path 9|3 share_id 9?"
        ];
    }
};
ReadAgentStoreFileResponse = class _ReadAgentStoreFileResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.content = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadAgentStoreFileResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadAgentStoreFileResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadAgentStoreFileResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadAgentStoreFileResponse, a, b2);
    }
    static $() {
        return [
            "ReadAgentStoreFileResponse|1 content 9|2 document_owner_view #0?",
            AgentStoreDocumentOwnerView
        ];
    }
};
AgentStoreDocumentOwnerView = class _AgentStoreDocumentOwnerView extends __protoMessage3137 {
    constructor(data){
        super();
        this.visibility = AgentStoreDocumentVisibility.UNSPECIFIED;
        this.canShareToTeam = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreDocumentOwnerView().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreDocumentOwnerView().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreDocumentOwnerView().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreDocumentOwnerView, a, b2);
    }
    static $() {
        return [
            "AgentStoreDocumentOwnerView|1 visibility #0|2 can_share_to_team 8",
            AgentStoreDocumentVisibility
        ];
    }
};
SetAgentStoreDocumentVisibilityRequest = class _SetAgentStoreDocumentVisibilityRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.storeId = "";
        this.documentId = "";
        this.visibility = AgentStoreDocumentVisibility.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetAgentStoreDocumentVisibilityRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetAgentStoreDocumentVisibilityRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetAgentStoreDocumentVisibilityRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetAgentStoreDocumentVisibilityRequest, a, b2);
    }
    static $() {
        return [
            "SetAgentStoreDocumentVisibilityRequest|1 store_id 9|2 document_id 9|3 visibility #0",
            AgentStoreDocumentVisibility
        ];
    }
};
SetAgentStoreDocumentVisibilityResponse = class _SetAgentStoreDocumentVisibilityResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.visibility = AgentStoreDocumentVisibility.UNSPECIFIED;
        this.url = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetAgentStoreDocumentVisibilityResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetAgentStoreDocumentVisibilityResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetAgentStoreDocumentVisibilityResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetAgentStoreDocumentVisibilityResponse, a, b2);
    }
    static $() {
        return [
            "SetAgentStoreDocumentVisibilityResponse|1 visibility #0|2 url 9",
            AgentStoreDocumentVisibility
        ];
    }
};
WriteAgentStoreDocumentRequest = class _WriteAgentStoreDocumentRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.storeId = "";
        this.documentId = "";
        this.source = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WriteAgentStoreDocumentRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WriteAgentStoreDocumentRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WriteAgentStoreDocumentRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WriteAgentStoreDocumentRequest, a, b2);
    }
    static $() {
        return [
            "WriteAgentStoreDocumentRequest|1 store_id 9|2 document_id 9|3 source 9"
        ];
    }
};
WriteAgentStoreDocumentResponse = class _WriteAgentStoreDocumentResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.etag = "";
        this.title = "";
        this.url = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WriteAgentStoreDocumentResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WriteAgentStoreDocumentResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WriteAgentStoreDocumentResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WriteAgentStoreDocumentResponse, a, b2);
    }
    static $() {
        return [
            "WriteAgentStoreDocumentResponse|1 etag 9|3 title 9|4 url 9"
        ];
    }
};
MintAgentStoreTokenRequest = class _MintAgentStoreTokenRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.agentId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MintAgentStoreTokenRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MintAgentStoreTokenRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MintAgentStoreTokenRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MintAgentStoreTokenRequest, a, b2);
    }
    static $() {
        return [
            "MintAgentStoreTokenRequest|1 agent_id 9|2 share_id 9?|3 store_id 9?|4 source #0",
            AgentStoreSourceRef
        ];
    }
};
MintAgentStoreTokenResponse = class _MintAgentStoreTokenResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.token = "";
        this.expiresAtMs = protoInt64.zero;
        this.agentIds = [];
        this.storeIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MintAgentStoreTokenResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MintAgentStoreTokenResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MintAgentStoreTokenResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MintAgentStoreTokenResponse, a, b2);
    }
    static $() {
        return [
            "MintAgentStoreTokenResponse|1 token 9|2 expires_at_ms 3|3 agent_ids 9*|4 store_ids 9*"
        ];
    }
};
AgentStoreFileEntry = class _AgentStoreFileEntry extends __protoMessage3137 {
    constructor(data){
        super();
        this.relPath = "";
        this.etag = "";
        this.sizeBytes = protoInt64.zero;
        this.lastModifiedMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreFileEntry().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreFileEntry().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreFileEntry().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreFileEntry, a, b2);
    }
    static $() {
        return [
            "AgentStoreFileEntry|1 rel_path 9|2 etag 9|3 size_bytes 3|4 last_modified_ms 3"
        ];
    }
};
ListAgentStoreFilesRequest = class _ListAgentStoreFilesRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.agentId = "";
        this.tombstoneMode = AgentStoreTombstoneMode.UNSPECIFIED;
        this.tombstonesSinceMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentStoreFilesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentStoreFilesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentStoreFilesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentStoreFilesRequest, a, b2);
    }
    static $() {
        return [
            "ListAgentStoreFilesRequest|1 agent_id 9|2 share_id 9?|3 store_id 9?|4 tombstone_mode #0|5 tombstones_since_ms 3",
            AgentStoreTombstoneMode
        ];
    }
};
ListAgentStoreFilesResponse = class _ListAgentStoreFilesResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.files = [];
        this.tombstones = [];
        this.listingComplete = false;
        this.tombstoneWatermarkMs = protoInt64.zero;
        this.tombstoneFloorMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentStoreFilesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentStoreFilesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentStoreFilesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentStoreFilesResponse, a, b2);
    }
    static $() {
        return [
            "ListAgentStoreFilesResponse|1 files #0*|2 tombstones #1*|3 listing_complete 8|4 tombstone_watermark_ms 3|5 tombstone_floor_ms 3",
            AgentStoreFileEntry,
            AgentStoreTombstone
        ];
    }
};
AgentStoreTombstone = class _AgentStoreTombstone extends __protoMessage3137 {
    constructor(data){
        super();
        this.relPath = "";
        this.tombstoneEtag = "";
        this.deletedAtMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreTombstone().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreTombstone().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreTombstone().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreTombstone, a, b2);
    }
    static $() {
        return [
            "AgentStoreTombstone|1 rel_path 9|2 tombstone_etag 9|3 deleted_at_ms 3"
        ];
    }
};
ListAgentStoreDirectoryRequest = class _ListAgentStoreDirectoryRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.relativePath = "";
        this.pageSize = 0;
        this.pageToken = "";
        this.preferCompleteFlatStore = false;
        this.tombstoneMode = AgentStoreTombstoneMode.UNSPECIFIED;
        this.tombstonesSinceMs = protoInt64.zero;
        this.ifVersionEqual = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentStoreDirectoryRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentStoreDirectoryRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentStoreDirectoryRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentStoreDirectoryRequest, a, b2);
    }
    static $() {
        return [
            "ListAgentStoreDirectoryRequest|1 store_id 9?|2 share_id 9?|3 relative_path 9|4 page_size 5|5 page_token 9|6 prefer_complete_flat_store 8|7 tombstone_mode #0|8 tombstones_since_ms 3|9 if_version_equal 9",
            AgentStoreTombstoneMode
        ];
    }
};
ListAgentStoreDirectoryResponse = class _ListAgentStoreDirectoryResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.files = [];
        this.subdirs = [];
        this.nextPageToken = "";
        this.mode = AgentStoreDirectoryListingMode.UNSPECIFIED;
        this.tombstones = [];
        this.removedSubdirs = [];
        this.listingComplete = false;
        this.tombstoneWatermarkMs = protoInt64.zero;
        this.tombstoneFloorMs = protoInt64.zero;
        this.version = "";
        this.notModified = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentStoreDirectoryResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentStoreDirectoryResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentStoreDirectoryResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentStoreDirectoryResponse, a, b2);
    }
    static $() {
        return [
            "ListAgentStoreDirectoryResponse|1 files #0*|2 subdirs 9*|3 next_page_token 9|4 mode #1|5 tombstones #2*|6 removed_subdirs 9*|7 listing_complete 8|8 tombstone_watermark_ms 3|9 tombstone_floor_ms 3|10 version 9|11 not_modified 8",
            AgentStoreFileEntry,
            AgentStoreDirectoryListingMode,
            AgentStoreTombstone
        ];
    }
};
CheckAgentStoreVersionsRequest = class _CheckAgentStoreVersionsRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.entries = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckAgentStoreVersionsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckAgentStoreVersionsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckAgentStoreVersionsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckAgentStoreVersionsRequest, a, b2);
    }
    static $() {
        return [
            "CheckAgentStoreVersionsRequest|1 entries #0*",
            CheckAgentStoreVersionsRequest_Entry
        ];
    }
};
CheckAgentStoreVersionsRequest_Entry = class _CheckAgentStoreVersionsRequest_Entry extends __protoMessage3137 {
    constructor(data){
        super();
        this.requestId = "";
        this.token = "";
        this.version = "";
        this.preferCompleteFlatStore = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckAgentStoreVersionsRequest_Entry().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckAgentStoreVersionsRequest_Entry().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckAgentStoreVersionsRequest_Entry().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckAgentStoreVersionsRequest_Entry, a, b2);
    }
    static $() {
        return [
            "CheckAgentStoreVersionsRequest.Entry|1 request_id 9|2 store_id 9?|3 share_id 9?|4 token 9|5 version 9|6 prefer_complete_flat_store 8"
        ];
    }
};
CheckAgentStoreVersionsResponse = class _CheckAgentStoreVersionsResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.results = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckAgentStoreVersionsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckAgentStoreVersionsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckAgentStoreVersionsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckAgentStoreVersionsResponse, a, b2);
    }
    static $() {
        return [
            "CheckAgentStoreVersionsResponse|1 results #0*",
            CheckAgentStoreVersionsResponse_Result
        ];
    }
};
CheckAgentStoreVersionsResponse_Status = enumType2(proto3, __protoPackage144, "CheckAgentStoreVersionsResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UNCHANGED"
    ],
    [
        2,
        "CHANGED"
    ],
    [
        3,
        "UNAUTHORIZED"
    ],
    [
        4,
        "ERROR"
    ]
], 1);
CheckAgentStoreVersionsResponse_Result = class _CheckAgentStoreVersionsResponse_Result extends __protoMessage3137 {
    constructor(data){
        super();
        this.requestId = "";
        this.status = CheckAgentStoreVersionsResponse_Status.UNSPECIFIED;
        this.version = "";
        this.tombstoneWatermarkMs = protoInt64.zero;
        this.tombstoneFloorMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CheckAgentStoreVersionsResponse_Result().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CheckAgentStoreVersionsResponse_Result().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CheckAgentStoreVersionsResponse_Result().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CheckAgentStoreVersionsResponse_Result, a, b2);
    }
    static $() {
        return [
            "CheckAgentStoreVersionsResponse.Result|1 request_id 9|2 status #0|3 version 9|4 tombstone_watermark_ms 3|5 tombstone_floor_ms 3",
            CheckAgentStoreVersionsResponse_Status
        ];
    }
};
AgentStoreReadInstruction = class _AgentStoreReadInstruction extends __protoMessage3137 {
    constructor(data){
        super();
        this.relPath = "";
        this.url = "";
        this.expiresAtMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreReadInstruction().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreReadInstruction().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreReadInstruction().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreReadInstruction, a, b2);
    }
    static $() {
        return [
            "AgentStoreReadInstruction|1 rel_path 9|2 url 9|3 expires_at_ms 3"
        ];
    }
};
PresignAgentStoreReadsRequest = class _PresignAgentStoreReadsRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.agentId = "";
        this.relPaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PresignAgentStoreReadsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PresignAgentStoreReadsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PresignAgentStoreReadsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PresignAgentStoreReadsRequest, a, b2);
    }
    static $() {
        return [
            "PresignAgentStoreReadsRequest|1 agent_id 9|2 rel_paths 9*|3 share_id 9?|4 store_id 9?"
        ];
    }
};
PresignAgentStoreReadsResponse = class _PresignAgentStoreReadsResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.instructions = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PresignAgentStoreReadsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PresignAgentStoreReadsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PresignAgentStoreReadsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PresignAgentStoreReadsResponse, a, b2);
    }
    static $() {
        return [
            "PresignAgentStoreReadsResponse|1 instructions #0*",
            AgentStoreReadInstruction
        ];
    }
};
AgentStoreMultipartUploadPartDescriptor = class _AgentStoreMultipartUploadPartDescriptor extends __protoMessage3137 {
    constructor(data){
        super();
        this.partNumber = 0;
        this.offsetBytes = protoInt64.zero;
        this.sizeBytes = protoInt64.zero;
        this.checksumSha256 = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreMultipartUploadPartDescriptor().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreMultipartUploadPartDescriptor().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreMultipartUploadPartDescriptor().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreMultipartUploadPartDescriptor, a, b2);
    }
    static $() {
        return [
            "AgentStoreMultipartUploadPartDescriptor|1 part_number 13|2 offset_bytes 3|3 size_bytes 3|4 checksum_sha256 12"
        ];
    }
};
AgentStoreWriteFileEntry = class _AgentStoreWriteFileEntry extends __protoMessage3137 {
    constructor(data){
        super();
        this.relPath = "";
        this.sizeBytes = protoInt64.zero;
        this.sha = "";
        this.precondition = {
            case: void 0
        };
        this.multipartParts = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreWriteFileEntry().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreWriteFileEntry().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreWriteFileEntry().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreWriteFileEntry, a, b2);
    }
    static $() {
        return [
            "AgentStoreWriteFileEntry|1 rel_path 9|2 size_bytes 3|3 sha 9|4 base_etag 9 precondition|5 expect_absent 8 precondition|6 multipart_parts #0*",
            AgentStoreMultipartUploadPartDescriptor
        ];
    }
};
AgentStoreConflictWriteInstruction = class _AgentStoreConflictWriteInstruction extends __protoMessage3137 {
    constructor(data){
        super();
        this.relPath = "";
        this.url = "";
        this.headers = {};
        this.expiresAtMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreConflictWriteInstruction().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreConflictWriteInstruction().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreConflictWriteInstruction().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreConflictWriteInstruction, a, b2);
    }
    static $() {
        return [
            "AgentStoreConflictWriteInstruction|1 rel_path 9|2 url 9|3 headers 9,9|4 expires_at_ms 3|5 multipart #0?",
            AgentStoreMultipartWriteInstruction
        ];
    }
};
AgentStoreLockRedirect = class _AgentStoreLockRedirect extends __protoMessage3137 {
    constructor(data){
        super();
        this.conflictRelPath = "";
        this.lockExpiresAtMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreLockRedirect().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreLockRedirect().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreLockRedirect().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreLockRedirect, a, b2);
    }
    static $() {
        return [
            "AgentStoreLockRedirect|1 holder #0?|2 conflict_rel_path 9|3 lock_expires_at_ms 3",
            AgentStoreFileLockHolder
        ];
    }
};
AgentStoreWriteInstruction = class _AgentStoreWriteInstruction extends __protoMessage3137 {
    constructor(data){
        super();
        this.relPath = "";
        this.url = "";
        this.headers = {};
        this.expiresAtMs = protoInt64.zero;
        this.primaryPreconditionFailed = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreWriteInstruction().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreWriteInstruction().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreWriteInstruction().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreWriteInstruction, a, b2);
    }
    static $() {
        return [
            "AgentStoreWriteInstruction|1 rel_path 9|2 url 9|3 headers 9,9|4 expires_at_ms 3|5 conflict #0?|6 lock_redirect #1?|7 multipart #2?|8 primary_precondition_failed 8",
            AgentStoreConflictWriteInstruction,
            AgentStoreLockRedirect,
            AgentStoreMultipartWriteInstruction
        ];
    }
};
AgentStoreMultipartWriteInstruction = class _AgentStoreMultipartWriteInstruction extends __protoMessage3137 {
    constructor(data){
        super();
        this.parts = [];
        this.partUrlsExpiresAtMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreMultipartWriteInstruction().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreMultipartWriteInstruction().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreMultipartWriteInstruction().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreMultipartWriteInstruction, a, b2);
    }
    static $() {
        return [
            "AgentStoreMultipartWriteInstruction|1 context #0|2 parts #1*|3 part_urls_expires_at_ms 3",
            AgentStoreMultipartUploadContext,
            AgentStoreMultipartUploadPartInstruction
        ];
    }
};
AgentStoreMultipartUploadPartInstruction = class _AgentStoreMultipartUploadPartInstruction extends __protoMessage3137 {
    constructor(data){
        super();
        this.partNumber = 0;
        this.url = "";
        this.headers = {};
        this.offsetBytes = protoInt64.zero;
        this.sizeBytes = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreMultipartUploadPartInstruction().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreMultipartUploadPartInstruction().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreMultipartUploadPartInstruction().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreMultipartUploadPartInstruction, a, b2);
    }
    static $() {
        return [
            "AgentStoreMultipartUploadPartInstruction|1 part_number 13|2 url 9|3 headers 9,9|4 offset_bytes 3|5 size_bytes 3"
        ];
    }
};
AgentStoreMultipartUploadContext = class _AgentStoreMultipartUploadContext extends __protoMessage3137 {
    constructor(data){
        super();
        this.uploadId = "";
        this.storeId = "";
        this.relPath = "";
        this.sizeBytes = protoInt64.zero;
        this.sha = "";
        this.expectedPartCount = 0;
        this.precondition = {
            case: void 0
        };
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreMultipartUploadContext().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreMultipartUploadContext().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreMultipartUploadContext().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreMultipartUploadContext, a, b2);
    }
    static $() {
        return [
            "AgentStoreMultipartUploadContext|1 upload_id 9|2 store_id 9|3 rel_path 9|4 size_bytes 3|5 sha 9|6 expected_part_count 13|7 base_etag 9 precondition|8 expect_absent 8 precondition|9 session_id 9"
        ];
    }
};
PresignAgentStoreWritesRequest = class _PresignAgentStoreWritesRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.agentId = "";
        this.files = [];
        this.supportsSignedContentLength = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PresignAgentStoreWritesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PresignAgentStoreWritesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PresignAgentStoreWritesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PresignAgentStoreWritesRequest, a, b2);
    }
    static $() {
        return [
            "PresignAgentStoreWritesRequest|1 agent_id 9|2 files #0*|3 store_id 9?|4 lock_token 9?|5 lock_client_uuid 9?|6 supports_signed_content_length 8",
            AgentStoreWriteFileEntry
        ];
    }
};
PresignAgentStoreWritesResponse = class _PresignAgentStoreWritesResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.instructions = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PresignAgentStoreWritesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PresignAgentStoreWritesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PresignAgentStoreWritesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PresignAgentStoreWritesResponse, a, b2);
    }
    static $() {
        return [
            "PresignAgentStoreWritesResponse|1 instructions #0*",
            AgentStoreWriteInstruction
        ];
    }
};
AgentStoreMultipartUploadedPart = class _AgentStoreMultipartUploadedPart extends __protoMessage3137 {
    constructor(data){
        super();
        this.partNumber = 0;
        this.etag = "";
        this.checksumSha256 = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreMultipartUploadedPart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreMultipartUploadedPart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreMultipartUploadedPart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreMultipartUploadedPart, a, b2);
    }
    static $() {
        return [
            "AgentStoreMultipartUploadedPart|1 part_number 13|2 etag 9|3 checksum_sha256 12"
        ];
    }
};
AgentStoreMultipartWriteCompletion = class _AgentStoreMultipartWriteCompletion extends __protoMessage3137 {
    constructor(data){
        super();
        this.parts = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreMultipartWriteCompletion().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreMultipartWriteCompletion().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreMultipartWriteCompletion().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreMultipartWriteCompletion, a, b2);
    }
    static $() {
        return [
            "AgentStoreMultipartWriteCompletion|1 context #0|2 parts #1*",
            AgentStoreMultipartUploadContext,
            AgentStoreMultipartUploadedPart
        ];
    }
};
CompleteAgentStoreMultipartWritesRequest = class _CompleteAgentStoreMultipartWritesRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.storeId = "";
        this.completions = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CompleteAgentStoreMultipartWritesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CompleteAgentStoreMultipartWritesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CompleteAgentStoreMultipartWritesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CompleteAgentStoreMultipartWritesRequest, a, b2);
    }
    static $() {
        return [
            "CompleteAgentStoreMultipartWritesRequest|1 store_id 9|2 completions #0*",
            AgentStoreMultipartWriteCompletion
        ];
    }
};
AgentStoreMultipartWriteSuccess = class _AgentStoreMultipartWriteSuccess extends __protoMessage3137 {
    constructor(data){
        super();
        this.etag = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreMultipartWriteSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreMultipartWriteSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreMultipartWriteSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreMultipartWriteSuccess, a, b2);
    }
    static $() {
        return [
            "AgentStoreMultipartWriteSuccess|1 etag 9"
        ];
    }
};
AgentStoreMultipartOperationFailure = class _AgentStoreMultipartOperationFailure extends __protoMessage3137 {
    constructor(data){
        super();
        this.code = AgentStoreMultipartOperationFailureCode.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreMultipartOperationFailure().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreMultipartOperationFailure().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreMultipartOperationFailure().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreMultipartOperationFailure, a, b2);
    }
    static $() {
        return [
            "AgentStoreMultipartOperationFailure|1 code #0",
            AgentStoreMultipartOperationFailureCode
        ];
    }
};
AgentStoreMultipartWriteResult = class _AgentStoreMultipartWriteResult extends __protoMessage3137 {
    constructor(data){
        super();
        this.inputIndex = 0;
        this.relPath = "";
        this.outcome = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreMultipartWriteResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreMultipartWriteResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreMultipartWriteResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreMultipartWriteResult, a, b2);
    }
    static $() {
        return [
            "AgentStoreMultipartWriteResult|1 input_index 13|2 rel_path 9|3 success #0 outcome|4 failure #1 outcome",
            AgentStoreMultipartWriteSuccess,
            AgentStoreMultipartOperationFailure
        ];
    }
};
CompleteAgentStoreMultipartWritesResponse = class _CompleteAgentStoreMultipartWritesResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.results = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CompleteAgentStoreMultipartWritesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CompleteAgentStoreMultipartWritesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CompleteAgentStoreMultipartWritesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CompleteAgentStoreMultipartWritesResponse, a, b2);
    }
    static $() {
        return [
            "CompleteAgentStoreMultipartWritesResponse|1 results #0*",
            AgentStoreMultipartWriteResult
        ];
    }
};
AgentStoreMultipartWriteAbort = class _AgentStoreMultipartWriteAbort extends __protoMessage3137 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreMultipartWriteAbort().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreMultipartWriteAbort().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreMultipartWriteAbort().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreMultipartWriteAbort, a, b2);
    }
    static $() {
        return [
            "AgentStoreMultipartWriteAbort|1 context #0",
            AgentStoreMultipartUploadContext
        ];
    }
};
AbortAgentStoreMultipartWritesRequest = class _AbortAgentStoreMultipartWritesRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.storeId = "";
        this.uploads = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AbortAgentStoreMultipartWritesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AbortAgentStoreMultipartWritesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AbortAgentStoreMultipartWritesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AbortAgentStoreMultipartWritesRequest, a, b2);
    }
    static $() {
        return [
            "AbortAgentStoreMultipartWritesRequest|1 store_id 9|2 uploads #0*",
            AgentStoreMultipartWriteAbort
        ];
    }
};
AgentStoreMultipartAbortSuccess = class _AgentStoreMultipartAbortSuccess extends __protoMessage3137 {
    constructor(data){
        super();
        this.alreadyFinished = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreMultipartAbortSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreMultipartAbortSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreMultipartAbortSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreMultipartAbortSuccess, a, b2);
    }
    static $() {
        return [
            "AgentStoreMultipartAbortSuccess|1 already_finished 8"
        ];
    }
};
AgentStoreMultipartAbortResult = class _AgentStoreMultipartAbortResult extends __protoMessage3137 {
    constructor(data){
        super();
        this.inputIndex = 0;
        this.relPath = "";
        this.outcome = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreMultipartAbortResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreMultipartAbortResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreMultipartAbortResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreMultipartAbortResult, a, b2);
    }
    static $() {
        return [
            "AgentStoreMultipartAbortResult|1 input_index 13|2 rel_path 9|3 success #0 outcome|4 failure #1 outcome",
            AgentStoreMultipartAbortSuccess,
            AgentStoreMultipartOperationFailure
        ];
    }
};
AbortAgentStoreMultipartWritesResponse = class _AbortAgentStoreMultipartWritesResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.results = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AbortAgentStoreMultipartWritesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AbortAgentStoreMultipartWritesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AbortAgentStoreMultipartWritesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AbortAgentStoreMultipartWritesResponse, a, b2);
    }
    static $() {
        return [
            "AbortAgentStoreMultipartWritesResponse|1 results #0*",
            AgentStoreMultipartAbortResult
        ];
    }
};
AgentStoreFileLockHolder = class _AgentStoreFileLockHolder extends __protoMessage3137 {
    constructor(data){
        super();
        this.clientUuid = "";
        this.pid = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreFileLockHolder().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreFileLockHolder().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreFileLockHolder().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreFileLockHolder, a, b2);
    }
    static $() {
        return [
            "AgentStoreFileLockHolder|1 client_uuid 9|2 pid 13"
        ];
    }
};
AcquireAgentStoreFileLockRequest = class _AcquireAgentStoreFileLockRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.storeId = "";
        this.relPath = "";
        this.acquisitionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AcquireAgentStoreFileLockRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AcquireAgentStoreFileLockRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AcquireAgentStoreFileLockRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AcquireAgentStoreFileLockRequest, a, b2);
    }
    static $() {
        return [
            "AcquireAgentStoreFileLockRequest|1 store_id 9|2 rel_path 9|3 holder #0|4 acquisition_id 9|5 ttl_seconds 3?",
            AgentStoreFileLockHolder
        ];
    }
};
AcquireAgentStoreFileLockResponse = class _AcquireAgentStoreFileLockResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.acquired = false;
        this.expiresAtMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AcquireAgentStoreFileLockResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AcquireAgentStoreFileLockResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AcquireAgentStoreFileLockResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AcquireAgentStoreFileLockResponse, a, b2);
    }
    static $() {
        return [
            "AcquireAgentStoreFileLockResponse|1 acquired 8|2 lock_token 9?|3 current_holder #0?|4 expires_at_ms 3",
            AgentStoreFileLockHolder
        ];
    }
};
RenewAgentStoreFileLockRequest = class _RenewAgentStoreFileLockRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.storeId = "";
        this.relPath = "";
        this.lockToken = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RenewAgentStoreFileLockRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RenewAgentStoreFileLockRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RenewAgentStoreFileLockRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RenewAgentStoreFileLockRequest, a, b2);
    }
    static $() {
        return [
            "RenewAgentStoreFileLockRequest|1 store_id 9|2 rel_path 9|3 lock_token 9"
        ];
    }
};
RenewAgentStoreFileLockResponse = class _RenewAgentStoreFileLockResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.renewed = false;
        this.expiresAtMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RenewAgentStoreFileLockResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RenewAgentStoreFileLockResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RenewAgentStoreFileLockResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RenewAgentStoreFileLockResponse, a, b2);
    }
    static $() {
        return [
            "RenewAgentStoreFileLockResponse|1 renewed 8|2 expires_at_ms 3"
        ];
    }
};
ReleaseAgentStoreFileLockRequest = class _ReleaseAgentStoreFileLockRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.storeId = "";
        this.relPath = "";
        this.lockToken = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReleaseAgentStoreFileLockRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReleaseAgentStoreFileLockRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReleaseAgentStoreFileLockRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReleaseAgentStoreFileLockRequest, a, b2);
    }
    static $() {
        return [
            "ReleaseAgentStoreFileLockRequest|1 store_id 9|2 rel_path 9|3 lock_token 9"
        ];
    }
};
ReleaseAgentStoreFileLockResponse = class _ReleaseAgentStoreFileLockResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.released = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReleaseAgentStoreFileLockResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReleaseAgentStoreFileLockResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReleaseAgentStoreFileLockResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReleaseAgentStoreFileLockResponse, a, b2);
    }
    static $() {
        return [
            "ReleaseAgentStoreFileLockResponse|1 released 8"
        ];
    }
};
GetAgentStoreFileLockRequest = class _GetAgentStoreFileLockRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.storeId = "";
        this.relPath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetAgentStoreFileLockRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetAgentStoreFileLockRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetAgentStoreFileLockRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetAgentStoreFileLockRequest, a, b2);
    }
    static $() {
        return [
            "GetAgentStoreFileLockRequest|1 store_id 9|2 rel_path 9"
        ];
    }
};
GetAgentStoreFileLockResponse = class _GetAgentStoreFileLockResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.held = false;
        this.expiresAtMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetAgentStoreFileLockResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetAgentStoreFileLockResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetAgentStoreFileLockResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetAgentStoreFileLockResponse, a, b2);
    }
    static $() {
        return [
            "GetAgentStoreFileLockResponse|1 held 8|2 holder #0?|3 expires_at_ms 3",
            AgentStoreFileLockHolder
        ];
    }
};
AgentStoreDeleteFileEntry = class _AgentStoreDeleteFileEntry extends __protoMessage3137 {
    constructor(data){
        super();
        this.relPath = "";
        this.baseEtag = "";
        this.deleteCurrent = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreDeleteFileEntry().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreDeleteFileEntry().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreDeleteFileEntry().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreDeleteFileEntry, a, b2);
    }
    static $() {
        return [
            "AgentStoreDeleteFileEntry|1 rel_path 9|2 base_etag 9|3 mutation_id 9?|4 delete_current 8"
        ];
    }
};
AgentStoreDeleteFileResult = class _AgentStoreDeleteFileResult extends __protoMessage3137 {
    constructor(data){
        super();
        this.relPath = "";
        this.status = AgentStoreDeleteFileStatus.UNSPECIFIED;
        this.tombstoneEtag = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreDeleteFileResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreDeleteFileResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreDeleteFileResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreDeleteFileResult, a, b2);
    }
    static $() {
        return [
            "AgentStoreDeleteFileResult|1 rel_path 9|2 status #0|3 tombstone_etag 9|4 current_etag 9?",
            AgentStoreDeleteFileStatus
        ];
    }
};
DeleteAgentStoreFilesRequest = class _DeleteAgentStoreFilesRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.files = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeleteAgentStoreFilesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeleteAgentStoreFilesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeleteAgentStoreFilesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeleteAgentStoreFilesRequest, a, b2);
    }
    static $() {
        return [
            "DeleteAgentStoreFilesRequest|1 store_id 9?|2 files #0*",
            AgentStoreDeleteFileEntry
        ];
    }
};
DeleteAgentStoreFilesResponse = class _DeleteAgentStoreFilesResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.results = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeleteAgentStoreFilesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeleteAgentStoreFilesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeleteAgentStoreFilesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeleteAgentStoreFilesResponse, a, b2);
    }
    static $() {
        return [
            "DeleteAgentStoreFilesResponse|1 results #0*",
            AgentStoreDeleteFileResult
        ];
    }
};
RmdirAgentStoreRequest = class _RmdirAgentStoreRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.relPath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RmdirAgentStoreRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RmdirAgentStoreRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RmdirAgentStoreRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RmdirAgentStoreRequest, a, b2);
    }
    static $() {
        return [
            "RmdirAgentStoreRequest|1 store_id 9?|2 share_id 9?|3 rel_path 9"
        ];
    }
};
RmdirAgentStoreResponse = class _RmdirAgentStoreResponse extends __protoMessage3137 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RmdirAgentStoreResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RmdirAgentStoreResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RmdirAgentStoreResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RmdirAgentStoreResponse, a, b2);
    }
    static $() {
        return [
            "RmdirAgentStoreResponse"
        ];
    }
};
AgentStoreUndeleteFileEntry = class _AgentStoreUndeleteFileEntry extends __protoMessage3137 {
    constructor(data){
        super();
        this.relPath = "";
        this.tombstoneEtag = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreUndeleteFileEntry().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreUndeleteFileEntry().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreUndeleteFileEntry().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreUndeleteFileEntry, a, b2);
    }
    static $() {
        return [
            "AgentStoreUndeleteFileEntry|1 rel_path 9|2 tombstone_etag 9|3 mutation_id 9?"
        ];
    }
};
AgentStoreUndeleteFileResult = class _AgentStoreUndeleteFileResult extends __protoMessage3137 {
    constructor(data){
        super();
        this.relPath = "";
        this.status = AgentStoreUndeleteFileStatus.UNSPECIFIED;
        this.restoredEtag = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreUndeleteFileResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreUndeleteFileResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreUndeleteFileResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreUndeleteFileResult, a, b2);
    }
    static $() {
        return [
            "AgentStoreUndeleteFileResult|1 rel_path 9|2 status #0|3 restored_etag 9|4 current_etag 9?",
            AgentStoreUndeleteFileStatus
        ];
    }
};
UndeleteAgentStoreFilesRequest = class _UndeleteAgentStoreFilesRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.files = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UndeleteAgentStoreFilesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UndeleteAgentStoreFilesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UndeleteAgentStoreFilesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UndeleteAgentStoreFilesRequest, a, b2);
    }
    static $() {
        return [
            "UndeleteAgentStoreFilesRequest|1 store_id 9?|2 files #0*",
            AgentStoreUndeleteFileEntry
        ];
    }
};
UndeleteAgentStoreFilesResponse = class _UndeleteAgentStoreFilesResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.results = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UndeleteAgentStoreFilesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UndeleteAgentStoreFilesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UndeleteAgentStoreFilesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UndeleteAgentStoreFilesResponse, a, b2);
    }
    static $() {
        return [
            "UndeleteAgentStoreFilesResponse|1 results #0*",
            AgentStoreUndeleteFileResult
        ];
    }
};
ListAgentStoreTombstonesRequest = class _ListAgentStoreTombstonesRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.storeId = "";
        this.pageSize = 0;
        this.pageToken = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentStoreTombstonesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentStoreTombstonesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentStoreTombstonesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentStoreTombstonesRequest, a, b2);
    }
    static $() {
        return [
            "ListAgentStoreTombstonesRequest|1 store_id 9|2 page_size 5|3 page_token 9"
        ];
    }
};
ListAgentStoreTombstonesResponse = class _ListAgentStoreTombstonesResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.tombstones = [];
        this.nextPageToken = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentStoreTombstonesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentStoreTombstonesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentStoreTombstonesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentStoreTombstonesResponse, a, b2);
    }
    static $() {
        return [
            "ListAgentStoreTombstonesResponse|1 tombstones #0*|2 next_page_token 9",
            AgentStoreTombstone
        ];
    }
};
SharedAgentStoreInfo = class _SharedAgentStoreInfo extends __protoMessage3137 {
    constructor(data){
        super();
        this.shareId = "";
        this.pathPrefix = "";
        this.visibility = AgentStoreShareVisibility.UNSPECIFIED;
        this.createdAtMs = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SharedAgentStoreInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SharedAgentStoreInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SharedAgentStoreInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SharedAgentStoreInfo, a, b2);
    }
    static $() {
        return [
            "SharedAgentStoreInfo|1 share_id 9|2 path_prefix 9|3 visibility #0|4 created_at_ms 1|5 revoked_at_ms 1?",
            AgentStoreShareVisibility
        ];
    }
};
ShareAgentStoreRequest = class _ShareAgentStoreRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.agentId = "";
        this.pathPrefix = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ShareAgentStoreRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ShareAgentStoreRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ShareAgentStoreRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ShareAgentStoreRequest, a, b2);
    }
    static $() {
        return [
            "ShareAgentStoreRequest|1 agent_id 9|2 path_prefix 9|4 store_id 9?|5 source #0",
            AgentStoreSourceRef
        ];
    }
};
ShareAgentStoreResponse = class _ShareAgentStoreResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.shareId = "";
        this.shareUrl = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ShareAgentStoreResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ShareAgentStoreResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ShareAgentStoreResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ShareAgentStoreResponse, a, b2);
    }
    static $() {
        return [
            "ShareAgentStoreResponse|1 share_id 9|2 share_url 9"
        ];
    }
};
UnshareAgentStoreRequest = class _UnshareAgentStoreRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.shareId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UnshareAgentStoreRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UnshareAgentStoreRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UnshareAgentStoreRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UnshareAgentStoreRequest, a, b2);
    }
    static $() {
        return [
            "UnshareAgentStoreRequest|1 share_id 9"
        ];
    }
};
UnshareAgentStoreResponse = class _UnshareAgentStoreResponse extends __protoMessage3137 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UnshareAgentStoreResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UnshareAgentStoreResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UnshareAgentStoreResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UnshareAgentStoreResponse, a, b2);
    }
    static $() {
        return [
            "UnshareAgentStoreResponse"
        ];
    }
};
ListSharedAgentStoresRequest = class _ListSharedAgentStoresRequest extends __protoMessage3137 {
    constructor(data){
        super();
        this.limit = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListSharedAgentStoresRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListSharedAgentStoresRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListSharedAgentStoresRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListSharedAgentStoresRequest, a, b2);
    }
    static $() {
        return [
            "ListSharedAgentStoresRequest|1 limit 5|2 created_before_ms 1?|3 owning_user_id 5?|4 search_query 9?|5 scope #0?|6 created_before_share_id 9?",
            ListSharedAgentStoresScope
        ];
    }
};
SharedAgentStoreListing = class _SharedAgentStoreListing extends __protoMessage3137 {
    constructor(data){
        super();
        this.shareId = "";
        this.agentId = "";
        this.storeId = "";
        this.pathPrefix = "";
        this.visibility = AgentStoreShareVisibility.UNSPECIFIED;
        this.createdAtMs = 0;
        this.ownerDisplayName = "";
        this.storeKind = "";
        this.kind = AgentStoreKind.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SharedAgentStoreListing().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SharedAgentStoreListing().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SharedAgentStoreListing().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SharedAgentStoreListing, a, b2);
    }
    static $() {
        return [
            "SharedAgentStoreListing|1 share_id 9|2 agent_id 9|3 store_id 9|4 path_prefix 9|5 visibility #0|6 created_at_ms 1|7 revoked_at_ms 1?|8 owning_user_id 5?|9 owning_team_id 5?|10 owner_display_name 9|11 store_kind 9|12 kind #1|13 source #2",
            AgentStoreShareVisibility,
            AgentStoreKind,
            AgentStoreSourceRef
        ];
    }
};
ListSharedAgentStoresResponse = class _ListSharedAgentStoresResponse extends __protoMessage3137 {
    constructor(data){
        super();
        this.listings = [];
        this.hasMore = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListSharedAgentStoresResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListSharedAgentStoresResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListSharedAgentStoresResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListSharedAgentStoresResponse, a, b2);
    }
    static $() {
        return [
            "ListSharedAgentStoresResponse|1 listings #0*|2 has_more 8|3 next_created_before_ms 1?|4 next_created_before_share_id 9?",
            SharedAgentStoreListing
        ];
    }
};

}
