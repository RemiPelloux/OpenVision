"use strict";
require.d(exports, {
    Lm: ()=>u,
    h8: ()=>l,
    oF: ()=>d
});
var n = require("./module-68892.js"), s = require("./module-48170.js"), o = require("./module-76476.js"), i = require("./module-23476.js"), a = require("./module-37735.js"), c = require("./module-39738.js");
async function l(e, t) {
    await t.flushPostTurnEndedWork?.(e);
}
class u extends Error {
    constructor(e, t = {}){
        super(e), this.name = "InteractionListenerStreamClosedError", this.cause = t.cause, Object.setPrototypeOf(this, new.target.prototype);
    }
}
function d(e, t) {
    switch(e.query.case){
        case "webSearchRequestQuery":
            return c.x1.webSearchRejected(e.id, t);
        case "webFetchRequestQuery":
            return c.x1.webFetchRejected(e.id, t);
        case "askQuestionInteractionQuery":
            return c.x1.askQuestion(e.id, new n.tz({
                result: {
                    case: "rejected",
                    value: new n.ox({
                        reason: t
                    })
                }
            }));
        case "switchModeRequestQuery":
            return c.x1.switchModeRejected(e.id, t);
        case "createPlanRequestQuery":
            return c.x1.createPlan(e.id, new s.bK({
                result: {
                    case: "error",
                    value: new s.iY({
                        error: t
                    })
                }
            }));
        case "setupVmEnvironmentArgs":
            return c.x1.setupVmEnvironment(e.id, new a.r$({
                result: {
                    case: "success",
                    value: new a.JH({})
                }
            }));
        case "replaceEnvArgs":
            return c.x1.replaceEnv(e.id, new i.dV({
                result: {
                    case: "failure",
                    value: new i.uq({
                        errorMessage: t,
                        setupLogs: ""
                    })
                }
            }));
        case "prManagementRequestQuery":
            return c.x1.prManagement(e.id, new o.HL({
                result: {
                    case: "error",
                    value: new o.K$({
                        error: t
                    })
                }
            }));
        case "mcpAuthRequestQuery":
            return c.x1.mcpAuthRejected(e.id, t);
        case "connectScmRequestQuery":
            return c.x1.connectScmRejected(e.id, t);
        case "generateImageRequestQuery":
            return c.x1.generateImageRejected(e.id, t);
        case void 0:
            return;
        default:
            return e.query;
    }
}
u.telemetryName = "InteractionListenerStreamClosedError";
