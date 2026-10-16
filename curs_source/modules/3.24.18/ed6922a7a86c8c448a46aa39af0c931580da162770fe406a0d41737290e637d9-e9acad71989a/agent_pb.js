import { cBs, wmu } from "./ai_attribution_tool_pb.js";
import { Zxn, eBs } from "./apply_agent_diff_tool_pb.js";
import { Ise, K7t, kGs, z7t } from "./ask_question_tool_pb.js";
import { VEu, cdv } from "./await_tool_pb.js";
import { YEu, ldv } from "./blame_by_file_path_tool_pb.js";
import { RAu, TAu, Tdv } from "./cloud_canvas_tool_pb.js";
import { ddv, lxu } from "./communicate_update_tool_pb.js";
import { FBs, rIn } from "./computer_use_tool_pb.js";
import { $4i, PIu, WQe, iVs } from "./connect_scm_tool_pb.js";
import { YIu, eAu, fAu, gAu, sAu, uAu } from "./coordinator_tools_pb.js";
import { E4i, Lyt, WTu, j7t } from "./create_plan_tool_pb.js";
import { c4i, xyt } from "./delete_tool_pb.js";
import { Cxu, pdv } from "./edit_pr_labels_tool_pb.js";
import { ZWs, tDn, xse } from "./edit_tool_pb.js";
import { Gxu, fdv } from "./fetch_cloud_agent_data_tool_pb.js";
import { ZTu, rdv } from "./fetch_tool_pb.js";
import { jZe, m3i, rBs, ymu } from "./generate_image_tool_pb.js";
import { Edv, NAu } from "./generate_video_tool_pb.js";
import { JEu, KGs } from "./get_mcp_tools_tool_pb.js";
import { GWs, XRn } from "./glob_tool_pb.js";
import { BIu, GIu, N0e, WIu } from "./goal_tool_pb.js";
import { QRn, v4e } from "./grep_tool_pb.js";
import { Vxn, ybt } from "./hook_additional_context_pb.js";
import { Dyt, f4i } from "./ls_tool_pb.js";
import { E$, UEu, VGs, X7t } from "./mcp_auth_tool_pb.js";
import { FQe, V7t, y4i } from "./mcp_pb.js";
import { SGs, qTu, yGs } from "./mcp_resource_tool_pb.js";
import { Pyt, T4i } from "./mcp_tool_pb.js";
import { bdv, eIu } from "./pi_bash_tool_pb.js";
import { dIu, sIu } from "./pi_edit_tool_pb.js";
import { kdv, wIu } from "./pi_find_tool_pb.js";
import { Sdv, _Iu } from "./pi_grep_tool_pb.js";
import { IIu, wdv } from "./pi_ls_tool_pb.js";
import { Yxu, _dv } from "./pi_read_tool_pb.js";
import { hIu, ydv } from "./pi_write_tool_pb.js";
import { BEu, FEu, UGs, wDn } from "./pr_management_tool_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { JWs, STu } from "./read_lints_tool_pb.js";
import { IMe, W7t } from "./read_tool_pb.js";
import { Dxu, mdv } from "./record_ci_investigation_findings_tool_pb.js";
import { MGs, tEu } from "./record_screen_tool_pb.js";
import { aEu, sdv } from "./reflect_tool_pb.js";
import { CDn, N4i, YGs, _xu, bxu } from "./replace_env_tool_pb.js";
import { rxu, udv } from "./report_bug_tool_pb.js";
import { evu, tvu } from "./report_bugfix_results_tool_pb.js";
import { Bj, j4i, uVs, x$ } from "./request_context_exec_pb.js";
import { C4e, MD, T4e, Uj, w4e } from "./requested_model_pb.js";
import { Cdv, LIu } from "./search_conversations_tool_pb.js";
import { Tee, jW } from "./selected_context_pb.js";
import { HTu, mGs } from "./semsearch_tool_pb.js";
import { hdv, mxu } from "./send_final_summary_tool_pb.js";
import { Bxu, gdv } from "./send_message_tool_pb.js";
import { Kxu, vdv } from "./send_to_user_tool_pb.js";
import { LGs, NGs, SDn, cEu } from "./setup_vm_environment_tool_pb.js";
import { X3s, d3i, h3i, hee, k$, u3i } from "./shell_exec_pb.js";
import { BWs, Ese, KRn } from "./shell_tool_pb.js";
import { odv, pEu } from "./start_grind_execution_tool_pb.js";
import { _Eu, adv } from "./start_grind_planning_tool_pb.js";
import { Ebt, Jxn, Mve, Pj, pse, w$ } from "./subagents_pb.js";
import { DGs, L0e, RGs, yDn } from "./switch_mode_tool_pb.js";
import { G4i, xDn } from "./system_prompt_pb.js";
import { b4e, eDn, sTu } from "./todo_tool_pb.js";
import { x } from "./tslib.es6.js";
import { D4i, FGs, HQe, kEu } from "./web_fetch_tool_pb.js";
import { Nyt, gDn, hDn, jTu } from "./web_search_tool_pb.js";
import { PGs, nEu } from "./write_shell_stdin_tool_pb.js";
import { WAu, xdv } from "./x_search_tool_pb.js";
var UE, i$t, VQe, RVs, Ux, wRu, B0e, xd, G3, r$t, FDn, CRu, $yt, DVs, TRu, ERu, xRu, IRu, ARu, jQe, BDn, sde, qQe, MVs, RRu, DRu, MRu, PRu, LRu, tg, NRu, ORu, FRu, BRu, URu, PVs, pX, x1, Y4i, LVs, X4i, NVs, $Ru, OVs, FVs, BVs, Z4i, UDn, UVs, HRu, WRu, GRu, Q4i, $Vs, VRu, jRu, qRu, zRu, KRu, YRu, XRu, PMe, HVs, WVs, s$t, J4i, ZRu, QRu, JRu, eDu, tDu, nDu, iDu, eUi, tUi, nUi, iUi, o$t, GVs, a$t, VVs, rUi, rDu, sDu, Hyt, jVs, qVs, sUi, oDu, Wyt, zVs, KVs, I1, aDu, YVs, XVs, Gyt, ZVs, QVs, cDu, oUi, aUi, $Dn, mX, HDn, lDu, uDu, dDu, JVs, hDu, pDu, mDu, gDu, ejs, tjs, fDu, njs, vDu, _Du, ijs, bDu, c$t, rjs, yDu, Hm, SDu, WDn, ode, l$t, sjs, ojs, Vyt, kDu, jyt, zQe, cUi, lUi, GDn, VDn, ajs, cjs, ljs, uUi, ujs, djs, jDn, dUi, hjs, pjs, mjs, gjs, fjs, vjs, wDu, _js, CDu, TDu, EDu, xDu, IDu, Yb, ADu, RDu, DDu, qyt, tL, MDu, E4e;
export { $Dn, $Ru, $Vs, $yt, ADu, ARu, B0e, BDn, BRu, BVs, CDu, CRu, DDu, DRu, DVs, E4e, EDu, ERu, FDn, FRu, FVs, G3, GDn, GRu, GVs, Gyt, HDn, HRu, HVs, Hm, Hyt, I1, IDu, IRu, J4i, JRu, JVs, KRu, KVs, LRu, LVs, MDu, MRu, MVs, NRu, NVs, ORu, OVs, PMe, PRu, PVs, Q4i, QRu, QVs, RDu, RRu, RVs, SDu, TDu, TRu, UDn, UE, URu, UVs, Ux, VDn, VQe, VRu, VVs, Vyt, WDn, WRu, WVs, Wyt, X4i, XRu, XVs, Y4i, YRu, YVs, Yb, Z4i, ZRu, ZVs, _Du, _js, a$t, aDu, aUi, ajs, bDu, c$t, cDu, cUi, cjs, dDu, dUi, djs, eDu, eUi, ejs, fDu, fjs, gDu, gjs, hDu, hjs, i$t, iDu, iUi, ijs, jDn, jQe, jRu, jVs, jyt, kDu, l$t, lDu, lUi, ljs, mDu, mX, mjs, nDu, nUi, njs, o$t, oDu, oUi, ode, ojs, pDu, pX, pjs, qQe, qRu, qVs, qyt, r$t, rDu, rUi, rjs, s$t, sDu, sUi, sde, sjs, tDu, tL, tUi, tg, tjs, uDu, uUi, ujs, vDu, vjs, wDu, wRu, x1, xDu, xRu, xd, yDu, zQe, zRu, zVs };
var __wakaru_zd_initialized = false;
export function zd() {
if (__wakaru_zd_initialized) return;
__wakaru_zd_initialized = true;
"use strict";
x(), bi(), Pj(), KRn(), c4i(), GWs(), QRn(), W7t(), b4e(), tDn(), f4i(), STu(), T4i(), HTu(), Lyt(), gDn(), qTu(), Zxn(), K7t(), rdv(), yDn(), jZe(), tEu(), rIn(), nEu(), sdv(), NGs(), odv(), adv(), D4i(), tvu(), cBs(), UGs(), X7t(), cdv(), ldv(), JEu(), udv(), ddv(), hdv(), N4i(), pdv(), mdv(), gdv(), fdv(), vdv(), _dv(), bdv(), dIu(), ydv(), Sdv(), kdv(), wdv(), $4i(), Cdv(), GIu(), fAu(), Tdv(), Edv(), xdv(), Vxn(), Bj(), hee(), jW(), Uj(), FQe(), G4i(), UE = k.makeEnum("agent.v1.AgentMode", [
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
]), i$t = k.makeEnum("agent.v1.BackgroundTaskKind", [
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
]), VQe = k.makeEnum("agent.v1.BackgroundTaskStatus", [
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
]), RVs = k.makeEnum("agent.v1.BackgroundTaskNotificationContext", [
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
]), Ux = k.makeEnum("agent.v1.SubagentRunStatus", [
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
]), wRu = k.makeEnum("agent.v1.SubagentDispatchTool", [
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
]), B0e = k.makeEnum("agent.v1.CustomModeSource", [
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
]), xd = k.makeEnum("agent.v1.SimulatedMsgReason", [
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
]), G3 = k.makeEnum("agent.v1.SubscriptionSource", [
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
]), r$t = k.makeEnum("agent.v1.ThinkingStyle", [
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
]), FDn = k.makeEnum("agent.v1.ResponseComparisonDisplayOrder", [
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
]), CRu = k.makeEnum("agent.v1.ResponseComparisonSkipReason", [
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
]), $yt = k.makeMessageType("agent.v1.TaskArgs", ()=>[
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
            T: w$
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
            T: k.getEnumType(Jxn)
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
            T: k.getEnumType(pse)
        },
        {
            no: 11,
            name: "machine",
            kind: "message",
            T: DVs,
            opt: !0
        }
    ]), DVs = k.makeMessageType("agent.v1.TargetMachine", ()=>[
        {
            no: 1,
            name: "same_machine",
            kind: "message",
            T: TRu,
            oneof: "machine"
        },
        {
            no: 2,
            name: "new_cloud_vm",
            kind: "message",
            T: ERu,
            oneof: "machine"
        },
        {
            no: 3,
            name: "self_hosted_worker",
            kind: "message",
            T: xRu,
            oneof: "machine"
        },
        {
            no: 4,
            name: "self_hosted_pool",
            kind: "message",
            T: IRu,
            oneof: "machine"
        }
    ]), TRu = k.makeMessageType("agent.v1.SameMachineTarget", []), ERu = k.makeMessageType("agent.v1.NewCloudVmTarget", ()=>[
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
    ]), xRu = k.makeMessageType("agent.v1.SelfHostedWorkerTarget", ()=>[
        {
            no: 1,
            name: "worker_id",
            kind: "scalar",
            T: 9
        }
    ]), IRu = k.makeMessageType("agent.v1.SelfHostedPoolTarget", ()=>[
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
            T: ARu,
            repeated: !0
        }
    ]), ARu = k.makeMessageType("agent.v1.SelfHostedWorkerLabel", ()=>[
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
    ]), jQe = k.makeMessageType("agent.v1.TaskSuccess", ()=>[
        {
            no: 1,
            name: "conversation_steps",
            kind: "message",
            T: pX,
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
            T: k.getEnumType(Mve)
        },
        {
            no: 7,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), BDn = k.makeMessageType("agent.v1.TaskError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), sde = k.makeMessageType("agent.v1.TaskResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: jQe,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: BDn,
            oneof: "result"
        }
    ]), qQe = k.makeMessageType("agent.v1.TaskToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: $yt
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: sde
        },
        {
            no: 3,
            name: "cloud_agent_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), MVs = k.makeMessageType("agent.v1.TaskToolCallDelta", ()=>[
        {
            no: 1,
            name: "interaction_update",
            kind: "message",
            T: Yb
        }
    ]), RRu = k.makeMessageType("agent.v1.SetActiveBranchArgs", ()=>[
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
    ]), DRu = k.makeMessageType("agent.v1.SetActiveBranchSuccess", []), MRu = k.makeMessageType("agent.v1.SetActiveBranchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), PRu = k.makeMessageType("agent.v1.SetActiveBranchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: DRu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: MRu,
            oneof: "result"
        }
    ]), LRu = k.makeMessageType("agent.v1.SetActiveBranchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: RRu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PRu
        }
    ]), tg = k.makeMessageType("agent.v1.ToolCall", ()=>[
        {
            no: 1,
            name: "shell_tool_call",
            kind: "message",
            T: Ese,
            oneof: "tool"
        },
        {
            no: 3,
            name: "delete_tool_call",
            kind: "message",
            T: xyt,
            oneof: "tool"
        },
        {
            no: 4,
            name: "glob_tool_call",
            kind: "message",
            T: XRn,
            oneof: "tool"
        },
        {
            no: 5,
            name: "grep_tool_call",
            kind: "message",
            T: v4e,
            oneof: "tool"
        },
        {
            no: 8,
            name: "read_tool_call",
            kind: "message",
            T: IMe,
            oneof: "tool"
        },
        {
            no: 9,
            name: "update_todos_tool_call",
            kind: "message",
            T: eDn,
            oneof: "tool"
        },
        {
            no: 10,
            name: "read_todos_tool_call",
            kind: "message",
            T: sTu,
            oneof: "tool"
        },
        {
            no: 12,
            name: "edit_tool_call",
            kind: "message",
            T: xse,
            oneof: "tool"
        },
        {
            no: 13,
            name: "ls_tool_call",
            kind: "message",
            T: Dyt,
            oneof: "tool"
        },
        {
            no: 14,
            name: "read_lints_tool_call",
            kind: "message",
            T: JWs,
            oneof: "tool"
        },
        {
            no: 15,
            name: "mcp_tool_call",
            kind: "message",
            T: Pyt,
            oneof: "tool"
        },
        {
            no: 16,
            name: "sem_search_tool_call",
            kind: "message",
            T: mGs,
            oneof: "tool"
        },
        {
            no: 17,
            name: "create_plan_tool_call",
            kind: "message",
            T: j7t,
            oneof: "tool"
        },
        {
            no: 18,
            name: "web_search_tool_call",
            kind: "message",
            T: hDn,
            oneof: "tool"
        },
        {
            no: 19,
            name: "task_tool_call",
            kind: "message",
            T: qQe,
            oneof: "tool"
        },
        {
            no: 20,
            name: "list_mcp_resources_tool_call",
            kind: "message",
            T: yGs,
            oneof: "tool"
        },
        {
            no: 21,
            name: "read_mcp_resource_tool_call",
            kind: "message",
            T: SGs,
            oneof: "tool"
        },
        {
            no: 22,
            name: "apply_agent_diff_tool_call",
            kind: "message",
            T: eBs,
            oneof: "tool"
        },
        {
            no: 23,
            name: "ask_question_tool_call",
            kind: "message",
            T: kGs,
            oneof: "tool"
        },
        {
            no: 24,
            name: "fetch_tool_call",
            kind: "message",
            T: ZTu,
            oneof: "tool"
        },
        {
            no: 25,
            name: "switch_mode_tool_call",
            kind: "message",
            T: RGs,
            oneof: "tool"
        },
        {
            no: 28,
            name: "generate_image_tool_call",
            kind: "message",
            T: rBs,
            oneof: "tool"
        },
        {
            no: 29,
            name: "record_screen_tool_call",
            kind: "message",
            T: MGs,
            oneof: "tool"
        },
        {
            no: 30,
            name: "computer_use_tool_call",
            kind: "message",
            T: FBs,
            oneof: "tool"
        },
        {
            no: 31,
            name: "write_shell_stdin_tool_call",
            kind: "message",
            T: PGs,
            oneof: "tool"
        },
        {
            no: 32,
            name: "reflect_tool_call",
            kind: "message",
            T: aEu,
            oneof: "tool"
        },
        {
            no: 33,
            name: "setup_vm_environment_tool_call",
            kind: "message",
            T: cEu,
            oneof: "tool"
        },
        {
            no: 34,
            name: "truncated_tool_call",
            kind: "message",
            T: URu,
            oneof: "tool"
        },
        {
            no: 35,
            name: "start_grind_execution_tool_call",
            kind: "message",
            T: pEu,
            oneof: "tool"
        },
        {
            no: 36,
            name: "start_grind_planning_tool_call",
            kind: "message",
            T: _Eu,
            oneof: "tool"
        },
        {
            no: 37,
            name: "web_fetch_tool_call",
            kind: "message",
            T: FGs,
            oneof: "tool"
        },
        {
            no: 38,
            name: "report_bugfix_results_tool_call",
            kind: "message",
            T: evu,
            oneof: "tool"
        },
        {
            no: 39,
            name: "ai_attribution_tool_call",
            kind: "message",
            T: wmu,
            oneof: "tool"
        },
        {
            no: 40,
            name: "pr_management_tool_call",
            kind: "message",
            T: FEu,
            oneof: "tool"
        },
        {
            no: 41,
            name: "mcp_auth_tool_call",
            kind: "message",
            T: VGs,
            oneof: "tool"
        },
        {
            no: 42,
            name: "await_tool_call",
            kind: "message",
            T: VEu,
            oneof: "tool"
        },
        {
            no: 43,
            name: "blame_by_file_path_tool_call",
            kind: "message",
            T: YEu,
            oneof: "tool"
        },
        {
            no: 44,
            name: "get_mcp_tools_tool_call",
            kind: "message",
            T: KGs,
            oneof: "tool"
        },
        {
            no: 45,
            name: "report_bug_tool_call",
            kind: "message",
            T: rxu,
            oneof: "tool"
        },
        {
            no: 46,
            name: "set_active_branch_tool_call",
            kind: "message",
            T: LRu,
            oneof: "tool"
        },
        {
            no: 48,
            name: "communicate_update_tool_call",
            kind: "message",
            T: lxu,
            oneof: "tool"
        },
        {
            no: 49,
            name: "send_final_summary_tool_call",
            kind: "message",
            T: mxu,
            oneof: "tool"
        },
        {
            no: 51,
            name: "replace_env_tool_call",
            kind: "message",
            T: _xu,
            oneof: "tool"
        },
        {
            no: 52,
            name: "edit_pr_labels_tool_call",
            kind: "message",
            T: Cxu,
            oneof: "tool"
        },
        {
            no: 53,
            name: "record_ci_investigation_findings_tool_call",
            kind: "message",
            T: Dxu,
            oneof: "tool"
        },
        {
            no: 55,
            name: "send_message_tool_call",
            kind: "message",
            T: Bxu,
            oneof: "tool"
        },
        {
            no: 56,
            name: "fetch_cloud_agent_data_tool_call",
            kind: "message",
            T: Gxu,
            oneof: "tool"
        },
        {
            no: 58,
            name: "send_to_user_tool_call",
            kind: "message",
            T: Kxu,
            oneof: "tool"
        },
        {
            no: 61,
            name: "pi_read_tool_call",
            kind: "message",
            T: Yxu,
            oneof: "tool"
        },
        {
            no: 62,
            name: "pi_bash_tool_call",
            kind: "message",
            T: eIu,
            oneof: "tool"
        },
        {
            no: 63,
            name: "pi_edit_tool_call",
            kind: "message",
            T: sIu,
            oneof: "tool"
        },
        {
            no: 64,
            name: "pi_write_tool_call",
            kind: "message",
            T: hIu,
            oneof: "tool"
        },
        {
            no: 65,
            name: "pi_grep_tool_call",
            kind: "message",
            T: _Iu,
            oneof: "tool"
        },
        {
            no: 66,
            name: "pi_find_tool_call",
            kind: "message",
            T: wIu,
            oneof: "tool"
        },
        {
            no: 67,
            name: "pi_ls_tool_call",
            kind: "message",
            T: IIu,
            oneof: "tool"
        },
        {
            no: 68,
            name: "connect_scm_tool_call",
            kind: "message",
            T: iVs,
            oneof: "tool"
        },
        {
            no: 69,
            name: "search_conversations_tool_call",
            kind: "message",
            T: LIu,
            oneof: "tool"
        },
        {
            no: 70,
            name: "create_goal_tool_call",
            kind: "message",
            T: BIu,
            oneof: "tool"
        },
        {
            no: 71,
            name: "update_goal_tool_call",
            kind: "message",
            T: WIu,
            oneof: "tool"
        },
        {
            no: 73,
            name: "get_agent_status_tool_call",
            kind: "message",
            T: YIu,
            oneof: "tool"
        },
        {
            no: 74,
            name: "send_to_agent_tool_call",
            kind: "message",
            T: eAu,
            oneof: "tool"
        },
        {
            no: 75,
            name: "read_agent_transcript_tool_call",
            kind: "message",
            T: sAu,
            oneof: "tool"
        },
        {
            no: 76,
            name: "create_agent_tool_call",
            kind: "message",
            T: uAu,
            oneof: "tool"
        },
        {
            no: 77,
            name: "stop_agent_tool_call",
            kind: "message",
            T: gAu,
            oneof: "tool"
        },
        {
            no: 79,
            name: "write_canvas_tool_call",
            kind: "message",
            T: TAu,
            oneof: "tool"
        },
        {
            no: 80,
            name: "read_canvas_tool_call",
            kind: "message",
            T: RAu,
            oneof: "tool"
        },
        {
            no: 81,
            name: "generate_video_tool_call",
            kind: "message",
            T: NAu,
            oneof: "tool"
        },
        {
            no: 82,
            name: "x_search_tool_call",
            kind: "message",
            T: WAu,
            oneof: "tool"
        },
        {
            no: 54,
            name: "hook_additional_contexts",
            kind: "message",
            T: ybt,
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
    ]), NRu = k.makeMessageType("agent.v1.TruncatedToolCallArgs", []), ORu = k.makeMessageType("agent.v1.TruncatedToolCallSuccess", []), FRu = k.makeMessageType("agent.v1.TruncatedToolCallError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), BRu = k.makeMessageType("agent.v1.TruncatedToolCallResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ORu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: FRu,
            oneof: "result"
        }
    ]), URu = k.makeMessageType("agent.v1.TruncatedToolCall", ()=>[
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
            T: NRu
        },
        {
            no: 3,
            name: "result",
            kind: "message",
            T: BRu
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
            T: tg
        }
    ]), PVs = k.makeMessageType("agent.v1.ToolCallDelta", ()=>[
        {
            no: 1,
            name: "shell_tool_call_delta",
            kind: "message",
            T: BWs,
            oneof: "delta"
        },
        {
            no: 2,
            name: "task_tool_call_delta",
            kind: "message",
            T: MVs,
            oneof: "delta"
        },
        {
            no: 3,
            name: "edit_tool_call_delta",
            kind: "message",
            T: ZWs,
            oneof: "delta"
        },
        {
            no: 4,
            name: "replace_env_tool_call_delta",
            kind: "message",
            T: bxu,
            oneof: "delta"
        }
    ]), pX = k.makeMessageType("agent.v1.ConversationStep", ()=>[
        {
            no: 1,
            name: "assistant_message",
            kind: "message",
            T: Gyt,
            oneof: "message"
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: tg,
            oneof: "message"
        },
        {
            no: 3,
            name: "thinking_message",
            kind: "message",
            T: ZVs,
            oneof: "message"
        }
    ]), x1 = k.makeMessageType("agent.v1.ConversationAction", ()=>[
        {
            no: 1,
            name: "user_message_action",
            kind: "message",
            T: PMe,
            oneof: "action"
        },
        {
            no: 2,
            name: "resume_action",
            kind: "message",
            T: a$t,
            oneof: "action"
        },
        {
            no: 3,
            name: "cancel_action",
            kind: "message",
            T: GVs,
            oneof: "action"
        },
        {
            no: 4,
            name: "summarize_action",
            kind: "message",
            T: rUi,
            oneof: "action"
        },
        {
            no: 5,
            name: "shell_command_action",
            kind: "message",
            T: rDu,
            oneof: "action"
        },
        {
            no: 6,
            name: "start_plan_action",
            kind: "message",
            T: sDu,
            oneof: "action"
        },
        {
            no: 7,
            name: "execute_plan_action",
            kind: "message",
            T: Hyt,
            oneof: "action"
        },
        {
            no: 8,
            name: "async_ask_question_completion_action",
            kind: "message",
            T: VVs,
            oneof: "action"
        },
        {
            no: 10,
            name: "cancel_subagent_action",
            kind: "message",
            T: OVs,
            oneof: "action"
        },
        {
            no: 12,
            name: "background_task_completion_action",
            kind: "message",
            T: LVs,
            oneof: "action"
        },
        {
            no: 13,
            name: "background_shell_action",
            kind: "message",
            T: FVs,
            oneof: "action"
        },
        {
            no: 14,
            name: "background_subagent_action",
            kind: "message",
            T: BVs,
            oneof: "action"
        },
        {
            no: 16,
            name: "subscription_notification_action",
            kind: "message",
            T: HVs,
            oneof: "action"
        },
        {
            no: 18,
            name: "goal_continuation_action",
            kind: "message",
            T: WVs,
            oneof: "action"
        },
        {
            no: 19,
            name: "inject_context_action",
            kind: "message",
            T: s$t,
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
            T: Y4i,
            opt: !0
        },
        {
            no: 17,
            name: "request_context_parts",
            kind: "message",
            T: uVs,
            opt: !0
        }
    ]), Y4i = k.makeMessageType("agent.v1.TriggeringUserInfo", ()=>[
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
    ]), LVs = k.makeMessageType("agent.v1.BackgroundTaskCompletionAction", ()=>[
        {
            no: 1,
            name: "completions",
            kind: "message",
            T: X4i,
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
            T: x$
        }
    ]), X4i = k.makeMessageType("agent.v1.BackgroundTaskCompletion", ()=>[
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
            T: k.getEnumType(i$t)
        },
        {
            no: 3,
            name: "status",
            kind: "enum",
            T: k.getEnumType(VQe)
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
            T: k.getEnumType(Ebt)
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
            T: k.getEnumType(RVs)
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
    ]), NVs = k.makeMessageType("agent.v1.SubagentRunState", ()=>[
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
            T: k.getEnumType(pse)
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: k.getEnumType(Ux)
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
            T: k.getEnumType(Ebt),
            opt: !0
        }
    ]), $Ru = k.makeMessageType("agent.v1.SubagentDispatchStep", ()=>[
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
            T: k.getEnumType(wRu)
        },
        {
            no: 4,
            name: "backgrounded",
            kind: "scalar",
            T: 8
        }
    ]), OVs = k.makeMessageType("agent.v1.CancelSubagentAction", ()=>[
        {
            no: 1,
            name: "subagent_id",
            kind: "scalar",
            T: 9
        }
    ]), FVs = k.makeMessageType("agent.v1.BackgroundShellAction", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), BVs = k.makeMessageType("agent.v1.BackgroundSubagentAction", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), Z4i = k.makeMessageType("agent.v1.InterruptedPendingToolCallResolution", ()=>[
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
            T: k$,
            oneof: "resolution"
        },
        {
            no: 3,
            name: "task_result",
            kind: "message",
            T: sde,
            oneof: "resolution"
        }
    ]), UDn = k.makeMessageType("agent.v1.InterruptedPendingToolCallResolutions", ()=>[
        {
            no: 1,
            name: "resolutions",
            kind: "message",
            T: Z4i,
            repeated: !0
        }
    ]), UVs = k.makeMessageType("agent.v1.ConversationHistory", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "message",
            T: HRu,
            repeated: !0
        },
        {
            no: 2,
            name: "replace_user_info",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), HRu = k.makeMessageType("agent.v1.ConversationHistoryMessage", ()=>[
        {
            no: 1,
            name: "user",
            kind: "message",
            T: WRu,
            oneof: "message"
        },
        {
            no: 2,
            name: "assistant",
            kind: "message",
            T: VRu,
            oneof: "message"
        },
        {
            no: 3,
            name: "tool",
            kind: "message",
            T: YRu,
            oneof: "message"
        }
    ]), WRu = k.makeMessageType("agent.v1.ConversationHistoryUserMessage", ()=>[
        {
            no: 1,
            name: "content",
            kind: "message",
            T: GRu,
            repeated: !0
        }
    ]), GRu = k.makeMessageType("agent.v1.ConversationHistoryUserContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: Q4i,
            oneof: "content"
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: $Vs,
            oneof: "content"
        }
    ]), Q4i = k.makeMessageType("agent.v1.ConversationHistoryTextContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), $Vs = k.makeMessageType("agent.v1.ConversationHistoryImageContent", ()=>[
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
    ]), VRu = k.makeMessageType("agent.v1.ConversationHistoryAssistantMessage", ()=>[
        {
            no: 1,
            name: "content",
            kind: "message",
            T: jRu,
            repeated: !0
        }
    ]), jRu = k.makeMessageType("agent.v1.ConversationHistoryAssistantContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: Q4i,
            oneof: "content"
        },
        {
            no: 2,
            name: "reasoning",
            kind: "message",
            T: qRu,
            oneof: "content"
        },
        {
            no: 3,
            name: "redacted_reasoning",
            kind: "message",
            T: zRu,
            oneof: "content"
        },
        {
            no: 4,
            name: "tool_call",
            kind: "message",
            T: KRu,
            oneof: "content"
        }
    ]), qRu = k.makeMessageType("agent.v1.ConversationHistoryReasoningContent", ()=>[
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
    ]), zRu = k.makeMessageType("agent.v1.ConversationHistoryRedactedReasoningContent", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]), KRu = k.makeMessageType("agent.v1.ConversationHistoryToolCall", ()=>[
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
    ]), YRu = k.makeMessageType("agent.v1.ConversationHistoryToolMessage", ()=>[
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
            T: XRu,
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
            T: ybt,
            repeated: !0
        }
    ]), XRu = k.makeMessageType("agent.v1.ConversationHistoryToolResultContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: Q4i,
            oneof: "content"
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: $Vs,
            oneof: "content"
        }
    ]), PMe = k.makeMessageType("agent.v1.UserMessageAction", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: I1
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: x$
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
            T: I1,
            repeated: !0
        },
        {
            no: 6,
            name: "interrupted_pending_tool_call_resolutions",
            kind: "message",
            T: UDn,
            opt: !0
        },
        {
            no: 7,
            name: "conversation_history",
            kind: "message",
            T: UVs,
            opt: !0
        },
        {
            no: 8,
            name: "trailing_conversation_history",
            kind: "message",
            T: UVs,
            opt: !0
        }
    ]), HVs = k.makeMessageType("agent.v1.SubscriptionNotificationAction", ()=>[
        {
            no: 1,
            name: "notifications",
            kind: "message",
            T: I1,
            repeated: !0
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: x$
        },
        {
            no: 3,
            name: "send_to_interaction_listener",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), WVs = k.makeMessageType("agent.v1.GoalContinuationAction", []), s$t = k.makeMessageType("agent.v1.InjectContextAction", ()=>[
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
            T: J4i,
            oneof: "payload"
        },
        {
            no: 4,
            name: "system_context",
            kind: "message",
            T: ZRu,
            oneof: "payload"
        }
    ]), J4i = k.makeMessageType("agent.v1.UserContextInjection", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: I1
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: x$
        }
    ]), ZRu = k.makeMessageType("agent.v1.SystemContextInjection", ()=>[
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
    ]), QRu = k.makeMessageType("agent.v1.ContextInjectionState", ()=>[
        {
            no: 1,
            name: "queued",
            kind: "message",
            T: JRu,
            oneof: "state"
        },
        {
            no: 2,
            name: "delivered",
            kind: "message",
            T: eDu,
            oneof: "state"
        },
        {
            no: 3,
            name: "queued_for_next_turn",
            kind: "message",
            T: tDu,
            oneof: "state"
        },
        {
            no: 4,
            name: "cancelled",
            kind: "message",
            T: nDu,
            oneof: "state"
        },
        {
            no: 5,
            name: "rejected",
            kind: "message",
            T: iDu,
            oneof: "state"
        }
    ]), JRu = k.makeMessageType("agent.v1.ContextInjectionQueued", []), eDu = k.makeMessageType("agent.v1.ContextInjectionDelivered", ()=>[
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
    ]), tDu = k.makeMessageType("agent.v1.ContextInjectionQueuedForNextTurn", []), nDu = k.makeMessageType("agent.v1.ContextInjectionCancelled", []), iDu = k.makeMessageType("agent.v1.ContextInjectionRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), eUi = k.makeMessageType("agent.v1.SubmittedCustomMode", ()=>[
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
            T: k.getEnumType(B0e)
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
    ]), tUi = k.makeMessageType("agent.v1.CustomModeDescriptor", ()=>[
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
            T: k.getEnumType(B0e)
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
    ]), nUi = k.makeMessageType("agent.v1.SubmittedExitedCustomMode", ()=>[
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
    ]), iUi = k.makeMessageType("agent.v1.CustomModeExitIntent", ()=>[
        {
            no: 1,
            name: "next_mode",
            kind: "enum",
            T: k.getEnumType(UE)
        },
        {
            no: 2,
            name: "exited_mode",
            kind: "message",
            T: nUi
        }
    ]), o$t = k.makeMessageType("agent.v1.CustomModeIntent", ()=>[
        {
            no: 1,
            name: "enter",
            kind: "message",
            T: eUi,
            oneof: "intent"
        },
        {
            no: 2,
            name: "exit",
            kind: "message",
            T: iUi,
            oneof: "intent"
        }
    ]), GVs = k.makeMessageType("agent.v1.CancelAction", ()=>[
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
            T: UDn,
            opt: !0
        }
    ]), a$t = k.makeMessageType("agent.v1.ResumeAction", ()=>[
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: x$
        }
    ]), VVs = k.makeMessageType("agent.v1.AsyncAskQuestionCompletionAction", ()=>[
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
            T: z7t
        },
        {
            no: 3,
            name: "result",
            kind: "message",
            T: Ise
        },
        {
            no: 4,
            name: "request_context",
            kind: "message",
            T: x$
        }
    ]), rUi = k.makeMessageType("agent.v1.SummarizeAction", []), rDu = k.makeMessageType("agent.v1.ShellCommandAction", ()=>[
        {
            no: 1,
            name: "shell_command",
            kind: "message",
            T: QVs
        },
        {
            no: 2,
            name: "exec_id",
            kind: "scalar",
            T: 9
        }
    ]), sDu = k.makeMessageType("agent.v1.StartPlanAction", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: I1
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: x$
        },
        {
            no: 3,
            name: "is_spec",
            kind: "scalar",
            T: 8
        }
    ]), Hyt = k.makeMessageType("agent.v1.ExecutePlanAction", ()=>[
        {
            no: 1,
            name: "request_context",
            kind: "message",
            T: x$
        },
        {
            no: 2,
            name: "plan",
            kind: "message",
            T: oUi,
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
            T: k.getEnumType(UE)
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
    ]), jVs = k.makeMessageType("agent.v1.InteractionResponseMetadata", ()=>[
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
            T: tL,
            opt: !0
        },
        {
            no: 3,
            name: "skipped_question_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), qVs = k.makeMessageType("agent.v1.SubscriptionEventDisplay", ()=>[
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
    ]), sUi = k.makeMessageType("agent.v1.UserDisplayInfo", ()=>[
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
    ]), oDu = k.makeMessageType("agent.v1.ExecutePlanInfo", ()=>[
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
    ]), Wyt = k.makeMessageType("agent.v1.ProjectDetails", ()=>[
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
            T: zVs,
            opt: !0
        },
        {
            no: 3,
            name: "side_chat",
            kind: "message",
            T: KVs,
            opt: !0
        },
        {
            no: 4,
            name: "init_description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), zVs = k.makeMessageType("agent.v1.ProjectSubagentDetails", ()=>[
        {
            no: 2,
            name: "store_dir",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), KVs = k.makeMessageType("agent.v1.ProjectSideChatDetails", ()=>[
        {
            no: 1,
            name: "store_dir",
            kind: "scalar",
            T: 9
        }
    ]), I1 = k.makeMessageType("agent.v1.UserMessage", ()=>[
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
            T: Tee,
            opt: !0
        },
        {
            no: 4,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(UE)
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
            T: k.getEnumType(xd),
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
            T: Y4i,
            opt: !0
        },
        {
            no: 14,
            name: "execute_plan_info",
            kind: "message",
            T: oDu,
            opt: !0
        },
        {
            no: 15,
            name: "simulated_message_metadata",
            kind: "message",
            T: aDu,
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
            T: ybt,
            repeated: !0
        },
        {
            no: 22,
            name: "custom_mode_intent",
            kind: "message",
            T: o$t,
            opt: !0
        },
        {
            no: 23,
            name: "project_details",
            kind: "message",
            T: Wyt,
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
            T: YVs,
            opt: !0
        },
        {
            no: 30,
            name: "forked_context",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), aDu = k.makeMessageType("agent.v1.UserMessage.SimulatedMessageMetadata", ()=>[
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
            T: k.getEnumType(G3),
            opt: !0
        },
        {
            no: 6,
            name: "subscription_event_display",
            kind: "message",
            T: qVs,
            opt: !0
        },
        {
            no: 7,
            name: "interaction_response",
            kind: "message",
            T: jVs,
            opt: !0
        }
    ], {
    localName: "UserMessage_SimulatedMessageMetadata"
}), YVs = k.makeMessageType("agent.v1.MessageSender", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(XVs)
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
    ]), XVs = k.makeEnum("agent.v1.MessageSender.Kind", [
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
]), Gyt = k.makeMessageType("agent.v1.AssistantMessage", ()=>[
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
    ]), ZVs = k.makeMessageType("agent.v1.ThinkingMessage", ()=>[
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
    ]), QVs = k.makeMessageType("agent.v1.ShellCommand", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        }
    ]), cDu = k.makeMessageType("agent.v1.ShellOutput", ()=>[
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
    ]), oUi = k.makeMessageType("agent.v1.ConversationPlan", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        }
    ]), aUi = k.makeMessageType("agent.v1.PlanRegistryEntry", ()=>[
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
    ]), $Dn = k.makeMessageType("agent.v1.GoalState", ()=>[
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
            T: k.getEnumType(N0e)
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
    ]), mX = k.makeMessageType("agent.v1.ConversationTurnStructure", ()=>[
        {
            no: 1,
            name: "agent_conversation_turn",
            kind: "message",
            T: HDn,
            oneof: "turn"
        },
        {
            no: 2,
            name: "shell_conversation_turn",
            kind: "message",
            T: uDu,
            oneof: "turn"
        }
    ]), HDn = k.makeMessageType("agent.v1.AgentConversationTurnStructure", ()=>[
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
            T: $Ru,
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
            T: lDu,
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
    ]), lDu = k.makeMessageType("agent.v1.LongReasoningReminderState", ()=>[
        {
            no: 1,
            name: "remaining_delay_calls",
            kind: "scalar",
            T: 13
        }
    ]), uDu = k.makeMessageType("agent.v1.ShellConversationTurnStructure", ()=>[
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
    ]), dDu = k.makeMessageType("agent.v1.ConversationSummary", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), JVs = k.makeMessageType("agent.v1.ConversationSummaryArchive", ()=>[
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
    ]), hDu = k.makeMessageType("agent.v1.PromptTokenBreakdownCategory", ()=>[
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
    ]), pDu = k.makeMessageType("agent.v1.PromptTokenBreakdownSnapshot", ()=>[
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
            T: hDu,
            repeated: !0
        }
    ]), mDu = k.makeMessageType("agent.v1.PromptContextSourceRef", ()=>[
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
    ]), gDu = k.makeMessageType("agent.v1.PromptContextNode", ()=>[
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
            T: mDu,
            opt: !0
        },
        {
            no: 12,
            name: "inline_content",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ejs = k.makeMessageType("agent.v1.PromptContextUsageTree", ()=>[
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
            T: gDu,
            repeated: !0
        }
    ]), tjs = k.makeMessageType("agent.v1.ConversationTokenDetails", ()=>[
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
            T: pDu,
            opt: !0
        },
        {
            no: 4,
            name: "prompt_context_usage_tree",
            kind: "message",
            T: ejs,
            opt: !0
        }
    ]), fDu = k.makeMessageType("agent.v1.FileState", ()=>[
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
    ]), njs = k.makeMessageType("agent.v1.FileStateStructure", ()=>[
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
    ]), vDu = k.makeMessageType("agent.v1.StepTiming", ()=>[
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
    ]), _Du = k.makeMessageType("agent.v1.TurnTelemetryState", ()=>[
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
    ]), ijs = k.makeMessageType("agent.v1.CommunicateUpdateHistoryEntry", ()=>[
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
    ]), bDu = k.makeMessageType("agent.v1.CommunicateUpdateTurnState", ()=>[
        {
            no: 1,
            name: "history",
            kind: "message",
            T: ijs,
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
    ]), c$t = k.makeMessageType("agent.v1.SubagentPersistedState", ()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: Hm
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
            T: w$
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
            T: k.getEnumType(pse)
        },
        {
            no: 7,
            name: "cloud_subagent",
            kind: "message",
            T: rjs,
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
            T: DVs,
            opt: !0
        }
    ]), rjs = k.makeMessageType("agent.v1.CloudSubagentReference", ()=>[
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
    ]), yDu = k.makeMessageType("agent.v1.TrackedGitRepo", ()=>[
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
    ]), Hm = k.makeMessageType("agent.v1.ConversationStateStructure", ()=>[
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
            T: tjs
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
            T: k.getEnumType(UE),
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
                T: njs
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
            T: vDu,
            repeated: !0
        },
        {
            no: 16,
            name: "subagent_states",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: c$t
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
                T: aUi
            }
        },
        {
            no: 21,
            name: "tracked_git_repo_branches",
            kind: "message",
            T: yDu,
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
            T: ijs,
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
                T: bDu
            }
        },
        {
            no: 30,
            name: "subagent_runs_by_parent_tool_call_id",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: NVs
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
            T: $Dn,
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
            T: _Du,
            opt: !0
        },
        {
            no: 42,
            name: "mentioned_agent_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), SDu = k.makeMessageType("agent.v1.ThinkingDetails", []), WDn = k.makeMessageType("agent.v1.ClientLlmGatewayCredential", ()=>[
        {
            no: 1,
            name: "bearer_token",
            kind: "scalar",
            T: 9
        }
    ]), ode = k.makeMessageType("agent.v1.ModelDetails", ()=>[
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
            T: SDu,
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
            T: w4e,
            oneof: "credentials"
        },
        {
            no: 9,
            name: "azure_credentials",
            kind: "message",
            T: C4e,
            oneof: "credentials"
        },
        {
            no: 10,
            name: "bedrock_credentials",
            kind: "message",
            T: T4e,
            oneof: "credentials"
        }
    ]), l$t = k.makeMessageType("agent.v1.SubagentModelOverride", ()=>[
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
            T: MD,
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
    ]), sjs = k.makeMessageType("agent.v1.PreFetchedBlob", ()=>[
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
    ]), ojs = k.makeMessageType("agent.v1.AgentRunRequest", ()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: Hm
        },
        {
            no: 2,
            name: "action",
            kind: "message",
            T: x1
        },
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: ode
        },
        {
            no: 9,
            name: "requested_model",
            kind: "message",
            T: MD,
            opt: !0
        },
        {
            no: 4,
            name: "mcp_tools",
            kind: "message",
            T: y4i
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
            T: V7t,
            opt: !0
        },
        {
            no: 7,
            name: "skill_options",
            kind: "message",
            T: j4i,
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
            T: MD,
            repeated: !0
        },
        {
            no: 15,
            name: "selected_subagent_model_details",
            kind: "message",
            T: ode,
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
            T: sjs,
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
            T: l$t,
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
            T: xDn,
            opt: !0
        },
        {
            no: 30,
            name: "client_llm_gateway_credential",
            kind: "message",
            T: WDn,
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
    ]), Vyt = k.makeMessageType("agent.v1.TextDeltaUpdate", ()=>[
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
    ]), kDu = k.makeMessageType("agent.v1.RoutedModelUpdate", ()=>[
        {
            no: 1,
            name: "display_name",
            kind: "scalar",
            T: 9
        }
    ]), jyt = k.makeMessageType("agent.v1.ToolCallStartedUpdate", ()=>[
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
            T: tg
        },
        {
            no: 3,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]), zQe = k.makeMessageType("agent.v1.ToolCallCompletedUpdate", ()=>[
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
            T: tg
        },
        {
            no: 3,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]), cUi = k.makeMessageType("agent.v1.ToolCallDeltaUpdate", ()=>[
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
            T: PVs
        },
        {
            no: 3,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]), lUi = k.makeMessageType("agent.v1.PartialToolCallUpdate", ()=>[
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
            T: tg
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
    ]), GDn = k.makeMessageType("agent.v1.ThinkingDeltaUpdate", ()=>[
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
            T: k.getEnumType(r$t),
            opt: !0
        }
    ]), VDn = k.makeMessageType("agent.v1.ThinkingCompletedUpdate", ()=>[
        {
            no: 1,
            name: "thinking_duration_ms",
            kind: "scalar",
            T: 5
        }
    ]), ajs = k.makeMessageType("agent.v1.TokenDeltaUpdate", ()=>[
        {
            no: 1,
            name: "tokens",
            kind: "scalar",
            T: 5
        }
    ]), cjs = k.makeMessageType("agent.v1.SummaryUpdate", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), ljs = k.makeMessageType("agent.v1.SummaryStartedUpdate", []), uUi = k.makeMessageType("agent.v1.HeartbeatUpdate", []), ujs = k.makeMessageType("agent.v1.SummaryCompletedUpdate", ()=>[
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
    ]), djs = k.makeMessageType("agent.v1.ShellOutputDeltaUpdate", ()=>[
        {
            no: 1,
            name: "stdout",
            kind: "message",
            T: u3i,
            oneof: "event"
        },
        {
            no: 2,
            name: "stderr",
            kind: "message",
            T: d3i,
            oneof: "event"
        },
        {
            no: 3,
            name: "exit",
            kind: "message",
            T: h3i,
            oneof: "event"
        },
        {
            no: 4,
            name: "start",
            kind: "message",
            T: X3s,
            oneof: "event"
        }
    ]), jDn = k.makeMessageType("agent.v1.TurnEndedUpdate", ()=>[
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
    ]), dUi = k.makeMessageType("agent.v1.UserMessageAppendedUpdate", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: I1
        }
    ]), hjs = k.makeMessageType("agent.v1.StepStartedUpdate", ()=>[
        {
            no: 1,
            name: "step_id",
            kind: "scalar",
            T: 4
        }
    ]), pjs = k.makeMessageType("agent.v1.ToolRequestsListedUpdate", ()=>[
        {
            no: 1,
            name: "call_count",
            kind: "scalar",
            T: 13
        }
    ]), mjs = k.makeMessageType("agent.v1.StepCompletedUpdate", ()=>[
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
    ]), gjs = k.makeMessageType("agent.v1.PromptSuggestionUpdate", ()=>[
        {
            no: 1,
            name: "suggestion",
            kind: "scalar",
            T: 9
        }
    ]), fjs = k.makeMessageType("agent.v1.ActiveBranchChange", ()=>[
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
    ]), vjs = k.makeMessageType("agent.v1.FeedbackRequestCategory", ()=>[
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
    ]), wDu = k.makeMessageType("agent.v1.FeedbackRequestCategoryGroup", ()=>[
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
            T: vjs,
            repeated: !0
        }
    ]), _js = k.makeMessageType("agent.v1.FeedbackRequestUpdate", ()=>[
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
            T: vjs,
            repeated: !0
        },
        {
            no: 4,
            name: "category_groups",
            kind: "message",
            T: wDu,
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
    ]), CDu = k.makeMessageType("agent.v1.ResponseComparisonStarted", ()=>[
        {
            no: 1,
            name: "display_order",
            kind: "enum",
            T: k.getEnumType(FDn)
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
    ]), TDu = k.makeMessageType("agent.v1.ResponseComparisonTextDelta", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), EDu = k.makeMessageType("agent.v1.ResponseComparisonCompleted", []), xDu = k.makeMessageType("agent.v1.ResponseComparisonSkipped", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: k.getEnumType(CRu)
        }
    ]), IDu = k.makeMessageType("agent.v1.ResponseComparisonUpdate", ()=>[
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
            T: CDu,
            oneof: "event"
        },
        {
            no: 3,
            name: "text_delta",
            kind: "message",
            T: TDu,
            oneof: "event"
        },
        {
            no: 4,
            name: "completed",
            kind: "message",
            T: EDu,
            oneof: "event"
        },
        {
            no: 5,
            name: "skipped",
            kind: "message",
            T: xDu,
            oneof: "event"
        }
    ]), Yb = k.makeMessageType("agent.v1.InteractionUpdate", ()=>[
        {
            no: 1,
            name: "text_delta",
            kind: "message",
            T: Vyt,
            oneof: "message"
        },
        {
            no: 7,
            name: "partial_tool_call",
            kind: "message",
            T: lUi,
            oneof: "message"
        },
        {
            no: 15,
            name: "tool_call_delta",
            kind: "message",
            T: cUi,
            oneof: "message"
        },
        {
            no: 2,
            name: "tool_call_started",
            kind: "message",
            T: jyt,
            oneof: "message"
        },
        {
            no: 3,
            name: "tool_call_completed",
            kind: "message",
            T: zQe,
            oneof: "message"
        },
        {
            no: 4,
            name: "thinking_delta",
            kind: "message",
            T: GDn,
            oneof: "message"
        },
        {
            no: 5,
            name: "thinking_completed",
            kind: "message",
            T: VDn,
            oneof: "message"
        },
        {
            no: 6,
            name: "user_message_appended",
            kind: "message",
            T: dUi,
            oneof: "message"
        },
        {
            no: 8,
            name: "token_delta",
            kind: "message",
            T: ajs,
            oneof: "message"
        },
        {
            no: 9,
            name: "summary",
            kind: "message",
            T: cjs,
            oneof: "message"
        },
        {
            no: 10,
            name: "summary_started",
            kind: "message",
            T: ljs,
            oneof: "message"
        },
        {
            no: 11,
            name: "summary_completed",
            kind: "message",
            T: ujs,
            oneof: "message"
        },
        {
            no: 12,
            name: "shell_output_delta",
            kind: "message",
            T: djs,
            oneof: "message"
        },
        {
            no: 13,
            name: "heartbeat",
            kind: "message",
            T: uUi,
            oneof: "message"
        },
        {
            no: 14,
            name: "turn_ended",
            kind: "message",
            T: jDn,
            oneof: "message"
        },
        {
            no: 16,
            name: "step_started",
            kind: "message",
            T: hjs,
            oneof: "message"
        },
        {
            no: 17,
            name: "step_completed",
            kind: "message",
            T: mjs,
            oneof: "message"
        },
        {
            no: 27,
            name: "tool_requests_listed",
            kind: "message",
            T: pjs,
            oneof: "message"
        },
        {
            no: 18,
            name: "prompt_suggestion",
            kind: "message",
            T: gjs,
            oneof: "message"
        },
        {
            no: 19,
            name: "post_request_prompt",
            kind: "message",
            T: RDu,
            oneof: "message"
        },
        {
            no: 20,
            name: "active_branch_change",
            kind: "message",
            T: fjs,
            oneof: "message"
        },
        {
            no: 21,
            name: "feedback_request",
            kind: "message",
            T: _js,
            oneof: "message"
        },
        {
            no: 22,
            name: "response_comparison",
            kind: "message",
            T: IDu,
            oneof: "message"
        },
        {
            no: 23,
            name: "context_injection_state",
            kind: "message",
            T: ADu,
            oneof: "message"
        },
        {
            no: 24,
            name: "routed_model",
            kind: "message",
            T: kDu,
            oneof: "message"
        },
        {
            no: 26,
            name: "grok_bot_nudge",
            kind: "message",
            T: DDu,
            oneof: "message"
        },
        {
            no: 25,
            name: "message_started_at_ms",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), ADu = k.makeMessageType("agent.v1.ContextInjectionStateUpdate", ()=>[
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
            T: QRu
        }
    ]), RDu = k.makeMessageType("agent.v1.PostRequestPromptUpdate", ()=>[
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
    ]), DDu = k.makeMessageType("agent.v1.GrokBotNudgeUpdate", ()=>[
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
    ]), qyt = k.makeMessageType("agent.v1.InteractionQuery", ()=>[
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
            T: jTu,
            oneof: "query"
        },
        {
            no: 3,
            name: "ask_question_interaction_query",
            kind: "message",
            T: MDu,
            oneof: "query"
        },
        {
            no: 4,
            name: "switch_mode_request_query",
            kind: "message",
            T: DGs,
            oneof: "query"
        },
        {
            no: 7,
            name: "create_plan_request_query",
            kind: "message",
            T: WTu,
            oneof: "query"
        },
        {
            no: 8,
            name: "setup_vm_environment_args",
            kind: "message",
            T: LGs,
            oneof: "query"
        },
        {
            no: 9,
            name: "web_fetch_request_query",
            kind: "message",
            T: kEu,
            oneof: "query"
        },
        {
            no: 10,
            name: "pr_management_request_query",
            kind: "message",
            T: BEu,
            oneof: "query"
        },
        {
            no: 11,
            name: "mcp_auth_request_query",
            kind: "message",
            T: UEu,
            oneof: "query"
        },
        {
            no: 12,
            name: "generate_image_request_query",
            kind: "message",
            T: ymu,
            oneof: "query"
        },
        {
            no: 13,
            name: "replace_env_args",
            kind: "message",
            T: YGs,
            oneof: "query"
        },
        {
            no: 14,
            name: "connect_scm_request_query",
            kind: "message",
            T: PIu,
            oneof: "query"
        }
    ]), tL = k.makeMessageType("agent.v1.InteractionResponse", ()=>[
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
            T: Nyt,
            oneof: "result"
        },
        {
            no: 3,
            name: "ask_question_interaction_response",
            kind: "message",
            T: E4e,
            oneof: "result"
        },
        {
            no: 4,
            name: "switch_mode_request_response",
            kind: "message",
            T: L0e,
            oneof: "result"
        },
        {
            no: 7,
            name: "create_plan_request_response",
            kind: "message",
            T: E4i,
            oneof: "result"
        },
        {
            no: 8,
            name: "setup_vm_environment_result",
            kind: "message",
            T: SDn,
            oneof: "result"
        },
        {
            no: 9,
            name: "web_fetch_request_response",
            kind: "message",
            T: HQe,
            oneof: "result"
        },
        {
            no: 10,
            name: "pr_management_result",
            kind: "message",
            T: wDn,
            oneof: "result"
        },
        {
            no: 11,
            name: "mcp_auth_request_response",
            kind: "message",
            T: E$,
            oneof: "result"
        },
        {
            no: 12,
            name: "generate_image_request_response",
            kind: "message",
            T: m3i,
            oneof: "result"
        },
        {
            no: 13,
            name: "replace_env_result",
            kind: "message",
            T: CDn,
            oneof: "result"
        },
        {
            no: 14,
            name: "connect_scm_request_response",
            kind: "message",
            T: WQe,
            oneof: "result"
        }
    ]), MDu = k.makeMessageType("agent.v1.AskQuestionInteractionQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: z7t
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), E4e = k.makeMessageType("agent.v1.AskQuestionInteractionResponse", ()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: Ise
        }
    ]);

}
