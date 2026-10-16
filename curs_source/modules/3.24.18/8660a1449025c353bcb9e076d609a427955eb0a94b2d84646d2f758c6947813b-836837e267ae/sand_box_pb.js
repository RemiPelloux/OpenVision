import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var LNg, rbl, ONg, FNg, BNg, UNg, sbl, jNg, obl, $Ng, HNg, WNg, GNg, qNg, zNg, ups, VNg, KNg, YNg, XNg, ZNg, QNg, abl, lbl, cbl, ubl, dbl, V9e, hbl, pbl, mbl, gbl, fbl, vbl, _bl, bbl, IRi, ybl, Sbl, kbl, xRi, JNg, eLg, tLg, wbl, ARi, Cbl, Tbl, Ebl, Ibl, xbl, Abl, nLg, iLg, rLg, sLg, oLg, aLg, Rbl, lLg, Pbl, Mbl, Dbl, Nbl, Lbl, Obl, Fbl, Bbl, Ubl, cLg, jbl, $bl, Hbl, RRi, Wbl, Gbl, K9e, qbl, zbl, Vbl, Kbl, Ybl, dps, Xbl, Zbl, Qbl, hps, Jbl, eyl, tyl, uLg, nyl, iyl, ryl, dLg, hLg, syl, oyl, ayl, lyl, cyl, uyl, dyl, hyl, pyl, myl, gyl, fyl, G2n, vyl, _yl, PRi, byl, yyl, Syl, kyl, wyl, Cyl, Tyl, Eyl, pLg, Iyl, xyl, mLg, gLg, Ayl, fLg, pps, vLg, _Lg, Ryl, bLg, yLg, Pyl, SLg, Myl, kLg, Dyl, Nyl, Lyl, wLg, Oyl, CLg, TLg, Fyl, Byl, ELg, Uyl, jyl, $yl, Hyl, ILg, Wyl, Gyl, qyl;
export { $Ng, $bl, $yl, ARi, Abl, Ayl, BNg, Bbl, Byl, CLg, Cbl, Cyl, Dbl, Dyl, ELg, Ebl, Eyl, FNg, Fbl, Fyl, G2n, GNg, Gbl, Gyl, HNg, Hbl, Hyl, ILg, IRi, Ibl, Iyl, JNg, Jbl, K9e, KNg, Kbl, LNg, Lbl, Lyl, Mbl, Myl, Nbl, Nyl, ONg, Obl, Oyl, PRi, Pbl, Pyl, QNg, Qbl, RRi, Rbl, Ryl, SLg, Sbl, Syl, TLg, Tbl, Tyl, UNg, Ubl, Uyl, V9e, VNg, Vbl, WNg, Wbl, Wyl, XNg, Xbl, YNg, Ybl, ZNg, Zbl, _Lg, _bl, _yl, aLg, abl, ayl, bLg, bbl, byl, cLg, cbl, cyl, dLg, dbl, dps, dyl, eLg, eyl, fLg, fbl, fyl, gLg, gbl, gyl, hLg, hbl, hps, hyl, iLg, iyl, jNg, jbl, jyl, kLg, kbl, kyl, lLg, lbl, lyl, mLg, mbl, myl, nLg, nyl, oLg, obl, oyl, pLg, pbl, pps, pyl, qNg, qbl, qyl, rLg, rbl, ryl, sLg, sbl, syl, tLg, tyl, uLg, ubl, ups, uyl, vLg, vbl, vyl, wLg, wbl, wyl, xRi, xbl, xyl, yLg, ybl, yyl, zNg, zbl };
var __wakaru_zyl_initialized = false;
export function zyl() {
if (__wakaru_zyl_initialized) return;
__wakaru_zyl_initialized = true;
"use strict";
E(), hr(), LNg = x.makeEnum("aiserver.v1.CredentialLifecycleState", [
    {
        no: 0,
        name: "CREDENTIAL_LIFECYCLE_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CREDENTIAL_LIFECYCLE_STATE_ACTIVE",
        localName: "ACTIVE"
    },
    {
        no: 2,
        name: "CREDENTIAL_LIFECYCLE_STATE_EXPIRING",
        localName: "EXPIRING"
    },
    {
        no: 3,
        name: "CREDENTIAL_LIFECYCLE_STATE_GRACE",
        localName: "GRACE"
    },
    {
        no: 4,
        name: "CREDENTIAL_LIFECYCLE_STATE_EXPIRED",
        localName: "EXPIRED"
    },
    {
        no: 5,
        name: "CREDENTIAL_LIFECYCLE_STATE_PROVIDER_REJECTED",
        localName: "PROVIDER_REJECTED"
    }
]), rbl = x.makeEnum("aiserver.v1.CredentialExpirationMode", [
    {
        no: 0,
        name: "CREDENTIAL_EXPIRATION_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CREDENTIAL_EXPIRATION_MODE_DISABLED",
        localName: "DISABLED"
    },
    {
        no: 2,
        name: "CREDENTIAL_EXPIRATION_MODE_WARN",
        localName: "WARN"
    },
    {
        no: 3,
        name: "CREDENTIAL_EXPIRATION_MODE_ENFORCE",
        localName: "ENFORCE"
    }
]), ONg = x.makeEnum("aiserver.v1.CredentialTargetRuleKind", [
    {
        no: 0,
        name: "CREDENTIAL_TARGET_RULE_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CREDENTIAL_TARGET_RULE_KIND_EXACT_HOST_PORT",
        localName: "EXACT_HOST_PORT"
    },
    {
        no: 2,
        name: "CREDENTIAL_TARGET_RULE_KIND_REGISTRABLE_DOMAIN",
        localName: "REGISTRABLE_DOMAIN"
    }
]), FNg = x.makeEnum("aiserver.v1.OnePasswordConnectionKind", [
    {
        no: 0,
        name: "ONE_PASSWORD_CONNECTION_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ONE_PASSWORD_CONNECTION_KIND_SERVICE_ACCOUNT",
        localName: "SERVICE_ACCOUNT"
    },
    {
        no: 2,
        name: "ONE_PASSWORD_CONNECTION_KIND_OAUTH_BROKER",
        localName: "OAUTH_BROKER"
    }
]), BNg = x.makeEnum("aiserver.v1.OnePasswordBrokerConnectionState", [
    {
        no: 0,
        name: "ONE_PASSWORD_BROKER_CONNECTION_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ONE_PASSWORD_BROKER_CONNECTION_STATE_PAIRING",
        localName: "PAIRING"
    },
    {
        no: 2,
        name: "ONE_PASSWORD_BROKER_CONNECTION_STATE_CONNECTED",
        localName: "CONNECTED"
    },
    {
        no: 3,
        name: "ONE_PASSWORD_BROKER_CONNECTION_STATE_RECONNECT_REQUIRED",
        localName: "RECONNECT_REQUIRED"
    }
]), UNg = x.makeEnum("aiserver.v1.OnePasswordSyncTrigger", [
    {
        no: 0,
        name: "ONE_PASSWORD_SYNC_TRIGGER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ONE_PASSWORD_SYNC_TRIGGER_MANUAL",
        localName: "MANUAL"
    },
    {
        no: 2,
        name: "ONE_PASSWORD_SYNC_TRIGGER_APP_FOCUS",
        localName: "APP_FOCUS"
    }
]), sbl = x.makeEnum("aiserver.v1.SandCredentialDecisionHarness", [
    {
        no: 0,
        name: "SAND_CREDENTIAL_DECISION_HARNESS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SAND_CREDENTIAL_DECISION_HARNESS_BOX",
        localName: "BOX"
    },
    {
        no: 2,
        name: "SAND_CREDENTIAL_DECISION_HARNESS_TEMPORAL",
        localName: "TEMPORAL"
    }
]), jNg = x.makeEnum("aiserver.v1.SandSetupManifestScopeKind", [
    {
        no: 0,
        name: "SAND_SETUP_MANIFEST_SCOPE_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SAND_SETUP_MANIFEST_SCOPE_KIND_USER",
        localName: "USER"
    },
    {
        no: 2,
        name: "SAND_SETUP_MANIFEST_SCOPE_KIND_TEAM",
        localName: "TEAM"
    },
    {
        no: 3,
        name: "SAND_SETUP_MANIFEST_SCOPE_KIND_ORGANIZATION",
        localName: "ORGANIZATION"
    }
]), obl = x.makeEnum("aiserver.v1.BulkTeamMemberSandBoxAction", [
    {
        no: 0,
        name: "BULK_TEAM_MEMBER_SAND_BOX_ACTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BULK_TEAM_MEMBER_SAND_BOX_ACTION_KILL",
        localName: "KILL"
    },
    {
        no: 2,
        name: "BULK_TEAM_MEMBER_SAND_BOX_ACTION_RECREATE",
        localName: "RECREATE"
    },
    {
        no: 3,
        name: "BULK_TEAM_MEMBER_SAND_BOX_ACTION_PERMANENT_DELETE",
        localName: "PERMANENT_DELETE"
    }
]), $Ng = x.makeEnum("aiserver.v1.BulkTeamMemberSandBoxItemState", [
    {
        no: 0,
        name: "BULK_TEAM_MEMBER_SAND_BOX_ITEM_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BULK_TEAM_MEMBER_SAND_BOX_ITEM_STATE_QUEUED",
        localName: "QUEUED"
    },
    {
        no: 2,
        name: "BULK_TEAM_MEMBER_SAND_BOX_ITEM_STATE_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 3,
        name: "BULK_TEAM_MEMBER_SAND_BOX_ITEM_STATE_SUCCEEDED",
        localName: "SUCCEEDED"
    },
    {
        no: 4,
        name: "BULK_TEAM_MEMBER_SAND_BOX_ITEM_STATE_SKIPPED",
        localName: "SKIPPED"
    },
    {
        no: 5,
        name: "BULK_TEAM_MEMBER_SAND_BOX_ITEM_STATE_FAILED",
        localName: "FAILED"
    }
]), HNg = x.makeEnum("aiserver.v1.BulkTeamMemberSandBoxOperationState", [
    {
        no: 0,
        name: "BULK_TEAM_MEMBER_SAND_BOX_OPERATION_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BULK_TEAM_MEMBER_SAND_BOX_OPERATION_STATE_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 2,
        name: "BULK_TEAM_MEMBER_SAND_BOX_OPERATION_STATE_SUCCEEDED",
        localName: "SUCCEEDED"
    },
    {
        no: 3,
        name: "BULK_TEAM_MEMBER_SAND_BOX_OPERATION_STATE_PARTIALLY_SUCCEEDED",
        localName: "PARTIALLY_SUCCEEDED"
    },
    {
        no: 4,
        name: "BULK_TEAM_MEMBER_SAND_BOX_OPERATION_STATE_FAILED",
        localName: "FAILED"
    }
]), WNg = x.makeEnum("aiserver.v1.AdminRefreshSandBoxEgressTrigger", [
    {
        no: 0,
        name: "ADMIN_REFRESH_SAND_BOX_EGRESS_TRIGGER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ADMIN_REFRESH_SAND_BOX_EGRESS_TRIGGER_SINGLE",
        localName: "SINGLE"
    },
    {
        no: 2,
        name: "ADMIN_REFRESH_SAND_BOX_EGRESS_TRIGGER_BULK",
        localName: "BULK"
    }
]), GNg = x.makeEnum("aiserver.v1.AdminRefreshSandBoxEgressStatus", [
    {
        no: 0,
        name: "ADMIN_REFRESH_SAND_BOX_EGRESS_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ADMIN_REFRESH_SAND_BOX_EGRESS_STATUS_PUSHED",
        localName: "PUSHED"
    },
    {
        no: 2,
        name: "ADMIN_REFRESH_SAND_BOX_EGRESS_STATUS_NO_BOX",
        localName: "NO_BOX"
    },
    {
        no: 3,
        name: "ADMIN_REFRESH_SAND_BOX_EGRESS_STATUS_ERROR",
        localName: "ERROR"
    }
]), qNg = x.makeEnum("aiserver.v1.AdminRefreshSandBoxEgressLabelOutcome", [
    {
        no: 0,
        name: "ADMIN_REFRESH_SAND_BOX_EGRESS_LABEL_OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ADMIN_REFRESH_SAND_BOX_EGRESS_LABEL_OUTCOME_REFRESHED",
        localName: "REFRESHED"
    },
    {
        no: 2,
        name: "ADMIN_REFRESH_SAND_BOX_EGRESS_LABEL_OUTCOME_SKIPPED",
        localName: "SKIPPED"
    },
    {
        no: 3,
        name: "ADMIN_REFRESH_SAND_BOX_EGRESS_LABEL_OUTCOME_UNSUPPORTED_HOST",
        localName: "UNSUPPORTED_HOST"
    },
    {
        no: 4,
        name: "ADMIN_REFRESH_SAND_BOX_EGRESS_LABEL_OUTCOME_FAILED",
        localName: "FAILED"
    }
]), zNg = x.makeEnum("aiserver.v1.SandBoxMigrationPhase", [
    {
        no: 0,
        name: "SAND_BOX_MIGRATION_PHASE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SAND_BOX_MIGRATION_PHASE_BACKING_UP",
        localName: "BACKING_UP"
    },
    {
        no: 2,
        name: "SAND_BOX_MIGRATION_PHASE_CREATING",
        localName: "CREATING"
    },
    {
        no: 3,
        name: "SAND_BOX_MIGRATION_PHASE_MOVING",
        localName: "MOVING"
    },
    {
        no: 4,
        name: "SAND_BOX_MIGRATION_PHASE_CLEANING_UP",
        localName: "CLEANING_UP"
    },
    {
        no: 5,
        name: "SAND_BOX_MIGRATION_PHASE_WIPING",
        localName: "WIPING"
    },
    {
        no: 6,
        name: "SAND_BOX_MIGRATION_PHASE_DONE",
        localName: "DONE"
    },
    {
        no: 7,
        name: "SAND_BOX_MIGRATION_PHASE_FAILED",
        localName: "FAILED"
    }
]), ups = x.makeEnum("aiserver.v1.SandBoxRunState", [
    {
        no: 0,
        name: "SAND_BOX_RUN_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SAND_BOX_RUN_STATE_ABSENT",
        localName: "ABSENT"
    },
    {
        no: 2,
        name: "SAND_BOX_RUN_STATE_HIBERNATED",
        localName: "HIBERNATED"
    },
    {
        no: 3,
        name: "SAND_BOX_RUN_STATE_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 4,
        name: "SAND_BOX_RUN_STATE_STARTING",
        localName: "STARTING"
    }
]), VNg = x.makeEnum("aiserver.v1.SandBoxUpgradeScheduleState", [
    {
        no: 0,
        name: "SAND_BOX_UPGRADE_SCHEDULE_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SAND_BOX_UPGRADE_SCHEDULE_STATE_SCHEDULED",
        localName: "SCHEDULED"
    },
    {
        no: 2,
        name: "SAND_BOX_UPGRADE_SCHEDULE_STATE_CLAIMED",
        localName: "CLAIMED"
    },
    {
        no: 3,
        name: "SAND_BOX_UPGRADE_SCHEDULE_STATE_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 4,
        name: "SAND_BOX_UPGRADE_SCHEDULE_STATE_WAITING_FOR_IMAGE",
        localName: "WAITING_FOR_IMAGE"
    },
    {
        no: 5,
        name: "SAND_BOX_UPGRADE_SCHEDULE_STATE_COMPLETED",
        localName: "COMPLETED"
    },
    {
        no: 6,
        name: "SAND_BOX_UPGRADE_SCHEDULE_STATE_MISSED",
        localName: "MISSED"
    },
    {
        no: 7,
        name: "SAND_BOX_UPGRADE_SCHEDULE_STATE_FAILED",
        localName: "FAILED"
    },
    {
        no: 8,
        name: "SAND_BOX_UPGRADE_SCHEDULE_STATE_CANCELLED",
        localName: "CANCELLED"
    }
]), KNg = x.makeEnum("aiserver.v1.SandBoxStoreMultipartOperationFailureCode", [
    {
        no: 0,
        name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_PRECONDITION_FAILED",
        localName: "PRECONDITION_FAILED"
    },
    {
        no: 2,
        name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_UPLOAD_NOT_FOUND",
        localName: "UPLOAD_NOT_FOUND"
    },
    {
        no: 3,
        name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_INVALID_PARTS",
        localName: "INVALID_PARTS"
    },
    {
        no: 4,
        name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_CHECKSUM_MISMATCH",
        localName: "CHECKSUM_MISMATCH"
    },
    {
        no: 5,
        name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_TRANSIENT",
        localName: "TRANSIENT"
    },
    {
        no: 6,
        name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_INTERNAL",
        localName: "INTERNAL"
    },
    {
        no: 7,
        name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_RESTART_REQUIRED",
        localName: "RESTART_REQUIRED"
    }
]), YNg = x.makeEnum("aiserver.v1.SandBoxStoreManifestCommitStatus", [
    {
        no: 0,
        name: "SAND_BOX_STORE_MANIFEST_COMMIT_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SAND_BOX_STORE_MANIFEST_COMMIT_STATUS_COMMITTED",
        localName: "COMMITTED"
    },
    {
        no: 2,
        name: "SAND_BOX_STORE_MANIFEST_COMMIT_STATUS_RETRY",
        localName: "RETRY"
    },
    {
        no: 3,
        name: "SAND_BOX_STORE_MANIFEST_COMMIT_STATUS_FENCED",
        localName: "FENCED"
    }
]), XNg = x.makeMessageType("aiserver.v1.CredentialTargetRule", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(ONg)
        },
        {
            no: 2,
            name: "scheme",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "host",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "port",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "registrable_domain",
            kind: "scalar",
            T: 9
        }
    ]), ZNg = x.makeMessageType("aiserver.v1.OnePasswordCredentialItem", ()=>[
        {
            no: 1,
            name: "credential_id",
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
            name: "category",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "sites",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "target_rules",
            kind: "message",
            T: XNg,
            repeated: !0
        },
        {
            no: 6,
            name: "vault_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "connection_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "catalog_revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "has_one_time_code",
            kind: "scalar",
            T: 8
        }
    ]), QNg = x.makeMessageType("aiserver.v1.OnePasswordConnection", ()=>[
        {
            no: 1,
            name: "connection_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "account_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "account_email",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "account_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "vault_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "vault_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "item_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "catalog_revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "last_successful_sync_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 10,
            name: "last_sync_error_code",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "credential_generation",
            kind: "scalar",
            T: 5
        },
        {
            no: 12,
            name: "issued_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 13,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 14,
            name: "renew_by_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 15,
            name: "reminder_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 16,
            name: "lifecycle_state",
            kind: "enum",
            T: x.getEnumType(LNg)
        },
        {
            no: 17,
            name: "expiration_mode",
            kind: "enum",
            T: x.getEnumType(rbl)
        },
        {
            no: 18,
            name: "provider_expiry_requested",
            kind: "scalar",
            T: 8
        },
        {
            no: 20,
            name: "connection_kind",
            kind: "enum",
            T: x.getEnumType(FNg)
        },
        {
            no: 21,
            name: "broker_state",
            kind: "enum",
            T: x.getEnumType(BNg)
        }
    ]), abl = x.makeMessageType("aiserver.v1.StartOnePasswordOAuthRequest", ()=>[
        {
            no: 1,
            name: "connection_id",
            kind: "scalar",
            T: 9
        }
    ]), lbl = x.makeMessageType("aiserver.v1.StartOnePasswordOAuthResponse", ()=>[
        {
            no: 1,
            name: "authorize_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "state",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "redirect_uri",
            kind: "scalar",
            T: 9
        }
    ]), cbl = x.makeMessageType("aiserver.v1.StoreOnePasswordIntegrationKeyRequest", ()=>[
        {
            no: 1,
            name: "state",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "integration_key",
            kind: "scalar",
            T: 9
        }
    ]), ubl = x.makeMessageType("aiserver.v1.StoreOnePasswordIntegrationKeyResponse", ()=>[
        {
            no: 1,
            name: "connection_id",
            kind: "scalar",
            T: 9
        }
    ]), dbl = x.makeMessageType("aiserver.v1.CompleteOnePasswordOAuthRequest", ()=>[
        {
            no: 1,
            name: "state",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "code",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), V9e = x.makeMessageType("aiserver.v1.OnePasswordState", ()=>[
        {
            no: 1,
            name: "connections",
            kind: "message",
            T: QNg,
            repeated: !0
        },
        {
            no: 2,
            name: "items",
            kind: "message",
            T: ZNg,
            repeated: !0
        }
    ]), hbl = x.makeMessageType("aiserver.v1.BeginOnePasswordConnectionRequest", ()=>[
        {
            no: 1,
            name: "connection_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "vault_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "service_account_token",
            kind: "scalar",
            T: 9
        }
    ]), pbl = x.makeMessageType("aiserver.v1.BeginOnePasswordConnectionResponse", ()=>[
        {
            no: 1,
            name: "mint_ticket",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "connection_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expected_generation",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "expiration_mode",
            kind: "enum",
            T: x.getEnumType(rbl)
        },
        {
            no: 5,
            name: "provider_expires_in_seconds",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "credential_expires_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 7,
            name: "ticket_expires_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 8,
            name: "policy_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "vault_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "vault_name",
            kind: "scalar",
            T: 9
        }
    ]), mbl = x.makeMessageType("aiserver.v1.CompleteOnePasswordConnectionRequest", ()=>[
        {
            no: 1,
            name: "mint_ticket",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "service_account_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "account_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "account_email",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "account_url",
            kind: "scalar",
            T: 9
        }
    ]), gbl = x.makeMessageType("aiserver.v1.GetOnePasswordStateRequest", []), fbl = x.makeMessageType("aiserver.v1.SyncOnePasswordConnectionsRequest", ()=>[
        {
            no: 1,
            name: "trigger",
            kind: "enum",
            T: x.getEnumType(UNg)
        }
    ]), vbl = x.makeMessageType("aiserver.v1.DeleteOnePasswordConnectionRequest", ()=>[
        {
            no: 1,
            name: "connection_id",
            kind: "scalar",
            T: 9
        }
    ]), _bl = x.makeMessageType("aiserver.v1.ApproveOnePasswordCredentialRequestRequest", ()=>[
        {
            no: 1,
            name: "entry_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "credential_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "connection_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "catalog_revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "target_site",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "harness",
            kind: "enum",
            T: x.getEnumType(sbl)
        }
    ]), bbl = x.makeMessageType("aiserver.v1.DenyOnePasswordCredentialRequestRequest", ()=>[
        {
            no: 1,
            name: "entry_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "harness",
            kind: "enum",
            T: x.getEnumType(sbl)
        }
    ]), IRi = x.makeMessageType("aiserver.v1.OnePasswordCredentialDecisionResponse", ()=>[
        {
            no: 1,
            name: "ok",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        }
    ]), ybl = x.makeMessageType("aiserver.v1.NotifySandAgentTurnFinishedRequest", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message_preview",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "last_message_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "awaiting_user_response",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "member_agent_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 8,
            name: "sender_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "message_content_json",
            kind: "scalar",
            T: 9
        }
    ]), Sbl = x.makeMessageType("aiserver.v1.NotifySandAgentTurnFinishedResponse", []), kbl = x.makeMessageType("aiserver.v1.ListSandSetupManifestsRequest", ()=>[
        {
            no: 1,
            name: "include_team_secrets",
            kind: "scalar",
            T: 8
        }
    ]), xRi = x.makeMessageType("aiserver.v1.SandSetupManifestEntry", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "setup",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "check",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), JNg = x.makeMessageType("aiserver.v1.SandAssignedSetupManifest", ()=>[
        {
            no: 1,
            name: "scope_kind",
            kind: "enum",
            T: x.getEnumType(jNg)
        },
        {
            no: 2,
            name: "scope_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "manifest_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "entries",
            kind: "message",
            T: xRi,
            repeated: !0
        }
    ]), eLg = x.makeMessageType("aiserver.v1.SandSetupSecret", ()=>[
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
        }
    ]), tLg = x.makeMessageType("aiserver.v1.SandSetupTeamSecrets", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "secrets",
            kind: "message",
            T: eLg,
            repeated: !0
        }
    ]), wbl = x.makeMessageType("aiserver.v1.ListSandSetupManifestsResponse", ()=>[
        {
            no: 1,
            name: "schema_version",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "manifests",
            kind: "message",
            T: JNg,
            repeated: !0
        },
        {
            no: 3,
            name: "team_secrets",
            kind: "message",
            T: tLg,
            repeated: !0
        }
    ]), ARi = x.makeMessageType("aiserver.v1.SandTeamSetupManifest", ()=>[
        {
            no: 1,
            name: "manifest_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "entries",
            kind: "message",
            T: xRi,
            repeated: !0
        }
    ]), Cbl = x.makeMessageType("aiserver.v1.ListTeamSandSetupManifestsRequest", []), Tbl = x.makeMessageType("aiserver.v1.ListTeamSandSetupManifestsResponse", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "can_manage",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "manifests",
            kind: "message",
            T: ARi,
            repeated: !0
        }
    ]), Ebl = x.makeMessageType("aiserver.v1.SaveTeamSandSetupManifestRequest", ()=>[
        {
            no: 1,
            name: "manifest_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expected_etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "entries",
            kind: "message",
            T: xRi,
            repeated: !0
        }
    ]), Ibl = x.makeMessageType("aiserver.v1.SaveTeamSandSetupManifestResponse", ()=>[
        {
            no: 1,
            name: "manifest",
            kind: "message",
            T: ARi
        }
    ]), xbl = x.makeMessageType("aiserver.v1.DeleteTeamSandSetupManifestRequest", ()=>[
        {
            no: 1,
            name: "manifest_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expected_etag",
            kind: "scalar",
            T: 9
        }
    ]), Abl = x.makeMessageType("aiserver.v1.DeleteTeamSandSetupManifestResponse", []), nLg = x.makeMessageType("aiserver.v1.ListTeamGroupSandSetupManifestsRequest", ()=>[
        {
            no: 1,
            name: "group_public_id",
            kind: "scalar",
            T: 9
        }
    ]), iLg = x.makeMessageType("aiserver.v1.ListTeamGroupSandSetupManifestsResponse", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "can_manage",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "manifests",
            kind: "message",
            T: ARi,
            repeated: !0
        }
    ]), rLg = x.makeMessageType("aiserver.v1.SaveTeamGroupSandSetupManifestRequest", ()=>[
        {
            no: 1,
            name: "group_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "manifest_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expected_etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "entries",
            kind: "message",
            T: xRi,
            repeated: !0
        }
    ]), sLg = x.makeMessageType("aiserver.v1.SaveTeamGroupSandSetupManifestResponse", ()=>[
        {
            no: 1,
            name: "manifest",
            kind: "message",
            T: ARi
        }
    ]), oLg = x.makeMessageType("aiserver.v1.DeleteTeamGroupSandSetupManifestRequest", ()=>[
        {
            no: 1,
            name: "group_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "manifest_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expected_etag",
            kind: "scalar",
            T: 9
        }
    ]), aLg = x.makeMessageType("aiserver.v1.DeleteTeamGroupSandSetupManifestResponse", []), Rbl = x.makeMessageType("aiserver.v1.ListTeamMemberSandBoxesRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "user_id",
            kind: "scalar",
            T: 5
        }
    ]), lLg = x.makeMessageType("aiserver.v1.TeamMemberSandBoxPod", ()=>[
        {
            no: 1,
            name: "cluster",
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
            name: "tenant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "flavor",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "run_state",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "image_tag",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "created_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 8,
            name: "last_active_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 9,
            name: "node_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "failure_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Pbl = x.makeMessageType("aiserver.v1.ListTeamMemberSandBoxesResponse", ()=>[
        {
            no: 1,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "email",
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
            name: "boxes",
            kind: "message",
            T: lLg,
            repeated: !0
        },
        {
            no: 5,
            name: "scan_incomplete",
            kind: "scalar",
            T: 8
        }
    ]), Mbl = x.makeMessageType("aiserver.v1.KillTeamMemberSandBoxRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "pod_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "cluster",
            kind: "scalar",
            T: 9
        }
    ]), Dbl = x.makeMessageType("aiserver.v1.KillTeamMemberSandBoxResponse", ()=>[
        {
            no: 1,
            name: "killed",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "deleted_count",
            kind: "scalar",
            T: 13
        }
    ]), Nbl = x.makeMessageType("aiserver.v1.RecreateTeamMemberSandBoxRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "force",
            kind: "scalar",
            T: 8
        }
    ]), Lbl = x.makeMessageType("aiserver.v1.GetTeamMemberSandBoxMigrationStatusRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "operation_id",
            kind: "scalar",
            T: 9
        }
    ]), Obl = x.makeMessageType("aiserver.v1.GetTeamMemberSandBoxMigrationStatusResponse", ()=>[
        {
            no: 1,
            name: "event",
            kind: "message",
            T: G2n,
            opt: !0
        }
    ]), Fbl = x.makeMessageType("aiserver.v1.StartBulkTeamMemberSandBoxOperationRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "user_ids",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 3,
            name: "action",
            kind: "enum",
            T: x.getEnumType(obl)
        },
        {
            no: 4,
            name: "force",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "operation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "clear_sand_box_restart_required",
            kind: "scalar",
            T: 8
        }
    ]), Bbl = x.makeMessageType("aiserver.v1.StartBulkTeamMemberSandBoxOperationResponse", ()=>[
        {
            no: 1,
            name: "operation_id",
            kind: "scalar",
            T: 9
        }
    ]), Ubl = x.makeMessageType("aiserver.v1.GetBulkTeamMemberSandBoxOperationStatusRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "operation_id",
            kind: "scalar",
            T: 9
        }
    ]), cLg = x.makeMessageType("aiserver.v1.BulkTeamMemberSandBoxOperationItem", ()=>[
        {
            no: 1,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "state",
            kind: "enum",
            T: x.getEnumType($Ng)
        },
        {
            no: 3,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "recreate_operation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), jbl = x.makeMessageType("aiserver.v1.GetBulkTeamMemberSandBoxOperationStatusResponse", ()=>[
        {
            no: 1,
            name: "operation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "action",
            kind: "enum",
            T: x.getEnumType(obl)
        },
        {
            no: 3,
            name: "state",
            kind: "enum",
            T: x.getEnumType(HNg)
        },
        {
            no: 4,
            name: "total_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "queued_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "running_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "succeeded_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 8,
            name: "skipped_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "failed_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 10,
            name: "items",
            kind: "message",
            T: cLg,
            repeated: !0
        },
        {
            no: 11,
            name: "no_box_skipped_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 12,
            name: "items_truncated",
            kind: "scalar",
            T: 8
        }
    ]), $bl = x.makeMessageType("aiserver.v1.EnsureSandBoxRequest", ()=>[
        {
            no: 2,
            name: "wake",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "supports_asleep_box",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Hbl = x.makeMessageType("aiserver.v1.EnsureSandBoxWindowRequest", ()=>[
        {
            no: 2,
            name: "window_index",
            kind: "scalar",
            T: 5
        }
    ]), RRi = x.makeMessageType("aiserver.v1.EnsureSandBoxResponse", ()=>[
        {
            no: 1,
            name: "cluster",
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
            name: "pod_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "network_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "exec_daemon_auth_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "exec_daemon_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "vnc_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "terminals_folder",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "fork_vnc_base_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "image_update_available",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "gateway_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "gateway_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "run_state",
            kind: "enum",
            T: x.getEnumType(ups)
        },
        {
            no: 14,
            name: "egress_tunnel_ownership",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Wbl = x.makeMessageType("aiserver.v1.RecreateSandBoxRequest", ()=>[
        {
            no: 1,
            name: "preserve_data",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "force",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "acknowledge_terminal_upgrade_schedule",
            kind: "scalar",
            T: 8
        }
    ]), Gbl = x.makeMessageType("aiserver.v1.ForceRecreateSandBoxRequest", []), K9e = x.makeMessageType("aiserver.v1.RecreateSandBoxResponse", ()=>[
        {
            no: 1,
            name: "started",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "operation_id",
            kind: "scalar",
            T: 9
        }
    ]), qbl = x.makeMessageType("aiserver.v1.AdminRecreateSandBoxRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "preserve_data",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "force",
            kind: "scalar",
            T: 8
        }
    ]), zbl = x.makeMessageType("aiserver.v1.AdminForceRecreateSandBoxRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        }
    ]), Vbl = x.makeMessageType("aiserver.v1.AdminBreakGlassDeleteSandBoxPodRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pod_id",
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
            name: "actor_email",
            kind: "scalar",
            T: 9
        }
    ]), Kbl = x.makeMessageType("aiserver.v1.AdminBreakGlassDeleteSandBoxPodResponse", ()=>[
        {
            no: 1,
            name: "deleted",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "started",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "recreate_reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "operation_id",
            kind: "scalar",
            T: 9
        }
    ]), Ybl = x.makeMessageType("aiserver.v1.AdminSandBoxStoreStatusRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        }
    ]), dps = x.makeMessageType("aiserver.v1.AdminSandBoxStoreStatusResponse", ()=>[
        {
            no: 1,
            name: "durable",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "entry_count",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "total_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "last_snapshot_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "reachable",
            kind: "scalar",
            T: 8
        }
    ]), Xbl = x.makeMessageType("aiserver.v1.AdminUpdateSandBoxHostRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "force",
            kind: "scalar",
            T: 8
        }
    ]), Zbl = x.makeMessageType("aiserver.v1.AdminUpdateSandBoxHostResponse", ()=>[
        {
            no: 1,
            name: "started",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "version",
            kind: "scalar",
            T: 9
        }
    ]), Qbl = x.makeMessageType("aiserver.v1.AdminSandBoxHostStatusRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        }
    ]), hps = x.makeMessageType("aiserver.v1.AdminSandBoxHostStatusResponse", ()=>[
        {
            no: 1,
            name: "gateway_reachable",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "host_version",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "host_update_available",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "latest_host_version",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "is_busy",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "last_busy_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), Jbl = x.makeMessageType("aiserver.v1.AdminSnapshotSandBoxStoreRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        }
    ]), eyl = x.makeMessageType("aiserver.v1.AdminSnapshotSandBoxStoreResponse", ()=>[
        {
            no: 1,
            name: "ok",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "manifest_entries",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "files_uploaded",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), tyl = x.makeMessageType("aiserver.v1.AdminListSandBoxStoreManifestVersionsRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "cursor",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "max_versions",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "parse_limit",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "before_timestamp_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), uLg = x.makeMessageType("aiserver.v1.SandBoxStoreManifestVersion", ()=>[
        {
            no: 1,
            name: "version_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "last_modified_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "is_latest",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "entry_count",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 7,
            name: "total_bytes",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 8,
            name: "fully_hydrated",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "parse_error",
            kind: "scalar",
            T: 9
        }
    ]), nyl = x.makeMessageType("aiserver.v1.AdminListSandBoxStoreManifestVersionsResponse", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "versions",
            kind: "message",
            T: uLg,
            repeated: !0
        },
        {
            no: 3,
            name: "next_cursor",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "time_scan_capped",
            kind: "scalar",
            T: 8
        }
    ]), iyl = x.makeMessageType("aiserver.v1.AdminStatSandBoxStoreObjectRequest", ()=>[
        {
            no: 1,
            name: "s3_link",
            kind: "scalar",
            T: 9
        }
    ]), ryl = x.makeMessageType("aiserver.v1.AdminStatSandBoxStoreObjectResponse", ()=>[
        {
            no: 1,
            name: "bucket",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "exists",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "version_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "last_modified_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 7,
            name: "etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "server_side_encryption",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "kms_key_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "bucket_key_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "storage_class",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "bucket_default_server_side_encryption",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "bucket_default_kms_key_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "bucket_default_error",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "expected_key",
            kind: "message",
            T: dLg
        }
    ]), dLg = x.makeMessageType("aiserver.v1.AdminStatSandBoxStoreObjectExpectedKey", ()=>[
        {
            no: 1,
            name: "source",
            kind: "enum",
            T: x.getEnumType(hLg)
        },
        {
            no: 2,
            name: "kms_key_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "note",
            kind: "scalar",
            T: 9
        }
    ]), hLg = x.makeEnum("aiserver.v1.AdminStatSandBoxStoreObjectExpectedKey.Source", [
    {
        no: 0,
        name: "SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SOURCE_UNRESOLVED",
        localName: "UNRESOLVED"
    },
    {
        no: 2,
        name: "SOURCE_BUCKET_DEFAULT",
        localName: "BUCKET_DEFAULT"
    },
    {
        no: 3,
        name: "SOURCE_ORG_KEY",
        localName: "ORG_KEY"
    }
]), syl = x.makeMessageType("aiserver.v1.AdminRestoreSandBoxStoreSnapshotRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "manifest_version_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "expected_entry_count",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), oyl = x.makeMessageType("aiserver.v1.AdminRestoreSandBoxStoreSnapshotResponse", ()=>[
        {
            no: 1,
            name: "started",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "operation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "current_entry_count",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "target_entry_count",
            kind: "scalar",
            T: 3
        }
    ]), ayl = x.makeMessageType("aiserver.v1.AdminHibernateSandBoxRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "force",
            kind: "scalar",
            T: 8
        }
    ]), lyl = x.makeMessageType("aiserver.v1.AdminHibernateSandBoxResponse", ()=>[
        {
            no: 1,
            name: "started",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), cyl = x.makeMessageType("aiserver.v1.AdminRefreshSandBoxEgressRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "trigger",
            kind: "enum",
            T: x.getEnumType(WNg)
        },
        {
            no: 4,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), uyl = x.makeMessageType("aiserver.v1.AdminRefreshSandBoxEgressResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(GNg)
        },
        {
            no: 2,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "cluster",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "tenant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "pod_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "runtime_applied",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "http_proxy_rule_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "http_proxy_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "label_outcome",
            kind: "enum",
            T: x.getEnumType(qNg)
        },
        {
            no: 10,
            name: "label_applied",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "label_persisted",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "label_reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), dyl = x.makeMessageType("aiserver.v1.AdminListSandAgentsRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        }
    ]), hyl = x.makeMessageType("aiserver.v1.AdminListSandAgentsResponse", ()=>[
        {
            no: 1,
            name: "reachable",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "agents_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), pyl = x.makeMessageType("aiserver.v1.AdminGetSandAgentTranscriptPageRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "before_seq",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "limit",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "since_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 7,
            name: "until_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 8,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), myl = x.makeMessageType("aiserver.v1.AdminGetSandAgentTranscriptPageResponse", ()=>[
        {
            no: 1,
            name: "reachable",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "entries_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "next_before_seq",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), gyl = x.makeMessageType("aiserver.v1.WatchSandBoxMigrationRequest", ()=>[
        {
            no: 1,
            name: "from_offset_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "include_finished",
            kind: "scalar",
            T: 8
        }
    ]), fyl = x.makeMessageType("aiserver.v1.AdminWatchSandBoxMigrationRequest", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "flavor",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "from_offset_key",
            kind: "scalar",
            T: 9
        }
    ]), G2n = x.makeMessageType("aiserver.v1.SandBoxMigrationEvent", ()=>[
        {
            no: 1,
            name: "phase",
            kind: "enum",
            T: x.getEnumType(zNg)
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "offset_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "operation_id",
            kind: "scalar",
            T: 9
        }
    ]), vyl = x.makeMessageType("aiserver.v1.GetSandBoxRunStateRequest", []), _yl = x.makeMessageType("aiserver.v1.GetSandBoxRunStateResponse", ()=>[
        {
            no: 1,
            name: "state",
            kind: "enum",
            T: x.getEnumType(ups)
        },
        {
            no: 2,
            name: "image_update_available",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "egress_tunnel_ownership",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), PRi = x.makeMessageType("aiserver.v1.SandBoxUpgradeSchedule", ()=>[
        {
            no: 1,
            name: "timezone",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "local_time",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "recurring",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "target_image_tag",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "next_fire_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 6,
            name: "state",
            kind: "enum",
            T: x.getEnumType(VNg)
        },
        {
            no: 7,
            name: "last_completed_image_tag",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "failure_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), byl = x.makeMessageType("aiserver.v1.GetSandBoxUpgradeScheduleRequest", []), yyl = x.makeMessageType("aiserver.v1.GetSandBoxUpgradeScheduleResponse", ()=>[
        {
            no: 1,
            name: "schedule",
            kind: "message",
            T: PRi
        }
    ]), Syl = x.makeMessageType("aiserver.v1.ScheduleSandBoxUpgradeRequest", ()=>[
        {
            no: 1,
            name: "timezone",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "local_time",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "recurring",
            kind: "scalar",
            T: 8
        }
    ]), kyl = x.makeMessageType("aiserver.v1.ScheduleSandBoxUpgradeResponse", ()=>[
        {
            no: 1,
            name: "schedule",
            kind: "message",
            T: PRi
        }
    ]), wyl = x.makeMessageType("aiserver.v1.CancelSandBoxUpgradeRequest", ()=>[
        {
            no: 1,
            name: "dismiss_terminal_outcome",
            kind: "scalar",
            T: 8
        }
    ]), Cyl = x.makeMessageType("aiserver.v1.CancelSandBoxUpgradeResponse", ()=>[
        {
            no: 1,
            name: "schedule",
            kind: "message",
            T: PRi
        }
    ]), Tyl = x.makeMessageType("aiserver.v1.RescheduleSandBoxUpgradeRequest", ()=>[
        {
            no: 1,
            name: "timezone",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "local_time",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "recurring",
            kind: "scalar",
            T: 8
        }
    ]), Eyl = x.makeMessageType("aiserver.v1.RescheduleSandBoxUpgradeResponse", ()=>[
        {
            no: 1,
            name: "schedule",
            kind: "message",
            T: PRi
        }
    ]), pLg = x.makeMessageType("aiserver.v1.SandBoxDescriptor", ()=>[
        {
            no: 2,
            name: "running",
            kind: "scalar",
            T: 8
        }
    ]), Iyl = x.makeMessageType("aiserver.v1.ListSandBoxesRequest", []), xyl = x.makeMessageType("aiserver.v1.ListSandBoxesResponse", ()=>[
        {
            no: 1,
            name: "boxes",
            kind: "message",
            T: pLg,
            repeated: !0
        }
    ]), mLg = x.makeMessageType("aiserver.v1.SandBoxStoreMultipartPart", ()=>[
        {
            no: 1,
            name: "part_number",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "sha256",
            kind: "scalar",
            T: 9
        }
    ]), gLg = x.makeMessageType("aiserver.v1.SandBoxStoreWriteFile", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sha256",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "content_addressed",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "if_match_etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "expect_absent",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "multipart_parts",
            kind: "message",
            T: mLg,
            repeated: !0
        }
    ]), Ayl = x.makeMessageType("aiserver.v1.PresignSandBoxStoreWritesRequest", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: gLg,
            repeated: !0
        }
    ]), fLg = x.makeMessageType("aiserver.v1.SandBoxStoreMultipartUploadPartInstruction", ()=>[
        {
            no: 1,
            name: "part_number",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 4,
            name: "offset_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        }
    ]), pps = x.makeMessageType("aiserver.v1.SandBoxStoreMultipartUploadContext", ()=>[
        {
            no: 1,
            name: "upload_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "sha256",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "expected_part_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "part_sha256s",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "if_match_etag",
            kind: "scalar",
            T: 9,
            oneof: "precondition"
        },
        {
            no: 8,
            name: "expect_absent",
            kind: "scalar",
            T: 8,
            oneof: "precondition"
        },
        {
            no: 9,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), vLg = x.makeMessageType("aiserver.v1.SandBoxStoreMultipartWriteInstruction", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: pps
        },
        {
            no: 2,
            name: "parts",
            kind: "message",
            T: fLg,
            repeated: !0
        },
        {
            no: 3,
            name: "part_urls_expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), _Lg = x.makeMessageType("aiserver.v1.SandBoxStoreWriteInstruction", ()=>[
        {
            no: 1,
            name: "rel_path",
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
            name: "headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 4,
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "multipart",
            kind: "message",
            T: vLg,
            opt: !0
        }
    ]), Ryl = x.makeMessageType("aiserver.v1.PresignSandBoxStoreWritesResponse", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "message",
            T: _Lg,
            repeated: !0
        }
    ]), bLg = x.makeMessageType("aiserver.v1.SandBoxStoreMultipartUploadedPart", ()=>[
        {
            no: 1,
            name: "part_number",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "etag",
            kind: "scalar",
            T: 9
        }
    ]), yLg = x.makeMessageType("aiserver.v1.SandBoxStoreMultipartWriteCompletion", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: pps
        },
        {
            no: 2,
            name: "parts",
            kind: "message",
            T: bLg,
            repeated: !0
        }
    ]), Pyl = x.makeMessageType("aiserver.v1.CompleteSandBoxStoreMultipartWritesRequest", ()=>[
        {
            no: 1,
            name: "completions",
            kind: "message",
            T: yLg,
            repeated: !0
        }
    ]), SLg = x.makeMessageType("aiserver.v1.SandBoxStoreMultipartWriteSuccess", ()=>[
        {
            no: 1,
            name: "etag",
            kind: "scalar",
            T: 9
        }
    ]), Myl = x.makeMessageType("aiserver.v1.SandBoxStoreMultipartOperationFailure", ()=>[
        {
            no: 1,
            name: "code",
            kind: "enum",
            T: x.getEnumType(KNg)
        }
    ]), kLg = x.makeMessageType("aiserver.v1.SandBoxStoreMultipartWriteResult", ()=>[
        {
            no: 1,
            name: "input_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "success",
            kind: "message",
            T: SLg,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: Myl,
            oneof: "outcome"
        }
    ]), Dyl = x.makeMessageType("aiserver.v1.CompleteSandBoxStoreMultipartWritesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: kLg,
            repeated: !0
        }
    ]), Nyl = x.makeMessageType("aiserver.v1.CommitSandBoxStoreManifestRequest", ()=>[
        {
            no: 1,
            name: "manifest",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "base_etag",
            kind: "scalar",
            T: 9
        }
    ]), Lyl = x.makeMessageType("aiserver.v1.CommitSandBoxStoreManifestResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(YNg)
        },
        {
            no: 2,
            name: "etag",
            kind: "scalar",
            T: 9
        }
    ]), wLg = x.makeMessageType("aiserver.v1.SandBoxStoreMultipartWriteAbort", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: pps
        }
    ]), Oyl = x.makeMessageType("aiserver.v1.AbortSandBoxStoreMultipartWritesRequest", ()=>[
        {
            no: 1,
            name: "uploads",
            kind: "message",
            T: wLg,
            repeated: !0
        }
    ]), CLg = x.makeMessageType("aiserver.v1.SandBoxStoreMultipartAbortSuccess", ()=>[
        {
            no: 1,
            name: "already_finished",
            kind: "scalar",
            T: 8
        }
    ]), TLg = x.makeMessageType("aiserver.v1.SandBoxStoreMultipartAbortResult", ()=>[
        {
            no: 1,
            name: "input_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "success",
            kind: "message",
            T: CLg,
            oneof: "outcome"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: Myl,
            oneof: "outcome"
        }
    ]), Fyl = x.makeMessageType("aiserver.v1.AbortSandBoxStoreMultipartWritesResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: TLg,
            repeated: !0
        }
    ]), Byl = x.makeMessageType("aiserver.v1.PresignSandBoxStoreReadsRequest", ()=>[
        {
            no: 1,
            name: "rel_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), ELg = x.makeMessageType("aiserver.v1.SandBoxStoreReadInstruction", ()=>[
        {
            no: 1,
            name: "rel_path",
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
            name: "expires_at_ms",
            kind: "scalar",
            T: 3
        }
    ]), Uyl = x.makeMessageType("aiserver.v1.PresignSandBoxStoreReadsResponse", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "message",
            T: ELg,
            repeated: !0
        }
    ]), jyl = x.makeMessageType("aiserver.v1.StatSandBoxStoreObjectRequest", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        }
    ]), $yl = x.makeMessageType("aiserver.v1.StatSandBoxStoreObjectResponse", ()=>[
        {
            no: 1,
            name: "exists",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "last_modified_ms",
            kind: "scalar",
            T: 3
        }
    ]), Hyl = x.makeMessageType("aiserver.v1.ListSandBoxStoreObjectsRequest", ()=>[
        {
            no: 1,
            name: "prefix",
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
            name: "max_entries",
            kind: "scalar",
            T: 5
        }
    ]), ILg = x.makeMessageType("aiserver.v1.SandBoxStoreObjectEntry", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "etag",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "last_modified_ms",
            kind: "scalar",
            T: 3
        }
    ]), Wyl = x.makeMessageType("aiserver.v1.ListSandBoxStoreObjectsResponse", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: ILg,
            repeated: !0
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "truncated",
            kind: "scalar",
            T: 8
        }
    ]), Gyl = x.makeMessageType("aiserver.v1.MintSandVoiceCallSecretRequest", ()=>[
        {
            no: 1,
            name: "model",
            kind: "scalar",
            T: 9
        }
    ]), qyl = x.makeMessageType("aiserver.v1.MintSandVoiceCallSecretResponse", ()=>[
        {
            no: 1,
            name: "client_secret",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expires_at_unix_seconds",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "websocket_url",
            kind: "scalar",
            T: 9
        }
    ]);

}
