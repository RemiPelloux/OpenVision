import { E } from "./tslib.es6.js";
var Ztd, Qtd, Jtd, end, tnd, bIo, nnd, ind, rnd, snd, ond, and, yIo, SIo, lnd, cnd, K1y, und, Y1y, dnd, kIo, hnd, pnd, mnd, gnd, fnd;
export { Jtd, K1y, Qtd, SIo, Y1y, Ztd, and, bIo, cnd, dnd, end, fnd, gnd, hnd, ind, kIo, lnd, mnd, nnd, ond, pnd, rnd, snd, tnd, und, yIo };
var __wakaru_vnd_initialized = false;
export function vnd() {
if (__wakaru_vnd_initialized) return;
__wakaru_vnd_initialized = true;
"use strict";
E(), Ztd = "Your environment snapshot has expired after inactivity.", Qtd = "Your environment snapshot is invalid.", Jtd = "The environment snapshot you requested does not exist, or you do not have permission to access it.", end = "Failed to start the development environment. The update script in your configuration failed during VM startup.", tnd = "Failed to start the development environment. A shell startup file in this environment (for example ~/.bashrc) is invalid and exits with an error when a login shell starts. Fix the shell startup file in your environment image or snapshot, then try again.", bIo = "Failed to start the development environment. The build process failed. Please check your Dockerfile.", nnd = "Failed to pull the Docker image for this environment. The registry denied access or the image was not found. Check that the image exists and that any required registry credentials are configured.", ind = "Worker Disconnected", rnd = "Cursor lost connection to the worker during tool execution.", snd = "Your machine is offline. Start `agent worker` on it, then resend your message.", ond = "Worker offline", and = "You can try again by writing a follow-up below.", yIo = "https://cursor.com/docs/integrations/github#ip-allow-list-configuration", SIo = "GitHub blocked repository access because this organization or repository uses an IP allow list.", lnd = `${SIo} Ask a GitHub org admin to allowlist Cursor's egress IPs, then start the agent again. See ${yIo}`, cnd = "The agent couldn't check out the repository", K1y = `${cnd} from the source-control provider. The provider (for example GitHub) may be down or unreachable, or Cursor's access to the repository may not be working. Check the provider's status and Cursor's repository access, then try again.`, und = "Cursor could not authenticate with", Y1y = `${und} the source-control provider for this repository. Its stored access may have been revoked, expired, or lost. Reconnect the integration for this repository, then start the agent again.`, dnd = "This run's request is too large to start.", kIo = "USAGE_LIMIT", hnd = "We encountered an unexpected error repeatedly.", pnd = "NonRetryableProviderError", mnd = [
    "provider_400_invalid_request",
    "provider_401_auth_rejected",
    "provider_404_not_found",
    "provider_413_context_too_large",
    "provider_429_quota_exceeded",
    "provider_4xx_rejected",
    "provider_5xx_terminal",
    "provider_image_rejected",
    "provider_user_blocked"
], gnd = new Set([
    pnd,
    ...mnd
]), fnd = new Set([
    Ztd,
    Qtd,
    Jtd,
    end,
    bIo,
    nnd,
    tnd
]);

}
