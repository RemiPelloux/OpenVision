import { Qo } from "./connect-error.js";
import { hg } from "./connect.js";
import { So, VNt } from "./constants_8.js";
import { x } from "./tslib.es6.js";
import { hu, io } from "./utils_pb.js";
var dtt;
export { dtt };
var __wakaru_uko_initialized = false;
export function uko() {
if (__wakaru_uko_initialized) return;
__wakaru_uko_initialized = true;
"use strict";
x(), hg(), hu(), So(), dtt = class extends Qo {
    constructor(e, t, n){
        super(`You have exceeded your usage limit for the ${e} model. Please upgrade your account.`), this.model = e, this.error = t, this.rerun = n;
    }
    toMessage() {
        switch(this.error){
            case io.FREE_USER_RATE_LIMIT_EXCEEDED:
                return `It seems like you're making an too many requests too quickly. Please try again in a minute. If you think this is a mistake, please contact ${VNt}`;
            case io.PRO_USER_RATE_LIMIT_EXCEEDED:
                return `It seems like you're making an unusual number of AI requests. Please try again later. If you think this is a mistake, please contact ${VNt}`;
            case io.FREE_USER_USAGE_LIMIT:
                return `Our servers are currently overloaded for non-pro users, and you've used your free quota. Please try again in a few minutes. If you think this is a mistake, please contact ${VNt}`;
            case io.PRO_USER_USAGE_LIMIT:
                return `We're currently recieving a large number of slow requests and could not queue yours. Please try again. If you see this message often, please contact ${VNt}`;
            case io.BAD_API_KEY:
                return "The provided API key is invalid. Please provide a valid API key.";
            case io.BAD_MODEL_NAME:
                return `The model ${this.model} does not work with your current plan or api key`;
            case io.INVALID_AUTH_ID:
            case io.NOT_LOGGED_IN:
            case io.AGENT_REQUIRES_LOGIN:
            case io.USER_NOT_FOUND:
                return "You are not logged in. Please log in to continue.";
            case io.NOT_HIGH_ENOUGH_PERMISSIONS:
                return "Without the pro plan, you do not have access to this feature/model.";
            case io.UNSPECIFIED:
            default:
                return "An unspecified error occurred. Please try again";
        }
    }
};

}
