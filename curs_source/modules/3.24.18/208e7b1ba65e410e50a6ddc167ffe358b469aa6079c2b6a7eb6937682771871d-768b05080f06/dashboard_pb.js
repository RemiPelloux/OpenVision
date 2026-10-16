import { uw } from "./agent_pb.js";
import { Vg } from "./chat_pb.js";
import { wqe } from "./full_self_driving_pb.js";
import { Cg } from "./mcp_exec_pb.js";
import { Eg } from "./mcp_pb.js";
import { mP } from "./mcp_pb_2.js";
import { Tq } from "./privacy_mode_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { yqe } from "./remote_control_settings_pb.js";
import { lu } from "./requested_model_pb.js";
import { pP } from "./smart_mode_classifier_exec_pb.js";
import { h } from "./tslib.es6.js";
import { $q } from "./usage_pb.js";
import { lr } from "./utils_pb_2.js";
var gw, $g, wD, ED, bD, fw, lue, due, uue, mue, pue, hue, gue, fue, RD, _ue, vue, Tue, kue, Sue;
export { $g, ED, RD, Sue, Tue, _ue, bD, due, fue, fw, gue, gw, hue, kue, lue, mue, pue, uue, vue, wD };
var __wakaru__w_initialized = false;
export function _w() {
if (__wakaru__w_initialized) return;
__wakaru__w_initialized = true;
"use strict";
h(), F(), Eg(), Tq(), mP(), pP(), Cg(), $q(), lr(), yqe(), lu(), wqe(), Vg(), uw(), gw = c.makeEnum("aiserver.v1.BackgroundComposerSecretLevel", [
    {
        no: 0,
        name: "BACKGROUND_COMPOSER_SECRET_LEVEL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_COMPOSER_SECRET_LEVEL_ENVIRONMENT_VARIABLE",
        localName: "ENVIRONMENT_VARIABLE"
    },
    {
        no: 2,
        name: "BACKGROUND_COMPOSER_SECRET_LEVEL_INJECTED_SECRET",
        localName: "INJECTED_SECRET"
    },
    {
        no: 3,
        name: "BACKGROUND_COMPOSER_SECRET_LEVEL_BUILD_SECRET",
        localName: "BUILD_SECRET"
    }
]), $g = c.makeEnum("aiserver.v1.McpServedBy", [
    {
        no: 0,
        name: "MCP_SERVED_BY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MCP_SERVED_BY_CURSOR",
        localName: "CURSOR"
    },
    {
        no: 2,
        name: "MCP_SERVED_BY_GROK",
        localName: "GROK"
    }
]), wD = c.makeEnum("aiserver.v1.PrReviewOpenDestinationMode", [
    {
        no: 0,
        name: "PR_REVIEW_OPEN_DESTINATION_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PR_REVIEW_OPEN_DESTINATION_MODE_GITHUB",
        localName: "GITHUB"
    },
    {
        no: 2,
        name: "PR_REVIEW_OPEN_DESTINATION_MODE_GRAPHITE",
        localName: "GRAPHITE"
    },
    {
        no: 3,
        name: "PR_REVIEW_OPEN_DESTINATION_MODE_REVIEW_CURSOR",
        localName: "REVIEW_CURSOR"
    }
]), ED = c.makeEnum("aiserver.v1.PrReviewOpenSurfaceMode", [
    {
        no: 0,
        name: "PR_REVIEW_OPEN_SURFACE_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PR_REVIEW_OPEN_SURFACE_MODE_IN_APP",
        localName: "IN_APP"
    },
    {
        no: 2,
        name: "PR_REVIEW_OPEN_SURFACE_MODE_EXTERNAL_BROWSER",
        localName: "EXTERNAL_BROWSER"
    }
]), bD = c.makeEnum("aiserver.v1.GithubArtifactPostingMode", [
    {
        no: 0,
        name: "GITHUB_ARTIFACT_POSTING_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "GITHUB_ARTIFACT_POSTING_MODE_POST_ARTIFACT",
        localName: "POST_ARTIFACT"
    },
    {
        no: 2,
        name: "GITHUB_ARTIFACT_POSTING_MODE_LINK_ONLY",
        localName: "LINK_ONLY"
    }
]), fw = c.makeEnum("aiserver.v1.CloudAgentEgressProtectionMode", [
    {
        no: 0,
        name: "CLOUD_AGENT_EGRESS_PROTECTION_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_AGENT_EGRESS_PROTECTION_MODE_ALLOW_ALL",
        localName: "ALLOW_ALL"
    },
    {
        no: 2,
        name: "CLOUD_AGENT_EGRESS_PROTECTION_MODE_DEFAULT_WITH_NETWORK_SETTINGS",
        localName: "DEFAULT_WITH_NETWORK_SETTINGS"
    },
    {
        no: 3,
        name: "CLOUD_AGENT_EGRESS_PROTECTION_MODE_NETWORK_SETTINGS_ONLY",
        localName: "NETWORK_SETTINGS_ONLY"
    },
    {
        no: 4,
        name: "CLOUD_AGENT_EGRESS_PROTECTION_MODE_PARENT_PLUS_NETWORK_SETTINGS",
        localName: "PARENT_PLUS_NETWORK_SETTINGS"
    }
]), lue = c.makeEnum("aiserver.v1.AllowlistConfig", [
    {
        no: 0,
        name: "ALLOWLIST_CONFIG_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ALLOWLIST_CONFIG_ALLOWLIST",
        localName: "ALLOWLIST"
    },
    {
        no: 2,
        name: "ALLOWLIST_CONFIG_BLOCKLIST",
        localName: "BLOCKLIST"
    }
]), due = c.makeEnum("aiserver.v1.BugbotAutofixMode", [
    {
        no: 0,
        name: "BUGBOT_AUTOFIX_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUGBOT_AUTOFIX_MODE_OFF",
        localName: "OFF"
    },
    {
        no: 2,
        name: "BUGBOT_AUTOFIX_MODE_MANUAL",
        localName: "MANUAL"
    },
    {
        no: 3,
        name: "BUGBOT_AUTOFIX_MODE_AUTO_PR",
        localName: "AUTO_PR"
    },
    {
        no: 4,
        name: "BUGBOT_AUTOFIX_MODE_AUTO_MERGE",
        localName: "AUTO_MERGE"
    }
]), uue = c.makeMessageType("aiserver.v1.GetGithubInstallationsRequest", ()=>[
        {
            no: 2,
            name: "include_team_owned_repos",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "ghe_application",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "search",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), mue = c.makeMessageType("aiserver.v1.BugbotAutofixCapabilities", ()=>[
        {
            no: 1,
            name: "direct_push",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "side_branch_delivery",
            kind: "scalar",
            T: 8
        }
    ]), pue = c.makeMessageType("aiserver.v1.BugbotSettingsCapabilities", ()=>[
        {
            no: 1,
            name: "auto_enable_new_repos",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "learned_rules",
            kind: "scalar",
            T: 8
        }
    ]), hue = c.makeMessageType("aiserver.v1.BugbotSetupAction", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), gue = c.makeMessageType("aiserver.v1.BugbotSetupActionRequired", ()=>[
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
            name: "action",
            kind: "message",
            T: hue,
            opt: !0
        },
        {
            no: 4,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), fue = c.makeMessageType("aiserver.v1.GetGithubInstallationsResponse", ()=>[
        {
            no: 1,
            name: "installations",
            kind: "message",
            T: _ue,
            repeated: !0
        },
        {
            no: 2,
            name: "github_connected",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "team_has_bugbot_repos",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "github_usernames",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "ghe_hostname",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "ghe_app_slug",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "sso_required_orgs",
            kind: "scalar",
            T: 3,
            repeated: !0
        },
        {
            no: 8,
            name: "sso_required_org_display_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 9,
            name: "github_app_slug",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "repo_picker_search_debounce_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 11,
            name: "reconnect_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "ghe_app_html_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), RD = c.makeMessageType("aiserver.v1.GetGithubInstallationsResponse.Repository", ()=>[
        {
            no: 1,
            name: "installation_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "repo_node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "html_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "settings",
            kind: "message",
            T: Tue
        },
        {
            no: 7,
            name: "archived",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "bugbot_enabled_by_team_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "GetGithubInstallationsResponse_Repository"
}), _ue = c.makeMessageType("aiserver.v1.GetGithubInstallationsResponse.Installation", ()=>[
        {
            no: 1,
            name: "installation_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "repos",
            kind: "message",
            T: RD,
            repeated: !0
        },
        {
            no: 3,
            name: "settings",
            kind: "message",
            T: vue
        },
        {
            no: 4,
            name: "can_modify",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "has_more_repos",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "total_pages",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "access_error",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "needs_team_scope",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "can_modify_installation_settings",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "account_login",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "autofix_capabilities",
            kind: "message",
            T: mue,
            opt: !0
        },
        {
            no: 13,
            name: "team_owned",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "settings_capabilities",
            kind: "message",
            T: pue,
            opt: !0
        },
        {
            no: 15,
            name: "azure_devops_managed",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 16,
            name: "setup_action_required",
            kind: "message",
            T: gue,
            opt: !0
        },
        {
            no: 17,
            name: "can_share_with_other_teams",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 18,
            name: "owner_team_id",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 19,
            name: "owner_team_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "GetGithubInstallationsResponse_Installation"
}), vue = c.makeMessageType("aiserver.v1.InstallationSettings", ()=>[
        {
            no: 1,
            name: "allowlist",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "allowlist_config",
            kind: "enum",
            T: c.getEnumType(lue)
        },
        {
            no: 3,
            name: "run_only_once",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "suppress_no_bugs_comments",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "disable_inline_reviews",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "auto_enable_new_repos",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "is_pr_summary_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "pr_summary_use_comment",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "is_learning_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "bugbot_autofix_mode",
            kind: "enum",
            T: c.getEnumType(due)
        },
        {
            no: 11,
            name: "enable_draft",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "fail_github_action_on_bugbot_findings",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "bugbot_autofix_severity_filter",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 14,
            name: "is_pr_risk_score_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Tue = c.makeMessageType("aiserver.v1.RepoSettings", ()=>[
        {
            no: 1,
            name: "bug_bot_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "bug_bot_manual_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "bug_bot_learning_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "bug_bot_learning_inherit_installation_default",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), kue = c.makeMessageType("aiserver.v1.FetchAllInstallationReposRequest", ()=>[
        {
            no: 1,
            name: "installation_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "total_pages",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "include_all_team_owned_repos",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "ghe_application",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "skip_cache",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Sue = c.makeMessageType("aiserver.v1.FetchAllInstallationReposResponse", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "message",
            T: RD,
            repeated: !0
        },
        {
            no: 2,
            name: "access_error",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "has_more_repos",
            kind: "scalar",
            T: 8
        }
    ]);

}
