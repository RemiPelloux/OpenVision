import { getMinimalJimp } from "../../../esm_exports8.js";
import { encodeMacLosslessWebp, init_mac_webp } from "./mac-webp.js";
import { init_jimp_minimal } from "../../../utils/dist/jimp-minimal.js";
var SIDECAR_SCREENSHOT_MIME_TYPE, MacScreenshotCodec;
export { MacScreenshotCodec, SIDECAR_SCREENSHOT_MIME_TYPE };
var __wakaru_init_mac_screenshot_codec_initialized = false;
export function init_mac_screenshot_codec() {
if (__wakaru_init_mac_screenshot_codec_initialized) return;
__wakaru_init_mac_screenshot_codec_initialized = true;
"use strict";
init_jimp_minimal();
init_mac_webp();
SIDECAR_SCREENSHOT_MIME_TYPE = "image/png";
MacScreenshotCodec = {
    async normalize (image2) {
        if (image2.mimeType !== SIDECAR_SCREENSHOT_MIME_TYPE) {
            throw new Error(`Mac screenshot must be ${SIDECAR_SCREENSHOT_MIME_TYPE}, received ${image2.mimeType}`);
        }
        const Jimp = await getMinimalJimp();
        const decoded = await Jimp.read(Buffer.from(image2.data, "base64"));
        const webp = await encodeMacLosslessWebp({
            data: decoded.bitmap.data,
            width: decoded.bitmap.width,
            height: decoded.bitmap.height
        });
        return webp.toString("base64");
    }
};

}
