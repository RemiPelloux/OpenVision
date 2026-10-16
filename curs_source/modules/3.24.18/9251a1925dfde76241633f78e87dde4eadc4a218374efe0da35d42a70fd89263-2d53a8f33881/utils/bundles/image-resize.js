import { getMinimalJimp } from "../../esm_exports8.js";
import { registeredRasterResizeCodec, targetFitImageSize } from "../../mcp_sandbox_policy_exports.js";
import { init_jimp_minimal } from "./jimp-minimal.js";
import { init_raster_dimensions, readRasterDimensions } from "./raster-dimensions.js";
import { decodeWebp, encodeWebp, hasWebpCodec, init_webp_codec, isWebp, readWebpDimensions } from "./webp-codec.js";
var MAX_IMAGE_DIMENSION, MAX_WEBP_IMAGE_DIMENSION, WEBP_PASSTHROUGH_DIMENSIONS, MAX_IMAGE_SIZE_BYTES, MIN_IMAGE_DIMENSION, toUint8Array2, getMimeType, targetDimensions, resizeJimp, resizeWebp, resizeWithCodec, resizeImageBufferIfNeeded;
export { MAX_IMAGE_DIMENSION, MAX_IMAGE_SIZE_BYTES, MAX_WEBP_IMAGE_DIMENSION, MIN_IMAGE_DIMENSION, WEBP_PASSTHROUGH_DIMENSIONS, getMimeType, resizeImageBufferIfNeeded, resizeJimp, resizeWebp, resizeWithCodec, targetDimensions, toUint8Array2 };
var __wakaru_init_image_resize_initialized = false;
export function init_image_resize() {
if (__wakaru_init_image_resize_initialized) return;
__wakaru_init_image_resize_initialized = true;
"use strict";
init_jimp_minimal();
init_raster_dimensions();
init_webp_codec();
MAX_IMAGE_DIMENSION = 1024;
MAX_WEBP_IMAGE_DIMENSION = 1280;
WEBP_PASSTHROUGH_DIMENSIONS = [
    {
        width: 1280,
        height: 800
    },
    {
        width: 1456,
        height: 840
    }
];
MAX_IMAGE_SIZE_BYTES = 1024 * 1024;
MIN_IMAGE_DIMENSION = 8;
toUint8Array2 = (buffer)=>{
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
};
getMimeType = (image2)=>{
    switch(image2.mime){
        case "image/png":
            return "image/png";
        case "image/bmp":
            return "image/bmp";
        case "image/tiff":
            return "image/tiff";
        case "image/x-ms-bmp":
            return "image/x-ms-bmp";
        case "image/gif":
            return "image/gif";
        case "image/jpeg":
            return "image/jpeg";
        default:
            return "image/png";
    }
};
targetDimensions = (width, height, maxDimension = MAX_IMAGE_DIMENSION)=>targetFitImageSize(width, height, maxDimension);
resizeJimp = (image2, width, height)=>{
    image2.resize({
        w: width,
        h: height
    });
};
resizeWebp = async (imageData, options2)=>{
    const dimensions = readWebpDimensions(imageData);
    if (options2?.preserveWebpDimensions === true && dimensions !== void 0) {
        return {
            data: toUint8Array2(imageData),
            mimeType: "image/webp"
        };
    }
    const isModelCanvas = dimensions !== void 0 && WEBP_PASSTHROUGH_DIMENSIONS.some((canvas)=>canvas.width === dimensions.width && canvas.height === dimensions.height);
    const withinDimensionCap = dimensions !== void 0 && (isModelCanvas || !targetDimensions(dimensions.width, dimensions.height, MAX_WEBP_IMAGE_DIMENSION).needsResize);
    if (withinDimensionCap && imageData.length <= MAX_IMAGE_SIZE_BYTES) {
        return {
            data: toUint8Array2(imageData),
            mimeType: "image/webp"
        };
    }
    if (options2?.webpWithoutCodec === "passthrough" && !hasWebpCodec()) {
        return {
            data: toUint8Array2(imageData),
            mimeType: "image/webp"
        };
    }
    const decoded = await decodeWebp(imageData);
    const Jimp = await getMinimalJimp();
    const image2 = Jimp.fromBitmap({
        data: Buffer.from(decoded.data),
        width: decoded.width,
        height: decoded.height
    });
    let { width, height, needsResize } = isModelCanvas ? {
        width: image2.bitmap.width,
        height: image2.bitmap.height,
        needsResize: false
    } : targetDimensions(image2.bitmap.width, image2.bitmap.height, MAX_WEBP_IMAGE_DIMENSION);
    if (needsResize) {
        resizeJimp(image2, width, height);
    }
    let resultBuffer = await encodeWebp({
        data: image2.bitmap.data,
        width: image2.bitmap.width,
        height: image2.bitmap.height
    });
    while(resultBuffer.length > MAX_IMAGE_SIZE_BYTES && width > MIN_IMAGE_DIMENSION && height > MIN_IMAGE_DIMENSION){
        width = Math.max(MIN_IMAGE_DIMENSION, Math.round(width * 0.8));
        height = Math.max(MIN_IMAGE_DIMENSION, Math.round(height * 0.8));
        resizeJimp(image2, width, height);
        resultBuffer = await encodeWebp({
            data: image2.bitmap.data,
            width: image2.bitmap.width,
            height: image2.bitmap.height
        });
    }
    return {
        data: toUint8Array2(resultBuffer),
        mimeType: "image/webp"
    };
};
resizeWithCodec = async ({ codec, imageData, mimeType })=>{
    const dimensions = await codec.readOrientedDimensions(imageData);
    if (dimensions === void 0) {
        throw new Error(`Could not read ${mimeType} dimensions`);
    }
    let { width, height } = targetDimensions(dimensions.width, dimensions.height);
    let resultBuffer = await codec.resize({
        data: imageData,
        mimeType,
        width,
        height
    });
    while(resultBuffer.length > MAX_IMAGE_SIZE_BYTES && width > MIN_IMAGE_DIMENSION && height > MIN_IMAGE_DIMENSION){
        width = Math.max(MIN_IMAGE_DIMENSION, Math.round(width * 0.8));
        height = Math.max(MIN_IMAGE_DIMENSION, Math.round(height * 0.8));
        resultBuffer = await codec.resize({
            data: imageData,
            mimeType,
            width,
            height
        });
    }
    return {
        data: toUint8Array2(resultBuffer),
        mimeType
    };
};
resizeImageBufferIfNeeded = async (imageData, options2)=>{
    if (isWebp(imageData)) {
        return resizeWebp(imageData, options2);
    }
    const header = readRasterDimensions(imageData);
    if (header !== void 0 && imageData.length <= MAX_IMAGE_SIZE_BYTES && !targetDimensions(header.width, header.height).needsResize) {
        return {
            data: toUint8Array2(imageData),
            mimeType: header.mimeType
        };
    }
    if (header !== void 0 && registeredRasterResizeCodec !== void 0) {
        return resizeWithCodec({
            codec: registeredRasterResizeCodec,
            imageData,
            mimeType: header.mimeType
        });
    }
    const Jimp = await getMinimalJimp();
    const image2 = await Jimp.read(imageData);
    const sourceMimeType = getMimeType(image2);
    const outputMimeType = options2?.convertUnsupportedModelFormatsToPng === true && sourceMimeType !== "image/png" && sourceMimeType !== "image/jpeg" ? "image/png" : sourceMimeType;
    const { width, height, needsResize } = targetDimensions(image2.width, image2.height);
    if (!needsResize && imageData.length <= MAX_IMAGE_SIZE_BYTES && outputMimeType === sourceMimeType) {
        return {
            data: toUint8Array2(imageData),
            mimeType: sourceMimeType
        };
    }
    let newWidth = width;
    let newHeight = height;
    if (needsResize) {
        resizeJimp(image2, newWidth, newHeight);
    }
    let resultBuffer = await image2.getBuffer(outputMimeType);
    while(resultBuffer.length > MAX_IMAGE_SIZE_BYTES && newWidth > MIN_IMAGE_DIMENSION && newHeight > MIN_IMAGE_DIMENSION){
        newWidth = Math.max(MIN_IMAGE_DIMENSION, Math.round(newWidth * 0.8));
        newHeight = Math.max(MIN_IMAGE_DIMENSION, Math.round(newHeight * 0.8));
        resizeJimp(image2, newWidth, newHeight);
        resultBuffer = await image2.getBuffer(outputMimeType);
    }
    return {
        data: toUint8Array2(resultBuffer),
        mimeType: outputMimeType
    };
};

}
