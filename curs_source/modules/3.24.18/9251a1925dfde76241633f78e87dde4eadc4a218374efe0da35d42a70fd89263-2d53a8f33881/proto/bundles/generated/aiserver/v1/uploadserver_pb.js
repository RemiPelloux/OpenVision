import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { DocumentationMetadata, init_docs_pb } from "./docs_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage160, __protoMessage3153, UploadStatus, RescrapeDocsRequest, RescrapeDocsRequestV2, RescrapeDocsResponse, UploadedStatusRequest, UploadDocumentationRequest, GetPagesRequest, GetDocRequest, ProtoDoc, ProtoDocPage, Pages, MarkAsPublicRequest, NewDocumentationRequest, UploadResponse, UploadResponse_Status, UploadedStatus, UploadedStatus_Status, UpsertDocsRequest, UpsertDocsResponse;
export { GetDocRequest, GetPagesRequest, MarkAsPublicRequest, NewDocumentationRequest, Pages, ProtoDoc, ProtoDocPage, RescrapeDocsRequest, RescrapeDocsRequestV2, RescrapeDocsResponse, UploadDocumentationRequest, UploadResponse, UploadResponse_Status, UploadStatus, UploadedStatus, UploadedStatusRequest, UploadedStatus_Status, UpsertDocsRequest, UpsertDocsResponse, __protoMessage3153, __protoPackage160 };
var __wakaru_init_uploadserver_pb_initialized = false;
export function init_uploadserver_pb() {
if (__wakaru_init_uploadserver_pb_initialized) return;
__wakaru_init_uploadserver_pb_initialized = true;
"use strict";
init_esm2();
init_docs_pb();
init_compact();
__protoPackage160 = "aiserver.v1.";
__protoMessage3153 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage160;
    }
};
UploadStatus = enumType2(proto3, __protoPackage160, "UploadStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IN_PROGRESS"
    ],
    [
        2,
        "SUCCEEDED"
    ],
    [
        3,
        "FAILED"
    ],
    [
        4,
        "NOT_FOUND"
    ]
], 1);
RescrapeDocsRequest = class _RescrapeDocsRequest extends __protoMessage3153 {
    constructor(data){
        super();
        this.docIdentifier = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RescrapeDocsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RescrapeDocsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RescrapeDocsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RescrapeDocsRequest, a, b2);
    }
    static $() {
        return [
            "RescrapeDocsRequest|1 doc_identifier 9|2 force_reupload 8?"
        ];
    }
};
RescrapeDocsRequestV2 = class _RescrapeDocsRequestV2 extends __protoMessage3153 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RescrapeDocsRequestV2().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RescrapeDocsRequestV2().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RescrapeDocsRequestV2().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RescrapeDocsRequestV2, a, b2);
    }
    static $() {
        return [
            "RescrapeDocsRequestV2|1 new_doc_req #0|2 force_reupload 8?",
            NewDocumentationRequest
        ];
    }
};
RescrapeDocsResponse = class _RescrapeDocsResponse extends __protoMessage3153 {
    constructor(data){
        super();
        this.success = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RescrapeDocsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RescrapeDocsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RescrapeDocsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RescrapeDocsResponse, a, b2);
    }
    static $() {
        return [
            "RescrapeDocsResponse|1 success 8|2 new_doc_identifier 9?"
        ];
    }
};
UploadedStatusRequest = class _UploadedStatusRequest extends __protoMessage3153 {
    constructor(data){
        super();
        this.docIdentifier = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UploadedStatusRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UploadedStatusRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UploadedStatusRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UploadedStatusRequest, a, b2);
    }
    static $() {
        return [
            "UploadedStatusRequest|1 doc_identifier 9"
        ];
    }
};
UploadDocumentationRequest = class _UploadDocumentationRequest extends __protoMessage3153 {
    constructor(data){
        super();
        this.docIdentifier = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UploadDocumentationRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UploadDocumentationRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UploadDocumentationRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UploadDocumentationRequest, a, b2);
    }
    static $() {
        return [
            "UploadDocumentationRequest|1 doc_identifier 9"
        ];
    }
};
GetPagesRequest = class _GetPagesRequest extends __protoMessage3153 {
    constructor(data){
        super();
        this.docIdentifier = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetPagesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetPagesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetPagesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetPagesRequest, a, b2);
    }
    static $() {
        return [
            "GetPagesRequest|1 doc_identifier 9"
        ];
    }
};
GetDocRequest = class _GetDocRequest extends __protoMessage3153 {
    constructor(data){
        super();
        this.docIdentifier = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetDocRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetDocRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetDocRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetDocRequest, a, b2);
    }
    static $() {
        return [
            "GetDocRequest|1 doc_identifier 9"
        ];
    }
};
ProtoDoc = class _ProtoDoc extends __protoMessage3153 {
    constructor(data){
        super();
        this.id = 0;
        this.uuid = "";
        this.docIdentifier = "";
        this.docName = "";
        this.docUrlRoot = "";
        this.docUrlPrefix = "";
        this.isDifferentPrefix = false;
        this.createdAt = "";
        this.updatedAt = "";
        this.lastUploadedAt = "";
        this.showToAllUsers = false;
        this.teamId = 0;
        this.customInstructions = "";
        this.pages = [];
        this.publishToTeam = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ProtoDoc().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ProtoDoc().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ProtoDoc().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ProtoDoc, a, b2);
    }
    static $() {
        return [
            "ProtoDoc|1 id 5|2 uuid 9|3 doc_identifier 9|4 doc_name 9|5 doc_url_root 9|6 doc_url_prefix 9|7 is_different_prefix 8|8 created_at 9|9 updated_at 9|10 last_uploaded_at 9|11 upload_status #0|12 show_to_all_users 8|13 team_id 5|14 custom_instructions 9|15 pages #1*|16 publish_to_team 8",
            UploadedStatus,
            ProtoDocPage
        ];
    }
};
ProtoDocPage = class _ProtoDocPage extends __protoMessage3153 {
    constructor(data){
        super();
        this.url = "";
        this.title = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ProtoDocPage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ProtoDocPage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ProtoDocPage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ProtoDocPage, a, b2);
    }
    static $() {
        return [
            "ProtoDocPage|1 url 9|2 title 9"
        ];
    }
};
Pages = class _Pages extends __protoMessage3153 {
    constructor(data){
        super();
        this.pages = [];
        this.pageUrls = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Pages().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Pages().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Pages().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_Pages, a, b2);
    }
    static $() {
        return [
            "Pages|1 pages 9*|2 page_urls 9*"
        ];
    }
};
MarkAsPublicRequest = class _MarkAsPublicRequest extends __protoMessage3153 {
    constructor(data){
        super();
        this.docIdentifier = "";
        this.password = "";
        this.docName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MarkAsPublicRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MarkAsPublicRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MarkAsPublicRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MarkAsPublicRequest, a, b2);
    }
    static $() {
        return [
            "MarkAsPublicRequest|1 doc_identifier 9|2 password 9|3 doc_name 9"
        ];
    }
};
NewDocumentationRequest = class _NewDocumentationRequest extends __protoMessage3153 {
    constructor(data){
        super();
        this.docIdentifier = "";
        this.ignorePrefixes = [];
        this.ignoreUrls = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NewDocumentationRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NewDocumentationRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NewDocumentationRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NewDocumentationRequest, a, b2);
    }
    static $() {
        return [
            "NewDocumentationRequest|1 doc_identifier 9|2 metadata #0|4 ignore_prefixes 9*|5 ignore_urls 9*|6 custom_instructions 9?|7 publish_to_team 8?|8 client_handles_uuid 8?",
            DocumentationMetadata
        ];
    }
};
UploadResponse = class _UploadResponse extends __protoMessage3153 {
    constructor(data){
        super();
        this.status = UploadResponse_Status.UNSPECIFIED;
        this.progress = 0;
        this.similarDocIdentifier = "";
        this.uploadedPages = [];
        this.docUuid = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UploadResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UploadResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UploadResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UploadResponse, a, b2);
    }
    static $() {
        return [
            "UploadResponse|1 status #0|2 progress 2|3 similar_doc_identifier 9|4 uploaded_pages 9*|5 doc_uuid 9",
            UploadResponse_Status
        ];
    }
};
UploadResponse_Status = enumType2(proto3, __protoPackage160, "UploadResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUCCESS"
    ],
    [
        2,
        "FAILURE"
    ],
    [
        3,
        "ALREADY_EXISTS"
    ],
    [
        4,
        "SIMILAR_ALREADY_EXISTS"
    ]
], 1);
UploadedStatus = class _UploadedStatus extends __protoMessage3153 {
    constructor(data){
        super();
        this.status = UploadedStatus_Status.UNSPECIFIED;
        this.uploadedPages = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UploadedStatus().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UploadedStatus().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UploadedStatus().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UploadedStatus, a, b2);
    }
    static $() {
        return [
            "UploadedStatus|1 status #0|2 uploaded_pages 9*",
            UploadedStatus_Status
        ];
    }
};
UploadedStatus_Status = enumType2(proto3, __protoPackage160, "UploadedStatus.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IN_PROGRESS"
    ],
    [
        2,
        "SUCCEEDED"
    ],
    [
        3,
        "FAILED"
    ],
    [
        4,
        "NOT_FOUND"
    ]
], 1);
UpsertDocsRequest = class _UpsertDocsRequest extends __protoMessage3153 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpsertDocsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpsertDocsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpsertDocsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpsertDocsRequest, a, b2);
    }
    static $() {
        return [
            "UpsertDocsRequest|1 upload_status #0?|2 ignore_index_prefix 9?|3 doc_id 5?",
            UploadStatus
        ];
    }
};
UpsertDocsResponse = class _UpsertDocsResponse extends __protoMessage3153 {
    constructor(data){
        super();
        this.responses = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpsertDocsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpsertDocsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpsertDocsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpsertDocsResponse, a, b2);
    }
    static $() {
        return [
            "UpsertDocsResponse|1 responses #0*",
            UploadResponse
        ];
    }
};

}
