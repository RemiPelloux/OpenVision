"use strict";
require.d(exports, {
    U: ()=>f
});
const n = new Set([
    "access_not_configured",
    "admin_policy_enforced",
    "policy_enforced"
]), o = new Set([
    "invalid_grant",
    "interaction_required",
    "unauthorized_client"
]), s = new Set([
    "50105",
    "53000",
    "53001",
    "53002",
    "53003",
    "53004",
    "530032",
    "90094",
    "7000112"
]), i = "missing or unknown user", a = new Set([
    "InvalidGrantError",
    "InvalidRequestError"
]), c = /^http 4\d\d: invalid oauth error response\b.*\braw body: (.*)$/s, u = [
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
], l = [
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
], d = [
    "invalid refresh token",
    "refresh token is invalid",
    "invalid or expired refresh token",
    "failed to refresh token",
    "invalid_grant"
];
function p(e) {
    const { code: t, message: r } = e;
    if (void 0 !== t) return n.has(t) ? {
        reason: "admin_blocked",
        matchedMessage: t
    } : o.has(t) ? function(e) {
        const t = /^aadsts(\d+)\b/.exec(e)?.[1];
        return void 0 !== t && s.has(t) ? {
            reason: "admin_blocked",
            matchedMessage: `aadsts${t}`
        } : void 0;
    }(r) : e.allowNonRfcDeadGrant ? function(e) {
        const { code: t, message: r } = e;
        return "unauthorized_user" === t || "access_denied" === t && r === i ? {
            reason: "user_access_revoked",
            matchedMessage: t
        } : void 0;
    }({
        code: t,
        message: r
    }) : void 0;
}
function f(e, t) {
    const r = function(e) {
        return e instanceof Error || null !== e && "object" == typeof e ? e : void 0;
    }(e);
    if (void 0 === r) return;
    const n = t ?? {}, o = "string" == typeof (s = r.message) ? s.toLowerCase().trim() : "";
    var s;
    const i = !0 === n.allowNonRfcDeadGrant, f = p({
        code: n.tokenEndpointErrorCode?.toLowerCase(),
        message: o,
        allowNonRfcDeadGrant: i
    });
    if (void 0 !== f) return f;
    const h = "string" == typeof r.name ? r.name : "";
    return a.has(h) ? function(e) {
        const t = l.find(({ needle: t })=>e.includes(t));
        return void 0 === t ? void 0 : {
            reason: t.reason,
            matchedMessage: e
        };
    }(o) ?? (!0 === n.allowInvalidGrantGeneric ? function(e) {
        return d.some((t)=>e.includes(t)) ? {
            reason: "invalid_grant_generic",
            matchedMessage: e
        } : void 0;
    }(o) : void 0) : i ? function(e) {
        const { name: t, message: r } = e;
        if ("ServerError" !== t) return;
        const n = c.exec(r)?.[1];
        if (void 0 === n) return;
        const o = u.find(({ needle: e })=>n.includes(e));
        return void 0 === o ? void 0 : {
            reason: o.reason,
            matchedMessage: o.needle
        };
    }({
        name: h,
        message: o
    }) : void 0;
}
