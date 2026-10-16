import { LP } from "./backgroundComposer.js";
import { ZAt } from "./cloud-entrypoint-github-setup.js";
import { Nw } from "./cloudEnvironmentTemplateService.js";
import { Zu } from "./glass-log-service.js";
import { L_ } from "./projectService.js";
import { E } from "./tslib.es6.js";
import { IG } from "./use-header-tracked-git-derived.react.js";
import { w_ } from "./use-service-event-state.react_2.js";
import { In } from "./use-service.react_2.js";
import { cm } from "./workspace-helpers.js";
var olc;
export { olc };
var __wakaru_d9i_initialized = false;
export function d9i() {
if (__wakaru_d9i_initialized) return;
__wakaru_d9i_initialized = true;
"use strict";
E(), LP(), Nw(), L_(), Zu(), ZAt(), cm(), IG(), In(), w_(), olc = {
    canUseCloud: !1,
    cloudAvailability: {
        status: "no_repo"
    },
    selectedTarget: void 0
};

}
