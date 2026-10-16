import { AskQuestionInteractionResponse, InteractionResponse, init_agent_pb } from "../../proto/dist/generated/agent/v1/agent_pb.js";
import { ConnectScmRequestResponse, ConnectScmRequestResponse_Approved, ConnectScmRequestResponse_Failed, ConnectScmRequestResponse_Rejected, init_connect_scm_tool_pb } from "../../proto/dist/generated/agent/v1/connect_scm_tool_pb.js";
import { CreatePlanRequestResponse, init_create_plan_tool_pb } from "../../proto/dist/generated/agent/v1/create_plan_tool_pb.js";
import { GenerateImageRequestResponse, GenerateImageRequestResponse_Approved, GenerateImageRequestResponse_Rejected, init_generate_image_tool_pb } from "../../proto/dist/generated/agent/v1/generate_image_tool_pb.js";
import { McpAuthRequestResponse, McpAuthRequestResponse_Approved, McpAuthRequestResponse_Rejected, init_mcp_auth_tool_pb } from "../../proto/dist/generated/agent/v1/mcp_auth_tool_pb.js";
import { SwitchModeRequestResponse, SwitchModeRequestResponse_Approved, SwitchModeRequestResponse_Rejected, init_switch_mode_tool_pb } from "../../proto/dist/generated/agent/v1/switch_mode_tool_pb.js";
import { WebFetchRequestResponse, WebFetchRequestResponse_Approved, WebFetchRequestResponse_Rejected, init_web_fetch_tool_pb } from "../../proto/dist/generated/agent/v1/web_fetch_tool_pb.js";
import { WebSearchRequestResponse, WebSearchRequestResponse_Approved, WebSearchRequestResponse_Rejected, init_web_search_tool_pb } from "../../proto/dist/generated/agent/v1/web_search_tool_pb.js";
var DeferredInteractionResponseError, Responses;
export { DeferredInteractionResponseError, Responses };
var __wakaru_init_interaction_queries_initialized = false;
export function init_interaction_queries() {
if (__wakaru_init_interaction_queries_initialized) return;
__wakaru_init_interaction_queries_initialized = true;
"use strict";
init_agent_pb();
init_connect_scm_tool_pb();
init_create_plan_tool_pb();
init_generate_image_tool_pb();
init_mcp_auth_tool_pb();
init_switch_mode_tool_pb();
init_web_fetch_tool_pb();
init_web_search_tool_pb();
DeferredInteractionResponseError = class extends Error {
    constructor(query){
        super(`Deferred interaction response requested for query ${query.id} (${query.query.case ?? "unknown"})`);
        this.query = query;
        this.name = "DeferredInteractionResponseError";
        Object.setPrototypeOf(this, new.target.prototype);
    }
};
Responses = {
    webSearchApproved (queryId) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "webSearchRequestResponse",
                value: new WebSearchRequestResponse({
                    result: {
                        case: "approved",
                        value: new WebSearchRequestResponse_Approved()
                    }
                })
            }
        });
    },
    webSearchRejected (queryId, reason) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "webSearchRequestResponse",
                value: new WebSearchRequestResponse({
                    result: {
                        case: "rejected",
                        value: new WebSearchRequestResponse_Rejected({
                            reason: reason ?? ""
                        })
                    }
                })
            }
        });
    },
    webFetchApproved (queryId) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "webFetchRequestResponse",
                value: new WebFetchRequestResponse({
                    result: {
                        case: "approved",
                        value: new WebFetchRequestResponse_Approved()
                    }
                })
            }
        });
    },
    webFetchRejected (queryId, reason) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "webFetchRequestResponse",
                value: new WebFetchRequestResponse({
                    result: {
                        case: "rejected",
                        value: new WebFetchRequestResponse_Rejected({
                            reason: reason ?? ""
                        })
                    }
                })
            }
        });
    },
    askQuestion (queryId, result) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "askQuestionInteractionResponse",
                value: new AskQuestionInteractionResponse({
                    result
                })
            }
        });
    },
    switchModeApproved (queryId) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "switchModeRequestResponse",
                value: new SwitchModeRequestResponse({
                    result: {
                        case: "approved",
                        value: new SwitchModeRequestResponse_Approved()
                    }
                })
            }
        });
    },
    switchModeRejected (queryId, reason) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "switchModeRequestResponse",
                value: new SwitchModeRequestResponse({
                    result: {
                        case: "rejected",
                        value: new SwitchModeRequestResponse_Rejected({
                            reason: reason ?? ""
                        })
                    }
                })
            }
        });
    },
    createPlan (queryId, result) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "createPlanRequestResponse",
                value: new CreatePlanRequestResponse({
                    result
                })
            }
        });
    },
    setupVmEnvironment (queryId, result) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "setupVmEnvironmentResult",
                value: result
            }
        });
    },
    replaceEnv (queryId, result) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "replaceEnvResult",
                value: result
            }
        });
    },
    prManagement (queryId, result) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "prManagementResult",
                value: result
            }
        });
    },
    mcpAuthApproved (queryId) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "mcpAuthRequestResponse",
                value: new McpAuthRequestResponse({
                    result: {
                        case: "approved",
                        value: new McpAuthRequestResponse_Approved()
                    }
                })
            }
        });
    },
    mcpAuthRejected (queryId, reason) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "mcpAuthRequestResponse",
                value: new McpAuthRequestResponse({
                    result: {
                        case: "rejected",
                        value: new McpAuthRequestResponse_Rejected({
                            reason: reason ?? "Authentication was rejected"
                        })
                    }
                })
            }
        });
    },
    connectScmApproved (queryId) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "connectScmRequestResponse",
                value: new ConnectScmRequestResponse({
                    result: {
                        case: "approved",
                        value: new ConnectScmRequestResponse_Approved()
                    }
                })
            }
        });
    },
    connectScmRejected (queryId, reason) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "connectScmRequestResponse",
                value: new ConnectScmRequestResponse({
                    result: {
                        case: "rejected",
                        value: new ConnectScmRequestResponse_Rejected({
                            reason: reason ?? "Connecting GitHub was skipped"
                        })
                    }
                })
            }
        });
    },
    connectScmFailed (queryId, error3) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "connectScmRequestResponse",
                value: new ConnectScmRequestResponse({
                    result: {
                        case: "failed",
                        value: new ConnectScmRequestResponse_Failed({
                            error: error3 ?? "Failed to connect GitHub"
                        })
                    }
                })
            }
        });
    },
    generateImageApproved (queryId, description3) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "generateImageRequestResponse",
                value: new GenerateImageRequestResponse({
                    result: {
                        case: "approved",
                        value: new GenerateImageRequestResponse_Approved({
                            description: description3 ?? ""
                        })
                    }
                })
            }
        });
    },
    generateImageRejected (queryId, reason) {
        return new InteractionResponse({
            id: queryId,
            result: {
                case: "generateImageRequestResponse",
                value: new GenerateImageRequestResponse({
                    result: {
                        case: "rejected",
                        value: new GenerateImageRequestResponse_Rejected({
                            reason: reason ?? ""
                        })
                    }
                })
            }
        });
    }
};

}
