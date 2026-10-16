"use strict";
require.d(exports, {
    F: ()=>s
});
var n = require("./module-17392.js");
class s extends n.SK {
    constructor(e, t){
        super(`Local loop cannot construct prompts for the resolved model: ${e}`, {
            displayInfo: {
                title: "Local loop can't run this model",
                detail: o(e, t),
                isRetryable: !1
            }
        }), this.reason = e, this.resolvedModelId = t;
    }
}
function o(e, t) {
    const r = void 0 === t ? "the resolved model" : `"${t}"`;
    switch(e){
        case "metadata-unavailable":
            return `The server sent no prompt metadata for ${r}. The backend may predate prompt-metadata delivery; retry later or disable agent_host_local_loop.`;
        case "unrecognized-model-family":
            return `This build does not recognize the model family of ${r}. Update Cursor or disable agent_host_local_loop.`;
        case "dsv3-harness-not-supported":
            return `${r} uses the Composer (DSV3) prompt path, which the local loop does not construct yet. Pick a non-Composer model or disable agent_host_local_loop.`;
        case "dsv3-persona-unavailable":
            return `The server sent no self-identification persona for ${r}. The backend may predate persona delivery, or this build does not recognize the persona; update Cursor, retry later, or disable agent_host_local_loop.`;
        case "mode-config-unavailable":
            return `The server sent no per-mode tool decisions for ${r}, which Plan, Ask and Debug turns need. The backend may predate their delivery; switch to Agent mode, retry later, or disable agent_host_local_loop.`;
        default:
            return e;
    }
}
