import { LE } from "./compute-target-guards.js";
import { xd } from "./glass-workspace-context-service.js";
import { Sye, U$ } from "./pending-new-project.js";
import { E } from "./tslib.es6.js";
import { RI } from "./workspace.js";
var ATe, NAl, agf, VMn, jVk;
export { ATe, NAl, VMn, agf, jVk };
var __wakaru_wye_initialized = false;
export function wye() {
if (__wakaru_wye_initialized) return;
__wakaru_wye_initialized = true;
"use strict";
E(), xd(), LE(), U$(), ATe = "No Repo", NAl = [
    ATe,
    "none",
    "home"
], agf = [
    "new repository"
], VMn = {
    type: "workspace",
    id: `workspace:${RI.id}`,
    name: ATe,
    workspaceIdentifier: RI
}, jVk = {
    type: "workspace",
    id: `workspace:${RI.id}`,
    name: Sye,
    workspaceIdentifier: RI
};

}
