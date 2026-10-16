import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { Xhn, pa } from "./constants_8.js";
import { E } from "./tslib.es6.js";
import { Hu, wo } from "./utils_pb.js";
var b$;
export { b$ };
var __wakaru_Vis_initialized = false;
export function Vis() {
if (__wakaru_Vis_initialized) return;
__wakaru_Vis_initialized = true;
"use strict";
E(), dp(), Hu(), pa(), b$ = class extends Us {
    constructor(t, e, n){
        super(`You have exceeded your usage limit for the ${t} model. Please upgrade your account.`), this.model = t, this.error = e, this.rerun = n;
    }
    toMessage() {
        switch(this.error){
            case wo.FREE_USER_RATE_LIMIT_EXCEEDED:
                return `It seems like you're making an too many requests too quickly. Please try again in a minute. If you think this is a mistake, please contact ${Xhn}`;
            case wo.PRO_USER_RATE_LIMIT_EXCEEDED:
                return `It seems like you're making an unusual number of AI requests. Please try again later. If you think this is a mistake, please contact ${Xhn}`;
            case wo.FREE_USER_USAGE_LIMIT:
                return `Our servers are currently overloaded for non-pro users, and you've used your free quota. Please try again in a few minutes. If you think this is a mistake, please contact ${Xhn}`;
            case wo.PRO_USER_USAGE_LIMIT:
                return `We're currently recieving a large number of slow requests and could not queue yours. Please try again. If you see this message often, please contact ${Xhn}`;
            case wo.BAD_API_KEY:
                return "The provided API key is invalid. Please provide a valid API key.";
            case wo.BAD_MODEL_NAME:
                return `The model ${this.model} does not work with your current plan or api key`;
            case wo.INVALID_AUTH_ID:
            case wo.NOT_LOGGED_IN:
            case wo.AGENT_REQUIRES_LOGIN:
            case wo.USER_NOT_FOUND:
                return "You are not logged in. Please log in to continue.";
            case wo.NOT_HIGH_ENOUGH_PERMISSIONS:
                return "Without the pro plan, you do not have access to this feature/model.";
            case wo.UNSPECIFIED:
            default:
                return "An unspecified error occurred. Please try again";
        }
    }
};

}
