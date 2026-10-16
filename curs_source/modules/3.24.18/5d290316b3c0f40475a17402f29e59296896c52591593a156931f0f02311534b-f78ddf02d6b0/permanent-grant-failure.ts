import { h } from "./tslib.es6.js";
var Bf, zf, Wf, Gf, Kf, qf, jf, Vf, Yf;
export { Bf, Gf, Kf, Vf, Wf, Yf, jf, qf, zf };
var __wakaru_Qa_initialized = false;
export function Qa() {
if (__wakaru_Qa_initialized) return;
__wakaru_Qa_initialized = true;
"use strict";
h(), Bf = new Set([
    "access_not_configured",
    "admin_policy_enforced",
    "policy_enforced"
]), zf = new Set([
    "invalid_grant",
    "interaction_required",
    "unauthorized_client"
]), Wf = new Set([
    "50105",
    "53000",
    "53001",
    "53002",
    "53003",
    "53004",
    "530032",
    "90094",
    "7000112"
]), Gf = "missing or unknown user", Kf = new Set([
    "InvalidGrantError",
    "InvalidRequestError"
]), qf = /^http 4\d\d: invalid oauth error response\b.*\braw body: (.*)$/s, jf = [
    {
        reason: "refresh_token_does_not_exist",
        needle: "no such refresh token"
    },
    {
        reason: "refresh_token_does_not_exist",
        needle: "refresh token not found"
    },
    {
        reason: "refresh_token_invalid",
        needle: "refresh token is invalid"
    }
], Vf = [
    {
        reason: "client_id_mismatch",
        needle: "client id mismatch"
    },
    {
        reason: "client_id_mismatch",
        needle: "client_id mismatch"
    },
    {
        reason: "issued_to_different_client",
        needle: "issued to different client"
    },
    {
        reason: "issued_to_different_client",
        needle: "issued to another client"
    },
    {
        reason: "grant_not_found",
        needle: "grant not found"
    },
    {
        reason: "refresh_token_revoked",
        needle: "has been revoked"
    },
    {
        reason: "refresh_token_revoked",
        needle: "token revoked"
    },
    {
        reason: "refresh_token_does_not_exist",
        needle: "refresh token does not exist"
    },
    {
        reason: "refresh_token_expired",
        needle: "token has expired"
    },
    {
        reason: "refresh_token_expired",
        needle: "token is expired"
    },
    {
        reason: "refresh_token_expired",
        needle: "token expired"
    },
    {
        reason: "refresh_token_invalid",
        needle: "token was invalid"
    },
    {
        reason: "refresh_token_invalid",
        needle: "token is invalid"
    }
], Yf = [
    "invalid refresh token",
    "refresh token is invalid",
    "invalid or expired refresh token",
    "failed to refresh token",
    "invalid_grant"
];

}
