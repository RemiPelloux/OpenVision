"use strict";
require.r(exports), require.d(exports, {
    BackgroundComposerService: ()=>Lg
});
var n = require("./module-6038.js"), s = require("./module-7918.js"), i = require("./module-5289.js"), o = require("./module-8592.js");
const a = "anyrun.v1.";
o.HL;
n.proto3, n.proto3;
var u = (0, o.QT)(n.proto3, a, "RestartReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PROCESS_EXITED"
    ],
    [
        2,
        "HEALTH_CHECK_FAILED"
    ]
], 1);
n.proto3;
const c = "anyrun.v1.";
class l extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return c;
    }
}
var m = (0, o.QT)(n.proto3, c, "PrivateWorkerWaitReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NO_CONNECTED_WORKERS"
    ],
    [
        2,
        "LABEL_MISMATCH"
    ],
    [
        3,
        "OWNER_FILTERED"
    ],
    [
        4,
        "SHARED_ASSIGNMENT_FILTERED"
    ],
    [
        5,
        "ALL_BUSY"
    ]
], 1), d = (0, o.QT)(n.proto3, c, "ClonePurpose", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DOCKER_BUILD"
    ],
    [
        2,
        "WORKSPACE_SETUP"
    ]
], 1);
class f extends l {
    constructor(t){
        super(), this.tenantId = "", this.podId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new f).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new f).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new f).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(f, t, e);
    }
    static $() {
        return [
            "PodIdentity|1 tenant_id 9|2 pod_id 9"
        ];
    }
}
class p extends l {
    constructor(t){
        super(), this.creationTimestamp = n.protoInt64.zero, this.payload = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new p).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new p).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new p).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(p, t, e);
    }
    static $() {
        return [
            "PodEvent|49 creation_timestamp 4|26 error #0 payload|1 debug_event 9 payload|43 hydration_started #1 payload|44 hydration_progress #2 payload|45 hydration_completed #1 payload|51 clone_started_v2 #3 payload|52 clone_completed_v2 #4 payload|33 checkout_started #1 payload|34 checkout_completed #1 payload|2 build_started 9 payload|3 build_status_message 9 payload|27 build_step_started #5 payload|28 build_status_line #6 payload|29 internal_build_message #7 payload|30 build_exit_code 5 payload|14 prepare_stdout 9 payload|15 prepare_stderr 9 payload|16 prepare_exit_code 3 payload|50 install_command #8 payload|17 install_stdout 9 payload|18 install_stderr 9 payload|19 install_exit_code 3 payload|46 verify_stdout 9 payload|47 verify_stderr 9 payload|48 verify_exit_code 3 payload|6 start_stdout 9 payload|7 start_stderr 9 payload|8 start_exit_code 3 payload|20 extension_install_stdout #9 payload|21 extension_install_stderr #9 payload|22 extension_install_exit_code #10 payload|35 snapshot_started #1 payload|36 snapshot_completed #1 payload|9 creation_completed #1 payload|10 post_start_stdout 9 payload|11 post_start_stderr 9 payload|12 post_start_exit_code 3 payload|23 extension_start_stdout #9 payload|24 extension_start_stderr #9 payload|25 extension_start_exit_code #10 payload|13 startup_completed #1 payload|37 image_pull_started #11 payload|38 image_pull_layer_update #12 payload|39 image_pull_status_update #13 payload|40 image_pull_completed #14 payload|41 blocked_repo_state #15 payload|42 acquired_repo_state #1 payload|53 private_worker_ready #1 payload|54 waiting_for_worker #16 payload|55 span_started #17 payload|56 span_ended #18 payload|57 lifecycle_process_restarted #19 payload|58 lifecycle_process_exited #20 payload",
            S,
            n.Empty,
            w,
            T,
            x,
            E,
            I,
            C,
            P,
            J,
            B,
            b,
            k,
            q,
            R,
            f,
            y,
            A,
            _,
            h,
            g
        ];
    }
}
class h extends l {
    constructor(t){
        super(), this.attempt = 0, this.previousExitCode = 0, this.reason = u.UNSPECIFIED, this.commandName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new h).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new h).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new h).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(h, t, e);
    }
    static $() {
        return [
            "LifecycleProcessRestarted|1 attempt 13|2 previous_exit_code 5|3 reason #0|4 command_name 9",
            u
        ];
    }
}
class g extends l {
    constructor(t){
        super(), this.exitCode = 0, this.commandName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new g).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new g).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new g).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(g, t, e);
    }
    static $() {
        return [
            "LifecycleProcessExited|1 exit_code 5|2 command_name 9"
        ];
    }
}
class A extends l {
    constructor(t){
        super(), this.spanId = "", this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new A).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new A).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new A).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(A, t, e);
    }
    static $() {
        return [
            "SpanStarted|1 span_id 9|2 name 9|3 parent_span_id 9?|5 href 9?"
        ];
    }
}
class _ extends l {
    constructor(t){
        super(), this.spanId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_, t, e);
    }
    static $() {
        return [
            "SpanEnded|1 span_id 9"
        ];
    }
}
class y extends l {
    constructor(t){
        super(), this.retryCount = 0, this.maxRetries = 0, this.waitReason = m.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new y).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new y).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new y).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(y, t, e);
    }
    static $() {
        return [
            "WaitingForWorkerStatus|1 retry_count 5|2 max_retries 5|3 wait_reason #0",
            m
        ];
    }
}
class w extends l {
    constructor(t){
        super(), this.transferred = n.protoInt64.zero, this.total = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new w).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new w).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new w).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(w, t, e);
    }
    static $() {
        return [
            "HydrationProgress|1 transferred 4|2 total 4"
        ];
    }
}
class S extends l {
    constructor(t){
        super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new S).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new S).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new S).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(S, t, e);
    }
    static $() {
        return [
            "PodErrorEvent|1 error_message 9"
        ];
    }
}
class J extends l {
    constructor(t){
        super(), this.featureId = "", this.output = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new J).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new J).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new J).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(J, t, e);
    }
    static $() {
        return [
            "FeatureOutput|1 feature_id 9|2 output 9"
        ];
    }
}
class B extends l {
    constructor(t){
        super(), this.featureId = "", this.exitCode = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new B).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new B).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new B).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(B, t, e);
    }
    static $() {
        return [
            "FeatureExitCode|1 feature_id 9|2 exit_code 3"
        ];
    }
}
class E extends l {
    constructor(t){
        super(), this.streamId = 0, this.step = 0, this.totalSteps = 0, this.command = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new E).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new E).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new E).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(E, t, e);
    }
    static $() {
        return [
            "BuildStepStarted|1 stream_id 13|2 step 13|3 total_steps 13|4 command 9"
        ];
    }
}
class I extends l {
    constructor(t){
        super(), this.streamId = 0, this.timestamp = "", this.content = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new I).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new I).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new I).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(I, t, e);
    }
    static $() {
        return [
            "BuildStatusLine|1 stream_id 13|2 timestamp 9|3 content 9"
        ];
    }
}
class C extends l {
    constructor(t){
        super(), this.streamId = 0, this.content = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new C).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new C).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new C).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(C, t, e);
    }
    static $() {
        return [
            "InternalBuildMessage|1 stream_id 13|2 content 9"
        ];
    }
}
class b extends l {
    constructor(t){
        super(), this.imageName = "", this.pullId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new b).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new b).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new b).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(b, t, e);
    }
    static $() {
        return [
            "ImagePullStarted|1 image_name 9|2 pull_id 9"
        ];
    }
}
class k extends l {
    constructor(t){
        super(), this.imageName = "", this.pullId = "", this.layerId = "", this.status = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new k).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new k).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new k).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(k, t, e);
    }
    static $() {
        return [
            "ImagePullLayerUpdate|1 image_name 9|2 pull_id 9|3 layer_id 9|4 pulling_fs_layer 8 status|5 waiting 8 status|6 verifying_checksum 8 status|7 download_complete 8 status|8 pull_complete 8 status|9 downloading #0 status|10 extracting #0 status|11 other 9 status",
            v
        ];
    }
}
class v extends l {
    constructor(t){
        super(), this.current = n.protoInt64.zero, this.total = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new v).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new v).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new v).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(v, t, e);
    }
    static $() {
        return [
            "ProgressDetail|1 current 4|2 total 4"
        ];
    }
}
class q extends l {
    constructor(t){
        super(), this.imageName = "", this.pullId = "", this.status = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new q).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new q).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new q).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(q, t, e);
    }
    static $() {
        return [
            "ImagePullStatusUpdate|1 image_name 9|2 pull_id 9|3 status 9"
        ];
    }
}
class R extends l {
    constructor(t){
        super(), this.imageName = "", this.pullId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new R).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new R).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new R).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(R, t, e);
    }
    static $() {
        return [
            "ImagePullCompleted|1 image_name 9|2 pull_id 9"
        ];
    }
}
class P extends l {
    constructor(t){
        super(), this.name = "", this.command = "", this.isSystem = !1, this.failureTolerant = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new P).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new P).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new P).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(P, t, e);
    }
    static $() {
        return [
            "InstallCommand|1 name 9|2 command 9|3 user 9?|4 is_system 8|5 failure_tolerant 8"
        ];
    }
}
class T extends l {
    constructor(t){
        super(), this.purpose = d.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new T).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new T).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new T).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(T, t, e);
    }
    static $() {
        return [
            "CloneStarted|1 purpose #0",
            d
        ];
    }
}
class x extends l {
    constructor(t){
        super(), this.purpose = d.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new x).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new x).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new x).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(x, t, e);
    }
    static $() {
        return [
            "CloneCompleted|1 purpose #0",
            d
        ];
    }
}
const N = "anyrun.v1.";
class D extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return N;
    }
}
n.proto3, n.proto3, n.proto3, n.proto3;
var U = (0, o.QT)(n.proto3, N, "WorkspaceGitSetupMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REUSE"
    ],
    [
        2,
        "REUSE_THEN_CHECKOUT"
    ],
    [
        3,
        "NO_REPO"
    ]
], 1), Q = (0, o.QT)(n.proto3, N, "WarmForkMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "FORKED"
    ],
    [
        3,
        "COLD_FALLBACK"
    ],
    [
        4,
        "LAZY_LOAD"
    ],
    [
        5,
        "COLD_FALLBACK_LAZY_LOAD"
    ]
], 1), M = (0, o.QT)(n.proto3, N, "EnvironmentBuildResolution", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "RESOLVED"
    ],
    [
        2,
        "NO_FINISHED_BUILDS"
    ],
    [
        3,
        "NO_HEALTHY_BUILDS"
    ]
], 1);
n.proto3, n.proto3, n.proto3, n.proto3, n.proto3;
class O extends D {
    constructor(t){
        super(), this.snapshotId = "", this.workspaceGitSetupMode = U.UNSPECIFIED, this.warmForkMode = Q.UNSPECIFIED, this.fastForwardDefaultBranch = !1, this.resolution = M.UNSPECIFIED, this.defaultImageFallback = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new O).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new O).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new O).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(O, t, e);
    }
    static $() {
        return [
            "EnvironmentBuildBootInfo|1 build_id 9?|2 snapshot_id 9|3 workspace_git_setup_mode #0|4 warm_fork_mode #1|5 fast_forward_default_branch 8|6 resolution #2|7 default_image_fallback 8",
            U,
            Q,
            M
        ];
    }
}
n.proto3;
n.proto3;
const F = "anyrun.v1.";
o.HL;
n.proto3, n.proto3, n.proto3, n.proto3;
const L = "anyrun.v1.";
class $ extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return L;
    }
}
n.proto3;
var G = (0, o.QT)(n.proto3, L, "PodCreatingPhase", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CLONE"
    ],
    [
        2,
        "BUILD"
    ],
    [
        3,
        "POST_CREATE"
    ],
    [
        4,
        "UPDATE_CONTENT"
    ],
    [
        5,
        "POST_START"
    ],
    [
        6,
        "QUEUED"
    ]
], 1), H = (0, o.QT)(n.proto3, L, "ImagePullFailureCategory", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DENIED"
    ],
    [
        2,
        "UNAUTHORIZED"
    ],
    [
        3,
        "NOT_FOUND"
    ],
    [
        4,
        "RATE_LIMITED"
    ],
    [
        5,
        "UPSTREAM"
    ]
], 1);
class K extends $ {
    constructor(t){
        super(), this.status = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new K).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new K).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new K).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(K, t, e);
    }
    static $() {
        return [
            "PodStatus|1 creating #0 status|2 running #1 status|3 failed #2 status|4 terminated #3 status",
            V,
            z,
            W,
            Y
        ];
    }
}
class V extends $ {
    constructor(t){
        super(), this.phase = G.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new V).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new V).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new V).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(V, t, e);
    }
    static $() {
        return [
            "PodCreatingStatus|1 phase #0",
            G
        ];
    }
}
class z extends $ {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new z).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new z).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new z).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(z, t, e);
    }
    static $() {
        return [
            "PodRunningStatus|1 missed_heartbeat_deadline 4?"
        ];
    }
}
class W extends $ {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new W).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new W).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new W).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(W, t, e);
    }
    static $() {
        return [
            "PodFailedStatus|1 reason 9|2 failure_details #0?",
            j
        ];
    }
}
class Y extends $ {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Y).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Y).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Y).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Y, t, e);
    }
    static $() {
        return [
            "PodTerminatedStatus|1 reason 9|2 exit_code 13?"
        ];
    }
}
class j extends $ {
    constructor(t){
        super(), this.details = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new j).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new j).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new j).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(j, t, e);
    }
    static $() {
        return [
            "PodFailureDetails|1 install_command_failure #0 details|2 docker_build_failure #1 details|5 container_wait_failure #2 details|6 image_pull_failure #3 details",
            Z,
            tt,
            X,
            et
        ];
    }
}
class X extends $ {
    constructor(t){
        super(), this.exitCode = n.protoInt64.zero, this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new X).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new X).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new X).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(X, t, e);
    }
    static $() {
        return [
            "ContainerWaitFailure|1 exit_code 3|2 message 9"
        ];
    }
}
class Z extends $ {
    constructor(t){
        super(), this.isSystem = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Z).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Z).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Z).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Z, t, e);
    }
    static $() {
        return [
            "InstallCommandFailure|1 is_system 8"
        ];
    }
}
class tt extends $ {
    constructor(t){
        super(), this.exitCode = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tt, t, e);
    }
    static $() {
        return [
            "DockerBuildFailure|1 exit_code 3"
        ];
    }
}
class et extends $ {
    constructor(t){
        super(), this.category = H.UNSPECIFIED, this.retryable = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new et).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new et).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new et).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(et, t, e);
    }
    static $() {
        return [
            "ImagePullFailure|1 category #0|2 retryable 8|3 http_status 5?|4 repository 9?",
            H
        ];
    }
}
const rt = "anyrun.v1.";
o.HL;
var nt = (0, o.QT)(n.proto3, rt, "SnapshotState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CREATING"
    ],
    [
        2,
        "READY"
    ],
    [
        3,
        "FAILED"
    ],
    [
        4,
        "FINALIZING"
    ]
], 1);
n.proto3, n.proto3;
var st = require("./module-9825.js"), it = require("./module-3617.js");
var ot = (0, o.QT)(n.proto3, "aiserver.v1.", "CloudAgentSourceCategory", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DESKTOP"
    ],
    [
        2,
        "WEB"
    ],
    [
        3,
        "MOBILE"
    ],
    [
        4,
        "SLACK"
    ],
    [
        5,
        "LINEAR"
    ],
    [
        6,
        "SCM"
    ],
    [
        7,
        "CLI"
    ],
    [
        8,
        "SETUP"
    ],
    [
        9,
        "SDK"
    ],
    [
        10,
        "AUTOMATIONS"
    ],
    [
        11,
        "API"
    ],
    [
        12,
        "BUGBOT_AUTOFIX"
    ],
    [
        13,
        "QABOT_FRONTEND"
    ],
    [
        14,
        "LOCAL"
    ],
    [
        15,
        "INTERNAL"
    ],
    [
        16,
        "SAND"
    ]
], 1), at = require("./module-6209.js"), ut = require("./module-6993.js"), ct = require("./module-464.js"), lt = require("./module-8072.js"), mt = require("./module-3133.js"), dt = require("./module-1491.js");
const ft = "aiserver.v1.";
class pt extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return ft;
    }
}
var ht = (0, o.QT)(n.proto3, ft, "AgentStoreKind", [
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
], 1), gt = (0, o.QT)(n.proto3, ft, "AgentStoreSourceKind", [
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
], 1), At = (0, o.QT)(n.proto3, ft, "AgentStoreEntryKind", [
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
], 1), _t = (0, o.QT)(n.proto3, ft, "AgentStoreDocumentVisibility", [
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
], 1), yt = (0, o.QT)(n.proto3, ft, "AgentStoreTombstoneMode", [
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
], 1), wt = (0, o.QT)(n.proto3, ft, "AgentStoreDirectoryListingMode", [
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
], 1), St = (0, o.QT)(n.proto3, ft, "AgentStoreMultipartOperationFailureCode", [
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
], 1), Jt = (0, o.QT)(n.proto3, ft, "AgentStoreDeleteFileStatus", [
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
], 1), Bt = (0, o.QT)(n.proto3, ft, "AgentStoreUndeleteFileStatus", [
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
], 1), Et = (0, o.QT)(n.proto3, ft, "AgentStoreShareVisibility", [
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
], 1), It = (0, o.QT)(n.proto3, ft, "ListSharedAgentStoresScope", [
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
class Ct extends pt {
    constructor(t){
        super(), this.n = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ct).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ct).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ct).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ct, t, e);
    }
    static $() {
        return [
            "ListAgentStoresRequest|1 n 5|5 page_token 9?"
        ];
    }
}
class bt extends pt {
    constructor(t){
        super(), this.kind = gt.UNSPECIFIED, this.sourceId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bt, t, e);
    }
    static $() {
        return [
            "AgentStoreSourceRef|1 kind #0|2 source_id 9",
            gt
        ];
    }
}
class kt extends pt {
    constructor(t){
        super(), this.target = {
            case: void 0
        }, this.serverGenerated = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kt, t, e);
    }
    static $() {
        return [
            "AgentStoreMount|1 mount_name 9?|2 source #0 target|3 store_id 9 target|4 share_id 9 target|5 server_generated 8",
            bt
        ];
    }
}
class vt extends pt {
    constructor(t){
        super(), this.storeId = "", this.createdAtMs = 0, this.updatedAtMs = 0, this.repoUrls = [], this.shares = [], this.kind = ht.UNSPECIFIED, this.sourceId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vt, t, e);
    }
    static $() {
        return [
            "AgentStore|1 store_id 9|4 created_at_ms 1|5 updated_at_ms 1|8 repo_urls 9*|9 shares #0*|10 kind #1|11 last_file_write_at_ms 1?|12 source_id 9|13 source_display_name 9?|14 source #2",
            Ke,
            ht,
            bt
        ];
    }
}
class qt extends pt {
    constructor(t){
        super(), this.stores = [], this.hasMore = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qt, t, e);
    }
    static $() {
        return [
            "ListAgentStoresResponse|1 stores #0*|2 has_more 8|4 next_page_token 9?",
            vt
        ];
    }
}
class Rt extends pt {
    constructor(t){
        super(), this.storeId = "", this.relativePath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rt, t, e);
    }
    static $() {
        return [
            "ListAgentStoreEntriesRequest|1 store_id 9|2 relative_path 9|3 share_id 9?"
        ];
    }
}
class Pt extends pt {
    constructor(t){
        super(), this.name = "", this.relativePath = "", this.kind = At.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pt, t, e);
    }
    static $() {
        return [
            "AgentStoreEntry|1 name 9|2 relative_path 9|3 kind #0|4 size_bytes 3?|5 updated_at_ms 1?",
            At
        ];
    }
}
class Tt extends pt {
    constructor(t){
        super(), this.normalizedRelativePath = "", this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tt, t, e);
    }
    static $() {
        return [
            "ListAgentStoreEntriesResponse|1 normalized_relative_path 9|2 entries #0*",
            Pt
        ];
    }
}
class xt extends pt {
    constructor(t){
        super(), this.storeId = "", this.relativePath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xt, t, e);
    }
    static $() {
        return [
            "ReadAgentStoreFileRequest|1 store_id 9|2 relative_path 9|3 share_id 9?"
        ];
    }
}
class Nt extends pt {
    constructor(t){
        super(), this.content = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nt, t, e);
    }
    static $() {
        return [
            "ReadAgentStoreFileResponse|1 content 9|2 document_owner_view #0?",
            Dt
        ];
    }
}
class Dt extends pt {
    constructor(t){
        super(), this.visibility = _t.UNSPECIFIED, this.canShareToTeam = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dt, t, e);
    }
    static $() {
        return [
            "AgentStoreDocumentOwnerView|1 visibility #0|2 can_share_to_team 8",
            _t
        ];
    }
}
class Ut extends pt {
    constructor(t){
        super(), this.storeId = "", this.documentId = "", this.visibility = _t.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ut).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ut).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ut).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ut, t, e);
    }
    static $() {
        return [
            "SetAgentStoreDocumentVisibilityRequest|1 store_id 9|2 document_id 9|3 visibility #0",
            _t
        ];
    }
}
class Qt extends pt {
    constructor(t){
        super(), this.visibility = _t.UNSPECIFIED, this.url = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qt, t, e);
    }
    static $() {
        return [
            "SetAgentStoreDocumentVisibilityResponse|1 visibility #0|2 url 9",
            _t
        ];
    }
}
class Mt extends pt {
    constructor(t){
        super(), this.storeId = "", this.documentId = "", this.source = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mt, t, e);
    }
    static $() {
        return [
            "WriteAgentStoreDocumentRequest|1 store_id 9|2 document_id 9|3 source 9"
        ];
    }
}
class Ot extends pt {
    constructor(t){
        super(), this.etag = "", this.title = "", this.url = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ot).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ot).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ot).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ot, t, e);
    }
    static $() {
        return [
            "WriteAgentStoreDocumentResponse|1 etag 9|3 title 9|4 url 9"
        ];
    }
}
class Ft extends pt {
    constructor(t){
        super(), this.agentId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ft).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ft).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ft).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ft, t, e);
    }
    static $() {
        return [
            "MintAgentStoreTokenRequest|1 agent_id 9|2 share_id 9?|3 store_id 9?|4 source #0",
            bt
        ];
    }
}
class Lt extends pt {
    constructor(t){
        super(), this.token = "", this.expiresAtMs = n.protoInt64.zero, this.agentIds = [], this.storeIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lt, t, e);
    }
    static $() {
        return [
            "MintAgentStoreTokenResponse|1 token 9|2 expires_at_ms 3|3 agent_ids 9*|4 store_ids 9*"
        ];
    }
}
class $t extends pt {
    constructor(t){
        super(), this.relPath = "", this.etag = "", this.sizeBytes = n.protoInt64.zero, this.lastModifiedMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $t).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $t).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $t).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($t, t, e);
    }
    static $() {
        return [
            "AgentStoreFileEntry|1 rel_path 9|2 etag 9|3 size_bytes 3|4 last_modified_ms 3"
        ];
    }
}
class Gt extends pt {
    constructor(t){
        super(), this.agentId = "", this.tombstoneMode = yt.UNSPECIFIED, this.tombstonesSinceMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gt, t, e);
    }
    static $() {
        return [
            "ListAgentStoreFilesRequest|1 agent_id 9|2 share_id 9?|3 store_id 9?|4 tombstone_mode #0|5 tombstones_since_ms 3",
            yt
        ];
    }
}
class Ht extends pt {
    constructor(t){
        super(), this.files = [], this.tombstones = [], this.listingComplete = !1, this.tombstoneWatermarkMs = n.protoInt64.zero, this.tombstoneFloorMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ht).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ht).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ht).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ht, t, e);
    }
    static $() {
        return [
            "ListAgentStoreFilesResponse|1 files #0*|2 tombstones #1*|3 listing_complete 8|4 tombstone_watermark_ms 3|5 tombstone_floor_ms 3",
            $t,
            Kt
        ];
    }
}
class Kt extends pt {
    constructor(t){
        super(), this.relPath = "", this.tombstoneEtag = "", this.deletedAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kt, t, e);
    }
    static $() {
        return [
            "AgentStoreTombstone|1 rel_path 9|2 tombstone_etag 9|3 deleted_at_ms 3"
        ];
    }
}
class Vt extends pt {
    constructor(t){
        super(), this.relativePath = "", this.pageSize = 0, this.pageToken = "", this.preferCompleteFlatStore = !1, this.tombstoneMode = yt.UNSPECIFIED, this.tombstonesSinceMs = n.protoInt64.zero, this.ifVersionEqual = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vt, t, e);
    }
    static $() {
        return [
            "ListAgentStoreDirectoryRequest|1 store_id 9?|2 share_id 9?|3 relative_path 9|4 page_size 5|5 page_token 9|6 prefer_complete_flat_store 8|7 tombstone_mode #0|8 tombstones_since_ms 3|9 if_version_equal 9",
            yt
        ];
    }
}
class zt extends pt {
    constructor(t){
        super(), this.files = [], this.subdirs = [], this.nextPageToken = "", this.mode = wt.UNSPECIFIED, this.tombstones = [], this.removedSubdirs = [], this.listingComplete = !1, this.tombstoneWatermarkMs = n.protoInt64.zero, this.tombstoneFloorMs = n.protoInt64.zero, this.version = "", this.notModified = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zt, t, e);
    }
    static $() {
        return [
            "ListAgentStoreDirectoryResponse|1 files #0*|2 subdirs 9*|3 next_page_token 9|4 mode #1|5 tombstones #2*|6 removed_subdirs 9*|7 listing_complete 8|8 tombstone_watermark_ms 3|9 tombstone_floor_ms 3|10 version 9|11 not_modified 8",
            $t,
            wt,
            Kt
        ];
    }
}
class Wt extends pt {
    constructor(t){
        super(), this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wt, t, e);
    }
    static $() {
        return [
            "CheckAgentStoreVersionsRequest|1 entries #0*",
            Yt
        ];
    }
}
class Yt extends pt {
    constructor(t){
        super(), this.requestId = "", this.token = "", this.version = "", this.preferCompleteFlatStore = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yt, t, e);
    }
    static $() {
        return [
            "CheckAgentStoreVersionsRequest.Entry|1 request_id 9|2 store_id 9?|3 share_id 9?|4 token 9|5 version 9|6 prefer_complete_flat_store 8"
        ];
    }
}
class jt extends pt {
    constructor(t){
        super(), this.results = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jt, t, e);
    }
    static $() {
        return [
            "CheckAgentStoreVersionsResponse|1 results #0*",
            Zt
        ];
    }
}
var Xt = (0, o.QT)(n.proto3, ft, "CheckAgentStoreVersionsResponse.Status", [
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
class Zt extends pt {
    constructor(t){
        super(), this.requestId = "", this.status = Xt.UNSPECIFIED, this.version = "", this.tombstoneWatermarkMs = n.protoInt64.zero, this.tombstoneFloorMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zt, t, e);
    }
    static $() {
        return [
            "CheckAgentStoreVersionsResponse.Result|1 request_id 9|2 status #0|3 version 9|4 tombstone_watermark_ms 3|5 tombstone_floor_ms 3",
            Xt
        ];
    }
}
class te extends pt {
    constructor(t){
        super(), this.relPath = "", this.url = "", this.expiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new te).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new te).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new te).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(te, t, e);
    }
    static $() {
        return [
            "AgentStoreReadInstruction|1 rel_path 9|2 url 9|3 expires_at_ms 3"
        ];
    }
}
class ee extends pt {
    constructor(t){
        super(), this.agentId = "", this.relPaths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ee).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ee).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ee).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ee, t, e);
    }
    static $() {
        return [
            "PresignAgentStoreReadsRequest|1 agent_id 9|2 rel_paths 9*|3 share_id 9?|4 store_id 9?"
        ];
    }
}
class re extends pt {
    constructor(t){
        super(), this.instructions = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new re).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new re).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new re).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(re, t, e);
    }
    static $() {
        return [
            "PresignAgentStoreReadsResponse|1 instructions #0*",
            te
        ];
    }
}
class ne extends pt {
    constructor(t){
        super(), this.partNumber = 0, this.offsetBytes = n.protoInt64.zero, this.sizeBytes = n.protoInt64.zero, this.checksumSha256 = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ne).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ne).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ne).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ne, t, e);
    }
    static $() {
        return [
            "AgentStoreMultipartUploadPartDescriptor|1 part_number 13|2 offset_bytes 3|3 size_bytes 3|4 checksum_sha256 12"
        ];
    }
}
class se extends pt {
    constructor(t){
        super(), this.relPath = "", this.sizeBytes = n.protoInt64.zero, this.sha = "", this.precondition = {
            case: void 0
        }, this.multipartParts = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new se).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new se).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new se).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(se, t, e);
    }
    static $() {
        return [
            "AgentStoreWriteFileEntry|1 rel_path 9|2 size_bytes 3|3 sha 9|4 base_etag 9 precondition|5 expect_absent 8 precondition|6 multipart_parts #0*",
            ne
        ];
    }
}
class ie extends pt {
    constructor(t){
        super(), this.relPath = "", this.url = "", this.headers = {}, this.expiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ie).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ie).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ie).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ie, t, e);
    }
    static $() {
        return [
            "AgentStoreConflictWriteInstruction|1 rel_path 9|2 url 9|3 headers 9,9|4 expires_at_ms 3|5 multipart #0?",
            ue
        ];
    }
}
class oe extends pt {
    constructor(t){
        super(), this.conflictRelPath = "", this.lockExpiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oe, t, e);
    }
    static $() {
        return [
            "AgentStoreLockRedirect|1 holder #0?|2 conflict_rel_path 9|3 lock_expires_at_ms 3",
            Ie
        ];
    }
}
class ae extends pt {
    constructor(t){
        super(), this.relPath = "", this.url = "", this.headers = {}, this.expiresAtMs = n.protoInt64.zero, this.primaryPreconditionFailed = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ae).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ae).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ae).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ae, t, e);
    }
    static $() {
        return [
            "AgentStoreWriteInstruction|1 rel_path 9|2 url 9|3 headers 9,9|4 expires_at_ms 3|5 conflict #0?|6 lock_redirect #1?|7 multipart #2?|8 primary_precondition_failed 8",
            ie,
            oe,
            ue
        ];
    }
}
class ue extends pt {
    constructor(t){
        super(), this.parts = [], this.partUrlsExpiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ue).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ue).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ue).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ue, t, e);
    }
    static $() {
        return [
            "AgentStoreMultipartWriteInstruction|1 context #0|2 parts #1*|3 part_urls_expires_at_ms 3",
            le,
            ce
        ];
    }
}
class ce extends pt {
    constructor(t){
        super(), this.partNumber = 0, this.url = "", this.headers = {}, this.offsetBytes = n.protoInt64.zero, this.sizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ce).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ce).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ce).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ce, t, e);
    }
    static $() {
        return [
            "AgentStoreMultipartUploadPartInstruction|1 part_number 13|2 url 9|3 headers 9,9|4 offset_bytes 3|5 size_bytes 3"
        ];
    }
}
class le extends pt {
    constructor(t){
        super(), this.uploadId = "", this.storeId = "", this.relPath = "", this.sizeBytes = n.protoInt64.zero, this.sha = "", this.expectedPartCount = 0, this.precondition = {
            case: void 0
        }, this.sessionId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new le).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new le).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new le).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(le, t, e);
    }
    static $() {
        return [
            "AgentStoreMultipartUploadContext|1 upload_id 9|2 store_id 9|3 rel_path 9|4 size_bytes 3|5 sha 9|6 expected_part_count 13|7 base_etag 9 precondition|8 expect_absent 8 precondition|9 session_id 9"
        ];
    }
}
class me extends pt {
    constructor(t){
        super(), this.agentId = "", this.files = [], this.supportsSignedContentLength = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new me).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new me).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new me).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(me, t, e);
    }
    static $() {
        return [
            "PresignAgentStoreWritesRequest|1 agent_id 9|2 files #0*|3 store_id 9?|4 lock_token 9?|5 lock_client_uuid 9?|6 supports_signed_content_length 8",
            se
        ];
    }
}
class de extends pt {
    constructor(t){
        super(), this.instructions = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new de).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new de).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new de).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(de, t, e);
    }
    static $() {
        return [
            "PresignAgentStoreWritesResponse|1 instructions #0*",
            ae
        ];
    }
}
class fe extends pt {
    constructor(t){
        super(), this.partNumber = 0, this.etag = "", this.checksumSha256 = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fe, t, e);
    }
    static $() {
        return [
            "AgentStoreMultipartUploadedPart|1 part_number 13|2 etag 9|3 checksum_sha256 12"
        ];
    }
}
class pe extends pt {
    constructor(t){
        super(), this.parts = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pe, t, e);
    }
    static $() {
        return [
            "AgentStoreMultipartWriteCompletion|1 context #0|2 parts #1*",
            le,
            fe
        ];
    }
}
class he extends pt {
    constructor(t){
        super(), this.storeId = "", this.completions = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new he).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new he).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new he).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(he, t, e);
    }
    static $() {
        return [
            "CompleteAgentStoreMultipartWritesRequest|1 store_id 9|2 completions #0*",
            pe
        ];
    }
}
class ge extends pt {
    constructor(t){
        super(), this.etag = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ge).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ge).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ge).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ge, t, e);
    }
    static $() {
        return [
            "AgentStoreMultipartWriteSuccess|1 etag 9"
        ];
    }
}
class Ae extends pt {
    constructor(t){
        super(), this.code = St.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ae).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ae).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ae).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ae, t, e);
    }
    static $() {
        return [
            "AgentStoreMultipartOperationFailure|1 code #0",
            St
        ];
    }
}
class _e extends pt {
    constructor(t){
        super(), this.inputIndex = 0, this.relPath = "", this.outcome = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _e).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _e).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _e).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_e, t, e);
    }
    static $() {
        return [
            "AgentStoreMultipartWriteResult|1 input_index 13|2 rel_path 9|3 success #0 outcome|4 failure #1 outcome",
            ge,
            Ae
        ];
    }
}
class ye extends pt {
    constructor(t){
        super(), this.results = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ye).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ye).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ye).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ye, t, e);
    }
    static $() {
        return [
            "CompleteAgentStoreMultipartWritesResponse|1 results #0*",
            _e
        ];
    }
}
class we extends pt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new we).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new we).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new we).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(we, t, e);
    }
    static $() {
        return [
            "AgentStoreMultipartWriteAbort|1 context #0",
            le
        ];
    }
}
class Se extends pt {
    constructor(t){
        super(), this.storeId = "", this.uploads = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Se).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Se).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Se).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Se, t, e);
    }
    static $() {
        return [
            "AbortAgentStoreMultipartWritesRequest|1 store_id 9|2 uploads #0*",
            we
        ];
    }
}
class Je extends pt {
    constructor(t){
        super(), this.alreadyFinished = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Je).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Je).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Je).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Je, t, e);
    }
    static $() {
        return [
            "AgentStoreMultipartAbortSuccess|1 already_finished 8"
        ];
    }
}
class Be extends pt {
    constructor(t){
        super(), this.inputIndex = 0, this.relPath = "", this.outcome = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Be).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Be).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Be).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Be, t, e);
    }
    static $() {
        return [
            "AgentStoreMultipartAbortResult|1 input_index 13|2 rel_path 9|3 success #0 outcome|4 failure #1 outcome",
            Je,
            Ae
        ];
    }
}
class Ee extends pt {
    constructor(t){
        super(), this.results = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ee).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ee).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ee).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ee, t, e);
    }
    static $() {
        return [
            "AbortAgentStoreMultipartWritesResponse|1 results #0*",
            Be
        ];
    }
}
class Ie extends pt {
    constructor(t){
        super(), this.clientUuid = "", this.pid = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ie).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ie).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ie).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ie, t, e);
    }
    static $() {
        return [
            "AgentStoreFileLockHolder|1 client_uuid 9|2 pid 13"
        ];
    }
}
class Ce extends pt {
    constructor(t){
        super(), this.storeId = "", this.relPath = "", this.acquisitionId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ce).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ce).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ce).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ce, t, e);
    }
    static $() {
        return [
            "AcquireAgentStoreFileLockRequest|1 store_id 9|2 rel_path 9|3 holder #0|4 acquisition_id 9|5 ttl_seconds 3?",
            Ie
        ];
    }
}
class be extends pt {
    constructor(t){
        super(), this.acquired = !1, this.expiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new be).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new be).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new be).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(be, t, e);
    }
    static $() {
        return [
            "AcquireAgentStoreFileLockResponse|1 acquired 8|2 lock_token 9?|3 current_holder #0?|4 expires_at_ms 3",
            Ie
        ];
    }
}
class ke extends pt {
    constructor(t){
        super(), this.storeId = "", this.relPath = "", this.lockToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ke).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ke).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ke).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ke, t, e);
    }
    static $() {
        return [
            "RenewAgentStoreFileLockRequest|1 store_id 9|2 rel_path 9|3 lock_token 9"
        ];
    }
}
class ve extends pt {
    constructor(t){
        super(), this.renewed = !1, this.expiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ve).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ve).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ve).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ve, t, e);
    }
    static $() {
        return [
            "RenewAgentStoreFileLockResponse|1 renewed 8|2 expires_at_ms 3"
        ];
    }
}
class qe extends pt {
    constructor(t){
        super(), this.storeId = "", this.relPath = "", this.lockToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qe, t, e);
    }
    static $() {
        return [
            "ReleaseAgentStoreFileLockRequest|1 store_id 9|2 rel_path 9|3 lock_token 9"
        ];
    }
}
class Re extends pt {
    constructor(t){
        super(), this.released = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Re).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Re).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Re).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Re, t, e);
    }
    static $() {
        return [
            "ReleaseAgentStoreFileLockResponse|1 released 8"
        ];
    }
}
class Pe extends pt {
    constructor(t){
        super(), this.storeId = "", this.relPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pe, t, e);
    }
    static $() {
        return [
            "GetAgentStoreFileLockRequest|1 store_id 9|2 rel_path 9"
        ];
    }
}
class Te extends pt {
    constructor(t){
        super(), this.held = !1, this.expiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Te).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Te).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Te).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Te, t, e);
    }
    static $() {
        return [
            "GetAgentStoreFileLockResponse|1 held 8|2 holder #0?|3 expires_at_ms 3",
            Ie
        ];
    }
}
class xe extends pt {
    constructor(t){
        super(), this.relPath = "", this.baseEtag = "", this.deleteCurrent = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xe, t, e);
    }
    static $() {
        return [
            "AgentStoreDeleteFileEntry|1 rel_path 9|2 base_etag 9|3 mutation_id 9?|4 delete_current 8"
        ];
    }
}
class Ne extends pt {
    constructor(t){
        super(), this.relPath = "", this.status = Jt.UNSPECIFIED, this.tombstoneEtag = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ne).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ne).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ne).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ne, t, e);
    }
    static $() {
        return [
            "AgentStoreDeleteFileResult|1 rel_path 9|2 status #0|3 tombstone_etag 9|4 current_etag 9?",
            Jt
        ];
    }
}
class De extends pt {
    constructor(t){
        super(), this.files = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new De).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new De).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new De).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(De, t, e);
    }
    static $() {
        return [
            "DeleteAgentStoreFilesRequest|1 store_id 9?|2 files #0*",
            xe
        ];
    }
}
class Ue extends pt {
    constructor(t){
        super(), this.results = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ue).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ue).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ue).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ue, t, e);
    }
    static $() {
        return [
            "DeleteAgentStoreFilesResponse|1 results #0*",
            Ne
        ];
    }
}
class Qe extends pt {
    constructor(t){
        super(), this.relPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qe, t, e);
    }
    static $() {
        return [
            "RmdirAgentStoreRequest|1 store_id 9?|2 share_id 9?|3 rel_path 9"
        ];
    }
}
class Me extends pt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Me).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Me).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Me).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Me, t, e);
    }
    static $() {
        return [
            "RmdirAgentStoreResponse"
        ];
    }
}
class Oe extends pt {
    constructor(t){
        super(), this.relPath = "", this.tombstoneEtag = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Oe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Oe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Oe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Oe, t, e);
    }
    static $() {
        return [
            "AgentStoreUndeleteFileEntry|1 rel_path 9|2 tombstone_etag 9|3 mutation_id 9?"
        ];
    }
}
class Fe extends pt {
    constructor(t){
        super(), this.relPath = "", this.status = Bt.UNSPECIFIED, this.restoredEtag = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fe, t, e);
    }
    static $() {
        return [
            "AgentStoreUndeleteFileResult|1 rel_path 9|2 status #0|3 restored_etag 9|4 current_etag 9?",
            Bt
        ];
    }
}
class Le extends pt {
    constructor(t){
        super(), this.files = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Le).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Le).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Le).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Le, t, e);
    }
    static $() {
        return [
            "UndeleteAgentStoreFilesRequest|1 store_id 9?|2 files #0*",
            Oe
        ];
    }
}
class $e extends pt {
    constructor(t){
        super(), this.results = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $e).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $e).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $e).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($e, t, e);
    }
    static $() {
        return [
            "UndeleteAgentStoreFilesResponse|1 results #0*",
            Fe
        ];
    }
}
class Ge extends pt {
    constructor(t){
        super(), this.storeId = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ge).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ge).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ge).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ge, t, e);
    }
    static $() {
        return [
            "ListAgentStoreTombstonesRequest|1 store_id 9|2 page_size 5|3 page_token 9"
        ];
    }
}
class He extends pt {
    constructor(t){
        super(), this.tombstones = [], this.nextPageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new He).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new He).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new He).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(He, t, e);
    }
    static $() {
        return [
            "ListAgentStoreTombstonesResponse|1 tombstones #0*|2 next_page_token 9",
            Kt
        ];
    }
}
class Ke extends pt {
    constructor(t){
        super(), this.shareId = "", this.pathPrefix = "", this.visibility = Et.UNSPECIFIED, this.createdAtMs = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ke).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ke).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ke).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ke, t, e);
    }
    static $() {
        return [
            "SharedAgentStoreInfo|1 share_id 9|2 path_prefix 9|3 visibility #0|4 created_at_ms 1|5 revoked_at_ms 1?",
            Et
        ];
    }
}
class Ve extends pt {
    constructor(t){
        super(), this.agentId = "", this.pathPrefix = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ve).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ve).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ve).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ve, t, e);
    }
    static $() {
        return [
            "ShareAgentStoreRequest|1 agent_id 9|2 path_prefix 9|4 store_id 9?|5 source #0",
            bt
        ];
    }
}
class ze extends pt {
    constructor(t){
        super(), this.shareId = "", this.shareUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ze).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ze).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ze).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ze, t, e);
    }
    static $() {
        return [
            "ShareAgentStoreResponse|1 share_id 9|2 share_url 9"
        ];
    }
}
class We extends pt {
    constructor(t){
        super(), this.shareId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new We).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new We).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new We).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(We, t, e);
    }
    static $() {
        return [
            "UnshareAgentStoreRequest|1 share_id 9"
        ];
    }
}
class Ye extends pt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ye).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ye).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ye).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ye, t, e);
    }
    static $() {
        return [
            "UnshareAgentStoreResponse"
        ];
    }
}
class je extends pt {
    constructor(t){
        super(), this.limit = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new je).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new je).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new je).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(je, t, e);
    }
    static $() {
        return [
            "ListSharedAgentStoresRequest|1 limit 5|2 created_before_ms 1?|3 owning_user_id 5?|4 search_query 9?|5 scope #0?|6 created_before_share_id 9?",
            It
        ];
    }
}
class Xe extends pt {
    constructor(t){
        super(), this.shareId = "", this.agentId = "", this.storeId = "", this.pathPrefix = "", this.visibility = Et.UNSPECIFIED, this.createdAtMs = 0, this.ownerDisplayName = "", this.storeKind = "", this.kind = ht.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xe, t, e);
    }
    static $() {
        return [
            "SharedAgentStoreListing|1 share_id 9|2 agent_id 9|3 store_id 9|4 path_prefix 9|5 visibility #0|6 created_at_ms 1|7 revoked_at_ms 1?|8 owning_user_id 5?|9 owning_team_id 5?|10 owner_display_name 9|11 store_kind 9|12 kind #1|13 source #2",
            Et,
            ht,
            bt
        ];
    }
}
class Ze extends pt {
    constructor(t){
        super(), this.listings = [], this.hasMore = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ze).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ze).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ze).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ze, t, e);
    }
    static $() {
        return [
            "ListSharedAgentStoresResponse|1 listings #0*|2 has_more 8|3 next_created_before_ms 1?|4 next_created_before_share_id 9?",
            Xe
        ];
    }
}
var tr = require("./module-8427.js");
const er = "aiserver.v1.";
class rr extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return er;
    }
}
var nr = (0, o.QT)(n.proto3, er, "WaterfallLogLevel", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DEBUG"
    ],
    [
        2,
        "INFO"
    ],
    [
        3,
        "WARN"
    ],
    [
        4,
        "ERROR"
    ]
], 1), sr = (0, o.QT)(n.proto3, er, "WaterfallSpanStatusType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MESSAGE"
    ],
    [
        2,
        "WARN"
    ],
    [
        3,
        "ERROR"
    ]
], 1), ir = (0, o.QT)(n.proto3, er, "WaterfallSpanEndStatus", [
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
        "SKIPPED"
    ]
], 1), or = (0, o.QT)(n.proto3, er, "WaterfallPhaseType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ENVIRONMENT"
    ],
    [
        2,
        "CREATE_CLOUD_WORKSPACE"
    ],
    [
        3,
        "PROVISION_SANDBOX"
    ],
    [
        4,
        "RESTORE_WORKSPACE_FILES"
    ],
    [
        5,
        "DOCKER_BUILD"
    ],
    [
        6,
        "SETUP_REPOSITORY"
    ],
    [
        7,
        "INSTALL_DEPENDENCIES"
    ],
    [
        8,
        "RUN_WORKSPACE_SETUP"
    ],
    [
        9,
        "START_AGENT_SERVICES"
    ],
    [
        10,
        "INSTALL_EXTENSIONS"
    ],
    [
        11,
        "COMPLETE"
    ],
    [
        12,
        "ACQUIRE_POD"
    ],
    [
        13,
        "HYDRATE"
    ]
], 1);
class ar extends rr {
    constructor(t){
        super(), this.update = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ar).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ar).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ar).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ar, t, e);
    }
    static $() {
        return [
            "WaterfallUpdate|1 timestamp #0|2 span_start #1 update|3 span_end #2 update|4 span_log #3 update|5 span_status_update #4 update|6 span_update #5 update|8 sentinel #6 update",
            n.Timestamp,
            cr,
            mr,
            dr,
            fr,
            lr,
            ur
        ];
    }
}
class ur extends rr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ur).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ur).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ur).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ur, t, e);
    }
    static $() {
        return [
            "SetupWaterfallSentinel"
        ];
    }
}
class cr extends rr {
    constructor(t){
        super(), this.spanId = "", this.phaseType = or.UNSPECIFIED, this.spanDetails = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cr, t, e);
    }
    static $() {
        return [
            "SpanStart|1 span_id 9|2 parent_span_id 9?|5 phase_type #0|6 fallback_phase_label 9?|3 git_repos_setup #1 span_details|4 git_repo_setup #2 span_details",
            or,
            gr,
            Ar
        ];
    }
}
class lr extends rr {
    constructor(t){
        super(), this.spanId = "", this.spanUpdate = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lr, t, e);
    }
    static $() {
        return [
            "SpanUpdate|1 span_id 9|2 generic_log #0 span_update",
            _r
        ];
    }
}
class mr extends rr {
    constructor(t){
        super(), this.spanId = "", this.endStatus = ir.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mr, t, e);
    }
    static $() {
        return [
            "SpanEnd|1 span_id 9|2 end_status #0",
            ir
        ];
    }
}
class dr extends rr {
    constructor(t){
        super(), this.spanId = "", this.message = "", this.level = nr.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dr, t, e);
    }
    static $() {
        return [
            "SpanLog|1 span_id 9|2 timestamp #0|3 message 9|4 level #1",
            n.Timestamp,
            nr
        ];
    }
}
class fr extends rr {
    constructor(t){
        super(), this.spanId = "", this.statusType = sr.UNSPECIFIED, this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fr, t, e);
    }
    static $() {
        return [
            "SpanStatusUpdate|1 span_id 9|2 timestamp #0|3 status_type #1|4 message 9|5 call_to_action #2?",
            n.Timestamp,
            sr,
            pr
        ];
    }
}
class pr extends rr {
    constructor(t){
        super(), this.callToAction = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pr, t, e);
    }
    static $() {
        return [
            "CallToAction|1 open_url #0 call_to_action",
            hr
        ];
    }
}
class hr extends rr {
    constructor(t){
        super(), this.url = "", this.buttonText = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hr, t, e);
    }
    static $() {
        return [
            "OpenUrlCallToAction|1 url 9|2 button_text 9"
        ];
    }
}
class gr extends rr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gr, t, e);
    }
    static $() {
        return [
            "GitReposSetupSpanDetails"
        ];
    }
}
class Ar extends rr {
    constructor(t){
        super(), this.repoDisplayName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ar).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ar).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ar).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ar, t, e);
    }
    static $() {
        return [
            "GitRepoSetupSpanDetails|1 repo_display_name 9"
        ];
    }
}
class _r extends rr {
    constructor(t){
        super(), this.message = "", this.level = nr.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _r).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _r).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _r).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_r, t, e);
    }
    static $() {
        return [
            "GenericLogSpanUpdate|1 timestamp #0|2 message 9|3 level #1",
            n.Timestamp,
            nr
        ];
    }
}
var yr = require("./module-8892.js"), wr = require("./module-7620.js"), Sr = require("./module-1563.js");
const Jr = "internapi.v1.";
class Br extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Jr;
    }
}
var Er = (0, o.QT)(n.proto3, Jr, "BlobType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IMAGE"
    ],
    [
        2,
        "INVOCATION_CONTEXT"
    ],
    [
        3,
        "EXTRA_CONTEXT"
    ],
    [
        4,
        "GIT_PR_DIFF_SELECTION"
    ],
    [
        5,
        "SELECTED_PULL_REQUEST"
    ],
    [
        6,
        "TEXT"
    ],
    [
        7,
        "RICH_TEXT"
    ],
    [
        8,
        "EXTERNAL_LINK_PDF"
    ],
    [
        9,
        "DOCUMENT"
    ],
    [
        10,
        "VIDEO"
    ]
], 1);
class Ir extends Br {
    constructor(t){
        super(), this.mimeType = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ir).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ir).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ir).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ir, t, e);
    }
    static $() {
        return [
            "ImageBlobData|1 mime_type 9"
        ];
    }
}
class Cr extends Br {
    constructor(t){
        super(), this.blobType = Er.UNSPECIFIED, this.blobId = new Uint8Array(0), this.index = 0, this.typeSpecificData = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cr, t, e);
    }
    static $() {
        return [
            "BlobData|1 blob_type #0|2 blob_id 12|3 index 5|4 image_data #1 type_specific_data",
            Er,
            Ir
        ];
    }
}
class br extends Br {
    constructor(t){
        super(), this.blobData = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new br).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new br).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new br).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(br, t, e);
    }
    static $() {
        return [
            "BlobDataPerMessage|1 blob_data #0*",
            Cr
        ];
    }
}
var kr = require("./module-9582.js"), vr = require("./module-6006.js");
const qr = "aiserver.v1.";
class Rr extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return qr;
    }
}
n.proto3, n.proto3, n.proto3, n.proto3;
var Pr = (0, o.QT)(n.proto3, qr, "SCMMergeMethod", [
    [
        0,
        "SCM_MERGE_METHOD_UNSPECIFIED"
    ],
    [
        1,
        "SCM_MERGE_METHOD_MERGE"
    ],
    [
        2,
        "SCM_MERGE_METHOD_SQUASH"
    ],
    [
        3,
        "SCM_MERGE_METHOD_REBASE"
    ]
]);
n.proto3, n.proto3, n.proto3, n.proto3, n.proto3;
class Tr extends Rr {
    constructor(t){
        super(), this.verdict = "", this.blockers = [], this.landedPullRequestNumbers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tr, t, e);
    }
    static $() {
        return [
            "SCMPullRequestMergeabilityVerdict|1 verdict 9|2 blockers #0*|3 landed_pull_request_numbers 5*|4 default_merge_method #1?|5 evaluated_head_sha 9?",
            xr,
            Pr
        ];
    }
}
class xr extends Rr {
    constructor(t){
        super(), this.kind = "", this.message = "", this.pullRequestNumber = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xr, t, e);
    }
    static $() {
        return [
            "SCMPullRequestMergeabilityBlocker|1 kind 9|2 message 9|3 pull_request_number 5|4 required_checks_state 9?|5 required_approval_count 5?|6 approved_count 5?|7 conflict_inherited_from_downstack 8?|8 invalid_stack_reason 9?"
        ];
    }
}
class Nr extends Rr {
    constructor(t){
        super(), this.overallState = "", this.successCount = 0, this.failureCount = 0, this.pendingCount = 0, this.neutralCount = 0, this.skippedCount = 0, this.totalCount = 0, this.checks = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nr, t, e);
    }
    static $() {
        return [
            "PRCheckStatus|1 overall_state 9|2 success_count 5|3 failure_count 5|4 pending_count 5|5 neutral_count 5|6 skipped_count 5|7 total_count 5|8 checks #0*|9 required_failure_count 5?|10 required_pending_count 5?|11 action_required_count 5?",
            Ur
        ];
    }
}
class Dr extends Rr {
    constructor(t){
        super(), this.path = "", this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dr, t, e);
    }
    static $() {
        return [
            "PRCheckAnnotation|1 path 9|2 start_line 5?|3 end_line 5?|4 annotation_level 9?|5 title 9?|6 message 9"
        ];
    }
}
class Ur extends Rr {
    constructor(t){
        super(), this.name = "", this.status = "", this.canRerun = !1, this.annotations = [], this.annotationsTruncated = !1, this.isRequired = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ur).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ur).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ur).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ur, t, e);
    }
    static $() {
        return [
            "PRCheck|1 name 9|2 status 9|3 details_url 9?|4 summary 9?|5 started_at 9?|6 completed_at 9?|7 provider 9?|8 provider_check_id 9?|9 can_rerun 8|10 rerun_disabled_reason 9?|11 annotations #0*|12 annotations_truncated 8|13 is_required 8",
            Dr
        ];
    }
}
class Qr extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "aiserver.v1.";
    }
}
class Mr extends Qr {
    constructor(t){
        super(), this.creationTimestampMs = n.protoInt64.zero, this.payload = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mr, t, e);
    }
    static $() {
        return [
            "AgentStartupTraceEvent|1 creation_timestamp_ms 4|2 span_started #0 payload|3 span_ended #1 payload|4 user_action #2 payload|5 turn_close #3 payload|6 context_link #4 payload",
            Fr,
            Lr,
            $r,
            Gr,
            Or
        ];
    }
}
class Or extends Qr {
    constructor(t){
        super(), this.name = "", this.href = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Or).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Or).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Or).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Or, t, e);
    }
    static $() {
        return [
            "AgentStartupTraceEvent.ContextLink|1 name 9|2 href 9"
        ];
    }
}
class Fr extends Qr {
    constructor(t){
        super(), this.spanId = "", this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fr, t, e);
    }
    static $() {
        return [
            "AgentStartupTraceEvent.SpanStarted|1 span_id 9|2 name 9|3 parent_span_id 9?|4 href 9?|5 temporal_run_id 9?|6 temporal_activity_id 9?"
        ];
    }
}
class Lr extends Qr {
    constructor(t){
        super(), this.spanId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lr, t, e);
    }
    static $() {
        return [
            "AgentStartupTraceEvent.SpanEnded|1 span_id 9"
        ];
    }
}
class $r extends Qr {
    constructor(t){
        super(), this.turnIndex = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $r).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $r).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $r).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($r, t, e);
    }
    static $() {
        return [
            "AgentStartupTraceEvent.UserAction|1 turn_index 13"
        ];
    }
}
class Gr extends Qr {
    constructor(t){
        super(), this.turnIndex = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gr, t, e);
    }
    static $() {
        return [
            "AgentStartupTraceEvent.TurnClose|1 turn_index 13"
        ];
    }
}
const Hr = "aiserver.v1.";
class Kr extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Hr;
    }
}
var Vr = (0, o.QT)(n.proto3, Hr, "ManagerSpawnKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CREATED"
    ],
    [
        2,
        "ADOPTED"
    ],
    [
        3,
        "CREATED_SAME_VM"
    ]
], 1), zr = (0, o.QT)(n.proto3, Hr, "BackgroundComposerUpdateKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CREATED"
    ],
    [
        2,
        "STATUS_CHANGED"
    ],
    [
        3,
        "ARCHIVED"
    ],
    [
        4,
        "UNARCHIVED"
    ],
    [
        5,
        "METADATA_CHANGED"
    ],
    [
        6,
        "MEMBERSHIP_CHANGED"
    ],
    [
        7,
        "VISIBILITY_CHANGED"
    ],
    [
        8,
        "DELETED"
    ],
    [
        9,
        "SUBSCRIPTIONS_CHANGED"
    ],
    [
        10,
        "APPROVAL_CHANGED"
    ],
    [
        11,
        "MACHINE_PRESSURE_CHANGED"
    ],
    [
        12,
        "READ_CURSOR_ADVANCED"
    ],
    [
        13,
        "UNREAD_CHANGED"
    ]
], 1), Wr = (0, o.QT)(n.proto3, Hr, "BackgroundComposerMachinePressure", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "HIGH"
    ]
], 1), Yr = (0, o.QT)(n.proto3, Hr, "BackgroundComposerApprovalState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PENDING"
    ],
    [
        2,
        "APPROVED"
    ],
    [
        3,
        "DENIED"
    ],
    [
        4,
        "EXPIRED"
    ],
    [
        5,
        "CANCELLED"
    ]
], 1), jr = (0, o.QT)(n.proto3, Hr, "BackgroundComposerApprovalKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ORIGIN_CONTENTS_WRITE"
    ],
    [
        2,
        "MCP_TOOL"
    ]
], 1), Xr = (0, o.QT)(n.proto3, Hr, "WakeBackgroundComposerReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FOLLOWUP_COMPOSE"
    ]
], 1), Zr = (0, o.QT)(n.proto3, Hr, "BackgroundComposerStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "RUNNING"
    ],
    [
        2,
        "FINISHED"
    ],
    [
        3,
        "ERROR"
    ],
    [
        4,
        "CREATING"
    ],
    [
        5,
        "EXPIRED"
    ]
], 1), tn = (0, o.QT)(n.proto3, Hr, "CloudAgentWorkflowStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "RUNNING"
    ],
    [
        2,
        "IDLE"
    ],
    [
        3,
        "ERROR"
    ],
    [
        4,
        "ARCHIVED"
    ],
    [
        5,
        "EXPIRED"
    ],
    [
        6,
        "NOT_YET_STARTED"
    ],
    [
        7,
        "WAITING_FOR_BACKGROUND_WORK"
    ]
], 1), en = (0, o.QT)(n.proto3, Hr, "BackgroundComposerSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "EDITOR"
    ],
    [
        2,
        "SLACK"
    ],
    [
        3,
        "WEBSITE"
    ],
    [
        4,
        "LINEAR"
    ],
    [
        5,
        "IOS_APP"
    ],
    [
        6,
        "API"
    ],
    [
        7,
        "GITHUB"
    ],
    [
        8,
        "CLI"
    ],
    [
        9,
        "GITHUB_CI_AUTOFIX"
    ],
    [
        10,
        "GITLAB"
    ],
    [
        11,
        "ENVIRONMENT_SETUP_WEB"
    ],
    [
        12,
        "GRIND_WEB"
    ],
    [
        13,
        "BUGBOT_AUTOFIX"
    ],
    [
        14,
        "AUTOMATIONS"
    ],
    [
        15,
        "GRAPHITE_CHAT_WEB"
    ],
    [
        16,
        "GLASS"
    ],
    [
        17,
        "GRAPHITE_FULL_SELF_DRIVING"
    ],
    [
        18,
        "TEAMS"
    ],
    [
        19,
        "LOCAL"
    ],
    [
        20,
        "JIRA"
    ],
    [
        21,
        "SDK"
    ],
    [
        22,
        "FULL_SELF_DRIVING"
    ],
    [
        23,
        "QABOT_FRONTEND"
    ],
    [
        24,
        "AS_SUBAGENT_FROM_LOCAL"
    ],
    [
        25,
        "ENVIRONMENT_SETUP_GLASS"
    ],
    [
        26,
        "SAND_CODING_SUBAGENT"
    ],
    [
        27,
        "BITBUCKET"
    ],
    [
        28,
        "CLOUD_META_AGENT"
    ],
    [
        29,
        "AS_SUBAGENT_FROM_CLOUD"
    ],
    [
        30,
        "ENVIRONMENT_SETUP_ONBOARDING_AUTO"
    ],
    [
        31,
        "ORIGIN"
    ],
    [
        32,
        "AS_SIDE_CHAT_FROM_CLOUD"
    ],
    [
        33,
        "GROK_BOT"
    ],
    [
        34,
        "CLOUD_ONBOARDING_WEB"
    ],
    [
        35,
        "CHANGE_MONITOR_ONBOARDING_WEB"
    ]
], 1), rn = (0, o.QT)(n.proto3, Hr, "OwnerType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "SERVICE_ACCOUNT"
    ]
], 1), nn = (0, o.QT)(n.proto3, Hr, "CloudAgentDashboardRunStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "RUNNING"
    ],
    [
        2,
        "FINISHED"
    ],
    [
        3,
        "ERROR"
    ],
    [
        4,
        "INSTALL_FAILED"
    ]
], 1), sn = (0, o.QT)(n.proto3, Hr, "CloudAgentDashboardRunSortField", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CREATED_AT"
    ]
], 1), on = (0, o.QT)(n.proto3, Hr, "CloudAgentDashboardRunSortDirection", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DESC"
    ],
    [
        2,
        "ASC"
    ]
], 1), an = (0, o.QT)(n.proto3, Hr, "CloudAgentRunEventCategory", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "BUILD"
    ],
    [
        2,
        "AGENT_SETUP"
    ],
    [
        3,
        "AGENT_RUN"
    ]
], 1), un = (0, o.QT)(n.proto3, Hr, "CloudAgentRunEventLogLevel", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INFO"
    ],
    [
        2,
        "WARN"
    ],
    [
        3,
        "ERROR"
    ]
], 1), cn = (0, o.QT)(n.proto3, Hr, "PRStatus", [
    [
        0,
        "PR_STATUS_UNSPECIFIED"
    ],
    [
        1,
        "PR_STATUS_OPEN"
    ],
    [
        2,
        "PR_STATUS_DRAFT"
    ],
    [
        3,
        "PR_STATUS_MERGED"
    ],
    [
        4,
        "PR_STATUS_CLOSED"
    ]
]), ln = (0, o.QT)(n.proto3, Hr, "CloudSubagentParentAgentType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LOCAL"
    ],
    [
        2,
        "CLOUD"
    ]
], 1), mn = (0, o.QT)(n.proto3, Hr, "CloudSubagentParentSpawnKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TASK"
    ],
    [
        2,
        "EVENT_SUBSCRIPTION"
    ],
    [
        3,
        "ADOPTED"
    ]
], 1), dn = (0, o.QT)(n.proto3, Hr, "EnsembleStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PARENT"
    ],
    [
        2,
        "CHILD"
    ]
], 1), fn = (0, o.QT)(n.proto3, Hr, "StartTargetSelection", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ENVIRONMENT"
    ],
    [
        2,
        "REPOS"
    ],
    [
        3,
        "EXISTING_AGENT"
    ]
], 1), pn = (0, o.QT)(n.proto3, Hr, "ForkBackgroundComposerMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CONVERSATION"
    ],
    [
        2,
        "POD"
    ]
], 1), hn = (0, o.QT)(n.proto3, Hr, "StreamConversationPurpose", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LIVE"
    ],
    [
        2,
        "PREWARM"
    ]
], 1), gn = (0, o.QT)(n.proto3, Hr, "PlanFollowupType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PLAN"
    ],
    [
        2,
        "EXECUTE"
    ]
], 1), An = (0, o.QT)(n.proto3, Hr, "CloudAgentTimingEventType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REQUEST_RECEIVED"
    ],
    [
        2,
        "PREWARMED_POD_RECEIVED"
    ],
    [
        3,
        "POD_REQUESTED"
    ],
    [
        4,
        "POD_READY"
    ],
    [
        5,
        "FIRST_TOKEN"
    ],
    [
        6,
        "STALE_SNAPSHOT_USED"
    ]
], 1), _n = (0, o.QT)(n.proto3, Hr, "BackgroundComposerDesktopLeaseAction", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ACQUIRE"
    ],
    [
        2,
        "RELEASE"
    ]
], 1), yn = (n.proto3, (0, o.QT)(n.proto3, Hr, "GithubAccessErrorType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "NO_AUTH_TOKEN"
    ],
    [
        3,
        "APP_NOT_INSTALLED"
    ],
    [
        4,
        "USER_NO_ACCESS"
    ],
    [
        5,
        "APP_INSUFFICIENT_PERMS"
    ],
    [
        6,
        "PUBLIC_REPO"
    ]
], 1)), wn = (0, o.QT)(n.proto3, Hr, "EnvironmentWriteSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DASHBOARD"
    ],
    [
        2,
        "SETUP_FLOW"
    ],
    [
        3,
        "SDK_V1"
    ],
    [
        4,
        "RESTORE"
    ],
    [
        5,
        "PUBLIC_API"
    ]
], 1), Sn = (0, o.QT)(n.proto3, Hr, "EnvironmentType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PERSONAL"
    ],
    [
        2,
        "TEAM"
    ]
], 1), Jn = (0, o.QT)(n.proto3, Hr, "LogicalEnvironmentScope", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PERSONAL"
    ],
    [
        2,
        "TEAM"
    ],
    [
        3,
        "REPOSITORY"
    ]
], 1), Bn = (0, o.QT)(n.proto3, Hr, "EnvironmentIneligibilityReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "GITHUB_REPO_REVERSE_MIRRORED"
    ]
], 1), En = (0, o.QT)(n.proto3, Hr, "EnvironmentBuildRowStatus", [
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
        "CANCELLED"
    ],
    [
        5,
        "SKIPPED"
    ]
], 1), In = (0, o.QT)(n.proto3, Hr, "EnvironmentBuildRowTriggerType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MANUAL"
    ],
    [
        2,
        "RECURRING"
    ],
    [
        3,
        "CONFIG_CHANGE"
    ]
], 1), Cn = (0, o.QT)(n.proto3, Hr, "EnvironmentBuildRowSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SYSTEM"
    ],
    [
        2,
        "WEBSITE"
    ],
    [
        3,
        "API"
    ],
    [
        4,
        "AGENT"
    ]
], 1), bn = (0, o.QT)(n.proto3, Hr, "EnvironmentBuildRowFailureType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INSTALL_FAILED"
    ],
    [
        2,
        "TERMINAL_FAILURE"
    ]
], 1), kn = (0, o.QT)(n.proto3, Hr, "EnvironmentBuildSnapshotReapState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ACTIVE"
    ],
    [
        2,
        "REAP_REQUESTED"
    ],
    [
        3,
        "DELETED"
    ]
], 1), vn = (0, o.QT)(n.proto3, Hr, "MultiRepoEnvironmentReusePolicy", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SAME_SCOPE_ONLY"
    ],
    [
        2,
        "ALLOW_TEAM_NAMED_FOR_PERSONAL"
    ]
], 1), qn = (0, o.QT)(n.proto3, Hr, "EnvironmentVersionSourceKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REPO_FILE"
    ],
    [
        2,
        "DATABASE_USER"
    ],
    [
        3,
        "DATABASE_TEAM"
    ],
    [
        4,
        "REQUEST_OVERRIDE"
    ]
], 1), Rn = (0, o.QT)(n.proto3, Hr, "EnvironmentUpdateEventKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CREATED"
    ],
    [
        2,
        "UPDATED"
    ],
    [
        3,
        "DELETED"
    ],
    [
        4,
        "FORWARD_FILLED"
    ]
], 1), Pn = (0, o.QT)(n.proto3, Hr, "AutoCreatePrSetting", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALWAYS"
    ],
    [
        2,
        "SINGLE"
    ],
    [
        3,
        "NEVER"
    ]
], 1), Tn = (0, o.QT)(n.proto3, Hr, "BackgroundComposerQuickActionExecutionMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUBAGENT"
    ],
    [
        2,
        "PARENT_AGENT"
    ]
], 1), xn = (0, o.QT)(n.proto3, Hr, "BackgroundComposerQuickActionSubagentTemplateScope", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "BUILTIN"
    ],
    [
        2,
        "USER"
    ],
    [
        3,
        "TEAM"
    ]
], 1), Nn = (0, o.QT)(n.proto3, Hr, "BackgroundComposerQuickActionSubagentTemplateOperation", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CREATE"
    ],
    [
        2,
        "UPDATE"
    ],
    [
        3,
        "DELETE"
    ]
], 1), Dn = (0, o.QT)(n.proto3, Hr, "PRDeploymentState", [
    [
        0,
        "PR_DEPLOYMENT_STATE_UNSPECIFIED"
    ],
    [
        1,
        "PR_DEPLOYMENT_STATE_UNKNOWN"
    ],
    [
        2,
        "PR_DEPLOYMENT_STATE_PENDING"
    ],
    [
        3,
        "PR_DEPLOYMENT_STATE_QUEUED"
    ],
    [
        4,
        "PR_DEPLOYMENT_STATE_IN_PROGRESS"
    ],
    [
        5,
        "PR_DEPLOYMENT_STATE_SUCCESS"
    ],
    [
        6,
        "PR_DEPLOYMENT_STATE_FAILURE"
    ],
    [
        7,
        "PR_DEPLOYMENT_STATE_ERROR"
    ],
    [
        8,
        "PR_DEPLOYMENT_STATE_INACTIVE"
    ],
    [
        9,
        "PR_DEPLOYMENT_STATE_WAITING"
    ],
    [
        10,
        "PR_DEPLOYMENT_STATE_ACTIVE"
    ],
    [
        11,
        "PR_DEPLOYMENT_STATE_ABANDONED"
    ],
    [
        12,
        "PR_DEPLOYMENT_STATE_DESTROYED"
    ],
    [
        13,
        "PR_DEPLOYMENT_STATE_BLOCKED"
    ],
    [
        14,
        "PR_DEPLOYMENT_STATE_CANCELED"
    ]
]), Un = (0, o.QT)(n.proto3, Hr, "PRDeploymentStatusState", [
    [
        0,
        "PR_DEPLOYMENT_STATUS_STATE_UNSPECIFIED"
    ],
    [
        1,
        "PR_DEPLOYMENT_STATUS_STATE_UNKNOWN"
    ],
    [
        2,
        "PR_DEPLOYMENT_STATUS_STATE_PENDING"
    ],
    [
        3,
        "PR_DEPLOYMENT_STATUS_STATE_QUEUED"
    ],
    [
        4,
        "PR_DEPLOYMENT_STATUS_STATE_IN_PROGRESS"
    ],
    [
        5,
        "PR_DEPLOYMENT_STATUS_STATE_SUCCESS"
    ],
    [
        6,
        "PR_DEPLOYMENT_STATUS_STATE_FAILURE"
    ],
    [
        7,
        "PR_DEPLOYMENT_STATUS_STATE_ERROR"
    ],
    [
        8,
        "PR_DEPLOYMENT_STATUS_STATE_INACTIVE"
    ],
    [
        9,
        "PR_DEPLOYMENT_STATUS_STATE_WAITING"
    ],
    [
        10,
        "PR_DEPLOYMENT_STATUS_STATE_BLOCKED"
    ],
    [
        11,
        "PR_DEPLOYMENT_STATUS_STATE_CANCELED"
    ]
]), Qn = (0, o.QT)(n.proto3, Hr, "PushPlatform", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IOS"
    ],
    [
        2,
        "ANDROID"
    ],
    [
        3,
        "WEB"
    ]
], 1), Mn = (0, o.QT)(n.proto3, Hr, "OriginAgentApprovalResolution", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "APPROVED"
    ],
    [
        2,
        "DENIED"
    ]
], 1), On = (0, o.QT)(n.proto3, Hr, "BackgroundComposerAccessDenialReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "OTHER_OWNER"
    ],
    [
        2,
        "TEAM_POLICY"
    ]
], 1), Fn = (0, o.QT)(n.proto3, Hr, "StartingMessageType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER_MESSAGE"
    ],
    [
        2,
        "PLAN_START"
    ],
    [
        3,
        "PLAN_EXECUTE"
    ]
], 1), Ln = (0, o.QT)(n.proto3, Hr, "CarriedRequestContextSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TURN_PERSIST"
    ],
    [
        2,
        "POST_JOIN_RECOMPUTE"
    ],
    [
        3,
        "POST_TURN_RECOMPUTE"
    ],
    [
        4,
        "STEP0_LIVE"
    ],
    [
        5,
        "STEP0_BAKE_OVERLAY"
    ],
    [
        6,
        "TURN_DONE_RECOMPUTE"
    ],
    [
        7,
        "STEP0_CARRIED_STALE_MCP"
    ]
], 1), $n = (n.proto3, n.proto3, n.proto3, n.proto3, (0, o.QT)(n.proto3, Hr, "OpenInteractionState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PENDING"
    ],
    [
        2,
        "ANSWERED"
    ],
    [
        3,
        "SKIPPED"
    ],
    [
        4,
        "RETRACTED"
    ],
    [
        5,
        "SUPERSEDED"
    ],
    [
        6,
        "EXPIRED"
    ]
], 1)), Gn = (0, o.QT)(n.proto3, Hr, "CloudAgentStartupWarningType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SNAPSHOT_EXPIRED"
    ],
    [
        2,
        "SNAPSHOT_INVALID"
    ],
    [
        3,
        "SNAPSHOT_NOT_FOUND_OR_NO_ACCESS"
    ],
    [
        4,
        "SNAPSHOT_COPY_FAILED"
    ],
    [
        5,
        "POD_CREATE_FAILED_AFTER_TURN"
    ]
], 1), Hn = (0, o.QT)(n.proto3, Hr, "ModelRoutingLoadTestCancelOutcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CANCEL_REQUESTED"
    ],
    [
        2,
        "NOT_FOUND"
    ],
    [
        3,
        "ALREADY_CLOSED"
    ]
], 1), Kn = (0, o.QT)(n.proto3, Hr, "CloudAgentMemoryDbLogSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DOCKER_BUILD"
    ],
    [
        2,
        "SETUP"
    ]
], 1), Vn = (0, o.QT)(n.proto3, Hr, "PrivateWorkerListScope", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALL"
    ],
    [
        2,
        "TEAM_POOL"
    ],
    [
        3,
        "PERSONAL"
    ]
], 1), zn = (0, o.QT)(n.proto3, Hr, "AdminKillBackgroundComposerSignalOutcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DELIVERED"
    ],
    [
        2,
        "NOT_RUNNING"
    ],
    [
        3,
        "FAILED"
    ]
], 1), Wn = (0, o.QT)(n.proto3, Hr, "AdminActiveBackgroundComposerExecutionEnvironment", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CURSOR_CLOUD"
    ],
    [
        2,
        "SELF_HOSTED_PRIVATE_WORKER"
    ]
], 1), Yn = (0, o.QT)(n.proto3, Hr, "PendingPrivateWorkerRequestEventType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CREATED"
    ],
    [
        2,
        "CLAIMED"
    ],
    [
        3,
        "EXPIRED"
    ],
    [
        4,
        "HEARTBEAT"
    ],
    [
        5,
        "CLAIMED_OFFLINE"
    ]
], 1), jn = (0, o.QT)(n.proto3, Hr, "PrivateWorkerPoolScope", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "TEAM"
    ]
], 1), Xn = (0, o.QT)(n.proto3, Hr, "PrivateWorkerStatusFilter", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALL"
    ],
    [
        2,
        "IN_USE"
    ],
    [
        3,
        "IDLE"
    ]
], 1), Zn = (0, o.QT)(n.proto3, Hr, "WriteCanvasFailReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TYPECHECK_FAILED"
    ],
    [
        2,
        "COMPILE_FAILED"
    ],
    [
        3,
        "TOO_LARGE"
    ],
    [
        4,
        "UNAVAILABLE"
    ],
    [
        5,
        "NOT_FOUND"
    ],
    [
        6,
        "REFUSED"
    ],
    [
        7,
        "CONFLICT"
    ]
], 1), ts = (0, o.QT)(n.proto3, Hr, "ReadCanvasFailReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NOT_FOUND"
    ],
    [
        2,
        "UNAVAILABLE"
    ],
    [
        3,
        "REFUSED"
    ]
], 1), es = (0, o.QT)(n.proto3, Hr, "PromptUploadCompletionStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "COMPLETED"
    ],
    [
        2,
        "NOT_FOUND"
    ],
    [
        3,
        "NO_PARTS"
    ],
    [
        5,
        "INVALID_PARTS"
    ],
    [
        4,
        "SIZE_MISMATCH"
    ]
], 1), rs = (0, o.QT)(n.proto3, Hr, "KeyringScope", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PERSONAL"
    ],
    [
        2,
        "TEAM"
    ]
], 1), ns = (0, o.QT)(n.proto3, Hr, "KeyringListMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MANAGE"
    ],
    [
        2,
        "ATTACH"
    ],
    [
        3,
        "ANY_ACCESS"
    ]
], 1), ss = (0, o.QT)(n.proto3, Hr, "KeyringPrincipalType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "TEAM"
    ],
    [
        3,
        "GROUP"
    ]
], 1), is = (0, o.QT)(n.proto3, Hr, "KeyringAccessLevel", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ATTACH"
    ],
    [
        2,
        "MANAGE"
    ]
], 1);
class os extends Kr {
    constructor(t){
        super(), this.bcId = "", this.replace = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new os).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new os).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new os).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(os, t, e);
    }
    static $() {
        return [
            "UpdateBackgroundComposerEnvironmentRequest|1 bc_id 9|2 replace 8"
        ];
    }
}
class as extends Kr {
    constructor(t){
        super(), this.applied = 0, this.removed = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new as).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new as).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new as).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(as, t, e);
    }
    static $() {
        return [
            "UpdateBackgroundComposerEnvironmentResponse|1 applied 13|2 removed 13"
        ];
    }
}
class us extends Kr {
    constructor(t){
        super(), this.bcId = "", this.excludeBeforeAfterDiffs = !1, this.committedOnly = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new us).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new us).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new us).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(us, t, e);
    }
    static $() {
        return [
            "GetOptimizedDiffDetailsRequest|1 bc_id 9|2 exclude_before_after_diffs 8|3 committed_only 8|4 branch_name 9?|5 repo_url 9?"
        ];
    }
}
class cs extends Kr {
    constructor(t){
        super(), this.submoduleDiffs = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cs, t, e);
    }
    static $() {
        return [
            "GetOptimizedDiffDetailsResponse|1 diff #0|2 submodule_diffs #1*",
            s.GitDiff,
            ls
        ];
    }
}
class ls extends Kr {
    constructor(t){
        super(), this.relativePath = "", this.errored = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ls).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ls).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ls).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ls, t, e);
    }
    static $() {
        return [
            "GetOptimizedDiffDetailsResponse.SubmoduleDiff|1 relative_path 9|2 diff #0|3 errored 8",
            s.GitDiff
        ];
    }
}
class ms extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ms).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ms).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ms).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ms, t, e);
    }
    static $() {
        return [
            "NotifyBackgroundComposerShownRequest|1 bc_id 9"
        ];
    }
}
class ds extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ds).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ds).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ds).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ds, t, e);
    }
    static $() {
        return [
            "NotifyBackgroundComposerShownResponse"
        ];
    }
}
class fs extends Kr {
    constructor(t){
        super(), this.bcId = "", this.newName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fs, t, e);
    }
    static $() {
        return [
            "RenameBackgroundComposerRequest|1 bc_id 9|2 new_name 9"
        ];
    }
}
class ps extends Kr {
    constructor(t){
        super(), this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ps).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ps).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ps).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ps, t, e);
    }
    static $() {
        return [
            "RenameBackgroundComposerResponse|1 name 9"
        ];
    }
}
class hs extends Kr {
    constructor(t){
        super(), this.icon = "", this.colorId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hs, t, e);
    }
    static $() {
        return [
            "ProjectAppearance|1 icon 9|2 color_id 9"
        ];
    }
}
class gs extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gs, t, e);
    }
    static $() {
        return [
            "ProjectMetadata|1 appearance #0?",
            hs
        ];
    }
}
class As extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new As).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new As).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new As).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(As, t, e);
    }
    static $() {
        return [
            "UpdateProjectAppearanceRequest|1 bc_id 9|2 appearance #0",
            hs
        ];
    }
}
class _s extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _s).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _s).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _s).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_s, t, e);
    }
    static $() {
        return [
            "UpdateProjectAppearanceResponse|1 project_metadata #0",
            gs
        ];
    }
}
class ys extends Kr {
    constructor(t){
        super(), this.bcId = "", this.name = "", this.description = "", this.repoUrl = "", this.createdAtMs = n.protoInt64.zero, this.instantCreateEligible = !1, this.instantCreateIneligibleReason = ws.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ys).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ys).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ys).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ys, t, e);
    }
    static $() {
        return [
            "StagedProject|1 bc_id 9|2 name 9|3 description 9|4 appearance #0|5 repo_url 9|6 environment_public_id 9?|7 environment_name 9?|8 created_at_ms 3|9 instant_create_eligible 8|10 instant_create_ineligible_reason #1",
            hs,
            ws
        ];
    }
}
var ws = (0, o.QT)(n.proto3, Hr, "StagedProject.InstantCreateIneligibleReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ENVIRONMENT_NOT_USABLE"
    ],
    [
        2,
        "REPO_NOT_IN_ENVIRONMENT"
    ],
    [
        3,
        "ACCOUNT_CANNOT_START"
    ],
    [
        4,
        "REPO_ACCESS_UNVERIFIED"
    ],
    [
        5,
        "REPO_PROTECTED_SCOPE"
    ]
], 1);
class Ss extends Kr {
    constructor(t){
        super(), this.alias = "", this.title = "", this.branch = "", this.repoUrl = "", this.createdAtMs = n.protoInt64.zero, this.lastActiveAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ss).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ss).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ss).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ss, t, e);
    }
    static $() {
        return [
            "LocalChatEvidence|1 alias 9|2 title 9|3 branch 9|4 repo_url 9|5 created_at_ms 3|6 last_active_at_ms 3|7 pr_url 9?|8 local_conversation_id 9?|9 cloud_lineage_bc_id 9?"
        ];
    }
}
class Js extends Kr {
    constructor(t){
        super(), this.schemaVersion = 0, this.consent = Bs.UNSPECIFIED, this.chats = [], this.eligibleCount = 0, this.droppedNotTopLevel = 0, this.droppedProjectLineage = 0, this.droppedCloudLineage = 0, this.droppedNoRemote = 0, this.droppedAmbiguousRepo = 0, this.droppedStale = 0, this.droppedUntitled = 0, this.clientFilterVersion = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Js).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Js).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Js).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Js, t, e);
    }
    static $() {
        return [
            "LocalEvidencePayload|1 schema_version 13|2 consent #0|3 chats #1*|4 eligible_count 13|5 dropped_not_top_level 13|6 dropped_project_lineage 13|7 dropped_cloud_lineage 13|8 dropped_no_remote 13|9 dropped_ambiguous_repo 13|10 dropped_stale 13|11 dropped_untitled 13|12 client_filter_version 9",
            Bs,
            Ss
        ];
    }
}
var Bs = (0, o.QT)(n.proto3, Hr, "LocalEvidencePayload.Consent", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "HEADERS_ONLY"
    ]
], 1);
class Es extends Kr {
    constructor(t){
        super(), this.allowExistingProjects = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Es).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Es).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Es).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Es, t, e);
    }
    static $() {
        return [
            "SeedStagedProjectsRequest|1 local_evidence #0|2 allow_existing_projects 8",
            Js
        ];
    }
}
class Is extends Kr {
    constructor(t){
        super(), this.outcome = Cs.UNSPECIFIED, this.stagedProjects = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Is).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Is).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Is).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Is, t, e);
    }
    static $() {
        return [
            "SeedStagedProjectsResponse|1 outcome #0|2 staged_projects #1*",
            Cs,
            ys
        ];
    }
}
var Cs = (0, o.QT)(n.proto3, Hr, "SeedStagedProjectsResponse.Outcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SEEDED"
    ],
    [
        2,
        "ALREADY_SEEDED"
    ],
    [
        3,
        "INELIGIBLE_GATE"
    ],
    [
        4,
        "INELIGIBLE_PRIVACY"
    ],
    [
        5,
        "INELIGIBLE_HAS_PROJECTS"
    ],
    [
        6,
        "INELIGIBLE_NO_EVIDENCE"
    ],
    [
        7,
        "INELIGIBLE_NO_SCM_CONNECTION"
    ],
    [
        8,
        "INELIGIBLE_PLAN"
    ]
], 1);
class bs extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bs, t, e);
    }
    static $() {
        return [
            "ListStagedProjectsRequest"
        ];
    }
}
class ks extends Kr {
    constructor(t){
        super(), this.stagedProjects = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ks).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ks).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ks).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ks, t, e);
    }
    static $() {
        return [
            "ListStagedProjectsResponse|1 staged_projects #0*",
            ys
        ];
    }
}
class vs extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vs, t, e);
    }
    static $() {
        return [
            "DismissStagedProjectRequest|1 bc_id 9"
        ];
    }
}
class qs extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qs, t, e);
    }
    static $() {
        return [
            "DismissStagedProjectResponse"
        ];
    }
}
class Rs extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rs, t, e);
    }
    static $() {
        return [
            "PreviewStagedProjectsRequest|1 local_evidence #0",
            Js
        ];
    }
}
class Ps extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ps).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ps).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ps).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ps, t, e);
    }
    static $() {
        return [
            "DeleteStagedProjectsRequest"
        ];
    }
}
class Ts extends Kr {
    constructor(t){
        super(), this.deletedStagedProjects = 0, this.deletedSeeds = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ts).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ts).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ts).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ts, t, e);
    }
    static $() {
        return [
            "DeleteStagedProjectsResponse|1 deleted_staged_projects 13|2 deleted_seeds 13"
        ];
    }
}
class xs extends Kr {
    constructor(t){
        super(), this.name = "", this.description = "", this.icon = "", this.initDescription = "", this.repoLabel = "", this.targetKey = "", this.evidenceAliases = [], this.evidenceCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xs, t, e);
    }
    static $() {
        return [
            "PreviewStagedProjectCandidate|1 name 9|2 description 9|3 icon 9|4 init_description 9|5 repo_label 9|6 environment_name 9?|7 target_key 9|8 evidence_aliases 9*|9 evidence_count 13"
        ];
    }
}
class Ns extends Kr {
    constructor(t){
        super(), this.promptAttribution = "", this.model = "", this.latencyMs = 0, this.evidenceChatCount = 0, this.groupCount = 0, this.deniedGroupCount = 0, this.selectedChatCount = 0, this.resultTextCount = 0, this.rejectedCount = 0, this.resultTextPolicy = Ds.UNSPECIFIED, this.guidanceSource = Us.UNSPECIFIED, this.hasRootProjects = !1, this.alreadySeeded = !1, this.malformedShape = Qs.UNSPECIFIED, this.malformedHasProjectsKey = !1, this.malformedTopLevelKeyCount = 0, this.replyLength = 0, this.replySha8 = "", this.rejectedUnknownGroup = 0, this.rejectedBadField = 0, this.rejectedTooFewChats = 0, this.rejectedOverlappingChats = 0, this.rejectedDuplicateName = 0, this.localEvidencePolicy = Ms.UNSPECIFIED, this.localPayloadRejection = Os.UNSPECIFIED, this.localChatCountReceived = 0, this.localChatCountAdmitted = 0, this.localDroppedCloudLineage = 0, this.localDroppedBadTitle = 0, this.localDroppedUnsafeText = 0, this.localDroppedBadRepo = 0, this.localDroppedStale = 0, this.localDroppedDuplicate = 0, this.localDroppedMovedToCloud = 0, this.localDroppedNotOwned = 0, this.localSelectedChatCount = 0, this.mixedGroupCount = 0, this.localOnlyGroupCount = 0, this.noEvidenceReason = Fs.UNSPECIFIED, this.privacyMode = i.PrivacyMode.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ns).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ns).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ns).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ns, t, e);
    }
    static $() {
        return [
            "PreviewStagedProjectsDiagnostics|1 prompt_attribution 9|2 model 9|3 latency_ms 13|4 evidence_chat_count 13|5 group_count 13|6 denied_group_count 13|7 selected_chat_count 13|8 result_text_count 13|9 rejected_count 13|10 result_text_policy #0|11 guidance_source #1|12 has_root_projects 8|13 already_seeded 8|14 malformed_shape #2|15 malformed_has_projects_key 8|16 malformed_top_level_key_count 13|17 reply_length 13|18 reply_sha8 9|19 rejected_unknown_group 13|20 rejected_bad_field 13|21 rejected_too_few_chats 13|22 rejected_overlapping_chats 13|23 rejected_duplicate_name 13|24 local_evidence_policy #3|25 local_payload_rejection #4|26 local_chat_count_received 13|27 local_chat_count_admitted 13|28 local_dropped_cloud_lineage 13|29 local_dropped_bad_title 13|30 local_dropped_unsafe_text 13|31 local_dropped_bad_repo 13|32 local_dropped_stale 13|33 local_dropped_duplicate 13|34 local_dropped_moved_to_cloud 13|35 local_dropped_not_owned 13|36 local_selected_chat_count 13|37 mixed_group_count 13|38 local_only_group_count 13|39 no_evidence_reason #5|40 privacy_mode #6",
            Ds,
            Us,
            Qs,
            Ms,
            Os,
            Fs,
            i.PrivacyMode
        ];
    }
}
var Ds = (0, o.QT)(n.proto3, Hr, "PreviewStagedProjectsDiagnostics.ResultTextPolicy", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TRAINING_ALLOWED"
    ],
    [
        2,
        "HEADER_ONLY"
    ]
], 1), Us = (0, o.QT)(n.proto3, Hr, "PreviewStagedProjectsDiagnostics.GuidanceSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DEFAULT"
    ],
    [
        2,
        "CONFIG"
    ],
    [
        3,
        "MIXED"
    ]
], 1), Qs = (0, o.QT)(n.proto3, Hr, "PreviewStagedProjectsDiagnostics.MalformedShape", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NO_OBJECT"
    ],
    [
        2,
        "UNTERMINATED_OBJECT"
    ],
    [
        3,
        "INVALID_JSON"
    ],
    [
        4,
        "NO_PROJECTS_ARRAY"
    ]
], 1), Ms = (0, o.QT)(n.proto3, Hr, "PreviewStagedProjectsDiagnostics.LocalEvidencePolicy", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DISALLOWED"
    ],
    [
        2,
        "HEADERS"
    ]
], 1), Os = (0, o.QT)(n.proto3, Hr, "PreviewStagedProjectsDiagnostics.LocalPayloadRejection", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "POLICY"
    ],
    [
        2,
        "UNKNOWN_SCHEMA"
    ],
    [
        3,
        "TOO_MANY_CHATS"
    ],
    [
        4,
        "PAYLOAD_TOO_LARGE"
    ],
    [
        5,
        "DEDUPE_UNAVAILABLE"
    ]
], 1), Fs = (0, o.QT)(n.proto3, Hr, "PreviewStagedProjectsDiagnostics.NoEvidenceReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TOO_FEW_CHATS"
    ],
    [
        2,
        "NO_REPO_GROUP"
    ],
    [
        3,
        "ALL_GROUPS_DENIED"
    ]
], 1);
class Ls extends Kr {
    constructor(t){
        super(), this.outcome = $s.UNSPECIFIED, this.candidates = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ls).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ls).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ls).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ls, t, e);
    }
    static $() {
        return [
            "PreviewStagedProjectsResponse|1 outcome #0|2 candidates #1*|3 diagnostics #2",
            $s,
            xs,
            Ns
        ];
    }
}
var $s = (0, o.QT)(n.proto3, Hr, "PreviewStagedProjectsResponse.Outcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "GENERATED"
    ],
    [
        2,
        "NO_EVIDENCE"
    ],
    [
        3,
        "MALFORMED"
    ],
    [
        4,
        "INELIGIBLE_GATE"
    ],
    [
        5,
        "INELIGIBLE_PRIVACY"
    ]
], 1);
class Gs extends Kr {
    constructor(t){
        super(), this.bcId = "", this.newName = "", this.visibility = Hs.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gs, t, e);
    }
    static $() {
        return [
            "PublishBackgroundComposerTempRepoRequest|1 bc_id 9|2 new_name 9|3 visibility #0",
            Hs
        ];
    }
}
var Hs = (0, o.QT)(n.proto3, Hr, "PublishBackgroundComposerTempRepoRequest.Visibility", [
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
        "INTERNAL"
    ]
], 1);
class Ks extends Kr {
    constructor(t){
        super(), this.owner = "", this.name = "", this.canonicalRepoUrl = "", this.published = !1, this.visibility = Hs.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ks).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ks).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ks).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ks, t, e);
    }
    static $() {
        return [
            "PublishBackgroundComposerTempRepoResponse|1 owner 9|2 name 9|3 canonical_repo_url 9|4 published 8|5 visibility #0",
            Hs
        ];
    }
}
class Vs extends Kr {
    constructor(t){
        super(), this.bcId = "", this.parentAgentId = "", this.parentAgentType = ln.UNSPECIFIED, this.subagentType = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vs, t, e);
    }
    static $() {
        return [
            "ReparentBackgroundComposerRequest|1 bc_id 9|2 parent_agent_id 9|3 parent_agent_type #0|4 subagent_type 9",
            ln
        ];
    }
}
class zs extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zs, t, e);
    }
    static $() {
        return [
            "ReparentBackgroundComposerResponse"
        ];
    }
}
class Ws extends Kr {
    constructor(t){
        super(), this.workerBcId = "", this.managerBcId = "", this.spawnKind = Vr.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ws).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ws).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ws).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ws, t, e);
    }
    static $() {
        return [
            "SetWorkerManagerRequest|1 worker_bc_id 9|2 manager_bc_id 9|3 spawn_kind #0|4 tool_call_id 9?",
            Vr
        ];
    }
}
class Ys extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ys).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ys).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ys).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ys, t, e);
    }
    static $() {
        return [
            "SetWorkerManagerResponse"
        ];
    }
}
class js extends Kr {
    constructor(t){
        super(), this.managerBcId = "", this.creationId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new js).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new js).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new js).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(js, t, e);
    }
    static $() {
        return [
            "CreateProjectWorkerRequest|1 manager_bc_id 9|2 creation_id 9|3 start_request #0",
            Da
        ];
    }
}
class Xs extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xs, t, e);
    }
    static $() {
        return [
            "CreateProjectWorkerResponse|1 composer #0|2 was_swapped_to_default 8?|3 initial_run_id 9?",
            Xo
        ];
    }
}
class Zs extends Kr {
    constructor(t){
        super(), this.workerBcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zs, t, e);
    }
    static $() {
        return [
            "ClearWorkerManagerRequest|1 worker_bc_id 9"
        ];
    }
}
class ti extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ti).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ti).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ti).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ti, t, e);
    }
    static $() {
        return [
            "ClearWorkerManagerResponse"
        ];
    }
}
class ei extends Kr {
    constructor(t){
        super(), this.managerBcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ei).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ei).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ei).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ei, t, e);
    }
    static $() {
        return [
            "ListWorkersForManagerRequest|1 manager_bc_id 9"
        ];
    }
}
class ri extends Kr {
    constructor(t){
        super(), this.workerBcId = "", this.managerBcId = "", this.spawnKind = Vr.UNSPECIFIED, this.status = Zr.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ri).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ri).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ri).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ri, t, e);
    }
    static $() {
        return [
            "WorkerManagerMembership|1 worker_bc_id 9|2 manager_bc_id 9|3 spawn_kind #0|4 tool_call_id 9?|5 status #1",
            Vr,
            Zr
        ];
    }
}
class ni extends Kr {
    constructor(t){
        super(), this.memberships = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ni).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ni).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ni).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ni, t, e);
    }
    static $() {
        return [
            "ListWorkersForManagerResponse|1 memberships #0*",
            ri
        ];
    }
}
class si extends Kr {
    constructor(t){
        super(), this.rootBcIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new si).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new si).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new si).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(si, t, e);
    }
    static $() {
        return [
            "ListProjectSubtreesRequest|1 root_bc_ids 9*"
        ];
    }
}
class ii extends Kr {
    constructor(t){
        super(), this.status = Zr.UNSPECIFIED, this.count = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ii).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ii).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ii).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ii, t, e);
    }
    static $() {
        return [
            "ProjectSubtreeStatusCount|1 status #0|2 count 5",
            Zr
        ];
    }
}
class oi extends Kr {
    constructor(t){
        super(), this.bcId = "", this.managerBcId = "", this.name = "", this.status = Zr.UNSPECIFIED, this.prUrl = "", this.lastActivityAtMs = 0, this.depth = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oi, t, e);
    }
    static $() {
        return [
            "ProjectSubtreeNode|1 bc_id 9|2 manager_bc_id 9|3 name 9|4 status #0|5 pr_url 9|6 last_activity_at_ms 1|7 depth 5|8 subagents_status #0?",
            Zr
        ];
    }
}
class ai extends Kr {
    constructor(t){
        super(), this.rootBcId = "", this.statusCounts = [], this.nodes = [], this.omittedCount = 0, this.prUrls = [], this.truncated = !1, this.omittedActiveCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ai).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ai).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ai).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ai, t, e);
    }
    static $() {
        return [
            "ProjectSubtree|1 root_bc_id 9|2 status_counts #0*|3 nodes #1*|4 omitted_count 5|5 pr_urls 9*|6 truncated 8|7 subagents_status #2?|8 omitted_active_count 5",
            ii,
            oi,
            Zr
        ];
    }
}
class ui extends Kr {
    constructor(t){
        super(), this.subtrees = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ui).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ui).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ui).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ui, t, e);
    }
    static $() {
        return [
            "ListProjectSubtreesResponse|1 subtrees #0*",
            ai
        ];
    }
}
class ci extends Kr {
    constructor(t){
        super(), this.path = "", this.additions = 0, this.deletions = 0, this.hasStats = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ci).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ci).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ci).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ci, t, e);
    }
    static $() {
        return [
            "BackgroundComposerApprovalPullRequestFile|1 path 9|2 additions 5|3 deletions 5|4 has_stats 8"
        ];
    }
}
class li extends Kr {
    constructor(t){
        super(), this.login = "", this.displayName = "", this.avatarUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new li).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new li).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new li).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(li, t, e);
    }
    static $() {
        return [
            "BackgroundComposerApprovalPullRequestAuthor|1 login 9|2 display_name 9|3 avatar_url 9"
        ];
    }
}
class mi extends Kr {
    constructor(t){
        super(), this.title = "", this.summary = "", this.baseRef = "", this.headRef = "", this.additions = 0, this.deletions = 0, this.changedFiles = 0, this.url = "", this.number = 0, this.repository = "", this.fileEntries = [], this.mergeMethod = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mi, t, e);
    }
    static $() {
        return [
            "BackgroundComposerApprovalPullRequest|1 title 9|2 summary 9|3 base_ref 9|4 head_ref 9|5 additions 5|6 deletions 5|7 changed_files 5|9 url 9|10 number 5|11 repository 9|12 author #0?|13 file_entries #1*|14 merge_method 9",
            li,
            ci
        ];
    }
}
class di extends Kr {
    constructor(t){
        super(), this.approvalId = "", this.state = Yr.UNSPECIFIED, this.kind = jr.UNSPECIFIED, this.headline = "", this.operation = "", this.target = "", this.expiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new di).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new di).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new di).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(di, t, e);
    }
    static $() {
        return [
            "BackgroundComposerApprovalUpdate|1 approval_id 9|2 state #0|3 kind #1|4 headline 9|5 operation 9|6 target 9|7 expires_at_ms 3|8 pull_request #2?",
            Yr,
            jr,
            mi
        ];
    }
}
class fi extends Kr {
    constructor(t){
        super(), this.bcId = "", this.kind = zr.UNSPECIFIED, this.workflowStatus = tn.UNSPECIFIED, this.isArchived = !1, this.isUnread = !1, this.updatedAtMs = n.protoInt64.zero, this.source = en.UNSPECIFIED, this.hasPendingInteraction = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fi, t, e);
    }
    static $() {
        return [
            "BackgroundComposerUpdateEvent|1 bc_id 9|2 kind #0|3 workflow_status #1|4 is_archived 8|5 is_unread 8|6 updated_at_ms 3|7 last_message_activity_at_ms 3?|8 source #2|9 manager_bc_id 9?|10 parent_bc_id 9?|11 owning_user_id 3?|12 owning_team_id 5?|13 has_pending_interaction 8|14 manager_spawn_kind 9?|15 approval #3?|16 last_read_at_ms 3?|17 machine_pressure #4?|18 is_subtree_rollup 8?",
            zr,
            tn,
            en,
            di,
            Wr
        ];
    }
}
class pi extends Kr {
    constructor(t){
        super(), this.snapshotIncludeHiddenSources = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pi, t, e);
    }
    static $() {
        return [
            "StreamBackgroundComposerUpdatesRequest|1 resume_cursor 9?|2 team_id 5?|3 snapshot_n 5?|4 snapshot_include_archived 8?|5 snapshot_include_hidden_sources #0*|6 snapshot_include_pinned_state 8?|7 snapshot_include_workers 8?|8 snapshot_include_subagents 8?",
            en
        ];
    }
}
class hi extends Kr {
    constructor(t){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hi, t, e);
    }
    static $() {
        return [
            "StreamBackgroundComposerUpdatesResponse|1 snapshot #0 response|2 event #1 response|3 heartbeat #2 response",
            gi,
            Ai,
            _i
        ];
    }
}
class gi extends Kr {
    constructor(t){
        super(), this.resumeCursor = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gi, t, e);
    }
    static $() {
        return [
            "BackgroundComposerUpdatesSnapshot|1 list #0|2 resume_cursor 9",
            Ca
        ];
    }
}
class Ai extends Kr {
    constructor(t){
        super(), this.resumeCursor = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ai).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ai).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ai).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ai, t, e);
    }
    static $() {
        return [
            "BackgroundComposerUpdateEventWithCursor|1 event #0|2 resume_cursor 9",
            fi
        ];
    }
}
class _i extends Kr {
    constructor(t){
        super(), this.resumeCursor = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _i).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _i).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _i).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_i, t, e);
    }
    static $() {
        return [
            "BackgroundComposerUpdatesHeartbeat|1 resume_cursor 9"
        ];
    }
}
class yi extends Kr {
    constructor(t){
        super(), this.bcId = "", this.useExperimentalModelOptOut = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yi, t, e);
    }
    static $() {
        return [
            "UpdateBackgroundComposerExperimentalModelOptOutRequest|1 bc_id 9|2 use_experimental_model_opt_out 8"
        ];
    }
}
class wi extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wi, t, e);
    }
    static $() {
        return [
            "UpdateBackgroundComposerExperimentalModelOptOutResponse"
        ];
    }
}
class Si extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Si).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Si).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Si).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Si, t, e);
    }
    static $() {
        return [
            "RefreshGithubAccessTokenInBackgroundComposerRequest|1 bc_id 9"
        ];
    }
}
class Ji extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ji).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ji).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ji).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ji, t, e);
    }
    static $() {
        return [
            "RefreshGithubAccessTokenInBackgroundComposerResponse"
        ];
    }
}
class Bi extends Kr {
    constructor(t){
        super(), this.includeSecrets = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bi, t, e);
    }
    static $() {
        return [
            "CreateBackgroundComposerPodRequest|1 devcontainer_starting_point #0|2 include_secrets 8|3 force_cluster 9?|4 force_machine_template 9?|32 client_ip 9?",
            Ra
        ];
    }
}
class Ei extends Kr {
    constructor(t){
        super(), this.podId = "", this.workspaceRootPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ei).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ei).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ei).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ei, t, e);
    }
    static $() {
        return [
            "CreateBackgroundComposerPodResponse|1 pod_id 9|2 workspace_root_path 9"
        ];
    }
}
class Ii extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ii).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ii).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ii).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ii, t, e);
    }
    static $() {
        return [
            "PreWarmPodRequest|1 start_request #0",
            Da
        ];
    }
}
class Ci extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ci).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ci).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ci).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ci, t, e);
    }
    static $() {
        return [
            "PreWarmPodResponse"
        ];
    }
}
class bi extends Kr {
    constructor(t){
        super(), this.bcId = "", this.reason = Xr.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bi, t, e);
    }
    static $() {
        return [
            "WakeBackgroundComposerRequest|1 bc_id 9|2 reason #0",
            Xr
        ];
    }
}
class ki extends Kr {
    constructor(t){
        super(), this.signaled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ki).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ki).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ki).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ki, t, e);
    }
    static $() {
        return [
            "WakeBackgroundComposerResponse|1 signaled 8"
        ];
    }
}
class vi extends Kr {
    constructor(t){
        super(), this.podId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vi, t, e);
    }
    static $() {
        return [
            "AttachBackgroundComposerPodRequest|1 pod_id 9|2 last_event_id 9?"
        ];
    }
}
class qi extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qi, t, e);
    }
    static $() {
        return [
            "AttachBackgroundComposerPodResponse|1 event #0|2 updated_status #1",
            Ri,
            K
        ];
    }
}
class Ri extends Kr {
    constructor(t){
        super(), this.eventId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ri).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ri).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ri).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ri, t, e);
    }
    static $() {
        return [
            "AttachBackgroundComposerPodResponse.Event|1 event_id 9|2 event #0",
            p
        ];
    }
}
class Pi extends Kr {
    constructor(t){
        super(), this.podId = "", this.visibility = Ni.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pi, t, e);
    }
    static $() {
        return [
            "CreateBackgroundComposerPodSnapshotRequest|1 pod_id 9|2 visibility #0|3 bc_id 9?",
            Ni
        ];
    }
}
class Ti extends Kr {
    constructor(t){
        super(), this.snapshotId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ti).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ti).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ti).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ti, t, e);
    }
    static $() {
        return [
            "CreateBackgroundComposerPodSnapshotResponse|1 snapshot_id 9"
        ];
    }
}
class xi extends Kr {
    constructor(t){
        super(), this.snapshotId = "", this.visibility = Ni.UNSPECIFIED, this.repoUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xi, t, e);
    }
    static $() {
        return [
            "ChangeBackgroundComposerSnapshotVisibilityRequest|1 snapshot_id 9|2 visibility #0|3 repo_url 9",
            Ni
        ];
    }
}
var Ni = (0, o.QT)(n.proto3, Hr, "ChangeBackgroundComposerSnapshotVisibilityRequest.Visibility", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "REPO_READ_WRITE"
    ],
    [
        4,
        "PUBLIC"
    ],
    [
        5,
        "TEAM"
    ]
], 1);
class Di extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Di).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Di).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Di).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Di, t, e);
    }
    static $() {
        return [
            "ChangeBackgroundComposerSnapshotVisibilityResponse"
        ];
    }
}
class Ui extends Kr {
    constructor(t){
        super(), this.snapshotId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ui).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ui).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ui).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ui, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerSnapshotInfoRequest|1 snapshot_id 9"
        ];
    }
}
class Qi extends Kr {
    constructor(t){
        super(), this.snapshotId = "", this.visibility = Ni.UNSPECIFIED, this.repoUrl = "", this.createdAtMs = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qi, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerSnapshotInfoResponse|1 snapshot_id 9|2 visibility #0|3 repo_url 9|4 created_at_ms 1",
            Ni
        ];
    }
}
class Mi extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mi, t, e);
    }
    static $() {
        return [
            "ListBackgroundComposerSnapshotsByBcIdRequest|1 bc_id 9|2 use_primary 8?|3 limit 13?"
        ];
    }
}
class Oi extends Kr {
    constructor(t){
        super(), this.snapshotId = "", this.visibility = Ni.UNSPECIFIED, this.createdAtMs = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Oi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Oi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Oi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Oi, t, e);
    }
    static $() {
        return [
            "BackgroundComposerSnapshotSummary|1 snapshot_id 9|2 visibility #0|3 created_at_ms 1",
            Ni
        ];
    }
}
class Fi extends Kr {
    constructor(t){
        super(), this.snapshots = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fi, t, e);
    }
    static $() {
        return [
            "ListBackgroundComposerSnapshotsByBcIdResponse|1 snapshots #0*",
            Oi
        ];
    }
}
class Li extends Kr {
    constructor(t){
        super(), this.bcIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Li).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Li).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Li).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Li, t, e);
    }
    static $() {
        return [
            "ListBackgroundComposerSnapshotStatusesByBcIdsRequest|1 bc_ids 9*|2 use_primary 8?"
        ];
    }
}
class $i extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $i).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $i).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $i).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($i, t, e);
    }
    static $() {
        return [
            "BackgroundComposerSnapshotStatusByBcId|1 bc_id 9|2 snapshot_id 9?|3 visibility #0?|4 created_at_ms 1?",
            Ni
        ];
    }
}
class Gi extends Kr {
    constructor(t){
        super(), this.snapshotStatuses = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gi, t, e);
    }
    static $() {
        return [
            "ListBackgroundComposerSnapshotStatusesByBcIdsResponse|1 snapshot_statuses #0*",
            $i
        ];
    }
}
class Hi extends Kr {
    constructor(t){
        super(), this.snapshotId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hi, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerSnapshotStateRequest|1 snapshot_id 9"
        ];
    }
}
class Ki extends Kr {
    constructor(t){
        super(), this.snapshotId = "", this.state = nt.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ki).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ki).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ki).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ki, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerSnapshotStateResponse|1 snapshot_id 9|2 state #0|3 error_message 9?",
            nt
        ];
    }
}
class Vi extends Kr {
    constructor(t){
        super(), this.snapshotId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vi, t, e);
    }
    static $() {
        return [
            "WatchBackgroundComposerSnapshotStateRequest|1 snapshot_id 9"
        ];
    }
}
class zi extends Kr {
    constructor(t){
        super(), this.snapshotId = "", this.state = nt.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zi, t, e);
    }
    static $() {
        return [
            "WatchBackgroundComposerSnapshotStateResponse|1 snapshot_id 9|2 state #0|3 error_message 9?",
            nt
        ];
    }
}
class Wi extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wi, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerChangesHashRequest|1 bc_id 9|2 branch_name 9?"
        ];
    }
}
class Yi extends Kr {
    constructor(t){
        super(), this.hash = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yi, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerChangesHashResponse|1 hash 9"
        ];
    }
}
class ji extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ji).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ji).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ji).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ji, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerDiffDetailsRequest|1 bc_id 9|2 branch_name 9?|3 repo_url 9?"
        ];
    }
}
class Xi extends Kr {
    constructor(t){
        super(), this.path = "", this.originalContent = "", this.modifiedContent = "", this.fullPath = "", this.baseRef = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xi, t, e);
    }
    static $() {
        return [
            "BackgroundComposerFullDiff|1 path 9|2 original_content 9|3 modified_content 9|4 submodule_path 9?|5 git_diff #0|6 full_path 9|7 base_ref 9",
            s.GitDiff
        ];
    }
}
class Zi extends Kr {
    constructor(t){
        super(), this.branchName = "", this.baseBranch = "", this.diffs = [], this.gitDiffs = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zi, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerDiffDetailsResponse|1 branch_name 9|2 base_branch 9|3 diffs #0*|4 git_diffs #1*",
            Xi,
            s.GitDiff
        ];
    }
}
class to extends Kr {
    constructor(t){
        super(), this.parentBcId = "", this.seedTurnCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new to).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new to).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new to).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(to, t, e);
    }
    static $() {
        return [
            "SideChatInfo|1 parent_bc_id 9|2 seed_turn_count 5"
        ];
    }
}
class eo extends Kr {
    constructor(t){
        super(), this.parentBcId = "", this.creationSource = en.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new eo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new eo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new eo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(eo, t, e);
    }
    static $() {
        return [
            "StartSideChatBackgroundComposerRequest|1 parent_bc_id 9|2 name 9?|3 creation_source #0|4 creation_id 9?",
            en
        ];
    }
}
class ro extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ro).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ro).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ro).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ro, t, e);
    }
    static $() {
        return [
            "StartSideChatBackgroundComposerResponse|1 composer #0",
            Xo
        ];
    }
}
class no extends Kr {
    constructor(t){
        super(), this.parentBcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new no).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new no).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new no).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(no, t, e);
    }
    static $() {
        return [
            "ListBackgroundComposerChildrenRequest|1 parent_bc_id 9"
        ];
    }
}
class so extends Kr {
    constructor(t){
        super(), this.composers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new so).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new so).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new so).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(so, t, e);
    }
    static $() {
        return [
            "ListBackgroundComposerChildrenResponse|1 composers #0*",
            Xo
        ];
    }
}
class io extends Kr {
    constructor(t){
        super(), this.id = "", this.ownerType = rn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new io).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new io).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new io).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(io, t, e);
    }
    static $() {
        return [
            "OwnerIdentifier|1 id 9|2 owner_type #0",
            rn
        ];
    }
}
class oo extends Kr {
    constructor(t){
        super(), this.owners = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oo, t, e);
    }
    static $() {
        return [
            "OwnerFilter|1 owners #0*",
            io
        ];
    }
}
class ao extends Kr {
    constructor(t){
        super(), this.prUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ao).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ao).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ao).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ao, t, e);
    }
    static $() {
        return [
            "PrAgentView|1 pr_url 9|2 head_sha 9?|3 code_tour #0?",
            st.Ek
        ];
    }
}
class uo extends Kr {
    constructor(t){
        super(), this.prUrl = "", this.pageSize = 0, this.involvedPageToken = "", this.otherPageToken = "", this.includeAgentKinds = !1, this.includeWatchers = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new uo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new uo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new uo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(uo, t, e);
    }
    static $() {
        return [
            "ListPrBackgroundComposersRequest|1 pr_url 9|2 expected_scope #0|3 page_size 5|4 involved_page_token 9|5 other_page_token 9|6 selected_bc_id 9?|7 include_agent_kinds 8|8 include_watchers 8",
            it.Y
        ];
    }
}
class co extends Kr {
    constructor(t){
        super(), this.involvedComposers = [], this.otherComposers = [], this.nextInvolvedPageToken = "", this.nextOtherPageToken = "", this.involvedCountCapped = 0, this.selectedHasDirectActivity = !1, this.participants = [], this.participantDetailsUnavailable = !1, this.subscribedBcIds = [], this.watchingComposers = [], this.coordinatorComposers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new co).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new co).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new co).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(co, t, e);
    }
    static $() {
        return [
            "ListPrBackgroundComposersResponse|1 involved_composers #0*|2 other_composers #0*|3 next_involved_page_token 9|4 next_other_page_token 9|5 involved_count_capped 13|6 sole_involved_bc_id 9?|7 selected_composer #0?|8 selected_has_direct_activity 8|9 participants #1*|10 participant_details_unavailable 8|11 subscribed_bc_ids 9*|12 watching_composers #0*|13 coordinator_composers #0*",
            Xo,
            Zo
        ];
    }
}
class lo extends Kr {
    constructor(t){
        super(), this.includeTeamWide = !1, this.includeDiff = !1, this.bcIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lo, t, e);
    }
    static $() {
        return [
            "ListDetailedBackgroundComposersRequest|1 include_team_wide 8|2 bc_id 9?|3 n 5?|4 include_diff 8|5 cursor 9?|6 bc_ids 9*|7 owner_filter #0?|8 repo_url_prefix 9?|9 pr_url 9?|10 include_archived 8?|11 status_only 8?|12 expected_scope #1",
            oo,
            it.Y
        ];
    }
}
class mo extends Kr {
    constructor(t){
        super(), this.composers = [], this.participants = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mo, t, e);
    }
    static $() {
        return [
            "ListDetailedBackgroundComposersResponse|1 composers #0*|2 participants #1*",
            hc,
            Zo
        ];
    }
}
class fo extends Kr {
    constructor(t){
        super(), this.field = sn.UNSPECIFIED, this.direction = on.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fo, t, e);
    }
    static $() {
        return [
            "CloudAgentDashboardRunSort|1 field #0|2 direction #1",
            sn,
            on
        ];
    }
}
class po extends Kr {
    constructor(t){
        super(), this.createdAtMs = n.protoInt64.zero, this.bcId = "", this.id = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new po).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new po).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new po).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(po, t, e);
    }
    static $() {
        return [
            "CloudAgentRunsCursor|1 created_at_ms 3|2 bc_id 9|3 id 3"
        ];
    }
}
class ho extends Kr {
    constructor(t){
        super(), this.createdAfterMs = n.protoInt64.zero, this.createdBeforeMs = n.protoInt64.zero, this.triggers = [], this.statuses = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ho).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ho).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ho).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ho, t, e);
    }
    static $() {
        return [
            "CloudAgentDashboardRunFilter|1 team_id 9?|2 created_after_ms 3|3 created_before_ms 3|4 triggers #0*|5 statuses #1*|6 created_by_user_id 3?",
            ot,
            nn
        ];
    }
}
class go extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new go).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new go).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new go).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(go, t, e);
    }
    static $() {
        return [
            "ListCloudAgentRunsForDashboardRequest|1 filter #0|2 sort #1|3 cursor #2?",
            ho,
            fo,
            po
        ];
    }
}
class Ao extends Kr {
    constructor(t){
        super(), this.bcId = "", this.createdAtMs = n.protoInt64.zero, this.trigger = ot.UNSPECIFIED, this.status = nn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ao).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ao).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ao).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ao, t, e);
    }
    static $() {
        return [
            "CloudAgentDashboardRunRow|1 bc_id 9|2 created_at_ms 3|3 trigger #0|4 created_by_user_id 3?|5 created_by_display 9?|6 environment_name 9?|7 environment_public_id 9?|8 repo_url 9?|9 status #1",
            ot,
            nn
        ];
    }
}
class _o extends Kr {
    constructor(t){
        super(), this.rows = [], this.hasMore = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _o).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _o).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _o).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_o, t, e);
    }
    static $() {
        return [
            "ListCloudAgentRunsForDashboardResponse|1 rows #0*|2 has_more 8|3 next_cursor #1?",
            Ao,
            po
        ];
    }
}
class yo extends Kr {
    constructor(t){
        super(), this.tzOffsetMinutes = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yo, t, e);
    }
    static $() {
        return [
            "AggregateCloudAgentRunsForDashboardRequest|1 filter #0|2 tz_offset_minutes 5",
            ho
        ];
    }
}
class wo extends Kr {
    constructor(t){
        super(), this.dayStartMs = n.protoInt64.zero, this.successCount = n.protoInt64.zero, this.warningCount = n.protoInt64.zero, this.failureCount = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wo, t, e);
    }
    static $() {
        return [
            "CloudAgentDashboardRunDayBucket|1 day_start_ms 3|2 success_count 3|3 warning_count 3|4 failure_count 3"
        ];
    }
}
class So extends Kr {
    constructor(t){
        super(), this.buckets = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new So).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new So).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new So).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(So, t, e);
    }
    static $() {
        return [
            "AggregateCloudAgentRunsForDashboardResponse|1 buckets #0*",
            wo
        ];
    }
}
class Jo extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jo, t, e);
    }
    static $() {
        return [
            "GetCloudAgentRunForDashboardRequest|1 bc_id 9"
        ];
    }
}
class Bo extends Kr {
    constructor(t){
        super(), this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bo, t, e);
    }
    static $() {
        return [
            "GetCloudAgentRunForDashboardResponse|1 row #0|2 name 9",
            Ao
        ];
    }
}
class Eo extends Kr {
    constructor(t){
        super(), this.publicId = "", this.createdAtMs = n.protoInt64.zero, this.category = an.UNSPECIFIED, this.logLevel = un.UNSPECIFIED, this.kind = "", this.title = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Eo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Eo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Eo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Eo, t, e);
    }
    static $() {
        return [
            "CloudAgentRunEvent|1 public_id 9|2 created_at_ms 3|3 category #0|4 log_level #1|5 kind 9|6 title 9|7 detail 9?|8 link_url 9?",
            an,
            un
        ];
    }
}
class Io extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Io).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Io).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Io).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Io, t, e);
    }
    static $() {
        return [
            "ListCloudAgentRunEventsForDashboardRequest|1 bc_id 9"
        ];
    }
}
class Co extends Kr {
    constructor(t){
        super(), this.events = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Co).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Co).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Co).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Co, t, e);
    }
    static $() {
        return [
            "ListCloudAgentRunEventsForDashboardResponse|1 events #0*",
            Eo
        ];
    }
}
class bo extends Kr {
    constructor(t){
        super(), this.bcId = "", this.source = en.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bo, t, e);
    }
    static $() {
        return [
            "PauseBackgroundComposerRequest|1 bc_id 9|3 source #0|4 run_id 9?|5 expected_scope #1",
            en,
            it.Y
        ];
    }
}
class ko extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ko).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ko).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ko).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ko, t, e);
    }
    static $() {
        return [
            "PauseBackgroundComposerResponse"
        ];
    }
}
class vo extends Kr {
    constructor(t){
        super(), this.bcId = "", this.toolCallId = "", this.source = en.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vo, t, e);
    }
    static $() {
        return [
            "CancelBackgroundComposerToolCallRequest|1 bc_id 9|2 tool_call_id 9|3 source #0",
            en
        ];
    }
}
class qo extends Kr {
    constructor(t){
        super(), this.accepted = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qo, t, e);
    }
    static $() {
        return [
            "CancelBackgroundComposerToolCallResponse|1 accepted 8"
        ];
    }
}
class Ro extends Kr {
    constructor(t){
        super(), this.bcId = "", this.unarchive = !1, this.onlyNotifyRunner = !1, this.source = en.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ro).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ro).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ro).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ro, t, e);
    }
    static $() {
        return [
            "ArchiveBackgroundComposerRequest|1 bc_id 9|2 unarchive 8|3 only_notify_runner 8|4 source #0|5 close_pull_request 8?",
            en
        ];
    }
}
class Po extends Kr {
    constructor(t){
        super(), this.closedPullRequest = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Po).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Po).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Po).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Po, t, e);
    }
    static $() {
        return [
            "ArchiveBackgroundComposerResponse|1 closed_pull_request 8"
        ];
    }
}
class To extends Kr {
    constructor(t){
        super(), this.repoUrls = [], this.source = en.UNSPECIFIED, this.dryRun = !1, this.removeRepoEnvironmentJson = !1, this.includeSources = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new To).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new To).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new To).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(To, t, e);
    }
    static $() {
        return [
            "ArchiveRepoBackgroundComposersRequest|1 repo_urls 9*|2 team_id 5?|3 source #0|4 dry_run 8|5 remove_repo_environment_json 8|6 environment_scope #1?|7 include_sources #0*",
            en,
            xo
        ];
    }
}
class xo extends Kr {
    constructor(t){
        super(), this.selector = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xo, t, e);
    }
    static $() {
        return [
            "RepoArchiveEnvironmentScope|1 environment_public_id 9 selector|2 none 8 selector|3 unnamed_or_none 8 selector"
        ];
    }
}
class No extends Kr {
    constructor(t){
        super(), this.archivedBcIds = [], this.failedBcIds = [], this.remainingCount = 0, this.runningCount = 0, this.hasRepoEnvironmentJson = !1, this.removedRepoEnvironmentJson = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new No).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new No).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new No).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(No, t, e);
    }
    static $() {
        return [
            "ArchiveRepoBackgroundComposersResponse|1 archived_bc_ids 9*|2 failed_bc_ids 9*|3 remaining_count 5|4 running_count 5|5 has_repo_environment_json 8|6 removed_repo_environment_json 8"
        ];
    }
}
class Do extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Do).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Do).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Do).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Do, t, e);
    }
    static $() {
        return [
            "DeleteBackgroundComposerRequest|1 bc_id 9"
        ];
    }
}
class Uo extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Uo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Uo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Uo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Uo, t, e);
    }
    static $() {
        return [
            "DeleteBackgroundComposerResponse"
        ];
    }
}
class Qo extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qo, t, e);
    }
    static $() {
        return [
            "ResumeBackgroundComposerRequest|1 bc_id 9"
        ];
    }
}
class Mo extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mo, t, e);
    }
    static $() {
        return [
            "ResumeBackgroundComposerResponse"
        ];
    }
}
class Oo extends Kr {
    constructor(t){
        super(), this.bcId = "", this.commit = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Oo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Oo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Oo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Oo, t, e);
    }
    static $() {
        return [
            "GetCursorServerUrlRequest|1 bc_id 9|2 commit 9|3 connection_token 9?"
        ];
    }
}
class Fo extends Kr {
    constructor(t){
        super(), this.host = "", this.port = 0, this.connectionToken = "", this.headers = [], this.upgradePath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fo, t, e);
    }
    static $() {
        return [
            "GetCursorServerUrlResponse|1 host 9|2 port 5|3 connection_token 9|4 headers #0*|5 upgrade_path 9",
            Lo
        ];
    }
}
class Lo extends Kr {
    constructor(t){
        super(), this.key = "", this.value = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lo, t, e);
    }
    static $() {
        return [
            "GetCursorServerUrlResponse.Header|1 key 9|2 value 9"
        ];
    }
}
class $o extends Kr {
    constructor(t){
        super(), this.bcId = "", this.commit = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $o).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $o).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $o).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($o, t, e);
    }
    static $() {
        return [
            "WarmCursorServerDownloadRequest|1 bc_id 9|2 commit 9"
        ];
    }
}
class Go extends Kr {
    constructor(t){
        super(), this.alreadyDownloaded = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Go).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Go).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Go).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Go, t, e);
    }
    static $() {
        return [
            "WarmCursorServerDownloadResponse|1 already_downloaded 8"
        ];
    }
}
class Ho extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ho).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ho).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ho).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ho, t, e);
    }
    static $() {
        return [
            "MakePRBackgroundComposerRequest|1 bc_id 9|2 workflow_id 9?|3 branch_name 9?"
        ];
    }
}
class Ko extends Kr {
    constructor(t){
        super(), this.prUrl = "", this.branchName = "", this.hasCommits = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ko).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ko).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ko).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ko, t, e);
    }
    static $() {
        return [
            "MakePRBackgroundComposerResponse|1 pr_url 9|2 branch_name 9|3 has_commits 8|4 owner 9?|5 repo 9?"
        ];
    }
}
class Vo extends Kr {
    constructor(t){
        super(), this.bcId = "", this.agentStateBlobId = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vo, t, e);
    }
    static $() {
        return [
            "OpenPRBackgroundComposerRequest|1 bc_id 9|2 title 9?|3 body 9?|4 base_branch 9?|5 draft 8?|6 open_as_cursor_github_app 8?|7 skip_reviewer_request 8?|8 agent_state_blob_id 12|9 workflow_id 9?|10 branch_name 9?|11 repo_url 9?"
        ];
    }
}
class zo extends Kr {
    constructor(t){
        super(), this.prUrl = "", this.prNumber = 0, this.branchName = "", this.baseBranch = "", this.success = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zo, t, e);
    }
    static $() {
        return [
            "OpenPRBackgroundComposerResponse|1 pr_url 9|2 pr_number 5|3 branch_name 9|4 base_branch 9|5 success 8|6 error 9?"
        ];
    }
}
class Wo extends Kr {
    constructor(t){
        super(), this.n = 0, this.includeTeamWide = !1, this.additionalRepoUrls = [], this.includeStatus = !1, this.includeSources = [], this.includeHiddenSources = [], this.includeBackgroundAgentAccessAggregate = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wo, t, e);
    }
    static $() {
        return [
            "ListBackgroundComposersRequest|1 n 5|2 include_team_wide 8|3 bc_id 9?|4 preferred_repo_url 9?|5 additional_repo_urls 9*|6 include_status 8|7 include_sources #0*|8 owner_filter #1?|9 last_message_activity_at_ms_offset 1?|10 include_archived 8?|11 should_include_collaborators 8?|12 team_id 5?|13 include_hidden_sources #0*|14 preferred_workspace_binding_id 9?|15 include_pinned_state 8?|16 include_workers 8?|17 include_subagents 8?|18 use_page_tokens 8?|19 page_token 9?|21 include_background_agent_access_aggregate 8|22 inbox_section_runs_only 8?|23 project_filter #2?|24 archived_filter #3?|25 include_stored_prs 8?",
            en,
            oo,
            Yo,
            jo
        ];
    }
}
var Yo = (0, o.QT)(n.proto3, Hr, "ListBackgroundComposersRequest.ProjectFilter", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PROJECTS_ONLY"
    ],
    [
        2,
        "EXCLUDE_PROJECTS"
    ]
], 1), jo = (0, o.QT)(n.proto3, Hr, "ListBackgroundComposersRequest.ArchivedFilter", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "EXCLUDE_ARCHIVED"
    ],
    [
        2,
        "ARCHIVED_ONLY"
    ]
], 1);
class Xo extends Kr {
    constructor(t){
        super(), this.bcId = "", this.createdAtMs = 0, this.updatedAtMs = 0, this.workspaceRootPath = "", this.isOwnedByDifferentTeamMember = !1, this.name = "", this.branchName = "", this.hasStartedVm = !1, this.repoUrl = "", this.isArchived = !1, this.nId = "", this.isKilled = !1, this.status = Zr.UNSPECIFIED, this.workflowStatus = tn.UNSPECIFIED, this.isUnread = !1, this.source = en.UNSPECIFIED, this.githubIssueId = "", this.slackChannelId = "", this.slackMessageTimestamp = "", this.slackTeamId = "", this.linearIssueId = "", this.linearOrgId = "", this.promptGroupId = "", this.prUrl = "", this.isPrMerged = !1, this.triggeredPrincipalType = "", this.triggeredPrincipalId = "", this.visibility = "", this.ensembleStatus = dn.UNSPECIFIED, this.participantUserIds = [], this.repoUrls = [], this.initiatedEnvSetup = !1, this.startedAsNewProject = !1, this.hasPendingInteraction = !1, this.runsOnAnotherAgentsMachine = !1, this.storedPrs = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xo, t, e);
    }
    static $() {
        return [
            "BackgroundComposer|1 bc_id 9|2 created_at_ms 1|20 updated_at_ms 1|3 workspace_root_path 9|4 is_owned_by_different_team_member 8|5 name 9|6 branch_name 9|7 has_started_vm 8|8 repo_url 9|9 is_archived 8|10 n_id 9|11 is_killed 8|12 status #0|77 workflow_status #1|13 is_unread 8|14 source #2|24 github_issue_id 9|15 slack_channel_id 9|16 slack_message_timestamp 9|17 slack_team_id 9|18 linear_issue_id 9|19 linear_org_id 9|21 prompt_group_id 9|22 pr_url 9|23 is_pr_merged 8|25 lines_added 5?|26 lines_removed 5?|27 files_changed 5?|28 model_details #3?|29 triggered_principal_type 9|30 triggered_principal_id 9|31 visibility 9|32 ensemble_status #4|33 workflow_id 9?|34 agent_session_id 9?|35 kickoff_message_id 9?|36 grind_phase 9?|37 commit_count 5?|38 latest_commit_sha 9?|39 latest_commit_message 9?|40 last_message_activity_at_ms 1?|41 owning_service_account 9?|42 owning_service_account_name 9?|43 pr_status #5?|57 external_source_metadata #6?|58 worker_id 9?|59 requested_model #7?|60 use_private_worker 8?|45 participant_user_ids 5*|61 cloud_subagent_parent #8?|62 repo_urls 9*|63 environment_name 9?|64 private_workspace_identifier #9?|65 private_worker_display_name 9?|66 workspace_binding #10?|67 use_experimental_model_opt_out 8?|68 side_chat_info #11?|69 manager_agent_id 9?|70 initiated_env_setup 8|71 started_as_new_project 8|72 project_metadata #12?|73 environment_public_id 9?|74 publish_button_hidden 8?|75 publish_button_reconnect 8?|76 has_pending_interaction 8|78 last_read_at_ms 3?|79 runs_on_another_agents_machine 8|80 stored_prs #13*",
            Zr,
            tn,
            en,
            s.ModelDetails,
            dn,
            cn,
            da,
            at.G4,
            Aa,
            fa,
            pa,
            to,
            gs,
            _c
        ];
    }
}
class Zo extends Kr {
    constructor(t){
        super(), this.userId = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zo, t, e);
    }
    static $() {
        return [
            "BackgroundComposerParticipant|1 user_id 5|2 display_name 9?|3 email 9?|4 profile_picture_url 9?"
        ];
    }
}
class ta extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ta).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ta).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ta).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ta, t, e);
    }
    static $() {
        return [
            "NamedAgentProfile|1 profile_picture_url 9?"
        ];
    }
}
class ea extends Kr {
    constructor(t){
        super(), this.namedAgentId = "", this.bcId = "", this.sessionKey = "", this.sessionKind = "", this.createdAtMs = 0, this.updatedAtMs = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ea).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ea).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ea).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ea, t, e);
    }
    static $() {
        return [
            "NamedAgentSession|1 named_agent_id 9|2 bc_id 9|3 session_key 9|4 session_kind 9|10 created_at_ms 1|11 updated_at_ms 1|12 last_awakened_at_ms 1?|13 slack_channel_id 9?|14 slack_channel_name 9?|15 slack_permalink 9?"
        ];
    }
}
class ra extends Kr {
    constructor(t){
        super(), this.namedAgentId = "", this.homeBcId = "", this.name = "", this.createdAtMs = 0, this.updatedAtMs = 0, this.pinned = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ra).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ra).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ra).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ra, t, e);
    }
    static $() {
        return [
            "NamedAgent|1 named_agent_id 9|2 home_bc_id 9|3 name 9|4 creator #0?|5 created_at_ms 1|6 updated_at_ms 1|7 pinned 8|8 profile #1?",
            Zo,
            ta
        ];
    }
}
class na extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new na).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new na).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new na).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(na, t, e);
    }
    static $() {
        return [
            "ListNamedAgentsRequest"
        ];
    }
}
class sa extends Kr {
    constructor(t){
        super(), this.agents = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sa, t, e);
    }
    static $() {
        return [
            "ListNamedAgentsResponse|1 agents #0*",
            ra
        ];
    }
}
class ia extends Kr {
    constructor(t){
        super(), this.namedAgentId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ia).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ia).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ia).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ia, t, e);
    }
    static $() {
        return [
            "ListNamedAgentSessionsRequest|1 named_agent_id 9|2 page_size 5?|3 page_token 9?"
        ];
    }
}
class oa extends Kr {
    constructor(t){
        super(), this.sessions = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oa, t, e);
    }
    static $() {
        return [
            "ListNamedAgentSessionsResponse|1 sessions #0*|2 next_page_token 9?",
            ea
        ];
    }
}
class aa extends Kr {
    constructor(t){
        super(), this.subscriptionId = "", this.subscriptionType = "", this.subscriptionArgsJson = "", this.openTimeMs = 0, this.expiresAtMs = 0, this.deliveryCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new aa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new aa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new aa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(aa, t, e);
    }
    static $() {
        return [
            "EventSubscription|1 subscription_id 9|2 subscription_type 9|3 subscription_args_json 9|4 subscription_metadata_json 9?|10 open_time_ms 1|11 expires_at_ms 1|12 last_delivered_at_ms 1?|13 delivery_count 5"
        ];
    }
}
class ua extends Kr {
    constructor(t){
        super(), this.namedAgentId = "", this.bcId = "", this.conversationId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ua).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ua).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ua).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ua, t, e);
    }
    static $() {
        return [
            "ListEventSubscriptionsRequest|1 named_agent_id 9|2 bc_id 9|3 conversation_id 9"
        ];
    }
}
class ca extends Kr {
    constructor(t){
        super(), this.subscriptions = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ca).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ca).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ca).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ca, t, e);
    }
    static $() {
        return [
            "ListEventSubscriptionsResponse|1 subscriptions #0*",
            aa
        ];
    }
}
class la extends Kr {
    constructor(t){
        super(), this.namedAgentId = "", this.subscriptionId = "", this.bcId = "", this.conversationId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new la).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new la).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new la).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(la, t, e);
    }
    static $() {
        return [
            "CloseEventSubscriptionRequest|1 named_agent_id 9|2 subscription_id 9|3 bc_id 9|4 conversation_id 9"
        ];
    }
}
class ma extends Kr {
    constructor(t){
        super(), this.closed = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ma).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ma).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ma).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ma, t, e);
    }
    static $() {
        return [
            "CloseEventSubscriptionResponse|1 closed 8"
        ];
    }
}
class da extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new da).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new da).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new da).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(da, t, e);
    }
    static $() {
        return [
            "ExternalSourceMetadata|1 slack #0?|2 linear #1?|3 github #2?|4 gitlab #3?",
            _a,
            ya,
            wa,
            Sa
        ];
    }
}
class fa extends Kr {
    constructor(t){
        super(), this.id = "", this.uri = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fa, t, e);
    }
    static $() {
        return [
            "PrivateWorkspaceIdentifier|1 id 9|2 uri 9"
        ];
    }
}
class pa extends Kr {
    constructor(t){
        super(), this.id = "", this.displayName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pa, t, e);
    }
    static $() {
        return [
            "AgentWorkspaceBinding|1 id 9|2 display_name 9|3 private_workspace_identifier #0?",
            fa
        ];
    }
}
class ha extends Kr {
    constructor(t){
        super(), this.parentToolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ha).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ha).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ha).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ha, t, e);
    }
    static $() {
        return [
            "CloudSubagentTaskLineage|1 parent_tool_call_id 9"
        ];
    }
}
class ga extends Kr {
    constructor(t){
        super(), this.routeId = "", this.routeKind = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ga).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ga).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ga).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ga, t, e);
    }
    static $() {
        return [
            "CloudSubagentSubscriptionResourceLineage|1 route_id 9|2 route_kind 9"
        ];
    }
}
class Aa extends Kr {
    constructor(t){
        super(), this.parentAgentId = "", this.parentToolCallId = "", this.parentAgentType = ln.UNSPECIFIED, this.lineage = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Aa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Aa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Aa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Aa, t, e);
    }
    static $() {
        return [
            "CloudSubagentParentReference|1 parent_agent_id 9|2 parent_tool_call_id 9|3 parent_agent_type #0|5 subagent_type_name 9?|6 parent_spawn_kind #1?|7 parent_spawn_id 9?|8 task #2 lineage|9 subscription_resource #3 lineage",
            ln,
            mn,
            ha,
            ga
        ];
    }
}
class _a extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _a).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _a).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _a).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_a, t, e);
    }
    static $() {
        return [
            "SlackSourceMetadata|1 channel_id 9?|2 channel_name 9?|3 team_id 9?|4 message_timestamp 9?|5 message_permalink 9?"
        ];
    }
}
class ya extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ya).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ya).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ya).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ya, t, e);
    }
    static $() {
        return [
            "LinearSourceMetadata|1 issue_id 9?|2 org_id 9?|3 issue_identifier 9?|4 issue_title 9?"
        ];
    }
}
class wa extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wa, t, e);
    }
    static $() {
        return [
            "GithubSourceMetadata|1 issue_id 9?|2 pr_number 5?|3 pr_title 9?|4 issue_title 9?|5 issue_url 9?"
        ];
    }
}
class Sa extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sa, t, e);
    }
    static $() {
        return [
            "GitlabSourceMetadata|1 mr_iid 5?|2 mr_title 9?|3 mr_web_url 9?"
        ];
    }
}
class Ja extends Kr {
    constructor(t){
        super(), this.bcIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ja).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ja).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ja).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ja, t, e);
    }
    static $() {
        return [
            "PinBackgroundComposersRequest|1 bc_ids 9*"
        ];
    }
}
class Ba extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ba).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ba).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ba).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ba, t, e);
    }
    static $() {
        return [
            "PinBackgroundComposersResponse"
        ];
    }
}
class Ea extends Kr {
    constructor(t){
        super(), this.bcIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ea).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ea).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ea).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ea, t, e);
    }
    static $() {
        return [
            "UnpinBackgroundComposersRequest|1 bc_ids 9*"
        ];
    }
}
class Ia extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ia).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ia).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ia).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ia, t, e);
    }
    static $() {
        return [
            "UnpinBackgroundComposersResponse"
        ];
    }
}
class Ca extends Kr {
    constructor(t){
        super(), this.composers = [], this.didLoadStatus = !1, this.hasMore = !1, this.participants = [], this.pinnedBcIds = [], this.didLoadPinnedState = !1, this.canUseBackgroundAgents = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ca).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ca).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ca).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ca, t, e);
    }
    static $() {
        return [
            "ListBackgroundComposersResponse|1 composers #0*|2 did_load_status 8|3 has_more 8|4 next_page_offset 1?|5 participants #1*|6 pinned_bc_ids 9*|7 did_load_pinned_state 8|8 next_page_token 9?|10 can_use_background_agents 8",
            Xo,
            Zo
        ];
    }
}
class ba extends Kr {
    constructor(t){
        super(), this.repoUrl = "", this.scmRepoNodeId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ba).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ba).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ba).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ba, t, e);
    }
    static $() {
        return [
            "EnvironmentRepoEntry|1 repo_url 9|2 scm_repo_node_id 9|3 git_enterprise_uuid 9?"
        ];
    }
}
class ka extends Kr {
    constructor(t){
        super(), this.repoUrl = "", this.path = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ka).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ka).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ka).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ka, t, e);
    }
    static $() {
        return [
            "EnvironmentJsonFileLocation|1 repo_url 9|2 path 9"
        ];
    }
}
class va extends Kr {
    constructor(t){
        super(), this.repos = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new va).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new va).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new va).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(va, t, e);
    }
    static $() {
        return [
            "EnvironmentRepoConfig|1 repos #0*|2 environment_json_location #1?",
            ba,
            ka
        ];
    }
}
class qa extends Kr {
    constructor(t){
        super(), this.repoUrl = "", this.ref = "", this.baseRef = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qa, t, e);
    }
    static $() {
        return [
            "RepoStartingRef|1 repo_url 9|2 ref 9|3 base_ref 9"
        ];
    }
}
class Ra extends Kr {
    constructor(t){
        super(), this.url = "", this.ref = "", this.userExtensions = [], this.cursorServerCommit = "", this.environmentJsonOverride = "", this.dontAllowReadingEnvironmentJsonFromDatabase = !1, this.skipBuildCaches = !1, this.startingRefs = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ra).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ra).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ra).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ra, t, e);
    }
    static $() {
        return [
            "DevcontainerStartingPoint|1 url 9|2 ref 9|4 user_extensions 9*|5 cursor_server_commit 9|6 environment_json_override 9|8 git_diff_to_apply #0|9 dont_allow_reading_environment_json_from_database 8|10 skip_build_caches 8|11 repo_config #1?|12 environment_name 9?|13 environment_id 3?|15 environment_public_id 9?|14 starting_refs #2*|17 target_selection #3?",
            s.GitDiff,
            va,
            qa,
            fn
        ];
    }
}
class Pa extends Kr {
    constructor(t){
        super(), this.timeBudgetMs = n.protoInt64.zero, this.phase = Ta.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pa, t, e);
    }
    static $() {
        return [
            "GrindModeConfig|1 time_budget_ms 3|2 start_time_unix_ms 3?|3 phase #0|4 auto_proceed_after_planning 8?|5 time_budget_seconds 3?|6 grind_prompt_calibrate_effort 8?",
            Ta
        ];
    }
}
var Ta = (0, o.QT)(n.proto3, Hr, "GrindModeConfig.Phase", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PLANNING"
    ],
    [
        2,
        "EXECUTING"
    ],
    [
        3,
        "CONTROLLER"
    ]
], 1);
class xa extends Kr {
    constructor(t){
        super(), this.setupSessionId = "", this.resumedSession = !1, this.repoUrls = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xa, t, e);
    }
    static $() {
        return [
            "EnvironmentSetupRunStartedMetadata|1 setup_session_id 9|2 surface 9?|3 entrypoint 9?|4 resumed_session 8|5 repo_url 9?|6 repo_urls 9*"
        ];
    }
}
class Na extends Kr {
    constructor(t){
        super(), this.rollout = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Na).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Na).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Na).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Na, t, e);
    }
    static $() {
        return [
            "CloudAgentEvalOverrides|1 rollout 8|2 snapshot 9?"
        ];
    }
}
class Da extends Kr {
    constructor(t){
        super(), this.snapshotNameOrId = "", this.prompt = "", this.richPrompt = "", this.files = [], this.additionalModelDetails = [], this.requestedModels = [], this.snapshotWorkspaceRootPath = "", this.startForAuthIdOnTeam = "", this.autoBranch = !1, this.returnImmediately = !1, this.images = [], this.conversationHistory = [], this.documentationIdentifiers = [], this.externalLinks = [], this.bcId = "", this.preFetchedBlobs = [], this.labels = [], this.skills = [], this.customSubagents = [], this.requestedAdditionalStoreIds = [], this.storeMounts = [], this.runEnvVars = {}, this.externalMetadata = {}, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Da).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Da).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Da).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Da, t, e);
    }
    static $() {
        return [
            "StartBackgroundComposerFromSnapshotRequest|1 snapshot_name_or_id 9|11 devcontainer_starting_point #0|2 prompt 9|17 rich_prompt 9|3 files #1*|4 model_details #2|16 additional_model_details #2*|58 requested_models #3*|5 repository_info #4|6 snapshot_workspace_root_path 9|8 start_for_auth_id_on_team 9|9 auto_branch 8|10 return_immediately 8|12 force_vm_backend 9?|15 force_cluster 9?|29 force_machine_template 9?|13 images #5*|14 repo_url 9?|18 conversation_history #6*|23 source #7?|19 documentation_identifiers 9*|20 use_web 8?|21 external_links #8*|22 bc_id 9|24 slack_channel_id 9?|25 slack_message_timestamp 9?|27 slack_team_id 9?|28 linear_issue_id 9?|40 github_issue_id 9?|26 add_initial_message_to_responses 8?|30 linear_org_id 9?|33 linear_issue_identifier 9?|94 external_source_metadata #9?|31 base_branch 9?|38 custom_branch_name 9?|32 client_ip 9?|34 prompt_group_id 9?|53 should_synthesize 8?|35 pod_id 9?|36 wait_on_branch_name 8?|37 auto_create_pr 8?|39 webhook_config #10?|41 starting_message_type #11?|42 open_as_cursor_github_app 8?|43 skip_reviewer_request 8?|44 conversation_action #12?|45 test_mode_enabled 8?|60 skip_user_install_commands_and_cloud_testing 8?|46 agent_session_id 9?|47 conversation_state #13?|48 pre_fetched_blobs #14*|49 kickoff_message_id 9?|50 name 9?|51 enable_setup_vm_environment_tool 8?|52 grind_mode_config #15?|73 automation_id 9?|55 use_private_worker 8?|59 labels #16*|97 private_worker_owner_filter #17?|100 private_workspace_identifier #18?|110 workspace_binding #19?|56 force_non_chargeable 8?|57 pr_url 9?|75 effort_mode #20?|76 auto_proceed_after_planning 8?|77 time_budget_seconds 3?|78 time_budget_ms 3?|79 init_empty_repo 8?|80 skills #21*|81 cloud_plugin_manifest_json 9?|82 cloud_plugin_snapshot_token 9?|95 mcp_config_json 9?|96 custom_subagents #22*|98 team_id 5?|99 cloud_subagent_parent #23?|101 requested_additional_store_ids 9*|108 store_mounts #24*|104 is_slack_v2 8?|113 is_slack_v1_5 8?|105 named_agent_id 9?|106 named_agent_session_key 9?|107 named_agent_session_kind 9?|109 named_agent_profile #25?|111 run_env_vars 9,9|112 selected_private_worker_id 9?|114 use_experimental_model_opt_out 8?|115 forked_from_bc_id 9?|116 requested_environment_build_id 9?|117 external_metadata 9,9|118 environment_setup_run_started_metadata #26?|119 project_details #27?|120 disable_pr_management_tool 8?|121 system_prompt_spec #28?|122 project_metadata #29?|123 new_project_seeded_empty_root 8?|124 manager_spawn_kind #30?|125 grok_bot_handoff_lineage #31?|126 same_vm_machine_owner_bc_id 9?|127 manager_bc_id 9?|128 manager_tool_call_id 9?|129 expected_scope #32|130 pr_agent_view #33|131 placement_grant_id 9?|132 agent_store_owner_bc_id 9?|133 staged_project_id 9?|135 eval_overrides #34?",
            Ra,
            Ua,
            s.ModelDetails,
            at.G4,
            Pu,
            s.ImageProto,
            ct.hS,
            en,
            s.ComposerExternalLink,
            da,
            Qa,
            Fn,
            ut.QFf,
            ut.Y9z,
            su,
            Pa,
            Xp,
            _h,
            fa,
            pa,
            lt.K$,
            mt.N,
            dt.zz,
            Aa,
            kt,
            ta,
            xa,
            ut.umU,
            tr.$,
            gs,
            Vr,
            Ma,
            it.Y,
            ao,
            Na
        ];
    }
}
class Ua extends Kr {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.contents = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ua).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ua).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ua).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ua, t, e);
    }
    static $() {
        return [
            "StartBackgroundComposerFromSnapshotRequest.File|1 relative_workspace_path 9|2 contents 9"
        ];
    }
}
class Qa extends Kr {
    constructor(t){
        super(), this.url = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qa, t, e);
    }
    static $() {
        return [
            "StartBackgroundComposerFromSnapshotRequest.WebhookConfig|1 url 9|2 secret 9?"
        ];
    }
}
class Ma extends Kr {
    constructor(t){
        super(), this.grokBotAgentId = "", this.launchingRequestId = "", this.launchingRootRequestId = "", this.launchingToolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ma).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ma).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ma).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ma, t, e);
    }
    static $() {
        return [
            "GrokBotHandoffLineage|1 grok_bot_agent_id 9|2 launching_request_id 9|3 launching_root_request_id 9|4 launching_tool_call_id 9"
        ];
    }
}
class Oa extends Kr {
    constructor(t){
        super(), this.bcId = "", this.repoUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Oa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Oa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Oa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Oa, t, e);
    }
    static $() {
        return [
            "CloudOnboardingAutoEnvSetupAcceptResult|1 bc_id 9|2 repo_url 9"
        ];
    }
}
class Fa extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fa, t, e);
    }
    static $() {
        return [
            "StartBackgroundComposerFromSnapshotResponse|1 composer #0|2 was_swapped_to_default 8?|3 initial_run_id 9?|4 auto_env_setup #1?|5 owner 9?",
            Xo,
            Oa
        ];
    }
}
class La extends Kr {
    constructor(t){
        super(), this.scmProvider = "", this.startFromScratch = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new La).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new La).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new La).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(La, t, e);
    }
    static $() {
        return [
            "StartCloudOnboardingRequest|1 start_request #0|2 scm_provider 9|3 start_from_scratch 8",
            Da
        ];
    }
}
class $a extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $a).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $a).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $a).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($a, t, e);
    }
    static $() {
        return [
            "StartChangeMonitorOnboardingRequest|1 start_request #0",
            Da
        ];
    }
}
class Ga extends Kr {
    constructor(t){
        super(), this.scmProvider = "", this.excludedRepositoryKeys = [], this.excludedRepositoryNodeIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ga).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ga).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ga).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ga, t, e);
    }
    static $() {
        return [
            "StartCloudOnboardingHeuristicEnvSetupRequest|1 scm_provider 9|2 excluded_repository_keys 9*|3 excluded_repository_node_ids 9*|4 max_results 5?"
        ];
    }
}
class Ha extends Kr {
    constructor(t){
        super(), this.admitted = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ha).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ha).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ha).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ha, t, e);
    }
    static $() {
        return [
            "StartCloudOnboardingHeuristicEnvSetupResponse|1 admitted 8"
        ];
    }
}
class Ka extends Kr {
    constructor(t){
        super(), this.sourceBcId = "", this.mode = pn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ka).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ka).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ka).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ka, t, e);
    }
    static $() {
        return [
            "ForkBackgroundComposerRequest|1 source_bc_id 9|2 mode #0|3 name 9?|4 turn_count 13?",
            pn
        ];
    }
}
class Va extends Kr {
    constructor(t){
        super(), this.bcId = "", this.sourceBcId = "", this.mode = pn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Va).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Va).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Va).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Va, t, e);
    }
    static $() {
        return [
            "ForkBackgroundComposerResponse|1 composer #0|2 bc_id 9|3 source_bc_id 9|4 mode #1|5 initial_run_id 9?",
            Xo,
            pn
        ];
    }
}
class za extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new za).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new za).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new za).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(za, t, e);
    }
    static $() {
        return [
            "AttachBackgroundComposerLogsRequest|1 bc_id 9|2 last_event_id 9?|3 worker_index 13?|4 last_docker_build_event_id 9?|5 last_setup_event_id 9?|6 associated_pod_key 9?|7 expected_scope #0",
            it.Y
        ];
    }
}
class Wa extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wa, t, e);
    }
    static $() {
        return [
            "AttachBackgroundComposerLogsResponse|1 event #0|2 updated_status #1|3 start_error #2",
            Ya,
            K,
            s.ErrorDetails
        ];
    }
}
class Ya extends Kr {
    constructor(t){
        super(), this.eventId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ya).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ya).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ya).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ya, t, e);
    }
    static $() {
        return [
            "AttachBackgroundComposerLogsResponse.Event|1 event_id 9|2 event #0|3 waterfall_update #1",
            p,
            ar
        ];
    }
}
class ja extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ja).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ja).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ja).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ja, t, e);
    }
    static $() {
        return [
            "AttachBackgroundComposerRequest|1 bc_id 9|2 starting_index 5?"
        ];
    }
}
class Xa extends Kr {
    constructor(t){
        super(), this.startingCommit = "", this.baseBranch = "", this.statusUpdate = Zr.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xa, t, e);
    }
    static $() {
        return [
            "AttachBackgroundComposerResponse|1 headless_agentic_composer_response #0|2 prompt #1|4 starting_commit 9|5 base_branch 9|6 status_update #2|3 diff_since_start #3",
            Cu,
            Tu,
            Zr,
            s.GitDiff
        ];
    }
}
class Za extends Kr {
    constructor(t){
        super(), this.bcId = "", this.shouldSendPrefetchedBlobsFirst = !1, this.preFetchedBlobIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Za).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Za).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Za).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Za, t, e);
    }
    static $() {
        return [
            "StreamConversationRequest|1 bc_id 9|2 offset_key 9?|3 filter_heavy_step_data 8?|4 should_send_prefetched_blobs_first 8|5 pre_fetched_blob_ids 12*|6 prefetch_only_last_step_per_turn 8?|7 send_stream_signal_after_prefetch 8?|8 max_blobs_after_prefetch 13?|9 allow_streaming_when_terminal_status 8?|10 pre_fetched_blob_filter #0?|11 include_stream_heartbeats 8?|12 purpose #1?|13 expected_scope #2|14 max_turns_to_prefetch 13?|15 slim_cloud_agent_state 8?|16 tail_after_state_cursor 8?|17 send_caught_up_signal 8?|18 prefetch_window_steps 13?|19 omit_task_transcripts_in_updates 8?|20 preview_truncated_steps 8?|22 omit_edit_full_file_contents 8?",
            tu,
            hn,
            it.Y
        ];
    }
}
class tu extends Kr {
    constructor(t){
        super(), this.seed = 0, this.segmentLength = 0, this.segmentCount = 0, this.fingerprintBits = 0, this.slotCount = 0, this.packedFingerprints = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tu, t, e);
    }
    static $() {
        return [
            "PreFetchedBlobFilter|1 seed 13|2 segment_length 13|3 segment_count 13|4 fingerprint_bits 13|5 slot_count 13|6 packed_fingerprints 12"
        ];
    }
}
class eu extends Kr {
    constructor(t){
        super(), this.phase = ru.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new eu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new eu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new eu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(eu, t, e);
    }
    static $() {
        return [
            "ReadOnlySharedPodLifecycleEvent|1 phase #0",
            ru
        ];
    }
}
var ru = (0, o.QT)(n.proto3, Hr, "ReadOnlySharedPodLifecycleEvent.Phase", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        2,
        "AWAITING_FULL_POD"
    ],
    [
        3,
        "INACTIVE"
    ]
], 1);
class nu extends Kr {
    constructor(t){
        super(), this.workerIndex = 0, this.event = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nu, t, e);
    }
    static $() {
        return [
            "WorkerLifecycleEvent|1 worker_index 13|2 creating #0 event|3 pinned_worker_offline #0 event|4 pinned_worker_reconnected #0 event",
            n.Empty
        ];
    }
}
class su extends Kr {
    constructor(t){
        super(), this.id = new Uint8Array(0), this.value = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new su).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new su).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new su).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(su, t, e);
    }
    static $() {
        return [
            "PreFetchedBlob|1 id 12|2 value 12"
        ];
    }
}
class iu extends Kr {
    constructor(t){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new iu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new iu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new iu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(iu, t, e);
    }
    static $() {
        return [
            "StreamConversationResponse|3 initial_state #0 message|4 interaction_update_with_offset #1 message|5 cloud_agent_state_with_id_and_offset #2 message|6 workflow_status_with_offset #3 message|7 prefetched_blobs #4 message|8 stream_signal #5 message|9 transient_error_with_offset #6 message|10 dev_banner_message #7 message|11 worker_lifecycle_event_with_offset #8 message|12 interaction_query_with_offset #9 message|13 read_only_shared_pod_lifecycle_event_with_offset #10 message|14 stream_heartbeat #11 message|15 interaction_settled_with_offset #12 message",
            uu,
            lu,
            cu,
            du,
            au,
            ou,
            fu,
            pu,
            gu,
            mu,
            Au,
            hu,
            _u
        ];
    }
}
var ou = (0, o.QT)(n.proto3, Hr, "StreamConversationResponse.StreamSignal", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "END_OF_INITIAL_STATE_PREFETCH"
    ],
    [
        2,
        "CAUGHT_UP"
    ]
], 1);
class au extends Kr {
    constructor(t){
        super(), this.preFetchedBlobs = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new au).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new au).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new au).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(au, t, e);
    }
    static $() {
        return [
            "StreamConversationResponse.PrefetchedBlobs|1 pre_fetched_blobs #0*",
            su
        ];
    }
}
class uu extends Kr {
    constructor(t){
        super(), this.blobId = new Uint8Array(0), this.preFetchedBlobs = [], this.workflowStatus = tn.UNSPECIFIED, this.userDisplayInfos = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new uu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new uu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new uu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(uu, t, e);
    }
    static $() {
        return [
            "StreamConversationResponse.InitialState|1 blob_id 12|2 cloud_agent_state #0|4 pre_fetched_blobs #1*|5 workflow_status #2|6 user_display_infos #3*",
            Rf,
            su,
            tn,
            ut._8g
        ];
    }
}
class cu extends Kr {
    constructor(t){
        super(), this.offsetKey = "", this.blobId = new Uint8Array(0), this.preFetchedBlobs = [], this.userDisplayInfos = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cu, t, e);
    }
    static $() {
        return [
            "StreamConversationResponse.CloudAgentStateWithIdAndOffset|1 offset_key 9|2 blob_id 12|3 cloud_agent_state #0|4 pre_fetched_blobs #1*|5 user_display_infos #2*",
            Rf,
            su,
            ut._8g
        ];
    }
}
class lu extends Kr {
    constructor(t){
        super(), this.offsetKey = "", this.userDisplayInfos = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lu, t, e);
    }
    static $() {
        return [
            "StreamConversationResponse.InteractionUpdateWithOffset|1 offset_key 9|2 interaction_update #0|3 user_display_infos #1*",
            ut.Uq,
            ut._8g
        ];
    }
}
class mu extends Kr {
    constructor(t){
        super(), this.offsetKey = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mu, t, e);
    }
    static $() {
        return [
            "StreamConversationResponse.InteractionQueryWithOffset|1 offset_key 9|2 interaction_query #0",
            ut.Pd7
        ];
    }
}
class du extends Kr {
    constructor(t){
        super(), this.offsetKey = "", this.workflowStatus = tn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new du).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new du).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new du).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(du, t, e);
    }
    static $() {
        return [
            "StreamConversationResponse.WorkflowStatusWithOffset|1 offset_key 9|2 workflow_status #0",
            tn
        ];
    }
}
class fu extends Kr {
    constructor(t){
        super(), this.offsetKey = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fu, t, e);
    }
    static $() {
        return [
            "StreamConversationResponse.TransientErrorWithOffset|1 offset_key 9|2 transient_error #0",
            Qf
        ];
    }
}
class pu extends Kr {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pu, t, e);
    }
    static $() {
        return [
            "StreamConversationResponse.DevBannerMessage|1 text 9"
        ];
    }
}
class hu extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hu, t, e);
    }
    static $() {
        return [
            "StreamConversationResponse.StreamHeartbeat"
        ];
    }
}
class gu extends Kr {
    constructor(t){
        super(), this.offsetKey = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gu, t, e);
    }
    static $() {
        return [
            "StreamConversationResponse.WorkerLifecycleEventWithOffset|1 offset_key 9|2 worker_lifecycle_event #0",
            nu
        ];
    }
}
class Au extends Kr {
    constructor(t){
        super(), this.offsetKey = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Au).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Au).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Au).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Au, t, e);
    }
    static $() {
        return [
            "StreamConversationResponse.ReadOnlySharedPodLifecycleEventWithOffset|1 offset_key 9|2 read_only_shared_pod_lifecycle_event #0",
            eu
        ];
    }
}
class _u extends Kr {
    constructor(t){
        super(), this.offsetKey = "", this.interactionId = "", this.state = $n.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_u, t, e);
    }
    static $() {
        return [
            "StreamConversationResponse.InteractionSettledWithOffset|1 offset_key 9|2 interaction_id 9|3 state #0|4 reason 9?|5 answer #1?",
            $n,
            yr.tz
        ];
    }
}
class yu extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yu, t, e);
    }
    static $() {
        return [
            "GetLatestAgentConversationStateRequest|1 bc_id 9"
        ];
    }
}
class wu extends Kr {
    constructor(t){
        super(), this.numPriorInteractionUpdates = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wu, t, e);
    }
    static $() {
        return [
            "LatestAgentConversationState|1 conversation_state #0|2 num_prior_interaction_updates 13|3 conversation_rewind_epoch 13?",
            ut.Y9z
        ];
    }
}
class Su extends Kr {
    constructor(t){
        super(), this.preFetchedBlobs = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Su).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Su).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Su).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Su, t, e);
    }
    static $() {
        return [
            "GetLatestAgentConversationStateResponse|1 latest_conversation_state #0|2 pre_fetched_blobs #1*",
            wu,
            su
        ];
    }
}
class Ju extends Kr {
    constructor(t){
        super(), this.bcId = "", this.blobId = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ju).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ju).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ju).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ju, t, e);
    }
    static $() {
        return [
            "GetBlobForAgentKVRequest|1 bc_id 9|2 blob_id 12|3 expected_scope #0",
            it.Y
        ];
    }
}
class Bu extends Kr {
    constructor(t){
        super(), this.blobData = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bu, t, e);
    }
    static $() {
        return [
            "GetBlobForAgentKVResponse|1 blob_data 12"
        ];
    }
}
class Eu extends Kr {
    constructor(t){
        super(), this.bcId = "", this.turnIds = [], this.heldStepsOfFirst = 0, this.windowSteps = 0, this.previewTruncatedSteps = !1, this.omitEditFullFileContents = !1, this.filterHeavyStepData = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Eu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Eu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Eu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Eu, t, e);
    }
    static $() {
        return [
            "GetConversationPageRequest|1 bc_id 9|2 turn_ids 12*|3 held_steps_of_first 13|4 window_steps 13|5 preview_truncated_steps 8|6 omit_edit_full_file_contents 8|7 filter_heavy_step_data 8|8 expected_scope #0",
            it.Y
        ];
    }
}
class Iu extends Kr {
    constructor(t){
        super(), this.blobs = [], this.steps = 0, this.reachedFirstTurn = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Iu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Iu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Iu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Iu, t, e);
    }
    static $() {
        return [
            "GetConversationPageResponse|1 blobs #0*|2 steps 13|3 reached_first_turn 8",
            su
        ];
    }
}
class Cu extends Kr {
    constructor(t){
        super(), this.text = "", this.isMessageDone = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cu, t, e);
    }
    static $() {
        return [
            "HeadlessAgenticComposerResponse|1 text 9|2 tool_call #0?|3 final_tool_result #1?|6 streamed_back_tool_call #2?|4 user_message #3|5 is_message_done 8|7 error #4?|8 human_message #5|9 thinking #6?|10 thinking_duration_ms 5?|12 thinking_style #7?|11 status #8?",
            wr.TE4,
            ku,
            wr.Faf,
            bu,
            vu,
            ct.hS,
            ct.I8,
            ct.ZP,
            qu
        ];
    }
}
class bu extends Kr {
    constructor(t){
        super(), this.text = "", this.richText = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bu, t, e);
    }
    static $() {
        return [
            "HeadlessAgenticComposerResponse.UserMessage|1 text 9|2 rich_text 9"
        ];
    }
}
class ku extends Kr {
    constructor(t){
        super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ku).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ku).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ku).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ku, t, e);
    }
    static $() {
        return [
            "HeadlessAgenticComposerResponse.FinalToolResult|1 tool_call_id 9|2 result #0",
            wr.Ue3
        ];
    }
}
class vu extends Kr {
    constructor(t){
        super(), this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vu, t, e);
    }
    static $() {
        return [
            "HeadlessAgenticComposerResponse.Error|1 message 9|2 error_details #0",
            s.ErrorDetails
        ];
    }
}
class qu extends Kr {
    constructor(t){
        super(), this.type = Ru.UNSPECIFIED, this.message = "", this.isComplete = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qu, t, e);
    }
    static $() {
        return [
            "HeadlessAgenticComposerResponse.Status|1 type #0|2 message 9|3 is_complete 8",
            Ru
        ];
    }
}
var Ru = (0, o.QT)(n.proto3, Hr, "HeadlessAgenticComposerResponse.Status.StatusType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INDEX_SYNC"
    ],
    [
        2,
        "GENERIC"
    ]
], 1);
class Pu extends Kr {
    constructor(t){
        super(), this.pathEncryptionKey = "", this.repositoryInfoShouldQueryStaging = !1, this.repositoryInfoShouldQueryProd = !1, this.repoQueryAuthToken = "", this.shouldSyncIndex = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pu, t, e);
    }
    static $() {
        return [
            "HeadlessAgenticComposerRepositoryInfo|1 repository_info #0|2 path_encryption_key 9|3 repository_info_should_query_staging 8|4 repository_info_should_query_prod 8|5 repo_query_auth_token 9|6 should_sync_index 8|7 query_only_repo_access #1",
            Sr.bn,
            Sr.bq
        ];
    }
}
class Tu extends Kr {
    constructor(t){
        super(), this.text = "", this.richText = "", this.fileSelections = [], this.fileAttachments = [], this.images = [], this.conversationHistory = [], this.documentationIdentifiers = [], this.externalLinks = [], this.blobDataPerMessage = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tu, t, e);
    }
    static $() {
        return [
            "HeadlessAgenticComposerPrompt|5 base_conversation_message #0|1 text 9|6 rich_text 9|2 file_selections #1*|3 file_attachments #2*|4 images #3*|7 conversation_history #0*|8 documentation_identifiers 9*|9 use_web 8?|10 external_links #4*|11 blob_data_per_message #5*",
            ct.hS,
            xu,
            Nu,
            s.ImageProto,
            s.ComposerExternalLink,
            br
        ];
    }
}
class xu extends Kr {
    constructor(t){
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xu, t, e);
    }
    static $() {
        return [
            "HeadlessAgenticComposerPrompt.FileSelection|1 relative_workspace_path 9"
        ];
    }
}
class Nu extends Kr {
    constructor(t){
        super(), this.name = "", this.contents = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nu, t, e);
    }
    static $() {
        return [
            "HeadlessAgenticComposerPrompt.FileAttachment|1 name 9|2 contents 9"
        ];
    }
}
class Du extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Du).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Du).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Du).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Du, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerStatusRequest|1 bc_id 9|2 expected_scope #0",
            it.Y
        ];
    }
}
class Uu extends Kr {
    constructor(t){
        super(), this.status = Zr.UNSPECIFIED, this.isUnread = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Uu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Uu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Uu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Uu, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerStatusResponse|1 status #0|2 is_unread 8",
            Zr
        ];
    }
}
class Qu extends Kr {
    constructor(t){
        super(), this.bcId = "", this.followup = "", this.richFollowup = "", this.synchronous = !1, this.requestedAdditionalStoreIds = [], this.runEnvVars = {}, this.storeMounts = [], this.openInteractionSettlements = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qu, t, e);
    }
    static $() {
        return [
            "AddAsyncFollowupBackgroundComposerRequest|1 bc_id 9|2 followup 9|4 rich_followup 9|3 synchronous 8|5 followup_message #0|6 model_details #1?|15 requested_model #2?|7 followup_source #3?|8 continue_rebase 8?|9 plan_followup_type #4?|10 followup_conversation_action #5?|11 followup_id 9?|12 time_budget_ms 3?|13 time_budget_seconds 3?|14 followup_system_reminder 9?|16 mcp_config_json 9?|17 requested_additional_store_ids 9*|18 run_env_vars 9,9|19 store_mounts #6*|20 resubmit_from_message_id 9?|21 use_experimental_model_opt_out 8?|22 coalescing_key 9?|23 pr_head_sha 9?|24 expected_scope #7|25 pr_agent_view #8|26 open_interaction_settlements #9*",
            ct.hS,
            s.ModelDetails,
            at.G4,
            en,
            gn,
            ut.QFf,
            kt,
            it.Y,
            ao,
            Mf
        ];
    }
}
class Mu extends Kr {
    constructor(t){
        super(), this.runId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mu, t, e);
    }
    static $() {
        return [
            "AddAsyncFollowupBackgroundComposerResponse|1 run_id 9"
        ];
    }
}
class Ou extends Kr {
    constructor(t){
        super(), this.bcId = "", this.source = en.UNSPECIFIED, this.promoteFollowupId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ou).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ou).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ou).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ou, t, e);
    }
    static $() {
        return [
            "InjectBackgroundComposerContextRequest|1 bc_id 9|2 inject_context_action #0|3 source #1|4 followup_message #2|5 promote_followup_id 9|6 expected_scope #3",
            ut.hGJ,
            en,
            ct.hS,
            it.Y
        ];
    }
}
class Fu extends Kr {
    constructor(t){
        super(), this.outcome = Lu.UNSPECIFIED, this.queuedRunId = "", this.fallbackReason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fu, t, e);
    }
    static $() {
        return [
            "InjectBackgroundComposerContextResponse|1 outcome #0|2 queued_run_id 9|3 fallback_reason 9",
            Lu
        ];
    }
}
var Lu = (0, o.QT)(n.proto3, Hr, "InjectBackgroundComposerContextResponse.Outcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "QUEUED"
    ],
    [
        2,
        "QUEUED_FOR_NEXT_TURN"
    ],
    [
        3,
        "REJECTED"
    ]
], 1);
class $u extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($u, t, e);
    }
    static $() {
        return [
            "SubmitInteractionResponseBackgroundComposerRequest|1 bc_id 9|2 interaction_response #0|3 ask_question_tool_call_id 9?|4 interaction_id 9?",
            ut.Y5
        ];
    }
}
class Gu extends Kr {
    constructor(t){
        super(), this.resolutionOutcome = Hu.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gu, t, e);
    }
    static $() {
        return [
            "SubmitInteractionResponseBackgroundComposerResponse|1 resolution_outcome #0",
            Hu
        ];
    }
}
var Hu = (0, o.QT)(n.proto3, Hr, "SubmitInteractionResponseBackgroundComposerResponse.ResolutionOutcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SIGNAL_ENQUEUED"
    ],
    [
        2,
        "NOT_PAUSED"
    ],
    [
        3,
        "QUERY_ID_SIGNAL_ENQUEUED"
    ],
    [
        4,
        "ANSWER_ENQUEUED"
    ]
], 1);
class Ku extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ku).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ku).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ku).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ku, t, e);
    }
    static $() {
        return [
            "ListPendingFollowupsRequest|1 bc_id 9|2 expected_scope #0",
            it.Y
        ];
    }
}
class Vu extends Kr {
    constructor(t){
        super(), this.followupId = "", this.text = "", this.richText = "", this.createdAtMs = n.protoInt64.zero, this.source = en.UNSPECIFIED, this.cursorCommands = [], this.cursorCommandsExplicitlySet = !1, this.pastChats = [], this.pastChatsExplicitlySet = !1, this.blobData = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vu, t, e);
    }
    static $() {
        return [
            "PendingFollowup|1 followup_id 9|2 text 9|3 rich_text 9|4 created_at_ms 3|5 source #0|6 cursor_commands #1*|7 cursor_commands_explicitly_set 8|8 past_chats #2*|9 past_chats_explicitly_set 8|10 conversation_action #3?|11 blob_data #4*|12 use_experimental_model_opt_out 8?",
            en,
            kr.Ps,
            kr.AW,
            ut.QFf,
            Cr
        ];
    }
}
class zu extends Kr {
    constructor(t){
        super(), this.pendingFollowups = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zu, t, e);
    }
    static $() {
        return [
            "ListPendingFollowupsResponse|1 pending_followups #0*",
            Vu
        ];
    }
}
class Wu extends Kr {
    constructor(t){
        super(), this.bcId = "", this.followupId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wu, t, e);
    }
    static $() {
        return [
            "UpdatePendingFollowupRequest|1 bc_id 9|2 followup_id 9|3 updated_message #0|4 expected_scope #1",
            ct.hS,
            it.Y
        ];
    }
}
class Yu extends Kr {
    constructor(t){
        super(), this.success = !1, this.errorMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yu, t, e);
    }
    static $() {
        return [
            "UpdatePendingFollowupResponse|1 success 8|2 error_message 9"
        ];
    }
}
class ju extends Kr {
    constructor(t){
        super(), this.bcId = "", this.followupId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ju).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ju).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ju).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ju, t, e);
    }
    static $() {
        return [
            "DeletePendingFollowupRequest|1 bc_id 9|2 followup_id 9|3 expected_scope #0",
            it.Y
        ];
    }
}
class Xu extends Kr {
    constructor(t){
        super(), this.success = !1, this.errorMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xu, t, e);
    }
    static $() {
        return [
            "DeletePendingFollowupResponse|1 success 8|2 error_message 9"
        ];
    }
}
class Zu extends Kr {
    constructor(t){
        super(), this.bcId = "", this.followupId = "", this.targetFollowupId = "", this.insertAfter = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zu, t, e);
    }
    static $() {
        return [
            "ReorderPendingFollowupRequest|1 bc_id 9|2 followup_id 9|3 target_followup_id 9|4 insert_after 8|5 expected_scope #0",
            it.Y
        ];
    }
}
class tc extends Kr {
    constructor(t){
        super(), this.success = !1, this.errorMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tc, t, e);
    }
    static $() {
        return [
            "ReorderPendingFollowupResponse|1 success 8|2 error_message 9"
        ];
    }
}
class ec extends Kr {
    constructor(t){
        super(), this.bcId = "", this.followupId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ec).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ec).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ec).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ec, t, e);
    }
    static $() {
        return [
            "SubmitPendingFollowupNowRequest|1 bc_id 9|2 followup_id 9|3 expected_scope #0",
            it.Y
        ];
    }
}
class rc extends Kr {
    constructor(t){
        super(), this.success = !1, this.errorMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rc, t, e);
    }
    static $() {
        return [
            "SubmitPendingFollowupNowResponse|1 success 8|2 error_message 9"
        ];
    }
}
class nc extends Kr {
    constructor(t){
        super(), this.bcId = "", this.followupId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nc, t, e);
    }
    static $() {
        return [
            "MarkFollowupEditingRequest|1 bc_id 9|2 followup_id 9|3 editing 8?|4 expected_scope #0",
            it.Y
        ];
    }
}
class sc extends Kr {
    constructor(t){
        super(), this.success = !1, this.errorMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sc, t, e);
    }
    static $() {
        return [
            "MarkFollowupEditingResponse|1 success 8|2 error_message 9"
        ];
    }
}
class ic extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ic).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ic).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ic).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ic, t, e);
    }
    static $() {
        return [
            "StartSlackStreamingForFollowupRequest|1 bc_id 9"
        ];
    }
}
class oc extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oc, t, e);
    }
    static $() {
        return [
            "StartSlackStreamingForFollowupResponse"
        ];
    }
}
class ac extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ac).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ac).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ac).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ac, t, e);
    }
    static $() {
        return [
            "StartGithubStreamingForFollowupRequest|1 bc_id 9"
        ];
    }
}
class uc extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new uc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new uc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new uc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(uc, t, e);
    }
    static $() {
        return [
            "StartGithubStreamingForFollowupResponse"
        ];
    }
}
class cc extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cc, t, e);
    }
    static $() {
        return [
            "StartLinearStreamingForFollowupRequest|1 bc_id 9"
        ];
    }
}
class lc extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lc, t, e);
    }
    static $() {
        return [
            "StartLinearStreamingForFollowupResponse"
        ];
    }
}
class mc extends Kr {
    constructor(t){
        super(), this.bcId = "", this.includeDiff = !1, this.doNotThrowIfSetupNotFinished = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mc, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerInfoRequest|1 bc_id 9|2 include_diff 8|3 do_not_throw_if_setup_not_finished 8|4 expected_scope #0",
            it.Y
        ];
    }
}
class dc extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dc, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerTimingsRequest|1 bc_id 9"
        ];
    }
}
class fc extends Kr {
    constructor(t){
        super(), this.timestampMs = 0, this.event = An.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fc, t, e);
    }
    static $() {
        return [
            "CloudAgentTimingEvent|1 timestamp_ms 1|2 event #0|3 turn_number 13?",
            An
        ];
    }
}
class pc extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pc, t, e);
    }
    static $() {
        return [
            "UsedEnvironmentBuildInfo|1 boot_info #0?",
            O
        ];
    }
}
class hc extends Kr {
    constructor(t){
        super(), this.startingCommit = "", this.baseBranch = "", this.status = Zr.UNSPECIFIED, this.unread = !1, this.environmentPorts = [], this.videoAnnotations = [], this.prs = [], this.vmProvisionedSkills = [], this.labels = [], this.startupWarnings = [], this.canvasStoreRoots = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hc, t, e);
    }
    static $() {
        return [
            "DetailedBackgroundComposer|1 composer #0|2 starting_commit 9|3 base_branch 9|4 prompt #1|5 status #2|6 diff_since_start #3|7 start_error #4|8 model_details #5|9 unread 8|10 summary 9?|11 environment_ports #6*|12 auto_create_pr 8?|13 open_as_cursor_github_app 8?|14 skip_reviewer_request 8?|15 local_state_branch 9?|16 permanent_error #4?|18 video_annotations #7*|19 auto_branch 8?|20 prs #8*|21 vm_provisioned_skills #9*|22 original_conversation_action #10?|23 repo_config #11?|24 environment_name 9?|25 use_private_worker 8?|26 labels #12*|27 used_environment_version #13?|28 requested_model #14?|29 cloud_subagent_parent #15?|30 startup_warnings #16*|31 used_environment_build #17?|34 use_experimental_model_opt_out 8?|36 canvas_store_roots #18*|37 full_details_version 9?",
            Xo,
            Tu,
            Zr,
            s.GitDiff,
            s.ErrorDetails,
            s.ModelDetails,
            lf,
            Jc,
            _c,
            Ac,
            ut.QFf,
            va,
            Xp,
            om,
            at.G4,
            Aa,
            Ff,
            pc,
            gc
        ];
    }
}
class gc extends Kr {
    constructor(t){
        super(), this.canvasesRoot = "", this.storeId = "", this.storeKind = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gc, t, e);
    }
    static $() {
        return [
            "CanvasStoreRoot|1 canvases_root 9|2 store_id 9|3 store_kind 9"
        ];
    }
}
class Ac extends Kr {
    constructor(t){
        super(), this.skillId = "", this.description = "", this.environments = [], this.disabledEnvironments = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ac).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ac).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ac).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ac, t, e);
    }
    static $() {
        return [
            "VmProvisionedSkill|1 skill_id 9|2 description 9|3 environments 9*|4 disabled_environments 9*|5 custom_mode #0?|6 display_name 9?|7 icon 9?|8 color 9?",
            ut.o7L
        ];
    }
}
class _c extends Kr {
    constructor(t){
        super(), this.branchName = "", this.baseBranch = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _c).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _c).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _c).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_c, t, e);
    }
    static $() {
        return [
            "BackgroundComposerPr|1 branch_name 9|2 base_branch 9|3 scm_repo_node_id 9?|4 pull_number 5?|5 pr_status #0?|6 pr_url 9?|7 scm_provider 9?|8 worker_bc_id 9?",
            cn
        ];
    }
}
class yc extends Kr {
    constructor(t){
        super(), this.minutes = 0, this.seconds = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yc, t, e);
    }
    static $() {
        return [
            "VideoTimestamp|1 minutes 5|2 seconds 1"
        ];
    }
}
class wc extends Kr {
    constructor(t){
        super(), this.label = "", this.shouldHide = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wc, t, e);
    }
    static $() {
        return [
            "VideoChapter|1 start_time #0|3 label 9|4 should_hide 8",
            yc
        ];
    }
}
class Sc extends Kr {
    constructor(t){
        super(), this.labeledChapters = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sc, t, e);
    }
    static $() {
        return [
            "VideoAnnotation|1 labeled_chapters #0*|2 thumbnail_timestamp #1|3 trim_start_seconds 1?|4 trim_end_seconds 1?",
            wc,
            yc
        ];
    }
}
class Jc extends Kr {
    constructor(t){
        super(), this.artifactPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jc, t, e);
    }
    static $() {
        return [
            "VideoAnnotationEntry|1 artifact_path 9|2 annotation #0",
            Sc
        ];
    }
}
class Bc extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bc, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerInfoResponse|1 composer #0",
            hc
        ];
    }
}
class Ec extends Kr {
    constructor(t){
        super(), this.events = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ec).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ec).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ec).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ec, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerTimingsResponse|1 events #0*",
            fc
        ];
    }
}
class Ic extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ic).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ic).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ic).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ic, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerRepositoryInfoRequest|1 bc_id 9"
        ];
    }
}
class Cc extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cc, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerRepositoryInfoResponse|1 repository_info #0|2 path_encryption_key 9?|3 query_only_repo_access #1",
            Sr.bn,
            Sr.bq
        ];
    }
}
class bc extends Kr {
    constructor(t){
        super(), this.bcId = "", this.mintDesktopTicket = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bc, t, e);
    }
    static $() {
        return [
            "GetMachineRequest|1 bc_id 9|2 mint_desktop_ticket 8"
        ];
    }
}
class kc extends Kr {
    constructor(t){
        super(), this.podId = "", this.tenantId = "", this.networkToken = "", this.cluster = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kc, t, e);
    }
    static $() {
        return [
            "PodReference|1 pod_id 9|2 tenant_id 9|3 network_token 9|4 cluster 9|5 exec_daemon_auth_token 9?|6 pty_auth_token 9?"
        ];
    }
}
class vc extends Kr {
    constructor(t){
        super(), this.workerId = "", this.workspaceRootPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vc, t, e);
    }
    static $() {
        return [
            "WorkerReference|1 worker_id 9|2 workspace_root_path 9|3 desktop #0?|4 cursor_server #1?",
            Rc,
            qc
        ];
    }
}
class qc extends Kr {
    constructor(t){
        super(), this.available = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qc, t, e);
    }
    static $() {
        return [
            "WorkerCursorServerCapability|1 available 8|2 unavailable_reason 9?"
        ];
    }
}
class Rc extends Kr {
    constructor(t){
        super(), this.available = !1, this.controlAllowed = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rc, t, e);
    }
    static $() {
        return [
            "WorkerDesktopCapability|1 available 8|2 ws_url 9?|3 session_id 9?|4 session_secret 9?|5 protocol 9?|6 display_kind 9?|7 auth_scheme 9?|8 control_allowed 8|9 unavailable_reason 9?"
        ];
    }
}
class Pc extends Kr {
    constructor(t){
        super(), this.reference = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pc, t, e);
    }
    static $() {
        return [
            "MachineReference|1 pod #0 reference|2 worker #1 reference",
            kc,
            vc
        ];
    }
}
class Tc extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tc, t, e);
    }
    static $() {
        return [
            "GetMachineResponse|1 machine #0",
            Pc
        ];
    }
}
class xc extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xc, t, e);
    }
    static $() {
        return [
            "ListWorkspaceFilesRequest|1 bc_id 9"
        ];
    }
}
class Nc extends Kr {
    constructor(t){
        super(), this.relativePaths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nc, t, e);
    }
    static $() {
        return [
            "ListWorkspaceFilesResponse|1 relative_paths 9*"
        ];
    }
}
class Dc extends Kr {
    constructor(t){
        super(), this.bcId = "", this.cursor = "", this.omitHistory = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dc, t, e);
    }
    static $() {
        return [
            "GetMachineResourceUsageRequest|1 bc_id 9|2 cursor 9|3 omit_history 8"
        ];
    }
}
class Uc extends Kr {
    constructor(t){
        super(), this.bcId = "", this.action = _n.UNSPECIFIED, this.surfaceId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Uc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Uc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Uc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Uc, t, e);
    }
    static $() {
        return [
            "BackgroundComposerDesktopLeaseRequest|1 bc_id 9|2 action #0|3 surface_id 9",
            _n
        ];
    }
}
class Qc extends Kr {
    constructor(t){
        super(), this.held = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qc, t, e);
    }
    static $() {
        return [
            "BackgroundComposerDesktopLeaseResponse|1 held 8"
        ];
    }
}
class Mc extends Kr {
    constructor(t){
        super(), this.mandatoryRepoUrls = [], this.optionalRepoUrls = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mc, t, e);
    }
    static $() {
        return [
            "GetGithubAccessTokenForReposRequest|1 mandatory_repo_urls 9*|2 optional_repo_urls 9*|3 skip_cache 8?"
        ];
    }
}
class Oc extends Kr {
    constructor(t){
        super(), this.repoUrlStatuses = [], this.errorType = yn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Oc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Oc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Oc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Oc, t, e);
    }
    static $() {
        return [
            "GetGithubAccessTokenForReposResponse|1 has_access 8?|2 error 9?|3 repo_url_statuses #0*|4 error_type #1|5 github_redirect_url 9?",
            Fc,
            yn
        ];
    }
}
class Fc extends Kr {
    constructor(t){
        super(), this.repoUrl = "", this.hasAccess = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fc, t, e);
    }
    static $() {
        return [
            "GetGithubAccessTokenForReposResponse.Status|1 repo_url 9|2 has_access 8|3 error 9?"
        ];
    }
}
class Lc extends Kr {
    constructor(t){
        super(), this.method = "", this.path = "", this.githubUserToken = "", this.caller = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lc, t, e);
    }
    static $() {
        return [
            "MakeGithubRequestRequest|1 method 9|2 path 9|3 body_json 9?|4 github_user_token 9|5 caller 9|6 host 9?|7 path_template 9?|8 accept_header 9?"
        ];
    }
}
class $c extends Kr {
    constructor(t){
        super(), this.status = 0, this.statusText = "", this.headers = {}, this.body = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $c).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $c).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $c).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($c, t, e);
    }
    static $() {
        return [
            "MakeGithubRequestResponse|1 status 5|4 status_text 9|2 headers 9,9|3 body 9"
        ];
    }
}
class Gc extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gc, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerConversationRequest|1 bc_id 9|2 exchange_only 8?"
        ];
    }
}
class Hc extends Kr {
    constructor(t){
        super(), this.conversation = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hc, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerConversationResponse|1 conversation #0*",
            ct.hS
        ];
    }
}
class Kc extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kc, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerPullRequestRequest|1 bc_id 9"
        ];
    }
}
class Vc extends Kr {
    constructor(t){
        super(), this.prUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vc, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerPullRequestResponse|1 pr_url 9"
        ];
    }
}
class zc extends Kr {
    constructor(t){
        super(), this.bcId = "", this.commitMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zc, t, e);
    }
    static $() {
        return [
            "CommitBackgroundComposerRequest|1 bc_id 9|2 commit_message 9"
        ];
    }
}
class Wc extends Kr {
    constructor(t){
        super(), this.commitHash = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wc, t, e);
    }
    static $() {
        return [
            "CommitBackgroundComposerResponse|1 commit_hash 9"
        ];
    }
}
class Yc extends Kr {
    constructor(t){
        super(), this.outcome = jc.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yc, t, e);
    }
    static $() {
        return [
            "LiveEgressReapplyResult|1 outcome #0",
            jc
        ];
    }
}
var jc = (0, o.QT)(n.proto3, Hr, "LiveEgressReapplyResult.Outcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "APPLIED"
    ],
    [
        2,
        "NOT_APPLICABLE"
    ],
    [
        3,
        "STORED_NOT_APPLIED"
    ],
    [
        4,
        "FAILED"
    ]
], 1);
class Xc extends Kr {
    constructor(t){
        super(), this.environmentJson = "", this.repoUrl = "", this.writeSource = wn.UNSPECIFIED, this.createOnly = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xc, t, e);
    }
    static $() {
        return [
            "SetPersonalEnvironmentJsonRequest|1 environment_json 9|2 repo_url 9|3 write_source #0|4 source_bc_id 9?|5 environment_name 9?|6 repo_config #1?|7 environment_id 3?|8 environment_public_id 9?|9 create_only 8",
            wn,
            va
        ];
    }
}
class Zc extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zc, t, e);
    }
    static $() {
        return [
            "SetPersonalEnvironmentJsonResponse|1 environment #0?|2 live_egress_reapply #1?|3 created 8?",
            Al,
            Yc
        ];
    }
}
class tl extends Kr {
    constructor(t){
        super(), this.repoUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tl, t, e);
    }
    static $() {
        return [
            "GetPersonalEnvironmentJsonRequest|1 repo_url 9"
        ];
    }
}
class el extends Kr {
    constructor(t){
        super(), this.environmentJson = "", this.repoUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new el).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new el).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new el).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(el, t, e);
    }
    static $() {
        return [
            "GetPersonalEnvironmentJsonResponse|1 environment_json 9|2 repo_url 9"
        ];
    }
}
class rl extends Kr {
    constructor(t){
        super(), this.repoUrl = "", this.ref = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rl, t, e);
    }
    static $() {
        return [
            "GetEnvironmentJsonCandidatesRequest|1 repo_url 9|2 ref 9"
        ];
    }
}
class nl extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nl, t, e);
    }
    static $() {
        return [
            "GetEnvironmentJsonCandidatesResponse|1 repo_environment_json 9?|2 personal_environment_json 9?|3 team_environment_json 9?"
        ];
    }
}
class sl extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sl, t, e);
    }
    static $() {
        return [
            "ListPersonalEnvironmentsRequest|1 limit 5?"
        ];
    }
}
class il extends Kr {
    constructor(t){
        super(), this.repoUrl = "", this.environmentJson = "", this.createdAtMs = n.protoInt64.zero, this.updatedAtMs = n.protoInt64.zero, this.id = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new il).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new il).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new il).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(il, t, e);
    }
    static $() {
        return [
            "PersonalEnvironment|1 repo_url 9|2 environment_json 9|3 created_at_ms 3|4 updated_at_ms 3|5 id 3|6 environment_public_id 9?"
        ];
    }
}
class ol extends Kr {
    constructor(t){
        super(), this.environments = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ol).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ol).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ol).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ol, t, e);
    }
    static $() {
        return [
            "ListPersonalEnvironmentsResponse|1 environments #0*",
            il
        ];
    }
}
class al extends Kr {
    constructor(t){
        super(), this.id = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new al).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new al).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new al).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(al, t, e);
    }
    static $() {
        return [
            "DeletePersonalEnvironmentJsonRequest|1 id 3|2 environment_public_id 9?|3 write_source #0?",
            wn
        ];
    }
}
class ul extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ul).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ul).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ul).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ul, t, e);
    }
    static $() {
        return [
            "DeletePersonalEnvironmentJsonResponse"
        ];
    }
}
class cl extends Kr {
    constructor(t){
        super(), this.id = n.protoInt64.zero, this.environmentType = Sn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cl, t, e);
    }
    static $() {
        return [
            "PublishEnvironmentRequest|1 id 3|2 environment_type #0",
            Sn
        ];
    }
}
class ll extends Kr {
    constructor(t){
        super(), this.success = !1, this.prUrl = "", this.branchName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ll).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ll).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ll).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ll, t, e);
    }
    static $() {
        return [
            "PublishEnvironmentResponse|1 success 8|2 pr_url 9|3 branch_name 9|4 error 9?"
        ];
    }
}
class ml extends Kr {
    constructor(t){
        super(), this.id = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ml).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ml).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ml).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ml, t, e);
    }
    static $() {
        return [
            "PublishPersonalEnvironmentRequest|1 id 3"
        ];
    }
}
class dl extends Kr {
    constructor(t){
        super(), this.success = !1, this.prUrl = "", this.branchName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dl, t, e);
    }
    static $() {
        return [
            "PublishPersonalEnvironmentResponse|1 success 8|2 pr_url 9|3 branch_name 9|4 error 9?"
        ];
    }
}
class fl extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fl, t, e);
    }
    static $() {
        return [
            "ListTeamEnvironmentsRequest|1 limit 5?|2 existence_only 8?"
        ];
    }
}
class pl extends Kr {
    constructor(t){
        super(), this.id = n.protoInt64.zero, this.teamId = 0, this.repoUrl = "", this.environmentJson = "", this.createdByUserId = 0, this.createdAtMs = n.protoInt64.zero, this.updatedAtMs = n.protoInt64.zero, this.scmRepoNodeId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pl, t, e);
    }
    static $() {
        return [
            "TeamEnvironment|1 id 3|2 team_id 5|3 repo_url 9|4 environment_json 9|5 created_by_user_id 5|6 created_at_ms 3|7 updated_at_ms 3|8 scm_repo_node_id 9|9 git_enterprise_uuid 9?|10 environment_public_id 9?"
        ];
    }
}
class hl extends Kr {
    constructor(t){
        super(), this.environments = [], this.hasEnvironmentsHiddenByRepoAccess = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hl, t, e);
    }
    static $() {
        return [
            "ListTeamEnvironmentsResponse|1 environments #0*|2 has_environments_hidden_by_repo_access 8|3 has_any_team_environment 8?",
            pl
        ];
    }
}
class gl extends Kr {
    constructor(t){
        super(), this.repositoryScopeRepoUrls = [], this.filterRepoUrls = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gl, t, e);
    }
    static $() {
        return [
            "ListEnvironmentsRequest|1 limit 5?|6 page_token 9?|7 search_query 9?|2 include_environment_json 8?|3 repository_scope_repo_urls 9*|4 include_repository_scope_environments 8?|5 include_environments_without_repo_access 8?|9 filter_repo_urls 9*"
        ];
    }
}
class Al extends Kr {
    constructor(t){
        super(), this.id = n.protoInt64.zero, this.publicId = "", this.name = "", this.scope = Jn.UNSPECIFIED, this.createdAtMs = n.protoInt64.zero, this.updatedAtMs = n.protoInt64.zero, this.ineligibleRepoUrls = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Al).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Al).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Al).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Al, t, e);
    }
    static $() {
        return [
            "LogicalEnvironment|1 id 3|2 public_id 9|3 name 9|4 scope #0|5 owning_team 5?|6 owning_user 5?|7 repo_config #1?|8 created_at_ms 3|9 updated_at_ms 3|10 environment_json 9?|11 latest_environment_version_public_id 9?|12 ineligibility_reason #2?|13 ineligible_repo_urls 9*",
            Jn,
            va,
            Bn
        ];
    }
}
class _l extends Kr {
    constructor(t){
        super(), this.environments = [], this.hasMore = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _l).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _l).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _l).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_l, t, e);
    }
    static $() {
        return [
            "ListEnvironmentsResponse|1 environments #0*|2 dashboard_scope_id 9?|3 has_more 8|4 next_page_token 9?",
            Al
        ];
    }
}
class yl extends Kr {
    constructor(t){
        super(), this.publicId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yl, t, e);
    }
    static $() {
        return [
            "GetEnvironmentRequest|1 public_id 9|2 include_environment_json 8?"
        ];
    }
}
class wl extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wl, t, e);
    }
    static $() {
        return [
            "GetEnvironmentResponse|1 environment #0?",
            Al
        ];
    }
}
class Sl extends Kr {
    constructor(t){
        super(), this.publicId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sl, t, e);
    }
    static $() {
        return [
            "RenameEnvironmentRequest|1 public_id 9|2 name 9?|3 write_source #0?",
            wn
        ];
    }
}
class Jl extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jl, t, e);
    }
    static $() {
        return [
            "RenameEnvironmentResponse"
        ];
    }
}
class Bl extends Kr {
    constructor(t){
        super(), this.publicId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bl, t, e);
    }
    static $() {
        return [
            "MigrateEnvironmentToOriginRequest|1 public_id 9"
        ];
    }
}
class El extends Kr {
    constructor(t){
        super(), this.newEnvironmentPublicId = "", this.repoUrls = [], this.copiedSecretCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new El).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new El).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new El).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(El, t, e);
    }
    static $() {
        return [
            "MigrateEnvironmentToOriginResponse|1 new_environment_public_id 9|2 repo_urls 9*|3 copied_secret_count 5"
        ];
    }
}
class Il extends Kr {
    constructor(t){
        super(), this.publicId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Il).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Il).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Il).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Il, t, e);
    }
    static $() {
        return [
            "DuplicateEnvironmentRequest|1 public_id 9|2 name 9?"
        ];
    }
}
class Cl extends Kr {
    constructor(t){
        super(), this.newEnvironmentPublicId = "", this.name = "", this.copiedSecretCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cl, t, e);
    }
    static $() {
        return [
            "DuplicateEnvironmentResponse|1 new_environment_public_id 9|2 name 9|3 copied_secret_count 5"
        ];
    }
}
class bl extends Kr {
    constructor(t){
        super(), this.repoUrl = "", this.workspaceRootPath = "", this.commitHashHex = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bl, t, e);
    }
    static $() {
        return [
            "EnvironmentBuildRepoCommit|1 repo_url 9|2 workspace_root_path 9|3 commit_hash_hex 9"
        ];
    }
}
class kl extends Kr {
    constructor(t){
        super(), this.buildId = "", this.environmentPublicId = "", this.status = En.UNSPECIFIED, this.triggerType = In.UNSPECIFIED, this.source = Cn.UNSPECIFIED, this.createdAtMs = n.protoInt64.zero, this.updatedAtMs = n.protoInt64.zero, this.isDraft = !1, this.hasRefOverrides = !1, this.requestedRefs = [], this.repoCommits = [], this.willAdoptEnvironmentSettingsOnActivate = !1, this.snapshotReapState = kn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kl, t, e);
    }
    static $() {
        return [
            "EnvironmentBuildRow|1 build_id 9|2 environment_public_id 9|3 status #0|4 trigger_type #1|5 source #2|6 failure_type #3?|7 environment_version_id 3?|8 user_facing_snapshot_id 9?|9 created_at_ms 3|10 updated_at_ms 3|11 completed_at_ms 3?|12 is_draft 8|13 has_ref_overrides 8|14 requested_refs #4*|15 repo_commits #5*|16 created_by_display 9?|17 will_adopt_environment_settings_on_activate 8|18 source_bc_id 9?|19 failure_code 9?|20 snapshot_reap_state #6",
            En,
            In,
            Cn,
            bn,
            qa,
            bl,
            kn
        ];
    }
}
class vl extends Kr {
    constructor(t){
        super(), this.createdAtMs = n.protoInt64.zero, this.buildId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vl, t, e);
    }
    static $() {
        return [
            "EnvironmentBuildsCursor|1 created_at_ms 3|2 build_id 9"
        ];
    }
}
class ql extends Kr {
    constructor(t){
        super(), this.environmentPublicId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ql).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ql).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ql).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ql, t, e);
    }
    static $() {
        return [
            "ListEnvironmentBuildsRequest|1 environment_public_id 9|2 cursor #0?",
            vl
        ];
    }
}
class Rl extends Kr {
    constructor(t){
        super(), this.rows = [], this.hasMore = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rl, t, e);
    }
    static $() {
        return [
            "ListEnvironmentBuildsResponse|1 rows #0*|2 has_more 8|3 next_cursor #1?|4 latest_boot_build_id 9?",
            kl,
            vl
        ];
    }
}
class Pl extends Kr {
    constructor(t){
        super(), this.environmentPublicId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pl, t, e);
    }
    static $() {
        return [
            "GetEnvironmentActiveBuildRequest|1 environment_public_id 9"
        ];
    }
}
class Tl extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tl, t, e);
    }
    static $() {
        return [
            "GetEnvironmentActiveBuildResponse|1 row #0?",
            kl
        ];
    }
}
class xl extends Kr {
    constructor(t){
        super(), this.environmentPublicId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xl, t, e);
    }
    static $() {
        return [
            "GetEnvironmentPersistentRecurringBuildFailuresRequest|1 environment_public_id 9"
        ];
    }
}
class Nl extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nl, t, e);
    }
    static $() {
        return [
            "GetEnvironmentPersistentRecurringBuildFailuresResponse|1 failure #0?",
            Dl
        ];
    }
}
class Dl extends Kr {
    constructor(t){
        super(), this.consecutiveFailedCount = 0, this.firstFailedAtMs = n.protoInt64.zero, this.lastFailedAtMs = n.protoInt64.zero, this.latestFailedBuildId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dl, t, e);
    }
    static $() {
        return [
            "PersistentRecurringBuildFailure|1 consecutive_failed_count 13|2 first_failed_at_ms 3|3 last_failed_at_ms 3|4 latest_failed_build_id 9"
        ];
    }
}
class Ul extends Kr {
    constructor(t){
        super(), this.buildId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ul).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ul).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ul).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ul, t, e);
    }
    static $() {
        return [
            "GetEnvironmentBuildRequest|1 build_id 9"
        ];
    }
}
class Ql extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ql).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ql).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ql).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ql, t, e);
    }
    static $() {
        return [
            "GetEnvironmentBuildResponse|1 row #0",
            kl
        ];
    }
}
class Ml extends Kr {
    constructor(t){
        super(), this.buildId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ml).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ml).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ml).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ml, t, e);
    }
    static $() {
        return [
            "GetEnvironmentBuildConfigRequest|1 build_id 9"
        ];
    }
}
class Ol extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ol).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ol).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ol).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ol, t, e);
    }
    static $() {
        return [
            "GetEnvironmentBuildConfigResponse|1 environment_version #0?",
            om
        ];
    }
}
class Fl extends Kr {
    constructor(t){
        super(), this.buildId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fl, t, e);
    }
    static $() {
        return [
            "UpdateEnvironmentBuildRequest|1 build_id 9|2 is_draft 8?"
        ];
    }
}
class Ll extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ll).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ll).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ll).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ll, t, e);
    }
    static $() {
        return [
            "UpdateEnvironmentBuildResponse|1 row #0",
            kl
        ];
    }
}
class $l extends Kr {
    constructor(t){
        super(), this.environmentPublicId = "", this.refs = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $l).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $l).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $l).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($l, t, e);
    }
    static $() {
        return [
            "TriggerEnvironmentBuildRequest|1 environment_public_id 9|2 is_draft 8?|3 refs #0*",
            qa
        ];
    }
}
class Gl extends Kr {
    constructor(t){
        super(), this.buildId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gl, t, e);
    }
    static $() {
        return [
            "TriggerEnvironmentBuildResponse|1 build_id 9|2 row #0",
            kl
        ];
    }
}
class Hl extends Kr {
    constructor(t){
        super(), this.buildId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hl, t, e);
    }
    static $() {
        return [
            "AttachEnvironmentBuildLogRequest|1 build_id 9|2 cursor 9?"
        ];
    }
}
class Kl extends Kr {
    constructor(t){
        super(), this.text = "", this.nextCursor = "", this.status = En.UNSPECIFIED, this.logComplete = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kl, t, e);
    }
    static $() {
        return [
            "AttachEnvironmentBuildLogResponse|1 text 9|2 next_cursor 9|3 status #0|4 log_complete 8",
            En
        ];
    }
}
class Vl extends Kr {
    constructor(t){
        super(), this.buildId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vl, t, e);
    }
    static $() {
        return [
            "CancelEnvironmentBuildRequest|1 build_id 9"
        ];
    }
}
class zl extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zl, t, e);
    }
    static $() {
        return [
            "CancelEnvironmentBuildResponse|1 row #0",
            kl
        ];
    }
}
class Wl extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wl, t, e);
    }
    static $() {
        return [
            "EnvironmentBuildSettings|1 fast_forward_default_branch 8?|3 auto_fast_forward_staleness_hours 5?|2 builds_enabled 8?"
        ];
    }
}
class Yl extends Kr {
    constructor(t){
        super(), this.environmentPublicId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yl, t, e);
    }
    static $() {
        return [
            "GetEnvironmentBuildSettingsRequest|1 environment_public_id 9"
        ];
    }
}
class jl extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jl, t, e);
    }
    static $() {
        return [
            "GetEnvironmentBuildSettingsResponse|1 settings #0",
            Wl
        ];
    }
}
class Xl extends Kr {
    constructor(t){
        super(), this.environmentPublicId = "", this.clearFastForwardDefaultBranch = !1, this.clearBuildsEnabled = !1, this.clearAutoFastForwardStalenessHours = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xl, t, e);
    }
    static $() {
        return [
            "UpdateEnvironmentBuildSettingsRequest|1 environment_public_id 9|2 fast_forward_default_branch 8?|3 clear_fast_forward_default_branch 8|4 builds_enabled 8?|5 clear_builds_enabled 8|6 auto_fast_forward_staleness_hours 5?|7 clear_auto_fast_forward_staleness_hours 8"
        ];
    }
}
class Zl extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zl, t, e);
    }
    static $() {
        return [
            "UpdateEnvironmentBuildSettingsResponse|1 settings #0",
            Wl
        ];
    }
}
class tm extends Kr {
    constructor(t){
        super(), this.ownerId = {
            case: void 0
        }, this.writeSource = wn.UNSPECIFIED, this.reusePolicy = vn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tm, t, e);
    }
    static $() {
        return [
            "ResolveOrCreateMultiRepoEnvironmentRequest|1 user_id 5 owner_id|2 team_id 5 owner_id|3 service_account_id 9 owner_id|4 repo_config #0|5 write_source #1|6 reuse_policy #2",
            va,
            wn,
            vn
        ];
    }
}
class em extends Kr {
    constructor(t){
        super(), this.created = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new em).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new em).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new em).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(em, t, e);
    }
    static $() {
        return [
            "ResolveOrCreateMultiRepoEnvironmentResponse|1 environment #0|2 created 8",
            Al
        ];
    }
}
class rm extends Kr {
    constructor(t){
        super(), this.bcId = "", this.targetScope = Jn.UNSPECIFIED, this.repoUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rm, t, e);
    }
    static $() {
        return [
            "ResolveOrCreateDraftEnvironmentRequest|1 bc_id 9|2 target_scope #0|3 repo_url 9|4 repo_config #1?",
            Jn,
            va
        ];
    }
}
class nm extends Kr {
    constructor(t){
        super(), this.created = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nm, t, e);
    }
    static $() {
        return [
            "ResolveOrCreateDraftEnvironmentResponse|1 environment #0|2 created 8",
            Al
        ];
    }
}
class sm extends Kr {
    constructor(t){
        super(), this.repoUrls = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sm, t, e);
    }
    static $() {
        return [
            "RepoConfigSummary|1 repo_urls 9*|2 environment_json_path 9?"
        ];
    }
}
class im extends Kr {
    constructor(t){
        super(), this.restoredFromEnvironmentVersionPublicId = "", this.restoredFromSourceKind = qn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new im).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new im).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new im).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(im, t, e);
    }
    static $() {
        return [
            "EnvironmentVersionRestoreMetadata|1 restored_from_environment_version_public_id 9|2 restored_from_source_kind #0|3 restored_from_environment_public_id 9?|4 restored_from_environment_name 9?|5 restored_from_snapshot_id 9?",
            qn
        ];
    }
}
class om extends Kr {
    constructor(t){
        super(), this.publicId = "", this.sourceKind = qn.UNSPECIFIED, this.createdAtMs = n.protoInt64.zero, this.environmentJsonEffectivelyEmpty = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new om).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new om).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new om).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(om, t, e);
    }
    static $() {
        return [
            "EnvironmentVersionSummary|1 public_id 9|2 source_kind #0|3 commit_hash 9?|4 environment_public_id 9?|5 repo_config #1?|6 created_at_ms 3|7 environment_json 9?|8 environment_name 9?|9 snapshot_id 9?|10 recorded_via 9?|11 update_script 9?|12 environment_json_effectively_empty 8|13 environment_json_restricted 8?",
            qn,
            sm
        ];
    }
}
class am extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new am).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new am).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new am).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(am, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerEnvironmentVersionRequest|1 bc_id 9"
        ];
    }
}
class um extends Kr {
    constructor(t){
        super(), this.environmentVersionHistory = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new um).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new um).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new um).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(um, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerEnvironmentVersionResponse|1 environment_version_history #0*",
            om
        ];
    }
}
class cm extends Kr {
    constructor(t){
        super(), this.bcId = "", this.createdAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cm, t, e);
    }
    static $() {
        return [
            "EnvironmentSetupRunLink|1 bc_id 9|2 status 9?|3 created_at_ms 3|4 snapshot_id 9?"
        ];
    }
}
class lm extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lm, t, e);
    }
    static $() {
        return [
            "EnvironmentHistoryVersion|1 version #0|2 setup_run #1?",
            om,
            cm
        ];
    }
}
class mm extends Kr {
    constructor(t){
        super(), this.publicId = "", this.eventKind = Rn.UNSPECIFIED, this.sourceKind = qn.UNSPECIFIED, this.recordedVia = "", this.createdAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mm, t, e);
    }
    static $() {
        return [
            "EnvironmentHistoryLifecycleEvent|1 public_id 9|2 event_kind #0|3 source_kind #1|4 recorded_via 9|5 created_at_ms 3|6 version #2?|7 setup_run #3?|8 restore_metadata #4?",
            Rn,
            qn,
            om,
            cm,
            im
        ];
    }
}
class dm extends Kr {
    constructor(t){
        super(), this.versions = [], this.lifecycleEvents = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dm, t, e);
    }
    static $() {
        return [
            "EnvironmentHistoryObject|1 environment #0|2 versions #1*|3 lifecycle_events #2*",
            Al,
            lm,
            mm
        ];
    }
}
class fm extends Kr {
    constructor(t){
        super(), this.id = "", this.createdAtMs = n.protoInt64.zero, this.scope = Jn.UNSPECIFIED, this.eventKind = Rn.UNSPECIFIED, this.title = "", this.description = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fm, t, e);
    }
    static $() {
        return [
            "EnvironmentEffectiveHistoryEvent|1 id 9|2 created_at_ms 3|3 scope #0|4 event_kind #1|5 title 9|6 description 9|7 version #2?|8 fallback_version #2?|9 setup_run #3?|10 environment_public_id 9?|11 environment_name 9?|12 restore_metadata #4?|13 recorded_via 9?",
            Jn,
            Rn,
            om,
            cm,
            im
        ];
    }
}
class pm extends Kr {
    constructor(t){
        super(), this.environmentPublicIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pm, t, e);
    }
    static $() {
        return [
            "GetEnvironmentHistoryRequest|1 repo_config #0?|2 environment_public_ids 9*|3 limit 5?|4 dashboard_scope_id 9?",
            va
        ];
    }
}
class hm extends Kr {
    constructor(t){
        super(), this.effectiveEvents = [], this.environmentHistories = [], this.truncated = !1, this.dashboardScopeUnavailable = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hm, t, e);
    }
    static $() {
        return [
            "GetEnvironmentHistoryResponse|1 effective_events #0*|2 environment_histories #1*|3 truncated 8|4 dashboard_scope_unavailable 8",
            fm,
            dm
        ];
    }
}
class gm extends Kr {
    constructor(t){
        super(), this.id = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gm, t, e);
    }
    static $() {
        return [
            "DeleteTeamEnvironmentRequest|1 id 3|2 environment_public_id 9?|3 write_source #0?",
            wn
        ];
    }
}
class Am extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Am).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Am).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Am).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Am, t, e);
    }
    static $() {
        return [
            "DeleteTeamEnvironmentResponse"
        ];
    }
}
class _m extends Kr {
    constructor(t){
        super(), this.environmentVersionPublicId = "", this.targetScope = Jn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _m).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _m).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _m).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_m, t, e);
    }
    static $() {
        return [
            "RestoreEnvironmentVersionRequest|1 environment_version_public_id 9|2 target_scope #0|3 target_environment_public_id 9?|4 delete_personal_environment_public_id 9?",
            Jn
        ];
    }
}
class ym extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ym).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ym).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ym).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ym, t, e);
    }
    static $() {
        return [
            "RestoreEnvironmentVersionResponse|1 environment #0?",
            Al
        ];
    }
}
class wm extends Kr {
    constructor(t){
        super(), this.environmentJson = "", this.repoUrl = "", this.scmRepoNodeId = "", this.deletePersonalEnvironment = !1, this.writeSource = wn.UNSPECIFIED, this.createOnly = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wm, t, e);
    }
    static $() {
        return [
            "SetTeamEnvironmentJsonRequest|1 environment_json 9|2 repo_url 9|3 scm_repo_node_id 9|4 git_enterprise_uuid 9?|5 delete_personal_environment 8|6 write_source #0|7 source_bc_id 9?|8 environment_name 9?|9 repo_config #1?|10 environment_id 3?|11 environment_public_id 9?|12 delete_personal_environment_public_id 9?|13 create_only 8",
            wn,
            va
        ];
    }
}
class Sm extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sm, t, e);
    }
    static $() {
        return [
            "SetTeamEnvironmentJsonResponse|1 environment #0?|2 live_egress_reapply #1?|3 created 8?",
            Al,
            Yc
        ];
    }
}
class Jm extends Kr {
    constructor(t){
        super(), this.target = Bm.UNSPECIFIED, this.bcId = "", this.repoUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jm, t, e);
    }
    static $() {
        return [
            "SnapshotAndSaveEnvironmentRequest|1 target #0|2 bc_id 9|3 repo_url 9|4 install_command 9?|5 existing_snapshot_id 9?|6 scm_repo_node_id 9?|7 git_enterprise_uuid 9?|8 environment_name 9?|9 repo_config #1?|10 environment_public_id 9?|11 egress_config #2?|12 start_command 9?|13 environment_build_id 9?",
            Bm,
            va,
            Em
        ];
    }
}
var Bm = (0, o.QT)(n.proto3, Hr, "SnapshotAndSaveEnvironmentRequest.Target", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PERSONAL"
    ],
    [
        2,
        "TEAM"
    ]
], 1);
class Em extends Kr {
    constructor(t){
        super(), this.mode = vr.Gyw.UNSPECIFIED, this.allowlist = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Em).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Em).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Em).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Em, t, e);
    }
    static $() {
        return [
            "SnapshotAndSaveEnvironmentRequest.EgressConfig|1 mode #0|2 allowlist 9*",
            vr.Gyw
        ];
    }
}
class Im extends Kr {
    constructor(t){
        super(), this.snapshotId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Im).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Im).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Im).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Im, t, e);
    }
    static $() {
        return [
            "SnapshotAndSaveEnvironmentResponse|1 snapshot_id 9"
        ];
    }
}
class Cm extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cm, t, e);
    }
    static $() {
        return [
            "ListReposWithLocalEnvironmentRequest"
        ];
    }
}
class bm extends Kr {
    constructor(t){
        super(), this.repoUrl = "", this.fileExists = !1, this.lastSeenAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bm, t, e);
    }
    static $() {
        return [
            "RepoWithLocalEnvironment|1 repo_url 9|2 file_exists 8|3 last_seen_at_ms 3"
        ];
    }
}
class km extends Kr {
    constructor(t){
        super(), this.repos = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new km).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new km).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new km).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(km, t, e);
    }
    static $() {
        return [
            "ListReposWithLocalEnvironmentResponse|1 repos #0*",
            bm
        ];
    }
}
class vm extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vm, t, e);
    }
    static $() {
        return [
            "MarkBackgroundComposerReadRequest|1 bc_id 9"
        ];
    }
}
class qm extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qm, t, e);
    }
    static $() {
        return [
            "MarkBackgroundComposerReadResponse"
        ];
    }
}
class Rm extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rm, t, e);
    }
    static $() {
        return [
            "MarkBackgroundComposerUnreadRequest|1 bc_id 9"
        ];
    }
}
class Pm extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pm, t, e);
    }
    static $() {
        return [
            "MarkBackgroundComposerUnreadResponse"
        ];
    }
}
class Tm extends Kr {
    constructor(t){
        super(), this.bcId = "", this.readUpToMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tm, t, e);
    }
    static $() {
        return [
            "AdvanceBackgroundComposerReadCursorRequest|1 bc_id 9|2 read_up_to_ms 3"
        ];
    }
}
class xm extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xm, t, e);
    }
    static $() {
        return [
            "AdvanceBackgroundComposerReadCursorResponse"
        ];
    }
}
class Nm extends Kr {
    constructor(t){
        super(), this.bcId = "", this.startIndex = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nm, t, e);
    }
    static $() {
        return [
            "FetchBackgroundComposerRequest|1 bc_id 9|2 start_index 5|3 limit 5?"
        ];
    }
}
class Dm extends Kr {
    constructor(t){
        super(), this.responses = [], this.totalResponses = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dm, t, e);
    }
    static $() {
        return [
            "FetchBackgroundComposerResponse|1 responses #0*|2 total_responses 5",
            Cu
        ];
    }
}
class Um extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Um).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Um).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Um).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Um, t, e);
    }
    static $() {
        return [
            "GetTurnSummaryBackgroundComposerRequest|1 bc_id 9|2 source_type #0?",
            en
        ];
    }
}
class Qm extends Kr {
    constructor(t){
        super(), this.summary = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qm, t, e);
    }
    static $() {
        return [
            "GetTurnSummaryBackgroundComposerResponse|1 summary 9"
        ];
    }
}
class Mm extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mm, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerNameRequest|1 bc_id 9"
        ];
    }
}
class Om extends Kr {
    constructor(t){
        super(), this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Om).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Om).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Om).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Om, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerNameResponse|1 name 9"
        ];
    }
}
class Fm extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fm, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerPromptRequest|1 bc_id 9"
        ];
    }
}
class Lm extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lm, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerPromptResponse|1 prompt #0",
            ct.hS
        ];
    }
}
class $m extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $m).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $m).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $m).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($m, t, e);
    }
    static $() {
        return [
            "ListBackgroundComposerArtifactsRequest|1 bc_id 9"
        ];
    }
}
class Gm extends Kr {
    constructor(t){
        super(), this.absolutePath = "", this.sizeBytes = n.protoInt64.zero, this.updatedAtUnixMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gm, t, e);
    }
    static $() {
        return [
            "BackgroundComposerArtifact|1 absolute_path 9|2 size_bytes 3|3 updated_at_unix_ms 3"
        ];
    }
}
class Hm extends Kr {
    constructor(t){
        super(), this.artifacts = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hm, t, e);
    }
    static $() {
        return [
            "ListBackgroundComposerArtifactsResponse|1 artifacts #0*",
            Gm
        ];
    }
}
class Km extends Kr {
    constructor(t){
        super(), this.bcId = "", this.absolutePath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Km).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Km).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Km).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Km, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerArtifactRequest|1 bc_id 9|2 absolute_path 9"
        ];
    }
}
class Vm extends Kr {
    constructor(t){
        super(), this.url = "", this.expiresAt = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vm, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerArtifactResponse|1 url 9|2 expires_at 9"
        ];
    }
}
class zm extends Kr {
    constructor(t){
        super(), this.bcId = "", this.absolutePath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zm, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerArtifactBytesRequest|1 bc_id 9|2 absolute_path 9"
        ];
    }
}
class Wm extends Kr {
    constructor(t){
        super(), this.content = new Uint8Array(0), this.contentType = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wm, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerArtifactBytesResponse|1 content 12|2 content_type 9"
        ];
    }
}
class Ym extends Kr {
    constructor(t){
        super(), this.bcId = "", this.path = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ym).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ym).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ym).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ym, t, e);
    }
    static $() {
        return [
            "ReadBinaryFileRequest|1 bc_id 9|2 path 9"
        ];
    }
}
class jm extends Kr {
    constructor(t){
        super(), this.content = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jm, t, e);
    }
    static $() {
        return [
            "ReadBinaryFileResponse|1 content 12"
        ];
    }
}
class Xm extends Kr {
    constructor(t){
        super(), this.bcId = "", this.absolutePath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xm, t, e);
    }
    static $() {
        return [
            "StreamBackgroundComposerArtifactRequest|1 bc_id 9|2 absolute_path 9"
        ];
    }
}
class Zm extends Kr {
    constructor(t){
        super(), this.contentChunk = new Uint8Array(0), this.contentType = "", this.totalSize = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zm, t, e);
    }
    static $() {
        return [
            "StreamBackgroundComposerArtifactResponse|1 content_chunk 12|2 content_type 9|3 total_size 3"
        ];
    }
}
class td extends Kr {
    constructor(t){
        super(), this.artifactId = "", this.sourceBcId = "", this.sourceAbsolutePath = "", this.publicUrl = "", this.title = "", this.contentType = "", this.shareSource = "", this.createdAtMs = n.protoInt64.zero, this.updatedAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new td).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new td).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new td).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(td, t, e);
    }
    static $() {
        return [
            "BackgroundComposerSharedArtifact|1 artifact_id 9|2 source_bc_id 9|3 source_absolute_path 9|4 public_url 9|5 title 9|6 content_type 9|7 share_source 9|8 revoked_at_ms 3?|9 created_at_ms 3|10 updated_at_ms 3"
        ];
    }
}
class ed extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ed).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ed).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ed).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ed, t, e);
    }
    static $() {
        return [
            "ListSharedBackgroundComposerArtifactsRequest|1 bc_id 9"
        ];
    }
}
class rd extends Kr {
    constructor(t){
        super(), this.artifacts = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rd, t, e);
    }
    static $() {
        return [
            "ListSharedBackgroundComposerArtifactsResponse|1 artifacts #0*",
            td
        ];
    }
}
class nd extends Kr {
    constructor(t){
        super(), this.bcId = "", this.absolutePath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nd, t, e);
    }
    static $() {
        return [
            "ShareBackgroundComposerArtifactRequest|1 bc_id 9|2 absolute_path 9|3 title 9?"
        ];
    }
}
class sd extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sd, t, e);
    }
    static $() {
        return [
            "ShareBackgroundComposerArtifactResponse|1 artifact #0",
            td
        ];
    }
}
class id extends Kr {
    constructor(t){
        super(), this.artifactId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new id).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new id).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new id).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(id, t, e);
    }
    static $() {
        return [
            "UnshareBackgroundComposerArtifactRequest|1 artifact_id 9"
        ];
    }
}
class od extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new od).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new od).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new od).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(od, t, e);
    }
    static $() {
        return [
            "UnshareBackgroundComposerArtifactResponse|1 artifact #0?",
            td
        ];
    }
}
class ad extends Kr {
    constructor(t){
        super(), this.artifactId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ad).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ad).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ad).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ad, t, e);
    }
    static $() {
        return [
            "GetPublicBackgroundComposerArtifactRequest|1 artifact_id 9"
        ];
    }
}
class ud extends Kr {
    constructor(t){
        super(), this.url = "", this.contentType = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ud).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ud).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ud).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ud, t, e);
    }
    static $() {
        return [
            "GetPublicBackgroundComposerArtifactResponse|1 url 9|2 content_type 9|3 title 9?"
        ];
    }
}
class cd extends Kr {
    constructor(t){
        super(), this.allowlist = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cd, t, e);
    }
    static $() {
        return [
            "BackgroundComposerUserEgressPolicy|1 allowlist 9*"
        ];
    }
}
class ld extends Kr {
    constructor(t){
        super(), this.id = "", this.label = "", this.templateId = "", this.subagentType = "", this.enabled = !1, this.order = 0, this.executionMode = Tn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ld).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ld).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ld).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ld, t, e);
    }
    static $() {
        return [
            "BackgroundComposerQuickActionSubagentSlot|1 id 9|2 label 9|3 template_id 9|4 subagent_type 9|5 enabled 8|6 order 5|7 execution_mode #0",
            Tn
        ];
    }
}
class md extends Kr {
    constructor(t){
        super(), this.templateId = "", this.label = "", this.description = "", this.subagentType = "", this.scope = xn.UNSPECIFIED, this.canEdit = !1, this.canDelete = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new md).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new md).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new md).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(md, t, e);
    }
    static $() {
        return [
            "BackgroundComposerQuickActionSubagentTemplate|1 template_id 9|2 label 9|3 description 9|4 subagent_type 9|5 prompt 9?|6 scope #0|7 can_edit 8|8 can_delete 8|9 icon_name 9?",
            xn
        ];
    }
}
class dd extends Kr {
    constructor(t){
        super(), this.operation = Nn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dd, t, e);
    }
    static $() {
        return [
            "BackgroundComposerQuickActionSubagentTemplateMutation|1 operation #0|2 template #1",
            Nn,
            md
        ];
    }
}
class fd extends Kr {
    constructor(t){
        super(), this.quickActionSubagentSlots = [], this.quickActionSubagentSlotsExplicitlySet = !1, this.quickActionSubagentTemplates = [], this.quickActionSubagentTemplateMutations = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fd, t, e);
    }
    static $() {
        return [
            "BackgroundComposerQuickActionSettings|1 quick_action_subagent_slots #0*|2 quick_action_subagent_slots_explicitly_set 8|3 quick_action_subagent_catalog_version 13?|4 quick_action_subagent_templates #1*|5 quick_action_subagent_template_mutations #2*",
            ld,
            md,
            dd
        ];
    }
}
class pd extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pd, t, e);
    }
    static $() {
        return [
            "BackgroundComposerDefaultEnvironmentSetting|1 repo_config #0?|2 environment_public_id 9?",
            va
        ];
    }
}
class hd extends Kr {
    constructor(t){
        super(), this.defaultEnvironmentSettings = [], this.sidebarNamedAgentIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hd, t, e);
    }
    static $() {
        return [
            "UpdateBackgroundComposerUserSettingsRequest|1 model_name 9?|2 slack_notifications_for_web_enabled 8?|3 ci_failure_followup_enabled 8?|4 browser_use_enabled 8?|5 auto_create_pr_setting #0?|6 pr_review_open_destination #1?|7 github_artifact_posting #2?|8 egress_protection_mode #3?|9 egress_policy #4?|10 branch_prefix 9?|11 quick_action_settings #5?|12 allow_private_workers 8?|13 bc_id 9?|14 default_environment_public_id 9?|15 default_environment_settings #6*|16 remote_control_enabled 8?|17 pr_review_open_surface #7?|18 sidebar_named_agent_ids 9*|19 sidebar_named_agent_ids_explicitly_set 8?|20 default_model_selection #8?|21 ask_question_auto_answer_timeout_minutes 5?|22 expected_scope #9",
            Pn,
            vr.GRL,
            vr.XnR,
            vr.Gyw,
            cd,
            fd,
            pd,
            vr.B2c,
            s.CloudAgentModelSelection,
            it.Y
        ];
    }
}
class gd extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gd, t, e);
    }
    static $() {
        return [
            "UpdateBackgroundComposerUserSettingsResponse"
        ];
    }
}
class Ad extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ad).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ad).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ad).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ad, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerUserSettingsRequest|1 expected_scope #0",
            it.Y
        ];
    }
}
class _d extends Kr {
    constructor(t){
        super(), this.defaultEnvironmentSettings = [], this.sidebarNamedAgentIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _d).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _d).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _d).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_d, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerUserSettingsResponse|1 model_name 9?|2 slack_notifications_for_web_enabled 8?|3 ci_failure_followup_enabled 8?|4 browser_use_enabled 8?|5 auto_create_pr_setting #0?|6 pr_review_open_destination #1?|7 github_artifact_posting #2?|8 egress_protection_mode #3?|9 egress_policy #4?|10 branch_prefix 9?|11 quick_action_settings #5?|12 allow_private_workers 8?|13 default_environment_public_id 9?|14 default_environment_settings #6*|15 remote_control_enabled 8?|16 pr_review_open_surface #7?|17 sidebar_named_agent_ids 9*|18 default_model_selection #8?|19 ask_question_auto_answer_timeout_minutes 5?|22 max_multi_repo_environment_repos 5?",
            Pn,
            vr.GRL,
            vr.XnR,
            vr.Gyw,
            cd,
            fd,
            pd,
            vr.B2c,
            s.CloudAgentModelSelection
        ];
    }
}
class yd extends Kr {
    constructor(t){
        super(), this.repoUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yd, t, e);
    }
    static $() {
        return [
            "GetRepositoryBranchesRequest|1 repo_url 9|2 page 5?|3 query 9?|4 only_user_branches 8?|5 team_id 5?"
        ];
    }
}
class wd extends Kr {
    constructor(t){
        super(), this.branches = [], this.hasMore = !1, this.page = 0, this.isEmptyRepo = !1, this.bootstrapBranch = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wd, t, e);
    }
    static $() {
        return [
            "GetRepositoryBranchesResponse|1 branches #0*|2 has_more 8|3 page 5|4 is_empty_repo 8|5 bootstrap_branch 9",
            Sd
        ];
    }
}
class Sd extends Kr {
    constructor(t){
        super(), this.name = "", this.isDefault = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sd, t, e);
    }
    static $() {
        return [
            "GetRepositoryBranchesResponse.Branch|1 name 9|2 is_default 8"
        ];
    }
}
class Jd extends Kr {
    constructor(t){
        super(), this.repoUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jd, t, e);
    }
    static $() {
        return [
            "GetRepositoryDefaultBranchRequest|1 repo_url 9|2 team_id 5?"
        ];
    }
}
class Bd extends Kr {
    constructor(t){
        super(), this.defaultBranch = "", this.isEmptyRepo = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bd, t, e);
    }
    static $() {
        return [
            "GetRepositoryDefaultBranchResponse|1 default_branch 9|2 is_empty_repo 8"
        ];
    }
}
class Ed extends Kr {
    constructor(t){
        super(), this.prUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ed).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ed).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ed).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ed, t, e);
    }
    static $() {
        return [
            "GetPullRequestMergeStatusRequest|1 pr_url 9|2 include_behind_count 8?"
        ];
    }
}
class Id extends Kr {
    constructor(t){
        super(), this.isMerged = !1, this.isClosed = !1, this.mergeableState = "", this.state = "", this.isDraft = !1, this.title = "", this.baseBranch = "", this.behindBy = 0, this.canUpdateBranch = !1, this.isAutoMergeEnabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Id).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Id).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Id).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Id, t, e);
    }
    static $() {
        return [
            "GetPullRequestMergeStatusResponse|1 is_merged 8|2 is_closed 8|3 mergeable_state 9|4 state 9|5 is_draft 8|6 title 9|7 base_branch 9|8 behind_by 5|9 can_update_branch 8|10 is_auto_merge_enabled 8|11 viewer_can_enable_auto_merge 8?"
        ];
    }
}
class Cd extends Kr {
    constructor(t){
        super(), this.prUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cd, t, e);
    }
    static $() {
        return [
            "GetDetailedPullRequestStatusRequest|1 pr_url 9|2 cache_expiration_seconds 5?"
        ];
    }
}
class bd extends Kr {
    constructor(t){
        super(), this.environmentUrl = "", this.logUrl = "", this.state = Un.PR_DEPLOYMENT_STATUS_STATE_UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bd, t, e);
    }
    static $() {
        return [
            "PRDeploymentPreviewStatus|1 environment_url 9|2 log_url 9|3 state #0",
            Un
        ];
    }
}
class kd extends Kr {
    constructor(t){
        super(), this.environment = "", this.state = Dn.PR_DEPLOYMENT_STATE_UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kd, t, e);
    }
    static $() {
        return [
            "PRDeploymentPreview|1 environment 9|2 state #0|3 latest_status #1",
            Dn,
            bd
        ];
    }
}
class vd extends Kr {
    constructor(t){
        super(), this.isMerged = !1, this.isClosed = !1, this.mergeableState = "", this.state = "", this.isDraft = !1, this.title = "", this.baseBranch = "", this.behindBy = 0, this.canUpdateBranch = !1, this.isAutoMergeEnabled = !1, this.deploymentPreviews = [], this.reviewers = [], this.requestedReviewers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vd, t, e);
    }
    static $() {
        return [
            "GetDetailedPullRequestStatusResponse|1 is_merged 8|2 is_closed 8|3 mergeable_state 9|4 state 9|5 is_draft 8|6 title 9|7 base_branch 9|8 behind_by 5|9 can_update_branch 8|10 check_status #0?|11 review_decision 9?|12 is_auto_merge_enabled 8|13 head_sha 9?|14 base_sha 9?|15 viewer_can_enable_auto_merge 8?|16 deployment_previews #1*|17 additions 5?|18 deletions 5?|19 commit_count 5?|20 review_count 5?|21 reviewers #2*|22 requested_reviewers #3*|23 requires_merge_queue 8?|24 is_in_merge_queue 8?|26 mergeability_verdict #4?",
            Nr,
            kd,
            qd,
            Rd,
            Tr
        ];
    }
}
class qd extends Kr {
    constructor(t){
        super(), this.authorLogin = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qd, t, e);
    }
    static $() {
        return [
            "PRReviewSummary|1 author_login 9|2 author_name 9?|3 author_avatar_url 9?|4 state 9?"
        ];
    }
}
class Rd extends Kr {
    constructor(t){
        super(), this.login = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rd, t, e);
    }
    static $() {
        return [
            "PRRequestedReviewer|1 login 9|2 name 9?|3 avatar_url 9?|4 kind 9?"
        ];
    }
}
class Pd extends Kr {
    constructor(t){
        super(), this.prUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pd, t, e);
    }
    static $() {
        return [
            "CheckPullRequestMergeabilityRequest|1 pr_url 9"
        ];
    }
}
class Td extends Kr {
    constructor(t){
        super(), this.canMerge = !1, this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Td).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Td).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Td).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Td, t, e);
    }
    static $() {
        return [
            "CheckPullRequestMergeabilityResponse|1 can_merge 8|2 error 9|3 mergeable_state 9?"
        ];
    }
}
class xd extends Kr {
    constructor(t){
        super(), this.id = "", this.authorLogin = "", this.avatarUrl = "", this.body = "", this.createdAt = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xd, t, e);
    }
    static $() {
        return [
            "PRReviewComment|1 id 9|2 author_login 9|3 avatar_url 9|4 body 9|5 created_at 9|6 diff_hunk 9?|7 body_html 9?|8 author_name 9?"
        ];
    }
}
class Nd extends Kr {
    constructor(t){
        super(), this.id = "", this.path = "", this.diffSide = "", this.isResolved = !1, this.isOutdated = !1, this.comments = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nd, t, e);
    }
    static $() {
        return [
            "PRReviewThread|1 id 9|2 path 9|3 line 5?|4 start_line 5?|5 original_line 5?|6 original_start_line 5?|7 diff_side 9|8 is_resolved 8|9 is_outdated 8|10 comments #0*|11 pull_request_review_id 9?",
            xd
        ];
    }
}
class Dd extends Kr {
    constructor(t){
        super(), this.id = "", this.authorLogin = "", this.avatarUrl = "", this.body = "", this.createdAt = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dd, t, e);
    }
    static $() {
        return [
            "PRTopLevelComment|1 id 9|2 author_login 9|3 avatar_url 9|4 body 9|5 created_at 9|6 body_html 9?|7 author_name 9?"
        ];
    }
}
class Ud extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ud).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ud).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ud).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ud, t, e);
    }
    static $() {
        return [
            "PRCommitUser|1 name 9?|2 email 9?|3 avatar_url 9?"
        ];
    }
}
class Qd extends Kr {
    constructor(t){
        super(), this.sha = "", this.message = "", this.committedDate = "", this.additions = 0, this.deletions = 0, this.authors = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qd, t, e);
    }
    static $() {
        return [
            "PRCommit|1 sha 9|2 message 9|3 committed_date 9|4 additions 5|5 deletions 5|6 changed_files 5?|7 author #0|8 committer #0|9 authors #0*",
            Ud
        ];
    }
}
class Md extends Kr {
    constructor(t){
        super(), this.prUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Md).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Md).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Md).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Md, t, e);
    }
    static $() {
        return [
            "GetPullRequestDiscussionsRequest|1 pr_url 9|2 skip_cache 8?"
        ];
    }
}
class Od extends Kr {
    constructor(t){
        super(), this.threads = [], this.topLevelComments = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Od).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Od).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Od).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Od, t, e);
    }
    static $() {
        return [
            "GetPullRequestDiscussionsResponse|1 threads #0*|2 top_level_comments #1*|3 check_status #2?",
            Nd,
            Dd,
            Nr
        ];
    }
}
class Fd extends Kr {
    constructor(t){
        super(), this.prUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fd, t, e);
    }
    static $() {
        return [
            "GetPullRequestCommitsRequest|1 pr_url 9|2 after_cursor 9?"
        ];
    }
}
class Ld extends Kr {
    constructor(t){
        super(), this.commits = [], this.hasNextPage = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ld).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ld).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ld).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ld, t, e);
    }
    static $() {
        return [
            "GetPullRequestCommitsResponse|1 commits #0*|2 has_next_page 8|3 end_cursor 9?",
            Qd
        ];
    }
}
class $d extends Kr {
    constructor(t){
        super(), this.prUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $d).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $d).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $d).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($d, t, e);
    }
    static $() {
        return [
            "GetPullRequestTimelineEventsRequest|1 pr_url 9|2 page 5?"
        ];
    }
}
class Gd extends Kr {
    constructor(t){
        super(), this.events = [], this.hasNextPage = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gd, t, e);
    }
    static $() {
        return [
            "GetPullRequestTimelineEventsResponse|1 events #0*|2 has_next_page 8|3 next_page 5?",
            Hd
        ];
    }
}
class Hd extends Kr {
    constructor(t){
        super(), this.id = "", this.eventType = "", this.createdAt = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hd, t, e);
    }
    static $() {
        return [
            "PRTimelineEvent|1 id 9|2 event_type 9|3 created_at 9|4 actor #0?|5 label 9?|6 body 9?",
            Kd
        ];
    }
}
class Kd extends Kr {
    constructor(t){
        super(), this.login = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kd, t, e);
    }
    static $() {
        return [
            "PRTimelineActor|1 login 9|2 avatar_url 9?|3 name 9?"
        ];
    }
}
class Vd extends Kr {
    constructor(t){
        super(), this.prUrl = "", this.threadId = "", this.body = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vd, t, e);
    }
    static $() {
        return [
            "ReplyToReviewThreadRequest|1 pr_url 9|2 thread_id 9|3 body 9"
        ];
    }
}
class zd extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zd, t, e);
    }
    static $() {
        return [
            "ReplyToReviewThreadResponse|1 thread #0?",
            Nd
        ];
    }
}
class Wd extends Kr {
    constructor(t){
        super(), this.prUrl = "", this.threadId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wd, t, e);
    }
    static $() {
        return [
            "ResolveReviewThreadRequest|1 pr_url 9|2 thread_id 9"
        ];
    }
}
class Yd extends Kr {
    constructor(t){
        super(), this.success = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yd, t, e);
    }
    static $() {
        return [
            "ResolveReviewThreadResponse|1 success 8"
        ];
    }
}
class jd extends Kr {
    constructor(t){
        super(), this.prUrl = "", this.threadId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jd, t, e);
    }
    static $() {
        return [
            "UnresolveReviewThreadRequest|1 pr_url 9|2 thread_id 9"
        ];
    }
}
class Xd extends Kr {
    constructor(t){
        super(), this.success = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xd, t, e);
    }
    static $() {
        return [
            "UnresolveReviewThreadResponse|1 success 8"
        ];
    }
}
class Zd extends Kr {
    constructor(t){
        super(), this.prUrl = "", this.commentId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zd, t, e);
    }
    static $() {
        return [
            "DeletePullRequestReviewCommentRequest|1 pr_url 9|2 comment_id 9|3 comment_kind 9?"
        ];
    }
}
class tf extends Kr {
    constructor(t){
        super(), this.success = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tf, t, e);
    }
    static $() {
        return [
            "DeletePullRequestReviewCommentResponse|1 success 8"
        ];
    }
}
class ef extends Kr {
    constructor(t){
        super(), this.prUrl = "", this.path = "", this.body = "", this.line = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ef).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ef).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ef).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ef, t, e);
    }
    static $() {
        return [
            "AddPullRequestReviewCommentRequest|1 pr_url 9|2 path 9|3 body 9|4 line 5|5 start_line 5?|6 diff_side 9?|7 commit_oid 9?"
        ];
    }
}
class rf extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rf, t, e);
    }
    static $() {
        return [
            "AddPullRequestReviewCommentResponse|1 thread #0?",
            Nd
        ];
    }
}
class nf extends Kr {
    constructor(t){
        super(), this.prUrl = "", this.useMergeQueue = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nf, t, e);
    }
    static $() {
        return [
            "MergePullRequestRequest|1 pr_url 9|2 merge_method 9?|3 use_merge_queue 8"
        ];
    }
}
class sf extends Kr {
    constructor(t){
        super(), this.success = !1, this.error = "", this.wasEnqueued = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sf, t, e);
    }
    static $() {
        return [
            "MergePullRequestResponse|1 success 8|2 error 9|3 pr_node_id 9?|4 was_enqueued 8"
        ];
    }
}
class of extends Kr {
    constructor(t){
        super(), this.prUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new of).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new of).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new of).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(of, t, e);
    }
    static $() {
        return [
            "EnablePullRequestAutoMergeRequest|1 pr_url 9|2 merge_method 9?"
        ];
    }
}
class af extends Kr {
    constructor(t){
        super(), this.success = !1, this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new af).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new af).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new af).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(af, t, e);
    }
    static $() {
        return [
            "EnablePullRequestAutoMergeResponse|1 success 8|2 error 9|3 pr_node_id 9?"
        ];
    }
}
class uf extends Kr {
    constructor(t){
        super(), this.prUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new uf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new uf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new uf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(uf, t, e);
    }
    static $() {
        return [
            "DisablePullRequestAutoMergeRequest|1 pr_url 9"
        ];
    }
}
class cf extends Kr {
    constructor(t){
        super(), this.success = !1, this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cf, t, e);
    }
    static $() {
        return [
            "DisablePullRequestAutoMergeResponse|1 success 8|2 error 9|3 pr_node_id 9?"
        ];
    }
}
class lf extends Kr {
    constructor(t){
        super(), this.name = "", this.port = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lf, t, e);
    }
    static $() {
        return [
            "EnvironmentPort|1 name 9|2 port 5"
        ];
    }
}
class mf extends Kr {
    constructor(t){
        super(), this.token = "", this.platform = Qn.UNSPECIFIED, this.deviceId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mf, t, e);
    }
    static $() {
        return [
            "RegisterPushNotificationTokenRequest|1 token 9|2 platform #0|3 device_id 9|4 bundle_id 9?",
            Qn
        ];
    }
}
class df extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new df).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new df).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new df).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(df, t, e);
    }
    static $() {
        return [
            "RegisterPushNotificationTokenResponse"
        ];
    }
}
class ff extends Kr {
    constructor(t){
        super(), this.deviceId = "", this.platform = Qn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ff).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ff).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ff).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ff, t, e);
    }
    static $() {
        return [
            "DeletePushNotificationTokenRequest|1 device_id 9|2 platform #0",
            Qn
        ];
    }
}
class pf extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pf, t, e);
    }
    static $() {
        return [
            "DeletePushNotificationTokenResponse"
        ];
    }
}
class hf extends Kr {
    constructor(t){
        super(), this.approvalId = "", this.resolution = Mn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hf, t, e);
    }
    static $() {
        return [
            "ResolveOriginAgentApprovalRequest|1 approval_id 9|2 resolution #0",
            Mn
        ];
    }
}
class gf extends Kr {
    constructor(t){
        super(), this.accepted = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gf, t, e);
    }
    static $() {
        return [
            "ResolveOriginAgentApprovalResponse|1 accepted 8"
        ];
    }
}
class Af extends Kr {
    constructor(t){
        super(), this.approvalId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Af).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Af).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Af).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Af, t, e);
    }
    static $() {
        return [
            "GetOriginAgentApprovalRequest|1 approval_id 9"
        ];
    }
}
class _f extends Kr {
    constructor(t){
        super(), this.summary = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _f).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _f).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _f).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_f, t, e);
    }
    static $() {
        return [
            "GetOriginAgentApprovalResponse|1 summary 9|2 approval #0?",
            di
        ];
    }
}
class yf extends Kr {
    constructor(t){
        super(), this.bcId = "", this.title = "", this.status = Zr.UNSPECIFIED, this.startedAtEpochSeconds = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yf, t, e);
    }
    static $() {
        return [
            "LiveActivityAgentEntry|1 bc_id 9|2 title 9|3 status #0|4 started_at_epoch_seconds 3|5 repo_label 9?|6 branch_name 9?|7 finished_at_epoch_seconds 3?|8 result_type 9?|9 lines_added 5?|10 lines_removed 5?|11 changed_files 5?|12 project_started_at_epoch_seconds 3?",
            Zr
        ];
    }
}
class wf extends Kr {
    constructor(t){
        super(), this.agents = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wf, t, e);
    }
    static $() {
        return [
            "LiveActivityContentState|1 agents #0*",
            yf
        ];
    }
}
class Sf extends Kr {
    constructor(t){
        super(), this.deviceId = "", this.platform = Qn.UNSPECIFIED, this.activityPushToken = "", this.stateVersion = n.protoInt64.zero, this.bundleId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sf, t, e);
    }
    static $() {
        return [
            "SyncLiveActivityRequest|1 device_id 9|2 platform #0|3 activity_push_token 9|4 content_state #1|5 state_version 4|6 bundle_id 9",
            Qn,
            wf
        ];
    }
}
class Jf extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jf, t, e);
    }
    static $() {
        return [
            "SyncLiveActivityResponse"
        ];
    }
}
class Bf extends Kr {
    constructor(t){
        super(), this.deviceId = "", this.platform = Qn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bf, t, e);
    }
    static $() {
        return [
            "DeleteLiveActivityRequest|1 device_id 9|2 platform #0",
            Qn
        ];
    }
}
class Ef extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ef).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ef).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ef).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ef, t, e);
    }
    static $() {
        return [
            "DeleteLiveActivityResponse"
        ];
    }
}
class If extends Kr {
    constructor(t){
        super(), this.bcId = "", this.accessType = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new If).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new If).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new If).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(If, t, e);
    }
    static $() {
        return [
            "VerifyBackgroundComposerAccessRequest|1 bc_id 9|2 access_type 9"
        ];
    }
}
class Cf extends Kr {
    constructor(t){
        super(), this.hasAccess = !1, this.denialReason = On.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cf, t, e);
    }
    static $() {
        return [
            "VerifyBackgroundComposerAccessResponse|1 has_access 8|2 denial_reason #0",
            On
        ];
    }
}
class bf extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bf, t, e);
    }
    static $() {
        return [
            "ConvertPullRequestFromDraftRequest|1 bc_id 9|2 pr_url 9?"
        ];
    }
}
class kf extends Kr {
    constructor(t){
        super(), this.success = !1, this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kf, t, e);
    }
    static $() {
        return [
            "ConvertPullRequestFromDraftResponse|1 success 8|2 error 9"
        ];
    }
}
class vf extends Kr {
    constructor(t){
        super(), this.prUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vf, t, e);
    }
    static $() {
        return [
            "UpdatePullRequestBranchRequest|1 pr_url 9"
        ];
    }
}
class qf extends Kr {
    constructor(t){
        super(), this.success = !1, this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qf, t, e);
    }
    static $() {
        return [
            "UpdatePullRequestBranchResponse|1 success 8|2 error 9|3 new_head_sha 9?"
        ];
    }
}
n.proto3;
class Rf extends Kr {
    constructor(t){
        super(), this.numPriorInteractionUpdates = 0, this.prBody = new Uint8Array(0), this.summary = new Uint8Array(0), this.branchName = new Uint8Array(0), this.prUrl = new Uint8Array(0), this.agentName = new Uint8Array(0), this.lastInteractionUpdateOffsetKey = "", this.config = new Uint8Array(0), this.originalPromptBlobId = new Uint8Array(0), this.repositoryInfoBlobId = new Uint8Array(0), this.originalConversationActionBlobId = new Uint8Array(0), this.videoAnnotationsBlobId = new Uint8Array(0), this.turnStartTodoIds = [], this.commits = [], this.numCompletedTurns = 0, this.startRequestBlobId = new Uint8Array(0), this.commitReminderStateBlobId = new Uint8Array(0), this.grindModeTrackingStateBlobId = new Uint8Array(0), this.workflowControlStateBlobId = new Uint8Array(0), this.workerCreations = [], this.resolvedEgressPolicyBlobId = new Uint8Array(0), this.pendingPrBlobId = new Uint8Array(0), this.nextTurnSystemRemindersBlobId = new Uint8Array(0), this.cloudPluginManifestBlobId = new Uint8Array(0), this.perBranchOptimizedDiffs = {}, this.startupWarnings = [], this.pendingSummarizationStateBlobId = new Uint8Array(0), this.pendingSummarizationSnapshotBlobId = new Uint8Array(0), this.admittedCustomModeStateBlobId = new Uint8Array(0), this.suggestedRepoNames = [], this.voiceCallsBlobId = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rf, t, e);
    }
    static $() {
        return [
            "CloudAgentState|1 conversation_state #0|2 num_prior_interaction_updates 13|3 pr_body 12|4 summary 12|5 branch_name 12|6 pr_url 12|8 agent_name 12|7 last_interaction_update_offset_key 9|9 starting_commit 9?|10 base_branch 9?|11 config 12|12 local_state_branch 9?|13 original_prompt_blob_id 12|14 repository_info_blob_id 12|15 original_conversation_action_blob_id 12|16 video_annotations_blob_id 12|17 last_user_turn_commit 9?|18 last_followup_source #1?|19 continue_rebase 8?|20 turn_start_todo_ids 9*|21 original_request_start_unix_ms 3?|22 initial_turn_latency_reported 8?|23 agent_session_id 9?|24 kickoff_message_id 9?|25 grind_mode_config #2?|26 commits #3*|27 commit_count 5?|28 user_facing_error_details #4?|29 initial_source #1?|30 num_completed_turns 13|31 synthesis_subagent_config #5?|32 start_request_blob_id 12|33 commit_reminder_state_blob_id 12|34 grind_mode_tracking_state_blob_id 12|35 workflow_control_state_blob_id 12|36 worker_creations #6*|37 is_time_limit_expired 8?|38 resolved_egress_policy_blob_id 12|39 optimized_diff #7?|40 pending_pr_blob_id 12|41 is_pod_finalized 8?|42 next_turn_system_reminders_blob_id 12|43 cloud_plugin_manifest_blob_id 12|44 per_branch_optimized_diffs 9,#7|45 startup_warnings #8*|46 private_workspace_identifier #9?|49 conversation_rewind_epoch 13?|50 pending_summarization_state_blob_id 12|51 pending_summarization_snapshot_blob_id 12|52 admitted_custom_mode_state_blob_id 12|53 agent_store_artifacts_symlink_enabled 8?|54 project_details #10?|55 uses_coordinator_membership 8?|56 suggested_repo_names 9*|57 resolved_environment_mcp_server_allowlist #11?|58 new_project_seeded_empty_root 8?|59 manager_spawn_kind #12?|60 carried_request_context #13?|61 voice_calls_blob_id 12",
            ut.Y9z,
            en,
            Pa,
            Gf,
            Of,
            Uf,
            Df,
            Nf,
            Ff,
            fa,
            ut.umU,
            Tf,
            Vr,
            Pf
        ];
    }
}
class Pf extends Kr {
    constructor(t){
        super(), this.blobId = new Uint8Array(0), this.teamOwnedHookSteps = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pf, t, e);
    }
    static $() {
        return [
            "CarriedRequestContext|1 blob_id 12|2 pod_id 9?|4 captured_at_unix_ms 3?|5 source #0?|6 was_complete 8?|7 conversation_rewind_epoch 13?|8 team_owned_hook_steps 9*|9 mcp_correction_streak 13?",
            Ln
        ];
    }
}
class Tf extends Kr {
    constructor(t){
        super(), this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tf, t, e);
    }
    static $() {
        return [
            "EnvironmentMcpServerAllowlist|1 entries #0*|2 disable_all_mcp_servers 8?",
            xf
        ];
    }
}
class xf extends Kr {
    constructor(t){
        super(), this.toolAllowlist = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xf, t, e);
    }
    static $() {
        return [
            "EnvironmentMcpServerAllowlist.Entry|1 server_url 9?|2 command 9?|3 tool_allowlist 9*"
        ];
    }
}
class Nf extends Kr {
    constructor(t){
        super(), this.state = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nf, t, e);
    }
    static $() {
        return [
            "OptimizedDiffState|1 pending #0 state|2 diff_blob_id 12 state|3 branch_name 9?|4 base_branch 9?|5 repo_url 9?",
            n.Empty
        ];
    }
}
class Df extends Kr {
    constructor(t){
        super(), this.workerIndex = 0, this.createdAtUnixMs = n.protoInt64.zero, this.numCompletedTurns = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Df).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Df).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Df).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Df, t, e);
    }
    static $() {
        return [
            "WorkerCreation|1 worker_index 13|2 created_at_unix_ms 3|3 num_completed_turns 13"
        ];
    }
}
class Uf extends Kr {
    constructor(t){
        super(), this.additionalModelNames = [], this.originalUserPromptBlobId = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Uf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Uf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Uf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Uf, t, e);
    }
    static $() {
        return [
            "SynthesisSubagentConfig|1 additional_model_names 9*|2 original_user_prompt_blob_id 12"
        ];
    }
}
class Qf extends Kr {
    constructor(t){
        super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qf, t, e);
    }
    static $() {
        return [
            "TransientError|1 error_message 9"
        ];
    }
}
class Mf extends Kr {
    constructor(t){
        super(), this.interactionId = "", this.skippedQuestionIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mf, t, e);
    }
    static $() {
        return [
            "OpenInteractionSettlement|1 interaction_id 9|2 answered #0?|3 skipped_question_ids 9*",
            yr.tz
        ];
    }
}
class Of extends Kr {
    constructor(t){
        super(), this.errorMessage = "", this.errorCode = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Of).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Of).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Of).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Of, t, e);
    }
    static $() {
        return [
            "CloudAgentErrorDetails|1 error_message 9|2 error_code 9|3 dev_only_message 9?|4 error_details #0?",
            s.ErrorDetails
        ];
    }
}
class Ff extends Kr {
    constructor(t){
        super(), this.warningType = Gn.UNSPECIFIED, this.userFacingMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ff).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ff).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ff).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ff, t, e);
    }
    static $() {
        return [
            "CloudAgentStartupWarning|1 warning_type #0|2 user_facing_message 9",
            Gn
        ];
    }
}
class Lf extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lf, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerVmUsageRequest|1 bc_id 9"
        ];
    }
}
class $f extends Kr {
    constructor(t){
        super(), this.totalDurationMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $f).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $f).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $f).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($f, t, e);
    }
    static $() {
        return [
            "GetBackgroundComposerVmUsageResponse|1 total_duration_ms 3"
        ];
    }
}
class Gf extends Kr {
    constructor(t){
        super(), this.sha = "", this.message = "", this.authorName = "", this.authorEmail = "", this.timestamp = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gf, t, e);
    }
    static $() {
        return [
            "BackgroundComposerCommit|1 sha 9|2 message 9|3 author_name 9|4 author_email 9|5 timestamp 9"
        ];
    }
}
class Hf extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hf, t, e);
    }
    static $() {
        return [
            "GetCloudAgentDebugDetailsRequest|1 bc_id 9|2 agent_blob_id 12?|3 blob_id 12?"
        ];
    }
}
class Kf extends Kr {
    constructor(t){
        super(), this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kf, t, e);
    }
    static $() {
        return [
            "CloudAgentVmHistory|1 entries #0*",
            Vf
        ];
    }
}
class Vf extends Kr {
    constructor(t){
        super(), this.workerIndex = 0, this.isCurrentWorker = !1, this.info = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vf, t, e);
    }
    static $() {
        return [
            "CloudAgentVmHistoryEntry|1 worker_index 5|2 is_current_worker 8|3 environment_version_id 3?|4 replaced_at_unix_ms 3?|5 anyrun #0 info|6 anyrun_pending_docker_build #1 info",
            zf,
            Wf
        ];
    }
}
class zf extends Kr {
    constructor(t){
        super(), this.tenantId = "", this.podId = "", this.anyrunCluster = "", this.workspaceRootPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zf, t, e);
    }
    static $() {
        return [
            "CloudAgentAnyrunVmInfo|1 tenant_id 9|2 pod_id 9|3 anyrun_cluster 9|4 workspace_root_path 9|5 docker_build_events_redis_stream_key 9?|6 setup_events_redis_stream_key 9?|7 prewarm_workflow_id 9?|8 environment_build_boot_info #0?",
            O
        ];
    }
}
class Wf extends Kr {
    constructor(t){
        super(), this.anyrunCluster = "", this.dockerBuildEventsRedisStreamKey = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wf, t, e);
    }
    static $() {
        return [
            "CloudAgentAnyrunPendingDockerBuildVmInfo|1 anyrun_cluster 9|2 docker_build_events_redis_stream_key 9"
        ];
    }
}
class Yf extends Kr {
    constructor(t){
        super(), this.cloudAgentStateBlobId = new Uint8Array(0), this.streamMessages = [], this.preFetchedBlobs = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yf, t, e);
    }
    static $() {
        return [
            "GetCloudAgentDebugDetailsResponse|1 cloud_agent_state_blob_id 12|2 cloud_agent_state #0|3 stream_messages #1*|4 pre_fetched_blobs #2*|5 vm_history #3",
            Rf,
            iu,
            su,
            Kf
        ];
    }
}
class jf extends Kr {
    constructor(t){
        super(), this.teamId = 0, this.count = 0, this.namePrefix = "", this.poolName = "", this.createdBy = "", this.provisionOriginRepos = !1, this.originNamespace = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jf, t, e);
    }
    static $() {
        return [
            "ProvisionSyntheticsServiceAccountsRequest|1 team_id 5|2 count 5|3 name_prefix 9|4 pool_name 9|5 created_by 9|6 provision_origin_repos 8|7 origin_namespace 9"
        ];
    }
}
class Xf extends Kr {
    constructor(t){
        super(), this.identityId = "", this.serviceAccountId = "", this.serviceAccountName = "", this.maskedApiKey = "", this.repoUrl = "", this.repoRef = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xf, t, e);
    }
    static $() {
        return [
            "ProvisionedSyntheticsIdentity|1 identity_id 9|2 service_account_id 9|3 service_account_name 9|4 masked_api_key 9|5 repo_url 9|6 repo_ref 9"
        ];
    }
}
class Zf extends Kr {
    constructor(t){
        super(), this.identities = [], this.poolId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zf, t, e);
    }
    static $() {
        return [
            "ProvisionSyntheticsServiceAccountsResponse|1 identities #0*|2 pool_id 9",
            Xf
        ];
    }
}
class tp extends Kr {
    constructor(t){
        super(), this.name = "", this.prompt = "", this.model = "", this.repoUrl = "", this.repoRef = "", this.canary = !1, this.maxDurationSec = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tp, t, e);
    }
    static $() {
        return [
            "CloudAgentSyntheticsScenarioInput|1 name 9|2 prompt 9|3 model 9|4 repo_url 9|5 repo_ref 9|6 canary 8|7 max_duration_sec 13"
        ];
    }
}
class ep extends Kr {
    constructor(t){
        super(), this.scenarioName = "", this.poolId = "", this.count = 0, this.perIdentityCreatePerMin = 0, this.rampUpSec = 0, this.createdBy = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ep).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ep).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ep).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ep, t, e);
    }
    static $() {
        return [
            "StartCloudAgentLoadTestRequest|1 scenario_name 9|2 custom_scenario #0|3 pool_id 9|4 count 13|5 per_identity_create_per_min 13|6 ramp_up_sec 13|7 created_by 9",
            tp
        ];
    }
}
class rp extends Kr {
    constructor(t){
        super(), this.temporalWorkflowId = "", this.temporalRunId = "", this.loadTestRunId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rp, t, e);
    }
    static $() {
        return [
            "StartCloudAgentLoadTestResponse|1 temporal_workflow_id 9|2 temporal_run_id 9|3 load_test_run_id 9"
        ];
    }
}
class np extends Kr {
    constructor(t){
        super(), this.runId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new np).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new np).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new np).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(np, t, e);
    }
    static $() {
        return [
            "EnsureModelRoutingLoadTestStartedRequest|1 run_id 9"
        ];
    }
}
class sp extends Kr {
    constructor(t){
        super(), this.temporalRunId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sp, t, e);
    }
    static $() {
        return [
            "EnsureModelRoutingLoadTestStartedResponse|1 temporal_run_id 9"
        ];
    }
}
class ip extends Kr {
    constructor(t){
        super(), this.runId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ip).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ip).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ip).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ip, t, e);
    }
    static $() {
        return [
            "CancelModelRoutingLoadTestRequest|1 run_id 9"
        ];
    }
}
class op extends Kr {
    constructor(t){
        super(), this.outcome = Hn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new op).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new op).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new op).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(op, t, e);
    }
    static $() {
        return [
            "CancelModelRoutingLoadTestResponse|1 outcome #0",
            Hn
        ];
    }
}
class ap extends Kr {
    constructor(t){
        super(), this.teamId = 0, this.allowedHosts = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ap).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ap).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ap).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ap, t, e);
    }
    static $() {
        return [
            "MintCustomerPrivatelinkProxyTokenRequest|1 team_id 5|2 allowed_hosts 9*"
        ];
    }
}
class up extends Kr {
    constructor(t){
        super(), this.proxyUsername = "", this.token = "", this.allowedHosts = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new up).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new up).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new up).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(up, t, e);
    }
    static $() {
        return [
            "MintCustomerPrivatelinkProxyTokenResponse|1 proxy_username 9|2 token 9|3 allowed_hosts 9*"
        ];
    }
}
class cp extends Kr {
    constructor(t){
        super(), this.teamId = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cp, t, e);
    }
    static $() {
        return [
            "ListCustomerPrivatelinkAllowedHostsRequest|1 team_id 5"
        ];
    }
}
class lp extends Kr {
    constructor(t){
        super(), this.destinations = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lp, t, e);
    }
    static $() {
        return [
            "ListCustomerPrivatelinkAllowedHostsResponse|1 destinations 9*"
        ];
    }
}
class mp extends Kr {
    constructor(t){
        super(), this.teamId = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mp, t, e);
    }
    static $() {
        return [
            "AdminListTeamNamedAgentsRequest|1 team_id 5"
        ];
    }
}
class dp extends Kr {
    constructor(t){
        super(), this.bcId = "", this.sessionKey = "", this.sessionKind = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dp, t, e);
    }
    static $() {
        return [
            "AdminNamedAgentSession|1 bc_id 9|2 session_key 9|3 session_kind 9"
        ];
    }
}
class fp extends Kr {
    constructor(t){
        super(), this.namedAgentId = "", this.createdAt = "", this.updatedAt = "", this.sessions = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fp, t, e);
    }
    static $() {
        return [
            "AdminNamedAgent|1 named_agent_id 9|2 name 9?|3 profile_picture_url 9?|4 owning_user 5?|5 owning_team 5?|6 created_at 9|7 updated_at 9|8 sessions #0*",
            dp
        ];
    }
}
class pp extends Kr {
    constructor(t){
        super(), this.namedAgents = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pp, t, e);
    }
    static $() {
        return [
            "AdminListTeamNamedAgentsResponse|1 named_agents #0*",
            fp
        ];
    }
}
class hp extends Kr {
    constructor(t){
        super(), this.namedAgentId = "", this.teamId = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hp, t, e);
    }
    static $() {
        return [
            "AdminDeleteNamedAgentRequest|1 named_agent_id 9|2 team_id 5"
        ];
    }
}
class gp extends Kr {
    constructor(t){
        super(), this.deletedBcIds = [], this.failedBcIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gp, t, e);
    }
    static $() {
        return [
            "AdminDeleteNamedAgentResponse|1 deleted_bc_ids 9*|2 failed_bc_ids 9*"
        ];
    }
}
class Ap extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ap).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ap).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ap).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ap, t, e);
    }
    static $() {
        return [
            "GetCloudAgentMemoryDbLogsRequest|1 bc_id 9|2 worker_index 13?|3 limit 5?"
        ];
    }
}
class _p extends Kr {
    constructor(t){
        super(), this.entries = [], this.truncated = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _p).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _p).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _p).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_p, t, e);
    }
    static $() {
        return [
            "GetCloudAgentMemoryDbLogsResponse|1 entries #0*|2 truncated 8",
            yp
        ];
    }
}
class yp extends Kr {
    constructor(t){
        super(), this.source = Kn.UNSPECIFIED, this.log = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yp, t, e);
    }
    static $() {
        return [
            "CloudAgentMemoryDbLogEntry|2 source #0|3 worker_index 13?|4 event #1 log|5 waterfall_update #2 log",
            Kn,
            p,
            ar
        ];
    }
}
class wp extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wp, t, e);
    }
    static $() {
        return [
            "CreateAgentShareRequest|1 bc_id 9"
        ];
    }
}
class Sp extends Kr {
    constructor(t){
        super(), this.shareId = "", this.shareUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sp, t, e);
    }
    static $() {
        return [
            "CreateAgentShareResponse|1 share_id 9|2 share_url 9"
        ];
    }
}
class Jp extends Kr {
    constructor(t){
        super(), this.shareId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jp, t, e);
    }
    static $() {
        return [
            "GetAgentSharePreviewRequest|1 share_id 9|2 include_preview_image 8?"
        ];
    }
}
class Bp extends Kr {
    constructor(t){
        super(), this.shareId = "", this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bp, t, e);
    }
    static $() {
        return [
            "GetAgentSharePreviewResponse|1 share_id 9|2 bc_id 9|3 name 9?|4 summary 9?|5 status 9?|6 error_message 9?|7 repo_url 9?|8 branch_name 9?|9 artifact_image_url 9?|10 preview_image_png 12?"
        ];
    }
}
class Ep extends Kr {
    constructor(t){
        super(), this.statusFilter = Xn.UNSPECIFIED, this.pageSize = 0, this.listScope = Vn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ep).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ep).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ep).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ep, t, e);
    }
    static $() {
        return [
            "ListPrivateWorkersRequest|1 status_filter #0|2 page_size 5|3 page_token 9?|4 list_scope #1",
            Xn,
            Vn
        ];
    }
}
class Ip extends Kr {
    constructor(t){
        super(), this.workers = [], this.nextPageToken = "", this.totalCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ip).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ip).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ip).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ip, t, e);
    }
    static $() {
        return [
            "ListPrivateWorkersResponse|1 workers #0*|2 next_page_token 9|3 total_count 5",
            jp
        ];
    }
}
class Cp extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cp, t, e);
    }
    static $() {
        return [
            "AdminListUserPrivateWorkersRequest|1 auth_id 9?|2 user_id 5?|3 email 9?"
        ];
    }
}
class bp extends Kr {
    constructor(t){
        super(), this.userId = 0, this.authId = "", this.email = "", this.teamIds = [], this.privateWorkers = [], this.remoteControlEnabled = !1, this.teamRemoteControlAllowed = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bp, t, e);
    }
    static $() {
        return [
            "AdminListUserPrivateWorkersResponse|1 user_id 5|2 auth_id 9|3 email 9|4 team_ids 5*|5 private_workers #0*|7 remote_control_enabled 8|8 team_remote_control_allowed 8",
            jp
        ];
    }
}
class kp extends Kr {
    constructor(t){
        super(), this.bcId = "", this.expectedOwningUserId = 0, this.operatorEmail = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kp, t, e);
    }
    static $() {
        return [
            "AdminKillBackgroundComposerRequest|1 bc_id 9|2 expected_owning_user_id 5|3 operator_email 9"
        ];
    }
}
class vp extends Kr {
    constructor(t){
        super(), this.signalOutcome = zn.UNSPECIFIED, this.workerReleaseSucceeded = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vp, t, e);
    }
    static $() {
        return [
            "AdminKillBackgroundComposerResponse|1 signal_outcome #0|2 worker_release_succeeded 8",
            zn
        ];
    }
}
class qp extends Kr {
    constructor(t){
        super(), this.bcId = "", this.interactionId = "", this.state = $n.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qp, t, e);
    }
    static $() {
        return [
            "AdminSettleInteractionRequest|1 bc_id 9|2 interaction_id 9|3 state #0",
            $n
        ];
    }
}
class Rp extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rp, t, e);
    }
    static $() {
        return [
            "AdminSettleInteractionResponse"
        ];
    }
}
class Pp extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pp, t, e);
    }
    static $() {
        return [
            "AdminUnparkFollowupsRequest|1 bc_id 9"
        ];
    }
}
class Tp extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tp, t, e);
    }
    static $() {
        return [
            "AdminUnparkFollowupsResponse"
        ];
    }
}
class xp extends Kr {
    constructor(t){
        super(), this.bcId = "", this.createdAt = "", this.source = "", this.workflowStatus = "", this.executionEnvironment = Wn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xp, t, e);
    }
    static $() {
        return [
            "AdminActiveBackgroundComposer|1 bc_id 9|2 created_at 9|3 source 9|4 workflow_status 9|5 execution_environment #0|6 parent_bc_id 9?",
            Wn
        ];
    }
}
class Np extends Kr {
    constructor(t){
        super(), this.expectedOwningUserId = 0, this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Np).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Np).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Np).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Np, t, e);
    }
    static $() {
        return [
            "AdminListActiveBackgroundComposersRequest|1 expected_owning_user_id 5|2 page_size 5|3 page_token 9"
        ];
    }
}
class Dp extends Kr {
    constructor(t){
        super(), this.agents = [], this.nextPageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dp, t, e);
    }
    static $() {
        return [
            "AdminListActiveBackgroundComposersResponse|1 agents #0*|2 next_page_token 9",
            xp
        ];
    }
}
class Up extends Kr {
    constructor(t){
        super(), this.expectedOwningUserId = 0, this.operatorEmail = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Up).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Up).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Up).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Up, t, e);
    }
    static $() {
        return [
            "AdminKillAllActiveBackgroundComposersRequest|1 expected_owning_user_id 5|2 operator_email 9"
        ];
    }
}
class Qp extends Kr {
    constructor(t){
        super(), this.bcId = "", this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qp, t, e);
    }
    static $() {
        return [
            "AdminKillAllActiveBackgroundComposerFailure|1 bc_id 9|2 message 9"
        ];
    }
}
class Mp extends Kr {
    constructor(t){
        super(), this.matchedCount = 0, this.killedCount = 0, this.alreadyKilledCount = 0, this.partialCleanupCount = 0, this.failures = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mp, t, e);
    }
    static $() {
        return [
            "AdminKillAllActiveBackgroundComposersResponse|1 matched_count 5|2 killed_count 5|3 already_killed_count 5|4 partial_cleanup_count 5|5 failures #0*",
            Qp
        ];
    }
}
class Op extends Kr {
    constructor(t){
        super(), this.pageSize = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Op).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Op).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Op).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Op, t, e);
    }
    static $() {
        return [
            "ListPendingPrivateWorkerRequestsRequest|1 page_size 5|2 page_token 9?|3 repository 9?|4 pool 9?"
        ];
    }
}
class Fp extends Kr {
    constructor(t){
        super(), this.requests = [], this.nextPageToken = "", this.totalCount = 0, this.streamCursor = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fp, t, e);
    }
    static $() {
        return [
            "ListPendingPrivateWorkerRequestsResponse|1 requests #0*|2 next_page_token 9|3 total_count 5|4 stream_cursor 9",
            Lp
        ];
    }
}
class Lp extends Kr {
    constructor(t){
        super(), this.bcId = "", this.userId = 0, this.labels = [], this.createdAtMs = 0, this.repoUrls = [], this.repos = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lp, t, e);
    }
    static $() {
        return [
            "PendingPrivateWorkerRequest|1 bc_id 9|2 user_id 5|3 service_account_id 9?|4 repo_owner 9?|5 repo_name 9?|6 repo_url 9?|7 labels #0*|8 created_at_ms 1|9 user_email 9?|10 repo_urls 9*|11 claimed_worker_id 9?|12 wake_timeout_ms 1?|13 repos #1*",
            Xp,
            $p
        ];
    }
}
class $p extends Kr {
    constructor(t){
        super(), this.repoUrl = "", this.primary = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $p).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $p).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $p).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($p, t, e);
    }
    static $() {
        return [
            "PrivateWorkerRequestRepo|1 repo_url 9|2 ref 9?|3 primary 8"
        ];
    }
}
class Gp extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gp, t, e);
    }
    static $() {
        return [
            "StreamPendingPrivateWorkerRequestsRequest|1 repository 9?|2 cursor 9?|3 pool 9?"
        ];
    }
}
class Hp extends Kr {
    constructor(t){
        super(), this.type = Yn.UNSPECIFIED, this.cursor = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hp, t, e);
    }
    static $() {
        return [
            "StreamPendingPrivateWorkerRequestsResponse|1 type #0|2 request #1|3 cursor 9",
            Yn,
            Lp
        ];
    }
}
class Kp extends Kr {
    constructor(t){
        super(), this.bcId = "", this.workerId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kp, t, e);
    }
    static $() {
        return [
            "ClaimPendingPrivateWorkerRequestRequest|1 bc_id 9|2 worker_id 9"
        ];
    }
}
class Vp extends Kr {
    constructor(t){
        super(), this.bcId = "", this.workerId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vp, t, e);
    }
    static $() {
        return [
            "ClaimPendingPrivateWorkerRequestResponse|1 bc_id 9|2 worker_id 9"
        ];
    }
}
class zp extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zp, t, e);
    }
    static $() {
        return [
            "ReleasePrivateWorkerClaimRequest|1 bc_id 9"
        ];
    }
}
class Wp extends Kr {
    constructor(t){
        super(), this.bcId = "", this.workerId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wp, t, e);
    }
    static $() {
        return [
            "ReleasePrivateWorkerClaimResponse|1 bc_id 9|2 worker_id 9"
        ];
    }
}
class Yp extends Kr {
    constructor(t){
        super(), this.owner = "", this.name = "", this.url = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yp, t, e);
    }
    static $() {
        return [
            "PrivateWorkerRepo|1 owner 9|2 name 9|3 url 9"
        ];
    }
}
class jp extends Kr {
    constructor(t){
        super(), this.workerId = "", this.repoOwner = "", this.repoName = "", this.workspaceRootPath = "", this.connectedAtMs = 0, this.userId = 0, this.isInUse = !1, this.labels = [], this.repos = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jp, t, e);
    }
    static $() {
        return [
            "PrivateWorker|1 worker_id 9|2 repo_owner 9|3 repo_name 9|4 workspace_root_path 9|5 connected_at_ms 1|6 user_id 5|7 team_id 5?|8 service_account_id 9?|9 is_in_use 8|10 active_bc_id 9?|11 labels #0*|12 repo_url 9?|13 display_name 9?|14 machine_id 9?|15 machine_display_name 9?|16 repos #1*",
            Xp,
            Yp
        ];
    }
}
class Xp extends Kr {
    constructor(t){
        super(), this.key = "", this.value = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xp, t, e);
    }
    static $() {
        return [
            "PrivateWorkerLabel|1 key 9|2 value 9"
        ];
    }
}
class Zp extends Kr {
    constructor(t){
        super(), this.scope = jn.UNSPECIFIED, this.ownerId = 0, this.poolName = "", this.connectedWorkerCount = 0, this.inUseWorkerCount = 0, this.firstSeenAtMs = 0, this.lastSeenAtMs = 0, this.isStale = !1, this.workerReadyTimeoutSeconds = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zp, t, e);
    }
    static $() {
        return [
            "PrivateWorkerPool|1 scope #0|2 owner_id 5|3 pool_name 9|4 repo_owner 9?|5 repo_name 9?|6 repo_url 9?|7 connected_worker_count 5|8 in_use_worker_count 5|9 first_seen_at_ms 1|10 last_seen_at_ms 1|11 is_stale 8|12 worker_ready_timeout_seconds 5|13 request_counts #1?",
            jn,
            th
        ];
    }
}
class th extends Kr {
    constructor(t){
        super(), this.pending = 0, this.waking = 0, this.claimed = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new th).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new th).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new th).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(th, t, e);
    }
    static $() {
        return [
            "PrivateWorkerPoolRequestCounts|1 pending 5|2 waking 5|3 claimed 5"
        ];
    }
}
class eh extends Kr {
    constructor(t){
        super(), this.listScope = Vn.UNSPECIFIED, this.includeStale = !1, this.includeRequestCounts = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new eh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new eh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new eh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(eh, t, e);
    }
    static $() {
        return [
            "ListPrivateWorkerPoolsRequest|1 list_scope #0|2 include_stale 8|3 include_request_counts 8",
            Vn
        ];
    }
}
class rh extends Kr {
    constructor(t){
        super(), this.pools = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rh, t, e);
    }
    static $() {
        return [
            "ListPrivateWorkerPoolsResponse|1 pools #0*",
            Zp
        ];
    }
}
class nh extends Kr {
    constructor(t){
        super(), this.target = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nh, t, e);
    }
    static $() {
        return [
            "PlacementGrantTarget|1 worker_id 9 target|2 pool_name 9 target|3 environment_public_id 9 target"
        ];
    }
}
class sh extends Kr {
    constructor(t){
        super(), this.inUse = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sh, t, e);
    }
    static $() {
        return [
            "PlacementGrantConnectedWorker|1 repo 9?|2 in_use 8"
        ];
    }
}
class ih extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ih).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ih).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ih).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ih, t, e);
    }
    static $() {
        return [
            "PlacementGrantOfflineWorker"
        ];
    }
}
class oh extends Kr {
    constructor(t){
        super(), this.connectedWorkerCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oh, t, e);
    }
    static $() {
        return [
            "PlacementGrantPool|1 connected_worker_count 13"
        ];
    }
}
class ah extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ah).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ah).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ah).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ah, t, e);
    }
    static $() {
        return [
            "PlacementGrantEnvironment"
        ];
    }
}
class uh extends Kr {
    constructor(t){
        super(), this.label = "", this.allowed = !1, this.connection = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new uh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new uh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new uh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(uh, t, e);
    }
    static $() {
        return [
            "PlacementGrantEntry|1 target #0|2 label 9|3 allowed 8|4 connected #1 connection|5 offline #2 connection|6 pool #3 connection|7 environment #4 connection",
            nh,
            sh,
            ih,
            oh,
            ah
        ];
    }
}
class ch extends Kr {
    constructor(t){
        super(), this.enabled = !1, this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ch).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ch).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ch).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ch, t, e);
    }
    static $() {
        return [
            "PlacementGrantsView|1 enabled 8|2 entries #0*",
            uh
        ];
    }
}
class lh extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lh, t, e);
    }
    static $() {
        return [
            "ListPlacementGrantsRequest|1 bc_id 9"
        ];
    }
}
class mh extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mh, t, e);
    }
    static $() {
        return [
            "ListPlacementGrantsResponse|1 view #0",
            ch
        ];
    }
}
class dh extends Kr {
    constructor(t){
        super(), this.bcId = "", this.allow = [], this.revoke = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dh, t, e);
    }
    static $() {
        return [
            "UpdatePlacementGrantsRequest|1 bc_id 9|2 allow #0*|3 revoke #0*",
            nh
        ];
    }
}
class fh extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fh, t, e);
    }
    static $() {
        return [
            "UpdatePlacementGrantsResponse|1 view #0",
            ch
        ];
    }
}
class ph extends Kr {
    constructor(t){
        super(), this.scope = jn.UNSPECIFIED, this.poolName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ph).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ph).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ph).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ph, t, e);
    }
    static $() {
        return [
            "RegisterPrivateWorkerPoolRequest|1 scope #0|2 pool_name 9|3 repo_owner 9?|4 repo_name 9?|5 repo_url 9?|6 worker_ready_timeout_seconds 5?",
            jn
        ];
    }
}
class hh extends Kr {
    constructor(t){
        super(), this.registered = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hh, t, e);
    }
    static $() {
        return [
            "RegisterPrivateWorkerPoolResponse|1 registered 8"
        ];
    }
}
class gh extends Kr {
    constructor(t){
        super(), this.scope = jn.UNSPECIFIED, this.poolName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gh, t, e);
    }
    static $() {
        return [
            "DeregisterPrivateWorkerPoolRequest|1 scope #0|2 pool_name 9|3 repo_owner 9?|4 repo_name 9?",
            jn
        ];
    }
}
class Ah extends Kr {
    constructor(t){
        super(), this.deregistered = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ah).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ah).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ah).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ah, t, e);
    }
    static $() {
        return [
            "DeregisterPrivateWorkerPoolResponse|1 deregistered 8"
        ];
    }
}
class _h extends Kr {
    constructor(t){
        super(), this.ownerCursorUserId = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _h).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _h).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _h).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_h, t, e);
    }
    static $() {
        return [
            "PrivateWorkerOwnerFilter|1 owner_cursor_user_id 5"
        ];
    }
}
class yh extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yh, t, e);
    }
    static $() {
        return [
            "GetPrivateWorkersSummaryRequest"
        ];
    }
}
class wh extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wh, t, e);
    }
    static $() {
        return [
            "GetPrivateWorkersSummaryResponse|1 user_summary #0?|2 team_summary #1?|3 team_limit_summary #2?",
            Sh,
            Jh,
            Bh
        ];
    }
}
class Sh extends Kr {
    constructor(t){
        super(), this.totalConnected = 0, this.inUse = 0, this.teamWorkersInUseByUser = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sh, t, e);
    }
    static $() {
        return [
            "UserWorkerSummary|1 total_connected 5|2 in_use 5|3 team_workers_in_use_by_user 5"
        ];
    }
}
class Jh extends Kr {
    constructor(t){
        super(), this.totalConnected = 0, this.inUse = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jh, t, e);
    }
    static $() {
        return [
            "TeamWorkerSummary|1 total_connected 5|2 in_use 5"
        ];
    }
}
class Bh extends Kr {
    constructor(t){
        super(), this.totalConnected = 0, this.maxWorkers = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bh, t, e);
    }
    static $() {
        return [
            "TeamWorkerLimitSummary|1 total_connected 5|2 max_workers 5"
        ];
    }
}
class Eh extends Kr {
    constructor(t){
        super(), this.workerId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Eh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Eh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Eh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Eh, t, e);
    }
    static $() {
        return [
            "GetPrivateWorkerRequest|1 worker_id 9"
        ];
    }
}
class Ih extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ih).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ih).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ih).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ih, t, e);
    }
    static $() {
        return [
            "GetPrivateWorkerResponse|1 worker #0",
            jp
        ];
    }
}
class Ch extends Kr {
    constructor(t){
        super(), this.workerId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ch).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ch).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ch).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ch, t, e);
    }
    static $() {
        return [
            "ReleasePrivateWorkerRequest|1 worker_id 9"
        ];
    }
}
class bh extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bh, t, e);
    }
    static $() {
        return [
            "ReleasePrivateWorkerResponse"
        ];
    }
}
class kh extends Kr {
    constructor(t){
        super(), this.bcIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kh, t, e);
    }
    static $() {
        return [
            "BatchRefreshPullRequestStatusRequest|1 bc_ids 9*"
        ];
    }
}
class vh extends Kr {
    constructor(t){
        super(), this.results = {}, this.failedBcIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vh, t, e);
    }
    static $() {
        return [
            "BatchRefreshPullRequestStatusResponse|1 results 9,#0|2 failed_bc_ids 9*",
            vd
        ];
    }
}
class qh extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qh, t, e);
    }
    static $() {
        return [
            "AttachAgentStartupTraceRequest|1 bc_id 9|2 last_event_id 9?"
        ];
    }
}
class Rh extends Kr {
    constructor(t){
        super(), this.eventId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rh, t, e);
    }
    static $() {
        return [
            "AttachAgentStartupTraceResponse|1 event_id 9|3 trace_event #0",
            Mr
        ];
    }
}
class Ph extends Kr {
    constructor(t){
        super(), this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ph).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ph).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ph).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ph, t, e);
    }
    static $() {
        return [
            "CloudCanvasDiagnostic|1 message 9|2 code 9?|3 severity 5?|4 range #0?",
            Th
        ];
    }
}
class Th extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Th).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Th).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Th).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Th, t, e);
    }
    static $() {
        return [
            "CloudCanvasDiagnosticRange|1 start #0|2 end #0",
            xh
        ];
    }
}
class xh extends Kr {
    constructor(t){
        super(), this.line = 0, this.character = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xh, t, e);
    }
    static $() {
        return [
            "CloudCanvasDiagnosticPosition|1 line 5|2 character 5"
        ];
    }
}
class Nh extends Kr {
    constructor(t){
        super(), this.source = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nh, t, e);
    }
    static $() {
        return [
            "WriteCanvasRequest|1 source 9|2 canvas_id 9?|3 title 9?|4 if_match 9?"
        ];
    }
}
class Dh extends Kr {
    constructor(t){
        super(), this.canvasId = "", this.url = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dh, t, e);
    }
    static $() {
        return [
            "WriteCanvasOk|1 canvas_id 9|2 title 9?|3 url 9|4 etag 9?"
        ];
    }
}
class Uh extends Kr {
    constructor(t){
        super(), this.reason = Zn.UNSPECIFIED, this.diagnostics = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Uh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Uh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Uh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Uh, t, e);
    }
    static $() {
        return [
            "WriteCanvasFailure|1 reason #0|2 diagnostics #1*|3 detail 9?",
            Zn,
            Ph
        ];
    }
}
class Qh extends Kr {
    constructor(t){
        super(), this.outcome = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qh, t, e);
    }
    static $() {
        return [
            "WriteCanvasResponse|1 ok #0 outcome|2 failure #1 outcome",
            Dh,
            Uh
        ];
    }
}
class Mh extends Kr {
    constructor(t){
        super(), this.canvasId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mh, t, e);
    }
    static $() {
        return [
            "ReadCanvasRequest|1 canvas_id 9|2 store_id 9?"
        ];
    }
}
class Oh extends Kr {
    constructor(t){
        super(), this.canvasId = "", this.url = "", this.source = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Oh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Oh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Oh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Oh, t, e);
    }
    static $() {
        return [
            "ReadCanvasOk|1 canvas_id 9|2 title 9?|3 url 9|4 source 9|5 etag 9?"
        ];
    }
}
class Fh extends Kr {
    constructor(t){
        super(), this.reason = ts.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fh, t, e);
    }
    static $() {
        return [
            "ReadCanvasFailure|1 reason #0|2 detail 9?",
            ts
        ];
    }
}
class Lh extends Kr {
    constructor(t){
        super(), this.outcome = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lh, t, e);
    }
    static $() {
        return [
            "ReadCanvasResponse|1 ok #0 outcome|2 failure #1 outcome",
            Oh,
            Fh
        ];
    }
}
class $h extends Kr {
    constructor(t){
        super(), this.partNumber = 0, this.url = "", this.offsetBytes = n.protoInt64.zero, this.sizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $h).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $h).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $h).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($h, t, e);
    }
    static $() {
        return [
            "PromptUploadPart|1 part_number 5|2 url 9|3 offset_bytes 3|4 size_bytes 3"
        ];
    }
}
class Gh extends Kr {
    constructor(t){
        super(), this.filename = "", this.mimeType = "", this.contentLengthBytes = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gh, t, e);
    }
    static $() {
        return [
            "PresignPromptUploadRequest|1 filename 9|2 mime_type 9|3 content_length_bytes 3|4 team_id 5?"
        ];
    }
}
class Hh extends Kr {
    constructor(t){
        super(), this.uploadId = "", this.urlsExpireAtMs = n.protoInt64.zero, this.upload = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hh, t, e);
    }
    static $() {
        return [
            "PresignPromptUploadResponse|1 upload_id 9|3 urls_expire_at_ms 3|5 multipart #0 upload",
            Kh
        ];
    }
}
class Kh extends Kr {
    constructor(t){
        super(), this.s3UploadId = "", this.parts = [], this.partSizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kh, t, e);
    }
    static $() {
        return [
            "PresignPromptUploadResponse.Multipart|1 s3_upload_id 9|2 parts #0*|3 part_size_bytes 3",
            $h
        ];
    }
}
class Vh extends Kr {
    constructor(t){
        super(), this.uploadId = "", this.s3UploadId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vh, t, e);
    }
    static $() {
        return [
            "CompletePromptUploadRequest|1 upload_id 9|2 s3_upload_id 9"
        ];
    }
}
class zh extends Kr {
    constructor(t){
        super(), this.status = es.UNSPECIFIED, this.sizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zh, t, e);
    }
    static $() {
        return [
            "CompletePromptUploadResponse|1 status #0|2 size_bytes 3",
            es
        ];
    }
}
class Wh extends Kr {
    constructor(t){
        super(), this.uploadId = "", this.s3UploadId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wh, t, e);
    }
    static $() {
        return [
            "AbortPromptUploadRequest|1 upload_id 9|2 s3_upload_id 9"
        ];
    }
}
class Yh extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yh, t, e);
    }
    static $() {
        return [
            "AbortPromptUploadResponse"
        ];
    }
}
class jh extends Kr {
    constructor(t){
        super(), this.publicId = "", this.name = "", this.scope = rs.UNSPECIFIED, this.createdAtMs = n.protoInt64.zero, this.updatedAtMs = n.protoInt64.zero, this.secretCount = 0, this.canManage = !1, this.canAttach = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jh, t, e);
    }
    static $() {
        return [
            "Keyring|1 public_id 9|2 name 9|3 scope #0|4 owning_team 5?|5 owning_user 5?|6 created_at_ms 3|7 updated_at_ms 3|8 secret_count 5|9 created_by_user_id 5?|10 can_manage 8|11 can_attach 8",
            rs
        ];
    }
}
class Xh extends Kr {
    constructor(t){
        super(), this.mode = ns.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xh, t, e);
    }
    static $() {
        return [
            "ListKeyringsRequest|1 mode #0",
            ns
        ];
    }
}
class Zh extends Kr {
    constructor(t){
        super(), this.keyrings = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zh, t, e);
    }
    static $() {
        return [
            "ListKeyringsResponse|1 keyrings #0*",
            jh
        ];
    }
}
class tg extends Kr {
    constructor(t){
        super(), this.publicId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tg, t, e);
    }
    static $() {
        return [
            "GetKeyringRequest|1 public_id 9"
        ];
    }
}
class eg extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new eg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new eg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new eg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(eg, t, e);
    }
    static $() {
        return [
            "GetKeyringResponse|1 keyring #0?",
            jh
        ];
    }
}
class rg extends Kr {
    constructor(t){
        super(), this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rg, t, e);
    }
    static $() {
        return [
            "CreateKeyringRequest|1 name 9"
        ];
    }
}
class ng extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ng).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ng).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ng).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ng, t, e);
    }
    static $() {
        return [
            "CreateKeyringResponse|1 keyring #0",
            jh
        ];
    }
}
class sg extends Kr {
    constructor(t){
        super(), this.name = "", this.secretNames = [], this.initialGrants = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sg, t, e);
    }
    static $() {
        return [
            "CreateKeyringFromTeamSecretsRequest|1 name 9|2 secret_names 9*|3 initial_grants #0*",
            Sg
        ];
    }
}
class ig extends Kr {
    constructor(t){
        super(), this.copiedSecretCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ig).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ig).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ig).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ig, t, e);
    }
    static $() {
        return [
            "CreateKeyringFromTeamSecretsResponse|1 keyring #0|2 copied_secret_count 5",
            jh
        ];
    }
}
class og extends Kr {
    constructor(t){
        super(), this.keyringPublicId = "", this.secretNames = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new og).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new og).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new og).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(og, t, e);
    }
    static $() {
        return [
            "CopyTeamSecretsToKeyringRequest|1 keyring_public_id 9|2 secret_names 9*"
        ];
    }
}
class ag extends Kr {
    constructor(t){
        super(), this.copiedSecretCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ag).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ag).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ag).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ag, t, e);
    }
    static $() {
        return [
            "CopyTeamSecretsToKeyringResponse|1 copied_secret_count 5"
        ];
    }
}
class ug extends Kr {
    constructor(t){
        super(), this.publicId = "", this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ug).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ug).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ug).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ug, t, e);
    }
    static $() {
        return [
            "RenameKeyringRequest|1 public_id 9|2 name 9"
        ];
    }
}
class cg extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cg, t, e);
    }
    static $() {
        return [
            "RenameKeyringResponse|1 keyring #0",
            jh
        ];
    }
}
class lg extends Kr {
    constructor(t){
        super(), this.publicId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lg, t, e);
    }
    static $() {
        return [
            "DeleteKeyringRequest|1 public_id 9"
        ];
    }
}
class mg extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mg, t, e);
    }
    static $() {
        return [
            "DeleteKeyringResponse"
        ];
    }
}
class dg extends Kr {
    constructor(t){
        super(), this.name = "", this.level = vr.zeL.UNSPECIFIED, this.createdAtMs = n.protoInt64.zero, this.updatedAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dg, t, e);
    }
    static $() {
        return [
            "KeyringSecret|1 name 9|2 level #0|3 created_at_ms 3|4 updated_at_ms 3",
            vr.zeL
        ];
    }
}
class fg extends Kr {
    constructor(t){
        super(), this.keyringPublicId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fg, t, e);
    }
    static $() {
        return [
            "ListKeyringSecretsRequest|1 keyring_public_id 9"
        ];
    }
}
class pg extends Kr {
    constructor(t){
        super(), this.secrets = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pg, t, e);
    }
    static $() {
        return [
            "ListKeyringSecretsResponse|1 secrets #0*",
            dg
        ];
    }
}
class hg extends Kr {
    constructor(t){
        super(), this.keyringPublicId = "", this.name = "", this.value = "", this.level = vr.zeL.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hg, t, e);
    }
    static $() {
        return [
            "CreateKeyringSecretRequest|1 keyring_public_id 9|2 name 9|3 value 9|4 level #0",
            vr.zeL
        ];
    }
}
class gg extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gg, t, e);
    }
    static $() {
        return [
            "CreateKeyringSecretResponse"
        ];
    }
}
class Ag extends Kr {
    constructor(t){
        super(), this.keyringPublicId = "", this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ag).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ag).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ag).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ag, t, e);
    }
    static $() {
        return [
            "UpdateKeyringSecretRequest|1 keyring_public_id 9|2 name 9|3 value 9?|4 level #0?",
            vr.zeL
        ];
    }
}
class _g extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _g).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _g).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _g).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_g, t, e);
    }
    static $() {
        return [
            "UpdateKeyringSecretResponse"
        ];
    }
}
class yg extends Kr {
    constructor(t){
        super(), this.keyringPublicId = "", this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yg, t, e);
    }
    static $() {
        return [
            "RevokeKeyringSecretRequest|1 keyring_public_id 9|2 name 9"
        ];
    }
}
class wg extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wg, t, e);
    }
    static $() {
        return [
            "RevokeKeyringSecretResponse"
        ];
    }
}
class Sg extends Kr {
    constructor(t){
        super(), this.principalType = ss.UNSPECIFIED, this.principalId = "", this.accessLevel = is.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sg, t, e);
    }
    static $() {
        return [
            "KeyringGrant|1 principal_type #0|2 principal_id 9|3 access_level #1",
            ss,
            is
        ];
    }
}
class Jg extends Kr {
    constructor(t){
        super(), this.keyringPublicId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jg, t, e);
    }
    static $() {
        return [
            "ListKeyringGrantsRequest|1 keyring_public_id 9"
        ];
    }
}
class Bg extends Kr {
    constructor(t){
        super(), this.grants = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bg, t, e);
    }
    static $() {
        return [
            "ListKeyringGrantsResponse|1 grants #0*",
            Sg
        ];
    }
}
class Eg extends Kr {
    constructor(t){
        super(), this.keyringPublicId = "", this.principalType = ss.UNSPECIFIED, this.principalId = "", this.accessLevel = is.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Eg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Eg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Eg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Eg, t, e);
    }
    static $() {
        return [
            "GrantKeyringPermissionsRequest|1 keyring_public_id 9|2 principal_type #0|3 principal_id 9|4 access_level #1",
            ss,
            is
        ];
    }
}
class Ig extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ig).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ig).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ig).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ig, t, e);
    }
    static $() {
        return [
            "GrantKeyringPermissionsResponse"
        ];
    }
}
class Cg extends Kr {
    constructor(t){
        super(), this.keyringPublicId = "", this.principalType = ss.UNSPECIFIED, this.principalId = "", this.accessLevel = is.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cg, t, e);
    }
    static $() {
        return [
            "UpdateKeyringPermissionsRequest|1 keyring_public_id 9|2 principal_type #0|3 principal_id 9|4 access_level #1",
            ss,
            is
        ];
    }
}
class bg extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bg, t, e);
    }
    static $() {
        return [
            "UpdateKeyringPermissionsResponse"
        ];
    }
}
class kg extends Kr {
    constructor(t){
        super(), this.keyringPublicId = "", this.principalType = ss.UNSPECIFIED, this.principalId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kg, t, e);
    }
    static $() {
        return [
            "RevokeKeyringPermissionsRequest|1 keyring_public_id 9|2 principal_type #0|3 principal_id 9",
            ss
        ];
    }
}
class vg extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vg, t, e);
    }
    static $() {
        return [
            "RevokeKeyringPermissionsResponse"
        ];
    }
}
class qg extends Kr {
    constructor(t){
        super(), this.callId = "", this.anchorLineId = "", this.startedAtMs = n.protoInt64.zero, this.turns = [], this.userTurnCount = 0, this.assistantTurnCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qg, t, e);
    }
    static $() {
        return [
            "CloudAgentVoiceCall|1 call_id 9|2 anchor_line_id 9|3 anchor_server_line_id 9?|4 started_at_ms 3|5 connected_at_ms 3?|6 ended_at_ms 3?|7 turns #0*|8 user_turn_count 13|9 assistant_turn_count 13|10 last_heard_at_ms 3?",
            Rg
        ];
    }
}
class Rg extends Kr {
    constructor(t){
        super(), this.speaker = Pg.UNSPECIFIED, this.text = "", this.itemId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rg, t, e);
    }
    static $() {
        return [
            "CloudAgentVoiceCall.Turn|1 speaker #0|2 text 9|3 item_id 9",
            Pg
        ];
    }
}
var Pg = (0, o.QT)(n.proto3, Hr, "CloudAgentVoiceCall.Turn.Speaker", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "ASSISTANT"
    ]
], 1);
class Tg extends Kr {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tg, t, e);
    }
    static $() {
        return [
            "SaveCloudAgentVoiceCallRequest|1 bc_id 9|2 call #0",
            qg
        ];
    }
}
class xg extends Kr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xg, t, e);
    }
    static $() {
        return [
            "SaveCloudAgentVoiceCallResponse|1 call #0",
            qg
        ];
    }
}
const Ng = "agent.v1.";
class Dg extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Ng;
    }
}
n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3;
var Ug = (0, o.QT)(n.proto3, Ng, "ResourceScope", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "POD_VM"
    ],
    [
        2,
        "CONTAINER"
    ],
    [
        3,
        "HOST"
    ]
], 1), Qg = (0, o.QT)(n.proto3, Ng, "ResourcePressure", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "HIGH"
    ]
], 1);
class Mg extends Dg {
    constructor(t){
        super(), this.scope = Ug.UNSPECIFIED, this.memoryLimitBytes = n.protoInt64.zero, this.cpuLimitMcores = 0, this.diskLimitBytes = n.protoInt64.zero, this.workspacePath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mg, t, e);
    }
    static $() {
        return [
            "ResourceLimits|1 scope #0|2 memory_limit_bytes 4|3 cpu_limit_mcores 13|4 disk_limit_bytes 4|5 workspace_path 9|6 display_label 9?",
            Ug
        ];
    }
}
class Og extends Dg {
    constructor(t){
        super(), this.sampledAtMs = n.protoInt64.zero, this.memoryUsedBytes = n.protoInt64.zero, this.memoryAvailableBytes = n.protoInt64.zero, this.cpuUsedMcores = 0, this.diskUsedBytes = n.protoInt64.zero, this.pressure = Qg.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Og).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Og).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Og).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Og, t, e);
    }
    static $() {
        return [
            "ResourceSample|1 sampled_at_ms 3|2 memory_used_bytes 4|3 memory_available_bytes 4|4 cpu_used_mcores 13|5 disk_used_bytes 4|6 pressure #0",
            Qg
        ];
    }
}
class Fg extends Dg {
    constructor(t){
        super(), this.history = [], this.nextCursor = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fg, t, e);
    }
    static $() {
        return [
            "GetResourceUsageResponse|1 limits #0|2 current #1|3 history #1*|4 next_cursor 9",
            Mg,
            Og
        ];
    }
}
const Lg = {
    typeName: "aiserver.v1.BackgroundComposerService",
    methods: {
        listBackgroundComposers: {
            name: "ListBackgroundComposers",
            I: Wo,
            O: Ca,
            kind: n.MethodKind.Unary
        },
        listPrBackgroundComposers: {
            name: "ListPrBackgroundComposers",
            I: uo,
            O: co,
            kind: n.MethodKind.Unary
        },
        pinBackgroundComposers: {
            name: "PinBackgroundComposers",
            I: Ja,
            O: Ba,
            kind: n.MethodKind.Unary
        },
        unpinBackgroundComposers: {
            name: "UnpinBackgroundComposers",
            I: Ea,
            O: Ia,
            kind: n.MethodKind.Unary
        },
        attachBackgroundComposer: {
            name: "AttachBackgroundComposer",
            I: ja,
            O: Xa,
            kind: n.MethodKind.ServerStreaming
        },
        streamConversation: {
            name: "StreamConversation",
            I: Za,
            O: iu,
            kind: n.MethodKind.ServerStreaming
        },
        getLatestAgentConversationState: {
            name: "GetLatestAgentConversationState",
            I: yu,
            O: Su,
            kind: n.MethodKind.Unary
        },
        getBlobForAgentKV: {
            name: "GetBlobForAgentKV",
            I: Ju,
            O: Bu,
            kind: n.MethodKind.Unary
        },
        getConversationPage: {
            name: "GetConversationPage",
            I: Eu,
            O: Iu,
            kind: n.MethodKind.Unary
        },
        attachBackgroundComposerLogs: {
            name: "AttachBackgroundComposerLogs",
            I: za,
            O: Wa,
            kind: n.MethodKind.ServerStreaming
        },
        attachAgentStartupTrace: {
            name: "AttachAgentStartupTrace",
            I: qh,
            O: Rh,
            kind: n.MethodKind.ServerStreaming
        },
        startBackgroundComposerFromSnapshot: {
            name: "StartBackgroundComposerFromSnapshot",
            I: Da,
            O: Fa,
            kind: n.MethodKind.Unary
        },
        startCloudOnboarding: {
            name: "StartCloudOnboarding",
            I: La,
            O: Fa,
            kind: n.MethodKind.Unary
        },
        startChangeMonitorOnboarding: {
            name: "StartChangeMonitorOnboarding",
            I: $a,
            O: Fa,
            kind: n.MethodKind.Unary
        },
        startCloudOnboardingHeuristicEnvSetup: {
            name: "StartCloudOnboardingHeuristicEnvSetup",
            I: Ga,
            O: Ha,
            kind: n.MethodKind.Unary
        },
        forkBackgroundComposer: {
            name: "ForkBackgroundComposer",
            I: Ka,
            O: Va,
            kind: n.MethodKind.Unary
        },
        startSideChatBackgroundComposer: {
            name: "StartSideChatBackgroundComposer",
            I: eo,
            O: ro,
            kind: n.MethodKind.Unary
        },
        listBackgroundComposerChildren: {
            name: "ListBackgroundComposerChildren",
            I: no,
            O: so,
            kind: n.MethodKind.Unary
        },
        makePRBackgroundComposer: {
            name: "MakePRBackgroundComposer",
            I: Ho,
            O: Ko,
            kind: n.MethodKind.Unary
        },
        openPRBackgroundComposer: {
            name: "OpenPRBackgroundComposer",
            I: Vo,
            O: zo,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerStatus: {
            name: "GetBackgroundComposerStatus",
            I: Du,
            O: Uu,
            kind: n.MethodKind.Unary
        },
        addAsyncFollowupBackgroundComposer: {
            name: "AddAsyncFollowupBackgroundComposer",
            I: Qu,
            O: Mu,
            kind: n.MethodKind.Unary
        },
        injectBackgroundComposerContext: {
            name: "InjectBackgroundComposerContext",
            I: Ou,
            O: Fu,
            kind: n.MethodKind.Unary
        },
        submitInteractionResponseBackgroundComposer: {
            name: "SubmitInteractionResponseBackgroundComposer",
            I: $u,
            O: Gu,
            kind: n.MethodKind.Unary
        },
        listPendingFollowups: {
            name: "ListPendingFollowups",
            I: Ku,
            O: zu,
            kind: n.MethodKind.Unary
        },
        updatePendingFollowup: {
            name: "UpdatePendingFollowup",
            I: Wu,
            O: Yu,
            kind: n.MethodKind.Unary
        },
        deletePendingFollowup: {
            name: "DeletePendingFollowup",
            I: ju,
            O: Xu,
            kind: n.MethodKind.Unary
        },
        reorderPendingFollowup: {
            name: "ReorderPendingFollowup",
            I: Zu,
            O: tc,
            kind: n.MethodKind.Unary
        },
        submitPendingFollowupNow: {
            name: "SubmitPendingFollowupNow",
            I: ec,
            O: rc,
            kind: n.MethodKind.Unary
        },
        markFollowupEditing: {
            name: "MarkFollowupEditing",
            I: nc,
            O: sc,
            kind: n.MethodKind.Unary
        },
        getCursorServerUrl: {
            name: "GetCursorServerUrl",
            I: Oo,
            O: Fo,
            kind: n.MethodKind.Unary
        },
        warmCursorServerDownload: {
            name: "WarmCursorServerDownload",
            I: $o,
            O: Go,
            kind: n.MethodKind.Unary
        },
        preWarmPod: {
            name: "PreWarmPod",
            I: Ii,
            O: Ci,
            kind: n.MethodKind.Unary
        },
        wakeBackgroundComposer: {
            name: "WakeBackgroundComposer",
            I: bi,
            O: ki,
            kind: n.MethodKind.Unary
        },
        pauseBackgroundComposer: {
            name: "PauseBackgroundComposer",
            I: bo,
            O: ko,
            kind: n.MethodKind.Unary
        },
        cancelBackgroundComposerToolCall: {
            name: "CancelBackgroundComposerToolCall",
            I: vo,
            O: qo,
            kind: n.MethodKind.Unary
        },
        resumeBackgroundComposer: {
            name: "ResumeBackgroundComposer",
            I: Qo,
            O: Mo,
            kind: n.MethodKind.Unary
        },
        archiveBackgroundComposer: {
            name: "ArchiveBackgroundComposer",
            I: Ro,
            O: Po,
            kind: n.MethodKind.Unary
        },
        archiveRepoBackgroundComposers: {
            name: "ArchiveRepoBackgroundComposers",
            I: To,
            O: No,
            kind: n.MethodKind.Unary
        },
        deleteBackgroundComposer: {
            name: "DeleteBackgroundComposer",
            I: Do,
            O: Uo,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerInfo: {
            name: "GetBackgroundComposerInfo",
            I: mc,
            O: Bc,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerEnvironmentVersion: {
            name: "GetBackgroundComposerEnvironmentVersion",
            I: am,
            O: um,
            kind: n.MethodKind.Unary
        },
        getEnvironmentHistory: {
            name: "GetEnvironmentHistory",
            I: pm,
            O: hm,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerTimings: {
            name: "GetBackgroundComposerTimings",
            I: dc,
            O: Ec,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerRepositoryInfo: {
            name: "GetBackgroundComposerRepositoryInfo",
            I: Ic,
            O: Cc,
            kind: n.MethodKind.Unary
        },
        getMachine: {
            name: "GetMachine",
            I: bc,
            O: Tc,
            kind: n.MethodKind.Unary
        },
        listWorkspaceFiles: {
            name: "ListWorkspaceFiles",
            I: xc,
            O: Nc,
            kind: n.MethodKind.Unary
        },
        desktopLease: {
            name: "DesktopLease",
            I: Uc,
            O: Qc,
            kind: n.MethodKind.Unary
        },
        getMachineResourceUsage: {
            name: "GetMachineResourceUsage",
            I: Dc,
            O: Fg,
            kind: n.MethodKind.Unary
        },
        listDetailedBackgroundComposers: {
            name: "ListDetailedBackgroundComposers",
            I: lo,
            O: mo,
            kind: n.MethodKind.Unary
        },
        listCloudAgentRunsForDashboard: {
            name: "ListCloudAgentRunsForDashboard",
            I: go,
            O: _o,
            kind: n.MethodKind.Unary
        },
        aggregateCloudAgentRunsForDashboard: {
            name: "AggregateCloudAgentRunsForDashboard",
            I: yo,
            O: So,
            kind: n.MethodKind.Unary
        },
        getCloudAgentRunForDashboard: {
            name: "GetCloudAgentRunForDashboard",
            I: Jo,
            O: Bo,
            kind: n.MethodKind.Unary
        },
        listCloudAgentRunEventsForDashboard: {
            name: "ListCloudAgentRunEventsForDashboard",
            I: Io,
            O: Co,
            kind: n.MethodKind.Unary
        },
        listNamedAgents: {
            name: "ListNamedAgents",
            I: na,
            O: sa,
            kind: n.MethodKind.Unary
        },
        listNamedAgentSessions: {
            name: "ListNamedAgentSessions",
            I: ia,
            O: oa,
            kind: n.MethodKind.Unary
        },
        listEventSubscriptions: {
            name: "ListEventSubscriptions",
            I: ua,
            O: ca,
            kind: n.MethodKind.Unary
        },
        closeEventSubscription: {
            name: "CloseEventSubscription",
            I: la,
            O: ma,
            kind: n.MethodKind.Unary
        },
        getGithubAccessTokenForRepos: {
            name: "GetGithubAccessTokenForRepos",
            I: Mc,
            O: Oc,
            kind: n.MethodKind.Unary
        },
        makeGithubRequest: {
            name: "MakeGithubRequest",
            I: Lc,
            O: $c,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerDiffDetails: {
            name: "GetBackgroundComposerDiffDetails",
            I: ji,
            O: Zi,
            kind: n.MethodKind.Unary
        },
        getOptimizedDiffDetails: {
            name: "GetOptimizedDiffDetails",
            I: us,
            O: cs,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerChangesHash: {
            name: "GetBackgroundComposerChangesHash",
            I: Wi,
            O: Yi,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerPullRequest: {
            name: "GetBackgroundComposerPullRequest",
            I: Kc,
            O: Vc,
            kind: n.MethodKind.Unary
        },
        refreshGithubAccessTokenInBackgroundComposer: {
            name: "RefreshGithubAccessTokenInBackgroundComposer",
            I: Si,
            O: Ji,
            kind: n.MethodKind.Unary
        },
        createBackgroundComposerPod: {
            name: "CreateBackgroundComposerPod",
            I: Bi,
            O: Ei,
            kind: n.MethodKind.Unary
        },
        attachBackgroundComposerPod: {
            name: "AttachBackgroundComposerPod",
            I: vi,
            O: qi,
            kind: n.MethodKind.ServerStreaming
        },
        createBackgroundComposerPodSnapshot: {
            name: "CreateBackgroundComposerPodSnapshot",
            I: Pi,
            O: Ti,
            kind: n.MethodKind.Unary
        },
        changeBackgroundComposerSnapshotVisibility: {
            name: "ChangeBackgroundComposerSnapshotVisibility",
            I: xi,
            O: Di,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerSnapshotInfo: {
            name: "GetBackgroundComposerSnapshotInfo",
            I: Ui,
            O: Qi,
            kind: n.MethodKind.Unary
        },
        listBackgroundComposerSnapshotsByBcId: {
            name: "ListBackgroundComposerSnapshotsByBcId",
            I: Mi,
            O: Fi,
            kind: n.MethodKind.Unary
        },
        listBackgroundComposerSnapshotStatusesByBcIds: {
            name: "ListBackgroundComposerSnapshotStatusesByBcIds",
            I: Li,
            O: Gi,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerSnapshotState: {
            name: "GetBackgroundComposerSnapshotState",
            I: Hi,
            O: Ki,
            kind: n.MethodKind.Unary
        },
        watchBackgroundComposerSnapshotState: {
            name: "WatchBackgroundComposerSnapshotState",
            I: Vi,
            O: zi,
            kind: n.MethodKind.ServerStreaming
        },
        getBackgroundComposerConversation: {
            name: "GetBackgroundComposerConversation",
            I: Gc,
            O: Hc,
            kind: n.MethodKind.Unary
        },
        renameBackgroundComposer: {
            name: "RenameBackgroundComposer",
            I: fs,
            O: ps,
            kind: n.MethodKind.Unary
        },
        saveCloudAgentVoiceCall: {
            name: "SaveCloudAgentVoiceCall",
            I: Tg,
            O: xg,
            kind: n.MethodKind.Unary
        },
        updateProjectAppearance: {
            name: "UpdateProjectAppearance",
            I: As,
            O: _s,
            kind: n.MethodKind.Unary
        },
        seedStagedProjects: {
            name: "SeedStagedProjects",
            I: Es,
            O: Is,
            kind: n.MethodKind.Unary
        },
        listStagedProjects: {
            name: "ListStagedProjects",
            I: bs,
            O: ks,
            kind: n.MethodKind.Unary
        },
        dismissStagedProject: {
            name: "DismissStagedProject",
            I: vs,
            O: qs,
            kind: n.MethodKind.Unary
        },
        previewStagedProjects: {
            name: "PreviewStagedProjects",
            I: Rs,
            O: Ls,
            kind: n.MethodKind.Unary
        },
        deleteStagedProjects: {
            name: "DeleteStagedProjects",
            I: Ps,
            O: Ts,
            kind: n.MethodKind.Unary
        },
        publishBackgroundComposerTempRepo: {
            name: "PublishBackgroundComposerTempRepo",
            I: Gs,
            O: Ks,
            kind: n.MethodKind.Unary
        },
        reparentBackgroundComposer: {
            name: "ReparentBackgroundComposer",
            I: Vs,
            O: zs,
            kind: n.MethodKind.Unary
        },
        setWorkerManager: {
            name: "SetWorkerManager",
            I: Ws,
            O: Ys,
            kind: n.MethodKind.Unary
        },
        createProjectWorker: {
            name: "CreateProjectWorker",
            I: js,
            O: Xs,
            kind: n.MethodKind.Unary
        },
        clearWorkerManager: {
            name: "ClearWorkerManager",
            I: Zs,
            O: ti,
            kind: n.MethodKind.Unary
        },
        listWorkersForManager: {
            name: "ListWorkersForManager",
            I: ei,
            O: ni,
            kind: n.MethodKind.Unary
        },
        listProjectSubtrees: {
            name: "ListProjectSubtrees",
            I: si,
            O: ui,
            kind: n.MethodKind.Unary
        },
        streamBackgroundComposerUpdates: {
            name: "StreamBackgroundComposerUpdates",
            I: pi,
            O: hi,
            kind: n.MethodKind.ServerStreaming
        },
        updateBackgroundComposerExperimentalModelOptOut: {
            name: "UpdateBackgroundComposerExperimentalModelOptOut",
            I: yi,
            O: wi,
            kind: n.MethodKind.Unary
        },
        commitBackgroundComposer: {
            name: "CommitBackgroundComposer",
            I: zc,
            O: Wc,
            kind: n.MethodKind.Unary
        },
        setPersonalEnvironmentJson: {
            name: "SetPersonalEnvironmentJson",
            I: Xc,
            O: Zc,
            kind: n.MethodKind.Unary
        },
        getPersonalEnvironmentJson: {
            name: "GetPersonalEnvironmentJson",
            I: tl,
            O: el,
            kind: n.MethodKind.Unary
        },
        getEnvironmentJsonCandidates: {
            name: "GetEnvironmentJsonCandidates",
            I: rl,
            O: nl,
            kind: n.MethodKind.Unary
        },
        listPersonalEnvironments: {
            name: "ListPersonalEnvironments",
            I: sl,
            O: ol,
            kind: n.MethodKind.Unary
        },
        deletePersonalEnvironmentJson: {
            name: "DeletePersonalEnvironmentJson",
            I: al,
            O: ul,
            kind: n.MethodKind.Unary
        },
        publishEnvironment: {
            name: "PublishEnvironment",
            I: cl,
            O: ll,
            kind: n.MethodKind.Unary
        },
        publishPersonalEnvironment: {
            name: "PublishPersonalEnvironment",
            I: ml,
            O: dl,
            kind: n.MethodKind.Unary
        },
        listTeamEnvironments: {
            name: "ListTeamEnvironments",
            I: fl,
            O: hl,
            kind: n.MethodKind.Unary
        },
        deleteTeamEnvironment: {
            name: "DeleteTeamEnvironment",
            I: gm,
            O: Am,
            kind: n.MethodKind.Unary
        },
        setTeamEnvironmentJson: {
            name: "SetTeamEnvironmentJson",
            I: wm,
            O: Sm,
            kind: n.MethodKind.Unary
        },
        restoreEnvironmentVersion: {
            name: "RestoreEnvironmentVersion",
            I: _m,
            O: ym,
            kind: n.MethodKind.Unary
        },
        listEnvironments: {
            name: "ListEnvironments",
            I: gl,
            O: _l,
            kind: n.MethodKind.Unary
        },
        getEnvironment: {
            name: "GetEnvironment",
            I: yl,
            O: wl,
            kind: n.MethodKind.Unary
        },
        renameEnvironment: {
            name: "RenameEnvironment",
            I: Sl,
            O: Jl,
            kind: n.MethodKind.Unary
        },
        migrateEnvironmentToOrigin: {
            name: "MigrateEnvironmentToOrigin",
            I: Bl,
            O: El,
            kind: n.MethodKind.Unary
        },
        duplicateEnvironment: {
            name: "DuplicateEnvironment",
            I: Il,
            O: Cl,
            kind: n.MethodKind.Unary
        },
        listEnvironmentBuilds: {
            name: "ListEnvironmentBuilds",
            I: ql,
            O: Rl,
            kind: n.MethodKind.Unary
        },
        getEnvironmentActiveBuild: {
            name: "GetEnvironmentActiveBuild",
            I: Pl,
            O: Tl,
            kind: n.MethodKind.Unary
        },
        getEnvironmentPersistentRecurringBuildFailures: {
            name: "GetEnvironmentPersistentRecurringBuildFailures",
            I: xl,
            O: Nl,
            kind: n.MethodKind.Unary
        },
        getEnvironmentBuild: {
            name: "GetEnvironmentBuild",
            I: Ul,
            O: Ql,
            kind: n.MethodKind.Unary
        },
        getEnvironmentBuildConfig: {
            name: "GetEnvironmentBuildConfig",
            I: Ml,
            O: Ol,
            kind: n.MethodKind.Unary
        },
        updateEnvironmentBuild: {
            name: "UpdateEnvironmentBuild",
            I: Fl,
            O: Ll,
            kind: n.MethodKind.Unary
        },
        triggerEnvironmentBuild: {
            name: "TriggerEnvironmentBuild",
            I: $l,
            O: Gl,
            kind: n.MethodKind.Unary
        },
        attachEnvironmentBuildLog: {
            name: "AttachEnvironmentBuildLog",
            I: Hl,
            O: Kl,
            kind: n.MethodKind.ServerStreaming
        },
        cancelEnvironmentBuild: {
            name: "CancelEnvironmentBuild",
            I: Vl,
            O: zl,
            kind: n.MethodKind.Unary
        },
        getEnvironmentBuildSettings: {
            name: "GetEnvironmentBuildSettings",
            I: Yl,
            O: jl,
            kind: n.MethodKind.Unary
        },
        updateEnvironmentBuildSettings: {
            name: "UpdateEnvironmentBuildSettings",
            I: Xl,
            O: Zl,
            kind: n.MethodKind.Unary
        },
        resolveOrCreateMultiRepoEnvironment: {
            name: "ResolveOrCreateMultiRepoEnvironment",
            I: tm,
            O: em,
            kind: n.MethodKind.Unary
        },
        resolveOrCreateDraftEnvironment: {
            name: "ResolveOrCreateDraftEnvironment",
            I: rm,
            O: nm,
            kind: n.MethodKind.Unary
        },
        snapshotAndSaveEnvironment: {
            name: "SnapshotAndSaveEnvironment",
            I: Jm,
            O: Im,
            kind: n.MethodKind.Unary
        },
        listReposWithLocalEnvironment: {
            name: "ListReposWithLocalEnvironment",
            I: Cm,
            O: km,
            kind: n.MethodKind.Unary
        },
        markBackgroundComposerRead: {
            name: "MarkBackgroundComposerRead",
            I: vm,
            O: qm,
            kind: n.MethodKind.Unary
        },
        markBackgroundComposerUnread: {
            name: "MarkBackgroundComposerUnread",
            I: Rm,
            O: Pm,
            kind: n.MethodKind.Unary
        },
        advanceBackgroundComposerReadCursor: {
            name: "AdvanceBackgroundComposerReadCursor",
            I: Tm,
            O: xm,
            kind: n.MethodKind.Unary
        },
        notifyBackgroundComposerShown: {
            name: "NotifyBackgroundComposerShown",
            I: ms,
            O: ds,
            kind: n.MethodKind.Unary
        },
        fetchBackgroundComposer: {
            name: "FetchBackgroundComposer",
            I: Nm,
            O: Dm,
            kind: n.MethodKind.Unary
        },
        getTurnSummaryBackgroundComposer: {
            name: "GetTurnSummaryBackgroundComposer",
            I: Um,
            O: Qm,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerName: {
            name: "GetBackgroundComposerName",
            I: Mm,
            O: Om,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerPrompt: {
            name: "GetBackgroundComposerPrompt",
            I: Fm,
            O: Lm,
            kind: n.MethodKind.Unary
        },
        readBinaryFile: {
            name: "ReadBinaryFile",
            I: Ym,
            O: jm,
            kind: n.MethodKind.Unary
        },
        listBackgroundComposerArtifacts: {
            name: "ListBackgroundComposerArtifacts",
            I: $m,
            O: Hm,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerArtifact: {
            name: "GetBackgroundComposerArtifact",
            I: Km,
            O: Vm,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerArtifactBytes: {
            name: "GetBackgroundComposerArtifactBytes",
            I: zm,
            O: Wm,
            kind: n.MethodKind.Unary
        },
        streamBackgroundComposerArtifact: {
            name: "StreamBackgroundComposerArtifact",
            I: Xm,
            O: Zm,
            kind: n.MethodKind.ServerStreaming
        },
        listSharedBackgroundComposerArtifacts: {
            name: "ListSharedBackgroundComposerArtifacts",
            I: ed,
            O: rd,
            kind: n.MethodKind.Unary
        },
        shareBackgroundComposerArtifact: {
            name: "ShareBackgroundComposerArtifact",
            I: nd,
            O: sd,
            kind: n.MethodKind.Unary
        },
        unshareBackgroundComposerArtifact: {
            name: "UnshareBackgroundComposerArtifact",
            I: id,
            O: od,
            kind: n.MethodKind.Unary
        },
        getPublicBackgroundComposerArtifact: {
            name: "GetPublicBackgroundComposerArtifact",
            I: ad,
            O: ud,
            kind: n.MethodKind.Unary
        },
        updateBackgroundComposerUserSettings: {
            name: "UpdateBackgroundComposerUserSettings",
            I: hd,
            O: gd,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerUserSettings: {
            name: "GetBackgroundComposerUserSettings",
            I: Ad,
            O: _d,
            kind: n.MethodKind.Unary
        },
        updateBackgroundComposerEnvironment: {
            name: "UpdateBackgroundComposerEnvironment",
            I: os,
            O: as,
            kind: n.MethodKind.Unary
        },
        getRepositoryBranches: {
            name: "GetRepositoryBranches",
            I: yd,
            O: wd,
            kind: n.MethodKind.Unary
        },
        getRepositoryDefaultBranch: {
            name: "GetRepositoryDefaultBranch",
            I: Jd,
            O: Bd,
            kind: n.MethodKind.Unary
        },
        getPullRequestMergeStatus: {
            name: "GetPullRequestMergeStatus",
            I: Ed,
            O: Id,
            kind: n.MethodKind.Unary
        },
        getDetailedPullRequestStatus: {
            name: "GetDetailedPullRequestStatus",
            I: Cd,
            O: vd,
            kind: n.MethodKind.Unary
        },
        checkPullRequestMergeability: {
            name: "CheckPullRequestMergeability",
            I: Pd,
            O: Td,
            kind: n.MethodKind.Unary
        },
        getPullRequestDiscussions: {
            name: "GetPullRequestDiscussions",
            I: Md,
            O: Od,
            kind: n.MethodKind.Unary
        },
        getPullRequestCommits: {
            name: "GetPullRequestCommits",
            I: Fd,
            O: Ld,
            kind: n.MethodKind.Unary
        },
        getPullRequestTimelineEvents: {
            name: "GetPullRequestTimelineEvents",
            I: $d,
            O: Gd,
            kind: n.MethodKind.Unary
        },
        replyToReviewThread: {
            name: "ReplyToReviewThread",
            I: Vd,
            O: zd,
            kind: n.MethodKind.Unary
        },
        resolveReviewThread: {
            name: "ResolveReviewThread",
            I: Wd,
            O: Yd,
            kind: n.MethodKind.Unary
        },
        unresolveReviewThread: {
            name: "UnresolveReviewThread",
            I: jd,
            O: Xd,
            kind: n.MethodKind.Unary
        },
        deletePullRequestReviewComment: {
            name: "DeletePullRequestReviewComment",
            I: Zd,
            O: tf,
            kind: n.MethodKind.Unary
        },
        addPullRequestReviewComment: {
            name: "AddPullRequestReviewComment",
            I: ef,
            O: rf,
            kind: n.MethodKind.Unary
        },
        mergePullRequest: {
            name: "MergePullRequest",
            I: nf,
            O: sf,
            kind: n.MethodKind.Unary
        },
        enablePullRequestAutoMerge: {
            name: "EnablePullRequestAutoMerge",
            I: of,
            O: af,
            kind: n.MethodKind.Unary
        },
        disablePullRequestAutoMerge: {
            name: "DisablePullRequestAutoMerge",
            I: uf,
            O: cf,
            kind: n.MethodKind.Unary
        },
        convertPullRequestFromDraft: {
            name: "ConvertPullRequestFromDraft",
            I: bf,
            O: kf,
            kind: n.MethodKind.Unary
        },
        updatePullRequestBranch: {
            name: "UpdatePullRequestBranch",
            I: vf,
            O: qf,
            kind: n.MethodKind.Unary
        },
        registerPushNotificationToken: {
            name: "RegisterPushNotificationToken",
            I: mf,
            O: df,
            kind: n.MethodKind.Unary
        },
        deletePushNotificationToken: {
            name: "DeletePushNotificationToken",
            I: ff,
            O: pf,
            kind: n.MethodKind.Unary
        },
        resolveOriginAgentApproval: {
            name: "ResolveOriginAgentApproval",
            I: hf,
            O: gf,
            kind: n.MethodKind.Unary
        },
        getOriginAgentApproval: {
            name: "GetOriginAgentApproval",
            I: Af,
            O: _f,
            kind: n.MethodKind.Unary
        },
        syncLiveActivity: {
            name: "SyncLiveActivity",
            I: Sf,
            O: Jf,
            kind: n.MethodKind.Unary
        },
        deleteLiveActivity: {
            name: "DeleteLiveActivity",
            I: Bf,
            O: Ef,
            kind: n.MethodKind.Unary
        },
        verifyBackgroundComposerAccess: {
            name: "VerifyBackgroundComposerAccess",
            I: If,
            O: Cf,
            kind: n.MethodKind.Unary
        },
        startSlackStreamingForFollowup: {
            name: "StartSlackStreamingForFollowup",
            I: ic,
            O: oc,
            kind: n.MethodKind.Unary
        },
        startGithubStreamingForFollowup: {
            name: "StartGithubStreamingForFollowup",
            I: ac,
            O: uc,
            kind: n.MethodKind.Unary
        },
        startLinearStreamingForFollowup: {
            name: "StartLinearStreamingForFollowup",
            I: cc,
            O: lc,
            kind: n.MethodKind.Unary
        },
        getGithubInstallations: {
            name: "GetGithubInstallations",
            I: vr.kcC,
            O: vr.UYU,
            kind: n.MethodKind.Unary
        },
        fetchAllInstallationRepos: {
            name: "FetchAllInstallationRepos",
            I: vr.UfC,
            O: vr.gJO,
            kind: n.MethodKind.Unary
        },
        getBackgroundComposerVmUsage: {
            name: "GetBackgroundComposerVmUsage",
            I: Lf,
            O: $f,
            kind: n.MethodKind.Unary
        },
        getCloudAgentDebugDetails: {
            name: "GetCloudAgentDebugDetails",
            I: Hf,
            O: Yf,
            kind: n.MethodKind.Unary
        },
        getCloudAgentMemoryDbLogs: {
            name: "GetCloudAgentMemoryDbLogs",
            I: Ap,
            O: _p,
            kind: n.MethodKind.Unary
        },
        createAgentShare: {
            name: "CreateAgentShare",
            I: wp,
            O: Sp,
            kind: n.MethodKind.Unary
        },
        getAgentSharePreview: {
            name: "GetAgentSharePreview",
            I: Jp,
            O: Bp,
            kind: n.MethodKind.Unary
        },
        listPrivateWorkers: {
            name: "ListPrivateWorkers",
            I: Ep,
            O: Ip,
            kind: n.MethodKind.Unary
        },
        listPrivateWorkerPools: {
            name: "ListPrivateWorkerPools",
            I: eh,
            O: rh,
            kind: n.MethodKind.Unary
        },
        listPlacementGrants: {
            name: "ListPlacementGrants",
            I: lh,
            O: mh,
            kind: n.MethodKind.Unary
        },
        updatePlacementGrants: {
            name: "UpdatePlacementGrants",
            I: dh,
            O: fh,
            kind: n.MethodKind.Unary
        },
        registerPrivateWorkerPool: {
            name: "RegisterPrivateWorkerPool",
            I: ph,
            O: hh,
            kind: n.MethodKind.Unary
        },
        deregisterPrivateWorkerPool: {
            name: "DeregisterPrivateWorkerPool",
            I: gh,
            O: Ah,
            kind: n.MethodKind.Unary
        },
        adminListUserPrivateWorkers: {
            name: "AdminListUserPrivateWorkers",
            I: Cp,
            O: bp,
            kind: n.MethodKind.Unary
        },
        adminKillBackgroundComposer: {
            name: "AdminKillBackgroundComposer",
            I: kp,
            O: vp,
            kind: n.MethodKind.Unary
        },
        adminSettleInteraction: {
            name: "AdminSettleInteraction",
            I: qp,
            O: Rp,
            kind: n.MethodKind.Unary
        },
        adminUnparkFollowups: {
            name: "AdminUnparkFollowups",
            I: Pp,
            O: Tp,
            kind: n.MethodKind.Unary
        },
        adminListActiveBackgroundComposers: {
            name: "AdminListActiveBackgroundComposers",
            I: Np,
            O: Dp,
            kind: n.MethodKind.Unary
        },
        adminKillAllActiveBackgroundComposers: {
            name: "AdminKillAllActiveBackgroundComposers",
            I: Up,
            O: Mp,
            kind: n.MethodKind.Unary
        },
        listPendingPrivateWorkerRequests: {
            name: "ListPendingPrivateWorkerRequests",
            I: Op,
            O: Fp,
            kind: n.MethodKind.Unary
        },
        streamPendingPrivateWorkerRequests: {
            name: "StreamPendingPrivateWorkerRequests",
            I: Gp,
            O: Hp,
            kind: n.MethodKind.ServerStreaming
        },
        claimPendingPrivateWorkerRequest: {
            name: "ClaimPendingPrivateWorkerRequest",
            I: Kp,
            O: Vp,
            kind: n.MethodKind.Unary
        },
        releasePrivateWorkerClaim: {
            name: "ReleasePrivateWorkerClaim",
            I: zp,
            O: Wp,
            kind: n.MethodKind.Unary
        },
        getPrivateWorkersSummary: {
            name: "GetPrivateWorkersSummary",
            I: yh,
            O: wh,
            kind: n.MethodKind.Unary
        },
        getPrivateWorker: {
            name: "GetPrivateWorker",
            I: Eh,
            O: Ih,
            kind: n.MethodKind.Unary
        },
        releasePrivateWorker: {
            name: "ReleasePrivateWorker",
            I: Ch,
            O: bh,
            kind: n.MethodKind.Unary
        },
        batchRefreshPullRequestStatus: {
            name: "BatchRefreshPullRequestStatus",
            I: kh,
            O: vh,
            kind: n.MethodKind.Unary
        },
        listAgentStores: {
            name: "ListAgentStores",
            I: Ct,
            O: qt,
            kind: n.MethodKind.Unary
        },
        listAgentStoreEntries: {
            name: "ListAgentStoreEntries",
            I: Rt,
            O: Tt,
            kind: n.MethodKind.Unary
        },
        readAgentStoreFile: {
            name: "ReadAgentStoreFile",
            I: xt,
            O: Nt,
            kind: n.MethodKind.Unary
        },
        writeAgentStoreDocument: {
            name: "WriteAgentStoreDocument",
            I: Mt,
            O: Ot,
            kind: n.MethodKind.Unary
        },
        setAgentStoreDocumentVisibility: {
            name: "SetAgentStoreDocumentVisibility",
            I: Ut,
            O: Qt,
            kind: n.MethodKind.Unary
        },
        mintAgentStoreToken: {
            name: "MintAgentStoreToken",
            I: Ft,
            O: Lt,
            kind: n.MethodKind.Unary
        },
        writeCanvas: {
            name: "WriteCanvas",
            I: Nh,
            O: Qh,
            kind: n.MethodKind.Unary
        },
        readCanvas: {
            name: "ReadCanvas",
            I: Mh,
            O: Lh,
            kind: n.MethodKind.Unary
        },
        listAgentStoreFiles: {
            name: "ListAgentStoreFiles",
            I: Gt,
            O: Ht,
            kind: n.MethodKind.Unary
        },
        listAgentStoreDirectory: {
            name: "ListAgentStoreDirectory",
            I: Vt,
            O: zt,
            kind: n.MethodKind.Unary
        },
        checkAgentStoreVersions: {
            name: "CheckAgentStoreVersions",
            I: Wt,
            O: jt,
            kind: n.MethodKind.Unary
        },
        presignAgentStoreReads: {
            name: "PresignAgentStoreReads",
            I: ee,
            O: re,
            kind: n.MethodKind.Unary
        },
        presignAgentStoreWrites: {
            name: "PresignAgentStoreWrites",
            I: me,
            O: de,
            kind: n.MethodKind.Unary
        },
        completeAgentStoreMultipartWrites: {
            name: "CompleteAgentStoreMultipartWrites",
            I: he,
            O: ye,
            kind: n.MethodKind.Unary
        },
        abortAgentStoreMultipartWrites: {
            name: "AbortAgentStoreMultipartWrites",
            I: Se,
            O: Ee,
            kind: n.MethodKind.Unary
        },
        presignPromptUpload: {
            name: "PresignPromptUpload",
            I: Gh,
            O: Hh,
            kind: n.MethodKind.Unary
        },
        completePromptUpload: {
            name: "CompletePromptUpload",
            I: Vh,
            O: zh,
            kind: n.MethodKind.Unary
        },
        abortPromptUpload: {
            name: "AbortPromptUpload",
            I: Wh,
            O: Yh,
            kind: n.MethodKind.Unary
        },
        acquireAgentStoreFileLock: {
            name: "AcquireAgentStoreFileLock",
            I: Ce,
            O: be,
            kind: n.MethodKind.Unary
        },
        renewAgentStoreFileLock: {
            name: "RenewAgentStoreFileLock",
            I: ke,
            O: ve,
            kind: n.MethodKind.Unary
        },
        releaseAgentStoreFileLock: {
            name: "ReleaseAgentStoreFileLock",
            I: qe,
            O: Re,
            kind: n.MethodKind.Unary
        },
        getAgentStoreFileLock: {
            name: "GetAgentStoreFileLock",
            I: Pe,
            O: Te,
            kind: n.MethodKind.Unary
        },
        deleteAgentStoreFiles: {
            name: "DeleteAgentStoreFiles",
            I: De,
            O: Ue,
            kind: n.MethodKind.Unary
        },
        rmdirAgentStore: {
            name: "RmdirAgentStore",
            I: Qe,
            O: Me,
            kind: n.MethodKind.Unary
        },
        undeleteAgentStoreFiles: {
            name: "UndeleteAgentStoreFiles",
            I: Le,
            O: $e,
            kind: n.MethodKind.Unary
        },
        listAgentStoreTombstones: {
            name: "ListAgentStoreTombstones",
            I: Ge,
            O: He,
            kind: n.MethodKind.Unary
        },
        shareAgentStore: {
            name: "ShareAgentStore",
            I: Ve,
            O: ze,
            kind: n.MethodKind.Unary
        },
        unshareAgentStore: {
            name: "UnshareAgentStore",
            I: We,
            O: Ye,
            kind: n.MethodKind.Unary
        },
        listSharedAgentStores: {
            name: "ListSharedAgentStores",
            I: je,
            O: Ze,
            kind: n.MethodKind.Unary
        },
        provisionSyntheticsServiceAccounts: {
            name: "ProvisionSyntheticsServiceAccounts",
            I: jf,
            O: Zf,
            kind: n.MethodKind.Unary
        },
        startCloudAgentLoadTest: {
            name: "StartCloudAgentLoadTest",
            I: ep,
            O: rp,
            kind: n.MethodKind.Unary
        },
        ensureModelRoutingLoadTestStarted: {
            name: "EnsureModelRoutingLoadTestStarted",
            I: np,
            O: sp,
            kind: n.MethodKind.Unary
        },
        cancelModelRoutingLoadTest: {
            name: "CancelModelRoutingLoadTest",
            I: ip,
            O: op,
            kind: n.MethodKind.Unary
        },
        mintCustomerPrivatelinkProxyToken: {
            name: "MintCustomerPrivatelinkProxyToken",
            I: ap,
            O: up,
            kind: n.MethodKind.Unary
        },
        listCustomerPrivatelinkAllowedHosts: {
            name: "ListCustomerPrivatelinkAllowedHosts",
            I: cp,
            O: lp,
            kind: n.MethodKind.Unary
        },
        adminListTeamNamedAgents: {
            name: "AdminListTeamNamedAgents",
            I: mp,
            O: pp,
            kind: n.MethodKind.Unary
        },
        adminDeleteNamedAgent: {
            name: "AdminDeleteNamedAgent",
            I: hp,
            O: gp,
            kind: n.MethodKind.Unary
        },
        listKeyrings: {
            name: "ListKeyrings",
            I: Xh,
            O: Zh,
            kind: n.MethodKind.Unary
        },
        getKeyring: {
            name: "GetKeyring",
            I: tg,
            O: eg,
            kind: n.MethodKind.Unary
        },
        createKeyring: {
            name: "CreateKeyring",
            I: rg,
            O: ng,
            kind: n.MethodKind.Unary
        },
        createKeyringFromTeamSecrets: {
            name: "CreateKeyringFromTeamSecrets",
            I: sg,
            O: ig,
            kind: n.MethodKind.Unary
        },
        copyTeamSecretsToKeyring: {
            name: "CopyTeamSecretsToKeyring",
            I: og,
            O: ag,
            kind: n.MethodKind.Unary
        },
        renameKeyring: {
            name: "RenameKeyring",
            I: ug,
            O: cg,
            kind: n.MethodKind.Unary
        },
        deleteKeyring: {
            name: "DeleteKeyring",
            I: lg,
            O: mg,
            kind: n.MethodKind.Unary
        },
        listKeyringSecrets: {
            name: "ListKeyringSecrets",
            I: fg,
            O: pg,
            kind: n.MethodKind.Unary
        },
        createKeyringSecret: {
            name: "CreateKeyringSecret",
            I: hg,
            O: gg,
            kind: n.MethodKind.Unary
        },
        updateKeyringSecret: {
            name: "UpdateKeyringSecret",
            I: Ag,
            O: _g,
            kind: n.MethodKind.Unary
        },
        revokeKeyringSecret: {
            name: "RevokeKeyringSecret",
            I: yg,
            O: wg,
            kind: n.MethodKind.Unary
        },
        listKeyringGrants: {
            name: "ListKeyringGrants",
            I: Jg,
            O: Bg,
            kind: n.MethodKind.Unary
        },
        grantKeyringPermissions: {
            name: "GrantKeyringPermissions",
            I: Eg,
            O: Ig,
            kind: n.MethodKind.Unary
        },
        updateKeyringPermissions: {
            name: "UpdateKeyringPermissions",
            I: Cg,
            O: bg,
            kind: n.MethodKind.Unary
        },
        revokeKeyringPermissions: {
            name: "RevokeKeyringPermissions",
            I: kg,
            O: vg,
            kind: n.MethodKind.Unary
        }
    }
};
