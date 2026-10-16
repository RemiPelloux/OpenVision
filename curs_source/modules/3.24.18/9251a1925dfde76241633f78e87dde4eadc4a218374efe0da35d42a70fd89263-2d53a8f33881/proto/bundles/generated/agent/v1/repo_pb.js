import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage79, __protoMessage378, RepositoryIndexingInfo;
export { RepositoryIndexingInfo, __protoMessage378, __protoPackage79 };
var __wakaru_init_repo_pb_initialized = false;
export function init_repo_pb() {
if (__wakaru_init_repo_pb_initialized) return;
__wakaru_init_repo_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage79 = "agent.v1.";
__protoMessage378 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage79;
    }
};
RepositoryIndexingInfo = class _RepositoryIndexingInfo extends __protoMessage378 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.remoteUrls = [];
        this.remoteNames = [];
        this.repoName = "";
        this.repoOwner = "";
        this.isTracked = false;
        this.isLocal = false;
        this.workspaceUri = "";
        this.pathEncryptionKey = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepositoryIndexingInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepositoryIndexingInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepositoryIndexingInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepositoryIndexingInfo, a, b2);
    }
    static $() {
        return [
            "RepositoryIndexingInfo|1 relative_workspace_path 9|2 remote_urls 9*|3 remote_names 9*|4 repo_name 9|5 repo_owner 9|6 is_tracked 8|7 is_local 8|8 orthogonal_transform_seed 1?|9 workspace_uri 9|10 path_encryption_key 9"
        ];
    }
};

}
