import { Ze } from "./instantiation.js";
import { IR, xl } from "./privacy_mode_pb.js";
import { pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var na, Jeo, ZPn, G$i, eto, V$i, QPn, j$i, q$i, z$i, tto, nto, K$i, Y$i, X$i, ito, rto, sto, JPn, Dee, Hgd;
export { Dee, G$i, Hgd, JPn, Jeo, K$i, QPn, V$i, X$i, Y$i, ZPn, eto, ito, j$i, na, nto, q$i, rto, sto, tto, z$i };
var __wakaru_Za_initialized = false;
export function Za() {
if (__wakaru_Za_initialized) return;
__wakaru_Za_initialized = true;
"use strict";
x(), Ze(), IR(), na = pd("authenticationService"), Jeo = "cursorAuth/stripeCustomerId", ZPn = "cursorAuth/stripeMembershipType", G$i = "cursorAuth/stripeMembershipAuthId", eto = "cursorAuth/hasInvalidatedMembershipForUnifiedSemanticsV2", V$i = "cursorAuth/stripeSubscriptionStatus", QPn = "cursorAuth/cachedEmail", j$i = "cursorAuth/cachedSignUpType", q$i = "cursorAuth/cachedScopedProfile", z$i = "cursorAuth/cachedTeam", tto = "cursorai/donotchange/privacyMode", nto = "cursorai/donotchange/newPrivacyMode2", K$i = "cursorai/donotchange/newPrivacyModeHoursRemainingInGracePeriod", Y$i = "cursorai/donotchange/partnerDataShare", X$i = "cursorai/donotchange/hasReconciledNewPrivacyModeWithServerOnUpgrade", ito = [
    "claude-3-opus-20240229",
    "claude-3-sonnet-20240229",
    "claude-3-haiku-20240307"
], rto = [
    "gemini-1.5-flash",
    "gemini-1.5-flash-8b"
], sto = [
    "us.anthropic.claude-sonnet-4-20250514-v1:0",
    "us.anthropic.claude-sonnet-4-5-20250929-v1:0",
    "us.anthropic.claude-sonnet-4-6",
    "us.anthropic.claude-opus-5",
    "us.anthropic.claude-sonnet-5",
    "us.anthropic.claude-fable-5",
    "us.anthropic.claude-3-5-haiku-20241022-v1:0",
    "us.anthropic.claude-haiku-4-5-20251001-v1:0",
    "us.anthropic.claude-opus-4-20250514-v1:0",
    "us.anthropic.claude-opus-4-1-20250805-v1:0",
    "us.anthropic.claude-opus-4-5-20251101-v1:0",
    "us.anthropic.claude-opus-4-6-v1",
    "us.anthropic.claude-opus-4-7",
    "us.anthropic.claude-opus-4-8",
    "us.anthropic.claude-opus-5-5",
    "us.anthropic.claude-sonnet-5-5"
], JPn = {
    [xl.NO_STORAGE]: 1,
    [xl.NO_TRAINING]: 2,
    [xl.USAGE_DATA_TRAINING_ALLOWED]: 3,
    [xl.USAGE_CODEBASE_TRAINING_ALLOWED]: 4
}, Dee = ((e)=>(e.UNKNOWN = "unknown", e.AUTH_0 = "Auth_0", e.GOOGLE = "Google", e.GITHUB = "Github", e.WORKOS = "WorkOS", e.GROK = "Grok", e.X = "X", e))(Dee || {}), Hgd = !1;

}
