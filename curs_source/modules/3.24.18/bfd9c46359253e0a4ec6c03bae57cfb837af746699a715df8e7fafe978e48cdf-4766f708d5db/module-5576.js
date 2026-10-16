"use strict";
require.d(exports, {
    GF: ()=>T,
    aq: ()=>I,
    kK: ()=>u
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
const o = "aiserver.v1.";
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
    }
}
var a = (0, s.QT)(n.proto3, o, "UsageEventKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USAGE_BASED"
    ],
    [
        2,
        "USER_API_KEY"
    ],
    [
        3,
        "INCLUDED_IN_PRO"
    ],
    [
        4,
        "INCLUDED_IN_BUSINESS"
    ],
    [
        5,
        "ERRORED_NOT_CHARGED"
    ],
    [
        6,
        "ABORTED_NOT_CHARGED"
    ],
    [
        7,
        "CUSTOM_SUBSCRIPTION"
    ],
    [
        8,
        "INCLUDED_IN_PRO_PLUS"
    ],
    [
        9,
        "INCLUDED_IN_ULTRA"
    ],
    [
        10,
        "FREE_CREDIT"
    ]
], 1);
class c extends i {
    constructor(e){
        super(), this.modelId = "", this.maxMode = !1, this.parameters = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new c).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new c).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new c).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(c, e, t);
    }
    static $() {
        return [
            "ModelSelectionSnapshot|1 model_id 9|2 max_mode 8|3 parameters #0*",
            l
        ];
    }
}
class l extends i {
    constructor(e){
        super(), this.id = "", this.value = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new l).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new l).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new l).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(l, e, t);
    }
    static $() {
        return [
            "ModelSelectionSnapshot.ModelParameterValue|1 id 9|2 value 9"
        ];
    }
}
class u extends i {
    constructor(e){
        super(), this.feature = {
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
            "UsageEventDetails|1 chat #0 feature|2 context_chat #1 feature|3 cmd_k #2 feature|4 terminal_cmd_k #3 feature|5 ai_review_accepted_comment #4 feature|6 interpreter_chat #5 feature|7 slash_edit #6 feature|8 composer #7 feature|9 fast_apply #8 feature|10 warm_composer #9 feature|11 bug_finder_trigger_v1 #10 feature|12 tool_call_composer #11 feature|14 bug_bot #12 feature|15 prompt_hook #13 feature|20 agent_sdk_managed #14?|13 override_num_requests_counted 5?|16 override_num_requests_counted_millis 5?|17 routed_model 9?|18 requested_model_selection #15?|19 effective_model_selection #15?",
            h,
            v,
            _,
            b,
            S,
            k,
            x,
            g,
            f,
            w,
            p,
            y,
            m,
            d,
            E,
            c
        ];
    }
}
class d extends i {
    constructor(e){
        super(), this.modelIntent = "", n.proto3.util.initPartial(e, this);
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
            "UsageEventDetails.PromptHook|1 model_intent 9|2 token_usage #0?|3 max_mode 8?|4 is_token_based_call 8?",
            C
        ];
    }
}
class p extends i {
    constructor(e){
        super(), this.inBackgroundSubsidized = !1, this.costCents = 0, this.isFast = !1, n.proto3.util.initPartial(e, this);
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
            "UsageEventDetails.BugFinderTriggerV1|1 in_background_subsidized 8|2 cost_cents 5|3 is_fast 8"
        ];
    }
}
class m extends i {
    constructor(e){
        super(), this.modelIntent = "", this.isTokenBasedCall = !1, this.maxMode = !1, this.discount = {
            case: void 0
        }, this.billingMode = "", n.proto3.util.initPartial(e, this);
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
            "UsageEventDetails.BugBot|1 model_intent 9|2 token_usage #0|3 is_token_based_call 8|4 max_mode 8|5 no_discount #1 discount|6 free #1 discount|7 billing_mode 9",
            C,
            n.Empty
        ];
    }
}
class h extends i {
    constructor(e){
        super(), this.modelIntent = "", n.proto3.util.initPartial(e, this);
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
            "UsageEventDetails.Chat|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?",
            C
        ];
    }
}
class f extends i {
    constructor(e){
        super(), this.isOptimistic = !1, this.willingToPayExtraForSpeed = !1, n.proto3.util.initPartial(e, this);
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
            "UsageEventDetails.FastApply|1 is_optimistic 8|2 willing_to_pay_extra_for_speed 8"
        ];
    }
}
class g extends i {
    constructor(e){
        super(), this.modelIntent = "", n.proto3.util.initPartial(e, this);
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
            "UsageEventDetails.Composer|1 model_intent 9|2 override_num_requests_counted 5?|3 is_headless 8?|4 is_token_based_call 8?|5 token_usage #0?|6 max_mode 8?",
            C
        ];
    }
}
class y extends i {
    constructor(e){
        super(), this.modelIntent = "", n.proto3.util.initPartial(e, this);
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
            "UsageEventDetails.ToolCallComposer|1 model_intent 9|2 override_num_requests_counted 5?|3 is_headless 8?|4 is_token_based_call 8?|5 token_usage #0?|6 max_mode 8?",
            C
        ];
    }
}
class w extends i {
    constructor(e){
        super(), this.modelIntent = "", n.proto3.util.initPartial(e, this);
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
            "UsageEventDetails.WarmComposer|1 model_intent 9|2 max_mode 8?"
        ];
    }
}
class v extends i {
    constructor(e){
        super(), this.modelIntent = "", n.proto3.util.initPartial(e, this);
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
            "UsageEventDetails.ContextChat|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?",
            C
        ];
    }
}
class _ extends i {
    constructor(e){
        super(), this.modelIntent = "", n.proto3.util.initPartial(e, this);
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
            "UsageEventDetails.CmdK|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?",
            C
        ];
    }
}
class b extends i {
    constructor(e){
        super(), this.modelIntent = "", n.proto3.util.initPartial(e, this);
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
            "UsageEventDetails.TerminalCmdK|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?",
            C
        ];
    }
}
class S extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "UsageEventDetails.AiReviewAcceptedComment"
        ];
    }
}
class k extends i {
    constructor(e){
        super(), this.modelIntent = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new k).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new k).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new k).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(k, e, t);
    }
    static $() {
        return [
            "UsageEventDetails.InterpreterChat|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?",
            C
        ];
    }
}
class x extends i {
    constructor(e){
        super(), this.modelIntent = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new x).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new x).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new x).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(x, e, t);
    }
    static $() {
        return [
            "UsageEventDetails.SlashEdit|1 model_intent 9|2 max_mode 8?"
        ];
    }
}
class E extends i {
    constructor(e){
        super(), this.managedType = "", this.applicationSlug = "", n.proto3.util.initPartial(e, this);
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
            "UsageEventDetails.AgentSdkManagedProduct|1 managed_type 9|2 application_slug 9"
        ];
    }
}
class I extends i {
    constructor(e){
        super(), this.timestamp = n.protoInt64.zero, this.isSlow = !1, this.status = "", n.proto3.util.initPartial(e, this);
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
            "UsageEvent|1 timestamp 3|2 details #0|3 subscription_product_id 9?|4 usage_price_id 9?|5 is_slow 8|6 status 9|7 owning_user 9?|8 owning_team 9?|9 price_cents 2?|10 team_membership_type 9?",
            u
        ];
    }
}
class T extends i {
    constructor(e){
        super(), this.timestamp = n.protoInt64.zero, this.model = "", this.kind = a.UNSPECIFIED, this.maxMode = !1, this.requestsCosts = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new T).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new T).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new T).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(T, e, t);
    }
    static $() {
        return [
            "UsageEventDisplay|1 timestamp 3|2 model 9|3 kind #0|4 custom_subscription_name 9?|5 max_mode 8|6 requests_costs 2|7 usage_based_costs 9?|8 is_token_based_call 8?|9 token_usage #1?|10 owning_user 9?|11 owning_team 9?|12 user_email 9?|13 cursor_token_fee 2?|14 is_chargeable 8?|15 service_account_name 9?|16 service_account_id 9?|17 is_headless 8?|18 charged_cents 2?|19 cloud_agent_id 9?|20 automation_id 9?|21 automation_managed_type 9?|22 client_type 9?|23 conversation_id 9?|24 subscription_product_id 9?|25 pr_author 9?|26 repo 9?|27 pr_number 5?",
            a,
            C
        ];
    }
}
class C extends i {
    constructor(e){
        super(), this.inputTokens = 0, this.outputTokens = 0, this.cacheWriteTokens = 0, this.cacheReadTokens = 0, this.totalCents = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new C).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new C).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new C).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(C, e, t);
    }
    static $() {
        return [
            "TokenUsage|1 input_tokens 5|2 output_tokens 5|3 cache_write_tokens 5|4 cache_read_tokens 5|5 total_cents 2|6 discount_percent_off 5?|7 enterprise_usage_discount_percent 2?"
        ];
    }
}
