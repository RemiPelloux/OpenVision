import { h } from "./tslib.es6.js";
var F7, kBe, W7, SBe, B7, yBe, G7, wBe, V7, EBe, $7, bBe, j7, RBe, H7, CBe, q7, IBe;
export { $7, B7, CBe, EBe, F7, G7, H7, IBe, RBe, SBe, V7, W7, bBe, j7, kBe, q7, wBe, yBe };
var __wakaru_ABe_initialized = false;
export function ABe() {
if (__wakaru_ABe_initialized) return;
__wakaru_ABe_initialized = true;
"use strict";
h(), F7 = {
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
}, kBe = Object.values(F7), W7 = {
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
}, SBe = Object.values(W7), B7 = {
    ReadAgentStore: "agent_store.read",
    WriteAgentStore: "agent_store.write",
    ShareAgentStore: "agent_store.share"
}, yBe = Object.values(B7), G7 = {
    ReadAgentStoreShare: "agent_store_share.read"
}, wBe = Object.values(G7), V7 = {
    ReadGrokBotTemplate: "grok_bot_template.read",
    WriteGrokBotTemplate: "grok_bot_template.write",
    ShareGrokBotTemplate: "grok_bot_template.share",
    DeleteGrokBotTemplate: "grok_bot_template.delete"
}, EBe = Object.values(V7), $7 = {
    ManageGrokBotAgent: "grok_bot_agent.manage",
    UseGrokBotAgent: "grok_bot_agent.use"
}, bBe = Object.values($7), j7 = {
    ManageKeyring: "keyring.manage",
    AttachKeyring: "keyring.attach"
}, RBe = Object.values(j7), H7 = {
    ManageEnvironmentSecurity: "environment.security.manage",
    ManageEnvironmentWorkload: "environment.workload.manage",
    UseEnvironment: "environment.use"
}, CBe = Object.values(H7), q7 = {
    ReadAgentServeDeployment: "agent_serve_deployment.read",
    DeployAgentServeDeployment: "agent_serve_deployment.deploy",
    ManageAgentServeDeploymentSecrets: "agent_serve_deployment.secrets",
    ManageAgentServeDeploymentAccess: "agent_serve_deployment.manage_access"
}, IBe = Object.values(q7);

}
