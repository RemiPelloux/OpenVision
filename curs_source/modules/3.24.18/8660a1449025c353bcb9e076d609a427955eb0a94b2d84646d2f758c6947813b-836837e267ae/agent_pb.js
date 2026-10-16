import { HDo, wpd } from "./ai_attribution_tool_pb.js";
import { NDo, zei } from "./apply_agent_diff_tool_pb.js";
import { Nve, Smn, kmn, o5o } from "./ask_question_tool_pb.js";
import { T_d, dIy } from "./await_tool_pb.js";
import { R_d, hIy } from "./blame_by_file_path_tool_pb.js";
import { dSd, oSd, xIy } from "./cloud_canvas_tool_pb.js";
import { G_d, mIy } from "./communicate_update_tool_pb.js";
import { Jei, v3o } from "./computer_use_tool_pb.js";
import { $5o, ibt, kSr, myd } from "./connect_scm_tool_pb.js";
import { Lyd, Ryd, Xyd, Zyd, jyd, qyd } from "./coordinator_tools_pb.js";
import { Evd, H4t, ebt, uSr } from "./create_plan_tool_pb.js";
import { L4t, qyr } from "./delete_tool_pb.js";
import { fIy, sbd } from "./edit_pr_labels_tool_pb.js";
import { BOo, U4t, Wte } from "./edit_tool_pb.js";
import { Cbd, bIy } from "./fetch_cloud_agent_data_tool_pb.js";
import { Nvd, aIy } from "./fetch_tool_pb.js";
import { BDo, Hbr, U_t, ypd } from "./generate_image_tool_pb.js";
import { AIy, fSd } from "./generate_video_tool_pb.js";
import { M5o, N_d } from "./get_mcp_tools_tool_pb.js";
import { Wti, z_t } from "./glob_tool_pb.js";
import { Cyd, byd, l5e, wyd } from "./goal_tool_pb.js";
import { F4t, o5e } from "./grep_tool_pb.js";
import { f4t, jei } from "./hook_additional_context_pb.js";
import { eSr, j4t } from "./ls_tool_pb.js";
import { Cmn, pY, x5o, y_d } from "./mcp_auth_tool_pb.js";
import { Q_t, mmn, rSr } from "./mcp_pb.js";
import { Avd, r5o, s5o } from "./mcp_resource_tool_pb.js";
import { fmn, ttt } from "./mcp_tool_pb.js";
import { Lbd, kIy } from "./pi_bash_tool_pb.js";
import { jbd, zbd } from "./pi_edit_tool_pb.js";
import { TIy, ryd } from "./pi_find_tool_pb.js";
import { CIy, Jbd } from "./pi_grep_tool_pb.js";
import { EIy, cyd } from "./pi_ls_tool_pb.js";
import { Rbd, SIy } from "./pi_read_tool_pb.js";
import { Vbd, wIy } from "./pi_write_tool_pb.js";
import { __d, b_d, fni, w5o } from "./pr_management_tool_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { jOo, svd } from "./read_lints_tool_pb.js";
import { IAe, X_t } from "./read_tool_pb.js";
import { hbd, vIy } from "./record_ci_investigation_findings_tool_pb.js";
import { Bvd, f5o } from "./record_screen_tool_pb.js";
import { Gvd, lIy } from "./reflect_tool_pb.js";
import { D5o, J_d, ebd, vSr, vni } from "./replace_env_tool_pb.js";
import { U_d, pIy } from "./report_bug_tool_pb.js";
import { efd, tfd } from "./report_bugfix_results_tool_pb.js";
import { Gte, ISr, K5o, mY } from "./request_context_exec_pb.js";
import { AD, SQ, ott, rtt, stt } from "./requested_model_pb.js";
import { IIy, gyd } from "./search_conversations_tool_pb.js";
import { Rj, gY } from "./selected_context_pb.js";
import { QOo, Tvd } from "./semsearch_tool_pb.js";
import { Y_d, gIy } from "./send_final_summary_tool_pb.js";
import { _Iy, bbd } from "./send_message_tool_pb.js";
import { Abd, yIy } from "./send_to_user_tool_pb.js";
import { _5o, b5o, dni, qvd } from "./setup_vm_environment_tool_pb.js";
import { $te, Aj, Bbr, RDo, Ubr, jbr } from "./shell_exec_pb.js";
import { AOo, Kse, N4t } from "./shell_tool_pb.js";
import { Xvd, cIy } from "./start_grind_execution_tool_pb.js";
import { t_d, uIy } from "./start_grind_planning_tool_pb.js";
import { Kei, S4t, TAe, bQ, hY, zse } from "./subagents_pb.js";
import { a5e, g5o, m5o, uni } from "./switch_mode_tool_pb.js";
import { TSr, yni } from "./system_prompt_pb.js";
import { Wfd, Zet, zti } from "./todo_tool_pb.js";
import { E } from "./tslib.es6.js";
import { gni, i_d, nbt, pSr } from "./web_fetch_tool_pb.js";
import { G4t, bmn, xvd, ymn } from "./web_search_tool_pb.js";
import { Uvd, v5o } from "./write_shell_stdin_tool_pb.js";
import { RIy, wSd } from "./x_search_tool_pb.js";
var t2, Rmn, sbt, mFo, _P, e1d, Gde, hc, g7, Pmn, Rni, t1d, obt, gFo, n1d, i1d, r1d, s1d, o1d, abt, Pni, Kke, att, fFo, a1d, l1d, c1d, u1d, d1d, Hm, h1d, p1d, m1d, g1d, f1d, vFo, iz, MI, NSr, _Fo, LSr, bFo, v1d, yFo, SFo, kFo, OSr, Mni, wFo, _1d, b1d, y1d, FSr, CFo, S1d, k1d, w1d, C1d, T1d, E1d, I1d, d5e, TFo, EFo, Mmn, BSr, x1d, A1d, R1d, P1d, M1d, D1d, N1d, USr, jSr, $Sr, HSr, Dmn, IFo, Nmn, xFo, WSr, L1d, O1d, X4t, AFo, RFo, GSr, F1d, Z4t, PFo, MFo, t0, DFo, NFo, LFo, lbt, qSr, OFo, B1d, zSr, VSr, Dni, fY, Q4t, U1d, j1d, $1d, FFo, H1d, W1d, G1d, q1d, BFo, UFo, z1d, jFo, V1d, K1d, $Fo, Y1d, J4t, HFo, X1d, nf, Z1d, Nni, Ove, e9t, WFo, GFo, t9t, Q1d, n9t, cbt, KSr, YSr, Lni, Oni, qFo, zFo, VFo, XSr, KFo, YFo, Fni, ZSr, XFo, ZFo, QFo, JFo, e6o, t6o, J1d, n6o, ekd, tkd, nkd, ikd, rkd, ok, skd, okd, akd, i9t, P5, lkd, ltt;
export { $1d, $Fo, $Sr, A1d, AFo, B1d, BFo, BSr, C1d, CFo, D1d, DFo, Dmn, Dni, E1d, EFo, F1d, FFo, FSr, Fni, G1d, GFo, GSr, Gde, H1d, HFo, HSr, Hm, I1d, IFo, J1d, J4t, JFo, K1d, KFo, KSr, Kke, L1d, LFo, LSr, Lni, M1d, MFo, MI, Mmn, Mni, N1d, NFo, NSr, Nmn, Nni, O1d, OFo, OSr, Oni, Ove, P1d, P5, PFo, Pmn, Pni, Q1d, Q4t, QFo, R1d, RFo, Rmn, Rni, S1d, SFo, T1d, TFo, U1d, UFo, USr, V1d, VFo, VSr, W1d, WFo, WSr, X1d, X4t, XFo, XSr, Y1d, YFo, YSr, Z1d, Z4t, ZFo, ZSr, _1d, _Fo, _P, a1d, abt, akd, att, b1d, bFo, c1d, cbt, d1d, d5e, e1d, e6o, e9t, ekd, f1d, fFo, fY, g1d, g7, gFo, h1d, hc, i1d, i9t, ikd, iz, j1d, jFo, jSr, k1d, kFo, l1d, lbt, lkd, ltt, m1d, mFo, n1d, n6o, n9t, nf, nkd, o1d, obt, ok, okd, p1d, q1d, qFo, qSr, r1d, rkd, s1d, sbt, skd, t0, t1d, t2, t6o, t9t, tkd, u1d, v1d, vFo, w1d, wFo, x1d, xFo, y1d, yFo, z1d, zFo, zSr };
var __wakaru_ju_initialized = false;
export function ju() {
if (__wakaru_ju_initialized) return;
__wakaru_ju_initialized = true;
"use strict";
E(), hr(), bQ(), N4t(), qyr(), Wti(), F4t(), X_t(), Zet(), U4t(), eSr(), svd(), fmn(), Tvd(), ebt(), ymn(), Avd(), zei(), kmn(), aIy(), uni(), U_t(), Bvd(), Jei(), Uvd(), lIy(), b5o(), cIy(), uIy(), gni(), tfd(), HDo(), w5o(), Cmn(), dIy(), hIy(), N_d(), pIy(), mIy(), gIy(), vSr(), fIy(), vIy(), _Iy(), bIy(), yIy(), SIy(), kIy(), zbd(), wIy(), CIy(), TIy(), EIy(), kSr(), IIy(), Cyd(), Zyd(), xIy(), AIy(), RIy(), jei(), Gte(), $te(), Rj(), SQ(), Q_t(), TSr(), t2 = x.makeEnum("agent.v1.AgentMode", [
    {
        no: 0,
        name: "AGENT_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_MODE_AGENT",
        localName: "AGENT"
    },
    {
        no: 2,
        name: "AGENT_MODE_ASK",
        localName: "ASK"
    },
    {
        no: 3,
        name: "AGENT_MODE_PLAN",
        localName: "PLAN"
    },
    {
        no: 4,
        name: "AGENT_MODE_DEBUG",
        localName: "DEBUG"
    },
    {
        no: 5,
        name: "AGENT_MODE_TRIAGE",
        localName: "TRIAGE"
    },
    {
        no: 7,
        name: "AGENT_MODE_MULTITASK",
        localName: "MULTITASK"
    },
    {
        no: 8,
        name: "AGENT_MODE_CUSTOM",
        localName: "CUSTOM"
    }
]), Rmn = x.makeEnum("agent.v1.BackgroundTaskKind", [
    {
        no: 0,
        name: "BACKGROUND_TASK_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_TASK_KIND_SHELL",
        localName: "SHELL"
    },
    {
        no: 2,
        name: "BACKGROUND_TASK_KIND_SUBAGENT",
        localName: "SUBAGENT"
    }
]), sbt = x.makeEnum("agent.v1.BackgroundTaskStatus", [
    {
        no: 0,
        name: "BACKGROUND_TASK_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_TASK_STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "BACKGROUND_TASK_STATUS_ERROR",
        localName: "ERROR"
    },
    {
        no: 3,
        name: "BACKGROUND_TASK_STATUS_ABORTED",
        localName: "ABORTED"
    }
]), mFo = x.makeEnum("agent.v1.BackgroundTaskNotificationContext", [
    {
        no: 0,
        name: "BACKGROUND_TASK_NOTIFICATION_CONTEXT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_TASK_NOTIFICATION_CONTEXT_USER_DRIVEN_INTERACTIVE_CHILD",
        localName: "USER_DRIVEN_INTERACTIVE_CHILD"
    }
]), _P = x.makeEnum("agent.v1.SubagentRunStatus", [
    {
        no: 0,
        name: "SUBAGENT_RUN_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBAGENT_RUN_STATUS_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 2,
        name: "SUBAGENT_RUN_STATUS_BACKGROUNDED",
        localName: "BACKGROUNDED"
    },
    {
        no: 3,
        name: "SUBAGENT_RUN_STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 4,
        name: "SUBAGENT_RUN_STATUS_ERROR",
        localName: "ERROR"
    },
    {
        no: 5,
        name: "SUBAGENT_RUN_STATUS_ABORTED",
        localName: "ABORTED"
    }
]), e1d = x.makeEnum("agent.v1.SubagentDispatchTool", [
    {
        no: 0,
        name: "SUBAGENT_DISPATCH_TOOL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBAGENT_DISPATCH_TOOL_TASK",
        localName: "TASK"
    },
    {
        no: 2,
        name: "SUBAGENT_DISPATCH_TOOL_CREATE_AGENT",
        localName: "CREATE_AGENT"
    },
    {
        no: 3,
        name: "SUBAGENT_DISPATCH_TOOL_SEND_TO_AGENT",
        localName: "SEND_TO_AGENT"
    }
]), Gde = x.makeEnum("agent.v1.CustomModeSource", [
    {
        no: 0,
        name: "CUSTOM_MODE_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CUSTOM_MODE_SOURCE_AGENT_SKILL",
        localName: "AGENT_SKILL"
    },
    {
        no: 2,
        name: "CUSTOM_MODE_SOURCE_PLUGIN_SKILL",
        localName: "PLUGIN_SKILL"
    },
    {
        no: 3,
        name: "CUSTOM_MODE_SOURCE_REPO_SKILL",
        localName: "REPO_SKILL"
    },
    {
        no: 4,
        name: "CUSTOM_MODE_SOURCE_MANAGED_SKILL",
        localName: "MANAGED_SKILL"
    }
]), hc = x.makeEnum("agent.v1.SimulatedMsgReason", [
    {
        no: 0,
        name: "SIMULATED_MSG_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SIMULATED_MSG_REASON_PLAN_EXECUTION",
        localName: "PLAN_EXECUTION"
    },
    {
        no: 2,
        name: "SIMULATED_MSG_REASON_COMMIT_REMINDER",
        localName: "COMMIT_REMINDER"
    },
    {
        no: 3,
        name: "SIMULATED_MSG_REASON_BACKGROUND_TASK_COMPLETION",
        localName: "BACKGROUND_TASK_COMPLETION"
    },
    {
        no: 4,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_COMMIT",
        localName: "DIFF_TAB_COMMIT"
    },
    {
        no: 5,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_COMMIT_AND_PUSH",
        localName: "DIFF_TAB_COMMIT_AND_PUSH"
    },
    {
        no: 6,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_PUSH",
        localName: "DIFF_TAB_PUSH"
    },
    {
        no: 7,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_CREATE_PR",
        localName: "DIFF_TAB_CREATE_PR"
    },
    {
        no: 8,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_FIX_MERGE_CONFLICTS",
        localName: "DIFF_TAB_FIX_MERGE_CONFLICTS"
    },
    {
        no: 9,
        name: "SIMULATED_MSG_REASON_USER_SENT_TO_SUBAGENT",
        localName: "USER_SENT_TO_SUBAGENT"
    },
    {
        no: 10,
        name: "SIMULATED_MSG_REASON_USER_INTERRUPTED_SUBAGENT",
        localName: "USER_INTERRUPTED_SUBAGENT"
    },
    {
        no: 11,
        name: "SIMULATED_MSG_REASON_USER_QUEUED_TO_SUBAGENT",
        localName: "USER_QUEUED_TO_SUBAGENT"
    },
    {
        no: 12,
        name: "SIMULATED_MSG_REASON_BABYSIT_PR_IN_CLOUD",
        localName: "BABYSIT_PR_IN_CLOUD"
    },
    {
        no: 13,
        name: "SIMULATED_MSG_REASON_CI_PANEL_INVESTIGATE_FAILURE",
        localName: "CI_PANEL_INVESTIGATE_FAILURE"
    },
    {
        no: 14,
        name: "SIMULATED_MSG_REASON_MULTITASK",
        localName: "MULTITASK"
    },
    {
        no: 15,
        name: "SIMULATED_MSG_REASON_BUILD_IN_PARALLEL",
        localName: "BUILD_IN_PARALLEL"
    },
    {
        no: 16,
        name: "SIMULATED_MSG_REASON_MULTITASK_SPLIT_PRS",
        localName: "MULTITASK_SPLIT_PRS"
    },
    {
        no: 17,
        name: "SIMULATED_MSG_REASON_APPLY_LOCALLY",
        localName: "APPLY_LOCALLY"
    },
    {
        no: 18,
        name: "SIMULATED_MSG_REASON_CHECKOUT_BRANCH",
        localName: "CHECKOUT_BRANCH"
    },
    {
        no: 19,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_UPDATE_BRANCH",
        localName: "DIFF_TAB_UPDATE_BRANCH"
    },
    {
        no: 20,
        name: "SIMULATED_MSG_REASON_PR_TAB_BUGBOT_FIX",
        localName: "PR_TAB_BUGBOT_FIX"
    },
    {
        no: 22,
        name: "SIMULATED_MSG_REASON_RUN_BUGBOT_REVIEW",
        localName: "RUN_BUGBOT_REVIEW"
    },
    {
        no: 23,
        name: "SIMULATED_MSG_REASON_RUN_SECURITY_REVIEW",
        localName: "RUN_SECURITY_REVIEW"
    },
    {
        no: 24,
        name: "SIMULATED_MSG_REASON_FSD_APPLY_FINDING",
        localName: "FSD_APPLY_FINDING"
    },
    {
        no: 25,
        name: "SIMULATED_MSG_REASON_FSD_UNDO_FINDING",
        localName: "FSD_UNDO_FINDING"
    },
    {
        no: 26,
        name: "SIMULATED_MSG_REASON_FSD_START",
        localName: "FSD_START"
    },
    {
        no: 27,
        name: "SIMULATED_MSG_REASON_FSD_PR_INTERRUPT",
        localName: "FSD_PR_INTERRUPT"
    },
    {
        no: 28,
        name: "SIMULATED_MSG_REASON_SUBSCRIPTION",
        localName: "SUBSCRIPTION"
    },
    {
        no: 29,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_CREATE_BRANCH",
        localName: "DIFF_TAB_CREATE_BRANCH"
    },
    {
        no: 30,
        name: "SIMULATED_MSG_REASON_AGENT_STORE_CONFLICT",
        localName: "AGENT_STORE_CONFLICT"
    },
    {
        no: 31,
        name: "SIMULATED_MSG_REASON_GOAL_CONTINUATION",
        localName: "GOAL_CONTINUATION"
    },
    {
        no: 32,
        name: "SIMULATED_MSG_REASON_PROJECT_KICKOFF",
        localName: "PROJECT_KICKOFF"
    },
    {
        no: 33,
        name: "SIMULATED_MSG_REASON_MARKDOWN_PROMPT_BUTTON",
        localName: "MARKDOWN_PROMPT_BUTTON"
    },
    {
        no: 34,
        name: "SIMULATED_MSG_REASON_USER_QUICK_ACTION",
        localName: "USER_QUICK_ACTION"
    },
    {
        no: 35,
        name: "SIMULATED_MSG_REASON_INTERACTION_RESPONSE",
        localName: "INTERACTION_RESPONSE"
    }
]), g7 = x.makeEnum("agent.v1.SubscriptionSource", [
    {
        no: 0,
        name: "SUBSCRIPTION_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBSCRIPTION_SOURCE_SLACK",
        localName: "SLACK"
    },
    {
        no: 2,
        name: "SUBSCRIPTION_SOURCE_GITHUB",
        localName: "GITHUB"
    },
    {
        no: 3,
        name: "SUBSCRIPTION_SOURCE_LINEAR",
        localName: "LINEAR"
    },
    {
        no: 4,
        name: "SUBSCRIPTION_SOURCE_ORIGIN",
        localName: "ORIGIN"
    },
    {
        no: 5,
        name: "SUBSCRIPTION_SOURCE_FACTORY",
        localName: "FACTORY"
    }
]), Pmn = x.makeEnum("agent.v1.ThinkingStyle", [
    {
        no: 0,
        name: "THINKING_STYLE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "THINKING_STYLE_DEFAULT",
        localName: "DEFAULT"
    },
    {
        no: 2,
        name: "THINKING_STYLE_CODEX",
        localName: "CODEX"
    },
    {
        no: 3,
        name: "THINKING_STYLE_GPT5",
        localName: "GPT5"
    }
]), Rni = x.makeEnum("agent.v1.ResponseComparisonDisplayOrder", [
    {
        no: 0,
        name: "RESPONSE_COMPARISON_DISPLAY_ORDER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESPONSE_COMPARISON_DISPLAY_ORDER_PARENT_FIRST",
        localName: "PARENT_FIRST"
    },
    {
        no: 2,
        name: "RESPONSE_COMPARISON_DISPLAY_ORDER_ALTERNATE_FIRST",
        localName: "ALTERNATE_FIRST"
    }
]), t1d = x.makeEnum("agent.v1.ResponseComparisonSkipReason", [
    {
        no: 0,
        name: "RESPONSE_COMPARISON_SKIP_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESPONSE_COMPARISON_SKIP_REASON_ALTERNATE_TOOL_CALL",
        localName: "ALTERNATE_TOOL_CALL"
    },
    {
        no: 2,
        name: "RESPONSE_COMPARISON_SKIP_REASON_INFERENCE_ERROR",
        localName: "INFERENCE_ERROR"
    },
    {
        no: 3,
        name: "RESPONSE_COMPARISON_SKIP_REASON_TIMEOUT",
        localName: "TIMEOUT"
    },
    {
        no: 4,
        name: "RESPONSE_COMPARISON_SKIP_REASON_CANCELLED",
        localName: "CANCELLED"
    }
]), obt = x.makeMessageType("agent.v1.TaskArgs", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "subagent_type",
            kind: "message",
            T: hY
        },
        {
            no: 4,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "resume",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "attachments",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 8,
            name: "mode",
            kind: "enum",
            T: x.getEnumType(Kei)
        },
        {
            no: 9,
            name: "responding_to_message_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 10,
            name: "environment",
            kind: "enum",
            T: x.getEnumType(zse)
        },
        {
            no: 11,
            name: "machine",
            kind: "message",
            T: gFo,
            opt: !0
        }
    ]), gFo = x.makeMessageType("agent.v1.TargetMachine", ()=>[
        {
            no: 1,
            name: "same_machine",
            kind: "message",
            T: n1d,
            oneof: "machine"
        },
        {
            no: 2,
            name: "new_cloud_vm",
            kind: "message",
            T: i1d,
            oneof: "machine"
        },
        {
            no: 3,
            name: "self_hosted_worker",
            kind: "message",
            T: r1d,
            oneof: "machine"
        },
        {
            no: 4,
            name: "self_hosted_pool",
            kind: "message",
            T: s1d,
            oneof: "machine"
        }
    ]), n1d = x.makeMessageType("agent.v1.SameMachineTarget", []), i1d = x.makeMessageType("agent.v1.NewCloudVmTarget", ()=>[
        {
            no: 1,
            name: "environment_build_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), r1d = x.makeMessageType("agent.v1.SelfHostedWorkerTarget", ()=>[
        {
            no: 1,
            name: "worker_id",
            kind: "scalar",
            T: 9
        }
    ]), s1d = x.makeMessageType("agent.v1.SelfHostedPoolTarget", ()=>[
        {
            no: 1,
            name: "pool",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "labels",
            kind: "message",
            T: o1d,
            repeated: !0
        }
    ]), o1d = x.makeMessageType("agent.v1.SelfHostedWorkerLabel", ()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), abt = x.makeMessageType("agent.v1.TaskSuccess", ()=>[
        {
            no: 1,
            name: "conversation_steps",
            kind: "message",
            T: iz,
            repeated: !0
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "is_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "duration_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 5,
            name: "result_suffix",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "background_reason",
            kind: "enum",
            T: x.getEnumType(TAe)
        },
        {
            no: 7,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Pni = x.makeMessageType("agent.v1.TaskError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Kke = x.makeMessageType("agent.v1.TaskResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: abt,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Pni,
            oneof: "result"
        }
    ]), att = x.makeMessageType("agent.v1.TaskToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: obt
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Kke
        },
        {
            no: 3,
            name: "cloud_agent_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), fFo = x.makeMessageType("agent.v1.TaskToolCallDelta", ()=>[
        {
            no: 1,
            name: "interaction_update",
            kind: "message",
            T: ok
        }
    ]), a1d = x.makeMessageType("agent.v1.SetActiveBranchArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]), l1d = x.makeMessageType("agent.v1.SetActiveBranchSuccess", []), c1d = x.makeMessageType("agent.v1.SetActiveBranchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), u1d = x.makeMessageType("agent.v1.SetActiveBranchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: l1d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: c1d,
            oneof: "result"
        }
    ]), d1d = x.makeMessageType("agent.v1.SetActiveBranchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: a1d
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: u1d
        }
    ]), Hm = x.makeMessageType("agent.v1.ToolCall", ()=>[
        {
            no: 1,
            name: "shell_tool_call",
            kind: "message",
            T: Kse,
            oneof: "tool"
        },
        {
            no: 3,
            name: "delete_tool_call",
            kind: "message",
            T: L4t,
            oneof: "tool"
        },
        {
            no: 4,
            name: "glob_tool_call",
            kind: "message",
            T: z_t,
            oneof: "tool"
        },
        {
            no: 5,
            name: "grep_tool_call",
            kind: "message",
            T: o5e,
            oneof: "tool"
        },
        {
            no: 8,
            name: "read_tool_call",
            kind: "message",
            T: IAe,
            oneof: "tool"
        },
        {
            no: 9,
            name: "update_todos_tool_call",
            kind: "message",
            T: zti,
            oneof: "tool"
        },
        {
            no: 10,
            name: "read_todos_tool_call",
            kind: "message",
            T: Wfd,
            oneof: "tool"
        },
        {
            no: 12,
            name: "edit_tool_call",
            kind: "message",
            T: Wte,
            oneof: "tool"
        },
        {
            no: 13,
            name: "ls_tool_call",
            kind: "message",
            T: j4t,
            oneof: "tool"
        },
        {
            no: 14,
            name: "read_lints_tool_call",
            kind: "message",
            T: jOo,
            oneof: "tool"
        },
        {
            no: 15,
            name: "mcp_tool_call",
            kind: "message",
            T: ttt,
            oneof: "tool"
        },
        {
            no: 16,
            name: "sem_search_tool_call",
            kind: "message",
            T: QOo,
            oneof: "tool"
        },
        {
            no: 17,
            name: "create_plan_tool_call",
            kind: "message",
            T: H4t,
            oneof: "tool"
        },
        {
            no: 18,
            name: "web_search_tool_call",
            kind: "message",
            T: bmn,
            oneof: "tool"
        },
        {
            no: 19,
            name: "task_tool_call",
            kind: "message",
            T: att,
            oneof: "tool"
        },
        {
            no: 20,
            name: "list_mcp_resources_tool_call",
            kind: "message",
            T: r5o,
            oneof: "tool"
        },
        {
            no: 21,
            name: "read_mcp_resource_tool_call",
            kind: "message",
            T: s5o,
            oneof: "tool"
        },
        {
            no: 22,
            name: "apply_agent_diff_tool_call",
            kind: "message",
            T: NDo,
            oneof: "tool"
        },
        {
            no: 23,
            name: "ask_question_tool_call",
            kind: "message",
            T: o5o,
            oneof: "tool"
        },
        {
            no: 24,
            name: "fetch_tool_call",
            kind: "message",
            T: Nvd,
            oneof: "tool"
        },
        {
            no: 25,
            name: "switch_mode_tool_call",
            kind: "message",
            T: m5o,
            oneof: "tool"
        },
        {
            no: 28,
            name: "generate_image_tool_call",
            kind: "message",
            T: BDo,
            oneof: "tool"
        },
        {
            no: 29,
            name: "record_screen_tool_call",
            kind: "message",
            T: f5o,
            oneof: "tool"
        },
        {
            no: 30,
            name: "computer_use_tool_call",
            kind: "message",
            T: v3o,
            oneof: "tool"
        },
        {
            no: 31,
            name: "write_shell_stdin_tool_call",
            kind: "message",
            T: v5o,
            oneof: "tool"
        },
        {
            no: 32,
            name: "reflect_tool_call",
            kind: "message",
            T: Gvd,
            oneof: "tool"
        },
        {
            no: 33,
            name: "setup_vm_environment_tool_call",
            kind: "message",
            T: qvd,
            oneof: "tool"
        },
        {
            no: 34,
            name: "truncated_tool_call",
            kind: "message",
            T: f1d,
            oneof: "tool"
        },
        {
            no: 35,
            name: "start_grind_execution_tool_call",
            kind: "message",
            T: Xvd,
            oneof: "tool"
        },
        {
            no: 36,
            name: "start_grind_planning_tool_call",
            kind: "message",
            T: t_d,
            oneof: "tool"
        },
        {
            no: 37,
            name: "web_fetch_tool_call",
            kind: "message",
            T: pSr,
            oneof: "tool"
        },
        {
            no: 38,
            name: "report_bugfix_results_tool_call",
            kind: "message",
            T: efd,
            oneof: "tool"
        },
        {
            no: 39,
            name: "ai_attribution_tool_call",
            kind: "message",
            T: wpd,
            oneof: "tool"
        },
        {
            no: 40,
            name: "pr_management_tool_call",
            kind: "message",
            T: __d,
            oneof: "tool"
        },
        {
            no: 41,
            name: "mcp_auth_tool_call",
            kind: "message",
            T: x5o,
            oneof: "tool"
        },
        {
            no: 42,
            name: "await_tool_call",
            kind: "message",
            T: T_d,
            oneof: "tool"
        },
        {
            no: 43,
            name: "blame_by_file_path_tool_call",
            kind: "message",
            T: R_d,
            oneof: "tool"
        },
        {
            no: 44,
            name: "get_mcp_tools_tool_call",
            kind: "message",
            T: M5o,
            oneof: "tool"
        },
        {
            no: 45,
            name: "report_bug_tool_call",
            kind: "message",
            T: U_d,
            oneof: "tool"
        },
        {
            no: 46,
            name: "set_active_branch_tool_call",
            kind: "message",
            T: d1d,
            oneof: "tool"
        },
        {
            no: 48,
            name: "communicate_update_tool_call",
            kind: "message",
            T: G_d,
            oneof: "tool"
        },
        {
            no: 49,
            name: "send_final_summary_tool_call",
            kind: "message",
            T: Y_d,
            oneof: "tool"
        },
        {
            no: 51,
            name: "replace_env_tool_call",
            kind: "message",
            T: J_d,
            oneof: "tool"
        },
        {
            no: 52,
            name: "edit_pr_labels_tool_call",
            kind: "message",
            T: sbd,
            oneof: "tool"
        },
        {
            no: 53,
            name: "record_ci_investigation_findings_tool_call",
            kind: "message",
            T: hbd,
            oneof: "tool"
        },
        {
            no: 55,
            name: "send_message_tool_call",
            kind: "message",
            T: bbd,
            oneof: "tool"
        },
        {
            no: 56,
            name: "fetch_cloud_agent_data_tool_call",
            kind: "message",
            T: Cbd,
            oneof: "tool"
        },
        {
            no: 58,
            name: "send_to_user_tool_call",
            kind: "message",
            T: Abd,
            oneof: "tool"
        },
        {
            no: 61,
            name: "pi_read_tool_call",
            kind: "message",
            T: Rbd,
            oneof: "tool"
        },
        {
            no: 62,
            name: "pi_bash_tool_call",
            kind: "message",
            T: Lbd,
            oneof: "tool"
        },
        {
            no: 63,
            name: "pi_edit_tool_call",
            kind: "message",
            T: jbd,
            oneof: "tool"
        },
        {
            no: 64,
            name: "pi_write_tool_call",
            kind: "message",
            T: Vbd,
            oneof: "tool"
        },
        {
            no: 65,
            name: "pi_grep_tool_call",
            kind: "message",
            T: Jbd,
            oneof: "tool"
        },
        {
            no: 66,
            name: "pi_find_tool_call",
            kind: "message",
            T: ryd,
            oneof: "tool"
        },
        {
            no: 67,
            name: "pi_ls_tool_call",
            kind: "message",
            T: cyd,
            oneof: "tool"
        },
        {
            no: 68,
            name: "connect_scm_tool_call",
            kind: "message",
            T: $5o,
            oneof: "tool"
        },
        {
            no: 69,
            name: "search_conversations_tool_call",
            kind: "message",
            T: gyd,
            oneof: "tool"
        },
        {
            no: 70,
            name: "create_goal_tool_call",
            kind: "message",
            T: byd,
            oneof: "tool"
        },
        {
            no: 71,
            name: "update_goal_tool_call",
            kind: "message",
            T: wyd,
            oneof: "tool"
        },
        {
            no: 73,
            name: "get_agent_status_tool_call",
            kind: "message",
            T: Ryd,
            oneof: "tool"
        },
        {
            no: 74,
            name: "send_to_agent_tool_call",
            kind: "message",
            T: Lyd,
            oneof: "tool"
        },
        {
            no: 75,
            name: "read_agent_transcript_tool_call",
            kind: "message",
            T: jyd,
            oneof: "tool"
        },
        {
            no: 76,
            name: "create_agent_tool_call",
            kind: "message",
            T: qyd,
            oneof: "tool"
        },
        {
            no: 77,
            name: "stop_agent_tool_call",
            kind: "message",
            T: Xyd,
            oneof: "tool"
        },
        {
            no: 79,
            name: "write_canvas_tool_call",
            kind: "message",
            T: oSd,
            oneof: "tool"
        },
        {
            no: 80,
            name: "read_canvas_tool_call",
            kind: "message",
            T: dSd,
            oneof: "tool"
        },
        {
            no: 81,
            name: "generate_video_tool_call",
            kind: "message",
            T: fSd,
            oneof: "tool"
        },
        {
            no: 82,
            name: "x_search_tool_call",
            kind: "message",
            T: wSd,
            oneof: "tool"
        },
        {
            no: 54,
            name: "hook_additional_contexts",
            kind: "message",
            T: f4t,
            repeated: !0
        },
        {
            no: 57,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 59,
            name: "started_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 60,
            name: "completed_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), h1d = x.makeMessageType("agent.v1.TruncatedToolCallArgs", []), p1d = x.makeMessageType("agent.v1.TruncatedToolCallSuccess", []), m1d = x.makeMessageType("agent.v1.TruncatedToolCallError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), g1d = x.makeMessageType("agent.v1.TruncatedToolCallResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: p1d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: m1d,
            oneof: "result"
        }
    ]), f1d = x.makeMessageType("agent.v1.TruncatedToolCall", ()=>[
        {
            no: 1,
            name: "original_step_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "args",
            kind: "message",
            T: h1d
        },
        {
            no: 3,
            name: "result",
            kind: "message",
            T: g1d
        },
        {
            no: 4,
            name: "original_step_size_bytes",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "preview",
            kind: "message",
            T: Hm
        }
    ]), vFo = x.makeMessageType("agent.v1.ToolCallDelta", ()=>[
        {
            no: 1,
            name: "shell_tool_call_delta",
            kind: "message",
            T: AOo,
            oneof: "delta"
        },
        {
            no: 2,
            name: "task_tool_call_delta",
            kind: "message",
            T: fFo,
            oneof: "delta"
        },
        {
            no: 3,
            name: "edit_tool_call_delta",
            kind: "message",
            T: BOo,
            oneof: "delta"
        },
        {
            no: 4,
            name: "replace_env_tool_call_delta",
            kind: "message",
            T: ebd,
            oneof: "delta"
        }
    ]), iz = x.makeMessageType("agent.v1.ConversationStep", ()=>[
        {
            no: 1,
            name: "assistant_message",
            kind: "message",
            T: lbt,
            oneof: "message"
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: Hm,
            oneof: "message"
        },
        {
            no: 3,
            name: "thinking_message",
            kind: "message",
            T: qSr,
            oneof: "message"
        }
    ]), MI = x.makeMessageType("agent.v1.ConversationAction", ()=>[
        {
            no: 1,
            name: "user_message_action",
            kind: "message",
            T: d5e,
            oneof: "action"
        },
        {
            no: 2,
            name: "resume_action",
            kind: "message",
            T: Nmn,
            oneof: "action"
        },
        {
            no: 3,
            name: "cancel_action",
            kind: "message",
            T: IFo,
            oneof: "action"
        },
        {
            no: 4,
            name: "summarize_action",
            kind: "message",
            T: WSr,
            oneof: "action"
        },
        {
            no: 5,
            name: "shell_command_action",
            kind: "message",
            T: L1d,
            oneof: "action"
        },
        {
            no: 6,
            name: "start_plan_action",
            kind: "message",
            T: O1d,
            oneof: "action"
        },
        {
            no: 7,
            name: "execute_plan_action",
            kind: "message",
            T: X4t,
            oneof: "action"
        },
        {
            no: 8,
            name: "async_ask_question_completion_action",
            kind: "message",
            T: xFo,
            oneof: "action"
        },
        {
            no: 10,
            name: "cancel_subagent_action",
            kind: "message",
            T: yFo,
            oneof: "action"
        },
        {
            no: 12,
            name: "background_task_completion_action",
            kind: "message",
            T: _Fo,
            oneof: "action"
        },
        {
            no: 13,
            name: "background_shell_action",
            kind: "message",
            T: SFo,
            oneof: "action"
        },
        {
            no: 14,
            name: "background_subagent_action",
            kind: "message",
            T: kFo,
            oneof: "action"
        },
        {
            no: 16,
            name: "subscription_notification_action",
            kind: "message",
            T: TFo,
            oneof: "action"
        },
        {
            no: 18,
            name: "goal_continuation_action",
            kind: "message",
            T: EFo,
            oneof: "action"
        },
        {
            no: 19,
            name: "inject_context_action",
            kind: "message",
            T: Mmn,
            oneof: "action"
        },
        {
            no: 11,
            name: "triggering_auth_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "triggering_user_info",
            kind: "message",
            T: NSr,
            opt: !0
        },
        {
            no: 17,
            name: "request_context_parts",
            kind: "message",
            T: K5o,
            opt: !0
        }
    ]), NSr = x.makeMessageType("agent.v1.TriggeringUserInfo", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "user_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), _Fo = x.makeMessageType("agent.v1.BackgroundTaskCompletionAction", ()=>[
        {
            no: 1,
            name: "completions",
            kind: "message",
            T: LSr,
            repeated: !0
        },
        {
            no: 2,
            name: "system_reminder",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "request_context",
            kind: "message",
            T: mY
        }
    ]), LSr = x.makeMessageType("agent.v1.BackgroundTaskCompletion", ()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(Rmn)
        },
        {
            no: 3,
            name: "status",
            kind: "enum",
            T: x.getEnumType(sbt)
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "output_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "thread_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "reason",
            kind: "enum",
            T: x.getEnumType(S4t)
        },
        {
            no: 9,
            name: "subagent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "notification_context",
            kind: "enum",
            T: x.getEnumType(mFo)
        },
        {
            no: 12,
            name: "completed_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 13,
            name: "record_only",
            kind: "scalar",
            T: 8
        }
    ]), bFo = x.makeMessageType("agent.v1.SubagentRunState", ()=>[
        {
            no: 1,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subagent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "environment",
            kind: "enum",
            T: x.getEnumType(zse)
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: x.getEnumType(_P)
        },
        {
            no: 5,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "output_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "completed_timestamp_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 10,
            name: "completion_reason",
            kind: "enum",
            T: x.getEnumType(S4t),
            opt: !0
        }
    ]), v1d = x.makeMessageType("agent.v1.SubagentDispatchStep", ()=>[
        {
            no: 1,
            name: "step_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tool",
            kind: "enum",
            T: x.getEnumType(e1d)
        },
        {
            no: 4,
            name: "backgrounded",
            kind: "scalar",
            T: 8
        }
    ]), yFo = x.makeMessageType("agent.v1.CancelSubagentAction", ()=>[
        {
            no: 1,
            name: "subagent_id",
            kind: "scalar",
            T: 9
        }
    ]), SFo = x.makeMessageType("agent.v1.BackgroundShellAction", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), kFo = x.makeMessageType("agent.v1.BackgroundSubagentAction", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), OSr = x.makeMessageType("agent.v1.InterruptedPendingToolCallResolution", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "shell_result",
            kind: "message",
            T: Aj,
            oneof: "resolution"
        },
        {
            no: 3,
            name: "task_result",
            kind: "message",
            T: Kke,
            oneof: "resolution"
        }
    ]), Mni = x.makeMessageType("agent.v1.InterruptedPendingToolCallResolutions", ()=>[
        {
            no: 1,
            name: "resolutions",
            kind: "message",
            T: OSr,
            repeated: !0
        }
    ]), wFo = x.makeMessageType("agent.v1.ConversationHistory", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "message",
            T: _1d,
            repeated: !0
        },
        {
            no: 2,
            name: "replace_user_info",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), _1d = x.makeMessageType("agent.v1.ConversationHistoryMessage", ()=>[
        {
            no: 1,
            name: "user",
            kind: "message",
            T: b1d,
            oneof: "message"
        },
        {
            no: 2,
            name: "assistant",
            kind: "message",
            T: S1d,
            oneof: "message"
        },
        {
            no: 3,
            name: "tool",
            kind: "message",
            T: E1d,
            oneof: "message"
        }
    ]), b1d = x.makeMessageType("agent.v1.ConversationHistoryUserMessage", ()=>[
        {
            no: 1,
            name: "content",
            kind: "message",
            T: y1d,
            repeated: !0
        }
    ]), y1d = x.makeMessageType("agent.v1.ConversationHistoryUserContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: FSr,
            oneof: "content"
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: CFo,
            oneof: "content"
        }
    ]), FSr = x.makeMessageType("agent.v1.ConversationHistoryTextContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), CFo = x.makeMessageType("agent.v1.ConversationHistoryImageContent", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), S1d = x.makeMessageType("agent.v1.ConversationHistoryAssistantMessage", ()=>[
        {
            no: 1,
            name: "content",
            kind: "message",
            T: k1d,
            repeated: !0
        }
    ]), k1d = x.makeMessageType("agent.v1.ConversationHistoryAssistantContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: FSr,
            oneof: "content"
        },
        {
            no: 2,
            name: "reasoning",
            kind: "message",
            T: w1d,
            oneof: "content"
        },
        {
            no: 3,
            name: "redacted_reasoning",
            kind: "message",
            T: C1d,
            oneof: "content"
        },
        {
            no: 4,
            name: "tool_call",
            kind: "message",
            T: T1d,
            oneof: "content"
        }
    ]), w1d = x.makeMessageType("agent.v1.ConversationHistoryReasoningContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "signature",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), C1d = x.makeMessageType("agent.v1.ConversationHistoryRedactedReasoningContent", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]), T1d = x.makeMessageType("agent.v1.ConversationHistoryToolCall", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "args_json",
            kind: "scalar",
            T: 9
        }
    ]), E1d = x.makeMessageType("agent.v1.ConversationHistoryToolMessage", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content",
            kind: "message",
            T: I1d,
            repeated: !0
        },
        {
            no: 4,
            name: "is_error",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "hook_additional_contexts",
            kind: "message",
            T: f4t,
            repeated: !0
        }
    ]), I1d = x.makeMessageType("agent.v1.ConversationHistoryToolResultContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: FSr,
            oneof: "content"
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: CFo,
            oneof: "content"
        }
    ]), d5e = x.makeMessageType("agent.v1.UserMessageAction", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: t0
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: mY
        },
        {
            no: 3,
            name: "send_to_interaction_listener",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "prepend_user_messages",
            kind: "message",
            T: t0,
            repeated: !0
        },
        {
            no: 6,
            name: "interrupted_pending_tool_call_resolutions",
            kind: "message",
            T: Mni,
            opt: !0
        },
        {
            no: 7,
            name: "conversation_history",
            kind: "message",
            T: wFo,
            opt: !0
        },
        {
            no: 8,
            name: "trailing_conversation_history",
            kind: "message",
            T: wFo,
            opt: !0
        }
    ]), TFo = x.makeMessageType("agent.v1.SubscriptionNotificationAction", ()=>[
        {
            no: 1,
            name: "notifications",
            kind: "message",
            T: t0,
            repeated: !0
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: mY
        },
        {
            no: 3,
            name: "send_to_interaction_listener",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), EFo = x.makeMessageType("agent.v1.GoalContinuationAction", []), Mmn = x.makeMessageType("agent.v1.InjectContextAction", ()=>[
        {
            no: 1,
            name: "injection_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expected_run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "user_context",
            kind: "message",
            T: BSr,
            oneof: "payload"
        },
        {
            no: 4,
            name: "system_context",
            kind: "message",
            T: x1d,
            oneof: "payload"
        }
    ]), BSr = x.makeMessageType("agent.v1.UserContextInjection", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: t0
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: mY
        }
    ]), x1d = x.makeMessageType("agent.v1.SystemContextInjection", ()=>[
        {
            no: 1,
            name: "producer",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), A1d = x.makeMessageType("agent.v1.ContextInjectionState", ()=>[
        {
            no: 1,
            name: "queued",
            kind: "message",
            T: R1d,
            oneof: "state"
        },
        {
            no: 2,
            name: "delivered",
            kind: "message",
            T: P1d,
            oneof: "state"
        },
        {
            no: 3,
            name: "queued_for_next_turn",
            kind: "message",
            T: M1d,
            oneof: "state"
        },
        {
            no: 4,
            name: "cancelled",
            kind: "message",
            T: D1d,
            oneof: "state"
        },
        {
            no: 5,
            name: "rejected",
            kind: "message",
            T: N1d,
            oneof: "state"
        }
    ]), R1d = x.makeMessageType("agent.v1.ContextInjectionQueued", []), P1d = x.makeMessageType("agent.v1.ContextInjectionDelivered", ()=>[
        {
            no: 1,
            name: "step",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "delivery_batch_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "delivered_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), M1d = x.makeMessageType("agent.v1.ContextInjectionQueuedForNextTurn", []), D1d = x.makeMessageType("agent.v1.ContextInjectionCancelled", []), N1d = x.makeMessageType("agent.v1.ContextInjectionRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), USr = x.makeMessageType("agent.v1.SubmittedCustomMode", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "source",
            kind: "enum",
            T: x.getEnumType(Gde)
        },
        {
            no: 6,
            name: "source_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "source_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "managed_skill_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "plugin_snapshot_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), jSr = x.makeMessageType("agent.v1.CustomModeDescriptor", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "icon",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "color",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "source",
            kind: "enum",
            T: x.getEnumType(Gde)
        },
        {
            no: 7,
            name: "source_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "source_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "managed_skill_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "plugin_snapshot_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), $Sr = x.makeMessageType("agent.v1.SubmittedExitedCustomMode", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        }
    ]), HSr = x.makeMessageType("agent.v1.CustomModeExitIntent", ()=>[
        {
            no: 1,
            name: "next_mode",
            kind: "enum",
            T: x.getEnumType(t2)
        },
        {
            no: 2,
            name: "exited_mode",
            kind: "message",
            T: $Sr
        }
    ]), Dmn = x.makeMessageType("agent.v1.CustomModeIntent", ()=>[
        {
            no: 1,
            name: "enter",
            kind: "message",
            T: USr,
            oneof: "intent"
        },
        {
            no: 2,
            name: "exit",
            kind: "message",
            T: HSr,
            oneof: "intent"
        }
    ]), IFo = x.makeMessageType("agent.v1.CancelAction", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "interrupted_pending_tool_call_resolutions",
            kind: "message",
            T: Mni,
            opt: !0
        }
    ]), Nmn = x.makeMessageType("agent.v1.ResumeAction", ()=>[
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: mY
        }
    ]), xFo = x.makeMessageType("agent.v1.AsyncAskQuestionCompletionAction", ()=>[
        {
            no: 1,
            name: "original_tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "original_args",
            kind: "message",
            T: Smn
        },
        {
            no: 3,
            name: "result",
            kind: "message",
            T: Nve
        },
        {
            no: 4,
            name: "request_context",
            kind: "message",
            T: mY
        }
    ]), WSr = x.makeMessageType("agent.v1.SummarizeAction", []), L1d = x.makeMessageType("agent.v1.ShellCommandAction", ()=>[
        {
            no: 1,
            name: "shell_command",
            kind: "message",
            T: OFo
        },
        {
            no: 2,
            name: "exec_id",
            kind: "scalar",
            T: 9
        }
    ]), O1d = x.makeMessageType("agent.v1.StartPlanAction", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: t0
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: mY
        },
        {
            no: 3,
            name: "is_spec",
            kind: "scalar",
            T: 8
        }
    ]), X4t = x.makeMessageType("agent.v1.ExecutePlanAction", ()=>[
        {
            no: 1,
            name: "request_context",
            kind: "message",
            T: mY
        },
        {
            no: 2,
            name: "plan",
            kind: "message",
            T: zSr,
            opt: !0
        },
        {
            no: 3,
            name: "plan_file_uri",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "plan_file_content",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "execution_mode",
            kind: "enum",
            T: x.getEnumType(t2)
        },
        {
            no: 6,
            name: "kickoff_message_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "plan_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "plan_file_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), AFo = x.makeMessageType("agent.v1.InteractionResponseMetadata", ()=>[
        {
            no: 1,
            name: "interaction_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "response",
            kind: "message",
            T: P5,
            opt: !0
        },
        {
            no: 3,
            name: "skipped_question_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), RFo = x.makeMessageType("agent.v1.SubscriptionEventDisplay", ()=>[
        {
            no: 1,
            name: "display_label",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "resource_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "subscription_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), GSr = x.makeMessageType("agent.v1.UserDisplayInfo", ()=>[
        {
            no: 1,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "email",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "profile_picture_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), F1d = x.makeMessageType("agent.v1.ExecutePlanInfo", ()=>[
        {
            no: 1,
            name: "plan_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "plan_title",
            kind: "scalar",
            T: 9
        }
    ]), Z4t = x.makeMessageType("agent.v1.ProjectDetails", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "subagent",
            kind: "message",
            T: PFo,
            opt: !0
        },
        {
            no: 3,
            name: "side_chat",
            kind: "message",
            T: MFo,
            opt: !0
        },
        {
            no: 4,
            name: "init_description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), PFo = x.makeMessageType("agent.v1.ProjectSubagentDetails", ()=>[
        {
            no: 2,
            name: "store_dir",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), MFo = x.makeMessageType("agent.v1.ProjectSideChatDetails", ()=>[
        {
            no: 1,
            name: "store_dir",
            kind: "scalar",
            T: 9
        }
    ]), t0 = x.makeMessageType("agent.v1.UserMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "selected_context",
            kind: "message",
            T: gY,
            opt: !0
        },
        {
            no: 4,
            name: "mode",
            kind: "enum",
            T: x.getEnumType(t2)
        },
        {
            no: 5,
            name: "is_simulated_msg",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "best_of_n_group_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "try_use_best_of_n_promotion",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "rich_text",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "simulated_msg_reason",
            kind: "enum",
            T: x.getEnumType(hc),
            opt: !0
        },
        {
            no: 10,
            name: "conversation_state_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 11,
            name: "subagent_system_reminder",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "triggering_user_info",
            kind: "message",
            T: NSr,
            opt: !0
        },
        {
            no: 14,
            name: "execute_plan_info",
            kind: "message",
            T: F1d,
            opt: !0
        },
        {
            no: 15,
            name: "simulated_message_metadata",
            kind: "message",
            T: DFo,
            opt: !0
        },
        {
            no: 16,
            name: "prompt_reference_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "thread_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "text_blob_id",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 19,
            name: "rich_text_blob_id",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 21,
            name: "hook_additional_contexts",
            kind: "message",
            T: f4t,
            repeated: !0
        },
        {
            no: 22,
            name: "custom_mode_intent",
            kind: "message",
            T: Dmn,
            opt: !0
        },
        {
            no: 23,
            name: "project_details",
            kind: "message",
            T: Z4t,
            opt: !0
        },
        {
            no: 24,
            name: "turn_steer",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 25,
            name: "started_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 26,
            name: "completed_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 27,
            name: "sent_by_agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 28,
            name: "sent_by_voice_call",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 29,
            name: "sender",
            kind: "message",
            T: NFo,
            opt: !0
        },
        {
            no: 30,
            name: "forked_context",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), DFo = x.makeMessageType("agent.v1.UserMessage.SimulatedMessageMetadata", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "task_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "fsd_finding_action",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "subscription_source",
            kind: "enum",
            T: x.getEnumType(g7),
            opt: !0
        },
        {
            no: 6,
            name: "subscription_event_display",
            kind: "message",
            T: RFo,
            opt: !0
        },
        {
            no: 7,
            name: "interaction_response",
            kind: "message",
            T: AFo,
            opt: !0
        }
    ], {
    localName: "UserMessage_SimulatedMessageMetadata"
}), NFo = x.makeMessageType("agent.v1.MessageSender", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(LFo)
        },
        {
            no: 2,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "display_name",
            kind: "scalar",
            T: 9
        }
    ]), LFo = x.makeEnum("agent.v1.MessageSender.Kind", [
    {
        no: 0,
        name: "KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "KIND_AGENT",
        localName: "AGENT"
    },
    {
        no: 2,
        name: "KIND_VOICE_CALL",
        localName: "VOICE_CALL"
    },
    {
        no: 3,
        name: "KIND_MAIN_BOT",
        localName: "MAIN_BOT"
    },
    {
        no: 4,
        name: "KIND_PROJECT",
        localName: "PROJECT"
    }
]), lbt = x.makeMessageType("agent.v1.AssistantMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "started_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 3,
            name: "completed_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), qSr = x.makeMessageType("agent.v1.ThinkingMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "duration_ms",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "started_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 4,
            name: "completed_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), OFo = x.makeMessageType("agent.v1.ShellCommand", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        }
    ]), B1d = x.makeMessageType("agent.v1.ShellOutput", ()=>[
        {
            no: 1,
            name: "stdout",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "stderr",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "exit_code",
            kind: "scalar",
            T: 5
        }
    ]), zSr = x.makeMessageType("agent.v1.ConversationPlan", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        }
    ]), VSr = x.makeMessageType("agent.v1.PlanRegistryEntry", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), Dni = x.makeMessageType("agent.v1.GoalState", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "goal_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "objective",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: x.getEnumType(l5e)
        },
        {
            no: 5,
            name: "idle_continuations_without_tool_calls",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "active_duration_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 7,
            name: "last_accrued_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 8,
            name: "continuation_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "agent_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), fY = x.makeMessageType("agent.v1.ConversationTurnStructure", ()=>[
        {
            no: 1,
            name: "agent_conversation_turn",
            kind: "message",
            T: Q4t,
            oneof: "turn"
        },
        {
            no: 2,
            name: "shell_conversation_turn",
            kind: "message",
            T: j1d,
            oneof: "turn"
        }
    ]), Q4t = x.makeMessageType("agent.v1.AgentConversationTurnStructure", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "steps",
            kind: "scalar",
            T: 12,
            repeated: !0
        },
        {
            no: 3,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "encrypted_model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "dynamic_tool_count",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 6,
            name: "send_message_step_indices",
            kind: "scalar",
            T: 13,
            repeated: !0
        },
        {
            no: 7,
            name: "routed_model_display_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "subagent_dispatch_steps",
            kind: "message",
            T: v1d,
            repeated: !0
        },
        {
            no: 9,
            name: "dynamic_tool_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 10,
            name: "user_message_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "long_reasoning_reminder",
            kind: "message",
            T: U1d,
            opt: !0
        },
        {
            no: 12,
            name: "long_reasoning_reminder_exposure_logged",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "assistant_text_step_indices",
            kind: "scalar",
            T: 13,
            repeated: !0
        },
        {
            no: 14,
            name: "assistant_text_steps_recorded",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), U1d = x.makeMessageType("agent.v1.LongReasoningReminderState", ()=>[
        {
            no: 1,
            name: "remaining_delay_calls",
            kind: "scalar",
            T: 13
        }
    ]), j1d = x.makeMessageType("agent.v1.ShellConversationTurnStructure", ()=>[
        {
            no: 1,
            name: "shell_command",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "shell_output",
            kind: "scalar",
            T: 12
        }
    ]), $1d = x.makeMessageType("agent.v1.ConversationSummary", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), FFo = x.makeMessageType("agent.v1.ConversationSummaryArchive", ()=>[
        {
            no: 1,
            name: "summarized_messages",
            kind: "scalar",
            T: 12,
            repeated: !0
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "window_tail",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "summary_message",
            kind: "scalar",
            T: 12
        }
    ]), H1d = x.makeMessageType("agent.v1.PromptTokenBreakdownCategory", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "estimated_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "character_count",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), W1d = x.makeMessageType("agent.v1.PromptTokenBreakdownSnapshot", ()=>[
        {
            no: 1,
            name: "total_used_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "max_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "categories",
            kind: "message",
            T: H1d,
            repeated: !0
        }
    ]), G1d = x.makeMessageType("agent.v1.PromptContextSourceRef", ()=>[
        {
            no: 1,
            name: "source_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "content_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "start_offset",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "end_offset",
            kind: "scalar",
            T: 13
        }
    ]), q1d = x.makeMessageType("agent.v1.PromptContextNode", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "category_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "estimated_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "character_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "content_available",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "source",
            kind: "message",
            T: G1d,
            opt: !0
        },
        {
            no: 12,
            name: "inline_content",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), BFo = x.makeMessageType("agent.v1.PromptContextUsageTree", ()=>[
        {
            no: 1,
            name: "schema_version",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "nodes",
            kind: "message",
            T: q1d,
            repeated: !0
        }
    ]), UFo = x.makeMessageType("agent.v1.ConversationTokenDetails", ()=>[
        {
            no: 1,
            name: "used_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "max_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "breakdown",
            kind: "message",
            T: W1d,
            opt: !0
        },
        {
            no: 4,
            name: "prompt_context_usage_tree",
            kind: "message",
            T: BFo,
            opt: !0
        }
    ]), z1d = x.makeMessageType("agent.v1.FileState", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "initial_content",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), jFo = x.makeMessageType("agent.v1.FileStateStructure", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 2,
            name: "initial_content",
            kind: "scalar",
            T: 12,
            opt: !0
        }
    ]), V1d = x.makeMessageType("agent.v1.StepTiming", ()=>[
        {
            no: 1,
            name: "duration_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "timestamp_ms",
            kind: "scalar",
            T: 4
        }
    ]), K1d = x.makeMessageType("agent.v1.TurnTelemetryState", ()=>[
        {
            no: 1,
            name: "completed_turn_count_capped",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "last_completed_turn_timestamp_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), $Fo = x.makeMessageType("agent.v1.CommunicateUpdateHistoryEntry", ()=>[
        {
            no: 1,
            name: "step",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message_index",
            kind: "scalar",
            T: 13
        }
    ]), Y1d = x.makeMessageType("agent.v1.CommunicateUpdateTurnState", ()=>[
        {
            no: 1,
            name: "history",
            kind: "message",
            T: $Fo,
            repeated: !0
        },
        {
            no: 2,
            name: "final_summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "completed_subtitle",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), J4t = x.makeMessageType("agent.v1.SubagentPersistedState", ()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: nf
        },
        {
            no: 2,
            name: "created_timestamp_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "last_used_timestamp_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "subagent_type",
            kind: "message",
            T: hY
        },
        {
            no: 5,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "environment",
            kind: "enum",
            T: x.getEnumType(zse)
        },
        {
            no: 7,
            name: "cloud_subagent",
            kind: "message",
            T: HFo,
            opt: !0
        },
        {
            no: 8,
            name: "first_class_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "cloud_requested_environment_build_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "machine",
            kind: "message",
            T: gFo,
            opt: !0
        }
    ]), HFo = x.makeMessageType("agent.v1.CloudSubagentReference", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), X1d = x.makeMessageType("agent.v1.TrackedGitRepo", ()=>[
        {
            no: 1,
            name: "repo_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]), nf = x.makeMessageType("agent.v1.ConversationStateStructure", ()=>[
        {
            no: 1,
            name: "root_prompt_messages_json",
            kind: "scalar",
            T: 12,
            repeated: !0
        },
        {
            no: 8,
            name: "turns",
            kind: "scalar",
            T: 12,
            repeated: !0
        },
        {
            no: 3,
            name: "todos",
            kind: "scalar",
            T: 12,
            repeated: !0
        },
        {
            no: 4,
            name: "pending_tool_calls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "token_details",
            kind: "message",
            T: UFo
        },
        {
            no: 6,
            name: "summary",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 7,
            name: "plan",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 9,
            name: "previous_workspace_uris",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 10,
            name: "mode",
            kind: "enum",
            T: x.getEnumType(t2),
            opt: !0
        },
        {
            no: 11,
            name: "summary_archive",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 12,
            name: "file_states",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 12
            }
        },
        {
            no: 15,
            name: "file_states_v2",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: jFo
            }
        },
        {
            no: 13,
            name: "summary_archives",
            kind: "scalar",
            T: 12,
            repeated: !0
        },
        {
            no: 14,
            name: "turn_timings",
            kind: "message",
            T: V1d,
            repeated: !0
        },
        {
            no: 16,
            name: "subagent_states",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: J4t
            }
        },
        {
            no: 17,
            name: "self_summary_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 18,
            name: "read_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 19,
            name: "active_branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 20,
            name: "plans",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: VSr
            }
        },
        {
            no: 21,
            name: "tracked_git_repo_branches",
            kind: "message",
            T: X1d,
            repeated: !0
        },
        {
            no: 22,
            name: "agent_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 23,
            name: "communicate_update_history",
            kind: "message",
            T: $Fo,
            repeated: !0
        },
        {
            no: 24,
            name: "subagent_threads",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 25,
            name: "communicate_update_final_summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 28,
            name: "communicate_update_completed_subtitle",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 29,
            name: "communicate_update_states_by_parent_tool_call_id",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: Y1d
            }
        },
        {
            no: 30,
            name: "subagent_runs_by_parent_tool_call_id",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: bFo
            }
        },
        {
            no: 26,
            name: "conversation_started_timestamp_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 27,
            name: "conversation_started_time_zone",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 31,
            name: "subagent_state_refs",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 12
            }
        },
        {
            no: 32,
            name: "goal_state",
            kind: "message",
            T: Dni,
            opt: !0
        },
        {
            no: 33,
            name: "is_root_project_conversation",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 34,
            name: "completed_ask_question_tool_call_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 35,
            name: "durable_skill_blocks",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 36,
            name: "durable_custom_mode_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 37,
            name: "message_count_at_last_compaction",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 38,
            name: "recent_user_message_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 39,
            name: "recent_user_message_ids_older_turn_count",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 40,
            name: "turn_telemetry",
            kind: "message",
            T: K1d,
            opt: !0
        },
        {
            no: 42,
            name: "mentioned_agent_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Z1d = x.makeMessageType("agent.v1.ThinkingDetails", []), Nni = x.makeMessageType("agent.v1.ClientLlmGatewayCredential", ()=>[
        {
            no: 1,
            name: "bearer_token",
            kind: "scalar",
            T: 9
        }
    ]), Ove = x.makeMessageType("agent.v1.ModelDetails", ()=>[
        {
            no: 1,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "display_model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "display_name_short",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "aliases",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "thinking_details",
            kind: "message",
            T: Z1d,
            opt: !0
        },
        {
            no: 7,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "api_key_credentials",
            kind: "message",
            T: rtt,
            oneof: "credentials"
        },
        {
            no: 9,
            name: "azure_credentials",
            kind: "message",
            T: stt,
            oneof: "credentials"
        },
        {
            no: 10,
            name: "bedrock_credentials",
            kind: "message",
            T: ott,
            oneof: "credentials"
        }
    ]), e9t = x.makeMessageType("agent.v1.SubagentModelOverride", ()=>[
        {
            no: 1,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model",
            kind: "message",
            T: AD,
            oneof: "selection"
        },
        {
            no: 3,
            name: "inherit",
            kind: "scalar",
            T: 8,
            oneof: "selection"
        },
        {
            no: 4,
            name: "disabled",
            kind: "scalar",
            T: 8,
            oneof: "selection"
        }
    ]), WFo = x.makeMessageType("agent.v1.PreFetchedBlob", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]), GFo = x.makeMessageType("agent.v1.AgentRunRequest", ()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: nf
        },
        {
            no: 2,
            name: "action",
            kind: "message",
            T: MI
        },
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: Ove
        },
        {
            no: 9,
            name: "requested_model",
            kind: "message",
            T: AD,
            opt: !0
        },
        {
            no: 4,
            name: "mcp_tools",
            kind: "message",
            T: rSr
        },
        {
            no: 5,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "mcp_file_system_options",
            kind: "message",
            T: mmn,
            opt: !0
        },
        {
            no: 7,
            name: "skill_options",
            kind: "message",
            T: ISr,
            opt: !0
        },
        {
            no: 8,
            name: "custom_system_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "suggest_next_prompt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "subagent_type_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "exclude_workspace_context",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "harness",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "selected_subagent_models",
            kind: "message",
            T: AD,
            repeated: !0
        },
        {
            no: 15,
            name: "selected_subagent_model_details",
            kind: "message",
            T: Ove,
            repeated: !0
        },
        {
            no: 16,
            name: "conversation_group_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "pre_fetched_blobs",
            kind: "message",
            T: WFo,
            repeated: !0
        },
        {
            no: 18,
            name: "dev_raw_model_slug",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 19,
            name: "client_supports_inline_images",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 20,
            name: "subagent_model_overrides",
            kind: "message",
            T: e9t,
            repeated: !0
        },
        {
            no: 21,
            name: "can_create_cloud_subagents",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 22,
            name: "suppress_subagent_progress_update_tool",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 23,
            name: "client_supports_send_to_user",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 24,
            name: "computer_use_coordinate_mode",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 25,
            name: "run_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 26,
            name: "agent_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 28,
            name: "client_supports_routed_model_update",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 29,
            name: "system_prompt_spec",
            kind: "message",
            T: yni,
            opt: !0
        },
        {
            no: 30,
            name: "client_llm_gateway_credential",
            kind: "message",
            T: Nni,
            opt: !0
        },
        {
            no: 31,
            name: "client_supports_preview_card",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 32,
            name: "started_as_new_project",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 33,
            name: "first_project_onboarding",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 34,
            name: "next_interaction_query_id",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), t9t = x.makeMessageType("agent.v1.TextDeltaUpdate", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_server_notice",
            kind: "scalar",
            T: 8
        }
    ]), Q1d = x.makeMessageType("agent.v1.RoutedModelUpdate", ()=>[
        {
            no: 1,
            name: "display_name",
            kind: "scalar",
            T: 9
        }
    ]), n9t = x.makeMessageType("agent.v1.ToolCallStartedUpdate", ()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: Hm
        },
        {
            no: 3,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]), cbt = x.makeMessageType("agent.v1.ToolCallCompletedUpdate", ()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: Hm
        },
        {
            no: 3,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]), KSr = x.makeMessageType("agent.v1.ToolCallDeltaUpdate", ()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_delta",
            kind: "message",
            T: vFo
        },
        {
            no: 3,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]), YSr = x.makeMessageType("agent.v1.PartialToolCallUpdate", ()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: Hm
        },
        {
            no: 3,
            name: "args_text_delta",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]), Lni = x.makeMessageType("agent.v1.ThinkingDeltaUpdate", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "thinking_style",
            kind: "enum",
            T: x.getEnumType(Pmn),
            opt: !0
        }
    ]), Oni = x.makeMessageType("agent.v1.ThinkingCompletedUpdate", ()=>[
        {
            no: 1,
            name: "thinking_duration_ms",
            kind: "scalar",
            T: 5
        }
    ]), qFo = x.makeMessageType("agent.v1.TokenDeltaUpdate", ()=>[
        {
            no: 1,
            name: "tokens",
            kind: "scalar",
            T: 5
        }
    ]), zFo = x.makeMessageType("agent.v1.SummaryUpdate", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), VFo = x.makeMessageType("agent.v1.SummaryStartedUpdate", []), XSr = x.makeMessageType("agent.v1.HeartbeatUpdate", []), KFo = x.makeMessageType("agent.v1.SummaryCompletedUpdate", ()=>[
        {
            no: 1,
            name: "hook_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "failed",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), YFo = x.makeMessageType("agent.v1.ShellOutputDeltaUpdate", ()=>[
        {
            no: 1,
            name: "stdout",
            kind: "message",
            T: Bbr,
            oneof: "event"
        },
        {
            no: 2,
            name: "stderr",
            kind: "message",
            T: Ubr,
            oneof: "event"
        },
        {
            no: 3,
            name: "exit",
            kind: "message",
            T: jbr,
            oneof: "event"
        },
        {
            no: 4,
            name: "start",
            kind: "message",
            T: RDo,
            oneof: "event"
        }
    ]), Fni = x.makeMessageType("agent.v1.TurnEndedUpdate", ()=>[
        {
            no: 1,
            name: "input_tokens",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 2,
            name: "output_tokens",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 3,
            name: "cache_read_tokens",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 4,
            name: "cache_write_tokens",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 5,
            name: "reasoning_tokens",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 6,
            name: "ended_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), ZSr = x.makeMessageType("agent.v1.UserMessageAppendedUpdate", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: t0
        }
    ]), XFo = x.makeMessageType("agent.v1.StepStartedUpdate", ()=>[
        {
            no: 1,
            name: "step_id",
            kind: "scalar",
            T: 4
        }
    ]), ZFo = x.makeMessageType("agent.v1.ToolRequestsListedUpdate", ()=>[
        {
            no: 1,
            name: "call_count",
            kind: "scalar",
            T: 13
        }
    ]), QFo = x.makeMessageType("agent.v1.StepCompletedUpdate", ()=>[
        {
            no: 1,
            name: "step_id",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "step_duration_ms",
            kind: "scalar",
            T: 3
        }
    ]), JFo = x.makeMessageType("agent.v1.PromptSuggestionUpdate", ()=>[
        {
            no: 1,
            name: "suggestion",
            kind: "scalar",
            T: 9
        }
    ]), e6o = x.makeMessageType("agent.v1.ActiveBranchChange", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]), t6o = x.makeMessageType("agent.v1.FeedbackRequestCategory", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        }
    ]), J1d = x.makeMessageType("agent.v1.FeedbackRequestCategoryGroup", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "categories",
            kind: "message",
            T: t6o,
            repeated: !0
        }
    ]), n6o = x.makeMessageType("agent.v1.FeedbackRequestUpdate", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "canonical_model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "categories",
            kind: "message",
            T: t6o,
            repeated: !0
        },
        {
            no: 4,
            name: "category_groups",
            kind: "message",
            T: J1d,
            repeated: !0
        },
        {
            no: 5,
            name: "show_form_immediately",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "negative_title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "comment_placeholder",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ekd = x.makeMessageType("agent.v1.ResponseComparisonStarted", ()=>[
        {
            no: 1,
            name: "display_order",
            kind: "enum",
            T: x.getEnumType(Rni)
        },
        {
            no: 2,
            name: "parent_invocation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "alternate_invocation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "parent_response",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "comparison_config_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "alternate_model_id",
            kind: "scalar",
            T: 9
        }
    ]), tkd = x.makeMessageType("agent.v1.ResponseComparisonTextDelta", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), nkd = x.makeMessageType("agent.v1.ResponseComparisonCompleted", []), ikd = x.makeMessageType("agent.v1.ResponseComparisonSkipped", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: x.getEnumType(t1d)
        }
    ]), rkd = x.makeMessageType("agent.v1.ResponseComparisonUpdate", ()=>[
        {
            no: 1,
            name: "comparison_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "started",
            kind: "message",
            T: ekd,
            oneof: "event"
        },
        {
            no: 3,
            name: "text_delta",
            kind: "message",
            T: tkd,
            oneof: "event"
        },
        {
            no: 4,
            name: "completed",
            kind: "message",
            T: nkd,
            oneof: "event"
        },
        {
            no: 5,
            name: "skipped",
            kind: "message",
            T: ikd,
            oneof: "event"
        }
    ]), ok = x.makeMessageType("agent.v1.InteractionUpdate", ()=>[
        {
            no: 1,
            name: "text_delta",
            kind: "message",
            T: t9t,
            oneof: "message"
        },
        {
            no: 7,
            name: "partial_tool_call",
            kind: "message",
            T: YSr,
            oneof: "message"
        },
        {
            no: 15,
            name: "tool_call_delta",
            kind: "message",
            T: KSr,
            oneof: "message"
        },
        {
            no: 2,
            name: "tool_call_started",
            kind: "message",
            T: n9t,
            oneof: "message"
        },
        {
            no: 3,
            name: "tool_call_completed",
            kind: "message",
            T: cbt,
            oneof: "message"
        },
        {
            no: 4,
            name: "thinking_delta",
            kind: "message",
            T: Lni,
            oneof: "message"
        },
        {
            no: 5,
            name: "thinking_completed",
            kind: "message",
            T: Oni,
            oneof: "message"
        },
        {
            no: 6,
            name: "user_message_appended",
            kind: "message",
            T: ZSr,
            oneof: "message"
        },
        {
            no: 8,
            name: "token_delta",
            kind: "message",
            T: qFo,
            oneof: "message"
        },
        {
            no: 9,
            name: "summary",
            kind: "message",
            T: zFo,
            oneof: "message"
        },
        {
            no: 10,
            name: "summary_started",
            kind: "message",
            T: VFo,
            oneof: "message"
        },
        {
            no: 11,
            name: "summary_completed",
            kind: "message",
            T: KFo,
            oneof: "message"
        },
        {
            no: 12,
            name: "shell_output_delta",
            kind: "message",
            T: YFo,
            oneof: "message"
        },
        {
            no: 13,
            name: "heartbeat",
            kind: "message",
            T: XSr,
            oneof: "message"
        },
        {
            no: 14,
            name: "turn_ended",
            kind: "message",
            T: Fni,
            oneof: "message"
        },
        {
            no: 16,
            name: "step_started",
            kind: "message",
            T: XFo,
            oneof: "message"
        },
        {
            no: 17,
            name: "step_completed",
            kind: "message",
            T: QFo,
            oneof: "message"
        },
        {
            no: 27,
            name: "tool_requests_listed",
            kind: "message",
            T: ZFo,
            oneof: "message"
        },
        {
            no: 18,
            name: "prompt_suggestion",
            kind: "message",
            T: JFo,
            oneof: "message"
        },
        {
            no: 19,
            name: "post_request_prompt",
            kind: "message",
            T: okd,
            oneof: "message"
        },
        {
            no: 20,
            name: "active_branch_change",
            kind: "message",
            T: e6o,
            oneof: "message"
        },
        {
            no: 21,
            name: "feedback_request",
            kind: "message",
            T: n6o,
            oneof: "message"
        },
        {
            no: 22,
            name: "response_comparison",
            kind: "message",
            T: rkd,
            oneof: "message"
        },
        {
            no: 23,
            name: "context_injection_state",
            kind: "message",
            T: skd,
            oneof: "message"
        },
        {
            no: 24,
            name: "routed_model",
            kind: "message",
            T: Q1d,
            oneof: "message"
        },
        {
            no: 26,
            name: "grok_bot_nudge",
            kind: "message",
            T: akd,
            oneof: "message"
        },
        {
            no: 25,
            name: "message_started_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), skd = x.makeMessageType("agent.v1.ContextInjectionStateUpdate", ()=>[
        {
            no: 1,
            name: "injection_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "state",
            kind: "message",
            T: A1d
        }
    ]), okd = x.makeMessageType("agent.v1.PostRequestPromptUpdate", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "button_label",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "button_url",
            kind: "scalar",
            T: 9
        }
    ]), akd = x.makeMessageType("agent.v1.GrokBotNudgeUpdate", ()=>[
        {
            no: 1,
            name: "job",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "show_number",
            kind: "scalar",
            T: 13
        }
    ]), i9t = x.makeMessageType("agent.v1.InteractionQuery", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "web_search_request_query",
            kind: "message",
            T: xvd,
            oneof: "query"
        },
        {
            no: 3,
            name: "ask_question_interaction_query",
            kind: "message",
            T: lkd,
            oneof: "query"
        },
        {
            no: 4,
            name: "switch_mode_request_query",
            kind: "message",
            T: g5o,
            oneof: "query"
        },
        {
            no: 7,
            name: "create_plan_request_query",
            kind: "message",
            T: Evd,
            oneof: "query"
        },
        {
            no: 8,
            name: "setup_vm_environment_args",
            kind: "message",
            T: _5o,
            oneof: "query"
        },
        {
            no: 9,
            name: "web_fetch_request_query",
            kind: "message",
            T: i_d,
            oneof: "query"
        },
        {
            no: 10,
            name: "pr_management_request_query",
            kind: "message",
            T: b_d,
            oneof: "query"
        },
        {
            no: 11,
            name: "mcp_auth_request_query",
            kind: "message",
            T: y_d,
            oneof: "query"
        },
        {
            no: 12,
            name: "generate_image_request_query",
            kind: "message",
            T: ypd,
            oneof: "query"
        },
        {
            no: 13,
            name: "replace_env_args",
            kind: "message",
            T: D5o,
            oneof: "query"
        },
        {
            no: 14,
            name: "connect_scm_request_query",
            kind: "message",
            T: myd,
            oneof: "query"
        }
    ]), P5 = x.makeMessageType("agent.v1.InteractionResponse", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "web_search_request_response",
            kind: "message",
            T: G4t,
            oneof: "result"
        },
        {
            no: 3,
            name: "ask_question_interaction_response",
            kind: "message",
            T: ltt,
            oneof: "result"
        },
        {
            no: 4,
            name: "switch_mode_request_response",
            kind: "message",
            T: a5e,
            oneof: "result"
        },
        {
            no: 7,
            name: "create_plan_request_response",
            kind: "message",
            T: uSr,
            oneof: "result"
        },
        {
            no: 8,
            name: "setup_vm_environment_result",
            kind: "message",
            T: dni,
            oneof: "result"
        },
        {
            no: 9,
            name: "web_fetch_request_response",
            kind: "message",
            T: nbt,
            oneof: "result"
        },
        {
            no: 10,
            name: "pr_management_result",
            kind: "message",
            T: fni,
            oneof: "result"
        },
        {
            no: 11,
            name: "mcp_auth_request_response",
            kind: "message",
            T: pY,
            oneof: "result"
        },
        {
            no: 12,
            name: "generate_image_request_response",
            kind: "message",
            T: Hbr,
            oneof: "result"
        },
        {
            no: 13,
            name: "replace_env_result",
            kind: "message",
            T: vni,
            oneof: "result"
        },
        {
            no: 14,
            name: "connect_scm_request_response",
            kind: "message",
            T: ibt,
            oneof: "result"
        }
    ]), lkd = x.makeMessageType("agent.v1.AskQuestionInteractionQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Smn
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), ltt = x.makeMessageType("agent.v1.AskQuestionInteractionResponse", ()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: Nve
        }
    ]);

}
