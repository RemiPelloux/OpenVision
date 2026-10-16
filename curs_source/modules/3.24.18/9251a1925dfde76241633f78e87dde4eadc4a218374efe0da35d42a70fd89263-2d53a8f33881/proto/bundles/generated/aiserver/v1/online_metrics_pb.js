import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage158, __protoMessage3151, OnlineMetricsConfig;
export { OnlineMetricsConfig, __protoMessage3151, __protoPackage158 };
var __wakaru_init_online_metrics_pb_initialized = false;
export function init_online_metrics_pb() {
if (__wakaru_init_online_metrics_pb_initialized) return;
__wakaru_init_online_metrics_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage158 = "aiserver.v1.";
__protoMessage3151 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage158;
    }
};
OnlineMetricsConfig = class _OnlineMetricsConfig extends __protoMessage3151 {
    constructor(data){
        super();
        this.enabled = false;
        this.maxRequestsTracked = 0;
        this.maxRequestsTrackedMb = 0;
        this.maxRequestRetentionSeconds = 0;
        this.sendOriginalFileContentsForInitialSnapshot = false;
        this.sendFullAddedLinesInDiffChanges = false;
        this.numCommitsTracked = 0;
        this.timeIntervalsTrackedMinutes = [];
        this.tooBigFileSizeBytes = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OnlineMetricsConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OnlineMetricsConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OnlineMetricsConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OnlineMetricsConfig, a, b2);
    }
    static $() {
        return [
            "OnlineMetricsConfig|1 enabled 8|2 max_requests_tracked 5|3 max_requests_tracked_mb 5|4 max_request_retention_seconds 1|5 send_original_file_contents_for_initial_snapshot 8|6 send_full_added_lines_in_diff_changes 8|7 num_commits_tracked 5|8 time_intervals_tracked_minutes 5*|9 too_big_file_size_bytes 5"
        ];
    }
};

}
