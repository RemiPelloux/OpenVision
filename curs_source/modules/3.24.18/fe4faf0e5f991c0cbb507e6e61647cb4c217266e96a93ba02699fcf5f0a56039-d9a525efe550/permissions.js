var pYn, P_i, mYn, j_i, fYn, L_i, hYn, D_i, gYn, F_i, bYn, O_i, yYn, z_i, wYn, B_i, _Yn, q_i;
export { B_i, D_i, F_i, L_i, O_i, P_i, _Yn, bYn, fYn, gYn, hYn, j_i, mYn, pYn, q_i, wYn, yYn, z_i };
var __wakaru_U_i_initialized = false;
export function U_i() {
if (__wakaru_U_i_initialized) return;
__wakaru_U_i_initialized = true;
"use strict";
pYn = {
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
}, P_i = Object.values(pYn), mYn = {
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
}, j_i = Object.values(mYn), fYn = {
    ReadAgentStore: "agent_store.read",
    WriteAgentStore: "agent_store.write",
    ShareAgentStore: "agent_store.share"
}, L_i = Object.values(fYn), hYn = {
    ReadAgentStoreShare: "agent_store_share.read"
}, D_i = Object.values(hYn), gYn = {
    ReadGrokBotTemplate: "grok_bot_template.read",
    WriteGrokBotTemplate: "grok_bot_template.write",
    ShareGrokBotTemplate: "grok_bot_template.share",
    DeleteGrokBotTemplate: "grok_bot_template.delete"
}, F_i = Object.values(gYn), bYn = {
    ManageGrokBotAgent: "grok_bot_agent.manage",
    UseGrokBotAgent: "grok_bot_agent.use"
}, O_i = Object.values(bYn), yYn = {
    ManageKeyring: "keyring.manage",
    AttachKeyring: "keyring.attach"
}, z_i = Object.values(yYn), wYn = {
    ManageEnvironmentSecurity: "environment.security.manage",
    ManageEnvironmentWorkload: "environment.workload.manage",
    UseEnvironment: "environment.use"
}, B_i = Object.values(wYn), _Yn = {
    ReadAgentServeDeployment: "agent_serve_deployment.read",
    DeployAgentServeDeployment: "agent_serve_deployment.deploy",
    ManageAgentServeDeploymentSecrets: "agent_serve_deployment.secrets",
    ManageAgentServeDeploymentAccess: "agent_serve_deployment.manage_access"
}, q_i = Object.values(_Yn);

}
