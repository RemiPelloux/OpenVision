import { P5, ju, ltt } from "./agent_pb.js";
import { SSr, bSr, ibt, kSr, ySr } from "./connect_scm_tool_pb.js";
import { ebt, uSr } from "./create_plan_tool_pb.js";
import { Hbr, UDo, U_t, jDo } from "./generate_image_tool_pb.js";
import { Cmn, Lve, pY, q4t } from "./mcp_auth_tool_pb.js";
import { w5o } from "./pr_management_tool_pb.js";
import { a5e, cni, tbt, uni } from "./switch_mode_tool_pb.js";
import { E } from "./tslib.es6.js";
import { gni, mni, nbt, wmn } from "./web_fetch_tool_pb.js";
import { G4t, rni, sni, ymn } from "./web_search_tool_pb.js";
var zSm, bL;
export { bL, zSm };
var __wakaru_VSm_initialized = false;
export function VSm() {
if (__wakaru_VSm_initialized) return;
__wakaru_VSm_initialized = true;
"use strict";
E(), ju(), kSr(), ebt(), U_t(), Cmn(), w5o(), uni(), gni(), ymn(), zSm = class extends Error {
    constructor(t){
        super(`Deferred interaction response requested for query ${t.id} (${t.query.case ?? "unknown"})`), this.query = t, this.name = "DeferredInteractionResponseError", Object.setPrototypeOf(this, new.target.prototype);
    }
}, bL = {
    webSearchApproved (t) {
        return new P5({
            id: t,
            result: {
                case: "webSearchRequestResponse",
                value: new G4t({
                    result: {
                        case: "approved",
                        value: new rni
                    }
                })
            }
        });
    },
    webSearchRejected (t, e) {
        return new P5({
            id: t,
            result: {
                case: "webSearchRequestResponse",
                value: new G4t({
                    result: {
                        case: "rejected",
                        value: new sni({
                            reason: e ?? ""
                        })
                    }
                })
            }
        });
    },
    webFetchApproved (t) {
        return new P5({
            id: t,
            result: {
                case: "webFetchRequestResponse",
                value: new nbt({
                    result: {
                        case: "approved",
                        value: new wmn
                    }
                })
            }
        });
    },
    webFetchRejected (t, e) {
        return new P5({
            id: t,
            result: {
                case: "webFetchRequestResponse",
                value: new nbt({
                    result: {
                        case: "rejected",
                        value: new mni({
                            reason: e ?? ""
                        })
                    }
                })
            }
        });
    },
    askQuestion (t, e) {
        return new P5({
            id: t,
            result: {
                case: "askQuestionInteractionResponse",
                value: new ltt({
                    result: e
                })
            }
        });
    },
    switchModeApproved (t) {
        return new P5({
            id: t,
            result: {
                case: "switchModeRequestResponse",
                value: new a5e({
                    result: {
                        case: "approved",
                        value: new cni
                    }
                })
            }
        });
    },
    switchModeRejected (t, e) {
        return new P5({
            id: t,
            result: {
                case: "switchModeRequestResponse",
                value: new a5e({
                    result: {
                        case: "rejected",
                        value: new tbt({
                            reason: e ?? ""
                        })
                    }
                })
            }
        });
    },
    createPlan (t, e) {
        return new P5({
            id: t,
            result: {
                case: "createPlanRequestResponse",
                value: new uSr({
                    result: e
                })
            }
        });
    },
    setupVmEnvironment (t, e) {
        return new P5({
            id: t,
            result: {
                case: "setupVmEnvironmentResult",
                value: e
            }
        });
    },
    replaceEnv (t, e) {
        return new P5({
            id: t,
            result: {
                case: "replaceEnvResult",
                value: e
            }
        });
    },
    prManagement (t, e) {
        return new P5({
            id: t,
            result: {
                case: "prManagementResult",
                value: e
            }
        });
    },
    mcpAuthApproved (t) {
        return new P5({
            id: t,
            result: {
                case: "mcpAuthRequestResponse",
                value: new pY({
                    result: {
                        case: "approved",
                        value: new q4t
                    }
                })
            }
        });
    },
    mcpAuthRejected (t, e) {
        return new P5({
            id: t,
            result: {
                case: "mcpAuthRequestResponse",
                value: new pY({
                    result: {
                        case: "rejected",
                        value: new Lve({
                            reason: e ?? "Authentication was rejected"
                        })
                    }
                })
            }
        });
    },
    connectScmApproved (t) {
        return new P5({
            id: t,
            result: {
                case: "connectScmRequestResponse",
                value: new ibt({
                    result: {
                        case: "approved",
                        value: new bSr
                    }
                })
            }
        });
    },
    connectScmRejected (t, e) {
        return new P5({
            id: t,
            result: {
                case: "connectScmRequestResponse",
                value: new ibt({
                    result: {
                        case: "rejected",
                        value: new ySr({
                            reason: e ?? "Connecting GitHub was skipped"
                        })
                    }
                })
            }
        });
    },
    connectScmFailed (t, e) {
        return new P5({
            id: t,
            result: {
                case: "connectScmRequestResponse",
                value: new ibt({
                    result: {
                        case: "failed",
                        value: new SSr({
                            error: e ?? "Failed to connect GitHub"
                        })
                    }
                })
            }
        });
    },
    generateImageApproved (t, e) {
        return new P5({
            id: t,
            result: {
                case: "generateImageRequestResponse",
                value: new Hbr({
                    result: {
                        case: "approved",
                        value: new UDo({
                            description: e ?? ""
                        })
                    }
                })
            }
        });
    },
    generateImageRejected (t, e) {
        return new P5({
            id: t,
            result: {
                case: "generateImageRequestResponse",
                value: new Hbr({
                    result: {
                        case: "rejected",
                        value: new jDo({
                            reason: e ?? ""
                        })
                    }
                })
            }
        });
    }
};

}
