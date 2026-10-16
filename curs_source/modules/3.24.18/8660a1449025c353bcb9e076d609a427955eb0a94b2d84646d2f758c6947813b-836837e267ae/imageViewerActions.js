import { Ga } from "./Iwo.js";
import { h5k } from "./imageBytes.js";
import { Hms } from "./imageSourceToPngBytes.js";
import { Ki } from "./network.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var n0l, yZg, SZg;
export { SZg, n0l, yZg };
var __wakaru_TIt_initialized = false;
export function TIt() {
if (__wakaru_TIt_initialized) return;
__wakaru_TIt_initialized = true;
"use strict";
E(), Ga(), Ki(), Lr(), fn(), h5k(), Hms(), n0l = "workbench.imageViewer.downloadPath", yZg = {
    "image/bmp": "bmp",
    "image/gif": "gif",
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/svg+xml": "svg",
    "image/webp": "webp"
}, SZg = {
    "image/bmp": "BMP Image",
    "image/gif": "GIF Image",
    "image/jpeg": "JPEG Image",
    "image/png": "PNG Image",
    "image/svg+xml": "SVG Image",
    "image/webp": "WebP Image"
};

}
