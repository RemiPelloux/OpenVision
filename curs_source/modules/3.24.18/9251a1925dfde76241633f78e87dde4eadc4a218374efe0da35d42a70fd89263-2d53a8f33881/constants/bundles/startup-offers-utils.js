import { STANDARD_STARTUP_PROMO_DURATION_MONTHS, STARTUP_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_YC_TEAM_REFERRAL_DISCOUNT_ID, YC_STARTUP_MONTHLY_CREDIT_GRANT_MONTHS, init_team_offers } from "./team-offers.js";
var STARTUP_OFFER_CONFIGS;
export { STARTUP_OFFER_CONFIGS };
var __wakaru_init_startup_offers_utils_initialized = false;
export function init_startup_offers_utils() {
if (__wakaru_init_startup_offers_utils_initialized) return;
__wakaru_init_startup_offers_utils_initialized = true;
"use strict";
init_team_offers();
STARTUP_OFFER_CONFIGS = {
    standard: {
        referralDiscountId: STARTUP_TEAM_REFERRAL_DISCOUNT_ID,
        creditLabel: "$5,000",
        durationMonths: STANDARD_STARTUP_PROMO_DURATION_MONTHS,
        coupons: {
            production: {
                seats: "px6DOlO1",
                bugbot: "Tmc1ZTk7"
            },
            test: {
                seats: "CNmegx7g",
                bugbot: "upIo5KlJ"
            }
        }
    },
    yc: {
        referralDiscountId: STARTUP_YC_TEAM_REFERRAL_DISCOUNT_ID,
        creditLabel: "$60,000",
        durationMonths: YC_STARTUP_MONTHLY_CREDIT_GRANT_MONTHS,
        coupons: {
            production: {
                seats: "pvrVSY2a",
                bugbot: "qJcxrNlY"
            },
            test: {
                seats: "CNmegx7g",
                bugbot: "upIo5KlJ"
            }
        }
    }
};

}
