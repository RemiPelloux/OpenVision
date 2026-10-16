import { h } from "./tslib.es6.js";
var on, $_, Ol, Cl, Vi, F_, H_;
export { $_, Cl, F_, H_, Ol, Vi, on };
var __wakaru_gs_initialized = false;
export function gs() {
if (__wakaru_gs_initialized) return;
__wakaru_gs_initialized = true;
"use strict";
h(), on = class extends Error {
    constructor(e){
        super(`OAuth refresh race detected for ${e}: sibling already rotated tokens; reconnecting to use fresh credentials`), this.name = "SiblingAlreadyRefreshedError";
    }
}, $_ = class extends Error {
    constructor(e){
        super(`OAuth loopback redirect ${e} could not be bound; it is the only redirect registered for this desktop client`), this.name = "McpOAuthLoopbackUnavailableError";
    }
}, Ol = "OAuthRefreshTransientError", Cl = new Set([
    "UnauthorizedError",
    "InvalidGrantError",
    "InvalidTokenError",
    "InvalidClientError",
    "UnauthorizedClientError"
]), Vi = new Set([
    "invalid_grant",
    "invalid_token",
    "invalid_client",
    "unauthorized_client"
]), F_ = /\btoken (?:has |is )?expired\b/i, H_ = [
    F_,
    /\btoken (?:was|is) invalid\b/i,
    /\binvalid (?:refresh[ _]?)?token\b/i,
    /\btoken (?:has been |was )?revoked\b/i
];

}
