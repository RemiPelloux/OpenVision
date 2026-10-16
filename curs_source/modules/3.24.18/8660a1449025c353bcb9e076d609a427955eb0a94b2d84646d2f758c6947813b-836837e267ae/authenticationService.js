import { Il } from "./SZu.js";
import { It } from "./instantiation.js";
import { au, bE } from "./privacy_mode_pb.js";
import { E } from "./tslib.es6.js";
var ss, D8a, _Tn, IKr, N8a, xKr, iki, AKr, RKr, PKr, L8a, O8a, MKr, DKr, NKr, F8a, B8a, U8a, rki, bpe, abm;
export { AKr, B8a, D8a, DKr, F8a, IKr, L8a, MKr, N8a, NKr, O8a, PKr, RKr, U8a, _Tn, abm, bpe, iki, rki, ss, xKr };
var __wakaru_Rs_initialized = false;
export function Rs() {
if (__wakaru_Rs_initialized) return;
__wakaru_Rs_initialized = true;
"use strict";
E(), It(), bE(), ss = Il("authenticationService"), D8a = "cursorAuth/stripeCustomerId", _Tn = "cursorAuth/stripeMembershipType", IKr = "cursorAuth/stripeMembershipAuthId", N8a = "cursorAuth/hasInvalidatedMembershipForUnifiedSemanticsV2", xKr = "cursorAuth/stripeSubscriptionStatus", iki = "cursorAuth/cachedEmail", AKr = "cursorAuth/cachedSignUpType", RKr = "cursorAuth/cachedScopedProfile", PKr = "cursorAuth/cachedTeam", L8a = "cursorai/donotchange/privacyMode", O8a = "cursorai/donotchange/newPrivacyMode2", MKr = "cursorai/donotchange/newPrivacyModeHoursRemainingInGracePeriod", DKr = "cursorai/donotchange/partnerDataShare", NKr = "cursorai/donotchange/hasReconciledNewPrivacyModeWithServerOnUpgrade", F8a = [
    "claude-3-opus-20240229",
    "claude-3-sonnet-20240229",
    "claude-3-haiku-20240307"
], B8a = [
    "gemini-1.5-flash",
    "gemini-1.5-flash-8b"
], U8a = [
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
], rki = {
    [au.NO_STORAGE]: 1,
    [au.NO_TRAINING]: 2,
    [au.USAGE_DATA_TRAINING_ALLOWED]: 3,
    [au.USAGE_CODEBASE_TRAINING_ALLOWED]: 4
}, bpe = ((t)=>(t.UNKNOWN = "unknown", t.AUTH_0 = "Auth_0", t.GOOGLE = "Google", t.GITHUB = "Github", t.WORKOS = "WorkOS", t.GROK = "Grok", t.X = "X", t))(bpe || {}), abm = !1;

}
