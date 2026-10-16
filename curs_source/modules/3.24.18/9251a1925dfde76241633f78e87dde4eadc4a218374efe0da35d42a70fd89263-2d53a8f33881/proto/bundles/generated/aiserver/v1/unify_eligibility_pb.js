import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage117, __protoMessage3114, UnifyEligibilityReason, IndividualUnifyEligibilitySubject, GetUnifyEligibilityRequest, GetUnifyEligibilityResponse;
export { GetUnifyEligibilityRequest, GetUnifyEligibilityResponse, IndividualUnifyEligibilitySubject, UnifyEligibilityReason, __protoMessage3114, __protoPackage117 };
var __wakaru_init_unify_eligibility_pb_initialized = false;
export function init_unify_eligibility_pb() {
if (__wakaru_init_unify_eligibility_pb_initialized) return;
__wakaru_init_unify_eligibility_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage117 = "aiserver.v1.";
__protoMessage3114 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage117;
    }
};
UnifyEligibilityReason = enumType2(proto3, __protoPackage117, "UnifyEligibilityReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "BLOCKLISTED"
    ],
    [
        2,
        "ENTERPRISE"
    ],
    [
        3,
        "REQUEST_BASED_PRICING"
    ],
    [
        4,
        "OUTSTANDING_INVOICE"
    ],
    [
        5,
        "STRIPE_CREDIT_BALANCE"
    ],
    [
        6,
        "CURSOR_CREDIT_GRANTS"
    ],
    [
        7,
        "UNSAFE_SUBSCRIPTION_STATUS"
    ],
    [
        8,
        "ALIPAY_PAYMENT_METHOD"
    ]
], 1);
IndividualUnifyEligibilitySubject = class _IndividualUnifyEligibilitySubject extends __protoMessage3114 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _IndividualUnifyEligibilitySubject().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _IndividualUnifyEligibilitySubject().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _IndividualUnifyEligibilitySubject().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_IndividualUnifyEligibilitySubject, a, b2);
    }
    static $() {
        return [
            "IndividualUnifyEligibilitySubject"
        ];
    }
};
GetUnifyEligibilityRequest = class _GetUnifyEligibilityRequest extends __protoMessage3114 {
    constructor(data){
        super();
        this.subject = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetUnifyEligibilityRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetUnifyEligibilityRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetUnifyEligibilityRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetUnifyEligibilityRequest, a, b2);
    }
    static $() {
        return [
            "GetUnifyEligibilityRequest|1 individual #0 subject|2 cursor_team_id 5 subject",
            IndividualUnifyEligibilitySubject
        ];
    }
};
GetUnifyEligibilityResponse = class _GetUnifyEligibilityResponse extends __protoMessage3114 {
    constructor(data){
        super();
        this.eligible = false;
        this.reason = UnifyEligibilityReason.UNSPECIFIED;
        this.userFacingMessage = "";
        this.reasons = [];
        this.canOptInToNewPricing = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetUnifyEligibilityResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetUnifyEligibilityResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetUnifyEligibilityResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetUnifyEligibilityResponse, a, b2);
    }
    static $() {
        return [
            "GetUnifyEligibilityResponse|1 eligible 8|2 reason #0|3 user_facing_message 9|4 reasons #0*|5 can_opt_in_to_new_pricing 8",
            UnifyEligibilityReason
        ];
    }
};

}
