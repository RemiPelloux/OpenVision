import { D } from "./Iwo.js";
import { e2_ } from "./ftux-wizard-choice-step-layout.react.js";
import { X0c } from "./ftux-wizard-option-button.react.js";
import { nl } from "./index.ts";
import { Bt } from "./nls.js";
import { rQn } from "./onboarding.ts";
import { E } from "./tslib.es6.js";
import { Q0c } from "./use-ftux-step-exit.react.js";
import { QTe } from "./use-motion-reduced.react.js";
var c2_, u2_;
export { c2_, u2_ };
var __wakaru_HmT_initialized = false;
export function HmT() {
if (__wakaru_HmT_initialized) return;
__wakaru_HmT_initialized = true;
"use strict";
E(), nl(), Bt(), QTe(), e2_(), X0c(), Q0c(), c2_ = 400, u2_ = [
    {
        id: rQn.CODING,
        title: D("glass.ftuxWizard.purpose.option.coding", "Coding"),
        description: D("glass.ftuxWizard.purpose.option.coding.description", "Work directly in code to create, debug, and iterate."),
        icon: "terminal",
        iconColor: "blue"
    },
    {
        id: rQn.TASKS,
        title: D("glass.ftuxWizard.purpose.option.tasks", "Tasks"),
        description: D("glass.ftuxWizard.purpose.option.tasks.description", "Research, plan, and complete tasks across apps or your computer."),
        icon: "list-bullets",
        iconColor: "green"
    }
];

}
