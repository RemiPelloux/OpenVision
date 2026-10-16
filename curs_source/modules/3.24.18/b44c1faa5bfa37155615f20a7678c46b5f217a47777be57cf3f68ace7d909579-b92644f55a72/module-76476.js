"use strict";
require.d(exports, {
    $3: ()=>d,
    AU: ()=>E,
    DU: ()=>f,
    DY: ()=>I,
    HL: ()=>w,
    K$: ()=>_,
    Kc: ()=>b,
    N9: ()=>v,
    PE: ()=>y,
    Ur: ()=>S,
    Xd: ()=>u,
    Xt: ()=>g,
    YP: ()=>p,
    ex: ()=>m,
    ix: ()=>h,
    sO: ()=>A
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
const o = "agent.v1.";
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
    }
}
var a = (0, s.QT)(n.proto3, o, "MergePrMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MERGE"
    ],
    [
        2,
        "AUTO"
    ],
    [
        3,
        "DISABLE_AUTO"
    ]
], 1), c = (0, s.QT)(n.proto3, o, "MergePrMethod", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MERGE"
    ],
    [
        2,
        "SQUASH"
    ]
], 1), l = (0, s.QT)(n.proto3, o, "PullRequestStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "OPEN"
    ],
    [
        2,
        "CLOSED"
    ]
], 1);
class u extends i {
    constructor(e){
        super(), this.toolCallId = "", this.action = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new u).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new u).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new u).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(u, e, t);
    }
    static $() {
        return [
            "PrManagementArgs|1 tool_call_id 9|2 create_pr #0 action|3 update_pr #1 action|4 post_comment #2 action|5 resolve_comment #3 action|6 get_ci_status #4 action|7 set_pr_status #5 action|8 merge_pr #6 action",
            d,
            p,
            m,
            h,
            f,
            g,
            y
        ];
    }
}
class d extends i {
    constructor(e){
        super(), this.title = "", this.body = "", this.branchName = "", this.addLabels = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new d).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new d).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new d).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(d, e, t);
    }
    static $() {
        return [
            "CreatePrAction|1 title 9|2 body 9|3 base_branch 9?|4 draft 8?|5 branch_name 9|6 add_labels 9*|7 repo_url 9?|8 skip_branch_prefix_check 8?|9 stack_on_pr_number 3?"
        ];
    }
}
class p extends i {
    constructor(e){
        super(), this.addLabels = [], this.removeLabels = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new p).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new p).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new p).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(p, e, t);
    }
    static $() {
        return [
            "UpdatePrAction|1 pr_url 9?|2 title 9?|3 body 9?|4 base_branch 9?|5 branch_name 9?|6 add_labels 9*|7 remove_labels 9*|8 repo_url 9?|9 stack_on_pr_number 3?|10 clear_stack 8?|11 draft 8?"
        ];
    }
}
class m extends i {
    constructor(e){
        super(), this.body = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new m).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new m).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new m).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(m, e, t);
    }
    static $() {
        return [
            "PostCommentAction|1 pr_url 9?|2 branch_name 9?|3 body 9|4 repo_url 9?|5 in_reply_to 3?|6 path 9?|7 line 5?|8 start_line 5?|9 side 9?|10 reply_to_reference 9?"
        ];
    }
}
class h extends i {
    constructor(e){
        super(), this.commentId = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new h).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new h).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new h).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(h, e, t);
    }
    static $() {
        return [
            "ResolveCommentAction|1 pr_url 9?|2 branch_name 9?|3 comment_id 3|4 repo_url 9?|5 comment_reference 9?"
        ];
    }
}
class f extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new f).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new f).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new f).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(f, e, t);
    }
    static $() {
        return [
            "GetCiStatusAction|1 pr_url 9?|2 branch_name 9?|3 repo_url 9?"
        ];
    }
}
class g extends i {
    constructor(e){
        super(), this.status = l.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new g).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new g).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new g).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(g, e, t);
    }
    static $() {
        return [
            "SetPrStatusAction|1 pr_url 9?|2 branch_name 9?|3 repo_url 9?|4 status #0",
            l
        ];
    }
}
class y extends i {
    constructor(e){
        super(), this.mode = a.UNSPECIFIED, this.method = c.UNSPECIFIED, this.expectedMemberHeadShas = {}, this.downstack = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new y).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new y).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new y).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(y, e, t);
    }
    static $() {
        return [
            "MergePrAction|1 pr_url 9?|2 branch_name 9?|3 repo_url 9?|4 mode #0|5 method #1|6 expected_head_sha 9?|7 expected_member_head_shas 9,9|8 downstack 8",
            a,
            c
        ];
    }
}
class w extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new w).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new w).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new w).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(w, e, t);
    }
    static $() {
        return [
            "PrManagementResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 registered #3 result|5 needs_confirmation #4 result",
            v,
            _,
            A,
            S,
            b
        ];
    }
}
class v extends i {
    constructor(e){
        super(), this.prUrl = "", this.prNumber = 0, this.message = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new v).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new v).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new v).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(v, e, t);
    }
    static $() {
        return [
            "PrManagementSuccess|1 pr_url 9|2 pr_number 5|3 message 9"
        ];
    }
}
class _ extends i {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_, e, t);
    }
    static $() {
        return [
            "PrManagementError|1 error 9"
        ];
    }
}
class A extends i {
    constructor(e){
        super(), this.reason = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new A).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new A).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new A).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(A, e, t);
    }
    static $() {
        return [
            "PrManagementRejected|1 reason 9"
        ];
    }
}
class S extends i {
    constructor(e){
        super(), this.message = "", this.title = "", this.body = "", this.branchName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new S).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new S).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new S).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(S, e, t);
    }
    static $() {
        return [
            "PrManagementRegistered|1 message 9|2 title 9|3 body 9|4 base_branch 9?|5 draft 8?|6 branch_name 9"
        ];
    }
}
class b extends i {
    constructor(e){
        super(), this.message = "", this.discoveredPrUrl = "", this.discoveredPrNumber = 0, this.discoveredPrTitle = "", this.branchName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new b).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new b).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new b).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(b, e, t);
    }
    static $() {
        return [
            "PrManagementNeedsConfirmation|1 message 9|2 discovered_pr_url 9|3 discovered_pr_number 5|4 discovered_pr_title 9|5 branch_name 9"
        ];
    }
}
class E extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new E).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new E).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new E).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(E, e, t);
    }
    static $() {
        return [
            "PrManagementToolCall|1 args #0|2 result #1",
            u,
            w
        ];
    }
}
class I extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new I).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new I).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new I).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(I, e, t);
    }
    static $() {
        return [
            "PrManagementRequestQuery|1 args #0",
            u
        ];
    }
}
