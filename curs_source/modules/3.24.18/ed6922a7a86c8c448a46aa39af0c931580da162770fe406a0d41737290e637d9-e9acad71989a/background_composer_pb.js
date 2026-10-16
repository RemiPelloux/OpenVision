import { B0e, Hm, Wyt, Yb, qyt, s$t, sUi, tL, tUi, x1, zd } from "./agent_pb.js";
import { Fyt, GQe } from "./agent_skills_pb.js";
import { $5d, ZEv } from "./agent_startup_trace_pb.js";
import { pco, ulo } from "./agent_store_pb.js";
import { EA, YHi } from "./aiserver_pb.js";
import { Ise, K7t } from "./ask_question_tool_pb.js";
import { DBd, XEv, flo } from "./blob_pb.js";
import { Hu, I4e, KQe, Uv } from "./chat_pb.js";
import { j3, jno } from "./cloud_agent_scope_pb.js";
import { N$, cco } from "./cloud_agent_source_pb.js";
import { $Nn, sco } from "./common_pb.js";
import { H3s, Jm } from "./composer_pb.js";
import { F7i, Jh, VM, _Je, aPn, kJe } from "./dashboard_pb.js";
import { qP } from "./empty_pb.js";
import { kVi, wVi } from "./pod_event_pb.js";
import { KEv, oco } from "./pod_pb.js";
import { IR, xl } from "./privacy_mode_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { GUt, nX, w1 } from "./repository_pb.js";
import { MD, Uj } from "./requested_model_pb.js";
import { AVi, Ilo, ylo } from "./scm_pb.js";
import { MMe, NDn, jW } from "./selected_context_pb.js";
import { YEv, aco } from "./snapshot_pb.js";
import { Pj, VUt } from "./subagents_pb.js";
import { G4i, xDn } from "./system_prompt_pb.js";
import { Kue, M3i, ql, xR } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { A3t, Amt, Vle, Wle, hu, vk, xf, y5 } from "./utils_pb.js";
import { Rkt, WNn } from "./waterfall_update_pb.js";
var dPe, JW, q5d, Pkt, DVi, Alo, go, Yd, Zc, z5d, Rlo, K5d, Y5d, X5d, Z5d, eq, yUe, Dlo, Q5d, IWt, MVi, VNn, Mlo, het, J5d, pet, met, e9d, jNn, t9d, Plo, n9d, i9d, r9d, s9d, Llo, qNn, Nlo, Olo, o9d, a9d, c9d, l9d, u9d, zNn, PVi, d9d, Flo, h9d, Blo, p9d, m9d, g9d, Ulo, f9d, v9d, _9d, LVi, b9d, y9d, S9d, $lo, k9d, w9d, KNn, NVi, C9d, T9d, YNn, XNn, E9d, x9d, I9d, A9d, R9d, AWt, ZNn, Hlo, D9d, Wlo, M9d, P9d, Glo, L9d, N9d, O9d, F9d, B9d, U9d, $9d, H9d, W9d, G9d, V9d, j9d, q9d, z9d, K9d, Y9d, X9d, Z9d, Q9d, J9d, e6d, t6d, Vlo, n6d, i6d, r6d, s6d, o6d, a6d, c6d, jlo, l6d, qlo, zlo, Klo, u6d, d6d, h6d, p6d, m6d, g6d, f6d, v6d, Ylo, OVi, Xlo, FVi, Zlo, Qlo, _6d, Jlo, b6d, y6d, S6d, k6d, w6d, C6d, T6d, euo, tuo, E6d, x6d, I6d, A6d, R6d, D6d, RWt, M6d, P6d, L6d, N6d, O6d, F6d, B6d, U6d, $6d, H6d, W6d, G6d, V6d, j6d, q6d, z6d, K6d, Y6d, X6d, BVi, Z6d, nuo, Q6d, J6d, iuo, ruo, e4d, t4d, get, suo, n4d, ouo, auo, i4d, cuo, r4d, s4d, o4d, a4d, c4d, l4d, u4d, d4d, h4d, luo, uuo, p4d, m4d, g4d, f4d, duo, v4d, _4d, b4d, y4d, S4d, k4d, huo, w4d, C4d, T4d, E4d, x4d, I4d, A4d, R4d, DWt, UVi, $Vi, qse, QNn, puo, D4d, M4d, P4d, L4d, N4d, O4d, F4d, B4d, U4d, $4d, H4d, muo, fet, HVi, W4d, G4d, MWt, V4d, j4d, q4d, z4d, guo, K4d, fuo, Y4d, JNn, X4d, Z4d, Dde, PWt, SUe, vuo, Q4d, J4d, eUd, tUd, kUe, nUd, iUd, rUd, sUd, WVi, oUd, aUd, cUd, lUd, _uo, uUd, dUd, hUd, pUd, mUd, gUd, e2n, buo, fUd, vUd, _Ud, zU, g1e, bUd, yUd, t2n, yuo, GVi, SUd, Suo, kuo, kUd, wUd, CUd, TUd, EUd, xUd, IUd, AUd, hPe, RUd, DUd, MUd, wuo, PUd, LUd, NUd, OUd, FUd, BUd, Cuo, UUd, $Ud, HUd, WUd, pPe, GUd, n2n, VUd, mPe, VVi, jUd, Lkt, jVi, qUd, zUd, Tuo, KUd, Euo, YUd, xuo, XUd, qVi, ZUd, Iuo, QUd, JUd, e8d, t8d, n8d, i8d, r8d, wUe, s8d, o8d, a8d, Nkt, c8d, l8d, Auo, Ruo, u8d, d8d, Duo, Muo, h8d, p8d, m8d, g8d, f8d, v8d, _8d, b8d, y8d, S8d, k8d, Puo, w8d, C8d, T8d, E8d, x8d, I8d, Luo, A8d, R8d, Nuo, i2n, D8d, M8d, P8d, Ouo, L8d, N8d, O8d, F8d, B8d, U8d, $8d, H8d, W8d, G8d, V8d, j8d, q8d, z8d, K8d, Y8d, X8d, Z8d, Q8d, zVi, CUe, J8d, e7d, t7d, n7d, i7d, r7d, s7d, o7d, a7d, c7d, Okt, Fuo, l7d, u7d, d7d, h7d, p7d, m7d, g7d, f7d, v7d, _7d, b7d, y7d, S7d, k7d, w7d, C7d, T7d, E7d, x7d, Buo, I7d, A7d, R7d, D7d, Uuo, M7d, P7d, L7d, N7d, $uo, vet, O7d, F7d, KVi, B7d, U7d, $7d, H7d, W7d, G7d, V7d, j7d, q7d, z7d, K7d, Y7d, X7d, Z7d, Q7d, J7d, e$d, t$d, n$d, i$d, r$d, s$d, o$d, a$d, c$d, l$d, u$d, Huo, d$d, h$d, p$d, m$d, g$d, f$d, v$d, _$d, b$d, y$d, S$d, k$d, w$d, C$d, T$d, E$d, YVi, x$d, I$d, A$d, R$d, D$d, M$d, P$d, L$d, Wuo, N$d, Guo, O$d, Vuo, juo, F$d, B$d, U$d, $$d, quo, H$d, W$d, G$d, V$d, XVi, j$d, zuo, q$d, z$d, Kuo, K$d, Y$d, ZVi, X$d, Z$d, QVi, Q$d, JVi, J$d, Yuo, eHd, tHd, nHd, iHd, rHd, sHd, oHd, Xuo, aHd, Zuo, cHd, Quo, lHd, Juo, uHd, dHd, hHd, eji, pHd, edo, mHd, tdo, gHd, fHd, vHd, _Hd, bHd, yHd, ndo, SHd, ido, kHd, wHd, CHd, THd, EHd, xHd, IHd, AHd, RHd, tji, DHd, MHd, PHd, rdo, sdo, gPe, LHd, NHd, OHd, odo, FHd, BHd, ado, UHd, cdo, ldo, $Hd, HHd, WHd, GHd, VHd, jHd, qHd, zHd, KHd, YHd, XHd, ZHd, QHd, JHd, eWd, tWd, nWd, iWd, rWd, sWd, oWd, aWd, cWd, lWd, uWd, dWd, hWd, pWd, mWd, gWd, fWd, vWd, _Wd, bWd, yWd, SWd, kWd, wWd, CWd, TWd, EWd, xWd, IWd, AWd, RWd, DWd, MWd, PWd, LWd, NWd, OWd, FWd, BWd, UWd, $Wd, udo, HWd, WWd, GWd, VWd, jWd, qWd, zWd, KWd, nji, Mde, YWd, XWd, ZWd, QWd, iji, JWd, eGd, tGd, nGd, iGd, ddo, rGd, sGd, oGd, aGd, cGd, lGd, uGd, dGd, rji, hGd, pGd, mGd, gGd, fGd, vGd, _Gd, bGd, yGd, SGd, kGd, LWt, wGd, CGd, TGd, EGd, hdo, xGd, IGd, AGd, RGd, DGd, MGd, PGd, LGd, NGd, pdo, OGd, FGd, mdo, BGd, gdo, UGd, NWt, $Gd, HGd, WGd, GGd, VGd, jGd, qGd, zGd, KGd, YGd, XGd, ZGd, QGd, JGd, eVd, tVd, nVd, iVd, rVd, sVd, oVd, aVd, cVd, fdo, lVd, uVd, dVd, hVd, pVd, mVd, gVd, fVd, r2n, vdo, Fkt, vVd, _do, _Vd;
export { $$d, $4d, $6d, $7d, $8d, $9d, $Gd, $Hd, $Ud, $Vi, $Wd, $lo, $uo, A$d, A4d, A6d, A7d, A8d, A9d, AGd, AHd, AUd, AWd, AWt, Alo, Auo, B$d, B4d, B6d, B7d, B8d, B9d, BGd, BHd, BUd, BVi, BWd, Blo, Buo, C$d, C4d, C6d, C7d, C8d, C9d, CGd, CHd, CUd, CUe, CWd, Cuo, D$d, D4d, D6d, D7d, D8d, D9d, DGd, DHd, DUd, DVi, DWd, DWt, Dde, Dlo, Duo, E$d, E4d, E6d, E7d, E8d, E9d, EGd, EHd, EUd, EWd, Euo, F$d, F4d, F6d, F7d, F8d, F9d, FGd, FHd, FUd, FVi, FWd, Fkt, Flo, Fuo, G$d, G4d, G6d, G7d, G8d, G9d, GGd, GHd, GUd, GVi, GWd, Glo, Guo, H$d, H4d, H6d, H7d, H8d, H9d, HGd, HHd, HUd, HVi, HWd, Hlo, Huo, I$d, I4d, I6d, I7d, I8d, I9d, IGd, IHd, IUd, IWd, IWt, Iuo, J$d, J4d, J5d, J6d, J7d, J8d, J9d, JGd, JHd, JNn, JUd, JVi, JW, JWd, Jlo, Juo, K$d, K4d, K5d, K6d, K7d, K8d, K9d, KGd, KHd, KNn, KUd, KVi, KWd, Klo, Kuo, L$d, L4d, L6d, L7d, L8d, L9d, LGd, LHd, LUd, LVi, LWd, LWt, Lkt, Llo, Luo, M$d, M4d, M6d, M7d, M8d, M9d, MGd, MHd, MUd, MVi, MWd, MWt, Mde, Mlo, Muo, N$d, N4d, N6d, N7d, N8d, N9d, NGd, NHd, NUd, NVi, NWd, NWt, Nkt, Nlo, Nuo, O$d, O4d, O6d, O7d, O8d, O9d, OGd, OHd, OUd, OVi, OWd, Okt, Olo, Ouo, P$d, P4d, P6d, P7d, P8d, P9d, PGd, PHd, PUd, PVi, PWd, PWt, Pkt, Plo, Puo, Q$d, Q4d, Q5d, Q6d, Q7d, Q8d, Q9d, QGd, QHd, QNn, QUd, QVi, QWd, Qlo, Quo, R$d, R4d, R6d, R7d, R8d, R9d, RGd, RHd, RUd, RWd, RWt, Rlo, Ruo, S$d, S4d, S6d, S7d, S8d, S9d, SGd, SHd, SUd, SUe, SWd, Suo, T$d, T4d, T6d, T7d, T8d, T9d, TGd, THd, TUd, TWd, Tuo, U$d, U4d, U6d, U7d, U8d, U9d, UGd, UHd, UUd, UVi, UWd, Ulo, Uuo, V$d, V4d, V6d, V7d, V8d, V9d, VGd, VHd, VNn, VUd, VVi, VWd, Vlo, Vuo, W$d, W4d, W6d, W7d, W8d, W9d, WGd, WHd, WUd, WVi, WWd, Wlo, Wuo, X$d, X4d, X5d, X6d, X7d, X8d, X9d, XGd, XHd, XNn, XUd, XVi, XWd, Xlo, Xuo, Y$d, Y4d, Y5d, Y6d, Y7d, Y8d, Y9d, YGd, YHd, YNn, YUd, YVi, YWd, Yd, Ylo, Yuo, Z$d, Z4d, Z5d, Z6d, Z7d, Z8d, Z9d, ZGd, ZHd, ZNn, ZUd, ZVi, ZWd, Zc, Zlo, Zuo, _$d, _4d, _6d, _7d, _8d, _9d, _Gd, _Hd, _Ud, _Vd, _Wd, _do, _uo, a$d, a4d, a6d, a7d, a8d, a9d, aGd, aHd, aUd, aVd, aWd, ado, auo, b$d, b4d, b6d, b7d, b8d, b9d, bGd, bHd, bUd, bWd, buo, c$d, c4d, c6d, c7d, c8d, c9d, cGd, cHd, cUd, cVd, cWd, cdo, cuo, d$d, d4d, d6d, d7d, d8d, d9d, dGd, dHd, dPe, dUd, dVd, dWd, ddo, duo, e$d, e2n, e4d, e6d, e7d, e8d, e9d, eGd, eHd, eUd, eVd, eWd, edo, eji, eq, euo, f$d, f4d, f6d, f7d, f8d, f9d, fGd, fHd, fUd, fVd, fWd, fdo, fet, fuo, g$d, g1e, g4d, g6d, g7d, g8d, g9d, gGd, gHd, gPe, gUd, gVd, gWd, gdo, get, go, guo, h$d, h4d, h6d, h7d, h8d, h9d, hGd, hHd, hPe, hUd, hVd, hWd, hdo, het, huo, i$d, i2n, i4d, i6d, i7d, i8d, i9d, iGd, iHd, iUd, iVd, iWd, ido, iji, iuo, j$d, j4d, j6d, j7d, j8d, j9d, jGd, jHd, jNn, jUd, jVi, jWd, jlo, juo, k$d, k4d, k6d, k7d, k8d, k9d, kGd, kHd, kUd, kUe, kWd, kuo, l$d, l4d, l6d, l7d, l8d, l9d, lGd, lHd, lUd, lVd, lWd, ldo, luo, m$d, m4d, m6d, m7d, m8d, m9d, mGd, mHd, mPe, mUd, mVd, mWd, mdo, met, muo, n$d, n2n, n4d, n6d, n7d, n8d, n9d, nGd, nHd, nUd, nVd, nWd, ndo, nji, nuo, o$d, o4d, o6d, o7d, o8d, o9d, oGd, oHd, oUd, oVd, oWd, odo, ouo, p$d, p4d, p6d, p7d, p8d, p9d, pGd, pHd, pPe, pUd, pVd, pWd, pdo, pet, puo, q$d, q4d, q5d, q6d, q7d, q8d, q9d, qGd, qHd, qNn, qUd, qVi, qWd, qlo, qse, quo, r$d, r2n, r4d, r6d, r7d, r8d, r9d, rGd, rHd, rUd, rVd, rWd, rdo, rji, ruo, s$d, s4d, s6d, s7d, s8d, s9d, sGd, sHd, sUd, sVd, sWd, sdo, suo, t$d, t2n, t4d, t6d, t7d, t8d, t9d, tGd, tHd, tUd, tVd, tWd, tdo, tji, tuo, u$d, u4d, u6d, u7d, u8d, u9d, uGd, uHd, uUd, uVd, uWd, udo, uuo, v$d, v4d, v6d, v7d, v8d, v9d, vGd, vHd, vUd, vVd, vWd, vdo, vet, vuo, w$d, w4d, w6d, w7d, w8d, w9d, wGd, wHd, wUd, wUe, wWd, wuo, x$d, x4d, x6d, x7d, x8d, x9d, xGd, xHd, xUd, xWd, xuo, y$d, y4d, y6d, y7d, y8d, y9d, yGd, yHd, yUd, yUe, yWd, yuo, z$d, z4d, z5d, z6d, z7d, z8d, z9d, zGd, zHd, zNn, zU, zUd, zVi, zWd, zlo, zuo };
var __wakaru_hm_initialized = false;
export function hm() {
if (__wakaru_hm_initialized) return;
__wakaru_hm_initialized = true;
"use strict";
x(), bi(), hu(), IR(), KEv(), wVi(), YEv(), Jm(), jno(), cco(), Uj(), zd(), Hu(), EA(), GQe(), Pj(), ulo(), G4i(), WNn(), K7t(), ql(), nX(), XEv(), jW(), $Nn(), Jh(), Ilo(), ZEv(), dPe = k.makeEnum("aiserver.v1.ManagerSpawnKind", [
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
]), JW = k.makeEnum("aiserver.v1.BackgroundComposerUpdateKind", [
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
]), q5d = k.makeEnum("aiserver.v1.BackgroundComposerMachinePressure", [
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
]), Pkt = k.makeEnum("aiserver.v1.BackgroundComposerApprovalState", [
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
]), DVi = k.makeEnum("aiserver.v1.BackgroundComposerApprovalKind", [
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
]), Alo = k.makeEnum("aiserver.v1.WakeBackgroundComposerReason", [
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
]), go = k.makeEnum("aiserver.v1.BackgroundComposerStatus", [
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
]), Yd = k.makeEnum("aiserver.v1.CloudAgentWorkflowStatus", [
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
]), Zc = k.makeEnum("aiserver.v1.BackgroundComposerSource", [
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
]), z5d = k.makeEnum("aiserver.v1.OwnerType", [
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
]), Rlo = k.makeEnum("aiserver.v1.CloudAgentDashboardRunStatus", [
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
]), K5d = k.makeEnum("aiserver.v1.CloudAgentDashboardRunSortField", [
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
]), Y5d = k.makeEnum("aiserver.v1.CloudAgentDashboardRunSortDirection", [
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
]), X5d = k.makeEnum("aiserver.v1.CloudAgentRunEventCategory", [
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
]), Z5d = k.makeEnum("aiserver.v1.CloudAgentRunEventLogLevel", [
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
]), eq = k.makeEnum("aiserver.v1.PRStatus", [
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
]), yUe = k.makeEnum("aiserver.v1.CloudSubagentParentAgentType", [
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
]), Dlo = k.makeEnum("aiserver.v1.CloudSubagentParentSpawnKind", [
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
]), Q5d = k.makeEnum("aiserver.v1.EnsembleStatus", [
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
]), IWt = k.makeEnum("aiserver.v1.StartTargetSelection", [
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
]), MVi = k.makeEnum("aiserver.v1.ForkBackgroundComposerMode", [
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
]), VNn = k.makeEnum("aiserver.v1.StreamConversationPurpose", [
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
]), Mlo = k.makeEnum("aiserver.v1.PlanFollowupType", [
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
]), het = k.makeEnum("aiserver.v1.CloudAgentTimingEventType", [
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
]), J5d = k.makeEnum("aiserver.v1.BackgroundComposerDesktopLeaseAction", [
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
]), pet = k.makeEnum("aiserver.v1.GithubAccessErrorType", [
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
]), met = k.makeEnum("aiserver.v1.EnvironmentWriteSource", [
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
]), e9d = k.makeEnum("aiserver.v1.EnvironmentType", [
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
]), jNn = k.makeEnum("aiserver.v1.LogicalEnvironmentScope", [
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
]), t9d = k.makeEnum("aiserver.v1.EnvironmentIneligibilityReason", [
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
]), Plo = k.makeEnum("aiserver.v1.EnvironmentBuildRowStatus", [
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
]), n9d = k.makeEnum("aiserver.v1.EnvironmentBuildRowTriggerType", [
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
]), i9d = k.makeEnum("aiserver.v1.EnvironmentBuildRowSource", [
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
]), r9d = k.makeEnum("aiserver.v1.EnvironmentBuildRowFailureType", [
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
]), s9d = k.makeEnum("aiserver.v1.EnvironmentBuildSnapshotReapState", [
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
]), Llo = k.makeEnum("aiserver.v1.MultiRepoEnvironmentReusePolicy", [
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
]), qNn = k.makeEnum("aiserver.v1.EnvironmentVersionSourceKind", [
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
]), Nlo = k.makeEnum("aiserver.v1.EnvironmentUpdateEventKind", [
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
]), Olo = k.makeEnum("aiserver.v1.AutoCreatePrSetting", [
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
]), o9d = k.makeEnum("aiserver.v1.BackgroundComposerQuickActionExecutionMode", [
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
]), a9d = k.makeEnum("aiserver.v1.BackgroundComposerQuickActionSubagentTemplateScope", [
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
]), c9d = k.makeEnum("aiserver.v1.BackgroundComposerQuickActionSubagentTemplateOperation", [
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
]), l9d = k.makeEnum("aiserver.v1.PRDeploymentState", [
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
]), u9d = k.makeEnum("aiserver.v1.PRDeploymentStatusState", [
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
]), zNn = k.makeEnum("aiserver.v1.PushPlatform", [
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
]), PVi = k.makeEnum("aiserver.v1.OriginAgentApprovalResolution", [
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
]), d9d = k.makeEnum("aiserver.v1.BackgroundComposerAccessDenialReason", [
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
]), Flo = k.makeEnum("aiserver.v1.StartingMessageType", [
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
]), h9d = k.makeEnum("aiserver.v1.CarriedRequestContextSource", [
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
]), Blo = k.makeEnum("aiserver.v1.OpenInteractionState", [
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
]), p9d = k.makeEnum("aiserver.v1.CloudAgentStartupWarningType", [
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
]), m9d = k.makeEnum("aiserver.v1.ModelRoutingLoadTestCancelOutcome", [
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
]), g9d = k.makeEnum("aiserver.v1.CloudAgentMemoryDbLogSource", [
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
]), Ulo = k.makeEnum("aiserver.v1.PrivateWorkerListScope", [
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
]), f9d = k.makeEnum("aiserver.v1.AdminKillBackgroundComposerSignalOutcome", [
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
]), v9d = k.makeEnum("aiserver.v1.AdminActiveBackgroundComposerExecutionEnvironment", [
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
]), _9d = k.makeEnum("aiserver.v1.PendingPrivateWorkerRequestEventType", [
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
]), LVi = k.makeEnum("aiserver.v1.PrivateWorkerPoolScope", [
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
]), b9d = k.makeEnum("aiserver.v1.PrivateWorkerStatusFilter", [
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
]), y9d = k.makeEnum("aiserver.v1.WriteCanvasFailReason", [
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
]), S9d = k.makeEnum("aiserver.v1.ReadCanvasFailReason", [
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
]), $lo = k.makeEnum("aiserver.v1.PromptUploadCompletionStatus", [
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
]), k9d = k.makeEnum("aiserver.v1.KeyringScope", [
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
]), w9d = k.makeEnum("aiserver.v1.KeyringListMode", [
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
]), KNn = k.makeEnum("aiserver.v1.KeyringPrincipalType", [
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
]), NVi = k.makeEnum("aiserver.v1.KeyringAccessLevel", [
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
]), C9d = k.makeMessageType("aiserver.v1.UpdateBackgroundComposerEnvironmentRequest", ()=>[
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
    ]), T9d = k.makeMessageType("aiserver.v1.UpdateBackgroundComposerEnvironmentResponse", ()=>[
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
    ]), YNn = k.makeMessageType("aiserver.v1.GetOptimizedDiffDetailsRequest", ()=>[
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
    ]), XNn = k.makeMessageType("aiserver.v1.GetOptimizedDiffDetailsResponse", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: y5
        },
        {
            no: 2,
            name: "submodule_diffs",
            kind: "message",
            T: E9d,
            repeated: !0
        }
    ]), E9d = k.makeMessageType("aiserver.v1.GetOptimizedDiffDetailsResponse.SubmoduleDiff", ()=>[
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
            T: y5
        },
        {
            no: 3,
            name: "errored",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "GetOptimizedDiffDetailsResponse_SubmoduleDiff"
}), x9d = k.makeMessageType("aiserver.v1.NotifyBackgroundComposerShownRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), I9d = k.makeMessageType("aiserver.v1.NotifyBackgroundComposerShownResponse", []), A9d = k.makeMessageType("aiserver.v1.RenameBackgroundComposerRequest", ()=>[
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
    ]), R9d = k.makeMessageType("aiserver.v1.RenameBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), AWt = k.makeMessageType("aiserver.v1.ProjectAppearance", ()=>[
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
    ]), ZNn = k.makeMessageType("aiserver.v1.ProjectMetadata", ()=>[
        {
            no: 1,
            name: "appearance",
            kind: "message",
            T: AWt,
            opt: !0
        }
    ]), Hlo = k.makeMessageType("aiserver.v1.UpdateProjectAppearanceRequest", ()=>[
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
            T: AWt
        }
    ]), D9d = k.makeMessageType("aiserver.v1.UpdateProjectAppearanceResponse", ()=>[
        {
            no: 1,
            name: "project_metadata",
            kind: "message",
            T: ZNn
        }
    ]), Wlo = k.makeMessageType("aiserver.v1.StagedProject", ()=>[
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
            T: AWt
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
            T: k.getEnumType(M9d)
        }
    ]), M9d = k.makeEnum("aiserver.v1.StagedProject.InstantCreateIneligibleReason", [
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
]), P9d = k.makeMessageType("aiserver.v1.LocalChatEvidence", ()=>[
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
    ]), Glo = k.makeMessageType("aiserver.v1.LocalEvidencePayload", ()=>[
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
            T: k.getEnumType(L9d)
        },
        {
            no: 3,
            name: "chats",
            kind: "message",
            T: P9d,
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
    ]), L9d = k.makeEnum("aiserver.v1.LocalEvidencePayload.Consent", [
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
]), N9d = k.makeMessageType("aiserver.v1.SeedStagedProjectsRequest", ()=>[
        {
            no: 1,
            name: "local_evidence",
            kind: "message",
            T: Glo
        },
        {
            no: 2,
            name: "allow_existing_projects",
            kind: "scalar",
            T: 8
        }
    ]), O9d = k.makeMessageType("aiserver.v1.SeedStagedProjectsResponse", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: k.getEnumType(F9d)
        },
        {
            no: 2,
            name: "staged_projects",
            kind: "message",
            T: Wlo,
            repeated: !0
        }
    ]), F9d = k.makeEnum("aiserver.v1.SeedStagedProjectsResponse.Outcome", [
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
]), B9d = k.makeMessageType("aiserver.v1.ListStagedProjectsRequest", []), U9d = k.makeMessageType("aiserver.v1.ListStagedProjectsResponse", ()=>[
        {
            no: 1,
            name: "staged_projects",
            kind: "message",
            T: Wlo,
            repeated: !0
        }
    ]), $9d = k.makeMessageType("aiserver.v1.DismissStagedProjectRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), H9d = k.makeMessageType("aiserver.v1.DismissStagedProjectResponse", []), W9d = k.makeMessageType("aiserver.v1.PreviewStagedProjectsRequest", ()=>[
        {
            no: 1,
            name: "local_evidence",
            kind: "message",
            T: Glo
        }
    ]), G9d = k.makeMessageType("aiserver.v1.DeleteStagedProjectsRequest", []), V9d = k.makeMessageType("aiserver.v1.DeleteStagedProjectsResponse", ()=>[
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
    ]), j9d = k.makeMessageType("aiserver.v1.PreviewStagedProjectCandidate", ()=>[
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
    ]), q9d = k.makeMessageType("aiserver.v1.PreviewStagedProjectsDiagnostics", ()=>[
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
            T: k.getEnumType(z9d)
        },
        {
            no: 11,
            name: "guidance_source",
            kind: "enum",
            T: k.getEnumType(K9d)
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
            T: k.getEnumType(Y9d)
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
            T: k.getEnumType(X9d)
        },
        {
            no: 25,
            name: "local_payload_rejection",
            kind: "enum",
            T: k.getEnumType(Z9d)
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
            T: k.getEnumType(Q9d)
        },
        {
            no: 40,
            name: "privacy_mode",
            kind: "enum",
            T: k.getEnumType(xl)
        }
    ]), z9d = k.makeEnum("aiserver.v1.PreviewStagedProjectsDiagnostics.ResultTextPolicy", [
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
]), K9d = k.makeEnum("aiserver.v1.PreviewStagedProjectsDiagnostics.GuidanceSource", [
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
]), Y9d = k.makeEnum("aiserver.v1.PreviewStagedProjectsDiagnostics.MalformedShape", [
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
]), X9d = k.makeEnum("aiserver.v1.PreviewStagedProjectsDiagnostics.LocalEvidencePolicy", [
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
]), Z9d = k.makeEnum("aiserver.v1.PreviewStagedProjectsDiagnostics.LocalPayloadRejection", [
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
]), Q9d = k.makeEnum("aiserver.v1.PreviewStagedProjectsDiagnostics.NoEvidenceReason", [
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
]), J9d = k.makeMessageType("aiserver.v1.PreviewStagedProjectsResponse", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: k.getEnumType(e6d)
        },
        {
            no: 2,
            name: "candidates",
            kind: "message",
            T: j9d,
            repeated: !0
        },
        {
            no: 3,
            name: "diagnostics",
            kind: "message",
            T: q9d
        }
    ]), e6d = k.makeEnum("aiserver.v1.PreviewStagedProjectsResponse.Outcome", [
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
]), t6d = k.makeMessageType("aiserver.v1.PublishBackgroundComposerTempRepoRequest", ()=>[
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
            T: k.getEnumType(Vlo)
        }
    ]), Vlo = k.makeEnum("aiserver.v1.PublishBackgroundComposerTempRepoRequest.Visibility", [
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
]), n6d = k.makeMessageType("aiserver.v1.PublishBackgroundComposerTempRepoResponse", ()=>[
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
            T: k.getEnumType(Vlo)
        }
    ]), i6d = k.makeMessageType("aiserver.v1.ReparentBackgroundComposerRequest", ()=>[
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
            T: k.getEnumType(yUe)
        },
        {
            no: 4,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        }
    ]), r6d = k.makeMessageType("aiserver.v1.ReparentBackgroundComposerResponse", []), s6d = k.makeMessageType("aiserver.v1.SetWorkerManagerRequest", ()=>[
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
            T: k.getEnumType(dPe)
        },
        {
            no: 4,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), o6d = k.makeMessageType("aiserver.v1.SetWorkerManagerResponse", []), a6d = k.makeMessageType("aiserver.v1.CreateProjectWorkerRequest", ()=>[
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
            T: kUe
        }
    ]), c6d = k.makeMessageType("aiserver.v1.CreateProjectWorkerResponse", ()=>[
        {
            no: 1,
            name: "composer",
            kind: "message",
            T: qse
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
    ]), jlo = k.makeMessageType("aiserver.v1.ClearWorkerManagerRequest", ()=>[
        {
            no: 1,
            name: "worker_bc_id",
            kind: "scalar",
            T: 9
        }
    ]), l6d = k.makeMessageType("aiserver.v1.ClearWorkerManagerResponse", []), qlo = k.makeMessageType("aiserver.v1.ListWorkersForManagerRequest", ()=>[
        {
            no: 1,
            name: "manager_bc_id",
            kind: "scalar",
            T: 9
        }
    ]), zlo = k.makeMessageType("aiserver.v1.WorkerManagerMembership", ()=>[
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
            T: k.getEnumType(dPe)
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
            T: k.getEnumType(go)
        }
    ]), Klo = k.makeMessageType("aiserver.v1.ListWorkersForManagerResponse", ()=>[
        {
            no: 1,
            name: "memberships",
            kind: "message",
            T: zlo,
            repeated: !0
        }
    ]), u6d = k.makeMessageType("aiserver.v1.ListProjectSubtreesRequest", ()=>[
        {
            no: 1,
            name: "root_bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), d6d = k.makeMessageType("aiserver.v1.ProjectSubtreeStatusCount", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(go)
        },
        {
            no: 2,
            name: "count",
            kind: "scalar",
            T: 5
        }
    ]), h6d = k.makeMessageType("aiserver.v1.ProjectSubtreeNode", ()=>[
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
            T: k.getEnumType(go)
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
            T: k.getEnumType(go),
            opt: !0
        }
    ]), p6d = k.makeMessageType("aiserver.v1.ProjectSubtree", ()=>[
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
            T: d6d,
            repeated: !0
        },
        {
            no: 3,
            name: "nodes",
            kind: "message",
            T: h6d,
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
            T: k.getEnumType(go),
            opt: !0
        },
        {
            no: 8,
            name: "omitted_active_count",
            kind: "scalar",
            T: 5
        }
    ]), m6d = k.makeMessageType("aiserver.v1.ListProjectSubtreesResponse", ()=>[
        {
            no: 1,
            name: "subtrees",
            kind: "message",
            T: p6d,
            repeated: !0
        }
    ]), g6d = k.makeMessageType("aiserver.v1.BackgroundComposerApprovalPullRequestFile", ()=>[
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
    ]), f6d = k.makeMessageType("aiserver.v1.BackgroundComposerApprovalPullRequestAuthor", ()=>[
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
    ]), v6d = k.makeMessageType("aiserver.v1.BackgroundComposerApprovalPullRequest", ()=>[
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
            T: f6d,
            opt: !0
        },
        {
            no: 13,
            name: "file_entries",
            kind: "message",
            T: g6d,
            repeated: !0
        },
        {
            no: 14,
            name: "merge_method",
            kind: "scalar",
            T: 9
        }
    ]), Ylo = k.makeMessageType("aiserver.v1.BackgroundComposerApprovalUpdate", ()=>[
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
            T: k.getEnumType(Pkt)
        },
        {
            no: 3,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(DVi)
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
            T: v6d,
            opt: !0
        }
    ]), OVi = k.makeMessageType("aiserver.v1.BackgroundComposerUpdateEvent", ()=>[
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
            T: k.getEnumType(JW)
        },
        {
            no: 3,
            name: "workflow_status",
            kind: "enum",
            T: k.getEnumType(Yd)
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
            T: k.getEnumType(Zc)
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
            T: Ylo,
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
            T: k.getEnumType(q5d),
            opt: !0
        },
        {
            no: 18,
            name: "is_subtree_rollup",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Xlo = k.makeMessageType("aiserver.v1.StreamBackgroundComposerUpdatesRequest", ()=>[
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
            T: k.getEnumType(Zc),
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
    ]), FVi = k.makeMessageType("aiserver.v1.StreamBackgroundComposerUpdatesResponse", ()=>[
        {
            no: 1,
            name: "snapshot",
            kind: "message",
            T: Zlo,
            oneof: "response"
        },
        {
            no: 2,
            name: "event",
            kind: "message",
            T: Qlo,
            oneof: "response"
        },
        {
            no: 3,
            name: "heartbeat",
            kind: "message",
            T: _6d,
            oneof: "response"
        }
    ]), Zlo = k.makeMessageType("aiserver.v1.BackgroundComposerUpdatesSnapshot", ()=>[
        {
            no: 1,
            name: "list",
            kind: "message",
            T: JNn
        },
        {
            no: 2,
            name: "resume_cursor",
            kind: "scalar",
            T: 9
        }
    ]), Qlo = k.makeMessageType("aiserver.v1.BackgroundComposerUpdateEventWithCursor", ()=>[
        {
            no: 1,
            name: "event",
            kind: "message",
            T: OVi
        },
        {
            no: 2,
            name: "resume_cursor",
            kind: "scalar",
            T: 9
        }
    ]), _6d = k.makeMessageType("aiserver.v1.BackgroundComposerUpdatesHeartbeat", ()=>[
        {
            no: 1,
            name: "resume_cursor",
            kind: "scalar",
            T: 9
        }
    ]), Jlo = k.makeMessageType("aiserver.v1.UpdateBackgroundComposerExperimentalModelOptOutRequest", ()=>[
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
    ]), b6d = k.makeMessageType("aiserver.v1.UpdateBackgroundComposerExperimentalModelOptOutResponse", []), y6d = k.makeMessageType("aiserver.v1.RefreshGithubAccessTokenInBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), S6d = k.makeMessageType("aiserver.v1.RefreshGithubAccessTokenInBackgroundComposerResponse", []), k6d = k.makeMessageType("aiserver.v1.CreateBackgroundComposerPodRequest", ()=>[
        {
            no: 1,
            name: "devcontainer_starting_point",
            kind: "message",
            T: SUe
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
    ]), w6d = k.makeMessageType("aiserver.v1.CreateBackgroundComposerPodResponse", ()=>[
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
    ]), C6d = k.makeMessageType("aiserver.v1.PreWarmPodRequest", ()=>[
        {
            no: 1,
            name: "start_request",
            kind: "message",
            T: kUe
        }
    ]), T6d = k.makeMessageType("aiserver.v1.PreWarmPodResponse", []), euo = k.makeMessageType("aiserver.v1.WakeBackgroundComposerRequest", ()=>[
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
            T: k.getEnumType(Alo)
        }
    ]), tuo = k.makeMessageType("aiserver.v1.WakeBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "signaled",
            kind: "scalar",
            T: 8
        }
    ]), E6d = k.makeMessageType("aiserver.v1.AttachBackgroundComposerPodRequest", ()=>[
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
    ]), x6d = k.makeMessageType("aiserver.v1.AttachBackgroundComposerPodResponse", ()=>[
        {
            no: 1,
            name: "event",
            kind: "message",
            T: I6d
        },
        {
            no: 2,
            name: "updated_status",
            kind: "message",
            T: oco
        }
    ]), I6d = k.makeMessageType("aiserver.v1.AttachBackgroundComposerPodResponse.Event", ()=>[
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
            T: kVi
        }
    ], {
    localName: "AttachBackgroundComposerPodResponse_Event"
}), A6d = k.makeMessageType("aiserver.v1.CreateBackgroundComposerPodSnapshotRequest", ()=>[
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
            T: k.getEnumType(RWt)
        },
        {
            no: 3,
            name: "bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), R6d = k.makeMessageType("aiserver.v1.CreateBackgroundComposerPodSnapshotResponse", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        }
    ]), D6d = k.makeMessageType("aiserver.v1.ChangeBackgroundComposerSnapshotVisibilityRequest", ()=>[
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
            T: k.getEnumType(RWt)
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9
        }
    ]), RWt = k.makeEnum("aiserver.v1.ChangeBackgroundComposerSnapshotVisibilityRequest.Visibility", [
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
]), M6d = k.makeMessageType("aiserver.v1.ChangeBackgroundComposerSnapshotVisibilityResponse", []), P6d = k.makeMessageType("aiserver.v1.GetBackgroundComposerSnapshotInfoRequest", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        }
    ]), L6d = k.makeMessageType("aiserver.v1.GetBackgroundComposerSnapshotInfoResponse", ()=>[
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
            T: k.getEnumType(RWt)
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
    ]), N6d = k.makeMessageType("aiserver.v1.ListBackgroundComposerSnapshotsByBcIdRequest", ()=>[
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
    ]), O6d = k.makeMessageType("aiserver.v1.BackgroundComposerSnapshotSummary", ()=>[
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
            T: k.getEnumType(RWt)
        },
        {
            no: 3,
            name: "created_at_ms",
            kind: "scalar",
            T: 1
        }
    ]), F6d = k.makeMessageType("aiserver.v1.ListBackgroundComposerSnapshotsByBcIdResponse", ()=>[
        {
            no: 1,
            name: "snapshots",
            kind: "message",
            T: O6d,
            repeated: !0
        }
    ]), B6d = k.makeMessageType("aiserver.v1.ListBackgroundComposerSnapshotStatusesByBcIdsRequest", ()=>[
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
    ]), U6d = k.makeMessageType("aiserver.v1.BackgroundComposerSnapshotStatusByBcId", ()=>[
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
            T: k.getEnumType(RWt),
            opt: !0
        },
        {
            no: 4,
            name: "created_at_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ]), $6d = k.makeMessageType("aiserver.v1.ListBackgroundComposerSnapshotStatusesByBcIdsResponse", ()=>[
        {
            no: 1,
            name: "snapshot_statuses",
            kind: "message",
            T: U6d,
            repeated: !0
        }
    ]), H6d = k.makeMessageType("aiserver.v1.GetBackgroundComposerSnapshotStateRequest", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        }
    ]), W6d = k.makeMessageType("aiserver.v1.GetBackgroundComposerSnapshotStateResponse", ()=>[
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
            T: k.getEnumType(aco)
        },
        {
            no: 3,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), G6d = k.makeMessageType("aiserver.v1.WatchBackgroundComposerSnapshotStateRequest", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        }
    ]), V6d = k.makeMessageType("aiserver.v1.WatchBackgroundComposerSnapshotStateResponse", ()=>[
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
            T: k.getEnumType(aco)
        },
        {
            no: 3,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), j6d = k.makeMessageType("aiserver.v1.GetBackgroundComposerChangesHashRequest", ()=>[
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
    ]), q6d = k.makeMessageType("aiserver.v1.GetBackgroundComposerChangesHashResponse", ()=>[
        {
            no: 1,
            name: "hash",
            kind: "scalar",
            T: 9
        }
    ]), z6d = k.makeMessageType("aiserver.v1.GetBackgroundComposerDiffDetailsRequest", ()=>[
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
    ]), K6d = k.makeMessageType("aiserver.v1.BackgroundComposerFullDiff", ()=>[
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
            T: y5
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
    ]), Y6d = k.makeMessageType("aiserver.v1.GetBackgroundComposerDiffDetailsResponse", ()=>[
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
            T: K6d,
            repeated: !0
        },
        {
            no: 4,
            name: "git_diffs",
            kind: "message",
            T: y5,
            repeated: !0
        }
    ]), X6d = k.makeMessageType("aiserver.v1.SideChatInfo", ()=>[
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
    ]), BVi = k.makeMessageType("aiserver.v1.StartSideChatBackgroundComposerRequest", ()=>[
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
            T: k.getEnumType(Zc)
        },
        {
            no: 4,
            name: "creation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Z6d = k.makeMessageType("aiserver.v1.StartSideChatBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "composer",
            kind: "message",
            T: qse
        }
    ]), nuo = k.makeMessageType("aiserver.v1.ListBackgroundComposerChildrenRequest", ()=>[
        {
            no: 1,
            name: "parent_bc_id",
            kind: "scalar",
            T: 9
        }
    ]), Q6d = k.makeMessageType("aiserver.v1.ListBackgroundComposerChildrenResponse", ()=>[
        {
            no: 1,
            name: "composers",
            kind: "message",
            T: qse,
            repeated: !0
        }
    ]), J6d = k.makeMessageType("aiserver.v1.OwnerIdentifier", ()=>[
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
            T: k.getEnumType(z5d)
        }
    ]), iuo = k.makeMessageType("aiserver.v1.OwnerFilter", ()=>[
        {
            no: 1,
            name: "owners",
            kind: "message",
            T: J6d,
            repeated: !0
        }
    ]), ruo = k.makeMessageType("aiserver.v1.PrAgentView", ()=>[
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
            T: H3s,
            opt: !0
        }
    ]), e4d = k.makeMessageType("aiserver.v1.ListPrBackgroundComposersRequest", ()=>[
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
            T: j3
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
    ]), t4d = k.makeMessageType("aiserver.v1.ListPrBackgroundComposersResponse", ()=>[
        {
            no: 1,
            name: "involved_composers",
            kind: "message",
            T: qse,
            repeated: !0
        },
        {
            no: 2,
            name: "other_composers",
            kind: "message",
            T: qse,
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
            T: qse,
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
            T: QNn,
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
            T: qse,
            repeated: !0
        },
        {
            no: 13,
            name: "coordinator_composers",
            kind: "message",
            T: qse,
            repeated: !0
        }
    ]), get = k.makeMessageType("aiserver.v1.ListDetailedBackgroundComposersRequest", ()=>[
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
            T: iuo,
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
            T: j3
        }
    ]), suo = k.makeMessageType("aiserver.v1.ListDetailedBackgroundComposersResponse", ()=>[
        {
            no: 1,
            name: "composers",
            kind: "message",
            T: Nkt,
            repeated: !0
        },
        {
            no: 2,
            name: "participants",
            kind: "message",
            T: QNn,
            repeated: !0
        }
    ]), n4d = k.makeMessageType("aiserver.v1.CloudAgentDashboardRunSort", ()=>[
        {
            no: 1,
            name: "field",
            kind: "enum",
            T: k.getEnumType(K5d)
        },
        {
            no: 2,
            name: "direction",
            kind: "enum",
            T: k.getEnumType(Y5d)
        }
    ]), ouo = k.makeMessageType("aiserver.v1.CloudAgentRunsCursor", ()=>[
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
    ]), auo = k.makeMessageType("aiserver.v1.CloudAgentDashboardRunFilter", ()=>[
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
            T: k.getEnumType(N$),
            repeated: !0
        },
        {
            no: 5,
            name: "statuses",
            kind: "enum",
            T: k.getEnumType(Rlo),
            repeated: !0
        },
        {
            no: 6,
            name: "created_by_user_id",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), i4d = k.makeMessageType("aiserver.v1.ListCloudAgentRunsForDashboardRequest", ()=>[
        {
            no: 1,
            name: "filter",
            kind: "message",
            T: auo
        },
        {
            no: 2,
            name: "sort",
            kind: "message",
            T: n4d
        },
        {
            no: 3,
            name: "cursor",
            kind: "message",
            T: ouo,
            opt: !0
        }
    ]), cuo = k.makeMessageType("aiserver.v1.CloudAgentDashboardRunRow", ()=>[
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
            T: k.getEnumType(N$)
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
            T: k.getEnumType(Rlo)
        }
    ]), r4d = k.makeMessageType("aiserver.v1.ListCloudAgentRunsForDashboardResponse", ()=>[
        {
            no: 1,
            name: "rows",
            kind: "message",
            T: cuo,
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
            T: ouo,
            opt: !0
        }
    ]), s4d = k.makeMessageType("aiserver.v1.AggregateCloudAgentRunsForDashboardRequest", ()=>[
        {
            no: 1,
            name: "filter",
            kind: "message",
            T: auo
        },
        {
            no: 2,
            name: "tz_offset_minutes",
            kind: "scalar",
            T: 5
        }
    ]), o4d = k.makeMessageType("aiserver.v1.CloudAgentDashboardRunDayBucket", ()=>[
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
    ]), a4d = k.makeMessageType("aiserver.v1.AggregateCloudAgentRunsForDashboardResponse", ()=>[
        {
            no: 1,
            name: "buckets",
            kind: "message",
            T: o4d,
            repeated: !0
        }
    ]), c4d = k.makeMessageType("aiserver.v1.GetCloudAgentRunForDashboardRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), l4d = k.makeMessageType("aiserver.v1.GetCloudAgentRunForDashboardResponse", ()=>[
        {
            no: 1,
            name: "row",
            kind: "message",
            T: cuo
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), u4d = k.makeMessageType("aiserver.v1.CloudAgentRunEvent", ()=>[
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
            T: k.getEnumType(X5d)
        },
        {
            no: 4,
            name: "log_level",
            kind: "enum",
            T: k.getEnumType(Z5d)
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
    ]), d4d = k.makeMessageType("aiserver.v1.ListCloudAgentRunEventsForDashboardRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), h4d = k.makeMessageType("aiserver.v1.ListCloudAgentRunEventsForDashboardResponse", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: u4d,
            repeated: !0
        }
    ]), luo = k.makeMessageType("aiserver.v1.PauseBackgroundComposerRequest", ()=>[
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
            T: k.getEnumType(Zc)
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
            T: j3
        }
    ]), uuo = k.makeMessageType("aiserver.v1.PauseBackgroundComposerResponse", []), p4d = k.makeMessageType("aiserver.v1.CancelBackgroundComposerToolCallRequest", ()=>[
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
            T: k.getEnumType(Zc)
        }
    ]), m4d = k.makeMessageType("aiserver.v1.CancelBackgroundComposerToolCallResponse", ()=>[
        {
            no: 1,
            name: "accepted",
            kind: "scalar",
            T: 8
        }
    ]), g4d = k.makeMessageType("aiserver.v1.ArchiveBackgroundComposerRequest", ()=>[
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
            T: k.getEnumType(Zc)
        },
        {
            no: 5,
            name: "close_pull_request",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), f4d = k.makeMessageType("aiserver.v1.ArchiveBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "closed_pull_request",
            kind: "scalar",
            T: 8
        }
    ]), duo = k.makeMessageType("aiserver.v1.ArchiveRepoBackgroundComposersRequest", ()=>[
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
            T: k.getEnumType(Zc)
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
            T: v4d,
            opt: !0
        },
        {
            no: 7,
            name: "include_sources",
            kind: "enum",
            T: k.getEnumType(Zc),
            repeated: !0
        }
    ]), v4d = k.makeMessageType("aiserver.v1.RepoArchiveEnvironmentScope", ()=>[
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
    ]), _4d = k.makeMessageType("aiserver.v1.ArchiveRepoBackgroundComposersResponse", ()=>[
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
    ]), b4d = k.makeMessageType("aiserver.v1.DeleteBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), y4d = k.makeMessageType("aiserver.v1.DeleteBackgroundComposerResponse", []), S4d = k.makeMessageType("aiserver.v1.ResumeBackgroundComposerRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), k4d = k.makeMessageType("aiserver.v1.ResumeBackgroundComposerResponse", []), huo = k.makeMessageType("aiserver.v1.GetCursorServerUrlRequest", ()=>[
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
    ]), w4d = k.makeMessageType("aiserver.v1.GetCursorServerUrlResponse", ()=>[
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
            T: C4d,
            repeated: !0
        },
        {
            no: 5,
            name: "upgrade_path",
            kind: "scalar",
            T: 9
        }
    ]), C4d = k.makeMessageType("aiserver.v1.GetCursorServerUrlResponse.Header", ()=>[
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
}), T4d = k.makeMessageType("aiserver.v1.WarmCursorServerDownloadRequest", ()=>[
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
    ]), E4d = k.makeMessageType("aiserver.v1.WarmCursorServerDownloadResponse", ()=>[
        {
            no: 1,
            name: "already_downloaded",
            kind: "scalar",
            T: 8
        }
    ]), x4d = k.makeMessageType("aiserver.v1.MakePRBackgroundComposerRequest", ()=>[
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
    ]), I4d = k.makeMessageType("aiserver.v1.MakePRBackgroundComposerResponse", ()=>[
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
    ]), A4d = k.makeMessageType("aiserver.v1.OpenPRBackgroundComposerRequest", ()=>[
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
    ]), R4d = k.makeMessageType("aiserver.v1.OpenPRBackgroundComposerResponse", ()=>[
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
    ]), DWt = k.makeMessageType("aiserver.v1.ListBackgroundComposersRequest", ()=>[
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
            T: k.getEnumType(Zc),
            repeated: !0
        },
        {
            no: 8,
            name: "owner_filter",
            kind: "message",
            T: iuo,
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
            T: k.getEnumType(Zc),
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
            T: k.getEnumType(UVi),
            opt: !0
        },
        {
            no: 24,
            name: "archived_filter",
            kind: "enum",
            T: k.getEnumType($Vi),
            opt: !0
        },
        {
            no: 25,
            name: "include_stored_prs",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), UVi = k.makeEnum("aiserver.v1.ListBackgroundComposersRequest.ProjectFilter", [
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
]), $Vi = k.makeEnum("aiserver.v1.ListBackgroundComposersRequest.ArchivedFilter", [
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
]), qse = k.makeMessageType("aiserver.v1.BackgroundComposer", ()=>[
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
            T: k.getEnumType(go)
        },
        {
            no: 77,
            name: "workflow_status",
            kind: "enum",
            T: k.getEnumType(Yd)
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
            T: k.getEnumType(Zc)
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
            T: xf,
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
            T: k.getEnumType(Q5d)
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
            T: k.getEnumType(eq),
            opt: !0
        },
        {
            no: 57,
            name: "external_source_metadata",
            kind: "message",
            T: muo,
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
            T: MD,
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
            T: MWt,
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
            T: fet,
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
            T: HVi,
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
            T: X6d,
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
            T: ZNn,
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
            T: Auo,
            repeated: !0
        }
    ]), QNn = k.makeMessageType("aiserver.v1.BackgroundComposerParticipant", ()=>[
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
    ]), puo = k.makeMessageType("aiserver.v1.NamedAgentProfile", ()=>[
        {
            no: 1,
            name: "profile_picture_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), D4d = k.makeMessageType("aiserver.v1.NamedAgentSession", ()=>[
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
    ]), M4d = k.makeMessageType("aiserver.v1.NamedAgent", ()=>[
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
            T: QNn,
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
            T: puo,
            opt: !0
        }
    ]), P4d = k.makeMessageType("aiserver.v1.ListNamedAgentsRequest", []), L4d = k.makeMessageType("aiserver.v1.ListNamedAgentsResponse", ()=>[
        {
            no: 1,
            name: "agents",
            kind: "message",
            T: M4d,
            repeated: !0
        }
    ]), N4d = k.makeMessageType("aiserver.v1.ListNamedAgentSessionsRequest", ()=>[
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
    ]), O4d = k.makeMessageType("aiserver.v1.ListNamedAgentSessionsResponse", ()=>[
        {
            no: 1,
            name: "sessions",
            kind: "message",
            T: D4d,
            repeated: !0
        },
        {
            no: 2,
            name: "next_page_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), F4d = k.makeMessageType("aiserver.v1.EventSubscription", ()=>[
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
    ]), B4d = k.makeMessageType("aiserver.v1.ListEventSubscriptionsRequest", ()=>[
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
    ]), U4d = k.makeMessageType("aiserver.v1.ListEventSubscriptionsResponse", ()=>[
        {
            no: 1,
            name: "subscriptions",
            kind: "message",
            T: F4d,
            repeated: !0
        }
    ]), $4d = k.makeMessageType("aiserver.v1.CloseEventSubscriptionRequest", ()=>[
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
    ]), H4d = k.makeMessageType("aiserver.v1.CloseEventSubscriptionResponse", ()=>[
        {
            no: 1,
            name: "closed",
            kind: "scalar",
            T: 8
        }
    ]), muo = k.makeMessageType("aiserver.v1.ExternalSourceMetadata", ()=>[
        {
            no: 1,
            name: "slack",
            kind: "message",
            T: V4d,
            opt: !0
        },
        {
            no: 2,
            name: "linear",
            kind: "message",
            T: j4d,
            opt: !0
        },
        {
            no: 3,
            name: "github",
            kind: "message",
            T: q4d,
            opt: !0
        },
        {
            no: 4,
            name: "gitlab",
            kind: "message",
            T: z4d,
            opt: !0
        }
    ]), fet = k.makeMessageType("aiserver.v1.PrivateWorkspaceIdentifier", ()=>[
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
    ]), HVi = k.makeMessageType("aiserver.v1.AgentWorkspaceBinding", ()=>[
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
            T: fet,
            opt: !0
        }
    ]), W4d = k.makeMessageType("aiserver.v1.CloudSubagentTaskLineage", ()=>[
        {
            no: 1,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), G4d = k.makeMessageType("aiserver.v1.CloudSubagentSubscriptionResourceLineage", ()=>[
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
    ]), MWt = k.makeMessageType("aiserver.v1.CloudSubagentParentReference", ()=>[
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
            T: k.getEnumType(yUe)
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
            T: k.getEnumType(Dlo),
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
            T: W4d,
            oneof: "lineage"
        },
        {
            no: 9,
            name: "subscription_resource",
            kind: "message",
            T: G4d,
            oneof: "lineage"
        }
    ]), V4d = k.makeMessageType("aiserver.v1.SlackSourceMetadata", ()=>[
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
    ]), j4d = k.makeMessageType("aiserver.v1.LinearSourceMetadata", ()=>[
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
    ]), q4d = k.makeMessageType("aiserver.v1.GithubSourceMetadata", ()=>[
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
    ]), z4d = k.makeMessageType("aiserver.v1.GitlabSourceMetadata", ()=>[
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
    ]), guo = k.makeMessageType("aiserver.v1.PinBackgroundComposersRequest", ()=>[
        {
            no: 1,
            name: "bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), K4d = k.makeMessageType("aiserver.v1.PinBackgroundComposersResponse", []), fuo = k.makeMessageType("aiserver.v1.UnpinBackgroundComposersRequest", ()=>[
        {
            no: 1,
            name: "bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Y4d = k.makeMessageType("aiserver.v1.UnpinBackgroundComposersResponse", []), JNn = k.makeMessageType("aiserver.v1.ListBackgroundComposersResponse", ()=>[
        {
            no: 1,
            name: "composers",
            kind: "message",
            T: qse,
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
            T: QNn,
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
    ]), X4d = k.makeMessageType("aiserver.v1.EnvironmentRepoEntry", ()=>[
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
    ]), Z4d = k.makeMessageType("aiserver.v1.EnvironmentJsonFileLocation", ()=>[
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
    ]), Dde = k.makeMessageType("aiserver.v1.EnvironmentRepoConfig", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "message",
            T: X4d,
            repeated: !0
        },
        {
            no: 2,
            name: "environment_json_location",
            kind: "message",
            T: Z4d,
            opt: !0
        }
    ]), PWt = k.makeMessageType("aiserver.v1.RepoStartingRef", ()=>[
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
    ]), SUe = k.makeMessageType("aiserver.v1.DevcontainerStartingPoint", ()=>[
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
            T: y5
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
            T: Dde,
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
            T: PWt,
            repeated: !0
        },
        {
            no: 17,
            name: "target_selection",
            kind: "enum",
            T: k.getEnumType(IWt),
            opt: !0
        }
    ]), vuo = k.makeMessageType("aiserver.v1.GrindModeConfig", ()=>[
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
            T: k.getEnumType(Q4d)
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
    ]), Q4d = k.makeEnum("aiserver.v1.GrindModeConfig.Phase", [
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
]), J4d = k.makeMessageType("aiserver.v1.AdmittedCustomModeState", ()=>[
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
            name: "icon",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "color",
            kind: "scalar",
            T: 9,
            opt: !0
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
            no: 8,
            name: "active_reminder",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "admitted_by_turn_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "managed_skill_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), eUd = k.makeMessageType("aiserver.v1.EnvironmentSetupRunStartedMetadata", ()=>[
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
    ]), tUd = k.makeMessageType("aiserver.v1.CloudAgentEvalOverrides", ()=>[
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
    ]), kUe = k.makeMessageType("aiserver.v1.StartBackgroundComposerFromSnapshotRequest", ()=>[
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
            T: SUe
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
            T: nUd,
            repeated: !0
        },
        {
            no: 4,
            name: "model_details",
            kind: "message",
            T: xf
        },
        {
            no: 16,
            name: "additional_model_details",
            kind: "message",
            T: xf,
            repeated: !0
        },
        {
            no: 58,
            name: "requested_models",
            kind: "message",
            T: MD,
            repeated: !0
        },
        {
            no: 5,
            name: "repository_info",
            kind: "message",
            T: BUd
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
            T: Vle,
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
            T: Uv,
            repeated: !0
        },
        {
            no: 23,
            name: "source",
            kind: "enum",
            T: k.getEnumType(Zc),
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
            T: A3t,
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
            T: muo,
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
            T: iUd,
            opt: !0
        },
        {
            no: 41,
            name: "starting_message_type",
            kind: "enum",
            T: k.getEnumType(Flo),
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
            T: x1,
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
            T: Hm,
            opt: !0
        },
        {
            no: 48,
            name: "pre_fetched_blobs",
            kind: "message",
            T: zU,
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
            T: vuo,
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
            T: Mde,
            repeated: !0
        },
        {
            no: 97,
            name: "private_worker_owner_filter",
            kind: "message",
            T: rji,
            opt: !0
        },
        {
            no: 100,
            name: "private_workspace_identifier",
            kind: "message",
            T: fet,
            opt: !0
        },
        {
            no: 110,
            name: "workspace_binding",
            kind: "message",
            T: HVi,
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
            T: k.getEnumType(YHi),
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
            T: Fyt,
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
            T: VUt,
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
            T: MWt,
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
            T: pco,
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
            T: puo,
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
            T: eUd,
            opt: !0
        },
        {
            no: 119,
            name: "project_details",
            kind: "message",
            T: Wyt,
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
            T: xDn,
            opt: !0
        },
        {
            no: 122,
            name: "project_metadata",
            kind: "message",
            T: ZNn,
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
            T: k.getEnumType(dPe),
            opt: !0
        },
        {
            no: 125,
            name: "grok_bot_handoff_lineage",
            kind: "message",
            T: rUd,
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
            T: j3
        },
        {
            no: 130,
            name: "pr_agent_view",
            kind: "message",
            T: ruo
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
            T: tUd,
            opt: !0
        }
    ]), nUd = k.makeMessageType("aiserver.v1.StartBackgroundComposerFromSnapshotRequest.File", ()=>[
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
}), iUd = k.makeMessageType("aiserver.v1.StartBackgroundComposerFromSnapshotRequest.WebhookConfig", ()=>[
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
}), rUd = k.makeMessageType("aiserver.v1.GrokBotHandoffLineage", ()=>[
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
    ]), sUd = k.makeMessageType("aiserver.v1.CloudOnboardingAutoEnvSetupAcceptResult", ()=>[
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
    ]), WVi = k.makeMessageType("aiserver.v1.StartBackgroundComposerFromSnapshotResponse", ()=>[
        {
            no: 1,
            name: "composer",
            kind: "message",
            T: qse
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
            T: sUd,
            opt: !0
        },
        {
            no: 5,
            name: "owner",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), oUd = k.makeMessageType("aiserver.v1.StartCloudOnboardingRequest", ()=>[
        {
            no: 1,
            name: "start_request",
            kind: "message",
            T: kUe
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
    ]), aUd = k.makeMessageType("aiserver.v1.StartChangeMonitorOnboardingRequest", ()=>[
        {
            no: 1,
            name: "start_request",
            kind: "message",
            T: kUe
        }
    ]), cUd = k.makeMessageType("aiserver.v1.StartCloudOnboardingHeuristicEnvSetupRequest", ()=>[
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
    ]), lUd = k.makeMessageType("aiserver.v1.StartCloudOnboardingHeuristicEnvSetupResponse", ()=>[
        {
            no: 1,
            name: "admitted",
            kind: "scalar",
            T: 8
        }
    ]), _uo = k.makeMessageType("aiserver.v1.ForkBackgroundComposerRequest", ()=>[
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
            T: k.getEnumType(MVi)
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
    ]), uUd = k.makeMessageType("aiserver.v1.ForkBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "composer",
            kind: "message",
            T: qse
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
            T: k.getEnumType(MVi)
        },
        {
            no: 5,
            name: "initial_run_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), dUd = k.makeMessageType("aiserver.v1.AttachBackgroundComposerLogsRequest", ()=>[
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
            T: j3
        }
    ]), hUd = k.makeMessageType("aiserver.v1.AttachBackgroundComposerLogsResponse", ()=>[
        {
            no: 1,
            name: "event",
            kind: "message",
            T: pUd
        },
        {
            no: 2,
            name: "updated_status",
            kind: "message",
            T: oco
        },
        {
            no: 3,
            name: "start_error",
            kind: "message",
            T: vk
        }
    ]), pUd = k.makeMessageType("aiserver.v1.AttachBackgroundComposerLogsResponse.Event", ()=>[
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
            T: kVi
        },
        {
            no: 3,
            name: "waterfall_update",
            kind: "message",
            T: Rkt
        }
    ], {
    localName: "AttachBackgroundComposerLogsResponse_Event"
}), mUd = k.makeMessageType("aiserver.v1.AttachBackgroundComposerRequest", ()=>[
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
    ]), gUd = k.makeMessageType("aiserver.v1.AttachBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "headless_agentic_composer_response",
            kind: "message",
            T: wuo
        },
        {
            no: 2,
            name: "prompt",
            kind: "message",
            T: Cuo
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
            T: k.getEnumType(go)
        },
        {
            no: 3,
            name: "diff_since_start",
            kind: "message",
            T: y5
        }
    ]), e2n = k.makeMessageType("aiserver.v1.StreamConversationRequest", ()=>[
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
            T: buo,
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
            T: k.getEnumType(VNn),
            opt: !0
        },
        {
            no: 13,
            name: "expected_scope",
            kind: "message",
            T: j3
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
    ]), buo = k.makeMessageType("aiserver.v1.PreFetchedBlobFilter", ()=>[
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
    ]), fUd = k.makeMessageType("aiserver.v1.ReadOnlySharedPodLifecycleEvent", ()=>[
        {
            no: 1,
            name: "phase",
            kind: "enum",
            T: k.getEnumType(vUd)
        }
    ]), vUd = k.makeEnum("aiserver.v1.ReadOnlySharedPodLifecycleEvent.Phase", [
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
]), _Ud = k.makeMessageType("aiserver.v1.WorkerLifecycleEvent", ()=>[
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
            T: qP,
            oneof: "event"
        },
        {
            no: 3,
            name: "pinned_worker_offline",
            kind: "message",
            T: qP,
            oneof: "event"
        },
        {
            no: 4,
            name: "pinned_worker_reconnected",
            kind: "message",
            T: qP,
            oneof: "event"
        }
    ]), zU = k.makeMessageType("aiserver.v1.PreFetchedBlob", ()=>[
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
    ]), g1e = k.makeMessageType("aiserver.v1.StreamConversationResponse", ()=>[
        {
            no: 3,
            name: "initial_state",
            kind: "message",
            T: t2n,
            oneof: "message"
        },
        {
            no: 4,
            name: "interaction_update_with_offset",
            kind: "message",
            T: GVi,
            oneof: "message"
        },
        {
            no: 5,
            name: "cloud_agent_state_with_id_and_offset",
            kind: "message",
            T: yuo,
            oneof: "message"
        },
        {
            no: 6,
            name: "workflow_status_with_offset",
            kind: "message",
            T: Suo,
            oneof: "message"
        },
        {
            no: 7,
            name: "prefetched_blobs",
            kind: "message",
            T: yUd,
            oneof: "message"
        },
        {
            no: 8,
            name: "stream_signal",
            kind: "enum",
            T: k.getEnumType(bUd),
            oneof: "message"
        },
        {
            no: 9,
            name: "transient_error_with_offset",
            kind: "message",
            T: kuo,
            oneof: "message"
        },
        {
            no: 10,
            name: "dev_banner_message",
            kind: "message",
            T: kUd,
            oneof: "message"
        },
        {
            no: 11,
            name: "worker_lifecycle_event_with_offset",
            kind: "message",
            T: CUd,
            oneof: "message"
        },
        {
            no: 12,
            name: "interaction_query_with_offset",
            kind: "message",
            T: SUd,
            oneof: "message"
        },
        {
            no: 13,
            name: "read_only_shared_pod_lifecycle_event_with_offset",
            kind: "message",
            T: TUd,
            oneof: "message"
        },
        {
            no: 14,
            name: "stream_heartbeat",
            kind: "message",
            T: wUd,
            oneof: "message"
        },
        {
            no: 15,
            name: "interaction_settled_with_offset",
            kind: "message",
            T: EUd,
            oneof: "message"
        }
    ]), bUd = k.makeEnum("aiserver.v1.StreamConversationResponse.StreamSignal", [
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
]), yUd = k.makeMessageType("aiserver.v1.StreamConversationResponse.PrefetchedBlobs", ()=>[
        {
            no: 1,
            name: "pre_fetched_blobs",
            kind: "message",
            T: zU,
            repeated: !0
        }
    ], {
    localName: "StreamConversationResponse_PrefetchedBlobs"
}), t2n = k.makeMessageType("aiserver.v1.StreamConversationResponse.InitialState", ()=>[
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
            T: gPe
        },
        {
            no: 4,
            name: "pre_fetched_blobs",
            kind: "message",
            T: zU,
            repeated: !0
        },
        {
            no: 5,
            name: "workflow_status",
            kind: "enum",
            T: k.getEnumType(Yd)
        },
        {
            no: 6,
            name: "user_display_infos",
            kind: "message",
            T: sUi,
            repeated: !0
        }
    ], {
    localName: "StreamConversationResponse_InitialState"
}), yuo = k.makeMessageType("aiserver.v1.StreamConversationResponse.CloudAgentStateWithIdAndOffset", ()=>[
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
            T: gPe
        },
        {
            no: 4,
            name: "pre_fetched_blobs",
            kind: "message",
            T: zU,
            repeated: !0
        },
        {
            no: 5,
            name: "user_display_infos",
            kind: "message",
            T: sUi,
            repeated: !0
        }
    ], {
    localName: "StreamConversationResponse_CloudAgentStateWithIdAndOffset"
}), GVi = k.makeMessageType("aiserver.v1.StreamConversationResponse.InteractionUpdateWithOffset", ()=>[
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
            T: Yb
        },
        {
            no: 3,
            name: "user_display_infos",
            kind: "message",
            T: sUi,
            repeated: !0
        }
    ], {
    localName: "StreamConversationResponse_InteractionUpdateWithOffset"
}), SUd = k.makeMessageType("aiserver.v1.StreamConversationResponse.InteractionQueryWithOffset", ()=>[
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
            T: qyt
        }
    ], {
    localName: "StreamConversationResponse_InteractionQueryWithOffset"
}), Suo = k.makeMessageType("aiserver.v1.StreamConversationResponse.WorkflowStatusWithOffset", ()=>[
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
            T: k.getEnumType(Yd)
        }
    ], {
    localName: "StreamConversationResponse_WorkflowStatusWithOffset"
}), kuo = k.makeMessageType("aiserver.v1.StreamConversationResponse.TransientErrorWithOffset", ()=>[
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
            T: ado
        }
    ], {
    localName: "StreamConversationResponse_TransientErrorWithOffset"
}), kUd = k.makeMessageType("aiserver.v1.StreamConversationResponse.DevBannerMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamConversationResponse_DevBannerMessage"
}), wUd = k.makeMessageType("aiserver.v1.StreamConversationResponse.StreamHeartbeat", [], {
    localName: "StreamConversationResponse_StreamHeartbeat"
}), CUd = k.makeMessageType("aiserver.v1.StreamConversationResponse.WorkerLifecycleEventWithOffset", ()=>[
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
            T: _Ud
        }
    ], {
    localName: "StreamConversationResponse_WorkerLifecycleEventWithOffset"
}), TUd = k.makeMessageType("aiserver.v1.StreamConversationResponse.ReadOnlySharedPodLifecycleEventWithOffset", ()=>[
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
            T: fUd
        }
    ], {
    localName: "StreamConversationResponse_ReadOnlySharedPodLifecycleEventWithOffset"
}), EUd = k.makeMessageType("aiserver.v1.StreamConversationResponse.InteractionSettledWithOffset", ()=>[
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
            T: k.getEnumType(Blo)
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
            T: Ise,
            opt: !0
        }
    ], {
    localName: "StreamConversationResponse_InteractionSettledWithOffset"
}), xUd = k.makeMessageType("aiserver.v1.GetLatestAgentConversationStateRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), IUd = k.makeMessageType("aiserver.v1.LatestAgentConversationState", ()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: Hm
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
    ]), AUd = k.makeMessageType("aiserver.v1.GetLatestAgentConversationStateResponse", ()=>[
        {
            no: 1,
            name: "latest_conversation_state",
            kind: "message",
            T: IUd
        },
        {
            no: 2,
            name: "pre_fetched_blobs",
            kind: "message",
            T: zU,
            repeated: !0
        }
    ]), hPe = k.makeMessageType("aiserver.v1.GetBlobForAgentKVRequest", ()=>[
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
            T: j3
        }
    ]), RUd = k.makeMessageType("aiserver.v1.GetBlobForAgentKVResponse", ()=>[
        {
            no: 1,
            name: "blob_data",
            kind: "scalar",
            T: 12
        }
    ]), DUd = k.makeMessageType("aiserver.v1.GetConversationPageRequest", ()=>[
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
            T: j3
        }
    ]), MUd = k.makeMessageType("aiserver.v1.GetConversationPageResponse", ()=>[
        {
            no: 1,
            name: "blobs",
            kind: "message",
            T: zU,
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
    ]), wuo = k.makeMessageType("aiserver.v1.HeadlessAgenticComposerResponse", ()=>[
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
            T: Kue,
            opt: !0
        },
        {
            no: 3,
            name: "final_tool_result",
            kind: "message",
            T: LUd,
            opt: !0
        },
        {
            no: 6,
            name: "streamed_back_tool_call",
            kind: "message",
            T: M3i,
            opt: !0
        },
        {
            no: 4,
            name: "user_message",
            kind: "message",
            T: PUd
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
            T: NUd,
            opt: !0
        },
        {
            no: 8,
            name: "human_message",
            kind: "message",
            T: Uv
        },
        {
            no: 9,
            name: "thinking",
            kind: "message",
            T: KQe,
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
            T: k.getEnumType(I4e),
            opt: !0
        },
        {
            no: 11,
            name: "status",
            kind: "message",
            T: OUd,
            opt: !0
        }
    ]), PUd = k.makeMessageType("aiserver.v1.HeadlessAgenticComposerResponse.UserMessage", ()=>[
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
}), LUd = k.makeMessageType("aiserver.v1.HeadlessAgenticComposerResponse.FinalToolResult", ()=>[
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
            T: xR
        }
    ], {
    localName: "HeadlessAgenticComposerResponse_FinalToolResult"
}), NUd = k.makeMessageType("aiserver.v1.HeadlessAgenticComposerResponse.Error", ()=>[
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
            T: vk
        }
    ], {
    localName: "HeadlessAgenticComposerResponse_Error"
}), OUd = k.makeMessageType("aiserver.v1.HeadlessAgenticComposerResponse.Status", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: k.getEnumType(FUd)
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
}), FUd = k.makeEnum("aiserver.v1.HeadlessAgenticComposerResponse.Status.StatusType", [
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
]), BUd = k.makeMessageType("aiserver.v1.HeadlessAgenticComposerRepositoryInfo", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: w1
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
            T: GUt
        }
    ]), Cuo = k.makeMessageType("aiserver.v1.HeadlessAgenticComposerPrompt", ()=>[
        {
            no: 5,
            name: "base_conversation_message",
            kind: "message",
            T: Uv
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
            T: UUd,
            repeated: !0
        },
        {
            no: 3,
            name: "file_attachments",
            kind: "message",
            T: $Ud,
            repeated: !0
        },
        {
            no: 4,
            name: "images",
            kind: "message",
            T: Vle,
            repeated: !0
        },
        {
            no: 7,
            name: "conversation_history",
            kind: "message",
            T: Uv,
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
            T: A3t,
            repeated: !0
        },
        {
            no: 11,
            name: "blob_data_per_message",
            kind: "message",
            T: DBd,
            repeated: !0
        }
    ]), UUd = k.makeMessageType("aiserver.v1.HeadlessAgenticComposerPrompt.FileSelection", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "HeadlessAgenticComposerPrompt_FileSelection"
}), $Ud = k.makeMessageType("aiserver.v1.HeadlessAgenticComposerPrompt.FileAttachment", ()=>[
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
}), HUd = k.makeMessageType("aiserver.v1.GetBackgroundComposerStatusRequest", ()=>[
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
            T: j3
        }
    ]), WUd = k.makeMessageType("aiserver.v1.GetBackgroundComposerStatusResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(go)
        },
        {
            no: 2,
            name: "is_unread",
            kind: "scalar",
            T: 8
        }
    ]), pPe = k.makeMessageType("aiserver.v1.AddAsyncFollowupBackgroundComposerRequest", ()=>[
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
            T: Uv
        },
        {
            no: 6,
            name: "model_details",
            kind: "message",
            T: xf,
            opt: !0
        },
        {
            no: 15,
            name: "requested_model",
            kind: "message",
            T: MD,
            opt: !0
        },
        {
            no: 7,
            name: "followup_source",
            kind: "enum",
            T: k.getEnumType(Zc),
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
            T: k.getEnumType(Mlo),
            opt: !0
        },
        {
            no: 10,
            name: "followup_conversation_action",
            kind: "message",
            T: x1,
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
            T: pco,
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
            T: j3
        },
        {
            no: 25,
            name: "pr_agent_view",
            kind: "message",
            T: ruo
        },
        {
            no: 26,
            name: "open_interaction_settlements",
            kind: "message",
            T: UHd,
            repeated: !0
        }
    ]), GUd = k.makeMessageType("aiserver.v1.AddAsyncFollowupBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "run_id",
            kind: "scalar",
            T: 9
        }
    ]), n2n = k.makeMessageType("aiserver.v1.InjectBackgroundComposerContextRequest", ()=>[
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
            T: s$t
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: k.getEnumType(Zc)
        },
        {
            no: 4,
            name: "followup_message",
            kind: "message",
            T: Uv
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
            T: j3
        }
    ]), VUd = k.makeMessageType("aiserver.v1.InjectBackgroundComposerContextResponse", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: k.getEnumType(mPe)
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
    ]), mPe = k.makeEnum("aiserver.v1.InjectBackgroundComposerContextResponse.Outcome", [
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
]), VVi = k.makeMessageType("aiserver.v1.SubmitInteractionResponseBackgroundComposerRequest", ()=>[
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
            T: tL
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
    ]), jUd = k.makeMessageType("aiserver.v1.SubmitInteractionResponseBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "resolution_outcome",
            kind: "enum",
            T: k.getEnumType(Lkt)
        }
    ]), Lkt = k.makeEnum("aiserver.v1.SubmitInteractionResponseBackgroundComposerResponse.ResolutionOutcome", [
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
]), jVi = k.makeMessageType("aiserver.v1.ListPendingFollowupsRequest", ()=>[
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
            T: j3
        }
    ]), qUd = k.makeMessageType("aiserver.v1.PendingFollowup", ()=>[
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
            T: k.getEnumType(Zc)
        },
        {
            no: 6,
            name: "cursor_commands",
            kind: "message",
            T: MMe,
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
            T: NDn,
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
            T: x1,
            opt: !0
        },
        {
            no: 11,
            name: "blob_data",
            kind: "message",
            T: flo,
            repeated: !0
        },
        {
            no: 12,
            name: "use_experimental_model_opt_out",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), zUd = k.makeMessageType("aiserver.v1.ListPendingFollowupsResponse", ()=>[
        {
            no: 1,
            name: "pending_followups",
            kind: "message",
            T: qUd,
            repeated: !0
        }
    ]), Tuo = k.makeMessageType("aiserver.v1.UpdatePendingFollowupRequest", ()=>[
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
            T: Uv
        },
        {
            no: 4,
            name: "expected_scope",
            kind: "message",
            T: j3
        }
    ]), KUd = k.makeMessageType("aiserver.v1.UpdatePendingFollowupResponse", ()=>[
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
    ]), Euo = k.makeMessageType("aiserver.v1.DeletePendingFollowupRequest", ()=>[
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
            T: j3
        }
    ]), YUd = k.makeMessageType("aiserver.v1.DeletePendingFollowupResponse", ()=>[
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
    ]), xuo = k.makeMessageType("aiserver.v1.ReorderPendingFollowupRequest", ()=>[
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
            T: j3
        }
    ]), XUd = k.makeMessageType("aiserver.v1.ReorderPendingFollowupResponse", ()=>[
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
    ]), qVi = k.makeMessageType("aiserver.v1.SubmitPendingFollowupNowRequest", ()=>[
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
            T: j3
        }
    ]), ZUd = k.makeMessageType("aiserver.v1.SubmitPendingFollowupNowResponse", ()=>[
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
    ]), Iuo = k.makeMessageType("aiserver.v1.MarkFollowupEditingRequest", ()=>[
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
            T: j3
        }
    ]), QUd = k.makeMessageType("aiserver.v1.MarkFollowupEditingResponse", ()=>[
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
    ]), JUd = k.makeMessageType("aiserver.v1.StartSlackStreamingForFollowupRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), e8d = k.makeMessageType("aiserver.v1.StartSlackStreamingForFollowupResponse", []), t8d = k.makeMessageType("aiserver.v1.StartGithubStreamingForFollowupRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), n8d = k.makeMessageType("aiserver.v1.StartGithubStreamingForFollowupResponse", []), i8d = k.makeMessageType("aiserver.v1.StartLinearStreamingForFollowupRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), r8d = k.makeMessageType("aiserver.v1.StartLinearStreamingForFollowupResponse", []), wUe = k.makeMessageType("aiserver.v1.GetBackgroundComposerInfoRequest", ()=>[
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
            T: j3
        }
    ]), s8d = k.makeMessageType("aiserver.v1.GetBackgroundComposerTimingsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), o8d = k.makeMessageType("aiserver.v1.CloudAgentTimingEvent", ()=>[
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
            T: k.getEnumType(het)
        },
        {
            no: 3,
            name: "turn_number",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), a8d = k.makeMessageType("aiserver.v1.UsedEnvironmentBuildInfo", ()=>[
        {
            no: 1,
            name: "boot_info",
            kind: "message",
            T: sco,
            opt: !0
        }
    ]), Nkt = k.makeMessageType("aiserver.v1.DetailedBackgroundComposer", ()=>[
        {
            no: 1,
            name: "composer",
            kind: "message",
            T: qse
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
            T: Cuo
        },
        {
            no: 5,
            name: "status",
            kind: "enum",
            T: k.getEnumType(go)
        },
        {
            no: 6,
            name: "diff_since_start",
            kind: "message",
            T: y5
        },
        {
            no: 7,
            name: "start_error",
            kind: "message",
            T: vk
        },
        {
            no: 8,
            name: "model_details",
            kind: "message",
            T: xf
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
            T: fHd,
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
            T: vk,
            opt: !0
        },
        {
            no: 18,
            name: "video_annotations",
            kind: "message",
            T: Duo,
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
            T: Auo,
            repeated: !0
        },
        {
            no: 21,
            name: "vm_provisioned_skills",
            kind: "message",
            T: l8d,
            repeated: !0
        },
        {
            no: 22,
            name: "original_conversation_action",
            kind: "message",
            T: x1,
            opt: !0
        },
        {
            no: 23,
            name: "repo_config",
            kind: "message",
            T: Dde,
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
            T: Mde,
            repeated: !0
        },
        {
            no: 27,
            name: "used_environment_version",
            kind: "message",
            T: vet,
            opt: !0
        },
        {
            no: 28,
            name: "requested_model",
            kind: "message",
            T: MD,
            opt: !0
        },
        {
            no: 29,
            name: "cloud_subagent_parent",
            kind: "message",
            T: MWt,
            opt: !0
        },
        {
            no: 30,
            name: "startup_warnings",
            kind: "message",
            T: ldo,
            repeated: !0
        },
        {
            no: 31,
            name: "used_environment_build",
            kind: "message",
            T: a8d,
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
            T: c8d,
            repeated: !0
        },
        {
            no: 37,
            name: "full_details_version",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), c8d = k.makeMessageType("aiserver.v1.CanvasStoreRoot", ()=>[
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
    ]), l8d = k.makeMessageType("aiserver.v1.VmProvisionedSkill", ()=>[
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
            T: tUi,
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
    ]), Auo = k.makeMessageType("aiserver.v1.BackgroundComposerPr", ()=>[
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
            T: k.getEnumType(eq),
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
    ]), Ruo = k.makeMessageType("aiserver.v1.VideoTimestamp", ()=>[
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
    ]), u8d = k.makeMessageType("aiserver.v1.VideoChapter", ()=>[
        {
            no: 1,
            name: "start_time",
            kind: "message",
            T: Ruo
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
    ]), d8d = k.makeMessageType("aiserver.v1.VideoAnnotation", ()=>[
        {
            no: 1,
            name: "labeled_chapters",
            kind: "message",
            T: u8d,
            repeated: !0
        },
        {
            no: 2,
            name: "thumbnail_timestamp",
            kind: "message",
            T: Ruo
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
    ]), Duo = k.makeMessageType("aiserver.v1.VideoAnnotationEntry", ()=>[
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
            T: d8d
        }
    ]), Muo = k.makeMessageType("aiserver.v1.GetBackgroundComposerInfoResponse", ()=>[
        {
            no: 1,
            name: "composer",
            kind: "message",
            T: Nkt
        }
    ]), h8d = k.makeMessageType("aiserver.v1.GetBackgroundComposerTimingsResponse", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: o8d,
            repeated: !0
        }
    ]), p8d = k.makeMessageType("aiserver.v1.GetBackgroundComposerRepositoryInfoRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), m8d = k.makeMessageType("aiserver.v1.GetBackgroundComposerRepositoryInfoResponse", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: w1
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
            T: GUt
        }
    ]), g8d = k.makeMessageType("aiserver.v1.GetMachineRequest", ()=>[
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
    ]), f8d = k.makeMessageType("aiserver.v1.PodReference", ()=>[
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
    ]), v8d = k.makeMessageType("aiserver.v1.WorkerReference", ()=>[
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
            T: b8d,
            opt: !0
        },
        {
            no: 4,
            name: "cursor_server",
            kind: "message",
            T: _8d,
            opt: !0
        }
    ]), _8d = k.makeMessageType("aiserver.v1.WorkerCursorServerCapability", ()=>[
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
    ]), b8d = k.makeMessageType("aiserver.v1.WorkerDesktopCapability", ()=>[
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
    ]), y8d = k.makeMessageType("aiserver.v1.MachineReference", ()=>[
        {
            no: 1,
            name: "pod",
            kind: "message",
            T: f8d,
            oneof: "reference"
        },
        {
            no: 2,
            name: "worker",
            kind: "message",
            T: v8d,
            oneof: "reference"
        }
    ]), S8d = k.makeMessageType("aiserver.v1.GetMachineResponse", ()=>[
        {
            no: 1,
            name: "machine",
            kind: "message",
            T: y8d
        }
    ]), k8d = k.makeMessageType("aiserver.v1.ListWorkspaceFilesRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), Puo = k.makeMessageType("aiserver.v1.ListWorkspaceFilesResponse", ()=>[
        {
            no: 1,
            name: "relative_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), w8d = k.makeMessageType("aiserver.v1.GetMachineResourceUsageRequest", ()=>[
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
    ]), C8d = k.makeMessageType("aiserver.v1.BackgroundComposerDesktopLeaseRequest", ()=>[
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
            T: k.getEnumType(J5d)
        },
        {
            no: 3,
            name: "surface_id",
            kind: "scalar",
            T: 9
        }
    ]), T8d = k.makeMessageType("aiserver.v1.BackgroundComposerDesktopLeaseResponse", ()=>[
        {
            no: 1,
            name: "held",
            kind: "scalar",
            T: 8
        }
    ]), E8d = k.makeMessageType("aiserver.v1.GetGithubAccessTokenForReposRequest", ()=>[
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
    ]), x8d = k.makeMessageType("aiserver.v1.GetGithubAccessTokenForReposResponse", ()=>[
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
            T: I8d,
            repeated: !0
        },
        {
            no: 4,
            name: "error_type",
            kind: "enum",
            T: k.getEnumType(pet)
        },
        {
            no: 5,
            name: "github_redirect_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), I8d = k.makeMessageType("aiserver.v1.GetGithubAccessTokenForReposResponse.Status", ()=>[
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
}), Luo = k.makeMessageType("aiserver.v1.MakeGithubRequestRequest", ()=>[
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
    ]), A8d = k.makeMessageType("aiserver.v1.MakeGithubRequestResponse", ()=>[
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
    ]), R8d = k.makeMessageType("aiserver.v1.GetBackgroundComposerConversationRequest", ()=>[
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
    ]), Nuo = k.makeMessageType("aiserver.v1.GetBackgroundComposerConversationResponse", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        }
    ]), i2n = k.makeMessageType("aiserver.v1.GetBackgroundComposerPullRequestRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), D8d = k.makeMessageType("aiserver.v1.GetBackgroundComposerPullRequestResponse", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), M8d = k.makeMessageType("aiserver.v1.CommitBackgroundComposerRequest", ()=>[
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
    ]), P8d = k.makeMessageType("aiserver.v1.CommitBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        }
    ]), Ouo = k.makeMessageType("aiserver.v1.LiveEgressReapplyResult", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: k.getEnumType(L8d)
        }
    ]), L8d = k.makeEnum("aiserver.v1.LiveEgressReapplyResult.Outcome", [
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
]), N8d = k.makeMessageType("aiserver.v1.SetPersonalEnvironmentJsonRequest", ()=>[
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
            T: k.getEnumType(met)
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
            T: Dde,
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
    ]), O8d = k.makeMessageType("aiserver.v1.SetPersonalEnvironmentJsonResponse", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: CUe,
            opt: !0
        },
        {
            no: 2,
            name: "live_egress_reapply",
            kind: "message",
            T: Ouo,
            opt: !0
        },
        {
            no: 3,
            name: "created",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), F8d = k.makeMessageType("aiserver.v1.GetPersonalEnvironmentJsonRequest", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        }
    ]), B8d = k.makeMessageType("aiserver.v1.GetPersonalEnvironmentJsonResponse", ()=>[
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
    ]), U8d = k.makeMessageType("aiserver.v1.GetEnvironmentJsonCandidatesRequest", ()=>[
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
    ]), $8d = k.makeMessageType("aiserver.v1.GetEnvironmentJsonCandidatesResponse", ()=>[
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
    ]), H8d = k.makeMessageType("aiserver.v1.ListPersonalEnvironmentsRequest", ()=>[
        {
            no: 1,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), W8d = k.makeMessageType("aiserver.v1.PersonalEnvironment", ()=>[
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
    ]), G8d = k.makeMessageType("aiserver.v1.ListPersonalEnvironmentsResponse", ()=>[
        {
            no: 1,
            name: "environments",
            kind: "message",
            T: W8d,
            repeated: !0
        }
    ]), V8d = k.makeMessageType("aiserver.v1.DeletePersonalEnvironmentJsonRequest", ()=>[
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
            T: k.getEnumType(met),
            opt: !0
        }
    ]), j8d = k.makeMessageType("aiserver.v1.DeletePersonalEnvironmentJsonResponse", []), q8d = k.makeMessageType("aiserver.v1.PublishEnvironmentRequest", ()=>[
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
            T: k.getEnumType(e9d)
        }
    ]), z8d = k.makeMessageType("aiserver.v1.PublishEnvironmentResponse", ()=>[
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
    ]), K8d = k.makeMessageType("aiserver.v1.PublishPersonalEnvironmentRequest", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3
        }
    ]), Y8d = k.makeMessageType("aiserver.v1.PublishPersonalEnvironmentResponse", ()=>[
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
    ]), X8d = k.makeMessageType("aiserver.v1.ListTeamEnvironmentsRequest", ()=>[
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
    ]), Z8d = k.makeMessageType("aiserver.v1.TeamEnvironment", ()=>[
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
    ]), Q8d = k.makeMessageType("aiserver.v1.ListTeamEnvironmentsResponse", ()=>[
        {
            no: 1,
            name: "environments",
            kind: "message",
            T: Z8d,
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
    ]), zVi = k.makeMessageType("aiserver.v1.ListEnvironmentsRequest", ()=>[
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
    ]), CUe = k.makeMessageType("aiserver.v1.LogicalEnvironment", ()=>[
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
            T: k.getEnumType(jNn)
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
            T: Dde,
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
            T: k.getEnumType(t9d),
            opt: !0
        },
        {
            no: 13,
            name: "ineligible_repo_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), J8d = k.makeMessageType("aiserver.v1.ListEnvironmentsResponse", ()=>[
        {
            no: 1,
            name: "environments",
            kind: "message",
            T: CUe,
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
    ]), e7d = k.makeMessageType("aiserver.v1.GetEnvironmentRequest", ()=>[
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
    ]), t7d = k.makeMessageType("aiserver.v1.GetEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: CUe,
            opt: !0
        }
    ]), n7d = k.makeMessageType("aiserver.v1.RenameEnvironmentRequest", ()=>[
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
            T: k.getEnumType(met),
            opt: !0
        }
    ]), i7d = k.makeMessageType("aiserver.v1.RenameEnvironmentResponse", []), r7d = k.makeMessageType("aiserver.v1.MigrateEnvironmentToOriginRequest", ()=>[
        {
            no: 1,
            name: "public_id",
            kind: "scalar",
            T: 9
        }
    ]), s7d = k.makeMessageType("aiserver.v1.MigrateEnvironmentToOriginResponse", ()=>[
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
    ]), o7d = k.makeMessageType("aiserver.v1.DuplicateEnvironmentRequest", ()=>[
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
    ]), a7d = k.makeMessageType("aiserver.v1.DuplicateEnvironmentResponse", ()=>[
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
    ]), c7d = k.makeMessageType("aiserver.v1.EnvironmentBuildRepoCommit", ()=>[
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
    ]), Okt = k.makeMessageType("aiserver.v1.EnvironmentBuildRow", ()=>[
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
            T: k.getEnumType(Plo)
        },
        {
            no: 4,
            name: "trigger_type",
            kind: "enum",
            T: k.getEnumType(n9d)
        },
        {
            no: 5,
            name: "source",
            kind: "enum",
            T: k.getEnumType(i9d)
        },
        {
            no: 6,
            name: "failure_type",
            kind: "enum",
            T: k.getEnumType(r9d),
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
            T: PWt,
            repeated: !0
        },
        {
            no: 15,
            name: "repo_commits",
            kind: "message",
            T: c7d,
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
            T: k.getEnumType(s9d)
        }
    ]), Fuo = k.makeMessageType("aiserver.v1.EnvironmentBuildsCursor", ()=>[
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
    ]), l7d = k.makeMessageType("aiserver.v1.ListEnvironmentBuildsRequest", ()=>[
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
            T: Fuo,
            opt: !0
        }
    ]), u7d = k.makeMessageType("aiserver.v1.ListEnvironmentBuildsResponse", ()=>[
        {
            no: 1,
            name: "rows",
            kind: "message",
            T: Okt,
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
            T: Fuo,
            opt: !0
        },
        {
            no: 4,
            name: "latest_boot_build_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), d7d = k.makeMessageType("aiserver.v1.GetEnvironmentActiveBuildRequest", ()=>[
        {
            no: 1,
            name: "environment_public_id",
            kind: "scalar",
            T: 9
        }
    ]), h7d = k.makeMessageType("aiserver.v1.GetEnvironmentActiveBuildResponse", ()=>[
        {
            no: 1,
            name: "row",
            kind: "message",
            T: Okt,
            opt: !0
        }
    ]), p7d = k.makeMessageType("aiserver.v1.GetEnvironmentPersistentRecurringBuildFailuresRequest", ()=>[
        {
            no: 1,
            name: "environment_public_id",
            kind: "scalar",
            T: 9
        }
    ]), m7d = k.makeMessageType("aiserver.v1.GetEnvironmentPersistentRecurringBuildFailuresResponse", ()=>[
        {
            no: 1,
            name: "failure",
            kind: "message",
            T: g7d,
            opt: !0
        }
    ]), g7d = k.makeMessageType("aiserver.v1.PersistentRecurringBuildFailure", ()=>[
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
    ]), f7d = k.makeMessageType("aiserver.v1.GetEnvironmentBuildRequest", ()=>[
        {
            no: 1,
            name: "build_id",
            kind: "scalar",
            T: 9
        }
    ]), v7d = k.makeMessageType("aiserver.v1.GetEnvironmentBuildResponse", ()=>[
        {
            no: 1,
            name: "row",
            kind: "message",
            T: Okt
        }
    ]), _7d = k.makeMessageType("aiserver.v1.GetEnvironmentBuildConfigRequest", ()=>[
        {
            no: 1,
            name: "build_id",
            kind: "scalar",
            T: 9
        }
    ]), b7d = k.makeMessageType("aiserver.v1.GetEnvironmentBuildConfigResponse", ()=>[
        {
            no: 1,
            name: "environment_version",
            kind: "message",
            T: vet,
            opt: !0
        }
    ]), y7d = k.makeMessageType("aiserver.v1.UpdateEnvironmentBuildRequest", ()=>[
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
    ]), S7d = k.makeMessageType("aiserver.v1.UpdateEnvironmentBuildResponse", ()=>[
        {
            no: 1,
            name: "row",
            kind: "message",
            T: Okt
        }
    ]), k7d = k.makeMessageType("aiserver.v1.TriggerEnvironmentBuildRequest", ()=>[
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
            T: PWt,
            repeated: !0
        }
    ]), w7d = k.makeMessageType("aiserver.v1.TriggerEnvironmentBuildResponse", ()=>[
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
            T: Okt
        }
    ]), C7d = k.makeMessageType("aiserver.v1.AttachEnvironmentBuildLogRequest", ()=>[
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
    ]), T7d = k.makeMessageType("aiserver.v1.AttachEnvironmentBuildLogResponse", ()=>[
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
            T: k.getEnumType(Plo)
        },
        {
            no: 4,
            name: "log_complete",
            kind: "scalar",
            T: 8
        }
    ]), E7d = k.makeMessageType("aiserver.v1.CancelEnvironmentBuildRequest", ()=>[
        {
            no: 1,
            name: "build_id",
            kind: "scalar",
            T: 9
        }
    ]), x7d = k.makeMessageType("aiserver.v1.CancelEnvironmentBuildResponse", ()=>[
        {
            no: 1,
            name: "row",
            kind: "message",
            T: Okt
        }
    ]), Buo = k.makeMessageType("aiserver.v1.EnvironmentBuildSettings", ()=>[
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
    ]), I7d = k.makeMessageType("aiserver.v1.GetEnvironmentBuildSettingsRequest", ()=>[
        {
            no: 1,
            name: "environment_public_id",
            kind: "scalar",
            T: 9
        }
    ]), A7d = k.makeMessageType("aiserver.v1.GetEnvironmentBuildSettingsResponse", ()=>[
        {
            no: 1,
            name: "settings",
            kind: "message",
            T: Buo
        }
    ]), R7d = k.makeMessageType("aiserver.v1.UpdateEnvironmentBuildSettingsRequest", ()=>[
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
    ]), D7d = k.makeMessageType("aiserver.v1.UpdateEnvironmentBuildSettingsResponse", ()=>[
        {
            no: 1,
            name: "settings",
            kind: "message",
            T: Buo
        }
    ]), Uuo = k.makeMessageType("aiserver.v1.ResolveOrCreateMultiRepoEnvironmentRequest", ()=>[
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
            T: Dde
        },
        {
            no: 5,
            name: "write_source",
            kind: "enum",
            T: k.getEnumType(met)
        },
        {
            no: 6,
            name: "reuse_policy",
            kind: "enum",
            T: k.getEnumType(Llo)
        }
    ]), M7d = k.makeMessageType("aiserver.v1.ResolveOrCreateMultiRepoEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: CUe
        },
        {
            no: 2,
            name: "created",
            kind: "scalar",
            T: 8
        }
    ]), P7d = k.makeMessageType("aiserver.v1.ResolveOrCreateDraftEnvironmentRequest", ()=>[
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
            T: k.getEnumType(jNn)
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
            T: Dde,
            opt: !0
        }
    ]), L7d = k.makeMessageType("aiserver.v1.ResolveOrCreateDraftEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: CUe
        },
        {
            no: 2,
            name: "created",
            kind: "scalar",
            T: 8
        }
    ]), N7d = k.makeMessageType("aiserver.v1.RepoConfigSummary", ()=>[
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
    ]), $uo = k.makeMessageType("aiserver.v1.EnvironmentVersionRestoreMetadata", ()=>[
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
            T: k.getEnumType(qNn)
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
    ]), vet = k.makeMessageType("aiserver.v1.EnvironmentVersionSummary", ()=>[
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
            T: k.getEnumType(qNn)
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
            T: N7d,
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
    ]), O7d = k.makeMessageType("aiserver.v1.GetBackgroundComposerEnvironmentVersionRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), F7d = k.makeMessageType("aiserver.v1.GetBackgroundComposerEnvironmentVersionResponse", ()=>[
        {
            no: 1,
            name: "environment_version_history",
            kind: "message",
            T: vet,
            repeated: !0
        }
    ]), KVi = k.makeMessageType("aiserver.v1.EnvironmentSetupRunLink", ()=>[
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
    ]), B7d = k.makeMessageType("aiserver.v1.EnvironmentHistoryVersion", ()=>[
        {
            no: 1,
            name: "version",
            kind: "message",
            T: vet
        },
        {
            no: 2,
            name: "setup_run",
            kind: "message",
            T: KVi,
            opt: !0
        }
    ]), U7d = k.makeMessageType("aiserver.v1.EnvironmentHistoryLifecycleEvent", ()=>[
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
            T: k.getEnumType(Nlo)
        },
        {
            no: 3,
            name: "source_kind",
            kind: "enum",
            T: k.getEnumType(qNn)
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
            T: vet,
            opt: !0
        },
        {
            no: 7,
            name: "setup_run",
            kind: "message",
            T: KVi,
            opt: !0
        },
        {
            no: 8,
            name: "restore_metadata",
            kind: "message",
            T: $uo,
            opt: !0
        }
    ]), $7d = k.makeMessageType("aiserver.v1.EnvironmentHistoryObject", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: CUe
        },
        {
            no: 2,
            name: "versions",
            kind: "message",
            T: B7d,
            repeated: !0
        },
        {
            no: 3,
            name: "lifecycle_events",
            kind: "message",
            T: U7d,
            repeated: !0
        }
    ]), H7d = k.makeMessageType("aiserver.v1.EnvironmentEffectiveHistoryEvent", ()=>[
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
            T: k.getEnumType(jNn)
        },
        {
            no: 4,
            name: "event_kind",
            kind: "enum",
            T: k.getEnumType(Nlo)
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
            T: vet,
            opt: !0
        },
        {
            no: 8,
            name: "fallback_version",
            kind: "message",
            T: vet,
            opt: !0
        },
        {
            no: 9,
            name: "setup_run",
            kind: "message",
            T: KVi,
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
            T: $uo,
            opt: !0
        },
        {
            no: 13,
            name: "recorded_via",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), W7d = k.makeMessageType("aiserver.v1.GetEnvironmentHistoryRequest", ()=>[
        {
            no: 1,
            name: "repo_config",
            kind: "message",
            T: Dde,
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
    ]), G7d = k.makeMessageType("aiserver.v1.GetEnvironmentHistoryResponse", ()=>[
        {
            no: 1,
            name: "effective_events",
            kind: "message",
            T: H7d,
            repeated: !0
        },
        {
            no: 2,
            name: "environment_histories",
            kind: "message",
            T: $7d,
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
    ]), V7d = k.makeMessageType("aiserver.v1.DeleteTeamEnvironmentRequest", ()=>[
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
            T: k.getEnumType(met),
            opt: !0
        }
    ]), j7d = k.makeMessageType("aiserver.v1.DeleteTeamEnvironmentResponse", []), q7d = k.makeMessageType("aiserver.v1.RestoreEnvironmentVersionRequest", ()=>[
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
            T: k.getEnumType(jNn)
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
    ]), z7d = k.makeMessageType("aiserver.v1.RestoreEnvironmentVersionResponse", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: CUe,
            opt: !0
        }
    ]), K7d = k.makeMessageType("aiserver.v1.SetTeamEnvironmentJsonRequest", ()=>[
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
            T: k.getEnumType(met)
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
            T: Dde,
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
    ]), Y7d = k.makeMessageType("aiserver.v1.SetTeamEnvironmentJsonResponse", ()=>[
        {
            no: 1,
            name: "environment",
            kind: "message",
            T: CUe,
            opt: !0
        },
        {
            no: 2,
            name: "live_egress_reapply",
            kind: "message",
            T: Ouo,
            opt: !0
        },
        {
            no: 3,
            name: "created",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), X7d = k.makeMessageType("aiserver.v1.SnapshotAndSaveEnvironmentRequest", ()=>[
        {
            no: 1,
            name: "target",
            kind: "enum",
            T: k.getEnumType(Z7d)
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
            T: Dde,
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
            T: Q7d,
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
    ]), Z7d = k.makeEnum("aiserver.v1.SnapshotAndSaveEnvironmentRequest.Target", [
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
]), Q7d = k.makeMessageType("aiserver.v1.SnapshotAndSaveEnvironmentRequest.EgressConfig", ()=>[
        {
            no: 1,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(aPn)
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
}), J7d = k.makeMessageType("aiserver.v1.SnapshotAndSaveEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        }
    ]), e$d = k.makeMessageType("aiserver.v1.ListReposWithLocalEnvironmentRequest", []), t$d = k.makeMessageType("aiserver.v1.RepoWithLocalEnvironment", ()=>[
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
    ]), n$d = k.makeMessageType("aiserver.v1.ListReposWithLocalEnvironmentResponse", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "message",
            T: t$d,
            repeated: !0
        }
    ]), i$d = k.makeMessageType("aiserver.v1.MarkBackgroundComposerReadRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), r$d = k.makeMessageType("aiserver.v1.MarkBackgroundComposerReadResponse", []), s$d = k.makeMessageType("aiserver.v1.MarkBackgroundComposerUnreadRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), o$d = k.makeMessageType("aiserver.v1.MarkBackgroundComposerUnreadResponse", []), a$d = k.makeMessageType("aiserver.v1.AdvanceBackgroundComposerReadCursorRequest", ()=>[
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
    ]), c$d = k.makeMessageType("aiserver.v1.AdvanceBackgroundComposerReadCursorResponse", []), l$d = k.makeMessageType("aiserver.v1.FetchBackgroundComposerRequest", ()=>[
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
    ]), u$d = k.makeMessageType("aiserver.v1.FetchBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "responses",
            kind: "message",
            T: wuo,
            repeated: !0
        },
        {
            no: 2,
            name: "total_responses",
            kind: "scalar",
            T: 5
        }
    ]), Huo = k.makeMessageType("aiserver.v1.GetTurnSummaryBackgroundComposerRequest", ()=>[
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
            T: k.getEnumType(Zc),
            opt: !0
        }
    ]), d$d = k.makeMessageType("aiserver.v1.GetTurnSummaryBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), h$d = k.makeMessageType("aiserver.v1.GetBackgroundComposerNameRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), p$d = k.makeMessageType("aiserver.v1.GetBackgroundComposerNameResponse", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), m$d = k.makeMessageType("aiserver.v1.GetBackgroundComposerPromptRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), g$d = k.makeMessageType("aiserver.v1.GetBackgroundComposerPromptResponse", ()=>[
        {
            no: 1,
            name: "prompt",
            kind: "message",
            T: Uv
        }
    ]), f$d = k.makeMessageType("aiserver.v1.ListBackgroundComposerArtifactsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), v$d = k.makeMessageType("aiserver.v1.BackgroundComposerArtifact", ()=>[
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
    ]), _$d = k.makeMessageType("aiserver.v1.ListBackgroundComposerArtifactsResponse", ()=>[
        {
            no: 1,
            name: "artifacts",
            kind: "message",
            T: v$d,
            repeated: !0
        }
    ]), b$d = k.makeMessageType("aiserver.v1.GetBackgroundComposerArtifactRequest", ()=>[
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
    ]), y$d = k.makeMessageType("aiserver.v1.GetBackgroundComposerArtifactResponse", ()=>[
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
    ]), S$d = k.makeMessageType("aiserver.v1.GetBackgroundComposerArtifactBytesRequest", ()=>[
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
    ]), k$d = k.makeMessageType("aiserver.v1.GetBackgroundComposerArtifactBytesResponse", ()=>[
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
    ]), w$d = k.makeMessageType("aiserver.v1.ReadBinaryFileRequest", ()=>[
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
    ]), C$d = k.makeMessageType("aiserver.v1.ReadBinaryFileResponse", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 12
        }
    ]), T$d = k.makeMessageType("aiserver.v1.StreamBackgroundComposerArtifactRequest", ()=>[
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
    ]), E$d = k.makeMessageType("aiserver.v1.StreamBackgroundComposerArtifactResponse", ()=>[
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
    ]), YVi = k.makeMessageType("aiserver.v1.BackgroundComposerSharedArtifact", ()=>[
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
    ]), x$d = k.makeMessageType("aiserver.v1.ListSharedBackgroundComposerArtifactsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), I$d = k.makeMessageType("aiserver.v1.ListSharedBackgroundComposerArtifactsResponse", ()=>[
        {
            no: 1,
            name: "artifacts",
            kind: "message",
            T: YVi,
            repeated: !0
        }
    ]), A$d = k.makeMessageType("aiserver.v1.ShareBackgroundComposerArtifactRequest", ()=>[
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
    ]), R$d = k.makeMessageType("aiserver.v1.ShareBackgroundComposerArtifactResponse", ()=>[
        {
            no: 1,
            name: "artifact",
            kind: "message",
            T: YVi
        }
    ]), D$d = k.makeMessageType("aiserver.v1.UnshareBackgroundComposerArtifactRequest", ()=>[
        {
            no: 1,
            name: "artifact_id",
            kind: "scalar",
            T: 9
        }
    ]), M$d = k.makeMessageType("aiserver.v1.UnshareBackgroundComposerArtifactResponse", ()=>[
        {
            no: 1,
            name: "artifact",
            kind: "message",
            T: YVi,
            opt: !0
        }
    ]), P$d = k.makeMessageType("aiserver.v1.GetPublicBackgroundComposerArtifactRequest", ()=>[
        {
            no: 1,
            name: "artifact_id",
            kind: "scalar",
            T: 9
        }
    ]), L$d = k.makeMessageType("aiserver.v1.GetPublicBackgroundComposerArtifactResponse", ()=>[
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
    ]), Wuo = k.makeMessageType("aiserver.v1.BackgroundComposerUserEgressPolicy", ()=>[
        {
            no: 1,
            name: "allowlist",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), N$d = k.makeMessageType("aiserver.v1.BackgroundComposerQuickActionSubagentSlot", ()=>[
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
            T: k.getEnumType(o9d)
        }
    ]), Guo = k.makeMessageType("aiserver.v1.BackgroundComposerQuickActionSubagentTemplate", ()=>[
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
            T: k.getEnumType(a9d)
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
    ]), O$d = k.makeMessageType("aiserver.v1.BackgroundComposerQuickActionSubagentTemplateMutation", ()=>[
        {
            no: 1,
            name: "operation",
            kind: "enum",
            T: k.getEnumType(c9d)
        },
        {
            no: 2,
            name: "template",
            kind: "message",
            T: Guo
        }
    ]), Vuo = k.makeMessageType("aiserver.v1.BackgroundComposerQuickActionSettings", ()=>[
        {
            no: 1,
            name: "quick_action_subagent_slots",
            kind: "message",
            T: N$d,
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
            T: Guo,
            repeated: !0
        },
        {
            no: 5,
            name: "quick_action_subagent_template_mutations",
            kind: "message",
            T: O$d,
            repeated: !0
        }
    ]), juo = k.makeMessageType("aiserver.v1.BackgroundComposerDefaultEnvironmentSetting", ()=>[
        {
            no: 1,
            name: "repo_config",
            kind: "message",
            T: Dde,
            opt: !0
        },
        {
            no: 2,
            name: "environment_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), F$d = k.makeMessageType("aiserver.v1.UpdateBackgroundComposerUserSettingsRequest", ()=>[
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
            T: k.getEnumType(Olo),
            opt: !0
        },
        {
            no: 6,
            name: "pr_review_open_destination",
            kind: "enum",
            T: k.getEnumType(VM),
            opt: !0
        },
        {
            no: 7,
            name: "github_artifact_posting",
            kind: "enum",
            T: k.getEnumType(F7i),
            opt: !0
        },
        {
            no: 8,
            name: "egress_protection_mode",
            kind: "enum",
            T: k.getEnumType(aPn),
            opt: !0
        },
        {
            no: 9,
            name: "egress_policy",
            kind: "message",
            T: Wuo,
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
            T: Vuo,
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
            T: juo,
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
            T: k.getEnumType(kJe),
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
            T: Amt,
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
            T: j3
        }
    ]), B$d = k.makeMessageType("aiserver.v1.UpdateBackgroundComposerUserSettingsResponse", []), U$d = k.makeMessageType("aiserver.v1.GetBackgroundComposerUserSettingsRequest", ()=>[
        {
            no: 1,
            name: "expected_scope",
            kind: "message",
            T: j3
        }
    ]), $$d = k.makeMessageType("aiserver.v1.GetBackgroundComposerUserSettingsResponse", ()=>[
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
            T: k.getEnumType(Olo),
            opt: !0
        },
        {
            no: 6,
            name: "pr_review_open_destination",
            kind: "enum",
            T: k.getEnumType(VM),
            opt: !0
        },
        {
            no: 7,
            name: "github_artifact_posting",
            kind: "enum",
            T: k.getEnumType(F7i),
            opt: !0
        },
        {
            no: 8,
            name: "egress_protection_mode",
            kind: "enum",
            T: k.getEnumType(aPn),
            opt: !0
        },
        {
            no: 9,
            name: "egress_policy",
            kind: "message",
            T: Wuo,
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
            T: Vuo,
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
            T: juo,
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
            T: k.getEnumType(kJe),
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
            T: Amt,
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
    ]), quo = k.makeMessageType("aiserver.v1.GetRepositoryBranchesRequest", ()=>[
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
    ]), H$d = k.makeMessageType("aiserver.v1.GetRepositoryBranchesResponse", ()=>[
        {
            no: 1,
            name: "branches",
            kind: "message",
            T: W$d,
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
    ]), W$d = k.makeMessageType("aiserver.v1.GetRepositoryBranchesResponse.Branch", ()=>[
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
}), G$d = k.makeMessageType("aiserver.v1.GetRepositoryDefaultBranchRequest", ()=>[
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
    ]), V$d = k.makeMessageType("aiserver.v1.GetRepositoryDefaultBranchResponse", ()=>[
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
    ]), XVi = k.makeMessageType("aiserver.v1.GetPullRequestMergeStatusRequest", ()=>[
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
    ]), j$d = k.makeMessageType("aiserver.v1.GetPullRequestMergeStatusResponse", ()=>[
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
    ]), zuo = k.makeMessageType("aiserver.v1.GetDetailedPullRequestStatusRequest", ()=>[
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
    ]), q$d = k.makeMessageType("aiserver.v1.PRDeploymentPreviewStatus", ()=>[
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
            T: k.getEnumType(u9d)
        }
    ]), z$d = k.makeMessageType("aiserver.v1.PRDeploymentPreview", ()=>[
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
            T: k.getEnumType(l9d)
        },
        {
            no: 3,
            name: "latest_status",
            kind: "message",
            T: q$d
        }
    ]), Kuo = k.makeMessageType("aiserver.v1.GetDetailedPullRequestStatusResponse", ()=>[
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
            T: AVi,
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
            T: z$d,
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
            T: K$d,
            repeated: !0
        },
        {
            no: 22,
            name: "requested_reviewers",
            kind: "message",
            T: Y$d,
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
            T: ylo,
            opt: !0
        }
    ]), K$d = k.makeMessageType("aiserver.v1.PRReviewSummary", ()=>[
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
    ]), Y$d = k.makeMessageType("aiserver.v1.PRRequestedReviewer", ()=>[
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
    ]), ZVi = k.makeMessageType("aiserver.v1.CheckPullRequestMergeabilityRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), X$d = k.makeMessageType("aiserver.v1.CheckPullRequestMergeabilityResponse", ()=>[
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
    ]), Z$d = k.makeMessageType("aiserver.v1.PRReviewComment", ()=>[
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
    ]), QVi = k.makeMessageType("aiserver.v1.PRReviewThread", ()=>[
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
            T: Z$d,
            repeated: !0
        },
        {
            no: 11,
            name: "pull_request_review_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Q$d = k.makeMessageType("aiserver.v1.PRTopLevelComment", ()=>[
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
    ]), JVi = k.makeMessageType("aiserver.v1.PRCommitUser", ()=>[
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
    ]), J$d = k.makeMessageType("aiserver.v1.PRCommit", ()=>[
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
            T: JVi
        },
        {
            no: 8,
            name: "committer",
            kind: "message",
            T: JVi
        },
        {
            no: 9,
            name: "authors",
            kind: "message",
            T: JVi,
            repeated: !0
        }
    ]), Yuo = k.makeMessageType("aiserver.v1.GetPullRequestDiscussionsRequest", ()=>[
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
    ]), eHd = k.makeMessageType("aiserver.v1.GetPullRequestDiscussionsResponse", ()=>[
        {
            no: 1,
            name: "threads",
            kind: "message",
            T: QVi,
            repeated: !0
        },
        {
            no: 2,
            name: "top_level_comments",
            kind: "message",
            T: Q$d,
            repeated: !0
        },
        {
            no: 3,
            name: "check_status",
            kind: "message",
            T: AVi,
            opt: !0
        }
    ]), tHd = k.makeMessageType("aiserver.v1.GetPullRequestCommitsRequest", ()=>[
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
    ]), nHd = k.makeMessageType("aiserver.v1.GetPullRequestCommitsResponse", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: J$d,
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
    ]), iHd = k.makeMessageType("aiserver.v1.GetPullRequestTimelineEventsRequest", ()=>[
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
    ]), rHd = k.makeMessageType("aiserver.v1.GetPullRequestTimelineEventsResponse", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: sHd,
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
    ]), sHd = k.makeMessageType("aiserver.v1.PRTimelineEvent", ()=>[
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
            T: oHd,
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
    ]), oHd = k.makeMessageType("aiserver.v1.PRTimelineActor", ()=>[
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
    ]), Xuo = k.makeMessageType("aiserver.v1.ReplyToReviewThreadRequest", ()=>[
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
    ]), aHd = k.makeMessageType("aiserver.v1.ReplyToReviewThreadResponse", ()=>[
        {
            no: 1,
            name: "thread",
            kind: "message",
            T: QVi,
            opt: !0
        }
    ]), Zuo = k.makeMessageType("aiserver.v1.ResolveReviewThreadRequest", ()=>[
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
    ]), cHd = k.makeMessageType("aiserver.v1.ResolveReviewThreadResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), Quo = k.makeMessageType("aiserver.v1.UnresolveReviewThreadRequest", ()=>[
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
    ]), lHd = k.makeMessageType("aiserver.v1.UnresolveReviewThreadResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), Juo = k.makeMessageType("aiserver.v1.DeletePullRequestReviewCommentRequest", ()=>[
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
    ]), uHd = k.makeMessageType("aiserver.v1.DeletePullRequestReviewCommentResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]), dHd = k.makeMessageType("aiserver.v1.AddPullRequestReviewCommentRequest", ()=>[
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
    ]), hHd = k.makeMessageType("aiserver.v1.AddPullRequestReviewCommentResponse", ()=>[
        {
            no: 1,
            name: "thread",
            kind: "message",
            T: QVi,
            opt: !0
        }
    ]), eji = k.makeMessageType("aiserver.v1.MergePullRequestRequest", ()=>[
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
    ]), pHd = k.makeMessageType("aiserver.v1.MergePullRequestResponse", ()=>[
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
    ]), edo = k.makeMessageType("aiserver.v1.EnablePullRequestAutoMergeRequest", ()=>[
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
    ]), mHd = k.makeMessageType("aiserver.v1.EnablePullRequestAutoMergeResponse", ()=>[
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
    ]), tdo = k.makeMessageType("aiserver.v1.DisablePullRequestAutoMergeRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), gHd = k.makeMessageType("aiserver.v1.DisablePullRequestAutoMergeResponse", ()=>[
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
    ]), fHd = k.makeMessageType("aiserver.v1.EnvironmentPort", ()=>[
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
    ]), vHd = k.makeMessageType("aiserver.v1.RegisterPushNotificationTokenRequest", ()=>[
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
            T: k.getEnumType(zNn)
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
    ]), _Hd = k.makeMessageType("aiserver.v1.RegisterPushNotificationTokenResponse", []), bHd = k.makeMessageType("aiserver.v1.DeletePushNotificationTokenRequest", ()=>[
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
            T: k.getEnumType(zNn)
        }
    ]), yHd = k.makeMessageType("aiserver.v1.DeletePushNotificationTokenResponse", []), ndo = k.makeMessageType("aiserver.v1.ResolveOriginAgentApprovalRequest", ()=>[
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
            T: k.getEnumType(PVi)
        }
    ]), SHd = k.makeMessageType("aiserver.v1.ResolveOriginAgentApprovalResponse", ()=>[
        {
            no: 1,
            name: "accepted",
            kind: "scalar",
            T: 8
        }
    ]), ido = k.makeMessageType("aiserver.v1.GetOriginAgentApprovalRequest", ()=>[
        {
            no: 1,
            name: "approval_id",
            kind: "scalar",
            T: 9
        }
    ]), kHd = k.makeMessageType("aiserver.v1.GetOriginAgentApprovalResponse", ()=>[
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
            T: Ylo,
            opt: !0
        }
    ]), wHd = k.makeMessageType("aiserver.v1.LiveActivityAgentEntry", ()=>[
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
            T: k.getEnumType(go)
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
    ]), CHd = k.makeMessageType("aiserver.v1.LiveActivityContentState", ()=>[
        {
            no: 1,
            name: "agents",
            kind: "message",
            T: wHd,
            repeated: !0
        }
    ]), THd = k.makeMessageType("aiserver.v1.SyncLiveActivityRequest", ()=>[
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
            T: k.getEnumType(zNn)
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
            T: CHd
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
    ]), EHd = k.makeMessageType("aiserver.v1.SyncLiveActivityResponse", []), xHd = k.makeMessageType("aiserver.v1.DeleteLiveActivityRequest", ()=>[
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
            T: k.getEnumType(zNn)
        }
    ]), IHd = k.makeMessageType("aiserver.v1.DeleteLiveActivityResponse", []), AHd = k.makeMessageType("aiserver.v1.VerifyBackgroundComposerAccessRequest", ()=>[
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
    ]), RHd = k.makeMessageType("aiserver.v1.VerifyBackgroundComposerAccessResponse", ()=>[
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
            T: k.getEnumType(d9d)
        }
    ]), tji = k.makeMessageType("aiserver.v1.ConvertPullRequestFromDraftRequest", ()=>[
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
    ]), DHd = k.makeMessageType("aiserver.v1.ConvertPullRequestFromDraftResponse", ()=>[
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
    ]), MHd = k.makeMessageType("aiserver.v1.UpdatePullRequestBranchRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), PHd = k.makeMessageType("aiserver.v1.UpdatePullRequestBranchResponse", ()=>[
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
    ]), rdo = k.makeMessageType("aiserver.v1.CloudAgentStatePersistedMetadata", ()=>[
        {
            no: 1,
            name: "cloud_agent_state_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "offset_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "timestamp_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "workflow_status",
            kind: "enum",
            T: k.getEnumType(Yd)
        },
        {
            no: 5,
            name: "version",
            kind: "enum",
            T: k.getEnumType(sdo)
        }
    ]), sdo = k.makeEnum("aiserver.v1.CloudAgentStatePersistedMetadata.PersistedMetadataVersion", [
    {
        no: 0,
        name: "PERSISTED_METADATA_VERSION_UNSPECIFIED"
    },
    {
        no: 1,
        name: "PERSISTED_METADATA_VERSION_1"
    }
]), gPe = k.makeMessageType("aiserver.v1.CloudAgentState", ()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: Hm
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
            T: k.getEnumType(Zc),
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
            T: vuo,
            opt: !0
        },
        {
            no: 26,
            name: "commits",
            kind: "message",
            T: GHd,
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
            T: cdo,
            opt: !0
        },
        {
            no: 29,
            name: "initial_source",
            kind: "enum",
            T: k.getEnumType(Zc),
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
            T: BHd,
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
            T: FHd,
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
            T: odo,
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
                T: odo
            }
        },
        {
            no: 45,
            name: "startup_warnings",
            kind: "message",
            T: ldo,
            repeated: !0
        },
        {
            no: 46,
            name: "private_workspace_identifier",
            kind: "message",
            T: fet,
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
            T: Wyt,
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
            T: NHd,
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
            T: k.getEnumType(dPe),
            opt: !0
        },
        {
            no: 60,
            name: "carried_request_context",
            kind: "message",
            T: LHd,
            opt: !0
        },
        {
            no: 61,
            name: "voice_calls_blob_id",
            kind: "scalar",
            T: 12
        }
    ]), LHd = k.makeMessageType("aiserver.v1.CarriedRequestContext", ()=>[
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
            T: k.getEnumType(h9d),
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
    ]), NHd = k.makeMessageType("aiserver.v1.EnvironmentMcpServerAllowlist", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: OHd,
            repeated: !0
        },
        {
            no: 2,
            name: "disable_all_mcp_servers",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), OHd = k.makeMessageType("aiserver.v1.EnvironmentMcpServerAllowlist.Entry", ()=>[
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
}), odo = k.makeMessageType("aiserver.v1.OptimizedDiffState", ()=>[
        {
            no: 1,
            name: "pending",
            kind: "message",
            T: qP,
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
    ]), FHd = k.makeMessageType("aiserver.v1.WorkerCreation", ()=>[
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
    ]), BHd = k.makeMessageType("aiserver.v1.SynthesisSubagentConfig", ()=>[
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
    ]), ado = k.makeMessageType("aiserver.v1.TransientError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), UHd = k.makeMessageType("aiserver.v1.OpenInteractionSettlement", ()=>[
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
            T: Ise,
            opt: !0
        },
        {
            no: 3,
            name: "skipped_question_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), cdo = k.makeMessageType("aiserver.v1.CloudAgentErrorDetails", ()=>[
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
            T: vk,
            opt: !0
        }
    ]), ldo = k.makeMessageType("aiserver.v1.CloudAgentStartupWarning", ()=>[
        {
            no: 1,
            name: "warning_type",
            kind: "enum",
            T: k.getEnumType(p9d)
        },
        {
            no: 2,
            name: "user_facing_message",
            kind: "scalar",
            T: 9
        }
    ]), $Hd = k.makeMessageType("aiserver.v1.VideoAnnotationsWrapper", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: Duo,
            repeated: !0
        }
    ]), HHd = k.makeMessageType("aiserver.v1.GetBackgroundComposerVmUsageRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), WHd = k.makeMessageType("aiserver.v1.GetBackgroundComposerVmUsageResponse", ()=>[
        {
            no: 1,
            name: "total_duration_ms",
            kind: "scalar",
            T: 3
        }
    ]), GHd = k.makeMessageType("aiserver.v1.BackgroundComposerCommit", ()=>[
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
    ]), VHd = k.makeMessageType("aiserver.v1.GetCloudAgentDebugDetailsRequest", ()=>[
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
    ]), jHd = k.makeMessageType("aiserver.v1.CloudAgentVmHistory", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: qHd,
            repeated: !0
        }
    ]), qHd = k.makeMessageType("aiserver.v1.CloudAgentVmHistoryEntry", ()=>[
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
            T: zHd,
            oneof: "info"
        },
        {
            no: 6,
            name: "anyrun_pending_docker_build",
            kind: "message",
            T: KHd,
            oneof: "info"
        }
    ]), zHd = k.makeMessageType("aiserver.v1.CloudAgentAnyrunVmInfo", ()=>[
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
            T: sco,
            opt: !0
        }
    ]), KHd = k.makeMessageType("aiserver.v1.CloudAgentAnyrunPendingDockerBuildVmInfo", ()=>[
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
    ]), YHd = k.makeMessageType("aiserver.v1.GetCloudAgentDebugDetailsResponse", ()=>[
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
            T: gPe
        },
        {
            no: 3,
            name: "stream_messages",
            kind: "message",
            T: g1e,
            repeated: !0
        },
        {
            no: 4,
            name: "pre_fetched_blobs",
            kind: "message",
            T: zU,
            repeated: !0
        },
        {
            no: 5,
            name: "vm_history",
            kind: "message",
            T: jHd
        }
    ]), XHd = k.makeMessageType("aiserver.v1.ProvisionSyntheticsServiceAccountsRequest", ()=>[
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
    ]), ZHd = k.makeMessageType("aiserver.v1.ProvisionedSyntheticsIdentity", ()=>[
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
    ]), QHd = k.makeMessageType("aiserver.v1.ProvisionSyntheticsServiceAccountsResponse", ()=>[
        {
            no: 1,
            name: "identities",
            kind: "message",
            T: ZHd,
            repeated: !0
        },
        {
            no: 2,
            name: "pool_id",
            kind: "scalar",
            T: 9
        }
    ]), JHd = k.makeMessageType("aiserver.v1.CloudAgentSyntheticsScenarioInput", ()=>[
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
    ]), eWd = k.makeMessageType("aiserver.v1.StartCloudAgentLoadTestRequest", ()=>[
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
            T: JHd
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
    ]), tWd = k.makeMessageType("aiserver.v1.StartCloudAgentLoadTestResponse", ()=>[
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
    ]), nWd = k.makeMessageType("aiserver.v1.EnsureModelRoutingLoadTestStartedRequest", ()=>[
        {
            no: 1,
            name: "run_id",
            kind: "scalar",
            T: 9
        }
    ]), iWd = k.makeMessageType("aiserver.v1.EnsureModelRoutingLoadTestStartedResponse", ()=>[
        {
            no: 1,
            name: "temporal_run_id",
            kind: "scalar",
            T: 9
        }
    ]), rWd = k.makeMessageType("aiserver.v1.CancelModelRoutingLoadTestRequest", ()=>[
        {
            no: 1,
            name: "run_id",
            kind: "scalar",
            T: 9
        }
    ]), sWd = k.makeMessageType("aiserver.v1.CancelModelRoutingLoadTestResponse", ()=>[
        {
            no: 1,
            name: "outcome",
            kind: "enum",
            T: k.getEnumType(m9d)
        }
    ]), oWd = k.makeMessageType("aiserver.v1.MintCustomerPrivatelinkProxyTokenRequest", ()=>[
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
    ]), aWd = k.makeMessageType("aiserver.v1.MintCustomerPrivatelinkProxyTokenResponse", ()=>[
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
    ]), cWd = k.makeMessageType("aiserver.v1.ListCustomerPrivatelinkAllowedHostsRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        }
    ]), lWd = k.makeMessageType("aiserver.v1.ListCustomerPrivatelinkAllowedHostsResponse", ()=>[
        {
            no: 1,
            name: "destinations",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), uWd = k.makeMessageType("aiserver.v1.AdminListTeamNamedAgentsRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        }
    ]), dWd = k.makeMessageType("aiserver.v1.AdminNamedAgentSession", ()=>[
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
    ]), hWd = k.makeMessageType("aiserver.v1.AdminNamedAgent", ()=>[
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
            T: dWd,
            repeated: !0
        }
    ]), pWd = k.makeMessageType("aiserver.v1.AdminListTeamNamedAgentsResponse", ()=>[
        {
            no: 1,
            name: "named_agents",
            kind: "message",
            T: hWd,
            repeated: !0
        }
    ]), mWd = k.makeMessageType("aiserver.v1.AdminDeleteNamedAgentRequest", ()=>[
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
    ]), gWd = k.makeMessageType("aiserver.v1.AdminDeleteNamedAgentResponse", ()=>[
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
    ]), fWd = k.makeMessageType("aiserver.v1.GetCloudAgentMemoryDbLogsRequest", ()=>[
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
    ]), vWd = k.makeMessageType("aiserver.v1.GetCloudAgentMemoryDbLogsResponse", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: _Wd,
            repeated: !0
        },
        {
            no: 2,
            name: "truncated",
            kind: "scalar",
            T: 8
        }
    ]), _Wd = k.makeMessageType("aiserver.v1.CloudAgentMemoryDbLogEntry", ()=>[
        {
            no: 2,
            name: "source",
            kind: "enum",
            T: k.getEnumType(g9d)
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
            T: kVi,
            oneof: "log"
        },
        {
            no: 5,
            name: "waterfall_update",
            kind: "message",
            T: Rkt,
            oneof: "log"
        }
    ]), bWd = k.makeMessageType("aiserver.v1.CreateAgentShareRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), yWd = k.makeMessageType("aiserver.v1.CreateAgentShareResponse", ()=>[
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
    ]), SWd = k.makeMessageType("aiserver.v1.GetAgentSharePreviewRequest", ()=>[
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
    ]), kWd = k.makeMessageType("aiserver.v1.GetAgentSharePreviewResponse", ()=>[
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
    ]), wWd = k.makeMessageType("aiserver.v1.ListPrivateWorkersRequest", ()=>[
        {
            no: 1,
            name: "status_filter",
            kind: "enum",
            T: k.getEnumType(b9d)
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
            T: k.getEnumType(Ulo)
        }
    ]), CWd = k.makeMessageType("aiserver.v1.ListPrivateWorkersResponse", ()=>[
        {
            no: 1,
            name: "workers",
            kind: "message",
            T: nji,
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
    ]), TWd = k.makeMessageType("aiserver.v1.AdminListUserPrivateWorkersRequest", ()=>[
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
    ]), EWd = k.makeMessageType("aiserver.v1.AdminListUserPrivateWorkersResponse", ()=>[
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
            T: nji,
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
    ]), xWd = k.makeMessageType("aiserver.v1.AdminKillBackgroundComposerRequest", ()=>[
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
    ]), IWd = k.makeMessageType("aiserver.v1.AdminKillBackgroundComposerResponse", ()=>[
        {
            no: 1,
            name: "signal_outcome",
            kind: "enum",
            T: k.getEnumType(f9d)
        },
        {
            no: 2,
            name: "worker_release_succeeded",
            kind: "scalar",
            T: 8
        }
    ]), AWd = k.makeMessageType("aiserver.v1.AdminSettleInteractionRequest", ()=>[
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
            T: k.getEnumType(Blo)
        }
    ]), RWd = k.makeMessageType("aiserver.v1.AdminSettleInteractionResponse", []), DWd = k.makeMessageType("aiserver.v1.AdminUnparkFollowupsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), MWd = k.makeMessageType("aiserver.v1.AdminUnparkFollowupsResponse", []), PWd = k.makeMessageType("aiserver.v1.AdminActiveBackgroundComposer", ()=>[
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
            T: k.getEnumType(v9d)
        },
        {
            no: 6,
            name: "parent_bc_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), LWd = k.makeMessageType("aiserver.v1.AdminListActiveBackgroundComposersRequest", ()=>[
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
    ]), NWd = k.makeMessageType("aiserver.v1.AdminListActiveBackgroundComposersResponse", ()=>[
        {
            no: 1,
            name: "agents",
            kind: "message",
            T: PWd,
            repeated: !0
        },
        {
            no: 2,
            name: "next_page_token",
            kind: "scalar",
            T: 9
        }
    ]), OWd = k.makeMessageType("aiserver.v1.AdminKillAllActiveBackgroundComposersRequest", ()=>[
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
    ]), FWd = k.makeMessageType("aiserver.v1.AdminKillAllActiveBackgroundComposerFailure", ()=>[
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
    ]), BWd = k.makeMessageType("aiserver.v1.AdminKillAllActiveBackgroundComposersResponse", ()=>[
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
            T: FWd,
            repeated: !0
        }
    ]), UWd = k.makeMessageType("aiserver.v1.ListPendingPrivateWorkerRequestsRequest", ()=>[
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
    ]), $Wd = k.makeMessageType("aiserver.v1.ListPendingPrivateWorkerRequestsResponse", ()=>[
        {
            no: 1,
            name: "requests",
            kind: "message",
            T: udo,
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
    ]), udo = k.makeMessageType("aiserver.v1.PendingPrivateWorkerRequest", ()=>[
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
            T: Mde,
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
            T: HWd,
            repeated: !0
        }
    ]), HWd = k.makeMessageType("aiserver.v1.PrivateWorkerRequestRepo", ()=>[
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
    ]), WWd = k.makeMessageType("aiserver.v1.StreamPendingPrivateWorkerRequestsRequest", ()=>[
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
    ]), GWd = k.makeMessageType("aiserver.v1.StreamPendingPrivateWorkerRequestsResponse", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: k.getEnumType(_9d)
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: udo
        },
        {
            no: 3,
            name: "cursor",
            kind: "scalar",
            T: 9
        }
    ]), VWd = k.makeMessageType("aiserver.v1.ClaimPendingPrivateWorkerRequestRequest", ()=>[
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
    ]), jWd = k.makeMessageType("aiserver.v1.ClaimPendingPrivateWorkerRequestResponse", ()=>[
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
    ]), qWd = k.makeMessageType("aiserver.v1.ReleasePrivateWorkerClaimRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), zWd = k.makeMessageType("aiserver.v1.ReleasePrivateWorkerClaimResponse", ()=>[
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
    ]), KWd = k.makeMessageType("aiserver.v1.PrivateWorkerRepo", ()=>[
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
    ]), nji = k.makeMessageType("aiserver.v1.PrivateWorker", ()=>[
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
            T: Mde,
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
            T: KWd,
            repeated: !0
        }
    ]), Mde = k.makeMessageType("aiserver.v1.PrivateWorkerLabel", ()=>[
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
    ]), YWd = k.makeMessageType("aiserver.v1.PrivateWorkerPool", ()=>[
        {
            no: 1,
            name: "scope",
            kind: "enum",
            T: k.getEnumType(LVi)
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
            T: XWd,
            opt: !0
        }
    ]), XWd = k.makeMessageType("aiserver.v1.PrivateWorkerPoolRequestCounts", ()=>[
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
    ]), ZWd = k.makeMessageType("aiserver.v1.ListPrivateWorkerPoolsRequest", ()=>[
        {
            no: 1,
            name: "list_scope",
            kind: "enum",
            T: k.getEnumType(Ulo)
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
    ]), QWd = k.makeMessageType("aiserver.v1.ListPrivateWorkerPoolsResponse", ()=>[
        {
            no: 1,
            name: "pools",
            kind: "message",
            T: YWd,
            repeated: !0
        }
    ]), iji = k.makeMessageType("aiserver.v1.PlacementGrantTarget", ()=>[
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
    ]), JWd = k.makeMessageType("aiserver.v1.PlacementGrantConnectedWorker", ()=>[
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
    ]), eGd = k.makeMessageType("aiserver.v1.PlacementGrantOfflineWorker", []), tGd = k.makeMessageType("aiserver.v1.PlacementGrantPool", ()=>[
        {
            no: 1,
            name: "connected_worker_count",
            kind: "scalar",
            T: 13
        }
    ]), nGd = k.makeMessageType("aiserver.v1.PlacementGrantEnvironment", []), iGd = k.makeMessageType("aiserver.v1.PlacementGrantEntry", ()=>[
        {
            no: 1,
            name: "target",
            kind: "message",
            T: iji
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
            T: JWd,
            oneof: "connection"
        },
        {
            no: 5,
            name: "offline",
            kind: "message",
            T: eGd,
            oneof: "connection"
        },
        {
            no: 6,
            name: "pool",
            kind: "message",
            T: tGd,
            oneof: "connection"
        },
        {
            no: 7,
            name: "environment",
            kind: "message",
            T: nGd,
            oneof: "connection"
        }
    ]), ddo = k.makeMessageType("aiserver.v1.PlacementGrantsView", ()=>[
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
            T: iGd,
            repeated: !0
        }
    ]), rGd = k.makeMessageType("aiserver.v1.ListPlacementGrantsRequest", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]), sGd = k.makeMessageType("aiserver.v1.ListPlacementGrantsResponse", ()=>[
        {
            no: 1,
            name: "view",
            kind: "message",
            T: ddo
        }
    ]), oGd = k.makeMessageType("aiserver.v1.UpdatePlacementGrantsRequest", ()=>[
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
            T: iji,
            repeated: !0
        },
        {
            no: 3,
            name: "revoke",
            kind: "message",
            T: iji,
            repeated: !0
        }
    ]), aGd = k.makeMessageType("aiserver.v1.UpdatePlacementGrantsResponse", ()=>[
        {
            no: 1,
            name: "view",
            kind: "message",
            T: ddo
        }
    ]), cGd = k.makeMessageType("aiserver.v1.RegisterPrivateWorkerPoolRequest", ()=>[
        {
            no: 1,
            name: "scope",
            kind: "enum",
            T: k.getEnumType(LVi)
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
    ]), lGd = k.makeMessageType("aiserver.v1.RegisterPrivateWorkerPoolResponse", ()=>[
        {
            no: 1,
            name: "registered",
            kind: "scalar",
            T: 8
        }
    ]), uGd = k.makeMessageType("aiserver.v1.DeregisterPrivateWorkerPoolRequest", ()=>[
        {
            no: 1,
            name: "scope",
            kind: "enum",
            T: k.getEnumType(LVi)
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
    ]), dGd = k.makeMessageType("aiserver.v1.DeregisterPrivateWorkerPoolResponse", ()=>[
        {
            no: 1,
            name: "deregistered",
            kind: "scalar",
            T: 8
        }
    ]), rji = k.makeMessageType("aiserver.v1.PrivateWorkerOwnerFilter", ()=>[
        {
            no: 1,
            name: "owner_cursor_user_id",
            kind: "scalar",
            T: 5
        }
    ]), hGd = k.makeMessageType("aiserver.v1.GetPrivateWorkersSummaryRequest", []), pGd = k.makeMessageType("aiserver.v1.GetPrivateWorkersSummaryResponse", ()=>[
        {
            no: 1,
            name: "user_summary",
            kind: "message",
            T: mGd,
            opt: !0
        },
        {
            no: 2,
            name: "team_summary",
            kind: "message",
            T: gGd,
            opt: !0
        },
        {
            no: 3,
            name: "team_limit_summary",
            kind: "message",
            T: fGd,
            opt: !0
        }
    ]), mGd = k.makeMessageType("aiserver.v1.UserWorkerSummary", ()=>[
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
    ]), gGd = k.makeMessageType("aiserver.v1.TeamWorkerSummary", ()=>[
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
    ]), fGd = k.makeMessageType("aiserver.v1.TeamWorkerLimitSummary", ()=>[
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
    ]), vGd = k.makeMessageType("aiserver.v1.GetPrivateWorkerRequest", ()=>[
        {
            no: 1,
            name: "worker_id",
            kind: "scalar",
            T: 9
        }
    ]), _Gd = k.makeMessageType("aiserver.v1.GetPrivateWorkerResponse", ()=>[
        {
            no: 1,
            name: "worker",
            kind: "message",
            T: nji
        }
    ]), bGd = k.makeMessageType("aiserver.v1.ReleasePrivateWorkerRequest", ()=>[
        {
            no: 1,
            name: "worker_id",
            kind: "scalar",
            T: 9
        }
    ]), yGd = k.makeMessageType("aiserver.v1.ReleasePrivateWorkerResponse", []), SGd = k.makeMessageType("aiserver.v1.BatchRefreshPullRequestStatusRequest", ()=>[
        {
            no: 1,
            name: "bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), kGd = k.makeMessageType("aiserver.v1.BatchRefreshPullRequestStatusResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: Kuo
            }
        },
        {
            no: 2,
            name: "failed_bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), LWt = k.makeMessageType("aiserver.v1.BackgroundComposerCachedDetailsProto", ()=>[
        {
            no: 1,
            name: "diff_changes_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "detailed_diff",
            kind: "message",
            T: Wle
        },
        {
            no: 3,
            name: "bc",
            kind: "message",
            T: Nkt
        }
    ]), wGd = k.makeMessageType("aiserver.v1.AttachAgentStartupTraceRequest", ()=>[
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
    ]), CGd = k.makeMessageType("aiserver.v1.AttachAgentStartupTraceResponse", ()=>[
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
            T: $5d
        }
    ]), TGd = k.makeMessageType("aiserver.v1.CloudCanvasDiagnostic", ()=>[
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
            T: EGd,
            opt: !0
        }
    ]), EGd = k.makeMessageType("aiserver.v1.CloudCanvasDiagnosticRange", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: hdo
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: hdo
        }
    ]), hdo = k.makeMessageType("aiserver.v1.CloudCanvasDiagnosticPosition", ()=>[
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
    ]), xGd = k.makeMessageType("aiserver.v1.WriteCanvasRequest", ()=>[
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
    ]), IGd = k.makeMessageType("aiserver.v1.WriteCanvasOk", ()=>[
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
    ]), AGd = k.makeMessageType("aiserver.v1.WriteCanvasFailure", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: k.getEnumType(y9d)
        },
        {
            no: 2,
            name: "diagnostics",
            kind: "message",
            T: TGd,
            repeated: !0
        },
        {
            no: 3,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), RGd = k.makeMessageType("aiserver.v1.WriteCanvasResponse", ()=>[
        {
            no: 1,
            name: "ok",
            kind: "message",
            T: IGd,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: AGd,
            oneof: "outcome"
        }
    ]), DGd = k.makeMessageType("aiserver.v1.ReadCanvasRequest", ()=>[
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
    ]), MGd = k.makeMessageType("aiserver.v1.ReadCanvasOk", ()=>[
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
    ]), PGd = k.makeMessageType("aiserver.v1.ReadCanvasFailure", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: k.getEnumType(S9d)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), LGd = k.makeMessageType("aiserver.v1.ReadCanvasResponse", ()=>[
        {
            no: 1,
            name: "ok",
            kind: "message",
            T: MGd,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: PGd,
            oneof: "outcome"
        }
    ]), NGd = k.makeMessageType("aiserver.v1.PromptUploadPart", ()=>[
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
    ]), pdo = k.makeMessageType("aiserver.v1.PresignPromptUploadRequest", ()=>[
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
    ]), OGd = k.makeMessageType("aiserver.v1.PresignPromptUploadResponse", ()=>[
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
            T: FGd,
            oneof: "upload"
        }
    ]), FGd = k.makeMessageType("aiserver.v1.PresignPromptUploadResponse.Multipart", ()=>[
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
            T: NGd,
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
}), mdo = k.makeMessageType("aiserver.v1.CompletePromptUploadRequest", ()=>[
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
    ]), BGd = k.makeMessageType("aiserver.v1.CompletePromptUploadResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType($lo)
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        }
    ]), gdo = k.makeMessageType("aiserver.v1.AbortPromptUploadRequest", ()=>[
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
    ]), UGd = k.makeMessageType("aiserver.v1.AbortPromptUploadResponse", []), NWt = k.makeMessageType("aiserver.v1.Keyring", ()=>[
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
            T: k.getEnumType(k9d)
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
    ]), $Gd = k.makeMessageType("aiserver.v1.ListKeyringsRequest", ()=>[
        {
            no: 1,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(w9d)
        }
    ]), HGd = k.makeMessageType("aiserver.v1.ListKeyringsResponse", ()=>[
        {
            no: 1,
            name: "keyrings",
            kind: "message",
            T: NWt,
            repeated: !0
        }
    ]), WGd = k.makeMessageType("aiserver.v1.GetKeyringRequest", ()=>[
        {
            no: 1,
            name: "public_id",
            kind: "scalar",
            T: 9
        }
    ]), GGd = k.makeMessageType("aiserver.v1.GetKeyringResponse", ()=>[
        {
            no: 1,
            name: "keyring",
            kind: "message",
            T: NWt,
            opt: !0
        }
    ]), VGd = k.makeMessageType("aiserver.v1.CreateKeyringRequest", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), jGd = k.makeMessageType("aiserver.v1.CreateKeyringResponse", ()=>[
        {
            no: 1,
            name: "keyring",
            kind: "message",
            T: NWt
        }
    ]), qGd = k.makeMessageType("aiserver.v1.CreateKeyringFromTeamSecretsRequest", ()=>[
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
            T: fdo,
            repeated: !0
        }
    ]), zGd = k.makeMessageType("aiserver.v1.CreateKeyringFromTeamSecretsResponse", ()=>[
        {
            no: 1,
            name: "keyring",
            kind: "message",
            T: NWt
        },
        {
            no: 2,
            name: "copied_secret_count",
            kind: "scalar",
            T: 5
        }
    ]), KGd = k.makeMessageType("aiserver.v1.CopyTeamSecretsToKeyringRequest", ()=>[
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
    ]), YGd = k.makeMessageType("aiserver.v1.CopyTeamSecretsToKeyringResponse", ()=>[
        {
            no: 1,
            name: "copied_secret_count",
            kind: "scalar",
            T: 5
        }
    ]), XGd = k.makeMessageType("aiserver.v1.RenameKeyringRequest", ()=>[
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
    ]), ZGd = k.makeMessageType("aiserver.v1.RenameKeyringResponse", ()=>[
        {
            no: 1,
            name: "keyring",
            kind: "message",
            T: NWt
        }
    ]), QGd = k.makeMessageType("aiserver.v1.DeleteKeyringRequest", ()=>[
        {
            no: 1,
            name: "public_id",
            kind: "scalar",
            T: 9
        }
    ]), JGd = k.makeMessageType("aiserver.v1.DeleteKeyringResponse", []), eVd = k.makeMessageType("aiserver.v1.KeyringSecret", ()=>[
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
            T: k.getEnumType(_Je)
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
    ]), tVd = k.makeMessageType("aiserver.v1.ListKeyringSecretsRequest", ()=>[
        {
            no: 1,
            name: "keyring_public_id",
            kind: "scalar",
            T: 9
        }
    ]), nVd = k.makeMessageType("aiserver.v1.ListKeyringSecretsResponse", ()=>[
        {
            no: 1,
            name: "secrets",
            kind: "message",
            T: eVd,
            repeated: !0
        }
    ]), iVd = k.makeMessageType("aiserver.v1.CreateKeyringSecretRequest", ()=>[
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
            T: k.getEnumType(_Je)
        }
    ]), rVd = k.makeMessageType("aiserver.v1.CreateKeyringSecretResponse", []), sVd = k.makeMessageType("aiserver.v1.UpdateKeyringSecretRequest", ()=>[
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
            T: k.getEnumType(_Je),
            opt: !0
        }
    ]), oVd = k.makeMessageType("aiserver.v1.UpdateKeyringSecretResponse", []), aVd = k.makeMessageType("aiserver.v1.RevokeKeyringSecretRequest", ()=>[
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
    ]), cVd = k.makeMessageType("aiserver.v1.RevokeKeyringSecretResponse", []), fdo = k.makeMessageType("aiserver.v1.KeyringGrant", ()=>[
        {
            no: 1,
            name: "principal_type",
            kind: "enum",
            T: k.getEnumType(KNn)
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
            T: k.getEnumType(NVi)
        }
    ]), lVd = k.makeMessageType("aiserver.v1.ListKeyringGrantsRequest", ()=>[
        {
            no: 1,
            name: "keyring_public_id",
            kind: "scalar",
            T: 9
        }
    ]), uVd = k.makeMessageType("aiserver.v1.ListKeyringGrantsResponse", ()=>[
        {
            no: 1,
            name: "grants",
            kind: "message",
            T: fdo,
            repeated: !0
        }
    ]), dVd = k.makeMessageType("aiserver.v1.GrantKeyringPermissionsRequest", ()=>[
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
            T: k.getEnumType(KNn)
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
            T: k.getEnumType(NVi)
        }
    ]), hVd = k.makeMessageType("aiserver.v1.GrantKeyringPermissionsResponse", []), pVd = k.makeMessageType("aiserver.v1.UpdateKeyringPermissionsRequest", ()=>[
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
            T: k.getEnumType(KNn)
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
            T: k.getEnumType(NVi)
        }
    ]), mVd = k.makeMessageType("aiserver.v1.UpdateKeyringPermissionsResponse", []), gVd = k.makeMessageType("aiserver.v1.RevokeKeyringPermissionsRequest", ()=>[
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
            T: k.getEnumType(KNn)
        },
        {
            no: 3,
            name: "principal_id",
            kind: "scalar",
            T: 9
        }
    ]), fVd = k.makeMessageType("aiserver.v1.RevokeKeyringPermissionsResponse", []), r2n = k.makeMessageType("aiserver.v1.CloudAgentVoiceCall", ()=>[
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
            T: vdo,
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
    ]), vdo = k.makeMessageType("aiserver.v1.CloudAgentVoiceCall.Turn", ()=>[
        {
            no: 1,
            name: "speaker",
            kind: "enum",
            T: k.getEnumType(Fkt)
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
}), Fkt = k.makeEnum("aiserver.v1.CloudAgentVoiceCall.Turn.Speaker", [
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
]), vVd = k.makeMessageType("aiserver.v1.CloudAgentVoiceCalls", ()=>[
        {
            no: 1,
            name: "calls",
            kind: "message",
            T: r2n,
            repeated: !0
        }
    ]), _do = k.makeMessageType("aiserver.v1.SaveCloudAgentVoiceCallRequest", ()=>[
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
            T: r2n
        }
    ]), _Vd = k.makeMessageType("aiserver.v1.SaveCloudAgentVoiceCallResponse", ()=>[
        {
            no: 1,
            name: "call",
            kind: "message",
            T: r2n
        }
    ]);

}
