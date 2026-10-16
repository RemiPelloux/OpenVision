"use strict";
require.d(exports, {
    $Y: ()=>U,
    D9: ()=>q,
    Fu: ()=>N,
    Kg: ()=>j,
    Kw: ()=>K,
    Mq: ()=>W,
    Nv: ()=>$,
    S1: ()=>H,
    VA: ()=>F,
    Ye: ()=>G,
    w5: ()=>V,
    yT: ()=>z
});
var n = require("./module-36038.js"), s = require("./module-62671.js"), o = require("./module-19950.js"), i = require("./module-19260.js"), a = require("./module-59903.js"), c = require("./module-88623.js"), l = require("./module-72730.js"), u = require("./module-26885.js"), d = require("./module-89396.js"), p = require("./module-11197.js"), m = require("./module-44498.js"), h = require("./module-31489.js"), f = require("./module-11531.js"), g = require("./module-43643.js"), y = require("./module-12544.js"), w = require("./module-18846.js"), v = require("./module-91448.js"), _ = require("./module-82589.js"), b = require("./module-88107.js"), S = require("./module-83508.js"), k = require("./module-67918.js"), x = require("./module-39857.js"), E = require("./module-83407.js"), I = require("./module-98837.js"), T = require("./module-43464.js"), C = require("./module-71125.js"), P = require("./module-83426.js"), A = require("./module-53996.js"), R = require("./module-43081.js"), M = require("./module-88701.js"), J = require("./module-21180.js"), O = require("./module-70355.js"), B = require("./module-8592.js");
class D extends B.HL {
    static get runtime() {
        return (0, B.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class q extends D {
    constructor(e){
        super(), this.id = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new q).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new q).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new q).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(q, e, t);
    }
    static $() {
        return [
            "ExecClientStreamClose|1 id 13"
        ];
    }
}
class N extends D {
    constructor(e){
        super(), this.id = 0, this.error = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new N).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new N).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new N).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(N, e, t);
    }
    static $() {
        return [
            "ExecClientThrow|1 id 13|2 error 9|3 stack_trace 9?|4 error_code 9?"
        ];
    }
}
class F extends D {
    constructor(e){
        super(), this.id = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new F).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new F).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new F).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(F, e, t);
    }
    static $() {
        return [
            "ExecClientHeartbeat|1 id 13"
        ];
    }
}
class U extends D {
    constructor(e){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new U).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new U).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new U).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(U, e, t);
    }
    static $() {
        return [
            "ExecClientControlMessage|1 stream_close #0 message|2 throw #1 message|3 heartbeat #2 message",
            q,
            N,
            F
        ];
    }
}
class L extends D {
    constructor(e){
        super(), this.id = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new L).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new L).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new L).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(L, e, t);
    }
    static $() {
        return [
            "ExecServerAbort|1 id 13"
        ];
    }
}
class $ extends D {
    constructor(e){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($, e, t);
    }
    static $() {
        return [
            "ExecServerControlMessage|1 abort #0 message",
            L
        ];
    }
}
class j extends D {
    constructor(e){
        super(), this.traceId = "", this.spanId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new j).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new j).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new j).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(j, e, t);
    }
    static $() {
        return [
            "SpanContext|1 trace_id 9|2 span_id 9|3 trace_flags 13?|4 trace_state 9?"
        ];
    }
}
class G extends D {
    constructor(e){
        super(), this.id = 0, this.execId = "", this.message = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new G).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new G).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new G).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(G, e, t);
    }
    static $() {
        return [
            "ExecServerMessage|1 id 13|15 exec_id 9|57 machine_id 9?|2 shell_args #0 message|3 write_args #1 message|4 delete_args #2 message|5 grep_args #3 message|7 read_args #4 message|29 redacted_read_args #4 message|8 ls_args #5 message|9 diagnostics_args #6 message|10 request_context_args #7 message|11 mcp_args #8 message|14 shell_stream_args #0 message|16 background_shell_spawn_args #9 message|17 list_mcp_resources_exec_args #10 message|18 read_mcp_resource_exec_args #11 message|36 mcp_state_exec_args #12 message|20 fetch_args #13 message|21 record_screen_args #14 message|22 computer_use_args #15 message|23 write_shell_stdin_args #16 message|27 execute_hook_args #17 message|28 subagent_args #18 message|30 force_background_shell_args #19 message|31 force_background_subagent_args #20 message|37 subagent_await_args #21 message|38 smart_mode_classifier_args #22 message|40 canvas_diagnostics_args #23 message|41 shell_allowlist_precheck_args #24 message|42 mcp_allowlist_precheck_args #25 message|43 web_fetch_allowlist_precheck_args #26 message|44 git_diff_request #27 message|45 pi_read_args #28 message|46 pi_bash_args #29 message|47 pi_edit_args #30 message|48 pi_write_args #31 message|49 pi_grep_args #32 message|50 pi_find_args #33 message|51 pi_ls_args #34 message|52 mini_swe_agent_bash_args #0 message|53 conversation_search_args #35 message|54 agent_store_conflict_args #36 message|19 span_context #37?|55 accept_hook_additional_contexts 8?",
            s.a,
            o.hY,
            i.dn,
            a.Qj,
            c.a2,
            l.xe,
            u._B,
            d._K,
            p.E_,
            m.$P,
            p.kj,
            p.DI,
            p.Km,
            h.UM,
            f.zH,
            g.K5,
            m.LL,
            W,
            y.Pw,
            s.Hu,
            y.S3,
            y.TN,
            w.Th,
            v.yN,
            _.C,
            b.c,
            S.K,
            k.Vq,
            x.cE,
            E.CU,
            I.yZ,
            T.VA,
            C.gK,
            P.Vo,
            A.D8,
            R.$m,
            M.Uz,
            j
        ];
    }
}
class z extends D {
    constructor(e){
        super(), this.id = 0, this.execId = "", this.hookAdditionalContexts = [], this.message = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new z).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new z).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new z).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(z, e, t);
    }
    static $() {
        return [
            "ExecClientMessage|1 id 13|15 exec_id 9|39 local_execution_time_ms 5?|45 hook_additional_contexts #0*|2 shell_result #1 message|3 write_result #2 message|4 delete_result #3 message|5 grep_result #4 message|7 read_result #5 message|29 redacted_read_result #5 message|8 ls_result #6 message|9 diagnostics_result #7 message|10 request_context_result #8 message|11 mcp_result #9 message|14 shell_stream #10 message|16 background_shell_spawn_result #11 message|17 list_mcp_resources_exec_result #12 message|18 read_mcp_resource_exec_result #13 message|36 mcp_state_exec_result #14 message|20 fetch_result #15 message|21 record_screen_result #16 message|22 computer_use_result #17 message|23 write_shell_stdin_result #18 message|27 execute_hook_result #19 message|28 subagent_result #20 message|30 force_background_shell_result #21 message|31 force_background_subagent_result #22 message|37 subagent_await_result #23 message|38 smart_mode_classifier_result #24 message|40 canvas_diagnostics_result #25 message|41 shell_allowlist_precheck_result #26 message|42 mcp_allowlist_precheck_result #27 message|43 web_fetch_allowlist_precheck_result #28 message|44 git_diff_response #29 message|46 pi_read_result #30 message|47 pi_bash_result #31 message|48 pi_edit_result #32 message|49 pi_write_result #33 message|50 pi_grep_result #34 message|51 pi_find_result #35 message|52 pi_ls_result #36 message|53 conversation_search_result #37 message|54 agent_store_conflict_result #38 message|55 mini_swe_agent_bash_result #1 message",
            J.C,
            s.W4,
            o.v3,
            i.Pi,
            a.Ud,
            c.sV,
            l.fv,
            u.Ek,
            d._G,
            p.iz,
            s.FI,
            m.Lt,
            p.kP,
            p.ZD,
            p._W,
            h.uN,
            f.Tj,
            g.ks,
            m.nt,
            H,
            y.vS,
            s.jK,
            y.a3,
            y.zJ,
            w.bN,
            v.GL,
            _.e,
            b.M,
            S.M,
            k.df,
            x.Q,
            E.AH,
            I.u7,
            T.hO,
            C.mr,
            P.bT,
            A.pX,
            R.pT,
            M.Ev
        ];
    }
}
class W extends D {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new W).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new W).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new W).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(W, e, t);
    }
    static $() {
        return [
            "ExecuteHookArgs|1 request #0",
            K
        ];
    }
}
class H extends D {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new H).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new H).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new H).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(H, e, t);
    }
    static $() {
        return [
            "ExecuteHookResult|1 response #0",
            V
        ];
    }
}
class K extends D {
    constructor(e){
        super(), this.request = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new K).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new K).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new K).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(K, e, t);
    }
    static $() {
        return [
            "ExecuteHookRequest|1 pre_compact #0 request|2 subagent_start #1 request|3 subagent_stop #2 request|4 pre_tool_use #3 request|5 post_tool_use #4 request|6 post_tool_use_failure #5 request|7 before_submit_prompt #6 request|8 after_agent_response #7 request|9 after_agent_thought #8 request|11 stop #9 request",
            O.Ks,
            O.b3,
            O.ty,
            O.CI,
            O.rY,
            O.hy,
            O.D2,
            O.mL,
            O.AL,
            O.Od
        ];
    }
}
class V extends D {
    constructor(e){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new V).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new V).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new V).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(V, e, t);
    }
    static $() {
        return [
            "ExecuteHookResponse|1 pre_compact #0 response|2 subagent_start #1 response|3 subagent_stop #2 response|4 pre_tool_use #3 response|5 post_tool_use #4 response|6 post_tool_use_failure #5 response|7 before_submit_prompt #6 response|8 after_agent_response #7 response|9 after_agent_thought #8 response|11 stop #9 response",
            O.$_,
            O.W0,
            O.AH,
            O.Wn,
            O.uB,
            O.U1,
            O.u1,
            O.FW,
            O.H,
            O.rT
        ];
    }
}
