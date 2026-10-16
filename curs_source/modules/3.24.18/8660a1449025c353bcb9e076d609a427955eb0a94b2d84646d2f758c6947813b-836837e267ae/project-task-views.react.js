import { D } from "./Iwo.js";
import { kl } from "./browser.ts";
import { Gie } from "./glassAddToChat.js";
import { Bt } from "./nls.js";
import { cpv } from "./project-document-task-row.react.js";
import { k5i } from "./project-task-add-to-chat.react.js";
import { Zhv } from "./project-task-pull-request-menu.react.js";
import { E } from "./tslib.es6.js";
var rpv;
export { rpv };
var __wakaru_gQt_initialized = false;
export function gQt() {
if (__wakaru_gQt_initialized) return;
__wakaru_gQt_initialized = true;
"use strict";
E(), kl(), Bt(), Gie(), cpv(), k5i(), Zhv(), rpv = {
    "for-review": ()=>D("glass.project.document.status.forReview", "For Review"),
    "in-progress": ()=>D("glass.project.document.status.inProgress", "In Progress"),
    queued: ()=>D("glass.project.document.status.queued", "Queued"),
    done: ()=>D("glass.project.document.status.done", "Done"),
    canceled: ()=>D("glass.project.document.status.canceled", "Canceled")
};

}
