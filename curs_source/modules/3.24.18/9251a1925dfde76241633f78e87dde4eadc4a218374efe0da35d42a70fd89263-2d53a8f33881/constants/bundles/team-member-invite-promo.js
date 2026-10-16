var TEAM_MEMBER_INVITE_PROMO_CREDIT_AMOUNT_CENTS, TEAM_MEMBER_INVITE_PROMO_GRANT_PRODUCT_ID, TEAM_MEMBER_INVITE_PROMO_GRANT_SOURCE_TYPE;
export { TEAM_MEMBER_INVITE_PROMO_CREDIT_AMOUNT_CENTS, TEAM_MEMBER_INVITE_PROMO_GRANT_PRODUCT_ID, TEAM_MEMBER_INVITE_PROMO_GRANT_SOURCE_TYPE };
var __wakaru_init_team_member_invite_promo_initialized = false;
export function init_team_member_invite_promo() {
if (__wakaru_init_team_member_invite_promo_initialized) return;
__wakaru_init_team_member_invite_promo_initialized = true;
"use strict";
TEAM_MEMBER_INVITE_PROMO_CREDIT_AMOUNT_CENTS = 100 * 100;
TEAM_MEMBER_INVITE_PROMO_GRANT_PRODUCT_ID = "credit-grant-team-member-invite-promo";
TEAM_MEMBER_INVITE_PROMO_GRANT_SOURCE_TYPE = "team_member_join";

}
