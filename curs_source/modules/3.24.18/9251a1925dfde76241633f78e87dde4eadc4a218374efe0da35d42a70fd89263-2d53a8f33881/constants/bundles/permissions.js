var TeamPermission, TEAM_PERMISSIONS, OrganizationPermission, ORGANIZATION_PERMISSIONS, AgentStorePermission, AGENT_STORE_PERMISSIONS, AgentStoreSharePermission, AGENT_STORE_SHARE_PERMISSIONS, GrokBotTemplatePermission, GROK_BOT_TEMPLATE_PERMISSIONS, GrokBotAgentPermission, GROK_BOT_AGENT_PERMISSIONS, KeyringPermission, KEYRING_PERMISSIONS, EnvironmentPermission, ENVIRONMENT_PERMISSIONS, AgentServeDeploymentPermission, AGENT_SERVE_DEPLOYMENT_PERMISSIONS, PERMISSION_RESOURCE_TYPES;
export { AGENT_SERVE_DEPLOYMENT_PERMISSIONS, AGENT_STORE_PERMISSIONS, AGENT_STORE_SHARE_PERMISSIONS, AgentServeDeploymentPermission, AgentStorePermission, AgentStoreSharePermission, ENVIRONMENT_PERMISSIONS, EnvironmentPermission, GROK_BOT_AGENT_PERMISSIONS, GROK_BOT_TEMPLATE_PERMISSIONS, GrokBotAgentPermission, GrokBotTemplatePermission, KEYRING_PERMISSIONS, KeyringPermission, ORGANIZATION_PERMISSIONS, OrganizationPermission, PERMISSION_RESOURCE_TYPES, TEAM_PERMISSIONS, TeamPermission };
var __wakaru_init_permissions_initialized = false;
export function init_permissions() {
if (__wakaru_init_permissions_initialized) return;
__wakaru_init_permissions_initialized = true;
"use strict";
TeamPermission = {
    ReadSpend: "team.spend.read",
    ReadTeamMemberSpend: "team.member_spend.read",
    ReadPrivacyMode: "team.privacy_mode.read",
    ReadSsoConfiguration: "team.sso.read",
    ReadTeamRules: "team.rules.read",
    ManageTeamRules: "team.rules.manage",
    ReadTeamHooks: "team.hooks.read",
    ManageTeamHooks: "team.hooks.manage",
    ReadCommitMetrics: "team.commit_metrics.read",
    ManageDirectoryGroups: "team.directory_groups.manage",
    ManageProtectedGitScopes: "team.protected_git_scopes.manage",
    ReadBackgroundComposers: "team.background_composers.read",
    ListTeamBackgroundComposers: "team.background_composers.list",
    ManageTeamBackgroundComposers: "team.background_composers.manage",
    ManageFullSelfDriving: "team.full_self_driving.manage",
    ManagePublicProfileSettings: "team.public_profile_settings.manage",
    ManageMemberSpendLimits: "team.member_spend_limits.manage",
    ManageTeamMcpServers: "team.mcp_servers.manage",
    ManageScimConfiguration: "team.scim_configuration.manage",
    ManageBillingGroups: "team.billing_groups.manage",
    ReadGroups: "team.groups.read",
    ManageGroups: "team.groups.manage",
    ReadTeamMembers: "team.members.read",
    ManageTeamMembers: "team.members.manage",
    ReadTeamMembership: "team.membership.read",
    ReadTeamInvites: "team.invites.read",
    ManageTeamInvites: "team.invites.manage",
    ManageTeamApiKeys: "team.api_keys.manage",
    ReadTeamRepos: "team.repos.read",
    ManageTeamRepos: "team.repos.manage",
    ReadTeamSettings: "team.settings.read",
    ManageTeamSettings: "team.settings.manage",
    ReadTeamBilling: "team.billing.read",
    ManageTeamBilling: "team.billing.manage",
    ReadAuditLogs: "team.audit_logs.read",
    ReadTeamAnalytics: "team.analytics.read",
    ManageTeamAnalytics: "team.analytics.manage",
    ManageTeamPrivacy: "team.privacy.manage",
    ReadTeamCommands: "team.commands.read",
    ManageTeamCommands: "team.commands.manage",
    ReadBugbot: "team.bugbot.read",
    ManageBugbot: "team.bugbot.manage",
    ReadTeamSharingSettings: "team.sharing_settings.read",
    ManageTeamSharingSettings: "team.sharing_settings.manage",
    ManageTeamBackgroundAgentSettings: "team.background_agent_settings.manage",
    ReadTeamPlugins: "team.plugins.read",
    ManageTeamPlugins: "team.plugins.manage",
    ReadTeamIntegrations: "team.integrations.read",
    ManageTeamIntegrations: "team.integrations.manage",
    ReadDataExports: "team.data_exports.read",
    ReadGithubIdentityMappings: "team.github_identity_mappings.read"
};
TEAM_PERMISSIONS = Object.values(TeamPermission);
OrganizationPermission = {
    ReadMembers: "organization.members.read",
    WriteMembers: "organization.members.write",
    ManageMemberships: "organization.memberships.manage",
    ManageOrganization: "organization.manage",
    ManageTeams: "organization.teams.manage",
    ReadGroups: "organization.groups.read",
    ManageGroups: "organization.groups.manage",
    ManageApiKeys: "organization.api_keys.manage",
    ManageIdentityProviders: "organization.identity_providers.manage",
    ReadSpend: "organization.spend.read",
    ReadAuditLogs: "organization.audit_logs.read",
    ReadBilling: "organization.billing.read"
};
ORGANIZATION_PERMISSIONS = Object.values(OrganizationPermission);
AgentStorePermission = {
    ReadAgentStore: "agent_store.read",
    WriteAgentStore: "agent_store.write",
    ShareAgentStore: "agent_store.share"
};
AGENT_STORE_PERMISSIONS = Object.values(AgentStorePermission);
AgentStoreSharePermission = {
    ReadAgentStoreShare: "agent_store_share.read"
};
AGENT_STORE_SHARE_PERMISSIONS = Object.values(AgentStoreSharePermission);
GrokBotTemplatePermission = {
    ReadGrokBotTemplate: "grok_bot_template.read",
    WriteGrokBotTemplate: "grok_bot_template.write",
    ShareGrokBotTemplate: "grok_bot_template.share",
    DeleteGrokBotTemplate: "grok_bot_template.delete"
};
GROK_BOT_TEMPLATE_PERMISSIONS = Object.values(GrokBotTemplatePermission);
GrokBotAgentPermission = {
    ManageGrokBotAgent: "grok_bot_agent.manage",
    UseGrokBotAgent: "grok_bot_agent.use"
};
GROK_BOT_AGENT_PERMISSIONS = Object.values(GrokBotAgentPermission);
KeyringPermission = {
    ManageKeyring: "keyring.manage",
    AttachKeyring: "keyring.attach"
};
KEYRING_PERMISSIONS = Object.values(KeyringPermission);
EnvironmentPermission = {
    ManageEnvironmentSecurity: "environment.security.manage",
    ManageEnvironmentWorkload: "environment.workload.manage",
    UseEnvironment: "environment.use"
};
ENVIRONMENT_PERMISSIONS = Object.values(EnvironmentPermission);
AgentServeDeploymentPermission = {
    ReadAgentServeDeployment: "agent_serve_deployment.read",
    DeployAgentServeDeployment: "agent_serve_deployment.deploy",
    ManageAgentServeDeploymentSecrets: "agent_serve_deployment.secrets",
    ManageAgentServeDeploymentAccess: "agent_serve_deployment.manage_access"
};
AGENT_SERVE_DEPLOYMENT_PERMISSIONS = Object.values(AgentServeDeploymentPermission);
PERMISSION_RESOURCE_TYPES = {
    "agent_serve_deployment.deploy": "AGENT_SERVE_DEPLOYMENT",
    "agent_serve_deployment.manage_access": "AGENT_SERVE_DEPLOYMENT",
    "agent_serve_deployment.read": "AGENT_SERVE_DEPLOYMENT",
    "agent_serve_deployment.secrets": "AGENT_SERVE_DEPLOYMENT",
    "agent_store.read": "AGENT_STORE",
    "agent_store.share": "AGENT_STORE",
    "agent_store.write": "AGENT_STORE",
    "agent_store_share.read": "AGENT_STORE_SHARE",
    "environment.security.manage": "ENVIRONMENT",
    "environment.use": "ENVIRONMENT",
    "environment.workload.manage": "ENVIRONMENT",
    "grok_bot_agent.manage": "GROK_BOT_AGENT",
    "grok_bot_agent.use": "GROK_BOT_AGENT",
    "grok_bot_template.delete": "GROK_BOT_TEMPLATE",
    "grok_bot_template.read": "GROK_BOT_TEMPLATE",
    "grok_bot_template.share": "GROK_BOT_TEMPLATE",
    "grok_bot_template.write": "GROK_BOT_TEMPLATE",
    "keyring.attach": "KEYRING",
    "keyring.manage": "KEYRING",
    "organization.api_keys.manage": "ORGANIZATION",
    "organization.audit_logs.read": "ORGANIZATION",
    "organization.billing.read": "ORGANIZATION",
    "organization.groups.manage": "ORGANIZATION",
    "organization.groups.read": "ORGANIZATION",
    "organization.identity_providers.manage": "ORGANIZATION",
    "organization.manage": "ORGANIZATION",
    "organization.members.read": "ORGANIZATION",
    "organization.members.write": "ORGANIZATION",
    "organization.memberships.manage": "ORGANIZATION",
    "organization.spend.read": "ORGANIZATION",
    "organization.teams.manage": "ORGANIZATION",
    "team.analytics.manage": "TEAM",
    "team.analytics.read": "TEAM",
    "team.api_keys.manage": "TEAM",
    "team.audit_logs.read": "TEAM",
    "team.background_agent_settings.manage": "TEAM",
    "team.background_composers.list": "TEAM",
    "team.background_composers.manage": "TEAM",
    "team.background_composers.read": "TEAM",
    "team.billing.manage": "TEAM",
    "team.billing.read": "TEAM",
    "team.billing_groups.manage": "TEAM",
    "team.bugbot.manage": "TEAM",
    "team.bugbot.read": "TEAM",
    "team.commands.manage": "TEAM",
    "team.commands.read": "TEAM",
    "team.commit_metrics.read": "TEAM",
    "team.data_exports.read": "TEAM",
    "team.directory_groups.manage": "TEAM",
    "team.full_self_driving.manage": "TEAM",
    "team.github_identity_mappings.read": "TEAM",
    "team.groups.manage": "TEAM",
    "team.groups.read": "TEAM",
    "team.hooks.manage": "TEAM",
    "team.hooks.read": "TEAM",
    "team.integrations.manage": "TEAM",
    "team.integrations.read": "TEAM",
    "team.invites.manage": "TEAM",
    "team.invites.read": "TEAM",
    "team.mcp_servers.manage": "TEAM",
    "team.member_spend.read": "TEAM",
    "team.member_spend_limits.manage": "TEAM",
    "team.members.manage": "TEAM",
    "team.members.read": "TEAM",
    "team.membership.read": "TEAM",
    "team.plugins.manage": "TEAM",
    "team.plugins.read": "TEAM",
    "team.privacy.manage": "TEAM",
    "team.privacy_mode.read": "TEAM",
    "team.protected_git_scopes.manage": "TEAM",
    "team.public_profile_settings.manage": "TEAM",
    "team.repos.manage": "TEAM",
    "team.repos.read": "TEAM",
    "team.rules.manage": "TEAM",
    "team.rules.read": "TEAM",
    "team.scim_configuration.manage": "TEAM",
    "team.settings.manage": "TEAM",
    "team.settings.read": "TEAM",
    "team.sharing_settings.manage": "TEAM",
    "team.sharing_settings.read": "TEAM",
    "team.spend.read": "TEAM",
    "team.sso.read": "TEAM"
};

}
