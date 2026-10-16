import { init_startup_offers_utils } from "./startup-offers-utils.js";
import { STARTUP_OFFER_V2_12MO_MONTHS, STARTUP_OFFER_V2_CONFIGS, STARTUP_OFFER_V2_MONTHS, init_startup_offers_v2 } from "./startup-offers-v2.js";
import { STANDARD_STARTUP_CREDIT_GRANT_PRODUCT_ID, YC_STARTUP_MONTHLY_CREDIT_GRANT_MONTHS, YC_STARTUP_MONTHLY_CREDIT_GRANT_PREFIX, init_team_offers } from "./team-offers.js";
import { getStartupOfferConfig } from "../../utils_pb_exports.js";
var OFFER_TEMPLATE_KEYS, OFFER_TEMPLATES;
export { OFFER_TEMPLATES, OFFER_TEMPLATE_KEYS };
var __wakaru_init_offer_templates_initialized = false;
export function init_offer_templates() {
if (__wakaru_init_offer_templates_initialized) return;
__wakaru_init_offer_templates_initialized = true;
"use strict";
init_startup_offers_utils();
init_startup_offers_v2();
init_team_offers();
OFFER_TEMPLATE_KEYS = [
    "yc_batch_20_50_12mo",
    "yc_batch",
    "yc_batch_20_50",
    "yc_standard_12mo",
    "yc_standard",
    "yc",
    "standard"
];
OFFER_TEMPLATES = {
    yc_batch_20_50_12mo: {
        key: "yc_batch_20_50_12mo",
        mode: "multi",
        program: "startups",
        label: "YC + T1 \u2014 $20K upfront / $50K unlock (12-month credits)",
        description: "YC current-batch and T1 promo with a 12-month credit window: $10,000 Cursor Models and $10,000 Any Model upfront expiring after 12 months, then $25,000 in each pool after completing the unlock actions; plus $1,000/month Bugbot for 6 months and a 6-month Teams coupon.",
        targetType: "team",
        showInClient: true,
        supportsGrantDateRealignment: true,
        creditLabel: "$26,000",
        grantMonthCount: STARTUP_OFFER_V2_12MO_MONTHS,
        pools: STARTUP_OFFER_V2_CONFIGS.yc_batch_20_50_12mo.pools,
        coupons: STARTUP_OFFER_V2_CONFIGS.yc_batch_20_50_12mo.coupons,
        unlock: STARTUP_OFFER_V2_CONFIGS.yc_batch_20_50_12mo.unlock
    },
    yc_batch: {
        key: "yc_batch",
        mode: "multi",
        program: "yc",
        label: "YC \u2014 current batch (legacy $30K / $40K)",
        description: "Grandfathered YC/T1 promo: $15,000 Cursor Models and $15,000 Any Model upfront, then $20,000 in each pool after completing the unlock actions; plus $1,000/month Bugbot and a 6-month Teams coupon.",
        targetType: "team",
        showInClient: true,
        supportsGrantDateRealignment: true,
        creditLabel: "$36,000",
        grantMonthCount: STARTUP_OFFER_V2_MONTHS,
        pools: STARTUP_OFFER_V2_CONFIGS.yc_batch.pools,
        coupons: STARTUP_OFFER_V2_CONFIGS.yc_batch.coupons,
        unlock: STARTUP_OFFER_V2_CONFIGS.yc_batch.unlock
    },
    yc_batch_20_50: {
        key: "yc_batch_20_50",
        mode: "multi",
        program: "startups",
        label: "YC + T1 \u2014 $20K upfront / $50K unlock (6-month credits)",
        description: "New YC current-batch and T1 promo: $10,000 Cursor Models and $10,000 Any Model upfront, then $25,000 in each pool after completing the unlock actions; plus $1,000/month Bugbot and a 6-month Teams coupon.",
        targetType: "team",
        showInClient: true,
        supportsGrantDateRealignment: true,
        creditLabel: "$26,000",
        grantMonthCount: STARTUP_OFFER_V2_MONTHS,
        pools: STARTUP_OFFER_V2_CONFIGS.yc_batch_20_50.pools,
        coupons: STARTUP_OFFER_V2_CONFIGS.yc_batch_20_50.coupons,
        unlock: STARTUP_OFFER_V2_CONFIGS.yc_batch_20_50.unlock
    },
    yc_standard_12mo: {
        key: "yc_standard_12mo",
        mode: "multi",
        program: "yc",
        label: "YC \u2014 standard (alumni), 12-month credits",
        description: "YC alumni promo with a 12-month credit window: $7,500 Composer and $7,500 general as single grants expiring after 12 months, plus $1,000/month Bugbot for 6 months and a 6-month Teams coupon.",
        targetType: "team",
        showInClient: true,
        supportsGrantDateRealignment: true,
        creditLabel: "$21,000",
        grantMonthCount: STARTUP_OFFER_V2_12MO_MONTHS,
        pools: STARTUP_OFFER_V2_CONFIGS.yc_standard_12mo.pools,
        coupons: STARTUP_OFFER_V2_CONFIGS.yc_standard_12mo.coupons,
        unlock: STARTUP_OFFER_V2_CONFIGS.yc_standard_12mo.unlock
    },
    yc_standard: {
        key: "yc_standard",
        mode: "multi",
        program: "yc",
        label: "YC \u2014 standard (alumni), 6-month credits",
        description: "YC standard v2 promo: $7,500 Composer (single 6-month grant), $7,500 general (single 6-month grant), $1,000/month Bugbot for 6 months, plus a 6-month Teams coupon.",
        targetType: "team",
        showInClient: true,
        supportsGrantDateRealignment: true,
        creditLabel: "$21,000",
        grantMonthCount: STARTUP_OFFER_V2_MONTHS,
        pools: STARTUP_OFFER_V2_CONFIGS.yc_standard.pools,
        coupons: STARTUP_OFFER_V2_CONFIGS.yc_standard.coupons,
        unlock: STARTUP_OFFER_V2_CONFIGS.yc_standard.unlock
    },
    yc: {
        key: "yc",
        mode: "single",
        program: "yc",
        label: "YC",
        description: "YC startup promo: $5,000/month for 12 months, plus Teams and Bugbot coupons.",
        startupOfferType: "yc",
        targetType: "team",
        showInClient: true,
        supportsGrantDateRealignment: true,
        creditLabel: getStartupOfferConfig("yc").creditLabel,
        monthlyCreditLabel: "$5,000",
        grantMonthCount: YC_STARTUP_MONTHLY_CREDIT_GRANT_MONTHS,
        grantProductIdPrefix: YC_STARTUP_MONTHLY_CREDIT_GRANT_PREFIX
    },
    standard: {
        key: "standard",
        mode: "single",
        program: "standard",
        label: "Standard startup",
        description: "Standard startup promo: $5,000 credit grant, plus Teams and Bugbot coupons.",
        startupOfferType: "standard",
        targetType: "team",
        showInClient: true,
        supportsGrantDateRealignment: false,
        creditLabel: getStartupOfferConfig("standard").creditLabel,
        grantProductIdPrefix: STANDARD_STARTUP_CREDIT_GRANT_PRODUCT_ID
    }
};

}
