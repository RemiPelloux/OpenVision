import { x } from "./tslib.es6.js";
var yki, k0g, ozc, w0g, azc, C0g, czc, T0g, lzc, E0g, uzc, x0g, dzc, I0g, hzc, A0g, pzc, R0g;
export { A0g, C0g, E0g, I0g, R0g, T0g, azc, czc, dzc, hzc, k0g, lzc, ozc, pzc, uzc, w0g, x0g, yki };
var __wakaru_D0g_initialized = false;
export function D0g() {
if (__wakaru_D0g_initialized) return;
__wakaru_D0g_initialized = true;
"use strict";
x(), yki = {
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
}, k0g = Object.values(yki), ozc = {
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
}, w0g = Object.values(ozc), azc = {
    ReadAgentStore: "agent_store.read",
    WriteAgentStore: "agent_store.write",
    ShareAgentStore: "agent_store.share"
}, C0g = Object.values(azc), czc = {
    ReadAgentStoreShare: "agent_store_share.read"
}, T0g = Object.values(czc), lzc = {
    ReadGrokBotTemplate: "grok_bot_template.read",
    WriteGrokBotTemplate: "grok_bot_template.write",
    ShareGrokBotTemplate: "grok_bot_template.share",
    DeleteGrokBotTemplate: "grok_bot_template.delete"
}, E0g = Object.values(lzc), uzc = {
    ManageGrokBotAgent: "grok_bot_agent.manage",
    UseGrokBotAgent: "grok_bot_agent.use"
}, x0g = Object.values(uzc), dzc = {
    ManageKeyring: "keyring.manage",
    AttachKeyring: "keyring.attach"
}, I0g = Object.values(dzc), hzc = {
    ManageEnvironmentSecurity: "environment.security.manage",
    ManageEnvironmentWorkload: "environment.workload.manage",
    UseEnvironment: "environment.use"
}, A0g = Object.values(hzc), pzc = {
    ReadAgentServeDeployment: "agent_serve_deployment.read",
    DeployAgentServeDeployment: "agent_serve_deployment.deploy",
    ManageAgentServeDeploymentSecrets: "agent_serve_deployment.secrets",
    ManageAgentServeDeploymentAccess: "agent_serve_deployment.manage_access"
}, R0g = Object.values(pzc);

}
