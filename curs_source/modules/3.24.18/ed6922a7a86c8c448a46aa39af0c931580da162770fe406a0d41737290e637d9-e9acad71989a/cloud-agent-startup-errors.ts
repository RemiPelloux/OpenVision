import { x } from "./tslib.es6.js";
var dqc, hqc, pqc, PCg, mqc, LCg, gqc, NCg, fqc, vqc, OCg;
export { LCg, NCg, OCg, PCg, dqc, fqc, gqc, hqc, mqc, pqc, vqc };
var __wakaru_FCg_initialized = false;
export function FCg() {
if (__wakaru_FCg_initialized) return;
__wakaru_FCg_initialized = true;
"use strict";
x(), dqc = "Failed to start the development environment. The build process failed. Please check your Dockerfile.", hqc = "https://cursor.com/docs/integrations/github#ip-allow-list-configuration", pqc = "GitHub blocked repository access because this organization or repository uses an IP allow list.", PCg = `${pqc} Ask a GitHub org admin to allowlist Cursor's egress IPs, then start the agent again. See ${hqc}`, mqc = "The agent couldn't check out the repository", LCg = `${mqc} from the source-control provider. The provider (for example GitHub) may be down or unreachable, or Cursor's access to the repository may not be working. Check the provider's status and Cursor's repository access, then try again.`, gqc = "Cursor could not authenticate with", NCg = `${gqc} the source-control provider for this repository. Its stored access may have been revoked, expired, or lost. Reconnect the integration for this repository, then start the agent again.`, fqc = "NonRetryableProviderError", vqc = [
    "provider_400_invalid_request",
    "provider_401_auth_rejected",
    "provider_404_not_found",
    "provider_413_context_too_large",
    "provider_429_quota_exceeded",
    "provider_4xx_rejected",
    "provider_5xx_terminal",
    "provider_image_rejected",
    "provider_user_blocked"
], OCg = new Set([
    fqc,
    ...vqc
]);

}
