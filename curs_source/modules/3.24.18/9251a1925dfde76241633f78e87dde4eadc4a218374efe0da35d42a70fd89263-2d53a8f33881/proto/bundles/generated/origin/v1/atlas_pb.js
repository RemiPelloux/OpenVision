import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { ClientRepoIdentifier, init_origin_common_pb } from "./origin_common_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage190, __protoMessage3182, AtlasFreshness, GetAtlasNodeRequest, AtlasNodeLayerContent, GetAtlasNodeResponse, AtlasLayerStatus, GetAtlasRepoStatusRequest, GetAtlasRepoStatusResponse, SetAtlasRepoConfigRequest, SetAtlasRepoConfigResponse, RefreshAtlasRepoRequest, RefreshAtlasRepoResponse, ListAtlasNodePathsRequest, AtlasNodePathEntry, ListAtlasNodePathsResponse;
export { AtlasFreshness, AtlasLayerStatus, AtlasNodeLayerContent, AtlasNodePathEntry, GetAtlasNodeRequest, GetAtlasNodeResponse, GetAtlasRepoStatusRequest, GetAtlasRepoStatusResponse, ListAtlasNodePathsRequest, ListAtlasNodePathsResponse, RefreshAtlasRepoRequest, RefreshAtlasRepoResponse, SetAtlasRepoConfigRequest, SetAtlasRepoConfigResponse, __protoMessage3182, __protoPackage190 };
var __wakaru_init_atlas_pb_initialized = false;
export function init_atlas_pb() {
if (__wakaru_init_atlas_pb_initialized) return;
__wakaru_init_atlas_pb_initialized = true;
"use strict";
init_esm2();
init_origin_common_pb();
init_compact();
__protoPackage190 = "origin.v1.";
__protoMessage3182 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage190;
    }
};
AtlasFreshness = enumType2(proto3, __protoPackage190, "AtlasFreshness", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "EAGER"
    ],
    [
        2,
        "BALANCED"
    ],
    [
        3,
        "RELAXED"
    ],
    [
        4,
        "MANUAL"
    ]
], 1);
GetAtlasNodeRequest = class _GetAtlasNodeRequest extends __protoMessage3182 {
    constructor(data){
        super();
        this.path = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetAtlasNodeRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetAtlasNodeRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetAtlasNodeRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetAtlasNodeRequest, a, b2);
    }
    static $() {
        return [
            "GetAtlasNodeRequest|1 repo #0|2 path 9",
            ClientRepoIdentifier
        ];
    }
};
AtlasNodeLayerContent = class _AtlasNodeLayerContent extends __protoMessage3182 {
    constructor(data){
        super();
        this.layer = "";
        this.label = "";
        this.contentMarkdown = "";
        this.digestJson = "";
        this.status = "";
        this.lastGenAt = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AtlasNodeLayerContent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AtlasNodeLayerContent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AtlasNodeLayerContent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AtlasNodeLayerContent, a, b2);
    }
    static $() {
        return [
            "AtlasNodeLayerContent|1 layer 9|2 label 9|3 content_markdown 9|4 digest_json 9|5 status 9|6 last_gen_at 9"
        ];
    }
};
GetAtlasNodeResponse = class _GetAtlasNodeResponse extends __protoMessage3182 {
    constructor(data){
        super();
        this.lastCommit = "";
        this.layers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetAtlasNodeResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetAtlasNodeResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetAtlasNodeResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetAtlasNodeResponse, a, b2);
    }
    static $() {
        return [
            "GetAtlasNodeResponse|1 last_commit 9|2 layers #0*",
            AtlasNodeLayerContent
        ];
    }
};
AtlasLayerStatus = class _AtlasLayerStatus extends __protoMessage3182 {
    constructor(data){
        super();
        this.layer = "";
        this.label = "";
        this.enabled = false;
        this.generatedNodes = 0;
        this.pendingNodes = 0;
        this.lastGenAt = "";
        this.failedNodes = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AtlasLayerStatus().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AtlasLayerStatus().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AtlasLayerStatus().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AtlasLayerStatus, a, b2);
    }
    static $() {
        return [
            "AtlasLayerStatus|1 layer 9|2 label 9|3 enabled 8|4 generated_nodes 5|5 pending_nodes 5|6 last_gen_at 9|7 failed_nodes 5"
        ];
    }
};
GetAtlasRepoStatusRequest = class _GetAtlasRepoStatusRequest extends __protoMessage3182 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetAtlasRepoStatusRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetAtlasRepoStatusRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetAtlasRepoStatusRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetAtlasRepoStatusRequest, a, b2);
    }
    static $() {
        return [
            "GetAtlasRepoStatusRequest|1 repo #0",
            ClientRepoIdentifier
        ];
    }
};
GetAtlasRepoStatusResponse = class _GetAtlasRepoStatusResponse extends __protoMessage3182 {
    constructor(data){
        super();
        this.configured = false;
        this.enabled = false;
        this.model = "";
        this.nodeCount = 0;
        this.layers = [];
        this.refreshing = false;
        this.freshness = AtlasFreshness.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetAtlasRepoStatusResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetAtlasRepoStatusResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetAtlasRepoStatusResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetAtlasRepoStatusResponse, a, b2);
    }
    static $() {
        return [
            "GetAtlasRepoStatusResponse|1 configured 8|2 enabled 8|3 model 9|4 node_count 5|5 layers #0*|6 refreshing 8|7 freshness #1",
            AtlasLayerStatus,
            AtlasFreshness
        ];
    }
};
SetAtlasRepoConfigRequest = class _SetAtlasRepoConfigRequest extends __protoMessage3182 {
    constructor(data){
        super();
        this.enabled = false;
        this.enabledLayers = [];
        this.freshness = AtlasFreshness.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetAtlasRepoConfigRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetAtlasRepoConfigRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetAtlasRepoConfigRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetAtlasRepoConfigRequest, a, b2);
    }
    static $() {
        return [
            "SetAtlasRepoConfigRequest|1 repo #0|2 enabled 8|3 enabled_layers 9*|4 freshness #1",
            ClientRepoIdentifier,
            AtlasFreshness
        ];
    }
};
SetAtlasRepoConfigResponse = class _SetAtlasRepoConfigResponse extends __protoMessage3182 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetAtlasRepoConfigResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetAtlasRepoConfigResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetAtlasRepoConfigResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetAtlasRepoConfigResponse, a, b2);
    }
    static $() {
        return [
            "SetAtlasRepoConfigResponse|1 status #0",
            GetAtlasRepoStatusResponse
        ];
    }
};
RefreshAtlasRepoRequest = class _RefreshAtlasRepoRequest extends __protoMessage3182 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RefreshAtlasRepoRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RefreshAtlasRepoRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RefreshAtlasRepoRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RefreshAtlasRepoRequest, a, b2);
    }
    static $() {
        return [
            "RefreshAtlasRepoRequest|1 repo #0",
            ClientRepoIdentifier
        ];
    }
};
RefreshAtlasRepoResponse = class _RefreshAtlasRepoResponse extends __protoMessage3182 {
    constructor(data){
        super();
        this.headSha = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RefreshAtlasRepoResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RefreshAtlasRepoResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RefreshAtlasRepoResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RefreshAtlasRepoResponse, a, b2);
    }
    static $() {
        return [
            "RefreshAtlasRepoResponse|1 head_sha 9"
        ];
    }
};
ListAtlasNodePathsRequest = class _ListAtlasNodePathsRequest extends __protoMessage3182 {
    constructor(data){
        super();
        this.pageSize = 0;
        this.pageToken = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAtlasNodePathsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAtlasNodePathsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAtlasNodePathsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAtlasNodePathsRequest, a, b2);
    }
    static $() {
        return [
            "ListAtlasNodePathsRequest|1 repo #0|2 page_size 13|3 page_token 9",
            ClientRepoIdentifier
        ];
    }
};
AtlasNodePathEntry = class _AtlasNodePathEntry extends __protoMessage3182 {
    constructor(data){
        super();
        this.path = "";
        this.diagramKinds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AtlasNodePathEntry().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AtlasNodePathEntry().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AtlasNodePathEntry().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AtlasNodePathEntry, a, b2);
    }
    static $() {
        return [
            "AtlasNodePathEntry|1 path 9|2 diagram_kinds 9*"
        ];
    }
};
ListAtlasNodePathsResponse = class _ListAtlasNodePathsResponse extends __protoMessage3182 {
    constructor(data){
        super();
        this.paths = [];
        this.nextPageToken = "";
        this.entries = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAtlasNodePathsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAtlasNodePathsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAtlasNodePathsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAtlasNodePathsResponse, a, b2);
    }
    static $() {
        return [
            "ListAtlasNodePathsResponse|1 paths 9*|2 next_page_token 9|3 entries #0*",
            AtlasNodePathEntry
        ];
    }
};

}
