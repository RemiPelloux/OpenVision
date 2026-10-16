import { require_bitmapimage } from "./bitmapimage.js";
import { require_gif } from "./gif.js";
import { require_gifcodec } from "./gifcodec.js";
import { require_gifframe } from "./gifframe.js";
import { require_image_q } from "../../../../image-q@4.0.0/node_modules/image-q/dist/cjs/image-q.cjs";
var __wakaru_require_gifutil_cache;
export function require_gifutil() {
if (__wakaru_require_gifutil_cache) return __wakaru_require_gifutil_cache;
var exports2 = {};
__wakaru_require_gifutil_cache = exports2;
"use strict";
var fs39 = require("fs");
var ImageQ = require_image_q();
var BitmapImage2 = require_bitmapimage();
var { GifFrame: GifFrame2 } = require_gifframe();
var { GifError: GifError2 } = require_gif();
var { GifCodec: GifCodec2 } = require_gifcodec();
var INVALID_SUFFIXES = [
    ".jpg",
    ".jpeg",
    ".png",
    ".bmp"
];
var defaultCodec = new GifCodec2();
exports2.cloneFrames = function(frames) {
    let clones = [];
    frames.forEach((frame)=>{
        clones.push(new GifFrame2(frame));
    });
    return clones;
};
exports2.getColorInfo = function(frames, maxGlobalIndex) {
    let usesTransparency = false;
    const palettes = [];
    for(let i = 0; i < frames.length; ++i){
        let palette2 = frames[i].getPalette();
        if (palette2.usesTransparency) {
            usesTransparency = true;
        }
        if (palette2.indexCount > 256) {
            throw new GifError2(`Frame ${i} uses more than 256 color indexes`);
        }
        palettes.push(palette2);
    }
    if (maxGlobalIndex === 0) {
        return {
            usesTransparency,
            palettes
        };
    }
    const globalColorSet = new Set();
    palettes.forEach((palette2)=>{
        palette2.colors.forEach((color)=>{
            globalColorSet.add(color);
        });
    });
    let indexCount = globalColorSet.size;
    if (usesTransparency) {
        ++indexCount;
    }
    if (maxGlobalIndex && indexCount > maxGlobalIndex) {
        return {
            usesTransparency,
            palettes
        };
    }
    const colors = new Array(globalColorSet.size);
    const iter = globalColorSet.values();
    for(let i = 0; i < colors.length; ++i){
        colors[i] = iter.next().value;
    }
    colors.sort((a, b2)=>a - b2);
    return {
        colors,
        indexCount,
        usesTransparency,
        palettes
    };
};
exports2.copyAsJimp = function(jimp, bitmapImageToCopy) {
    return exports2.shareAsJimp(jimp, new BitmapImage2(bitmapImageToCopy));
};
exports2.getMaxDimensions = function(frames) {
    let maxWidth = 0, maxHeight = 0;
    frames.forEach((frame)=>{
        const width = frame.xOffset + frame.bitmap.width;
        if (width > maxWidth) {
            maxWidth = width;
        }
        const height = frame.yOffset + frame.bitmap.height;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });
    return {
        maxWidth,
        maxHeight
    };
};
exports2.quantizeDekker = function(imageOrImages, maxColorIndexes, dither) {
    maxColorIndexes = maxColorIndexes || 256;
    _quantize(imageOrImages, "NeuQuantFloat", maxColorIndexes, 0, dither);
};
exports2.quantizeSorokin = function(imageOrImages, maxColorIndexes, histogram, dither) {
    maxColorIndexes = maxColorIndexes || 256;
    histogram = histogram || "min-pop";
    let histogramID;
    switch(histogram){
        case "min-pop":
            histogramID = 2;
            break;
        case "top-pop":
            histogramID = 1;
            break;
        default:
            throw new Error(`Invalid quantizeSorokin histogram '${histogram}'`);
    }
    _quantize(imageOrImages, "RGBQuant", maxColorIndexes, histogramID, dither);
};
exports2.quantizeWu = function(imageOrImages, maxColorIndexes, significantBits, dither) {
    maxColorIndexes = maxColorIndexes || 256;
    significantBits = significantBits || 5;
    if (significantBits < 1 || significantBits > 8) {
        throw new Error("Invalid quantization quality");
    }
    _quantize(imageOrImages, "WuQuant", maxColorIndexes, significantBits, dither);
};
exports2.read = function(source, decoder2) {
    decoder2 = decoder2 || defaultCodec;
    if (Buffer.isBuffer(source)) {
        return decoder2.decodeGif(source);
    }
    return _readBinary(source).then((buffer)=>{
        return decoder2.decodeGif(buffer);
    });
};
exports2.shareAsJimp = function(jimp, bitmapImageToShare) {
    const jimpImage = new jimp(bitmapImageToShare.bitmap.width, bitmapImageToShare.bitmap.height, 0);
    jimpImage.bitmap.data = bitmapImageToShare.bitmap.data;
    return jimpImage;
};
exports2.write = function(path64, frames, spec, encoder2) {
    encoder2 = encoder2 || defaultCodec;
    const matches = path64.match(/\.[a-zA-Z]+$/);
    if (matches !== null && INVALID_SUFFIXES.includes(matches[0].toLowerCase())) {
        throw new Error(`GIF '${path64}' has an unexpected suffix`);
    }
    return encoder2.encodeGif(frames, spec).then((gif2)=>{
        return _writeBinary(path64, gif2.buffer).then(()=>{
            return gif2;
        });
    });
};
function _quantize(imageOrImages, method, maxColorIndexes, modifier, dither) {
    const images = Array.isArray(imageOrImages) ? imageOrImages : [
        imageOrImages
    ];
    const ditherAlgs = [
        "FloydSteinberg",
        "FalseFloydSteinberg",
        "Stucki",
        "Atkinson",
        "Jarvis",
        "Burkes",
        "Sierra",
        "TwoSierra",
        "SierraLite"
    ];
    if (dither) {
        if (ditherAlgs.indexOf(dither.ditherAlgorithm) < 0) {
            throw new Error(`Invalid ditherAlgorithm '${dither.ditherAlgorithm}'`);
        }
        if (dither.serpentine === void 0) {
            dither.serpentine = true;
        }
        if (dither.minimumColorDistanceToDither === void 0) {
            dither.minimumColorDistanceToDither = 0;
        }
        if (dither.calculateErrorLikeGIMP === void 0) {
            dither.calculateErrorLikeGIMP = false;
        }
    }
    const distCalculator = new ImageQ.distance.Euclidean();
    const quantizer = new ImageQ.palette[method](distCalculator, maxColorIndexes, modifier);
    let imageMaker;
    if (dither) {
        imageMaker = new ImageQ.image.ErrorDiffusionArray(distCalculator, ImageQ.image.ErrorDiffusionArrayKernel[dither.ditherAlgorithm], dither.serpentine, dither.minimumColorDistanceToDither, dither.calculateErrorLikeGIMP);
    } else {
        imageMaker = new ImageQ.image.NearestColor(distCalculator);
    }
    const inputContainers = [];
    images.forEach((image2)=>{
        const imageBuf = image2.bitmap.data;
        const inputBuf = new ArrayBuffer(imageBuf.length);
        const inputArray = new Uint32Array(inputBuf);
        for(let bi2 = 0, ai2 = 0; bi2 < imageBuf.length; bi2 += 4, ++ai2){
            inputArray[ai2] = imageBuf.readUInt32LE(bi2, true);
        }
        const inputContainer = ImageQ.utils.PointContainer.fromUint32Array(inputArray, image2.bitmap.width, image2.bitmap.height);
        quantizer.sample(inputContainer);
        inputContainers.push(inputContainer);
    });
    const limitedPalette = quantizer.quantizeSync();
    for(let i = 0; i < images.length; ++i){
        const imageBuf = images[i].bitmap.data;
        const outputContainer = imageMaker.quantizeSync(inputContainers[i], limitedPalette);
        const outputArray = outputContainer.toUint32Array();
        for(let bi2 = 0, ai2 = 0; bi2 < imageBuf.length; bi2 += 4, ++ai2){
            imageBuf.writeUInt32LE(outputArray[ai2], bi2);
        }
    }
}
function _readBinary(path64) {
    return new Promise((resolve36, reject2)=>{
        fs39.readFile(path64, (err, buffer)=>{
            if (err) {
                return reject2(err);
            }
            return resolve36(buffer);
        });
    });
}
function _writeBinary(path64, buffer) {
    return new Promise((resolve36, reject2)=>{
        fs39.writeFile(path64, buffer, (err)=>{
            if (err) {
                return reject2(err);
            }
            return resolve36();
        });
    });
}

return exports2;
}
