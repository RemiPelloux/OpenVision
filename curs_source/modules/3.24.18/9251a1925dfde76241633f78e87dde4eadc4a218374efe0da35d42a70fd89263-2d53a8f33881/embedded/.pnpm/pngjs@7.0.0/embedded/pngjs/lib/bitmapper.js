import { require_interlace } from "./interlace.js";
var __wakaru_require_bitmapper_cache;
export function require_bitmapper() {
if (__wakaru_require_bitmapper_cache) return __wakaru_require_bitmapper_cache;
var exports2 = {};
__wakaru_require_bitmapper_cache = exports2;
"use strict";
var interlaceUtils = require_interlace();
var pixelBppMapper = [
    function() {},
    function(pxData, data, pxPos, rawPos) {
        if (rawPos === data.length) {
            throw new Error("Ran out of data");
        }
        let pixel2 = data[rawPos];
        pxData[pxPos] = pixel2;
        pxData[pxPos + 1] = pixel2;
        pxData[pxPos + 2] = pixel2;
        pxData[pxPos + 3] = 255;
    },
    function(pxData, data, pxPos, rawPos) {
        if (rawPos + 1 >= data.length) {
            throw new Error("Ran out of data");
        }
        let pixel2 = data[rawPos];
        pxData[pxPos] = pixel2;
        pxData[pxPos + 1] = pixel2;
        pxData[pxPos + 2] = pixel2;
        pxData[pxPos + 3] = data[rawPos + 1];
    },
    function(pxData, data, pxPos, rawPos) {
        if (rawPos + 2 >= data.length) {
            throw new Error("Ran out of data");
        }
        pxData[pxPos] = data[rawPos];
        pxData[pxPos + 1] = data[rawPos + 1];
        pxData[pxPos + 2] = data[rawPos + 2];
        pxData[pxPos + 3] = 255;
    },
    function(pxData, data, pxPos, rawPos) {
        if (rawPos + 3 >= data.length) {
            throw new Error("Ran out of data");
        }
        pxData[pxPos] = data[rawPos];
        pxData[pxPos + 1] = data[rawPos + 1];
        pxData[pxPos + 2] = data[rawPos + 2];
        pxData[pxPos + 3] = data[rawPos + 3];
    }
];
var pixelBppCustomMapper = [
    function() {},
    function(pxData, pixelData, pxPos, maxBit) {
        let pixel2 = pixelData[0];
        pxData[pxPos] = pixel2;
        pxData[pxPos + 1] = pixel2;
        pxData[pxPos + 2] = pixel2;
        pxData[pxPos + 3] = maxBit;
    },
    function(pxData, pixelData, pxPos) {
        let pixel2 = pixelData[0];
        pxData[pxPos] = pixel2;
        pxData[pxPos + 1] = pixel2;
        pxData[pxPos + 2] = pixel2;
        pxData[pxPos + 3] = pixelData[1];
    },
    function(pxData, pixelData, pxPos, maxBit) {
        pxData[pxPos] = pixelData[0];
        pxData[pxPos + 1] = pixelData[1];
        pxData[pxPos + 2] = pixelData[2];
        pxData[pxPos + 3] = maxBit;
    },
    function(pxData, pixelData, pxPos) {
        pxData[pxPos] = pixelData[0];
        pxData[pxPos + 1] = pixelData[1];
        pxData[pxPos + 2] = pixelData[2];
        pxData[pxPos + 3] = pixelData[3];
    }
];
function bitRetriever(data, depth) {
    let leftOver = [];
    let i = 0;
    function split() {
        if (i === data.length) {
            throw new Error("Ran out of data");
        }
        let byte = data[i];
        i++;
        let byte8, byte7, byte6, byte5, byte4, byte3, byte2, byte1;
        switch(depth){
            default:
                throw new Error("unrecognised depth");
            case 16:
                byte2 = data[i];
                i++;
                leftOver.push((byte << 8) + byte2);
                break;
            case 4:
                byte2 = byte & 15;
                byte1 = byte >> 4;
                leftOver.push(byte1, byte2);
                break;
            case 2:
                byte4 = byte & 3;
                byte3 = byte >> 2 & 3;
                byte2 = byte >> 4 & 3;
                byte1 = byte >> 6 & 3;
                leftOver.push(byte1, byte2, byte3, byte4);
                break;
            case 1:
                byte8 = byte & 1;
                byte7 = byte >> 1 & 1;
                byte6 = byte >> 2 & 1;
                byte5 = byte >> 3 & 1;
                byte4 = byte >> 4 & 1;
                byte3 = byte >> 5 & 1;
                byte2 = byte >> 6 & 1;
                byte1 = byte >> 7 & 1;
                leftOver.push(byte1, byte2, byte3, byte4, byte5, byte6, byte7, byte8);
                break;
        }
    }
    return {
        get: function(count2) {
            while(leftOver.length < count2){
                split();
            }
            let returner = leftOver.slice(0, count2);
            leftOver = leftOver.slice(count2);
            return returner;
        },
        resetAfterLine: function() {
            leftOver.length = 0;
        },
        end: function() {
            if (i !== data.length) {
                throw new Error("extra data found");
            }
        }
    };
}
function mapImage8Bit(image2, pxData, getPxPos, bpp, data, rawPos) {
    let imageWidth = image2.width;
    let imageHeight = image2.height;
    let imagePass = image2.index;
    for(let y = 0; y < imageHeight; y++){
        for(let x = 0; x < imageWidth; x++){
            let pxPos = getPxPos(x, y, imagePass);
            pixelBppMapper[bpp](pxData, data, pxPos, rawPos);
            rawPos += bpp;
        }
    }
    return rawPos;
}
function mapImageCustomBit(image2, pxData, getPxPos, bpp, bits, maxBit) {
    let imageWidth = image2.width;
    let imageHeight = image2.height;
    let imagePass = image2.index;
    for(let y = 0; y < imageHeight; y++){
        for(let x = 0; x < imageWidth; x++){
            let pixelData = bits.get(bpp);
            let pxPos = getPxPos(x, y, imagePass);
            pixelBppCustomMapper[bpp](pxData, pixelData, pxPos, maxBit);
        }
        bits.resetAfterLine();
    }
}
exports2.dataToBitMap = function(data, bitmapInfo) {
    let width = bitmapInfo.width;
    let height = bitmapInfo.height;
    let depth = bitmapInfo.depth;
    let bpp = bitmapInfo.bpp;
    let interlace = bitmapInfo.interlace;
    let bits;
    if (depth !== 8) {
        bits = bitRetriever(data, depth);
    }
    let pxData;
    if (depth <= 8) {
        pxData = Buffer.alloc(width * height * 4);
    } else {
        pxData = new Uint16Array(width * height * 4);
    }
    let maxBit = Math.pow(2, depth) - 1;
    let rawPos = 0;
    let images;
    let getPxPos;
    if (interlace) {
        images = interlaceUtils.getImagePasses(width, height);
        getPxPos = interlaceUtils.getInterlaceIterator(width, height);
    } else {
        let nonInterlacedPxPos = 0;
        getPxPos = function() {
            let returner = nonInterlacedPxPos;
            nonInterlacedPxPos += 4;
            return returner;
        };
        images = [
            {
                width,
                height
            }
        ];
    }
    for(let imageIndex = 0; imageIndex < images.length; imageIndex++){
        if (depth === 8) {
            rawPos = mapImage8Bit(images[imageIndex], pxData, getPxPos, bpp, data, rawPos);
        } else {
            mapImageCustomBit(images[imageIndex], pxData, getPxPos, bpp, bits, maxBit);
        }
    }
    if (depth === 8) {
        if (rawPos !== data.length) {
            throw new Error("extra data found");
        }
    } else {
        bits.end();
    }
    return pxData;
};

return exports2;
}
