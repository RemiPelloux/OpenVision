import { qJ } from "./ImageUtil.js";
import { Ei } from "./Iwo.js";
import { bO } from "./dnd_3.js";
import { ms } from "./files.js";
import { Mt } from "./index_197.js";
import { eIt } from "./promptAttachmentUtil.js";
import { D4e } from "./promptInputUriPayload.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { Lg } from "./use-service.react.js";
import { qlt } from "./use-workspace.react.js";
import { Sr } from "./workspace.js";
var bDf, b1s, yDf;
export { b1s, bDf, yDf };
var __wakaru_N5l_initialized = false;
export function N5l() {
if (__wakaru_N5l_initialized) return;
__wakaru_N5l_initialized = true;
"use strict";
E(), Mt(), Ei(), Lr(), fn(), bO(), ms(), Sr(), qJ(), eIt(), D4e(), Lg(), qlt(), bDf = new Set([
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".bmp",
    ".ico",
    ".svg",
    ".tif",
    ".tiff",
    ".avif"
]), b1s = new Set([
    ".mp4",
    ".webm",
    ".mov",
    ".mkv",
    ".avi",
    ".wmv",
    ".m4v",
    ".mpeg",
    ".mpg"
]), yDf = new Set([
    ".heic",
    ".heif"
]);

}
