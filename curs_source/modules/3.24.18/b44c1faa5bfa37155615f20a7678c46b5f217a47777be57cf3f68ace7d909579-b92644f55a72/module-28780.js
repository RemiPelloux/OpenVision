"use strict";
function n(e) {
    switch(e.action.case){
        case "userMessageAction":
        case "subscriptionNotificationAction":
        case "resumeAction":
        case "executePlanAction":
        case "backgroundTaskCompletionAction":
        case "asyncAskQuestionCompletionAction":
            return e.action.value.requestContext;
        default:
            return;
    }
}
require.d(exports, {
    D: ()=>n
});
