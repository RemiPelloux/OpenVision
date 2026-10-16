import { E4e, tL, zd } from "./agent_pb.js";
import { $4i, B4i, F4i, U4i, WQe } from "./connect_scm_tool_pb.js";
import { E4i, Lyt } from "./create_plan_tool_pb.js";
import { jZe, m3i, oBs, sBs } from "./generate_image_tool_pb.js";
import { Ase, E$, Oyt, X7t } from "./mcp_auth_tool_pb.js";
import { UGs } from "./pr_management_tool_pb.js";
import { $Qe, L0e, bDn, yDn } from "./switch_mode_tool_pb.js";
import { x } from "./tslib.es6.js";
import { D4i, HQe, Y7t, kDn } from "./web_fetch_tool_pb.js";
import { Nyt, gDn, mDn, pDn } from "./web_search_tool_pb.js";
var vPd, ND;
export { ND, vPd };
var __wakaru__Pd_initialized = false;
export function _Pd() {
if (__wakaru__Pd_initialized) return;
__wakaru__Pd_initialized = true;
"use strict";
x(), zd(), $4i(), Lyt(), jZe(), X7t(), UGs(), yDn(), D4i(), gDn(), vPd = class extends Error {
    constructor(e){
        super(`Deferred interaction response requested for query ${e.id} (${e.query.case ?? "unknown"})`), this.query = e, this.name = "DeferredInteractionResponseError", Object.setPrototypeOf(this, new.target.prototype);
    }
}, ND = {
    webSearchApproved (e) {
        return new tL({
            id: e,
            result: {
                case: "webSearchRequestResponse",
                value: new Nyt({
                    result: {
                        case: "approved",
                        value: new pDn
                    }
                })
            }
        });
    },
    webSearchRejected (e, t) {
        return new tL({
            id: e,
            result: {
                case: "webSearchRequestResponse",
                value: new Nyt({
                    result: {
                        case: "rejected",
                        value: new mDn({
                            reason: t ?? ""
                        })
                    }
                })
            }
        });
    },
    webFetchApproved (e) {
        return new tL({
            id: e,
            result: {
                case: "webFetchRequestResponse",
                value: new HQe({
                    result: {
                        case: "approved",
                        value: new Y7t
                    }
                })
            }
        });
    },
    webFetchRejected (e, t) {
        return new tL({
            id: e,
            result: {
                case: "webFetchRequestResponse",
                value: new HQe({
                    result: {
                        case: "rejected",
                        value: new kDn({
                            reason: t ?? ""
                        })
                    }
                })
            }
        });
    },
    askQuestion (e, t) {
        return new tL({
            id: e,
            result: {
                case: "askQuestionInteractionResponse",
                value: new E4e({
                    result: t
                })
            }
        });
    },
    switchModeApproved (e) {
        return new tL({
            id: e,
            result: {
                case: "switchModeRequestResponse",
                value: new L0e({
                    result: {
                        case: "approved",
                        value: new bDn
                    }
                })
            }
        });
    },
    switchModeRejected (e, t) {
        return new tL({
            id: e,
            result: {
                case: "switchModeRequestResponse",
                value: new L0e({
                    result: {
                        case: "rejected",
                        value: new $Qe({
                            reason: t ?? ""
                        })
                    }
                })
            }
        });
    },
    createPlan (e, t) {
        return new tL({
            id: e,
            result: {
                case: "createPlanRequestResponse",
                value: new E4i({
                    result: t
                })
            }
        });
    },
    setupVmEnvironment (e, t) {
        return new tL({
            id: e,
            result: {
                case: "setupVmEnvironmentResult",
                value: t
            }
        });
    },
    replaceEnv (e, t) {
        return new tL({
            id: e,
            result: {
                case: "replaceEnvResult",
                value: t
            }
        });
    },
    prManagement (e, t) {
        return new tL({
            id: e,
            result: {
                case: "prManagementResult",
                value: t
            }
        });
    },
    mcpAuthApproved (e) {
        return new tL({
            id: e,
            result: {
                case: "mcpAuthRequestResponse",
                value: new E$({
                    result: {
                        case: "approved",
                        value: new Oyt
                    }
                })
            }
        });
    },
    mcpAuthRejected (e, t) {
        return new tL({
            id: e,
            result: {
                case: "mcpAuthRequestResponse",
                value: new E$({
                    result: {
                        case: "rejected",
                        value: new Ase({
                            reason: t ?? "Authentication was rejected"
                        })
                    }
                })
            }
        });
    },
    connectScmApproved (e) {
        return new tL({
            id: e,
            result: {
                case: "connectScmRequestResponse",
                value: new WQe({
                    result: {
                        case: "approved",
                        value: new F4i
                    }
                })
            }
        });
    },
    connectScmRejected (e, t) {
        return new tL({
            id: e,
            result: {
                case: "connectScmRequestResponse",
                value: new WQe({
                    result: {
                        case: "rejected",
                        value: new B4i({
                            reason: t ?? "Connecting GitHub was skipped"
                        })
                    }
                })
            }
        });
    },
    connectScmFailed (e, t) {
        return new tL({
            id: e,
            result: {
                case: "connectScmRequestResponse",
                value: new WQe({
                    result: {
                        case: "failed",
                        value: new U4i({
                            error: t ?? "Failed to connect GitHub"
                        })
                    }
                })
            }
        });
    },
    generateImageApproved (e, t) {
        return new tL({
            id: e,
            result: {
                case: "generateImageRequestResponse",
                value: new m3i({
                    result: {
                        case: "approved",
                        value: new sBs({
                            description: t ?? ""
                        })
                    }
                })
            }
        });
    },
    generateImageRejected (e, t) {
        return new tL({
            id: e,
            result: {
                case: "generateImageRequestResponse",
                value: new m3i({
                    result: {
                        case: "rejected",
                        value: new oBs({
                            reason: t ?? ""
                        })
                    }
                })
            }
        });
    }
};

}
