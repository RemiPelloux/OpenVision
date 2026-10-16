import { WDn, zd } from "./agent_pb.js";
import { RHi, cno, wHt } from "./bugbot_pb.js";
import { Hu, KDn, QDn, Rse, SUi, Uv, YDn, _Ui, g$t, h$t, jqs, m$t, qDn, vUi, zDn } from "./chat_pb.js";
import { j3, jno } from "./cloud_agent_scope_pb.js";
import { SLn, kLn } from "./cmdk_pb.js";
import { Kno, QSd } from "./context_ast_pb.js";
import { A6, _Ln } from "./context_pb.js";
import { OHi, UU, WHi, Yj, bno, gno } from "./cpp_pb.js";
import { bjs, hUi } from "./docs_pb.js";
import { qP } from "./empty_pb.js";
import { Iee, Lse, O$t, W0e, _X } from "./exec_pb.js";
import { LSd, qno } from "./fastapply_pb.js";
import { CHt, mno } from "./filesyncserver_pb.js";
import { Qno, Zno, _Sv } from "./interface_agent_pb.js";
import { qHi, qSd, wLn, zHi, zSd } from "./lint_pb.js";
import { DHi, lno } from "./lsp_subgraph_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { YO, Zgu, nX, nfu, ogu, rgu, w1 } from "./repository_pb.js";
import { C4e, MD, T4e, Uj, w2, w4e } from "./requested_model_pb.js";
import { B8i, F8i, U8i } from "./smart_mode_classifier_exec_pb.js";
import { EW } from "./struct_pb.js";
import { H3i, gIn, iX, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { D7i, w5u } from "./usage_pb.js";
import { A3t, Gle, JSi, Mss, OO, VVc, Vle, ZC, ZSi, a6, c6, ej, eki, ffe, gfe, hu, io, jVc, kD, oN, pVc, qVc, wRe, x3, xf, y5 } from "./utils_pb.js";
var Jno, JSd, ekd, YHi, eio, tio, nio, tkd, nkd, ikd, rkd, skd, iio, okd, akd, ckd, lkd, ukd, dkd, hkd, pkd, mkd, gkd, fkd, vkd, _kd, bkd, ykd, Skd, kkd, wkd, Ckd, Tkd, Ekd, xkd, Ikd, Akd, Rkd, XHi, Dkd, rio, CLn, sio, Mkd, Pkd, Lkd, Nkd, oio, Okd, Fkd, aio, cio, Bkd, Ukd, $kd, Hkd, Wkd, Gkd, Vkd, jkd, qkd, zkd, Kkd, Ykd, Xkd, Zkd, lio, Qkd, uio, Jkd, ewd, twd, ZHi, nwd, iwd, rwd, swd, owd, awd, cwd, lwd, uwd, dwd, hwd, pwd, mwd, gwd, fwd, vwd, _wd, bwd, ywd, Swd, kwd, wwd, dio, Cwd, Twd, Ewd, xwd, Iwd, Awd, Rwd, Dwd, Mwd, Pwd, Lwd, Nwd, Owd, Fwd, Bwd, Uwd, hio, $wd, Hwd, Wwd, Gwd, Vwd, jwd, qwd, zwd, Kwd, Ywd, Xwd, pio, mio, Zwd, Qwd, Jwd, eCd, tCd, nCd, eUe, gio, iCd, rCd, TLn, QHi, JHi, sCd, oCd, aCd, cCd, lCd, uCd, dCd, hCd, pCd, mCd, gCd, fCd, vCd, fio, _Cd, bCd, yCd, SCd, kCd, vio, _io, bio, wCd, CCd, TCd, ECd, xCd, ICd, ACd, RCd, DCd, MCd, PCd, LCd, NCd, yio, OCd, FCd, BCd, Sio, UCd, $Cd, HCd, WCd, GCd, VCd, eWi, ELn, jCd, qCd, zCd, KCd, YCd, XCd, ZCd, QCd, JCd, e0d, t0d, n0d, i0d, r0d, s0d, kio, o0d, wio, a0d, c0d, l0d, u0d, d0d, h0d, p0d, m0d, g0d, f0d, v0d, _0d, b0d, y0d, S0d, tWi, k0d, w0d, C0d, T0d, E0d, x0d, I0d, A0d, R0d, D0d, M0d, P0d, L0d, N0d, O0d, F0d, B0d, U0d, $0d, H0d, W0d, Cio, G0d, LJe, RHt, nWi, V0d, Tio, j0d, iWi, q0d, z0d, K0d, tUe, Y0d, X0d, Z0d, Q0d, J0d, e1d, t1d, n1d, i1d, r1d, s1d, o1d, a1d, c1d, l1d, u1d, Eio, d1d, h1d, p1d, m1d, g1d, xio, f1d, Iio, v1d, _1d, b1d, y1d, S1d, k1d, Aio, w1d, Rio, C1d, T1d, E1d, x1d, I1d, A1d, rWi, R1d, D1d, M1d, Dio, P1d, L1d, N1d, O1d, F1d, B1d, U1d, $1d, H1d, W1d, G1d, V1d, j1d, Mio, q1d, z1d, K1d, Y1d, X1d, Z1d, Q1d, J1d, eTd, tTd, NJe, nTd, iTd, rTd, sTd, oTd, aTd, sWi, cTd, lTd, uTd, dTd, hTd, pTd, Pio, mTd, gTd, fTd, vTd, _Td, Lio, bTd, Nio, yTd, Oio, Fio, STd, kTd, wTd, CTd, TTd, ETd, xTd, ITd, ATd, RTd, DTd, MTd, tPe, PTd, LTd, NTd, OTd, FTd, BTd, UTd, $Td, HTd, WTd, GTd, VTd, jTd, Bio, qTd, zTd, KTd, YTd, XTd, ZTd, QTd, JTd, eEd, Uio, tEd, nEd, iEd, $io, rEd, Hio, sEd, oEd, aEd, cEd, lEd, uEd, dEd, hEd, pEd, mEd, gEd, fEd, vEd, _Ed, bEd, yEd, SEd, kEd, wEd, CEd, TEd, EEd, xEd, IEd, AEd, Wio, REd, DEd, MEd, PEd, LEd, NEd, OEd, FEd, BEd, Gio, Vio, UEd, jio, oWi, $Ed, nPe, HEd, WEd, GEd, VEd, jEd, qEd, zEd, KEd, YEd, XEd, ZEd, QEd, JEd, exd, txd, nxd, ixd, rxd, sxd, oxd, axd, cxd, lxd, uxd, qio, dxd, hxd, pxd, mxd, gxd, fxd, vxd, zio, _xd, Kio, bxd, yxd, Sxd, Yio, kxd, wxd, Cxd, Txd, Exd, xxd, Ixd, Axd, Rxd, Dxd, Mxd, Pxd, Lxd, Nxd, Oxd, Fxd, Bxd, Xio, n1e, Uxd, Zio, $xd, Qio, Hxd, Wxd, Jio, Gxd, Vxd, jxd, qxd, ero, tro, aWi, zxd, Kxd, Yxd, nro, Xxd, Zxd, Qxd, Jxd, iro, rro, eId, tId, nId, iId, rId, sro, sId, oId, aId, cId, lId, uId, dId, hId, pId, mId, gId, fId, vId, _Id, bId, yId, SId, kId, wId, CId, oro, TId, EId, xId, aro, xLn, cro, ILn, IId, AId, lro, RId, DId, MId, PId, LId, NId, OId, FId, uro, BId, UId, $Id, HId;
export { $0d, $1d, $Cd, $Ed, $Id, $Td, $io, $kd, $wd, $xd, A0d, A1d, ACd, AEd, AId, ATd, Aio, Akd, Awd, Axd, B0d, B1d, BCd, BEd, BId, BTd, Bio, Bkd, Bwd, Bxd, C0d, C1d, CCd, CEd, CId, CLn, CTd, Cio, Ckd, Cwd, Cxd, D0d, D1d, DCd, DEd, DId, DTd, Dio, Dkd, Dwd, Dxd, E0d, E1d, ECd, EEd, EId, ELn, ETd, Eio, Ekd, Ewd, Exd, F0d, F1d, FCd, FEd, FId, FTd, Fio, Fkd, Fwd, Fxd, G0d, G1d, GCd, GEd, GTd, Gio, Gkd, Gwd, Gxd, H0d, H1d, HCd, HEd, HId, HTd, Hio, Hkd, Hwd, Hxd, I0d, I1d, ICd, IEd, IId, ILn, ITd, Iio, Ikd, Iwd, Ixd, J0d, J1d, JCd, JEd, JHi, JSd, JTd, Jio, Jkd, Jno, Jwd, Jxd, K0d, K1d, KCd, KEd, KTd, Kio, Kkd, Kwd, Kxd, L0d, L1d, LCd, LEd, LId, LJe, LTd, Lio, Lkd, Lwd, Lxd, M0d, M1d, MCd, MEd, MId, MTd, Mio, Mkd, Mwd, Mxd, N0d, N1d, NCd, NEd, NId, NJe, NTd, Nio, Nkd, Nwd, Nxd, O0d, O1d, OCd, OEd, OId, OTd, Oio, Okd, Owd, Oxd, P0d, P1d, PCd, PEd, PId, PTd, Pio, Pkd, Pwd, Pxd, Q0d, Q1d, QCd, QEd, QHi, QTd, Qio, Qkd, Qwd, Qxd, R0d, R1d, RCd, REd, RHt, RId, RTd, Rio, Rkd, Rwd, Rxd, S0d, S1d, SCd, SEd, SId, STd, Sio, Skd, Swd, Sxd, T0d, T1d, TCd, TEd, TId, TLn, TTd, Tio, Tkd, Twd, Txd, U0d, U1d, UCd, UEd, UId, UTd, Uio, Ukd, Uwd, Uxd, V0d, V1d, VCd, VEd, VTd, Vio, Vkd, Vwd, Vxd, W0d, W1d, WCd, WEd, WTd, Wio, Wkd, Wwd, Wxd, X0d, X1d, XCd, XEd, XHi, XTd, Xio, Xkd, Xwd, Xxd, Y0d, Y1d, YCd, YEd, YHi, YTd, Yio, Ykd, Ywd, Yxd, Z0d, Z1d, ZCd, ZEd, ZHi, ZTd, Zio, Zkd, Zwd, Zxd, _0d, _1d, _Cd, _Ed, _Id, _Td, _io, _kd, _wd, _xd, a0d, a1d, aCd, aEd, aId, aTd, aWi, aio, akd, aro, awd, axd, b0d, b1d, bCd, bEd, bId, bTd, bio, bkd, bwd, bxd, c0d, c1d, cCd, cEd, cId, cTd, cio, ckd, cro, cwd, cxd, d0d, d1d, dCd, dEd, dId, dTd, dio, dkd, dwd, dxd, e0d, e1d, eCd, eEd, eId, eTd, eUe, eWi, eio, ekd, ero, ewd, exd, f0d, f1d, fCd, fEd, fId, fTd, fio, fkd, fwd, fxd, g0d, g1d, gCd, gEd, gId, gTd, gio, gkd, gwd, gxd, h0d, h1d, hCd, hEd, hId, hTd, hio, hkd, hwd, hxd, i0d, i1d, iCd, iEd, iId, iTd, iWi, iio, ikd, iro, iwd, ixd, j0d, j1d, jCd, jEd, jTd, jio, jkd, jwd, jxd, k0d, k1d, kCd, kEd, kId, kTd, kio, kkd, kwd, kxd, l0d, l1d, lCd, lEd, lId, lTd, lio, lkd, lro, lwd, lxd, m0d, m1d, mCd, mEd, mId, mTd, mio, mkd, mwd, mxd, n0d, n1d, n1e, nCd, nEd, nId, nPe, nTd, nWi, nio, nkd, nro, nwd, nxd, o0d, o1d, oCd, oEd, oId, oTd, oWi, oio, okd, oro, owd, oxd, p0d, p1d, pCd, pEd, pId, pTd, pio, pkd, pwd, pxd, q0d, q1d, qCd, qEd, qTd, qio, qkd, qwd, qxd, r0d, r1d, rCd, rEd, rId, rTd, rWi, rio, rkd, rro, rwd, rxd, s0d, s1d, sCd, sEd, sId, sTd, sWi, sio, skd, sro, swd, sxd, t0d, t1d, tCd, tEd, tId, tPe, tTd, tUe, tWi, tio, tkd, tro, twd, txd, u0d, u1d, uCd, uEd, uId, uTd, uio, ukd, uro, uwd, uxd, v0d, v1d, vCd, vEd, vId, vTd, vio, vkd, vwd, vxd, w0d, w1d, wCd, wEd, wId, wTd, wio, wkd, wwd, wxd, x0d, x1d, xCd, xEd, xId, xLn, xTd, xio, xkd, xwd, xxd, y0d, y1d, yCd, yEd, yId, yTd, yio, ykd, ywd, yxd, z0d, z1d, zCd, zEd, zTd, zio, zkd, zwd, zxd };
var __wakaru_EA_initialized = false;
export function EA() {
if (__wakaru_EA_initialized) return;
__wakaru_EA_initialized = true;
"use strict";
x(), bi(), Hu(), ql(), hu(), wHt(), _X(), UU(), Uj(), lno(), mno(), kLn(), nX(), hUi(), U8i(), jno(), zd(), LSd(), zSd(), QSd(), w5u(), _Sv(), A6(), Jno = k.makeEnum("aiserver.v1.TaskListItemState", [
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
]), JSd = k.makeEnum("aiserver.v1.InferenceHookTestOutcome", [
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
]), ekd = k.makeEnum("aiserver.v1.AvailableModelsScope", [
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
]), YHi = k.makeEnum("aiserver.v1.CloudAgentEffortMode", [
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
]), eio = k.makeEnum("aiserver.v1.TaskStatus", [
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
]), tio = k.makeMessageType("aiserver.v1.GetComposerAutocompleteRequest", ()=>[
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
            T: tkd,
            opt: !0
        }
    ]), nio = k.makeMessageType("aiserver.v1.GetComposerAutocompleteResponse", ()=>[
        {
            no: 1,
            name: "suggestion",
            kind: "scalar",
            T: 9
        }
    ]), tkd = k.makeMessageType("aiserver.v1.ComposerAutocompleteContext", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: nkd,
            opt: !0
        },
        {
            no: 2,
            name: "cached_files",
            kind: "message",
            T: ikd,
            repeated: !0
        },
        {
            no: 3,
            name: "conversation_messages",
            kind: "message",
            T: Uv,
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
    ]), nkd = k.makeMessageType("aiserver.v1.CurrentFileContext", ()=>[
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
    ]), ikd = k.makeMessageType("aiserver.v1.CachedFileContext", ()=>[
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
    ]), rkd = k.makeMessageType("aiserver.v1.ChatSuggestionItem", ()=>[
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
    ]), skd = k.makeMessageType("aiserver.v1.RecentChat", ()=>[
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
            T: iio,
            repeated: !0
        },
        {
            no: 5,
            name: "todos",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), iio = k.makeMessageType("aiserver.v1.RecentChatMessage", ()=>[
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
    ]), okd = k.makeMessageType("aiserver.v1.GetChatSuggestionsRequest", ()=>[
        {
            no: 1,
            name: "recent_chats",
            kind: "message",
            T: skd,
            repeated: !0
        }
    ]), akd = k.makeMessageType("aiserver.v1.GetChatSuggestionsResponse", ()=>[
        {
            no: 1,
            name: "suggestions",
            kind: "message",
            T: rkd,
            repeated: !0
        }
    ]), ckd = k.makeMessageType("aiserver.v1.GetUserInstructionsRequest", ()=>[
        {
            no: 1,
            name: "chats",
            kind: "message",
            T: iio,
            repeated: !0
        },
        {
            no: 2,
            name: "existing_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), lkd = k.makeMessageType("aiserver.v1.GetUserInstructionsResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), ukd = k.makeMessageType("aiserver.v1.IsTerminalFinishedRequest", ()=>[
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
    ]), dkd = k.makeMessageType("aiserver.v1.IsTerminalFinishedResponseV2", ()=>[
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
            T: k.getEnumType(iX),
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
    ]), hkd = k.makeMessageType("aiserver.v1.TestBidiRequest", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), pkd = k.makeMessageType("aiserver.v1.TestBidiResponse", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), mkd = k.makeMessageType("aiserver.v1.AutoContextFile", ()=>[
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
    ]), gkd = k.makeMessageType("aiserver.v1.AutoContextRequest", ()=>[
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
            T: mkd,
            repeated: !0
        },
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: xf
        }
    ]), fkd = k.makeMessageType("aiserver.v1.AutoContextRankedFile", ()=>[
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
    ]), vkd = k.makeMessageType("aiserver.v1.AutoContextResponse", ()=>[
        {
            no: 1,
            name: "ranked_files",
            kind: "message",
            T: fkd,
            repeated: !0
        }
    ]), _kd = k.makeMessageType("aiserver.v1.CheckBugBotPriceRequest", ()=>[
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
            T: xf
        },
        {
            no: 4,
            name: "session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), bkd = k.makeMessageType("aiserver.v1.CheckBugBotPriceResponse", ()=>[
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
    ]), ykd = k.makeMessageType("aiserver.v1.AcknowledgeGracePeriodDisclaimerRequest", []), Skd = k.makeMessageType("aiserver.v1.AcknowledgeGracePeriodDisclaimerResponse", []), kkd = k.makeMessageType("aiserver.v1.CheckBugBotTelemetryHealthyRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), wkd = k.makeMessageType("aiserver.v1.CheckBugBotTelemetryHealthyResponse", ()=>[
        {
            no: 1,
            name: "is_healthy",
            kind: "scalar",
            T: 8
        }
    ]), Ckd = k.makeMessageType("aiserver.v1.RecordIdeBugReactionRequest", ()=>[
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
    ]), Tkd = k.makeMessageType("aiserver.v1.RecordIdeBugReactionResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), Ekd = k.makeMessageType("aiserver.v1.GetSuggestedBugBotIterationsRequest", ()=>[
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
            T: xf
        }
    ]), xkd = k.makeMessageType("aiserver.v1.GetSuggestedBugBotIterationsResponse", ()=>[
        {
            no: 1,
            name: "iterations",
            kind: "scalar",
            T: 5
        }
    ]), Ikd = k.makeMessageType("aiserver.v1.GetEditorBugbotAutoRunStatusRequest", []), Akd = k.makeMessageType("aiserver.v1.GetEditorBugbotAutoRunStatusResponse", ()=>[
        {
            no: 1,
            name: "should_auto_run",
            kind: "scalar",
            T: 8
        }
    ]), Rkd = k.makeMessageType("aiserver.v1.BugBotStatus", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(XHi)
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
    ]), XHi = k.makeEnum("aiserver.v1.BugBotStatus.Status", [
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
]), Dkd = k.makeMessageType("aiserver.v1.BugbotTrialNotification", ()=>[
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
    ]), rio = k.makeMessageType("aiserver.v1.StreamBugBotResponse", ()=>[
        {
            no: 1,
            name: "bug_reports",
            kind: "message",
            T: cno,
            opt: !0
        },
        {
            no: 2,
            name: "status",
            kind: "message",
            T: Rkd
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
            T: Dkd,
            opt: !0
        },
        {
            no: 5,
            name: "num_turns",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), CLn = k.makeMessageType("aiserver.v1.StreamBugBotAgenticClientMessage", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: RHi,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_client_message",
            kind: "message",
            T: W0e,
            oneof: "message"
        },
        {
            no: 3,
            name: "exec_client_control_message",
            kind: "message",
            T: Lse,
            oneof: "message"
        }
    ]), sio = k.makeMessageType("aiserver.v1.StreamBugBotAgenticServerMessage", ()=>[
        {
            no: 1,
            name: "bugbot_response",
            kind: "message",
            T: rio,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_server_message",
            kind: "message",
            T: Iee,
            oneof: "message"
        },
        {
            no: 3,
            name: "exec_server_control_message",
            kind: "message",
            T: O$t,
            oneof: "message"
        }
    ]), Mkd = k.makeMessageType("aiserver.v1.UiBestOfNJudgeCandidate", ()=>[
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
            T: y5
        }
    ]), Pkd = k.makeMessageType("aiserver.v1.StreamUiBestOfNJudgeStartRequest", ()=>[
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
            T: Mkd,
            repeated: !0
        }
    ]), Lkd = k.makeMessageType("aiserver.v1.UiBestOfNJudgeFinalResult", ()=>[
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
    ]), Nkd = k.makeMessageType("aiserver.v1.StreamUiBestOfNJudgeClientMessage", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: Pkd,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_client_message",
            kind: "message",
            T: W0e,
            oneof: "message"
        },
        {
            no: 3,
            name: "exec_client_control_message",
            kind: "message",
            T: Lse,
            oneof: "message"
        }
    ]), oio = k.makeMessageType("aiserver.v1.StreamUiBestOfNJudgeServerMessage", ()=>[
        {
            no: 1,
            name: "final_result",
            kind: "message",
            T: Lkd,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_server_message",
            kind: "message",
            T: Iee,
            oneof: "message"
        },
        {
            no: 3,
            name: "exec_server_control_message",
            kind: "message",
            T: O$t,
            oneof: "message"
        }
    ]), Okd = k.makeMessageType("aiserver.v1.ContextRerankingRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC,
            opt: !0
        },
        {
            no: 2,
            name: "chat_conversation_history",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 3,
            name: "cpp_diff_trajectories",
            kind: "message",
            T: Yj,
            repeated: !0
        },
        {
            no: 4,
            name: "candidate_files",
            kind: "message",
            T: jqs,
            repeated: !0
        }
    ]), Fkd = k.makeMessageType("aiserver.v1.ContextRerankingResponse", ()=>[
        {
            no: 1,
            name: "reranking_scores",
            kind: "scalar",
            T: 2,
            repeated: !0
        }
    ]), aio = k.makeMessageType("aiserver.v1.NameTabRequest", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "message",
            T: Uv,
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
            T: w4e,
            oneof: "credentials"
        },
        {
            no: 4,
            name: "azure_credentials",
            kind: "message",
            T: C4e,
            oneof: "credentials"
        },
        {
            no: 5,
            name: "bedrock_credentials",
            kind: "message",
            T: T4e,
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
    ]), cio = k.makeMessageType("aiserver.v1.NameTabResponse", ()=>[
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
    ]), Bkd = k.makeMessageType("aiserver.v1.TaskListItem", ()=>[
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
            T: k.getEnumType(Jno)
        },
        {
            no: 4,
            name: "note",
            kind: "scalar",
            T: 9
        }
    ]), Ukd = k.makeMessageType("aiserver.v1.KeepTaskListRequest", ()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: Bkd,
            repeated: !0
        },
        {
            no: 2,
            name: "messages",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        }
    ]), $kd = k.makeMessageType("aiserver.v1.TaskListChange", ()=>[
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
            T: k.getEnumType(Jno)
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
    ]), Hkd = k.makeMessageType("aiserver.v1.KeepTaskListResponse", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "message",
            T: $kd,
            repeated: !0
        }
    ]), Wkd = k.makeMessageType("aiserver.v1.TestModelStatusRequest", ()=>[
        {
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9
        }
    ]), Gkd = k.makeMessageType("aiserver.v1.TestModelStatusResponse", ()=>[
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
    ]), Vkd = k.makeMessageType("aiserver.v1.LlmGatewayModelTestStage", ()=>[
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
    ]), jkd = k.makeMessageType("aiserver.v1.LlmGatewayModelTestInspect", ()=>[
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
    ]), qkd = k.makeMessageType("aiserver.v1.LlmGatewayModelTestUsage", ()=>[
        {
            no: 1,
            name: "billed",
            kind: "scalar",
            T: 8
        }
    ]), zkd = k.makeMessageType("aiserver.v1.LlmGatewayConnectionTesterRequest", ()=>[
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
    ]), Kkd = k.makeMessageType("aiserver.v1.LlmGatewayConnectionTesterResponse", ()=>[
        {
            no: 1,
            name: "stages",
            kind: "message",
            T: Vkd,
            repeated: !0
        },
        {
            no: 2,
            name: "inspect",
            kind: "message",
            T: jkd
        },
        {
            no: 3,
            name: "usage",
            kind: "message",
            T: qkd
        }
    ]), Ykd = k.makeMessageType("aiserver.v1.TestTeamInferenceHookConnectionRequest", ()=>[
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
            T: Xkd
        },
        {
            no: 4,
            name: "verdict_timeout_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), Xkd = k.makeMessageType("aiserver.v1.TestTeamInferenceHookConnectionRequest.Headers", ()=>[
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
}), Zkd = k.makeMessageType("aiserver.v1.TestTeamInferenceHookConnectionResponse", ()=>[
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
            T: k.getEnumType(JSd)
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
    ]), lio = k.makeMessageType("aiserver.v1.EvaluatePromptHookRequest", ()=>[
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
            T: EW
        },
        {
            no: 3,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Qkd = k.makeMessageType("aiserver.v1.EvaluatePromptHookResponse", ()=>[
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
    ]), uio = k.makeMessageType("aiserver.v1.ComputerUseAxElement", ()=>[
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
    ]), Jkd = k.makeMessageType("aiserver.v1.ComputerUsePastAction", ()=>[
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
            T: uio,
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
    ]), ewd = k.makeMessageType("aiserver.v1.ComputerUseTreeDiff", ()=>[
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
    ]), twd = k.makeMessageType("aiserver.v1.ComputerUseDecideNextActionRequest", ()=>[
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
            T: uio,
            repeated: !0
        },
        {
            no: 7,
            name: "actions",
            kind: "message",
            T: Jkd,
            repeated: !0
        },
        {
            no: 8,
            name: "changed_since_last_action",
            kind: "message",
            T: ewd,
            opt: !0
        }
    ]), ZHi = k.makeMessageType("aiserver.v1.ComputerUseActionChoice", ()=>[
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
    ]), nwd = k.makeMessageType("aiserver.v1.ComputerUseDecideNextActionResponse", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "message",
            T: ZHi
        },
        {
            no: 2,
            name: "item",
            kind: "message",
            T: ZHi
        },
        {
            no: 3,
            name: "key",
            kind: "message",
            T: ZHi
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
    ]), iwd = k.makeMessageType("aiserver.v1.TryParseTypeScriptTreeSitterRequest", ()=>[
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
    ]), rwd = k.makeMessageType("aiserver.v1.TryParseTypeScriptTreeSitterResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), swd = k.makeMessageType("aiserver.v1.DevOnlyGetPastRequestIdsRequest", ()=>[
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
    ]), owd = k.makeMessageType("aiserver.v1.DevOnlyPastRequest", ()=>[
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
    ]), awd = k.makeMessageType("aiserver.v1.DevOnlyGetPastRequestIdsResponse", ()=>[
        {
            no: 1,
            name: "past_requests",
            kind: "message",
            T: owd,
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
    ]), cwd = k.makeMessageType("aiserver.v1.GetCodebaseQuestionsResponse", ()=>[
        {
            no: 1,
            name: "questions",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), lwd = k.makeMessageType("aiserver.v1.AtSymbolOption", ()=>[
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
    ]), uwd = k.makeMessageType("aiserver.v1.AtSymbolDependencyInformation", ()=>[
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
    ]), dwd = k.makeMessageType("aiserver.v1.GetAtSymbolSuggestionsRequest", ()=>[
        {
            no: 1,
            name: "current_file_info",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "at_symbol_dependencies",
            kind: "message",
            T: uwd,
            repeated: !0
        },
        {
            no: 3,
            name: "at_symbol_options",
            kind: "message",
            T: lwd,
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
            T: xf
        }
    ]), hwd = k.makeMessageType("aiserver.v1.GetAtSymbolSuggestionsResponse", ()=>[
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
    ]), pwd = k.makeMessageType("aiserver.v1.CurrentFolderFileOrFolder", ()=>[
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
    ]), mwd = k.makeMessageType("aiserver.v1.GetTerminalCompletionRequest", ()=>[
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
            T: Yj,
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
            T: xf
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
            T: pwd,
            repeated: !0
        },
        {
            no: 12,
            name: "relevant_files",
            kind: "message",
            T: ffe,
            repeated: !0
        }
    ]), gwd = k.makeMessageType("aiserver.v1.GetTerminalCompletionResponse", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        }
    ]), fwd = k.makeMessageType("aiserver.v1.HeuristicsSelection", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: k.getEnumType(vwd)
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
    ]), vwd = k.makeEnum("aiserver.v1.HeuristicsSelection.HeuristicsSelectionType", [
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
]), _wd = k.makeMessageType("aiserver.v1.CalculateAutoSelectionRequest", ()=>[
        {
            no: 1,
            name: "current_file_info",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "cursor_position",
            kind: "message",
            T: a6
        },
        {
            no: 3,
            name: "selection_range",
            kind: "message",
            T: x3
        },
        {
            no: 4,
            name: "model_details",
            kind: "message",
            T: xf
        },
        {
            no: 5,
            name: "heuristics_selections",
            kind: "message",
            T: fwd,
            repeated: !0
        }
    ]), bwd = k.makeMessageType("aiserver.v1.AutoSelectionInstructions", ()=>[
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
    ]), ywd = k.makeMessageType("aiserver.v1.AutoSelectionResult", ()=>[
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
            T: bwd,
            repeated: !0
        }
    ]), Swd = k.makeMessageType("aiserver.v1.CalculateAutoSelectionResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: ywd,
            repeated: !0
        }
    ]), kwd = k.makeMessageType("aiserver.v1.BackgroundCmdKRequest", ()=>[
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
            T: ZC
        },
        {
            no: 3,
            name: "selection_range",
            kind: "message",
            T: x3
        },
        {
            no: 4,
            name: "type",
            kind: "enum",
            T: k.getEnumType(wwd)
        },
        {
            no: 5,
            name: "proposed_change_history",
            kind: "message",
            T: Ewd,
            repeated: !0
        },
        {
            no: 6,
            name: "related_code_blocks",
            kind: "message",
            T: kD,
            repeated: !0
        },
        {
            no: 7,
            name: "diff_history",
            kind: "message",
            T: Yj,
            repeated: !0
        },
        {
            no: 8,
            name: "linter_errors",
            kind: "message",
            T: dio,
            repeated: !0
        },
        {
            no: 9,
            name: "useful_types",
            kind: "message",
            T: xwd,
            repeated: !0
        },
        {
            no: 10,
            name: "recently_viewed_files",
            kind: "message",
            T: Iwd,
            repeated: !0
        },
        {
            no: 11,
            name: "recent_diffs",
            kind: "message",
            T: Rwd,
            repeated: !0
        },
        {
            no: 12,
            name: "multiple_completions",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), wwd = k.makeEnum("aiserver.v1.BackgroundCmdKRequest.Type", [
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
]), dio = k.makeMessageType("aiserver.v1.BackgroundCmdKRequest.Lint", ()=>[
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
            T: Cwd,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKRequest_Lint"
}), Cwd = k.makeMessageType("aiserver.v1.BackgroundCmdKRequest.Lint.QuickFix", ()=>[
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
            T: Twd,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKRequest_Lint_QuickFix"
}), Twd = k.makeMessageType("aiserver.v1.BackgroundCmdKRequest.Lint.QuickFix.Edit", ()=>[
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
}), Ewd = k.makeMessageType("aiserver.v1.BackgroundCmdKRequest.ProposedChange", ()=>[
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
            T: dio,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKRequest_ProposedChange"
}), xwd = k.makeMessageType("aiserver.v1.BackgroundCmdKRequest.UsefulType", ()=>[
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
}), Iwd = k.makeMessageType("aiserver.v1.BackgroundCmdKRequest.RecentlyViewedFile", ()=>[
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
            T: Awd,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKRequest_RecentlyViewedFile"
}), Awd = k.makeMessageType("aiserver.v1.BackgroundCmdKRequest.RecentlyViewedFile.VisibleRange", ()=>[
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
}), Rwd = k.makeMessageType("aiserver.v1.BackgroundCmdKRequest.Diff", ()=>[
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
}), Dwd = k.makeMessageType("aiserver.v1.BackgroundCmdKResponse", ()=>[
        {
            no: 1,
            name: "proposed_change",
            kind: "scalar",
            T: 9
        }
    ]), Mwd = k.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest", ()=>[
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
            T: ZC
        },
        {
            no: 3,
            name: "selection_range",
            kind: "message",
            T: x3
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
            T: k.getEnumType(Pwd)
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
            T: Fwd,
            repeated: !0
        },
        {
            no: 8,
            name: "commit_notes",
            kind: "message",
            T: Mss,
            repeated: !0
        },
        {
            no: 9,
            name: "related_code_blocks",
            kind: "message",
            T: kD,
            repeated: !0
        }
    ]), Pwd = k.makeEnum("aiserver.v1.BackgroundCmdKEvalRequest.Experiment", [
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
]), Lwd = k.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest.Lint", ()=>[
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
            T: Nwd,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKEvalRequest_Lint"
}), Nwd = k.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest.Lint.QuickFix", ()=>[
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
            T: Owd,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKEvalRequest_Lint_QuickFix"
}), Owd = k.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest.Lint.QuickFix.Edit", ()=>[
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
}), Fwd = k.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest.ProposedChange", ()=>[
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
            T: Lwd,
            repeated: !0
        }
    ], {
    localName: "BackgroundCmdKEvalRequest_ProposedChange"
}), Bwd = k.makeMessageType("aiserver.v1.BackgroundCmdKEvalResponse", ()=>[
        {
            no: 1,
            name: "proposed_change",
            kind: "scalar",
            T: 9
        }
    ]), Uwd = k.makeMessageType("aiserver.v1.GetThoughtAnnotationRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        }
    ]), hio = k.makeMessageType("aiserver.v1.UpdateVscodeProfileRequest", ()=>[
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
    ]), $wd = k.makeMessageType("aiserver.v1.UpdateVscodeProfileResponse", []), Hwd = k.makeMessageType("aiserver.v1.GetThoughtAnnotationResponse", ()=>[
        {
            no: 1,
            name: "thought_annotation",
            kind: "message",
            T: Wwd
        }
    ]), Wwd = k.makeMessageType("aiserver.v1.AiThoughtAnnotation", ()=>[
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
            T: gfe
        },
        {
            no: 4,
            name: "thought",
            kind: "scalar",
            T: 9
        }
    ]), Gwd = k.makeMessageType("aiserver.v1.BulkEmbedRequest", ()=>[
        {
            no: 1,
            name: "texts",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Vwd = k.makeMessageType("aiserver.v1.BulkEmbedResponse", ()=>[
        {
            no: 1,
            name: "embeddings",
            kind: "message",
            T: jwd,
            repeated: !0
        }
    ]), jwd = k.makeMessageType("aiserver.v1.EmbeddingResponse", ()=>[
        {
            no: 1,
            name: "embedding",
            kind: "scalar",
            T: 1,
            repeated: !0
        }
    ]), qwd = k.makeMessageType("aiserver.v1.TakeNotesOnCommitDiffRequest", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: qVc
        },
        {
            no: 2,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        }
    ]), zwd = k.makeMessageType("aiserver.v1.TakeNotesOnCommitDiffResponse", ()=>[
        {
            no: 1,
            name: "notes",
            kind: "message",
            T: jVc,
            repeated: !0
        }
    ]), Kwd = k.makeMessageType("aiserver.v1.IsCursorPredictionEnabledRequest", []), Ywd = k.makeMessageType("aiserver.v1.IsCursorPredictionEnabledResponse", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        }
    ]), Xwd = k.makeMessageType("aiserver.v1.StreamNextCursorPredictionRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
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
            T: oN,
            opt: !0
        },
        {
            no: 13,
            name: "context_items",
            kind: "message",
            T: OHi,
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
            T: Yj,
            repeated: !0
        },
        {
            no: 8,
            name: "merged_diff_histories",
            kind: "message",
            T: Yj,
            repeated: !0
        },
        {
            no: 9,
            name: "block_diff_patches",
            kind: "message",
            T: WHi,
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
            T: bno,
            repeated: !0
        },
        {
            no: 15,
            name: "lsp_contexts",
            kind: "message",
            T: DHi,
            repeated: !0
        },
        {
            no: 16,
            name: "cpp_intent_info",
            kind: "message",
            T: gno,
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
            T: CHt,
            repeated: !0
        },
        {
            no: 20,
            name: "file_visible_ranges",
            kind: "message",
            T: mio,
            repeated: !0
        }
    ]), pio = k.makeMessageType("aiserver.v1.StreamNextCursorPredictionRequest.VisibleRange", ()=>[
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
}), mio = k.makeMessageType("aiserver.v1.StreamNextCursorPredictionRequest.FileVisibleRange", ()=>[
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
            T: pio,
            repeated: !0
        }
    ], {
    localName: "StreamNextCursorPredictionRequest_FileVisibleRange"
}), Zwd = k.makeMessageType("aiserver.v1.StreamNextCursorPredictionResponse", ()=>[
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
    ]), Qwd = k.makeMessageType("aiserver.v1.StreamWebCmdKV1Request", ()=>[
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
            T: c6
        },
        {
            no: 5,
            name: "model_details",
            kind: "message",
            T: xf
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: Vle,
            repeated: !0
        }
    ]), Jwd = k.makeMessageType("aiserver.v1.StreamWebCmdKV1Response", ()=>[
        {
            no: 1,
            name: "cmd_k_response",
            kind: "message",
            T: SLn
        }
    ]), eCd = k.makeMessageType("aiserver.v1.ContextScoresRequest", ()=>[
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
    ]), tCd = k.makeMessageType("aiserver.v1.ContextScoresResponse", ()=>[
        {
            no: 1,
            name: "scores",
            kind: "scalar",
            T: 2,
            repeated: !0
        }
    ]), nCd = k.makeMessageType("aiserver.v1.ReportGenerationFeedbackRequest", ()=>[
        {
            no: 1,
            name: "feedback_type",
            kind: "enum",
            T: k.getEnumType(eUe)
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
            T: k.getEnumType(gio)
        }
    ]), eUe = k.makeEnum("aiserver.v1.ReportGenerationFeedbackRequest.FeedbackType", [
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
]), gio = k.makeEnum("aiserver.v1.ReportGenerationFeedbackRequest.Source", [
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
]), iCd = k.makeMessageType("aiserver.v1.ReportGenerationFeedbackResponse", []), rCd = k.makeMessageType("aiserver.v1.ReportAgentFeedbackRequest", ()=>[
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
            T: k.getEnumType(TLn)
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
            T: k.getEnumType(QHi),
            opt: !0
        },
        {
            no: 7,
            name: "variant",
            kind: "enum",
            T: k.getEnumType(JHi),
            opt: !0
        }
    ]), TLn = k.makeEnum("aiserver.v1.ReportAgentFeedbackRequest.Sentiment", [
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
]), QHi = k.makeEnum("aiserver.v1.ReportAgentFeedbackRequest.Source", [
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
]), JHi = k.makeEnum("aiserver.v1.ReportAgentFeedbackRequest.Variant", [
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
]), sCd = k.makeMessageType("aiserver.v1.ReportAgentFeedbackResponse", []), oCd = k.makeMessageType("aiserver.v1.ReportAgentMessageFeedbackRequest", ()=>[
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
    ]), aCd = k.makeMessageType("aiserver.v1.ReportAgentMessageFeedbackResponse", ()=>[
        {
            no: 1,
            name: "s3_uri",
            kind: "scalar",
            T: 9
        }
    ]), cCd = k.makeMessageType("aiserver.v1.ReportAutoRoutingResultFeedbackRequest", ()=>[
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
    ]), lCd = k.makeMessageType("aiserver.v1.ReportAutoRoutingResultFeedbackResponse", []), uCd = k.makeMessageType("aiserver.v1.ShowWelcomeScreenRequest", []), dCd = k.makeMessageType("aiserver.v1.ShowWelcomeScreenResponse", ()=>[
        {
            no: 1,
            name: "enable_cards",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), hCd = k.makeMessageType("aiserver.v1.AiProjectRequest", ()=>[
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
            T: xf
        }
    ]), pCd = k.makeMessageType("aiserver.v1.AiProjectResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), mCd = k.makeMessageType("aiserver.v1.ToCamelCaseRequest", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), gCd = k.makeMessageType("aiserver.v1.ToCamelCaseResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), fCd = k.makeMessageType("aiserver.v1.StreamPriomptPromptRequest", ()=>[
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
            T: xf
        }
    ]), vCd = k.makeMessageType("aiserver.v1.StreamPriomptPromptResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), fio = k.makeMessageType("aiserver.v1.CheckFeatureStatusRequest", ()=>[
        {
            no: 1,
            name: "feature_name",
            kind: "scalar",
            T: 9
        }
    ]), _Cd = k.makeMessageType("aiserver.v1.CheckFeaturesStatusRequest", ()=>[
        {
            no: 1,
            name: "feature_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), bCd = k.makeMessageType("aiserver.v1.CheckFeaturesStatusResponse", ()=>[
        {
            no: 1,
            name: "feature_statuses",
            kind: "message",
            T: yCd,
            repeated: !0
        }
    ]), yCd = k.makeMessageType("aiserver.v1.CheckFeaturesStatusResponse.FeatureStatus", ()=>[
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
}), SCd = k.makeMessageType("aiserver.v1.GetEffectiveTokenLimitRequest", ()=>[
        {
            no: 1,
            name: "model_details",
            kind: "message",
            T: xf
        }
    ]), kCd = k.makeMessageType("aiserver.v1.GetEffectiveTokenLimitResponse", ()=>[
        {
            no: 1,
            name: "token_limit",
            kind: "scalar",
            T: 5
        }
    ]), vio = k.makeMessageType("aiserver.v1.CheckFeatureStatusResponse", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        }
    ]), _io = k.makeMessageType("aiserver.v1.CheckNumberConfigRequest", ()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        }
    ]), bio = k.makeMessageType("aiserver.v1.CheckNumberConfigResponse", ()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]), wCd = k.makeMessageType("aiserver.v1.CheckNumberConfigsRequest", ()=>[
        {
            no: 1,
            name: "config_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), CCd = k.makeMessageType("aiserver.v1.CheckNumberConfigsResponse", ()=>[
        {
            no: 1,
            name: "configs",
            kind: "message",
            T: TCd,
            repeated: !0
        }
    ]), TCd = k.makeMessageType("aiserver.v1.CheckNumberConfigsResponse.Config", ()=>[
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
}), ECd = k.makeMessageType("aiserver.v1.IntentPredictionRequest", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 2,
            name: "context_options",
            kind: "message",
            T: DCd
        },
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: xf
        }
    ]), xCd = k.makeMessageType("aiserver.v1.IntentPredictionResponse", ()=>[
        {
            no: 1,
            name: "chosen_documentation",
            kind: "message",
            T: ICd
        },
        {
            no: 2,
            name: "chosen_file_contents",
            kind: "message",
            T: ACd
        },
        {
            no: 3,
            name: "chosen_linter_diagnostics",
            kind: "message",
            T: RCd
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
    ]), ICd = k.makeMessageType("aiserver.v1.IntentPredictionResponse.ChosenDocumentation", ()=>[
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
}), ACd = k.makeMessageType("aiserver.v1.IntentPredictionResponse.ChosenFileContents", [], {
    localName: "IntentPredictionResponse_ChosenFileContents"
}), RCd = k.makeMessageType("aiserver.v1.IntentPredictionResponse.ChosenLinterDiagnostics", ()=>[
        {
            no: 1,
            name: "diagnostic_indices",
            kind: "scalar",
            T: 5,
            repeated: !0
        }
    ], {
    localName: "IntentPredictionResponse_ChosenLinterDiagnostics"
}), DCd = k.makeMessageType("aiserver.v1.ContextOptions", ()=>[
        {
            no: 1,
            name: "all_documentation",
            kind: "message",
            T: MCd
        },
        {
            no: 2,
            name: "current_file_contents",
            kind: "message",
            T: LCd
        },
        {
            no: 3,
            name: "linter_diagnostics",
            kind: "message",
            T: NCd
        },
        {
            no: 4,
            name: "global_context",
            kind: "message",
            T: OCd
        }
    ]), MCd = k.makeMessageType("aiserver.v1.ContextOptions.AllDocumentation", ()=>[
        {
            no: 1,
            name: "available_docs",
            kind: "message",
            T: PCd,
            repeated: !0
        }
    ], {
    localName: "ContextOptions_AllDocumentation"
}), PCd = k.makeMessageType("aiserver.v1.ContextOptions.AllDocumentation.Documentation", ()=>[
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
}), LCd = k.makeMessageType("aiserver.v1.ContextOptions.CurrentFileContents", ()=>[
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
            T: a6
        },
        {
            no: 4,
            name: "dataframes",
            kind: "message",
            T: ZSi,
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
            T: ej
        }
    ], {
    localName: "ContextOptions_CurrentFileContents"
}), NCd = k.makeMessageType("aiserver.v1.ContextOptions.LinterDiagnostics", ()=>[
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
            T: yio,
            repeated: !0
        }
    ], {
    localName: "ContextOptions_LinterDiagnostics"
}), yio = k.makeMessageType("aiserver.v1.ContextOptions.LinterDiagnostics.Diagnostic", ()=>[
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
            T: ej
        },
        {
            no: 4,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextOptions_LinterDiagnostics_Diagnostic"
}), OCd = k.makeMessageType("aiserver.v1.ContextOptions.GlobalContext", [], {
    localName: "ContextOptions_GlobalContext"
}), FCd = k.makeMessageType("aiserver.v1.StreamCursorTutorRequest", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: xf
        }
    ]), BCd = k.makeMessageType("aiserver.v1.StreamCursorTutorResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), Sio = k.makeMessageType("aiserver.v1.ModelQueryRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: w1,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: OO
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
            T: kD,
            repeated: !0
        },
        {
            no: 7,
            name: "model_details",
            kind: "message",
            T: xf
        },
        {
            no: 8,
            name: "query_type",
            kind: "enum",
            T: k.getEnumType(UCd)
        },
        {
            no: 9,
            name: "repository_info",
            kind: "message",
            T: w1
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
    ]), UCd = k.makeEnum("aiserver.v1.ModelQueryRequest.QueryType", [
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
]), $Cd = k.makeMessageType("aiserver.v1.ModelQueryResponse", ()=>[
        {
            no: 1,
            name: "queries",
            kind: "message",
            T: HCd,
            repeated: !0
        }
    ]), HCd = k.makeMessageType("aiserver.v1.ModelQueryResponse.Query", ()=>[
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
}), WCd = k.makeMessageType("aiserver.v1.ModelQueryResponseV2", ()=>[
        {
            no: 1,
            name: "query",
            kind: "message",
            T: GCd,
            oneof: "query_or_reasoning"
        },
        {
            no: 2,
            name: "reasoning",
            kind: "scalar",
            T: 9,
            oneof: "query_or_reasoning"
        }
    ]), GCd = k.makeMessageType("aiserver.v1.ModelQueryResponseV2.QueryItem", ()=>[
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
}), VCd = k.makeMessageType("aiserver.v1.ApiDetails", ()=>[
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
    ]), eWi = k.makeMessageType("aiserver.v1.FullFileSearchResult", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: Zgu,
            repeated: !0
        }
    ]), ELn = k.makeMessageType("aiserver.v1.CodeSearchResult", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: YO,
            repeated: !0
        },
        {
            no: 2,
            name: "all_files",
            kind: "message",
            T: ffe,
            repeated: !0
        }
    ]), jCd = k.makeMessageType("aiserver.v1.RerankerRequest", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: YO,
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
            T: ZC
        },
        {
            no: 5,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 6,
            name: "api_details",
            kind: "message",
            T: VCd
        },
        {
            no: 7,
            name: "file_search_results",
            kind: "message",
            T: eWi,
            oneof: "context_results"
        },
        {
            no: 8,
            name: "code_search_results",
            kind: "message",
            T: ELn,
            oneof: "context_results"
        }
    ]), qCd = k.makeMessageType("aiserver.v1.RerankerResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: YO,
            repeated: !0
        }
    ]), zCd = k.makeMessageType("aiserver.v1.GenerateTldrRequest", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), KCd = k.makeMessageType("aiserver.v1.GenerateTldrResponse", ()=>[
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
    ]), YCd = k.makeMessageType("aiserver.v1.TaskStreamChatContextRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: w1,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: OO
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
            T: kD,
            repeated: !0
        },
        {
            no: 7,
            name: "model_details",
            kind: "message",
            T: xf
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
            T: oN
        },
        {
            no: 15,
            name: "advanced_codebase_context",
            kind: "message",
            T: XCd
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
    ]), XCd = k.makeMessageType("aiserver.v1.AdvancedCodebaseContextOptions", ()=>[
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
            T: k.getEnumType(rgu)
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
            T: k.getEnumType(ogu),
            opt: !0
        }
    ]), ZCd = k.makeMessageType("aiserver.v1.TaskStreamChatContextResponse", ()=>[
        {
            no: 1,
            name: "output",
            kind: "message",
            T: QCd,
            oneof: "response"
        },
        {
            no: 2,
            name: "gathering_step",
            kind: "message",
            T: e0d,
            oneof: "response"
        },
        {
            no: 3,
            name: "gathering_file",
            kind: "message",
            T: JCd,
            oneof: "response"
        },
        {
            no: 4,
            name: "reranking_step",
            kind: "message",
            T: t0d,
            oneof: "response"
        },
        {
            no: 5,
            name: "reranking_file",
            kind: "message",
            T: n0d,
            oneof: "response"
        },
        {
            no: 6,
            name: "reasoning_step",
            kind: "message",
            T: i0d,
            oneof: "response"
        },
        {
            no: 7,
            name: "reasoning_substep",
            kind: "message",
            T: r0d,
            oneof: "response"
        }
    ]), QCd = k.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.Output", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "TaskStreamChatContextResponse_Output"
}), JCd = k.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.GatheringFile", ()=>[
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
            T: x3
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
}), e0d = k.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.GatheringStep", ()=>[
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
}), t0d = k.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.RerankingStep", ()=>[
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
}), n0d = k.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.RerankingFile", ()=>[
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
            T: x3
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
}), i0d = k.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.ReasoningStep", ()=>[
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
}), r0d = k.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.ReasoningSubstep", ()=>[
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
}), s0d = k.makeMessageType("aiserver.v1.TaskStreamChatContextResponseWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: ZCd,
            oneof: "response"
        },
        {
            no: 2,
            name: "background_task_uuid",
            kind: "scalar",
            T: 9,
            oneof: "response"
        }
    ]), kio = k.makeMessageType("aiserver.v1.StreamChatContextRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: w1,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: OO
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
            T: kD,
            repeated: !0
        },
        {
            no: 7,
            name: "model_details",
            kind: "message",
            T: xf
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
            T: o0d
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
            T: eWi,
            oneof: "context_results"
        },
        {
            no: 13,
            name: "code_search_results",
            kind: "message",
            T: ELn,
            oneof: "context_results"
        },
        {
            no: 14,
            name: "linter_errors",
            kind: "message",
            T: oN
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
    ]), o0d = k.makeMessageType("aiserver.v1.StreamChatContextRequest.CodeContext", ()=>[
        {
            no: 1,
            name: "chunks",
            kind: "message",
            T: kD,
            repeated: !0
        },
        {
            no: 2,
            name: "scored_chunks",
            kind: "message",
            T: YO,
            repeated: !0
        }
    ], {
    localName: "StreamChatContextRequest_CodeContext"
}), wio = k.makeMessageType("aiserver.v1.StreamChatContextResponse", ()=>[
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
            T: zDn
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
            T: a0d
        },
        {
            no: 7,
            name: "code_link",
            kind: "message",
            T: c0d
        },
        {
            no: 8,
            name: "chunk_identity",
            kind: "message",
            T: l0d,
            opt: !0
        },
        {
            no: 9,
            name: "docs_reference",
            kind: "message",
            T: h$t,
            opt: !0
        },
        {
            no: 10,
            name: "symbol_link",
            kind: "message",
            T: g$t,
            opt: !0
        },
        {
            no: 11,
            name: "file_link",
            kind: "message",
            T: YDn,
            opt: !0
        }
    ]), a0d = k.makeMessageType("aiserver.v1.StreamChatContextResponse.UsedCode", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: YO,
            repeated: !0
        }
    ], {
    localName: "StreamChatContextResponse_UsedCode"
}), c0d = k.makeMessageType("aiserver.v1.StreamChatContextResponse.CodeLink", ()=>[
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
}), l0d = k.makeMessageType("aiserver.v1.StreamChatContextResponse.ChunkIdentity", ()=>[
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
            T: k.getEnumType(qDn)
        }
    ], {
    localName: "StreamChatContextResponse_ChunkIdentity"
}), u0d = k.makeMessageType("aiserver.v1.StreamChatDeepContextRequest", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 2,
            name: "explicit_context",
            kind: "message",
            T: OO
        },
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: xf
        },
        {
            no: 4,
            name: "context_results",
            kind: "message",
            T: nfu
        },
        {
            no: 5,
            name: "rerank_results",
            kind: "scalar",
            T: 8
        }
    ]), d0d = k.makeMessageType("aiserver.v1.StreamChatDeepContextResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), h0d = k.makeMessageType("aiserver.v1.DocumentationInfo", ()=>[
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
            T: bjs
        }
    ]), p0d = k.makeMessageType("aiserver.v1.AvailableDocsRequest", ()=>[
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
    ]), m0d = k.makeMessageType("aiserver.v1.AvailableDocsResponse", ()=>[
        {
            no: 1,
            name: "docs",
            kind: "message",
            T: h0d,
            repeated: !0
        }
    ]), g0d = k.makeMessageType("aiserver.v1.RunWebSearchRequest", ()=>[
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
    ]), f0d = k.makeMessageType("aiserver.v1.WebSearchDocument", ()=>[
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
    ]), v0d = k.makeMessageType("aiserver.v1.RunWebSearchResponse", ()=>[
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
            T: f0d,
            repeated: !0
        }
    ]), _0d = k.makeMessageType("aiserver.v1.RunWebFetchRequest", ()=>[
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
    ]), b0d = k.makeMessageType("aiserver.v1.RunWebFetchSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), y0d = k.makeMessageType("aiserver.v1.RunWebFetchError", ()=>[
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
    ]), S0d = k.makeMessageType("aiserver.v1.RunWebFetchResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: b0d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: y0d,
            oneof: "result"
        }
    ]), tWi = k.makeMessageType("aiserver.v1.GenerateImageReferenceImage", ()=>[
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
    ]), k0d = k.makeMessageType("aiserver.v1.RunGenerateImageRequest", ()=>[
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
            T: tWi,
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
    ]), w0d = k.makeMessageType("aiserver.v1.RunGenerateImageSuccess", ()=>[
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
    ]), C0d = k.makeMessageType("aiserver.v1.RunGenerateImageError", ()=>[
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
    ]), T0d = k.makeMessageType("aiserver.v1.RunGenerateImageResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: w0d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: C0d,
            oneof: "result"
        }
    ]), E0d = k.makeMessageType("aiserver.v1.RunGenerateVideoRequest", ()=>[
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
            T: tWi
        },
        {
            no: 3,
            name: "reference_images",
            kind: "message",
            T: tWi,
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
    ]), x0d = k.makeMessageType("aiserver.v1.RunGenerateVideoSuccess", ()=>[
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
    ]), I0d = k.makeMessageType("aiserver.v1.RunGenerateVideoError", ()=>[
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
    ]), A0d = k.makeMessageType("aiserver.v1.RunGenerateVideoResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: x0d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: I0d,
            oneof: "result"
        }
    ]), R0d = k.makeMessageType("aiserver.v1.RunXSearchRequest", ()=>[
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
    ]), D0d = k.makeMessageType("aiserver.v1.RunXSearchCitation", ()=>[
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
    ]), M0d = k.makeMessageType("aiserver.v1.RunXSearchSuccess", ()=>[
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
            T: D0d,
            repeated: !0
        }
    ]), P0d = k.makeMessageType("aiserver.v1.RunXSearchError", ()=>[
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
    ]), L0d = k.makeMessageType("aiserver.v1.RunXSearchResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: M0d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: P0d,
            oneof: "result"
        }
    ]), N0d = k.makeMessageType("aiserver.v1.ClassifyAgentAutoReviewRequest", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: F8i
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
    ]), O0d = k.makeMessageType("aiserver.v1.ClassifyAgentAutoReviewResponse", ()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: B8i
        }
    ]), F0d = k.makeMessageType("aiserver.v1.RunDescribeImageRequest", ()=>[
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
    ]), B0d = k.makeMessageType("aiserver.v1.RunDescribeImageResponse", ()=>[
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
    ]), U0d = k.makeMessageType("aiserver.v1.DetectShellHangRequest", ()=>[
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
    ]), $0d = k.makeMessageType("aiserver.v1.DetectShellHangResponse", ()=>[
        {
            no: 1,
            name: "hanging",
            kind: "scalar",
            T: 8
        }
    ]), H0d = k.makeMessageType("aiserver.v1.ThrowErrorCheckRequest", ()=>[
        {
            no: 1,
            name: "error",
            kind: "enum",
            T: k.getEnumType(io)
        }
    ]), W0d = k.makeMessageType("aiserver.v1.ThrowErrorCheckResponse", []), Cio = k.makeMessageType("aiserver.v1.AvailableModelsRequest", ()=>[
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
            T: k.getEnumType(ekd),
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
            T: j3
        },
        {
            no: 17,
            name: "client_llm_gateway_credential",
            kind: "message",
            T: WDn,
            opt: !0
        },
        {
            no: 18,
            name: "refresh_llm_gateway_models",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), G0d = k.makeMessageType("aiserver.v1.AvailableModelsResponse", ()=>[
        {
            no: 2,
            name: "models",
            kind: "message",
            T: iWi,
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
            T: tUe,
            opt: !0
        },
        {
            no: 5,
            name: "cmd_k_model_config",
            kind: "message",
            T: tUe,
            opt: !0
        },
        {
            no: 6,
            name: "background_composer_model_config",
            kind: "message",
            T: tUe,
            opt: !0
        },
        {
            no: 7,
            name: "plan_execution_model_config",
            kind: "message",
            T: tUe,
            opt: !0
        },
        {
            no: 8,
            name: "spec_model_config",
            kind: "message",
            T: tUe,
            opt: !0
        },
        {
            no: 9,
            name: "deep_search_model_config",
            kind: "message",
            T: tUe,
            opt: !0
        },
        {
            no: 10,
            name: "quick_agent_model_config",
            kind: "message",
            T: tUe,
            opt: !0
        },
        {
            no: 16,
            name: "subagent_model_configs",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: tUe
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
            T: Y0d
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
    ]), LJe = k.makeEnum("aiserver.v1.AvailableModelsResponse.DegradationStatus", [
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
]), RHt = k.makeEnum("aiserver.v1.AvailableModelsResponse.ModelVendorId", [
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
]), nWi = k.makeMessageType("aiserver.v1.AvailableModelsResponse.TooltipData", ()=>[
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
}), V0d = k.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelVendor", ()=>[
        {
            no: 1,
            name: "id",
            kind: "enum",
            T: k.getEnumType(RHt)
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AvailableModelsResponse_ModelVendor"
}), Tio = k.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerBadge", ()=>[
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
            T: k.getEnumType(j0d)
        },
        {
            no: 3,
            name: "dismiss_on_selection",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "AvailableModelsResponse_ModelPickerBadge"
}), j0d = k.makeEnum("aiserver.v1.AvailableModelsResponse.ModelPickerBadge.Variant", [
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
]), iWi = k.makeMessageType("aiserver.v1.AvailableModelsResponse.AvailableModel", ()=>[
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
            T: k.getEnumType(LJe),
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
            T: nWi,
            opt: !0
        },
        {
            no: 20,
            name: "tooltip_data_for_max_mode",
            kind: "message",
            T: nWi,
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
            T: i1d,
            repeated: !0
        },
        {
            no: 30,
            name: "variants",
            kind: "message",
            T: q0d,
            repeated: !0
        },
        {
            no: 32,
            name: "cloud_agent_effort_mode",
            kind: "enum",
            T: k.getEnumType(YHi),
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
            T: V0d,
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
            T: k.getEnumType(YHi),
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
            T: Tio,
            repeated: !0
        }
    ], {
    localName: "AvailableModelsResponse_AvailableModel"
}), q0d = k.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelVariantConfig", ()=>[
        {
            no: 1,
            name: "parameter_values",
            kind: "message",
            T: w2,
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
            T: nWi,
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
            T: z0d,
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
}), z0d = k.makeMessageType("aiserver.v1.AvailableModelsResponse.ConfirmationDialogue", ()=>[
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
            T: k.getEnumType(K0d),
            opt: !0
        }
    ], {
    localName: "AvailableModelsResponse_ConfirmationDialogue"
}), K0d = k.makeEnum("aiserver.v1.AvailableModelsResponse.ConfirmationDialogue.Presentation", [
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
]), tUe = k.makeMessageType("aiserver.v1.AvailableModelsResponse.FeatureModelConfig", ()=>[
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
}), Y0d = k.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration", ()=>[
        {
            no: 1,
            name: "routed_model_view_config",
            kind: "message",
            T: X0d
        },
        {
            no: 2,
            name: "named_models_view_config",
            kind: "message",
            T: J0d
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
}), X0d = k.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.RoutedModelViewConfig", ()=>[
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
            T: Z0d,
            opt: !0
        },
        {
            no: 3,
            name: "routed_model_view_to_named_view_button",
            kind: "message",
            T: Q0d,
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
}), Z0d = k.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.RoutedModelViewConfig.RoutedModelViewToNamedViewToggle", ()=>[
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
}), Q0d = k.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.RoutedModelViewConfig.RoutedModelViewToNamedViewButton", ()=>[
        {
            no: 1,
            name: "markdown",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_RoutedModelViewConfig_RoutedModelViewToNamedViewButton"
}), J0d = k.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.NamedModelsViewConfig", ()=>[
        {
            no: 2,
            name: "named_view_to_routed_model_view_toggle",
            kind: "message",
            T: e1d,
            opt: !0
        },
        {
            no: 3,
            name: "named_view_to_routed_model_view_no_button",
            kind: "message",
            T: t1d,
            opt: !0
        },
        {
            no: 4,
            name: "named_view_to_routed_model_view_button",
            kind: "message",
            T: n1d,
            opt: !0
        }
    ], {
    localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_NamedModelsViewConfig"
}), e1d = k.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.NamedModelsViewConfig.NamedViewToRoutedModelViewToggle", ()=>[
        {
            no: 1,
            name: "markdown",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_NamedModelsViewConfig_NamedViewToRoutedModelViewToggle"
}), t1d = k.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.NamedModelsViewConfig.NamedViewToRoutedModelViewNoButton", [], {
    localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_NamedModelsViewConfig_NamedViewToRoutedModelViewNoButton"
}), n1d = k.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.NamedModelsViewConfig.NamedViewToRoutedModelViewButton", ()=>[
        {
            no: 1,
            name: "markdown",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_NamedModelsViewConfig_NamedViewToRoutedModelViewButton"
}), i1d = k.makeMessageType("aiserver.v1.ModelParameterDefinition", ()=>[
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
            T: r1d
        },
        {
            no: 5,
            name: "is_cycleable_by_hotkey",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), r1d = k.makeMessageType("aiserver.v1.ModelParameterDefinition.ModelParameterType", ()=>[
        {
            no: 1,
            name: "boolean_parameter",
            kind: "message",
            T: s1d,
            opt: !0
        },
        {
            no: 2,
            name: "enum_parameter",
            kind: "message",
            T: a1d,
            opt: !0
        }
    ], {
    localName: "ModelParameterDefinition_ModelParameterType"
}), s1d = k.makeMessageType("aiserver.v1.ModelParameterDefinition.BooleanParameterDefinition", ()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: o1d,
            repeated: !0
        }
    ], {
    localName: "ModelParameterDefinition_BooleanParameterDefinition"
}), o1d = k.makeMessageType("aiserver.v1.ModelParameterDefinition.BooleanParameterDefinition.BooleanParameterValue", ()=>[
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
}), a1d = k.makeMessageType("aiserver.v1.ModelParameterDefinition.EnumParameterDefinition", ()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: c1d,
            repeated: !0
        }
    ], {
    localName: "ModelParameterDefinition_EnumParameterDefinition"
}), c1d = k.makeMessageType("aiserver.v1.ModelParameterDefinition.EnumParameterDefinition.EnumParameterValue", ()=>[
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
            T: Tio,
            repeated: !0
        }
    ], {
    localName: "ModelParameterDefinition_EnumParameterDefinition_EnumParameterValue"
}), l1d = k.makeMessageType("aiserver.v1.ServerTimeRequest", []), u1d = k.makeMessageType("aiserver.v1.ServerTimeResponse", ()=>[
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
    ]), Eio = k.makeMessageType("aiserver.v1.HealthCheckRequest", []), d1d = k.makeMessageType("aiserver.v1.HealthCheckResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(h1d)
        }
    ]), h1d = k.makeEnum("aiserver.v1.HealthCheckResponse.Status", [
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
]), p1d = k.makeMessageType("aiserver.v1.PrivacyCheckRequest", []), m1d = k.makeMessageType("aiserver.v1.PrivacyCheckResponse", ()=>[
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
    ]), g1d = k.makeMessageType("aiserver.v1.TimeLeftHealthCheckResponse", ()=>[
        {
            no: 1,
            name: "time_left",
            kind: "scalar",
            T: 9
        }
    ]), xio = k.makeMessageType("aiserver.v1.StreamGenerateRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: w1,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: OO
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
            T: kD,
            repeated: !0
        },
        {
            no: 9,
            name: "model_details",
            kind: "message",
            T: xf
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
            T: oN
        },
        {
            no: 12,
            name: "prompt_code_blocks",
            kind: "message",
            T: kD,
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
            T: gfe
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
            T: xio
        }
    ]), f1d = k.makeMessageType("aiserver.v1.ReviewRequest", ()=>[
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
            T: c6
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
    ]), Iio = k.makeMessageType("aiserver.v1.ReviewChatMessage", ()=>[
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
            T: k.getEnumType(v1d)
        }
    ]), v1d = k.makeEnum("aiserver.v1.ReviewChatMessage.ReviewChatMessageType", [
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
]), _1d = k.makeMessageType("aiserver.v1.ReviewChatRequest", ()=>[
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
            T: c6
        },
        {
            no: 4,
            name: "messages",
            kind: "message",
            T: Iio,
            repeated: !0
        }
    ]), b1d = k.makeMessageType("aiserver.v1.ReviewChatResponse", ()=>[
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
    ]), y1d = k.makeMessageType("aiserver.v1.ReviewBug", ()=>[
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
    ]), S1d = k.makeMessageType("aiserver.v1.ReviewResponse", ()=>[
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
            T: y1d,
            repeated: !0
        }
    ]), k1d = k.makeMessageType("aiserver.v1.SlashEditRequest", ()=>[
        {
            no: 2,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 3,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: OO
        },
        {
            no: 7,
            name: "model_details",
            kind: "message",
            T: xf
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
            T: c6,
            opt: !0
        },
        {
            no: 15,
            name: "files",
            kind: "message",
            T: ZC,
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
            T: k.getEnumType(Aio)
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
            T: k.getEnumType(qno),
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
    ]), Aio = k.makeEnum("aiserver.v1.SlashEditRequest.FastApplyModelType", [
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
]), w1d = k.makeMessageType("aiserver.v1.SlashEditResponse", ()=>[
        {
            no: 1,
            name: "cmd_k_response",
            kind: "message",
            T: SLn
        }
    ]), Rio = k.makeMessageType("aiserver.v1.SlashEditPreviousEdit", ()=>[
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
            T: c6
        }
    ]), C1d = k.makeMessageType("aiserver.v1.SlashEditFollowUpWithPreviousEditsRequest", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: xf
        },
        {
            no: 3,
            name: "previous_edits",
            kind: "message",
            T: Rio,
            repeated: !0
        }
    ]), T1d = k.makeMessageType("aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse", ()=>[
        {
            no: 1,
            name: "chat",
            kind: "message",
            T: E1d,
            oneof: "response"
        },
        {
            no: 2,
            name: "edits_to_update",
            kind: "message",
            T: x1d,
            oneof: "response"
        }
    ]), E1d = k.makeMessageType("aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse.Chat", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamSlashEditFollowUpWithPreviousEditsResponse_Chat"
}), x1d = k.makeMessageType("aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse.EditsToUpdate", ()=>[
        {
            no: 1,
            name: "previous_edits",
            kind: "message",
            T: Rio,
            repeated: !0
        }
    ], {
    localName: "StreamSlashEditFollowUpWithPreviousEditsResponse_EditsToUpdate"
}), I1d = k.makeMessageType("aiserver.v1.StreamFastEditRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: w1,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: OO
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
            T: kD,
            repeated: !0
        },
        {
            no: 9,
            name: "model_details",
            kind: "message",
            T: xf
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
            T: oN
        }
    ]), A1d = k.makeMessageType("aiserver.v1.StreamFastEditResponse", ()=>[
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
    ]), rWi = k.makeMessageType("aiserver.v1.StreamEditRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: w1,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: OO
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
            T: kD,
            repeated: !0
        },
        {
            no: 9,
            name: "model_details",
            kind: "message",
            T: xf
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
            T: oN
        },
        {
            no: 12,
            name: "prompt_code_blocks",
            kind: "message",
            T: kD,
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
            T: gfe
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
            T: rWi
        },
        {
            no: 17,
            name: "images",
            kind: "message",
            T: Vle,
            repeated: !0
        },
        {
            no: 18,
            name: "links",
            kind: "message",
            T: eki,
            repeated: !0
        },
        {
            no: 19,
            name: "rules",
            kind: "message",
            T: wRe,
            repeated: !0
        }
    ]), R1d = k.makeMessageType("aiserver.v1.PreloadEditRequest", ()=>[
        {
            no: 1,
            name: "req",
            kind: "message",
            T: rWi
        }
    ]), D1d = k.makeMessageType("aiserver.v1.PreloadEditResponse", []), M1d = k.makeMessageType("aiserver.v1.StreamAiLintBugRequest", ()=>[
        {
            no: 1,
            name: "chunks_to_analyze",
            kind: "message",
            T: Dio,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: OO
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
            T: xf
        },
        {
            no: 10,
            name: "dismissed_bugs",
            kind: "message",
            T: wLn,
            repeated: !0
        },
        {
            no: 11,
            name: "active_bugs",
            kind: "message",
            T: wLn,
            repeated: !0
        },
        {
            no: 12,
            name: "lint_rules",
            kind: "message",
            T: qSd,
            repeated: !0
        },
        {
            no: 14,
            name: "clients",
            kind: "message",
            T: P1d,
            repeated: !0
        },
        {
            no: 17,
            name: "force_enable_discriminators",
            kind: "enum",
            T: k.getEnumType(qHi),
            repeated: !0
        },
        {
            no: 18,
            name: "force_disable_discriminators",
            kind: "enum",
            T: k.getEnumType(qHi),
            repeated: !0
        },
        {
            no: 19,
            name: "force_enable_generators",
            kind: "enum",
            T: k.getEnumType(zHi),
            repeated: !0
        },
        {
            no: 20,
            name: "force_disable_generators",
            kind: "enum",
            T: k.getEnumType(zHi),
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
            T: L1d,
            opt: !0
        },
        {
            no: 16,
            name: "debug_mode",
            kind: "scalar",
            T: 8
        }
    ]), Dio = k.makeMessageType("aiserver.v1.StreamAiLintBugRequest.CodeChunk", ()=>[
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
}), P1d = k.makeMessageType("aiserver.v1.StreamAiLintBugRequest.CodeChunkList", ()=>[
        {
            no: 13,
            name: "chunks",
            kind: "message",
            T: Dio,
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
}), L1d = k.makeMessageType("aiserver.v1.StreamAiLintBugRequest.DiscriminatorOptions", ()=>[
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
}), N1d = k.makeMessageType("aiserver.v1.StreamAiLintBugResponse", ()=>[
        {
            no: 1,
            name: "bug",
            kind: "message",
            T: wLn,
            oneof: "response"
        },
        {
            no: 2,
            name: "background_task_uuid",
            kind: "scalar",
            T: 9,
            oneof: "response"
        }
    ]), O1d = k.makeMessageType("aiserver.v1.LogUserLintReplyRequest", ()=>[
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
    ]), F1d = k.makeMessageType("aiserver.v1.LogUserLintReplyResponse", []), B1d = k.makeMessageType("aiserver.v1.LogLinterExplicitUserFeedbackRequest", ()=>[
        {
            no: 1,
            name: "bug",
            kind: "message",
            T: wLn
        },
        {
            no: 3,
            name: "user_feedback",
            kind: "enum",
            T: k.getEnumType(U1d)
        },
        {
            no: 4,
            name: "user_feedback_details",
            kind: "scalar",
            T: 9
        }
    ]), U1d = k.makeEnum("aiserver.v1.LogLinterExplicitUserFeedbackRequest.LinterUserFeedback", [
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
]), $1d = k.makeMessageType("aiserver.v1.LogLinterExplicitUserFeedbackResponse", []), H1d = k.makeMessageType("aiserver.v1.StreamNewRuleRequest", ()=>[
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
    ]), W1d = k.makeMessageType("aiserver.v1.CursorHelpConversationMessage", ()=>[
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
    ]), G1d = k.makeMessageType("aiserver.v1.StreamAiCursorHelpRequest", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "message",
            T: W1d,
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
            T: xf
        }
    ]), V1d = k.makeMessageType("aiserver.v1.StreamAiCursorHelpResponse", ()=>[
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
    ]), j1d = k.makeMessageType("aiserver.v1.StreamTerminalAutocompleteRequest", ()=>[
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
            T: Yj,
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
    ]), Mio = k.makeMessageType("aiserver.v1.PseudocodeTarget", ()=>[
        {
            no: 1,
            name: "range",
            kind: "message",
            T: x3
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), q1d = k.makeMessageType("aiserver.v1.StreamPseudocodeGeneratorRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "target",
            kind: "message",
            T: Mio
        }
    ]), z1d = k.makeMessageType("aiserver.v1.StreamPseudocodeGeneratorResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), K1d = k.makeMessageType("aiserver.v1.StreamPseudocodeMapperRequest", ()=>[
        {
            no: 2,
            name: "target",
            kind: "message",
            T: Mio
        },
        {
            no: 1,
            name: "pseudocode",
            kind: "scalar",
            T: 9
        }
    ]), Y1d = k.makeMessageType("aiserver.v1.StreamPseudocodeMapperResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), X1d = k.makeMessageType("aiserver.v1.StreamTerminalAutocompleteResponse", ()=>[
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
    ]), Z1d = k.makeMessageType("aiserver.v1.DebugInfo", ()=>[
        {
            no: 1,
            name: "breakpoint",
            kind: "message",
            T: tTd
        },
        {
            no: 2,
            name: "call_stack",
            kind: "message",
            T: eTd,
            repeated: !0
        },
        {
            no: 3,
            name: "history",
            kind: "message",
            T: kD,
            repeated: !0
        }
    ]), Q1d = k.makeMessageType("aiserver.v1.DebugInfo.Variable", ()=>[
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
}), J1d = k.makeMessageType("aiserver.v1.DebugInfo.Scope", ()=>[
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
            T: Q1d,
            repeated: !0
        }
    ], {
    localName: "DebugInfo_Scope"
}), eTd = k.makeMessageType("aiserver.v1.DebugInfo.CallStackFrame", ()=>[
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
            T: J1d,
            repeated: !0
        }
    ], {
    localName: "DebugInfo_CallStackFrame"
}), tTd = k.makeMessageType("aiserver.v1.DebugInfo.Breakpoint", ()=>[
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
}), NJe = k.makeMessageType("aiserver.v1.GetChatRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: w1,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: OO
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
            T: kD,
            repeated: !0
        },
        {
            no: 7,
            name: "model_details",
            kind: "message",
            T: xf
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
            T: oN
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
            T: JSi,
            repeated: !0
        },
        {
            no: 19,
            name: "debug_info",
            kind: "message",
            T: Z1d,
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
            T: VVc,
            repeated: !0
        },
        {
            no: 23,
            name: "commit_notes",
            kind: "message",
            T: Mss,
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
            T: Kno
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
    ]), nTd = k.makeMessageType("aiserver.v1.PotentialLocsInitialQueriesRequest", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), iTd = k.makeMessageType("aiserver.v1.PotentialLocsInitialQueriesResponse", ()=>[
        {
            no: 1,
            name: "hyde_query",
            kind: "scalar",
            T: 9
        }
    ]), rTd = k.makeMessageType("aiserver.v1.PotentialLocsUnderneathRequest", ()=>[
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
            T: Gle,
            repeated: !0
        },
        {
            no: 3,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]), sTd = k.makeMessageType("aiserver.v1.PotentialLocsUnderneathResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), oTd = k.makeMessageType("aiserver.v1.PotentialLocsRequest", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), aTd = k.makeMessageType("aiserver.v1.PotentialLocsResponse", ()=>[
        {
            no: 1,
            name: "potential_loc",
            kind: "scalar",
            T: 9
        }
    ]), sWi = k.makeMessageType("aiserver.v1.GetComposerChatRequest", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: Uv,
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
            T: OO
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
            T: xf
        },
        {
            no: 6,
            name: "linter_errors",
            kind: "message",
            T: oN
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
            T: A3t,
            repeated: !0
        },
        {
            no: 10,
            name: "project_context",
            kind: "message",
            T: Uv,
            opt: !0
        },
        {
            no: 11,
            name: "diffs_for_compressing_files",
            kind: "message",
            T: cTd,
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
            T: oN,
            repeated: !0
        },
        {
            no: 15,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 16,
            name: "recent_edits",
            kind: "message",
            T: lTd,
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
            T: KDn,
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
            T: vUi,
            repeated: !0
        },
        {
            no: 21,
            name: "quotes",
            kind: "message",
            T: JSi,
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
            T: ELn
        }
    ]), cTd = k.makeMessageType("aiserver.v1.GetComposerChatRequest.RedDiff", ()=>[
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
            T: Gle,
            repeated: !0
        },
        {
            no: 3,
            name: "red_ranges_reversed",
            kind: "message",
            T: Gle,
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
}), lTd = k.makeMessageType("aiserver.v1.GetComposerChatRequest.RecentEdits", ()=>[
        {
            no: 1,
            name: "code_block_info",
            kind: "message",
            T: uTd,
            repeated: !0
        },
        {
            no: 2,
            name: "final_file_values",
            kind: "message",
            T: dTd,
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
}), uTd = k.makeMessageType("aiserver.v1.GetComposerChatRequest.RecentEdits.CodeBlockInfo", ()=>[
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
}), dTd = k.makeMessageType("aiserver.v1.GetComposerChatRequest.RecentEdits.FileInfo", ()=>[
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
}), hTd = k.makeMessageType("aiserver.v1.CheckUsageBasedPriceRequest", ()=>[
        {
            no: 1,
            name: "usage_event_details",
            kind: "message",
            T: D7i
        }
    ]), pTd = k.makeMessageType("aiserver.v1.CheckUsageBasedPriceResponse", ()=>[
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
    ]), Pio = k.makeMessageType("aiserver.v1.CheckQueuePositionRequest", ()=>[
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
            T: xf
        },
        {
            no: 3,
            name: "usage_uuid",
            kind: "scalar",
            T: 9
        }
    ]), mTd = k.makeMessageType("aiserver.v1.CheckQueuePositionResponse", ()=>[
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
            T: D7i
        },
        {
            no: 6,
            name: "custom_link",
            kind: "message",
            T: gTd
        },
        {
            no: 8,
            name: "model_for_slow_pool_nudge_data",
            kind: "message",
            T: fTd,
            opt: !0
        }
    ]), gTd = k.makeMessageType("aiserver.v1.CheckQueuePositionResponse.CustomLink", ()=>[
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
}), fTd = k.makeMessageType("aiserver.v1.CheckQueuePositionResponse.ModelForSlowPoolNudgeData", ()=>[
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
}), vTd = k.makeMessageType("aiserver.v1.IsolatedTreesitterRequest", ()=>[
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
    ]), _Td = k.makeMessageType("aiserver.v1.IsolatedTreesitterResponse", ()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: bTd,
            repeated: !0
        }
    ]), Lio = k.makeMessageType("aiserver.v1.IsolatedTreesitterResponse.TreeSitterPosition", ()=>[
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
}), bTd = k.makeMessageType("aiserver.v1.IsolatedTreesitterResponse.TreesitterSymbolNameItem", ()=>[
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
            T: Lio,
            opt: !0
        },
        {
            no: 3,
            name: "end_position",
            kind: "message",
            T: Lio,
            opt: !0
        }
    ], {
    localName: "IsolatedTreesitterResponse_TreesitterSymbolNameItem"
}), Nio = k.makeMessageType("aiserver.v1.GetSimplePromptRequest", ()=>[
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
    ]), yTd = k.makeMessageType("aiserver.v1.GetSimplePromptResponse", ()=>[
        {
            no: 1,
            name: "result",
            kind: "scalar",
            T: 9
        }
    ]), Oio = k.makeMessageType("aiserver.v1.SuggestQuickActionsRequest", ()=>[
        {
            no: 1,
            name: "candidates",
            kind: "message",
            T: Fio,
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
    ]), Fio = k.makeMessageType("aiserver.v1.QuickActionCandidate", ()=>[
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
    ]), STd = k.makeMessageType("aiserver.v1.SuggestQuickActionsResponse", ()=>[
        {
            no: 1,
            name: "suggestions",
            kind: "message",
            T: kTd,
            repeated: !0
        }
    ]), kTd = k.makeMessageType("aiserver.v1.SuggestedQuickAction", ()=>[
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
    ]), wTd = k.makeMessageType("aiserver.v1.GetPassthroughPromptRequest", ()=>[
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
    ]), CTd = k.makeMessageType("aiserver.v1.GetPassthroughPromptResponse", ()=>[
        {
            no: 1,
            name: "result",
            kind: "scalar",
            T: 9
        }
    ]), TTd = k.makeMessageType("aiserver.v1.CheckLongFilesFitResponse", ()=>[
        {
            no: 1,
            name: "did_fit",
            kind: "scalar",
            T: 8
        }
    ]), ETd = k.makeMessageType("aiserver.v1.GetEvaluationPromptRequest", ()=>[
        {
            no: 1,
            name: "prompt_type",
            kind: "enum",
            T: k.getEnumType(xTd)
        },
        {
            no: 2,
            name: "current_file",
            kind: "message",
            T: ZC
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
            T: k.getEnumType(ITd)
        }
    ]), xTd = k.makeEnum("aiserver.v1.GetEvaluationPromptRequest.EvaluationPromptType", [
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
]), ITd = k.makeEnum("aiserver.v1.GetEvaluationPromptRequest.RerankingStrategy", [
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
]), ATd = k.makeMessageType("aiserver.v1.GetEvaluationPromptResponse", ()=>[
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
    ]), RTd = k.makeMessageType("aiserver.v1.GetChatTitleRequest", ()=>[
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        }
    ]), DTd = k.makeMessageType("aiserver.v1.GetChatTitleResponse", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        }
    ]), MTd = k.makeMessageType("aiserver.v1.ServerTimingInfo", ()=>[
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
    ]), tPe = k.makeMessageType("aiserver.v1.StreamChatResponse", ()=>[
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
            T: zDn
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
            T: LTd,
            opt: !0
        },
        {
            no: 9,
            name: "docs_reference",
            kind: "message",
            T: h$t,
            opt: !0
        },
        {
            no: 11,
            name: "web_citation",
            kind: "message",
            T: _Ui,
            opt: !0
        },
        {
            no: 12,
            name: "status_updates",
            kind: "message",
            T: SUi,
            opt: !0
        },
        {
            no: 13,
            name: "timing_info",
            kind: "message",
            T: MTd,
            opt: !0
        },
        {
            no: 14,
            name: "symbol_link",
            kind: "message",
            T: g$t,
            opt: !0
        },
        {
            no: 15,
            name: "file_link",
            kind: "message",
            T: YDn,
            opt: !0
        },
        {
            no: 16,
            name: "conversation_summary",
            kind: "message",
            T: Rse,
            opt: !0
        },
        {
            no: 17,
            name: "service_status_update",
            kind: "message",
            T: m$t,
            opt: !0
        },
        {
            no: 18,
            name: "used_code",
            kind: "message",
            T: PTd,
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
    ]), PTd = k.makeMessageType("aiserver.v1.StreamChatResponse.UsedCode", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: YO,
            repeated: !0
        }
    ], {
    localName: "StreamChatResponse_UsedCode"
}), LTd = k.makeMessageType("aiserver.v1.StreamChatResponse.ChunkIdentity", ()=>[
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
            T: k.getEnumType(qDn)
        }
    ], {
    localName: "StreamChatResponse_ChunkIdentity"
}), NTd = k.makeMessageType("aiserver.v1.WarmComposerCacheResponse", ()=>[
        {
            no: 1,
            name: "did_warm_cache",
            kind: "scalar",
            T: 8
        }
    ]), OTd = k.makeMessageType("aiserver.v1.WarmChatCacheRequest", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: NJe
        }
    ]), FTd = k.makeMessageType("aiserver.v1.WarmChatCacheResponse", ()=>[
        {
            no: 1,
            name: "did_warm_cache",
            kind: "scalar",
            T: 8
        }
    ]), BTd = k.makeMessageType("aiserver.v1.SurroundingLines", ()=>[
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
    ]), UTd = k.makeMessageType("aiserver.v1.GetCompletionRequest", ()=>[
        {
            no: 1,
            name: "file_identifier",
            kind: "message",
            T: HTd
        },
        {
            no: 2,
            name: "cursor_position",
            kind: "message",
            T: a6
        },
        {
            no: 3,
            name: "surrounding_lines",
            kind: "message",
            T: BTd
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: OO
        },
        {
            no: 5,
            name: "suggestions_from_editor",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), $Td = k.makeMessageType("aiserver.v1.GetCompletionResponse", ()=>[
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
    ]), HTd = k.makeMessageType("aiserver.v1.UniqueFileIdentifier", ()=>[
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
    ]), WTd = k.makeMessageType("aiserver.v1.GetUserInfoRequest", []), GTd = k.makeMessageType("aiserver.v1.UsageData", ()=>[
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
    ]), VTd = k.makeMessageType("aiserver.v1.GetUserInfoResponse", ()=>[
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
            T: GTd
        }
    ]), jTd = k.makeMessageType("aiserver.v1.DoThisForMeCheckRequest", ()=>[
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
    ]), Bio = k.makeMessageType("aiserver.v1.DoThisForMeCheckResponse", ()=>[
        {
            no: 1,
            name: "skip_action",
            kind: "message",
            T: qTd,
            oneof: "action"
        },
        {
            no: 2,
            name: "edit_action",
            kind: "message",
            T: zTd,
            oneof: "action"
        },
        {
            no: 3,
            name: "create_action",
            kind: "message",
            T: KTd,
            oneof: "action"
        },
        {
            no: 4,
            name: "run_action",
            kind: "message",
            T: YTd,
            oneof: "action"
        },
        {
            no: 5,
            name: "reasoning",
            kind: "scalar",
            T: 9
        }
    ]), qTd = k.makeMessageType("aiserver.v1.DoThisForMeCheckResponse.SkipAction", [], {
    localName: "DoThisForMeCheckResponse_SkipAction"
}), zTd = k.makeMessageType("aiserver.v1.DoThisForMeCheckResponse.EditAction", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "DoThisForMeCheckResponse_EditAction"
}), KTd = k.makeMessageType("aiserver.v1.DoThisForMeCheckResponse.CreateAction", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "DoThisForMeCheckResponse_CreateAction"
}), YTd = k.makeMessageType("aiserver.v1.DoThisForMeCheckResponse.RunAction", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "DoThisForMeCheckResponse_RunAction"
}), XTd = k.makeMessageType("aiserver.v1.DoThisForMeRequest", ()=>[
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
            T: Bio
        }
    ]), ZTd = k.makeMessageType("aiserver.v1.DoThisForMeResponse", ()=>[
        {
            no: 1,
            name: "update_status",
            kind: "message",
            T: QTd,
            oneof: "event"
        }
    ]), QTd = k.makeMessageType("aiserver.v1.DoThisForMeResponse.UpdateStatus", ()=>[
        {
            no: 1,
            name: "status",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "DoThisForMeResponse_UpdateStatus"
}), JTd = k.makeMessageType("aiserver.v1.DoThisForMeResponseWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: ZTd,
            oneof: "response"
        },
        {
            no: 2,
            name: "background_task_uuid",
            kind: "scalar",
            T: 9,
            oneof: "response"
        }
    ]), eEd = k.makeMessageType("aiserver.v1.StreamChatToolformerContinueRequest", ()=>[
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
            T: gIn
        }
    ]), Uio = k.makeMessageType("aiserver.v1.StreamChatToolformerResponse", ()=>[
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
            T: tEd,
            oneof: "response_type"
        },
        {
            no: 3,
            name: "tool_action",
            kind: "message",
            T: iEd,
            oneof: "response_type"
        },
        {
            no: 4,
            name: "thought",
            kind: "message",
            T: nEd,
            oneof: "response_type"
        }
    ]), tEd = k.makeMessageType("aiserver.v1.StreamChatToolformerResponse.Output", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamChatToolformerResponse_Output"
}), nEd = k.makeMessageType("aiserver.v1.StreamChatToolformerResponse.Thought", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamChatToolformerResponse_Thought"
}), iEd = k.makeMessageType("aiserver.v1.StreamChatToolformerResponse.ToolAction", ()=>[
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
            T: H3i
        },
        {
            no: 4,
            name: "more_to_come",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "StreamChatToolformerResponse_ToolAction"
}), $io = k.makeMessageType("aiserver.v1.TaskInstruction", ()=>[
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
            T: rEd,
            repeated: !0
        },
        {
            no: 3,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 4,
            name: "repositories",
            kind: "message",
            T: w1,
            repeated: !0
        },
        {
            no: 5,
            name: "explicit_context",
            kind: "message",
            T: OO
        }
    ]), rEd = k.makeMessageType("aiserver.v1.TaskInstruction.CodeChunk", ()=>[
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
}), Hio = k.makeMessageType("aiserver.v1.TaskUserMessage", ()=>[
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
            T: sEd,
            repeated: !0
        }
    ]), sEd = k.makeMessageType("aiserver.v1.TaskUserMessage.CodeChunk", ()=>[
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
}), oEd = k.makeMessageType("aiserver.v1.PushAiThoughtRequest", ()=>[
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
            T: gfe
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
            T: aEd,
            opt: !0
        }
    ]), aEd = k.makeMessageType("aiserver.v1.PushAiThoughtRequest.Metadata", ()=>[
        {
            no: 1,
            name: "accepted_hallucinated_function_event",
            kind: "message",
            T: cEd,
            oneof: "event"
        }
    ], {
    localName: "PushAiThoughtRequest_Metadata"
}), cEd = k.makeMessageType("aiserver.v1.PushAiThoughtRequest.Metadata.AcceptedHallucinatedFunctionEvent", ()=>[
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
}), lEd = k.makeMessageType("aiserver.v1.PushAiThoughtResponse", []), uEd = k.makeMessageType("aiserver.v1.CheckDoableAsTaskRequest", ()=>[
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
            T: xf
        }
    ]), dEd = k.makeMessageType("aiserver.v1.CheckDoableAsTaskResponse", ()=>[
        {
            no: 1,
            name: "doable_as_task",
            kind: "scalar",
            T: 8
        }
    ]), hEd = k.makeMessageType("aiserver.v1.InterfaceAgentInitRequest", ()=>[
        {
            no: 1,
            name: "model_details",
            kind: "message",
            T: xf
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
            T: Zno
        }
    ]), pEd = k.makeMessageType("aiserver.v1.InterfaceAgentInitResponse", ()=>[
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
    ]), mEd = k.makeMessageType("aiserver.v1.StreamInterfaceAgentStatusRequest", ()=>[
        {
            no: 1,
            name: "task_uuid",
            kind: "scalar",
            T: 9
        }
    ]), gEd = k.makeMessageType("aiserver.v1.StreamInterfaceAgentStatusResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "message",
            T: Qno
        }
    ]), fEd = k.makeMessageType("aiserver.v1.TaskGetInterfaceAgentStatusRequest", ()=>[
        {
            no: 1,
            name: "interface_agent_client_state",
            kind: "message",
            T: Zno
        }
    ]), vEd = k.makeMessageType("aiserver.v1.TaskGetInterfaceAgentStatusResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "message",
            T: Qno
        }
    ]), _Ed = k.makeMessageType("aiserver.v1.TaskGetInterfaceAgentStatusResponseWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: vEd,
            oneof: "response"
        },
        {
            no: 2,
            name: "background_task_uuid",
            kind: "scalar",
            T: 9,
            oneof: "response"
        }
    ]), bEd = k.makeMessageType("aiserver.v1.TaskInitRequest", ()=>[
        {
            no: 1,
            name: "instruction",
            kind: "message",
            T: $io
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: xf
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
    ]), yEd = k.makeMessageType("aiserver.v1.TaskInitResponse", ()=>[
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
    ]), SEd = k.makeMessageType("aiserver.v1.TaskStreamLogRequest", ()=>[
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
    ]), kEd = k.makeMessageType("aiserver.v1.TaskLogOutput", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), wEd = k.makeMessageType("aiserver.v1.TaskLogToolAction", ()=>[
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
            T: H3i
        }
    ]), CEd = k.makeMessageType("aiserver.v1.TaskLogThought", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), TEd = k.makeMessageType("aiserver.v1.TaskLogToolResult", ()=>[
        {
            no: 1,
            name: "tool_result",
            kind: "message",
            T: gIn
        },
        {
            no: 2,
            name: "action_sequence_number",
            kind: "scalar",
            T: 5
        }
    ]), EEd = k.makeMessageType("aiserver.v1.TaskLogItem", ()=>[
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
            T: kEd,
            oneof: "log_item"
        },
        {
            no: 4,
            name: "tool_action",
            kind: "message",
            T: wEd,
            oneof: "log_item"
        },
        {
            no: 5,
            name: "thought",
            kind: "message",
            T: CEd,
            oneof: "log_item"
        },
        {
            no: 6,
            name: "user_message",
            kind: "message",
            T: Hio,
            oneof: "log_item"
        },
        {
            no: 7,
            name: "instruction",
            kind: "message",
            T: $io,
            oneof: "log_item"
        },
        {
            no: 8,
            name: "tool_result",
            kind: "message",
            T: TEd,
            oneof: "log_item"
        }
    ]), xEd = k.makeMessageType("aiserver.v1.TaskInfoRequest", ()=>[
        {
            no: 1,
            name: "task_uuid",
            kind: "scalar",
            T: 9
        }
    ]), IEd = k.makeMessageType("aiserver.v1.TaskPauseRequest", ()=>[
        {
            no: 1,
            name: "task_uuid",
            kind: "scalar",
            T: 9
        }
    ]), AEd = k.makeMessageType("aiserver.v1.TaskPauseResponse", []), Wio = k.makeMessageType("aiserver.v1.TaskInfoResponse", ()=>[
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
            T: k.getEnumType(eio)
        },
        {
            no: 3,
            name: "last_log_sequence_number",
            kind: "scalar",
            T: 5
        }
    ]), REd = k.makeMessageType("aiserver.v1.TaskStreamLogResponse", ()=>[
        {
            no: 1,
            name: "streamed_log_item",
            kind: "message",
            T: EEd,
            oneof: "response"
        },
        {
            no: 2,
            name: "info_update",
            kind: "message",
            T: DEd,
            oneof: "response"
        },
        {
            no: 3,
            name: "initial_task_info",
            kind: "message",
            T: Wio,
            oneof: "response"
        }
    ]), DEd = k.makeMessageType("aiserver.v1.TaskStreamLogResponse.InfoUpdate", ()=>[
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
            T: k.getEnumType(eio),
            opt: !0
        }
    ], {
    localName: "TaskStreamLogResponse_InfoUpdate"
}), MEd = k.makeMessageType("aiserver.v1.TaskProvideResultRequest", ()=>[
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
            T: gIn
        }
    ]), PEd = k.makeMessageType("aiserver.v1.TaskProvideResultResponse", []), LEd = k.makeMessageType("aiserver.v1.TaskSendMessageRequest", ()=>[
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
            T: Hio
        },
        {
            no: 3,
            name: "wants_attention_right_now",
            kind: "scalar",
            T: 8
        }
    ]), NEd = k.makeMessageType("aiserver.v1.TaskSendMessageResponse", []), OEd = k.makeMessageType("aiserver.v1.ReportFeedbackRequest", ()=>[
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
            T: k.getEnumType(FEd)
        }
    ]), FEd = k.makeEnum("aiserver.v1.ReportFeedbackRequest.FeedbackType", [
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
]), BEd = k.makeMessageType("aiserver.v1.ReportFeedbackResponse", []), Gio = k.makeMessageType("aiserver.v1.LogFile", ()=>[
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
    ]), Vio = k.makeMessageType("aiserver.v1.BugReportScreenshot", ()=>[
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
    ]), UEd = k.makeMessageType("aiserver.v1.BugContext", ()=>[
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
            T: ZC
        },
        {
            no: 3,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 4,
            name: "logs",
            kind: "message",
            T: Gio,
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
            T: gfe
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
            T: k.getEnumType(io),
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
            T: Vio,
            repeated: !0
        },
        {
            no: 18,
            name: "agent_host_module",
            kind: "message",
            T: jio
        }
    ]), jio = k.makeMessageType("aiserver.v1.BugReportAgentHostModule", ()=>[
        {
            no: 1,
            name: "current",
            kind: "message",
            T: oWi
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
            T: oWi,
            repeated: !0
        }
    ]), oWi = k.makeMessageType("aiserver.v1.BugReportAgentHostModuleServe", ()=>[
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
    ]), $Ed = k.makeMessageType("aiserver.v1.ReportBugRequest", ()=>[
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
            T: k.getEnumType(nPe)
        },
        {
            no: 3,
            name: "context",
            kind: "message",
            T: UEd
        },
        {
            no: 4,
            name: "contact_email",
            kind: "scalar",
            T: 9
        }
    ]), nPe = k.makeEnum("aiserver.v1.ReportBugRequest.BugType", [
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
]), HEd = k.makeMessageType("aiserver.v1.ReportBugResponse", []), WEd = k.makeMessageType("aiserver.v1.FixMarkersRequest", ()=>[
        {
            no: 1,
            name: "markers",
            kind: "message",
            T: GEd,
            repeated: !0
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: xf
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
    ]), GEd = k.makeMessageType("aiserver.v1.FixMarkersRequest.Marker", ()=>[
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
            T: VEd,
            repeated: !0
        },
        {
            no: 7,
            name: "context_ranges",
            kind: "message",
            T: jEd,
            repeated: !0
        },
        {
            no: 8,
            name: "ancestor_type_definitions",
            kind: "message",
            T: qEd,
            repeated: !0
        },
        {
            no: 9,
            name: "inserted_symbol_types",
            kind: "message",
            T: zEd,
            repeated: !0
        },
        {
            no: 10,
            name: "quick_fixes",
            kind: "message",
            T: KEd,
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
            T: XEd,
            repeated: !0
        },
        {
            no: 14,
            name: "function_signatures",
            kind: "message",
            T: QEd,
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
}), VEd = k.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.RelatedInformation", ()=>[
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
}), jEd = k.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.ContextRange", ()=>[
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
}), qEd = k.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.AncestorTypeDefinition", ()=>[
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
}), zEd = k.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.InsertedSymbolType", ()=>[
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
}), KEd = k.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.QuickFix", ()=>[
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
            T: YEd,
            repeated: !0
        }
    ], {
    localName: "FixMarkersRequest_Marker_QuickFix"
}), YEd = k.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.QuickFix.Edit", ()=>[
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
}), XEd = k.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.ClassInformation", ()=>[
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
            T: ZEd,
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
}), ZEd = k.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.ClassInformation.Constructor", ()=>[
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
}), QEd = k.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.FunctionSignature", ()=>[
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
            T: JEd,
            repeated: !0
        }
    ], {
    localName: "FixMarkersRequest_Marker_FunctionSignature"
}), JEd = k.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.FunctionSignature.FunctionParameter", ()=>[
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
}), exd = k.makeMessageType("aiserver.v1.FixMarkersResponse", ()=>[
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
            T: txd,
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
    ]), txd = k.makeMessageType("aiserver.v1.FixMarkersResponse.Change", ()=>[
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
}), nxd = k.makeMessageType("aiserver.v1.StreamLintRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 3,
            name: "repositories",
            kind: "message",
            T: w1,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: OO
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
            T: kD,
            repeated: !0
        },
        {
            no: 9,
            name: "model_details",
            kind: "message",
            T: xf
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
    ]), ixd = k.makeMessageType("aiserver.v1.ReportGroundTruthCandidateRequest", ()=>[
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
            T: k.getEnumType(pVc)
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
            T: c6
        },
        {
            no: 7,
            name: "lines_above_and_below",
            kind: "scalar",
            T: 5
        }
    ]), rxd = k.makeMessageType("aiserver.v1.ReportGroundTruthCandidateResponse", []), sxd = k.makeMessageType("aiserver.v1.ReportCmdKFateRequest", ()=>[
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
            T: k.getEnumType(oxd)
        }
    ]), oxd = k.makeEnum("aiserver.v1.ReportCmdKFateRequest.Fate", [
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
]), axd = k.makeMessageType("aiserver.v1.ReportCmdKFateResponse", []), cxd = k.makeMessageType("aiserver.v1.GetFilesForComposerRequest", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: ZC,
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
            T: eWi,
            oneof: "context_results"
        },
        {
            no: 5,
            name: "code_search_results",
            kind: "message",
            T: ELn,
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
            T: xf
        }
    ]), lxd = k.makeMessageType("aiserver.v1.GetFilesForComposerResponse", ()=>[
        {
            no: 1,
            name: "relative_workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), uxd = k.makeMessageType("aiserver.v1.ComposerEnhancerClientMessage", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: dxd,
            oneof: "message"
        },
        {
            no: 2,
            name: "tool_result",
            kind: "message",
            T: mxd,
            oneof: "message"
        }
    ]), qio = k.makeMessageType("aiserver.v1.ComposerEnhancerServerMessage", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: hxd,
            oneof: "message"
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: pxd,
            oneof: "message"
        }
    ]), dxd = k.makeMessageType("aiserver.v1.ComposerEnhancerRequest", ()=>[
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
    ]), hxd = k.makeMessageType("aiserver.v1.ComposerEnhancerResponse", ()=>[
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
    ]), pxd = k.makeMessageType("aiserver.v1.ComposerEnhancerToolCall", ()=>[
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
    ]), mxd = k.makeMessageType("aiserver.v1.ComposerEnhancerToolResult", ()=>[
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
    ]), gxd = k.makeMessageType("aiserver.v1.FindBugsRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: xf
        }
    ]), fxd = k.makeMessageType("aiserver.v1.FindBugsResponse", ()=>[
        {
            no: 1,
            name: "bug",
            kind: "message",
            T: vxd,
            opt: !0
        }
    ]), vxd = k.makeMessageType("aiserver.v1.FindBugsResponse.Bug", ()=>[
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
}), zio = k.makeMessageType("aiserver.v1.WriteGitCommitMessageRequest", ()=>[
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
            T: OO
        },
        {
            no: 4,
            name: "api_key_credentials",
            kind: "message",
            T: w4e,
            oneof: "credentials"
        },
        {
            no: 5,
            name: "azure_credentials",
            kind: "message",
            T: C4e,
            oneof: "credentials"
        },
        {
            no: 6,
            name: "bedrock_credentials",
            kind: "message",
            T: T4e,
            oneof: "credentials"
        }
    ]), _xd = k.makeMessageType("aiserver.v1.WriteGitCommitMessageResponse", ()=>[
        {
            no: 1,
            name: "commit_message",
            kind: "scalar",
            T: 9
        }
    ]), Kio = k.makeMessageType("aiserver.v1.WriteGitBranchNameRequest", ()=>[
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
            T: w4e,
            oneof: "credentials"
        },
        {
            no: 5,
            name: "azure_credentials",
            kind: "message",
            T: C4e,
            oneof: "credentials"
        },
        {
            no: 6,
            name: "bedrock_credentials",
            kind: "message",
            T: T4e,
            oneof: "credentials"
        }
    ]), bxd = k.makeMessageType("aiserver.v1.WriteGitBranchNameResponse", ()=>[
        {
            no: 1,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]), yxd = k.makeMessageType("aiserver.v1.KeepComposerCacheWarmRequest", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: sWi
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
    ]), Sxd = k.makeMessageType("aiserver.v1.KeepComposerCacheWarmResponse", ()=>[
        {
            no: 1,
            name: "did_keep_warm",
            kind: "scalar",
            T: 8
        }
    ]), Yio = k.makeMessageType("aiserver.v1.GetDiffReviewRequest", ()=>[
        {
            no: 1,
            name: "diffs",
            kind: "message",
            T: kxd,
            repeated: !0
        },
        {
            no: 2,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), kxd = k.makeMessageType("aiserver.v1.GetDiffReviewRequest.SimpleFileDiff", ()=>[
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
            T: wxd,
            repeated: !0
        }
    ], {
    localName: "GetDiffReviewRequest_SimpleFileDiff"
}), wxd = k.makeMessageType("aiserver.v1.GetDiffReviewRequest.SimpleFileDiff.Chunk", ()=>[
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
            T: c6
        },
        {
            no: 4,
            name: "new_range",
            kind: "message",
            T: c6
        }
    ], {
    localName: "GetDiffReviewRequest_SimpleFileDiff_Chunk"
}), Cxd = k.makeMessageType("aiserver.v1.StreamDiffReviewResponse", ()=>[
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
            T: Txd,
            oneof: "response"
        }
    ]), Txd = k.makeMessageType("aiserver.v1.SemanticDiffGroups", ()=>[
        {
            no: 1,
            name: "groups",
            kind: "message",
            T: Exd,
            repeated: !0
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Exd = k.makeMessageType("aiserver.v1.SemanticDiffGroup", ()=>[
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
            T: xxd,
            repeated: !0
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9
        }
    ]), xxd = k.makeMessageType("aiserver.v1.SemanticDiffReference", ()=>[
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
    ]), Ixd = k.makeMessageType("aiserver.v1.StreamDiffReviewByFileResponse", ()=>[
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
            T: Axd,
            oneof: "response"
        }
    ]), Axd = k.makeMessageType("aiserver.v1.SemanticFileGroups", ()=>[
        {
            no: 1,
            name: "groups",
            kind: "message",
            T: Rxd,
            repeated: !0
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Rxd = k.makeMessageType("aiserver.v1.SemanticFileGroup", ()=>[
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
    ]), Dxd = k.makeMessageType("aiserver.v1.CountTokensRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: _Ln,
            repeated: !0
        },
        {
            no: 2,
            name: "model_name",
            kind: "scalar",
            T: 9
        }
    ]), Mxd = k.makeMessageType("aiserver.v1.ContextItemTokenDetail", ()=>[
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
    ]), Pxd = k.makeMessageType("aiserver.v1.CountTokensResponse", ()=>[
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
            T: Mxd,
            repeated: !0
        }
    ]), Lxd = k.makeMessageType("aiserver.v1.GetModelLabelsRequest", []), Nxd = k.makeMessageType("aiserver.v1.GetModelLabelsResponse", ()=>[
        {
            no: 1,
            name: "model_labels",
            kind: "message",
            T: Oxd,
            repeated: !0
        }
    ]), Oxd = k.makeMessageType("aiserver.v1.GetModelLabelsResponse.ModelLabel", ()=>[
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
}), Fxd = k.makeMessageType("aiserver.v1.GetLastDefaultModelNudgeRequest", []), Bxd = k.makeMessageType("aiserver.v1.GetLastDefaultModelNudgeResponse", ()=>[
        {
            no: 1,
            name: "nudge_date",
            kind: "scalar",
            T: 9
        }
    ]), Xio = k.makeMessageType("aiserver.v1.GetDefaultModelNudgeDataRequest", ()=>[
        {
            no: 1,
            name: "startup_opportunity",
            kind: "enum",
            T: k.getEnumType(n1e)
        },
        {
            no: 2,
            name: "current_model",
            kind: "message",
            T: MD
        }
    ]), n1e = k.makeEnum("aiserver.v1.GetDefaultModelNudgeDataRequest.StartupOpportunity", [
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
]), Uxd = k.makeMessageType("aiserver.v1.GetDefaultModelNudgeDataResponse", ()=>[
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
            T: Zio
        },
        {
            no: 6,
            name: "application_open_model_switch",
            kind: "message",
            T: $xd
        }
    ]), Zio = k.makeMessageType("aiserver.v1.GetDefaultModelNudgeDataResponse.InitialModel", ()=>[
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
            T: w2,
            repeated: !0
        }
    ], {
    localName: "GetDefaultModelNudgeDataResponse_InitialModel"
}), $xd = k.makeMessageType("aiserver.v1.GetDefaultModelNudgeDataResponse.ApplicationOpenModelSwitch", ()=>[
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
            T: Zio
        }
    ], {
    localName: "GetDefaultModelNudgeDataResponse_ApplicationOpenModelSwitch"
}), Qio = k.makeMessageType("aiserver.v1.GetDefaultModelRequest", []), Hxd = k.makeMessageType("aiserver.v1.GetDefaultModelResponse", ()=>[
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
    ]), Wxd = k.makeMessageType("aiserver.v1.CloudSetupBlockerAction", ()=>[
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
            T: qP,
            oneof: "action"
        },
        {
            no: 3,
            name: "open_github_connect",
            kind: "message",
            T: qP,
            oneof: "action"
        },
        {
            no: 4,
            name: "open_repo_picker",
            kind: "message",
            T: qP,
            oneof: "action"
        }
    ]), Jio = k.makeMessageType("aiserver.v1.CloudSetupBlocker", ()=>[
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
            T: Wxd
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
    ]), Gxd = k.makeMessageType("aiserver.v1.GetCloudSetupBlockersRequest", ()=>[
        {
            no: 1,
            name: "selected_target_repo_url",
            kind: "scalar",
            T: 9
        }
    ]), Vxd = k.makeMessageType("aiserver.v1.GetCloudSetupBlockersResponse", ()=>[
        {
            no: 1,
            name: "pending",
            kind: "message",
            T: Jio,
            repeated: !0
        },
        {
            no: 2,
            name: "completed",
            kind: "message",
            T: Jio,
            repeated: !0
        }
    ]), jxd = k.makeMessageType("aiserver.v1.TestBedrockCredentialsRequest", ()=>[
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
    ]), qxd = k.makeMessageType("aiserver.v1.TestBedrockCredentialsResponse", ()=>[
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
    ]), ero = k.makeMessageType("aiserver.v1.CommitLineRange", ()=>[
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
    ]), tro = k.makeMessageType("aiserver.v1.RangeGroup", ()=>[
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
            T: ero,
            repeated: !0
        },
        {
            no: 5,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), aWi = k.makeMessageType("aiserver.v1.FileRangeAnnotations", ()=>[
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
            T: tro,
            repeated: !0
        }
    ]), zxd = k.makeMessageType("aiserver.v1.ReportCommitAiAnalyticsRequest", ()=>[
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
            T: aWi,
            repeated: !0
        },
        {
            no: 17,
            name: "commit_source",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Kxd = k.makeMessageType("aiserver.v1.ReportCommitAiAnalyticsResponse", []), Yxd = k.makeMessageType("aiserver.v1.ReportAiCodeChangeMetricsRequest", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "message",
            T: nro,
            repeated: !0
        }
    ]), nro = k.makeMessageType("aiserver.v1.AiCodeChange", ()=>[
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
            T: oro,
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
    ]), Xxd = k.makeMessageType("aiserver.v1.ReportAiCodeChangeMetricsResponse", []), Zxd = k.makeMessageType("aiserver.v1.ReportProcessMetricsRequest", ()=>[
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
            T: Qxd,
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
    ]), Qxd = k.makeMessageType("aiserver.v1.ProcessMetricsRowRequest", ()=>[
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
    ]), Jxd = k.makeMessageType("aiserver.v1.ReportProcessMetricsResponse", []), iro = k.makeMessageType("aiserver.v1.ReportProcessMetricsV2Request", ()=>[
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
            T: rro,
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
    ]), rro = k.makeMessageType("aiserver.v1.ProcessMetricsV2RowRequest", ()=>[
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
    ]), eId = k.makeMessageType("aiserver.v1.ReportProcessMetricsV2Response", []), tId = k.makeMessageType("aiserver.v1.ReportSandProcessMetricsRequest", ()=>[
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
            T: nId,
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
    ]), nId = k.makeMessageType("aiserver.v1.SandProcessMetricsRowRequest", ()=>[
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
    ]), iId = k.makeMessageType("aiserver.v1.ReportSandProcessMetricsResponse", []), rId = k.makeMessageType("aiserver.v1.ReportClientNumericMetricsRequest", ()=>[
        {
            no: 1,
            name: "metrics",
            kind: "message",
            T: sro,
            repeated: !0
        }
    ]), sro = k.makeMessageType("aiserver.v1.ClientNumericMetric", ()=>[
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
    ]), sId = k.makeMessageType("aiserver.v1.ReportClientNumericMetricsResponse", []), oId = k.makeMessageType("aiserver.v1.PotentiallyGenerateMemoryRequest", ()=>[
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
            T: Uv,
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
    ]), aId = k.makeMessageType("aiserver.v1.PotentiallyGenerateMemoryResponse", ()=>[
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
    ]), cId = k.makeMessageType("aiserver.v1.KnowledgeBaseAddRequest", ()=>[
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
    ]), lId = k.makeMessageType("aiserver.v1.KnowledgeBaseAddResponse", ()=>[
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
    ]), uId = k.makeMessageType("aiserver.v1.KnowledgeBaseRemoveRequest", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        }
    ]), dId = k.makeMessageType("aiserver.v1.KnowledgeBaseRemoveResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), hId = k.makeMessageType("aiserver.v1.KnowledgeBaseUpdateRequest", ()=>[
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
    ]), pId = k.makeMessageType("aiserver.v1.KnowledgeBaseUpdateResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), mId = k.makeMessageType("aiserver.v1.KnowledgeBaseListRequest", ()=>[
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
    ]), gId = k.makeMessageType("aiserver.v1.KnowledgeBaseListResponse", ()=>[
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
            T: fId,
            repeated: !0
        }
    ]), fId = k.makeMessageType("aiserver.v1.KnowledgeBaseListResponse.Item", ()=>[
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
}), vId = k.makeMessageType("aiserver.v1.FetchRelevantKnowledgeForConversationRequest", ()=>[
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
            T: Uv,
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
    ]), _Id = k.makeMessageType("aiserver.v1.FetchRelevantKnowledgeForConversationResponse", ()=>[
        {
            no: 1,
            name: "knowledge_items",
            kind: "message",
            T: QDn,
            repeated: !0
        }
    ]), bId = k.makeMessageType("aiserver.v1.InferBackgroundComposerScriptsRequest", ()=>[
        {
            no: 1,
            name: "commands",
            kind: "message",
            T: yId,
            repeated: !0
        }
    ]), yId = k.makeMessageType("aiserver.v1.InferBackgroundComposerScriptsRequest.Command", ()=>[
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
}), SId = k.makeMessageType("aiserver.v1.InferBackgroundComposerScriptsResponse", ()=>[
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
            T: kId,
            repeated: !0
        }
    ]), kId = k.makeMessageType("aiserver.v1.InferBackgroundComposerScriptsResponse.Terminal", ()=>[
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
}), wId = k.makeMessageType("aiserver.v1.GetBackgroundComposerFeedbackLinkRequest", []), CId = k.makeMessageType("aiserver.v1.GetBackgroundComposerFeedbackLinkResponse", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), oro = k.makeMessageType("aiserver.v1.ScoredAiCodeMetadata", ()=>[
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
    ]), TId = k.makeMessageType("aiserver.v1.SttConfig", ()=>[
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
    ]), EId = k.makeMessageType("aiserver.v1.SttAudioChunk", ()=>[
        {
            no: 1,
            name: "pcm16",
            kind: "scalar",
            T: 12
        }
    ]), xId = k.makeMessageType("aiserver.v1.SttControl", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: k.getEnumType(aro)
        }
    ]), aro = k.makeEnum("aiserver.v1.SttControl.Type", [
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
]), xLn = k.makeMessageType("aiserver.v1.SttClientMessage", ()=>[
        {
            no: 1,
            name: "config",
            kind: "message",
            T: TId,
            oneof: "payload"
        },
        {
            no: 2,
            name: "audio",
            kind: "message",
            T: EId,
            oneof: "payload"
        },
        {
            no: 3,
            name: "control",
            kind: "message",
            T: xId,
            oneof: "payload"
        }
    ]), cro = k.makeMessageType("aiserver.v1.SttServerMessage", ()=>[
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
            T: k.getEnumType(ILn)
        }
    ]), ILn = k.makeEnum("aiserver.v1.SttServerMessage.Kind", [
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
]), IId = k.makeMessageType("aiserver.v1.TranscribeAudioRequest", ()=>[
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
    ]), AId = k.makeMessageType("aiserver.v1.TranscribeAudioResponse", ()=>[
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
    ]), lro = k.makeMessageType("aiserver.v1.TextToSpeechRequest", ()=>[
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
    ]), RId = k.makeMessageType("aiserver.v1.TextToSpeechResponse", ()=>[
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
    ]), DId = k.makeMessageType("aiserver.v1.MintRealtimeVoiceSecretRequest", ()=>[
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
    ]), MId = k.makeMessageType("aiserver.v1.MintRealtimeVoiceSecretResponse", ()=>[
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
            T: FId
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
    ]), PId = k.makeMessageType("aiserver.v1.SetRealtimeVoiceRequest", ()=>[
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
    ]), LId = k.makeMessageType("aiserver.v1.SetRealtimeVoiceResponse", []), NId = k.makeMessageType("aiserver.v1.GetRealtimeVoiceRequest", []), OId = k.makeMessageType("aiserver.v1.GetRealtimeVoiceResponse", ()=>[
        {
            no: 1,
            name: "voice_id",
            kind: "scalar",
            T: 9
        }
    ]), FId = k.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan", ()=>[
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
            T: uro
        },
        {
            no: 5,
            name: "queued_receipt",
            kind: "message",
            T: uro
        },
        {
            no: 6,
            name: "stay_silent_refusals",
            kind: "message",
            T: BId
        },
        {
            no: 7,
            name: "reply_lines",
            kind: "message",
            T: UId
        },
        {
            no: 9,
            name: "speeds",
            kind: "message",
            T: HId,
            repeated: !0
        },
        {
            no: 10,
            name: "languages",
            kind: "message",
            T: $Id,
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
    ]), uro = k.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.Receipt", ()=>[
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
}), BId = k.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.StaySilentRefusals", ()=>[
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
}), UId = k.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.ReplyLines", ()=>[
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
}), $Id = k.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.Option", ()=>[
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
}), HId = k.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.SpeedOption", ()=>[
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
