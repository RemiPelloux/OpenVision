var SNAPSHOT_EXPIRED_USER_FACING_MESSAGE, SNAPSHOT_INVALID_USER_FACING_MESSAGE, SNAPSHOT_NOT_FOUND_OR_NO_ACCESS_USER_FACING_MESSAGE, USER_INSTALL_COMMAND_FAILED_USER_FACING_MESSAGE, SHELL_INITIALIZATION_FAILED_USER_FACING_MESSAGE, DOCKER_BUILD_FAILED_USER_FACING_MESSAGE, IMAGE_PULL_FAILED_USER_FACING_MESSAGE, PRIVATE_WORKER_MISSING_REPO_URL_MESSAGE, PRIVATE_WORKER_DISCONNECTED_TITLE, PRIVATE_WORKER_DISCONNECTED_USER_FACING_MESSAGE, PRIVATE_WORKER_MACHINE_OFFLINE_USER_FACING_MESSAGE, PRIVATE_WORKER_CAPACITY_USER_FACING_MESSAGE, PRIVATE_WORKER_ALL_BUSY_USER_FACING_MESSAGE, PINNED_WORKER_OFFLINE_DETAIL_MARKDOWN, PINNED_WORKER_OFFLINE_ROW_STATUS, CLOUD_AGENT_FOLLOWUP_RETRY_HINT, SNAPSHOT_COPY_FAILED_USER_FACING_MESSAGE, GITHUB_IP_ALLOWLIST_DOCS_URL, GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE_PREFIX, GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE, EMPTY_REPOSITORY_USER_FACING_MESSAGE, SCM_REF_NOT_FOUND_MESSAGE_PREFIX, GIT_REMOTE_TRANSIENT_FAILURE_USER_FACING_MESSAGE, SCM_CHECKOUT_FAILED_MESSAGE_PREFIX, SCM_CHECKOUT_FAILED_USER_FACING_MESSAGE, SCM_PROVIDERS, SCM_PROVIDER_DISPLAY_NAMES, SCM_AUTH_FAILED_REMEDIATION, SCM_AUTH_FAILED_MESSAGE_PREFIX, SCM_AUTH_FAILED_USER_FACING_MESSAGE, CLOUD_AGENT_START_PAYLOAD_TOO_LARGE_MESSAGE_PREFIX, CLOUD_AGENT_USAGE_LIMIT_ERROR_CODE, CLOUD_AGENT_LEGACY_PRIVACY_ENFORCING_TEAMS_INFO_KEY, CLOUD_AGENT_REPEATED_UNEXPECTED_ERROR_MESSAGE, NON_RETRYABLE_PROVIDER_ERROR_CODE, NON_RETRYABLE_PROVIDER_ERROR_SUBTYPES, PROVIDER_USER_BLOCKED_ERROR_CODE, NON_RETRYABLE_PROVIDER_ERROR_CODES, ENVIRONMENT_SETUP_CTA_ERROR_MESSAGES;
export { CLOUD_AGENT_FOLLOWUP_RETRY_HINT, CLOUD_AGENT_LEGACY_PRIVACY_ENFORCING_TEAMS_INFO_KEY, CLOUD_AGENT_REPEATED_UNEXPECTED_ERROR_MESSAGE, CLOUD_AGENT_START_PAYLOAD_TOO_LARGE_MESSAGE_PREFIX, CLOUD_AGENT_USAGE_LIMIT_ERROR_CODE, DOCKER_BUILD_FAILED_USER_FACING_MESSAGE, EMPTY_REPOSITORY_USER_FACING_MESSAGE, ENVIRONMENT_SETUP_CTA_ERROR_MESSAGES, GITHUB_IP_ALLOWLIST_DOCS_URL, GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE, GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE_PREFIX, GIT_REMOTE_TRANSIENT_FAILURE_USER_FACING_MESSAGE, IMAGE_PULL_FAILED_USER_FACING_MESSAGE, NON_RETRYABLE_PROVIDER_ERROR_CODE, NON_RETRYABLE_PROVIDER_ERROR_CODES, NON_RETRYABLE_PROVIDER_ERROR_SUBTYPES, PINNED_WORKER_OFFLINE_DETAIL_MARKDOWN, PINNED_WORKER_OFFLINE_ROW_STATUS, PRIVATE_WORKER_ALL_BUSY_USER_FACING_MESSAGE, PRIVATE_WORKER_CAPACITY_USER_FACING_MESSAGE, PRIVATE_WORKER_DISCONNECTED_TITLE, PRIVATE_WORKER_DISCONNECTED_USER_FACING_MESSAGE, PRIVATE_WORKER_MACHINE_OFFLINE_USER_FACING_MESSAGE, PRIVATE_WORKER_MISSING_REPO_URL_MESSAGE, PROVIDER_USER_BLOCKED_ERROR_CODE, SCM_AUTH_FAILED_MESSAGE_PREFIX, SCM_AUTH_FAILED_REMEDIATION, SCM_AUTH_FAILED_USER_FACING_MESSAGE, SCM_CHECKOUT_FAILED_MESSAGE_PREFIX, SCM_CHECKOUT_FAILED_USER_FACING_MESSAGE, SCM_PROVIDERS, SCM_PROVIDER_DISPLAY_NAMES, SCM_REF_NOT_FOUND_MESSAGE_PREFIX, SHELL_INITIALIZATION_FAILED_USER_FACING_MESSAGE, SNAPSHOT_COPY_FAILED_USER_FACING_MESSAGE, SNAPSHOT_EXPIRED_USER_FACING_MESSAGE, SNAPSHOT_INVALID_USER_FACING_MESSAGE, SNAPSHOT_NOT_FOUND_OR_NO_ACCESS_USER_FACING_MESSAGE, USER_INSTALL_COMMAND_FAILED_USER_FACING_MESSAGE };
var __wakaru_init_cloud_agent_startup_errors_initialized = false;
export function init_cloud_agent_startup_errors() {
if (__wakaru_init_cloud_agent_startup_errors_initialized) return;
__wakaru_init_cloud_agent_startup_errors_initialized = true;
"use strict";
SNAPSHOT_EXPIRED_USER_FACING_MESSAGE = "Your environment snapshot has expired after inactivity.";
SNAPSHOT_INVALID_USER_FACING_MESSAGE = "Your environment snapshot is invalid.";
SNAPSHOT_NOT_FOUND_OR_NO_ACCESS_USER_FACING_MESSAGE = "The environment snapshot you requested does not exist, or you do not have permission to access it.";
USER_INSTALL_COMMAND_FAILED_USER_FACING_MESSAGE = "Failed to start the development environment. The update script in your configuration failed during VM startup.";
SHELL_INITIALIZATION_FAILED_USER_FACING_MESSAGE = "Failed to start the development environment. A shell startup file in this environment (for example ~/.bashrc) is invalid and exits with an error when a login shell starts. Fix the shell startup file in your environment image or snapshot, then try again.";
DOCKER_BUILD_FAILED_USER_FACING_MESSAGE = "Failed to start the development environment. The build process failed. Please check your Dockerfile.";
IMAGE_PULL_FAILED_USER_FACING_MESSAGE = "Failed to pull the Docker image for this environment. The registry denied access or the image was not found. Check that the image exists and that any required registry credentials are configured.";
PRIVATE_WORKER_MISSING_REPO_URL_MESSAGE = "Repository URL is required for worker connections";
PRIVATE_WORKER_DISCONNECTED_TITLE = "Worker Disconnected";
PRIVATE_WORKER_DISCONNECTED_USER_FACING_MESSAGE = "Cursor lost connection to the worker during tool execution.";
PRIVATE_WORKER_MACHINE_OFFLINE_USER_FACING_MESSAGE = "Your machine is offline. Start `agent worker` on it, then resend your message.";
PRIVATE_WORKER_CAPACITY_USER_FACING_MESSAGE = "No self-hosted workers were available for this repo.";
PRIVATE_WORKER_ALL_BUSY_USER_FACING_MESSAGE = "All matching self-hosted workers for this repo were busy with other runs. Wait for a run to finish or add more workers, then try again.";
PINNED_WORKER_OFFLINE_DETAIL_MARKDOWN = "This agent will continue when the worker reconnects. Reopen Cursor on that machine or run `agent worker` again, or start a new agent.";
PINNED_WORKER_OFFLINE_ROW_STATUS = "Worker offline";
CLOUD_AGENT_FOLLOWUP_RETRY_HINT = "You can try again by writing a follow-up below.";
SNAPSHOT_COPY_FAILED_USER_FACING_MESSAGE = "We are experiencing issues loading your environment snapshot.";
GITHUB_IP_ALLOWLIST_DOCS_URL = "https://cursor.com/docs/integrations/github#ip-allow-list-configuration";
GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE_PREFIX = "GitHub blocked repository access because this organization or repository uses an IP allow list.";
GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE = `${GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE_PREFIX} Ask a GitHub org admin to allowlist Cursor's egress IPs, then start the agent again. See ${GITHUB_IP_ALLOWLIST_DOCS_URL}`;
EMPTY_REPOSITORY_USER_FACING_MESSAGE = "This repository is empty. Add an initial commit to the repository and try again.";
SCM_REF_NOT_FOUND_MESSAGE_PREFIX = "The starting branch or commit";
GIT_REMOTE_TRANSIENT_FAILURE_USER_FACING_MESSAGE = "The connection to the git remote dropped while downloading the repository. This is usually temporary \u2014 try again.";
SCM_CHECKOUT_FAILED_MESSAGE_PREFIX = "The agent couldn't check out the repository";
SCM_CHECKOUT_FAILED_USER_FACING_MESSAGE = `${SCM_CHECKOUT_FAILED_MESSAGE_PREFIX} from the source-control provider. The provider (for example GitHub) may be down or unreachable, or Cursor's access to the repository may not be working. Check the provider's status and Cursor's repository access, then try again.`;
SCM_PROVIDERS = [
    "github",
    "gitlab",
    "bitbucket",
    "azure_devops"
];
SCM_PROVIDER_DISPLAY_NAMES = {
    github: "GitHub",
    gitlab: "GitLab",
    bitbucket: "Bitbucket",
    azure_devops: "Azure DevOps"
};
SCM_AUTH_FAILED_REMEDIATION = {
    github: "Ask an admin to reinstall the Cursor GitHub App on the repository's owner and grant it access, then start the agent again.",
    gitlab: "The stored GitLab token may have been revoked or expired. Reconnect the GitLab integration, then start the agent again.",
    bitbucket: "The stored Bitbucket credential may have been revoked or expired. Reconnect the Bitbucket integration, then start the agent again.",
    azure_devops: "The stored Azure DevOps credential may have been revoked or expired. Reconnect the Azure DevOps integration, then start the agent again."
};
SCM_AUTH_FAILED_MESSAGE_PREFIX = "Cursor could not authenticate with";
SCM_AUTH_FAILED_USER_FACING_MESSAGE = `${SCM_AUTH_FAILED_MESSAGE_PREFIX} the source-control provider for this repository. Its stored access may have been revoked, expired, or lost. Reconnect the integration for this repository, then start the agent again.`;
CLOUD_AGENT_START_PAYLOAD_TOO_LARGE_MESSAGE_PREFIX = "This run's request is too large to start.";
CLOUD_AGENT_USAGE_LIMIT_ERROR_CODE = "USAGE_LIMIT";
CLOUD_AGENT_LEGACY_PRIVACY_ENFORCING_TEAMS_INFO_KEY = "cloudAgentLegacyPrivacyEnforcingTeams";
CLOUD_AGENT_REPEATED_UNEXPECTED_ERROR_MESSAGE = "We encountered an unexpected error repeatedly.";
NON_RETRYABLE_PROVIDER_ERROR_CODE = "NonRetryableProviderError";
NON_RETRYABLE_PROVIDER_ERROR_SUBTYPES = [
    "provider_400_invalid_request",
    "provider_401_auth_rejected",
    "provider_404_not_found",
    "provider_413_context_too_large",
    "provider_429_quota_exceeded",
    "provider_4xx_rejected",
    "provider_5xx_terminal",
    "provider_image_rejected",
    "provider_user_blocked"
];
PROVIDER_USER_BLOCKED_ERROR_CODE = "provider_user_blocked";
NON_RETRYABLE_PROVIDER_ERROR_CODES = new Set([
    NON_RETRYABLE_PROVIDER_ERROR_CODE,
    ...NON_RETRYABLE_PROVIDER_ERROR_SUBTYPES
]);
ENVIRONMENT_SETUP_CTA_ERROR_MESSAGES = new Set([
    SNAPSHOT_EXPIRED_USER_FACING_MESSAGE,
    SNAPSHOT_INVALID_USER_FACING_MESSAGE,
    SNAPSHOT_NOT_FOUND_OR_NO_ACCESS_USER_FACING_MESSAGE,
    USER_INSTALL_COMMAND_FAILED_USER_FACING_MESSAGE,
    DOCKER_BUILD_FAILED_USER_FACING_MESSAGE,
    IMAGE_PULL_FAILED_USER_FACING_MESSAGE,
    SHELL_INITIALIZATION_FAILED_USER_FACING_MESSAGE
]);

}
