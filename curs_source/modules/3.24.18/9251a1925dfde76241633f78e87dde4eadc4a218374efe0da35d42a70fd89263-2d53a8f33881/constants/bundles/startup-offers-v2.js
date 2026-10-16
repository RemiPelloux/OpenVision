import { YC_STARTUP_V2_TEAM_SEATS_COUPON_ID, init_team_offers } from "./team-offers.js";
import { buildYcOfferV2Pools } from "../../utils_pb_exports.js";
var STARTUP_OFFER_V2_MONTHS, STARTUP_OFFER_V2_12MO_MONTHS, CURSOR_GROK_45_CREDIT_GRANT_MODEL_IDS, CURSOR_GROK_46_CREDIT_GRANT_MODEL_IDS, CURSOR_GROK_47_CREDIT_GRANT_MODEL_IDS, CURRENT_YC_SEATS_COUPON, STARTUP_OFFER_V2_CONFIGS, STARTUP_BATCH_OFFER_KEYS, STARTUP_ALUMNI_OFFER_KEYS;
export { CURRENT_YC_SEATS_COUPON, CURSOR_GROK_45_CREDIT_GRANT_MODEL_IDS, CURSOR_GROK_46_CREDIT_GRANT_MODEL_IDS, CURSOR_GROK_47_CREDIT_GRANT_MODEL_IDS, STARTUP_ALUMNI_OFFER_KEYS, STARTUP_BATCH_OFFER_KEYS, STARTUP_OFFER_V2_12MO_MONTHS, STARTUP_OFFER_V2_CONFIGS, STARTUP_OFFER_V2_MONTHS };
var __wakaru_init_startup_offers_v2_initialized = false;
export function init_startup_offers_v2() {
if (__wakaru_init_startup_offers_v2_initialized) return;
__wakaru_init_startup_offers_v2_initialized = true;
"use strict";
init_team_offers();
STARTUP_OFFER_V2_MONTHS = 6;
STARTUP_OFFER_V2_12MO_MONTHS = 12;
CURSOR_GROK_45_CREDIT_GRANT_MODEL_IDS = [
    "grok-4.5",
    "cursor-grok-4.5",
    "cursor-grok-4.5-low",
    "cursor-grok-4.5-low-fast",
    "cursor-grok-4.5-medium",
    "cursor-grok-4.5-medium-fast",
    "cursor-grok-4.5-high",
    "cursor-grok-4.5-high-fast",
    "grok-4.5-medium",
    "grok-4.5-fast-medium",
    "grok-4.5-high",
    "grok-4.5-fast-high",
    "grok-4.5-xhigh",
    "grok-4.5-fast-xhigh"
];
CURSOR_GROK_46_CREDIT_GRANT_MODEL_IDS = [
    "grok-4.6",
    "cursor-grok-4.6",
    "cursor-grok-4.6-low",
    "cursor-grok-4.6-low-fast",
    "cursor-grok-4.6-medium",
    "cursor-grok-4.6-medium-fast",
    "cursor-grok-4.6-high",
    "cursor-grok-4.6-high-fast",
    "cursor-grok-4.6-xhigh",
    "cursor-grok-4.6-xhigh-fast"
];
CURSOR_GROK_47_CREDIT_GRANT_MODEL_IDS = [
    "grok-4.7",
    "grok-4.7-fast",
    "grok-4.7-low",
    "grok-4.7-low-fast",
    "grok-4.7-medium",
    "grok-4.7-medium-fast",
    "grok-4.7-high",
    "grok-4.7-high-fast",
    "grok-4.7-xhigh",
    "grok-4.7-xhigh-fast",
    "cursor-grok-4.7",
    "cursor-grok-4.7-low",
    "cursor-grok-4.7-low-fast",
    "cursor-grok-4.7-medium",
    "cursor-grok-4.7-medium-fast",
    "cursor-grok-4.7-high",
    "cursor-grok-4.7-high-fast",
    "cursor-grok-4.7-xhigh",
    "cursor-grok-4.7-xhigh-fast"
];
CURRENT_YC_SEATS_COUPON = {
    seatsCoupon: {
        production: YC_STARTUP_V2_TEAM_SEATS_COUPON_ID,
        test: "UXluQ9rM"
    },
    bugbotCoupon: null
};
STARTUP_OFFER_V2_CONFIGS = {
    yc_batch: {
        key: "yc_batch",
        pools: buildYcOfferV2Pools({
            prefix: "credit-grant-yc-batch",
            composerTotalCents: 15e5,
            generalTotalCents: 15e5
        }),
        coupons: CURRENT_YC_SEATS_COUPON,
        unlock: {
            composerProductId: "credit-grant-yc-batch-unlock-composer",
            generalProductId: "credit-grant-yc-batch-unlock-general",
            centsPerPool: 2e6
        }
    },
    yc_batch_20_50: {
        key: "yc_batch_20_50",
        pools: buildYcOfferV2Pools({
            prefix: "credit-grant-yc-batch-20-50",
            composerTotalCents: 1e6,
            generalTotalCents: 1e6
        }),
        coupons: CURRENT_YC_SEATS_COUPON,
        unlock: {
            composerProductId: "credit-grant-yc-batch-20-50-unlock-composer",
            generalProductId: "credit-grant-yc-batch-20-50-unlock-general",
            centsPerPool: 25e5
        }
    },
    yc_batch_20_50_12mo: {
        key: "yc_batch_20_50_12mo",
        pools: buildYcOfferV2Pools({
            prefix: "credit-grant-yc-batch-20-50-12mo",
            composerTotalCents: 1e6,
            generalTotalCents: 1e6,
            upfrontMonths: STARTUP_OFFER_V2_12MO_MONTHS
        }),
        coupons: CURRENT_YC_SEATS_COUPON,
        unlock: {
            composerProductId: "credit-grant-yc-batch-20-50-12mo-unlock-composer",
            generalProductId: "credit-grant-yc-batch-20-50-12mo-unlock-general",
            centsPerPool: 25e5
        }
    },
    yc_standard: {
        key: "yc_standard",
        pools: buildYcOfferV2Pools({
            prefix: "credit-grant-yc-standard",
            composerTotalCents: 75e4,
            generalTotalCents: 75e4
        }),
        coupons: CURRENT_YC_SEATS_COUPON,
        unlock: null
    },
    yc_standard_12mo: {
        key: "yc_standard_12mo",
        pools: buildYcOfferV2Pools({
            prefix: "credit-grant-yc-standard-12mo",
            composerTotalCents: 75e4,
            generalTotalCents: 75e4,
            upfrontMonths: STARTUP_OFFER_V2_12MO_MONTHS
        }),
        coupons: CURRENT_YC_SEATS_COUPON,
        unlock: null
    }
};
STARTUP_BATCH_OFFER_KEYS = [
    "yc_batch",
    "yc_batch_20_50",
    "yc_batch_20_50_12mo"
];
STARTUP_ALUMNI_OFFER_KEYS = [
    "yc_standard",
    "yc_standard_12mo"
];

}
