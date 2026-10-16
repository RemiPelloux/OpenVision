"use strict";
require.d(exports, {
    E: ()=>o,
    V: ()=>s
});
var n = require("./module-17392.js");
function s(e) {
    if (!(e instanceof n.Yv)) return;
    const t = e.displayInfo;
    return {
        kind: e.kind,
        title: t?.title,
        detail: t?.detail,
        isRetryable: t?.isRetryable,
        connectCode: t?.connectCode,
        inferenceRequestErrorType: t?.inferenceRequestErrorType,
        requestId: e.requestId,
        errorDetails: t?.errorDetails,
        action: e instanceof n.ao ? e.action : void 0
    };
}
function o(e) {
    return e instanceof Error ? e.message : String(e);
}
