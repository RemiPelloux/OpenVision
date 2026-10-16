import { mce } from "./PullRequestRepositoryService.js";
import { I8e } from "./glass-editor-panel-analytics.js";
import { Zu } from "./glass-log-service.js";
import { zc } from "./glass-notification-service.js";
import { BS } from "./glass-toast.js";
import { j5s } from "./pr-lifecycle-cache.js";
import { E } from "./tslib.es6.js";
import { cu_ } from "./use-inline-rename.react.js";
import { In } from "./use-service.react_2.js";
var hu_;
export { hu_ };
var __wakaru_FRC_initialized = false;
export function FRC() {
if (__wakaru_FRC_initialized) return;
__wakaru_FRC_initialized = true;
"use strict";
E(), mce(), cu_(), In(), Zu(), zc(), BS(), j5s(), I8e(), hu_ = {
    actionSource: "button",
    controlGroup: "secondary_action"
};

}
