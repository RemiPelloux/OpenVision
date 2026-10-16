import { Bce, Bg, Qle, Wg, cD, dw, gD, hD, lw, uw } from "./agent_pb.js";
import { Hy, qy } from "./agent_skills_pb.js";
import { Bat, Nwe } from "./agent_startup_trace_pb.js";
import { Z9, lwe } from "./agent_store_pb.js";
import { LSe, Uat } from "./aiserver_pb.js";
import { $te, gu } from "./ask_question_tool_pb.js";
import { Fat, Rwe, iL } from "./blob_pb.js";
import { Ji, Vg, fD, hw } from "./chat_pb.js";
import { An, K9 } from "./cloud_agent_scope_pb.js";
import { B9, zn } from "./cloud_agent_source_pb.js";
import { SE, j9 } from "./common_pb.js";
import { EN, GZ } from "./composer_pb.js";
import { ED, _w, bD, fw, gw, wD } from "./dashboard_pb.js";
import { Hr } from "./empty_pb.js";
import { gSe, kE } from "./pod_event_pb.js";
import { H9, mat } from "./pod_pb.js";
import { Tq, vq } from "./privacy_mode_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { Dg, VP, zc } from "./repository_pb.js";
import { Pg, lu } from "./requested_model_pb.js";
import { Iwe, Wat, aL } from "./scm_pb.js";
import { aw, iw, sw } from "./selected_context_pb.js";
import { pat, q9 } from "./snapshot_pb.js";
import { Og, qP } from "./subagents_pb.js";
import { HN, qN } from "./system_prompt_pb.js";
import { PY, Zy, nN, tN } from "./tools_pb.js";
import { h } from "./tslib.es6.js";
import { Kc, Ki, cu, jy, lr, ou, wP } from "./utils_pb_2.js";
import { sL, xat } from "./waterfall_update_pb.js";
var Df, Fwe, Wwe, Bwe, Gwe, Vwe, Tr, Of, ke, $we, oL, jwe, Hwe, qwe, Kwe, cL, lL, zwe, Ywe, Jwe, dL, Xwe, Qwe, Zwe, e1e, t1e, gl, n1e, Lf, r1e, uL, s1e, i1e, a1e, o1e, c1e, bE, mL, pL, l1e, d1e, u1e, m1e, p1e, Uf, h1e, g1e, f1e, _1e, hL, v1e, T1e, k1e, gL, S1e, y1e, w1e, RE, E1e, b1e, R1e, C1e, I1e, A1e, xf, CE, M1e, P1e, N1e, D1e, O1e, L1e, U1e, x1e, F1e, IE, AE, W1e, B1e, fL, G1e, V1e, _L, $1e, j1e, H1e, q1e, K1e, z1e, Y1e, J1e, X1e, Q1e, Z1e, eEe, tEe, nEe, rEe, sEe, iEe, aEe, oEe, cEe, lEe, dEe, vL, uEe, mEe, pEe, hEe, gEe, fEe, _Ee, vEe, TEe, kEe, SEe, yEe, wEe, EEe, bEe, REe, CEe, IEe, AEe, MEe, TL, PEe, NEe, DEe, OEe, LEe, UEe, xEe, FEe, WEe, BEe, GEe, VEe, $Ee, jEe, HEe, qEe, KEe, zEe, YEe, JEe, XEe, QEe, Hu, ZEe, ebe, tbe, nbe, rbe, sbe, ibe, abe, obe, cbe, lbe, dbe, ube, mbe, pbe, hbe, gbe, fbe, _be, vbe, Tbe, kbe, Sbe, ybe, kL, SL, wbe, Ebe, yL, bbe, Rbe, wL, EL, Cbe, bL, Ibe, Abe, Mbe, Pbe, Nbe, Dbe, Obe, Lbe, Ube, xbe, Fbe, Wbe, Bbe, Gbe, Vbe, $be, jbe, Hbe, qbe, Kbe, zbe, Ybe, Jbe, Xbe, Qbe, Zbe, eRe, tRe, nRe, rRe, sRe, RL, iRe, aRe, ys, Ff, CL, oRe, cRe, lRe, dRe, uRe, mRe, pRe, hRe, gRe, fRe, _Re, IL, Wf, AL, vRe, TRe, ME, kRe, SRe, yRe, wRe, ERe, bRe, RRe, CRe, ML, IRe, ARe, vi, PE, PL, NL, MRe, PRe, NRe, qu, DRe, ORe, LRe, URe, NE, xRe, FRe, WRe, BRe, GRe, VRe, $Re, jRe, HRe, qRe, KRe, zRe, YRe, JRe, XRe, QRe, Do, DL, ZRe, e0e, t0e, n0e, r0e, s0e, i0e, a0e, o0e, c0e, l0e, d0e, u0e, m0e, p0e, h0e, g0e, f0e, _0e, v0e, OL, T0e, k0e, S0e, y0e, w0e, E0e, LL, b0e, R0e, C0e, I0e, A0e, M0e, P0e, N0e, D0e, O0e, L0e, U0e, x0e, F0e, W0e, B0e, G0e, V0e, $0e, j0e, H0e, q0e, K0e, z0e, Y0e, J0e, X0e, Q0e, Z0e, eCe, tCe, nCe, rCe, sCe, iCe, UL, aCe, oCe, xL, FL, cCe, lCe, dCe, uCe, mCe, pCe, hCe, gCe, fCe, _Ce, vCe, TCe, kCe, SCe, yCe, wCe, ECe, bCe, RCe, CCe, ICe, ACe, MCe, PCe, NCe, DCe, OCe, LCe, UCe, xCe, WL, FCe, WCe, BCe, GCe, VCe, $Ce, jCe, HCe, qCe, KCe, zCe, YCe, JCe, XCe, QCe, ZCe, eIe, tIe, nIe, rIe, La, sIe, iIe, aIe, oIe, cIe, lIe, dIe, uIe, mIe, pIe, fl, BL, hIe, gIe, fIe, _Ie, vIe, TIe, kIe, SIe, yIe, wIe, EIe, bIe, RIe, CIe, IIe, AIe, MIe, PIe, NIe, GL, DIe, OIe, LIe, UIe, xIe, FIe, WIe, BIe, GIe, VL, Oo, VIe, $Ie, DE, jIe, HIe, qIe, KIe, zIe, YIe, JIe, XIe, QIe, ZIe, eAe, tAe, nAe, rAe, sAe, iAe, aAe, oAe, cAe, lAe, dAe, uAe, mAe, pAe, hAe, gAe, fAe, _Ae, vAe, TAe, kAe, SAe, yAe, wAe, EAe, bAe, RAe, CAe, IAe, AAe, MAe, PAe, NAe, DAe, OE, OAe, LAe, UAe, xAe, FAe, WAe, BAe, GAe, $L, VAe, jL, $Ae, HL, qL, jAe, HAe, qAe, KAe, zAe, YAe, JAe, XAe, QAe, ZAe, eMe, tMe, nMe, rMe, KL, sMe, iMe, aMe, oMe, cMe, LE, lMe, UE, dMe, uMe, mMe, pMe, hMe, gMe, fMe, _Me, vMe, TMe, kMe, SMe, yMe, wMe, EMe, bMe, RMe, CMe, IMe, AMe, MMe, PMe, NMe, DMe, OMe, LMe, UMe, xMe, FMe, WMe, BMe, GMe, VMe, $Me, jMe, HMe, qMe, KMe, zMe, YMe, JMe, XMe, QMe, ZMe, ePe, tPe, xE, nPe, rPe, sPe, zL, iPe, aPe, oPe, cPe, lPe, YL, dPe, uPe, mPe, pPe, hPe, gPe, fPe, _Pe, vPe, TPe, kPe, SPe, yPe, wPe, EPe, bPe, RPe, CPe, IPe, APe, MPe, PPe, NPe, DPe, OPe, LPe, UPe, xPe, FPe, WPe, BPe, GPe, VPe, $Pe, jPe, HPe, qPe, KPe, zPe, YPe, JPe, XPe, QPe, ZPe, eNe, tNe, nNe, rNe, sNe, iNe, aNe, oNe, cNe, lNe, JL, dNe, uNe, mNe, pNe, hNe, gNe, fNe, _Ne, FE, Bf, vNe, TNe, kNe, SNe, WE, yNe, wNe, ENe, bNe, RNe, XL, CNe, INe, ANe, MNe, PNe, NNe, DNe, ONe, LNe, UNe, xNe, FNe, WNe, BNe, GNe, VNe, $Ne, jNe, HNe, qNe, KNe, zNe, YNe, JNe, QL, XNe, QNe, ZNe, eDe, tDe, nDe, rDe, sDe, iDe, aDe, oDe, cDe, lDe, dDe, uDe, mDe, Ku, pDe, hDe, gDe, fDe, _De, vDe, TDe, kDe, SDe, yDe, wDe, EDe, bDe, RDe, CDe, IDe, ADe, MDe, PDe, NDe, DDe, ODe, LDe, ZL, UDe, xDe, FDe, WDe, BDe, GDe, VDe, $De, eU, jDe, HDe, qDe, KDe;
export { $0e, $1e, $Ae, $Ce, $De, $Ee, $Ie, $L, $Me, $Ne, $Pe, $Re, $be, $we, A0e, A1e, AAe, ACe, ADe, AE, AEe, AIe, AL, AMe, ANe, APe, ARe, Abe, B0e, B1e, BAe, BCe, BDe, BEe, BIe, BL, BMe, BNe, BPe, BRe, Bbe, Bf, Bwe, C0e, C1e, CAe, CCe, CDe, CE, CEe, CIe, CL, CMe, CNe, CPe, CRe, Cbe, D0e, D1e, DAe, DCe, DDe, DE, DEe, DIe, DL, DMe, DNe, DPe, DRe, Dbe, Df, Do, E0e, E1e, EAe, ECe, EDe, EEe, EIe, EL, EMe, ENe, EPe, ERe, Ebe, F0e, F1e, FAe, FCe, FDe, FE, FEe, FIe, FL, FMe, FNe, FPe, FRe, Fbe, Ff, Fwe, G0e, G1e, GAe, GCe, GDe, GEe, GIe, GL, GMe, GNe, GPe, GRe, Gbe, Gwe, H0e, H1e, HAe, HCe, HDe, HEe, HIe, HL, HMe, HNe, HPe, HRe, Hbe, Hu, Hwe, I0e, I1e, IAe, ICe, IDe, IE, IEe, IIe, IL, IMe, INe, IPe, IRe, Ibe, J0e, J1e, JAe, JCe, JEe, JIe, JL, JMe, JNe, JPe, JRe, Jbe, Jwe, K0e, K1e, KAe, KCe, KDe, KEe, KIe, KL, KMe, KNe, KPe, KRe, Kbe, Ku, Kwe, L0e, L1e, LAe, LCe, LDe, LE, LEe, LIe, LL, LMe, LNe, LPe, LRe, La, Lbe, Lf, M0e, M1e, MAe, MCe, MDe, ME, MEe, MIe, ML, MMe, MNe, MPe, MRe, Mbe, N0e, N1e, NAe, NCe, NDe, NE, NEe, NIe, NL, NMe, NNe, NPe, NRe, Nbe, O0e, O1e, OAe, OCe, ODe, OE, OEe, OIe, OL, OMe, ONe, OPe, ORe, Obe, Of, Oo, P0e, P1e, PAe, PCe, PDe, PE, PEe, PIe, PL, PMe, PNe, PPe, PRe, Pbe, Q0e, Q1e, QAe, QCe, QEe, QIe, QL, QMe, QNe, QPe, QRe, Qbe, Qwe, R0e, R1e, RAe, RCe, RDe, RE, REe, RIe, RL, RMe, RNe, RPe, RRe, Rbe, S0e, S1e, SAe, SCe, SDe, SEe, SIe, SL, SMe, SNe, SPe, SRe, Sbe, T0e, T1e, TAe, TCe, TDe, TEe, TIe, TL, TMe, TNe, TPe, TRe, Tbe, Tr, U0e, U1e, UAe, UCe, UDe, UE, UEe, UIe, UL, UMe, UNe, UPe, URe, Ube, Uf, V0e, V1e, VAe, VCe, VDe, VEe, VIe, VL, VMe, VNe, VPe, VRe, Vbe, Vwe, W0e, W1e, WAe, WCe, WDe, WE, WEe, WIe, WL, WMe, WNe, WPe, WRe, Wbe, Wf, Wwe, X0e, X1e, XAe, XCe, XEe, XIe, XL, XMe, XNe, XPe, XRe, Xbe, Xwe, Y0e, Y1e, YAe, YCe, YEe, YIe, YL, YMe, YNe, YPe, YRe, Ybe, Ywe, Z0e, Z1e, ZAe, ZCe, ZEe, ZIe, ZL, ZMe, ZNe, ZPe, ZRe, Zbe, Zwe, _0e, _1e, _Ae, _Ce, _De, _Ee, _Ie, _L, _Me, _Ne, _Pe, _Re, _be, a0e, a1e, aAe, aCe, aDe, aEe, aIe, aMe, aNe, aPe, aRe, abe, b0e, b1e, bAe, bCe, bDe, bE, bEe, bIe, bL, bMe, bNe, bPe, bRe, bbe, c0e, c1e, cAe, cCe, cDe, cEe, cIe, cL, cMe, cNe, cPe, cRe, cbe, d0e, d1e, dAe, dCe, dDe, dEe, dIe, dL, dMe, dNe, dPe, dRe, dbe, e0e, e1e, eAe, eCe, eDe, eEe, eIe, eMe, eNe, ePe, eRe, eU, ebe, f0e, f1e, fAe, fCe, fDe, fEe, fIe, fL, fMe, fNe, fPe, fRe, fbe, fl, g0e, g1e, gAe, gCe, gDe, gEe, gIe, gL, gMe, gNe, gPe, gRe, gbe, gl, h0e, h1e, hAe, hCe, hDe, hEe, hIe, hL, hMe, hNe, hPe, hRe, hbe, i0e, i1e, iAe, iCe, iDe, iEe, iIe, iMe, iNe, iPe, iRe, ibe, j0e, j1e, jAe, jCe, jDe, jEe, jIe, jL, jMe, jNe, jPe, jRe, jbe, jwe, k0e, k1e, kAe, kCe, kDe, kEe, kIe, kL, kMe, kNe, kPe, kRe, kbe, ke, l0e, l1e, lAe, lCe, lDe, lEe, lIe, lL, lMe, lNe, lPe, lRe, lbe, m0e, m1e, mAe, mCe, mDe, mEe, mIe, mL, mMe, mNe, mPe, mRe, mbe, n0e, n1e, nAe, nCe, nDe, nEe, nIe, nMe, nNe, nPe, nRe, nbe, o0e, o1e, oAe, oCe, oDe, oEe, oIe, oL, oMe, oNe, oPe, oRe, obe, p0e, p1e, pAe, pCe, pDe, pEe, pIe, pL, pMe, pNe, pPe, pRe, pbe, q0e, q1e, qAe, qCe, qDe, qEe, qIe, qL, qMe, qNe, qPe, qRe, qbe, qu, qwe, r0e, r1e, rAe, rCe, rDe, rEe, rIe, rMe, rNe, rPe, rRe, rbe, s0e, s1e, sAe, sCe, sDe, sEe, sIe, sMe, sNe, sPe, sRe, sbe, t0e, t1e, tAe, tCe, tDe, tEe, tIe, tMe, tNe, tPe, tRe, tbe, u0e, u1e, uAe, uCe, uDe, uEe, uIe, uL, uMe, uNe, uPe, uRe, ube, v0e, v1e, vAe, vCe, vDe, vEe, vIe, vL, vMe, vNe, vPe, vRe, vbe, vi, w0e, w1e, wAe, wCe, wDe, wEe, wIe, wL, wMe, wNe, wPe, wRe, wbe, x0e, x1e, xAe, xCe, xDe, xE, xEe, xIe, xL, xMe, xNe, xPe, xRe, xbe, xf, y0e, y1e, yAe, yCe, yDe, yEe, yIe, yL, yMe, yNe, yPe, yRe, ybe, ys, z0e, z1e, zAe, zCe, zEe, zIe, zL, zMe, zNe, zPe, zRe, zbe, zwe };
var __wakaru_Gf_initialized = false;
export function Gf() {
if (__wakaru_Gf_initialized) return;
__wakaru_Gf_initialized = true;
"use strict";
h(), F(), lr(), Tq(), mat(), gSe(), pat(), GZ(), K9(), B9(), lu(), uw(), Vg(), Uat(), qy(), Og(), lwe(), qN(), xat(), $te(), Zy(), zc(), Fat(), aw(), SE(), _w(), Wat(), Bat(), Df = c.makeEnum("aiserver.v1.ManagerSpawnKind", [
    {
        no: 0,
        name: "MANAGER_SPAWN_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MANAGER_SPAWN_KIND_CREATED",
        localName: "CREATED"
    },
    {
        no: 2,
        name: "MANAGER_SPAWN_KIND_ADOPTED",
        localName: "ADOPTED"
    },
    {
        no: 3,
        name: "MANAGER_SPAWN_KIND_CREATED_SAME_VM",
        localName: "CREATED_SAME_VM"
    }
]), Fwe = c.makeEnum("aiserver.v1.BackgroundComposerUpdateKind", [
    {
        no: 0,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_CREATED",
        localName: "CREATED"
    },
    {
        no: 2,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_STATUS_CHANGED",
        localName: "STATUS_CHANGED"
    },
    {
        no: 3,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_ARCHIVED",
        localName: "ARCHIVED"
    },
    {
        no: 4,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_UNARCHIVED",
        localName: "UNARCHIVED"
    },
    {
        no: 5,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_METADATA_CHANGED",
        localName: "METADATA_CHANGED"
    },
    {
        no: 6,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_MEMBERSHIP_CHANGED",
        localName: "MEMBERSHIP_CHANGED"
    },
    {
        no: 7,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_VISIBILITY_CHANGED",
        localName: "VISIBILITY_CHANGED"
    },
    {
        no: 8,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_DELETED",
        localName: "DELETED"
    },
    {
        no: 9,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_SUBSCRIPTIONS_CHANGED",
        localName: "SUBSCRIPTIONS_CHANGED"
    },
    {
        no: 10,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_APPROVAL_CHANGED",
        localName: "APPROVAL_CHANGED"
    },
    {
        no: 11,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_MACHINE_PRESSURE_CHANGED",
        localName: "MACHINE_PRESSURE_CHANGED"
    },
    {
        no: 12,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_READ_CURSOR_ADVANCED",
        localName: "READ_CURSOR_ADVANCED"
    },
    {
        no: 13,
        name: "BACKGROUND_COMPOSER_UPDATE_KIND_UNREAD_CHANGED",
        localName: "UNREAD_CHANGED"
    }
]), Wwe = c.makeEnum("aiserver.v1.BackgroundComposerMachinePressure", [
    {
        no: 0,
        name: "BACKGROUND_COMPOSER_MACHINE_PRESSURE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_COMPOSER_MACHINE_PRESSURE_NONE",
        localName: "NONE"
    },
    {
        no: 2,
        name: "BACKGROUND_COMPOSER_MACHINE_PRESSURE_HIGH",
        localName: "HIGH"
    }
]), Bwe = c.makeEnum("aiserver.v1.BackgroundComposerApprovalState", [
    {
        no: 0,
        name: "BACKGROUND_COMPOSER_APPROVAL_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_COMPOSER_APPROVAL_STATE_PENDING",
        localName: "PENDING"
    },
    {
        no: 2,
        name: "BACKGROUND_COMPOSER_APPROVAL_STATE_APPROVED",
        localName: "APPROVED"
    },
    {
        no: 3,
        name: "BACKGROUND_COMPOSER_APPROVAL_STATE_DENIED",
        localName: "DENIED"
    },
    {
        no: 4,
        name: "BACKGROUND_COMPOSER_APPROVAL_STATE_EXPIRED",
        localName: "EXPIRED"
    },
    {
        no: 5,
        name: "BACKGROUND_COMPOSER_APPROVAL_STATE_CANCELLED",
        localName: "CANCELLED"
    }
]), Gwe = c.makeEnum("aiserver.v1.BackgroundComposerApprovalKind", [
    {
        no: 0,
        name: "BACKGROUND_COMPOSER_APPROVAL_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_COMPOSER_APPROVAL_KIND_ORIGIN_CONTENTS_WRITE",
        localName: "ORIGIN_CONTENTS_WRITE"
    },
    {
        no: 2,
        name: "BACKGROUND_COMPOSER_APPROVAL_KIND_MCP_TOOL",
        localName: "MCP_TOOL"
    }
]), Vwe = c.makeEnum("aiserver.v1.WakeBackgroundComposerReason", [
    {
        no: 0,
        name: "WAKE_BACKGROUND_COMPOSER_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WAKE_BACKGROUND_COMPOSER_REASON_FOLLOWUP_COMPOSE",
        localName: "FOLLOWUP_COMPOSE"
    }
]), Tr = c.makeEnum("aiserver.v1.BackgroundComposerStatus", [
    {
        no: 0,
        name: "BACKGROUND_COMPOSER_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_COMPOSER_STATUS_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 2,
        name: "BACKGROUND_COMPOSER_STATUS_FINISHED",
        localName: "FINISHED"
    },
    {
        no: 3,
        name: "BACKGROUND_COMPOSER_STATUS_ERROR",
        localName: "ERROR"
    },
    {
        no: 4,
        name: "BACKGROUND_COMPOSER_STATUS_CREATING",
        localName: "CREATING"
    },
    {
        no: 5,
        name: "BACKGROUND_COMPOSER_STATUS_EXPIRED",
        localName: "EXPIRED"
    }
]), Of = c.makeEnum("aiserver.v1.CloudAgentWorkflowStatus", [
    {
        no: 0,
        name: "CLOUD_AGENT_WORKFLOW_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_AGENT_WORKFLOW_STATUS_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 2,
        name: "CLOUD_AGENT_WORKFLOW_STATUS_IDLE",
        localName: "IDLE"
    },
    {
        no: 3,
        name: "CLOUD_AGENT_WORKFLOW_STATUS_ERROR",
        localName: "ERROR"
    },
    {
        no: 4,
        name: "CLOUD_AGENT_WORKFLOW_STATUS_ARCHIVED",
        localName: "ARCHIVED"
    },
    {
        no: 5,
        name: "CLOUD_AGENT_WORKFLOW_STATUS_EXPIRED",
        localName: "EXPIRED"
    },
    {
        no: 6,
        name: "CLOUD_AGENT_WORKFLOW_STATUS_NOT_YET_STARTED",
        localName: "NOT_YET_STARTED"
    },
    {
        no: 7,
        name: "CLOUD_AGENT_WORKFLOW_STATUS_WAITING_FOR_BACKGROUND_WORK",
        localName: "WAITING_FOR_BACKGROUND_WORK"
    }
]), ke = c.makeEnum("aiserver.v1.BackgroundComposerSource", [
    {
        no: 0,
        name: "BACKGROUND_COMPOSER_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_COMPOSER_SOURCE_EDITOR",
        localName: "EDITOR"
    },
    {
        no: 2,
        name: "BACKGROUND_COMPOSER_SOURCE_SLACK",
        localName: "SLACK"
    },
    {
        no: 3,
        name: "BACKGROUND_COMPOSER_SOURCE_WEBSITE",
        localName: "WEBSITE"
    },
    {
        no: 4,
        name: "BACKGROUND_COMPOSER_SOURCE_LINEAR",
        localName: "LINEAR"
    },
    {
        no: 5,
        name: "BACKGROUND_COMPOSER_SOURCE_IOS_APP",
        localName: "IOS_APP"
    },
    {
        no: 6,
        name: "BACKGROUND_COMPOSER_SOURCE_API",
        localName: "API"
    },
    {
        no: 7,
        name: "BACKGROUND_COMPOSER_SOURCE_GITHUB",
        localName: "GITHUB"
    },
    {
        no: 8,
        name: "BACKGROUND_COMPOSER_SOURCE_CLI",
        localName: "CLI"
    },
    {
        no: 9,
        name: "BACKGROUND_COMPOSER_SOURCE_GITHUB_CI_AUTOFIX",
        localName: "GITHUB_CI_AUTOFIX"
    },
    {
        no: 10,
        name: "BACKGROUND_COMPOSER_SOURCE_GITLAB",
        localName: "GITLAB"
    },
    {
        no: 11,
        name: "BACKGROUND_COMPOSER_SOURCE_ENVIRONMENT_SETUP_WEB",
        localName: "ENVIRONMENT_SETUP_WEB"
    },
    {
        no: 12,
        name: "BACKGROUND_COMPOSER_SOURCE_GRIND_WEB",
        localName: "GRIND_WEB"
    },
    {
        no: 13,
        name: "BACKGROUND_COMPOSER_SOURCE_BUGBOT_AUTOFIX",
        localName: "BUGBOT_AUTOFIX"
    },
    {
        no: 14,
        name: "BACKGROUND_COMPOSER_SOURCE_AUTOMATIONS",
        localName: "AUTOMATIONS"
    },
    {
        no: 15,
        name: "BACKGROUND_COMPOSER_SOURCE_GRAPHITE_CHAT_WEB",
        localName: "GRAPHITE_CHAT_WEB"
    },
    {
        no: 16,
        name: "BACKGROUND_COMPOSER_SOURCE_GLASS",
        localName: "GLASS"
    },
    {
        no: 17,
        name: "BACKGROUND_COMPOSER_SOURCE_GRAPHITE_FULL_SELF_DRIVING",
        localName: "GRAPHITE_FULL_SELF_DRIVING"
    },
    {
        no: 18,
        name: "BACKGROUND_COMPOSER_SOURCE_TEAMS",
        localName: "TEAMS"
    },
    {
        no: 19,
        name: "BACKGROUND_COMPOSER_SOURCE_LOCAL",
        localName: "LOCAL"
    },
    {
        no: 20,
        name: "BACKGROUND_COMPOSER_SOURCE_JIRA",
        localName: "JIRA"
    },
    {
        no: 21,
        name: "BACKGROUND_COMPOSER_SOURCE_SDK",
        localName: "SDK"
    },
    {
        no: 22,
        name: "BACKGROUND_COMPOSER_SOURCE_FULL_SELF_DRIVING",
        localName: "FULL_SELF_DRIVING"
    },
    {
        no: 23,
        name: "BACKGROUND_COMPOSER_SOURCE_QABOT_FRONTEND",
        localName: "QABOT_FRONTEND"
    },
    {
        no: 24,
        name: "BACKGROUND_COMPOSER_SOURCE_AS_SUBAGENT_FROM_LOCAL",
        localName: "AS_SUBAGENT_FROM_LOCAL"
    },
    {
        no: 25,
        name: "BACKGROUND_COMPOSER_SOURCE_ENVIRONMENT_SETUP_GLASS",
        localName: "ENVIRONMENT_SETUP_GLASS"
    },
    {
        no: 26,
        name: "BACKGROUND_COMPOSER_SOURCE_SAND_CODING_SUBAGENT",
        localName: "SAND_CODING_SUBAGENT"
    },
    {
        no: 27,
        name: "BACKGROUND_COMPOSER_SOURCE_BITBUCKET",
        localName: "BITBUCKET"
    },
    {
        no: 28,
        name: "BACKGROUND_COMPOSER_SOURCE_CLOUD_META_AGENT",
        localName: "CLOUD_META_AGENT"
    },
    {
        no: 29,
        name: "BACKGROUND_COMPOSER_SOURCE_AS_SUBAGENT_FROM_CLOUD",
        localName: "AS_SUBAGENT_FROM_CLOUD"
    },
    {
        no: 30,
        name: "BACKGROUND_COMPOSER_SOURCE_ENVIRONMENT_SETUP_ONBOARDING_AUTO",
        localName: "ENVIRONMENT_SETUP_ONBOARDING_AUTO"
    },
    {
        no: 31,
        name: "BACKGROUND_COMPOSER_SOURCE_ORIGIN",
        localName: "ORIGIN"
    },
    {
        no: 32,
        name: "BACKGROUND_COMPOSER_SOURCE_AS_SIDE_CHAT_FROM_CLOUD",
        localName: "AS_SIDE_CHAT_FROM_CLOUD"
    },
    {
        no: 33,
        name: "BACKGROUND_COMPOSER_SOURCE_GROK_BOT",
        localName: "GROK_BOT"
    },
    {
        no: 34,
        name: "BACKGROUND_COMPOSER_SOURCE_CLOUD_ONBOARDING_WEB",
        localName: "CLOUD_ONBOARDING_WEB"
    },
    {
        no: 35,
        name: "BACKGROUND_COMPOSER_SOURCE_CHANGE_MONITOR_ONBOARDING_WEB",
        localName: "CHANGE_MONITOR_ONBOARDING_WEB"
    }
]), $we = c.makeEnum("aiserver.v1.OwnerType", [
    {
        no: 0,
        name: "OWNER_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "OWNER_TYPE_USER",
        localName: "USER"
    },
    {
        no: 2,
        name: "OWNER_TYPE_SERVICE_ACCOUNT",
        localName: "SERVICE_ACCOUNT"
    }
]), oL = c.makeEnum("aiserver.v1.CloudAgentDashboardRunStatus", [
    {
        no: 0,
        name: "CLOUD_AGENT_DASHBOARD_RUN_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_AGENT_DASHBOARD_RUN_STATUS_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 2,
        name: "CLOUD_AGENT_DASHBOARD_RUN_STATUS_FINISHED",
        localName: "FINISHED"
    },
    {
        no: 3,
        name: "CLOUD_AGENT_DASHBOARD_RUN_STATUS_ERROR",
        localName: "ERROR"
    },
    {
        no: 4,
        name: "CLOUD_AGENT_DASHBOARD_RUN_STATUS_INSTALL_FAILED",
        localName: "INSTALL_FAILED"
    }
]), jwe = c.makeEnum("aiserver.v1.CloudAgentDashboardRunSortField", [
    {
        no: 0,
        name: "CLOUD_AGENT_DASHBOARD_RUN_SORT_FIELD_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_AGENT_DASHBOARD_RUN_SORT_FIELD_CREATED_AT",
        localName: "CREATED_AT"
    }
]), Hwe = c.makeEnum("aiserver.v1.CloudAgentDashboardRunSortDirection", [
    {
        no: 0,
        name: "CLOUD_AGENT_DASHBOARD_RUN_SORT_DIRECTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_AGENT_DASHBOARD_RUN_SORT_DIRECTION_DESC",
        localName: "DESC"
    },
    {
        no: 2,
        name: "CLOUD_AGENT_DASHBOARD_RUN_SORT_DIRECTION_ASC",
        localName: "ASC"
    }
]), qwe = c.makeEnum("aiserver.v1.CloudAgentRunEventCategory", [
    {
        no: 0,
        name: "CLOUD_AGENT_RUN_EVENT_CATEGORY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_AGENT_RUN_EVENT_CATEGORY_BUILD",
        localName: "BUILD"
    },
    {
        no: 2,
        name: "CLOUD_AGENT_RUN_EVENT_CATEGORY_AGENT_SETUP",
        localName: "AGENT_SETUP"
    },
    {
        no: 3,
        name: "CLOUD_AGENT_RUN_EVENT_CATEGORY_AGENT_RUN",
        localName: "AGENT_RUN"
    }
]), Kwe = c.makeEnum("aiserver.v1.CloudAgentRunEventLogLevel", [
    {
        no: 0,
        name: "CLOUD_AGENT_RUN_EVENT_LOG_LEVEL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_AGENT_RUN_EVENT_LOG_LEVEL_INFO",
        localName: "INFO"
    },
    {
        no: 2,
        name: "CLOUD_AGENT_RUN_EVENT_LOG_LEVEL_WARN",
        localName: "WARN"
    },
    {
        no: 3,
        name: "CLOUD_AGENT_RUN_EVENT_LOG_LEVEL_ERROR",
        localName: "ERROR"
    }
]), cL = c.makeEnum("aiserver.v1.PRStatus", [
    {
        no: 0,
        name: "PR_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "PR_STATUS_OPEN"
    },
    {
        no: 2,
        name: "PR_STATUS_DRAFT"
    },
    {
        no: 3,
        name: "PR_STATUS_MERGED"
    },
    {
        no: 4,
        name: "PR_STATUS_CLOSED"
    }
]), lL = c.makeEnum("aiserver.v1.CloudSubagentParentAgentType", [
    {
        no: 0,
        name: "CLOUD_SUBAGENT_PARENT_AGENT_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_SUBAGENT_PARENT_AGENT_TYPE_LOCAL",
        localName: "LOCAL"
    },
    {
        no: 2,
        name: "CLOUD_SUBAGENT_PARENT_AGENT_TYPE_CLOUD",
        localName: "CLOUD"
    }
]), zwe = c.makeEnum("aiserver.v1.CloudSubagentParentSpawnKind", [
    {
        no: 0,
        name: "CLOUD_SUBAGENT_PARENT_SPAWN_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_SUBAGENT_PARENT_SPAWN_KIND_TASK",
        localName: "TASK"
    },
    {
        no: 2,
        name: "CLOUD_SUBAGENT_PARENT_SPAWN_KIND_EVENT_SUBSCRIPTION",
        localName: "EVENT_SUBSCRIPTION"
    },
    {
        no: 3,
        name: "CLOUD_SUBAGENT_PARENT_SPAWN_KIND_ADOPTED",
        localName: "ADOPTED"
    }
]), Ywe = c.makeEnum("aiserver.v1.EnsembleStatus", [
    {
        no: 0,
        name: "ENSEMBLE_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENSEMBLE_STATUS_PARENT",
        localName: "PARENT"
    },
    {
        no: 2,
        name: "ENSEMBLE_STATUS_CHILD",
        localName: "CHILD"
    }
]), Jwe = c.makeEnum("aiserver.v1.StartTargetSelection", [
    {
        no: 0,
        name: "START_TARGET_SELECTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "START_TARGET_SELECTION_ENVIRONMENT",
        localName: "ENVIRONMENT"
    },
    {
        no: 2,
        name: "START_TARGET_SELECTION_REPOS",
        localName: "REPOS"
    },
    {
        no: 3,
        name: "START_TARGET_SELECTION_EXISTING_AGENT",
        localName: "EXISTING_AGENT"
    }
]), dL = c.makeEnum("aiserver.v1.ForkBackgroundComposerMode", [
    {
        no: 0,
        name: "FORK_BACKGROUND_COMPOSER_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FORK_BACKGROUND_COMPOSER_MODE_CONVERSATION",
        localName: "CONVERSATION"
    },
    {
        no: 2,
        name: "FORK_BACKGROUND_COMPOSER_MODE_POD",
        localName: "POD"
    }
]), Xwe = c.makeEnum("aiserver.v1.StreamConversationPurpose", [
    {
        no: 0,
        name: "STREAM_CONVERSATION_PURPOSE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STREAM_CONVERSATION_PURPOSE_LIVE",
        localName: "LIVE"
    },
    {
        no: 2,
        name: "STREAM_CONVERSATION_PURPOSE_PREWARM",
        localName: "PREWARM"
    }
]), Qwe = c.makeEnum("aiserver.v1.PlanFollowupType", [
    {
        no: 0,
        name: "PLAN_FOLLOWUP_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PLAN_FOLLOWUP_TYPE_PLAN",
        localName: "PLAN"
    },
    {
        no: 2,
        name: "PLAN_FOLLOWUP_TYPE_EXECUTE",
        localName: "EXECUTE"
    }
]), Zwe = c.makeEnum("aiserver.v1.CloudAgentTimingEventType", [
    {
        no: 0,
        name: "CLOUD_AGENT_TIMING_EVENT_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_AGENT_TIMING_EVENT_TYPE_REQUEST_RECEIVED",
        localName: "REQUEST_RECEIVED"
    },
    {
        no: 2,
        name: "CLOUD_AGENT_TIMING_EVENT_TYPE_PREWARMED_POD_RECEIVED",
        localName: "PREWARMED_POD_RECEIVED"
    },
    {
        no: 3,
        name: "CLOUD_AGENT_TIMING_EVENT_TYPE_POD_REQUESTED",
        localName: "POD_REQUESTED"
    },
    {
        no: 4,
        name: "CLOUD_AGENT_TIMING_EVENT_TYPE_POD_READY",
        localName: "POD_READY"
    },
    {
        no: 5,
        name: "CLOUD_AGENT_TIMING_EVENT_TYPE_FIRST_TOKEN",
        localName: "FIRST_TOKEN"
    },
    {
        no: 6,
        name: "CLOUD_AGENT_TIMING_EVENT_TYPE_STALE_SNAPSHOT_USED",
        localName: "STALE_SNAPSHOT_USED"
    }
]), e1e = c.makeEnum("aiserver.v1.BackgroundComposerDesktopLeaseAction", [
    {
        no: 0,
        name: "BACKGROUND_COMPOSER_DESKTOP_LEASE_ACTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_COMPOSER_DESKTOP_LEASE_ACTION_ACQUIRE",
        localName: "ACQUIRE"
    },
    {
        no: 2,
        name: "BACKGROUND_COMPOSER_DESKTOP_LEASE_ACTION_RELEASE",
        localName: "RELEASE"
    }
]), t1e = c.makeEnum("aiserver.v1.GithubAccessErrorType", [
    {
        no: 0,
        name: "GITHUB_ACCESS_ERROR_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "GITHUB_ACCESS_ERROR_TYPE_NONE",
        localName: "NONE"
    },
    {
        no: 2,
        name: "GITHUB_ACCESS_ERROR_TYPE_NO_AUTH_TOKEN",
        localName: "NO_AUTH_TOKEN"
    },
    {
        no: 3,
        name: "GITHUB_ACCESS_ERROR_TYPE_APP_NOT_INSTALLED",
        localName: "APP_NOT_INSTALLED"
    },
    {
        no: 4,
        name: "GITHUB_ACCESS_ERROR_TYPE_USER_NO_ACCESS",
        localName: "USER_NO_ACCESS"
    },
    {
        no: 5,
        name: "GITHUB_ACCESS_ERROR_TYPE_APP_INSUFFICIENT_PERMS",
        localName: "APP_INSUFFICIENT_PERMS"
    },
    {
        no: 6,
        name: "GITHUB_ACCESS_ERROR_TYPE_PUBLIC_REPO",
        localName: "PUBLIC_REPO"
    }
]), gl = c.makeEnum("aiserver.v1.EnvironmentWriteSource", [
    {
        no: 0,
        name: "ENVIRONMENT_WRITE_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENVIRONMENT_WRITE_SOURCE_DASHBOARD",
        localName: "DASHBOARD"
    },
    {
        no: 2,
        name: "ENVIRONMENT_WRITE_SOURCE_SETUP_FLOW",
        localName: "SETUP_FLOW"
    },
    {
        no: 3,
        name: "ENVIRONMENT_WRITE_SOURCE_SDK_V1",
        localName: "SDK_V1"
    },
    {
        no: 4,
        name: "ENVIRONMENT_WRITE_SOURCE_RESTORE",
        localName: "RESTORE"
    },
    {
        no: 5,
        name: "ENVIRONMENT_WRITE_SOURCE_PUBLIC_API",
        localName: "PUBLIC_API"
    }
]), n1e = c.makeEnum("aiserver.v1.EnvironmentType", [
    {
        no: 0,
        name: "ENVIRONMENT_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENVIRONMENT_TYPE_PERSONAL",
        localName: "PERSONAL"
    },
    {
        no: 2,
        name: "ENVIRONMENT_TYPE_TEAM",
        localName: "TEAM"
    }
]), Lf = c.makeEnum("aiserver.v1.LogicalEnvironmentScope", [
    {
        no: 0,
        name: "LOGICAL_ENVIRONMENT_SCOPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LOGICAL_ENVIRONMENT_SCOPE_PERSONAL",
        localName: "PERSONAL"
    },
    {
        no: 2,
        name: "LOGICAL_ENVIRONMENT_SCOPE_TEAM",
        localName: "TEAM"
    },
    {
        no: 3,
        name: "LOGICAL_ENVIRONMENT_SCOPE_REPOSITORY",
        localName: "REPOSITORY"
    }
]), r1e = c.makeEnum("aiserver.v1.EnvironmentIneligibilityReason", [
    {
        no: 0,
        name: "ENVIRONMENT_INELIGIBILITY_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENVIRONMENT_INELIGIBILITY_REASON_GITHUB_REPO_REVERSE_MIRRORED",
        localName: "GITHUB_REPO_REVERSE_MIRRORED"
    }
]), uL = c.makeEnum("aiserver.v1.EnvironmentBuildRowStatus", [
    {
        no: 0,
        name: "ENVIRONMENT_BUILD_ROW_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENVIRONMENT_BUILD_ROW_STATUS_IN_PROGRESS",
        localName: "IN_PROGRESS"
    },
    {
        no: 2,
        name: "ENVIRONMENT_BUILD_ROW_STATUS_SUCCEEDED",
        localName: "SUCCEEDED"
    },
    {
        no: 3,
        name: "ENVIRONMENT_BUILD_ROW_STATUS_FAILED",
        localName: "FAILED"
    },
    {
        no: 4,
        name: "ENVIRONMENT_BUILD_ROW_STATUS_CANCELLED",
        localName: "CANCELLED"
    },
    {
        no: 5,
        name: "ENVIRONMENT_BUILD_ROW_STATUS_SKIPPED",
        localName: "SKIPPED"
    }
]), s1e = c.makeEnum("aiserver.v1.EnvironmentBuildRowTriggerType", [
    {
        no: 0,
        name: "ENVIRONMENT_BUILD_ROW_TRIGGER_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENVIRONMENT_BUILD_ROW_TRIGGER_TYPE_MANUAL",
        localName: "MANUAL"
    },
    {
        no: 2,
        name: "ENVIRONMENT_BUILD_ROW_TRIGGER_TYPE_RECURRING",
        localName: "RECURRING"
    },
    {
        no: 3,
        name: "ENVIRONMENT_BUILD_ROW_TRIGGER_TYPE_CONFIG_CHANGE",
        localName: "CONFIG_CHANGE"
    }
]), i1e = c.makeEnum("aiserver.v1.EnvironmentBuildRowSource", [
    {
        no: 0,
        name: "ENVIRONMENT_BUILD_ROW_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENVIRONMENT_BUILD_ROW_SOURCE_SYSTEM",
        localName: "SYSTEM"
    },
    {
        no: 2,
        name: "ENVIRONMENT_BUILD_ROW_SOURCE_WEBSITE",
        localName: "WEBSITE"
    },
    {
        no: 3,
        name: "ENVIRONMENT_BUILD_ROW_SOURCE_API",
        localName: "API"
    },
    {
        no: 4,
        name: "ENVIRONMENT_BUILD_ROW_SOURCE_AGENT",
        localName: "AGENT"
    }
]), a1e = c.makeEnum("aiserver.v1.EnvironmentBuildRowFailureType", [
    {
        no: 0,
        name: "ENVIRONMENT_BUILD_ROW_FAILURE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENVIRONMENT_BUILD_ROW_FAILURE_TYPE_INSTALL_FAILED",
        localName: "INSTALL_FAILED"
    },
    {
        no: 2,
        name: "ENVIRONMENT_BUILD_ROW_FAILURE_TYPE_TERMINAL_FAILURE",
        localName: "TERMINAL_FAILURE"
    }
]), o1e = c.makeEnum("aiserver.v1.EnvironmentBuildSnapshotReapState", [
    {
        no: 0,
        name: "ENVIRONMENT_BUILD_SNAPSHOT_REAP_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENVIRONMENT_BUILD_SNAPSHOT_REAP_STATE_ACTIVE",
        localName: "ACTIVE"
    },
    {
        no: 2,
        name: "ENVIRONMENT_BUILD_SNAPSHOT_REAP_STATE_REAP_REQUESTED",
        localName: "REAP_REQUESTED"
    },
    {
        no: 3,
        name: "ENVIRONMENT_BUILD_SNAPSHOT_REAP_STATE_DELETED",
        localName: "DELETED"
    }
]), c1e = c.makeEnum("aiserver.v1.MultiRepoEnvironmentReusePolicy", [
    {
        no: 0,
        name: "MULTI_REPO_ENVIRONMENT_REUSE_POLICY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MULTI_REPO_ENVIRONMENT_REUSE_POLICY_SAME_SCOPE_ONLY",
        localName: "SAME_SCOPE_ONLY"
    },
    {
        no: 2,
        name: "MULTI_REPO_ENVIRONMENT_REUSE_POLICY_ALLOW_TEAM_NAMED_FOR_PERSONAL",
        localName: "ALLOW_TEAM_NAMED_FOR_PERSONAL"
    }
]), bE = c.makeEnum("aiserver.v1.EnvironmentVersionSourceKind", [
    {
        no: 0,
        name: "ENVIRONMENT_VERSION_SOURCE_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENVIRONMENT_VERSION_SOURCE_KIND_REPO_FILE",
        localName: "REPO_FILE"
    },
    {
        no: 2,
        name: "ENVIRONMENT_VERSION_SOURCE_KIND_DATABASE_USER",
        localName: "DATABASE_USER"
    },
    {
        no: 3,
        name: "ENVIRONMENT_VERSION_SOURCE_KIND_DATABASE_TEAM",
        localName: "DATABASE_TEAM"
    },
    {
        no: 4,
        name: "ENVIRONMENT_VERSION_SOURCE_KIND_REQUEST_OVERRIDE",
        localName: "REQUEST_OVERRIDE"
    }
]), mL = c.makeEnum("aiserver.v1.EnvironmentUpdateEventKind", [
    {
        no: 0,
        name: "ENVIRONMENT_UPDATE_EVENT_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENVIRONMENT_UPDATE_EVENT_KIND_CREATED",
        localName: "CREATED"
    },
    {
        no: 2,
        name: "ENVIRONMENT_UPDATE_EVENT_KIND_UPDATED",
        localName: "UPDATED"
    },
    {
        no: 3,
        name: "ENVIRONMENT_UPDATE_EVENT_KIND_DELETED",
        localName: "DELETED"
    },
    {
        no: 4,
        name: "ENVIRONMENT_UPDATE_EVENT_KIND_FORWARD_FILLED",
        localName: "FORWARD_FILLED"
    }
]), pL = c.makeEnum("aiserver.v1.AutoCreatePrSetting", [
    {
        no: 0,
        name: "AUTO_CREATE_PR_SETTING_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AUTO_CREATE_PR_SETTING_ALWAYS",
        localName: "ALWAYS"
    },
    {
        no: 2,
        name: "AUTO_CREATE_PR_SETTING_SINGLE",
        localName: "SINGLE"
    },
    {
        no: 3,
        name: "AUTO_CREATE_PR_SETTING_NEVER",
        localName: "NEVER"
    }
]), l1e = c.makeEnum("aiserver.v1.BackgroundComposerQuickActionExecutionMode", [
    {
        no: 0,
        name: "BACKGROUND_COMPOSER_QUICK_ACTION_EXECUTION_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_COMPOSER_QUICK_ACTION_EXECUTION_MODE_SUBAGENT",
        localName: "SUBAGENT"
    },
    {
        no: 2,
        name: "BACKGROUND_COMPOSER_QUICK_ACTION_EXECUTION_MODE_PARENT_AGENT",
        localName: "PARENT_AGENT"
    }
]), d1e = c.makeEnum("aiserver.v1.BackgroundComposerQuickActionSubagentTemplateScope", [
    {
        no: 0,
        name: "BACKGROUND_COMPOSER_QUICK_ACTION_SUBAGENT_TEMPLATE_SCOPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_COMPOSER_QUICK_ACTION_SUBAGENT_TEMPLATE_SCOPE_BUILTIN",
        localName: "BUILTIN"
    },
    {
        no: 2,
        name: "BACKGROUND_COMPOSER_QUICK_ACTION_SUBAGENT_TEMPLATE_SCOPE_USER",
        localName: "USER"
    },
    {
        no: 3,
        name: "BACKGROUND_COMPOSER_QUICK_ACTION_SUBAGENT_TEMPLATE_SCOPE_TEAM",
        localName: "TEAM"
    }
]), u1e = c.makeEnum("aiserver.v1.BackgroundComposerQuickActionSubagentTemplateOperation", [
    {
        no: 0,
        name: "BACKGROUND_COMPOSER_QUICK_ACTION_SUBAGENT_TEMPLATE_OPERATION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_COMPOSER_QUICK_ACTION_SUBAGENT_TEMPLATE_OPERATION_CREATE",
        localName: "CREATE"
    },
    {
        no: 2,
        name: "BACKGROUND_COMPOSER_QUICK_ACTION_SUBAGENT_TEMPLATE_OPERATION_UPDATE",
        localName: "UPDATE"
    },
    {
        no: 3,
        name: "BACKGROUND_COMPOSER_QUICK_ACTION_SUBAGENT_TEMPLATE_OPERATION_DELETE",
        localName: "DELETE"
    }
]), m1e = c.makeEnum("aiserver.v1.PRDeploymentState", [
    {
        no: 0,
        name: "PR_DEPLOYMENT_STATE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "PR_DEPLOYMENT_STATE_UNKNOWN"
    },
    {
        no: 2,
        name: "PR_DEPLOYMENT_STATE_PENDING"
    },
    {
        no: 3,
        name: "PR_DEPLOYMENT_STATE_QUEUED"
    },
    {
        no: 4,
        name: "PR_DEPLOYMENT_STATE_IN_PROGRESS"
    },
    {
        no: 5,
        name: "PR_DEPLOYMENT_STATE_SUCCESS"
    },
    {
        no: 6,
        name: "PR_DEPLOYMENT_STATE_FAILURE"
    },
    {
        no: 7,
        name: "PR_DEPLOYMENT_STATE_ERROR"
    },
    {
        no: 8,
        name: "PR_DEPLOYMENT_STATE_INACTIVE"
    },
    {
        no: 9,
        name: "PR_DEPLOYMENT_STATE_WAITING"
    },
    {
        no: 10,
        name: "PR_DEPLOYMENT_STATE_ACTIVE"
    },
    {
        no: 11,
        name: "PR_DEPLOYMENT_STATE_ABANDONED"
    },
    {
        no: 12,
        name: "PR_DEPLOYMENT_STATE_DESTROYED"
    },
    {
        no: 13,
        name: "PR_DEPLOYMENT_STATE_BLOCKED"
    },
    {
        no: 14,
        name: "PR_DEPLOYMENT_STATE_CANCELED"
    }
]), p1e = c.makeEnum("aiserver.v1.PRDeploymentStatusState", [
    {
        no: 0,
        name: "PR_DEPLOYMENT_STATUS_STATE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "PR_DEPLOYMENT_STATUS_STATE_UNKNOWN"
    },
    {
        no: 2,
        name: "PR_DEPLOYMENT_STATUS_STATE_PENDING"
    },
    {
        no: 3,
        name: "PR_DEPLOYMENT_STATUS_STATE_QUEUED"
    },
    {
        no: 4,
        name: "PR_DEPLOYMENT_STATUS_STATE_IN_PROGRESS"
    },
    {
        no: 5,
        name: "PR_DEPLOYMENT_STATUS_STATE_SUCCESS"
    },
    {
        no: 6,
        name: "PR_DEPLOYMENT_STATUS_STATE_FAILURE"
    },
    {
        no: 7,
        name: "PR_DEPLOYMENT_STATUS_STATE_ERROR"
    },
    {
        no: 8,
        name: "PR_DEPLOYMENT_STATUS_STATE_INACTIVE"
    },
    {
        no: 9,
        name: "PR_DEPLOYMENT_STATUS_STATE_WAITING"
    },
    {
        no: 10,
        name: "PR_DEPLOYMENT_STATUS_STATE_BLOCKED"
    },
    {
        no: 11,
        name: "PR_DEPLOYMENT_STATUS_STATE_CANCELED"
    }
]), Uf = c.makeEnum("aiserver.v1.PushPlatform", [
    {
        no: 0,
        name: "PUSH_PLATFORM_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PUSH_PLATFORM_IOS",
        localName: "IOS"
    },
    {
        no: 2,
        name: "PUSH_PLATFORM_ANDROID",
        localName: "ANDROID"
    },
    {
        no: 3,
        name: "PUSH_PLATFORM_WEB",
        localName: "WEB"
    }
]), h1e = c.makeEnum("aiserver.v1.OriginAgentApprovalResolution", [
    {
        no: 0,
        name: "ORIGIN_AGENT_APPROVAL_RESOLUTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ORIGIN_AGENT_APPROVAL_RESOLUTION_APPROVED",
        localName: "APPROVED"
    },
    {
        no: 2,
        name: "ORIGIN_AGENT_APPROVAL_RESOLUTION_DENIED",
        localName: "DENIED"
    }
]), g1e = c.makeEnum("aiserver.v1.BackgroundComposerAccessDenialReason", [
    {
        no: 0,
        name: "BACKGROUND_COMPOSER_ACCESS_DENIAL_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_COMPOSER_ACCESS_DENIAL_REASON_OTHER_OWNER",
        localName: "OTHER_OWNER"
    },
    {
        no: 2,
        name: "BACKGROUND_COMPOSER_ACCESS_DENIAL_REASON_TEAM_POLICY",
        localName: "TEAM_POLICY"
    }
]), f1e = c.makeEnum("aiserver.v1.StartingMessageType", [
    {
        no: 0,
        name: "STARTING_MESSAGE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STARTING_MESSAGE_TYPE_USER_MESSAGE",
        localName: "USER_MESSAGE"
    },
    {
        no: 2,
        name: "STARTING_MESSAGE_TYPE_PLAN_START",
        localName: "PLAN_START"
    },
    {
        no: 3,
        name: "STARTING_MESSAGE_TYPE_PLAN_EXECUTE",
        localName: "PLAN_EXECUTE"
    }
]), _1e = c.makeEnum("aiserver.v1.CarriedRequestContextSource", [
    {
        no: 0,
        name: "CARRIED_REQUEST_CONTEXT_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CARRIED_REQUEST_CONTEXT_SOURCE_TURN_PERSIST",
        localName: "TURN_PERSIST"
    },
    {
        no: 2,
        name: "CARRIED_REQUEST_CONTEXT_SOURCE_POST_JOIN_RECOMPUTE",
        localName: "POST_JOIN_RECOMPUTE"
    },
    {
        no: 3,
        name: "CARRIED_REQUEST_CONTEXT_SOURCE_POST_TURN_RECOMPUTE",
        localName: "POST_TURN_RECOMPUTE"
    },
    {
        no: 4,
        name: "CARRIED_REQUEST_CONTEXT_SOURCE_STEP0_LIVE",
        localName: "STEP0_LIVE"
    },
    {
        no: 5,
        name: "CARRIED_REQUEST_CONTEXT_SOURCE_STEP0_BAKE_OVERLAY",
        localName: "STEP0_BAKE_OVERLAY"
    },
    {
        no: 6,
        name: "CARRIED_REQUEST_CONTEXT_SOURCE_TURN_DONE_RECOMPUTE",
        localName: "TURN_DONE_RECOMPUTE"
    },
    {
        no: 7,
        name: "CARRIED_REQUEST_CONTEXT_SOURCE_STEP0_CARRIED_STALE_MCP",
        localName: "STEP0_CARRIED_STALE_MCP"
    }
]), hL = c.makeEnum("aiserver.v1.OpenInteractionState", [
    {
        no: 0,
        name: "OPEN_INTERACTION_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "OPEN_INTERACTION_STATE_PENDING",
        localName: "PENDING"
    },
    {
        no: 2,
        name: "OPEN_INTERACTION_STATE_ANSWERED",
        localName: "ANSWERED"
    },
    {
        no: 3,
        name: "OPEN_INTERACTION_STATE_SKIPPED",
        localName: "SKIPPED"
    },
    {
        no: 4,
        name: "OPEN_INTERACTION_STATE_RETRACTED",
        localName: "RETRACTED"
    },
    {
        no: 5,
        name: "OPEN_INTERACTION_STATE_SUPERSEDED",
        localName: "SUPERSEDED"
    },
    {
        no: 6,
        name: "OPEN_INTERACTION_STATE_EXPIRED",
        localName: "EXPIRED"
    }
]), v1e = c.makeEnum("aiserver.v1.CloudAgentStartupWarningType", [
    {
        no: 0,
        name: "CLOUD_AGENT_STARTUP_WARNING_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_AGENT_STARTUP_WARNING_TYPE_SNAPSHOT_EXPIRED",
        localName: "SNAPSHOT_EXPIRED"
    },
    {
        no: 2,
        name: "CLOUD_AGENT_STARTUP_WARNING_TYPE_SNAPSHOT_INVALID",
        localName: "SNAPSHOT_INVALID"
    },
    {
        no: 3,
        name: "CLOUD_AGENT_STARTUP_WARNING_TYPE_SNAPSHOT_NOT_FOUND_OR_NO_ACCESS",
        localName: "SNAPSHOT_NOT_FOUND_OR_NO_ACCESS"
    },
    {
        no: 4,
        name: "CLOUD_AGENT_STARTUP_WARNING_TYPE_SNAPSHOT_COPY_FAILED",
        localName: "SNAPSHOT_COPY_FAILED"
    },
    {
        no: 5,
        name: "CLOUD_AGENT_STARTUP_WARNING_TYPE_POD_CREATE_FAILED_AFTER_TURN",
        localName: "POD_CREATE_FAILED_AFTER_TURN"
    }
]), T1e = c.makeEnum("aiserver.v1.ModelRoutingLoadTestCancelOutcome", [
    {
        no: 0,
        name: "MODEL_ROUTING_LOAD_TEST_CANCEL_OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MODEL_ROUTING_LOAD_TEST_CANCEL_OUTCOME_CANCEL_REQUESTED",
        localName: "CANCEL_REQUESTED"
    },
    {
        no: 2,
        name: "MODEL_ROUTING_LOAD_TEST_CANCEL_OUTCOME_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 3,
        name: "MODEL_ROUTING_LOAD_TEST_CANCEL_OUTCOME_ALREADY_CLOSED",
        localName: "ALREADY_CLOSED"
    }
]), k1e = c.makeEnum("aiserver.v1.CloudAgentMemoryDbLogSource", [
    {
        no: 0,
        name: "CLOUD_AGENT_MEMORY_DB_LOG_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_AGENT_MEMORY_DB_LOG_SOURCE_DOCKER_BUILD",
        localName: "DOCKER_BUILD"
    },
    {
        no: 2,
        name: "CLOUD_AGENT_MEMORY_DB_LOG_SOURCE_SETUP",
        localName: "SETUP"
    }
]), gL = c.makeEnum("aiserver.v1.PrivateWorkerListScope", [
    {
        no: 0,
        name: "PRIVATE_WORKER_LIST_SCOPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PRIVATE_WORKER_LIST_SCOPE_ALL",
        localName: "ALL"
    },
    {
        no: 2,
        name: "PRIVATE_WORKER_LIST_SCOPE_TEAM_POOL",
        localName: "TEAM_POOL"
    },
    {
        no: 3,
        name: "PRIVATE_WORKER_LIST_SCOPE_PERSONAL",
        localName: "PERSONAL"
    }
]), S1e = c.makeEnum("aiserver.v1.AdminKillBackgroundComposerSignalOutcome", [
    {
        no: 0,
        name: "ADMIN_KILL_BACKGROUND_COMPOSER_SIGNAL_OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ADMIN_KILL_BACKGROUND_COMPOSER_SIGNAL_OUTCOME_DELIVERED",
        localName: "DELIVERED"
    },
    {
        no: 2,
        name: "ADMIN_KILL_BACKGROUND_COMPOSER_SIGNAL_OUTCOME_NOT_RUNNING",
        localName: "NOT_RUNNING"
    },
    {
        no: 3,
        name: "ADMIN_KILL_BACKGROUND_COMPOSER_SIGNAL_OUTCOME_FAILED",
        localName: "FAILED"
    }
]), y1e = c.makeEnum("aiserver.v1.AdminActiveBackgroundComposerExecutionEnvironment", [
    {
        no: 0,
        name: "ADMIN_ACTIVE_BACKGROUND_COMPOSER_EXECUTION_ENVIRONMENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ADMIN_ACTIVE_BACKGROUND_COMPOSER_EXECUTION_ENVIRONMENT_CURSOR_CLOUD",
        localName: "CURSOR_CLOUD"
    },
    {
        no: 2,
        name: "ADMIN_ACTIVE_BACKGROUND_COMPOSER_EXECUTION_ENVIRONMENT_SELF_HOSTED_PRIVATE_WORKER",
        localName: "SELF_HOSTED_PRIVATE_WORKER"
    }
]), w1e = c.makeEnum("aiserver.v1.PendingPrivateWorkerRequestEventType", [
    {
        no: 0,
        name: "PENDING_PRIVATE_WORKER_REQUEST_EVENT_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PENDING_PRIVATE_WORKER_REQUEST_EVENT_TYPE_CREATED",
        localName: "CREATED"
    },
    {
        no: 2,
        name: "PENDING_PRIVATE_WORKER_REQUEST_EVENT_TYPE_CLAIMED",
        localName: "CLAIMED"
    },
    {
        no: 3,
        name: "PENDING_PRIVATE_WORKER_REQUEST_EVENT_TYPE_EXPIRED",
        localName: "EXPIRED"
    },
    {
        no: 4,
        name: "PENDING_PRIVATE_WORKER_REQUEST_EVENT_TYPE_HEARTBEAT",
        localName: "HEARTBEAT"
    },
    {
        no: 5,
        name: "PENDING_PRIVATE_WORKER_REQUEST_EVENT_TYPE_CLAIMED_OFFLINE",
        localName: "CLAIMED_OFFLINE"
    }
]), RE = c.makeEnum("aiserver.v1.PrivateWorkerPoolScope", [
    {
        no: 0,
        name: "PRIVATE_WORKER_POOL_SCOPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PRIVATE_WORKER_POOL_SCOPE_USER",
        localName: "USER"
    },
    {
        no: 2,
        name: "PRIVATE_WORKER_POOL_SCOPE_TEAM",
        localName: "TEAM"
    }
]), E1e = c.makeEnum("aiserver.v1.PrivateWorkerStatusFilter", [
    {
        no: 0,
        name: "PRIVATE_WORKER_STATUS_FILTER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PRIVATE_WORKER_STATUS_FILTER_ALL",
        localName: "ALL"
    },
    {
        no: 2,
        name: "PRIVATE_WORKER_STATUS_FILTER_IN_USE",
        localName: "IN_USE"
    },
    {
        no: 3,
        name: "PRIVATE_WORKER_STATUS_FILTER_IDLE",
        localName: "IDLE"
    }
]), b1e = c.makeEnum("aiserver.v1.WriteCanvasFailReason", [
    {
        no: 0,
        name: "WRITE_CANVAS_FAIL_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WRITE_CANVAS_FAIL_REASON_TYPECHECK_FAILED",
        localName: "TYPECHECK_FAILED"
    },
    {
        no: 2,
        name: "WRITE_CANVAS_FAIL_REASON_COMPILE_FAILED",
        localName: "COMPILE_FAILED"
    },
    {
        no: 3,
        name: "WRITE_CANVAS_FAIL_REASON_TOO_LARGE",
        localName: "TOO_LARGE"
    },
    {
        no: 4,
        name: "WRITE_CANVAS_FAIL_REASON_UNAVAILABLE",
        localName: "UNAVAILABLE"
    },
    {
        no: 5,
        name: "WRITE_CANVAS_FAIL_REASON_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 6,
        name: "WRITE_CANVAS_FAIL_REASON_REFUSED",
        localName: "REFUSED"
    },
    {
        no: 7,
        name: "WRITE_CANVAS_FAIL_REASON_CONFLICT",
        localName: "CONFLICT"
    }
]), R1e = c.makeEnum("aiserver.v1.ReadCanvasFailReason", [
    {
        no: 0,
        name: "READ_CANVAS_FAIL_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "READ_CANVAS_FAIL_REASON_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 2,
        name: "READ_CANVAS_FAIL_REASON_UNAVAILABLE",
        localName: "UNAVAILABLE"
    },
    {
        no: 3,
        name: "READ_CANVAS_FAIL_REASON_REFUSED",
        localName: "REFUSED"
    }
]), C1e = c.makeEnum("aiserver.v1.PromptUploadCompletionStatus", [
    {
        no: 0,
        name: "PROMPT_UPLOAD_COMPLETION_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PROMPT_UPLOAD_COMPLETION_STATUS_COMPLETED",
        localName: "COMPLETED"
    },
    {
        no: 2,
        name: "PROMPT_UPLOAD_COMPLETION_STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 3,
        name: "PROMPT_UPLOAD_COMPLETION_STATUS_NO_PARTS",
        localName: "NO_PARTS"
    },
    {
        no: 5,
        name: "PROMPT_UPLOAD_COMPLETION_STATUS_INVALID_PARTS",
        localName: "INVALID_PARTS"
    },
    {
        no: 4,
        name: "PROMPT_UPLOAD_COMPLETION_STATUS_SIZE_MISMATCH",
        localName: "SIZE_MISMATCH"
    }
]), I1e = c.makeEnum("aiserver.v1.KeyringScope", [
    {
        no: 0,
        name: "KEYRING_SCOPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "KEYRING_SCOPE_PERSONAL",
        localName: "PERSONAL"
    },
    {
        no: 2,
        name: "KEYRING_SCOPE_TEAM",
        localName: "TEAM"
    }
]), A1e = c.makeEnum("aiserver.v1.KeyringListMode", [
    {
        no: 0,
        name: "KEYRING_LIST_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "KEYRING_LIST_MODE_MANAGE",
        localName: "MANAGE"
    },
    {
        no: 2,
        name: "KEYRING_LIST_MODE_ATTACH",
        localName: "ATTACH"
    },
    {
        no: 3,
        name: "KEYRING_LIST_MODE_ANY_ACCESS",
        localName: "ANY_ACCESS"
    }
]), xf = c.makeEnum("aiserver.v1.KeyringPrincipalType", [
    {
        no: 0,
        name: "KEYRING_PRINCIPAL_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "KEYRING_PRINCIPAL_TYPE_USER",
        localName: "USER"
    },
    {
        no: 2,
        name: "KEYRING_PRINCIPAL_TYPE_TEAM",
        localName: "TEAM"
    },
    {
        no: 3,
        name: "KEYRING_PRINCIPAL_TYPE_GROUP",
        localName: "GROUP"
    }
]), CE = c.makeEnum("aiserver.v1.KeyringAccessLevel", [
    {
        no: 0,
        name: "KEYRING_ACCESS_LEVEL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "KEYRING_ACCESS_LEVEL_ATTACH",
        localName: "ATTACH"
    },
    {
        no: 2,
        name: "KEYRING_ACCESS_LEVEL_MANAGE",
        localName: "MANAGE"
    }
]), M1e = c.makeMessageType("aiserver.v1.UpdateBackgroundComposerEnvironmentRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "replace",
            kind: "scalar",
            T: 8
        }
    ]), P1e = c.makeMessageType("aiserver.v1.UpdateBackgroundComposerEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "applied",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "removed",
            kind: "scalar",
            T: 13
        }
    ]), N1e = c.makeMessageType("aiserver.v1.GetOptimizedDiffDetailsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "exclude_before_after_diffs",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "committed_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), D1e = c.makeMessageType("aiserver.v1.GetOptimizedDiffDetailsResponse", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: Ki
        },
        {
            no: 2,
            name: "submodule_diffs",
            kind: "message",
            T: O1e,
            repeated: !0
        }
    ]), O1e = c.makeMessageType("aiserver.v1.GetOptimizedDiffDetailsResponse.SubmoduleDiff", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "message",
            T: Ki
        },
        {
            no: 3,
            name: "errored",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "GetOptimizedDiffDetailsResponse_SubmoduleDiff"
}), L1e = c.makeMessageType("aiserver.v1.NotifyBackgroundComposerShownRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), U1e = c.makeMessageType("aiserver.v1.NotifyBackgroundComposerShownResponse", []), x1e = c.makeMessageType("aiserver.v1.RenameBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "new_name",
            kind: "scalar",
            T: 9
        }
    ]), F1e = c.makeMessageType("aiserver.v1.RenameBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), IE = c.makeMessageType("aiserver.v1.ProjectAppearance", ()=>[
        {
            no: 1,
            name: "icon",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "color_id",
            kind: "scalar",
            T: 9
        }
    ]), AE = c.makeMessageType("aiserver.v1.ProjectMetadata", ()=>[
        {
            no: 1,
            name: "appearance",
            kind: "message",
            T: IE,
            opt: !0
        }
    ]), W1e = c.makeMessageType("aiserver.v1.UpdateProjectAppearanceRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "appearance",
            kind: "message",
            T: IE
        }
    ]), B1e = c.makeMessageType("aiserver.v1.UpdateProjectAppearanceResponse", ()=>[
        {
            no: 1,
            name: "project_metadata",
            kind: "message",
            T: AE
        }
    ]), fL = c.makeMessageType("aiserver.v1.StagedProject", ()=>[
        {
            no: 1,
            name: "bc_id",
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
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "appearance",
            kind: "message",
            T: IE
        },
        {
            no: 5,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "environment_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 9,
            name: "instant_create_eligible",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "instant_create_ineligible_reason",
            kind: "enum",
            T: c.getEnumType(G1e)
        }
    ]), G1e = c.makeEnum("aiserver.v1.StagedProject.InstantCreateIneligibleReason", [
    {
        no: 0,
        name: "INSTANT_CREATE_INELIGIBLE_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INSTANT_CREATE_INELIGIBLE_REASON_ENVIRONMENT_NOT_USABLE",
        localName: "ENVIRONMENT_NOT_USABLE"
    },
    {
        no: 2,
        name: "INSTANT_CREATE_INELIGIBLE_REASON_REPO_NOT_IN_ENVIRONMENT",
        localName: "REPO_NOT_IN_ENVIRONMENT"
    },
    {
        no: 3,
        name: "INSTANT_CREATE_INELIGIBLE_REASON_ACCOUNT_CANNOT_START",
        localName: "ACCOUNT_CANNOT_START"
    },
    {
        no: 4,
        name: "INSTANT_CREATE_INELIGIBLE_REASON_REPO_ACCESS_UNVERIFIED",
        localName: "REPO_ACCESS_UNVERIFIED"
    },
    {
        no: 5,
        name: "INSTANT_CREATE_INELIGIBLE_REASON_REPO_PROTECTED_SCOPE",
        localName: "REPO_PROTECTED_SCOPE"
    }
]), V1e = c.makeMessageType("aiserver.v1.LocalChatEvidence", ()=>[
        {
            no: 1,
            name: "alias",
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
            name: "branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "last_active_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 7,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "local_conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "cloud_lineage_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), _L = c.makeMessageType("aiserver.v1.LocalEvidencePayload", ()=>[
        {
            no: 1,
            name: "schema_version",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "consent",
            kind: "enum",
            T: c.getEnumType($1e)
        },
        {
            no: 3,
            name: "chats",
            kind: "message",
            T: V1e,
            repeated: !0
        },
        {
            no: 4,
            name: "eligible_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "dropped_not_top_level",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "dropped_project_lineage",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "dropped_cloud_lineage",
            kind: "scalar",
            T: 13
        },
        {
            no: 8,
            name: "dropped_no_remote",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "dropped_ambiguous_repo",
            kind: "scalar",
            T: 13
        },
        {
            no: 10,
            name: "dropped_stale",
            kind: "scalar",
            T: 13
        },
        {
            no: 11,
            name: "dropped_untitled",
            kind: "scalar",
            T: 13
        },
        {
            no: 12,
            name: "client_filter_version",
            kind: "scalar",
            T: 9
        }
    ]), $1e = c.makeEnum("aiserver.v1.LocalEvidencePayload.Consent", [
    {
        no: 0,
        name: "CONSENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CONSENT_HEADERS_ONLY",
        localName: "HEADERS_ONLY"
    }
]), j1e = c.makeMessageType("aiserver.v1.SeedStagedProjectsRequest", ()=>[
        {
            no: 1,
            name: "local_evidence",
            kind: "message",
            T: _L
        },
        {
            no: 2,
            name: "allow_existing_projects",
            kind: "scalar",
            T: 8
        }
    ]), H1e = c.makeMessageType("aiserver.v1.SeedStagedProjectsResponse", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: c.getEnumType(q1e)
        },
        {
            no: 2,
            name: "staged_projects",
            kind: "message",
            T: fL,
            repeated: !0
        }
    ]), q1e = c.makeEnum("aiserver.v1.SeedStagedProjectsResponse.Outcome", [
    {
        no: 0,
        name: "OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "OUTCOME_SEEDED",
        localName: "SEEDED"
    },
    {
        no: 2,
        name: "OUTCOME_ALREADY_SEEDED",
        localName: "ALREADY_SEEDED"
    },
    {
        no: 3,
        name: "OUTCOME_INELIGIBLE_GATE",
        localName: "INELIGIBLE_GATE"
    },
    {
        no: 4,
        name: "OUTCOME_INELIGIBLE_PRIVACY",
        localName: "INELIGIBLE_PRIVACY"
    },
    {
        no: 5,
        name: "OUTCOME_INELIGIBLE_HAS_PROJECTS",
        localName: "INELIGIBLE_HAS_PROJECTS"
    },
    {
        no: 6,
        name: "OUTCOME_INELIGIBLE_NO_EVIDENCE",
        localName: "INELIGIBLE_NO_EVIDENCE"
    },
    {
        no: 7,
        name: "OUTCOME_INELIGIBLE_NO_SCM_CONNECTION",
        localName: "INELIGIBLE_NO_SCM_CONNECTION"
    },
    {
        no: 8,
        name: "OUTCOME_INELIGIBLE_PLAN",
        localName: "INELIGIBLE_PLAN"
    }
]), K1e = c.makeMessageType("aiserver.v1.ListStagedProjectsRequest", []), z1e = c.makeMessageType("aiserver.v1.ListStagedProjectsResponse", ()=>[
        {
            no: 1,
            name: "staged_projects",
            kind: "message",
            T: fL,
            repeated: !0
        }
    ]), Y1e = c.makeMessageType("aiserver.v1.DismissStagedProjectRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), J1e = c.makeMessageType("aiserver.v1.DismissStagedProjectResponse", []), X1e = c.makeMessageType("aiserver.v1.PreviewStagedProjectsRequest", ()=>[
        {
            no: 1,
            name: "local_evidence",
            kind: "message",
            T: _L
        }
    ]), Q1e = c.makeMessageType("aiserver.v1.DeleteStagedProjectsRequest", []), Z1e = c.makeMessageType("aiserver.v1.DeleteStagedProjectsResponse", ()=>[
        {
            no: 1,
            name: "deleted_staged_projects",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "deleted_seeds",
            kind: "scalar",
            T: 13
        }
    ]), eEe = c.makeMessageType("aiserver.v1.PreviewStagedProjectCandidate", ()=>[
        {
            no: 1,
            name: "name",
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
            name: "icon",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "init_description",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "repo_label",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "environment_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "target_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "evidence_aliases",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 9,
            name: "evidence_count",
            kind: "scalar",
            T: 13
        }
    ]), tEe = c.makeMessageType("aiserver.v1.PreviewStagedProjectsDiagnostics", ()=>[
        {
            no: 1,
            name: "prompt_attribution",
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
            name: "latency_ms",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "evidence_chat_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "group_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "denied_group_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "selected_chat_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 8,
            name: "result_text_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "rejected_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 10,
            name: "result_text_policy",
            kind: "enum",
            T: c.getEnumType(nEe)
        },
        {
            no: 11,
            name: "guidance_source",
            kind: "enum",
            T: c.getEnumType(rEe)
        },
        {
            no: 12,
            name: "has_root_projects",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "already_seeded",
            kind: "scalar",
            T: 8
        },
        {
            no: 14,
            name: "malformed_shape",
            kind: "enum",
            T: c.getEnumType(sEe)
        },
        {
            no: 15,
            name: "malformed_has_projects_key",
            kind: "scalar",
            T: 8
        },
        {
            no: 16,
            name: "malformed_top_level_key_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 17,
            name: "reply_length",
            kind: "scalar",
            T: 13
        },
        {
            no: 18,
            name: "reply_sha8",
            kind: "scalar",
            T: 9
        },
        {
            no: 19,
            name: "rejected_unknown_group",
            kind: "scalar",
            T: 13
        },
        {
            no: 20,
            name: "rejected_bad_field",
            kind: "scalar",
            T: 13
        },
        {
            no: 21,
            name: "rejected_too_few_chats",
            kind: "scalar",
            T: 13
        },
        {
            no: 22,
            name: "rejected_overlapping_chats",
            kind: "scalar",
            T: 13
        },
        {
            no: 23,
            name: "rejected_duplicate_name",
            kind: "scalar",
            T: 13
        },
        {
            no: 24,
            name: "local_evidence_policy",
            kind: "enum",
            T: c.getEnumType(iEe)
        },
        {
            no: 25,
            name: "local_payload_rejection",
            kind: "enum",
            T: c.getEnumType(aEe)
        },
        {
            no: 26,
            name: "local_chat_count_received",
            kind: "scalar",
            T: 13
        },
        {
            no: 27,
            name: "local_chat_count_admitted",
            kind: "scalar",
            T: 13
        },
        {
            no: 28,
            name: "local_dropped_cloud_lineage",
            kind: "scalar",
            T: 13
        },
        {
            no: 29,
            name: "local_dropped_bad_title",
            kind: "scalar",
            T: 13
        },
        {
            no: 30,
            name: "local_dropped_unsafe_text",
            kind: "scalar",
            T: 13
        },
        {
            no: 31,
            name: "local_dropped_bad_repo",
            kind: "scalar",
            T: 13
        },
        {
            no: 32,
            name: "local_dropped_stale",
            kind: "scalar",
            T: 13
        },
        {
            no: 33,
            name: "local_dropped_duplicate",
            kind: "scalar",
            T: 13
        },
        {
            no: 34,
            name: "local_dropped_moved_to_cloud",
            kind: "scalar",
            T: 13
        },
        {
            no: 35,
            name: "local_dropped_not_owned",
            kind: "scalar",
            T: 13
        },
        {
            no: 36,
            name: "local_selected_chat_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 37,
            name: "mixed_group_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 38,
            name: "local_only_group_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 39,
            name: "no_evidence_reason",
            kind: "enum",
            T: c.getEnumType(oEe)
        },
        {
            no: 40,
            name: "privacy_mode",
            kind: "enum",
            T: c.getEnumType(vq)
        }
    ]), nEe = c.makeEnum("aiserver.v1.PreviewStagedProjectsDiagnostics.ResultTextPolicy", [
    {
        no: 0,
        name: "RESULT_TEXT_POLICY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESULT_TEXT_POLICY_TRAINING_ALLOWED",
        localName: "TRAINING_ALLOWED"
    },
    {
        no: 2,
        name: "RESULT_TEXT_POLICY_HEADER_ONLY",
        localName: "HEADER_ONLY"
    }
]), rEe = c.makeEnum("aiserver.v1.PreviewStagedProjectsDiagnostics.GuidanceSource", [
    {
        no: 0,
        name: "GUIDANCE_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "GUIDANCE_SOURCE_DEFAULT",
        localName: "DEFAULT"
    },
    {
        no: 2,
        name: "GUIDANCE_SOURCE_CONFIG",
        localName: "CONFIG"
    },
    {
        no: 3,
        name: "GUIDANCE_SOURCE_MIXED",
        localName: "MIXED"
    }
]), sEe = c.makeEnum("aiserver.v1.PreviewStagedProjectsDiagnostics.MalformedShape", [
    {
        no: 0,
        name: "MALFORMED_SHAPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MALFORMED_SHAPE_NO_OBJECT",
        localName: "NO_OBJECT"
    },
    {
        no: 2,
        name: "MALFORMED_SHAPE_UNTERMINATED_OBJECT",
        localName: "UNTERMINATED_OBJECT"
    },
    {
        no: 3,
        name: "MALFORMED_SHAPE_INVALID_JSON",
        localName: "INVALID_JSON"
    },
    {
        no: 4,
        name: "MALFORMED_SHAPE_NO_PROJECTS_ARRAY",
        localName: "NO_PROJECTS_ARRAY"
    }
]), iEe = c.makeEnum("aiserver.v1.PreviewStagedProjectsDiagnostics.LocalEvidencePolicy", [
    {
        no: 0,
        name: "LOCAL_EVIDENCE_POLICY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LOCAL_EVIDENCE_POLICY_DISALLOWED",
        localName: "DISALLOWED"
    },
    {
        no: 2,
        name: "LOCAL_EVIDENCE_POLICY_HEADERS",
        localName: "HEADERS"
    }
]), aEe = c.makeEnum("aiserver.v1.PreviewStagedProjectsDiagnostics.LocalPayloadRejection", [
    {
        no: 0,
        name: "LOCAL_PAYLOAD_REJECTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LOCAL_PAYLOAD_REJECTION_POLICY",
        localName: "POLICY"
    },
    {
        no: 2,
        name: "LOCAL_PAYLOAD_REJECTION_UNKNOWN_SCHEMA",
        localName: "UNKNOWN_SCHEMA"
    },
    {
        no: 3,
        name: "LOCAL_PAYLOAD_REJECTION_TOO_MANY_CHATS",
        localName: "TOO_MANY_CHATS"
    },
    {
        no: 4,
        name: "LOCAL_PAYLOAD_REJECTION_PAYLOAD_TOO_LARGE",
        localName: "PAYLOAD_TOO_LARGE"
    },
    {
        no: 5,
        name: "LOCAL_PAYLOAD_REJECTION_DEDUPE_UNAVAILABLE",
        localName: "DEDUPE_UNAVAILABLE"
    }
]), oEe = c.makeEnum("aiserver.v1.PreviewStagedProjectsDiagnostics.NoEvidenceReason", [
    {
        no: 0,
        name: "NO_EVIDENCE_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "NO_EVIDENCE_REASON_TOO_FEW_CHATS",
        localName: "TOO_FEW_CHATS"
    },
    {
        no: 2,
        name: "NO_EVIDENCE_REASON_NO_REPO_GROUP",
        localName: "NO_REPO_GROUP"
    },
    {
        no: 3,
        name: "NO_EVIDENCE_REASON_ALL_GROUPS_DENIED",
        localName: "ALL_GROUPS_DENIED"
    }
]), cEe = c.makeMessageType("aiserver.v1.PreviewStagedProjectsResponse", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: c.getEnumType(lEe)
        },
        {
            no: 2,
            name: "candidates",
            kind: "message",
            T: eEe,
            repeated: !0
        },
        {
            no: 3,
            name: "diagnostics",
            kind: "message",
            T: tEe
        }
    ]), lEe = c.makeEnum("aiserver.v1.PreviewStagedProjectsResponse.Outcome", [
    {
        no: 0,
        name: "OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "OUTCOME_GENERATED",
        localName: "GENERATED"
    },
    {
        no: 2,
        name: "OUTCOME_NO_EVIDENCE",
        localName: "NO_EVIDENCE"
    },
    {
        no: 3,
        name: "OUTCOME_MALFORMED",
        localName: "MALFORMED"
    },
    {
        no: 4,
        name: "OUTCOME_INELIGIBLE_GATE",
        localName: "INELIGIBLE_GATE"
    },
    {
        no: 5,
        name: "OUTCOME_INELIGIBLE_PRIVACY",
        localName: "INELIGIBLE_PRIVACY"
    }
]), dEe = c.makeMessageType("aiserver.v1.PublishBackgroundComposerTempRepoRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "new_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "visibility",
            kind: "enum",
            T: c.getEnumType(vL)
        }
    ]), vL = c.makeEnum("aiserver.v1.PublishBackgroundComposerTempRepoRequest.Visibility", [
    {
        no: 0,
        name: "VISIBILITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "VISIBILITY_PRIVATE",
        localName: "PRIVATE"
    },
    {
        no: 2,
        name: "VISIBILITY_INTERNAL",
        localName: "INTERNAL"
    }
]), uEe = c.makeMessageType("aiserver.v1.PublishBackgroundComposerTempRepoResponse", ()=>[
        {
            no: 1,
            name: "owner",
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
            name: "canonical_repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "published",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "visibility",
            kind: "enum",
            T: c.getEnumType(vL)
        }
    ]), mEe = c.makeMessageType("aiserver.v1.ReparentBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parent_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "parent_agent_type",
            kind: "enum",
            T: c.getEnumType(lL)
        },
        {
            no: 4,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        }
    ]), pEe = c.makeMessageType("aiserver.v1.ReparentBackgroundComposerResponse", []), hEe = c.makeMessageType("aiserver.v1.SetWorkerManagerRequest", ()=>[
        {
            no: 1,
            name: "worker_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "manager_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "spawn_kind",
            kind: "enum",
            T: c.getEnumType(Df)
        },
        {
            no: 4,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), gEe = c.makeMessageType("aiserver.v1.SetWorkerManagerResponse", []), fEe = c.makeMessageType("aiserver.v1.CreateProjectWorkerRequest", ()=>[
        {
            no: 1,
            name: "manager_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "creation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_request",
            kind: "message",
            T: qu
        }
    ]), _Ee = c.makeMessageType("aiserver.v1.CreateProjectWorkerResponse", ()=>[
        {
            no: 1,
            name: "composer",
            kind: "message",
            T: ys
        },
        {
            no: 2,
            name: "was_swapped_to_default",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "initial_run_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), vEe = c.makeMessageType("aiserver.v1.ClearWorkerManagerRequest", ()=>[
        {
            no: 1,
            name: "worker_bc_id",
            kind: "scalar",
            T: 9
        }
    ]), TEe = c.makeMessageType("aiserver.v1.ClearWorkerManagerResponse", []), kEe = c.makeMessageType("aiserver.v1.ListWorkersForManagerRequest", ()=>[
        {
            no: 1,
            name: "manager_bc_id",
            kind: "scalar",
            T: 9
        }
    ]), SEe = c.makeMessageType("aiserver.v1.WorkerManagerMembership", ()=>[
        {
            no: 1,
            name: "worker_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "manager_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "spawn_kind",
            kind: "enum",
            T: c.getEnumType(Df)
        },
        {
            no: 4,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "status",
            kind: "enum",
            T: c.getEnumType(Tr)
        }
    ]), yEe = c.makeMessageType("aiserver.v1.ListWorkersForManagerResponse", ()=>[
        {
            no: 1,
            name: "memberships",
            kind: "message",
            T: SEe,
            repeated: !0
        }
    ]), wEe = c.makeMessageType("aiserver.v1.ListProjectSubtreesRequest", ()=>[
        {
            no: 1,
            name: "root_bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), EEe = c.makeMessageType("aiserver.v1.ProjectSubtreeStatusCount", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: c.getEnumType(Tr)
        },
        {
            no: 2,
            name: "count",
            kind: "scalar",
            T: 5
        }
    ]), bEe = c.makeMessageType("aiserver.v1.ProjectSubtreeNode", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "manager_bc_id",
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
            name: "status",
            kind: "enum",
            T: c.getEnumType(Tr)
        },
        {
            no: 5,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "last_activity_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 7,
            name: "depth",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "subagents_status",
            kind: "enum",
            T: c.getEnumType(Tr),
            opt: !0
        }
    ]), REe = c.makeMessageType("aiserver.v1.ProjectSubtree", ()=>[
        {
            no: 1,
            name: "root_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status_counts",
            kind: "message",
            T: EEe,
            repeated: !0
        },
        {
            no: 3,
            name: "nodes",
            kind: "message",
            T: bEe,
            repeated: !0
        },
        {
            no: 4,
            name: "omitted_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "pr_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "subagents_status",
            kind: "enum",
            T: c.getEnumType(Tr),
            opt: !0
        },
        {
            no: 8,
            name: "omitted_active_count",
            kind: "scalar",
            T: 5
        }
    ]), CEe = c.makeMessageType("aiserver.v1.ListProjectSubtreesResponse", ()=>[
        {
            no: 1,
            name: "subtrees",
            kind: "message",
            T: REe,
            repeated: !0
        }
    ]), IEe = c.makeMessageType("aiserver.v1.BackgroundComposerApprovalPullRequestFile", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "additions",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "deletions",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "has_stats",
            kind: "scalar",
            T: 8
        }
    ]), AEe = c.makeMessageType("aiserver.v1.BackgroundComposerApprovalPullRequestAuthor", ()=>[
        {
            no: 1,
            name: "login",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "avatar_url",
            kind: "scalar",
            T: 9
        }
    ]), MEe = c.makeMessageType("aiserver.v1.BackgroundComposerApprovalPullRequest", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "head_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "additions",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "deletions",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "changed_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 11,
            name: "repository",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "author",
            kind: "message",
            T: AEe,
            opt: !0
        },
        {
            no: 13,
            name: "file_entries",
            kind: "message",
            T: IEe,
            repeated: !0
        },
        {
            no: 14,
            name: "merge_method",
            kind: "scalar",
            T: 9
        }
    ]), TL = c.makeMessageType("aiserver.v1.BackgroundComposerApprovalUpdate", ()=>[
        {
            no: 1,
            name: "approval_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "state",
            kind: "enum",
            T: c.getEnumType(Bwe)
        },
        {
            no: 3,
            name: "kind",
            kind: "enum",
            T: c.getEnumType(Gwe)
        },
        {
            no: 4,
            name: "headline",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "operation",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "target",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 8,
            name: "pull_request",
            kind: "message",
            T: MEe,
            opt: !0
        }
    ]), PEe = c.makeMessageType("aiserver.v1.BackgroundComposerUpdateEvent", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "enum",
            T: c.getEnumType(Fwe)
        },
        {
            no: 3,
            name: "workflow_status",
            kind: "enum",
            T: c.getEnumType(Of)
        },
        {
            no: 4,
            name: "is_archived",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "is_unread",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "updated_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 7,
            name: "last_message_activity_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 8,
            name: "source",
            kind: "enum",
            T: c.getEnumType(ke)
        },
        {
            no: 9,
            name: "manager_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "parent_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "owning_user_id",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 12,
            name: "owning_team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 13,
            name: "has_pending_interaction",
            kind: "scalar",
            T: 8
        },
        {
            no: 14,
            name: "manager_spawn_kind",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "approval",
            kind: "message",
            T: TL,
            opt: !0
        },
        {
            no: 16,
            name: "last_read_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 17,
            name: "machine_pressure",
            kind: "enum",
            T: c.getEnumType(Wwe),
            opt: !0
        },
        {
            no: 18,
            name: "is_subtree_rollup",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), NEe = c.makeMessageType("aiserver.v1.StreamBackgroundComposerUpdatesRequest", ()=>[
        {
            no: 1,
            name: "resume_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "snapshot_n",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "snapshot_include_archived",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "snapshot_include_hidden_sources",
            kind: "enum",
            T: c.getEnumType(ke),
            repeated: !0
        },
        {
            no: 6,
            name: "snapshot_include_pinned_state",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "snapshot_include_workers",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "snapshot_include_subagents",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), DEe = c.makeMessageType("aiserver.v1.StreamBackgroundComposerUpdatesResponse", ()=>[
        {
            no: 1,
            name: "snapshot",
            kind: "message",
            T: OEe,
            oneof: "response"
        },
        {
            no: 2,
            name: "event",
            kind: "message",
            T: LEe,
            oneof: "response"
        },
        {
            no: 3,
            name: "heartbeat",
            kind: "message",
            T: UEe,
            oneof: "response"
        }
    ]), OEe = c.makeMessageType("aiserver.v1.BackgroundComposerUpdatesSnapshot", ()=>[
        {
            no: 1,
            name: "list",
            kind: "message",
            T: ML
        },
        {
            no: 2,
            name: "resume_cursor",
            kind: "scalar",
            T: 9
        }
    ]), LEe = c.makeMessageType("aiserver.v1.BackgroundComposerUpdateEventWithCursor", ()=>[
        {
            no: 1,
            name: "event",
            kind: "message",
            T: PEe
        },
        {
            no: 2,
            name: "resume_cursor",
            kind: "scalar",
            T: 9
        }
    ]), UEe = c.makeMessageType("aiserver.v1.BackgroundComposerUpdatesHeartbeat", ()=>[
        {
            no: 1,
            name: "resume_cursor",
            kind: "scalar",
            T: 9
        }
    ]), xEe = c.makeMessageType("aiserver.v1.UpdateBackgroundComposerExperimentalModelOptOutRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "use_experimental_model_opt_out",
            kind: "scalar",
            T: 8
        }
    ]), FEe = c.makeMessageType("aiserver.v1.UpdateBackgroundComposerExperimentalModelOptOutResponse", []), WEe = c.makeMessageType("aiserver.v1.RefreshGithubAccessTokenInBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), BEe = c.makeMessageType("aiserver.v1.RefreshGithubAccessTokenInBackgroundComposerResponse", []), GEe = c.makeMessageType("aiserver.v1.CreateBackgroundComposerPodRequest", ()=>[
        {
            no: 1,
            name: "devcontainer_starting_point",
            kind: "message",
            T: PL
        },
        {
            no: 2,
            name: "include_secrets",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "force_cluster",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "force_machine_template",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 32,
            name: "client_ip",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), VEe = c.makeMessageType("aiserver.v1.CreateBackgroundComposerPodResponse", ()=>[
        {
            no: 1,
            name: "pod_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        }
    ]), $Ee = c.makeMessageType("aiserver.v1.PreWarmPodRequest", ()=>[
        {
            no: 1,
            name: "start_request",
            kind: "message",
            T: qu
        }
    ]), jEe = c.makeMessageType("aiserver.v1.PreWarmPodResponse", []), HEe = c.makeMessageType("aiserver.v1.WakeBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "enum",
            T: c.getEnumType(Vwe)
        }
    ]), qEe = c.makeMessageType("aiserver.v1.WakeBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "signaled",
            kind: "scalar",
            T: 8
        }
    ]), KEe = c.makeMessageType("aiserver.v1.AttachBackgroundComposerPodRequest", ()=>[
        {
            no: 1,
            name: "pod_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "last_event_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), zEe = c.makeMessageType("aiserver.v1.AttachBackgroundComposerPodResponse", ()=>[
        {
            no: 1,
            name: "event",
            kind: "message",
            T: YEe
        },
        {
            no: 2,
            name: "updated_status",
            kind: "message",
            T: H9
        }
    ]), YEe = c.makeMessageType("aiserver.v1.AttachBackgroundComposerPodResponse.Event", ()=>[
        {
            no: 1,
            name: "event_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "event",
            kind: "message",
            T: kE
        }
    ], {
    localName: "AttachBackgroundComposerPodResponse_Event"
}), JEe = c.makeMessageType("aiserver.v1.CreateBackgroundComposerPodSnapshotRequest", ()=>[
        {
            no: 1,
            name: "pod_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "visibility",
            kind: "enum",
            T: c.getEnumType(Hu)
        },
        {
            no: 3,
            name: "bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), XEe = c.makeMessageType("aiserver.v1.CreateBackgroundComposerPodSnapshotResponse", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        }
    ]), QEe = c.makeMessageType("aiserver.v1.ChangeBackgroundComposerSnapshotVisibilityRequest", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "visibility",
            kind: "enum",
            T: c.getEnumType(Hu)
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9
        }
    ]), Hu = c.makeEnum("aiserver.v1.ChangeBackgroundComposerSnapshotVisibilityRequest.Visibility", [
    {
        no: 0,
        name: "VISIBILITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "VISIBILITY_USER",
        localName: "USER"
    },
    {
        no: 2,
        name: "VISIBILITY_REPO_READ_WRITE",
        localName: "REPO_READ_WRITE"
    },
    {
        no: 4,
        name: "VISIBILITY_PUBLIC",
        localName: "PUBLIC"
    },
    {
        no: 5,
        name: "VISIBILITY_TEAM",
        localName: "TEAM"
    }
]), ZEe = c.makeMessageType("aiserver.v1.ChangeBackgroundComposerSnapshotVisibilityResponse", []), ebe = c.makeMessageType("aiserver.v1.GetBackgroundComposerSnapshotInfoRequest", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        }
    ]), tbe = c.makeMessageType("aiserver.v1.GetBackgroundComposerSnapshotInfoResponse", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "visibility",
            kind: "enum",
            T: c.getEnumType(Hu)
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "created_at_ms",
            kind: "scalar",
            T: 1
        }
    ]), nbe = c.makeMessageType("aiserver.v1.ListBackgroundComposerSnapshotsByBcIdRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "use_primary",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), rbe = c.makeMessageType("aiserver.v1.BackgroundComposerSnapshotSummary", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "visibility",
            kind: "enum",
            T: c.getEnumType(Hu)
        },
        {
            no: 3,
            name: "created_at_ms",
            kind: "scalar",
            T: 1
        }
    ]), sbe = c.makeMessageType("aiserver.v1.ListBackgroundComposerSnapshotsByBcIdResponse", ()=>[
        {
            no: 1,
            name: "snapshots",
            kind: "message",
            T: rbe,
            repeated: !0
        }
    ]), ibe = c.makeMessageType("aiserver.v1.ListBackgroundComposerSnapshotStatusesByBcIdsRequest", ()=>[
        {
            no: 1,
            name: "bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "use_primary",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), abe = c.makeMessageType("aiserver.v1.BackgroundComposerSnapshotStatusByBcId", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "snapshot_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "visibility",
            kind: "enum",
            T: c.getEnumType(Hu),
            opt: !0
        },
        {
            no: 4,
            name: "created_at_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ]), obe = c.makeMessageType("aiserver.v1.ListBackgroundComposerSnapshotStatusesByBcIdsResponse", ()=>[
        {
            no: 1,
            name: "snapshot_statuses",
            kind: "message",
            T: abe,
            repeated: !0
        }
    ]), cbe = c.makeMessageType("aiserver.v1.GetBackgroundComposerSnapshotStateRequest", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        }
    ]), lbe = c.makeMessageType("aiserver.v1.GetBackgroundComposerSnapshotStateResponse", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "state",
            kind: "enum",
            T: c.getEnumType(q9)
        },
        {
            no: 3,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), dbe = c.makeMessageType("aiserver.v1.WatchBackgroundComposerSnapshotStateRequest", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        }
    ]), ube = c.makeMessageType("aiserver.v1.WatchBackgroundComposerSnapshotStateResponse", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "state",
            kind: "enum",
            T: c.getEnumType(q9)
        },
        {
            no: 3,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), mbe = c.makeMessageType("aiserver.v1.GetBackgroundComposerChangesHashRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), pbe = c.makeMessageType("aiserver.v1.GetBackgroundComposerChangesHashResponse", ()=>[
        {
            no: 1,
            name: "hash",
            kind: "scalar",
            T: 9
        }
    ]), hbe = c.makeMessageType("aiserver.v1.GetBackgroundComposerDiffDetailsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), gbe = c.makeMessageType("aiserver.v1.BackgroundComposerFullDiff", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "original_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "modified_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "submodule_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "git_diff",
            kind: "message",
            T: Ki
        },
        {
            no: 6,
            name: "full_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "base_ref",
            kind: "scalar",
            T: 9
        }
    ]), fbe = c.makeMessageType("aiserver.v1.GetBackgroundComposerDiffDetailsResponse", ()=>[
        {
            no: 1,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "base_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "diffs",
            kind: "message",
            T: gbe,
            repeated: !0
        },
        {
            no: 4,
            name: "git_diffs",
            kind: "message",
            T: Ki,
            repeated: !0
        }
    ]), _be = c.makeMessageType("aiserver.v1.SideChatInfo", ()=>[
        {
            no: 1,
            name: "parent_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "seed_turn_count",
            kind: "scalar",
            T: 5
        }
    ]), vbe = c.makeMessageType("aiserver.v1.StartSideChatBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "parent_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "creation_source",
            kind: "enum",
            T: c.getEnumType(ke)
        },
        {
            no: 4,
            name: "creation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Tbe = c.makeMessageType("aiserver.v1.StartSideChatBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "composer",
            kind: "message",
            T: ys
        }
    ]), kbe = c.makeMessageType("aiserver.v1.ListBackgroundComposerChildrenRequest", ()=>[
        {
            no: 1,
            name: "parent_bc_id",
            kind: "scalar",
            T: 9
        }
    ]), Sbe = c.makeMessageType("aiserver.v1.ListBackgroundComposerChildrenResponse", ()=>[
        {
            no: 1,
            name: "composers",
            kind: "message",
            T: ys,
            repeated: !0
        }
    ]), ybe = c.makeMessageType("aiserver.v1.OwnerIdentifier", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "owner_type",
            kind: "enum",
            T: c.getEnumType($we)
        }
    ]), kL = c.makeMessageType("aiserver.v1.OwnerFilter", ()=>[
        {
            no: 1,
            name: "owners",
            kind: "message",
            T: ybe,
            repeated: !0
        }
    ]), SL = c.makeMessageType("aiserver.v1.PrAgentView", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "code_tour",
            kind: "message",
            T: EN,
            opt: !0
        }
    ]), wbe = c.makeMessageType("aiserver.v1.ListPrBackgroundComposersRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expected_scope",
            kind: "message",
            T: An
        },
        {
            no: 3,
            name: "page_size",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "involved_page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "other_page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "selected_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "include_agent_kinds",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "include_watchers",
            kind: "scalar",
            T: 8
        }
    ]), Ebe = c.makeMessageType("aiserver.v1.ListPrBackgroundComposersResponse", ()=>[
        {
            no: 1,
            name: "involved_composers",
            kind: "message",
            T: ys,
            repeated: !0
        },
        {
            no: 2,
            name: "other_composers",
            kind: "message",
            T: ys,
            repeated: !0
        },
        {
            no: 3,
            name: "next_involved_page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "next_other_page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "involved_count_capped",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "sole_involved_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "selected_composer",
            kind: "message",
            T: ys,
            opt: !0
        },
        {
            no: 8,
            name: "selected_has_direct_activity",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "participants",
            kind: "message",
            T: Ff,
            repeated: !0
        },
        {
            no: 10,
            name: "participant_details_unavailable",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "subscribed_bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 12,
            name: "watching_composers",
            kind: "message",
            T: ys,
            repeated: !0
        },
        {
            no: 13,
            name: "coordinator_composers",
            kind: "message",
            T: ys,
            repeated: !0
        }
    ]), yL = c.makeMessageType("aiserver.v1.ListDetailedBackgroundComposersRequest", ()=>[
        {
            no: 1,
            name: "include_team_wide",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "n",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "include_diff",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "owner_filter",
            kind: "message",
            T: kL,
            opt: !0
        },
        {
            no: 8,
            name: "repo_url_prefix",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "include_archived",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "status_only",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), bbe = c.makeMessageType("aiserver.v1.ListDetailedBackgroundComposersResponse", ()=>[
        {
            no: 1,
            name: "composers",
            kind: "message",
            T: UL,
            repeated: !0
        },
        {
            no: 2,
            name: "participants",
            kind: "message",
            T: Ff,
            repeated: !0
        }
    ]), Rbe = c.makeMessageType("aiserver.v1.CloudAgentDashboardRunSort", ()=>[
        {
            no: 1,
            name: "field",
            kind: "enum",
            T: c.getEnumType(jwe)
        },
        {
            no: 2,
            name: "direction",
            kind: "enum",
            T: c.getEnumType(Hwe)
        }
    ]), wL = c.makeMessageType("aiserver.v1.CloudAgentRunsCursor", ()=>[
        {
            no: 1,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "id",
            kind: "scalar",
            T: 3
        }
    ]), EL = c.makeMessageType("aiserver.v1.CloudAgentDashboardRunFilter", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "created_after_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "created_before_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "triggers",
            kind: "enum",
            T: c.getEnumType(zn),
            repeated: !0
        },
        {
            no: 5,
            name: "statuses",
            kind: "enum",
            T: c.getEnumType(oL),
            repeated: !0
        },
        {
            no: 6,
            name: "created_by_user_id",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), Cbe = c.makeMessageType("aiserver.v1.ListCloudAgentRunsForDashboardRequest", ()=>[
        {
            no: 1,
            name: "filter",
            kind: "message",
            T: EL
        },
        {
            no: 2,
            name: "sort",
            kind: "message",
            T: Rbe
        },
        {
            no: 3,
            name: "cursor",
            kind: "message",
            T: wL,
            opt: !0
        }
    ]), bL = c.makeMessageType("aiserver.v1.CloudAgentDashboardRunRow", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "trigger",
            kind: "enum",
            T: c.getEnumType(zn)
        },
        {
            no: 4,
            name: "created_by_user_id",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 5,
            name: "created_by_display",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "environment_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "status",
            kind: "enum",
            T: c.getEnumType(oL)
        }
    ]), Ibe = c.makeMessageType("aiserver.v1.ListCloudAgentRunsForDashboardResponse", ()=>[
        {
            no: 1,
            name: "rows",
            kind: "message",
            T: bL,
            repeated: !0
        },
        {
            no: 2,
            name: "has_more",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "next_cursor",
            kind: "message",
            T: wL,
            opt: !0
        }
    ]), Abe = c.makeMessageType("aiserver.v1.AggregateCloudAgentRunsForDashboardRequest", ()=>[
        {
            no: 1,
            name: "filter",
            kind: "message",
            T: EL
        },
        {
            no: 2,
            name: "tz_offset_minutes",
            kind: "scalar",
            T: 5
        }
    ]), Mbe = c.makeMessageType("aiserver.v1.CloudAgentDashboardRunDayBucket", ()=>[
        {
            no: 1,
            name: "day_start_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "success_count",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "warning_count",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "failure_count",
            kind: "scalar",
            T: 3
        }
    ]), Pbe = c.makeMessageType("aiserver.v1.AggregateCloudAgentRunsForDashboardResponse", ()=>[
        {
            no: 1,
            name: "buckets",
            kind: "message",
            T: Mbe,
            repeated: !0
        }
    ]), Nbe = c.makeMessageType("aiserver.v1.GetCloudAgentRunForDashboardRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), Dbe = c.makeMessageType("aiserver.v1.GetCloudAgentRunForDashboardResponse", ()=>[
        {
            no: 1,
            name: "row",
            kind: "message",
            T: bL
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), Obe = c.makeMessageType("aiserver.v1.CloudAgentRunEvent", ()=>[
        {
            no: 1,
            name: "public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "category",
            kind: "enum",
            T: c.getEnumType(qwe)
        },
        {
            no: 4,
            name: "log_level",
            kind: "enum",
            T: c.getEnumType(Kwe)
        },
        {
            no: 5,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "link_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Lbe = c.makeMessageType("aiserver.v1.ListCloudAgentRunEventsForDashboardRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), Ube = c.makeMessageType("aiserver.v1.ListCloudAgentRunEventsForDashboardResponse", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: Obe,
            repeated: !0
        }
    ]), xbe = c.makeMessageType("aiserver.v1.PauseBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: c.getEnumType(ke)
        },
        {
            no: 4,
            name: "run_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), Fbe = c.makeMessageType("aiserver.v1.PauseBackgroundComposerResponse", []), Wbe = c.makeMessageType("aiserver.v1.CancelBackgroundComposerToolCallRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: c.getEnumType(ke)
        }
    ]), Bbe = c.makeMessageType("aiserver.v1.CancelBackgroundComposerToolCallResponse", ()=>[
        {
            no: 1,
            name: "accepted",
            kind: "scalar",
            T: 8
        }
    ]), Gbe = c.makeMessageType("aiserver.v1.ArchiveBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "unarchive",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "only_notify_runner",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "source",
            kind: "enum",
            T: c.getEnumType(ke)
        },
        {
            no: 5,
            name: "close_pull_request",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Vbe = c.makeMessageType("aiserver.v1.ArchiveBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "closed_pull_request",
            kind: "scalar",
            T: 8
        }
    ]), $be = c.makeMessageType("aiserver.v1.ArchiveRepoBackgroundComposersRequest", ()=>[
        {
            no: 1,
            name: "repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: c.getEnumType(ke)
        },
        {
            no: 4,
            name: "dry_run",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "remove_repo_environment_json",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "environment_scope",
            kind: "message",
            T: jbe,
            opt: !0
        },
        {
            no: 7,
            name: "include_sources",
            kind: "enum",
            T: c.getEnumType(ke),
            repeated: !0
        }
    ]), jbe = c.makeMessageType("aiserver.v1.RepoArchiveEnvironmentScope", ()=>[
        {
            no: 1,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            oneof: "selector"
        },
        {
            no: 2,
            name: "none",
            kind: "scalar",
            T: 8,
            oneof: "selector"
        },
        {
            no: 3,
            name: "unnamed_or_none",
            kind: "scalar",
            T: 8,
            oneof: "selector"
        }
    ]), Hbe = c.makeMessageType("aiserver.v1.ArchiveRepoBackgroundComposersResponse", ()=>[
        {
            no: 1,
            name: "archived_bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "failed_bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "remaining_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "running_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "has_repo_environment_json",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "removed_repo_environment_json",
            kind: "scalar",
            T: 8
        }
    ]), qbe = c.makeMessageType("aiserver.v1.DeleteBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), Kbe = c.makeMessageType("aiserver.v1.DeleteBackgroundComposerResponse", []), zbe = c.makeMessageType("aiserver.v1.ResumeBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), Ybe = c.makeMessageType("aiserver.v1.ResumeBackgroundComposerResponse", []), Jbe = c.makeMessageType("aiserver.v1.GetCursorServerUrlRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "connection_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Xbe = c.makeMessageType("aiserver.v1.GetCursorServerUrlResponse", ()=>[
        {
            no: 1,
            name: "host",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "port",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "connection_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "headers",
            kind: "message",
            T: Qbe,
            repeated: !0
        },
        {
            no: 5,
            name: "upgrade_path",
            kind: "scalar",
            T: 9
        }
    ]), Qbe = c.makeMessageType("aiserver.v1.GetCursorServerUrlResponse.Header", ()=>[
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
    ], {
    localName: "GetCursorServerUrlResponse_Header"
}), Zbe = c.makeMessageType("aiserver.v1.WarmCursorServerDownloadRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit",
            kind: "scalar",
            T: 9
        }
    ]), eRe = c.makeMessageType("aiserver.v1.WarmCursorServerDownloadResponse", ()=>[
        {
            no: 1,
            name: "already_downloaded",
            kind: "scalar",
            T: 8
        }
    ]), tRe = c.makeMessageType("aiserver.v1.MakePRBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workflow_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), nRe = c.makeMessageType("aiserver.v1.MakePRBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "has_commits",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "owner",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "repo",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), rRe = c.makeMessageType("aiserver.v1.OpenPRBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "draft",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "open_as_cursor_github_app",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "skip_reviewer_request",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "agent_state_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 9,
            name: "workflow_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), sRe = c.makeMessageType("aiserver.v1.OpenPRBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "base_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), RL = c.makeMessageType("aiserver.v1.ListBackgroundComposersRequest", ()=>[
        {
            no: 1,
            name: "n",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "include_team_wide",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "preferred_repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "additional_repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "include_status",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "include_sources",
            kind: "enum",
            T: c.getEnumType(ke),
            repeated: !0
        },
        {
            no: 8,
            name: "owner_filter",
            kind: "message",
            T: kL,
            opt: !0
        },
        {
            no: 9,
            name: "last_message_activity_at_ms_offset",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 10,
            name: "include_archived",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "should_include_collaborators",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 13,
            name: "include_hidden_sources",
            kind: "enum",
            T: c.getEnumType(ke),
            repeated: !0
        },
        {
            no: 14,
            name: "preferred_workspace_binding_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "include_pinned_state",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 16,
            name: "include_workers",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 17,
            name: "include_subagents",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 18,
            name: "use_page_tokens",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 19,
            name: "page_token",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 21,
            name: "include_background_agent_access_aggregate",
            kind: "scalar",
            T: 8
        },
        {
            no: 22,
            name: "inbox_section_runs_only",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 23,
            name: "project_filter",
            kind: "enum",
            T: c.getEnumType(iRe),
            opt: !0
        },
        {
            no: 24,
            name: "archived_filter",
            kind: "enum",
            T: c.getEnumType(aRe),
            opt: !0
        },
        {
            no: 25,
            name: "include_stored_prs",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), iRe = c.makeEnum("aiserver.v1.ListBackgroundComposersRequest.ProjectFilter", [
    {
        no: 0,
        name: "PROJECT_FILTER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PROJECT_FILTER_PROJECTS_ONLY",
        localName: "PROJECTS_ONLY"
    },
    {
        no: 2,
        name: "PROJECT_FILTER_EXCLUDE_PROJECTS",
        localName: "EXCLUDE_PROJECTS"
    }
]), aRe = c.makeEnum("aiserver.v1.ListBackgroundComposersRequest.ArchivedFilter", [
    {
        no: 0,
        name: "ARCHIVED_FILTER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ARCHIVED_FILTER_EXCLUDE_ARCHIVED",
        localName: "EXCLUDE_ARCHIVED"
    },
    {
        no: 2,
        name: "ARCHIVED_FILTER_ARCHIVED_ONLY",
        localName: "ARCHIVED_ONLY"
    }
]), ys = c.makeMessageType("aiserver.v1.BackgroundComposer", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "created_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 20,
            name: "updated_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "is_owned_by_different_team_member",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "has_started_vm",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "is_archived",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "n_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "is_killed",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "status",
            kind: "enum",
            T: c.getEnumType(Tr)
        },
        {
            no: 77,
            name: "workflow_status",
            kind: "enum",
            T: c.getEnumType(Of)
        },
        {
            no: 13,
            name: "is_unread",
            kind: "scalar",
            T: 8
        },
        {
            no: 14,
            name: "source",
            kind: "enum",
            T: c.getEnumType(ke)
        },
        {
            no: 24,
            name: "github_issue_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "slack_channel_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 16,
            name: "slack_message_timestamp",
            kind: "scalar",
            T: 9
        },
        {
            no: 17,
            name: "slack_team_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 18,
            name: "linear_issue_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 19,
            name: "linear_org_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 21,
            name: "prompt_group_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 22,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 23,
            name: "is_pr_merged",
            kind: "scalar",
            T: 8
        },
        {
            no: 25,
            name: "lines_added",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 26,
            name: "lines_removed",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 27,
            name: "files_changed",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 28,
            name: "model_details",
            kind: "message",
            T: ou,
            opt: !0
        },
        {
            no: 29,
            name: "triggered_principal_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 30,
            name: "triggered_principal_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 31,
            name: "visibility",
            kind: "scalar",
            T: 9
        },
        {
            no: 32,
            name: "ensemble_status",
            kind: "enum",
            T: c.getEnumType(Ywe)
        },
        {
            no: 33,
            name: "workflow_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 34,
            name: "agent_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 35,
            name: "kickoff_message_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 36,
            name: "grind_phase",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 37,
            name: "commit_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 38,
            name: "latest_commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 39,
            name: "latest_commit_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 40,
            name: "last_message_activity_at_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 41,
            name: "owning_service_account",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 42,
            name: "owning_service_account_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 43,
            name: "pr_status",
            kind: "enum",
            T: c.getEnumType(cL),
            opt: !0
        },
        {
            no: 57,
            name: "external_source_metadata",
            kind: "message",
            T: IL,
            opt: !0
        },
        {
            no: 58,
            name: "worker_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 59,
            name: "requested_model",
            kind: "message",
            T: Pg,
            opt: !0
        },
        {
            no: 60,
            name: "use_private_worker",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 45,
            name: "participant_user_ids",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 61,
            name: "cloud_subagent_parent",
            kind: "message",
            T: ME,
            opt: !0
        },
        {
            no: 62,
            name: "repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 63,
            name: "environment_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 64,
            name: "private_workspace_identifier",
            kind: "message",
            T: Wf,
            opt: !0
        },
        {
            no: 65,
            name: "private_worker_display_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 66,
            name: "workspace_binding",
            kind: "message",
            T: AL,
            opt: !0
        },
        {
            no: 67,
            name: "use_experimental_model_opt_out",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 68,
            name: "side_chat_info",
            kind: "message",
            T: _be,
            opt: !0
        },
        {
            no: 69,
            name: "manager_agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 70,
            name: "initiated_env_setup",
            kind: "scalar",
            T: 8
        },
        {
            no: 71,
            name: "started_as_new_project",
            kind: "scalar",
            T: 8
        },
        {
            no: 72,
            name: "project_metadata",
            kind: "message",
            T: AE,
            opt: !0
        },
        {
            no: 73,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 74,
            name: "publish_button_hidden",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 75,
            name: "publish_button_reconnect",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 76,
            name: "has_pending_interaction",
            kind: "scalar",
            T: 8
        },
        {
            no: 78,
            name: "last_read_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 79,
            name: "runs_on_another_agents_machine",
            kind: "scalar",
            T: 8
        },
        {
            no: 80,
            name: "stored_prs",
            kind: "message",
            T: xL,
            repeated: !0
        }
    ]), Ff = c.makeMessageType("aiserver.v1.BackgroundComposerParticipant", ()=>[
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
    ]), CL = c.makeMessageType("aiserver.v1.NamedAgentProfile", ()=>[
        {
            no: 1,
            name: "profile_picture_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), oRe = c.makeMessageType("aiserver.v1.NamedAgentSession", ()=>[
        {
            no: 1,
            name: "named_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "session_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "session_kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "created_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 11,
            name: "updated_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 12,
            name: "last_awakened_at_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 13,
            name: "slack_channel_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "slack_channel_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "slack_permalink",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), cRe = c.makeMessageType("aiserver.v1.NamedAgent", ()=>[
        {
            no: 1,
            name: "named_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "home_bc_id",
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
            name: "creator",
            kind: "message",
            T: Ff,
            opt: !0
        },
        {
            no: 5,
            name: "created_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 6,
            name: "updated_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 7,
            name: "pinned",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "profile",
            kind: "message",
            T: CL,
            opt: !0
        }
    ]), lRe = c.makeMessageType("aiserver.v1.ListNamedAgentsRequest", []), dRe = c.makeMessageType("aiserver.v1.ListNamedAgentsResponse", ()=>[
        {
            no: 1,
            name: "agents",
            kind: "message",
            T: cRe,
            repeated: !0
        }
    ]), uRe = c.makeMessageType("aiserver.v1.ListNamedAgentSessionsRequest", ()=>[
        {
            no: 1,
            name: "named_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "page_size",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "page_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), mRe = c.makeMessageType("aiserver.v1.ListNamedAgentSessionsResponse", ()=>[
        {
            no: 1,
            name: "sessions",
            kind: "message",
            T: oRe,
            repeated: !0
        },
        {
            no: 2,
            name: "next_page_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), pRe = c.makeMessageType("aiserver.v1.EventSubscription", ()=>[
        {
            no: 1,
            name: "subscription_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subscription_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "subscription_args_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "subscription_metadata_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "open_time_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 11,
            name: "expires_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 12,
            name: "last_delivered_at_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 13,
            name: "delivery_count",
            kind: "scalar",
            T: 5
        }
    ]), hRe = c.makeMessageType("aiserver.v1.ListEventSubscriptionsRequest", ()=>[
        {
            no: 1,
            name: "named_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        }
    ]), gRe = c.makeMessageType("aiserver.v1.ListEventSubscriptionsResponse", ()=>[
        {
            no: 1,
            name: "subscriptions",
            kind: "message",
            T: pRe,
            repeated: !0
        }
    ]), fRe = c.makeMessageType("aiserver.v1.CloseEventSubscriptionRequest", ()=>[
        {
            no: 1,
            name: "named_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subscription_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        }
    ]), _Re = c.makeMessageType("aiserver.v1.CloseEventSubscriptionResponse", ()=>[
        {
            no: 1,
            name: "closed",
            kind: "scalar",
            T: 8
        }
    ]), IL = c.makeMessageType("aiserver.v1.ExternalSourceMetadata", ()=>[
        {
            no: 1,
            name: "slack",
            kind: "message",
            T: kRe,
            opt: !0
        },
        {
            no: 2,
            name: "linear",
            kind: "message",
            T: SRe,
            opt: !0
        },
        {
            no: 3,
            name: "github",
            kind: "message",
            T: yRe,
            opt: !0
        },
        {
            no: 4,
            name: "gitlab",
            kind: "message",
            T: wRe,
            opt: !0
        }
    ]), Wf = c.makeMessageType("aiserver.v1.PrivateWorkspaceIdentifier", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uri",
            kind: "scalar",
            T: 9
        }
    ]), AL = c.makeMessageType("aiserver.v1.AgentWorkspaceBinding", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "private_workspace_identifier",
            kind: "message",
            T: Wf,
            opt: !0
        }
    ]), vRe = c.makeMessageType("aiserver.v1.CloudSubagentTaskLineage", ()=>[
        {
            no: 1,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), TRe = c.makeMessageType("aiserver.v1.CloudSubagentSubscriptionResourceLineage", ()=>[
        {
            no: 1,
            name: "route_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "route_kind",
            kind: "scalar",
            T: 9
        }
    ]), ME = c.makeMessageType("aiserver.v1.CloudSubagentParentReference", ()=>[
        {
            no: 1,
            name: "parent_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "parent_agent_type",
            kind: "enum",
            T: c.getEnumType(lL)
        },
        {
            no: 5,
            name: "subagent_type_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "parent_spawn_kind",
            kind: "enum",
            T: c.getEnumType(zwe),
            opt: !0
        },
        {
            no: 7,
            name: "parent_spawn_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "task",
            kind: "message",
            T: vRe,
            oneof: "lineage"
        },
        {
            no: 9,
            name: "subscription_resource",
            kind: "message",
            T: TRe,
            oneof: "lineage"
        }
    ]), kRe = c.makeMessageType("aiserver.v1.SlackSourceMetadata", ()=>[
        {
            no: 1,
            name: "channel_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "channel_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "team_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "message_timestamp",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "message_permalink",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), SRe = c.makeMessageType("aiserver.v1.LinearSourceMetadata", ()=>[
        {
            no: 1,
            name: "issue_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "org_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "issue_identifier",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "issue_title",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), yRe = c.makeMessageType("aiserver.v1.GithubSourceMetadata", ()=>[
        {
            no: 1,
            name: "issue_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "pr_number",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "pr_title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "issue_title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "issue_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), wRe = c.makeMessageType("aiserver.v1.GitlabSourceMetadata", ()=>[
        {
            no: 1,
            name: "mr_iid",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "mr_title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "mr_web_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ERe = c.makeMessageType("aiserver.v1.PinBackgroundComposersRequest", ()=>[
        {
            no: 1,
            name: "bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), bRe = c.makeMessageType("aiserver.v1.PinBackgroundComposersResponse", []), RRe = c.makeMessageType("aiserver.v1.UnpinBackgroundComposersRequest", ()=>[
        {
            no: 1,
            name: "bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), CRe = c.makeMessageType("aiserver.v1.UnpinBackgroundComposersResponse", []), ML = c.makeMessageType("aiserver.v1.ListBackgroundComposersResponse", ()=>[
        {
            no: 1,
            name: "composers",
            kind: "message",
            T: ys,
            repeated: !0
        },
        {
            no: 2,
            name: "did_load_status",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "has_more",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "next_page_offset",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 5,
            name: "participants",
            kind: "message",
            T: Ff,
            repeated: !0
        },
        {
            no: 6,
            name: "pinned_bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "did_load_pinned_state",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "next_page_token",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "can_use_background_agents",
            kind: "scalar",
            T: 8
        }
    ]), IRe = c.makeMessageType("aiserver.v1.EnvironmentRepoEntry", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "scm_repo_node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "git_enterprise_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ARe = c.makeMessageType("aiserver.v1.EnvironmentJsonFileLocation", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), vi = c.makeMessageType("aiserver.v1.EnvironmentRepoConfig", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "message",
            T: IRe,
            repeated: !0
        },
        {
            no: 2,
            name: "environment_json_location",
            kind: "message",
            T: ARe,
            opt: !0
        }
    ]), PE = c.makeMessageType("aiserver.v1.RepoStartingRef", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_ref",
            kind: "scalar",
            T: 9
        }
    ]), PL = c.makeMessageType("aiserver.v1.DevcontainerStartingPoint", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "user_extensions",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "cursor_server_commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "environment_json_override",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "git_diff_to_apply",
            kind: "message",
            T: Ki
        },
        {
            no: 9,
            name: "dont_allow_reading_environment_json_from_database",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "skip_build_caches",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "repo_config",
            kind: "message",
            T: vi,
            opt: !0
        },
        {
            no: 12,
            name: "environment_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "environment_id",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 15,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "starting_refs",
            kind: "message",
            T: PE,
            repeated: !0
        },
        {
            no: 17,
            name: "target_selection",
            kind: "enum",
            T: c.getEnumType(Jwe),
            opt: !0
        }
    ]), NL = c.makeMessageType("aiserver.v1.GrindModeConfig", ()=>[
        {
            no: 1,
            name: "time_budget_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "start_time_unix_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 3,
            name: "phase",
            kind: "enum",
            T: c.getEnumType(MRe)
        },
        {
            no: 4,
            name: "auto_proceed_after_planning",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "time_budget_seconds",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 6,
            name: "grind_prompt_calibrate_effort",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), MRe = c.makeEnum("aiserver.v1.GrindModeConfig.Phase", [
    {
        no: 0,
        name: "PHASE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PHASE_PLANNING",
        localName: "PLANNING"
    },
    {
        no: 2,
        name: "PHASE_EXECUTING",
        localName: "EXECUTING"
    },
    {
        no: 3,
        name: "PHASE_CONTROLLER",
        localName: "CONTROLLER"
    }
]), PRe = c.makeMessageType("aiserver.v1.EnvironmentSetupRunStartedMetadata", ()=>[
        {
            no: 1,
            name: "setup_session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "surface",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "entrypoint",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "resumed_session",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), NRe = c.makeMessageType("aiserver.v1.CloudAgentEvalOverrides", ()=>[
        {
            no: 1,
            name: "rollout",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "snapshot",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), qu = c.makeMessageType("aiserver.v1.StartBackgroundComposerFromSnapshotRequest", ()=>[
        {
            no: 1,
            name: "snapshot_name_or_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "devcontainer_starting_point",
            kind: "message",
            T: PL
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 17,
            name: "rich_prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "files",
            kind: "message",
            T: DRe,
            repeated: !0
        },
        {
            no: 4,
            name: "model_details",
            kind: "message",
            T: ou
        },
        {
            no: 16,
            name: "additional_model_details",
            kind: "message",
            T: ou,
            repeated: !0
        },
        {
            no: 58,
            name: "requested_models",
            kind: "message",
            T: Pg,
            repeated: !0
        },
        {
            no: 5,
            name: "repository_info",
            kind: "message",
            T: E0e
        },
        {
            no: 6,
            name: "snapshot_workspace_root_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "start_for_auth_id_on_team",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "auto_branch",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "return_immediately",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "force_vm_backend",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "force_cluster",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 29,
            name: "force_machine_template",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "images",
            kind: "message",
            T: Kc,
            repeated: !0
        },
        {
            no: 14,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "conversation_history",
            kind: "message",
            T: Ji,
            repeated: !0
        },
        {
            no: 23,
            name: "source",
            kind: "enum",
            T: c.getEnumType(ke),
            opt: !0
        },
        {
            no: 19,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 20,
            name: "use_web",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 21,
            name: "external_links",
            kind: "message",
            T: jy,
            repeated: !0
        },
        {
            no: 22,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 24,
            name: "slack_channel_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 25,
            name: "slack_message_timestamp",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 27,
            name: "slack_team_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 28,
            name: "linear_issue_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 40,
            name: "github_issue_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 26,
            name: "add_initial_message_to_responses",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 30,
            name: "linear_org_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 33,
            name: "linear_issue_identifier",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 94,
            name: "external_source_metadata",
            kind: "message",
            T: IL,
            opt: !0
        },
        {
            no: 31,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 38,
            name: "custom_branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 32,
            name: "client_ip",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 34,
            name: "prompt_group_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 53,
            name: "should_synthesize",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 35,
            name: "pod_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 36,
            name: "wait_on_branch_name",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 37,
            name: "auto_create_pr",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 39,
            name: "webhook_config",
            kind: "message",
            T: ORe,
            opt: !0
        },
        {
            no: 41,
            name: "starting_message_type",
            kind: "enum",
            T: c.getEnumType(f1e),
            opt: !0
        },
        {
            no: 42,
            name: "open_as_cursor_github_app",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 43,
            name: "skip_reviewer_request",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 44,
            name: "conversation_action",
            kind: "message",
            T: Wg,
            opt: !0
        },
        {
            no: 45,
            name: "test_mode_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 60,
            name: "skip_user_install_commands_and_cloud_testing",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 46,
            name: "agent_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 47,
            name: "conversation_state",
            kind: "message",
            T: Bg,
            opt: !0
        },
        {
            no: 48,
            name: "pre_fetched_blobs",
            kind: "message",
            T: Do,
            repeated: !0
        },
        {
            no: 49,
            name: "kickoff_message_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 50,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 51,
            name: "enable_setup_vm_environment_tool",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 52,
            name: "grind_mode_config",
            kind: "message",
            T: NL,
            opt: !0
        },
        {
            no: 73,
            name: "automation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 55,
            name: "use_private_worker",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 59,
            name: "labels",
            kind: "message",
            T: Bf,
            repeated: !0
        },
        {
            no: 97,
            name: "private_worker_owner_filter",
            kind: "message",
            T: LNe,
            opt: !0
        },
        {
            no: 100,
            name: "private_workspace_identifier",
            kind: "message",
            T: Wf,
            opt: !0
        },
        {
            no: 110,
            name: "workspace_binding",
            kind: "message",
            T: AL,
            opt: !0
        },
        {
            no: 56,
            name: "force_non_chargeable",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 57,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 75,
            name: "effort_mode",
            kind: "enum",
            T: c.getEnumType(LSe),
            opt: !0
        },
        {
            no: 76,
            name: "auto_proceed_after_planning",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 77,
            name: "time_budget_seconds",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 78,
            name: "time_budget_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 79,
            name: "init_empty_repo",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 80,
            name: "skills",
            kind: "message",
            T: Hy,
            repeated: !0
        },
        {
            no: 81,
            name: "cloud_plugin_manifest_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 82,
            name: "cloud_plugin_snapshot_token",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 95,
            name: "mcp_config_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 96,
            name: "custom_subagents",
            kind: "message",
            T: qP,
            repeated: !0
        },
        {
            no: 98,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 99,
            name: "cloud_subagent_parent",
            kind: "message",
            T: ME,
            opt: !0
        },
        {
            no: 101,
            name: "requested_additional_store_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 108,
            name: "store_mounts",
            kind: "message",
            T: Z9,
            repeated: !0
        },
        {
            no: 104,
            name: "is_slack_v2",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 113,
            name: "is_slack_v1_5",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 105,
            name: "named_agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 106,
            name: "named_agent_session_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 107,
            name: "named_agent_session_kind",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 109,
            name: "named_agent_profile",
            kind: "message",
            T: CL,
            opt: !0
        },
        {
            no: 111,
            name: "run_env_vars",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 112,
            name: "selected_private_worker_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 114,
            name: "use_experimental_model_opt_out",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 115,
            name: "forked_from_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 116,
            name: "requested_environment_build_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 117,
            name: "external_metadata",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 118,
            name: "environment_setup_run_started_metadata",
            kind: "message",
            T: PRe,
            opt: !0
        },
        {
            no: 119,
            name: "project_details",
            kind: "message",
            T: dw,
            opt: !0
        },
        {
            no: 120,
            name: "disable_pr_management_tool",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 121,
            name: "system_prompt_spec",
            kind: "message",
            T: HN,
            opt: !0
        },
        {
            no: 122,
            name: "project_metadata",
            kind: "message",
            T: AE,
            opt: !0
        },
        {
            no: 123,
            name: "new_project_seeded_empty_root",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 124,
            name: "manager_spawn_kind",
            kind: "enum",
            T: c.getEnumType(Df),
            opt: !0
        },
        {
            no: 125,
            name: "grok_bot_handoff_lineage",
            kind: "message",
            T: LRe,
            opt: !0
        },
        {
            no: 126,
            name: "same_vm_machine_owner_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 127,
            name: "manager_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 128,
            name: "manager_tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 129,
            name: "expected_scope",
            kind: "message",
            T: An
        },
        {
            no: 130,
            name: "pr_agent_view",
            kind: "message",
            T: SL
        },
        {
            no: 131,
            name: "placement_grant_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 132,
            name: "agent_store_owner_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 133,
            name: "staged_project_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 135,
            name: "eval_overrides",
            kind: "message",
            T: NRe,
            opt: !0
        }
    ]), DRe = c.makeMessageType("aiserver.v1.StartBackgroundComposerFromSnapshotRequest.File", ()=>[
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
        }
    ], {
    localName: "StartBackgroundComposerFromSnapshotRequest_File"
}), ORe = c.makeMessageType("aiserver.v1.StartBackgroundComposerFromSnapshotRequest.WebhookConfig", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "secret",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "StartBackgroundComposerFromSnapshotRequest_WebhookConfig"
}), LRe = c.makeMessageType("aiserver.v1.GrokBotHandoffLineage", ()=>[
        {
            no: 1,
            name: "grok_bot_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "launching_request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "launching_root_request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "launching_tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), URe = c.makeMessageType("aiserver.v1.CloudOnboardingAutoEnvSetupAcceptResult", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo_url",
            kind: "scalar",
            T: 9
        }
    ]), NE = c.makeMessageType("aiserver.v1.StartBackgroundComposerFromSnapshotResponse", ()=>[
        {
            no: 1,
            name: "composer",
            kind: "message",
            T: ys
        },
        {
            no: 2,
            name: "was_swapped_to_default",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "initial_run_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "auto_env_setup",
            kind: "message",
            T: URe,
            opt: !0
        },
        {
            no: 5,
            name: "owner",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xRe = c.makeMessageType("aiserver.v1.StartCloudOnboardingRequest", ()=>[
        {
            no: 1,
            name: "start_request",
            kind: "message",
            T: qu
        },
        {
            no: 2,
            name: "scm_provider",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_from_scratch",
            kind: "scalar",
            T: 8
        }
    ]), FRe = c.makeMessageType("aiserver.v1.StartChangeMonitorOnboardingRequest", ()=>[
        {
            no: 1,
            name: "start_request",
            kind: "message",
            T: qu
        }
    ]), WRe = c.makeMessageType("aiserver.v1.StartCloudOnboardingHeuristicEnvSetupRequest", ()=>[
        {
            no: 1,
            name: "scm_provider",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "excluded_repository_keys",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "excluded_repository_node_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "max_results",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), BRe = c.makeMessageType("aiserver.v1.StartCloudOnboardingHeuristicEnvSetupResponse", ()=>[
        {
            no: 1,
            name: "admitted",
            kind: "scalar",
            T: 8
        }
    ]), GRe = c.makeMessageType("aiserver.v1.ForkBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "source_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: c.getEnumType(dL)
        },
        {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "turn_count",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), VRe = c.makeMessageType("aiserver.v1.ForkBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "composer",
            kind: "message",
            T: ys
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "mode",
            kind: "enum",
            T: c.getEnumType(dL)
        },
        {
            no: 5,
            name: "initial_run_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), $Re = c.makeMessageType("aiserver.v1.AttachBackgroundComposerLogsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "last_event_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "worker_index",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 4,
            name: "last_docker_build_event_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "last_setup_event_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "associated_pod_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), jRe = c.makeMessageType("aiserver.v1.AttachBackgroundComposerLogsResponse", ()=>[
        {
            no: 1,
            name: "event",
            kind: "message",
            T: HRe
        },
        {
            no: 2,
            name: "updated_status",
            kind: "message",
            T: H9
        },
        {
            no: 3,
            name: "start_error",
            kind: "message",
            T: cu
        }
    ]), HRe = c.makeMessageType("aiserver.v1.AttachBackgroundComposerLogsResponse.Event", ()=>[
        {
            no: 1,
            name: "event_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "event",
            kind: "message",
            T: kE
        },
        {
            no: 3,
            name: "waterfall_update",
            kind: "message",
            T: sL
        }
    ], {
    localName: "AttachBackgroundComposerLogsResponse_Event"
}), qRe = c.makeMessageType("aiserver.v1.AttachBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "starting_index",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), KRe = c.makeMessageType("aiserver.v1.AttachBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "headless_agentic_composer_response",
            kind: "message",
            T: OL
        },
        {
            no: 2,
            name: "prompt",
            kind: "message",
            T: LL
        },
        {
            no: 4,
            name: "starting_commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "base_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "status_update",
            kind: "enum",
            T: c.getEnumType(Tr)
        },
        {
            no: 3,
            name: "diff_since_start",
            kind: "message",
            T: Ki
        }
    ]), zRe = c.makeMessageType("aiserver.v1.StreamConversationRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "offset_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "filter_heavy_step_data",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "should_send_prefetched_blobs_first",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "pre_fetched_blob_ids",
            kind: "scalar",
            T: 12,
            repeated: !0
        },
        {
            no: 6,
            name: "prefetch_only_last_step_per_turn",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "send_stream_signal_after_prefetch",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "max_blobs_after_prefetch",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 9,
            name: "allow_streaming_when_terminal_status",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "pre_fetched_blob_filter",
            kind: "message",
            T: YRe,
            opt: !0
        },
        {
            no: 11,
            name: "include_stream_heartbeats",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "purpose",
            kind: "enum",
            T: c.getEnumType(Xwe),
            opt: !0
        },
        {
            no: 13,
            name: "expected_scope",
            kind: "message",
            T: An
        },
        {
            no: 14,
            name: "max_turns_to_prefetch",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 15,
            name: "slim_cloud_agent_state",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 16,
            name: "tail_after_state_cursor",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 17,
            name: "send_caught_up_signal",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 18,
            name: "prefetch_window_steps",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 19,
            name: "omit_task_transcripts_in_updates",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 20,
            name: "preview_truncated_steps",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 22,
            name: "omit_edit_full_file_contents",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), YRe = c.makeMessageType("aiserver.v1.PreFetchedBlobFilter", ()=>[
        {
            no: 1,
            name: "seed",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "segment_length",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "segment_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "fingerprint_bits",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "slot_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "packed_fingerprints",
            kind: "scalar",
            T: 12
        }
    ]), JRe = c.makeMessageType("aiserver.v1.ReadOnlySharedPodLifecycleEvent", ()=>[
        {
            no: 1,
            name: "phase",
            kind: "enum",
            T: c.getEnumType(XRe)
        }
    ]), XRe = c.makeEnum("aiserver.v1.ReadOnlySharedPodLifecycleEvent.Phase", [
    {
        no: 0,
        name: "PHASE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 2,
        name: "PHASE_AWAITING_FULL_POD",
        localName: "AWAITING_FULL_POD"
    },
    {
        no: 3,
        name: "PHASE_INACTIVE",
        localName: "INACTIVE"
    }
]), QRe = c.makeMessageType("aiserver.v1.WorkerLifecycleEvent", ()=>[
        {
            no: 1,
            name: "worker_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "creating",
            kind: "message",
            T: Hr,
            oneof: "event"
        },
        {
            no: 3,
            name: "pinned_worker_offline",
            kind: "message",
            T: Hr,
            oneof: "event"
        },
        {
            no: 4,
            name: "pinned_worker_reconnected",
            kind: "message",
            T: Hr,
            oneof: "event"
        }
    ]), Do = c.makeMessageType("aiserver.v1.PreFetchedBlob", ()=>[
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
    ]), DL = c.makeMessageType("aiserver.v1.StreamConversationResponse", ()=>[
        {
            no: 3,
            name: "initial_state",
            kind: "message",
            T: t0e,
            oneof: "message"
        },
        {
            no: 4,
            name: "interaction_update_with_offset",
            kind: "message",
            T: r0e,
            oneof: "message"
        },
        {
            no: 5,
            name: "cloud_agent_state_with_id_and_offset",
            kind: "message",
            T: n0e,
            oneof: "message"
        },
        {
            no: 6,
            name: "workflow_status_with_offset",
            kind: "message",
            T: i0e,
            oneof: "message"
        },
        {
            no: 7,
            name: "prefetched_blobs",
            kind: "message",
            T: e0e,
            oneof: "message"
        },
        {
            no: 8,
            name: "stream_signal",
            kind: "enum",
            T: c.getEnumType(ZRe),
            oneof: "message"
        },
        {
            no: 9,
            name: "transient_error_with_offset",
            kind: "message",
            T: a0e,
            oneof: "message"
        },
        {
            no: 10,
            name: "dev_banner_message",
            kind: "message",
            T: o0e,
            oneof: "message"
        },
        {
            no: 11,
            name: "worker_lifecycle_event_with_offset",
            kind: "message",
            T: l0e,
            oneof: "message"
        },
        {
            no: 12,
            name: "interaction_query_with_offset",
            kind: "message",
            T: s0e,
            oneof: "message"
        },
        {
            no: 13,
            name: "read_only_shared_pod_lifecycle_event_with_offset",
            kind: "message",
            T: d0e,
            oneof: "message"
        },
        {
            no: 14,
            name: "stream_heartbeat",
            kind: "message",
            T: c0e,
            oneof: "message"
        },
        {
            no: 15,
            name: "interaction_settled_with_offset",
            kind: "message",
            T: u0e,
            oneof: "message"
        }
    ]), ZRe = c.makeEnum("aiserver.v1.StreamConversationResponse.StreamSignal", [
    {
        no: 0,
        name: "STREAM_SIGNAL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STREAM_SIGNAL_END_OF_INITIAL_STATE_PREFETCH",
        localName: "END_OF_INITIAL_STATE_PREFETCH"
    },
    {
        no: 2,
        name: "STREAM_SIGNAL_CAUGHT_UP",
        localName: "CAUGHT_UP"
    }
]), e0e = c.makeMessageType("aiserver.v1.StreamConversationResponse.PrefetchedBlobs", ()=>[
        {
            no: 1,
            name: "pre_fetched_blobs",
            kind: "message",
            T: Do,
            repeated: !0
        }
    ], {
    localName: "StreamConversationResponse_PrefetchedBlobs"
}), t0e = c.makeMessageType("aiserver.v1.StreamConversationResponse.InitialState", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "cloud_agent_state",
            kind: "message",
            T: xE
        },
        {
            no: 4,
            name: "pre_fetched_blobs",
            kind: "message",
            T: Do,
            repeated: !0
        },
        {
            no: 5,
            name: "workflow_status",
            kind: "enum",
            T: c.getEnumType(Of)
        },
        {
            no: 6,
            name: "user_display_infos",
            kind: "message",
            T: lw,
            repeated: !0
        }
    ], {
    localName: "StreamConversationResponse_InitialState"
}), n0e = c.makeMessageType("aiserver.v1.StreamConversationResponse.CloudAgentStateWithIdAndOffset", ()=>[
        {
            no: 1,
            name: "offset_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "cloud_agent_state",
            kind: "message",
            T: xE
        },
        {
            no: 4,
            name: "pre_fetched_blobs",
            kind: "message",
            T: Do,
            repeated: !0
        },
        {
            no: 5,
            name: "user_display_infos",
            kind: "message",
            T: lw,
            repeated: !0
        }
    ], {
    localName: "StreamConversationResponse_CloudAgentStateWithIdAndOffset"
}), r0e = c.makeMessageType("aiserver.v1.StreamConversationResponse.InteractionUpdateWithOffset", ()=>[
        {
            no: 1,
            name: "offset_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "interaction_update",
            kind: "message",
            T: hD
        },
        {
            no: 3,
            name: "user_display_infos",
            kind: "message",
            T: lw,
            repeated: !0
        }
    ], {
    localName: "StreamConversationResponse_InteractionUpdateWithOffset"
}), s0e = c.makeMessageType("aiserver.v1.StreamConversationResponse.InteractionQueryWithOffset", ()=>[
        {
            no: 1,
            name: "offset_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "interaction_query",
            kind: "message",
            T: Qle
        }
    ], {
    localName: "StreamConversationResponse_InteractionQueryWithOffset"
}), i0e = c.makeMessageType("aiserver.v1.StreamConversationResponse.WorkflowStatusWithOffset", ()=>[
        {
            no: 1,
            name: "offset_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workflow_status",
            kind: "enum",
            T: c.getEnumType(Of)
        }
    ], {
    localName: "StreamConversationResponse_WorkflowStatusWithOffset"
}), a0e = c.makeMessageType("aiserver.v1.StreamConversationResponse.TransientErrorWithOffset", ()=>[
        {
            no: 1,
            name: "offset_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "transient_error",
            kind: "message",
            T: oPe
        }
    ], {
    localName: "StreamConversationResponse_TransientErrorWithOffset"
}), o0e = c.makeMessageType("aiserver.v1.StreamConversationResponse.DevBannerMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamConversationResponse_DevBannerMessage"
}), c0e = c.makeMessageType("aiserver.v1.StreamConversationResponse.StreamHeartbeat", [], {
    localName: "StreamConversationResponse_StreamHeartbeat"
}), l0e = c.makeMessageType("aiserver.v1.StreamConversationResponse.WorkerLifecycleEventWithOffset", ()=>[
        {
            no: 1,
            name: "offset_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "worker_lifecycle_event",
            kind: "message",
            T: QRe
        }
    ], {
    localName: "StreamConversationResponse_WorkerLifecycleEventWithOffset"
}), d0e = c.makeMessageType("aiserver.v1.StreamConversationResponse.ReadOnlySharedPodLifecycleEventWithOffset", ()=>[
        {
            no: 1,
            name: "offset_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "read_only_shared_pod_lifecycle_event",
            kind: "message",
            T: JRe
        }
    ], {
    localName: "StreamConversationResponse_ReadOnlySharedPodLifecycleEventWithOffset"
}), u0e = c.makeMessageType("aiserver.v1.StreamConversationResponse.InteractionSettledWithOffset", ()=>[
        {
            no: 1,
            name: "offset_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "interaction_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "state",
            kind: "enum",
            T: c.getEnumType(hL)
        },
        {
            no: 4,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "answer",
            kind: "message",
            T: gu,
            opt: !0
        }
    ], {
    localName: "StreamConversationResponse_InteractionSettledWithOffset"
}), m0e = c.makeMessageType("aiserver.v1.GetLatestAgentConversationStateRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), p0e = c.makeMessageType("aiserver.v1.LatestAgentConversationState", ()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: Bg
        },
        {
            no: 2,
            name: "num_prior_interaction_updates",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "conversation_rewind_epoch",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), h0e = c.makeMessageType("aiserver.v1.GetLatestAgentConversationStateResponse", ()=>[
        {
            no: 1,
            name: "latest_conversation_state",
            kind: "message",
            T: p0e
        },
        {
            no: 2,
            name: "pre_fetched_blobs",
            kind: "message",
            T: Do,
            repeated: !0
        }
    ]), g0e = c.makeMessageType("aiserver.v1.GetBlobForAgentKVRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), f0e = c.makeMessageType("aiserver.v1.GetBlobForAgentKVResponse", ()=>[
        {
            no: 1,
            name: "blob_data",
            kind: "scalar",
            T: 12
        }
    ]), _0e = c.makeMessageType("aiserver.v1.GetConversationPageRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "turn_ids",
            kind: "scalar",
            T: 12,
            repeated: !0
        },
        {
            no: 3,
            name: "held_steps_of_first",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "window_steps",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "preview_truncated_steps",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "omit_edit_full_file_contents",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "filter_heavy_step_data",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), v0e = c.makeMessageType("aiserver.v1.GetConversationPageResponse", ()=>[
        {
            no: 1,
            name: "blobs",
            kind: "message",
            T: Do,
            repeated: !0
        },
        {
            no: 2,
            name: "steps",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "reached_first_turn",
            kind: "scalar",
            T: 8
        }
    ]), OL = c.makeMessageType("aiserver.v1.HeadlessAgenticComposerResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: tN,
            opt: !0
        },
        {
            no: 3,
            name: "final_tool_result",
            kind: "message",
            T: k0e,
            opt: !0
        },
        {
            no: 6,
            name: "streamed_back_tool_call",
            kind: "message",
            T: PY,
            opt: !0
        },
        {
            no: 4,
            name: "user_message",
            kind: "message",
            T: T0e
        },
        {
            no: 5,
            name: "is_message_done",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "error",
            kind: "message",
            T: S0e,
            opt: !0
        },
        {
            no: 8,
            name: "human_message",
            kind: "message",
            T: Ji
        },
        {
            no: 9,
            name: "thinking",
            kind: "message",
            T: hw,
            opt: !0
        },
        {
            no: 10,
            name: "thinking_duration_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 12,
            name: "thinking_style",
            kind: "enum",
            T: c.getEnumType(fD),
            opt: !0
        },
        {
            no: 11,
            name: "status",
            kind: "message",
            T: y0e,
            opt: !0
        }
    ]), T0e = c.makeMessageType("aiserver.v1.HeadlessAgenticComposerResponse.UserMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "rich_text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "HeadlessAgenticComposerResponse_UserMessage"
}), k0e = c.makeMessageType("aiserver.v1.HeadlessAgenticComposerResponse.FinalToolResult", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: nN
        }
    ], {
    localName: "HeadlessAgenticComposerResponse_FinalToolResult"
}), S0e = c.makeMessageType("aiserver.v1.HeadlessAgenticComposerResponse.Error", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error_details",
            kind: "message",
            T: cu
        }
    ], {
    localName: "HeadlessAgenticComposerResponse_Error"
}), y0e = c.makeMessageType("aiserver.v1.HeadlessAgenticComposerResponse.Status", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: c.getEnumType(w0e)
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_complete",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "HeadlessAgenticComposerResponse_Status"
}), w0e = c.makeEnum("aiserver.v1.HeadlessAgenticComposerResponse.Status.StatusType", [
    {
        no: 0,
        name: "STATUS_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_TYPE_INDEX_SYNC",
        localName: "INDEX_SYNC"
    },
    {
        no: 2,
        name: "STATUS_TYPE_GENERIC",
        localName: "GENERIC"
    }
]), E0e = c.makeMessageType("aiserver.v1.HeadlessAgenticComposerRepositoryInfo", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: Dg
        },
        {
            no: 2,
            name: "path_encryption_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repository_info_should_query_staging",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "repository_info_should_query_prod",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "repo_query_auth_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "should_sync_index",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "query_only_repo_access",
            kind: "message",
            T: VP
        }
    ]), LL = c.makeMessageType("aiserver.v1.HeadlessAgenticComposerPrompt", ()=>[
        {
            no: 5,
            name: "base_conversation_message",
            kind: "message",
            T: Ji
        },
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "rich_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_selections",
            kind: "message",
            T: b0e,
            repeated: !0
        },
        {
            no: 3,
            name: "file_attachments",
            kind: "message",
            T: R0e,
            repeated: !0
        },
        {
            no: 4,
            name: "images",
            kind: "message",
            T: Kc,
            repeated: !0
        },
        {
            no: 7,
            name: "conversation_history",
            kind: "message",
            T: Ji,
            repeated: !0
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
            name: "use_web",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "external_links",
            kind: "message",
            T: jy,
            repeated: !0
        },
        {
            no: 11,
            name: "blob_data_per_message",
            kind: "message",
            T: Rwe,
            repeated: !0
        }
    ]), b0e = c.makeMessageType("aiserver.v1.HeadlessAgenticComposerPrompt.FileSelection", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "HeadlessAgenticComposerPrompt_FileSelection"
}), R0e = c.makeMessageType("aiserver.v1.HeadlessAgenticComposerPrompt.FileAttachment", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "HeadlessAgenticComposerPrompt_FileAttachment"
}), C0e = c.makeMessageType("aiserver.v1.GetBackgroundComposerStatusRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), I0e = c.makeMessageType("aiserver.v1.GetBackgroundComposerStatusResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: c.getEnumType(Tr)
        },
        {
            no: 2,
            name: "is_unread",
            kind: "scalar",
            T: 8
        }
    ]), A0e = c.makeMessageType("aiserver.v1.AddAsyncFollowupBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "followup",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "rich_followup",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "synchronous",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "followup_message",
            kind: "message",
            T: Ji
        },
        {
            no: 6,
            name: "model_details",
            kind: "message",
            T: ou,
            opt: !0
        },
        {
            no: 15,
            name: "requested_model",
            kind: "message",
            T: Pg,
            opt: !0
        },
        {
            no: 7,
            name: "followup_source",
            kind: "enum",
            T: c.getEnumType(ke),
            opt: !0
        },
        {
            no: 8,
            name: "continue_rebase",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "plan_followup_type",
            kind: "enum",
            T: c.getEnumType(Qwe),
            opt: !0
        },
        {
            no: 10,
            name: "followup_conversation_action",
            kind: "message",
            T: Wg,
            opt: !0
        },
        {
            no: 11,
            name: "followup_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "time_budget_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 13,
            name: "time_budget_seconds",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 14,
            name: "followup_system_reminder",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "mcp_config_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "requested_additional_store_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 18,
            name: "run_env_vars",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 19,
            name: "store_mounts",
            kind: "message",
            T: Z9,
            repeated: !0
        },
        {
            no: 20,
            name: "resubmit_from_message_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 21,
            name: "use_experimental_model_opt_out",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 22,
            name: "coalescing_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 23,
            name: "pr_head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 24,
            name: "expected_scope",
            kind: "message",
            T: An
        },
        {
            no: 25,
            name: "pr_agent_view",
            kind: "message",
            T: SL
        },
        {
            no: 26,
            name: "open_interaction_settlements",
            kind: "message",
            T: cPe,
            repeated: !0
        }
    ]), M0e = c.makeMessageType("aiserver.v1.AddAsyncFollowupBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "run_id",
            kind: "scalar",
            T: 9
        }
    ]), P0e = c.makeMessageType("aiserver.v1.InjectBackgroundComposerContextRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "inject_context_action",
            kind: "message",
            T: cD
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: c.getEnumType(ke)
        },
        {
            no: 4,
            name: "followup_message",
            kind: "message",
            T: Ji
        },
        {
            no: 5,
            name: "promote_followup_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), N0e = c.makeMessageType("aiserver.v1.InjectBackgroundComposerContextResponse", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: c.getEnumType(D0e)
        },
        {
            no: 2,
            name: "queued_run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "fallback_reason",
            kind: "scalar",
            T: 9
        }
    ]), D0e = c.makeEnum("aiserver.v1.InjectBackgroundComposerContextResponse.Outcome", [
    {
        no: 0,
        name: "OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "OUTCOME_QUEUED",
        localName: "QUEUED"
    },
    {
        no: 2,
        name: "OUTCOME_QUEUED_FOR_NEXT_TURN",
        localName: "QUEUED_FOR_NEXT_TURN"
    },
    {
        no: 3,
        name: "OUTCOME_REJECTED",
        localName: "REJECTED"
    }
]), O0e = c.makeMessageType("aiserver.v1.SubmitInteractionResponseBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "interaction_response",
            kind: "message",
            T: gD
        },
        {
            no: 3,
            name: "ask_question_tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "interaction_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), L0e = c.makeMessageType("aiserver.v1.SubmitInteractionResponseBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "resolution_outcome",
            kind: "enum",
            T: c.getEnumType(U0e)
        }
    ]), U0e = c.makeEnum("aiserver.v1.SubmitInteractionResponseBackgroundComposerResponse.ResolutionOutcome", [
    {
        no: 0,
        name: "RESOLUTION_OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESOLUTION_OUTCOME_SIGNAL_ENQUEUED",
        localName: "SIGNAL_ENQUEUED"
    },
    {
        no: 2,
        name: "RESOLUTION_OUTCOME_NOT_PAUSED",
        localName: "NOT_PAUSED"
    },
    {
        no: 3,
        name: "RESOLUTION_OUTCOME_QUERY_ID_SIGNAL_ENQUEUED",
        localName: "QUERY_ID_SIGNAL_ENQUEUED"
    },
    {
        no: 4,
        name: "RESOLUTION_OUTCOME_ANSWER_ENQUEUED",
        localName: "ANSWER_ENQUEUED"
    }
]), x0e = c.makeMessageType("aiserver.v1.ListPendingFollowupsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), F0e = c.makeMessageType("aiserver.v1.PendingFollowup", ()=>[
        {
            no: 1,
            name: "followup_id",
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
            name: "rich_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "source",
            kind: "enum",
            T: c.getEnumType(ke)
        },
        {
            no: 6,
            name: "cursor_commands",
            kind: "message",
            T: sw,
            repeated: !0
        },
        {
            no: 7,
            name: "cursor_commands_explicitly_set",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "past_chats",
            kind: "message",
            T: iw,
            repeated: !0
        },
        {
            no: 9,
            name: "past_chats_explicitly_set",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "conversation_action",
            kind: "message",
            T: Wg,
            opt: !0
        },
        {
            no: 11,
            name: "blob_data",
            kind: "message",
            T: iL,
            repeated: !0
        },
        {
            no: 12,
            name: "use_experimental_model_opt_out",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), W0e = c.makeMessageType("aiserver.v1.ListPendingFollowupsResponse", ()=>[
        {
            no: 1,
            name: "pending_followups",
            kind: "message",
            T: F0e,
            repeated: !0
        }
    ]), B0e = c.makeMessageType("aiserver.v1.UpdatePendingFollowupRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "followup_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "updated_message",
            kind: "message",
            T: Ji
        },
        {
            no: 4,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), G0e = c.makeMessageType("aiserver.v1.UpdatePendingFollowupResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), V0e = c.makeMessageType("aiserver.v1.DeletePendingFollowupRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "followup_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), $0e = c.makeMessageType("aiserver.v1.DeletePendingFollowupResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), j0e = c.makeMessageType("aiserver.v1.ReorderPendingFollowupRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "followup_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "target_followup_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "insert_after",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), H0e = c.makeMessageType("aiserver.v1.ReorderPendingFollowupResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), q0e = c.makeMessageType("aiserver.v1.SubmitPendingFollowupNowRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "followup_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), K0e = c.makeMessageType("aiserver.v1.SubmitPendingFollowupNowResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), z0e = c.makeMessageType("aiserver.v1.MarkFollowupEditingRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "followup_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "editing",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), Y0e = c.makeMessageType("aiserver.v1.MarkFollowupEditingResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), J0e = c.makeMessageType("aiserver.v1.StartSlackStreamingForFollowupRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), X0e = c.makeMessageType("aiserver.v1.StartSlackStreamingForFollowupResponse", []), Q0e = c.makeMessageType("aiserver.v1.StartGithubStreamingForFollowupRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), Z0e = c.makeMessageType("aiserver.v1.StartGithubStreamingForFollowupResponse", []), eCe = c.makeMessageType("aiserver.v1.StartLinearStreamingForFollowupRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), tCe = c.makeMessageType("aiserver.v1.StartLinearStreamingForFollowupResponse", []), nCe = c.makeMessageType("aiserver.v1.GetBackgroundComposerInfoRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "include_diff",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "do_not_throw_if_setup_not_finished",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), rCe = c.makeMessageType("aiserver.v1.GetBackgroundComposerTimingsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), sCe = c.makeMessageType("aiserver.v1.CloudAgentTimingEvent", ()=>[
        {
            no: 1,
            name: "timestamp_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "event",
            kind: "enum",
            T: c.getEnumType(Zwe)
        },
        {
            no: 3,
            name: "turn_number",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), iCe = c.makeMessageType("aiserver.v1.UsedEnvironmentBuildInfo", ()=>[
        {
            no: 1,
            name: "boot_info",
            kind: "message",
            T: j9,
            opt: !0
        }
    ]), UL = c.makeMessageType("aiserver.v1.DetailedBackgroundComposer", ()=>[
        {
            no: 1,
            name: "composer",
            kind: "message",
            T: ys
        },
        {
            no: 2,
            name: "starting_commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "prompt",
            kind: "message",
            T: LL
        },
        {
            no: 5,
            name: "status",
            kind: "enum",
            T: c.getEnumType(Tr)
        },
        {
            no: 6,
            name: "diff_since_start",
            kind: "message",
            T: Ki
        },
        {
            no: 7,
            name: "start_error",
            kind: "message",
            T: cu
        },
        {
            no: 8,
            name: "model_details",
            kind: "message",
            T: ou
        },
        {
            no: 9,
            name: "unread",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "environment_ports",
            kind: "message",
            T: LMe,
            repeated: !0
        },
        {
            no: 12,
            name: "auto_create_pr",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "open_as_cursor_github_app",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "skip_reviewer_request",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 15,
            name: "local_state_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "permanent_error",
            kind: "message",
            T: cu,
            opt: !0
        },
        {
            no: 18,
            name: "video_annotations",
            kind: "message",
            T: dCe,
            repeated: !0
        },
        {
            no: 19,
            name: "auto_branch",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 20,
            name: "prs",
            kind: "message",
            T: xL,
            repeated: !0
        },
        {
            no: 21,
            name: "vm_provisioned_skills",
            kind: "message",
            T: oCe,
            repeated: !0
        },
        {
            no: 22,
            name: "original_conversation_action",
            kind: "message",
            T: Wg,
            opt: !0
        },
        {
            no: 23,
            name: "repo_config",
            kind: "message",
            T: vi,
            opt: !0
        },
        {
            no: 24,
            name: "environment_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 25,
            name: "use_private_worker",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 26,
            name: "labels",
            kind: "message",
            T: Bf,
            repeated: !0
        },
        {
            no: 27,
            name: "used_environment_version",
            kind: "message",
            T: Oo,
            opt: !0
        },
        {
            no: 28,
            name: "requested_model",
            kind: "message",
            T: Pg,
            opt: !0
        },
        {
            no: 29,
            name: "cloud_subagent_parent",
            kind: "message",
            T: ME,
            opt: !0
        },
        {
            no: 30,
            name: "startup_warnings",
            kind: "message",
            T: YL,
            repeated: !0
        },
        {
            no: 31,
            name: "used_environment_build",
            kind: "message",
            T: iCe,
            opt: !0
        },
        {
            no: 34,
            name: "use_experimental_model_opt_out",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 36,
            name: "canvas_store_roots",
            kind: "message",
            T: aCe,
            repeated: !0
        },
        {
            no: 37,
            name: "full_details_version",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), aCe = c.makeMessageType("aiserver.v1.CanvasStoreRoot", ()=>[
        {
            no: 1,
            name: "canvases_root",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "store_kind",
            kind: "scalar",
            T: 9
        }
    ]), oCe = c.makeMessageType("aiserver.v1.VmProvisionedSkill", ()=>[
        {
            no: 1,
            name: "skill_id",
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
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "custom_mode",
            kind: "message",
            T: Bce,
            opt: !0
        },
        {
            no: 6,
            name: "display_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "icon",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "color",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xL = c.makeMessageType("aiserver.v1.BackgroundComposerPr", ()=>[
        {
            no: 1,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "base_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "scm_repo_node_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "pull_number",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "pr_status",
            kind: "enum",
            T: c.getEnumType(cL),
            opt: !0
        },
        {
            no: 6,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "scm_provider",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "worker_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), FL = c.makeMessageType("aiserver.v1.VideoTimestamp", ()=>[
        {
            no: 1,
            name: "minutes",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "seconds",
            kind: "scalar",
            T: 1
        }
    ]), cCe = c.makeMessageType("aiserver.v1.VideoChapter", ()=>[
        {
            no: 1,
            name: "start_time",
            kind: "message",
            T: FL
        },
        {
            no: 3,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "should_hide",
            kind: "scalar",
            T: 8
        }
    ]), lCe = c.makeMessageType("aiserver.v1.VideoAnnotation", ()=>[
        {
            no: 1,
            name: "labeled_chapters",
            kind: "message",
            T: cCe,
            repeated: !0
        },
        {
            no: 2,
            name: "thumbnail_timestamp",
            kind: "message",
            T: FL
        },
        {
            no: 3,
            name: "trim_start_seconds",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 4,
            name: "trim_end_seconds",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ]), dCe = c.makeMessageType("aiserver.v1.VideoAnnotationEntry", ()=>[
        {
            no: 1,
            name: "artifact_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "annotation",
            kind: "message",
            T: lCe
        }
    ]), uCe = c.makeMessageType("aiserver.v1.GetBackgroundComposerInfoResponse", ()=>[
        {
            no: 1,
            name: "composer",
            kind: "message",
            T: UL
        }
    ]), mCe = c.makeMessageType("aiserver.v1.GetBackgroundComposerTimingsResponse", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: sCe,
            repeated: !0
        }
    ]), pCe = c.makeMessageType("aiserver.v1.GetBackgroundComposerRepositoryInfoRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), hCe = c.makeMessageType("aiserver.v1.GetBackgroundComposerRepositoryInfoResponse", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: Dg
        },
        {
            no: 2,
            name: "path_encryption_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "query_only_repo_access",
            kind: "message",
            T: VP
        }
    ]), gCe = c.makeMessageType("aiserver.v1.GetMachineRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mint_desktop_ticket",
            kind: "scalar",
            T: 8
        }
    ]), fCe = c.makeMessageType("aiserver.v1.PodReference", ()=>[
        {
            no: 1,
            name: "pod_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tenant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "network_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "cluster",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "exec_daemon_auth_token",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "pty_auth_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), _Ce = c.makeMessageType("aiserver.v1.WorkerReference", ()=>[
        {
            no: 1,
            name: "worker_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "desktop",
            kind: "message",
            T: TCe,
            opt: !0
        },
        {
            no: 4,
            name: "cursor_server",
            kind: "message",
            T: vCe,
            opt: !0
        }
    ]), vCe = c.makeMessageType("aiserver.v1.WorkerCursorServerCapability", ()=>[
        {
            no: 1,
            name: "available",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "unavailable_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), TCe = c.makeMessageType("aiserver.v1.WorkerDesktopCapability", ()=>[
        {
            no: 1,
            name: "available",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "ws_url",
            kind: "scalar",
            T: 9,
            opt: !0
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
            name: "session_secret",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "protocol",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "display_kind",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "auth_scheme",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "control_allowed",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "unavailable_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), kCe = c.makeMessageType("aiserver.v1.MachineReference", ()=>[
        {
            no: 1,
            name: "pod",
            kind: "message",
            T: fCe,
            oneof: "reference"
        },
        {
            no: 2,
            name: "worker",
            kind: "message",
            T: _Ce,
            oneof: "reference"
        }
    ]), SCe = c.makeMessageType("aiserver.v1.GetMachineResponse", ()=>[
        {
            no: 1,
            name: "machine",
            kind: "message",
            T: kCe
        }
    ]), yCe = c.makeMessageType("aiserver.v1.ListWorkspaceFilesRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), wCe = c.makeMessageType("aiserver.v1.ListWorkspaceFilesResponse", ()=>[
        {
            no: 1,
            name: "relative_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), ECe = c.makeMessageType("aiserver.v1.GetMachineResourceUsageRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cursor",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "omit_history",
            kind: "scalar",
            T: 8
        }
    ]), bCe = c.makeMessageType("aiserver.v1.BackgroundComposerDesktopLeaseRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "action",
            kind: "enum",
            T: c.getEnumType(e1e)
        },
        {
            no: 3,
            name: "surface_id",
            kind: "scalar",
            T: 9
        }
    ]), RCe = c.makeMessageType("aiserver.v1.BackgroundComposerDesktopLeaseResponse", ()=>[
        {
            no: 1,
            name: "held",
            kind: "scalar",
            T: 8
        }
    ]), CCe = c.makeMessageType("aiserver.v1.GetGithubAccessTokenForReposRequest", ()=>[
        {
            no: 1,
            name: "mandatory_repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "optional_repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "skip_cache",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), ICe = c.makeMessageType("aiserver.v1.GetGithubAccessTokenForReposResponse", ()=>[
        {
            no: 1,
            name: "has_access",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "repo_url_statuses",
            kind: "message",
            T: ACe,
            repeated: !0
        },
        {
            no: 4,
            name: "error_type",
            kind: "enum",
            T: c.getEnumType(t1e)
        },
        {
            no: 5,
            name: "github_redirect_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ACe = c.makeMessageType("aiserver.v1.GetGithubAccessTokenForReposResponse.Status", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "has_access",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "GetGithubAccessTokenForReposResponse_Status"
}), MCe = c.makeMessageType("aiserver.v1.MakeGithubRequestRequest", ()=>[
        {
            no: 1,
            name: "method",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "body_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "github_user_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "caller",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "host",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "path_template",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "accept_header",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), PCe = c.makeMessageType("aiserver.v1.MakeGithubRequestResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "status_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9
        }
    ]), NCe = c.makeMessageType("aiserver.v1.GetBackgroundComposerConversationRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "exchange_only",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), DCe = c.makeMessageType("aiserver.v1.GetBackgroundComposerConversationResponse", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: Ji,
            repeated: !0
        }
    ]), OCe = c.makeMessageType("aiserver.v1.GetBackgroundComposerPullRequestRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), LCe = c.makeMessageType("aiserver.v1.GetBackgroundComposerPullRequestResponse", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), UCe = c.makeMessageType("aiserver.v1.CommitBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit_message",
            kind: "scalar",
            T: 9
        }
    ]), xCe = c.makeMessageType("aiserver.v1.CommitBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        }
    ]), WL = c.makeMessageType("aiserver.v1.LiveEgressReapplyResult", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: c.getEnumType(FCe)
        }
    ]), FCe = c.makeEnum("aiserver.v1.LiveEgressReapplyResult.Outcome", [
    {
        no: 0,
        name: "OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "OUTCOME_APPLIED",
        localName: "APPLIED"
    },
    {
        no: 2,
        name: "OUTCOME_NOT_APPLICABLE",
        localName: "NOT_APPLICABLE"
    },
    {
        no: 3,
        name: "OUTCOME_STORED_NOT_APPLIED",
        localName: "STORED_NOT_APPLIED"
    },
    {
        no: 4,
        name: "OUTCOME_FAILED",
        localName: "FAILED"
    }
]), WCe = c.makeMessageType("aiserver.v1.SetPersonalEnvironmentJsonRequest", ()=>[
        {
            no: 1,
            name: "environment_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "write_source",
            kind: "enum",
            T: c.getEnumType(gl)
        },
        {
            no: 4,
            name: "source_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "environment_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "repo_config",
            kind: "message",
            T: vi,
            opt: !0
        },
        {
            no: 7,
            name: "environment_id",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 8,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "create_only",
            kind: "scalar",
            T: 8
        }
    ]), BCe = c.makeMessageType("aiserver.v1.SetPersonalEnvironmentJsonResponse", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: La,
            opt: !0
        },
        {
            no: 2,
            name: "live_egress_reapply",
            kind: "message",
            T: WL,
            opt: !0
        },
        {
            no: 3,
            name: "created",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), GCe = c.makeMessageType("aiserver.v1.GetPersonalEnvironmentJsonRequest", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        }
    ]), VCe = c.makeMessageType("aiserver.v1.GetPersonalEnvironmentJsonResponse", ()=>[
        {
            no: 1,
            name: "environment_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo_url",
            kind: "scalar",
            T: 9
        }
    ]), $Ce = c.makeMessageType("aiserver.v1.GetEnvironmentJsonCandidatesRequest", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9
        }
    ]), jCe = c.makeMessageType("aiserver.v1.GetEnvironmentJsonCandidatesResponse", ()=>[
        {
            no: 1,
            name: "repo_environment_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "personal_environment_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "team_environment_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), HCe = c.makeMessageType("aiserver.v1.ListPersonalEnvironmentsRequest", ()=>[
        {
            no: 1,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), qCe = c.makeMessageType("aiserver.v1.PersonalEnvironment", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "environment_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "updated_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "id",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), KCe = c.makeMessageType("aiserver.v1.ListPersonalEnvironmentsResponse", ()=>[
        {
            no: 1,
            name: "environments",
            kind: "message",
            T: qCe,
            repeated: !0
        }
    ]), zCe = c.makeMessageType("aiserver.v1.DeletePersonalEnvironmentJsonRequest", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "write_source",
            kind: "enum",
            T: c.getEnumType(gl),
            opt: !0
        }
    ]), YCe = c.makeMessageType("aiserver.v1.DeletePersonalEnvironmentJsonResponse", []), JCe = c.makeMessageType("aiserver.v1.PublishEnvironmentRequest", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "environment_type",
            kind: "enum",
            T: c.getEnumType(n1e)
        }
    ]), XCe = c.makeMessageType("aiserver.v1.PublishEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), QCe = c.makeMessageType("aiserver.v1.PublishPersonalEnvironmentRequest", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3
        }
    ]), ZCe = c.makeMessageType("aiserver.v1.PublishPersonalEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), eIe = c.makeMessageType("aiserver.v1.ListTeamEnvironmentsRequest", ()=>[
        {
            no: 1,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "existence_only",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), tIe = c.makeMessageType("aiserver.v1.TeamEnvironment", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "environment_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "created_by_user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 7,
            name: "updated_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 8,
            name: "scm_repo_node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "git_enterprise_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), nIe = c.makeMessageType("aiserver.v1.ListTeamEnvironmentsResponse", ()=>[
        {
            no: 1,
            name: "environments",
            kind: "message",
            T: tIe,
            repeated: !0
        },
        {
            no: 2,
            name: "has_environments_hidden_by_repo_access",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "has_any_team_environment",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), rIe = c.makeMessageType("aiserver.v1.ListEnvironmentsRequest", ()=>[
        {
            no: 1,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "page_token",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "search_query",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "include_environment_json",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "repository_scope_repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "include_repository_scope_environments",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "include_environments_without_repo_access",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "filter_repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), La = c.makeMessageType("aiserver.v1.LogicalEnvironment", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "public_id",
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
            name: "scope",
            kind: "enum",
            T: c.getEnumType(Lf)
        },
        {
            no: 5,
            name: "owning_team",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "owning_user",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "repo_config",
            kind: "message",
            T: vi,
            opt: !0
        },
        {
            no: 8,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 9,
            name: "updated_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 10,
            name: "environment_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "latest_environment_version_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "ineligibility_reason",
            kind: "enum",
            T: c.getEnumType(r1e),
            opt: !0
        },
        {
            no: 13,
            name: "ineligible_repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), sIe = c.makeMessageType("aiserver.v1.ListEnvironmentsResponse", ()=>[
        {
            no: 1,
            name: "environments",
            kind: "message",
            T: La,
            repeated: !0
        },
        {
            no: 2,
            name: "dashboard_scope_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "has_more",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "next_page_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), iIe = c.makeMessageType("aiserver.v1.GetEnvironmentRequest", ()=>[
        {
            no: 1,
            name: "public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "include_environment_json",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), aIe = c.makeMessageType("aiserver.v1.GetEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: La,
            opt: !0
        }
    ]), oIe = c.makeMessageType("aiserver.v1.RenameEnvironmentRequest", ()=>[
        {
            no: 1,
            name: "public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "write_source",
            kind: "enum",
            T: c.getEnumType(gl),
            opt: !0
        }
    ]), cIe = c.makeMessageType("aiserver.v1.RenameEnvironmentResponse", []), lIe = c.makeMessageType("aiserver.v1.MigrateEnvironmentToOriginRequest", ()=>[
        {
            no: 1,
            name: "public_id",
            kind: "scalar",
            T: 9
        }
    ]), dIe = c.makeMessageType("aiserver.v1.MigrateEnvironmentToOriginResponse", ()=>[
        {
            no: 1,
            name: "new_environment_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "copied_secret_count",
            kind: "scalar",
            T: 5
        }
    ]), uIe = c.makeMessageType("aiserver.v1.DuplicateEnvironmentRequest", ()=>[
        {
            no: 1,
            name: "public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), mIe = c.makeMessageType("aiserver.v1.DuplicateEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "new_environment_public_id",
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
            name: "copied_secret_count",
            kind: "scalar",
            T: 5
        }
    ]), pIe = c.makeMessageType("aiserver.v1.EnvironmentBuildRepoCommit", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "commit_hash_hex",
            kind: "scalar",
            T: 9
        }
    ]), fl = c.makeMessageType("aiserver.v1.EnvironmentBuildRow", ()=>[
        {
            no: 1,
            name: "build_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "environment_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status",
            kind: "enum",
            T: c.getEnumType(uL)
        },
        {
            no: 4,
            name: "trigger_type",
            kind: "enum",
            T: c.getEnumType(s1e)
        },
        {
            no: 5,
            name: "source",
            kind: "enum",
            T: c.getEnumType(i1e)
        },
        {
            no: 6,
            name: "failure_type",
            kind: "enum",
            T: c.getEnumType(a1e),
            opt: !0
        },
        {
            no: 7,
            name: "environment_version_id",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 8,
            name: "user_facing_snapshot_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 10,
            name: "updated_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 11,
            name: "completed_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 12,
            name: "is_draft",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "has_ref_overrides",
            kind: "scalar",
            T: 8
        },
        {
            no: 14,
            name: "requested_refs",
            kind: "message",
            T: PE,
            repeated: !0
        },
        {
            no: 15,
            name: "repo_commits",
            kind: "message",
            T: pIe,
            repeated: !0
        },
        {
            no: 16,
            name: "created_by_display",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "will_adopt_environment_settings_on_activate",
            kind: "scalar",
            T: 8
        },
        {
            no: 18,
            name: "source_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 19,
            name: "failure_code",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 20,
            name: "snapshot_reap_state",
            kind: "enum",
            T: c.getEnumType(o1e)
        }
    ]), BL = c.makeMessageType("aiserver.v1.EnvironmentBuildsCursor", ()=>[
        {
            no: 1,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "build_id",
            kind: "scalar",
            T: 9
        }
    ]), hIe = c.makeMessageType("aiserver.v1.ListEnvironmentBuildsRequest", ()=>[
        {
            no: 1,
            name: "environment_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cursor",
            kind: "message",
            T: BL,
            opt: !0
        }
    ]), gIe = c.makeMessageType("aiserver.v1.ListEnvironmentBuildsResponse", ()=>[
        {
            no: 1,
            name: "rows",
            kind: "message",
            T: fl,
            repeated: !0
        },
        {
            no: 2,
            name: "has_more",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "next_cursor",
            kind: "message",
            T: BL,
            opt: !0
        },
        {
            no: 4,
            name: "latest_boot_build_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), fIe = c.makeMessageType("aiserver.v1.GetEnvironmentActiveBuildRequest", ()=>[
        {
            no: 1,
            name: "environment_public_id",
            kind: "scalar",
            T: 9
        }
    ]), _Ie = c.makeMessageType("aiserver.v1.GetEnvironmentActiveBuildResponse", ()=>[
        {
            no: 1,
            name: "row",
            kind: "message",
            T: fl,
            opt: !0
        }
    ]), vIe = c.makeMessageType("aiserver.v1.GetEnvironmentPersistentRecurringBuildFailuresRequest", ()=>[
        {
            no: 1,
            name: "environment_public_id",
            kind: "scalar",
            T: 9
        }
    ]), TIe = c.makeMessageType("aiserver.v1.GetEnvironmentPersistentRecurringBuildFailuresResponse", ()=>[
        {
            no: 1,
            name: "failure",
            kind: "message",
            T: kIe,
            opt: !0
        }
    ]), kIe = c.makeMessageType("aiserver.v1.PersistentRecurringBuildFailure", ()=>[
        {
            no: 1,
            name: "consecutive_failed_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "first_failed_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "last_failed_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "latest_failed_build_id",
            kind: "scalar",
            T: 9
        }
    ]), SIe = c.makeMessageType("aiserver.v1.GetEnvironmentBuildRequest", ()=>[
        {
            no: 1,
            name: "build_id",
            kind: "scalar",
            T: 9
        }
    ]), yIe = c.makeMessageType("aiserver.v1.GetEnvironmentBuildResponse", ()=>[
        {
            no: 1,
            name: "row",
            kind: "message",
            T: fl
        }
    ]), wIe = c.makeMessageType("aiserver.v1.GetEnvironmentBuildConfigRequest", ()=>[
        {
            no: 1,
            name: "build_id",
            kind: "scalar",
            T: 9
        }
    ]), EIe = c.makeMessageType("aiserver.v1.GetEnvironmentBuildConfigResponse", ()=>[
        {
            no: 1,
            name: "environment_version",
            kind: "message",
            T: Oo,
            opt: !0
        }
    ]), bIe = c.makeMessageType("aiserver.v1.UpdateEnvironmentBuildRequest", ()=>[
        {
            no: 1,
            name: "build_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_draft",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), RIe = c.makeMessageType("aiserver.v1.UpdateEnvironmentBuildResponse", ()=>[
        {
            no: 1,
            name: "row",
            kind: "message",
            T: fl
        }
    ]), CIe = c.makeMessageType("aiserver.v1.TriggerEnvironmentBuildRequest", ()=>[
        {
            no: 1,
            name: "environment_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_draft",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "refs",
            kind: "message",
            T: PE,
            repeated: !0
        }
    ]), IIe = c.makeMessageType("aiserver.v1.TriggerEnvironmentBuildResponse", ()=>[
        {
            no: 1,
            name: "build_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "row",
            kind: "message",
            T: fl
        }
    ]), AIe = c.makeMessageType("aiserver.v1.AttachEnvironmentBuildLogRequest", ()=>[
        {
            no: 1,
            name: "build_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), MIe = c.makeMessageType("aiserver.v1.AttachEnvironmentBuildLogResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status",
            kind: "enum",
            T: c.getEnumType(uL)
        },
        {
            no: 4,
            name: "log_complete",
            kind: "scalar",
            T: 8
        }
    ]), PIe = c.makeMessageType("aiserver.v1.CancelEnvironmentBuildRequest", ()=>[
        {
            no: 1,
            name: "build_id",
            kind: "scalar",
            T: 9
        }
    ]), NIe = c.makeMessageType("aiserver.v1.CancelEnvironmentBuildResponse", ()=>[
        {
            no: 1,
            name: "row",
            kind: "message",
            T: fl
        }
    ]), GL = c.makeMessageType("aiserver.v1.EnvironmentBuildSettings", ()=>[
        {
            no: 1,
            name: "fast_forward_default_branch",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "auto_fast_forward_staleness_hours",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "builds_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), DIe = c.makeMessageType("aiserver.v1.GetEnvironmentBuildSettingsRequest", ()=>[
        {
            no: 1,
            name: "environment_public_id",
            kind: "scalar",
            T: 9
        }
    ]), OIe = c.makeMessageType("aiserver.v1.GetEnvironmentBuildSettingsResponse", ()=>[
        {
            no: 1,
            name: "settings",
            kind: "message",
            T: GL
        }
    ]), LIe = c.makeMessageType("aiserver.v1.UpdateEnvironmentBuildSettingsRequest", ()=>[
        {
            no: 1,
            name: "environment_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "fast_forward_default_branch",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "clear_fast_forward_default_branch",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "builds_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "clear_builds_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "auto_fast_forward_staleness_hours",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "clear_auto_fast_forward_staleness_hours",
            kind: "scalar",
            T: 8
        }
    ]), UIe = c.makeMessageType("aiserver.v1.UpdateEnvironmentBuildSettingsResponse", ()=>[
        {
            no: 1,
            name: "settings",
            kind: "message",
            T: GL
        }
    ]), xIe = c.makeMessageType("aiserver.v1.ResolveOrCreateMultiRepoEnvironmentRequest", ()=>[
        {
            no: 1,
            name: "user_id",
            kind: "scalar",
            T: 5,
            oneof: "owner_id"
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 5,
            oneof: "owner_id"
        },
        {
            no: 3,
            name: "service_account_id",
            kind: "scalar",
            T: 9,
            oneof: "owner_id"
        },
        {
            no: 4,
            name: "repo_config",
            kind: "message",
            T: vi
        },
        {
            no: 5,
            name: "write_source",
            kind: "enum",
            T: c.getEnumType(gl)
        },
        {
            no: 6,
            name: "reuse_policy",
            kind: "enum",
            T: c.getEnumType(c1e)
        }
    ]), FIe = c.makeMessageType("aiserver.v1.ResolveOrCreateMultiRepoEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: La
        },
        {
            no: 2,
            name: "created",
            kind: "scalar",
            T: 8
        }
    ]), WIe = c.makeMessageType("aiserver.v1.ResolveOrCreateDraftEnvironmentRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_scope",
            kind: "enum",
            T: c.getEnumType(Lf)
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo_config",
            kind: "message",
            T: vi,
            opt: !0
        }
    ]), BIe = c.makeMessageType("aiserver.v1.ResolveOrCreateDraftEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: La
        },
        {
            no: 2,
            name: "created",
            kind: "scalar",
            T: 8
        }
    ]), GIe = c.makeMessageType("aiserver.v1.RepoConfigSummary", ()=>[
        {
            no: 1,
            name: "repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "environment_json_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), VL = c.makeMessageType("aiserver.v1.EnvironmentVersionRestoreMetadata", ()=>[
        {
            no: 1,
            name: "restored_from_environment_version_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "restored_from_source_kind",
            kind: "enum",
            T: c.getEnumType(bE)
        },
        {
            no: 3,
            name: "restored_from_environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "restored_from_environment_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "restored_from_snapshot_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Oo = c.makeMessageType("aiserver.v1.EnvironmentVersionSummary", ()=>[
        {
            no: 1,
            name: "public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "source_kind",
            kind: "enum",
            T: c.getEnumType(bE)
        },
        {
            no: 3,
            name: "commit_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "repo_config",
            kind: "message",
            T: GIe,
            opt: !0
        },
        {
            no: 6,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 7,
            name: "environment_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "environment_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "snapshot_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "recorded_via",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "update_script",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "environment_json_effectively_empty",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "environment_json_restricted",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), VIe = c.makeMessageType("aiserver.v1.GetBackgroundComposerEnvironmentVersionRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), $Ie = c.makeMessageType("aiserver.v1.GetBackgroundComposerEnvironmentVersionResponse", ()=>[
        {
            no: 1,
            name: "environment_version_history",
            kind: "message",
            T: Oo,
            repeated: !0
        }
    ]), DE = c.makeMessageType("aiserver.v1.EnvironmentSetupRunLink", ()=>[
        {
            no: 1,
            name: "bc_id",
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
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "snapshot_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), jIe = c.makeMessageType("aiserver.v1.EnvironmentHistoryVersion", ()=>[
        {
            no: 1,
            name: "version",
            kind: "message",
            T: Oo
        },
        {
            no: 2,
            name: "setup_run",
            kind: "message",
            T: DE,
            opt: !0
        }
    ]), HIe = c.makeMessageType("aiserver.v1.EnvironmentHistoryLifecycleEvent", ()=>[
        {
            no: 1,
            name: "public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "event_kind",
            kind: "enum",
            T: c.getEnumType(mL)
        },
        {
            no: 3,
            name: "source_kind",
            kind: "enum",
            T: c.getEnumType(bE)
        },
        {
            no: 4,
            name: "recorded_via",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "version",
            kind: "message",
            T: Oo,
            opt: !0
        },
        {
            no: 7,
            name: "setup_run",
            kind: "message",
            T: DE,
            opt: !0
        },
        {
            no: 8,
            name: "restore_metadata",
            kind: "message",
            T: VL,
            opt: !0
        }
    ]), qIe = c.makeMessageType("aiserver.v1.EnvironmentHistoryObject", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: La
        },
        {
            no: 2,
            name: "versions",
            kind: "message",
            T: jIe,
            repeated: !0
        },
        {
            no: 3,
            name: "lifecycle_events",
            kind: "message",
            T: HIe,
            repeated: !0
        }
    ]), KIe = c.makeMessageType("aiserver.v1.EnvironmentEffectiveHistoryEvent", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "scope",
            kind: "enum",
            T: c.getEnumType(Lf)
        },
        {
            no: 4,
            name: "event_kind",
            kind: "enum",
            T: c.getEnumType(mL)
        },
        {
            no: 5,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "version",
            kind: "message",
            T: Oo,
            opt: !0
        },
        {
            no: 8,
            name: "fallback_version",
            kind: "message",
            T: Oo,
            opt: !0
        },
        {
            no: 9,
            name: "setup_run",
            kind: "message",
            T: DE,
            opt: !0
        },
        {
            no: 10,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "environment_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "restore_metadata",
            kind: "message",
            T: VL,
            opt: !0
        },
        {
            no: 13,
            name: "recorded_via",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), zIe = c.makeMessageType("aiserver.v1.GetEnvironmentHistoryRequest", ()=>[
        {
            no: 1,
            name: "repo_config",
            kind: "message",
            T: vi,
            opt: !0
        },
        {
            no: 2,
            name: "environment_public_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "dashboard_scope_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), YIe = c.makeMessageType("aiserver.v1.GetEnvironmentHistoryResponse", ()=>[
        {
            no: 1,
            name: "effective_events",
            kind: "message",
            T: KIe,
            repeated: !0
        },
        {
            no: 2,
            name: "environment_histories",
            kind: "message",
            T: qIe,
            repeated: !0
        },
        {
            no: 3,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "dashboard_scope_unavailable",
            kind: "scalar",
            T: 8
        }
    ]), JIe = c.makeMessageType("aiserver.v1.DeleteTeamEnvironmentRequest", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "write_source",
            kind: "enum",
            T: c.getEnumType(gl),
            opt: !0
        }
    ]), XIe = c.makeMessageType("aiserver.v1.DeleteTeamEnvironmentResponse", []), QIe = c.makeMessageType("aiserver.v1.RestoreEnvironmentVersionRequest", ()=>[
        {
            no: 1,
            name: "environment_version_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_scope",
            kind: "enum",
            T: c.getEnumType(Lf)
        },
        {
            no: 3,
            name: "target_environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "delete_personal_environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ZIe = c.makeMessageType("aiserver.v1.RestoreEnvironmentVersionResponse", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: La,
            opt: !0
        }
    ]), eAe = c.makeMessageType("aiserver.v1.SetTeamEnvironmentJsonRequest", ()=>[
        {
            no: 1,
            name: "environment_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "scm_repo_node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "git_enterprise_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "delete_personal_environment",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "write_source",
            kind: "enum",
            T: c.getEnumType(gl)
        },
        {
            no: 7,
            name: "source_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "environment_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "repo_config",
            kind: "message",
            T: vi,
            opt: !0
        },
        {
            no: 10,
            name: "environment_id",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 11,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "delete_personal_environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "create_only",
            kind: "scalar",
            T: 8
        }
    ]), tAe = c.makeMessageType("aiserver.v1.SetTeamEnvironmentJsonResponse", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: La,
            opt: !0
        },
        {
            no: 2,
            name: "live_egress_reapply",
            kind: "message",
            T: WL,
            opt: !0
        },
        {
            no: 3,
            name: "created",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), nAe = c.makeMessageType("aiserver.v1.SnapshotAndSaveEnvironmentRequest", ()=>[
        {
            no: 1,
            name: "target",
            kind: "enum",
            T: c.getEnumType(rAe)
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "install_command",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "existing_snapshot_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "scm_repo_node_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "git_enterprise_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "environment_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "repo_config",
            kind: "message",
            T: vi,
            opt: !0
        },
        {
            no: 10,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "egress_config",
            kind: "message",
            T: sAe,
            opt: !0
        },
        {
            no: 12,
            name: "start_command",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "environment_build_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), rAe = c.makeEnum("aiserver.v1.SnapshotAndSaveEnvironmentRequest.Target", [
    {
        no: 0,
        name: "TARGET_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TARGET_PERSONAL",
        localName: "PERSONAL"
    },
    {
        no: 2,
        name: "TARGET_TEAM",
        localName: "TEAM"
    }
]), sAe = c.makeMessageType("aiserver.v1.SnapshotAndSaveEnvironmentRequest.EgressConfig", ()=>[
        {
            no: 1,
            name: "mode",
            kind: "enum",
            T: c.getEnumType(fw)
        },
        {
            no: 2,
            name: "allowlist",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "SnapshotAndSaveEnvironmentRequest_EgressConfig"
}), iAe = c.makeMessageType("aiserver.v1.SnapshotAndSaveEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        }
    ]), aAe = c.makeMessageType("aiserver.v1.ListReposWithLocalEnvironmentRequest", []), oAe = c.makeMessageType("aiserver.v1.RepoWithLocalEnvironment", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_exists",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "last_seen_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), cAe = c.makeMessageType("aiserver.v1.ListReposWithLocalEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "message",
            T: oAe,
            repeated: !0
        }
    ]), lAe = c.makeMessageType("aiserver.v1.MarkBackgroundComposerReadRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), dAe = c.makeMessageType("aiserver.v1.MarkBackgroundComposerReadResponse", []), uAe = c.makeMessageType("aiserver.v1.MarkBackgroundComposerUnreadRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), mAe = c.makeMessageType("aiserver.v1.MarkBackgroundComposerUnreadResponse", []), pAe = c.makeMessageType("aiserver.v1.AdvanceBackgroundComposerReadCursorRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "read_up_to_ms",
            kind: "scalar",
            T: 3
        }
    ]), hAe = c.makeMessageType("aiserver.v1.AdvanceBackgroundComposerReadCursorResponse", []), gAe = c.makeMessageType("aiserver.v1.FetchBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), fAe = c.makeMessageType("aiserver.v1.FetchBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "responses",
            kind: "message",
            T: OL,
            repeated: !0
        },
        {
            no: 2,
            name: "total_responses",
            kind: "scalar",
            T: 5
        }
    ]), _Ae = c.makeMessageType("aiserver.v1.GetTurnSummaryBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "source_type",
            kind: "enum",
            T: c.getEnumType(ke),
            opt: !0
        }
    ]), vAe = c.makeMessageType("aiserver.v1.GetTurnSummaryBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), TAe = c.makeMessageType("aiserver.v1.GetBackgroundComposerNameRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), kAe = c.makeMessageType("aiserver.v1.GetBackgroundComposerNameResponse", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), SAe = c.makeMessageType("aiserver.v1.GetBackgroundComposerPromptRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), yAe = c.makeMessageType("aiserver.v1.GetBackgroundComposerPromptResponse", ()=>[
        {
            no: 1,
            name: "prompt",
            kind: "message",
            T: Ji
        }
    ]), wAe = c.makeMessageType("aiserver.v1.ListBackgroundComposerArtifactsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), EAe = c.makeMessageType("aiserver.v1.BackgroundComposerArtifact", ()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "updated_at_unix_ms",
            kind: "scalar",
            T: 3
        }
    ]), bAe = c.makeMessageType("aiserver.v1.ListBackgroundComposerArtifactsResponse", ()=>[
        {
            no: 1,
            name: "artifacts",
            kind: "message",
            T: EAe,
            repeated: !0
        }
    ]), RAe = c.makeMessageType("aiserver.v1.GetBackgroundComposerArtifactRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        }
    ]), CAe = c.makeMessageType("aiserver.v1.GetBackgroundComposerArtifactResponse", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expires_at",
            kind: "scalar",
            T: 9
        }
    ]), IAe = c.makeMessageType("aiserver.v1.GetBackgroundComposerArtifactBytesRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        }
    ]), AAe = c.makeMessageType("aiserver.v1.GetBackgroundComposerArtifactBytesResponse", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "content_type",
            kind: "scalar",
            T: 9
        }
    ]), MAe = c.makeMessageType("aiserver.v1.ReadBinaryFileRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), PAe = c.makeMessageType("aiserver.v1.ReadBinaryFileResponse", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 12
        }
    ]), NAe = c.makeMessageType("aiserver.v1.StreamBackgroundComposerArtifactRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        }
    ]), DAe = c.makeMessageType("aiserver.v1.StreamBackgroundComposerArtifactResponse", ()=>[
        {
            no: 1,
            name: "content_chunk",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "content_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "total_size",
            kind: "scalar",
            T: 3
        }
    ]), OE = c.makeMessageType("aiserver.v1.BackgroundComposerSharedArtifact", ()=>[
        {
            no: 1,
            name: "artifact_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "source_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source_absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "public_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "content_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "share_source",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "revoked_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 9,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 10,
            name: "updated_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), OAe = c.makeMessageType("aiserver.v1.ListSharedBackgroundComposerArtifactsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), LAe = c.makeMessageType("aiserver.v1.ListSharedBackgroundComposerArtifactsResponse", ()=>[
        {
            no: 1,
            name: "artifacts",
            kind: "message",
            T: OE,
            repeated: !0
        }
    ]), UAe = c.makeMessageType("aiserver.v1.ShareBackgroundComposerArtifactRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xAe = c.makeMessageType("aiserver.v1.ShareBackgroundComposerArtifactResponse", ()=>[
        {
            no: 1,
            name: "artifact",
            kind: "message",
            T: OE
        }
    ]), FAe = c.makeMessageType("aiserver.v1.UnshareBackgroundComposerArtifactRequest", ()=>[
        {
            no: 1,
            name: "artifact_id",
            kind: "scalar",
            T: 9
        }
    ]), WAe = c.makeMessageType("aiserver.v1.UnshareBackgroundComposerArtifactResponse", ()=>[
        {
            no: 1,
            name: "artifact",
            kind: "message",
            T: OE,
            opt: !0
        }
    ]), BAe = c.makeMessageType("aiserver.v1.GetPublicBackgroundComposerArtifactRequest", ()=>[
        {
            no: 1,
            name: "artifact_id",
            kind: "scalar",
            T: 9
        }
    ]), GAe = c.makeMessageType("aiserver.v1.GetPublicBackgroundComposerArtifactResponse", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), $L = c.makeMessageType("aiserver.v1.BackgroundComposerUserEgressPolicy", ()=>[
        {
            no: 1,
            name: "allowlist",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), VAe = c.makeMessageType("aiserver.v1.BackgroundComposerQuickActionSubagentSlot", ()=>[
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
            name: "template_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "order",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "execution_mode",
            kind: "enum",
            T: c.getEnumType(l1e)
        }
    ]), jL = c.makeMessageType("aiserver.v1.BackgroundComposerQuickActionSubagentTemplate", ()=>[
        {
            no: 1,
            name: "template_id",
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
            T: 9
        },
        {
            no: 4,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "scope",
            kind: "enum",
            T: c.getEnumType(d1e)
        },
        {
            no: 7,
            name: "can_edit",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "can_delete",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "icon_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), $Ae = c.makeMessageType("aiserver.v1.BackgroundComposerQuickActionSubagentTemplateMutation", ()=>[
        {
            no: 1,
            name: "operation",
            kind: "enum",
            T: c.getEnumType(u1e)
        },
        {
            no: 2,
            name: "template",
            kind: "message",
            T: jL
        }
    ]), HL = c.makeMessageType("aiserver.v1.BackgroundComposerQuickActionSettings", ()=>[
        {
            no: 1,
            name: "quick_action_subagent_slots",
            kind: "message",
            T: VAe,
            repeated: !0
        },
        {
            no: 2,
            name: "quick_action_subagent_slots_explicitly_set",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "quick_action_subagent_catalog_version",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 4,
            name: "quick_action_subagent_templates",
            kind: "message",
            T: jL,
            repeated: !0
        },
        {
            no: 5,
            name: "quick_action_subagent_template_mutations",
            kind: "message",
            T: $Ae,
            repeated: !0
        }
    ]), qL = c.makeMessageType("aiserver.v1.BackgroundComposerDefaultEnvironmentSetting", ()=>[
        {
            no: 1,
            name: "repo_config",
            kind: "message",
            T: vi,
            opt: !0
        },
        {
            no: 2,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), jAe = c.makeMessageType("aiserver.v1.UpdateBackgroundComposerUserSettingsRequest", ()=>[
        {
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "slack_notifications_for_web_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "ci_failure_followup_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "browser_use_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "auto_create_pr_setting",
            kind: "enum",
            T: c.getEnumType(pL),
            opt: !0
        },
        {
            no: 6,
            name: "pr_review_open_destination",
            kind: "enum",
            T: c.getEnumType(wD),
            opt: !0
        },
        {
            no: 7,
            name: "github_artifact_posting",
            kind: "enum",
            T: c.getEnumType(bD),
            opt: !0
        },
        {
            no: 8,
            name: "egress_protection_mode",
            kind: "enum",
            T: c.getEnumType(fw),
            opt: !0
        },
        {
            no: 9,
            name: "egress_policy",
            kind: "message",
            T: $L,
            opt: !0
        },
        {
            no: 10,
            name: "branch_prefix",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "quick_action_settings",
            kind: "message",
            T: HL,
            opt: !0
        },
        {
            no: 12,
            name: "allow_private_workers",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "default_environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "default_environment_settings",
            kind: "message",
            T: qL,
            repeated: !0
        },
        {
            no: 16,
            name: "remote_control_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 17,
            name: "pr_review_open_surface",
            kind: "enum",
            T: c.getEnumType(ED),
            opt: !0
        },
        {
            no: 18,
            name: "sidebar_named_agent_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 19,
            name: "sidebar_named_agent_ids_explicitly_set",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 20,
            name: "default_model_selection",
            kind: "message",
            T: wP,
            opt: !0
        },
        {
            no: 21,
            name: "ask_question_auto_answer_timeout_minutes",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 22,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), HAe = c.makeMessageType("aiserver.v1.UpdateBackgroundComposerUserSettingsResponse", []), qAe = c.makeMessageType("aiserver.v1.GetBackgroundComposerUserSettingsRequest", ()=>[
        {
            no: 1,
            name: "expected_scope",
            kind: "message",
            T: An
        }
    ]), KAe = c.makeMessageType("aiserver.v1.GetBackgroundComposerUserSettingsResponse", ()=>[
        {
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "slack_notifications_for_web_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "ci_failure_followup_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "browser_use_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "auto_create_pr_setting",
            kind: "enum",
            T: c.getEnumType(pL),
            opt: !0
        },
        {
            no: 6,
            name: "pr_review_open_destination",
            kind: "enum",
            T: c.getEnumType(wD),
            opt: !0
        },
        {
            no: 7,
            name: "github_artifact_posting",
            kind: "enum",
            T: c.getEnumType(bD),
            opt: !0
        },
        {
            no: 8,
            name: "egress_protection_mode",
            kind: "enum",
            T: c.getEnumType(fw),
            opt: !0
        },
        {
            no: 9,
            name: "egress_policy",
            kind: "message",
            T: $L,
            opt: !0
        },
        {
            no: 10,
            name: "branch_prefix",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "quick_action_settings",
            kind: "message",
            T: HL,
            opt: !0
        },
        {
            no: 12,
            name: "allow_private_workers",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "default_environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "default_environment_settings",
            kind: "message",
            T: qL,
            repeated: !0
        },
        {
            no: 15,
            name: "remote_control_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 16,
            name: "pr_review_open_surface",
            kind: "enum",
            T: c.getEnumType(ED),
            opt: !0
        },
        {
            no: 17,
            name: "sidebar_named_agent_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 18,
            name: "default_model_selection",
            kind: "message",
            T: wP,
            opt: !0
        },
        {
            no: 19,
            name: "ask_question_auto_answer_timeout_minutes",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 22,
            name: "max_multi_repo_environment_repos",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), zAe = c.makeMessageType("aiserver.v1.GetRepositoryBranchesRequest", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "page",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "query",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "only_user_branches",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), YAe = c.makeMessageType("aiserver.v1.GetRepositoryBranchesResponse", ()=>[
        {
            no: 1,
            name: "branches",
            kind: "message",
            T: JAe,
            repeated: !0
        },
        {
            no: 2,
            name: "has_more",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "page",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "is_empty_repo",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "bootstrap_branch",
            kind: "scalar",
            T: 9
        }
    ]), JAe = c.makeMessageType("aiserver.v1.GetRepositoryBranchesResponse.Branch", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_default",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "GetRepositoryBranchesResponse_Branch"
}), XAe = c.makeMessageType("aiserver.v1.GetRepositoryDefaultBranchRequest", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), QAe = c.makeMessageType("aiserver.v1.GetRepositoryDefaultBranchResponse", ()=>[
        {
            no: 1,
            name: "default_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_empty_repo",
            kind: "scalar",
            T: 8
        }
    ]), ZAe = c.makeMessageType("aiserver.v1.GetPullRequestMergeStatusRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "include_behind_count",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), eMe = c.makeMessageType("aiserver.v1.GetPullRequestMergeStatusResponse", ()=>[
        {
            no: 1,
            name: "is_merged",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "is_closed",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "mergeable_state",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "state",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_draft",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "base_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "behind_by",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "can_update_branch",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "is_auto_merge_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "viewer_can_enable_auto_merge",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), tMe = c.makeMessageType("aiserver.v1.GetDetailedPullRequestStatusRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cache_expiration_seconds",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), nMe = c.makeMessageType("aiserver.v1.PRDeploymentPreviewStatus", ()=>[
        {
            no: 1,
            name: "environment_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "log_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "state",
            kind: "enum",
            T: c.getEnumType(p1e)
        }
    ]), rMe = c.makeMessageType("aiserver.v1.PRDeploymentPreview", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "state",
            kind: "enum",
            T: c.getEnumType(m1e)
        },
        {
            no: 3,
            name: "latest_status",
            kind: "message",
            T: nMe
        }
    ]), KL = c.makeMessageType("aiserver.v1.GetDetailedPullRequestStatusResponse", ()=>[
        {
            no: 1,
            name: "is_merged",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "is_closed",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "mergeable_state",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "state",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_draft",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "base_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "behind_by",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "can_update_branch",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "check_status",
            kind: "message",
            T: aL,
            opt: !0
        },
        {
            no: 11,
            name: "review_decision",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "is_auto_merge_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "base_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "viewer_can_enable_auto_merge",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 16,
            name: "deployment_previews",
            kind: "message",
            T: rMe,
            repeated: !0
        },
        {
            no: 17,
            name: "additions",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 18,
            name: "deletions",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 19,
            name: "commit_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 20,
            name: "review_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 21,
            name: "reviewers",
            kind: "message",
            T: sMe,
            repeated: !0
        },
        {
            no: 22,
            name: "requested_reviewers",
            kind: "message",
            T: iMe,
            repeated: !0
        },
        {
            no: 23,
            name: "requires_merge_queue",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 24,
            name: "is_in_merge_queue",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 26,
            name: "mergeability_verdict",
            kind: "message",
            T: Iwe,
            opt: !0
        }
    ]), sMe = c.makeMessageType("aiserver.v1.PRReviewSummary", ()=>[
        {
            no: 1,
            name: "author_login",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "author_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "author_avatar_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "state",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), iMe = c.makeMessageType("aiserver.v1.PRRequestedReviewer", ()=>[
        {
            no: 1,
            name: "login",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "avatar_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "kind",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), aMe = c.makeMessageType("aiserver.v1.CheckPullRequestMergeabilityRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), oMe = c.makeMessageType("aiserver.v1.CheckPullRequestMergeabilityResponse", ()=>[
        {
            no: 1,
            name: "can_merge",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "mergeable_state",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), cMe = c.makeMessageType("aiserver.v1.PRReviewComment", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "author_login",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "avatar_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "created_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "diff_hunk",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "body_html",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "author_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), LE = c.makeMessageType("aiserver.v1.PRReviewThread", ()=>[
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
        },
        {
            no: 3,
            name: "line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "original_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "original_start_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "diff_side",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "is_resolved",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "is_outdated",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "comments",
            kind: "message",
            T: cMe,
            repeated: !0
        },
        {
            no: 11,
            name: "pull_request_review_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), lMe = c.makeMessageType("aiserver.v1.PRTopLevelComment", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "author_login",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "avatar_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "created_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "body_html",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "author_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), UE = c.makeMessageType("aiserver.v1.PRCommitUser", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "avatar_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), dMe = c.makeMessageType("aiserver.v1.PRCommit", ()=>[
        {
            no: 1,
            name: "sha",
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
            name: "committed_date",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "additions",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "deletions",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "changed_files",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "author",
            kind: "message",
            T: UE
        },
        {
            no: 8,
            name: "committer",
            kind: "message",
            T: UE
        },
        {
            no: 9,
            name: "authors",
            kind: "message",
            T: UE,
            repeated: !0
        }
    ]), uMe = c.makeMessageType("aiserver.v1.GetPullRequestDiscussionsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "skip_cache",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), mMe = c.makeMessageType("aiserver.v1.GetPullRequestDiscussionsResponse", ()=>[
        {
            no: 1,
            name: "threads",
            kind: "message",
            T: LE,
            repeated: !0
        },
        {
            no: 2,
            name: "top_level_comments",
            kind: "message",
            T: lMe,
            repeated: !0
        },
        {
            no: 3,
            name: "check_status",
            kind: "message",
            T: aL,
            opt: !0
        }
    ]), pMe = c.makeMessageType("aiserver.v1.GetPullRequestCommitsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "after_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), hMe = c.makeMessageType("aiserver.v1.GetPullRequestCommitsResponse", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: dMe,
            repeated: !0
        },
        {
            no: 2,
            name: "has_next_page",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "end_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), gMe = c.makeMessageType("aiserver.v1.GetPullRequestTimelineEventsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "page",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), fMe = c.makeMessageType("aiserver.v1.GetPullRequestTimelineEventsResponse", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: _Me,
            repeated: !0
        },
        {
            no: 2,
            name: "has_next_page",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "next_page",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), _Me = c.makeMessageType("aiserver.v1.PRTimelineEvent", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "event_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "created_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "actor",
            kind: "message",
            T: vMe,
            opt: !0
        },
        {
            no: 5,
            name: "label",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "body",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), vMe = c.makeMessageType("aiserver.v1.PRTimelineActor", ()=>[
        {
            no: 1,
            name: "login",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "avatar_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), TMe = c.makeMessageType("aiserver.v1.ReplyToReviewThreadRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "thread_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9
        }
    ]), kMe = c.makeMessageType("aiserver.v1.ReplyToReviewThreadResponse", ()=>[
        {
            no: 1,
            name: "thread",
            kind: "message",
            T: LE,
            opt: !0
        }
    ]), SMe = c.makeMessageType("aiserver.v1.ResolveReviewThreadRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "thread_id",
            kind: "scalar",
            T: 9
        }
    ]), yMe = c.makeMessageType("aiserver.v1.ResolveReviewThreadResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), wMe = c.makeMessageType("aiserver.v1.UnresolveReviewThreadRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "thread_id",
            kind: "scalar",
            T: 9
        }
    ]), EMe = c.makeMessageType("aiserver.v1.UnresolveReviewThreadResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), bMe = c.makeMessageType("aiserver.v1.DeletePullRequestReviewCommentRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "comment_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "comment_kind",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), RMe = c.makeMessageType("aiserver.v1.DeletePullRequestReviewCommentResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), CMe = c.makeMessageType("aiserver.v1.AddPullRequestReviewCommentRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "line",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "diff_side",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "commit_oid",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), IMe = c.makeMessageType("aiserver.v1.AddPullRequestReviewCommentResponse", ()=>[
        {
            no: 1,
            name: "thread",
            kind: "message",
            T: LE,
            opt: !0
        }
    ]), AMe = c.makeMessageType("aiserver.v1.MergePullRequestRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "merge_method",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "use_merge_queue",
            kind: "scalar",
            T: 8
        }
    ]), MMe = c.makeMessageType("aiserver.v1.MergePullRequestResponse", ()=>[
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
            T: 9
        },
        {
            no: 3,
            name: "pr_node_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "was_enqueued",
            kind: "scalar",
            T: 8
        }
    ]), PMe = c.makeMessageType("aiserver.v1.EnablePullRequestAutoMergeRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "merge_method",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), NMe = c.makeMessageType("aiserver.v1.EnablePullRequestAutoMergeResponse", ()=>[
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
            T: 9
        },
        {
            no: 3,
            name: "pr_node_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), DMe = c.makeMessageType("aiserver.v1.DisablePullRequestAutoMergeRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), OMe = c.makeMessageType("aiserver.v1.DisablePullRequestAutoMergeResponse", ()=>[
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
            T: 9
        },
        {
            no: 3,
            name: "pr_node_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), LMe = c.makeMessageType("aiserver.v1.EnvironmentPort", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "port",
            kind: "scalar",
            T: 5
        }
    ]), UMe = c.makeMessageType("aiserver.v1.RegisterPushNotificationTokenRequest", ()=>[
        {
            no: 1,
            name: "token",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "platform",
            kind: "enum",
            T: c.getEnumType(Uf)
        },
        {
            no: 3,
            name: "device_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "bundle_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xMe = c.makeMessageType("aiserver.v1.RegisterPushNotificationTokenResponse", []), FMe = c.makeMessageType("aiserver.v1.DeletePushNotificationTokenRequest", ()=>[
        {
            no: 1,
            name: "device_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "platform",
            kind: "enum",
            T: c.getEnumType(Uf)
        }
    ]), WMe = c.makeMessageType("aiserver.v1.DeletePushNotificationTokenResponse", []), BMe = c.makeMessageType("aiserver.v1.ResolveOriginAgentApprovalRequest", ()=>[
        {
            no: 1,
            name: "approval_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "resolution",
            kind: "enum",
            T: c.getEnumType(h1e)
        }
    ]), GMe = c.makeMessageType("aiserver.v1.ResolveOriginAgentApprovalResponse", ()=>[
        {
            no: 1,
            name: "accepted",
            kind: "scalar",
            T: 8
        }
    ]), VMe = c.makeMessageType("aiserver.v1.GetOriginAgentApprovalRequest", ()=>[
        {
            no: 1,
            name: "approval_id",
            kind: "scalar",
            T: 9
        }
    ]), $Me = c.makeMessageType("aiserver.v1.GetOriginAgentApprovalResponse", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "approval",
            kind: "message",
            T: TL,
            opt: !0
        }
    ]), jMe = c.makeMessageType("aiserver.v1.LiveActivityAgentEntry", ()=>[
        {
            no: 1,
            name: "bc_id",
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
            name: "status",
            kind: "enum",
            T: c.getEnumType(Tr)
        },
        {
            no: 4,
            name: "started_at_epoch_seconds",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "repo_label",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "finished_at_epoch_seconds",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 8,
            name: "result_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "lines_added",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "lines_removed",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 11,
            name: "changed_files",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 12,
            name: "project_started_at_epoch_seconds",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), HMe = c.makeMessageType("aiserver.v1.LiveActivityContentState", ()=>[
        {
            no: 1,
            name: "agents",
            kind: "message",
            T: jMe,
            repeated: !0
        }
    ]), qMe = c.makeMessageType("aiserver.v1.SyncLiveActivityRequest", ()=>[
        {
            no: 1,
            name: "device_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "platform",
            kind: "enum",
            T: c.getEnumType(Uf)
        },
        {
            no: 3,
            name: "activity_push_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "content_state",
            kind: "message",
            T: HMe
        },
        {
            no: 5,
            name: "state_version",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "bundle_id",
            kind: "scalar",
            T: 9
        }
    ]), KMe = c.makeMessageType("aiserver.v1.SyncLiveActivityResponse", []), zMe = c.makeMessageType("aiserver.v1.DeleteLiveActivityRequest", ()=>[
        {
            no: 1,
            name: "device_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "platform",
            kind: "enum",
            T: c.getEnumType(Uf)
        }
    ]), YMe = c.makeMessageType("aiserver.v1.DeleteLiveActivityResponse", []), JMe = c.makeMessageType("aiserver.v1.VerifyBackgroundComposerAccessRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "access_type",
            kind: "scalar",
            T: 9
        }
    ]), XMe = c.makeMessageType("aiserver.v1.VerifyBackgroundComposerAccessResponse", ()=>[
        {
            no: 1,
            name: "has_access",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "denial_reason",
            kind: "enum",
            T: c.getEnumType(g1e)
        }
    ]), QMe = c.makeMessageType("aiserver.v1.ConvertPullRequestFromDraftRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ZMe = c.makeMessageType("aiserver.v1.ConvertPullRequestFromDraftResponse", ()=>[
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
            T: 9
        }
    ]), ePe = c.makeMessageType("aiserver.v1.UpdatePullRequestBranchRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), tPe = c.makeMessageType("aiserver.v1.UpdatePullRequestBranchResponse", ()=>[
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
            T: 9
        },
        {
            no: 3,
            name: "new_head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xE = c.makeMessageType("aiserver.v1.CloudAgentState", ()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: Bg
        },
        {
            no: 2,
            name: "num_prior_interaction_updates",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "pr_body",
            kind: "scalar",
            T: 12
        },
        {
            no: 4,
            name: "summary",
            kind: "scalar",
            T: 12
        },
        {
            no: 5,
            name: "branch_name",
            kind: "scalar",
            T: 12
        },
        {
            no: 6,
            name: "pr_url",
            kind: "scalar",
            T: 12
        },
        {
            no: 8,
            name: "agent_name",
            kind: "scalar",
            T: 12
        },
        {
            no: 7,
            name: "last_interaction_update_offset_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "starting_commit",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "config",
            kind: "scalar",
            T: 12
        },
        {
            no: 12,
            name: "local_state_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "original_prompt_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 14,
            name: "repository_info_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 15,
            name: "original_conversation_action_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 16,
            name: "video_annotations_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 17,
            name: "last_user_turn_commit",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "last_followup_source",
            kind: "enum",
            T: c.getEnumType(ke),
            opt: !0
        },
        {
            no: 19,
            name: "continue_rebase",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 20,
            name: "turn_start_todo_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 21,
            name: "original_request_start_unix_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 22,
            name: "initial_turn_latency_reported",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 23,
            name: "agent_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 24,
            name: "kickoff_message_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 25,
            name: "grind_mode_config",
            kind: "message",
            T: NL,
            opt: !0
        },
        {
            no: 26,
            name: "commits",
            kind: "message",
            T: mPe,
            repeated: !0
        },
        {
            no: 27,
            name: "commit_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 28,
            name: "user_facing_error_details",
            kind: "message",
            T: lPe,
            opt: !0
        },
        {
            no: 29,
            name: "initial_source",
            kind: "enum",
            T: c.getEnumType(ke),
            opt: !0
        },
        {
            no: 30,
            name: "num_completed_turns",
            kind: "scalar",
            T: 13
        },
        {
            no: 31,
            name: "synthesis_subagent_config",
            kind: "message",
            T: aPe,
            opt: !0
        },
        {
            no: 32,
            name: "start_request_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 33,
            name: "commit_reminder_state_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 34,
            name: "grind_mode_tracking_state_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 35,
            name: "workflow_control_state_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 36,
            name: "worker_creations",
            kind: "message",
            T: iPe,
            repeated: !0
        },
        {
            no: 37,
            name: "is_time_limit_expired",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 38,
            name: "resolved_egress_policy_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 39,
            name: "optimized_diff",
            kind: "message",
            T: zL,
            opt: !0
        },
        {
            no: 40,
            name: "pending_pr_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 41,
            name: "is_pod_finalized",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 42,
            name: "next_turn_system_reminders_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 43,
            name: "cloud_plugin_manifest_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 44,
            name: "per_branch_optimized_diffs",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: zL
            }
        },
        {
            no: 45,
            name: "startup_warnings",
            kind: "message",
            T: YL,
            repeated: !0
        },
        {
            no: 46,
            name: "private_workspace_identifier",
            kind: "message",
            T: Wf,
            opt: !0
        },
        {
            no: 49,
            name: "conversation_rewind_epoch",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 50,
            name: "pending_summarization_state_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 51,
            name: "pending_summarization_snapshot_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 52,
            name: "admitted_custom_mode_state_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 53,
            name: "agent_store_artifacts_symlink_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 54,
            name: "project_details",
            kind: "message",
            T: dw,
            opt: !0
        },
        {
            no: 55,
            name: "uses_coordinator_membership",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 56,
            name: "suggested_repo_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 57,
            name: "resolved_environment_mcp_server_allowlist",
            kind: "message",
            T: rPe,
            opt: !0
        },
        {
            no: 58,
            name: "new_project_seeded_empty_root",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 59,
            name: "manager_spawn_kind",
            kind: "enum",
            T: c.getEnumType(Df),
            opt: !0
        },
        {
            no: 60,
            name: "carried_request_context",
            kind: "message",
            T: nPe,
            opt: !0
        },
        {
            no: 61,
            name: "voice_calls_blob_id",
            kind: "scalar",
            T: 12
        }
    ]), nPe = c.makeMessageType("aiserver.v1.CarriedRequestContext", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "pod_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "captured_at_unix_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 5,
            name: "source",
            kind: "enum",
            T: c.getEnumType(_1e),
            opt: !0
        },
        {
            no: 6,
            name: "was_complete",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "conversation_rewind_epoch",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 8,
            name: "team_owned_hook_steps",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 9,
            name: "mcp_correction_streak",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), rPe = c.makeMessageType("aiserver.v1.EnvironmentMcpServerAllowlist", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: sPe,
            repeated: !0
        },
        {
            no: 2,
            name: "disable_all_mcp_servers",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), sPe = c.makeMessageType("aiserver.v1.EnvironmentMcpServerAllowlist.Entry", ()=>[
        {
            no: 1,
            name: "server_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "command",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "tool_allowlist",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "EnvironmentMcpServerAllowlist_Entry"
}), zL = c.makeMessageType("aiserver.v1.OptimizedDiffState", ()=>[
        {
            no: 1,
            name: "pending",
            kind: "message",
            T: Hr,
            oneof: "state"
        },
        {
            no: 2,
            name: "diff_blob_id",
            kind: "scalar",
            T: 12,
            oneof: "state"
        },
        {
            no: 3,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), iPe = c.makeMessageType("aiserver.v1.WorkerCreation", ()=>[
        {
            no: 1,
            name: "worker_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "created_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "num_completed_turns",
            kind: "scalar",
            T: 13
        }
    ]), aPe = c.makeMessageType("aiserver.v1.SynthesisSubagentConfig", ()=>[
        {
            no: 1,
            name: "additional_model_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "original_user_prompt_blob_id",
            kind: "scalar",
            T: 12
        }
    ]), oPe = c.makeMessageType("aiserver.v1.TransientError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), cPe = c.makeMessageType("aiserver.v1.OpenInteractionSettlement", ()=>[
        {
            no: 1,
            name: "interaction_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "answered",
            kind: "message",
            T: gu,
            opt: !0
        },
        {
            no: 3,
            name: "skipped_question_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), lPe = c.makeMessageType("aiserver.v1.CloudAgentErrorDetails", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error_code",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "dev_only_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "error_details",
            kind: "message",
            T: cu,
            opt: !0
        }
    ]), YL = c.makeMessageType("aiserver.v1.CloudAgentStartupWarning", ()=>[
        {
            no: 1,
            name: "warning_type",
            kind: "enum",
            T: c.getEnumType(v1e)
        },
        {
            no: 2,
            name: "user_facing_message",
            kind: "scalar",
            T: 9
        }
    ]), dPe = c.makeMessageType("aiserver.v1.GetBackgroundComposerVmUsageRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), uPe = c.makeMessageType("aiserver.v1.GetBackgroundComposerVmUsageResponse", ()=>[
        {
            no: 1,
            name: "total_duration_ms",
            kind: "scalar",
            T: 3
        }
    ]), mPe = c.makeMessageType("aiserver.v1.BackgroundComposerCommit", ()=>[
        {
            no: 1,
            name: "sha",
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
            name: "author_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "author_email",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "timestamp",
            kind: "scalar",
            T: 9
        }
    ]), pPe = c.makeMessageType("aiserver.v1.GetCloudAgentDebugDetailsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_blob_id",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 3,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            opt: !0
        }
    ]), hPe = c.makeMessageType("aiserver.v1.CloudAgentVmHistory", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: gPe,
            repeated: !0
        }
    ]), gPe = c.makeMessageType("aiserver.v1.CloudAgentVmHistoryEntry", ()=>[
        {
            no: 1,
            name: "worker_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "is_current_worker",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "environment_version_id",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 4,
            name: "replaced_at_unix_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 5,
            name: "anyrun",
            kind: "message",
            T: fPe,
            oneof: "info"
        },
        {
            no: 6,
            name: "anyrun_pending_docker_build",
            kind: "message",
            T: _Pe,
            oneof: "info"
        }
    ]), fPe = c.makeMessageType("aiserver.v1.CloudAgentAnyrunVmInfo", ()=>[
        {
            no: 1,
            name: "tenant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pod_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "anyrun_cluster",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "docker_build_events_redis_stream_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "setup_events_redis_stream_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "prewarm_workflow_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "environment_build_boot_info",
            kind: "message",
            T: j9,
            opt: !0
        }
    ]), _Pe = c.makeMessageType("aiserver.v1.CloudAgentAnyrunPendingDockerBuildVmInfo", ()=>[
        {
            no: 1,
            name: "anyrun_cluster",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "docker_build_events_redis_stream_key",
            kind: "scalar",
            T: 9
        }
    ]), vPe = c.makeMessageType("aiserver.v1.GetCloudAgentDebugDetailsResponse", ()=>[
        {
            no: 1,
            name: "cloud_agent_state_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "cloud_agent_state",
            kind: "message",
            T: xE
        },
        {
            no: 3,
            name: "stream_messages",
            kind: "message",
            T: DL,
            repeated: !0
        },
        {
            no: 4,
            name: "pre_fetched_blobs",
            kind: "message",
            T: Do,
            repeated: !0
        },
        {
            no: 5,
            name: "vm_history",
            kind: "message",
            T: hPe
        }
    ]), TPe = c.makeMessageType("aiserver.v1.ProvisionSyntheticsServiceAccountsRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "name_prefix",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "pool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "created_by",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "provision_origin_repos",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "origin_namespace",
            kind: "scalar",
            T: 9
        }
    ]), kPe = c.makeMessageType("aiserver.v1.ProvisionedSyntheticsIdentity", ()=>[
        {
            no: 1,
            name: "identity_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "service_account_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "service_account_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "masked_api_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "repo_ref",
            kind: "scalar",
            T: 9
        }
    ]), SPe = c.makeMessageType("aiserver.v1.ProvisionSyntheticsServiceAccountsResponse", ()=>[
        {
            no: 1,
            name: "identities",
            kind: "message",
            T: kPe,
            repeated: !0
        },
        {
            no: 2,
            name: "pool_id",
            kind: "scalar",
            T: 9
        }
    ]), yPe = c.makeMessageType("aiserver.v1.CloudAgentSyntheticsScenarioInput", ()=>[
        {
            no: 1,
            name: "name",
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
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "repo_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "canary",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "max_duration_sec",
            kind: "scalar",
            T: 13
        }
    ]), wPe = c.makeMessageType("aiserver.v1.StartCloudAgentLoadTestRequest", ()=>[
        {
            no: 1,
            name: "scenario_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "custom_scenario",
            kind: "message",
            T: yPe
        },
        {
            no: 3,
            name: "pool_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "count",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "per_identity_create_per_min",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "ramp_up_sec",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "created_by",
            kind: "scalar",
            T: 9
        }
    ]), EPe = c.makeMessageType("aiserver.v1.StartCloudAgentLoadTestResponse", ()=>[
        {
            no: 1,
            name: "temporal_workflow_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "temporal_run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "load_test_run_id",
            kind: "scalar",
            T: 9
        }
    ]), bPe = c.makeMessageType("aiserver.v1.EnsureModelRoutingLoadTestStartedRequest", ()=>[
        {
            no: 1,
            name: "run_id",
            kind: "scalar",
            T: 9
        }
    ]), RPe = c.makeMessageType("aiserver.v1.EnsureModelRoutingLoadTestStartedResponse", ()=>[
        {
            no: 1,
            name: "temporal_run_id",
            kind: "scalar",
            T: 9
        }
    ]), CPe = c.makeMessageType("aiserver.v1.CancelModelRoutingLoadTestRequest", ()=>[
        {
            no: 1,
            name: "run_id",
            kind: "scalar",
            T: 9
        }
    ]), IPe = c.makeMessageType("aiserver.v1.CancelModelRoutingLoadTestResponse", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: c.getEnumType(T1e)
        }
    ]), APe = c.makeMessageType("aiserver.v1.MintCustomerPrivatelinkProxyTokenRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "allowed_hosts",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), MPe = c.makeMessageType("aiserver.v1.MintCustomerPrivatelinkProxyTokenResponse", ()=>[
        {
            no: 1,
            name: "proxy_username",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "allowed_hosts",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), PPe = c.makeMessageType("aiserver.v1.ListCustomerPrivatelinkAllowedHostsRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        }
    ]), NPe = c.makeMessageType("aiserver.v1.ListCustomerPrivatelinkAllowedHostsResponse", ()=>[
        {
            no: 1,
            name: "destinations",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), DPe = c.makeMessageType("aiserver.v1.AdminListTeamNamedAgentsRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        }
    ]), OPe = c.makeMessageType("aiserver.v1.AdminNamedAgentSession", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "session_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "session_kind",
            kind: "scalar",
            T: 9
        }
    ]), LPe = c.makeMessageType("aiserver.v1.AdminNamedAgent", ()=>[
        {
            no: 1,
            name: "named_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "profile_picture_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "owning_user",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "owning_team",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "created_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "updated_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "sessions",
            kind: "message",
            T: OPe,
            repeated: !0
        }
    ]), UPe = c.makeMessageType("aiserver.v1.AdminListTeamNamedAgentsResponse", ()=>[
        {
            no: 1,
            name: "named_agents",
            kind: "message",
            T: LPe,
            repeated: !0
        }
    ]), xPe = c.makeMessageType("aiserver.v1.AdminDeleteNamedAgentRequest", ()=>[
        {
            no: 1,
            name: "named_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 5
        }
    ]), FPe = c.makeMessageType("aiserver.v1.AdminDeleteNamedAgentResponse", ()=>[
        {
            no: 1,
            name: "deleted_bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "failed_bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), WPe = c.makeMessageType("aiserver.v1.GetCloudAgentMemoryDbLogsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "worker_index",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), BPe = c.makeMessageType("aiserver.v1.GetCloudAgentMemoryDbLogsResponse", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: GPe,
            repeated: !0
        },
        {
            no: 2,
            name: "truncated",
            kind: "scalar",
            T: 8
        }
    ]), GPe = c.makeMessageType("aiserver.v1.CloudAgentMemoryDbLogEntry", ()=>[
        {
            no: 2,
            name: "source",
            kind: "enum",
            T: c.getEnumType(k1e)
        },
        {
            no: 3,
            name: "worker_index",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 4,
            name: "event",
            kind: "message",
            T: kE,
            oneof: "log"
        },
        {
            no: 5,
            name: "waterfall_update",
            kind: "message",
            T: sL,
            oneof: "log"
        }
    ]), VPe = c.makeMessageType("aiserver.v1.CreateAgentShareRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), $Pe = c.makeMessageType("aiserver.v1.CreateAgentShareResponse", ()=>[
        {
            no: 1,
            name: "share_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "share_url",
            kind: "scalar",
            T: 9
        }
    ]), jPe = c.makeMessageType("aiserver.v1.GetAgentSharePreviewRequest", ()=>[
        {
            no: 1,
            name: "share_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "include_preview_image",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), HPe = c.makeMessageType("aiserver.v1.GetAgentSharePreviewResponse", ()=>[
        {
            no: 1,
            name: "share_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "status",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
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
            name: "artifact_image_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "preview_image_png",
            kind: "scalar",
            T: 12,
            opt: !0
        }
    ]), qPe = c.makeMessageType("aiserver.v1.ListPrivateWorkersRequest", ()=>[
        {
            no: 1,
            name: "status_filter",
            kind: "enum",
            T: c.getEnumType(E1e)
        },
        {
            no: 2,
            name: "page_size",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "page_token",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "list_scope",
            kind: "enum",
            T: c.getEnumType(gL)
        }
    ]), KPe = c.makeMessageType("aiserver.v1.ListPrivateWorkersResponse", ()=>[
        {
            no: 1,
            name: "workers",
            kind: "message",
            T: FE,
            repeated: !0
        },
        {
            no: 2,
            name: "next_page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "total_count",
            kind: "scalar",
            T: 5
        }
    ]), zPe = c.makeMessageType("aiserver.v1.AdminListUserPrivateWorkersRequest", ()=>[
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
        },
        {
            no: 3,
            name: "email",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), YPe = c.makeMessageType("aiserver.v1.AdminListUserPrivateWorkersResponse", ()=>[
        {
            no: 1,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "email",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "team_ids",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 5,
            name: "private_workers",
            kind: "message",
            T: FE,
            repeated: !0
        },
        {
            no: 7,
            name: "remote_control_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "team_remote_control_allowed",
            kind: "scalar",
            T: 8
        }
    ]), JPe = c.makeMessageType("aiserver.v1.AdminKillBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expected_owning_user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "operator_email",
            kind: "scalar",
            T: 9
        }
    ]), XPe = c.makeMessageType("aiserver.v1.AdminKillBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "signal_outcome",
            kind: "enum",
            T: c.getEnumType(S1e)
        },
        {
            no: 2,
            name: "worker_release_succeeded",
            kind: "scalar",
            T: 8
        }
    ]), QPe = c.makeMessageType("aiserver.v1.AdminSettleInteractionRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "interaction_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "state",
            kind: "enum",
            T: c.getEnumType(hL)
        }
    ]), ZPe = c.makeMessageType("aiserver.v1.AdminSettleInteractionResponse", []), eNe = c.makeMessageType("aiserver.v1.AdminUnparkFollowupsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), tNe = c.makeMessageType("aiserver.v1.AdminUnparkFollowupsResponse", []), nNe = c.makeMessageType("aiserver.v1.AdminActiveBackgroundComposer", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "created_at",
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
            name: "workflow_status",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "execution_environment",
            kind: "enum",
            T: c.getEnumType(y1e)
        },
        {
            no: 6,
            name: "parent_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), rNe = c.makeMessageType("aiserver.v1.AdminListActiveBackgroundComposersRequest", ()=>[
        {
            no: 1,
            name: "expected_owning_user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "page_size",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "page_token",
            kind: "scalar",
            T: 9
        }
    ]), sNe = c.makeMessageType("aiserver.v1.AdminListActiveBackgroundComposersResponse", ()=>[
        {
            no: 1,
            name: "agents",
            kind: "message",
            T: nNe,
            repeated: !0
        },
        {
            no: 2,
            name: "next_page_token",
            kind: "scalar",
            T: 9
        }
    ]), iNe = c.makeMessageType("aiserver.v1.AdminKillAllActiveBackgroundComposersRequest", ()=>[
        {
            no: 1,
            name: "expected_owning_user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "operator_email",
            kind: "scalar",
            T: 9
        }
    ]), aNe = c.makeMessageType("aiserver.v1.AdminKillAllActiveBackgroundComposerFailure", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), oNe = c.makeMessageType("aiserver.v1.AdminKillAllActiveBackgroundComposersResponse", ()=>[
        {
            no: 1,
            name: "matched_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "killed_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "already_killed_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "partial_cleanup_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "failures",
            kind: "message",
            T: aNe,
            repeated: !0
        }
    ]), cNe = c.makeMessageType("aiserver.v1.ListPendingPrivateWorkerRequestsRequest", ()=>[
        {
            no: 1,
            name: "page_size",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "page_token",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "repository",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "pool",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), lNe = c.makeMessageType("aiserver.v1.ListPendingPrivateWorkerRequestsResponse", ()=>[
        {
            no: 1,
            name: "requests",
            kind: "message",
            T: JL,
            repeated: !0
        },
        {
            no: 2,
            name: "next_page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "total_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "stream_cursor",
            kind: "scalar",
            T: 9
        }
    ]), JL = c.makeMessageType("aiserver.v1.PendingPrivateWorkerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "service_account_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "repo_owner",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "repo_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "labels",
            kind: "message",
            T: Bf,
            repeated: !0
        },
        {
            no: 8,
            name: "created_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 9,
            name: "user_email",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 11,
            name: "claimed_worker_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "wake_timeout_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 13,
            name: "repos",
            kind: "message",
            T: dNe,
            repeated: !0
        }
    ]), dNe = c.makeMessageType("aiserver.v1.PrivateWorkerRequestRepo", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "primary",
            kind: "scalar",
            T: 8
        }
    ]), uNe = c.makeMessageType("aiserver.v1.StreamPendingPrivateWorkerRequestsRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "pool",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), mNe = c.makeMessageType("aiserver.v1.StreamPendingPrivateWorkerRequestsResponse", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: c.getEnumType(w1e)
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: JL
        },
        {
            no: 3,
            name: "cursor",
            kind: "scalar",
            T: 9
        }
    ]), pNe = c.makeMessageType("aiserver.v1.ClaimPendingPrivateWorkerRequestRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "worker_id",
            kind: "scalar",
            T: 9
        }
    ]), hNe = c.makeMessageType("aiserver.v1.ClaimPendingPrivateWorkerRequestResponse", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "worker_id",
            kind: "scalar",
            T: 9
        }
    ]), gNe = c.makeMessageType("aiserver.v1.ReleasePrivateWorkerClaimRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), fNe = c.makeMessageType("aiserver.v1.ReleasePrivateWorkerClaimResponse", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "worker_id",
            kind: "scalar",
            T: 9
        }
    ]), _Ne = c.makeMessageType("aiserver.v1.PrivateWorkerRepo", ()=>[
        {
            no: 1,
            name: "owner",
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
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), FE = c.makeMessageType("aiserver.v1.PrivateWorker", ()=>[
        {
            no: 1,
            name: "worker_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "connected_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 6,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "service_account_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "is_in_use",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "active_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "labels",
            kind: "message",
            T: Bf,
            repeated: !0
        },
        {
            no: 12,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "display_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "machine_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "machine_display_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "repos",
            kind: "message",
            T: _Ne,
            repeated: !0
        }
    ]), Bf = c.makeMessageType("aiserver.v1.PrivateWorkerLabel", ()=>[
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
    ]), vNe = c.makeMessageType("aiserver.v1.PrivateWorkerPool", ()=>[
        {
            no: 1,
            name: "scope",
            kind: "enum",
            T: c.getEnumType(RE)
        },
        {
            no: 2,
            name: "owner_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "pool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo_owner",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "repo_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "connected_worker_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "in_use_worker_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "first_seen_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 10,
            name: "last_seen_at_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 11,
            name: "is_stale",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "worker_ready_timeout_seconds",
            kind: "scalar",
            T: 5
        },
        {
            no: 13,
            name: "request_counts",
            kind: "message",
            T: TNe,
            opt: !0
        }
    ]), TNe = c.makeMessageType("aiserver.v1.PrivateWorkerPoolRequestCounts", ()=>[
        {
            no: 1,
            name: "pending",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "waking",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "claimed",
            kind: "scalar",
            T: 5
        }
    ]), kNe = c.makeMessageType("aiserver.v1.ListPrivateWorkerPoolsRequest", ()=>[
        {
            no: 1,
            name: "list_scope",
            kind: "enum",
            T: c.getEnumType(gL)
        },
        {
            no: 2,
            name: "include_stale",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "include_request_counts",
            kind: "scalar",
            T: 8
        }
    ]), SNe = c.makeMessageType("aiserver.v1.ListPrivateWorkerPoolsResponse", ()=>[
        {
            no: 1,
            name: "pools",
            kind: "message",
            T: vNe,
            repeated: !0
        }
    ]), WE = c.makeMessageType("aiserver.v1.PlacementGrantTarget", ()=>[
        {
            no: 1,
            name: "worker_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        },
        {
            no: 2,
            name: "pool_name",
            kind: "scalar",
            T: 9,
            oneof: "target"
        },
        {
            no: 3,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        }
    ]), yNe = c.makeMessageType("aiserver.v1.PlacementGrantConnectedWorker", ()=>[
        {
            no: 1,
            name: "repo",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "in_use",
            kind: "scalar",
            T: 8
        }
    ]), wNe = c.makeMessageType("aiserver.v1.PlacementGrantOfflineWorker", []), ENe = c.makeMessageType("aiserver.v1.PlacementGrantPool", ()=>[
        {
            no: 1,
            name: "connected_worker_count",
            kind: "scalar",
            T: 13
        }
    ]), bNe = c.makeMessageType("aiserver.v1.PlacementGrantEnvironment", []), RNe = c.makeMessageType("aiserver.v1.PlacementGrantEntry", ()=>[
        {
            no: 1,
            name: "target",
            kind: "message",
            T: WE
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "allowed",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "connected",
            kind: "message",
            T: yNe,
            oneof: "connection"
        },
        {
            no: 5,
            name: "offline",
            kind: "message",
            T: wNe,
            oneof: "connection"
        },
        {
            no: 6,
            name: "pool",
            kind: "message",
            T: ENe,
            oneof: "connection"
        },
        {
            no: 7,
            name: "environment",
            kind: "message",
            T: bNe,
            oneof: "connection"
        }
    ]), XL = c.makeMessageType("aiserver.v1.PlacementGrantsView", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "entries",
            kind: "message",
            T: RNe,
            repeated: !0
        }
    ]), CNe = c.makeMessageType("aiserver.v1.ListPlacementGrantsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), INe = c.makeMessageType("aiserver.v1.ListPlacementGrantsResponse", ()=>[
        {
            no: 1,
            name: "view",
            kind: "message",
            T: XL
        }
    ]), ANe = c.makeMessageType("aiserver.v1.UpdatePlacementGrantsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "allow",
            kind: "message",
            T: WE,
            repeated: !0
        },
        {
            no: 3,
            name: "revoke",
            kind: "message",
            T: WE,
            repeated: !0
        }
    ]), MNe = c.makeMessageType("aiserver.v1.UpdatePlacementGrantsResponse", ()=>[
        {
            no: 1,
            name: "view",
            kind: "message",
            T: XL
        }
    ]), PNe = c.makeMessageType("aiserver.v1.RegisterPrivateWorkerPoolRequest", ()=>[
        {
            no: 1,
            name: "scope",
            kind: "enum",
            T: c.getEnumType(RE)
        },
        {
            no: 2,
            name: "pool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repo_owner",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "repo_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "worker_ready_timeout_seconds",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), NNe = c.makeMessageType("aiserver.v1.RegisterPrivateWorkerPoolResponse", ()=>[
        {
            no: 1,
            name: "registered",
            kind: "scalar",
            T: 8
        }
    ]), DNe = c.makeMessageType("aiserver.v1.DeregisterPrivateWorkerPoolRequest", ()=>[
        {
            no: 1,
            name: "scope",
            kind: "enum",
            T: c.getEnumType(RE)
        },
        {
            no: 2,
            name: "pool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repo_owner",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "repo_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ONe = c.makeMessageType("aiserver.v1.DeregisterPrivateWorkerPoolResponse", ()=>[
        {
            no: 1,
            name: "deregistered",
            kind: "scalar",
            T: 8
        }
    ]), LNe = c.makeMessageType("aiserver.v1.PrivateWorkerOwnerFilter", ()=>[
        {
            no: 1,
            name: "owner_cursor_user_id",
            kind: "scalar",
            T: 5
        }
    ]), UNe = c.makeMessageType("aiserver.v1.GetPrivateWorkersSummaryRequest", []), xNe = c.makeMessageType("aiserver.v1.GetPrivateWorkersSummaryResponse", ()=>[
        {
            no: 1,
            name: "user_summary",
            kind: "message",
            T: FNe,
            opt: !0
        },
        {
            no: 2,
            name: "team_summary",
            kind: "message",
            T: WNe,
            opt: !0
        },
        {
            no: 3,
            name: "team_limit_summary",
            kind: "message",
            T: BNe,
            opt: !0
        }
    ]), FNe = c.makeMessageType("aiserver.v1.UserWorkerSummary", ()=>[
        {
            no: 1,
            name: "total_connected",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "in_use",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "team_workers_in_use_by_user",
            kind: "scalar",
            T: 5
        }
    ]), WNe = c.makeMessageType("aiserver.v1.TeamWorkerSummary", ()=>[
        {
            no: 1,
            name: "total_connected",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "in_use",
            kind: "scalar",
            T: 5
        }
    ]), BNe = c.makeMessageType("aiserver.v1.TeamWorkerLimitSummary", ()=>[
        {
            no: 1,
            name: "total_connected",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "max_workers",
            kind: "scalar",
            T: 5
        }
    ]), GNe = c.makeMessageType("aiserver.v1.GetPrivateWorkerRequest", ()=>[
        {
            no: 1,
            name: "worker_id",
            kind: "scalar",
            T: 9
        }
    ]), VNe = c.makeMessageType("aiserver.v1.GetPrivateWorkerResponse", ()=>[
        {
            no: 1,
            name: "worker",
            kind: "message",
            T: FE
        }
    ]), $Ne = c.makeMessageType("aiserver.v1.ReleasePrivateWorkerRequest", ()=>[
        {
            no: 1,
            name: "worker_id",
            kind: "scalar",
            T: 9
        }
    ]), jNe = c.makeMessageType("aiserver.v1.ReleasePrivateWorkerResponse", []), HNe = c.makeMessageType("aiserver.v1.BatchRefreshPullRequestStatusRequest", ()=>[
        {
            no: 1,
            name: "bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), qNe = c.makeMessageType("aiserver.v1.BatchRefreshPullRequestStatusResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: KL
            }
        },
        {
            no: 2,
            name: "failed_bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), KNe = c.makeMessageType("aiserver.v1.AttachAgentStartupTraceRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "last_event_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), zNe = c.makeMessageType("aiserver.v1.AttachAgentStartupTraceResponse", ()=>[
        {
            no: 1,
            name: "event_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "trace_event",
            kind: "message",
            T: Nwe
        }
    ]), YNe = c.makeMessageType("aiserver.v1.CloudCanvasDiagnostic", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "code",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "severity",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "range",
            kind: "message",
            T: JNe,
            opt: !0
        }
    ]), JNe = c.makeMessageType("aiserver.v1.CloudCanvasDiagnosticRange", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: QL
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: QL
        }
    ]), QL = c.makeMessageType("aiserver.v1.CloudCanvasDiagnosticPosition", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "character",
            kind: "scalar",
            T: 5
        }
    ]), XNe = c.makeMessageType("aiserver.v1.WriteCanvasRequest", ()=>[
        {
            no: 1,
            name: "source",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "canvas_id",
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
        },
        {
            no: 4,
            name: "if_match",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), QNe = c.makeMessageType("aiserver.v1.WriteCanvasOk", ()=>[
        {
            no: 1,
            name: "canvas_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "etag",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ZNe = c.makeMessageType("aiserver.v1.WriteCanvasFailure", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: c.getEnumType(b1e)
        },
        {
            no: 2,
            name: "diagnostics",
            kind: "message",
            T: YNe,
            repeated: !0
        },
        {
            no: 3,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), eDe = c.makeMessageType("aiserver.v1.WriteCanvasResponse", ()=>[
        {
            no: 1,
            name: "ok",
            kind: "message",
            T: QNe,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: ZNe,
            oneof: "outcome"
        }
    ]), tDe = c.makeMessageType("aiserver.v1.ReadCanvasRequest", ()=>[
        {
            no: 1,
            name: "canvas_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), nDe = c.makeMessageType("aiserver.v1.ReadCanvasOk", ()=>[
        {
            no: 1,
            name: "canvas_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "url",
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
            name: "etag",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), rDe = c.makeMessageType("aiserver.v1.ReadCanvasFailure", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: c.getEnumType(R1e)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), sDe = c.makeMessageType("aiserver.v1.ReadCanvasResponse", ()=>[
        {
            no: 1,
            name: "ok",
            kind: "message",
            T: nDe,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: rDe,
            oneof: "outcome"
        }
    ]), iDe = c.makeMessageType("aiserver.v1.PromptUploadPart", ()=>[
        {
            no: 1,
            name: "part_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "offset_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        }
    ]), aDe = c.makeMessageType("aiserver.v1.PresignPromptUploadRequest", ()=>[
        {
            no: 1,
            name: "filename",
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
            name: "content_length_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), oDe = c.makeMessageType("aiserver.v1.PresignPromptUploadResponse", ()=>[
        {
            no: 1,
            name: "upload_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "urls_expire_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "multipart",
            kind: "message",
            T: cDe,
            oneof: "upload"
        }
    ]), cDe = c.makeMessageType("aiserver.v1.PresignPromptUploadResponse.Multipart", ()=>[
        {
            no: 1,
            name: "s3_upload_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parts",
            kind: "message",
            T: iDe,
            repeated: !0
        },
        {
            no: 3,
            name: "part_size_bytes",
            kind: "scalar",
            T: 3
        }
    ], {
    localName: "PresignPromptUploadResponse_Multipart"
}), lDe = c.makeMessageType("aiserver.v1.CompletePromptUploadRequest", ()=>[
        {
            no: 1,
            name: "upload_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "s3_upload_id",
            kind: "scalar",
            T: 9
        }
    ]), dDe = c.makeMessageType("aiserver.v1.CompletePromptUploadResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: c.getEnumType(C1e)
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        }
    ]), uDe = c.makeMessageType("aiserver.v1.AbortPromptUploadRequest", ()=>[
        {
            no: 1,
            name: "upload_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "s3_upload_id",
            kind: "scalar",
            T: 9
        }
    ]), mDe = c.makeMessageType("aiserver.v1.AbortPromptUploadResponse", []), Ku = c.makeMessageType("aiserver.v1.Keyring", ()=>[
        {
            no: 1,
            name: "public_id",
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
            name: "scope",
            kind: "enum",
            T: c.getEnumType(I1e)
        },
        {
            no: 4,
            name: "owning_team",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "owning_user",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 7,
            name: "updated_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 8,
            name: "secret_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "created_by_user_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "can_manage",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "can_attach",
            kind: "scalar",
            T: 8
        }
    ]), pDe = c.makeMessageType("aiserver.v1.ListKeyringsRequest", ()=>[
        {
            no: 1,
            name: "mode",
            kind: "enum",
            T: c.getEnumType(A1e)
        }
    ]), hDe = c.makeMessageType("aiserver.v1.ListKeyringsResponse", ()=>[
        {
            no: 1,
            name: "keyrings",
            kind: "message",
            T: Ku,
            repeated: !0
        }
    ]), gDe = c.makeMessageType("aiserver.v1.GetKeyringRequest", ()=>[
        {
            no: 1,
            name: "public_id",
            kind: "scalar",
            T: 9
        }
    ]), fDe = c.makeMessageType("aiserver.v1.GetKeyringResponse", ()=>[
        {
            no: 1,
            name: "keyring",
            kind: "message",
            T: Ku,
            opt: !0
        }
    ]), _De = c.makeMessageType("aiserver.v1.CreateKeyringRequest", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), vDe = c.makeMessageType("aiserver.v1.CreateKeyringResponse", ()=>[
        {
            no: 1,
            name: "keyring",
            kind: "message",
            T: Ku
        }
    ]), TDe = c.makeMessageType("aiserver.v1.CreateKeyringFromTeamSecretsRequest", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "secret_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "initial_grants",
            kind: "message",
            T: ZL,
            repeated: !0
        }
    ]), kDe = c.makeMessageType("aiserver.v1.CreateKeyringFromTeamSecretsResponse", ()=>[
        {
            no: 1,
            name: "keyring",
            kind: "message",
            T: Ku
        },
        {
            no: 2,
            name: "copied_secret_count",
            kind: "scalar",
            T: 5
        }
    ]), SDe = c.makeMessageType("aiserver.v1.CopyTeamSecretsToKeyringRequest", ()=>[
        {
            no: 1,
            name: "keyring_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "secret_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), yDe = c.makeMessageType("aiserver.v1.CopyTeamSecretsToKeyringResponse", ()=>[
        {
            no: 1,
            name: "copied_secret_count",
            kind: "scalar",
            T: 5
        }
    ]), wDe = c.makeMessageType("aiserver.v1.RenameKeyringRequest", ()=>[
        {
            no: 1,
            name: "public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), EDe = c.makeMessageType("aiserver.v1.RenameKeyringResponse", ()=>[
        {
            no: 1,
            name: "keyring",
            kind: "message",
            T: Ku
        }
    ]), bDe = c.makeMessageType("aiserver.v1.DeleteKeyringRequest", ()=>[
        {
            no: 1,
            name: "public_id",
            kind: "scalar",
            T: 9
        }
    ]), RDe = c.makeMessageType("aiserver.v1.DeleteKeyringResponse", []), CDe = c.makeMessageType("aiserver.v1.KeyringSecret", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "level",
            kind: "enum",
            T: c.getEnumType(gw)
        },
        {
            no: 3,
            name: "created_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "updated_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), IDe = c.makeMessageType("aiserver.v1.ListKeyringSecretsRequest", ()=>[
        {
            no: 1,
            name: "keyring_public_id",
            kind: "scalar",
            T: 9
        }
    ]), ADe = c.makeMessageType("aiserver.v1.ListKeyringSecretsResponse", ()=>[
        {
            no: 1,
            name: "secrets",
            kind: "message",
            T: CDe,
            repeated: !0
        }
    ]), MDe = c.makeMessageType("aiserver.v1.CreateKeyringSecretRequest", ()=>[
        {
            no: 1,
            name: "keyring_public_id",
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
            name: "value",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "level",
            kind: "enum",
            T: c.getEnumType(gw)
        }
    ]), PDe = c.makeMessageType("aiserver.v1.CreateKeyringSecretResponse", []), NDe = c.makeMessageType("aiserver.v1.UpdateKeyringSecretRequest", ()=>[
        {
            no: 1,
            name: "keyring_public_id",
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
            name: "value",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "level",
            kind: "enum",
            T: c.getEnumType(gw),
            opt: !0
        }
    ]), DDe = c.makeMessageType("aiserver.v1.UpdateKeyringSecretResponse", []), ODe = c.makeMessageType("aiserver.v1.RevokeKeyringSecretRequest", ()=>[
        {
            no: 1,
            name: "keyring_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), LDe = c.makeMessageType("aiserver.v1.RevokeKeyringSecretResponse", []), ZL = c.makeMessageType("aiserver.v1.KeyringGrant", ()=>[
        {
            no: 1,
            name: "principal_type",
            kind: "enum",
            T: c.getEnumType(xf)
        },
        {
            no: 2,
            name: "principal_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "access_level",
            kind: "enum",
            T: c.getEnumType(CE)
        }
    ]), UDe = c.makeMessageType("aiserver.v1.ListKeyringGrantsRequest", ()=>[
        {
            no: 1,
            name: "keyring_public_id",
            kind: "scalar",
            T: 9
        }
    ]), xDe = c.makeMessageType("aiserver.v1.ListKeyringGrantsResponse", ()=>[
        {
            no: 1,
            name: "grants",
            kind: "message",
            T: ZL,
            repeated: !0
        }
    ]), FDe = c.makeMessageType("aiserver.v1.GrantKeyringPermissionsRequest", ()=>[
        {
            no: 1,
            name: "keyring_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "principal_type",
            kind: "enum",
            T: c.getEnumType(xf)
        },
        {
            no: 3,
            name: "principal_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "access_level",
            kind: "enum",
            T: c.getEnumType(CE)
        }
    ]), WDe = c.makeMessageType("aiserver.v1.GrantKeyringPermissionsResponse", []), BDe = c.makeMessageType("aiserver.v1.UpdateKeyringPermissionsRequest", ()=>[
        {
            no: 1,
            name: "keyring_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "principal_type",
            kind: "enum",
            T: c.getEnumType(xf)
        },
        {
            no: 3,
            name: "principal_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "access_level",
            kind: "enum",
            T: c.getEnumType(CE)
        }
    ]), GDe = c.makeMessageType("aiserver.v1.UpdateKeyringPermissionsResponse", []), VDe = c.makeMessageType("aiserver.v1.RevokeKeyringPermissionsRequest", ()=>[
        {
            no: 1,
            name: "keyring_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "principal_type",
            kind: "enum",
            T: c.getEnumType(xf)
        },
        {
            no: 3,
            name: "principal_id",
            kind: "scalar",
            T: 9
        }
    ]), $De = c.makeMessageType("aiserver.v1.RevokeKeyringPermissionsResponse", []), eU = c.makeMessageType("aiserver.v1.CloudAgentVoiceCall", ()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "anchor_line_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "anchor_server_line_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "started_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "connected_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 6,
            name: "ended_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 7,
            name: "turns",
            kind: "message",
            T: jDe,
            repeated: !0
        },
        {
            no: 8,
            name: "user_turn_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "assistant_turn_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 10,
            name: "last_heard_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), jDe = c.makeMessageType("aiserver.v1.CloudAgentVoiceCall.Turn", ()=>[
        {
            no: 1,
            name: "speaker",
            kind: "enum",
            T: c.getEnumType(HDe)
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "item_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "CloudAgentVoiceCall_Turn"
}), HDe = c.makeEnum("aiserver.v1.CloudAgentVoiceCall.Turn.Speaker", [
    {
        no: 0,
        name: "SPEAKER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SPEAKER_USER",
        localName: "USER"
    },
    {
        no: 2,
        name: "SPEAKER_ASSISTANT",
        localName: "ASSISTANT"
    }
]), qDe = c.makeMessageType("aiserver.v1.SaveCloudAgentVoiceCallRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "call",
            kind: "message",
            T: eU
        }
    ]), KDe = c.makeMessageType("aiserver.v1.SaveCloudAgentVoiceCallResponse", ()=>[
        {
            no: 1,
            name: "call",
            kind: "message",
            T: eU
        }
    ]);

}
