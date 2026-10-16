import { init_common9 } from "../common.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { external_exports } from "../../../../external_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var writeCanvasParametersSchema, readCanvasParametersSchema;
export { readCanvasParametersSchema, writeCanvasParametersSchema };
var __wakaru_init_tools2_initialized = false;
export function init_tools2() {
if (__wakaru_init_tools2_initialized) return;
__wakaru_init_tools2_initialized = true;
"use strict";
init_dist26();
init_zod();
init_common9();
writeCanvasParametersSchema = external_exports.object({
    contents: external_exports.string().describe("The full source of the canvas \u2014 one self-contained React `.canvas.tsx` module. Overwrites the whole canvas; send the complete file, not a patch."),
    canvas_id: external_exports.string().optional().describe("Omit to create a new canvas. Pass the id of an existing canvas in this run's store to overwrite it in place."),
    title: external_exports.string().optional().describe("Human-readable title. Provide it when creating a new canvas. Omit to keep an existing canvas's title.")
});
readCanvasParametersSchema = external_exports.object({
    canvas_id: external_exports.string().optional().describe("The id of a canvas in this run's store to read. When both `canvas_id` and `url` are provided they must name the same canvas id; the url's storeId is used for the read."),
    url: external_exports.string().optional().describe("A canonical https://cursor.com/canvas/<storeId>/<canvasId> canvas url. Use this to read a canvas in another store or from a share link. A malformed url is ignored when `canvas_id` is present; if both resolve they must name the same canvas id and this url's storeId is used for the read.")
});

}
