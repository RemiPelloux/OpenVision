import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../../context/dist/index.js";
import { createCounter, createHistogram } from "../../../../dist_exports.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
import { init_image_resize } from "../../../../utils/dist/image-resize.js";
var logger55, inlineImageBoundCounter, inlineImageInputBytes, inlineImageOutputBytes;
export { inlineImageBoundCounter, inlineImageInputBytes, inlineImageOutputBytes, logger55 };
var __wakaru_init_inline_image_initialized = false;
export function init_inline_image() {
if (__wakaru_init_inline_image_initialized) return;
__wakaru_init_inline_image_initialized = true;
"use strict";
init_dist();
init_dist4();
init_image_resize();
logger55 = createLogger("tools/inline-image");
inlineImageBoundCounter = createCounter("agent.tools.inline_image.bound", {
    description: "Image bytes bounded before being persisted in a tool step, by source and outcome",
    labelNames: [
        "source",
        "outcome"
    ]
});
inlineImageInputBytes = createHistogram("agent.tools.inline_image.input_bytes", {
    description: "Image bytes a tool produced before bounding",
    labelNames: [
        "source"
    ]
});
inlineImageOutputBytes = createHistogram("agent.tools.inline_image.output_bytes", {
    description: "Image bytes persisted in the tool step after bounding",
    labelNames: [
        "source"
    ]
});

}
