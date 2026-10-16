import { Nni, ju } from "./agent_pb.js";
import { Obr, bDo, g4t } from "./bugbot_pb.js";
import { $ni, Bni, Fmn, Fve, Gni, I4o, Umn, Uni, i1r, jmn, jni, n1r, o1r, sd, wy } from "./chat_pb.js";
import { Z9o, f7 } from "./cloud_agent_scope_pb.js";
import { aii, oii } from "./cmdk_pb.js";
import { dId, eBo } from "./context_ast_pb.js";
import { cW, iii } from "./context_pb.js";
import { F1r, M1r, S9o, T9o, lW, zte } from "./cpp_pb.js";
import { COo, Gyr } from "./docs_pb.js";
import { A5 } from "./empty_pb.js";
import { Bve, Gmn, Xse, p5e, qde } from "./exec_pb.js";
import { Q9o, VEd } from "./fastapply_pb.js";
import { qmn, y9o } from "./filesyncserver_pb.js";
import { $Iy, oBo, sBo } from "./interface_agent_pb.js";
import { $1r, H1r, lii, oId, sId } from "./lint_pb.js";
import { I1r, g9o } from "./lsp_subgraph_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Cx, Q9, Zmd, ngd, omd, qse, rmd } from "./repository_pb.js";
import { AD, JF, SQ, ott, rtt, stt } from "./requested_model_pb.js";
import { C1r, k1r, w1r } from "./smart_mode_classifier_exec_pb.js";
import { nz } from "./struct_pb.js";
import { Pu, Vse, gyr, uti } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { G1r, RId } from "./usage_pb.js";
import { $ke, Ehd, Hke, Hu, Ihd, Lbr, Mbr, Mg, Nbr, QE, R$e, Rpn, Xdd, Z9, ZF, aW, gDo, jte, kAe, m7, oW, rL, wAe, wo, xhd, xj } from "./utils_pb.js";
var aBo, PId, lBo, q1r, cBo, uBo, dBo, MId, DId, NId, LId, OId, hBo, FId, BId, UId, jId, $Id, HId, Zmn, WId, GId, qId, zId, VId, KId, YId, XId, ZId, QId, JId, exd, txd, nxd, ixd, rxd, sxd, oxd, z1r, axd, pBo, cii, mBo, lxd, cxd, uxd, dxd, gBo, hxd, pxd, fBo, vBo, mxd, gxd, fxd, vxd, _xd, bxd, yxd, Sxd, kxd, wxd, Cxd, Txd, Exd, Ixd, _Bo, xxd, bBo, Axd, Rxd, Pxd, V1r, Mxd, Dxd, Nxd, Lxd, Oxd, Fxd, Bxd, Uxd, jxd, $xd, Hxd, Wxd, Gxd, qxd, zxd, Vxd, Kxd, Yxd, Xxd, Zxd, Qxd, Jxd, yBo, eAd, tAd, nAd, iAd, rAd, sAd, oAd, aAd, lAd, cAd, uAd, dAd, hAd, pAd, mAd, gAd, SBo, fAd, vAd, _Ad, bAd, yAd, SAd, kAd, wAd, CAd, TAd, EAd, kBo, wBo, IAd, xAd, AAd, RAd, PAd, MAd, htt, CBo, DAd, NAd, uii, K1r, Y1r, LAd, OAd, FAd, BAd, UAd, jAd, $Ad, HAd, WAd, GAd, qAd, zAd, VAd, TBo, KAd, YAd, XAd, ZAd, QAd, EBo, IBo, xBo, JAd, eRd, tRd, nRd, iRd, rRd, sRd, oRd, aRd, lRd, cRd, uRd, dRd, ABo, hRd, pRd, mRd, RBo, gRd, fRd, vRd, _Rd, bRd, yRd, X1r, dii, SRd, kRd, wRd, CRd, TRd, ERd, IRd, xRd, ARd, RRd, PRd, MRd, DRd, NRd, LRd, PBo, ORd, MBo, FRd, BRd, URd, jRd, $Rd, HRd, WRd, GRd, qRd, zRd, VRd, KRd, YRd, XRd, ZRd, Z1r, QRd, JRd, e2d, t2d, n2d, i2d, r2d, s2d, o2d, a2d, l2d, c2d, u2d, d2d, h2d, p2d, m2d, g2d, f2d, v2d, _2d, Q1r, b2d, fbt, Qmn, J1r, y2d, DBo, S2d, ekr, k2d, w2d, C2d, ptt, T2d, E2d, I2d, x2d, A2d, R2d, P2d, M2d, D2d, N2d, L2d, O2d, F2d, B2d, U2d, j2d, NBo, $2d, H2d, W2d, G2d, q2d, LBo, z2d, OBo, V2d, K2d, Y2d, X2d, Z2d, Q2d, FBo, J2d, BBo, ePd, tPd, nPd, iPd, rPd, sPd, tkr, oPd, aPd, lPd, UBo, cPd, uPd, dPd, hPd, pPd, mPd, gPd, fPd, vPd, _Pd, bPd, yPd, SPd, jBo, kPd, wPd, CPd, TPd, EPd, IPd, xPd, APd, RPd, PPd, vbt, MPd, DPd, NPd, LPd, OPd, FPd, nkr, BPd, UPd, jPd, $Pd, HPd, WPd, $Bo, GPd, qPd, zPd, VPd, KPd, HBo, YPd, WBo, XPd, GBo, qBo, ZPd, QPd, JPd, eMd, tMd, nMd, iMd, rMd, sMd, oMd, aMd, lMd, V$e, cMd, uMd, dMd, hMd, pMd, mMd, gMd, fMd, vMd, _Md, bMd, yMd, SMd, zBo, kMd, wMd, CMd, TMd, EMd, IMd, xMd, AMd, RMd, VBo, PMd, MMd, DMd, KBo, NMd, YBo, LMd, OMd, FMd, BMd, UMd, jMd, $Md, HMd, WMd, GMd, qMd, zMd, VMd, KMd, YMd, XMd, ZMd, QMd, JMd, eDd, tDd, nDd, iDd, rDd, sDd, XBo, oDd, aDd, lDd, cDd, uDd, dDd, hDd, pDd, mDd, ZBo, QBo, gDd, JBo, ikr, fDd, Zse, vDd, _Dd, bDd, yDd, SDd, kDd, wDd, CDd, TDd, EDd, IDd, xDd, ADd, RDd, PDd, MDd, DDd, NDd, LDd, ODd, FDd, BDd, UDd, jDd, e8o, $Dd, HDd, WDd, GDd, qDd, zDd, VDd, t8o, KDd, n8o, YDd, XDd, ZDd, i8o, QDd, JDd, e3d, t3d, n3d, i3d, r3d, s3d, o3d, a3d, l3d, c3d, u3d, d3d, h3d, p3d, m3d, r8o, g5e, g3d, s8o, f3d, o8o, v3d, _3d, a8o, b3d, y3d, S3d, k3d, l8o, c8o, rkr, w3d, C3d, T3d, u8o, E3d, I3d, x3d, A3d, d8o, h8o, R3d, P3d, M3d, D3d, N3d, p8o, L3d, O3d, F3d, B3d, U3d, j3d, $3d, H3d, W3d, G3d, q3d, z3d, V3d, K3d, Y3d, X3d, Z3d, Q3d, J3d, eNd, m8o, tNd, nNd, iNd, g8o, hii, f8o, pii, rNd, sNd, v8o, oNd, aNd, lNd, cNd, uNd, dNd, hNd, pNd, _8o, mNd, gNd, fNd, vNd;
export { $2d, $3d, $Ad, $Bo, $Dd, $Id, $Md, $Pd, $Rd, $xd, A2d, A3d, AAd, ABo, ADd, AMd, APd, ARd, Axd, B2d, B3d, BAd, BBo, BDd, BId, BMd, BPd, BRd, Bxd, C2d, C3d, CAd, CBo, CDd, CMd, CPd, CRd, Cxd, D2d, D3d, DAd, DBo, DDd, DId, DMd, DPd, DRd, Dxd, E2d, E3d, EAd, EBo, EDd, EMd, EPd, ERd, Exd, F2d, F3d, FAd, FBo, FDd, FId, FMd, FPd, FRd, Fxd, G2d, G3d, GAd, GBo, GDd, GId, GMd, GPd, GRd, Gxd, H2d, H3d, HAd, HBo, HDd, HId, HMd, HPd, HRd, Hxd, I2d, I3d, IAd, IBo, IDd, IMd, IPd, IRd, Ixd, J1r, J2d, J3d, JAd, JBo, JDd, JId, JMd, JPd, JRd, Jxd, K1r, K2d, K3d, KAd, KBo, KDd, KId, KMd, KPd, KRd, Kxd, L2d, L3d, LAd, LBo, LDd, LId, LMd, LPd, LRd, Lxd, M2d, M3d, MAd, MBo, MDd, MId, MMd, MPd, MRd, Mxd, N2d, N3d, NAd, NBo, NDd, NId, NMd, NPd, NRd, Nxd, O2d, O3d, OAd, OBo, ODd, OId, OMd, OPd, ORd, Oxd, P2d, P3d, PAd, PBo, PDd, PId, PMd, PPd, PRd, Pxd, Q1r, Q2d, Q3d, QAd, QBo, QDd, QId, QMd, QPd, QRd, Qmn, Qxd, R2d, R3d, RAd, RBo, RDd, RMd, RPd, RRd, Rxd, S2d, S3d, SAd, SBo, SDd, SMd, SPd, SRd, Sxd, T2d, T3d, TAd, TBo, TDd, TMd, TPd, TRd, Txd, U2d, U3d, UAd, UBo, UDd, UId, UMd, UPd, URd, Uxd, V$e, V1r, V2d, V3d, VAd, VBo, VDd, VId, VMd, VPd, VRd, Vxd, W2d, W3d, WAd, WBo, WDd, WId, WMd, WPd, WRd, Wxd, X1r, X2d, X3d, XAd, XBo, XDd, XId, XMd, XPd, XRd, Xxd, Y1r, Y2d, Y3d, YAd, YBo, YDd, YId, YMd, YPd, YRd, Yxd, Z1r, Z2d, Z3d, ZAd, ZBo, ZDd, ZId, ZMd, ZPd, ZRd, Zmn, Zse, Zxd, _2d, _3d, _8o, _Ad, _Bo, _Dd, _Md, _Pd, _Rd, _xd, a2d, a3d, a8o, aAd, aBo, aDd, aMd, aNd, aPd, aRd, axd, b2d, b3d, bAd, bBo, bDd, bMd, bPd, bRd, bxd, c2d, c3d, c8o, cAd, cBo, cDd, cMd, cNd, cPd, cRd, cii, cxd, d2d, d3d, d8o, dAd, dBo, dDd, dMd, dNd, dPd, dRd, dii, dxd, e2d, e3d, e8o, eAd, eDd, eMd, eNd, ePd, eRd, ekr, exd, f2d, f3d, f8o, fAd, fBo, fDd, fMd, fNd, fPd, fRd, fbt, fxd, g2d, g3d, g5e, g8o, gAd, gBo, gDd, gMd, gNd, gPd, gRd, gxd, h2d, h3d, h8o, hAd, hBo, hDd, hMd, hNd, hPd, hRd, hii, htt, hxd, i2d, i3d, i8o, iAd, iDd, iMd, iNd, iPd, iRd, ikr, ixd, j2d, j3d, jAd, jBo, jDd, jId, jMd, jPd, jRd, jxd, k2d, k3d, kAd, kBo, kDd, kMd, kPd, kRd, kxd, l2d, l3d, l8o, lAd, lBo, lDd, lMd, lNd, lPd, lRd, lxd, m2d, m3d, m8o, mAd, mBo, mDd, mMd, mNd, mPd, mRd, mxd, n2d, n3d, n8o, nAd, nDd, nMd, nNd, nPd, nRd, nkr, nxd, o2d, o3d, o8o, oAd, oDd, oMd, oNd, oPd, oRd, oxd, p2d, p3d, p8o, pAd, pBo, pDd, pMd, pNd, pPd, pRd, pii, ptt, pxd, q1r, q2d, q3d, qAd, qBo, qDd, qId, qMd, qPd, qRd, qxd, r2d, r3d, r8o, rAd, rDd, rMd, rNd, rPd, rRd, rkr, rxd, s2d, s3d, s8o, sAd, sDd, sMd, sNd, sPd, sRd, sxd, t2d, t3d, t8o, tAd, tDd, tMd, tNd, tPd, tRd, tkr, txd, u2d, u3d, u8o, uAd, uBo, uDd, uMd, uNd, uPd, uRd, uii, uxd, v2d, v3d, v8o, vAd, vBo, vDd, vMd, vNd, vPd, vRd, vbt, vxd, w2d, w3d, wAd, wBo, wDd, wMd, wPd, wRd, wxd, x2d, x3d, xAd, xBo, xDd, xMd, xPd, xRd, xxd, y2d, y3d, yAd, yBo, yDd, yMd, yPd, yRd, yxd, z1r, z2d, z3d, zAd, zBo, zDd, zId, zMd, zPd, zRd, zxd };
var __wakaru_n2_initialized = false;
export function n2() {
if (__wakaru_n2_initialized) return;
__wakaru_n2_initialized = true;
"use strict";
E(), hr(), sd(), Pu(), Hu(), g4t(), Xse(), lW(), SQ(), g9o(), y9o(), aii(), qse(), Gyr(), C1r(), Z9o(), ju(), VEd(), oId(), dId(), RId(), $Iy(), cW(), aBo = x.makeEnum("aiserver.v1.TaskListItemState", [
    {
        no: 0,
        name: "TASK_LIST_ITEM_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TASK_LIST_ITEM_STATE_ACTIVE",
        localName: "ACTIVE"
    },
    {
        no: 2,
        name: "TASK_LIST_ITEM_STATE_PAUSED",
        localName: "PAUSED"
    },
    {
        no: 3,
        name: "TASK_LIST_ITEM_STATE_NEEDS_INPUT",
        localName: "NEEDS_INPUT"
    },
    {
        no: 4,
        name: "TASK_LIST_ITEM_STATE_DONE",
        localName: "DONE"
    }
]), PId = x.makeEnum("aiserver.v1.InferenceHookTestOutcome", [
    {
        no: 0,
        name: "INFERENCE_HOOK_TEST_OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INFERENCE_HOOK_TEST_OUTCOME_ALLOW",
        localName: "ALLOW"
    },
    {
        no: 2,
        name: "INFERENCE_HOOK_TEST_OUTCOME_DENY",
        localName: "DENY"
    },
    {
        no: 3,
        name: "INFERENCE_HOOK_TEST_OUTCOME_URL_REJECTED",
        localName: "URL_REJECTED"
    },
    {
        no: 4,
        name: "INFERENCE_HOOK_TEST_OUTCOME_PRIVATE_OR_INTERNAL_IP",
        localName: "PRIVATE_OR_INTERNAL_IP"
    },
    {
        no: 5,
        name: "INFERENCE_HOOK_TEST_OUTCOME_TIMEOUT",
        localName: "TIMEOUT"
    },
    {
        no: 6,
        name: "INFERENCE_HOOK_TEST_OUTCOME_TRANSPORT_ERROR",
        localName: "TRANSPORT_ERROR"
    },
    {
        no: 7,
        name: "INFERENCE_HOOK_TEST_OUTCOME_NON_200_STATUS",
        localName: "NON_200_STATUS"
    },
    {
        no: 8,
        name: "INFERENCE_HOOK_TEST_OUTCOME_UNPARSEABLE_RESPONSE",
        localName: "UNPARSEABLE_RESPONSE"
    },
    {
        no: 9,
        name: "INFERENCE_HOOK_TEST_OUTCOME_SIGNING_SECRET_REQUIRED",
        localName: "SIGNING_SECRET_REQUIRED"
    }
]), lBo = x.makeEnum("aiserver.v1.AvailableModelsScope", [
    {
        no: 0,
        name: "AVAILABLE_MODELS_SCOPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AVAILABLE_MODELS_SCOPE_USER_AVAILABLE",
        localName: "USER_AVAILABLE"
    },
    {
        no: 2,
        name: "AVAILABLE_MODELS_SCOPE_AUTOMATIONS",
        localName: "AUTOMATIONS"
    },
    {
        no: 3,
        name: "AVAILABLE_MODELS_SCOPE_ADMIN_SETTINGS_ALL_APPLICATION_MODELS",
        localName: "ADMIN_SETTINGS_ALL_APPLICATION_MODELS"
    }
]), q1r = x.makeEnum("aiserver.v1.CloudAgentEffortMode", [
    {
        no: 0,
        name: "CLOUD_AGENT_EFFORT_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_AGENT_EFFORT_MODE_STANDARD",
        localName: "STANDARD"
    },
    {
        no: 2,
        name: "CLOUD_AGENT_EFFORT_MODE_GRIND",
        localName: "GRIND"
    }
]), cBo = x.makeEnum("aiserver.v1.TaskStatus", [
    {
        no: 0,
        name: "TASK_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TASK_STATUS_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 2,
        name: "TASK_STATUS_PAUSED",
        localName: "PAUSED"
    },
    {
        no: 3,
        name: "TASK_STATUS_DONE",
        localName: "DONE"
    },
    {
        no: 4,
        name: "TASK_STATUS_NOT_STARTED",
        localName: "NOT_STARTED"
    }
]), uBo = x.makeMessageType("aiserver.v1.GetComposerAutocompleteRequest", ()=>[
        {
            no: 1,
            name: "input_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "composer_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "context",
            kind: "message",
            T: MId,
            opt: !0
        }
    ]), dBo = x.makeMessageType("aiserver.v1.GetComposerAutocompleteResponse", ()=>[
        {
            no: 1,
            name: "suggestion",
            kind: "scalar",
            T: 9
        }
    ]), MId = x.makeMessageType("aiserver.v1.ComposerAutocompleteContext", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: DId,
            opt: !0
        },
        {
            no: 2,
            name: "cached_files",
            kind: "message",
            T: NId,
            repeated: !0
        },
        {
            no: 3,
            name: "conversation_messages",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 4,
            name: "visible_viewport_text",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "first_user_messages",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), DId = x.makeMessageType("aiserver.v1.CurrentFileContext", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "language",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "cursor_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "full_content",
            kind: "scalar",
            T: 9
        }
    ]), NId = x.makeMessageType("aiserver.v1.CachedFileContext", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "language",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "full_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "last_viewed_timestamp",
            kind: "scalar",
            T: 3
        }
    ]), LId = x.makeMessageType("aiserver.v1.ChatSuggestionItem", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "category",
            kind: "scalar",
            T: 9
        }
    ]), OId = x.makeMessageType("aiserver.v1.RecentChat", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 3,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "messages",
            kind: "message",
            T: hBo,
            repeated: !0
        },
        {
            no: 5,
            name: "todos",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), hBo = x.makeMessageType("aiserver.v1.RecentChatMessage", ()=>[
        {
            no: 1,
            name: "role",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "context",
            kind: "scalar",
            T: 9
        }
    ]), FId = x.makeMessageType("aiserver.v1.GetChatSuggestionsRequest", ()=>[
        {
            no: 1,
            name: "recent_chats",
            kind: "message",
            T: OId,
            repeated: !0
        }
    ]), BId = x.makeMessageType("aiserver.v1.GetChatSuggestionsResponse", ()=>[
        {
            no: 1,
            name: "suggestions",
            kind: "message",
            T: LId,
            repeated: !0
        }
    ]), UId = x.makeMessageType("aiserver.v1.GetUserInstructionsRequest", ()=>[
        {
            no: 1,
            name: "chats",
            kind: "message",
            T: hBo,
            repeated: !0
        },
        {
            no: 2,
            name: "existing_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), jId = x.makeMessageType("aiserver.v1.GetUserInstructionsResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), $Id = x.makeMessageType("aiserver.v1.IsTerminalFinishedRequest", ()=>[
        {
            no: 1,
            name: "terminal_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "check_for_hangs",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "chat_request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "command",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), HId = x.makeMessageType("aiserver.v1.IsTerminalFinishedResponseV2", ()=>[
        {
            no: 1,
            name: "is_finished",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "ended_reason",
            kind: "enum",
            T: x.getEnumType(Vse),
            opt: !0
        },
        {
            no: 3,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "is_hanging",
            kind: "scalar",
            T: 8
        }
    ]), Zmn = x.makeMessageType("aiserver.v1.TestBidiRequest", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), WId = x.makeMessageType("aiserver.v1.TestBidiResponse", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), GId = x.makeMessageType("aiserver.v1.AutoContextFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_content",
            kind: "scalar",
            T: 9
        }
    ]), qId = x.makeMessageType("aiserver.v1.AutoContextRequest", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "candidate_files",
            kind: "message",
            T: GId,
            repeated: !0
        },
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: Mg
        }
    ]), zId = x.makeMessageType("aiserver.v1.AutoContextRankedFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reranking_score",
            kind: "scalar",
            T: 2
        }
    ]), VId = x.makeMessageType("aiserver.v1.AutoContextResponse", ()=>[
        {
            no: 1,
            name: "ranked_files",
            kind: "message",
            T: zId,
            repeated: !0
        }
    ]), KId = x.makeMessageType("aiserver.v1.CheckBugBotPriceRequest", ()=>[
        {
            no: 1,
            name: "diff_char_len",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "iterations",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 4,
            name: "session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), YId = x.makeMessageType("aiserver.v1.CheckBugBotPriceResponse", ()=>[
        {
            no: 1,
            name: "cost",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "price_id",
            kind: "scalar",
            T: 9
        }
    ]), XId = x.makeMessageType("aiserver.v1.AcknowledgeGracePeriodDisclaimerRequest", []), ZId = x.makeMessageType("aiserver.v1.AcknowledgeGracePeriodDisclaimerResponse", []), QId = x.makeMessageType("aiserver.v1.CheckBugBotTelemetryHealthyRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), JId = x.makeMessageType("aiserver.v1.CheckBugBotTelemetryHealthyResponse", ()=>[
        {
            no: 1,
            name: "is_healthy",
            kind: "scalar",
            T: 8
        }
    ]), exd = x.makeMessageType("aiserver.v1.RecordIdeBugReactionRequest", ()=>[
        {
            no: 1,
            name: "bug_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reaction",
            kind: "scalar",
            T: 9
        }
    ]), txd = x.makeMessageType("aiserver.v1.RecordIdeBugReactionResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), nxd = x.makeMessageType("aiserver.v1.GetSuggestedBugBotIterationsRequest", ()=>[
        {
            no: 1,
            name: "diff_char_len",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: Mg
        }
    ]), ixd = x.makeMessageType("aiserver.v1.GetSuggestedBugBotIterationsResponse", ()=>[
        {
            no: 1,
            name: "iterations",
            kind: "scalar",
            T: 5
        }
    ]), rxd = x.makeMessageType("aiserver.v1.GetEditorBugbotAutoRunStatusRequest", []), sxd = x.makeMessageType("aiserver.v1.GetEditorBugbotAutoRunStatusResponse", ()=>[
        {
            no: 1,
            name: "should_auto_run",
            kind: "scalar",
            T: 8
        }
    ]), oxd = x.makeMessageType("aiserver.v1.BugBotStatus", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(z1r)
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "iterations_completed",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "total_iterations",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "total_tokens",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "processed_tokens",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "processed_cost",
            kind: "scalar",
            T: 2,
            opt: !0
        },
        {
            no: 8,
            name: "thinking_tokens",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "thinking_cost",
            kind: "scalar",
            T: 2,
            opt: !0
        }
    ]), z1r = x.makeEnum("aiserver.v1.BugBotStatus.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_IN_PROGRESS",
        localName: "IN_PROGRESS"
    },
    {
        no: 2,
        name: "STATUS_IN_PROGRESS_ITERATIONS",
        localName: "IN_PROGRESS_ITERATIONS"
    },
    {
        no: 3,
        name: "STATUS_DONE",
        localName: "DONE"
    },
    {
        no: 4,
        name: "STATUS_ERROR",
        localName: "ERROR"
    }
]), axd = x.makeMessageType("aiserver.v1.BugbotTrialNotification", ()=>[
        {
            no: 1,
            name: "show",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "learn_more_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), pBo = x.makeMessageType("aiserver.v1.StreamBugBotResponse", ()=>[
        {
            no: 1,
            name: "bug_reports",
            kind: "message",
            T: bDo,
            opt: !0
        },
        {
            no: 2,
            name: "status",
            kind: "message",
            T: oxd
        },
        {
            no: 3,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "trial_notification",
            kind: "message",
            T: axd,
            opt: !0
        },
        {
            no: 5,
            name: "num_turns",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), cii = x.makeMessageType("aiserver.v1.StreamBugBotAgenticClientMessage", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: Obr,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_client_message",
            kind: "message",
            T: p5e,
            oneof: "message"
        },
        {
            no: 3,
            name: "exec_client_control_message",
            kind: "message",
            T: Bve,
            oneof: "message"
        }
    ]), mBo = x.makeMessageType("aiserver.v1.StreamBugBotAgenticServerMessage", ()=>[
        {
            no: 1,
            name: "bugbot_response",
            kind: "message",
            T: pBo,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_server_message",
            kind: "message",
            T: qde,
            oneof: "message"
        },
        {
            no: 3,
            name: "exec_server_control_message",
            kind: "message",
            T: Gmn,
            oneof: "message"
        }
    ]), lxd = x.makeMessageType("aiserver.v1.UiBestOfNJudgeCandidate", ()=>[
        {
            no: 1,
            name: "composer_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "message",
            T: xj
        }
    ]), cxd = x.makeMessageType("aiserver.v1.StreamUiBestOfNJudgeStartRequest", ()=>[
        {
            no: 1,
            name: "task",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "candidates",
            kind: "message",
            T: lxd,
            repeated: !0
        }
    ]), uxd = x.makeMessageType("aiserver.v1.UiBestOfNJudgeFinalResult", ()=>[
        {
            no: 1,
            name: "winner_composer_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reasoning",
            kind: "scalar",
            T: 9
        }
    ]), dxd = x.makeMessageType("aiserver.v1.StreamUiBestOfNJudgeClientMessage", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: cxd,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_client_message",
            kind: "message",
            T: p5e,
            oneof: "message"
        },
        {
            no: 3,
            name: "exec_client_control_message",
            kind: "message",
            T: Bve,
            oneof: "message"
        }
    ]), gBo = x.makeMessageType("aiserver.v1.StreamUiBestOfNJudgeServerMessage", ()=>[
        {
            no: 1,
            name: "final_result",
            kind: "message",
            T: uxd,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_server_message",
            kind: "message",
            T: qde,
            oneof: "message"
        },
        {
            no: 3,
            name: "exec_server_control_message",
            kind: "message",
            T: Gmn,
            oneof: "message"
        }
    ]), hxd = x.makeMessageType("aiserver.v1.ContextRerankingRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE,
            opt: !0
        },
        {
            no: 2,
            name: "chat_conversation_history",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 3,
            name: "cpp_diff_trajectories",
            kind: "message",
            T: zte,
            repeated: !0
        },
        {
            no: 4,
            name: "candidate_files",
            kind: "message",
            T: I4o,
            repeated: !0
        }
    ]), pxd = x.makeMessageType("aiserver.v1.ContextRerankingResponse", ()=>[
        {
            no: 1,
            name: "reranking_scores",
            kind: "scalar",
            T: 2,
            repeated: !0
        }
    ]), fBo = x.makeMessageType("aiserver.v1.NameTabRequest", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 2,
            name: "is_project",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "api_key_credentials",
            kind: "message",
            T: rtt,
            oneof: "credentials"
        },
        {
            no: 4,
            name: "azure_credentials",
            kind: "message",
            T: stt,
            oneof: "credentials"
        },
        {
            no: 5,
            name: "bedrock_credentials",
            kind: "message",
            T: ott,
            oneof: "credentials"
        },
        {
            no: 6,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "is_side_chat",
            kind: "scalar",
            T: 8
        }
    ]), vBo = x.makeMessageType("aiserver.v1.NameTabResponse", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "icon",
            kind: "scalar",
            T: 9
        }
    ]), mxd = x.makeMessageType("aiserver.v1.TaskListItem", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "state",
            kind: "enum",
            T: x.getEnumType(aBo)
        },
        {
            no: 4,
            name: "note",
            kind: "scalar",
            T: 9
        }
    ]), gxd = x.makeMessageType("aiserver.v1.KeepTaskListRequest", ()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: mxd,
            repeated: !0
        },
        {
            no: 2,
            name: "messages",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        }
    ]), fxd = x.makeMessageType("aiserver.v1.TaskListChange", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "state",
            kind: "enum",
            T: x.getEnumType(aBo)
        },
        {
            no: 4,
            name: "is_removed",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "note",
            kind: "scalar",
            T: 9
        }
    ]), vxd = x.makeMessageType("aiserver.v1.KeepTaskListResponse", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "message",
            T: fxd,
            repeated: !0
        }
    ]), _xd = x.makeMessageType("aiserver.v1.TestModelStatusRequest", ()=>[
        {
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9
        }
    ]), bxd = x.makeMessageType("aiserver.v1.TestModelStatusResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "latency",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "ttft",
            kind: "scalar",
            T: 2
        },
        {
            no: 4,
            name: "max_time_between_chunks",
            kind: "scalar",
            T: 2
        },
        {
            no: 5,
            name: "server_timing",
            kind: "scalar",
            T: 9
        }
    ]), yxd = x.makeMessageType("aiserver.v1.LlmGatewayModelTestStage", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "error_class",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Sxd = x.makeMessageType("aiserver.v1.LlmGatewayModelTestInspect", ()=>[
        {
            no: 1,
            name: "http_status",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "request",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "response",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "latency_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), kxd = x.makeMessageType("aiserver.v1.LlmGatewayModelTestUsage", ()=>[
        {
            no: 1,
            name: "billed",
            kind: "scalar",
            T: 8
        }
    ]), wxd = x.makeMessageType("aiserver.v1.LlmGatewayConnectionTesterRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "auth_token_override",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "header_overrides",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), Cxd = x.makeMessageType("aiserver.v1.LlmGatewayConnectionTesterResponse", ()=>[
        {
            no: 1,
            name: "stages",
            kind: "message",
            T: yxd,
            repeated: !0
        },
        {
            no: 2,
            name: "inspect",
            kind: "message",
            T: Sxd
        },
        {
            no: 3,
            name: "usage",
            kind: "message",
            T: kxd
        }
    ]), Txd = x.makeMessageType("aiserver.v1.TestTeamInferenceHookConnectionRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "endpoint_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "headers",
            kind: "message",
            T: Exd
        },
        {
            no: 4,
            name: "verdict_timeout_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), Exd = x.makeMessageType("aiserver.v1.TestTeamInferenceHookConnectionRequest.Headers", ()=>[
        {
            no: 1,
            name: "values",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ], {
    localName: "TestTeamInferenceHookConnectionRequest_Headers"
}), Ixd = x.makeMessageType("aiserver.v1.TestTeamInferenceHookConnectionResponse", ()=>[
        {
            no: 1,
            name: "ok",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "outcome",
            kind: "enum",
            T: x.getEnumType(PId)
        },
        {
            no: 3,
            name: "status_code",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "latency_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 5,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "deny_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "reference_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), _Bo = x.makeMessageType("aiserver.v1.EvaluatePromptHookRequest", ()=>[
        {
            no: 1,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "hook_input_json",
            kind: "message",
            T: nz
        },
        {
            no: 3,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xxd = x.makeMessageType("aiserver.v1.EvaluatePromptHookResponse", ()=>[
        {
            no: 1,
            name: "ok",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), bBo = x.makeMessageType("aiserver.v1.ComputerUseAxElement", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "role",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "value",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "flags",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "actions",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Axd = x.makeMessageType("aiserver.v1.ComputerUsePastAction", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "element",
            kind: "message",
            T: bBo,
            opt: !0
        },
        {
            no: 3,
            name: "key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "tree_changed",
            kind: "scalar",
            T: 8
        }
    ]), Rxd = x.makeMessageType("aiserver.v1.ComputerUseTreeDiff", ()=>[
        {
            no: 1,
            name: "value_changes",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "added",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "removed",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Pxd = x.makeMessageType("aiserver.v1.ComputerUseDecideNextActionRequest", ()=>[
        {
            no: 1,
            name: "attempt_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "step_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "iteration",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "goal",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "expect",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "candidates",
            kind: "message",
            T: bBo,
            repeated: !0
        },
        {
            no: 7,
            name: "actions",
            kind: "message",
            T: Axd,
            repeated: !0
        },
        {
            no: 8,
            name: "changed_since_last_action",
            kind: "message",
            T: Rxd,
            opt: !0
        }
    ]), V1r = x.makeMessageType("aiserver.v1.ComputerUseActionChoice", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "probabilities",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 1
            }
        }
    ]), Mxd = x.makeMessageType("aiserver.v1.ComputerUseDecideNextActionResponse", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "message",
            T: V1r
        },
        {
            no: 2,
            name: "item",
            kind: "message",
            T: V1r
        },
        {
            no: 3,
            name: "key",
            kind: "message",
            T: V1r
        },
        {
            no: 4,
            name: "present",
            kind: "scalar",
            T: 1
        },
        {
            no: 5,
            name: "goal_reached",
            kind: "scalar",
            T: 1
        },
        {
            no: 6,
            name: "unreachable",
            kind: "scalar",
            T: 1
        },
        {
            no: 7,
            name: "last_landed",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 8,
            name: "expect",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ]), Dxd = x.makeMessageType("aiserver.v1.TryParseTypeScriptTreeSitterRequest", ()=>[
        {
            no: 1,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), Nxd = x.makeMessageType("aiserver.v1.TryParseTypeScriptTreeSitterResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), Lxd = x.makeMessageType("aiserver.v1.DevOnlyGetPastRequestIdsRequest", ()=>[
        {
            no: 1,
            name: "count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "page",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), Oxd = x.makeMessageType("aiserver.v1.DevOnlyPastRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "date_time",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "model_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "feature_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "s3_uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "num_prompt_tokens",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "num_completion_tokens",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "api_call_method",
            kind: "scalar",
            T: 9
        }
    ]), Fxd = x.makeMessageType("aiserver.v1.DevOnlyGetPastRequestIdsResponse", ()=>[
        {
            no: 1,
            name: "past_requests",
            kind: "message",
            T: Oxd,
            repeated: !0
        },
        {
            no: 10,
            name: "total_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 11,
            name: "has_more",
            kind: "scalar",
            T: 8
        }
    ]), Bxd = x.makeMessageType("aiserver.v1.GetCodebaseQuestionsResponse", ()=>[
        {
            no: 1,
            name: "questions",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Uxd = x.makeMessageType("aiserver.v1.AtSymbolOption", ()=>[
        {
            no: 1,
            name: "index",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "type",
            kind: "scalar",
            T: 9
        }
    ]), jxd = x.makeMessageType("aiserver.v1.AtSymbolDependencyInformation", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "from_file",
            kind: "scalar",
            T: 9
        }
    ]), $xd = x.makeMessageType("aiserver.v1.GetAtSymbolSuggestionsRequest", ()=>[
        {
            no: 1,
            name: "current_file_info",
            kind: "message",
            T: QE
        },
        {
            no: 2,
            name: "at_symbol_dependencies",
            kind: "message",
            T: jxd,
            repeated: !0
        },
        {
            no: 3,
            name: "at_symbol_options",
            kind: "message",
            T: Uxd,
            repeated: !0
        },
        {
            no: 4,
            name: "user_query",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "model_details",
            kind: "message",
            T: Mg
        }
    ]), Hxd = x.makeMessageType("aiserver.v1.GetAtSymbolSuggestionsResponse", ()=>[
        {
            no: 1,
            name: "indices",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 2,
            name: "explanation",
            kind: "scalar",
            T: 9
        }
    ]), Wxd = x.makeMessageType("aiserver.v1.CurrentFolderFileOrFolder", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_folder",
            kind: "scalar",
            T: 8
        }
    ]), Gxd = x.makeMessageType("aiserver.v1.GetTerminalCompletionRequest", ()=>[
        {
            no: 1,
            name: "current_command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "command_history",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "file_diff_histories",
            kind: "message",
            T: zte,
            repeated: !0
        },
        {
            no: 5,
            name: "git_diff",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "commit_history",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "past_results",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 8,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 9,
            name: "user_platform",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "current_folder",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "current_folder_structure",
            kind: "message",
            T: Wxd,
            repeated: !0
        },
        {
            no: 12,
            name: "relevant_files",
            kind: "message",
            T: wAe,
            repeated: !0
        }
    ]), qxd = x.makeMessageType("aiserver.v1.GetTerminalCompletionResponse", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        }
    ]), zxd = x.makeMessageType("aiserver.v1.HeuristicsSelection", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: x.getEnumType(Vxd)
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5
        }
    ]), Vxd = x.makeEnum("aiserver.v1.HeuristicsSelection.HeuristicsSelectionType", [
    {
        no: 0,
        name: "HEURISTICS_SELECTION_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "HEURISTICS_SELECTION_TYPE_GROUP",
        localName: "GROUP"
    },
    {
        no: 2,
        name: "HEURISTICS_SELECTION_TYPE_LINE",
        localName: "LINE"
    },
    {
        no: 3,
        name: "HEURISTICS_SELECTION_TYPE_FOLDING",
        localName: "FOLDING"
    }
]), Kxd = x.makeMessageType("aiserver.v1.CalculateAutoSelectionRequest", ()=>[
        {
            no: 1,
            name: "current_file_info",
            kind: "message",
            T: QE
        },
        {
            no: 2,
            name: "cursor_position",
            kind: "message",
            T: oW
        },
        {
            no: 3,
            name: "selection_range",
            kind: "message",
            T: m7
        },
        {
            no: 4,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 5,
            name: "heuristics_selections",
            kind: "message",
            T: zxd,
            repeated: !0
        }
    ]), Yxd = x.makeMessageType("aiserver.v1.AutoSelectionInstructions", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5
        }
    ]), Xxd = x.makeMessageType("aiserver.v1.AutoSelectionResult", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "instructions",
            kind: "message",
            T: Yxd,
            repeated: !0
        }
    ]), Zxd = x.makeMessageType("aiserver.v1.CalculateAutoSelectionResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: Xxd,
            repeated: !0
        }
    ]), Qxd = x.makeMessageType("aiserver.v1.BackgroundCmdKRequest", ()=>[
        {
            no: 1,
            name: "instruction",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 3,
            name: "selection_range",
            kind: "message",
            T: m7
        },
        {
            no: 4,
            name: "type",
            kind: "enum",
            T: x.getEnumType(Jxd)
        },
        {
            no: 5,
            name: "proposed_change_history",
            kind: "message",
            T: nAd,
            repeated: !0
        },
        {
            no: 6,
            name: "related_code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 7,
            name: "diff_history",
            kind: "message",
            T: zte,
            repeated: !0
        },
        {
            no: 8,
            name: "linter_errors",
            kind: "message",
            T: yBo,
            repeated: !0
        },
        {
            no: 9,
            name: "useful_types",
            kind: "message",
            T: iAd,
            repeated: !0
        },
        {
            no: 10,
            name: "recently_viewed_files",
            kind: "message",
            T: rAd,
            repeated: !0
        },
        {
            no: 11,
            name: "recent_diffs",
            kind: "message",
            T: oAd,
            repeated: !0
        },
        {
            no: 12,
            name: "multiple_completions",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Jxd = x.makeEnum("aiserver.v1.BackgroundCmdKRequest.Type", [
    {
        no: 0,
        name: "TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TYPE_REFLECT",
        localName: "REFLECT"
    },
    {
        no: 2,
        name: "TYPE_LOOP_ON_LINTS",
        localName: "LOOP_ON_LINTS"
    },
    {
        no: 3,
        name: "TYPE_CHAT_AND_APPLY",
        localName: "CHAT_AND_APPLY"
    },
    {
        no: 4,
        name: "TYPE_COALESCE_GENERATIONS",
        localName: "COALESCE_GENERATIONS"
    },
    {
        no: 5,
        name: "TYPE_CODEBASE_CHUNKS",
        localName: "CODEBASE_CHUNKS"
    },
    {
        no: 6,
        name: "TYPE_SPEC_AND_APPLY",
        localName: "SPEC_AND_APPLY"
    },
    {
        no: 7,
        name: "TYPE_ASK_CODEBASE",
        localName: "ASK_CODEBASE"
    },
    {
        no: 8,
        name: "TYPE_FINETUNED_INSTRUCTIONS",
        localName: "FINETUNED_INSTRUCTIONS"
    },
    {
        no: 9,
        name: "TYPE_USEFUL_TYPES",
        localName: "USEFUL_TYPES"
    },
    {
        no: 10,
        name: "TYPE_CHAT_AND_APPLY_UNDERSPECIFIED",
        localName: "CHAT_AND_APPLY_UNDERSPECIFIED"
    }
]), yBo = x.makeMessageType("aiserver.v1.BackgroundCmdKRequest.Lint", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "start_line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "start_column_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "end_line_number_inclusive_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "end_column_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "quick_fixes",
            kind: "message",
            T: eAd,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKRequest_Lint"
}), eAd = x.makeMessageType("aiserver.v1.BackgroundCmdKRequest.Lint.QuickFix", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_preferred",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "edits",
            kind: "message",
            T: tAd,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKRequest_Lint_QuickFix"
}), tAd = x.makeMessageType("aiserver.v1.BackgroundCmdKRequest.Lint.QuickFix.Edit", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "start_column_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "end_line_number_inclusive_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "end_column_one_indexed",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "BackgroundCmdKRequest_Lint_QuickFix_Edit"
}), nAd = x.makeMessageType("aiserver.v1.BackgroundCmdKRequest.ProposedChange", ()=>[
        {
            no: 1,
            name: "change",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "linter_errors",
            kind: "message",
            T: yBo,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKRequest_ProposedChange"
}), iAd = x.makeMessageType("aiserver.v1.BackgroundCmdKRequest.UsefulType", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "score",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ], {
    localName: "BackgroundCmdKRequest_UsefulType"
}), rAd = x.makeMessageType("aiserver.v1.BackgroundCmdKRequest.RecentlyViewedFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "visible_ranges",
            kind: "message",
            T: sAd,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKRequest_RecentlyViewedFile"
}), sAd = x.makeMessageType("aiserver.v1.BackgroundCmdKRequest.RecentlyViewedFile.VisibleRange", ()=>[
        {
            no: 1,
            name: "start_line_number_inclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number_exclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "viewed_at",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "global_order_descending",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "BackgroundCmdKRequest_RecentlyViewedFile_VisibleRange"
}), oAd = x.makeMessageType("aiserver.v1.BackgroundCmdKRequest.Diff", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BackgroundCmdKRequest_Diff"
}), aAd = x.makeMessageType("aiserver.v1.BackgroundCmdKResponse", ()=>[
        {
            no: 1,
            name: "proposed_change",
            kind: "scalar",
            T: 9
        }
    ]), lAd = x.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest", ()=>[
        {
            no: 1,
            name: "instruction",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 3,
            name: "selection_range",
            kind: "message",
            T: m7
        },
        {
            no: 4,
            name: "ground_truth",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "experiment",
            kind: "enum",
            T: x.getEnumType(cAd)
        },
        {
            no: 6,
            name: "run_automated_eval",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "proposed_change_history",
            kind: "message",
            T: pAd,
            repeated: !0
        },
        {
            no: 8,
            name: "commit_notes",
            kind: "message",
            T: gDo,
            repeated: !0
        },
        {
            no: 9,
            name: "related_code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        }
    ]), cAd = x.makeEnum("aiserver.v1.BackgroundCmdKEvalRequest.Experiment", [
    {
        no: 0,
        name: "EXPERIMENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "EXPERIMENT_REFLECT",
        localName: "REFLECT"
    },
    {
        no: 2,
        name: "EXPERIMENT_CMD_K_ORIGINAL_RADIUS",
        localName: "CMD_K_ORIGINAL_RADIUS"
    },
    {
        no: 3,
        name: "EXPERIMENT_LOOP_ON_LINTS",
        localName: "LOOP_ON_LINTS"
    },
    {
        no: 4,
        name: "EXPERIMENT_CHAT_AND_APPLY",
        localName: "CHAT_AND_APPLY"
    },
    {
        no: 5,
        name: "EXPERIMENT_COMMIT_NOTES",
        localName: "COMMIT_NOTES"
    },
    {
        no: 6,
        name: "EXPERIMENT_COALESCE_GENERATIONS",
        localName: "COALESCE_GENERATIONS"
    },
    {
        no: 7,
        name: "EXPERIMENT_REWORD_INSTRUCTIONS",
        localName: "REWORD_INSTRUCTIONS"
    },
    {
        no: 8,
        name: "EXPERIMENT_CODEBASE_CHUNKS",
        localName: "CODEBASE_CHUNKS"
    },
    {
        no: 9,
        name: "EXPERIMENT_SPEC_AND_APPLY",
        localName: "SPEC_AND_APPLY"
    },
    {
        no: 10,
        name: "EXPERIMENT_ASK_CODEBASE",
        localName: "ASK_CODEBASE"
    }
]), uAd = x.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest.Lint", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "start_line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "start_column_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "end_line_number_inclusive_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "end_column_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "quick_fixes",
            kind: "message",
            T: dAd,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKEvalRequest_Lint"
}), dAd = x.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest.Lint.QuickFix", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_preferred",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "edits",
            kind: "message",
            T: hAd,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKEvalRequest_Lint_QuickFix"
}), hAd = x.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest.Lint.QuickFix.Edit", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "start_column_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "end_line_number_inclusive_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "end_column_one_indexed",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "BackgroundCmdKEvalRequest_Lint_QuickFix_Edit"
}), pAd = x.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest.ProposedChange", ()=>[
        {
            no: 1,
            name: "change",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "linter_errors",
            kind: "message",
            T: uAd,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKEvalRequest_ProposedChange"
}), mAd = x.makeMessageType("aiserver.v1.BackgroundCmdKEvalResponse", ()=>[
        {
            no: 1,
            name: "proposed_change",
            kind: "scalar",
            T: 9
        }
    ]), gAd = x.makeMessageType("aiserver.v1.GetThoughtAnnotationRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        }
    ]), SBo = x.makeMessageType("aiserver.v1.UpdateVscodeProfileRequest", ()=>[
        {
            no: 1,
            name: "machine_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_extensions",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "extensions",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), fAd = x.makeMessageType("aiserver.v1.UpdateVscodeProfileResponse", []), vAd = x.makeMessageType("aiserver.v1.GetThoughtAnnotationResponse", ()=>[
        {
            no: 1,
            name: "thought_annotation",
            kind: "message",
            T: _Ad
        }
    ]), _Ad = x.makeMessageType("aiserver.v1.AiThoughtAnnotation", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "debug_info",
            kind: "message",
            T: kAe
        },
        {
            no: 4,
            name: "thought",
            kind: "scalar",
            T: 9
        }
    ]), bAd = x.makeMessageType("aiserver.v1.BulkEmbedRequest", ()=>[
        {
            no: 1,
            name: "texts",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), yAd = x.makeMessageType("aiserver.v1.BulkEmbedResponse", ()=>[
        {
            no: 1,
            name: "embeddings",
            kind: "message",
            T: SAd,
            repeated: !0
        }
    ]), SAd = x.makeMessageType("aiserver.v1.EmbeddingResponse", ()=>[
        {
            no: 1,
            name: "embedding",
            kind: "scalar",
            T: 1,
            repeated: !0
        }
    ]), kAd = x.makeMessageType("aiserver.v1.TakeNotesOnCommitDiffRequest", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: xhd
        },
        {
            no: 2,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        }
    ]), wAd = x.makeMessageType("aiserver.v1.TakeNotesOnCommitDiffResponse", ()=>[
        {
            no: 1,
            name: "notes",
            kind: "message",
            T: Ihd,
            repeated: !0
        }
    ]), CAd = x.makeMessageType("aiserver.v1.IsCursorPredictionEnabledRequest", []), TAd = x.makeMessageType("aiserver.v1.IsCursorPredictionEnabledResponse", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        }
    ]), EAd = x.makeMessageType("aiserver.v1.StreamNextCursorPredictionRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 2,
            name: "diff_history",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "linter_errors",
            kind: "message",
            T: ZF,
            opt: !0
        },
        {
            no: 13,
            name: "context_items",
            kind: "message",
            T: M1r,
            repeated: !0
        },
        {
            no: 5,
            name: "diff_history_keys",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "give_debug_output",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "file_diff_histories",
            kind: "message",
            T: zte,
            repeated: !0
        },
        {
            no: 8,
            name: "merged_diff_histories",
            kind: "message",
            T: zte,
            repeated: !0
        },
        {
            no: 9,
            name: "block_diff_patches",
            kind: "message",
            T: F1r,
            repeated: !0
        },
        {
            no: 10,
            name: "is_nightly",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "is_debug",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "immediately_ack",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 17,
            name: "enable_more_context",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "parameter_hints",
            kind: "message",
            T: T9o,
            repeated: !0
        },
        {
            no: 15,
            name: "lsp_contexts",
            kind: "message",
            T: I1r,
            repeated: !0
        },
        {
            no: 16,
            name: "cpp_intent_info",
            kind: "message",
            T: S9o,
            opt: !0
        },
        {
            no: 18,
            name: "workspace_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 19,
            name: "file_sync_updates",
            kind: "message",
            T: qmn,
            repeated: !0
        },
        {
            no: 20,
            name: "file_visible_ranges",
            kind: "message",
            T: wBo,
            repeated: !0
        }
    ]), kBo = x.makeMessageType("aiserver.v1.StreamNextCursorPredictionRequest.VisibleRange", ()=>[
        {
            no: 1,
            name: "start_line_number_inclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number_exclusive",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "StreamNextCursorPredictionRequest_VisibleRange"
}), wBo = x.makeMessageType("aiserver.v1.StreamNextCursorPredictionRequest.FileVisibleRange", ()=>[
        {
            no: 1,
            name: "filename",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "visible_ranges",
            kind: "message",
            T: kBo,
            repeated: !0
        }
    ], {
    localName: "StreamNextCursorPredictionRequest_FileVisibleRange"
}), IAd = x.makeMessageType("aiserver.v1.StreamNextCursorPredictionResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "response"
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5,
            oneof: "response"
        },
        {
            no: 3,
            name: "is_not_in_range",
            kind: "scalar",
            T: 8,
            oneof: "response"
        },
        {
            no: 4,
            name: "file_name",
            kind: "scalar",
            T: 9,
            oneof: "response"
        }
    ]), xAd = x.makeMessageType("aiserver.v1.StreamWebCmdKV1Request", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "selection_range",
            kind: "message",
            T: aW
        },
        {
            no: 5,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: Hke,
            repeated: !0
        }
    ]), AAd = x.makeMessageType("aiserver.v1.StreamWebCmdKV1Response", ()=>[
        {
            no: 1,
            name: "cmd_k_response",
            kind: "message",
            T: oii
        }
    ]), RAd = x.makeMessageType("aiserver.v1.ContextScoresRequest", ()=>[
        {
            no: 1,
            name: "source_range",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "method_signatures",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), PAd = x.makeMessageType("aiserver.v1.ContextScoresResponse", ()=>[
        {
            no: 1,
            name: "scores",
            kind: "scalar",
            T: 2,
            repeated: !0
        }
    ]), MAd = x.makeMessageType("aiserver.v1.ReportGenerationFeedbackRequest", ()=>[
        {
            no: 1,
            name: "feedback_type",
            kind: "enum",
            T: x.getEnumType(htt)
        },
        {
            no: 2,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "comment",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "stars_overall",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "stars_speed",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "stars_accuracy",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "stars_style_taste",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "never_ask_again",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "did_popup",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "source",
            kind: "enum",
            T: x.getEnumType(CBo)
        }
    ]), htt = x.makeEnum("aiserver.v1.ReportGenerationFeedbackRequest.FeedbackType", [
    {
        no: 0,
        name: "FEEDBACK_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FEEDBACK_TYPE_THUMBS_UP",
        localName: "THUMBS_UP"
    },
    {
        no: 2,
        name: "FEEDBACK_TYPE_THUMBS_DOWN",
        localName: "THUMBS_DOWN"
    },
    {
        no: 3,
        name: "FEEDBACK_TYPE_NEUTRAL",
        localName: "NEUTRAL"
    },
    {
        no: 4,
        name: "FEEDBACK_TYPE_STARS",
        localName: "STARS"
    }
]), CBo = x.makeEnum("aiserver.v1.ReportGenerationFeedbackRequest.Source", [
    {
        no: 0,
        name: "SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SOURCE_INLINE",
        localName: "INLINE"
    },
    {
        no: 2,
        name: "SOURCE_VIBEOMETER",
        localName: "VIBEOMETER"
    }
]), DAd = x.makeMessageType("aiserver.v1.ReportGenerationFeedbackResponse", []), NAd = x.makeMessageType("aiserver.v1.ReportAgentFeedbackRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sentiment",
            kind: "enum",
            T: x.getEnumType(uii)
        },
        {
            no: 3,
            name: "categories",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "comment",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "canonical_model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "source",
            kind: "enum",
            T: x.getEnumType(K1r),
            opt: !0
        },
        {
            no: 7,
            name: "variant",
            kind: "enum",
            T: x.getEnumType(Y1r),
            opt: !0
        }
    ]), uii = x.makeEnum("aiserver.v1.ReportAgentFeedbackRequest.Sentiment", [
    {
        no: 0,
        name: "SENTIMENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SENTIMENT_UP",
        localName: "UP"
    },
    {
        no: 2,
        name: "SENTIMENT_DOWN",
        localName: "DOWN"
    },
    {
        no: 3,
        name: "SENTIMENT_RETRACTED",
        localName: "RETRACTED"
    }
]), K1r = x.makeEnum("aiserver.v1.ReportAgentFeedbackRequest.Source", [
    {
        no: 0,
        name: "SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SOURCE_IDE",
        localName: "IDE"
    },
    {
        no: 2,
        name: "SOURCE_GLASS",
        localName: "GLASS"
    },
    {
        no: 3,
        name: "SOURCE_SAND",
        localName: "SAND"
    },
    {
        no: 4,
        name: "SOURCE_WEB",
        localName: "WEB"
    }
]), Y1r = x.makeEnum("aiserver.v1.ReportAgentFeedbackRequest.Variant", [
    {
        no: 0,
        name: "VARIANT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "VARIANT_PROMINENT",
        localName: "PROMINENT"
    },
    {
        no: 2,
        name: "VARIANT_INLINE",
        localName: "INLINE"
    }
]), LAd = x.makeMessageType("aiserver.v1.ReportAgentFeedbackResponse", []), OAd = x.makeMessageType("aiserver.v1.ReportAgentMessageFeedbackRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "composer_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "selected_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "selection_start",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "selection_end",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "comment",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "canonical_model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "category",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "sentiment",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), FAd = x.makeMessageType("aiserver.v1.ReportAgentMessageFeedbackResponse", ()=>[
        {
            no: 1,
            name: "s3_uri",
            kind: "scalar",
            T: 9
        }
    ]), BAd = x.makeMessageType("aiserver.v1.ReportAutoRoutingResultFeedbackRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "rating",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "displayed_model_label",
            kind: "scalar",
            T: 9
        }
    ]), UAd = x.makeMessageType("aiserver.v1.ReportAutoRoutingResultFeedbackResponse", []), jAd = x.makeMessageType("aiserver.v1.ShowWelcomeScreenRequest", []), $Ad = x.makeMessageType("aiserver.v1.ShowWelcomeScreenResponse", ()=>[
        {
            no: 1,
            name: "enable_cards",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), HAd = x.makeMessageType("aiserver.v1.AiProjectRequest", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: Mg
        }
    ]), WAd = x.makeMessageType("aiserver.v1.AiProjectResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), GAd = x.makeMessageType("aiserver.v1.ToCamelCaseRequest", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), qAd = x.makeMessageType("aiserver.v1.ToCamelCaseResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), zAd = x.makeMessageType("aiserver.v1.StreamPriomptPromptRequest", ()=>[
        {
            no: 2,
            name: "prompt_props",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "prompt_props_type_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "skip_login_check",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "model_details",
            kind: "message",
            T: Mg
        }
    ]), VAd = x.makeMessageType("aiserver.v1.StreamPriomptPromptResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), TBo = x.makeMessageType("aiserver.v1.CheckFeatureStatusRequest", ()=>[
        {
            no: 1,
            name: "feature_name",
            kind: "scalar",
            T: 9
        }
    ]), KAd = x.makeMessageType("aiserver.v1.CheckFeaturesStatusRequest", ()=>[
        {
            no: 1,
            name: "feature_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), YAd = x.makeMessageType("aiserver.v1.CheckFeaturesStatusResponse", ()=>[
        {
            no: 1,
            name: "feature_statuses",
            kind: "message",
            T: XAd,
            repeated: !0
        }
    ]), XAd = x.makeMessageType("aiserver.v1.CheckFeaturesStatusResponse.FeatureStatus", ()=>[
        {
            no: 1,
            name: "feature_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "enabled",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "CheckFeaturesStatusResponse_FeatureStatus"
}), ZAd = x.makeMessageType("aiserver.v1.GetEffectiveTokenLimitRequest", ()=>[
        {
            no: 1,
            name: "model_details",
            kind: "message",
            T: Mg
        }
    ]), QAd = x.makeMessageType("aiserver.v1.GetEffectiveTokenLimitResponse", ()=>[
        {
            no: 1,
            name: "token_limit",
            kind: "scalar",
            T: 5
        }
    ]), EBo = x.makeMessageType("aiserver.v1.CheckFeatureStatusResponse", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        }
    ]), IBo = x.makeMessageType("aiserver.v1.CheckNumberConfigRequest", ()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        }
    ]), xBo = x.makeMessageType("aiserver.v1.CheckNumberConfigResponse", ()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]), JAd = x.makeMessageType("aiserver.v1.CheckNumberConfigsRequest", ()=>[
        {
            no: 1,
            name: "config_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), eRd = x.makeMessageType("aiserver.v1.CheckNumberConfigsResponse", ()=>[
        {
            no: 1,
            name: "configs",
            kind: "message",
            T: tRd,
            repeated: !0
        }
    ]), tRd = x.makeMessageType("aiserver.v1.CheckNumberConfigsResponse.Config", ()=>[
        {
            no: 1,
            name: "config_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "CheckNumberConfigsResponse_Config"
}), nRd = x.makeMessageType("aiserver.v1.IntentPredictionRequest", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 2,
            name: "context_options",
            kind: "message",
            T: aRd
        },
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: Mg
        }
    ]), iRd = x.makeMessageType("aiserver.v1.IntentPredictionResponse", ()=>[
        {
            no: 1,
            name: "chosen_documentation",
            kind: "message",
            T: rRd
        },
        {
            no: 2,
            name: "chosen_file_contents",
            kind: "message",
            T: sRd
        },
        {
            no: 3,
            name: "chosen_linter_diagnostics",
            kind: "message",
            T: oRd
        },
        {
            no: 4,
            name: "use_global_context",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "use_with_folder_context",
            kind: "scalar",
            T: 8
        }
    ]), rRd = x.makeMessageType("aiserver.v1.IntentPredictionResponse.ChosenDocumentation", ()=>[
        {
            no: 1,
            name: "doc_indices",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 2,
            name: "doc_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "doc_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "IntentPredictionResponse_ChosenDocumentation"
}), sRd = x.makeMessageType("aiserver.v1.IntentPredictionResponse.ChosenFileContents", [], {
    localName: "IntentPredictionResponse_ChosenFileContents"
}), oRd = x.makeMessageType("aiserver.v1.IntentPredictionResponse.ChosenLinterDiagnostics", ()=>[
        {
            no: 1,
            name: "diagnostic_indices",
            kind: "scalar",
            T: 5,
            repeated: !0
        }
    ], {
    localName: "IntentPredictionResponse_ChosenLinterDiagnostics"
}), aRd = x.makeMessageType("aiserver.v1.ContextOptions", ()=>[
        {
            no: 1,
            name: "all_documentation",
            kind: "message",
            T: lRd
        },
        {
            no: 2,
            name: "current_file_contents",
            kind: "message",
            T: uRd
        },
        {
            no: 3,
            name: "linter_diagnostics",
            kind: "message",
            T: dRd
        },
        {
            no: 4,
            name: "global_context",
            kind: "message",
            T: hRd
        }
    ]), lRd = x.makeMessageType("aiserver.v1.ContextOptions.AllDocumentation", ()=>[
        {
            no: 1,
            name: "available_docs",
            kind: "message",
            T: cRd,
            repeated: !0
        }
    ], {
    localName: "ContextOptions_AllDocumentation"
}), cRd = x.makeMessageType("aiserver.v1.ContextOptions.AllDocumentation.Documentation", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "identifier",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextOptions_AllDocumentation_Documentation"
}), uRd = x.makeMessageType("aiserver.v1.ContextOptions.CurrentFileContents", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "cursor_position",
            kind: "message",
            T: oW
        },
        {
            no: 4,
            name: "dataframes",
            kind: "message",
            T: Mbr,
            repeated: !0
        },
        {
            no: 5,
            name: "language_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "selection",
            kind: "message",
            T: jte
        }
    ], {
    localName: "ContextOptions_CurrentFileContents"
}), dRd = x.makeMessageType("aiserver.v1.ContextOptions.LinterDiagnostics", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "diagnostics",
            kind: "message",
            T: ABo,
            repeated: !0
        }
    ], {
    localName: "ContextOptions_LinterDiagnostics"
}), ABo = x.makeMessageType("aiserver.v1.ContextOptions.LinterDiagnostics.Diagnostic", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "source",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "range",
            kind: "message",
            T: jte
        },
        {
            no: 4,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextOptions_LinterDiagnostics_Diagnostic"
}), hRd = x.makeMessageType("aiserver.v1.ContextOptions.GlobalContext", [], {
    localName: "ContextOptions_GlobalContext"
}), pRd = x.makeMessageType("aiserver.v1.StreamCursorTutorRequest", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: Mg
        }
    ]), mRd = x.makeMessageType("aiserver.v1.StreamCursorTutorResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), RBo = x.makeMessageType("aiserver.v1.ModelQueryRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: Cx,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 5,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 7,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 8,
            name: "query_type",
            kind: "enum",
            T: x.getEnumType(gRd)
        },
        {
            no: 9,
            name: "repository_info",
            kind: "message",
            T: Cx
        },
        {
            no: 10,
            name: "faster_and_stupider",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "use_globs",
            kind: "scalar",
            T: 8
        }
    ]), gRd = x.makeEnum("aiserver.v1.ModelQueryRequest.QueryType", [
    {
        no: 0,
        name: "QUERY_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "QUERY_TYPE_KEYWORDS",
        localName: "KEYWORDS"
    },
    {
        no: 2,
        name: "QUERY_TYPE_EMBEDDINGS",
        localName: "EMBEDDINGS"
    }
]), fRd = x.makeMessageType("aiserver.v1.ModelQueryResponse", ()=>[
        {
            no: 1,
            name: "queries",
            kind: "message",
            T: vRd,
            repeated: !0
        }
    ]), vRd = x.makeMessageType("aiserver.v1.ModelQueryResponse.Query", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "successful_parse",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "good_file_extensions",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "bad_file_extensions",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "good_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "bad_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "ModelQueryResponse_Query"
}), _Rd = x.makeMessageType("aiserver.v1.ModelQueryResponseV2", ()=>[
        {
            no: 1,
            name: "query",
            kind: "message",
            T: bRd,
            oneof: "query_or_reasoning"
        },
        {
            no: 2,
            name: "reasoning",
            kind: "scalar",
            T: 9,
            oneof: "query_or_reasoning"
        }
    ]), bRd = x.makeMessageType("aiserver.v1.ModelQueryResponseV2.QueryItem", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "partial_query"
        },
        {
            no: 2,
            name: "glob",
            kind: "scalar",
            T: 9,
            oneof: "partial_query"
        },
        {
            no: 3,
            name: "index",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ModelQueryResponseV2_QueryItem"
}), yRd = x.makeMessageType("aiserver.v1.ApiDetails", ()=>[
        {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "enable_ghost_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), X1r = x.makeMessageType("aiserver.v1.FullFileSearchResult", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: Zmd,
            repeated: !0
        }
    ]), dii = x.makeMessageType("aiserver.v1.CodeSearchResult", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: Q9,
            repeated: !0
        },
        {
            no: 2,
            name: "all_files",
            kind: "message",
            T: wAe,
            repeated: !0
        }
    ]), SRd = x.makeMessageType("aiserver.v1.RerankerRequest", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: Q9,
            repeated: !0
        },
        {
            no: 2,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "num_blocks",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 5,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 6,
            name: "api_details",
            kind: "message",
            T: yRd
        },
        {
            no: 7,
            name: "file_search_results",
            kind: "message",
            T: X1r,
            oneof: "context_results"
        },
        {
            no: 8,
            name: "code_search_results",
            kind: "message",
            T: dii,
            oneof: "context_results"
        }
    ]), kRd = x.makeMessageType("aiserver.v1.RerankerResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: Q9,
            repeated: !0
        }
    ]), wRd = x.makeMessageType("aiserver.v1.GenerateTldrRequest", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), CRd = x.makeMessageType("aiserver.v1.GenerateTldrResponse", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "all",
            kind: "scalar",
            T: 9
        }
    ]), TRd = x.makeMessageType("aiserver.v1.TaskStreamChatContextRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: Cx,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 5,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 7,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 8,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 14,
            name: "linter_errors",
            kind: "message",
            T: ZF
        },
        {
            no: 15,
            name: "advanced_codebase_context",
            kind: "message",
            T: ERd
        },
        {
            no: 16,
            name: "is_eval",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 17,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 18,
            name: "desired_token_limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), ERd = x.makeMessageType("aiserver.v1.AdvancedCodebaseContextOptions", ()=>[
        {
            no: 1,
            name: "num_results_per_search",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "include_pattern",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "exclude_pattern",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "reranker",
            kind: "enum",
            T: x.getEnumType(rmd)
        },
        {
            no: 5,
            name: "index_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "reasoning_step",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "rechunker",
            kind: "enum",
            T: x.getEnumType(omd),
            opt: !0
        }
    ]), IRd = x.makeMessageType("aiserver.v1.TaskStreamChatContextResponse", ()=>[
        {
            no: 1,
            name: "output",
            kind: "message",
            T: xRd,
            oneof: "response"
        },
        {
            no: 2,
            name: "gathering_step",
            kind: "message",
            T: RRd,
            oneof: "response"
        },
        {
            no: 3,
            name: "gathering_file",
            kind: "message",
            T: ARd,
            oneof: "response"
        },
        {
            no: 4,
            name: "reranking_step",
            kind: "message",
            T: PRd,
            oneof: "response"
        },
        {
            no: 5,
            name: "reranking_file",
            kind: "message",
            T: MRd,
            oneof: "response"
        },
        {
            no: 6,
            name: "reasoning_step",
            kind: "message",
            T: DRd,
            oneof: "response"
        },
        {
            no: 7,
            name: "reasoning_substep",
            kind: "message",
            T: NRd,
            oneof: "response"
        }
    ]), xRd = x.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.Output", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "TaskStreamChatContextResponse_Output"
}), ARd = x.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.GatheringFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: m7
        },
        {
            no: 3,
            name: "step_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ], {
    localName: "TaskStreamChatContextResponse_GatheringFile"
}), RRd = x.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.GatheringStep", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "index",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "TaskStreamChatContextResponse_GatheringStep"
}), PRd = x.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.RerankingStep", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "index",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "TaskStreamChatContextResponse_RerankingStep"
}), MRd = x.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.RerankingFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: m7
        },
        {
            no: 3,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "failed",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "score",
            kind: "scalar",
            T: 2
        },
        {
            no: 6,
            name: "step_index",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "TaskStreamChatContextResponse_RerankingFile"
}), DRd = x.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.ReasoningStep", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "index",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "TaskStreamChatContextResponse_ReasoningStep"
}), NRd = x.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.ReasoningSubstep", ()=>[
        {
            no: 1,
            name: "markdown_explanation",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "step_index",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "TaskStreamChatContextResponse_ReasoningSubstep"
}), LRd = x.makeMessageType("aiserver.v1.TaskStreamChatContextResponseWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: IRd,
            oneof: "response"
        },
        {
            no: 2,
            name: "background_task_uuid",
            kind: "scalar",
            T: 9,
            oneof: "response"
        }
    ]), PBo = x.makeMessageType("aiserver.v1.StreamChatContextRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: Cx,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 5,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 7,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 8,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 9,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "code_context",
            kind: "message",
            T: ORd
        },
        {
            no: 11,
            name: "rerank_results",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "file_search_results",
            kind: "message",
            T: X1r,
            oneof: "context_results"
        },
        {
            no: 13,
            name: "code_search_results",
            kind: "message",
            T: dii,
            oneof: "context_results"
        },
        {
            no: 14,
            name: "linter_errors",
            kind: "message",
            T: ZF
        },
        {
            no: 15,
            name: "is_bash",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 16,
            name: "rerank_results_v2",
            kind: "scalar",
            T: 8
        },
        {
            no: 17,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 18,
            name: "can_handle_filenames_after_language_ids",
            kind: "scalar",
            T: 8
        },
        {
            no: 19,
            name: "long_context_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 20,
            name: "is_eval",
            kind: "scalar",
            T: 8
        },
        {
            no: 21,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 22,
            name: "desired_max_tokens",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 23,
            name: "runnable_code_blocks",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), ORd = x.makeMessageType("aiserver.v1.StreamChatContextRequest.CodeContext", ()=>[
        {
            no: 1,
            name: "chunks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 2,
            name: "scored_chunks",
            kind: "message",
            T: Q9,
            repeated: !0
        }
    ], {
    localName: "StreamChatContextRequest_CodeContext"
}), MBo = x.makeMessageType("aiserver.v1.StreamChatContextResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "debugging_only_chat_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "debugging_only_token_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "document_citation",
            kind: "message",
            T: Uni
        },
        {
            no: 5,
            name: "filled_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "used_code",
            kind: "message",
            T: FRd
        },
        {
            no: 7,
            name: "code_link",
            kind: "message",
            T: BRd
        },
        {
            no: 8,
            name: "chunk_identity",
            kind: "message",
            T: URd,
            opt: !0
        },
        {
            no: 9,
            name: "docs_reference",
            kind: "message",
            T: Fmn,
            opt: !0
        },
        {
            no: 10,
            name: "symbol_link",
            kind: "message",
            T: jmn,
            opt: !0
        },
        {
            no: 11,
            name: "file_link",
            kind: "message",
            T: $ni,
            opt: !0
        }
    ]), FRd = x.makeMessageType("aiserver.v1.StreamChatContextResponse.UsedCode", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: Q9,
            repeated: !0
        }
    ], {
    localName: "StreamChatContextResponse_UsedCode"
}), BRd = x.makeMessageType("aiserver.v1.StreamChatContextResponse.CodeLink", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "StreamChatContextResponse_CodeLink"
}), URd = x.makeMessageType("aiserver.v1.StreamChatContextResponse.ChunkIdentity", ()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "chunk_type",
            kind: "enum",
            T: x.getEnumType(Bni)
        }
    ], {
    localName: "StreamChatContextResponse_ChunkIdentity"
}), jRd = x.makeMessageType("aiserver.v1.StreamChatDeepContextRequest", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 2,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 4,
            name: "context_results",
            kind: "message",
            T: ngd
        },
        {
            no: 5,
            name: "rerank_results",
            kind: "scalar",
            T: 8
        }
    ]), $Rd = x.makeMessageType("aiserver.v1.StreamChatDeepContextResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), HRd = x.makeMessageType("aiserver.v1.DocumentationInfo", ()=>[
        {
            no: 1,
            name: "doc_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "metadata",
            kind: "message",
            T: COo
        }
    ]), WRd = x.makeMessageType("aiserver.v1.AvailableDocsRequest", ()=>[
        {
            no: 1,
            name: "partial_url",
            kind: "scalar",
            T: 9,
            oneof: "partial_doc"
        },
        {
            no: 2,
            name: "partial_doc_name",
            kind: "scalar",
            T: 9,
            oneof: "partial_doc"
        },
        {
            no: 3,
            name: "get_all",
            kind: "scalar",
            T: 8,
            oneof: "partial_doc"
        },
        {
            no: 4,
            name: "additional_doc_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), GRd = x.makeMessageType("aiserver.v1.AvailableDocsResponse", ()=>[
        {
            no: 1,
            name: "docs",
            kind: "message",
            T: HRd,
            repeated: !0
        }
    ]), qRd = x.makeMessageType("aiserver.v1.RunWebSearchRequest", ()=>[
        {
            no: 1,
            name: "search_term",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "explanation",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "snapshot_as_of",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), zRd = x.makeMessageType("aiserver.v1.WebSearchDocument", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), VRd = x.makeMessageType("aiserver.v1.RunWebSearchResponse", ()=>[
        {
            no: 1,
            name: "answer",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "documents",
            kind: "message",
            T: zRd,
            repeated: !0
        }
    ]), KRd = x.makeMessageType("aiserver.v1.RunWebFetchRequest", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "snapshot_as_of",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), YRd = x.makeMessageType("aiserver.v1.RunWebFetchSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), XRd = x.makeMessageType("aiserver.v1.RunWebFetchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_timeout",
            kind: "scalar",
            T: 8
        }
    ]), ZRd = x.makeMessageType("aiserver.v1.RunWebFetchResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: YRd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: XRd,
            oneof: "result"
        }
    ]), Z1r = x.makeMessageType("aiserver.v1.GenerateImageReferenceImage", ()=>[
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
            T: 9
        }
    ]), QRd = x.makeMessageType("aiserver.v1.RunGenerateImageRequest", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reference_images",
            kind: "message",
            T: Z1r,
            repeated: !0
        },
        {
            no: 3,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "max_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "aspect_ratio",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), JRd = x.makeMessageType("aiserver.v1.RunGenerateImageSuccess", ()=>[
        {
            no: 1,
            name: "image_data",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]), e2d = x.makeMessageType("aiserver.v1.RunGenerateImageError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_restricted",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "provider_status_code",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "content_safety_blocked",
            kind: "scalar",
            T: 8
        }
    ]), t2d = x.makeMessageType("aiserver.v1.RunGenerateImageResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: JRd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: e2d,
            oneof: "result"
        }
    ]), n2d = x.makeMessageType("aiserver.v1.RunGenerateVideoRequest", ()=>[
        {
            no: 1,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: Z1r
        },
        {
            no: 3,
            name: "reference_images",
            kind: "message",
            T: Z1r,
            repeated: !0
        },
        {
            no: 4,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "max_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "duration_seconds",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 7,
            name: "aspect_ratio",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "resolution",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), i2d = x.makeMessageType("aiserver.v1.RunGenerateVideoSuccess", ()=>[
        {
            no: 1,
            name: "video_data",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "duration_seconds",
            kind: "scalar",
            T: 13
        }
    ]), r2d = x.makeMessageType("aiserver.v1.RunGenerateVideoError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_restricted",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "provider_status_code",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "content_safety_blocked",
            kind: "scalar",
            T: 8
        }
    ]), s2d = x.makeMessageType("aiserver.v1.RunGenerateVideoResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: i2d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: r2d,
            oneof: "result"
        }
    ]), o2d = x.makeMessageType("aiserver.v1.RunXSearchRequest", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "from_date",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "to_date",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "allowed_x_handles",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "excluded_x_handles",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "max_mode",
            kind: "scalar",
            T: 8
        }
    ]), a2d = x.makeMessageType("aiserver.v1.RunXSearchCitation", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        }
    ]), l2d = x.makeMessageType("aiserver.v1.RunXSearchSuccess", ()=>[
        {
            no: 1,
            name: "answer",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "citations",
            kind: "message",
            T: a2d,
            repeated: !0
        }
    ]), c2d = x.makeMessageType("aiserver.v1.RunXSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "provider_status_code",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), u2d = x.makeMessageType("aiserver.v1.RunXSearchResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: l2d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: c2d,
            oneof: "result"
        }
    ]), d2d = x.makeMessageType("aiserver.v1.ClassifyAgentAutoReviewRequest", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: k1r
        },
        {
            no: 2,
            name: "attempt_index",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 3,
            name: "mode",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "caller_records_classifier_call",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), h2d = x.makeMessageType("aiserver.v1.ClassifyAgentAutoReviewResponse", ()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: w1r
        }
    ]), p2d = x.makeMessageType("aiserver.v1.RunDescribeImageRequest", ()=>[
        {
            no: 1,
            name: "image_data",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "context_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "max_mode",
            kind: "scalar",
            T: 8
        }
    ]), m2d = x.makeMessageType("aiserver.v1.RunDescribeImageResponse", ()=>[
        {
            no: 1,
            name: "applicable",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), g2d = x.makeMessageType("aiserver.v1.DetectShellHangRequest", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]), f2d = x.makeMessageType("aiserver.v1.DetectShellHangResponse", ()=>[
        {
            no: 1,
            name: "hanging",
            kind: "scalar",
            T: 8
        }
    ]), v2d = x.makeMessageType("aiserver.v1.ThrowErrorCheckRequest", ()=>[
        {
            no: 1,
            name: "error",
            kind: "enum",
            T: x.getEnumType(wo)
        }
    ]), _2d = x.makeMessageType("aiserver.v1.ThrowErrorCheckResponse", []), Q1r = x.makeMessageType("aiserver.v1.AvailableModelsRequest", ()=>[
        {
            no: 1,
            name: "is_nightly",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "include_long_context_models",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "exclude_max_named_models",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "additional_model_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "use_model_parameters",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "include_hidden_models",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "do_not_use_markdown",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "variants_will_be_shown_in_exploded_list",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "for_automations",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "scope",
            kind: "enum",
            T: x.getEnumType(lBo),
            opt: !0
        },
        {
            no: 14,
            name: "byok_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "use_react_model_picker",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "use_cloud_agent_effort_modes",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 15,
            name: "use_parameterized_automations_models",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "admin_settings_group_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "expected_scope",
            kind: "message",
            T: f7
        },
        {
            no: 17,
            name: "client_llm_gateway_credential",
            kind: "message",
            T: Nni,
            opt: !0
        },
        {
            no: 18,
            name: "refresh_llm_gateway_models",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), b2d = x.makeMessageType("aiserver.v1.AvailableModelsResponse", ()=>[
        {
            no: 2,
            name: "models",
            kind: "message",
            T: ekr,
            repeated: !0
        },
        {
            no: 1,
            name: "model_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "composer_model_config",
            kind: "message",
            T: ptt,
            opt: !0
        },
        {
            no: 5,
            name: "cmd_k_model_config",
            kind: "message",
            T: ptt,
            opt: !0
        },
        {
            no: 6,
            name: "background_composer_model_config",
            kind: "message",
            T: ptt,
            opt: !0
        },
        {
            no: 7,
            name: "plan_execution_model_config",
            kind: "message",
            T: ptt,
            opt: !0
        },
        {
            no: 8,
            name: "spec_model_config",
            kind: "message",
            T: ptt,
            opt: !0
        },
        {
            no: 9,
            name: "deep_search_model_config",
            kind: "message",
            T: ptt,
            opt: !0
        },
        {
            no: 10,
            name: "quick_agent_model_config",
            kind: "message",
            T: ptt,
            opt: !0
        },
        {
            no: 16,
            name: "subagent_model_configs",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: ptt
            }
        },
        {
            no: 11,
            name: "use_model_parameters",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "disable_unused_models_after_n_hours",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 13,
            name: "upgrade_unchanged_models_after_n_hours",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 15,
            name: "display_configuration",
            kind: "message",
            T: T2d
        },
        {
            no: 19,
            name: "experimental_model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 20,
            name: "experimental_model_display_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 21,
            name: "nudge_new_chats_to_auto_optimize_for",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), fbt = x.makeEnum("aiserver.v1.AvailableModelsResponse.DegradationStatus", [
    {
        no: 0,
        name: "DEGRADATION_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DEGRADATION_STATUS_DEGRADED",
        localName: "DEGRADED"
    },
    {
        no: 2,
        name: "DEGRADATION_STATUS_DISABLED",
        localName: "DISABLED"
    }
]), Qmn = x.makeEnum("aiserver.v1.AvailableModelsResponse.ModelVendorId", [
    {
        no: 0,
        name: "MODEL_VENDOR_ID_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MODEL_VENDOR_ID_ANTHROPIC",
        localName: "ANTHROPIC"
    },
    {
        no: 2,
        name: "MODEL_VENDOR_ID_OPENAI",
        localName: "OPENAI"
    },
    {
        no: 3,
        name: "MODEL_VENDOR_ID_GOOGLE",
        localName: "GOOGLE"
    },
    {
        no: 4,
        name: "MODEL_VENDOR_ID_XAI",
        localName: "XAI"
    },
    {
        no: 5,
        name: "MODEL_VENDOR_ID_MOONSHOT",
        localName: "MOONSHOT"
    },
    {
        no: 6,
        name: "MODEL_VENDOR_ID_CURSOR",
        localName: "CURSOR"
    },
    {
        no: 7,
        name: "MODEL_VENDOR_ID_NVIDIA",
        localName: "NVIDIA"
    },
    {
        no: 8,
        name: "MODEL_VENDOR_ID_ZAI",
        localName: "ZAI"
    },
    {
        no: 9,
        name: "MODEL_VENDOR_ID_META",
        localName: "META"
    },
    {
        no: 10,
        name: "MODEL_VENDOR_ID_DEEPSEEK",
        localName: "DEEPSEEK"
    }
]), J1r = x.makeMessageType("aiserver.v1.AvailableModelsResponse.TooltipData", ()=>[
        {
            no: 1,
            name: "primary_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "secondary_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "secondary_warning_text",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "icon",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "tertiary_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "tertiary_text_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "markdown_content",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "AvailableModelsResponse_TooltipData"
}), y2d = x.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelVendor", ()=>[
        {
            no: 1,
            name: "id",
            kind: "enum",
            T: x.getEnumType(Qmn)
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AvailableModelsResponse_ModelVendor"
}), DBo = x.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerBadge", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "variant",
            kind: "enum",
            T: x.getEnumType(S2d)
        },
        {
            no: 3,
            name: "dismiss_on_selection",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "AvailableModelsResponse_ModelPickerBadge"
}), S2d = x.makeEnum("aiserver.v1.AvailableModelsResponse.ModelPickerBadge.Variant", [
    {
        no: 0,
        name: "VARIANT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "VARIANT_ACCENT",
        localName: "ACCENT"
    },
    {
        no: 2,
        name: "VARIANT_NEUTRAL",
        localName: "NEUTRAL"
    },
    {
        no: 3,
        name: "VARIANT_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 4,
        name: "VARIANT_WARN",
        localName: "WARN"
    },
    {
        no: 5,
        name: "VARIANT_DANGER",
        localName: "DANGER"
    }
]), ekr = x.makeMessageType("aiserver.v1.AvailableModelsResponse.AvailableModel", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "default_on",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "is_long_context_only",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "is_chat_only",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "supports_agent",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "degradation_status",
            kind: "enum",
            T: x.getEnumType(fbt),
            opt: !0
        },
        {
            no: 7,
            name: "price",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 8,
            name: "tooltip_data",
            kind: "message",
            T: J1r,
            opt: !0
        },
        {
            no: 20,
            name: "tooltip_data_for_max_mode",
            kind: "message",
            T: J1r,
            opt: !0
        },
        {
            no: 9,
            name: "supports_thinking",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "supports_images",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "supports_auto_context",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "auto_context_max_tokens",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 13,
            name: "auto_context_extended_max_tokens",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 14,
            name: "supports_max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 19,
            name: "supports_non_max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 15,
            name: "context_token_limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 16,
            name: "context_token_limit_for_max_mode",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 17,
            name: "client_display_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "server_model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 21,
            name: "is_recommended_for_background_composer",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 22,
            name: "supports_plan_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 25,
            name: "supports_sandboxing",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 23,
            name: "is_user_added",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 24,
            name: "inputbox_short_model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 26,
            name: "supports_cmd_k",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 27,
            name: "only_supports_cmd_k",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 28,
            name: "background_composer_sort_order",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 29,
            name: "parameter_definitions",
            kind: "message",
            T: D2d,
            repeated: !0
        },
        {
            no: 30,
            name: "variants",
            kind: "message",
            T: k2d,
            repeated: !0
        },
        {
            no: 32,
            name: "cloud_agent_effort_mode",
            kind: "enum",
            T: x.getEnumType(q1r),
            opt: !0
        },
        {
            no: 33,
            name: "cloud_migrate_to_model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 34,
            name: "upgrade_model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 35,
            name: "is_hidden",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 36,
            name: "legacy_slugs",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 37,
            name: "id_aliases",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 38,
            name: "named_model_section_index",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 39,
            name: "tagline",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 40,
            name: "visible_in_routed_model_view",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 41,
            name: "vendor_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 42,
            name: "vendor",
            kind: "message",
            T: y2d,
            opt: !0
        },
        {
            no: 43,
            name: "default_disabled_in_admin_allowlist",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 44,
            name: "cloud_agent_effort_modes",
            kind: "enum",
            T: x.getEnumType(q1r),
            repeated: !0
        },
        {
            no: 45,
            name: "supports_smart_mode_classifier",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 46,
            name: "requires_data_retention",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 47,
            name: "reason_for_zdr_consent_block",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 48,
            name: "model_picker_badges",
            kind: "message",
            T: DBo,
            repeated: !0
        }
    ], {
    localName: "AvailableModelsResponse_AvailableModel"
}), k2d = x.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelVariantConfig", ()=>[
        {
            no: 1,
            name: "parameter_values",
            kind: "message",
            T: JF,
            repeated: !0
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "display_name_outside_picker",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "is_max_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "is_default_max_config",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "is_default_non_max_config",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "tooltip_data",
            kind: "message",
            T: J1r,
            opt: !0
        },
        {
            no: 7,
            name: "tagline",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "variant_string_representation",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "confirmation_dialogue",
            kind: "message",
            T: w2d,
            opt: !0
        },
        {
            no: 11,
            name: "legacy_slug",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "AvailableModelsResponse_ModelVariantConfig"
}), w2d = x.makeMessageType("aiserver.v1.AvailableModelsResponse.ConfirmationDialogue", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "blocks_submission",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "presentation",
            kind: "enum",
            T: x.getEnumType(C2d),
            opt: !0
        }
    ], {
    localName: "AvailableModelsResponse_ConfirmationDialogue"
}), C2d = x.makeEnum("aiserver.v1.AvailableModelsResponse.ConfirmationDialogue.Presentation", [
    {
        no: 0,
        name: "PRESENTATION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PRESENTATION_POST_PICKER_WARNING",
        localName: "POST_PICKER_WARNING"
    }
]), ptt = x.makeMessageType("aiserver.v1.AvailableModelsResponse.FeatureModelConfig", ()=>[
        {
            no: 1,
            name: "default_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "fallback_models",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "best_of_n_default_models",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "AvailableModelsResponse_FeatureModelConfig"
}), T2d = x.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration", ()=>[
        {
            no: 1,
            name: "routed_model_view_config",
            kind: "message",
            T: E2d
        },
        {
            no: 2,
            name: "named_models_view_config",
            kind: "message",
            T: A2d
        },
        {
            no: 3,
            name: "hide_search_bar",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "hide_add_models",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "model_selection_restriction_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration"
}), E2d = x.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.RoutedModelViewConfig", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "routed_model_view_to_named_view_toggle",
            kind: "message",
            T: I2d,
            opt: !0
        },
        {
            no: 3,
            name: "routed_model_view_to_named_view_button",
            kind: "message",
            T: x2d,
            opt: !0
        },
        {
            no: 4,
            name: "hide_search_bar",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "hide_routed_model_view",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_RoutedModelViewConfig"
}), I2d = x.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.RoutedModelViewConfig.RoutedModelViewToNamedViewToggle", ()=>[
        {
            no: 1,
            name: "title_markdown",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subtitle",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "set_to_last_named_model",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_RoutedModelViewConfig_RoutedModelViewToNamedViewToggle"
}), x2d = x.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.RoutedModelViewConfig.RoutedModelViewToNamedViewButton", ()=>[
        {
            no: 1,
            name: "markdown",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_RoutedModelViewConfig_RoutedModelViewToNamedViewButton"
}), A2d = x.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.NamedModelsViewConfig", ()=>[
        {
            no: 2,
            name: "named_view_to_routed_model_view_toggle",
            kind: "message",
            T: R2d,
            opt: !0
        },
        {
            no: 3,
            name: "named_view_to_routed_model_view_no_button",
            kind: "message",
            T: P2d,
            opt: !0
        },
        {
            no: 4,
            name: "named_view_to_routed_model_view_button",
            kind: "message",
            T: M2d,
            opt: !0
        }
    ], {
    localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_NamedModelsViewConfig"
}), R2d = x.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.NamedModelsViewConfig.NamedViewToRoutedModelViewToggle", ()=>[
        {
            no: 1,
            name: "markdown",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_NamedModelsViewConfig_NamedViewToRoutedModelViewToggle"
}), P2d = x.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.NamedModelsViewConfig.NamedViewToRoutedModelViewNoButton", [], {
    localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_NamedModelsViewConfig_NamedViewToRoutedModelViewNoButton"
}), M2d = x.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.NamedModelsViewConfig.NamedViewToRoutedModelViewButton", ()=>[
        {
            no: 1,
            name: "markdown",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_NamedModelsViewConfig_NamedViewToRoutedModelViewButton"
}), D2d = x.makeMessageType("aiserver.v1.ModelParameterDefinition", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "markdown_tooltip",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "parameter_type",
            kind: "message",
            T: N2d
        },
        {
            no: 5,
            name: "is_cycleable_by_hotkey",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), N2d = x.makeMessageType("aiserver.v1.ModelParameterDefinition.ModelParameterType", ()=>[
        {
            no: 1,
            name: "boolean_parameter",
            kind: "message",
            T: L2d,
            opt: !0
        },
        {
            no: 2,
            name: "enum_parameter",
            kind: "message",
            T: F2d,
            opt: !0
        }
    ], {
    localName: "ModelParameterDefinition_ModelParameterType"
}), L2d = x.makeMessageType("aiserver.v1.ModelParameterDefinition.BooleanParameterDefinition", ()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: O2d,
            repeated: !0
        }
    ], {
    localName: "ModelParameterDefinition_BooleanParameterDefinition"
}), O2d = x.makeMessageType("aiserver.v1.ModelParameterDefinition.BooleanParameterDefinition.BooleanParameterValue", ()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
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
            name: "increases_model_cost",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "default_blocked_in_admin_allowlist",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "hide_from_user_picker_when_admin_blocked",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "blocked_by_admin_allowlist",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "ModelParameterDefinition_BooleanParameterDefinition_BooleanParameterValue"
}), F2d = x.makeMessageType("aiserver.v1.ModelParameterDefinition.EnumParameterDefinition", ()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: B2d,
            repeated: !0
        }
    ], {
    localName: "ModelParameterDefinition_EnumParameterDefinition"
}), B2d = x.makeMessageType("aiserver.v1.ModelParameterDefinition.EnumParameterDefinition.EnumParameterValue", ()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
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
            name: "increases_model_cost",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "blocked_by_admin_allowlist",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "markdown_tooltip",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "model_picker_badges",
            kind: "message",
            T: DBo,
            repeated: !0
        }
    ], {
    localName: "ModelParameterDefinition_EnumParameterDefinition_EnumParameterValue"
}), U2d = x.makeMessageType("aiserver.v1.ServerTimeRequest", []), j2d = x.makeMessageType("aiserver.v1.ServerTimeResponse", ()=>[
        {
            no: 1,
            name: "receive_timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "transmit_timestamp",
            kind: "scalar",
            T: 1
        }
    ]), NBo = x.makeMessageType("aiserver.v1.HealthCheckRequest", []), $2d = x.makeMessageType("aiserver.v1.HealthCheckResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(H2d)
        }
    ]), H2d = x.makeEnum("aiserver.v1.HealthCheckResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_HEALTHY",
        localName: "HEALTHY"
    }
]), W2d = x.makeMessageType("aiserver.v1.PrivacyCheckRequest", []), G2d = x.makeMessageType("aiserver.v1.PrivacyCheckResponse", ()=>[
        {
            no: 1,
            name: "is_on_privacy_pod",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "is_ghost_mode_on",
            kind: "scalar",
            T: 8
        }
    ]), q2d = x.makeMessageType("aiserver.v1.TimeLeftHealthCheckResponse", ()=>[
        {
            no: 1,
            name: "time_left",
            kind: "scalar",
            T: 9
        }
    ]), LBo = x.makeMessageType("aiserver.v1.StreamGenerateRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: Cx,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 5,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 9,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 10,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 11,
            name: "linter_errors",
            kind: "message",
            T: ZF
        },
        {
            no: 12,
            name: "prompt_code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 14,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "cmd_k_debug_info",
            kind: "message",
            T: kAe
        },
        {
            no: 15,
            name: "fast_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 16,
            name: "original_request",
            kind: "message",
            T: LBo
        }
    ]), z2d = x.makeMessageType("aiserver.v1.ReviewRequest", ()=>[
        {
            no: 1,
            name: "chunk",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_context",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunk_range",
            kind: "message",
            T: aW
        },
        {
            no: 4,
            name: "diff_string",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), OBo = x.makeMessageType("aiserver.v1.ReviewChatMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "type",
            kind: "enum",
            T: x.getEnumType(V2d)
        }
    ]), V2d = x.makeEnum("aiserver.v1.ReviewChatMessage.ReviewChatMessageType", [
    {
        no: 0,
        name: "REVIEW_CHAT_MESSAGE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REVIEW_CHAT_MESSAGE_TYPE_HUMAN",
        localName: "HUMAN"
    },
    {
        no: 2,
        name: "REVIEW_CHAT_MESSAGE_TYPE_AI",
        localName: "AI"
    }
]), K2d = x.makeMessageType("aiserver.v1.ReviewChatRequest", ()=>[
        {
            no: 1,
            name: "chunk",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_context",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunk_range",
            kind: "message",
            T: aW
        },
        {
            no: 4,
            name: "messages",
            kind: "message",
            T: OBo,
            repeated: !0
        }
    ]), Y2d = x.makeMessageType("aiserver.v1.ReviewChatResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "should_resolve",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), X2d = x.makeMessageType("aiserver.v1.ReviewBug", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "severity",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "tldr",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Z2d = x.makeMessageType("aiserver.v1.ReviewResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "tldr",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "is_bug",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "bugs",
            kind: "message",
            T: X2d,
            repeated: !0
        }
    ]), Q2d = x.makeMessageType("aiserver.v1.SlashEditRequest", ()=>[
        {
            no: 2,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 3,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 7,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 8,
            name: "is_cmd_i",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "summary_up_until_index",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 13,
            name: "should_use_turbo_debug_prompt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "edit_selection",
            kind: "message",
            T: aW,
            opt: !0
        },
        {
            no: 15,
            name: "files",
            kind: "message",
            T: QE,
            repeated: !0
        },
        {
            no: 16,
            name: "clicked_code_block_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "is_an_optimistic_request_for_caching_and_linting",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 18,
            name: "specific_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 19,
            name: "use_fast_apply",
            kind: "scalar",
            T: 8
        },
        {
            no: 20,
            name: "fast_apply_model_type",
            kind: "enum",
            T: x.getEnumType(FBo)
        },
        {
            no: 25,
            name: "use_chunk_speculation_for_long_files",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 26,
            name: "parent_request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 27,
            name: "source",
            kind: "enum",
            T: x.getEnumType(Q9o),
            opt: !0
        },
        {
            no: 28,
            name: "is_reapply",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 29,
            name: "willing_to_pay_extra_for_speed",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 30,
            name: "attempt_number",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 31,
            name: "should_throw_timeout_error",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), FBo = x.makeEnum("aiserver.v1.SlashEditRequest.FastApplyModelType", [
    {
        no: 0,
        name: "FAST_APPLY_MODEL_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FAST_APPLY_MODEL_TYPE_DEFAULT",
        localName: "DEFAULT"
    },
    {
        no: 2,
        name: "FAST_APPLY_MODEL_TYPE_DEEPSEEK",
        localName: "DEEPSEEK"
    },
    {
        no: 3,
        name: "FAST_APPLY_MODEL_TYPE_SONNET",
        localName: "SONNET"
    },
    {
        no: 4,
        name: "FAST_APPLY_MODEL_TYPE_OPUS_DIFF",
        localName: "OPUS_DIFF"
    },
    {
        no: 5,
        name: "FAST_APPLY_MODEL_TYPE_SMART_REWRITE",
        localName: "SMART_REWRITE"
    },
    {
        no: 6,
        name: "FAST_APPLY_MODEL_TYPE_GPT4",
        localName: "GPT4"
    },
    {
        no: 7,
        name: "FAST_APPLY_MODEL_TYPE_GPT4_NOSPEC",
        localName: "GPT4_NOSPEC"
    },
    {
        no: 8,
        name: "FAST_APPLY_MODEL_TYPE_SMART_REWRITE_NOSPEC",
        localName: "SMART_REWRITE_NOSPEC"
    },
    {
        no: 9,
        name: "FAST_APPLY_MODEL_TYPE_OPUS",
        localName: "OPUS"
    },
    {
        no: 10,
        name: "FAST_APPLY_MODEL_TYPE_HAIKU",
        localName: "HAIKU"
    },
    {
        no: 11,
        name: "FAST_APPLY_MODEL_TYPE_GPT4O_NOSPEC",
        localName: "GPT4O_NOSPEC"
    },
    {
        no: 12,
        name: "FAST_APPLY_MODEL_TYPE_GPT4O_DIFF",
        localName: "GPT4O_DIFF"
    },
    {
        no: 13,
        name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_REWRITE",
        localName: "CODESTRAL_REWRITE"
    },
    {
        no: 14,
        name: "FAST_APPLY_MODEL_TYPE_DEEPSEEK_33B",
        localName: "DEEPSEEK_33B"
    },
    {
        no: 15,
        name: "FAST_APPLY_MODEL_TYPE_SONNET_35_DIFF",
        localName: "SONNET_35_DIFF"
    },
    {
        no: 16,
        name: "FAST_APPLY_MODEL_TYPE_SONNET_35_REWRITE",
        localName: "SONNET_35_REWRITE"
    },
    {
        no: 17,
        name: "FAST_APPLY_MODEL_TYPE_PROMPTED_DEEPSEEK_V2",
        localName: "PROMPTED_DEEPSEEK_V2"
    },
    {
        no: 18,
        name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_REWRITE_OLD",
        localName: "CODESTRAL_REWRITE_OLD"
    },
    {
        no: 19,
        name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_REWRITE_FP16",
        localName: "CODESTRAL_REWRITE_FP16"
    },
    {
        no: 20,
        name: "FAST_APPLY_MODEL_TYPE_DEEPSEEK_33B_V2",
        localName: "DEEPSEEK_33B_V2"
    },
    {
        no: 21,
        name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_V4",
        localName: "CODESTRAL_V4"
    },
    {
        no: 22,
        name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_V5",
        localName: "CODESTRAL_V5"
    },
    {
        no: 23,
        name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_V6",
        localName: "CODESTRAL_V6"
    },
    {
        no: 24,
        name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_V7",
        localName: "CODESTRAL_V7"
    }
]), J2d = x.makeMessageType("aiserver.v1.SlashEditResponse", ()=>[
        {
            no: 1,
            name: "cmd_k_response",
            kind: "message",
            T: oii
        }
    ]), BBo = x.makeMessageType("aiserver.v1.SlashEditPreviousEdit", ()=>[
        {
            no: 1,
            name: "original_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "new_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "range",
            kind: "message",
            T: aW
        }
    ]), ePd = x.makeMessageType("aiserver.v1.SlashEditFollowUpWithPreviousEditsRequest", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 3,
            name: "previous_edits",
            kind: "message",
            T: BBo,
            repeated: !0
        }
    ]), tPd = x.makeMessageType("aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse", ()=>[
        {
            no: 1,
            name: "chat",
            kind: "message",
            T: nPd,
            oneof: "response"
        },
        {
            no: 2,
            name: "edits_to_update",
            kind: "message",
            T: iPd,
            oneof: "response"
        }
    ]), nPd = x.makeMessageType("aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse.Chat", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamSlashEditFollowUpWithPreviousEditsResponse_Chat"
}), iPd = x.makeMessageType("aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse.EditsToUpdate", ()=>[
        {
            no: 1,
            name: "previous_edits",
            kind: "message",
            T: BBo,
            repeated: !0
        }
    ], {
    localName: "StreamSlashEditFollowUpWithPreviousEditsResponse_EditsToUpdate"
}), rPd = x.makeMessageType("aiserver.v1.StreamFastEditRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: Cx,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 5,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 9,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 10,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 11,
            name: "linter_errors",
            kind: "message",
            T: ZF
        }
    ]), sPd = x.makeMessageType("aiserver.v1.StreamFastEditResponse", ()=>[
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "replace_num_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "edit_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "done",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "new_line",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "reset_new_lines",
            kind: "scalar",
            T: 8
        }
    ]), tkr = x.makeMessageType("aiserver.v1.StreamEditRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: Cx,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 5,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 9,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 10,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 11,
            name: "linter_errors",
            kind: "message",
            T: ZF
        },
        {
            no: 12,
            name: "prompt_code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 14,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "cmd_k_debug_info",
            kind: "message",
            T: kAe
        },
        {
            no: 15,
            name: "fast_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 16,
            name: "original_request",
            kind: "message",
            T: tkr
        },
        {
            no: 17,
            name: "images",
            kind: "message",
            T: Hke,
            repeated: !0
        },
        {
            no: 18,
            name: "links",
            kind: "message",
            T: Lbr,
            repeated: !0
        },
        {
            no: 19,
            name: "rules",
            kind: "message",
            T: R$e,
            repeated: !0
        }
    ]), oPd = x.makeMessageType("aiserver.v1.PreloadEditRequest", ()=>[
        {
            no: 1,
            name: "req",
            kind: "message",
            T: tkr
        }
    ]), aPd = x.makeMessageType("aiserver.v1.PreloadEditResponse", []), lPd = x.makeMessageType("aiserver.v1.StreamAiLintBugRequest", ()=>[
        {
            no: 1,
            name: "chunks_to_analyze",
            kind: "message",
            T: UBo,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 5,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 10,
            name: "dismissed_bugs",
            kind: "message",
            T: lii,
            repeated: !0
        },
        {
            no: 11,
            name: "active_bugs",
            kind: "message",
            T: lii,
            repeated: !0
        },
        {
            no: 12,
            name: "lint_rules",
            kind: "message",
            T: sId,
            repeated: !0
        },
        {
            no: 14,
            name: "clients",
            kind: "message",
            T: cPd,
            repeated: !0
        },
        {
            no: 17,
            name: "force_enable_discriminators",
            kind: "enum",
            T: x.getEnumType($1r),
            repeated: !0
        },
        {
            no: 18,
            name: "force_disable_discriminators",
            kind: "enum",
            T: x.getEnumType($1r),
            repeated: !0
        },
        {
            no: 19,
            name: "force_enable_generators",
            kind: "enum",
            T: x.getEnumType(H1r),
            repeated: !0
        },
        {
            no: 20,
            name: "force_disable_generators",
            kind: "enum",
            T: x.getEnumType(H1r),
            repeated: !0
        },
        {
            no: 21,
            name: "version",
            kind: "scalar",
            T: 5
        },
        {
            no: 15,
            name: "discriminator_options",
            kind: "message",
            T: uPd,
            opt: !0
        },
        {
            no: 16,
            name: "debug_mode",
            kind: "scalar",
            T: 8
        }
    ]), UBo = x.makeMessageType("aiserver.v1.StreamAiLintBugRequest.CodeChunk", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "context_lines_before",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "context_lines_after",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "StreamAiLintBugRequest_CodeChunk"
}), cPd = x.makeMessageType("aiserver.v1.StreamAiLintBugRequest.CodeChunkList", ()=>[
        {
            no: 13,
            name: "chunks",
            kind: "message",
            T: UBo,
            repeated: !0
        },
        {
            no: 14,
            name: "referred_start_lines",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 15,
            name: "referred_end_lines",
            kind: "scalar",
            T: 5,
            repeated: !0
        }
    ], {
    localName: "StreamAiLintBugRequest_CodeChunkList"
}), uPd = x.makeMessageType("aiserver.v1.StreamAiLintBugRequest.DiscriminatorOptions", ()=>[
        {
            no: 1,
            name: "specific_rules",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "compile_errors",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "change_behavior",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "match_code",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "relevance",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "user_awareness",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "StreamAiLintBugRequest_DiscriminatorOptions"
}), dPd = x.makeMessageType("aiserver.v1.StreamAiLintBugResponse", ()=>[
        {
            no: 1,
            name: "bug",
            kind: "message",
            T: lii,
            oneof: "response"
        },
        {
            no: 2,
            name: "background_task_uuid",
            kind: "scalar",
            T: 9,
            oneof: "response"
        }
    ]), hPd = x.makeMessageType("aiserver.v1.LogUserLintReplyRequest", ()=>[
        {
            no: 1,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "user_action",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "debug_mode",
            kind: "scalar",
            T: 8
        }
    ]), pPd = x.makeMessageType("aiserver.v1.LogUserLintReplyResponse", []), mPd = x.makeMessageType("aiserver.v1.LogLinterExplicitUserFeedbackRequest", ()=>[
        {
            no: 1,
            name: "bug",
            kind: "message",
            T: lii
        },
        {
            no: 3,
            name: "user_feedback",
            kind: "enum",
            T: x.getEnumType(gPd)
        },
        {
            no: 4,
            name: "user_feedback_details",
            kind: "scalar",
            T: 9
        }
    ]), gPd = x.makeEnum("aiserver.v1.LogLinterExplicitUserFeedbackRequest.LinterUserFeedback", [
    {
        no: 0,
        name: "LINTER_USER_FEEDBACK_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LINTER_USER_FEEDBACK_CORRECT",
        localName: "CORRECT"
    },
    {
        no: 2,
        name: "LINTER_USER_FEEDBACK_INCORRECT",
        localName: "INCORRECT"
    },
    {
        no: 3,
        name: "LINTER_USER_FEEDBACK_OTHER",
        localName: "OTHER"
    }
]), fPd = x.makeMessageType("aiserver.v1.LogLinterExplicitUserFeedbackResponse", []), vPd = x.makeMessageType("aiserver.v1.StreamNewRuleRequest", ()=>[
        {
            no: 1,
            name: "current_rules",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "dismissed_bug",
            kind: "scalar",
            T: 9
        }
    ]), _Pd = x.makeMessageType("aiserver.v1.CursorHelpConversationMessage", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "role",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), bPd = x.makeMessageType("aiserver.v1.StreamAiCursorHelpRequest", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "message",
            T: _Pd,
            repeated: !0
        },
        {
            no: 2,
            name: "user_os",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: Mg
        }
    ]), yPd = x.makeMessageType("aiserver.v1.StreamAiCursorHelpResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "actions",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), SPd = x.makeMessageType("aiserver.v1.StreamTerminalAutocompleteRequest", ()=>[
        {
            no: 1,
            name: "current_command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "command_history",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "file_diff_histories",
            kind: "message",
            T: zte,
            repeated: !0
        },
        {
            no: 5,
            name: "git_diff",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "commit_history",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "past_results",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), jBo = x.makeMessageType("aiserver.v1.PseudocodeTarget", ()=>[
        {
            no: 1,
            name: "range",
            kind: "message",
            T: m7
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), kPd = x.makeMessageType("aiserver.v1.StreamPseudocodeGeneratorRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 2,
            name: "target",
            kind: "message",
            T: jBo
        }
    ]), wPd = x.makeMessageType("aiserver.v1.StreamPseudocodeGeneratorResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), CPd = x.makeMessageType("aiserver.v1.StreamPseudocodeMapperRequest", ()=>[
        {
            no: 2,
            name: "target",
            kind: "message",
            T: jBo
        },
        {
            no: 1,
            name: "pseudocode",
            kind: "scalar",
            T: 9
        }
    ]), TPd = x.makeMessageType("aiserver.v1.StreamPseudocodeMapperResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), EPd = x.makeMessageType("aiserver.v1.StreamTerminalAutocompleteResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "done_stream",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), IPd = x.makeMessageType("aiserver.v1.DebugInfo", ()=>[
        {
            no: 1,
            name: "breakpoint",
            kind: "message",
            T: PPd
        },
        {
            no: 2,
            name: "call_stack",
            kind: "message",
            T: RPd,
            repeated: !0
        },
        {
            no: 3,
            name: "history",
            kind: "message",
            T: rL,
            repeated: !0
        }
    ]), xPd = x.makeMessageType("aiserver.v1.DebugInfo.Variable", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "type",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "DebugInfo_Variable"
}), APd = x.makeMessageType("aiserver.v1.DebugInfo.Scope", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "variables",
            kind: "message",
            T: xPd,
            repeated: !0
        }
    ], {
    localName: "DebugInfo_Scope"
}), RPd = x.makeMessageType("aiserver.v1.DebugInfo.CallStackFrame", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "function_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "scopes",
            kind: "message",
            T: APd,
            repeated: !0
        }
    ], {
    localName: "DebugInfo_CallStackFrame"
}), PPd = x.makeMessageType("aiserver.v1.DebugInfo.Breakpoint", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "lines_before_breakpoint",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "lines_after_breakpoint",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "exception_info",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "DebugInfo_Breakpoint"
}), vbt = x.makeMessageType("aiserver.v1.GetChatRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: Cx,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 5,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 7,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 8,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 9,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "linter_errors",
            kind: "message",
            T: ZF
        },
        {
            no: 11,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "summary_up_until_index",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 13,
            name: "allow_long_file_scan",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "is_bash",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 15,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 16,
            name: "can_handle_filenames_after_language_ids",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 17,
            name: "use_web",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "quotes",
            kind: "message",
            T: Nbr,
            repeated: !0
        },
        {
            no: 19,
            name: "debug_info",
            kind: "message",
            T: IPd,
            opt: !0
        },
        {
            no: 20,
            name: "workspace_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 21,
            name: "external_links",
            kind: "message",
            T: Ehd,
            repeated: !0
        },
        {
            no: 23,
            name: "commit_notes",
            kind: "message",
            T: gDo,
            repeated: !0
        },
        {
            no: 22,
            name: "long_context_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 24,
            name: "is_eval",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 26,
            name: "desired_max_tokens",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 25,
            name: "context_ast",
            kind: "message",
            T: eBo
        },
        {
            no: 27,
            name: "is_composer",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 28,
            name: "runnable_code_blocks",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 29,
            name: "should_cache",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 30,
            name: "allow_model_fallbacks",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 31,
            name: "number_of_times_shown_fallback_model_warning",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), MPd = x.makeMessageType("aiserver.v1.PotentialLocsInitialQueriesRequest", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), DPd = x.makeMessageType("aiserver.v1.PotentialLocsInitialQueriesResponse", ()=>[
        {
            no: 1,
            name: "hyde_query",
            kind: "scalar",
            T: 9
        }
    ]), NPd = x.makeMessageType("aiserver.v1.PotentialLocsUnderneathRequest", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ranges",
            kind: "message",
            T: $ke,
            repeated: !0
        },
        {
            no: 3,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), LPd = x.makeMessageType("aiserver.v1.PotentialLocsUnderneathResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), OPd = x.makeMessageType("aiserver.v1.PotentialLocsRequest", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), FPd = x.makeMessageType("aiserver.v1.PotentialLocsResponse", ()=>[
        {
            no: 1,
            name: "potential_loc",
            kind: "scalar",
            T: 9
        }
    ]), nkr = x.makeMessageType("aiserver.v1.GetComposerChatRequest", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 2,
            name: "allow_long_file_scan",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 4,
            name: "can_handle_filenames_after_language_ids",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 6,
            name: "linter_errors",
            kind: "message",
            T: ZF
        },
        {
            no: 7,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 8,
            name: "use_web",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "external_links",
            kind: "message",
            T: Rpn,
            repeated: !0
        },
        {
            no: 10,
            name: "project_context",
            kind: "message",
            T: wy,
            opt: !0
        },
        {
            no: 11,
            name: "diffs_for_compressing_files",
            kind: "message",
            T: BPd,
            repeated: !0
        },
        {
            no: 12,
            name: "compress_edits",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "should_cache",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "multi_file_linter_errors",
            kind: "message",
            T: ZF,
            repeated: !0
        },
        {
            no: 15,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 16,
            name: "recent_edits",
            kind: "message",
            T: UPd,
            opt: !0
        },
        {
            no: 17,
            name: "use_reference_composer_diff_prompt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 18,
            name: "file_diff_histories",
            kind: "message",
            T: jni,
            repeated: !0
        },
        {
            no: 19,
            name: "use_new_compression_scheme",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 20,
            name: "additional_ranked_context",
            kind: "message",
            T: n1r,
            repeated: !0
        },
        {
            no: 21,
            name: "quotes",
            kind: "message",
            T: Nbr,
            repeated: !0
        },
        {
            no: 22,
            name: "willing_to_pay_extra_for_speed",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 23,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 24,
            name: "use_unified_chat_prompt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 25,
            name: "use_full_inputs_context",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 26,
            name: "is_resume",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 27,
            name: "context_bank_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 28,
            name: "context_bank_version",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 31,
            name: "context_bank_encryption_key",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 29,
            name: "uses_codebase_results",
            kind: "message",
            T: dii
        }
    ]), BPd = x.makeMessageType("aiserver.v1.GetComposerChatRequest.RedDiff", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "red_ranges",
            kind: "message",
            T: $ke,
            repeated: !0
        },
        {
            no: 3,
            name: "red_ranges_reversed",
            kind: "message",
            T: $ke,
            repeated: !0
        },
        {
            no: 4,
            name: "start_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "end_hash",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GetComposerChatRequest_RedDiff"
}), UPd = x.makeMessageType("aiserver.v1.GetComposerChatRequest.RecentEdits", ()=>[
        {
            no: 1,
            name: "code_block_info",
            kind: "message",
            T: jPd,
            repeated: !0
        },
        {
            no: 2,
            name: "final_file_values",
            kind: "message",
            T: $Pd,
            repeated: !0
        },
        {
            no: 3,
            name: "edits_belong_to_composer_generation_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "GetComposerChatRequest_RecentEdits"
}), jPd = x.makeMessageType("aiserver.v1.GetComposerChatRequest.RecentEdits.CodeBlockInfo", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content_before",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "content_after",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "generation_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "version",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "GetComposerChatRequest_RecentEdits_CodeBlockInfo"
}), $Pd = x.makeMessageType("aiserver.v1.GetComposerChatRequest.RecentEdits.FileInfo", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GetComposerChatRequest_RecentEdits_FileInfo"
}), HPd = x.makeMessageType("aiserver.v1.CheckUsageBasedPriceRequest", ()=>[
        {
            no: 1,
            name: "usage_event_details",
            kind: "message",
            T: G1r
        }
    ]), WPd = x.makeMessageType("aiserver.v1.CheckUsageBasedPriceResponse", ()=>[
        {
            no: 1,
            name: "markdown_response",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cents",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "price_id",
            kind: "scalar",
            T: 9
        }
    ]), $Bo = x.makeMessageType("aiserver.v1.CheckQueuePositionRequest", ()=>[
        {
            no: 1,
            name: "orig_request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 3,
            name: "usage_uuid",
            kind: "scalar",
            T: 9
        }
    ]), GPd = x.makeMessageType("aiserver.v1.CheckQueuePositionResponse", ()=>[
        {
            no: 1,
            name: "position",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "seconds_left_to_wait",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "new_queue_position",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "hit_hard_limit",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "could_enable_usage_based_pricing_to_skip",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "usage_event_details",
            kind: "message",
            T: G1r
        },
        {
            no: 6,
            name: "custom_link",
            kind: "message",
            T: qPd
        },
        {
            no: 8,
            name: "model_for_slow_pool_nudge_data",
            kind: "message",
            T: zPd,
            opt: !0
        }
    ]), qPd = x.makeMessageType("aiserver.v1.CheckQueuePositionResponse.CustomLink", ()=>[
        {
            no: 1,
            name: "address",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "CheckQueuePositionResponse_CustomLink"
}), zPd = x.makeMessageType("aiserver.v1.CheckQueuePositionResponse.ModelForSlowPoolNudgeData", ()=>[
        {
            no: 1,
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "CheckQueuePositionResponse_ModelForSlowPoolNudgeData"
}), VPd = x.makeMessageType("aiserver.v1.IsolatedTreesitterRequest", ()=>[
        {
            no: 1,
            name: "file_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "language_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "command_id",
            kind: "scalar",
            T: 9
        }
    ]), KPd = x.makeMessageType("aiserver.v1.IsolatedTreesitterResponse", ()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: YPd,
            repeated: !0
        }
    ]), HBo = x.makeMessageType("aiserver.v1.IsolatedTreesitterResponse.TreeSitterPosition", ()=>[
        {
            no: 1,
            name: "row",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "column",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "IsolatedTreesitterResponse_TreeSitterPosition"
}), YPd = x.makeMessageType("aiserver.v1.IsolatedTreesitterResponse.TreesitterSymbolNameItem", ()=>[
        {
            no: 1,
            name: "symbol_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_position",
            kind: "message",
            T: HBo,
            opt: !0
        },
        {
            no: 3,
            name: "end_position",
            kind: "message",
            T: HBo,
            opt: !0
        }
    ], {
    localName: "IsolatedTreesitterResponse_TreesitterSymbolNameItem"
}), WBo = x.makeMessageType("aiserver.v1.GetSimplePromptRequest", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "answer_placeholder",
            kind: "scalar",
            T: 9
        }
    ]), XPd = x.makeMessageType("aiserver.v1.GetSimplePromptResponse", ()=>[
        {
            no: 1,
            name: "result",
            kind: "scalar",
            T: 9
        }
    ]), GBo = x.makeMessageType("aiserver.v1.SuggestQuickActionsRequest", ()=>[
        {
            no: 1,
            name: "candidates",
            kind: "message",
            T: qBo,
            repeated: !0
        },
        {
            no: 2,
            name: "last_user_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "last_assistant_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "max_suggestions",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "recently_used_skill_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "include_skills",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "include_text",
            kind: "scalar",
            T: 8
        }
    ]), qBo = x.makeMessageType("aiserver.v1.QuickActionCandidate", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ]), ZPd = x.makeMessageType("aiserver.v1.SuggestQuickActionsResponse", ()=>[
        {
            no: 1,
            name: "suggestions",
            kind: "message",
            T: QPd,
            repeated: !0
        }
    ]), QPd = x.makeMessageType("aiserver.v1.SuggestedQuickAction", ()=>[
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
            name: "type",
            kind: "scalar",
            T: 9
        }
    ]), JPd = x.makeMessageType("aiserver.v1.GetPassthroughPromptRequest", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_name",
            kind: "scalar",
            T: 9
        }
    ]), eMd = x.makeMessageType("aiserver.v1.GetPassthroughPromptResponse", ()=>[
        {
            no: 1,
            name: "result",
            kind: "scalar",
            T: 9
        }
    ]), tMd = x.makeMessageType("aiserver.v1.CheckLongFilesFitResponse", ()=>[
        {
            no: 1,
            name: "did_fit",
            kind: "scalar",
            T: 8
        }
    ]), nMd = x.makeMessageType("aiserver.v1.GetEvaluationPromptRequest", ()=>[
        {
            no: 1,
            name: "prompt_type",
            kind: "enum",
            T: x.getEnumType(iMd)
        },
        {
            no: 2,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 3,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "bucket_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "query_strategy",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "token_limit",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "reranking_strategy",
            kind: "enum",
            T: x.getEnumType(rMd)
        }
    ]), iMd = x.makeEnum("aiserver.v1.GetEvaluationPromptRequest.EvaluationPromptType", [
    {
        no: 0,
        name: "EVALUATION_PROMPT_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "EVALUATION_PROMPT_TYPE_GENERATE",
        localName: "GENERATE"
    },
    {
        no: 2,
        name: "EVALUATION_PROMPT_TYPE_CHAT",
        localName: "CHAT"
    }
]), rMd = x.makeEnum("aiserver.v1.GetEvaluationPromptRequest.RerankingStrategy", [
    {
        no: 0,
        name: "RERANKING_STRATEGY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RERANKING_STRATEGY_DISTANCE_ONLY",
        localName: "DISTANCE_ONLY"
    },
    {
        no: 2,
        name: "RERANKING_STRATEGY_GPT4_RELEVANCE",
        localName: "GPT4_RELEVANCE"
    }
]), sMd = x.makeMessageType("aiserver.v1.GetEvaluationPromptResponse", ()=>[
        {
            no: 1,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "token_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "estimated_token_count",
            kind: "scalar",
            T: 5
        }
    ]), oMd = x.makeMessageType("aiserver.v1.GetChatTitleRequest", ()=>[
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        }
    ]), aMd = x.makeMessageType("aiserver.v1.GetChatTitleResponse", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        }
    ]), lMd = x.makeMessageType("aiserver.v1.ServerTimingInfo", ()=>[
        {
            no: 1,
            name: "server_start_time",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "server_first_token_time",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "server_request_sent_time",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "server_end_time",
            kind: "scalar",
            T: 1
        }
    ]), V$e = x.makeMessageType("aiserver.v1.StreamChatResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 22,
            name: "server_bubble_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "debugging_only_chat_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "debugging_only_token_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "document_citation",
            kind: "message",
            T: Uni
        },
        {
            no: 5,
            name: "filled_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "is_big_file",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "intermediate_text",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "is_using_slow_request",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "chunk_identity",
            kind: "message",
            T: uMd,
            opt: !0
        },
        {
            no: 9,
            name: "docs_reference",
            kind: "message",
            T: Fmn,
            opt: !0
        },
        {
            no: 11,
            name: "web_citation",
            kind: "message",
            T: i1r,
            opt: !0
        },
        {
            no: 12,
            name: "status_updates",
            kind: "message",
            T: o1r,
            opt: !0
        },
        {
            no: 13,
            name: "timing_info",
            kind: "message",
            T: lMd,
            opt: !0
        },
        {
            no: 14,
            name: "symbol_link",
            kind: "message",
            T: jmn,
            opt: !0
        },
        {
            no: 15,
            name: "file_link",
            kind: "message",
            T: $ni,
            opt: !0
        },
        {
            no: 16,
            name: "conversation_summary",
            kind: "message",
            T: Fve,
            opt: !0
        },
        {
            no: 17,
            name: "service_status_update",
            kind: "message",
            T: Umn,
            opt: !0
        },
        {
            no: 18,
            name: "used_code",
            kind: "message",
            T: cMd,
            opt: !0
        },
        {
            no: 26,
            name: "stop_using_dsv3_agentic_model",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 27,
            name: "usage_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), cMd = x.makeMessageType("aiserver.v1.StreamChatResponse.UsedCode", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: Q9,
            repeated: !0
        }
    ], {
    localName: "StreamChatResponse_UsedCode"
}), uMd = x.makeMessageType("aiserver.v1.StreamChatResponse.ChunkIdentity", ()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "chunk_type",
            kind: "enum",
            T: x.getEnumType(Bni)
        }
    ], {
    localName: "StreamChatResponse_ChunkIdentity"
}), dMd = x.makeMessageType("aiserver.v1.WarmComposerCacheResponse", ()=>[
        {
            no: 1,
            name: "did_warm_cache",
            kind: "scalar",
            T: 8
        }
    ]), hMd = x.makeMessageType("aiserver.v1.WarmChatCacheRequest", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: vbt
        }
    ]), pMd = x.makeMessageType("aiserver.v1.WarmChatCacheResponse", ()=>[
        {
            no: 1,
            name: "did_warm_cache",
            kind: "scalar",
            T: 8
        }
    ]), mMd = x.makeMessageType("aiserver.v1.SurroundingLines", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), gMd = x.makeMessageType("aiserver.v1.GetCompletionRequest", ()=>[
        {
            no: 1,
            name: "file_identifier",
            kind: "message",
            T: vMd
        },
        {
            no: 2,
            name: "cursor_position",
            kind: "message",
            T: oW
        },
        {
            no: 3,
            name: "surrounding_lines",
            kind: "message",
            T: mMd
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 5,
            name: "suggestions_from_editor",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), fMd = x.makeMessageType("aiserver.v1.GetCompletionResponse", ()=>[
        {
            no: 1,
            name: "completion",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "debugging_only_completion_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), vMd = x.makeMessageType("aiserver.v1.UniqueFileIdentifier", ()=>[
        {
            no: 1,
            name: "project_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "language_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), _Md = x.makeMessageType("aiserver.v1.GetUserInfoRequest", []), bMd = x.makeMessageType("aiserver.v1.UsageData", ()=>[
        {
            no: 2,
            name: "gpt4_requests",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "gpt4_max_requests",
            kind: "scalar",
            T: 5
        }
    ]), yMd = x.makeMessageType("aiserver.v1.GetUserInfoResponse", ()=>[
        {
            no: 1,
            name: "user_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "jupyter_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "usage",
            kind: "message",
            T: bMd
        }
    ]), SMd = x.makeMessageType("aiserver.v1.DoThisForMeCheckRequest", ()=>[
        {
            no: 1,
            name: "generation_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "completion",
            kind: "scalar",
            T: 9
        }
    ]), zBo = x.makeMessageType("aiserver.v1.DoThisForMeCheckResponse", ()=>[
        {
            no: 1,
            name: "skip_action",
            kind: "message",
            T: kMd,
            oneof: "action"
        },
        {
            no: 2,
            name: "edit_action",
            kind: "message",
            T: wMd,
            oneof: "action"
        },
        {
            no: 3,
            name: "create_action",
            kind: "message",
            T: CMd,
            oneof: "action"
        },
        {
            no: 4,
            name: "run_action",
            kind: "message",
            T: TMd,
            oneof: "action"
        },
        {
            no: 5,
            name: "reasoning",
            kind: "scalar",
            T: 9
        }
    ]), kMd = x.makeMessageType("aiserver.v1.DoThisForMeCheckResponse.SkipAction", [], {
    localName: "DoThisForMeCheckResponse_SkipAction"
}), wMd = x.makeMessageType("aiserver.v1.DoThisForMeCheckResponse.EditAction", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "DoThisForMeCheckResponse_EditAction"
}), CMd = x.makeMessageType("aiserver.v1.DoThisForMeCheckResponse.CreateAction", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "DoThisForMeCheckResponse_CreateAction"
}), TMd = x.makeMessageType("aiserver.v1.DoThisForMeCheckResponse.RunAction", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "DoThisForMeCheckResponse_RunAction"
}), EMd = x.makeMessageType("aiserver.v1.DoThisForMeRequest", ()=>[
        {
            no: 1,
            name: "generation_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "completion",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "action",
            kind: "message",
            T: zBo
        }
    ]), IMd = x.makeMessageType("aiserver.v1.DoThisForMeResponse", ()=>[
        {
            no: 1,
            name: "update_status",
            kind: "message",
            T: xMd,
            oneof: "event"
        }
    ]), xMd = x.makeMessageType("aiserver.v1.DoThisForMeResponse.UpdateStatus", ()=>[
        {
            no: 1,
            name: "status",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "DoThisForMeResponse_UpdateStatus"
}), AMd = x.makeMessageType("aiserver.v1.DoThisForMeResponseWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: IMd,
            oneof: "response"
        },
        {
            no: 2,
            name: "background_task_uuid",
            kind: "scalar",
            T: 9,
            oneof: "response"
        }
    ]), RMd = x.makeMessageType("aiserver.v1.StreamChatToolformerContinueRequest", ()=>[
        {
            no: 1,
            name: "toolformer_session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_result",
            kind: "message",
            T: uti
        }
    ]), VBo = x.makeMessageType("aiserver.v1.StreamChatToolformerResponse", ()=>[
        {
            no: 1,
            name: "toolformer_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "output",
            kind: "message",
            T: PMd,
            oneof: "response_type"
        },
        {
            no: 3,
            name: "tool_action",
            kind: "message",
            T: DMd,
            oneof: "response_type"
        },
        {
            no: 4,
            name: "thought",
            kind: "message",
            T: MMd,
            oneof: "response_type"
        }
    ]), PMd = x.makeMessageType("aiserver.v1.StreamChatToolformerResponse.Output", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamChatToolformerResponse_Output"
}), MMd = x.makeMessageType("aiserver.v1.StreamChatToolformerResponse.Thought", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamChatToolformerResponse_Thought"
}), DMd = x.makeMessageType("aiserver.v1.StreamChatToolformerResponse.ToolAction", ()=>[
        {
            no: 1,
            name: "user_facing_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "raw_model_output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: gyr
        },
        {
            no: 4,
            name: "more_to_come",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "StreamChatToolformerResponse_ToolAction"
}), KBo = x.makeMessageType("aiserver.v1.TaskInstruction", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "attached_code_chunks",
            kind: "message",
            T: NMd,
            repeated: !0
        },
        {
            no: 3,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 4,
            name: "repositories",
            kind: "message",
            T: Cx,
            repeated: !0
        },
        {
            no: 5,
            name: "explicit_context",
            kind: "message",
            T: Z9
        }
    ]), NMd = x.makeMessageType("aiserver.v1.TaskInstruction.CodeChunk", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "TaskInstruction_CodeChunk"
}), YBo = x.makeMessageType("aiserver.v1.TaskUserMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "attached_code_chunks",
            kind: "message",
            T: LMd,
            repeated: !0
        }
    ]), LMd = x.makeMessageType("aiserver.v1.TaskUserMessage.CodeChunk", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "TaskUserMessage_CodeChunk"
}), OMd = x.makeMessageType("aiserver.v1.PushAiThoughtRequest", ()=>[
        {
            no: 1,
            name: "thought",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cmd_k_debug_info",
            kind: "message",
            T: kAe
        },
        {
            no: 3,
            name: "automated",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "metadata",
            kind: "message",
            T: FMd,
            opt: !0
        }
    ]), FMd = x.makeMessageType("aiserver.v1.PushAiThoughtRequest.Metadata", ()=>[
        {
            no: 1,
            name: "accepted_hallucinated_function_event",
            kind: "message",
            T: BMd,
            oneof: "event"
        }
    ], {
    localName: "PushAiThoughtRequest_Metadata"
}), BMd = x.makeMessageType("aiserver.v1.PushAiThoughtRequest.Metadata.AcceptedHallucinatedFunctionEvent", ()=>[
        {
            no: 1,
            name: "implementation_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "hallucinated_function_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "implementation",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "source",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "implementation_reqid",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "plan_reqid",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "reflection_reqid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "PushAiThoughtRequest_Metadata_AcceptedHallucinatedFunctionEvent"
}), UMd = x.makeMessageType("aiserver.v1.PushAiThoughtResponse", []), jMd = x.makeMessageType("aiserver.v1.CheckDoableAsTaskRequest", ()=>[
        {
            no: 1,
            name: "model_output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: Mg
        }
    ]), $Md = x.makeMessageType("aiserver.v1.CheckDoableAsTaskResponse", ()=>[
        {
            no: 1,
            name: "doable_as_task",
            kind: "scalar",
            T: 8
        }
    ]), HMd = x.makeMessageType("aiserver.v1.InterfaceAgentInitRequest", ()=>[
        {
            no: 1,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 2,
            name: "debugging_only_live_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "interface_agent_client_state",
            kind: "message",
            T: sBo
        }
    ]), WMd = x.makeMessageType("aiserver.v1.InterfaceAgentInitResponse", ()=>[
        {
            no: 1,
            name: "task_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "human_readable_title",
            kind: "scalar",
            T: 9
        }
    ]), GMd = x.makeMessageType("aiserver.v1.StreamInterfaceAgentStatusRequest", ()=>[
        {
            no: 1,
            name: "task_uuid",
            kind: "scalar",
            T: 9
        }
    ]), qMd = x.makeMessageType("aiserver.v1.StreamInterfaceAgentStatusResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "message",
            T: oBo
        }
    ]), zMd = x.makeMessageType("aiserver.v1.TaskGetInterfaceAgentStatusRequest", ()=>[
        {
            no: 1,
            name: "interface_agent_client_state",
            kind: "message",
            T: sBo
        }
    ]), VMd = x.makeMessageType("aiserver.v1.TaskGetInterfaceAgentStatusResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "message",
            T: oBo
        }
    ]), KMd = x.makeMessageType("aiserver.v1.TaskGetInterfaceAgentStatusResponseWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: VMd,
            oneof: "response"
        },
        {
            no: 2,
            name: "background_task_uuid",
            kind: "scalar",
            T: 9,
            oneof: "response"
        }
    ]), YMd = x.makeMessageType("aiserver.v1.TaskInitRequest", ()=>[
        {
            no: 1,
            name: "instruction",
            kind: "message",
            T: KBo
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 3,
            name: "debugging_only_live_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "engine_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), XMd = x.makeMessageType("aiserver.v1.TaskInitResponse", ()=>[
        {
            no: 1,
            name: "task_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "human_readable_title",
            kind: "scalar",
            T: 9
        }
    ]), ZMd = x.makeMessageType("aiserver.v1.TaskStreamLogRequest", ()=>[
        {
            no: 1,
            name: "task_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_sequence_number",
            kind: "scalar",
            T: 5
        }
    ]), QMd = x.makeMessageType("aiserver.v1.TaskLogOutput", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), JMd = x.makeMessageType("aiserver.v1.TaskLogToolAction", ()=>[
        {
            no: 1,
            name: "user_facing_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "raw_model_output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: gyr
        }
    ]), eDd = x.makeMessageType("aiserver.v1.TaskLogThought", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), tDd = x.makeMessageType("aiserver.v1.TaskLogToolResult", ()=>[
        {
            no: 1,
            name: "tool_result",
            kind: "message",
            T: uti
        },
        {
            no: 2,
            name: "action_sequence_number",
            kind: "scalar",
            T: 5
        }
    ]), nDd = x.makeMessageType("aiserver.v1.TaskLogItem", ()=>[
        {
            no: 1,
            name: "sequence_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "is_not_done",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "output",
            kind: "message",
            T: QMd,
            oneof: "log_item"
        },
        {
            no: 4,
            name: "tool_action",
            kind: "message",
            T: JMd,
            oneof: "log_item"
        },
        {
            no: 5,
            name: "thought",
            kind: "message",
            T: eDd,
            oneof: "log_item"
        },
        {
            no: 6,
            name: "user_message",
            kind: "message",
            T: YBo,
            oneof: "log_item"
        },
        {
            no: 7,
            name: "instruction",
            kind: "message",
            T: KBo,
            oneof: "log_item"
        },
        {
            no: 8,
            name: "tool_result",
            kind: "message",
            T: tDd,
            oneof: "log_item"
        }
    ]), iDd = x.makeMessageType("aiserver.v1.TaskInfoRequest", ()=>[
        {
            no: 1,
            name: "task_uuid",
            kind: "scalar",
            T: 9
        }
    ]), rDd = x.makeMessageType("aiserver.v1.TaskPauseRequest", ()=>[
        {
            no: 1,
            name: "task_uuid",
            kind: "scalar",
            T: 9
        }
    ]), sDd = x.makeMessageType("aiserver.v1.TaskPauseResponse", []), XBo = x.makeMessageType("aiserver.v1.TaskInfoResponse", ()=>[
        {
            no: 1,
            name: "human_readable_title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "task_status",
            kind: "enum",
            T: x.getEnumType(cBo)
        },
        {
            no: 3,
            name: "last_log_sequence_number",
            kind: "scalar",
            T: 5
        }
    ]), oDd = x.makeMessageType("aiserver.v1.TaskStreamLogResponse", ()=>[
        {
            no: 1,
            name: "streamed_log_item",
            kind: "message",
            T: nDd,
            oneof: "response"
        },
        {
            no: 2,
            name: "info_update",
            kind: "message",
            T: aDd,
            oneof: "response"
        },
        {
            no: 3,
            name: "initial_task_info",
            kind: "message",
            T: XBo,
            oneof: "response"
        }
    ]), aDd = x.makeMessageType("aiserver.v1.TaskStreamLogResponse.InfoUpdate", ()=>[
        {
            no: 1,
            name: "human_readable_title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "task_status",
            kind: "enum",
            T: x.getEnumType(cBo),
            opt: !0
        }
    ], {
    localName: "TaskStreamLogResponse_InfoUpdate"
}), lDd = x.makeMessageType("aiserver.v1.TaskProvideResultRequest", ()=>[
        {
            no: 1,
            name: "task_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "action_sequence_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "tool_result",
            kind: "message",
            T: uti
        }
    ]), cDd = x.makeMessageType("aiserver.v1.TaskProvideResultResponse", []), uDd = x.makeMessageType("aiserver.v1.TaskSendMessageRequest", ()=>[
        {
            no: 1,
            name: "task_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "user_message",
            kind: "message",
            T: YBo
        },
        {
            no: 3,
            name: "wants_attention_right_now",
            kind: "scalar",
            T: 8
        }
    ]), dDd = x.makeMessageType("aiserver.v1.TaskSendMessageResponse", []), hDd = x.makeMessageType("aiserver.v1.ReportFeedbackRequest", ()=>[
        {
            no: 1,
            name: "feedback",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "feedback_type",
            kind: "enum",
            T: x.getEnumType(pDd)
        }
    ]), pDd = x.makeEnum("aiserver.v1.ReportFeedbackRequest.FeedbackType", [
    {
        no: 0,
        name: "FEEDBACK_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FEEDBACK_TYPE_LOW_PRIORITY",
        localName: "LOW_PRIORITY"
    },
    {
        no: 2,
        name: "FEEDBACK_TYPE_HIGH_PRIORITY",
        localName: "HIGH_PRIORITY"
    }
]), mDd = x.makeMessageType("aiserver.v1.ReportFeedbackResponse", []), ZBo = x.makeMessageType("aiserver.v1.LogFile", ()=>[
        {
            no: 1,
            name: "relative_path_to_cursor_folder",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        }
    ]), QBo = x.makeMessageType("aiserver.v1.BugReportScreenshot", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]), gDd = x.makeMessageType("aiserver.v1.BugContext", ()=>[
        {
            no: 1,
            name: "screenshots",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 3,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 4,
            name: "logs",
            kind: "message",
            T: ZBo,
            repeated: !0
        },
        {
            no: 5,
            name: "console_logs",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "cursor_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "os",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "proto_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "failing_requst_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "connection_error_raw",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "debug_info",
            kind: "message",
            T: kAe
        },
        {
            no: 13,
            name: "connect_error_code",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 14,
            name: "error_detail_code",
            kind: "enum",
            T: x.getEnumType(wo),
            opt: !0
        },
        {
            no: 15,
            name: "error_detail_title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "error_detail_detail",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "binary_screenshots",
            kind: "message",
            T: QBo,
            repeated: !0
        },
        {
            no: 18,
            name: "agent_host_module",
            kind: "message",
            T: JBo
        }
    ]), JBo = x.makeMessageType("aiserver.v1.BugReportAgentHostModule", ()=>[
        {
            no: 1,
            name: "current",
            kind: "message",
            T: ikr
        },
        {
            no: 2,
            name: "host_lost",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "history",
            kind: "message",
            T: ikr,
            repeated: !0
        }
    ]), ikr = x.makeMessageType("aiserver.v1.BugReportAgentHostModuleServe", ()=>[
        {
            no: 1,
            name: "generation",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "source",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "channel",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "commit",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "built",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "cause",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "since_unix_ms",
            kind: "scalar",
            T: 1
        }
    ]), fDd = x.makeMessageType("aiserver.v1.ReportBugRequest", ()=>[
        {
            no: 1,
            name: "bug",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bug_type",
            kind: "enum",
            T: x.getEnumType(Zse)
        },
        {
            no: 3,
            name: "context",
            kind: "message",
            T: gDd
        },
        {
            no: 4,
            name: "contact_email",
            kind: "scalar",
            T: 9
        }
    ]), Zse = x.makeEnum("aiserver.v1.ReportBugRequest.BugType", [
    {
        no: 0,
        name: "BUG_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUG_TYPE_LOW",
        localName: "LOW"
    },
    {
        no: 2,
        name: "BUG_TYPE_MEDIUM",
        localName: "MEDIUM"
    },
    {
        no: 3,
        name: "BUG_TYPE_URGENT",
        localName: "URGENT"
    },
    {
        no: 4,
        name: "BUG_TYPE_CRASH",
        localName: "CRASH"
    },
    {
        no: 5,
        name: "BUG_TYPE_CONNECTION_ERROR",
        localName: "CONNECTION_ERROR"
    },
    {
        no: 6,
        name: "BUG_TYPE_IDEA",
        localName: "IDEA"
    },
    {
        no: 7,
        name: "BUG_TYPE_MISC_AUTOMATIC_ERROR",
        localName: "MISC_AUTOMATIC_ERROR"
    }
]), vDd = x.makeMessageType("aiserver.v1.ReportBugResponse", []), _Dd = x.makeMessageType("aiserver.v1.FixMarkersRequest", ()=>[
        {
            no: 1,
            name: "markers",
            kind: "message",
            T: bDd,
            repeated: !0
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 3,
            name: "iteration_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "sequence_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "user_instruction",
            kind: "scalar",
            T: 9
        }
    ]), bDd = x.makeMessageType("aiserver.v1.FixMarkersRequest.Marker", ()=>[
        {
            no: 1,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_inclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "related_information",
            kind: "message",
            T: yDd,
            repeated: !0
        },
        {
            no: 7,
            name: "context_ranges",
            kind: "message",
            T: SDd,
            repeated: !0
        },
        {
            no: 8,
            name: "ancestor_type_definitions",
            kind: "message",
            T: kDd,
            repeated: !0
        },
        {
            no: 9,
            name: "inserted_symbol_types",
            kind: "message",
            T: wDd,
            repeated: !0
        },
        {
            no: 10,
            name: "quick_fixes",
            kind: "message",
            T: CDd,
            repeated: !0
        },
        {
            no: 11,
            name: "start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 12,
            name: "end_column_inclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 13,
            name: "class_information",
            kind: "message",
            T: EDd,
            repeated: !0
        },
        {
            no: 14,
            name: "function_signatures",
            kind: "message",
            T: xDd,
            repeated: !0
        },
        {
            no: 15,
            name: "snapshot",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "FixMarkersRequest_Marker"
}), yDd = x.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.RelatedInformation", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relevant_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "start_line",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "FixMarkersRequest_Marker_RelatedInformation"
}), SDd = x.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.ContextRange", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_inclusive",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "FixMarkersRequest_Marker_ContextRange"
}), kDd = x.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.AncestorTypeDefinition", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "FixMarkersRequest_Marker_AncestorTypeDefinition"
}), wDd = x.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.InsertedSymbolType", ()=>[
        {
            no: 1,
            name: "symbol_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "symbol_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "symbol_line",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "FixMarkersRequest_Marker_InsertedSymbolType"
}), CDd = x.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.QuickFix", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_preferred",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "edits",
            kind: "message",
            T: TDd,
            repeated: !0
        }
    ], {
    localName: "FixMarkersRequest_Marker_QuickFix"
}), TDd = x.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.QuickFix.Edit", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_inclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "deleted_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "add_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "snapshot",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "FixMarkersRequest_Marker_QuickFix_Edit"
}), EDd = x.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.ClassInformation", ()=>[
        {
            no: 1,
            name: "class_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "top_level_lines",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 4,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "constructors",
            kind: "message",
            T: IDd,
            repeated: !0
        },
        {
            no: 6,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "FixMarkersRequest_Marker_ClassInformation"
}), IDd = x.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.ClassInformation.Constructor", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_inclusive",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "FixMarkersRequest_Marker_ClassInformation_Constructor"
}), xDd = x.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.FunctionSignature", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "documentation",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "parameters",
            kind: "message",
            T: ADd,
            repeated: !0
        }
    ], {
    localName: "FixMarkersRequest_Marker_FunctionSignature"
}), ADd = x.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.FunctionSignature.FunctionParameter", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "documentation",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "FixMarkersRequest_Marker_FunctionSignature_FunctionParameter"
}), RDd = x.makeMessageType("aiserver.v1.FixMarkersResponse", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "changes",
            kind: "message",
            T: PDd,
            repeated: !0
        },
        {
            no: 3,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "iteration_number",
            kind: "scalar",
            T: 5
        }
    ]), PDd = x.makeMessageType("aiserver.v1.FixMarkersResponse.Change", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_exclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "deleted_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "add_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "FixMarkersResponse_Change"
}), MDd = x.makeMessageType("aiserver.v1.StreamLintRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: Cx,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 5,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 9,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 10,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 11,
            name: "bad_notifications",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 12,
            name: "lint_rules",
            kind: "scalar",
            T: 9
        }
    ]), DDd = x.makeMessageType("aiserver.v1.ReportGroundTruthCandidateRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "time_since_completed_action_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "feature_type",
            kind: "enum",
            T: x.getEnumType(Xdd)
        },
        {
            no: 4,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "selection_in_question",
            kind: "message",
            T: aW
        },
        {
            no: 7,
            name: "lines_above_and_below",
            kind: "scalar",
            T: 5
        }
    ]), NDd = x.makeMessageType("aiserver.v1.ReportGroundTruthCandidateResponse", []), LDd = x.makeMessageType("aiserver.v1.ReportCmdKFateRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "fate",
            kind: "enum",
            T: x.getEnumType(ODd)
        }
    ]), ODd = x.makeEnum("aiserver.v1.ReportCmdKFateRequest.Fate", [
    {
        no: 0,
        name: "FATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FATE_CANCELLED",
        localName: "CANCELLED"
    },
    {
        no: 2,
        name: "FATE_ACCEPTED",
        localName: "ACCEPTED"
    },
    {
        no: 3,
        name: "FATE_REJECTED",
        localName: "REJECTED"
    },
    {
        no: 4,
        name: "FATE_FOLLOWED_UP",
        localName: "FOLLOWED_UP"
    },
    {
        no: 5,
        name: "FATE_REPROMPTED",
        localName: "REPROMPTED"
    }
]), FDd = x.makeMessageType("aiserver.v1.ReportCmdKFateResponse", []), BDd = x.makeMessageType("aiserver.v1.GetFilesForComposerRequest", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: QE,
            repeated: !0
        },
        {
            no: 3,
            name: "rerank_results",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "file_search_results",
            kind: "message",
            T: X1r,
            oneof: "context_results"
        },
        {
            no: 5,
            name: "code_search_results",
            kind: "message",
            T: dii,
            oneof: "context_results"
        },
        {
            no: 6,
            name: "rerank_results_v2",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "long_context_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "is_eval",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "model_details",
            kind: "message",
            T: Mg
        }
    ]), UDd = x.makeMessageType("aiserver.v1.GetFilesForComposerResponse", ()=>[
        {
            no: 1,
            name: "relative_workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), jDd = x.makeMessageType("aiserver.v1.ComposerEnhancerClientMessage", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: $Dd,
            oneof: "message"
        },
        {
            no: 2,
            name: "tool_result",
            kind: "message",
            T: GDd,
            oneof: "message"
        }
    ]), e8o = x.makeMessageType("aiserver.v1.ComposerEnhancerServerMessage", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: HDd,
            oneof: "message"
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: WDd,
            oneof: "message"
        }
    ]), $Dd = x.makeMessageType("aiserver.v1.ComposerEnhancerRequest", ()=>[
        {
            no: 1,
            name: "input_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "composer_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), HDd = x.makeMessageType("aiserver.v1.ComposerEnhancerResponse", ()=>[
        {
            no: 1,
            name: "improved_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_final",
            kind: "scalar",
            T: 8
        }
    ]), WDd = x.makeMessageType("aiserver.v1.ComposerEnhancerToolCall", ()=>[
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
            name: "tool_args",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "tool_index",
            kind: "scalar",
            T: 5
        }
    ]), GDd = x.makeMessageType("aiserver.v1.ComposerEnhancerToolResult", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "result",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_error",
            kind: "scalar",
            T: 8
        }
    ]), qDd = x.makeMessageType("aiserver.v1.FindBugsRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: Mg
        }
    ]), zDd = x.makeMessageType("aiserver.v1.FindBugsResponse", ()=>[
        {
            no: 1,
            name: "bug",
            kind: "message",
            T: VDd,
            opt: !0
        }
    ]), VDd = x.makeMessageType("aiserver.v1.FindBugsResponse.Bug", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "confidence",
            kind: "scalar",
            T: 2
        }
    ], {
    localName: "FindBugsResponse_Bug"
}), t8o = x.makeMessageType("aiserver.v1.WriteGitCommitMessageRequest", ()=>[
        {
            no: 1,
            name: "diffs",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "previous_commit_messages",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 4,
            name: "api_key_credentials",
            kind: "message",
            T: rtt,
            oneof: "credentials"
        },
        {
            no: 5,
            name: "azure_credentials",
            kind: "message",
            T: stt,
            oneof: "credentials"
        },
        {
            no: 6,
            name: "bedrock_credentials",
            kind: "message",
            T: ott,
            oneof: "credentials"
        }
    ]), KDd = x.makeMessageType("aiserver.v1.WriteGitCommitMessageResponse", ()=>[
        {
            no: 1,
            name: "commit_message",
            kind: "scalar",
            T: 9
        }
    ]), n8o = x.makeMessageType("aiserver.v1.WriteGitBranchNameRequest", ()=>[
        {
            no: 1,
            name: "diffs",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "context",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "api_key_credentials",
            kind: "message",
            T: rtt,
            oneof: "credentials"
        },
        {
            no: 5,
            name: "azure_credentials",
            kind: "message",
            T: stt,
            oneof: "credentials"
        },
        {
            no: 6,
            name: "bedrock_credentials",
            kind: "message",
            T: ott,
            oneof: "credentials"
        }
    ]), YDd = x.makeMessageType("aiserver.v1.WriteGitBranchNameResponse", ()=>[
        {
            no: 1,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]), XDd = x.makeMessageType("aiserver.v1.KeepComposerCacheWarmRequest", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: nkr
        },
        {
            no: 2,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_composer_visible",
            kind: "scalar",
            T: 8
        }
    ]), ZDd = x.makeMessageType("aiserver.v1.KeepComposerCacheWarmResponse", ()=>[
        {
            no: 1,
            name: "did_keep_warm",
            kind: "scalar",
            T: 8
        }
    ]), i8o = x.makeMessageType("aiserver.v1.GetDiffReviewRequest", ()=>[
        {
            no: 1,
            name: "diffs",
            kind: "message",
            T: QDd,
            repeated: !0
        },
        {
            no: 2,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), QDd = x.makeMessageType("aiserver.v1.GetDiffReviewRequest.SimpleFileDiff", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "chunks",
            kind: "message",
            T: JDd,
            repeated: !0
        }
    ], {
    localName: "GetDiffReviewRequest_SimpleFileDiff"
}), JDd = x.makeMessageType("aiserver.v1.GetDiffReviewRequest.SimpleFileDiff.Chunk", ()=>[
        {
            no: 1,
            name: "old_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "new_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "old_range",
            kind: "message",
            T: aW
        },
        {
            no: 4,
            name: "new_range",
            kind: "message",
            T: aW
        }
    ], {
    localName: "GetDiffReviewRequest_SimpleFileDiff_Chunk"
}), e3d = x.makeMessageType("aiserver.v1.StreamDiffReviewResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "response"
        },
        {
            no: 2,
            name: "groups",
            kind: "message",
            T: t3d,
            oneof: "response"
        }
    ]), t3d = x.makeMessageType("aiserver.v1.SemanticDiffGroups", ()=>[
        {
            no: 1,
            name: "groups",
            kind: "message",
            T: n3d,
            repeated: !0
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), n3d = x.makeMessageType("aiserver.v1.SemanticDiffGroup", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diffs",
            kind: "message",
            T: i3d,
            repeated: !0
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9
        }
    ]), i3d = x.makeMessageType("aiserver.v1.SemanticDiffReference", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "chunk_index",
            kind: "scalar",
            T: 5
        }
    ]), r3d = x.makeMessageType("aiserver.v1.StreamDiffReviewByFileResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "response"
        },
        {
            no: 2,
            name: "groups",
            kind: "message",
            T: s3d,
            oneof: "response"
        }
    ]), s3d = x.makeMessageType("aiserver.v1.SemanticFileGroups", ()=>[
        {
            no: 1,
            name: "groups",
            kind: "message",
            T: o3d,
            repeated: !0
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), o3d = x.makeMessageType("aiserver.v1.SemanticFileGroup", ()=>[
        {
            no: 1,
            name: "title",
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
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), a3d = x.makeMessageType("aiserver.v1.CountTokensRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: iii,
            repeated: !0
        },
        {
            no: 2,
            name: "model_name",
            kind: "scalar",
            T: 9
        }
    ]), l3d = x.makeMessageType("aiserver.v1.ContextItemTokenDetail", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "line_count",
            kind: "scalar",
            T: 5
        }
    ]), c3d = x.makeMessageType("aiserver.v1.CountTokensResponse", ()=>[
        {
            no: 1,
            name: "count",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "token_details",
            kind: "message",
            T: l3d,
            repeated: !0
        }
    ]), u3d = x.makeMessageType("aiserver.v1.GetModelLabelsRequest", []), d3d = x.makeMessageType("aiserver.v1.GetModelLabelsResponse", ()=>[
        {
            no: 1,
            name: "model_labels",
            kind: "message",
            T: h3d,
            repeated: !0
        }
    ]), h3d = x.makeMessageType("aiserver.v1.GetModelLabelsResponse.ModelLabel", ()=>[
        {
            no: 1,
            name: "name",
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
            name: "short_label",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "supports_agent",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "GetModelLabelsResponse_ModelLabel"
}), p3d = x.makeMessageType("aiserver.v1.GetLastDefaultModelNudgeRequest", []), m3d = x.makeMessageType("aiserver.v1.GetLastDefaultModelNudgeResponse", ()=>[
        {
            no: 1,
            name: "nudge_date",
            kind: "scalar",
            T: 9
        }
    ]), r8o = x.makeMessageType("aiserver.v1.GetDefaultModelNudgeDataRequest", ()=>[
        {
            no: 1,
            name: "startup_opportunity",
            kind: "enum",
            T: x.getEnumType(g5e)
        },
        {
            no: 2,
            name: "current_model",
            kind: "message",
            T: AD
        }
    ]), g5e = x.makeEnum("aiserver.v1.GetDefaultModelNudgeDataRequest.StartupOpportunity", [
    {
        no: 0,
        name: "STARTUP_OPPORTUNITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STARTUP_OPPORTUNITY_FIRST_OPEN",
        localName: "FIRST_OPEN"
    },
    {
        no: 2,
        name: "STARTUP_OPPORTUNITY_REOPEN",
        localName: "REOPEN"
    }
]), g3d = x.makeMessageType("aiserver.v1.GetDefaultModelNudgeDataResponse", ()=>[
        {
            no: 1,
            name: "nudge_date",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "should_default_switch_on_new_chat",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "models_with_no_default_switch",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "conversion_model_override",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "initial_model",
            kind: "message",
            T: s8o
        },
        {
            no: 6,
            name: "application_open_model_switch",
            kind: "message",
            T: f3d
        }
    ]), s8o = x.makeMessageType("aiserver.v1.GetDefaultModelNudgeDataResponse.InitialModel", ()=>[
        {
            no: 1,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parameters",
            kind: "message",
            T: JF,
            repeated: !0
        }
    ], {
    localName: "GetDefaultModelNudgeDataResponse_InitialModel"
}), f3d = x.makeMessageType("aiserver.v1.GetDefaultModelNudgeDataResponse.ApplicationOpenModelSwitch", ()=>[
        {
            no: 1,
            name: "nudge_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "experiment_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "target_model",
            kind: "message",
            T: s8o
        }
    ], {
    localName: "GetDefaultModelNudgeDataResponse_ApplicationOpenModelSwitch"
}), o8o = x.makeMessageType("aiserver.v1.GetDefaultModelRequest", []), v3d = x.makeMessageType("aiserver.v1.GetDefaultModelResponse", ()=>[
        {
            no: 1,
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "thinking_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "max_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "next_default_set_date",
            kind: "scalar",
            T: 9
        }
    ]), _3d = x.makeMessageType("aiserver.v1.CloudSetupBlockerAction", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9,
            oneof: "action"
        },
        {
            no: 2,
            name: "open_privacy_settings",
            kind: "message",
            T: A5,
            oneof: "action"
        },
        {
            no: 3,
            name: "open_github_connect",
            kind: "message",
            T: A5,
            oneof: "action"
        },
        {
            no: 4,
            name: "open_repo_picker",
            kind: "message",
            T: A5,
            oneof: "action"
        }
    ]), a8o = x.makeMessageType("aiserver.v1.CloudSetupBlocker", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "icon",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "action",
            kind: "message",
            T: _3d
        },
        {
            no: 4,
            name: "cta_label",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "checklist_title",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "checklist_description",
            kind: "scalar",
            T: 9
        }
    ]), b3d = x.makeMessageType("aiserver.v1.GetCloudSetupBlockersRequest", ()=>[
        {
            no: 1,
            name: "selected_target_repo_url",
            kind: "scalar",
            T: 9
        }
    ]), y3d = x.makeMessageType("aiserver.v1.GetCloudSetupBlockersResponse", ()=>[
        {
            no: 1,
            name: "pending",
            kind: "message",
            T: a8o,
            repeated: !0
        },
        {
            no: 2,
            name: "completed",
            kind: "message",
            T: a8o,
            repeated: !0
        }
    ]), S3d = x.makeMessageType("aiserver.v1.TestBedrockCredentialsRequest", ()=>[
        {
            no: 1,
            name: "access_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "secret_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "region",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model_name",
            kind: "scalar",
            T: 9
        }
    ]), k3d = x.makeMessageType("aiserver.v1.TestBedrockCredentialsResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), l8o = x.makeMessageType("aiserver.v1.CommitLineRange", ()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "absolute_start",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "absolute_end",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), c8o = x.makeMessageType("aiserver.v1.RangeGroup", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "operation_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "ranges",
            kind: "message",
            T: l8o,
            repeated: !0
        },
        {
            no: 5,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), rkr = x.makeMessageType("aiserver.v1.FileRangeAnnotations", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "groups",
            kind: "message",
            T: c8o,
            repeated: !0
        }
    ]), w3d = x.makeMessageType("aiserver.v1.ReportCommitAiAnalyticsRequest", ()=>[
        {
            no: 1,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "total_lines_added",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "total_lines_deleted",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "tab_lines_added",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "tab_lines_deleted",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "composer_lines_added",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "composer_lines_deleted",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "is_primary_branch",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "repo_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "non_ai_lines_added",
            kind: "scalar",
            T: 5
        },
        {
            no: 12,
            name: "non_ai_lines_deleted",
            kind: "scalar",
            T: 5
        },
        {
            no: 13,
            name: "change_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 14,
            name: "message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "commit_ts",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 16,
            name: "range_annotations",
            kind: "message",
            T: rkr,
            repeated: !0
        },
        {
            no: 17,
            name: "commit_source",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), C3d = x.makeMessageType("aiserver.v1.ReportCommitAiAnalyticsResponse", []), T3d = x.makeMessageType("aiserver.v1.ReportAiCodeChangeMetricsRequest", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "message",
            T: u8o,
            repeated: !0
        }
    ]), u8o = x.makeMessageType("aiserver.v1.AiCodeChange", ()=>[
        {
            no: 1,
            name: "change_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "source",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "metadata",
            kind: "message",
            T: m8o,
            repeated: !0
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
            name: "total_lines_added",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "total_lines_deleted",
            kind: "scalar",
            T: 5
        }
    ]), E3d = x.makeMessageType("aiserver.v1.ReportAiCodeChangeMetricsResponse", []), I3d = x.makeMessageType("aiserver.v1.ReportProcessMetricsRequest", ()=>[
        {
            no: 1,
            name: "sample_start",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "sample_end",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "num_subsamples",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "window_seq",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "rows",
            kind: "message",
            T: x3d,
            repeated: !0
        },
        {
            no: 7,
            name: "os",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "os_version",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "arch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "client_version",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "client_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), x3d = x.makeMessageType("aiserver.v1.ProcessMetricsRowRequest", ()=>[
        {
            no: 1,
            name: "pid",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "ppid",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "extension_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "cpu_time_ms_sample",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "sample_avg_mem_mb",
            kind: "scalar",
            T: 1
        },
        {
            no: 7,
            name: "sample_peak_mem_mb",
            kind: "scalar",
            T: 1
        },
        {
            no: 8,
            name: "session_peak_mem_mb",
            kind: "scalar",
            T: 1
        },
        {
            no: 9,
            name: "process_name_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), A3d = x.makeMessageType("aiserver.v1.ReportProcessMetricsResponse", []), d8o = x.makeMessageType("aiserver.v1.ReportProcessMetricsV2Request", ()=>[
        {
            no: 1,
            name: "sample_start",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "sample_end",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "num_subsamples",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "rows",
            kind: "message",
            T: h8o,
            repeated: !0
        },
        {
            no: 6,
            name: "os",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "arch",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "client_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "origin",
            kind: "scalar",
            T: 9
        }
    ]), h8o = x.makeMessageType("aiserver.v1.ProcessMetricsV2RowRequest", ()=>[
        {
            no: 1,
            name: "pid",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "ppid",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "process_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "extension_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "process_name_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "sample_cpu_time_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 7,
            name: "sample_avg_mem_mb",
            kind: "scalar",
            T: 1
        },
        {
            no: 8,
            name: "sample_peak_mem_mb",
            kind: "scalar",
            T: 1
        },
        {
            no: 9,
            name: "session_peak_mem_mb",
            kind: "scalar",
            T: 1
        },
        {
            no: 10,
            name: "memory_during_sample_peak_mb",
            kind: "scalar",
            T: 1
        },
        {
            no: 11,
            name: "cpu_during_sample_peak_pct",
            kind: "scalar",
            T: 1
        },
        {
            no: 12,
            name: "argv",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 13,
            name: "owner_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "renderer_role",
            kind: "scalar",
            T: 9
        }
    ]), R3d = x.makeMessageType("aiserver.v1.ReportProcessMetricsV2Response", []), P3d = x.makeMessageType("aiserver.v1.ReportSandProcessMetricsRequest", ()=>[
        {
            no: 1,
            name: "sample_start",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "sample_end",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "num_subsamples",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "sample_seqno",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "rows",
            kind: "message",
            T: M3d,
            repeated: !0
        },
        {
            no: 7,
            name: "os",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "os_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "arch",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "client_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "client_id",
            kind: "scalar",
            T: 9
        }
    ]), M3d = x.makeMessageType("aiserver.v1.SandProcessMetricsRowRequest", ()=>[
        {
            no: 1,
            name: "pid",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "ppid",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "process_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "process_name_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "sample_cpu_time_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "sample_avg_mem_mb",
            kind: "scalar",
            T: 1
        },
        {
            no: 7,
            name: "sample_peak_mem_mb",
            kind: "scalar",
            T: 1
        },
        {
            no: 8,
            name: "session_peak_mem_mb",
            kind: "scalar",
            T: 1
        },
        {
            no: 9,
            name: "memory_during_sample_peak_mb",
            kind: "scalar",
            T: 1
        },
        {
            no: 10,
            name: "cpu_during_sample_peak_pct",
            kind: "scalar",
            T: 1
        }
    ]), D3d = x.makeMessageType("aiserver.v1.ReportSandProcessMetricsResponse", []), N3d = x.makeMessageType("aiserver.v1.ReportClientNumericMetricsRequest", ()=>[
        {
            no: 1,
            name: "metrics",
            kind: "message",
            T: p8o,
            repeated: !0
        }
    ]), p8o = x.makeMessageType("aiserver.v1.ClientNumericMetric", ()=>[
        {
            no: 1,
            name: "metric",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "ff_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "timestamp_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "client_version",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "os",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "enabled_extensions_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "ff_resolved",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "extensions_resolved",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "window_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "module_version",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "module_channel",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "serving",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), L3d = x.makeMessageType("aiserver.v1.ReportClientNumericMetricsResponse", []), O3d = x.makeMessageType("aiserver.v1.PotentiallyGenerateMemoryRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 3,
            name: "git_upstream_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "composer_id",
            kind: "scalar",
            T: 9
        }
    ]), F3d = x.makeMessageType("aiserver.v1.PotentiallyGenerateMemoryResponse", ()=>[
        {
            no: 1,
            name: "saved_memory",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "knowledge_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), B3d = x.makeMessageType("aiserver.v1.KnowledgeBaseAddRequest", ()=>[
        {
            no: 1,
            name: "knowledge",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "git_origin",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "composer_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), U3d = x.makeMessageType("aiserver.v1.KnowledgeBaseAddResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "id",
            kind: "scalar",
            T: 9
        }
    ]), j3d = x.makeMessageType("aiserver.v1.KnowledgeBaseRemoveRequest", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        }
    ]), $3d = x.makeMessageType("aiserver.v1.KnowledgeBaseRemoveResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), H3d = x.makeMessageType("aiserver.v1.KnowledgeBaseUpdateRequest", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "knowledge",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9
        }
    ]), W3d = x.makeMessageType("aiserver.v1.KnowledgeBaseUpdateResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), G3d = x.makeMessageType("aiserver.v1.KnowledgeBaseListRequest", ()=>[
        {
            no: 1,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "git_origin",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), q3d = x.makeMessageType("aiserver.v1.KnowledgeBaseListResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "all_results",
            kind: "message",
            T: z3d,
            repeated: !0
        }
    ]), z3d = x.makeMessageType("aiserver.v1.KnowledgeBaseListResponse.Item", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "knowledge",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "created_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_generated",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "KnowledgeBaseListResponse_Item"
}), V3d = x.makeMessageType("aiserver.v1.FetchRelevantKnowledgeForConversationRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 3,
            name: "git_origin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "tagged_filenames",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), K3d = x.makeMessageType("aiserver.v1.FetchRelevantKnowledgeForConversationResponse", ()=>[
        {
            no: 1,
            name: "knowledge_items",
            kind: "message",
            T: Gni,
            repeated: !0
        }
    ]), Y3d = x.makeMessageType("aiserver.v1.InferBackgroundComposerScriptsRequest", ()=>[
        {
            no: 1,
            name: "commands",
            kind: "message",
            T: X3d,
            repeated: !0
        }
    ]), X3d = x.makeMessageType("aiserver.v1.InferBackgroundComposerScriptsRequest.Command", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "InferBackgroundComposerScriptsRequest_Command"
}), Z3d = x.makeMessageType("aiserver.v1.InferBackgroundComposerScriptsResponse", ()=>[
        {
            no: 1,
            name: "install_script",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_script",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "terminals",
            kind: "message",
            T: Q3d,
            repeated: !0
        }
    ]), Q3d = x.makeMessageType("aiserver.v1.InferBackgroundComposerScriptsResponse.Terminal", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "command",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "InferBackgroundComposerScriptsResponse_Terminal"
}), J3d = x.makeMessageType("aiserver.v1.GetBackgroundComposerFeedbackLinkRequest", []), eNd = x.makeMessageType("aiserver.v1.GetBackgroundComposerFeedbackLinkResponse", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), m8o = x.makeMessageType("aiserver.v1.ScoredAiCodeMetadata", ()=>[
        {
            no: 1,
            name: "file_extension",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines_added",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "lines_deleted",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "change_hashes",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "file_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), tNd = x.makeMessageType("aiserver.v1.SttConfig", ()=>[
        {
            no: 1,
            name: "language",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "keyterms",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), nNd = x.makeMessageType("aiserver.v1.SttAudioChunk", ()=>[
        {
            no: 1,
            name: "pcm16",
            kind: "scalar",
            T: 12
        }
    ]), iNd = x.makeMessageType("aiserver.v1.SttControl", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: x.getEnumType(g8o)
        }
    ]), g8o = x.makeEnum("aiserver.v1.SttControl.Type", [
    {
        no: 0,
        name: "TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TYPE_STOP",
        localName: "STOP"
    },
    {
        no: 2,
        name: "TYPE_CANCEL",
        localName: "CANCEL"
    }
]), hii = x.makeMessageType("aiserver.v1.SttClientMessage", ()=>[
        {
            no: 1,
            name: "config",
            kind: "message",
            T: tNd,
            oneof: "payload"
        },
        {
            no: 2,
            name: "audio",
            kind: "message",
            T: nNd,
            oneof: "payload"
        },
        {
            no: 3,
            name: "control",
            kind: "message",
            T: iNd,
            oneof: "payload"
        }
    ]), f8o = x.makeMessageType("aiserver.v1.SttServerMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_final",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(pii)
        }
    ]), pii = x.makeEnum("aiserver.v1.SttServerMessage.Kind", [
    {
        no: 0,
        name: "KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "KIND_PARTIAL",
        localName: "PARTIAL"
    },
    {
        no: 2,
        name: "KIND_SEGMENT",
        localName: "SEGMENT"
    },
    {
        no: 3,
        name: "KIND_FINAL",
        localName: "FINAL"
    }
]), rNd = x.makeMessageType("aiserver.v1.TranscribeAudioRequest", ()=>[
        {
            no: 1,
            name: "audio",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "language",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), sNd = x.makeMessageType("aiserver.v1.TranscribeAudioResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "transcription_time_ms",
            kind: "scalar",
            T: 3
        }
    ]), v8o = x.makeMessageType("aiserver.v1.TextToSpeechRequest", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "voice_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "language",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "speed",
            kind: "scalar",
            T: 2,
            opt: !0
        },
        {
            no: 5,
            name: "with_timestamps",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), oNd = x.makeMessageType("aiserver.v1.TextToSpeechResponse", ()=>[
        {
            no: 1,
            name: "audio",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "synthesis_time_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "char_start_ms",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 5,
            name: "char_end_ms",
            kind: "scalar",
            T: 5,
            repeated: !0
        }
    ]), aNd = x.makeMessageType("aiserver.v1.MintRealtimeVoiceSecretRequest", ()=>[
        {
            no: 1,
            name: "language",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), lNd = x.makeMessageType("aiserver.v1.MintRealtimeVoiceSecretResponse", ()=>[
        {
            no: 1,
            name: "client_secret",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "websocket_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "session_plan",
            kind: "message",
            T: pNd
        },
        {
            no: 5,
            name: "voice_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "idle_seconds",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), cNd = x.makeMessageType("aiserver.v1.SetRealtimeVoiceRequest", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "voice_id",
            kind: "scalar",
            T: 9
        }
    ]), uNd = x.makeMessageType("aiserver.v1.SetRealtimeVoiceResponse", []), dNd = x.makeMessageType("aiserver.v1.GetRealtimeVoiceRequest", []), hNd = x.makeMessageType("aiserver.v1.GetRealtimeVoiceResponse", ()=>[
        {
            no: 1,
            name: "voice_id",
            kind: "scalar",
            T: 9
        }
    ]), pNd = x.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tools_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "greeting_instructions",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "under_way_receipt",
            kind: "message",
            T: _8o
        },
        {
            no: 5,
            name: "queued_receipt",
            kind: "message",
            T: _8o
        },
        {
            no: 6,
            name: "stay_silent_refusals",
            kind: "message",
            T: mNd
        },
        {
            no: 7,
            name: "reply_lines",
            kind: "message",
            T: gNd
        },
        {
            no: 9,
            name: "speeds",
            kind: "message",
            T: vNd,
            repeated: !0
        },
        {
            no: 10,
            name: "languages",
            kind: "message",
            T: fNd,
            repeated: !0
        },
        {
            no: 12,
            name: "default_speed",
            kind: "scalar",
            T: 1
        },
        {
            no: 13,
            name: "default_language",
            kind: "scalar",
            T: 9
        }
    ]), _8o = x.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.Receipt", ()=>[
        {
            no: 1,
            name: "output_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "instructions",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "RealtimeVoiceSessionPlan_Receipt"
}), mNd = x.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.StaySilentRefusals", ()=>[
        {
            no: 1,
            name: "they_just_spoke",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "receipt_owed",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "RealtimeVoiceSessionPlan_StaySilentRefusals"
}), gNd = x.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.ReplyLines", ()=>[
        {
            no: 1,
            name: "unknown_tool_error_template",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_unreachable_answer",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pause_line",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "parked_refusal",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "stopped_line",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "error_line",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "no_reply_line",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "unreadable_line",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "news_owed",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "tool_failed_error",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "send_task_missing_request_error",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "send_task_request_too_long_error",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "earlier_updates_are_in_the_chat",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "typed_request_frame_template",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "ran_after_an_earlier_job_frame_template",
            kind: "scalar",
            T: 9
        },
        {
            no: 16,
            name: "answers_request_frame_template",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "RealtimeVoiceSessionPlan_ReplyLines"
}), fNd = x.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.Option", ()=>[
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
    ], {
    localName: "RealtimeVoiceSessionPlan_Option"
}), vNd = x.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.SpeedOption", ()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "RealtimeVoiceSessionPlan_SpeedOption"
});

}
