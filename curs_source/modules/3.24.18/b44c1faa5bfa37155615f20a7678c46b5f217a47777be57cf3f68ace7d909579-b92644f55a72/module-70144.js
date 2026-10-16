"use strict";
function n(e) {
    return e instanceof Error ? {
        abortReasonType: "error",
        abortReasonName: e.name,
        abortReasonMessage: e.message
    } : "string" == typeof e ? {
        abortReasonType: "string",
        abortReasonMessage: e
    } : void 0 === e ? {
        abortReasonType: "undefined"
    } : {
        abortReasonType: typeof e
    };
}
require.d(exports, {
    R: ()=>n
});
