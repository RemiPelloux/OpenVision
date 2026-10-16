import { TEAM_API_KEY_SCOPE_AGENT, init_api_key_scopes } from "./api-key-scopes.js";
import { OrganizationPermission, TeamPermission, init_permissions } from "./permissions.js";
var SERVICE_TOKEN_SCOPE_CLI_SESSION, SERVICE_TOKEN_SCOPE_CLOUD_AGENTS, SERVICE_TOKEN_TEAM_SCOPE_GROUPS, SERVICE_TOKEN_TEAM_SCOPES, SERVICE_TOKEN_ORGANIZATION_SCOPE_GROUPS, SERVICE_TOKEN_ORGANIZATION_SCOPES, SERVICE_TOKEN_USER_SCOPE_GROUPS, SERVICE_TOKEN_USER_SCOPES;
export { SERVICE_TOKEN_ORGANIZATION_SCOPES, SERVICE_TOKEN_ORGANIZATION_SCOPE_GROUPS, SERVICE_TOKEN_SCOPE_CLI_SESSION, SERVICE_TOKEN_SCOPE_CLOUD_AGENTS, SERVICE_TOKEN_TEAM_SCOPES, SERVICE_TOKEN_TEAM_SCOPE_GROUPS, SERVICE_TOKEN_USER_SCOPES, SERVICE_TOKEN_USER_SCOPE_GROUPS };
var __wakaru_init_service_token_scopes_initialized = false;
export function init_service_token_scopes() {
if (__wakaru_init_service_token_scopes_initialized) return;
__wakaru_init_service_token_scopes_initialized = true;
"use strict";
init_api_key_scopes();
init_permissions();
SERVICE_TOKEN_SCOPE_CLI_SESSION = "cli:session";
SERVICE_TOKEN_SCOPE_CLOUD_AGENTS = "cloud-agents:*";
SERVICE_TOKEN_TEAM_SCOPE_GROUPS = [
    {
        key: "members",
        label: "Members"
    },
    {
        key: "usage",
        label: "Usage and spend"
    },
    {
        key: "groups",
        label: "Groups"
    },
    {
        key: "analytics",
        label: "Analytics"
    },
    {
        key: "audit-logs",
        label: "Audit logs"
    },
    {
        key: "settings",
        label: "Settings"
    },
    {
        key: "repositories",
        label: "Repositories"
    },
    {
        key: "bugbot",
        label: "Bugbot"
    },
    {
        key: "cloud-agents",
        label: "Cloud Agents"
    }
];
SERVICE_TOKEN_TEAM_SCOPES = [
    {
        id: TeamPermission.ReadTeamMembers,
        group: "members",
        label: "View members",
        description: "List team members."
    },
    {
        id: TeamPermission.ManageTeamMembers,
        group: "members",
        label: "Remove members",
        description: "Remove members from the team."
    },
    {
        id: TeamPermission.ReadSpend,
        group: "usage",
        label: "View spend",
        description: "The dashboard's spend check. No Team Admin API route accepts it; spend and billing routes need View member usage (team.member_spend.read)."
    },
    {
        id: TeamPermission.ReadTeamMemberSpend,
        group: "usage",
        label: "View member usage",
        description: "Read per-member usage events, daily usage, and spend."
    },
    {
        id: TeamPermission.ManageMemberSpendLimits,
        group: "usage",
        label: "Set member spend limits",
        description: "Set spend limits for individual members."
    },
    {
        id: TeamPermission.ReadGroups,
        group: "groups",
        label: "View directory groups",
        description: "List directory groups and their members."
    },
    {
        id: TeamPermission.ManageGroups,
        group: "groups",
        label: "Manage directory groups",
        description: "Create, update, and delete directory groups and their members, including each group's monthly spending limit (monthlySpendingLimitDollars). Listing groups needs View directory groups (team.groups.read)."
    },
    {
        id: TeamPermission.ManageBillingGroups,
        group: "groups",
        label: "Manage billing groups",
        description: "List, create, update, and delete billing groups and their members, including each group's and member's spend."
    },
    {
        id: TeamPermission.ManageTeamAnalytics,
        group: "analytics",
        label: "View analytics",
        description: "Read team-wide and per-user analytics, including each member's email and usage. The dashboard shows these only to admins."
    },
    {
        id: TeamPermission.ReadTeamAnalytics,
        group: "analytics",
        label: "Dashboard analytics check",
        description: "Kept so keys minted with it stay valid. No Team Admin API route accepts it; the analytics routes need View analytics (team.analytics.manage)."
    },
    {
        id: TeamPermission.ReadCommitMetrics,
        group: "analytics",
        label: "View AI code metrics",
        description: "Read AI-attributed commits and changes."
    },
    {
        id: TeamPermission.ReadAuditLogs,
        group: "audit-logs",
        label: "View audit logs",
        description: "Read team audit logs."
    },
    {
        id: TeamPermission.ReadTeamSettings,
        group: "settings",
        label: "View settings",
        description: "Read model access, telemetry destinations, and Grok Bot settings."
    },
    {
        id: TeamPermission.ManageTeamSettings,
        group: "settings",
        label: "Manage settings",
        description: "Update model access, telemetry destinations, and Grok Bot settings."
    },
    {
        id: TeamPermission.ReadTeamRepos,
        group: "repositories",
        label: "View repository blocklist",
        description: "List blocked repositories."
    },
    {
        id: TeamPermission.ManageTeamRepos,
        group: "repositories",
        label: "Manage repository blocklist",
        description: "Add and remove blocked repositories."
    },
    {
        id: TeamPermission.ReadBugbot,
        group: "bugbot",
        label: "View Bugbot rules",
        description: "Read Bugbot team, repository, and learned rules."
    },
    {
        id: TeamPermission.ManageBugbot,
        group: "bugbot",
        label: "Manage Bugbot",
        description: "Trigger reviews and manage Bugbot rules, repositories, and users."
    },
    {
        id: SERVICE_TOKEN_SCOPE_CLOUD_AGENTS,
        group: "cloud-agents",
        label: "Run Cloud Agents",
        description: "Launch and manage Cloud Agents through the Cloud Agents API as this team. Usage is billed to the team."
    }
];
SERVICE_TOKEN_ORGANIZATION_SCOPE_GROUPS = [
    {
        key: "members",
        label: "Members"
    },
    {
        key: "groups",
        label: "Groups"
    },
    {
        key: "usage",
        label: "Usage"
    },
    {
        key: "audit-logs",
        label: "Audit logs"
    }
];
SERVICE_TOKEN_ORGANIZATION_SCOPES = [
    {
        id: OrganizationPermission.ReadMembers,
        group: "members",
        label: "View members",
        description: "List organization members."
    },
    {
        id: OrganizationPermission.WriteMembers,
        group: "members",
        label: "Sync team memberships",
        description: "Sync members into the organization's teams."
    },
    {
        id: OrganizationPermission.ReadGroups,
        group: "groups",
        label: "View groups",
        description: "List groups and their members."
    },
    {
        id: OrganizationPermission.ManageGroups,
        group: "groups",
        label: "Manage groups",
        description: "Create, update, and delete groups and their members."
    },
    {
        id: OrganizationPermission.ReadSpend,
        group: "usage",
        label: "View usage",
        description: "Read pooled usage, usage events, daily usage, and spend."
    },
    {
        id: OrganizationPermission.ReadAuditLogs,
        group: "audit-logs",
        label: "View audit logs",
        description: "Read organization audit logs."
    }
];
SERVICE_TOKEN_USER_SCOPE_GROUPS = [
    {
        key: "agents",
        label: "Agents"
    },
    {
        key: "cli",
        label: "Cursor CLI and SDK"
    }
];
SERVICE_TOKEN_USER_SCOPES = [
    {
        id: TEAM_API_KEY_SCOPE_AGENT,
        group: "agents",
        label: "Run agents",
        description: "Launch and manage Cloud Agents and read automations."
    },
    {
        id: SERVICE_TOKEN_SCOPE_CLI_SESSION,
        group: "cli",
        label: "Sign in to the Cursor CLI and SDK",
        description: "Let the Cursor CLI and Agent SDK sign in as you with this key. They get the same access as a CLI login."
    }
];

}
